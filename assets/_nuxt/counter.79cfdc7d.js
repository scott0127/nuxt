import{_ as c}from"./nuxt-link.1d18d295.js";import{y as i}from"./entry.3c1908ba.js";import{G as a,K as t,Y as l,u as s,P as u,O as f,F as x,Z as _}from"./swiper-vue.20d02af6.js";const m={class:"bg-white py-24"},d={class:"flex flex-col items-center"},p=t("h1",{class:"text-blue-600 text-5xl font-mario"}," 這裡是使用pinia的state管理 ",-1),g=t("h1",{class:"text-green-600 text-5xl font-mario"}," 注意有使用persist state所以重新整理值不變 ",-1),h={class:"text-9xl font-semibold text-sky-600"},k={class:"mt-8 flex flex-row"},y={class:"mt-8"},B={__name:"counter",setup(b){const e=i();return(v,o)=>{const r=c;return x(),a("div",m,[t("div",d,[p,g,t("span",h,l(s(e).count),1),t("div",k,[t("button",{class:"font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2",onClick:o[0]||(o[0]=(...n)=>s(e).Increment&&s(e).Increment(...n))}," 增加 "),t("button",{class:"font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2",onClick:o[1]||(o[1]=(...n)=>s(e).Decrement&&s(e).Decrement(...n))}," 減少 ")]),t("div",y,[u(r,{to:"/"},{default:f(()=>[_(" 回首頁 ")]),_:1})])])])}}};export{B as default};
