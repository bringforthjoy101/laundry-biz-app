(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[169],{2291:function(e,a,t){"use strict";t.r(a);t(1);var s=t(839),c=t(495),n=t(509),r=t.n(n),l=t(88),i=t(502),o=t(503),d=t(527),u=t(504),j=(t(500),t(6)),b=t(497),p=t(498),m=t(505),O=function(e){var a=e.selectedContact;return Object(j.jsx)(u.a,{children:Object(j.jsx)(p.a,{children:Object(j.jsxs)(i.a,{className:"my-2",children:[Object(j.jsx)(o.a,{className:"d-flex align-items-center justify-content-center mb-2 mb-md-0",md:"5",xs:"12",children:Object(j.jsx)("div",{className:"d-flex justify-content-start",children:function(){if(null!==a&&a.avatar)return Object(j.jsx)("img",{src:a.avatar,alt:"user-avatar",className:"img-fluid rounded",height:"104",width:"104"});var e=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return Object(j.jsx)(b.a,{initials:!0,color:e,className:"rounded",content:"".concat(a.name),contentStyles:{borderRadius:0,fontSize:"calc(36px)",width:"100%",height:"100%"},style:{height:"90px",width:"90px"}})}()})}),Object(j.jsx)("div",{className:"d-flex flex-column ml-1",children:Object(j.jsxs)(o.a,{children:[Object(j.jsxs)("h4",{children:["Full Name: ",null!==a?"".concat(a.name):"Invoice Admin"]}),Object(j.jsxs)(m.a,{className:"mt-1",children:["Email: ",null!==a?a.email:"appia.admin@appiawave.com"]}),Object(j.jsxs)(m.a,{className:"mt-1",children:["User Id: ",a.id]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsxs)("h6",{children:["Subject: ",Object(j.jsx)("span",{children:a.subject})]}),Object(j.jsxs)("h6",{className:"ml-5",children:["Date ",Object(j.jsx)("span",{children:r()(a.created_at).format("lll")})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("p",{children:["Message: ",Object(j.jsx)("span",{children:a.message})]})]})})]})})})};t(506),a.default=function(e){var a=Object(l.c)((function(e){return e.appiaContacts})),t=Object(s.i)().id;return null!==a.selectedContact&&void 0!==a.selectedContact?Object(j.jsx)("div",{className:"app-user-view",children:Object(j.jsx)(i.a,{children:Object(j.jsx)(o.a,{xl:"9",lg:"8",md:"7",children:Object(j.jsx)(O,{selectedContact:a.selectedContact})})})}):Object(j.jsxs)(d.a,{color:"danger",children:[Object(j.jsx)("h4",{className:"alert-heading",children:"Users not found"}),Object(j.jsxs)("div",{className:"alert-body",children:["Users with id: ",t," doesn't exist. Check list of all Users: ",Object(j.jsx)(c.b,{to:"/app/user/list",children:"Users List"})]})]})}},498:function(e,a,t){"use strict";var s=t(14),c=t(15),n=t(1),r=t.n(n),l=t(2),i=t.n(l),o=t(29),d=t.n(o),u=t(87),j={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},b=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,l=e.tag,i=Object(c.a)(e,["className","cssModule","innerRef","tag"]),o=Object(u.mapToCssModules)(d()(a,"card-body"),t);return r.a.createElement(l,Object(s.a)({},i,{className:o,ref:n}))};b.propTypes=j,b.defaultProps={tag:"div"},a.a=b},500:function(e,a,t){"use strict";var s=t(14),c=t(15),n=t(1),r=t.n(n),l=t(2),i=t.n(l),o=t(29),d=t.n(o),u=t(87),j={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object},b=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(u.mapToCssModules)(d()(a,"card-header"),t);return r.a.createElement(n,Object(s.a)({},l,{className:i}))};b.propTypes=j,b.defaultProps={tag:"div"},a.a=b},505:function(e,a,t){"use strict";var s=t(14),c=t(15),n=t(1),r=t.n(n),l=t(2),i=t.n(l),o=t(29),d=t.n(o),u=t(87),j={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object},b=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(u.mapToCssModules)(d()(a,"card-text"),t);return r.a.createElement(n,Object(s.a)({},l,{className:i}))};b.propTypes=j,b.defaultProps={tag:"p"},a.a=b},506:function(e,a,t){},527:function(e,a,t){"use strict";var s=t(14),c=t(15),n=t(501),r=t(1),l=t.n(r),i=t(2),o=t.n(i),d=t(29),u=t.n(d),j=t(87),b=t(513);function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var O={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:j.tagPropType,transition:o.a.shape(b.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},f={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:m(m({},b.a.defaultProps),{},{unmountOnExit:!0})};function h(e){var a=e.className,t=e.closeClassName,n=e.closeAriaLabel,r=e.cssModule,i=e.tag,o=e.color,d=e.isOpen,p=e.toggle,O=e.children,f=e.transition,h=e.fade,g=e.innerRef,x=Object(c.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),v=Object(j.mapToCssModules)(u()(a,"alert","alert-"+o,{"alert-dismissible":p}),r),y=Object(j.mapToCssModules)(u()("close",t),r),N=m(m(m({},b.a.defaultProps),f),{},{baseClass:h?f.baseClass:"",timeout:h?f.timeout:0});return l.a.createElement(b.a,Object(s.a)({},x,N,{tag:i,className:v,in:d,role:"alert",innerRef:g}),p?l.a.createElement("button",{type:"button",className:y,"aria-label":n,onClick:p},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,O)}h.propTypes=O,h.defaultProps=f,a.a=h}}]);
//# sourceMappingURL=169.ac2932b8.chunk.js.map