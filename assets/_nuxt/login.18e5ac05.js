import{e as c}from"./entry.bd0bd1a9.js";import{d as f,a as o,F as w,G as v,K as e,ag as i,ah as r,u,q as d}from"./swiper-vue.c555b90e.js";const g={class:"mt-56 flex flex-col"},b={class:""},_={class:"mt-4"},B=f({__name:"login",setup(k){const m=c(),a=o(""),t=o("");async function p(){const{error:l}=await m.auth.signInWithPassword({email:a.value,password:t.value});alert(l?l.message:"登入成功")}return(l,s)=>(w(),v("div",g,[e("div",b,[e("button",{onClick:s[0]||(s[0]=()=>{}),class:"mr-4"}," Sign In with E-Mail "),i(e("input",{"onUpdate:modelValue":s[1]||(s[1]=n=>d(a)?a.value=n:null),type:"email",class:"w-96"},null,512),[[r,u(a)]])]),e("div",_,[e("button",{onClick:s[2]||(s[2]=()=>{}),class:"mr-4"}," password "),i(e("input",{"onUpdate:modelValue":s[3]||(s[3]=n=>d(t)?t.value=n:null),class:"w-96"},null,512),[[r,u(t)]])]),e("button",{onClick:p,class:"bg-green-500 mt-2"},"送出")]))}});export{B as default};