(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[114],{2249:function(e,t,o){"use strict";o.r(t);var a=o(1),n=o(502),l=o(503),s=o(505),r=o(247),c=o.n(r),i=o(496),d=o(512),p=o(30),u=o(491),m=o(846),j=o(6),b=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),o=t[0],n=t[1];return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(u.a.Ripple,{color:"primary",id:"ControlledExample",children:"Controlled"}),Object(j.jsx)(m.a,{placement:"top",isOpen:o,target:"ControlledExample",toggle:function(){return n(!o)},children:"Hello World !"})]})},g=o(1196),O=function(){return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(u.a,{color:"primary",id:"UnControlledExample",children:"Uncontrolled"}),Object(j.jsx)(g.a,{placement:"top",target:"UnControlledExample",children:"Hello World !"})]})},h=function(){return Object(j.jsxs)("div",{className:"demo-inline-spacing",children:[Object(j.jsx)(u.a.Ripple,{color:"primary",outline:!0,id:"positionTop",children:"Top"}),Object(j.jsx)(g.a,{placement:"top",target:"positionTop",children:"Tooltip on Top"}),Object(j.jsx)(u.a.Ripple,{color:"primary",outline:!0,id:"positionRight",children:"Right"}),Object(j.jsx)(g.a,{placement:"right",target:"positionRight",children:"Tooltip on Right"}),Object(j.jsx)(u.a.Ripple,{color:"primary",outline:!0,id:"positionBottom",children:"Bottom"}),Object(j.jsx)(g.a,{placement:"bottom",target:"positionBottom",children:"Tooltip on Bottom"}),Object(j.jsx)(u.a.Ripple,{color:"primary",outline:!0,id:"positionLeft",children:"Left"}),Object(j.jsx)(g.a,{placement:"left",target:"positionLeft",children:"Tooltip on Left"})]})},f=Object(j.jsx)("pre",{children:Object(j.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport { Button, Tooltip } from 'reactstrap'\n\nconst TooltipControlled = () => {\n  const [tooltipOpen, setTooltipOpen] = useState(false)\n\n  return (\n    <React.Fragment>\n      <Button.Ripple color='primary' id='ControlledExample'>\n        Controlled\n      </Button.Ripple>\n      <Tooltip\n        placement='top'\n        isOpen={tooltipOpen}\n        target='ControlledExample'\n        toggle={() => setTooltipOpen(!tooltipOpen)}\n      >\n        Hello World !\n      </Tooltip>\n    </React.Fragment>\n  )\n}\nexport default TooltipControlled\n"})}),x=Object(j.jsx)("pre",{children:Object(j.jsx)("code",{className:"language-jsx",children:"\n\nimport { Button, UncontrolledTooltip } from 'reactstrap'\n\nconst TooltipUncontrolled = () => {\n  return (\n    <React.Fragment>\n      <Button color='primary' id='UnControlledExample'>\n        Uncontrolled\n      </Button>\n      <UncontrolledTooltip placement='top' target='UnControlledExample'>\n        Hello World !\n      </UncontrolledTooltip>\n    </React.Fragment>\n  )\n}\nexport default TooltipUncontrolled\n"})}),T=Object(j.jsx)("pre",{children:Object(j.jsx)("code",{className:"language-jsx",children:"\n\nimport { Button, UncontrolledTooltip } from 'reactstrap'\n\nconst TooltipPosition = () => {\n  return (\n    <div className='demo-inline-spacing'>\n      <Button.Ripple color='primary' outline id='positionTop'>\n        Top\n      </Button.Ripple>\n      <UncontrolledTooltip placement='top' target='positionTop'>\n        Tooltip on Top\n      </UncontrolledTooltip>\n\n      <Button.Ripple color='primary' outline id='positionRight'>\n        Right\n      </Button.Ripple>\n      <UncontrolledTooltip placement='right' target='positionRight'>\n        Tooltip on Right\n      </UncontrolledTooltip>\n\n      <Button.Ripple color='primary' outline id='positionBottom'>\n        Bottom\n      </Button.Ripple>\n      <UncontrolledTooltip placement='bottom' target='positionBottom'>\n        Tooltip on Bottom\n      </UncontrolledTooltip>\n\n      <Button.Ripple color='primary' outline id='positionLeft'>\n        Left\n      </Button.Ripple>\n      <UncontrolledTooltip placement='left' target='positionLeft'>\n        Tooltip on Left\n      </UncontrolledTooltip>\n    </div>\n  )\n}\nexport default TooltipPosition\n"})});t.default=function(){return Object(a.useEffect)((function(){c.a.highlightAll()}),[]),Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(i.a,{breadCrumbTitle:"Tooltips",breadCrumbParent:"Components",breadCrumbActive:"Tooltips"}),Object(j.jsxs)(n.a,{children:[Object(j.jsx)(l.a,{xl:"6",lg:"12",children:Object(j.jsxs)(d.a,{title:"Controlled Tooltip",code:f,children:[Object(j.jsxs)(s.a,{children:["For controlled tooltips you'll have to manage state of component.controlled tooltips require"," ",Object(j.jsx)("code",{children:"isOpen"})," and ",Object(j.jsx)("code",{children:"toggle"})," props to work."]}),Object(j.jsx)(b,{})]})}),Object(j.jsx)(l.a,{xl:"6",lg:"12",children:Object(j.jsxs)(d.a,{title:"Uncontrolled Tooltip",code:x,children:[Object(j.jsxs)(s.a,{children:["UncontrolledTooltip does not require",Object(j.jsx)("code",{children:"isOpen"})," nor ",Object(j.jsx)("code",{children:"toggle"})," props to work.All you have to do is provide a valid target to tooltip."]}),Object(j.jsx)(O,{})]})})]}),Object(j.jsx)(n.a,{children:Object(j.jsx)(l.a,{sm:"12",children:Object(j.jsxs)(d.a,{title:"Tooltip Positions",code:T,children:[Object(j.jsxs)(s.a,{className:"mb-0",children:["Use prop ",Object(j.jsx)("code",{children:"placement"})," to change position of tooltip."]}),Object(j.jsx)(h,{})]})})})]})}},496:function(e,t,o){"use strict";var a=o(495),n=o(507),l=o(508),s=o(6);t.a=function(e){var t=e.breadCrumbTitle,o=e.breadCrumbParent,r=e.breadCrumbParent2,c=e.breadCrumbParent3,i=e.breadCrumbActive;return Object(s.jsxs)("div",{className:"content-header row",children:[Object(s.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(s.jsx)("div",{className:"row breadcrumbs-top",children:Object(s.jsxs)("div",{className:"col-12",children:[t?Object(s.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(s.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(s.jsxs)(n.a,{children:[Object(s.jsx)(l.a,{tag:"li",children:Object(s.jsx)(a.b,{to:"/",children:"Home"})}),Object(s.jsx)(l.a,{tag:"li",className:"text-primary",children:o}),r?Object(s.jsx)(l.a,{tag:"li",className:"text-primary",children:r}):"",c?Object(s.jsx)(l.a,{tag:"li",className:"text-primary",children:c}):"",Object(s.jsx)(l.a,{tag:"li",active:!0,children:i})]})})]})})}),Object(s.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(s.jsx)("div",{className:"form-group breadcrum-right dropdown"})})]})}},498:function(e,t,o){"use strict";var a=o(14),n=o(15),l=o(1),s=o.n(l),r=o(2),c=o.n(r),i=o(29),d=o.n(i),p=o(87),u={tag:p.tagPropType,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},m=function(e){var t=e.className,o=e.cssModule,l=e.innerRef,r=e.tag,c=Object(n.a)(e,["className","cssModule","innerRef","tag"]),i=Object(p.mapToCssModules)(d()(t,"card-body"),o);return s.a.createElement(r,Object(a.a)({},c,{className:i,ref:l}))};m.propTypes=u,m.defaultProps={tag:"div"},t.a=m},499:function(e,t,o){"use strict";var a=o(14),n=o(15),l=o(1),s=o.n(l),r=o(2),c=o.n(r),i=o(29),d=o.n(i),p=o(87),u={tag:p.tagPropType,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,o=e.cssModule,l=e.tag,r=Object(n.a)(e,["className","cssModule","tag"]),c=Object(p.mapToCssModules)(d()(t,"card-title"),o);return s.a.createElement(l,Object(a.a)({},r,{className:c}))};m.propTypes=u,m.defaultProps={tag:"div"},t.a=m},500:function(e,t,o){"use strict";var a=o(14),n=o(15),l=o(1),s=o.n(l),r=o(2),c=o.n(r),i=o(29),d=o.n(i),p=o(87),u={tag:p.tagPropType,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,o=e.cssModule,l=e.tag,r=Object(n.a)(e,["className","cssModule","tag"]),c=Object(p.mapToCssModules)(d()(t,"card-header"),o);return s.a.createElement(l,Object(a.a)({},r,{className:c}))};m.propTypes=u,m.defaultProps={tag:"div"},t.a=m},502:function(e,t,o){"use strict";var a=o(14),n=o(15),l=o(1),s=o.n(l),r=o(2),c=o.n(r),i=o(29),d=o.n(i),p=o(87),u=c.a.oneOfType([c.a.number,c.a.string]),m={tag:p.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},j={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,o=e.cssModule,l=e.noGutters,r=e.tag,c=e.form,i=e.widths,u=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];i.forEach((function(t,o){var a=e[t];if(delete u[t],a){var n=!o;m.push(n?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var j=Object(p.mapToCssModules)(d()(t,l?"no-gutters":null,c?"form-row":"row",m),o);return s.a.createElement(r,Object(a.a)({},u,{className:j}))};b.propTypes=m,b.defaultProps=j,t.a=b},503:function(e,t,o){"use strict";var a=o(14),n=o(15),l=o(1),s=o.n(l),r=o(2),c=o.n(r),i=o(29),d=o.n(i),p=o(87),u=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:u,offset:u})]),j={tag:p.tagPropType,xs:m,sm:m,md:m,lg:m,xl:m,className:c.a.string,cssModule:c.a.object,widths:c.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,o){return!0===o||""===o?e?"col":"col-"+t:"auto"===o?e?"col-auto":"col-"+t+"-auto":e?"col-"+o:"col-"+t+"-"+o},O=function(e){var t=e.className,o=e.cssModule,l=e.widths,r=e.tag,c=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];l.forEach((function(t,a){var n=e[t];if(delete c[t],n||""===n){var l=!a;if(Object(p.isObject)(n)){var s,r=l?"-":"-"+t+"-",u=g(l,t,n.size);i.push(Object(p.mapToCssModules)(d()(((s={})[u]=n.size||""===n.size,s["order"+r+n.order]=n.order||0===n.order,s["offset"+r+n.offset]=n.offset||0===n.offset,s)),o))}else{var m=g(l,t,n);i.push(m)}}})),i.length||i.push("col");var u=Object(p.mapToCssModules)(d()(t,i),o);return s.a.createElement(r,Object(a.a)({},c,{className:u}))};O.propTypes=j,O.defaultProps=b,t.a=O},504:function(e,t,o){"use strict";var a=o(14),n=o(15),l=o(1),s=o.n(l),r=o(2),c=o.n(r),i=o(29),d=o.n(i),p=o(87),u={tag:p.tagPropType,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},m=function(e){var t=e.className,o=e.cssModule,l=e.color,r=e.body,c=e.inverse,i=e.outline,u=e.tag,m=e.innerRef,j=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(p.mapToCssModules)(d()(t,"card",!!c&&"text-white",!!r&&"card-body",!!l&&(i?"border":"bg")+"-"+l),o);return s.a.createElement(u,Object(a.a)({},j,{className:b,ref:m}))};m.propTypes=u,m.defaultProps={tag:"div"},t.a=m},505:function(e,t,o){"use strict";var a=o(14),n=o(15),l=o(1),s=o.n(l),r=o(2),c=o.n(r),i=o(29),d=o.n(i),p=o(87),u={tag:p.tagPropType,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,o=e.cssModule,l=e.tag,r=Object(n.a)(e,["className","cssModule","tag"]),c=Object(p.mapToCssModules)(d()(t,"card-text"),o);return s.a.createElement(l,Object(a.a)({},r,{className:c}))};m.propTypes=u,m.defaultProps={tag:"p"},t.a=m},507:function(e,t,o){"use strict";var a=o(14),n=o(15),l=o(1),s=o.n(l),r=o(2),c=o.n(r),i=o(29),d=o.n(i),p=o(87),u={tag:p.tagPropType,listTag:p.tagPropType,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,children:c.a.node,"aria-label":c.a.string},m=function(e){var t=e.className,o=e.listClassName,l=e.cssModule,r=e.children,c=e.tag,i=e.listTag,u=e["aria-label"],m=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),j=Object(p.mapToCssModules)(d()(t),l),b=Object(p.mapToCssModules)(d()("breadcrumb",o),l);return s.a.createElement(c,Object(a.a)({},m,{className:j,"aria-label":u}),s.a.createElement(i,{className:b},r))};m.propTypes=u,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=m},508:function(e,t,o){"use strict";var a=o(14),n=o(15),l=o(1),s=o.n(l),r=o(2),c=o.n(r),i=o(29),d=o.n(i),p=o(87),u={tag:p.tagPropType,active:c.a.bool,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,o=e.cssModule,l=e.active,r=e.tag,c=Object(n.a)(e,["className","cssModule","active","tag"]),i=Object(p.mapToCssModules)(d()(t,!!l&&"active","breadcrumb-item"),o);return s.a.createElement(r,Object(a.a)({},c,{className:i,"aria-current":l?"page":void 0}))};m.propTypes=u,m.defaultProps={tag:"li"},t.a=m},512:function(e,t,o){"use strict";var a=o(30),n=o(1),l=o(1092),s=o(498),r=o(504),c=o(500),i=o(499),d=o(779),p=o(6);t.a=function(e){var t=e.title,o=e.children,u=e.noBody,m=e.code,j=e.iconCode,b=Object(n.useState)(!1),g=Object(a.a)(b,2),O=g[0],h=g[1],f=j||Object(p.jsx)(l.a,{size:15}),x=u?n.Fragment:s.a;return Object(p.jsxs)(r.a,{className:"card-snippet",children:[Object(p.jsxs)(c.a,{children:[Object(p.jsx)(i.a,{tag:"h4",children:t}),Object(p.jsx)("div",{className:"views cursor-pointer",onClick:function(){return h(!O)},children:f})]}),Object(p.jsx)(x,{children:o}),Object(p.jsx)(d.a,{isOpen:O,children:Object(p.jsx)(s.a,{children:m})})]})}}}]);
//# sourceMappingURL=114.c081c4b0.chunk.js.map