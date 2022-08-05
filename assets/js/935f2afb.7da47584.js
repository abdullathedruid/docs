"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Introduction","href":"/","docId":"introduction"},{"type":"link","label":"Lido DAO","href":"/lido-dao","docId":"lido-dao"},{"type":"link","label":"stETH/wstETH integration guide","href":"/guides/steth-integration-guide","docId":"guides/steth-integration-guide"},{"type":"category","label":"Guides","items":[{"type":"link","label":"Node Operator Manual","href":"/guides/node-operator-manual","docId":"guides/node-operator-manual"},{"type":"link","label":"Oracle Operator Manual","href":"/guides/oracle-operator-manual","docId":"guides/oracle-operator-manual"},{"type":"link","label":"Deposit Security Committee manual","href":"/guides/deposit-security-manual","docId":"guides/deposit-security-manual"},{"type":"link","label":"Multisig deployment","href":"/guides/multisig-deployment","docId":"guides/multisig-deployment"},{"type":"link","label":"Protocol levers","href":"/guides/protocol-levers","docId":"guides/protocol-levers"},{"type":"link","label":"DAO voting with Etherscan","href":"/guides/etherscan-voting","docId":"guides/etherscan-voting"},{"type":"link","label":"Guide to Easy Track","href":"/guides/easy-track-guide","docId":"guides/easy-track-guide"},{"type":"link","label":"Checking the evm script from Aragon vote","href":"/guides/checking-aragon-vote","docId":"guides/checking-aragon-vote"},{"type":"link","label":"How to verify the multisig is a Gnosis one","href":"/guides/checking-gnosis-safe","docId":"guides/checking-gnosis-safe"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Integrations","items":[{"type":"link","label":"SDKs","href":"/integrations/sdk","docId":"integrations/sdk"},{"type":"link","label":"Subgraph","href":"/integrations/subgraph","docId":"integrations/subgraph"},{"type":"category","label":"AAVE","items":[{"type":"link","label":"Specification","href":"/integrations/aave/specification","docId":"integrations/aave/specification"},{"type":"link","label":"AIP","href":"/integrations/aave/aip","docId":"integrations/aave/aip"}],"collapsible":true,"collapsed":true}],"collapsible":true,"collapsed":true},{"type":"category","label":"Token guides","items":[{"type":"link","label":"StETH superuser functions","href":"/token-guides/steth-superuser-functions","docId":"token-guides/steth-superuser-functions"},{"type":"link","label":"stETH on AAVE caveats","href":"/token-guides/steth-on-aave-caveats","docId":"token-guides/steth-on-aave-caveats"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Contracts","items":[{"type":"link","label":"Lido","href":"/contracts/lido","docId":"contracts/lido"},{"type":"link","label":"LidoOracle","href":"/contracts/lido-oracle","docId":"contracts/lido-oracle"},{"type":"link","label":"StableSwapStateOracle","href":"/contracts/stable-swap-state-oracle","docId":"contracts/stable-swap-state-oracle"},{"type":"link","label":"StEthPriceFeed","href":"/contracts/steth-price-feed","docId":"contracts/steth-price-feed"},{"type":"link","label":"NodeOperatorsRegistry","href":"/contracts/node-operators-registry","docId":"contracts/node-operators-registry"},{"type":"link","label":"WithdrawalsManagerStub","href":"/contracts/withdrawals-manager-stub","docId":"contracts/withdrawals-manager-stub"},{"type":"link","label":"wstETH","href":"/contracts/wsteth","docId":"contracts/wsteth"},{"type":"link","label":"DepositSecurityModule","href":"/contracts/deposit-security-module","docId":"contracts/deposit-security-module"},{"type":"link","label":"SelfOwnedStETHBurner","href":"/contracts/self-owned-steth-burner","docId":"contracts/self-owned-steth-burner"},{"type":"link","label":"CompositePostRebaseBeaconReceiver","href":"/contracts/composite-post-rebase-beacon-receiver","docId":"contracts/composite-post-rebase-beacon-receiver"},{"type":"link","label":"LidoExecutionLayerRewardsVault","href":"/contracts/lido-execution-layer-rewards-vault","docId":"contracts/lido-execution-layer-rewards-vault"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Security","items":[{"type":"link","label":"Bug Bounties with Immunefi","href":"/security/bugbounty","docId":"security/bugbounty"}],"collapsible":true,"collapsed":true},{"type":"link","label":"Deployed Contracts","href":"/deployed-contracts","docId":"deployed-contracts"}]},"docs":{"contracts/composite-post-rebase-beacon-receiver":{"id":"contracts/composite-post-rebase-beacon-receiver","title":"CompositePostRebaseBeaconReceiver","description":"- Source Code","sidebar":"docs"},"contracts/deposit-security-module":{"id":"contracts/deposit-security-module","title":"DepositSecurityModule","description":"- Source Code","sidebar":"docs"},"contracts/lido":{"id":"contracts/lido","title":"Lido","description":"- Source code","sidebar":"docs"},"contracts/lido-execution-layer-rewards-vault":{"id":"contracts/lido-execution-layer-rewards-vault","title":"LidoExecutionLayerRewardsVault","description":"- Source Code","sidebar":"docs"},"contracts/lido-oracle":{"id":"contracts/lido-oracle","title":"LidoOracle","description":"- Source code","sidebar":"docs"},"contracts/node-operators-registry":{"id":"contracts/node-operators-registry","title":"NodeOperatorsRegistry","description":"- Source Code","sidebar":"docs"},"contracts/self-owned-steth-burner":{"id":"contracts/self-owned-steth-burner","title":"SelfOwnedStETHBurner","description":"- Source Code","sidebar":"docs"},"contracts/stable-swap-state-oracle":{"id":"contracts/stable-swap-state-oracle","title":"StableSwapStateOracle","description":"- Source Code","sidebar":"docs"},"contracts/steth-price-feed":{"id":"contracts/steth-price-feed","title":"StEthPriceFeed","description":"- Source Code","sidebar":"docs"},"contracts/withdrawals-manager-stub":{"id":"contracts/withdrawals-manager-stub","title":"WithdrawalsManagerStub","description":"- Source Code","sidebar":"docs"},"contracts/wsteth":{"id":"contracts/wsteth","title":"wstETH","description":"- Source Code","sidebar":"docs"},"deployed-contracts":{"id":"deployed-contracts","title":"Deployed Contracts","description":"Mainnet","sidebar":"docs"},"guides/checking-aragon-vote":{"id":"guides/checking-aragon-vote","title":"Checking the evm script from Aragon vote","description":"We\'ve published a short replit from the script parts we\'re using for preparing the votes//replit.com/@VictorSuzdalev/EVMVoteScriptParser#main.py","sidebar":"docs"},"guides/checking-gnosis-safe":{"id":"guides/checking-gnosis-safe","title":"How to verify the multisig is a Gnosis one","description":"Gnosis multisig contracts are usually deployed from the Gnosis factory contracts. Gnosis has the list of proxy_factory contracts addresses deployed to different networks \u2014 https://github.com/safe-global/safe-deployments/tree/main/src/assets","sidebar":"docs"},"guides/deposit-security-manual":{"id":"guides/deposit-security-manual","title":"Deposit Security Committee manual","description":"This instruction has been prepared for the participants of the Deposit Security Committee and describes the general points, the preparation steps to act as a guardian, and the details of the protection mechanism. The Deposit Security Committee is necessary to prevent the substitution of withdrawal credentials with frontrunning by node operators. Each member of the committee must perform several actions to ensure the security of deposits made by Lido. To participate in the validation, you will need to deploy a lido-council-daemon and prepare a private key for signing messages about the correctness of data or the need to stop deposits in case of attack.","sidebar":"docs"},"guides/easy-track-guide":{"id":"guides/easy-track-guide","title":"Guide to Easy Track","description":"This document is intended for:","sidebar":"docs"},"guides/etherscan-voting":{"id":"guides/etherscan-voting","title":"DAO voting with Etherscan","description":"This how to vote on Lido DAO Aragon with Etherscan UI","sidebar":"docs"},"guides/multisig-deployment":{"id":"guides/multisig-deployment","title":"Multisig deployment","description":"This HOWTO describes deployment of the DAO using a multisig/airgapped signer, step-by-step.","sidebar":"docs"},"guides/node-operator-manual":{"id":"guides/node-operator-manual","title":"Node Operator Manual","description":"This document is intended for those who wish to participate in the Lido protocol as Node Operators \u2014 entities","sidebar":"docs"},"guides/oracle-operator-manual":{"id":"guides/oracle-operator-manual","title":"Oracle Operator Manual","description":"This document is intended for those who wish to participate in the Lido protocol as Oracle\u2014an entity who runs a daemon synchronizing state from Beacon Chain to Execution Layer of the protocol. To be precise, the daemon fetches the number of validators participating in the protocol, as well as their combined balance, from the Beacon \u0421hain and submits this data to the LidoOracle smart contract at the Execution Layer.","sidebar":"docs"},"guides/protocol-levers":{"id":"guides/protocol-levers","title":"Protocol levers","description":"The protocol provides a number of settings controllable by the DAO. Modifying each of them requires","sidebar":"docs"},"guides/steth-integration-guide":{"id":"guides/steth-integration-guide","title":"stETH/wstETH integration guide","description":"This document is intended for developers looking to integrate Lido\'s stETH or wstETH as an asset into their dApp, with a focus on money markets, DEXes and blockchain bridges.","sidebar":"docs"},"integrations/aave/aip":{"id":"integrations/aave/aip","title":"AIP","description":"| title                | status   | author              | shortDescription                                         | discussion                                                        | created    |","sidebar":"docs"},"integrations/aave/specification":{"id":"integrations/aave/specification","title":"Specification","description":"The main goal of integration is to provide the ability to deposit stETH into AAVE and allow to use it as collateral. Borrowing of the stETH (both stable and variable) is not supposed. The motivation behind this design is to encourage using stETH as collateral rather than borrowing it. stETH is pegged steadily to ETH, so using it as collateral involves low liquidation risks.","sidebar":"docs"},"integrations/sdk":{"id":"integrations/sdk","title":"SDKs","description":"Lido UI Library","sidebar":"docs"},"integrations/subgraph":{"id":"integrations/subgraph","title":"Subgraph","description":"Subgraph to index Lido contracts.","sidebar":"docs"},"introduction":{"id":"introduction","title":"Introduction","description":"This documentation is intended to introduce the general user to the project, as well as to serve as a guide for anyone who may be developing software using Lido.","sidebar":"docs"},"lido-dao":{"id":"lido-dao","title":"Lido DAO","description":"The Lido DAO is a Decentralised Autonomous Organisation that manages the liquid staking protocols by deciding on key parameters (e.g., setting fees, assigning node operators and oracles, etc.) through the voting power of governance token (LDO) holders. Also, the DAO will accumulate service fees and spend them on research, development, liquidity mining incentives and protocol upgrades.","sidebar":"docs"},"security/bugbounty":{"id":"security/bugbounty","title":"Bug Bounties with Immunefi","description":"Overview","sidebar":"docs"},"token-guides/steth-on-aave-caveats":{"id":"token-guides/steth-on-aave-caveats","title":"stETH on AAVE caveats","description":"Flashloans","sidebar":"docs"},"token-guides/steth-superuser-functions":{"id":"token-guides/steth-superuser-functions","title":"StETH superuser functions","description":"Superuser privileges and accounts","sidebar":"docs"}}}')}}]);