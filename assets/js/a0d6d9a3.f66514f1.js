"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4035],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,y=u["".concat(i,".").concat(d)]||u[d]||f[d]||c;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var n=r(3117),a=(r(7294),r(3905));const c={},o="LegacyOracle",l={unversionedId:"contracts/legacy-oracle",id:"contracts/legacy-oracle",title:"LegacyOracle",description:"- Source code",source:"@site/docs/contracts/legacy-oracle.md",sourceDirName:"contracts",slug:"/contracts/legacy-oracle",permalink:"/contracts/legacy-oracle",draft:!1,editUrl:"https://github.com/lidofinance/docs/blob/main/docs/contracts/legacy-oracle.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"HashConsensus",permalink:"/contracts/hash-consensus"},next:{title:"OracleReportSanityChecker",permalink:"/contracts/oracle-report-sanity-checker"}},i={},s=[],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"legacyoracle"},"LegacyOracle"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/lido-dao/blob/master/contracts/0.4.24/oracle/LegacyOracle.sol"},"Source code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x442af784A788A5bd6F42A01Ebe9F287a871243fb"},"Deployed contract"))),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"LegacyOracle is used to be a previous oracle contract for Lido.\nIt's left currently for compatibility reasons only and might be deprecated completely in the future releases.")),(0,a.kt)("p",null,"Superseded with ",(0,a.kt)("a",{parentName:"p",href:"/contracts/accounting-oracle"},"AccountingOracle"),"."))}f.isMDXComponent=!0}}]);