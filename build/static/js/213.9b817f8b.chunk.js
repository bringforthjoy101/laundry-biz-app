(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[213],{2131:function(e,t,a){"use strict";a.r(t);var s=a(22),r=a.n(s),c=a(47),l=a(30),n=a(1),i=a(131),o=a(48),j=a.n(o),d=a(566),b=a(1081),p=a(495),m=a(839),x=a(502),h=a(503),u=a(499),O=a(505),f=a(1028),g=a(518),v=a(491),y=a(555),w=(a(574),a(88)),N=a(535),F=a(6);t.default=function(){Object(w.b)();var e=Object(d.a)(),t=Object(l.a)(e,2),s=t[0],o=(t[1],Object(n.useState)("")),L=Object(l.a)(o,2),k=L[0],C=L[1],E=Object(n.useState)(!1),G=Object(l.a)(E,2),P=G[0],A=G[1],S=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===t||void 0===t||t.preventDefault(),!a||a.length){e.next=13;break}return A(!0),e.prev=3,e.next=6,j.a.post("https://api.appiawave.com/admin/reset_password",{email:k});case 6:(s=e.sent).data.success?(Object(i.l)("Great job!",s.data.message,"success"),A(!1),C("")):Object(i.l)("Oops!",s.data.message,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error({error:e.t0});case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){S()}),[]);var z="dark"===s?"forgot-password-v2-dark.svg":"forgot-password-v2.svg",B=a(702)("./".concat(z)).default;return Object(i.g)()?Object(F.jsx)(m.a,{to:"/"}):Object(F.jsx)("div",{className:"auth-wrapper auth-v2",children:Object(F.jsxs)(x.a,{className:"auth-inner m-0",children:[Object(F.jsxs)(p.b,{className:"brand-logo",to:"/",children:[Object(F.jsxs)("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[Object(F.jsxs)("defs",{children:[Object(F.jsxs)("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[Object(F.jsx)("stop",{stopColor:"#000000",offset:"0%"}),Object(F.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),Object(F.jsxs)("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[Object(F.jsx)("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),Object(F.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),Object(F.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(F.jsx)("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:Object(F.jsxs)("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[Object(F.jsx)("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),Object(F.jsx)("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),Object(F.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),Object(F.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),Object(F.jsx)("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),Object(F.jsx)("h2",{className:"brand-text text-primary ml-1",children:"Appia"})]}),Object(F.jsx)(h.a,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(F.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(F.jsx)("img",{className:"img-fluid",src:B,alt:"Login V2"})})}),Object(F.jsx)(h.a,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(F.jsxs)(h.a,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[Object(F.jsx)(u.a,{tag:"h2",className:"font-weight-bold mb-1",children:"Forgot Password? \ud83d\udd12"}),Object(F.jsx)(O.a,{className:"mb-2",children:"Enter your email and we'll send you instructions to reset your password"}),Object(F.jsxs)(N.AvForm,{className:"auth-forgot-password-form mt-2",onSubmit:S,children:[Object(F.jsxs)(f.a,{children:[Object(F.jsx)(g.a,{className:"form-label",for:"login-email",children:"Email"}),Object(F.jsx)(N.AvInput,{required:!0,autoFocus:!0,type:"email",value:k,id:"login-email",name:"login-email",placeholder:"john@example.com",onChange:function(e){return C(e.target.value)}})]}),Object(F.jsxs)(v.a.Ripple,{color:"primary",block:!0,disabled:P,children:[P&&Object(F.jsx)(y.a,{color:"white",size:"sm"}),"Send reset link"]})]}),Object(F.jsx)("p",{className:"text-center mt-2",children:Object(F.jsxs)(p.b,{to:"/login",children:[Object(F.jsx)(b.a,{className:"mr-25",size:14}),Object(F.jsx)("span",{className:"align-middle",children:"Back to login"})]})})]})})]})})}}}]);
//# sourceMappingURL=213.9b817f8b.chunk.js.map