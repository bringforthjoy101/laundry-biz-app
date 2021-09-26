(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[118],{2274:function(e,a,t){"use strict";t.r(a);var s=t(1),r=t(502),c=t(503),l=t(496),n=t(134),i=t(565),o=t(504),d=t(500),m=t(499),b=t(498),j=t(505),u=t(1028),h=t(491),f=t(6),g=function(){return Object(f.jsxs)(o.a,{children:[Object(f.jsx)(d.a,{children:Object(f.jsx)(m.a,{tag:"h4",children:"Basic"})}),Object(f.jsxs)(b.a,{children:[Object(f.jsx)(j.a,{children:"Getting values in and out of form state is easy using formik, you won't have to manage state to make your input a controlled element."}),Object(f.jsx)(i.d,{initialValues:{firstName:"",lastName:"",email:""},onSubmit:function(e){setTimeout((function(){n.f.success(JSON.stringify(e,null,2))}),500)},children:Object(f.jsxs)(i.c,{children:[Object(f.jsxs)(u.a,{children:[Object(f.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(f.jsx)(i.b,{className:"form-control",name:"firstName",placeholder:"Jane"})]}),Object(f.jsxs)(u.a,{children:[Object(f.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(f.jsx)(i.b,{className:"form-control",name:"lastName",placeholder:"Doe"})]}),Object(f.jsxs)(u.a,{children:[Object(f.jsx)("label",{htmlFor:"email",children:"Email"}),Object(f.jsx)(i.b,{className:"form-control",name:"email",placeholder:"jane@acme.com",type:"email"})]}),Object(f.jsx)(h.a.Ripple,{color:"primary",type:"submit",children:"Submit"})]})})]})]})},O=t(577),x=O.c().shape({email:O.d().email("Invalid email address").required("Required"),firstName:O.d().min(2,"Must be longer than 2 characters").max(20,"Nice try, nobody has a first name that long").required("Required"),lastName:O.d().min(2,"Must be longer than 2 characters").max(20,"Nice try, nobody has a last name that long").required("Required")}),p=function(){return Object(f.jsxs)(o.a,{children:[Object(f.jsx)(d.a,{children:Object(f.jsx)(m.a,{tag:"h4",children:"Error Msg"})}),Object(f.jsxs)(b.a,{children:[Object(f.jsxs)(j.a,{children:["You can show error messages with formik using ",Object(f.jsx)("code",{children:"validationSchema"})," prop with formik tag."]}),Object(f.jsx)(i.d,{initialValues:{email:"",firstName:"",lastName:""},validationSchema:x,children:function(e){var a=e.errors,t=e.touched;return Object(f.jsxs)(i.c,{children:[Object(f.jsxs)(u.a,{children:[Object(f.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(f.jsx)(i.b,{type:"text",name:"firstName",placeholder:"Jane",className:"form-control ".concat(a.firstName&&t.firstName&&"is-invalid")}),Object(f.jsx)(i.a,{name:"firstName",component:"div",className:"field-error text-danger"})]}),Object(f.jsxs)(u.a,{children:[Object(f.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(f.jsx)(i.b,{type:"text",name:"lastName",placeholder:"Doe",className:"form-control ".concat(a.email&&t.email&&"is-invalid")}),Object(f.jsx)(i.a,{name:"firstName",children:function(e){return Object(f.jsx)("div",{className:"field-error text-danger",children:e})}})]}),Object(f.jsxs)(u.a,{children:[Object(f.jsx)("label",{htmlFor:"email",children:"Email"}),Object(f.jsx)(i.b,{name:"email",type:"email",placeholder:"jane@acme.com",className:"form-control ".concat(a.lastName&&t.lastName&&"is-invalid")}),Object(f.jsx)(i.a,{name:"email",children:function(e){return Object(f.jsx)("div",{className:"field-error text-danger",children:e})}})]}),Object(f.jsx)(h.a.Ripple,{color:"primary",type:"submit",children:"Submit"})]})}})]})]})},N=t(518),v=O.c().shape({required:O.d().required("Required"),email:O.d().email("Invalid email").required("Required"),number:O.b().required("Required"),url:O.d().url().required("Required"),date:O.a().required("Required"),minlength:O.d().min(4,"Too Short!").required("Required"),maxlength:O.d().max(5,"Too Long!").required("Required")}),y=function(){return Object(f.jsxs)(o.a,{children:[Object(f.jsx)(d.a,{children:Object(f.jsx)(m.a,{tag:"h4",children:" Validation"})}),Object(f.jsx)(b.a,{children:Object(f.jsx)(i.d,{initialValues:{required:"",email:"",url:"",number:"",date:"",minlength:"",maxlength:""},validationSchema:v,children:function(e){var a=e.errors,t=e.touched;return Object(f.jsxs)(i.c,{children:[Object(f.jsxs)(u.a,{children:[Object(f.jsx)(N.a,{for:"required",children:"Name"}),Object(f.jsx)(i.b,{name:"required",id:"required",className:"form-control ".concat(a.required&&t.required&&"is-invalid")}),Object(f.jsx)(i.a,{name:"required",component:"div",className:"field-error text-danger"})]}),Object(f.jsxs)(u.a,{children:[Object(f.jsx)(N.a,{for:"email",children:"Email"}),Object(f.jsx)(i.b,{type:"email",name:"email",id:"email",className:"form-control ".concat(a.email&&t.email&&"is-invalid")}),Object(f.jsx)(i.a,{name:"email",component:"div",className:"field-error text-danger"})]}),Object(f.jsxs)(u.a,{children:[Object(f.jsx)(N.a,{for:"url",children:"Website URL"}),Object(f.jsx)(i.b,{name:"url",id:"url",className:"form-control ".concat(a.url&&t.url&&"is-invalid")}),Object(f.jsx)(i.a,{name:"url",component:"div",className:"field-error text-danger"})]}),Object(f.jsxs)(u.a,{children:[Object(f.jsx)(N.a,{for:"number",children:"Number"}),Object(f.jsx)(i.b,{name:"number",id:"number",className:"form-control ".concat(a.number&&t.number&&"is-invalid")}),Object(f.jsx)(i.a,{name:"number",component:"div",className:"field-error text-danger"})]}),Object(f.jsxs)(u.a,{children:[Object(f.jsx)(N.a,{for:"date",children:"Date"}),Object(f.jsx)(i.b,{type:"date",name:"date",id:"date",className:"form-control ".concat(a.date&&t.date&&"is-invalid")}),Object(f.jsx)(i.a,{name:"date",component:"div",className:"field-error text-danger"})]}),Object(f.jsxs)(u.a,{children:[Object(f.jsx)(N.a,{for:"minlength",children:"Min Length (Minimum 4 Characters)"}),Object(f.jsx)(i.b,{name:"minlength",id:"minlength",className:"form-control ".concat(a.minlength&&t.minlength&&"is-invalid")}),Object(f.jsx)(i.a,{name:"minlength",component:"div",className:"field-error text-danger"})]}),Object(f.jsxs)(u.a,{children:[Object(f.jsx)(N.a,{for:"maxlength",children:"Max Length (Maximum 5 Characters)"}),Object(f.jsx)(i.b,{name:"maxlength",id:"maxlength",className:"form-control ".concat(a.maxlength&&t.maxlength&&"is-invalid")}),Object(f.jsx)(i.a,{name:"maxlength",component:"div",className:"field-error text-danger"})]}),Object(f.jsx)(h.a.Ripple,{color:"primary",type:"submit",children:"Submit"})]})}})})]})};a.default=function(){return Object(f.jsxs)(s.Fragment,{children:[Object(f.jsx)(l.a,{breadCrumbTitle:"Formik",breadCrumbParent:"Form",breadCrumbActive:"Formik"}),Object(f.jsxs)(r.a,{children:[Object(f.jsx)(c.a,{lg:"6",md:"12",children:Object(f.jsx)(g,{})}),Object(f.jsx)(c.a,{lg:"6",md:"12",children:Object(f.jsx)(p,{})}),Object(f.jsx)(c.a,{sm:"12",children:Object(f.jsx)(y,{})})]})]})}},496:function(e,a,t){"use strict";var s=t(495),r=t(507),c=t(508),l=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,n=e.breadCrumbParent2,i=e.breadCrumbParent3,o=e.breadCrumbActive;return Object(l.jsxs)("div",{className:"content-header row",children:[Object(l.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(l.jsx)("div",{className:"row breadcrumbs-top",children:Object(l.jsxs)("div",{className:"col-12",children:[a?Object(l.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(l.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(c.a,{tag:"li",children:Object(l.jsx)(s.b,{to:"/",children:"Home"})}),Object(l.jsx)(c.a,{tag:"li",className:"text-primary",children:t}),n?Object(l.jsx)(c.a,{tag:"li",className:"text-primary",children:n}):"",i?Object(l.jsx)(c.a,{tag:"li",className:"text-primary",children:i}):"",Object(l.jsx)(c.a,{tag:"li",active:!0,children:o})]})})]})})}),Object(l.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(l.jsx)("div",{className:"form-group breadcrum-right dropdown"})})]})}},498:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),l=t.n(c),n=t(2),i=t.n(n),o=t(29),d=t.n(o),m=t(87),b={tag:m.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},j=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,n=e.tag,i=Object(r.a)(e,["className","cssModule","innerRef","tag"]),o=Object(m.mapToCssModules)(d()(a,"card-body"),t);return l.a.createElement(n,Object(s.a)({},i,{className:o,ref:c}))};j.propTypes=b,j.defaultProps={tag:"div"},a.a=j},499:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),l=t.n(c),n=t(2),i=t.n(n),o=t(29),d=t.n(o),m=t(87),b={tag:m.tagPropType,className:i.a.string,cssModule:i.a.object},j=function(e){var a=e.className,t=e.cssModule,c=e.tag,n=Object(r.a)(e,["className","cssModule","tag"]),i=Object(m.mapToCssModules)(d()(a,"card-title"),t);return l.a.createElement(c,Object(s.a)({},n,{className:i}))};j.propTypes=b,j.defaultProps={tag:"div"},a.a=j},500:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),l=t.n(c),n=t(2),i=t.n(n),o=t(29),d=t.n(o),m=t(87),b={tag:m.tagPropType,className:i.a.string,cssModule:i.a.object},j=function(e){var a=e.className,t=e.cssModule,c=e.tag,n=Object(r.a)(e,["className","cssModule","tag"]),i=Object(m.mapToCssModules)(d()(a,"card-header"),t);return l.a.createElement(c,Object(s.a)({},n,{className:i}))};j.propTypes=b,j.defaultProps={tag:"div"},a.a=j},502:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),l=t.n(c),n=t(2),i=t.n(n),o=t(29),d=t.n(o),m=t(87),b=i.a.oneOfType([i.a.number,i.a.string]),j={tag:m.tagPropType,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},u={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var a=e.className,t=e.cssModule,c=e.noGutters,n=e.tag,i=e.form,o=e.widths,b=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),j=[];o.forEach((function(a,t){var s=e[a];if(delete b[a],s){var r=!t;j.push(r?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var u=Object(m.mapToCssModules)(d()(a,c?"no-gutters":null,i?"form-row":"row",j),t);return l.a.createElement(n,Object(s.a)({},b,{className:u}))};h.propTypes=j,h.defaultProps=u,a.a=h},503:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),l=t.n(c),n=t(2),i=t.n(n),o=t(29),d=t.n(o),m=t(87),b=i.a.oneOfType([i.a.number,i.a.string]),j=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:b,offset:b})]),u={tag:m.tagPropType,xs:j,sm:j,md:j,lg:j,xl:j,className:i.a.string,cssModule:i.a.object,widths:i.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,c=e.widths,n=e.tag,i=Object(r.a)(e,["className","cssModule","widths","tag"]),o=[];c.forEach((function(a,s){var r=e[a];if(delete i[a],r||""===r){var c=!s;if(Object(m.isObject)(r)){var l,n=c?"-":"-"+a+"-",b=f(c,a,r.size);o.push(Object(m.mapToCssModules)(d()(((l={})[b]=r.size||""===r.size,l["order"+n+r.order]=r.order||0===r.order,l["offset"+n+r.offset]=r.offset||0===r.offset,l)),t))}else{var j=f(c,a,r);o.push(j)}}})),o.length||o.push("col");var b=Object(m.mapToCssModules)(d()(a,o),t);return l.a.createElement(n,Object(s.a)({},i,{className:b}))};g.propTypes=u,g.defaultProps=h,a.a=g},504:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),l=t.n(c),n=t(2),i=t.n(n),o=t(29),d=t.n(o),m=t(87),b={tag:m.tagPropType,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},j=function(e){var a=e.className,t=e.cssModule,c=e.color,n=e.body,i=e.inverse,o=e.outline,b=e.tag,j=e.innerRef,u=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(m.mapToCssModules)(d()(a,"card",!!i&&"text-white",!!n&&"card-body",!!c&&(o?"border":"bg")+"-"+c),t);return l.a.createElement(b,Object(s.a)({},u,{className:h,ref:j}))};j.propTypes=b,j.defaultProps={tag:"div"},a.a=j},505:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),l=t.n(c),n=t(2),i=t.n(n),o=t(29),d=t.n(o),m=t(87),b={tag:m.tagPropType,className:i.a.string,cssModule:i.a.object},j=function(e){var a=e.className,t=e.cssModule,c=e.tag,n=Object(r.a)(e,["className","cssModule","tag"]),i=Object(m.mapToCssModules)(d()(a,"card-text"),t);return l.a.createElement(c,Object(s.a)({},n,{className:i}))};j.propTypes=b,j.defaultProps={tag:"p"},a.a=j},507:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),l=t.n(c),n=t(2),i=t.n(n),o=t(29),d=t.n(o),m=t(87),b={tag:m.tagPropType,listTag:m.tagPropType,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},j=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,n=e.children,i=e.tag,o=e.listTag,b=e["aria-label"],j=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),u=Object(m.mapToCssModules)(d()(a),c),h=Object(m.mapToCssModules)(d()("breadcrumb",t),c);return l.a.createElement(i,Object(s.a)({},j,{className:u,"aria-label":b}),l.a.createElement(o,{className:h},n))};j.propTypes=b,j.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=j},508:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),l=t.n(c),n=t(2),i=t.n(n),o=t(29),d=t.n(o),m=t(87),b={tag:m.tagPropType,active:i.a.bool,className:i.a.string,cssModule:i.a.object},j=function(e){var a=e.className,t=e.cssModule,c=e.active,n=e.tag,i=Object(r.a)(e,["className","cssModule","active","tag"]),o=Object(m.mapToCssModules)(d()(a,!!c&&"active","breadcrumb-item"),t);return l.a.createElement(n,Object(s.a)({},i,{className:o,"aria-current":c?"page":void 0}))};j.propTypes=b,j.defaultProps={tag:"li"},a.a=j},518:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(1),l=t.n(c),n=t(2),i=t.n(n),o=t(29),d=t.n(o),m=t(87),b=i.a.oneOfType([i.a.number,i.a.string]),j=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:b,order:b,offset:b})]),u={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:m.tagPropType,className:i.a.string,cssModule:i.a.object,xs:j,sm:j,md:j,lg:j,xl:j,widths:i.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},f=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,c=e.hidden,n=e.widths,i=e.tag,o=e.check,b=e.size,j=e.for,u=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];n.forEach((function(a,s){var r=e[a];if(delete u[a],r||""===r){var c,l=!s;if(Object(m.isObject)(r)){var n,i=l?"-":"-"+a+"-";c=f(l,a,r.size),h.push(Object(m.mapToCssModules)(d()(((n={})[c]=r.size||""===r.size,n["order"+i+r.order]=r.order||0===r.order,n["offset"+i+r.offset]=r.offset||0===r.offset,n))),t)}else c=f(l,a,r),h.push(c)}}));var g=Object(m.mapToCssModules)(d()(a,!!c&&"sr-only",!!o&&"form-check-label",!!b&&"col-form-label-"+b,h,!!h.length&&"col-form-label"),t);return l.a.createElement(i,Object(s.a)({htmlFor:j},u,{className:g}))};g.propTypes=u,g.defaultProps=h,a.a=g}}]);
//# sourceMappingURL=118.112ab45c.chunk.js.map