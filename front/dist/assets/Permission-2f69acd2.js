import{r as y}from"./request-6080a32f.js";import{u as ee}from"./index-30a7062a.js";import{bc as f}from"./index-756fa734.js";import{V as B,r as k,a7 as n,y as s,z as F,A as g,u as U,H as d,I as t,P as o,M as m,L as p,K as D,F as oe,a0 as le,O as te,S}from"./runtime-core.esm-bundler-94adbe8c.js";import"./runtime-dom.esm-bundler-ffed9dc3.js";const ae={style:{margin:"10px 0"}},ne=g("span",{style:{"vertical-align":"middle"}}," Added ",-1),re={style:{margin:"10px 0"}},se={style:{"font-size":"14px","margin-left":"5px",top:"-3px"}},de={class:"dialog-footer"},_e={__name:"Permission",setup(ue){const l=B({tableData:[],form:{}}),M=k([]),O=r=>{M.value=r},b=()=>{y.get("/permission").then(r=>{l.tableData=r.data})};b();const c=k(!1),q=B({name:[{required:!0,message:"Please enter a name",trigger:"blur"}]}),V=k(),$=()=>{c.value=!0,S(()=>{V.value.resetFields(),l.form={type:1,orders:1}})},E=()=>{V.value.validate(r=>{r&&y.request({url:"/permission",method:l.form.id?"put":"post",data:l.form}).then(a=>{a.code==="200"?(f.success("save successfully"),c.value=!1,b()):f.error(a.msg)})})},T=r=>{y.request({url:"/permission",method:"put",data:r}).then(a=>{a.code==="200"?(f.success("Operation successful"),b()):f.error(a.msg)})},N=k([]);y.get("/dict?all=true").then(r=>{N.value=r.data});const z=r=>{c.value=!0,S(()=>{V.value.resetFields(),l.form=JSON.parse(JSON.stringify(r))})},H=r=>{y.delete("/permission/"+r).then(a=>{a.code==="200"?(f.success("Operation successful"),b()):f.error(a.msg)})},A=ee();A.getBearerToken;const w=A.getAuths,I=r=>{r.id===l.form.id&&(console.log(r),f.warning("A parent node cannot select itself"),S(()=>{l.form.p_id=null,console.log(l.form)}))};return(r,a)=>{const J=n("Plus"),C=n("el-icon"),_=n("el-button"),u=n("el-table-column"),P=n("el-tag"),L=n("el-switch"),R=n("el-popconfirm"),K=n("el-table"),x=n("el-radio"),j=n("el-radio-group"),i=n("el-form-item"),v=n("el-input"),G=n("el-input-number"),Q=n("el-option"),W=n("el-select"),X=n("el-tree-select"),Y=n("el-form"),Z=n("el-dialog");return s(),F("div",null,[g("div",ae,[U(w).includes("permission.add")?(s(),d(_,{key:0,type:"success",onClick:$},{default:t(()=>[o(C,{style:{"vertical-align":"middle"}},{default:t(()=>[o(J)]),_:1}),m(),ne]),_:1})):p("",!0)]),g("div",re,[o(K,{data:l.tableData,stripe:"",border:"","row-key":"id",onSelectionChange:O},{default:t(()=>[o(u,{type:"selection",width:"55"}),o(u,{prop:"id",label:"number"}),o(u,{prop:"name",label:"name"}),o(u,{prop:"path",label:"Access path"}),o(u,{prop:"page",label:"Page Path"}),o(u,{prop:"orders",label:"order"}),o(u,{prop:"icon",label:"icon"},{default:t(e=>[e.row.icon?(s(),d(C,{key:0},{default:t(()=>[(s(),d(D(e.row.icon)))]),_:2},1024)):p("",!0)]),_:1}),o(u,{prop:"auth",label:"Permissions"}),o(u,{prop:"p_id",label:"Parent"}),o(u,{prop:"type",label:"type"},{default:t(e=>[e.row.type===1?(s(),d(P,{key:0,type:"warning"},{default:t(()=>[m("Menu Contents")]),_:1})):p("",!0),e.row.type===2?(s(),d(P,{key:1},{default:t(()=>[m("Menu Page")]),_:1})):p("",!0),e.row.type===3?(s(),d(P,{key:2,type:"success"},{default:t(()=>[m("Page Button")]),_:1})):p("",!0)]),_:1}),o(u,{prop:"hide",label:"Is it hidden"},{default:t(e=>[o(L,{modelValue:e.row.hide,"onUpdate:modelValue":h=>e.row.hide=h,onChange:h=>T(e.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),o(u,{label:"operate",width:"180"},{default:t(e=>[U(w).includes("permission.edit")?(s(),d(_,{key:0,type:"primary",onClick:h=>z(e.row)},{default:t(()=>[m("edit")]),_:2},1032,["onClick"])):p("",!0),U(w).includes("permission.delete")?(s(),d(R,{key:1,title:"Confirm delete?",onConfirm:h=>H(e.row.id)},{reference:t(()=>[o(_,{type:"danger"},{default:t(()=>[m("delete")]),_:1})]),_:2},1032,["onConfirm"])):p("",!0)]),_:1})]),_:1},8,["data"])]),o(Z,{modelValue:c.value,"onUpdate:modelValue":a[9]||(a[9]=e=>c.value=e),title:"information",width:"40%"},{footer:t(()=>[g("span",de,[o(_,{onClick:a[8]||(a[8]=e=>c.value=!1)},{default:t(()=>[m("Cancel")]),_:1}),o(_,{type:"primary",onClick:E},{default:t(()=>[m(" save ")]),_:1})])]),default:t(()=>[o(Y,{ref_key:"ruleFormRef",ref:V,rules:q,model:l.form,"label-width":"80px",style:{padding:"0 20px"},"status-icon":""},{default:t(()=>[o(i,{prop:"type",label:"type"},{default:t(()=>[o(j,{modelValue:l.form.type,"onUpdate:modelValue":a[0]||(a[0]=e=>l.form.type=e)},{default:t(()=>[o(x,{label:1},{default:t(()=>[m("Menu Contents")]),_:1}),o(x,{label:2},{default:t(()=>[m("Menu Page")]),_:1}),o(x,{label:3},{default:t(()=>[m("Page Button")]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(i,{prop:"name",label:"name"},{default:t(()=>[o(v,{modelValue:l.form.name,"onUpdate:modelValue":a[1]||(a[1]=e=>l.form.name=e),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l.form.type===2?(s(),d(i,{key:0,prop:"path",label:"Access path"},{default:t(()=>[o(v,{modelValue:l.form.path,"onUpdate:modelValue":a[2]||(a[2]=e=>l.form.path=e),autocomplete:"off"},null,8,["modelValue"])]),_:1})):p("",!0),l.form.type===2?(s(),d(i,{key:1,prop:"page",label:"Page Path"},{default:t(()=>[o(v,{modelValue:l.form.page,"onUpdate:modelValue":a[3]||(a[3]=e=>l.form.page=e),autocomplete:"off"},null,8,["modelValue"])]),_:1})):p("",!0),l.form.type===1||l.form.type===2?(s(),d(i,{key:2,prop:"orders",label:"order"},{default:t(()=>[o(G,{modelValue:l.form.orders,"onUpdate:modelValue":a[4]||(a[4]=e=>l.form.orders=e),min:1},null,8,["modelValue"])]),_:1})):p("",!0),l.form.type===1||l.form.type===2?(s(),d(i,{key:3,prop:"icon",label:"icon"},{default:t(()=>[o(W,{modelValue:l.form.icon,"onUpdate:modelValue":a[5]||(a[5]=e=>l.form.icon=e),placeholder:"Please select",style:{width:"100%"}},{default:t(()=>[(s(!0),F(oe,null,le(N.value,e=>(s(),d(Q,{key:e.id,label:e.code,value:e.value},{default:t(()=>[o(C,null,{default:t(()=>[(s(),d(D(e.value)))]),_:2},1024),g("span",se,te(e.code),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):p("",!0),l.form.type===2||l.form.type===3?(s(),d(i,{key:4,prop:"auth",label:"Permissions"},{default:t(()=>[o(v,{modelValue:l.form.auth,"onUpdate:modelValue":a[6]||(a[6]=e=>l.form.auth=e),autocomplete:"off"},null,8,["modelValue"])]),_:1})):p("",!0),o(i,{prop:"p_id",label:"Parent"},{default:t(()=>[o(X,{style:{width:"100%"},modelValue:l.form.p_id,"onUpdate:modelValue":a[7]||(a[7]=e=>l.form.p_id=e),data:l.tableData,onNodeClick:I,props:{label:"name",value:"id"},"render-after-expand":!1,"check-strictly":""},null,8,["modelValue","data"])]),_:1})]),_:1},8,["rules","model"])]),_:1},8,["modelValue"])])}}};export{_e as default};
