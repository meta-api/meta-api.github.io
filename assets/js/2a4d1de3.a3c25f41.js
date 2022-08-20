"use strict";(self.webpackChunkmeta_api_docs=self.webpackChunkmeta_api_docs||[]).push([[7555],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(h,r(r({ref:t},s),{},{components:n})):o.createElement(h,r({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9736:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],l={id:"build-from-postman-collection",title:"Build OAS from Postman collection"},p=void 0,c={unversionedId:"api-connectors/build-oas/build-from-postman-collection",id:"api-connectors/build-oas/build-from-postman-collection",title:"Build OAS from Postman collection",description:"Some providers don't provide an OpenAPI specification file but a Postman collection. Maybe you also use a Postman collection for your own APIs.",source:"@site/docs/api-connectors/build-oas/1-build-from-postman-collection.md",sourceDirName:"api-connectors/build-oas",slug:"/api-connectors/build-oas/build-from-postman-collection",permalink:"/docs/api-connectors/build-oas/build-from-postman-collection",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"build-from-postman-collection",title:"Build OAS from Postman collection"},sidebar:"mySidebar",previous:{title:"Building an OAS",permalink:"/docs/category/building-an-oas"},next:{title:"Making your API public",permalink:"/docs/api-connectors/make-api-public"}},s={},u=[{value:"Step 1: export the Postman collection",id:"step-1-export-the-postman-collection",level:2},{value:"Step 2: convert the Postman collection",id:"step-2-convert-the-postman-collection",level:2},{value:"Step 3: check authentication on the generated OpenAPI file",id:"step-3-check-authentication-on-the-generated-openapi-file",level:2},{value:"Step 4: import your new API inside Meta API",id:"step-4-import-your-new-api-inside-meta-api",level:2}],m={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Some providers don't provide an OpenAPI specification file but a Postman collection. Maybe you also use a Postman collection for your own APIs."),(0,i.kt)("p",null,"Brace yourself: you can convert them to create a OpenAPI specification file and import your API inside Meta API!"),(0,i.kt)("p",null,"This is a step-by-step guide to help you to convert and import a Postman collection inside Meta API."),(0,i.kt)("h2",{id:"step-1-export-the-postman-collection"},"Step 1: export the Postman collection"),(0,i.kt)("p",null,"For this example, we'll use the ",(0,i.kt)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/5388671/RzfcNs8W"},"SimilarWeb API")," that provide a Postman collection."),(0,i.kt)("p",null,"The first step is to download this collection. If you have a web page from Postman like this, you can click ",(0,i.kt)("strong",{parentName:"p"},"Run in Postman")," to download the collection inside your Postman client (or the web app):"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Run Postman",src:n(4819).Z,width:"1919",height:"1080"})),(0,i.kt)("p",null,"Then, click on the three dot in front of the collection and select ",(0,i.kt)("strong",{parentName:"p"},"Export")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Export postman",src:n(1863).Z,width:"1918",height:"1080"})),(0,i.kt)("p",null,"Select the recommended version and click on ",(0,i.kt)("strong",{parentName:"p"},"Export"),". You will be able to save the file on your computer."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Export postman2",src:n(4414).Z,width:"1919",height:"1079"})),(0,i.kt)("h2",{id:"step-2-convert-the-postman-collection"},"Step 2: convert the Postman collection"),(0,i.kt)("p",null,"The will the ",(0,i.kt)("a",{parentName:"p",href:"https://www.apimatic.io/transformer/"},"APIMatic Transformer")," tool to convert our Postman collection to an OpenAPI specification file."),(0,i.kt)("p",null,"Click on ",(0,i.kt)("strong",{parentName:"p"},"Convert now")," on their website."),(0,i.kt)("p",null,"You'll have to create a free account on their website to do it."),(0,i.kt)("p",null,"Once on the transformation popup, choose the downloaded Postman collection on your computer, select ",(0,i.kt)("strong",{parentName:"p"},"OpenAPI v3.0 (JSON)")," and click on ",(0,i.kt)("strong",{parentName:"p"},"Convert")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transform Postman collection",src:n(2061).Z,width:"1919",height:"1082"})),(0,i.kt)("p",null,"You may encounter some warning inside the API: you can skip them and click on ",(0,i.kt)("strong",{parentName:"p"},"Proceed")," to download the OpenAPI file."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Skip warnings",src:n(8129).Z,width:"1919",height:"1079"})),(0,i.kt)("p",null,"Now you have an OpenAPI specification file, but we need to check the authentication."),(0,i.kt)("h2",{id:"step-3-check-authentication-on-the-generated-openapi-file"},"Step 3: check authentication on the generated OpenAPI file"),(0,i.kt)("p",null,"Most of the time, the authentication is now configured inside the OpenAPI file, because the transformer can't detect the right authentication method."),(0,i.kt)("p",null,"If you know the OpenAPI standard, you can add the authentication manually to the file (or with your favorite tool), but in this example, we'll use the ",(0,i.kt)("a",{parentName:"p",href:"https://stoplight.io/"},"Stoplight")," app to edit it."),(0,i.kt)("p",null,"You can download it, create a new local project and then import the OpenAPI file."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Import Stoplight",src:n(4960).Z,width:"1918",height:"1079"})),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Since each API is different, the following examples only apply to SimilarWeb.",(0,i.kt)("br",{parentName:"p"}),"\n","But for each APIs, you'll have to configure a ",(0,i.kt)("strong",{parentName:"p"},"Security Schema")," as use this schema in ",(0,i.kt)("strong",{parentName:"p"},"Global Security"))),(0,i.kt)("p",null,"After examining the SimilarWeb API, I figure out that SimilarWeb use an API key as a query params in each endpoint, like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example API Key endpoint",src:n(1200).Z,width:"1917",height:"1080"})),(0,i.kt)("p",null,"So I'll configure a new ",(0,i.kt)("strong",{parentName:"p"},"Security Schemas")," that'll use an API key with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"api_key")," inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," param."),(0,i.kt)("p",null,"And I set this Security Schema as the main one inside ",(0,i.kt)("strong",{parentName:"p"},"Global Security")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configure security schema",src:n(9168).Z,width:"1919",height:"1080"})),(0,i.kt)("p",null,"To make my OpenAPI file cleaner, I've also removed the query parameter referring to the ",(0,i.kt)("inlineCode",{parentName:"p"},"api_key")," on each endpoint."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Delete query param",src:n(3965).Z,width:"1918",height:"1080"})),(0,i.kt)("p",null,"Then, I can export my OpenAPI file from Stoplight by doing a right click on my file and select ",(0,i.kt)("strong",{parentName:"p"},"Export"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Export OAS Stoplight",src:n(4914).Z,width:"1919",height:"1079"})),(0,i.kt)("p",null,"Select the ",(0,i.kt)("strong",{parentName:"p"},"JSON")," format with ",(0,i.kt)("strong",{parentName:"p"},"Bundled")," references and click on ",(0,i.kt)("strong",{parentName:"p"},"Copy to clipboard")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Export OAS Stoplight popup",src:n(1720).Z,width:"1918",height:"1077"})),(0,i.kt)("h2",{id:"step-4-import-your-new-api-inside-meta-api"},"Step 4: import your new API inside Meta API"),(0,i.kt)("p",null,"Go on your Meta API account, select ",(0,i.kt)("strong",{parentName:"p"},"Catalog on API")," on the left menu bar and click on the button ",(0,i.kt)("strong",{parentName:"p"},"Add an API")," on the top right"),(0,i.kt)("p",null,"You can directly paste your OpenAPI specification file inside the ",(0,i.kt)("strong",{parentName:"p"},"Open API Specification or Swagger file")," and it'll fill up all the others fields."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Import OAS in Meta API",src:n(9491).Z,width:"1919",height:"1081"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Select one or more categories")," for your API and then click on the ",(0,i.kt)("strong",{parentName:"p"},"Save")," button"),(0,i.kt)("p",null,"Your API is now ready to use inside Meta API!"))}d.isMDXComponent=!0},9168:function(e,t,n){t.Z=n.p+"assets/images/configure-sec-schema-7ecc45c0cb33b995a31539ef0c95947b.jpg"},3965:function(e,t,n){t.Z=n.p+"assets/images/delete-query-param-9bb67f6595a3e561ec55b5a82db5439b.jpg"},1200:function(e,t,n){t.Z=n.p+"assets/images/example-apikey-endpoint-6ed5a5b9867fbbbda00ff0c497836a47.png"},1863:function(e,t,n){t.Z=n.p+"assets/images/export-postman-42cfd20269ed870599a1c3e0fe474b5c.jpg"},4414:function(e,t,n){t.Z=n.p+"assets/images/export-postman2-ab8808a1fe8c47f0cfd852e73cb18820.jpg"},4914:function(e,t,n){t.Z=n.p+"assets/images/export-stoplight-657185e163184f4a7660396b46caddd0.jpg"},1720:function(e,t,n){t.Z=n.p+"assets/images/export-stoplight2-30f13c68eec2510814923db447231af4.jpg"},9491:function(e,t,n){t.Z=n.p+"assets/images/import-meta-api-451cff4e25af4f398e4b9ea357762915.jpg"},4960:function(e,t,n){t.Z=n.p+"assets/images/import-stoplight-e59987e209b6d045f3acae5edd753bce.jpg"},4819:function(e,t,n){t.Z=n.p+"assets/images/run-postman-cabbe051c024f90b6d3924a07b4c3cf8.jpg"},8129:function(e,t,n){t.Z=n.p+"assets/images/skip-warnings-87b34d51fee982ae04760b071d43d9d5.jpg"},2061:function(e,t,n){t.Z=n.p+"assets/images/transform-collection-97fc5f288de887038c3e82f227c7a0a0.jpg"}}]);