"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5161],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1925:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(3117),n=(r(7294),r(3905));const o={},i="OssifiableProxy",l={unversionedId:"contracts/ossifiable-proxy",id:"contracts/ossifiable-proxy",title:"OssifiableProxy",description:"- Source code",source:"@site/docs/contracts/ossifiable-proxy.md",sourceDirName:"contracts",slug:"/contracts/ossifiable-proxy",permalink:"/contracts/ossifiable-proxy",draft:!1,editUrl:"https://github.com/lidofinance/docs/blob/main/docs/contracts/ossifiable-proxy.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"GateSeal",permalink:"/contracts/gate-seal"},next:{title:"Bug Bounties with Immunefi",permalink:"/security/bugbounty"}},c={},s=[],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ossifiableproxy"},"OssifiableProxy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/lido-dao/blob/master/contracts/0.8.9/proxy/OssifiableProxy.sol"},"Source code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/withdrawals-manager-stub/blob/main/contracts/WithdrawalsManagerProxy.sol"},"Source code of ",(0,n.kt)("inlineCode",{parentName:"a"},"WithdrawalsManagerProxy")))),(0,n.kt)("p",null,"Deployed instances:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/contracts/lido-locator"},"LidoLocator")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/contracts/staking-router"},"StakingRouter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/contracts/withdrawal-queue-erc721"},"WithdrawalQueueERC721")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/contracts/withdrawal-vault"},"WithdrawalVault")," (uses ",(0,n.kt)("inlineCode",{parentName:"li"},"WithdrawalsManagerProxy"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/contracts/accounting-oracle"},"AccountingOracle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/contracts/validators-exit-bus-oracle"},"ValidatorsExitBusOracle"))),(0,n.kt)("p",null,"A common proxy contract that used for Lido non-Aragon upgradable contract deployments.\nFollows the ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1967"},"ERC1967")," proxy standard and allows ossification\n(set proxy owner to zero address) for the final implementation version."))}f.isMDXComponent=!0}}]);