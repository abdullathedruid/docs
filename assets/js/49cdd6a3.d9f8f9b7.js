"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8855],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>N});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),k=r,N=u["".concat(d,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(N,i(i({ref:t},p),{},{components:a})):n.createElement(N,i({ref:t},p))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6587:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(3117),r=(a(7294),a(3905));const l={},i="DepositSecurityModule",o={unversionedId:"contracts/deposit-security-module",id:"contracts/deposit-security-module",title:"DepositSecurityModule",description:"- Source Code",source:"@site/docs/contracts/deposit-security-module.md",sourceDirName:"contracts",slug:"/contracts/deposit-security-module",permalink:"/contracts/deposit-security-module",draft:!1,editUrl:"https://github.com/lidofinance/docs/blob/main/docs/contracts/deposit-security-module.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"wstETH",permalink:"/contracts/wsteth"},next:{title:"Burner",permalink:"/contracts/burner"}},d={},s=[{value:"View Methods",id:"view-methods",level:2},{value:"getOwner()",id:"getowner",level:3},{value:"getPauseIntentValidityPeriodBlocks()",id:"getpauseintentvalidityperiodblocks",level:3},{value:"getMaxDeposits()",id:"getmaxdeposits",level:3},{value:"getMinDepositBlockDistance()",id:"getmindepositblockdistance",level:3},{value:"getGuardianQuorum()",id:"getguardianquorum",level:3},{value:"getGuardians()",id:"getguardians",level:3},{value:"isGuardian()",id:"isguardian",level:3},{value:"Parameters",id:"parameters",level:4},{value:"getGuardianIndex()",id:"getguardianindex",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"canDeposit()",id:"candeposit",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Methods",id:"methods",level:2},{value:"setOwner()",id:"setowner",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"setPauseIntentValidityPeriodBlocks()",id:"setpauseintentvalidityperiodblocks",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"setMaxDeposits()",id:"setmaxdeposits",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"setMinDepositBlockDistance()",id:"setmindepositblockdistance",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"setGuardianQuorum()",id:"setguardianquorum",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"addGuardian()",id:"addguardian",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"addGuardians()",id:"addguardians",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"removeGuardian()",id:"removeguardian",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"pauseDeposits()",id:"pausedeposits",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"unpauseDeposits()",id:"unpausedeposits",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"depositBufferedEther()",id:"depositbufferedether",level:3},{value:"Parameters",id:"parameters-13",level:4}],p={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"depositsecuritymodule"},"DepositSecurityModule"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/lido-dao/blob/master/contracts/0.8.9/DepositSecurityModule.sol"},"Source Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0xC77F8768774E1c9244BEed705C4354f2113CFc09"},"Deployed Contract"))),(0,r.kt)("p",null,"Due to front-running vulnerability, we ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-improvement-proposals/blob/develop/LIPS/lip-5.md"},"proposed")," to establish the Deposit Security Committee dedicated to ensuring the safety of deposits on the Beacon chain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"monitoring the history of deposits and the set of Lido keys available for the deposit, signing and disseminating messages allowing deposits;"),(0,r.kt)("li",{parentName:"ul"},"signing the special message allowing anyone to pause deposits once the malicious Node Operator pre-deposits are detected.")),(0,r.kt)("p",null,"Each member must generate an EOA address to sign messages with their private key. The addresses of the committee members will be added to the smart contract."),(0,r.kt)("p",null,"To make a deposit, we propose to collect a quorum of 4/6 of the signatures of the committee members. Members of the committee can collude with node operators and steal money by signing bad data that contains malicious pre-deposits. To mitigate this, we propose allowing a single committee member to stop deposits and also enforce space deposits in time (e.g., no more than 150 deposits with 25 blocks in between them) to provide the single honest participant the ability to stop further deposits even if the supermajority colludes."),(0,r.kt)("p",null,"The guardian himself, or anyone else who has a signed pause message, can call ",(0,r.kt)("inlineCode",{parentName:"p"},"pauseDeposits")," that pauses ",(0,r.kt)("inlineCode",{parentName:"p"},"DepositSecurityModule"),"."),(0,r.kt)("p",null,"To prevent a replay attack, the guardians sign the block number when  malicious pre-deposits are observed. After a certain number of blocks (",(0,r.kt)("inlineCode",{parentName:"p"},"pauseIntentValidityPeriodBlocks"),") message becomes invalid."),(0,r.kt)("p",null,"Values of the parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"maxDepositsPerBlock")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"minDepositBlockDistance")," are controlled by Lido DAO and must be harmonized with ",(0,r.kt)("inlineCode",{parentName:"p"},"churnValidatorsPerDayLimit")," of ",(0,r.kt)("a",{parentName:"p",href:"/contracts/oracle-report-sanity-checker"},(0,r.kt)("inlineCode",{parentName:"a"},"OracleReportSanityChecker")),"."),(0,r.kt)("h2",{id:"view-methods"},"View Methods"),(0,r.kt)("h3",{id:"getowner"},"getOwner()"),(0,r.kt)("p",null,"Returns the contract's owner address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function getOwner() external view returns (address);\n")),(0,r.kt)("h3",{id:"getpauseintentvalidityperiodblocks"},"getPauseIntentValidityPeriodBlocks()"),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"PAUSE_INTENT_VALIDITY_PERIOD_BLOCKS")," (see ",(0,r.kt)("inlineCode",{parentName:"p"},"pauseDeposits"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function getPauseIntentValidityPeriodBlocks() external view returns (uint256)\n")),(0,r.kt)("h3",{id:"getmaxdeposits"},"getMaxDeposits()"),(0,r.kt)("p",null,"Returns max amount of deposits per block (see ",(0,r.kt)("inlineCode",{parentName:"p"},"depositBufferedEther"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function getMaxDeposits() external view returns (uint256)\n")),(0,r.kt)("h3",{id:"getmindepositblockdistance"},"getMinDepositBlockDistance()"),(0,r.kt)("p",null,"Returns min distance in blocks between deposits (see ",(0,r.kt)("inlineCode",{parentName:"p"},"depositBufferedEther"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function getMinDepositBlockDistance() external view returns (uint256)\n")),(0,r.kt)("h3",{id:"getguardianquorum"},"getGuardianQuorum()"),(0,r.kt)("p",null,"Returns the number of valid guardian signatures required to vet (depositRoot, nonce) pair."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function getGuardianQuorum() external view returns (uint256)\n")),(0,r.kt)("h3",{id:"getguardians"},"getGuardians()"),(0,r.kt)("p",null,"Returns guardian committee member list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function getGuardians() external view returns (address[] memory)\n")),(0,r.kt)("h3",{id:"isguardian"},"isGuardian()"),(0,r.kt)("p",null,"Checks whether the given address is a guardian."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function isGuardian(address addr) external view returns (bool)\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"addr")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:null},"Valid ETH-1 address")))),(0,r.kt)("h3",{id:"getguardianindex"},"getGuardianIndex()"),(0,r.kt)("p",null,"Returns index of the guardian, or -1 if the address is not a guardian."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function getGuardianIndex(address addr) external view returns (int256)\n")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"addr")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:null},"Valid ETH-1 address")))),(0,r.kt)("h3",{id:"candeposit"},"canDeposit()"),(0,r.kt)("p",null,"Returns whether ",(0,r.kt)("inlineCode",{parentName:"p"},"LIDO.deposit()")," can be called and a deposit can be made for the staking module with\nid ",(0,r.kt)("inlineCode",{parentName:"p"},"stakingModuleId"),", given that the caller will provide guardian attestations of non-stale deposit\nroot and ",(0,r.kt)("inlineCode",{parentName:"p"},"nonce")," and the number of such attestations will be enough to reach a quorum."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function canDeposit(uint256 stakingModuleId) external view returns (bool)\n")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stakingModuleId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the staking module")))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"setowner"},"setOwner()"),(0,r.kt)("p",null,"Sets new owner."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function setOwner(address newValue) external;\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Reverts if any of the following is true:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," is not the owner;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"newValue")," is zero address."))),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"newValue")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:null},"New owner address")))),(0,r.kt)("h3",{id:"setpauseintentvalidityperiodblocks"},"setPauseIntentValidityPeriodBlocks()"),(0,r.kt)("p",null,"Sets ",(0,r.kt)("inlineCode",{parentName:"p"},"pauseIntentValidityPeriodBlocks"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function setPauseIntentValidityPeriodBlocks(uint256 newValue)\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Reverts if any of the following is true:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," is not the owner;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"newValue")," is 0 (zero)."))),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"newValue")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of blocks after which message becomes invalid")))),(0,r.kt)("h3",{id:"setmaxdeposits"},"setMaxDeposits()"),(0,r.kt)("p",null,"Sets ",(0,r.kt)("inlineCode",{parentName:"p"},"maxDepositsPerBlock"),"."),(0,r.kt)("p",null,"The value must be harmonized with the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"churnValidatorsPerDayLimit")," of ",(0,r.kt)("a",{parentName:"p",href:"/contracts/oracle-report-sanity-checker"},"OracleReportSanityChecker"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function setMaxDeposits(uint256 newValue)\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Reverts if any of the following is true:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," is not the owner."))),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"newValue")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"New value of the maxDepositsPerBlock parameter")))),(0,r.kt)("h3",{id:"setmindepositblockdistance"},"setMinDepositBlockDistance()"),(0,r.kt)("p",null,"Sets ",(0,r.kt)("inlineCode",{parentName:"p"},"minDepositBlockDistance"),"."),(0,r.kt)("p",null,"The value must be harmonized with the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"churnValidatorsPerDayLimit")," of ",(0,r.kt)("a",{parentName:"p",href:"/contracts/oracle-report-sanity-checker"},"OracleReportSanityChecker"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function setMinDepositBlockDistance(uint256 newValue)\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Reverts if any of the following is true:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," is not the owner."))),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"newValue")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"New value of the min DepositsPerBlock parameter")))),(0,r.kt)("h3",{id:"setguardianquorum"},"setGuardianQuorum()"),(0,r.kt)("p",null,'Sets the number of valid guardian signatures required to vet (depositRoot, nonce) pair (aka "quorum").'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function setGuardianQuorum(uint256 newValue)\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Reverts if any of the following is true:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," is not the owner;"))),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"newValue")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"New quorum value")))),(0,r.kt)("h3",{id:"addguardian"},"addGuardian()"),(0,r.kt)("p",null,"Adds a guardian address and sets a new quorum value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function addGuardian(address addr, uint256 newQuorum)\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Reverts if any of the following is true:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," is not the owner;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"addr")," is already a guardian."))),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"addr")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:null},"Guardian address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"newQuorum")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"New Quorum value")))),(0,r.kt)("h3",{id:"addguardians"},"addGuardians()"),(0,r.kt)("p",null,"Adds a set of guardian addresses and sets a new quorum value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function addGuardians(address[] memory addresses, uint256 newQuorum)\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Reverts if any of the following is true:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," is not the owner;"),(0,r.kt)("li",{parentName:"ul"},"any of the ",(0,r.kt)("inlineCode",{parentName:"li"},"addresses")," is already a guardian."))),(0,r.kt)("h4",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"addresses")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"address[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of Guardian addresses")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"newQuorum")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"New Quorum value")))),(0,r.kt)("h3",{id:"removeguardian"},"removeGuardian()"),(0,r.kt)("p",null,"Removes a guardian with the given address and sets a new quorum value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function removeGuardian(address addr, uint256 newQuorum)\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Reverts if any of the following is true:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," is not the owner;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"addr")," is not a guardian."))),(0,r.kt)("h4",{id:"parameters-10"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"addr")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:null},"Guardian address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"newQuorum")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"New Quorum value")))),(0,r.kt)("h3",{id:"pausedeposits"},"pauseDeposits()"),(0,r.kt)("p",null,"Pauses deposits for staking module given that both conditions are satisfied (reverts otherwise):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The function is called by the guardian with index guardianIndex OR sig\nis a valid signature by the guardian with index guardianIndex of the data\ndefined below.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"block.number - blockNumber <= pauseIntentValidityPeriodBlocks"),(0,r.kt)("p",{parentName:"li"},"The signature, if present, must be produced for keccak256 hash of the following\nmessage (each component taking 32 bytes):"),(0,r.kt)("p",{parentName:"li"},"| PAUSE_MESSAGE_PREFIX | blockNumber | stakingModuleId |"))),(0,r.kt)("p",null,"If the staking module is not active does nothing.\nIn case of an emergency, the function ",(0,r.kt)("inlineCode",{parentName:"p"},"pauseDeposits")," is supposed to be called\nby all guardians. Thus only the first call will do the actual change. So\nthe other calls would be OK operations from the point of view of the protocol logic."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function pauseDeposits(uint256 blockNumber, uint256 stakingModuleId, Signature memory sig)\n")),(0,r.kt)("h4",{id:"parameters-11"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"blockNumber")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Block number with malicious pre-deposits have been observed by the guardian")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stakingModuleId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the staking module to pause deposits for")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sig")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Signature")),(0,r.kt)("td",{parentName:"tr",align:null},"Short ECDSA guardian signature as defined in ",(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-2098"},"https://eips.ethereum.org/EIPS/eip-2098"))))),(0,r.kt)("h3",{id:"unpausedeposits"},"unpauseDeposits()"),(0,r.kt)("p",null,"Unpauses deposits for staking module.\nIf the staking module is not paused, do nothing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function unpauseDeposits(uint256 stakingModuleId)\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Reverts if any of the following is true:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," is not the owner."))),(0,r.kt)("h4",{id:"parameters-12"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stakingModuleId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the staking module")))),(0,r.kt)("h3",{id:"depositbufferedether"},"depositBufferedEther()"),(0,r.kt)("p",null,"Verifies the deposit security conditions are met and calls ",(0,r.kt)("inlineCode",{parentName:"p"},"LIDO.deposit(maxDepositsPerBlock, stakingModuleId, depositCalldata)"),". Otherwise reverts."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Reverts if any of the following is true:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"IDepositContract.get_deposit_root() != depositRoot;"),(0,r.kt)("li",{parentName:"ol"},"StakingModule.getNonce() != nonce;"),(0,r.kt)("li",{parentName:"ol"},"The number of guardian signatures is less than getGuardianQuorum();"),(0,r.kt)("li",{parentName:"ol"},"An invalid or non-guardian signature received;"),(0,r.kt)("li",{parentName:"ol"},"block.number - StakingModule.getLastDepositBlock() < minDepositBlockDistance;"),(0,r.kt)("li",{parentName:"ol"},"blockhash(blockNumber) != blockHash."))),(0,r.kt)("p",null,"Signatures must be sorted in ascending order by the index of the guardian. Each signature must\nbe produced for the keccak256 hash of the following message (each component taking 32 bytes):"),(0,r.kt)("p",null,"| ATTEST_MESSAGE_PREFIX | blockNumber | blockHash | depositRoot | stakingModuleId | nonce |"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function depositBufferedEther(\n        uint256 blockNumber,\n        bytes32 blockHash,\n        bytes32 depositRoot,\n        uint256 stakingModuleId,\n        uint256 nonce,\n        bytes calldata depositCalldata,\n        Signature[] calldata sortedGuardianSignatures\n    )\n")),(0,r.kt)("h4",{id:"parameters-13"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"blockNumber")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of the current deposit block")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"blockHash")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bytes32")),(0,r.kt)("td",{parentName:"tr",align:null},"Hash of the current deposit block")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"depositRoot")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bytes32")),(0,r.kt)("td",{parentName:"tr",align:null},"Deposit root of the Ethereum DepositContract")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stakingModuleId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the staking module to deposit with")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nonce")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Nonce of key operations of the staking module")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"depositCalldata")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:null},"Staking module deposit calldata")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sortedGuardianSignatures")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Signature[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Short ECDSA guardians signatures as defined in ",(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-2098"},"https://eips.ethereum.org/EIPS/eip-2098"))))))}m.isMDXComponent=!0}}]);