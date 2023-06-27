"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(k,r(r({ref:t},c),{},{components:n})):i.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(3117),o=(n(7294),n(3905));const a={},r="Keys API",l={unversionedId:"guides/kapi-guide",id:"guides/kapi-guide",title:"Keys API",description:"Simple Lido keys and validators HTTP API.",source:"@site/docs/guides/kapi-guide.md",sourceDirName:"guides",slug:"/guides/kapi-guide",permalink:"/guides/kapi-guide",draft:!1,editUrl:"https://github.com/lidofinance/docs/blob/main/docs/guides/kapi-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Validator Ejector",permalink:"/guides/validator-ejector-guide"},next:{title:"Multisig deployment",permalink:"/guides/multisig-deployment"}},p={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"How to Run",id:"how-to-run",level:2},{value:"Monitoring",id:"monitoring",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"keys-api"},"Keys API"),(0,o.kt)("p",null,"Simple Lido keys and validators HTTP API."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"2 core CPU"),(0,o.kt)("li",{parentName:"ol"},"5 GB RAM",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Keys-API-DB \u2014 500MB"),(0,o.kt)("li",{parentName:"ul"},"Keys-API \u2014 4GB"))),(0,o.kt)("li",{parentName:"ol"},"EL Full node"),(0,o.kt)("li",{parentName:"ol"},"CL node for applications like the Ejector that use the ",(0,o.kt)("a",{parentName:"li",href:"https://hackmd.io/fv8btyNTTOGLZI6LqYyYIg?view#validators"},"validators API"),". For Teku, please use the archive mode. Nimbus is currently not supported.")),(0,o.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,o.kt)("p",null,"An annotated env sample is available in the repository:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-keys-api/blob/main/sample.env"},"https://github.com/lidofinance/lido-keys-api/blob/main/sample.env")),(0,o.kt)("h2",{id:"how-to-run"},"How to Run"),(0,o.kt)("p",null,"For running ",(0,o.kt)("inlineCode",{parentName:"p"},"Keys Api"),", please use a stable version's image hash, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.lido.fi/guides/tooling/"},"available here"),"."),(0,o.kt)("p",null,"Below you can find a docker-compose example for running the service with a database."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-keys-api/blob/main/docker-compose.yml"},"https://github.com/lidofinance/lido-keys-api/blob/main/docker-compose.yml")),(0,o.kt)("p",null,"To run using docker-compose:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,o.kt)("p",null,"Now you can access the API on ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:${PORT}/api"),"."),(0,o.kt)("h2",{id:"monitoring"},"Monitoring"),(0,o.kt)("p",null,"Prometheus metrics will be available on endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:${PORT}/metrics"),"."),(0,o.kt)("p",null,"You can find configs and dashboards for running Prometheus and Grafana locally in the repository: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-keys-api/tree/main/grafana"},"Grafana"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-keys-api/tree/main/prometheus"},"Prometheus"),"."),(0,o.kt)("p",null,"Example of a ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," with metrics setup:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-keys-api/blob/main/docker-compose.metrics.yml"},"https://github.com/lidofinance/lido-keys-api/blob/main/docker-compose.metrics.yml")),(0,o.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,o.kt)("p",null,"Keys API GitHub Repository (Open Source)\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-keys-api"},"https://github.com/lidofinance/lido-keys-api")),(0,o.kt)("p",null,"API and internal logic documentation\n",(0,o.kt)("a",{parentName:"p",href:"https://hackmd.io/@lido/B1aCdW6Lo"},"https://hackmd.io/@lido/B1aCdW6Lo")))}d.isMDXComponent=!0}}]);