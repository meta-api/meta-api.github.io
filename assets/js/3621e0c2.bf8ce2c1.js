"use strict";(self.webpackChunkmeta_api_docs=self.webpackChunkmeta_api_docs||[]).push([[997],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9160:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"versions",title:"How to deploy a Spell in production?"},p=void 0,s={unversionedId:"deployment/versions",id:"deployment/versions",title:"How to deploy a Spell in production?",description:"Once your spell is ready to go live, you can create a new version and deploy it in production from the Manage versions in Spell's detail page or the Deploy button on the Spell's editor.",source:"@site/docs/deployment/1-versions.md",sourceDirName:"deployment",slug:"/deployment/versions",permalink:"/docs/deployment/versions",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"versions",title:"How to deploy a Spell in production?"},sidebar:"mySidebar",previous:{title:"Use dynamic profiles for OAuth",permalink:"/docs/connectors/dynamic-oauth-profiles"},next:{title:"Use a Spell in production",permalink:"/docs/deployment/code-snippets"}},c={},d=[{value:"Create a version",id:"create-a-version",level:3},{value:"Promote a version",id:"promote-a-version",level:3},{value:"Delete a version",id:"delete-a-version",level:3},{value:"Import previous code",id:"import-previous-code",level:3}],u={toc:d};function m(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Once your spell is ready to go live, you can create a new ",(0,i.kt)("strong",{parentName:"p"},"version")," and deploy it in ",(0,i.kt)("strong",{parentName:"p"},"production")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Manage versions")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"Spell's detail")," page or the ",(0,i.kt)("inlineCode",{parentName:"p"},"Deploy")," button on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Spell's editor"),"."),(0,i.kt)("h3",{id:"create-a-version"},"Create a version"),(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},"Version history")," you can see all the versions you created before. To create a new version, you can click on the button ",(0,i.kt)("inlineCode",{parentName:"p"},"Create a new version")," which will prompt you to set a title and a description for your version. Choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Save draft")," to simply save your code in the version history or ",(0,i.kt)("inlineCode",{parentName:"p"},"Deploy in production")," to save it and deploy it immediately."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Release pop-in",src:n(7376).Z,width:"945",height:"356"})),(0,i.kt)("h3",{id:"promote-a-version"},"Promote a version"),(0,i.kt)("p",null,"If you choose to anly save a draft for your version, you can promote it to production when you are ready from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Version history"),".\nYou can also redeploy an older version from here."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Promote to Prodcution",src:n(8768).Z,width:"1134",height:"747"})),(0,i.kt)("p",null,"After a few seconds your version is available on production ! \ud83c\udf89"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"List of productions",src:n(4069).Z,width:"1135",height:"749"})),(0,i.kt)("h3",{id:"delete-a-version"},"Delete a version"),(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},"Version history")," you can delete a version that is not in production."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Release delete",src:n(776).Z,width:"1136",height:"667"})),(0,i.kt)("h3",{id:"import-previous-code"},"Import previous code"),(0,i.kt)("p",null,"You can import the code to the editor from one of your old versions by clicking ",(0,i.kt)("strong",{parentName:"p"},"Compare code")," and ",(0,i.kt)("strong",{parentName:"p"},"Import version")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Import version",src:n(5677).Z,width:"1819",height:"626"})))}m.isMDXComponent=!0},8768:function(e,t,n){t.Z=n.p+"assets/images/promote_production-df09bbfe223c962273be1cc6844f567e.png"},4069:function(e,t,n){t.Z=n.p+"assets/images/release-1362559b56b0a9d5b3b46b10b78b5cc6.png"},776:function(e,t,n){t.Z=n.p+"assets/images/release_delete-c6ccc84fdef609ae02d0b24828c05f8c.png"},7376:function(e,t,n){t.Z=n.p+"assets/images/release_dialog-63727f374660d198be9b102c22d0fbec.png"},5677:function(e,t,n){t.Z=n.p+"assets/images/release_import-48b2849c371f7f26cfe9d38843116a20.png"}}]);