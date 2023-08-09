"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[9145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,h=u["".concat(c,".").concat(g)]||u[g]||d[g]||a;return n?o.createElement(h,s(s({ref:t},p),{},{components:n})):o.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={},s="Kubernetes (OpenCost)",i={unversionedId:"opencost",id:"opencost",title:"Kubernetes (OpenCost)",description:"OpenCost is an emerging specification for Kubernetes costs. Once OpenCost is deployed on your Kubernetes cluster, Vantage can ingest costs by leveraging Prometheus remote write functionality to retrieve and ingest cluster costs accoriingly to make available in the Vantage console accordingly. All Kubernetes environments are supported by OpenCost, including AWS, GCP, Azure, and on-prem, are supported by Vantage.",source:"@site/docs/opencost.md",sourceDirName:".",slug:"/opencost",permalink:"/opencost",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/opencost.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Setup Kubernetes",permalink:"/connecting_kubernetes"},next:{title:"Kubernetes (Container Insights)",permalink:"/kubernetes_container_insights"}},c={},l=[{value:"Check that OpenCost data is being ingested",id:"check-that-opencost-data-is-being-ingested",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kubernetes-opencost"},"Kubernetes (OpenCost)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.opencost.io"},"OpenCost")," is an emerging ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/opencost/opencost/blob/develop/spec/opencost-specv01.md"},"specification")," for Kubernetes costs. Once OpenCost is deployed on your Kubernetes cluster, Vantage can ingest costs by leveraging Prometheus remote write functionality to retrieve and ingest cluster costs accoriingly to make available in the Vantage console accordingly. All Kubernetes environments are supported by OpenCost, including AWS, GCP, Azure, and on-prem, are supported by Vantage."),(0,r.kt)("p",null,"OpenCost is the recommended way to integrate Kubernetes cost reporting into Vantage because of simplicity, ease of use as well as the most cost effective manner relative to other native tools offered by infrastructure providers such as container insights."),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To setup OpenCost in Azure or Google Cloud please contact us to be included in private beta support for Azure Monitor Managed Service for Prometheus or Google Cloud Managed Service for Prometheus.")),(0,r.kt)("p",null,"Vantage makes it easy to deploy and integrate with OpenCost. Here are the steps for how this is done:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"An AWS Managed Prometheus Workspace will be provisioned into your AWS Account in us-east-1 - which the Vantage cross account IAM Role will query directly to ingest OpenCost data."),(0,r.kt)("li",{parentName:"ol"},"An IAM User is created with permissions to write to this newly created workspace."),(0,r.kt)("li",{parentName:"ol"},"Opencost and Prometheus are deployed to your Kubernetes cluster and configured to remote_write to the AWS Managed Prometheus. The created IAM User credentials are used for authentication."),(0,r.kt)("li",{parentName:"ol"},"Vantage will regularly query the AWS Managed Prometheus Workspace to keep your Kubernetes cost information up-to-date.")),(0,r.kt)("p",null,"To get started with this integration visit the ",(0,r.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/integrations"},"integrations")," page and select the AWS account you would like to get started with. Deploying a Managed Prometheus per account is optional. You can use the single Managed Prometheus Workspace across all regions across all accounts."),(0,r.kt)("p",null,"If you already have a hosted Prometheus solution (such as Grafana) you can contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh")," to integrate directly."),(0,r.kt)("h2",{id:"check-that-opencost-data-is-being-ingested"},"Check that OpenCost data is being ingested"),(0,r.kt)("p",null,"Once the integration is deployed you can check the Kubernetes ",(0,r.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/integrations"},"integration page")," in the Vantage console to see if data is flowing. If you see the cluster names listed on this page then data is being ingested and your Kuberentes cost data through OpenCost will be available within a day or two."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("img",{alt:"OpenCost is working",width:"60%",src:"/img/opencost_working.png"})))}d.isMDXComponent=!0}}]);