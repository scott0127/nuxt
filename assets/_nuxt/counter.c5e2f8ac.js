import{_ as i}from"./nuxt-link.338abcfa.js";import{d as a,p as u}from"./entry.9667721e.js";import{N as l,O as t,P as f,u as s,F as x,E as _,C as d,Q as m}from"./swiper-vue.797db16b.js";const p=a("counter",{state:()=>({count:0}),actions:{Increment(){this.count+=1},Decrement(){this.count-=1}},getters:{doubleCount:c=>c.count*2},persist:{key:"counter",storage:u.localStorage}}),g={class:"bg-white py-24"},h={class:"flex flex-col items-center"},k=t("h1",{class:"text-blue-600 text-5xl font-mario"}," 這裡是使用pinia的state管理 ",-1),b=t("h1",{class:"text-green-600 text-5xl font-mario"}," 注意有使用persist state所以重新整理值不變 ",-1),y={class:"text-9xl font-semibold text-sky-600"},v={class:"mt-8 flex flex-row"},C={class:"mt-8"},B={__name:"counter",setup(c){const e=p();return(S,o)=>{const r=i;return d(),l("div",g,[t("div",h,[k,b,t("span",y,f(s(e).count),1),t("div",v,[t("button",{class:"font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2",onClick:o[0]||(o[0]=(...n)=>s(e).Increment&&s(e).Increment(...n))}," 增加 "),t("button",{class:"font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2",onClick:o[1]||(o[1]=(...n)=>s(e).Decrement&&s(e).Decrement(...n))}," 減少 ")]),t("div",C,[x(r,{to:"/"},{default:_(()=>[m(" 回首頁 ")]),_:1})])])])}}};export{B as default};