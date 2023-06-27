"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(3117),i=(n(7294),n(3905));const o={},r="Specification",s={unversionedId:"integrations/aave/specification",id:"integrations/aave/specification",title:"Specification",description:"The main goal of integration is to provide the ability to deposit stETH into AAVE and allow to use it as collateral. Borrowing of the stETH (both stable and variable) is not supposed. The motivation behind this design is to encourage using stETH as collateral rather than borrowing it. stETH is pegged steadily to ETH, so using it as collateral involves low liquidation risks.",source:"@site/docs/integrations/aave/specification.md",sourceDirName:"integrations/aave",slug:"/integrations/aave/specification",permalink:"/integrations/aave/specification",draft:!1,editUrl:"https://github.com/lidofinance/docs/blob/main/docs/integrations/aave/specification.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Subgraph",permalink:"/integrations/subgraph"},next:{title:"AIP",permalink:"/integrations/aave/aip"}},l={},u=[{value:"AStETH Token",id:"asteth-token",level:2},{value:"StableDebtSTETH &amp; VariableDebtSTETH Tokens",id:"stabledebtsteth--variabledebtsteth-tokens",level:2},{value:"Incentives Controller",id:"incentives-controller",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"specification"},"Specification"),(0,i.kt)("p",null,"The main goal of integration is to provide the ability to deposit stETH into AAVE and allow to use it as collateral. Borrowing of the stETH (both stable and variable) is not supposed. The motivation behind this design is to encourage using stETH as collateral rather than borrowing it. stETH is pegged steadily to ETH, so using it as collateral involves low liquidation risks."),(0,i.kt)("p",null,"The stETH is implemented as a rebasing token. In normal conditions balances of users update one per day with Oracle report. Under the hood stETH stores balances of users as holder's shares in the total amount of Ether controlled by the Lido protocol. stETH has pair of methods to convert inner shares into the balances and vice versa:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/// @return the amount of Ether that corresponds to `_sharesAmount` token shares.\nfunction getPooledEthByShares(uint256 _sharesAmount) public view returns (uint256);\n\n/// @return the amount of shares that corresponds to `_ethAmount` protocol-controlled Ether.\nfunction getSharesByPooledEth(uint256 _ethAmount) public view returns (uint256);\n\n")),(0,i.kt)("p",null,"The aSTETH, similarly to regular aTokens, is a rewards-generating token that is minted and burned upon deposits and withdraws in the LendingPool. The aSTETH value is pegged to the value of the corresponding deposited token at a 1:1 ratio and can be safely stored, transferred, or traded. All interest collected by the aSTETH reserve (from rebasing and AAVE rewards) is distributed to aTokens holders directly by continuously increasing their wallet balance (in case of negative rebases of stETH it might decrease)."),(0,i.kt)("p",null,"The aSTETH implementation guarantees the following always ensured:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"At any time, a user can deposit X stETH to mint X aSTETH ","*"),"\nTotal aSTETH supply increases by X.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"At any time, a user can burn x aSTETH for x stETH ","*"),"\nThe total aSTETH supply decreases by x.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"At any time, userA can transfer X aSTETH to userB ","*"),"\nuserA\u2019s aSTETH balance reduces by X.\nuserB\u2019s aSTETH balance increases by X.\nThe total aSTETH supply exactly remains the same.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"When stETH rebases, aSTETH rebases as well."),"\nSay there are 1000 stETH locked in the reserve. Consider the below situations: 1. Common case: happens positive rebase, and stETH total supply increases by 1%: - totalSupply of aSTETH token becomes equal to 1010 aSTETH. - balance of each aSTETH holder increases by 1% also. 2. Rare case: happens negative rebase, and stETH total supply decreases by 1%: - totalSupply of aSTETH token becomes equal to 990 aSTETH. - balance of each aSTETH holder decreases by 1% also."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"*")," Actual amount of token will be less or equal to X because of integer operations rounding of underlying token rebase rate and AAVE interest rate. However, the actual rounding error will not exceed a couple of WEI at any time."),(0,i.kt)("h2",{id:"asteth-token"},"AStETH Token"),(0,i.kt)("p",null,"To implement the above logic ",(0,i.kt)("inlineCode",{parentName:"p"},"AStETH")," contract modifies the implementation of default aToken but keeps it as close as possible to the original contract. Same as default ",(0,i.kt)("inlineCode",{parentName:"p"},"AToken")," contract it inherits from ",(0,i.kt)("inlineCode",{parentName:"p"},"VersionedInitializable"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"IncentivizedERC20")," contracts and implements ",(0,i.kt)("inlineCode",{parentName:"p"},"IAToken")," interface."),(0,i.kt)("p",null,"Default aToken implements the ERC20 interface but has two specific methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"scaledBalanceOf(user)")," - Returns the ",(0,i.kt)("strong",{parentName:"p"},"scaled balance")," of user as a ",(0,i.kt)("inlineCode",{parentName:"p"},"uint256"),". The scaled balance is the balance of the underlying token of the user (amount deposited), divided by the current liquidity index at the moment of the update. $scaledBalance = amountDeposited/currentLiquidityIndex$\nThis essentially 'marks' when a user has deposited in the reserve pool and can be used to calculate the user's current compounded aToken balance.\nExample: - User A deposits 1000 DAI at the liquidity index of 1.1 - User B deposits another amount into the same pool - The liquidity index is now 1.2 - Therefore to calculate User A's current compounded aToken balance, the reverse operation should be performed: $aTokenBalance = scaledBalance*currentLiquidityIndex$")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"scaledTotalSupply()")," - Returns the scaled total supply of the aToken as ",(0,i.kt)("inlineCode",{parentName:"p"},"uint256"),"."))),(0,i.kt)("p",null,"But above approach can't be used with the stETH token without modifications because it doesn't take into consideration rebases of stETH."),(0,i.kt)("p",null,"If apply above equations to stETH as is, the staking profit will not be distributed across the aSTETH holders but will be accumulated on the balance of the aSTETH token."),(0,i.kt)("p",null,"To make rebases profit accountable, ",(0,i.kt)("inlineCode",{parentName:"p"},"AStETH")," introduces an additional index - ",(0,i.kt)("strong",{parentName:"p"},"stETH rebasing index"),". The stETH rebasing index - express the rewards from rebases of stETH token in time. StETH rebasing index might be calculated as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function _stEthRebasingIndex() returns (uint256) {\n  // Below expression returns how much Ether corresponds\n  // to 10 ** 27 shares. 10 ** 27 was taken  to provide\n  // same precision as AAVE's liquidity index, which\n  // counted in RAY's (decimals with 27 digits).\n  return stETH.getPooledEthByShares(WadRayMath.RAY);\n}\n\n")),(0,i.kt)("p",null,"With stETH rebasing index, ",(0,i.kt)("inlineCode",{parentName:"p"},"AStETH")," allows to make rebases profit accountable, applying additional scaling when minting or burning of token happens:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function mint(address user, uint256 amount, uint256 liquidityIndex) {\n    ...\n    uint256 stEthRebasingIndex = _stEthRebasingIndex();\n    _mint(user, _toInternalAmount(amount, stEthRebasingIndex, liquidityIndex));\n    ...\n}\n\nfunction burn(address user, uint256 amount, uint256 liquidityIndex) {\n    ...\n    uint256 stEthRebasingIndex = _stEthRebasingIndex();\n    _burn(user, _toInternalAmount(amount, stEthRebasingIndex, liquidityIndex));\n    ...\n}\n\nfunction _toInternalAmount(\n    uint256 amount,\n    uint256 stEthRebasingIndex,\n    uint256 aaveLiquidityIndex\n  ) internal view returns (uint256) {\n    return amount.mul(WadRayMath.RAY).div(stEthRebasingIndex).rayDiv(aaveLiquidityIndex);\n  }\n")),(0,i.kt)("p",null,"Then, according to AAVE's definitions, ",(0,i.kt)("inlineCode",{parentName:"p"},"scaledTotalSupply()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"scaledBalanceOf()")," might be calculated as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function scaledTotalSupply() returns (uint256) {\n  return _totalSupply.mul(_stEthRebasingIndex()).div(WadRayMath.RAY);\n}\n\nfunction scaledBalanceOf(address user) returns (uint256) {\n  return _balances[user].mul(_stEthRebasingIndex()).div(WadRayMath.RAY);\n}\n\n")),(0,i.kt)("p",null,"Additionally, ",(0,i.kt)("inlineCode",{parentName:"p"},"AStETH")," contract introduces the following methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"internalBalanceOf(user)")," - returns ",(0,i.kt)("strong",{parentName:"li"},"internal balance")," of the user. The internal balance is the balance of the underlying token of the user (sum of deposits of the user), divided by the current liquidity index at the moment of the update and by the current stETH rebasing index."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"internalTotalSupply()")," - Returns the internal total supply of the aSTETH.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function internalTotalSupply(address user) returns (uint256) {\n  return _totalSupply;\n}\n\nfunction internalBalanceOf(address user) returns (uint256) {\n  return _balances[user];\n}\n\n")),(0,i.kt)("h2",{id:"stabledebtsteth--variabledebtsteth-tokens"},"StableDebtSTETH & VariableDebtSTETH Tokens"),(0,i.kt)("p",null,"The current integration doesn't support borrowing, neither with variable nor with stable interest rates. Because of that, the StableDebtSTETH and VariableDebtSTETH contract extends default ",(0,i.kt)("inlineCode",{parentName:"p"},"StableDebtToken")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"VariableDebtToken")," contracts accordingly, and override ",(0,i.kt)("inlineCode",{parentName:"p"},"mint()")," method with the stub, which reverts with error ",(0,i.kt)("inlineCode",{parentName:"p"},"CONTRACT_NOT_ACTIVE"),". This was done to make it impossible to use borrowing with aSTETH because default debt tokens are not compatible with the ",(0,i.kt)("inlineCode",{parentName:"p"},"AStETH")," contract."),(0,i.kt)("p",null,"In the future, borrowing might be activated, by updating the implementation of debt tokens. But ",(0,i.kt)("inlineCode",{parentName:"p"},"StableDebtToken")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"VariableDebtToken")," contracts ",(0,i.kt)("strong",{parentName:"p"},"MUST NOT")," be used with ",(0,i.kt)("inlineCode",{parentName:"p"},"AStETH")," because they don't take into consideration rebases of stETH token and will break the math of the integration."),(0,i.kt)("h2",{id:"incentives-controller"},"Incentives Controller"),(0,i.kt)("p",null,"At the launch of the stETH integration in the AAVE protocol, the incentives controller is not supposed to be used. If in the future Lido decides to add incentives to the integration, it might be done via updating the implementation of aSTETH token. The example of implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"IncentivesController")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"AStETH")," contract might be found here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/aave-asteth-incentives-controller"},"https://github.com/lidofinance/aave-asteth-incentives-controller")))}c.isMDXComponent=!0}}]);