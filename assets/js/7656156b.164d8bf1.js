"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[1571],{3905:(t,a,e)=>{e.d(a,{Zo:()=>g,kt:()=>N});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=n.createContext({}),u=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},g=function(t){var a=u(t.components);return n.createElement(p.Provider,{value:a},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},o=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,g=d(t,["components","mdxType","originalType","parentName"]),m=u(e),o=r,N=m["".concat(p,".").concat(o)]||m[o]||k[o]||l;return e?n.createElement(N,i(i({ref:a},g),{},{components:e})):n.createElement(N,i({ref:a},g))}));function N(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=o;var d={};for(var p in a)hasOwnProperty.call(a,p)&&(d[p]=a[p]);d.originalType=t,d[m]="string"==typeof t?t:r,i[1]=d;for(var u=2;u<l;u++)i[u]=e[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}o.displayName="MDXCreateElement"},2821:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=e(7462),r=(e(7294),e(3905));const l={},i="Data Dictionary",d={unversionedId:"data_dictionary",id:"data_dictionary",title:"Data Dictionary",description:"Each provider that Vantage integrates makes different fields available in their billing data. This data is normalized into the following fields, which are also queryable via the Vantage API and VQL.",source:"@site/docs/data_dictionary.md",sourceDirName:".",slug:"/data_dictionary",permalink:"/data_dictionary",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/data_dictionary.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Segments",permalink:"/segments"},next:{title:"Kubernetes Costs",permalink:"/kubernetes"}},p={},u=[],g={toc:u},m="wrapper";function k(t){let{components:a,...e}=t;return(0,r.kt)(m,(0,n.Z)({},g,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-dictionary"},"Data Dictionary"),(0,r.kt)("p",null,"Each provider that Vantage integrates makes different fields available in their billing data. This data is normalized into the following fields, which are also queryable via the ",(0,r.kt)("a",{parentName:"p",href:"https://vantage.readme.io/v2.0/reference/general"},"Vantage API")," and ",(0,r.kt)("a",{parentName:"p",href:"/vql"},"VQL"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Provider"),(0,r.kt)("th",{parentName:"tr",align:null},"Filter"),(0,r.kt)("th",{parentName:"tr",align:null},"API Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"account_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"Billing Account"),(0,r.kt)("td",{parentName:"tr",align:null},"provider_account_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag"),(0,r.kt)("td",{parentName:"tr",align:null},"tag_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag Value"),(0,r.kt)("td",{parentName:"tr",align:null},"tag_value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Tagged"),(0,r.kt)("td",{parentName:"tr",align:null},"untagged")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"Service"),(0,r.kt)("td",{parentName:"tr",align:null},"service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"Region"),(0,r.kt)("td",{parentName:"tr",align:null},"region")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"Provider"),(0,r.kt)("td",{parentName:"tr",align:null},"provider")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"Category"),(0,r.kt)("td",{parentName:"tr",align:null},"category")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"Subcategory"),(0,r.kt)("td",{parentName:"tr",align:null},"sub_category")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"Marketplace"),(0,r.kt)("td",{parentName:"tr",align:null},"marketplace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource"),(0,r.kt)("td",{parentName:"tr",align:null},"resource_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Azure"),(0,r.kt)("td",{parentName:"tr",align:null},"Subscription"),(0,r.kt)("td",{parentName:"tr",align:null},"provider_account_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Azure"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource Group"),(0,r.kt)("td",{parentName:"tr",align:null},"account_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Azure"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag"),(0,r.kt)("td",{parentName:"tr",align:null},"tag_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Azure"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag Value"),(0,r.kt)("td",{parentName:"tr",align:null},"tag_value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Azure"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Tagged"),(0,r.kt)("td",{parentName:"tr",align:null},"untagged")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Azure"),(0,r.kt)("td",{parentName:"tr",align:null},"Service"),(0,r.kt)("td",{parentName:"tr",align:null},"service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Azure"),(0,r.kt)("td",{parentName:"tr",align:null},"Region"),(0,r.kt)("td",{parentName:"tr",align:null},"region")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Azure"),(0,r.kt)("td",{parentName:"tr",align:null},"Provider"),(0,r.kt)("td",{parentName:"tr",align:null},"provider")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Azure"),(0,r.kt)("td",{parentName:"tr",align:null},"Category"),(0,r.kt)("td",{parentName:"tr",align:null},"category")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Azure"),(0,r.kt)("td",{parentName:"tr",align:null},"Subcategory"),(0,r.kt)("td",{parentName:"tr",align:null},"sub_category")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Azure"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource"),(0,r.kt)("td",{parentName:"tr",align:null},"resource_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Google Cloud"),(0,r.kt)("td",{parentName:"tr",align:null},"Project"),(0,r.kt)("td",{parentName:"tr",align:null},"account_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Google Cloud"),(0,r.kt)("td",{parentName:"tr",align:null},"Billing Account"),(0,r.kt)("td",{parentName:"tr",align:null},"provider_account_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Google Cloud"),(0,r.kt)("td",{parentName:"tr",align:null},"Label"),(0,r.kt)("td",{parentName:"tr",align:null},"tag_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Google Cloud"),(0,r.kt)("td",{parentName:"tr",align:null},"Label Value"),(0,r.kt)("td",{parentName:"tr",align:null},"tag_value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Google Cloud"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Labeled"),(0,r.kt)("td",{parentName:"tr",align:null},"untagged")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Google Cloud"),(0,r.kt)("td",{parentName:"tr",align:null},"Service"),(0,r.kt)("td",{parentName:"tr",align:null},"service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Google Cloud"),(0,r.kt)("td",{parentName:"tr",align:null},"Region"),(0,r.kt)("td",{parentName:"tr",align:null},"region")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Google Cloud"),(0,r.kt)("td",{parentName:"tr",align:null},"Provider"),(0,r.kt)("td",{parentName:"tr",align:null},"provider")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Google Cloud"),(0,r.kt)("td",{parentName:"tr",align:null},"Category"),(0,r.kt)("td",{parentName:"tr",align:null},"category")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Google Cloud"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource"),(0,r.kt)("td",{parentName:"tr",align:null},"resource_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,r.kt)("td",{parentName:"tr",align:null},"Tenancy"),(0,r.kt)("td",{parentName:"tr",align:null},"provider_account_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,r.kt)("td",{parentName:"tr",align:null},"Compartment"),(0,r.kt)("td",{parentName:"tr",align:null},"account_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag"),(0,r.kt)("td",{parentName:"tr",align:null},"tag_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag Value"),(0,r.kt)("td",{parentName:"tr",align:null},"tag_value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Tagged"),(0,r.kt)("td",{parentName:"tr",align:null},"untagged")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,r.kt)("td",{parentName:"tr",align:null},"Service"),(0,r.kt)("td",{parentName:"tr",align:null},"service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,r.kt)("td",{parentName:"tr",align:null},"Region"),(0,r.kt)("td",{parentName:"tr",align:null},"region")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,r.kt)("td",{parentName:"tr",align:null},"Provider"),(0,r.kt)("td",{parentName:"tr",align:null},"provider")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,r.kt)("td",{parentName:"tr",align:null},"Category"),(0,r.kt)("td",{parentName:"tr",align:null},"category")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource"),(0,r.kt)("td",{parentName:"tr",align:null},"resource_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes"),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"account_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes"),(0,r.kt)("td",{parentName:"tr",align:null},"Grouping"),(0,r.kt)("td",{parentName:"tr",align:null},"tag_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes"),(0,r.kt)("td",{parentName:"tr",align:null},"Grouping Value"),(0,r.kt)("td",{parentName:"tr",align:null},"tag_value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes"),(0,r.kt)("td",{parentName:"tr",align:null},"Cluster"),(0,r.kt)("td",{parentName:"tr",align:null},"service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes"),(0,r.kt)("td",{parentName:"tr",align:null},"Region"),(0,r.kt)("td",{parentName:"tr",align:null},"region")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes"),(0,r.kt)("td",{parentName:"tr",align:null},"Provider"),(0,r.kt)("td",{parentName:"tr",align:null},"provider")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Datadog"),(0,r.kt)("td",{parentName:"tr",align:null},"Organization"),(0,r.kt)("td",{parentName:"tr",align:null},"account_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Datadog"),(0,r.kt)("td",{parentName:"tr",align:null},"Service"),(0,r.kt)("td",{parentName:"tr",align:null},"service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Datadog"),(0,r.kt)("td",{parentName:"tr",align:null},"Provider"),(0,r.kt)("td",{parentName:"tr",align:null},"provider")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Datadog"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag"),(0,r.kt)("td",{parentName:"tr",align:null},"tag_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Datadog"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag Value"),(0,r.kt)("td",{parentName:"tr",align:null},"tag_value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Datadog"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Tagged"),(0,r.kt)("td",{parentName:"tr",align:null},"untagged")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New Relic"),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"account_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New Relic"),(0,r.kt)("td",{parentName:"tr",align:null},"Service"),(0,r.kt)("td",{parentName:"tr",align:null},"service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New Relic"),(0,r.kt)("td",{parentName:"tr",align:null},"Category"),(0,r.kt)("td",{parentName:"tr",align:null},"category")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Snowflake"),(0,r.kt)("td",{parentName:"tr",align:null},"Organization"),(0,r.kt)("td",{parentName:"tr",align:null},"provider_account_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Snowflake"),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"account_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Snowflake"),(0,r.kt)("td",{parentName:"tr",align:null},"Provider"),(0,r.kt)("td",{parentName:"tr",align:null},"provider")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Snowflake"),(0,r.kt)("td",{parentName:"tr",align:null},"Region"),(0,r.kt)("td",{parentName:"tr",align:null},"region")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Snowflake"),(0,r.kt)("td",{parentName:"tr",align:null},"Category"),(0,r.kt)("td",{parentName:"tr",align:null},"category")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Snowflake"),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"tag_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Snowflake"),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata Value"),(0,r.kt)("td",{parentName:"tr",align:null},"tag_value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Snowflake"),(0,r.kt)("td",{parentName:"tr",align:null},"Service"),(0,r.kt)("td",{parentName:"tr",align:null},"service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Databricks"),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"account_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Databricks"),(0,r.kt)("td",{parentName:"tr",align:null},"Service"),(0,r.kt)("td",{parentName:"tr",align:null},"service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Databricks"),(0,r.kt)("td",{parentName:"tr",align:null},"Cluster"),(0,r.kt)("td",{parentName:"tr",align:null},"resource_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Databricks"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag"),(0,r.kt)("td",{parentName:"tr",align:null},"tag_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Databricks"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag Value"),(0,r.kt)("td",{parentName:"tr",align:null},"tag_value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Databricks"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Tagged"),(0,r.kt)("td",{parentName:"tr",align:null},"untagged")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Databricks"),(0,r.kt)("td",{parentName:"tr",align:null},"Category"),(0,r.kt)("td",{parentName:"tr",align:null},"category")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mongo"),(0,r.kt)("td",{parentName:"tr",align:null},"Organization"),(0,r.kt)("td",{parentName:"tr",align:null},"provider_account_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mongo"),(0,r.kt)("td",{parentName:"tr",align:null},"Project"),(0,r.kt)("td",{parentName:"tr",align:null},"account_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mongo"),(0,r.kt)("td",{parentName:"tr",align:null},"Service"),(0,r.kt)("td",{parentName:"tr",align:null},"service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mongo"),(0,r.kt)("td",{parentName:"tr",align:null},"Category"),(0,r.kt)("td",{parentName:"tr",align:null},"category")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mongo"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource"),(0,r.kt)("td",{parentName:"tr",align:null},"resource_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fastly"),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"account_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fastly"),(0,r.kt)("td",{parentName:"tr",align:null},"Service"),(0,r.kt)("td",{parentName:"tr",align:null},"service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fastly"),(0,r.kt)("td",{parentName:"tr",align:null},"Provider"),(0,r.kt)("td",{parentName:"tr",align:null},"provider")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fastly"),(0,r.kt)("td",{parentName:"tr",align:null},"Region"),(0,r.kt)("td",{parentName:"tr",align:null},"region")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fastly"),(0,r.kt)("td",{parentName:"tr",align:null},"Category"),(0,r.kt)("td",{parentName:"tr",align:null},"category")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fastly"),(0,r.kt)("td",{parentName:"tr",align:null},"Subcategory"),(0,r.kt)("td",{parentName:"tr",align:null},"sub_category")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fastly"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource"),(0,r.kt)("td",{parentName:"tr",align:null},"resource_id")))))}k.isMDXComponent=!0}}]);