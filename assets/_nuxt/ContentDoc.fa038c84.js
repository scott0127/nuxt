import{u as y,o as g,w as v}from"./entry.2dd98bdf.js";import{u as D}from"./vue.f36acd1f.bcd6d741.js";import{u as d,w as H,n as S,d as _,ai as b,f as c}from"./swiper-vue.c555b90e.js";import q from"./ContentRenderer.f9194b19.js";import x from"./ContentQuery.f0a814d5.js";import"./ContentRendererMarkdown.vue.f5c4c1e9.js";import"./index.4e8c8a1d.js";import"./preview.4fcc6b04.js";import"./asyncData.21e23245.js";import"./query.93cdb222.js";import"./index.c9d4dc9e.js";const a=(p,s=y())=>{const e=d(p),m=g();H(()=>d(p),(n=e)=>{if(!s.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),m.public.content.host;const u=(t==null?void 0:t.description)||(n==null?void 0:n.description);u&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:u}),t!=null&&t.image||(n==null||n.image),S(()=>D(t))},{immediate:!0})},$=_({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(p){const{contentHead:s}=g().public.content,e=b(),{tag:m,excerpt:f,path:n,query:t,head:r}=p,u=r===void 0?s:r,l={...t||{},path:n||(t==null?void 0:t.path)||v(y().path),find:"one"},w=(o,i)=>c("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return c(x,l,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:C})=>{var h;return u&&a(o),(h=e.default)==null?void 0:h.call(e,{doc:o,refresh:i,isPartial:C,excerpt:f,...this.$attrs})}:({data:o})=>(u&&a(o),c(q,{value:o,excerpt:f,tag:m,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):w("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||c("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||c("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),Y=$;export{Y as default};
