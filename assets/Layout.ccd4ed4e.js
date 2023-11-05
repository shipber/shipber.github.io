var ue=Object.defineProperty,de=Object.defineProperties;var _e=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var oe=(e,t,n)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t)=>{for(var n in t||(t={}))me.call(t,n)&&oe(e,n,t[n]);if(ne)for(var n of ne(t))pe.call(t,n)&&oe(e,n,t[n]);return e},ae=(e,t)=>de(e,_e(t));import{l as he,X as ge,Y as ve,_ as C,m as P,h as I,k as v,O as H,o as r,c as u,b as g,q as s,P as x,B as f,z as k,r as y,G as T,H as E,D as Y,a as h,K as V,L as fe,g as se,w as F,d as O,W as le,E as ke,F as $e,f as R,Z as ye,i as be,s as ce,u as Le,M as Be,N as Ce,$ as Pe,J as Se,a0 as z,T as we}from"./app.ff164605.js";import{r as Ie,L as ie,u as Ne,C as xe}from"./index.12502b74.js";import{P as Xe,a as Te,t as Ee,b as Fe}from"./Pagation.d6bc0186.js";let A=null,M=null;const De={wait:()=>A,pending:()=>{A=new Promise(e=>M=e)},resolve:()=>{M==null||M(),A=null,M=null}},Me=()=>De,Ve={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Re=({docsRepo:e,docsBranch:t,docsDir:n,path:d,editLinkPattern:a})=>{const l=Ie(e);let c;if(a?c=a:l!==null&&(c=Ve[l]),!c)return null;const o=d.replace(/\.html$/,".md");return c.replace(/:repo/,he(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,ge(`${ve(n)}/${o}`))};function G(){const e=["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87","#e15b64","#f47e60","#f8b26a","#f26d6d","#67cc86","#fb9b5f","#3498db"],t=Math.floor(Math.random()*e.length);return e[t]}const He={class:"hero-content"},ze=["src"],Ae={key:1},Ue={key:2},Ye=P({__name:"Banner",setup(e){const t=I(),n=v(()=>{var l,c,o,i;return(c=(l=t.value)==null?void 0:l.banner)!=null&&c.heroImage?H((i=(o=t.value)==null?void 0:o.banner)==null?void 0:i.heroImage):null}),d=v(()=>t.value.banner.heroImageStyle||{}),a=v(()=>{var i;const{bgImageStyle:l,bgImage:c}=((i=t.value)==null?void 0:i.banner)||{},o=c?{textAlign:"center",overflow:"hidden",background:`url(${H(c)}) center/cover no-repeat`}:{};return l?N(N({},o),l):o});return(l,c)=>{var o,i,m,_,p,b,L,$;return r(),u("section",{class:"banner-wrapper",style:x(N({},s(a)))},[g("div",He,[s(n)?(r(),u("img",{key:0,src:s(n),style:x({heroImageStyle:s(d)}),alt:"heroImage"},null,12,ze)):f("",!0),(i=(o=s(t))==null?void 0:o.banner)!=null&&i.heroText?(r(),u("h1",Ae,k((_=(m=s(t))==null?void 0:m.banner)==null?void 0:_.heroText),1)):f("",!0),(b=(p=s(t))==null?void 0:p.banner)!=null&&b.tagline?(r(),u("p",Ue,k(($=(L=s(t))==null?void 0:L.banner)==null?void 0:$.tagline),1)):f("",!0)])],4)}}});var Oe=C(Ye,[["__file","Banner.vue"]]);const Ge={class:"hero-content"},qe=["src"],We={class:"hero-text"},je={key:0},Je={key:1},Ke={key:2,class:"btn-group"},Qe={key:3,class:"social-links"},Ze=P({__name:"BannerBrand",setup(e){const t=I(),n=v(()=>{var o,i,m,_;return(i=(o=t.value)==null?void 0:o.bannerBrand)!=null&&i.heroImage?H((_=(m=t.value)==null?void 0:m.bannerBrand)==null?void 0:_.heroImage):null}),d=v(()=>{var o,i;return((i=(o=t.value)==null?void 0:o.bannerBrand)==null?void 0:i.buttons)||[]}),a=v(()=>{var o,i;return(((i=(o=t.value)==null?void 0:o.bannerBrand)==null?void 0:i.socialLinks)||[]).map(m=>(m.color||(m.color=G()),m))}),l=v(()=>t.value.bannerBrand.heroImageStyle||{}),c=v(()=>{var _;const{bgImageStyle:o,bgImage:i}=((_=t.value)==null?void 0:_.bannerBrand)||{},m=i?{overflow:"hidden",background:`url(${H(i)}) center/cover no-repeat`}:{};return o?N(N({},m),o):m});return(o,i)=>{var _,p,b,L,$,S,w,D;const m=y("Xicons");return r(),u("section",{class:"banner-brand-wrapper",style:x(N({},s(c)))},[g("div",Ge,[s(n)?(r(),u("img",{key:0,src:s(n),style:x({heroImageStyle:s(l)}),alt:"heroImage"},null,12,qe)):f("",!0),g("div",We,[(p=(_=s(t))==null?void 0:_.bannerBrand)!=null&&p.heroText?(r(),u("h1",je,k((L=(b=s(t))==null?void 0:b.bannerBrand)==null?void 0:L.heroText),1)):f("",!0),(S=($=s(t))==null?void 0:$.bannerBrand)!=null&&S.tagline?(r(),u("p",Je,k((D=(w=s(t))==null?void 0:w.bannerBrand)==null?void 0:D.tagline),1)):f("",!0),s(d).length>0?(r(),u("ul",Ke,[(r(!0),u(T,null,E(s(d),(B,X)=>(r(),u("li",{class:Y(B.type),key:X},[h(m,{icon:B.icon,text:B.text,link:B.link,"icon-size":"20","text-size":"14"},null,8,["icon","text","link"])],2))),128))])):f("",!0),s(a).length>0?(r(),u("ul",Qe,[(r(!0),u(T,null,E(s(a),(B,X)=>(r(),u("li",{class:"social-item",key:X},[h(m,{icon:B.icon,link:B.link,style:x({color:B.color})},null,8,["icon","link","style"])]))),128))])):f("",!0)])])],4)}}});var et=C(Ze,[["__file","BannerBrand.vue"]]);const tt=P({setup(e,t){const n=V(),d=I(),a=v(()=>{var l,c;return(((c=(l=d.value)==null?void 0:l.blog)==null?void 0:c.socialLinks)||[]).map(o=>(o.color||(o.color=G()),o))});return{themeLocal:n,socialLinks:a}}}),nt={class:"personal-info-wrapper"},ot=["src"],at={key:1,class:"name"},st={class:"social-links"},rt=g("hr",null,null,-1);function lt(e,t,n,d,a,l){const c=y("Xicons");return r(),u("div",nt,[e.themeLocal.authorAvatar?(r(),u("img",{key:0,class:"personal-img",src:e.$withBase(e.themeLocal.authorAvatar),alt:"author-avatar"},null,8,ot)):f("",!0),e.themeLocal.author?(r(),u("p",at,k(e.themeLocal.author),1)):f("",!0),g("ul",st,[(r(!0),u(T,null,E(e.socialLinks,(o,i)=>(r(),u("li",{class:"social-item",key:i},[h(c,{icon:o.icon,link:o.link,style:x({color:o.color})},null,8,["icon","link","style"])]))),128))]),rt])}var ct=C(tt,[["render",lt],["__file","PersonalInfo.vue"]]);const it={class:"home-blog-content"},ut={class:"blog-list"},dt={class:"info-wrapper"},_t={class:"module-title"},mt={class:"category-wrapper"},pt={class:"text"},ht={class:"num"},gt={class:"module-title"},vt={class:"tag-wrapper"},ft=P({__name:"Blog",setup(e){const{posts:t,classificationSummary:n}=fe(),d=se(1),a=se(0),l=10,c=v(()=>{var _,p;return((p=(_=n.value)==null?void 0:_.categories)==null?void 0:p.items)||[]}),o=v(()=>{var _,p;return((p=(_=n.value)==null?void 0:_.tags)==null?void 0:p.items)||[]}),i=v(()=>{const _=(d.value-1)*l,p=d.value*l;return(t.value||[]).slice(_,p)});let m=_=>{};return m=_=>{if(d.value=_,a.value===0){const p=document.querySelector(".home-blog-content");p&&(a.value=p.getBoundingClientRect().top)}setTimeout(()=>{window.scrollTo({left:0,top:-a.value,behavior:"smooth"})},100)},(_,p)=>{const b=y("Xicons"),L=y("router-link");return r(),u("section",it,[g("section",ut,[h(Xe,{data:s(i),total:s(t).length,"page-size":10,"current-page":d.value},null,8,["data","total","current-page"]),h(Te,{currentPage:d.value,total:s(t).length,onChange:s(m)},null,8,["currentPage","total","onChange"])]),g("section",dt,[h(ct),g("h4",_t,[h(b,{icon:"Folder",text:"Categories"})]),g("ul",mt,[(r(!0),u(T,null,E(s(c),($,S,w)=>(r(),u("li",{class:"category-item",key:w},[h(L,{class:"category-link",to:`/categories/${S}/1/`},{default:F(()=>[g("span",pt,k($.label),1),g("span",ht,k($.length),1)]),_:2},1032,["to"])]))),128))]),g("h4",gt,[h(b,{icon:"Tag",text:"Tags"})]),g("ul",vt,[(r(!0),u(T,null,E(s(o),($,S,w)=>(r(),u("li",{class:"tag-item",key:w,style:x({borderColor:s(G)()})},[h(L,{class:"tag-link",to:`/tags/${S}/1/`},{default:F(()=>[O(k($.label),1)]),_:2},1032,["to"])],4))),128))])])])}}});var kt=C(ft,[["__file","Blog.vue"]]);const $t={},yt={class:"theme-reco-default-content"};function bt(e,t){const n=y("Content");return r(),u("section",yt,[h(n)])}var Lt=C($t,[["render",bt],["__file","MdContent.vue"]]);const Bt={class:"footer-wrapper"},Ct={key:0},Pt={key:0},St=O("\xA0\xA0 "),wt={key:1},It={key:1,class:"cyber-security"},Nt=g("img",{src:"https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png",alt:""},null,-1),xt=["href"],Xt={__name:"Footer",setup(e){const t=V(),n=I(),{solution:d,options:a}=le(),l=v(()=>d.value!=="valine"?!1:a.value.visitor!=!1);return(c,o)=>{var p,b,L,$,S,w,D,B,X,q,W,j;const i=y("Xicons"),m=y("ValineViews"),_=y("Comments");return r(),u("div",Bt,[(b=(p=s(n))==null?void 0:p.footer)!=null&&b.record?(r(),u("span",Ct,[h(i,{icon:"ShieldCheck",link:(($=(L=s(n))==null?void 0:L.footer)==null?void 0:$.recordLink)||"#",text:(w=(S=s(n))==null?void 0:S.footer)==null?void 0:w.record},null,8,["link","text"])])):f("",!0),g("span",null,[h(i,{icon:"Copyright"},{default:F(()=>{var J,K,Q,Z,ee,te;return[s(t).author?(r(),u("a",Pt,k(s(t).author),1)):f("",!0),St,((K=(J=s(n))==null?void 0:J.footer)==null?void 0:K.startYear)&&((Z=(Q=s(n))==null?void 0:Q.footer)==null?void 0:Z.startYear)!=new Date().getFullYear()?(r(),u("a",wt,k((te=(ee=s(n))==null?void 0:ee.footer)==null?void 0:te.startYear)+" - ",1)):f("",!0),O(" "+k(new Date().getFullYear()),1)]}),_:1})]),ke(g("span",null,[h(i,{icon:"Eye"},{default:F(()=>[h(m,{idVal:"/",numStyle:{}})]),_:1})],512),[[$e,s(l)]]),(B=(D=s(n))==null?void 0:D.footer)!=null&&B.cyberSecurityRecord?(r(),u("p",It,[Nt,g("a",{href:((q=(X=s(n))==null?void 0:X.footer)==null?void 0:q.cyberSecurityLink)||"#"},k((j=(W=s(n))==null?void 0:W.footer)==null?void 0:j.cyberSecurityRecord),9,xt)])):f("",!0),h(_,{"hide-comments":!0})])}}};var Tt=C(Xt,[["__file","Footer.vue"]]);const Et={class:"home-wrapper"},Ft=P({name:"HomeWrapper",components:{Banner:Oe,BannerBrand:et,Blog:kt,MdContent:Lt,Footer:Tt}}),Dt=P(ae(N({},Ft),{setup(e){const t=I();return(n,d)=>(r(),u("div",Et,[(r(!0),u(T,null,E(s(t).modules||["Banner","Blog","Footer"],a=>(r(),R(ye(a),{key:a}))),128))]))}}));var Mt=C(Dt,[["__file","index.vue"]]);const re=e=>e===!1?null:Be(e)?Ce(e):Pe(e)?e:!1,U=(e,t,n)=>{const d=e.findIndex(a=>a.link===t);if(d!==-1){const a=e[d+n];return a!=null&&a.link?a:null}for(const a of e)if(a.children){const l=U(a.children,t,n);if(l)return l}return null},Vt=P({name:"PageNav",components:{Link:ie},setup(){const e=I(),t=be(),n=ce(),d=Le(),a=v(()=>{const o=re(e.value.prev);return o!==!1?o:U(t.value,n.path,-1)}),l=v(()=>{const o=re(e.value.next);return o!==!1?o:U(t.value,n.path,1)});return{prevNavLink:a,nextNavLink:l,go:o=>{d.push(o)}}}}),Rt={key:0,class:"page-nav"};function Ht(e,t,n,d,a,l){return e.prevNavLink||e.nextNavLink?(r(),u("nav",Rt,[g("p",{class:Y(["inner",{hasPrev:!!e.prevNavLink,hasNext:!!e.nextNavLink}])},[e.prevNavLink?(r(),u("span",{key:0,class:"page-nav-item prev",onClick:t[0]||(t[0]=c=>e.go(e.prevNavLink.link))}," \u2190 "+k(e.prevNavLink.text),1)):f("",!0),e.nextNavLink?(r(),u("span",{key:1,class:"page-nav-item next",onClick:t[1]||(t[1]=c=>e.go(e.nextNavLink.link))},k(e.nextNavLink.text)+" \u2192 ",1)):f("",!0)],2)])):f("",!0)}var zt=C(Vt,[["render",Ht],["__file","PageNav.vue"]]);const At=()=>{const e=V(),t=z(),n=I();return v(()=>{var _,p;if(!((p=(_=n.value.editLink)!=null?_:e.value.editLink)!=null?p:!0))return null;const{repo:a,docsRepo:l=a,docsBranch:c="main",docsDir:o="",editLinkText:i}=e.value;if(!l)return null;const m=Re({docsRepo:l,docsBranch:c,docsDir:o,path:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return m?{text:i!=null?i:"Edit this page",link:m,icon:"Edit",hideExternalLinkIcon:!0}:null})},Ut=()=>{Se();const e=V(),t=z(),n=I();return v(()=>{var l,c,o,i;if(!((c=(l=n.value.lastUpdated)!=null?l:e.value.lastUpdated)!=null?c:!0)||!((o=t.value.git)!=null&&o.updatedTime))return null;const a=new Date((i=t.value.git)==null?void 0:i.updatedTime);return Ee(a)})},Yt=P({name:"PageMeta",components:{Link:ie},setup(){const e=V(),t=At(),n=Ut();return{themeLocal:e,editNavLink:t,lastUpdated:n}}}),Ot={class:"page-meta"};function Gt(e,t,n,d,a,l){return r(),u("footer",Ot)}var qt=C(Yt,[["render",Gt],["__file","PageMeta.vue"]]);const Wt=P({name:"Page",components:{PageInfo:Fe,PageNav:zt,PageMeta:qt},setup(){const e=z(),{options:t}=le();ce();const n=v(()=>{var a,l,c;return((l=(a=e==null?void 0:e.value)==null?void 0:a.frontmatter)==null?void 0:l.title)||((c=e==null?void 0:e.value)==null?void 0:c.title)||""}),d=v(()=>{var c;const{hideComments:a}=(c=e==null?void 0:e.value)==null?void 0:c.frontmatter,{hideComments:l}=t.value;return a===!0||a!==!1&&l===!0});return{title:n,pageData:e,shouldHideComments:d}}}),jt={class:"page-container"},Jt={key:0,class:"page-title"},Kt={class:"theme-reco-default-content"};function Qt(e,t,n,d,a,l){const c=y("PageInfo"),o=y("Content"),i=y("PageMeta"),m=y("PageNav"),_=y("Comments");return r(),u("main",jt,[e.title?(r(),u("h1",Jt,k(e.title),1)):f("",!0),h(c,{"page-data":e.pageData},null,8,["page-data"]),g("div",Kt,[h(o)]),h(i),h(m),h(_,{"hide-comments":e.shouldHideComments},null,8,["hide-comments"])])}var Zt=C(Wt,[["render",Qt],["__file","Page.vue"]]);const en={class:"theme-container"},tn=P({__name:"Layout",setup(e){const t=z(),n=I(),{isShowSidebar:d,isShowCatalog:a}=Ne(),l=Me(),c=l.resolve,o=l.pending;return(i,m)=>(r(),u("div",en,[h(xe,null,{default:F(()=>[s(n).home===!0?(r(),R(Mt,{key:0})):(r(),R(we,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:s(c),onBeforeLeave:s(o)},{default:F(()=>[(r(),R(Zt,{key:s(t).path,class:Y({"show-series":s(d),"show-catalog":s(a)})},null,8,["class"]))]),_:1},8,["onBeforeEnter","onBeforeLeave"]))]),_:1})]))}});var rn=C(tn,[["__file","Layout.vue"]]);export{rn as default};