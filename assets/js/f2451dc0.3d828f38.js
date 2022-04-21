"use strict";(self.webpackChunkmeta_api_docs=self.webpackChunkmeta_api_docs||[]).push([[574],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(u,".").concat(h)]||d[h]||s[h]||o;return n?a.createElement(m,r(r({ref:t},l),{},{components:n})):a.createElement(m,r({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},935:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],p={id:"github-oauth-app",title:"Authenticate your GitHub account"},u=void 0,c={unversionedId:"authentication/github-oauth-app",id:"authentication/github-oauth-app",title:"Authenticate your GitHub account",description:"In order to use the GitHub API, you'll need to authenticate with an oAuth App",source:"@site/docs/authentication/4-github-oauth.md",sourceDirName:"authentication",slug:"/authentication/github-oauth-app",permalink:"/docs/authentication/github-oauth-app",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"github-oauth-app",title:"Authenticate your GitHub account"},sidebar:"mySidebar",previous:{title:"OAuth for end users",permalink:"/docs/authentication/oauth-public"},next:{title:"How to deploy a Spell in production?",permalink:"/docs/deployment/versions"}},l=[{value:"1. Create a new authentication in Meta API",id:"1-create-a-new-authentication-in-meta-api",children:[],level:2},{value:"2. Create a GitHub App",id:"2-create-a-github-app",children:[],level:2},{value:"3. Update the Meta API authentication",id:"3-update-the-meta-api-authentication",children:[],level:2},{value:"4. Authorize your account",id:"4-authorize-your-account",children:[],level:2},{value:"5. Use your OAuth profile in a Spell",id:"5-use-your-oauth-profile-in-a-spell",children:[],level:2}],s={toc:l};function d(e){var t=e.components,p=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In order to use the GitHub API, you'll need to authenticate with an oAuth App"),(0,o.kt)("h2",{id:"1-create-a-new-authentication-in-meta-api"},"1. Create a new authentication in Meta API"),(0,o.kt)("p",null,"Log in on ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.meta-api.io/login"},"Meta API dashboard")," and go to the ",(0,o.kt)("em",{parentName:"p"},"API's Authentication")," page.\nClick on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create a new authentication")," button and select the GitHub API.\nGenerate your personnal link and copy it, and then click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Save"),". "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Step 1",src:n(677).Z})),(0,o.kt)("h2",{id:"2-create-a-github-app"},"2. Create a GitHub App"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/settings/apps/new"},"Register new GitHub App"))," on your GitHub account settings."),(0,o.kt)("p",null,"Choose a name, fill your homepage URL (if you don't have one, it will work with anything) and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Callback URL")," you just copied."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Step 2.1",src:n(924).Z})),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"User-to-server token are a beta feature on GitHub and might not work correctly")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure to unckeck the ",(0,o.kt)("inlineCode",{parentName:"p"},"Expire user authorization tokens")," checkbox when you configure your app or ",(0,o.kt)("inlineCode",{parentName:"p"},"Opt-out")," from the Optional features"),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("img",{alt:"Step 2.5",src:n(1121).Z})))),(0,o.kt)("p",null,"Unckeck the Webhook activation\n",(0,o.kt)("img",{alt:"Step 2.2",src:n(927).Z})),(0,o.kt)("p",null,"Select the permissions that you'll need in your Spells (you can update your App later to add more). ",(0,o.kt)("strong",{parentName:"p"},"For exemple: request Read & write access for Contents to view and update files"),"\n",(0,o.kt)("img",{alt:"Step 2.3",src:n(7214).Z})),(0,o.kt)("p",null,"Finnaly, choose if only your private account will use this app or if you plan to use it with an organization account or other GitHub users.\n",(0,o.kt)("img",{alt:"Step 2.4",src:n(7074).Z})),(0,o.kt)("h2",{id:"3-update-the-meta-api-authentication"},"3. Update the Meta API authentication"),(0,o.kt)("p",null,"Copy the Client ID and the Client secret (you'll have to generate one) and past them on the authentication modal in Meta API."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Step 3.1",src:n(7142).Z})),(0,o.kt)("p",null,'Select the permissions you need and set the scope delimiter with just a space (" ").'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Step 3.2",src:n(8394).Z})),(0,o.kt)("p",null,"Install the App in your GitHub account (or organization) and select the repositories you need to access"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Step 3.3",src:n(8021).Z})),(0,o.kt)("h2",{id:"4-authorize-your-account"},"4. Authorize your account"),(0,o.kt)("p",null,"Click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorize")," button, the GitHub popup will open and ask you to authorize it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Step 4.1",src:n(8477).Z})),(0,o.kt)("p",null,"Reload the page to see your OAuth profile.\n",(0,o.kt)("img",{alt:"Step 4.2",src:n(8832).Z})),(0,o.kt)("h2",{id:"5-use-your-oauth-profile-in-a-spell"},"5. Use your OAuth profile in a Spell"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Step 5",src:n(1707).Z})))}d.isMDXComponent=!0},677:function(e,t,n){t.Z=n.p+"assets/images/step1-5bbed24e3375511719be47f1e6dc876b.png"},924:function(e,t,n){t.Z=n.p+"assets/images/step2_1-ab46724310bab93ced51407cd2ce0bed.png"},927:function(e,t,n){t.Z=n.p+"assets/images/step2_2-a444991c81b8772f25182905f46e58f0.png"},7214:function(e,t,n){t.Z=n.p+"assets/images/step2_3-13b11038fd95f46fe2f62fae1181642a.png"},7074:function(e,t,n){t.Z=n.p+"assets/images/step2_4-3b021ab4044c82f7cbd76eca912c8d27.png"},1121:function(e,t,n){t.Z=n.p+"assets/images/step2_5-2d27a2cf73db653063a26f2c955124a7.png"},7142:function(e,t,n){t.Z=n.p+"assets/images/step3_1-6c8a60829645de7c1c9d09c8e8085bcd.png"},8394:function(e,t,n){t.Z=n.p+"assets/images/step3_2-ec2deeafbb6cf38b6dd1f610d077ad46.png"},8021:function(e,t,n){t.Z=n.p+"assets/images/step3_3-d5da3068d0d7496795707cb2edf37b15.png"},8477:function(e,t,n){t.Z=n.p+"assets/images/step4_1-cfeda72160aa157a6245095cee5e8118.png"},8832:function(e,t,n){t.Z=n.p+"assets/images/step4_2-f786341a26177cca7e84c90fdcef2fb4.png"},1707:function(e,t,n){t.Z=n.p+"assets/images/step5-b383b28f9b60dd9b29b72b9e8a86a182.png"}}]);