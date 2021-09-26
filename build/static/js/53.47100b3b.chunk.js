(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[53],{2279:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(839),r=a(502),n=a(503),i=a(505),l=(a(1067),a(1087),a(1166),a(6)),o=a(0),d=a(30),b=a(495),u=a(29),m=a.n(u),j=a(1171),p=a(1050),O=a(1164),h=a(1111),f=a(1181),g=a(1195),x=a(1127),v=a(491),N=a(538),y=a(1372),C=a(1041),T=a(1042),P=function(e){var t=e.data,a=(e.deleteWishlistItem,e.dispatch),s=(e.addToWishlist,e.getProduct),u=e.productId,P=e.addToCart,w=Object(c.useState)("primary"),k=Object(d.a)(w,2),M=(k[0],k[1],t.isInCart?b.b:"button");return Object(l.jsxs)(r.a,{className:"my-2",children:[Object(l.jsx)(n.a,{className:"d-flex align-items-center justify-content-center mb-2 mb-md-0",md:"5",xs:"12",children:Object(l.jsx)("div",{className:"d-flex align-items-center justify-content-center",children:Object(l.jsx)("img",{className:"img-fluid product-img",src:t.image,alt:t.name})})}),Object(l.jsxs)(n.a,{md:"7",xs:"12",children:[Object(l.jsx)("h4",{children:t.name}),Object(l.jsxs)(i.a,{tag:"span",className:"item-company",children:["By",Object(l.jsx)("a",{className:"company-name",href:"/",onClick:function(e){return e.preventDefault()},children:t.brand})]}),Object(l.jsxs)("div",{className:"ecommerce-details-price d-flex flex-wrap mt-1",children:[Object(l.jsxs)("h4",{className:"item-price mr-1",children:["\u20a6",t.price.toLocaleString()]}),Object(l.jsx)("ul",{className:"unstyled-list list-inline",children:new Array(5).fill().map((function(e,a){return Object(l.jsx)("li",{className:"ratings-list-item mr-25",children:Object(l.jsx)(j.a,{className:m()({"filled-star":a+1<=t.rating,"unfilled-star":a+1>t.rating})})},a)}))})]}),Object(l.jsxs)(i.a,{children:["Available -",Object(l.jsxs)("span",{className:"text-".concat(Number(t.qty)>=10?"success":Number(t.qty)>=5&&Number(t.qty)<10?"warning":"danger"," ml-25"),children:[t.status.toUpperCase()," ( ",t.qty," )"]})]}),Object(l.jsx)(i.a,{children:t.description}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"d-flex flex-column flex-sm-row pt-1",children:[Object(l.jsxs)(v.a,Object(o.a)(Object(o.a)({tag:M,className:"btn-cart mr-0 mr-sm-1 mb-1 mb-sm-0",color:"primary",onClick:function(){return e=t.id,!1===t.isInCart&&a(P(e)),void a(s(u));var e}},t.isInCart?{to:"/apps/ecommerce/checkout"}:{}),{},{children:[Object(l.jsx)(p.a,{className:"mr-50",size:14}),t.isInCart?"View in cart":"Move to cart"]})),Object(l.jsxs)(N.a,{className:"dropdown-icon-wrapper btn-share",children:[Object(l.jsx)(y.a,{className:"btn-icon hide-arrow",color:"secondary",caret:!0,outline:!0,children:Object(l.jsx)(O.a,{size:14})}),Object(l.jsxs)(C.a,{right:!0,children:[Object(l.jsx)(T.a,{tag:"a",href:"/",onClick:function(e){return e.preventDefault()},children:Object(l.jsx)(h.a,{size:14})}),Object(l.jsx)(T.a,{tag:"a",href:"/",onClick:function(e){return e.preventDefault()},children:Object(l.jsx)(f.a,{size:14})}),Object(l.jsx)(T.a,{tag:"a",href:"/",onClick:function(e){return e.preventDefault()},children:Object(l.jsx)(g.a,{size:14})}),Object(l.jsx)(T.a,{tag:"a",href:"/",onClick:function(e){return e.preventDefault()},children:Object(l.jsx)(x.a,{size:14})})]})]})]})]})]})},w=(a(680),a(1242),a(2203),a(2125),a(908),a(909),a(910),a(911),a(912),a(744),a(496)),k=a(504),M=a(498),D=a(88),E=a(687);a(913),t.default=function(){var e=Object(s.i)().product;console.log("productId",e);var t=Object(D.b)(),a=Object(D.c)((function(e){return e.ecommerce}));return Object(c.useEffect)((function(){t(Object(E.g)(e))}),[]),Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)(w.a,{breadCrumbTitle:"Product Details",breadCrumbParent:"eCommerce",breadCrumbActive:"Details"}),Object(l.jsx)("div",{className:"app-ecommerce-details",children:Object.keys(a.productDetail).length?Object(l.jsx)(k.a,{children:Object(l.jsx)(M.a,{children:Object(l.jsx)(P,{dispatch:t,addToCart:E.a,productId:e,getProduct:E.g,data:a.productDetail,addToWishlist:E.b,deleteWishlistItem:E.e})})}):null})]})}},496:function(e,t,a){"use strict";var c=a(495),s=a(507),r=a(508),n=a(6);t.a=function(e){var t=e.breadCrumbTitle,a=e.breadCrumbParent,i=e.breadCrumbParent2,l=e.breadCrumbParent3,o=e.breadCrumbActive;return Object(n.jsxs)("div",{className:"content-header row",children:[Object(n.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(n.jsx)("div",{className:"row breadcrumbs-top",children:Object(n.jsxs)("div",{className:"col-12",children:[t?Object(n.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(n.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(n.jsxs)(s.a,{children:[Object(n.jsx)(r.a,{tag:"li",children:Object(n.jsx)(c.b,{to:"/",children:"Home"})}),Object(n.jsx)(r.a,{tag:"li",className:"text-primary",children:a}),i?Object(n.jsx)(r.a,{tag:"li",className:"text-primary",children:i}):"",l?Object(n.jsx)(r.a,{tag:"li",className:"text-primary",children:l}):"",Object(n.jsx)(r.a,{tag:"li",active:!0,children:o})]})})]})})}),Object(n.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(n.jsx)("div",{className:"form-group breadcrum-right dropdown"})})]})}},505:function(e,t,a){"use strict";var c=a(14),s=a(15),r=a(1),n=a.n(r),i=a(2),l=a.n(i),o=a(29),d=a.n(o),b=a(87),u={tag:b.tagPropType,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,a=e.cssModule,r=e.tag,i=Object(s.a)(e,["className","cssModule","tag"]),l=Object(b.mapToCssModules)(d()(t,"card-text"),a);return n.a.createElement(r,Object(c.a)({},i,{className:l}))};m.propTypes=u,m.defaultProps={tag:"p"},t.a=m},507:function(e,t,a){"use strict";var c=a(14),s=a(15),r=a(1),n=a.n(r),i=a(2),l=a.n(i),o=a(29),d=a.n(o),b=a(87),u={tag:b.tagPropType,listTag:b.tagPropType,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},m=function(e){var t=e.className,a=e.listClassName,r=e.cssModule,i=e.children,l=e.tag,o=e.listTag,u=e["aria-label"],m=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),j=Object(b.mapToCssModules)(d()(t),r),p=Object(b.mapToCssModules)(d()("breadcrumb",a),r);return n.a.createElement(l,Object(c.a)({},m,{className:j,"aria-label":u}),n.a.createElement(o,{className:p},i))};m.propTypes=u,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=m},508:function(e,t,a){"use strict";var c=a(14),s=a(15),r=a(1),n=a.n(r),i=a(2),l=a.n(i),o=a(29),d=a.n(o),b=a(87),u={tag:b.tagPropType,active:l.a.bool,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,a=e.cssModule,r=e.active,i=e.tag,l=Object(s.a)(e,["className","cssModule","active","tag"]),o=Object(b.mapToCssModules)(d()(t,!!r&&"active","breadcrumb-item"),a);return n.a.createElement(i,Object(c.a)({},l,{className:o,"aria-current":r?"page":void 0}))};m.propTypes=u,m.defaultProps={tag:"li"},t.a=m},515:function(e,t,a){"use strict";var c=a(14),s=a(1),r=a.n(s),n=a(2),i=a.n(n),l=a(531),o={children:i.a.node},d=function(e){return r.a.createElement(l.a,Object(c.a)({group:!0},e))};d.propTypes=o,t.a=d},538:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var c=a(501),s=a(14),r=a(132),n=a(64),i=a(1),l=a.n(i),o=a(2),d=a.n(o),b=a(515),u=a(87);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}var j=["defaultOpen"],p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(r.a)(a)),a}Object(n.a)(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return l.a.createElement(b.a,Object(s.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(u.omit)(this.props,j)))},t}(i.Component);p.propTypes=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({defaultOpen:d.a.bool},b.a.propTypes)},744:function(e,t,a){},908:function(e,t,a){"use strict";t.a=a.p+"static/media/apple-watch.884c5ea7.png"},909:function(e,t,a){"use strict";t.a=a.p+"static/media/macbook-pro.4ecc26e8.png"},910:function(e,t,a){"use strict";t.a=a.p+"static/media/homepod.c5fa0cec.png"},911:function(e,t,a){"use strict";t.a=a.p+"static/media/magic-mouse.f8ccce24.png"},912:function(e,t,a){"use strict";t.a=a.p+"static/media/iphone-x.ba5bfe17.png"},913:function(e,t,a){}}]);
//# sourceMappingURL=53.47100b3b.chunk.js.map