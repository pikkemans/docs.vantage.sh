"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[668],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||g[d]||c;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const c={},i="New Relic",a={unversionedId:"connecting_new_relic",id:"connecting_new_relic",title:"New Relic",description:"Create a free Vantage account then follow the steps below to integrate New Relic costs.",source:"@site/docs/connecting_new_relic.md",sourceDirName:".",slug:"/connecting_new_relic",permalink:"/connecting_new_relic",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/connecting_new_relic.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Datadog",permalink:"/connecting_datadog"},next:{title:"MongoDB Atlas",permalink:"/connecting_mongodb-atlas"}},l={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Connecting your New Relic Account",id:"connecting-your-new-relic-account",level:2},{value:"Get your Account ID",id:"get-your-account-id",level:3},{value:"Create a User API Key",id:"create-a-user-api-key",level:3},{value:"Negotiated Pricing",id:"negotiated-pricing",level:3},{value:"New Relic Reporting Dimensions",id:"new-relic-reporting-dimensions",level:2}],u={toc:s},p="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"new-relic"},"New Relic"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/signup"},"Create a free Vantage account")," then follow the steps below to integrate New Relic costs."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Vantage integrates with your New Relic account through the use of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.newrelic.com/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/"},"NerdGraph"),", New Relic's GraphQL API, and accesses that via an API token. You will need to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/"},"generate an API token"),". You will also need your ",(0,o.kt)("a",{parentName:"p",href:"https://docs.newrelic.com/docs/accounts/accounts-billing/account-structure/account-id/"},"Account ID"),"."),(0,o.kt)("h2",{id:"connecting-your-new-relic-account"},"Connecting your New Relic Account"),(0,o.kt)("p",null,"To connect your New Relic account, open the ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/new_relic"},"New Relic Settings")," page in the Vantage console. Follow the instructions which require performing the following operations in the ",(0,o.kt)("a",{parentName:"p",href:"https://one.newrelic.com/"},"New Relic console"),". Begin by clicking ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Connection")," in the Vantage console."),(0,o.kt)("h3",{id:"get-your-account-id"},"Get your Account ID"),(0,o.kt)("p",null,"You will need your ",(0,o.kt)("a",{parentName:"p",href:"https://docs.newrelic.com/docs/accounts/accounts-billing/account-structure/account-id/"},"Account ID"),"."),(0,o.kt)("h3",{id:"create-a-user-api-key"},"Create a User API Key"),(0,o.kt)("p",null,"You will need a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/"},"User API Key"),"."),(0,o.kt)("h3",{id:"negotiated-pricing"},"Negotiated Pricing"),(0,o.kt)("p",null,"You will want to have access to the specific pricing for your account when configuring your integration. This can include the per-gigabyte ingestion rate, amount of free ingestion per month, core and full platform user pricing, and any free user seats."),(0,o.kt)("h2",{id:"new-relic-reporting-dimensions"},"New Relic Reporting Dimensions"),(0,o.kt)("p",null,"New Relic ",(0,o.kt)("a",{parentName:"p",href:"/cost_reports/"},"Cost Reports")," enable you to filter New Relic costs along several dimensions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Account"),(0,o.kt)("li",{parentName:"ul"},"Service"),(0,o.kt)("li",{parentName:"ul"},"Category")))}g.isMDXComponent=!0}}]);