"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[736],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(o),m=r,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return o?n.createElement(d,i(i({ref:t},p),{},{components:o})):n.createElement(d,i({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5913:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const a={},i="Microsoft Teams",s={unversionedId:"microsoft_teams_integration",id:"microsoft_teams_integration",title:"Microsoft Teams",description:"Vantage integrates with Microsoft Teams. From the Cost Report Notifications page, customers can associate their Microsoft Teams account with their Vantage account. Upon completing that integration, users can adjust cost report notifications to be delivered to a specific public or private channel in Microsoft Teams. Vantage users can edit existing cost report notifications or create new ones where they'll be able to choose any number of Microsoft Teams channels from their team's account.",source:"@site/docs/microsoft_teams_integration.md",sourceDirName:".",slug:"/microsoft_teams_integration",permalink:"/microsoft_teams_integration",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/docs/microsoft_teams_integration.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Slack",permalink:"/slack_integration"},next:{title:"Terraform Cloud",permalink:"/terraform_cloud_integration"}},c={},l=[{value:"Setup and Permissions",id:"setup-and-permissions",level:3},{value:"Updating",id:"updating",level:3}],p={toc:l},u="wrapper";function f(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"microsoft-teams"},"Microsoft Teams"),(0,r.kt)("p",null,"Vantage integrates with Microsoft Teams. From the ",(0,r.kt)("a",{parentName:"p",href:"https://console.vantage.sh/report_notifications"},"Cost Report Notifications page"),", customers can associate their Microsoft Teams account with their Vantage account. Upon completing that integration, users can adjust cost report notifications to be delivered to a specific public or private channel in Microsoft Teams. Vantage users can edit existing cost report notifications or create new ones where they'll be able to choose any number of Microsoft Teams channels from their team's account."),(0,r.kt)("p",null,"All ",(0,r.kt)("a",{parentName:"p",href:"/reports/"},"Cost Report Notifications")," are delivered at 11:30 AM EST (4:30 PM UTC)."),(0,r.kt)("h3",{id:"setup-and-permissions"},"Setup and Permissions"),(0,r.kt)("p",null,'Visit the Report Notifications page and click the "Setup Microsoft Teams Integration" button. You will have to log into with your Microsoft 365 account and authorize Vantage to access your account. You will need permissions to add integrations to your Microsoft Team\u2019s account. Vantage will ask for the following permissions on your Teams account:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read names and descriptions of Teams"),(0,r.kt)("li",{parentName:"ul"},"Read names and descriptions of channels"),(0,r.kt)("li",{parentName:"ul"},"Send messages to channels")),(0,r.kt)("p",null,"The Vantage app for Microsoft Teams has been verified by Microsoft. Vantage interacts with Microsoft Office 365 to set the approved permissions for the app in your account and makes use of the Microsoft Graph API to get and send info to your Microsoft Teams account."),(0,r.kt)("h3",{id:"updating"},"Updating"),(0,r.kt)("p",null,'After adding the Vantage Microsoft Teams integration you can click edit on a Cost Report Notification and there will be a "Microsoft Teams Channels" field. You can start typing any channel where you would like that report notification to be delivered. You can add as many channels as you like and they will all receive the notification.'))}f.isMDXComponent=!0}}]);