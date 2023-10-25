"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[917],{5529:function(e,t,n){var c=n(9439),a=n(2791),r=n(8134),o=n(5794),i=n(9529),s=n(2827),l=n(5458),u=n(3729),f=n(3451),d=n(9286),m=n(7962),p=n(4006),g=n(2542),x=n(586),y=n(1932),h=n(573),v=n(3388),b=n(6859),Z=n(3272),j=n(2763),w=n(7689),C=n(1087),O=n(184),E=x.Z.Header,k=x.Z.Content,S=x.Z.Footer,P=x.Z.Sider;t.Z=function(e){var t=(0,w.TH)();(0,a.useEffect)((function(){return JSON.parse(localStorage.getItem("user")).changePassword?A("/"):"management"!==(0,j.bW)().user.role?window.location.href="/":void 0}),[j.bW]);var n=(0,a.useState)(!0),I=(0,c.Z)(n,2),M=I[0],N=I[1],A=(0,w.s0)(),U=[{key:"/management/dashboard",icon:a.createElement(r.Z),label:(0,O.jsx)(C.rU,{to:"/management/dashboard",children:"Dashboard"})},{key:"/management/timetable",icon:a.createElement(o.Z),label:(0,O.jsx)(C.rU,{to:"/management/timetable",children:"Timetable"})},{key:"/management/faculty",icon:a.createElement(i.Z),label:(0,O.jsx)(C.rU,{to:"/management/faculty",children:"Faculty"})},{key:"/management/course",icon:a.createElement(s.Z),label:(0,O.jsx)(C.rU,{to:"/management/course",children:"Courses"})},{key:"/management/profile",icon:a.createElement(l.Z),label:(0,O.jsx)(C.rU,{to:"/management/profile",children:"Profile"})},{key:"/management/announcement/view",icon:a.createElement(u.Z),label:(0,O.jsx)(C.rU,{to:"/management/announcement/view",children:"Announcements"})},{key:"message",icon:a.createElement(f.Z),label:(0,O.jsx)(C.rU,{to:"/management/message/view",children:"Messages"})},{key:"/management/post/new",icon:a.createElement(d.Z),label:(0,O.jsx)(C.rU,{to:"/management/post/new",children:"Post"})},{key:"/management/policy/view",icon:a.createElement(u.Z),label:(0,O.jsx)(C.rU,{to:"/management/policy/view",children:"Policy"})},{key:"Logout",icon:a.createElement(m.Z),label:(0,O.jsx)(C.rU,{onClick:function(){(0,j.uf)().then((function(e){if(e.redirect)return A("/?logout=true")}))},children:"Logout"})}];return(0,O.jsx)(y.ZP,{theme:{token:{colorPrimary:"#006494",borderRadius:2,colorBgContainer:"#E8F1F2"}},children:(0,O.jsxs)(x.Z,{children:[(0,O.jsxs)(P,{breakpoint:"lg",theme:M?"dark":"light",collapsedWidth:"0",style:{height:"100vh",background:"#13293D"},children:[(0,O.jsx)("div",{className:"demo-logo-vertical",children:(0,O.jsx)(h.Z,{src:"/upesfull.png"})}),(0,O.jsx)(v.Z,{theme:M?"dark":"light",mode:"inline",style:{background:"#13293D",fontSize:"16px"},defaultSelectedKeys:t.pathname,defaultOpenKeys:[],items:U})]}),(0,O.jsxs)(x.Z,{children:[(0,O.jsx)(E,{style:{padding:0},children:(0,O.jsx)(b.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,O.jsx)(i.Z,{})})}),(0,O.jsx)(k,{style:{margin:"24px 16px 0"},children:(0,O.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,O.jsx)(S,{style:{textAlign:"center"},children:"Made By Students During Nighouts"})]}),(0,O.jsx)(Z.Z,{icon:M?(0,O.jsx)(p.Z,{}):(0,O.jsx)(g.Z,{}),onClick:function(){N(!M)}})]})})}},1917:function(e,t,n){n.r(t);var c=n(9439),a=n(2791),r=n(3655),o=n(6106),i=n(914),s=n(5529),l=n(2763),u=n(184);t.default=function(){var e=(0,a.useState)((0,l.bW)()),t=(0,c.Z)(e,1)[0];return(0,a.useEffect)((function(){document.title="Dashboard | SoCIS"})),(0,u.jsxs)(s.Z,{children:[(0,u.jsxs)(r.Z.Title,{children:["Greetings, ",(0,u.jsx)("br",{}),t.user.firstName]}),(0,u.jsx)(o.Z,{children:(0,u.jsx)(i.Z,{xs:{span:5,offset:1},lg:{span:6,offset:2}})})]})}},3451:function(e,t,n){n.d(t,{Z:function(){return s}});var c=n(7462),a=n(2791),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"}}]},name:"message",theme:"outlined"},o=n(4291),i=function(e,t){return a.createElement(o.Z,(0,c.Z)({},e,{ref:t,icon:r}))};var s=a.forwardRef(i)},914:function(e,t,n){var c=n(9752);t.Z=c.Z},9426:function(e,t,n){var c=(0,n(2791).createContext)({});t.Z=c},9752:function(e,t,n){var c=n(4942),a=n(9439),r=n(2791),o=n(1694),i=n.n(o),s=n(1929),l=n(9426),u=n(8554),f=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n};var d=["xs","sm","md","lg","xl","xxl"],m=r.forwardRef((function(e,t){var n,o=r.useContext(s.E_),m=o.getPrefixCls,p=o.direction,g=r.useContext(l.Z),x=g.gutter,y=g.wrap,h=e.prefixCls,v=e.span,b=e.order,Z=e.offset,j=e.push,w=e.pull,C=e.className,O=e.children,E=e.flex,k=e.style,S=f(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),P=m("col",h),I=(0,u.c)(P),M=(0,a.Z)(I,2),N=M[0],A=M[1],U={};d.forEach((function(t){var n,a={},r=e[t];"number"===typeof r?a.span=r:"object"===typeof r&&(a=r||{}),delete S[t],U=Object.assign(Object.assign({},U),(n={},(0,c.Z)(n,"".concat(P,"-").concat(t,"-").concat(a.span),void 0!==a.span),(0,c.Z)(n,"".concat(P,"-").concat(t,"-order-").concat(a.order),a.order||0===a.order),(0,c.Z)(n,"".concat(P,"-").concat(t,"-offset-").concat(a.offset),a.offset||0===a.offset),(0,c.Z)(n,"".concat(P,"-").concat(t,"-push-").concat(a.push),a.push||0===a.push),(0,c.Z)(n,"".concat(P,"-").concat(t,"-pull-").concat(a.pull),a.pull||0===a.pull),(0,c.Z)(n,"".concat(P,"-").concat(t,"-flex-").concat(a.flex),a.flex||"auto"===a.flex),(0,c.Z)(n,"".concat(P,"-rtl"),"rtl"===p),n))}));var W=i()(P,(n={},(0,c.Z)(n,"".concat(P,"-").concat(v),void 0!==v),(0,c.Z)(n,"".concat(P,"-order-").concat(b),b),(0,c.Z)(n,"".concat(P,"-offset-").concat(Z),Z),(0,c.Z)(n,"".concat(P,"-push-").concat(j),j),(0,c.Z)(n,"".concat(P,"-pull-").concat(w),w),n),C,U,A),z={};if(x&&x[0]>0){var L=x[0]/2;z.paddingLeft=L,z.paddingRight=L}return E&&(z.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(E),!1!==y||z.minWidth||(z.minWidth=0)),N(r.createElement("div",Object.assign({},S,{style:Object.assign(Object.assign({},z),k),className:W,ref:t}),O))}));t.Z=m},7545:function(e,t,n){var c=n(4942),a=n(9439),r=n(2791),o=n(1694),i=n.n(o),s=n(635),l=n(1929),u=n(9426),f=n(8554),d=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n};function m(e,t){var n=r.useState("string"===typeof e?e:""),c=(0,a.Z)(n,2),o=c[0],i=c[1];return r.useEffect((function(){!function(){if("string"===typeof e&&i(e),"object"===typeof e)for(var n=0;n<s.c4.length;n++){var c=s.c4[n];if(t[c]){var a=e[c];if(void 0!==a)return void i(a)}}}()}),[JSON.stringify(e),t]),o}var p=r.forwardRef((function(e,t){var n,o=e.prefixCls,p=e.justify,g=e.align,x=e.className,y=e.style,h=e.children,v=e.gutter,b=void 0===v?0:v,Z=e.wrap,j=d(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=r.useContext(l.E_),C=w.getPrefixCls,O=w.direction,E=r.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),k=(0,a.Z)(E,2),S=k[0],P=k[1],I=r.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),M=(0,a.Z)(I,2),N=M[0],A=M[1],U=m(g,N),W=m(p,N),z=r.useRef(b),L=(0,s.ZP)();r.useEffect((function(){var e=L.subscribe((function(e){A(e);var t=z.current||0;(!Array.isArray(t)&&"object"===typeof t||Array.isArray(t)&&("object"===typeof t[0]||"object"===typeof t[1]))&&P(e)}));return function(){return L.unsubscribe(e)}}),[]);var R=C("row",o),D=(0,f.V)(R),F=(0,a.Z)(D,2),G=F[0],H=F[1],T=function(){var e=[void 0,void 0];return(Array.isArray(b)?b:[b,void 0]).forEach((function(t,n){if("object"===typeof t)for(var c=0;c<s.c4.length;c++){var a=s.c4[c];if(S[a]&&void 0!==t[a]){e[n]=t[a];break}}else e[n]=t})),e}(),_=i()(R,(n={},(0,c.Z)(n,"".concat(R,"-no-wrap"),!1===Z),(0,c.Z)(n,"".concat(R,"-").concat(W),W),(0,c.Z)(n,"".concat(R,"-").concat(U),U),(0,c.Z)(n,"".concat(R,"-rtl"),"rtl"===O),n),x,H),B={},V=null!=T[0]&&T[0]>0?T[0]/-2:void 0;V&&(B.marginLeft=V,B.marginRight=V);var X=(0,a.Z)(T,2);B.rowGap=X[1];var J=(0,a.Z)(T,2),K=J[0],$=J[1],q=r.useMemo((function(){return{gutter:[K,$],wrap:Z}}),[K,$,Z]);return G(r.createElement(u.Z.Provider,{value:q},r.createElement("div",Object.assign({},j,{className:_,style:Object.assign(Object.assign({},B),y),ref:t}),h)))}));t.Z=p},8554:function(e,t,n){n.d(t,{V:function(){return l},c:function(){return u}});var c=n(4942),a=n(5564),r=n(9922),o=function(e){var t=e.componentCls;return(0,c.Z)({},t,{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}})},i=function(e){var t=e.componentCls;return(0,c.Z)({},t,{position:"relative",maxWidth:"100%",minHeight:1})},s=function(e,t){return function(e,t){for(var n=e.componentCls,a=e.gridColumns,r={},o=a;o>=0;o--){var i;0===o?(r["".concat(n).concat(t,"-").concat(o)]={display:"none"},r["".concat(n,"-push-").concat(o)]={insetInlineStart:"auto"},r["".concat(n,"-pull-").concat(o)]={insetInlineEnd:"auto"},r["".concat(n).concat(t,"-push-").concat(o)]={insetInlineStart:"auto"},r["".concat(n).concat(t,"-pull-").concat(o)]={insetInlineEnd:"auto"},r["".concat(n).concat(t,"-offset-").concat(o)]={marginInlineStart:0},r["".concat(n).concat(t,"-order-").concat(o)]={order:0}):(r["".concat(n).concat(t,"-").concat(o)]=[(i={},(0,c.Z)(i,"--ant-display","block"),(0,c.Z)(i,"display","block"),i),{display:"var(--ant-display)",flex:"0 0 ".concat(o/a*100,"%"),maxWidth:"".concat(o/a*100,"%")}],r["".concat(n).concat(t,"-push-").concat(o)]={insetInlineStart:"".concat(o/a*100,"%")},r["".concat(n).concat(t,"-pull-").concat(o)]={insetInlineEnd:"".concat(o/a*100,"%")},r["".concat(n).concat(t,"-offset-").concat(o)]={marginInlineStart:"".concat(o/a*100,"%")},r["".concat(n).concat(t,"-order-").concat(o)]={order:o})}return r}(e,t)},l=(0,a.Z)("Grid",(function(e){return[o(e)]})),u=(0,a.Z)("Grid",(function(e){var t=(0,r.TS)(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[i(t),s(t,""),s(t,"-xs"),Object.keys(n).map((function(e){return function(e,t,n){return(0,c.Z)({},"@media (min-width: ".concat(t,"px)"),Object.assign({},s(e,n)))}(t,n[e],e)})).reduce((function(e,t){return Object.assign(Object.assign({},e),t)}),{})]}))},6106:function(e,t,n){var c=n(7545);t.Z=c.Z}}]);
//# sourceMappingURL=917.b655563b.chunk.js.map