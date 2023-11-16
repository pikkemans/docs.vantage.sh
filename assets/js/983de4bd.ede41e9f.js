"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[1425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,m=p["".concat(i,".").concat(d)]||p[d]||g[d]||a;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},c="Oracle Cloud",l={unversionedId:"connecting_oracle",id:"connecting_oracle",title:"Oracle Cloud",description:"Create a free Vantage account then follow the steps below to integrate Oracle Cloud Infrastructure (OCI) costs.",source:"@site/docs/connecting_oracle.md",sourceDirName:".",slug:"/connecting_oracle",permalink:"/connecting_oracle",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/connecting_oracle.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Fastly",permalink:"/connecting_fastly"},next:{title:"Confluent",permalink:"/connecting_confluent"}},i={},s=[{value:"Connecting Your Oracle Account",id:"connecting-your-oracle-account",level:2},{value:"Integration Setup",id:"integration-setup",level:2},{value:"Oracle Cloud Reporting Dimensions",id:"oracle-cloud-reporting-dimensions",level:2}],u={toc:s},p="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"oracle-cloud"},"Oracle Cloud"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/signup"},"Create a free Vantage account")," then follow the steps below to integrate Oracle Cloud Infrastructure (OCI) costs."),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("img",{alt:"Oracle Cost Reports",width:"80%",src:"/img/oracle-cost-report.png"})),(0,o.kt)("h2",{id:"connecting-your-oracle-account"},"Connecting Your Oracle Account"),(0,o.kt)("p",null,"Vantage uses a read-only IAM user and API key to read from a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/usagereportsoverview.htm"},"Cost and Usage Reports object storage bucket"),". When connecting Oracle you will be required to create a Vantage-specific IAM user and upload a generated RSA public key to that user. That user must then be granted access to read objects from the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/usagereportsoverview.htm#policy"},"Cost and Usage Report tenancy"),"."),(0,o.kt)("h2",{id:"integration-setup"},"Integration Setup"),(0,o.kt)("p",null,"To connect your Oracle account, open the ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/oracle/"},"Oracle Settings")," page and click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect")," tab and follow the instructions. You will be asked to run a series of commands to give Vantage permission to ingest cost and usage information from your Oracle Cloud account through an API key."),(0,o.kt)("p",null,"After running these commands, you will have a Tenancy and User ID to input into Vantage as well as a home region to select. Once input, your Oracle integration status should move from ",(0,o.kt)("inlineCode",{parentName:"p"},"Pending")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Importing")," automatically. Oracle generally delivers usage logs once per day. The default timeframe for imports is 6 months of historical costs."),(0,o.kt)("h2",{id:"oracle-cloud-reporting-dimensions"},"Oracle Cloud Reporting Dimensions"),(0,o.kt)("p",null,"Oracle ",(0,o.kt)("a",{parentName:"p",href:"/cost_reports/"},"Cost Reports")," enable you to filter Oracle costs along several dimensions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Service"),(0,o.kt)("li",{parentName:"ul"},"Tenancy"),(0,o.kt)("li",{parentName:"ul"},"Region"),(0,o.kt)("li",{parentName:"ul"},"Cost Category"),(0,o.kt)("li",{parentName:"ul"},"Resource"),(0,o.kt)("li",{parentName:"ul"},"Tag"),(0,o.kt)("li",{parentName:"ul"},"Region"),(0,o.kt)("li",{parentName:"ul"},"Compartment")))}g.isMDXComponent=!0}}]);