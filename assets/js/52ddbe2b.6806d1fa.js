"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[5598],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,f=p["".concat(i,".").concat(u)]||p[u]||d[u]||n;return a?o.createElement(f,l(l({ref:t},m),{},{components:a})):o.createElement(f,l({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<n;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1489:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=a(7462),r=(a(7294),a(3905));const n={},l="Anomaly Detection",s={unversionedId:"cost_anomaly_alerts",id:"cost_anomaly_alerts",title:"Anomaly Detection",description:"Cost Anomaly Alerts notify teams of excess costs, and help engineers fix misconfigurations or other problems before they become very expensive. All costs present in a Cost Report will be analyzed for anomalies and all Cost Reports can be configured to send alerts. At the moment you cannot configure an alert for a specific resource. However, you can create a Cost Report filtered to a specific tag or label and configure an alert for this report.",source:"@site/docs/cost_anomaly_alerts.md",sourceDirName:".",slug:"/cost_anomaly_alerts",permalink:"/cost_anomaly_alerts",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/cost_anomaly_alerts.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Oracle Cloud",permalink:"/connecting_oracle"},next:{title:"Autopilot",permalink:"/autopilot"}},i={},c=[{value:"Anomalies vs. Alerts",id:"anomalies-vs-alerts",level:2},{value:"Configure Alerts",id:"configure-alerts",level:2},{value:"Taking Action on Alerts",id:"taking-action-on-alerts",level:2},{value:"How Anomaly Detection Works",id:"how-anomaly-detection-works",level:2}],m={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"anomaly-detection"},"Anomaly Detection"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("img",{alt:"Cost Anomaly Alert",width:"80%",src:"/img/cost-alert.png"})),(0,r.kt)("p",null,"Cost Anomaly Alerts notify teams of excess costs, and help engineers fix misconfigurations or other problems before they become very expensive. All costs present in a ",(0,r.kt)("a",{parentName:"p",href:"/cost_reports/"},"Cost Report")," will be analyzed for anomalies and all Cost Reports can be configured to send alerts. At the moment you cannot configure an alert for a specific ",(0,r.kt)("a",{parentName:"p",href:"/active_resources/"},"resource"),". However, you can create a Cost Report filtered to a specific tag or label and configure an alert for this report."),(0,r.kt)("p",null,"Alerts can be sent to any number of email addresses as well as a set of Slack or Microsoft Team channels. You can choose any of your invited team members and add their email to the alert."),(0,r.kt)("p",null,"Anomalies will be sent as a summary once per day if there are new anomalies for that day."),(0,r.kt)("h2",{id:"anomalies-vs-alerts"},"Anomalies vs. Alerts"),(0,r.kt)("p",null,'Cost anomalies are detected automatically and populated in the Anomalies tab of a Cost Report. Just because an anomaly is detected does not mean an alert is sent. You must choose "Create Alert" in the Anomalies tab and select a destination for the alert (Slack, Teams, or Email).'),(0,r.kt)("h2",{id:"configure-alerts"},"Configure Alerts"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("img",{alt:"Create a Cost Anomaly Alert",width:"100%",src:"/img/create_alert.png"})),(0,r.kt)("p",null,"You can configure a cost anomaly alert by visiting any Cost Report, switching to the Anomalies tab and creating an alert. From there you can configure which report is being monitored, where the alert is sent and an optional minimum threshold in dollars. When viewing anomalies for a cost report you will be prompted to create an alert for that report if one is not already configured."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("img",{alt:"Alert Thresholds",width:"60%",src:"/img/anomaly-threshold.png"})),(0,r.kt)("p",null,"Alerts can be sent to Slack or Teams channels, as well as email."),(0,r.kt)("h2",{id:"taking-action-on-alerts"},"Taking Action on Alerts"),(0,r.kt)("p",null,'From the Anomalies list on a Cost Report you have two options to take action on the alert. You may click into the alert through the Category column to see it displayed on the overall Cost Report where the specific day which triggered the alert will be highlighted. From here you can choose "Manage Anomaly" and create an issue or ignore the anomaly. The same two actions are available in the More Options menu in the anomalies list. Anomalies have three states: Active, Archived, and Ignored.'),(0,r.kt)("p",null,"If you create a ",(0,r.kt)("a",{parentName:"p",href:"https://www.vantage.sh/features/issues"},"Vantage Issue")," you can link to the Cost Report that is causing the problem. This issue can be assigned to yourself or another teammate to resolve later. The assignee will be able to check the Notifications page to see the alert and any other past Cost Alerts."),(0,r.kt)("h2",{id:"how-anomaly-detection-works"},"How Anomaly Detection Works"),(0,r.kt)("p",null,"A machine learning model is trained on every cost category for every service of a cost report. If a cost for a specific date falls outside of the expected bounds it is considered an anomaly. Vantage also filters out very low dollar value cost anomalies to reduce alerting noise."),(0,r.kt)("p",null,"Anomalies are active if they have occurred in the past 7 days. Once this window passes they move to archived. Anomalies will only alert the first time they are detected. If an anomaly persists for multiple days in a row Vantage will not send alerts after the first day. However, anomalies will be available to be viewed historically for a cost report and the date will be marked as the first day the anomaly occurred."))}d.isMDXComponent=!0}}]);