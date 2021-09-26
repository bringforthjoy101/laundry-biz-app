(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[128],{2215:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(247),l=n.n(s),o=n(502),r=n(503),i=n(496),c=n(512),u=n(30),m=n(682),g=n(6),d=function(){var e=Object(a.useState)([{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]),t=Object(u.a)(e,1)[0];return Object(g.jsx)(m.a,{suggestions:t,className:"form-control",filterKey:"title",suggestionLimit:4,placeholder:"Type 'a'"})},p=n(48),j=n.n(p),b=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){j.a.get("/api/autocomplete/data").then((function(e){return s(e.data.autoComplete)}))}),[]),n.length?Object(g.jsx)(m.a,{suggestions:n,className:"form-control",filterKey:"title",suggestionLimit:4,placeholder:"Search for any of the top 250 IMDB movies"}):null},f=function(){var e=Object(a.useState)([{groupTitle:"1970s",data:[{title:"C"}]},{groupTitle:"1980s",data:[{title:"C++"},{title:"Perl"}]},{groupTitle:"1990s",data:[{title:"Haskell"},{title:"Python"},{title:"Java"},{title:"Javascript"},{title:"PHP"},{title:"Ruby"}]},{groupTitle:"2000s",data:[{title:"C#"},{title:"Scala"},{title:"Clojure"},{title:"Go"}]},{groupTitle:"2010s",data:[{title:"Elm"}]}]),t=Object(u.a)(e,1)[0];return Object(g.jsx)(m.a,{suggestions:t,className:"form-control",filterKey:"title",filterHeaderKey:"groupTitle",grouped:!0,placeholder:"Type 'c'"})},h=n(29),O=n.n(h),x=n(36),v=n(51),C=n(25),S=n(67),N=n(50),y=n(89),T=function(){var e=Object(a.useState)([{name:"Jake Shelton",img:x.default},{name:"Edith Baldwin",img:v.default},{name:"Jennifer Wolfe",img:C.default},{name:"Emily Washington",img:S.default},{name:"Heather Green",img:y.default},{name:"Brian Moore",img:N.default}]),t=Object(u.a)(e,1)[0];return Object(g.jsx)(m.a,{suggestions:t,className:"form-control",filterKey:"name",placeholder:"Type 'a'",customRender:function(e,t,n,a,s,l){return Object(g.jsxs)("li",{className:O()("suggestion-item",{active:n.indexOf(e)===a}),onMouseEnter:function(){return l(n.indexOf(e))},onClick:function(e){s(null,e)},children:[Object(g.jsx)("img",{src:e.img,alt:e.name,height:"32",width:"32",className:"mr-1"}),Object(g.jsx)("span",{children:e.name})]},t)}})},M=function(){var e=Object(a.useState)([{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]),t=Object(u.a)(e,1)[0];return Object(g.jsx)(m.a,{suggestions:t,className:"form-control",filterKey:"title",suggestionLimit:4,defaultSuggestions:!0,placeholder:"Type 'a'"})},P=function(){var e=Object(a.useState)([{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]),t=Object(u.a)(e,1)[0];return Object(g.jsx)(m.a,{suggestions:t,className:"form-control",filterKey:"title",suggestionLimit:2,placeholder:"Type 'a'"})},A=Object(g.jsx)("pre",{children:Object(g.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport AutoComplete from '@components/autocomplete'\n\nconst AutoCompleteBasic = () => {\n  const [suggestions] = useState([\n    {\n      title: 'React.js'\n    },\n    {\n      title: 'Angular.js'\n    },\n    {\n      title: 'Javascript'\n    },\n    {\n      title: 'Vue.js'\n    },\n    {\n      title: 'HTML'\n    },\n    {\n      title: 'CSS'\n    },\n    {\n      title: 'SCSS'\n    },\n    {\n      title: 'PHP'\n    },\n    {\n      title: 'Laravel'\n    }\n  ])\n\n  return (\n    <AutoComplete\n      suggestions={suggestions}\n      className='form-control'\n      filterKey='title'\n      suggestionLimit={4}\n      placeholder=\"Type 'a'\"\n    />\n  )\n}\nexport default AutoCompleteBasic\n"})}),R=Object(g.jsx)("pre",{children:Object(g.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport AutoComplete from '@components/autocomplete'\n\nconst AutoCompleteSections = () => {\n  const [suggestions] = useState([\n    {\n      groupTitle: '1970s',\n      data: [\n        {\n          title: 'C'\n        }\n      ]\n    },\n    {\n      groupTitle: '1980s',\n      data: [\n        {\n          title: 'C++'\n        },\n        {\n          title: 'Perl'\n        }\n      ]\n    },\n    {\n      groupTitle: '1990s',\n      data: [\n        {\n          title: 'Haskell'\n        },\n        {\n          title: 'Python'\n        },\n        {\n          title: 'Java'\n        },\n        {\n          title: 'Javascript'\n        },\n        {\n          title: 'PHP'\n        },\n        {\n          title: 'Ruby'\n        }\n      ]\n    },\n    {\n      groupTitle: '2000s',\n      data: [\n        {\n          title: 'C#'\n        },\n        {\n          title: 'Scala'\n        },\n        {\n          title: 'Clojure'\n        },\n        {\n          title: 'Go'\n        }\n      ]\n    },\n    {\n      groupTitle: '2010s',\n      data: [\n        {\n          title: 'Elm'\n        }\n      ]\n    }\n  ])\n\n  return (\n    <AutoComplete\n      suggestions={suggestions}\n      className='form-control'\n      filterKey='title'\n      filterHeaderKey='groupTitle'\n      grouped={true}\n      placeholder=\"Type 'c'\"\n    />\n  )\n}\nexport default AutoCompleteSections\n"})}),E=Object(g.jsx)("pre",{children:Object(g.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState, useEffect } from 'react'\nimport axios from 'axios'\nimport AutoComplete from '@components/autocomplete'\n\nconst AutoCompleteAjax = () => {\n  const [suggestions, setSuggestions] = useState([])\n\n  useEffect(() => {\n    axios\n      .get('/api/autocomplete/data')\n      .then(response => setSuggestions(response.data.autoComplete))\n  }, [])\n\n  return (\n    <AutoComplete\n      suggestions={suggestions}\n      className='form-control'\n      filterKey='title'\n      suggestionLimit={4}\n      placeholder='Search for any of the top 250 IMDB movies'\n    />\n  )\n}\nexport default AutoCompleteAjax\n"})}),w=Object(g.jsx)("pre",{children:Object(g.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport classnames from 'classnames'\nimport AutoComplete from '@components/autocomplete'\nimport img1 from '@src/assets/images/portrait/small/avatar-s-1.jpg'\nimport img2 from '@src/assets/images/portrait/small/avatar-s-2.jpg'\nimport img3 from '@src/assets/images/portrait/small/avatar-s-3.jpg'\nimport img4 from '@src/assets/images/portrait/small/avatar-s-4.jpg'\nimport img5 from '@src/assets/images/portrait/small/avatar-s-5.jpg'\nimport img6 from '@src/assets/images/portrait/small/avatar-s-6.jpg'\n\nconst AutoCompleteRender = () => {\n  const [suggestions] = useState([\n    {\n      name: 'Jake Shelton',\n      img: img1\n    },\n    {\n      name: 'Edith Baldwin',\n      img: img2\n    },\n    {\n      name: 'Jennifer Wolfe',\n      img: img3\n    },\n    {\n      name: 'Emily Washington',\n      img: img4\n    },\n    {\n      name: 'Heather Green',\n      img: img6\n    },\n    {\n      name: 'Brian Moore',\n      img: img5\n    }\n  ])\n\n  return (\n    <AutoComplete\n      suggestions={suggestions}\n      className='form-control'\n      filterKey='name'\n      placeholder=\"Type 'a'\"\n      customRender={(\n        suggestion,\n        i,\n        filteredData,\n        activeSuggestion,\n        onSuggestionItemClick,\n        onSuggestionItemHover\n      ) => (\n        <li\n          className={classnames('suggestion-item', {\n            active: filteredData.indexOf(suggestion) === activeSuggestion\n          })}\n          key={i}\n          onMouseEnter={() =>\n            onSuggestionItemHover(filteredData.indexOf(suggestion))\n          }\n          onClick={e => {\n            onSuggestionItemClick(null, e)\n          }}\n        >\n          <img\n            src={suggestion.img}\n            alt={suggestion.name}\n            height='32'\n            width='32'\n            className='mr-1'\n          />\n          <span>{suggestion.name}</span>\n        </li>\n      )}\n    />\n  )\n}\nexport default AutoCompleteRender\n"})}),H=Object(g.jsx)("pre",{children:Object(g.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport AutoComplete from '@components/autocomplete'\n\nconst AutoCompleteDefaultSuggestions = () => {\n  const [suggestions] = useState([\n    {\n      title: 'React.js'\n    },\n    {\n      title: 'Angular.js'\n    },\n    {\n      title: 'Javascript'\n    },\n    {\n      title: 'Vue.js'\n    },\n    {\n      title: 'HTML'\n    },\n    {\n      title: 'CSS'\n    },\n    {\n      title: 'SCSS'\n    },\n    {\n      title: 'PHP'\n    },\n    {\n      title: 'Laravel'\n    }\n  ])\n\n  return (\n    <AutoComplete\n      suggestions={suggestions}\n      className='form-control'\n      filterKey='title'\n      suggestionLimit={4}\n      defaultSuggestions={true}\n      placeholder=\"Type 'a'\"\n    />\n  )\n}\nexport default AutoCompleteDefaultSuggestions\n"})}),L=Object(g.jsx)("pre",{children:Object(g.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport AutoComplete from '@components/autocomplete'\n\nconst AutoCompleteSearchLimit = () => {\n  const [suggestions] = useState([\n    {\n      title: 'React.js'\n    },\n    {\n      title: 'Angular.js'\n    },\n    {\n      title: 'Javascript'\n    },\n    {\n      title: 'Vue.js'\n    },\n    {\n      title: 'HTML'\n    },\n    {\n      title: 'CSS'\n    },\n    {\n      title: 'SCSS'\n    },\n    {\n      title: 'PHP'\n    },\n    {\n      title: 'Laravel'\n    }\n  ])\n\n  return (\n    <AutoComplete\n      suggestions={suggestions}\n      className='form-control'\n      filterKey='title'\n      suggestionLimit={2}\n      placeholder=\"Type 'a'\"\n    />\n  )\n}\nexport default AutoCompleteSearchLimit\n"})});t.default=function(){return Object(a.useEffect)((function(){l.a.highlightAll()}),[]),Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(i.a,{breadCrumbTitle:"Auto Complete",breadCrumbParent:"Extra Components",breadCrumbActive:"Auto Complete"}),Object(g.jsxs)(o.a,{children:[Object(g.jsx)(r.a,{xl:"6",lg:"12",children:Object(g.jsx)(c.a,{title:"Basic",code:A,children:Object(g.jsx)(d,{})})}),Object(g.jsx)(r.a,{xl:"6",lg:"12",children:Object(g.jsx)(c.a,{title:"Sections",code:R,children:Object(g.jsx)(f,{})})}),Object(g.jsx)(r.a,{xl:"6",lg:"12",children:Object(g.jsx)(c.a,{title:"Ajax",code:E,children:Object(g.jsx)(b,{})})}),Object(g.jsx)(r.a,{xl:"6",lg:"12",children:Object(g.jsx)(c.a,{title:"Custom Render",code:w,children:Object(g.jsx)(T,{})})}),Object(g.jsx)(r.a,{xl:"6",lg:"12",children:Object(g.jsx)(c.a,{title:"Default Suggestions",code:H,children:Object(g.jsx)(M,{})})}),Object(g.jsx)(r.a,{xl:"6",lg:"12",children:Object(g.jsx)(c.a,{title:"Search Limit",code:L,children:Object(g.jsx)(P,{})})})]})]})}},496:function(e,t,n){"use strict";var a=n(495),s=n(507),l=n(508),o=n(6);t.a=function(e){var t=e.breadCrumbTitle,n=e.breadCrumbParent,r=e.breadCrumbParent2,i=e.breadCrumbParent3,c=e.breadCrumbActive;return Object(o.jsxs)("div",{className:"content-header row",children:[Object(o.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(o.jsx)("div",{className:"row breadcrumbs-top",children:Object(o.jsxs)("div",{className:"col-12",children:[t?Object(o.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(o.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(o.jsxs)(s.a,{children:[Object(o.jsx)(l.a,{tag:"li",children:Object(o.jsx)(a.b,{to:"/",children:"Home"})}),Object(o.jsx)(l.a,{tag:"li",className:"text-primary",children:n}),r?Object(o.jsx)(l.a,{tag:"li",className:"text-primary",children:r}):"",i?Object(o.jsx)(l.a,{tag:"li",className:"text-primary",children:i}):"",Object(o.jsx)(l.a,{tag:"li",active:!0,children:c})]})})]})})}),Object(o.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(o.jsx)("div",{className:"form-group breadcrum-right dropdown"})})]})}},498:function(e,t,n){"use strict";var a=n(14),s=n(15),l=n(1),o=n.n(l),r=n(2),i=n.n(r),c=n(29),u=n.n(c),m=n(87),g={tag:m.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},d=function(e){var t=e.className,n=e.cssModule,l=e.innerRef,r=e.tag,i=Object(s.a)(e,["className","cssModule","innerRef","tag"]),c=Object(m.mapToCssModules)(u()(t,"card-body"),n);return o.a.createElement(r,Object(a.a)({},i,{className:c,ref:l}))};d.propTypes=g,d.defaultProps={tag:"div"},t.a=d},499:function(e,t,n){"use strict";var a=n(14),s=n(15),l=n(1),o=n.n(l),r=n(2),i=n.n(r),c=n(29),u=n.n(c),m=n(87),g={tag:m.tagPropType,className:i.a.string,cssModule:i.a.object},d=function(e){var t=e.className,n=e.cssModule,l=e.tag,r=Object(s.a)(e,["className","cssModule","tag"]),i=Object(m.mapToCssModules)(u()(t,"card-title"),n);return o.a.createElement(l,Object(a.a)({},r,{className:i}))};d.propTypes=g,d.defaultProps={tag:"div"},t.a=d},500:function(e,t,n){"use strict";var a=n(14),s=n(15),l=n(1),o=n.n(l),r=n(2),i=n.n(r),c=n(29),u=n.n(c),m=n(87),g={tag:m.tagPropType,className:i.a.string,cssModule:i.a.object},d=function(e){var t=e.className,n=e.cssModule,l=e.tag,r=Object(s.a)(e,["className","cssModule","tag"]),i=Object(m.mapToCssModules)(u()(t,"card-header"),n);return o.a.createElement(l,Object(a.a)({},r,{className:i}))};d.propTypes=g,d.defaultProps={tag:"div"},t.a=d},502:function(e,t,n){"use strict";var a=n(14),s=n(15),l=n(1),o=n.n(l),r=n(2),i=n.n(r),c=n(29),u=n.n(c),m=n(87),g=i.a.oneOfType([i.a.number,i.a.string]),d={tag:m.tagPropType,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:g,sm:g,md:g,lg:g,xl:g},p={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e){var t=e.className,n=e.cssModule,l=e.noGutters,r=e.tag,i=e.form,c=e.widths,g=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),d=[];c.forEach((function(t,n){var a=e[t];if(delete g[t],a){var s=!n;d.push(s?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var p=Object(m.mapToCssModules)(u()(t,l?"no-gutters":null,i?"form-row":"row",d),n);return o.a.createElement(r,Object(a.a)({},g,{className:p}))};j.propTypes=d,j.defaultProps=p,t.a=j},503:function(e,t,n){"use strict";var a=n(14),s=n(15),l=n(1),o=n.n(l),r=n(2),i=n.n(r),c=n(29),u=n.n(c),m=n(87),g=i.a.oneOfType([i.a.number,i.a.string]),d=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:g,offset:g})]),p={tag:m.tagPropType,xs:d,sm:d,md:d,lg:d,xl:d,className:i.a.string,cssModule:i.a.object,widths:i.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},f=function(e){var t=e.className,n=e.cssModule,l=e.widths,r=e.tag,i=Object(s.a)(e,["className","cssModule","widths","tag"]),c=[];l.forEach((function(t,a){var s=e[t];if(delete i[t],s||""===s){var l=!a;if(Object(m.isObject)(s)){var o,r=l?"-":"-"+t+"-",g=b(l,t,s.size);c.push(Object(m.mapToCssModules)(u()(((o={})[g]=s.size||""===s.size,o["order"+r+s.order]=s.order||0===s.order,o["offset"+r+s.offset]=s.offset||0===s.offset,o)),n))}else{var d=b(l,t,s);c.push(d)}}})),c.length||c.push("col");var g=Object(m.mapToCssModules)(u()(t,c),n);return o.a.createElement(r,Object(a.a)({},i,{className:g}))};f.propTypes=p,f.defaultProps=j,t.a=f},504:function(e,t,n){"use strict";var a=n(14),s=n(15),l=n(1),o=n.n(l),r=n(2),i=n.n(r),c=n(29),u=n.n(c),m=n(87),g={tag:m.tagPropType,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},d=function(e){var t=e.className,n=e.cssModule,l=e.color,r=e.body,i=e.inverse,c=e.outline,g=e.tag,d=e.innerRef,p=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),j=Object(m.mapToCssModules)(u()(t,"card",!!i&&"text-white",!!r&&"card-body",!!l&&(c?"border":"bg")+"-"+l),n);return o.a.createElement(g,Object(a.a)({},p,{className:j,ref:d}))};d.propTypes=g,d.defaultProps={tag:"div"},t.a=d},507:function(e,t,n){"use strict";var a=n(14),s=n(15),l=n(1),o=n.n(l),r=n(2),i=n.n(r),c=n(29),u=n.n(c),m=n(87),g={tag:m.tagPropType,listTag:m.tagPropType,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},d=function(e){var t=e.className,n=e.listClassName,l=e.cssModule,r=e.children,i=e.tag,c=e.listTag,g=e["aria-label"],d=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(m.mapToCssModules)(u()(t),l),j=Object(m.mapToCssModules)(u()("breadcrumb",n),l);return o.a.createElement(i,Object(a.a)({},d,{className:p,"aria-label":g}),o.a.createElement(c,{className:j},r))};d.propTypes=g,d.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=d},508:function(e,t,n){"use strict";var a=n(14),s=n(15),l=n(1),o=n.n(l),r=n(2),i=n.n(r),c=n(29),u=n.n(c),m=n(87),g={tag:m.tagPropType,active:i.a.bool,className:i.a.string,cssModule:i.a.object},d=function(e){var t=e.className,n=e.cssModule,l=e.active,r=e.tag,i=Object(s.a)(e,["className","cssModule","active","tag"]),c=Object(m.mapToCssModules)(u()(t,!!l&&"active","breadcrumb-item"),n);return o.a.createElement(r,Object(a.a)({},i,{className:c,"aria-current":l?"page":void 0}))};d.propTypes=g,d.defaultProps={tag:"li"},t.a=d},512:function(e,t,n){"use strict";var a=n(30),s=n(1),l=n(1092),o=n(498),r=n(504),i=n(500),c=n(499),u=n(779),m=n(6);t.a=function(e){var t=e.title,n=e.children,g=e.noBody,d=e.code,p=e.iconCode,j=Object(s.useState)(!1),b=Object(a.a)(j,2),f=b[0],h=b[1],O=p||Object(m.jsx)(l.a,{size:15}),x=g?s.Fragment:o.a;return Object(m.jsxs)(r.a,{className:"card-snippet",children:[Object(m.jsxs)(i.a,{children:[Object(m.jsx)(c.a,{tag:"h4",children:t}),Object(m.jsx)("div",{className:"views cursor-pointer",onClick:function(){return h(!f)},children:O})]}),Object(m.jsx)(x,{children:n}),Object(m.jsx)(u.a,{isOpen:f,children:Object(m.jsx)(o.a,{children:d})})]})}}}]);
//# sourceMappingURL=128.28b3d6a7.chunk.js.map