import{a as l,G as u,K as o,Y as r,u as i,F as d}from"./swiper-vue.c555b90e.js";const m={class:"mt-80"},_={__name:"database",setup(f){const a=l(null),s=l(null);function c(e){console.log(e),a.value=e.target.files[0],console.log(a.value)}const p=async()=>{const e=new FormData;e.append("username","Justin"),e.append("password","123456"),e.append("image",a.value);for(const t of e.entries())console.log(t[0]+", "+t[1]);const n=await $fetch("http://localhost:5000/api/upload",{method:"POST",body:e});s.value=n.message};return(e,n)=>(d(),u("div",m,[o("input",{type:"file",onChange:c},null,32),o("button",{onClick:p}," upload "),o("p",null,r(i(s)),1)]))}};export{_ as default};