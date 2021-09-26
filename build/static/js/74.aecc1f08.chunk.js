(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[74],{2229:function(e,t,a){"use strict";a.r(t);var s=a(30),c=a(1),r=(a(622),a(907),a(29)),i=a.n(r),n=a(1171),l=(a(594),a(502)),o=a(503),d=a(504),b=a(498),u=(a(1025),a(491)),j=(a(743),a(6)),m=a(0),p=a(495),g=a(1033),O=a(1050),h=a(505),v=a(1034),x=function(e){var t=e.store,a=e.products,s=e.activeView,c=e.addToCart,r=e.dispatch,l=e.getProducts,o=e.getCartItems,x=e.addToWishlist,f=e.deleteWishlistItem;return Object(j.jsx)("div",{className:i()({"grid-view":"grid"===s,"list-view":"list"===s}),children:function(){if(a.length)return a.map((function(e){var a=e.isInCart?p.b:"button";return Object(j.jsxs)(d.a,{className:"ecommerce-card",children:[Object(j.jsx)("div",{className:"item-img text-center mx-auto",children:Object(j.jsx)(p.b,{to:"/apps/ecommerce/product-detail/".concat(e.slug),children:Object(j.jsx)("img",{className:"img-fluid card-img-top",src:e.image,alt:e.name})})}),Object(j.jsxs)(b.a,{children:[Object(j.jsxs)("div",{className:"item-wrapper",children:[Object(j.jsx)("div",{className:"item-rating",children:Object(j.jsx)("ul",{className:"unstyled-list list-inline",children:new Array(5).fill().map((function(t,a){return Object(j.jsx)("li",{className:"ratings-list-item mr-25",children:Object(j.jsx)(n.a,{className:i()({"filled-star":a+1<=e.rating,"unfilled-star":a+1>e.rating})})},a)}))})}),Object(j.jsx)("div",{className:"item-cost",children:Object(j.jsxs)("h6",{className:"item-price",children:["\u20a6",e.price.toLocaleString()]})})]}),Object(j.jsxs)("h6",{className:"item-name",children:[Object(j.jsx)(p.b,{className:"text-body",to:"/apps/ecommerce/product-detail/".concat(e.id),children:e.name}),Object(j.jsxs)(h.a,{tag:"span",className:"item-company",children:["By"," ",Object(j.jsx)("a",{className:"company-name",href:"/",onClick:function(e){return e.preventDefault()},children:e.brand})]})]}),Object(j.jsx)(h.a,{className:"item-description",children:e.description})]}),Object(j.jsxs)("div",{className:"item-options text-center",children:[Object(j.jsx)("div",{className:"item-wrapper",children:Object(j.jsxs)("div",{className:"item-cost",children:[Object(j.jsxs)("h4",{className:"item-price",children:["\u20a6",e.price.toLocaleString()]}),e.hasFreeShipping?Object(j.jsx)(h.a,{className:"shipping",children:Object(j.jsx)(v.a,{color:"light-success",children:"Free Shipping"})}):null]})}),Object(j.jsxs)(u.a,{className:"btn-wishlist",color:"light",onClick:function(){return a=e.id,s=e.isInWishlist,r(s?f(a):x(a)),void r(l(t.params));var a,s},children:[Object(j.jsx)(g.a,{className:i()("mr-50",{"text-danger":e.isInWishlist}),size:14}),Object(j.jsx)("span",{children:"Wishlist"})]}),Object(j.jsxs)(u.a,Object(m.a)(Object(m.a)({color:"primary",tag:a,className:"btn-cart move-cart",onClick:function(){return a=e.id,!1===e.isInCart&&r(c(a)),r(o()),void r(l(t.params));var a}},e.isInCart?{to:"/apps/ecommerce/checkout"}:{}),{},{children:[Object(j.jsx)(O.a,{className:"mr-50",size:14}),Object(j.jsx)("span",{children:e.isInCart?"View In Cart":"Add To Cart"})]}))]})]},e.name)}))}()})},f=a(1141),N=a(1119),y=a(1134),C=a(538),T=a(1372),P=a(1041),w=a(1042),M=a(657),k=function(e){var t=e.activeView,a=e.setActiveView,s=e.dispatch,c=e.getProducts,r=e.store,n=e.setSidebarOpen;return Object(j.jsx)("div",{className:"ecommerce-header",children:Object(j.jsx)(l.a,{children:Object(j.jsx)(o.a,{sm:"12",children:Object(j.jsxs)("div",{className:"ecommerce-header-items",children:[Object(j.jsxs)("div",{className:"result-toggler",children:[Object(j.jsx)("button",{className:"navbar-toggler shop-sidebar-toggler",onClick:function(){return n(!0)},children:Object(j.jsx)("span",{className:"navbar-toggler-icon d-block d-lg-none",children:Object(j.jsx)(f.a,{size:14})})}),Object(j.jsxs)("span",{className:"search-results",children:[r.totalProducts," Results Found"]})]}),Object(j.jsxs)("div",{className:"view-options d-flex",children:[Object(j.jsxs)(C.a,{className:"dropdown-sort",children:[Object(j.jsx)(T.a,{className:"text-capitalize mr-1",color:"primary",outline:!0,caret:!0,children:{"price-desc":"Highest","price-asc":"Lowest",featured:"Featured"}[r.params.sortBy]}),Object(j.jsxs)(P.a,{children:[Object(j.jsx)(w.a,{className:"w-100",onClick:function(){return s(c(Object(m.a)(Object(m.a)({},r.params),{},{sortBy:"featured"})))},children:"Featured"}),Object(j.jsx)(w.a,{className:"w-100",onClick:function(){return s(c(Object(m.a)(Object(m.a)({},r.params),{},{sortBy:"price-asc"})))},children:"Lowest"}),Object(j.jsx)(w.a,{className:"w-100",onClick:function(){return s(c(Object(m.a)(Object(m.a)({},r.params),{},{sortBy:"price-desc"})))},children:"Highest"})]})]}),Object(j.jsxs)(M.a,{className:"btn-group-toggle",children:[Object(j.jsx)(u.a,{tag:"label",className:i()("btn-icon view-btn grid-view-btn",{active:"grid"===t}),color:"primary",outline:!0,onClick:function(){return a("grid")},children:Object(j.jsx)(N.a,{size:18})}),Object(j.jsx)(u.a,{tag:"label",className:i()("btn-icon view-btn list-view-btn",{active:"list"===t}),color:"primary",outline:!0,onClick:function(){return a("list")},children:Object(j.jsx)(y.a,{size:18})})]})]})]})})})})},I=a(1161),E=a(1044),S=a(1046),z=a(1045),A=a(845),V=function(e){var t=e.dispatch,a=e.getProducts,s=e.store;return Object(j.jsx)("div",{id:"ecommerce-searchbar",className:"ecommerce-searchbar",children:Object(j.jsx)(l.a,{className:"mt-1",children:Object(j.jsx)(o.a,{sm:"12",children:Object(j.jsxs)(E.a,{className:"input-group-merge",children:[Object(j.jsx)(S.a,{className:"search-product",placeholder:"Search Product",onChange:function(e){return t(a(Object(m.a)(Object(m.a)({},s.params),{},{q:e.target.value})))}}),Object(j.jsx)(z.a,{addonType:"append",children:Object(j.jsx)(A.a,{children:Object(j.jsx)(I.a,{className:"text-muted",size:14})})})]})})})})},W=a(694),D=a(695),F=a(693),B=function(e){var t=e.activeView,a=e.setActiveView,s=e.store,r=e.sidebarOpen,n=e.getProducts,l=e.dispatch,o=e.addToCart,d=e.addToWishlist,b=e.getCartItems,u=e.deleteWishlistItem,p=e.deleteCartItem,g=e.setSidebarOpen,O=function(e){l(n("next"===e?Object(m.a)(Object(m.a)({},s.params),{},{page:s.params.page+1}):"prev"===e?Object(m.a)(Object(m.a)({},s.params),{},{page:s.params.page-1}):Object(m.a)(Object(m.a)({},s.params),{},{page:e})))};return Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-md-12",children:Object(j.jsxs)("div",{className:"content-body",children:[Object(j.jsx)(k,{store:s,dispatch:l,activeView:t,getProducts:n,setActiveView:a,setSidebarOpen:g}),Object(j.jsx)("div",{className:i()("body-content-overlay",{show:r}),onClick:function(){return g(!1)}}),Object(j.jsx)(V,{dispatch:l,getProducts:n,store:s}),s.products.length?Object(j.jsxs)(c.Fragment,{children:[Object(j.jsx)(x,{store:s,dispatch:l,addToCart:o,activeView:t,products:s.products,getProducts:n,getCartItems:b,addToWishlist:d,deleteCartItem:p,deleteWishlistItem:u}),Object(j.jsxs)(F.a,{className:"d-flex justify-content-center",children:[Object(j.jsx)(W.a,{disabled:1===s.params.page,className:"prev-item",onClick:function(){return 1!==s.params.page?O("prev"):null},children:Object(j.jsx)(D.a,{href:"/",onClick:function(e){return e.preventDefault()}})}),function(){var e=0!==s.totalProducts&&0!==s.products.length?Number(s.totalProducts)/s.products.length:3;return new Array(Math.trunc(e)).fill().map((function(e,t){return Object(j.jsx)(W.a,{active:s.params.page===t+1,onClick:function(){return O(t+1)},children:Object(j.jsx)(D.a,{href:"/",onClick:function(e){return e.preventDefault()},children:t+1})},t)}))}(),Object(j.jsx)(W.a,{className:"next-item",onClick:function(){s.params.page!==Number(s.totalProducts)/s.products.length&&O("next")},disabled:s.params.page===Number(s.totalProducts)/s.products.length,children:Object(j.jsx)(D.a,{href:"/",onClick:function(e){return e.preventDefault()}})})]})]}):Object(j.jsx)("div",{className:"d-flex justify-content-center mt-2",children:Object(j.jsx)("p",{children:"No Results"})})]})})})},L=a(496),H=a(88),q=a(725);a(595),t.default=function(){var e=Object(c.useState)("grid"),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)(!1),n=Object(s.a)(i,2),l=n[0],o=n[1],d=Object(H.b)(),b=Object(H.c)((function(e){return e.ecommerce}));return Object(c.useEffect)((function(){d(Object(q.g)({q:"",sortBy:"featured",perPage:9,page:1}))}),[d]),Object(j.jsxs)(c.Fragment,{children:[Object(j.jsx)(L.a,{breadCrumbTitle:"Tuck Shop",breadCrumbParent:"Tuck Shop",breadCrumbActive:"Products"}),Object(j.jsx)(B,{store:b,dispatch:d,addToCart:q.a,activeView:a,getProducts:q.g,sidebarOpen:l,getCartItems:q.e,setActiveView:r,addToWishlist:q.b,setSidebarOpen:o,deleteCartItem:q.c,deleteWishlistItem:q.d})]})}},496:function(e,t,a){"use strict";var s=a(495),c=a(507),r=a(508),i=a(6);t.a=function(e){var t=e.breadCrumbTitle,a=e.breadCrumbParent,n=e.breadCrumbParent2,l=e.breadCrumbParent3,o=e.breadCrumbActive;return Object(i.jsxs)("div",{className:"content-header row",children:[Object(i.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(i.jsx)("div",{className:"row breadcrumbs-top",children:Object(i.jsxs)("div",{className:"col-12",children:[t?Object(i.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(i.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(i.jsxs)(c.a,{children:[Object(i.jsx)(r.a,{tag:"li",children:Object(i.jsx)(s.b,{to:"/",children:"Home"})}),Object(i.jsx)(r.a,{tag:"li",className:"text-primary",children:a}),n?Object(i.jsx)(r.a,{tag:"li",className:"text-primary",children:n}):"",l?Object(i.jsx)(r.a,{tag:"li",className:"text-primary",children:l}):"",Object(i.jsx)(r.a,{tag:"li",active:!0,children:o})]})})]})})}),Object(i.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(i.jsx)("div",{className:"form-group breadcrum-right dropdown"})})]})}},505:function(e,t,a){"use strict";var s=a(14),c=a(15),r=a(1),i=a.n(r),n=a(2),l=a.n(n),o=a(29),d=a.n(o),b=a(87),u={tag:b.tagPropType,className:l.a.string,cssModule:l.a.object},j=function(e){var t=e.className,a=e.cssModule,r=e.tag,n=Object(c.a)(e,["className","cssModule","tag"]),l=Object(b.mapToCssModules)(d()(t,"card-text"),a);return i.a.createElement(r,Object(s.a)({},n,{className:l}))};j.propTypes=u,j.defaultProps={tag:"p"},t.a=j},507:function(e,t,a){"use strict";var s=a(14),c=a(15),r=a(1),i=a.n(r),n=a(2),l=a.n(n),o=a(29),d=a.n(o),b=a(87),u={tag:b.tagPropType,listTag:b.tagPropType,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},j=function(e){var t=e.className,a=e.listClassName,r=e.cssModule,n=e.children,l=e.tag,o=e.listTag,u=e["aria-label"],j=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),m=Object(b.mapToCssModules)(d()(t),r),p=Object(b.mapToCssModules)(d()("breadcrumb",a),r);return i.a.createElement(l,Object(s.a)({},j,{className:m,"aria-label":u}),i.a.createElement(o,{className:p},n))};j.propTypes=u,j.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=j},508:function(e,t,a){"use strict";var s=a(14),c=a(15),r=a(1),i=a.n(r),n=a(2),l=a.n(n),o=a(29),d=a.n(o),b=a(87),u={tag:b.tagPropType,active:l.a.bool,className:l.a.string,cssModule:l.a.object},j=function(e){var t=e.className,a=e.cssModule,r=e.active,n=e.tag,l=Object(c.a)(e,["className","cssModule","active","tag"]),o=Object(b.mapToCssModules)(d()(t,!!r&&"active","breadcrumb-item"),a);return i.a.createElement(n,Object(s.a)({},l,{className:o,"aria-current":r?"page":void 0}))};j.propTypes=u,j.defaultProps={tag:"li"},t.a=j},515:function(e,t,a){"use strict";var s=a(14),c=a(1),r=a.n(c),i=a(2),n=a.n(i),l=a(531),o={children:n.a.node},d=function(e){return r.a.createElement(l.a,Object(s.a)({group:!0},e))};d.propTypes=o,t.a=d},538:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var s=a(501),c=a(14),r=a(132),i=a(64),n=a(1),l=a.n(n),o=a(2),d=a.n(o),b=a(515),u=a(87);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}var m=["defaultOpen"],p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(r.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return l.a.createElement(b.a,Object(c.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(u.omit)(this.props,m)))},t}(n.Component);p.propTypes=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({defaultOpen:d.a.bool},b.a.propTypes)},595:function(e,t,a){},657:function(e,t,a){"use strict";var s=a(14),c=a(15),r=a(1),i=a.n(r),n=a(2),l=a.n(n),o=a(29),d=a.n(o),b=a(87),u={tag:b.tagPropType,"aria-label":l.a.string,className:l.a.string,cssModule:l.a.object,role:l.a.string,size:l.a.string,vertical:l.a.bool},j=function(e){var t=e.className,a=e.cssModule,r=e.size,n=e.vertical,l=e.tag,o=Object(c.a)(e,["className","cssModule","size","vertical","tag"]),u=Object(b.mapToCssModules)(d()(t,!!r&&"btn-group-"+r,n?"btn-group-vertical":"btn-group"),a);return i.a.createElement(l,Object(s.a)({},o,{className:u}))};j.propTypes=u,j.defaultProps={tag:"div",role:"group"},t.a=j},693:function(e,t,a){"use strict";var s=a(14),c=a(15),r=a(1),i=a.n(r),n=a(2),l=a.n(n),o=a(29),d=a.n(o),b=a(87),u={children:l.a.node,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,size:l.a.string,tag:b.tagPropType,listTag:b.tagPropType,"aria-label":l.a.string},j=function(e){var t,a=e.className,r=e.listClassName,n=e.cssModule,l=e.size,o=e.tag,u=e.listTag,j=e["aria-label"],m=Object(c.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),p=Object(b.mapToCssModules)(d()(a),n),g=Object(b.mapToCssModules)(d()(r,"pagination",((t={})["pagination-"+l]=!!l,t)),n);return i.a.createElement(o,{className:p,"aria-label":j},i.a.createElement(u,Object(s.a)({},m,{className:g})))};j.propTypes=u,j.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},t.a=j},694:function(e,t,a){"use strict";var s=a(14),c=a(15),r=a(1),i=a.n(r),n=a(2),l=a.n(n),o=a(29),d=a.n(o),b=a(87),u={active:l.a.bool,children:l.a.node,className:l.a.string,cssModule:l.a.object,disabled:l.a.bool,tag:b.tagPropType},j=function(e){var t=e.active,a=e.className,r=e.cssModule,n=e.disabled,l=e.tag,o=Object(c.a)(e,["active","className","cssModule","disabled","tag"]),u=Object(b.mapToCssModules)(d()(a,"page-item",{active:t,disabled:n}),r);return i.a.createElement(l,Object(s.a)({},o,{className:u}))};j.propTypes=u,j.defaultProps={tag:"li"},t.a=j},695:function(e,t,a){"use strict";var s=a(14),c=a(15),r=a(1),i=a.n(r),n=a(2),l=a.n(n),o=a(29),d=a.n(o),b=a(87),u={"aria-label":l.a.string,children:l.a.node,className:l.a.string,cssModule:l.a.object,next:l.a.bool,previous:l.a.bool,first:l.a.bool,last:l.a.bool,tag:b.tagPropType},j=function(e){var t,a=e.className,r=e.cssModule,n=e.next,l=e.previous,o=e.first,u=e.last,j=e.tag,m=Object(c.a)(e,["className","cssModule","next","previous","first","last","tag"]),p=Object(b.mapToCssModules)(d()(a,"page-link"),r);l?t="Previous":n?t="Next":o?t="First":u&&(t="Last");var g,O=e["aria-label"]||t;l?g="\u2039":n?g="\u203a":o?g="\xab":u&&(g="\xbb");var h=e.children;return h&&Array.isArray(h)&&0===h.length&&(h=null),m.href||"a"!==j||(j="button"),(l||n||o||u)&&(h=[i.a.createElement("span",{"aria-hidden":"true",key:"caret"},h||g),i.a.createElement("span",{className:"sr-only",key:"sr"},O)]),i.a.createElement(j,Object(s.a)({},m,{className:p,"aria-label":O}),h)};j.propTypes=u,j.defaultProps={tag:"a"},t.a=j},743:function(e,t,a){}}]);
//# sourceMappingURL=74.aecc1f08.chunk.js.map