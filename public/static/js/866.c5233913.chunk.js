"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[866],{6122:function(e,n,t){t(2791);var s=t(6106),a=t(914),r=t(183),c=t(184);n.Z=function(e){return(0,c.jsxs)(s.Z,{children:[(0,c.jsx)(a.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,c.jsx)(r.Z,{active:!0})},1),(0,c.jsx)(a.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,c.jsx)(r.Z,{active:!0})},2),(0,c.jsx)(a.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,c.jsx)(r.Z,{active:!0})},3),(0,c.jsx)(a.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,c.jsx)(r.Z,{active:!0})},4),(0,c.jsx)(a.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,c.jsx)(r.Z,{active:!0})},4),(0,c.jsx)(a.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,c.jsx)(r.Z,{active:!0})},4),(0,c.jsx)(a.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,c.jsx)(r.Z,{active:!0})},4),(0,c.jsx)(a.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,c.jsx)(r.Z,{active:!0})},4),(0,c.jsx)(a.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,c.jsx)(r.Z,{active:!0})},5)]})}},7775:function(e,n,t){t(2791);var s=t(6106),a=t(914),r=t(8844),c=t(7647),i=t(3655),o=t(184);n.Z=function(e){return(0,o.jsx)(s.Z,{children:e.data.map((function(e){return(0,o.jsx)(a.Z,{xs:{span:5,offset:1},lg:{span:5,offset:1},style:{margin:"20px"},children:(0,o.jsx)(r.Z.Ribbon,{children:(0,o.jsxs)(c.Z,{bordered:!0,children:[(0,o.jsx)(i.Z.Title,{style:{fontSize:"24px"},children:e.courseName}),(0,o.jsxs)(i.Z.Title,{style:{fontSize:"14px",textAlign:"right"},children:["Type: ",e.type," ",(0,o.jsx)("br",{}),"Total Semesters: ",2*e.duration," ",(0,o.jsx)("br",{}),"School: ",e.school.schoolName]})]})})},e._id)}))})}},4264:function(e,n,t){var s=t(3655),a=(t(2791),t(184));n.Z=function(e){return(0,a.jsx)(s.Z.Title,{style:{fontSize:"24px"},children:e.title})}},5529:function(e,n,t){var s=t(9439),a=t(2791),r=t(8134),c=t(5794),i=t(9529),o=t(2827),l=t(5458),f=t(3729),d=t(3451),u=t(9286),m=t(7962),h=t(4006),x=t(2542),g=t(586),j=t(1932),Z=t(573),p=t(3388),y=t(6859),v=t(3272),b=t(2763),k=t(7689),S=t(1087),C=t(184),E=g.Z.Header,w=g.Z.Content,z=g.Z.Footer,U=g.Z.Sider;n.Z=function(e){var n=(0,k.TH)();(0,a.useEffect)((function(){return JSON.parse(localStorage.getItem("user")).changePassword?H("/"):"management"!==(0,b.bW)().user.role?window.location.href="/":void 0}),[b.bW]);var t=(0,a.useState)(!0),T=(0,s.Z)(t,2),A=T[0],P=T[1],H=(0,k.s0)(),N=[{key:"/management/dashboard",icon:a.createElement(r.Z),label:(0,C.jsx)(S.rU,{to:"/management/dashboard",children:"Dashboard"})},{key:"/management/timetable",icon:a.createElement(c.Z),label:(0,C.jsx)(S.rU,{to:"/management/timetable",children:"Timetable"})},{key:"/management/faculty",icon:a.createElement(i.Z),label:(0,C.jsx)(S.rU,{to:"/management/faculty",children:"Faculty"})},{key:"/management/course",icon:a.createElement(o.Z),label:(0,C.jsx)(S.rU,{to:"/management/course",children:"Courses"})},{key:"/management/profile",icon:a.createElement(l.Z),label:(0,C.jsx)(S.rU,{to:"/management/profile",children:"Profile"})},{key:"/management/announcement/view",icon:a.createElement(f.Z),label:(0,C.jsx)(S.rU,{to:"/management/announcement/view",children:"Announcements"})},{key:"message",icon:a.createElement(d.Z),label:(0,C.jsx)(S.rU,{to:"/management/message/view",children:"Messages"})},{key:"/management/post/new",icon:a.createElement(u.Z),label:(0,C.jsx)(S.rU,{to:"/management/post/new",children:"Post"})},{key:"/management/policy/view",icon:a.createElement(f.Z),label:(0,C.jsx)(S.rU,{to:"/management/policy/view",children:"Policy"})},{key:"Logout",icon:a.createElement(m.Z),label:(0,C.jsx)(S.rU,{onClick:function(){(0,b.uf)().then((function(e){if(e.redirect)return H("/?logout=true")}))},children:"Logout"})}];return(0,C.jsx)(j.ZP,{theme:{token:{colorPrimary:"#006494",borderRadius:2,colorBgContainer:"#E8F1F2"}},children:(0,C.jsxs)(g.Z,{children:[(0,C.jsxs)(U,{breakpoint:"lg",theme:A?"dark":"light",collapsedWidth:"0",style:{height:"100vh",background:"#13293D"},children:[(0,C.jsx)("div",{className:"demo-logo-vertical",children:(0,C.jsx)(Z.Z,{src:"/upesfull.png"})}),(0,C.jsx)(p.Z,{theme:A?"dark":"light",mode:"inline",style:{background:"#13293D",fontSize:"16px"},defaultSelectedKeys:n.pathname,defaultOpenKeys:[],items:N})]}),(0,C.jsxs)(g.Z,{children:[(0,C.jsx)(E,{style:{padding:0},children:(0,C.jsx)(y.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,C.jsx)(i.Z,{})})}),(0,C.jsx)(w,{style:{margin:"24px 16px 0"},children:(0,C.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,C.jsx)(z,{style:{textAlign:"center"},children:"Made By Students During Nighouts"})]}),(0,C.jsx)(v.Z,{icon:A?(0,C.jsx)(h.Z,{}):(0,C.jsx)(x.Z,{}),onClick:function(){P(!A)}})]})})}},5730:function(e,n,t){t.d(n,{H:function(){return c}});var s=t(9455),a=t(2763),r=s.N7,c=function(){return fetch("".concat(r,"/courses"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,a.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))}},4866:function(e,n,t){t.r(n);var s=t(9439),a=t(2791),r=t(5529),c=t(4264),i=t(5730),o=t(7775),l=t(6122),f=t(184);n.default=function(){var e=(0,a.useState)([]),n=(0,s.Z)(e,2),t=n[0],d=n[1],u=(0,a.useState)(!0),m=(0,s.Z)(u,2),h=m[0],x=m[1];return(0,a.useEffect)((function(){document.title="Courses | SoCIS",(0,i.H)().then((function(e){d(e),x(!1)})).catch((function(e){console.log(e)}))}),[d]),(0,f.jsxs)(r.Z,{children:[(0,f.jsx)(c.Z,{title:"Courses"}),h?(0,f.jsx)(l.Z,{}):(0,f.jsx)(o.Z,{data:t}),(0,f.jsx)("br",{})]})}},3451:function(e,n,t){t.d(n,{Z:function(){return o}});var s=t(7462),a=t(2791),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"}}]},name:"message",theme:"outlined"},c=t(4291),i=function(e,n){return a.createElement(c.Z,(0,s.Z)({},e,{ref:n,icon:r}))};var o=a.forwardRef(i)}}]);
//# sourceMappingURL=866.c5233913.chunk.js.map