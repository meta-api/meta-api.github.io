"use strict";(self.webpackChunkmeta_api_docs=self.webpackChunkmeta_api_docs||[]).push([[7180],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5929:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={id:"make-api-public",title:"Making your API public"},u=void 0,l={unversionedId:"api-connectors/make-api-public",id:"api-connectors/make-api-public",title:"Making your API public",description:"Making sure your API is working",source:"@site/docs/api-connectors/make-api-public.md",sourceDirName:"api-connectors",slug:"/api-connectors/make-api-public",permalink:"/docs/api-connectors/make-api-public",tags:[],version:"current",frontMatter:{id:"make-api-public",title:"Making your API public"},sidebar:"mySidebar",previous:{title:"Build OAS from Postman collection",permalink:"/docs/api-connectors/build-oas/build-from-postman-collection"},next:{title:"Security",permalink:"/docs/category/security"}},p={},s=[{value:"Making sure your API is working",id:"making-sure-your-api-is-working",level:2},{value:"Add correct information",id:"add-correct-information",level:2},{value:"Fill helper to authenticate",id:"fill-helper-to-authenticate",level:2},{value:"Request your API to be public",id:"request-your-api-to-be-public",level:2}],d={toc:s};function f(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"making-sure-your-api-is-working"},"Making sure your API is working"),(0,i.kt)("p",null,"Before making your API public, you should ensure your API is working."),(0,i.kt)("p",null,"You can create a Spell inside Meta API and test the authentication and some connectors."),(0,i.kt)("p",null,"Bonus: you can check is the connector's autocompletion is working well inside the code editor. That's a game changer for developers."),(0,i.kt)("h2",{id:"add-correct-information"},"Add correct information"),(0,i.kt)("p",null,"A well describe API is an API that can be easily found :)"),(0,i.kt)("p",null,"Go inside the catalog and open your private API."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Check your private API",src:r(1374).Z,width:"1919",height:"1078"})),(0,i.kt)("p",null,"You should check all the metadata fields and add a link to a logo. You can use the ",(0,i.kt)("a",{parentName:"p",href:"https://imgbb.com"},"imgbb")," service to host your images if needed."),(0,i.kt)("h2",{id:"fill-helper-to-authenticate"},"Fill helper to authenticate"),(0,i.kt)("p",null,"Fill the ",(0,i.kt)("strong",{parentName:"p"},"Authentication help")," field to add some guidance for users if your API need specific parameters or actions."),(0,i.kt)("p",null,"You can, for example, add a guide on how you can retrieve credentials for your API."),(0,i.kt)("h2",{id:"request-your-api-to-be-public"},"Request your API to be public"),(0,i.kt)("p",null,"Once everything is verified, click on ",(0,i.kt)("strong",{parentName:"p"},"Submit your API to the public catalog"),". Our team will receive a notification and will check your API."))}f.isMDXComponent=!0},1374:function(e,t,r){t.Z=r.p+"assets/images/private-api-desc-4688ba266978886e67107af6fe12320b.jpg"}}]);