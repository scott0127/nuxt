import{_ as a}from"./nuxt-link.9c4b82c9.js";import{u as c}from"./state.0c0dbd8e.js";import{c as r,a as t,t as i,u as l,b as u,w as f,o as x,d as _}from"./entry.d6932131.js";const d={class:"bg-white py-24"},m={class:"flex flex-col items-center"},p={class:"text-9xl font-semibold text-sky-600"},g={class:"mt-8 flex flex-row"},h=t("p",{class:"mt-14 text-slate-500"}," 這是共享state的網頁 重新整理會隨機數 ",-1),k={class:"mt-8"},B={__name:"shareState",setup(b){const s=c("counter",()=>Math.round(Math.random()*1e3));return(y,e)=>{const o=a;return x(),r("div",d,[t("div",m,[t("span",p,i(l(s)),1),t("div",g,[t("button",{class:"font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2",onClick:e[0]||(e[0]=n=>s.value++)}," 增加 "),t("button",{class:"font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2",onClick:e[1]||(e[1]=n=>s.value--)}," 減少 ")]),h,t("div",k,[u(o,{to:"/state-pratice"},{default:f(()=>[_(" 回首頁 ")]),_:1})])])])}}};export{B as default};