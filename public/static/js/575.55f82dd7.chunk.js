"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[575],{4264:function(e,n,t){var r=t(3655),a=(t(2791),t(184));n.Z=function(e){return(0,a.jsx)(r.Z.Title,{style:{fontSize:"24px"},children:e.title})}},7237:function(e,n,t){t.d(n,{Z:function(){return z}});var r=t(9439),a=t(2791),i=t(8134),l=t(5794),s=t(9529),o=t(2827),c=t(5458),d=t(3729),m=t(7462),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"}}]},name:"message",theme:"outlined"},h=t(4291),g=function(e,n){return a.createElement(h.Z,(0,m.Z)({},e,{ref:n,icon:u}))};var f=a.forwardRef(g),x=t(9286),j=t(7962),p=t(586),b=t(1932),Z=t(573),y=t(3388),v=t(1583),E=t(6859),k=t(2763),w=t(7689),C=t(1087),P=t(184),U=p.Z.Header,S=p.Z.Content,I=p.Z.Footer,N=p.Z.Sider,z=function(e){var n=(0,w.TH)();(0,a.useEffect)((function(){if("management"!==(0,k.bW)().user.role)return window.location.href="/"}),[k.bW]);var t=(0,a.useState)(!0),m=(0,r.Z)(t,2),u=m[0],h=(m[1],(0,w.s0)()),g=function(){(0,k.uf)().then((function(e){if(e.redirect)return h("/?logout=true")}))},z=[{key:"/management/dashboard",icon:a.createElement(i.Z),label:(0,P.jsx)(C.rU,{to:"/management/dashboard",children:"Dashboard"})},{key:"/management/timetable",icon:a.createElement(l.Z),label:(0,P.jsx)(C.rU,{to:"/management/timetable",children:"Timetable"})},{key:"/management/faculty",icon:a.createElement(s.Z),label:(0,P.jsx)(C.rU,{to:"/management/faculty",children:"Faculty"})},{key:"/management/course",icon:a.createElement(o.Z),label:(0,P.jsx)(C.rU,{to:"/management/course",children:"Courses"})},{key:"/management/profile",icon:a.createElement(c.Z),label:(0,P.jsx)(C.rU,{to:"/management/profile",children:"Profile"})},{key:"/management/announcement/view",icon:a.createElement(d.Z),label:(0,P.jsx)(C.rU,{to:"/management/announcement/view",children:"Announcements"})},{key:"message",icon:a.createElement(f),label:(0,P.jsx)(C.rU,{to:"/management/message/view",children:"Messages"})},{key:"/management/post/new",icon:a.createElement(x.Z),label:(0,P.jsx)(C.rU,{to:"/management/post/new",children:"Post"})},{key:"/management/policy/view",icon:a.createElement(d.Z),label:(0,P.jsx)(C.rU,{to:"/management/policy/view",children:"Policy"})},{key:"/management/evaluate",icon:a.createElement(d.Z),label:(0,P.jsx)(C.rU,{to:"/management/evaluate",children:"Evaluate"})},{key:"Logout",icon:a.createElement(j.Z),label:(0,P.jsx)(C.rU,{onClick:g,children:"Logout"})}],A=[{key:"2",label:(0,P.jsx)(C.rU,{to:"/management/profile",children:"Profile"})},{key:"1",label:(0,P.jsx)("a",{href:"#",onClick:function(){return g()},children:"Logout"})}];return(0,P.jsx)(b.ZP,{theme:{token:{colorPrimary:"#006494",borderRadius:2,colorBgContainer:"#E8F1F2"}},children:(0,P.jsxs)(p.Z,{children:[(0,P.jsxs)(N,{breakpoint:"lg",theme:u?"dark":"light",collapsedWidth:"0",style:{height:"100vh",background:"#13293D"},children:[(0,P.jsx)("div",{className:"demo-logo-vertical",children:(0,P.jsx)(Z.Z,{src:"/upesfull.png"})}),(0,P.jsx)(y.Z,{theme:u?"dark":"light",mode:"inline",style:{background:"#13293D",fontSize:"16px"},defaultSelectedKeys:n.pathname,defaultOpenKeys:[],items:z})]}),(0,P.jsxs)(p.Z,{children:[(0,P.jsx)(U,{style:{padding:0},children:(0,P.jsx)(v.Z,{menu:{items:A},placement:"bottom",children:(0,P.jsx)(E.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,P.jsx)(s.Z,{})})})}),(0,P.jsx)(S,{style:{margin:"24px 16px 0"},children:(0,P.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,P.jsx)(I,{style:{textAlign:"center"},children:"Debugged By Students"})]})]})})}},684:function(e,n,t){var r=t(9439),a=t(586),i=t(6106),l=t(914),s=t(7647),o=t(5140),c=t(9389),d=t(2641),m=t(6218),u=t(2791),h=t(1087),g=t(2763),f=t(184);n.Z=function(e){var n=(0,u.useState)(null),t=(0,r.Z)(n,2),x=t[0],j=t[1],p=(0,u.useState)(null),b=(0,r.Z)(p,2),Z=b[0],y=b[1],v=(0,u.useState)(!1),E=(0,r.Z)(v,2),k=E[0],w=E[1];(0,u.useEffect)((function(){(0,g.an)({userId:e.data._id}).then((function(e){if(e.error)return j(!1);j(e.profilePic)}))}),[j]);var C=new FileReader;return(0,f.jsx)(a.Z.Content,{children:(0,f.jsxs)(i.Z,{children:[(0,f.jsx)(l.Z,{flex:.2,children:(0,f.jsx)(s.Z,{style:{width:"240px",border:"none"},hoverable:!0,cover:(0,f.jsx)("img",{src:"".concat(x||"/profile.png")})})}),(0,f.jsx)(l.Z,{flex:3,children:(0,f.jsxs)(s.Z,{hoverable:!0,children:[(0,f.jsx)("b",{children:"Name:"})," ",e.data.firstName," ",e.data.lastName,(0,f.jsx)("br",{}),(0,f.jsx)("b",{children:"SAPID:"})," ",e.data.sapId,(0,f.jsx)("br",{}),(0,f.jsx)("b",{children:"Email:"})," ",(0,f.jsx)("a",{href:"mailto:".concat(e.data.email),children:e.data.email}),(0,f.jsx)("br",{}),(0,f.jsx)("b",{children:"Designations:"})," ",e.data.designations," ",(0,f.jsx)("br",{}),e.data.reportingManager?(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Reporting Manager:"})," ",(0,f.jsx)("br",{}),(0,f.jsx)("b",{children:"Name:"})," ",e.data.reportingManager.firstName," ",e.data.reportingManager.lastName," ",(0,f.jsx)("br",{}),(0,f.jsx)("b",{children:"Email:"})," ",(0,f.jsxs)(h.rU,{to:"mailto:".concat(e.data.reportingManager.email),children:[" ",e.data.reportingManager.email]}),(0,f.jsx)("br",{})]}):"",e.data.sapId===(0,g.bW)().user.sapId?(0,f.jsxs)(o.Z,{name:"picture",onFinish:function(){w(!0),(0,g.WV)({profilePic:Z}).then((function(e){e.error&&alert("Error Uploading"),w(!1),j(Z)})).catch((function(e){w(!1),j(!1)}))},autoComplete:"off",style:{width:"240px"},children:[(0,f.jsx)(o.Z.Item,{style:{padding:0,margin:0},label:"Profile Picture",name:"profilePic",rules:[{required:!0,message:"Field is required!"}],children:(0,f.jsx)(c.Z,{onChange:function(e){var n=e.target.files[0];C.onloadend=function(){y(C.result)},C.readAsDataURL(n)},type:"file"})}),k?"Uploading...":"",(0,f.jsx)(d.ZP,{type:"primary",htmlType:"submit",children:k?"Uploading":"Upload"}),(0,f.jsx)("br",{})]}):"",(0,f.jsx)("br",{}),(0,f.jsx)(d.ZP,{style:{visibility:e.data.sapId!==(0,g.bW)().user.sapId?"hidden":"visible"},type:"primary",onClick:function(){(0,g.vE)().then((function(e){return e.error?alert("Can't Change The Flag!"):(console.log(e),e.success?(localStorage.setItem("user",JSON.stringify({changePassword:!0})),window.location.href="/new-password"):void alert("Encountered An Error"))})).catch((function(e){console.log(e)}))},children:"Change Password"}),(0,f.jsx)(m.Z,{value:JSON.stringify(e.data),style:{float:"right"}})]})})]})})}},6575:function(e,n,t){t.r(n);var r=t(9439),a=t(2791),i=t(7237),l=t(4556),s=t(183),o=t(684),c=t(2763),d=t(7689),m=t(4264),u=t(184);n.default=function(){var e=(0,a.useState)(null),n=(0,r.Z)(e,2),t=n[0],h=n[1],g=(0,a.useState)(!0),f=(0,r.Z)(g,2),x=f[0],j=f[1],p=(0,a.useState)(!1),b=(0,r.Z)(p,2),Z=(b[0],b[1]),y=(0,d.UO)().userId,v=l.Z.useNotification(),E=(0,r.Z)(v,2),k=E[0],w=E[1],C=function(e){var n=e.type,t=e.message;k[n]({message:t})};return(0,a.useEffect)((function(){document.title="Profile | SoCIS",y?(0,c.GA)(y).then((function(e){if(console.log(e),e.error)return C({type:"error",message:"Error Occured!"});h(e),j(!1)})).catch((function(e){return C({type:"error",message:"Error Occured!"})})):(0,c.PR)({userId:!1}).then((function(e){if(e.error)return C({type:"error",message:"Error Occured!"});h(e),j(!1)})).catch((function(e){return C({type:"error",message:"Error Occured!"})}))}),[h,j,Z]),(0,u.jsxs)(i.Z,{children:[w,(0,u.jsx)(m.Z,{title:"Profile"}),x?(0,u.jsx)(s.Z,{active:!0,avatar:!0}):(0,u.jsx)(o.Z,{data:t})]})}}}]);
//# sourceMappingURL=575.55f82dd7.chunk.js.map