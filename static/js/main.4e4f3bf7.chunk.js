(this.webpackJsonpartclub=this.webpackJsonpartclub||[]).push([[0],{50:function(e,s,t){},58:function(e,s,t){"use strict";t.r(s);var a=t(6),c=t.n(a),l=t(40),n=t.n(l),i=(t(50),t(42)),r=t(10),j=t(1),b=t(2),h=t(8),o=t(9),d=t(4);function m(){return Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",id:"mainNav",children:Object(d.jsxs)("div",{className:"container px-4 px-lg-5",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"index.html",children:"ART CLUB, HKUSU"}),Object(d.jsxs)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation",children:["Menu",Object(d.jsx)("i",{className:"fas fa-bars"})]}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarResponsive",children:Object(d.jsxs)("ul",{className:"navbar-nav ms-auto py-4 py-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link px-lg-3 py-3 py-lg-4",href:"index.html",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link px-lg-3 py-3 py-lg-4",href:"about.html",children:"About"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link px-lg-3 py-3 py-lg-4",href:"events.html",children:"Events"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link px-lg-3 py-3 py-lg-4",href:"gallery.html",children:"Gallery"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link px-lg-3 py-3 py-lg-4",href:"contact.html",children:"Contact"})})]})})]})})})}var x=t(13),O=t(0),p=t.n(O),u=t(3),f=t(41),g=t(23),N={apiKey:"AIzaSyDo_BDMKsosDxH0oGAztL2r_sXxtBFmJ4A",authDomain:"artclubhkusu-bc8d6.firebaseapp.com",databaseURL:"https://artclubhkusu-bc8d6-default-rtdb.firebaseio.com",projectId:"artclubhkusu-bc8d6",storageBucket:"artclubhkusu-bc8d6.appspot.com",messagingSenderId:"329603201597",appId:"1:329603201597:web:19a08152b269113b5bc854",measurementId:"G-C1ETY4V3SS"},v=t(33),y=new function e(){var s=this;Object(j.a)(this,e),this.createPost=function(e){return Object(g.a)(Object(g.b)(s.db,"posts"),e)},this.getPosts=Object(u.a)(p.a.mark((function e(){var t,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(g.e)(Object(g.b)(s.db,"posts")),e.next=3,Object(g.c)(t);case 3:return a=e.sent,c=[],a.forEach((function(e){var s=e.data();s._id=e.id,c.push(s)})),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)}))),this.fetchImage=function(e){return Object(v.a)(Object(v.c)(s.storage,e))},this.app=f.a(N),this.db=Object(g.d)(),this.storage=Object(v.b)()};function k(e){var s=e.header,t=e.subheader,l=e.imgName,n=Object(a.useState)(),i=Object(x.a)(n,2),r=i[0],j=i[1];return Object(a.useEffect)((function(){!r&&l&&y.fetchImage("banners/".concat(l)).then((function(e){j(e)})).catch((function(e){console.error(e)}))})),Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)("header",{className:"masthead",style:{backgroundImage:"url(".concat(r,")")},children:Object(d.jsx)("div",{className:"container position-relative px-4 px-lg-5",children:Object(d.jsx)("div",{className:"row gx-4 gx-lg-5 justify-content-center",children:Object(d.jsx)("div",{className:"col-md-10 col-lg-8 col-xl-7",children:Object(d.jsxs)("div",{className:"site-heading",children:[Object(d.jsx)("h1",{children:s}),Object(d.jsx)("span",{className:"subheading",children:t})]})})})})})})}var w=function(e){Object(h.a)(t,e);var s=Object(o.a)(t);function t(){return Object(j.a)(this,t),s.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(m,{}),Object(d.jsx)(k,{header:"Art Club HKUSU",subheader:"\u9999\u6e2f\u5927\u5b78\u5b78\u751f\u6703\u7f8e\u8853\u5b78\u6703",imgName:"index-bg.jpg"}),Object(d.jsxs)("div",{className:"container px-4 px-lg-5",children:[Object(d.jsx)("div",{className:"row gx-4 gx-lg-5 justify-content-center",children:Object(d.jsxs)("div",{className:"col-md-10 col-lg-8 col-xl-7",children:[Object(d.jsx)("h3",{children:"News & Upcoming Events"}),Object(d.jsx)("hr",{className:"my-4"})]})}),Object(d.jsx)("div",{className:"row gx-4 gx-lg-5 justify-content-center",children:Object(d.jsxs)("div",{className:"col-md-10 col-lg-8 col-xl-7",children:[Object(d.jsxs)("div",{className:"post-preview",children:[Object(d.jsxs)("a",{href:"post-oil-painting.html",children:[Object(d.jsx)("h2",{className:"post-title",children:"Oil Painting Workshop"}),Object(d.jsx)("h3",{className:"post-subtitle",children:"Introduction Oil Painting Course"})]}),Object(d.jsx)("p",{className:"post-meta",children:"Posted on August 30, 2021"})]}),Object(d.jsx)("hr",{className:"my-4"}),Object(d.jsxs)("div",{className:"post-preview",children:[Object(d.jsxs)("a",{href:"post-free-art-buffet.html",children:[Object(d.jsx)("h2",{className:"post-title",children:"Free Art Buffet"}),Object(d.jsx)("h3",{className:"post-subtitle",children:"\ud835\ude45\ud835\ude6a\ud835\ude68\ud835\ude69 \ud835\ude5a\ud835\ude6d\ud835\ude65\ud835\ude67\ud835\ude5a\ud835\ude68\ud835\ude68 \ud835\ude6e\ud835\ude64\ud835\ude6a\ud835\ude67\ud835\ude68\ud835\ude5a\ud835\ude61\ud835\ude5b!"})]}),Object(d.jsx)("p",{className:"post-meta",children:"Posted on August 15, 2021"})]}),Object(d.jsx)("hr",{className:"my-4"}),Object(d.jsxs)("div",{className:"post-preview",children:[Object(d.jsxs)("a",{href:"post-oday.html",children:[Object(d.jsx)("h2",{className:"post-title",children:"Orientation Day"}),Object(d.jsx)("h3",{className:"post-subtitle",children:"\ud835\ude52\ud835\ude5a\u2019\ud835\ude67\ud835\ude5a \ud835\ude64\ud835\ude5b\ud835\ude5b \ud835\ude69\ud835\ude64 \ud835\ude68\ud835\ude5a\ud835\ude5a \ud835\ude69\ud835\ude5d\ud835\ude5a \ud835\ude52\ud835\ude5e\ud835\ude6f\ud835\ude56\ud835\ude67\ud835\ude59, \ud835\ude69\ud835\ude5d\ud835\ude5a \ud835\ude6c\ud835\ude64\ud835\ude63\ud835\ude59\ud835\ude5a\ud835\ude67\ud835\ude5b\ud835\ude6a\ud835\ude61 \ud835\ude52\ud835\ude5e\ud835\ude6f\ud835\ude56\ud835\ude67\ud835\ude59 \ud835\ude64\ud835\ude5b \ud835\ude4a\ud835\ude6f."})]}),Object(d.jsx)("p",{className:"post-meta",children:"Posted on August 14, 2021"})]}),Object(d.jsx)("hr",{className:"my-4"}),Object(d.jsxs)("div",{className:"post-preview",children:[Object(d.jsxs)("a",{href:"post-art-jam-thursday.html",children:[Object(d.jsx)("h2",{className:"post-title",children:"Art Jam Thursday"}),Object(d.jsx)("h3",{className:"post-subtitle",children:"Join us every Thursday at Art Studio at Art Jam Thursday"})]}),Object(d.jsx)("p",{className:"post-meta",children:"Posted on August 5, 2021"})]}),Object(d.jsx)("hr",{className:"my-4"}),Object(d.jsxs)("div",{className:"post-preview",children:[Object(d.jsxs)("a",{href:"post-reg-day.html",children:[Object(d.jsx)("h2",{className:"post-title",children:"Registration Day"}),Object(d.jsx)("h3",{className:"post-subtitle",children:"Registration day is coming!"})]}),Object(d.jsx)("p",{className:"post-meta",children:"Posted on August 11, 2021"})]}),Object(d.jsx)("hr",{className:"my-4"}),Object(d.jsxs)("div",{className:"post-preview",children:[Object(d.jsxs)("a",{href:"post-iridescence.html",children:[Object(d.jsx)("h2",{className:"post-title",children:"Art Club Iridescence"}),Object(d.jsx)("h3",{className:"post-subtitle",children:"Meet the 2021-2022 Session Committee Members"})]}),Object(d.jsx)("p",{className:"post-meta",children:"Posted on August 4, 2021"})]}),Object(d.jsx)("hr",{className:"my-4"})]})})]}),Object(d.jsx)("footer",{className:"border-top",children:Object(d.jsx)("div",{className:"container px-4 px-lg-5",children:Object(d.jsx)("div",{className:"row gx-4 gx-lg-5 justify-content-center",children:Object(d.jsxs)("div",{className:"col-md-10 col-lg-8 col-xl-7",children:[Object(d.jsxs)("ul",{className:"list-inline text-center",children:[Object(d.jsx)("li",{className:"list-inline-item",children:Object(d.jsx)("a",{href:"https://www.instagram.com/artclub_hkusu/",children:Object(d.jsxs)("span",{className:"fa-stack fa-lg",children:[Object(d.jsx)("i",{className:"fas fa-circle fa-stack-2x"}),Object(d.jsx)("i",{className:"fab fa-instagram fa-stack-1x fa-inverse"})]})})}),Object(d.jsx)("li",{className:"list-inline-item",children:Object(d.jsx)("a",{href:"https://www.facebook.com/hkusu.artclub/",children:Object(d.jsxs)("span",{className:"fa-stack fa-lg",children:[Object(d.jsx)("i",{className:"fas fa-circle fa-stack-2x"}),Object(d.jsx)("i",{className:"fab fa-facebook-f fa-stack-1x fa-inverse"})]})})}),Object(d.jsx)("li",{className:"list-inline-item",children:Object(d.jsx)("a",{href:"mailto:artclubhkusu@gmail.com",children:Object(d.jsxs)("span",{className:"fa-stack fa-lg",children:[Object(d.jsx)("i",{className:"fas fa-circle fa-stack-2x"}),Object(d.jsx)("i",{className:"fa fa-envelope fa-stack-1x fa-inverse"})]})})})]}),Object(d.jsx)("div",{className:"small text-center text-muted fst-italic",children:"Copyright \xa9 Art Club, HKUSU 2021"})]})})})})]})}}]),t}(a.Component);var A=function(){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)("h1",{children:"Art Club"}),Object(d.jsx)(i.a,{children:Object(d.jsx)(r.a,{path:"/",exact:!0,component:w})})]})};n.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.4e4f3bf7.chunk.js.map