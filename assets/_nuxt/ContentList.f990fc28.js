import d from"./ContentQuery.7f8b1434.js";import{d as c,an as l,f as u}from"./swiper-vue.b9df4d28.js";import"./asyncData.f6056fea.js";import"./entry.0f95066a.js";import"./query.64d7ad60.js";import"./index.c9d4dc9e.js";import"./preview.cc87cf2c.js";const p=(r,t)=>u("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:r,data:t},null,2)),h=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(r){const t=l(),{path:f,query:a}=r,m={...a||{},path:f||(a==null?void 0:a.path)||"/"};return u(d,m,{default:t!=null&&t.default?({data:e,refresh:o,isPartial:n})=>t.default({list:e,refresh:o,isPartial:n,...this.$attrs}):e=>p("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):p("default",e==null?void 0:e.data),"not-found":e=>{var o;return t!=null&&t["not-found"]?(o=t==null?void 0:t["not-found"])==null?void 0:o.call(t,e):p("not-found",e==null?void 0:e.data)}})}}),q=h;export{q as default};