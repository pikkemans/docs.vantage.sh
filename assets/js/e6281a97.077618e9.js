"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[6736],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={},i="Microsoft Teams",s={unversionedId:"microsoft_teams_integration",id:"microsoft_teams_integration",title:"Microsoft Teams",description:"Vantage integrates with Microsoft Teams. From the Cost Report Notifications page, customers can associate their Microsoft Teams account with their Vantage account. Upon completing that integration, users can adjust cost report notifications to be delivered to a specific public or private channel in Microsoft Teams. Vantage users can edit existing cost report notifications or create new ones where they'll be able to choose any number of Microsoft Teams channels from their team's account.",source:"@site/docs/microsoft_teams_integration.md",sourceDirName:".",slug:"/microsoft_teams_integration",permalink:"/microsoft_teams_integration",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/microsoft_teams_integration.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Slack",permalink:"/slack_integration"},next:{title:"Savings Planner",permalink:"/savings_planner"}},c={},l=[{value:"Setup and Permissions",id:"setup-and-permissions",level:3},{value:"Updating",id:"updating",level:3}],p={toc:l},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"microsoft-teams"},"Microsoft Teams"),(0,r.kt)("p",null,"Vantage integrates with Microsoft Teams. From the ",(0,r.kt)("a",{parentName:"p",href:"https://console.vantage.sh/report_notifications"},"Cost Report Notifications page"),", customers can associate their Microsoft Teams account with their Vantage account. Upon completing that integration, users can adjust cost report notifications to be delivered to a specific public or private channel in Microsoft Teams. Vantage users can edit existing cost report notifications or create new ones where they'll be able to choose any number of Microsoft Teams channels from their team's account."),(0,r.kt)("p",null,"All ",(0,r.kt)("a",{parentName:"p",href:"/reports/"},"Cost Report Notifications")," are delivered at 11:30 AM EST (4:30 PM UTC)."),(0,r.kt)("h3",{id:"setup-and-permissions"},"Setup and Permissions"),(0,r.kt)("p",null,'Visit the Report Notifications page and click the "Setup Microsoft Teams Integration" button. You will have to log into with your Microsoft 365 account and authorize Vantage to access your account. You will need permissions to add integrations to your Microsoft Team\u2019s account. Vantage will ask for the following permissions on your Teams account:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read names and descriptions of Teams"),(0,r.kt)("li",{parentName:"ul"},"Read names and descriptions of channels"),(0,r.kt)("li",{parentName:"ul"},"Send messages to channels")),(0,r.kt)("p",null,"The Vantage app for Microsoft Teams has been verified by Microsoft. Vantage interacts with Microsoft Office 365 to set the approved permissions for the app in your account and makes use of the Microsoft Graph API to get and send info to your Microsoft Teams account."),(0,r.kt)("h3",{id:"updating"},"Updating"),(0,r.kt)("p",null,'After adding the Vantage Microsoft Teams integration you can click edit on a Cost Report Notification and there will be a "Microsoft Teams Channels" field. You can start typing any channel where you would like that report notification to be delivered. You can add as many channels as you like and they will all receive the notification.'))}f.isMDXComponent=!0}}]);