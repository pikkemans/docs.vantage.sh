"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[7567],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),g=a,m=p["".concat(c,".").concat(g)]||p[g]||f[g]||r;return n?o.createElement(m,l(l({ref:t},u),{},{components:n})):o.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={id:"connecting_confluent",title:"Confluent",description:"This page walks through how to integrate Vantage with your Confluent account.",keywords:["Confluent","Connect Confluent"]},l="Confluent",i={unversionedId:"connecting_confluent",id:"connecting_confluent",title:"Confluent",description:"This page walks through how to integrate Vantage with your Confluent account.",source:"@site/docs/connecting_confluent.md",sourceDirName:".",slug:"/connecting_confluent",permalink:"/connecting_confluent",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/connecting_confluent.md",tags:[],version:"current",frontMatter:{id:"connecting_confluent",title:"Confluent",description:"This page walks through how to integrate Vantage with your Confluent account.",keywords:["Confluent","Connect Confluent"]},sidebar:"someSidebar",previous:{title:"Oracle Cloud",permalink:"/connecting_oracle"},next:{title:"PlanetScale",permalink:"/connecting_planetscale"}},c={},s=[{value:"Connect Your Confluent Account",id:"connect-your-confluent-account",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Create the Connection",id:"create-the-connection",level:3},{value:"Next Steps: Manage Workspace Access",id:"next-steps-manage-workspace-access",level:3},{value:"Confluent Reporting Dimensions",id:"confluent-reporting-dimensions",level:2},{value:"Active Resources",id:"active-resources",level:2}],u={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"confluent"},"Confluent"),(0,a.kt)("p",null,"Vantage integrates with your Confluent account using a Confluent API key and secret to access the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.confluent.io/cloud/current/billing/overview.html#retrieve-costs-for-a-range-of-dates"},"Billing API"),". This endpoint provides structured cost data, broken down by by category (e.g., Kafka or Connect), resource (e.g., Kafka Cluster), and subcategory (e.g., Kafka Storage or Connect Capacity)."),(0,a.kt)("p",null,"Vantage currently supports the following Confluent products:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kafka"),(0,a.kt)("li",{parentName:"ul"},"Connect"),(0,a.kt)("li",{parentName:"ul"},"KSQL"),(0,a.kt)("li",{parentName:"ul"},"Audit Logs"),(0,a.kt)("li",{parentName:"ul"},"Cluster Links"),(0,a.kt)("li",{parentName:"ul"},"Custom Connect"),(0,a.kt)("li",{parentName:"ul"},"Support Cloud")),(0,a.kt)("h2",{id:"connect-your-confluent-account"},"Connect Your Confluent Account"),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://console.vantage.sh/signup"},"Create a free Vantage account"),", then follow the steps below to generate a Confluent API key."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Confluent requires an ",(0,a.kt)("inlineCode",{parentName:"p"},"OrganizationAdmin")," role on the service account used in order to access the Billing API. See the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.confluent.io/cloud/current/access-management/access-control/rbac/manage-role-bindings.html"},"Confluent documentation")," for information on how to add the role to your service account."),(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"OrganizationAdmin")," role provides read/write access; however, Vantage will never perform write operations and will only read from the Billing API and Organizations API.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log in to the ",(0,a.kt)("a",{parentName:"li",href:"https://confluent.cloud/login"},"Confluent Cloud console"),"."),(0,a.kt)("li",{parentName:"ol"},"From the top right of the console, click the hamburger menu."),(0,a.kt)("li",{parentName:"ol"},"Under ",(0,a.kt)("strong",{parentName:"li"},"ADMINISTRATION"),", click ",(0,a.kt)("strong",{parentName:"li"},"Cloud API keys"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create key"),"."),(0,a.kt)("li",{parentName:"ol"},"For the scope, select the ",(0,a.kt)("strong",{parentName:"li"},"Granular access")," tile."),(0,a.kt)("li",{parentName:"ol"},"Select an existing service account or create a new one."),(0,a.kt)("li",{parentName:"ol"},"Copy the key and the secret to add to Vantage.")),(0,a.kt)("h3",{id:"create-the-connection"},"Create the Connection"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the Vantage console, navigate to the ",(0,a.kt)("a",{parentName:"li",href:"https://console.vantage.sh/settings/confluent/"},"Confluent Settings")," page."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add API Key"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter your newly created ",(0,a.kt)("strong",{parentName:"li"},"API key")," and ",(0,a.kt)("strong",{parentName:"li"},"API secret"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Connect Account"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("a",{parentName:"li",href:"https://console.vantage.sh/settings/confluent/"},"Confluent Settings")," page, you will see your account listed with a ",(0,a.kt)("strong",{parentName:"li"},"Status")," of ",(0,a.kt)("inlineCode",{parentName:"li"},"Imported"),".")),(0,a.kt)("p",null,"Costs will be ingested and processed as soon as you add the integration. It usually takes less than 15 minutes to ingest Confluent costs. As soon as the costs are processed, they will be available on your ",(0,a.kt)("strong",{parentName:"p"},"All Resources")," Cost Report."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Confluent data refreshes daily in the Vantage console.")),(0,a.kt)("h3",{id:"next-steps-manage-workspace-access"},"Next Steps: Manage Workspace Access"),(0,a.kt)("p",null,"Once your costs are imported, select which workspaces this integration is associated with. See the ",(0,a.kt)("a",{parentName:"p",href:"/workspaces#integration-workspace"},"Workspaces")," documentation for information."),(0,a.kt)("h2",{id:"confluent-reporting-dimensions"},"Confluent Reporting Dimensions"),(0,a.kt)("p",null,"On Confluent ",(0,a.kt)("a",{parentName:"p",href:"/cost_reports/"},"Cost Reports"),", you can filter costs across several dimensions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Organization"),(0,a.kt)("li",{parentName:"ul"},"Service (e.g., Kafka)"),(0,a.kt)("li",{parentName:"ul"},"Category (e.g., Kafka Storage)"),(0,a.kt)("li",{parentName:"ul"},"Resource")),(0,a.kt)("p",null,"You can also view credits or discounts for Confluent costs in Cost Reports."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"At the top of any Confluent Cost Report, click ",(0,a.kt)("strong",{parentName:"li"},"Settings"),". "),(0,a.kt)("li",{parentName:"ol"},"Then, toggle on/off ",(0,a.kt)("strong",{parentName:"li"},"Credits")," and/or ",(0,a.kt)("strong",{parentName:"li"},"Discounts"),".")),(0,a.kt)("h2",{id:"active-resources"},"Active Resources"),(0,a.kt)("p",null,"Confluent Kafka Clusters are synced as active resources and available in ",(0,a.kt)("a",{parentName:"p",href:"/active_resources"},"resource reports"),"."))}f.isMDXComponent=!0}}]);