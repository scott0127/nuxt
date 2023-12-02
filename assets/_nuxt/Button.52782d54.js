import T from"./Icon.bd354f58.js";import{q as V,s as G,_ as B,l as j,P as J,m as L,b as $,t as S}from"./entry.707f103c.js";import{d as N,c as u,F as p,N as b,G as q,H as k,O as z,ac as m,M as w,V as D,K as Q,Q as E,R as Y,al as W,am as I,i as X,a7 as Z,a9 as ee,g as re,t as te,$ as C,Y as ae}from"./swiper-vue.593f5aeb.js";import{_ as F}from"./nuxt-link.a23e47c2.js";var ne=V(G);function ie(e,n){const a={...e};for(const t of n)delete a[t];return a}function se(e,n,a){typeof n=="string"&&(n=n.split(".").map(r=>{const i=Number(r);return isNaN(i)?r:i}));let t=e;for(const r of n){if(t==null)return a;t=t[r]}return t!==void 0?t:a}const oe=N({props:{name:{type:String,required:!0},dynamic:{type:Boolean,default:!1}},setup(e){const n=j();return{dynamic:u(()=>{var t,r;return e.dynamic||((r=(t=n.ui)==null?void 0:t.icons)==null?void 0:r.dynamic)})}}});function le(e,n,a,t,r,i){const s=T;return e.dynamic?(p(),b(s,{key:0,name:e.name},null,8,["name"])):(p(),q("span",{key:1,class:k(e.name)},null,2))}const K=B(oe,[["render",le]]),O=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function _(e,n){n?n={...O,...n}:n=O;const a=M(n);return a.dispatch(e),a.toString()}const ue=Object.freeze(["prototype","__proto__","constructor"]);function M(e){let n="",a=new Map;const t=r=>{n+=r};return{toString(){return n},getContext(){return a},dispatch(r){return e.replacer&&(r=e.replacer(r)),this[r===null?"null":typeof r](r)},object(r){if(r&&typeof r.toJSON=="function")return this.object(r.toJSON());const i=Object.prototype.toString.call(r);let s="";const d=i.length;d<10?s="unknown:["+i+"]":s=i.slice(8,d-1),s=s.toLowerCase();let c=null;if((c=a.get(r))===void 0)a.set(r,a.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(r))return t("buffer:"),t(r.toString("utf8"));if(s!=="object"&&s!=="function"&&s!=="asyncfunction")this[s]?this[s](r):e.ignoreUnknown||this.unkown(r,s);else{let o=Object.keys(r);e.unorderedObjects&&(o=o.sort());let g=[];e.respectType!==!1&&!U(r)&&(g=ue),e.excludeKeys&&(o=o.filter(l=>!e.excludeKeys(l)),g=g.filter(l=>!e.excludeKeys(l))),t("object:"+(o.length+g.length)+":");const f=l=>{this.dispatch(l),t(":"),e.excludeValues||this.dispatch(r[l]),t(",")};for(const l of o)f(l);for(const l of g)f(l)}},array(r,i){if(i=i===void 0?e.unorderedArrays!==!1:i,t("array:"+r.length+":"),!i||r.length<=1){for(const c of r)this.dispatch(c);return}const s=new Map,d=r.map(c=>{const o=M(e);o.dispatch(c);for(const[g,f]of o.getContext())s.set(g,f);return o.toString()});return a=s,d.sort(),this.array(d,!1)},date(r){return t("date:"+r.toJSON())},symbol(r){return t("symbol:"+r.toString())},unkown(r,i){if(t(i),!!r&&(t(":"),r&&typeof r.entries=="function"))return this.array(Array.from(r.entries()),!0)},error(r){return t("error:"+r.toString())},boolean(r){return t("bool:"+r)},string(r){t("string:"+r.length+":"),t(r)},function(r){t("fn:"),U(r)?this.dispatch("[native]"):this.dispatch(r.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(r.name)),e.respectFunctionProperties&&this.object(r)},number(r){return t("number:"+r)},xml(r){return t("xml:"+r.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(r){return t("regex:"+r.toString())},uint8array(r){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(r))},uint8clampedarray(r){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(r))},int8array(r){return t("int8array:"),this.dispatch(Array.prototype.slice.call(r))},uint16array(r){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(r))},int16array(r){return t("int16array:"),this.dispatch(Array.prototype.slice.call(r))},uint32array(r){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(r))},int32array(r){return t("int32array:"),this.dispatch(Array.prototype.slice.call(r))},float32array(r){return t("float32array:"),this.dispatch(Array.prototype.slice.call(r))},float64array(r){return t("float64array:"),this.dispatch(Array.prototype.slice.call(r))},arraybuffer(r){return t("arraybuffer:"),this.dispatch(new Uint8Array(r))},url(r){return t("url:"+r.toString())},map(r){t("map:");const i=[...r];return this.array(i,e.unorderedSets!==!1)},set(r){t("set:");const i=[...r];return this.array(i,e.unorderedSets!==!1)},file(r){return t("file:"),this.dispatch([r.name,r.size,r.type,r.lastModfied])},blob(){if(e.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(r){return t("bigint:"+r.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const P="[native code] }",de=P.length;function U(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-de)===P}function ce(e,n,a={}){return e===n||_(e,a)===_(n,a)}const ge=N({inheritAttrs:!1,props:{...F.props,as:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:!1},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function n(a,t,{isActive:r,isExactActive:i}){return e.exactQuery&&!ce(a.query,t.query)||e.exactHash&&a.hash!==t.hash?e.inactiveClass:e.exact&&i||!e.exact&&r?e.activeClass:e.inactiveClass}return{resolveLinkClass:n}}}),fe=["href","aria-disabled","role","rel","target","onClick"];function ye(e,n,a,t,r,i){const s=F;return e.to?(p(),b(s,w({key:1},e.$props,{custom:""}),{default:z(({route:d,href:c,target:o,rel:g,navigate:f,isActive:l,isExactActive:v,isExternal:h})=>[Q("a",w(e.$attrs,{href:e.disabled?void 0:c,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:g,target:o,class:e.active?e.activeClass:e.resolveLinkClass(d,e._.provides[J]||e.$route,{isActive:l,isExactActive:v}),onClick:x=>!h&&f(x)}),[m(e.$slots,"default",E(Y({isActive:e.exact?v:l})))],16,fe)]),_:3},16)):(p(),b(D(e.as),w({key:0,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:z(()=>[m(e.$slots,"default")]),_:3},16,["disabled","class"]))}const H=B(ge,[["render",ye]]),pe=(e,n,a,t,r=!1)=>{const i=W(),s=j(),d=u(()=>{var l;const o=I(n),g=I(a),f=I(t);return L((o==null?void 0:o.strategy)||((l=s.ui)==null?void 0:l.strategy),f?{wrapper:f}:{},o||{},r?se(s.ui,e,{}):{},g||{})}),c=u(()=>ie(i,["class"]));return{ui:d,attrs:c}};function be({ui:e,props:n}){const a=re();let t=a.parent,r;for(;t&&!r;){if(t.type.name==="ButtonGroup"){r=X(`group-${t.uid}`);break}t=t.parent}const i=u(()=>r==null?void 0:r.value.children.indexOf(a));return Z(()=>{r==null||r.value.register(a)}),ee(()=>{r==null||r.value.unregister(a)}),{size:u(()=>(r==null?void 0:r.value.size)||n.size),rounded:u(()=>!r||i.value===-1?e.value.rounded:r.value.children.length===1?r.value.ui.rounded:i.value===0?r.value.rounded.start:i.value===r.value.children.length-1?r.value.rounded.end:"rounded-none")}}const he={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},R={wrapper:"relative",base:"relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",rounded:"rounded-md",placeholder:"placeholder-gray-400 dark:placeholder-gray-500",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},leading:{padding:{"2xs":"ps-7",xs:"ps-8",sm:"ps-9",md:"ps-10",lg:"ps-11",xl:"ps-12"}},trailing:{padding:{"2xs":"pe-7",xs:"pe-8",sm:"pe-9",md:"pe-10",lg:"pe-11",xl:"pe-12"}},color:{white:{outline:"shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"},gray:{outline:"shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"}},variant:{outline:"shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",none:"bg-transparent focus:ring-0 focus:shadow-none"},icon:{base:"flex-shrink-0 text-gray-400 dark:text-gray-500",color:"text-{color}-500 dark:text-{color}-400",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"},leading:{wrapper:"absolute inset-y-0 start-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"ps-2",xs:"ps-2.5",sm:"ps-2.5",md:"ps-3",lg:"ps-3.5",xl:"ps-3.5"}},trailing:{wrapper:"absolute inset-y-0 end-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"pe-2",xs:"pe-2.5",sm:"pe-2.5",md:"pe-3",lg:"pe-3.5",xl:"pe-3.5"}}},default:{size:"sm",color:"white",variant:"outline",loadingIcon:"i-heroicons-arrow-path-20-solid"}};({...R});({...R});const y=L($.ui.strategy,$.ui.button,he),me=N({components:{UIcon:K,ULink:H},inheritAttrs:!1,props:{type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>y.default.size,validator(e){return Object.keys(y.size).includes(e)}},color:{type:String,default:()=>y.default.color,validator(e){return[...$.ui.colors,...Object.keys(y.color)].includes(e)}},variant:{type:String,default:()=>y.default.variant,validator(e){return[...Object.keys(y.variant),...Object.values(y.color).flatMap(n=>Object.keys(n))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>y.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e,{slots:n}){const{ui:a,attrs:t}=pe("button",te(e,"ui"),y),{size:r,rounded:i}=be({ui:a,props:e}),s=u(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),d=u(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),c=u(()=>e.square||!n.default&&!e.label),o=u(()=>{var x,A;const h=((A=(x=a.value.color)==null?void 0:x[e.color])==null?void 0:A[e.variant])||a.value.variant[e.variant];return ne(S(a.value.base,a.value.font,i.value,a.value.size[r.value],a.value.gap[r.value],e.padded&&a.value[c.value?"square":"padding"][r.value],h==null?void 0:h.replaceAll("{color}",e.color),e.block?"w-full flex justify-center items-center":"inline-flex items-center"),e.class)}),g=u(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),f=u(()=>e.loading&&!s.value?e.loadingIcon:e.trailingIcon||e.icon),l=u(()=>S(a.value.icon.base,a.value.icon.size[r.value],e.loading&&"animate-spin")),v=u(()=>S(a.value.icon.base,a.value.icon.size[r.value],e.loading&&!s.value&&"animate-spin"));return{attrs:t,isLeading:s,isTrailing:d,isSquare:c,buttonClass:o,leadingIconName:g,trailingIconName:f,leadingIconClass:l,trailingIconClass:v}}});function ve(e,n,a,t,r,i){const s=K,d=H;return p(),b(d,w({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},e.attrs),{default:z(()=>[m(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(p(),b(s,{key:0,name:e.leadingIconName,class:k(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):C("",!0)]),m(e.$slots,"default",{},()=>[e.label?(p(),q("span",{key:0,class:k([e.truncate?"text-left break-all line-clamp-1":""])},ae(e.label),3)):C("",!0)]),m(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(p(),b(s,{key:0,name:e.trailingIconName,class:k(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):C("",!0)])]),_:3},16,["type","disabled","class"])}const Ie=B(me,[["render",ve]]);export{Ie as _,K as a,be as b,R as i,ne as t,pe as u};
