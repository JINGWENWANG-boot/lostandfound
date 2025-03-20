import{c as h,r as b}from"./request-6080a32f.js";import{r as f}from"./index-30a7062a.js";import{bc as u}from"./index-756fa734.js";import{V as c,r as V,a7 as i,y as P,z as v,A as l,O as k,u as g,P as o,I as t,M as _}from"./runtime-core.esm-bundler-94adbe8c.js";import"./runtime-dom.esm-bundler-ffed9dc3.js";const q={class:"wrapper"},E={style:{margin:"150px auto","background-color":"#FF9900",width:"400px",height:"430px",padding:"20px","border-radius":"10px"}},M={style:{margin:"20px 0","text-align":"center","font-size":"24px",color:"#ffffff"}},R=l("div",{style:{"text-align":"center"}},[l("a",{style:{"text-decoration":"none",color:"#ffffff","margin-left":"20px"},href:"/front/home"},"Front desk")],-1),z={__name:"Register-member",setup(B){const e=c({}),w=c({username:[{required:!0,message:"Please enter your login account",trigger:"blur"}],email:[{required:!0,message:"Please enter your email address",trigger:"blur"}],password:[{required:!0,message:"Please enter your password",trigger:"blur"},{min:3,max:20,message:"The password length is between 3 and 20 characters.",trigger:"blur"}],confirmPassword:[{required:!0,message:"Please confirm your password",trigger:"blur"},{min:3,max:20,message:"The password length is between 3 and 20 characters.",trigger:"blur"}]}),d=V(),y=()=>{d.value.validate(m=>{m&&(e.password!==e.confirmPassword&&u.warning("The two passwords do not match"),e.role="MEMBER",b.post("/register",e).then(r=>{r.code==="200"?(u.success("Successful registration"),f.push("/login")):u.error(r.msg)}))})};return(m,r)=>{const n=i("el-input"),a=i("el-form-item"),p=i("el-button"),x=i("el-form");return P(),v("div",q,[l("div",E,[l("div",M,[l("b",null,k(g(h).projectName),1)]),o(x,{ref_key:"ruleFormRef",ref:d,model:e,rules:w,size:"large","status-icon":""},{default:t(()=>[o(a,{prop:"username"},{default:t(()=>[o(n,{modelValue:e.username,"onUpdate:modelValue":r[0]||(r[0]=s=>e.username=s),placeholder:"Please enter your login account"},null,8,["modelValue"])]),_:1}),o(a,{prop:"email"},{default:t(()=>[o(n,{modelValue:e.email,"onUpdate:modelValue":r[1]||(r[1]=s=>e.email=s),placeholder:"Please enter your email address"},null,8,["modelValue"])]),_:1}),o(a,{prop:"password"},{default:t(()=>[o(n,{modelValue:e.password,"onUpdate:modelValue":r[2]||(r[2]=s=>e.password=s),"show-password":"",placeholder:"Please enter your password"},null,8,["modelValue"])]),_:1}),o(a,{prop:"confirmPassword"},{default:t(()=>[o(n,{modelValue:e.confirmPassword,"onUpdate:modelValue":r[3]||(r[3]=s=>e.confirmPassword=s),"show-password":"",placeholder:"Please confirm your password"},null,8,["modelValue"])]),_:1}),o(a,{style:{margin:"10px 0","text-align":"right"}},{default:t(()=>[o(p,{type:"primary",autocomplete:"off",onClick:y},{default:t(()=>[_("register")]),_:1}),o(p,{type:"info",autocomplete:"off",onClick:r[4]||(r[4]=s=>g(f).push("/login"))},{default:t(()=>[_("Log in")]),_:1})]),_:1})]),_:1},8,["model","rules"]),R])])}}};export{z as default};
