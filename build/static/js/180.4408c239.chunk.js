(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[180],{1725:function(e,a,t){},2141:function(e,a,t){"use strict";t.r(a);var c=t(30),s=t(1),l=t(48),i=t.n(l),r=t(522),n=t(497),o=t(566),d=t(619),b=t(496),m=t(131),u=t(502),j=t(503),h=t(504),p=t(498),g=t(1049),x=t(505),O=t(530),f=t(1028),v=t(518),k=t(1046),y=t(1025),N=t(491),C=(t(780),t(1725),t(525),t(759),t(6));a.default=function(){var e=Object(o.a)(),a=Object(c.a)(e,2),t=a[0],l=(a[1],Object(s.useState)(null)),w=Object(c.a)(l,2),_=w[0],S=w[1],q=Object(s.useState)(""),P=Object(c.a)(q,2),D=P[0],F=P[1],M=Object(s.useState)(""),E=Object(c.a)(M,2),T=E[0],A=E[1],z=Object(s.useState)([]),R=Object(c.a)(z,2),B=R[0],H=R[1],J=Object(s.useState)(null),G=Object(c.a)(J,2),I=G[0],L=G[1],V=Object(s.useState)("banner.jpg"),Y=Object(c.a)(V,2),K=Y[0],Q=Y[1],U=Object(s.useState)(""),W=Object(c.a)(U,2),X=W[0],Z=W[1];Object(s.useEffect)((function(){i.a.get("/blog/list/data/edit").then((function(e){S(e.data),F(e.data.blogTitle),A(e.data.slug),H(e.data.blogCategories),L(e.data.featuredImage),Z(e.data.status)}))}),[]);return Object(C.jsxs)("div",{className:"blog-edit-wrapper",children:[Object(C.jsx)(b.a,{breadCrumbTitle:"Blog Edit",breadCrumbParent:"Pages",breadCrumbParent2:"Blog",breadCrumbActive:"Edit"}),null!==_?Object(C.jsx)(u.a,{children:Object(C.jsx)(j.a,{sm:"12",children:Object(C.jsx)(h.a,{children:Object(C.jsxs)(p.a,{children:[Object(C.jsxs)(g.a,{children:[Object(C.jsx)(n.a,{className:"mr-75",img:_.avatar,width:"38",height:"38"}),Object(C.jsxs)(g.a,{body:!0,children:[Object(C.jsx)("h6",{className:"mb-25",children:_.userFullName}),Object(C.jsx)(x.a,{children:_.createdTime})]})]}),Object(C.jsx)(O.a,{className:"mt-2",onSubmit:function(e){return e.preventDefault()},children:Object(C.jsxs)(u.a,{children:[Object(C.jsx)(j.a,{md:"6",children:Object(C.jsxs)(f.a,{className:"mb-2",children:[Object(C.jsx)(v.a,{for:"blog-edit-title",children:"Title"}),Object(C.jsx)(k.a,{id:"blog-edit-title",value:D,onChange:function(e){return F(e.target.value)}})]})}),Object(C.jsx)(j.a,{md:"6",children:Object(C.jsxs)(f.a,{className:"mb-2",children:[Object(C.jsx)(v.a,{for:"blog-edit-category",children:"Category"}),Object(C.jsx)(r.a,{id:"blog-edit-category",isClearable:!1,theme:m.j,value:B,isMulti:!0,name:"colors",options:[{value:"fashion",label:"Fashion"},{value:"gaming",label:"Gaming"},{value:"quote",label:"Quote"},{value:"video",label:"Video"},{value:"food",label:"Food"}],className:"react-select",classNamePrefix:"select",onChange:function(e){return H(e)}})]})}),Object(C.jsx)(j.a,{md:"6",children:Object(C.jsxs)(f.a,{className:"mb-2",children:[Object(C.jsx)(v.a,{for:"blog-edit-slug",children:"Slug"}),Object(C.jsx)(k.a,{id:"blog-edit-slug",value:T,onChange:function(e){return A(e.target.value)}})]})}),Object(C.jsx)(j.a,{md:"6",children:Object(C.jsxs)(f.a,{className:"mb-2",children:[Object(C.jsx)(v.a,{for:"blog-edit-status",children:"Status"}),Object(C.jsxs)(k.a,{type:"select",id:"blog-edit-status",value:X,onChange:function(e){return Z(e.target.value)},children:[Object(C.jsx)("option",{value:"Published",children:"Published"}),Object(C.jsx)("option",{value:"Pending",children:"Pending"}),Object(C.jsx)("option",{value:"Draft",children:"Draft"})]})]})}),Object(C.jsx)(j.a,{sm:"12",children:Object(C.jsxs)(f.a,{className:"mb-2",children:[Object(C.jsx)(v.a,{children:"Content"}),Object(C.jsx)(d.a,{apiKey:"emjshh1tafcjgizkmk6eofcmmcxc2cmugajs9l2ordjyca64",initialValue:"\n  <p>Cupcake ipsum dolor sit. Amet dessert donut candy chocolate bar cotton dessert candy chocolate. Candy muffin danish. Macaroon brownie jelly beans marzipan cheesecake oat cake. Carrot cake macaroon chocolate cake. Jelly brownie jelly. Marzipan pie sweet roll.</p>\n  <p>Liquorice drag\xe9e cake chupa chups pie cotton candy jujubes bear claw sesame snaps. Fruitcake chupa chups chocolate bonbon lemon drops croissant caramels lemon drops. Candy jelly cake marshmallow jelly beans drag\xe9e macaroon. Gummies sugar plum fruitcake. Candy canes candy cupcake caramels cotton candy jujubes fruitcake.</p>\n  ",init:{height:250,selector:"textarea#full-featured",plugins:"print preview importcss tinydrive searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media  template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",mobile:{plugins:"print preview importcss tinydrive searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media  template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount textpattern noneditable help charmap quickbars emoticons"},menu:{tc:{items:"addcomment showcomments deleteallconversations"}},menubar:"file edit view insert format tools table tc help",toolbar:"undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor casechange removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment",autosave_ask_before_unload:!0,autosave_interval:"30s",autosave_prefix:"{path}{query}-{id}-",autosave_restore_when_empty:!1,autosave_retention:"2m",image_advtab:!0,importcss_append:!0,template_cdate_format:"[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",template_mdate_format:"[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",image_caption:!0,quickbars_selection_toolbar:"bold italic | quicklink h2 h3 blockquote quickimage quicktable",noneditable_noneditable_class:"mceNonEditable",toolbar_mode:"sliding",spellchecker_whitelist:["Ephox","Moxiecode"],_mode:"embedded",content_style:".mymention{ color: gray; }",contextmenu:"link image imagetools table configur",a11y_advanced_options:!0,skin:"dark"===t?"dark":void 0,content_css:"dark"===t?"dark":void 0}})]})}),Object(C.jsx)(j.a,{className:"mb-2",sm:"12",children:Object(C.jsxs)("div",{className:"border rounded p-2",children:[Object(C.jsx)("h4",{className:"mb-1",children:"Featured Image"}),Object(C.jsxs)(g.a,{className:"flex-column flex-md-row",children:[Object(C.jsx)("img",{className:"rounded mr-2 mb-1 mb-md-0",src:I,alt:"featured img",width:"170",height:"110"}),Object(C.jsxs)(g.a,{body:!0,children:[Object(C.jsx)("small",{className:"text-muted",children:"Required image resolution 800x400, image size 10mb."}),Object(C.jsx)("p",{className:"my-50",children:Object(C.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:"C:/fakepath/".concat(K)})}),Object(C.jsx)("div",{className:"d-inline-block",children:Object(C.jsx)(f.a,{className:"mb-0",children:Object(C.jsx)(y.a,{type:"file",id:"exampleCustomFileBrowser",name:"customFile",onChange:function(e){var a=new FileReader,t=e.target.files;Q(t[0].name),a.onload=function(){L(a.result)},a.readAsDataURL(t[0])},accept:".jpg, .png, .gif"})})})]})]})]})}),Object(C.jsxs)(j.a,{className:"mt-50",children:[Object(C.jsx)(N.a.Ripple,{color:"primary",className:"mr-1",children:"Save Changes"}),Object(C.jsx)(N.a.Ripple,{color:"secondary",outline:!0,children:"Cancel"})]})]})})]})})})}):null]})}},496:function(e,a,t){"use strict";var c=t(495),s=t(507),l=t(508),i=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,r=e.breadCrumbParent2,n=e.breadCrumbParent3,o=e.breadCrumbActive;return Object(i.jsxs)("div",{className:"content-header row",children:[Object(i.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(i.jsx)("div",{className:"row breadcrumbs-top",children:Object(i.jsxs)("div",{className:"col-12",children:[a?Object(i.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(i.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(i.jsxs)(s.a,{children:[Object(i.jsx)(l.a,{tag:"li",children:Object(i.jsx)(c.b,{to:"/",children:"Home"})}),Object(i.jsx)(l.a,{tag:"li",className:"text-primary",children:t}),r?Object(i.jsx)(l.a,{tag:"li",className:"text-primary",children:r}):"",n?Object(i.jsx)(l.a,{tag:"li",className:"text-primary",children:n}):"",Object(i.jsx)(l.a,{tag:"li",active:!0,children:o})]})})]})})}),Object(i.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(i.jsx)("div",{className:"form-group breadcrum-right dropdown"})})]})}},759:function(e,a,t){}}]);
//# sourceMappingURL=180.4408c239.chunk.js.map