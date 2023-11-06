"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[9265],{9478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>w,frontMatter:()=>k,metadata:()=>d,toc:()=>g});var n=a(7462),l=a(7294),r=a(3905),s=a(4866),o=a(5162),i=a(7882);const m={color:"#9c25c7",display:"flex",justifyContent:"center",alignItems:"center"};const c=function(){return l.createElement("div",{style:m},l.createElement(i.Reu,{alt:"checkmark"}))},k={id:"rbac",title:"Role-Based Access Control (RBAC)",description:"This page provides an overview of advanced access controls and RBAC in the Vantage console.",keywords:["RBAC","Role-based access control"]},u="Role-Based Access Control (RBAC)",d={unversionedId:"rbac",id:"rbac",title:"Role-Based Access Control (RBAC)",description:"This page provides an overview of advanced access controls and RBAC in the Vantage console.",source:"@site/docs/rbac.md",sourceDirName:".",slug:"/rbac",permalink:"/rbac",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/rbac.md",tags:[],version:"current",frontMatter:{id:"rbac",title:"Role-Based Access Control (RBAC)",description:"This page provides an overview of advanced access controls and RBAC in the Vantage console.",keywords:["RBAC","Role-based access control"]},sidebar:"someSidebar",previous:{title:"Single Sign-On (SSO)",permalink:"/sso"},next:{title:"Workspaces",permalink:"/workspaces"}},p={},g=[{value:"Manage Account Access",id:"manage-account-access",level:2},{value:"Manage Team Access",id:"manage-team-access",level:2},{value:"Create or Delete Teams (Owners Only)",id:"create-or-delete-teams-owners-only",level:3},{value:"Manage a Team (Team Owners)",id:"manage-a-team-team-owners",level:3},{value:"Manage Resource Access",id:"manage-resource-access",level:2},{value:"Team-Only Resource Access",id:"team-only-resource-access",level:3},{value:"Settings Permissions",id:"settings-permissions",level:2},{value:"Financial Planning Permissions",id:"financial-planning-permissions",level:2}],h={toc:g},N="wrapper";function w(e){let{components:t,...a}=e;return(0,r.kt)(N,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"role-based-access-control-rbac"},"Role-Based Access Control (RBAC)"),(0,r.kt)("p",null,"Advanced role-based access controls are available within Vantage for Enterprise tier accounts. These controls facilitate fine-grained management of resource access. Team-based access determines the specific Cost Reporting resources \u2014 such as Cost Reports, Dashboards, or Folders \u2014 that a user can view and/or edit. "),(0,r.kt)("p",null,"By default, all users are members of the ",(0,r.kt)("strong",{parentName:"p"},"Everyone")," team. Owners have the ability to control which workspaces/resources the Everyone team can access. "),(0,r.kt)("p",null,"The Owner, Team Owner, Team Editor, and Team Viewer roles are described below.  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Owner"),(0,r.kt)("td",{parentName:"tr",align:null},"A global account owner who has full access to all items. This role can also manage teams, integrations, and workspaces within an account. Even if the Everyone team is removed from an item, the Owner will still be able to manage that item.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Team Owner"),(0,r.kt)("td",{parentName:"tr",align:null},"A Team Owner has full control over resources to which that team is granted access. Team Owners also have the ability to change which teams can access their team's resources. They can also manage members of their team.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Team Editor"),(0,r.kt)("td",{parentName:"tr",align:null},"A Team Editor has full control over resources to which that team is granted access; however, they cannot manage the members of the team.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Team Viewer"),(0,r.kt)("td",{parentName:"tr",align:null},"A Team Viewer has read-only access to all resources to which that team is granted access.")))),(0,r.kt)("h2",{id:"manage-account-access"},"Manage Account Access"),(0,r.kt)("p",null,"Owner is the only role that can invite users to and remove users from Vantage as well as change another user's role. "),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"add-user",label:"Add a New User",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",null,"From the top navigation, click ",(0,r.kt)("strong",null,"Settings"),"."),(0,r.kt)("li",null,"From the left navigation, under ",(0,r.kt)("strong",null,"Organization Settings"),", click ",(0,r.kt)("strong",null,"People"),"."),(0,r.kt)("li",null,"On the right, click ",(0,r.kt)("strong",null,"+ Invite"),"."),(0,r.kt)("li",null,"Enter the new user's email, then select their ",(0,r.kt)("strong",null,"Role")," and any ",(0,r.kt)("strong",null,"Teams"),"."),(0,r.kt)("li",null,"Click ",(0,r.kt)("strong",null,"Send Invitation"),"."))),(0,r.kt)(o.Z,{value:"change-user-role",label:"Change a User's Role",mdxType:"TabItem"},(0,r.kt)("p",null,"A user's role in the ",(0,r.kt)("strong",null,"Organization Settings")," is their role on the Everyone team."),(0,r.kt)("ol",null,(0,r.kt)("li",null,"From the top navigation, click ",(0,r.kt)("strong",null,"Settings"),"."),(0,r.kt)("li",null,"From the left navigation, under ",(0,r.kt)("strong",null,"Organization Settings"),", click ",(0,r.kt)("strong",null,"People"),"."),(0,r.kt)("li",null,"Hover over the user's row in the ",(0,r.kt)("strong",null,"People")," list, then click the ellipses (",(0,r.kt)("strong",null,"..."),")."),(0,r.kt)("li",null,"Click ",(0,r.kt)("strong",null,"Edit"),", then select the new user ",(0,r.kt)("strong",null,"Role"),"."),(0,r.kt)("li",null,"Click ",(0,r.kt)("strong",null,"Save Changes"),".")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"manage-team-access"},"Manage Team Access"),(0,r.kt)("h3",{id:"create-or-delete-teams-owners-only"},"Create or Delete Teams (Owners Only)"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"By default, all Vantage users are part of the Everyone team. Users ",(0,r.kt)("em",{parentName:"p"},"cannot")," be removed from this team.")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("img",{alt:"Team management window",width:"50%",src:"/img/team-management.png"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the top navigation, click ",(0,r.kt)("strong",{parentName:"li"},"Settings"),"."),(0,r.kt)("li",{parentName:"ol"},"On the left navigation, under ",(0,r.kt)("strong",{parentName:"li"},"Organization Settings"),", click ",(0,r.kt)("strong",{parentName:"li"},"Teams"),". "),(0,r.kt)("li",{parentName:"ol"},"On the Teams view, Owners can manage, add, or delete teams. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To add a team, click ",(0,r.kt)("strong",{parentName:"li"},"+ New Team"),". Add a ",(0,r.kt)("strong",{parentName:"li"},"Name")," and ",(0,r.kt)("strong",{parentName:"li"},"Description"),", then click ",(0,r.kt)("strong",{parentName:"li"},"Create Team"),"."),(0,r.kt)("li",{parentName:"ul"},"To delete a team, hover over the team's name in the team list, then click ",(0,r.kt)("strong",{parentName:"li"},"Delete"),".")))),(0,r.kt)("h3",{id:"manage-a-team-team-owners"},"Manage a Team (Team Owners)"),(0,r.kt)("p",null,"To manage a team, select the team from the ",(0,r.kt)("strong",{parentName:"p"},"Teams")," list. Three tabs are displayed: General, Members, and Access. "),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("img",{alt:"Team management tabs and options",width:"60%",src:"/img/team-management-details.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On the ",(0,r.kt)("strong",{parentName:"li"},"General")," tab, you can edit the team name and description."),(0,r.kt)("li",{parentName:"ul"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Members")," tab, you can add and remove members from a team as well as change a member's team role. Only Owners will be able to perform these actions. Additionally, Team Owners can perform these actions for their respective team. "),(0,r.kt)("li",{parentName:"ul"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Access")," tab, Owners and Team Owners can manage workspace access for the team as well as view resources with granted access. ")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"add-member",label:"Add a Member",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",null,"From the ",(0,r.kt)("strong",null,"Members")," tab, click ",(0,r.kt)("strong",null,"+ Add Members"),"."),(0,r.kt)("li",null,"Select member(s) from the list."),(0,r.kt)("li",null,"Click ",(0,r.kt)("strong",null,"Add People"),"."))),(0,r.kt)(o.Z,{value:"remove-member",label:"Remove a Member",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",null,"From the ",(0,r.kt)("strong",null,"Members")," tab, hover over a user's name in the Members list."),(0,r.kt)("li",null,"On the right, click ",(0,r.kt)("strong",null,"Remove"),"."))),(0,r.kt)(o.Z,{value:"change-role",label:"Change Member's Role",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",null,"From the ",(0,r.kt)("strong",null,"Role")," column of the ",(0,r.kt)("strong",null,"Members")," tab, select the role dropdown."),(0,r.kt)("li",null,"Select a new role from the list."))),(0,r.kt)(o.Z,{value:"manage-workspace",label:"Manage Workspace Access",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",null,"On the ",(0,r.kt)("strong",null,"Access")," tab, in the ",(0,r.kt)("strong",null,"Workspace Access")," box, click the dropdown next to the workspace name."),(0,r.kt)("li",null,"Select the appropriate level of workspace access for the team: ",(0,r.kt)("strong",null,"Can Edit"),", ",(0,r.kt)("strong",null,"Can View"),", or ",(0,r.kt)("strong",null,"No Access"),"."))),(0,r.kt)(o.Z,{value:"remove-granted",label:"View Granted Access",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",null,"From the ",(0,r.kt)("strong",null,"Granted Access")," box, select a resource for which the team was granted access. You will be brought to the resource (for example, a Cost Report)."),(0,r.kt)("li",null,"You can then edit or remove granted access directly from the resource itself.")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"manage-resource-access"},"Manage Resource Access"),(0,r.kt)("p",null,"You can manage access for individual Cost Reporting resources, including Cost Reports, Cost Report Folders, Dashboards, Saved Filters, Resource Reports, and Segments. "),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("img",{alt:"Manage access to a Cost Reporting dashboard",width:"75%",src:"/img/resource-access.png"})),(0,r.kt)("p",null,"You can manage resource-level access from the Cost Reporting navigation list or from directly within a resource."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to grant access to a resource (for example, a Dashboard) to only a specific team (for example, the Marketing team), set the Everyone team to ",(0,r.kt)("strong",{parentName:"p"},"Cannot Access"),", and set the Marketing team to ",(0,r.kt)("strong",{parentName:"p"},"Can Access"),". See the ",(0,r.kt)("a",{parentName:"p",href:"/rbac#team-only-resource-access"},"Team-Only Resource Access")," permissions table below.")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"from-list",label:"Manage Access from Cost Reporting List",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",null,"From the top navigation, click ",(0,r.kt)("strong",null,"Cost Reporting"),". (For Resource Reports, click ",(0,r.kt)("strong",null,"Active Resources")," > ",(0,r.kt)("strong",null,"Resource Reports"),".)"),(0,r.kt)("li",null,"Select the resource category from the left navigation (e.g., Cost Reports or Segments)."),(0,r.kt)("li",null,"Hover over any resource in the list, then click the ellipses (",(0,r.kt)("strong",null,"..."),") on the right."),(0,r.kt)("li",null,"Select ",(0,r.kt)("strong",null,"Manage Access"),"."),(0,r.kt)("li",null,"Select a team from the list, and indicate the team's access level to the resource:",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("strong",null,"Can Access"),": The team will have access to the resource."),(0,r.kt)("li",null,(0,r.kt)("strong",null,"Cannot Access"),": The team will not have access to the resource."),(0,r.kt)("li",null,(0,r.kt)("strong",null,"Reset Access"),": The team will not have access to the resource unless the team is assigned to the workspace the resource is associated with. For instance, if a specific resource from the Marketing workspace, such as a Saved Filter, was shared with the Management team, which has access only to the Management workspace, resetting the access will result in the Management team no longer having access to the Saved Filter."))))),(0,r.kt)(o.Z,{value:"from-resource",label:"Manage Access from Inside Resource",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",null,"From the top navigation, click ",(0,r.kt)("strong",null,"Cost Reporting"),". (For Resource Reports, click ",(0,r.kt)("strong",null,"Active Resources")," > ",(0,r.kt)("strong",null,"Resource Reports"),".)"),(0,r.kt)("li",null,"Select the resource category from the left navigation (e.g., Cost Reports or Segments)."),(0,r.kt)("li",null,"Hover over any resource in the list, and click the ellipses (",(0,r.kt)("strong",null,"..."),") on the right."),(0,r.kt)("li",null,"From the top of any resource, such as a Cost Report, click the ellipses (",(0,r.kt)("strong",null,"..."),")."),(0,r.kt)("li",null,"Select ",(0,r.kt)("strong",null,"Manage Access"),"."),(0,r.kt)("li",null,"Select the desired access, then click ",(0,r.kt)("strong",null,"Save"),".")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"team-only-resource-access"},"Team-Only Resource Access"),(0,r.kt)("p",null,"In the following table, the Everyone team's access to a resource (for example, a Cost Report) has been revoked. The member's team has been granted access to that specific resource."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Team Access"),(0,r.kt)("th",{parentName:"tr",align:null},"Team Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Create?"),(0,r.kt)("th",{parentName:"tr",align:null},"Update?"),(0,r.kt)("th",{parentName:"tr",align:null},"Delete?"),(0,r.kt)("th",{parentName:"tr",align:null},"View?"),(0,r.kt)("th",{parentName:"tr",align:null},"Manage Access?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"No Access"),(0,r.kt)("td",{parentName:"tr",align:null},"Owner"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"No Access"),(0,r.kt)("td",{parentName:"tr",align:null},"Editor"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"No Access"),(0,r.kt)("td",{parentName:"tr",align:null},"Viewer"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View Access"),(0,r.kt)("td",{parentName:"tr",align:null},"Owner"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View Access"),(0,r.kt)("td",{parentName:"tr",align:null},"Editor"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View Access"),(0,r.kt)("td",{parentName:"tr",align:null},"Viewer"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit Access"),(0,r.kt)("td",{parentName:"tr",align:null},"Owner"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit Access"),(0,r.kt)("td",{parentName:"tr",align:null},"Editor"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit Access"),(0,r.kt)("td",{parentName:"tr",align:null},"Viewer"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{mdxType:"Checkmark"})),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If a user is on multiple teams that have conflicting permissions, the higher level of permissions will be granted. ")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Multiple Teams Resource Scenario"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A user is on the Marketing team with ",(0,r.kt)("strong",{parentName:"li"},"Team Owner")," permissions. "),(0,r.kt)("li",{parentName:"ul"},"They are also on the Engineering team with ",(0,r.kt)("strong",{parentName:"li"},"Team Viewer")," permissions. "),(0,r.kt)("li",{parentName:"ul"},"Both teams are granted access to a Saved Filter. ")),(0,r.kt)("p",null,"The user will be granted Owner-level permissions to that resource, in other words, they can view ",(0,r.kt)("em",{parentName:"p"},"and")," manage that resource.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Multiple Workspace Access Scenario"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A user is on the Data Analyst team and the Data Engineering team.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The Data Engineering team has ",(0,r.kt)("strong",{parentName:"li"},"Can Edit")," access to the Engineering workspace."),(0,r.kt)("li",{parentName:"ul"},"The Data Analyst team has ",(0,r.kt)("strong",{parentName:"li"},"Can View")," access to the Engineering workspace."))),(0,r.kt)("li",{parentName:"ul"},"The user has edit privileges to resources in the Engineering workspace because of their ",(0,r.kt)("strong",{parentName:"li"},"Can Edit")," abilities from the Data Engineering team."))),(0,r.kt)("h2",{id:"settings-permissions"},"Settings Permissions"),(0,r.kt)("p",null,"Settings permissions are relevant to specific functions in the console, including Authentication, Billing & Plans, Integrations, People, Teams, and Workspaces. Only Owners can manage Settings-related functions."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Team Owners can manage their team within the Teams UI \u2014 but only the team for which they hold the Team Owner role.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Settings Permissions Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scenario 1"),": You want to create a new provider integration, such as a new Azure connection. An Owner will need to create the connection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scenario 2"),": You are a Team Owner for the Engineering team. You can manage the Engineering team in the Teams UI. You will not be able to manage other teams."))),(0,r.kt)("h2",{id:"financial-planning-permissions"},"Financial Planning Permissions"),(0,r.kt)("p",null,"Financial planning permissions are relevant to specific screens in the console, including Autopilot, Budgets, Budget Alerts, Business Metrics, Issues, Reserved Instances, Savings Models, and Savings Plans Usage. "),(0,r.kt)("p",null,"Users with the Editor or above role will be able to create resources in and manage the above functions."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Any user who is assigned to an issue will have update permissions for that issue. ")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Financial Planning Permissions Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scenario 1"),": You want to create a new Budget Alert. A user with an Editor or above role will need to create and manage the alert. All other users will only be able to ",(0,r.kt)("em",{parentName:"li"},"view")," the alert."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scenario 2"),": Editors and above can create and manage issues. You have a Viewer role and are assigned a new issue. You can now edit and comment on ",(0,r.kt)("em",{parentName:"li"},"only this new issue"),"."))))}w.isMDXComponent=!0}}]);