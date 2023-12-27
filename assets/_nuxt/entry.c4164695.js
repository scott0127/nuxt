import{e as ql,r as bn,h as Gl,g as Kl,n as Pn,v as e0,u as he,i as st,t as Gp,m as ho,s as Us,a as kt,b as Ko,d as or,c as at,f as vt,p as wr,w as Nr,j as t0,k as $s,l as Kp,o as n0,q as Qp,x as Ql,y as r0,z as s0,A as z,B as i0,C as Yp,D as o0,E as a0,F as _n,G as c0,H as l0,I as u0,J as h0,K as Fa,L as d0,S as Yl,T as Xp,M as f0,N as Vn,O as Jp,P as Lh,Q as p0,R as m0,U as g0,V as _0,W as y0,X as v0}from"./swiper-vue.20d02af6.js";const Zp=/#/g,em=/&/g,E0=/\//g,w0=/=/g,T0=/\?/g,Qo=/\+/g,I0=/%5e/gi,b0=/%60/gi,A0=/%7c/gi,R0=/%20/gi,C0=/%252f/gi;function tm(t){return encodeURI(""+t).replace(A0,"|")}function Tc(t){return tm(typeof t=="string"?t:JSON.stringify(t)).replace(Qo,"%2B").replace(R0,"+").replace(Zp,"%23").replace(em,"%26").replace(b0,"`").replace(I0,"^")}function Ua(t){return Tc(t).replace(w0,"%3D")}function nm(t){return tm(t).replace(Zp,"%23").replace(T0,"%3F").replace(C0,"%2F").replace(em,"%26").replace(Qo,"%2B")}function Mh(t){return nm(t).replace(E0,"%2F")}function rm(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function S0(t){return rm(t.replace(Qo," "))}function P0(t){return rm(t.replace(Qo," "))}function k0(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=S0(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=P0(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function N0(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Ua(t)}=${Tc(n)}`).join("&"):`${Ua(t)}=${Tc(e)}`:Ua(t)}function O0(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>N0(e,t[e])).filter(Boolean).join("&")}const x0=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,D0=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,L0=/^([/\\]\s*){2,}[^/\\]/;function sm(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?x0.test(t):D0.test(t)||(e.acceptRelative?L0.test(t):!1)}const M0=/\/$|\/\?|\/#/;function Ic(t="",e){return e?M0.test(t):t.endsWith("/")}function V0(t="",e){if(!e)return(Ic(t)?t.slice(0,-1):t)||"/";if(!Ic(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return(i.slice(0,-1)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function F0(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(Ic(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function U0(t=""){return t.startsWith("/")}function BM(t=""){return U0(t)?t:"/"+t}function $0(t,e){if(H0(e)||sm(t))return t;const n=V0(e);return t.startsWith(n)?t:Bs(n,t)}function B0(t,e){const n=im(t),r={...k0(n.search),...e};return n.search=O0(r),W0(n)}function H0(t){return!t||t==="/"}function j0(t){return t&&t!=="/"}const z0=/^\.?\//;function Bs(t,...e){let n=t||"";for(const r of e.filter(s=>j0(s)))if(n){const s=r.replace(z0,"");n=F0(n)+s}else n=r;return n}function im(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,h,d=""]=n;return{protocol:h.toLowerCase(),pathname:d,href:h+d,auth:"",host:"",search:"",hash:""}}if(!sm(t,{acceptRelative:!0}))return e?im(e+t):Vh(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[],{pathname:c,search:l,hash:u}=Vh(a.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:c,search:l,hash:u}}function Vh(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function W0(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol?t.protocol+"//":"")+s+i+e+n+r}const q0=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},fo=q0().app,G0=()=>fo.baseURL,K0=()=>fo.buildAssetsDir,Xl=(...t)=>Bs(om(),K0(),...t),om=(...t)=>{const e=fo.cdnURL||fo.baseURL;return t.length?Bs(e,...t):e};globalThis.__buildAssetsURL=Xl,globalThis.__publicAssetsURL=om;const Q0=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Y0=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,X0=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function J0(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){Z0(t);return}return e}function Z0(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Hs(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.at(-1)==='"'&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!X0.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(Q0.test(t)||Y0.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,J0)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}class eE extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function tE(t){var c,l,u,h,d;const e=((c=t.error)==null?void 0:c.message)||((l=t.error)==null?void 0:l.toString())||"",n=((u=t.request)==null?void 0:u.method)||((h=t.options)==null?void 0:h.method)||"GET",r=((d=t.request)==null?void 0:d.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new eE(o,t.error?{cause:t.error}:void 0);for(const f of["request","options","response"])Object.defineProperty(a,f,{get(){return t[f]}});for(const[f,p]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,f,{get(){return t.response&&t.response[p]}});return a}const nE=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Fh(t="GET"){return nE.has(t.toUpperCase())}function rE(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const sE=new Set(["image/svg","application/xml","application/xhtml","application/html"]),iE=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function oE(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return iE.test(e)?"json":sE.has(e)||e.startsWith("text/")?"text":"blob"}function aE(t,e,n=globalThis.Headers){const r={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(r.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(r.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){r.headers=new n((e==null?void 0:e.headers)||{});for(const[s,i]of new n((t==null?void 0:t.headers)||{}))r.headers.set(s,i)}return r}const cE=new Set([408,409,425,429,500,502,503,504]),lE=new Set([101,204,205,304]);function am(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const c=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!c){let u;typeof a.options.retry=="number"?u=a.options.retry:u=Fh(a.options.method)?0:1;const h=a.response&&a.response.status||500;if(u>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(h):cE.has(h))){const d=a.options.retryDelay||0;return d>0&&await new Promise(f=>setTimeout(f,d)),i(a.request,{...a.options,retry:u-1,timeout:a.options.timeout})}}const l=tE(a);throw Error.captureStackTrace&&Error.captureStackTrace(l,i),l}const i=async function(c,l={}){var d;const u={request:c,options:aE(l,t.defaults,n),response:void 0,error:void 0};if(u.options.method=(d=u.options.method)==null?void 0:d.toUpperCase(),u.options.onRequest&&await u.options.onRequest(u),typeof u.request=="string"&&(u.options.baseURL&&(u.request=$0(u.request,u.options.baseURL)),(u.options.query||u.options.params)&&(u.request=B0(u.request,{...u.options.params,...u.options.query}))),u.options.body&&Fh(u.options.method)&&(rE(u.options.body)?(u.options.body=typeof u.options.body=="string"?u.options.body:JSON.stringify(u.options.body),u.options.headers=new n(u.options.headers||{}),u.options.headers.has("content-type")||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")):("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half"))),!u.options.signal&&u.options.timeout){const f=new r;setTimeout(()=>f.abort(),u.options.timeout),u.options.signal=f.signal}try{u.response=await e(u.request,u.options)}catch(f){return u.error=f,u.options.onRequestError&&await u.options.onRequestError(u),await s(u)}if(u.response.body&&!lE.has(u.response.status)&&u.options.method!=="HEAD"){const f=(u.options.parseResponse?"json":u.options.responseType)||oE(u.response.headers.get("content-type")||"");switch(f){case"json":{const p=await u.response.text(),g=u.options.parseResponse||Hs;u.response._data=g(p);break}case"stream":{u.response._data=u.response.body;break}default:u.response._data=await u.response[f]()}}return u.options.onResponse&&await u.options.onResponse(u),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await u.options.onResponseError(u),await s(u)):u.response},o=async function(c,l){return(await i(c,l))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={})=>am({...t,defaults:{...t.defaults,...a}}),o}const Jl=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),uE=Jl.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),hE=Jl.Headers,dE=Jl.AbortController,fE=am({fetch:uE,Headers:hE,AbortController:dE}),pE=fE;globalThis.$fetch||(globalThis.$fetch=pE.create({baseURL:G0()}));function bc(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?bc(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const mE={run:t=>t()},gE=()=>mE,cm=typeof console.createTask<"u"?console.createTask:gE;function _E(t,e){const n=e.shift(),r=cm(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function yE(t,e){const n=e.shift(),r=cm(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function $a(t,e){for(const n of[...t])n(e)}class vE{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=bc(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=bc(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(_E,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(yE,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&$a(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&$a(this._after,s)}):(this._after&&s&&$a(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function lm(){return new vE}function EE(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&e===void 0){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const c=()=>{e=o},l=()=>e===o?c:void 0;Ac.add(l);try{const u=s?s.run(o,a):a();return n||(e=void 0),await u}finally{Ac.delete(l)}}}}function wE(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=EE({...t,...r})),e[n],e[n]}}}const po=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Uh="__unctx__",TE=po[Uh]||(po[Uh]=wE()),IE=(t,e={})=>TE.get(t,e),$h="__unctx_async_handlers__",Ac=po[$h]||(po[$h]=new Set);function js(t){const e=[];for(const s of Ac){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const um=IE("nuxt-app",{asyncContext:!1}),bE="__nuxt_plugin";function AE(t){let e=0;const n={_scope:ql(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.8.1"},get vue(){return n.vueApp.version}},payload:bn({data:{},state:{},_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:s=>n._scope.run(()=>PE(n,s)),isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...t};n.hooks=lm(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,i)=>{const o="$"+s;Li(n,o,i),Li(n.vueApp.config.globalProperties,o,i)},Li(n.vueApp,"$nuxt",n),Li(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",i=>{n.callHook("app:chunkError",{error:i.payload})}),window.useNuxtApp=window.useNuxtApp||ie;const s=n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});n.hook("app:mounted",s)}const r=bn(n.payload.config);return n.provide("config",r),n}async function RE(t,e){if(e.hooks&&t.hooks.addHooks(e.hooks),typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function CE(t,e){const n=[],r=[];for(const s of e){const i=RE(t,s);s.parallel?n.push(i.catch(o=>r.push(o))):await i}if(await Promise.all(n),r.length)throw r[0]}/*! @__NO_SIDE_EFFECTS__ */function et(t){return typeof t=="function"?t:(delete t.name,Object.assign(t.setup||(()=>{}),t,{[bE]:!0}))}const SE=et;function PE(t,e,n){const r=()=>n?e(...n):e();return um.set(t),t.vueApp.runWithContext(r)}/*! @__NO_SIDE_EFFECTS__ */function ie(){var e;let t;if(Gl()&&(t=(e=Kl())==null?void 0:e.appContext.app.$nuxt),t=t||um.tryUse(),!t)throw new Error("[nuxt] instance unavailable");return t}/*! @__NO_SIDE_EFFECTS__ */function ui(){return ie().$config}function Li(t,e,n){Object.defineProperty(t,e,{get:()=>n})}const kE="modulepreload",NE=function(t,e){return t[0]==="."?new URL(t,e).href:t},Bh={},OE=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=NE(i,r),i in Bh)return;Bh[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":kE,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},k=(...t)=>OE(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),xE=/#/g,DE=/&/g,LE=/=/g,Zl=/\+/g,ME=/%5e/gi,VE=/%60/gi,FE=/%7c/gi,UE=/%20/gi;function $E(t){return encodeURI(""+t).replace(FE,"|")}function Rc(t){return $E(typeof t=="string"?t:JSON.stringify(t)).replace(Zl,"%2B").replace(UE,"+").replace(xE,"%23").replace(DE,"%26").replace(VE,"`").replace(ME,"^")}function Ba(t){return Rc(t).replace(LE,"%3D")}function mo(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function BE(t){return mo(t.replace(Zl," "))}function HE(t){return mo(t.replace(Zl," "))}function jE(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=BE(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=HE(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function zE(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Ba(t)}=${Rc(n)}`).join("&"):`${Ba(t)}=${Rc(e)}`:Ba(t)}function WE(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>zE(e,t[e])).filter(Boolean).join("&")}const qE=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,GE=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,KE=/^([/\\]\s*){2,}[^/\\]/;function Yo(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?qE.test(t):GE.test(t)||(e.acceptRelative?KE.test(t):!1)}const QE=/^[\s\0]*(blob|data|javascript|vbscript):$/i;function YE(t){return!!t&&QE.test(t)}const XE=/\/$|\/\?/;function Cc(t="",e=!1){return e?XE.test(t):t.endsWith("/")}function JE(t="",e=!1){if(!e)return(Cc(t)?t.slice(0,-1):t)||"/";if(!Cc(t,!0))return t||"/";const[n,...r]=t.split("?");return(n.slice(0,-1)||"/")+(r.length>0?`?${r.join("?")}`:"")}function Sc(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(Cc(t,!0))return t||"/";const[n,...r]=t.split("?");return n+"/"+(r.length>0?`?${r.join("?")}`:"")}function ZE(t=""){return t.startsWith("/")}function Hh(t=""){return ZE(t)?t:"/"+t}function jh(t,e){if(tw(e))return t;const n=JE(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function ew(t,e){const n=Xo(t),r={...jE(n.search),...e};return n.search=WE(r),iw(n)}function tw(t){return!t||t==="/"}function nw(t){return t&&t!=="/"}const rw=/^\.?\//;function hm(t,...e){let n=t||"";for(const r of e.filter(s=>nw(s)))if(n){const s=r.replace(rw,"");n=Sc(n)+s}else n=r;return n}function sw(t,e,n={}){return n.trailingSlash||(t=Sc(t),e=Sc(e)),n.leadingSlash||(t=Hh(t),e=Hh(e)),n.encoding||(t=mo(t),e=mo(e)),t===e}function Xo(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/);if(n){const[,h,d=""]=n;return{protocol:h,pathname:d,href:h+d,auth:"",host:"",search:"",hash:""}}if(!Yo(t,{acceptRelative:!0}))return e?Xo(e+t):zh(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[],{pathname:c,search:l,hash:u}=zh(a.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:r,auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:c,search:l,hash:u}}function zh(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function iw(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol?t.protocol+"//":"")+s+i+e+n+r}const ow=-1,aw=-2,cw=-3,lw=-4,uw=-5,hw=-6;function dw(t,e){return fw(JSON.parse(t),e)}function fw(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===ow)return;if(i===cw)return NaN;if(i===lw)return 1/0;if(i===uw)return-1/0;if(i===hw)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],l=e==null?void 0:e[c];if(l)return r[i]=l(s(a[1]));switch(c){case"Date":r[i]=new Date(a[1]);break;case"Set":const u=new Set;r[i]=u;for(let f=1;f<a.length;f+=1)u.add(s(a[f]));break;case"Map":const h=new Map;r[i]=h;for(let f=1;f<a.length;f+=2)h.set(s(a[f]),s(a[f+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const d=Object.create(null);r[i]=d;for(let f=1;f<a.length;f+=2)d[a[f]]=s(a[f+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[i]=c;for(let l=0;l<a.length;l+=1){const u=a[l];u!==aw&&(c[l]=s(u))}}else{const c={};r[i]=c;for(const l in a){const u=a[l];c[l]=s(u)}}return r[i]}return s(0)}function pw(t){return Array.isArray(t)?t:[t]}const mw=["title","titleTemplate","script","style","noscript"],to=["base","meta","link","style","script","noscript"],gw=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],_w=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],dm=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"],yw=typeof window<"u";function eu(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Wh(t){return t._h||eu(t._d?t._d:`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function fm(t,e){const{props:n,tag:r}=t;if(_w.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof n[i]<"u"){const o=String(n[i]);return e&&!e(o)?!1:`${r}:${i}:${o}`}return!1}function qh(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function vw(t,e,n){const r={tag:t,props:await pm(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(t)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(t))};return dm.forEach(s=>{const i=typeof r.props[s]<"u"?r.props[s]:n[s];typeof i<"u"&&((!["innerHTML","textContent"].includes(s)||mw.includes(r.tag))&&(r[s]=i),delete r.props[s])}),r.props.body&&(r.tagPosition="bodyClose",delete r.props.body),r.props.children&&(r.innerHTML=r.props.children,delete r.props.children),r.tag==="script"&&(typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),r.innerHTML&&["application/ld+json","application/json"].includes(r.props.type)&&(r.innerHTML=r.innerHTML.replace(/</g,"\\u003C"))),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function Ew(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(e=>t[e])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function pm(t,e){for(const n of Object.keys(t)){if(n==="class"){t[n]=Ew(t[n]);continue}if(t[n]instanceof Promise&&(t[n]=await t[n]),!e&&!dm.includes(n)){const r=String(t[n]),s=n.startsWith("data-");r==="true"||r===""?t[n]=s?"true":!0:t[n]||(s&&r==="false"?t[n]="false":delete t[n])}}return t}const ww=10;async function Tw(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,r])=>typeof r<"u"&&gw.includes(n)).forEach(([n,r])=>{const s=pw(r);e.push(...s.map(i=>vw(n,i,t)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,r)=>(n._e=t._i,t.mode&&(n._m=t.mode),n._p=(t._i<<ww)+r,n))}const Gh={base:-10,title:10},Kh={critical:-80,high:-10,low:20};function go(t){let e=100;const n=t.tagPriority;return typeof n=="number"?n:(t.tag==="meta"?(t.props["http-equiv"]==="content-security-policy"&&(e=-30),t.props.charset&&(e=-20),t.props.name==="viewport"&&(e=-15)):t.tag==="link"&&t.props.rel==="preconnect"?e=20:t.tag in Gh&&(e=Gh[t.tag]),typeof n=="string"&&n in Kh?e+Kh[n]:e)}const Iw=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],mm=["onload","onerror","onabort","onprogress","onloadstart"],dn="%separator";function no(t,e,n){if(typeof t!="string"||!t.includes("%"))return t;function r(o){let a;return["s","pageTitle"].includes(o)?a=e.pageTitle:o.includes(".")?a=o.split(".").reduce((c,l)=>c&&c[l]||void 0,e):a=e[o],typeof a<"u"?(a||"").replace(/"/g,'\\"'):!1}let s=t;try{s=decodeURI(t)}catch{}return(s.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const a=r(o.slice(1));typeof a=="string"&&(t=t.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(c,l)=>`${a}${l}`).trim())}),t.includes(dn)&&(t.endsWith(dn)&&(t=t.slice(0,-dn.length).trim()),t.startsWith(dn)&&(t=t.slice(dn.length).trim()),t=t.replace(new RegExp(`\\${dn}\\s*\\${dn}`,"g"),dn),t=no(t,{separator:n},n)),t}async function bw(t){const e={tag:t.tagName.toLowerCase(),props:await pm(t.getAttributeNames().reduce((n,r)=>({...n,[r]:t.getAttribute(r)}),{})),innerHTML:t.innerHTML};return e._d=fm(e),e}async function gm(t,e={}){var u;const n=e.document||t.resolvedOptions.document;if(!n)return;const r={shouldRender:t.dirty,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!r.shouldRender)return;const s=(await t.resolveTags()).map(h=>({tag:h,id:to.includes(h.tag)?Wh(h):h.tag,shouldRender:!0}));let i=t._dom;if(!i){i={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const h of["body","head"]){const d=(u=n==null?void 0:n[h])==null?void 0:u.children;for(const f of[...d].filter(p=>to.includes(p.tagName.toLowerCase())))i.elMap[f.getAttribute("data-hid")||Wh(await bw(f))]=f}}i.pendingSideEffects={...i.sideEffects||{}},i.sideEffects={};function o(h,d,f){const p=`${h}:${d}`;i.sideEffects[p]=f,delete i.pendingSideEffects[p]}function a({id:h,$el:d,tag:f}){const p=f.tag.endsWith("Attrs");i.elMap[h]=d,p||(["textContent","innerHTML"].forEach(g=>{f[g]&&f[g]!==d[g]&&(d[g]=f[g])}),o(h,"el",()=>{i.elMap[h].remove(),delete i.elMap[h]})),Object.entries(f.props).forEach(([g,m])=>{const _=`attr:${g}`;if(g==="class")for(const v of(m||"").split(" ").filter(Boolean))p&&o(h,`${_}:${v}`,()=>d.classList.remove(v)),!d.classList.contains(v)&&d.classList.add(v);else d.getAttribute(g)!==m&&d.setAttribute(g,m===!0?"":String(m)),p&&o(h,_,()=>d.removeAttribute(g))})}const c=[],l={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const h of s){const{tag:d,shouldRender:f,id:p}=h;if(f){if(d.tag==="title"){n.title=d.textContent;continue}h.$el=h.$el||i.elMap[p],h.$el?a(h):to.includes(d.tag)&&c.push(h)}}for(const h of c){const d=h.tag.tagPosition||"head";h.$el=n.createElement(h.tag.tag),a(h),l[d]=l[d]||n.createDocumentFragment(),l[d].appendChild(h.$el)}for(const h of s)await t.hooks.callHook("dom:renderTag",h,n,o);l.head&&n.head.appendChild(l.head),l.bodyOpen&&n.body.insertBefore(l.bodyOpen,n.body.firstChild),l.bodyClose&&n.body.appendChild(l.bodyClose),Object.values(i.pendingSideEffects).forEach(h=>h()),t._dom=i,t.dirty=!1,await t.hooks.callHook("dom:rendered",{renders:s})}async function Aw(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domUpdatePromise=t._domUpdatePromise||new Promise(r=>n(async()=>{await gm(t,e),delete t._domUpdatePromise,r()}))}function Rw(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":function(i){Aw(i,t)}}}}}const Cw=["templateParams","htmlAttrs","bodyAttrs"],Sw={hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(r=>{t.props[r]&&(t.key=t.props[r],delete t.props[r])});const n=fm(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(r=>{const s=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&Cw.includes(r.tag)&&(a="merge"),a==="merge"){const c=i.props;["class","style"].forEach(l=>{r.props[l]&&c[l]&&(l==="style"&&!c[l].endsWith(";")&&(c[l]+=";"),r.props[l]=`${c[l]} ${r.props[l]}`)}),e[s].props={...c,...r.props};return}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);return}else if(go(r)>go(i))return}const o=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(to.includes(r.tag)&&o===0){delete e[s];return}e[s]=r});const n=[];Object.values(e).forEach(r=>{const s=r._duped;delete r._duped,n.push(r),s&&n.push(...s)}),t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},Pw={mode:"server",hooks:{"tags:resolve":function(t){const e={};t.tags.filter(n=>["titleTemplate","templateParams","title"].includes(n.tag)&&n._m==="server").forEach(n=>{e[n.tag]=n.tag.startsWith("title")?n.textContent:n.props}),Object.keys(e).length&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},kw=["script","link","bodyAttrs"];function Nw(t){const e={},n={};return Object.entries(t.props).forEach(([r,s])=>{r.startsWith("on")&&typeof s=="function"?(mm.includes(r)&&(e[r]=`this.dataset.${r} = true`),n[r]=s):e[r]=s}),{props:e,eventHandlers:n}}const Ow=t=>({hooks:{"tags:resolve":function(e){for(const n of e.tags)if(kw.includes(n.tag)){const{props:r,eventHandlers:s}=Nw(n);n.props=r,Object.keys(s).length&&((n.props.src||n.props.href)&&(n.key=n.key||eu(n.props.src||n.props.href)),n._eventHandlers=s)}},"dom:renderTag":function(e,n,r){if(!e.tag._eventHandlers)return;const s=e.tag.tag==="bodyAttrs"?n.defaultView:e.$el;Object.entries(e.tag._eventHandlers).forEach(([i,o])=>{const a=`${e.tag._d||e.tag._p}:${i}`,c=i.slice(2).toLowerCase(),l=`data-h-${c}`;if(r(e.id,a,()=>{}),e.$el.hasAttribute(l))return;e.$el.setAttribute(l,"");let u;const h=d=>{o(d),u==null||u.disconnect()};i in e.$el.dataset?h(new Event(i.replace("on",""))):mm.includes(i)&&typeof MutationObserver<"u"?(u=new MutationObserver(d=>{d.some(p=>p.attributeName===`data-${i}`)&&(h(new Event(i.replace("on",""))),u==null||u.disconnect())}),u.observe(e.$el,{attributes:!0})):s.addEventListener(c,h),r(e.id,a,()=>{u==null||u.disconnect(),s.removeEventListener(c,h),e.$el.removeAttribute(l)})})}}}),xw=["link","style","script","noscript"],Dw={hooks:{"tag:normalise":({tag:t})=>{t.key&&xw.includes(t.tag)&&(t.props["data-hid"]=t._h=eu(t.key))}}},Lw={hooks:{"tags:resolve":t=>{const e=n=>{var r;return(r=t.tags.find(s=>s._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of Iw)for(const s of t.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(n))){const i=e(s.tagPriority.replace(n,""));typeof i<"u"&&(s._p=i+r)}t.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>go(n)-go(r))}}},Mw={meta:"content",link:"href",htmlAttrs:"lang"},Vw=t=>({hooks:{"tags:resolve":e=>{var a;const{tags:n}=e,r=(a=n.find(c=>c.tag==="title"))==null?void 0:a.textContent,s=n.findIndex(c=>c.tag==="templateParams"),i=s!==-1?n[s].props:{},o=i.separator||"|";delete i.separator,i.pageTitle=no(i.pageTitle||r||"",i,o);for(const c of n.filter(l=>l.processTemplateParams!==!1)){const l=Mw[c.tag];l&&typeof c.props[l]=="string"?c.props[l]=no(c.props[l],i,o):(c.processTemplateParams===!0||["titleTemplate","title"].includes(c.tag))&&["innerHTML","textContent"].forEach(u=>{typeof c[u]=="string"&&(c[u]=no(c[u],i,o))})}t._templateParams=i,t._separator=o,e.tags=n.filter(c=>c.tag!=="templateParams")}}}),Fw={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(s=>s.tag==="titleTemplate");const r=e.findIndex(s=>s.tag==="title");if(r!==-1&&n!==-1){const s=qh(e[n].textContent,e[r].textContent);s!==null?e[r].textContent=s||e[r].textContent:delete e[r]}else if(n!==-1){const s=qh(e[n].textContent);s!==null&&(e[n].textContent=s,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}};let _m;function Uw(t={}){const e=$w(t);return e.use(Rw()),_m=e}function Qh(t,e){return!t||t==="server"&&e||t==="client"&&!e}function $w(t={}){const e=lm();e.addHooks(t.hooks||{}),t.document=t.document||(yw?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(c){const l=typeof c=="function"?c(a):c;(!l.key||!o.some(u=>u.key===l.key))&&(o.push(l),Qh(l.mode,n)&&e.addHooks(l.hooks||{}))},push(c,l){l==null||delete l.head;const u={_i:s++,input:c,...l};return Qh(u.mode,n)&&(i.push(u),r()),{dispose(){i=i.filter(h=>h._i!==u._i),e.callHook("entries:updated",a),r()},patch(h){i=i.map(d=>(d._i===u._i&&(d.input=u.input=h),d)),r()}}},async resolveTags(){const c={tags:[],entries:[...i]};await e.callHook("entries:resolve",c);for(const l of c.entries){const u=l.resolvedInput||l.input;if(l.resolvedInput=await(l.transform?l.transform(u):u),l.resolvedInput)for(const h of await Tw(l)){const d={tag:h,entry:l,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",d),c.tags.push(d.tag)}}return await e.callHook("tags:beforeResolve",c),await e.callHook("tags:resolve",c),c.tags},ssr:n};return[Sw,Pw,Ow,Dw,Lw,Vw,Fw,...(t==null?void 0:t.plugins)||[]].forEach(c=>a.use(c)),a.hooks.callHook("init",a),a}function Bw(){return _m}const Hw=e0.startsWith("3");function jw(t){return typeof t=="function"?t():he(t)}function Pc(t,e=""){if(t instanceof Promise)return t;const n=jw(t);return!t||!n?n:Array.isArray(n)?n.map(r=>Pc(r,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,he(s)]:[r,Pc(s,r)])):n}const zw={hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=Pc(e.input)}}},ym="usehead";function Ww(t){return{install(n){Hw&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(ym,t))}}.install}function qw(t={}){t.domDelayFn=t.domDelayFn||(n=>Pn(()=>setTimeout(()=>n(),0)));const e=Uw(t);return e.use(zw),e.install=Ww(e),e}const kc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Nc="__unhead_injection_handler__";function Gw(t){kc[Nc]=t}function HM(){if(Nc in kc)return kc[Nc]();const t=st(ym);return t||Bw()}const Mi=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function Kw(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},s=(e||{}).decode||Xw;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const c=t.slice(i,o).trim();if(n[c]===void 0){let l=t.slice(o+1,a).trim();l.codePointAt(0)===34&&(l=l.slice(1,-1)),n[c]=Yw(l,s)}i=a+1}return n}function Yh(t,e,n){const r=n||{},s=r.encode||Jw;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!Mi.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!Mi.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!Mi.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!Mi.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!Qw(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":o+="; Priority=Low";break;case"medium":o+="; Priority=Medium";break;case"high":o+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o}function Qw(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}function Yw(t,e){try{return e(t)}catch{return t}}function Xw(t){return t.includes("%")?decodeURIComponent(t):t}function Jw(t){return encodeURIComponent(t)}function Zw(t){return{ctx:{table:t},matchAll:e=>Em(e,t)}}function vm(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,vm(s)])):new Map(Object.entries(t[n]));return e}function eT(t){return Zw(vm(t))}function Em(t,e){const n=[];for(const[s,i]of Xh(e.wildcard))t.startsWith(s)&&n.push(i);for(const[s,i]of Xh(e.dynamic))if(t.startsWith(s+"/")){const o="/"+t.slice(s.length).split("/").splice(2).join("/");n.push(...Em(o,i))}const r=e.static.get(t);return r&&n.push(r),n.filter(Boolean)}function Xh(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Oc(t,e,n=".",r){if(!Ha(e))return Oc(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Ha(o)&&Ha(s[i])?s[i]=Oc(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function Ha(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function wm(t){return(...e)=>e.reduce((n,r)=>Oc(n,r,"",t),{})}const Tm=wm(),tT=wm((t,e,n)=>{if(t[e]!==void 0&&typeof n=="function")return t[e]=n(t[e]),!0});function nT(t,e){try{return e in t}catch{return!1}}var rT=Object.defineProperty,sT=(t,e,n)=>e in t?rT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Dn=(t,e,n)=>(sT(t,typeof e!="symbol"?e+"":e,n),n);class xc extends Error{constructor(e,n={}){super(e,n),Dn(this,"statusCode",500),Dn(this,"fatal",!1),Dn(this,"unhandled",!1),Dn(this,"statusMessage"),Dn(this,"data"),Dn(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:Lc(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=Im(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}Dn(xc,"__h3_error__",!0);function Dc(t){if(typeof t=="string")return new xc(t);if(iT(t))return t;const e=new xc(t.message??t.statusMessage??"",{cause:t.cause||t});if(nT(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Lc(t.statusCode,e.statusCode):t.status&&(e.statusCode=Lc(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;Im(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function iT(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const oT=/[^\u0009\u0020-\u007E]/g;function Im(t=""){return t.replace(oT,"")}function Lc(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const bm=Symbol("layout-meta"),hi=Symbol("route"),Jo=()=>Gp(ie().payload,"error"),Fn=t=>{const e=Zo(t);try{const n=ie(),r=Jo();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},aT=async(t={})=>{const e=ie(),n=Jo();e.callHook("app:error:cleared",t),t.redirect&&await cn().replace(t.redirect),n.value=null},cT=t=>!!(t&&typeof t=="object"&&"__nuxt_error"in t),Zo=t=>{const e=Dc(t);return e.__nuxt_error=!0,e},cn=()=>{var t;return(t=ie())==null?void 0:t.$router},tu=()=>Gl()?st(hi,ie()._route):ie()._route;/*! @__NO_SIDE_EFFECTS__ */function jM(t){return t}const lT=()=>{try{if(ie()._processingMiddleware)return!0}catch{return!0}return!1},zM=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:ew(t.path||"/",t.query||{})+(t.hash||"");if(e!=null&&e.open){{const{target:a="_blank",windowFeatures:c={}}=e.open,l=Object.entries(c).filter(([u,h])=>h!==void 0).map(([u,h])=>`${u.toLowerCase()}=${h}`).join(", ");open(n,a,l)}return Promise.resolve()}const r=(e==null?void 0:e.external)||Yo(n,{acceptRelative:!0});if(r){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const a=Xo(n).protocol;if(a&&YE(a))throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)}const s=lT();if(!r&&s)return t;const i=cn(),o=ie();return r?(o._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,s?o.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?i.replace(t):i.push(t)},WM=t=>{if(!t)return!1;throw t=Zo(t),t.fatal&&ie().runWithContext(()=>Fn(t)),t},uT={nuxt:{buildId:"30f47c17-c2f8-4185-84d7-c41d3bedce11"},ui:{primary:"green",gray:"cool",colors:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","primary"],strategy:"merge"}},hT=tT(uT);function Am(){const t=ie();return t._appConfig||(t._appConfig=bn(hT)),t._appConfig}const dT=!1,Mc=!1,fT=!1,qM={componentName:"NuxtLink"},GM={deep:!0},KM={},pT="#__nuxt";let ro,Rm;function mT(){var e;const t=(e=Am().nuxt)==null?void 0:e.buildId;return ro=$fetch(Xl(`builds/meta/${t}.json`)),ro.then(n=>{Rm=eT(n.matcher)}),ro}function ea(){return ro||mT()}async function Cm(t){return await ea(),Tm({},...Rm.matchAll(t).reverse())}function Jh(t,e={}){const n=gT(t,e),r=ie(),s=r._payloadCache=r._payloadCache||{};return n in s||(s[n]=_T(t).then(i=>i?Sm(n).then(o=>o||(delete s[n],null)):(s[n]=null,null))),s[n]}const Zh="json";function gT(t,e={}){const n=new URL(t,"http://localhost");if(n.search)throw new Error("Payload URL cannot contain search params: "+t);if(n.host!=="localhost"||Yo(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=e.hash||(e.fresh?Date.now():"");return hm(ui().app.baseURL,n.pathname,r?`_payload.${r}.${Zh}`:`_payload.${Zh}`)}async function Sm(t){const e=fetch(t).then(n=>n.text().then(Pm));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function _T(t=tu().path){if((await ea()).prerendered.includes(t))return!0;const n=await Cm(t);return!!n.prerender&&!n.redirect}let Vi=null;async function yT(){if(Vi)return Vi;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=Pm(t.textContent||""),n=t.dataset.src?await Sm(t.dataset.src):void 0;return Vi={...e,...n,...window.__NUXT__},Vi}function Pm(t){return dw(t,ie()._payloadRevivers)}function so(t,e){ie()._payloadRevivers[t]=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw Kr(e)},Kr=function(t){return new Error("Firebase Database ("+km.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},vT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ta={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new ET;const d=i<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const p=l<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ET extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Om=function(t){const e=Nm(t);return ta.encodeByteArray(e,!0)},_o=function(t){return Om(t).replace(/\./g,"")},yo=function(t){try{return ta.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t){return xm(void 0,t)}function xm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!TT(n)||(t[n]=xm(t[n],e[n]));return t}function TT(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=()=>IT().__FIREBASE_DEFAULTS__,AT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},RT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yo(t[1]);return e&&JSON.parse(e)},nu=()=>{try{return bT()||AT()||RT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},CT=t=>{var e,n;return(n=(e=nu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ST=t=>{const e=CT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Dm=()=>{var t;return(t=nu())===null||t===void 0?void 0:t.config},PT=t=>{var e;return(e=nu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[_o(JSON.stringify(n)),_o(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ru(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function NT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mm(){return km.NODE_ADMIN===!0}function Vm(){try{return typeof indexedDB=="object"}catch{return!1}}function OT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="FirebaseError";class ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xT,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qr.prototype.create)}}class Qr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?DT(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ln(s,a,r)}}function DT(t,e){return t.replace(LT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const LT=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){return JSON.parse(t)}function Ve(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Ws(yo(i[0])||""),n=Ws(yo(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},MT=function(t){const e=Fm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},VT=function(t){const e=Fm(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Or(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ed(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vo(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Vc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(td(i)&&td(o)){if(!Vc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function td(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^i&(o^a),u=1518500249):(l=i^o^a,u=1859775393):h<60?(l=i&o|a&(i|o),u=2400959708):(l=i^o^a,u=3395469782);const d=(s<<5|s>>>27)+l+c+u+r[h]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function UT(t,e){const n=new $T(t,e);return n.subscribe.bind(n)}class $T{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");BT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ja),s.error===void 0&&(s.error=ja),s.complete===void 0&&(s.complete=ja);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ja(){}function HT(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,b(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},na=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t){return t&&t._delegate?t._delegate:t}class Nt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qT(e))try{this.getOrInitializeService({instanceIdentifier:Ln})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ln){return this.instances.has(e)}getOptions(e=Ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ln){return this.component?this.component.multipleInstances?e:Ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WT(t){return t===Ln?void 0:t}function qT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const KT={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},QT=G.INFO,YT={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},XT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=YT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class di{constructor(e){this.name=e,this._logLevel=QT,this._logHandler=XT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const JT=(t,e)=>e.some(n=>t instanceof n);let nd,rd;function ZT(){return nd||(nd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eI(){return rd||(rd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Um=new WeakMap,Fc=new WeakMap,$m=new WeakMap,za=new WeakMap,iu=new WeakMap;function tI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(En(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Um.set(n,t)}).catch(()=>{}),iu.set(e,t),e}function nI(t){if(Fc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Fc.set(t,e)}let Uc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$m.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return En(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rI(t){Uc=t(Uc)}function sI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wa(this),e,...n);return $m.set(r,e.sort?e.sort():[e]),En(r)}:eI().includes(t)?function(...e){return t.apply(Wa(this),e),En(Um.get(this))}:function(...e){return En(t.apply(Wa(this),e))}}function iI(t){return typeof t=="function"?sI(t):(t instanceof IDBTransaction&&nI(t),JT(t,ZT())?new Proxy(t,Uc):t)}function En(t){if(t instanceof IDBRequest)return tI(t);if(za.has(t))return za.get(t);const e=iI(t);return e!==t&&(za.set(t,e),iu.set(e,t)),e}const Wa=t=>iu.get(t);function oI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=En(o);return r&&o.addEventListener("upgradeneeded",c=>{r(En(o.result),c.oldVersion,c.newVersion,En(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const aI=["get","getKey","getAll","getAllKeys","count"],cI=["put","add","delete","clear"],qa=new Map;function sd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qa.get(e))return qa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=cI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||aI.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return qa.set(e,i),i}rI(t=>({...t,get:(e,n,r)=>sd(e,n)||t.get(e,n,r),has:(e,n)=>!!sd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $c="@firebase/app",id="0.9.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new di("@firebase/app"),hI="@firebase/app-compat",dI="@firebase/analytics-compat",fI="@firebase/analytics",pI="@firebase/app-check-compat",mI="@firebase/app-check",gI="@firebase/auth",_I="@firebase/auth-compat",yI="@firebase/database",vI="@firebase/database-compat",EI="@firebase/functions",wI="@firebase/functions-compat",TI="@firebase/installations",II="@firebase/installations-compat",bI="@firebase/messaging",AI="@firebase/messaging-compat",RI="@firebase/performance",CI="@firebase/performance-compat",SI="@firebase/remote-config",PI="@firebase/remote-config-compat",kI="@firebase/storage",NI="@firebase/storage-compat",OI="@firebase/firestore",xI="@firebase/firestore-compat",DI="firebase",LI="10.7.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="[DEFAULT]",MI={[$c]:"fire-core",[hI]:"fire-core-compat",[fI]:"fire-analytics",[dI]:"fire-analytics-compat",[mI]:"fire-app-check",[pI]:"fire-app-check-compat",[gI]:"fire-auth",[_I]:"fire-auth-compat",[yI]:"fire-rtdb",[vI]:"fire-rtdb-compat",[EI]:"fire-fn",[wI]:"fire-fn-compat",[TI]:"fire-iid",[II]:"fire-iid-compat",[bI]:"fire-fcm",[AI]:"fire-fcm-compat",[RI]:"fire-perf",[CI]:"fire-perf-compat",[SI]:"fire-rc",[PI]:"fire-rc-compat",[kI]:"fire-gcs",[NI]:"fire-gcs-compat",[OI]:"fire-fst",[xI]:"fire-fst-compat","fire-js":"fire-js",[DI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new Map,Hc=new Map;function VI(t,e){try{t.container.addComponent(e)}catch(n){Xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qt(t){const e=t.name;if(Hc.has(e))return Xn.debug(`There were multiple attempts to register component ${e}.`),!1;Hc.set(e,t);for(const n of Eo.values())VI(n,t);return!0}function FI(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wn=new Qr("app","Firebase",UI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=LI;function Bm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw wn.create("bad-app-name",{appName:String(s)});if(n||(n=Dm()),!n)throw wn.create("no-options");const i=Eo.get(s);if(i){if(Vc(n,i.options)&&Vc(r,i.config))return i;throw wn.create("duplicate-app",{appName:s})}const o=new GT(s);for(const c of Hc.values())o.addComponent(c);const a=new $I(n,r,o);return Eo.set(s,a),a}function Hm(t=Bc){const e=Eo.get(t);if(!e&&t===Bc&&Dm())return Bm();if(!e)throw wn.create("no-app",{appName:t});return e}function ct(t,e,n){var r;let s=(r=MI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xn.warn(a.join(" "));return}qt(new Nt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI="firebase-heartbeat-database",HI=1,qs="firebase-heartbeat-store";let Ga=null;function jm(){return Ga||(Ga=oI(BI,HI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qs)}}}).catch(t=>{throw wn.create("idb-open",{originalErrorMessage:t.message})})),Ga}async function jI(t){try{return await(await jm()).transaction(qs).objectStore(qs).get(zm(t))}catch(e){if(e instanceof ln)Xn.warn(e.message);else{const n=wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xn.warn(n.message)}}}async function od(t,e){try{const r=(await jm()).transaction(qs,"readwrite");await r.objectStore(qs).put(e,zm(t)),await r.done}catch(n){if(n instanceof ln)Xn.warn(n.message);else{const r=wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xn.warn(r.message)}}}function zm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=1024,WI=30*24*60*60*1e3;class qI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ad();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=WI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ad(),{heartbeatsToSend:r,unsentEntries:s}=GI(this._heartbeatsCache.heartbeats),i=_o(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ad(){return new Date().toISOString().substring(0,10)}function GI(t,e=zI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),cd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),cd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class KI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vm()?OT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return od(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return od(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function cd(t){return _o(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(t){qt(new Nt("platform-logger",e=>new lI(e),"PRIVATE")),qt(new Nt("heartbeat",e=>new qI(e),"PRIVATE")),ct($c,id,t),ct($c,id,"esm2017"),ct("fire-js","")}QI("");var YI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,ou=ou||{},U=YI||self;function ra(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function fi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function XI(t){return Object.prototype.hasOwnProperty.call(t,Ka)&&t[Ka]||(t[Ka]=++JI)}var Ka="closure_uid_"+(1e9*Math.random()>>>0),JI=0;function ZI(t,e,n){return t.call.apply(t.bind,arguments)}function eb(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Ge(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ge=ZI:Ge=eb,Ge.apply(null,arguments)}function Fi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function De(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function kn(){this.s=this.s,this.o=this.o}var tb=0;kn.prototype.s=!1;kn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),tb!=0)&&XI(this)};kn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Wm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function au(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ld(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ra(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function Ke(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var nb=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};U.addEventListener("test",n,e),U.removeEventListener("test",n,e)}catch{}return t}();function Gs(t){return/^[\s\xa0]*$/.test(t)}function sa(){var t=U.navigator;return t&&(t=t.userAgent)?t:""}function Ft(t){return sa().indexOf(t)!=-1}function cu(t){return cu[" "](t),t}cu[" "]=function(){};function rb(t,e){var n=Qb;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var sb=Ft("Opera"),xr=Ft("Trident")||Ft("MSIE"),qm=Ft("Edge"),jc=qm||xr,Gm=Ft("Gecko")&&!(sa().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge"))&&!(Ft("Trident")||Ft("MSIE"))&&!Ft("Edge"),ib=sa().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge");function Km(){var t=U.document;return t?t.documentMode:void 0}var zc;e:{var Qa="",Ya=function(){var t=sa();if(Gm)return/rv:([^\);]+)(\)|;)/.exec(t);if(qm)return/Edge\/([\d\.]+)/.exec(t);if(xr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ib)return/WebKit\/(\S+)/.exec(t);if(sb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ya&&(Qa=Ya?Ya[1]:""),xr){var Xa=Km();if(Xa!=null&&Xa>parseFloat(Qa)){zc=String(Xa);break e}}zc=Qa}var Wc;if(U.document&&xr){var ud=Km();Wc=ud||parseInt(zc,10)||void 0}else Wc=void 0;var ob=Wc;function Ks(t,e){if(Ke.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Gm){e:{try{cu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ab[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ks.$.h.call(this)}}De(Ks,Ke);var ab={2:"touch",3:"pen",4:"mouse"};Ks.prototype.h=function(){Ks.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var pi="closure_listenable_"+(1e6*Math.random()|0),cb=0;function lb(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++cb,this.fa=this.ia=!1}function ia(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function lu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function ub(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Qm(t){const e={};for(const n in t)e[n]=t[n];return e}const hd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ym(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<hd.length;i++)n=hd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function oa(t){this.src=t,this.g={},this.h=0}oa.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Gc(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new lb(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function qc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Wm(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ia(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Gc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var uu="closure_lm_"+(1e6*Math.random()|0),Ja={};function Xm(t,e,n,r,s){if(r&&r.once)return Zm(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Xm(t,e[i],n,r,s);return null}return n=fu(n),t&&t[pi]?t.O(e,n,fi(r)?!!r.capture:!!r,s):Jm(t,e,n,!1,r,s)}function Jm(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=fi(s)?!!s.capture:!!s,a=du(t);if(a||(t[uu]=a=new oa(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=hb(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nb||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(tg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function hb(){function t(n){return e.call(t.src,t.listener,n)}const e=db;return t}function Zm(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Zm(t,e[i],n,r,s);return null}return n=fu(n),t&&t[pi]?t.P(e,n,fi(r)?!!r.capture:!!r,s):Jm(t,e,n,!0,r,s)}function eg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)eg(t,e[i],n,r,s);else r=fi(r)?!!r.capture:!!r,n=fu(n),t&&t[pi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Gc(i,n,r,s),-1<n&&(ia(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=du(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Gc(e,n,r,s)),(n=-1<t?e[t]:null)&&hu(n))}function hu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[pi])qc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(tg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=du(e))?(qc(n,t),n.h==0&&(n.src=null,e[uu]=null)):ia(t)}}}function tg(t){return t in Ja?Ja[t]:Ja[t]="on"+t}function db(t,e){if(t.fa)t=!0;else{e=new Ks(e,this);var n=t.listener,r=t.la||t.src;t.ia&&hu(t),t=n.call(r,e)}return t}function du(t){return t=t[uu],t instanceof oa?t:null}var Za="__closure_events_fn_"+(1e9*Math.random()>>>0);function fu(t){return typeof t=="function"?t:(t[Za]||(t[Za]=function(e){return t.handleEvent(e)}),t[Za])}function Oe(){kn.call(this),this.i=new oa(this),this.S=this,this.J=null}De(Oe,kn);Oe.prototype[pi]=!0;Oe.prototype.removeEventListener=function(t,e,n,r){eg(this,t,e,n,r)};function Fe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ke(e,t);else if(e instanceof Ke)e.target=e.target||t;else{var s=e;e=new Ke(r,t),Ym(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ui(o,r,!0,e)&&s}if(o=e.g=t,s=Ui(o,r,!0,e)&&s,s=Ui(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ui(o,r,!1,e)&&s}Oe.prototype.N=function(){if(Oe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ia(n[r]);delete t.g[e],t.h--}}this.J=null};Oe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Oe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ui(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&qc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var pu=U.JSON.stringify;class fb{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function pb(){var t=mu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class mb{constructor(){this.h=this.g=null}add(e,n){const r=ng.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ng=new fb(()=>new gb,t=>t.reset());class gb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function _b(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function yb(t){U.setTimeout(()=>{throw t},0)}let Qs,Ys=!1,mu=new mb,rg=()=>{const t=U.Promise.resolve(void 0);Qs=()=>{t.then(vb)}};var vb=()=>{for(var t;t=pb();){try{t.h.call(t.g)}catch(n){yb(n)}var e=ng;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ys=!1};function aa(t,e){Oe.call(this),this.h=t||1,this.g=e||U,this.j=Ge(this.qb,this),this.l=Date.now()}De(aa,Oe);A=aa.prototype;A.ga=!1;A.T=null;A.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Fe(this,"tick"),this.ga&&(gu(this),this.start()))}};A.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function gu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}A.N=function(){aa.$.N.call(this),gu(this),delete this.g};function _u(t,e,n){if(typeof t=="function")n&&(t=Ge(t,n));else if(t&&typeof t.handleEvent=="function")t=Ge(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:U.setTimeout(t,e||0)}function sg(t){t.g=_u(()=>{t.g=null,t.i&&(t.i=!1,sg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Eb extends kn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:sg(this)}N(){super.N(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xs(t){kn.call(this),this.h=t,this.g={}}De(Xs,kn);var dd=[];function ig(t,e,n,r){Array.isArray(n)||(n&&(dd[0]=n.toString()),n=dd);for(var s=0;s<n.length;s++){var i=Xm(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function og(t){lu(t.g,function(e,n){this.g.hasOwnProperty(n)&&hu(e)},t),t.g={}}Xs.prototype.N=function(){Xs.$.N.call(this),og(this)};Xs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ca(){this.g=!0}ca.prototype.Ea=function(){this.g=!1};function wb(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Tb(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function yr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+bb(t,n)+(r?" "+r:"")})}function Ib(t,e){t.info(function(){return"TIMEOUT: "+e})}ca.prototype.info=function(){};function bb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return pu(n)}catch{return e}}var ar={},fd=null;function la(){return fd=fd||new Oe}ar.Ta="serverreachability";function ag(t){Ke.call(this,ar.Ta,t)}De(ag,Ke);function Js(t){const e=la();Fe(e,new ag(e))}ar.STAT_EVENT="statevent";function cg(t,e){Ke.call(this,ar.STAT_EVENT,t),this.stat=e}De(cg,Ke);function Je(t){const e=la();Fe(e,new cg(e,t))}ar.Ua="timingevent";function lg(t,e){Ke.call(this,ar.Ua,t),this.size=e}De(lg,Ke);function mi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){t()},e)}var ua={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ug={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function yu(){}yu.prototype.h=null;function pd(t){return t.h||(t.h=t.i())}function hg(){}var gi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function vu(){Ke.call(this,"d")}De(vu,Ke);function Eu(){Ke.call(this,"c")}De(Eu,Ke);var Kc;function ha(){}De(ha,yu);ha.prototype.g=function(){return new XMLHttpRequest};ha.prototype.i=function(){return{}};Kc=new ha;function _i(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Xs(this),this.P=Ab,t=jc?125:void 0,this.V=new aa(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new dg}function dg(){this.i=null,this.g="",this.h=!1}var Ab=45e3,fg={},Qc={};A=_i.prototype;A.setTimeout=function(t){this.P=t};function Yc(t,e,n){t.L=1,t.A=fa(sn(e)),t.u=n,t.S=!0,pg(t,null)}function pg(t,e){t.G=Date.now(),yi(t),t.B=sn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Tg(n.i,"t",r),t.o=0,n=t.l.J,t.h=new dg,t.g=jg(t.l,n?e:null,!t.u),0<t.O&&(t.M=new Eb(Ge(t.Pa,t,t.g),t.O)),ig(t.U,t.g,"readystatechange",t.nb),e=t.I?Qm(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Js(),wb(t.j,t.v,t.B,t.m,t.W,t.u)}A.nb=function(t){t=t.target;const e=this.M;e&&$t(t)==3?e.l():this.Pa(t)};A.Pa=function(t){try{if(t==this.g)e:{const u=$t(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||jc||this.g&&(this.h.h||this.g.ja()||yd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Js(3):Js(2)),da(this);var n=this.g.da();this.ca=n;t:if(mg(this)){var r=yd(this.g);t="";var s=r.length,i=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Un(this),Is(this);var o="";break t}this.h.i=new U.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Tb(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gs(a)){var l=a;break t}}l=null}if(n=l)yr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xc(this,n);else{this.i=!1,this.s=3,Je(12),Un(this),Is(this);break e}}this.S?(gg(this,u,o),jc&&this.i&&u==3&&(ig(this.U,this.V,"tick",this.mb),this.V.start())):(yr(this.j,this.m,o,null),Xc(this,o)),u==4&&Un(this),this.i&&!this.J&&(u==4?Ug(this.l,this):(this.i=!1,yi(this)))}else qb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Je(12)):(this.s=0,Je(13)),Un(this),Is(this)}}}catch{}finally{}};function mg(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function gg(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=Rb(t,n),s==Qc){e==4&&(t.s=4,Je(14),r=!1),yr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==fg){t.s=4,Je(15),yr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else yr(t.j,t.m,s,null),Xc(t,s);mg(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Je(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ru(e),e.M=!0,Je(11))):(yr(t.j,t.m,n,"[Invalid Chunked Response]"),Un(t),Is(t))}A.mb=function(){if(this.g){var t=$t(this.g),e=this.g.ja();this.o<e.length&&(da(this),gg(this,t,e),this.i&&t!=4&&yi(this))}};function Rb(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Qc:(n=Number(e.substring(n,r)),isNaN(n)?fg:(r+=1,r+n>e.length?Qc:(e=e.slice(r,r+n),t.o=r+n,e)))}A.cancel=function(){this.J=!0,Un(this)};function yi(t){t.Y=Date.now()+t.P,_g(t,t.P)}function _g(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=mi(Ge(t.lb,t),e)}function da(t){t.C&&(U.clearTimeout(t.C),t.C=null)}A.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(Ib(this.j,this.B),this.L!=2&&(Js(),Je(17)),Un(this),this.s=2,Is(this)):_g(this,this.Y-t)};function Is(t){t.l.H==0||t.J||Ug(t.l,t)}function Un(t){da(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,gu(t.V),og(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Xc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Jc(n.i,t))){if(!t.K&&Jc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Io(n),_a(n);else break e;Au(n),Je(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=mi(Ge(n.ib,n),6e3));if(1>=Ag(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else $n(n,11)}else if((t.K||n.g==t)&&Io(n),!Gs(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=r.i;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(wu(i,i.h),i.h=null))}if(r.F){const g=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.Da=g,me(r.I,r.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Hg(r,r.J?r.pa:null,r.Y),o.K){Rg(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(da(a),yi(a)),r.g=o}else Vg(r);0<n.j.length&&ya(n)}else l[0]!="stop"&&l[0]!="close"||$n(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?$n(n,7):bu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Js(4)}catch{}}function Cb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ra(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Sb(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ra(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function yg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ra(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Sb(t),r=Cb(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var vg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function qn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof qn){this.h=t.h,wo(this,t.j),this.s=t.s,this.g=t.g,To(this,t.m),this.l=t.l;var e=t.i,n=new Zs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),md(this,n),this.o=t.o}else t&&(e=String(t).match(vg))?(this.h=!1,wo(this,e[1]||"",!0),this.s=ys(e[2]||""),this.g=ys(e[3]||"",!0),To(this,e[4]),this.l=ys(e[5]||"",!0),md(this,e[6]||"",!0),this.o=ys(e[7]||"")):(this.h=!1,this.i=new Zs(null,this.h))}qn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(vs(e,gd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(vs(e,gd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(vs(n,n.charAt(0)=="/"?Ob:Nb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",vs(n,Db)),t.join("")};function sn(t){return new qn(t)}function wo(t,e,n){t.j=n?ys(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function To(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function md(t,e,n){e instanceof Zs?(t.i=e,Lb(t.i,t.h)):(n||(e=vs(e,xb)),t.i=new Zs(e,t.h))}function me(t,e,n){t.i.set(e,n)}function fa(t){return me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ys(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function vs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,kb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function kb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var gd=/[#\/\?@]/g,Nb=/[#\?:]/g,Ob=/[#\?]/g,xb=/[#\?@]/g,Db=/#/g;function Zs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Nn(t){t.g||(t.g=new Map,t.h=0,t.i&&Pb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}A=Zs.prototype;A.add=function(t,e){Nn(this),this.i=null,t=Jr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Eg(t,e){Nn(t),e=Jr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function wg(t,e){return Nn(t),e=Jr(t,e),t.g.has(e)}A.forEach=function(t,e){Nn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};A.ta=function(){Nn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};A.Z=function(t){Nn(this);let e=[];if(typeof t=="string")wg(this,t)&&(e=e.concat(this.g.get(Jr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};A.set=function(t,e){return Nn(this),this.i=null,t=Jr(this,t),wg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};A.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Tg(t,e,n){Eg(t,e),0<n.length&&(t.i=null,t.g.set(Jr(t,e),au(n)),t.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Jr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Lb(t,e){e&&!t.j&&(Nn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Eg(this,r),Tg(this,s,n))},t)),t.j=e}var Mb=class{constructor(t,e){this.g=t,this.map=e}};function Ig(t){this.l=t||Vb,U.PerformanceNavigationTiming?(t=U.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(U.g&&U.g.Ka&&U.g.Ka()&&U.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Vb=10;function bg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ag(t){return t.h?1:t.g?t.g.size:0}function Jc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function wu(t,e){t.g?t.g.add(e):t.h=e}function Rg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ig.prototype.cancel=function(){if(this.i=Cg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Cg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return au(t.i)}var Fb=class{stringify(t){return U.JSON.stringify(t,void 0)}parse(t){return U.JSON.parse(t,void 0)}};function Ub(){this.g=new Fb}function $b(t,e,n){const r=n||"";try{yg(t,function(s,i){let o=s;fi(s)&&(o=pu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Bb(t,e){const n=new ca;if(U.Image){const r=new Image;r.onload=Fi($i,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Fi($i,n,r,"TestLoadImage: error",!1,e),r.onabort=Fi($i,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Fi($i,n,r,"TestLoadImage: timeout",!1,e),U.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function $i(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function pa(t){this.l=t.ec||null,this.j=t.ob||!1}De(pa,yu);pa.prototype.g=function(){return new ma(this.l,this.j)};pa.prototype.i=function(t){return function(){return t}}({});function ma(t,e){Oe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Tu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}De(ma,Oe);var Tu=0;A=ma.prototype;A.open=function(t,e){if(this.readyState!=Tu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ei(this)};A.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||U).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vi(this)),this.readyState=Tu};A.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Sg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}A.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?vi(this):ei(this),this.readyState==3&&Sg(this)}};A.Za=function(t){this.g&&(this.response=this.responseText=t,vi(this))};A.Ya=function(t){this.g&&(this.response=t,vi(this))};A.ka=function(){this.g&&vi(this)};function vi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ei(t)}A.setRequestHeader=function(t,e){this.v.append(t,e)};A.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ei(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ma.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Hb=U.JSON.parse;function Ee(t){Oe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Pg,this.L=this.M=!1}De(Ee,Oe);var Pg="",jb=/^https?$/i,zb=["POST","PUT"];A=Ee.prototype;A.Oa=function(t){this.M=t};A.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Kc.g(),this.C=this.u?pd(this.u):pd(Kc),this.g.onreadystatechange=Ge(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){_d(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=U.FormData&&t instanceof U.FormData,!(0<=Wm(zb,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Og(this),0<this.B&&((this.L=Wb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ge(this.ua,this)):this.A=_u(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){_d(this,i)}};function Wb(t){return xr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}A.ua=function(){typeof ou<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Fe(this,"timeout"),this.abort(8))};function _d(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,kg(t),ga(t)}function kg(t){t.F||(t.F=!0,Fe(t,"complete"),Fe(t,"error"))}A.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Fe(this,"complete"),Fe(this,"abort"),ga(this))};A.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ga(this,!0)),Ee.$.N.call(this)};A.La=function(){this.s||(this.G||this.v||this.l?Ng(this):this.kb())};A.kb=function(){Ng(this)};function Ng(t){if(t.h&&typeof ou<"u"&&(!t.C[1]||$t(t)!=4||t.da()!=2)){if(t.v&&$t(t)==4)_u(t.La,0,t);else if(Fe(t,"readystatechange"),$t(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(vg)[1]||null;!s&&U.self&&U.self.location&&(s=U.self.location.protocol.slice(0,-1)),r=!jb.test(s?s.toLowerCase():"")}n=r}if(n)Fe(t,"complete"),Fe(t,"success");else{t.m=6;try{var i=2<$t(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",kg(t)}}finally{ga(t)}}}}function ga(t,e){if(t.g){Og(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Fe(t,"ready");try{n.onreadystatechange=r}catch{}}}function Og(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(U.clearTimeout(t.A),t.A=null)}A.isActive=function(){return!!this.g};function $t(t){return t.g?t.g.readyState:0}A.da=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}};A.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Hb(e)}};function yd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Pg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function qb(t){const e={};t=(t.g&&2<=$t(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Gs(t[r]))continue;var n=_b(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}ub(e,function(r){return r.join(", ")})}A.Ia=function(){return this.m};A.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function xg(t){let e="";return lu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Iu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=xg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):me(t,e,n))}function as(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Dg(t){this.Ga=0,this.j=[],this.l=new ca,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=as("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=as("baseRetryDelayMs",5e3,t),this.hb=as("retryDelaySeedMs",1e4,t),this.eb=as("forwardChannelMaxRetries",2,t),this.xa=as("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Ig(t&&t.concurrentRequestLimit),this.Ja=new Ub,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}A=Dg.prototype;A.ra=8;A.H=1;function bu(t){if(Lg(t),t.H==3){var e=t.W++,n=sn(t.I);if(me(n,"SID",t.K),me(n,"RID",e),me(n,"TYPE","terminate"),Ei(t,n),e=new _i(t,t.l,e),e.L=2,e.A=fa(sn(n)),n=!1,U.navigator&&U.navigator.sendBeacon)try{n=U.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&U.Image&&(new Image().src=e.A,n=!0),n||(e.g=jg(e.l,null),e.g.ha(e.A)),e.G=Date.now(),yi(e)}Bg(t)}function _a(t){t.g&&(Ru(t),t.g.cancel(),t.g=null)}function Lg(t){_a(t),t.u&&(U.clearTimeout(t.u),t.u=null),Io(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&U.clearTimeout(t.m),t.m=null)}function ya(t){if(!bg(t.i)&&!t.m){t.m=!0;var e=t.Na;Qs||rg(),Ys||(Qs(),Ys=!0),mu.add(e,t),t.C=0}}function Gb(t,e){return Ag(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=mi(Ge(t.Na,t,e),$g(t,t.C)),t.C++,!0)}A.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new _i(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Qm(i),Ym(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Mg(this,s,e),n=sn(this.I),me(n,"RID",t),me(n,"CVER",22),this.F&&me(n,"X-HTTP-Session-Id",this.F),Ei(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(xg(i)))+"&"+e:this.o&&Iu(n,this.o,i)),wu(this.i,s),this.bb&&me(n,"TYPE","init"),this.P?(me(n,"$req",e),me(n,"SID","null"),s.aa=!0,Yc(s,n,null)):Yc(s,n,e),this.H=2}}else this.H==3&&(t?vd(this,t):this.j.length==0||bg(this.i)||vd(this))};function vd(t,e){var n;e?n=e.m:n=t.W++;const r=sn(t.I);me(r,"SID",t.K),me(r,"RID",n),me(r,"AID",t.V),Ei(t,r),t.o&&t.s&&Iu(r,t.o,t.s),n=new _i(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Mg(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),wu(t.i,n),Yc(n,r,e)}function Ei(t,e){t.na&&lu(t.na,function(n,r){me(e,r,n)}),t.h&&yg({},function(n,r){me(e,r,n)})}function Mg(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ge(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{$b(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Vg(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Qs||rg(),Ys||(Qs(),Ys=!0),mu.add(e,t),t.A=0}}function Au(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=mi(Ge(t.Ma,t),$g(t,t.A)),t.A++,!0)}A.Ma=function(){if(this.u=null,Fg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=mi(Ge(this.jb,this),t)}};A.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Je(10),_a(this),Fg(this))};function Ru(t){t.B!=null&&(U.clearTimeout(t.B),t.B=null)}function Fg(t){t.g=new _i(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=sn(t.wa);me(e,"RID","rpc"),me(e,"SID",t.K),me(e,"AID",t.V),me(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&me(e,"TO",t.qa),me(e,"TYPE","xmlhttp"),Ei(t,e),t.o&&t.s&&Iu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=fa(sn(e)),n.u=null,n.S=!0,pg(n,t)}A.ib=function(){this.v!=null&&(this.v=null,_a(this),Au(this),Je(19))};function Io(t){t.v!=null&&(U.clearTimeout(t.v),t.v=null)}function Ug(t,e){var n=null;if(t.g==e){Io(t),Ru(t),t.g=null;var r=2}else if(Jc(t.i,e))n=e.F,Rg(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=la(),Fe(r,new lg(r,n)),ya(t)}else Vg(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&Gb(t,e)||r==2&&Au(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:$n(t,5);break;case 4:$n(t,10);break;case 3:$n(t,6);break;default:$n(t,2)}}}function $g(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function $n(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ge(t.pb,t);n||(n=new qn("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||wo(n,"https"),fa(n)),Bb(n.toString(),r)}else Je(2);t.H=0,t.h&&t.h.za(e),Bg(t),Lg(t)}A.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Je(2)):(this.l.info("Failed to ping google.com"),Je(1))};function Bg(t){if(t.H=0,t.ma=[],t.h){const e=Cg(t.i);(e.length!=0||t.j.length!=0)&&(ld(t.ma,e),ld(t.ma,t.j),t.i.i.length=0,au(t.j),t.j.length=0),t.h.ya()}}function Hg(t,e,n){var r=n instanceof qn?sn(n):new qn(n);if(r.g!="")e&&(r.g=e+"."+r.g),To(r,r.m);else{var s=U.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new qn(null);r&&wo(i,r),e&&(i.g=e),s&&To(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&me(r,n,e),me(r,"VER",t.ra),Ei(t,r),r}function jg(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Ee(new pa({ob:n})):new Ee(t.va),e.Oa(t.J),e}A.isActive=function(){return!!this.h&&this.h.isActive(this)};function zg(){}A=zg.prototype;A.Ba=function(){};A.Aa=function(){};A.za=function(){};A.ya=function(){};A.isActive=function(){return!0};A.Va=function(){};function bo(){if(xr&&!(10<=Number(ob)))throw Error("Environmental error: no available transport.")}bo.prototype.g=function(t,e){return new dt(t,e)};function dt(t,e){Oe.call(this),this.g=new Dg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Gs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Gs(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Zr(this)}De(dt,Oe);dt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Je(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Hg(t,null,t.Y),ya(t)};dt.prototype.close=function(){bu(this.g)};dt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=pu(t),t=n);e.j.push(new Mb(e.fb++,t)),e.H==3&&ya(e)};dt.prototype.N=function(){this.g.h=null,delete this.j,bu(this.g),delete this.g,dt.$.N.call(this)};function Wg(t){vu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}De(Wg,vu);function qg(){Eu.call(this),this.status=1}De(qg,Eu);function Zr(t){this.g=t}De(Zr,zg);Zr.prototype.Ba=function(){Fe(this.g,"a")};Zr.prototype.Aa=function(t){Fe(this.g,new Wg(t))};Zr.prototype.za=function(t){Fe(this.g,new qg)};Zr.prototype.ya=function(){Fe(this.g,"b")};function Kb(){this.blockSize=-1}function Ot(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}De(Ot,Kb);Ot.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ec(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Ot.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)ec(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){ec(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){ec(this,r),s=0;break}}this.h=s,this.i+=e};Ot.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ce(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var Qb={};function Cu(t){return-128<=t&&128>t?rb(t,function(e){return new ce([e|0],0>e?-1:0)}):new ce([t|0],0>t?-1:0)}function Bt(t){if(isNaN(t)||!isFinite(t))return Tr;if(0>t)return Me(Bt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Zc;return new ce(e,0)}function Gg(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Me(Gg(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Bt(Math.pow(e,8)),r=Tr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Bt(Math.pow(e,i)),r=r.R(i).add(Bt(o))):(r=r.R(n),r=r.add(Bt(o)))}return r}var Zc=4294967296,Tr=Cu(0),el=Cu(1),Ed=Cu(16777216);A=ce.prototype;A.ea=function(){if(_t(this))return-Me(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Zc+r)*e,e*=Zc}return t};A.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(tn(this))return"0";if(_t(this))return"-"+Me(this).toString(t);for(var e=Bt(Math.pow(t,6)),n=this,r="";;){var s=Ro(n,e).g;n=Ao(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,tn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};A.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function tn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function _t(t){return t.h==-1}A.X=function(t){return t=Ao(this,t),_t(t)?-1:tn(t)?0:1};function Me(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ce(n,~t.h).add(el)}A.abs=function(){return _t(this)?Me(this):this};A.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ce(n,n[n.length-1]&-2147483648?-1:0)};function Ao(t,e){return t.add(Me(e))}A.R=function(t){if(tn(this)||tn(t))return Tr;if(_t(this))return _t(t)?Me(this).R(Me(t)):Me(Me(this).R(t));if(_t(t))return Me(this.R(Me(t)));if(0>this.X(Ed)&&0>t.X(Ed))return Bt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Bi(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Bi(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Bi(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Bi(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ce(n,0)};function Bi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function cs(t,e){this.g=t,this.h=e}function Ro(t,e){if(tn(e))throw Error("division by zero");if(tn(t))return new cs(Tr,Tr);if(_t(t))return e=Ro(Me(t),e),new cs(Me(e.g),Me(e.h));if(_t(e))return e=Ro(t,Me(e)),new cs(Me(e.g),e.h);if(30<t.g.length){if(_t(t)||_t(e))throw Error("slowDivide_ only works with positive integers.");for(var n=el,r=e;0>=r.X(t);)n=wd(n),r=wd(r);var s=hr(n,1),i=hr(r,1);for(r=hr(r,2),n=hr(n,2);!tn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=hr(r,1),n=hr(n,1)}return e=Ao(t,s.R(e)),new cs(s,e)}for(s=Tr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Bt(n),o=i.R(e);_t(o)||0<o.X(t);)n-=r,i=Bt(n),o=i.R(e);tn(i)&&(i=el),s=s.add(i),t=Ao(t,o)}return new cs(s,t)}A.gb=function(t){return Ro(this,t).h};A.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ce(n,this.h&t.h)};A.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ce(n,this.h|t.h)};A.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ce(n,this.h^t.h)};function wd(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ce(n,t.h)}function hr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ce(s,t.h)}bo.prototype.createWebChannel=bo.prototype.g;dt.prototype.send=dt.prototype.u;dt.prototype.open=dt.prototype.m;dt.prototype.close=dt.prototype.close;ua.NO_ERROR=0;ua.TIMEOUT=8;ua.HTTP_ERROR=6;ug.COMPLETE="complete";hg.EventType=gi;gi.OPEN="a";gi.CLOSE="b";gi.ERROR="c";gi.MESSAGE="d";Oe.prototype.listen=Oe.prototype.O;Ee.prototype.listenOnce=Ee.prototype.P;Ee.prototype.getLastError=Ee.prototype.Sa;Ee.prototype.getLastErrorCode=Ee.prototype.Ia;Ee.prototype.getStatus=Ee.prototype.da;Ee.prototype.getResponseJson=Ee.prototype.Wa;Ee.prototype.getResponseText=Ee.prototype.ja;Ee.prototype.send=Ee.prototype.ha;Ee.prototype.setWithCredentials=Ee.prototype.Oa;Ot.prototype.digest=Ot.prototype.l;Ot.prototype.reset=Ot.prototype.reset;Ot.prototype.update=Ot.prototype.j;ce.prototype.add=ce.prototype.add;ce.prototype.multiply=ce.prototype.R;ce.prototype.modulo=ce.prototype.gb;ce.prototype.compare=ce.prototype.X;ce.prototype.toNumber=ce.prototype.ea;ce.prototype.toString=ce.prototype.toString;ce.prototype.getBits=ce.prototype.D;ce.fromNumber=Bt;ce.fromString=Gg;var Yb=function(){return new bo},Xb=function(){return la()},tc=ua,Jb=ug,Zb=ar,Td={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Hi=hg,eA=Ee,tA=Ot,Ir=ce;const Id="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new di("@firebase/firestore");function ls(){return Jn.logLevel}function N(t,...e){if(Jn.logLevel<=G.DEBUG){const n=e.map(Su);Jn.debug(`Firestore (${es}): ${t}`,...n)}}function on(t,...e){if(Jn.logLevel<=G.ERROR){const n=e.map(Su);Jn.error(`Firestore (${es}): ${t}`,...n)}}function Dr(t,...e){if(Jn.logLevel<=G.WARN){const n=e.map(Su);Jn.warn(`Firestore (${es}): ${t}`,...n)}}function Su(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t="Unexpected state"){const e=`FIRESTORE (${es}) INTERNAL ASSERTION FAILED: `+t;throw on(e),new Error(e)}function Ae(t,e){t||H()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(He.UNAUTHENTICATED))}shutdown(){}}class rA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sA{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new Kg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new He(e)}}class iA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=He.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class oA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new iA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class aA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.R=n.token,new aA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=lA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function Lr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new Ze(0,0))}static max(){return new $(new Ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(),r===void 0?r=e.length-n:r>e.length-n&&H(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ti.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ti?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends ti{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const hA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends ti{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return hA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new M(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new M(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new M(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(ve.fromString(e))}static fromName(e){return new V(ve.fromString(e).popFirst(5))}static empty(){return new V(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new ve(e.slice()))}}function dA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=$.fromTimestamp(r===1e9?new Ze(n+1,0):new Ze(n,r));return new An(s,V.empty(),e)}function fA(t){return new An(t.readTime,t.key,-1)}class An{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new An($.min(),V.empty(),-1)}static max(){return new An($.max(),V.empty(),-1)}}function pA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pu(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==mA)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,r)=>{n(e)})}static reject(e){return new E((n,r)=>{r(e)})}static waitFor(e){return new E((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=E.resolve(!1);for(const r of e)n=n.next(s=>s?E.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new E((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new E((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function wi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}ku._e=-1;function va(t){return t==null}function tl(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ea(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _A(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xe=class nl{constructor(e,n){this.comparator=e,this.root=n||Tn.EMPTY}insert(e,n){return new nl(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Tn.BLACK,null,null))}remove(e){return new nl(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ji(this.root,e,this.comparator,!0)}},ji=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Tn=class en{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??en.RED,this.left=s??en.EMPTY,this.right=i??en.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new en(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return en.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return en.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,en.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,en.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}};Tn.EMPTY=null,Tn.RED=!0,Tn.BLACK=!1;Tn.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Tn(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ad(this.data.getIterator())}getIteratorFrom(e){return new Ad(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ue(this.comparator);return n.data=e,n}}class Ad{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new yn([])}unionWith(e){let n=new Ue(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Lr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Qg("Invalid base64 string: "+i):i}}(e);return new Qe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const yA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=yA.exec(t);if(Ae(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zn(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ou(t){const e=t.mapValue.fields.__previous_value__;return Nu(e)?Ou(e):e}function ni(t){const e=Rn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class ri{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ri("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ri&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nu(t)?4:EA(t)?9007199254740991:10:H()}function Gt(t,e){if(t===e)return!0;const n=er(t);if(n!==er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ni(t).isEqual(ni(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Rn(s.timestampValue),a=Rn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Zn(s.bytesValue).isEqual(Zn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return be(s.geoPointValue.latitude)===be(i.geoPointValue.latitude)&&be(s.geoPointValue.longitude)===be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return be(s.integerValue)===be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=be(s.doubleValue),a=be(i.doubleValue);return o===a?tl(o)===tl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Lr(t.arrayValue.values||[],e.arrayValue.values||[],Gt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(bd(o)!==bd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Gt(o[c],a[c])))return!1;return!0}(t,e);default:return H()}}function si(t,e){return(t.values||[]).find(n=>Gt(n,e))!==void 0}function Mr(t,e){if(t===e)return 0;const n=er(t),r=er(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=be(i.integerValue||i.doubleValue),c=be(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Rd(t.timestampValue,e.timestampValue);case 4:return Rd(ni(t),ni(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Zn(i),c=Zn(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=re(a[l],c[l]);if(u!==0)return u}return re(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=re(be(i.latitude),be(o.latitude));return a!==0?a:re(be(i.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Mr(a[l],c[l]);if(u)return u}return re(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===zi.mapValue&&o===zi.mapValue)return 0;if(i===zi.mapValue)return 1;if(o===zi.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=re(c[h],u[h]);if(d!==0)return d;const f=Mr(a[c[h]],l[u[h]]);if(f!==0)return f}return re(c.length,u.length)}(t.mapValue,e.mapValue);default:throw H()}}function Rd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=Rn(t),r=Rn(e),s=re(n.seconds,r.seconds);return s!==0?s:re(n.nanos,r.nanos)}function Vr(t){return rl(t)}function rl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Rn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return V.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=rl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${rl(n.fields[o])}`;return s+"}"}(t.mapValue):H()}function sl(t){return!!t&&"integerValue"in t}function xu(t){return!!t&&"arrayValue"in t}function Cd(t){return!!t&&"nullValue"in t}function Sd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nc(t){return!!t&&"mapValue"in t}function bs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ea(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function EA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!nc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bs(n)}setAll(e){let n=Xe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=bs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());nc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];nc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ea(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ut(bs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new je(e,0,$.min(),$.min(),$.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,s){return new je(e,1,n,$.min(),r,s,0)}static newNoDocument(e,n){return new je(e,2,n,$.min(),$.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new je(e,3,n,$.min(),$.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n){this.position=e,this.inclusive=n}}function Pd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=Mr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function kd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n="asc"){this.field=e,this.dir=n}}function wA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{}class Ce extends Yg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new IA(e,n,r):n==="array-contains"?new RA(e,r):n==="in"?new CA(e,r):n==="not-in"?new SA(e,r):n==="array-contains-any"?new PA(e,r):new Ce(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bA(e,r):new AA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mr(n,this.value)):n!==null&&er(this.value)===er(n)&&this.matchesComparison(Mr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends Yg{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Kt(e,n)}matches(e){return Xg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Xg(t){return t.op==="and"}function Jg(t){return TA(t)&&Xg(t)}function TA(t){for(const e of t.filters)if(e instanceof Kt)return!1;return!0}function il(t){if(t instanceof Ce)return t.field.canonicalString()+t.op.toString()+Vr(t.value);if(Jg(t))return t.filters.map(e=>il(e)).join(",");{const e=t.filters.map(n=>il(n)).join(",");return`${t.op}(${e})`}}function Zg(t,e){return t instanceof Ce?function(r,s){return s instanceof Ce&&r.op===s.op&&r.field.isEqual(s.field)&&Gt(r.value,s.value)}(t,e):t instanceof Kt?function(r,s){return s instanceof Kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Zg(o,s.filters[a]),!0):!1}(t,e):void H()}function e_(t){return t instanceof Ce?function(n){return`${n.field.canonicalString()} ${n.op} ${Vr(n.value)}`}(t):t instanceof Kt?function(n){return n.op.toString()+" {"+n.getFilters().map(e_).join(" ,")+"}"}(t):"Filter"}class IA extends Ce{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class bA extends Ce{constructor(e,n){super(e,"in",n),this.keys=t_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class AA extends Ce{constructor(e,n){super(e,"not-in",n),this.keys=t_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function t_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class RA extends Ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xu(n)&&si(n.arrayValue,this.value)}}class CA extends Ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&si(this.value.arrayValue,n)}}class SA extends Ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!si(this.value.arrayValue,n)}}class PA extends Ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>si(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Nd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new kA(t,e,n,r,s,i,o)}function Du(t){const e=ee(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>il(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),va(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vr(r)).join(",")),e.ce=n}return e.ce}function Lu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Zg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kd(t.startAt,e.startAt)&&kd(t.endAt,e.endAt)}function ol(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function NA(t,e,n,r,s,i,o,a){return new wa(t,e,n,r,s,i,o,a)}function n_(t){return new wa(t)}function Od(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function OA(t){return t.collectionGroup!==null}function As(t){const e=ee(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ue(Xe.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new So(i,r))}),n.has(Xe.keyField().canonicalString())||e.le.push(new So(Xe.keyField(),r))}return e.le}function jt(t){const e=ee(t);return e.he||(e.he=xA(e,As(t))),e.he}function xA(t,e){if(t.limitType==="F")return Nd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new So(s.field,i)});const n=t.endAt?new Co(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Co(t.startAt.position,t.startAt.inclusive):null;return Nd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function al(t,e,n){return new wa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ta(t,e){return Lu(jt(t),jt(e))&&t.limitType===e.limitType}function r_(t){return`${Du(jt(t))}|lt:${t.limitType}`}function pr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>e_(s)).join(", ")}]`),va(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Vr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Vr(s)).join(",")),`Target(${r})`}(jt(t))}; limitType=${t.limitType})`}function Ia(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):V.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of As(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Pd(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,As(r),s)||r.endAt&&!function(o,a,c){const l=Pd(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,As(r),s))}(t,e)}function DA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function s_(t){return(e,n)=>{let r=!1;for(const s of As(t)){const i=LA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function LA(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Mr(c,l):H()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ea(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return _A(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=new xe(V.comparator);function Cn(){return MA}const i_=new xe(V.comparator);function Es(...t){let e=i_;for(const n of t)e=e.insert(n.key,n);return e}function VA(t){let e=i_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Bn(){return Rs()}function o_(){return Rs()}function Rs(){return new ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const FA=new Ue(V.comparator);function Z(...t){let e=FA;for(const n of t)e=e.add(n);return e}const UA=new Ue(re);function $A(){return UA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tl(e)?"-0":e}}function HA(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(){this._=void 0}}function jA(t,e,n){return t instanceof cl?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Nu(i)&&(i=Ou(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Po?a_(t,e):t instanceof ko?c_(t,e):function(s,i){const o=WA(s,i),a=xd(o)+xd(s.Ie);return sl(o)&&sl(s.Ie)?HA(a):BA(s.serializer,a)}(t,e)}function zA(t,e,n){return t instanceof Po?a_(t,e):t instanceof ko?c_(t,e):n}function WA(t,e){return t instanceof ll?function(r){return sl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class cl extends ba{}class Po extends ba{constructor(e){super(),this.elements=e}}function a_(t,e){const n=l_(e);for(const r of t.elements)n.some(s=>Gt(s,r))||n.push(r);return{arrayValue:{values:n}}}class ko extends ba{constructor(e){super(),this.elements=e}}function c_(t,e){let n=l_(e);for(const r of t.elements)n=n.filter(s=>!Gt(s,r));return{arrayValue:{values:n}}}class ll extends ba{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function xd(t){return be(t.integerValue||t.doubleValue)}function l_(t){return xu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Po&&s instanceof Po||r instanceof ko&&s instanceof ko?Lr(r.elements,s.elements,Gt):r instanceof ll&&s instanceof ll?Gt(r.Ie,s.Ie):r instanceof cl&&s instanceof cl}(t.transform,e.transform)}class Kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kn}static exists(e){return new Kn(void 0,e)}static updateTime(e){return new Kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function io(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Mu{}function u_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new KA(t.key,Kn.none()):new Vu(t.key,t.data,Kn.none());{const n=t.data,r=Ut.empty();let s=new Ue(Xe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Aa(t.key,r,new yn(s.toArray()),Kn.none())}}function GA(t,e,n){t instanceof Vu?function(s,i,o){const a=s.value.clone(),c=Ld(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Aa?function(s,i,o){if(!io(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Ld(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(h_(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Cs(t,e,n,r){return t instanceof Vu?function(i,o,a,c){if(!io(i.precondition,o))return a;const l=i.value.clone(),u=Md(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Aa?function(i,o,a,c){if(!io(i.precondition,o))return a;const l=Md(i.fieldTransforms,c,o),u=o.data;return u.setAll(h_(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return io(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Dd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Lr(r,s,(i,o)=>qA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vu extends Mu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Aa extends Mu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function h_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ld(t,e,n){const r=new Map;Ae(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,zA(o,a,n[s]))}return r}function Md(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,jA(i,o,e))}return r}class KA extends Mu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&GA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Cs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Cs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=o_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=u_(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&Lr(this.mutations,e.mutations,(n,r)=>Dd(n,r))&&Lr(this.baseMutations,e.baseMutations,(n,r)=>Dd(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,Y;function d_(t){if(t===void 0)return on("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ie.OK:return I.OK;case Ie.CANCELLED:return I.CANCELLED;case Ie.UNKNOWN:return I.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return I.INTERNAL;case Ie.UNAVAILABLE:return I.UNAVAILABLE;case Ie.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ie.NOT_FOUND:return I.NOT_FOUND;case Ie.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ie.ABORTED:return I.ABORTED;case Ie.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ie.DATA_LOSS:return I.DATA_LOSS;default:return H()}}(Y=Ie||(Ie={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=new Ir([4294967295,4294967295],0);function Vd(t){const e=JA().encode(t),n=new tA;return n.update(e),new Uint8Array(n.digest())}function Fd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ir([n,r],0),new Ir([s,i],0)]}class Fu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ws(`Invalid padding: ${n}`);if(r<0)throw new ws(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ws(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ws(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Ir.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(Ir.fromNumber(r)));return s.compare(ZA)===1&&(s=new Ir([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Vd(e),[r,s]=Fd(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Fu(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Vd(e),[r,s]=Fd(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ti.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ra($.min(),s,new xe(re),Cn(),Z())}}class Ti{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ti(r,n,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class f_{constructor(e,n){this.targetId=e,this.fe=n}}class p_{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ud{constructor(){this.ge=0,this.pe=Bd(),this.ye=Qe.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Z(),n=Z(),r=Z();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:H()}}),new Ti(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Bd()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ae(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class eR{constructor(e){this.Le=e,this.ke=new Map,this.qe=Cn(),this.Qe=$d(),this.Ke=new xe(re)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(ol(i))if(r===0){const o=new V(i.path);this.We(n,o,je.newNoDocument(o,$.min()))}else Ae(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Zn(r).toUint8Array()}catch(c){if(c instanceof Qg)return Dr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Fu(o,s,i)}catch(c){return Dr(c instanceof ws?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&ol(a.target)){const c=new V(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,je.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=Z();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new Ra(e,n,this.Ke,this.qe,r);return this.qe=Cn(),this.Qe=$d(),this.Ke=new xe(re),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Ud,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Ue(re),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Ud),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function $d(){return new xe(V.comparator)}function Bd(){return new xe(V.comparator)}const tR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),nR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),rR=(()=>({and:"AND",or:"OR"}))();class sR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ul(t,e){return t.useProto3Json||va(e)?e:{value:e}}function iR(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function br(t){return Ae(!!t),$.fromTimestamp(function(n){const r=Rn(n);return new Ze(r.seconds,r.nanos)}(t))}function aR(t,e){return function(r){return new ve(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function m_(t){const e=ve.fromString(t);return Ae(v_(e)),e}function rc(t,e){const n=m_(e);if(n.get(1)!==t.databaseId.projectId)throw new M(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(g_(n))}function hl(t,e){return aR(t.databaseId,e)}function cR(t){const e=m_(t);return e.length===4?ve.emptyPath():g_(e)}function Hd(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function g_(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function lR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Ae(u===void 0||typeof u=="string"),Qe.fromBase64String(u||"")):(Ae(u===void 0||u instanceof Uint8Array),Qe.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:d_(l.code);return new M(u,l.message||"")}(o);n=new p_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=rc(t,r.document.name),i=br(r.document.updateTime),o=r.document.createTime?br(r.document.createTime):$.min(),a=new Ut({mapValue:{fields:r.document.fields}}),c=je.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new oo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=rc(t,r.document),i=r.readTime?br(r.readTime):$.min(),o=je.newNoDocument(s,i),a=r.removedTargetIds||[];n=new oo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=rc(t,r.document),i=r.removedTargetIds||[];n=new oo([],i,s,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new XA(s,i),a=r.targetId;n=new f_(a,o)}}return n}function uR(t,e){return{documents:[hl(t,e.path)]}}function hR(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=hl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=hl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return y_(Kt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:mr(h.field),direction:pR(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=ul(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function dR(t){let e=cR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ae(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=__(h);return d instanceof Kt&&Jg(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(p){return new So(gr(p.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,va(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Co(f,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new Co(f,d)}(n.endAt)),NA(e,s,o,i,a,"F",c,l)}function fR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function __(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=gr(n.unaryFilter.field);return Ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=gr(n.unaryFilter.field);return Ce.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gr(n.unaryFilter.field);return Ce.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gr(n.unaryFilter.field);return Ce.create(o,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(n){return Ce.create(gr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kt.create(n.compositeFilter.filters.map(r=>__(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return H()}}(n.compositeFilter.op))}(t):H()}function pR(t){return tR[t]}function mR(t){return nR[t]}function gR(t){return rR[t]}function mr(t){return{fieldPath:t.canonicalString()}}function gr(t){return Xe.fromServerFormat(t.fieldPath)}function y_(t){return t instanceof Ce?function(n){if(n.op==="=="){if(Sd(n.value))return{unaryFilter:{field:mr(n.field),op:"IS_NAN"}};if(Cd(n.value))return{unaryFilter:{field:mr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Sd(n.value))return{unaryFilter:{field:mr(n.field),op:"IS_NOT_NAN"}};if(Cd(n.value))return{unaryFilter:{field:mr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mr(n.field),op:mR(n.op),value:n.value}}}(t):t instanceof Kt?function(n){const r=n.getFilters().map(s=>y_(s));return r.length===1?r[0]:{compositeFilter:{op:gR(n.op),filters:r}}}(t):H()}function v_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,n,r,s,i=$.min(),o=$.min(),a=Qe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.ut=e}}function yR(t){const e=dR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?al(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(){this.on=new ER}addToCollectionParentIndex(e,n){return this.on.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}deleteAllFieldIndexes(e){return E.resolve()}createTargetIndexes(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(An.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(An.min())}updateCollectionGroup(e,n,r){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class ER{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ue(ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ue(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Fr(0)}static Nn(){return new Fr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(){this.changes=new ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Cs(r.mutation,s,yn.empty(),Ze.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const s=Bn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Es();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Bn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Cn();const o=Rs(),a=function(){return Rs()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Aa)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Cs(u.mutation,l,u.mutation.getFieldMask(),Ze.now())):o.set(l.key,yn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new TR(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Rs();let s=new xe((o,a)=>o-a),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||yn.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||Z()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=o_();u.forEach(d=>{if(!i.has(d)){const f=u_(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return V.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):OA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):E.resolve(Bn());let a=-1,c=i;return o.next(l=>E.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?E.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,Z())).next(u=>({batchId:a,changes:VA(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let s=Es();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Es();return this.indexManager.getCollectionParents(e,i).next(a=>E.forEach(a,c=>{const l=function(h,d){return new wa(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,je.newInvalidDocument(u)))});let a=Es();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Cs(u.mutation,l,yn.empty(),Ze.now()),Ia(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return E.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:br(s.createTime)}}(n)),E.resolve()}getNamedQuery(e,n){return E.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:yR(s.bundledQuery),readTime:br(s.readTime)}}(n)),E.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(){this.overlays=new xe(V.comparator),this.lr=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Bn();return E.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),E.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),E.resolve()}getOverlaysForCollection(e,n,r){const s=Bn(),i=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return E.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new xe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Bn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Bn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return E.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new YA(n,r));let i=this.lr.get(n);i===void 0&&(i=Z(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(){this.hr=new Ue(Pe.Pr),this.Ir=new Ue(Pe.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Pe(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Pe(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new V(new ve([])),r=new Pe(n,e),s=new Pe(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new V(new ve([])),r=new Pe(n,e),s=new Pe(n,e+1);let i=Z();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Pe(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return V.comparator(e.key,n.key)||re(e.gr,n.gr)}static Tr(e,n){return re(e.gr,n.gr)||V.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Ue(Pe.Pr)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new QA(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Pe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return E.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pe(n,0),s=new Pe(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),E.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ue(re);return n.forEach(s=>{const i=new Pe(s,0),o=new Pe(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),E.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;V.isDocumentKey(i)||(i=i.child(""));const o=new Pe(new V(i),0);let a=new Ue(re);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),E.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ae(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return E.forEach(n.mutations,s=>{const i=new Pe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Pe(n,0),s=this.yr.firstAfterOrEqual(r);return E.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e){this.Cr=e,this.docs=function(){return new xe(V.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return E.resolve(r?r.document.mutableCopy():je.newInvalidDocument(n))}getEntries(e,n){let r=Cn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():je.newInvalidDocument(s))}),E.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Cn();const o=n.path,a=new V(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||pA(fA(u),r)<=0||(s.has(u.key)||Ia(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return E.resolve(i)}getAllFromCollectionGroup(e,n,r,s){H()}vr(e,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new SR(this)}getSize(e){return E.resolve(this.size)}}class SR extends wR{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),E.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.persistence=e,this.Fr=new ts(n=>Du(n),Lu),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Uu,this.targetCount=0,this.Nr=Fr.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),E.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Fr(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.kn(n),E.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),E.waitFor(i).next(()=>s)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return E.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),E.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),E.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),E.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return E.resolve(r)}containsKey(e,n){return E.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n){this.Br={},this.overlays={},this.Lr=new ku(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new PR(this),this.indexManager=new vR,this.remoteDocumentCache=function(s){return new CR(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new _R(n),this.Kr=new bR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new AR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new RR(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){N("MemoryPersistence","Starting transaction:",e);const s=new NR(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return E.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class NR extends gA{constructor(e){super(),this.currentSequenceNumber=e}}class $u{constructor(e){this.persistence=e,this.Gr=new Uu,this.zr=null}static jr(e){return new $u(e)}get Hr(){if(this.zr)return this.zr;throw H()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),E.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),E.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Hr,r=>{const s=V.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,$.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return E.or([()=>E.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=Z(),s=Z();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Bu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new OR;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(ls()<=G.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",pr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),E.resolve()):(ls()<=G.DEBUG&&N("QueryEngine","Query:",pr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(ls()<=G.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",pr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,jt(n))):E.resolve())}zi(e,n){if(Od(n))return E.resolve(null);let r=jt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=al(n,null,"F"),r=jt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Z(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,al(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,r,s){return Od(n)||s.isEqual($.min())?E.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?E.resolve(null):(ls()<=G.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),pr(n)),this.Xi(e,o,n,dA(s,-1)).next(a=>a))})}Yi(e,n){let r=new Ue(s_(e));return n.forEach((s,i)=>{Ia(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return ls()<=G.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",pr(n)),this.Gi.getDocumentsMatchingQuery(e,n,An.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new xe(re),this.ns=new ts(i=>Du(i),Lu),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IR(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function LR(t,e,n,r){return new DR(t,e,n,r)}async function E_(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Z();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function w_(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function MR(t,e){const n=ee(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Qe.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(g,m,_){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,f,u)&&a.push(n.qr.updateTargetData(i,f))});let c=Cn(),l=Z();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(VR(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!r.isEqual($.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return E.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=s,i))}function VR(t,e,n){let r=Z(),s=Z();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Cn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual($.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):N("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function FR(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,E.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new vn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function dl(t,e,n){const r=ee(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!wi(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function jd(t,e,n){const r=ee(t);let s=$.min(),i=Z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ee(c),d=h.ns.get(u);return d!==void 0?E.resolve(h.ts.get(d)):h.qr.getTargetData(l,u)}(r,o,jt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:$.min(),n?i:Z())).next(a=>(UR(r,DA(e),a),{documents:a,ls:i})))}function UR(t,e,n){let r=t.rs.get(e)||$.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class zd{constructor(){this.activeTargetIds=$A()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $R{constructor(){this.eo=new zd,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new zd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wi=null;function sc(){return Wi===null?Wi=function(){return 268435456+Math.round(2147483648*Math.random())}():Wi++,"0x"+Wi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="WebChannelConnection";class zR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=sc(),c=this.So(n,r);N("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,i,o),this.Do(n,c,l,s).then(u=>(N("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Dr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+es}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=HR[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=sc();return new Promise((o,a)=>{const c=new eA;c.setWithCredentials(!0),c.listenOnce(Jb.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case tc.NO_ERROR:const u=c.getResponseJson();N(Be,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case tc.TIMEOUT:N(Be,`RPC '${e}' ${i} timed out`),a(new M(I.DEADLINE_EXCEEDED,"Request time out"));break;case tc.HTTP_ERROR:const h=c.getStatus();if(N(Be,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(m){const _=m.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(_)>=0?_:I.UNKNOWN}(f.status);a(new M(p,f.message))}else a(new M(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new M(I.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{N(Be,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);N(Be,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}vo(e,n,r){const s=sc(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Yb(),a=Xb(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.bo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");N(Be,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const p=new jR({co:m=>{f?N(Be,`Not sending because RPC '${e}' stream ${s} is closed:`,m):(d||(N(Be,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),N(Be,`RPC '${e}' stream ${s} sending:`,m),h.send(m))},lo:()=>h.close()}),g=(m,_,v)=>{m.listen(_,T=>{try{v(T)}catch(w){setTimeout(()=>{throw w},0)}})};return g(h,Hi.EventType.OPEN,()=>{f||N(Be,`RPC '${e}' stream ${s} transport opened.`)}),g(h,Hi.EventType.CLOSE,()=>{f||(f=!0,N(Be,`RPC '${e}' stream ${s} transport closed`),p.Ro())}),g(h,Hi.EventType.ERROR,m=>{f||(f=!0,Dr(Be,`RPC '${e}' stream ${s} transport errored:`,m),p.Ro(new M(I.UNAVAILABLE,"The operation could not be completed")))}),g(h,Hi.EventType.MESSAGE,m=>{var _;if(!f){const v=m.data[0];Ae(!!v);const T=v,w=T.error||((_=T[0])===null||_===void 0?void 0:_.error);if(w){N(Be,`RPC '${e}' stream ${s} received error:`,w);const R=w.status;let P=function(O){const B=Ie[O];if(B!==void 0)return d_(B)}(R),x=w.message;P===void 0&&(P=I.INTERNAL,x="Unknown error status: "+R+" with message "+w.message),f=!0,p.Ro(new M(P,x)),h.close()}else N(Be,`RPC '${e}' stream ${s} received:`,v),p.Vo(v)}}),g(a,Zb.STAT_EVENT,m=>{m.stat===Td.PROXY?N(Be,`RPC '${e}' stream ${s} detected buffering proxy`):m.stat===Td.NOPROXY&&N(Be,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{p.Ao()},0),p}}function ic(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(t){return new sR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n,r,s,i,o,a,c){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new I_(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(on(n.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new M(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qR extends WR{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=lR(this.serializer,e),r=function(i){if(!("targetChange"in i))return $.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?$.min():o.readTime?br(o.readTime):$.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Hd(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=ol(c)?{documents:uR(i,c)}:{query:hR(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=oR(i,o.resumeToken);const l=ul(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo($.min())>0){a.readTime=iR(i,o.snapshotVersion.toTimestamp());const l=ul(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=fR(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Hd(this.serializer),n.removeTarget=e,this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new M(I.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(I.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(I.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class KR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(on(n),this.f_=!1):N("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{bi(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ee(c);l.C_.add(4),await Ii(l),l.M_.set("Unknown"),l.C_.delete(4),await Ca(l)}(this))})}),this.M_=new KR(r,s)}}async function Ca(t){if(bi(t))for(const e of t.v_)await e(!0)}async function Ii(t){for(const e of t.v_)await e(!1)}function b_(t,e){const n=ee(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),zu(n)?ju(n):ns(n).Ho()&&Hu(n,e))}function A_(t,e){const n=ee(t),r=ns(n);n.D_.delete(e),r.Ho()&&R_(n,e),n.D_.size===0&&(r.Ho()?r.Zo():bi(n)&&n.M_.set("Unknown"))}function Hu(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ns(t).u_(e)}function R_(t,e){t.x_.Oe(e),ns(t).c_(e)}function ju(t){t.x_=new eR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ns(t).start(),t.M_.g_()}function zu(t){return bi(t)&&!ns(t).jo()&&t.D_.size>0}function bi(t){return ee(t).C_.size===0}function C_(t){t.x_=void 0}async function YR(t){t.D_.forEach((e,n)=>{Hu(t,e)})}async function XR(t,e){C_(t),zu(t)?(t.M_.w_(e),ju(t)):t.M_.set("Unknown")}async function JR(t,e,n){if(t.M_.set("Online"),e instanceof p_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qd(t,r)}else if(e instanceof oo?t.x_.$e(e):e instanceof f_?t.x_.Je(e):t.x_.Ge(e),!n.isEqual($.min()))try{const r=await w_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.D_.get(l);u&&i.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.D_.get(c);if(!u)return;i.D_.set(c,u.withResumeToken(Qe.EMPTY_BYTE_STRING,u.snapshotVersion)),R_(i,c);const h=new vn(u.target,c,l,u.sequenceNumber);Hu(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await qd(t,r)}}async function qd(t,e,n){if(!wi(e))throw e;t.C_.add(1),await Ii(t),t.M_.set("Offline"),n||(n=()=>w_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Ca(t)})}async function Gd(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=bi(n);n.C_.add(3),await Ii(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Ca(n)}async function ZR(t,e){const n=ee(t);e?(n.C_.delete(2),await Ca(n)):e||(n.C_.add(2),await Ii(n),n.M_.set("Unknown"))}function ns(t){return t.O_||(t.O_=function(n,r,s){const i=ee(n);return i.A_(),new qR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:YR.bind(null,t),Io:XR.bind(null,t),a_:JR.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),zu(t)?ju(t):t.M_.set("Unknown")):(await t.O_.stop(),C_(t))})),t.O_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Wu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function S_(t,e){if(on("AsyncQueue",`${e}: ${t}`),wi(t))return new M(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=Es(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new Ar(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ar)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ar;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(){this.B_=new xe(V.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):H():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ur{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ur(e,n,Ar.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ta(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(){this.k_=void 0,this.listeners=[]}}class tC{constructor(){this.queries=new ts(e=>r_(e),Ta),this.onlineState="Unknown",this.q_=new Set}}async function nC(t,e){const n=ee(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new eC),s)try{i.k_=await n.onListen(r)}catch(o){const a=S_(o,`Initialization of query '${pr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&qu(n)}async function rC(t,e){const n=ee(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function sC(t,e){const n=ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&qu(n)}function iC(t,e,n){const r=ee(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function qu(t){t.q_.forEach(e=>{e.next()})}class oC{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ur(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Ur.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.key=e}}class k_{constructor(e){this.key=e}}class aC{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=Z(),this.mutatedKeys=Z(),this._a=s_(e),this.aa=new Ar(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Kd,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Ia(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),g=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let m=!1;d&&f?d.data.isEqual(f.data)?p!==g&&(r.track({type:3,doc:f}),m=!0):this.ha(d,f)||(r.track({type:2,doc:f}),m=!0,(c&&this._a(f,c)>0||l&&this._a(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),m=!0):d&&!f&&(r.track({type:1,doc:d}),m=!0,(c||l)&&(a=!0)),m&&(f?(o=o.add(f),i=g?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(f,p){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return g(f)-g(p)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],c=this.oa.size===0&&this.current&&!s?1:0,l=c!==this.sa;return this.sa=c,o.length!==0||l?{snapshot:new Ur(this.query,e.aa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Kd,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=Z(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new k_(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new P_(r))}),n}da(e){this.ia=e.ls,this.oa=Z();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Ur.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class cC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class lC{constructor(e){this.key=e,this.Ra=!1}}class uC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new ts(a=>r_(a),Ta),this.fa=new Map,this.ga=new Set,this.pa=new xe(V.comparator),this.ya=new Map,this.wa=new Uu,this.Sa={},this.ba=new Map,this.Da=Fr.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function hC(t,e){const n=yC(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await FR(n.localStore,jt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await dC(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&b_(n.remoteStore,o)}return s}async function dC(t,e,n,r,s){t.va=(h,d,f)=>async function(g,m,_,v){let T=m.view.ca(_);T.Zi&&(T=await jd(g.localStore,m.query,!1).then(({documents:x})=>m.view.ca(x,T)));const w=v&&v.targetChanges.get(m.targetId),R=v&&v.targetMismatches.get(m.targetId)!=null,P=m.view.applyChanges(T,g.isPrimaryClient,w,R);return Yd(g,m.targetId,P.Ta),P.snapshot}(t,h,d,f);const i=await jd(t.localStore,e,!0),o=new aC(e,i.ls),a=o.ca(i.documents),c=Ti.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Yd(t,n,l.Ta);const u=new cC(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function fC(t,e){const n=ee(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!Ta(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await dl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),A_(n.remoteStore,r.targetId),fl(n,r.targetId)}).catch(Pu)):(fl(n,r.targetId),await dl(n.localStore,r.targetId,!0))}async function N_(t,e){const n=ee(t);try{const r=await MR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(Ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?Ae(o.Ra):s.removedDocuments.size>0&&(Ae(o.Ra),o.Ra=!1))}),await x_(n,r,e)}catch(r){await Pu(r)}}function Qd(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ee(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(l=!0)}),l&&qu(c)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pC(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new xe(V.comparator);o=o.insert(i,je.newNoDocument(i,$.min()));const a=Z().add(i),c=new Ra($.min(),new Map,new xe(re),o,a);await N_(r,c),r.pa=r.pa.remove(i),r.ya.delete(e),Gu(r)}else await dl(r.localStore,e,!1).then(()=>fl(r,e,n)).catch(Pu)}function fl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||O_(t,r)})}function O_(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(A_(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Gu(t))}function Yd(t,e,n){for(const r of n)r instanceof P_?(t.wa.addReference(r.key,e),mC(t,r)):r instanceof k_?(N("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||O_(t,r.key)):H()}function mC(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(N("SyncEngine","New document in limbo: "+n),t.ga.add(r),Gu(t))}function Gu(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new V(ve.fromString(e)),r=t.Da.next();t.ya.set(r,new lC(n)),t.pa=t.pa.insert(n,r),b_(t.remoteStore,new vn(jt(n_(n.path)),r,"TargetPurposeLimboResolution",ku._e))}}async function x_(t,e,n){const r=ee(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Bu.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(c,l){const u=ee(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>E.forEach(l,d=>E.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>E.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!wi(h))throw h;N("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.ts.get(d),p=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(p);u.ts=u.ts.insert(d,g)}}}(r.localStore,i))}async function gC(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await E_(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(c=>{c.reject(new M(I.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await x_(n,r._s)}}function _C(t,e){const n=ee(t),r=n.ya.get(e);if(r&&r.Ra)return Z().add(r.key);{let s=Z();const i=n.fa.get(e);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function yC(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=N_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_C.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pC.bind(null,e),e.Va.a_=sC.bind(null,e.eventManager),e.Va.Fa=iC.bind(null,e.eventManager),e}class Xd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=T_(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return LR(this.persistence,new xR,e.initialUser,this.serializer)}createPersistence(e){return new kR($u.jr,this.serializer)}createSharedClientState(e){return new $R}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gC.bind(null,this.syncEngine),await ZR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tC}()}createDatastore(e){const n=T_(e.databaseInfo.databaseId),r=function(i){return new zR(i)}(e.databaseInfo);return function(i,o,a,c){return new GR(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new QR(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Qd(this.syncEngine,n,0),function(){return Wd.D()?new Wd:new BR}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new uC(s,i,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ee(n);N("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Ii(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):on("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=He.UNAUTHENTICATED,this.clientId=uA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{N("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(N("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=S_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function oc(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await E_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Jd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await IC(t);N("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Gd(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Gd(e.remoteStore,i)),t._onlineComponents=e}function TC(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function IC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await oc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!TC(n))throw n;Dr("Error using user provided cache. Falling back to memory cache: "+n),await oc(t,new Xd)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await oc(t,new Xd);return t._offlineComponents}async function bC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await Jd(t,t._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await Jd(t,new vC))),t._onlineComponents}async function AC(t){const e=await bC(t),n=e.eventManager;return n.onListen=hC.bind(null,e.syncEngine),n.onUnlisten=fC.bind(null,e.syncEngine),n}function RC(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new EC({next:d=>{o.enqueueAndForget(()=>rC(i,h)),d.fromCache&&c.source==="server"?l.reject(new M(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new oC(a,u,{includeMetadataChanges:!0,J_:!0});return nC(i,h)}(await AC(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(t,e,n){if(!n)throw new M(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function SC(t,e,n,r){if(e===!0&&r===!0)throw new M(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ef(t){if(V.isDocumentKey(t))throw new M(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function PC(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function pl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=PC(t);throw new M(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=D_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new M(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new M(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new M(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ku{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nA;switch(r.type){case"firstParty":return new oA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Zd.get(n);r&&(N("ComponentProvider","Removing Datastore"),Zd.delete(n),r.terminate())}(this),Promise.resolve()}}function kC(t,e,n,r={}){var s;const i=(t=pl(t,Ku))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Dr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=He.MOCK_USER;else{a=kT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new M(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new He(l)}t._authCredentials=new rA(new Kg(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Sa(this.firestore,e,this._query)}}class rs{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rs(this.firestore,e,this._key)}}class Rr extends Sa{constructor(e,n,r){super(e,n,n_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rs(this.firestore,null,new V(e))}withConverter(e){return new Rr(this.firestore,e,this._path)}}function ZM(t,e,...n){if(t=Yr(t),CC("collection","path",e),t instanceof Ku){const r=ve.fromString(e,...n);return ef(r),new Rr(t,null,r)}{if(!(t instanceof rs||t instanceof Rr))throw new M(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return ef(r),new Rr(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new I_(this,"async_queue_retry"),this.iu=()=>{const n=ic();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=ic();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=ic();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Gn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!wi(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw on("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=Wu.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&H()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class L_ extends Ku{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new NC}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||M_(this),this._firestoreClient.terminate()}}function OC(t,e){const n=typeof t=="object"?t:Hm(),r=typeof t=="string"?t:e||"(default)",s=FI(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ST("firestore");i&&kC(s,...i)}return s}function xC(t){return t._firestoreClient||M_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function M_(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new vA(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,D_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new wC(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this._byteString=e}static fromBase64String(e){try{return new No(Qe.fromBase64String(e))}catch(n){throw new M(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new No(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}const DC=new RegExp("[~\\*/\\[\\]]");function LC(t,e,n){if(e.search(DC)>=0)throw nf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new V_(...e.split("."))._internalPath}catch{throw nf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nf(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new M(I.INVALID_ARGUMENT,a+t+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rs(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class MC extends U_{data(){return super.data()}}function $_(t,e){return typeof e=="string"?LC(t,e):e instanceof V_?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class FC{convertValue(e,n="none"){switch(er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ea(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new F_(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ou(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ni(e));default:return null}}convertTimestamp(e){const n=Rn(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);Ae(v_(r));const s=new ri(r.get(1),r.get(3)),i=new V(r.popFirst(5));return s.isEqual(n)||on(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class UC extends U_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ao(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field($_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ao extends UC{data(e={}){return super.data(e)}}class $C{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new qi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ao(this._firestore,this._userDataWriter,r.key,r,new qi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new ao(s._firestore,s._userDataWriter,a.doc.key,a.doc,new qi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new ao(s._firestore,s._userDataWriter,a.doc.key,a.doc,new qi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:BC(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function BC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}class HC extends FC{constructor(e){super(),this.firestore=e}convertBytes(e){return new No(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new rs(this.firestore,null,n)}}function eV(t){t=pl(t,Sa);const e=pl(t.firestore,L_),n=xC(e),r=new HC(e);return VC(t._query),RC(n,t._query).then(s=>new $C(e,r,t,s))}(function(e,n=!0){(function(s){es=s})(Xr),qt(new Nt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new L_(new sA(r.getProvider("auth-internal")),new cA(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new M(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ri(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),ct(Id,"4.4.0",e),ct(Id,"4.4.0","esm2017")})();const jC=SE(()=>{so("FirebaseTimestamp",t=>ho(new Ze(t.seconds,t.nanoseconds))),so("FirebaseGeoPoint",t=>ho(new F_(t.latitude,t.longitude))),so("DocumentData",t=>{const e=typeof t=="string"?JSON.parse(t):t,n=e.id;return delete e.id,Object.defineProperty(e,"id",{value:n})})}),rf={NuxtError:t=>Zo(t),EmptyShallowRef:t=>Us(t==="_"?void 0:t==="0n"?BigInt(0):Hs(t)),EmptyRef:t=>kt(t==="_"?void 0:t==="0n"?BigInt(0):Hs(t)),ShallowRef:t=>Us(t),ShallowReactive:t=>Ko(t),Ref:t=>kt(t),Reactive:t=>bn(t)},zC=et({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const r in rf)so(r,rf[r]);Object.assign(t.payload,([e,n]=js(()=>t.runWithContext(yT)),e=await e,n(),e)),window.__NUXT__=t.payload}}),WC=[],qC=et({name:"nuxt:head",enforce:"pre",setup(t){const e=qw({plugins:WC});Gw(()=>ie().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await gm(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const _r=typeof window<"u";function GC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const oe=Object.assign;function ac(t,e){const n={};for(const r in e){const s=e[r];n[r]=xt(s)?s.map(t):t(s)}return n}const Ss=()=>{},xt=Array.isArray,KC=/\/$/,QC=t=>t.replace(KC,"");function cc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=ZC(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function YC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function sf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function XC(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&$r(e.matched[r],n.matched[s])&&B_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function $r(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function B_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!JC(t[n],e[n]))return!1;return!0}function JC(t,e){return xt(t)?of(t,e):xt(e)?of(e,t):t===e}function of(t,e){return xt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ZC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ii;(function(t){t.pop="pop",t.push="push"})(ii||(ii={}));var Ps;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ps||(Ps={}));function eS(t){if(!t)if(_r){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),QC(t)}const tS=/^[^#]+#/;function nS(t,e){return t.replace(tS,"#")+e}function rS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Pa=()=>({left:window.pageXOffset,top:window.pageYOffset});function sS(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=rS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function af(t,e){return(history.state?history.state.position-e:-1)+t}const ml=new Map;function iS(t,e){ml.set(t,e)}function oS(t){const e=ml.get(t);return ml.delete(t),e}let aS=()=>location.protocol+"//"+location.host;function H_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),sf(c,"")}return sf(n,t)+r+s}function cS(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=H_(t,location),p=n.value,g=e.value;let m=0;if(d){if(n.value=f,e.value=d,o&&o===p){o=null;return}m=g?d.position-g.position:0}else r(f);s.forEach(_=>{_(n.value,p,{delta:m,type:ii.pop,direction:m?m>0?Ps.forward:Ps.back:Ps.unknown})})};function c(){o=n.value}function l(d){s.push(d);const f=()=>{const p=s.indexOf(d);p>-1&&s.splice(p,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(oe({},d.state,{scroll:Pa()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function cf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Pa():null}}function lS(t){const{history:e,location:n}=window,r={value:H_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:aS()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(c,l){const u=oe({},e.state,cf(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=oe({},s.value,e.state,{forward:c,scroll:Pa()});i(u.current,u,!0);const h=oe({},cf(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function j_(t){t=eS(t);const e=lS(t),n=cS(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=oe({location:"",base:t,go:r,createHref:nS.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function uS(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),j_(t)}function hS(t){return typeof t=="string"||t&&typeof t=="object"}function z_(t){return typeof t=="string"||typeof t=="symbol"}const Vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},W_=Symbol("");var lf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(lf||(lf={}));function Br(t,e){return oe(new Error,{type:t,[W_]:!0},e)}function Jt(t,e){return t instanceof Error&&W_ in t&&(e==null||!!(t.type&e))}const uf="[^/]+?",dS={sensitive:!1,strict:!1,start:!0,end:!0},fS=/[.+*?^${}()[\]/\\]/g;function pS(t,e){const n=oe({},dS,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(fS,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:g,optional:m,regexp:_}=d;i.push({name:p,repeatable:g,optional:m});const v=_||uf;if(v!==uf){f+=10;try{new RegExp(`(${v})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${p}" (${v}): `+w.message)}}let T=g?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;h||(T=m&&l.length<2?`(?:/${T})`:"/"+T),m&&(T+="?"),s+=T,f+=20,m&&(f+=-8),g&&(f+=-20),v===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",p=i[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:p,repeatable:g,optional:m}=f,_=p in l?l[p]:"";if(xt(_)&&!g)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const v=xt(_)?_.join("/"):_;if(!v)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=v}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function mS(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function gS(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=mS(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(hf(r))return 1;if(hf(s))return-1}return s.length-r.length}function hf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _S={type:0,value:""},yS=/[a-zA-Z0-9_]/;function vS(t){if(!t)return[[]];if(t==="/")return[[_S]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:yS.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function ES(t,e,n){const r=pS(vS(t.path),n),s=oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function wS(t,e){const n=[],r=new Map;e=pf({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const f=!d,p=TS(u);p.aliasOf=d&&d.record;const g=pf(e,u),m=[p];if("alias"in u){const T=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of T)m.push(oe({},p,{components:d?d.record.components:p.components,path:w,aliasOf:d?d.record:p}))}let _,v;for(const T of m){const{path:w}=T;if(h&&w[0]!=="/"){const R=h.record.path,P=R[R.length-1]==="/"?"":"/";T.path=h.record.path+(w&&P+w)}if(_=ES(T,h,g),d?d.alias.push(_):(v=v||_,v!==_&&v.alias.push(_),f&&u.name&&!ff(_)&&o(u.name)),p.children){const R=p.children;for(let P=0;P<R.length;P++)i(R[P],_,d&&d.children[P])}d=d||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&c(_)}return v?()=>{o(v)}:Ss}function o(u){if(z_(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&gS(u,n[h])>=0&&(u.record.path!==n[h].record.path||!q_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!ff(u)&&r.set(u.record.name,u)}function l(u,h){let d,f={},p,g;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Br(1,{location:u});g=d.record.name,f=oe(df(h.params,d.keys.filter(v=>!v.optional).map(v=>v.name)),u.params&&df(u.params,d.keys.map(v=>v.name))),p=d.stringify(f)}else if("path"in u)p=u.path,d=n.find(v=>v.re.test(p)),d&&(f=d.parse(p),g=d.record.name);else{if(d=h.name?r.get(h.name):n.find(v=>v.re.test(h.path)),!d)throw Br(1,{location:u,currentLocation:h});g=d.record.name,f=oe({},h.params,u.params),p=d.stringify(f)}const m=[];let _=d;for(;_;)m.unshift(_.record),_=_.parent;return{name:g,path:p,params:f,matched:m,meta:bS(m)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function df(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function TS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:IS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function IS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ff(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function bS(t){return t.reduce((e,n)=>oe(e,n.meta),{})}function pf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function q_(t,e){return e.children.some(n=>n===t||q_(t,n))}const G_=/#/g,AS=/&/g,RS=/\//g,CS=/=/g,SS=/\?/g,K_=/\+/g,PS=/%5B/g,kS=/%5D/g,Q_=/%5E/g,NS=/%60/g,Y_=/%7B/g,OS=/%7C/g,X_=/%7D/g,xS=/%20/g;function Qu(t){return encodeURI(""+t).replace(OS,"|").replace(PS,"[").replace(kS,"]")}function DS(t){return Qu(t).replace(Y_,"{").replace(X_,"}").replace(Q_,"^")}function gl(t){return Qu(t).replace(K_,"%2B").replace(xS,"+").replace(G_,"%23").replace(AS,"%26").replace(NS,"`").replace(Y_,"{").replace(X_,"}").replace(Q_,"^")}function LS(t){return gl(t).replace(CS,"%3D")}function MS(t){return Qu(t).replace(G_,"%23").replace(SS,"%3F")}function VS(t){return t==null?"":MS(t).replace(RS,"%2F")}function Oo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function FS(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(K_," "),o=i.indexOf("="),a=Oo(o<0?i:i.slice(0,o)),c=o<0?null:Oo(i.slice(o+1));if(a in e){let l=e[a];xt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function mf(t){let e="";for(let n in t){const r=t[n];if(n=LS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(xt(r)?r.map(i=>i&&gl(i)):[r&&gl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function US(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=xt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const $S=Symbol(""),gf=Symbol(""),Yu=Symbol(""),Xu=Symbol(""),_l=Symbol("");function us(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function gn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Br(4,{from:n,to:e})):h instanceof Error?a(h):hS(h)?a(Br(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function lc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(BS(a)){const l=(a.__vccOpts||a)[e];l&&s.push(gn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=GC(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&gn(d,n,r,i,o)()}))}}return s}function BS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function _f(t){const e=st(Yu),n=st(Xu),r=at(()=>e.resolve(he(t.to))),s=at(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex($r.bind(null,u));if(d>-1)return d;const f=yf(c[l-2]);return l>1&&yf(u)===f&&h[h.length-1].path!==f?h.findIndex($r.bind(null,c[l-2])):d}),i=at(()=>s.value>-1&&WS(n.params,r.value.params)),o=at(()=>s.value>-1&&s.value===n.matched.length-1&&B_(n.params,r.value.params));function a(c={}){return zS(c)?e[he(t.replace)?"replace":"push"](he(t.to)).catch(Ss):Promise.resolve()}return{route:r,href:at(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const HS=or({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_f,setup(t,{slots:e}){const n=bn(_f(t)),{options:r}=st(Yu),s=at(()=>({[vf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[vf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:vt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),jS=HS;function zS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function WS(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!xt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function yf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vf=(t,e,n)=>t??e??n,qS=or({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=st(_l),s=at(()=>t.route||r.value),i=st(gf,0),o=at(()=>{let l=he(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=at(()=>s.value.matched[o.value]);wr(gf,at(()=>o.value+1)),wr($S,a),wr(_l,s);const c=kt();return Nr(()=>[c.value,a.value,t.name],([l,u,h],[d,f,p])=>{u&&(u.instances[h]=l,f&&f!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!$r(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Ef(n.default,{Component:d,route:l});const f=h.props[u],p=f?f===!0?l.params:typeof f=="function"?f(l):f:null,m=vt(d,oe({},p,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Ef(n.default,{Component:m,route:l})||m}}});function Ef(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const J_=qS;function GS(t){const e=wS(t.routes,t),n=t.parseQuery||FS,r=t.stringifyQuery||mf,s=t.history,i=us(),o=us(),a=us(),c=Us(Vt);let l=Vt;_r&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ac.bind(null,y=>""+y),h=ac.bind(null,VS),d=ac.bind(null,Oo);function f(y,S){let C,L;return z_(y)?(C=e.getRecordMatcher(y),L=S):L=y,e.addRoute(L,C)}function p(y){const S=e.getRecordMatcher(y);S&&e.removeRoute(S)}function g(){return e.getRoutes().map(y=>y.record)}function m(y){return!!e.getRecordMatcher(y)}function _(y,S){if(S=oe({},S||c.value),typeof y=="string"){const j=cc(n,y,S.path),we=e.resolve({path:j.path},S),hn=s.createHref(j.fullPath);return oe(j,we,{params:d(we.params),hash:Oo(j.hash),redirectedFrom:void 0,href:hn})}let C;if("path"in y)C=oe({},y,{path:cc(n,y.path,S.path).path});else{const j=oe({},y.params);for(const we in j)j[we]==null&&delete j[we];C=oe({},y,{params:h(j)}),S.params=h(S.params)}const L=e.resolve(C,S),ne=y.hash||"";L.params=u(d(L.params));const ye=YC(r,oe({},y,{hash:DS(ne),path:L.path})),W=s.createHref(ye);return oe({fullPath:ye,hash:ne,query:r===mf?US(y.query):y.query||{}},L,{redirectedFrom:void 0,href:W})}function v(y){return typeof y=="string"?cc(n,y,c.value.path):oe({},y)}function T(y,S){if(l!==y)return Br(8,{from:S,to:y})}function w(y){return x(y)}function R(y){return w(oe(v(y),{replace:!0}))}function P(y){const S=y.matched[y.matched.length-1];if(S&&S.redirect){const{redirect:C}=S;let L=typeof C=="function"?C(y):C;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=v(L):{path:L},L.params={}),oe({query:y.query,hash:y.hash,params:"path"in L?{}:y.params},L)}}function x(y,S){const C=l=_(y),L=c.value,ne=y.state,ye=y.force,W=y.replace===!0,j=P(C);if(j)return x(oe(v(j),{state:typeof j=="object"?oe({},ne,j.state):ne,force:ye,replace:W}),S||C);const we=C;we.redirectedFrom=S;let hn;return!ye&&XC(r,L,C)&&(hn=Br(16,{to:we,from:L}),mt(L,L,!0,!1)),(hn?Promise.resolve(hn):B(we,L)).catch(Le=>Jt(Le)?Jt(Le,2)?Le:Tt(Le):pt(Le,we,L)).then(Le=>{if(Le){if(Jt(Le,2))return x(oe({replace:W},v(Le.to),{state:typeof Le.to=="object"?oe({},ne,Le.to.state):ne,force:ye}),S||we)}else Le=F(we,L,!0,W,ne);return te(we,L,Le),Le})}function D(y,S){const C=T(y,S);return C?Promise.reject(C):Promise.resolve()}function O(y){const S=It.values().next().value;return S&&typeof S.runWithContext=="function"?S.runWithContext(y):y()}function B(y,S){let C;const[L,ne,ye]=KS(y,S);C=lc(L.reverse(),"beforeRouteLeave",y,S);for(const j of L)j.leaveGuards.forEach(we=>{C.push(gn(we,y,S))});const W=D.bind(null,y,S);return C.push(W),gt(C).then(()=>{C=[];for(const j of i.list())C.push(gn(j,y,S));return C.push(W),gt(C)}).then(()=>{C=lc(ne,"beforeRouteUpdate",y,S);for(const j of ne)j.updateGuards.forEach(we=>{C.push(gn(we,y,S))});return C.push(W),gt(C)}).then(()=>{C=[];for(const j of ye)if(j.beforeEnter)if(xt(j.beforeEnter))for(const we of j.beforeEnter)C.push(gn(we,y,S));else C.push(gn(j.beforeEnter,y,S));return C.push(W),gt(C)}).then(()=>(y.matched.forEach(j=>j.enterCallbacks={}),C=lc(ye,"beforeRouteEnter",y,S),C.push(W),gt(C))).then(()=>{C=[];for(const j of o.list())C.push(gn(j,y,S));return C.push(W),gt(C)}).catch(j=>Jt(j,8)?j:Promise.reject(j))}function te(y,S,C){a.list().forEach(L=>O(()=>L(y,S,C)))}function F(y,S,C,L,ne){const ye=T(y,S);if(ye)return ye;const W=S===Vt,j=_r?history.state:{};C&&(L||W?s.replace(y.fullPath,oe({scroll:W&&j&&j.scroll},ne)):s.push(y.fullPath,ne)),c.value=y,mt(y,S,C,W),Tt()}let ue;function $e(){ue||(ue=s.listen((y,S,C)=>{if(!bt.listening)return;const L=_(y),ne=P(L);if(ne){x(oe(ne,{replace:!0}),L).catch(Ss);return}l=L;const ye=c.value;_r&&iS(af(ye.fullPath,C.delta),Pa()),B(L,ye).catch(W=>Jt(W,12)?W:Jt(W,2)?(x(W.to,L).then(j=>{Jt(j,20)&&!C.delta&&C.type===ii.pop&&s.go(-1,!1)}).catch(Ss),Promise.reject()):(C.delta&&s.go(-C.delta,!1),pt(W,L,ye))).then(W=>{W=W||F(L,ye,!1),W&&(C.delta&&!Jt(W,8)?s.go(-C.delta,!1):C.type===ii.pop&&Jt(W,20)&&s.go(-1,!1)),te(L,ye,W)}).catch(Ss)}))}let Te=us(),Q=us(),Re;function pt(y,S,C){Tt(y);const L=Q.list();return L.length?L.forEach(ne=>ne(y,S,C)):console.error(y),Promise.reject(y)}function Ye(){return Re&&c.value!==Vt?Promise.resolve():new Promise((y,S)=>{Te.add([y,S])})}function Tt(y){return Re||(Re=!y,$e(),Te.list().forEach(([S,C])=>y?C(y):S()),Te.reset()),y}function mt(y,S,C,L){const{scrollBehavior:ne}=t;if(!_r||!ne)return Promise.resolve();const ye=!C&&oS(af(y.fullPath,0))||(L||!C)&&history.state&&history.state.scroll||null;return Pn().then(()=>ne(y,S,ye)).then(W=>W&&sS(W)).catch(W=>pt(W,y,S))}const tt=y=>s.go(y);let _e;const It=new Set,bt={currentRoute:c,listening:!0,addRoute:f,removeRoute:p,hasRoute:m,getRoutes:g,resolve:_,options:t,push:w,replace:R,go:tt,back:()=>tt(-1),forward:()=>tt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Q.add,isReady:Ye,install(y){const S=this;y.component("RouterLink",jS),y.component("RouterView",J_),y.config.globalProperties.$router=S,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>he(c)}),_r&&!_e&&c.value===Vt&&(_e=!0,w(s.location).catch(ne=>{}));const C={};for(const ne in Vt)Object.defineProperty(C,ne,{get:()=>c.value[ne],enumerable:!0});y.provide(Yu,S),y.provide(Xu,Ko(C)),y.provide(_l,c);const L=y.unmount;It.add(y),y.unmount=function(){It.delete(y),It.size<1&&(l=Vt,ue&&ue(),ue=null,c.value=Vt,_e=!1,Re=!1),L()}}};function gt(y){return y.reduce((S,C)=>S.then(()=>O(C)),Promise.resolve())}return bt}function KS(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>$r(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>$r(l,c))||s.push(c))}return[n,r,s]}function QS(){return st(Xu)}const it={middleware:["random-redirect"]},ot={layout:"custom"},wf=[{name:"slug",path:"/:slug(.*)*",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./_...slug_.7dffdcd2.js"),["./_...slug_.7dffdcd2.js","./nuxt-link.d30bfe4b.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default||t)},{name:"about",path:"/about",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./about.24ccaa87.js"),["./about.24ccaa87.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css","./about.6e469c3d.css"],import.meta.url).then(t=>t.default||t)},{name:"article",path:"/article",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./article.f8b1abe1.js"),["./article.f8b1abe1.js","./select.ab7395a2.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css","./FormGroup.89646178.js","./article.4f923be4.css"],import.meta.url).then(t=>t.default||t)},{name:"catch-all-slug",path:"/catch-all/:slug(.*)*",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./_...slug_.195a25be.js"),["./_...slug_.195a25be.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default||t)},{name:"docs-doc1",path:"/docs/doc1",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./doc1.f72e51c8.js"),["./doc1.f72e51c8.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default||t)},{name:"docs-doc2",path:"/docs/doc2",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./doc2.84cb5b3f.js"),["./doc2.84cb5b3f.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default||t)},{name:"index",path:"/",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./index.2feb3db5.js"),["./index.2feb3db5.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css","./Icon.daf6a8ee.js","./index.df58e121.js","./Icon.2e8fb0a2.css","./Avatar.8015deae.js","./select.ab7395a2.js","./nuxt-link.d30bfe4b.js","./asyncData.8297866c.js","./useTime.0c88af75.js","./vue.f36acd1f.d568424a.js","./index.4c6aaa9f.css"],import.meta.url).then(t=>t.default||t)},{name:"posts-postID-comment-commentID",path:"/posts/:postID()/comment/:commentID()",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./_commentID_.059c6384.js"),["./_commentID_.059c6384.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default||t)},{name:"posts-postID",path:"/posts/:postID()",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./index.8e458f88.js"),["./index.8e458f88.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default||t)},{name:"posts",path:"/posts",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./index.4c4803d5.js"),["./index.4c4803d5.js","./nuxt-link.d30bfe4b.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default||t)},{name:"posts-top-number",path:"/posts/top-:number()",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./top-_number_.2bfc6a40.js"),["./top-_number_.2bfc6a40.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default||t)},{name:(it==null?void 0:it.name)??"pratice-about",path:(it==null?void 0:it.path)??"/pratice/about",meta:it||{},alias:(it==null?void 0:it.alias)||[],redirect:(it==null?void 0:it.redirect)||void 0,component:()=>k(()=>import("./about.d9d539ca.js"),["./about.d9d539ca.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default||t)},{name:"pratice-contact",path:"/pratice/contact",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./contact.d899b157.js"),["./contact.d899b157.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default||t)},{name:"pratice-count",path:"/pratice/count",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./count.48b788ee.js"),["./count.48b788ee.js","./Icon.daf6a8ee.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css","./index.df58e121.js","./Icon.2e8fb0a2.css","./useTime.0c88af75.js","./count.5a0bd567.css"],import.meta.url).then(t=>t.default||t)},{name:(ot==null?void 0:ot.name)??"pratice-custom",path:(ot==null?void 0:ot.path)??"/pratice/custom",meta:ot||{},alias:(ot==null?void 0:ot.alias)||[],redirect:(ot==null?void 0:ot.redirect)||void 0,component:()=>k(()=>import("./custom.d5c31282.js"),["./custom.d5c31282.js","./wintermelon.25719fc5.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default||t)},{name:"pratice-database",path:"/pratice/database",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./database.61673605.js"),["./database.61673605.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default||t)},{name:"pratice-docs",path:"/pratice/docs",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./docs.6ecb08dd.js"),["./docs.6ecb08dd.js","./nuxt-link.d30bfe4b.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default||t)},{name:"pratice-useAsyncData",path:"/pratice/useAsyncData",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./useAsyncData.2f482c1f.js"),["./useAsyncData.2f482c1f.js","./asyncData.8297866c.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default||t)},{name:"pratice-useFetchData",path:"/pratice/useFetchData",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./useFetchData.3dd59d33.js"),["./useFetchData.3dd59d33.js","./index.c9d4dc9e.js","./asyncData.8297866c.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default||t)},{name:"state-pratice-counter",path:"/state-pratice/counter",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./counter.19fdf764.js"),["./counter.19fdf764.js","./nuxt-link.d30bfe4b.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default||t)},{name:"state-pratice-increment",path:"/state-pratice/increment",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./increment.1fb2b2af.js"),["./increment.1fb2b2af.js","./nuxt-link.d30bfe4b.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default||t)},{name:"state-pratice",path:"/state-pratice",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./index.ce2cc890.js"),["./index.ce2cc890.js","./nuxt-link.d30bfe4b.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default||t)},{name:"state-pratice-shareState",path:"/state-pratice/shareState",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./shareState.bebe51d0.js"),["./shareState.bebe51d0.js","./nuxt-link.d30bfe4b.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default||t)},{name:"users-id",path:"/users/:id()",meta:{},alias:[],redirect:void 0,component:()=>k(()=>import("./_id_.ff75b33e.js"),["./_id_.ff75b33e.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default||t)}],Z_=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?vt(t,e,n):(r=n.default)==null?void 0:r.call(n)}});function Tf(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function YS(t,e){return t===e?!1:Tf(t)!==Tf(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const XS={scrollBehavior(t,e,n){var l;const r=ie(),s=((l=cn().options)==null?void 0:l.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&YS(t,e)&&(i={left:0,top:0}),t.path===e.path){if(e.hash&&!t.hash)return{left:0,top:0};if(t.hash)return{el:t.hash,top:If(t.hash),behavior:s}}const a=u=>!!(u.meta.pageTransition??Mc),c=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(u=>{r.hooks.hookOnce(c,async()=>{await Pn(),t.hash&&(i={el:t.hash,top:If(t.hash),behavior:s}),u(i)})})}};function If(t){try{const e=document.querySelector(t);if(e)return parseFloat(getComputedStyle(e).scrollMarginTop)}catch{}return 0}const JS={hashMode:!1,scrollBehaviorType:"auto"},nt={...JS,...XS},ZS=async t=>{var c;let e,n;if(!((c=t.meta)!=null&&c.validate))return;const r=ie(),s=cn();if(([e,n]=js(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e)===!0)return;const o=Zo({statusCode:404,statusMessage:`Page Not Found: ${t.fullPath}`}),a=s.beforeResolve(l=>{if(a(),l===t){const u=s.afterEach(async()=>{u(),await r.runWithContext(()=>Fn(o)),window.history.pushState({},"",t.fullPath)});return!1}})},eP=(t,e)=>{console.log(`[全域中間件] to: ${t.path}, from: ${e.path}`)},tP=async t=>{let e,n;const r=([e,n]=js(()=>Cm(t.path)),e=await e,n(),e);if(r.redirect)return r.redirect},co=[ZS,eP,tP],ks={"random-error-redirect":()=>k(()=>import("./random-error-redirect.b03c2658.js"),["./random-error-redirect.b03c2658.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url),"random-redirect":()=>k(()=>import("./random-redirect.dbf97a19.js"),["./random-redirect.dbf97a19.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url)};function nP(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const l=i.includes(t.slice(o))?t.slice(o).length:1;let u=i.slice(l);return u[0]!=="/"&&(u="/"+u),jh(u,"")}const a=jh(r,t),c=!n||sw(a,n,{trailingSlash:!0})?a:n;return c+(c.includes("?")?"":s)+i}const rP=et({name:"nuxt:router",enforce:"pre",async setup(t){var g,m;let e,n,r=ui().app.baseURL;nt.hashMode&&!r.includes("#")&&(r+="#");const s=((g=nt.history)==null?void 0:g.call(nt,r))??(nt.hashMode?uS(r):j_(r)),i=((m=nt.routes)==null?void 0:m.call(nt,wf))??wf;let o;const a=nP(r,window.location,t.payload.path),c=GS({...nt,scrollBehavior:(_,v,T)=>{var w;if(v===Vt){o=T;return}return c.options.scrollBehavior=nt.scrollBehavior,(w=nt.scrollBehavior)==null?void 0:w.call(nt,_,Vt,o||T)},history:s,routes:i});t.vueApp.use(c);const l=Us(c.currentRoute.value);c.afterEach((_,v)=>{l.value=v}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=Us(c.resolve(a)),h=()=>{u.value=c.currentRoute.value};t.hook("page:finish",h),c.afterEach((_,v)=>{var T,w,R,P;((w=(T=_.matched[0])==null?void 0:T.components)==null?void 0:w.default)===((P=(R=v.matched[0])==null?void 0:R.components)==null?void 0:P.default)&&h()});const d={};for(const _ in u.value)Object.defineProperty(d,_,{get:()=>u.value[_]});t._route=Ko(d),t._middleware=t._middleware||{global:[],named:{}};const f=Jo();try{[e,n]=js(()=>c.isReady()),await e,n()}catch(_){[e,n]=js(()=>t.runWithContext(()=>Fn(_))),await e,n()}const p=t.payload.state._layout;return c.beforeEach(async(_,v)=>{var T;_.meta=bn(_.meta),t.isHydrating&&p&&!t0(_.meta.layout)&&(_.meta.layout=p),t._processingMiddleware=!0;{const w=new Set([...co,...t._middleware.global]);for(const R of _.matched){const P=R.meta.middleware;if(P)if(Array.isArray(P))for(const x of P)w.add(x);else w.add(P)}for(const R of w){const P=typeof R=="string"?t._middleware.named[R]||await((T=ks[R])==null?void 0:T.call(ks).then(D=>D.default||D)):R;if(!P)throw new Error(`Unknown route middleware: '${R}'.`);const x=await t.runWithContext(()=>P(_,v));if(!t.payload.serverRendered&&t.isHydrating&&(x===!1||x instanceof Error)){const D=x||Dc({statusCode:404,statusMessage:`Page Not Found: ${a}`});return await t.runWithContext(()=>Fn(D)),!1}if(x!==!0&&(x||x===!1))return x}}}),c.onError(()=>{delete t._processingMiddleware}),c.afterEach(async(_,v,T)=>{delete t._processingMiddleware,!t.isHydrating&&f.value&&await t.runWithContext(aT),_.matched.length===0&&await t.runWithContext(()=>Fn(Dc({statusCode:404,fatal:!1,statusMessage:`Page not found: ${_.fullPath}`})))}),t.hooks.hookOnce("app:created",async()=>{try{await c.replace({...c.resolve(a),name:void 0,force:!0}),c.options.scrollBehavior=nt.scrollBehavior}catch(_){await t.runWithContext(()=>Fn(_))}}),{provide:{router:c}}}}),bf=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),tV=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),ey=t=>{const e=ie();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{bf(t)}):bf(t)},sP=et({name:"nuxt:payload",setup(t){cn().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await Jh(e.path);r&&Object.assign(t.static.data,r.data)}),ey(()=>{var e;t.hooks.hook("link:prefetch",async n=>{Xo(n).protocol||await Jh(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(ea,1e3)})}}),iP=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let ty;const Ai=t=>ty=t,ny=Symbol();function yl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ns;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ns||(Ns={}));function oP(){const t=ql(!0),e=t.run(()=>kt({}));let n=[],r=[];const s=ho({install(i){Ai(s),s._a=i,i.provide(ny,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!iP?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ry=()=>{};function Af(t,e,n,r=ry){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Qp()&&Ql(s),s}function dr(t,...e){t.slice().forEach(n=>{n(...e)})}const aP=t=>t();function vl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];yl(s)&&yl(r)&&t.hasOwnProperty(n)&&!$s(r)&&!Kp(r)?t[n]=vl(s,r):t[n]=r}return t}const cP=Symbol();function lP(t){return!yl(t)||!t.hasOwnProperty(cP)}const{assign:mn}=Object;function uP(t){return!!($s(t)&&t.effect)}function hP(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=r0(n.state.value[t]);return mn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=ho(at(()=>{Ai(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return c=sy(t,l,e,n,r,!0),c}function sy(t,e,n={},r,s,i){let o;const a=mn({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],f;const p=r.state.value[t];!i&&!p&&(r.state.value[t]={}),kt({});let g;function m(D){let O;l=u=!1,typeof D=="function"?(D(r.state.value[t]),O={type:Ns.patchFunction,storeId:t,events:f}):(vl(r.state.value[t],D),O={type:Ns.patchObject,payload:D,storeId:t,events:f});const B=g=Symbol();Pn().then(()=>{g===B&&(l=!0)}),u=!0,dr(h,O,r.state.value[t])}const _=i?function(){const{state:O}=n,B=O?O():{};this.$patch(te=>{mn(te,B)})}:ry;function v(){o.stop(),h=[],d=[],r._s.delete(t)}function T(D,O){return function(){Ai(r);const B=Array.from(arguments),te=[],F=[];function ue(Q){te.push(Q)}function $e(Q){F.push(Q)}dr(d,{args:B,name:D,store:R,after:ue,onError:$e});let Te;try{Te=O.apply(this&&this.$id===t?this:R,B)}catch(Q){throw dr(F,Q),Q}return Te instanceof Promise?Te.then(Q=>(dr(te,Q),Q)).catch(Q=>(dr(F,Q),Promise.reject(Q))):(dr(te,Te),Te)}}const w={_p:r,$id:t,$onAction:Af.bind(null,d),$patch:m,$reset:_,$subscribe(D,O={}){const B=Af(h,D,O.detached,()=>te()),te=o.run(()=>Nr(()=>r.state.value[t],F=>{(O.flush==="sync"?u:l)&&D({storeId:t,type:Ns.direct,events:f},F)},mn({},c,O)));return B},$dispose:v},R=bn(w);r._s.set(t,R);const x=(r._a&&r._a.runWithContext||aP)(()=>r._e.run(()=>(o=ql()).run(e)));for(const D in x){const O=x[D];if($s(O)&&!uP(O)||Kp(O))i||(p&&lP(O)&&($s(O)?O.value=p[D]:vl(O,p[D])),r.state.value[t][D]=O);else if(typeof O=="function"){const B=T(D,O);x[D]=B,a.actions[D]=O}}return mn(R,x),mn(n0(R),x),Object.defineProperty(R,"$state",{get:()=>r.state.value[t],set:D=>{m(O=>{mn(O,D)})}}),r._p.forEach(D=>{mn(R,o.run(()=>D({store:R,app:r._a,pinia:r,options:a})))}),p&&i&&n.hydrate&&n.hydrate(R.$state,p),l=!0,u=!0,R}function dP(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Gl();return a=a||(l?st(ny,null):null),a&&Ai(a),a=ty,a._s.has(r)||(i?sy(r,e,s,a):hP(r,s,a)),a._s.get(r)}return o.$id=r,o}const fP="$s";function pP(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,r]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const s=fP+n,i=ie(),o=Gp(i.payload.state,s);if(o.value===void 0&&r){const a=r();if($s(a))return i.payload.state[s]=a,a;o.value=a}return o}const mP={path:"/",watch:!0,decode:t=>Hs(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))};function Rf(t,e){var c;const n={...mP,...e},r=gP(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=i?void 0:r[t]??((c=n.default)==null?void 0:c.call(n)),a=s&&!i?vP(o,s):kt(o);{const l=typeof BroadcastChannel>"u"?null:new BroadcastChannel(`nuxt:cookies:${t}`),u=()=>{yP(t,a.value,n),l==null||l.postMessage(n.encode(a.value))};let h=!1;Qp()&&Ql(()=>{h=!0,u(),l==null||l.close()}),l&&(l.onmessage=d=>{h=!0,a.value=n.decode(d.data),Pn(()=>{h=!1})}),n.watch?Nr(a,()=>{h||u()},{deep:n.watch!=="shallow"}):u()}return a}function gP(t={}){return Kw(document.cookie,t)}function _P(t,e,n={}){return e==null?Yh(t,e,{...n,maxAge:-1}):Yh(t,e,n)}function yP(t,e,n={}){document.cookie=_P(t,e,n)}function vP(t,e){let n;return Ql(()=>{clearTimeout(n)}),s0((r,s)=>({get(){return r(),t},set(i){clearTimeout(n),n=setTimeout(()=>{t=void 0,s()},e),t=i,s()}}))}function EP(t={}){const e=t.path||window.location.pathname;let n={};try{n=Hs(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:ie().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const wP=et(t=>{const e=oP();return t.vueApp.use(e),Ai(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}),TP=z(()=>k(()=>import("./ContentDoc.b6fc394f.js"),["./ContentDoc.b6fc394f.js","./vue.f36acd1f.d568424a.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css","./ContentRenderer.f383a84a.js","./ContentRendererMarkdown.vue.5484d744.js","./index.b0fe9fac.js","./preview.07537801.js","./ContentQuery.472e5c0f.js","./asyncData.8297866c.js","./query.44e95bbc.js","./index.c9d4dc9e.js"],import.meta.url).then(t=>t.default)),IP=z(()=>k(()=>import("./ContentList.830c3da3.js"),["./ContentList.830c3da3.js","./ContentQuery.472e5c0f.js","./asyncData.8297866c.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css","./query.44e95bbc.js","./index.c9d4dc9e.js","./preview.07537801.js"],import.meta.url).then(t=>t.default)),bP=z(()=>k(()=>import("./ContentNavigation.fd04ebc7.js"),["./ContentNavigation.fd04ebc7.js","./asyncData.8297866c.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css","./index.c9d4dc9e.js","./query.44e95bbc.js","./preview.07537801.js","./nuxt-link.d30bfe4b.js"],import.meta.url).then(t=>t.default)),AP=z(()=>k(()=>import("./ContentQuery.472e5c0f.js"),["./ContentQuery.472e5c0f.js","./asyncData.8297866c.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css","./query.44e95bbc.js","./index.c9d4dc9e.js","./preview.07537801.js"],import.meta.url).then(t=>t.default)),RP=z(()=>k(()=>import("./ContentRenderer.f383a84a.js"),["./ContentRenderer.f383a84a.js","./ContentRendererMarkdown.vue.5484d744.js","./index.b0fe9fac.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css","./preview.07537801.js"],import.meta.url).then(t=>t.default)),CP=z(()=>k(()=>import("./ContentRendererMarkdown.b98eb48a.js"),["./ContentRendererMarkdown.b98eb48a.js","./ContentRendererMarkdown.vue.5484d744.js","./index.b0fe9fac.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css","./preview.07537801.js"],import.meta.url).then(t=>t.default)),SP=z(()=>k(()=>import("./ContentSlot.7aa9e7af.js"),["./ContentSlot.7aa9e7af.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),PP=z(()=>k(()=>import("./DocumentDrivenEmpty.9af75294.js"),["./DocumentDrivenEmpty.9af75294.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),kP=z(()=>k(()=>import("./DocumentDrivenNotFound.4d487c58.js"),["./DocumentDrivenNotFound.4d487c58.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),NP=z(()=>k(()=>import("./Markdown.f75697e0.js"),["./Markdown.f75697e0.js","./ContentSlot.7aa9e7af.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),OP=z(()=>k(()=>import("./ProseCode.f0c09924.js"),["./ProseCode.f0c09924.js","./ProseCode.vue.07b9a365.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default)),xP=z(()=>k(()=>import("./ProseCodeInline.df3af7fd.js"),["./ProseCodeInline.df3af7fd.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),DP=z(()=>k(()=>import("./ProsePre.1eb520a3.js"),["./ProsePre.1eb520a3.js","./ProseCode.vue.07b9a365.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default)),LP=z(()=>k(()=>import("./ProseA.1510918e.js"),["./ProseA.1510918e.js","./nuxt-link.d30bfe4b.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),MP=z(()=>k(()=>import("./ProseBlockquote.4b994bea.js"),["./ProseBlockquote.4b994bea.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),VP=z(()=>k(()=>import("./ProseEm.835238df.js"),["./ProseEm.835238df.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),FP=z(()=>k(()=>import("./ProseH1.920ca343.js"),["./ProseH1.920ca343.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),UP=z(()=>k(()=>import("./ProseH2.1006df85.js"),["./ProseH2.1006df85.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),$P=z(()=>k(()=>import("./ProseH3.bb053961.js"),["./ProseH3.bb053961.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),BP=z(()=>k(()=>import("./ProseH4.73e3b266.js"),["./ProseH4.73e3b266.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),HP=z(()=>k(()=>import("./ProseH5.2f9f2b0b.js"),["./ProseH5.2f9f2b0b.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),jP=z(()=>k(()=>import("./ProseH6.ea2bad7d.js"),["./ProseH6.ea2bad7d.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),zP=z(()=>k(()=>import("./ProseHr.067c87c7.js"),["./ProseHr.067c87c7.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),WP=z(()=>k(()=>import("./ProseImg.b6749143.js"),["./ProseImg.b6749143.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),qP=z(()=>k(()=>import("./ProseLi.815e4a42.js"),["./ProseLi.815e4a42.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),GP=z(()=>k(()=>import("./ProseOl.74b9a0c5.js"),["./ProseOl.74b9a0c5.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),KP=z(()=>k(()=>import("./ProseP.c55c846f.js"),["./ProseP.c55c846f.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),QP=z(()=>k(()=>import("./ProseScript.3035a923.js"),["./ProseScript.3035a923.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),YP=z(()=>k(()=>import("./ProseStrong.1c79fa9d.js"),["./ProseStrong.1c79fa9d.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),XP=z(()=>k(()=>import("./ProseTable.11e2af12.js"),["./ProseTable.11e2af12.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),JP=z(()=>k(()=>import("./ProseTbody.b1e0c109.js"),["./ProseTbody.b1e0c109.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),ZP=z(()=>k(()=>import("./ProseTd.352315e8.js"),["./ProseTd.352315e8.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),ek=z(()=>k(()=>import("./ProseTh.f9f280a7.js"),["./ProseTh.f9f280a7.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),tk=z(()=>k(()=>import("./ProseThead.2cea40d8.js"),["./ProseThead.2cea40d8.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),nk=z(()=>k(()=>import("./ProseTr.e47574a8.js"),["./ProseTr.e47574a8.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),rk=z(()=>k(()=>import("./ProseUl.7912aa95.js"),["./ProseUl.7912aa95.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css"],import.meta.url).then(t=>t.default)),sk=z(()=>k(()=>import("./Icon.daf6a8ee.js"),["./Icon.daf6a8ee.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css","./index.df58e121.js","./Icon.2e8fb0a2.css"],import.meta.url).then(t=>t.default)),ik=z(()=>k(()=>import("./IconCSS.bf41d006.js"),["./IconCSS.bf41d006.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css","./index.df58e121.js","./IconCSS.65e107b2.css"],import.meta.url).then(t=>t.default)),ok=[["ContentDoc",TP],["ContentList",IP],["ContentNavigation",bP],["ContentQuery",AP],["ContentRenderer",RP],["ContentRendererMarkdown",CP],["MDCSlot",SP],["DocumentDrivenEmpty",PP],["DocumentDrivenNotFound",kP],["Markdown",NP],["ProseCode",OP],["ProseCodeInline",xP],["ProsePre",DP],["ProseA",LP],["ProseBlockquote",MP],["ProseEm",VP],["ProseH1",FP],["ProseH2",UP],["ProseH3",$P],["ProseH4",BP],["ProseH5",HP],["ProseH6",jP],["ProseHr",zP],["ProseImg",WP],["ProseLi",qP],["ProseOl",GP],["ProseP",KP],["ProseScript",QP],["ProseStrong",YP],["ProseTable",XP],["ProseTbody",JP],["ProseTd",ZP],["ProseTh",ek],["ProseThead",tk],["ProseTr",nk],["ProseUl",rk],["Icon",sk],["IconCSS",ik]],ak=et({name:"nuxt:global-components",setup(t){for(const[e,n]of ok)t.vueApp.component(e,n),t.vueApp.component("Lazy"+e,n)}}),Hn={custom:()=>k(()=>import("./custom.858a7568.js"),["./custom.858a7568.js","./nuxt-link.d30bfe4b.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css","./wintermelon.25719fc5.js"],import.meta.url).then(t=>t.default||t),default:()=>k(()=>import("./default.c410eb72.js"),["./default.c410eb72.js","./nuxt-link.d30bfe4b.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css","./Icon.daf6a8ee.js","./index.df58e121.js","./Icon.2e8fb0a2.css","./_commonjsHelpers.725317a4.js","./Avatar.8015deae.js","./select.ab7395a2.js","./FormGroup.89646178.js","./default.4e10ca42.css"],import.meta.url).then(t=>t.default||t)},ck=et({name:"nuxt:prefetch",setup(t){const e=cn();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Hn[r]=="function"&&await Hn[r]()})}),t.hooks.hook("link:prefetch",n=>{var o,a,c,l;if(Yo(n))return;const r=e.resolve(n);if(!r)return;const s=(o=r==null?void 0:r.meta)==null?void 0:o.layout;let i=Array.isArray((a=r==null?void 0:r.meta)==null?void 0:a.middleware)?(c=r==null?void 0:r.meta)==null?void 0:c.middleware:[(l=r==null?void 0:r.meta)==null?void 0:l.middleware];i=i.filter(u=>typeof u=="string");for(const u of i)typeof ks[u]=="function"&&ks[u]();s&&typeof Hn[s]=="function"&&Hn[s]()})}});var lk="firebase",uk="10.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ct(lk,uk,"app");const hk=et(()=>({provide:{firebaseApp:Bm(ui().public.vuefire.config)}}));function iy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function oy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dk=oy,ay=new Qr("auth","Firebase",oy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new di("@firebase/auth");function fk(t,...e){xo.logLevel<=G.WARN&&xo.warn(`Auth (${Xr}): ${t}`,...e)}function lo(t,...e){xo.logLevel<=G.ERROR&&xo.error(`Auth (${Xr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t,...e){throw Ju(t,...e)}function cy(t,...e){return Ju(t,...e)}function pk(t,e,n){const r=Object.assign(Object.assign({},dk()),{[e]:n});return new Qr("auth","Firebase",r).create(e,{appName:t.name})}function Ju(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ay.create(t,...e)}function ae(t,e,...n){if(!t)throw Ju(e,...n)}function Os(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lo(e),new Error(e)}function Do(t,e){t||Os(e)}function mk(){return Sf()==="http:"||Sf()==="https:"}function Sf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mk()||NT()||"connection"in navigator)?navigator.onLine:!0}function _k(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){this.shortDelay=e,this.longDelay=n,Do(n>e,"Short delay should be less than long delay!"),this.isMobile=ru()||Lm()}get(){return gk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(t,e){Do(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Os("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Os("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Os("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=new Ri(3e4,6e4);function uy(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ka(t,e,n,r,s={}){return hy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=su(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ly.fetch()(dy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function hy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vk),e);try{const s=new wk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Gi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Gi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Gi(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw pk(t,u,l);Cf(t,u)}}catch(s){if(s instanceof ln)throw s;Cf(t,"network-request-failed",{message:String(s)})}}function dy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?yk(t.config,s):`${t.config.apiScheme}://${s}`}class wk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cy(this.auth,"network-request-failed")),Ek.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=cy(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tk(t,e){return ka(t,"POST","/v1/accounts:delete",e)}async function Ik(t,e){return ka(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bk(t,e=!1){const n=Yr(t),r=await n.getIdToken(e),s=fy(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:xs(uc(s.auth_time)),issuedAtTime:xs(uc(s.iat)),expirationTime:xs(uc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function uc(t){return Number(t)*1e3}function fy(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return lo("JWT malformed, contained fewer than 3 sections"),null;try{const s=yo(n);return s?JSON.parse(s):(lo("Failed to decode base64 JWT payload"),null)}catch(s){return lo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ak(t){const e=fy(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ln&&Rk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Rk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xs(this.lastLoginAt),this.creationTime=xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await El(t,Ik(n,{idToken:r}));ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?kk(i.providerUserInfo):[],a=Pk(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new py(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Sk(t){const e=Yr(t);await Lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Pk(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function kk(t){return t.map(e=>{var{providerId:n}=e,r=iy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nk(t,e){const n=await hy(t,{},async()=>{const r=su({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=dy(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ly.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ok(t,e){return ka(t,"POST","/v2/accounts:revokeToken",uy(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ak(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ae(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Nk(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new oi;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oi,this.toJSON())}_performRefresh(){return Os("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=iy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ck(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new py(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await El(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bk(this,e)}reload(){return Sk(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Lo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await El(this,Tk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,_=(l=n.createdAt)!==null&&l!==void 0?l:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:w,isAnonymous:R,providerData:P,stsTokenManager:x}=n;ae(T&&x,e,"internal-error");const D=oi.fromJSON(this.name,x);ae(typeof T=="string",e,"internal-error"),fn(h,e.name),fn(d,e.name),ae(typeof w=="boolean",e,"internal-error"),ae(typeof R=="boolean",e,"internal-error"),fn(f,e.name),fn(p,e.name),fn(g,e.name),fn(m,e.name),fn(_,e.name),fn(v,e.name);const O=new Cr({uid:T,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:R,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:D,createdAt:_,lastLoginAt:v});return P&&Array.isArray(P)&&(O.providerData=P.map(B=>Object.assign({},B))),m&&(O._redirectEventId=m),O}static async _fromIdTokenResponse(e,n,r=!1){const s=new oi;s.updateFromServerResponse(n);const i=new Cr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Lo(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new Map;function jn(t){Do(t instanceof Function,"Expected a class definition");let e=Pf.get(t);return e?(Do(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}my.type="NONE";const kf=my;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(t,e,n){return`firebase:${t}:${e}:${n}`}class Sr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=hc(this.userKey,s.apiKey,i),this.fullPersistenceKey=hc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Sr(jn(kf),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||jn(kf);const o=hc(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Cr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Sr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Sr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mk(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xk(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fk(e))return"Blackberry";if(Uk(e))return"Webos";if(Dk(e))return"Safari";if((e.includes("chrome/")||Lk(e))&&!e.includes("edge/"))return"Chrome";if(Vk(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xk(t=Wt()){return/firefox\//i.test(t)}function Dk(t=Wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lk(t=Wt()){return/crios\//i.test(t)}function Mk(t=Wt()){return/iemobile/i.test(t)}function Vk(t=Wt()){return/android/i.test(t)}function Fk(t=Wt()){return/blackberry/i.test(t)}function Uk(t=Wt()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(t,e=[]){let n;switch(t){case"Browser":n=Nf(Wt());break;case"Worker":n=`${Nf(Wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bk(t,e={}){return ka(t,"GET","/v2/passwordPolicy",uy(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=6;class jk{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Hk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Of(this),this.idTokenSubscription=new Of(this),this.beforeStateQueue=new $k(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ay,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Sr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_k()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Yr(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Bk(this),n=new jk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ok(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Sr.create(this,[jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wk(t){return Yr(t)}class Of{constructor(e){this.auth=e,this.observer=null,this.addObserver=UT(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function qk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}new Ri(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ri(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ri(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ri(5e3,15e3);var xf="@firebase/auth",Df="1.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Qk(t){qt(new Nt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gy(t)},l=new zk(r,s,i,c);return qk(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qt(new Nt("auth-internal",e=>{const n=Wk(e.getProvider("auth").getImmediate());return(r=>new Gk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ct(xf,Df,Kk(t)),ct(xf,Df,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=5*60;PT("authIdTokenMaxAge");Qk("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=new Map,Jk={activated:!1,tokenObservers:[]};function Dt(t){return Xk.get(t)||Object.assign({},Jk)}const Lf={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new zs,await e1(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new zs,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function e1(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Mo=new Qr("appCheck","AppCheck",t1);function _y(t){if(!Dt(t).activated)throw Mo.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1="firebase-app-check-database",r1=1,wl="firebase-app-check-store";let Ki=null;function s1(){return Ki||(Ki=new Promise((t,e)=>{try{const n=indexedDB.open(n1,r1);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(Mo.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(wl,{keyPath:"compositeKey"})}}}catch(n){e(Mo.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Ki)}function i1(t,e){return o1(a1(t),e)}async function o1(t,e){const r=(await s1()).transaction(wl,"readwrite"),i=r.objectStore(wl).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=c=>{o()},r.onerror=c=>{var l;a(Mo.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function a1(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new di("@firebase/app-check");function Mf(t,e){return Vm()?i1(t,e).catch(n=>{Tl.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1={error:"UNKNOWN_ERROR"};function l1(t){return ta.encodeString(JSON.stringify(t),!1)}async function Il(t,e=!1){const n=t.app;_y(n);const r=Dt(n);let s=r.token,i;if(s&&!Ts(s)&&(r.token=void 0,s=void 0),!s){const c=await r.cachedTokenPromise;c&&(Ts(c)?s=c:await Mf(n,void 0))}if(!e&&s&&Ts(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await Dt(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Tl.warn(c.message):Tl.error(c),i=c}let a;return s?i?Ts(s)?a={token:s.token,internalError:i}:a=Ff(i):(a={token:s.token},r.token=s,await Mf(n,s)):a=Ff(i),o&&f1(n,a),a}async function u1(t){const e=t.app;_y(e);const{provider:n}=Dt(e);{const{token:r}=await n.getToken();return{token:r}}}function h1(t,e,n,r){const{app:s}=t,i=Dt(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Ts(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),Vf(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Vf(t))}function yy(t,e){const n=Dt(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Vf(t){const{app:e}=t,n=Dt(e);let r=n.tokenRefresher;r||(r=d1(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function d1(t){const{app:e}=t;return new Zk(async()=>{const n=Dt(e);let r;if(n.token?r=await Il(t,!0):r=await Il(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=Dt(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},Lf.RETRIAL_MIN_WAIT,Lf.RETRIAL_MAX_WAIT)}function f1(t,e){const n=Dt(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Ts(t){return t.expireTimeMillis-Date.now()>0}function Ff(t){return{token:l1(c1),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Dt(this.app);for(const n of e)yy(this.app,n.next);return Promise.resolve()}}function m1(t,e){return new p1(t,e)}function g1(t){return{getToken:e=>Il(t,e),getLimitedUseToken:()=>u1(t),addTokenListener:e=>h1(t,"INTERNAL",e),removeTokenListener:e=>yy(t.app,e)}}const _1="@firebase/app-check",y1="0.8.0",v1="app-check",Uf="app-check-internal";function E1(){qt(new Nt(v1,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return m1(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Uf).initialize()})),qt(new Nt(Uf,t=>{const e=t.getProvider("app-check").getImmediate();return g1(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),ct(_1,y1)}E1();const vy=Symbol("firebaseApp");function w1(t){return Kl()&&st(vy,null)||Hm(t)}const $f="@firebase/database",Bf="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ey="";function T1(t){Ey=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ws(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return un(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new I1(e)}}catch{}return new b1},zn=wy("localStorage"),bl=wy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new di("@firebase/database"),A1=function(){let t=1;return function(){return t++}}(),Ty=function(t){const e=jT(t),n=new FT;n.update(e);const r=n.digest();return ta.encodeByteArray(r)},Ci=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ci.apply(null,r):typeof r=="object"?e+=Ve(r):e+=r,e+=" "}return e};let Qn=null,Hf=!0;const R1=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Pr.logLevel=G.VERBOSE,Qn=Pr.log.bind(Pr),e&&bl.set("logging_enabled",!0)):typeof t=="function"?Qn=t:(Qn=null,bl.remove("logging_enabled"))},ze=function(...t){if(Hf===!0&&(Hf=!1,Qn===null&&bl.get("logging_enabled")===!0&&R1(!0)),Qn){const e=Ci.apply(null,t);Qn(e)}},Si=function(t){return function(...e){ze(t,...e)}},Al=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ci(...t);Pr.error(e)},tr=function(...t){const e=`FIREBASE FATAL ERROR: ${Ci(...t)}`;throw Pr.error(e),new Error(e)},lt=function(...t){const e="FIREBASE WARNING: "+Ci(...t);Pr.warn(e)},C1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Iy=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},S1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Hr="[MIN_NAME]",nr="[MAX_NAME]",ss=function(t,e){if(t===e)return 0;if(t===Hr||e===nr)return-1;if(e===Hr||t===nr)return 1;{const n=jf(t),r=jf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},P1=function(t,e){return t===e?0:t<e?-1:1},hs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ve(e))},Zu=function(t){if(typeof t!="object"||t===null)return Ve(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ve(e[r]),n+=":",n+=Zu(t[e[r]]);return n+="}",n},by=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function wt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ay=function(t){b(!Iy(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,c;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(i%2?1:0),i=Math.floor(i/2);l.push(s?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},k1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},N1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},O1=new RegExp("^-?(0*)\\d{1,10}$"),x1=-2147483648,D1=2147483647,jf=function(t){if(O1.test(t)){const e=Number(t);if(e>=x1&&e<=D1)return e}return null},Pi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw lt("Exception was thrown by user callback.",n),e},Math.floor(0))}},L1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ds=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){lt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',lt(e)}}class Rl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Rl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="5",Ry="v",Cy="s",Sy="r",Py="f",ky=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ny="ls",Oy="p",Cl="ac",xy="websocket",Dy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,n,r,s,i=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function U1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ly(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let r;if(e===xy)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Dy)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);U1(t)&&(n.ns=t.namespace);const s=[];return wt(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(){this.counters_={}}incrementCounter(e,n=1){un(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return wT(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc={},fc={};function th(t){const e=t.toString();return dc[e]||(dc[e]=new $1),dc[e]}function B1(t,e){const n=t.toString();return fc[n]||(fc[n]=e()),fc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Pi(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf="start",j1="close",z1="pLPCommand",W1="pRTLPCB",My="id",Vy="pw",Fy="ser",q1="cb",G1="seg",K1="ts",Q1="d",Y1="dframe",Uy=1870,$y=30,X1=Uy-$y,J1=25e3,Z1=3e4;class vr{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Si(e),this.stats_=th(n),this.urlFn=c=>(this.appCheckToken&&(c[Cl]=this.appCheckToken),Ly(n,Dy,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new H1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Z1)),S1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nh((...i)=>{const[o,a,c,l,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===zf)this.id=a,this.password=c;else if(o===j1)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[zf]="t",r[Fy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[q1]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Ry]=eh,this.transportSessionId&&(r[Cy]=this.transportSessionId),this.lastSessionId&&(r[Ny]=this.lastSessionId),this.applicationId&&(r[Oy]=this.applicationId),this.appCheckToken&&(r[Cl]=this.appCheckToken),typeof location<"u"&&location.hostname&&ky.test(location.hostname)&&(r[Sy]=Py);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vr.forceAllow_=!0}static forceDisallow(){vr.forceDisallow_=!0}static isAvailable(){return vr.forceAllow_?!0:!vr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!k1()&&!N1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Om(n),s=by(r,X1);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Y1]="t",r[My]=e,r[Vy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class nh{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=A1(),window[z1+this.uniqueCallbackIdentifier]=e,window[W1+this.uniqueCallbackIdentifier]=n,this.myIFrame=nh.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ze("frame writing exception"),a.stack&&ze(a.stack),ze(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ze("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[My]=this.myID,e[Vy]=this.myPW,e[Fy]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$y+r.length<=Uy;){const o=this.pendingSegs.shift();r=r+"&"+G1+s+"="+o.seg+"&"+K1+s+"="+o.ts+"&"+Q1+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(J1)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=16384,tN=45e3;let Vo=null;typeof MozWebSocket<"u"?Vo=MozWebSocket:typeof WebSocket<"u"&&(Vo=WebSocket);class Rt{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Si(this.connId),this.stats_=th(n),this.connURL=Rt.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[Ry]=eh,typeof location<"u"&&location.hostname&&ky.test(location.hostname)&&(o[Sy]=Py),n&&(o[Cy]=n),r&&(o[Ny]=r),s&&(o[Cl]=s),i&&(o[Oy]=i),Ly(e,xy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zn.set("previous_websocket_failure",!0);try{let r;Mm(),this.mySock=new Vo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Vo!==null&&!Rt.forceDisallow_}static previouslyFailed(){return zn.isInMemoryStorage||zn.get("previous_websocket_failure")===!0}markConnectionHealthy(){zn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ws(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=by(n,eN);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(tN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Rt.responsesRequiredToBeHealthy=2;Rt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[vr,Rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Rt&&Rt.isAvailable();let r=n&&!Rt.previouslyFailed();if(e.webSocketOnly&&(n||lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Rt];else{const s=this.transports_=[];for(const i of ai.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);ai.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ai.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=6e4,rN=5e3,sN=10*1024,iN=100*1024,pc="t",Wf="d",oN="s",qf="r",aN="e",Gf="o",Kf="a",Qf="n",Yf="p",cN="h";class lN{constructor(e,n,r,s,i,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Si("c:"+this.id+":"),this.transportManager_=new ai(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ds(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>iN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>sN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pc in e){const n=e[pc];n===Kf?this.upgradeIfSecondaryHealthy_():n===qf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Gf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=hs("t",e),r=hs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Kf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Qf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=hs("t",e),r=hs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=hs(pc,e);if(Wf in e){const r=e[Wf];if(n===cN){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Qf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===oN?this.onConnectionShutdown_(r):n===qf?this.onReset_(r):n===aN?Al("Server Error: "+r):n===Gf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Al("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),eh!==r&&lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ds(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(nN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ds(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(rN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends Hy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ru()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Fo}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=32,Jf=768;class ge{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function le(){return new ge("")}function X(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Sn(t){return t.pieces_.length-t.pieceNum_}function pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ge(t.pieces_,e)}function jy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function uN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function zy(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Wy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ge(e,0)}function Ne(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ge)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new ge(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function yt(t,e){const n=X(t),r=X(e);if(n===null)return e;if(n===r)return yt(pe(t),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function qy(t,e){if(Sn(t)!==Sn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ct(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Sn(t)>Sn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class hN{constructor(e,n){this.errorPrefix_=n,this.parts_=zy(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=na(this.parts_[r]);Gy(this)}}function dN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=na(e),Gy(t)}function fN(t){const e=t.parts_.pop();t.byteLength_-=na(e),t.parts_.length>0&&(t.byteLength_-=1)}function Gy(t){if(t.byteLength_>Jf)throw new Error(t.errorPrefix_+"has a key path longer than "+Jf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Xf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xf+") or object contains a cycle "+Mn(t))}function Mn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh extends Hy{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new rh}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=1e3,pN=60*5*1e3,Zf=30*1e3,mN=1.3,gN=3e4,_N="server_kill",ep=3;class rn extends By{constructor(e,n,r,s,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=rn.nextPersistentConnectionId_++,this.log_=Si("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ds,this.maxReconnectDelay_=pN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Mm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Ve(i)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new zs,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,l=a.s;rn.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&un(e,"w")){const r=Or(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||VT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=MT(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ve(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Al("Unrecognized action received from server: "+Ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ds,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ds,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gN&&(this.reconnectDelay_=ds),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+rn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},l=function(h){b(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ze("getToken() completed but was canceled"):(ze("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new lN(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{lt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(_N)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&lt(h),c())}}}interrupt(e){ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ed(this.interruptReasons_)&&(this.reconnectDelay_=ds,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Zu(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new ge(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){ze("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ep&&(this.reconnectDelay_=Zf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ze("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ep&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ey.replace(/\./g,"-")]=1,ru()?e["framework.cordova"]=1:Lm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fo.getInstance().currentlyOnline();return ed(this.interruptReasons_)&&e}}rn.nextPersistentConnectionId_=0;rn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new J(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new J(Hr,e),s=new J(Hr,n);return this.compare(r,s)!==0}minPost(){return J.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi;class Ky extends Na{static get __EMPTY_NODE(){return Qi}static set __EMPTY_NODE(e){Qi=e}compare(e,n){return ss(e.name,n.name)}isDefinedOn(e){throw Kr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return J.MIN}maxPost(){return new J(nr,Qi)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new J(e,Qi)}toString(){return".key"}}const kr=new Ky;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ke{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ke.RED,this.left=s??rt.EMPTY_NODE,this.right=i??rt.EMPTY_NODE}copy(e,n,r,s,i){return new ke(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return rt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ke.RED=!0;ke.BLACK=!1;class yN{copy(e,n,r,s,i){return this}insert(e,n,r){return new ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class rt{constructor(e,n=rt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new rt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ke.BLACK,null,null))}remove(e){return new rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ke.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Yi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Yi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Yi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Yi(this.root_,null,this.comparator_,!0,e)}}rt.EMPTY_NODE=new yN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(t,e){return ss(t.name,e.name)}function sh(t,e){return ss(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl;function EN(t){Sl=t}const Qy=function(t){return typeof t=="number"?"number:"+Ay(t):"string:"+t},Yy=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&un(e,".sv"),"Priority must be a string or number.")}else b(t===Sl||t.isEmpty(),"priority of unexpected type.");b(t===Sl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tp;class Se{constructor(e,n=Se.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Yy(this.priorityNode_)}static set __childrenNodeConstructor(e){tp=e}static get __childrenNodeConstructor(){return tp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Se(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Se.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:X(e)===".priority"?this.priorityNode_:Se.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Se.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=X(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(b(r!==".priority"||Sn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Se.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ay(this.value_):e+=this.value_,this.lazyHash_=Ty(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Se.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Se.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Se.VALUE_TYPE_ORDER.indexOf(n),i=Se.VALUE_TYPE_ORDER.indexOf(r);return b(s>=0,"Unknown leaf type: "+n),b(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Se.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xy,Jy;function wN(t){Xy=t}function TN(t){Jy=t}class IN extends Na{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?ss(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return J.MIN}maxPost(){return new J(nr,new Se("[PRIORITY-POST]",Jy))}makePost(e,n){const r=Xy(e);return new J(n,new Se("[PRIORITY-POST]",r))}toString(){return".priority"}}const qe=new IN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=Math.log(2);class AN{constructor(e){const n=i=>parseInt(Math.log(i)/bN,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Uo=function(t,e,n,r){t.sort(e);const s=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new ke(d,h.node,ke.BLACK,null,null);{const f=parseInt(u/2,10)+c,p=s(c,f),g=s(f+1,l);return h=t[f],d=n?n(h):h,new ke(d,h.node,ke.BLACK,p,g)}},i=function(c){let l=null,u=null,h=t.length;const d=function(p,g){const m=h-p,_=h;h-=p;const v=s(m+1,_),T=t[m],w=n?n(T):T;f(new ke(w,T.node,g,null,v))},f=function(p){l?(l.left=p,l=p):(u=p,l=p)};for(let p=0;p<c.count;++p){const g=c.nextBitIsOne(),m=Math.pow(2,c.count-(p+1));g?d(m,ke.BLACK):(d(m,ke.BLACK),d(m,ke.RED))}return u},o=new AN(t.length),a=i(o);return new rt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mc;const fr={};class nn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(fr&&qe,"ChildrenNode.ts has not been loaded"),mc=mc||new nn({".priority":fr},{".priority":qe}),mc}get(e){const n=Or(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof rt?n:null}hasIndex(e){return un(this.indexSet_,e.toString())}addIndex(e,n){b(e!==kr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(J.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Uo(r,e.getCompare()):a=fr;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new nn(u,l)}addToIndexes(e,n){const r=vo(this.indexes_,(s,i)=>{const o=Or(this.indexSet_,i);if(b(o,"Missing index implementation for "+i),s===fr)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(J.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Uo(a,o.getCompare())}else return fr;else{const a=n.get(e.name);let c=s;return a&&(c=c.remove(new J(e.name,a))),c.insert(e,e.node)}});return new nn(r,this.indexSet_)}removeFromIndexes(e,n){const r=vo(this.indexes_,s=>{if(s===fr)return s;{const i=n.get(e.name);return i?s.remove(new J(e.name,i)):s}});return new nn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs;class se{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Yy(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fs||(fs=new se(new rt(sh),null,nn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fs}updatePriority(e){return this.children_.isEmpty()?this:new se(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fs:n}}getChild(e){const n=X(e);return n===null?this:this.getImmediateChild(n).getChild(pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new J(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?fs:this.priorityNode_;return new se(s,o,i)}}updateChild(e,n){const r=X(e);if(r===null)return n;{b(X(e)!==".priority"||Sn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(pe(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(qe,(o,a)=>{n[o]=a.val(e),r++,i&&se.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qy(this.getPriority().val())+":"),this.forEachChild(qe,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Ty(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new J(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new J(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new J(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,J.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,J.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ki?-1:0}withIndex(e){if(e===kr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new se(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===kr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(qe),s=n.getIterator(qe);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===kr?null:this.indexMap_.get(e.toString())}}se.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class RN extends se{constructor(){super(new rt(sh),se.EMPTY_NODE,nn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return se.EMPTY_NODE}isEmpty(){return!1}}const ki=new RN;Object.defineProperties(J,{MIN:{value:new J(Hr,se.EMPTY_NODE)},MAX:{value:new J(nr,ki)}});Ky.__EMPTY_NODE=se.EMPTY_NODE;Se.__childrenNodeConstructor=se;EN(ki);TN(ki);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=!0;function We(t,e=null){if(t===null)return se.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Se(n,We(e))}if(!(t instanceof Array)&&CN){const n=[];let r=!1;if(wt(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=We(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new J(o,c)))}}),n.length===0)return se.EMPTY_NODE;const i=Uo(n,vN,o=>o.name,sh);if(r){const o=Uo(n,qe.getCompare());return new se(i,We(e),new nn({".priority":o},{".priority":qe}))}else return new se(i,We(e),nn.Default)}else{let n=se.EMPTY_NODE;return wt(t,(r,s)=>{if(un(t,r)&&r.substring(0,1)!=="."){const i=We(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(We(e))}}wN(We);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN extends Na{constructor(e){super(),this.indexPath_=e,b(!K(e)&&X(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?ss(e.name,n.name):i}makePost(e,n){const r=We(e),s=se.EMPTY_NODE.updateChild(this.indexPath_,r);return new J(n,s)}maxPost(){const e=se.EMPTY_NODE.updateChild(this.indexPath_,ki);return new J(nr,e)}toString(){return zy(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN extends Na{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ss(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return J.MIN}maxPost(){return J.MAX}makePost(e,n){const r=We(e);return new J(n,r)}toString(){return".value"}}const kN=new PN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(t){return{type:"value",snapshotNode:t}}function ON(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function xN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function np(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function DN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=qe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Hr}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:nr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===qe}copy(){const e=new ih;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===qe?n="$priority":t.index_===kN?n="$value":t.index_===kr?n="$key":(b(t.index_ instanceof SN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ve(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ve(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ve(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ve(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function sp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==qe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends By{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Si("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=$o.getListenId_(e,r),a={};this.listens_[o]=a;const c=rp(e._queryParams);this.restRequest_(i+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(i,h,!1,r),Or(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",s(d,null)}})}unlisten(e,n){const r=$o.getListenId_(e,n);delete this.listens_[r]}get(e){const n=rp(e._queryParams),r=e._path.toString(),s=new zs;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+su(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Ws(a.responseText)}catch{lt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&lt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(){this.rootNode_=se.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(){return{value:null,children:new Map}}function Zy(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=X(e);t.children.has(r)||t.children.set(r,Bo());const s=t.children.get(r);e=pe(e),Zy(s,e,n)}}function Pl(t,e,n){t.value!==null?n(e,t.value):MN(t,(r,s)=>{const i=new ge(e.toString()+"/"+r);Pl(s,i,n)})}function MN(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&wt(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=10*1e3,FN=30*1e3,UN=5*60*1e3;class $N{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new VN(e);const r=ip+(FN-ip)*Math.random();Ds(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;wt(e,(s,i)=>{i>0&&un(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Ds(this.reportStats_.bind(this),Math.floor(Math.random()*2*UN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ht;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ht||(Ht={}));function ev(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function nv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Ht.ACK_USER_WRITE,this.source=ev()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ge(e));return new Ho(le(),n,this.revert)}}else return b(X(this.path)===e,"operationForChild called for unrelated child."),new Ho(pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Ht.OVERWRITE}operationForChild(e){return K(this.path)?new rr(this.source,le(),this.snap.getImmediateChild(e)):new rr(this.source,pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Ht.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new ge(e));return n.isEmpty()?null:n.value?new rr(this.source,le(),n.value):new ci(this.source,le(),n)}else return b(X(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ci(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=X(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function BN(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(DN(o.childName,o.snapshotNode))}),ps(t,s,"child_removed",e,r,n),ps(t,s,"child_added",e,r,n),ps(t,s,"child_moved",i,r,n),ps(t,s,"child_changed",e,r,n),ps(t,s,"value",e,r,n),s}function ps(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,c)=>jN(t,a,c)),o.forEach(a=>{const c=HN(t,a,i);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function HN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function jN(t,e,n){if(e.childName==null||n.childName==null)throw Kr("Should only compare child_ events.");const r=new J(e.childName,e.snapshotNode),s=new J(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t,e){return{eventCache:t,serverCache:e}}function Ls(t,e,n,r){return rv(new oh(e,n,r),t.serverCache)}function sv(t,e,n,r){return rv(t.eventCache,new oh(e,n,r))}function kl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function sr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gc;const zN=()=>(gc||(gc=new rt(P1)),gc);class fe{constructor(e,n=zN()){this.value=e,this.children=n}static fromObject(e){let n=new fe(null);return wt(e,(r,s)=>{n=n.set(new ge(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:le(),value:this.value};if(K(e))return null;{const r=X(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(pe(e),n);return i!=null?{path:Ne(new ge(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=X(e),r=this.children.get(n);return r!==null?r.subtree(pe(e)):new fe(null)}}set(e,n){if(K(e))return new fe(n,this.children);{const r=X(e),i=(this.children.get(r)||new fe(null)).set(pe(e),n),o=this.children.insert(r,i);return new fe(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new fe(null):new fe(null,this.children);{const n=X(e),r=this.children.get(n);if(r){const s=r.remove(pe(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new fe(null):new fe(this.value,i)}else return this}}get(e){if(K(e))return this.value;{const n=X(e),r=this.children.get(n);return r?r.get(pe(e)):null}}setTree(e,n){if(K(e))return n;{const r=X(e),i=(this.children.get(r)||new fe(null)).setTree(pe(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new fe(this.value,o)}}fold(e){return this.fold_(le(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Ne(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,le(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(K(e))return null;{const i=X(e),o=this.children.get(i);return o?o.findOnPath_(pe(e),Ne(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,le(),n)}foreachOnPath_(e,n,r){if(K(e))return this;{this.value&&r(n,this.value);const s=X(e),i=this.children.get(s);return i?i.foreachOnPath_(pe(e),Ne(n,s),r):new fe(null)}}foreach(e){this.foreach_(le(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Ne(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.writeTree_=e}static empty(){return new Pt(new fe(null))}}function Ms(t,e,n){if(K(e))return new Pt(new fe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=yt(s,e);return i=i.updateChild(o,n),new Pt(t.writeTree_.set(s,i))}else{const s=new fe(n),i=t.writeTree_.setTree(e,s);return new Pt(i)}}}function op(t,e,n){let r=t;return wt(n,(s,i)=>{r=Ms(r,Ne(e,s),i)}),r}function ap(t,e){if(K(e))return Pt.empty();{const n=t.writeTree_.setTree(e,new fe(null));return new Pt(n)}}function Nl(t,e){return cr(t,e)!=null}function cr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(yt(n.path,e)):null}function cp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(qe,(r,s)=>{e.push(new J(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new J(r,s.value))}),e}function In(t,e){if(K(e))return t;{const n=cr(t,e);return n!=null?new Pt(new fe(n)):new Pt(t.writeTree_.subtree(e))}}function Ol(t){return t.writeTree_.isEmpty()}function jr(t,e){return iv(le(),t.writeTree_,e)}function iv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(b(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=iv(Ne(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ne(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(t,e){return hv(e,t)}function WN(t,e,n,r,s){b(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Ms(t.visibleWrites,e,n)),t.lastWriteId=r}function qN(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function GN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&KN(a,r.path)?s=!1:Ct(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return QN(t),!0;if(r.snap)t.visibleWrites=ap(t.visibleWrites,r.path);else{const a=r.children;wt(a,c=>{t.visibleWrites=ap(t.visibleWrites,Ne(r.path,c))})}return!0}else return!1}function KN(t,e){if(t.snap)return Ct(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ct(Ne(t.path,n),e))return!0;return!1}function QN(t){t.visibleWrites=av(t.allWrites,YN,le()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function YN(t){return t.visible}function av(t,e,n){let r=Pt.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)Ct(n,o)?(a=yt(n,o),r=Ms(r,a,i.snap)):Ct(o,n)&&(a=yt(o,n),r=Ms(r,le(),i.snap.getChild(a)));else if(i.children){if(Ct(n,o))a=yt(n,o),r=op(r,a,i.children);else if(Ct(o,n))if(a=yt(o,n),K(a))r=op(r,le(),i.children);else{const c=Or(i.children,X(a));if(c){const l=c.getChild(pe(a));r=Ms(r,le(),l)}}}else throw Kr("WriteRecord should have .snap or .children")}}return r}function cv(t,e,n,r,s){if(!r&&!s){const i=cr(t.visibleWrites,e);if(i!=null)return i;{const o=In(t.visibleWrites,e);if(Ol(o))return n;if(n==null&&!Nl(o,le()))return null;{const a=n||se.EMPTY_NODE;return jr(o,a)}}}else{const i=In(t.visibleWrites,e);if(!s&&Ol(i))return n;if(!s&&n==null&&!Nl(i,le()))return null;{const o=function(l){return(l.visible||s)&&(!r||!~r.indexOf(l.writeId))&&(Ct(l.path,e)||Ct(e,l.path))},a=av(t.allWrites,o,e),c=n||se.EMPTY_NODE;return jr(a,c)}}}function XN(t,e,n){let r=se.EMPTY_NODE;const s=cr(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(qe,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=In(t.visibleWrites,e);return n.forEachChild(qe,(o,a)=>{const c=jr(In(i,new ge(o)),a);r=r.updateImmediateChild(o,c)}),cp(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=In(t.visibleWrites,e);return cp(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function JN(t,e,n,r,s){b(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Ne(e,n);if(Nl(t.visibleWrites,i))return null;{const o=In(t.visibleWrites,i);return Ol(o)?s.getChild(n):jr(o,s.getChild(n))}}function ZN(t,e,n,r){const s=Ne(e,n),i=cr(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=In(t.visibleWrites,s);return jr(o,r.getNode().getImmediateChild(n))}else return null}function eO(t,e){return cr(t.visibleWrites,e)}function tO(t,e,n,r,s,i,o){let a;const c=In(t.visibleWrites,e),l=cr(c,le());if(l!=null)a=l;else if(n!=null)a=jr(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=d.getNext();for(;f&&u.length<s;)h(f,r)!==0&&u.push(f),f=d.getNext();return u}else return[]}function nO(){return{visibleWrites:Pt.empty(),allWrites:[],lastWriteId:-1}}function xl(t,e,n,r){return cv(t.writeTree,t.treePath,e,n,r)}function lv(t,e){return XN(t.writeTree,t.treePath,e)}function lp(t,e,n,r){return JN(t.writeTree,t.treePath,e,n,r)}function jo(t,e){return eO(t.writeTree,Ne(t.treePath,e))}function rO(t,e,n,r,s,i){return tO(t.writeTree,t.treePath,e,n,r,s,i)}function ah(t,e,n){return ZN(t.writeTree,t.treePath,e,n)}function uv(t,e){return hv(Ne(t.treePath,e),t.writeTree)}function hv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,np(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,xN(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,ON(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,np(r,e.snapshotNode,s.oldSnap));else throw Kr("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const dv=new iO;class ch{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new oh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ah(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:sr(this.viewCache_),i=rO(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function oO(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function aO(t,e,n,r,s){const i=new sO;let o,a;if(n.type===Ht.OVERWRITE){const l=n;l.source.fromUser?o=Dl(t,e,l.path,l.snap,r,s,i):(b(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!K(l.path),o=zo(t,e,l.path,l.snap,r,s,a,i))}else if(n.type===Ht.MERGE){const l=n;l.source.fromUser?o=lO(t,e,l.path,l.children,r,s,i):(b(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Ll(t,e,l.path,l.children,r,s,a,i))}else if(n.type===Ht.ACK_USER_WRITE){const l=n;l.revert?o=dO(t,e,l.path,r,s,i):o=uO(t,e,l.path,l.affectedTree,r,s,i)}else if(n.type===Ht.LISTEN_COMPLETE)o=hO(t,e,n.path,r,i);else throw Kr("Unknown operation type: "+n.type);const c=i.getChanges();return cO(e,o,c),{viewCache:o,changes:c}}function cO(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=kl(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(NN(kl(e)))}}function fv(t,e,n,r,s,i){const o=e.eventCache;if(jo(r,n)!=null)return e;{let a,c;if(K(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=sr(e),u=l instanceof se?l:se.EMPTY_NODE,h=lv(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const l=xl(r,sr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,i)}else{const l=X(n);if(l===".priority"){b(Sn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=lp(r,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=pe(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=lp(r,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=ah(r,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,s,i):a=o.getNode()}}return Ls(e,a,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function zo(t,e,n,r,s,i,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(K(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),f,null)}else{const f=X(n);if(!c.isCompleteForPath(n)&&Sn(n)>1)return e;const p=pe(n),m=c.getNode().getImmediateChild(f).updateChild(p,r);f===".priority"?l=u.updatePriority(c.getNode(),m):l=u.updateChild(c.getNode(),f,m,p,dv,null)}const h=sv(e,l,c.isFullyInitialized()||K(n),u.filtersNodes()),d=new ch(s,h,i);return fv(t,h,n,s,d,a)}function Dl(t,e,n,r,s,i,o){const a=e.eventCache;let c,l;const u=new ch(s,e,i);if(K(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=Ls(e,l,!0,t.filter.filtersNodes());else{const h=X(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),r),c=Ls(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=pe(n),f=a.getNode().getImmediateChild(h);let p;if(K(d))p=r;else{const g=u.getCompleteChild(h);g!=null?jy(d)===".priority"&&g.getChild(Wy(d)).isEmpty()?p=g:p=g.updateChild(d,r):p=se.EMPTY_NODE}if(f.equals(p))c=e;else{const g=t.filter.updateChild(a.getNode(),h,p,d,u,o);c=Ls(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function up(t,e){return t.eventCache.isCompleteForChild(e)}function lO(t,e,n,r,s,i,o){let a=e;return r.foreach((c,l)=>{const u=Ne(n,c);up(e,X(u))&&(a=Dl(t,a,u,l,s,i,o))}),r.foreach((c,l)=>{const u=Ne(n,c);up(e,X(u))||(a=Dl(t,a,u,l,s,i,o))}),a}function hp(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Ll(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;K(n)?l=r:l=new fe(null).setTree(n,r);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=hp(t,f,d);c=zo(t,c,new ge(h),p,s,i,o,a)}}),l.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),g=hp(t,p,d);c=zo(t,c,new ge(h),g,s,i,o,a)}}),c}function uO(t,e,n,r,s,i,o){if(jo(s,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(K(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return zo(t,e,n,c.getNode().getChild(n),s,i,a,o);if(K(n)){let l=new fe(null);return c.getNode().forEachChild(kr,(u,h)=>{l=l.set(new ge(u),h)}),Ll(t,e,n,l,s,i,a,o)}else return e}else{let l=new fe(null);return r.foreach((u,h)=>{const d=Ne(n,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),Ll(t,e,n,l,s,i,a,o)}}function hO(t,e,n,r,s){const i=e.serverCache,o=sv(e,i.getNode(),i.isFullyInitialized()||K(n),i.isFiltered());return fv(t,o,n,r,dv,s)}function dO(t,e,n,r,s,i){let o;if(jo(r,n)!=null)return e;{const a=new ch(r,e,s),c=e.eventCache.getNode();let l;if(K(n)||X(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=xl(r,sr(e));else{const h=e.serverCache.getNode();b(h instanceof se,"serverChildren would be complete if leaf node"),u=lv(r,h)}u=u,l=t.filter.updateFullNode(c,u,i)}else{const u=X(n);let h=ah(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,pe(n),a,i):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,se.EMPTY_NODE,pe(n),a,i):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=xl(r,sr(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,i)))}return o=e.serverCache.isFullyInitialized()||jo(r,le())!=null,Ls(e,l,o,t.filter.filtersNodes())}}function fO(t,e){const n=sr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(X(e)).isEmpty())?n.getChild(e):null}function dp(t,e,n,r){e.type===Ht.MERGE&&e.source.queryId!==null&&(b(sr(t.viewCache_),"We should always have a full cache before handling merges"),b(kl(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=aO(t.processor_,s,e,n,r);return oO(t.processor_,i.viewCache),b(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,pO(t,i.changes,i.viewCache.eventCache.getNode(),null)}function pO(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return BN(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fp;function mO(t){b(!fp,"__referenceConstructor has already been defined"),fp=t}function lh(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return b(i!=null,"SyncTree gave us an op for an invalid query."),dp(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(dp(o,e,n,r));return i}}function uh(t,e){let n=null;for(const r of t.views.values())n=n||fO(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pp;function gO(t){b(!pp,"__referenceConstructor has already been defined"),pp=t}class mp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fe(null),this.pendingWriteTree_=nO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _O(t,e,n,r,s){return WN(t.pendingWriteTree_,e,n,r,s),s?xa(t,new rr(ev(),e,n)):[]}function Er(t,e,n=!1){const r=qN(t.pendingWriteTree_,e);if(GN(t.pendingWriteTree_,e)){let i=new fe(null);return r.snap!=null?i=i.set(le(),!0):wt(r.children,o=>{i=i.set(new ge(o),!0)}),xa(t,new Ho(r.path,i,n))}else return[]}function Oa(t,e,n){return xa(t,new rr(tv(),e,n))}function yO(t,e,n){const r=fe.fromObject(n);return xa(t,new ci(tv(),e,r))}function vO(t,e,n,r){const s=_v(t,r);if(s!=null){const i=yv(s),o=i.path,a=i.queryId,c=yt(o,e),l=new rr(nv(a),c,n);return vv(t,o,l)}else return[]}function EO(t,e,n,r){const s=_v(t,r);if(s){const i=yv(s),o=i.path,a=i.queryId,c=yt(o,e),l=fe.fromObject(n),u=new ci(nv(a),c,l);return vv(t,o,u)}else return[]}function pv(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=yt(o,e),l=uh(a,c);if(l)return l});return cv(s,e,i,n,!0)}function xa(t,e){return mv(e,t.syncPointTree_,null,ov(t.pendingWriteTree_,le()))}function mv(t,e,n,r){if(K(t.path))return gv(t,e,n,r);{const s=e.get(le());n==null&&s!=null&&(n=uh(s,le()));let i=[];const o=X(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=uv(r,o);i=i.concat(mv(a,c,l,u))}return s&&(i=i.concat(lh(s,t,r,n))),i}}function gv(t,e,n,r){const s=e.get(le());n==null&&s!=null&&(n=uh(s,le()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=uv(r,o),u=t.operationForChild(o);u&&(i=i.concat(gv(u,a,c,l)))}),s&&(i=i.concat(lh(s,t,r,n))),i}function _v(t,e){return t.tagToQueryMap.get(e)}function yv(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ge(t.substr(0,e))}}function vv(t,e,n){const r=t.syncPointTree_.get(e);b(r,"Missing sync point for query tag that we're tracking");const s=ov(t.pendingWriteTree_,e);return lh(r,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new hh(n)}node(){return this.node_}}class dh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ne(this.path_,e);return new dh(this.syncTree_,n)}node(){return pv(this.syncTree_,this.path_)}}const wO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},gp=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return TO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return IO(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},TO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},IO=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&b(!1,"Unexpected increment value: "+r);const s=e.node();if(b(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},bO=function(t,e,n,r){return fh(e,new dh(n,t),r)},AO=function(t,e,n){return fh(t,new hh(e),n)};function fh(t,e,n){const r=t.getPriority().val(),s=gp(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=gp(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Se(a,We(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Se(s))),o.forEachChild(qe,(a,c)=>{const l=fh(c,e.getImmediateChild(a),n);l!==c&&(i=i.updateImmediateChild(a,l))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function mh(t,e){let n=e instanceof ge?e:new ge(e),r=t,s=X(n);for(;s!==null;){const i=Or(r.node.children,s)||{children:{},childCount:0};r=new ph(s,r,i),n=pe(n),s=X(n)}return r}function is(t){return t.node.value}function Ev(t,e){t.node.value=e,Ml(t)}function wv(t){return t.node.childCount>0}function RO(t){return is(t)===void 0&&!wv(t)}function Da(t,e){wt(t.node.children,(n,r)=>{e(new ph(n,t,r))})}function Tv(t,e,n,r){n&&!r&&e(t),Da(t,s=>{Tv(s,e,!0,r)}),n&&r&&e(t)}function CO(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ni(t){return new ge(t.parent===null?t.name:Ni(t.parent)+"/"+t.name)}function Ml(t){t.parent!==null&&SO(t.parent,t.name,t)}function SO(t,e,n){const r=RO(n),s=un(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Ml(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Ml(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO=/[\[\].#$\/\u0000-\u001F\u007F]/,kO=/[\[\].#$\u0000-\u001F\u007F]/,_c=10*1024*1024,Iv=function(t){return typeof t=="string"&&t.length!==0&&!PO.test(t)},NO=function(t){return typeof t=="string"&&t.length!==0&&!kO.test(t)},OO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),NO(t)},bv=function(t,e,n){const r=n instanceof ge?new hN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Mn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Mn(r)+" with contents = "+e.toString());if(Iy(e))throw new Error(t+"contains "+e.toString()+" "+Mn(r));if(typeof e=="string"&&e.length>_c/3&&na(e)>_c)throw new Error(t+"contains a string greater than "+_c+" utf8 bytes "+Mn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(wt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Iv(o)))throw new Error(t+" contains an invalid key ("+o+") "+Mn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);dN(r,o),bv(t,a,r),fN(r)}),s&&i)throw new Error(t+' contains ".value" child '+Mn(r)+" in addition to actual children.")}},xO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Iv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!OO(n))throw new Error(HT(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function LO(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!qy(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function lr(t,e,n){LO(t,n),MO(t,r=>Ct(r,e)||Ct(e,r))}function MO(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(VO(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function VO(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Qn&&ze("event: "+n.toString()),Pi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO="repo_interrupt",UO=25;class $O{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new DO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bo(),this.transactionQueueTree_=new ph,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function BO(t,e,n){if(t.stats_=th(t.repoInfo_),t.forceRestClient_||L1())t.server_=new $o(t.repoInfo_,(r,s,i,o)=>{_p(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>yp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ve(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new rn(t.repoInfo_,e,(r,s,i,o)=>{_p(t,r,s,i,o)},r=>{yp(t,r)},r=>{jO(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=B1(t.repoInfo_,()=>new $N(t.stats_,t.server_)),t.infoData_=new LN,t.infoSyncTree_=new mp({startListening:(r,s,i,o)=>{let a=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(a=Oa(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),gh(t,"connected",!1),t.serverSyncTree_=new mp({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,c)=>{const l=o(a,c);lr(t.eventQueue_,r._path,l)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function HO(t){const n=t.infoData_.getNode(new ge(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Av(t){return wO({timestamp:HO(t)})}function _p(t,e,n,r,s){t.dataUpdateCount++;const i=new ge(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const c=vo(n,l=>We(l));o=EO(t.serverSyncTree_,i,c,s)}else{const c=We(n);o=vO(t.serverSyncTree_,i,c,s)}else if(r){const c=vo(n,l=>We(l));o=yO(t.serverSyncTree_,i,c)}else{const c=We(n);o=Oa(t.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=yh(t,i)),lr(t.eventQueue_,a,o)}function yp(t,e){gh(t,"connected",e),e===!1&&WO(t)}function jO(t,e){wt(e,(n,r)=>{gh(t,n,r)})}function gh(t,e,n){const r=new ge("/.info/"+e),s=We(n);t.infoData_.updateSnapshot(r,s);const i=Oa(t.infoSyncTree_,r,s);lr(t.eventQueue_,r,i)}function zO(t){return t.nextWriteId_++}function WO(t){Rv(t,"onDisconnectEvents");const e=Av(t),n=Bo();Pl(t.onDisconnect_,le(),(s,i)=>{const o=bO(s,i,t.serverSyncTree_,e);Zy(n,s,o)});let r=[];Pl(n,le(),(s,i)=>{r=r.concat(Oa(t.serverSyncTree_,s,i));const o=QO(t,s);yh(t,o)}),t.onDisconnect_=Bo(),lr(t.eventQueue_,le(),r)}function qO(t){t.persistentConnection_&&t.persistentConnection_.interrupt(FO)}function Rv(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ze(n,...e)}function Cv(t,e,n){return pv(t.serverSyncTree_,e,n)||se.EMPTY_NODE}function _h(t,e=t.transactionQueueTree_){if(e||La(t,e),is(e)){const n=Pv(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&GO(t,Ni(e),n)}else wv(e)&&Da(e,n=>{_h(t,n)})}function GO(t,e,n){const r=n.map(l=>l.currentWriteId),s=Cv(t,e,r);let i=s;const o=s.hash();for(let l=0;l<n.length;l++){const u=n[l];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=yt(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;t.server_.put(c.toString(),a,l=>{Rv(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Er(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();La(t,mh(t.transactionQueueTree_,e)),_h(t,t.transactionQueueTree_),lr(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Pi(h[d])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{lt("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}yh(t,e)}},o)}function yh(t,e){const n=Sv(t,e),r=Ni(n),s=Pv(t,n);return KO(t,s,r),r}function KO(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=yt(n,c.path);let u=!1,h;if(b(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,s=s.concat(Er(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=UO)u=!0,h="maxretry",s=s.concat(Er(t.serverSyncTree_,c.currentWriteId,!0));else{const d=Cv(t,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){bv("transaction failed: Data returned ",f,c.path);let p=We(f);typeof f=="object"&&f!=null&&un(f,".priority")||(p=p.updatePriority(d.getPriority()));const m=c.currentWriteId,_=Av(t),v=AO(p,d,_);c.currentOutputSnapshotRaw=p,c.currentOutputSnapshotResolved=v,c.currentWriteId=zO(t),o.splice(o.indexOf(m),1),s=s.concat(_O(t.serverSyncTree_,c.path,v,c.currentWriteId,c.applyLocally)),s=s.concat(Er(t.serverSyncTree_,m,!0))}else u=!0,h="nodata",s=s.concat(Er(t.serverSyncTree_,c.currentWriteId,!0))}lr(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}La(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Pi(r[a]);_h(t,t.transactionQueueTree_)}function Sv(t,e){let n,r=t.transactionQueueTree_;for(n=X(e);n!==null&&is(r)===void 0;)r=mh(r,n),e=pe(e),n=X(e);return r}function Pv(t,e){const n=[];return kv(t,e,n),n.sort((r,s)=>r.order-s.order),n}function kv(t,e,n){const r=is(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Da(e,s=>{kv(t,s,n)})}function La(t,e){const n=is(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,Ev(e,n.length>0?n:void 0)}Da(e,r=>{La(t,r)})}function QO(t,e){const n=Ni(Sv(t,e)),r=mh(t.transactionQueueTree_,e);return CO(r,s=>{yc(t,s)}),yc(t,r),Tv(r,s=>{yc(t,s)}),n}function yc(t,e){const n=is(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Er(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Ev(e,void 0):n.length=i+1,lr(t.eventQueue_,Ni(e),s);for(let o=0;o<r.length;o++)Pi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function XO(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):lt(`Invalid query segment '${n}' in query '${t}'`)}return e}const vp=function(t,e){const n=JO(t),r=n.namespace;n.domain==="firebase.com"&&tr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&tr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||C1();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new F1(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new ge(n.pathString)}},JO=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=YO(t.substring(u,h)));const d=XO(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),i=r}"ns"in d&&(i=d.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return K(this._path)?null:jy(this._path)}get ref(){return new os(this._repo,this._path)}get _queryIdentifier(){const e=sp(this._queryParams),n=Zu(e);return n==="{}"?"default":n}get _queryObject(){return sp(this._queryParams)}isEqual(e){if(e=Yr(e),!(e instanceof vh))return!1;const n=this._repo===e._repo,r=qy(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+uN(this._path)}}class os extends vh{constructor(e,n){super(e,n,new ih,!1)}get parent(){const e=Wy(this._path);return e===null?null:new os(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}mO(os);gO(os);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO="FIREBASE_DATABASE_EMULATOR_HOST",Vl={};let ex=!1;function tx(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||tr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ze("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=vp(i,s),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[ZO]),l?(c=!0,i=`http://${l}?ns=${a.namespace}`,o=vp(i,s),a=o.repoInfo):c=!o.repoInfo.secure;const u=s&&c?new Rl(Rl.OWNER):new V1(t.name,t.options,e);xO("Invalid Firebase Database URL",o),K(o.path)||tr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=rx(a,t,u,new M1(t.name,n));return new sx(h,t)}function nx(t,e){const n=Vl[e];(!n||n[t.key]!==t)&&tr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),qO(t),delete n[t.key]}function rx(t,e,n,r){let s=Vl[e.name];s||(s={},Vl[e.name]=s);let i=s[t.toURLString()];return i&&tr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new $O(t,ex,n,r),s[t.toURLString()]=i,i}class sx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(BO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new os(this._repo,le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(nx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&tr("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(t){T1(Xr),qt(new Nt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return tx(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),ct($f,Bf,t),ct($f,Bf,"esm2017")}rn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};rn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ix();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="firebasestorage.googleapis.com",ox="storageBucket",ax=2*60*1e3,cx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends ln{constructor(e,n,r=0){super(vc(e),`Firebase Storage: ${n} (${vc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Xt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return vc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Qt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Qt||(Qt={}));function vc(t){return"storage/"+t}function lx(){const t="An unknown error occurred, please check the error payload for server response.";return new Xt(Qt.UNKNOWN,t)}function ux(){return new Xt(Qt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function hx(){return new Xt(Qt.CANCELED,"User canceled the upload/download.")}function dx(t){return new Xt(Qt.INVALID_URL,"Invalid URL '"+t+"'.")}function fx(t){return new Xt(Qt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ep(t){return new Xt(Qt.INVALID_ARGUMENT,t)}function Ov(){return new Xt(Qt.APP_DELETED,"The Firebase app was deleted.")}function px(t){return new Xt(Qt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=St.makeFromUrl(e,n)}catch{return new St(e,"")}if(r.path==="")return r;throw fx(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(w){w.path_=decodeURIComponent(w.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),p={bucket:1,path:3},g=n===Nv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",_=new RegExp(`^https?://${g}/${s}/${m}`,"i"),T=[{regex:a,indices:c,postModify:i},{regex:f,indices:p,postModify:l},{regex:_,indices:{bucket:1,path:2},postModify:l}];for(let w=0;w<T.length;w++){const R=T[w],P=R.regex.exec(e);if(P){const x=P[R.indices.bucket];let D=P[R.indices.path];D||(D=""),r=new St(x,D),R.postModify(r);break}}if(r==null)throw dx(e);return r}}class mx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...m){l||(l=!0,e.apply(null,m))}function h(m){s=setTimeout(()=>{s=null,t(f,c())},m)}function d(){i&&clearTimeout(i)}function f(m,..._){if(l){d();return}if(m){d(),u.call(null,m,..._);return}if(c()||o){d(),u.call(null,m,..._);return}r<64&&(r*=2);let T;a===1?(a=2,T=0):T=(r+Math.random())*1e3,h(T)}let p=!1;function g(m){p||(p=!0,d(),!l&&(s!==null?(m||(a=2),clearTimeout(s),h(0)):m||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,g(!0)},n),g}function _x(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(t){return t!==void 0}function wp(t,e,n,r){if(r<e)throw Ep(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ep(`Invalid value for '${t}'. Expected ${n} or less.`)}function vx(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wo;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Wo||(Wo={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e,n,r,s,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Xi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Wo.NO_ERROR,c=i.getStatus();if(!a||Ex(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Wo.ABORT;r(!1,new Xi(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new Xi(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());yx(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=lx();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Ov():hx();o(c)}else{const c=ux();o(c)}};this.canceled_?n(!1,new Xi(!1,null,!0)):this.backoffId_=gx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&_x(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Xi{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Tx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ix(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function bx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ax(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Rx(t,e,n,r,s,i,o=!0){const a=vx(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return bx(l,e),Tx(l,n),Ix(l,i),Ax(l,r),new wx(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Sx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n){this._service=e,n instanceof St?this._location=n:this._location=St.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new qo(e,n)}get root(){const e=new St(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Sx(this._location.path)}get storage(){return this._service}get parent(){const e=Cx(this._location.path);if(e===null)return null;const n=new St(this._location.bucket,e);return new qo(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw px(e)}}function Tp(t,e){const n=e==null?void 0:e[ox];return n==null?null:St.makeFromBucketSpec(n,t)}class Px{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Nv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ax,this._maxUploadRetryTime=cx,this._requests=new Set,s!=null?this._bucket=St.makeFromBucketSpec(s,this._host):this._bucket=Tp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=St.makeFromBucketSpec(this._url,e):this._bucket=Tp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){wp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){wp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new qo(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new mx(Ov());{const o=Rx(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Ip="@firebase/storage",bp="0.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx="storage";function Nx(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Px(n,r,s,e,Xr)}function Ox(){qt(new Nt(kx,Nx,"PUBLIC").setMultipleInstances(!0)),ct(Ip,bp,""),ct(Ip,bp,"esm2017")}Ox();const Ec=new WeakMap;function xx(t,e){return Ec.has(e)||Ec.set(e,t||{f:{},r:{},s:{},u:{}}),Ec.get(e)}function nV(t){return OC(w1(t))}function Dx(t,{firebaseApp:e,modules:n=[]}){t.provide(vy,e);for(const r of n)r(e,t)}function ft(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ir(t){var e=ft(t).Element;return t instanceof e||t instanceof Element}function Et(t){var e=ft(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Eh(t){if(typeof ShadowRoot>"u")return!1;var e=ft(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var Yn=Math.max,Go=Math.min,zr=Math.round;function Fl(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function xv(){return!/^((?!chrome|android).)*safari/i.test(Fl())}function Wr(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=t.getBoundingClientRect(),s=1,i=1;e&&Et(t)&&(s=t.offsetWidth>0&&zr(r.width)/t.offsetWidth||1,i=t.offsetHeight>0&&zr(r.height)/t.offsetHeight||1);var o=ir(t)?ft(t):window,a=o.visualViewport,c=!xv()&&n,l=(r.left+(c&&a?a.offsetLeft:0))/s,u=(r.top+(c&&a?a.offsetTop:0))/i,h=r.width/s,d=r.height/i;return{width:h,height:d,top:u,right:l+h,bottom:u+d,left:l,x:l,y:u}}function wh(t){var e=ft(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Lx(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Mx(t){return t===ft(t)||!Et(t)?wh(t):Lx(t)}function Yt(t){return t?(t.nodeName||"").toLowerCase():null}function On(t){return((ir(t)?t.ownerDocument:t.document)||window.document).documentElement}function Th(t){return Wr(On(t)).left+wh(t).scrollLeft}function an(t){return ft(t).getComputedStyle(t)}function Ih(t){var e=an(t),n=e.overflow,r=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+s+r)}function Vx(t){var e=t.getBoundingClientRect(),n=zr(e.width)/t.offsetWidth||1,r=zr(e.height)/t.offsetHeight||1;return n!==1||r!==1}function Fx(t,e,n){n===void 0&&(n=!1);var r=Et(e),s=Et(e)&&Vx(e),i=On(e),o=Wr(t,s,n),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((Yt(e)!=="body"||Ih(i))&&(a=Mx(e)),Et(e)?(c=Wr(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):i&&(c.x=Th(i))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function bh(t){var e=Wr(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function Ma(t){return Yt(t)==="html"?t:t.assignedSlot||t.parentNode||(Eh(t)?t.host:null)||On(t)}function Dv(t){return["html","body","#document"].indexOf(Yt(t))>=0?t.ownerDocument.body:Et(t)&&Ih(t)?t:Dv(Ma(t))}function Vs(t,e){var n;e===void 0&&(e=[]);var r=Dv(t),s=r===((n=t.ownerDocument)==null?void 0:n.body),i=ft(r),o=s?[i].concat(i.visualViewport||[],Ih(r)?r:[]):r,a=e.concat(o);return s?a:a.concat(Vs(Ma(o)))}function Ux(t){return["table","td","th"].indexOf(Yt(t))>=0}function Ap(t){return!Et(t)||an(t).position==="fixed"?null:t.offsetParent}function $x(t){var e=/firefox/i.test(Fl()),n=/Trident/i.test(Fl());if(n&&Et(t)){var r=an(t);if(r.position==="fixed")return null}var s=Ma(t);for(Eh(s)&&(s=s.host);Et(s)&&["html","body"].indexOf(Yt(s))<0;){var i=an(s);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return s;s=s.parentNode}return null}function Oi(t){for(var e=ft(t),n=Ap(t);n&&Ux(n)&&an(n).position==="static";)n=Ap(n);return n&&(Yt(n)==="html"||Yt(n)==="body"&&an(n).position==="static")?e:n||$x(t)||e}var ut="top",Lt="bottom",Mt="right",ht="left",Ah="auto",xi=[ut,Lt,Mt,ht],qr="start",li="end",Bx="clippingParents",Lv="viewport",ms="popper",Hx="reference",Rp=xi.reduce(function(t,e){return t.concat([e+"-"+qr,e+"-"+li])},[]),Mv=[].concat(xi,[Ah]).reduce(function(t,e){return t.concat([e,e+"-"+qr,e+"-"+li])},[]),jx="beforeRead",zx="read",Wx="afterRead",qx="beforeMain",Gx="main",Kx="afterMain",Qx="beforeWrite",Yx="write",Xx="afterWrite",Jx=[jx,zx,Wx,qx,Gx,Kx,Qx,Yx,Xx];function Zx(t){var e=new Map,n=new Set,r=[];t.forEach(function(i){e.set(i.name,i)});function s(i){n.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var c=e.get(a);c&&s(c)}}),r.push(i)}return t.forEach(function(i){n.has(i.name)||s(i)}),r}function eD(t){var e=Zx(t);return Jx.reduce(function(n,r){return n.concat(e.filter(function(s){return s.phase===r}))},[])}function tD(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function nD(t){var e=t.reduce(function(n,r){var s=n[r.name];return n[r.name]=s?Object.assign({},s,r,{options:Object.assign({},s.options,r.options),data:Object.assign({},s.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}function rD(t,e){var n=ft(t),r=On(t),s=n.visualViewport,i=r.clientWidth,o=r.clientHeight,a=0,c=0;if(s){i=s.width,o=s.height;var l=xv();(l||!l&&e==="fixed")&&(a=s.offsetLeft,c=s.offsetTop)}return{width:i,height:o,x:a+Th(t),y:c}}function sD(t){var e,n=On(t),r=wh(t),s=(e=t.ownerDocument)==null?void 0:e.body,i=Yn(n.scrollWidth,n.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=Yn(n.scrollHeight,n.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-r.scrollLeft+Th(t),c=-r.scrollTop;return an(s||n).direction==="rtl"&&(a+=Yn(n.clientWidth,s?s.clientWidth:0)-i),{width:i,height:o,x:a,y:c}}function Vv(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Eh(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Ul(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function iD(t,e){var n=Wr(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function Cp(t,e,n){return e===Lv?Ul(rD(t,n)):ir(e)?iD(e,n):Ul(sD(On(t)))}function oD(t){var e=Vs(Ma(t)),n=["absolute","fixed"].indexOf(an(t).position)>=0,r=n&&Et(t)?Oi(t):t;return ir(r)?e.filter(function(s){return ir(s)&&Vv(s,r)&&Yt(s)!=="body"}):[]}function aD(t,e,n,r){var s=e==="clippingParents"?oD(t):[].concat(e),i=[].concat(s,[n]),o=i[0],a=i.reduce(function(c,l){var u=Cp(t,l,r);return c.top=Yn(u.top,c.top),c.right=Go(u.right,c.right),c.bottom=Go(u.bottom,c.bottom),c.left=Yn(u.left,c.left),c},Cp(t,o,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function zt(t){return t.split("-")[0]}function Gr(t){return t.split("-")[1]}function Rh(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Fv(t){var e=t.reference,n=t.element,r=t.placement,s=r?zt(r):null,i=r?Gr(r):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,c;switch(s){case ut:c={x:o,y:e.y-n.height};break;case Lt:c={x:o,y:e.y+e.height};break;case Mt:c={x:e.x+e.width,y:a};break;case ht:c={x:e.x-n.width,y:a};break;default:c={x:e.x,y:e.y}}var l=s?Rh(s):null;if(l!=null){var u=l==="y"?"height":"width";switch(i){case qr:c[l]=c[l]-(e[u]/2-n[u]/2);break;case li:c[l]=c[l]+(e[u]/2-n[u]/2);break}}return c}function Uv(){return{top:0,right:0,bottom:0,left:0}}function $v(t){return Object.assign({},Uv(),t)}function Bv(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}function Ch(t,e){e===void 0&&(e={});var n=e,r=n.placement,s=r===void 0?t.placement:r,i=n.strategy,o=i===void 0?t.strategy:i,a=n.boundary,c=a===void 0?Bx:a,l=n.rootBoundary,u=l===void 0?Lv:l,h=n.elementContext,d=h===void 0?ms:h,f=n.altBoundary,p=f===void 0?!1:f,g=n.padding,m=g===void 0?0:g,_=$v(typeof m!="number"?m:Bv(m,xi)),v=d===ms?Hx:ms,T=t.rects.popper,w=t.elements[p?v:d],R=aD(ir(w)?w:w.contextElement||On(t.elements.popper),c,u,o),P=Wr(t.elements.reference),x=Fv({reference:P,element:T,strategy:"absolute",placement:s}),D=Ul(Object.assign({},T,x)),O=d===ms?D:P,B={top:R.top-O.top+_.top,bottom:O.bottom-R.bottom+_.bottom,left:R.left-O.left+_.left,right:O.right-R.right+_.right},te=t.modifiersData.offset;if(d===ms&&te){var F=te[s];Object.keys(B).forEach(function(ue){var $e=[Mt,Lt].indexOf(ue)>=0?1:-1,Te=[ut,Lt].indexOf(ue)>=0?"y":"x";B[ue]+=F[Te]*$e})}return B}var Sp={placement:"bottom",modifiers:[],strategy:"absolute"};function Pp(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function cD(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,s=e.defaultOptions,i=s===void 0?Sp:s;return function(a,c,l){l===void 0&&(l=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Sp,i),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},h=[],d=!1,f={state:u,setOptions:function(_){var v=typeof _=="function"?_(u.options):_;g(),u.options=Object.assign({},i,u.options,v),u.scrollParents={reference:ir(a)?Vs(a):a.contextElement?Vs(a.contextElement):[],popper:Vs(c)};var T=eD(nD([].concat(r,u.options.modifiers)));return u.orderedModifiers=T.filter(function(w){return w.enabled}),p(),f.update()},forceUpdate:function(){if(!d){var _=u.elements,v=_.reference,T=_.popper;if(Pp(v,T)){u.rects={reference:Fx(v,Oi(T),u.options.strategy==="fixed"),popper:bh(T)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(B){return u.modifiersData[B.name]=Object.assign({},B.data)});for(var w=0;w<u.orderedModifiers.length;w++){if(u.reset===!0){u.reset=!1,w=-1;continue}var R=u.orderedModifiers[w],P=R.fn,x=R.options,D=x===void 0?{}:x,O=R.name;typeof P=="function"&&(u=P({state:u,options:D,name:O,instance:f})||u)}}}},update:tD(function(){return new Promise(function(m){f.forceUpdate(),m(u)})}),destroy:function(){g(),d=!0}};if(!Pp(a,c))return f;f.setOptions(l).then(function(m){!d&&l.onFirstUpdate&&l.onFirstUpdate(m)});function p(){u.orderedModifiers.forEach(function(m){var _=m.name,v=m.options,T=v===void 0?{}:v,w=m.effect;if(typeof w=="function"){var R=w({state:u,name:_,instance:f,options:T}),P=function(){};h.push(R||P)}})}function g(){h.forEach(function(m){return m()}),h=[]}return f}}var Ji={passive:!0};function lD(t){var e=t.state,n=t.instance,r=t.options,s=r.scroll,i=s===void 0?!0:s,o=r.resize,a=o===void 0?!0:o,c=ft(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&l.forEach(function(u){u.addEventListener("scroll",n.update,Ji)}),a&&c.addEventListener("resize",n.update,Ji),function(){i&&l.forEach(function(u){u.removeEventListener("scroll",n.update,Ji)}),a&&c.removeEventListener("resize",n.update,Ji)}}const Hv={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:lD,data:{}};function uD(t){var e=t.state,n=t.name;e.modifiersData[n]=Fv({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const hD={name:"popperOffsets",enabled:!0,phase:"read",fn:uD,data:{}};var dD={top:"auto",right:"auto",bottom:"auto",left:"auto"};function fD(t,e){var n=t.x,r=t.y,s=e.devicePixelRatio||1;return{x:zr(n*s)/s||0,y:zr(r*s)/s||0}}function kp(t){var e,n=t.popper,r=t.popperRect,s=t.placement,i=t.variation,o=t.offsets,a=t.position,c=t.gpuAcceleration,l=t.adaptive,u=t.roundOffsets,h=t.isFixed,d=o.x,f=d===void 0?0:d,p=o.y,g=p===void 0?0:p,m=typeof u=="function"?u({x:f,y:g}):{x:f,y:g};f=m.x,g=m.y;var _=o.hasOwnProperty("x"),v=o.hasOwnProperty("y"),T=ht,w=ut,R=window;if(l){var P=Oi(n),x="clientHeight",D="clientWidth";if(P===ft(n)&&(P=On(n),an(P).position!=="static"&&a==="absolute"&&(x="scrollHeight",D="scrollWidth")),P=P,s===ut||(s===ht||s===Mt)&&i===li){w=Lt;var O=h&&P===R&&R.visualViewport?R.visualViewport.height:P[x];g-=O-r.height,g*=c?1:-1}if(s===ht||(s===ut||s===Lt)&&i===li){T=Mt;var B=h&&P===R&&R.visualViewport?R.visualViewport.width:P[D];f-=B-r.width,f*=c?1:-1}}var te=Object.assign({position:a},l&&dD),F=u===!0?fD({x:f,y:g},ft(n)):{x:f,y:g};if(f=F.x,g=F.y,c){var ue;return Object.assign({},te,(ue={},ue[w]=v?"0":"",ue[T]=_?"0":"",ue.transform=(R.devicePixelRatio||1)<=1?"translate("+f+"px, "+g+"px)":"translate3d("+f+"px, "+g+"px, 0)",ue))}return Object.assign({},te,(e={},e[w]=v?g+"px":"",e[T]=_?f+"px":"",e.transform="",e))}function pD(t){var e=t.state,n=t.options,r=n.gpuAcceleration,s=r===void 0?!0:r,i=n.adaptive,o=i===void 0?!0:i,a=n.roundOffsets,c=a===void 0?!0:a,l={placement:zt(e.placement),variation:Gr(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,kp(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,kp(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const jv={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:pD,data:{}};function mD(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var r=e.styles[n]||{},s=e.attributes[n]||{},i=e.elements[n];!Et(i)||!Yt(i)||(Object.assign(i.style,r),Object.keys(s).forEach(function(o){var a=s[o];a===!1?i.removeAttribute(o):i.setAttribute(o,a===!0?"":a)}))})}function gD(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(r){var s=e.elements[r],i=e.attributes[r]||{},o=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:n[r]),a=o.reduce(function(c,l){return c[l]="",c},{});!Et(s)||!Yt(s)||(Object.assign(s.style,a),Object.keys(i).forEach(function(c){s.removeAttribute(c)}))})}}const _D={name:"applyStyles",enabled:!0,phase:"write",fn:mD,effect:gD,requires:["computeStyles"]};var yD=[Hv,hD,jv,_D],vD={left:"right",right:"left",bottom:"top",top:"bottom"};function uo(t){return t.replace(/left|right|bottom|top/g,function(e){return vD[e]})}var ED={start:"end",end:"start"};function Np(t){return t.replace(/start|end/g,function(e){return ED[e]})}function wD(t,e){e===void 0&&(e={});var n=e,r=n.placement,s=n.boundary,i=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?Mv:c,u=Gr(r),h=u?a?Rp:Rp.filter(function(p){return Gr(p)===u}):xi,d=h.filter(function(p){return l.indexOf(p)>=0});d.length===0&&(d=h);var f=d.reduce(function(p,g){return p[g]=Ch(t,{placement:g,boundary:s,rootBoundary:i,padding:o})[zt(g)],p},{});return Object.keys(f).sort(function(p,g){return f[p]-f[g]})}function TD(t){if(zt(t)===Ah)return[];var e=uo(t);return[Np(t),e,Np(e)]}function ID(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var s=n.mainAxis,i=s===void 0?!0:s,o=n.altAxis,a=o===void 0?!0:o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,h=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,p=f===void 0?!0:f,g=n.allowedAutoPlacements,m=e.options.placement,_=zt(m),v=_===m,T=c||(v||!p?[uo(m)]:TD(m)),w=[m].concat(T).reduce(function(It,bt){return It.concat(zt(bt)===Ah?wD(e,{placement:bt,boundary:u,rootBoundary:h,padding:l,flipVariations:p,allowedAutoPlacements:g}):bt)},[]),R=e.rects.reference,P=e.rects.popper,x=new Map,D=!0,O=w[0],B=0;B<w.length;B++){var te=w[B],F=zt(te),ue=Gr(te)===qr,$e=[ut,Lt].indexOf(F)>=0,Te=$e?"width":"height",Q=Ch(e,{placement:te,boundary:u,rootBoundary:h,altBoundary:d,padding:l}),Re=$e?ue?Mt:ht:ue?Lt:ut;R[Te]>P[Te]&&(Re=uo(Re));var pt=uo(Re),Ye=[];if(i&&Ye.push(Q[F]<=0),a&&Ye.push(Q[Re]<=0,Q[pt]<=0),Ye.every(function(It){return It})){O=te,D=!1;break}x.set(te,Ye)}if(D)for(var Tt=p?3:1,mt=function(bt){var gt=w.find(function(y){var S=x.get(y);if(S)return S.slice(0,bt).every(function(C){return C})});if(gt)return O=gt,"break"},tt=Tt;tt>0;tt--){var _e=mt(tt);if(_e==="break")break}e.placement!==O&&(e.modifiersData[r]._skip=!0,e.placement=O,e.reset=!0)}}const bD={name:"flip",enabled:!0,phase:"main",fn:ID,requiresIfExists:["offset"],data:{_skip:!1}};function AD(t,e,n){var r=zt(t),s=[ht,ut].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=i[0],a=i[1];return o=o||0,a=(a||0)*s,[ht,Mt].indexOf(r)>=0?{x:a,y:o}:{x:o,y:a}}function RD(t){var e=t.state,n=t.options,r=t.name,s=n.offset,i=s===void 0?[0,0]:s,o=Mv.reduce(function(u,h){return u[h]=AD(h,e.rects,i),u},{}),a=o[e.placement],c=a.x,l=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[r]=o}const CD={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:RD};function SD(t){return t==="x"?"y":"x"}function Fs(t,e,n){return Yn(t,Go(e,n))}function PD(t,e,n){var r=Fs(t,e,n);return r>n?n:r}function kD(t){var e=t.state,n=t.options,r=t.name,s=n.mainAxis,i=s===void 0?!0:s,o=n.altAxis,a=o===void 0?!1:o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,h=n.padding,d=n.tether,f=d===void 0?!0:d,p=n.tetherOffset,g=p===void 0?0:p,m=Ch(e,{boundary:c,rootBoundary:l,padding:h,altBoundary:u}),_=zt(e.placement),v=Gr(e.placement),T=!v,w=Rh(_),R=SD(w),P=e.modifiersData.popperOffsets,x=e.rects.reference,D=e.rects.popper,O=typeof g=="function"?g(Object.assign({},e.rects,{placement:e.placement})):g,B=typeof O=="number"?{mainAxis:O,altAxis:O}:Object.assign({mainAxis:0,altAxis:0},O),te=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,F={x:0,y:0};if(P){if(i){var ue,$e=w==="y"?ut:ht,Te=w==="y"?Lt:Mt,Q=w==="y"?"height":"width",Re=P[w],pt=Re+m[$e],Ye=Re-m[Te],Tt=f?-D[Q]/2:0,mt=v===qr?x[Q]:D[Q],tt=v===qr?-D[Q]:-x[Q],_e=e.elements.arrow,It=f&&_e?bh(_e):{width:0,height:0},bt=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Uv(),gt=bt[$e],y=bt[Te],S=Fs(0,x[Q],It[Q]),C=T?x[Q]/2-Tt-S-gt-B.mainAxis:mt-S-gt-B.mainAxis,L=T?-x[Q]/2+Tt+S+y+B.mainAxis:tt+S+y+B.mainAxis,ne=e.elements.arrow&&Oi(e.elements.arrow),ye=ne?w==="y"?ne.clientTop||0:ne.clientLeft||0:0,W=(ue=te==null?void 0:te[w])!=null?ue:0,j=Re+C-W-ye,we=Re+L-W,hn=Fs(f?Go(pt,j):pt,Re,f?Yn(Ye,we):Ye);P[w]=hn,F[w]=hn-Re}if(a){var Le,Jv=w==="x"?ut:ht,Zv=w==="x"?Lt:Mt,xn=P[R],Di=R==="y"?"height":"width",Ph=xn+m[Jv],kh=xn-m[Zv],Va=[ut,ht].indexOf(_)!==-1,Nh=(Le=te==null?void 0:te[R])!=null?Le:0,Oh=Va?Ph:xn-x[Di]-D[Di]-Nh+B.altAxis,xh=Va?xn+x[Di]+D[Di]-Nh-B.altAxis:kh,Dh=f&&Va?PD(Oh,xn,xh):Fs(f?Oh:Ph,xn,f?xh:kh);P[R]=Dh,F[R]=Dh-xn}e.modifiersData[r]=F}}const ND={name:"preventOverflow",enabled:!0,phase:"main",fn:kD,requiresIfExists:["offset"]};var OD=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,$v(typeof e!="number"?e:Bv(e,xi))};function xD(t){var e,n=t.state,r=t.name,s=t.options,i=n.elements.arrow,o=n.modifiersData.popperOffsets,a=zt(n.placement),c=Rh(a),l=[ht,Mt].indexOf(a)>=0,u=l?"height":"width";if(!(!i||!o)){var h=OD(s.padding,n),d=bh(i),f=c==="y"?ut:ht,p=c==="y"?Lt:Mt,g=n.rects.reference[u]+n.rects.reference[c]-o[c]-n.rects.popper[u],m=o[c]-n.rects.reference[c],_=Oi(i),v=_?c==="y"?_.clientHeight||0:_.clientWidth||0:0,T=g/2-m/2,w=h[f],R=v-d[u]-h[p],P=v/2-d[u]/2+T,x=Fs(w,P,R),D=c;n.modifiersData[r]=(e={},e[D]=x,e.centerOffset=x-P,e)}}function DD(t){var e=t.state,n=t.options,r=n.element,s=r===void 0?"[data-popper-arrow]":r;s!=null&&(typeof s=="string"&&(s=e.elements.popper.querySelector(s),!s)||Vv(e.elements.popper,s)&&(e.elements.arrow=s))}const LD={name:"arrow",enabled:!0,phase:"main",fn:xD,effect:DD,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};cD({defaultModifiers:[...yD,CD,bD,ND,jv,Hv,LD]});function $l(t,e,n=".",r){if(!wc(e))return $l(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:wc(o)&&wc(s[i])?s[i]=$l(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function wc(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function zv(t){return(...e)=>e.reduce((n,r)=>$l(n,r,"",t),{})}const MD=zv();function VD(){for(var t=0,e,n,r="";t<arguments.length;)(e=arguments[t++])&&(n=Wv(e))&&(r&&(r+=" "),r+=n);return r}function Wv(t){if(typeof t=="string")return t;for(var e,n="",r=0;r<t.length;r++)t[r]&&(e=Wv(t[r]))&&(n&&(n+=" "),n+=e);return n}var Sh="-";function FD(t){var e=$D(t),n=t.conflictingClassGroups,r=t.conflictingClassGroupModifiers,s=r===void 0?{}:r;function i(a){var c=a.split(Sh);return c[0]===""&&c.length!==1&&c.shift(),qv(c,e)||UD(a)}function o(a,c){var l=n[a]||[];return c&&s[a]?[].concat(l,s[a]):l}return{getClassGroupId:i,getConflictingClassGroupIds:o}}function qv(t,e){var o;if(t.length===0)return e.classGroupId;var n=t[0],r=e.nextPart.get(n),s=r?qv(t.slice(1),r):void 0;if(s)return s;if(e.validators.length!==0){var i=t.join(Sh);return(o=e.validators.find(function(a){var c=a.validator;return c(i)}))==null?void 0:o.classGroupId}}var Op=/^\[(.+)\]$/;function UD(t){if(Op.test(t)){var e=Op.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}}function $D(t){var e=t.theme,n=t.prefix,r={nextPart:new Map,validators:[]},s=HD(Object.entries(t.classGroups),n);return s.forEach(function(i){var o=i[0],a=i[1];Bl(a,r,o,e)}),r}function Bl(t,e,n,r){t.forEach(function(s){if(typeof s=="string"){var i=s===""?e:xp(e,s);i.classGroupId=n;return}if(typeof s=="function"){if(BD(s)){Bl(s(r),e,n,r);return}e.validators.push({validator:s,classGroupId:n});return}Object.entries(s).forEach(function(o){var a=o[0],c=o[1];Bl(c,xp(e,a),n,r)})})}function xp(t,e){var n=t;return e.split(Sh).forEach(function(r){n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function BD(t){return t.isThemeGetter}function HD(t,e){return e?t.map(function(n){var r=n[0],s=n[1],i=s.map(function(o){return typeof o=="string"?e+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(function(a){var c=a[0],l=a[1];return[e+c,l]})):o});return[r,i]}):t}function jD(t){if(t<1)return{get:function(){},set:function(){}};var e=0,n=new Map,r=new Map;function s(i,o){n.set(i,o),e++,e>t&&(e=0,r=n,n=new Map)}return{get:function(o){var a=n.get(o);if(a!==void 0)return a;if((a=r.get(o))!==void 0)return s(o,a),a},set:function(o,a){n.has(o)?n.set(o,a):s(o,a)}}}var Gv="!";function zD(t){var e=t.separator||":",n=e.length===1,r=e[0],s=e.length;return function(o){for(var a=[],c=0,l=0,u,h=0;h<o.length;h++){var d=o[h];if(c===0){if(d===r&&(n||o.slice(h,h+s)===e)){a.push(o.slice(l,h)),l=h+s;continue}if(d==="/"){u=h;continue}}d==="["?c++:d==="]"&&c--}var f=a.length===0?o:o.substring(l),p=f.startsWith(Gv),g=p?f.substring(1):f,m=u&&u>l?u-l:void 0;return{modifiers:a,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:m}}}function WD(t){if(t.length<=1)return t;var e=[],n=[];return t.forEach(function(r){var s=r[0]==="[";s?(e.push.apply(e,n.sort().concat([r])),n=[]):n.push(r)}),e.push.apply(e,n.sort()),e}function qD(t){return{cache:jD(t.cacheSize),splitModifiers:zD(t),...FD(t)}}var GD=/\s+/;function KD(t,e){var n=e.splitModifiers,r=e.getClassGroupId,s=e.getConflictingClassGroupIds,i=new Set;return t.trim().split(GD).map(function(o){var a=n(o),c=a.modifiers,l=a.hasImportantModifier,u=a.baseClassName,h=a.maybePostfixModifierPosition,d=r(h?u.substring(0,h):u),f=!!h;if(!d){if(!h)return{isTailwindClass:!1,originalClassName:o};if(d=r(u),!d)return{isTailwindClass:!1,originalClassName:o};f=!1}var p=WD(c).join(":"),g=l?p+Gv:p;return{isTailwindClass:!0,modifierId:g,classGroupId:d,originalClassName:o,hasPostfixModifier:f}}).reverse().filter(function(o){if(!o.isTailwindClass)return!0;var a=o.modifierId,c=o.classGroupId,l=o.hasPostfixModifier,u=a+c;return i.has(u)?!1:(i.add(u),s(c,l).forEach(function(h){return i.add(a+h)}),!0)}).reverse().map(function(o){return o.originalClassName}).join(" ")}function Dp(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r,s,i,o=a;function a(l){var u=e[0],h=e.slice(1),d=h.reduce(function(f,p){return p(f)},u());return r=qD(d),s=r.cache.get,i=r.cache.set,o=c,c(l)}function c(l){var u=s(l);if(u)return u;var h=KD(l,r);return i(l,h),h}return function(){return o(VD.apply(null,arguments))}}function de(t){var e=function(r){return r[t]||[]};return e.isThemeGetter=!0,e}var Kv=/^\[(?:([a-z-]+):)?(.+)\]$/i,QD=/^\d+\/\d+$/,YD=new Set(["px","full","screen"]),XD=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,JD=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ZD=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function At(t){return Wn(t)||YD.has(t)||QD.test(t)||Hl(t)}function Hl(t){return ur(t,"length",iL)}function eL(t){return ur(t,"size",Qv)}function tL(t){return ur(t,"position",Qv)}function nL(t){return ur(t,"url",oL)}function Zi(t){return ur(t,"number",Wn)}function Wn(t){return!Number.isNaN(Number(t))}function rL(t){return t.endsWith("%")&&Wn(t.slice(0,-1))}function gs(t){return Lp(t)||ur(t,"number",Lp)}function q(t){return Kv.test(t)}function _s(){return!0}function pn(t){return XD.test(t)}function sL(t){return ur(t,"",aL)}function ur(t,e,n){var r=Kv.exec(t);return r?r[1]?r[1]===e:n(r[2]):!1}function iL(t){return JD.test(t)}function Qv(){return!1}function oL(t){return t.startsWith("url(")}function Lp(t){return Number.isInteger(Number(t))}function aL(t){return ZD.test(t)}function Mp(){var t=de("colors"),e=de("spacing"),n=de("blur"),r=de("brightness"),s=de("borderColor"),i=de("borderRadius"),o=de("borderSpacing"),a=de("borderWidth"),c=de("contrast"),l=de("grayscale"),u=de("hueRotate"),h=de("invert"),d=de("gap"),f=de("gradientColorStops"),p=de("gradientColorStopPositions"),g=de("inset"),m=de("margin"),_=de("opacity"),v=de("padding"),T=de("saturate"),w=de("scale"),R=de("sepia"),P=de("skew"),x=de("space"),D=de("translate"),O=function(){return["auto","contain","none"]},B=function(){return["auto","hidden","clip","visible","scroll"]},te=function(){return["auto",q,e]},F=function(){return[q,e]},ue=function(){return["",At]},$e=function(){return["auto",Wn,q]},Te=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},Q=function(){return["solid","dashed","dotted","double","none"]},Re=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},pt=function(){return["start","end","center","between","around","evenly","stretch"]},Ye=function(){return["","0",q]},Tt=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},mt=function(){return[Wn,Zi]},tt=function(){return[Wn,q]};return{cacheSize:500,theme:{colors:[_s],spacing:[At],blur:["none","",pn,q],brightness:mt(),borderColor:[t],borderRadius:["none","","full",pn,q],borderSpacing:F(),borderWidth:ue(),contrast:mt(),grayscale:Ye(),hueRotate:tt(),invert:Ye(),gap:F(),gradientColorStops:[t],gradientColorStopPositions:[rL,Hl],inset:te(),margin:te(),opacity:mt(),padding:F(),saturate:mt(),scale:mt(),sepia:Ye(),skew:tt(),space:F(),translate:F()},classGroups:{aspect:[{aspect:["auto","square","video",q]}],container:["container"],columns:[{columns:[pn]}],"break-after":[{"break-after":Tt()}],"break-before":[{"break-before":Tt()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(Te(),[q])}],overflow:[{overflow:B()}],"overflow-x":[{"overflow-x":B()}],"overflow-y":[{"overflow-y":B()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",gs]}],basis:[{basis:te()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",q]}],grow:[{grow:Ye()}],shrink:[{shrink:Ye()}],order:[{order:["first","last","none",gs]}],"grid-cols":[{"grid-cols":[_s]}],"col-start-end":[{col:["auto",{span:["full",gs]},q]}],"col-start":[{"col-start":$e()}],"col-end":[{"col-end":$e()}],"grid-rows":[{"grid-rows":[_s]}],"row-start-end":[{row:["auto",{span:[gs]},q]}],"row-start":[{"row-start":$e()}],"row-end":[{"row-end":$e()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",q]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",q]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal"].concat(pt())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(pt(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(pt(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[x]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[x]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",q,e]}],"min-w":[{"min-w":["min","max","fit",q,At]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[pn]},pn,q]}],h:[{h:[q,e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",q,At]}],"max-h":[{"max-h":[q,e,"min","max","fit"]}],"font-size":[{text:["base",pn,Hl]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Zi]}],"font-family":[{font:[_s]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",q]}],"line-clamp":[{"line-clamp":["none",Wn,Zi]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",q,At]}],"list-image":[{"list-image":["none",q]}],"list-style-type":[{list:["none","disc","decimal",q]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[_]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[_]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(Q(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",At]}],"underline-offset":[{"underline-offset":["auto",q,At]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",q]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",q]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[_]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(Te(),[tL])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",eL]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},nL]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[p]}],"gradient-via-pos":[{via:[p]}],"gradient-to-pos":[{to:[p]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[_]}],"border-style":[{border:[].concat(Q(),["hidden"])}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[_]}],"divide-style":[{divide:Q()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:[""].concat(Q())}],"outline-offset":[{"outline-offset":[q,At]}],"outline-w":[{outline:[At]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:ue()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[_]}],"ring-offset-w":[{"ring-offset":[At]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",pn,sL]}],"shadow-color":[{shadow:[_s]}],opacity:[{opacity:[_]}],"mix-blend":[{"mix-blend":Re()}],"bg-blend":[{"bg-blend":Re()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",pn,q]}],grayscale:[{grayscale:[l]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[h]}],saturate:[{saturate:[T]}],sepia:[{sepia:[R]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[l]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[_]}],"backdrop-saturate":[{"backdrop-saturate":[T]}],"backdrop-sepia":[{"backdrop-sepia":[R]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",q]}],duration:[{duration:tt()}],ease:[{ease:["linear","in","out","in-out",q]}],delay:[{delay:tt()}],animate:[{animate:["none","spin","ping","pulse","bounce",q]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[gs,q]}],"translate-x":[{"translate-x":[D]}],"translate-y":[{"translate-y":[D]}],"skew-x":[{"skew-x":[P]}],"skew-y":[{"skew-y":[P]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",q]}],accent:[{accent:["auto",t]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",q]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",q]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[At,Zi]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}function cL(t,e){for(var n in e)Yv(t,n,e[n]);return t}var lL=Object.prototype.hasOwnProperty,uL=new Set(["string","number","boolean"]);function Yv(t,e,n){if(!lL.call(t,e)||uL.has(typeof n)||n===null){t[e]=n;return}if(Array.isArray(n)&&Array.isArray(t[e])){t[e]=t[e].concat(n);return}if(typeof n=="object"&&typeof t[e]=="object"){if(t[e]===null){t[e]=n;return}for(var r in n)Yv(t[e],r,n[r])}}function hL(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return typeof t=="function"?Dp.apply(void 0,[Mp,t].concat(n)):Dp.apply(void 0,[function(){return cL(Mp(),t)}].concat(n))}const dL=hL({classGroups:{icons:[t=>/^i-/.test(t)]}}),fL=zv((t,e,n,r)=>{if(r!=="default"&&typeof t[e]=="string"&&typeof n=="string"&&t[e]&&n)return t[e]=dL(t[e],n),!0});function rV(t,...e){return t==="override"?MD({},...e):fL({},...e)}function Vp(t){const e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(r,s,i,o){return s+s+i+i+o+o});const n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?`${parseInt(n[1],16)} ${parseInt(n[2],16)} ${parseInt(n[3],16)}`:null}function sV(t){const e=parseFloat(t);return isNaN(e)?t:e}function Fp(t){return{getItem:e=>Rf(e,{...t,encode:encodeURIComponent,decode:decodeURIComponent}).value,setItem:(e,n)=>{Rf(e,{...t,encode:encodeURIComponent,decode:decodeURIComponent}).value=n}}}function pL(){return{getItem:t=>ie().ssrContext?null:localStorage.getItem(t),setItem:(t,e)=>{ie().ssrContext||localStorage.setItem(t,e)}}}function mL(){return{getItem:t=>ie().ssrContext?null:sessionStorage.getItem(t),setItem:(t,e)=>{ie().ssrContext||sessionStorage.setItem(t,e)}}}const jl={localStorage:pL(),sessionStorage:mL(),cookies:Fp(),cookiesWithOptions:Fp},iV=dP("counter",{state:()=>({count:0}),actions:{Increment(){this.count+=1},Decrement(){this.count-=1}},getters:{doubleCount:t=>t.count*2},persist:{key:"counter",storage:jl.localStorage}});function Up(t){return e=>e?t[e]||e:t.missingValue}function gL({formatter:t,keyMap:e,joinWith:n="/",valueMap:r}={}){t||(t=(i,o)=>`${i}=${o}`),e&&typeof e!="function"&&(e=Up(e));const s=r||{};return Object.keys(s).forEach(i=>{typeof s[i]!="function"&&(s[i]=Up(s[i]))}),(i={})=>Object.entries(i).filter(([a,c])=>typeof c<"u").map(([a,c])=>{const l=s[a];return typeof l=="function"&&(c=l(i[a])),a=typeof e=="function"?e(a):a,t(a,c)}).join(n)}function oV(t=""){if(typeof t=="number")return t;if(typeof t=="string"&&t.replace("px","").match(/^\d+$/g))return parseInt(t,10)}function aV(t=""){if(t===void 0||!t.length)return[];const e=new Set;for(const n of t.split(" ")){const r=parseInt(n.replace("x",""));r&&e.add(r)}return Array.from(e)}function cV(t){if(t.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function lV(t){const e={};if(typeof t=="string")for(const n of t.split(/[\s,]+/).filter(r=>r)){const r=n.split(":");r.length!==2?e["1px"]=r[0].trim():e[r[0].trim()]=r[1].trim()}else Object.assign(e,t);return e}const _L=gL({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(t,e)=>Mh(t)+"_"+Mh(e)}),yL=(t,{modifiers:e={},baseURL:n}={},r)=>{e.width&&e.height&&(e.resize=`${e.width}x${e.height}`,delete e.width,delete e.height);const s=_L(e)||"_";return n||(n=Bs(r.options.nuxt.baseURL,"/_ipx")),{url:Bs(n,s,nm(t))}},vL=!0,EL=!0,wL=Object.freeze(Object.defineProperty({__proto__:null,getImage:yL,supportsAlias:EL,validateDomains:vL},Symbol.toStringTag,{value:"Module"})),TL={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};TL.providers={ipxStatic:{provider:wL,defaults:{}}};const IL=et(t=>{var n;const e=t.$firebaseApp;t.vueApp.use(Dx,{firebaseApp:e}),(n=t.payload)!=null&&n.vuefire&&xx(t.payload.vuefire,e)});let bL;function AL(){return bL}function RL(t){return typeof t=="function"?t():he(t)}function zl(t,e=""){if(t instanceof Promise)return t;const n=RL(t);return!t||!n?n:Array.isArray(n)?n.map(r=>zl(r,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,he(s)]:[r,zl(s,r)])):n}const CL="usehead",$p=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Bp="__unhead_injection_handler__";function SL(){if(Bp in $p)return $p[Bp]();const t=st(CL);return t||AL()}function PL(t,e={}){const n=e.head||SL();if(n)return n.ssr?n.push(t,e):kL(n,t,e)}function kL(t,e,n={}){const r=kt(!1),s=kt({});i0(()=>{s.value=r.value?{}:zl(e)});const i=t.push(s.value,n);return Nr(s,a=>{i.patch(a)}),Kl()&&(Yp(()=>{i.dispose()}),o0(()=>{r.value=!0}),a0(()=>{r.value=!1})),i}const NL="inherit",OL="currentColor",xL="transparent",DL="#000",LL="#fff",ML={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},VL={50:"rgb(var(--color-gray-50) / <alpha-value>)",100:"rgb(var(--color-gray-100) / <alpha-value>)",200:"rgb(var(--color-gray-200) / <alpha-value>)",300:"rgb(var(--color-gray-300) / <alpha-value>)",400:"rgb(var(--color-gray-400) / <alpha-value>)",500:"rgb(var(--color-gray-500) / <alpha-value>)",600:"rgb(var(--color-gray-600) / <alpha-value>)",700:"rgb(var(--color-gray-700) / <alpha-value>)",800:"rgb(var(--color-gray-800) / <alpha-value>)",900:"rgb(var(--color-gray-900) / <alpha-value>)",950:"rgb(var(--color-gray-950) / <alpha-value>)"},FL={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},UL={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},$L={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"},BL={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},HL={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},jL={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},zL={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},WL={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},qL={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},GL={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},KL={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},QL={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},YL={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},XL={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},JL={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},ZL={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},eM={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},tM={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},nM={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rM={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},sM={50:"rgb(var(--color-primary-50) / <alpha-value>)",100:"rgb(var(--color-primary-100) / <alpha-value>)",200:"rgb(var(--color-primary-200) / <alpha-value>)",300:"rgb(var(--color-primary-300) / <alpha-value>)",400:"rgb(var(--color-primary-400) / <alpha-value>)",500:"rgb(var(--color-primary-500) / <alpha-value>)",600:"rgb(var(--color-primary-600) / <alpha-value>)",700:"rgb(var(--color-primary-700) / <alpha-value>)",800:"rgb(var(--color-primary-800) / <alpha-value>)",900:"rgb(var(--color-primary-900) / <alpha-value>)",950:"rgb(var(--color-primary-950) / <alpha-value>)",DEFAULT:"rgb(var(--color-primary-DEFAULT) / <alpha-value>)"},iM={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},eo={inherit:NL,current:OL,transparent:xL,black:DL,white:LL,slate:ML,gray:VL,zinc:FL,neutral:UL,stone:$L,red:BL,orange:HL,amber:jL,yellow:zL,lime:WL,green:qL,emerald:GL,teal:KL,cyan:QL,sky:YL,blue:XL,indigo:JL,violet:ZL,purple:eM,fuchsia:tM,pink:nM,rose:rM,primary:sM,cool:iM},oM=et(()=>{const t=Am(),e=ie(),n=at(()=>{const s=eo[t.ui.primary],i=eo[t.ui.gray];return s||console.warn(`[@nuxt/ui] Primary color '${t.ui.primary}' not found in Tailwind config`),i||console.warn(`[@nuxt/ui] Gray color '${t.ui.gray}' not found in Tailwind config`),`:root {
${Object.entries(s||eo.green).map(([o,a])=>`--color-primary-${o}: ${Vp(a)};`).join(`
`)}
--color-primary-DEFAULT: var(--color-primary-500);

