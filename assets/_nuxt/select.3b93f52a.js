import{i as h,c as o,$ as w,a9 as v,g as k,al as b,am as p,d as _,F as u,N as z,G as I,H as $}from"./swiper-vue.39ec09fe.js";import{Z as B,$ as G,a0 as g,m as N,_ as M}from"./entry.5363b244.js";import j from"./Icon.52e82a76.js";function H({ui:t,props:a}){const r=k();let n=r.parent,e;for(;n&&!e;){if(n.type.name==="ButtonGroup"){e=h(`group-${n.uid}`);break}n=n.parent}const s=o(()=>e==null?void 0:e.value.children.indexOf(r));return w(()=>{e==null||e.value.register(r)}),v(()=>{e==null||e.value.unregister(r)}),{size:o(()=>(e==null?void 0:e.value.size)||a.size),rounded:o(()=>!e||s.value===-1?t.value.rounded:e.value.children.length===1?e.value.ui.rounded:s.value===0?e.value.rounded.start:s.value===e.value.children.length-1?e.value.rounded.end:"rounded-none")}}var K=B(G);function A(t,a){const r={...t};for(const n of a)delete r[n];return r}function C(t,a,r){typeof a=="string"&&(a=a.split(".").map(e=>{const s=Number(e);return isNaN(s)?e:s}));let n=t;for(const e of a){if(n==null)return r;n=n[e]}return n!==void 0?n:r}const O=(t,a,r,n,e=!1)=>{const s=b(),i=g(),x=o(()=>{var c;const l=p(a),y=p(r),d=p(n);return N((l==null?void 0:l.strategy)||((c=i.ui)==null?void 0:c.strategy),d?{wrapper:d}:{},l||{},e?C(i.ui,t,{}):{},y||{})}),f=o(()=>A(s,["class"]));return{ui:x,attrs:f}},U=_({props:{name:{type:String,required:!0},dynamic:{type:Boolean,default:!1}},setup(t){const a=g();return{dynamic:o(()=>{var n,e;return t.dynamic||((e=(n=a.ui)==null?void 0:n.icons)==null?void 0:e.dynamic)})}}});function q(t,a,r,n,e,s){const i=j;return t.dynamic?(u(),z(i,{key:0,name:t.name},null,8,["name"])):(u(),I("span",{key:1,class:$(t.name)},null,2))}const S=M(U,[["render",q]]),m={wrapper:"relative",base:"relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",rounded:"rounded-md",placeholder:"placeholder-gray-400 dark:placeholder-gray-500",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},leading:{padding:{"2xs":"ps-7",xs:"ps-8",sm:"ps-9",md:"ps-10",lg:"ps-11",xl:"ps-12"}},trailing:{padding:{"2xs":"pe-7",xs:"pe-8",sm:"pe-9",md:"pe-10",lg:"pe-11",xl:"pe-12"}},color:{white:{outline:"shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"},gray:{outline:"shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"}},variant:{outline:"shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",none:"bg-transparent focus:ring-0 focus:shadow-none"},icon:{base:"flex-shrink-0 text-gray-400 dark:text-gray-500",color:"text-{color}-500 dark:text-{color}-400",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"},leading:{wrapper:"absolute inset-y-0 start-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"ps-2",xs:"ps-2.5",sm:"ps-2.5",md:"ps-3",lg:"ps-3.5",xl:"ps-3.5"}},trailing:{wrapper:"absolute inset-y-0 end-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"pe-2",xs:"pe-2.5",sm:"pe-2.5",md:"pe-3",lg:"pe-3.5",xl:"pe-3.5"}}},default:{size:"sm",color:"white",variant:"outline",loadingIcon:"i-heroicons-arrow-path-20-solid"}},T={...m,default:{size:"sm",color:"white",variant:"outline"}};({...m});export{S as _,K as a,H as b,m as i,A as o,T as t,O as u};