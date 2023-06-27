"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),u=i,g=m["".concat(l,".").concat(u)]||m[u]||h[u]||a;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9579:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(3117),i=(r(7294),r(3905));const a={},o="Checking the evm script from Aragon vote",c={unversionedId:"guides/checking-aragon-vote",id:"guides/checking-aragon-vote",title:"Checking the evm script from Aragon vote",description:"We've published a short replit from the script parts we're using for preparing the votes//replit.com/@VictorSuzdalev/EVMVoteScriptParser#main.py",source:"@site/docs/guides/checking-aragon-vote.md",sourceDirName:"guides",slug:"/guides/checking-aragon-vote",permalink:"/guides/checking-aragon-vote",draft:!1,editUrl:"https://github.com/lidofinance/docs/blob/main/docs/guides/checking-aragon-vote.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Guide to being a signer at any Lido DAO multisigs",permalink:"/guides/multisig-signer-manual"},next:{title:"How to verify the multisig is a Gnosis one",permalink:"/guides/checking-gnosis-safe"}},l={},p=[{value:"Checking the evm script",id:"checking-the-evm-script",level:2},{value:"How to check the replit itself",id:"how-to-check-the-replit-itself",level:2}],s={toc:p},m="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"checking-the-evm-script-from-aragon-vote"},"Checking the evm script from Aragon vote"),(0,i.kt)("p",null,"We've published a short replit from the script parts we're using for preparing the votes: ",(0,i.kt)("a",{parentName:"p",href:"https://replit.com/@VictorSuzdalev/EVMVoteScriptParser#main.py"},"https://replit.com/@VictorSuzdalev/EVMVoteScriptParser#main.py")),(0,i.kt)("h2",{id:"checking-the-evm-script"},"Checking the evm script"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start replit.",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4445523/149335803-4b7c71e2-12a1-4c48-973c-c064ffa4d0a7.jpeg",alt:null})),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("a",{parentName:"li",href:"https://replit.com/@VictorSuzdalev/EVMVoteScriptParser#main.py"},"https://replit.com/@VictorSuzdalev/EVMVoteScriptParser#main.py")),(0,i.kt)("li",{parentName:"ol"},"Click big green ",(0,i.kt)("inlineCode",{parentName:"li"},"RUN")," button at the top."),(0,i.kt)("li",{parentName:"ol"},"The script will start installing dependencies \u2014 this takes couple minutes."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Get the evm script from the vote.",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4445523/149335811-1332324b-b1ba-4e4a-af2e-9c79c347ff43.jpeg",alt:null})),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Open voting contract on etherscan ",(0,i.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e#readProxyContract"},"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e#readProxyContract")," (can check the voting contract address in ",(0,i.kt)("a",{parentName:"li",href:"/deployed-contracts#dao-contracts"},"Deployed contracts"),"."),(0,i.kt)("li",{parentName:"ol"},"Check the ",(0,i.kt)("inlineCode",{parentName:"li"},"getVote")," method (sixth in the list): enter the vote in question, push ",(0,i.kt)("inlineCode",{parentName:"li"},"query"),"."),(0,i.kt)("li",{parentName:"ol"},"Copy the ",(0,i.kt)("inlineCode",{parentName:"li"},"script")," text (long string starting with 0x)."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check the script"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Get back to replit, wait for setup to pass."),(0,i.kt)("li",{parentName:"ol"},"The replit will ask for the evm script \u2014 paste the text from etherscan and push ",(0,i.kt)("inlineCode",{parentName:"li"},"enter")," to see the actions in the script.")))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4445523/149335822-1bdc0c66-18f0-43c3-b2cf-124f3706ae36.png",alt:null}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4445523/149335833-3701273a-cb7a-4076-91c7-93cde4d2db4c.png",alt:null})),(0,i.kt)("p",null,"That's it! \ud83d\udcaa\ud83c\udf89\ud83c\udfdd"),(0,i.kt)("h2",{id:"how-to-check-the-replit-itself"},"How to check the replit itself"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"One can compare the parsing results for already passed votes with descriptions on Aragon UI (vote 86 may be a cool example)"),(0,i.kt)("li",{parentName:"ul"},"The replit code is available under ",(0,i.kt)("inlineCode",{parentName:"li"},"Show files")," button on the left; it's heavily based on the scripts & tooling from the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/scripts"},"https://github.com/lidofinance/scripts")," repo")))}h.isMDXComponent=!0}}]);