"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(n),u=o,m=f["".concat(l,".").concat(u)]||f[u]||d[u]||s;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[f]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(3117),o=(n(7294),n(3905));const s={},i="How to verify the multisig is a Gnosis one",a={unversionedId:"guides/checking-gnosis-safe",id:"guides/checking-gnosis-safe",title:"How to verify the multisig is a Gnosis one",description:"Gnosis multisig contracts are usually deployed from the Gnosis factory contracts. Gnosis has the list of proxy_factory contracts addresses deployed to different networks \u2014 https://github.com/safe-global/safe-deployments/tree/main/src/assets",source:"@site/docs/guides/checking-gnosis-safe.md",sourceDirName:"guides",slug:"/guides/checking-gnosis-safe",permalink:"/guides/checking-gnosis-safe",draft:!1,editUrl:"https://github.com/lidofinance/docs/blob/main/docs/guides/checking-gnosis-safe.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Checking the evm script from Aragon vote",permalink:"/guides/checking-aragon-vote"},next:{title:"How to claim 1inch stETH/LDO pool rewards",permalink:"/guides/1inch-pool-rewards"}},l={},c=[{value:"How to verify my multisig is deployed from Gnosis factory",id:"how-to-verify-my-multisig-is-deployed-from-gnosis-factory",level:2}],p={toc:c},f="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-verify-the-multisig-is-a-gnosis-one"},"How to verify the multisig is a Gnosis one"),(0,o.kt)("p",null,"Gnosis multisig contracts are usually deployed from the Gnosis factory contracts. Gnosis has the list of ",(0,o.kt)("inlineCode",{parentName:"p"},"proxy_factory")," contracts addresses deployed to different networks \u2014 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/safe-global/safe-deployments/tree/main/src/assets"},"https://github.com/safe-global/safe-deployments/tree/main/src/assets")),(0,o.kt)("h2",{id:"how-to-verify-my-multisig-is-deployed-from-gnosis-factory"},"How to verify my multisig is deployed from Gnosis factory"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Pick the contract version in gnosis UI (settings->safe details) \u2014 those usually are ",(0,o.kt)("inlineCode",{parentName:"li"},"1.0.0"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"1.1.1"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"1.2.0")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"1.3.0"),"."),(0,o.kt)("li",{parentName:"ol"},"Open the safe address in network explorer"),(0,o.kt)("li",{parentName:"ol"},'Find the safe creation tx (should be the oldest one in "Internal Transactions" tab & have "Contract Creation" note)'),(0,o.kt)("li",{parentName:"ol"},"Get the address the safe creation tx went to \u2014 should be a factory contract"),(0,o.kt)("li",{parentName:"ol"},"Open the corresponding version's folder on github ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/safe-global/safe-deployments/tree/main/src/assets"},"https://github.com/safe-global/safe-deployments/tree/main/src/assets"),", open ",(0,o.kt)("inlineCode",{parentName:"li"},"proxy_factory.json")," file & find the address in the list of deployed addresses")))}d.isMDXComponent=!0}}]);