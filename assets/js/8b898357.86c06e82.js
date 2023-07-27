"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(3117),r=(n(7294),n(3905));const o={},s="Exit Message Generation & Signing",i={unversionedId:"guides/node-operators/exits/exit-message-generation-signing",id:"guides/node-operators/exits/exit-message-generation-signing",title:"Exit Message Generation & Signing",description:"Keystores or Dirk",source:"@site/docs/guides/node-operators/exits/exit-message-generation-signing.md",sourceDirName:"guides/node-operators/exits",slug:"/guides/node-operators/exits/exit-message-generation-signing",permalink:"/guides/node-operators/exits/exit-message-generation-signing",draft:!1,editUrl:"https://github.com/lidofinance/docs/blob/main/docs/guides/node-operators/exits/exit-message-generation-signing.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"General Information",permalink:"/guides/node-operators/exits/general-information"},next:{title:"Flow Examples",permalink:"/guides/node-operators/exits/flow-examples"}},l={},p=[{value:"Keystores or Dirk",id:"keystores-or-dirk",level:2},{value:"For Keystores:",id:"for-keystores",level:3},{value:"For Dirk:",id:"for-dirk",level:3},{value:"For Web3Signer or Proprietary Signers",id:"for-web3signer-or-proprietary-signers",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"exit-message-generation--signing"},"Exit Message Generation & Signing"),(0,r.kt)("h2",{id:"keystores-or-dirk"},"Keystores or Dirk"),(0,r.kt)("p",null,"If your validator signing keys are in ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2335"},"keystores")," or in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/attestantio/dirk"},"Dirk")," remote keymanager, the easiest method is to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wealdtech/ethdo"},"ethdo"),"."),(0,r.kt)("h3",{id:"for-keystores"},"For Keystores:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create an ethdo wallet"),(0,r.kt)("li",{parentName:"ol"},"Import keystores"),(0,r.kt)("li",{parentName:"ol"},"Generate an exit"),(0,r.kt)("li",{parentName:"ol"},"Erase the wallet if it's no longer needed")),(0,r.kt)("p",null,"Create a new wallet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./ethdo --base-dir=./temp wallet create --wallet=wallet\n")),(0,r.kt)("p",null,"Add key from a keystore:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./ethdo --base-dir=./temp account import --account=wallet/account --keystore=./ethdo/keystore.json --keystore-passphrase=12345678 --passphrase=pass\n")),(0,r.kt)("p",null,"Generate and sign an exit message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./ethdo --base-dir=./temp validator exit --account=wallet/account --passphrase=pass --json --connection=http://consensus_node:5052\n")),(0,r.kt)("p",null,"ethdo will print out the exit message to stdout. You can save the file ",(0,r.kt)("inlineCode",{parentName:"p"},"ethdo ... > 0x123.json"),"."),(0,r.kt)("p",null,"After we are done, delete the wallet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./ethdo --base-dir=./temp wallet delete --wallet=wallet\n")),(0,r.kt)("p",null,"If you are looking for a way to automate the process, check out ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/kolyasapphire/d2bafce3cdd04305bc109cbd49728ffe"},"this example"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Although keystores are encrypted, it is highly recommended to interact with them in a secure environment without internet access.")),(0,r.kt)("p",null,"ethdo allows you to prepare everything necessary for offline exit message generation in one convenient file. For this, on a machine with access to a Consensus Node run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./ethdo validator exit --prepare-offline --connection=http://consensus_node:5052 --timeout=300s\n")),(0,r.kt)("p",null,"This command will pull validators info, fork versions, current epoch and other chain data for offline exit message generation and save it to ",(0,r.kt)("inlineCode",{parentName:"p"},"offline-preparation.json")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ethdo")," directory."),(0,r.kt)("p",null,"This file can be then transferred to a secure machine along with ",(0,r.kt)("inlineCode",{parentName:"p"},"ethdo")," binary, for example on a encrypted USB drive."),(0,r.kt)("p",null,"On the secure machine, put ",(0,r.kt)("inlineCode",{parentName:"p"},"offline-preparation.json")," into the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"ethdo")," is ran from, use ",(0,r.kt)("inlineCode",{parentName:"p"},"--offline")," argument for the ",(0,r.kt)("inlineCode",{parentName:"p"},"validator exit")," command and remove ",(0,r.kt)("inlineCode",{parentName:"p"},"--connection"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./ethdo --base-dir=./temp validator exit --account=wallet/account --passphrase=pass --json --offline\n")),(0,r.kt)("h3",{id:"for-dirk"},"For Dirk:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./ethdo --remote=server.example.com:9091 --client-cert=client.crt --client-key=client.key --server-ca-cert=dirk_authority.crt validator exit --account=Validators/1 --json --connection=http://127.0.0.1:5051\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/wealdtech/ethdo"},"ethdo"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wealdtech/ethdo/blob/master/docs/usage.md#exit"},"ethdo Docs")),(0,r.kt)("h2",{id:"for-web3signer-or-proprietary-signers"},"For Web3Signer or Proprietary Signers"),(0,r.kt)("p",null,"If you are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v1/modules/{module_id}/validators/generate-unsigned-exit-messages/{operator_id}")," endpoint of the KAPI, you can skip getting the epoch and constructing an unsigned exit message in the example below."),(0,r.kt)("p",null,"Get current epoch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const blockReq = await fetch(CONSENSUS_BLOCK_ENDPOINT)\nconst blockRes = await blockReq.json()\nconst blockNumber = blockRes.data.message.slot\nconst currentEpoch = Math.floor(blockNumber / 32)\n")),(0,r.kt)("p",null,"Get fork parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const forkReq = await fetch(CONSENSUS_FORK_ENDPOINT)\nconst forkRes = await forkReq.json()\nconst fork = forkRes.data\n")),(0,r.kt)("p",null,"Get genesis parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const genesisReq = await fetch(CONSENSUS_GENESIS_ENDPOINT)\nconst genesisRes = await genesisReq.json()\nconst genesis_validators_root = genesisRes.data.genesis_validators_root\n")),(0,r.kt)("p",null,"Construct an exit message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const voluntaryExit = {\n  epoch: String(currentEpoch),\n  validator_index: String(VALIDATOR_INDEX),\n}\n")),(0,r.kt)("p",null,"Prepare a signing request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const body = {\n  type: 'VOLUNTARY_EXIT',\n  fork_info: {\n    fork,\n    genesis_validators_root,\n  },\n  voluntary_exit: voluntaryExit,\n}\n")),(0,r.kt)("p",null,"Send the request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const signerReq = await fetch(WEB3SIGNER_ENDPOINT, {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },\n  body: JSON.stringify(body),\n})\nconst signature = await signerReq.text()\n")),(0,r.kt)("p",null,"Finally, construct a signed exit message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const signedMessage = {\n  message: voluntaryExit,\n  signature,\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/kolyasapphire/53dbdab35f1a033b0d37ddf582dce414"},"Complete Example")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It's advised to prepare all the necessary parameters (forks, epoch, etc) ahead of time and communicate with Web3Signer securely, for example via a secure network with no other internet access.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://consensys.github.io/web3signer/web3signer-eth2.html#tag/Signing"},"Web3Signer API Docs")))}u.isMDXComponent=!0}}]);