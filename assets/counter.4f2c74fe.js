import{_ as i}from"./nuxt-link.d754c6db.js";import{x as a,y as u,c as l,a as t,t as f,u as s,b as x,w as _,o as d,d as m}from"./entry.9855f64d.js";const p=a("counter",{state:()=>({count:0}),actions:{Increment(){this.count+=1},Decrement(){this.count-=1}},getters:{doubleCount:c=>c.count*2},persist:{key:"counter",storage:u.localStorage}}),g={class:"bg-white py-24"},h={class:"flex flex-col items-center"},b=t("h1",{class:"text-blue-600 text-5xl font-mario"}," 這裡是使用pinia的state管理 ",-1),k=t("h1",{class:"text-green-600 text-5xl font-mario"}," 注意有使用persist state所以重新整理值不變 ",-1),y={class:"text-9xl font-semibold text-sky-600"},v={class:"mt-8 flex flex-row"},w={class:"mt-8"},N={__name:"counter",setup(c){const e=p();return(S,o)=>{const r=i;return d(),l("div",g,[t("div",h,[b,k,t("span",y,f(s(e).count),1),t("div",v,[t("button",{class:"font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2",onClick:o[0]||(o[0]=(...n)=>s(e).Increment&&s(e).Increment(...n))}," 增加 "),t("button",{class:"font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2",onClick:o[1]||(o[1]=(...n)=>s(e).Decrement&&s(e).Decrement(...n))}," 減少 ")]),t("div",w,[x(r,{to:"/"},{default:_(()=>[m(" 回首頁 ")]),_:1})])])])}}};export{N as default};
