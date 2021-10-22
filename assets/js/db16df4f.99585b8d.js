"use strict";(self.webpackChunkmeta_api_docs=self.webpackChunkmeta_api_docs||[]).push([[996],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=i,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6742:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(3366),i=t(7294),a=t(3727),o=t(2263),s=t(3919),l=t(412),u=(0,i.createContext)({collectLink:function(){}}),c=t(4996),f=t(8780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var d=function(e){var n,t,d=e.isNavLink,m=e.to,g=e.href,v=e.activeClassName,h=e.isActive,y=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,k=void 0===b||b,w=(0,r.Z)(e,p),O=(0,o.Z)().siteConfig,j=O.trailingSlash,S=O.baseUrl,B=(0,c.C)().withBaseUrl,C=(0,i.useContext)(u),N=m||g,P=(0,s.Z)(N),x=null==N?void 0:N.replace("pathname://",""),M=void 0!==x?(t=x,k&&function(e){return e.startsWith("/")}(t)?B(t):t):void 0;M&&P&&(M=(0,f.applyTrailingSlash)(M,{trailingSlash:j,baseUrl:S}));var _=(0,i.useRef)(!1),T=d?a.OL:a.rU,E=l.Z.canUseIntersectionObserver,D=(0,i.useRef)();(0,i.useEffect)((function(){return!E&&P&&null!=M&&window.docusaurus.prefetch(M),function(){E&&D.current&&D.current.disconnect()}}),[D,M,E,P]);var Z=null!==(n=null==M?void 0:M.startsWith("#"))&&void 0!==n&&n,W=!M||!P||Z;return M&&P&&!Z&&!y&&C.collectLink(M),W?i.createElement("a",Object.assign({href:M},N&&!P&&{target:"_blank",rel:"noopener noreferrer"},w)):i.createElement(T,Object.assign({},w,{onMouseEnter:function(){_.current||null==M||(window.docusaurus.preload(M),_.current=!0)},innerRef:function(e){var n,t;E&&e&&P&&(n=e,t=function(){null!=M&&window.docusaurus.prefetch(M)},D.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.current.unobserve(n),D.current.disconnect(),t())}))})),D.current.observe(n))},to:M||""},d&&{isActive:h,activeClassName:v}))}},3919:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return i}})},4996:function(e,n,t){t.d(n,{C:function(){return a},Z:function(){return o}});var r=t(2263),i=t(3919);function a(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,s=void 0!==o&&o,l=a.absolute,u=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if((0,i.b)(t))return t;if(s)return n+t;var c=t.startsWith(n)?t:n+t.replace(/^\//,"");return u?e+c:c}(a,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},8802:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,t?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},8780:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var i=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=t(9964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(a).default}})},9964:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},5838:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return f},default:function(){return d}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=t(6742),s=["components"],l={id:"managing-images-files",title:"Managing images and files inside a Spell"},u=void 0,c={unversionedId:"snippets-helpers/managing-images-files",id:"snippets-helpers/managing-images-files",isDocsHomePage:!1,title:"Managing images and files inside a Spell",description:"You have two ways for managing files and images inside a Spell : Buffer or local files.",source:"@site/docs/snippets-helpers/1-managing-images-files.md",sourceDirName:"snippets-helpers",slug:"/snippets-helpers/managing-images-files",permalink:"/docs/snippets-helpers/managing-images-files",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"managing-images-files",title:"Managing images and files inside a Spell"},sidebar:"mySidebar",previous:{title:"Authenticate your GitHub account",permalink:"/docs/guides/github-oauth-app"}},f=[{value:"Managing with buffer",id:"managing-with-buffer",children:[],level:2},{value:"Read and save temporary files",id:"read-and-save-temporary-files",children:[],level:2}],p={toc:f};function d(e){var n=e.components,l=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You have two ways for managing files and images inside a Spell : Buffer or local files."),(0,a.kt)("h2",{id:"managing-with-buffer"},"Managing with buffer"),(0,a.kt)("p",null,"With a ",(0,a.kt)("strong",{parentName:"p"},"Buffer"),", you can store files directly inside the Spell's memory."),(0,a.kt)("p",null,"Here a snippet to store a remote file inside a Buffer : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const imageInBuffer: Buffer = await axios.get(\"https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=739&q=80\", {\n    responseType: 'arraybuffer'\n});\n")),(0,a.kt)("p",null,"You can also create a Buffer from a string (utf8) or an object : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const fileInBuffer = new Buffer.from(myObject);\n")),(0,a.kt)("p",null,"Or a base64 string :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const fileFromBase64 = new Buffer(base64String, 'base64');\n")),(0,a.kt)("p",null,"Then you can manipulate this variable to output a file (see ",(0,a.kt)(o.Z,{to:"/docs/guides/file-output-spell",mdxType:"Link"},"Generate a file from a Spell"),") or to link it inside a POST request, etc."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Warning")," : memory are limited inside a Spell. If you tried to store too large files inside a Buffer, you'll break your Spell's execution."),(0,a.kt)("h2",{id:"read-and-save-temporary-files"},"Read and save temporary files"),(0,a.kt)("p",null,"You'll need to activate the ",(0,a.kt)("inlineCode",{parentName:"p"},"fs")," Node's library to access Spell's filesystem in ",(0,a.kt)("em",{parentName:"p"},"Dependencies"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Spell List",src:t(8607).Z})),(0,a.kt)("p",null,"Then you can read and write files from the local ",(0,a.kt)("inlineCode",{parentName:"p"},"tmp")," directory like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'//Write a new file named "test" inside the tmp directory and putting inside the content "Hello World"\nfs.writeFileSync(\'test\', "Hello World");\n\n//Loading the file\'s content inside a Buffer\nconst fileContentBuffer = fs.readFileSync(\'test\');\n\n//Convertir Buffer to string to use the content\nconst fileContentAsString = fileContentBuffer.toString();\n')))}d.isMDXComponent=!0},8607:function(e,n,t){n.Z=t.p+"assets/images/enable_node_fs_path-f734616078a0d899dde78aaf3f78d142.png"}}]);