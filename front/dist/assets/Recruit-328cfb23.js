import{r as p}from"./request-6080a32f.js";import{u as B,r as _}from"./index-30a7062a.js";import{r as f,V as D,a7 as r,y as s,z as l,A as t,P as i,I as d,F as h,a0 as y,H as w,M as z,O as m,u as L,L as R}from"./runtime-core.esm-bundler-94adbe8c.js";const $={style:{width:"100%"}},j=["href"],q=["src"],A={style:{width:"85%",margin:"0 auto","margin-bottom":"50px"}},H=t("div",{style:{"padding-bottom":"15px","margin-top":"20px","text-align":"left"}},[t("span",{style:{"font-size":"14px","margin-right":"20px"}},"Current location: Home> Lost and found information")],-1),Q={style:{"padding-bottom":"15px","border-bottom":"3px solid #FF9900","text-align":"left",display:"flex"}},E=t("span",{style:{"font-weight":"bold","font-size":"24px",float:"left",flex:"3",color:"#FF9900"}},"Lost and found information",-1),I={style:{"margin-top":"10px",float:"right",flex:"1"}},M={style:{display:"flex"}},P={style:{"padding-bottom":"15px","margin-top":"20px","text-align":"left","line-height":"30px",flex:"1","margin-right":"10px"}},T={style:{"margin-right":"10px"},class:"categorybar"},G=["onClick"],J={style:{flex:"4"}},W=["onClick","src"],X={style:{"font-weight":"bold"}},Y={style:{margin:"5px 0","text-align":"right"}},Z={key:0,style:{color:"red","font-size":"18px","font-weight":"bold",float:"right"}},tt={class:"page"},rt={__name:"Recruit",setup(et){B().getUser;const u=f(1),g=f(8),x=f(0);let v=_.currentRoute.value.query.name;const e=D({tableData:[]});e.searchKey="";const c=n=>{e.searchKey!=null&&e.searchKey!=""&&(v=e.searchKey),p.get("/front/recruit/page",{params:{name:v,pageNum:u.value,pageSize:g.value,category_id:e.category_id}}).then(a=>{e.tableData=a.data.records,x.value=a.data.total})};c(),p.get("/front/banner/list").then(n=>{e.rotationList=n.data,e.rotationList=e.rotationList.filter(a=>a.indexRadio==="NO")}),e.categoryOptions=[],p.get("/front/category/list").then(n=>e.categoryOptions=n.data),e.userOptions=[],p.get("/front/user/list").then(n=>e.userOptions=n.data),e.category_id="";const b=n=>{e.category_id=n,n=="all"&&(e.category_id=""),c()};e.searchKey="";const V=()=>{c()};return(n,a)=>{const K=r("el-carousel-item"),N=r("el-carousel"),O=r("el-input"),k=r("el-button"),S=r("el-col"),F=r("el-row"),U=r("el-pagination");return s(),l("div",null,[t("div",null,[t("div",$,[i(N,{interval:5e3,arrow:"always",height:"200px"},{default:d(()=>[(s(!0),l(h,null,y(e.rotationList,o=>(s(),w(K,{key:o},{default:d(()=>[t("a",{href:o.url,target:"_blank"},[t("img",{src:o.img,alt:"",style:{width:"100%",height:"100%"}},null,8,q)],8,j)]),_:2},1024))),128))]),_:1})])]),t("div",A,[H,t("div",Q,[E,t("div",I,[i(O,{style:{width:"200px"},placeholder:"QueryLost and found information",modelValue:e.searchKey,"onUpdate:modelValue":a[0]||(a[0]=o=>e.searchKey=o),clearable:""},null,8,["modelValue"]),i(k,{style:{"margin-left":"5px"},onClick:V,size:"large"},{default:d(()=>[z("Query")]),_:1})])]),t("div",M,[t("div",P,[t("div",T,[t("a",{href:"javascript:void(0)",onClick:a[1]||(a[1]=o=>b("all"))},"All Lost and found information")]),(s(!0),l(h,null,y(e.categoryOptions,o=>(s(),l("div",{key:o.id,style:{"margin-right":"10px","border-top":"1px solid #ffffff"},class:"categorybar"},[t("a",{href:"javascript:void(0)",onClick:C=>b(o.id)},m(o.name),9,G)]))),128))]),t("div",J,[t("div",null,[i(F,{gutter:10},{default:d(()=>[(s(!0),l(h,null,y(e.tableData,o=>(s(),w(S,{span:6,key:o.id,style:{"margin-top":"20px"}},{default:d(()=>[t("div",null,[t("img",{onClick:C=>L(_).push("/front/recruit-detail?id="+o.id),src:o.img,alt:"",style:{width:"95%",height:"180px",cursor:"pointer"}},null,8,W)]),t("div",null,[t("span",X,m(o.name),1)]),t("div",Y,[i(k,{type:"primary",size:"small",onClick:C=>L(_).push("/front/recruit-detail?id="+o.id),style:{float:"left"}},{default:d(()=>[z("check the details")]),_:2},1032,["onClick"]),o.price?(s(),l("span",Z,"￥"+m(o.price),1)):R("",!0)])]),_:2},1024))),128))]),_:1})]),t("div",tt,[i(U,{"prev-text":"previous","next-text":"next",onCurrentChange:c,onSizeChange:c,"current-page":u.value,"onUpdate:current-page":a[2]||(a[2]=o=>u.value=o),"page-size":g.value,"onUpdate:page-size":a[3]||(a[3]=o=>g.value=o),"page-sizes":[4,8,12,16],layout:"prev, pager, next",total:x.value},null,8,["current-page","page-size","total"])])])])])])}}};export{rt as default};
