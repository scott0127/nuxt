import{S as m,_ as f}from"./entry.f986e24f.js";import{d as _,ap as I,c as r,F as d,G as v,ao as x}from"./swiper-vue.c555b90e.js";import{r as S}from"./index.df58e121.js";const y=_({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){I(e=>({bcb40374:p.value}));const t=m(),o=u,l=r(()=>{var e,n;return(n=(e=t.nuxtIcon)==null?void 0:e.aliases)!=null&&n[o.name]?t.nuxtIcon.aliases[o.name]:o.name}),a=r(()=>S(l.value)),p=r(()=>{var s,c;const e=(c=(s=t.nuxtIcon)==null?void 0:s.iconifyApiOptions)==null?void 0:c.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${a.value.prefix}/${a.value.name}.svg')`}),i=r(()=>{var n,s,c;if(!o.size&&typeof((n=t.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((s=t.nuxtIcon)!=null&&s.size))return;const e=o.size||((c=t.nuxtIcon)==null?void 0:c.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(d(),v("span",{style:x({width:i.value,height:i.value})},null,4))}});const h=f(y,[["__scopeId","data-v-67c83f2c"]]);export{h as default};
