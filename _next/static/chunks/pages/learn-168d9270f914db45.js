(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[128],{2036:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn",function(){return n(3219)}])},4731:function(e){e.exports={style:{fontFamily:"'__Jockey_One_d61160', '__Jockey_One_Fallback_d61160'",fontWeight:400,fontStyle:"normal"},className:"__className_d61160"}},6540:function(e){e.exports={style:{fontFamily:"'__Roboto_a34e3e', '__Roboto_Fallback_a34e3e'",fontWeight:400,fontStyle:"normal"},className:"__className_a34e3e"}},9008:function(e,t,n){e.exports=n(7828)},5114:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(3454);function s(){var e,t;let n=!window||"https:"===window.location.protocol;return{apiUrl:(n?"https":"http")+"://staging.worldguessr.com",websocketUrl:(n?"wss":"ws")+"://"+(null!==(t=null!==(e=o.env.NEXT_PUBLIC_WS_HOST)&&void 0!==e?e:"staging.worldguessr.com")&&void 0!==t?t:"localhost:3001")+"/wg"}}},3219:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var o=n(5893),s=n(4731),i=n(6540),a=n(7294),l=n(5675);n(1664);var r=n(9008),c=n(5114);function u(e){let{locale:t}=e,[n,u]=a.useState(0),[d,h]=a.useState(0);return a.useEffect(()=>{fetch((0,c.Z)().apiUrl+"/api/clues/getCluesCount").then(e=>e.json()).then(e=>{u(e.count)})},[]),a.useEffect(()=>{let e=setInterval(()=>{h(.85*d+.15*n)},20);return()=>clearInterval(e)}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r,{children:[(0,o.jsx)("title",{children:"WorldGuessr - Learn Mode"}),(0,o.jsx)("meta",{name:"description",content:"Learn Mode - Improve your Geoguessr skills by guessing & learning with community explanations of strategies you could've used to pinpoint each location."}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,o.jsx)("meta",{name:"theme-color",content:"#000000"}),(0,o.jsx)("meta",{name:"robots",content:"index, follow"})]}),(0,o.jsx)("div",{style:{top:0,left:0,position:"fixed",width:"100vw",height:"100vh",transition:"opacity 0.5s",opacity:.4,userSelect:"none"},children:(0,o.jsx)(l.default,{src:"/street1.jpg",fill:!0,alt:"Game Background",style:{objectFit:"cover",userSelect:"none"},sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"})}),(0,o.jsx)("main",{className:"home ".concat(s.className," ").concat(i.className),id:"main",children:(0,o.jsx)("div",{className:"home__content",children:(0,o.jsxs)("div",{className:"home__ui",style:{backgroundColor:"rgba(0,0,0,0.5)",padding:"20px",borderRadius:"10px"},children:[(0,o.jsx)("h1",{className:"home__title",children:"WorldGuessr"}),(0,o.jsxs)("h2",{className:"home__subtitle",children:["Learn Mode ",(0,o.jsx)("span",{className:"home__subtitle--highlight",style:{color:"orange"},children:"(Beta)"})]}),(0,o.jsx)("p",{className:"home__subtitle",style:{fontSize:"1.5em",color:"white",textShadow:"none"},children:"Inspired by a Reddit post - Improve your Geoguessr skills by guessing & learning with community explanations of strategies you could've used to pinpoint each location."}),(0,o.jsxs)("p",{className:"home__subtitle",style:{fontSize:"1.5em",color:"white",textShadow:"none"},children:[Math.round(d)," explanations contributed!",(0,o.jsx)("br",{}),(0,o.jsx)("a",{style:{color:"cyan"},target:"_blank",href:"https://discord.com/invite/ubdJHjKtrC",children:"Join our Discord"})," to become a contributor!"]}),(0,o.jsx)("button",{className:"gameBtn",onClick:()=>{window.location.href="/?learn=true"},children:"Play!"})]})})})]})}}},function(e){e.O(0,[664,675,888,774,179],function(){return e(e.s=2036)}),_N_E=e.O()}]);