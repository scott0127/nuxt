import{u as o}from"./asyncData.0235875e.js";import{a4 as c,N as n,O as s,P as r,u as _,C as i}from"./swiper-vue.36d43156.js";import"./entry.6ac1e937.js";const l={class:"my-24 flex flex-col items-center"},m=s("p",{class:"text-4xl text-gray-600"}," 瀏覽次數 ",-1),p={class:"mt-4 text-6xl font-semibold text-sky-400"},k={__name:"useAsyncData",async setup(u){let t,e;const{data:a}=([t,e]=c(()=>o("count",()=>$fetch("/api/count"))),t=await t,e(),t);return(x,f)=>(i(),n("div",l,[m,s("span",p,r(_(a)),1)]))}};export{k as default};
