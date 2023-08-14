# ValidatorsExitBusOracle

- [Source code](https://github.com/lidofinance/lido-dao/blob/master/contracts/0.8.9/oracle/ValidatorsExitBusOracle.sol)
- [Deployed contract](https://etherscan.io/address/0x0De4Ea0184c2ad0BacA7183356Aea5B8d5Bf5c6e)

A contract implementing an on-chain message bus between the protocol off-chain oracle and off-chain observers,
with the main goal of delivering validator exit requests to the Lido-participating node operators.

The requests should be processed timely according to the ratified [Lido on Ethereum Validator Exits Policy V1.0](https://snapshot.org/#/lido-snapshot.eth/proposal/0xa4eb1220a15d46a1825d5a0f44de1b34644d4aa6bb95f910b86b29bb7654e330).

Access to lever methods is restricted using the functionality of the
[AccessControlEnumerable](https://github.com/lidofinance/lido-dao/blob/master/contracts/0.8.9/utils/access/AccessControlEnumerable.sol)
contract and a bunch of [granular roles](#permissions).

[1]: /contracts/hash-consensus

## Constants

### DATA_FORMAT_LIST()
The list format of the validator exit requests data. Used when all requests fit into a single transaction.

:::note
Each validator exit request is described by the following 64-byte array:

    MSB <------------------------------------------------------- LSB
    |  3 bytes   |  5 bytes   |     8 bytes      |    48 bytes     |
    |  moduleId  |  nodeOpId  |  validatorIndex  | validatorPubkey |

 All requests are tightly packed into a byte array where requests follow
 one another without any separator or padding, and passed to the `data`
 field of the report structure.

Requests must be sorted in the ascending order by the following compound
key: (moduleId, nodeOpId, validatorIndex).
:::

```solidity
uint256 public constant DATA_FORMAT_LIST = 1
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

### PAUSE_INFINITELY()
Special value for the infinite pause
```solidity
uint256 public constant PAUSE_INFINITELY = type(uint256).max
```

## ProcessingState

```solidity
struct ProcessingState {
    uint256 currentFrameRefSlot;
    uint256 processingDeadlineTime;
    bytes32 dataHash;
    bool dataSubmitted;
    uint256 dataFormat;
    uint256 requestsCount;
    uint256 requestsSubmitted;
}
```
- `currentFrameRefSlot` — Reference slot for the current reporting frame.
- `processingDeadlineTime` — The last time at which a report data can be submitted for the current reporting frame.
- `dataHash` — Hash of the report data. Zero bytes if consensus on the hash hasn't been reached yet for the current reporting frame.
- `dataSubmitted` — Whether any report data for the for the current reporting frame has been already submitted.
- `dataFormat` — Format of the report data for the current reporting frame.
- `requestsCount` — Total number of validator exit requests for the current reporting frame.
- `requestsSubmitted` — How many validator exit requests are already submitted for the current reporting frame.

## ReportData

```solidity
struct ReportData {
    uint256 consensusVersion;
    uint256 refSlot;
    uint256 requestsCount;
    uint256 dataFormat;
    bytes data;
}
```
**Oracle consensus info**
- `consensusVersion` — Version of the oracle consensus rules. Current version expected by the oracle can be obtained by calling getConsensusVersion().
- `refSlot` — Reference slot for which the report was calculated. If the slot contains a block, the state being reported should include all state changes resulting from that block. The epoch containing the slot should be finalized prior to calculating the report.

**Requests data**
- `requestsCount` — Total number of validator exit requests in this report. Must not be greater
         than limit checked in OracleReportSanityChecker.checkExitBusOracleReport.
- `dataFormat` — Format of the validator exit requests data. Currently, only the `DATA_FORMAT_LIST=1` is supported.
- `data` — Validator exit requests data. Can differ based on the data format, see the constant defining a specific data format [here](#data_format_list) for more info.

## View methods

### getTotalRequestsProcessed()
Returns the total number of validator exit requests ever processed across all received reports.

```solidity
function getTotalRequestsProcessed() external view returns (uint256)
```

### getLastRequestedValidatorIndices()
Returns the latest validator indices that were requested to exit for the given
`nodeOpIds` in the given `moduleId`. For node operators that were never requested to exit
any validator, index is set to -1.
```solidity
function getLastRequestedValidatorIndices(uint256 moduleId, uint256[] calldata nodeOpIds)
        external view returns (int256[] memory)
```

#### Parameters
| Name        | Type      | Description                                 |
| ----------- | --------- | ------------------------------------------- |
| `moduleId`  | `uint256` | ID of the staking module.                   |
| `nodeOpIds` | `uint256` | IDs of the staking module's node operators. |

#### Reverts
- Reverts with `ArgumentOutOfBounds()` if moduleId > UINT24_MAX
- Reverts with `ArgumentOutOfBounds()` if nodeOpId > UINT40_MAX

### getProcessingState()
Returns data processing state for the current reporting frame. See the docs for the [ProcessingState](#processingstate) struct.
```solidity
function getProcessingState() external view returns (ProcessingState memory result)
```

### getConsensusContract()

Returns the address of the [ValidatorsExitBusOracle HashConsensus][1] contract.
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

#### Returns

| Name                     | Type      | Description                                                |
| ------------------------ | --------- | ---------------------------------------------------------- |
| `hash`                   | `bytes32` | The last reported hash                 |
| `refSlot`                | `uint256` | The frame's reference slot: if the data the consensus is being reached upon includes or depends on any onchain state, this state should be queried at the reference slot. If the slot contains a block, the state should include all changes from that block.                 |
| `processingDeadlineTime` | `uint256` | Timestamp of the last slot at which a report can be reported and processed |
| `processingStarted`      | `bool`    | Has the processing of the report been started or not                       |

### getResumeSinceTimestamp()
Returns one of:
 - PAUSE_INFINITELY if paused infinitely returns
 - first second when get contract get resumed if paused for specific duration
 - some timestamp in past if not paused
```solidity
function getResumeSinceTimestamp() external view returns (uint256)
```

### isPaused()
Returns whether the contract is paused
```solidity
function isPaused() public view returns (bool)
```

## Methods

### submitReportData()
Submits report data for processing.

```solidity
function submitReportData(ReportData calldata data, uint256 contractVersion)
        external whenResumed
```

#### Parameters
| Name        | Type      | Description                                                           |
| ----------- | --------- | --------------------------------------------------------------------- |
| `data`            | `ReportData` | The data. See the `ReportData` structure's docs for details. |
| `contractVersion` | `uint256`    | Expected version of the oracle contract.                     |

#### Reverts

- Reverts with `SenderNotAllowed()` if caller doesn't have a `SUBMIT_DATA_ROLE` role and is not a member of the oracle committee.
- Reverts with `UnexpectedContractVersion(expectedVersion, version)` if provided contract version is different from the current one.
- Reverts with `UnexpectedConsensusVersion(expectedConsensusVersion, consensusVersion)` if provided consensus version is different from the expected one.
- Reverts with `UnexpectedRefSlot(report.refSlot, refSlot)` if provided reference slot differs from the current consensus frame's one.
- Reverts with `UnexpectedDataHash(report.hash, hash)` if keccak256 hash of the ABI-encoded data is different from the last hash.
- Reverts with `NoConsensusReportToProcess()` if report hash data is 0.
- Reverts with `RefSlotAlreadyProcessing()` if report reference slot is equal to previous processing reference slot.
- Reverts with `InvalidRequestsData()` if moduleId in data is 0
- Reverts with `InvalidRequestsDataLength()` if data is packed incorrectly
- Reverts with `UnexpectedRequestsDataLength()` if length of packed data is not equal `data.requestsCount`
- Reverts with `InvalidRequestsDataSortOrder` when data is not sorted
- Reverts with `NodeOpValidatorIndexMustIncrease(
        uint256 moduleId,
        uint256 nodeOpId,
        uint256 prevRequestedValidatorIndex,
        uint256 requestedValidatorIndex
    )` if requested validator index <= last requested index from the same module

### pauseFor()
Pause accepting validator exit requests util in after duration
```solidity
function pauseFor(uint256 _duration) external
```

#### Parameters
| Name        | Type      | Description                                                    |
| ----------- | --------- | -------------------------------------------------------------- |
| `_duration` | `uint256` | pause duration, seconds (use `PAUSE_INFINITELY` for unlimited) |

#### Reverts
- Reverts with `ResumedExpected()` if contract is already paused
- Reverts with `AccessControl:...` reason if sender has no `PAUSE_ROLE`
- Reverts with `ZeroPauseDuration()` if zero duration is passed

### pauseUntil()
Pause accepting report data
```solidity
function pauseUntil(uint256 _pauseUntilInclusive) external
```

#### Parameters
| Name                   | Type      | Description                    |
| ---------------------- | --------- | ------------------------------ |
| `_pauseUntilInclusive` | `uint256` | the last second to pause until |

#### Reverts
- Reverts with `ResumeSinceInPast()` if the timestamp is in the past
- Reverts with `AccessControl:...` reason if sender has no `PAUSE_ROLE`
- Reverts with `ResumedExpected()` if contract is already paused

### resume()
Resume accepting validator exit requests
```solidity
function resume() external whenPaused
```

#### Reverts
- Reverts with `PausedExpected()` if contract is already resumed
- Reverts with `AccessControl:...` reason if sender has no `RESUME_ROLE`

## Permissions

### SUBMIT_DATA_ROLE()
An ACL role granting the permission to submit the data for a committee report.
```solidity
bytes32 public constant SUBMIT_DATA_ROLE = keccak256("SUBMIT_DATA_ROLE")
```

### PAUSE_ROLE()
An ACL role granting the permission to pause accepting validator exit requests
```solidity
bytes32 public constant PAUSE_ROLE = keccak256("PAUSE_ROLE")
```

### RESUME_ROLE()
An ACL role granting the permission to resume accepting validator exit requests
```solidity
bytes32 public constant RESUME_ROLE = keccak256("RESUME_ROLE")
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

### ValidatorExitRequest()
Emits when submits a new report data for processing.

```solidity
event ValidatorExitRequest(
    uint256 indexed stakingModuleId,
    uint256 indexed nodeOperatorId,
    uint256 indexed validatorIndex,
    bytes validatorPubkey,
    uint256 timestamp
)
```

### WarnDataIncompleteProcessing()
Emits when try to submit the same report, but not all items are processed yet.

```solidity
event WarnDataIncompleteProcessing(
    uint256 indexed refSlot,
    uint256 requestsProcessed,
    uint256 requestsCount
)
```

### Paused()
Emits when paused by the `pauseFor` or `pauseUntil` call
```solidity
event Paused(uint256 duration)
```

### Resumed()
Emitted when resumed by the `resume` call
```solidity
event Resumed()
```