(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{66:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(74)),i={id:"manage-api-keys",title:"Manage your API keys"},c={unversionedId:"guides/manage-api-keys",id:"guides/manage-api-keys",isDocsHomePage:!1,title:"Manage your API keys",description:"Manage your API keys",source:"@site/docs/guides/manage-api-keys.md",slug:"/guides/manage-api-keys",permalink:"/docs/guides/manage-api-keys",version:"current",sidebar:"mainSidebar",previous:{title:"Use your Spell in production",permalink:"/docs/guides/spell-production"},next:{title:"Connectors' authentication",permalink:"/docs/guides/connectors-authentication"}},l=[{value:"Manage your API keys",id:"manage-your-api-keys",children:[]},{value:"Use of your keys",id:"use-of-your-keys",children:[]},{value:"Advices",id:"advices",children:[]}],u={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h2",{id:"manage-your-api-keys"},"Manage your API keys"),Object(o.a)("p",null,"You can directly manage your API keys, needed to launch your Spells, from your client account."),Object(o.a)("p",null,"You can attribute labels on your keys and consult the last it was used."),Object(o.a)("p",null,"By default, an API key can be use by all your Spells but you can limit this by adding a Spell onto the authorize list of Spells. Simply choose a name of the Spell, save and voil\xe0! The API key will be only active for the selected Spells."),Object(o.a)("h2",{id:"use-of-your-keys"},"Use of your keys"),Object(o.a)("p",null,"When you send a request to Meta API, you have to communicate on of your API key. You have two possibilities for doing so:"),Object(o.a)("p",null,"Either you put it into the ",Object(o.a)("strong",{parentName:"p"},"headers")," of the request as ",Object(o.a)("inlineCode",{parentName:"p"},"apikey")," (recommended)"),Object(o.a)("p",null,"Example : "),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{}),"curl --location --request GET 'https://api.meta-api.io/api/spells/5e21bd14f6f042ce250c5be8/runSync' \\\n--header 'Content-Type: application/json' \\\n--header 'apikey: YOUR_API_KEY'\n")),Object(o.a)("p",null,"Either you add it into the URL parameters of your request under the name ",Object(o.a)("inlineCode",{parentName:"p"},"apikey")),Object(o.a)("p",null,"Example : ",Object(o.a)("inlineCode",{parentName:"p"},"GET https://api.meta-api.io/api/spells/5e21bd14f6f042ce250c5be8/runSync?apikey=YOUR_API_KEY")),Object(o.a)("h2",{id:"advices"},"Advices"),Object(o.a)("p",null,"We recommend you to change your API keys regularly. For doing so, you can follow these steps: "),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Create a new API key and add any limitation of Spell you need;")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Change the references into your application code;")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Wait a few hours until the last use of your key is acceptable (\xb1 1 day);")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Deactivate the older key (",Object(o.a)("strong",{parentName:"p"},"do not delete it right away"),"). ",Object(o.a)("em",{parentName:"p"},"Deactivate a key allows you to ensure that the production isn't impacted and if it is, you can rollback easily as a key is ",Object(o.a)("strong",{parentName:"em"},"unique")," "),";")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"If everything is good, you can delete the key."))))}p.isMDXComponent=!0},74:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},y=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=p(a),d=n,m=y["".concat(i,".").concat(d)]||y[d]||s[d]||o;return a?r.a.createElement(m,c(c({ref:t},u),{},{components:a})):r.a.createElement(m,c({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=a[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}y.displayName="MDXCreateElement"}}]);