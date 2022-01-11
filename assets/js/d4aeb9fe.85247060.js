"use strict";(self.webpackChunkmeta_api_docs=self.webpackChunkmeta_api_docs||[]).push([[508],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,f=s["".concat(d,".").concat(m)]||s[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8730:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={id:"code-and-dependancies",title:"Code and Dependancies"},d=void 0,p={unversionedId:"guides/code-and-dependancies",id:"guides/code-and-dependancies",title:"Code and Dependancies",description:"Code",source:"@site/docs/guides/1-code-and-dependancies.md",sourceDirName:"guides",slug:"/guides/code-and-dependancies",permalink:"/docs/guides/code-and-dependancies",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"code-and-dependancies",title:"Code and Dependancies"},sidebar:"mySidebar",previous:{title:"Managing my team",permalink:"/docs/collaboration/overview"},next:{title:"Manage Connectors",permalink:"/docs/guides/manage-connectors"}},l=[{value:"Code",id:"code",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2}],u={toc:l};function s(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("p",null,"Write your ",(0,o.kt)("em",{parentName:"p"},"Javascript")," code directly into the code editor."),(0,o.kt)("p",null,"You can create as much as function you need or want inside the editor."),(0,o.kt)("p",null,"You will find all the parameters into the ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," variable. We recommend you to deconstruct it like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"const { param1, param2 } = params")),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"You can add ",(0,o.kt)("strong",{parentName:"p"},"NPM")," dependencies from ",(0,o.kt)("em",{parentName:"p"},"Manage dependencies")," menu on the right: search the package, give it an alias (or not) and save! It will be added on deployment."),(0,o.kt)("p",null,"An ",(0,o.kt)("em",{parentName:"p"},"alias")," is the name for the package inside your code. Call the library by this name."))}s.isMDXComponent=!0}}]);