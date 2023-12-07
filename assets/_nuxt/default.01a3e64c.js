import{_ as O,m as ve,a as J,d as he,t as B,l as be}from"./entry.c8f28cdd.js";import{q as ye,x as Ae,u as _,a as Q,w as Me,F as x,G as w,a3 as R,P as y,K as u,O as ae,H as k,Z as F,ag as xe,am as we,d as Ie,t as K,c as M,_ as Se,M as je,$ as H,a5 as N,al as Z}from"./swiper-vue.e1fa3e0d.js";import{_ as Ee}from"./nuxt-link.06033beb.js";import Ve from"./Icon.d7dc8f8f.js";import{_ as oe,u as ke,a as Ce}from"./Avatar.fbdcb8dc.js";import{i as Te,u as qe,t as ze}from"./select.e0843093.js";import{u as Be,_ as De}from"./FormGroup.0fff6cb0.js";import"./index.df58e121.js";function _e(e){return ye()?(Ae(e),!0):!1}function le(e){return typeof e=="function"?e():_(e)}const Je=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Qe=Object.prototype.toString,Fe=e=>Qe.call(e)==="[object Object]",Oe=()=>{};function Ue(e){var t;const a=le(e);return(t=a==null?void 0:a.$el)!=null?t:a}const se=Je?window:void 0;function G(...e){let t,a,n,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,n,o]=e,t=se):[t,a,n,o]=e,!t)return Oe;Array.isArray(a)||(a=[a]),Array.isArray(n)||(n=[n]);const d=[],i=()=>{d.forEach(c=>c()),d.length=0},s=(c,g,h,p)=>(c.addEventListener(g,h,p),()=>c.removeEventListener(g,h,p)),f=Me(()=>[Ue(t),le(o)],([c,g])=>{if(i(),!c)return;const h=Fe(g)?{...g}:g;d.push(...a.flatMap(p=>n.map(b=>s(c,p,b,h))))},{immediate:!0,flush:"post"}),v=()=>{f(),i()};return _e(v),v}const Ge={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function We(e={}){const{type:t="page",touch:a=!0,resetOnTouchEnds:n=!1,initialValue:o={x:0,y:0},window:d=se,target:i=d,scroll:s=!0,eventFilter:f}=e;let v=null;const c=Q(o.x),g=Q(o.y),h=Q(null),p=typeof t=="function"?t:Ge[t],b=r=>{const l=p(r);v=r,l&&([c.value,g.value]=l,h.value="mouse")},j=r=>{if(r.touches.length>0){const l=p(r.touches[0]);l&&([c.value,g.value]=l,h.value="touch")}},E=()=>{if(!v||!d)return;const r=p(v);v instanceof MouseEvent&&r&&(c.value=r[0]+d.scrollX,g.value=r[1]+d.scrollY)},I=()=>{c.value=o.x,g.value=o.y},C=f?r=>f(()=>b(r),{}):r=>b(r),T=f?r=>f(()=>j(r),{}):r=>j(r),q=f?()=>f(()=>E(),{}):()=>E();if(i){const r={passive:!0};G(i,["mousemove","dragover"],C,r),a&&t!=="movement"&&(G(i,["touchstart","touchmove"],T,r),n&&G(i,"touchend",I,r)),s&&t==="page"&&G(d,"scroll",q,{passive:!0})}return{x:c,y:g,sourceType:h}}var W=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function He(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Re(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var re=Re,Ye=typeof W=="object"&&W&&W.Object===Object&&W,Le=Ye,Ke=Le,Ne=typeof self=="object"&&self&&self.Object===Object&&self,Ze=Ke||Ne||Function("return this")(),ie=Ze,Xe=ie,Pe=function(){return Xe.Date.now()},$e=Pe,et=/\s/;function tt(e){for(var t=e.length;t--&&et.test(e.charAt(t)););return t}var nt=tt,at=nt,ot=/^\s+/;function lt(e){return e&&e.slice(0,at(e)+1).replace(ot,"")}var st=lt,rt=ie,it=rt.Symbol,ce=it,X=ce,de=Object.prototype,ct=de.hasOwnProperty,dt=de.toString,D=X?X.toStringTag:void 0;function ut(e){var t=ct.call(e,D),a=e[D];try{e[D]=void 0;var n=!0}catch{}var o=dt.call(e);return n&&(t?e[D]=a:delete e[D]),o}var ft=ut,pt=Object.prototype,gt=pt.toString;function mt(e){return gt.call(e)}var vt=mt,P=ce,ht=ft,bt=vt,yt="[object Null]",At="[object Undefined]",$=P?P.toStringTag:void 0;function Mt(e){return e==null?e===void 0?At:yt:$&&$ in Object(e)?ht(e):bt(e)}var xt=Mt;function wt(e){return e!=null&&typeof e=="object"}var It=wt,St=xt,jt=It,Et="[object Symbol]";function Vt(e){return typeof e=="symbol"||jt(e)&&St(e)==Et}var kt=Vt,Ct=st,ee=re,Tt=kt,te=0/0,qt=/^[-+]0x[0-9a-f]+$/i,zt=/^0b[01]+$/i,Bt=/^0o[0-7]+$/i,Dt=parseInt;function _t(e){if(typeof e=="number")return e;if(Tt(e))return te;if(ee(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ee(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Ct(e);var a=zt.test(e);return a||Bt.test(e)?Dt(e.slice(2),a?2:8):qt.test(e)?te:+e}var Jt=_t,Qt=re,Y=$e,ne=Jt,Ft="Expected a function",Ot=Math.max,Ut=Math.min;function Gt(e,t,a){var n,o,d,i,s,f,v=0,c=!1,g=!1,h=!0;if(typeof e!="function")throw new TypeError(Ft);t=ne(t)||0,Qt(a)&&(c=!!a.leading,g="maxWait"in a,d=g?Ot(ne(a.maxWait)||0,t):d,h="trailing"in a?!!a.trailing:h);function p(l){var A=n,V=o;return n=o=void 0,v=l,i=e.apply(V,A),i}function b(l){return v=l,s=setTimeout(I,t),c?p(l):i}function j(l){var A=l-f,V=l-v,U=t-A;return g?Ut(U,d-V):U}function E(l){var A=l-f,V=l-v;return f===void 0||A>=t||A<0||g&&V>=d}function I(){var l=Y();if(E(l))return C(l);s=setTimeout(I,j(l))}function C(l){return s=void 0,h&&n?p(l):(n=o=void 0,i)}function T(){s!==void 0&&clearTimeout(s),v=0,n=f=o=s=void 0}function q(){return s===void 0?i:C(Y())}function r(){var l=Y(),A=E(l);if(n=arguments,o=this,f=l,A){if(s===void 0)return b(f);if(g)return clearTimeout(s),s=setTimeout(I,t),p(f)}return s===void 0&&(s=setTimeout(I,t)),i}return r.cancel=T,r.flush=q,r}var Wt=Gt;const ue=He(Wt);const Ht={mounted(){this.handleDebouncedScroll=ue(this.handleScroll,100),window.addEventListener("scroll",this.handleDebouncedScroll)},onMounted(){},methods:{handleScroll(e){window.scrollY===0?this.$refs.dogboss.classList.add("scale-150"):this.$refs.dogboss.classList.remove("scale-150")}}},Rt={ref:"dogboss",class:"containerForDog"},Yt=R('<div class="corgi"><div class="head"><div class="ear ear--r"></div><div class="ear ear--l"></div><div class="eye eye--left"></div><div class="eye eye--right"></div><div class="face"><div class="face__white"><div class="face__orange face__orange--l"></div><div class="face__orange face__orange--r"></div></div></div><div class="face__curve"></div><div class="mouth"><div class="nose"></div><div class="mouth__left"><div class="mouth__left--round"></div><div class="mouth__left--sharp"></div></div><div class="lowerjaw"><div class="lips"></div><div class="tongue test"></div></div><div class="snout"></div></div></div><div class="neck__back"></div><div class="neck__front"></div><div class="body"><div class="body__chest"></div></div><div class="foot foot__left foot__front foot__1"></div><div class="foot foot__right foot__front foot__2"></div><div class="foot foot__left foot__back foot__3"></div><div class="foot foot__right foot__back foot__4"></div><div class="tail test"></div></div>',1),Lt=[Yt];function Kt(e,t,a,n,o,d){return x(),w("div",Rt,Lt,512)}const Nt=O(Ht,[["render",Kt]]);const Zt={data(){return{isMobileMenuOpen:!1,isScrolled:!1,SpawnDog:!1}},mounted(){this.handleDebouncedScroll=ue(this.handleScroll,100),window.addEventListener("scroll",this.handleDebouncedScroll)},methods:{handleScroll(e){this.isScrolled=window.scrollY!==0},spawnDog(){this.SpawnDog=!this.SpawnDog,console.log(this.SpawnDog)}}},Xt=u("div",{class:"containerForCat move hidden md:block"},[u("div",{class:"cat walking"})],-1),Pt={class:"flex justify-center items-center px-4 py-8 md:px-6 md:py-16 mb-0"},$t={ref:"mic",class:"flex absolute sm:scale-75 sm:-left-8 lg:scale-100 lg:left-40 xl:left-72 right-10"},en=u("span",{style:{color:"#B0A695"}},"S",-1),tn=R('<div class="hidden md:block absolute sm:scale-50 sm:-right-36 lg:scale-75 lg:right-8 xl:right-24 xl:scale-100 border-none border-black"><ul class="flex space-x-20 font-mono text-3xl"><li><a href="article" class="">Article</a></li><li><a href="#" class="">Tutorial</a></li><li><a href="#" class="">About</a></li><li><a href="#" class="">Categories</a></li></ul></div>',1),nn={class:"md:hidden mr-80"},an={key:0,class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},on={key:1,class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},ln={class:"md:hidden fixed right-0 top-20 bg-white shadow-lg w-full"},sn=R('<ul class="py-2"><li><a href="article" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Article</a></li><li><a href="#" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Tutorial</a></li><li><a href="#" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">About</a></li><li><a href="#" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Categories</a></li></ul>',1),rn=[sn];function cn(e,t,a,n,o,d){const i=Nt,s=Ee,f=Ve;return x(),w("div",{ref:"navigationBoss",class:k(["border-b-4 border-gray-300 bg-gray-200 overflow-hidden border-solid duration-200 relative",{"md:py-10":!o.isScrolled,"bg-white":o.isScrolled}])},[Xt,y(i,{ref:"doggy",class:"hidden md:block move-dog dog"},null,512),u("div",Pt,[u("div",$t,[y(s,{to:"/",class:"NuxtLink"},{default:ae(()=>[u("p",{ref:"name",class:k(["font-Willfteka tracking-normal md:text-3xl font-extrabold text-2xl leading-relaxed md:hover:animate-bounce",{"xl:text-5xl":!o.isScrolled}]),style:{scale:"1.1 1"}},[en,F("cott Lin's Blog ")],2)]),_:1})],512),tn,u("div",nn,[u("button",{class:"p-2 flex items-center self-start focus:outline-none",onClick:t[0]||(t[0]=v=>o.isMobileMenuOpen=!o.isMobileMenuOpen)},[o.isMobileMenuOpen?(x(),w("svg",an,[y(f,{name:"line-md:arrow-align-top",class:"text-2xl w-6 h-6"})])):(x(),w("svg",on,[y(f,{name:"line-md:align-right",class:"text-2xl w-6 h-6"})]))])])]),xe(u("div",ln,rn,512),[[we,o.isMobileMenuOpen]])],2)}const dn=O(Zt,[["render",cn]]),S=ve(J.ui.strategy,J.ui.input,Te),un=Ie({components:{UIcon:oe},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>S.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(S.size).includes(e)}},color:{type:String,default:()=>S.default.color,validator(e){return[...J.ui.colors,...Object.keys(S.color)].includes(e)}},variant:{type:String,default:()=>S.default.variant,validator(e){return[...Object.keys(S.variant),...Object.values(S.color).flatMap(t=>Object.keys(t))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur"],setup(e,{emit:t,slots:a}){const{ui:n,attrs:o}=qe("input",K(e,"ui"),S,K(e,"class")),{size:d,rounded:i}=ke({ui:n,props:e}),{emitFormBlur:s,emitFormInput:f,size:v,color:c,inputId:g,name:h}=Be(e,S),p=M(()=>d.value||v.value),b=Q(he({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),j=Q(null),E=()=>{var m;e.autofocus&&((m=j.value)==null||m.focus())},I=m=>{b.value.trim&&(m=m.trim()),(b.value.number||e.type==="number")&&(m=be(m)),t("update:modelValue",m),f()},C=m=>{b.value.lazy||I(m.target.value)},T=m=>{const z=m.target.value;b.value.lazy&&I(z),b.value.trim&&(m.target.value=z.trim())},q=m=>{s(),t("blur",m)};Se(()=>{setTimeout(()=>{E()},e.autofocusDelay)});const r=M(()=>{var z,L;const m=((L=(z=n.value.color)==null?void 0:z[c.value])==null?void 0:L[e.variant])||n.value.variant[e.variant];return ze(B(n.value.base,i.value,n.value.placeholder,n.value.size[p.value],e.padded?n.value.padding[p.value]:"p-0",m==null?void 0:m.replaceAll("{color}",c.value),(l.value||a.leading)&&n.value.leading.padding[p.value],(A.value||a.trailing)&&n.value.trailing.padding[p.value]),e.inputClass)}),l=M(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),A=M(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),V=M(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),U=M(()=>e.loading&&!l.value?e.loadingIcon:e.trailingIcon||e.icon),fe=M(()=>B(n.value.icon.leading.wrapper,n.value.icon.leading.pointer,n.value.icon.leading.padding[p.value])),pe=M(()=>B(n.value.icon.base,J.ui.colors.includes(c.value)&&n.value.icon.color.replaceAll("{color}",c.value),n.value.icon.size[p.value],e.loading&&"animate-spin")),ge=M(()=>B(n.value.icon.trailing.wrapper,n.value.icon.trailing.pointer,n.value.icon.trailing.padding[p.value])),me=M(()=>B(n.value.icon.base,J.ui.colors.includes(c.value)&&n.value.icon.color.replaceAll("{color}",c.value),n.value.icon.size[p.value],e.loading&&!l.value&&"animate-spin"));return{ui:n,attrs:o,name:h,inputId:g,input:j,isLeading:l,isTrailing:A,inputClass:r,leadingIconName:V,leadingIconClass:pe,leadingWrapperIconClass:fe,trailingIconName:U,trailingIconClass:me,trailingWrapperIconClass:ge,onInput:C,onChange:T,onBlur:q}}}),fn=["id","name","value","type","required","placeholder","disabled"];function pn(e,t,a,n,o,d){const i=oe;return x(),w("div",{class:k(e.ui.wrapper)},[u("input",je({id:e.inputId,ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled||e.loading,class:["form-input",e.inputClass]},e.attrs,{onInput:t[0]||(t[0]=(...s)=>e.onInput&&e.onInput(...s)),onBlur:t[1]||(t[1]=(...s)=>e.onBlur&&e.onBlur(...s)),onChange:t[2]||(t[2]=(...s)=>e.onChange&&e.onChange(...s))}),null,16,fn),H(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(x(),w("span",{key:0,class:k(e.leadingWrapperIconClass)},[H(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[y(i,{name:e.leadingIconName,class:k(e.leadingIconClass)},null,8,["name","class"])])],2)):N("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(x(),w("span",{key:1,class:k(e.trailingWrapperIconClass)},[H(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[y(i,{name:e.trailingIconName,class:k(e.trailingIconClass)},null,8,["name","class"])])],2)):N("",!0)],2)}const gn=O(un,[["render",pn]]),mn={},vn=u("p",{class:"text-white pb-2 font-Chinese text-xl antialiased"},[F(" 你可以在這裡輸入你的信箱"),u("br"),F("我會透過mail聯絡您 ")],-1),hn=u("p",{class:"text-white antialiased"},[F(" If you want to contact the author,"),u("br"),F(" you can enter your email here. ")],-1);function bn(e,t){const a=Ce,n=gn,o=De;return x(),w("div",null,[y(a,{src:"data:image/jpeg;base64,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",size:"md",class:"pb-8"}),y(o,{size:"xl"},{default:ae(()=>[vn,y(n,{placeholder:"哩ㄟ信箱@example.com",icon:"i-heroicons-envelope",class:"w-80"}),hn]),_:1})])}const yn=O(mn,[["render",bn]]),An=""+new URL("facebook.c04c3c48.png",import.meta.url).href,Mn=""+new URL("Googlell.142b6195.png",import.meta.url).href,xn=""+new URL("twitter.77a4de27.png",import.meta.url).href,wn=""+new URL("instagram.22f15b3d.png",import.meta.url).href,In={},Sn={class:"h-1/3 bg-[url('~/assets/images/starnight.jpg')] bg-fixed bg-cover text-white pb-10"},jn={class:"flex flex-row container px-4 sm:px-6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-1 sm:gap-20 sm:scale-75 lg:gap-36 lg:scale-90 xl:scale-100"},En=R('<div class="footer-left col-span-1 sm:col-span-2 mt-16"><h4 class="text-lg font-bold mb-4 inline-block"><p class="border-b-2 border-cyan-400 hover:border-purple-400"> 我的社交帳號(My Social) </p></h4><div class="flex flex-row gap-2 md:gap-4"><div class="flex flex-row gap-2"><a href="#"><img src="'+An+'" class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"></a><a href="#"><img src="'+Mn+'" class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"></a><a href="#"><img src="'+xn+'" class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"></a><a href="https://www.instagram.com/lin_michi50/" class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"><img src="'+wn+'"></a></div></div><h4 class="text-sm font-light mt-14 animate-text hover:bg-gradient-to-r hover:from-teal-500 hover:via-purple-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent font-black hover:text-xl hover:font-extrabold transiton-300"> This website is managed by LIN_MICKEY </h4></div><div class="footer-mid col-span-1 mt-16 justify-center flex items-center"><h4 class="text-lg font-bold mb-4 inline-block text-center sm:mt-16"><p class=""> © Copyright 1234 </p><p class="text-xs font-serif font-extralight text-slate-300"> ALL rights reserved. Powered by the <span class="text-white text-sm">ScottLin</span></p></h4></div>',2),Vn={class:"footer-right hidden sm:block border-l-8 border-double pl-4 sm:pl-14 sm:mr-0 xl:ml-8 mt-8 h-4/5"},kn={class:"flex flex-col gap-2 whitespace-nowrap mt-6"};function Cn(e,t){const a=yn;return x(),w("div",Sn,[u("div",jn,[En,u("div",Vn,[u("div",kn,[y(a)])])])])}const Tn=O(In,[["render",Cn]]);const qn={class:""},zn={class:"//bg-[url('https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg')] bg-fixed ddbody"},Bn={class:"min-h-screen md:flex md:justify-center md:mt-30 sm:scale-75 lg:scale-100"},Wn={__name:"default",setup(e){const{x:t,y:a}=We();return(n,o)=>{const d=dn,i=Tn;return x(),w("div",{class:"bg-white flex flex-col overflow-hidden relative",onScroll:o[0]||(o[0]=(...s)=>n.checkScrollState&&n.checkScrollState(...s))},[u("div",qn,[y(d,{class:"md:fixed md:w-screen md:z-50"}),u("div",{class:"absolute rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50",style:Z({left:`${_(t)}px`,top:`${_(a)}px`,width:"10px",height:"10px",background:"#00FFFF"})},null,4),u("div",{class:"absolute rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50",style:Z({left:`${_(t)}px`,top:`${_(a)}px`,width:"40px",height:"40px",background:"",border:"1px solid black"})},null,4),u("div",zn,[u("div",Bn,[H(n.$slots,"default")])]),y(i)])],32)}}};export{Wn as default};
