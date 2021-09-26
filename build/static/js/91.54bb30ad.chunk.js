(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[91],{2191:function(e,a,t){"use strict";t.r(a);var s=t(1),c=t(502),r=t(503),n=t(496),l=t(579),i=t(504),o=t(500),d=t(499),j=t(498),b=t(505),u=t(518),m=t(6),h=function(){return Object(m.jsxs)(i.a,{children:[Object(m.jsx)(o.a,{children:Object(m.jsx)(d.a,{tag:"h4",children:"Step"})}),Object(m.jsxs)(j.a,{children:[Object(m.jsxs)(b.a,{children:["The default step increment is ",Object(m.jsx)("code",{children:"1"}),", and can be changed via the ",Object(m.jsx)("code",{children:"step"})," prop (decimal values allowed). When ",Object(m.jsx)("code",{children:"step"})," is set, the value will always be a multiple of the step size plus the minimum value."]}),Object(m.jsx)(u.a,{for:"step-number-input",children:"Number Input with step of 0.25"}),Object(m.jsx)(l.a,{id:"step-number-input",max:10,step:.25})]})]})},p=function(){return Object(m.jsxs)(i.a,{children:[Object(m.jsx)(o.a,{children:Object(m.jsx)(d.a,{tag:"h4",children:"Number Wrapping"})}),Object(m.jsxs)(j.a,{children:[Object(m.jsxs)(b.a,{children:["To allow the Number Input to wrap from max to min when incrementing (or min to max when decrementing), set the",Object(m.jsx)("code",{children:"wrap"})," prop to ",Object(m.jsx)("code",{children:"true"}),"."]}),Object(m.jsx)(u.a,{for:"wrap-number-input",children:"Wrapping value Number Input"}),Object(m.jsx)(l.a,{id:"wrap-number-input",max:10,wrap:!0})]})]})},O=t(30),x=t(527),f=function(){var e=Object(s.useState)(0),a=Object(O.a)(e,2),t=a[0],c=a[1];return Object(m.jsxs)(i.a,{children:[Object(m.jsx)(o.a,{children:Object(m.jsx)(d.a,{tag:"h4",children:"Basic"})}),Object(m.jsxs)(j.a,{children:[Object(m.jsx)(b.a,{children:"Number Input is used for incrementing or decrementing a numerical value within a range of a minimum and maximum number, with optional step value."}),Object(m.jsxs)("div",{className:"mt-2",children:[Object(m.jsx)(u.a,{for:"basic-number-input",children:"Number Input"}),Object(m.jsx)(l.a,{id:"basic-number-input",value:t,onChange:function(e){return c(e)}}),Object(m.jsxs)(b.a,{className:"mt-1",children:["Value: ",t]}),Object(m.jsx)(x.a,{className:"mb-0",color:"success",children:Object(m.jsx)("div",{className:"alert-body",children:Object(m.jsx)("span",{children:"The ArrowUp and ArrowDown keys can be used to increment or decrement the value. "})})})]})]})]})},g=t(1028),N=function(){return Object(m.jsxs)(i.a,{children:[Object(m.jsx)(o.a,{children:Object(m.jsx)(d.a,{tag:"h4",children:"Sizes"})}),Object(m.jsxs)(j.a,{children:[Object(m.jsxs)(b.a,{children:["Just like other Bootstrap Components, ",Object(m.jsx)("code",{children:"<NumberInput />"})," supports small and large sizing via setting the ",Object(m.jsx)("code",{children:"size"})," prop to either ",Object(m.jsx)("code",{children:"'sm'"})," or ",Object(m.jsx)("code",{children:"'lg'"}),", respectively."]}),Object(m.jsxs)(g.a,{children:[Object(m.jsx)(u.a,{for:"lg-number-input",children:"Large Number Input"}),Object(m.jsx)(l.a,{id:"lg-number-input",size:"lg"})]}),Object(m.jsxs)(g.a,{children:[Object(m.jsx)(u.a,{for:"default-number-input",children:"Default Number Input"}),Object(m.jsx)(l.a,{id:"default-number-input"})]}),Object(m.jsxs)(g.a,{children:[Object(m.jsx)(u.a,{for:"sm-number-input",children:"Small Number Input"}),Object(m.jsx)(l.a,{id:"sm-number-input",size:"sm"})]})]})]})},v=function(){return Object(m.jsxs)(i.a,{children:[Object(m.jsx)(o.a,{children:Object(m.jsx)(d.a,{tag:"h4",children:"Width"})}),Object(m.jsxs)(j.a,{children:[Object(m.jsxs)(b.a,{children:["You can control width via utility classes with prop ",Object(m.jsx)("code",{children:"className"})," such as ",Object(m.jsx)("code",{children:"w-50"}),","," ",Object(m.jsx)("code",{children:"w-75"}),", ",Object(m.jsx)("code",{children:"w-100"}),", or use ",Object(m.jsx)("code",{children:"style"})," prop to set the width."]}),Object(m.jsx)(g.a,{children:Object(m.jsx)(l.a,{style:{width:"200px"}})}),Object(m.jsx)(g.a,{children:Object(m.jsx)(l.a,{className:"w-50"})}),Object(m.jsx)(g.a,{children:Object(m.jsx)(l.a,{className:"w-75"})}),Object(m.jsx)(g.a,{children:Object(m.jsx)(l.a,{className:"w-100"})})]})]})},y=function(){return Object(m.jsxs)(i.a,{children:[Object(m.jsx)(o.a,{children:Object(m.jsx)(d.a,{tag:"h4",children:"Inline"})}),Object(m.jsxs)(j.a,{children:[Object(m.jsxs)(b.a,{children:["Use ",Object(m.jsx)("code",{children:"flex"})," as wrapper to show Number Input as inline component"]}),Object(m.jsxs)(g.a,{className:"d-flex align-items-center",children:[Object(m.jsx)(u.a,{for:"inline-number-input",children:"Inline Number Input"}),Object(m.jsx)(l.a,{className:"w-auto ml-1",id:"inline-number-input"})]})]})]})},w=function(){return Object(m.jsxs)(i.a,{children:[Object(m.jsx)(o.a,{children:Object(m.jsx)(d.a,{tag:"h4",children:"Min & Max"})}),Object(m.jsxs)(j.a,{children:[Object(m.jsxs)(b.a,{children:["Number Input have a default range from ",Object(m.jsx)("code",{children:"1"})," to ",Object(m.jsx)("code",{children:"100"}),", which can be changed by setting the",Object(m.jsx)("code",{children:"min"})," and ",Object(m.jsx)("code",{children:"max"})," props."]}),Object(m.jsx)(u.a,{for:"min-max-number-input",children:"Number Input with min 0 and max 10"}),Object(m.jsx)(l.a,{id:"min-max-number-input",min:0,max:10})]})]})},T=function(){return Object(m.jsxs)(i.a,{children:[Object(m.jsx)(o.a,{children:Object(m.jsx)(d.a,{tag:"h4",children:"Disabled & Readonly states"})}),Object(m.jsxs)(j.a,{children:[Object(m.jsxs)(b.a,{children:["Setting the prop ",Object(m.jsx)("code",{children:"disabled"})," places the component in a disabled, non-interactive state. The"," ",Object(m.jsx)("code",{children:"readonly"}),"prop places the component in a readonly state (focusable, but the value cannot be changed by the user)."]}),Object(m.jsxs)(c.a,{children:[Object(m.jsxs)(r.a,{md:"6",className:"mb-md-0 mb-2",children:[Object(m.jsx)(u.a,{for:"disabled-number-input",children:"Disabled Number Input"}),Object(m.jsx)(l.a,{disabled:!0,id:"disabled-number-input"})]}),Object(m.jsxs)(r.a,{md:"6",children:[Object(m.jsx)(u.a,{for:"readonly-number-input",children:"Readonly Number Input"}),Object(m.jsx)(l.a,{readonly:!0,id:"readonly-number-input"})]})]})]})]})},M=function(){return Object(m.jsxs)(i.a,{children:[Object(m.jsx)(o.a,{children:Object(m.jsx)(d.a,{tag:"h4",children:"Vertical"})}),Object(m.jsxs)(j.a,{children:[Object(m.jsxs)(b.a,{children:["Use prop ",Object(m.jsx)("code",{children:"vertical"})," for a vertical Number Input."]}),Object(m.jsxs)("div",{className:"d-flex justify-content-between flex-wrap",children:[Object(m.jsx)(l.a,{id:"wrap-number-input",vertical:!0,min:1,max:10,size:"lg"}),Object(m.jsx)(l.a,{id:"wrap-number-input",vertical:!0,min:1,max:10}),Object(m.jsx)(l.a,{id:"wrap-number-input",vertical:!0,min:1,max:10,size:"sm"})]})]})]})},P=t(1080),C=t(1083),I=t(1081),z=t(1082),E=function(){return Object(m.jsxs)(i.a,{children:[Object(m.jsx)(o.a,{children:Object(m.jsx)(d.a,{tag:"h4",children:"Custom Icons"})}),Object(m.jsxs)(j.a,{children:[Object(m.jsxs)(b.a,{children:["Use props ",Object(m.jsx)("code",{children:"upIcon"})," or ",Object(m.jsx)("code",{children:"downIcon"})," to change ",Object(m.jsx)("code",{children:"increment"})," and"," ",Object(m.jsx)("code",{children:"decrement"})," icons."]}),Object(m.jsxs)(c.a,{children:[Object(m.jsx)(r.a,{md:"6",className:"mb-md-0 mb-2",children:Object(m.jsx)(l.a,{downIcon:Object(m.jsx)(P.a,{size:14}),upIcon:Object(m.jsx)(C.a,{size:14})})}),Object(m.jsx)(r.a,{md:"6",children:Object(m.jsx)(l.a,{downIcon:Object(m.jsx)(I.a,{size:14}),upIcon:Object(m.jsx)(z.a,{size:14})})})]})]})]})};a.default=function(){return Object(m.jsxs)(s.Fragment,{children:[Object(m.jsx)(n.a,{breadCrumbTitle:"Number Input",breadCrumbParent:"Form Elements",breadCrumbActive:"Number Input"}),Object(m.jsxs)(c.a,{className:"match-height",children:[Object(m.jsx)(r.a,{md:"6",sm:"12",children:Object(m.jsx)(f,{})}),Object(m.jsx)(r.a,{md:"6",sm:"12",children:Object(m.jsx)(N,{})}),Object(m.jsx)(r.a,{md:"6",sm:"12",children:Object(m.jsx)(w,{})}),Object(m.jsx)(r.a,{md:"6",sm:"12",children:Object(m.jsx)(h,{})}),Object(m.jsx)(r.a,{md:"6",sm:"12",children:Object(m.jsx)(p,{})}),Object(m.jsx)(r.a,{md:"6",sm:"12",children:Object(m.jsx)(M,{})}),Object(m.jsx)(r.a,{lg:"6",sm:"12",children:Object(m.jsx)(y,{})}),Object(m.jsx)(r.a,{lg:"6",sm:"12",children:Object(m.jsx)(T,{})}),Object(m.jsx)(r.a,{sm:"12",children:Object(m.jsx)(E,{})}),Object(m.jsx)(r.a,{sm:"12",children:Object(m.jsx)(v,{})})]})]})}},496:function(e,a,t){"use strict";var s=t(495),c=t(507),r=t(508),n=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,l=e.breadCrumbParent2,i=e.breadCrumbParent3,o=e.breadCrumbActive;return Object(n.jsxs)("div",{className:"content-header row",children:[Object(n.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(n.jsx)("div",{className:"row breadcrumbs-top",children:Object(n.jsxs)("div",{className:"col-12",children:[a?Object(n.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(n.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(n.jsxs)(c.a,{children:[Object(n.jsx)(r.a,{tag:"li",children:Object(n.jsx)(s.b,{to:"/",children:"Home"})}),Object(n.jsx)(r.a,{tag:"li",className:"text-primary",children:t}),l?Object(n.jsx)(r.a,{tag:"li",className:"text-primary",children:l}):"",i?Object(n.jsx)(r.a,{tag:"li",className:"text-primary",children:i}):"",Object(n.jsx)(r.a,{tag:"li",active:!0,children:o})]})})]})})}),Object(n.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(n.jsx)("div",{className:"form-group breadcrum-right dropdown"})})]})}},498:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(29),d=t.n(o),j=t(87),b={tag:j.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},u=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,l=e.tag,i=Object(c.a)(e,["className","cssModule","innerRef","tag"]),o=Object(j.mapToCssModules)(d()(a,"card-body"),t);return n.a.createElement(l,Object(s.a)({},i,{className:o,ref:r}))};u.propTypes=b,u.defaultProps={tag:"div"},a.a=u},499:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(29),d=t.n(o),j=t(87),b={tag:j.tagPropType,className:i.a.string,cssModule:i.a.object},u=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(j.mapToCssModules)(d()(a,"card-title"),t);return n.a.createElement(r,Object(s.a)({},l,{className:i}))};u.propTypes=b,u.defaultProps={tag:"div"},a.a=u},500:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(29),d=t.n(o),j=t(87),b={tag:j.tagPropType,className:i.a.string,cssModule:i.a.object},u=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(j.mapToCssModules)(d()(a,"card-header"),t);return n.a.createElement(r,Object(s.a)({},l,{className:i}))};u.propTypes=b,u.defaultProps={tag:"div"},a.a=u},502:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(29),d=t.n(o),j=t(87),b=i.a.oneOfType([i.a.number,i.a.string]),u={tag:j.tagPropType,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},m={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,l=e.tag,i=e.form,o=e.widths,b=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),u=[];o.forEach((function(a,t){var s=e[a];if(delete b[a],s){var c=!t;u.push(c?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var m=Object(j.mapToCssModules)(d()(a,r?"no-gutters":null,i?"form-row":"row",u),t);return n.a.createElement(l,Object(s.a)({},b,{className:m}))};h.propTypes=u,h.defaultProps=m,a.a=h},503:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(29),d=t.n(o),j=t(87),b=i.a.oneOfType([i.a.number,i.a.string]),u=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:b,offset:b})]),m={tag:j.tagPropType,xs:u,sm:u,md:u,lg:u,xl:u,className:i.a.string,cssModule:i.a.object,widths:i.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},O=function(e){var a=e.className,t=e.cssModule,r=e.widths,l=e.tag,i=Object(c.a)(e,["className","cssModule","widths","tag"]),o=[];r.forEach((function(a,s){var c=e[a];if(delete i[a],c||""===c){var r=!s;if(Object(j.isObject)(c)){var n,l=r?"-":"-"+a+"-",b=p(r,a,c.size);o.push(Object(j.mapToCssModules)(d()(((n={})[b]=c.size||""===c.size,n["order"+l+c.order]=c.order||0===c.order,n["offset"+l+c.offset]=c.offset||0===c.offset,n)),t))}else{var u=p(r,a,c);o.push(u)}}})),o.length||o.push("col");var b=Object(j.mapToCssModules)(d()(a,o),t);return n.a.createElement(l,Object(s.a)({},i,{className:b}))};O.propTypes=m,O.defaultProps=h,a.a=O},504:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(29),d=t.n(o),j=t(87),b={tag:j.tagPropType,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},u=function(e){var a=e.className,t=e.cssModule,r=e.color,l=e.body,i=e.inverse,o=e.outline,b=e.tag,u=e.innerRef,m=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(j.mapToCssModules)(d()(a,"card",!!i&&"text-white",!!l&&"card-body",!!r&&(o?"border":"bg")+"-"+r),t);return n.a.createElement(b,Object(s.a)({},m,{className:h,ref:u}))};u.propTypes=b,u.defaultProps={tag:"div"},a.a=u},505:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(29),d=t.n(o),j=t(87),b={tag:j.tagPropType,className:i.a.string,cssModule:i.a.object},u=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(j.mapToCssModules)(d()(a,"card-text"),t);return n.a.createElement(r,Object(s.a)({},l,{className:i}))};u.propTypes=b,u.defaultProps={tag:"p"},a.a=u},507:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(29),d=t.n(o),j=t(87),b={tag:j.tagPropType,listTag:j.tagPropType,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},u=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,l=e.children,i=e.tag,o=e.listTag,b=e["aria-label"],u=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),m=Object(j.mapToCssModules)(d()(a),r),h=Object(j.mapToCssModules)(d()("breadcrumb",t),r);return n.a.createElement(i,Object(s.a)({},u,{className:m,"aria-label":b}),n.a.createElement(o,{className:h},l))};u.propTypes=b,u.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=u},508:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(29),d=t.n(o),j=t(87),b={tag:j.tagPropType,active:i.a.bool,className:i.a.string,cssModule:i.a.object},u=function(e){var a=e.className,t=e.cssModule,r=e.active,l=e.tag,i=Object(c.a)(e,["className","cssModule","active","tag"]),o=Object(j.mapToCssModules)(d()(a,!!r&&"active","breadcrumb-item"),t);return n.a.createElement(l,Object(s.a)({},i,{className:o,"aria-current":r?"page":void 0}))};u.propTypes=b,u.defaultProps={tag:"li"},a.a=u},518:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(29),d=t.n(o),j=t(87),b=i.a.oneOfType([i.a.number,i.a.string]),u=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:b,order:b,offset:b})]),m={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:j.tagPropType,className:i.a.string,cssModule:i.a.object,xs:u,sm:u,md:u,lg:u,xl:u,widths:i.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},p=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},O=function(e){var a=e.className,t=e.cssModule,r=e.hidden,l=e.widths,i=e.tag,o=e.check,b=e.size,u=e.for,m=Object(c.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];l.forEach((function(a,s){var c=e[a];if(delete m[a],c||""===c){var r,n=!s;if(Object(j.isObject)(c)){var l,i=n?"-":"-"+a+"-";r=p(n,a,c.size),h.push(Object(j.mapToCssModules)(d()(((l={})[r]=c.size||""===c.size,l["order"+i+c.order]=c.order||0===c.order,l["offset"+i+c.offset]=c.offset||0===c.offset,l))),t)}else r=p(n,a,c),h.push(r)}}));var O=Object(j.mapToCssModules)(d()(a,!!r&&"sr-only",!!o&&"form-check-label",!!b&&"col-form-label-"+b,h,!!h.length&&"col-form-label"),t);return n.a.createElement(i,Object(s.a)({htmlFor:u},m,{className:O}))};O.propTypes=m,O.defaultProps=h,a.a=O},527:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(501),n=t(1),l=t.n(n),i=t(2),o=t.n(i),d=t(29),j=t.n(d),b=t(87),u=t(513);function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function h(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){Object(r.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var p={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:b.tagPropType,transition:o.a.shape(u.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},O={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:h(h({},u.a.defaultProps),{},{unmountOnExit:!0})};function x(e){var a=e.className,t=e.closeClassName,r=e.closeAriaLabel,n=e.cssModule,i=e.tag,o=e.color,d=e.isOpen,m=e.toggle,p=e.children,O=e.transition,x=e.fade,f=e.innerRef,g=Object(c.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),N=Object(b.mapToCssModules)(j()(a,"alert","alert-"+o,{"alert-dismissible":m}),n),v=Object(b.mapToCssModules)(j()("close",t),n),y=h(h(h({},u.a.defaultProps),O),{},{baseClass:x?O.baseClass:"",timeout:x?O.timeout:0});return l.a.createElement(u.a,Object(s.a)({},g,y,{tag:i,className:N,in:d,role:"alert",innerRef:f}),m?l.a.createElement("button",{type:"button",className:v,"aria-label":r,onClick:m},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,p)}x.propTypes=p,x.defaultProps=O,a.a=x}}]);
//# sourceMappingURL=91.54bb30ad.chunk.js.map