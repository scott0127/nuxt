import{u as o}from"./asyncData.9776767f.js";import{ag as c,G as n,K as s,Y as r,u as _,F as i}from"./swiper-vue.b9df4d28.js";import"./entry.590258c2.js";const l={class:"my-24 flex flex-col items-center"},m=s("p",{class:"text-4xl text-gray-600"}," 瀏覽次數 ",-1),p={class:"mt-4 text-6xl font-semibold text-sky-400"},g={__name:"useAsyncData",async setup(u){let t,e;const{data:a}=([t,e]=c(()=>o("count",()=>$fetch("/api/count"))),t=await t,e(),t);return(x,f)=>(i(),n("div",l,[m,s("span",p,r(_(a)),1)]))}};export{g as default};
