"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8502],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),c=a,k=p["".concat(i,".").concat(c)]||p[c]||m[c]||o;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(3117),a=(n(7294),n(3905));const o={},l="Burner",s={unversionedId:"contracts/burner",id:"contracts/burner",title:"Burner",description:"- Source Code",source:"@site/docs/contracts/burner.md",sourceDirName:"contracts",slug:"/contracts/burner",permalink:"/contracts/burner",draft:!1,editUrl:"https://github.com/lidofinance/docs/blob/main/docs/contracts/burner.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"DepositSecurityModule",permalink:"/contracts/deposit-security-module"},next:{title:"LidoExecutionLayerRewardsVault",permalink:"/contracts/lido-execution-layer-rewards-vault"}},i={},u=[{value:"Shares burnt counters",id:"shares-burnt-counters",level:2},{value:"View methods",id:"view-methods",level:2},{value:"getCoverSharesBurnt()",id:"getcoversharesburnt",level:3},{value:"getNonCoverSharesBurnt()",id:"getnoncoversharesburnt",level:3},{value:"getExcessStETH()",id:"getexcesssteth",level:3},{value:"getSharesRequestedToBurn()",id:"getsharesrequestedtoburn",level:3},{value:"Methods",id:"methods",level:2},{value:"requestBurnMyStETHForCover()",id:"requestburnmystethforcover",level:3},{value:"Parameters",id:"parameters",level:4},{value:"requestBurnSharesForCover()",id:"requestburnsharesforcover",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"requestBurnMyStETH()",id:"requestburnmysteth",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"requestBurnShares()",id:"requestburnshares",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"recoverExcessStETH()",id:"recoverexcesssteth",level:3},{value:"recoverERC20()",id:"recovererc20",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"recoverERC721()",id:"recovererc721",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"commitSharesToBurn()",id:"commitsharestoburn",level:3},{value:"Parameters",id:"parameters-6",level:4}],d={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"burner"},"Burner"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/lido-dao/blob/master/contracts/0.8.9/Burner.sol"},"Source Code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0xD15a672319Cf0352560eE76d9e89eAB0889046D3"},"Deployed Contract"))),(0,a.kt)("p",null,"The contract provides a way for Lido protocol to burn stETH token shares as a means to finalize withdrawals,\npenalize untimely exiting node operators, and, possibly, cover losses in staking."),(0,a.kt)("p",null,"It relies on the ",(0,a.kt)("a",{parentName:"p",href:"/contracts/lido#rebasing"},"rebasing")," nature of stETH. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Lido")," contract calculates\nuser balance using the following equation:\n",(0,a.kt)("inlineCode",{parentName:"p"},"balanceOf(account) = shares[account] * totalPooledEther / totalShares"),".\nTherefore, burning shares (e.g. decreasing the ",(0,a.kt)("inlineCode",{parentName:"p"},"totalShares")," amount) increases stETH holders' balances."),(0,a.kt)("p",null,"It's presumed that actual shares burning happens inside the ",(0,a.kt)("a",{parentName:"p",href:"/contracts/lido"},(0,a.kt)("inlineCode",{parentName:"a"},"Lido"))," contract as a part of the ",(0,a.kt)("a",{parentName:"p",href:"/contracts/accounting-oracle"},(0,a.kt)("inlineCode",{parentName:"a"},"AccountingOracle"))," report.\n",(0,a.kt)("inlineCode",{parentName:"p"},"Burner")," provides a safe and deterministic way to incur a positive stETH token rebase by gradually\ndecreasing ",(0,a.kt)("inlineCode",{parentName:"p"},"totalShares")," that can be correctly handled by 3rd party protocols integrated with stETH."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Burner")," accepts burning requests in the following two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Locking ",(0,a.kt)("strong",{parentName:"li"},"someone's pre-approved")," stETH by the caller with the assigned ",(0,a.kt)("inlineCode",{parentName:"li"},"REQUEST_BURN_SHARES_ROLE"),";"),(0,a.kt)("li",{parentName:"ul"},"Locking ",(0,a.kt)("strong",{parentName:"li"},"caller-provided")," stETH with the ",(0,a.kt)("inlineCode",{parentName:"li"},"REQUEST_BURN_MY_STETH_ROLE")," assigned role.")),(0,a.kt)("p",null,"Those burn requests are initially set by the contract to a pending state.\nActual burning happens as part of an oracle (",(0,a.kt)("a",{parentName:"p",href:"/contracts/accounting-oracle"},(0,a.kt)("inlineCode",{parentName:"a"},"AccountingOracle")),") report handling by ",(0,a.kt)("a",{parentName:"p",href:"/contracts/lido"},(0,a.kt)("inlineCode",{parentName:"a"},"Lido"))," to prevent\nadditional fluctuations of the existing stETH token rebase period (~24h)."),(0,a.kt)("p",null,"We also distinguish two types of shares burn requests:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"request to ",(0,a.kt)("strong",{parentName:"li"},"cover")," a slashing event (e.g. decreasing of the total pooled ETH amount\nbetween the two consecutive oracle reports);"),(0,a.kt)("li",{parentName:"ul"},"request to burn shares for any other cases (",(0,a.kt)("strong",{parentName:"li"},"non-cover"),").")),(0,a.kt)("p",null,"The contract has two separate counters for the burnt shares: cover and non-cover ones. The contract is\nexclusively responsible for the stETH shares burning by ",(0,a.kt)("a",{parentName:"p",href:"/contracts/lido"},(0,a.kt)("inlineCode",{parentName:"a"},"Lido"))," and burning allowed only from the contract's\nown balance only."),(0,a.kt)("h2",{id:"shares-burnt-counters"},"Shares burnt counters"),(0,a.kt)("p",null,"The contract keeps count of all shares ever burned by way of maintaining two internal counters:\n",(0,a.kt)("inlineCode",{parentName:"p"},"totalCoverSharesBurnt")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"totalNonCoverSharesBurnt")," for cover and non-cover burns, respectively.\nThese counters are increased when actual stETH burn is performed as part of the Lido Oracle report."),(0,a.kt)("p",null,"This makes it possible to split any stETH rebase into two sub-components: the rewards-induced rebase\nand cover application-induced rebase, which can be done as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Before the rebase, store the previous values of both counters, as well as the value of stETH share price:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sol"},"prevCoverSharesBurnt = Burner.totalCoverSharesBurnt()\nprevSharePrice = stETH.totalSupply() / stETH.getTotalShares()\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After the rebase, perform the following calculations:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sol"},"sharesBurntFromOldToNew = Burner.totalCoverSharesBurnt() - prevCoverSharesBurnt;\nnewSharePriceAfterCov = stETH.totalSupply() / (stETH.getTotalShares() + sharesBurntFromOldToNew);\nnewSharePrice = stETH.totalSupply() / stETH.getTotalShares();\n\n// rewards-induced share price increase\nrewardPerShare = newSharePriceAfterCov - prevSharePrice;\n\n// cover-induced share price increase\nnonRewardSharePriceIncrease = newSharePrice - prevSharePrice - rewardPerShare;\n")))),(0,a.kt)("h2",{id:"view-methods"},"View methods"),(0,a.kt)("h3",{id:"getcoversharesburnt"},"getCoverSharesBurnt()"),(0,a.kt)("p",null,"Returns the total cover shares ever burnt."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},"function getCoverSharesBurnt() external view returns (uint256)\n")),(0,a.kt)("h3",{id:"getnoncoversharesburnt"},"getNonCoverSharesBurnt()"),(0,a.kt)("p",null,"Returns the total non-cover shares ever burnt."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},"function getNonCoverSharesBurnt() external view returns (uint256)\n")),(0,a.kt)("h3",{id:"getexcesssteth"},"getExcessStETH()"),(0,a.kt)("p",null,"Returns the stETH amount belonging to the burner contract address but not marked for burning."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},"function getExcessStETH() external view returns (uint256)\n")),(0,a.kt)("h3",{id:"getsharesrequestedtoburn"},"getSharesRequestedToBurn()"),(0,a.kt)("p",null,"Returns numbers of cover and non-cover shares requested to burn."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},"function getSharesRequestedToBurn() external view returns (uint256 coverShares, uint256 nonCoverShares)\n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"requestburnmystethforcover"},"requestBurnMyStETHForCover()"),(0,a.kt)("p",null,"Transfers stETH tokens from the message sender and irreversibly locks these on the burner contract address.\nInternally converts tokens amount into underlying shares amount and marks the converted shares amount\nfor cover-backed burning by increasing the internal ",(0,a.kt)("inlineCode",{parentName:"p"},"coverSharesBurnRequested")," counter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},"function requestBurnMyStETHForCover(uint256 _stETHAmountToBurn) external\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Reverts if any of the following is true:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"msg.sender")," is not a holder of the ",(0,a.kt)("inlineCode",{parentName:"li"},"REQUEST_BURN_MY_STETH_ROLE")," role;"),(0,a.kt)("li",{parentName:"ul"},"no stETH provided (",(0,a.kt)("inlineCode",{parentName:"li"},"_stETHAmountToBurn == 0"),");"),(0,a.kt)("li",{parentName:"ul"},"no stETH transferred (allowance exceeded)."))),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_stETHAmountToBurn")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"uint256")),(0,a.kt)("td",{parentName:"tr",align:null},"stETH tokens amount (not shares amount) to burn")))),(0,a.kt)("h3",{id:"requestburnsharesforcover"},"requestBurnSharesForCover()"),(0,a.kt)("p",null,"Transfers stETH shares from ",(0,a.kt)("inlineCode",{parentName:"p"},"_from")," and irreversibly locks these on the burner contract address.\nInternally marks the shares amount for cover-backed burning by increasing the internal ",(0,a.kt)("inlineCode",{parentName:"p"},"coverSharesBurnRequested")," counter."),(0,a.kt)("p",null,"Can be called only by a holder of ",(0,a.kt)("inlineCode",{parentName:"p"},"REQUEST_BURN_SHARES_ROLE"),". After Lido V2 upgrade not actually called by any contract and supposed to be called by Lido DAO Agent in case of a need for cover."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},"function requestBurnSharesForCover(address _from, uint256 _sharesAmountToBurn)\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Reverts if any of the following is true:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"msg.sender")," is not a holder of the ",(0,a.kt)("inlineCode",{parentName:"li"},"REQUEST_BURN_SHARES_ROLE")," role;"),(0,a.kt)("li",{parentName:"ul"},"no stETH shares provided (",(0,a.kt)("inlineCode",{parentName:"li"},"_sharesAmountToBurn == 0"),");"),(0,a.kt)("li",{parentName:"ul"},"no stETH shares transferred (allowance exceeded)."))),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_from")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"address")),(0,a.kt)("td",{parentName:"tr",align:null},"address to transfer shares from")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_sharesAmountToBurn")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"uint256")),(0,a.kt)("td",{parentName:"tr",align:null},"shares amount (not stETH tokens amount) to burn")))),(0,a.kt)("h3",{id:"requestburnmysteth"},"requestBurnMyStETH()"),(0,a.kt)("p",null,"Transfers stETH tokens from the message sender and irreversibly locks these on the burner contract address.\nInternally converts tokens amount into underlying shares amount and marks the converted amount for\nnon-cover backed burning by increasing the internal ",(0,a.kt)("inlineCode",{parentName:"p"},"nonCoverSharesBurnRequested")," counter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},"function requestBurnMyStETH(uint256 _stETHAmountToBurn) external\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Reverts if any of the following is true:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"msg.sender")," is not a holder of the ",(0,a.kt)("inlineCode",{parentName:"li"},"REQUEST_BURN_MY_STETH_ROLE")," role;"),(0,a.kt)("li",{parentName:"ul"},"no stETH provided (",(0,a.kt)("inlineCode",{parentName:"li"},"_stETHAmountToBurn == 0"),");"),(0,a.kt)("li",{parentName:"ul"},"no stETH transferred (allowance exceeded)."))),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_stETHAmountToBurn")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"uint256")),(0,a.kt)("td",{parentName:"tr",align:null},"stETH tokens amount (not shares amount) to burn")))),(0,a.kt)("h3",{id:"requestburnshares"},"requestBurnShares()"),(0,a.kt)("p",null,"Transfers stETH shares from ",(0,a.kt)("inlineCode",{parentName:"p"},"_from")," and irreversibly locks these on the burner contract address.\nInternally marks the shares amount for non-cover backed burning by increasing the internal ",(0,a.kt)("inlineCode",{parentName:"p"},"nonCoverSharesBurnRequested")," counter."),(0,a.kt)("p",null,"Can be called only by a holder of the ",(0,a.kt)("inlineCode",{parentName:"p"},"REQUEST_BURN_SHARES_ROLE")," role which after\nLido V2 upgrade is either ",(0,a.kt)("a",{parentName:"p",href:"/contracts/lido"},(0,a.kt)("inlineCode",{parentName:"a"},"Lido"))," or ",(0,a.kt)("a",{parentName:"p",href:"/contracts/node-operators-registry"},(0,a.kt)("inlineCode",{parentName:"a"},"NodeOperatorsRegistry")),".\n",(0,a.kt)("a",{parentName:"p",href:"/contracts/lido"},(0,a.kt)("inlineCode",{parentName:"a"},"Lido"))," needs this to request shares locked on the ",(0,a.kt)("a",{parentName:"p",href:"/contracts/withdrawal-queue-erc721"},(0,a.kt)("inlineCode",{parentName:"a"},"WithdrawalQueueERC721"))," and\n",(0,a.kt)("a",{parentName:"p",href:"/contracts/node-operators-registry"},(0,a.kt)("inlineCode",{parentName:"a"},"NodeOperatorsRegistry"))," needs it to request burning shares to penalize the rewards of misbehaving node operators."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},"function requestBurnShares(address _from, uint256 _sharesAmountToBurn)\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Reverts if any of the following is true:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"msg.sender")," is not a holder of ",(0,a.kt)("inlineCode",{parentName:"li"},"REQUEST_BURN_SHARES_ROLE")," role;"),(0,a.kt)("li",{parentName:"ul"},"no stETH shares provided (",(0,a.kt)("inlineCode",{parentName:"li"},"_sharesAmountToBurn == 0"),");"),(0,a.kt)("li",{parentName:"ul"},"no stETH shares transferred (allowance exceeded)."))),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_from")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"address")),(0,a.kt)("td",{parentName:"tr",align:null},"address to transfer shares from")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_sharesAmountToBurn")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"uint256")),(0,a.kt)("td",{parentName:"tr",align:null},"shares amount (not stETH tokens amount) to burn")))),(0,a.kt)("h3",{id:"recoverexcesssteth"},"recoverExcessStETH()"),(0,a.kt)("p",null,"Transfers the excess stETH amount (e.g. belonging to the burner contract address but not marked for burning)\nto the Lido treasury address (the ",(0,a.kt)("inlineCode",{parentName:"p"},"DAO Agent")," contract) set upon the contract construction."),(0,a.kt)("p",null,"Does nothing if the ",(0,a.kt)("inlineCode",{parentName:"p"},"getExcessStETH")," view func returns 0 (zero), i.e. there is no excess stETH\non the contract's balance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},"function recoverExcessStETH() external\n")),(0,a.kt)("h3",{id:"recovererc20"},"recoverERC20()"),(0,a.kt)("p",null,"Transfers a given amount of an ERC20-token (defined by the provided contract address) belonging\nto the burner contract address to the Lido treasury (the ",(0,a.kt)("inlineCode",{parentName:"p"},"DAO Agent")," contract) address."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},"function recoverERC20(address _token, uint256 _amount) external\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Reverts if any of the following is true:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_amount")," value is 0 (zero);"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_token")," address is 0 (zero);"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_token")," address equals to the ",(0,a.kt)("inlineCode",{parentName:"li"},"stETH")," address (use ",(0,a.kt)("inlineCode",{parentName:"li"},"recoverExcessStETH")," instead)."))),(0,a.kt)("h4",{id:"parameters-4"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_token")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"address")),(0,a.kt)("td",{parentName:"tr",align:null},"ERC20-compatible token address to recover")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_amount")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"uint256")),(0,a.kt)("td",{parentName:"tr",align:null},"Amount to recover")))),(0,a.kt)("h3",{id:"recovererc721"},"recoverERC721()"),(0,a.kt)("p",null,"Transfers a given ERC721-compatible NFT (defined by the contract address) belonging\nto the burner contract address to the Lido treasury (the ",(0,a.kt)("inlineCode",{parentName:"p"},"DAO Agent"),") address."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},"function recoverERC721(address _token, uint256 _tokenId) external\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Reverts if any of the following is true:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_token")," address is 0 (zero);"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_token")," address equals to the ",(0,a.kt)("inlineCode",{parentName:"li"},"stETH")," address (use ",(0,a.kt)("inlineCode",{parentName:"li"},"recoverExcessStETH")," instead)."))),(0,a.kt)("h4",{id:"parameters-5"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_token")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"address")),(0,a.kt)("td",{parentName:"tr",align:null},"ERC721-compatible token address to recover")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_tokenId")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"uint256")),(0,a.kt)("td",{parentName:"tr",align:null},"Token id to recover")))),(0,a.kt)("h3",{id:"commitsharestoburn"},"commitSharesToBurn()"),(0,a.kt)("p",null,"Marks previously requested to burn cover and non-cover share as burnt.\nEmits ",(0,a.kt)("inlineCode",{parentName:"p"},"StETHBurnt")," event for the cover and non-cover shares marked as burnt."),(0,a.kt)("p",null,"This function is called by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Lido")," contract together with (i.e., the same tx) performing the actual shares burning."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"_sharesToBurn")," is 0 does nothing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},"function commitSharesToBurn(uint256 _sharesToBurn) external\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Reverts if any of the following is true:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"msg.sender")," address is NOT equal to the ",(0,a.kt)("inlineCode",{parentName:"li"},"stETH")," address;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_sharesToBurn")," is greater than the cover plus non-cover shares requested to burn."))),(0,a.kt)("h4",{id:"parameters-6"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_sharesToBurn")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"uint256")),(0,a.kt)("td",{parentName:"tr",align:null},"Amount of cover plus non-cover shares to mark as burnt")))))}m.isMDXComponent=!0}}]);