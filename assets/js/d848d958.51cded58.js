"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3831],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var o=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(i),m=n,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return i?o.createElement(h,r(r({ref:t},d),{},{components:i})):o.createElement(h,r({ref:t},d))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,r[1]=s;for(var p=2;p<a;p++)r[p]=i[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},7590:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=i(3117),n=(i(7294),i(3905));const a={},r="Deposit Security Committee manual",s={unversionedId:"guides/deposit-security-manual",id:"guides/deposit-security-manual",title:"Deposit Security Committee manual",description:"This instruction has been prepared for the participants of the Deposit Security Committee and describes the general points, the preparation steps to act as a guardian, and the details of the protection mechanism. The Deposit Security Committee is necessary to prevent the substitution of withdrawal credentials with frontrunning by node operators. Each member of the committee must perform several actions to ensure the security of deposits made by Lido. To participate in the validation, you will need to deploy a lido-council-daemon and prepare a private key for signing messages about the correctness of data or the need to stop deposits in case of attack.",source:"@site/docs/guides/deposit-security-manual.md",sourceDirName:"guides",slug:"/guides/deposit-security-manual",permalink:"/guides/deposit-security-manual",draft:!1,editUrl:"https://github.com/lidofinance/docs/blob/main/docs/guides/deposit-security-manual.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Oracle Operator Manual",permalink:"/guides/oracle-operator-manual"},next:{title:"Tooling Overview",permalink:"/guides/tooling"}},l={},p=[{value:"TL;DR",id:"tldr",level:2},{value:"Detailed description",id:"detailed-description",level:2},{value:"The vulnerability",id:"the-vulnerability",level:3},{value:"The Deposit Security Committee",id:"the-deposit-security-committee",level:3},{value:"Committee membership",id:"committee-membership",level:3},{value:"Members responsibilities",id:"members-responsibilities",level:3},{value:"Preparation steps",id:"preparation-steps",level:2},{value:"EOA account",id:"eoa-account",level:3},{value:"Run lido-council-daemon",id:"run-lido-council-daemon",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deposit-security-committee-manual"},"Deposit Security Committee manual"),(0,n.kt)("p",null,"This instruction has been prepared for the participants of the Deposit Security Committee and describes the general points, the preparation steps to act as a guardian, and the details of the protection mechanism. The Deposit Security Committee is necessary to prevent the substitution of withdrawal credentials with frontrunning by node operators. Each member of the committee must perform several actions to ensure the security of deposits made by Lido. To participate in the validation, you will need to deploy a ",(0,n.kt)("inlineCode",{parentName:"p"},"lido-council-daemon")," and prepare a private key for signing messages about the correctness of data or the need to stop deposits in case of attack."),(0,n.kt)("h2",{id:"tldr"},"TL;DR"),(0,n.kt)("p",null,"Before running in the mainnet all steps should be done in the Goerli testnet."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Prepare an EOA account for signing data with a private key on hand (not in hardware wallet). It will be a moderately sensitive hot private key. Use different accounts for testnet and mainnet."),(0,n.kt)("li",{parentName:"ol"},"Send the account address to Lido for submitting it to the smart contract. "),(0,n.kt)("li",{parentName:"ol"},"Deploy and run ",(0,n.kt)("inlineCode",{parentName:"li"},"lido-council-daemon")," with the private key from the EOA account. It would work in a dry-run mode until your address would be included in the smart contract.  ")),(0,n.kt)("h2",{id:"detailed-description"},"Detailed description"),(0,n.kt)("h3",{id:"the-vulnerability"},"The vulnerability"),(0,n.kt)("p",null,"There is the vulnerability allowing the malicious Node Operator to intercept the user funds on deposits to the Beacon chain in the Lido protocol. The vulnerability could only be exploited by the Node Operator front-running the ",(0,n.kt)("inlineCode",{parentName:"p"},"Lido.depositBufferedEther")," transaction with direct deposit to the DepositContract of no less than 1 ETH with the same validator public key & withdrawal credentials different from the Lido\u2019s ones, effectively getting control over 32 ETH from Lido. To mitigate this, Lido contracts should be able to check that Node Operators\u2019 keys hadn\u2019t been used for malicious pre-deposits."),(0,n.kt)("h3",{id:"the-deposit-security-committee"},"The Deposit Security Committee"),(0,n.kt)("p",null,"We propose to establish the Deposit Security Committee dedicated to ensuring the safety of deposits on the Beacon chain:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"monitoring the history of deposits and the set of Lido keys available for the deposit, signing and disseminating messages allowing deposits;"),(0,n.kt)("li",{parentName:"ul"},"signing the special message allowing anyone to pause deposits once the malicious Node Operator pre-deposits are detected.")),(0,n.kt)("p",null,"To make a deposit, we propose to collect a quorum of 2/3 of the signatures of the committee members. Members of the committee can collude with node operators and steal money by signing bad data that contains malicious pre-deposits. To mitigate this we propose to allow single committee member to stop deposits and also enforce space deposits in time (e.g. no more than 150 deposits with 150 blocks in between them), to provide single honest participant an ability to stop further deposits even if the supermajority colludes. The idea was outlined on research forum post as the option ",(0,n.kt)("a",{parentName:"p",href:"https://research.lido.fi/t/mitigations-for-deposit-front-running-vulnerability/1239#d-approving-deposit-contract-merkle-root-7"},(0,n.kt)("b",null,"d")),"."),(0,n.kt)("h3",{id:"committee-membership"},"Committee membership"),(0,n.kt)("p",null,"The first set of guardians is six node operators (Stakefish, Skillz, Chorus one, Blockscape, Staking facilities, P2P) and Lido dev team. In the future, we want to bring as many node operators as possible into the mix, so the expectation will be that while the 7 guardians start the rest of the node operators can also participate via testnet and gradually get pulled into mainnet. "),(0,n.kt)("h3",{id:"members-responsibilities"},"Members responsibilities"),(0,n.kt)("p",null,"Each member must prepare an EOA account to sign the pair ",(0,n.kt)("inlineCode",{parentName:"p"},"(depositRoot, keysOpIndex)")," with its private key. The addresses of the committee members will be added to the smart contract. Also, member has to run ",(0,n.kt)("inlineCode",{parentName:"p"},"DSC Daemon"),"that monitors the validators\u2019 public keys in the ",(0,n.kt)("inlineCode",{parentName:"p"},"DepositContract")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"NodeOperatorRegistry"),". The daemon must have access to the committee member\u2019s private key to be able to perform ECDSA signing."),(0,n.kt)("p",null,"The daemon constantly watches all updates in ",(0,n.kt)("inlineCode",{parentName:"p"},"DepositContract")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"NodeOperatorRegistry"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If the state is correct, it signes the current to_sign struct and emits it to an off-chain message queue."),(0,n.kt)("li",{parentName:"ul"},"If the state has malicious pre-deposits, it signs the \u201csomething\u2019s wrong\u201d message at the current block, emits it to a message queue, and attempts to send pauseDeposits() tx.")),(0,n.kt)("h2",{id:"preparation-steps"},"Preparation steps"),(0,n.kt)("p",null,"Before running in the mainnet, all steps should be completed in the Goerli testnet."),(0,n.kt)("h3",{id:"eoa-account"},"EOA account"),(0,n.kt)("p",null,"It might be any EOA account under the member's control. Send the address of its account to Lido for submitting it to the smart contract. Lido will provide some ETH to make stopping transactions if needed (shouldn't ever be the case). Note, all actions, except sending the stop message, would be done off-chain."),(0,n.kt)("h3",{id:"run-lido-council-daemon"},"Run lido-council-daemon"),(0,n.kt)("p",null,"To start the application, see the technical documentation in the project ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-council-daemon#table-of-contents"},"repository"),"."))}u.isMDXComponent=!0}}]);