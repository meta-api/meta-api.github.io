(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{73:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(85)),c={id:"code-and-dependancies",title:"Code and Dependancies"},i={unversionedId:"guides/code-and-dependancies",id:"guides/code-and-dependancies",isDocsHomePage:!1,title:"Code and Dependancies",description:"Code",source:"@site/docs/guides/code-and-dependancies.md",slug:"/guides/code-and-dependancies",permalink:"/docs/guides/code-and-dependancies",version:"current",sidebar:"mainSidebar",previous:{title:"Technical Overview",permalink:"/docs/getting-started/technical-overview"},next:{title:"Manage Connectors",permalink:"/docs/guides/manage-connectors"}},d=[{value:"Code",id:"code",children:[]},{value:"Dependencies",id:"dependencies",children:[]}],p={rightToc:d};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"code"},"Code"),Object(o.b)("p",null,"Write your ",Object(o.b)("em",{parentName:"p"},"Javascript")," code directly into the code editor."),Object(o.b)("p",null,"You can create as much as function you need or want inside the editor."),Object(o.b)("p",null,"You will find all the parameters into the ",Object(o.b)("inlineCode",{parentName:"p"},"params")," variable. We recommend you to deconstruct it like this: ",Object(o.b)("inlineCode",{parentName:"p"},"const { param1, param2 } = params")),Object(o.b)("h2",{id:"dependencies"},"Dependencies"),Object(o.b)("p",null,"You can add ",Object(o.b)("strong",{parentName:"p"},"NPM")," dependencies from ",Object(o.b)("em",{parentName:"p"},"Manage dependencies")," menu on the right: search the package, give it an alias (or not) and save! It will be added on deployment."),Object(o.b)("p",null,"An ",Object(o.b)("em",{parentName:"p"},"alias")," is the name for the package inside your code. Call the library by this name."))}u.isMDXComponent=!0},85:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,m=s["".concat(c,".").concat(b)]||s[b]||l[b]||o;return t?a.a.createElement(m,i(i({ref:n},p),{},{components:t})):a.a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);