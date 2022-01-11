"use strict";(self.webpackChunkmeta_api_docs=self.webpackChunkmeta_api_docs||[]).push([[483],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,h=d["".concat(u,".").concat(f)]||d[f]||c[f]||o;return n?i.createElement(h,l(l({ref:t},p),{},{components:n})):i.createElement(h,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3184:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],r={id:"oauth-public",title:"OAuth public"},u=void 0,s={unversionedId:"guides/oauth-public",id:"guides/oauth-public",title:"OAuth public",description:"Authentication profiles",source:"@site/docs/guides/7-oauth-public.md",sourceDirName:"guides",slug:"/guides/oauth-public",permalink:"/docs/guides/oauth-public",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"oauth-public",title:"OAuth public"},sidebar:"mySidebar",previous:{title:"Connectors' authentication",permalink:"/docs/guides/connectors-authentication"},next:{title:"Generate a file from a Spell",permalink:"/docs/guides/file-output-spell"}},p=[{value:"Authentication profiles",id:"authentication-profiles",children:[],level:3},{value:"Identifier management",id:"identifier-management",children:[],level:3},{value:"Creating an OAuth login button",id:"creating-an-oauth-login-button",children:[],level:3},{value:"Using an authentication profile in a Spell",id:"using-an-authentication-profile-in-a-spell",children:[],level:3},{value:"Endpoint to manage profiles",id:"endpoint-to-manage-profiles",children:[{value:"Retrieve profiles",id:"retrieve-profiles",children:[],level:4},{value:"Delete profiles",id:"delete-profiles",children:[],level:4}],level:3}],c={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"authentication-profiles"},"Authentication profiles"),(0,o.kt)("p",null,"OAuth authentication accounts are capable of handling multiple profiles."),(0,o.kt)("p",null,"Once an authorization has been given, the account will appear in the list of profiles on the account configuration page"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"./assets/oauth-public/Untitled.png",src:n(4164).Z})),(0,o.kt)("p",null,"We can see that this OAuth configuration contains an active profile"),(0,o.kt)("p",null,"If you have authorized several accounts, you will see the different accounts appear in the list (after refreshing the page):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"./assets/oauth-public/Untitled1.png",src:n(7040).Z})),(0,o.kt)("p",null,"It is possible to delete these profiles or to change the default account."),(0,o.kt)("p",null,"This default account will be used if no authentication profile is specified when calling the connector (details below)."),(0,o.kt)("p",null,"\u26a0\ufe0f If a profile is deleted, it will be necessary to redo the authentication process for that profile."),(0,o.kt)("h3",{id:"identifier-management"},"Identifier management"),(0,o.kt)("p",null,"Connector credentials are managed in three different ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the authentication API supports OpenID, this identifier will be retrieved and associated with the account. In case of manual renewal of the account, the profile will not be duplicated."),(0,o.kt)("li",{parentName:"ul"},"If you have specified a custom ID (via the OAuth login button), it will be used. This method is very convenient if you want to use a custom ID like an email address or an ID from your own database."),(0,o.kt)("li",{parentName:"ul"},"Otherwise, an UUID type identifier will be automatically assigned (ex: ",(0,o.kt)("inlineCode",{parentName:"li"},"b5639e9a-c606-4f0d-8947-96a5360a1cd4"),"). \u26a0\ufe0f If this profile is reauthorized, it will be at risk of being duplicated.")),(0,o.kt)("h3",{id:"creating-an-oauth-login-button"},"Creating an OAuth login button"),(0,o.kt)("p",null,"At the bottom of the OAuth configuration window, a drop-down panel provides instructions on how to create your own OAuth login button for your site: "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"./assets/oauth-public/Untitled2.png",src:n(4470).Z})),(0,o.kt)("p",null,"The code displayed will be automatically customized according to your account."),(0,o.kt)("p",null,"You can use the example code or create your own button."),(0,o.kt)("p",null,"The classic way is to open in a new window the URL provided."),(0,o.kt)("p",null,"\u26a0\ufe0f If you are using an embedded view or popup on your site or an iframe, this can cause security issues with some APIs."),(0,o.kt)("p",null,"\u26a0\ufe0f Remember to customize or remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," parameter in the URL."),(0,o.kt)("h3",{id:"using-an-authentication-profile-in-a-spell"},"Using an authentication profile in a Spell"),(0,o.kt)("p",null,"When you want to use a particular profile in a connector in your Spell, simply specify the account to use via the account configuration interface."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"OAuth Profile Interface",src:n(4616).Z})),(0,o.kt)("p",null,"If no profile is specified when calling the connector, then the profile defined by default in the OAuth configuration will be used."),(0,o.kt)("p",null,"It is also possible to call a connector programmatically by using the variable system in the connector code."),(0,o.kt)("p",null,"To do this, declare a variable in the code that will carry the Oauth profile ID."),(0,o.kt)("p",null,"Then, click on the button to select your variable, the OAuth profile will be called dynamically."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"OAuth Profile Variable",src:n(6651).Z})),(0,o.kt)("h3",{id:"endpoint-to-manage-profiles"},"Endpoint to manage profiles"),(0,o.kt)("h4",{id:"retrieve-profiles"},"Retrieve profiles"),(0,o.kt)("p",null,"It is possible to retrieve the list of saved profiles via the following endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"GET https://api.meta-api.io/api/clients/:CLIENT_ID/securities/:AUTH_ACCOUNT_ID/profiles\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CLIENT_ID")," : client identifier"),(0,o.kt)("p",null,"AUTH_ACCOUNT_ID` : identifier of the authentication account (present on the list of authentication accounts)"),(0,o.kt)("p",null,"Authentication can be done either via API key (put ",(0,o.kt)("inlineCode",{parentName:"p"},"apikey")," with the API key in the header, recommended method), or via the JWT key (put in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header). All active API keys will be valid."),(0,o.kt)("p",null,"This will give the list of profiles with some metadata: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": "https://login.salesforce.com/id/00D2X000003DmUAK/0052X0008NasQAC",\n        "created_at": "2020-06-16T10:35:30.605Z",\n        "updated_at": "2020-06-16T10:35:30.605Z",\n        "scope": "openid api",\n        "expiration": "2020-06-16T11:35:30.601Z",\n        "hasRefreshToken": true,\n        "isDefault": false\n    },\n    {\n        "id": "https://login.salesforce.com/id/00D2X000003DmUAK/0052X0008NasQAC",\n        "created_at": "2020-06-16T10:38:06.220Z",\n        "updated_at": "2020-06-16T10:38:06.220Z",\n        "scope": "openid api",\n        "expiration": "2020-06-16T11:35:30.601Z",\n        "hasRefreshToken": true,\n        "isDefault": false\n    },\n    {\n        "id": "test@test.com",\n        "created_at": "2020-06-16T10:38:47.154Z",\n        "updated_at": "2020-06-16T10:39:16.949Z",\n        "scope": "openid api",\n        "expiration": "2020-06-16T11:35:30.601Z",\n        "hasRefreshToken": true,\n        "isDefault": true\n    }\n]\n')),(0,o.kt)("p",null,"It is also possible to add a query param ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," to filter only one profile."),(0,o.kt)("p",null,"Example of a query : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'GET https://api.meta-api.io/api/clients/:CLIENT_ID/securities/:AUTH_ACCOUNT_ID/profiles?id="test@test.com"\n')),(0,o.kt)("p",null,"R\xe9ponse de r\xe9ponse :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": "test@test.com",\n        "created_at": "2020-06-16T10:38:47.154Z",\n        "updated_at": "2020-06-16T10:39:16.949Z",\n        "scope": "openid api",\n        "expiration": "2020-06-16T11:35:30.601Z",\n        "hasRefreshToken": false,\n        "isDefault": true\n    }\n]\n')),(0,o.kt)("h4",{id:"delete-profiles"},"Delete profiles"),(0,o.kt)("p",null,"It is possible to delete profiles via the following endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"DELETE https://api.meta-api.io/api/clients/:CLIENT_ID/securities/:AUTH_ACCOUNT_ID/profiles/:PROFILE_ID\n")),(0,o.kt)("p",null,"Authentication is done, like the ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," endpoint, via the ",(0,o.kt)("inlineCode",{parentName:"p"},"apikey")," key in the header."))}d.isMDXComponent=!0},4164:function(e,t,n){t.Z=n.p+"assets/images/configOauth-7717fc2de0a44e6567c35fd7a64a5169.png"},4470:function(e,t,n){t.Z=n.p+"assets/images/integration_code-2787cf4b302ad7204bf8840328894375.png"},4616:function(e,t,n){t.Z=n.p+"assets/images/oauth-profile-gui-099468e92b8a922759d9bc5874c1c085.png"},6651:function(e,t,n){t.Z=n.p+"assets/images/oauth-profile-var-1987781bb7422228c66e6b32196dc089.png"},7040:function(e,t,n){t.Z=n.p+"assets/images/profileOauth-c78d7c34f8152c4d45a09c7973fe438c.png"}}]);