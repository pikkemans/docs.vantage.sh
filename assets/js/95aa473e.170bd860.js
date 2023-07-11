"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[4699],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=s(a),m=r,c=u["".concat(p,".").concat(m)]||u[m]||g[m]||l;return a?n.createElement(c,i(i({ref:e},d),{},{components:a})):n.createElement(c,i({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8706:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={},i="AWS Services & Regions",o={unversionedId:"supported_services",id:"supported_services",title:"AWS Services & Regions",description:"Supported Services",source:"@site/docs/supported_services.md",sourceDirName:".",slug:"/supported_services",permalink:"/supported_services",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/supported_services.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"AWS Permissions",permalink:"/permissions_aws"},next:{title:"Azure",permalink:"/connecting_azure"}},p={},s=[{value:"Supported Services",id:"supported-services",level:2},{value:"Supported Regions",id:"supported-regions",level:2}],d={toc:s},u="wrapper";function g(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aws-services--regions"},"AWS Services & Regions"),(0,r.kt)("h2",{id:"supported-services"},"Supported Services"),(0,r.kt)("p",null,"Vantage will show 100% of your organization's accrued costs across all services. We also offer per-resource pricing on for the following services by using custom logic to query APIs for each individual AWS service. While we support per-resource pricing for the most popular services we do not offer support for all AWS services by default. That being said: if you have an AWS service you'd like to be supported we can typically add support for most AWS services in under a week. "),(0,r.kt)("p",null,"To request new service support on Vantage, please email ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh"),' with the subject line of "New AWS Service Support" and please include as much information as you can about what information you\'d like to see. '),(0,r.kt)("p",null,"Below is a list of currently supported AWS services for Active Resources:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CloudWatch"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports CloudWatch Log Groups and its corresponding storage pricing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CloudFront"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports CloudFront and showing accrued costs per CloudFront distribution.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CodePipeline"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports CodePipeline.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CodeBuild"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports CodeBuild.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DynamoDB"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports DynamoDB tables.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EBS"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports all EBS volume types and corresponding pricing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EC2"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports all EC2 instance types, all on-demand and spot pricing and supporting CloudWatch metrics & logs. Vantage also imports all underlying EC2 images where possible.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ECS"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports ECS services and its corresponding pricing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EFS"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports EFS and its corresponding pricing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ECR"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports ECR and its corresponding pricing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ELB"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports ELB and its corresponding pricing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Elasticache"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports all Elasticache clusters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EKS"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports EKS and its corresponding pricing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch Service"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports Elasticsearch and its corresponding pricing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fargate"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports Fargate services and its corresponding pricing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Glacier"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports Glacier Vaults its corresponding pricing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Global Accelerator"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports Glacier Accelator its corresponding pricing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Glue"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports view Glue Job costs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IAM"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports IAM Groups, IAM Users and IAM Roles.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lambda"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports Lambda and is currently bolstering more formal support for it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KMS"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports showing accrued costs for KMS Keys.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Amazon Managed Streaming for Apache Kafka (Amazon MSK)"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports MSK and its corresponding pricing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MediaLive"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports MediaLive channels, MediaConvert Jobs, MediaConnect Flow, Mediapackage channels, mediastore containers, mediatailor channels and their corresponding pricing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MQ"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports MQ Brokers and their corresponding pricing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Networking primitives"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports networking primitives like Elastic IPs, VPCs, Subnets, Availability Zones and Security Groups.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Redshift"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports Redshift and its corresponding pricing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Route53"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports Route 53 Hosted Zones and its corresponding pricing. We also have write access for Route 53 Record Sets.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RDS"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports RDS and corresponding pricing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S3"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports S3 Buckets and corresponding bucket pricing. We provide daily storage and object count figures. Vantage shows total costs per S3 Bucket as well as summaries by storage classes. Vantage will also provide some calculations for you to determine savings impact of enabling S3 Intelligent Tiering. We do not have permission to read from your S3 Buckets.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Secrets Manager"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports AWS Secrets Manager and its corresponding pricing. We do not have permissions to read your secrets.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SNS"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports showing accrued costs for SNS Topics.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQS"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports showing accrued costs for SQS Queue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Workspaces"),(0,r.kt)("td",{parentName:"tr",align:null},"Vantage supports AWS Workspaces and its corresponding pricing.")))),(0,r.kt)("h2",{id:"supported-regions"},"Supported Regions"),(0,r.kt)("p",null,"Vantage supports the following AWS regions. In the event your region isn't listed and you'd like it added, please contact Vantage support at ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh")," and we are happy to help."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Region"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"us-east-1"),(0,r.kt)("td",{parentName:"tr",align:null},"US East, North Virginia")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"us-east-2"),(0,r.kt)("td",{parentName:"tr",align:null},"US East, Ohio")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"us-west-1"),(0,r.kt)("td",{parentName:"tr",align:null},"US West, Northern California")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"us-west-2"),(0,r.kt)("td",{parentName:"tr",align:null},"US West, Oregon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ap-east-1"),(0,r.kt)("td",{parentName:"tr",align:null},"Asia Pacific, Hong Kong")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ap-south-1"),(0,r.kt)("td",{parentName:"tr",align:null},"Asia Pacific, Mumbai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ap-northeast-1"),(0,r.kt)("td",{parentName:"tr",align:null},"Asia Pacific, Tokyo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ap-northeast-2"),(0,r.kt)("td",{parentName:"tr",align:null},"Asia Pacific, Seoul")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ap-southeast-1"),(0,r.kt)("td",{parentName:"tr",align:null},"Asia Pacific, Singapore")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ap-southeast-2"),(0,r.kt)("td",{parentName:"tr",align:null},"Asia Pacific, Sydney")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ca-central-1"),(0,r.kt)("td",{parentName:"tr",align:null},"Canada, Central")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eu-central-1"),(0,r.kt)("td",{parentName:"tr",align:null},"Europe, Frankfurt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eu-west-1"),(0,r.kt)("td",{parentName:"tr",align:null},"Europe, Ireland")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eu-west-2"),(0,r.kt)("td",{parentName:"tr",align:null},"Europe, London")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eu-west-3"),(0,r.kt)("td",{parentName:"tr",align:null},"Europe, Paris")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eu-south-1"),(0,r.kt)("td",{parentName:"tr",align:null},"Europe, Milan")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eu-north-1"),(0,r.kt)("td",{parentName:"tr",align:null},"Europe, Stockholm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"me-south-1"),(0,r.kt)("td",{parentName:"tr",align:null},"Middle East, Bahrain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sa-east-1"),(0,r.kt)("td",{parentName:"tr",align:null},"South America, Sao Paulo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"af-south-1"),(0,r.kt)("td",{parentName:"tr",align:null},"Africa, Cape Town")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"us-gov-west-1"),(0,r.kt)("td",{parentName:"tr",align:null},"GovCloud US")))))}g.isMDXComponent=!0}}]);