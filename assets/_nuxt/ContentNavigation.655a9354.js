import{u as f}from"./asyncData.b8e57577.js";import{o as v,E as g,s as d}from"./entry.3c1908ba.js";import{h as m}from"./index.c9d4dc9e.js";import{q as l,w as c,e as h,s as _,j as y,u as C}from"./query.af8f73e7.js";import{u as w}from"./preview.46adff44.js";import{_ as P}from"./nuxt-link.1d18d295.js";import{d as $,y as N,c as j,ag as E,f as r}from"./swiper-vue.20d02af6.js";const T=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=l(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${m(a)}.${t.integrity}`}/${h(a)}.json`):c(`/navigation/${m(a)}.${t.integrity}.json`);if(_())return(await g(()=>import("./client-db.dbd6cfa9.js"),["./client-db.dbd6cfa9.js","./entry.3c1908ba.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css","./entry.c4e9ec71.css","./query.af8f73e7.js","./index.c9d4dc9e.js","./preview.46adff44.js","./index.b0fe9fac.js","./_commonjsHelpers.725317a4.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:y(a),previewToken:w().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},D=$({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=N(e),a=j(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&d("dd-navigation").value){const{navigation:n}=C();return{navigation:n}}const{data:s}=await f(`content-navigation-${m(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=E(),{navigation:a}=e,s=o=>r(P,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):p(a)}}),A=D;export{A as default};
