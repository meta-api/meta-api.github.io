"use strict";(self.webpackChunkmeta_api_docs=self.webpackChunkmeta_api_docs||[]).push([[452],{3905:function(A,e,t){t.d(e,{Zo:function(){return u},kt:function(){return f}});var n=t(7294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function i(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function o(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},a=Object.keys(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var l=n.createContext({}),c=function(A){var e=n.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):i(i({},e),A)),t},u=function(A){var e=c(A.components);return n.createElement(l.Provider,{value:e},A.children)},p={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(A,e){var t=A.components,r=A.mdxType,a=A.originalType,l=A.parentName,u=o(A,["components","mdxType","originalType","parentName"]),s=c(t),f=r,m=s["".concat(l,".").concat(f)]||s[f]||p[f]||a;return t?n.createElement(m,i(i({ref:e},u),{},{components:t})):n.createElement(m,i({ref:e},u))}));function f(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var a=t.length,i=new Array(a);i[0]=s;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=A,o.mdxType="string"==typeof A?A:r,i[1]=o;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2467:function(A,e,t){t.r(e),t.d(e,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var n=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],o={id:"using-variable-param-connector-detail",title:"Using variable as parameters in Connector"},l=void 0,c={unversionedId:"guides/using-variable-param-connector-detail",id:"guides/using-variable-param-connector-detail",title:"Using variable as parameters in Connector",description:"Setting variables into differents parameters",source:"@site/docs/guides/9-params-variables.md",sourceDirName:"guides",slug:"/guides/using-variable-param-connector-detail",permalink:"/docs/guides/using-variable-param-connector-detail",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"using-variable-param-connector-detail",title:"Using variable as parameters in Connector"},sidebar:"mySidebar",previous:{title:"Generate a file from a Spell",permalink:"/docs/guides/file-output-spell"},next:{title:"Authenticate your GitHub account",permalink:"/docs/guides/github-oauth-app"}},u=[{value:"Setting variables into differents parameters",id:"setting-variables-into-differents-parameters",children:[],level:2},{value:"Remove variable of a parameter",id:"remove-variable-of-a-parameter",children:[{value:"\u26a0\ufe0f Warning",id:"\ufe0f-warning",children:[],level:3},{value:"Troubleshooting",id:"troubleshooting",children:[],level:3}],level:2}],p={toc:u};function s(A){var e=A.components,o=(0,r.Z)(A,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"setting-variables-into-differents-parameters"},"Setting variables into differents parameters"),(0,a.kt)("p",null,"You can setting variables as your parameter in your Connector's configuration. This will give you the possibility to make your spell dynamic and to connect different Connectors between them."),(0,a.kt)("p",null,"Variables are available for the parameters in ",(0,a.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Header"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Form"),".\nYou can use variable in ",(0,a.kt)("inlineCode",{parentName:"p"},"Server/URL query")," and in ",(0,a.kt)("inlineCode",{parentName:"p"},"OAuth 2 authentication")," to select any authentication profiles."),(0,a.kt)("p",null,"To do so and in first place, you will have to create a variable into your code editor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const my_variable = "some text";\n')),(0,a.kt)("p",null,"Then, select one of your Connector on the menu on the left and look for a parameter."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Query parameters unset",src:t(6604).Z})," "),(0,a.kt)("p",null,"You can choose your variable as parameter in the select box."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tooltip selection variable",src:t(206).Z})),(0,a.kt)("p",null,"Here you can search for any variable written in your code. Let's select our variable ",(0,a.kt)("inlineCode",{parentName:"p"},"my_variable"),". The tooltip should close itself, if it's not the case: just click outside the box."),(0,a.kt)("p",null,"Now, the input parameter will change to look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Query parameters set",src:t(7926).Z})),(0,a.kt)("p",null,"There is 2 things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The input parameter is now read-only with the variable set;"),(0,a.kt)("li",{parentName:"ul"},"The button changes its color to a blue. This indicates your variable is now set.")),(0,a.kt)("p",null,"And you're done \u2705 "),(0,a.kt)("p",null,"Your parameters, servers and profiles are now set dynamically with a variable."),(0,a.kt)("h2",{id:"remove-variable-of-a-parameter"},"Remove variable of a parameter"),(0,a.kt)("p",null,"To unselect a variable, open the tooltip by clicking on the blue button then click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"unselect variable")," button.\nThis will remove any reference of this variable in the parameter."),(0,a.kt)("h3",{id:"\ufe0f-warning"},"\u26a0\ufe0f Warning"),(0,a.kt)("p",null,"Some type parameters might be ",(0,a.kt)("inlineCode",{parentName:"p"},"array")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"object"),", those parameters must be set in your code before."),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you delete a variable in your code editor, this will not remove it in your parameter. We're currently working on it."))}s.isMDXComponent=!0},6604:function(A,e){e.Z="data:image/png;base64,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"},7926:function(A,e){e.Z="data:image/png;base64,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"},206:function(A,e,t){e.Z=t.p+"assets/images/popup_select_var-9cf7cfaf5da8f7afe3e217343fc9495a.png"}}]);