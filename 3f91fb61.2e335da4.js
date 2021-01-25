(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},165:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/enable-node-fs-path-99c5a14dc210b57e8799ffc451514348.png"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return f}));var r=n(3),a=n(7),i=(n(0),n(94)),o=n(97),s={id:"managing-images-files",title:"Managing images and files inside a Spell"},c={unversionedId:"snippets-helpers/managing-images-files",id:"snippets-helpers/managing-images-files",isDocsHomePage:!1,title:"Managing images and files inside a Spell",description:"You have two ways for managing files and images inside a Spell : Buffer or local files.",source:"@site/docs/snippets-helpers/managing-images-files.md",slug:"/snippets-helpers/managing-images-files",permalink:"/docs/snippets-helpers/managing-images-files",version:"current",sidebar:"mainSidebar",previous:{title:"Generate a file from a Spell",permalink:"/docs/guides/file-output-spell"}},l=[{value:"Managing with buffer",id:"managing-with-buffer",children:[]},{value:"Read and save temporary files",id:"read-and-save-temporary-files",children:[]}],u={toc:l};function f(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You have two ways for managing files and images inside a Spell : Buffer or local files."),Object(i.b)("h2",{id:"managing-with-buffer"},"Managing with buffer"),Object(i.b)("p",null,"With a ",Object(i.b)("strong",{parentName:"p"},"Buffer"),", you can store files directly inside the Spell's memory."),Object(i.b)("p",null,"Here a snippet to store a remote file inside a Buffer : "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const imageInBuffer: Buffer = await axios.get(\"https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=739&q=80\", {\n    responseType: 'arraybuffer'\n});\n")),Object(i.b)("p",null,"You can also create a Buffer from a string (utf8) or an object : "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const fileInBuffer = new Buffer.from(myObject);\n")),Object(i.b)("p",null,"Or a base64 string :"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const fileFromBase64 = new Buffer(base64String, 'base64');\n")),Object(i.b)("p",null,"Then you can manipulate this variable to output a file (see ",Object(i.b)(o.a,{to:"/docs/guides/file-output-spell",mdxType:"Link"},"Generate a file from a Spell"),") or to link it inside a POST request, etc."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Warning")," : memory are limited inside a Spell. If you tried to store too large files inside a Buffer, you'll break your Spell's execution."),Object(i.b)("h2",{id:"read-and-save-temporary-files"},"Read and save temporary files"),Object(i.b)("p",null,"You'll need to activate the ",Object(i.b)("inlineCode",{parentName:"p"},"fs")," Node's library to access Spell's filesystem."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Spell List",src:n(165).default})),Object(i.b)("p",null,"Then you can read and write files from the local ",Object(i.b)("inlineCode",{parentName:"p"},"tmp")," directory like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'//Write a new file named "test" inside the tmp directory and putting inside the content "Hello World"\nfs.writeFileSync(\'test\', "Hello World");\n\n//Loading the file\'s content inside a Buffer\nconst fileContentBuffer = fs.readFileSync(\'test\');\n\n//Convertir Buffer to string to use the content\nconst fileContentAsString = fileContentBuffer.toString();\n')))}f.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),b=r,d=f["".concat(o,".").concat(b)]||f[b]||p[b]||i;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(10),o=n(100),s=n(11);const c=Object(r.createContext)({collectLink:()=>{}});var l=n(99),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,{isNavLink:n,to:f,href:p,activeClassName:b,isActive:d,"data-noBrokenLinkCheck":m,autoAddBaseUrl:g=!0}=e,O=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:y}=Object(l.b)(),j=Object(r.useContext)(c),v=f||p,h=Object(o.a)(v),w=null==v?void 0:v.replace("pathname://",""),B=void 0!==w?(S=w,g&&(e=>e.startsWith("/"))(S)?y(S):S):void 0;var S;const k=Object(r.useRef)(!1),N=n?i.e:i.c,x=s.a.canUseIntersectionObserver;let C;Object(r.useEffect)((()=>(!x&&h&&window.docusaurus.prefetch(B),()=>{x&&C&&C.disconnect()})),[B,x,h]);const P=null!==(t=null==B?void 0:B.startsWith("#"))&&void 0!==t&&t,E=!B||!h||P;return B&&h&&!P&&!m&&j.collectLink(B),E?a.a.createElement("a",Object.assign({href:B},v&&!h&&{target:"_blank",rel:"noopener noreferrer"},O)):a.a.createElement(N,Object.assign({},O,{onMouseEnter:()=>{k.current||(window.docusaurus.preload(B),k.current=!0)},innerRef:e=>{var t,n;x&&e&&h&&(t=e,n=()=>{window.docusaurus.prefetch(B)},C=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(C.unobserve(t),C.disconnect(),n())}))})),C.observe(t))},to:B||""},n&&{isActive:d,activeClassName:b}))}},99:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(22),a=n(100);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}}}]);