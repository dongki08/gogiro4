"use strict";(self.webpackChunkteam1_project=self.webpackChunkteam1_project||[]).push([[8338],{7402:(e,o,t)=>{t.d(o,{Em:()=>r,Ew:()=>i,Hh:()=>l,Ol:()=>d});var a=t(7154);const n="".concat("","/api/user"),c="".concat("","/api/owner"),s="".concat("","/api/admin"),l=async e=>{let{authParam:o}=e;try{const e={headers:{"Content-Type":"application/json"}},t={email:o.email,upw:o.upw};return(await a.A.post("".concat(n,"/signin"),t,e)).data}catch(t){throw console.log(t),t}},r=async e=>{let{authParam:o}=e;try{const e={headers:{"Content-Type":"application/json"}},t={email:o.email,upw:o.upw},n=await a.A.post("".concat(c,"/signin"),t,e);if(n&&n.status<400)return console.log(n.data),n.data;console.log("")}catch(t){console.log(t)}},i=async e=>{let{signUpData:o}=e;try{return(await a.A.post("".concat("","/owner/signup"),o)).data}catch(t){throw console.log(""),t}},d=async e=>{let{authParam:o}=e;try{const e={headers:{"Content-Type":"application/json"}},t={email:o.email,upw:o.upw},n=await a.A.post("".concat(s,"/signin"),t,e);if(n&&n.status<400)return console.log(n.data),n.data;console.log("")}catch(t){console.log(t)}}},6957:(e,o,t)=>{t.d(o,{i:()=>a});const a=""},1054:(e,o,t)=>{t.d(o,{DP:()=>r,F1:()=>i,i$:()=>c,uG:()=>d,yA:()=>l});var a=t(7154),n=t(5940);const c="",s="".concat(c,"/api"),l=async e=>{let{isLogin:o,ishop:t}=e;try{const e={headers:{"Content-Type":"application/json"}},c=o?n.A:a.A,l=await c.get("".concat(s,"/shop/").concat(t),e);if("2"===l.status.toString().charAt(0))return console.log("\ubaa9\ub85d \ud638\ucd9c \uc131\uacf5"),l.data;console.log("\ubaa9\ub85d \ud638\ucd9c \uc624\ub958")}catch(c){console.log(c)}},r=async e=>{try{const o={ishop:e},t={headers:{"Content-Type":"application/json"}},a=await n.A.post("".concat(s,"/shop/bookmark"),o,t);console.log("check",a.data)}catch(o){console.log(o)}},i=async()=>{try{return(await a.A.get("/json/reviews.json")).data}catch(e){console.log("loading error")}},d=async e=>{let{fullAddress:o,successCoordFn:t}=e;console.log("\ub118\uaca8\uc9d0",o);try{const e=(await a.A.get("https://dapi.kakao.com/v2/local/search/address.json",{params:{query:o},headers:{Authorization:"KakaoAK ".concat("ccafcf970012e00e0c0d46fb99d06012")}})).data.documents[0];console.log("\uc704\ub3c4: ".concat(e.y,", \uacbd\ub3c4: ").concat(e.x)),t(e)}catch(n){console.log(n)}}},2395:(e,o,t)=>{t.d(o,{a:()=>c});var a=t(831),n=t(6868);const c=(0,a.eU)({key:"atomAdminState",default:(0,n.Ri)("member")||{result:0}})},613:(e,o,t)=>{t.d(o,{A:()=>p});var a=t(5043),n=t(3216),c=t(5475),s=t(8648),l=t(9396);const r=function(){const[e,o]=(0,a.useState)({isOpen:!1,title:"",content:"",confirmFn:null,cancelFn:null});return(0,n.Zp)(),{isSelectModal:e,openSelectModal:(e,t,a,n)=>{o({isOpen:!0,title:e,content:t,confirmFn:a,cancelFn:n})},confirmSelectModal:()=>{o((e=>({...e,isOpen:!1})))},cancelSelectModal:()=>{o((e=>({...e,isOpen:!1})))}}};var i=t(2156);const d=function(){const[e,o]=(0,a.useState)({isOpen:!1,content:"",callFn:null});return(0,n.Zp)(),{isEmptyModal:e,openEmptyModal:(e,t)=>{o({isOpen:!0,content:e,callFn:t})},closeEmptyModal:()=>{o((e=>({...e,isOpen:!1})))}}},p=()=>{const e=(0,n.Zp)(),[o,t]=(0,c.ok)(),{isModal:p,openModal:h,closeModal:g,moveToLogin:u,shutModal:m}=(0,l.A)(),{isLogin:y}=(0,i.A)(),{isSelectModal:f,openSelectModal:v,confirmSelectModal:T,cancelSelectModal:S}=r(),{isEmptyModal:k,openEmptyModal:j,closeEmptyModal:A}=d(),M=o.get("page")?parseInt(o.get("page")):1,w=o.get("search")||"",x=o.get("category")?parseInt(o.get("category")):0,P=o.get("filter")?parseInt(o.get("filter")):0,b=(o.get("check")&&parseInt(o.get("check")),(0,c.PI)({page:M,search:w,category:x,filter:P}).toString()),[O,E]=(0,a.useState)(!1);return{page:M,search:w,category:x,filter:P,MoveToFilter:o=>{let t="";if(o){const e=(0,s.f)(o.filter,P);t=(0,c.PI)({filter:e}).toString()}else t=b;e({pathname:"../list",search:t})},MoveToList:o=>{let t="";if(o){const e=(0,s.f)(o.category,x);t=(0,c.PI)({category:e}).toString()}else t=b;e({pathname:"../list",search:t})},moveToRead:o=>{e({pathname:"../detail/".concat(o),search:b})},moveToSearch:o=>{let t="";if(o){const e=(0,s.f)(o.search,w);t=(0,c.PI)({search:e}).toString(),console.log("queryStr:",t),E(!O)}else t=b;e({pathname:"../list",search:t})},refresh:O,isModal:p,openModal:h,closeModal:g,moveToLogin:u,moveToReser:o=>{e({pathname:"../reservation/".concat(o),search:b})},MoveToPage:o=>{let t="";if(o){const e=(0,s.f)(o.page,M);t=(0,c.PI)({page:e}).toString()}else t=b;e({pathname:"../list",search:t})},moveToReview:(o,t,a,n)=>{console.log(a),e({pathname:"../../meat/review/".concat(o),search:"name=".concat(a,"&checkShop=").concat(t,"&ishop=").concat(n,"&").concat(b)})},isSelectModal:f,openSelectModal:v,confirmSelectModal:T,cancelSelectModal:S,moveToBReser:(o,t,a)=>{o.stopPropagation(),y?e({pathname:"../../butcher/pickup/".concat(t),search:"name=".concat(a,"&").concat(b)}):h("\ub85c\uadf8\uc778 \ud544\uc694","\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4.",u),console.log(a)},openEmptyModal:j,isEmptyModal:k,closeEmptyModal:A,moveToPayment:(o,t)=>{console.log("payment, pk :",o,"amount :",t),e({pathname:"/payment",search:"pk=".concat(o,"&amount=").concat(t)})},shutModal:m}}},2156:(e,o,t)=>{t.d(o,{A:()=>p});var a=t(7154),n=t(3216),c=t(831),s=t(7402),l=t(6868);const r=(0,c.eU)({key:"atomUserState",default:(0,l.Ri)("member")||{result:0}});var i=t(2395);const d=(0,c.eU)({key:"atomSupervisorState",default:(0,l.Ri)("member")||{result:0}}),p=()=>{var e;const[o,t]=(0,c.L4)(r),[p,h]=(0,c.L4)(i.a),[g,u]=(0,c.L4)(d),m=(0,c.E0)(r),y=(0,c.E0)(i.a),f=(0,c.E0)(d),v=(0,n.Zp)(),T="".concat("","/api/user"),S=1==o.result,k=(null===p||void 0===p||null===(e=p.shopName)||void 0===e?void 0:e.length)>0;console.log("Test3",k),console.log("Test4",p.shopName);const j=1==g.result,A=e=>{t(e),(0,l.TV)("member",JSON.stringify(e),1)},M=e=>{h(e),(0,l.TV)("member",JSON.stringify(e),1)},w=e=>{u(e),(0,l.TV)("member",JSON.stringify(e),1)};return{adminState:p,userState:o,doLoginTS:async e=>{let{authParam:o}=e;const t=await(0,s.Hh)({authParam:o});return A(t),t},doAdminLoginTS:async e=>{let{authParam:o}=e;const t=await(0,s.Em)({authParam:o});return M(t),console.log("test22",t),t},doSupervisorLoginTS:async e=>{let{authParam:o}=e;const t=await(0,s.Ol)({authParam:o});return w(t),t},doLogout:async()=>{m(),y(),f(),(0,l.zs)("member");try{const e={headers:{"Content-Type":"application/json"}},o=await a.A.post("".concat(T,"/signout"),e);200===o.status&&(console.log("rt cookie \uc0ad\uc81c"),console.log(o.data))}catch(e){}},moveToPath:e=>{v({pathname:e},{replace:!0})},moveToLogin:()=>{v("/login")},loginComplete:()=>{v("/")},isLogin:S,isAdminLogin:k,isSupervisorLogin:j}}},9396:(e,o,t)=>{t.d(o,{A:()=>c});var a=t(5043),n=t(3216);const c=function(){const[e,o]=(0,a.useState)({isOpen:!1,title:"",content:"",callFn:null}),t=(0,n.Zp)();return{isModal:e,openModal:(e,t,a)=>{o({isOpen:!0,title:e,content:t,callFn:a})},closeModal:()=>{o((e=>({...e,isOpen:!1})))},moveToLogin:()=>{o((e=>({...e,isOpen:!1}))),t("/login")},shutModal:()=>{o((e=>({...e,isOpen:!1})))}}}},8338:(e,o,t)=>{t.r(o),t.d(o,{default:()=>r});var a=t(5043),n=t(5940),c=t(6957);var s=t(613),l=t(579);const r=()=>{const[e,o]=(0,a.useState)(),{page:t}=(0,s.A)();(0,a.useEffect)((()=>{(async e=>{let{params:o,successFn:t,failFn:a,errorFn:s}=e;try{const e=await n.A.get("".concat(c.i,"/api/admin/black"),{params:o});"2"===e.status.toString().charAt(0)?t(e.data):a("\ubb38\uc81c\uac00 \uc788\uc5b4!")}catch(l){s(l),console.log("\uc720\uc800 \uad00\ub9ac \uc11c\ubc84 \uc624\ub958")}})({params:{page:t},successFn:r,failFn:i,errorFn:d})}),[t]);const r=e=>{o(e)},i=e=>{console.log(e)},d=e=>{console.log(e)};return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"\ud14c\uc774\ube14 \uc608\uc2dc\uc785\ub2c8\ub2e4 \ub9f5\ud3ec\ud568"}),(0,l.jsx)("div",{children:(0,l.jsxs)("table",{children:[(0,l.jsxs)("thead",{children:[(0,l.jsx)("th",{children:"\uc21c\ubc88"}),(0,l.jsx)("th",{children:"\uc774\ub984"}),(0,l.jsx)("th",{children:"ID"}),(0,l.jsx)("th",{children:"\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638"}),(0,l.jsx)("th",{children:"\uc0c1\ud0dc"}),(0,l.jsx)("th",{children:"\uacc4\uc815\uc7a0\uae08"})]}),(0,l.jsx)("tbody",{children:null===e||void 0===e?void 0:e.map(((e,o)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:o}),(0,l.jsx)("td",{children:null===e||void 0===e?void 0:e.name}),(0,l.jsx)("td",{children:null===e||void 0===e?void 0:e.id}),(0,l.jsx)("td",{children:null===e||void 0===e?void 0:e.number}),(0,l.jsx)("td",{children:null===e||void 0===e?void 0:e.state}),(0,l.jsx)("td",{children:(0,l.jsx)("button",{children:"\uc7a0\uae08"})}),(0,l.jsx)("td",{children:(0,l.jsx)("button",{children:"\ud574\uc81c"})})]},e.iuser)))})]})})]})})}},5940:(e,o,t)=>{t.d(o,{A:()=>l});var a=t(7154),n=t(6868),c=t(1054);const s=a.A.create();s.interceptors.request.use((e=>{console.log("\uc804\ub2ec",e);const o=(0,n.Ri)("member");if(console.log("get Token : ",o),!o)return console.log("not found cookie info"),Promise.reject({response:{data:{error:"please login"}}});console.log("toke info");const{accessToken:t}=o;return console.log("acessToken : ",t),e.headers.Authorization="Bearer ".concat(t),e}),(e=>(console.log("request fail :",e),Promise.reject(e)))),s.interceptors.response.use((async e=>{console.log("Response \uc804\ucc98\ub9ac ....",e);const o=e.data;if(console.log("1. Response \uc624\uae30\uc804 \uc11c\ubc84 \uc804\ub2ec\ud574\uc900 \ub370\uc774\ud130",o),o&&"ERROR_ACCESS_TOKEN"===o.error){console.log("2. \uc77c\ubc18\uc801 \uc624\ub958\uac00 \uc544\ub2cc \uc561\uc138\uc2a4 \ud1a0\ud070 \uc5d0\ub7ec!! \uc785\ub2c8\ub2e4. "),console.log("3. \uc0c8\ub85c\uc6b4 \ud1a0\ud070\uc744 \uc694\uccad\ud574\uc57c \ud569\ub2c8\ub2e4. "),console.log("4. \ucfe0\ud0a4\uc5d0 \uc788\ub294 \uc815\ubcf4\ub97c \uc77d\uc5b4\uc11c, \ub2e4\uc2dc \uc2dc\ub3c4\ud569\ub2c8\ub2e4.");const o=(0,n.Ri)("member");console.log("5. \ucfe0\ud0a4 \ud1a0\ud070 \uc815\ubcf4 AccessToken ",o.accessToken),console.log("6. \ucfe0\ud0a4 \ud1a0\ud070 \uc815\ubcf4 RefreshToken ",o.refreshToken),console.log("7. \uc704\uc758 \uc815\ubcf4\ub85c \uc0c8\ub85c\uc6b4 \ud1a0\ud070\uc744 \uc694\uccad\ud569\ub2c8\ub2e4.");const t=await(async(e,o)=>{const t=c.i$,n={headers:{Authorization:"Bearer ".concat(e)}},s=await a.A.get("".concat(t,"/api/user/refresh-token"),n);return console.log("required token"),console.log("new data :",s.data),s.data})(o.accessToken,o.refreshToken);console.log("8. \uc694\uccad \uc774\ud6c4 \ub418\ub3cc\uc544\uc640\uc11c \uc0c8\ub85c\uc6b4 \uc815\ubcf4\ub85c \ucfe0\ud0a4\ub97c \uc5c5\ub370\uc774\ud2b8 "),o.accessToken=t.accessToken,o.refreshToken=t.refreshToken,(0,n.TV)("member",JSON.stringify(o)),console.log("9. \ub370\uc774\ud130 \uc694\uccad\ud558\ub358 API \uc7ac \uc694\uccad");const s=e.config;return s.headers.Authorization="Bearer ".concat(t.accessToken),await(0,a.A)(s)}return e}),(e=>(console.log("res fail : ",e),Promise.reject(e))));const l=s},8648:(e,o,t)=>{t.d(o,{T:()=>n,f:()=>a});const a=(e,o)=>e||o,n=(e,o)=>e||o}}]);
//# sourceMappingURL=8338.f2b085ab.chunk.js.map