"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6132],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||n;return r?o.createElement(g,i(i({ref:t},u),{},{components:r})):o.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=r(3117),a=(r(7294),r(3905));const n={},i="Flow Examples",l={unversionedId:"guides/node-operators/exits/flow-examples",id:"guides/node-operators/exits/flow-examples",title:"Flow Examples",description:"With Lido Tooling (KAPI + Ejector)",source:"@site/docs/guides/node-operators/exits/flow-examples.md",sourceDirName:"guides/node-operators/exits",slug:"/guides/node-operators/exits/flow-examples",permalink:"/guides/node-operators/exits/flow-examples",draft:!1,editUrl:"https://github.com/lidofinance/docs/blob/main/docs/guides/node-operators/exits/flow-examples.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Exit Message Generation & Signing",permalink:"/guides/node-operators/exits/exit-message-generation-signing"},next:{title:"Tooling Setup & Configuration",permalink:"/guides/node-operators/exits/tooling-setup"}},s={},p=[{value:"With Lido Tooling (KAPI + Ejector)",id:"with-lido-tooling-kapi--ejector",level:2},{value:"Ejector Only",id:"ejector-only",level:2},{value:"Without Lido Tooling",id:"without-lido-tooling",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flow-examples"},"Flow Examples"),(0,a.kt)("h2",{id:"with-lido-tooling-kapi--ejector"},"With Lido Tooling (KAPI + Ejector)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hackmd.io/_uploads/Hkl5aS7x2.jpg"},(0,a.kt)("img",{parentName:"a",src:"https://hackmd.io/_uploads/Hkl5aS7x2.jpg",alt:null}))),(0,a.kt)("p",null,"Using the recommended tooling, the flow looks like this:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Get a list of validators for which to generate and sign exit messages - KAPI"),(0,a.kt)("li",{parentName:"ol"},"Generate and sign exit messages:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"keystores - ethdo"),(0,a.kt)("li",{parentName:"ul"},"dirk - ethdo"),(0,a.kt)("li",{parentName:"ul"},"web3signer or a proprietary signer - custom script/tooling")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Encrypt the message files using the Ejector encryptor script"),(0,a.kt)("li",{parentName:"ol"},"Add files to the Ejector"),(0,a.kt)("li",{parentName:"ol"},"Wait until valid Ejector messages are running out"),(0,a.kt)("li",{parentName:"ol"},"Repeat")),(0,a.kt)("h2",{id:"ejector-only"},"Ejector Only"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hackmd.io/_uploads/H1_Z4Creh.jpg"},(0,a.kt)("img",{parentName:"a",src:"https://hackmd.io/_uploads/H1_Z4Creh.jpg",alt:null}))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Get a list of validators for which to generate and sign exit messages:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"By the order keys are stored in (eg choose oldest)"),(0,a.kt)("li",{parentName:"ul"},"Query ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/lido-dao/blob/feature/shapella-upgrade/contracts/0.4.24/nos/NodeOperatorsRegistry.sol"},"NodeOperatorsRegistry")," contract to get all your keys, sort by index, start with the lowest indexes. Each batch, either track the last pre-signed index or query validator status on the Consensus Node to ignore exiting and already exited validators.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Generate and sign exit messages:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"keystores - ethdo"),(0,a.kt)("li",{parentName:"ul"},"dirk - ethdo"),(0,a.kt)("li",{parentName:"ul"},"web3signer or a proprietary signer - custom script/tooling")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Encrypt the message files using the Ejector encryptor script"),(0,a.kt)("li",{parentName:"ol"},"Add files to the Ejector"),(0,a.kt)("li",{parentName:"ol"},"Wait until valid Ejector messages are running out"),(0,a.kt)("li",{parentName:"ol"},"Repeat")),(0,a.kt)("h2",{id:"without-lido-tooling"},"Without Lido Tooling"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hackmd.io/_uploads/rJZ5TBme3.jpg"},(0,a.kt)("img",{parentName:"a",src:"https://hackmd.io/_uploads/rJZ5TBme3.jpg",alt:null}))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Monitor ",(0,a.kt)("inlineCode",{parentName:"li"},"ValidatorExitRequest")," events of the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/lido-dao/blob/feature/shapella-upgrade/contracts/0.8.9/oracle/ValidatorsExitBusOracle.sol"},(0,a.kt)("inlineCode",{parentName:"a"},"ValidatorsExitBusOracle"))),(0,a.kt)("li",{parentName:"ol"},"Generate and sign exit messages:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"keystores - ethdo"),(0,a.kt)("li",{parentName:"ul"},"dirk - ethdo"),(0,a.kt)("li",{parentName:"ul"},"web3signer or a proprietary signer - custom script/tooling")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Submit the messages:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ethdo can do it straight away in the previous step by leaving out ",(0,a.kt)("inlineCode",{parentName:"li"},"--json")," argument"),(0,a.kt)("li",{parentName:"ul"},"Submit it manually to the Consensus Node: ",(0,a.kt)("a",{parentName:"li",href:"https://ethereum.github.io/beacon-APIs/#/Beacon/submitPoolVoluntaryExit"},"API Docs"))))}d.isMDXComponent=!0}}]);