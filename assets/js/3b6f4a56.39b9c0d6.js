"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5603],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>N});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,N=s["".concat(o,".").concat(u)]||s[u]||k[u]||l;return a?n.createElement(N,i(i({ref:t},m),{},{components:a})):n.createElement(N,i({ref:t},m))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[s]="string"==typeof e?e:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6785:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(3117),r=(a(7294),a(3905));const l={},i="NodeOperatorsRegistry",d={unversionedId:"contracts/node-operators-registry",id:"contracts/node-operators-registry",title:"NodeOperatorsRegistry",description:"- Source Code",source:"@site/docs/contracts/node-operators-registry.md",sourceDirName:"contracts",slug:"/contracts/node-operators-registry",permalink:"/contracts/node-operators-registry",draft:!1,editUrl:"https://github.com/lidofinance/docs/blob/main/docs/contracts/node-operators-registry.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"StakingRouter",permalink:"/contracts/staking-router"},next:{title:"WithdrawalQueueERC721",permalink:"/contracts/withdrawal-queue-erc721"}},o={},p=[{value:"View Methods",id:"view-methods",level:2},{value:"getRewardsDistribution()",id:"getrewardsdistribution",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"getActiveNodeOperatorsCount()",id:"getactivenodeoperatorscount",level:3},{value:"getNodeOperator()",id:"getnodeoperator",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"getTotalSigningKeyCount()",id:"gettotalsigningkeycount",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"getUnusedSigningKeyCount()",id:"getunusedsigningkeycount",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"getSigningKey()",id:"getsigningkey",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Returns:",id:"returns",level:4},{value:"getNodeOperatorsCount()",id:"getnodeoperatorscount",level:3},{value:"getKeysOpIndex()",id:"getkeysopindex",level:3},{value:"Methods",id:"methods",level:2},{value:"addNodeOperator()",id:"addnodeoperator",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"Returns:",id:"returns-1",level:4},{value:"setNodeOperatorActive()",id:"setnodeoperatoractive",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"setNodeOperatorName()",id:"setnodeoperatorname",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"setNodeOperatorRewardAddress()",id:"setnodeoperatorrewardaddress",level:3},{value:"Parameters:",id:"parameters-8",level:4},{value:"setNodeOperatorStakingLimit()",id:"setnodeoperatorstakinglimit",level:3},{value:"Parameters:",id:"parameters-9",level:4},{value:"reportStoppedValidators()",id:"reportstoppedvalidators",level:3},{value:"Parameters:",id:"parameters-10",level:4},{value:"trimUnusedKeys()",id:"trimunusedkeys",level:3},{value:"addSigningKeys()",id:"addsigningkeys",level:3},{value:"Parameters:",id:"parameters-11",level:4},{value:"addSigningKeysOperatorBH()",id:"addsigningkeysoperatorbh",level:3},{value:"Parameters:",id:"parameters-12",level:4},{value:"removeSigningKey()",id:"removesigningkey",level:3},{value:"Parameters:",id:"parameters-13",level:4},{value:"removeSigningKeys()",id:"removesigningkeys",level:3},{value:"Parameters:",id:"parameters-14",level:4},{value:"removeSigningKeyOperatorBH()",id:"removesigningkeyoperatorbh",level:3},{value:"Parameters:",id:"parameters-15",level:4},{value:"removeSigningKeysOperatorBH()",id:"removesigningkeysoperatorbh",level:3},{value:"Parameters:",id:"parameters-16",level:4},{value:"assignNextSigningKeys()",id:"assignnextsigningkeys",level:3},{value:"Parameters:",id:"parameters-17",level:4},{value:"Returns:",id:"returns-2",level:4}],m={toc:p},s="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nodeoperatorsregistry"},"NodeOperatorsRegistry"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/lido-dao/blob/master/contracts/0.4.24/nos/NodeOperatorsRegistry.sol"},"Source Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x55032650b14df07b85bF18A3a3eC8E0Af2e028d5"},"Deployed Contract"))),(0,r.kt)("p",null,"Node Operators act as validators on the Beacon chain for the benefit of the protocol. The DAO selects node operators and adds their addresses to the NodeOperatorsRegistry contract. Authorized operators have to generate a set of keys for the validation and also provide them with the smart contract. As Ether is received from users, it is distributed in chunks of 32 Ether between all active Node Operators. The contract contains a list of operators, their keys, and the logic for distributing rewards between them. The DAO can deactivate misbehaving operators."),(0,r.kt)("h2",{id:"view-methods"},"View Methods"),(0,r.kt)("h3",{id:"getrewardsdistribution"},"getRewardsDistribution()"),(0,r.kt)("p",null,"Returns the rewards distribution proportional to the effective stake for each node operator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function getRewardsDistribution(uint256 _totalRewardShares) returns (\n  address[] recipients,\n  uint256[] shares\n)\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_totalRewardShares")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Total amount of reward shares to distribute")))),(0,r.kt)("h3",{id:"getactivenodeoperatorscount"},"getActiveNodeOperatorsCount()"),(0,r.kt)("p",null,"Returns number of active node operators"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function getActiveNodeOperatorsCount() returns (uint256)\n")),(0,r.kt)("h3",{id:"getnodeoperator"},"getNodeOperator()"),(0,r.kt)("p",null,"Returns the n-th node operator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function getNodeOperator(uint256 _id, bool _fullInfo) returns (\n    bool active,\n    string name,\n    address rewardAddress,\n    uint64 stakingLimit,\n    uint64 stoppedValidators,\n    uint64 totalSigningKeys,\n    uint64 usedSigningKeys\n)\n")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Node Operator id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_fullInfo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"If true, name will be returned as well")))),(0,r.kt)("h3",{id:"gettotalsigningkeycount"},"getTotalSigningKeyCount()"),(0,r.kt)("p",null,"Returns total number of signing keys of the node operator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function getTotalSigningKeyCount(uint256 _operator_id) returns (uint256)\n")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_operator_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Node Operator id")))),(0,r.kt)("h3",{id:"getunusedsigningkeycount"},"getUnusedSigningKeyCount()"),(0,r.kt)("p",null,"Returns number of usable signing keys of the node operator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function getUnusedSigningKeyCount(uint256 _operator_id) returns (uint256)\n")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_operator_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Node Operator id")))),(0,r.kt)("h3",{id:"getsigningkey"},"getSigningKey()"),(0,r.kt)("p",null,"Returns n-th signing key of the node operator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function getSigningKey(uint256 _operator_id, uint256 _index) returns (\n  bytes key,\n  bytes depositSignature,\n  bool used\n)\n")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_operator_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Node Operator id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_index")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Index of the key, starting with 0d")))),(0,r.kt)("h4",{id:"returns"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:null},"Key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"depositSignature")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:null},"Signature needed for a ",(0,r.kt)("inlineCode",{parentName:"td"},"depositContract.deposit")," call")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"used")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Flag indication if the key was used in the staking")))),(0,r.kt)("h3",{id:"getnodeoperatorscount"},"getNodeOperatorsCount()"),(0,r.kt)("p",null,"Returns total number of node operators"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function getNodeOperatorsCount() returns (uint256)\n")),(0,r.kt)("h3",{id:"getkeysopindex"},"getKeysOpIndex()"),(0,r.kt)("p",null,"Returns a monotonically increasing counter that gets incremented when any of the following happens:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"a Node Operator's key(s) is added"),(0,r.kt)("li",{parentName:"ol"},"a Node Operator's key(s) is removed"),(0,r.kt)("li",{parentName:"ol"},"a Node Operator's approved keys limit is changed"),(0,r.kt)("li",{parentName:"ol"},"a Node Operator was activated/deactivated")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function getKeysOpIndex() public view returns (uint256)\n")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"addnodeoperator"},"addNodeOperator()"),(0,r.kt)("p",null,"Add node operator named ",(0,r.kt)("inlineCode",{parentName:"p"},"_name")," with reward address ",(0,r.kt)("inlineCode",{parentName:"p"},"_rewardAddress")," and staking limit = 0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function addNodeOperator(\n  string _name,\n  address _rewardAddress\n) returns (uint256 id)\n")),(0,r.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Human-readable name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_rewardAddress")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:null},"Ethereum 1 address which receives stETH rewards for this operator")))),(0,r.kt)("h4",{id:"returns-1"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"A unique key of the added operator")))),(0,r.kt)("h3",{id:"setnodeoperatoractive"},"setNodeOperatorActive()"),(0,r.kt)("p",null,"Activate or disable node operator with given id"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Increases the keysOpIndex")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function setNodeOperatorActive(uint256 _id, bool _active)\n")),(0,r.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Node Operator id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_active")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Activate or disable node operator")))),(0,r.kt)("h3",{id:"setnodeoperatorname"},"setNodeOperatorName()"),(0,r.kt)("p",null,"Change human-readable name of the node operator ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"_name")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function setNodeOperatorName(uint256 _id, string _name)\n")),(0,r.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Node Operator id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Human-readable name")))),(0,r.kt)("h3",{id:"setnodeoperatorrewardaddress"},"setNodeOperatorRewardAddress()"),(0,r.kt)("p",null,"Change reward address of the node operator ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"_rewardAddress")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function setNodeOperatorRewardAddress(uint256 _id, address _rewardAddress)\n")),(0,r.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Node Operator id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_rewardAddress")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:null},"New reward address")))),(0,r.kt)("h3",{id:"setnodeoperatorstakinglimit"},"setNodeOperatorStakingLimit()"),(0,r.kt)("p",null,"Set the maximum number of validators to stake for the node operator ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"_stakingLimit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function setNodeOperatorStakingLimit(uint256 _id, uint64 _stakingLimit)\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Increases the keysOpIndex")),(0,r.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Node Operator id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_stakingLimit")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:null},"Max number of validators to stake")))),(0,r.kt)("h3",{id:"reportstoppedvalidators"},"reportStoppedValidators()"),(0,r.kt)("p",null,"Report ",(0,r.kt)("inlineCode",{parentName:"p"},"_stoppedIncrement")," more stopped validators of the node operator ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function reportStoppedValidators(uint256 _id, uint64 _stoppedIncrement)\n")),(0,r.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Node Operator id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_stoppedIncrement")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint64")),(0,r.kt)("td",{parentName:"tr",align:null},"Count of stopped validators to increment")))),(0,r.kt)("h3",{id:"trimunusedkeys"},"trimUnusedKeys()"),(0,r.kt)("p",null,"Remove unused signing keys"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function trimUnusedKeys()\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Function is used by the Lido contract")),(0,r.kt)("h3",{id:"addsigningkeys"},"addSigningKeys()"),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"_quantity")," validator signing keys of operator ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," to the set of usable keys.\nConcatenated keys are: ",(0,r.kt)("inlineCode",{parentName:"p"},"_pubkeys"),".\nCan be done by the DAO in question by using the designated rewards address."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Increases the keysOpIndex")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function addSigningKeys(\n  uint256 _operator_id,\n  uint256 _quantity,\n  bytes _pubkeys,\n  bytes _signatures\n)\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Along with each key the DAO has to provide a signatures for the\n(pubkey, withdrawal_credentials, 32000000000) message."),(0,r.kt)("p",{parentName:"admonition"},"Given that information, the contract'll be able to call\n",(0,r.kt)("inlineCode",{parentName:"p"},"depositContract.deposit")," on-chain.")),(0,r.kt)("h4",{id:"parameters-11"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_operator_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Node Operator id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_quantity")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint64")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of signing keys provided")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_pubkeys")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:null},"Several concatenated validator signing keys")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_signatures")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:null},"Several concatenated signatures for (pubkey, withdrawal_credentials, 32000000000) messages")))),(0,r.kt)("h3",{id:"addsigningkeysoperatorbh"},"addSigningKeysOperatorBH()"),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"_quantity")," validator signing keys of operator ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," to the set of usable keys.\nConcatenated keys are: ",(0,r.kt)("inlineCode",{parentName:"p"},"_pubkeys"),".\nCan be done by node operator in question by using the designated rewards address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function addSigningKeysOperatorBH(\n  uint256 _operator_id,\n  uint256 _quantity,\n  bytes _pubkeys,\n  bytes _signatures\n)\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Along with each key the DAO has to provide a signatures for the\n(pubkey, withdrawal_credentials, 32000000000) message."),(0,r.kt)("p",{parentName:"admonition"},"Given that information, the contract'll be able to call\n",(0,r.kt)("inlineCode",{parentName:"p"},"depositContract.deposit")," on-chain.")),(0,r.kt)("h4",{id:"parameters-12"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_operator_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Node Operator id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_quantity")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint64")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of signing keys provided")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_pubkeys")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:null},"Several concatenated validator signing keys")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_signatures")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:null},"Several concatenated signatures for (pubkey, withdrawal_credentials, 32000000000) messages")))),(0,r.kt)("h3",{id:"removesigningkey"},"removeSigningKey()"),(0,r.kt)("p",null,"Removes a validator signing key #",(0,r.kt)("inlineCode",{parentName:"p"},"_index")," of operator #",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," from the set of usable keys. Executed on behalf of DAO."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Increases the keysOpIndex")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function removeSigningKey(uint256 _operator_id, uint256 _index)\n")),(0,r.kt)("h4",{id:"parameters-13"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_operator_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Node Operator id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_index")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Index of the key, starting with 0")))),(0,r.kt)("h3",{id:"removesigningkeys"},"removeSigningKeys()"),(0,r.kt)("p",null,"Removes an #",(0,r.kt)("inlineCode",{parentName:"p"},"_amount")," of validator signing keys starting from #",(0,r.kt)("inlineCode",{parentName:"p"},"_index")," of operator #",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," usable keys. Executed on behalf of DAO."),(0,r.kt)("p",null,"Keys removing from the last index to the highest one, so we won't get outside the array"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Increases the keysOpIndex")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function removeSigningKeys(uint256 _operator_id, uint256 _index, uint256 _amount)\n")),(0,r.kt)("h4",{id:"parameters-14"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_operator_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Node Operator id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_index")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Index of the key, starting with 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_amount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Amount of keys")))),(0,r.kt)("h3",{id:"removesigningkeyoperatorbh"},"removeSigningKeyOperatorBH()"),(0,r.kt)("p",null,"Removes a validator signing key ",(0,r.kt)("inlineCode",{parentName:"p"},"_index")," of operator ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," from the set of usable keys. Executed on behalf of Node Operator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function removeSigningKeyOperatorBH(uint256 _operator_id, uint256 _index)\n")),(0,r.kt)("h4",{id:"parameters-15"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_operator_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Node Operator id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_index")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Index of the key, starting with 0")))),(0,r.kt)("h3",{id:"removesigningkeysoperatorbh"},"removeSigningKeysOperatorBH()"),(0,r.kt)("p",null,"Removes an #",(0,r.kt)("inlineCode",{parentName:"p"},"_amount")," of validator signing keys starting from #",(0,r.kt)("inlineCode",{parentName:"p"},"_index")," of operator #",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," usable keys. Executed on behalf of Node Operator."),(0,r.kt)("p",null,"Keys removing from the last index to the highest one, so we won't get outside the array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function removeSigningKeysOperatorBH(uint256 _operator_id, uint256 _index, uint256 _amount)\n")),(0,r.kt)("h4",{id:"parameters-16"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_operator_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Node Operator id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_index")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Index of the key, starting with 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_amount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"Amount of keys")))),(0,r.kt)("h3",{id:"assignnextsigningkeys"},"assignNextSigningKeys()"),(0,r.kt)("p",null,"Selects and returns at most ",(0,r.kt)("inlineCode",{parentName:"p"},"_numKeys")," signing keys (as well as the corresponding\nsignatures) from the set of active keys and marks the selected keys as used.\nMay only be called by the Lido contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function assignNextSigningKeys(uint256 _numKeys) returns (\n  bytes memory pubkeys,\n  bytes memory signatures\n)\n")),(0,r.kt)("h4",{id:"parameters-17"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_pubkeys")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of keys to select. The actual number of selected keys may be less due to the lack of active keys.")))),(0,r.kt)("h4",{id:"returns-2"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_pubkeys")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:null},"Several concatenated validator signing keys")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_signatures")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:null},"Several concatenated signatures for (pubkey, withdrawal_credentials, 32000000000) messages")))))}k.isMDXComponent=!0}}]);