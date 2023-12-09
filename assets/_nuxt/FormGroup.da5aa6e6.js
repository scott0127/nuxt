import{u as q,i as F,a as B,_ as O,c as m,d as R,t as V,p as W,F as s,G as o,H as h,K as j,$ as b,Q as g,M as v,a1 as k,Z as z,Y as $,a4 as S,R as A}from"./swiper-vue.14f7f984.js";import{u as D}from"./select.0bcaa353.js";import{_ as N,m as M,a as C}from"./entry.3537de88.js";function I(e){return typeof e=="function"?e():q(e)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const T=()=>{};function E(e,a){function l(...r){return new Promise((n,t)=>{Promise.resolve(e(()=>a.apply(this,r),{fn:a,thisArg:this,args:r})).then(n).catch(t)})}return l}function H(e,a={}){let l,r,n=T;const t=i=>{clearTimeout(i),n(),n=T};return i=>{const f=I(e),u=I(a.maxWait);return l&&t(l),f<=0||u!==void 0&&u<=0?(r&&(t(r),r=null),Promise.resolve(i())):new Promise((c,d)=>{n=a.rejectOnCancel?d:c,u&&!r&&(r=setTimeout(()=>{l&&t(l),r=null,c(i())},u)),l=setTimeout(()=>{r&&t(r),r=null,c(i())},f)})}}function K(e,a=200,l={}){return E(H(a,l),e)}let Q=0;function U(){return`nuid-${Q++}`}const x=(e,a)=>{const l=F("form-events",void 0),r=F("form-group",void 0),n=F("form-inputs",void 0),t=B(e==null?void 0:e.id);O(()=>{t.value=e!=null&&e.isFieldset?null:(e==null?void 0:e.id)??U(),r&&(r.inputId.value=t.value,n&&(n.value[r.name.value]=t))});const y=B(!1);function i(d,p){l&&l.emit({type:d,path:p})}function f(){i("blur",r==null?void 0:r.name.value),y.value=!0}function u(){i("change",r==null?void 0:r.name.value)}const c=K(()=>{(y.value||r!=null&&r.eagerValidation.value)&&i("input",r==null?void 0:r.name.value)},300);return{inputId:t,name:m(()=>(e==null?void 0:e.name)??(r==null?void 0:r.name.value)),size:m(()=>{var p;const d=a.size[r==null?void 0:r.size.value]?r==null?void 0:r.size.value:null;return(e==null?void 0:e.size)??d??((p=a==null?void 0:a.default)==null?void 0:p.size)}),color:m(()=>{var d;return(d=r==null?void 0:r.error)!=null&&d.value?"red":e==null?void 0:e.color}),emitFormBlur:f,emitFormInput:c,emitFormChange:u}},Y={wrapper:"",label:{wrapper:"flex content-center items-center justify-between",base:"block font-medium text-gray-700 dark:text-gray-200",required:"after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},container:"mt-1 relative",description:"text-gray-500 dark:text-gray-400",hint:"text-gray-500 dark:text-gray-400",help:"mt-2 text-gray-500 dark:text-gray-400",error:"mt-2 text-red-500 dark:text-red-400",default:{size:"sm"}},w=M(C.ui.strategy,C.ui.formGroup,Y),Z=R({inheritAttrs:!1,props:{name:{type:String,default:null},size:{type:String,default:null,validator(e){return Object.keys(w.size).includes(e)}},label:{type:String,default:null},description:{type:String,default:null},required:{type:Boolean,default:!1},help:{type:String,default:null},error:{type:[String,Boolean],default:null},hint:{type:String,default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0},eagerValidation:{type:Boolean,default:!1}},setup(e){const{ui:a,attrs:l}=D("formGroup",V(e,"ui"),w,V(e,"class")),r=F("form-errors",null),n=m(()=>{var i,f;return e.error&&typeof e.error=="string"||typeof e.error=="boolean"?e.error:(f=(i=r==null?void 0:r.value)==null?void 0:i.find(u=>u.path===e.name))==null?void 0:f.message}),t=m(()=>a.value.size[e.size??w.default.size]),y=B();return W("form-group",{error:n,inputId:y,name:m(()=>e.name),size:m(()=>e.size),eagerValidation:m(()=>e.eagerValidation)}),{ui:a,attrs:l,inputId:y,size:t,error:n}}}),J=["for"];function L(e,a,l,r,n,t){return s(),o("div",v({class:e.ui.wrapper},e.attrs),[e.label||e.$slots.label?(s(),o("div",{key:0,class:h([e.ui.label.wrapper,e.size])},[j("label",{for:e.inputId,class:h([e.ui.label.base,e.required?e.ui.label.required:""])},[e.$slots.label?b(e.$slots,"label",g(v({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(s(),o(k,{key:1},[z($(e.label),1)],64))],10,J),e.hint||e.$slots.hint?(s(),o("span",{key:0,class:h([e.ui.hint])},[e.$slots.hint?b(e.$slots,"hint",g(v({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(s(),o(k,{key:1},[z($(e.hint),1)],64))],2)):S("",!0)],2)):S("",!0),e.description||e.$slots.description?(s(),o("p",{key:1,class:h([e.ui.description,e.size])},[e.$slots.description?b(e.$slots,"description",g(v({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(s(),o(k,{key:1},[z($(e.description),1)],64))],2)):S("",!0),j("div",{class:h([e.label?e.ui.container:""])},[b(e.$slots,"default",g(A({error:e.error}))),typeof e.error=="string"&&e.error||e.$slots.error?(s(),o("p",{key:0,class:h([e.ui.error,e.size])},[e.$slots.error?b(e.$slots,"error",g(v({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(s(),o(k,{key:1},[z($(e.error),1)],64))],2)):e.help||e.$slots.help?(s(),o("p",{key:1,class:h([e.ui.help,e.size])},[e.$slots.help?b(e.$slots,"help",g(v({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(s(),o(k,{key:1},[z($(e.help),1)],64))],2)):S("",!0)],2)],16)}const _=N(Z,[["render",L]]);export{_,U as a,x as u};