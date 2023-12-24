import{_ as be}from"./nuxt-link.9df14f32.js";import ne from"./Icon.b37cfa8f.js";import{c as G,g as ye}from"./_commonjsHelpers.725317a4.js";import{_ as U,m as Ae,a as J,d as Me,t as z,l as xe}from"./entry.b23deb58.js";import{q as we,x as Ie,u as D,a as O,w as Se,F as A,G as M,_ as R,K as r,P as b,O as ae,H as V,Z as Q,an as ke,ao as je,d as Ee,t as K,c as w,$ as Ve,M as Ce,a0 as H,a5 as N,aj as Z}from"./swiper-vue.20d02af6.js";import{_ as se,u as _e,a as Te}from"./Avatar.e453387b.js";import{i as qe,u as ze,t as Be}from"./select.26b90f24.js";import{u as De,_ as Je}from"./FormGroup.82a2e235.js";import"./index.df58e121.js";function Oe(e){return we()?(Ie(e),!0):!1}function le(e){return typeof e=="function"?e():D(e)}const Qe=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ue=Object.prototype.toString,Fe=e=>Ue.call(e)==="[object Object]",Ge=()=>{};function We(e){var t;const n=le(e);return(t=n==null?void 0:n.$el)!=null?t:n}const ie=Qe?window:void 0;function W(...e){let t,n,o,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,a]=e,t=ie):[t,n,o,a]=e,!t)return Ge;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const u=[],c=()=>{u.forEach(d=>d()),u.length=0},l=(d,f,h,g)=>(d.addEventListener(f,h,g),()=>d.removeEventListener(f,h,g)),m=Se(()=>[We(t),le(a)],([d,f])=>{if(c(),!d)return;const h=Fe(f)?{...f}:f;u.push(...n.flatMap(g=>o.map(y=>l(d,g,y,h))))},{immediate:!0,flush:"post"}),v=()=>{m(),c()};return Oe(v),v}const He={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function Re(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:a={x:0,y:0},window:u=ie,target:c=u,scroll:l=!0,eventFilter:m}=e;let v=null;const d=O(a.x),f=O(a.y),h=O(null),g=typeof t=="function"?t:He[t],y=i=>{const s=g(i);v=i,s&&([d.value,f.value]=s,h.value="mouse")},k=i=>{if(i.touches.length>0){const s=g(i.touches[0]);s&&([d.value,f.value]=s,h.value="touch")}},j=()=>{if(!v||!u)return;const i=g(v);v instanceof MouseEvent&&i&&(d.value=i[0]+u.scrollX,f.value=i[1]+u.scrollY)},I=()=>{d.value=a.x,f.value=a.y},C=m?i=>m(()=>y(i),{}):i=>y(i),_=m?i=>m(()=>k(i),{}):i=>k(i),T=m?()=>m(()=>j(),{}):()=>j();if(c){const i={passive:!0};W(c,["mousemove","dragover"],C,i),n&&t!=="movement"&&(W(c,["touchstart","touchmove"],_,i),o&&W(c,"touchend",I,i)),l&&t==="page"&&W(u,"scroll",T,{passive:!0})}return{x:d,y:f,sourceType:h}}function Le(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var re=Le,Ye=typeof G=="object"&&G&&G.Object===Object&&G,Ke=Ye,Ne=Ke,Ze=typeof self=="object"&&self&&self.Object===Object&&self,Xe=Ne||Ze||Function("return this")(),ce=Xe,Pe=ce,$e=function(){return Pe.Date.now()},et=$e,tt=/\s/;function ot(e){for(var t=e.length;t--&&tt.test(e.charAt(t)););return t}var nt=ot,at=nt,st=/^\s+/;function lt(e){return e&&e.slice(0,at(e)+1).replace(st,"")}var it=lt,rt=ce,ct=rt.Symbol,de=ct,X=de,ue=Object.prototype,dt=ue.hasOwnProperty,ut=ue.toString,B=X?X.toStringTag:void 0;function mt(e){var t=dt.call(e,B),n=e[B];try{e[B]=void 0;var o=!0}catch{}var a=ut.call(e);return o&&(t?e[B]=n:delete e[B]),a}var gt=mt,ft=Object.prototype,pt=ft.toString;function vt(e){return pt.call(e)}var ht=vt,P=de,bt=gt,yt=ht,At="[object Null]",Mt="[object Undefined]",$=P?P.toStringTag:void 0;function xt(e){return e==null?e===void 0?Mt:At:$&&$ in Object(e)?bt(e):yt(e)}var wt=xt;function It(e){return e!=null&&typeof e=="object"}var St=It,kt=wt,jt=St,Et="[object Symbol]";function Vt(e){return typeof e=="symbol"||jt(e)&&kt(e)==Et}var Ct=Vt,_t=it,ee=re,Tt=Ct,te=0/0,qt=/^[-+]0x[0-9a-f]+$/i,zt=/^0b[01]+$/i,Bt=/^0o[0-7]+$/i,Dt=parseInt;function Jt(e){if(typeof e=="number")return e;if(Tt(e))return te;if(ee(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ee(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=_t(e);var n=zt.test(e);return n||Bt.test(e)?Dt(e.slice(2),n?2:8):qt.test(e)?te:+e}var Ot=Jt,Qt=re,L=et,oe=Ot,Ut="Expected a function",Ft=Math.max,Gt=Math.min;function Wt(e,t,n){var o,a,u,c,l,m,v=0,d=!1,f=!1,h=!0;if(typeof e!="function")throw new TypeError(Ut);t=oe(t)||0,Qt(n)&&(d=!!n.leading,f="maxWait"in n,u=f?Ft(oe(n.maxWait)||0,t):u,h="trailing"in n?!!n.trailing:h);function g(s){var x=o,E=a;return o=a=void 0,v=s,c=e.apply(E,x),c}function y(s){return v=s,l=setTimeout(I,t),d?g(s):c}function k(s){var x=s-m,E=s-v,F=t-x;return f?Gt(F,u-E):F}function j(s){var x=s-m,E=s-v;return m===void 0||x>=t||x<0||f&&E>=u}function I(){var s=L();if(j(s))return C(s);l=setTimeout(I,k(s))}function C(s){return l=void 0,h&&o?g(s):(o=a=void 0,c)}function _(){l!==void 0&&clearTimeout(l),v=0,o=m=a=l=void 0}function T(){return l===void 0?c:C(L())}function i(){var s=L(),x=j(s);if(o=arguments,a=this,m=s,x){if(l===void 0)return y(m);if(f)return clearTimeout(l),l=setTimeout(I,t),g(m)}return l===void 0&&(l=setTimeout(I,t)),c}return i.cancel=_,i.flush=T,i}var Ht=Wt;const me=ye(Ht);const Rt={mounted(){this.handleDebouncedScroll=me(this.handleScroll,100),window.addEventListener("scroll",this.handleDebouncedScroll)},onMounted(){},methods:{handleScroll(e){window.scrollY===0?this.$refs.dogboss.classList.add("scale-150"):this.$refs.dogboss.classList.remove("scale-150")}}},Lt={ref:"dogboss",class:"containerForDog"},Yt=R('<div class="corgi"><div class="head"><div class="ear ear--r"></div><div class="ear ear--l"></div><div class="eye eye--left"></div><div class="eye eye--right"></div><div class="face"><div class="face__white"><div class="face__orange face__orange--l"></div><div class="face__orange face__orange--r"></div></div></div><div class="face__curve"></div><div class="mouth"><div class="nose"></div><div class="mouth__left"><div class="mouth__left--round"></div><div class="mouth__left--sharp"></div></div><div class="lowerjaw"><div class="lips"></div><div class="tongue test"></div></div><div class="snout"></div></div></div><div class="neck__back"></div><div class="neck__front"></div><div class="body"><div class="body__chest"></div></div><div class="foot foot__left foot__front foot__1"></div><div class="foot foot__right foot__front foot__2"></div><div class="foot foot__left foot__back foot__3"></div><div class="foot foot__right foot__back foot__4"></div><div class="tail test"></div></div>',1),Kt=[Yt];function Nt(e,t,n,o,a,u){return A(),M("div",Lt,Kt,512)}const Zt=U(Rt,[["render",Nt]]),ge=""+new URL("dogrun.80d73bd8.gif",import.meta.url).href,Xt=""+new URL("dog.d36ea1f7.gif",import.meta.url).href,Pt=""+new URL("dogshake.eac9dcc1.gif",import.meta.url).href;const $t={data(){return{isMobileMenuOpen:!1,isScrolled:!1,SpawnDog:!1,samoOrigin:!0,dogrun:!0}},mounted(){this.handleDebouncedScroll=me(this.handleScroll,100),window.addEventListener("scroll",this.handleDebouncedScroll),setInterval(()=>{Math.random()<.5&&(this.samoOrigin=!this.samoOrigin)},2e4)},methods:{handleScroll(e){this.isScrolled=window.scrollY!==0},spawnDog(){this.SpawnDog=!this.SpawnDog,console.log(this.SpawnDog)},somo(){}}},eo=r("div",{class:"containerForCat move hidden md:block"},[r("div",{class:"cat walking"})],-1),to={class:"flex justify-center items-center px-4 py-8 md:px-6 md:py-16 mb-0"},oo={ref:"mic",class:"flex absolute sm:scale-75 sm:-left-8 lg:scale-100 lg:left-40 xl:left-72 right-10"},no=r("span",{style:{color:"#B0A695"}},"S",-1),ao=R('<div class="hidden md:block absolute sm:scale-50 sm:-right-36 lg:scale-75 lg:right-8 xl:right-24 xl:scale-100 border-none border-black"><ul class="flex space-x-20 font-mono text-3xl"><li><a href="article" class="">Article</a></li><li><a href="#" class="">Tutorial</a></li><li><a href="about" class="">About</a></li><li><a href="#" class="">Categories</a></li></ul></div>',1),so={class:"md:hidden mr-80"},lo={key:0,class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},io={key:1,class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},ro={class:"md:hidden static right-0 top-20 bg-white shadow-lg w-full animate-fade-right"},co=R('<ul class="py-2 animate-fade-down font-Playpen font-bold"><li><a href="article" class="block px-8 py-2 text-sm text-gray-800 hover:bg-gray-200">Article</a></li><li><a href="#" class="block px-8 py-2 text-sm text-gray-800 hover:bg-gray-200">Tutorial</a></li><li><a href="about" class="block px-8 py-2 text-sm text-gray-800 hover:bg-gray-200">About</a></li><li><a href="#" class="block px-8 py-2 text-sm text-gray-800 hover:bg-gray-200">Categories</a></li></ul>',1),uo=[co],mo={key:0,id:"somoboss"},go={ref:"dogorigin",src:ge,class:"scale-90 md:scale-100 move-samo absolute -bottom-6 md:bottom-0",style:{scale:"-1 1"}},fo={ref:"dogshake",src:Xt,class:"scale-90 md:scale-100 move-samo-dog absolute -bottom-6 md:bottom-0",style:{scale:"-1 1"}},po={key:1,id:"somoboss2"},vo={ref:"dogorigin",src:ge,class:"scale-90 md:scale-100 move-samo-run1 absolute -bottom-6 md:bottom-0",style:{scale:"-1 1"}},ho={ref:"dogshake",src:Pt,class:"scale-90 md:scale-100 move-samo-run2 absolute -bottom-6 md:bottom-0",style:{scale:"-1 1"}};function bo(e,t,n,o,a,u){const c=be,l=ne,m=Zt;return A(),M("div",{ref:"navigationBoss",class:V(["border-b-4 border-gray-300 bg-gray-200 overflow-hidden border-solid duration-200 relative",{"md:py-10":!a.isScrolled,"bg-white":a.isScrolled}])},[eo,r("div",to,[r("div",oo,[b(c,{to:"/",class:"NuxtLink"},{default:ae(()=>[r("p",{ref:"name",class:V(["font-Willfteka tracking-normal md:text-3xl font-extrabold text-2xl leading-relaxed md:hover:animate-bounce",{"xl:text-5xl":!a.isScrolled}]),style:{scale:"1.1 1"}},[no,Q("cott Lin's Blog ")],2)]),_:1})],512),ao,r("div",so,[r("button",{class:"p-2 flex items-center self-start focus:outline-none",onClick:t[0]||(t[0]=v=>a.isMobileMenuOpen=!a.isMobileMenuOpen)},[a.isMobileMenuOpen?(A(),M("svg",lo,[b(l,{name:"line-md:arrow-align-top",class:"text-2xl w-6 h-6"})])):(A(),M("svg",io,[b(l,{name:"line-md:align-right",class:"text-2xl w-6 h-6"})]))])])]),ke(r("div",ro,uo,512),[[je,a.isMobileMenuOpen]]),b(m,{ref:"doggy",class:"hidden md:block move-dog dog"},null,512),a.samoOrigin?(A(),M("div",mo,[r("img",go,null,512),r("img",fo,null,512)])):(A(),M("div",po,[r("img",vo,null,512),r("img",ho,null,512)]))],2)}const yo=U($t,[["render",bo]]),S=Ae(J.ui.strategy,J.ui.input,qe),Ao=Ee({components:{UIcon:se},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>S.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(S.size).includes(e)}},color:{type:String,default:()=>S.default.color,validator(e){return[...J.ui.colors,...Object.keys(S.color)].includes(e)}},variant:{type:String,default:()=>S.default.variant,validator(e){return[...Object.keys(S.variant),...Object.values(S.color).flatMap(t=>Object.keys(t))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur"],setup(e,{emit:t,slots:n}){const{ui:o,attrs:a}=ze("input",K(e,"ui"),S,K(e,"class")),{size:u,rounded:c}=_e({ui:o,props:e}),{emitFormBlur:l,emitFormInput:m,size:v,color:d,inputId:f,name:h}=De(e,S),g=w(()=>u.value||v.value),y=O(Me({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),k=O(null),j=()=>{var p;e.autofocus&&((p=k.value)==null||p.focus())},I=p=>{y.value.trim&&(p=p.trim()),(y.value.number||e.type==="number")&&(p=xe(p)),t("update:modelValue",p),m()},C=p=>{y.value.lazy||I(p.target.value)},_=p=>{const q=p.target.value;y.value.lazy&&I(q),y.value.trim&&(p.target.value=q.trim())},T=p=>{l(),t("blur",p)};Ve(()=>{setTimeout(()=>{j()},e.autofocusDelay)});const i=w(()=>{var q,Y;const p=((Y=(q=o.value.color)==null?void 0:q[d.value])==null?void 0:Y[e.variant])||o.value.variant[e.variant];return Be(z(o.value.base,c.value,o.value.placeholder,o.value.size[g.value],e.padded?o.value.padding[g.value]:"p-0",p==null?void 0:p.replaceAll("{color}",d.value),(s.value||n.leading)&&o.value.leading.padding[g.value],(x.value||n.trailing)&&o.value.trailing.padding[g.value]),e.inputClass)}),s=w(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),x=w(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),E=w(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),F=w(()=>e.loading&&!s.value?e.loadingIcon:e.trailingIcon||e.icon),fe=w(()=>z(o.value.icon.leading.wrapper,o.value.icon.leading.pointer,o.value.icon.leading.padding[g.value])),pe=w(()=>z(o.value.icon.base,J.ui.colors.includes(d.value)&&o.value.icon.color.replaceAll("{color}",d.value),o.value.icon.size[g.value],e.loading&&"animate-spin")),ve=w(()=>z(o.value.icon.trailing.wrapper,o.value.icon.trailing.pointer,o.value.icon.trailing.padding[g.value])),he=w(()=>z(o.value.icon.base,J.ui.colors.includes(d.value)&&o.value.icon.color.replaceAll("{color}",d.value),o.value.icon.size[g.value],e.loading&&!s.value&&"animate-spin"));return{ui:o,attrs:a,name:h,inputId:f,input:k,isLeading:s,isTrailing:x,inputClass:i,leadingIconName:E,leadingIconClass:pe,leadingWrapperIconClass:fe,trailingIconName:F,trailingIconClass:he,trailingWrapperIconClass:ve,onInput:C,onChange:_,onBlur:T}}}),Mo=["id","name","value","type","required","placeholder","disabled"];function xo(e,t,n,o,a,u){const c=se;return A(),M("div",{class:V(e.ui.wrapper)},[r("input",Ce({id:e.inputId,ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled||e.loading,class:["form-input",e.inputClass]},e.attrs,{onInput:t[0]||(t[0]=(...l)=>e.onInput&&e.onInput(...l)),onBlur:t[1]||(t[1]=(...l)=>e.onBlur&&e.onBlur(...l)),onChange:t[2]||(t[2]=(...l)=>e.onChange&&e.onChange(...l))}),null,16,Mo),H(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(A(),M("span",{key:0,class:V(e.leadingWrapperIconClass)},[H(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[b(c,{name:e.leadingIconName,class:V(e.leadingIconClass)},null,8,["name","class"])])],2)):N("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(A(),M("span",{key:1,class:V(e.trailingWrapperIconClass)},[H(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[b(c,{name:e.trailingIconName,class:V(e.trailingIconClass)},null,8,["name","class"])])],2)):N("",!0)],2)}const wo=U(Ao,[["render",xo]]),Io={},So=r("p",{class:"text-white pb-2 font-Chinese text-xl antialiased"},[Q(" 你可以在這裡輸入你的信箱"),r("br"),Q("我會透過mail聯絡您 ")],-1),ko=r("p",{class:"text-white antialiased"},[Q(" If you want to contact the author,"),r("br"),Q(" you can enter your email here. ")],-1);function jo(e,t){const n=Te,o=wo,a=Je;return A(),M("div",null,[b(n,{src:"data:image/jpeg;base64,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",size:"md",class:"pb-8"}),b(a,{size:"xl"},{default:ae(()=>[So,b(o,{placeholder:"哩ㄟ信箱@example.com",icon:"i-heroicons-envelope",class:"w-80"}),ko]),_:1})])}const Eo=U(Io,[["render",jo]]),Vo=""+new URL("facebook.c04c3c48.png",import.meta.url).href,Co=""+new URL("Googlell.142b6195.png",import.meta.url).href,_o=""+new URL("twitter.77a4de27.png",import.meta.url).href,To=""+new URL("instagram.22f15b3d.png",import.meta.url).href,qo={},zo={class:"h-1/3 bg-[url('~/assets/images/starnight.jpg')] bg-fixed bg-cover text-white pb-10"},Bo={class:"flex flex-row container px-4 sm:px-6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-1 sm:gap-20 sm:scale-75 lg:gap-36 lg:scale-90 xl:scale-100"},Do=R('<div class="footer-left col-span-1 sm:col-span-2 mt-16"><h4 class="text-lg font-bold mb-4 inline-block"><p class="border-b-2 border-cyan-400 hover:border-purple-400"> 我的社交帳號(My Social) </p></h4><div class="flex flex-row gap-2 md:gap-4"><div class="flex flex-row gap-2"><a href="#"><img src="'+Vo+'" class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"></a><a href="#"><img src="'+Co+'" class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"></a><a href="#"><img src="'+_o+'" class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"></a><a href="https://www.instagram.com/lin_michi50/" class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"><img src="'+To+'"></a></div></div><h4 class="text-sm font-light mt-14 animate-text hover:bg-gradient-to-r hover:from-teal-500 hover:via-purple-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent font-black hover:text-xl hover:font-extrabold transiton-300"> This website is managed by LIN_MICKEY </h4></div><div class="footer-mid col-span-1 mt-16 justify-center flex items-center"><h4 class="text-lg font-bold mb-4 inline-block text-center sm:mt-16"><p class=""> © Copyright 1234 </p><p class="text-xs font-serif font-extralight text-slate-300"> ALL rights reserved. Powered by the <span class="text-white text-sm">ScottLin</span></p></h4></div>',2),Jo={class:"footer-right hidden sm:block border-l-8 border-double pl-4 sm:pl-14 sm:mr-0 xl:ml-8 mt-8 h-4/5"},Oo={class:"flex flex-col gap-2 whitespace-nowrap mt-6"};function Qo(e,t){const n=Eo;return A(),M("div",zo,[r("div",Bo,[Do,r("div",Jo,[r("div",Oo,[b(n)])])])])}const Uo=U(qo,[["render",Qo]]);const Fo={class:""},Go={class:"//bg-[url('https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg')] bg-fixed ddbody"},Wo={class:"min-h-screen md:flex md:justify-center md:mt-30 sm:scale-75 lg:scale-100"},$o={__name:"default",setup(e){const{x:t,y:n}=Re();return(o,a)=>{const u=yo,c=ne,l=Uo;return A(),M("div",{class:"bg-white flex flex-col overflow-hidden relative",onScroll:a[0]||(a[0]=(...m)=>o.checkScrollState&&o.checkScrollState(...m))},[r("div",Fo,[b(u,{class:"md:fixed md:w-screen md:z-50"}),r("div",{class:"absolute rounded-full hidden md:block -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50",style:Z({left:`${D(t)}px`,top:`${D(n)}px`,width:"40px",height:"40px"})},[b(c,{name:"line-md:sunny-outline-twotone-loop",width:"50",height:"50"})],4),r("div",{class:"absolute rounded-full hidden -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50",style:Z({left:`${D(t)}px`,top:`${D(n)}px`,width:"40px",height:"40px",background:"",border:"1px solid black"})},null,4),r("div",Go,[r("div",Wo,[H(o.$slots,"default")])]),b(l)])],32)}}};export{$o as default};
