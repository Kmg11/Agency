(this.webpackJsonpagency=this.webpackJsonpagency||[]).push([[0],Array(42).concat([function(e,t,c){},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(17),r=c.n(s),i=(c(42),c(9)),o=c(8),l=c(115),j=c(114),d=c(4);var b=function(e,t){var c=Object(n.useState)((function(){return function(e,t){var c=JSON.parse(localStorage.getItem(e));return null!==c?c:t instanceof Function?t():t}(e,t)})),a=Object(d.a)(c,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){localStorage.setItem(e,JSON.stringify(s))}),[e,s]),[s,r]},u=c(0),m=Object(n.createContext)(),O=Object(n.createContext)(),h=Object(n.createContext)(),f=Object(n.createContext)(),x=function(){return Object(n.useContext)(m)},v=function(e){var t=e.children,c=b("dark-theme",null),a=Object(d.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)(!1),o=Object(d.a)(i,2),l=o[0],j=o[1],x=Object(n.useCallback)((function(){document.body.classList.add("dark-theme"),r(!0),j(!0)}),[r]),v=Object(n.useCallback)((function(){document.body.classList.remove("dark-theme"),r(!1),j(!1)}),[r]);return Object(n.useEffect)((function(){(null!==s&&(s?x():v()),null===s)&&(window.matchMedia("(prefers-color-scheme: dark)").matches?x():v())}),[x,v,s]),Object(u.jsx)(m.Provider,{value:l,children:Object(u.jsx)(O.Provider,{value:function(){document.body.classList.toggle("dark-theme"),j((function(e){return!e})),r((function(e){return!e}))},children:Object(u.jsx)(h.Provider,{value:x,children:Object(u.jsx)(f.Provider,{value:v,children:t})})})})},p=c(20),g=c.n(p),N=function(e,t){var c=Object(n.useState)(t),a=Object(d.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)(null),o=Object(d.a)(i,2),l=o[0],j=o[1],b=Object(n.useState)(!0),u=Object(d.a)(b,2),m=u[0],O=u[1],h=Object(n.useState)(null),f=Object(d.a)(h,2),x=f[0],v=f[1];return Object(n.useEffect)((function(){g.a.get(e).then((function(e){var t=e.data;r(t),j(!0),O(!1),v(null)}),(function(e){j(!1),O(!1),v(e)}))}),[e]),{data:s,success:l,isPending:m,error:x}},k=function(e){var t=Object(o.f)().pathname===e,c=Object(o.f)().pathname;return{preventRouterLinks:function(e,n){(c===n||t)&&e.preventDefault()},isPathMatched:t}},w=(c(70),function(){var e=k("/").preventRouterLinks,t=N("./Apis/logo.json",[]).data,c=t.image,n=void 0===c?"":c,a=t.text,s=void 0===a?"":a;return Object(u.jsxs)(i.b,{to:"/",onClick:e,className:"logo",children:[n&&Object(u.jsx)("img",{src:n,alt:"Logo",draggable:"false",className:"logo-image"}),s&&Object(u.jsx)("span",{className:"logo-text",children:s})]})}),y=(c(71),function(e){var t=e.setNavbarOpen;return Object(u.jsxs)("button",{className:"navbar-responsive-btn",onClick:function(){return t((function(e){return!e}))},"aria-label":"Menu",children:[Object(u.jsx)("div",{className:"line"}),Object(u.jsx)("div",{className:"line"}),Object(u.jsx)("div",{className:"line"})]})}),C=(c(72),function(e){var t=e.button.text,c=e.habdleCLick;return Object(u.jsx)("li",{className:"navbar-item navbar-btn",children:Object(u.jsx)(i.b,{to:"/",onClick:function(e){return c(e,"/")},className:"navbar-link",children:Object(u.jsx)("span",{className:"navbar-btn-text",children:t})})})}),S=function(e){var t=e.setNavbarOpen,c=k().preventRouterLinks,n=N("./Apis/navbar.json",[]).data,a=n.links,s=void 0===a?[]:a,r=n.button,o=void 0===r?{}:r,l=function(e,n){c(e,n),t(!1)},j=s.map((function(e){return Object(u.jsx)("li",{className:"navbar-item",children:Object(u.jsx)(i.c,{exact:!0,to:e.link,className:"navbar-link",onClick:function(t){return l(t,e.link)},children:e.text})},e.id)}));return Object(u.jsxs)("ul",{className:"navbar-list",children:[j,Object(u.jsx)(C,{button:o,habdleCLick:l})]})},L=(c(73),function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(d.a)(s,2),i=r[0],o=r[1],l=Object(n.useRef)();return Object(n.useEffect)((function(){document.addEventListener("click",(function e(t){c&&t.target!==l.current&&(a(!1),document.removeEventListener("click",e))}))}),[c]),Object(n.useEffect)((function(){return window.addEventListener("keyup",(function e(t){c&&"Escape"===t.key&&"Escape"===t.code&&(a(!1),window.removeEventListener("keyup",e))})),function(){}}),[c]),Object(n.useEffect)((function(){window.addEventListener("resize",(function e(){c&&(a(!1),window.removeEventListener("resize",e))}))}),[c]),Object(n.useEffect)((function(){window.addEventListener("scroll",(function e(){window.pageYOffset>50&&!i?(o(!0),window.removeEventListener("scroll",e)):window.pageYOffset<50&&i&&(o(!1),window.removeEventListener("scroll",e))}))}),[i]),Object(u.jsx)("nav",{className:"navbar\n\t\t\t\t".concat(c?" open":"","\n\t\t\t\t").concat(i?" scroll":"","\n\t\t\t"),ref:l,onClick:function(e){return e.stopPropagation()},children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"navbar-inner",children:[Object(u.jsx)(w,{}),Object(u.jsx)(y,{setNavbarOpen:a}),Object(u.jsx)(S,{setNavbarOpen:a})]})})})}),P=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1];return{throttle:function(e,t){return function(){c||(a(!0),e.apply(void 0,arguments),setTimeout((function(){a(!1)}),t))}}}},E=(c(74),function(){return Object(u.jsx)("div",{className:"loading-dual-ring"})}),T=(c(75),function(e){return Object(u.jsxs)("div",{className:"error-message",children:[Object(u.jsx)("p",{children:e.message}),Object(u.jsxs)("p",{children:[e.name," Not Loaded"]}),Object(u.jsx)("p",{children:"Please Refresh The Page"})]})}),A=(c(76),function(){var e=x(),t=P().throttle,c=N("./Apis/header.json",[]),a=c.data,s=a.title,r=void 0===s?{before:"",word:"",after:""}:s,i=a.body,o=void 0===i?"":i,l=a.button,j=void 0===l?"":l,d=a.image,b=void 0===d?"":d,m=a.image_dark,O=void 0===m?"":m,h=c.success,f=c.isPending,v=c.error,p=Object(n.useRef)(),g=t((function(){window.scrollTo({top:p.current.offsetHeight,behavior:"smooth"})}),1e3);return Object(u.jsxs)("header",{className:"main-header",ref:p,children:[f&&Object(u.jsx)(E,{}),Object(u.jsx)("div",{className:"container",children:h&&Object(u.jsxs)("div",{className:"header-inner",children:[Object(u.jsxs)("section",{className:"header-desc",children:[Object(u.jsxs)("h1",{className:"header-title",children:[r.before," ",Object(u.jsx)("span",{children:r.word})," ",r.after]}),Object(u.jsx)("p",{className:"header-paragraph",children:o}),Object(u.jsx)("button",{className:"header-btn",onClick:g,children:j})]}),Object(u.jsx)("section",{className:"header-image",children:Object(u.jsx)("img",{src:e?O:b,alt:"header-Illustration",draggable:"false"})})]})}),v&&Object(u.jsx)(T,{message:v.message,name:"Header"})]})}),_=(c(77),function(e){var t=e.content,c=x(),n=k("/services").preventRouterLinks,a=t.map((function(e){return Object(u.jsxs)("div",{className:"services-card",children:[Object(u.jsx)(i.b,{to:"/services",onClick:n,className:"services-link","aria-label":"Service Link"}),Object(u.jsx)("h3",{className:"card-title",children:e.title}),Object(u.jsx)("div",{className:"card-img",children:Object(u.jsx)("img",{src:c?e.image_dark:e.image,alt:e.title,draggable:"false"})}),Object(u.jsx)("p",{className:"card-paragraph",children:e.body})]},e.id)}));return Object(u.jsx)("section",{className:"services-container",children:a})}),I=(c(78),function(e){var t=e.header,c=t.title,n=t.body;return Object(u.jsxs)("header",{className:"services-header",children:[Object(u.jsx)("h2",{className:"services-title",children:c}),Object(u.jsx)("p",{className:"services-paragraph",children:n})]})}),R=(c(79),{backgroundImage:"url(./../../Images/Services/background.svg)"}),F={backgroundImage:"url(./../../Images/Services/background-dark.svg)"},B=function(){var e=x(),t=N("./Apis/services.json",[]),c=t.data,n=c.header,a=void 0===n?{}:n,s=c.content,r=void 0===s?[]:s,i=t.success,o=t.isPending,l=t.error;return Object(u.jsxs)("section",{className:"services",style:e?i?F:null:i?R:null,children:[o&&Object(u.jsx)(E,{}),i&&Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(I,{header:a}),Object(u.jsx)(_,{content:r})]}),l&&Object(u.jsx)(T,{message:l.message,name:"Services"})]})},M=(c(80),function(e){var t=e.header,c=t.title,n=t.body;return Object(u.jsxs)("header",{className:"about-header",children:[Object(u.jsx)("h2",{className:"about-title",children:c}),Object(u.jsx)("p",{className:"about-paragraph",children:n})]})}),V=(c(81),function(e){var t=x(),c=P().throttle,a=Object(n.useState)(!1),s=Object(d.a)(a,2),r=s[0],i=s[1],o=c((function(e){e.target.parentElement.style.opacity="0",setTimeout((function(){i((function(e){return!e})),e.target.parentElement.style.opacity="1"}),300)}),700),l=e.content,j=l.image,b=l.image_dark,m=l.title,O=l.paragraph_1,h=l.paragraph_1_more,f=l.paragraph_2,v=l.paragraph_2_more;return Object(u.jsxs)("section",{className:"about-body",children:[Object(u.jsx)("div",{className:"about-image",children:Object(u.jsx)("img",{src:t?b:j,alt:"About",draggable:"false"})}),Object(u.jsxs)("div",{className:"about-desc",children:[Object(u.jsx)("h3",{className:"desc-title",children:m}),Object(u.jsx)("p",{className:"desc-paragraph",children:r?h:O}),Object(u.jsx)("p",{className:"desc-paragraph",children:r?v:f}),Object(u.jsx)("button",{className:"desc-btn",onClick:o,children:r?"Read Less":"Read More"})]})]})}),J=(c(82),function(){var e=N("./Apis/about.json",[]),t=e.data,c=t.header,n=void 0===c?{}:c,a=t.content,s=void 0===a?{}:a,r=e.success,i=e.isPending,o=e.error;return Object(u.jsxs)("section",{className:"about",children:[i&&Object(u.jsx)(E,{}),r&&Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(M,{header:n}),Object(u.jsx)(V,{content:s})]}),o&&Object(u.jsx)(T,{message:o.message,name:"About"})]})}),q=(c(83),function(e){var t=e.projects,c=e.type,a=e.projectsContainer,s=P().throttle,r=k("/portfolio"),o=r.preventRouterLinks,l=r.isPathMatched,j=Object(n.useState)(9),b=Object(d.a)(j,2),m=b[0],O=b[1],h=s((function(){m!==t.length?O(t.length):O(9)}),500),f=t.map((function(e,t){return t<m?Object(u.jsxs)("div",{className:"".concat(e.type===c||"All Work"===c?"project":"project hidden"),children:[Object(u.jsx)(i.b,{to:"/portfolio",onClick:o,className:"project-link","aria-label":"Project Link"}),Object(u.jsxs)("figure",{children:[Object(u.jsxs)("div",{className:"project-image",children:[Object(u.jsx)("img",{src:e.image,alt:e.caption}),Object(u.jsx)("span",{className:"type",children:e.type})]}),Object(u.jsx)("figcaption",{children:e.caption})]})]},e.id):null}));return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)("div",{className:"projects",ref:a,children:f}),Object(u.jsx)("div",{className:"portfolio-link",children:Object(u.jsx)(i.b,{to:"/portfolio",onClick:l?function(e){o(e),h()}:null,children:m>=t.length?"View Less":"View All"})})]})}),z=function(){return{debounce:Object(n.useCallback)((function(e,t){var c;return function(){for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];c&&clearTimeout(c),c=setTimeout((function(){e.apply(void 0,a)}),t)}}),[])}},D=(c(84),function(e){var t=e.nav,c=e.type,a=e.changeType,s=z().debounce,r=P().throttle,i=Object(n.useState)({left:0,width:"80px"}),o=Object(d.a)(i,2),l=o[0],j=o[1],b=Object(n.useState)(0),m=Object(d.a)(b,2),O=m[0],h=m[1],f=Object(n.useState)(!1),x=Object(d.a)(f,2),v=x[0],p=x[1],g=Object(n.useRef)(0),N=Object(n.useCallback)((function(e,t){var c=getComputedStyle(t);j({left:t.offsetLeft+.5*parseFloat(c.paddingLeft),width:t.offsetWidth-parseFloat(c.paddingLeft)}),h(e),a(t.textContent)}),[a]);Object(n.useEffect)((function(){var e=s((function(){return N(O,g.current)}),200);return g.current?(v||(p(!0),N(O,g.current)),window.addEventListener("resize",e)):a(c),function(){window.removeEventListener("resize",e)}}),[s,v,N,O,a,c]);var k=t.map((function(e,t){return Object(u.jsx)("li",{className:"".concat(O===t?"portfolio-item active":"portfolio-item"),onClick:function(e){return function(e,t){var n=r(N,500);c!==t.textContent&&n(e,t)}(t,e.target)},ref:O===t?g:null,children:e},t)}));return Object(u.jsxs)("div",{className:"portfolio-nav",children:[Object(u.jsx)("ul",{className:"portfolio-list",children:k}),Object(u.jsx)("div",{className:"list-line",style:l})]})}),H=(c(85),function(e){var t=e.header,c=t.title,n=t.body;return Object(u.jsxs)("header",{className:"portfolio-header",children:[Object(u.jsx)("h2",{className:"portfolio-title",children:c}),Object(u.jsx)("p",{className:"portfolio-paragraph",children:n})]})}),W=(c(86),{backgroundImage:"url('./Images/Portfolio/background.svg')"}),Y={backgroundImage:"url('./Images/Portfolio/background-dark.svg')"},U=function(){var e=x(),t=N("./Apis/portfolio.json",[]),c=t.data,a=c.header,s=void 0===a?{}:a,r=c.nav,i=void 0===r?[]:r,o=c.projects,l=void 0===o?[]:o,j=t.success,b=t.isPending,m=t.error,O=Object(n.useRef)(),h=Object(n.useState)("All Work"),f=Object(d.a)(h,2),v=f[0],p=f[1];return Object(u.jsxs)("section",{className:"portfolio",style:e?j?Y:null:j?W:null,children:[b&&Object(u.jsx)(E,{}),j&&Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(H,{header:s}),Object(u.jsxs)("section",{className:"portfolio-body",children:[Object(u.jsx)(D,{nav:i,type:v,changeType:function(e){e!==v&&O&&(O.current.classList.add("change-type"),setTimeout((function(){O.current.classList.remove("change-type")}),500),setTimeout((function(){p(e)}),300))}}),Object(u.jsx)(q,{projects:l,type:v,projectsContainer:O})]})]}),m&&Object(u.jsx)(T,{message:m.message,name:"Portfolio"})]})},G=(c(87),function(e){var t=e.header,c=t.title,n=t.body;return Object(u.jsxs)("header",{className:"team-header",children:[Object(u.jsx)("h2",{className:"team-title",children:c}),Object(u.jsx)("p",{className:"team-paragraph",children:n})]})}),K=c(111),Q=c(113),X=c(112),Z=c(109),$=c(110);c(88),c(89),c(90);X.a.use([Z.a,$.a]);var ee=function(e){var t=e.content,c=k("/team").preventRouterLinks,n=t.map((function(e){return Object(u.jsx)(K.a,{children:Object(u.jsxs)("div",{className:"team-member",children:[Object(u.jsx)(i.b,{to:"/team",onClick:c,className:"member-link","aria-label":"Team Member Link"}),Object(u.jsx)("div",{className:"member-image",children:Object(u.jsx)("img",{src:e.image,alt:e.name,draggable:"false"})}),Object(u.jsx)("p",{className:"member-name",children:e.name}),Object(u.jsx)("p",{className:"member-role",children:e.role}),Object(u.jsx)("div",{className:"member-social-media",children:e.social.map((function(e){return Object(u.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",className:"social-link","aria-label":"Social Media Link",children:Object(u.jsx)("i",{className:"icon ".concat(e.icon)})},e.id)}))})]})},e.id)}));return Object(u.jsx)("section",{className:"team-body",children:Object(u.jsx)(Q.a,{slidesPerView:1,spaceBetween:10,slidesPerGroup:1,centeredSlides:!0,autoplay:{delay:4e3,disableOnInteraction:!1},navigation:!0,breakpoints:{0:{slidesPerView:2,spaceBetween:10},576:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:2,spaceBetween:90},900:{slidesPerView:4,spaceBetween:15},1200:{slidesPerView:4,spaceBetween:50},1400:{slidesPerView:6,spaceBetween:30}},children:n})})},te=(c(91),function(){var e=N("./Apis/team.json",[]),t=e.data,c=t.header,a=void 0===c?{}:c,s=t.content,r=void 0===s?[]:s,i=e.success,o=e.isPending,l=e.error;return Object(u.jsxs)("section",{className:"team",children:[o&&Object(u.jsx)(E,{}),i&&Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(G,{header:a}),Object(u.jsx)(ee,{content:r})]}),l&&Object(u.jsx)(T,{message:l.message,name:"Team"})]})}),ce=(c(92),function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],a=t[1],s=N("./Apis/newsletter.json",[]),r=s.data,i=r.title,o=void 0===i?"":i,l=r.body,j=void 0===l?"":l,b=s.success,m=s.isPending,O=s.error;return Object(u.jsxs)("section",{className:"newsletter",children:[m&&Object(u.jsx)(E,{}),b&&Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("header",{className:"newsletter-header",children:[Object(u.jsx)("h2",{className:"newsletter-title",children:o}),Object(u.jsx)("p",{className:"newsletter-paragraph",children:j})]}),Object(u.jsxs)("form",{className:"newsletter-form",children:[Object(u.jsx)("input",{type:"email",placeholder:"Email",value:c,onChange:function(e){return a(e.target.value)},required:!0}),Object(u.jsx)("input",{type:"submit",value:"JOIN"})]})]}),O&&Object(u.jsx)(T,{message:O.message,name:"Newsletter"})]})}),ne=(c(93),function(){var e,t=x(),c=P().throttle,a=b("form-name",""),s=Object(d.a)(a,2),r=s[0],i=s[1],o=b("form-email",""),l=Object(d.a)(o,2),j=l[0],m=l[1],O=b("form-message",""),h=Object(d.a)(O,2),f=h[0],v=h[1],p=Object(n.useState)(r),N=Object(d.a)(p,2),k=N[0],w=N[1],y=Object(n.useState)(j),C=Object(d.a)(y,2),S=C[0],L=C[1],E=Object(n.useState)(f),T=Object(d.a)(E,2),A=T[0],_=T[1],I=Object(n.useState)(!1),R=Object(d.a)(I,2),F=R[0],B=R[1],M=Object(n.useState)(!1),V=Object(d.a)(M,2),J=V[0],q=V[1],z=Object(n.useState)(null),D=Object(d.a)(z,2),H=D[0],W=D[1],Y=Object(n.useState)(!0),U=Object(d.a)(Y,2),G=U[0],K=U[1],Q=Object(n.useState)(g.a.CancelToken.source()),X=Object(d.a)(Q,1)[0],Z=c((function(){!F&&B(!0),J&&q(!1),H&&W(null),e&&clearTimeout(e),g.a.post("http://localhost:3000/messages",{name:k,email:S,message:A},{cancelToken:X.token}).then((function(t){G&&(B(!1),q(!0),H&&W(null),e&&clearTimeout(e),e=setTimeout((function(){q(!1)}),1e3),w(""),L(""),_(""),i(""),m(""),v(""))}),(function(t){G&&(B(!1),J&&q(!1),W(t.message),e=setTimeout((function(){W(null)}),3e3))}))}),3e3);return Object(n.useEffect)((function(){return function(){K(!1),X.cancel("Cancel Cleanup")}}),[X]),Object(u.jsxs)("div",{className:"send-message",children:[Object(u.jsx)("img",{className:"background-image",src:"./Images/Contact/background".concat(t?"-dark":"",".svg"),alt:"Background 2",draggable:"false"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),Z()},className:"contact-form",children:[Object(u.jsx)("label",{htmlFor:"name",children:"Say Hi"}),Object(u.jsx)("input",{id:"name",type:"text",placeholder:"Full Name",required:!0,value:k,disabled:F&&"disabled",onChange:function(e){w(e.target.value),i(e.target.value)}}),Object(u.jsx)("input",{type:"email",placeholder:"Email Address",required:!0,value:S,disabled:F&&"disabled",onChange:function(e){L(e.target.value),m(e.target.value)}}),Object(u.jsx)("textarea",{placeholder:"Message",required:!0,value:A,disabled:F&&"disabled",onChange:function(e){_(e.target.value),v(e.target.value)}}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"submit",value:"Submit"}),Object(u.jsxs)("div",{className:"status",children:[F&&Object(u.jsx)("div",{className:"loading"}),H&&Object(u.jsx)("p",{className:"error",children:H}),J&&Object(u.jsx)("p",{className:"sucess",children:"Message Send"})]})]})]})]})}),ae=(c(94),function(e){var t=e.content.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"left",children:Object(u.jsx)("i",{className:"icon ".concat(e.icon," fa-fw")})}),Object(u.jsxs)("div",{className:"right",children:[Object(u.jsx)("h3",{className:"address-title",children:e.title}),Object(u.jsxs)("div",{className:"address-details",children:[Object(u.jsx)("p",{children:e.text_1}),""!==e.text_2&&Object(u.jsx)("p",{children:e.text_2}),""!==e.text_3&&Object(u.jsx)("p",{children:e.text_3})]})]})]},e.id)}));return Object(u.jsx)("address",{className:"contact-details",children:t})}),se=(c(95),function(e){var t=e.header,c=t.title,n=t.body,a=N("./Apis/social.json",[]).data,s=(void 0===a?[]:a).map((function(e){return Object(u.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer","aria-label":e.name,children:Object(u.jsx)("i",{className:"icon ".concat(e.icon)})},e.id)}));return Object(u.jsxs)("header",{className:"contact-header",children:[Object(u.jsx)("h2",{className:"contact-title",children:c}),Object(u.jsx)("p",{className:"contact-paragraph",children:n}),Object(u.jsx)("div",{className:"social-links",children:s})]})}),re=(c(96),function(){var e=N("./Apis/contact.json",[]),t=e.data,c=t.header,n=void 0===c?{}:c,a=t.content,s=void 0===a?[]:a,r=e.success,i=e.isPending,o=e.error;return Object(u.jsxs)("section",{className:"contact",children:[i&&Object(u.jsx)(E,{}),r&&Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"contact-inner",children:[Object(u.jsxs)("section",{className:"contact-info",children:[Object(u.jsx)(se,{header:n}),Object(u.jsx)(ae,{content:s})]}),Object(u.jsx)(ne,{})]})}),o&&Object(u.jsx)(T,{message:o.message,name:"Contact"})]})}),ie=(c(97),function(e){var t=e.copyRight,c=k("/").preventRouterLinks,n=N("./Apis/logo.json",[]).data,a=n.image,s=void 0===a?"":a,r=n.text,o=void 0===r?"":r,l=N("./Apis/social.json",[]).data,j=(void 0===l?[]:l).map((function(e){return Object(u.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer","aria-label":e.name,children:Object(u.jsx)("i",{className:"icon ".concat(e.icon)})},e.id)}));return Object(u.jsxs)("footer",{className:"footer-footer",children:[Object(u.jsxs)(i.b,{to:"/",onClick:c,className:"logo",children:[s&&Object(u.jsx)("img",{src:s,alt:"Logo",draggable:"false",className:"logo-image"}),o&&Object(u.jsx)("span",{className:"logo-text",children:o})]}),Object(u.jsx)("p",{className:"copy-right",children:t}),Object(u.jsx)("div",{className:"social-links",children:j})]})}),oe=c(36),le=(c(98),function(e){var t=e.content,c=N("./Apis/social.json",[]).data,n=void 0===c?[]:c,a=[].concat(Object(oe.a)(t),[{id:4,title:"Social Media",links:n}]).map((function(e){return Object(u.jsxs)("div",{className:"links",children:[Object(u.jsx)("h3",{className:"links-title",children:e.title}),Object(u.jsx)("ul",{className:"links-list",children:e.links.map((function(e){return Object(u.jsx)("li",{className:"links-item",children:Object(u.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",className:"links-link",children:e.name})},e.id)}))})]},e.id)}));return Object(u.jsx)("div",{className:"footer-links",children:a})}),je=(c(99),function(e){var t=e.header.title,c=Object(n.useState)(""),a=Object(d.a)(c,2),s=a[0],r=a[1];return Object(u.jsxs)("header",{className:"footer-header",children:[Object(u.jsx)("h2",{className:"footer-title",children:t}),Object(u.jsxs)("form",{className:"newsletter-form",children:[Object(u.jsx)("input",{type:"email",placeholder:"Email",value:s,onChange:function(e){return r(e.target.value)},required:!0}),Object(u.jsx)("input",{type:"submit",value:"JOIN"})]})]})}),de=(c(100),function(){var e=N("./Apis/footer.json",[]),t=e.data,c=t.header,n=void 0===c?{}:c,a=t.content,s=void 0===a?[{id:1,title:"About Us",links:[]},{id:2,title:"Contact Us",links:[]},{id:3,title:"Videos",links:[]}]:a,r=t.copy_right,i=void 0===r?[]:r,o=e.success,l=e.isPending,j=e.error;return Object(u.jsxs)("footer",{className:"main-footer",children:[l&&Object(u.jsx)(E,{}),o&&Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(je,{header:n}),Object(u.jsx)(le,{content:s}),Object(u.jsx)(ie,{copyRight:i})]}),j&&Object(u.jsx)(T,{message:j.message,name:"Footer"})]})}),be=function(){return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(A,{}),Object(u.jsx)(B,{}),Object(u.jsx)(J,{}),Object(u.jsx)(U,{}),Object(u.jsx)(te,{}),Object(u.jsx)(ce,{}),Object(u.jsx)(re,{}),Object(u.jsx)(de,{})]})},ue=(c(101),function(){var e=P().throttle,t=Object(n.useState)(!1),c=Object(d.a)(t,2),a=c[0],s=c[1];Object(n.useEffect)((function(){window.addEventListener("scroll",(function e(){window.pageYOffset>700&&!a?(s(!0),window.removeEventListener("scroll",e)):window.pageYOffset<700&&a&&(s(!1),window.removeEventListener("scroll",e))}))}),[a]);var r=e((function(){window.scrollTo({top:0,behavior:"smooth"})}),1e3);return Object(u.jsx)("button",{className:"scroll-to-top ".concat(a?"show":""),"aria-label":"Scroll To Top Button",onClick:r,children:Object(u.jsx)("i",{className:"icon fas fa-angle-up"})})}),me=(c(102),function(){var e=x(),t=Object(n.useContext)(O),c=P().throttle,a=Object(n.useState)(!1),s=Object(d.a)(a,2),r=s[0],i=s[1],o=c((function(){t(),i(!0),setTimeout((function(){i(!1)}),310)}),400);return Object(u.jsx)("button",{className:"dark-theme-btn","aria-label":"Dark Theme Button",onClick:o,children:Object(u.jsx)("i",{className:"icon fas ".concat(e?"fa-sun":"fa-moon"," ").concat(r?"animate":"")})})}),Oe=(c(103),function(){return Object(u.jsxs)("div",{className:"option-buttons",children:[Object(u.jsx)(ue,{}),Object(u.jsx)(me,{})]})});c(104);var he=function(){return Object(u.jsxs)("div",{className:"not-found",children:[Object(u.jsx)("h2",{children:"404"}),Object(u.jsx)("p",{children:"Sorry We Can't Find This Page"}),Object(u.jsx)(i.b,{to:"/",children:"Back To Home Page"})]})};c(105);var fe=function(){return Object(u.jsx)(v,{children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(L,{}),Object(u.jsx)(Oe,{}),Object(u.jsx)(o.a,{render:function(e){var t=e.location;return Object(u.jsx)(l.a,{children:Object(u.jsx)(j.a,{timeout:450,classNames:"fade",children:Object(u.jsxs)(o.c,{location:t,children:[Object(u.jsx)(o.a,{exact:!0,path:"/",component:be}),Object(u.jsx)(o.a,{path:"/services",component:B}),Object(u.jsx)(o.a,{path:"/portfolio",component:U}),Object(u.jsx)(o.a,{path:"/team",component:te}),Object(u.jsx)(o.a,{path:"/contact",component:re}),Object(u.jsx)(o.a,{path:"*",component:he})]})},t.key)})}})]})})},xe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,116)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(fe,{})}),document.getElementById("root")),xe()}]),[[106,1,2]]]);
//# sourceMappingURL=main.e315bcd9.chunk.js.map