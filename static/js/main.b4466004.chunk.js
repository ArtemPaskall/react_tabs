(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c=n(3),i=n.n(c),a=n(4),b=n(1),o=(n(9),n(0)),r=function(t){var e,n=t.tabs,c=t.selectedTabId,i=t.onTabSelected,a=n.find((function(t){return t.id===c}));return Object(b.useEffect)((function(){a=n.find((function(t){return t.id===c}))}),[c]),Object(o.jsxs)(o.Fragment,{children:[n.map((function(t){return Object(o.jsx)("button",{type:"button",onClick:function(){return i(t)},children:t.title},t.id)})),Object(o.jsx)("p",{children:null===(e=a)||void 0===e?void 0:e.content})]})},s=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],d=function(){var t=Object(b.useState)(s[0]),e=Object(a.a)(t,2),n=e[0],c=e[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("h1",{children:["Selected tab is\xa0",n.title]}),Object(o.jsx)(r,{tabs:s,selectedTabId:n.id,onTabSelected:function(t){c(t)}})]})};i.a.render(Object(o.jsx)(d,{}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.b4466004.chunk.js.map