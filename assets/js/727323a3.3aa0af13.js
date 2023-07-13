"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[7201],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i="Azure",s={unversionedId:"connecting_azure",id:"connecting_azure",title:"Azure",description:"Create a free Vantage account then follow the steps below to integrate Azure costs.",source:"@site/docs/connecting_azure.md",sourceDirName:".",slug:"/connecting_azure",permalink:"/connecting_azure",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/connecting_azure.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"AWS Services & Regions",permalink:"/supported_services"},next:{title:"Setup Google Cloud",permalink:"/connecting_gcp"}},c={},l=[{value:"Connecting Your Azure Account",id:"connecting-your-azure-account",level:2},{value:"Create an Azure Service Principal",id:"create-an-azure-service-principal",level:3},{value:"Grant the Service Principal Permissions",id:"grant-the-service-principal-permissions",level:3},{value:"Save the Credentials in Vantage",id:"save-the-credentials-in-vantage",level:3},{value:"Azure Cost and Rightsizing Recommendations",id:"azure-cost-and-rightsizing-recommendations",level:2},{value:"Kubernetes and AKS",id:"kubernetes-and-aks",level:2},{value:"Feature Availability for Azure",id:"feature-availability-for-azure",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"azure"},"Azure"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://console.vantage.sh/signup"},"Create a free Vantage account")," then follow the steps below to integrate Azure costs."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("img",{alt:"Azure Cost Reports",width:"100%",src:"/img/azure-cost-report.png"})),(0,r.kt)("h2",{id:"connecting-your-azure-account"},"Connecting Your Azure Account"),(0,r.kt)("p",null,"Vantage integrates with your Azure account through the use of a Active Directory ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/service-accounts-principal"},"Service Principal"),". This principal is then assigned access to either ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/governance/management-groups/overview"},"management groups")," or individual ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-subscriptions"},"subscriptions"),"."),(0,r.kt)("p",null,"You can connect hundreds of Azure subscriptions to Vantage through the management group method. Any subscriptions that are part of a ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal"},"resource group")," will be automatically imported."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The service principal is granted ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#reader"},"Reader")," permissions. It does ",(0,r.kt)("strong",{parentName:"p"},"not")," have permissions nor will it ever attempt to make any changes to your infrastructure.")),(0,r.kt)("h3",{id:"create-an-azure-service-principal"},"Create an Azure Service Principal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'az ad sp create-for-rbac -n "vantage"\n')),(0,r.kt)("p",null,"This will output the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "appId": "2d218f0f5-7ad5-4a12-abc7-bad2889d6407",\n  "displayName": "vantage",\n  "password": "8zkj3~yswKd433U12SHrvp22UoA6tOOOkZ_BYar2",\n  "tenant": "1050a480-ef60-43d7-b8db-224aad100b60"\n}\n')),(0,r.kt)("p",null,"Record the appId, tenant and password as you will enter these into the Vantage console."),(0,r.kt)("h3",{id:"grant-the-service-principal-permissions"},"Grant the Service Principal Permissions"),(0,r.kt)("p",null,"Grant Permissions to the 'appId' from the service principal created above. The scope can be a subscription or management group."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'az role assignment create --assignee <SERVICE_PRINCIPAL_APP_ID> \\\n  --role Reader \\\n  --scope "/providers/Microsoft.Management/managementGroups/<MANGEMENT_GROUP_ID>"\n')),(0,r.kt)("h3",{id:"save-the-credentials-in-vantage"},"Save the Credentials in Vantage"),(0,r.kt)("p",null,"Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/integrations"},"integrations page")," and add an Azure Integration."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("img",{alt:"Azure Connection",width:"60%",src:"/img/azure_connection.png"})),(0,r.kt)("h2",{id:"azure-cost-and-rightsizing-recommendations"},"Azure Cost and Rightsizing Recommendations"),(0,r.kt)("p",null,"Vantage currently supports cost recommendations for Compute Reserved Instances and Compute Unattached Virtual Hard Disks (Disks which have not been attached to a VM in the last 30 days). Each recommendation shows potential savings value which is not something that is shown in Azure Advisor. Savings estimates are displayed in USD."),(0,r.kt)("h2",{id:"kubernetes-and-aks"},"Kubernetes and AKS"),(0,r.kt)("p",null,"Vantage supports Kubernetes cost allocation on Azure, including Kubernetes clusters running on VMs or through AKS. Vantage makes use of ",(0,r.kt)("a",{parentName:"p",href:"/opencost"},"OpenCost"),", an open-source CNCF project, to monitor and ingest Kuberentes costs from Azure."),(0,r.kt)("h2",{id:"feature-availability-for-azure"},"Feature Availability for Azure"),(0,r.kt)("p",null,"The following features support connected Azure accounts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/sso"},"Active Directory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cost_anomaly_alerts"},"Anomaly Detection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/budgets"},"Budgets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cost_reports"},"Cost Reports")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/forecasting"},"Forecasting")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/microsoft_teams_integration"},"Microsoft Teams")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/active_resources"},"Resource Reports")," (Coming Soon)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/savings_planner"},"Savings Planner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/per_unit_costs"},"Unit Costs"))))}m.isMDXComponent=!0}}]);