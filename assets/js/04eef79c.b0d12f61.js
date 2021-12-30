"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[849],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:e},p),{},{components:n})):r.createElement(m,a({ref:e},p))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4975:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={},c="SDKs",s={unversionedId:"integrations/sdk",id:"integrations/sdk",title:"SDKs",description:"Lido UI Library",source:"@site/docs/integrations/sdk.md",sourceDirName:"integrations",slug:"/integrations/sdk",permalink:"/integrations/sdk",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/integrations/sdk.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Guide to Easy Track",permalink:"/guides/easy-track-guide"},next:{title:"Subgraph",permalink:"/integrations/subgraph"}},p=[{value:"Lido UI Library",id:"lido-ui-library",children:[],level:3},{value:"Lido JS SDK",id:"lido-js-sdk",children:[],level:3},{value:"Lido Python SDK",id:"lido-python-sdk",children:[],level:3}],u={toc:p};function d(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sdks"},"SDKs"),(0,o.kt)("h3",{id:"lido-ui-library"},"Lido UI Library"),(0,o.kt)("p",null,"React components for Lido Finance projects."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Storybook: ",(0,o.kt)("a",{parentName:"li",href:"https://ui.lido.fi/"},"https://ui.lido.fi")),(0,o.kt)("li",{parentName:"ul"},"GitHub: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/ui"},"https://github.com/lidofinance/ui")),(0,o.kt)("li",{parentName:"ul"},"NPM: ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/search?q=%40lidofinance/"},"https://www.npmjs.com/search?q=%40lidofinance/"))),(0,o.kt)("h3",{id:"lido-js-sdk"},"Lido JS SDK"),(0,o.kt)("p",null,"Library for interaction with Lido contracts."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/lido-js-sdk"},"https://github.com/lidofinance/lido-js-sdk")),(0,o.kt)("li",{parentName:"ul"},"NPM: ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/search?q=%40lido-sdk/"},"https://www.npmjs.com/search?q=%40lido-sdk/"))),(0,o.kt)("h3",{id:"lido-python-sdk"},"Lido Python SDK"),(0,o.kt)("p",null,"Library to efficiently load network data for Lido, validate node operator keys and find key duplicates."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pypi: ",(0,o.kt)("a",{parentName:"li",href:"https://pypi.org/project/lido-sdk/"},"https://pypi.org/project/lido-sdk/")),(0,o.kt)("li",{parentName:"ul"},"GitHub: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/lido-python-sdk"},"https://github.com/lidofinance/lido-python-sdk"))))}d.isMDXComponent=!0}}]);