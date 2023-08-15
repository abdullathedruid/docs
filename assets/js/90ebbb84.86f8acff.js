"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1709],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6907:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(3117),o=(r(7294),r(3905));const a={},c="AccountingOracle",i={unversionedId:"contracts/accounting-oracle",id:"contracts/accounting-oracle",title:"AccountingOracle",description:"- Source code",source:"@site/docs/contracts/accounting-oracle.md",sourceDirName:"contracts",slug:"/contracts/accounting-oracle",permalink:"/contracts/accounting-oracle",draft:!1,editUrl:"https://github.com/lidofinance/docs/blob/main/docs/contracts/accounting-oracle.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"EIP712StETH",permalink:"/contracts/eip712-steth"},next:{title:"ValidatorsExitBusOracle",permalink:"/contracts/validators-exit-bus-oracle"}},s={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"accountingoracle"},"AccountingOracle"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/lido-dao/blob/master/contracts/0.8.9/oracle/AccountingOracle.sol"},"Source code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x852deD011285fe67063a08005c71a85690503Cee"},"Deployed contract"))),(0,o.kt)("p",null,"AccountingOracle is a contract where oracles send addresses' balances controlled by the DAO on the Consensus Layer side.\nThe balances can go up because of reward accumulation and can go down due to slashing and staking penalties.\nOracles are assigned by the DAO."),(0,o.kt)("p",null,"Other major responsibilities of AccountingOracle: updating exited and stuck validators, finalizing withdrawal requests."),(0,o.kt)("p",null,"Oracle daemons push their reports every frame (225 epochs currently, equal to one day) and when the\nnumber of the same reports reaches the ",(0,o.kt)("a",{parentName:"p",href:"#getquorum"},"'quorum'")," value, the report is pushed to the\n",(0,o.kt)("a",{parentName:"p",href:"/contracts/lido"},"Lido contract"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"However, daily oracle reports shouldn't be taken for granted.\nOracle daemons could stop pushing their reports for extended periods of time in case of no\n",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/#finality"},"finality")," on Consensus Layer.\nThis would ultimately result in no oracle reports and no stETH rebases for this whole period.")))}d.isMDXComponent=!0}}]);