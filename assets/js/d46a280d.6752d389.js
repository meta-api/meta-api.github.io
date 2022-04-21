"use strict";(self.webpackChunkmeta_api_docs=self.webpackChunkmeta_api_docs||[]).push([[766],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),d=r,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5490:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=(n(9960),["components"]),l={id:"how-to",title:"Advanced data manipulation and snippets"},s=void 0,p={unversionedId:"spell-interface/how-to",id:"spell-interface/how-to",title:"Advanced data manipulation and snippets",description:"Work with files and images",source:"@site/docs/spell-interface/5-advanced.md",sourceDirName:"spell-interface",slug:"/spell-interface/how-to",permalink:"/docs/spell-interface/how-to",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"how-to",title:"Advanced data manipulation and snippets"},sidebar:"mySidebar",previous:{title:"Meta Storage, a key-value storage directly inside the Spell",permalink:"/docs/spell-interface/meta-storage"},next:{title:"Use a Connector in a Spell",permalink:"/docs/connectors/use-connector-spell"}},c=[{value:"Work with files and images",id:"work-with-files-and-images",children:[{value:"Managing with buffer",id:"managing-with-buffer",children:[],level:3},{value:"Read and save temporary files",id:"read-and-save-temporary-files",children:[],level:3},{value:"Output a file",id:"output-a-file",children:[],level:3}],level:2}],u={toc:c};function f(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"work-with-files-and-images"},"Work with files and images"),(0,i.kt)("p",null,"With our code editor, you can ",(0,i.kt)("a",{parentName:"p",href:"../snippets-helpers/managing-images-files"},"manage files and images"),".\nEither as a body from the HTTP call, as a resource you are fetching in your code or as a return result."),(0,i.kt)("p",null,"You have two ways for managing files and images inside a Spell : Buffer or local files."),(0,i.kt)("h3",{id:"managing-with-buffer"},"Managing with buffer"),(0,i.kt)("p",null,"With a ",(0,i.kt)("strong",{parentName:"p"},"Buffer"),", you can store files directly inside the Spell's memory."),(0,i.kt)("p",null,"Here a snippet to store a remote file inside a Buffer : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const imageInBuffer: Buffer = await axios.get(\"https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=739&q=80\", {\n    responseType: 'arraybuffer'\n});\n")),(0,i.kt)("p",null,"You can also create a Buffer from a string (utf8) or an object : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const fileInBuffer = new Buffer.from(myObject);\n")),(0,i.kt)("p",null,"Or a base64 string :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const fileFromBase64 = new Buffer(base64String, 'base64');\n")),(0,i.kt)("p",null,"Then you can manipulate this variable to output a file (see ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/file-output-spell"},"Generate a file from a Spell"),") or to link it inside a POST request, etc."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Warning")," : memory are limited inside a Spell. If you tried to store too large files inside a Buffer, you'll break your Spell's execution."),(0,i.kt)("h3",{id:"read-and-save-temporary-files"},"Read and save temporary files"),(0,i.kt)("p",null,"You'll need to activate the ",(0,i.kt)("inlineCode",{parentName:"p"},"fs")," Node's library to access Spell's filesystem in ",(0,i.kt)("em",{parentName:"p"},"Dependencies"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Spell List",src:n(6466).Z}),"\n",(0,i.kt)("img",{alt:"Spell List",src:n(3233).Z})),(0,i.kt)("p",null,"Then you can read and write files from the local ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp")," directory like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'//Write a new file named "test" inside the tmp directory and putting inside the content "Hello World"\nfs.writeFileSync(\'test\', "Hello World");\n\n//Loading the file\'s content inside a Buffer\nconst fileContentBuffer = fs.readFileSync(\'test\');\n\n//Convertir Buffer to string to use the content\nconst fileContentAsString = fileContentBuffer.toString();\n')),(0,i.kt)("h3",{id:"output-a-file"},"Output a file"),(0,i.kt)("p",null,"You can output a file from a Spell to interact direcly with user and propose them to download it."),(0,i.kt)("p",null,"You have a special object ",(0,i.kt)("inlineCode",{parentName:"p"},"_file")," that you can return from a Spell : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'return {\n    _file: {\n        filename: "test.csv" //You can choose here the filename of your file. This filename will be proposed to the user when he will download it\n        data: new Buffer.from(csv) //data must be a Buffer\n    }\n}\n')),(0,i.kt)("p",null,"Here a full example of a Spell with output a CSV : (we are using ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/json2csv"},"json2csv parser lib")," to convert a JSON to a CSV)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{20-23}","{20-23}":!0},'const someData = [\n    {\n        "Firstname": "John",\n        "Lastname": "Doe",\n        "Language": "English",\n        "Age": 31\n    },\n    {\n        "Firstname": "Alain",\n        "Lastname": "Terrieur",\n        "Language": "French",\n        "Age": 32\n    },\n]\n\nconst json2csvParser = new json2csv.Parser();\nconst csv = json2csvParser.parse(someData);\n\nreturn {\n    _file: {\n        filename: "people.csv",\n        data: new Buffer.from(csv)\n    }\n};\n')),(0,i.kt)("p",null,"Here the output inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"people.csv")," file :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"Firstname","Lastname","Language","Age"\n"John","Doe","English",31\n"Alain","Terrieur","French",32\n')))}f.isMDXComponent=!0},6466:function(e,t,n){t.Z=n.p+"assets/images/enable-node-fs-path1-0b9fb48237130fb3e234ed3ccc01101b.png"},3233:function(e,t,n){t.Z=n.p+"assets/images/enable-node-fs-path2-62ca680c464eaabea4c0353f5bebf2e9.png"}}]);