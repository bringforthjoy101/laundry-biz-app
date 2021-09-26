(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[184],{2308:function(e,t,n){"use strict";n.r(t);var a=n(30),c=n(1),r=n(839),s=n(632),i=n(88),l=n(502),o=n(503),u=n(22),d=n.n(u),j=n(47),b=n(497),m=n(504),f=n(498),p=n(505),h=n(491),x=(n(509),n(495)),O=n(135),v=n.n(O),g=n(136),N=n.n(g),w=n(6),y=N()(v.a),P=function(e){var t=e.selectedProduct,n=Object(r.g)(),a=Object(i.b)(),c=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ml-1"},buttonsStyling:!1}).then(function(){var e=Object(j.a)(d.a.mark((function e(c){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.value){e.next=9;break}return e.next=3,a(Object(s.a)(t));case 3:if(!e.sent){e.next=9;break}return e.next=7,a(Object(s.b)());case 7:y.fire({icon:"success",title:"Deleted!",text:"Product has been deleted.",customClass:{confirmButton:"btn btn-primary"}}),n.push("/products/list");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)(m.a,{children:Object(w.jsx)(f.a,{children:Object(w.jsxs)(l.a,{children:[Object(w.jsx)(o.a,{xl:"6",lg:"12",className:"d-flex flex-column justify-content-between border-container-lg",children:Object(w.jsxs)("div",{className:"user-avatar-section",children:[Object(w.jsx)("h3",{children:"Product Details"}),Object(w.jsxs)("div",{className:"d-flex justify-content-start",children:[function(){if(null!==t&&t.image)return Object(w.jsx)("img",{src:t.image,alt:"user-avatar",className:"img-fluid rounded",height:"104",width:"104"});var e=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return Object(w.jsx)(b.a,{initials:!0,color:e,className:"rounded",content:t.name,contentStyles:{borderRadius:0,fontSize:"calc(36px)",width:"100%",height:"100%"},style:{height:"90px",width:"90px"}})}(),Object(w.jsxs)("div",{className:"d-flex flex-column ml-1",children:[Object(w.jsxs)("div",{className:"user-info mt-2",children:[Object(w.jsx)("h4",{className:"mb-0",children:t.name}),Object(w.jsxs)(p.a,{tag:"span",children:["ID: ",t.status]})]}),Object(w.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[Object(w.jsx)(h.a.Ripple,{tag:x.b,to:"/product/edit/".concat(t.id),color:"primary",children:"Edit"}),Object(w.jsx)(h.a.Ripple,{className:"ml-1",color:"danger",outline:!0,onClick:function(){return c(t.id)},children:"Delete"})]})]})]}),Object(w.jsx)("div",{className:"d-flex align-items-center mr-2 mt-1",children:Object(w.jsx)("div",{className:"ml-0",children:Object(w.jsx)("h6",{className:"mb-0",children:t.description||""})})})]})}),Object(w.jsx)(o.a,{xl:"6",lg:"12",className:"d-flex flex-column justify-content-between border-container-lg",children:Object(w.jsxs)("div",{className:"user-avatar-section",children:[Object(w.jsxs)("div",{className:"d-flex align-items-center mr-2 mt-1",children:[Object(w.jsx)("div",{className:"color-box",children:Object(w.jsx)("span",{children:"Product Id: "})}),Object(w.jsx)("div",{className:"ml-1",children:Object(w.jsx)("h6",{className:"mb-0",children:t.id})})]}),Object(w.jsxs)("div",{className:"d-flex align-items-center mr-2 mt-1",children:[Object(w.jsx)("div",{className:"color-box",children:Object(w.jsx)("span",{children:"Product Price: "})}),Object(w.jsx)("div",{className:"ml-1",children:Object(w.jsx)("h6",{className:"mb-0",children:t.price.toLocaleString()})})]}),Object(w.jsxs)("div",{className:"d-flex align-items-center mr-2 mt-1",children:[Object(w.jsx)("div",{className:"color-box",children:Object(w.jsx)("span",{children:"Product Qty: "})}),Object(w.jsx)("div",{className:"ml-1",children:Object(w.jsx)("h6",{className:"mb-0",children:t.qty})})]})]})})]})})})},T=n(131);n(506),t.default=function(e){var t=Object(i.c)((function(e){return e.products})),n=Object(i.b)(),u=Object(r.i)().id,d=Object(c.useState)(null),j=Object(a.a)(d,2),b=(j[0],j[1]),m=Object(c.useState)(null),f=Object(a.a)(m,2),p=f[0];f[1];return Object(c.useEffect)((function(){n(Object(s.d)(u))}),[n]),Object(c.useEffect)((function(){null!==Object(T.g)()&&b(JSON.parse(localStorage.getItem("userData")))}),[]),null!==t.selectedProduct&&void 0!==t.selectedProduct?Object(w.jsx)("div",{className:"app-user-view",children:Object(w.jsx)(l.a,{children:Object(w.jsx)(o.a,{xl:"12",lg:"12",md:"12",children:Object(w.jsx)(P,{selectedProduct:t.selectedProduct,detail:p})})})}):""}},498:function(e,t,n){"use strict";var a=n(14),c=n(15),r=n(1),s=n.n(r),i=n(2),l=n.n(i),o=n(29),u=n.n(o),d=n(87),j={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var t=e.className,n=e.cssModule,r=e.innerRef,i=e.tag,l=Object(c.a)(e,["className","cssModule","innerRef","tag"]),o=Object(d.mapToCssModules)(u()(t,"card-body"),n);return s.a.createElement(i,Object(a.a)({},l,{className:o,ref:r}))};b.propTypes=j,b.defaultProps={tag:"div"},t.a=b},505:function(e,t,n){"use strict";var a=n(14),c=n(15),r=n(1),s=n.n(r),i=n(2),l=n.n(i),o=n(29),u=n.n(o),d=n(87),j={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,n=e.cssModule,r=e.tag,i=Object(c.a)(e,["className","cssModule","tag"]),l=Object(d.mapToCssModules)(u()(t,"card-text"),n);return s.a.createElement(r,Object(a.a)({},i,{className:l}))};b.propTypes=j,b.defaultProps={tag:"p"},t.a=b},506:function(e,t,n){},632:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return u}));var a=n(22),c=n.n(a),r=n(47),s=n(131),i=function(){return function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)({url:"/products",method:"GET"},t);case 2:if(!((n=e.sent)&&n.data.data&&n.data.status)){e.next=8;break}return e.next=6,t({type:"GET_ALL_PRODUCTS_DATA",data:n.data.data});case 6:e.next=10;break;case 8:console.log(n),Object(s.l)("Oops!","Something went wrong.","error");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},l=function(e,t){return function(){var n=Object(r.a)(c.a.mark((function n(a){var r,i,l,o,u,d,j,b;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.q,i=void 0===r?"":r,l=t.perPage,o=void 0===l?100:l,u=t.page,d=void 0===u?1:u,j=null===i||void 0===i?void 0:i.toLowerCase(),b=null===e||void 0===e?void 0:e.filter((function(e){var t,n;return null===e||void 0===e||null===(t=e.name)||void 0===t||null===(n=t.toLowerCase())||void 0===n?void 0:n.includes(j)})),a({type:"GET_FILTERED_PRODUCT_DATA",data:Object(s.i)(b,o,d),totalPages:b.length,params:t});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},o=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)({url:"/products/get-detail/".concat(e),method:"GET"},n);case 2:if(!((a=t.sent)&&a.data.data&&a.data.status)){t.next=8;break}return t.next=6,n({type:"GET_A_PRODUCT",selectedProduct:a.data.data});case 6:t.next=10;break;case 8:console.log(a),Object(s.l)("Oops!","Something went wrong.","error");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)({url:"/products/delete/".concat(e),method:"GET"},n);case 2:if(!(a=t.sent)||!a.data.status){t.next=7;break}return t.abrupt("return",a.data);case 7:console.log(a),Object(s.l)("Oops!","Something went wrong.","error");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=184.958bb52f.chunk.js.map