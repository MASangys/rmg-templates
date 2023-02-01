import{R as v,i as u,a as J,r as d,L as m,u as U,j as H,b as I,c as l,H as x,d as _,e as O,M as q,f as K,I as $,g as F,h as G,k as f,l as g,B as W,m as Y,n as V,o as B,p as T,q as w,s as P,t as X,v as Z,w as Q,x as ee,y as ne,P as ae,C as te,z as se,A as ie}from"./vendor-6b0abe8e.js";function un(){import("data:text/javascript,")}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const le="modulepreload",me=function(e){return"/rmg-templates/"+e},b={},S=function(n,a,s){if(!a||a.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(a.map(i=>{if(i=me(i),i in b)return;b[i]=!0;const o=i.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(!!s)for(let z=t.length-1;z>=0;z--){const y=t[z];if(y.href===i&&(!o||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${r}`))return;const h=document.createElement("link");if(h.rel=o?"stylesheet":le,o||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),o)return new Promise((z,y)=>{h.addEventListener("load",z),h.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>n())},oe={},he="关闭",re="公司",ze="英文",ye="线路",de="名称",pe="打开",He="风格",ue="模板",ce="上传者",fe={"Add a company...":"添加公司...","Add a line...":"添加线路...","Add item":"添加项目","Add or update templates":"添加或更新模本","Briefly describe your changes and provide justification":"简洁地描述您的改动并提供理由","Click copy button and paste into issue body":"点击复制按钮然后粘贴到 Issue 正文",Close:he,Company:re,English:ze,"Follow the instructions below to open an Issue":"按下方的指引打开 Issue",Line:ye,"Line code":"线路代码",Name:de,Open:pe,"Please provide suitable source and justification.":"请您提供适当的来源和理由。","Railway company":"铁路公司","Simplified Chinese":"简体中文",Style:He,"Submit templates":"提交模板",Templates:ue,"Traditional Chinese":"繁体中文","Upload templates":"上传模板",Uploader:ce,"Your inputs contain the following errors. Please fix it before submitting.":"您的输入存在以下问题，请在提交前修正他們。"},ge="關閉",Le="公司",Be="英文",Te="路線",we="名稱",be="開啟",Ae="風格",Ee="範本",ke="上載者",Ce={"Add a company...":"新增公司...","Add a line...":"新增路線...","Add item":"新增項目","Add or update templates":"新增或更新範本","Briefly describe your changes and provide justification":"簡短地描述你的變更並提供理由","Click copy button and paste into issue body":"點擊複製按鈕並於 Issue 正文內貼上",Close:ge,Company:Le,English:Be,"Follow the instructions below to open an Issue":"按下方的指引開啟 Issue",Line:Te,"Line code":"路線代碼",Name:we,Open:be,"Please provide suitable source and justification.":"請你提供適當的來源及理由。","Railway company":"鐵路公司","Simplified Chinese":"简體中文",Style:Ae,"Submit templates":"提交範本",Templates:Ee,"Traditional Chinese":"繁體中文","Upload templates":"上載範本",Uploader:ke,"Your inputs contain the following errors. Please fix it before submitting.":"你的輸入存在以下問題，請於提交前修正他們。"},De=new v.Builder().withResource("en",oe).withResource("zh-Hans",fe).withResource("zh-Hant",Ce).build();u.use(J).init({lng:d.getLanguage(),fallbackLng:{[m.ChineseCN]:[m.ChineseSimp,m.English],[m.ChineseHK]:[m.ChineseTrad,m.English],[m.ChineseTW]:[m.ChineseTrad,m.English],[m.ChineseTrad]:[m.ChineseHK,m.ChineseTW,m.English],default:[m.English]},resources:De}).then(e=>{document.title=e("Templates"),document.documentElement.lang=u.language});const N=e=>{u.changeLanguage(e).then(),document.title=u.t("Templates"),document.documentElement.lang=e};d.onLanguageChange(N);function Pe(){const{t:e}=U(),n=d.getEnv(),a=d.getAppVersion(),s=t=>{d.setLanguage(t),N(t)};return H(I,{children:[l(x,{as:"h4",size:"md",children:e("RMG Templates")}),l(_,{environment:n,version:a}),l(O,{ml:"auto",children:H(q,{children:[l(K,{as:$,icon:l(F,{}),variant:"ghost",size:"sm"}),H(G,{children:[l(f,{onClick:()=>s(m.English),children:"English"}),l(f,{onClick:()=>s(m.ChineseSimp),children:"简体中文"}),l(f,{onClick:()=>s(m.ChineseTrad),children:"繁體中文"})]})]})})]})}const Se=g.lazy(()=>S(()=>import("./templates-view-af5eb958.js"),["assets/templates-view-af5eb958.js","assets/vendor-6b0abe8e.js","assets/constant-a6d14527.js"])),Ne=g.lazy(()=>S(()=>import("./ticket-view-2395444b.js"),["assets/ticket-view-2395444b.js","assets/vendor-6b0abe8e.js","assets/constant-a6d14527.js"]));function Me(){return l(W,{basename:"/rmg-templates/",children:H(Y,{children:[l(Pe,{}),H(V,{children:[l(B,{path:"/new",element:l(T,{suspenseFallback:l(w,{isIndeterminate:!0}),children:l(Ne,{})})}),l(B,{path:"/",element:l(T,{suspenseFallback:l(w,{isIndeterminate:!0}),children:l(Se,{})})})]})]})})}const Re={selectedCompany:""},M=P({name:"app",initialState:Re,reducers:{setSelectedCompany:(e,n)=>{e.selectedCompany=n.payload}}}),{setSelectedCompany:fn}=M.actions,je=M.reducer,ve=[{id:"basic",name:{en:"Basic",zh:"基本"}},{id:"mtr",name:{en:"MTR","zh-Hans":"港铁","zh-Hant":"港鐵"}},{id:"gzmtr",name:{en:"Guangzhou Metro","zh-Hans":"广州地铁","zh-Hant":"廣州地鐵"}},{id:"shmetro",name:{en:"Shanghai Metro","zh-Hans":"上海地铁","zh-Hant":"上海地鐵"}},{id:"bjsubway",name:{en:"Beijing Subway","zh-Hans":"北京地铁","zh-Hant":"北京地鐵"}},{id:"chengdumetro",name:{en:"Chengdu Metro","zh-Hans":"成都地铁","zh-Hant":"成都地鐵"}},{id:"crt",name:{en:"Chongqing Rail Transit","zh-Hans":"重庆轨道交通","zh-Hant":"重慶軌道交通"}},{id:"fmetro",name:{en:"Foshan Metro","zh-Hans":"佛山地铁","zh-Hant":"佛山地鐵"}},{id:"hrbmetro",name:{en:"Harbin Metro","zh-Hans":"哈尔滨地铁","zh-Hant":"哈爾濱地鐵"}},{id:"kmrailtransit",name:{en:"Kunming Rail Transit","zh-Hans":"昆明地铁","zh-Hant":"昆明地鐵"}},{id:"kvtransit",name:{en:"Klang Valley Integrated Transit System","zh-Hans":"巴生谷综合运输系统","zh-Hant":"巴生谷綜合運輸系統"}},{id:"lahoremetro",name:{en:"Lahore Metro",ur:"لاہور میٹرو","zh-Hans":"拉合尔地铁","zh-Hant":"拉合爾地鐵"}},{id:"mlm",name:{en:"Macao LRT",pt:"Metro Ligeiro de Macau","zh-Hans":"澳门轻轨","zh-Hant":"澳門輕軌"}},{id:"nbrailtransit",name:{en:"Ningbo Rail Transit","zh-Hans":"宁波轨道交通","zh-Hant":"寧波軌道交通"}},{id:"njmetro",name:{en:"Nanjing Metro","zh-Hans":"南京地铁","zh-Hant":"南京地鐵"}},{id:"qdmetro",name:{en:"Qingdao Metro","zh-Hans":"青岛地铁","zh-Hant":"青島地鐵"}},{id:"santiagometro",name:{en:"Santiago Metro","zh-Hans":"圣地亚哥地铁","zh-Hant":"聖地亞哥地鐵"}},{id:"saopaulometro",name:{en:"São Paulo Metro",pt:"Metrô de São Paulo","zh-Hans":"圣保罗地铁","zh-Hant":"聖保羅地鐵"}},{id:"seoulmetro",name:{en:"Seoul Metropolitan Subway",ko:"서울 수도권 전철","zh-Hans":"首尔首都圈电铁","zh-Hant":"首爾首都圈電鐵"}},{id:"szmetro",name:{en:"Shenzhen Metro","zh-Hans":"深圳地铁","zh-Hant":"深圳地鐵"}},{id:"taipeimrt",name:{en:"Taipei Metro","zh-Hans":"台北捷运","zh-Hant":"台北捷運"}},{id:"torontosubway",name:{en:"Toronto Subway",fr:"Métro de Toronto","zh-Hans":"多伦多地铁","zh-Hant":"多倫多地鐵"}},{id:"whrt",name:{en:"Wuhan Metro","zh-Hans":"武汉地铁","zh-Hant":"武漢地鐵"}},{id:"zzmetro",name:{en:"Zhengzhou Metro","zh-Hans":"郑州地铁","zh-Hant":"鄭州地鐵"}}],Je=[{filename:"default",name:{en:"Default","zh-Hans":"默认","zh-Hant":"預設"},style:"mtr"},{filename:"coline",name:{en:"Track Share","zh-Hans":"共线","zh-Hant":"共綫"},style:"shmetro"},{filename:"loop",name:{en:"Loop Line","zh-Hans":"环线","zh-Hant":"環綫"},style:"shmetro"}],Ue=[{filename:"twl",name:{en:"Tsuen Wan Line","zh-Hans":"荃湾线","zh-Hant":"荃灣綫"},uploadBy:"wongchito",style:"mtr"},{filename:"ktl",name:{en:"Kwun Tong Line","zh-Hans":"观塘线","zh-Hant":"觀塘綫"},uploadBy:"wongchito",style:"mtr"},{filename:"isl",name:{en:"Island Line","zh-Hans":"港岛线","zh-Hant":"港島綫"},uploadBy:"wongchito",style:"mtr"},{filename:"tkl",name:{en:"Tseung Kwan O Line","zh-Hans":"将军澳线","zh-Hant":"將軍澳綫"},uploadBy:"wongchito",style:"mtr"},{filename:"tcl",name:{en:"Tung Chung Line","zh-Hans":"东涌线","zh-Hant":"東涌綫"},uploadBy:"wongchito",style:"mtr"},{filename:"sile",name:{en:"South Island Line","zh-Hans":"南港岛线","zh-Hant":"南港島綫"},uploadBy:"wongchito",style:"mtr"},{filename:"drl",name:{en:"Disneyland Resort Line","zh-Hans":"迪士尼线","zh-Hant":"迪士尼綫"},uploadBy:"wongchito",style:"mtr"},{filename:"ael",name:{en:"Airport Express","zh-Hans":"机场快线","zh-Hant":"機場快綫"},uploadBy:"wongchito",style:"mtr"},{filename:"eal",name:{en:"East Rail Line","zh-Hans":"东铁线","zh-Hant":"東鐵綫"},uploadBy:"wongchito",style:"mtr"},{filename:"tml",name:{en:"Tuen Ma Line","zh-Hans":"屯马线","zh-Hant":"屯馬綫"},uploadBy:"wongchito",style:"mtr"}],Ie=[{filename:"gz1",name:{en:"Line 1","zh-Hans":"1号线","zh-Hant":"1號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz2",name:{en:"Line 2","zh-Hans":"2号线","zh-Hant":"2號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz3",name:{en:"Line 3","zh-Hans":"3号线","zh-Hant":"3號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz4",name:{en:"Line 4","zh-Hans":"4号线","zh-Hant":"4號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz5",name:{en:"Line 5","zh-Hans":"5号线","zh-Hant":"5號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz6",name:{en:"Line 6","zh-Hans":"6号线","zh-Hant":"6號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz7",name:{en:"Line 7","zh-Hans":"7号线","zh-Hant":"7號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz8",name:{en:"Line 8","zh-Hans":"8号线","zh-Hant":"8號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz9",name:{en:"Line 9","zh-Hans":"9号线","zh-Hant":"9號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz13",name:{en:"Line 13","zh-Hans":"13号线","zh-Hant":"13號線"},uploadBy:"Dingdong2334",style:"gzmtr"},{filename:"gz14",name:{en:"Line 14","zh-Hans":"14号线","zh-Hant":"14號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz18",name:{en:"Line 18","zh-Hans":"18号线","zh-Hant":"18號線"},uploadBy:"Dingdong2334",style:"gzmtr"},{filename:"gz21",name:{en:"Line 21","zh-Hans":"21号线","zh-Hant":"21號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz22",name:{en:"Line 22","zh-Hans":"22号线","zh-Hant":"22號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gf",name:{en:"Guangfo Line","zh-Hans":"广佛线","zh-Hant":"廣佛線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"apm",name:{en:"APM Line","zh-Hans":"APM线","zh-Hant":"APM線"},uploadBy:"Dingdong2334",style:"gzmtr"},{filename:"thz1",name:{en:"Haizhu Tram Line 1","zh-Hans":"海珠有轨1号线","zh-Hant":"海珠有軌1號線"},uploadBy:"clearng-kly",style:"gzmtr"},{filename:"thp1",name:{en:"Huangpu Tram Line 1","zh-Hans":"黄埔有轨1号线","zh-Hant":"黃埔有軌1號線"},uploadBy:"clearng-kly",style:"gzmtr"}],xe=[{filename:"sh1",name:{en:"Line 1","zh-Hans":"1号线","zh-Hant":"1號線"},uploadBy:"thekingofcity",style:"shmetro"},{filename:"sh2",name:{en:"Line 2","zh-Hans":"2号线","zh-Hant":"2號線"},uploadBy:"thekingofcity",style:"shmetro"},{filename:"sh3",name:{en:"Line 3 (External)","zh-Hans":"3号线 （共线）","zh-Hant":"3號線 （共線）"},uploadBy:"thekingofcity",style:"shmetro"},{filename:"sh4",name:{en:"Line 4 (Loop)","zh-Hans":"4号线 （环线）","zh-Hant":"4號線 （環線）"},uploadBy:"thekingofcity",style:"shmetro"},{filename:"sh3&4",name:{en:"Line 3 and 4 (External with Loop)","zh-Hans":"3与4号线 （共线与环线）","zh-Hant":"3與4號線 （共線與環線）"},uploadBy:"thekingofcity",style:"shmetro"},{filename:"sh5",name:{en:"Line 5","zh-Hans":"5号线","zh-Hant":"5號線"},uploadBy:"Tianxiu11111",style:"shmetro"},{filename:"sh6",name:{en:"Line 6","zh-Hans":"6号线","zh-Hant":"6號線"},uploadBy:"Thomastzc",style:"shmetro"},{filename:"sh7",name:{en:"Line 7","zh-Hans":"7号线","zh-Hant":"7號線"},uploadBy:"Thomastzc",style:"shmetro"},{filename:"sh8",name:{en:"Line 8","zh-Hans":"8号线","zh-Hant":"8號線"},uploadBy:"thekingofcity",style:"shmetro"},{filename:"sh9",name:{en:"Line 9","zh-Hans":"9号线","zh-Hant":"9號線"},uploadBy:"thekingofcity",style:"shmetro"},{filename:"sh10",name:{en:"Line 10 (Branch)","zh-Hans":"10号线 （支线）","zh-Hant":"10號線 （支線）"},uploadBy:"thekingofcity",style:"shmetro"},{filename:"sh11",name:{en:"Line 11","zh-Hans":"11号线","zh-Hant":"11號線"},uploadBy:"Tianxiu11111",style:"shmetro"},{filename:"sh12",name:{en:"Line 12","zh-Hans":"12号线","zh-Hant":"12號線"},uploadBy:"Andy1782010",style:"shmetro"},{filename:"sh13",name:{en:"Line 13","zh-Hans":"13号线","zh-Hant":"13號線"},uploadBy:"Andy1782010",style:"shmetro"},{filename:"sh14",name:{en:"Line 14","zh-Hans":"14号线","zh-Hant":"14號線"},uploadBy:"thekingofcity",style:"shmetro"},{filename:"sh15",name:{en:"Line 15","zh-Hans":"15号线","zh-Hant":"15號線"},uploadBy:"Thomastzc",style:"shmetro"},{filename:"sh16",name:{en:"Line 16 (Express)","zh-Hans":"16号线 （快车）","zh-Hant":"16號線 （快車）"},uploadBy:"thekingofcity",style:"shmetro"},{filename:"sh17",name:{en:"Line 17","zh-Hans":"17号线","zh-Hant":"17號線"},uploadBy:"Thomastzc",style:"shmetro"},{filename:"sh18",name:{en:"Line 18","zh-Hans":"18号线","zh-Hant":"18號線"},uploadBy:"Tianxiu11111",style:"shmetro"}],_e=[{filename:"bj1",name:{en:"Line 1/Batong Line","zh-Hans":"1号线/八通线","zh-Hant":"1號線/八通線"},uploadBy:"AnDanJuneUnderline",style:"shmetro"},{filename:"bj2",name:{en:"Line 2","zh-Hans":"2号线","zh-Hant":"2號線"},uploadBy:"AnDanJuneUnderline",style:"shmetro"},{filename:"bj4",name:{en:"Line 4/Daxing Line","zh-Hans":"4号线/大兴线","zh-Hant":"4號線/大興線"},uploadBy:"AnDanJuneUnderline",style:"shmetro"},{filename:"bj5",name:{en:"Line 5","zh-Hans":"5号线","zh-Hant":"5號線"},uploadBy:"AnDanJuneUnderline",style:"shmetro"},{filename:"bj6",name:{en:"Line 6","zh-Hans":"6号线","zh-Hant":"6號線"},uploadBy:"AnDanJuneUnderline",style:"shmetro"},{filename:"bj7",name:{en:"Line 7","zh-Hans":"7号线","zh-Hant":"7號線"},uploadBy:"AnDanJuneUnderline",style:"shmetro"},{filename:"bj8",name:{en:"Line 8","zh-Hans":"8号线","zh-Hant":"8號線"},uploadBy:"Jay20081229",style:"shmetro"},{filename:"bj9",name:{en:"Line 9","zh-Hans":"9号线","zh-Hant":"9號線"},uploadBy:"AnDanJuneUnderline",style:"shmetro"},{filename:"bj10",name:{en:"Line 10","zh-Hans":"10号线","zh-Hant":"10號線"},uploadBy:"52PD",style:"shmetro"},{filename:"bj11",name:{en:"Line 11","zh-Hans":"11号线","zh-Hant":"11號線"},uploadBy:"Jay20081229",style:"shmetro"},{filename:"bj13",name:{en:"Line 13","zh-Hans":"13号线","zh-Hant":"13號線"},uploadBy:"AnDanJuneUnderline",style:"shmetro"},{filename:"bj14",name:{en:"Line 14","zh-Hans":"14号线","zh-Hant":"14號線"},uploadBy:"Jay20081229",style:"shmetro"},{filename:"bj15",name:{en:"Line 15","zh-Hans":"15号线","zh-Hant":"15號線"},uploadBy:"52PD",style:"shmetro"},{filename:"bj16",name:{en:"Line 16","zh-Hans":"16号线","zh-Hant":"16號線"},uploadBy:"52PD",style:"shmetro"},{filename:"bj17",name:{en:"Line 17","zh-Hans":"17号线","zh-Hant":"17號線"},uploadBy:"Jay20081229",style:"shmetro"},{filename:"bj19",name:{en:"Line 19","zh-Hans":"19号线","zh-Hant":"19號線"},uploadBy:"52PD",style:"shmetro"},{filename:"fsl",name:{en:"Fangshan Line (Through to Line 9)","zh-Hans":"房山线（跨线至9号线）","zh-Hant":"房山線（跨線至9號線）"},uploadBy:"52PD",style:"shmetro"},{filename:"cpl",name:{en:"Changping Line","zh-Hans":"昌平线","zh-Hant":"昌平線"},uploadBy:"52PD",style:"shmetro"},{filename:"yzl",name:{en:"Yizhuang Line","zh-Hans":"亦庄线","zh-Hant":"亦莊線"},uploadBy:"AnDanJuneUnderline",style:"shmetro"},{filename:"yfl",name:{en:"Yanfang Line","zh-Hans":"燕房线","zh-Hant":"燕房線"},uploadBy:"52PD",style:"shmetro"},{filename:"s1l",name:{en:"Line S1","zh-Hans":"S1线","zh-Hant":"S1線"},uploadBy:"52PD",style:"shmetro"},{filename:"t1l",name:{en:"Yizhuang T1 Line","zh-Hans":"亦庄T1线","zh-Hant":"亦莊T1線"},uploadBy:"AnDanJuneUnderline",style:"shmetro"},{filename:"xjl",name:{en:"Xijiao Line","zh-Hans":"西郊线","zh-Hant":"西郊線"},uploadBy:"52PD",style:"shmetro"},{filename:"dae",name:{en:"Daxing Airport Express","zh-Hans":"大兴机场线","zh-Hant":"大興機場線"},uploadBy:"52PD",style:"shmetro"}],Oe=[{filename:"cd1",name:{en:"Line 1","zh-Hans":"1号线","zh-Hant":"1號線"},uploadBy:"Jay20081229",style:"shmetro"},{filename:"cd2",name:{en:"Line 2","zh-Hans":"2号线","zh-Hant":"2號線"},uploadBy:"Jay20081229",style:"shmetro"},{filename:"cd5",name:{en:"Line 5","zh-Hans":"5号线","zh-Hant":"5號線"},uploadBy:"Jay20081229",style:"shmetro"},{filename:"cd6",name:{en:"Line 6","zh-Hans":"6号线","zh-Hant":"6號線"},uploadBy:"Jay20081229",style:"shmetro"}],qe=[{filename:"cq0",name:{en:"Loop Line","zh-Hans":"环线","zh-Hant":"環線"},uploadBy:"AnDanJuneUnderline",style:"shmetro"},{filename:"cqe",name:{en:"Express Train","zh-Hans":"直快列车","zh-Hant":"直快列車"},uploadBy:"AnDanJuneUnderline",style:"shmetro"},{filename:"cq1",name:{en:"Line 1","zh-Hans":"1号线","zh-Hant":"1號線"},uploadBy:"AnDanJuneUnderline",style:"shmetro"},{filename:"cq2",name:{en:"Line 2","zh-Hans":"2号线","zh-Hant":"2號線"},uploadBy:"AnDanJuneUnderline",style:"shmetro"},{filename:"cq3",name:{en:"Line 3","zh-Hans":"3号线","zh-Hant":"3號線"},uploadBy:"AnDanJuneUnderline",style:"shmetro"},{filename:"cq4",name:{en:"Line 4","zh-Hans":"4号线","zh-Hant":"4號線"},uploadBy:"AnDanJuneUnderline",style:"shmetro"},{filename:"cq5",name:{en:"Line 5","zh-Hans":"5号线","zh-Hant":"5號線"},uploadBy:"AnDanJuneUnderline",style:"shmetro"},{filename:"cq6",name:{en:"Line 6","zh-Hans":"6号线","zh-Hant":"6號線"},uploadBy:"AnDanJuneUnderline",style:"shmetro"},{filename:"cq9",name:{en:"Line 9","zh-Hans":"9号线","zh-Hant":"9號線"},uploadBy:"AnDanJuneUnderline",style:"shmetro"},{filename:"cq10",name:{en:"Line 10","zh-Hans":"10号线","zh-Hant":"10號線"},uploadBy:"AnDanJuneUnderline",style:"shmetro"},{filename:"cjt",name:{en:"Jiangtiao Line","zh-Hans":"江跳线","zh-Hant":"江跳線"},uploadBy:"AnDanJuneUnderline",style:"gzmtr"}],Ke=[{filename:"fs2",name:{en:"Line 2","zh-Hans":"2号线","zh-Hant":"2號線"},uploadBy:"Dingdong2334",style:"gzmtr"},{filename:"fs3",name:{en:"Line 3","zh-Hans":"3号线","zh-Hant":"3號線"},uploadBy:"clearng",style:"gzmtr"},{filename:"tnh1",name:{en:"Nanhai Tram Line 1","zh-Hans":"南海有轨1号线","zh-Hant":"南海有軌1號線"},uploadBy:"clearng-kly",style:"gzmtr"},{filename:"tgm1",name:{en:"Gaoming Tram","zh-Hans":"高明有轨电车","zh-Hant":"高明有軌電車"},uploadBy:"clearng-kly",style:"gzmtr"}],$e=[{filename:"hrb1",name:{en:"Line 1","zh-Hans":"1号线","zh-Hant":"1號線"},uploadBy:"AnDanJuneUnderline"},{filename:"hrb2",name:{en:"Line 2","zh-Hans":"2号线","zh-Hant":"2號線"},uploadBy:"AnDanJuneUnderline"},{filename:"hrb3",name:{en:"Line 3","zh-Hans":"3号线","zh-Hant":"3號線"},uploadBy:"AnDanJuneUnderline"}],Fe=[{filename:"km1",name:{en:"Line 1","zh-Hans":"1号线","zh-Hant":"1號線"},uploadBy:"52PD",style:"gzmtr"},{filename:"km2",name:{en:"Line 2","zh-Hans":"2号线","zh-Hant":"2號線"},uploadBy:"52PD",style:"gzmtr"},{filename:"km3",name:{en:"Line 3","zh-Hans":"3号线","zh-Hant":"3號線"},uploadBy:"52PD",style:"gzmtr"},{filename:"km4",name:{en:"Line 4","zh-Hans":"4号线","zh-Hant":"4號線"},uploadBy:"52PD",style:"gzmtr"},{filename:"km5",name:{en:"Line 5","zh-Hans":"5号线","zh-Hant":"5號線"},uploadBy:"52PD",style:"gzmtr"},{filename:"km6",name:{en:"Line 6","zh-Hans":"6号线","zh-Hant":"6號線"},uploadBy:"52PD",style:"gzmtr"}],Ge=[{filename:"klMonorail",name:{en:"KL Monorail",ms:"KL Monorail","zh-Hans":"吉隆坡单轨","zh-Hant":"吉隆坡單軌"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"lrtAmpang",name:{en:"Ampang Line",ms:"Laluan Ampang","zh-Hans":"安邦线","zh-Hant":"安邦線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"lrtKelanaJaya",name:{en:"Kelana Jaya Line",ms:"Laluan Kelana Jaya","zh-Hans":"格拉那再也线","zh-Hant":"格拉那再也線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"lrtSriPataling",name:{en:"Sri Pataling Line",ms:"Laluan Sri Pataling","zh-Hans":"大城堡线","zh-Hant":"大城堡線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"mrtKajang",name:{en:"Kajang Line",ms:"Laluan Kajang","zh-Hans":"加影线","zh-Hant":"加影線"},uploadBy:"linchen1965",style:"gzmtr"}],We=[{filename:"orange",name:{en:"Orange Line",ur:"اورنج لائن","zh-Hans":"橙线","zh-Hant":"橙線"},uploadBy:"Dingdong2334",style:"gzmtr"}],Ye=[{filename:"taipa",name:{en:"Taipa Line",pt:"Linha Taipa","zh-Hans":"氹仔线","zh-Hant":"氹仔線"},uploadBy:"wongchito",style:"mtr"}],Ve=[{filename:"nb1",name:{en:"Line 1","zh-Hans":"1号线","zh-Hant":"1號線"},uploadBy:"feitongxiaok",style:"shmetro"},{filename:"nb2",name:{en:"Line 2","zh-Hans":"2号线","zh-Hant":"2號線"},uploadBy:"feitongxiaok",style:"shmetro"},{filename:"nb3",name:{en:"Line 3/Ningbo-Fenghua Intercity Railway","zh-Hans":"3号线/宁奉城际","zh-Hant":"3號線/寧奉城際"},uploadBy:"feitongxiaok",style:"shmetro"},{filename:"nb4",name:{en:"Line 4","zh-Hans":"4号线","zh-Hant":"4號線"},uploadBy:"feitongxiaok",style:"shmetro"},{filename:"nb5",name:{en:"Line 5","zh-Hans":"5号线","zh-Hant":"5號線"},uploadBy:"feitongxiaok",style:"shmetro"}],Xe=[{filename:"nj1",name:{en:"Line 1","zh-Hans":"1号线","zh-Hant":"1號線"},uploadBy:"linchen1965",style:"mtr"},{filename:"nj2",name:{en:"Line 2","zh-Hans":"2号线","zh-Hant":"2號線"},uploadBy:"linchen1965",style:"mtr"},{filename:"nj3",name:{en:"Line 3","zh-Hans":"3号线","zh-Hant":"3號線"},uploadBy:"linchen1965",style:"mtr"},{filename:"nj4",name:{en:"Line 4","zh-Hans":"4号线","zh-Hant":"4號線"},uploadBy:"linchen1965",style:"mtr"},{filename:"nj10",name:{en:"Line 10","zh-Hans":"10号线","zh-Hant":"10號線"},uploadBy:"linchen1965",style:"mtr"}],Ze=[{filename:"qd2",name:{en:"Line 2","zh-Hans":"2号线","zh-Hant":"2號線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"qd3",name:{en:"Line 3","zh-Hans":"3号线","zh-Hant":"3號線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"qd8",name:{en:"Line 8","zh-Hans":"8号线","zh-Hant":"8號線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"qd11",name:{en:"Line 11","zh-Hans":"11号线","zh-Hant":"11號線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"qd13",name:{en:"Line 13","zh-Hans":"13号线","zh-Hant":"13號線"},uploadBy:"linchen1965",style:"gzmtr"}],Qe=[{filename:"st1",name:{en:"Line 1","zh-Hans":"1号线","zh-Hant":"1號缐"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"st2",name:{en:"Line 2","zh-Hans":"2号线","zh-Hant":"2號缐"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"st3",name:{en:"Line 3","zh-Hans":"3号线","zh-Hant":"3號缐"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"st4",name:{en:"Line 4","zh-Hans":"4号线","zh-Hant":"4號缐"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"st5",name:{en:"Line 5","zh-Hans":"5号线","zh-Hant":"5號缐"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"st6",name:{en:"Line 6","zh-Hans":"6号线","zh-Hant":"6號缐"},uploadBy:"linchen1965",style:"gzmtr"}],en=[{filename:"sp1",name:{en:"Line 1",pt:"Linha 1","zh-Hans":"1号线","zh-Hant":"1號線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"sp2",name:{en:"Line 2",pt:"Linha 2","zh-Hans":"2号线","zh-Hant":"2號線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"sp3",name:{en:"Line 3",pt:"Linha 3","zh-Hans":"3号线","zh-Hant":"3號線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"sp4",name:{en:"Line 4",pt:"Linha 4","zh-Hans":"4号线","zh-Hant":"4號線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"sp5",name:{en:"Line 5",pt:"Linha 5","zh-Hans":"5号线","zh-Hant":"5號線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"sp7",name:{en:"Line 7",pt:"Linha 7","zh-Hans":"7号线","zh-Hant":"7號線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"sp8",name:{en:"Line 8",pt:"Linha 8","zh-Hans":"8号线","zh-Hant":"8號線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"sp9",name:{en:"Line 9",pt:"Linha 9","zh-Hans":"9号线","zh-Hant":"9號線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"sp10",name:{en:"Line 10",pt:"Linha 10","zh-Hans":"10号线","zh-Hant":"10號線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"sp11",name:{en:"Line 11",pt:"Linha 11","zh-Hans":"11号线","zh-Hant":"11號線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"sp12",name:{en:"Line 12",pt:"Linha 12","zh-Hans":"12号线","zh-Hant":"12號線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"sp13",name:{en:"Line 13",pt:"Linha 13","zh-Hans":"13号线","zh-Hant":"13號線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"sp15",name:{en:"Line 15",pt:"Linha 15","zh-Hans":"15号线","zh-Hant":"15號線"},uploadBy:"linchen1965",style:"gzmtr"}],nn=[{filename:"l3",name:{en:"Line 3",ko:"3호선","zh-Hans":"3号线","zh-Hant":"3號線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"l7",name:{en:"Line 7",ko:"7호선","zh-Hans":"7号线","zh-Hant":"7號線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"l8",name:{en:"Line 8",ko:"8호선","zh-Hans":"8号线","zh-Hant":"8號線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"l9",name:{en:"Line 9",ko:"9호선","zh-Hans":"9号线","zh-Hant":"9號線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"gyeonggang",name:{en:"Gyeonggang Line",ko:"경강선","zh-Hans":"京江线","zh-Hant":"京江線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"suinbundang",name:{en:"Suin-Bundang Line",ko:"수인·분당선","zh-Hans":"水仁·盆唐线","zh-Hant":"水仁·盆唐線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"sillim",name:{en:"Sillim Line",ko:"신림선","zh-Hans":"新林线","zh-Hant":"新林線"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"everline",name:{en:"EverLine",ko:"에버라인","zh-Hans":"龙仁轻电铁","zh-Hant":"龍仁輕電鐵"},uploadBy:"linchen1965",style:"gzmtr"},{filename:"gimpogoldline",name:{en:"Gimpo Goldline",ko:"김포골드라인","zh-Hans":"金浦都市铁道","zh-Hant":"金浦都市鐵道"},uploadBy:"linchen1965",style:"gzmtr"}],an=[{filename:"sz1",name:{en:"Line 1","zh-Hans":"1号线","zh-Hant":"1號線"},style:"mtr"},{filename:"sz2",name:{en:"Line 2","zh-Hans":"2号线","zh-Hant":"2號線"},uploadBy:"Dingdong2334",style:"mtr"},{filename:"sz3",name:{en:"Line 3","zh-Hans":"3号线","zh-Hant":"3號線"},style:"mtr"},{filename:"sz4",name:{en:"Line 4","zh-Hans":"4号线","zh-Hant":"4號線"},style:"mtr"},{filename:"sz5",name:{en:"Line 5","zh-Hans":"5号线","zh-Hant":"5號線"},uploadBy:"s1s1s1s1s1s",style:"mtr"},{filename:"sz6",name:{en:"Line 6","zh-Hans":"6号线","zh-Hant":"6號線"},uploadBy:"s1s1s1s1s1s",style:"mtr"},{filename:"sz7",name:{en:"Line 7","zh-Hans":"7号线","zh-Hant":"7號線"},uploadBy:"s1s1s1s1s1s",style:"mtr"},{filename:"sz8",name:{en:"Line 8","zh-Hans":"8号线","zh-Hant":"8號線"},uploadBy:"Dingdong2334",style:"mtr"},{filename:"sz9",name:{en:"Line 9","zh-Hans":"9号线","zh-Hant":"9號線"},uploadBy:"s1s1s1s1s1s",style:"mtr"},{filename:"sz10",name:{en:"Line 10","zh-Hans":"10号线","zh-Hant":"10號線"},uploadBy:"s1s1s1s1s1s",style:"mtr"},{filename:"sz11",name:{en:"Line 11","zh-Hans":"11号线","zh-Hant":"11號線"},uploadBy:"s1s1s1s1s1s",style:"mtr"},{filename:"sz20",name:{en:"Line 20","zh-Hans":"20号线","zh-Hant":"20號線"},uploadBy:"s1s1s1s1s1s",style:"mtr"}],tn=[{filename:"br",name:{en:"Wenhu Line (BR)","zh-Hans":"文湖线","zh-Hant":"文湖线"},uploadBy:"Andy1782010",style:"gzmtr"},{filename:"r",name:{en:"Tamsui-Xinyi Line (R)","zh-Hans":"淡水信义线","zh-Hant":"淡水信義線"},uploadBy:"Andy1782010",style:"gzmtr"},{filename:"g",name:{en:"Songshan-Xindian Line (G)","zh-Hans":"松山新店线","zh-Hant":"松山新店線"},uploadBy:"Andy1782010",style:"gzmtr"},{filename:"o",name:{en:"Zhonghe-Xinlu Line (O)","zh-Hans":"中和新芦线","zh-Hant":"中和新蘆線"},uploadBy:"Andy1782010",style:"gzmtr"},{filename:"bl",name:{en:"Bannan Line (BL)","zh-Hans":"板南线","zh-Hant":"板南線"},uploadBy:"Andy1782010",style:"gzmtr"},{filename:"y",name:{en:"Circular Line (Y)","zh-Hans":"环状线","zh-Hant":"環狀線"},uploadBy:"Andy1782010",style:"gzmtr"}],sn=[{filename:"ttc1",name:{en:"Line 1 Yonge-University",fr:"Ligne 1 Yonge-University","zh-Hans":"1 央街－大学线","zh-Hant":"1 央街－大學線"},uploadBy:"52PD",style:"mtr"},{filename:"ttc2",name:{en:"Line 2 Bloor-Danforth",fr:"Ligne 2 Bloor-Danforth","zh-Hans":"2 布鲁亚－丹佛线","zh-Hant":"2 布魯亞－丹佛線"},uploadBy:"52PD",style:"mtr"},{filename:"ttc3",name:{en:"Line 3 Scarborough",fr:"Ligne 3 Scarborough","zh-Hans":"3 士嘉堡轻铁","zh-Hant":"3 士嘉堡輕鐵"},uploadBy:"52PD",style:"mtr"},{filename:"ttc4",name:{en:"Line 4 Sheppard",fr:"Ligne 4 Sheppard","zh-Hans":"4 雪柏线","zh-Hant":"4 雪柏線"},uploadBy:"52PD",style:"mtr"}],ln=[{filename:"wh1",name:{en:"Line 1","zh-Hans":"1号线","zh-Hant":"1號線"},uploadBy:"Dingdong2334",style:"gzmtr"}],mn=[{filename:"zz1",name:{en:"Line 1","zh-Hans":"1号线","zh-Hant":"1號線"},uploadBy:"C1P918R",style:"gzmtr"},{filename:"zz2",name:{en:"Line 2","zh-Hans":"2号线","zh-Hant":"2號線"},uploadBy:"C1P918R",style:"gzmtr"},{filename:"zz3",name:{en:"Line 3","zh-Hans":"3号线","zh-Hant":"3號線"},uploadBy:"C1P918R",style:"gzmtr"},{filename:"zz4",name:{en:"Line 4","zh-Hans":"4号线","zh-Hant":"4號線"},uploadBy:"C1P918R",style:"gzmtr"},{filename:"zz5",name:{en:"Line 5","zh-Hans":"5号线","zh-Hant":"5號線"},uploadBy:"C1P918R",style:"shmetro"},{filename:"zz6",name:{en:"Line 6","zh-Hans":"6号线","zh-Hant":"6號線"},uploadBy:"C1P918R",style:"gzmtr"},{filename:"zz9",name:{en:"Line 9","zh-Hans":"9号线","zh-Hant":"9號線"},uploadBy:"C1P918R",style:"gzmtr"},{filename:"zz14",name:{en:"Line 14","zh-Hans":"14号线","zh-Hant":"14號線"},uploadBy:"C1P918R",style:"gzmtr"}],on={basic:Je,mtr:Ue,gzmtr:Ie,shmetro:xe,bjsubway:_e,chengdumetro:Oe,crt:qe,fmetro:Ke,hrbmetro:$e,kmrailtransit:Fe,kvtransit:Ge,lahoremetro:We,mlm:Ye,nbrailtransit:Ve,njmetro:Xe,qdmetro:Ze,santiagometro:Qe,saopaulometro:en,seoulmetro:nn,szmetro:an,taipeimrt:tn,torontosubway:sn,whrt:ln,zzmetro:mn};var A;(function(e){e.MTR="mtr",e.GZMTR="gzmtr",e.SHMetro="shmetro"})(A||(A={}));var E;(function(e){e.Azerbaijani="az",e.Arabic="ar",e.Catalan="ca",e.Chinese="zh",e.ChineseCN="zh-CN",e.ChineseSimp="zh-Hans",e.ChineseTrad="zh-Hant",e.ChineseHK="zh-HK",e.ChineseTW="zh-TW",e.English="en",e.French="fr",e.Gaelic="ga",e.German="de",e.Hindi="hi",e.Japanese="ja",e.Korean="ko",e.Malay="ms",e.Norwegian="no",e.Spanish="es",e.Persian="fa",e.Portuguese="pt",e.Russian="ru",e.Swedish="sv",e.Turkish="tr"})(E||(E={}));const hn=ve,rn=on,zn=e=>{const n=document.createElement("details");n.setAttribute("repo","rmg-templates"),n.setAttribute("company",e.id),n.setAttribute("line","_config");const a=document.createElement("summary");a.textContent="New company: "+e.name.en,n.append(a);const s=document.createElement("details");return s.setAttribute("type","name"),s.textContent=JSON.stringify(e.name),n.append(s),n},yn=(e,n,a,s)=>{const t=document.createElement("details");t.setAttribute("repo","rmg-templates"),t.setAttribute("company",e),t.setAttribute("line",n);const i=document.createElement("summary");i.textContent=`${e}/${n}`,t.append(i);const o=document.createElement("details");o.setAttribute("type","name"),o.textContent=JSON.stringify(a),t.append(o);const r=document.createElement("details");return r.setAttribute("type","param"),r.textContent=JSON.stringify(s),t.append(r),t},gn={en:"English","zh-Hans":"Simplified Chinese","zh-Hant":"Traditional Chinese"},k=()=>({id:crypto.randomUUID(),line:"",newLine:"",templateName:{en:"","zh-Hans":"","zh-Hant":""},param:void 0}),C={company:"",newCompany:"",companyName:{en:"","zh-Hans":"","zh-Hant":""},templates:[]},R=P({name:"ticket",initialState:C,reducers:{setCompany:(e,n)=>{e.company=n.payload},setNewCompany:(e,n)=>{e.newCompany=n.payload},setCompanyNameByLang:(e,n)=>{const{lang:a,name:s}=n.payload;e.companyName[a]=s},addTemplate:e=>{e.templates.push(k())},setTemplateLineById:(e,n)=>{var o,r,c,h,z,y,L;const{id:a,line:s}=n.payload,t={...(o=e.templates.find(p=>p.id===a))!=null?o:k(),line:s},i=(r=rn[e.company])==null?void 0:r.find(p=>p.filename===s);i&&(t.templateName.en=(c=i.name.en)!=null?c:"",t.templateName["zh-Hans"]=(h=i.name["zh-Hans"])!=null?h:"",t.templateName["zh-Hant"]=(L=(y=(z=i.name["zh-Hant"])!=null?z:i.name["zh-HK"])!=null?y:i.name["zh-TW"])!=null?L:""),e.templates=e.templates.map(p=>p.id===a?t:p)},setTemplateNewLineById:(e,n)=>{e.templates=e.templates.map(a=>a.id===n.payload.id?{...a,newLine:n.payload.newLine}:a)},setTemplateLineNameById:(e,n)=>{e.templates=e.templates.map(a=>a.id===n.payload.id?{...a,templateName:{...a.templateName,[n.payload.lang]:n.payload.name}}:a)},setTemplateParamById:(e,n)=>{e.templates=e.templates.map(a=>a.id===n.payload.id?{...a,param:n.payload.param}:a)},removeTemplate:(e,n)=>{e.templates=e.templates.filter(a=>a.id!==n.payload)},resetTicket:()=>C}}),Ln={getCompanyEnglishName:e=>{var n,a,s;return e.company==="new"?e.companyName.en:(s=(a=(n=hn.find(t=>t.id===e.company))==null?void 0:n.name)==null?void 0:a.en)!=null?s:""},getCompanyBlock:e=>e.company!=="new"?null:zn({id:e.newCompany,name:e.companyName}),getTemplateBlocks:e=>{const n=e.company==="new"?e.newCompany:e.company;return e.templates.map(a=>{const s=a.line==="new"?a.newLine:a.line;return yn(n,s,a.templateName,a.param)})},getCompanyErrors:e=>{const n=[],{company:a,newCompany:s,companyName:t}=e;return(!a||a==="new"&&!s)&&n.push("COMPANY_CODE_UNDEFINED"),a==="new"&&Object.values(t).some(i=>!i)&&n.push("COMPANY_NAME_INCOMPLETE"),n},getTemplateErrors:e=>{const n={Overall:[]},{templates:a}=e;return a.length===0&&n.Overall.push("TEMPLATE_SECTION_EMPTY"),a.some(s=>!s.line||s.line==="new"&&!s.newLine)&&n.Overall.push("TEMPLATE_CODE_UNDEFINED"),new Set(a.map(s=>s.line==="new"?s.newLine:s.line)).size!==a.length&&n.Overall.push("TEMPLATE_CODE_DUPLICATED"),a.forEach(s=>{const t=[];Object.values(s.templateName).some(i=>!i)&&t.push("TEMPLATE_NAME_INCOMPLETE"),s.param||t.push("TEMPLATE_PARAM_UNDEFINED"),n["Line "+s.line||s.newLine]=t}),n}},{setCompany:Bn,setNewCompany:Tn,setCompanyNameByLang:wn,addTemplate:bn,setTemplateLineById:An,setTemplateNewLineById:En,setTemplateLineNameById:kn,setTemplateParamById:Cn,removeTemplate:Dn,resetTicket:Pn}=R.actions,dn=R.reducer,pn=X(),j=Z({reducer:{app:je,ticket:dn},middleware:e=>e().prepend(pn.middleware)}),Sn=()=>Q(),Nn=ee;window.rmgStore=j;let D;const Hn=()=>{D=ne(document.getElementById("root")),D.render(l(g.StrictMode,{children:l(ae,{store:j,children:l(te,{theme:se,children:l(ie,{i18n:u,children:l(Me,{})})})})}))};d.ready().then(()=>{Hn(),d.injectCss()});export{gn as A,un as __vite_legacy_guard,Sn as a,Bn as b,hn as c,Tn as d,wn as e,An as f,En as g,kn as h,Cn as i,bn as j,Ln as k,Pn as l,Dn as r,fn as s,rn as t,Nn as u};
