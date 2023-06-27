"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(n),u=o,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:o,l[1]=r;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(3117),o=(n(7294),n(3905));const i={},l="Multisig deployment",r={unversionedId:"guides/multisig-deployment",id:"guides/multisig-deployment",title:"Multisig deployment",description:"This page is massively outdated with the latest Lido V2 release.",source:"@site/docs/guides/multisig-deployment.md",sourceDirName:"guides",slug:"/guides/multisig-deployment",permalink:"/guides/multisig-deployment",draft:!1,editUrl:"https://github.com/lidofinance/docs/blob/main/docs/guides/multisig-deployment.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Keys API",permalink:"/guides/kapi-guide"},next:{title:"Protocol levers",permalink:"/guides/protocol-levers"}},s={},d=[{value:"Preparation",id:"preparation",level:2},{value:"Deployment steps",id:"deployment-steps",level:2},{value:"1. Deploying the base implementations and the template",id:"1-deploying-the-base-implementations-and-the-template",level:2},{value:"Prepare the network state file",id:"prepare-the-network-state-file",level:3},{value:"Generate transaction data files",id:"generate-transaction-data-files",level:3},{value:"Send the transactions",id:"send-the-transactions",level:3},{value:"Update the network state file",id:"update-the-network-state-file",level:3},{value:"2. Verifying the deployed contracts",id:"2-verifying-the-deployed-contracts",level:2},{value:"3. Register a ENS domain for Lido APM",id:"3-register-a-ens-domain-for-lido-apm",level:2},{value:"4. Deploy Lido frontend apps",id:"4-deploy-lido-frontend-apps",level:2},{value:"5. Deploy Lido APM",id:"5-deploy-lido-apm",level:2},{value:"Using Gnosis Safe",id:"using-gnosis-safe",level:3},{value:"6. Check the deployed APM",id:"6-check-the-deployed-apm",level:2},{value:"7. Create application APM repositories",id:"7-create-application-apm-repositories",level:2},{value:"8. Deploy DAO and its governance token",id:"8-deploy-dao-and-its-governance-token",level:2},{value:"9. Check the deployed DAO",id:"9-check-the-deployed-dao",level:2},{value:"10. Issue DAO governance tokens",id:"10-issue-dao-governance-tokens",level:2},{value:"11. Finalize the DAO",id:"11-finalize-the-dao",level:2},{value:"12. Perform the final checks",id:"12-perform-the-final-checks",level:2}],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"multisig-deployment"},"Multisig deployment"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This page is massively outdated with the latest ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-dao/releases/tag/v2.0.0"},"Lido V2 release"),".")),(0,o.kt)("p",null,"This HOWTO describes deployment of the DAO using a multisig/airgapped signer, step-by-step."),(0,o.kt)("h2",{id:"preparation"},"Preparation"),(0,o.kt)("p",null,"Clone the repo and install the deps:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$ git clone git@github.com:lidofinance/lido-dao.git\n$ cd lido-dao\n$ yarn\n")),(0,o.kt)("p",null,"Running deployment scripts requires RPC connection to an Ethereum client, which can be configured\nby editing the ",(0,o.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")," file. It is already pre-configured for using the Infura provider,\njust copy ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts.sample.json")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts.json")," and edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"infura")," key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "eth": {},\n  "infura": {\n    "projectId": "PUT_YOUR_PROJECT_ID_HERE"\n  }\n}\n')),(0,o.kt)("p",null,"Some of the deployment steps (namely, deploying contracts) cannot be performed from some multisig\nproviders and thus require sending the transactions from a usual address. The repo provides a helper\nfor doing that; if you plan to use it, edit ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts.json")," and put your accounts config under the\n",(0,o.kt)("inlineCode",{parentName:"p"},"eth.<network-name>")," key. If your RPC client provides an unlocked account, use ",(0,o.kt)("inlineCode",{parentName:"p"},"remote")," as the\nvalue (here and later we assume that the target network is named ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "eth": {\n    "mainnet": "remote"\n  },\n  "infura": {\n    "projectId": "PUT_YOUR_PROJECT_ID_HERE"\n  }\n}\n')),(0,o.kt)("p",null,"If you plan to use a BIP-44 mnemonic phrase instead, use the following config shape:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "eth": {\n    "mainnet": {\n      "mnemonic": "YOUR_MNEMONIC_HERE",\n      "path": "m/44\'/60\'/0\'/0",\n      "initialIndex": 0,\n      "count": 1\n    }\n  },\n  "infura": {\n    "projectId": "PUT_YOUR_PROJECT_ID_HERE"\n  }\n}\n')),(0,o.kt)("p",null,"You can test the config correctness by listing the accounts and their balances:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$ yarn hardhat --network mainnet list-accts\n")),(0,o.kt)("h2",{id:"deployment-steps"},"Deployment steps"),(0,o.kt)("p",null,"The deployment process consists of multiple steps. Generally, after each step a set of transaction\nfiles is generated. These transactions need to be executed in a sequential order: only send the\nnext transaction after the previous one is included in a block. After the last transaction from a\ncertain step is included in a block, move to the next step."),(0,o.kt)("p",null,"There's also a couple steps that don't generate any transactions but check the correctness of the\nprevious steps instead."),(0,o.kt)("h2",{id:"1-deploying-the-base-implementations-and-the-template"},"1. Deploying the base implementations and the template"),(0,o.kt)("p",null,"Lido uses upgradeable proxy contracts as storage for the state. Each proxy contract points to an\nimplementation contract providing the code that reads and mutates the state of the proxy.\nImplementation contracts can be upgraded via DAO voting. Implementations are immutable, they are\nonly allowed to modify the caller's (i.e. proxy) contract state."),(0,o.kt)("p",null,"In order to setup the protocol, one needs to deploy initial versions of the implementations. Some\npopular multisig vaults, e.g. Gnosis Safe, don't support deploying new contracts so this has to be\ndone from a usual address."),(0,o.kt)("p",null,"Part of the protocol deployment logic is incorporated in a contract called ",(0,o.kt)("inlineCode",{parentName:"p"},"LidoTemplate.sol"),", which\nalso needs to be deployed prior to running further steps."),(0,o.kt)("h3",{id:"prepare-the-network-state-file"},"Prepare the network state file"),(0,o.kt)("p",null,"The deployment scripts use a JSON file named ",(0,o.kt)("inlineCode",{parentName:"p"},"deployed-<network_name>.json")," to read the initial\nenvironment and protocol configuration and to store data that needs to be persisted between\ndeployment steps. If a deployment step requires anything except RPC endpoint and ETH accounts,\nthen it needs to be specified in the network state file. These files are meant to be added under\nthe source control. If some data is missing from the file, the deployment step will fail with an\nerror saying what's exactly missing."),(0,o.kt)("p",null,"The first step requires the following values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"networkId")," id of the network"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ensAddress")," ENS registry address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"daoFactoryAddress")," Aragon ",(0,o.kt)("inlineCode",{parentName:"li"},"DAOFactory")," contract address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"apmRegistryFactoryAddress")," Aragon ",(0,o.kt)("inlineCode",{parentName:"li"},"APMRegistryFactory")," address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"miniMeTokenFactoryAddress")," Aragon ",(0,o.kt)("inlineCode",{parentName:"li"},"MiniMeTokenFactory")," address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"aragonIDAddress")," aragonID ",(0,o.kt)("inlineCode",{parentName:"li"},"FIFSResolvingRegistrar")," address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"multisigAddress")," the address of the multisig contract that will be used in the next steps\nto perform the further deployment")),(0,o.kt)("p",null,"For example, a network state file for ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet")," will be named ",(0,o.kt)("inlineCode",{parentName:"p"},"deployed-mainnet.json")," and will\ninitially look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "networkId": 1,\n  "ensAddress": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",\n  "daoFactoryAddress": "0x7378ad1ba8f3c8e64bbb2a04473edd35846360f1",\n  "apmRegistryFactoryAddress": "0xa0BC4B67F5FacDE4E50EAFF48691Cfc43F4E280A",\n  "miniMeTokenFactoryAddress": "0x909d05f384d0663ed4be59863815ab43b4f347ec",\n  "aragonIDAddress": "0x546aa2eae2514494eeadb7bbb35243348983c59d",\n  "multisigAddress": "YOUR_MULTISIG_CONTRACT_ADDRESS"\n}\n')),(0,o.kt)("p",null,"Please note that setting ",(0,o.kt)("inlineCode",{parentName:"p"},"multisigAddress")," correctly is very important: this address will own the\ndeployed template contract, and so only this address will be able to perform the deployment steps\nstarting from Lido APM deploy (step 5)."),(0,o.kt)("h3",{id:"generate-transaction-data-files"},"Generate transaction data files"),(0,o.kt)("p",null,"After preparing the values in network state file, generate a set of JSON files with transaction\ndata:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$ yarn hardhat --network mainnet run ./scripts/multisig/01-deploy-lido-template-and-bases.js\n====================\nNetwork ID: 1\nReading network state from /Users/me/lido-dao/deployed-mainnet.json...\n====================\nSaving deploy TX data for LidoTemplate to tx-01-1-deploy-template.json\nSaving deploy TX data for Lido to tx-01-2-deploy-lido-base.json\nSaving deploy TX data for LidoOracle to tx-01-3-deploy-oracle-base.json\nSaving deploy TX data for NodeOperatorsRegistry to tx-01-4-deploy-nops-base.json\n====================\nBefore continuing the deployment, please send all contract creation transactions\nthat you can find in the files listed above. You may use a multisig address\nif it supports deploying new contract instances.\n====================\nWriting network state to /Users/me/lido-dao/deployed-mainnet.json...\nAll done!\n")),(0,o.kt)("h3",{id:"send-the-transactions"},"Send the transactions"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"tx")," helper for sending the transactions from files. It supports the following flags:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--from")," the sender address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--file")," the TX file which may contain the following fields: ",(0,o.kt)("inlineCode",{parentName:"li"},"to"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"value"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"data"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"gas"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"from")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--gas-price")," gas price in wei (optional)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--nonce")," sender nonce (optional)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--wait")," the number of seconds to wait before sending the tx (optional, default 5)")),(0,o.kt)("p",null,"Run the following to deploy the implementations and the template:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$ yarn hardhat --network mainnet tx --from $DEPLOYER --file tx-01-1-deploy-template.json\n$ yarn hardhat --network mainnet tx --from $DEPLOYER --file tx-01-2-deploy-lido-base.json\n$ yarn hardhat --network mainnet tx --from $DEPLOYER --file tx-01-3-deploy-oracle-base.json\n$ yarn hardhat --network mainnet tx --from $DEPLOYER --file tx-01-4-deploy-nops-base.json\n")),(0,o.kt)("p",null,"You're not required to use this helper to send the transactions defined in the generated files;\nit's there for the convenience only."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'This step is an exception from the "sequential transactions" rule: you can send all four\ntransactions in parallel from different addresses.')),(0,o.kt)("h3",{id:"update-the-network-state-file"},"Update the network state file"),(0,o.kt)("p",null,"After all four transactions are included in the blockchain, update the network state file with\nthe following values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"daoTemplateDeployTx")," hash of the TX sent from the ",(0,o.kt)("inlineCode",{parentName:"li"},"tx-01-1-deploy-template.json")," file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lidoBaseDeployTx")," hash of the TX sent from the ",(0,o.kt)("inlineCode",{parentName:"li"},"tx-01-2-deploy-lido-base.json")," file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"oracleBaseDeployTx")," hash of the TX sent from the ",(0,o.kt)("inlineCode",{parentName:"li"},"tx-01-3-deploy-oracle-base.json")," file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nodeOperatorsRegistryBaseDeployTx")," hash of the TX sent from the ",(0,o.kt)("inlineCode",{parentName:"li"},"tx-01-4-deploy-nops-base.json")," file")),(0,o.kt)("h2",{id:"2-verifying-the-deployed-contracts"},"2. Verifying the deployed contracts"),(0,o.kt)("p",null,"Run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$ yarn hardhat --network mainnet run ./scripts/multisig/02-obtain-deployed-instances.js\n")),(0,o.kt)("p",null,"This step will verify the deployed contracts and add the following fields to the netwotk state file:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"daoTemplateAddress")," address of the ",(0,o.kt)("inlineCode",{parentName:"li"},"LidoTemplate")," contract"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app:lido.baseAddress")," address of the ",(0,o.kt)("inlineCode",{parentName:"li"},"Lido")," implementation contract"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app:oracle.baseAddress")," address of the ",(0,o.kt)("inlineCode",{parentName:"li"},"LidoOracle")," implementation contract"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app:node-operators-registry.baseAddress")," address of the ",(0,o.kt)("inlineCode",{parentName:"li"},"NodeOperatorsRegistry")," implementation contract")),(0,o.kt)("h2",{id:"3-register-a-ens-domain-for-lido-apm"},"3. Register a ENS domain for Lido APM"),(0,o.kt)("p",null,"This ENS domain is needed for Aragon Package Manager (APM) instance that the protocol will use for\nthe upgrade mechanics. Prior to running the step, add the following keys to the network state file:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lidoApmEnsName")," the second-level ENS domain that APM will use to register packages"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lidoApmEnsRegDurationSec")," the domain lease duration in seconds")),(0,o.kt)("p",null,"Then, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$ yarn hardhat --network mainnet run ./scripts/multisig/03-register-ens-domain.js\n...\n====================\nSaving data for commit transaction to tx-02-1-commit-ens-registration.json (projected gas usage is 53667)\nSaving data for register transaction to tx-02-2-make-ens-registration.json\n====================\nBefore continuing the deployment, please send all transactions listed above.\n\nMake sure to send the second transaction at least 60 seconds after the\nfirst one is included in a block, but no more than 86400 seconds after that.\n====================\n")),(0,o.kt)("p",null,"The step will generate two transaction files. You'll need to send these transactions one after\nanother, waiting no less than one minite between them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$ yarn hardhat --network mainnet tx --from $DEPLOYER --file tx-02-1-commit-ens-registration.json\n$ sleep 60\n$ yarn hardhat --network mainnet tx --from $DEPLOYER --file tx-02-2-make-ens-registration.json\n")),(0,o.kt)("h2",{id:"4-deploy-lido-frontend-apps"},"4. Deploy Lido frontend apps"),(0,o.kt)("p",null,"The Lido DAO includes frontend apps for DAO governance and protocol management. They are deployed\nto IPFS, so you'll need to specify ",(0,o.kt)("inlineCode",{parentName:"p"},"ipfsAPI")," key in the network state file pointing to an IPFS\nclient API endpoint, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'"ipfsAPI": "http://localhost:5001/api/v0"'),". Then, run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$ yarn hardhat --network mainnet run ./scripts/multisig/04-publish-app-frontends.js\n")),(0,o.kt)("p",null,"Make sure that either the IPFS node you're using is going to be permanently up and publicly\navailable, or that you pin the uploaded content to some other permanent public node."),(0,o.kt)("p",null,"This step will add ",(0,o.kt)("inlineCode",{parentName:"p"},"ipfsCid")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"contentURI")," subkeys for all three Lido apps (",(0,o.kt)("inlineCode",{parentName:"p"},"app:lido"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"app:oracle"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"app:node-operators-registry"),") in the network state file. The first key is the IPFS\nidentifier for the root entry of the app frontend, and ",(0,o.kt)("inlineCode",{parentName:"p"},"contentURI")," is the same key encoded to an\nAragon-specific format."),(0,o.kt)("h2",{id:"5-deploy-lido-apm"},"5. Deploy Lido APM"),(0,o.kt)("p",null,"Run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$ yarn hardhat --network mainnet run ./scripts/multisig/05-deploy-apm.js\n...\n====================\nParent domain: eth 0x93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae\nSubdomain label: lidopm-pre 0x1353eb779a45ed66bdb49e45e006df81a69d9f73067e846003b5bb00984191d4\n====================\nSaving data for APM deploy transaction to tx-03-deploy-apm.json (projected gas usage is 6263517)\n====================\n")),(0,o.kt)("p",null,"The step will generate a transaction file; you'll need to send this transaction from the contract\nat ",(0,o.kt)("inlineCode",{parentName:"p"},"multisigAddress"),". After the transaction is included in a block, move to the next step."),(0,o.kt)("h3",{id:"using-gnosis-safe"},"Using Gnosis Safe"),(0,o.kt)("p",null,"If you're using Gnosis Safe, this can be done by choosing ",(0,o.kt)("inlineCode",{parentName:"p"},"New Transaction > Contract Interaction"),"\nand enabling the ",(0,o.kt)("inlineCode",{parentName:"p"},"Use custom data (hex encoded)")," option in the popped dialog. Then, copy the contents\nof the ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," key from the transaction JSON file to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Recipient*")," field, the contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),"\nfield to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Value*")," field (enter ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," if there's no ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," key in the transaction JSON), and the\ncontents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," field to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Data (hex encoded)*")," field."),(0,o.kt)("p",null,"Make sure to check the gas limit of the transaction: Gnosis Safe frequently sets it too low. As a\nrule of thumb, set it to the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"gas")," key in the transaction JSON file plus ",(0,o.kt)("inlineCode",{parentName:"p"},"1500000")," (the\nadditional gas is used to handle multisig logic)."),(0,o.kt)("h2",{id:"6-check-the-deployed-apm"},"6. Check the deployed APM"),(0,o.kt)("p",null,"Run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$ yarn hardhat --network mainnet run ./scripts/multisig/06-obtain-deployed-apm.js\n")),(0,o.kt)("p",null,"Make sure that it finishes without errors and move to the next step. The following field will\nbe added to the network state file:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lidoApmAddress")," the address of the Lido APM controlling ",(0,o.kt)("inlineCode",{parentName:"li"},"lidoApmEnsName")," ENS domain.")),(0,o.kt)("h2",{id:"7-create-application-apm-repositories"},"7. Create application APM repositories"),(0,o.kt)("p",null,"Run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"yarn hardhat --network mainnet run ./scripts/multisig/07-create-app-repos.js\n...\n====================\nSaving data for createRepos transaction to tx-04-create-app-repos.json (projected gas usage is 7160587)\n====================\n")),(0,o.kt)("p",null,"The step will generate a transaction file; you'll need to send this transaction from the contract\nat ",(0,o.kt)("inlineCode",{parentName:"p"},"multisigAddress"),". After the transaction is included in a block, move to the next step."),(0,o.kt)("h2",{id:"8-deploy-dao-and-its-governance-token"},"8. Deploy DAO and its governance token"),(0,o.kt)("p",null,"This step will deploy the instances of the DAO and governance token. You'll need to add a field\ncalled ",(0,o.kt)("inlineCode",{parentName:"p"},"daoInitialSettings")," to the network state file prior to running the step:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'  // ...\n  "daoInitialSettings": {\n    // Governance token name/symbol; cannot be changed post-deploy\n    "token": {\n      "name": "Lido DAO Token",\n      "symbol": "LDO"\n    },\n    // Beacon chain spec; can be changed via DAO voting\n    "beaconSpec": {\n      "depositContractAddress": "0x00000000219ab540356cBB839Cbe05303d7705Fa",\n      "slotsPerEpoch": 32,\n      "secondsPerSlot": 12,\n      "genesisTime": 1606824023,\n      "epochsPerFrame": 225 // Lido oracles report once per epochsPerFrame epochs\n    },\n    // DAO voting configuration (Aragon Voting app)\n    "voting": {\n      "minSupportRequired": "500000000000000000", // 1e18 === 100%\n      "minAcceptanceQuorum": "50000000000000000", // 1e18 === 100%\n      "voteDuration": 172800 // in seconds\n    },\n    // Protocol fee configuration; can be changed via DAO voting\n    "fee": {\n      "totalPercent": 10,\n      "treasuryPercent": 0,\n      "insurancePercent": 50,\n      "nodeOperatorsPercent": 50\n    }\n  }\n  // ...\n')),(0,o.kt)("p",null,"Then, run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$ yarn hardhat --network mainnet run ./scripts/multisig/08-deploy-dao.js\n...\nSaving data for newDAO transaction to tx-05-deploy-dao.json (projected gas usage is 7118882)\n")),(0,o.kt)("p",null,"Send the generated transaction from the contract at ",(0,o.kt)("inlineCode",{parentName:"p"},"multisigAddress"),". After the transaction\nis included in a block, move to the next step."),(0,o.kt)("h2",{id:"9-check-the-deployed-dao"},"9. Check the deployed DAO"),(0,o.kt)("p",null,"Run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"yarn hardhat --network mainnet run ./scripts/multisig/09-obtain-deployed-dao.js\n")),(0,o.kt)("p",null,"Make sure that it finishes without errors and move to the next step. The following fields will\nbe added to the network state file:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"daoAddress")," the address of the DAO instance;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"daoTokenAddress")," the address of the DAO governance token;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"proxyAddress")," keys under ",(0,o.kt)("inlineCode",{parentName:"li"},"app:*")," keys: adresses of the app instances.")),(0,o.kt)("h2",{id:"10-issue-dao-governance-tokens"},"10. Issue DAO governance tokens"),(0,o.kt)("p",null,"Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"vestingParams")," key to the network state file containing the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'  // ...\n  "vestingParams": {\n    // unvested tokens will be held on the DAO Agent app\n    "unvestedTokensAmount": "10000000000000000000000",\n    // token holder assresses and their respective amounts\n    "holders": {\n      "0xaabbcc0000000000000000000000000000000000": "100000000000000000000",\n      // ...\n    },\n    // Vesting start date\n    "start": 1608213253,\n    // Vesting cliff date\n    "cliff": 1608213253,\n    // Vesting end date\n    "end": 1608501253,\n    // Whether vestings should be revokable by the DAO\n    "revokable": false\n    // See https://github.com/aragon/aragon-apps/blob/master/apps/token-manager/contracts/TokenManager.sol\n  }\n  // ...\n')),(0,o.kt)("p",null,"Then, run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"yarn hardhat --network mainnet run ./scripts/multisig/10-issue-tokens.js\n...\n====================\nTotal batches: 2\nSaving data for issueTokens (batch 1) transaction to tx-06-1-issue-tokens.json (projected gas usage is 6478755)\nSaving data for issueTokens (batch 2) transaction to tx-06-2-issue-tokens.json\n")),(0,o.kt)("p",null,"Send the generated transactions sequentially from the contract at ",(0,o.kt)("inlineCode",{parentName:"p"},"multisigAddress"),", waiting until\nthe first one is included in a block before sending the second one. After the second transaction\nis included in a block, move to the next step."),(0,o.kt)("h2",{id:"11-finalize-the-dao"},"11. Finalize the DAO"),(0,o.kt)("p",null,"Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"daoAragonId")," key to the network state file, setting it to a name that the DAO will be\nregistered by in aragonID, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"<daoAragonId>.aragonid.eth")," will resolve to the ",(0,o.kt)("inlineCode",{parentName:"p"},"daoAddress"),".\nRun the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"yarn hardhat --network mainnet run ./scripts/multisig/11-finalize-dao.js\n...\n====================\nSaving data for finalizeDAO transaction to tx-07-finalize-dao.json (projected gas usage is 5011582)\n")),(0,o.kt)("p",null,"Send the generated transaction from the contract at ",(0,o.kt)("inlineCode",{parentName:"p"},"multisigAddress"),". After the transaction\nis included in a block, move to the next step."),(0,o.kt)("h2",{id:"12-perform-the-final-checks"},"12. Perform the final checks"),(0,o.kt)("p",null,"At this point, the DAO is fully deployed. Run the following to verify the correctness of the\nconfiguration and permissions setup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"yarn hardhat --network mainnet run ./scripts/multisig/12-check-dao.js\n")),(0,o.kt)("p",null,"If there's some error, it will be printed and further checks will be cancelled. This step only\nrequires the following fields to be defined in the network state file:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ensAddress")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lidoApmEnsName")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"daoAragonId")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"vestingParams")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"daoInitialSettings")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"daoTemplateAddress"))))}m.isMDXComponent=!0}}]);