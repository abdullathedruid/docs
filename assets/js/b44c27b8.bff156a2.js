"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[676],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||s;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1524:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),o=["components"],i={},c="StETH superuser functions",l={unversionedId:"token-guides/steth-superuser-functions",id:"token-guides/steth-superuser-functions",title:"StETH superuser functions",description:"Superuser privileges and accounts",source:"@site/docs/token-guides/steth-superuser-functions.md",sourceDirName:"token-guides",slug:"/token-guides/steth-superuser-functions",permalink:"/token-guides/steth-superuser-functions",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/token-guides/steth-superuser-functions.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"AIP",permalink:"/integrations/aave/aip"},next:{title:"stETH on AAVE caveats",permalink:"/token-guides/steth-on-aave-caveats"}},u=[{value:"Superuser privileges and accounts",id:"superuser-privileges-and-accounts",children:[],level:2},{value:"Superuser roles",id:"superuser-roles",children:[],level:2},{value:"Oracle rebasing reports",id:"oracle-rebasing-reports",children:[],level:2},{value:"Superuser privileges decentralization",id:"superuser-privileges-decentralization",children:[],level:2},{value:"Superuser actions thresholds",id:"superuser-actions-thresholds",children:[],level:2},{value:"Superuser keys management",id:"superuser-keys-management",children:[],level:2},{value:"Superuser keys generation procedure",id:"superuser-keys-generation-procedure",children:[],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"steth-superuser-functions"},"StETH superuser functions"),(0,s.kt)("h2",{id:"superuser-privileges-and-accounts"},"Superuser privileges and accounts"),(0,s.kt)("p",null,"StETH token is the upgradable contract behind ",(0,s.kt)("inlineCode",{parentName:"p"},"AppProxyUpgradeable")," proxy at ",(0,s.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xae7ab96520de3a18e5e111b5eaab095312d7fe84"},"https://etherscan.io/address/0xae7ab96520de3a18e5e111b5eaab095312d7fe84"),". Lido DAO can change the implementation with the successful DAO vote."),(0,s.kt)("p",null,"StETH can be stopped by the DAO vote. No operations changing stETH balances can be performed on the stopped contract:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"approve")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"transfer")," calls revert;"),(0,s.kt)("li",{parentName:"ol"},"No mints or burns can be performed. Note that StETH contract can mint stETH only in two cases: user deposits (tokens are minted to the depositor's address) or fee distribution (where tokens are minted in accordance to fee calculations to the addresses set in the contract \u2014 namely the DAO treasury, the insurance fund and the Node Operator's reward addresses);"),(0,s.kt)("li",{parentName:"ol"},"Users can't submit their ETH to the Lido;"),(0,s.kt)("li",{parentName:"ol"},"Oracle can't push updates on the ETH2 staking state;"),(0,s.kt)("li",{parentName:"ol"},"No ETH buffered in Lido can be sent to the ETH2 deposit contract;"),(0,s.kt)("li",{parentName:"ol"},"Staking withdrawals (once available) can't be performed.")),(0,s.kt)("h2",{id:"superuser-roles"},"Superuser roles"),(0,s.kt)("p",null,"StETH contract specifies PAUSE_ROLE (address can pause the protocol) and BURN_ROLE (address can burn stETH tokens):"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"PAUSE_ROLE")," assigned only to the DAO Voting contract ",(0,s.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x2e59a20f205bb85a89c53f1936454680651e618e"},"https://etherscan.io/address/0x2e59a20f205bb85a89c53f1936454680651e618e")),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"BURN_ROLE")," assigned to the ",(0,s.kt)("a",{parentName:"li",href:"/contracts/self-owned-steth-burner"},(0,s.kt)("inlineCode",{parentName:"a"},"SelfOwnedStETHBurner"))," contract with additional ACL parameters effectively allowing to burn stETH tokens only from the contract own balance. Tokens could be requested to burn only by direct request from the DAO Voting.")),(0,s.kt)("p",null,"Note that there are other roles for DAO management, but they don't affect the token actions. These roles are MANAGE_FEE (set staking fee amount), MANAGE_WITHDRAWAL_KEY (set withdrawal credentials of the protocol), MANAGE_PROTOCOL_CONTRACTS_ROLE (set oracle contract address, set DAO treasury address to send fee to, set DAO insurance address to send fee to). The roles and addresses can be checked in the Aragon UI ",(0,s.kt)("a",{parentName:"p",href:"https://mainnet.lido.fi/#/lido-dao/permissions/app/0xae7ab96520de3a18e5e111b5eaab095312d7fe84"},"https://mainnet.lido.fi/#/lido-dao/permissions/app/0xae7ab96520de3a18e5e111b5eaab095312d7fe84")),(0,s.kt)("h2",{id:"oracle-rebasing-reports"},"Oracle rebasing reports"),(0,s.kt)("p",null,"StETH is a rebasable token. It receives reports from the Oracle contract (",(0,s.kt)("inlineCode",{parentName:"p"},"handleOracleReport")," method) with the state of the protocol's ETH2 validators balances, and updates all the balances of stETH holders distributing the protocol's total staking rewards and penalties. The protocol employs distributed Oracle reporting: there are five Oracle daemons running by the Lido Node operators, and the Oracle smart contract formats beacon report on the consensus of three of five daemon reports. On top of the consensus mechanics, there are sanity checks for reports with sudden drops in total ETH2 balance or rewards with higher-than-possible APY. Current Oracle contract is ",(0,s.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x442af784A788A5bd6F42A01Ebe9F287a871243fb"},"https://etherscan.io/address/0x442af784A788A5bd6F42A01Ebe9F287a871243fb"),". Note that: 1) DAO can set another address for the Oracle contact via vote; 2) Oracle implementation can change via vote."),(0,s.kt)("h2",{id:"superuser-privileges-decentralization"},"Superuser privileges decentralization"),(0,s.kt)("p",null,"The superuser privileges are managed by the Lido DAO's governance system. To enact any change the DAO has to have a successful vote."),(0,s.kt)("p",null,"Oracles are: 1) limited in impact 2) distributed - there are five of them, all top-tier professional node operators."),(0,s.kt)("h2",{id:"superuser-actions-thresholds"},"Superuser actions thresholds"),(0,s.kt)("p",null,'The "superuser actions" with the StETH token are performed via DAO votes. The votes are managed by the Aragon voting. Voting power is proportional to the addresses\' LDO token balance (',(0,s.kt)("a",{parentName:"p",href:"https://etherscan.io/token/0x5a98fcbea516cf06857215779fd812ca3bef1b32"},"https://etherscan.io/token/0x5a98fcbea516cf06857215779fd812ca3bef1b32"),'). For the voting to pass successfully, it should: 1) get at least 5% of the total LDOs to be cast "for" the vote; 2) get at least 50% of votes cast "for" the vote. The voting duration is 72 hours.'),(0,s.kt)("p",null,"There are five Oracle daemons running by the Lido Node operators, with 3 of 5 needed to agree on the data they provide. On top of the consensus mechanics, there are sanity checks for reports with sudden drops in total ETH2 balance or rewards with higher-than-possible APY."),(0,s.kt)("h2",{id:"superuser-keys-management"},"Superuser keys management"),(0,s.kt)("p",null,"Token management roles belong to smart contracts, and any changes in roles must pass through the successful DAO vote."),(0,s.kt)("p",null,"Oracle operators are: Stakefish, Certus One, Chorus One, Staking Facilities, P2P Validator."),(0,s.kt)("h2",{id:"superuser-keys-generation-procedure"},"Superuser keys generation procedure"),(0,s.kt)("p",null,"There was no special keygen ceremony, as the permissions are managed by smart contracts. The votes can be cast by the EOAs and smart contracts with the voting power proportional to the addresses' LDO balance."))}d.isMDXComponent=!0}}]);