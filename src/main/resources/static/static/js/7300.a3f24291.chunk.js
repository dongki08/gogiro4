"use strict";(self.webpackChunkteam1_project=self.webpackChunkteam1_project||[]).push([[7300],{4949:(e,n,t)=>{t.d(n,{A:()=>l});var s=t(4008),i=t(579);const l=e=>{let{title:n,content:t,callFn:l}=e;return(0,i.jsx)("div",{style:{position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",left:0,top:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.7)",zIndex:999},children:(0,i.jsxs)("div",{style:{background:"#fff",textAlign:"center",display:"flex",flexDirection:"column",gap:"20px",alignItems:"center",padding:"20px",width:"300px",borderRadius:"10px",fontFamily:"DAEAM_LEE_TAE_JOON",fontSize:"19px"},children:[(0,i.jsx)("div",{style:{paddingBottom:"5px",borderBottom:"1px dashed #8f8f8f"},children:n}),(0,i.jsx)("div",{style:{paddingBottom:"5px",borderBottom:"1px dashed #8f8f8f"},children:t}),(0,i.jsx)("div",{onClick:()=>{l()},children:(0,i.jsx)(s.A,{bttext:"\ud655\uc778"})})]})})}},5349:(e,n,t)=>{t.d(n,{A:()=>l});t(5043);var s=t(4008),i=t(579);const l=e=>{let{title:n,content:t,confirmFn:l,cancelFn:o}=e;return(0,i.jsx)("div",{style:{position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",left:0,top:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.7)",zIndex:999},children:(0,i.jsxs)("div",{style:{background:"#fff",textAlign:"center",display:"flex",flexDirection:"column",gap:"20px",alignItems:"center",padding:"20px",width:"300px",borderRadius:"10px",fontFamily:"DAEAM_LEE_TAE_JOON",fontSize:"19px"},children:[(0,i.jsx)("div",{style:{paddingBottom:"5px",borderBottom:"1px dashed #8f8f8f"},children:n}),(0,i.jsx)("div",{style:{paddingBottom:"5px",borderBottom:"1px dashed #8f8f8f"},children:t}),(0,i.jsxs)("div",{style:{display:"flex",gap:"20px"},children:[(0,i.jsx)("div",{onClick:l,children:(0,i.jsx)(s.A,{bttext:"\ud655\uc778"})}),(0,i.jsx)("div",{onClick:o,children:(0,i.jsx)(s.A,{bttext:"\ucde8\uc18c"})})]})]})})}},613:(e,n,t)=>{t.d(n,{A:()=>p});var s=t(5043),i=t(3216),l=t(5475),o=t(8648),a=t(9396);const c=function(){const[e,n]=(0,s.useState)({isOpen:!1,title:"",content:"",confirmFn:null,cancelFn:null});return(0,i.Zp)(),{isSelectModal:e,openSelectModal:(e,t,s,i)=>{n({isOpen:!0,title:e,content:t,confirmFn:s,cancelFn:i})},confirmSelectModal:()=>{n((e=>({...e,isOpen:!1})))},cancelSelectModal:()=>{n((e=>({...e,isOpen:!1})))}}};var r=t(2156);const d=function(){const[e,n]=(0,s.useState)({isOpen:!1,content:"",callFn:null});return(0,i.Zp)(),{isEmptyModal:e,openEmptyModal:(e,t)=>{n({isOpen:!0,content:e,callFn:t})},closeEmptyModal:()=>{n((e=>({...e,isOpen:!1})))}}},p=()=>{const e=(0,i.Zp)(),[n,t]=(0,l.ok)(),{isModal:p,openModal:x,closeModal:h,moveToLogin:m,shutModal:u}=(0,a.A)(),{isLogin:g}=(0,r.A)(),{isSelectModal:f,openSelectModal:v,confirmSelectModal:j,cancelSelectModal:A}=c(),{isEmptyModal:b,openEmptyModal:y,closeEmptyModal:w}=d(),S=n.get("page")?parseInt(n.get("page")):1,k=n.get("search")||"",M=n.get("category")?parseInt(n.get("category")):0,N=n.get("filter")?parseInt(n.get("filter")):0,F=(n.get("check")&&parseInt(n.get("check")),(0,l.PI)({page:S,search:k,category:M,filter:N}).toString()),[E,C]=(0,s.useState)(!1);return{page:S,search:k,category:M,filter:N,MoveToFilter:n=>{let t="";if(n){const e=(0,o.f)(n.filter,N);t=(0,l.PI)({filter:e}).toString()}else t=F;e({pathname:"../list",search:t})},MoveToList:n=>{let t="";if(n){const e=(0,o.f)(n.category,M);t=(0,l.PI)({category:e}).toString()}else t=F;e({pathname:"../list",search:t})},moveToRead:n=>{e({pathname:"../detail/".concat(n),search:F})},moveToSearch:n=>{let t="";if(n){const e=(0,o.f)(n.search,k);t=(0,l.PI)({search:e}).toString(),console.log("queryStr:",t),C(!E)}else t=F;e({pathname:"../list",search:t})},refresh:E,isModal:p,openModal:x,closeModal:h,moveToLogin:m,moveToReser:n=>{e({pathname:"../reservation/".concat(n),search:F})},MoveToPage:n=>{let t="";if(n){const e=(0,o.f)(n.page,S);t=(0,l.PI)({page:e}).toString()}else t=F;e({pathname:"../list",search:t})},moveToReview:(n,t,s,i)=>{console.log(s),e({pathname:"../../meat/review/".concat(n),search:"name=".concat(s,"&checkShop=").concat(t,"&ishop=").concat(i,"&").concat(F)})},isSelectModal:f,openSelectModal:v,confirmSelectModal:j,cancelSelectModal:A,moveToBReser:(n,t,s)=>{n.stopPropagation(),g?e({pathname:"../../butcher/pickup/".concat(t),search:"name=".concat(s,"&").concat(F)}):x("\ub85c\uadf8\uc778 \ud544\uc694","\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4.",m),console.log(s)},openEmptyModal:y,isEmptyModal:b,closeEmptyModal:w,moveToPayment:(n,t)=>{console.log("payment, pk :",n,"amount :",t),e({pathname:"/payment",search:"pk=".concat(n,"&amount=").concat(t)})},shutModal:u}}},9396:(e,n,t)=>{t.d(n,{A:()=>l});var s=t(5043),i=t(3216);const l=function(){const[e,n]=(0,s.useState)({isOpen:!1,title:"",content:"",callFn:null}),t=(0,i.Zp)();return{isModal:e,openModal:(e,t,s)=>{n({isOpen:!0,title:e,content:t,callFn:s})},closeModal:()=>{n((e=>({...e,isOpen:!1})))},moveToLogin:()=>{n((e=>({...e,isOpen:!1}))),t("/login")},shutModal:()=>{n((e=>({...e,isOpen:!1})))}}}},7300:(e,n,t)=>{t.r(n),t.d(n,{default:()=>Z});var s,i,l,o,a,c,r,d,p=t(5043),x=t(3216),h=t(3400),m=t(6957),u=t(5670),g=t(4008),f=t(1719),v=t(4949),j=t(5349),A=t(7475),b=t(7528),y=t(5903),w=t(255);const S=y.A.div(s||(s=(0,b.A)(["\n  position: relative;\n  padding: 30px 60px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 50px;\n"]))),k=y.A.div(i||(i=(0,b.A)(['\n  position: relative;\n  padding: 30px 20px 20px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n  align-self: stretch;\n  font-family: "DAEAM_LEE_TAE_JOON";\n  font-size: ',";\n  border-bottom: 1px solid ",";\n  @media (max-width: 980px) {\n    display: none;\n  }\n"])),w.Z.strong,w.J.g500),M=y.A.div(l||(l=(0,b.A)(["\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n"]))),N=y.A.div(o||(o=(0,b.A)(["\n  position: relative;\n  color: ",";\n"])),w.J.g600),F=y.A.div(a||(a=(0,b.A)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  color: ",";\n  font-size: ",";\n  .viewBox {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n  }\n  .like-box {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    cursor: pointer;\n  }\n  .like-button {\n    background: none;\n    border: none;\n    padding: none;\n    margin: 0;\n    color: ",";\n    font: inherit;\n    cursor: pointer;\n  }\n"])),w.J.g700,w.Z.default,w.J.g700),E=y.A.div(c||(c=(0,b.A)(["\n  position: relative;\n  display: flex;\n  padding: 20px;\n  align-items: flex-start;\n  gap: 60px;\n  align-self: stretch;\n  border-top: 1px solid ",';\n  font-family: "DAEAM_LEE_TAE_JOON";\n  font-size: ',";\n  .prnv {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n  }\n  .prnvTitle {\n    display: flex;\n    align-items: flex-start;\n    color: ",";\n    cursor: pointer;\n  }\n"])),w.J.g500,w.Z.strong,w.J.g700),C=y.A.div(r||(r=(0,b.A)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 30px 0px 50px 0px;\n  justify-content: space-between;\n  align-items: flex-start;\n  align-self: stretch;\n  .editBtn {\n    display: flex;\n    align-items: flex-start;\n    gap: 10px;\n    flex: 1 0 0;\n  }\n"]))),O=y.A.div(d||(d=(0,b.A)(["\n  position: relative;\n  display: flex;\n  padding: 20px 20px 50px 20px;\n  flex-direction: column;\n  align-items: flex-start;\n  .readReviewBox {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    padding-bottom: 20px;\n    justify-content: space-between;\n    align-items: center;\n    align-self: stretch;\n  }\n  .readReview {\n    display: flex;\n    /* width: 1105px; */\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 15px;\n    flex: 1 0 0;\n  }\n  .reviewInfo {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n    align-self: stretch;\n  }\n  .reviewCount {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n    align-self: stretch;\n    color: ",";\n    font-size: ",";\n  }\n  .userInfo {\n    display: flex;\n    align-items: center;\n    gap: 30px;\n    align-self: stretch;\n  }\n  .user {\n    display: flex;\n    width: 65px;\n    align-items: center;\n    gap: 2px;\n  }\n  .nickName {\n    align-items: center;\n    flex: 1 0 0;\n    color: ",";\n    font-size: ",";\n  }\n  .date {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    flex: 1 0 0;\n    color: ",";\n    font-size: 11px;\n  }\n  .reviewContentBox {\n    position: relative;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .reviewContent {\n    display: flex;\n    padding: 0px 10px;\n    align-items: center;\n    flex-grow: 1;\n    flex-shrink: 1;\n    gap: 10px;\n    /* align-self: stretch; */\n    color: ",";\n    font-size: ",";\n  }\n  .button-box {\n    display: flex;\n    /* width: 25px; */\n    align-items: center;\n    gap: 8px;\n    flex-shrink: 0;\n  }\n  .deleteBtn {\n    display: flex;\n    width: 25px;\n    align-items: center;\n    gap: 8px;\n    font-size: ",";\n    color: ",";\n    cursor: pointer;\n  }\n  .reportBtn {\n    display: flex;\n    /* width: 25px; */\n    align-items: center;\n    gap: 8px;\n    font-size: ",";\n    color: ",";\n    cursor: pointer;\n  }\n  .inputReviewBox {\n    display: flex;\n    flex-wrap: wrap;\n    padding: 20px 0px;\n    justify-content: space-between;\n    align-items: center;\n    gap: 13px;\n    align-self: stretch;\n    border-top: 1px dashed ",";\n  }\n  .inputReview {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    flex: 1 0 0;\n    align-self: stretch;\n    textarea {\n      border: none;\n      outline: none;\n      resize: none;\n      padding: 12px 20px 4px 20px;\n      width: 100%;\n      min-width: 220px;\n      height: 90%;\n      border-radius: 10px;\n      border: 1px solid ",";\n      background: #fff;\n      font-size: ",";\n      color: ",";\n    }\n  }\n"])),w.J.secondary,w.Z.default,w.J.primary,w.Z.default,w.J.g500,w.J.g900,w.Z.default,w.Z.default,w.J.primary,w.Z.default,w.J.g700,w.J.g500,w.J.g500,w.Z.default,w.J.g500);var I=t(7097),T=t(2156),B=t(613),_=t(579);const J=m.i,R={iboard:0,iuser:0,name:"",writerPic:"",title:"",contents:"",createdAt:"",pics:[],be:{iboard:0,title:""},af:{iboard:0,title:""},comments:[{icomment:0,writerPk:0,writerName:"",comment:"",createdAt:""}]},P={contents:""},z=()=>{var e;const{userState:n}=(0,T.A)(),t=n.nickname,{moveToRead:s,moveToList:i,moveToModify:l,page:o}=(0,u.A)(),{iboard:a}=(0,x.g)(),[c,r]=(0,p.useState)(R),d=c.name,[m,b]=(0,p.useState)(P),[y,w]=(0,p.useState)([]),[z,L]=(0,p.useState)(!1),[Z,D]=(0,p.useState)(null===(e=c.pics[0])||void 0===e?void 0:e.pic),[K,W]=(0,p.useState)(!1),[G,U]=(0,p.useState)(!1),[q,H]=(0,p.useState)(null),[$,Q]=(0,p.useState)(!1),[V,X]=(0,p.useState)(null),[Y,ee]=(0,p.useState)(!1),[ne,te]=(0,p.useState)(!1),[se,ie]=(0,p.useState)(!1),[le,oe]=(0,p.useState)(""),[ae,ce]=(0,p.useState)(""),[re,de]=(0,p.useState)(!1),pe=()=>{(0,h.HD)({iboard:a,successFn:xe,failFn:he,errorFn:me})},xe=e=>{L(!1),r(e),w(e.comments),console.log(e)},he=e=>{L(!1),console.log(e)},me=e=>{L(!1),console.log(e)};(0,p.useEffect)((()=>{L(!0),pe()}),[a,o]),(0,p.useEffect)((()=>{c.pics&&c.pics.length>0&&c.pics[0].pic&&D(c.pics[0].pic)}),[c.pics]);const ue=e=>{console.log(e),de(1),te(!0),oe("\ub313\uae00 \ub4f1\ub85d"),ce("\ub313\uae00\uc744 \ub4f1\ub85d\ud558\uc600\uc2b5\ub2c8\ub2e4."),b({...P}),pe()},ge=e=>{console.log(e),de(1),te(!0),oe("\ub313\uae00 \ub4f1\ub85d \uc2e4\ud328"),ce("\ub313\uae00\uc744 \ub4f1\ub85d\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ub4f1\ub85d \ud574\uc8fc\uc138\uc694.")},fe=e=>{console.log(e),de(1),te(!0),oe("\ub313\uae00 \ub4f1\ub85d \uc2e4\ud328"),ce("\uc11c\ubc84\uac00 \ubd88\uc548\uc815\ud569\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \ub4f1\ub85d \ud574\uc8fc\uc138\uc694.")},ve=e=>{console.log("\ub313\uae00 \uc0ad\uc81c \uc131\uacf5",e),te(!0),oe("\ub313\uae00 \uc0ad\uc81c"),ce("\ub313\uae00\uc744 \uc0ad\uc81c\ud558\uc600\uc2b5\ub2c8\ub2e4."),de(1),pe()},je=e=>{console.log("\ub313\uae00 \uc0ad\uc81c \uc2e4\ud328",e),te(!1),oe("\ub313\uae00 \uc0ad\uc81c \uc2e4\ud328"),ce("\ub313\uae00 \uc0ad\uc81c\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4 \ud574\uc8fc\uc138\uc694.")},Ae=e=>{console.log("\ub313\uae00 \uc0ad\uc81c \uc2e4\ud328",e),de(1),te(!0),oe("\ub313\uae00 \uc0ad\uc81c \uc2e4\ud328"),ce("\uc11c\ubc84\uac00 \ubd88\uc548\uc815\ud569\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4 \ud574\uc8fc\uc138\uc694.")},be=e=>{console.log("\ud574\ub2f9 \uae00 \uc0ad\uc81c \uc131\uacf5",e),ie(!0),oe("\ud574\ub2f9 \uae00 \uc0ad\uc81c"),ce("\ud574\ub2f9 \uae00\uc744 \uc0ad\uc81c\ud558\uc600\uc2b5\ub2c8\ub2e4."),de(1),pe()},ye=e=>{console.log("\ud574\ub2f9 \uae00 \uc0ad\uc81c \uc2e4\ud328",e),ie(!1),oe("\ud574\ub2f9 \uae00 \uc0ad\uc81c \uc2e4\ud328"),ce("\ud574\ub2f9 \uae00 \uc0ad\uc81c\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4 \ud574\uc8fc\uc138\uc694.")},we=e=>{console.log("\ud574\ub2f9 \uae00 \uc0ad\uc81c \uc2e4\ud328",e),de(1),ie(!0),oe("\ud574\ub2f9 \uae00 \uc0ad\uc81c \uc2e4\ud328"),ce("\uc11c\ubc84\uac00 \ubd88\uc548\uc815\ud569\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4 \ud574\uc8fc\uc138\uc694.")},Se=n.iuser,[ke,Me]=(0,p.useState)(!1),Ne=(0,I.n)({mutationFn:e=>(0,h.cf)({iboard:a}),onSuccess:e=>{0===e.result&&(Le("\uc88b\uc544\uc694 \ud574\uc81c","\uc88b\uc544\uc694\uac00 \ud574\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.",De),Me(!1)),1===e.result&&(Le("\uc88b\uc544\uc694 \ub4f1\ub85d","\uc88b\uc544\uc694\uac00 \ub4f1\ub85d \ub418\uc5c8\uc2b5\ub2c8\ub2e4.",De),Me(!0))},onError:()=>{}}),Fe={iboard:a,ireport:1},[Ee,Ce]=(0,p.useState)(Fe),[Oe,Ie]=(0,p.useState)(!1),Te=(0,I.n)({mutationFn:e=>(0,h.IH)({reportData:e}),onSuccess:()=>{console.log("\uc2e0\uace0 \uc131\uacf5"),Le("\uae00\uc2e0\uace0\uc644\ub8cc","\uc2e0\uace0\uac00 \uc644\ub8cc \ub418\uc5c8\uc2b5\ub2c8\ub2e4.",De),Ie(!0)},onError:e=>{e.response&&404===e.response.status&&Le("\uc2e0\uace0 \uc624\ub958","\uc774\ubbf8 \uc2e0\uace0\ud55c \uae00\uc785\ub2c8\ub2e4.",De)}}),Be=e=>{const n=parseInt(e.target.value,10);Ce((e=>({...e,ireport:n})))},_e=()=>{const e={iboard:void 0!==a?Number(a):0,ireport:Ee.ireport};console.log("report form test ",e),Te.mutate(e)},[Je,Re]=(0,p.useState)({icomment:0,ireport:1}),Pe=(0,I.n)({mutationFn:e=>(0,h.PN)({reportCommentData:e}),onSuccess:e=>{Le("\ub313\uae00\uc2e0\uace0\uc644\ub8cc","\uc2e0\uace0\uac00 \uc644\ub8cc \ub418\uc5c8\uc2b5\ub2c8\ub2e4.",De)},onError:e=>{e.response&&404===e.response.status&&Le("\uc2e0\uace0 \uc624\ub958","\uc774\ubbf8 \uc2e0\uace0\ud55c \uae00\uc785\ub2c8\ub2e4.",De)}}),{isModal:ze,openModal:Le,openSelectModal:Ze,shutModal:De,isSelectModal:Ke,cancelSelectModal:We}=(0,B.A)(),Ge=e=>{const n=parseInt(e.target.value,10);console.log("handlechange",n),Re((e=>({...e,ireport:n})))},Ue=e=>{console.log("comment num ",e);const n={icomment:void 0!==e?Number(e):0,ireport:Je.ireport};console.log("report form test ",n),Pe.mutate(n)};return(0,_.jsxs)(A.qd,{children:[z?(0,_.jsx)(f.A,{}):null,Ke.isOpen&&(0,_.jsx)(j.A,{title:Ke.title,content:Ke.content,confirmFn:Ke.confirmFn,cancelFn:Ke.cancelFn}),ze.isOpen&&(0,_.jsx)(v.A,{title:ze.title,content:ze.content,callFn:ze.callFn}),(0,_.jsxs)(k,{children:[(0,_.jsx)(M,{children:c.title}),(0,_.jsxs)(F,{children:[(0,_.jsx)("div",{className:"userName",children:c.name}),(0,_.jsx)("div",{className:"date",children:c.createdAt}),(0,_.jsxs)("div",{className:"like-box",onClick:()=>{console.log("\ub370\uc774\ud130\ub2e4 :",a,Se),Ne.mutate()},children:[ke?(0,_.jsx)("img",{src:"".concat("","/assets/images/like_fill.svg"),alt:"like"}):(0,_.jsx)("img",{src:"".concat("","/assets/images/like.svg"),alt:"like"}),(0,_.jsx)("button",{className:"like-button",children:"\uc88b\uc544\uc694"})]}),(0,_.jsxs)("div",{className:"like-box",onClick:e=>{console.log("\ub538\uae4d",e),Ze("\uae00 \uc2e0\uace0\ud558\uae30",(0,_.jsxs)("div",{style:{padding:"10px"},children:[(0,_.jsx)("div",{style:{marginBottom:"20px"},children:(0,_.jsx)("span",{children:"\uc2e0\uace0\ud56d\ubaa9\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."})}),(0,_.jsx)("div",{children:(0,_.jsxs)("select",{onChange:e=>Be(e),children:[(0,_.jsx)("option",{value:1,children:"\uc695\uc124/\uc778\uc2e0\uacf5\uaca9"}),(0,_.jsx)("option",{value:2,children:"\uc74c\ub780\ubb3c"}),(0,_.jsx)("option",{value:3,children:"\uc601\ub9ac\ubaa9\uc801/\ud64d\ubcf4\uc131"}),(0,_.jsx)("option",{value:4,children:"\uac1c\uc778\uc815\ubcf4"}),(0,_.jsx)("option",{value:5,children:"\uac8c\uc2dc\uae00 \ub3c4\ubc30"}),(0,_.jsx)("option",{value:6,children:"\uae30\ud0c0"})]})})]}),(()=>{_e(),We()}),(()=>We()))},children:[Oe?(0,_.jsx)("img",{src:"".concat("","/assets/images/report_fill.svg"),alt:"like"}):(0,_.jsx)("img",{src:"".concat("","/assets/images/report.svg"),alt:"like"}),(0,_.jsx)("button",{className:"like-button",children:"\uc2e0\uace0\ud558\uae30"})]})]})]}),(0,_.jsxs)(S,{children:[(0,_.jsxs)(A.vP,{children:[(0,_.jsx)(A.ys,{children:c.pics[0]?(0,_.jsx)("img",{src:"".concat(J,"/pic/community/").concat(c.iboard,"/").concat(Z),alt:"Large image"}):null}),(0,_.jsx)(A.g7,{children:c.pics.map(((e,n)=>e&&(0,_.jsx)("div",{className:"thumbnail",onClick:()=>{(e=>{D(e)})(e.pic)},children:(0,_.jsx)("img",{src:"".concat(J,"/pic/community/").concat(c.iboard,"/").concat(e.pic),alt:"img_".concat(n+1)})},n)))})]}),(0,_.jsx)(A.pD,{children:(0,_.jsxs)(A.l$,{children:[(0,_.jsxs)(A.R3,{children:[c.writerPic?(0,_.jsx)("img",{src:"".concat(J,"/pic/user/").concat(c.iuser,"/").concat(c.writerPic),alt:"\ud504\ub85c\ud544\uc0ac\uc9c4"}):(0,_.jsx)("img",{src:"".concat("","/assets/images/user_profile.png"),alt:"\uae30\ubcf8\uc0ac\uc9c4"}),(0,_.jsx)(A.PK,{children:(0,_.jsx)("div",{children:c.name})})]}),(0,_.jsx)(N,{children:c.contents})]})})]}),c.be&&(0,_.jsxs)(E,{children:[(0,_.jsxs)("div",{className:"prnv",children:[(0,_.jsx)("div",{className:"prnvIcon",children:(0,_.jsx)("img",{src:"".concat("","/assets/images/mingcute_up-line.svg"),alt:"img"})}),(0,_.jsx)("div",{className:"prnvText",children:"\uc774\uc804\uae00"})]}),(0,_.jsx)("div",{className:"prnvTitle",onClick:()=>{s(c.be.iboard)},children:c.be.title})]}),c.af&&(0,_.jsxs)(E,{children:[(0,_.jsxs)("div",{className:"prnv",children:[(0,_.jsx)("div",{className:"prnvIcon",children:(0,_.jsx)("img",{src:"".concat("","/assets/images/mingcute_down-line.svg"),alt:"img"})}),(0,_.jsx)("div",{className:"prnvText",children:"\ub2e4\uc74c\uae00"})]}),(0,_.jsx)("div",{className:"prnvTitle",onClick:()=>{s(c.af.iboard)},children:c.af.title})]}),(0,_.jsxs)(C,{children:[(0,_.jsxs)("div",{className:"editBtn",children:[(0,_.jsx)("div",{onClick:()=>{l(c.iboard)},children:d===t?(0,_.jsx)(g.A,{bttext:"\uc218\uc815\ud558\uae30"}):null}),(0,_.jsx)("div",{onClick:()=>{(e=>{X(e),ee(!0)})(c.iboard)},children:d===t?(0,_.jsx)(g.A,{bttext:"\uc0ad\uc81c\ud558\uae30"}):null})]}),(0,_.jsx)("div",{onClick:()=>{i({page:o})},children:(0,_.jsx)(g.A,{bttext:"\ubaa9\ub85d\ubcf4\uae30"})})]}),(0,_.jsxs)(O,{children:[(0,_.jsx)("div",{className:"readReviewBox",children:(0,_.jsx)("div",{className:"readReview",children:(0,_.jsxs)("div",{className:"reviewInfo",children:[(0,_.jsxs)("div",{className:"reviewCount",children:["\ub313\uae00 ",c.comments.length,"\uac1c"]}),c.comments.length>0&&c.comments.map((e=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"userInfo",children:[(0,_.jsxs)("div",{className:"user",children:[(0,_.jsx)("div",{className:"icon",children:(0,_.jsx)("img",{src:"".concat("","/assets/images/speech.svg")})}),(0,_.jsx)("div",{className:"nickName",children:e.writerName})]}),(0,_.jsx)("div",{className:"date",children:e.createdAt})]},e.icomment),(0,_.jsxs)("div",{className:"reviewContentBox",children:[(0,_.jsx)("div",{className:"reviewContent",children:e.comment}),(0,_.jsxs)("div",{className:"button-box",children:[e.writerName===t?(0,_.jsx)("div",{className:"deleteBtn",onClick:()=>{var n;n=e.icomment,H(n),Q(!0)},children:"\uc0ad\uc81c"}):null,(0,_.jsx)("div",{className:"reportBtn",onClick:()=>(e=>{console.log("\ub538\uae4d",e),Ze("\ub313\uae00 \uc2e0\uace0\ud558\uae30",(0,_.jsxs)("div",{style:{padding:"10px"},children:[(0,_.jsx)("div",{style:{marginBottom:"20px"},children:(0,_.jsx)("span",{children:"\uc2e0\uace0\ud56d\ubaa9\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."})}),(0,_.jsx)("div",{children:(0,_.jsxs)("select",{onChange:e=>Ge(e),children:[(0,_.jsx)("option",{value:1,children:"\uc695\uc124/\uc778\uc2e0\uacf5\uaca9"}),(0,_.jsx)("option",{value:2,children:"\uc74c\ub780\ubb3c"}),(0,_.jsx)("option",{value:3,children:"\uc601\ub9ac\ubaa9\uc801/\ud64d\ubcf4\uc131"}),(0,_.jsx)("option",{value:4,children:"\uac1c\uc778\uc815\ubcf4"}),(0,_.jsx)("option",{value:5,children:"\uac8c\uc2dc\uae00 \ub3c4\ubc30"}),(0,_.jsx)("option",{value:6,children:"\uae30\ud0c0"})]})})]}),(()=>{Ue(e),We()}),(()=>We()))})(e.icomment),children:"\ub313\uae00\uc2e0\uace0"})]})]})]})))]})})}),(0,_.jsxs)("div",{className:"inputReviewBox",children:[(0,_.jsx)("div",{className:"inputReview",children:(0,_.jsx)("textarea",{cols:50,type:"text",name:"contents",value:m.contents,onChange:e=>(e=>{const n={...m,[e.target.name]:e.target.value};b(n)})(e),placeholder:"\ub313\uae00\uc744 \uc785\ub825\ud574\ubcf4\uc138\uc694(50\uc790 \uc774\ub0b4)"})}),(0,_.jsx)("div",{onClick:()=>{0!==m.contents.length?(m.contents.length<=50&&(0,h.Gy)({iboard:a,contents:m,successFn:ue,failFn:ge,errorFn:fe}),m.contents.length>50&&U(!0)):W(!0)},children:(0,_.jsx)(g.A,{bttext:"\ub313\uae00\uc785\ub825"})})]})]}),$?(0,_.jsx)(j.A,{title:"\ub313\uae00 \uc0ad\uc81c",content:"\uc815\ub9d0 \ub313\uae00\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",confirmFn:()=>{q&&(0,h.Tu)({icomment:q,successFn:ve,failFn:je,errorFn:Ae}),Q(!1)},cancelFn:()=>{Q(!1)}}):null,Y?(0,_.jsx)(j.A,{title:"\uae00 \uc0ad\uc81c",content:"\uc815\ub9d0 \ud574\ub2f9 \uae00\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",confirmFn:()=>{V&&(0,h.oK)({iboard:V,successFn:be,failFn:ye,errorFn:we}),ee(!1)},cancelFn:()=>{ee(!1)}}):null,ne?(0,_.jsx)(v.A,{title:le,content:ae,callFn:()=>{te(!1)}}):null,se?(0,_.jsx)(v.A,{title:le,content:ae,callFn:()=>{ee(!1),i({page:o})}}):null,K?(0,_.jsx)(v.A,{title:"\ub313\uae00 \ub4f1\ub85d",content:"\ub313\uae00\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",callFn:()=>{W(!1)}}):null,G?(0,_.jsx)(v.A,{title:"\ub313\uae00 \ub4f1\ub85d",content:"\ub313\uae00\uc744 50\uc790 \uc774\ub0b4\ub85c \uc791\uc131\ud574\uc8fc\uc138\uc694",callFn:()=>{U(!1)}}):null]})};var L=t(947);const Z=()=>(0,_.jsxs)("div",{children:[(0,_.jsx)(L.A,{timg:"".concat("","/assets/images/community_header.png"),tname:"\uace0\uae30\uc7a1\ub2f4",tcontent:'"\uc778\uc0dd\uc740 \uace0\uae30\uc11c \uace0\uae30\ub2e4"'}),(0,_.jsx)(z,{})]})},7097:(e,n,t)=>{t.d(n,{n:()=>S});var s,i,l,o,a,c,r=t(5043),d=t(9790),p=t(5149),x=t(4137),h=t(1187),m=t(3167),u=t(5239),g=t(1454),f=t(329),v=t(9723),j=(s=new WeakMap,i=new WeakMap,l=new WeakMap,o=new WeakMap,a=new WeakSet,c=new WeakSet,class extends f.Q{constructor(e,n){super(),(0,d.A)(this,c),(0,d.A)(this,a),(0,p.A)(this,s,{writable:!0,value:void 0}),(0,p.A)(this,i,{writable:!0,value:void 0}),(0,p.A)(this,l,{writable:!0,value:void 0}),(0,p.A)(this,o,{writable:!0,value:void 0}),(0,m.A)(this,s,e),this.setOptions(n),this.bindMethods(),(0,h.A)(this,a,A).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){const n=this.options;var t;(this.options=(0,x.A)(this,s).defaultMutationOptions(e),(0,v.f8)(this.options,n)||(0,x.A)(this,s).getMutationCache().notify({type:"observerOptionsUpdated",mutation:(0,x.A)(this,l),observer:this}),null!==n&&void 0!==n&&n.mutationKey&&this.options.mutationKey&&(0,v.EN)(n.mutationKey)!==(0,v.EN)(this.options.mutationKey))?this.reset():null===(t=(0,x.A)(this,l))||void 0===t||t.setOptions(this.options)}onUnsubscribe(){var e;this.hasListeners()||(null===(e=(0,x.A)(this,l))||void 0===e||e.removeObserver(this))}onMutationUpdate(e){(0,h.A)(this,a,A).call(this),(0,h.A)(this,c,b).call(this,e)}getCurrentResult(){return(0,x.A)(this,i)}reset(){var e;null===(e=(0,x.A)(this,l))||void 0===e||e.removeObserver(this),(0,m.A)(this,l,void 0),(0,h.A)(this,a,A).call(this),(0,h.A)(this,c,b).call(this)}mutate(e,n){var t;return(0,m.A)(this,o,n),null===(t=(0,x.A)(this,l))||void 0===t||t.removeObserver(this),(0,m.A)(this,l,(0,x.A)(this,s).getMutationCache().build((0,x.A)(this,s),this.options)),(0,x.A)(this,l).addObserver(this),(0,x.A)(this,l).execute(e)}});function A(){var e,n;const t=null!==(e=null===(n=(0,x.A)(this,l))||void 0===n?void 0:n.state)&&void 0!==e?e:(0,u.$)();(0,m.A)(this,i,{...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset})}function b(e){g.j.batch((()=>{if((0,x.A)(this,o)&&this.hasListeners()){const p=(0,x.A)(this,i).variables,h=(0,x.A)(this,i).context;var n,t,s,l;if("success"===(null===e||void 0===e?void 0:e.type))null===(n=(t=(0,x.A)(this,o)).onSuccess)||void 0===n||n.call(t,e.data,p,h),null===(s=(l=(0,x.A)(this,o)).onSettled)||void 0===s||s.call(l,e.data,null,p,h);else if("error"===(null===e||void 0===e?void 0:e.type)){var a,c,r,d;null===(a=(c=(0,x.A)(this,o)).onError)||void 0===a||a.call(c,e.error,p,h),null===(r=(d=(0,x.A)(this,o)).onSettled)||void 0===r||r.call(d,void 0,e.error,p,h)}}this.listeners.forEach((e=>{e((0,x.A)(this,i))}))}))}var y=t(3248),w=t(3247);function S(e,n){const t=(0,y.jE)(n),[s]=r.useState((()=>new j(t,e)));r.useEffect((()=>{s.setOptions(e)}),[s,e]);const i=r.useSyncExternalStore(r.useCallback((e=>s.subscribe(g.j.batchCalls(e))),[s]),(()=>s.getCurrentResult()),(()=>s.getCurrentResult())),l=r.useCallback(((e,n)=>{s.mutate(e,n).catch(k)}),[s]);if(i.error&&(0,w.G)(s.options.throwOnError,[i.error]))throw i.error;return{...i,mutate:l,mutateAsync:i.mutate}}function k(){}},3247:(e,n,t)=>{function s(e,n){return"function"===typeof e?e(...n):!!e}t.d(n,{G:()=>s})}}]);
//# sourceMappingURL=7300.a3f24291.chunk.js.map