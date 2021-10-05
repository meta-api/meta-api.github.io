"use strict";(self.webpackChunkmeta_api_docs=self.webpackChunkmeta_api_docs||[]).push([[323],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),l=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,d=p["".concat(u,".").concat(h)]||p[h]||f[h]||o;return n?i.createElement(d,a(a({ref:t},s),{},{components:n})):i.createElement(d,a({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},699:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],c={id:"configure-authentication",title:"Configure Connectors' authentication"},u=void 0,l={unversionedId:"connectors/configure-authentication",id:"connectors/configure-authentication",isDocsHomePage:!1,title:"Configure Connectors' authentication",description:"Overview",source:"@site/docs/connectors/3-configure-authentication.md",sourceDirName:"connectors",slug:"/connectors/configure-authentication",permalink:"/docs/connectors/configure-authentication",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"configure-authentication",title:"Configure Connectors' authentication"},sidebar:"mySidebar",previous:{title:"Use a Spell's variable in a Connector",permalink:"/docs/connectors/use-variable-spell"},next:{title:"Use dynamic profiles for OAuth",permalink:"/docs/connectors/dynamic-oauth-profiles"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Basic authentification",id:"basic-authentification",children:[]},{value:"Token Authentification",id:"token-authentification",children:[]},{value:"OAuth Authentification",id:"oauth-authentification",children:[]}],f={toc:s};function p(e){var t=e.components,c=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"There are several ways to identify with an API: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Basic authentication, you don't need to authenticate yourself. "),(0,o.kt)("li",{parentName:"ul"},"Authentication via a token, you need a key provided by the API and integrated in the connector configurations. "),(0,o.kt)("li",{parentName:"ul"},"OAuth authentication, a stricter configuration is required by the API to provide several parameters.")),(0,o.kt)("h2",{id:"basic-authentification"},"Basic authentification"),(0,o.kt)("p",null,"You don't have to give any parameters, you can use the API without any problem ! "),(0,o.kt)("h2",{id:"token-authentification"},"Token Authentification"),(0,o.kt)("p",null,"For Token authentication you need a key provided by the API provider, here is an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.meta-api.io/docs/getting-started/example-hello-world#configure-tmdb-authentication"},"example where we get a key for the TMDB API"),".\nAfter retrieving the api key, we create a new authentication account in which we integrate the API key of the connector. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create authentification account",src:n(7632).Z})," "),(0,o.kt)("h2",{id:"oauth-authentification"},"OAuth Authentification"),(0,o.kt)("p",null,"OAuth authentication is different because it requires more parameters to be filled in, but its configuration is similar to that of Token authentication. An example is available in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.meta-api.io/docs/getting-started/example-hello-world/#configure-slack-oauth-authentication"},"Slack API integration"),".\nAs for the authentication by token one creates a new account of authentification and one fills the fields necessary to the configuration of the account. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create authentification account",src:n(8280).Z})))}p.isMDXComponent=!0},8280:function(e,t,n){t.Z=n.p+"assets/images/authentification_Oauth-90cd6fb3303e182c4b126124a591195c.png"},7632:function(e,t,n){t.Z=n.p+"assets/images/create_authentification_account-4be7d426de444bb079e4107f2f6ba047.png"}}]);