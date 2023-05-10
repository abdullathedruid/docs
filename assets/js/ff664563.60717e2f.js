"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4597],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return r?a.createElement(h,o(o({ref:t},d),{},{components:r})):a.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1036:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={},o="**API**",l={unversionedId:"integrations/api",id:"integrations/api",title:"**API**",description:"Here you can find various Lido APIs which you can integrate in your app or website:",source:"@site/docs/integrations/api.md",sourceDirName:"integrations",slug:"/integrations/api",permalink:"/integrations/api",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/integrations/api.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Lido V2 mainnet parameters",permalink:"/guides/verify-lido-v2-upgrade-manual"},next:{title:"Wallets",permalink:"/integrations/wallets"}},s=[{value:"Lido APR",id:"lido-apr",children:[{value:"<strong>Simple Moving Average Lido APR for 7 last days:</strong>",id:"simple-moving-average-lido-apr-for-7-last-days",children:[{value:"Goerli",id:"goerli",children:[],level:4}],level:3},{value:"<strong>Last Lido APR for stETH</strong>",id:"last-lido-apr-for-steth",children:[{value:"Goerli",id:"goerli-1",children:[],level:4}],level:3}],level:2},{value:"Lido Reward History",id:"lido-reward-history",children:[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Goerli",id:"goerli-2",children:[],level:3}],level:2}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"api"},(0,n.kt)("strong",{parentName:"h1"},"API")),(0,n.kt)("p",null,"Here you can find various Lido APIs which you can integrate in your app or website:"),(0,n.kt)("h2",{id:"lido-apr"},"Lido APR"),(0,n.kt)("p",null,"API provides Ethereum and Lido staking APR, which include:"),(0,n.kt)("h3",{id:"simple-moving-average-lido-apr-for-7-last-days"},(0,n.kt)("strong",{parentName:"h3"},"Simple Moving Average Lido APR for 7 last days:")),(0,n.kt)("p",null,"This APR value is based on Simple Moving Average of APR values over a period of 7 days."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://eth-api.lido.fi/v1/protocol/steth/apr/sma\n")),(0,n.kt)("p",null,"Response schema and examples are available in the ",(0,n.kt)("a",{parentName:"p",href:"https://eth-api.lido.fi/api/static/index.html#/APR%20for%20Eth%20and%20stEth/ProtocolController_findSmaAPRforSTETH"},"Swagger API documentation")),(0,n.kt)("h4",{id:"goerli"},"Goerli"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://eth-api.testnet.fi/v1/protocol/steth/apr/sma\n")),(0,n.kt)("h3",{id:"last-lido-apr-for-steth"},(0,n.kt)("strong",{parentName:"h3"},"Last Lido APR for stETH")),(0,n.kt)("p",null,"The latest staking APR value. For Lido V1, we collected APR values by periodically fetching ",(0,n.kt)("a",{parentName:"p",href:"https://docs.lido.fi/contracts/lido-oracle#receiver-function-to-be-invoked-on-report-pushes"},"oracle report events"),". For the V2 version, the value is calculated based on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-dao/blob/e45c4d6/contracts/0.4.24/Lido.sol#L232"},"rebase events"),"."),(0,n.kt)("p",null,"V2 APR calculation:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"// Emits when token rebased (total supply and/or total shares were changed)\nevent TokenRebased(\n    uint256 indexed reportTimestamp,\n    uint256 timeElapsed,\n    uint256 preTotalShares,\n    uint256 preTotalEther, /* preTotalPooledEther */\n    uint256 postTotalShares,\n    uint256 postTotalEther, /* postTotalPooledEther */\n    uint256 sharesMintedAsFees /* fee part included in `postTotalShares` */\n);\n\npreShareRate = preTotalEther * 1e27 / preTotalShares\npostShareRate = postTotalEther * 1e27 / postTotalShares\n\nuserAPR = \n    secondsInYear * (\n        (postShareRate - preShareRate) / preShareRate\n    ) / timeElapsed\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://eth-api.lido.fi/v1/protocol/steth/apr/last\n")),(0,n.kt)("p",null,"Response schema and examples are available in the ",(0,n.kt)("a",{parentName:"p",href:"https://eth-api.lido.fi/api/static/index.html#/APR%20for%20Eth%20and%20stEth/ProtocolController_findLastAPRforSTETH"},"Swagger API documentation")),(0,n.kt)("h4",{id:"goerli-1"},"Goerli"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://eth-api.testnet.fi/v1/protocol/steth/apr/last\n")),(0,n.kt)("h2",{id:"lido-reward-history"},"Lido Reward History"),(0,n.kt)("p",null,"Reward History Backend provides an API which returns all stETH interactions by an address and calculates its daily stETH rewards."),(0,n.kt)("p",null,"Currently, there's just one endpoint (",(0,n.kt)("inlineCode",{parentName:"p"},"/"),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://reward-history-backend.lido.fi/?address=0x12345\n")),(0,n.kt)("p",null,"Response schema and examples are available in the ",(0,n.kt)("a",{parentName:"p",href:"https://reward-history-backend.lido.fi/api"},"Swagger API documentation")),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"The only required query parameter is ",(0,n.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,n.kt)("p",null,"Optional Parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"currency"),": USD/EUR/GBP - Fiat currency in which to display stETH denominated in fiat. ",(0,n.kt)("strong",{parentName:"li"},"USD")," by default."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"archiveRate"),": true/false - Use an exchange rate close to the transaction time when calculating currency values instead of the current one. ",(0,n.kt)("strong",{parentName:"li"},"true")," by default."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"onlyRewards"),": true/false - Include only rewards without transfers or stakings. ",(0,n.kt)("strong",{parentName:"li"},"false")," by default."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sort"),": asc/desc - Sort of transactions by blockTime. ",(0,n.kt)("strong",{parentName:"li"},"desc")," by default."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"skip"),": number - Amount of data items to skip."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"limit"),": number - Maximum amount of data items to respond with.")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"skip")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"limit")," params are used for pagination eg:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"skip: 0, limit: 100 = 1 page\nskip: 100, limit: 100 = 2 page\nskip: 200, limit: 100 = 3 page\n")),(0,n.kt)("h3",{id:"goerli-2"},"Goerli"),(0,n.kt)("p",null,"Reward History Backend is also available on Goerli, however it's currently unable to handle requests until a limits issue is fixed."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"http://reward-history-backend.testnet.fi/?address=0x12345\n")))}d.isMDXComponent=!0}}]);