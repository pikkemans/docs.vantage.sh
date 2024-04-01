"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[5598],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>y});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=n,y=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return a?o.createElement(y,i(i({ref:t},m),{},{components:a})):o.createElement(y,i({ref:t},m))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1489:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=a(7462),n=(a(7294),a(3905));const r={id:"cost_anomaly_alerts",title:"Anomaly Detection",description:"Create cost anomaly alerts so that you are aware of any issues or changes in your costs.",keywords:["Anomaly detection","Cost anomaly alerts"]},i="Anomaly Detection",s={unversionedId:"cost_anomaly_alerts",id:"cost_anomaly_alerts",title:"Anomaly Detection",description:"Create cost anomaly alerts so that you are aware of any issues or changes in your costs.",source:"@site/docs/cost_anomaly_alerts.md",sourceDirName:".",slug:"/cost_anomaly_alerts",permalink:"/cost_anomaly_alerts",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/cost_anomaly_alerts.md",tags:[],version:"current",frontMatter:{id:"cost_anomaly_alerts",title:"Anomaly Detection",description:"Create cost anomaly alerts so that you are aware of any issues or changes in your costs.",keywords:["Anomaly detection","Cost anomaly alerts"]},sidebar:"someSidebar",previous:{title:"Segments",permalink:"/segments"},next:{title:"Cost Report Notifications",permalink:"/report_notifications"}},l={},c=[{value:"How Anomaly Detection Works",id:"how-anomaly-detection-works",level:2},{value:"View Cost Anomalies",id:"view-cost-anomalies",level:2},{value:"Take Action on Anomalies",id:"take-action-on-anomalies",level:2},{value:"Configure Cost Anomaly Alerts",id:"configure-cost-anomaly-alerts",level:2}],m={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"anomaly-detection"},"Anomaly Detection"),(0,n.kt)("p",null,"Cost anomalies notify teams of excess costs and help engineers fix misconfigurations or other problems before they become very expensive. All costs present in a ",(0,n.kt)("a",{parentName:"p",href:"/cost_reports/"},"Cost Report")," will be analyzed for anomalies, and all Cost Reports can be configured to send alerts. You can also configure alerts to be sent for detected anomalies."),(0,n.kt)("p",null,"Alerts can be sent to any number of email addresses. You can select any of your team members with a Vantage account, and add their email to the alert. You can also send alerts via Slack or Microsoft Team channels. If there are new anomalies for that day, they will be sent as a summary once per day."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"At this time, you cannot configure an alert for a specific ",(0,n.kt)("a",{parentName:"p",href:"/active_resources/"},"resource"),"; however, you can create a Cost Report filtered to a specific tag or label and configure an alert for that report.")),(0,n.kt)("h2",{id:"how-anomaly-detection-works"},"How Anomaly Detection Works"),(0,n.kt)("p",null,"A machine learning model is trained on every cost category for every service of a Cost Report. If a cost for a specific date falls outside of the expected bounds, it is considered an anomaly. Vantage also filters out very low dollar value cost anomalies to reduce alerting noise. Anomalies are detected for each service at the category level. For example, with Amazon EC2, anomalies are detected for ",(0,n.kt)("em",{parentName:"p"},"Data Transfer")," or ",(0,n.kt)("em",{parentName:"p"},"Compute Instance"),"."),(0,n.kt)("h2",{id:"view-cost-anomalies"},"View Cost Anomalies"),(0,n.kt)("p",null,"To view cost anomalies, navigate to any Cost Report and select the ",(0,n.kt)("strong",{parentName:"p"},"Anomalies")," tab."),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center",boxShadow:"0 0 10px rgba(0, 0, 0, 0.2)",borderRadius:"10px",overflow:"hidden"}},(0,n.kt)("img",{alt:"GIF of a Cost Report with the Anomalies tab opened",width:"100%",src:"/img/cost-anomaly-alerts.gif"})),(0,n.kt)("br",null),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Anomalies are considered ",(0,n.kt)("strong",{parentName:"p"},"Active")," if they have occurred in the past seven days. Once this time window passes, they move to an ",(0,n.kt)("strong",{parentName:"p"},"Archived")," state.")),(0,n.kt)("p",null,"Anomaly alerts are sent only for the first time they are detected. If an anomaly persists for multiple days in a row, Vantage will not send alerts after the first day. Historical anomalies are available to view for a Cost Report, and the ",(0,n.kt)("strong",{parentName:"p"},"Anomaly Detected")," date will be the first day the anomaly occurred."),(0,n.kt)("h2",{id:"take-action-on-anomalies"},"Take Action on Anomalies"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"To view more information about a specific alert, select the link in the ",(0,n.kt)("strong",{parentName:"li"},"Category")," column."),(0,n.kt)("li",{parentName:"ol"},"The alert is displayed on the corresponding Cost Report. The specific day where the alert was surfaced is highlighted. At the top right of the graph, click ",(0,n.kt)("strong",{parentName:"li"},"Manage Anomaly"),"."),(0,n.kt)("li",{parentName:"ol"},"Select one of the following actions:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Create an Issue"),": Select this option to create an ",(0,n.kt)("a",{parentName:"li",href:"/issues"},"issue"),". A new tab is displayed with a new issue. The issue description will contain a link to the Cost Report where the anomaly was detected. This issue can be assigned to yourself or another teammate to resolve later. See the visual example below for how to create an issue. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Mark as Archived"),": The anomaly will be displayed as ",(0,n.kt)("strong",{parentName:"li"},"Archived")," in the anomalies list."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Ignore"),": The anomaly will be removed from the anomalies list. The ",(0,n.kt)("strong",{parentName:"li"},"Ignore Anomaly")," pop-up is displayed where you can provide feedback to Vantage on why you are ignoring the anomaly.")))),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center",boxShadow:"0 0 10px rgba(0, 0, 0, 0.2)",borderRadius:"10px",overflow:"hidden"}},(0,n.kt)("img",{alt:"GIF of a creating an issue for an Anomaly",width:"100%",src:"/img/anomaly-issue.gif"})),(0,n.kt)("h2",{id:"configure-cost-anomaly-alerts"},"Configure Cost Anomaly Alerts"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You can configure alerts to be sent via email, Slack, or Microsoft Teams. If you want to use Slack or Teams, you will need to configure the corresponding integration with Vantage. See the ",(0,n.kt)("a",{parentName:"p",href:"/report_notifications#slack"},"Slack")," or ",(0,n.kt)("a",{parentName:"p",href:"/report_notifications#ms-teams"},"Microsoft Teams")," integration documentation for Cost Report notifications. Once you have completed the integration steps, complete the below instructions to configure anomaly alerts.")),(0,n.kt)("p",null,"To receive alerts for any detected cost anomalies:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the top of the anomalies list, click ",(0,n.kt)("strong",{parentName:"li"},"Configure Alert"),"."),(0,n.kt)("li",{parentName:"ol"},"Select any email recipients you want to send the alert to. If you have Slack or Microsoft Teams configured, the ",(0,n.kt)("strong",{parentName:"li"},"Slack channels")," or ",(0,n.kt)("strong",{parentName:"li"},"Microsoft Teams channels")," fields are displayed."),(0,n.kt)("li",{parentName:"ol"},"Enter an ",(0,n.kt)("strong",{parentName:"li"},"Alert Threshold"),". You'll receive an alert only if this threshold is reached."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save"),".")),(0,n.kt)("p",null,"To add or remove recipients or change the threshold, click ",(0,n.kt)("strong",{parentName:"p"},"Configure Alert")," and make those updates."),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,n.kt)("img",{alt:"Alert Thresholds",width:"60%",src:"/img/anomaly-threshold.png"})))}d.isMDXComponent=!0}}]);