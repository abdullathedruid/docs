# AccountingOracle

- [Source code](https://github.com/lidofinance/lido-dao/blob/master/contracts/0.8.9/oracle/AccountingOracle.sol)
- [Deployed contract](https://etherscan.io/address/0x852deD011285fe67063a08005c71a85690503Cee)

:::note
Some methods, events and exceptions are inherited from the [BaseOracle](https://github.com/lidofinance/lido-dao/blob/master/contracts/0.8.9/oracle/BaseOracle.sol) contract
:::

AccountingOracle is a contract where oracles send addresses' balances controlled by the DAO on the Consensus Layer side.
The balances can go up because of reward accumulation and can go down due to slashing and staking penalties.
Oracles are assigned by the DAO.

Other major responsibilities of AccountingOracle: updating exited and stuck validators, finalizing withdrawal requests.

Oracle daemons push their reports every frame (225 epochs currently, equal to one day) and when the
number of the same reports reaches the [quorum](#getquorum) value, the report is pushed to the
[Lido contract][1].

:::note
However, daily oracle reports shouldn't be taken for granted.
Oracle daemons could stop pushing their reports for extended periods of time in case of no
[finality](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/#finality) on Consensus Layer.
This would ultimately result in no oracle reports and no stETH rebases for this whole period.
:::

[1]: /contracts/lido
[2]: /contracts/lido-locator
[3]: /contracts/legacy-oracle
[4]: /contracts/burner
[5]: /contracts/hash-consensus

Access to lever methods is restricted using the functionality of the
[AccessControlEnumerable](https://github.com/lidofinance/lido-dao/blob/master/contracts/0.8.9/utils/access/AccessControlEnumerable.sol)
contract and a bunch of [granular roles](#permissions).


## Constants

### LIDO()
Returns address of [Lido][1] contract
```solidity
address public immutable LIDO
```

### LOCATOR()
Returns address of [Lido locator][2] contract
```solidity
ILidoLocator public immutable LOCATOR
```

### LEGACY_ORACLE()
Returns address of [Legacy oracle][3] contract
```solidity
address public immutable LEGACY_ORACLE
```

### SECONDS_PER_SLOT()
See https://ethereum.org/en/developers/docs/blocks/#block-time
```solidity
uint256 public immutable SECONDS_PER_SLOT
```
### GENESIS_TIME()
 See https://blog.ethereum.org/2020/11/27/eth2-quick-update-no-21

 Also its presents in the [LegacyOracle](https://etherscan.io/address/0x442af784A788A5bd6F42A01Ebe9F287a871243fb#readProxyContract#F19)
```solidity
uint256 public immutable GENESIS_TIME
```

### EXTRA_DATA_TYPE_STUCK_VALIDATORS()
This type carries the details of stuck validator(s).

```solidity
uint256 public constant EXTRA_DATA_TYPE_STUCK_VALIDATORS = 1
```

### EXTRA_DATA_TYPE_EXITED_VALIDATORS()
This type contains the details of exited validator(s).
```solidity
uint256 public constant EXTRA_DATA_TYPE_EXITED_VALIDATORS = 2
```

### EXTRA_DATA_FORMAT_EMPTY()
The extra data format used to signify that the oracle report contains no extra data.
```solidity
uint256 public constant EXTRA_DATA_FORMAT_EMPTY = 0
```

### EXTRA_DATA_FORMAT_LIST()
The list format for the extra data array. Used when all extra data processing
 fits into a single transaction.

Extra data is passed within a single transaction as a bytearray containing all data items
packed tightly.

Hash is a keccak256 hash calculated over the bytearray items. The Solidity equivalent of
the hash calculation code would be `keccak256(array)`, where `array` has the `bytes` type.
```solidity
uint256 public constant EXTRA_DATA_FORMAT_LIST = 1
```

## ReportData

```solidity
struct ReportData {
    uint256 consensusVersion;
    uint256 refSlot;
    uint256 numValidators;
    uint256 clBalanceGwei;
    uint256[] stakingModuleIdsWithNewlyExitedValidators;
    uint256[] numExitedValidatorsByStakingModule;
    uint256 withdrawalVaultBalance;
    uint256 elRewardsVaultBalance;
    uint256 sharesRequestedToBurn;
    uint256[] withdrawalFinalizationBatches;
    uint256 simulatedShareRate;
    bool isBunkerMode;
    uint256 extraDataFormat;
    bytes32 extraDataHash;
    uint256 extraDataItemsCount;
}
```
**Oracle consensus info**
- `consensusVersion` — Version of the oracle consensus rules. Current version expected by the oracle can be obtained by calling `getConsensusVersion()`.
- `refSlot` — Reference slot for which the report was calculated. If the slot contains a block, the state being reported should include all state changes resulting from that block. The epoch containing the slot should be finalized prior to calculating the report.

**CL values**
- `numValidators` — The number of validators on consensus layer that were ever deposited via Lido as observed at the reference slot.
- `clBalanceGwei` — Cumulative balance of all Lido validators on the consensus layer as observed at the reference slot.
- `stakingModuleIdsWithNewlyExitedValidators` — Ids of staking modules that have more exited validators than the number stored in the respective staking module contract as observed at the reference slot.
- `numExitedValidatorsByStakingModule` — Number of ever exited validators for each of the staking modules from the stakingModuleIdsWithNewlyExitedValidators array as observed at the reference slot.

**EL values**
- `withdrawalVaultBalance` — The ETH balance of the Lido withdrawal vault as observed at the reference slot.
- `elRewardsVaultBalance` — The ETH balance of the Lido execution layer rewards vault as observed at the reference slot.
- `sharesRequestedToBurn` — The shares amount requested to burn through [Burner][4] as observed at the reference slot. The value can be obtained in the following way:
```solidity
(coverSharesToBurn, nonCoverSharesToBurn) = IBurner(burner).getSharesRequestedToBurn()
sharesRequestedToBurn = coverSharesToBurn + nonCoverSharesToBurn
```

**Decision**
- `withdrawalFinalizationBatches` — The ascendingly-sorted array of withdrawal request IDs obtained by calling WithdrawalQueue.calculateFinalizationBatches. Empty array means that no withdrawal requests should be finalized.
- `simulatedShareRate` — The share/ETH rate with the 10^27 precision (i.e. the price of one stETH share in ETH where one ETH is denominated as 10^27) that would be effective as the result of applying this oracle report at the reference slot, with withdrawalFinalizationBatches set to empty array and simulatedShareRate set to 0.
- `isBunkerMode` — Whether, based on the state observed at the reference slot, the protocol should be in the bunker mode.

:::note
Extra data — the oracle information that allows asynchronous processing, potentially in
    chunks, after the main data is processed. The oracle doesn't enforce that extra data
    attached to some data report is processed in full before the processing deadline expires
    or a new data report starts being processed, but enforces that no processing of extra
    data for a report is possible after its processing deadline passes or a new data report
    arrives.

Extra data is an array of items, each item being encoded as follows:

       3 bytes    2 bytes      X bytes
    | itemIndex | itemType | itemPayload |

* `itemIndex` is a 0-based index into the extra data array;
* `itemType` is the type of extra data item;
* `itemPayload` is the item's data which interpretation depends on the item's type.

Items should be sorted ascendingly by the (itemType, ...itemSortingKey) compound key
where `itemSortingKey` calculation depends on the item's type (see below).

---------------------------------------------------------------------------------------

itemType=0 (EXTRA_DATA_TYPE_STUCK_VALIDATORS): stuck validators by node operators.
itemPayload format:

    | 3 bytes  |   8 bytes    |  nodeOpsCount * 8 bytes  |  nodeOpsCount * 16 bytes  |
    | moduleId | nodeOpsCount |      nodeOperatorIds     |   stuckValidatorsCounts   |

`moduleId` is the staking module for which exited keys counts are being reported.

`nodeOperatorIds` contains an array of ids of node operators that have total stuck
    validators counts changed compared to the staking module smart contract storage as
    observed at the reference slot. Each id is a 8-byte uint, ids are packed tightly.

`nodeOpsCount` contains the number of node operator ids contained in the nodeOperatorIds
    array. Thus,

    nodeOpsCount = byteLength(nodeOperatorIds) / 8

`stuckValidatorsCounts` contains an array of stuck validators total counts, as observed at
    the reference slot, for the node operators from the nodeOperatorIds array, in the same
    order. Each count is a 16-byte uint, counts are packed tightly. Thus,

    byteLength(stuckValidatorsCounts) = nodeOpsCount * 16

`nodeOpsCount` must not be greater than maxAccountingExtraDataListItemsCount specified
    in OracleReportSanityChecker contract. If a staking module has more node operators
    with total stuck validators counts changed compared to the staking module smart contract
    storage (as observed at the reference slot), reporting for that module should be split
    into multiple items.

Item sorting key is a compound key consisting of the module id and the first reported
    node operator's id:

    itemSortingKey = (moduleId, nodeOperatorIds[0:8])

---------------------------------------------------------------------------------------

itemType=1 (EXTRA_DATA_TYPE_EXITED_VALIDATORS): exited validators by node operators.

The payload format is exactly the same as for `itemType=EXTRA_DATA_TYPE_STUCK_VALIDATORS`,
    except that, instead of stuck validators counts, exited validators counts are reported.
    The `itemSortingKey` is calculated identically.

---------------------------------------------------------------------------------------

The oracle daemon should report exited/stuck validators counts ONLY for those
    (moduleId, nodeOperatorId) pairs that contain outdated counts in the staking
    module smart contract as observed at the reference slot.

Extra data array can be passed in different formats, see below.

:::
- `extraDataFormat` -  Format of the extra data. Currently, only the `EXTRA_DATA_FORMAT_EMPTY=0` and `EXTRA_DATA_FORMAT_LIST=1` formats are supported. See the constant defining a specific data format for more info.
- `extraDataHash` - Hash of the extra data. See the constant defining a specific extra data format for the info on how to calculate the hash. Must be set to a zero hash if the oracle report contains no extra data.
- `extraDataItemsCount` - Number of the extra data items. Must be set to zero if the oracle report contains no extra data.

## ProcessingState

```solidity
struct ProcessingState {
    uint256 currentFrameRefSlot;
    uint256 processingDeadlineTime;
    bytes32 mainDataHash;
    bool mainDataSubmitted;
    bytes32 extraDataHash;
    uint256 extraDataFormat;
    bool extraDataSubmitted;
    uint256 extraDataItemsCount;
    uint256 extraDataItemsSubmitted;
}
```

- `currentFrameRefSlot` - Reference slot for the current reporting frame.
- `processingDeadlineTime` - The last time at which a data can be submitted for the current reporting frame.
- `mainDataHash` - Hash of the main report data. Zero bytes if consensus on the hash hasn't been reached yet for the current reporting frame.
- `mainDataSubmitted` - Whether the main report data for the current reporting frame has already been submitted.
- `extraDataHash` - Hash of the extra report data. Should be ignored unless `mainDataSubmitted` is true.
- `extraDataFormat` - Format of the extra report data for the current reporting frame. Should be ignored unless `mainDataSubmitted` is true.
- `extraDataSubmitted` - Total number of extra report data items for the current reporting frame. Should be ignored unless `mainDataSubmitted` is true.
- `extraDataItemsSubmitted` - How many extra report data items are already submitted for the current reporting frame.

## View methods

### getConsensusContract()

Returns the address of the [AccountingOracle HashConsensus][5] contract.
```solidity
function getConsensusContract() external view returns (address)
```

### getConsensusReport()
Returns the last consensus report hash and metadata.
```solidity
function getConsensusReport() external view returns (
    bytes32 hash,
    uint256 refSlot,
    uint256 processingDeadlineTime,
    bool processingStarted
)
```

#### Returns

| Name                     | Type      | Description                                                |
| ------------------------ | --------- | ---------------------------------------------------------- |
| `hash`                   | `bytes32` | The last reported hash                 |
| `refSlot`                | `uint256` | The frame's reference slot: if the data the consensus is being reached upon includes or depends on any onchain state, this state should be queried at the reference slot. If the slot contains a block, the state should include all changes from that block.                 |
| `processingDeadlineTime` | `uint256` | Timestamp of the last slot at which a report can be reported and processed |
| `processingStarted`      | `bool`    | Has the processing of the report been started or not                       |

### getConsensusVersion()
Returns the current consensus version expected by the oracle contract.

:::note
Consensus version must change every time consensus rules change, meaning that
 an oracle looking at the same reference slot would calculate a different hash.
:::

```solidity
function getConsensusVersion() external view returns (uint256)
```

### getContractVersion()
Returns the current contract version.
```solidity
function getContractVersion() public view returns (uint256)
```

### getLastProcessingRefSlot()
Returns the last reference slot for which processing of the report was started.
```solidity
function getLastProcessingRefSlot() external view returns (uint256)
```

### getProcessingState()

Returns data processing state for the current reporting frame. See the docs for the [ProcessingState](#processingstate) struct.

```solidity
function getProcessingState() external view returns (ProcessingState memory result)
```

## Methods

### submitReportData()

Submits report data for processing.

```solidity
function submitReportData(ReportData calldata data, uint256 contractVersion)
```

#### Parameters
| Name              | Type          | Description                                                  |
| ------------------ | ------------ | ------------------------------------------------------------ |
| `data`             | `ReportData` | The data. See the [ReportData](#reportdata) structure's docs for details. |
| `contractVersion`  | `uint256`    | Expected version of the oracle contract.                     |

#### Reverts

For more information about reverts, see a separate section [here](#reverts-3)

### submitReportExtraDataEmpty()

Triggers the processing required when no extra data is present in the report, i.e. when extra data format equals EXTRA_DATA_FORMAT_EMPTY.

```solidity
function submitReportExtraDataEmpty()
```

#### Reverts

- Reverts with `SenderNotAllowed()` if sender doesn't have a `SUBMIT_DATA_ROLE` role and sender is not a consensus member.

### submitReportExtraDataList()

Submits report extra data in the EXTRA_DATA_FORMAT_LIST format for processing.


```solidity
function submitReportExtraDataList(bytes calldata items)
```

#### Parameters

| Name    | Type    | Description                                                  |
| ------- | ------- | ------------------------------------------------------------ |
| `items` | `bytes` | The extra data items list. See docs for the [EXTRA_DATA_FORMAT_LIST](#extra_data_format_list) constant for details. |

#### Reverts

- Reverts with `SenderNotAllowed()` if sender doesn't have a `SUBMIT_DATA_ROLE` role and sender is not a consensus member.


### submitConsensusReport()
Called by [AccountingOracle HashConsensus][5] contract to push a consensus report for processing.

:::note
Note that submitting the report doesn't require the processor to start processing it right
 away, this can happen later (see [`getLastProcessingRefSlot`](#getlastprocessingrefslot)). Until processing is started,
 HashConsensus is free to reach consensus on another report for the same reporting frame an
 submit it using this same function, or to lose the consensus on the submitted report,
 notifying the processor via `discardConsensusReport`.
:::

```solidity
function submitConsensusReport(bytes32 reportHash, uint256 refSlot, uint256 deadline)
```

#### Parameters
| Name              | Type          | Description                                                  |
| ------------------ | ------------ | ------------------------------------------------------------ |
| `reportHash` | `bytes32` | Hash of the data calculated for the given reference slot. |
| `refSlot`    | `uint256` | The reference slot the data was calculated for. Reverts if doesn't match the current reference slot.                     |
| `deadline`   | `uint256` | The timestamp of the last slot at which the report can be processed by the report processor contract.                     |



### discardConsensusReport()

Called by HashConsensus contract to notify that the report for the given ref. slot
 is not a consensus report anymore and should be discarded. This can happen when a member
 changes their report, is removed from the set, or when the quorum value gets increased.

Only called when, for the given reference slot:

1. there previously was a consensus report; AND
2. processing of the consensus report hasn't started yet; AND
3. report processing deadline is not expired yet; AND
4. there's no consensus report now (otherwise, [submitConsensusReport](#submitconsensusreport) is called instead).

Can be called even when there's no submitted non-discarded consensus report for the current
reference slot, i.e. can be called multiple times in succession.
```solidity
function discardConsensusReport(uint256 refSlot)
```

### setConsensusContract()

```solidity
function setConsensusContract(address addr)
```

### setConsensusVersion()
Sets the consensus version expected by the oracle contract.

```solidity
function setConsensusVersion(uint256 version)
```

## Permissions

### SUBMIT_DATA_ROLE()
An ACL role granting the permission to submit the data for a committee report.
```solidity
bytes32 public constant SUBMIT_DATA_ROLE = keccak256("SUBMIT_DATA_ROLE");
```

### MANAGE_CONSENSUS_CONTRACT_ROLE()
An ACL role granting the permission to set the consensus contract address by calling setConsensusContract.
```solidity
bytes32 public constant MANAGE_CONSENSUS_CONTRACT_ROLE = keccak256("MANAGE_CONSENSUS_CONTRACT_ROLE");
```

### MANAGE_CONSENSUS_VERSION_ROLE()
An ACL role granting the permission to set the consensus version by calling setConsensusVersion.
```solidity
bytes32 public constant MANAGE_CONSENSUS_VERSION_ROLE = keccak256("MANAGE_CONSENSUS_VERSION_ROLE");
```

## Events

### ExtraDataSubmitted()
Emits when any extra report data for the current reporting frame has been submitted.
```solidity
ExtraDataSubmitted(uint256 indexed refSlot, uint256 itemsProcessed, uint256 itemsCount)
```

### WarnExtraDataIncompleteProcessing()
Emits when try to submit the same report, but not all items are processed yet.
```solidity
event WarnExtraDataIncompleteProcessing(
    uint256 indexed refSlot,
    uint256 processedItemsCount,
    uint256 itemsCount
)
```

### ConsensusHashContractSet()
Emits when a contract hash value is changed.
```solidity
event ConsensusHashContractSet(address indexed addr, address indexed prevAddr)
```

### ConsensusVersionSet()
Emits when a consensus version value is changed.
```solidity
event ConsensusVersionSet(uint256 indexed version, uint256 indexed prevVersion)
```

### ReportSubmitted()
Emits when a new consensus report hash is submitted
```solidity
event ReportSubmitted(uint256 indexed refSlot, bytes32 hash, uint256 processingDeadlineTime)
```

### ReportDiscarded()
Emits when consensus report is discarded.

```solidity
event ReportDiscarded(uint256 indexed refSlot, bytes32 hash)
```

### ProcessingStarted()
Emits when report data is submitted
```solidity
event ProcessingStarted(uint256 indexed refSlot, bytes32 hash)
```

### WarnProcessingMissed()
Emits on [submitConsensusReport](#submitconsensusreport) when `refSlot != prevSubmittedRefSlot && prevProcessingRefSlot != prevSubmittedRefSlot`
```solidity
event WarnProcessingMissed(uint256 indexed refSlot)
```

## Reverts

### submitReportData()

To ensure that the reported data is within possible values, the handler function performs a number of sanity checks. When checking, reverts may occur in different contracts. The diagram shows the interaction with other contracts, and below is a description of where, what and why the reversal occurs.


```mermaid
graph LR;
  A[/  \]--submitReportData-->AccountingOracle--handleConsensusLayerReport--->LegacyOracle;
  AccountingOracle--handleOracleReport-->Lido--handlePostTokenRebase-->LegacyOracle
  AccountingOracle--checkAccountingExtraDataListItemsCount-->OracleReportSanityChecker;
  AccountingOracle--updateExitedValidatorsCountByStakingModule-->StakingRouter;
  AccountingOracle--checkExitedValidatorsRatePerDay-->OracleReportSanityChecker;
```

#### AccountingOracle and BaseOracle contracts

- Reverts with `SenderNotAllowed()` if caller doesn't have a `SUBMIT_DATA_ROLE` role and is not a member of the oracle committee.
- Reverts with `UnexpectedContractVersion(expectedVersion, version)` if provided contract version is different from the current one.
- Reverts with `UnexpectedConsensusVersion(expectedConsensusVersion, consensusVersion)` if provided consensus version is different from the expected one.
- Reverts with `UnexpectedRefSlot(report.refSlot, refSlot)` if provided reference slot differs from the current consensus frame's one.
- Reverts with `UnexpectedDataHash(report.hash, hash)` if keccak256 hash of the ABI-encoded data is different from the last hash.
- Reverts with `NoConsensusReportToProcess()` if report hash data is 0.
- Reverts with `RefSlotAlreadyProcessing()` if report reference slot is equal to previous processing reference slot.
- Reverts with `UnexpectedExtraDataHash(bytes32(0), data.extraDataHash)` if `data.extraDataFormat` is `EXTRA_DATA_FORMAT_EMPTY` and `data.extraDataHash` is 0
- Reverts with `UnexpectedExtraDataItemsCount(0, data.extraDataItemsCount)` if `data.extraDataFormat` is `EXTRA_DATA_FORMAT_EMPTY` and `data.extraDataItemsCount` is not 0
- Reverts with `UnsupportedExtraDataFormat(data.extraDataFormat)` if `data.extraDataFormat` is not `EXTRA_DATA_FORMAT_EMPTY` and not `EXTRA_DATA_FORMAT_LIST`
- Reverts with `ExtraDataItemsCountCannotBeZeroForNonEmptyData()` if `data.extraDataFormat` is `EXTRA_DATA_FORMAT_LIST` and `data.extraDataItemsCount` is 0
- Reverts with `ExtraDataHashCannotBeZeroForNonEmptyData()` if  `data.extraDataFormat` is `EXTRA_DATA_FORMAT_LIST` and `data.extraDataHash` is 0
- Reverts with `InvalidExitedValidatorsData()` if provided exited validators data doesn't meet safety checks.

#### OracleReportSanityChecker
- Reverts with `MaxAccountingExtraDataItemsCountExceeded(uint256 maxItemsCount, uint256 receivedItemsCount)` error when check is failed, more [here](/contracts/oracle-report-sanity-checker.md#checkaccountingextradatalistitemscount)
- Reverts with `ExitedValidatorsLimitExceeded(uint256 limitPerDay, uint256 exitedPerDay)` if provided exited validators data doesn't meet safety checks. (OracleReportSanityChecker)

#### StakingRouter
- Reverts with `ArraysLengthMismatch(_stakingModuleIds.length, _exitedValidatorsCounts.length)` if provided exited validators data doesn't meet safety checks. (StakingRouter)
- Reverts with `ExitedValidatorsCountCannotDecrease()` if provided exited validators data doesn't meet safety checks. (StakingRouter)
- Reverts with `ReportedExitedValidatorsExceedDeposited(uint256 reportedExitedValidatorsCount,uint256 depositedValidatorsCount)` if provided exited validators data doesn't meet safety checks. (StakingRouter)

Other reverts on `Lido.handleOracleReport()`