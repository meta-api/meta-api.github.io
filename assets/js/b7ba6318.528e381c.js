"use strict";(self.webpackChunkmeta_api_docs=self.webpackChunkmeta_api_docs||[]).push([[4108],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(f,r(r({ref:t},p),{},{components:n})):o.createElement(f,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},601:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],l={id:"sdk-unsupported-api",title:"Using SDK with unsupported API"},s=void 0,c={unversionedId:"examples/sdk-unsupported-api",id:"examples/sdk-unsupported-api",title:"Using SDK with unsupported API",description:"Using a NodeJS SDK to connect to an API",source:"@site/docs/examples/3-sdk-unsupported-api.md",sourceDirName:"examples",slug:"/examples/sdk-unsupported-api",permalink:"/docs/examples/sdk-unsupported-api",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"sdk-unsupported-api",title:"Using SDK with unsupported API"},sidebar:"mySidebar",previous:{title:"Manually request an API inside your code with axios",permalink:"/docs/examples/manual-request"},next:{title:"Video tutorial: Uptime Robot x Jira",permalink:"/docs/examples/video-tuto-uptime-robot-jira"}},p={},d=[{value:"Using a NodeJS SDK to connect to an API",id:"using-a-nodejs-sdk-to-connect-to-an-api",level:2},{value:"Where can I find a NodeJS SDK",id:"where-can-i-find-a-nodejs-sdk",level:2},{value:"Example with WooCommerce",id:"example-with-woocommerce",level:2}],m={toc:d};function u(e){var t=e.components,l=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"using-a-nodejs-sdk-to-connect-to-an-api"},"Using a NodeJS SDK to connect to an API"),(0,a.kt)("p",null,"Some APIs don't have a public OpenAPI specification file or their API can be difficult to reimplement in OpenAPI."),(0,a.kt)("p",null,"One solution is to use their NodeJS or JavaScript SDK inside your Spell. "),(0,a.kt)("p",null,"This usage come with some limitations: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You won't be able to see the connectors performances and error rate inside your logs"),(0,a.kt)("li",{parentName:"ul"},"You'll have to manage manually errors if you want detailed information")),(0,a.kt)("p",null,"But your Spell will still have global monitoring and you can mix NodeJS SDK with our connectors code."),(0,a.kt)("h2",{id:"where-can-i-find-a-nodejs-sdk"},"Where can I find a NodeJS SDK"),(0,a.kt)("p",null,"First, you can check on ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM")," to see if an SDK exist. We recommend you to only use official SDK for the best support."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Shopify NPM search",src:n(5018).Z,width:"1919",height:"1081"})),(0,a.kt)("p",null,"We can see inside the detailed page that this SDK will allow access to the REST and GraphQL API and manage authentication."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Shopify NPM detail page",src:n(4630).Z,width:"1919",height:"1077"})),(0,a.kt)("p",null,"You can also see references for official package inside the vendor's developer page. Look for ",(0,a.kt)("inlineCode",{parentName:"p"},"SDK"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Libraries")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeJS client"),"."),(0,a.kt)("p",null,"Here is an example with WooCommerce:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WooCommerce Libraries",src:n(9903).Z,width:"1918",height:"1077"})),(0,a.kt)("h2",{id:"example-with-woocommerce"},"Example with WooCommerce"),(0,a.kt)("p",null,"Once we have the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/woocommerce-api"},"official NodeJS SDK"),", we will add it as a dependency inside our Spell. You can consult ",(0,a.kt)("a",{parentName:"p",href:"/docs/spell/using-dependencies/import-package"},"this guide")," if you need more information."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WooCommerce dependency",src:n(5044).Z,width:"1919",height:"1081"})),(0,a.kt)("p",null,"I've changed the default ",(0,a.kt)("em",{parentName:"p"},"alias")," for a simple use inside my Spell."),(0,a.kt)("p",null,"Now I'm following the WooCommerce SDK's documentation to know how to use it. The first thing to do is to initialize the WooCommerce client.",(0,a.kt)("br",{parentName:"p"}),"\n","I copy and paste the code from the doc and make some edit to match my configuration"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Doc initialization",src:n(381).Z,width:"1919",height:"1079"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WooCommerce init in Spell",src:n(7435).Z,width:"1919",height:"1079"})),(0,a.kt)("p",null,"Some changes made: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"I don't have to do the ",(0,a.kt)("inlineCode",{parentName:"li"},"require")," myself: Meta API do it automatically for me."),(0,a.kt)("li",{parentName:"ul"},"I've replaced ",(0,a.kt)("inlineCode",{parentName:"li"},"var")," by ",(0,a.kt)("inlineCode",{parentName:"li"},"const")," because we should ",(0,a.kt)("a",{parentName:"li",href:"https://medium.com/@codingsam/awesome-javascript-no-more-var-working-title-999428999994"},"not use var anymore")),(0,a.kt)("li",{parentName:"ul"},"I've named my client ",(0,a.kt)("inlineCode",{parentName:"li"},"wcClient")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"WooCommerce")),(0,a.kt)("li",{parentName:"ul"},"I've match the name of WooCommerce initialization ",(0,a.kt)("inlineCode",{parentName:"li"},"woocommerce")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"WooCommerceAPI")," to match the alias")),(0,a.kt)("p",null,"Of course, I'll also have to configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," and my consumer ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"secret")," in order to use it."),(0,a.kt)("p",null,'Next, I can see inside the documentation that this SDK will expose "promified" method to consume this API. That\'s perfect!'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WooCommerce&#39;s methods doc",src:n(8171).Z,width:"1919",height:"1081"})),(0,a.kt)("p",null,"So I'll use these methods like this inside Meta API, using ",(0,a.kt)("inlineCode",{parentName:"p"},"async / await"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WooCommerce&#39;s methods in Spell",src:n(5197).Z,width:"1919",height:"1079"})),(0,a.kt)("p",null,"I can now use the WooCommerce SDK like I want and connect it to others APIs."))}u.isMDXComponent=!0},4630:function(e,t,n){t.Z=n.p+"assets/images/shopify-example-detail-86b1d632a6fffe4a2fb3aaade384009e.jpg"},5018:function(e,t,n){t.Z=n.p+"assets/images/shopify-example-9d3d14e7050a31f98eafd47da8655f1e.jpg"},8171:function(e,t,n){t.Z=n.p+"assets/images/wc-doc-prom-14d80a883e2d3edefa6516f3d794249c.jpg"},7435:function(e,t,n){t.Z=n.p+"assets/images/wc-init-spell-b569809bc38117f7d4565c0c32d49807.jpg"},5197:function(e,t,n){t.Z=n.p+"assets/images/wc-method-spell-a6906b614ed4c353cdaea291408187ec.jpg"},381:function(e,t,n){t.Z=n.p+"assets/images/wc-sdk-doc-init-4a387e0f60a3f7d38c04f5f2c70d89b3.jpg"},5044:function(e,t,n){t.Z=n.p+"assets/images/woocommerce-add-dep-e23808ba6eef14a1654c9131e630bf36.jpg"},9903:function(e,t,n){t.Z=n.p+"assets/images/woocommerce-librairies-8d74dae0ac152a07fe9dfab343de5c2c.jpg"}}]);