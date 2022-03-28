"use strict";(self.webpackChunkmeta_api_docs=self.webpackChunkmeta_api_docs||[]).push([[635],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=r,y=d["".concat(l,".").concat(f)]||d[f]||p[f]||c;return t?o.createElement(y,a(a({ref:n},u),{},{components:t})):o.createElement(y,a({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},331:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var o=t(7462),r=t(3366),c=(t(7294),t(3905)),a=["components"],i={id:"use-connector-spell",title:"Use a Connector in a Spell"},l=void 0,s={unversionedId:"connectors/use-connector-spell",id:"connectors/use-connector-spell",title:"Use a Connector in a Spell",description:"Add a connector in your Spell",source:"@site/docs/connectors/1-use-connector-spell.md",sourceDirName:"connectors",slug:"/connectors/use-connector-spell",permalink:"/docs/connectors/use-connector-spell",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"use-connector-spell",title:"Use a Connector in a Spell"},sidebar:"mySidebar",previous:{title:"Advanced data manipulation and snippets",permalink:"/docs/spell-interface/how-to"},next:{title:"Use a Spell's variable in a Connector",permalink:"/docs/connectors/use-variable-spell"}},u={},p=[{value:"Add a connector in your Spell",id:"add-a-connector-in-your-spell",level:2},{value:"Update a connector",id:"update-a-connector",level:2},{value:"Delete a connector",id:"delete-a-connector",level:2}],d={toc:p};function f(e){var n=e.components,i=(0,r.Z)(e,a);return(0,c.kt)("wrapper",(0,o.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"add-a-connector-in-your-spell"},"Add a connector in your Spell"),(0,c.kt)("p",null,"To add a connector to your spell, in your code editor simply click on ",(0,c.kt)("strong",{parentName:"p"},"Connector"),". A modal opens and offers you a large choice of connectors publics and privates and choose the connector to integrate in your Spell ! "),(0,c.kt)("p",null,(0,c.kt)("img",{loading:"lazy",alt:"Connector button",src:t(8634).Z,width:"1920",height:"955"})," "),(0,c.kt)("p",null,"Choose your connector."),(0,c.kt)("p",null,(0,c.kt)("img",{loading:"lazy",alt:"List connector",src:t(9673).Z,width:"1710",height:"772"})),(0,c.kt)("p",null,"On this page you can choose the endpoint you need."),(0,c.kt)("p",null,(0,c.kt)("img",{loading:"lazy",alt:"List endpoint",src:t(5153).Z,width:"1725",height:"776"})),(0,c.kt)("p",null,"After choosing your endpoint, you can see the description and some details of the selected endpoint before you can add it to your spell."),(0,c.kt)("p",null,(0,c.kt)("img",{loading:"lazy",alt:"Add endpoint",src:t(2682).Z,width:"1718",height:"773"})),(0,c.kt)("h2",{id:"update-a-connector"},"Update a connector"),(0,c.kt)("p",null,'Before you can configure and use your new connector, you must copy the given code and paste it into your code editor.\nYou can also customise the name of your endpoint if you use several endpoints from the same connector to differentiate them.\nIf you want to know more about the use of a connector, you can access its documentation via "see documentation".'),(0,c.kt)("p",null,(0,c.kt)("img",{loading:"lazy",alt:"Update connector",src:t(8324).Z,width:"1920",height:"955"})),(0,c.kt)("h2",{id:"delete-a-connector"},"Delete a connector"),(0,c.kt)("p",null,"To remove a connector from your spell, select the connector from the list on the left and click on the button on the top right of the connector configuration interface. Make sure you have removed the portion of code copied into your editor when integrating your connector."),(0,c.kt)("p",null,(0,c.kt)("img",{loading:"lazy",alt:"Update connector",src:t(6646).Z,width:"897",height:"825"})))}f.isMDXComponent=!0},2682:function(e,n,t){n.Z=t.p+"assets/images/add_endpoint-dd23593c41ed5db2446b0f45e96c9d3e.png"},8634:function(e,n,t){n.Z=t.p+"assets/images/button_connector-33645575d3132475f58c185a7882f34d.png"},6646:function(e,n,t){n.Z=t.p+"assets/images/delete_connector-c2f0fc4decbc74fa8850d3926736a7b4.png"},9673:function(e,n,t){n.Z=t.p+"assets/images/list_connector-32415bd2f8743367fe3e260be5d20afe.png"},5153:function(e,n,t){n.Z=t.p+"assets/images/list_endpoint-6e2ab70202a10c72a6b01c4e021f3987.png"},8324:function(e,n,t){n.Z=t.p+"assets/images/update_connector-d75c9a3ba41a44308a11048ca08286c6.png"}}]);