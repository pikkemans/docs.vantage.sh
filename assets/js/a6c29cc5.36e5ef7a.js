"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),b=a,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},8018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},s="Setup Kubernetes",i={unversionedId:"connecting_kubernetes",id:"connecting_kubernetes",title:"Setup Kubernetes",description:"Vantage supports breaking down the cost to run a Kubernetes cluster by service, namespace and label. Vantage supports any type of Kubernetes deployment. This allows teams to easily understand how their shared clusters are being utilized and how to account for cluster costs across teams and applications.",source:"@site/docs/connecting_kubernetes.md",sourceDirName:".",slug:"/connecting_kubernetes",permalink:"/connecting_kubernetes",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/docs/connecting_kubernetes.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"GCP Billing Exports",permalink:"/enabling_gcp_billing_export"},next:{title:"Kubernetes (OpenCost)",permalink:"/opencost"}},c={},l=[{value:"How it Works",id:"how-it-works",level:2},{value:"Enabling Kubernetes Costs",id:"enabling-kubernetes-costs",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup-kubernetes"},"Setup Kubernetes"),(0,a.kt)("p",null,"Vantage supports breaking down the cost to run a Kubernetes cluster by service, namespace and label. Vantage supports any type of Kubernetes deployment. This allows teams to easily understand how their shared clusters are being utilized and how to account for cluster costs across teams and applications."),(0,a.kt)("p",null,"Vantage recommends ",(0,a.kt)("a",{parentName:"p",href:"/opencost"},"OpenCost")," as the preferred integration point for Kubernetes costs."),(0,a.kt)("h2",{id:"how-it-works"},"How it Works"),(0,a.kt)("p",null,"Vantage looks at Pod lifecycle data and the underlying EC2 instance that the Pod is running on. By joining the lifecycle data of each Pod (along with the greater of either the reserved or actual CPU/memory prescribed) with the specific rate information of the underlying EC2 instance, we allocate subcategories of the EC2 instance (vPCU, Memory, GPU, Storage, etc) to the Pod. The lifecycle of the EC2 instance is also automatically determined (on-demand, spot, reserved, savings plan, EDP, etc). This allows you to see costs by the following dimensions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"By Kubernetes Service"),(0,a.kt)("li",{parentName:"ul"},"By Kubernetes Namespace"),(0,a.kt)("li",{parentName:"ul"},"By Kubernetes Label")),(0,a.kt)("p",null,"Vantage automatically profiles your clusters for all existing services, namespaces and labels to make available for you in the Vantage console."),(0,a.kt)("h2",{id:"enabling-kubernetes-costs"},"Enabling Kubernetes Costs"),(0,a.kt)("p",null,"Vantage supports seeing Kubernetes costs via Opencost and Prometheus. You can get started by following these ",(0,a.kt)("a",{parentName:"p",href:"https://docs.vantage.sh/opencost/"},"instructions"),"."))}d.isMDXComponent=!0}}]);