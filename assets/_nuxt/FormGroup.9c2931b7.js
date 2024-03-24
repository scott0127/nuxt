import{u as j}from"./Input.09ccb631.js";import{_ as w,m as C,a as v}from"./entry.e0422134.js";import{d as q,t as S,i as G,c as n,a as I,p as N,F as r,G as a,H as s,K as B,a0 as l,Q as i,M as t,a2 as o,Z as d,Y as p,a5 as m,R as O}from"./swiper-vue.c555b90e.js";const P={wrapper:"",label:{wrapper:"flex content-center items-center justify-between",base:"block font-medium text-gray-700 dark:text-gray-200",required:"after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},container:"mt-1 relative",description:"text-gray-500 dark:text-gray-400",hint:"text-gray-500 dark:text-gray-400",help:"mt-2 text-gray-500 dark:text-gray-400",error:"mt-2 text-red-500 dark:text-red-400",default:{size:"sm"}},h=C(v.ui.strategy,v.ui.formGroup,P),R=q({inheritAttrs:!1,props:{name:{type:String,default:null},size:{type:String,default:null,validator(e){return Object.keys(h.size).includes(e)}},label:{type:String,default:null},description:{type:String,default:null},required:{type:Boolean,default:!1},help:{type:String,default:null},error:{type:[String,Boolean],default:null},hint:{type:String,default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0},eagerValidation:{type:Boolean,default:!1}},setup(e){const{ui:f,attrs:g}=j("formGroup",S(e,"ui"),h,S(e,"class")),u=G("form-errors",null),y=n(()=>{var $,z;return e.error&&typeof e.error=="string"||typeof e.error=="boolean"?e.error:(z=($=u==null?void 0:u.value)==null?void 0:$.find(V=>V.path===e.name))==null?void 0:z.message}),b=n(()=>f.value.size[e.size??h.default.size]),k=I();return N("form-group",{error:y,inputId:k,name:n(()=>e.name),size:n(()=>e.size),eagerValidation:n(()=>e.eagerValidation)}),{ui:f,attrs:g,inputId:k,size:b,error:y}}}),A=["for"];function F(e,f,g,u,y,b){return r(),a("div",t({class:e.ui.wrapper},e.attrs),[e.label||e.$slots.label?(r(),a("div",{key:0,class:s([e.ui.label.wrapper,e.size])},[B("label",{for:e.inputId,class:s([e.ui.label.base,e.required?e.ui.label.required:""])},[e.$slots.label?l(e.$slots,"label",i(t({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),a(o,{key:1},[d(p(e.label),1)],64))],10,A),e.hint||e.$slots.hint?(r(),a("span",{key:0,class:s([e.ui.hint])},[e.$slots.hint?l(e.$slots,"hint",i(t({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),a(o,{key:1},[d(p(e.hint),1)],64))],2)):m("",!0)],2)):m("",!0),e.description||e.$slots.description?(r(),a("p",{key:1,class:s([e.ui.description,e.size])},[e.$slots.description?l(e.$slots,"description",i(t({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),a(o,{key:1},[d(p(e.description),1)],64))],2)):m("",!0),B("div",{class:s([e.label?e.ui.container:""])},[l(e.$slots,"default",i(O({error:e.error}))),typeof e.error=="string"&&e.error||e.$slots.error?(r(),a("p",{key:0,class:s([e.ui.error,e.size])},[e.$slots.error?l(e.$slots,"error",i(t({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),a(o,{key:1},[d(p(e.error),1)],64))],2)):e.help||e.$slots.help?(r(),a("p",{key:1,class:s([e.ui.help,e.size])},[e.$slots.help?l(e.$slots,"help",i(t({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),a(o,{key:1},[d(p(e.help),1)],64))],2)):m("",!0)],2)],16)}const M=w(R,[["render",F]]);export{M as _};
