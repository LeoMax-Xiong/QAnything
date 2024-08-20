import{d as Me,a0 as dt,a as K,r as D,o as Re,A as r,B as d,C as i,c,G as s,V as k,E as O,W as B,H as m,Q as w,M as Ne,z as M,b as Be,N as se,F as A,D as oe,J as T,O as pt,a2 as ne,S as R,T as N,X as J,a4 as ft,R as ge,K as vt,L as ht}from"./index-6tg7R3dx.js";import{u as Oe,b as _t,_ as mt,c as qe,a as gt}from"./useChatSource-XdVVOYuE.js";import{u as yt,a as kt,b as Ie,D as wt,f as bt,h as Ct,T as St,_ as xt}from"./html2canvas.esm-BcIZNmr8.js";import{L as Tt,a as Dt,_ as Ft,F as Lt,C as Bt,O as qt}from"./OptionList-BxAIc4kN.js";import{g as It,u as $t}from"./index-iQxwA-IP.js";import{f as Ut,p as jt,r as P,u as V,a as Mt,b as Rt,C as Nt}from"./utils-BClL0vtd.js";import{u as $e}from"./useQuickStart-BiL5XuaB.js";import{u as Ot,a as Kt,c as Ue,p as zt}from"./useUploadFiles-q_ja5TNC.js";import{u as Et}from"./useChatSetting-Ce4GDEOT.js";import{C as At}from"./ChatInfoPanel-BA32LoyC.js";import{B as Pt}from"./RightOutlined-C8FG2xXR.js";import"./index-Dqkl4d4j.js";import"./AntdIcon-DPbCYP2l.js";import"./collapseMotion-C458bGtn.js";import"./index-CuGv7FMv.js";import"./index-CqqrW_kS.js";import"./injectionKey-DGYNie3Z.js";import"./slide-C-l997zf.js";const Vt={class:"contain"},Ht={key:0,class:"loading"},Qt={key:1,class:"progress"},Jt={class:"file-name"},Wt={key:0,class:"file-extension"},Gt={key:1,class:"file-extension"},Xt=Me({__name:"FileBlock",props:{fileData:{},kbId:{},status:{}},emits:["deleteFile"],setup(z,{emit:y}){const{setChatSourceVisible:W,setSourceType:le,setSourceUrl:l,setTextContent:g}=Oe(),b=y,H=z,{fileData:u,kbId:G}=dt(H),X=K(()=>S.value==="gray"),q=K(()=>jt(u.value.file_name)),ie=K(()=>S.value==="red"?"file-error":S.value==="green"?"file-"+ce.get(q.value.fileExtension):"file-unknown"),S=K(()=>u.value.status),ce=new Map([["md","txt"],["txt","txt"],["pdf","pdf"],["jpg","img"],["png","img"],["jpeg","img"],["docx","docx"],["xlsx","xlsx"],["pptx","ppt"],["eml","eml"],["csv","xlsx"]]),re=new Map([["gray","上传中"],["yellow","解析中"],["green","解析成功"],["red","解析失败"]]),Q=D(0),ue=()=>{let _=D(null);_.value=setInterval(async()=>{var h,v,C;if(u.value.file_id===""&&u.value.status!=="loading"&&(u.value.status="red"),u.value.status==="green"||u.value.status==="red")clearInterval(_.value),_.value=null;else{const U=await P(await V.fileList({kb_id:G.value,file_id:u.value.file_id}));u.value.status=((h=U.details[0])==null?void 0:h.status)||"red",((v=U.details[0])==null?void 0:v.status)==="yellow"&&(Q.value=parseInt((C=U.details[0])==null?void 0:C.msg.match(/\d+/)[0],10))}},1e3)},Y=async()=>{b("deleteFile",u.value.file_id,G.value)};Re(()=>{ue()});const Z=()=>{S.value==="yellow"||S.value==="green"?pe(u.value):w.warn("解析中、解析完成才可以预览")};let f=["pdf","docx","xlsx","txt","md","jpg","png","jpeg"];const de=_=>{if(!_)return!1;const h=_.split(".");if(h.length){const v=h.pop();return f.includes(v)}else return!1},pe=_=>{de(_.file_name)&&fe(_)};async function fe(_){try{l(null);const h=await P(await V.getFile({file_id:_.file_id})),v=_.file_name.split(".").pop(),C=ee(v);if(le(v),l(`data:${C};base64,${h.file_base64}`),v==="txt"||v==="md"){const U=atob(h.file_base64),L=decodeURIComponent(escape(U));g(L),W(!0)}else W(!0)}catch(h){w.error(h.msg||"获取文件失败")}}let F=["application/pdf","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","text/plain","text/markdown","image/jpeg","image/png","image/jpeg"];function ee(_){const h=f.indexOf(_);return F[h]}return(_,h)=>{const v=Dt;return r(),d("div",Vt,[i("div",{class:"file-icon",onClick:Z},[c(k,{name:s(ie)},null,8,["name"]),i("div",{class:O(s(X)||s(S)==="yellow"?"mask":"")},null,2),s(X)?(r(),d("div",Ht,[c(Tt)])):B("",!0),s(S)==="yellow"?(r(),d("div",Qt,[c(v,{type:"circle",percent:s(Q),size:25},null,8,["percent"])])):B("",!0)]),i("div",{class:"file-info",onClick:Z},[i("span",Jt,m(s(q).fileName),1),s(S)==="green"?(r(),d("span",Wt,m(s(q).fileExtension.toUpperCase())+", "+m(s(Ut)(s(u).bytes)||0),1)):(r(),d("span",Gt,m(s(re).get(s(S))),1))]),_.status==="toBeSend"?(r(),d("div",{key:0,class:"file-close",onClick:Y},[c(k,{name:"close"})])):B("",!0)])}}}),je=Ne(Xt,[["__scopeId","data-v-1f8682ed"]]),Ke=z=>(vt("data-v-a9cddbbf"),z=z(),ht(),z),Yt={class:"container"},Zt={key:1,class:"my-page"},ea={key:0,class:"user"},ta=Ke(()=>i("img",{class:"avatar",src:gt,alt:"头像"},null,-1)),aa={class:"question-inner"},sa={class:"question-text"},oa={key:0,class:"file-list-box"},na={key:1,class:"ai"},la=Ke(()=>i("img",{class:"avatar",src:xt,alt:"头像"},null,-1)),ia={class:"ai-content"},ca={class:"ai-right"},ra={key:0},ua={key:1},da={class:"source-list"},pa={class:"control"},fa={class:"tips"},va=["href"],ha=["onClick"],_a={class:"source-content"},ma={class:"score"},ga={class:"tips"},ya={key:1,class:"feed-back"},ka=["onClick"],wa={class:"reload-text"},ba={class:"tools"},Ca={key:0,class:"stop-btn"},Sa={class:"question-box"},xa={class:"question"},Ta={key:0,class:"file-list-box"},Da={class:"send-box"},Fa={class:"send-action"},La=Me({__name:"index",setup(z){const{common:y,home:W}=It(),{copy:le}=yt(),{QA_List:l,chatId:g,kbId:b,kbIdCopy:H,showLoading:u}=M($e()),{addHistoryList:G,updateHistoryList:X,addChatList:q,clearChatList:ie,getHistoryById:S,renameHistory:ce,addFileToBeSendList:re}=$e(),{setChatSourceVisible:Q,setSourceType:ue,setSourceUrl:Y,setTextContent:Z}=Oe(),{chatSettingFormActive:f}=M(Et()),{showDefault:de}=M(Ot()),{setModalVisible:pe,setModalTitle:fe}=Kt(),{uploadFileListQuick:F}=M(Ue()),{initUploadFileListQuick:ee}=Ue(),{language:_}=M($t()),h=K(()=>S(g.value)),v=new St(e=>{e&&(l.value[l.value.length-1].answer+=e||"")}),C=D(""),U=K(()=>{const e=f.value.context;if(e===0)return[];const o=l.value.filter(a=>a.type==="ai");return(e===1?o:o.slice(-e)).map(a=>[a.question,a.answer])}),L=D([]);let I;const ze=D(null),ye=D(null),j=()=>{ne(()=>{var e;(e=ye.value)==null||e.scrollIntoView({behavior:"smooth",block:"end"})})},ve=K(()=>{var o;return(((o=h.value)==null?void 0:o.fileToBeSendList.concat(F==null?void 0:F.value))||[]).filter(t=>t.file_id.length!==0)});Re(()=>{H.value&&(b.value=H.value),j()}),Be(()=>{ke()});const ke=()=>{F.value.length&&(re(g.value,[...F.value]),ee())};window.addEventListener("beforeunload",ke);const Ee=e=>{e.keyCode===13&&(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey?C.value+=`
`:he(),e.preventDefault())},Ae=kt((e,o)=>{if(e.like=!e.like,e.unlike=!1,_czc.push(["_trackEvent","qanything","问答页面","点赞","",""]),e.like){o.target.parentNode.style.animation="shake ease-in .5s";const t=setTimeout(()=>{clearTimeout(t),o.target.parentNode.style.animation=""},600)}},800),Pe=e=>{e.unlike=!e.unlike,e.like=!1,_czc.push(["_trackEvent","qanything","问答页面","点踩","",""])},Ve=e=>{le(e.answer).then(()=>{e.copied=!e.copied,w.success(y.copySuccess,1);const o=setTimeout(()=>{clearTimeout(o),e.copied=!e.copied},1e3)}).catch(()=>{w.error(y.copyFailed,1)})},He=async(e,o)=>{console.log(e);try{await P(await V.deleteFile({file_ids:[e],kb_id:o})),w.success("删除成功");const t=F.value.findIndex(a=>a.file_id===e);t!==-1?F.value.splice(t,1):h.value.fileToBeSendList=h.value.fileToBeSendList.filter(a=>a.file_id!==e)}catch(t){w.error(t.msg||"删除失败")}},Qe=e=>{l.value.push({question:e,type:"user",fileDataList:[...ve.value.filter(o=>o.status!=="red")]}),j()},we=e=>{l.value.push({answer:"",question:e,onlySearch:f.value.capabilities.onlySearch,type:"ai",copied:!1,like:!1,unlike:!1,source:[],showTools:!1})},E=new Nt,Je=()=>{I&&I.abort(),v.done(),u.value=!1,l.value[l.value.length-1].showTools=!0},We=async e=>{try{if(g.value!==null){S(g.value).title==="未命名对话"&&ce(g.value,e);return}e.length>100&&(e=e.substring(0,100));const o=await P(await V.createKb({kb_name:e}));b.value=o.kb_id,g.value=G(e),X(e,g.value,b.value)}catch(o){w.error(o.msg||"创建对话失败")}},he=async()=>{if(!C.value.trim().length)return;if(u.value){w.warn("正在聊天中...请等待结束");return}if(!await lt()){w.error("模型设置错误，请先检查模型配置");return}const e=C.value;await We(e),C.value="",Qe(e),q(g.value,l.value),ee(),h.value.fileToBeSendList=[],u.value=!0,I=new AbortController;const o={kb_ids:[b.value],history:U.value,question:e,streaming:f.value.capabilities.onlySearch===!1,networking:f.value.capabilities.networkSearch,product_source:"saas",rerank:f.value.capabilities.rerank,only_need_search_results:f.value.capabilities.onlySearch,hybrid_search:f.value.capabilities.mixedSearch,max_token:f.value.maxToken,api_base:f.value.apiBase,api_key:f.value.apiKey,model:f.value.apiModelName,api_context_length:f.value.apiContextLength,chunk_size:f.value.chunkSize,top_p:f.value.top_P,temperature:f.value.temperature};if(f.value.capabilities.onlySearch){E.addChatSetting(f.value),we(e);try{const t=await P(await V.sendQuestion(o));t.code===200&&(l.value[l.value.length-1].answer=t!=null&&t.source_documents.length?y.searchCompleted:y.searchNotFound,l.value[l.value.length-1].source=t==null?void 0:t.source_documents)}catch(t){w.error(t.msg||"出错了"),l.value[l.value.length-1].answer=t||"error"}u.value=!1,l.value[l.value.length-1].showTools=!0,q(g.value,l.value),await ne(()=>{j()})}else bt(Rt+"/local_doc_qa/local_doc_chat",{method:"POST",headers:{"Content-Type":"application/json",Accept:["text/event-stream","application/json"]},openWhenHidden:!0,body:JSON.stringify({user_id:Mt,...o}),signal:I.signal,onopen(t){console.log("open",t),we(e),t.ok&&t.headers.get("content-type")==="text/event-stream"&&(E.addChatSetting(f.value),v.start())},onmessage(t){var $,n;console.log("message",t);const a=JSON.parse(t.data);if((a==null?void 0:a.code)==200&&(a!=null&&a.response)&&a.msg==="success")v.add(a==null?void 0:a.response),j();else{const x=a.time_record.time_usage;delete x.retriever_search_by_milvus,E.addTime(a.time_record.time_usage),E.addToken(a.time_record.token_usage),E.addDate(Date.now())}($=a==null?void 0:a.source_documents)!=null&&$.length&&(l.value[l.value.length-1].source=a==null?void 0:a.source_documents),(n=a==null?void 0:a.show_images)!=null&&n.legnth&&(a==null||a.show_images.legnth.map(x=>{v.add(x),console.log(l.value.at(-1).answer)}))},onclose(t){console.log("close",t),v.done(),I.abort(),u.value=!1,l.value[l.value.length-1].showTools=!0,l.value.at(-1).itemInfo=E.getChatInfo(),q(g.value,l.value),ne(()=>{j()}),console.log(l.value)},onerror(t){throw console.log("error",t),v==null||v.done(),I==null||I.abort(),u.value=!1,l.value[l.value.length-1].showTools=!0,w.error(t.msg||"出错了"),q(g.value,l.value),ne(()=>{j()}),t}})},Ge=e=>{C.value=e.question,he()},Xe=(e,o)=>{e.source[o].showDetailDataSource=!e.source[o].showDetailDataSource},Ye=(e,o)=>{e.source[o].showDetailDataSource=!1},Ze=e=>{L.value.push(e)},et=e=>{L.value=L.value.filter(o=>o!==e)},{showModal:be}=M(Ie()),_e=D(!1),me=D(""),te=D(""),tt=()=>{b.value&&(pe(!0),fe(W.upload))},at=()=>{u.value||(te.value="download",be.value=!0,me.value=y.saveTip)},st=async()=>{if(_e.value=!0,te.value==="download")try{const e=document.getElementById("chat-ul"),t=(await Ct(e,{useCORS:!0})).toDataURL("image/png"),a=document.createElement("a");a.style.display="none",a.href=t,a.setAttribute("download","chat-shot.png"),typeof a.download>"u"&&a.setAttribute("target","_blank"),document.body.appendChild(a),a.click(),document.body.removeChild(a),window.URL.revokeObjectURL(t),w.success("下载成功"),await Promise.resolve()}catch(e){w.error(e.message||e.msg||"出错了")}else te.value==="delete"&&(ie(g.value),g.value=null,l.value=[]);te.value="",me.value="",_e.value=!1,be.value=!1},{showSettingModal:ot}=M(Ie()),nt=e=>{ot.value=e},Ce=D(),lt=()=>Ce.value.handleOk();let Se=["pdf","docx","xlsx","txt","md","jpg","png","jpeg","csv","eml"];const xe=e=>{if(!e)return!1;const o=e.split(".");if(o.length){const t=o.pop();return Se.includes(t)}else return!1},it=e=>{xe(e.file_name)&&ct(e)};async function ct(e){try{Y(null);const o=await P(await V.getFile({file_id:e.file_id})),t=e.file_name.split(".").pop(),a=ut(t);if(ue(t),Y(`data:${a};base64,${o.file_base64}`),t==="txt"||t==="md"||t==="csv"||t==="eml"){const $=atob(o.file_base64),n=decodeURIComponent(escape($));Z(n),Q(!0)}else Q(!0)}catch(o){w.error(o.msg||"获取文件失败")}}let rt=["application/pdf","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","text/plain","text/markdown","image/jpeg","image/png","image/jpeg","text/csv","message/rfc822","application/vnd.openxmlformats-officedocument.presentationml.presentation"];function ut(e){const o=Se.indexOf(e);return rt[o]}Be(()=>{Te()});const Te=()=>{H.value=b.value,b.value=""};return window.addEventListener("onbeforeunload",Te),(e,o)=>{const t=Pt,a=_t,$=mt;return r(),d(A,null,[i("div",Yt,[s(de)===s(zt).optionlist?(r(),se(qt,{key:0})):(r(),d("div",Zt,[i("div",{id:"chat",ref_key:"chatContainer",ref:ze,class:"chat"},[i("ul",{id:"chat-ul",ref_key:"scrollDom",ref:ye},[(r(!0),d(A,null,oe(s(l),(n,x)=>{var De,Fe;return r(),d("li",{key:x},[n.type==="user"?(r(),d("div",ea,[ta,i("div",aa,[i("p",sa,m(n.question),1),n.fileDataList.length?(r(),d("div",oa,[(r(!0),d(A,null,oe(n.fileDataList,p=>(r(),se(je,{key:p.file.lastModified,"file-data":p,"kb-id":s(b),"chat-id":s(g),status:"send"},null,8,["file-data","kb-id","chat-id"]))),128))])):B("",!0)])])):(r(),d("div",na,[la,i("div",ia,[i("div",ca,[i("p",{class:O(["question-text",[!n.source.length&&!((De=n==null?void 0:n.picList)!=null&&De.length)?"change-radius":"",n.showTools?"":"flashing"]])},[c(qe,{content:n.answer},null,8,["content"]),Object.keys(((Fe=n==null?void 0:n.itemInfo)==null?void 0:Fe.tokenInfo)||{}).length?(r(),se(At,{key:0,"chat-item-info":n.itemInfo},null,8,["chat-item-info"])):B("",!0)],2),n.source.length?(r(),d(A,{key:0},[i("div",{class:O(["source-total",s(L).includes(x)?"":"source-total-last"])},[s(_)==="zh"?(r(),d("span",ra," 找到了"+m(n.source.length)+"个信息来源： ",1)):(r(),d("span",ua," Found "+m(n.source.length)+" source of information ",1)),R(c(k,{name:"down",onClick:p=>Ze(x)},null,8,["onClick"]),[[N,!s(L).includes(x)]]),R(c(k,{name:"up",onClick:p=>et(x)},null,8,["onClick"]),[[N,s(L).includes(x)]])],2),R(i("div",da,[(r(!0),d(A,null,oe(n.source,(p,ae)=>(r(),d("div",{key:ae,class:"data-source"},[R(i("p",pa,[i("span",fa,m(s(y).dataSource)+m(ae+1)+":",1),p.file_url.startsWith("http")?(r(),d("a",{key:0,href:p.file_url,target:"_blank"},m(p.file_name),9,va)):(r(),d("span",{key:1,class:O(["file",xe(p.file_name)?"filename-active":""]),onClick:Le=>it(p)},m(p.file_name),11,ha)),R(c(k,{name:"iconup",onClick:Le=>Ye(n,ae)},null,8,["onClick"]),[[N,p.showDetailDataSource]]),R(c(k,{name:"icondown",onClick:Le=>Xe(n,ae)},null,8,["onClick"]),[[N,!p.showDetailDataSource]])],512),[[N,p.file_name]]),c(ft,{name:"sourceItem"},{default:T(()=>[R(i("div",_a,[c(qe,{content:p.content},null,8,["content"]),i("p",ma,[i("span",ga,m(s(y).correlation),1),J(" "+m(p.score),1)])],512),[[N,p.showDetailDataSource]])]),_:2},1024)]))),128))],512),[[N,s(L).includes(x)]])],64)):B("",!0),n.showTools?(r(),d("div",ya,[i("div",{class:"reload-box",onClick:p=>Ge(n)},[c(k,{name:"reload"}),i("span",wa,m(s(y).regenerate),1)],8,ka),i("div",ba,[c(k,{style:ge({color:n.copied?"#4D71FF":""}),name:"copy",onClick:p=>Ve(n)},null,8,["style","onClick"]),c(k,{style:ge({color:n.like?"#4D71FF":""}),name:"like",onClick:p=>s(Ae)(n,p)},null,8,["style","onClick"]),c(k,{style:ge({color:n.unlike?"#4D71FF":""}),name:"unlike",onClick:p=>Pe(n)},null,8,["style","onClick"])])])):B("",!0)])])]))])}),128))],512)],512),s(u)?(r(),d("div",Ca,[c(t,{onClick:Je},{icon:T(()=>[c(k,{name:"stop",class:O(s(u)?"loading":"")},null,8,["class"])]),default:T(()=>[J(" "+m(s(y).stop),1)]),_:1})])):B("",!0),i("div",Sa,[i("div",xa,[s(ve).length?(r(),d("div",Ta,[(r(!0),d(A,null,oe(s(ve),n=>(r(),se(je,{key:n.file_id,"file-data":n,"kb-id":s(b),"chat-id":s(g),status:"toBeSend",onDeleteFile:He},null,8,["file-data","kb-id","chat-id"]))),128))])):B("",!0),i("div",Da,[c(a,{value:s(C),"onUpdate:value":o[0]||(o[0]=n=>pt(C)?C.value=n:null),class:"send-textarea","max-length":"200",bordered:!1,placeholder:s(y).problemPlaceholder,"auto-size":{minRows:1,maxRows:8},onKeydown:Ee},null,8,["value","placeholder"]),i("div",Fa,[c($,null,{content:T(()=>[J(m(s(b)?s(y).chatUpload:s(y).chatUploadNoKbId),1)]),default:T(()=>[i("span",{class:O(["question-icon",s(u)||!s(b)?"isPreventClick":""]),onClick:tt},[c(k,{name:"chat-upload"})],2)]),_:1}),c($,null,{content:T(()=>[J(m(s(y).chatToPic),1)]),default:T(()=>[i("span",{class:O(["question-icon",s(u)?"isPreventClick":""]),onClick:at},[c(k,{name:"chat-download"})],2)]),_:1}),c($,null,{content:T(()=>[J(m(s(y).modelSettingTitle),1)]),default:T(()=>[i("span",{class:"question-icon",onClick:o[1]||(o[1]=n=>nt(!0))},[c(k,{name:"chat-setting"})])]),_:1}),c(t,{type:"primary",disabled:s(u),shape:"circle",onClick:he},{default:T(()=>[c(k,{name:"sendplane"})]),_:1},8,["disabled"])])])])]),c(Lt,{"dialog-type":1})])),i("div",{class:"scroll-btn-div"},[i("img",{class:"avatar",src:Ft,alt:"滑到底部",onClick:j})])]),c(Bt,{ref_key:"chatSettingForDialogRef",ref:Ce},null,512),c(wt,{content:s(me),"confirm-loading":s(_e),onOk:st},null,8,["content","confirm-loading"])],64)}}}),Ja=Ne(La,[["__scopeId","data-v-a9cddbbf"]]);export{Ja as default};
