"use strict";(self.webpackChunkdocs_vantage_sh=self.webpackChunkdocs_vantage_sh||[]).push([[483],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(c,".").concat(d)]||u[d]||g[d]||r;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},i="Vantage Account",s={unversionedId:"vantage_account",id:"vantage_account",title:"Vantage Account",description:"Your account on the Vantage console is used to control your personal settings and API tokens. With the right permissions you can also control the people and workspaces in your Vantage account.",source:"@site/docs/vantage_account.md",sourceDirName:".",slug:"/vantage_account",permalink:"/vantage_account",draft:!1,editUrl:"https://github.com/vantage-sh/docs.vantage.sh/blob/master/docs/vantage_account.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Find Hidden Costs",permalink:"/hidden_costs"},next:{title:"Setup AWS",permalink:"/connecting_aws"}},c={},p=[{value:"Reset your password",id:"reset-your-password",level:2},{value:"Update the Vantage AWS Integration",id:"update-the-vantage-aws-integration",level:2},{value:"Get a Vantage API Token",id:"get-a-vantage-api-token",level:2},{value:"How can I see my Vantage Invoice?",id:"how-can-i-see-my-vantage-invoice",level:2}],l={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vantage-account"},"Vantage Account"),(0,o.kt)("p",null,"Your account on ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/"},"the Vantage console")," is used to control your personal settings and API tokens. With the right ",(0,o.kt)("a",{parentName:"p",href:"https://www.vantage.sh/features/team-management"},"permissions")," you can also control the people and workspaces in your Vantage account."),(0,o.kt)("h2",{id:"reset-your-password"},"Reset your password"),(0,o.kt)("p",null,"To change your password, log out of the console clicking the profile icon in the top right and clicking ",(0,o.kt)("strong",{parentName:"p"},"Logout"),". You will be taken to a screen to enter your email. Type your email in and click ",(0,o.kt)("strong",{parentName:"p"},"Sign In"),". On the Sign In page, click ",(0,o.kt)("strong",{parentName:"p"},"Forgot your password?")," and enter your email again. You will receive an email with a link to reset your password. Click ",(0,o.kt)("strong",{parentName:"p"},"confirm the password change")," to go to a screen to enter a new password. Click the right facing arrow then go to ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh"},"console.vantage.sh")," to sign in with your new password."),(0,o.kt)("h2",{id:"update-the-vantage-aws-integration"},"Update the Vantage AWS Integration"),(0,o.kt)("p",null,"Occasionally Vantage will modify the permission sets it uses to access billing and resource data on ",(0,o.kt)("a",{parentName:"p",href:"/connecting_aws/"},"AWS"),". When this happens you can update your integration by going to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/integrations"},"Integrations page")," within settings in the ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/"},"Vantage Console"),". Click ",(0,o.kt)("strong",{parentName:"p"},"Manage")," for the cloud account that you wish to update. For AWS organizations with multiple accounts, this will usually be the Management account. Click ",(0,o.kt)("strong",{parentName:"p"},"Update Vantage via AWS Console")," to perform the update. Or click ",(0,o.kt)("strong",{parentName:"p"},"More Update Options")," for command line and other deployment methods."),(0,o.kt)("h2",{id:"get-a-vantage-api-token"},"Get a Vantage API Token"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://vantage.readme.io/reference/general"},"Vantage API")," to programmatically access cloud pricing data. For example, you can access your account's billing data in a JSON string or build cross provider resource tagging solutions. There are some limitations - for example the pricing data is only for on-demand instances at the moment."),(0,o.kt)("p",null,"To generate an API token, go to your ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/account/profile/tokens"},"profile settings in the Vantage console"),", give your token a name and click ",(0,o.kt)("strong",{parentName:"p"},"Add"),". Click ",(0,o.kt)("strong",{parentName:"p"},"Show")," to reveal and copy your token. The API documentation allows you to enter your token directly into it to see what kind of responses are available. Lastly, you can revoke your Vantage API Token by pressing the more options icon and clicking ",(0,o.kt)("strong",{parentName:"p"},"Delete"),"."),(0,o.kt)("h2",{id:"how-can-i-see-my-vantage-invoice"},"How can I see my Vantage Invoice?"),(0,o.kt)("p",null,"To see invoices from your Vantage subscription, including past payment dates and amount paid, click your profile in the top right and go to Settings. Select the ",(0,o.kt)("a",{parentName:"p",href:"https://console.vantage.sh/settings/payment"},"Billing and Plans")," tab and then scroll down to ",(0,o.kt)("strong",{parentName:"p"},"Invoices"),"."),(0,o.kt)("p",null,"If you need to use a different email address for invoicing, please contact Vantage Support at ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@vantage.sh"},"support@vantage.sh"),"."))}g.isMDXComponent=!0}}]);