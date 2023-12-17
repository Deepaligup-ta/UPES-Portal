"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[738],{9712:function(e,n,t){t(2791);var a=t(6106),c=t(914),r=t(8844),o=t(7647),i=t(3655),l=t(184);n.Z=function(e){return(0,l.jsx)(a.Z,{children:(0,l.jsx)(c.Z,{flex:3,style:{height:"70vh"},children:(0,l.jsx)(r.Z.Ribbon,{text:"By: ".concat(e.data.author.firstName," | ")+String(e.data.createdAt.split("T")[0]),children:(0,l.jsxs)(o.Z,{style:{height:"70vh"},hoverable:!0,children:[(0,l.jsx)(i.Z.Title,{style:{fontSize:"30px",textAlign:"left"},children:e.data.title}),(0,l.jsx)("hr",{}),(0,l.jsxs)(i.Z.Title,{style:{fontSize:"18px"},children:["Description: ",e.data.excerpt]}),(0,l.jsx)(i.Z.Text,{style:{fontSize:"16px"},children:e.data.text})]})})})})}},5529:function(e,n,t){var a=t(9439),c=t(2791),r=t(8134),o=t(5794),i=t(9529),l=t(2827),s=t(5458),u=t(3729),d=t(3451),h=t(9286),f=t(7962),m=t(4006),p=t(2542),g=t(586),j=t(1932),x=t(573),y=t(3388),Z=t(6859),b=t(3272),v=t(2763),k=t(7689),w=t(1087),E=t(184),S=g.Z.Header,C=g.Z.Content,A=g.Z.Footer,T=g.Z.Sider;n.Z=function(e){var n=(0,k.TH)();(0,c.useEffect)((function(){return JSON.parse(localStorage.getItem("user")).changePassword?B("/"):"management"!==(0,v.bW)().user.role?window.location.href="/":void 0}),[v.bW]);var t=(0,c.useState)(!0),z=(0,a.Z)(t,2),P=z[0],U=z[1],B=(0,k.s0)(),L=[{key:"/management/dashboard",icon:c.createElement(r.Z),label:(0,E.jsx)(w.rU,{to:"/management/dashboard",children:"Dashboard"})},{key:"/management/timetable",icon:c.createElement(o.Z),label:(0,E.jsx)(w.rU,{to:"/management/timetable",children:"Timetable"})},{key:"/management/faculty",icon:c.createElement(i.Z),label:(0,E.jsx)(w.rU,{to:"/management/faculty",children:"Faculty"})},{key:"/management/course",icon:c.createElement(l.Z),label:(0,E.jsx)(w.rU,{to:"/management/course",children:"Courses"})},{key:"/management/profile",icon:c.createElement(s.Z),label:(0,E.jsx)(w.rU,{to:"/management/profile",children:"Profile"})},{key:"/management/announcement/view",icon:c.createElement(u.Z),label:(0,E.jsx)(w.rU,{to:"/management/announcement/view",children:"Announcements"})},{key:"message",icon:c.createElement(d.Z),label:(0,E.jsx)(w.rU,{to:"/management/message/view",children:"Messages"})},{key:"/management/post/new",icon:c.createElement(h.Z),label:(0,E.jsx)(w.rU,{to:"/management/post/new",children:"Post"})},{key:"/management/policy/view",icon:c.createElement(u.Z),label:(0,E.jsx)(w.rU,{to:"/management/policy/view",children:"Policy"})},{key:"Logout",icon:c.createElement(f.Z),label:(0,E.jsx)(w.rU,{onClick:function(){(0,v.uf)().then((function(e){if(e.redirect)return B("/?logout=true")}))},children:"Logout"})}];return(0,E.jsx)(j.ZP,{theme:{token:{colorPrimary:"#006494",borderRadius:2,colorBgContainer:"#E8F1F2"}},children:(0,E.jsxs)(g.Z,{children:[(0,E.jsxs)(T,{breakpoint:"lg",theme:P?"dark":"light",collapsedWidth:"0",style:{height:"100vh",background:"#13293D"},children:[(0,E.jsx)("div",{className:"demo-logo-vertical",children:(0,E.jsx)(x.Z,{src:"/upesfull.png"})}),(0,E.jsx)(y.Z,{theme:P?"dark":"light",mode:"inline",style:{background:"#13293D",fontSize:"16px"},defaultSelectedKeys:n.pathname,defaultOpenKeys:[],items:L})]}),(0,E.jsxs)(g.Z,{children:[(0,E.jsx)(S,{style:{padding:0},children:(0,E.jsx)(Z.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,E.jsx)(i.Z,{})})}),(0,E.jsx)(C,{style:{margin:"24px 16px 0"},children:(0,E.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,E.jsx)(A,{style:{textAlign:"center"},children:"Made By Students During Nighouts"})]}),(0,E.jsx)(b.Z,{icon:P?(0,E.jsx)(m.Z,{}):(0,E.jsx)(p.Z,{}),onClick:function(){U(!P)}})]})})}},243:function(e,n,t){t.d(n,{Jq:function(){return u},dq:function(){return i},fR:function(){return l},fb:function(){return o},xl:function(){return s}});var a=t(9455),c=t(2763),r=a.v_,o=function(e){return fetch("".concat(r,"/new"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},i=function(e){return fetch("".concat(r,"/update"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"PUT",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},l=function(e){return fetch("".concat(r,"/delete"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"DELETE",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},s=function(e){return fetch("".concat(r,"/post/").concat(e.postId),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},u=function(e,n){return fetch("".concat(r,"/all?page=").concat(e,"&type=").concat(n),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))}},8738:function(e,n,t){t.r(n);var a=t(9439),c=t(2791),r=t(183),o=t(7689),i=t(243),l=t(9712),s=t(5529),u=t(184);n.default=function(){var e=(0,c.useState)([]),n=(0,a.Z)(e,2),t=n[0],d=n[1],h=(0,c.useState)(!0),f=(0,a.Z)(h,2),m=f[0],p=f[1],g=(0,o.UO)().id;return(0,c.useEffect)((function(){document.title="View Message | SoCIS",(0,i.xl)({postId:g}).then((function(e){if(e.error)return window.location.href="/faculty/post/view?error=true";d(e),p(!1)})).catch((function(e){return window.location.href="/faculty/post/view?error=true"}))}),[d]),(0,u.jsx)(s.Z,{children:m?(0,u.jsx)(r.Z,{active:!0}):(0,u.jsx)(l.Z,{data:t})})}},3451:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(7462),c=t(2791),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"}}]},name:"message",theme:"outlined"},o=t(4291),i=function(e,n){return c.createElement(o.Z,(0,a.Z)({},e,{ref:n,icon:r}))};var l=c.forwardRef(i)}}]);
//# sourceMappingURL=738.d45df133.chunk.js.map