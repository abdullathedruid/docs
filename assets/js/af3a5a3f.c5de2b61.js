"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2935],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=u(n),c=r,k=m["".concat(i,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,o(o({ref:e},p),{},{components:n})):a.createElement(k,o({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[m]="string"==typeof t?t:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3397:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(3117),r=(n(7294),n(3905));const l={},o="wstETH",s={unversionedId:"contracts/wsteth",id:"contracts/wsteth",title:"wstETH",description:"- Source Code",source:"@site/docs/contracts/wsteth.md",sourceDirName:"contracts",slug:"/contracts/wsteth",permalink:"/contracts/wsteth",draft:!1,editUrl:"https://github.com/lidofinance/docs/blob/main/docs/contracts/wsteth.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"WithdrawalVault",permalink:"/contracts/withdrawal-vault"},next:{title:"DepositSecurityModule",permalink:"/contracts/deposit-security-module"}},i={},u=[{value:"View Methods",id:"view-methods",level:2},{value:"getWstETHByStETH()",id:"getwstethbysteth",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"getStETHByWstETH()",id:"getstethbywsteth",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"stEthPerToken()",id:"stethpertoken",level:3},{value:"tokensPerStEth()",id:"tokenspersteth",level:3},{value:"Methods",id:"methods",level:2},{value:"wrap()",id:"wrap",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Returns:",id:"returns",level:4},{value:"unwrap()",id:"unwrap",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Returns:",id:"returns-1",level:4},{value:"receive()",id:"receive",level:3}],p={toc:u},m="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wsteth"},"wstETH"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/lido-dao/blob/master/contracts/0.6.12/WstETH.sol"},"Source Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://etherscan.io/token/0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0"},"Deployed Contract"))),(0,r.kt)("p",null,"It's an ERC20 token that represents the account's share of the total\nsupply of stETH tokens. WstETH token's balance only changes on transfers,\nunlike StETH that is also changed when oracles report staking rewards and\npenalties. It's a \"power user\" token for DeFi protocols which don't\nsupport rebasable tokens."),(0,r.kt)("p",null,"The contract is also a trustless wrapper that accepts stETH tokens and mints\nwstETH in return. Then the user unwraps, the contract burns user's wstETH\nand sends user locked stETH in return."),(0,r.kt)("p",null,"The contract provides the staking shortcut: user can send ETH with regular\ntransfer and get wstETH in return. The contract will send ETH to Lido submit\nmethod, staking it and wrapping the received stETH."),(0,r.kt)("h2",{id:"view-methods"},"View Methods"),(0,r.kt)("h3",{id:"getwstethbysteth"},"getWstETHByStETH()"),(0,r.kt)("p",null,"Returns amount of wstETH for a given amount of stETH"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function getWstETHByStETH(uint256 _stETHAmount) returns (uint256)\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_stETHAmount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"amount of stETH")))),(0,r.kt)("h3",{id:"getstethbywsteth"},"getStETHByWstETH()"),(0,r.kt)("p",null,"Returns amount of stETH for a given amount of wstETH"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function getStETHByWstETH(uint256 _wstETHAmount) returns (uint256)\n")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_wstETHAmount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"amount of wstETH")))),(0,r.kt)("h3",{id:"stethpertoken"},"stEthPerToken()"),(0,r.kt)("p",null,"Returns the amount of stETH tokens corresponding to one wstETH"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function stEthPerToken() returns (uint256)\n")),(0,r.kt)("h3",{id:"tokenspersteth"},"tokensPerStEth()"),(0,r.kt)("p",null,"Returns the amount of wstETH tokens corresponding to one stETH"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function tokensPerStEth() returns (uint256)\n")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"wrap"},"wrap()"),(0,r.kt)("p",null,"Exchanges stETH to wstETH"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function wrap(uint256 _stETHAmount) returns (uint256)\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Requirements:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_stETHAmount")," must be non-zero"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," must approve at least ",(0,r.kt)("inlineCode",{parentName:"li"},"_stETHAmount")," stETH to this contract."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," must have at least ",(0,r.kt)("inlineCode",{parentName:"li"},"_stETHAmount")," of stETH."))),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_stETHAmount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"amount of stETH to wrap in exchange for wstETH")))),(0,r.kt)("h4",{id:"returns"},"Returns:"),(0,r.kt)("p",null,"Amount of wstETH user receives after wrap"),(0,r.kt)("h3",{id:"unwrap"},"unwrap()"),(0,r.kt)("p",null,"Exchanges wstETH to stETH"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function unwrap(uint256 _wstETHAmount) returns (uint256)\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Requirements:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_wstETHAmount")," must be non-zero"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg.sender")," must have at least ",(0,r.kt)("inlineCode",{parentName:"li"},"_wstETHAmount")," wstETH."))),(0,r.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_wstETHAmount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint256")),(0,r.kt)("td",{parentName:"tr",align:null},"amount of wstETH to uwrap in exchange for stETH")))),(0,r.kt)("h4",{id:"returns-1"},"Returns:"),(0,r.kt)("p",null,"Amount of stETH user receives after unwrap"),(0,r.kt)("h3",{id:"receive"},"receive()"),(0,r.kt)("p",null,"Shortcut to stake ETH and auto-wrap returned stETH"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"receive() payable\n")))}d.isMDXComponent=!0}}]);