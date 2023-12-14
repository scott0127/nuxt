import $ from"./Icon.2f4cdb77.js";import{_ as w,U as j,m as _,a as g,t as m}from"./entry.faed100c.js";import{d as v,c as s,F as n,N as b,G as l,H as i,t as A,a as B,w as E,M as P,Y as f,a4 as x,$ as I}from"./swiper-vue.b13dfab9.js";import{u as O,t as y}from"./select.8adce3d4.js";const U={wrapper:"relative inline-flex items-center justify-center flex-shrink-0",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-full",text:"font-medium leading-none text-gray-900 dark:text-white truncate",placeholder:"font-medium leading-none text-gray-500 dark:text-gray-400 truncate",size:{"3xs":"h-4 w-4 text-[8px]","2xs":"h-5 w-5 text-[10px]",xs:"h-6 w-6 text-xs",sm:"h-8 w-8 text-sm",md:"h-10 w-10 text-base",lg:"h-12 w-12 text-lg",xl:"h-14 w-14 text-xl","2xl":"h-16 w-16 text-2xl","3xl":"h-20 w-20 text-3xl"},chip:{base:"absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",background:"bg-{color}-500 dark:bg-{color}-400",position:{"top-right":"top-0 right-0","bottom-right":"bottom-0 right-0","top-left":"top-0 left-0","bottom-left":"bottom-0 left-0"},size:{"3xs":"h-[4px] min-w-[4px] text-[4px] p-px","2xs":"h-[5px] min-w-[5px] text-[5px] p-px",xs:"h-1.5 min-w-[0.375rem] text-[6px] p-px",sm:"h-2 min-w-[0.5rem] text-[7px] p-0.5",md:"h-2.5 min-w-[0.625rem] text-[8px] p-0.5",lg:"h-3 min-w-[0.75rem] text-[10px] p-0.5",xl:"h-3.5 min-w-[0.875rem] text-[11px] p-1","2xl":"h-4 min-w-[1rem] text-[12px] p-1","3xl":"h-5 min-w-[1.25rem] text-[14px] p-1"}},icon:{base:"text-gray-500 dark:text-gray-400 flex-shrink-0",size:{"3xs":"h-2 w-2","2xs":"h-2.5 w-2.5",xs:"h-3 w-3",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6",xl:"h-7 w-7","2xl":"h-8 w-8","3xl":"h-10 w-10"}},default:{size:"sm",icon:null,chipColor:null,chipPosition:"top-right"}},N=v({props:{name:{type:String,required:!0},dynamic:{type:Boolean,default:!1}},setup(e){const t=j();return{dynamic:s(()=>{var a,o;return e.dynamic||((o=(a=t.ui)==null?void 0:a.icons)==null?void 0:o.dynamic)})}}});function M(e,t,p,a,o,d){const u=$;return e.dynamic?(n(),b(u,{key:0,name:e.name},null,8,["name"])):(n(),l("span",{key:1,class:i(e.name)},null,2))}const k=w(N,[["render",M]]),r=_(g.ui.strategy,g.ui.avatar,U),T=v({components:{UIcon:k},inheritAttrs:!1,props:{src:{type:[String,Boolean],default:null},alt:{type:String,default:null},text:{type:String,default:null},icon:{type:String,default:()=>r.default.icon},size:{type:String,default:()=>r.default.size,validator(e){return Object.keys(r.size).includes(e)}},chipColor:{type:String,default:()=>r.default.chipColor,validator(e){return["gray",...g.ui.colors].includes(e)}},chipPosition:{type:String,default:()=>r.default.chipPosition,validator(e){return Object.keys(r.chip.position).includes(e)}},chipText:{type:[String,Number],default:null},imgClass:{type:String,default:""},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:t,attrs:p}=O("avatar",A(e,"ui"),r),a=s(()=>typeof e.src=="boolean"?null:e.src),o=s(()=>(e.alt||"").split(" ").map(S=>S.charAt(0)).join("").substring(0,2)),d=s(()=>y(m(t.value.wrapper,(c.value||!a.value)&&t.value.background,t.value.rounded,t.value.size[e.size]),e.class)),u=s(()=>y(m(t.value.rounded,t.value.size[e.size]),e.imgClass)),h=s(()=>m(t.value.icon.base,t.value.icon.size[e.size])),C=s(()=>m(t.value.chip.base,t.value.chip.size[e.size],t.value.chip.position[e.chipPosition],t.value.chip.background.replaceAll("{color}",e.chipColor))),c=B(!1);E(()=>e.src,()=>{c.value&&(c.value=!1)});function z(){c.value=!0}return{ui:t,attrs:p,wrapperClass:d,imgClass:u,iconClass:h,chipClass:C,url:a,placeholder:o,error:c,onError:z}}}),q=["alt","src"];function D(e,t,p,a,o,d){const u=k;return n(),l("span",{class:i(e.wrapperClass)},[e.url&&!e.error?(n(),l("img",P({key:0,class:e.imgClass,alt:e.alt,src:e.url},e.attrs,{onError:t[0]||(t[0]=(...h)=>e.onError&&e.onError(...h))}),null,16,q)):e.text?(n(),l("span",{key:1,class:i(e.ui.text)},f(e.text),3)):e.icon?(n(),b(u,{key:2,name:e.icon,class:i(e.iconClass)},null,8,["name","class"])):e.placeholder?(n(),l("span",{key:3,class:i(e.ui.placeholder)},f(e.placeholder),3)):x("",!0),e.chipColor?(n(),l("span",{key:4,class:i(e.chipClass)},f(e.chipText),3)):x("",!0),I(e.$slots,"default")],2)}const R=w(T,[["render",D]]);export{k as _,R as a};
