"use strict";(self.webpackChunkmeta_api_docs=self.webpackChunkmeta_api_docs||[]).push([[9516],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6455:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={id:"ftp-server",title:"Use an FTP server inside a Spell"},s=void 0,l={unversionedId:"advanced/ftp-server",id:"advanced/ftp-server",title:"Use an FTP server inside a Spell",description:"You can connect to an FTP server inside your Spell using the ftp-server dependencies.",source:"@site/docs/advanced/ftp-server.md",sourceDirName:"advanced",slug:"/advanced/ftp-server",permalink:"/docs/advanced/ftp-server",tags:[],version:"current",frontMatter:{id:"ftp-server",title:"Use an FTP server inside a Spell"},sidebar:"mySidebar",previous:{title:"Static IP addresses for a Spell",permalink:"/docs/advanced/static-ip-address"},next:{title:"User & company account management",permalink:"/docs/category/user--company-account-management"}},p={},d=[],u={toc:d};function f(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can connect to an FTP server inside your Spell using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ftp-server")," dependencies."),(0,o.kt)("p",null,"To add this dependency, click on ",(0,o.kt)("strong",{parentName:"p"},"Dependencies")," on the Spell editor and add ",(0,o.kt)("inlineCode",{parentName:"p"},"basic-ftp")," package: "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add FTP dependency",src:n(1721).Z,width:"1919",height:"1079"})," "),(0,o.kt)("p",null,"You can also activate the ",(0,o.kt)("inlineCode",{parentName:"p"},"fs")," NodeJS API if you want to read and write files inside your ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp")," folder."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You must use the ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp")," folder to write and read files inside your Spell."),(0,o.kt)("p",{parentName:"div"},"You have ",(0,o.kt)("strong",{parentName:"p"},"512Mo")," of storage per Spell and this storage is not persistent (all files are destroyed at the end)."),(0,o.kt)("p",{parentName:"div"},"If you want to store larger and persistent files, we recommend you to use File Storage APIs (like AWS S3)"))),(0,o.kt)("p",null,"Here is a code example to use ",(0,o.kt)("inlineCode",{parentName:"p"},"basic-ftp")," inside a Spell: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const client = new basic_ftp.Client();\ntry {\n    await client.access({\n        host: \"\",\n        user: 'user',\n        password: 'password',\n        secure: true\n    });\n    console.log(await client.list());\n    console.log(await client.downloadTo(\"/tmp/foo.txt\", \"foo.txt\"));\n    try {\n        const data = fs.readFileSync('./foo.txt', 'utf8');\n        console.log(data);\n    } catch (err) {\n        console.error(err);\n    }\n} catch (err) {\n    console.log(err.message);\n} finally {\n    client.close();\n}\n")),(0,o.kt)("p",null,"Don't forget to close properly the FTP connection before the end of Spell"))}f.isMDXComponent=!0},1721:function(e,t,n){t.Z=n.p+"assets/images/add-ftp-dependency-fcc72432cd6323e2ebeb991b680ce0e8.jpg"}}]);