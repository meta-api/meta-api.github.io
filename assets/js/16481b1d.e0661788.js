"use strict";(self.webpackChunkmeta_api_docs=self.webpackChunkmeta_api_docs||[]).push([[6187],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,f=d["".concat(p,".").concat(h)]||d[h]||c[h]||i;return n?o.createElement(f,l(l({ref:t},s),{},{components:n})):o.createElement(f,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2104:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return c}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],a={id:"use-webhook",title:"Trigger your Spell with a Webhook"},p=void 0,u={unversionedId:"spell/using-spell/use-webhook",id:"spell/using-spell/use-webhook",title:"Trigger your Spell with a Webhook",description:"Retrieve the webhook URL for development",source:"@site/docs/spell/using-spell/3-webhook-usage.md",sourceDirName:"spell/using-spell",slug:"/spell/using-spell/use-webhook",permalink:"/docs/spell/using-spell/use-webhook",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"use-webhook",title:"Trigger your Spell with a Webhook"},sidebar:"mySidebar",previous:{title:"Publish a Spell to production",permalink:"/docs/spell/using-spell/publish-spell-production"},next:{title:"Schedule a Spell",permalink:"/docs/spell/using-spell/schedule-spell"}},s={},c=[{value:"Retrieve the webhook URL for development",id:"retrieve-the-webhook-url-for-development",level:2},{value:"Where to find all development and production URL?",id:"where-to-find-all-development-and-production-url",level:2},{value:"Using webhook with form data",id:"using-webhook-with-form-data",level:2}],d={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"retrieve-the-webhook-url-for-development"},"Retrieve the webhook URL for development"),(0,i.kt)("p",null,"When you create a new Spell using our assistant, you'll see a popup with an option to set up the webhook"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Webhook option",src:n(9064).Z,width:"1920",height:"1078"})),(0,i.kt)("p",null,"Now, retrieve your webhook URL and configure it inside your service."),(0,i.kt)("p",null,"You can click on the ",(0,i.kt)("strong",{parentName:"p"},"Test trigger")," button to verify if your Spell has received the webhook payload."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Webhook URL and button",src:n(8492).Z,width:"1920",height:"1079"})),(0,i.kt)("p",null,"The payload will be automatically set up and all data are accessible using the ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," variable."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This is your ",(0,i.kt)("strong",{parentName:"p"},"development URL"),"! Once on production, you'll have to update it to your production URL.")),(0,i.kt)("h2",{id:"where-to-find-all-development-and-production-url"},"Where to find all development and production URL?"),(0,i.kt)("p",null,"If you need to retrieve both your development and production URL, you can access them inside the ",(0,i.kt)("strong",{parentName:"p"},"Versioning")," tab on your Spell's detail page"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Spell Versioning tab",src:n(5671).Z,width:"1920",height:"1079"})),(0,i.kt)("h2",{id:"using-webhook-with-form-data"},"Using webhook with form data"),(0,i.kt)("p",null,"Some services send webhooks using a ",(0,i.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," encoding, rather than JSON. The platform will process it and transform them as a JSON under the ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," variable."),(0,i.kt)("p",null,"If some files has been sent using the ",(0,i.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," format, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer")," version of these files will be accessible under ",(0,i.kt)("inlineCode",{parentName:"p"},"params._files")," automatically."))}h.isMDXComponent=!0},5671:function(e,t,n){t.Z=n.p+"assets/images/versioning-tab-18ce197a834fc2e48480049cc255b470.jpg"},9064:function(e,t,n){t.Z=n.p+"assets/images/webhook-option-0062bc0325ec0dce19e1214242216799.jpg"},8492:function(e,t,n){t.Z=n.p+"assets/images/webhook-url-test-b3a59097099f3d2cc26b11e68dbe577b.jpg"}}]);