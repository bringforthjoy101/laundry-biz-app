(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[96],{2222:function(e,s,a){"use strict";a.r(s);var r=a(1),t=a(502),c=a(503),n=a(505),l=a(247),o=a.n(l),i=a(496),d=a(512),b=a(692),u=a(6),g=function(){return Object(u.jsxs)("div",{className:"demo-vertical-spacing",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Reticulating splines\u2026 0%"}),Object(u.jsx)(b.a,{})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Reticulating splines\u2026 25%"}),Object(u.jsx)(b.a,{value:"25"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Reticulating splines\u2026 50%"}),Object(u.jsx)(b.a,{value:50})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Reticulating splines\u2026 75%"}),Object(u.jsx)(b.a,{value:75})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Reticulating splines\u2026 100%"}),Object(u.jsx)(b.a,{value:"100"})]})]})},j=function(){return Object(u.jsxs)("div",{className:"demo-vertical-spacing",children:[Object(u.jsx)(b.a,{value:25}),Object(u.jsx)(b.a,{className:"progress-bar-secondary",value:35}),Object(u.jsx)(b.a,{className:"progress-bar-success",value:45}),Object(u.jsx)(b.a,{className:"progress-bar-danger",value:55}),Object(u.jsx)(b.a,{className:"progress-bar-warning",value:65}),Object(u.jsx)(b.a,{className:"progress-bar-info",value:75}),Object(u.jsx)(b.a,{className:"progress-bar-dark",value:85})]})},p=function(){return Object(u.jsxs)(b.a,{multi:!0,children:[Object(u.jsx)(b.a,{bar:!0,color:"danger",value:"15",children:"15%"}),Object(u.jsx)(b.a,{bar:!0,color:"warning",value:"50",children:"50%"}),Object(u.jsx)(b.a,{bar:!0,color:"primary",value:"10",children:"10%"})]})},m=function(){return Object(u.jsxs)("div",{className:"demo-vertical-spacing",children:[Object(u.jsx)(b.a,{value:"25",children:"25%"}),Object(u.jsx)(b.a,{value:"35",className:"progress-bar-secondary",children:"35%"}),Object(u.jsx)(b.a,{value:"45",className:"progress-bar-success",children:"45%"}),Object(u.jsx)(b.a,{value:"55",className:"progress-bar-danger",children:"55%"}),Object(u.jsx)(b.a,{className:"progress-bar-warning",value:"65",children:"65%"}),Object(u.jsx)(b.a,{className:"progress-bar-info",value:"75",children:"75%"}),Object(u.jsx)(b.a,{className:"progress-bar-dark",value:"85",children:"85%"})]})},O=function(){return Object(u.jsxs)("div",{className:"demo-vertical-spacing",children:[Object(u.jsx)(b.a,{striped:!0,value:20}),Object(u.jsx)(b.a,{striped:!0,className:"progress-bar-success",value:40}),Object(u.jsx)(b.a,{striped:!0,className:"progress-bar-danger",value:60}),Object(u.jsx)(b.a,{striped:!0,className:"progress-bar-warning",value:80}),Object(u.jsx)(b.a,{striped:!0,className:"progress-bar-info",value:100})]})},v=function(){return Object(u.jsxs)("div",{className:"demo-vertical-spacing",children:[Object(u.jsx)(b.a,{animated:!0,striped:!0,value:20}),Object(u.jsx)(b.a,{animated:!0,striped:!0,className:"progress-bar-success",value:40}),Object(u.jsx)(b.a,{animated:!0,striped:!0,className:"progress-bar-danger",value:60}),Object(u.jsx)(b.a,{animated:!0,striped:!0,className:"progress-bar-warning",value:80}),Object(u.jsx)(b.a,{animated:!0,striped:!0,className:"progress-bar-info",value:100})]})},x=Object(u.jsx)("pre",{children:Object(u.jsx)("code",{className:"language-jsx",children:"\n\nimport { Progress } from 'reactstrap'\nconst ProgressBasic = () => {\n  return (\n    <div className='demo-vertical-spacing'>\n      <div>\n        <span>Reticulating splines\u2026 0%</span>\n        <Progress />\n      </div>\n      <div>\n        <span>Reticulating splines\u2026 25%</span>\n        <Progress value='25' />\n      </div>\n      <div>\n        <span>Reticulating splines\u2026 50%</span>\n        <Progress value={50} />\n      </div>\n      <div>\n        <span>Reticulating splines\u2026 75%</span>\n        <Progress value={75} />\n      </div>\n      <div>\n        <span>Reticulating splines\u2026 100%</span>\n        <Progress value='100' />\n      </div>\n    </div>\n  )\n}\nexport default ProgressBasic\n"})}),h=Object(u.jsx)("pre",{children:Object(u.jsx)("code",{className:"language-jsx",children:"\n\nimport { Progress } from 'reactstrap'\n\nconst ProgressColored = () => {\n  return (\n    <React.Fragment>\n      <Progress value={25} />\n      <Progress className='progress-bar-secondary' value={35} />\n      <Progress className='progress-bar-success' value={45} />\n      <Progress className='progress-bar-danger' value={55} />\n      <Progress className='progress-bar-warning' value={65} />\n      <Progress className='progress-bar-info' value={75} />\n      <Progress className='progress-bar-dark' value={85} />\n    </React.Fragment>\n  )\n}\nexport default ProgressColored\n"})}),f=Object(u.jsx)("pre",{children:Object(u.jsx)("code",{className:"language-jsx",children:"\n\nimport { Progress } from 'reactstrap'\n\nconst ProgressMultipleStacked = () => {\n  return (\n     <Progress multi>\n        <Progress bar color='danger' value='15'>\n          15%\n        </Progress>\n        <Progress bar color='warning' value='50'>\n          50%\n        </Progress>\n        <Progress bar color='primary' value='10'>\n          10%\n        </Progress>\n    </Progress>\n  )\n}\nexport default ProgressMultipleStacked\n"})}),N=Object(u.jsx)("pre",{children:Object(u.jsx)("code",{className:"language-jsx",children:"\n\nimport { Progress } from 'reactstrap'\n\nconst ProgressLabeled = () => {\n  return (\n    <div className='demo-vertical-spacing'>\n      <Progress value='25'>25%</Progress>\n      <Progress value='35' className='progress-bar-secondary'>\n        35%\n      </Progress>\n      <Progress value='45' className='progress-bar-success'>\n        45%\n      </Progress>\n      <Progress value='55' className='progress-bar-danger'>\n        55%\n      </Progress>\n      <Progress className='progress-bar-warning' value='65'>\n        65%\n      </Progress>\n      <Progress className='progress-bar-info' value='75'>\n        75%\n      </Progress>\n      <Progress className='progress-bar-dark' value='85'>\n        85%\n      </Progress>\n    </div>\n  )\n}\nexport default ProgressLabeled\n"})}),P=Object(u.jsx)("pre",{children:Object(u.jsx)("code",{className:"language-jsx",children:"\n\nimport { Progress } from 'reactstrap'\nconst ProgressStriped = () => {\n  return (\n    <React.Fragment>\n      <Progress striped value={20} />\n      <Progress striped className='progress-bar-success' value={40} />\n      <Progress striped className='progress-bar-danger' value={60} />\n      <Progress striped className='progress-bar-warning' value={80} />\n      <Progress striped className='progress-bar-info' value={100} />\n    </React.Fragment>\n  )\n}\nexport default ProgressStriped\n"})}),y=Object(u.jsx)("pre",{children:Object(u.jsx)("code",{className:"language-jsx",children:"\n\nimport { Progress } from 'reactstrap'\n\nconst ProgressAnimated = () => {\n  return (\n    <React.Fragment>\n      <Progress striped value={20} />\n      <Progress striped className='progress-bar-success' value={40} />\n      <Progress striped className='progress-bar-danger' value={60} />\n      <Progress striped className='progress-bar-warning' value={80} />\n      <Progress striped className='progress-bar-info' value={100} />\n    </React.Fragment>\n  )\n}\nexport default ProgressAnimated\n"})});s.default=function(){return Object(r.useEffect)((function(){o.a.highlightAll()}),[]),Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)(i.a,{breadCrumbTitle:"Progress",breadCrumbParent:"Components",breadCrumbActive:"Progress"}),Object(u.jsxs)(t.a,{children:[Object(u.jsx)(c.a,{lg:"12",children:Object(u.jsx)(d.a,{title:"Basic Progress",code:x,children:Object(u.jsx)(g,{})})}),Object(u.jsx)(c.a,{lg:"12",children:Object(u.jsxs)(d.a,{title:"Colored Progress",code:h,children:[Object(u.jsxs)(n.a,{children:["Use ",Object(u.jsx)("code",{children:"progress-bar-[color]"})," class with progress to change progress color."]}),Object(u.jsx)(j,{})]})}),Object(u.jsx)(c.a,{lg:"12",children:Object(u.jsxs)(d.a,{title:"Labeled Progress",code:N,children:[Object(u.jsx)(n.a,{children:"Add text between progress tag to create a labeled progress bar."}),Object(u.jsx)(m,{})]})}),Object(u.jsx)(c.a,{lg:"12",children:Object(u.jsxs)(d.a,{title:"Multiple Stacked",code:f,children:[Object(u.jsxs)(n.a,{children:["To create a multi colored progress wrap all of your progresses in with ",Object(u.jsx)("code",{children:"multi"})," prop."]}),Object(u.jsx)(p,{})]})}),Object(u.jsx)(c.a,{lg:"12",children:Object(u.jsxs)(d.a,{title:"Striped Progress",code:P,children:[Object(u.jsxs)(n.a,{children:["Use ",Object(u.jsx)("code",{children:"striped"})," prop with progress to create a striped progress bar."]}),Object(u.jsx)(O,{})]})}),Object(u.jsx)(c.a,{lg:"12",children:Object(u.jsxs)(d.a,{title:"Animated Progress",code:y,children:[Object(u.jsxs)(n.a,{children:["Use ",Object(u.jsx)("code",{children:"animated"})," prop with progress to animate progress bar."]}),Object(u.jsx)(v,{})]})})]})]})}},496:function(e,s,a){"use strict";var r=a(495),t=a(507),c=a(508),n=a(6);s.a=function(e){var s=e.breadCrumbTitle,a=e.breadCrumbParent,l=e.breadCrumbParent2,o=e.breadCrumbParent3,i=e.breadCrumbActive;return Object(n.jsxs)("div",{className:"content-header row",children:[Object(n.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(n.jsx)("div",{className:"row breadcrumbs-top",children:Object(n.jsxs)("div",{className:"col-12",children:[s?Object(n.jsx)("h2",{className:"content-header-title float-left mb-0",children:s}):"",Object(n.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(n.jsxs)(t.a,{children:[Object(n.jsx)(c.a,{tag:"li",children:Object(n.jsx)(r.b,{to:"/",children:"Home"})}),Object(n.jsx)(c.a,{tag:"li",className:"text-primary",children:a}),l?Object(n.jsx)(c.a,{tag:"li",className:"text-primary",children:l}):"",o?Object(n.jsx)(c.a,{tag:"li",className:"text-primary",children:o}):"",Object(n.jsx)(c.a,{tag:"li",active:!0,children:i})]})})]})})}),Object(n.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(n.jsx)("div",{className:"form-group breadcrum-right dropdown"})})]})}},498:function(e,s,a){"use strict";var r=a(14),t=a(15),c=a(1),n=a.n(c),l=a(2),o=a.n(l),i=a(29),d=a.n(i),b=a(87),u={tag:b.tagPropType,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},g=function(e){var s=e.className,a=e.cssModule,c=e.innerRef,l=e.tag,o=Object(t.a)(e,["className","cssModule","innerRef","tag"]),i=Object(b.mapToCssModules)(d()(s,"card-body"),a);return n.a.createElement(l,Object(r.a)({},o,{className:i,ref:c}))};g.propTypes=u,g.defaultProps={tag:"div"},s.a=g},499:function(e,s,a){"use strict";var r=a(14),t=a(15),c=a(1),n=a.n(c),l=a(2),o=a.n(l),i=a(29),d=a.n(i),b=a(87),u={tag:b.tagPropType,className:o.a.string,cssModule:o.a.object},g=function(e){var s=e.className,a=e.cssModule,c=e.tag,l=Object(t.a)(e,["className","cssModule","tag"]),o=Object(b.mapToCssModules)(d()(s,"card-title"),a);return n.a.createElement(c,Object(r.a)({},l,{className:o}))};g.propTypes=u,g.defaultProps={tag:"div"},s.a=g},500:function(e,s,a){"use strict";var r=a(14),t=a(15),c=a(1),n=a.n(c),l=a(2),o=a.n(l),i=a(29),d=a.n(i),b=a(87),u={tag:b.tagPropType,className:o.a.string,cssModule:o.a.object},g=function(e){var s=e.className,a=e.cssModule,c=e.tag,l=Object(t.a)(e,["className","cssModule","tag"]),o=Object(b.mapToCssModules)(d()(s,"card-header"),a);return n.a.createElement(c,Object(r.a)({},l,{className:o}))};g.propTypes=u,g.defaultProps={tag:"div"},s.a=g},502:function(e,s,a){"use strict";var r=a(14),t=a(15),c=a(1),n=a.n(c),l=a(2),o=a.n(l),i=a(29),d=a.n(i),b=a(87),u=o.a.oneOfType([o.a.number,o.a.string]),g={tag:b.tagPropType,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},j={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var s=e.className,a=e.cssModule,c=e.noGutters,l=e.tag,o=e.form,i=e.widths,u=Object(t.a)(e,["className","cssModule","noGutters","tag","form","widths"]),g=[];i.forEach((function(s,a){var r=e[s];if(delete u[s],r){var t=!a;g.push(t?"row-cols-"+r:"row-cols-"+s+"-"+r)}}));var j=Object(b.mapToCssModules)(d()(s,c?"no-gutters":null,o?"form-row":"row",g),a);return n.a.createElement(l,Object(r.a)({},u,{className:j}))};p.propTypes=g,p.defaultProps=j,s.a=p},503:function(e,s,a){"use strict";var r=a(14),t=a(15),c=a(1),n=a.n(c),l=a(2),o=a.n(l),i=a(29),d=a.n(i),b=a(87),u=o.a.oneOfType([o.a.number,o.a.string]),g=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:u,offset:u})]),j={tag:b.tagPropType,xs:g,sm:g,md:g,lg:g,xl:g,className:o.a.string,cssModule:o.a.object,widths:o.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e,s,a){return!0===a||""===a?e?"col":"col-"+s:"auto"===a?e?"col-auto":"col-"+s+"-auto":e?"col-"+a:"col-"+s+"-"+a},O=function(e){var s=e.className,a=e.cssModule,c=e.widths,l=e.tag,o=Object(t.a)(e,["className","cssModule","widths","tag"]),i=[];c.forEach((function(s,r){var t=e[s];if(delete o[s],t||""===t){var c=!r;if(Object(b.isObject)(t)){var n,l=c?"-":"-"+s+"-",u=m(c,s,t.size);i.push(Object(b.mapToCssModules)(d()(((n={})[u]=t.size||""===t.size,n["order"+l+t.order]=t.order||0===t.order,n["offset"+l+t.offset]=t.offset||0===t.offset,n)),a))}else{var g=m(c,s,t);i.push(g)}}})),i.length||i.push("col");var u=Object(b.mapToCssModules)(d()(s,i),a);return n.a.createElement(l,Object(r.a)({},o,{className:u}))};O.propTypes=j,O.defaultProps=p,s.a=O},504:function(e,s,a){"use strict";var r=a(14),t=a(15),c=a(1),n=a.n(c),l=a(2),o=a.n(l),i=a(29),d=a.n(i),b=a(87),u={tag:b.tagPropType,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},g=function(e){var s=e.className,a=e.cssModule,c=e.color,l=e.body,o=e.inverse,i=e.outline,u=e.tag,g=e.innerRef,j=Object(t.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(b.mapToCssModules)(d()(s,"card",!!o&&"text-white",!!l&&"card-body",!!c&&(i?"border":"bg")+"-"+c),a);return n.a.createElement(u,Object(r.a)({},j,{className:p,ref:g}))};g.propTypes=u,g.defaultProps={tag:"div"},s.a=g},505:function(e,s,a){"use strict";var r=a(14),t=a(15),c=a(1),n=a.n(c),l=a(2),o=a.n(l),i=a(29),d=a.n(i),b=a(87),u={tag:b.tagPropType,className:o.a.string,cssModule:o.a.object},g=function(e){var s=e.className,a=e.cssModule,c=e.tag,l=Object(t.a)(e,["className","cssModule","tag"]),o=Object(b.mapToCssModules)(d()(s,"card-text"),a);return n.a.createElement(c,Object(r.a)({},l,{className:o}))};g.propTypes=u,g.defaultProps={tag:"p"},s.a=g},507:function(e,s,a){"use strict";var r=a(14),t=a(15),c=a(1),n=a.n(c),l=a(2),o=a.n(l),i=a(29),d=a.n(i),b=a(87),u={tag:b.tagPropType,listTag:b.tagPropType,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},g=function(e){var s=e.className,a=e.listClassName,c=e.cssModule,l=e.children,o=e.tag,i=e.listTag,u=e["aria-label"],g=Object(t.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),j=Object(b.mapToCssModules)(d()(s),c),p=Object(b.mapToCssModules)(d()("breadcrumb",a),c);return n.a.createElement(o,Object(r.a)({},g,{className:j,"aria-label":u}),n.a.createElement(i,{className:p},l))};g.propTypes=u,g.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},s.a=g},508:function(e,s,a){"use strict";var r=a(14),t=a(15),c=a(1),n=a.n(c),l=a(2),o=a.n(l),i=a(29),d=a.n(i),b=a(87),u={tag:b.tagPropType,active:o.a.bool,className:o.a.string,cssModule:o.a.object},g=function(e){var s=e.className,a=e.cssModule,c=e.active,l=e.tag,o=Object(t.a)(e,["className","cssModule","active","tag"]),i=Object(b.mapToCssModules)(d()(s,!!c&&"active","breadcrumb-item"),a);return n.a.createElement(l,Object(r.a)({},o,{className:i,"aria-current":c?"page":void 0}))};g.propTypes=u,g.defaultProps={tag:"li"},s.a=g},512:function(e,s,a){"use strict";var r=a(30),t=a(1),c=a(1092),n=a(498),l=a(504),o=a(500),i=a(499),d=a(779),b=a(6);s.a=function(e){var s=e.title,a=e.children,u=e.noBody,g=e.code,j=e.iconCode,p=Object(t.useState)(!1),m=Object(r.a)(p,2),O=m[0],v=m[1],x=j||Object(b.jsx)(c.a,{size:15}),h=u?t.Fragment:n.a;return Object(b.jsxs)(l.a,{className:"card-snippet",children:[Object(b.jsxs)(o.a,{children:[Object(b.jsx)(i.a,{tag:"h4",children:s}),Object(b.jsx)("div",{className:"views cursor-pointer",onClick:function(){return v(!O)},children:x})]}),Object(b.jsx)(h,{children:a}),Object(b.jsx)(d.a,{isOpen:O,children:Object(b.jsx)(n.a,{children:g})})]})}},692:function(e,s,a){"use strict";var r=a(14),t=a(501),c=a(15),n=a(1),l=a.n(n),o=a(2),i=a.n(o),d=a(29),b=a.n(d),u=a(87);function g(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),a.push.apply(a,r)}return a}function j(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?g(Object(a),!0).forEach((function(s){Object(t.a)(e,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))}))}return e}var p={children:i.a.node,bar:i.a.bool,multi:i.a.bool,tag:u.tagPropType,value:i.a.oneOfType([i.a.string,i.a.number]),min:i.a.oneOfType([i.a.string,i.a.number]),max:i.a.oneOfType([i.a.string,i.a.number]),animated:i.a.bool,striped:i.a.bool,color:i.a.string,className:i.a.string,barClassName:i.a.string,cssModule:i.a.object,style:i.a.object,barAriaValueText:i.a.string,barAriaLabelledBy:i.a.string},m=function(e){var s=e.children,a=e.className,t=e.barClassName,n=e.cssModule,o=e.value,i=e.min,d=e.max,g=e.animated,p=e.striped,m=e.color,O=e.bar,v=e.multi,x=e.tag,h=e.style,f=e.barAriaValueText,N=e.barAriaLabelledBy,P=Object(c.a)(e,["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barAriaValueText","barAriaLabelledBy"]),y=Object(u.toNumber)(o)/Object(u.toNumber)(d)*100,T=Object(u.mapToCssModules)(b()(a,"progress"),n),M=Object(u.mapToCssModules)(b()("progress-bar",O&&a||t,g?"progress-bar-animated":null,m?"bg-"+m:null,p||g?"progress-bar-striped":null),n),w=v?s:l.a.createElement("div",Object(r.a)({},P,{className:M,style:j(j({},h),{},{width:y+"%"}),role:"progressbar","aria-valuenow":o,"aria-valuemin":i,"aria-valuemax":d,"aria-valuetext":f,"aria-labelledby":N,children:s}));return O?w:l.a.createElement(x,Object(r.a)({},P,{className:T,children:w}))};m.propTypes=p,m.defaultProps={tag:"div",value:0,min:0,max:100,style:{}},s.a=m}}]);
//# sourceMappingURL=96.03a45b6e.chunk.js.map