import{u as R,r as u,j as y,R as P,a as i,H as B,b as _,c as h,B as k,d as M,e as U,f as C,g as T,h as E,i as j,k as $,l as x,m as z,n as D,o as H,p as F,q,s as J,t as V,P as Y,C as W,v as G,I as K}from"./vendor-5d73540a.js";function qe(){import.meta.url,import("_").catch(()=>1);async function*e(){}}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();const Q="modulepreload",X=function(e){return"/rmg-templates/"+e},N={},I=function(n,t,o){if(!t||t.length===0)return n();const a=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=X(s),s in N)return;N[s]=!0;const r=s.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(!!o)for(let p=a.length-1;p>=0;p--){const d=a[p];if(d.href===s&&(!r||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":Q,r||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),r)return new Promise((p,d)=>{c.addEventListener("load",p),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>n())};function Z(){const{t:e}=R(),n=u.getEnv(),t=u.getAppVersion();return y(P,{children:[i(B,{as:"h4",size:"md",children:e("RMG Templates")}),i(_,{environment:n,version:t})]})}const ee=h.lazy(()=>I(()=>import("./templates-view-02b5cc3a.js"),["assets/templates-view-02b5cc3a.js","assets/vendor-5d73540a.js","assets/constant-3f96fa9e.js"])),te=h.lazy(()=>I(()=>import("./ticket-view-79c5dfcd.js"),["assets/ticket-view-79c5dfcd.js","assets/vendor-5d73540a.js","assets/constant-3f96fa9e.js"]));function ne(){return i(k,{basename:"/rmg-templates/",children:y(M,{children:[i(Z,{}),y(U,{children:[i(C,{path:"/new",element:i(T,{suspenseFallback:i(E,{isIndeterminate:!0}),children:i(te,{})})}),i(C,{path:"/",element:i(T,{suspenseFallback:i(E,{isIndeterminate:!0}),children:i(ee,{})})})]})]})})}const ae={companyConfig:$,templateList:x,selectedCompany:""},v=j({name:"app",initialState:ae,reducers:{appendCompanyAndTemplates:(e,n)=>{const{company:t,templates:o}=n.payload;e.companyConfig.push(t),e.templateList[t.id]=o},setSelectedCompany:(e,n)=>{e.selectedCompany=n.payload}}}),{appendCompanyAndTemplates:oe,setSelectedCompany:Ve}=v.actions,se=v.reducer,re=e=>{const n=document.createElement("details");n.setAttribute("repo","rmg-templates"),n.setAttribute("company",e.id),n.setAttribute("line","00config");const t=document.createElement("summary");t.textContent="New company: "+e.name.en,n.append(t);const o=document.createElement("details");return o.setAttribute("type","name"),o.textContent=JSON.stringify(e.name),n.append(o),n},ie=(e,n,t,o,a)=>{const s=document.createElement("details");s.setAttribute("repo","rmg-templates"),s.setAttribute("company",e),s.setAttribute("line",n),s.setAttribute("major",t.toString());const r=document.createElement("summary");r.textContent=`${e}/${n}`+(t?"(M)":""),s.append(r);const l=document.createElement("details");l.setAttribute("type","name"),l.textContent=JSON.stringify(o),s.append(l);const m=document.createElement("details");return m.setAttribute("type","param"),m.textContent=JSON.stringify(a),s.append(m),s},L=()=>({id:crypto.randomUUID(),line:"",newLine:"",majorUpdate:!1,templateName:{en:"","zh-Hans":"","zh-Hant":"",ko:""},param:void 0}),b={company:"",newCompany:"",companyName:{en:"","zh-Hans":"","zh-Hant":"",ko:""},templates:[]},S=j({name:"ticket",initialState:b,reducers:{setCompany:(e,n)=>{e.company=n.payload},setNewCompany:(e,n)=>{e.newCompany=n.payload},setCompanyNameByLang:(e,n)=>{const{lang:t,name:o}=n.payload;e.companyName[t]=o},addTemplate:e=>{e.templates.push(L())},setTemplateLineById:(e,n)=>{var r,l,m,c,p,d,w;const{id:t,line:o,name:a}=n.payload,s={...(r=e.templates.find(f=>f.id===t))!=null?r:L(),line:o};a&&(s.templateName.en=(l=a.en)!=null?l:"",s.templateName["zh-Hans"]=(m=a["zh-Hans"])!=null?m:"",s.templateName["zh-Hant"]=(d=(p=(c=a["zh-Hant"])!=null?c:a["zh-HK"])!=null?p:a["zh-TW"])!=null?d:"",s.templateName.ko=(w=a.ko)!=null?w:""),e.templates=e.templates.map(f=>f.id===t?s:f)},setTemplateNewLineById:(e,n)=>{e.templates=e.templates.map(t=>t.id===n.payload.id?{...t,newLine:n.payload.newLine}:t)},setTemplateMajorFlagById:(e,n)=>{e.templates=e.templates.map(t=>t.id===n.payload.id?{...t,majorUpdate:n.payload.majorUpdate}:t)},setTemplateLineNameById:(e,n)=>{e.templates=e.templates.map(t=>t.id===n.payload.id?{...t,templateName:{...t.templateName,[n.payload.lang]:n.payload.name}}:t)},setTemplateParamById:(e,n)=>{e.templates=e.templates.map(t=>t.id===n.payload.id?{...t,param:n.payload.param}:t)},removeTemplate:(e,n)=>{e.templates=e.templates.filter(t=>t.id!==n.payload)},resetTicket:()=>b}}),Ye={getCompanyEnglishName:(e,n)=>{var t,o,a;return e.company==="new"?e.companyName.en:(a=(o=(t=n.find(s=>s.id===e.company))==null?void 0:t.name)==null?void 0:o.en)!=null?a:""},getCompanyBlock:e=>e.company!=="new"?null:re({id:e.newCompany,name:e.companyName}),getTemplateBlocks:e=>{const n=e.company==="new"?e.newCompany:e.company;return e.templates.map(t=>{const o=t.line==="new"?t.newLine:t.line,a=t.line!=="new"&&t.majorUpdate;return ie(n,o,a,t.templateName,t.param)})},getCompanyErrors:e=>{const n=[],{company:t,newCompany:o,companyName:a}=e;return(!t||t==="new"&&!o)&&n.push("COMPANY_CODE_UNDEFINED"),t==="new"&&Object.values(a).some(s=>!s)&&n.push("COMPANY_NAME_INCOMPLETE"),n},getTemplateErrors:e=>{const n={Overall:[]},{templates:t}=e;return t.length===0&&n.Overall.push("TEMPLATE_SECTION_EMPTY"),t.some(o=>!o.line||o.line==="new"&&!o.newLine)&&n.Overall.push("TEMPLATE_CODE_UNDEFINED"),new Set(t.map(o=>o.line==="new"?o.newLine:o.line)).size!==t.length&&n.Overall.push("TEMPLATE_CODE_DUPLICATED"),t.forEach(o=>{const a=[];Object.values(o.templateName).some(s=>!s)&&a.push("TEMPLATE_NAME_INCOMPLETE"),o.param||a.push("TEMPLATE_PARAM_UNDEFINED"),n["Line "+o.line||o.newLine]=a}),n},getMajorUpdateNames:(e,n)=>{const{company:t,templates:o}=e;return t==="new"?[]:o.filter(a=>a.majorUpdate&&a.line!=="new").map(a=>{var r;const s=(r=n[t].find(l=>l.filename===a.line))==null?void 0:r.name;return s?Object.values(s).join("/"):a.line})}},{setCompany:We,setNewCompany:Ge,setCompanyNameByLang:Ke,addTemplate:Qe,setTemplateLineById:Xe,setTemplateNewLineById:Ze,setTemplateMajorFlagById:et,setTemplateLineNameById:tt,setTemplateParamById:nt,removeTemplate:at,resetTicket:ot}=S.actions,le=S.reducer,ce=z(),g=D({reducer:{app:se,ticket:le},middleware:e=>e().prepend(ce.middleware)}),st=()=>H(),rt=F;window.rmgStore=g;const pe={},me="关闭",de="公司",ue="线路",fe="名称",ye="打开",he="风格",ge="模板",we="上传者",Ce={"Add a company...":"添加公司...","Add a line...":"添加线路...","Add item":"添加项目","Add or update templates":"添加或更新模本","Briefly describe your changes and provide justification":"简洁地描述您的改动并提供理由","Click copy button and paste into issue body":"点击复制按钮然后粘贴到 Issue 正文",Close:me,Company:de,"Follow the instructions below to open an Issue":"按下方的指引打开 Issue","Justification for major update of":"重大更新的理由：",Line:ue,"Line code":"线路代码","Major update":"重大更新",Name:fe,Open:ye,"Please provide suitable source and justification.":"请您提供适当的来源和理由。","Railway company":"铁路公司",Style:he,"Submit templates":"提交模板",Templates:ge,"Toggling on 'Major update' will update the uploader field of the template and you are required enter extra justification for it.":"打开“重大更新”选项会更新模板的上传者栏位。您需要为此提供额外的理由。","Upload templates":"上传模板",Uploader:we,"Your inputs contain the following errors. Please fix it before submitting.":"您的输入存在以下问题，请在提交前修正他們。"},Te="關閉",Ee="公司",Ne="路線",Le="名稱",be="開啟",Ae="風格",je="範本",Ie="上載者",ve={"Add a company...":"新增公司...","Add a line...":"新增路線...","Add item":"新增項目","Add or update templates":"新增或更新範本","Briefly describe your changes and provide justification":"簡短地描述你的變更並提供理由","Click copy button and paste into issue body":"點擊複製按鈕並於 Issue 正文內貼上",Close:Te,Company:Ee,"Follow the instructions below to open an Issue":"按下方的指引開啟 Issue","Justification for major update of":"重大更新的理由：",Line:Ne,"Line code":"路線代碼","Major update":"重大更新",Name:Le,Open:be,"Please provide suitable source and justification.":"請你提供適當的來源及理由。","Railway company":"鐵路公司",Style:Ae,"Submit templates":"提交範本",Templates:je,"Toggling on 'Major update' will update the uploader field of the template and you are required enter extra justification for it.":"開啟「重大更新」選項會更新範本的上載者欄位。你需要為此提供額外的理由。","Upload templates":"上載範本",Uploader:Ie,"Your inputs contain the following errors. Please fix it before submitting.":"你的輸入存在以下問題，請於提交前修正他們。"},Se="닫기",Oe="회사",Re="노선",Pe="명칭",Be="열기",_e="스타일",ke="템플릿",Me="업로더",Ue={"Add a company...":"회사 추가","Add a line...":"노선 추가","Add item":"프로젝트 추가","Add or update templates":"템플릿 추가 또는 업데이트","Briefly describe your changes and provide justification":"변경 사항을 간결하게 설명하고 이유를 제공하세요","Click copy button and paste into issue body":"복사 단추를 누른 다음 Issue 본문에 붙여넣기",Close:Se,Company:Oe,"Follow the instructions below to open an Issue":"아래 안내로 Issue 열기","Justification for major update of":"주요 업데이트 이유:",Line:Re,"Line code":"노선 코드","Major update":"주요 업데이트",Name:Pe,Open:Be,"Please provide suitable source and justification.":"당신이 적당한 출처와 이유를 제공해 주십시오.","Railway company":"철도회사",Style:_e,"Submit templates":"템플릿 제출",Templates:ke,"Toggling on 'Major update' will update the uploader field of the template and you are required enter extra justification for it.":"'주요 업데이트' 옵션을 열면 템플릿의 게시자 필드가 업데이트됩니다.이를 위한 추가적인 이유가 필요합니다.","Upload templates":"업로드 템플릿",Uploader:Me,"Your inputs contain the following errors. Please fix it before submitting.":"귀하의 입력에 다음과 같은 문제가 있으니 제출하기 전에 수정해 주십시오."},$e=new u.I18nBuilder().use(q).withAppName("RMG Templates").withLng(u.getLanguage()).withDefaultResource(J).withResource("en",pe).withResource("zh-Hans",Ce).withResource("zh-Hant",ve).withResource("ko",Ue).build(),O=document.querySelector.bind(document),xe=async()=>{var e;try{const t=await(await fetch("/rmg-templates/resources/other-company-config.json")).json(),o=document.createElement("p");return o.textContent="Fetched non-core company config",(e=O("#root"))==null||e.append(o),t}catch(n){return console.error("Failed to fetch non-core company config",n),[]}},ze=async e=>{var n;try{const o=await(await fetch("/rmg-templates/resources/templates/"+e+"/00config.json")).json(),a=document.createElement("p");return a.textContent="Fetched templates of "+e,(n=O("#root"))==null||n.append(a),o}catch(t){return console.error("Failed to fetch template list for "+e,t),[]}},De=async e=>{const n=await xe();for(const t of n){const o=await ze(t.id);e.dispatch(oe({company:t,templates:o}))}};async function He(e){await De(e)}let A;const Fe=()=>{A=V(document.getElementById("root")),A.render(i(h.StrictMode,{children:i(Y,{store:g,children:i(W,{theme:G,children:i(K,{i18n:$e,children:i(ne,{})})})})}))};u.ready().then(()=>He(g)).then(()=>{Fe(),u.injectCss()});export{qe as __vite_legacy_guard,st as a,We as b,Ge as c,Ke as d,Ze as e,et as f,tt as g,nt as h,Qe as i,Xe as j,ot as k,at as r,Ve as s,Ye as t,rt as u};
