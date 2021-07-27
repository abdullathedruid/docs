(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),c=(n(0),n(95)),o={},b={unversionedId:"contracts/wsteth",id:"contracts/wsteth",isDocsHomePage:!1,title:"wstETH",description:"- Source Code",source:"@site/docs/contracts/wsteth.md",sourceDirName:"contracts",slug:"/contracts/wsteth",permalink:"/contracts/wsteth",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/contracts/wsteth.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"NodeOperatorsRegistry",permalink:"/contracts/node-operators-registry"},next:{title:"Bug Bounties with Immunefi",permalink:"/security/bugbounty"}},l=[{value:"View Methods",id:"view-methods",children:[{value:"getWstETHByStETH()",id:"getwstethbysteth",children:[]},{value:"getStETHByWstETH()",id:"getstethbywsteth",children:[]},{value:"stEthPerToken()",id:"stethpertoken",children:[]},{value:"tokensPerStEth()",id:"tokenspersteth",children:[]}]},{value:"Methods",id:"methods",children:[{value:"wrap()",id:"wrap",children:[]},{value:"unwrap()",id:"unwrap",children:[]},{value:"receive()",id:"receive",children:[]}]}],i={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/lidofinance/lido-dao/blob/develop/contracts/0.6.12/WstETH.sol"},"Source Code")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://etherscan.io/token/0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0"},"Deployed Contract"))),Object(c.b)("p",null,"It's an ERC20 token that represents the account's share of the total\nsupply of stETH tokens. WstETH token's balance only changes on transfers,\nunlike StETH that is also changed when oracles report staking rewards and\npenalties. It's a \"power user\" token for DeFi protocols which don't\nsupport rebasable tokens."),Object(c.b)("p",null,"The contract is also a trustless wrapper that accepts stETH tokens and mints\nwstETH in return. Then the user unwraps, the contract burns user's wstETH\nand sends user locked stETH in return."),Object(c.b)("p",null,"The contract provides the staking shortcut: user can send ETH with regular\ntransfer and get wstETH in return. The contract will send ETH to Lido submit\nmethod, staking it and wrapping the received stETH."),Object(c.b)("h2",{id:"view-methods"},"View Methods"),Object(c.b)("h3",{id:"getwstethbysteth"},"getWstETHByStETH()"),Object(c.b)("p",null,"Returns amount of wstETH for a given amount of stETH"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sol"},"function getWstETHByStETH(uint256 _stETHAmount) returns (uint256)\n")),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_stETHAmount")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"uint256")),Object(c.b)("td",{parentName:"tr",align:null},"amount of stETH")))),Object(c.b)("h3",{id:"getstethbywsteth"},"getStETHByWstETH()"),Object(c.b)("p",null,"Returns amount of stETH for a given amount of wstETH"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sol"},"function getStETHByWstETH(uint256 _wstETHAmount) returns (uint256)\n")),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Parameter Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_wstETHAmount")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"uint256")),Object(c.b)("td",{parentName:"tr",align:null},"amount of wstETH")))),Object(c.b)("h3",{id:"stethpertoken"},"stEthPerToken()"),Object(c.b)("p",null,"Returns the amount of stETH tokens corresponding to one wstETH"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sol"},"function stEthPerToken() returns (uint256)\n")),Object(c.b)("h3",{id:"tokenspersteth"},"tokensPerStEth()"),Object(c.b)("p",null,"Returns the amount of wstETH tokens corresponding to one stETH"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sol"},"function tokensPerStEth() returns (uint256)\n")),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"wrap"},"wrap()"),Object(c.b)("p",null,"Exchanges stETH to wstETH"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sol"},"function wrap(uint256 _stETHAmount) returns (uint256)\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Requirements:"),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"_stETHAmount")," must be non-zero"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"msg.sender")," must approve at least ",Object(c.b)("inlineCode",{parentName:"li"},"_stETHAmount")," stETH to this contract."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"msg.sender")," must have at least ",Object(c.b)("inlineCode",{parentName:"li"},"_stETHAmount")," of stETH.")))),Object(c.b)("h4",{id:"parameters-2"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Parameter Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_stETHAmount")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"uint256")),Object(c.b)("td",{parentName:"tr",align:null},"amount of stETH to wrap in exchange for wstETH")))),Object(c.b)("h4",{id:"returns"},"Returns:"),Object(c.b)("p",null,"Amount of wstETH user receives after wrap"),Object(c.b)("h3",{id:"unwrap"},"unwrap()"),Object(c.b)("p",null,"Exchanges wstETH to stETH"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sol"},"function unwrap(uint256 _wstETHAmount) returns (uint256)\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Requirements:"),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"_wstETHAmount")," must be non-zero"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"msg.sender")," must have at least ",Object(c.b)("inlineCode",{parentName:"li"},"_wstETHAmount")," wstETH.")))),Object(c.b)("h4",{id:"parameters-3"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Parameter Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"_wstETHAmount")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"uint256")),Object(c.b)("td",{parentName:"tr",align:null},"amount of wstETH to uwrap in exchange for stETH")))),Object(c.b)("h4",{id:"returns-1"},"Returns:"),Object(c.b)("p",null,"Amount of stETH user receives after unwrap"),Object(c.b)("h3",{id:"receive"},"receive()"),Object(c.b)("p",null,"Shortcut to stake ETH and auto-wrap returned stETH"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sol"},"receive() payable\n")))}s.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||c;return n?r.a.createElement(d,b(b({ref:t},i),{},{components:n})):r.a.createElement(d,b({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var i=2;i<c;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);