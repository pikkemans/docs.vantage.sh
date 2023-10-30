"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[5563],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,h=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1312:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},s="Snowflake Costs by Query",i={unversionedId:"snowflake_cost_by_query",id:"snowflake_cost_by_query",title:"Snowflake Costs by Query",description:"Vantage calculates a weighted cost per query by breaking down the use of Snowflake compute credits. This allows users to easily identiy the most expensive queries.",source:"@site/docs/snowflake_cost_by_query.md",sourceDirName:".",slug:"/snowflake_cost_by_query",permalink:"/snowflake_cost_by_query",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/snowflake_cost_by_query.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Setup Snowflake",permalink:"/connecting_snowflake"},next:{title:"Databricks",permalink:"/connecting_databricks"}},u={},l=[{value:"How it Works",id:"how-it-works",level:2},{value:"Grouping Queries",id:"grouping-queries",level:2},{value:"Viewing the Costs",id:"viewing-the-costs",level:2},{value:"Security",id:"security",level:2}],c={toc:l},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snowflake-costs-by-query"},"Snowflake Costs by Query"),(0,a.kt)("p",null,"Vantage calculates a weighted cost per query by breaking down the use of Snowflake ",(0,a.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/credits.html#virtual-warehouse-credit-usage"},"compute credits"),". This allows users to easily identiy the most expensive queries."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Snowflake Cost per Query",src:r(8262).Z,width:"1367",height:"775"})),(0,a.kt)("h2",{id:"how-it-works"},"How it Works"),(0,a.kt)("p",null,"Snowflake Compute is only billed when a query is running, rounded up to the hour. However, if multiple queries are running simaltaneously the cost is still only reported for that hour. This shared credit pool makes it difficult to understand which singular queries are contributing the most costs."),(0,a.kt)("p",null,"On a daily basis Vantage will ingest the compute credits used and their equivalent cost and assign a weighted cost to each query based on the total duration for which that query ran. For example, if you had 3 queries that ran for 1, 2 and 3 minutes respectively and a total bill of $500, the query which ran for 3 minutes would be assigned a cost of $250 as it accounted for half of the overall query time."),(0,a.kt)("h2",{id:"grouping-queries"},"Grouping Queries"),(0,a.kt)("p",null,"Vantage groups queries based on the source and structure of a query so users can easily identify it. To determine the source, Vantage looks at the warehouse in which the query was run and the user who ran the query. To determine the structure of a query, Vantage will strip all query values and ordering of columns and generate a normalized unique fingerprint for the query."),(0,a.kt)("h2",{id:"viewing-the-costs"},"Viewing the Costs"),(0,a.kt)("p",null,"Query costs are available in two views. The first is on a ",(0,a.kt)("a",{parentName:"p",href:"/cost_reports/"},"Cost Report")," with Snowflake costs. You can click on ",(0,a.kt)("a",{parentName:"p",href:"/cost_reports/#per-resource-costs"},"Costs by Resource"),' on the "Snowflake Data Cloud" line item and see a paginated list of each query, as well as a day-by-day breakdown of that query\'s costs. You can also visit the ',(0,a.kt)("a",{parentName:"p",href:"https://console.vantage.sh/services/snowflake_queries/resources"},"Active Resources page"),' for "Snowflake Queries" and see a list of active queries and their associated costs. Queries are considered active if they have occured costs in the past 30 days and are in the top 1,000 queries by cost for that account. '),(0,a.kt)("h2",{id:"security"},"Security"),(0,a.kt)("p",null,"Vantage ensures that any sensitive data contained in queries is never stored in Vantage systems. When the ",(0,a.kt)("inlineCode",{parentName:"p"},"QUERY_HISTORY")," view is queried from Snowflake that data is immediately processed to strip all values from queries before they are stored."))}p.isMDXComponent=!0},8262:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/snowflake_queries-28fbfefb95aba3457298098ba0b9eb10.png"}}]);