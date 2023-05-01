"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[8123],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=o,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8717:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={},i="Setup AWS",s={unversionedId:"connecting_aws",id:"connecting_aws",title:"Setup AWS",description:"Connecting Your AWS Account",source:"@site/docs/connecting_aws.md",sourceDirName:".",slug:"/connecting_aws",permalink:"/connecting_aws",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/connecting_aws.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Self-Service SSO",permalink:"/sso"},next:{title:"AWS Permissions",permalink:"/permissions_aws"}},l={},c=[{value:"Connecting Your AWS Account",id:"connecting-your-aws-account",level:2},{value:"Read Only by Default",id:"read-only-by-default",level:3},{value:"Connecting Multiple AWS Accounts",id:"connecting-multiple-aws-accounts",level:3},{value:"StackSet Prerequisites",id:"stackset-prerequisites",level:3},{value:"Connecting with Terraform",id:"connecting-with-terraform",level:3},{value:"Connecting by Manually Creating an IAM Role",id:"connecting-by-manually-creating-an-iam-role",level:3},{value:"AWS Data Ingestion Delay",id:"aws-data-ingestion-delay",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup-aws"},"Setup AWS"),(0,o.kt)("h2",{id:"connecting-your-aws-account"},"Connecting Your AWS Account"),(0,o.kt)("p",null,'Vantage understands security concerns and aims to provide as secure of a connection as possible with your AWS accounts. Vantage uses a mechanism called a "Cross Account IAM Role" to interact with services in your AWS account. AWS has ',(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/apn/securely-accessing-customer-aws-accounts-with-cross-account-iam-roles/"},"publicly documented")," this method and officially recommends it as the preferred method of doing any cross account interactions on AWS. Numerous internal AWS services and systems also leverage this method."),(0,o.kt)("p",null,"This means that Vantage ",(0,o.kt)("strong",{parentName:"p"},"never")," needs access credentials, account logins or passwords."),(0,o.kt)("p",null,"Note that everyone who works at Vantage has previously worked in public cloud infrastructure including companies like AWS, DigitalOcean, Github, Akamai and Cloudflare and we are taking best practices learned at those companies into consideration when building Vantage."),(0,o.kt)("h3",{id:"read-only-by-default"},"Read Only by Default"),(0,o.kt)("p",null,"When you create a Cross Account IAM Role using the provided CloudFormation template you are giving Vantage various ",(0,o.kt)("a",{parentName:"p",href:"https://docs.vantage.sh/permissions_aws/"},"permissions"),". All of the permissions by default are ReadOnly. The list of permissions was created by using the official AWS ReadOnly policy and removing some of the permissions AWS includes in that list in order to prevent Vantage from seeing information like reading from S3 Buckets and reading from databases."),(0,o.kt)("p",null,"Vantage only collects metadata about your infrastructure and never even attempts to read sensitive information from the underlying services. Our CloudFormation template is public and you may audit the list of permissions ",(0,o.kt)("a",{parentName:"p",href:"https://vantage-public.s3.amazonaws.com/vantage-integration-latest.json"},"here"),"."),(0,o.kt)("h3",{id:"connecting-multiple-aws-accounts"},"Connecting Multiple AWS Accounts"),(0,o.kt)("p",null,"Vantage allows you to connect multiple AWS accounts. We advise that you connect your master AWS account first. By default, we require you to start with one AWS account and ensure it properly connected. Upon connecting a master AWS account, Vantage will profile for all member accounts present in the organization. Vantage will be able to show you accrued costs from all member accounts in the organization as well as active resources that are present in that ",(0,o.kt)("em",{parentName:"p"},"master AWS account"),"."),(0,o.kt)("p",null,"In the event that you have multiple member accounts and want to view Active Resources present in those accounts, Vantage will offer you the ability to run something called a CloudFormation StackSet that will create one role per AWS member account. You're also welcome to skip this step and add/remove AWS accounts from your ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/workspaces"},"account settings")," whenever you see fit."),(0,o.kt)("p",null,"We recommend using StackSets if you have several accounts you would like to connect. This will automate the process for all of the accounts in your Organizational Unit. When connecting your account, if you have at least one member account, you will see instructions specific to your account on how to connect your member accounts using StackSets."),(0,o.kt)("h3",{id:"stackset-prerequisites"},"StackSet Prerequisites"),(0,o.kt)("p",null,"Note that in order to leverage StackSets, you must enable organizations access to operate a service managed stack set. You'll need to enable this in the AWS Console UI. In the event you don't have this enabled and attempt to run a StackSet command you'll get the following error:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"An error occurred (ValidationError) when calling the CreateStackSet operation: You must enable organizations access to operate a service managed stack set")),(0,o.kt)("p",null,"AWS maintains instructions for the latest way of enabling this which you can find ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html"},"here"),"."),(0,o.kt)("h3",{id:"connecting-with-terraform"},"Connecting with Terraform"),(0,o.kt)("p",null,"If you manage your infrastructure with Terraform it is very easy to connect to Vantage. During onboarding, instead of following the CloudFormation process, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest"},"Vantage Integrations Module")," to link your AWS and Vantage accounts. Below is an example of adding a member account without a CUR integration. Additional documentation can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest"},"Terraform Registry"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'provider "aws" {\n  region = "us-east-1"\n  assume_role {\n    role_arn = "arn:aws:iam::123456789012:role/admin-:ew\n    role"\n  }\n}\n\nmodule "vantage-integration" {\n  source  = "vantage-sh/vantage-integration/aws"\n}\n')),(0,o.kt)("p",null,"The terraform provider enables further cost automation using the ",(0,o.kt)("a",{parentName:"p",href:"https://vantage.readme.io/reference/general"},"Vantage API"),". IAM role creation is supported today and is being expanded to the following primitives:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cost_reports"},"Cost Reports")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cost_reports#saved-filters"},"Saved Filters")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/segments"},"Segments")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/budgets"},"Budgets")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/per_unit_costs#importing-business-metrics"},"Business Metrics"))),(0,o.kt)("p",null,"The capabilities help engineering teams ",(0,o.kt)("strong",{parentName:"p"},"fully automate cost reporting")," in Vantage through some of the following use cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build cost reports for hundreds of teams"),(0,o.kt)("li",{parentName:"ul"},"Integrate thousands of AWS accounts"),(0,o.kt)("li",{parentName:"ul"},"Push company metrics to Vantage"),(0,o.kt)("li",{parentName:"ul"},"Make infrastructure changes without manually updating every report"),(0,o.kt)("li",{parentName:"ul"},"Connect additional providers such as GCP and Azure"),(0,o.kt)("li",{parentName:"ul"},"Configure and route Kubernetes metrics from systems such as Prometheus to Vantage")),(0,o.kt)("p",null,"To request further features, please open an issue on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vantage-sh/terraform-aws-vantage-integration"},"Github")," or us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh"),"."),(0,o.kt)("h3",{id:"connecting-by-manually-creating-an-iam-role"},"Connecting by Manually Creating an IAM Role"),(0,o.kt)("p",null,"If you would like to create IAM Roles manually or use another tool to manage your infrastructure you can create the necessary cross account role. During onboarding, instead of following the Cloudformation process, you can click on the IAM Role option and you will be presented with a Trust Relationship and an Inline Policy that are required for the role. After creating the role, return to the onboarding page to submit the ARN of the created role to complete the connection."),(0,o.kt)("h3",{id:"aws-data-ingestion-delay"},"AWS Data Ingestion Delay"),(0,o.kt)("p",null,"As of June 2022, Vantage now creates both an IAM Role as well as a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cur/latest/userguide/cur-create.html"},"cost and usage report")," integration through the same provided CloudFormation template and terraform file. While an IAM Role is created within a minute and historical data can be populated nearly immediately, it can take AWS around 6 or 7 hours to deliver the first cost and usage report to Vantage. As a result, only partial data will be present until this first cost and usage report is received."),(0,o.kt)("p",null,"This will impact a few things in the Vantage console."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/active_resources"},"Active Resources")," will only show hourly and monthly ",(0,o.kt)("em",{parentName:"li"},"rates")," initially. When the first cost and usage report is received, you can see actual accrued costs per resource broken down by cost category and subcategory."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cost_reports"},"Cost Reports"),' will show line-item data per service initially but will not be able to show "costs by resource" until the first cost and usage report is received.'),(0,o.kt)("li",{parentName:"ul"},"Both ",(0,o.kt)("a",{parentName:"li",href:"/autopilot/"},"Autopilot")," and ",(0,o.kt)("a",{parentName:"li",href:"/savings_planner/"},"Savings Planner")," are unavailable until this first cost and usage report is received.")),(0,o.kt)("p",null,"Once Vantage receives its first cost and usage report, this functionality will automatically be made available and Vantage will send you an email letting you know. Ultimately this is a limitation imposed by AWS and we need to wait for them to deliver this data."))}m.isMDXComponent=!0}}]);