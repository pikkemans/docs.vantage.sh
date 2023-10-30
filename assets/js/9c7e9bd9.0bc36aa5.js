"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[3483],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||g[m]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={id:"vantage_account",name:"Vantage Account Settings",description:"This walkthrough reviews personal and organizational configuration settings for your Vantage account."},i="Vantage Account Settings",s={unversionedId:"vantage_account",id:"vantage_account",title:"Vantage Account Settings",description:"This walkthrough reviews personal and organizational configuration settings for your Vantage account.",source:"@site/docs/vantage_account.md",sourceDirName:".",slug:"/vantage_account",permalink:"/vantage_account",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/vantage_account.md",tags:[],version:"current",frontMatter:{id:"vantage_account",name:"Vantage Account Settings",description:"This walkthrough reviews personal and organizational configuration settings for your Vantage account."},sidebar:"someSidebar",previous:{title:"Security",permalink:"/security"},next:{title:"Self-Service SSO",permalink:"/sso"}},l={},c=[{value:"Personal Settings",id:"personal-settings",level:2},{value:"Update Your Profile",id:"update-your-profile",level:3},{value:"Create a Vantage API Access Token",id:"create-a-vantage-api-access-token",level:3},{value:"Reset Your Password",id:"reset-your-password",level:3},{value:"Organization Settings",id:"organization-settings",level:2},{value:"Manage Workspaces",id:"manage-workspaces",level:3},{value:"View Billing &amp; Plans",id:"view-billing--plans",level:3},{value:"Invite Users to Your Account",id:"invite-users-to-your-account",level:3},{value:"Configure Authentication",id:"configure-authentication",level:3},{value:"Configure Integrations",id:"configure-integrations",level:3}],p={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vantage-account-settings"},"Vantage Account Settings"),(0,r.kt)("p",null,"From the Vantage account ",(0,r.kt)("a",{parentName:"p",href:"https://console.vantage.sh/account/profile"},"Settings page"),", you can edit your personal profile, create API access tokens, and configure organizational settings."),(0,r.kt)("h2",{id:"personal-settings"},"Personal Settings"),(0,r.kt)("p",null,"From the top navigation bar of the Vantage console, click ",(0,r.kt)("strong",{parentName:"p"},"Settings"),". On the side navigation bar, review the options under ",(0,r.kt)("strong",{parentName:"p"},"Personal Settings"),"."),(0,r.kt)("h3",{id:"update-your-profile"},"Update Your Profile"),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Profile")," section, you can change your display name as well as your email address. Note that changing your email will log you out and require you to re-confirm."),(0,r.kt)("h3",{id:"create-a-vantage-api-access-token"},"Create a Vantage API Access Token"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"https://vantage.readme.io/reference/general"},"Vantage API")," to programmatically access cloud pricing data. "),(0,r.kt)("p",null,"To generate an API token:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On the left navigation of the ",(0,r.kt)("strong",{parentName:"li"},"Settings")," screen, select ",(0,r.kt)("strong",{parentName:"li"},"API Access Tokens"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter a new token name, select the ",(0,r.kt)("strong",{parentName:"li"},"Read")," and/or ",(0,r.kt)("strong",{parentName:"li"},"Write")," scope, and click ",(0,r.kt)("strong",{parentName:"li"},"Create"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Show")," to reveal and copy your token.")),(0,r.kt)("p",null,"To revoke a token, click the ellipses (",(0,r.kt)("strong",{parentName:"p"},"..."),") next to the token name, then click ",(0,r.kt)("strong",{parentName:"p"},"Delete"),"."),(0,r.kt)("h3",{id:"reset-your-password"},"Reset Your Password"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The following steps are for users who directly sign in to Vantage.")),(0,r.kt)("p",null,"If you forget your password or would like to change your password, follow the below steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the top-right corner of the console, click the profile icon, then click ",(0,r.kt)("strong",{parentName:"li"},"Logout"),"."),(0,r.kt)("li",{parentName:"ol"},"You will return to the ",(0,r.kt)("strong",{parentName:"li"},"Login")," screen. Type your email in the ",(0,r.kt)("strong",{parentName:"li"},"Email Address")," field. Then, click ",(0,r.kt)("strong",{parentName:"li"},"Continue"),"."),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Sign In")," page, click ",(0,r.kt)("strong",{parentName:"li"},"Forgot your password?")," and enter your email again. "),(0,r.kt)("li",{parentName:"ol"},"You will receive an email with a link to reset your password. Click ",(0,r.kt)("strong",{parentName:"li"},"confirm the password change"),", then enter a new password. "),(0,r.kt)("li",{parentName:"ol"},"Click the right facing arrow, then go to ",(0,r.kt)("a",{parentName:"li",href:"https://console.vantage.sh"},"console.vantage.sh")," to sign in with your new password.")),(0,r.kt)("h2",{id:"organization-settings"},"Organization Settings"),(0,r.kt)("p",null,"From the top navigation bar of the Vantage console, click ",(0,r.kt)("strong",{parentName:"p"},"Settings"),". On the side navigation bar, review the options under ",(0,r.kt)("strong",{parentName:"p"},"Organization Settings"),"."),(0,r.kt)("h3",{id:"manage-workspaces"},"Manage Workspaces"),(0,r.kt)("p",null,"Provider integrations are organized into workspaces. From the ",(0,r.kt)("strong",{parentName:"p"},"Workspaces")," section, you can manage each of your workspaces as well as create a new one. See the ",(0,r.kt)("a",{parentName:"p",href:"/workspaces"},"Workspaces")," documentation for more information. "),(0,r.kt)("h3",{id:"view-billing--plans"},"View Billing & Plans"),(0,r.kt)("p",null,"From the ",(0,r.kt)("strong",{parentName:"p"},"Billing & Plans")," section, you can view your usage, current plan, and previous payments/invoices. "),(0,r.kt)("p",null,"If you need to use a different email address for invoicing, please contact Vantage Support at ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh"),"."),(0,r.kt)("h3",{id:"invite-users-to-your-account"},"Invite Users to Your Account"),(0,r.kt)("p",null,"From the ",(0,r.kt)("strong",{parentName:"p"},"People")," section, you can invite new users, view a user's role and team associations, and remove users. To invite a new user:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Organization")," settings, select ",(0,r.kt)("strong",{parentName:"li"},"People"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"+ Invite"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter the user's email and select a role and associated teams."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Send Invitation"),". The new user's name will appear in the ",(0,r.kt)("strong",{parentName:"li"},"People")," list with ",(0,r.kt)("em",{parentName:"li"},"Invite Pending")," as well as a link to ",(0,r.kt)("em",{parentName:"li"},"Resend")," the invite. ")),(0,r.kt)("p",null,"Click the ellipses (",(0,r.kt)("strong",{parentName:"p"},"..."),") next to a user's name to edit or remove a user. "),(0,r.kt)("h3",{id:"configure-authentication"},"Configure Authentication"),(0,r.kt)("p",null,"Vantage supports a number of Single Sign-On (SSO) options. See the ",(0,r.kt)("a",{parentName:"p",href:"/sso"},"SSO")," documentation for more information. "),(0,r.kt)("h3",{id:"configure-integrations"},"Configure Integrations"),(0,r.kt)("p",null,"Configure provider integrations from the Organization settings. See the ",(0,r.kt)("a",{parentName:"p",href:"/getting_started"},"Integrations")," documentation for more information."))}g.isMDXComponent=!0}}]);