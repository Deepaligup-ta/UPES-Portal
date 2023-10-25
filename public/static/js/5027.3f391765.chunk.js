"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[5027],{4264:function(e,n,t){var r=t(3655),i=(t(2791),t(184));n.Z=function(e){return(0,i.jsx)(r.Z.Title,{style:{fontSize:"24px"},children:e.title})}},5529:function(e,n,t){var r=t(9439),i=t(2791),o=t(8134),c=t(5794),a=t(9529),l=t(2827),s=t(5458),u=t(9150),d=t(9286),m=t(3729),g=t(3451),p=t(8961),h=t(3876),f=t(7962),y=t(4006),j=t(2542),Z=t(586),x=t(3296),b=t(2145),v=t(3388),k=t(6859),w=t(1894),E=t(2763),S=t(7689),O=t(1087),P=t(184),C=Z.Z.Header,T=Z.Z.Content,M=Z.Z.Footer,A=Z.Z.Sider;n.Z=function(e){var n=(0,S.TH)();(0,i.useEffect)((function(){return JSON.parse(localStorage.getItem("user")).changePassword?N("/"):"management"!==(0,E.bW)().user.role?window.location.href="/":void 0}),[E.bW]);var t=(0,i.useState)(!0),U=(0,r.Z)(t,2),z=U[0],F=U[1],N=(0,S.s0)(),B=x.Z.useToken().token.colorBgContainer,L=[{key:"/management/dashboard",icon:i.createElement(o.Z),label:(0,P.jsx)(O.rU,{to:"/management/dashboard",children:"Dashboard"})},{key:"/management/timetable",icon:i.createElement(c.Z),label:(0,P.jsx)(O.rU,{to:"/management/timetable",children:"Timetable"})},{key:"/management/faculty",icon:i.createElement(a.Z),label:(0,P.jsx)(O.rU,{to:"/management/faculty",children:"Faculty"})},{key:"/management/course",icon:i.createElement(l.Z),label:(0,P.jsx)(O.rU,{to:"/management/course",children:"Courses"})},{key:"/management/profile",icon:i.createElement(s.Z),label:(0,P.jsx)(O.rU,{to:"/management/profile",children:"Profile"})},{key:"announcement",icon:i.createElement(u.Z),label:"Announcements",children:[{key:"/management/announcement/new",icon:i.createElement(d.Z),label:(0,P.jsx)(O.rU,{to:"/management/announcement/new",children:"New"})},{key:"/management/announcement/view",icon:i.createElement(m.Z),label:(0,P.jsx)(O.rU,{to:"/management/announcement/view",children:"View"})}]},{key:"message",icon:i.createElement(g.Z),label:"Message",children:[{key:"/management/message/new",icon:i.createElement(d.Z),label:(0,P.jsx)(O.rU,{to:"/management/message/new",children:"New"})},{key:"/management/message/view",icon:i.createElement(m.Z),label:(0,P.jsx)(O.rU,{to:"/management/message/view",children:"View"})}]},{key:"post",icon:i.createElement(p.Z),label:"Post",children:[{key:"/management/post/new",icon:i.createElement(d.Z),label:(0,P.jsx)(O.rU,{to:"/management/post/new",children:"New"})},{key:"/management/post/view",icon:i.createElement(m.Z),label:(0,P.jsx)(O.rU,{to:"/management/post/view",children:"View"})}]},{key:"policy",icon:i.createElement(h.Z),label:"Policy",children:[{key:"/management/policy/new",icon:i.createElement(d.Z),label:(0,P.jsx)(O.rU,{to:"/management/policy/new",children:"New"})},{key:"/management/policy/view",icon:i.createElement(m.Z),label:(0,P.jsx)(O.rU,{to:"/management/policy/view",children:"View"})}]},{key:"Logout",icon:i.createElement(f.Z),label:(0,P.jsx)(O.rU,{onClick:function(){(0,E.uf)().then((function(e){if(e.redirect)return N("/?logout=true")}))},children:"Logout"})}];return(0,P.jsxs)(Z.Z,{children:[(0,P.jsxs)(A,{breakpoint:"lg",theme:z?"dark":"light",collapsedWidth:"0",style:{height:"100vh"},children:[(0,P.jsx)("div",{className:"demo-logo-vertical",children:(0,P.jsx)(b.Z,{src:"/upesfull.png"})}),(0,P.jsx)(v.Z,{theme:z?"dark":"light",mode:"inline",defaultSelectedKeys:n.pathname,defaultOpenKeys:[],items:L})]}),(0,P.jsxs)(Z.Z,{children:[(0,P.jsx)(C,{style:{padding:0,background:B},children:(0,P.jsx)(k.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,P.jsx)(a.Z,{})})}),(0,P.jsx)(T,{style:{margin:"24px 16px 0",background:B},children:(0,P.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,P.jsx)(M,{style:{textAlign:"center"},children:"Made By Students During Nighouts"})]}),(0,P.jsx)(w.Z,{icon:z?(0,P.jsx)(y.Z,{}):(0,P.jsx)(j.Z,{}),onClick:function(){F(!z)}})]})}},7953:function(e,n,t){t.d(n,{Ko:function(){return u},S8:function(){return l},SP:function(){return s},e5:function(){return c},rm:function(){return a}});var r=t(9455),i=t(2763),o=r.l4,c=function(e){return fetch("".concat(o,"/new"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},a=function(e){return fetch("".concat(o,"/update"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.LP)()[2])},credentials:"include",method:"PUT",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},l=function(e){return fetch("".concat(o,"/delete"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.LP)()[2])},credentials:"include",method:"DELETE",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},s=function(e){return fetch("".concat(o,"/policy/").concat(e.policyId),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},u=function(){return fetch("".concat(o,"/all"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))}},5027:function(e,n,t){t.r(n);var r=t(9439),i=t(2791),o=t(5529),c=t(5476),a=t(183),l=t(5140),s=t(9389),u=t(462),d=t(4264),m=t(7953),g=t(7689),p=t(184);n.default=function(){var e=(0,i.useState)(!1),n=(0,r.Z)(e,2),t=n[0],h=n[1],f=(0,i.useState)(null),y=(0,r.Z)(f,2),j=y[0],Z=y[1],x=(0,i.useState)(null),b=(0,r.Z)(x,2),v=b[0],k=b[1],w=(0,g.s0)(),E=new FileReader,S=function(){var e=(0,g.TH)().search;return i.useMemo((function(){return new URLSearchParams(e)}),[e])}().get("id"),O=c.Z.useNotification(),P=(0,r.Z)(O,2),C=P[0],T=P[1],M=function(e){var n=e.type,t=e.message,r=e.description;C[n]({message:t,description:r})};(0,i.useEffect)((function(){document.title="Add/Edit Policy | SoCIS",S&&(h(!0),(0,m.SP)({policyId:S}).then((function(e){if(e.error)return h(!1),M({type:"error",message:"Error Occured",description:e.errorMessage?e.errorMessage:""});Z(e),h(!1)})).catch((function(e){return h(!1),M({type:"error",message:"Error Occured",description:j.errorMessage?j.errorMessage:""})})))}),[Z,S]);return(0,p.jsxs)(o.Z,{children:[T,(0,p.jsx)(d.Z,{title:S?"Update Policy":"New Policy"}),t?(0,p.jsx)(a.Z,{active:!0}):(0,p.jsxs)(l.Z,{name:"new-policy",labelCol:{span:2},wrapperCol:{span:16},onFinish:function(e){if(h(!0),!v)return M({type:"error",message:"Error Occured",description:"Cannot Upload The File!"});e.policyFile=v,S?(e.policyFile=v,(0,m.rm)(e).then((function(e){return e.error?(h(!1),M({type:"error",message:"Error Occured",description:e.errorMessage?e.errorMessage:""})):w("/management/policy/view?success=edit")})).catch((function(e){return h(!1),M({type:"error",message:"Error Occured",description:j.errorMessage?j.errorMessage:""})}))):(delete e._id,e.policyFile=v,(0,m.e5)(e).then((function(e){return e.error?(h(!1),M({type:"error",message:"Error Occured",description:e.errorMessage?e.errorMessage:""})):w("/management/policy/view?success=new")})).catch((function(e){return h(!1),M({type:"error",message:"Error Occured",description:j.errorMessage?j.errorMessage:""})})))},autoComplete:"off",children:[(0,p.jsx)(l.Z.Item,{label:"Policy ID",name:"_id",initialValue:j?j._id:"",rules:[{required:!1,message:"Field is required!"}],children:(0,p.jsx)(s.Z,{type:"text",disabled:!0})}),(0,p.jsx)(l.Z.Item,{label:"Policy Name",name:"policyName",initialValue:j?j.policyName:"",rules:[{required:!0,message:"Field is required!"}],children:(0,p.jsx)(s.Z,{type:"text",placeholder:"Policy Name"})}),(0,p.jsx)(l.Z.Item,{label:"Policy Description",name:"policyDescription",initialValue:j?j.policyDescription:"",rules:[{required:!0,message:"Field is required!"}],children:(0,p.jsx)(s.Z,{type:"text",placeholder:"Excerpt"})}),(0,p.jsx)(l.Z.Item,{label:"Policy File",name:"policyFile",rules:[{required:!0,message:"Field is required!"}],children:(0,p.jsx)(s.Z,{onChange:function(e){var n=e.target.files[0];E.onloadend=function(){k(E.result)},E.readAsDataURL(n)},type:"file"})}),(0,p.jsx)(l.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,p.jsx)(u.ZP,{type:"primary",htmlType:"submit",children:S?"Update Policy":"Add Policy"})}),(0,p.jsx)(u.ZP,{onClick:function(){h(!0),(0,m.S8)({policyId:j._id}).then((function(e){return e.error?(h(!1),M({type:"error",message:"Error Occured",description:e.errorMessage?e.errorMessage:""})):w("/management/policy/view?success=delete")})).catch((function(e){return h(!1),M({type:"error",message:"Error Occured",description:j.errorMessage?j.errorMessage:""})}))},type:"primary",style:{background:"red",textAlign:"center",alignSelf:"center",visibility:S?"visible":"hidden"},children:"Delete"})]})]})}},3296:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(9439),i=t(2666),o=t(2732),c=t(7219),a=t(7198),l=function(e){var n=(null===e||void 0===e?void 0:e.algorithm)?(0,i.jG)(e.algorithm):(0,i.jG)(o.Z),t=Object.assign(Object.assign({},c.Z),null===e||void 0===e?void 0:e.token);return(0,i.t2)(t,{override:null===e||void 0===e?void 0:e.token},n,a.Z)},s=t(3918),u=t(9831),d=t(8931);var m=t(962),g=function(e,n){var t=null!==n&&void 0!==n?n:(0,o.Z)(e),r=t.fontSizeSM,i=t.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},t),function(e){var n=e.sizeUnit,t=e.sizeStep-2;return{sizeXXL:n*(t+10),sizeXL:n*(t+6),sizeLG:n*(t+2),sizeMD:n*(t+2),sizeMS:n*(t+1),size:n*t,sizeSM:n*t,sizeXS:n*(t-1),sizeXXS:n*(t-1)}}(null!==n&&void 0!==n?n:e)),(0,m.Z)(r)),{controlHeight:i}),(0,d.Z)(Object.assign(Object.assign({},t),{controlHeight:i})))},p=t(3742),h=t(4306),f=t(9391),y=function(e,n){return new f.C(e).setAlpha(n).toRgbString()},j=function(e,n){return new f.C(e).lighten(n).toHexString()},Z=function(e){var n=(0,p.R_)(e,{theme:"dark"});return{1:n[0],2:n[1],3:n[2],4:n[3],5:n[6],6:n[5],7:n[4],8:n[6],9:n[5],10:n[4]}},x=function(e,n){var t=e||"#000",r=n||"#fff";return{colorBgBase:t,colorTextBase:r,colorText:y(r,.85),colorTextSecondary:y(r,.65),colorTextTertiary:y(r,.45),colorTextQuaternary:y(r,.25),colorFill:y(r,.18),colorFillSecondary:y(r,.12),colorFillTertiary:y(r,.08),colorFillQuaternary:y(r,.04),colorBgElevated:j(t,12),colorBgContainer:j(t,8),colorBgLayout:j(t,0),colorBgSpotlight:j(t,26),colorBorder:j(t,26),colorBorderSecondary:j(t,19)}},b=function(e,n){var t=Object.keys(c.M).map((function(n){var t=(0,p.R_)(e[n],{theme:"dark"});return new Array(10).fill(1).reduce((function(e,r,i){return e["".concat(n,"-").concat(i+1)]=t[i],e["".concat(n).concat(i+1)]=t[i],e}),{})})).reduce((function(e,n){return e=Object.assign(Object.assign({},e),n)}),{}),r=null!==n&&void 0!==n?n:(0,o.Z)(e);return Object.assign(Object.assign(Object.assign({},r),t),(0,h.Z)(e,{generateColorPalettes:Z,generateNeutralColorPalettes:x}))};var v={defaultConfig:u.u_,defaultSeed:u.u_.token,useToken:function(){var e=(0,s.Z)(),n=(0,r.Z)(e,3);return{theme:n[0],token:n[1],hashId:n[2]}},defaultAlgorithm:o.Z,darkAlgorithm:b,compactAlgorithm:g,getDesignToken:l}}}]);
//# sourceMappingURL=5027.3f391765.chunk.js.map