import{_ as I,m as Z,a as M,d as K,t as Q,l as W,u as X,c as $,g as ee}from"./entry.3537de88.js";import{u as te,t as ae,a as oe}from"./select.0bcaa353.js";import{u as ne,a as re,_ as le}from"./FormGroup.da5aa6e6.js";import{q as se,d as J,t as A,a as D,_ as F,w as ie,n as de,c as ue,F as p,G as w,K as m,M as ce,$ as U,H as V,a0 as b,p as B,Z as q,Y as P,P as h,a1 as ge,a2 as me,I as fe,J as he,a3 as ve,O as z,u as be,N as H,a4 as L}from"./swiper-vue.14f7f984.js";const S=new Map;function pe(e){const t=se();function o(s){var c;const n=S.get(e)||new Set;n.add(s),S.set(e,n);const i=()=>r(s);return(c=t==null?void 0:t.cleanups)==null||c.push(i),i}function l(s){function c(...n){r(c),s(...n)}return o(c)}function r(s){const c=S.get(e);c&&(c.delete(s),c.size||a())}function a(){S.delete(e)}function d(s,c){var n;(n=S.get(e))==null||n.forEach(i=>i(s,c))}return{on:o,once:l,off:r,emit:d,reset:a}}const y=Z(M.ui.strategy,M.ui.textarea,oe),ye=J({inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rows:{type:Number,default:3},autoresize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},resize:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(y.size).includes(e)}},color:{type:String,default:()=>y.default.color,validator(e){return[...M.ui.colors,...Object.keys(y.color)].includes(e)}},variant:{type:String,default:()=>y.default.variant,validator(e){return[...Object.keys(y.variant),...Object.values(y.color).flatMap(t=>Object.keys(t))].includes(e)}},textareaClass:{type:String,default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur"],setup(e,{emit:t}){const{ui:o,attrs:l}=te("textarea",A(e,"ui"),y,A(e,"class")),{emitFormBlur:r,emitFormInput:a,inputId:d,color:s,size:c,name:n}=ne(e,y),i=D(K({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),g=D(null),v=()=>{var u;e.autofocus&&((u=g.value)==null||u.focus())},f=()=>{if(e.autoresize){if(!g.value)return;g.value.rows=e.rows;const u=window.getComputedStyle(g.value),_=parseInt(u.paddingTop),N=parseInt(u.paddingBottom),R=_+N,Y=parseInt(u.lineHeight),{scrollHeight:G}=g.value,j=(G-R)/Y;j>e.rows&&(g.value.rows=j)}},x=u=>{i.value.trim&&(u=u.trim()),i.value.number&&(u=W(u)),t("update:modelValue",u),a()},T=u=>{f(),i.value.lazy||x(u.target.value)},E=u=>{const _=u.target.value;i.value.lazy&&x(_),i.value.trim&&(u.target.value=_.trim())},O=u=>{t("blur",u),r()};F(()=>{setTimeout(()=>{v()},e.autofocusDelay)}),ie(()=>e.modelValue,()=>{de(f)}),F(()=>{setTimeout(()=>{v(),f()},100)});const k=ue(()=>{var _,N;const u=((N=(_=o.value.color)==null?void 0:_[s.value])==null?void 0:N[e.variant])||o.value.variant[e.variant];return ae(Q(o.value.base,o.value.rounded,o.value.placeholder,o.value.size[c.value],e.padded?o.value.padding[c.value]:"p-0",u==null?void 0:u.replaceAll("{color}",s.value),!e.resize&&"resize-none"),e.textareaClass)});return{ui:o,attrs:l,name:n,inputId:d,textarea:g,textareaClass:k,onInput:T,onChange:E,onBlur:O}}}),De=["id","value","name","rows","required","disabled","placeholder"];function _e(e,t,o,l,r,a){return p(),w("div",{class:V(e.ui.wrapper)},[m("textarea",ce({id:e.inputId,ref:"textarea",value:e.modelValue,name:e.name,rows:e.rows,required:e.required,disabled:e.disabled,placeholder:e.placeholder,class:["form-textarea",e.textareaClass]},e.attrs,{onInput:t[0]||(t[0]=(...d)=>e.onInput&&e.onInput(...d)),onBlur:t[1]||(t[1]=(...d)=>e.onBlur&&e.onBlur(...d)),onChange:t[2]||(t[2]=(...d)=>e.onChange&&e.onChange(...d))}),null,16,De),U(e.$slots,"default")],2)}const we=I(ye,[["render",_e]]);class C extends Error{constructor(t){super(t),this.message=t,Object.setPrototypeOf(this,C.prototype)}}const xe=J({props:{schema:{type:Object,default:void 0},state:{type:Object,required:!0},validate:{type:Function,default:()=>[]},validateOn:{type:Array,default:()=>["blur","input","change","submit"]}},emits:["submit","error"],setup(e,{expose:t,emit:o}){const l=pe(`form-${re()}`);l.on(async n=>{var i;n.type!=="submit"&&((i=e.validateOn)!=null&&i.includes(n.type))&&await s(n.path,{silent:!0})});const r=D([]);B("form-errors",r),B("form-events",l);const a=D({});B("form-inputs",a);async function d(){let n=await e.validate(e.state);if(e.schema)if(Ne(e.schema))n=n.concat(await Ce(e.state,e.schema));else if(Te(e.schema))n=n.concat(await Se(e.state,e.schema));else if(Ee(e.schema))n=n.concat(await Be(e.state,e.schema));else if(ze(e.schema))n=n.concat(await Me(e.state,e.schema));else throw new Error("Form validation failed: Unsupported form schema");return n}async function s(n,i={silent:!1}){if(n){const g=r.value.filter(f=>f.path!==n),v=(await d()).filter(f=>f.path===n);r.value=g.concat(v)}else r.value=await d();if(!i.silent&&r.value.length>0)throw new C(`Form validation failed: ${JSON.stringify(r.value,null,2)}`);return e.state}async function c(n){var i;try{(i=e.validateOn)!=null&&i.includes("submit")&&await s();const g={...n,data:e.state};o("submit",g)}catch(g){if(!(g instanceof C))throw g;const v={...n,errors:r.value.map(f=>({...f,id:a.value[f.path]}))};o("error",v)}}return t({validate:s,errors:r,setErrors(n,i){r.value=n,i?r.value=r.value.filter(g=>g.path!==i).concat(n):r.value=n},getErrors(n){return n?r.value.filter(i=>i.path===n):r.value},clear(n){n?r.value=r.value.filter(i=>i.path===n):r.value=[]}}),{onSubmit:c}}});function Te(e){return e.validate&&e.__isYupSchema__}function ke(e){return e.inner!==void 0}async function Se(e,t){try{return await t.validate(e,{abortEarly:!1}),[]}catch(o){if(ke(o))return o.inner.map(l=>({path:l.path??"",message:l.message}));throw o}}function Ne(e){return e.parse!==void 0}async function Ce(e,t){const o=await t.safeParseAsync(e);return o.success===!1?o.error.issues.map(l=>({path:l.path.join("."),message:l.message})):[]}function Ee(e){return e.validateAsync!==void 0&&e.id!==void 0}function Oe(e){return e.isJoi===!0}async function Be(e,t){try{return await t.validateAsync(e,{abortEarly:!1}),[]}catch(o){if(Oe(o))return o.details.map(l=>({path:l.path.join("."),message:l.message}));throw o}}function ze(e){return e._parse!==void 0}async function Me(e,t){const o=await t._parse(e);return o.issues?o.issues.map(l=>({path:l.path.map(r=>r.key).join("."),message:l.message})):[]}function Ve(e,t,o,l,r,a){return p(),w("form",{onSubmit:t[0]||(t[0]=b((...d)=>e.onSubmit&&e.onSubmit(...d),["prevent"]))},[U(e.$slots,"default")],32)}const Ie=I(xe,[["render",Ve]]),je=["id"],Ae=m("svg",{class:"w-2 h-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[m("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),Fe=m("span",{class:"sr-only"},"Remove badge",-1),He=[Ae,Fe],Le={__name:"TagCompo",props:{id:Number,bgcolor:String,decolor:String,name:String},setup(e){const t=e;return(o,l)=>(p(),w("span",{id:t.id,draggable:"true",class:V(["inline-flex items-center px-2 py-1 me-2 text-sm font-medium rounded",e.bgcolor])},[q(P(t.name)+" ",1),m("button",{type:"button",class:V(["inline-flex items-center p-1 ms-2 text-sm bg-transparent rounded-sm hover:animate-spin",e.decolor]),"data-dismiss-target":"#badge-dismiss-default","aria-label":"Remove",onClick:l[0]||(l[0]=r=>o.$emit("deleteTag",t.id.toString())),onDblclick:l[1]||(l[1]=b(r=>o.$emit("doNothing"),["stop"]))},He,34)],10,je))}},Je=Le;const Ue={data(){return{selectedCategories:new Map}},methods:{dragStart(e){const t=e.target;e.dataTransfer.setData("text/plain",t.outerHTML),e.dataTransfer.setData("text/id",t.id)},dragOver(e){e.preventDefault()},drop(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),o=e.dataTransfer.getData("text/id"),l={id:o,html:t};this.selectedCategories.set(o,l),console.log(this.selectedCategories)},deleteTag(e){console.log(e),this.selectedCategories.delete(e)},add(e){const t=e.target,o=t.id;console.log("id:",o);const l={id:o,html:t.outerHTML};this.selectedCategories.set(o,l)},donothing(){}}},qe=e=>(fe("data-v-7dd74d10"),e=e(),he(),e),Pe={class:"mt-4 flex flex-col space-y-4 w-1/2"},Re={class:"flex flex-col space-y-2 border-2 border-blue-700"},Ye=qe(()=>m("div",null,"文章分類",-1)),Ge={class:"flex space-x-2"},Ze={class:"flex space-x-2"},Ke={class:"flex flex-col space-y-2 mt-4"},Qe={class:"selected-categories"},We=["innerHTML"];function Xe(e,t,o,l,r,a){const d=Je;return p(),w("div",null,[m("div",Pe,[m("div",Re,[Ye,m("div",Ge,[h(d,{id:1,bgcolor:"bg-blue-500 text-white",decolor:"text-white hover:bg-blue-200 hover:text-blue-900",name:"Facebook",onDeleteTag:a.deleteTag,onDoNothing:a.donothing,onDblclick:b(a.add,["stop"]),onDragstart:a.dragStart},null,8,["onDeleteTag","onDoNothing","onDblclick","onDragstart"]),h(d,{id:2,bgcolor:"bg-green-400 text-black",decolor:"hover:bg-green-700 hover:text-green-300 text-white",name:"Vue",onDeleteTag:a.deleteTag,onDoNothing:a.donothing,onDblclick:b(a.add,["stop"]),onDragstart:a.dragStart},null,8,["onDeleteTag","onDoNothing","onDblclick","onDragstart"]),h(d,{id:3,bgcolor:"bg-red-600 text-yellow-300 font-black",decolor:"hover:bg-yellow-300 hover:text-black-500 text-black",name:"Macdonald",onDeleteTag:a.deleteTag,onDoNothing:a.donothing,onDblclick:b(a.add,["stop"]),onDragstart:a.dragStart},null,8,["onDeleteTag","onDoNothing","onDblclick","onDragstart"]),h(d,{id:4,bgcolor:"bg-green-500 text-white",decolor:"hover:bg-green-200 hover:text-green-900",name:"Nuxt",onDeleteTag:a.deleteTag,onDoNothing:a.donothing,onDblclick:b(a.add,["stop"]),onDragstart:a.dragStart},null,8,["onDeleteTag","onDoNothing","onDblclick","onDragstart"]),h(d,{id:5,bgcolor:"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white",decolor:"hover:bg-pink-500 hover:text-white",name:"instagram",onDeleteTag:a.deleteTag,onDoNothing:a.donothing,onDblclick:b(a.add,["stop"]),onDragstart:a.dragStart},null,8,["onDeleteTag","onDoNothing","onDblclick","onDragstart"])]),m("div",Ze,[h(d,{id:6,bgcolor:"bg-indigo-100",name:"Nuxt",onDeleteTag:a.deleteTag,onDoNothing:a.donothing,onDblclick:b(a.add,["stop"]),onDragstart:a.dragStart},null,8,["onDeleteTag","onDoNothing","onDblclick","onDragstart"]),h(d,{id:7,bgcolor:"bg-purple-100",name:"Nuxt",onDeleteTag:a.deleteTag,onDoNothing:a.donothing,onDblclick:b(a.add,["stop"]),onDragstart:a.dragStart},null,8,["onDeleteTag","onDoNothing","onDblclick","onDragstart"]),h(d,{id:8,bgcolor:"bg-pink-100",name:"Nuxt",onDeleteTag:a.deleteTag,onDoNothing:a.donothing,onDblclick:b(a.add,["stop"]),onDragstart:a.dragStart},null,8,["onDeleteTag","onDoNothing","onDblclick","onDragstart"]),h(d,{id:9,bgcolor:"bg-blue-100",name:"Nuxt",onDeleteTag:a.deleteTag,onDoNothing:a.donothing,onDblclick:b(a.add,["stop"]),onDragstart:a.dragStart},null,8,["onDeleteTag","onDoNothing","onDblclick","onDragstart"])])])]),m("div",Ke,[m("div",{class:"dropzone bg-gray-200 p-4 rounded cursor-pointer",onDragover:t[0]||(t[0]=(...s)=>a.dragOver&&a.dragOver(...s)),onDrop:t[1]||(t[1]=(...s)=>a.drop&&a.drop(...s))},[q(" 放置區域 "),m("div",Qe,[(p(!0),w(ge,null,me(r.selectedCategories.values(),s=>(p(),w("div",{key:s.id,class:"selected-category flex space-x-2"},[m("div",{innerHTML:s.html},null,8,We)]))),128))])],32)])])}const $e=I(Ue,[["render",Xe],["__scopeId","data-v-7dd74d10"]]),et={class:"bg-white py-24 w-full mt-40"},tt={class:""},at=m("h1",{class:"text-6xl font-semibold text-yellow-400"}," 大家好！我是 pakkkk ",-1),st={__name:"article",async setup(e){let t,o;const l=X(),r=$(l,"Article"),a=([t,o]=ve(()=>ee(r)),t=await t,o(),t),d=Array.from(a.docs).map(v=>({...v.data(),id:v.id})),s=D(!1),c=D(null),n=()=>{s.value=!s.value,c.value.innerText=s.value?"Close":"Create Article"},i=D(""),g=D("");return(v,f)=>{const x=we,T=le,E=Ie,O=$e;return p(),w("div",et,[m("div",tt,[at,m("button",{ref_key:"openA",ref:c,class:"border-4 border-amber-700 border-dashed text-amber-700 hover:text-black hover:border-black font-Playpen font-bold py-2 rounded inline-flex items-center mb-4 justify-center",style:{width:"210px",height:"55px"},onClick:n}," - Create Article - ",512),h(E,{schema:v.schema,state:v.state,class:"space-y-4 border-2 border-black w-1/2",onSubmit:v.onSubmit},{default:z(()=>[h(T,{label:"文章標題"},{default:z(()=>[s.value?(p(),H(x,{key:0,modelValue:i.value,"onUpdate:modelValue":f[0]||(f[0]=k=>i.value=k),rows:1,variant:"outline",class:"w-[300px] mb-4",color:"red",placeholder:"這裡輸入文章標題喔",autoresize:""},null,8,["modelValue"])):L("",!0)]),_:1}),h(T,{label:"建立文章內容"},{default:z(()=>[s.value?(p(),H(x,{key:0,modelValue:g.value,"onUpdate:modelValue":f[1]||(f[1]=k=>g.value=k),variant:"outline",class:"w-[500px]",color:"indigo",placeholder:"這裡輸入文章內容喔",autoresize:""},null,8,["modelValue"])):L("",!0)]),_:1}),h(T,{label:"文章分類清單"})]),_:1},8,["schema","state","onSubmit"]),h(O),m("div",null,[m("pre",null,P(be(d)[0]),1)])])])}}};export{st as default};