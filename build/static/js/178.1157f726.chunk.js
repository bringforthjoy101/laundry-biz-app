(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[178],{2204:function(e,t,a){"use strict";a.r(t);var r=a(30),c=a(1),n=a(839),s=a(495),i=a(509),l=a.n(i),d=a(88),o=a(131),u=a(502),j=a(503),b=a(527),m=a(504),x=a(500),h=a(498),O=a(22),p=a.n(O),f=a(47),g=a(666),v=a(1067),w=a(1186),N=a(6),y=(v.a,w.a,v.a,w.a,function(){return function(){var e=Object(f.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)({url:"/admin/rewards/deleted",method:"GET"},t);case 2:if(!(a=e.sent)){e.next=12;break}if(!a.data.data||!a.data.success){e.next=9;break}return e.next=7,t({type:"GET_ALL_HISTORY",data:a.data.data});case 7:e.next=10;break;case 9:console.log(a.error);case 10:e.next=13;break;case 12:Object(o.l)("Oops!","Somthing went wrong with your network.","error");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),R=function(e,t){return function(){var a=Object(f.a)(p.a.mark((function a(r){var c,n,s,i,l,d,u,j;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c=t.q,n=void 0===c?"":c,s=t.perPage,i=void 0===s?10:s,l=t.page,d=void 0===l?1:l,u=n.toLowerCase(),j=null===e||void 0===e?void 0:e.filter((function(e){return e.name.toLowerCase().includes(u)||e.type.toLowerCase().includes(u)})),r({type:"GET_FILTERED_HISTORY",data:Object(o.i)(j,i,d),totalPages:null===j||void 0===j?void 0:j.length,params:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},S=a(491),k=a(552),_=a(559),C=a(548),E=a(1028),L=a(572),D=a(555),T=a(565),I=a(577),q=I.c().shape({reward_id:I.d().required("required")}),P=function(e){var t=e.selectedReward,a=Object(d.b)(),n=Object(c.useState)(!1),s=Object(r.a)(n,2),i=s[0],l=s[1];return Object(N.jsxs)("div",{children:[Object(N.jsx)(S.a.Ripple,{className:"text-center mb-1",color:"danger",outline:!0,block:!0,onClick:function(){return l(!i)},children:"Delete Reward"}),Object(N.jsxs)(k.a,{isOpen:i,toggle:function(){return l(!i)},className:"modal-dialog-centered",children:[Object(N.jsx)(_.a,{toggle:function(){return l(!i)},children:"Delete Reward"}),Object(N.jsx)(T.d,{initialValues:{reward_id:null===t||void 0===t?void 0:t.id},validationSchema:q,onSubmit:function(){var e=Object(f.a)(p.a.mark((function e(t,r){var c,n,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.setSubmitting,n=JSON.stringify(t),e.prev=2,e.next=5,Object(o.a)({url:"/admin/rewards/delete",method:"POST",body:n},a);case 5:(s=e.sent)?s.data.success?(Object(o.l)("Great job!",s.data.message,"success"),a(Object(g.a)()),a(y())):Object(o.l)("Oops!",s.data.message,"error"):Object(o.l)("Oops!","Something went wrong with your network.","error"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error({error:e.t0});case 12:c(!1),l(!i);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors,a=e.touched,r=e.isSubmitting;return Object(N.jsxs)(T.c,{children:[Object(N.jsx)(C.a,{children:Object(N.jsxs)(E.a,{children:[Object(N.jsx)("label",{htmlFor:"reward_id",children:"Reward Id"}),Object(N.jsx)(T.b,{type:"number",name:"reward_id",placeholder:"reward id",className:"form-control ".concat(t.reward_id&&a.reward_id&&"is-invalid")}),Object(N.jsx)(T.a,{name:"reward_id",component:"div",className:"field-error text-danger"})]})}),Object(N.jsx)(L.a,{children:Object(N.jsxs)(S.a.Ripple,{color:"primary",type:"submit",disabled:r,children:[r&&Object(N.jsx)(D.a,{color:"white",size:"sm"}),Object(N.jsx)("span",{className:"ml-50",children:"Delete Reward"})]})})]})}})]})]})},G=(a(19),function(e){var t=e.selectedReward,a=Object(c.useState)(!1),n=Object(r.a)(a,2);n[0],n[1];return Object(N.jsxs)(m.a,{className:"plan-card border-primary",children:[Object(N.jsx)(x.a,{className:"d-flex justify-content-between align-items-center pt-75 pb-1",children:Object(N.jsx)("h5",{className:"mb-0",children:"Actions"})}),Object(N.jsx)(h.a,{children:Object(N.jsx)(P,{selectedReward:t})})]})}),W=a(505),z=a(1129),A=a(1156),F=a(1171),J=a(1128),U=a(1079),V=a(1076),H=function(e){var t,a=e.selectedReward;return Object(N.jsx)(m.a,{children:Object(N.jsx)(h.a,{children:Object(N.jsxs)(u.a,{children:[Object(N.jsx)(j.a,{xl:"6",lg:"12",className:"mt-2 mt-xl-0",children:Object(N.jsxs)("div",{className:"user-info-wrapper",children:[Object(N.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[Object(N.jsx)("div",{className:"color-box bg-light-primary",children:Object(N.jsx)(z.a,{className:"text-primary"})}),Object(N.jsx)(W.a,{tag:"span",className:"user-info-title text-capitalize font-weight-bold mb-0 ml-1",children:"Reward"})]}),Object(N.jsx)(W.a,{className:"text-capitalize mb-0",children:a.name})]}),Object(N.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[Object(N.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(N.jsx)(v.a,{className:"text-secoundary"})}),Object(N.jsx)(W.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Reward Type"})]}),Object(N.jsx)(W.a,{className:"mb-0",children:a.type})]}),Object(N.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[Object(N.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(N.jsx)(A.a,{className:"text-secoundary"})}),Object(N.jsx)(W.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Quantity"})]}),Object(N.jsx)(W.a,{className:"text-capitalize mb-0",children:null===a||void 0===a?void 0:a.qty})]}),Object(N.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[Object(N.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(N.jsx)(F.a,{className:"text-secoundary"})}),Object(N.jsx)(W.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Coin Value"})]}),Object(N.jsx)(W.a,{className:"text-capitalize mb-0",children:null===a||void 0===a?void 0:a.coin})]})]})}),Object(N.jsx)(j.a,{xl:"6",lg:"12",className:"mt-2 mt-xl-0",children:Object(N.jsxs)("div",{className:"user-info-wrapper",children:[Object(N.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[Object(N.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(N.jsx)(J.a,{className:"text-secoundary"})}),Object(N.jsx)(W.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Plan Id"})]}),Object(N.jsx)(W.a,{className:"text-capitalize mb-0",children:null===a||void 0===a?void 0:a.data_plan_id})]}),Object(N.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[Object(N.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(N.jsx)(A.a,{className:"text-secoundary"})}),Object(N.jsx)(W.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Naira Value"})]}),Object(N.jsx)(W.a,{className:"text-capitalize mb-0",children:null===a||void 0===a||null===(t=a.value)||void 0===t?void 0:t.toLocaleString("en-US",{style:"currency",currency:"NGN"})})]}),Object(N.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[Object(N.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(N.jsx)(U.a,{className:"text-secoundary"})}),Object(N.jsx)(W.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Reward Status"})]}),Object(N.jsx)(W.a,{className:"text-capitalize mb-0",children:null===a||void 0===a?void 0:a.status})]}),Object(N.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[Object(N.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(N.jsx)(V.a,{className:"text-secoundary"})}),Object(N.jsx)(W.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Reward Image"})]}),Object(N.jsx)("img",{src:null===a||void 0===a?void 0:a.image,width:"80px",style:{borderRadius:"50px"}})]})]})})]})})})},Q=(a(497),I.c().shape({reward_id:I.d().required("required")})),Y=function(){var e=Object(d.b)(),t=(Object(n.i)().id,Object(d.c)((function(e){return e.appiaDeletedRewards})),Object(c.useState)(!1)),a=Object(r.a)(t,2),s=a[0],i=a[1];return Object(N.jsxs)("div",{children:[Object(N.jsx)(S.a.Ripple,{className:"text-center mb-1 mt-1",color:"success",outline:!0,onClick:function(){return i(!s)},children:"Restore Reward"}),Object(N.jsxs)(k.a,{isOpen:s,toggle:function(){return i(!s)},className:"modal-dialog-centered",children:[Object(N.jsx)(_.a,{toggle:function(){return i(!s)},children:" Restore Reward"}),Object(N.jsx)(T.d,{initialValues:{reward_id:""},validationSchema:Q,onSubmit:function(){var t=Object(f.a)(p.a.mark((function t(a,r){var c,n,l;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r.setSubmitting,n=JSON.stringify(a),t.prev=2,t.next=5,Object(o.a)({url:"/admin/rewards/restore",method:"POST",body:n},e);case 5:(l=t.sent)?l.data.success?(Object(o.l)("Great job!",l.data.message,"success"),e(y()),e(Object(g.a)())):Object(o.l)("Oops!",l.data.message,"error"):Object(o.l)("Oops!","Something went wrong with your network.","error"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.error({error:t.t0});case 12:c(!1),i(!s);case 14:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e,a){return t.apply(this,arguments)}}(),children:function(e){var t=e.errors,a=e.touched,r=e.isSubmitting;return Object(N.jsxs)(T.c,{children:[Object(N.jsx)(C.a,{children:Object(N.jsxs)(E.a,{children:[Object(N.jsx)("label",{htmlFor:"reward_id",children:"Reward Id"}),Object(N.jsx)(T.b,{type:"number",name:"reward_id",placeholder:"reward id",className:"form-control ".concat(t.reward_id&&a.reward_id&&"is-invalid")}),Object(N.jsx)(T.a,{name:"reward_id",component:"div",className:"field-error text-danger"})]})}),Object(N.jsx)(L.a,{children:Object(N.jsxs)(S.a.Ripple,{color:"primary",type:"submit",disabled:r,children:[r&&Object(N.jsx)(D.a,{color:"white",size:"sm"}),Object(N.jsx)("span",{className:"ml-50",children:"Restore Reward"})]})})]})}})]})]})},M=a(1034),B={pending:"light-warning",active:"light-success",inactive:"light-danger"},K=[{name:"Image",minWidth:"40px",selector:"image",sortable:!0,cell:function(e){return Object(N.jsx)(M.a,{children:Object(N.jsx)("img",{src:e.image,width:"30px",alt:""})})}},{name:"Reward Id",minWidth:"140px",selector:"id",sortable:!0,cell:function(e){return e.id}},{name:"Name",minWidth:"200px",selector:"name",sortable:!0,cell:function(e){return Object(N.jsx)("div",{className:"d-flex justify-content-left align-items-center",children:Object(N.jsx)("div",{className:"d-flex flex-column",children:Object(N.jsx)("span",{className:"font-weight-bold",children:e.name})})})}},{name:"Quantity",minWidth:"100px",selector:"qty",sortable:!0,cell:function(e){return e.qty}},{name:"Value",minWidth:"172px",selector:"value",sortable:!0,cell:function(e){var t;return null===e||void 0===e||null===(t=e.value)||void 0===t?void 0:t.toLocaleString("en-US",{style:"currency",currency:"NGN"})}},{name:"Type",minWidth:"138px",selector:"price",sortable:!0,cell:function(e){return e.type}},{name:"Status",minWidth:"100px",selector:"status",sortable:!0,cell:function(e){return Object(N.jsx)(M.a,{className:"text-capitalize",color:B[e.status],pill:!0,children:e.status})}},{name:"Date",minWidth:"200px",selector:"created_at",sortable:!0,cell:function(e){return l()(e.created_at).format("lll")}},{name:"Actions",minWidth:"200px",selector:"fullName",sortable:!0,cell:function(e){return Object(N.jsx)(Y,{})}}],X=a(511),Z=a.n(X),$=a(1080),ee=a(517),te=a.n(ee),ae=a(499),re=a(518),ce=a(1046),ne=a(1025),se=(a(525),a(510),a(529)),ie=a.n(se),le=function(){var e,t=Object(d.b)(),a=Object(d.c)((function(e){return e.appiaDeletedRewards})),n=Object(c.useState)(""),s=Object(r.a)(n,2),i=s[0],l=s[1],b=Object(c.useState)(1),O=Object(r.a)(b,2),p=O[0],f=O[1],g=Object(c.useState)(10),v=Object(r.a)(g,2),w=v[0],S=v[1],k=Object(c.useState)({value:"",label:"Select Status"}),_=Object(r.a)(k,2),C=_[0],E=(_[1],Object(c.useState)(null)),L=Object(r.a)(E,2),D=(L[0],L[1]);Object(c.useEffect)((function(){t(y()),t(R(a.allData,{page:p,perPage:w,status:C.value,q:i}))}),[t]),Object(c.useEffect)((function(){null!==Object(o.g)()&&D(JSON.parse(localStorage.getItem("userData")))}),[]);var T=null===a||void 0===a||null===(e=a.allData)||void 0===e?void 0:e.filter((function(e){return e.name.toLowerCase()||e.type.toLowerCase()}));return Object(N.jsxs)(c.Fragment,{children:[Object(N.jsxs)(m.a,{children:[Object(N.jsx)(x.a,{children:Object(N.jsx)(ae.a,{tag:"h4",children:"Search Filter"})}),Object(N.jsx)(h.a,{children:Object(N.jsx)(u.a,{children:Object(N.jsx)(j.a,{lg:"4",sm:"6",children:Object(N.jsxs)(ie.a,{children:[Object(N.jsx)(re.a,{for:"search-invoice",children:"Search:"}),Object(N.jsx)(ce.a,{id:"search-invoice",type:"text",value:i,onChange:function(e){return r=e.target.value,l(r),void t(R(a.allData,{page:p,perPage:w,status:C.value,q:r}));var r}})]})})})})]}),Object(N.jsxs)(m.a,{children:[Object(N.jsx)(u.a,{className:"mx-0 mt-3",children:Object(N.jsx)(j.a,{sm:"6",children:Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[Object(N.jsx)(re.a,{for:"rows-per-page",children:"Show"}),Object(N.jsxs)(ne.a,{className:"form-control mx-50",type:"select",id:"rows-per-page",value:w,onChange:function(e){var r=parseInt(e.currentTarget.value);t(R(a.allData,{page:p,perPage:r,status:C.value,q:i})),S(r)},style:{width:"10rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0"},children:[Object(N.jsx)("option",{value:"10",children:"10"}),Object(N.jsx)("option",{value:"25",children:"25"}),Object(N.jsx)("option",{value:"50",children:"50"})]}),Object(N.jsx)(re.a,{for:"rows-per-page",children:"Entries"})]})})}),Object(N.jsx)(te.a,{noHeader:!0,pagination:!0,subHeader:!0,responsive:!0,paginationServer:!0,columns:K,sortIcon:Object(N.jsx)($.a,{}),className:"react-dataTable",paginationComponent:function(){var e=Math.ceil(T.length/w);return Object(N.jsx)(Z.a,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:0!==p?p-1:0,onPageChange:function(e){return function(e){t(R(a.allData,{page:e.selected+1,perPage:w,status:C.value,q:i})),f(e.selected+1)}(e)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pr-1"})},data:function(){var e={status:C.value,q:i},t=Object.keys(e).some((function(t){return e[t].length>0}));return a.data.length>0?a.data:0===a.data.length&&t?[]:a.allData.slice(0,w)}()})]})]})};a(506),t.default=function(e){var t=Object(d.c)((function(e){return e.appiaAllRewards})),a=(Object(d.b)(),Object(n.i)().id),i=Object(c.useState)(null),l=Object(r.a)(i,2),m=(l[0],l[1]),x=Object(c.useState)(null),h=Object(r.a)(x,2);h[0],h[1];return Object(c.useEffect)((function(){null!==Object(o.g)()&&m(JSON.parse(localStorage.getItem("userData")))}),[]),null!==t.selectedReward&&void 0!==t.selectedReward?Object(N.jsxs)("div",{className:"app-user-view",children:[Object(N.jsxs)(u.a,{children:[Object(N.jsx)(j.a,{xl:"9",lg:"9",md:"10",children:Object(N.jsx)(H,{selectedReward:t.selectedReward})}),Object(N.jsx)(j.a,{xl:"3",lg:"3",md:"2",children:Object(N.jsx)(G,{selectedReward:t.selectedReward})})]}),Object(N.jsx)(le,{selectedReward:t.selectedReward})]}):Object(N.jsxs)(b.a,{color:"danger",children:[Object(N.jsx)("h4",{className:"alert-heading",children:"Users not found"}),Object(N.jsxs)("div",{className:"alert-body",children:["Users with id: ",a," doesn't exist. Check list of all Users: ",Object(N.jsx)(s.b,{to:"/app/user/list",children:"Users List"})]})]})}},506:function(e,t,a){},510:function(e,t,a){},666:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return d})),a.d(t,"b",(function(){return o}));var r=a(22),c=a.n(r),n=a(47),s=a(131),i=function(){return function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)({url:"/admin/rewards/get",method:"GET"},t);case 2:if(!(a=e.sent)){e.next=12;break}if(!a.data.data||!a.data.success){e.next=9;break}return e.next=7,t({type:"GET_ALL_REWARDS",data:a.data.data});case 7:e.next=10;break;case 9:console.log(a.error);case 10:e.next=13;break;case 12:Object(s.l)("Oops!","Somthing went wrong with your network.","error");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},l=function(e,t){return function(){var a=Object(n.a)(c.a.mark((function a(r){var n,i,l,d,o,u,j,b,m,x,h;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n=t.q,i=void 0===n?"":n,l=t.perPage,d=void 0===l?10:l,o=t.page,u=void 0===o?1:o,j=t.role,void 0===j?null:j,b=t.status,m=void 0===b?null:b,x=i.toLowerCase(),h=e.filter((function(e){return(e.name.toLowerCase().includes(x)||e.type.toLowerCase().includes(x))&&e.status===(m||e.status)})),r({type:"GET_FILTERED_REWARDS",data:Object(s.i)(h,d,u),totalPages:h.length,params:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},d=function(e,t){return function(){var a=Object(n.a)(c.a.mark((function a(r){var n;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n=e.find((function(e){return e.id===t})),r({type:"GET_REWARD",selectedReward:n});case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},o=function(){return function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)({url:"/admin/rewards/service-id/get",method:"GET"},t);case 2:if(!(a=e.sent)){e.next=12;break}if(!a.data.data||!a.data.success){e.next=9;break}return e.next=7,t({type:"GET_SERVICE_ID",data:a.data.data});case 7:e.next=10;break;case 9:console.log(a.error);case 10:e.next=13;break;case 12:Object(s.l)("Oops!","Somthing went wrong with your network.","error");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=178.1157f726.chunk.js.map