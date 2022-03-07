"use strict";(self.webpackChunkmeta_api_docs=self.webpackChunkmeta_api_docs||[]).push([[798],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),h=l,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1352:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],o={id:"wizard",title:"Wizard for creating a Spell"},c=void 0,s={unversionedId:"spell-interface/wizard",id:"spell-interface/wizard",title:"Wizard for creating a Spell",description:'This, is the new "Wizard" feature which allows the user to be guided through the creation of their Spell. The user will go through several steps in order to build their Spell and be ready to start developing it.',source:"@site/docs/spell-interface/1-wizard.md",sourceDirName:"spell-interface",slug:"/spell-interface/wizard",permalink:"/docs/spell-interface/wizard",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"wizard",title:"Wizard for creating a Spell"},sidebar:"mySidebar",previous:{title:"Example: A gif from a movie",permalink:"/docs/getting-started/example-hello-world"},next:{title:"Spell's code editor interface",permalink:"/docs/spell-interface/editor-overview"}},p=[{value:"Create a new Spell :",id:"create-a-new-spell-",children:[],level:3},{value:"Resume a draft Spell :",id:"resume-a-draft-spell-",children:[],level:3},{value:"Step 1 / 3 :",id:"step-1--3-",children:[{value:"Choose the API (Step 1 / 3) :",id:"choose-the-api-step-1--3-",children:[],level:3},{value:"Choose the Connector (Step 1.1 / 3) :",id:"choose-the-connector-step-11--3-",children:[],level:3},{value:"Selected Connectors (Step 1.2 / 3) :",id:"selected-connectors-step-12--3-",children:[],level:3}],level:2},{value:"Step 2 / 3 :",id:"step-2--3-",children:[{value:"Configure authentications :",id:"configure-authentications-",children:[],level:3}],level:2},{value:"Step 3 / 3 :",id:"step-3--3-",children:[{value:"Spell details :",id:"spell-details-",children:[],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,o=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'This, is the new "Wizard" feature which allows the user to be guided through the creation of their Spell. The user will go through several steps in order to build their Spell and be ready to start developing it.'),(0,r.kt)("h3",{id:"create-a-new-spell-"},"Create a new Spell :"),(0,r.kt)("p",null,'To create a Spell click on "Create a new Spell" available on the "Home" page or on the "Spells" page.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Spell",src:n(7620).Z}),"\n",(0,r.kt)("img",{alt:"Create Spell",src:n(1393).Z})),(0,r.kt)("p",null,"It's also possible to create a new Spell from the connectors catalogue by selecting the API and then the connector you need."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Spell",src:n(5985).Z})),(0,r.kt)("h3",{id:"resume-a-draft-spell-"},"Resume a draft Spell :"),(0,r.kt)("p",null,'When a Spell has been created but has never been "Run", the Spell is then put in "Draft". By clicking on a "Draft" the Spell will redirect the user to the "Selected connectors" step in the Wizard.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Resume draft",src:n(5820).Z})),(0,r.kt)("h2",{id:"step-1--3-"},"Step 1 / 3 :"),(0,r.kt)("p",null,"The first step in creating the Spell is to choose the connectors that we will use in the Spell."),(0,r.kt)("h3",{id:"choose-the-api-step-1--3-"},"Choose the API (Step 1 / 3) :"),(0,r.kt)("p",null,"We start by choosing the first API from the list. A search field is available to find a specific API as well as another field to sort the APIs by category."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"List API",src:n(351).Z})),(0,r.kt)("h3",{id:"choose-the-connector-step-11--3-"},"Choose the Connector (Step 1.1 / 3) :"),(0,r.kt)("p",null,"After selecting the API, the list of API Connectors will be displayed. A search field is available to find the connector to integrate but also a filter by method (GET, POST, DELETE, etc..)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"List Connectors",src:n(7858).Z})),(0,r.kt)("p",null,'On each connector the title and a small description are highlighted but if you want more information a "Show details" button allows you to have more information:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The type of authentication (Api Key, OAuth)"),(0,r.kt)("li",{parentName:"ul"},"The input parameters are sorted by required and show the name of the input, its type and its description.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"List Connectors Details",src:n(9341).Z})),(0,r.kt)("p",null,'When we have our connector we can then click on "Use" to add the connector to our Spell. When the first connector is added, the Spell is created. If we decide to leave the Wizard the created Spell will be integrated in the list of Spells with the tag "Draft".'),(0,r.kt)("h3",{id:"selected-connectors-step-12--3-"},"Selected Connectors (Step 1.2 / 3) :"),(0,r.kt)("p",null,'Here is a summary of the connectors that are integrated into the Spell. A "Delete" button on each connector allows you to delete a connector integrated into the Spell. If you want to add a new connector, an "Add" button at the end of the list of connectors allows you to find the list of APIs.'),(0,r.kt)("p",null,'When all the necessary connectors are added you can continue the steps by clicking on the "Configure X Connectors" button.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"List Connectors selected",src:n(1975).Z})),(0,r.kt)("h2",{id:"step-2--3-"},"Step 2 / 3 :"),(0,r.kt)("h3",{id:"configure-authentications-"},"Configure authentications :"),(0,r.kt)("p",null,'The second step allows the user to configure authentication for each connector. Find the list of connectors and specify if an authentication is needed. If authentication is required a button is available to configure the authentication of the connector.\nThe "Authenticate" button has two states:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Icon "Warning" means that the connector has no authentication or the authentication is not complete ',(0,r.kt)("strong",{parentName:"li"},"( Complete doesn't mean valid! )"),"."),(0,r.kt)("li",{parentName:"ul"},'Icon "Check" means the connector has an authentication that is complete.')),(0,r.kt)("p",null,'When the authentications are configured you can go to the next step by clicking on "Save and continue" or if you have forgotten a connector to add you can go back to the previous page by clicking on "Back to selection".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"List auth",src:n(9469).Z})),(0,r.kt)("h2",{id:"step-3--3-"},"Step 3 / 3 :"),(0,r.kt)("h3",{id:"spell-details-"},"Spell details :"),(0,r.kt)("p",null,"In this last step, we configure our Spell with a title and a description. Both fields are pre-filled with the APIs integration in the Spell. This information can be changed later in the Spell details."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Spell details",src:n(1733).Z})),(0,r.kt)("p",null,'To finish this Wizard we click on "Create your Spell" which redirects the user to the Spell editor and can begin development.'))}u.isMDXComponent=!0},5985:function(e,t,n){t.Z=n.p+"assets/images/create-spell-catalog-0639d7fe84581111de21b98bb6081f5b.png"},7620:function(e,t,n){t.Z=n.p+"assets/images/create-spell-home-f4045d5433442e7b41827d1e0bdf981a.png"},1393:function(e,t,n){t.Z=n.p+"assets/images/create-spell-spells-7cd4d52b7247d58313c842b1b1824f44.png"},1733:function(e,t,n){t.Z=n.p+"assets/images/details-spell-wizard-215dfd996a5d3e2c43111b2c885bea9b.png"},351:function(e,t,n){t.Z=n.p+"assets/images/list-api-wizard-e5e3b2498258711e78ffc3534d8cb3c5.png"},9469:function(e,t,n){t.Z=n.p+"assets/images/list-auth-wizard-213e74515e80a4c1f1de679d76e8a8a6.png"},9341:function(e,t,n){t.Z=n.p+"assets/images/list-connector-details-wizard-af47f4415d3e35b9fada5ffb9d33ac67.png"},7858:function(e,t,n){t.Z=n.p+"assets/images/list-connector-wizard-4686bd3d902c087f04baa9e72b26480e.png"},1975:function(e,t,n){t.Z=n.p+"assets/images/list-connectors-select-wizard-1ee7d833f16af519dc8762f50ddf6ee8.png"},5820:function(e,t,n){t.Z=n.p+"assets/images/resume-spell-draft-ff9eca3ec230691cba0238f97b3e38a6.png"}}]);