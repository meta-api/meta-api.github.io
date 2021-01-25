(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),l=(n(0),n(94)),i={id:"deploy-test-spell",title:"Deploy and test your Spell"},a={unversionedId:"guides/deploy-test-spell",id:"guides/deploy-test-spell",isDocsHomePage:!1,title:"Deploy and test your Spell",description:"During Development :",source:"@site/docs/guides/deploy-test-spell.md",slug:"/guides/deploy-test-spell",permalink:"/docs/guides/deploy-test-spell",version:"current",sidebar:"mainSidebar",previous:{title:"Manage Connectors",permalink:"/docs/guides/manage-connectors"},next:{title:"Use your Spell in production",permalink:"/docs/guides/spell-production"}},c=[{value:"During Development :",id:"during-development-",children:[]},{value:"Tester :",id:"tester-",children:[]},{value:"Deployment&#39;s errors",id:"deployments-errors",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"during-development-"},"During Development :"),Object(l.b)("p",null,"Your Spell is deployed when you save it. Click on ",Object(l.b)("em",{parentName:"p"},"Save")," and that's it! You can now test your code."),Object(l.b)("h2",{id:"tester-"},"Tester :"),Object(l.b)("p",null,"To test, click the ",Object(l.b)("em",{parentName:"p"},"Test your Spell")," button: a panel will allow you send a request in order to test your deployed code and check the results. "),Object(l.b)("h2",{id:"deployments-errors"},"Deployment's errors"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"To accelerate your development, your code is deployed temporary. If the development environment doesn't respond (it turns off if nothing happens during 20 minutes), restart it by clicking on ",Object(l.b)("strong",{parentName:"li"},"Reset the dev environment")," under the ",Object(l.b)("em",{parentName:"li"},"Information")," tab."),Object(l.b)("li",{parentName:"ol"},"Then, you will need to save your code in order to redeploy it.")))}u.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),y=r,m=s["".concat(i,".").concat(y)]||s[y]||d[y]||l;return n?o.a.createElement(m,a(a({ref:t},p),{},{components:n})):o.a.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);