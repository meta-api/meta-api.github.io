"use strict";(self.webpackChunkmeta_api_docs=self.webpackChunkmeta_api_docs||[]).push([[516],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1138:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={id:"editor-overview",title:"Spell's code editor interface"},l=void 0,s={unversionedId:"spell-interface/editor-overview",id:"spell-interface/editor-overview",title:"Spell's code editor interface",description:"At the creation of your account we add a first spell for you. You can create as many as you want from the Spell page",source:"@site/docs/spell-interface/2-editor-overview.md",sourceDirName:"spell-interface",slug:"/spell-interface/editor-overview",permalink:"/docs/spell-interface/editor-overview",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"editor-overview",title:"Spell's code editor interface"},sidebar:"mySidebar",previous:{title:"Wizard for creating a Spell",permalink:"/docs/spell-interface/wizard"},next:{title:"Testing Spells",permalink:"/docs/spell-interface/testing"}},p=[{value:"Manage your connectors",id:"manage-your-connectors",children:[],level:3},{value:"Information",id:"information",children:[{value:"Dependencies",id:"dependencies",children:[],level:3},{value:"Code Interface",id:"code-interface",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At the creation of your account we add a first spell for you. You can create as many as you want from the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.meta-api.io/spells"},"Spell page")),(0,o.kt)("p",null,"On the left side you can see all connectors used for the current spell."),(0,o.kt)("p",null,"In the center you will be able to ",(0,o.kt)("a",{parentName:"p",href:"testing"},"test your script"),", manage node dependencies, ",(0,o.kt)("a",{parentName:"p",href:"/docs/deployment/versions"},"releases")," and change information"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Spell Interface",src:n(3761).Z})),(0,o.kt)("h3",{id:"manage-your-connectors"},"Manage your connectors"),(0,o.kt)("p",null,"Once you have ",(0,o.kt)("a",{target:"_blank",href:n(389).Z},"added your connectors"),", you can configure it in the center of the screen to set up authentication, parameters and variables."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Connectors list",src:n(4371).Z})),(0,o.kt)("p",null,"Your connector is available as a variable in the editor (",(0,o.kt)("inlineCode",{parentName:"p"},"tmdbResult")," in this example), do not change it or you will not be able to access it."),(0,o.kt)("h2",{id:"information"},"Information"),(0,o.kt)("p",null,"In this page you can find statistics on your spell usage and manage versions."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Informations",src:n(3885).Z})),(0,o.kt)("p",null,"You can change at anytime your spell name and description of your spell in Spell settings."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Informations",src:n(1054).Z})),(0,o.kt)("h3",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"You can add as much dependencies as you want from the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM repository"),". This is the code equivalent of "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"}," const axios = require('axios');\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dependencies",src:n(4385).Z})),(0,o.kt)("p",null,"An alias is the name for the package inside your code. Call the library by this name."),(0,o.kt)("h3",{id:"code-interface"},"Code Interface"),(0,o.kt)("p",null,"You can code in Javascript or in TypeScript (recommended).\nYour spell must always end with a return, usually an object that will be transformed to JSON when called with an HTTP request."),(0,o.kt)("p",null,"A full autocomplete is available in the code interface for javascript methods, your connectors responses and node dependencies."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Autocomplete",src:n(5365).Z})))}d.isMDXComponent=!0},389:function(e,t,n){t.Z=n.p+"assets/files/find_connector-6e37c48a17faaeb755d7c291da8b7929.png"},5365:function(e,t,n){t.Z=n.p+"assets/images/autocomplete-528c4bb5db60ecb85fce8dba675c03dd.png"},4371:function(e,t,n){t.Z=n.p+"assets/images/connectors_list-6490c02ce88816007e9de662853b68c9.png"},4385:function(e,t,n){t.Z=n.p+"assets/images/dependencies-dc3dbd58044d8f5d88158d502e0ae859.png"},3885:function(e,t,n){t.Z=n.p+"assets/images/spell_detail-d6f0b66497b78b672ddb24d97ffe5730.png"},3761:function(e,t,n){t.Z=n.p+"assets/images/spell_first_screen-6b7a0cd61091eddde98e47bc679bca8b.png"},1054:function(e,t,n){t.Z=n.p+"assets/images/spell_sittings-675a4daaf9b134352f31952e56674d20.png"}}]);