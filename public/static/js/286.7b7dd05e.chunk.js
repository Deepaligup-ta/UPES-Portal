"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[286],{6122:function(e,t,n){n(2791);var c=n(6106),s=n(914),o=n(183),r=n(184);t.Z=function(e){return(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(s.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(o.Z,{active:!0})},1),(0,r.jsx)(s.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(o.Z,{active:!0})},2),(0,r.jsx)(s.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(o.Z,{active:!0})},3),(0,r.jsx)(s.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(o.Z,{active:!0})},4),(0,r.jsx)(s.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(o.Z,{active:!0})},5),(0,r.jsx)(s.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(o.Z,{active:!0})},6),(0,r.jsx)(s.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(o.Z,{active:!0})},7),(0,r.jsx)(s.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(o.Z,{active:!0})},8),(0,r.jsx)(s.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(o.Z,{active:!0})},9)]})}},6384:function(e,t,n){n(2791);var c=n(6106),s=n(914),o=n(8844),r=n(6473),a=n(2641),i=n(3655),l=n(1087),u=n(2763),f=n(184);t.Z=function(e){return(0,f.jsx)(c.Z,{children:e.data.map((function(e){return(0,f.jsx)(s.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},style:{margin:"20px"},children:(0,f.jsx)(l.rU,{to:"".concat(e._id),children:(0,f.jsx)(o.Z.Ribbon,{text:String(e.createdAt.split("T")[0]),children:(0,f.jsxs)(r.Z,{bordered:!0,actions:[(0,f.jsx)(l.rU,{style:{visibility:(0,u.bW)().user.sapId===e.author.sapId?"visible":"hidden"},to:"".concat("management"===(0,u.bW)().user.role?"/management":"/faculty","/post/new?id=").concat(e._id),children:(0,f.jsx)(a.ZP,{children:"Update"})})],children:[(0,f.jsx)(i.Z.Title,{style:{fontSize:"18px"},children:e.title}),(0,f.jsx)(i.Z.Text,{children:e.excerpt}),(0,f.jsxs)(i.Z.Title,{style:{fontSize:"12px",textAlign:"right"},children:[e.author.firstName," ",(0,f.jsx)("br",{}),"(",e.author.designations,")"]})]})})})},e._id)}))})}},4264:function(e,t,n){var c=n(3655),s=(n(2791),n(184));t.Z=function(e){return(0,s.jsx)(c.Z.Title,{style:{fontSize:"24px"},children:e.title})}},889:function(e,t,n){var c=n(9439),s=n(2791),o=n(8134),r=n(5794),a=n(3729),i=n(2827),l=n(5458),u=n(9286),f=n(7962),d=n(9529),h=n(586),p=n(1932),x=n(573),j=n(3388),y=n(1583),g=n(6859),Z=n(2763),m=n(7689),b=n(1087),v=n(382),k=n(184),E=h.Z.Header,S=h.Z.Content,T=h.Z.Footer,U=h.Z.Sider;t.Z=function(e){var t=(0,m.TH)();(0,s.useEffect)((function(){if("faculty"!==(0,Z.bW)().user.role)return window.location.href="/"}),[Z.bW]);var n=(0,s.useState)(!0),w=(0,c.Z)(n,2),P=w[0],A=(w[1],(0,m.s0)()),C=(0,v.Fp)().instance,z=function(){(0,Z.uf)().then((function(e){e.redirect&&C.logoutRedirect().then((function(e){if(e)return A("/?logout=true");alert("Error Occurred!")})).catch((function(e){alert("error occured")}))}))},M=[{key:"2",label:(0,k.jsx)(b.rU,{to:"/faculty/profile",children:"Profile"})},{key:"1",label:(0,k.jsx)("a",{href:"#",onClick:function(){return z()},children:"Logout"})}],L=[{key:"/faculty/dashboard",icon:s.createElement(o.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/dashboard",children:"Dashboard"})},{key:"/faculty/timetable",icon:s.createElement(r.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/timetable",children:"Timetable"})},{key:"/faculty/announcement/view",icon:s.createElement(a.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/announcement/view",children:"Announcement"})},{key:"/faculty/course",icon:s.createElement(i.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/course",children:"Courses"})},{key:"/faculty/profile",icon:s.createElement(l.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/profile",children:"Profile"})},{key:"/faculty/post/new",icon:s.createElement(u.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/post/new",children:"Post"})},{key:"/faculty/message/view",icon:s.createElement(a.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/message/view",children:"Message"})},{key:"/faculty/policy/view",icon:s.createElement(a.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/policy/view",children:"Policy"})},{key:"/faculty/outlook/events",icon:s.createElement(a.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/outlook/events",children:"Meetings/Events"})},{key:"/faculty/evaluate",icon:s.createElement(a.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/evaluate",children:"Evaluate"})},{key:"Logout",icon:s.createElement(f.Z),label:(0,k.jsx)(b.rU,{onClick:z,children:"Logout"})}];return(0,k.jsx)(p.ZP,{theme:{token:{colorPrimary:"#006494",borderRadius:2,colorBgContainer:"#E8F1F2"}},children:(0,k.jsxs)(h.Z,{children:[(0,k.jsxs)(U,{breakpoint:"lg",theme:P?"dark":"light",collapsedWidth:"0",style:{height:"100vh",background:"#13293D"},children:[(0,k.jsx)("div",{className:"demo-logo-vertical",children:(0,k.jsx)(x.Z,{src:"/upesfull.png"})}),(0,k.jsx)(j.Z,{theme:P?"dark":"light",mode:"inline",style:{background:"#13293D",fontSize:"16px"},defaultSelectedKeys:t.pathname,defaultOpenKeys:[],items:L})]}),(0,k.jsxs)(h.Z,{children:[(0,k.jsx)(E,{style:{padding:0},children:(0,k.jsx)(y.Z,{menu:{items:M},placement:"bottom",children:(0,k.jsx)(g.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,k.jsx)(d.Z,{})})})}),(0,k.jsx)(S,{style:{margin:"24px 16px 0"},children:(0,k.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,k.jsx)(T,{style:{textAlign:"center"},children:"Debugged By Students"})]})]})})}},243:function(e,t,n){n.d(t,{Jq:function(){return u},dq:function(){return a},fR:function(){return i},fb:function(){return r},xl:function(){return l}});var c=n(9455),s=n(2763),o=c.v_,r=function(e){return fetch("".concat(o,"/new"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,s.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},a=function(e){return fetch("".concat(o,"/update"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,s.LP)()[2])},credentials:"include",method:"PUT",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},i=function(e){return fetch("".concat(o,"/delete"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,s.LP)()[2])},credentials:"include",method:"DELETE",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},l=function(e){return fetch("".concat(o,"/post/").concat(e.postId),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,s.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},u=function(e,t){return fetch("".concat(o,"/all?page=").concat(e,"&type=").concat(t),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,s.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))}},3286:function(e,t,n){n.r(t);var c=n(9439),s=n(2791),o=n(4264),r=n(889),a=n(4556),i=n(1773),l=n(4099),u=n(6384),f=n(7689),d=n(6122),h=n(243),p=n(184);t.default=function(){var e=(0,s.useState)([]),t=(0,c.Z)(e,2),n=t[0],x=t[1],j=(0,s.useState)(!0),y=(0,c.Z)(j,2),g=y[0],Z=y[1],m=(0,s.useState)({}),b=(0,c.Z)(m,2),v=b[0],k=b[1],E=a.Z.useNotification(),S=(0,c.Z)(E,2),T=S[0],U=S[1],w=function(e){var t=e.type,n=e.message;T[t]({message:n})},P=function(){var e=(0,f.TH)().search;return s.useMemo((function(){return new URLSearchParams(e)}),[e])}();(0,s.useEffect)((function(){document.title="Messages | SoCIS";var e=P.get("success");"new"===e?w({type:"success",message:"Added New Message!"}):"edit"===e?w({type:"success",message:"Updated Message!"}):"delete"===e&&w({type:"success",message:"Deleted Message!"}),(0,h.Jq)(1,"Message").then((function(e){return e.error?w({type:"error",message:"Error Occurred!"}):0===e.docs.length?w({type:"info",message:"No Messages Found!"}):(k(e),x(e.docs),void Z(!1))})).catch((function(e){console.log(e)}))}),[x,k,P]);return(0,p.jsxs)(r.Z,{children:[U,(0,p.jsx)(o.Z,{title:"Messages"}),(0,p.jsx)(i.Z,{}),g?(0,p.jsx)(d.Z,{}):(0,p.jsx)(u.Z,{data:n}),(0,p.jsx)("br",{}),(0,p.jsx)(l.Z,{current:v.page,pageSize:1,onChange:function(e){return function(e){Z(!0),(0,h.Jq)(e,"Message").then((function(e){k(e),x(e.docs),Z(!1)})).catch((function(e){console.log(e)}))}(e)},total:v.totalPages,style:{alignSelf:"center"}})]})}}}]);
//# sourceMappingURL=286.7b7dd05e.chunk.js.map