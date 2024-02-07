"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[7201],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),r=a(7294),i=a(6010),o=a(2466),s=a(6550),l=a(1980),c=a(7392),u=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=m(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,c]=g({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),k=(()=>{const e=l??p;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,i]),tabValues:i}}var k=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==s&&(p(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},o,{className:(0,i.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},3278:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),i=a(4866),o=a(5162);const s={id:"connecting_azure",title:"Azure",description:"This page walks through how to connect your Azure account to Vantage.",keywords:["Azure","Connect Azure"],toc_max_heading_level:4},l="Azure",c={unversionedId:"connecting_azure",id:"connecting_azure",title:"Azure",description:"This page walks through how to connect your Azure account to Vantage.",source:"@site/docs/connecting_azure.md",sourceDirName:".",slug:"/connecting_azure",permalink:"/connecting_azure",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/connecting_azure.md",tags:[],version:"current",frontMatter:{id:"connecting_azure",title:"Azure",description:"This page walks through how to connect your Azure account to Vantage.",keywords:["Azure","Connect Azure"],toc_max_heading_level:4},sidebar:"someSidebar",previous:{title:"AWS Services & Regions",permalink:"/aws_supported_services"},next:{title:"Azure Services & Regions",permalink:"/azure_supported_services"}},u={},p=[{value:"Connect Your Azure Account",id:"connect-your-azure-account",level:2},{value:"Connect via the Azure CLI",id:"azure-cli",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Step 1: Create an Azure Service Principal",id:"step-1-create-an-azure-service-principal",level:4},{value:"Step 2: Grant the Service Principal Permissions",id:"granting-the-service-principal-permissions",level:4},{value:"Connect via the Azure Portal",id:"azure-portal",level:3},{value:"Prerequisites",id:"prerequisites-1",level:4},{value:"Step 1: Create a New Application Registration",id:"step-1-create-a-new-application-registration",level:4},{value:"Step 2: Generate a Client Secret",id:"step-2-generate-a-client-secret",level:4},{value:"Step 3: Grant the Service Principal Permissions",id:"step-3-grant-the-service-principal-permissions",level:4},{value:"Save the Credentials in Vantage",id:"save-credentials",level:3},{value:"Azure Cost and Rightsizing Recommendations",id:"azure-cost-and-rightsizing-recommendations",level:2},{value:"Kubernetes and AKS",id:"kubernetes-and-aks",level:2},{value:"Azure Reporting Dimensions",id:"azure-reporting-dimensions",level:2}],m={toc:p},d="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"azure"},"Azure"),(0,r.kt)("p",null,"Vantage integrates with your Azure account using an Active Directory ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/service-accounts-principal"},"Service Principal"),". This principal is then assigned access to either ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/governance/management-groups/overview"},"management groups")," or individual ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-subscriptions"},"subscriptions"),"."),(0,r.kt)("p",null,"You can connect hundreds of Azure subscriptions to Vantage through the management group method. Any subscriptions that are part of a ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal"},"resource group")," will be automatically imported."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The service principal is granted ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#reader"},"Reader")," permissions. It does ",(0,r.kt)("strong",{parentName:"p"},"not")," have permissions\u2014nor will it ever attempt\u2014to make any changes to your infrastructure.")),(0,r.kt)("h2",{id:"connect-your-azure-account"},"Connect Your Azure Account"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Instructions are provided below for you to connect via the ",(0,r.kt)("a",{parentName:"p",href:"/connecting_azure#azure-cli"},"Azure CLI")," or the ",(0,r.kt)("a",{parentName:"p",href:"/connecting_azure#azure-portal"},"Azure portal"),".")),(0,r.kt)("h3",{id:"azure-cli"},"Connect via the Azure CLI"),(0,r.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The below commands are run via the ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/cli/azure/?view=azure-cli-latest"},"Azure CLI"),". Ensure you have access to Azure CLI and can create service principals and manage their permissions. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://console.vantage.sh/signup"},"Create a free Vantage account"),", then follow the steps below to integrate Azure costs.")),(0,r.kt)("h4",{id:"step-1-create-an-azure-service-principal"},"Step 1: Create an Azure Service Principal"),(0,r.kt)("p",null,"Create a service principal using the following command: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'az ad sp create-for-rbac -n "vantage"\n')),(0,r.kt)("p",null,"You should see output similar to the below output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "appId": "2d218f0f5-7ad5-4a12-abc7-bad2889d6407",\n  "displayName": "vantage",\n  "password": "8zkj3~yswKd433U12SHrvp22UoA6tOOOkZ_BYar2",\n  "tenant": "1050a480-ef60-43d7-b8db-224aad100b60"\n}\n')),(0,r.kt)("p",null,"Record the ",(0,r.kt)("inlineCode",{parentName:"p"},"appId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"tenant")," as you will enter these credentials into the Vantage console."),(0,r.kt)("h4",{id:"granting-the-service-principal-permissions"},"Step 2: Grant the Service Principal Permissions"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Vantage recommends assigning permissions to a management group that aggregates your subscriptions. By following this recommendation, you do not have to manually assign each subscription.")),(0,r.kt)("p",null,"Grant permissions to the ",(0,r.kt)("inlineCode",{parentName:"p"},"appId")," from the service principal created above. The scope can be a subscription or management group. Ensure you replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<SERVICE_PRINCIPAL_APP_ID>")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"appId"),". Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<MANAGEMENT_GROUP_ID>")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"<SUBSCRIPTION_ID>"),") with your management group ID (or subscription ID). "),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"management-group",label:"Management Group",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'az role assignment create --assignee <SERVICE_PRINCIPAL_APP_ID> \\\n  --role Reader \\\n  --scope "/providers/Microsoft.Management/managementGroups/<MANAGEMENT_GROUP_ID>"\n'))),(0,r.kt)(o.Z,{value:"subscription",label:"Subscription",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'az role assignment create --assignee <SERVICE_PRINCIPAL_APP_ID> \\\n  --role Reader \\\n  --scope "/subscriptions/<SUBSCRIPTION_ID>"\n')))),(0,r.kt)("p",null,"Skip to the ",(0,r.kt)("a",{parentName:"p",href:"/connecting_azure#save-credentials"},"Save the Credentials in Vantage")," section for the steps to complete the connection with Vantage."),(0,r.kt)("h3",{id:"azure-portal"},"Connect via the Azure Portal"),(0,r.kt)("h4",{id:"prerequisites-1"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The below instructions are for connecting using the Azure portal. If you already completed the steps via the Azure CLI, skip to the ",(0,r.kt)("a",{parentName:"li",href:"/connecting_azure#save-credentials"},"Save the Credentials in Vantage")," section. You should have access to set up service principals and grant those service principals permissions. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://console.vantage.sh/signup"},"Create a free Vantage account"),", then follow the steps below to integrate Azure costs.")),(0,r.kt)("h4",{id:"step-1-create-a-new-application-registration"},"Step 1: Create a New Application Registration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the main page of the Azure portal, search for and navigate to ",(0,r.kt)("strong",{parentName:"li"},"Microsoft Entra ID"),". "),(0,r.kt)("li",{parentName:"ol"},"In the left navigation, under ",(0,r.kt)("strong",{parentName:"li"},"Manage"),", select ",(0,r.kt)("strong",{parentName:"li"},"App registrations"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"+ New registration"),". ",(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to view example image"),(0,r.kt)("div",null,(0,r.kt)("img",{alt:"Azure portal with App Registration menu option selected",width:"100%",src:"/img/connect-azure/azure-new-app-registration.png"})," "))),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"Register an application")," screen is displayed. For ",(0,r.kt)("strong",{parentName:"li"},"Name"),", enter ",(0,r.kt)("em",{parentName:"li"},"vantage"),"."),(0,r.kt)("li",{parentName:"ol"},"Leave all other settings as their defaults and click ",(0,r.kt)("strong",{parentName:"li"},"Register"),". ",(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to view example image"),(0,r.kt)("div",null,(0,r.kt)("img",{alt:"Azure portal the Register an application screen and vantage entered as app name",width:"100%",src:"/img/connect-azure/azure-register-app.png"})," "))),(0,r.kt)("li",{parentName:"ol"},"The app details are displayed. Record the ",(0,r.kt)("strong",{parentName:"li"},"Application (client) ID")," and ",(0,r.kt)("strong",{parentName:"li"},"Directory (tenant) ID")," to use later.",(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to view example image"),(0,r.kt)("div",null,(0,r.kt)("img",{alt:"Azure portal with the client ID and tenant ID displayed and highlighted",width:"100%",src:"/img/connect-azure/azure-app-ids.png"})," ")))),(0,r.kt)("h4",{id:"step-2-generate-a-client-secret"},"Step 2: Generate a Client Secret"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On the same page, next to the ",(0,r.kt)("strong",{parentName:"li"},"Client credentials")," field, click ",(0,r.kt)("strong",{parentName:"li"},"Add a certificate or secret"),". (You can also access the ",(0,r.kt)("strong",{parentName:"li"},"Certificates and secrets")," screen from the left navigation menu.)"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"+ New client secret"),". "),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"Add a client secret")," pane is displayed. For ",(0,r.kt)("strong",{parentName:"li"},"Description"),", enter a description, such as ",(0,r.kt)("em",{parentName:"li"},"vantage-secret"),". ",(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to view example image"),(0,r.kt)("div",null,(0,r.kt)("img",{alt:"Azure portal with the Azure client secret window open and a new secreted created called vantage-secret",width:"100%",src:"/img/connect-azure/azure-client-secret.png"})," "))),(0,r.kt)("li",{parentName:"ol"},"For ",(0,r.kt)("strong",{parentName:"li"},"Expires"),", select an expiration option for the secret.",(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If this secret expires, you will need to supply Vantage with a new secret ",(0,r.kt)("em",{parentName:"p"},"before")," the expiration date."))),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Add"),"."),(0,r.kt)("li",{parentName:"ol"},"The newly created secret is displayed. Copy the secret's ",(0,r.kt)("strong",{parentName:"li"},"Value")," to add to the Vantage console later. This value will be displayed only one time.")),(0,r.kt)("h4",{id:"step-3-grant-the-service-principal-permissions"},"Step 3: Grant the Service Principal Permissions"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Vantage recommends assigning permissions to a management group that aggregates your subscriptions. By following this recommendation, you do not have to manually assign each subscription.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the top navigation, search for and navigate to ",(0,r.kt)("strong",{parentName:"li"},"Management groups"),". (If you want to assign permissions to a subscription, navigate to ",(0,r.kt)("strong",{parentName:"li"},"Subscriptions"),".)"),(0,r.kt)("li",{parentName:"ol"},"Open the management group for which you will be assigning permissions.  "),(0,r.kt)("li",{parentName:"ol"},"On the left navigation, click ",(0,r.kt)("strong",{parentName:"li"},"Access control (IAM)"),". "),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Add role assignment"),". ",(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to view example image"),(0,r.kt)("div",null,(0,r.kt)("img",{alt:"Azure portal with management group window open. The Access control tab is highlighted.",width:"100%",src:"/img/connect-azure/azure-add-role-assign.png"})," "))),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Add role assignment")," screen, select ",(0,r.kt)("strong",{parentName:"li"},"Reader"),". Then, click ",(0,r.kt)("strong",{parentName:"li"},"Next"),". ",(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to view example image"),(0,r.kt)("div",null,(0,r.kt)("img",{alt:"Azure portal with Reader role highlighted",width:"100%",src:"/img/connect-azure/azure-add-reader-role.png"})," "))),(0,r.kt)("li",{parentName:"ol"},"For ",(0,r.kt)("strong",{parentName:"li"},"Assign access to"),", select ",(0,r.kt)("strong",{parentName:"li"},"User, group, or service principal"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"+ Select members"),". The ",(0,r.kt)("strong",{parentName:"li"},"Select members")," tab is displayed on the right. Search for the ",(0,r.kt)("em",{parentName:"li"},"vantage")," app you created before. Select the listed app, then click ",(0,r.kt)("strong",{parentName:"li"},"Select"),".",(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to view example image"),(0,r.kt)("div",null,(0,r.kt)("img",{alt:"Azure portal with Add role assignment window displayed",width:"100%",src:"/img/connect-azure/azure-add-role-assignment.png"})," "))),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Next")," > ",(0,r.kt)("strong",{parentName:"li"},"Review + assign"),". ")),(0,r.kt)("h3",{id:"save-credentials"},"Save the Credentials in Vantage"),(0,r.kt)("p",null,"After you complete the steps for connecting via the Azure CLI or Azure portal, follow the steps below to add the Azure tenant ID, service principal App ID, and service principal password/secret in Vantage. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the ",(0,r.kt)("a",{parentName:"li",href:"https://console.vantage.sh/settings/integrations"},"Integrations page")," in the Vantage console, and add an Azure integration."),(0,r.kt)("li",{parentName:"ol"},"On the Azure integration page, click ",(0,r.kt)("strong",{parentName:"li"},"Add Credentials"),". "),(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("strong",{parentName:"li"},"Azure AD Tenant ID"),", ",(0,r.kt)("strong",{parentName:"li"},"Service Principal App ID"),", and ",(0,r.kt)("strong",{parentName:"li"},"Service Principal Password")," you previously obtained, then click ",(0,r.kt)("strong",{parentName:"li"},"Connect Account"),". Vantage will begin importing your Azure costs. ")),(0,r.kt)("h2",{id:"azure-cost-and-rightsizing-recommendations"},"Azure Cost and Rightsizing Recommendations"),(0,r.kt)("p",null,"Vantage currently supports cost recommendations for Compute Reserved Instances and Compute Unattached Virtual Hard Disks (disks that have not been attached to a VM in the last 30 days). Each recommendation shows potential savings value, which is something that is not shown in Azure Advisor. Savings estimates are displayed in USD."),(0,r.kt)("h2",{id:"kubernetes-and-aks"},"Kubernetes and AKS"),(0,r.kt)("p",null,"Vantage supports Kubernetes cost allocation on Azure, including Kubernetes clusters running on VMs or through AKS. Vantage recommends using the ",(0,r.kt)("a",{parentName:"p",href:"/kubernetes_agent"},"Vantage Kubernetes agent")," to monitor and ingest Kubernetes costs from Azure."),(0,r.kt)("h2",{id:"azure-reporting-dimensions"},"Azure Reporting Dimensions"),(0,r.kt)("p",null,"On Azure ",(0,r.kt)("a",{parentName:"p",href:"/cost_reports"},"Cost Reports"),", you can filter across several dimensions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Resource Group"),(0,r.kt)("li",{parentName:"ul"},"Category"),(0,r.kt)("li",{parentName:"ul"},"Tagged/Not Tagged"),(0,r.kt)("li",{parentName:"ul"},"Subcategory"),(0,r.kt)("li",{parentName:"ul"},"Resource"),(0,r.kt)("li",{parentName:"ul"},"Region"),(0,r.kt)("li",{parentName:"ul"},"Subscription"),(0,r.kt)("li",{parentName:"ul"},"Service")))}g.isMDXComponent=!0}}]);