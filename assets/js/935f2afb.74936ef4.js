"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"someSidebar":[{"type":"category","label":"Get Started","items":[{"type":"link","label":"Introduction","href":"/","docId":"index"},{"type":"link","label":"Connect Providers","href":"/getting_started","docId":"getting_started"},{"type":"category","label":"Onboarding","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Team Accountability","href":"/team_accountability","docId":"team_accountability"},{"type":"link","label":"Executive Reporting","href":"/executive_reporting","docId":"executive_reporting"},{"type":"link","label":"Find Hidden Costs","href":"/hidden_costs","docId":"hidden_costs"}]},{"type":"link","label":"Vantage Account","href":"/vantage_account","docId":"vantage_account"}],"collapsed":true,"collapsible":true},{"type":"category","collapsible":true,"collapsed":false,"label":"Integrations","items":[{"type":"category","label":"AWS","items":[{"type":"link","label":"Setup AWS","href":"/connecting_aws","docId":"connecting_aws"},{"type":"link","label":"AWS Permissions","href":"/permissions_aws","docId":"permissions_aws"},{"type":"link","label":"Syncing","href":"/syncing","docId":"syncing"},{"type":"link","label":"AWS Services & Regions","href":"/supported_services","docId":"supported_services"},{"type":"link","label":"Security","href":"/security","docId":"security"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Azure","href":"/connecting_azure","docId":"connecting_azure"},{"type":"category","label":"Google Cloud","items":[{"type":"link","label":"Setup Google Cloud","href":"/connecting_gcp","docId":"connecting_gcp"},{"type":"link","label":"GCP Permissions","href":"/permissions_gcp","docId":"permissions_gcp"},{"type":"link","label":"GCP Billing Exports","href":"/enabling_gcp_billing_export","docId":"enabling_gcp_billing_export"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Kubernetes","items":[{"type":"link","label":"Setup Kubernetes","href":"/connecting_kubernetes","docId":"connecting_kubernetes"},{"type":"link","label":"Kubernetes (OpenCost)","href":"/opencost","docId":"opencost"},{"type":"link","label":"Kubernetes (Container Insights)","href":"/kubernetes_container_insights","docId":"kubernetes_container_insights"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Datadog","href":"/connecting_datadog","docId":"connecting_datadog"},{"type":"link","label":"New Relic","href":"/connecting_new_relic","docId":"connecting_new_relic"},{"type":"link","label":"MongoDB Atlas","href":"/connecting_mongodb-atlas","docId":"connecting_mongodb-atlas"},{"type":"category","label":"Snowflake","items":[{"type":"link","label":"Setup Snowflake","href":"/connecting_snowflake","docId":"connecting_snowflake"},{"type":"link","label":"Snowflake Costs by Query","href":"/snowflake_cost_by_query","docId":"snowflake_cost_by_query"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Databricks","href":"/connecting_databricks","docId":"connecting_databricks"},{"type":"link","label":"Fastly","href":"/connecting_fastly","docId":"connecting_fastly"},{"type":"link","label":"OpenAI","href":"/connecting_open_ai","docId":"connecting_open_ai"}]},{"type":"category","collapsible":true,"collapsed":false,"label":"Features","items":[{"type":"link","label":"Overview","href":"/overview","docId":"overview"},{"type":"category","label":"Cost Reporting","items":[{"type":"link","label":"Cost Reports","href":"/cost_reports","docId":"cost_reports"},{"type":"link","label":"Forecasting","href":"/forecasting","docId":"forecasting"},{"type":"link","label":"Segments","href":"/segments","docId":"segments"},{"type":"link","label":"Per Unit Costs","href":"/per_unit_costs","docId":"per_unit_costs"},{"type":"link","label":"Anomaly Detection and Alerts","href":"/cost_anomaly_alerts","docId":"cost_anomaly_alerts"},{"type":"link","label":"Budgets","href":"/budgets","docId":"budgets"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Optimization","items":[{"type":"link","label":"Autopilot","href":"/autopilot","docId":"autopilot"},{"type":"link","label":"Savings Planner","href":"/savings_planner","docId":"savings_planner"},{"type":"link","label":"Active Resources","href":"/active_resources","docId":"active_resources"},{"type":"link","label":"Metrics","href":"/metrics","docId":"metrics"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Notifications","items":[{"type":"link","label":"Cost Report Notifications","href":"/reports","docId":"reports"},{"type":"link","label":"Slack","href":"/slack_integration","docId":"slack_integration"},{"type":"link","label":"Microsoft Teams","href":"/microsoft_teams_integration","docId":"microsoft_teams_integration"},{"type":"link","label":"Terraform Cloud","href":"/terraform_cloud_integration","docId":"terraform_cloud_integration"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Workspaces","href":"/workspaces","docId":"workspaces"}]}]},"docs":{"active_resources":{"id":"active_resources","title":"Active Resources","description":"Whenever you connect a Cross Account IAM Role for AWS integrations, Vantage will begin profiling via List/Describe service APIs for active resources within your AWS account. This will provide you with an \\"active resource\\" inventory that allows you to see all running resources within your AWS account, their run-rates and accrued costs. Below is a list of what a full inventory page looks like for Active Resources:","sidebar":"someSidebar"},"autopilot":{"id":"autopilot","title":"Autopilot","description":"Autopilot screens","sidebar":"someSidebar"},"budgets":{"id":"budgets","title":"Budgets","description":"Vantage users can create and assign a Budget to a Cost Report. Once a budget is assigned, it is easy to see how costs are trending for a particular service, business unit or team compared to their prescribed budget.","sidebar":"someSidebar"},"connecting_aws":{"id":"connecting_aws","title":"Setup AWS","description":"Connecting Your AWS Account","sidebar":"someSidebar"},"connecting_azure":{"id":"connecting_azure","title":"Azure","description":"Create a free Vantage account then follow the steps below to integrate Azure costs.","sidebar":"someSidebar"},"connecting_databricks":{"id":"connecting_databricks","title":"Databricks","description":"Create a free Vantage account then follow the steps below to integrate Databricks costs.","sidebar":"someSidebar"},"connecting_datadog":{"id":"connecting_datadog","title":"Datadog","description":"Create a free Vantage account then follow the steps below to integrate Datadog costs.","sidebar":"someSidebar"},"connecting_fastly":{"id":"connecting_fastly","title":"Fastly","description":"Connecting Your Fastly Account","sidebar":"someSidebar"},"connecting_gcp":{"id":"connecting_gcp","title":"Setup Google Cloud","description":"Connecting Your GCP Billing Account","sidebar":"someSidebar"},"connecting_kubernetes":{"id":"connecting_kubernetes","title":"Setup Kubernetes","description":"Vantage supports breaking down the cost to run a Kubernetes cluster by service, namespace and label. Vantage supports any type of Kubernetes deployment. This allows teams to easily understand how their shared clusters are being utilized and how to account for cluster costs across teams and applications.","sidebar":"someSidebar"},"connecting_mongodb-atlas":{"id":"connecting_mongodb-atlas","title":"MongoDB Atlas","description":"Create a free Vantage account then follow the steps below to integrate MongoDB Atlas costs.","sidebar":"someSidebar"},"connecting_new_relic":{"id":"connecting_new_relic","title":"New Relic","description":"Create a free Vantage account then follow the steps below to integrate New Relic costs.","sidebar":"someSidebar"},"connecting_open_ai":{"id":"connecting_open_ai","title":"OpenAI","description":"Vantage has the ability to visualize, filter on and forecast your OpenAI costs. All you\'ll need to do is generate an OpenAI API Key and Vantage will ingest your cost and usage data from OpenAI accordingly. Before getting started, ensure you have a free Vantage account then follow the steps below to integrate OpenAI costs.","sidebar":"someSidebar"},"connecting_snowflake":{"id":"connecting_snowflake","title":"Setup Snowflake","description":"Create a free Vantage account then follow the steps below to integrate Snowflake costs.","sidebar":"someSidebar"},"cost_anomaly_alerts":{"id":"cost_anomaly_alerts","title":"Anomaly Detection and Alerts","description":"Cost Anomaly Alert","sidebar":"someSidebar"},"cost_reports":{"id":"cost_reports","title":"Cost Reports","description":"Cost Reports give you the ability to see all accrued costs that match certain conditions. By default, Vantage provides you with a Cost Report named \\"All Resources\\" that will show you all costs across all AWS member accounts, regions, services and tags. You can create as many Cost Reports as you\'d like to filter your costs by any of the aforementioned dimensions. As you create cost reports, they will show up in your Overview and you\'ll have forecasts generated automatically. For example, many customers typically setup one Cost Report per AWS tag that their team has defined to see costs for certain components of their application.","sidebar":"someSidebar"},"enabling_gcp_billing_export":{"id":"enabling_gcp_billing_export","title":"GCP Billing Exports","description":"This is streamlined version of Google Cloud\'s official documentation","sidebar":"someSidebar"},"executive_reporting":{"id":"executive_reporting","title":"Executive Reporting","description":"In many cases there are requirements from company leadership to reduce cloud spend or strategic initiatives on cost. Vantage provides a suite of tools built for enterprises to understand where their cloud spend is going, how it is impacting their business, and how to report it for decision making purposes.","sidebar":"someSidebar"},"forecasting":{"id":"forecasting","title":"Forecasting","description":"For every Cost Report, Vantage will produce a forecast of where your costs are expected to be by the end of the current month. These forecasts are based off of your account\'s actual cost data and produced from a Vantage-developed machine learning model that is trained anonymously from all Vantage customers to be as accurate as possible.","sidebar":"someSidebar"},"getting_started":{"id":"getting_started","title":"Connect Providers","description":"To get started using Vantage to explore your cloud infrastructure costs, you\'ll want to create a data integration between at least one of your providers and Vantage.","sidebar":"someSidebar"},"hidden_costs":{"id":"hidden_costs","title":"Find Hidden Costs","description":"With team accountability and executive reporting in place, there are usually opportunities to turn off or optimize resources which are unexpectedly driving costs. Vantage has numerous \\"cost debugging\\" features to help you drill into where your spend is going.","sidebar":"someSidebar"},"index":{"id":"index","title":"Introduction","description":"Despite being a hosted Software-as-a-Service, we devote a portion of our site to documentation to explain how certain features and systems work. If you believe something is missing, please contact us at support@vantage.sh and we are happy to update this site.","sidebar":"someSidebar"},"kubernetes_container_insights":{"id":"kubernetes_container_insights","title":"Kubernetes (Container Insights)","description":"Vantage follows the official AWS documentation on securely sending CloudWatch logs to another AWS account to ingest Kubernetes costs through Container Insights. The steps below are for users who choose to use Container Insights, instead of the recommended OpenCost integration.","sidebar":"someSidebar"},"metrics":{"id":"metrics","title":"Metrics","description":"Vantage attempts to give you high-fidelity charts for CloudWatch metrics on each resource page. On resources that support CloudWatch metrics there will be a tab entitled \\"Metrics\\" that you can click on and see metrics in-line on like below:","sidebar":"someSidebar"},"microsoft_teams_integration":{"id":"microsoft_teams_integration","title":"Microsoft Teams","description":"Vantage integrates with Microsoft Teams. From the Cost Report Notifications page, customers can associate their Microsoft Teams account with their Vantage account. Upon completing that integration, users can adjust cost report notifications to be delivered to a specific public or private channel in Microsoft Teams. Vantage users can edit existing cost report notifications or create new ones where they\'ll be able to choose any number of Microsoft Teams channels from their team\'s account.","sidebar":"someSidebar"},"opencost":{"id":"opencost","title":"Kubernetes (OpenCost)","description":"OpenCost is an emerging specification for Kubernetes costs. Vantage can ingest costs via OpenCost and Prometheus Remote Write and display them in the console. Any environments supported by OpenCost, including AWS, GCP, Azure, and on-prem, are supported by Vantage.","sidebar":"someSidebar"},"overview":{"id":"overview","title":"Overview","description":"After you connect your Google Cloud account, create an IAM Role for your AWS account, or create a Service Principal for your Azure account Vantage will automatically begin ingesting billing information for the respective account. Once that is complete, you\'ll be directed to the main console experience within Vantage. The default landing page in the Vantage console is the \'Overview\' page, which you can see an example of above.","sidebar":"someSidebar"},"per_unit_costs":{"id":"per_unit_costs","title":"Per Unit Costs","description":"Unit Costs are a visualization on Cost Reports which display cloud infrastructure costs on a per-unit basis. A unit can be any metric that your business tracks such as users, requests, transactions, customers, vendors, and so on. Unit costs are a fantastic tool for helping analyze cost of goods sold (COGS). By importing these Business Metrics into Vantage, you can add them to Cost Reports to track things like cost per daily active user, COGS per customer, cost per million API requests, and more.","sidebar":"someSidebar"},"permissions_aws":{"id":"permissions_aws","title":"AWS Permissions","description":"Vantage requests certain IAM permissions to interact with your AWS account. All permissions are ReadOnly be default and the list of permissions was generated by looking at the AWS-managed IAM policy of ReadOnlyAccess and removing a number of permissions from that. The list of permissions can be viewed on our provided CloudFormation Stack file.","sidebar":"someSidebar"},"permissions_gcp":{"id":"permissions_gcp","title":"GCP Permissions","description":"Vantage requests extremely basic and limited permissions for GCP unlike our deeper integration for AWS accounts. The generated Google Service Account only needs to be granted access to the specific Big Query dataset that contains your billing data in a speficific project in your account. While we have broader plans for deeper integrations for GCP in time, this is the only permission required.","sidebar":"someSidebar"},"reports":{"id":"reports","title":"Cost Report Notifications","description":"Vantage has the concept of Cost Report Notifications which allow you to receive either daily, weekly or monthly reports for one or more Cost Reports delivered either. Customers may choose either a Slack integration or a Microsoft Teams integration but not both. Below are the currently supported methods for receiving a Cost Report Notification:","sidebar":"someSidebar"},"savings_planner":{"id":"savings_planner","title":"Savings Planner","description":"Savings Planner is a forecasting and modeling tool that allows you to see what your on-demand versus committed spend is within your organization and see what the impact would be for purchasing different types of Savings Plans in your account. Vantage will process Cost and Usage Report data to analyze every single instance hour running in your account and has built up a pricing database with millions of different price permutations to calculate your exact savings rate across different EC2 instance types, Lambda functions and Fargate Services.","sidebar":"someSidebar"},"security":{"id":"security","title":"Security","description":"As an infrastructure tool that requires access to your cloud provider we understand there may be questions, concerns and necessary clarification around our own infrastructure, processes and procedures. We as developers on Vantage are also customers of Vantage to more closely align our security concerns with those of our customers. Lastly, our team has worked at public cloud infrastructure providers including Amazon Web Services and DigitalOcean and are applying best practices learned at these providers to ensure security is handled as best it can.","sidebar":"someSidebar"},"segments":{"id":"segments","title":"Segments","description":"Example Cost Report","sidebar":"someSidebar"},"slack_integration":{"id":"slack_integration","title":"Slack","description":"Vantage users can add Vantage to their team\'s Slack account to get Cost Report Notifications in a specific channel in Slack. To add the integration to a private channel, first add the Vantage app with /invite @Vantage. Vantage users can edit existing cost report notifications or create new ones where they\'ll be able to choose any number of Slack channels from their team\'s account.","sidebar":"someSidebar"},"snowflake_cost_by_query":{"id":"snowflake_cost_by_query","title":"Snowflake Costs by Query","description":"Vantage calculates a weighted cost per query by breaking down the use of Snowflake compute credits. This allows users to easily identiy the most expensive queries.","sidebar":"someSidebar"},"supported_services":{"id":"supported_services","title":"AWS Services & Regions","description":"Supported Services","sidebar":"someSidebar"},"syncing":{"id":"syncing","title":"Syncing","description":"Automatic Syncing","sidebar":"someSidebar"},"team_accountability":{"id":"team_accountability","title":"Team Accountability","description":"Managing the cost of cloud services can be challenging, especially when multiple teams are involved. However, it is essential to ensure that each team is accountable for their cloud costs. By following these steps, you can hold your team accountable for cloud cost management using Vantage.","sidebar":"someSidebar"},"terraform_cloud_integration":{"id":"terraform_cloud_integration","title":"Terraform Cloud","description":"Vantage is an official HashiCorp partner. Vantage integrates with Terraform Cloud through the Run Tasks API. This allows your team to get visiblity on cloud costs as part of their existing workflows in two different ways:","sidebar":"someSidebar"},"vantage_account":{"id":"vantage_account","title":"Vantage Account","description":"Your account on the Vantage console is used to control your personal settings and API tokens. With the right permissions you can also control the people and workspaces in your Vantage account.","sidebar":"someSidebar"},"workspaces":{"id":"workspaces","title":"Workspaces","description":"Vantage allows you to connect multiple cloud infrastructure provider accounts to the same Vantage account. This allows you to see all of your costs within a single cloud provider, like AWS, or across multiple cloud providers (e.g. GCP + Azure).","sidebar":"someSidebar"}}}')}}]);