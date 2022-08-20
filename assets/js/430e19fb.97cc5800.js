"use strict";(self.webpackChunkmeta_api_docs=self.webpackChunkmeta_api_docs||[]).push([[3469],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||l;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3588:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"schedule-spell",title:"Schedule a Spell"},s=void 0,u={unversionedId:"spell/using-spell/schedule-spell",id:"spell/using-spell/schedule-spell",title:"Schedule a Spell",description:"Configuring a schedule",source:"@site/docs/spell/using-spell/4-schedule-spell.md",sourceDirName:"spell/using-spell",slug:"/spell/using-spell/schedule-spell",permalink:"/docs/spell/using-spell/schedule-spell",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"schedule-spell",title:"Schedule a Spell"},sidebar:"mySidebar",previous:{title:"Trigger your Spell with a Webhook",permalink:"/docs/spell/using-spell/use-webhook"},next:{title:"Execute your Spell from your application",permalink:"/docs/spell/using-spell/run-spell-app"}},c={},p=[{value:"Configuring a schedule",id:"configuring-a-schedule",level:2},{value:"Viewing schedules",id:"viewing-schedules",level:2},{value:"Editing a schedule",id:"editing-a-schedule",level:2}],d={toc:p};function h(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"configuring-a-schedule"},"Configuring a schedule"),(0,l.kt)("p",null,"The Scheduler allows you to create and run any Spell automatically on any particular date and time. To set a schedule, you can use our integrated interface which is accessible either from the ",(0,l.kt)("strong",{parentName:"p"},"Spell's detail page")," or the ",(0,l.kt)("strong",{parentName:"p"},"Schedules Manager")," page:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Spell's detail page"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Schedules Manager page"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("img",{src:n(8912).Z,width:"3584",height:"1966"})),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("img",{src:n(1322).Z,width:"3584",height:"1966"}))))),(0,l.kt)("p",null,"Once opened, fill the following information:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Timezone"),": You can select the timezone in which you want to trigger the job."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cron Interval"),": You can set how often the schedule repeats by using the pattern builder (every minute, every hour, every day, every week, every month or custom). If your select ",(0,l.kt)("em",{parentName:"li"},"custom"),", you will have to write your own cron expression using unix-cron format.")),(0,l.kt)("p",null,"If you create a schedule from the Scheduler Manager page, you will have to select a Spell from the dropdown box."),(0,l.kt)("p",null,"At the top of the interface, we show you the programmed interval and when the next run will occur."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Scheduler parameters",src:n(2259).Z,width:"1890",height:"1120"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payload"),": You can provide the information you consider appropriate in the payload editor. Notice that the payload need to be an object.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Scheduler cron expression",src:n(2299).Z,width:"1862",height:"1076"})),(0,l.kt)("h2",{id:"viewing-schedules"},"Viewing schedules"),(0,l.kt)("p",null,"You can use the dashboard to perform the following tasks:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a schedule"),(0,l.kt)("li",{parentName:"ul"},"Update a schedule"),(0,l.kt)("li",{parentName:"ul"},"View action history")),(0,l.kt)("p",null,"All scheduled jobs are listed with:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Spell"),"\xa0- the Spell name associated with job's run status, which is eithep ",(0,l.kt)("em",{parentName:"li"},"Success"),", ",(0,l.kt)("em",{parentName:"li"},"Failed")," or ",(0,l.kt)("em",{parentName:"li"},"Task has not yet run"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Status")," - the job\u2019s status, which is either ",(0,l.kt)("em",{parentName:"li"},"Active")," or ",(0,l.kt)("em",{parentName:"li"},"Paused"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Frequency")," - the cron syntax used to schedule the job associated with the selected timezone."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Last Run"),"\xa0- the time passed since the job was last executed. This field will contain ",(0,l.kt)("inlineCode",{parentName:"li"},"...")," symbol if the job has never been executed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Next Run"),"\xa0- the date and time when the job is next scheduled to be executed. This field will contain ",(0,l.kt)("inlineCode",{parentName:"li"},"...")," symbol if the job is disabled."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Actions"),"\xa0- options to edit the job's schedule, view the history (by clicking on this icon ",(0,l.kt)("inlineCode",{parentName:"li"},">"),") or delete the job.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Schedules page",src:n(9550).Z,width:"3584",height:"1966"})),(0,l.kt)("h2",{id:"editing-a-schedule"},"Editing a schedule"),(0,l.kt)("p",null,"You can perform various tasks related to the selected schedule such as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Toggle the schedule from ",(0,l.kt)("strong",{parentName:"li"},"enabled")," to ",(0,l.kt)("strong",{parentName:"li"},"disabled")," or vice versa"),(0,l.kt)("li",{parentName:"ul"},"Update the timezone"),(0,l.kt)("li",{parentName:"ul"},"Change the frequency"),(0,l.kt)("li",{parentName:"ul"},"Set a new payload")),(0,l.kt)("p",null,"Don't forget to ",(0,l.kt)("strong",{parentName:"p"},"SAVE")," your changes!"))}h.isMDXComponent=!0},1322:function(e,t,n){t.Z=n.p+"assets/images/access_scheduler_from_recap_page-e84c716f44cafa537b38e120c7198791.png"},8912:function(e,t,n){t.Z=n.p+"assets/images/access_scheduler_from_spell-9658aa89d69ffaf36e7340ad14d599a2.png"},2259:function(e,t,n){t.Z=n.p+"assets/images/scheduler_configuration-d3227b2d90c6c6cadbcf4104329c0489.jpg"},2299:function(e,t,n){t.Z=n.p+"assets/images/scheduler_payload-935285274c9d7176a428639b41eed88e.jpg"},9550:function(e,t,n){t.Z=n.p+"assets/images/schedules_recap_page-e9e38f0f458af9aca1480e6b4c6b987a.png"}}]);