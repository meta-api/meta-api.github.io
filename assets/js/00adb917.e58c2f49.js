"use strict";(self.webpackChunkmeta_api_docs=self.webpackChunkmeta_api_docs||[]).push([[2958],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6266:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={id:"fix-401-spell-error",title:'How to fix "401 Unauthorized" when accessing a Spell?'},s=void 0,l={unversionedId:"common-errors/fix-401-spell-error",id:"common-errors/fix-401-spell-error",title:'How to fix "401 Unauthorized" when accessing a Spell?',description:"What's a 401 Unauthorized error",source:"@site/docs/common-errors/2-fix-401-spell-error.md",sourceDirName:"common-errors",slug:"/common-errors/fix-401-spell-error",permalink:"/docs/common-errors/fix-401-spell-error",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"fix-401-spell-error",title:'How to fix "401 Unauthorized" when accessing a Spell?'},sidebar:"mySidebar",previous:{title:'How to fix "408 Timeout error" in your Spell?',permalink:"/docs/common-errors/timeout-error"},next:{title:'How to fix "429 Too Many Requests" on an API?',permalink:"/docs/common-errors/fix-429-api-error"}},u={},p=[{value:"What&#39;s a 401 Unauthorized error",id:"whats-a-401-unauthorized-error",level:2},{value:"How to fix this error",id:"how-to-fix-this-error",level:2}],d={toc:p};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"whats-a-401-unauthorized-error"},"What's a 401 Unauthorized error"),(0,a.kt)("p",null,"HTTP 401 error mean that you try to access an authenticated API and you forget or have provided wrong credentials."),(0,a.kt)("h2",{id:"how-to-fix-this-error"},"How to fix this error"),(0,a.kt)("p",null,"This error is related to your authentication account. You maybe forget to provide your credentials, or you have provided wrong credentials."),(0,a.kt)("p",null,"Here is a handy checklist: "),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Is my authentication account has been provided on my API?",(0,a.kt)("br",{parentName:"p"}),"\n","You should see an alert or a red indicator on your connector. If you don't see any ",(0,a.kt)("strong",{parentName:"p"},"Configure authentication")," button, your API must be misconfigured. If it's a public API, contact the Meta API team.")),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Did I copy the right credentials?",(0,a.kt)("br",{parentName:"p"}),"\n","Some APIs can be tricky and need specific API key or credential to retrieve on your account. Don't hesitate to check your provider official documentation or ask the Meta API community.")),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Did I check if I didn't have a space before and after my credential?",(0,a.kt)("br",{parentName:"p"}),"\n","Some copy / paste can add a space before and after your API key, check it."))))}m.isMDXComponent=!0}}]);