${Object.entries(i||eo.cool).map(([o,a])=>`--color-gray-${o}: ${Vp(a)};`).join(`
`)}
}

.dark {
  --color-primary-DEFAULT: var(--color-primary-400);
}
`}),r={style:[{innerHTML:()=>n.value,tagPriority:-2,id:"nuxt-ui-colors"}]};if(e.isHydrating&&!e.payload.serverRendered){const s=document.createElement("style");s.innerHTML=n.value,s.setAttribute("data-nuxt-ui-colors",""),document.head.appendChild(s),r.script=[{innerHTML:"document.head.removeChild(document.querySelector('[data-nuxt-ui-colors]'))"}]}PL(r)}),aM="__NUXT_COLOR_MODE__",cM="nuxt-color-mode",Zt=window[aM]||{},lM=et(t=>{const e=pP("color-mode",()=>bn({preference:Zt.preference,value:Zt.value,unknown:!1,forced:!1})).value;cn().afterEach(s=>{const i=s.meta.colorMode;i&&i!=="system"?(e.value=i,e.forced=!0):(i==="system"&&console.warn("You cannot force the colorMode to system at the page level."),e.forced=!1,e.value=e.preference==="system"?Zt.getColorScheme():e.preference)});let n;function r(){n||!window.matchMedia||(n=window.matchMedia("(prefers-color-scheme: dark)"),n.addEventListener("change",()=>{!e.forced&&e.preference==="system"&&(e.value=Zt.getColorScheme())}))}Nr(()=>e.preference,s=>{var i;e.forced||(s==="system"?(e.value=Zt.getColorScheme(),r()):e.value=s,(i=window.localStorage)==null||i.setItem(cM,s))},{immediate:!0}),Nr(()=>e.value,(s,i)=>{Zt.removeColorScheme(i),Zt.addColorScheme(s)}),e.preference==="system"&&r(),t.hook("app:mounted",()=>{e.unknown&&(e.preference=Zt.preference,e.value=Zt.value,e.unknown=!1)}),t.provide("colorMode",e)}),uM=et({name:"nuxt:chunk-reload",setup(t){const e=cn(),n=ui(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href.startsWith("#")?n.app.baseURL+i.href:hm(n.app.baseURL,i.fullPath);EP({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),hM=et(t=>{let e;async function n(){const r=await ea();e&&clearTimeout(e),e=setTimeout(n,1e3*60*60);const s=await $fetch(Xl("builds/latest.json"));s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}ey(()=>{e=setTimeout(n,1e3*60*60)})});function dM(t){return typeof t=="object"&&t!==null}function Hp(t,e){return t=dM(t)?t:Object.create(null),new Proxy(t,{get(n,r,s){return r==="key"?Reflect.get(n,r,s):Reflect.get(n,r,s)||Reflect.get(e,r,s)}})}function fM(t,e){return e.reduce((n,r)=>n==null?void 0:n[r],t)}function pM(t,e,n){return e.slice(0,-1).reduce((r,s)=>/^(__proto__)$/.test(s)?{}:r[s]=r[s]||{},t)[e[e.length-1]]=n,t}function mM(t,e){return e.reduce((n,r)=>{const s=r.split(".");return pM(n,s,fM(t,s))},{})}function jp(t,{storage:e,serializer:n,key:r,debug:s}){try{const i=e==null?void 0:e.getItem(r);i&&t.$patch(n==null?void 0:n.deserialize(i))}catch(i){s&&console.error(i)}}function zp(t,{storage:e,serializer:n,key:r,paths:s,debug:i}){try{const o=Array.isArray(s)?mM(t,s):t;e.setItem(r,n.serialize(o))}catch(o){i&&console.error(o)}}function gM(t={}){return e=>{const{auto:n=!1}=t,{options:{persist:r=n},store:s,pinia:i}=e;if(!r)return;if(!(s.$id in i.state.value)){const a=i._s.get(s.$id.replace("__hot:",""));a&&Promise.resolve().then(()=>a.$persist());return}const o=(Array.isArray(r)?r.map(a=>Hp(a,t)):[Hp(r,t)]).map(({storage:a=localStorage,beforeRestore:c=null,afterRestore:l=null,serializer:u={serialize:JSON.stringify,deserialize:JSON.parse},key:h=s.$id,paths:d=null,debug:f=!1})=>{var p;return{storage:a,beforeRestore:c,afterRestore:l,serializer:u,key:((p=t.key)!=null?p:g=>g)(typeof h=="string"?h:h(s.$id)),paths:d,debug:f}});s.$persist=()=>{o.forEach(a=>{zp(s.$state,a)})},s.$hydrate=({runHooks:a=!0}={})=>{o.forEach(c=>{const{beforeRestore:l,afterRestore:u}=c;a&&(l==null||l(e)),jp(s,c),a&&(u==null||u(e))})},o.forEach(a=>{const{beforeRestore:c,afterRestore:l}=a;c==null||c(e),jp(s,a),l==null||l(e),s.$subscribe((u,h)=>{zp(h,a)},{detached:!0})})}}const _M=et(t=>{const{cookieOptions:e,debug:n,storage:r}=ui().public.persistedState;t.$pinia.use(gM({storage:r==="cookies"?jl.cookiesWithOptions(e):jl[r],debug:n}))}),yM=[jC,zC,qC,rP,sP,wP,ak,ck,hk,IL,oM,lM,uM,hM,_M];const Xv=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},vM=t=>(u0("data-v-fb90a931"),t=t(),h0(),t),EM=vM(()=>Fa("div",{class:"loader"},[Fa("svg",{viewBox:"0 0 86 80"},[Fa("polygon",{points:"43 8 79 72 7 72"})])],-1)),wM=[EM],TM={__name:"CustomLoading",props:{throttle:{type:Number,default:200},hold:{type:Number,default:400}},setup(t){const e=t,n=kt(!1);let r=null;function s(){clearTimeout(r),r=null}function i(){s(),e.throttle>0?r=setTimeout(()=>{n.value=!0},e.throttle):n.value=!0}function o(){s(),setTimeout(()=>{n.value=!1},e.hold)}co.unshift(i);function a(){co.splice(co.indexOf(i,1))}const c=ie(),l=c.hook("page:finish",o),u=c.hook("vue:error",o);Yp(()=>{a(),l(),u()});const h=cn();return h.onError(()=>{o()}),h.beforeResolve((d,f)=>{(d===f||d.matched.every((p,g)=>{var m,_,v;return p.components&&((m=p.components)==null?void 0:m.default)===((v=(_=f.matched[g])==null?void 0:_.components)==null?void 0:v.default)}))&&o()}),h.afterEach((d,f,p)=>{p&&o()}),(d,f)=>(_n(),c0("div",{class:l0(["loader-wrap",he(n)?"loader-visible":"loader-hidden"])},wM,2))}},IM=Xv(TM,[["__scopeId","data-v-fb90a931"]]),bM=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),Wl=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&bM(t.route,n));return typeof r=="function"?r(t.route):r},AM=(t,e)=>({default:()=>t?vt(d0,t===!0?{}:t,e):e}),RM=or({name:"RouteProvider",props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s]});return wr(hi,Ko(r)),()=>vt(t.vnode,{ref:t.vnodeRef})}}),CM=or({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,expose:n}){const r=ie(),s=kt(),i=st(hi,null);n({pageRef:s});const o=st(bm,null);let a;const c=r.deferHydration();return()=>vt(J_,{name:t.name,route:t.route,...e},{default:l=>{const u=kM(i,l.route,l.Component),h=i&&i.matched.length===l.route.matched.length;if(!l.Component){if(a&&!h)return a;c();return}if(a&&o&&!o.isCurrent(l.route))return a;if(u&&i&&(!o||o!=null&&o.isCurrent(i)))return h?a:null;const d=Wl(l,t.pageKey),f=!!(t.transition??l.route.meta.pageTransition??Mc),p=f&&PM([t.transition,l.route.meta.pageTransition,Mc,{onAfterLeave:()=>{r.callHook("page:transition:finish",l.Component)}}].filter(Boolean));return a=Z_(Xp,f&&p,AM(t.keepalive??l.route.meta.keepalive??fT,vt(Yl,{suspensible:!0,onPending:()=>r.callHook("page:start",l.Component),onResolve:()=>{Pn(()=>r.callHook("page:finish",l.Component).finally(c))}},{default:()=>vt(RM,{key:d||void 0,vnode:l.Component,route:l.route,renderKey:d||void 0,trackRootNodes:f,vnodeRef:s})}))).default(),a}})}});function SM(t){return Array.isArray(t)?t:t?[t]:[]}function PM(t){const e=t.map(n=>({...n,onAfterLeave:SM(n.onAfterLeave)}));return Tm(...e)}function kM(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,c;return((o=s.components)==null?void 0:o.default)!==((c=(a=t.matched[i])==null?void 0:a.components)==null?void 0:c.default)})||n&&Wl({route:e,Component:n})!==Wl({route:t,Component:n})}const NM=or({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const n=await Hn[t.name]().then(r=>r.default||r);return()=>vt(n,t.layoutProps,e.slots)}}),OM=or({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const n=ie(),r=st(hi),s=r===tu()?QS():r,i=at(()=>he(t.name)??s.meta.layout??"default"),o=kt();e.expose({layoutRef:o});const a=n.deferHydration();return()=>{const c=i.value&&i.value in Hn,l=s.meta.layoutTransition??dT;return Z_(Xp,c&&l,{default:()=>vt(Yl,{suspensible:!0,onResolve:()=>{Pn(a)}},{default:()=>vt(xM,{layoutProps:f0(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!l},e.slots)})}).default()}}}),xM=or({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&wr(bm,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in Hn)?(s=(r=e.slots).default)==null?void 0:s.call(r):vt(NM,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),DM={};function LM(t,e){const n=IM,r=CM,s=OM;return _n(),Vn(s,null,{default:Jp(()=>[Lh(n),Lh(r)]),_:1})}const MM=Xv(DM,[["render",LM]]),VM={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;(n.stack||"").split(`
`).splice(1).map(h=>({text:h.replace("webpack:/","").replace(".vue",".js").trim(),internal:h.includes("node_modules")&&!h.includes(".cache")||h.includes("internal")||h.includes("new Promise")})).map(h=>`<span class="stack${h.internal?" internal":""}">${h.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,c=z(()=>k(()=>import("./error-404.6e1e77e5.js"),["./error-404.6e1e77e5.js","./nuxt-link.d30bfe4b.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css","./vue.f36acd1f.d568424a.js","./error-404.871584dc.css"],import.meta.url).then(h=>h.default||h)),l=z(()=>k(()=>import("./error-500.bf141d92.js"),["./error-500.bf141d92.js","./vue.f36acd1f.d568424a.js","./swiper-vue.20d02af6.js","./swiper-vue.9b50ddb0.css","./error-500.5504fd74.css"],import.meta.url).then(h=>h.default||h)),u=s?c:l;return(h,d)=>(_n(),Vn(he(u),p0(m0({statusCode:he(r),statusMessage:he(i),description:he(o),stack:he(a)})),null,16))}},FM=VM,UM={__name:"nuxt-root",setup(t){const e=()=>null,n=ie(),r=n.deferHydration(),s=!1;wr(hi,tu()),n.hooks.callHookWith(a=>a.map(c=>c()),"vue:setup");const i=Jo();g0((a,c,l)=>{if(n.hooks.callHook("vue:error",a,c,l).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u)),cT(a)&&(a.fatal||a.unhandled))return n.runWithContext(()=>Fn(a)),!1});const o=!1;return(a,c)=>(_n(),Vn(Yl,{onResolve:he(r)},{default:Jp(()=>[he(i)?(_n(),Vn(he(FM),{key:0,error:he(i)},null,8,["error"])):he(o)?(_n(),Vn(he(e),{key:1,context:he(o)},null,8,["context"])):he(s)?(_n(),Vn(_0(he(s)),{key:2})):(_n(),Vn(he(MM),{key:3}))]),_:1},8,["onResolve"]))}},Wp=UM;let qp;{let t;qp=async function(){var i,o;if(t)return t;const r=!!((i=window.__NUXT__)!=null&&i.serverRendered||((o=document.getElementById("__NUXT_DATA__"))==null?void 0:o.dataset.ssr)==="true")?y0(Wp):v0(Wp),s=AE({vueApp:r});try{await CE(s,yM)}catch(a){await s.callHook("app:error",a),s.payload.error=s.payload.error||a}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(pT),await s.hooks.callHook("app:mounted",r),await Pn()}catch(a){await s.callHook("app:error",a),s.payload.error=s.payload.error||a}return r},t=qp().catch(e=>{console.error("Error while mounting app:",e)})}export{Rf as $,WM as A,F0 as B,HM as C,Pc as D,k as E,cn as F,qM as G,Yo as H,ey as I,bf as J,tV as K,hm as L,Xo as M,jE as N,Sc as O,hi as P,JE as Q,zM as R,Dp as S,Mp as T,Am as U,GM as V,Zo as W,Hs as X,$0 as Y,V0 as Z,Xv as _,hT as a,Tm as b,ZM as c,MD as d,oV as e,lV as f,eV as g,sm as h,aV as i,Bs as j,cV as k,sV as l,rV as m,TL as n,ui as o,im as p,ie as q,tu as r,pP as s,VD as t,nV as u,CM as v,BM as w,KM as x,iV as y,jM as z};
