"use strict";(self.webpackChunkmeta_api_docs=self.webpackChunkmeta_api_docs||[]).push([[2645],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,g=h["".concat(p,".").concat(d)]||h[d]||u[d]||i;return n?a.createElement(g,r(r({ref:t},s),{},{components:n})):a.createElement(g,r({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5059:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={id:"google-oauth-app",title:"Create your own Google OAuth 2 account"},p=void 0,c={unversionedId:"api-authentication/example-auth/google-oauth-app",id:"api-authentication/example-auth/google-oauth-app",title:"Create your own Google OAuth 2 account",description:"In order to use some Google APIs (like GMail), you'll need your own Google OAuth account to access private and sensible scope",source:"@site/docs/api-authentication/example-auth/2-google-oauth.md",sourceDirName:"api-authentication/example-auth",slug:"/api-authentication/example-auth/google-oauth-app",permalink:"/docs/api-authentication/example-auth/google-oauth-app",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"google-oauth-app",title:"Create your own Google OAuth 2 account"},sidebar:"mySidebar",previous:{title:"Authenticate your GitHub account",permalink:"/docs/api-authentication/example-auth/github-oauth-app"},next:{title:"Authenticate your Aircall account inside Meta API",permalink:"/docs/api-authentication/example-auth/aircall-auth"}},s={},u=[{value:"1. Create a new project on GCP",id:"1-create-a-new-project-on-gcp",level:2},{value:"2. Enable the APIs you need",id:"2-enable-the-apis-you-need",level:2},{value:"3. Access Credentials",id:"3-access-credentials",level:2},{value:"4. Create a new OAuth client ID",id:"4-create-a-new-oauth-client-id",level:2},{value:"5. Configure the consent screen (first time only)",id:"5-configure-the-consent-screen-first-time-only",level:2},{value:"6. Configure a new OAuth client ID",id:"6-configure-a-new-oauth-client-id",level:2},{value:"7. Finish the OAuth configuration on Meta API",id:"7-finish-the-oauth-configuration-on-meta-api",level:2}],h={toc:u};function d(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to use some Google APIs (like GMail), you'll need your own Google OAuth account to access private and sensible scope"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The official Google Guide is available here: ",(0,i.kt)("a",{parentName:"em",href:"https://support.google.com/cloud/answer/6158849?hl=en"},"https://support.google.com/cloud/answer/6158849?hl=en"))),(0,i.kt)("h2",{id:"1-create-a-new-project-on-gcp"},"1. Create a new project on GCP"),(0,i.kt)("p",null,"Go on ",(0,i.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/"},"Google Cloud Platform Console")),(0,i.kt)("p",null,"From the project list, select or create a new project. You can give the name you want (maybe the automation you're trying to achieve on Meta API?)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Select GCP Project",src:n(2510).Z,width:"1920",height:"1078"})),(0,i.kt)("h2",{id:"2-enable-the-apis-you-need"},"2. Enable the APIs you need"),(0,i.kt)("p",null,"From the left menu, go on ",(0,i.kt)("strong",{parentName:"p"},"APIs & Services")," and ",(0,i.kt)("strong",{parentName:"p"},"Library")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Enable APIs menu",src:n(1861).Z,width:"1919",height:"1079"})),(0,i.kt)("p",null,"Search for the API you want"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Search API",src:n(2988).Z,width:"1918",height:"1081"})),(0,i.kt)("p",null,"Select the right API"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Select API",src:n(815).Z,width:"1918",height:"1079"})),(0,i.kt)("p",null,"Click on ",(0,i.kt)("strong",{parentName:"p"},"Enable")," to activate it"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Select API",src:n(9174).Z,width:"1919",height:"1080"})),(0,i.kt)("p",null,"You can repeat as much as needed this step to enable more APIs on your Google Account. You can also do it later."),(0,i.kt)("h2",{id:"3-access-credentials"},"3. Access Credentials"),(0,i.kt)("p",null,"From the left menu, go on ",(0,i.kt)("strong",{parentName:"p"},"APIs & Services")," and ",(0,i.kt)("strong",{parentName:"p"},"Credentials")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Access Credentials",src:n(4065).Z,width:"1919",height:"1078"})),(0,i.kt)("h2",{id:"4-create-a-new-oauth-client-id"},"4. Create a new OAuth client ID"),(0,i.kt)("p",null,"Click on ",(0,i.kt)("strong",{parentName:"p"},"Create credentials")," and select ",(0,i.kt)("strong",{parentName:"p"},"OAuth client ID")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create OAuth client",src:n(1929).Z,width:"1919",height:"1079"})),(0,i.kt)("h2",{id:"5-configure-the-consent-screen-first-time-only"},"5. Configure the consent screen (first time only)"),(0,i.kt)("p",null,"For the first time, you'll have to configure the consent screen. Click on ",(0,i.kt)("strong",{parentName:"p"},"Configure consent screen")," to start the configuration"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"First time consent screen",src:n(2687).Z,width:"1919",height:"1080"})),(0,i.kt)("p",null,"Otherwise, you can jump to ",(0,i.kt)("strong",{parentName:"p"},"step 6")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Choose ",(0,i.kt)("strong",{parentName:"p"},"Internal")," type and click ",(0,i.kt)("strong",{parentName:"p"},"Create")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Consent type",src:n(6481).Z,width:"1916",height:"1080"})),(0,i.kt)("p",null,"You have now to fill some required information. Only the following fields are required. Click ",(0,i.kt)("strong",{parentName:"p"},"Save and continue")," when you finish."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Consent fill",src:n(4083).Z,width:"1918",height:"1080"})),(0,i.kt)("p",null,"You'll now select the scope needed for your authentication. Click on ",(0,i.kt)("strong",{parentName:"p"},"Add or remove scopes")," to open the right panel and use the search input to filter them."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Select scopes",src:n(609).Z,width:"1918",height:"1078"})),(0,i.kt)("p",null,"To know which scopes you need to add, you can refer to your ",(0,i.kt)("em",{parentName:"p"},"OAuth configuration window")," on Meta API. The list of available scopes is display there."),(0,i.kt)("p",null,"Here is an example with Google Spreadsheet:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Scopes Meta API",src:n(9178).Z,width:"1919",height:"1079"})),(0,i.kt)("p",null,"One done, click ",(0,i.kt)("strong",{parentName:"p"},"Save and continue")," and the consent screen setup is finished. You can click ",(0,i.kt)("strong",{parentName:"p"},"Back to dashboard")," and the end of page and go back to ",(0,i.kt)("strong",{parentName:"p"},"Step 4")),(0,i.kt)("h2",{id:"6-configure-a-new-oauth-client-id"},"6. Configure a new OAuth client ID"),(0,i.kt)("p",null,"Select ",(0,i.kt)("strong",{parentName:"p"},"Web application")," for ",(0,i.kt)("em",{parentName:"p"},"Application type")),(0,i.kt)("p",null,"Choose a ",(0,i.kt)("strong",{parentName:"p"},"Name")),(0,i.kt)("p",null,"Under ",(0,i.kt)("strong",{parentName:"p"},"Authorized redirect URIs"),", add the URL given by the OAuth configuration window on Meta API"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configure OAuth client ID",src:n(585).Z,width:"1918",height:"1079"})),(0,i.kt)("p",null,"This is where you can find the URL:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"URL Meta API",src:n(9695).Z,width:"1917",height:"1080"})),(0,i.kt)("p",null,"Once it's done, click on ",(0,i.kt)("strong",{parentName:"p"},"Create")," to retrieve the Client ID and Client Secret"),(0,i.kt)("h2",{id:"7-finish-the-oauth-configuration-on-meta-api"},"7. Finish the OAuth configuration on Meta API"),(0,i.kt)("p",null,"Copy and paste your ",(0,i.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,i.kt)("strong",{parentName:"p"},"Client Secret")," from this popup to your Meta API configuration window"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Popup Client ID",src:n(343).Z,width:"1919",height:"1081"})),(0,i.kt)("p",null,"Configure the OAuth on Meta API like thi\n:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configure OAuth Meta API",src:n(4018).Z,width:"1919",height:"1079"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,i.kt)("strong",{parentName:"p"},"Client Secret")," must have the value from the created credential from Google Cloud Platform"),(0,i.kt)("p",null,"On ",(0,i.kt)("strong",{parentName:"p"},"Permissions needed"),", select the right permissions you need (choose on step 5)"),(0,i.kt)("p",null,"For the ",(0,i.kt)("strong",{parentName:"p"},"Scope Delimited"),", add a ",(0,i.kt)("em",{parentName:"p"},"blank space"),': " "'),(0,i.kt)("p",null,"Finally, you'll need to add two ",(0,i.kt)("strong",{parentName:"p"},"custom parameters"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"prompt"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"consent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"access_type"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"offline"))),(0,i.kt)("p",null,"Now the configuration is completed!"),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Authorize a new profile"),", and you'll see the Google OAuth popup with our own app inside!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"OAuth Popup",src:n(8849).Z,width:"1918",height:"1077"})),(0,i.kt)("p",null,"Select a profile, validate the authorization and your Google account is now ready to use."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can reuse the same ",(0,i.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,i.kt)("strong",{parentName:"p"},"Client Secret")," on other Google APIs."),(0,i.kt)("p",{parentName:"div"},"To access the ",(0,i.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,i.kt)("strong",{parentName:"p"},"Client Secret")," later, go on the ",(0,i.kt)("strong",{parentName:"p"},"Credentials")," menu and select a previously created ",(0,i.kt)("em",{parentName:"p"},"OAuth Client ID")))))}d.isMDXComponent=!0},4065:function(e,t,n){t.Z=n.p+"assets/images/access_credentials-98172fd597c5d4f34968af6cb111f5c6.jpg"},585:function(e,t,n){t.Z=n.p+"assets/images/configure_client_id-94efcdf25f3f3ae89bd03b0845b8adf7.jpg"},4018:function(e,t,n){t.Z=n.p+"assets/images/configure_oauth_meta-api-473967dfae79d40a9913239c6f70c12f.png"},4083:function(e,t,n){t.Z=n.p+"assets/images/consent_fill-adef896e50164f6bc0d286bcfdc474db.jpg"},6481:function(e,t,n){t.Z=n.p+"assets/images/consent_type-4bb1a39bac8f70480a21203837eb200b.jpg"},1929:function(e,t,n){t.Z=n.p+"assets/images/create_oauth_client-a6b9c09fd399d5acd73e40f706a4f004.jpg"},1861:function(e,t,n){t.Z=n.p+"assets/images/enable_apis-d22b9b9359da3f8b45e597b71da86618.jpg"},9174:function(e,t,n){t.Z=n.p+"assets/images/enable_one_api-378b139ecf8c172718fbb8fc0958a7a0.jpg"},2687:function(e,t,n){t.Z=n.p+"assets/images/first-time-consent-screen-cb2b6ca68fdeb1429f98930e3462321e.jpg"},8849:function(e,t,n){t.Z=n.p+"assets/images/oauth_popup-26683535854ffdff3e270e80659e503e.jpg"},343:function(e,t,n){t.Z=n.p+"assets/images/popup_client_id-461f55b40a0a370133d12590acb7cb57.jpg"},9178:function(e,t,n){t.Z=n.p+"assets/images/scopes_meta-api-a069fd231cb2f5daf6d640e17e61084c.jpg"},2988:function(e,t,n){t.Z=n.p+"assets/images/search_api-fc826e6708ec8998c719e986cb1f4166.jpg"},2510:function(e,t,n){t.Z=n.p+"assets/images/select-project-273cfdb8f5fd661d303ef4e5d68ceb75.jpg"},815:function(e,t,n){t.Z=n.p+"assets/images/select_api-1f4d851b82f2b64d5f9316064d6e4c3b.jpg"},609:function(e,t,n){t.Z=n.p+"assets/images/select_scopes-4bf5e242fd5993dc9e5fa85349c3193a.jpg"},9695:function(e,t,n){t.Z=n.p+"assets/images/url_meta-api-9fef3f6580118e664a89dd6911996b4f.jpg"}}]);