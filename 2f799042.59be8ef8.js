(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{70:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(85)),c={id:"manage-connectors",title:"Manage Connectors"},i={unversionedId:"guides/manage-connectors",id:"guides/manage-connectors",isDocsHomePage:!1,title:"Manage Connectors",description:"Add and delete connectors",source:"@site/docs/guides/manage-connectors.md",slug:"/guides/manage-connectors",permalink:"/docs/guides/manage-connectors",version:"current",sidebar:"mainSidebar",previous:{title:"Code and Dependancies",permalink:"/docs/guides/code-and-dependancies"},next:{title:"Deploy and test your Spell",permalink:"/docs/guides/deploy-test-spell"}},d=[{value:"Add and delete connectors",id:"add-and-delete-connectors",children:[]}],u={rightToc:d};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"add-and-delete-connectors"},"Add and delete connectors"),Object(a.b)("p",null,"To add a new Connector, use the ",Object(a.b)("em",{parentName:"p"},"Add a connector")," menu on the right. Select a connector, then the endpoint of your choice, fill the parameters you need then save."),Object(a.b)("p",null,"When saving, a portion of code will be generated and automatically added at your Spell, where your cursor is."),Object(a.b)("p",null,"If you want to remove a connector: simply just delete rows from your code who has been generated by the connector."))}l.isMDXComponent=!0},85:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=l(t),f=r,m=s["".concat(c,".").concat(f)]||s[f]||p[f]||a;return t?o.a.createElement(m,i(i({ref:n},u),{},{components:t})):o.a.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);