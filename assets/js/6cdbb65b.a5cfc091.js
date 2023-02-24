"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i="Slack",s={unversionedId:"slack_integration",id:"slack_integration",title:"Slack",description:"Vantage users can add Vantage to their team's Slack account to get Cost Report Notifications in a specific channel in Slack. To add the integration to a private channel, first add the Vantage app with /invite @Vantage. Vantage users can edit existing cost report notifications or create new ones where they'll be able to choose any number of Slack channels from their team's account.",source:"@site/docs/slack_integration.md",sourceDirName:".",slug:"/slack_integration",permalink:"/slack_integration",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/docs/slack_integration.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Cost Report Notifications",permalink:"/reports"},next:{title:"Microsoft Teams",permalink:"/microsoft_teams_integration"}},c={},l=[{value:"Setup and Permissions",id:"setup-and-permissions",level:3},{value:"Updating",id:"updating",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"slack"},"Slack"),(0,r.kt)("p",null,"Vantage users can add Vantage to their team's Slack account to get ",(0,r.kt)("a",{parentName:"p",href:"/reports/"},"Cost Report Notifications")," in a specific channel in Slack. To add the integration to a private channel, first add the Vantage app with ",(0,r.kt)("inlineCode",{parentName:"p"},"/invite @Vantage"),". Vantage users can edit existing cost report notifications or create new ones where they'll be able to choose any number of Slack channels from their team's account."),(0,r.kt)("p",null,"All Cost Report Notifications are delivered at 11:30 AM EST (4:30 PM UTC)."),(0,r.kt)("h3",{id:"setup-and-permissions"},"Setup and Permissions"),(0,r.kt)("p",null,"To setup the Slack Integration, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://console.vantage.sh/report_notifications"},"Report Notifications page"),' and click the "Setup Slack Integration" button. This will take you to a Slack page describing our requested permissions. You will need to have permissions in Slack to add integrations to your team\'s Slack account. The Vantage integration has permissions to list and join channels as well as post messages to those channels. Vantage does not read any message posted in those channels.'),(0,r.kt)("p",null,"Then choose any channel where you would like to add the integration. The first notification will be sent the next day after the integration is added."),(0,r.kt)("h3",{id:"updating"},"Updating"),(0,r.kt)("p",null,'To update an existing report notification from email to Slack, do the following. After adding the Vantage Slack integration you can click "edit" on a Cost Report Notification and there will be a "Slack Channels" field. You can start typing any channel where you would like that report notification to be delivered. You can add as many channels as you like and they will all receive the notification.'))}d.isMDXComponent=!0}}]);