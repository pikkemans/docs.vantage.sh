"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[7051],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),k=o,g=u["".concat(i,".").concat(k)]||u[k]||m[k]||r;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9449:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={id:"connecting_snowflake",title:"Snowflake",description:"This page walks through how to integrate Vantage with your Snowflake account.",keywords:["Snowflake","Connect Snowflake"]},l="Snowflake",s={unversionedId:"connecting_snowflake",id:"connecting_snowflake",title:"Snowflake",description:"This page walks through how to integrate Vantage with your Snowflake account.",source:"@site/docs/connecting_snowflake.md",sourceDirName:".",slug:"/connecting_snowflake",permalink:"/connecting_snowflake",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/connecting_snowflake.md",tags:[],version:"current",frontMatter:{id:"connecting_snowflake",title:"Snowflake",description:"This page walks through how to integrate Vantage with your Snowflake account.",keywords:["Snowflake","Connect Snowflake"]},sidebar:"someSidebar",previous:{title:"MongoDB Atlas",permalink:"/connecting_mongodb-atlas"},next:{title:"Snowflake Costs per Query",permalink:"/snowflake_cost_by_query"}},i={},c=[{value:"Connect Your Snowflake Account",id:"connect-your-snowflake-account",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Snowflake IP Allowed List",id:"snowflake-ip-allowed-list",level:3},{value:"Snowflake Schema for Vantage",id:"vantage-schema",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Snowflake Reporting Dimensions",id:"snowflake-reporting-dimensions",level:2},{value:"Active Resources",id:"active-resources",level:2},{value:"Manage Workspace Access",id:"manage-workspace-access",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"snowflake"},"Snowflake"),(0,o.kt)("p",null,"Vantage integrates with your Snowflake account through a secure, read-only user that has access to Snowflake usage tables. Optionally, you can create a ",(0,o.kt)("a",{parentName:"p",href:"/connecting_snowflake#vantage-schema"},"specific schema")," for the Vantage user."),(0,o.kt)("p",null,"Vantage requires read-only access to the following tables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.snowflake.com/en/sql-reference/functions/warehouse_metering_history.html"},(0,o.kt)("inlineCode",{parentName:"a"},"SNOWFLAKE.ORGANIZATION_USAGE.WAREHOUSE_METERING_HISTORY")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Returns hourly credit usage for both Virtual Warehouse credit usage and Cloud Services credit usage per warehouse, for all warehouses in your account. Data is retained for one year."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.snowflake.com/en/sql-reference/account-usage/query_history.html"},(0,o.kt)("inlineCode",{parentName:"a"},"SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Query history with various dimensions, including total elapsed time, warehouse used, data bytes scanned, etc. Data is retained for one year."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.snowflake.com/en/sql-reference/organization-usage/usage_in_currency_daily.html"},(0,o.kt)("inlineCode",{parentName:"a"},"SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Returns the daily credit usage and usage in currency format for an organization.")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"As a best practice, it is suggested you create a schema specifically for the ",(0,o.kt)("inlineCode",{parentName:"p"},"vantage")," user. Note, however, that this is optional. See the ",(0,o.kt)("a",{parentName:"p",href:"/connecting_snowflake#vantage-schema"},"steps below")," for details on how to create this schema.")),(0,o.kt)("h2",{id:"connect-your-snowflake-account"},"Connect Your Snowflake Account"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/signup"},"Create a free Vantage account"),", then follow the steps below to integrate Snowflake costs."),(0,o.kt)("h3",{id:"snowflake-ip-allowed-list"},"Snowflake IP Allowed List"),(0,o.kt)("p",null,"If your Snowflake cluster uses an IP allowed list for access control, you will need to add the following IPs to that allowed list:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"54.87.66.45\n3.95.43.133\n54.162.3.72\n44.199.143.63\n3.218.103.23\n")),(0,o.kt)("h3",{id:"vantage-schema"},"Snowflake Schema for Vantage"),(0,o.kt)("p",null,"After creating the below schema, you can add only the needed views to that schema and grant the ",(0,o.kt)("inlineCode",{parentName:"p"},"vantage")," user access to the schema."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The below commands are based on the Snowflake ",(0,o.kt)("a",{parentName:"p",href:"https://community.snowflake.com/s/article/Solution-Grant-access-to-specific-views-in-SNOWFLAKE-ACCOUNT-USAGE-to-custom-roles"},"documentation"),".")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In Snowflake, create a user named ",(0,o.kt)("inlineCode",{parentName:"p"},"vantage"),", a role named ",(0,o.kt)("inlineCode",{parentName:"p"},"vantage"),", and a warehouse named ",(0,o.kt)("inlineCode",{parentName:"p"},"vantage"),". Grant the necessary permissions. Ensure you replace the password placeholder with a strong password for the ",(0,o.kt)("inlineCode",{parentName:"p"},"vantage")," user."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"use role accountadmin;\ncreate database vantage;\ncreate role vantage;\ncreate user vantage;\ngrant role vantage to user vantage;\ngrant role vantage to role accountadmin;\ncreate warehouse vantage;\ngrant all on warehouse vantage to role vantage;\nalter user vantage set DEFAULT_WAREHOUSE=vantage, DEFAULT_ROLE=vantage;\nalter user vantage set password='<A STRONG PASSWORD>';\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set up the Vantage-specific schema to read billing and usage data from your account."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"use warehouse vantage;\ncreate view VANTAGE.PUBLIC.QUERY_HISTORY as select * from SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY;\ncreate view VANTAGE.PUBLIC.WAREHOUSE_METERING_HISTORY as select * from SNOWFLAKE.ORGANIZATION_USAGE.WAREHOUSE_METERING_HISTORY;\ncreate view VANTAGE.PUBLIC.USAGE_IN_CURRENCY_DAILY as select * from SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY;\ngrant usage on schema vantage.public to role vantage;\ngrant usage on database vantage to role vantage;\ngrant select on all views in schema VANTAGE.PUBLIC to role vantage;\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Test your setup."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"use role vantage;\nselect * from vantage.public.query_history limit 1;\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/snowflake"},"Snowflake Settings page")," in the Vantage console to add a new Snowflake connection. Then, click ",(0,o.kt)("strong",{parentName:"p"},"Add Connection"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the following information to the form:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Server URL"),": In the format ",(0,o.kt)("inlineCode",{parentName:"li"},"<account_identifier>.<region>.snowflakecomputing.com"),". "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Database"),": The name of the database the usage views are in (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"vantage"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Schema"),": The name of the schema the usage views are in (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"public"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Username")," and ",(0,o.kt)("strong",{parentName:"li"},"Password")," set for the ",(0,o.kt)("inlineCode",{parentName:"li"},"vantage")," user. "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Connect Account"),". The status of your account will change to ",(0,o.kt)("inlineCode",{parentName:"p"},"Importing"),". "))),(0,o.kt)("p",null,"Costs will be ingested and processed immediately, but it may take several hours to populate all Vantage tools depending on the query volume of your warehouse. Vantage will refresh at least once daily for Snowflake. "),(0,o.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If you observe a ",(0,o.kt)("inlineCode",{parentName:"p"},"Vantage.Public.Query_History")," error in the Vantage console, delete the views you created for the Vantage Snowflake schema and then re-create the views again following the steps above. Once you've re-created the views, contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh")," to reimport your Snowflake data."),(0,o.kt)("h2",{id:"snowflake-reporting-dimensions"},"Snowflake Reporting Dimensions"),(0,o.kt)("p",null,"On Snowflake ",(0,o.kt)("a",{parentName:"p",href:"/cost_reports"},"Cost Reports"),", you can filter across several dimensions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Account"),(0,o.kt)("li",{parentName:"ul"},"Category "),(0,o.kt)("li",{parentName:"ul"},"Metadata"),(0,o.kt)("li",{parentName:"ul"},"Region"),(0,o.kt)("li",{parentName:"ul"},"Organization"),(0,o.kt)("li",{parentName:"ul"},"Service")),(0,o.kt)("h2",{id:"active-resources"},"Active Resources"),(0,o.kt)("p",null,"Snowflake queries are synced as active resources and available in ",(0,o.kt)("a",{parentName:"p",href:"/active_resources"},"resource reports"),"."),(0,o.kt)("h2",{id:"manage-workspace-access"},"Manage Workspace Access"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/workspaces#integration-workspace"},"Workspaces")," documentation for information on how to update workspace access for an integration."))}m.isMDXComponent=!0}}]);