"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[1009],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return r?a.createElement(f,s(s({ref:t},u),{},{components:r})):a.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9379:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={},s="Terraform",i={unversionedId:"terraform",id:"terraform",title:"Terraform",description:"Vantage offers a Terraform provider for making it easy to get up and running with Vantage. The Vantage Terraform provider allows registered users across all Vantage tiers to create the primitives needed to broker a connection with AWS -- which is essentially creating a Cross Account IAM Role and the creation of a Cost and Usage Report. The example from the Terraform Registry docs shows how to create a cost report for AWS from within Terraform.",source:"@site/docs/terraform.md",sourceDirName:".",slug:"/terraform",permalink:"/terraform",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/terraform.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Self-Service SSO",permalink:"/sso"},next:{title:"Terraform Cloud",permalink:"/terraform_cloud_integration"}},l={},p=[{value:"Setup and Connection",id:"setup-and-connection",level:2},{value:"Vantage Resources",id:"vantage-resources",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Future Primitive Support",id:"future-primitive-support",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"terraform"},"Terraform"),(0,n.kt)("p",null,"Vantage offers a ",(0,n.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/vantage-sh/vantage/latest"},"Terraform provider")," for making it easy to get up and running with Vantage. The Vantage Terraform provider allows registered users across all Vantage tiers to create the primitives needed to broker a connection with AWS -- which is essentially creating a Cross Account IAM Role and the creation of a Cost and Usage Report. The example from the ",(0,n.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs"},"Terraform Registry docs")," shows how to create a ",(0,n.kt)("a",{parentName:"p",href:"/cost_reports"},"cost report")," for AWS from within Terraform."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'terraform {\n  required_providers {\n    vantage = {\n      source = "vantage-sh/vantage"\n    }\n  }\n}\n\nprovider "vantage" {\n  api_token = var.api_token\n}\n\nresource "vantage_folder" "aws" {\n  title = "AWS Costs"\n}\n\nresource "vantage_cost_report" "aws" {\n  folder_token = vantage_folder.aws.token\n  filter       = "costs.provider = \'aws\'"\n  title        = "AWS Costs"\n}\n')),(0,n.kt)("p",null,"Using the Terraform provider like this makes it possible to fully automate and manage Vantage from within your existing Terraform codebase. This allows companies with Infrastructure as Code practices to setup, create, and sync their cloud with Vantage so that cost reports and other Vantage resources such as saved filters are automatically provisioned."),(0,n.kt)("h2",{id:"setup-and-connection"},"Setup and Connection"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest"},"Vantage Integrations Module")," to link your AWS and Vantage accounts. Below is an example of adding a member account without a CUR integration. Additional documentation can be found on the ",(0,n.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest"},"Terraform Registry"),"."),(0,n.kt)("p",null,'This results in the creation of an IAM Role which Vantage can "assume" to ingest cost and resource metadata to display within the Vantage console.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'provider "aws" {\n  region = "us-east-1"\n  assume_role {\n    role_arn = "arn:aws:iam::123456789012:role/admin-:ew\n    role"\n  }\n}\n\nmodule "vantage-integration" {\n  source  = "vantage-sh/vantage-integration/aws"\n}\n')),(0,n.kt)("h2",{id:"vantage-resources"},"Vantage Resources"),(0,n.kt)("p",null,"The Terraform provider allows the automation of Vantage resources such as cost reports via the ",(0,n.kt)("a",{parentName:"p",href:"https://vantage.readme.io/v2.0/reference/createcostreport"},"Vantage Write API")," which the Terraform provider ultimately is running through. Filters can be created and automated through the ",(0,n.kt)("a",{parentName:"p",href:"/vql"},"Vantage Query Language (VQL)"),", a SQL-like language for querying cloud cost and usage data."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cost_reports"},"Cost Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cost_reports#folders"},"Folders")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cost_reports#saved-filters"},"Saved Filters")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cost_reports#dashboards"},"Dashboards"))),(0,n.kt)("p",null,"These capabilities help engineering teams automate cost reporting in Vantage through some of the following use cases:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Build cost reports for hundreds of teams stored in another source of truth (database, Github, etc.)"),(0,n.kt)("li",{parentName:"ul"},"Integrate thousands of AWS accounts"),(0,n.kt)("li",{parentName:"ul"},"Update filters as resource names or tags change"),(0,n.kt)("li",{parentName:"ul"},"Add new reports to team dashboards when new services are deployed")),(0,n.kt)("h2",{id:"example-usage"},"Example Usage"),(0,n.kt)("p",null,"Here we will create a filter, report, and folder for tracking database costs. First, we will establish a saved filter with the output from an aws_db_instance resource which would be present in the Terraform."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'resource "aws_db_instance" "rds" {\n  name = "primary-database"\n}\nresource "vantage_saved_filter" "rds" {\n  title  = "${var.environment}-rds-costs"\n  filter = "costs.provider=\'aws\' AND costs.resource_id = \'${aws_db_instance.core-rds[0].arn}\' AND costs.service = \'Amazon Relational Database Service\'"\n}\n')),(0,n.kt)("p",null,"Then, we can use the saved filter in a cost report. We\u2019ll also create a folder to keep the report organized."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'resource "vantage_folder" "rds" {\n  title = "RDS Costs"\n}\n\nresource "vantage_cost_report" "rds_costs" {\n  folder_token        = vantage_folder.rds.token\n  saved_filter_tokens = [vantage_saved_filter.rds.token]\n  title               = "RDS Costs"\n}\n')),(0,n.kt)("p",null,"In this manner, initial setup, deployments, and infrastructure changes are synced to Vantage. Further examples can be found in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/vantage-sh/terraform-provider-vantage/tree/main/examples"},"terraform-provider-vantage Github repository"),"."),(0,n.kt)("h2",{id:"future-primitive-support"},"Future Primitive Support"),(0,n.kt)("p",null,"Vantage is in process of expanding the ",(0,n.kt)("a",{parentName:"p",href:"https://vantage.readme.io/v2.0/reference/createcostreport"},"API")," to support all resources within vantage. The list of primitives that the provider will ultimately support is as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/segments"},"Segments")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/budgets"},"Budgets")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/per_unit_costs#importing-business-metrics"},"Business Metrics"))),(0,n.kt)("p",null,"These capabilities will expand the automation capabilities of Vantage through some of the following use cases:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Push company metrics to Vantage"),(0,n.kt)("li",{parentName:"ul"},"Sync and update budgets")),(0,n.kt)("p",null,"To request further features, please open an issue on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/vantage-sh/terraform-aws-vantage-integration"},"Github")," or email us at ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh"),"."))}m.isMDXComponent=!0}}]);