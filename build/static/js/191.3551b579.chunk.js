(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[191],{2175:function(e,a,t){"use strict";t.r(a);var s=t(1),r=t(527),c=t(496),l=t(1013),n=t(6);a.default=function(){return Object(n.jsxs)(s.Fragment,{children:[Object(n.jsx)(c.a,{breadCrumbTitle:"Layout without menu",breadCrumbParent:"Layouts",breadCrumbActive:"Layout without menu"}),Object(n.jsx)(r.a,{color:"primary",children:Object(n.jsxs)("div",{className:"alert-body",children:[Object(n.jsx)("span",{className:"font-weight-bold",children:"Info: "}),Object(n.jsxs)("span",{children:["Please check the"," ",Object(n.jsx)("a",{href:"https://pixinvent.com/demo/Appia-react-admin-dashboard-template/documentation/development/page-layouts",target:"_blank",children:"Layout without menu documentation"})," ","for more details."]})]})}),Object(n.jsx)(l.default,{})]})}},496:function(e,a,t){"use strict";var s=t(495),r=t(507),c=t(508),l=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,n=e.breadCrumbParent2,o=e.breadCrumbParent3,i=e.breadCrumbActive;return Object(l.jsxs)("div",{className:"content-header row",children:[Object(l.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(l.jsx)("div",{className:"row breadcrumbs-top",children:Object(l.jsxs)("div",{className:"col-12",children:[a?Object(l.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(l.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(c.a,{tag:"li",children:Object(l.jsx)(s.b,{to:"/",children:"Home"})}),Object(l.jsx)(c.a,{tag:"li",className:"text-primary",children:t}),n?Object(l.jsx)(c.a,{tag:"li",className:"text-primary",children:n}):"",o?Object(l.jsx)(c.a,{tag:"li",className:"text-primary",children:o}):"",Object(l.jsx)(c.a,{tag:"li",active:!0,children:i})]})})]})})}),Object(l.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(l.jsx)("div",{className:"form-group breadcrum-right dropdown"})})]})}},507:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),l=t.n(c),n=t(2),o=t.n(n),i=t(29),b=t.n(i),d=t(87),u={tag:d.tagPropType,listTag:d.tagPropType,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},m=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,n=e.children,o=e.tag,i=e.listTag,u=e["aria-label"],m=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(d.mapToCssModules)(b()(a),c),j=Object(d.mapToCssModules)(b()("breadcrumb",t),c);return l.a.createElement(o,Object(s.a)({},m,{className:p,"aria-label":u}),l.a.createElement(i,{className:j},n))};m.propTypes=u,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=m},508:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),l=t.n(c),n=t(2),o=t.n(n),i=t(29),b=t.n(i),d=t(87),u={tag:d.tagPropType,active:o.a.bool,className:o.a.string,cssModule:o.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.active,n=e.tag,o=Object(r.a)(e,["className","cssModule","active","tag"]),i=Object(d.mapToCssModules)(b()(a,!!c&&"active","breadcrumb-item"),t);return l.a.createElement(n,Object(s.a)({},o,{className:i,"aria-current":c?"page":void 0}))};m.propTypes=u,m.defaultProps={tag:"li"},a.a=m},527:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(501),l=t(1),n=t.n(l),o=t(2),i=t.n(o),b=t(29),d=t.n(b),u=t(87),m=t(513);function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function j(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){Object(c.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var O={children:i.a.node,className:i.a.string,closeClassName:i.a.string,closeAriaLabel:i.a.string,cssModule:i.a.object,color:i.a.string,fade:i.a.bool,isOpen:i.a.bool,toggle:i.a.func,tag:u.tagPropType,transition:i.a.shape(m.a.propTypes),innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},g={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:j(j({},m.a.defaultProps),{},{unmountOnExit:!0})};function h(e){var a=e.className,t=e.closeClassName,c=e.closeAriaLabel,l=e.cssModule,o=e.tag,i=e.color,b=e.isOpen,p=e.toggle,O=e.children,g=e.transition,h=e.fade,f=e.innerRef,v=Object(r.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),y=Object(u.mapToCssModules)(d()(a,"alert","alert-"+i,{"alert-dismissible":p}),l),N=Object(u.mapToCssModules)(d()("close",t),l),x=j(j(j({},m.a.defaultProps),g),{},{baseClass:h?g.baseClass:"",timeout:h?g.timeout:0});return n.a.createElement(m.a,Object(s.a)({},v,x,{tag:o,className:y,in:b,role:"alert",innerRef:f}),p?n.a.createElement("button",{type:"button",className:N,"aria-label":c,onClick:p},n.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,O)}h.propTypes=O,h.defaultProps=g,a.a=h}}]);
//# sourceMappingURL=191.3551b579.chunk.js.map