(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[189],{2173:function(e,a,t){"use strict";t.r(a);var s=t(1),r=t(527),c=t(496),l=t(1013),n=t(6);a.default=function(){return Object(n.jsxs)(s.Fragment,{children:[Object(n.jsx)(c.a,{breadCrumbTitle:"Layout collapsed menu",breadCrumbParent:"Layouts",breadCrumbActive:"Collapsed menu"}),Object(n.jsx)(r.a,{color:"primary",children:Object(n.jsxs)("div",{className:"alert-body",children:[Object(n.jsx)("span",{className:"font-weight-bold",children:"Info: "}),Object(n.jsxs)("span",{children:["Use this layout to set menu (navigation) default collapsed. Please check"," ",Object(n.jsx)("a",{href:"https://pixinvent.com/demo/Appia-react-admin-dashboard-template/documentation/development/page-layouts",target:"_blank",children:"the Layout collapsed menu documentation"})," ","for more details."]})]})}),Object(n.jsx)(l.default,{})]})}},496:function(e,a,t){"use strict";var s=t(495),r=t(507),c=t(508),l=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,n=e.breadCrumbParent2,o=e.breadCrumbParent3,i=e.breadCrumbActive;return Object(l.jsxs)("div",{className:"content-header row",children:[Object(l.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(l.jsx)("div",{className:"row breadcrumbs-top",children:Object(l.jsxs)("div",{className:"col-12",children:[a?Object(l.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(l.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(c.a,{tag:"li",children:Object(l.jsx)(s.b,{to:"/",children:"Home"})}),Object(l.jsx)(c.a,{tag:"li",className:"text-primary",children:t}),n?Object(l.jsx)(c.a,{tag:"li",className:"text-primary",children:n}):"",o?Object(l.jsx)(c.a,{tag:"li",className:"text-primary",children:o}):"",Object(l.jsx)(c.a,{tag:"li",active:!0,children:i})]})})]})})}),Object(l.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(l.jsx)("div",{className:"form-group breadcrum-right dropdown"})})]})}},507:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),l=t.n(c),n=t(2),o=t.n(n),i=t(29),d=t.n(i),b=t(87),m={tag:b.tagPropType,listTag:b.tagPropType,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},u=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,n=e.children,o=e.tag,i=e.listTag,m=e["aria-label"],u=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(b.mapToCssModules)(d()(a),c),j=Object(b.mapToCssModules)(d()("breadcrumb",t),c);return l.a.createElement(o,Object(s.a)({},u,{className:p,"aria-label":m}),l.a.createElement(i,{className:j},n))};u.propTypes=m,u.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=u},508:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),l=t.n(c),n=t(2),o=t.n(n),i=t(29),d=t.n(i),b=t(87),m={tag:b.tagPropType,active:o.a.bool,className:o.a.string,cssModule:o.a.object},u=function(e){var a=e.className,t=e.cssModule,c=e.active,n=e.tag,o=Object(r.a)(e,["className","cssModule","active","tag"]),i=Object(b.mapToCssModules)(d()(a,!!c&&"active","breadcrumb-item"),t);return l.a.createElement(n,Object(s.a)({},o,{className:i,"aria-current":c?"page":void 0}))};u.propTypes=m,u.defaultProps={tag:"li"},a.a=u},527:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(501),l=t(1),n=t.n(l),o=t(2),i=t.n(o),d=t(29),b=t.n(d),m=t(87),u=t(513);function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function j(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){Object(c.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var g={children:i.a.node,className:i.a.string,closeClassName:i.a.string,closeAriaLabel:i.a.string,cssModule:i.a.object,color:i.a.string,fade:i.a.bool,isOpen:i.a.bool,toggle:i.a.func,tag:m.tagPropType,transition:i.a.shape(u.a.propTypes),innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},O={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:j(j({},u.a.defaultProps),{},{unmountOnExit:!0})};function h(e){var a=e.className,t=e.closeClassName,c=e.closeAriaLabel,l=e.cssModule,o=e.tag,i=e.color,d=e.isOpen,p=e.toggle,g=e.children,O=e.transition,h=e.fade,f=e.innerRef,v=Object(r.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),y=Object(m.mapToCssModules)(b()(a,"alert","alert-"+i,{"alert-dismissible":p}),l),N=Object(m.mapToCssModules)(b()("close",t),l),x=j(j(j({},u.a.defaultProps),O),{},{baseClass:h?O.baseClass:"",timeout:h?O.timeout:0});return n.a.createElement(u.a,Object(s.a)({},v,x,{tag:o,className:y,in:d,role:"alert",innerRef:f}),p?n.a.createElement("button",{type:"button",className:N,"aria-label":c,onClick:p},n.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,g)}h.propTypes=g,h.defaultProps=O,a.a=h}}]);
//# sourceMappingURL=189.c8892920.chunk.js.map