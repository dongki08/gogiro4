"use strict";(self.webpackChunkteam1_project=self.webpackChunkteam1_project||[]).push([[4101],{6957:(n,e,t)=>{t.d(e,{i:()=>i});const i=""},2657:(n,e,t)=>{t.d(e,{D6:()=>x,HZ:()=>p,PX:()=>s,Sq:()=>c,TX:()=>o,fE:()=>d,ih:()=>r});var i=t(7154),l=t(5940);const a="".concat("","/api"),o=async n=>{let{isLogin:e,ishop:t}=n;try{const n={headers:{"Content-Type":"application/json"}},o=e?l.A:i.A,s=await o.get("".concat(a,"/shop/").concat(t),n);if("2"===s.status.toString().charAt(0))return console.log("\ubaa9\ub85d \ud638\ucd9c \uc131\uacf5"),s.data;console.log("\ubaa9\ub85d \ud638\ucd9c \uc624\ub958")}catch(o){console.log(o)}},s=async n=>{let{params:e}=n;console.log("\ud30c\ub77c\ubbf8\ud130",e);try{const n=await i.A.get("".concat(a,"/shop"),{params:e});if("2"===n.status.toString().charAt(0))return console.log("\ubaa9\ub85d \ud638\ucd9c \uc131\uacf5"),n.data;console.log("\ubaa9\ub85d \ud638\ucd9c \uc624\ub958")}catch(t){console.log(t)}},r=async n=>{let{reviewData:e}=n;try{const n={headers:{"Content-Type":"multipart/form-data"}};return(await l.A.post("".concat(a,"/review"),e,n)).data}catch(t){throw console.log(t),t}},p=async n=>{let{reserData:e}=n;try{const n={headers:{"Content-Type":"application/json"}};return(await l.A.post("".concat(a,"/reservation"),e,n)).data}catch(t){throw console.log(t),t}},x=async n=>{let{dataForm:e}=n;console.log("\ub370\uc774\ud130\ud3fc",e);try{return(await i.A.post("".concat(a,"/status"),e)).data}catch(t){throw console.log(""),t}},d=async n=>{let{replyData:e}=n;console.log("axios data : ",e);try{const n={headers:{"Content-Type":"application/json"}};return(await l.A.put("".concat("","/api/owner/review"),e,n)).data}catch(t){throw console.log("error"),t}},c=async n=>{let{reportData:e}=n;console.log("axios",e);try{const n={headers:{"Content-Type":"application/json"}};return(await l.A.post("".concat("","/api/user/review/report"),n)).data}catch(t){throw console.log(t),t}}},22:(n,e,t)=>{t.d(e,{G$:()=>w,I_:()=>A,NU:()=>y,Pz:()=>u,V2:()=>v,cl:()=>j,iw:()=>h,mX:()=>m});var i,l,a,o,s,r,p,x,d,c=t(7528),f=t(5903),g=t(255);const h=f.A.form(i||(i=(0,c.A)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 17px;\n  font-family: Pretendard;\n"]))),m=f.A.div(l||(l=(0,c.A)(["\n  position: fixed;\n  height: 68px;\n  top: 114px;\n  left: 210px;\n  display: flex;\n  width: calc(100% - 210px);\n  padding: 11px 36px;\n  justify-content: space-between;\n  align-items: center;\n  background: #fff;\n  z-index: 997;\n  /* Shadow */\n  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1),\n    0px 1px 3px 0px rgba(0, 0, 0, 0.1);\n\n  .page-title {\n    display: flex;\n    width: 136px;\n    justify-content: space-between;\n    align-items: center;\n    flex-shrink: 0;\n    color: var(--grayscale-90, #1c1c1e);\n    font-size: 24px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: normal;\n  }\n"]))),y=f.A.div(a||(a=(0,c.A)(["\n  display: flex;\n  align-items: flex-start;\n  padding-left: 20px;\n  // topNavBar \uace0\uc815 \uc2dc \uc801\uc6a9\n  margin-top: 85px;\n  margin-bottom: 50px;\n  margin-left: 210px;\n  /* z-index: -999; */\n  gap: 20px;\n"]))),u=f.A.div(o||(o=(0,c.A)(["\n  position: fixed;\n  left: 810px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n  z-index: 997;\n"]))),v=f.A.div(s||(s=(0,c.A)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n"]))),w=f.A.div(r||(r=(0,c.A)(["\n  position: relative;\n  display: flex;\n  width: 560px;\n  padding: 20px 30px;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 16px;\n  border-radius: 8px;\n  background: #fff;\n  /* shadow */\n  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1),\n    0px 1px 3px 0px rgba(0, 0, 0, 0.1);\n"]))),A=f.A.div(p||(p=(0,c.A)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n"]))),j=f.A.div(x||(x=(0,c.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 8px;\n  form {\n    display: flex;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  label {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    color: var(--gray-900, #111827);\n    font-family: Pretendard;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 22px; /* 157.143% */\n  }\n\n  .big-title {\n    display: flex;\n    align-items: flex-start;\n    gap: 2px;\n    color: var(--gray-900, #111827);\n    /* background-color: ","; */\n    /* 16/semibold */\n    font-family: Pretendard;\n    font-size: 24px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 150%; /* 24px */\n  }\n  .title {\n    display: flex;\n    align-items: flex-start;\n    gap: 2px;\n    color: var(--gray-900, #111827);\n    /* 16/semibold */\n    font-family: Pretendard;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 150%; /* 24px */\n  }\n  .essential {\n    color: var(--red-500, #ef4444);\n    /* 16/semibold */\n    font-family: Pretendard;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 150%; /* 24px */\n  }\n  .text-guide {\n    display: flex;\n    align-items: flex-start;\n    color: var(--gray-500, #6b7280);\n    /* 12/regular */\n    font-family: Pretendard;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 150%; /* 18px */\n  }\n  .text-length {\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-start;\n    flex: 1 0 0;\n    color: var(--gray-500, #6b7280);\n    text-align: right;\n    /* 12/regular */\n    font-family: Pretendard;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 150%; /* 18px */\n  }\n  .pics-container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .pics-thumb {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n  }\n  .name-guide {\n    display: flex;\n    width: 500px;\n    justify-content: space-between;\n    align-items: flex-start;\n    align-self: stretch;\n  }\n  .tel {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n    align-self: stretch;\n  }\n  .open {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n    align-self: stretch;\n  }\n  .location-box {\n    display: flex;\n    align-items: flex-start;\n    gap: 6px;\n  }\n  .location-input-box {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .menu-pics {\n    display: flex;\n    width: 500px;\n    align-items: flex-start;\n    align-content: flex-start;\n    gap: 10px;\n    flex-wrap: wrap;\n  }\n  .check-box-wrap {\n    display: flex;\n    width: 500px;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .radio-wrap {\n    display: flex;\n    align-items: flex-start;\n    gap: 16px;\n  }\n\n  .preview-img {\n    width: 500px;\n    height: 340px;\n    object-fit: cover;\n    /* overflow: hidden; */\n  }\n  .shop-info-box {\n    display: flex;\n    width: 500px;\n    height: 109px;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n    position: absolute;\n    bottom: 20px;\n    background: rgba(17, 17, 17, 0.35);\n  }\n  .shop-info {\n    display: flex;\n    height: 109px;\n    padding: 10px 30px;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n    flex-shrink: 0;\n  }\n  .shop-name {\n    width: 100%;\n    height: 18px;\n    flex-shrink: 0;\n    color: #fff;\n    font-family: DAEAM_LEE_TAE_JOON;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 125%; /* 20px */\n  }\n  .shop-info-detail-box {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n  }\n  .shop-info-text-wrap {\n    display: flex;\n    align-items: flex-start;\n  }\n  .shop-info-cate {\n    width: 45px;\n    color: var(--gray-scale-100, #f5f5f5);\n    font-family: Pretendard;\n    font-size: 10px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 125%; /* 12.5px */\n  }\n  .shop-info-detail {\n    color: var(--gray-scale-100, #f5f5f5);\n    font-family: Pretendard;\n    font-size: 10px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 125%; /* 12.5px */\n  }\n"])),g.J.g200);(0,f.A)(j)(d||(d=(0,c.A)(["\n  display: flex;\n  flex-direction: row;\n  width: 500px;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-shrink: 0;\n  .menu-add-pic {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .btn-wrap {\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-start;\n    gap: 10px;\n  }\n"])))},7430:(n,e,t)=>{t.d(e,{A:()=>s});var i,l=t(7528),a=(t(5043),t(5903)),o=t(579);const s=n=>{let{star:e}=n;const t=new Array(5).fill("/assets/images/review_n_count.png"),s=a.A.div(i||(i=(0,l.A)(["\n    display: flex;\n    gap: 5px;\n    img {\n      width: 20px;\n      height: 20px;\n    }\n  "])));for(let i=0;i<e;i++)t[i]="/assets/images/review_count.png";return(0,o.jsx)(s,{children:t.map(((n,e)=>(0,o.jsx)("img",{src:n,alt:"star"},e)))})}},3198:(n,e,t)=>{t.r(e),t.d(e,{default:()=>j});var i=t(3747),l=t(5043),a=(t(5692),t(3647),t(4014),t(3874),t(162),t(1054)),o=t(22),s=t(2360),r=t(613),p=t(5980),x=t(5225),d=t(4975),c=t(7430),f=(t(781),t(7097)),g=t(6957),h=t(2657),m=t(2156),y=t(4949),u=t(579);const v=g.i,w=n=>{let{reviewData:e}=n;const{adminState:t}=(0,m.A)();console.log("value",e);const[i,a]=(0,l.useState)(null),o=t.ishop,s={ireview:0,checkShop:0,comment:""},{isModal:g,openModal:w,closeModal:A}=(0,r.A)(),j=(0,f.n)({mutationFn:n=>(0,h.fE)({replyData:n}),onSuccess:n=>{n&&w("\ub4f1\ub85d \uc131\uacf5","\ub2f5\uae00 \ub4f1\ub85d\uc744 \uc131\uacf5\ud558\uc600\uc2b5\ub2c8\ub2e4.",(()=>{A(),k(s)}))},onError:()=>{}}),[b,k]=(0,l.useState)(s),[E,_]=(0,l.useState)(!1),z=null===e||void 0===e?void 0:e.updatedAt,D=new Date(z),S=D.getFullYear()+"-"+("0"+(D.getMonth()+1)).slice(-2)+"-"+("0"+D.getDate()).slice(-2)+" "+("0"+D.getHours()).slice(-2)+":"+("0"+D.getMinutes()).slice(-2),O=null===e||void 0===e?void 0:e.createdAt,T=new Date(O).getFullYear()+"-"+("0"+(D.getMonth()+1)).slice(-2)+"-"+("0"+D.getDate()).slice(-2)+" "+("0"+D.getHours()).slice(-2)+":"+("0"+D.getMinutes()).slice(-2);return(0,u.jsxs)(p.BD,{children:[g.isOpen&&(0,u.jsx)(y.A,{title:g.title,content:g.content,callFn:g.callFn}),(0,u.jsx)("div",{style:{width:"100%",display:"flex"},children:(0,u.jsx)("div",{children:(0,u.jsxs)(p.s4,{children:[(0,u.jsxs)(p.f5,{children:[(0,u.jsx)(d.RC,{style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},loop:!0,spaceBetween:10,navigation:!0,thumbs:{swiper:i},modules:[x.U1,x.Vx,x.WO],className:"mySwiper2",children:null===e||void 0===e?void 0:e.pics.map(((n,t)=>(0,u.jsx)(d.qr,{children:(0,u.jsx)("img",{src:"".concat(v,"/pic/shop/").concat(o,"/review/").concat(e.ireview,"/").concat(n)})},t)))}),(0,u.jsx)(d.RC,{onSwiper:a,loop:!0,spaceBetween:10,slidesPerView:5,freeMode:!0,watchSlidesProgress:!0,modules:[x.U1,x.Vx,x.WO],className:"mySwiper",children:null===e||void 0===e?void 0:e.pics.map(((n,t)=>(0,u.jsx)(d.qr,{children:(0,u.jsx)("img",{src:"".concat(v,"/pic/shop/").concat(o,"/review/").concat(e.ireview,"/").concat(n)})},t)))})]}),(0,u.jsxs)(p.jh,{children:[(0,u.jsxs)(p.O5,{children:[(0,u.jsxs)(p.$5,{children:[(0,u.jsx)("div",{children:(0,u.jsx)("img",{src:"/assets/images/favicon.png",alt:""})}),(0,u.jsx)("div",{children:(0,u.jsx)("span",{children:null===e||void 0===e?void 0:e.nickname})})]}),(0,u.jsx)(p.Hr,{children:(0,u.jsx)("span",{children:T})}),(0,u.jsx)("div",{children:(0,u.jsx)(c.A,{star:null===e||void 0===e?void 0:e.star})})]}),(0,u.jsx)(p.ar,{children:(0,u.jsx)("span",{children:null===e||void 0===e?void 0:e.review})})]})]})})}),(0,u.jsx)("div",{}),1===(null===e||void 0===e?void 0:e.exist)?(0,u.jsx)("div",{style:{marginBottom:"10px"},children:(0,u.jsxs)(p.Ub,{children:[(0,u.jsxs)(p.Tk,{children:[(0,u.jsx)(p.Yh,{children:(0,u.jsx)("span",{children:"\uc0ac\uc7a5\ub2d8"})}),(0,u.jsx)(p.Fu,{children:(0,u.jsx)("span",{children:S})})]}),(0,u.jsx)(p.uv,{children:(0,u.jsx)("span",{children:null===e||void 0===e?void 0:e.comment})})]})}):(0,u.jsxs)("div",{style:{marginTop:"30px",marginBottom:"30px"},children:[(0,u.jsx)("div",{style:{float:"right",marginBottom:"20px"},children:(0,u.jsx)(p.Gh,{onClick:E?()=>{_(!1)}:()=>{_(!0)},children:(0,u.jsx)("span",{children:E?"\uc791\uc131\ucde8\uc18c":"\ub2f5\uae00\uc791\uc131"})})}),E?(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{children:(0,u.jsx)(p.N9,{placeholder:"\ub2f5\uae00\uc744 \ub0a8\uaca8\uc8fc\uc138\uc694.",name:"comment",value:b.comment,maxLength:30,onChange:n=>(n=>{k({...b,[n.target.name]:n.target.value}),console.log("change",b)})(n)})}),(0,u.jsx)(p.h6,{children:(0,u.jsx)(p.Gh,{onClick:()=>(async(n,e)=>{k((t=>({...t,ireview:n,checkShop:e}))),await j.mutate({...b,ireview:n,checkShop:e})})(null===e||void 0===e?void 0:e.ireview,null===e||void 0===e?void 0:e.checkShop),children:(0,u.jsx)("span",{children:"\uc791\uc131\uc644\ub8cc"})})})]}):null]})]})},A=[{checkShop:0,ireview:0,ishop:0,iuser:0,star:0,nickname:"",comment:"",exist:0,review:"",createdAt:"",updatedAt:"",pics:[""]}],j=()=>{const{page:n,size:e,moveToSize:t}=(0,r.A)(),x={page:n,size:e},[d,c]=(0,l.useState)(!1),{data:f}=(0,i.I)({queryKey:["reviewData",x,d],queryFn:()=>(0,a.F1)({params:x})}),[g,h]=(0,l.useState)(null),m=f||A;console.log("\ub370\uc774\ud130",m);return(0,u.jsxs)(p.N_,{children:[(0,u.jsx)(o.mX,{children:(0,u.jsx)("div",{className:"page-title",children:"\ub9e4\uc7a5 \ub9ac\ubdf0 \uad00\ub9ac"})}),(0,u.jsx)("div",{style:{width:"1080px",display:"flex",flexWrap:"wrap",justifyContent:"space-around",gap:"50px"},children:null===m||void 0===m?void 0:m.map(((n,e)=>(0,u.jsx)("div",{style:{flex:"1 0 30%",maxWidth:"30%"},children:(0,u.jsx)(w,{reviewData:m[e]})},null===n||void 0===n?void 0:n.ireview)))}),(0,u.jsx)("div",{style:{display:"flex",width:"1080px",justifyContent:"center",paddingBottom:"30px",paddingTop:"80px"},children:(0,u.jsx)(s.k,{onClick:()=>{t({size:e+3})},children:(0,u.jsx)("span",{children:"\ub354\ubcf4\uae30"})})})]})}},781:(n,e,t)=>{t.d(e,{Q8:()=>h,Ud:()=>m,c4:()=>f,dZ:()=>g,qS:()=>y});var i,l,a,o,s,r,p,x=t(7528),d=t(5903),c=t(255);const f=d.A.div(i||(i=(0,x.A)(["\n  position: relative;\n  margin-top: 114px;\n"]))),g=d.A.div(l||(l=(0,x.A)(["\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n"]))),h=d.A.div(a||(a=(0,x.A)(["\n  position: fixed;\n  display: flex;\n  align-items: flex-start;\n  width: 210px;\n  height: 1530px;\n  padding: 16px 40px;\n  gap: 10px;\n  background-color: #202734;\n  z-index: 996;\n"]))),m=d.A.div(o||(o=(0,x.A)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  button {\n    display: flex;\n    align-items: center;\n    font-family: Pretendard;\n    font-size: ",";\n    color: ",";\n    font-style: normal;\n    font-weight: 400;\n    line-height: 40px;\n    border: none;\n    background: none;\n    margin-bottom: 10px;\n    cursor: pointer;\n  }\n"])),c.Z.strong,c.J.g600),y=d.A.div(s||(s=(0,x.A)(["\n  position: relative;\n  width: calc(100% - 210px);\n  /* background-color: pink; */\n"])));d.A.div(r||(r=(0,x.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n"]))),d.A.div(p||(p=(0,x.A)(["\n  display: flex;\n  img {\n    width: 20px;\n    height: 20px;\n  }\n"])))},5980:(n,e,t)=>{t.d(e,{$5:()=>F,BD:()=>J,Fu:()=>C,Gh:()=>P,Hr:()=>q,N9:()=>S,N_:()=>z,O5:()=>L,Tk:()=>T,Ub:()=>O,Yh:()=>M,ar:()=>B,f5:()=>G,h6:()=>D,jh:()=>U,s4:()=>H,uv:()=>N});var i,l,a,o,s,r,p,x,d,c,f,g,h,m,y,u,v,w,A,j,b=t(7528),k=t(5903),E=t(4764),_=t(255);const z=k.A.div(i||(i=(0,b.A)(["\n  width: 1080px;\n  padding-left: 20px;\n  margin-top: 85px;\n  margin-bottom: 50px;\n  margin-left: 210px;\n"]))),D=(k.A.div(l||(l=(0,b.A)(["\n  display: flex;\n"]))),k.A.div(a||(a=(0,b.A)(["\n  float: right;\n  padding: 20px 0px;\n"])))),S=(0,k.A)(E.A)(o||(o=(0,b.A)(['\n  display: flex;\n  width: 306px;\n  height: 44px;\n  padding: 10px 20px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n  overflow: hidden;\n  resize: none;\n\n  border-radius: 10px;\n  border: 1px solid var(--gray-scale-500, #8f8f8f);\n  background: #fff;\n\n  font-size: 14px;\n  font-family: "Pretendard";\n']))),O=k.A.div(s||(s=(0,b.A)(["\n  width: 306px;\n  /* height: 108px; */\n  flex-shrink: 0;\n  /* gap: 20px; */\n\n  border-radius: 10px;\n  border: 1px solid var(--gray-scale-500, #8f8f8f);\n  background: #fff;\n\n  display: flex;\n  width: 306px;\n  padding: 15px 20px;\n  gap: 10px;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-start;\n"]))),T=k.A.div(r||(r=(0,b.A)(["\n  width: 306px;\n  /* height: 44px; */\n  /* padding: 10px 20px; */\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  /* flex-shrink: 0; */\n"]))),N=k.A.div(p||(p=(0,b.A)(["\n  display: flex;\n  width: 259px;\n  height: 60px;\n  flex-direction: column;\n  justify-content: center;\n  flex-shrink: 0;\n\n  span {\n    color: #000;\n    font-family: DAEAM_LEE_TAE_JOON;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 125%; /* 13.75px */\n  }\n"]))),M=k.A.div(x||(x=(0,b.A)(["\n  span {\n    color: #000;\n    font-family: DAEAM_LEE_TAE_JOON;\n    font-size: 19px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 125%; /* 17.5px */\n  }\n"]))),C=k.A.div(d||(d=(0,b.A)(["\n  span {\n    color: var(--gray-scale-500, #8f8f8f);\n    text-align: center;\n    font-family: DAEAM_LEE_TAE_JOON;\n    font-size: 11px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 125%; /* 13.75px */\n  }\n"]))),P=k.A.button(c||(c=(0,b.A)(["\n  cursor: pointer;\n  display: flex;\n  /* width: 64px; */\n  /* height: 35px; */\n  padding: 5px 10px;\n  flex-direction: column;\n  /* justify-content: center; */\n  /* align-items: center; */\n  gap: 10px;\n  flex-shrink: 0;\n\n  border-radius: 10px;\n  border: 2px solid var(--sub, #066e52);\n  background: #fff;\n  span {\n    color: var(--primary, #d60117);\n    text-align: center;\n    font-family: DAEAM_LEE_TAE_JOON;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 125%; /* 23.75px */\n  }\n"]))),J=(k.A.div(f||(f=(0,b.A)(["\n  position: relative;\n  padding: 20px 35px;\n"]))),k.A.div(g||(g=(0,b.A)(["\n  float: right;\n  display: flex;\n  gap: 10px;\n"]))),k.A.div(h||(h=(0,b.A)(["\n  display: flex;\n  flex-direction: column;\n  /* justify-content: space-around; */\n  justify-content: center;\n  align-items: center;\n  /* padding: 80px 0px; */\n  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1),\n    0px 1px 3px 0px rgba(0, 0, 0, 0.1);\n"])))),F=k.A.div(m||(m=(0,b.A)(['\n  display: flex;\n  width: 132px;\n  align-items: center;\n  gap: 10px;\n\n  img {\n    width: 30px;\n    height: 30px;\n    border-radius: 30px;\n  }\n  span {\n    font-size: 14px;\n    font-family: "DAEAM_LEE_TAE_JOON";\n  }\n']))),L=k.A.div(y||(y=(0,b.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 5px;\n"]))),B=k.A.div(u||(u=(0,b.A)(['\n  width: 300px;\n  height: 40px;\n  span {\n    color: #000;\n\n    /* Rugular 14 */\n    font-family: "DAEAM_LEE_TAE_JOON";\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 125%; /* 17.5px */\n  }\n']))),q=k.A.div(v||(v=(0,b.A)(["\n  display: flex;\n  width: 100px;\n  height: 18px;\n  flex-direction: column;\n  justify-content: center;\n\n  span {\n    color: ",';\n    /* Rugular 14 */\n    font-family: "DAEAM_LEE_TAE_JOON";\n    font-size: 11px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 125%; /* 17.5px */\n  }\n'])),_.J.g500),U=k.A.div(w||(w=(0,b.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 20px;\n  margin: 10px;\n"]))),H=k.A.div(A||(A=(0,b.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  /* gap: 20px; */\n  margin: 10px;\n"]))),G=k.A.div(j||(j=(0,b.A)(["\n  /* img {\n    width: 320px;\n  } */\n  /* height: 3; */\n  /* color: transparent; */\n"])))},162:()=>{}}]);
//# sourceMappingURL=4101.eb47b712.chunk.js.map