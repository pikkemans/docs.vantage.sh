"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?o.createElement(m,s(s({ref:t},u),{},{components:n})):o.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:a,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={},s="Autopilot",r={unversionedId:"autopilot",id:"autopilot",title:"Autopilot",description:"Autopilot screens",source:"@site/docs/autopilot.md",sourceDirName:".",slug:"/autopilot",permalink:"/autopilot",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/autopilot.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Microsoft Teams",permalink:"/microsoft_teams_integration"},next:{title:"Budgets",permalink:"/budgets"}},l={},c=[{value:"Autopilot Pricing",id:"autopilot-pricing",level:2},{value:"Autopilot Permissions",id:"autopilot-permissions",level:2},{value:"How Autopilot Works",id:"how-autopilot-works",level:2},{value:"I have existing AWS Savings Plans and Reserved Instances - will Autopilot account for these?",id:"i-have-existing-aws-savings-plans-and-reserved-instances---will-autopilot-account-for-these",level:3},{value:"How will Autopilot affect my AWS bill?",id:"how-will-autopilot-affect-my-aws-bill",level:3},{value:"How do I register as a seller in the AWS Reserved Instance Marketplace?",id:"how-do-i-register-as-a-seller-in-the-aws-reserved-instance-marketplace",level:3},{value:"Are there any timelines I need to be aware of?",id:"are-there-any-timelines-i-need-to-be-aware-of",level:3},{value:"Why did Autopilot purchase instance sizes that are different from what I am using?",id:"why-did-autopilot-purchase-instance-sizes-that-are-different-from-what-i-am-using",level:3},{value:"Autopilot Controls",id:"autopilot-controls",level:2},{value:"Autopilot Controls Graphs",id:"autopilot-controls-graphs",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"autopilot"},"Autopilot"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Autopilot screens",src:n(8654).Z,width:"1270",height:"760"})),(0,a.kt)("p",null,"Autopilot is a managed service for AWS customers that automatically applies Reserved Instances on your behalf. It works by regularly evaluating your compute workloads and procuring ",(0,a.kt)("strong",{parentName:"p"},"no upfront")," Reserved Instances on your behalf to ensure that you're always maximizing your savings from a commitment perspective. Autopilot charges a fee of 5% of the savings found to align interests with you to maximize savings. There is no fee for Autopilot recommendations on RDS, ElastiCache, Redshift and OpenSearch."),(0,a.kt)("p",null,"In the event that your compute workloads decrease, Autopilot will automatically list to sell out of Reserved Instances on the EC2 Reserved Instance Marketplace to ensure that you're not overcommitted. Please note that there is a minimum 30 day hold time imposed by AWS for all reserved instances so you should only enable Autopilot if you don't expect material downward changes in your infrastructure within 30 days. You can further control what actions Autopilot takes with ",(0,a.kt)("a",{parentName:"p",href:"#autopilot-controls"},"Autopilot Controls"),"."),(0,a.kt)("p",null,"Depending on your mix of EC2 instances used, Autopilot can reduce your compute costs by over 60% and make recommendations on RDS, ElastiCache, Redshift, and OpenSearch which reduce your costs by up to 72%."),(0,a.kt)("admonition",{title:"AISPL Exclusion",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If your account is registered with Amazon Internet Services Private Limited (AISPL), you will be unable to use Autopilot due to AWS Marketplace limitations. ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html"},"Per AWS"),', "Amazon Internet Services Private Limited (AISPL) customers can\'t sell Reserved Instances in the Reserved Instance Marketplace even if they have a US bank account."')),(0,a.kt)("h2",{id:"autopilot-pricing"},"Autopilot Pricing"),(0,a.kt)("p",null,"Autopilot only charges 5% of the ",(0,a.kt)("em",{parentName:"p"},"savings found"),". This means that in the event that Autopilot doesn't find you any savings, then its free to you to use."),(0,a.kt)("p",null,"As example in the event that your EC2 bill is $10,000 per month and Autopilot buys you enough reserved instances to save you $3,000 per month, the corresponding Autopilot fee will be $150 so your net savings is $2,850 per month."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You won't be charged for existing Reserved Instances or Savings Plans."),(0,a.kt)("p",{parentName:"admonition"},"Autopilot will respect your existing Savings Plans and Reserved Instances and you will not pay any Autopilot fees for existing commitments.")),(0,a.kt)("p",null,"For RDS, ElastiCache, Redshift and OpenSearch Autopilot uses an approval-based workflow which calculates how many reserved instances to buy and links you to the AWS console to make the purchase. There is ",(0,a.kt)("strong",{parentName:"p"},"no fee")," for Autopilot recommendations on RDS, ElastiCache, Redshift and OpenSearch."),(0,a.kt)("h2",{id:"autopilot-permissions"},"Autopilot Permissions"),(0,a.kt)("p",null,"The full set of IAM permissions for Autopilot are listed below. To summarize the scope of the permissions needed for Autopilot to run, we require the ability to purchase reserved instances for EC2, ElasticSearch, Redshift and RDS. We also require permission to view service quotas to understand what commitment levels we can make based off of the limits in your account."),(0,a.kt)("p",null,"Autopilot can not and will never attempt to augment production workloads, read from databases or access network data. Autopilot purely is making financial commitments on your behalf to help save you money."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Action": [\n                "ec2:AcceptReservedInstancesExchangeQuote",\n                "ec2:CancelReservedInstancesListing",\n                "ec2:CreateReservedInstancesListing",\n                "ec2:DeleteQueuedReservedInstances",\n                "ec2:ModifyReservedInstances",\n                "ec2:PurchaseReservedInstancesOffering",\n                "rds:PurchaseReservedDBInstancesOffering",\n                "elasticache:PurchaseReservedCacheNodesOffering",\n                "es:PurchaseReservedInstanceOffering",\n                "redshift:PurchaseReservedNodeOffering",\n                "redshift:AcceptReservedNodeExchange",\n                "redshift:GetReservedNodeExchangeConfigurationOptions",\n                "redshift:GetReservedNodeExchangeOfferings",\n                "servicequotas:Get*",\n                "servicequotas:List*",\n                "servicequotas:RequestServiceQuotaIncrease",\n                "support:*"\n            ],\n            "Resource": "*",\n            "Effect": "Allow"\n        }\n    ]\n}\n')),(0,a.kt)("h2",{id:"how-autopilot-works"},"How Autopilot Works"),(0,a.kt)("p",null,"Autopilot works by ingesting and analyzing Cost and Usage Report data. Vantage will structure your compute workloads by instance hour of each respective compute class. A compute class is defined as EC2 instance usage structured by instance type (i.e. t3.xlarge, r5.large, etc), region (us-east-1, us-west-2, etc) and platform (Linux, Windows, etc) tracked hourly."),(0,a.kt)("p",null,"After structuring compute data for each compute class, Autopilot will look at existing coverage of existing AWS Savings Plans and Reserved Instances and determine what remaining on-demand compute usage is available to optimize on a per compute class basis. Where Autopilot believes it can find you savings, it will begin purchasing corresponding reserved instances. Where Autopilot sees that you're overcommitted on a particular compute class, it will look to sell out of corresponding reserved instances. Autopilot will only ever sell out of reserved instances Autopilot has purchased and will not attempt to sell out of reserved instances that you've already purchased in your account."),(0,a.kt)("p",null,'For each compute category, Autopilot is also looking at "peaks and valleys" of usage to ensure it avoids overcommitment. In some cases where there are very spikey workloads, a target coverage rates for reserved instances may be very low to achieve cost savings without the concern of overcommitment. For more normalized workloads, a target coverage rate will be on the higher side as there less concern over overcommitment.'),(0,a.kt)("h3",{id:"i-have-existing-aws-savings-plans-and-reserved-instances---will-autopilot-account-for-these"},"I have existing AWS Savings Plans and Reserved Instances - will Autopilot account for these?"),(0,a.kt)("p",null,"Yes. Autopilot will account for your existing AWS Savings Plans and Reserved Instances. You will not be charged for existing AWS Savings Plans or Reserved Instances. Even if you feel that you have good coverage with existing AWS Savings Plans and Reserved Instances, you should consider enabling Autopilot as an insurance policy in the event that they expire. Autopilot will automatically detect that your coverage is slipping if anything were to expire and purchase additional Reserved Instances to account for things accordingly."),(0,a.kt)("h3",{id:"how-will-autopilot-affect-my-aws-bill"},"How will Autopilot affect my AWS bill?"),(0,a.kt)("p",null,"Because Autopilot purchases ",(0,a.kt)("em",{parentName:"p"},"only")," ",(0,a.kt)("strong",{parentName:"p"},"no-upfront")," commitments, there will not be any purchase or transaction that is reflected on your bill when the RIs are purchased. Additionally, no funds will be exchanged when Autopilot sells the commitments. This means that despite the AWS requirement to add a bank account for selling in the RI marketplace, no money is moving in and out of the account. The only net impact on your bill is a reduction in compute hourly rates, assuming Autopilot has found savings and purchased RIs."),(0,a.kt)("h3",{id:"how-do-i-register-as-a-seller-in-the-aws-reserved-instance-marketplace"},"How do I register as a seller in the AWS Reserved Instance Marketplace?"),(0,a.kt)("p",null,"Autopilot requires that you register as a seller in the AWS reserved instance marketplace before any actions are taken. This is what enables Autopilot to sell reserved instances you are no longer using. You can follow these ",(0,a.kt)("a",{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html#ri-market-seller-profile"},"instructions")," to complete the seller registration process. As part of this process filling out tax information is optional, however Autopilot requires you complete this step in order to ensure your reserved instances can be sold in the marketplace."),(0,a.kt)("h3",{id:"are-there-any-timelines-i-need-to-be-aware-of"},"Are there any timelines I need to be aware of?"),(0,a.kt)("p",null,"AWS imposes a minimum 30-day hold time for all Reserved Instances before you can list them for sale on the AWS EC2 Reserved Instance marketplace. As a result, you shouldn't enable Autopilot if you expect significant ",(0,a.kt)("em",{parentName:"p"},"downward")," changes in your infrastructure within the first 30 days of enabling Autopilot as they can't technically be listed for sale. If you expect ",(0,a.kt)("em",{parentName:"p"},"growth"),", there are no concerns around this limitation."),(0,a.kt)("h3",{id:"why-did-autopilot-purchase-instance-sizes-that-are-different-from-what-i-am-using"},"Why did Autopilot purchase instance sizes that are different from what I am using?"),(0,a.kt)("p",null,"Autopilot purchases RIs in denormalized units that are applicable to any size of instance in the same family, which you can see if you reference the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/apply_ri.html"},"AWS documentation"),". In other words, if you change sizes within the same instance family, the reservations still apply!"),(0,a.kt)("h2",{id:"autopilot-controls"},"Autopilot Controls"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Autopilot Controls",src:n(2680).Z,width:"1302",height:"608"})),(0,a.kt)("p",null,"You can see what actions Autopilot may take or is taking under ",(0,a.kt)("a",{parentName:"p",href:"https://console.vantage.sh/financial_planning/autopilot/settings"},"Settings")," in the Autopilot page in the console. Here, you can control Autopilot on a per-compute category basis, disabling it and enabling it as needed."),(0,a.kt)("p",null,"A compute category is a Vantage primitive that is a representation of your normalized EC2 workloads that consists of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'An instance type family such as "m5a".'),(0,a.kt)("li",{parentName:"ul"},"A region."),(0,a.kt)("li",{parentName:"ul"},"A platform (Windows, Linux, RHEL, Windows SQL Server, etc..)")),(0,a.kt)("p",null,"Each compute category has usage tracked hourly and grouped by the following compute types. Note that Windows, SUSE and RedHat Reserved Instances are targeted at a specific instance type, e.g. m5.2xlarge, instead of the entire family."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Existing customer usage covered by existing Reserved Instances"),(0,a.kt)("li",{parentName:"ul"},"Existing customer usage covered by existing Savings Plans"),(0,a.kt)("li",{parentName:"ul"},"Existing customer usage covered by credits"),(0,a.kt)("li",{parentName:"ul"},"On-demand usage")),(0,a.kt)("p",null,"Each compute category will have a target commitment level shown with the ability to disable the category completely. If you disable a compute category after Autopilot has already made purchases for it, Autopilot will immediately begin listing the reserved instances for sale."),(0,a.kt)("p",null,"Compute categories can be saved prior to enabling Autopilot and adjusted after enabling Autopilot as well. For example, you may decide initially that you do not want Autopilot to manage purchasing and selling RIs for a new service. After the service sees increasing usage, you may then decide to turn on Autopilot for it."),(0,a.kt)("p",null,"Autopilot Controls can be changed as often as you\u2019d like. That being said, we generally recommend to do one round of adjusting settings prior to enabling Autopilot and then adjusting things as you see fit."),(0,a.kt)("p",null,"Once a setting is changed, the changes take effect between 24 and 48 hours. Autopilot purposefully will impose a minimum 24 hour delay before making any changes from Autopilot controls. Please note that because of a 30 day minimum holding period made by AWS with reserved instances, there may be certain cases where even adjusting controls could take some time to be applied."),(0,a.kt)("h3",{id:"autopilot-controls-graphs"},"Autopilot Controls Graphs"),(0,a.kt)("p",null,"The Y-axis for Autopilot controls graphs can represent different things depending on the service you're looking at. There are two classes of units represented on the Y-axis that are listed below with their corresponding explanations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For ",(0,a.kt)("strong",{parentName:"p"},"EC2")," and ",(0,a.kt)("strong",{parentName:"p"},"RDS"),", the Y-axis unit is expressed in normalized instance units per hour for each compute category. The rationale for this is that EC2 and RDS have the benefit of flexible instance families where a reserved instance in the smallest possible unit can add up to have multiple cover a single larger unit in that family. As an example, if you have a single m5.large and an m5.2xlarge EC2 instance, a single reserved instance unit can cover one m5.large or two units can cover a m5.2large. In general, we recommend covering the category with the smallest unit possible so you as an organization have coverage from an RI perspective if you scale down in instance family size. Whereas if you bought a m5.2xlarge reserved instance unit, that wouldn't cover any corresponding smaller m5.large EC2 instances. So you have the benefit to scale down in your instance type sizes per family without the risk of losing coverage.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For ",(0,a.kt)("strong",{parentName:"p"},"Redshift"),", ",(0,a.kt)("strong",{parentName:"p"},"OpenSearch"),", and ",(0,a.kt)("strong",{parentName:"p"},"ElastiCache"),", the Y-axis is expressed in number of instances. Unlike the above example, there isn't flexibility on these classes so this is a more straight-forward scenario where the units represented are the exact number of instances you should procure."))))}d.isMDXComponent=!0},8654:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/autopilot-autopilot-recs-56765ed4ecd5247e1f685d00c328bdcd.png"},2680:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/autopilot_controls-fd3720a39312340d1b443a84b6094f2c.png"}}]);