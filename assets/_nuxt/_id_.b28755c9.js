import{v as c,P as a}from"./entry.3537de88.js";import{G as n,K as t,Z as e,Y as o,u as i,F as d}from"./swiper-vue.14f7f984.js";const _={class:"bg-white py-24"},x={class:"flex flex-col items-center"},p=t("h1",{class:"text-3xl text-gray-600"}," 這裡是 Users 動態路由頁面 ",-1),m={class:"my-8 text-3xl text-gray-600"},u={class:"text-5xl font-semibold text-blue-600"},h={class:"my-8 text-3xl text-gray-600"},f={class:"text-5xl font-semibold text-blue-600"},y={class:"my-8 text-3xl text-gray-600"},b={class:"text-5xl font-semibold text-blue-600"},k={__name:"[id]",setup(g){const l=c(),{id:r}=l.params;return(s,v)=>(d(),n("div",_,[t("div",x,[p,t("p",m,[e(" 匹配到的 Id: "),t("span",u,o((s._.provides[a]||s.$route).params),1)]),t("p",h,[e(" 匹配到的 Id: "),t("span",f,o((s._.provides[a]||s.$route).params.id),1)]),t("p",y,[e(" 匹配到的 Id: "),t("span",b,o(i(r)),1)])])]))}};export{k as default};