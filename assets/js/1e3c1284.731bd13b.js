"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[357],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||a;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7951:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],l={},s="Lido DAO",c={unversionedId:"lido-dao",id:"lido-dao",title:"Lido DAO",description:"The Lido DAO is a Decentralised Autonomous Organisation that manages the liquid staking protocols by deciding on key parameters (e.g., setting fees, assigning node operators and oracles, etc.) through the voting power of governance token (LDO) holders. Also, the DAO will accumulate service fees and spend them on research, development, liquidity mining incentives and protocol upgrades.",source:"@site/docs/lido-dao.md",sourceDirName:".",slug:"/lido-dao",permalink:"/lido-dao",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/lido-dao.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Introduction",permalink:"/"},next:{title:"stETH/wstETH integration guide",permalink:"/guides/steth-integration-guide"}},d=[{value:"Why DAO?",id:"why-dao",children:[],level:2},{value:"Functions",id:"functions",children:[],level:2},{value:"Governance",id:"governance",children:[],level:2},{value:"Software",id:"software",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lido-dao"},"Lido DAO"),(0,a.kt)("p",null,"The Lido DAO is a Decentralised Autonomous Organisation that manages the liquid staking protocols by deciding on key parameters (e.g., setting fees, assigning node operators and oracles, etc.) through the voting power of governance token (",(0,a.kt)("inlineCode",{parentName:"p"},"LDO"),") holders. Also, the DAO will accumulate service fees and spend them on research, development, liquidity mining incentives and protocol upgrades. "),(0,a.kt)("h2",{id:"why-dao"},"Why DAO?"),(0,a.kt)("p",null,"The DAO is the logical compromise between full centralization and decentralisation, which allows the deployment of competitive products without full centralization and custody on the exchanges. We do not believe that it is possible to make a liquid staking protocol that is completely trustless. A DAO is an optimal structure for launching Lido as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DAO is essentially a decentralised entity, which is enabling a focus on community, rather than just profit, and might offer a more socially-conscious structure and consequent decision-making; "),(0,a.kt)("li",{parentName:"ul"},"DAO will be able to cover the costs of developing and upgrading the protocol from the DAO token treasury. "),(0,a.kt)("li",{parentName:"ul"},"And other management activities as well if there is a technical ability")),(0,a.kt)("p",null,"The DAO will accumulate service fees from Lido, which is funnelled into the insurance and development funds, distributed by the DAO."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("p",null,"Lido is managed by the Lido DAO. The DAO members govern Lido to ensure its efficiency and stability. The Lido DAO should do the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Build, deploy, update and decide on key parameters of liquid staking protocols, approve incentives for parties that contribute towards DAO\u2019s goals"),(0,a.kt)("li",{parentName:"ul"},"Node operators management. Assign initial DAO-vetted node operators, scout and qualify new node operators and penalise the existing ones slashed by chains rules"),(0,a.kt)("li",{parentName:"ul"},"Approve LEGO grants to support different research and so initiatives protocol guilds"),(0,a.kt)("li",{parentName:"ul"},"Payments to full-time contributors and other operational duties"),(0,a.kt)("li",{parentName:"ul"},"Security, bug bounty program, respond to emergency"),(0,a.kt)("li",{parentName:"ul"},"Accumulation of service fees from Lido, which can be funnelled into the insurance and development funds, distributed by the DAO.")),(0,a.kt)("h2",{id:"governance"},"Governance"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"LDO")," token governs all Lido DAO governance and network decisions to ensure its prolonged stability and decentralised decision-making to facilitate the growth of fair, and transparent liquid staking.  The ",(0,a.kt)("inlineCode",{parentName:"p"},"LDO")," contract address - ",(0,a.kt)("inlineCode",{parentName:"p"},"0x5a98fcbea516cf06857215779fd812ca3bef1b32"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udcdd For the more detailed information about governance, please, check out ",(0,a.kt)("a",{parentName:"p",href:"https://lido.fi/governance"},"governance")," page. ")),(0,a.kt)("p",null,"To have a vote in the Lido DAO, and to contribute to the determination of any of the topics outlined above, one must hold the ",(0,a.kt)("inlineCode",{parentName:"p"},"LDO")," governance token. Holding ",(0,a.kt)("inlineCode",{parentName:"p"},"LDO")," gives DAO members a vote in the future of Lido, allowing each DAO member to have a personal say in the community. ",(0,a.kt)("inlineCode",{parentName:"p"},"LDO")," voting weight is proportional to the amount of ",(0,a.kt)("inlineCode",{parentName:"p"},"LDO")," a voter stakes in the voting contract. The more LDO in a user\u2019s voting contract, the greater the decision-making power the voter gets. The exact mechanism of ",(0,a.kt)("inlineCode",{parentName:"p"},"LDO")," voting can be upgraded just like the other DAO applications."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udcdd If you have any initiatives you think will benefit the Lido protocol, share your thoughts in our ",(0,a.kt)("a",{parentName:"p",href:"https://research.lido.fi"},"governance forum"),".")),(0,a.kt)("h2",{id:"software"},"Software"),(0,a.kt)("p",null,"The Lido DAO is an ",(0,a.kt)("a",{parentName:"p",href:"https://aragon.org/dao"},"Aragon")," organization. Since Aragon provides a full end-to-end framework to build DAOs, we use its standard tools."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udcdd The governance process only takes place within the Ethereum network. For other networks, this process is implemented through committee and multisig (we need a multisig list).")),(0,a.kt)("p",null,"While the Aragon application is a powerful tool for DAO governance due to the fact that it is both transparent and reliable, it is ill-suited to manage routine operations that either have strong token-holder support and/or are only relevant to a subsection of the DAO (e.g. the financial operations team). For that reason, ",(0,a.kt)("a",{parentName:"p",href:"https://easytrack.lido.fi/"},"Easy Track")," is developed as an efficient mechanism to assist with routine and uncontentious governance proposals for the Lido DAO. Importantly, security, flexibility, and scalability is all paramount concerns throughout the development of Easy Track, with extensive measures taken to ensure that safety has not been compromised for convenience."),(0,a.kt)("p",null,"The novel Easy Track motions is not only reducing voter fatigue and on-chain gas costs for token-holders, but is also facilitating the growth of the DAO by providing greater autonomy to the sub-committees and node operators within the organisation."))}p.isMDXComponent=!0}}]);