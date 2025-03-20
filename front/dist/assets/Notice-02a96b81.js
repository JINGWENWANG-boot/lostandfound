import{c as F,r as w}from"./request-6080a32f.js";import{u as fe}from"./index-30a7062a.js";import{T as ve,E as ge}from"./index.esm-2d42c9cb.js";import{bc as f}from"./index-756fa734.js";import{r as c,V as M,v as ye,j as he,a7 as a,y as m,z as I,A as r,P as e,I as t,M as d,u,H as v,L as g,O as be,F as Ce,a0 as ke,S as H}from"./runtime-core.esm-bundler-94adbe8c.js";import"./runtime-dom.esm-bundler-ffed9dc3.js";const we=r("span",{style:{"vertical-align":"middle"}}," Query ",-1),xe=r("span",{style:{"vertical-align":"middle"}}," Clear ",-1),Ve={style:{margin:"10px 0"}},Se=r("span",{style:{"vertical-align":"middle"}}," Add to ",-1),Ue=r("span",{style:{"vertical-align":"middle"}}," Import ",-1),Ne=r("span",{style:{"vertical-align":"middle"}}," Export ",-1),Be=r("span",{style:{"vertical-align":"middle"}}," Batch Deletion ",-1),Oe={style:{margin:"10px 0"}},ze={key:0},Fe={class:"page"},Ie={style:{border:"1px solid #ccc"}},Pe={class:"dialog-footer"},Ee=["innerHTML"],Re={class:"dialog-footer"},qe={__name:"Notice",setup(Te){const x=c(""),N=c(1),B=c(5),P=c(0),E=fe(),R=E.getBearerToken,y=E.getAuths,s=M({tableData:[],form:{}}),k=c(""),O=ye(),q={placeholder:"Please enter content...",MENU_CONF:{uploadImage:{fieldName:"file",server:`http://${F.serverUrl}/file/uploadImg`,headers:{Authorization:R}}}},T=c(""),V=c(!1),J=n=>{V.value=!0,T.value=n},j=n=>{O.value=n};he(()=>{const n=O.value;n!=null&&n.destroy()}),s.userOptions=[],w.get("/user").then(n=>s.userOptions=n.data);const S=c([]),Q=n=>{S.value=n},G=()=>{if(!S.value||!S.value.length){f.warning("Please select data");return}const n=S.value.map(l=>l.id);w.post("/notice/del/batch",n).then(l=>{l.code==="200"?(f.success("Operation successful"),p()):f.error(l.msg)})},p=()=>{w.get("/notice/page",{params:{name:x.value,pageNum:N.value,pageSize:B.value}}).then(n=>{s.tableData=n.data.records,P.value=n.data.total})};p();const K=()=>{x.value="",p()},h=c(!1),W=M({name:[{required:!0,message:"Please enter a name",trigger:"blur"}]}),U=c(),X=()=>{h.value=!0,H(()=>{U.value.resetFields(),s.form={},k.value=""})},Y=()=>{U.value.validate(n=>{n&&(s.form.content=k.value,w.request({url:"/notice",method:s.form.id?"put":"post",data:s.form}).then(l=>{l.code==="200"?(f.success("save successfully"),h.value=!1,p()):f.error(l.msg)}))})},Z=n=>{h.value=!0,H(()=>{U.value.resetFields(),s.form=JSON.parse(JSON.stringify(n)),k.value=n.content})},ee=n=>{w.delete("/notice/"+n).then(l=>{l.code==="200"?(f.success("Operation successful"),p()):f.error(l.msg)})},te=()=>{window.open(`http://${F.serverUrl}/notice/export`)},le=()=>{p(),f.success("Import Success")};return(n,l)=>{const A=a("el-input"),oe=a("Search"),_=a("el-icon"),i=a("el-button"),ne=a("RefreshLeft"),ae=a("Plus"),se=a("Bottom"),re=a("el-upload"),ie=a("Top"),$=a("Remove"),D=a("el-popconfirm"),b=a("el-table-column"),de=a("Edit"),ue=a("el-table"),ce=a("el-pagination"),z=a("el-form-item"),me=a("el-option"),pe=a("el-select"),_e=a("el-form"),L=a("el-dialog");return m(),I("div",null,[r("div",null,[e(A,{modelValue:x.value,"onUpdate:modelValue":l[0]||(l[0]=o=>x.value=o),placeholder:"Please enter a name",class:"w300"},null,8,["modelValue"]),e(i,{type:"primary",class:"ml5",onClick:p},{default:t(()=>[e(_,{style:{"vertical-align":"middle"}},{default:t(()=>[e(oe)]),_:1}),d(),we]),_:1}),e(i,{type:"warning",class:"ml5",onClick:K},{default:t(()=>[e(_,{style:{"vertical-align":"middle"}},{default:t(()=>[e(ne)]),_:1}),d(),xe]),_:1})]),r("div",Ve,[u(y).includes("notice.add")?(m(),v(i,{key:0,type:"success",onClick:X},{default:t(()=>[e(_,{style:{"vertical-align":"middle"}},{default:t(()=>[e(ae)]),_:1}),d(),Se]),_:1})):g("",!0),u(y).includes("notice.import")?(m(),v(re,{key:1,class:"ml5","show-file-list":!1,style:{display:"inline-block",position:"relative",top:"3px"},action:`http://${u(F).serverUrl}/notice/import`,"on-success":le,headers:{Authorization:u(R)}},{default:t(()=>[e(i,{type:"primary"},{default:t(()=>[e(_,{style:{"vertical-align":"middle"}},{default:t(()=>[e(se)]),_:1}),d(),Ue]),_:1})]),_:1},8,["action","headers"])):g("",!0),u(y).includes("notice.export")?(m(),v(i,{key:2,type:"primary",onClick:te,class:"ml5"},{default:t(()=>[e(_,{style:{"vertical-align":"middle"}},{default:t(()=>[e(ie)]),_:1}),d(),Ne]),_:1})):g("",!0),u(y).includes("notice.deleteBatch")?(m(),v(D,{key:3,title:"Confirm delete?",onConfirm:G},{reference:t(()=>[e(i,{type:"danger",style:{"margin-left":"5px"}},{default:t(()=>[e(_,{style:{"vertical-align":"middle"}},{default:t(()=>[e($)]),_:1}),d(),Be]),_:1})]),_:1})):g("",!0)]),r("div",Oe,[e(ue,{data:s.tableData,stripe:"",border:"",onSelectionChange:Q,"header-cell-class-name":"headerBg"},{default:t(()=>[e(b,{type:"selection",width:"55"}),e(b,{prop:"id",label:"number"}),e(b,{prop:"name",label:"name"}),e(b,{label:"Preview"},{default:t(o=>[e(i,{onClick:C=>J(o.row.content)},{default:t(()=>[d("Check")]),_:2},1032,["onClick"])]),_:1}),e(b,{label:"Founder"},{default:t(o=>[o.row.userId?(m(),I("span",ze,be(s.userOptions.find(C=>C.id===o.row.userId)?s.userOptions.find(C=>C.id===o.row.userId).name:""),1)):g("",!0)]),_:1}),e(b,{label:"operate",width:"220"},{default:t(o=>[u(y).includes("notice.edit")?(m(),v(i,{key:0,type:"primary",onClick:C=>Z(o.row)},{default:t(()=>[d("Revise"),e(_,{style:{"vertical-align":"middle"}},{default:t(()=>[e(de)]),_:1})]),_:2},1032,["onClick"])):g("",!0),u(y).includes("notice.delete")?(m(),v(D,{key:1,title:"Confirm delete?",onConfirm:C=>ee(o.row.id)},{reference:t(()=>[e(i,{type:"danger"},{default:t(()=>[d("delete"),e(_,{style:{"vertical-align":"middle"}},{default:t(()=>[e($)]),_:1})]),_:1})]),_:2},1032,["onConfirm"])):g("",!0)]),_:1})]),_:1},8,["data"])]),r("div",Fe,[e(ce,{"prev-text":"previous","next-text":"next",onCurrentChange:p,onSizeChange:p,"current-page":N.value,"onUpdate:current-page":l[1]||(l[1]=o=>N.value=o),"page-size":B.value,"onUpdate:page-size":l[2]||(l[2]=o=>B.value=o),background:"","page-sizes":[4,8,12,16],layout:"prev, pager, next, total",total:P.value},null,8,["current-page","page-size","total"])]),e(L,{modelValue:h.value,"onUpdate:modelValue":l[7]||(l[7]=o=>h.value=o),title:"Announcement",width:"40%"},{footer:t(()=>[r("span",Pe,[e(i,{onClick:l[6]||(l[6]=o=>h.value=!1)},{default:t(()=>[d("Cancel")]),_:1}),e(i,{type:"primary",onClick:Y},{default:t(()=>[d(" save ")]),_:1})])]),default:t(()=>[e(_e,{ref_key:"ruleFormRef",ref:U,rules:W,model:s.form,"label-width":"80px",style:{padding:"0 20px"},"status-icon":""},{default:t(()=>[e(z,{prop:"name",label:"name"},{default:t(()=>[e(A,{modelValue:s.form.name,"onUpdate:modelValue":l[3]||(l[3]=o=>s.form.name=o),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(z,{prop:"content",label:"content"},{default:t(()=>[r("div",Ie,[e(u(ve),{style:{"border-bottom":"1px solid #ccc"},editor:u(O),mode:"simple"},null,8,["editor"]),e(u(ge),{style:{height:"300px","overflow-y":"hidden"},modelValue:k.value,"onUpdate:modelValue":l[4]||(l[4]=o=>k.value=o),defaultConfig:q,mode:"simple",onOnCreated:j},null,8,["modelValue"])])]),_:1}),e(z,{prop:"userId",label:"Founder"},{default:t(()=>[e(pe,{clearable:"",modelValue:s.form.user_id,"onUpdate:modelValue":l[5]||(l[5]=o=>s.form.user_id=o),placeholder:"Please select",style:{width:"100%"}},{default:t(()=>[(m(!0),I(Ce,null,ke(s.userOptions,o=>(m(),v(me,{key:o.id,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])]),_:1},8,["modelValue"]),e(L,{modelValue:V.value,"onUpdate:modelValue":l[9]||(l[9]=o=>V.value=o),title:"Preview",width:"40%"},{footer:t(()=>[r("span",Re,[e(i,{onClick:l[8]||(l[8]=o=>V.value=!1)},{default:t(()=>[d("closure")]),_:1})])]),default:t(()=>[r("div",{id:"editor-content-view",class:"editor-content-view",innerHTML:T.value,style:{padding:"0 20px"}},null,8,Ee)]),_:1},8,["modelValue"])])}}};export{qe as default};
