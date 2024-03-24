import{_ as y,u as C,a as f}from"./select.bfad2383.js";import{_ as z,m as S,a as m,t as o}from"./entry.2f193c20.js";import{d as j,t as $,c as r,a as E,w as P,F as l,G as s,M as A,H as i,Y as d,N as B,a5 as w,a0 as O}from"./swiper-vue.c555b90e.js";const I={wrapper:"relative inline-flex items-center justify-center flex-shrink-0",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-full",text:"font-medium leading-none text-gray-900 dark:text-white truncate",placeholder:"font-medium leading-none text-gray-500 dark:text-gray-400 truncate",size:{"3xs":"h-4 w-4 text-[8px]","2xs":"h-5 w-5 text-[10px]",xs:"h-6 w-6 text-xs",sm:"h-8 w-8 text-sm",md:"h-10 w-10 text-base",lg:"h-12 w-12 text-lg",xl:"h-14 w-14 text-xl","2xl":"h-16 w-16 text-2xl","3xl":"h-20 w-20 text-3xl"},chip:{base:"absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",background:"bg-{color}-500 dark:bg-{color}-400",position:{"top-right":"top-0 right-0","bottom-right":"bottom-0 right-0","top-left":"top-0 left-0","bottom-left":"bottom-0 left-0"},size:{"3xs":"h-[4px] min-w-[4px] text-[4px] p-px","2xs":"h-[5px] min-w-[5px] text-[5px] p-px",xs:"h-1.5 min-w-[0.375rem] text-[6px] p-px",sm:"h-2 min-w-[0.5rem] text-[7px] p-0.5",md:"h-2.5 min-w-[0.625rem] text-[8px] p-0.5",lg:"h-3 min-w-[0.75rem] text-[10px] p-0.5",xl:"h-3.5 min-w-[0.875rem] text-[11px] p-1","2xl":"h-4 min-w-[1rem] text-[12px] p-1","3xl":"h-5 min-w-[1.25rem] text-[14px] p-1"}},icon:{base:"text-gray-500 dark:text-gray-400 flex-shrink-0",size:{"3xs":"h-2 w-2","2xs":"h-2.5 w-2.5",xs:"h-3 w-3",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6",xl:"h-7 w-7","2xl":"h-8 w-8","3xl":"h-10 w-10"}},default:{size:"sm",icon:null,chipColor:null,chipPosition:"top-right"}},a=S(m.ui.strategy,m.ui.avatar,I),N=j({components:{UIcon:y},inheritAttrs:!1,props:{src:{type:[String,Boolean],default:null},alt:{type:String,default:null},text:{type:String,default:null},icon:{type:String,default:()=>a.default.icon},size:{type:String,default:()=>a.default.size,validator(e){return Object.keys(a.size).includes(e)}},chipColor:{type:String,default:()=>a.default.chipColor,validator(e){return["gray",...m.ui.colors].includes(e)}},chipPosition:{type:String,default:()=>a.default.chipPosition,validator(e){return Object.keys(a.chip.position).includes(e)}},chipText:{type:[String,Number],default:null},imgClass:{type:String,default:""},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:t,attrs:h}=C("avatar",$(e,"ui"),a),u=r(()=>typeof e.src=="boolean"?null:e.src),x=r(()=>(e.alt||"").split(" ").map(k=>k.charAt(0)).join("").substring(0,2)),g=r(()=>f(o(t.value.wrapper,(n.value||!u.value)&&t.value.background,t.value.rounded,t.value.size[e.size]),e.class)),p=r(()=>f(o(t.value.rounded,t.value.size[e.size]),e.imgClass)),c=r(()=>o(t.value.icon.base,t.value.icon.size[e.size])),v=r(()=>o(t.value.chip.base,t.value.chip.size[e.size],t.value.chip.position[e.chipPosition],t.value.chip.background.replaceAll("{color}",e.chipColor))),n=E(!1);P(()=>e.src,()=>{n.value&&(n.value=!1)});function b(){n.value=!0}return{ui:t,attrs:h,wrapperClass:g,imgClass:p,iconClass:c,chipClass:v,url:u,placeholder:x,error:n,onError:b}}}),U=["alt","src"];function M(e,t,h,u,x,g){const p=y;return l(),s("span",{class:i(e.wrapperClass)},[e.url&&!e.error?(l(),s("img",A({key:0,class:e.imgClass,alt:e.alt,src:e.url},e.attrs,{onError:t[0]||(t[0]=(...c)=>e.onError&&e.onError(...c))}),null,16,U)):e.text?(l(),s("span",{key:1,class:i(e.ui.text)},d(e.text),3)):e.icon?(l(),B(p,{key:2,name:e.icon,class:i(e.iconClass)},null,8,["name","class"])):e.placeholder?(l(),s("span",{key:3,class:i(e.ui.placeholder)},d(e.placeholder),3)):w("",!0),e.chipColor?(l(),s("span",{key:4,class:i(e.chipClass)},d(e.chipText),3)):w("",!0),O(e.$slots,"default")],2)}const G=z(N,[["render",M]]);export{G as _};
