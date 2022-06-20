"use strict";(self.webpackChunkmeta_api_docs=self.webpackChunkmeta_api_docs||[]).push([[517],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return v}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},A=Object.keys(e);for(n=0;n<A.length;n++)r=A[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(n=0;n<A.length;n++)r=A[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,A=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),c=i(r),v=a,f=c["".concat(p,".").concat(v)]||c[v]||s[v]||A;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var A=r.length,o=new Array(A);o[0]=c;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<A;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6404:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return s}});var n=r(7462),a=r(3366),A=(r(7294),r(3905)),o=["components"],u={id:"manage-private-api",title:"Integrate and manage a private API"},p=void 0,i={unversionedId:"api-catalog/manage-private-api",id:"api-catalog/manage-private-api",title:"Integrate and manage a private API",description:"We provide more than 100 APIs to connect with your spells, however you may also need to use your own private APIs.",source:"@site/docs/api-catalog/1-manage-private-api.md",sourceDirName:"api-catalog",slug:"/api-catalog/manage-private-api",permalink:"/docs/api-catalog/manage-private-api",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"manage-private-api",title:"Integrate and manage a private API"},sidebar:"mySidebar",previous:{title:'How to fix "408 Timeout error" in your Spell?',permalink:"/docs/deployment/timeout-error"},next:{title:"API documentation and how to consult it",permalink:"/docs/api-catalog/consult-documentation"}},l={},s=[{value:"Add an API",id:"add-an-api",level:2},{value:"Update your API",id:"update-your-api",level:2},{value:"Remove your API",id:"remove-your-api",level:2}],c={toc:s};function v(e){var t=e.components,u=(0,a.Z)(e,o);return(0,A.kt)("wrapper",(0,n.Z)({},c,u,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("p",null,"We provide more than 100 APIs to connect with your spells, however you may also need to use your own private APIs."),(0,A.kt)("p",null,"Good news! You can add as much as you want in a few easy steps."),(0,A.kt)("h2",{id:"add-an-api"},"Add an API"),(0,A.kt)("p",null,"In the left sidebar of the ",(0,A.kt)("a",{parentName:"p",href:"https://dashboard.meta-api.io/"},"dashboard")," you can add your API by clicking on ",(0,A.kt)("strong",{parentName:"p"},"Connectors")," and press the button ",(0,A.kt)("strong",{parentName:"p"},"Create your connector")," in the top right corner."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Add connector",src:r(3829).Z,width:"1903",height:"279"})),(0,A.kt)("p",null,"You must fill the following required fields :"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"Title : 3 words or fewer to recognize your API"),(0,A.kt)("li",{parentName:"ul"},"Provider : domain like meta-api.io"),(0,A.kt)("li",{parentName:"ul"},"Description : short sentences summarizing the purpose of your API")),(0,A.kt)("p",null,"Then press the save button in the top right corner."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Empty connector fields",src:r(1791).Z,width:"856",height:"754"})),(0,A.kt)("p",null,"Once saved, you can upload your YAML or JSON file in the Open API format version 2 or ",(0,A.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md"},"3"),"."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Upload YAML",src:r(466).Z,width:"1111",height:"87"})),(0,A.kt)("p",null,"If your API is not available in the OAS format, you can do it with a tool like ",(0,A.kt)("a",{parentName:"p",href:"https://stoplight.io/"},"Stoplight")),(0,A.kt)("p",null,"For the best use cases and if you plan to ",(0,A.kt)("a",{parentName:"p",href:"make-private-api-public"},"make your API public"),", we advise you to respect OAS conventions in your specification to provide the ",(0,A.kt)("a",{parentName:"p",href:"consult-documentation"},"best documentation possible"),"."),(0,A.kt)("h2",{id:"update-your-api"},"Update your API"),(0,A.kt)("p",null,"From the list of connectors, you can search for your own and click on it to update it. "),(0,A.kt)("p",null,"All fields and the OAS file can be updated at any time."),(0,A.kt)("p",null,"You can also upload a new JSON or YAML file to update the whole connector"),(0,A.kt)("h2",{id:"remove-your-api"},"Remove your API"),(0,A.kt)("p",null,"To delete your API, you just need to click on the ",(0,A.kt)("strong",{parentName:"p"},"Delete")," button available in the API settings."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Delete API",src:r(5681).Z,width:"1830",height:"684"})))}v.isMDXComponent=!0},3829:function(e,t,r){t.Z=r.p+"assets/images/api_add_connector-3ab79d74cfdbe1198db24a63436d607f.png"},1791:function(e,t,r){t.Z=r.p+"assets/images/connector_add_empty-54fe4e46b6fff0483f776a33cce17964.png"},5681:function(e,t,r){t.Z=r.p+"assets/images/connector_delete-b3a65c6cebe95eeaba63559489731135.png"},466:function(e,t){t.Z="data:image/png;base64,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"}}]);