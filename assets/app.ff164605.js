var oo=Object.defineProperty,so=Object.defineProperties;var co=Object.getOwnPropertyDescriptors;var an=Object.getOwnPropertySymbols;var M3=Object.prototype.hasOwnProperty,C3=Object.prototype.propertyIsEnumerable;var $3=(t,n,e)=>n in t?oo(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,E1=(t,n)=>{for(var e in n||(n={}))M3.call(n,e)&&$3(t,e,n[e]);if(an)for(var e of an(n))C3.call(n,e)&&$3(t,e,n[e]);return t},hn=(t,n)=>so(t,co(n));var te=(t,n)=>{var e={};for(var l in t)M3.call(t,l)&&n.indexOf(l)<0&&(e[l]=t[l]);if(t!=null&&an)for(var l of an(t))n.indexOf(l)<0&&C3.call(t,l)&&(e[l]=t[l]);return e};const Zn={},lo="modulepreload",z3={},ao="/",R=function(n,e){return!e||e.length===0?n():Promise.all(e.map(l=>{if(l=`${ao}${l}`,l in z3)return;z3[l]=!0;const a=l.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${i}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":lo,a||(d.as="script",d.crossOrigin=""),d.href=l,document.head.appendChild(d),a)return new Promise((p,w)=>{d.addEventListener("load",p),d.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>n())},io={"v-8daa1a0e":()=>R(()=>import("./index.html.e262abc9.js"),[]).then(({data:t})=>t),"v-34809e78":()=>R(()=>import("./Address Validation.html.c8d91b35.js"),[]).then(({data:t})=>t),"v-14ad0361":()=>R(()=>import("./Cancel Label.html.d0f0131d.js"),[]).then(({data:t})=>t),"v-06136d86":()=>R(()=>import("./Conformation.html.ddd6fe47.js"),[]).then(({data:t})=>t),"v-71f0d9f2":()=>R(()=>import("./Create Shipment from Quote.html.6aee74d4.js"),[]).then(({data:t})=>t),"v-379b18f6":()=>R(()=>import("./Create Shipment.html.e87d80a4.js"),[]).then(({data:t})=>t),"v-f9d4e15a":()=>R(()=>import("./Download Label.html.f10f79d0.js"),[]).then(({data:t})=>t),"v-2d0a870d":()=>R(()=>import("./index.html.2fd9e48e.js"),[]).then(({data:t})=>t),"v-35861ada":()=>R(()=>import("./My Profile.html.baa2d118.js"),[]).then(({data:t})=>t),"v-400add34":()=>R(()=>import("./PackageType.html.7cd0a8aa.js"),[]).then(({data:t})=>t),"v-3e1200ca":()=>R(()=>import("./Rate Shopping.html.3084494a.js"),[]).then(({data:t})=>t),"v-290650db":()=>R(()=>import("./Reference.html.a4e77781.js"),[]).then(({data:t})=>t),"v-4833d356":()=>R(()=>import("./Service_Code.html.e002e261.js"),[]).then(({data:t})=>t),"v-df74a268":()=>R(()=>import("./Shipping Service.html.0b132b46.js"),[]).then(({data:t})=>t),"v-40e66132":()=>R(()=>import("./Warehouse Address.html.eb2b2602.js"),[]).then(({data:t})=>t),"v-4efee709":()=>R(()=>import("./Address Validation.html.3e2c3cb8.js"),[]).then(({data:t})=>t),"v-5be0dd34":()=>R(()=>import("./Cancel Label.html.876e66b6.js"),[]).then(({data:t})=>t),"v-2b3e9482":()=>R(()=>import("./Conformation.html.e586547f.js"),[]).then(({data:t})=>t),"v-367689cc":()=>R(()=>import("./Create Shipment from Quote.html.bf2369dd.js"),[]).then(({data:t})=>t),"v-57c12940":()=>R(()=>import("./Create Shipment.html.e924711b.js"),[]).then(({data:t})=>t),"v-720cb018":()=>R(()=>import("./Download Label.html.78d141e7.js"),[]).then(({data:t})=>t),"v-2d0ad528":()=>R(()=>import("./index.html.7ff39bf3.js"),[]).then(({data:t})=>t),"v-63ce661f":()=>R(()=>import("./My Profile.html.57004c4c.js"),[]).then(({data:t})=>t),"v-23894981":()=>R(()=>import("./PackageType.html.2857b841.js"),[]).then(({data:t})=>t),"v-6fb126d6":()=>R(()=>import("./Q_A.html.d753d0ca.js"),[]).then(({data:t})=>t),"v-60339b94":()=>R(()=>import("./Rate Shopping.html.dd20d7fd.js"),[]).then(({data:t})=>t),"v-7d8a53b6":()=>R(()=>import("./Reference.html.bc984435.js"),[]).then(({data:t})=>t),"v-0a2e619a":()=>R(()=>import("./Service_Code.html.e342f4ba.js"),[]).then(({data:t})=>t),"v-c4109b5e":()=>R(()=>import("./Shipping Service.html.878e439a.js"),[]).then(({data:t})=>t),"v-2d166366":()=>R(()=>import("./Warehouse Address.html.b2ce2a4c.js"),[]).then(({data:t})=>t),"v-4cde7c8e":()=>R(()=>import("./list1.html.0a2310e5.js"),[]).then(({data:t})=>t),"v-4e93552d":()=>R(()=>import("./list2.html.c325a318.js"),[]).then(({data:t})=>t),"v-50482dcc":()=>R(()=>import("./list3.html.62d13902.js"),[]).then(({data:t})=>t),"v-51fd066b":()=>R(()=>import("./list4.html.85806531.js"),[]).then(({data:t})=>t),"v-53b1df0a":()=>R(()=>import("./list5.html.eb7f742e.js"),[]).then(({data:t})=>t),"v-3706649a":()=>R(()=>import("./404.html.d341cb57.js"),[]).then(({data:t})=>t),"v-01560935":()=>R(()=>import("./index.html.72ac4063.js"),[]).then(({data:t})=>t),"v-03d52fd3":()=>R(()=>import("./index.html.b57762aa.js"),[]).then(({data:t})=>t),"v-03d52ff2":()=>R(()=>import("./index.html.08b3a957.js"),[]).then(({data:t})=>t),"v-03d53011":()=>R(()=>import("./index.html.9cbf2d78.js"),[]).then(({data:t})=>t)};function Oe(t,n){const e=Object.create(null),l=t.split(",");for(let a=0;a<l.length;a++)e[l[a]]=!0;return n?a=>!!e[a.toLowerCase()]:a=>!!e[a]}const ho="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",po=Oe(ho);function a4(t){return!!t||t===""}function f2(t){if(t1(t)){const n={};for(let e=0;e<t.length;e++){const l=t[e],a=L1(l)?_o(l):f2(l);if(a)for(const i in a)n[i]=a[i]}return n}else{if(L1(t))return t;if(F1(t))return t}}const wo=/;(?![^(]*\))/g,uo=/:(.+)/;function _o(t){const n={};return t.split(wo).forEach(e=>{if(e){const l=e.split(uo);l.length>1&&(n[l[0].trim()]=l[1].trim())}}),n}function O1(t){let n="";if(L1(t))n=t;else if(t1(t))for(let e=0;e<t.length;e++){const l=O1(t[e]);l&&(n+=l+" ")}else if(F1(t))for(const e in t)t[e]&&(n+=e+" ");return n.trim()}function vo(t,n){if(t.length!==n.length)return!1;let e=!0;for(let l=0;e&&l<t.length;l++)e=rt(t[l],n[l]);return e}function rt(t,n){if(t===n)return!0;let e=y3(t),l=y3(n);if(e||l)return e&&l?t.getTime()===n.getTime():!1;if(e=Ot(t),l=Ot(n),e||l)return t===n;if(e=t1(t),l=t1(n),e||l)return e&&l?vo(t,n):!1;if(e=F1(t),l=F1(n),e||l){if(!e||!l)return!1;const a=Object.keys(t).length,i=Object.keys(n).length;if(a!==i)return!1;for(const d in t){const p=t.hasOwnProperty(d),w=n.hasOwnProperty(d);if(p&&!w||!p&&w||!rt(t[d],n[d]))return!1}}return String(t)===String(n)}function Ne(t,n){return t.findIndex(e=>rt(e,n))}const B1=t=>L1(t)?t:t==null?"":t1(t)||F1(t)&&(t.toString===d4||!u1(t.toString))?JSON.stringify(t,i4,2):String(t),i4=(t,n)=>n&&n.__v_isRef?i4(t,n.value):dt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((e,[l,a])=>(e[`${l} =>`]=a,e),{})}:mt(n)?{[`Set(${n.size})`]:[...n.values()]}:F1(n)&&!t1(n)&&!p4(n)?String(n):n,R1={},ht=[],p2=()=>{},xo=()=>!1,go=/^on[^a-z]/,en=t=>go.test(t),Ke=t=>t.startsWith("onUpdate:"),J1=Object.assign,We=(t,n)=>{const e=t.indexOf(n);e>-1&&t.splice(e,1)},mo=Object.prototype.hasOwnProperty,k1=(t,n)=>mo.call(t,n),t1=Array.isArray,dt=t=>rn(t)==="[object Map]",mt=t=>rn(t)==="[object Set]",y3=t=>rn(t)==="[object Date]",u1=t=>typeof t=="function",L1=t=>typeof t=="string",Ot=t=>typeof t=="symbol",F1=t=>t!==null&&typeof t=="object",h4=t=>F1(t)&&u1(t.then)&&u1(t.catch),d4=Object.prototype.toString,rn=t=>d4.call(t),ko=t=>rn(t).slice(8,-1),p4=t=>rn(t)==="[object Object]",Je=t=>L1(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Pt=Oe(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dn=t=>{const n=Object.create(null);return e=>n[e]||(n[e]=t(e))},fo=/-(\w)/g,$2=Dn(t=>t.replace(fo,(n,e)=>e?e.toUpperCase():"")),$o=/\B([A-Z])/g,kt=Dn(t=>t.replace($o,"-$1").toLowerCase()),En=Dn(t=>t.charAt(0).toUpperCase()+t.slice(1)),ne=Dn(t=>t?`on${En(t)}`:""),Nt=(t,n)=>!Object.is(t,n),Cn=(t,n)=>{for(let e=0;e<t.length;e++)t[e](n)},bn=(t,n,e)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value:e})},Kt=t=>{const n=parseFloat(t);return isNaN(n)?t:n};let b3;const Mo=()=>b3||(b3=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let n2;class Co{constructor(n=!1){this.active=!0,this.effects=[],this.cleanups=[],!n&&n2&&(this.parent=n2,this.index=(n2.scopes||(n2.scopes=[])).push(this)-1)}run(n){if(this.active){const e=n2;try{return n2=this,n()}finally{n2=e}}}on(){n2=this}off(){n2=this.parent}stop(n){if(this.active){let e,l;for(e=0,l=this.effects.length;e<l;e++)this.effects[e].stop();for(e=0,l=this.cleanups.length;e<l;e++)this.cleanups[e]();if(this.scopes)for(e=0,l=this.scopes.length;e<l;e++)this.scopes[e].stop(!0);if(this.parent&&!n){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function zo(t,n=n2){n&&n.active&&n.effects.push(t)}function yo(){return n2}function bo(t){n2&&n2.cleanups.push(t)}const Xe=t=>{const n=new Set(t);return n.w=0,n.n=0,n},w4=t=>(t.w&q2)>0,u4=t=>(t.n&q2)>0,Bo=({deps:t})=>{if(t.length)for(let n=0;n<t.length;n++)t[n].w|=q2},Lo=t=>{const{deps:n}=t;if(n.length){let e=0;for(let l=0;l<n.length;l++){const a=n[l];w4(a)&&!u4(a)?a.delete(t):n[e++]=a,a.w&=~q2,a.n&=~q2}n.length=e}},$e=new WeakMap;let At=0,q2=1;const Me=30;let h2;const nt=Symbol(""),Ce=Symbol("");class Ye{constructor(n,e=null,l){this.fn=n,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,zo(this,l)}run(){if(!this.active)return this.fn();let n=h2,e=I2;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=h2,h2=this,I2=!0,q2=1<<++At,At<=Me?Bo(this):B3(this),this.fn()}finally{At<=Me&&Lo(this),q2=1<<--At,h2=this.parent,I2=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){h2===this?this.deferStop=!0:this.active&&(B3(this),this.onStop&&this.onStop(),this.active=!1)}}function B3(t){const{deps:n}=t;if(n.length){for(let e=0;e<n.length;e++)n[e].delete(t);n.length=0}}let I2=!0;const _4=[];function ft(){_4.push(I2),I2=!1}function $t(){const t=_4.pop();I2=t===void 0?!0:t}function o2(t,n,e){if(I2&&h2){let l=$e.get(t);l||$e.set(t,l=new Map);let a=l.get(e);a||l.set(e,a=Xe()),v4(a)}}function v4(t,n){let e=!1;At<=Me?u4(t)||(t.n|=q2,e=!w4(t)):e=!t.has(h2),e&&(t.add(h2),h2.deps.push(t))}function B2(t,n,e,l,a,i){const d=$e.get(t);if(!d)return;let p=[];if(n==="clear")p=[...d.values()];else if(e==="length"&&t1(t))d.forEach((w,u)=>{(u==="length"||u>=l)&&p.push(w)});else switch(e!==void 0&&p.push(d.get(e)),n){case"add":t1(t)?Je(e)&&p.push(d.get("length")):(p.push(d.get(nt)),dt(t)&&p.push(d.get(Ce)));break;case"delete":t1(t)||(p.push(d.get(nt)),dt(t)&&p.push(d.get(Ce)));break;case"set":dt(t)&&p.push(d.get(nt));break}if(p.length===1)p[0]&&ze(p[0]);else{const w=[];for(const u of p)u&&w.push(...u);ze(Xe(w))}}function ze(t,n){const e=t1(t)?t:[...t];for(const l of e)l.computed&&L3(l);for(const l of e)l.computed||L3(l)}function L3(t,n){(t!==h2||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ho=Oe("__proto__,__v_isRef,__isVue"),x4=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ot)),Vo=Qe(),So=Qe(!1,!0),Ao=Qe(!0),H3=jo();function jo(){const t={};return["includes","indexOf","lastIndexOf"].forEach(n=>{t[n]=function(...e){const l=z1(this);for(let i=0,d=this.length;i<d;i++)o2(l,"get",i+"");const a=l[n](...e);return a===-1||a===!1?l[n](...e.map(z1)):a}}),["push","pop","shift","unshift","splice"].forEach(n=>{t[n]=function(...e){ft();const l=z1(this)[n].apply(this,e);return $t(),l}}),t}function Qe(t=!1,n=!1){return function(l,a,i){if(a==="__v_isReactive")return!t;if(a==="__v_isReadonly")return t;if(a==="__v_isShallow")return n;if(a==="__v_raw"&&i===(t?n?Xo:$4:n?f4:k4).get(l))return l;const d=t1(l);if(!t&&d&&k1(H3,a))return Reflect.get(H3,a,i);const p=Reflect.get(l,a,i);return(Ot(a)?x4.has(a):Ho(a))||(t||o2(l,"get",a),n)?p:K1(p)?d&&Je(a)?p:p.value:F1(p)?t?In(p):ot(p):p}}const Ro=g4(),Po=g4(!0);function g4(t=!1){return function(e,l,a,i){let d=e[l];if(Wt(d)&&K1(d)&&!K1(a))return!1;if(!t&&!Wt(a)&&(ye(a)||(a=z1(a),d=z1(d)),!t1(e)&&K1(d)&&!K1(a)))return d.value=a,!0;const p=t1(e)&&Je(l)?Number(l)<e.length:k1(e,l),w=Reflect.set(e,l,a,i);return e===z1(i)&&(p?Nt(a,d)&&B2(e,"set",l,a):B2(e,"add",l,a)),w}}function To(t,n){const e=k1(t,n);t[n];const l=Reflect.deleteProperty(t,n);return l&&e&&B2(t,"delete",n,void 0),l}function Do(t,n){const e=Reflect.has(t,n);return(!Ot(n)||!x4.has(n))&&o2(t,"has",n),e}function Eo(t){return o2(t,"iterate",t1(t)?"length":nt),Reflect.ownKeys(t)}const m4={get:Vo,set:Ro,deleteProperty:To,has:Do,ownKeys:Eo},Fo={get:Ao,set(t,n){return!0},deleteProperty(t,n){return!0}},Io=J1({},m4,{get:So,set:Po}),Ze=t=>t,Fn=t=>Reflect.getPrototypeOf(t);function dn(t,n,e=!1,l=!1){t=t.__v_raw;const a=z1(t),i=z1(n);e||(n!==i&&o2(a,"get",n),o2(a,"get",i));const{has:d}=Fn(a),p=l?Ze:e?e3:Jt;if(d.call(a,n))return p(t.get(n));if(d.call(a,i))return p(t.get(i));t!==a&&t.get(n)}function pn(t,n=!1){const e=this.__v_raw,l=z1(e),a=z1(t);return n||(t!==a&&o2(l,"has",t),o2(l,"has",a)),t===a?e.has(t):e.has(t)||e.has(a)}function wn(t,n=!1){return t=t.__v_raw,!n&&o2(z1(t),"iterate",nt),Reflect.get(t,"size",t)}function V3(t){t=z1(t);const n=z1(this);return Fn(n).has.call(n,t)||(n.add(t),B2(n,"add",t,t)),this}function S3(t,n){n=z1(n);const e=z1(this),{has:l,get:a}=Fn(e);let i=l.call(e,t);i||(t=z1(t),i=l.call(e,t));const d=a.call(e,t);return e.set(t,n),i?Nt(n,d)&&B2(e,"set",t,n):B2(e,"add",t,n),this}function A3(t){const n=z1(this),{has:e,get:l}=Fn(n);let a=e.call(n,t);a||(t=z1(t),a=e.call(n,t)),l&&l.call(n,t);const i=n.delete(t);return a&&B2(n,"delete",t,void 0),i}function j3(){const t=z1(this),n=t.size!==0,e=t.clear();return n&&B2(t,"clear",void 0,void 0),e}function un(t,n){return function(l,a){const i=this,d=i.__v_raw,p=z1(d),w=n?Ze:t?e3:Jt;return!t&&o2(p,"iterate",nt),d.forEach((u,_)=>l.call(a,w(u),w(_),i))}}function _n(t,n,e){return function(...l){const a=this.__v_raw,i=z1(a),d=dt(i),p=t==="entries"||t===Symbol.iterator&&d,w=t==="keys"&&d,u=a[t](...l),_=e?Ze:n?e3:Jt;return!n&&o2(i,"iterate",w?Ce:nt),{next(){const{value:g,done:v}=u.next();return v?{value:g,done:v}:{value:p?[_(g[0]),_(g[1])]:_(g),done:v}},[Symbol.iterator](){return this}}}}function S2(t){return function(...n){return t==="delete"?!1:this}}function Uo(){const t={get(i){return dn(this,i)},get size(){return wn(this)},has:pn,add:V3,set:S3,delete:A3,clear:j3,forEach:un(!1,!1)},n={get(i){return dn(this,i,!1,!0)},get size(){return wn(this)},has:pn,add:V3,set:S3,delete:A3,clear:j3,forEach:un(!1,!0)},e={get(i){return dn(this,i,!0)},get size(){return wn(this,!0)},has(i){return pn.call(this,i,!0)},add:S2("add"),set:S2("set"),delete:S2("delete"),clear:S2("clear"),forEach:un(!0,!1)},l={get(i){return dn(this,i,!0,!0)},get size(){return wn(this,!0)},has(i){return pn.call(this,i,!0)},add:S2("add"),set:S2("set"),delete:S2("delete"),clear:S2("clear"),forEach:un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=_n(i,!1,!1),e[i]=_n(i,!0,!1),n[i]=_n(i,!1,!0),l[i]=_n(i,!0,!0)}),[t,e,n,l]}const[qo,Go,Oo,No]=Uo();function t3(t,n){const e=n?t?No:Oo:t?Go:qo;return(l,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?l:Reflect.get(k1(e,a)&&a in l?e:l,a,i)}const Ko={get:t3(!1,!1)},Wo={get:t3(!1,!0)},Jo={get:t3(!0,!1)},k4=new WeakMap,f4=new WeakMap,$4=new WeakMap,Xo=new WeakMap;function Yo(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qo(t){return t.__v_skip||!Object.isExtensible(t)?0:Yo(ko(t))}function ot(t){return Wt(t)?t:n3(t,!1,m4,Ko,k4)}function Zo(t){return n3(t,!1,Io,Wo,f4)}function In(t){return n3(t,!0,Fo,Jo,$4)}function n3(t,n,e,l,a){if(!F1(t)||t.__v_raw&&!(n&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const d=Qo(t);if(d===0)return t;const p=new Proxy(t,d===2?l:e);return a.set(t,p),p}function pt(t){return Wt(t)?pt(t.__v_raw):!!(t&&t.__v_isReactive)}function Wt(t){return!!(t&&t.__v_isReadonly)}function ye(t){return!!(t&&t.__v_isShallow)}function M4(t){return pt(t)||Wt(t)}function z1(t){const n=t&&t.__v_raw;return n?z1(n):t}function C4(t){return bn(t,"__v_skip",!0),t}const Jt=t=>F1(t)?ot(t):t,e3=t=>F1(t)?In(t):t;function z4(t){I2&&h2&&(t=z1(t),v4(t.dep||(t.dep=Xe())))}function y4(t,n){t=z1(t),t.dep&&ze(t.dep)}function K1(t){return!!(t&&t.__v_isRef===!0)}function Z(t){return B4(t,!1)}function b4(t){return B4(t,!0)}function B4(t,n){return K1(t)?t:new ts(t,n)}class ts{constructor(n,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?n:z1(n),this._value=e?n:Jt(n)}get value(){return z4(this),this._value}set value(n){n=this.__v_isShallow?n:z1(n),Nt(n,this._rawValue)&&(this._rawValue=n,this._value=this.__v_isShallow?n:Jt(n),y4(this))}}function N1(t){return K1(t)?t.value:t}const ns={get:(t,n,e)=>N1(Reflect.get(t,n,e)),set:(t,n,e,l)=>{const a=t[n];return K1(a)&&!K1(e)?(a.value=e,!0):Reflect.set(t,n,e,l)}};function L4(t){return pt(t)?t:new Proxy(t,ns)}function Mt(t){const n=t1(t)?new Array(t.length):{};for(const e in t)n[e]=rs(t,e);return n}class es{constructor(n,e,l){this._object=n,this._key=e,this._defaultValue=l,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function rs(t,n,e){const l=t[n];return K1(l)?l:new es(t,n,e)}class os{constructor(n,e,l,a){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ye(n,()=>{this._dirty||(this._dirty=!0,y4(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=l}get value(){const n=z1(this);return z4(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function ss(t,n,e=!1){let l,a;const i=u1(t);return i?(l=t,a=p2):(l=t.get,a=t.set),new os(l,a,i||!a,e)}function U2(t,n,e,l){let a;try{a=l?t(...l):t()}catch(i){on(i,n,e)}return a}function l2(t,n,e,l){if(u1(t)){const i=U2(t,n,e,l);return i&&h4(i)&&i.catch(d=>{on(d,n,e)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(l2(t[i],n,e,l));return a}function on(t,n,e,l=!0){const a=n?n.vnode:null;if(n){let i=n.parent;const d=n.proxy,p=e;for(;i;){const u=i.ec;if(u){for(let _=0;_<u.length;_++)if(u[_](t,d,p)===!1)return}i=i.parent}const w=n.appContext.config.errorHandler;if(w){U2(w,null,10,[t,d,p]);return}}cs(t,e,a,l)}function cs(t,n,e,l=!0){console.error(t)}let Bn=!1,be=!1;const e2=[];let C2=0;const Tt=[];let jt=null,lt=0;const Dt=[];let T2=null,at=0;const H4=Promise.resolve();let r3=null,Be=null;function o3(t){const n=r3||H4;return t?n.then(this?t.bind(this):t):n}function ls(t){let n=C2+1,e=e2.length;for(;n<e;){const l=n+e>>>1;Xt(e2[l])<t?n=l+1:e=l}return n}function s3(t){(!e2.length||!e2.includes(t,Bn&&t.allowRecurse?C2+1:C2))&&t!==Be&&(t.id==null?e2.push(t):e2.splice(ls(t.id),0,t),V4())}function V4(){!Bn&&!be&&(be=!0,r3=H4.then(A4))}function as(t){const n=e2.indexOf(t);n>C2&&e2.splice(n,1)}function S4(t,n,e,l){t1(t)?e.push(...t):(!n||!n.includes(t,t.allowRecurse?l+1:l))&&e.push(t),V4()}function is(t){S4(t,jt,Tt,lt)}function hs(t){S4(t,T2,Dt,at)}function Un(t,n=null){if(Tt.length){for(Be=n,jt=[...new Set(Tt)],Tt.length=0,lt=0;lt<jt.length;lt++)jt[lt]();jt=null,lt=0,Be=null,Un(t,n)}}function Ln(t){if(Un(),Dt.length){const n=[...new Set(Dt)];if(Dt.length=0,T2){T2.push(...n);return}for(T2=n,T2.sort((e,l)=>Xt(e)-Xt(l)),at=0;at<T2.length;at++)T2[at]();T2=null,at=0}}const Xt=t=>t.id==null?1/0:t.id;function A4(t){be=!1,Bn=!0,Un(t),e2.sort((e,l)=>Xt(e)-Xt(l));const n=p2;try{for(C2=0;C2<e2.length;C2++){const e=e2[C2];e&&e.active!==!1&&U2(e,null,14)}}finally{C2=0,e2.length=0,Ln(),Bn=!1,r3=null,(e2.length||Tt.length||Dt.length)&&A4(t)}}function ds(t,n,...e){if(t.isUnmounted)return;const l=t.vnode.props||R1;let a=e;const i=n.startsWith("update:"),d=i&&n.slice(7);if(d&&d in l){const _=`${d==="modelValue"?"model":d}Modifiers`,{number:g,trim:v}=l[_]||R1;v&&(a=e.map(x=>x.trim())),g&&(a=e.map(Kt))}let p,w=l[p=ne(n)]||l[p=ne($2(n))];!w&&i&&(w=l[p=ne(kt(n))]),w&&l2(w,t,6,a);const u=l[p+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[p])return;t.emitted[p]=!0,l2(u,t,6,a)}}function j4(t,n,e=!1){const l=n.emitsCache,a=l.get(t);if(a!==void 0)return a;const i=t.emits;let d={},p=!1;if(!u1(t)){const w=u=>{const _=j4(u,n,!0);_&&(p=!0,J1(d,_))};!e&&n.mixins.length&&n.mixins.forEach(w),t.extends&&w(t.extends),t.mixins&&t.mixins.forEach(w)}return!i&&!p?(l.set(t,null),null):(t1(i)?i.forEach(w=>d[w]=null):J1(d,i),l.set(t,d),d)}function qn(t,n){return!t||!en(n)?!1:(n=n.slice(2).replace(/Once$/,""),k1(t,n[0].toLowerCase()+n.slice(1))||k1(t,kt(n))||k1(t,n))}let X1=null,R4=null;function Hn(t){const n=X1;return X1=t,R4=t&&t.type.__scopeId||null,n}function ps(t,n=X1,e){if(!n||t._n)return t;const l=(...a)=>{l._d&&O3(-1);const i=Hn(n),d=t(...a);return Hn(i),l._d&&O3(1),d};return l._n=!0,l._c=!0,l._d=!0,l}function ee(t){const{type:n,vnode:e,proxy:l,withProxy:a,props:i,propsOptions:[d],slots:p,attrs:w,emit:u,render:_,renderCache:g,data:v,setupState:x,ctx:k,inheritAttrs:C}=t;let y,f;const M=Hn(t);try{if(e.shapeFlag&4){const b=a||l;y=i2(_.call(b,b,g,i,x,v,k)),f=w}else{const b=n;y=i2(b.length>1?b(i,{attrs:w,slots:p,emit:u}):b(i,null)),f=n.props?w:ws(w)}}catch(b){Ft.length=0,on(b,t,1),y=m1(r2)}let L=y;if(f&&C!==!1){const b=Object.keys(f),{shapeFlag:A}=L;b.length&&A&7&&(d&&b.some(Ke)&&(f=us(f,d)),L=G2(L,f))}return e.dirs&&(L=G2(L),L.dirs=L.dirs?L.dirs.concat(e.dirs):e.dirs),e.transition&&(L.transition=e.transition),y=L,Hn(M),y}const ws=t=>{let n;for(const e in t)(e==="class"||e==="style"||en(e))&&((n||(n={}))[e]=t[e]);return n},us=(t,n)=>{const e={};for(const l in t)(!Ke(l)||!(l.slice(9)in n))&&(e[l]=t[l]);return e};function _s(t,n,e){const{props:l,children:a,component:i}=t,{props:d,children:p,patchFlag:w}=n,u=i.emitsOptions;if(n.dirs||n.transition)return!0;if(e&&w>=0){if(w&1024)return!0;if(w&16)return l?R3(l,d,u):!!d;if(w&8){const _=n.dynamicProps;for(let g=0;g<_.length;g++){const v=_[g];if(d[v]!==l[v]&&!qn(u,v))return!0}}}else return(a||p)&&(!p||!p.$stable)?!0:l===d?!1:l?d?R3(l,d,u):!0:!!d;return!1}function R3(t,n,e){const l=Object.keys(n);if(l.length!==Object.keys(t).length)return!0;for(let a=0;a<l.length;a++){const i=l[a];if(n[i]!==t[i]&&!qn(e,i))return!0}return!1}function vs({vnode:t,parent:n},e){for(;n&&n.subTree===t;)(t=n.vnode).el=e,n=n.parent}const xs=t=>t.__isSuspense;function P4(t,n){n&&n.pendingBranch?t1(t)?n.effects.push(...t):n.effects.push(t):hs(t)}function w2(t,n){if(q1){let e=q1.provides;const l=q1.parent&&q1.parent.provides;l===e&&(e=q1.provides=Object.create(l)),e[t]=n}}function D1(t,n,e=!1){const l=q1||X1;if(l){const a=l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides;if(a&&t in a)return a[t];if(arguments.length>1)return e&&u1(n)?n.call(l.proxy):n}}const P3={};function W1(t,n,e){return T4(t,n,e)}function T4(t,n,{immediate:e,deep:l,flush:a,onTrack:i,onTrigger:d}=R1){const p=q1;let w,u=!1,_=!1;if(K1(t)?(w=()=>t.value,u=ye(t)):pt(t)?(w=()=>t,l=!0):t1(t)?(_=!0,u=t.some(f=>pt(f)||ye(f)),w=()=>t.map(f=>{if(K1(f))return f.value;if(pt(f))return tt(f);if(u1(f))return U2(f,p,2)})):u1(t)?n?w=()=>U2(t,p,2):w=()=>{if(!(p&&p.isUnmounted))return g&&g(),l2(t,p,3,[v])}:w=p2,n&&l){const f=w;w=()=>tt(f())}let g,v=f=>{g=y.onStop=()=>{U2(f,p,4)}};if(_t)return v=p2,n?e&&l2(n,p,3,[w(),_?[]:void 0,v]):w(),p2;let x=_?[]:P3;const k=()=>{if(!!y.active)if(n){const f=y.run();(l||u||(_?f.some((M,L)=>Nt(M,x[L])):Nt(f,x)))&&(g&&g(),l2(n,p,3,[f,x===P3?void 0:x,v]),x=f)}else y.run()};k.allowRecurse=!!n;let C;a==="sync"?C=k:a==="post"?C=()=>Q1(k,p&&p.suspense):C=()=>is(k);const y=new Ye(w,C);return n?e?k():x=y.run():a==="post"?Q1(y.run.bind(y),p&&p.suspense):y.run(),()=>{y.stop(),p&&p.scope&&We(p.scope.effects,y)}}function gs(t,n,e){const l=this.proxy,a=L1(t)?t.includes(".")?D4(l,t):()=>l[t]:t.bind(l,l);let i;u1(n)?i=n:(i=n.handler,e=n);const d=q1;ut(this);const p=T4(a,i.bind(l),e);return d?ut(d):et(),p}function D4(t,n){const e=n.split(".");return()=>{let l=t;for(let a=0;a<e.length&&l;a++)l=l[e[a]];return l}}function tt(t,n){if(!F1(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),K1(t))tt(t.value,n);else if(t1(t))for(let e=0;e<t.length;e++)tt(t[e],n);else if(mt(t)||dt(t))t.forEach(e=>{tt(e,n)});else if(p4(t))for(const e in t)tt(t[e],n);return t}function ms(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Z1(()=>{t.isMounted=!0}),cn(()=>{t.isUnmounting=!0}),t}const s2=[Function,Array],ks={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:s2,onEnter:s2,onAfterEnter:s2,onEnterCancelled:s2,onBeforeLeave:s2,onLeave:s2,onAfterLeave:s2,onLeaveCancelled:s2,onBeforeAppear:s2,onAppear:s2,onAfterAppear:s2,onAppearCancelled:s2},setup(t,{slots:n}){const e=ec(),l=ms();let a;return()=>{const i=n.default&&I4(n.default(),!0);if(!i||!i.length)return;let d=i[0];if(i.length>1){for(const C of i)if(C.type!==r2){d=C;break}}const p=z1(t),{mode:w}=p;if(l.isLeaving)return re(d);const u=T3(d);if(!u)return re(d);const _=Le(u,p,l,e);He(u,_);const g=e.subTree,v=g&&T3(g);let x=!1;const{getTransitionKey:k}=u.type;if(k){const C=k();a===void 0?a=C:C!==a&&(a=C,x=!0)}if(v&&v.type!==r2&&(!Q2(u,v)||x)){const C=Le(v,p,l,e);if(He(v,C),w==="out-in")return l.isLeaving=!0,C.afterLeave=()=>{l.isLeaving=!1,e.update()},re(d);w==="in-out"&&u.type!==r2&&(C.delayLeave=(y,f,M)=>{const L=F4(l,v);L[String(v.key)]=v,y._leaveCb=()=>{f(),y._leaveCb=void 0,delete _.delayedLeave},_.delayedLeave=M})}return d}}},E4=ks;function F4(t,n){const{leavingVNodes:e}=t;let l=e.get(n.type);return l||(l=Object.create(null),e.set(n.type,l)),l}function Le(t,n,e,l){const{appear:a,mode:i,persisted:d=!1,onBeforeEnter:p,onEnter:w,onAfterEnter:u,onEnterCancelled:_,onBeforeLeave:g,onLeave:v,onAfterLeave:x,onLeaveCancelled:k,onBeforeAppear:C,onAppear:y,onAfterAppear:f,onAppearCancelled:M}=n,L=String(t.key),b=F4(e,t),A=(T,J)=>{T&&l2(T,l,9,J)},U=(T,J)=>{const Q=J[1];A(T,J),t1(T)?T.every(h1=>h1.length<=1)&&Q():T.length<=1&&Q()},X={mode:i,persisted:d,beforeEnter(T){let J=p;if(!e.isMounted)if(a)J=C||p;else return;T._leaveCb&&T._leaveCb(!0);const Q=b[L];Q&&Q2(t,Q)&&Q.el._leaveCb&&Q.el._leaveCb(),A(J,[T])},enter(T){let J=w,Q=u,h1=_;if(!e.isMounted)if(a)J=y||w,Q=f||u,h1=M||_;else return;let E=!1;const d1=T._enterCb=K=>{E||(E=!0,K?A(h1,[T]):A(Q,[T]),X.delayedLeave&&X.delayedLeave(),T._enterCb=void 0)};J?U(J,[T,d1]):d1()},leave(T,J){const Q=String(t.key);if(T._enterCb&&T._enterCb(!0),e.isUnmounting)return J();A(g,[T]);let h1=!1;const E=T._leaveCb=d1=>{h1||(h1=!0,J(),d1?A(k,[T]):A(x,[T]),T._leaveCb=void 0,b[Q]===t&&delete b[Q])};b[Q]=t,v?U(v,[T,E]):E()},clone(T){return Le(T,n,e,l)}};return X}function re(t){if(sn(t))return t=G2(t),t.children=null,t}function T3(t){return sn(t)?t.children?t.children[0]:void 0:t}function He(t,n){t.shapeFlag&6&&t.component?He(t.component.subTree,n):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}function I4(t,n=!1,e){let l=[],a=0;for(let i=0;i<t.length;i++){let d=t[i];const p=e==null?d.key:String(e)+String(d.key!=null?d.key:i);d.type===V1?(d.patchFlag&128&&a++,l=l.concat(I4(d.children,n,p))):(n||d.type!==r2)&&l.push(p!=null?G2(d,{key:p}):d)}if(a>1)for(let i=0;i<l.length;i++)l[i].patchFlag=-2;return l}function c(t){return u1(t)?{setup:t,name:t.name}:t}const wt=t=>!!t.type.__asyncLoader;function l1(t){u1(t)&&(t={loader:t});const{loader:n,loadingComponent:e,errorComponent:l,delay:a=200,timeout:i,suspensible:d=!0,onError:p}=t;let w=null,u,_=0;const g=()=>(_++,w=null,v()),v=()=>{let x;return w||(x=w=n().catch(k=>{if(k=k instanceof Error?k:new Error(String(k)),p)return new Promise((C,y)=>{p(k,()=>C(g()),()=>y(k),_+1)});throw k}).then(k=>x!==w&&w?w:(k&&(k.__esModule||k[Symbol.toStringTag]==="Module")&&(k=k.default),u=k,k)))};return c({name:"AsyncComponentWrapper",__asyncLoader:v,get __asyncResolved(){return u},setup(){const x=q1;if(u)return()=>oe(u,x);const k=M=>{w=null,on(M,x,13,!l)};if(d&&x.suspense||_t)return v().then(M=>()=>oe(M,x)).catch(M=>(k(M),()=>l?m1(l,{error:M}):null));const C=Z(!1),y=Z(),f=Z(!!a);return a&&setTimeout(()=>{f.value=!1},a),i!=null&&setTimeout(()=>{if(!C.value&&!y.value){const M=new Error(`Async component timed out after ${i}ms.`);k(M),y.value=M}},i),v().then(()=>{C.value=!0,x.parent&&sn(x.parent.vnode)&&s3(x.parent.update)}).catch(M=>{k(M),y.value=M}),()=>{if(C.value&&u)return oe(u,x);if(y.value&&l)return m1(l,{error:y.value});if(e&&!f.value)return m1(e)}}})}function oe(t,{vnode:{ref:n,props:e,children:l,shapeFlag:a},parent:i}){const d=m1(t,e,l);return d.ref=n,d}const sn=t=>t.type.__isKeepAlive;function fs(t,n){U4(t,"a",n)}function $s(t,n){U4(t,"da",n)}function U4(t,n,e=q1){const l=t.__wdc||(t.__wdc=()=>{let a=e;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(Gn(n,l,e),e){let a=e.parent;for(;a&&a.parent;)sn(a.parent.vnode)&&Ms(l,n,e,a),a=a.parent}}function Ms(t,n,e,l){const a=Gn(n,t,l,!0);c3(()=>{We(l[n],a)},e)}function Gn(t,n,e=q1,l=!1){if(e){const a=e[t]||(e[t]=[]),i=n.__weh||(n.__weh=(...d)=>{if(e.isUnmounted)return;ft(),ut(e);const p=l2(n,e,t,d);return et(),$t(),p});return l?a.unshift(i):a.push(i),i}}const V2=t=>(n,e=q1)=>(!_t||t==="sp")&&Gn(t,n,e),Cs=V2("bm"),Z1=V2("m"),zs=V2("bu"),ys=V2("u"),cn=V2("bum"),c3=V2("um"),bs=V2("sp"),Bs=V2("rtg"),Ls=V2("rtc");function Hs(t,n=q1){Gn("ec",t,n)}function vn(t,n){const e=X1;if(e===null)return t;const l=Kn(e)||e.proxy,a=t.dirs||(t.dirs=[]);for(let i=0;i<n.length;i++){let[d,p,w,u=R1]=n[i];u1(d)&&(d={mounted:d,updated:d}),d.deep&&tt(p),a.push({dir:d,instance:l,value:p,oldValue:void 0,arg:w,modifiers:u})}return t}function k2(t,n,e,l){const a=t.dirs,i=n&&n.dirs;for(let d=0;d<a.length;d++){const p=a[d];i&&(p.oldValue=i[d].value);let w=p.dir[l];w&&(ft(),l2(w,e,8,[t.el,p,t,n]),$t())}}const l3="components";function U1(t,n){return G4(l3,t,!0,n)||t}const q4=Symbol();function Ve(t){return L1(t)?G4(l3,t,!1)||t:t||q4}function G4(t,n,e=!0,l=!1){const a=X1||q1;if(a){const i=a.type;if(t===l3){const p=lc(i,!1);if(p&&(p===n||p===$2(n)||p===En($2(n))))return i}const d=D3(a[t]||i[t],n)||D3(a.appContext[t],n);return!d&&l?i:d}}function D3(t,n){return t&&(t[n]||t[$2(n)]||t[En($2(n))])}function b2(t,n,e,l){let a;const i=e&&e[l];if(t1(t)||L1(t)){a=new Array(t.length);for(let d=0,p=t.length;d<p;d++)a[d]=n(t[d],d,void 0,i&&i[d])}else if(typeof t=="number"){a=new Array(t);for(let d=0;d<t;d++)a[d]=n(d+1,d,void 0,i&&i[d])}else if(F1(t))if(t[Symbol.iterator])a=Array.from(t,(d,p)=>n(d,p,void 0,i&&i[p]));else{const d=Object.keys(t);a=new Array(d.length);for(let p=0,w=d.length;p<w;p++){const u=d[p];a[p]=n(t[u],u,p,i&&i[p])}}else a=[];return e&&(e[l]=a),a}function On(t,n,e={},l,a){if(X1.isCE||X1.parent&&wt(X1.parent)&&X1.parent.isCE)return m1("slot",n==="default"?null:{name:n},l&&l());let i=t[n];i&&i._c&&(i._d=!1),o();const d=i&&O4(i(e)),p=_2(V1,{key:e.key||`_${n}`},d||(l?l():[]),d&&t._===1?64:-2);return!a&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),i&&i._c&&(i._d=!0),p}function O4(t){return t.some(n=>jn(n)?!(n.type===r2||n.type===V1&&!O4(n.children)):!0)?t:null}const Se=t=>t?rr(t)?Kn(t)||t.proxy:Se(t.parent):null,Vn=J1(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Se(t.parent),$root:t=>Se(t.root),$emit:t=>t.emit,$options:t=>K4(t),$forceUpdate:t=>t.f||(t.f=()=>s3(t.update)),$nextTick:t=>t.n||(t.n=o3.bind(t.proxy)),$watch:t=>gs.bind(t)}),Vs={get({_:t},n){const{ctx:e,setupState:l,data:a,props:i,accessCache:d,type:p,appContext:w}=t;let u;if(n[0]!=="$"){const x=d[n];if(x!==void 0)switch(x){case 1:return l[n];case 2:return a[n];case 4:return e[n];case 3:return i[n]}else{if(l!==R1&&k1(l,n))return d[n]=1,l[n];if(a!==R1&&k1(a,n))return d[n]=2,a[n];if((u=t.propsOptions[0])&&k1(u,n))return d[n]=3,i[n];if(e!==R1&&k1(e,n))return d[n]=4,e[n];Ae&&(d[n]=0)}}const _=Vn[n];let g,v;if(_)return n==="$attrs"&&o2(t,"get",n),_(t);if((g=p.__cssModules)&&(g=g[n]))return g;if(e!==R1&&k1(e,n))return d[n]=4,e[n];if(v=w.config.globalProperties,k1(v,n))return v[n]},set({_:t},n,e){const{data:l,setupState:a,ctx:i}=t;return a!==R1&&k1(a,n)?(a[n]=e,!0):l!==R1&&k1(l,n)?(l[n]=e,!0):k1(t.props,n)||n[0]==="$"&&n.slice(1)in t?!1:(i[n]=e,!0)},has({_:{data:t,setupState:n,accessCache:e,ctx:l,appContext:a,propsOptions:i}},d){let p;return!!e[d]||t!==R1&&k1(t,d)||n!==R1&&k1(n,d)||(p=i[0])&&k1(p,d)||k1(l,d)||k1(Vn,d)||k1(a.config.globalProperties,d)},defineProperty(t,n,e){return e.get!=null?t._.accessCache[n]=0:k1(e,"value")&&this.set(t,n,e.value,null),Reflect.defineProperty(t,n,e)}};let Ae=!0;function Ss(t){const n=K4(t),e=t.proxy,l=t.ctx;Ae=!1,n.beforeCreate&&E3(n.beforeCreate,t,"bc");const{data:a,computed:i,methods:d,watch:p,provide:w,inject:u,created:_,beforeMount:g,mounted:v,beforeUpdate:x,updated:k,activated:C,deactivated:y,beforeDestroy:f,beforeUnmount:M,destroyed:L,unmounted:b,render:A,renderTracked:U,renderTriggered:X,errorCaptured:T,serverPrefetch:J,expose:Q,inheritAttrs:h1,components:E,directives:d1,filters:K}=n;if(u&&As(u,l,null,t.appContext.config.unwrapInjectedRef),d)for(const y1 in d){const b1=d[y1];u1(b1)&&(l[y1]=b1.bind(e))}if(a){const y1=a.call(e,e);F1(y1)&&(t.data=ot(y1))}if(Ae=!0,i)for(const y1 in i){const b1=i[y1],G=u1(b1)?b1.bind(e,e):u1(b1.get)?b1.get.bind(e,e):p2,s1=!u1(b1)&&u1(b1.set)?b1.set.bind(e):p2,a1=r1({get:G,set:s1});Object.defineProperty(l,y1,{enumerable:!0,configurable:!0,get:()=>a1.value,set:H1=>a1.value=H1})}if(p)for(const y1 in p)N4(p[y1],l,e,y1);if(w){const y1=u1(w)?w.call(e):w;Reflect.ownKeys(y1).forEach(b1=>{w2(b1,y1[b1])})}_&&E3(_,t,"c");function v1(y1,b1){t1(b1)?b1.forEach(G=>y1(G.bind(e))):b1&&y1(b1.bind(e))}if(v1(Cs,g),v1(Z1,v),v1(zs,x),v1(ys,k),v1(fs,C),v1($s,y),v1(Hs,T),v1(Ls,U),v1(Bs,X),v1(cn,M),v1(c3,b),v1(bs,J),t1(Q))if(Q.length){const y1=t.exposed||(t.exposed={});Q.forEach(b1=>{Object.defineProperty(y1,b1,{get:()=>e[b1],set:G=>e[b1]=G})})}else t.exposed||(t.exposed={});A&&t.render===p2&&(t.render=A),h1!=null&&(t.inheritAttrs=h1),E&&(t.components=E),d1&&(t.directives=d1)}function As(t,n,e=p2,l=!1){t1(t)&&(t=je(t));for(const a in t){const i=t[a];let d;F1(i)?"default"in i?d=D1(i.from||a,i.default,!0):d=D1(i.from||a):d=D1(i),K1(d)&&l?Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>d.value,set:p=>d.value=p}):n[a]=d}}function E3(t,n,e){l2(t1(t)?t.map(l=>l.bind(n.proxy)):t.bind(n.proxy),n,e)}function N4(t,n,e,l){const a=l.includes(".")?D4(e,l):()=>e[l];if(L1(t)){const i=n[t];u1(i)&&W1(a,i)}else if(u1(t))W1(a,t.bind(e));else if(F1(t))if(t1(t))t.forEach(i=>N4(i,n,e,l));else{const i=u1(t.handler)?t.handler.bind(e):n[t.handler];u1(i)&&W1(a,i,t)}}function K4(t){const n=t.type,{mixins:e,extends:l}=n,{mixins:a,optionsCache:i,config:{optionMergeStrategies:d}}=t.appContext,p=i.get(n);let w;return p?w=p:!a.length&&!e&&!l?w=n:(w={},a.length&&a.forEach(u=>Sn(w,u,d,!0)),Sn(w,n,d)),i.set(n,w),w}function Sn(t,n,e,l=!1){const{mixins:a,extends:i}=n;i&&Sn(t,i,e,!0),a&&a.forEach(d=>Sn(t,d,e,!0));for(const d in n)if(!(l&&d==="expose")){const p=js[d]||e&&e[d];t[d]=p?p(t[d],n[d]):n[d]}return t}const js={data:F3,props:X2,emits:X2,methods:X2,computed:X2,beforeCreate:Y1,created:Y1,beforeMount:Y1,mounted:Y1,beforeUpdate:Y1,updated:Y1,beforeDestroy:Y1,beforeUnmount:Y1,destroyed:Y1,unmounted:Y1,activated:Y1,deactivated:Y1,errorCaptured:Y1,serverPrefetch:Y1,components:X2,directives:X2,watch:Ps,provide:F3,inject:Rs};function F3(t,n){return n?t?function(){return J1(u1(t)?t.call(this,this):t,u1(n)?n.call(this,this):n)}:n:t}function Rs(t,n){return X2(je(t),je(n))}function je(t){if(t1(t)){const n={};for(let e=0;e<t.length;e++)n[t[e]]=t[e];return n}return t}function Y1(t,n){return t?[...new Set([].concat(t,n))]:n}function X2(t,n){return t?J1(J1(Object.create(null),t),n):n}function Ps(t,n){if(!t)return n;if(!n)return t;const e=J1(Object.create(null),t);for(const l in n)e[l]=Y1(t[l],n[l]);return e}function Ts(t,n,e,l=!1){const a={},i={};bn(i,Nn,1),t.propsDefaults=Object.create(null),W4(t,n,a,i);for(const d in t.propsOptions[0])d in a||(a[d]=void 0);e?t.props=l?a:Zo(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function Ds(t,n,e,l){const{props:a,attrs:i,vnode:{patchFlag:d}}=t,p=z1(a),[w]=t.propsOptions;let u=!1;if((l||d>0)&&!(d&16)){if(d&8){const _=t.vnode.dynamicProps;for(let g=0;g<_.length;g++){let v=_[g];if(qn(t.emitsOptions,v))continue;const x=n[v];if(w)if(k1(i,v))x!==i[v]&&(i[v]=x,u=!0);else{const k=$2(v);a[k]=Re(w,p,k,x,t,!1)}else x!==i[v]&&(i[v]=x,u=!0)}}}else{W4(t,n,a,i)&&(u=!0);let _;for(const g in p)(!n||!k1(n,g)&&((_=kt(g))===g||!k1(n,_)))&&(w?e&&(e[g]!==void 0||e[_]!==void 0)&&(a[g]=Re(w,p,g,void 0,t,!0)):delete a[g]);if(i!==p)for(const g in i)(!n||!k1(n,g)&&!0)&&(delete i[g],u=!0)}u&&B2(t,"set","$attrs")}function W4(t,n,e,l){const[a,i]=t.propsOptions;let d=!1,p;if(n)for(let w in n){if(Pt(w))continue;const u=n[w];let _;a&&k1(a,_=$2(w))?!i||!i.includes(_)?e[_]=u:(p||(p={}))[_]=u:qn(t.emitsOptions,w)||(!(w in l)||u!==l[w])&&(l[w]=u,d=!0)}if(i){const w=z1(e),u=p||R1;for(let _=0;_<i.length;_++){const g=i[_];e[g]=Re(a,w,g,u[g],t,!k1(u,g))}}return d}function Re(t,n,e,l,a,i){const d=t[e];if(d!=null){const p=k1(d,"default");if(p&&l===void 0){const w=d.default;if(d.type!==Function&&u1(w)){const{propsDefaults:u}=a;e in u?l=u[e]:(ut(a),l=u[e]=w.call(null,n),et())}else l=w}d[0]&&(i&&!p?l=!1:d[1]&&(l===""||l===kt(e))&&(l=!0))}return l}function J4(t,n,e=!1){const l=n.propsCache,a=l.get(t);if(a)return a;const i=t.props,d={},p=[];let w=!1;if(!u1(t)){const _=g=>{w=!0;const[v,x]=J4(g,n,!0);J1(d,v),x&&p.push(...x)};!e&&n.mixins.length&&n.mixins.forEach(_),t.extends&&_(t.extends),t.mixins&&t.mixins.forEach(_)}if(!i&&!w)return l.set(t,ht),ht;if(t1(i))for(let _=0;_<i.length;_++){const g=$2(i[_]);I3(g)&&(d[g]=R1)}else if(i)for(const _ in i){const g=$2(_);if(I3(g)){const v=i[_],x=d[g]=t1(v)||u1(v)?{type:v}:v;if(x){const k=G3(Boolean,x.type),C=G3(String,x.type);x[0]=k>-1,x[1]=C<0||k<C,(k>-1||k1(x,"default"))&&p.push(g)}}}const u=[d,p];return l.set(t,u),u}function I3(t){return t[0]!=="$"}function U3(t){const n=t&&t.toString().match(/^\s*function (\w+)/);return n?n[1]:t===null?"null":""}function q3(t,n){return U3(t)===U3(n)}function G3(t,n){return t1(n)?n.findIndex(e=>q3(e,t)):u1(n)&&q3(n,t)?0:-1}const X4=t=>t[0]==="_"||t==="$stable",a3=t=>t1(t)?t.map(i2):[i2(t)],Es=(t,n,e)=>{if(n._n)return n;const l=ps((...a)=>a3(n(...a)),e);return l._c=!1,l},Y4=(t,n,e)=>{const l=t._ctx;for(const a in t){if(X4(a))continue;const i=t[a];if(u1(i))n[a]=Es(a,i,l);else if(i!=null){const d=a3(i);n[a]=()=>d}}},Q4=(t,n)=>{const e=a3(n);t.slots.default=()=>e},Fs=(t,n)=>{if(t.vnode.shapeFlag&32){const e=n._;e?(t.slots=z1(n),bn(n,"_",e)):Y4(n,t.slots={})}else t.slots={},n&&Q4(t,n);bn(t.slots,Nn,1)},Is=(t,n,e)=>{const{vnode:l,slots:a}=t;let i=!0,d=R1;if(l.shapeFlag&32){const p=n._;p?e&&p===1?i=!1:(J1(a,n),!e&&p===1&&delete a._):(i=!n.$stable,Y4(n,a)),d=n}else n&&(Q4(t,n),d={default:1});if(i)for(const p in a)!X4(p)&&!(p in d)&&delete a[p]};function Z4(){return{app:null,config:{isNativeTag:xo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Us=0;function qs(t,n){return function(l,a=null){u1(l)||(l=Object.assign({},l)),a!=null&&!F1(a)&&(a=null);const i=Z4(),d=new Set;let p=!1;const w=i.app={_uid:Us++,_component:l,_props:a,_container:null,_context:i,_instance:null,version:ic,get config(){return i.config},set config(u){},use(u,..._){return d.has(u)||(u&&u1(u.install)?(d.add(u),u.install(w,..._)):u1(u)&&(d.add(u),u(w,..._))),w},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),w},component(u,_){return _?(i.components[u]=_,w):i.components[u]},directive(u,_){return _?(i.directives[u]=_,w):i.directives[u]},mount(u,_,g){if(!p){const v=m1(l,a);return v.appContext=i,_&&n?n(v,u):t(v,u,g),p=!0,w._container=u,u.__vue_app__=w,Kn(v.component)||v.component.proxy}},unmount(){p&&(t(null,w._container),delete w._container.__vue_app__)},provide(u,_){return i.provides[u]=_,w}};return w}}function An(t,n,e,l,a=!1){if(t1(t)){t.forEach((v,x)=>An(v,n&&(t1(n)?n[x]:n),e,l,a));return}if(wt(l)&&!a)return;const i=l.shapeFlag&4?Kn(l.component)||l.component.proxy:l.el,d=a?null:i,{i:p,r:w}=t,u=n&&n.r,_=p.refs===R1?p.refs={}:p.refs,g=p.setupState;if(u!=null&&u!==w&&(L1(u)?(_[u]=null,k1(g,u)&&(g[u]=null)):K1(u)&&(u.value=null)),u1(w))U2(w,p,12,[d,_]);else{const v=L1(w),x=K1(w);if(v||x){const k=()=>{if(t.f){const C=v?_[w]:w.value;a?t1(C)&&We(C,i):t1(C)?C.includes(i)||C.push(i):v?(_[w]=[i],k1(g,w)&&(g[w]=_[w])):(w.value=[i],t.k&&(_[t.k]=w.value))}else v?(_[w]=d,k1(g,w)&&(g[w]=d)):x&&(w.value=d,t.k&&(_[t.k]=d))};d?(k.id=-1,Q1(k,e)):k()}}}let A2=!1;const xn=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",gn=t=>t.nodeType===8;function Gs(t){const{mt:n,p:e,o:{patchProp:l,createText:a,nextSibling:i,parentNode:d,remove:p,insert:w,createComment:u}}=t,_=(f,M)=>{if(!M.hasChildNodes()){e(null,f,M),Ln(),M._vnode=f;return}A2=!1,g(M.firstChild,f,null,null,null),Ln(),M._vnode=f,A2&&console.error("Hydration completed but contains mismatches.")},g=(f,M,L,b,A,U=!1)=>{const X=gn(f)&&f.data==="[",T=()=>C(f,M,L,b,A,X),{type:J,ref:Q,shapeFlag:h1,patchFlag:E}=M,d1=f.nodeType;M.el=f,E===-2&&(U=!1,M.dynamicChildren=null);let K=null;switch(J){case Yt:d1!==3?M.children===""?(w(M.el=a(""),d(f),f),K=f):K=T():(f.data!==M.children&&(A2=!0,f.data=M.children),K=i(f));break;case r2:d1!==8||X?K=T():K=i(f);break;case Et:if(d1!==1&&d1!==3)K=T();else{K=f;const I1=!M.children.length;for(let v1=0;v1<M.staticCount;v1++)I1&&(M.children+=K.nodeType===1?K.outerHTML:K.data),v1===M.staticCount-1&&(M.anchor=K),K=i(K);return K}break;case V1:X?K=k(f,M,L,b,A,U):K=T();break;default:if(h1&1)d1!==1||M.type.toLowerCase()!==f.tagName.toLowerCase()?K=T():K=v(f,M,L,b,A,U);else if(h1&6){M.slotScopeIds=A;const I1=d(f);if(n(M,I1,null,L,b,xn(I1),U),K=X?y(f):i(f),K&&gn(K)&&K.data==="teleport end"&&(K=i(K)),wt(M)){let v1;X?(v1=m1(V1),v1.anchor=K?K.previousSibling:I1.lastChild):v1=f.nodeType===3?u2(""):m1("div"),v1.el=f,M.component.subTree=v1}}else h1&64?d1!==8?K=T():K=M.type.hydrate(f,M,L,b,A,U,t,x):h1&128&&(K=M.type.hydrate(f,M,L,b,xn(d(f)),A,U,t,g))}return Q!=null&&An(Q,null,b,M),K},v=(f,M,L,b,A,U)=>{U=U||!!M.dynamicChildren;const{type:X,props:T,patchFlag:J,shapeFlag:Q,dirs:h1}=M,E=X==="input"&&h1||X==="option";if(E||J!==-1){if(h1&&k2(M,null,L,"created"),T)if(E||!U||J&48)for(const K in T)(E&&K.endsWith("value")||en(K)&&!Pt(K))&&l(f,K,null,T[K],!1,void 0,L);else T.onClick&&l(f,"onClick",null,T.onClick,!1,void 0,L);let d1;if((d1=T&&T.onVnodeBeforeMount)&&c2(d1,L,M),h1&&k2(M,null,L,"beforeMount"),((d1=T&&T.onVnodeMounted)||h1)&&P4(()=>{d1&&c2(d1,L,M),h1&&k2(M,null,L,"mounted")},b),Q&16&&!(T&&(T.innerHTML||T.textContent))){let K=x(f.firstChild,M,f,L,b,A,U);for(;K;){A2=!0;const I1=K;K=K.nextSibling,p(I1)}}else Q&8&&f.textContent!==M.children&&(A2=!0,f.textContent=M.children)}return f.nextSibling},x=(f,M,L,b,A,U,X)=>{X=X||!!M.dynamicChildren;const T=M.children,J=T.length;for(let Q=0;Q<J;Q++){const h1=X?T[Q]:T[Q]=i2(T[Q]);if(f)f=g(f,h1,b,A,U,X);else{if(h1.type===Yt&&!h1.children)continue;A2=!0,e(null,h1,L,null,b,A,xn(L),U)}}return f},k=(f,M,L,b,A,U)=>{const{slotScopeIds:X}=M;X&&(A=A?A.concat(X):X);const T=d(f),J=x(i(f),M,T,L,b,A,U);return J&&gn(J)&&J.data==="]"?i(M.anchor=J):(A2=!0,w(M.anchor=u("]"),T,J),J)},C=(f,M,L,b,A,U)=>{if(A2=!0,M.el=null,U){const J=y(f);for(;;){const Q=i(f);if(Q&&Q!==J)p(Q);else break}}const X=i(f),T=d(f);return p(f),e(null,M,T,X,L,b,xn(T),A),X},y=f=>{let M=0;for(;f;)if(f=i(f),f&&gn(f)&&(f.data==="["&&M++,f.data==="]")){if(M===0)return i(f);M--}return f};return[_,g]}const Q1=P4;function Os(t){return Ns(t,Gs)}function Ns(t,n){const e=Mo();e.__VUE__=!0;const{insert:l,remove:a,patchProp:i,createElement:d,createText:p,createComment:w,setText:u,setElementText:_,parentNode:g,nextSibling:v,setScopeId:x=p2,cloneNode:k,insertStaticContent:C}=t,y=(m,$,z,V=null,H=null,D=null,q=!1,P=null,I=!!$.dynamicChildren)=>{if(m===$)return;m&&!Q2(m,$)&&(V=W(m),C1(m,H,D,!0),m=null),$.patchFlag===-2&&(I=!1,$.dynamicChildren=null);const{type:S,ref:n1,shapeFlag:Y}=$;switch(S){case Yt:f(m,$,z,V);break;case r2:M(m,$,z,V);break;case Et:m==null&&L($,z,V,q);break;case V1:d1(m,$,z,V,H,D,q,P,I);break;default:Y&1?U(m,$,z,V,H,D,q,P,I):Y&6?K(m,$,z,V,H,D,q,P,I):(Y&64||Y&128)&&S.process(m,$,z,V,H,D,q,P,I,x1)}n1!=null&&H&&An(n1,m&&m.ref,D,$||m,!$)},f=(m,$,z,V)=>{if(m==null)l($.el=p($.children),z,V);else{const H=$.el=m.el;$.children!==m.children&&u(H,$.children)}},M=(m,$,z,V)=>{m==null?l($.el=w($.children||""),z,V):$.el=m.el},L=(m,$,z,V)=>{[m.el,m.anchor]=C(m.children,$,z,V,m.el,m.anchor)},b=({el:m,anchor:$},z,V)=>{let H;for(;m&&m!==$;)H=v(m),l(m,z,V),m=H;l($,z,V)},A=({el:m,anchor:$})=>{let z;for(;m&&m!==$;)z=v(m),a(m),m=z;a($)},U=(m,$,z,V,H,D,q,P,I)=>{q=q||$.type==="svg",m==null?X($,z,V,H,D,q,P,I):Q(m,$,H,D,q,P,I)},X=(m,$,z,V,H,D,q,P)=>{let I,S;const{type:n1,props:Y,shapeFlag:e1,transition:i1,patchFlag:f1,dirs:S1}=m;if(m.el&&k!==void 0&&f1===-1)I=m.el=k(m.el);else{if(I=m.el=d(m.type,D,Y&&Y.is,Y),e1&8?_(I,m.children):e1&16&&J(m.children,I,null,V,H,D&&n1!=="foreignObject",q,P),S1&&k2(m,null,V,"created"),Y){for(const T1 in Y)T1!=="value"&&!Pt(T1)&&i(I,T1,null,Y[T1],D,m.children,V,H,j);"value"in Y&&i(I,"value",null,Y.value),(S=Y.onVnodeBeforeMount)&&c2(S,V,m)}T(I,m,m.scopeId,q,V)}S1&&k2(m,null,V,"beforeMount");const A1=(!H||H&&!H.pendingBranch)&&i1&&!i1.persisted;A1&&i1.beforeEnter(I),l(I,$,z),((S=Y&&Y.onVnodeMounted)||A1||S1)&&Q1(()=>{S&&c2(S,V,m),A1&&i1.enter(I),S1&&k2(m,null,V,"mounted")},H)},T=(m,$,z,V,H)=>{if(z&&x(m,z),V)for(let D=0;D<V.length;D++)x(m,V[D]);if(H){let D=H.subTree;if($===D){const q=H.vnode;T(m,q,q.scopeId,q.slotScopeIds,H.parent)}}},J=(m,$,z,V,H,D,q,P,I=0)=>{for(let S=I;S<m.length;S++){const n1=m[S]=P?D2(m[S]):i2(m[S]);y(null,n1,$,z,V,H,D,q,P)}},Q=(m,$,z,V,H,D,q)=>{const P=$.el=m.el;let{patchFlag:I,dynamicChildren:S,dirs:n1}=$;I|=m.patchFlag&16;const Y=m.props||R1,e1=$.props||R1;let i1;z&&N2(z,!1),(i1=e1.onVnodeBeforeUpdate)&&c2(i1,z,$,m),n1&&k2($,m,z,"beforeUpdate"),z&&N2(z,!0);const f1=H&&$.type!=="foreignObject";if(S?h1(m.dynamicChildren,S,P,z,V,f1,D):q||G(m,$,P,null,z,V,f1,D,!1),I>0){if(I&16)E(P,$,Y,e1,z,V,H);else if(I&2&&Y.class!==e1.class&&i(P,"class",null,e1.class,H),I&4&&i(P,"style",Y.style,e1.style,H),I&8){const S1=$.dynamicProps;for(let A1=0;A1<S1.length;A1++){const T1=S1[A1],a2=Y[T1],st=e1[T1];(st!==a2||T1==="value")&&i(P,T1,a2,st,H,m.children,z,V,j)}}I&1&&m.children!==$.children&&_(P,$.children)}else!q&&S==null&&E(P,$,Y,e1,z,V,H);((i1=e1.onVnodeUpdated)||n1)&&Q1(()=>{i1&&c2(i1,z,$,m),n1&&k2($,m,z,"updated")},V)},h1=(m,$,z,V,H,D,q)=>{for(let P=0;P<$.length;P++){const I=m[P],S=$[P],n1=I.el&&(I.type===V1||!Q2(I,S)||I.shapeFlag&70)?g(I.el):z;y(I,S,n1,null,V,H,D,q,!0)}},E=(m,$,z,V,H,D,q)=>{if(z!==V){for(const P in V){if(Pt(P))continue;const I=V[P],S=z[P];I!==S&&P!=="value"&&i(m,P,S,I,q,$.children,H,D,j)}if(z!==R1)for(const P in z)!Pt(P)&&!(P in V)&&i(m,P,z[P],null,q,$.children,H,D,j);"value"in V&&i(m,"value",z.value,V.value)}},d1=(m,$,z,V,H,D,q,P,I)=>{const S=$.el=m?m.el:p(""),n1=$.anchor=m?m.anchor:p("");let{patchFlag:Y,dynamicChildren:e1,slotScopeIds:i1}=$;i1&&(P=P?P.concat(i1):i1),m==null?(l(S,z,V),l(n1,z,V),J($.children,z,n1,H,D,q,P,I)):Y>0&&Y&64&&e1&&m.dynamicChildren?(h1(m.dynamicChildren,e1,z,H,D,q,P),($.key!=null||H&&$===H.subTree)&&tr(m,$,!0)):G(m,$,z,n1,H,D,q,P,I)},K=(m,$,z,V,H,D,q,P,I)=>{$.slotScopeIds=P,m==null?$.shapeFlag&512?H.ctx.activate($,z,V,q,I):I1($,z,V,H,D,q,I):v1(m,$,I)},I1=(m,$,z,V,H,D,q)=>{const P=m.component=nc(m,V,H);if(sn(m)&&(P.ctx.renderer=x1),rc(P),P.asyncDep){if(H&&H.registerDep(P,y1),!m.el){const I=P.subTree=m1(r2);M(null,I,$,z)}return}y1(P,m,$,z,H,D,q)},v1=(m,$,z)=>{const V=$.component=m.component;if(_s(m,$,z))if(V.asyncDep&&!V.asyncResolved){b1(V,$,z);return}else V.next=$,as(V.update),V.update();else $.el=m.el,V.vnode=$},y1=(m,$,z,V,H,D,q)=>{const P=()=>{if(m.isMounted){let{next:n1,bu:Y,u:e1,parent:i1,vnode:f1}=m,S1=n1,A1;N2(m,!1),n1?(n1.el=f1.el,b1(m,n1,q)):n1=f1,Y&&Cn(Y),(A1=n1.props&&n1.props.onVnodeBeforeUpdate)&&c2(A1,i1,n1,f1),N2(m,!0);const T1=ee(m),a2=m.subTree;m.subTree=T1,y(a2,T1,g(a2.el),W(a2),m,H,D),n1.el=T1.el,S1===null&&vs(m,T1.el),e1&&Q1(e1,H),(A1=n1.props&&n1.props.onVnodeUpdated)&&Q1(()=>c2(A1,i1,n1,f1),H)}else{let n1;const{el:Y,props:e1}=$,{bm:i1,m:f1,parent:S1}=m,A1=wt($);if(N2(m,!1),i1&&Cn(i1),!A1&&(n1=e1&&e1.onVnodeBeforeMount)&&c2(n1,S1,$),N2(m,!0),Y&&p1){const T1=()=>{m.subTree=ee(m),p1(Y,m.subTree,m,H,null)};A1?$.type.__asyncLoader().then(()=>!m.isUnmounted&&T1()):T1()}else{const T1=m.subTree=ee(m);y(null,T1,z,V,m,H,D),$.el=T1.el}if(f1&&Q1(f1,H),!A1&&(n1=e1&&e1.onVnodeMounted)){const T1=$;Q1(()=>c2(n1,S1,T1),H)}($.shapeFlag&256||S1&&wt(S1.vnode)&&S1.vnode.shapeFlag&256)&&m.a&&Q1(m.a,H),m.isMounted=!0,$=z=V=null}},I=m.effect=new Ye(P,()=>s3(S),m.scope),S=m.update=()=>I.run();S.id=m.uid,N2(m,!0),S()},b1=(m,$,z)=>{$.component=m;const V=m.vnode.props;m.vnode=$,m.next=null,Ds(m,$.props,V,z),Is(m,$.children,z),ft(),Un(void 0,m.update),$t()},G=(m,$,z,V,H,D,q,P,I=!1)=>{const S=m&&m.children,n1=m?m.shapeFlag:0,Y=$.children,{patchFlag:e1,shapeFlag:i1}=$;if(e1>0){if(e1&128){a1(S,Y,z,V,H,D,q,P,I);return}else if(e1&256){s1(S,Y,z,V,H,D,q,P,I);return}}i1&8?(n1&16&&j(S,H,D),Y!==S&&_(z,Y)):n1&16?i1&16?a1(S,Y,z,V,H,D,q,P,I):j(S,H,D,!0):(n1&8&&_(z,""),i1&16&&J(Y,z,V,H,D,q,P,I))},s1=(m,$,z,V,H,D,q,P,I)=>{m=m||ht,$=$||ht;const S=m.length,n1=$.length,Y=Math.min(S,n1);let e1;for(e1=0;e1<Y;e1++){const i1=$[e1]=I?D2($[e1]):i2($[e1]);y(m[e1],i1,z,null,H,D,q,P,I)}S>n1?j(m,H,D,!0,!1,Y):J($,z,V,H,D,q,P,I,Y)},a1=(m,$,z,V,H,D,q,P,I)=>{let S=0;const n1=$.length;let Y=m.length-1,e1=n1-1;for(;S<=Y&&S<=e1;){const i1=m[S],f1=$[S]=I?D2($[S]):i2($[S]);if(Q2(i1,f1))y(i1,f1,z,null,H,D,q,P,I);else break;S++}for(;S<=Y&&S<=e1;){const i1=m[Y],f1=$[e1]=I?D2($[e1]):i2($[e1]);if(Q2(i1,f1))y(i1,f1,z,null,H,D,q,P,I);else break;Y--,e1--}if(S>Y){if(S<=e1){const i1=e1+1,f1=i1<n1?$[i1].el:V;for(;S<=e1;)y(null,$[S]=I?D2($[S]):i2($[S]),z,f1,H,D,q,P,I),S++}}else if(S>e1)for(;S<=Y;)C1(m[S],H,D,!0),S++;else{const i1=S,f1=S,S1=new Map;for(S=f1;S<=e1;S++){const t2=$[S]=I?D2($[S]):i2($[S]);t2.key!=null&&S1.set(t2.key,S)}let A1,T1=0;const a2=e1-f1+1;let st=!1,m3=0;const Bt=new Array(a2);for(S=0;S<a2;S++)Bt[S]=0;for(S=i1;S<=Y;S++){const t2=m[S];if(T1>=a2){C1(t2,H,D,!0);continue}let m2;if(t2.key!=null)m2=S1.get(t2.key);else for(A1=f1;A1<=e1;A1++)if(Bt[A1-f1]===0&&Q2(t2,$[A1])){m2=A1;break}m2===void 0?C1(t2,H,D,!0):(Bt[m2-f1]=S+1,m2>=m3?m3=m2:st=!0,y(t2,$[m2],z,null,H,D,q,P,I),T1++)}const k3=st?Ks(Bt):ht;for(A1=k3.length-1,S=a2-1;S>=0;S--){const t2=f1+S,m2=$[t2],f3=t2+1<n1?$[t2+1].el:V;Bt[S]===0?y(null,m2,z,f3,H,D,q,P,I):st&&(A1<0||S!==k3[A1]?H1(m2,z,f3,2):A1--)}}},H1=(m,$,z,V,H=null)=>{const{el:D,type:q,transition:P,children:I,shapeFlag:S}=m;if(S&6){H1(m.component.subTree,$,z,V);return}if(S&128){m.suspense.move($,z,V);return}if(S&64){q.move(m,$,z,x1);return}if(q===V1){l(D,$,z);for(let Y=0;Y<I.length;Y++)H1(I[Y],$,z,V);l(m.anchor,$,z);return}if(q===Et){b(m,$,z);return}if(V!==2&&S&1&&P)if(V===0)P.beforeEnter(D),l(D,$,z),Q1(()=>P.enter(D),H);else{const{leave:Y,delayLeave:e1,afterLeave:i1}=P,f1=()=>l(D,$,z),S1=()=>{Y(D,()=>{f1(),i1&&i1()})};e1?e1(D,f1,S1):S1()}else l(D,$,z)},C1=(m,$,z,V=!1,H=!1)=>{const{type:D,props:q,ref:P,children:I,dynamicChildren:S,shapeFlag:n1,patchFlag:Y,dirs:e1}=m;if(P!=null&&An(P,null,z,m,!0),n1&256){$.ctx.deactivate(m);return}const i1=n1&1&&e1,f1=!wt(m);let S1;if(f1&&(S1=q&&q.onVnodeBeforeUnmount)&&c2(S1,$,m),n1&6)F(m.component,z,V);else{if(n1&128){m.suspense.unmount(z,V);return}i1&&k2(m,null,$,"beforeUnmount"),n1&64?m.type.remove(m,$,z,H,x1,V):S&&(D!==V1||Y>0&&Y&64)?j(S,$,z,!1,!0):(D===V1&&Y&384||!H&&n1&16)&&j(I,$,z),V&&_1(m)}(f1&&(S1=q&&q.onVnodeUnmounted)||i1)&&Q1(()=>{S1&&c2(S1,$,m),i1&&k2(m,null,$,"unmounted")},z)},_1=m=>{const{type:$,el:z,anchor:V,transition:H}=m;if($===V1){B(z,V);return}if($===Et){A(m);return}const D=()=>{a(z),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(m.shapeFlag&1&&H&&!H.persisted){const{leave:q,delayLeave:P}=H,I=()=>q(z,D);P?P(m.el,D,I):I()}else D()},B=(m,$)=>{let z;for(;m!==$;)z=v(m),a(m),m=z;a($)},F=(m,$,z)=>{const{bum:V,scope:H,update:D,subTree:q,um:P}=m;V&&Cn(V),H.stop(),D&&(D.active=!1,C1(q,m,$,z)),P&&Q1(P,$),Q1(()=>{m.isUnmounted=!0},$),$&&$.pendingBranch&&!$.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===$.pendingId&&($.deps--,$.deps===0&&$.resolve())},j=(m,$,z,V=!1,H=!1,D=0)=>{for(let q=D;q<m.length;q++)C1(m[q],$,z,V,H)},W=m=>m.shapeFlag&6?W(m.component.subTree):m.shapeFlag&128?m.suspense.next():v(m.anchor||m.el),M1=(m,$,z)=>{m==null?$._vnode&&C1($._vnode,null,null,!0):y($._vnode||null,m,$,null,null,null,z),Ln(),$._vnode=m},x1={p:y,um:C1,m:H1,r:_1,mt:I1,mc:J,pc:G,pbc:h1,n:W,o:t};let w1,p1;return n&&([w1,p1]=n(x1)),{render:M1,hydrate:w1,createApp:qs(M1,w1)}}function N2({effect:t,update:n},e){t.allowRecurse=n.allowRecurse=e}function tr(t,n,e=!1){const l=t.children,a=n.children;if(t1(l)&&t1(a))for(let i=0;i<l.length;i++){const d=l[i];let p=a[i];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=a[i]=D2(a[i]),p.el=d.el),e||tr(d,p))}}function Ks(t){const n=t.slice(),e=[0];let l,a,i,d,p;const w=t.length;for(l=0;l<w;l++){const u=t[l];if(u!==0){if(a=e[e.length-1],t[a]<u){n[l]=a,e.push(l);continue}for(i=0,d=e.length-1;i<d;)p=i+d>>1,t[e[p]]<u?i=p+1:d=p;u<t[e[i]]&&(i>0&&(n[l]=e[i-1]),e[i]=l)}}for(i=e.length,d=e[i-1];i-- >0;)e[i]=d,d=n[d];return e}const Ws=t=>t.__isTeleport,V1=Symbol(void 0),Yt=Symbol(void 0),r2=Symbol(void 0),Et=Symbol(void 0),Ft=[];let d2=null;function o(t=!1){Ft.push(d2=t?null:[])}function Js(){Ft.pop(),d2=Ft[Ft.length-1]||null}let Qt=1;function O3(t){Qt+=t}function nr(t){return t.dynamicChildren=Qt>0?d2||ht:null,Js(),Qt>0&&d2&&d2.push(t),t}function s(t,n,e,l,a,i){return nr(r(t,n,e,l,a,i,!0))}function _2(t,n,e,l,a){return nr(m1(t,n,e,l,a,!0))}function jn(t){return t?t.__v_isVNode===!0:!1}function Q2(t,n){return t.type===n.type&&t.key===n.key}const Nn="__vInternal",er=({key:t})=>t!=null?t:null,zn=({ref:t,ref_key:n,ref_for:e})=>t!=null?L1(t)||K1(t)||u1(t)?{i:X1,r:t,k:n,f:!!e}:t:null;function r(t,n=null,e=null,l=0,a=null,i=t===V1?0:1,d=!1,p=!1){const w={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&er(n),ref:n&&zn(n),scopeId:R4,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:l,dynamicProps:a,dynamicChildren:null,appContext:null};return p?(i3(w,e),i&128&&t.normalize(w)):e&&(w.shapeFlag|=L1(e)?8:16),Qt>0&&!d&&d2&&(w.patchFlag>0||i&6)&&w.patchFlag!==32&&d2.push(w),w}const m1=Xs;function Xs(t,n=null,e=null,l=0,a=null,i=!1){if((!t||t===q4)&&(t=r2),jn(t)){const p=G2(t,n,!0);return e&&i3(p,e),Qt>0&&!i&&d2&&(p.shapeFlag&6?d2[d2.indexOf(t)]=p:d2.push(p)),p.patchFlag|=-2,p}if(ac(t)&&(t=t.__vccOpts),n){n=Ys(n);let{class:p,style:w}=n;p&&!L1(p)&&(n.class=O1(p)),F1(w)&&(M4(w)&&!t1(w)&&(w=J1({},w)),n.style=f2(w))}const d=L1(t)?1:xs(t)?128:Ws(t)?64:F1(t)?4:u1(t)?2:0;return r(t,n,e,l,a,d,i,!0)}function Ys(t){return t?M4(t)||Nn in t?J1({},t):t:null}function G2(t,n,e=!1){const{props:l,ref:a,patchFlag:i,children:d}=t,p=n?Qs(l||{},n):l;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:p,key:p&&er(p),ref:n&&n.ref?e&&a?t1(a)?a.concat(zn(n)):[a,zn(n)]:zn(n):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:d,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==V1?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&G2(t.ssContent),ssFallback:t.ssFallback&&G2(t.ssFallback),el:t.el,anchor:t.anchor}}function u2(t=" ",n=0){return m1(Yt,null,t,n)}function h(t,n){const e=m1(Et,null,t);return e.staticCount=n,e}function g1(t="",n=!1){return n?(o(),_2(r2,null,t)):m1(r2,null,t)}function i2(t){return t==null||typeof t=="boolean"?m1(r2):t1(t)?m1(V1,null,t.slice()):typeof t=="object"?D2(t):m1(Yt,null,String(t))}function D2(t){return t.el===null||t.memo?t:G2(t)}function i3(t,n){let e=0;const{shapeFlag:l}=t;if(n==null)n=null;else if(t1(n))e=16;else if(typeof n=="object")if(l&65){const a=n.default;a&&(a._c&&(a._d=!1),i3(t,a()),a._c&&(a._d=!0));return}else{e=32;const a=n._;!a&&!(Nn in n)?n._ctx=X1:a===3&&X1&&(X1.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else u1(n)?(n={default:n,_ctx:X1},e=32):(n=String(n),l&64?(e=16,n=[u2(n)]):e=8);t.children=n,t.shapeFlag|=e}function Qs(...t){const n={};for(let e=0;e<t.length;e++){const l=t[e];for(const a in l)if(a==="class")n.class!==l.class&&(n.class=O1([n.class,l.class]));else if(a==="style")n.style=f2([n.style,l.style]);else if(en(a)){const i=n[a],d=l[a];d&&i!==d&&!(t1(i)&&i.includes(d))&&(n[a]=i?[].concat(i,d):d)}else a!==""&&(n[a]=l[a])}return n}function c2(t,n,e,l=null){l2(t,n,7,[e,l])}const Zs=Z4();let tc=0;function nc(t,n,e){const l=t.type,a=(n?n.appContext:t.appContext)||Zs,i={uid:tc++,vnode:t,type:l,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Co(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:J4(l,a),emitsOptions:j4(l,a),emit:null,emitted:null,propsDefaults:R1,inheritAttrs:l.inheritAttrs,ctx:R1,data:R1,props:R1,attrs:R1,slots:R1,refs:R1,setupState:R1,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=ds.bind(null,i),t.ce&&t.ce(i),i}let q1=null;const ec=()=>q1||X1,ut=t=>{q1=t,t.scope.on()},et=()=>{q1&&q1.scope.off(),q1=null};function rr(t){return t.vnode.shapeFlag&4}let _t=!1;function rc(t,n=!1){_t=n;const{props:e,children:l}=t.vnode,a=rr(t);Ts(t,e,a,n),Fs(t,l);const i=a?oc(t,n):void 0;return _t=!1,i}function oc(t,n){const e=t.type;t.accessCache=Object.create(null),t.proxy=C4(new Proxy(t.ctx,Vs));const{setup:l}=e;if(l){const a=t.setupContext=l.length>1?cc(t):null;ut(t),ft();const i=U2(l,t,0,[t.props,a]);if($t(),et(),h4(i)){if(i.then(et,et),n)return i.then(d=>{N3(t,d,n)}).catch(d=>{on(d,t,0)});t.asyncDep=i}else N3(t,i,n)}else or(t,n)}function N3(t,n,e){u1(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:F1(n)&&(t.setupState=L4(n)),or(t,e)}let K3;function or(t,n,e){const l=t.type;if(!t.render){if(!n&&K3&&!l.render){const a=l.template;if(a){const{isCustomElement:i,compilerOptions:d}=t.appContext.config,{delimiters:p,compilerOptions:w}=l,u=J1(J1({isCustomElement:i,delimiters:p},d),w);l.render=K3(a,u)}}t.render=l.render||p2}ut(t),ft(),Ss(t),$t(),et()}function sc(t){return new Proxy(t.attrs,{get(n,e){return o2(t,"get","$attrs"),n[e]}})}function cc(t){const n=l=>{t.exposed=l||{}};let e;return{get attrs(){return e||(e=sc(t))},slots:t.slots,emit:t.emit,expose:n}}function Kn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(L4(C4(t.exposed)),{get(n,e){if(e in n)return n[e];if(e in Vn)return Vn[e](t)}}))}function lc(t,n=!0){return u1(t)?t.displayName||t.name:t.name||n&&t.__name}function ac(t){return u1(t)&&"__vccOpts"in t}const r1=(t,n)=>ss(t,n,_t);function O(t,n,e){const l=arguments.length;return l===2?F1(n)&&!t1(n)?jn(n)?m1(t,null,[n]):m1(t,n):m1(t,null,n):(l>3?e=Array.prototype.slice.call(arguments,2):l===3&&jn(e)&&(e=[e]),m1(t,n,e))}const ic="3.2.37",hc="http://www.w3.org/2000/svg",Z2=typeof document!="undefined"?document:null,W3=Z2&&Z2.createElement("template"),dc={insert:(t,n,e)=>{n.insertBefore(t,e||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,e,l)=>{const a=n?Z2.createElementNS(hc,t):Z2.createElement(t,e?{is:e}:void 0);return t==="select"&&l&&l.multiple!=null&&a.setAttribute("multiple",l.multiple),a},createText:t=>Z2.createTextNode(t),createComment:t=>Z2.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Z2.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},cloneNode(t){const n=t.cloneNode(!0);return"_value"in t&&(n._value=t._value),n},insertStaticContent(t,n,e,l,a,i){const d=e?e.previousSibling:n.lastChild;if(a&&(a===i||a.nextSibling))for(;n.insertBefore(a.cloneNode(!0),e),!(a===i||!(a=a.nextSibling)););else{W3.innerHTML=l?`<svg>${t}</svg>`:t;const p=W3.content;if(l){const w=p.firstChild;for(;w.firstChild;)p.appendChild(w.firstChild);p.removeChild(w)}n.insertBefore(p,e)}return[d?d.nextSibling:n.firstChild,e?e.previousSibling:n.lastChild]}};function pc(t,n,e){const l=t._vtc;l&&(n=(n?[n,...l]:[...l]).join(" ")),n==null?t.removeAttribute("class"):e?t.setAttribute("class",n):t.className=n}function wc(t,n,e){const l=t.style,a=L1(e);if(e&&!a){for(const i in e)Pe(l,i,e[i]);if(n&&!L1(n))for(const i in n)e[i]==null&&Pe(l,i,"")}else{const i=l.display;a?n!==e&&(l.cssText=e):n&&t.removeAttribute("style"),"_vod"in t&&(l.display=i)}}const J3=/\s*!important$/;function Pe(t,n,e){if(t1(e))e.forEach(l=>Pe(t,n,l));else if(e==null&&(e=""),n.startsWith("--"))t.setProperty(n,e);else{const l=uc(t,n);J3.test(e)?t.setProperty(kt(l),e.replace(J3,""),"important"):t[l]=e}}const X3=["Webkit","Moz","ms"],se={};function uc(t,n){const e=se[n];if(e)return e;let l=$2(n);if(l!=="filter"&&l in t)return se[n]=l;l=En(l);for(let a=0;a<X3.length;a++){const i=X3[a]+l;if(i in t)return se[n]=i}return n}const Y3="http://www.w3.org/1999/xlink";function _c(t,n,e,l,a){if(l&&n.startsWith("xlink:"))e==null?t.removeAttributeNS(Y3,n.slice(6,n.length)):t.setAttributeNS(Y3,n,e);else{const i=po(n);e==null||i&&!a4(e)?t.removeAttribute(n):t.setAttribute(n,i?"":e)}}function vc(t,n,e,l,a,i,d){if(n==="innerHTML"||n==="textContent"){l&&d(l,a,i),t[n]=e==null?"":e;return}if(n==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=e;const w=e==null?"":e;(t.value!==w||t.tagName==="OPTION")&&(t.value=w),e==null&&t.removeAttribute(n);return}let p=!1;if(e===""||e==null){const w=typeof t[n];w==="boolean"?e=a4(e):e==null&&w==="string"?(e="",p=!0):w==="number"&&(e=0,p=!0)}try{t[n]=e}catch{}p&&t.removeAttribute(n)}const[sr,xc]=(()=>{let t=Date.now,n=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const e=navigator.userAgent.match(/firefox\/(\d+)/i);n=!!(e&&Number(e[1])<=53)}return[t,n]})();let Te=0;const gc=Promise.resolve(),mc=()=>{Te=0},kc=()=>Te||(gc.then(mc),Te=sr());function z2(t,n,e,l){t.addEventListener(n,e,l)}function fc(t,n,e,l){t.removeEventListener(n,e,l)}function $c(t,n,e,l,a=null){const i=t._vei||(t._vei={}),d=i[n];if(l&&d)d.value=l;else{const[p,w]=Mc(n);if(l){const u=i[n]=Cc(l,a);z2(t,p,u,w)}else d&&(fc(t,p,d,w),i[n]=void 0)}}const Q3=/(?:Once|Passive|Capture)$/;function Mc(t){let n;if(Q3.test(t)){n={};let e;for(;e=t.match(Q3);)t=t.slice(0,t.length-e[0].length),n[e[0].toLowerCase()]=!0}return[kt(t.slice(2)),n]}function Cc(t,n){const e=l=>{const a=l.timeStamp||sr();(xc||a>=e.attached-1)&&l2(zc(l,e.value),n,5,[l])};return e.value=t,e.attached=kc(),e}function zc(t,n){if(t1(n)){const e=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{e.call(t),t._stopped=!0},n.map(l=>a=>!a._stopped&&l&&l(a))}else return n}const Z3=/^on[a-z]/,yc=(t,n,e,l,a=!1,i,d,p,w)=>{n==="class"?pc(t,l,a):n==="style"?wc(t,e,l):en(n)?Ke(n)||$c(t,n,e,l,d):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):bc(t,n,l,a))?vc(t,n,l,i,d,p,w):(n==="true-value"?t._trueValue=l:n==="false-value"&&(t._falseValue=l),_c(t,n,l,a))};function bc(t,n,e,l){return l?!!(n==="innerHTML"||n==="textContent"||n in t&&Z3.test(n)&&u1(e)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA"||Z3.test(n)&&L1(e)?!1:n in t}const j2="transition",Lt="animation",h3=(t,{slots:n})=>O(E4,Bc(t),n);h3.displayName="Transition";const cr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};h3.props=J1({},E4.props,cr);const K2=(t,n=[])=>{t1(t)?t.forEach(e=>e(...n)):t&&t(...n)},t0=t=>t?t1(t)?t.some(n=>n.length>1):t.length>1:!1;function Bc(t){const n={};for(const E in t)E in cr||(n[E]=t[E]);if(t.css===!1)return n;const{name:e="v",type:l,duration:a,enterFromClass:i=`${e}-enter-from`,enterActiveClass:d=`${e}-enter-active`,enterToClass:p=`${e}-enter-to`,appearFromClass:w=i,appearActiveClass:u=d,appearToClass:_=p,leaveFromClass:g=`${e}-leave-from`,leaveActiveClass:v=`${e}-leave-active`,leaveToClass:x=`${e}-leave-to`}=t,k=Lc(a),C=k&&k[0],y=k&&k[1],{onBeforeEnter:f,onEnter:M,onEnterCancelled:L,onLeave:b,onLeaveCancelled:A,onBeforeAppear:U=f,onAppear:X=M,onAppearCancelled:T=L}=n,J=(E,d1,K)=>{W2(E,d1?_:p),W2(E,d1?u:d),K&&K()},Q=(E,d1)=>{E._isLeaving=!1,W2(E,g),W2(E,x),W2(E,v),d1&&d1()},h1=E=>(d1,K)=>{const I1=E?X:M,v1=()=>J(d1,E,K);K2(I1,[d1,v1]),n0(()=>{W2(d1,E?w:i),R2(d1,E?_:p),t0(I1)||e0(d1,l,C,v1)})};return J1(n,{onBeforeEnter(E){K2(f,[E]),R2(E,i),R2(E,d)},onBeforeAppear(E){K2(U,[E]),R2(E,w),R2(E,u)},onEnter:h1(!1),onAppear:h1(!0),onLeave(E,d1){E._isLeaving=!0;const K=()=>Q(E,d1);R2(E,g),Sc(),R2(E,v),n0(()=>{!E._isLeaving||(W2(E,g),R2(E,x),t0(b)||e0(E,l,y,K))}),K2(b,[E,K])},onEnterCancelled(E){J(E,!1),K2(L,[E])},onAppearCancelled(E){J(E,!0),K2(T,[E])},onLeaveCancelled(E){Q(E),K2(A,[E])}})}function Lc(t){if(t==null)return null;if(F1(t))return[ce(t.enter),ce(t.leave)];{const n=ce(t);return[n,n]}}function ce(t){return Kt(t)}function R2(t,n){n.split(/\s+/).forEach(e=>e&&t.classList.add(e)),(t._vtc||(t._vtc=new Set)).add(n)}function W2(t,n){n.split(/\s+/).forEach(l=>l&&t.classList.remove(l));const{_vtc:e}=t;e&&(e.delete(n),e.size||(t._vtc=void 0))}function n0(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Hc=0;function e0(t,n,e,l){const a=t._endId=++Hc,i=()=>{a===t._endId&&l()};if(e)return setTimeout(i,e);const{type:d,timeout:p,propCount:w}=Vc(t,n);if(!d)return l();const u=d+"end";let _=0;const g=()=>{t.removeEventListener(u,v),i()},v=x=>{x.target===t&&++_>=w&&g()};setTimeout(()=>{_<w&&g()},p+1),t.addEventListener(u,v)}function Vc(t,n){const e=window.getComputedStyle(t),l=k=>(e[k]||"").split(", "),a=l(j2+"Delay"),i=l(j2+"Duration"),d=r0(a,i),p=l(Lt+"Delay"),w=l(Lt+"Duration"),u=r0(p,w);let _=null,g=0,v=0;n===j2?d>0&&(_=j2,g=d,v=i.length):n===Lt?u>0&&(_=Lt,g=u,v=w.length):(g=Math.max(d,u),_=g>0?d>u?j2:Lt:null,v=_?_===j2?i.length:w.length:0);const x=_===j2&&/\b(transform|all)(,|$)/.test(e[j2+"Property"]);return{type:_,timeout:g,propCount:v,hasTransform:x}}function r0(t,n){for(;t.length<n.length;)t=t.concat(t);return Math.max(...n.map((e,l)=>o0(e)+o0(t[l])))}function o0(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Sc(){return document.body.offsetHeight}const O2=t=>{const n=t.props["onUpdate:modelValue"]||!1;return t1(n)?e=>Cn(n,e):n};function Ac(t){t.target.composing=!0}function s0(t){const n=t.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const De={created(t,{modifiers:{lazy:n,trim:e,number:l}},a){t._assign=O2(a);const i=l||a.props&&a.props.type==="number";z2(t,n?"change":"input",d=>{if(d.target.composing)return;let p=t.value;e&&(p=p.trim()),i&&(p=Kt(p)),t._assign(p)}),e&&z2(t,"change",()=>{t.value=t.value.trim()}),n||(z2(t,"compositionstart",Ac),z2(t,"compositionend",s0),z2(t,"change",s0))},mounted(t,{value:n}){t.value=n==null?"":n},beforeUpdate(t,{value:n,modifiers:{lazy:e,trim:l,number:a}},i){if(t._assign=O2(i),t.composing||document.activeElement===t&&t.type!=="range"&&(e||l&&t.value.trim()===n||(a||t.type==="number")&&Kt(t.value)===n))return;const d=n==null?"":n;t.value!==d&&(t.value=d)}},jc={deep:!0,created(t,n,e){t._assign=O2(e),z2(t,"change",()=>{const l=t._modelValue,a=vt(t),i=t.checked,d=t._assign;if(t1(l)){const p=Ne(l,a),w=p!==-1;if(i&&!w)d(l.concat(a));else if(!i&&w){const u=[...l];u.splice(p,1),d(u)}}else if(mt(l)){const p=new Set(l);i?p.add(a):p.delete(a),d(p)}else d(lr(t,i))})},mounted:c0,beforeUpdate(t,n,e){t._assign=O2(e),c0(t,n,e)}};function c0(t,{value:n,oldValue:e},l){t._modelValue=n,t1(n)?t.checked=Ne(n,l.props.value)>-1:mt(n)?t.checked=n.has(l.props.value):n!==e&&(t.checked=rt(n,lr(t,!0)))}const Rc={created(t,{value:n},e){t.checked=rt(n,e.props.value),t._assign=O2(e),z2(t,"change",()=>{t._assign(vt(t))})},beforeUpdate(t,{value:n,oldValue:e},l){t._assign=O2(l),n!==e&&(t.checked=rt(n,l.props.value))}},Pc={deep:!0,created(t,{value:n,modifiers:{number:e}},l){const a=mt(n);z2(t,"change",()=>{const i=Array.prototype.filter.call(t.options,d=>d.selected).map(d=>e?Kt(vt(d)):vt(d));t._assign(t.multiple?a?new Set(i):i:i[0])}),t._assign=O2(l)},mounted(t,{value:n}){l0(t,n)},beforeUpdate(t,n,e){t._assign=O2(e)},updated(t,{value:n}){l0(t,n)}};function l0(t,n){const e=t.multiple;if(!(e&&!t1(n)&&!mt(n))){for(let l=0,a=t.options.length;l<a;l++){const i=t.options[l],d=vt(i);if(e)t1(n)?i.selected=Ne(n,d)>-1:i.selected=n.has(d);else if(rt(vt(i),n)){t.selectedIndex!==l&&(t.selectedIndex=l);return}}!e&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function vt(t){return"_value"in t?t._value:t.value}function lr(t,n){const e=n?"_trueValue":"_falseValue";return e in t?t[e]:n}const Tc={created(t,n,e){mn(t,n,e,null,"created")},mounted(t,n,e){mn(t,n,e,null,"mounted")},beforeUpdate(t,n,e,l){mn(t,n,e,l,"beforeUpdate")},updated(t,n,e,l){mn(t,n,e,l,"updated")}};function Dc(t,n){switch(t){case"SELECT":return Pc;case"TEXTAREA":return De;default:switch(n){case"checkbox":return jc;case"radio":return Rc;default:return De}}}function mn(t,n,e,l,a){const d=Dc(t.tagName,e.props&&e.props.type)[a];d&&d(t,n,e,l)}const a0={beforeMount(t,{value:n},{transition:e}){t._vod=t.style.display==="none"?"":t.style.display,e&&n?e.beforeEnter(t):Ht(t,n)},mounted(t,{value:n},{transition:e}){e&&n&&e.enter(t)},updated(t,{value:n,oldValue:e},{transition:l}){!n!=!e&&(l?n?(l.beforeEnter(t),Ht(t,!0),l.enter(t)):l.leave(t,()=>{Ht(t,!1)}):Ht(t,n))},beforeUnmount(t,{value:n}){Ht(t,n)}};function Ht(t,n){t.style.display=n?t._vod:"none"}const Ec=J1({patchProp:yc},dc);let le,i0=!1;function Fc(){return le=i0?le:Os(Ec),i0=!0,le}const Ic=(...t)=>{const n=Fc().createApp(...t),{mount:e}=n;return n.mount=l=>{const a=Uc(l);if(a)return e(a,!0,a instanceof SVGElement)},n};function Uc(t){return L1(t)?document.querySelector(t):t}const qc=JSON.parse('{"base":"/","lang":"en-US","title":"Shipber Open API Docs","description":"The API is a great way to get data directly to and from Shipber, like creating shipments, updating products, and querying order, shipment and customer data.","head":[["link",{"rel":"icon","href":"./images/logo.svg"}]],"locales":{"/en/":{"lang":"English","title":"Shipber Open API Docs"},"/zh/":{"lang":"\u7B80\u4F53\u4E2D\u6587","title":"Shipber \u63A5\u53E3\u6587\u6863","description":"API \u662F\u76F4\u63A5\u4ECE Shipber \u83B7\u53D6\u6570\u636E\u7684\u597D\u65B9\u6CD5\uFF0C\u4F8B\u5982\u521B\u5EFA\u9762\u5355\uFF0C\u66F4\u65B0\u4EA7\u54C1\u4EE5\u53CA\u67E5\u8BE2\u8BA2\u5355\uFF0C\u53D1\u8D27\u548C\u5BA2\u6237\u6570\u636E\u3002"}}}');var Gc=([t,n,e])=>t==="meta"&&n.name?`${t}.${n.name}`:["title","base"].includes(t)?t:t==="template"&&n.id?`${t}.${n.id}`:JSON.stringify([t,n,e]),Oc=t=>{const n=new Set,e=[];return t.forEach(l=>{const a=Gc(l);n.has(a)||(n.add(a),e.push(l))}),e},Nc=t=>/^(https?:)?\/\//.test(t),dKt=t=>/^mailto:/.test(t),pKt=t=>/^tel:/.test(t),ar=t=>Object.prototype.toString.call(t)==="[object Object]",Kc=t=>t.replace(/\/$/,""),Wc=t=>t.replace(/^\//,""),ir=(t,n)=>{const e=Object.keys(t).sort((l,a)=>{const i=a.split("/").length-l.split("/").length;return i!==0?i:a.length-l.length});for(const l of e)if(n.startsWith(l))return l;return"/"};const hr={"v-8daa1a0e":l1(()=>R(()=>import("./index.html.63c7697a.js"),[])),"v-34809e78":l1(()=>R(()=>import("./Address Validation.html.f6826ff7.js"),[])),"v-14ad0361":l1(()=>R(()=>import("./Cancel Label.html.85bc69ac.js"),[])),"v-06136d86":l1(()=>R(()=>import("./Conformation.html.02662447.js"),[])),"v-71f0d9f2":l1(()=>R(()=>import("./Create Shipment from Quote.html.5ce7d824.js"),[])),"v-379b18f6":l1(()=>R(()=>import("./Create Shipment.html.8442c221.js"),[])),"v-f9d4e15a":l1(()=>R(()=>import("./Download Label.html.7581d261.js"),[])),"v-2d0a870d":l1(()=>R(()=>import("./index.html.f7d8cdf7.js"),[])),"v-35861ada":l1(()=>R(()=>import("./My Profile.html.dcbe77ec.js"),[])),"v-400add34":l1(()=>R(()=>import("./PackageType.html.98747cf8.js"),[])),"v-3e1200ca":l1(()=>R(()=>import("./Rate Shopping.html.4aa729d6.js"),[])),"v-290650db":l1(()=>R(()=>import("./Reference.html.09737c0a.js"),[])),"v-4833d356":l1(()=>R(()=>import("./Service_Code.html.235f760a.js"),[])),"v-df74a268":l1(()=>R(()=>import("./Shipping Service.html.017665d5.js"),[])),"v-40e66132":l1(()=>R(()=>import("./Warehouse Address.html.b3ca3570.js"),[])),"v-4efee709":l1(()=>R(()=>import("./Address Validation.html.2d33f388.js"),[])),"v-5be0dd34":l1(()=>R(()=>import("./Cancel Label.html.dab75e82.js"),[])),"v-2b3e9482":l1(()=>R(()=>import("./Conformation.html.30915c4c.js"),[])),"v-367689cc":l1(()=>R(()=>import("./Create Shipment from Quote.html.9d00fa5a.js"),[])),"v-57c12940":l1(()=>R(()=>import("./Create Shipment.html.f64f72ef.js"),[])),"v-720cb018":l1(()=>R(()=>import("./Download Label.html.ada5c7bc.js"),[])),"v-2d0ad528":l1(()=>R(()=>import("./index.html.cad3f5c4.js"),[])),"v-63ce661f":l1(()=>R(()=>import("./My Profile.html.4f76242f.js"),[])),"v-23894981":l1(()=>R(()=>import("./PackageType.html.248fbc94.js"),[])),"v-6fb126d6":l1(()=>R(()=>import("./Q_A.html.373f8c2c.js"),[])),"v-60339b94":l1(()=>R(()=>import("./Rate Shopping.html.b5cbaa83.js"),[])),"v-7d8a53b6":l1(()=>R(()=>import("./Reference.html.00e36958.js"),[])),"v-0a2e619a":l1(()=>R(()=>import("./Service_Code.html.19d8d888.js"),[])),"v-c4109b5e":l1(()=>R(()=>import("./Shipping Service.html.8c55efbd.js"),[])),"v-2d166366":l1(()=>R(()=>import("./Warehouse Address.html.7fb031c5.js"),[])),"v-4cde7c8e":l1(()=>R(()=>import("./list1.html.fe4e241d.js"),[])),"v-4e93552d":l1(()=>R(()=>import("./list2.html.32c00553.js"),[])),"v-50482dcc":l1(()=>R(()=>import("./list3.html.e2a1eda2.js"),[])),"v-51fd066b":l1(()=>R(()=>import("./list4.html.b67aa0a1.js"),[])),"v-53b1df0a":l1(()=>R(()=>import("./list5.html.b3d58561.js"),[])),"v-3706649a":l1(()=>R(()=>import("./404.html.1b9d13d6.js"),[])),"v-01560935":l1(()=>R(()=>import("./index.html.15a9314d.js"),[])),"v-03d52fd3":l1(()=>R(()=>import("./index.html.0afa5a6d.js"),[])),"v-03d52ff2":l1(()=>R(()=>import("./index.html.71fede55.js"),[])),"v-03d53011":l1(()=>R(()=>import("./index.html.6536fa42.js"),[]))},Jc={404:l1(()=>R(()=>import("./404.18e12bcf.js"),["assets/404.18e12bcf.js","assets/index.12502b74.js"])),Categories:l1(()=>R(()=>import("./Categories.e546fdda.js"),["assets/Categories.e546fdda.js","assets/index.12502b74.js","assets/Pagation.d6bc0186.js"])),Layout:l1(()=>R(()=>import("./Layout.ccd4ed4e.js"),["assets/Layout.ccd4ed4e.js","assets/index.12502b74.js","assets/Pagation.d6bc0186.js"])),Post:l1(()=>R(()=>import("./Post.f97d123d.js"),[])),Timeline:l1(()=>R(()=>import("./Timeline.158da2a5.js"),[]))};var dr=Z(io),pr=In({key:"",path:"",title:"",lang:"",frontmatter:{},excerpt:"",headers:[]}),y2=Z(pr),Wn=()=>y2;Zn.webpackHot&&(__VUE_HMR_RUNTIME__.updatePageData=t=>{dr.value[t.key]=()=>Promise.resolve(t),t.key===y2.value.key&&(y2.value=t)});var wr=Symbol(""),Xc=()=>{const t=D1(wr);if(!t)throw new Error("usePageFrontmatter() is called without provider.");return t},ur=Symbol(""),Yc=()=>{const t=D1(ur);if(!t)throw new Error("usePageHead() is called without provider.");return t},Qc=Symbol(""),_r=Symbol(""),vr=()=>{const t=D1(_r);if(!t)throw new Error("usePageLang() is called without provider.");return t},d3=Symbol(""),xr=()=>{const t=D1(d3);if(!t)throw new Error("useRouteLocale() is called without provider.");return t},F2=Z(qc),gr=()=>F2;Zn.webpackHot&&(__VUE_HMR_RUNTIME__.updateSiteData=t=>{F2.value=t});var mr=Symbol(""),wKt=()=>{const t=D1(mr);if(!t)throw new Error("useSiteLocaleData() is called without provider.");return t},Zc=Symbol(""),Y2=ot({resolvePageData:async t=>{const n=dr.value[t],e=await(n==null?void 0:n());return e!=null?e:pr},resolvePageFrontmatter:t=>t.frontmatter,resolvePageHead:(t,n,e)=>{const l=L1(n.description)?n.description:e.description,a=[...t1(n.head)?n.head:[],...e.head,["title",{},t],["meta",{name:"description",content:l}]];return Oc(a)},resolvePageHeadTitle:(t,n)=>`${t.title?`${t.title} | `:""}${n.title}`,resolvePageLang:t=>t.lang||"en",resolveRouteLocale:(t,n)=>ir(t,n),resolveSiteLocaleData:(t,n)=>E1(E1({},t),t.locales[n])}),t6=c({name:"ClientOnly",setup(t,n){const e=Z(!1);return Z1(()=>{e.value=!0}),()=>{var l,a;return e.value?(a=(l=n.slots).default)==null?void 0:a.call(l):null}}}),n6=c({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(t){const n=Wn(),e=r1(()=>hr[t.pageKey||n.value.key]);return()=>e.value?O(e.value):O("div","404 Not Found")}}),h0=c({name:"Vuepress",setup(){const t=Wn(),n=r1(()=>{let e;if(t.value.path){const l=t.value.frontmatter.layout;L1(l)?e=l:e="Layout"}else e="404";return Jc[e]||U1(e,!1)});return()=>O(n.value)}}),kr=t=>Nc(t)?t:`${gr().value.base}${Wc(t)}`,x2=t=>t;const e6=JSON.parse('{"layouts":{},"style":"@vuepress-reco/style-default","logo":"/images/logo.svg","author":"Adber","docsRepo":"https://github.com/vuepress-reco/vuepress-theme-reco-next","docsBranch":"main","docsDir":"example","colorMode":"light","lastUpdatedText":"","series":{"/zh/":[{"text":"\u4ECB\u7ECD","children":["/zh/"]},{"text":"\u4E2A\u4EBA\u4FE1\u606F","children":["Shipping Service","Warehouse Address","My Profile"]},{"text":"\u5730\u5740\u76F8\u5173","children":["Address Validation"]},{"text":"\u8FD0\u5355\u76F8\u5173","children":["Rate Shopping","Create Shipment","Create Shipment from Quote","Cancel Label","Download Label"]},{"text":"\u5E38\u89C1\u95EE\u9898","children":["Q&A"]}],"/en/":[{"text":"Overview","children":["/en/"]},{"text":"Personal Information","children":["Shipping Service","Warehouse Address","My Profile"]},{"text":"Address","children":["Address Validation"]},{"text":"Shipment","children":["Rate Shopping","Create Shipment","Create Shipment from Quote","Cancel Label","Download Label"]}]},"navbar":[{"text":"Home","link":"/"},{"text":"Docs","link":"/en/"}]}'),fr=Z(e6),r6=()=>fr;Zn.webpackHot&&(__VUE_HMR_RUNTIME__.updateThemeData=t=>{fr.value=t});const $r=Symbol(""),Jn=()=>{const t=D1($r);if(!t)throw new Error("useThemeLocaleData() is called without provider.");return t},o6=(t,n)=>{var e;return E1(E1({},t),(e=t.locales)==null?void 0:e[n])};function s6(){const t=Jn(),n=r1(()=>{var i;return(i=t==null?void 0:t.value)===null||i===void 0?void 0:i.bulletin}),e=Z(!1),l="__CLOSE_BULLETIN_POPOVER__";return Z1(()=>{var i;const d=sessionStorage.getItem(l);e.value=d!=="true"&&!!(!((i=n==null?void 0:n.value)===null||i===void 0)&&i.body)}),{visible:e,bulletin:n,closeBulletinPopover:()=>{e.value=!1,sessionStorage.setItem(l,"true")}}}const c6={handleImage(t){return`<img style="${t.style||""}" src="${t.src}" />`},handleText(t){return`<div style="${t.style||""}">${t.content}</div>`},handleTitle(t){return`<h5 style="${t.style||""}">${t.content}</h5>`},handleButton(t){return`<a style="${t.style||""}" class="btn" href="${t.link}">${t.text}</a>`},handleButtongroup(t){return`<div class="btn-group">${(t.children||[]).reduce((e,l)=>e+=`<a style="${l.style||t.style||""}" class="btn" href="${l.link}">${l.text}</a>`,"")}</div>`},handleHr(t){return"<hr />"}};function l6(){const t=Jn();function n(l){if(Array.isArray(l))return l.map(a=>n(a));{let a=l.type;return a=a.slice(0,1).toUpperCase()+a.slice(1),c6[`handle${a}`](l)}}return{bodyNodes:r1(()=>{var l,a;return n((a=(l=t==null?void 0:t.value)===null||l===void 0?void 0:l.bulletin)===null||a===void 0?void 0:a.body).join("")}),handleNode:n}}var Ct=(t,n)=>{const e=t.__vccOpts||t;for(const[l,a]of n)e[l]=a;return e};const a6={class:"bulletin-title"},i6=r("svg",{t:"1573745677073",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4448",width:"22",height:"22"},[r("path",{d:"M512 34.133333a486.4 486.4 0 1 0 486.4 486.4A486.4 486.4 0 0 0 512 34.133333z m209.4848 632.8064l-55.6032 55.466667-151.517867-151.125333-151.517866 151.1168-55.6032-55.466667 151.517866-151.108267L307.242667 364.714667l55.6032-55.466667 151.517866 151.125333 151.517867-151.1168 55.6032 55.466667-151.517867 151.099733z m0 0","p-id":"4449"})],-1),h6=[i6],d6=["innerHTML"],p6=c({__name:"Bulletin",setup(t){const{visible:n,bulletin:e,closeBulletinPopover:l}=s6(),{bodyNodes:a}=l6();return(i,d)=>{var w,u;const p=U1("Xicons");return N1(n)?(o(),s("div",{key:0,class:"bulletin-wrapper",style:f2({width:((w=N1(e))==null?void 0:w.width)||"300px"})},[r("div",a6,[m1(p,{icon:"Bulb","icon-size":"28","icon-color":"#fff",text:((u=N1(e))==null?void 0:u.title)||"\u516C\u544A","text-color":"#fff","text-size":"16"},null,8,["text"]),r("i",{class:"btn-close",onClick:d[0]||(d[0]=(..._)=>N1(l)&&N1(l)(..._))},h6)]),r("div",{class:"bulletin-content",innerHTML:N1(a)},null,8,d6)],4)):g1("",!0)}}});var w6=Ct(p6,[["__file","Bulletin.vue"]]),u6=x2({rootComponents:[w6]});function _6(){const t=Jn(),n=r1(()=>{var l;switch((l=t.value.commentConfig)===null||l===void 0?void 0:l.type){case"valine":return"valine";case"waline":return"waline";default:return""}}),e=r1(()=>{var l,a;return((a=(l=t.value)===null||l===void 0?void 0:l.commentConfig)===null||a===void 0?void 0:a.options)||{}});return{solution:n,options:e}}/*!
  * vue-router v4.1.1
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const it=typeof window!="undefined";function v6(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const j1=Object.assign;function ae(t,n){const e={};for(const l in n){const a=n[l];e[l]=v2(a)?a.map(t):t(a)}return e}const It=()=>{},v2=Array.isArray,x6=/\/$/,g6=t=>t.replace(x6,"");function ie(t,n,e="/"){let l,a={},i="",d="";const p=n.indexOf("#");let w=n.indexOf("?");return p<w&&p>=0&&(w=-1),w>-1&&(l=n.slice(0,w),i=n.slice(w+1,p>-1?p:n.length),a=t(i)),p>-1&&(l=l||n.slice(0,p),d=n.slice(p,n.length)),l=$6(l!=null?l:n,e),{fullPath:l+(i&&"?")+i+d,path:l,query:a,hash:d}}function m6(t,n){const e=n.query?t(n.query):"";return n.path+(e&&"?")+e+(n.hash||"")}function d0(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function k6(t,n,e){const l=n.matched.length-1,a=e.matched.length-1;return l>-1&&l===a&&xt(n.matched[l],e.matched[a])&&Mr(n.params,e.params)&&t(n.query)===t(e.query)&&n.hash===e.hash}function xt(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function Mr(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const e in t)if(!f6(t[e],n[e]))return!1;return!0}function f6(t,n){return v2(t)?p0(t,n):v2(n)?p0(n,t):t===n}function p0(t,n){return v2(n)?t.length===n.length&&t.every((e,l)=>e===n[l]):t.length===1&&t[0]===n}function $6(t,n){if(t.startsWith("/"))return t;if(!t)return n;const e=n.split("/"),l=t.split("/");let a=e.length-1,i,d;for(i=0;i<l.length;i++)if(d=l[i],d!==".")if(d==="..")a>1&&a--;else break;return e.slice(0,a).join("/")+"/"+l.slice(i-(i===l.length?1:0)).join("/")}var Zt;(function(t){t.pop="pop",t.push="push"})(Zt||(Zt={}));var Ut;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ut||(Ut={}));function M6(t){if(!t)if(it){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),g6(t)}const C6=/^[^#]+#/;function z6(t,n){return t.replace(C6,"#")+n}function y6(t,n){const e=document.documentElement.getBoundingClientRect(),l=t.getBoundingClientRect();return{behavior:n.behavior,left:l.left-e.left-(n.left||0),top:l.top-e.top-(n.top||0)}}const Xn=()=>({left:window.pageXOffset,top:window.pageYOffset});function b6(t){let n;if("el"in t){const e=t.el,l=typeof e=="string"&&e.startsWith("#"),a=typeof e=="string"?l?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!a)return;n=y6(a,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function w0(t,n){return(history.state?history.state.position-n:-1)+t}const Ee=new Map;function B6(t,n){Ee.set(t,n)}function L6(t){const n=Ee.get(t);return Ee.delete(t),n}let H6=()=>location.protocol+"//"+location.host;function Cr(t,n){const{pathname:e,search:l,hash:a}=n,i=t.indexOf("#");if(i>-1){let p=a.includes(t.slice(i))?t.slice(i).length:1,w=a.slice(p);return w[0]!=="/"&&(w="/"+w),d0(w,"")}return d0(e,t)+l+a}function V6(t,n,e,l){let a=[],i=[],d=null;const p=({state:v})=>{const x=Cr(t,location),k=e.value,C=n.value;let y=0;if(v){if(e.value=x,n.value=v,d&&d===k){d=null;return}y=C?v.position-C.position:0}else l(x);a.forEach(f=>{f(e.value,k,{delta:y,type:Zt.pop,direction:y?y>0?Ut.forward:Ut.back:Ut.unknown})})};function w(){d=e.value}function u(v){a.push(v);const x=()=>{const k=a.indexOf(v);k>-1&&a.splice(k,1)};return i.push(x),x}function _(){const{history:v}=window;!v.state||v.replaceState(j1({},v.state,{scroll:Xn()}),"")}function g(){for(const v of i)v();i=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",_)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",_),{pauseListeners:w,listen:u,destroy:g}}function u0(t,n,e,l=!1,a=!1){return{back:t,current:n,forward:e,replaced:l,position:window.history.length,scroll:a?Xn():null}}function S6(t){const{history:n,location:e}=window,l={value:Cr(t,e)},a={value:n.state};a.value||i(l.value,{back:null,current:l.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function i(w,u,_){const g=t.indexOf("#"),v=g>-1?(e.host&&document.querySelector("base")?t:t.slice(g))+w:H6()+t+w;try{n[_?"replaceState":"pushState"](u,"",v),a.value=u}catch(x){console.error(x),e[_?"replace":"assign"](v)}}function d(w,u){const _=j1({},n.state,u0(a.value.back,w,a.value.forward,!0),u,{position:a.value.position});i(w,_,!0),l.value=w}function p(w,u){const _=j1({},a.value,n.state,{forward:w,scroll:Xn()});i(_.current,_,!0);const g=j1({},u0(l.value,w,null),{position:_.position+1},u);i(w,g,!1),l.value=w}return{location:l,state:a,push:p,replace:d}}function A6(t){t=M6(t);const n=S6(t),e=V6(t,n.state,n.location,n.replace);function l(i,d=!0){d||e.pauseListeners(),history.go(i)}const a=j1({location:"",base:t,go:l,createHref:z6.bind(null,t)},n,e);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>n.state.value}),a}function j6(t){return typeof t=="string"||t&&typeof t=="object"}function zr(t){return typeof t=="string"||typeof t=="symbol"}const M2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},yr=Symbol("");var _0;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(_0||(_0={}));function gt(t,n){return j1(new Error,{type:t,[yr]:!0},n)}function P2(t,n){return t instanceof Error&&yr in t&&(n==null||!!(t.type&n))}const v0="[^/]+?",R6={sensitive:!1,strict:!1,start:!0,end:!0},P6=/[.+*?^${}()[\]/\\]/g;function T6(t,n){const e=j1({},R6,n),l=[];let a=e.start?"^":"";const i=[];for(const u of t){const _=u.length?[]:[90];e.strict&&!u.length&&(a+="/");for(let g=0;g<u.length;g++){const v=u[g];let x=40+(e.sensitive?.25:0);if(v.type===0)g||(a+="/"),a+=v.value.replace(P6,"\\$&"),x+=40;else if(v.type===1){const{value:k,repeatable:C,optional:y,regexp:f}=v;i.push({name:k,repeatable:C,optional:y});const M=f||v0;if(M!==v0){x+=10;try{new RegExp(`(${M})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${k}" (${M}): `+b.message)}}let L=C?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;g||(L=y&&u.length<2?`(?:/${L})`:"/"+L),y&&(L+="?"),a+=L,x+=20,y&&(x+=-8),C&&(x+=-20),M===".*"&&(x+=-50)}_.push(x)}l.push(_)}if(e.strict&&e.end){const u=l.length-1;l[u][l[u].length-1]+=.7000000000000001}e.strict||(a+="/?"),e.end?a+="$":e.strict&&(a+="(?:/|$)");const d=new RegExp(a,e.sensitive?"":"i");function p(u){const _=u.match(d),g={};if(!_)return null;for(let v=1;v<_.length;v++){const x=_[v]||"",k=i[v-1];g[k.name]=x&&k.repeatable?x.split("/"):x}return g}function w(u){let _="",g=!1;for(const v of t){(!g||!_.endsWith("/"))&&(_+="/"),g=!1;for(const x of v)if(x.type===0)_+=x.value;else if(x.type===1){const{value:k,repeatable:C,optional:y}=x,f=k in u?u[k]:"";if(v2(f)&&!C)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const M=v2(f)?f.join("/"):f;if(!M)if(y)v.length<2&&t.length>1&&(_.endsWith("/")?_=_.slice(0,-1):g=!0);else throw new Error(`Missing required param "${k}"`);_+=M}}return _}return{re:d,score:l,keys:i,parse:p,stringify:w}}function D6(t,n){let e=0;for(;e<t.length&&e<n.length;){const l=n[e]-t[e];if(l)return l;e++}return t.length<n.length?t.length===1&&t[0]===40+40?-1:1:t.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function E6(t,n){let e=0;const l=t.score,a=n.score;for(;e<l.length&&e<a.length;){const i=D6(l[e],a[e]);if(i)return i;e++}if(Math.abs(a.length-l.length)===1){if(x0(l))return 1;if(x0(a))return-1}return a.length-l.length}function x0(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const F6={type:0,value:""},I6=/[a-zA-Z0-9_]/;function U6(t){if(!t)return[[]];if(t==="/")return[[F6]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function n(x){throw new Error(`ERR (${e})/"${u}": ${x}`)}let e=0,l=e;const a=[];let i;function d(){i&&a.push(i),i=[]}let p=0,w,u="",_="";function g(){!u||(e===0?i.push({type:0,value:u}):e===1||e===2||e===3?(i.length>1&&(w==="*"||w==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:_,repeatable:w==="*"||w==="+",optional:w==="*"||w==="?"})):n("Invalid state to consume buffer"),u="")}function v(){u+=w}for(;p<t.length;){if(w=t[p++],w==="\\"&&e!==2){l=e,e=4;continue}switch(e){case 0:w==="/"?(u&&g(),d()):w===":"?(g(),e=1):v();break;case 4:v(),e=l;break;case 1:w==="("?e=2:I6.test(w)?v():(g(),e=0,w!=="*"&&w!=="?"&&w!=="+"&&p--);break;case 2:w===")"?_[_.length-1]=="\\"?_=_.slice(0,-1)+w:e=3:_+=w;break;case 3:g(),e=0,w!=="*"&&w!=="?"&&w!=="+"&&p--,_="";break;default:n("Unknown state");break}}return e===2&&n(`Unfinished custom RegExp for param "${u}"`),g(),d(),a}function q6(t,n,e){const l=T6(U6(t.path),e),a=j1(l,{record:t,parent:n,children:[],alias:[]});return n&&!a.record.aliasOf==!n.record.aliasOf&&n.children.push(a),a}function G6(t,n){const e=[],l=new Map;n=m0({strict:!1,end:!0,sensitive:!1},n);function a(_){return l.get(_)}function i(_,g,v){const x=!v,k=N6(_);k.aliasOf=v&&v.record;const C=m0(n,_),y=[k];if("alias"in _){const L=typeof _.alias=="string"?[_.alias]:_.alias;for(const b of L)y.push(j1({},k,{components:v?v.record.components:k.components,path:b,aliasOf:v?v.record:k}))}let f,M;for(const L of y){const{path:b}=L;if(g&&b[0]!=="/"){const A=g.record.path,U=A[A.length-1]==="/"?"":"/";L.path=g.record.path+(b&&U+b)}if(f=q6(L,g,C),v?v.alias.push(f):(M=M||f,M!==f&&M.alias.push(f),x&&_.name&&!g0(f)&&d(_.name)),k.children){const A=k.children;for(let U=0;U<A.length;U++)i(A[U],f,v&&v.children[U])}v=v||f,w(f)}return M?()=>{d(M)}:It}function d(_){if(zr(_)){const g=l.get(_);g&&(l.delete(_),e.splice(e.indexOf(g),1),g.children.forEach(d),g.alias.forEach(d))}else{const g=e.indexOf(_);g>-1&&(e.splice(g,1),_.record.name&&l.delete(_.record.name),_.children.forEach(d),_.alias.forEach(d))}}function p(){return e}function w(_){let g=0;for(;g<e.length&&E6(_,e[g])>=0&&(_.record.path!==e[g].record.path||!br(_,e[g]));)g++;e.splice(g,0,_),_.record.name&&!g0(_)&&l.set(_.record.name,_)}function u(_,g){let v,x={},k,C;if("name"in _&&_.name){if(v=l.get(_.name),!v)throw gt(1,{location:_});C=v.record.name,x=j1(O6(g.params,v.keys.filter(M=>!M.optional).map(M=>M.name)),_.params),k=v.stringify(x)}else if("path"in _)k=_.path,v=e.find(M=>M.re.test(k)),v&&(x=v.parse(k),C=v.record.name);else{if(v=g.name?l.get(g.name):e.find(M=>M.re.test(g.path)),!v)throw gt(1,{location:_,currentLocation:g});C=v.record.name,x=j1({},g.params,_.params),k=v.stringify(x)}const y=[];let f=v;for(;f;)y.unshift(f.record),f=f.parent;return{name:C,path:k,params:x,matched:y,meta:W6(y)}}return t.forEach(_=>i(_)),{addRoute:i,resolve:u,removeRoute:d,getRoutes:p,getRecordMatcher:a}}function O6(t,n){const e={};for(const l of n)l in t&&(e[l]=t[l]);return e}function N6(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:K6(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function K6(t){const n={},e=t.props||!1;if("component"in t)n.default=e;else for(const l in t.components)n[l]=typeof e=="boolean"?e:e[l];return n}function g0(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function W6(t){return t.reduce((n,e)=>j1(n,e.meta),{})}function m0(t,n){const e={};for(const l in t)e[l]=l in n?n[l]:t[l];return e}function br(t,n){return n.children.some(e=>e===t||br(t,e))}const Br=/#/g,J6=/&/g,X6=/\//g,Y6=/=/g,Q6=/\?/g,Lr=/\+/g,Z6=/%5B/g,tl=/%5D/g,Hr=/%5E/g,nl=/%60/g,Vr=/%7B/g,el=/%7C/g,Sr=/%7D/g,rl=/%20/g;function p3(t){return encodeURI(""+t).replace(el,"|").replace(Z6,"[").replace(tl,"]")}function ol(t){return p3(t).replace(Vr,"{").replace(Sr,"}").replace(Hr,"^")}function Fe(t){return p3(t).replace(Lr,"%2B").replace(rl,"+").replace(Br,"%23").replace(J6,"%26").replace(nl,"`").replace(Vr,"{").replace(Sr,"}").replace(Hr,"^")}function sl(t){return Fe(t).replace(Y6,"%3D")}function cl(t){return p3(t).replace(Br,"%23").replace(Q6,"%3F")}function ll(t){return t==null?"":cl(t).replace(X6,"%2F")}function Rn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function al(t){const n={};if(t===""||t==="?")return n;const l=(t[0]==="?"?t.slice(1):t).split("&");for(let a=0;a<l.length;++a){const i=l[a].replace(Lr," "),d=i.indexOf("="),p=Rn(d<0?i:i.slice(0,d)),w=d<0?null:Rn(i.slice(d+1));if(p in n){let u=n[p];v2(u)||(u=n[p]=[u]),u.push(w)}else n[p]=w}return n}function k0(t){let n="";for(let e in t){const l=t[e];if(e=sl(e),l==null){l!==void 0&&(n+=(n.length?"&":"")+e);continue}(v2(l)?l.map(i=>i&&Fe(i)):[l&&Fe(l)]).forEach(i=>{i!==void 0&&(n+=(n.length?"&":"")+e,i!=null&&(n+="="+i))})}return n}function il(t){const n={};for(const e in t){const l=t[e];l!==void 0&&(n[e]=v2(l)?l.map(a=>a==null?null:""+a):l==null?l:""+l)}return n}const hl=Symbol(""),f0=Symbol(""),Yn=Symbol(""),w3=Symbol(""),Ie=Symbol("");function Vt(){let t=[];function n(l){return t.push(l),()=>{const a=t.indexOf(l);a>-1&&t.splice(a,1)}}function e(){t=[]}return{add:n,list:()=>t,reset:e}}function E2(t,n,e,l,a){const i=l&&(l.enterCallbacks[a]=l.enterCallbacks[a]||[]);return()=>new Promise((d,p)=>{const w=g=>{g===!1?p(gt(4,{from:e,to:n})):g instanceof Error?p(g):j6(g)?p(gt(2,{from:n,to:g})):(i&&l.enterCallbacks[a]===i&&typeof g=="function"&&i.push(g),d())},u=t.call(l&&l.instances[a],n,e,w);let _=Promise.resolve(u);t.length<3&&(_=_.then(w)),_.catch(g=>p(g))})}function he(t,n,e,l){const a=[];for(const i of t)for(const d in i.components){let p=i.components[d];if(!(n!=="beforeRouteEnter"&&!i.instances[d]))if(dl(p)){const u=(p.__vccOpts||p)[n];u&&a.push(E2(u,e,l,i,d))}else{let w=p();a.push(()=>w.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${i.path}"`));const _=v6(u)?u.default:u;i.components[d]=_;const v=(_.__vccOpts||_)[n];return v&&E2(v,e,l,i,d)()}))}}return a}function dl(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $0(t){const n=D1(Yn),e=D1(w3),l=r1(()=>n.resolve(N1(t.to))),a=r1(()=>{const{matched:w}=l.value,{length:u}=w,_=w[u-1],g=e.matched;if(!_||!g.length)return-1;const v=g.findIndex(xt.bind(null,_));if(v>-1)return v;const x=M0(w[u-2]);return u>1&&M0(_)===x&&g[g.length-1].path!==x?g.findIndex(xt.bind(null,w[u-2])):v}),i=r1(()=>a.value>-1&&_l(e.params,l.value.params)),d=r1(()=>a.value>-1&&a.value===e.matched.length-1&&Mr(e.params,l.value.params));function p(w={}){return ul(w)?n[N1(t.replace)?"replace":"push"](N1(t.to)).catch(It):Promise.resolve()}return{route:l,href:r1(()=>l.value.href),isActive:i,isExactActive:d,navigate:p}}const pl=c({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$0,setup(t,{slots:n}){const e=ot($0(t)),{options:l}=D1(Yn),a=r1(()=>({[C0(t.activeClass,l.linkActiveClass,"router-link-active")]:e.isActive,[C0(t.exactActiveClass,l.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const i=n.default&&n.default(e);return t.custom?i:O("a",{"aria-current":e.isExactActive?t.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:a.value},i)}}}),wl=pl;function ul(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function _l(t,n){for(const e in n){const l=n[e],a=t[e];if(typeof l=="string"){if(l!==a)return!1}else if(!v2(a)||a.length!==l.length||l.some((i,d)=>i!==a[d]))return!1}return!0}function M0(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const C0=(t,n,e)=>t!=null?t:n!=null?n:e,vl=c({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:e}){const l=D1(Ie),a=r1(()=>t.route||l.value),i=D1(f0,0),d=r1(()=>{let u=N1(i);const{matched:_}=a.value;let g;for(;(g=_[u])&&!g.components;)u++;return u}),p=r1(()=>a.value.matched[d.value]);w2(f0,r1(()=>d.value+1)),w2(hl,p),w2(Ie,a);const w=Z();return W1(()=>[w.value,p.value,t.name],([u,_,g],[v,x,k])=>{_&&(_.instances[g]=u,x&&x!==_&&u&&u===v&&(_.leaveGuards.size||(_.leaveGuards=x.leaveGuards),_.updateGuards.size||(_.updateGuards=x.updateGuards))),u&&_&&(!x||!xt(_,x)||!v)&&(_.enterCallbacks[g]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=a.value,_=p.value,g=_&&_.components[t.name],v=t.name;if(!g)return z0(e.default,{Component:g,route:u});const x=_.props[t.name],k=x?x===!0?u.params:typeof x=="function"?x(u):x:null,y=O(g,j1({},k,n,{onVnodeUnmounted:f=>{f.component.isUnmounted&&(_.instances[v]=null)},ref:w}));return z0(e.default,{Component:y,route:u})||y}}});function z0(t,n){if(!t)return null;const e=t(n);return e.length===1?e[0]:e}const Ar=vl;function xl(t){const n=G6(t.routes,t),e=t.parseQuery||al,l=t.stringifyQuery||k0,a=t.history,i=Vt(),d=Vt(),p=Vt(),w=b4(M2);let u=M2;it&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=ae.bind(null,B=>""+B),g=ae.bind(null,ll),v=ae.bind(null,Rn);function x(B,F){let j,W;return zr(B)?(j=n.getRecordMatcher(B),W=F):W=B,n.addRoute(W,j)}function k(B){const F=n.getRecordMatcher(B);F&&n.removeRoute(F)}function C(){return n.getRoutes().map(B=>B.record)}function y(B){return!!n.getRecordMatcher(B)}function f(B,F){if(F=j1({},F||w.value),typeof B=="string"){const p1=ie(e,B,F.path),m=n.resolve({path:p1.path},F),$=a.createHref(p1.fullPath);return j1(p1,m,{params:v(m.params),hash:Rn(p1.hash),redirectedFrom:void 0,href:$})}let j;if("path"in B)j=j1({},B,{path:ie(e,B.path,F.path).path});else{const p1=j1({},B.params);for(const m in p1)p1[m]==null&&delete p1[m];j=j1({},B,{params:g(B.params)}),F.params=g(F.params)}const W=n.resolve(j,F),M1=B.hash||"";W.params=_(v(W.params));const x1=m6(l,j1({},B,{hash:ol(M1),path:W.path})),w1=a.createHref(x1);return j1({fullPath:x1,hash:M1,query:l===k0?il(B.query):B.query||{}},W,{redirectedFrom:void 0,href:w1})}function M(B){return typeof B=="string"?ie(e,B,w.value.path):j1({},B)}function L(B,F){if(u!==B)return gt(8,{from:F,to:B})}function b(B){return X(B)}function A(B){return b(j1(M(B),{replace:!0}))}function U(B){const F=B.matched[B.matched.length-1];if(F&&F.redirect){const{redirect:j}=F;let W=typeof j=="function"?j(B):j;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=M(W):{path:W},W.params={}),j1({query:B.query,hash:B.hash,params:"path"in W?{}:B.params},W)}}function X(B,F){const j=u=f(B),W=w.value,M1=B.state,x1=B.force,w1=B.replace===!0,p1=U(j);if(p1)return X(j1(M(p1),{state:M1,force:x1,replace:w1}),F||j);const m=j;m.redirectedFrom=F;let $;return!x1&&k6(l,W,j)&&($=gt(16,{to:m,from:W}),s1(W,W,!0,!1)),($?Promise.resolve($):J(m,W)).catch(z=>P2(z)?P2(z,2)?z:G(z):y1(z,m,W)).then(z=>{if(z){if(P2(z,2))return X(j1(M(z.to),{state:M1,force:x1,replace:w1}),F||m)}else z=h1(m,W,!0,w1,M1);return Q(m,W,z),z})}function T(B,F){const j=L(B,F);return j?Promise.reject(j):Promise.resolve()}function J(B,F){let j;const[W,M1,x1]=gl(B,F);j=he(W.reverse(),"beforeRouteLeave",B,F);for(const p1 of W)p1.leaveGuards.forEach(m=>{j.push(E2(m,B,F))});const w1=T.bind(null,B,F);return j.push(w1),ct(j).then(()=>{j=[];for(const p1 of i.list())j.push(E2(p1,B,F));return j.push(w1),ct(j)}).then(()=>{j=he(M1,"beforeRouteUpdate",B,F);for(const p1 of M1)p1.updateGuards.forEach(m=>{j.push(E2(m,B,F))});return j.push(w1),ct(j)}).then(()=>{j=[];for(const p1 of B.matched)if(p1.beforeEnter&&!F.matched.includes(p1))if(v2(p1.beforeEnter))for(const m of p1.beforeEnter)j.push(E2(m,B,F));else j.push(E2(p1.beforeEnter,B,F));return j.push(w1),ct(j)}).then(()=>(B.matched.forEach(p1=>p1.enterCallbacks={}),j=he(x1,"beforeRouteEnter",B,F),j.push(w1),ct(j))).then(()=>{j=[];for(const p1 of d.list())j.push(E2(p1,B,F));return j.push(w1),ct(j)}).catch(p1=>P2(p1,8)?p1:Promise.reject(p1))}function Q(B,F,j){for(const W of p.list())W(B,F,j)}function h1(B,F,j,W,M1){const x1=L(B,F);if(x1)return x1;const w1=F===M2,p1=it?history.state:{};j&&(W||w1?a.replace(B.fullPath,j1({scroll:w1&&p1&&p1.scroll},M1)):a.push(B.fullPath,M1)),w.value=B,s1(B,F,j,w1),G()}let E;function d1(){E||(E=a.listen((B,F,j)=>{if(!_1.listening)return;const W=f(B),M1=U(W);if(M1){X(j1(M1,{replace:!0}),W).catch(It);return}u=W;const x1=w.value;it&&B6(w0(x1.fullPath,j.delta),Xn()),J(W,x1).catch(w1=>P2(w1,12)?w1:P2(w1,2)?(X(w1.to,W).then(p1=>{P2(p1,20)&&!j.delta&&j.type===Zt.pop&&a.go(-1,!1)}).catch(It),Promise.reject()):(j.delta&&a.go(-j.delta,!1),y1(w1,W,x1))).then(w1=>{w1=w1||h1(W,x1,!1),w1&&(j.delta?a.go(-j.delta,!1):j.type===Zt.pop&&P2(w1,20)&&a.go(-1,!1)),Q(W,x1,w1)}).catch(It)}))}let K=Vt(),I1=Vt(),v1;function y1(B,F,j){G(B);const W=I1.list();return W.length?W.forEach(M1=>M1(B,F,j)):console.error(B),Promise.reject(B)}function b1(){return v1&&w.value!==M2?Promise.resolve():new Promise((B,F)=>{K.add([B,F])})}function G(B){return v1||(v1=!B,d1(),K.list().forEach(([F,j])=>B?j(B):F()),K.reset()),B}function s1(B,F,j,W){const{scrollBehavior:M1}=t;if(!it||!M1)return Promise.resolve();const x1=!j&&L6(w0(B.fullPath,0))||(W||!j)&&history.state&&history.state.scroll||null;return o3().then(()=>M1(B,F,x1)).then(w1=>w1&&b6(w1)).catch(w1=>y1(w1,B,F))}const a1=B=>a.go(B);let H1;const C1=new Set,_1={currentRoute:w,listening:!0,addRoute:x,removeRoute:k,hasRoute:y,getRoutes:C,resolve:f,options:t,push:b,replace:A,go:a1,back:()=>a1(-1),forward:()=>a1(1),beforeEach:i.add,beforeResolve:d.add,afterEach:p.add,onError:I1.add,isReady:b1,install(B){const F=this;B.component("RouterLink",wl),B.component("RouterView",Ar),B.config.globalProperties.$router=F,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>N1(w)}),it&&!H1&&w.value===M2&&(H1=!0,b(a.location).catch(M1=>{}));const j={};for(const M1 in M2)j[M1]=r1(()=>w.value[M1]);B.provide(Yn,F),B.provide(w3,ot(j)),B.provide(Ie,w);const W=B.unmount;C1.add(B),B.unmount=function(){C1.delete(B),C1.size<1&&(u=M2,E&&E(),E=null,w.value=M2,H1=!1,v1=!1),W()}}};return _1}function ct(t){return t.reduce((n,e)=>n.then(()=>e()),Promise.resolve())}function gl(t,n){const e=[],l=[],a=[],i=Math.max(n.matched.length,t.matched.length);for(let d=0;d<i;d++){const p=n.matched[d];p&&(t.matched.find(u=>xt(u,p))?l.push(p):e.push(p));const w=t.matched[d];w&&(n.matched.find(u=>xt(u,w))||a.push(w))}return[e,l,a]}function zt(){return D1(Yn)}function ln(){return D1(w3)}var y0=c({name:"Valine",props:{options:{type:Object,default(){return{}}}},setup(t){const n=zt(),{options:e}=Mt(t);let l=null;Z1(async()=>{const{Valine:a}=await R(()=>import("./reco-valine.88224ab5.js"),[]),i=async()=>{if(l)return;const d=E1({el:"#valine",placeholder:"just go go",notify:!1,verify:!1,avatar:"retro",visitor:!0,recordIP:!1,path:window.location.pathname},e.value);l=new a(d)};i(),W1(()=>n.currentRoute.value.path,d=>{i()},{immediate:!0,deep:!0})})},render(){return O("div",{class:"reco-valine-wrapper"},O("div",{id:"valine"}))}}),J2,kn,qt=typeof Map=="function"?new Map:(J2=[],kn=[],{has:function(t){return J2.indexOf(t)>-1},get:function(t){return kn[J2.indexOf(t)]},set:function(t,n){J2.indexOf(t)===-1&&(J2.push(t),kn.push(n))},delete:function(t){var n=J2.indexOf(t);n>-1&&(J2.splice(n,1),kn.splice(n,1))}}),jr=function(t){return new Event(t,{bubbles:!0})};try{new Event("test")}catch{jr=function(n){var e=document.createEvent("Event");return e.initEvent(n,!0,!1),e}}function ml(t){var n=qt.get(t);n&&n.destroy()}function kl(t){var n=qt.get(t);n&&n.update()}var Rt=null;typeof window=="undefined"||typeof window.getComputedStyle!="function"?((Rt=function(t){return t}).destroy=function(t){return t},Rt.update=function(t){return t}):((Rt=function(t,n){return t&&Array.prototype.forEach.call(t.length?t:[t],function(e){return function(l){if(l&&l.nodeName&&l.nodeName==="TEXTAREA"&&!qt.has(l)){var a,i=null,d=null,p=null,w=function(){l.clientWidth!==d&&v()},u=function(x){window.removeEventListener("resize",w,!1),l.removeEventListener("input",v,!1),l.removeEventListener("keyup",v,!1),l.removeEventListener("autosize:destroy",u,!1),l.removeEventListener("autosize:update",v,!1),Object.keys(x).forEach(function(k){l.style[k]=x[k]}),qt.delete(l)}.bind(l,{height:l.style.height,resize:l.style.resize,overflowY:l.style.overflowY,overflowX:l.style.overflowX,wordWrap:l.style.wordWrap});l.addEventListener("autosize:destroy",u,!1),"onpropertychange"in l&&"oninput"in l&&l.addEventListener("keyup",v,!1),window.addEventListener("resize",w,!1),l.addEventListener("input",v,!1),l.addEventListener("autosize:update",v,!1),l.style.overflowX="hidden",l.style.wordWrap="break-word",qt.set(l,{destroy:u,update:v}),(a=window.getComputedStyle(l,null)).resize==="vertical"?l.style.resize="none":a.resize==="both"&&(l.style.resize="horizontal"),i=a.boxSizing==="content-box"?-(parseFloat(a.paddingTop)+parseFloat(a.paddingBottom)):parseFloat(a.borderTopWidth)+parseFloat(a.borderBottomWidth),isNaN(i)&&(i=0),v()}function _(x){var k=l.style.width;l.style.width="0px",l.style.width=k,l.style.overflowY=x}function g(){if(l.scrollHeight!==0){var x=function(C){for(var y=[];C&&C.parentNode&&C.parentNode instanceof Element;)C.parentNode.scrollTop&&y.push({node:C.parentNode,scrollTop:C.parentNode.scrollTop}),C=C.parentNode;return y}(l),k=document.documentElement&&document.documentElement.scrollTop;l.style.height="",l.style.height=l.scrollHeight+i+"px",d=l.clientWidth,x.forEach(function(C){C.node.scrollTop=C.scrollTop}),k&&(document.documentElement.scrollTop=k)}}function v(){g();var x=Math.round(parseFloat(l.style.height)),k=window.getComputedStyle(l,null),C=k.boxSizing==="content-box"?Math.round(parseFloat(k.height)):l.offsetHeight;if(C<x?k.overflowY==="hidden"&&(_("scroll"),g(),C=k.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(l,null).height)):l.offsetHeight):k.overflowY!=="hidden"&&(_("hidden"),g(),C=k.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(l,null).height)):l.offsetHeight),p!==C){p=C;var y=jr("autosize:resized");try{l.dispatchEvent(y)}catch{}}}}(e)}),t}).destroy=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],ml),t},Rt.update=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],kl),t});var b0=Rt;function Rr(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let yt=Rr();function fl(t){yt=t}const $l=/[&<>"']/,Ml=/[&<>"']/g,Cl=/[<>"']|&(?!#?\w+;)/,zl=/[<>"']|&(?!#?\w+;)/g,yl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},B0=t=>yl[t];function G1(t,n){if(n){if($l.test(t))return t.replace(Ml,B0)}else if(Cl.test(t))return t.replace(zl,B0);return t}const bl=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Pr(t){return t.replace(bl,(n,e)=>(e=e.toLowerCase(),e==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const Bl=/(^|[^\[])\^/g;function P1(t,n){t=typeof t=="string"?t:t.source,n=n||"";const e={replace:(l,a)=>(a=a.source||a,a=a.replace(Bl,"$1"),t=t.replace(l,a),e),getRegex:()=>new RegExp(t,n)};return e}const Ll=/[^\w:]/g,Hl=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function L0(t,n,e){if(t){let l;try{l=decodeURIComponent(Pr(e)).replace(Ll,"").toLowerCase()}catch{return null}if(l.indexOf("javascript:")===0||l.indexOf("vbscript:")===0||l.indexOf("data:")===0)return null}n&&!Hl.test(e)&&(e=jl(n,e));try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}const fn={},Vl=/^[^:]+:\/*[^/]*$/,Sl=/^([^:]+:)[\s\S]*$/,Al=/^([^:]+:\/*[^/]*)[\s\S]*$/;function jl(t,n){fn[" "+t]||(Vl.test(t)?fn[" "+t]=t+"/":fn[" "+t]=yn(t,"/",!0)),t=fn[" "+t];const e=t.indexOf(":")===-1;return n.substring(0,2)==="//"?e?n:t.replace(Sl,"$1")+n:n.charAt(0)==="/"?e?n:t.replace(Al,"$1")+n:t+n}const Pn={exec:function(){}};function g2(t){let n=1,e,l;for(;n<arguments.length;n++){e=arguments[n];for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l])}return t}function H0(t,n){const e=t.replace(/\|/g,(i,d,p)=>{let w=!1,u=d;for(;--u>=0&&p[u]==="\\";)w=!w;return w?"|":" |"}),l=e.split(/ \|/);let a=0;if(l[0].trim()||l.shift(),l.length>0&&!l[l.length-1].trim()&&l.pop(),l.length>n)l.splice(n);else for(;l.length<n;)l.push("");for(;a<l.length;a++)l[a]=l[a].trim().replace(/\\\|/g,"|");return l}function yn(t,n,e){const l=t.length;if(l===0)return"";let a=0;for(;a<l;){const i=t.charAt(l-a-1);if(i===n&&!e)a++;else if(i!==n&&e)a++;else break}return t.slice(0,l-a)}function Rl(t,n){if(t.indexOf(n[1])===-1)return-1;const e=t.length;let l=0,a=0;for(;a<e;a++)if(t[a]==="\\")a++;else if(t[a]===n[0])l++;else if(t[a]===n[1]&&(l--,l<0))return a;return-1}function Tr(t){t&&t.sanitize&&!t.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function V0(t,n){if(n<1)return"";let e="";for(;n>1;)n&1&&(e+=t),n>>=1,t+=t;return e+t}function S0(t,n,e,l){const a=n.href,i=n.title?G1(n.title):null,d=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){l.state.inLink=!0;const p={type:"link",raw:e,href:a,title:i,text:d,tokens:l.inlineTokens(d,[])};return l.state.inLink=!1,p}return{type:"image",raw:e,href:a,title:i,text:G1(d)}}function Pl(t,n){const e=t.match(/^(\s+)(?:```)/);if(e===null)return n;const l=e[1];return n.split(`
`).map(a=>{const i=a.match(/^\s+/);if(i===null)return a;const[d]=i;return d.length>=l.length?a.slice(l.length):a}).join(`
`)}class u3{constructor(n){this.options=n||yt}space(n){const e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){const e=this.rules.block.code.exec(n);if(e){const l=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?l:yn(l,`
`)}}}fences(n){const e=this.rules.block.fences.exec(n);if(e){const l=e[0],a=Pl(l,e[3]||"");return{type:"code",raw:l,lang:e[2]?e[2].trim():e[2],text:a}}}heading(n){const e=this.rules.block.heading.exec(n);if(e){let l=e[2].trim();if(/#$/.test(l)){const i=yn(l,"#");(this.options.pedantic||!i||/ $/.test(i))&&(l=i.trim())}const a={type:"heading",raw:e[0],depth:e[1].length,text:l,tokens:[]};return this.lexer.inline(a.text,a.tokens),a}}hr(n){const e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:e[0]}}blockquote(n){const e=this.rules.block.blockquote.exec(n);if(e){const l=e[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:e[0],tokens:this.lexer.blockTokens(l,[]),text:l}}}list(n){let e=this.rules.block.list.exec(n);if(e){let l,a,i,d,p,w,u,_,g,v,x,k,C=e[1].trim();const y=C.length>1,f={type:"list",raw:"",ordered:y,start:y?+C.slice(0,-1):"",loose:!1,items:[]};C=y?`\\d{1,9}\\${C.slice(-1)}`:`\\${C}`,this.options.pedantic&&(C=y?C:"[*+-]");const M=new RegExp(`^( {0,3}${C})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;n&&(k=!1,!(!(e=M.exec(n))||this.rules.block.hr.test(n)));){if(l=e[0],n=n.substring(l.length),_=e[2].split(`
`,1)[0],g=n.split(`
`,1)[0],this.options.pedantic?(d=2,x=_.trimLeft()):(d=e[2].search(/[^ ]/),d=d>4?1:d,x=_.slice(d),d+=e[1].length),w=!1,!_&&/^ *$/.test(g)&&(l+=g+`
`,n=n.substring(g.length+1),k=!0),!k){const b=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),A=new RegExp(`^ {0,${Math.min(3,d-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),U=new RegExp(`^( {0,${Math.min(3,d-1)}})(\`\`\`|~~~)`);for(;n&&(v=n.split(`
`,1)[0],_=v,this.options.pedantic&&(_=_.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(U.test(_)||this.rules.block.heading.test(_)||b.test(_)||A.test(n)));){if(_.search(/[^ ]/)>=d||!_.trim())x+=`
`+_.slice(d);else if(!w)x+=`
`+_;else break;!w&&!_.trim()&&(w=!0),l+=v+`
`,n=n.substring(v.length+1)}}f.loose||(u?f.loose=!0:/\n *\n *$/.test(l)&&(u=!0)),this.options.gfm&&(a=/^\[[ xX]\] /.exec(x),a&&(i=a[0]!=="[ ] ",x=x.replace(/^\[[ xX]\] +/,""))),f.items.push({type:"list_item",raw:l,task:!!a,checked:i,loose:!1,text:x}),f.raw+=l}f.items[f.items.length-1].raw=l.trimRight(),f.items[f.items.length-1].text=x.trimRight(),f.raw=f.raw.trimRight();const L=f.items.length;for(p=0;p<L;p++){this.lexer.state.top=!1,f.items[p].tokens=this.lexer.blockTokens(f.items[p].text,[]);const b=f.items[p].tokens.filter(U=>U.type==="space"),A=b.every(U=>{const X=U.raw.split("");let T=0;for(const J of X)if(J===`
`&&(T+=1),T>1)return!0;return!1});!f.loose&&b.length&&A&&(f.loose=!0,f.items[p].loose=!0)}return f}}html(n){const e=this.rules.block.html.exec(n);if(e){const l={type:"html",raw:e[0],pre:!this.options.sanitizer&&(e[1]==="pre"||e[1]==="script"||e[1]==="style"),text:e[0]};return this.options.sanitize&&(l.type="paragraph",l.text=this.options.sanitizer?this.options.sanitizer(e[0]):G1(e[0]),l.tokens=[],this.lexer.inline(l.text,l.tokens)),l}}def(n){const e=this.rules.block.def.exec(n);if(e){e[3]&&(e[3]=e[3].substring(1,e[3].length-1));const l=e[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:l,raw:e[0],href:e[2],title:e[3]}}}table(n){const e=this.rules.block.table.exec(n);if(e){const l={type:"table",header:H0(e[1]).map(a=>({text:a})),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(l.header.length===l.align.length){l.raw=e[0];let a=l.align.length,i,d,p,w;for(i=0;i<a;i++)/^ *-+: *$/.test(l.align[i])?l.align[i]="right":/^ *:-+: *$/.test(l.align[i])?l.align[i]="center":/^ *:-+ *$/.test(l.align[i])?l.align[i]="left":l.align[i]=null;for(a=l.rows.length,i=0;i<a;i++)l.rows[i]=H0(l.rows[i],l.header.length).map(u=>({text:u}));for(a=l.header.length,d=0;d<a;d++)l.header[d].tokens=[],this.lexer.inline(l.header[d].text,l.header[d].tokens);for(a=l.rows.length,d=0;d<a;d++)for(w=l.rows[d],p=0;p<w.length;p++)w[p].tokens=[],this.lexer.inline(w[p].text,w[p].tokens);return l}}}lheading(n){const e=this.rules.block.lheading.exec(n);if(e){const l={type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}paragraph(n){const e=this.rules.block.paragraph.exec(n);if(e){const l={type:"paragraph",raw:e[0],text:e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1],tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}text(n){const e=this.rules.block.text.exec(n);if(e){const l={type:"text",raw:e[0],text:e[0],tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}escape(n){const e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:G1(e[1])}}tag(n){const e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):G1(e[0]):e[0]}}link(n){const e=this.rules.inline.link.exec(n);if(e){const l=e[2].trim();if(!this.options.pedantic&&/^</.test(l)){if(!/>$/.test(l))return;const d=yn(l.slice(0,-1),"\\");if((l.length-d.length)%2===0)return}else{const d=Rl(e[2],"()");if(d>-1){const w=(e[0].indexOf("!")===0?5:4)+e[1].length+d;e[2]=e[2].substring(0,d),e[0]=e[0].substring(0,w).trim(),e[3]=""}}let a=e[2],i="";if(this.options.pedantic){const d=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);d&&(a=d[1],i=d[3])}else i=e[3]?e[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(this.options.pedantic&&!/>$/.test(l)?a=a.slice(1):a=a.slice(1,-1)),S0(e,{href:a&&a.replace(this.rules.inline._escapes,"$1"),title:i&&i.replace(this.rules.inline._escapes,"$1")},e[0],this.lexer)}}reflink(n,e){let l;if((l=this.rules.inline.reflink.exec(n))||(l=this.rules.inline.nolink.exec(n))){let a=(l[2]||l[1]).replace(/\s+/g," ");if(a=e[a.toLowerCase()],!a||!a.href){const i=l[0].charAt(0);return{type:"text",raw:i,text:i}}return S0(l,a,l[0],this.lexer)}}emStrong(n,e,l=""){let a=this.rules.inline.emStrong.lDelim.exec(n);if(!a||a[3]&&l.match(/[\p{L}\p{N}]/u))return;const i=a[1]||a[2]||"";if(!i||i&&(l===""||this.rules.inline.punctuation.exec(l))){const d=a[0].length-1;let p,w,u=d,_=0;const g=a[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(g.lastIndex=0,e=e.slice(-1*n.length+d);(a=g.exec(e))!=null;){if(p=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!p)continue;if(w=p.length,a[3]||a[4]){u+=w;continue}else if((a[5]||a[6])&&d%3&&!((d+w)%3)){_+=w;continue}if(u-=w,u>0)continue;if(w=Math.min(w,w+u+_),Math.min(d,w)%2){const x=n.slice(1,d+a.index+w);return{type:"em",raw:n.slice(0,d+a.index+w+1),text:x,tokens:this.lexer.inlineTokens(x,[])}}const v=n.slice(2,d+a.index+w-1);return{type:"strong",raw:n.slice(0,d+a.index+w+1),text:v,tokens:this.lexer.inlineTokens(v,[])}}}}codespan(n){const e=this.rules.inline.code.exec(n);if(e){let l=e[2].replace(/\n/g," ");const a=/[^ ]/.test(l),i=/^ /.test(l)&&/ $/.test(l);return a&&i&&(l=l.substring(1,l.length-1)),l=G1(l,!0),{type:"codespan",raw:e[0],text:l}}}br(n){const e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n){const e=this.rules.inline.del.exec(n);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2],[])}}autolink(n,e){const l=this.rules.inline.autolink.exec(n);if(l){let a,i;return l[2]==="@"?(a=G1(this.options.mangle?e(l[1]):l[1]),i="mailto:"+a):(a=G1(l[1]),i=a),{type:"link",raw:l[0],text:a,href:i,tokens:[{type:"text",raw:a,text:a}]}}}url(n,e){let l;if(l=this.rules.inline.url.exec(n)){let a,i;if(l[2]==="@")a=G1(this.options.mangle?e(l[0]):l[0]),i="mailto:"+a;else{let d;do d=l[0],l[0]=this.rules.inline._backpedal.exec(l[0])[0];while(d!==l[0]);a=G1(l[0]),l[1]==="www."?i="http://"+a:i=a}return{type:"link",raw:l[0],text:a,href:i,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(n,e){const l=this.rules.inline.text.exec(n);if(l){let a;return this.lexer.state.inRawBlock?a=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):G1(l[0]):l[0]:a=G1(this.options.smartypants?e(l[0]):l[0]),{type:"text",raw:l[0],text:a}}}}const o1={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Pn,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};o1._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;o1._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;o1.def=P1(o1.def).replace("label",o1._label).replace("title",o1._title).getRegex();o1.bullet=/(?:[*+-]|\d{1,9}[.)])/;o1.listItemStart=P1(/^( *)(bull) */).replace("bull",o1.bullet).getRegex();o1.list=P1(o1.list).replace(/bull/g,o1.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+o1.def.source+")").getRegex();o1._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";o1._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;o1.html=P1(o1.html,"i").replace("comment",o1._comment).replace("tag",o1._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();o1.paragraph=P1(o1._paragraph).replace("hr",o1.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",o1._tag).getRegex();o1.blockquote=P1(o1.blockquote).replace("paragraph",o1.paragraph).getRegex();o1.normal=g2({},o1);o1.gfm=g2({},o1.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});o1.gfm.table=P1(o1.gfm.table).replace("hr",o1.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",o1._tag).getRegex();o1.gfm.paragraph=P1(o1._paragraph).replace("hr",o1.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",o1.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",o1._tag).getRegex();o1.pedantic=g2({},o1.normal,{html:P1(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",o1._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Pn,paragraph:P1(o1.normal._paragraph).replace("hr",o1.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",o1.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const N={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Pn,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Pn,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};N._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";N.punctuation=P1(N.punctuation).replace(/punctuation/g,N._punctuation).getRegex();N.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;N.escapedEmSt=/\\\*|\\_/g;N._comment=P1(o1._comment).replace("(?:-->|$)","-->").getRegex();N.emStrong.lDelim=P1(N.emStrong.lDelim).replace(/punct/g,N._punctuation).getRegex();N.emStrong.rDelimAst=P1(N.emStrong.rDelimAst,"g").replace(/punct/g,N._punctuation).getRegex();N.emStrong.rDelimUnd=P1(N.emStrong.rDelimUnd,"g").replace(/punct/g,N._punctuation).getRegex();N._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;N._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;N._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;N.autolink=P1(N.autolink).replace("scheme",N._scheme).replace("email",N._email).getRegex();N._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;N.tag=P1(N.tag).replace("comment",N._comment).replace("attribute",N._attribute).getRegex();N._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;N._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;N._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;N.link=P1(N.link).replace("label",N._label).replace("href",N._href).replace("title",N._title).getRegex();N.reflink=P1(N.reflink).replace("label",N._label).replace("ref",o1._label).getRegex();N.nolink=P1(N.nolink).replace("ref",o1._label).getRegex();N.reflinkSearch=P1(N.reflinkSearch,"g").replace("reflink",N.reflink).replace("nolink",N.nolink).getRegex();N.normal=g2({},N);N.pedantic=g2({},N.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:P1(/^!?\[(label)\]\((.*?)\)/).replace("label",N._label).getRegex(),reflink:P1(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",N._label).getRegex()});N.gfm=g2({},N.normal,{escape:P1(N.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});N.gfm.url=P1(N.gfm.url,"i").replace("email",N.gfm._extended_email).getRegex();N.breaks=g2({},N.gfm,{br:P1(N.br).replace("{2,}","*").getRegex(),text:P1(N.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Tl(t){return t.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function A0(t){let n="",e,l;const a=t.length;for(e=0;e<a;e++)l=t.charCodeAt(e),Math.random()>.5&&(l="x"+l.toString(16)),n+="&#"+l+";";return n}class L2{constructor(n){this.tokens=[],this.tokens.links=Object.create(null),this.options=n||yt,this.options.tokenizer=this.options.tokenizer||new u3,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:o1.normal,inline:N.normal};this.options.pedantic?(e.block=o1.pedantic,e.inline=N.pedantic):this.options.gfm&&(e.block=o1.gfm,this.options.breaks?e.inline=N.breaks:e.inline=N.gfm),this.tokenizer.rules=e}static get rules(){return{block:o1,inline:N}}static lex(n,e){return new L2(e).lex(n)}static lexInline(n,e){return new L2(e).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);let e;for(;e=this.inlineQueue.shift();)this.inlineTokens(e.src,e.tokens);return this.tokens}blockTokens(n,e=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(p,w,u)=>w+"    ".repeat(u.length));let l,a,i,d;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(p=>(l=p.call({lexer:this},n,e))?(n=n.substring(l.raw.length),e.push(l),!0):!1))){if(l=this.tokenizer.space(n)){n=n.substring(l.raw.length),l.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(l);continue}if(l=this.tokenizer.code(n)){n=n.substring(l.raw.length),a=e[e.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+l.raw,a.text+=`
`+l.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):e.push(l);continue}if(l=this.tokenizer.fences(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.heading(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.hr(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.blockquote(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.list(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.html(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.def(n)){n=n.substring(l.raw.length),a=e[e.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+l.raw,a.text+=`
`+l.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.lheading(n)){n=n.substring(l.raw.length),e.push(l);continue}if(i=n,this.options.extensions&&this.options.extensions.startBlock){let p=1/0;const w=n.slice(1);let u;this.options.extensions.startBlock.forEach(function(_){u=_.call({lexer:this},w),typeof u=="number"&&u>=0&&(p=Math.min(p,u))}),p<1/0&&p>=0&&(i=n.substring(0,p+1))}if(this.state.top&&(l=this.tokenizer.paragraph(i))){a=e[e.length-1],d&&a.type==="paragraph"?(a.raw+=`
`+l.raw,a.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):e.push(l),d=i.length!==n.length,n=n.substring(l.raw.length);continue}if(l=this.tokenizer.text(n)){n=n.substring(l.raw.length),a=e[e.length-1],a&&a.type==="text"?(a.raw+=`
`+l.raw,a.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):e.push(l);continue}if(n){const p="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return this.state.top=!0,e}inline(n,e){this.inlineQueue.push({src:n,tokens:e})}inlineTokens(n,e=[]){let l,a,i,d=n,p,w,u;if(this.tokens.links){const _=Object.keys(this.tokens.links);if(_.length>0)for(;(p=this.tokenizer.rules.inline.reflinkSearch.exec(d))!=null;)_.includes(p[0].slice(p[0].lastIndexOf("[")+1,-1))&&(d=d.slice(0,p.index)+"["+V0("a",p[0].length-2)+"]"+d.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(p=this.tokenizer.rules.inline.blockSkip.exec(d))!=null;)d=d.slice(0,p.index)+"["+V0("a",p[0].length-2)+"]"+d.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(p=this.tokenizer.rules.inline.escapedEmSt.exec(d))!=null;)d=d.slice(0,p.index)+"++"+d.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;n;)if(w||(u=""),w=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(_=>(l=_.call({lexer:this},n,e))?(n=n.substring(l.raw.length),e.push(l),!0):!1))){if(l=this.tokenizer.escape(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.tag(n)){n=n.substring(l.raw.length),a=e[e.length-1],a&&l.type==="text"&&a.type==="text"?(a.raw+=l.raw,a.text+=l.text):e.push(l);continue}if(l=this.tokenizer.link(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(l.raw.length),a=e[e.length-1],a&&l.type==="text"&&a.type==="text"?(a.raw+=l.raw,a.text+=l.text):e.push(l);continue}if(l=this.tokenizer.emStrong(n,d,u)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.codespan(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.br(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.del(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.autolink(n,A0)){n=n.substring(l.raw.length),e.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(n,A0))){n=n.substring(l.raw.length),e.push(l);continue}if(i=n,this.options.extensions&&this.options.extensions.startInline){let _=1/0;const g=n.slice(1);let v;this.options.extensions.startInline.forEach(function(x){v=x.call({lexer:this},g),typeof v=="number"&&v>=0&&(_=Math.min(_,v))}),_<1/0&&_>=0&&(i=n.substring(0,_+1))}if(l=this.tokenizer.inlineText(i,Tl)){n=n.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(u=l.raw.slice(-1)),w=!0,a=e[e.length-1],a&&a.type==="text"?(a.raw+=l.raw,a.text+=l.text):e.push(l);continue}if(n){const _="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(_);break}else throw new Error(_)}}return e}}class _3{constructor(n){this.options=n||yt}code(n,e,l){const a=(e||"").match(/\S*/)[0];if(this.options.highlight){const i=this.options.highlight(n,a);i!=null&&i!==n&&(l=!0,n=i)}return n=n.replace(/\n$/,"")+`
`,a?'<pre><code class="'+this.options.langPrefix+G1(a,!0)+'">'+(l?n:G1(n,!0))+`</code></pre>
`:"<pre><code>"+(l?n:G1(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n){return n}heading(n,e,l,a){if(this.options.headerIds){const i=this.options.headerPrefix+a.slug(l);return`<h${e} id="${i}">${n}</h${e}>
`}return`<h${e}>${n}</h${e}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(n,e,l){const a=e?"ol":"ul",i=e&&l!==1?' start="'+l+'"':"";return"<"+a+i+`>
`+n+"</"+a+`>
`}listitem(n){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(n){return`<p>${n}</p>
`}table(n,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+e+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,e){const l=e.header?"th":"td";return(e.align?`<${l} align="${e.align}">`:`<${l}>`)+n+`</${l}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(n){return`<del>${n}</del>`}link(n,e,l){if(n=L0(this.options.sanitize,this.options.baseUrl,n),n===null)return l;let a='<a href="'+G1(n)+'"';return e&&(a+=' title="'+e+'"'),a+=">"+l+"</a>",a}image(n,e,l){if(n=L0(this.options.sanitize,this.options.baseUrl,n),n===null)return l;let a=`<img src="${n}" alt="${l}"`;return e&&(a+=` title="${e}"`),a+=this.options.xhtml?"/>":">",a}text(n){return n}}class Dr{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,e,l){return""+l}image(n,e,l){return""+l}br(){return""}}class Er{constructor(){this.seen={}}serialize(n){return n.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(n,e){let l=n,a=0;if(this.seen.hasOwnProperty(l)){a=this.seen[n];do a++,l=n+"-"+a;while(this.seen.hasOwnProperty(l))}return e||(this.seen[n]=a,this.seen[l]=0),l}slug(n,e={}){const l=this.serialize(n);return this.getNextSafeSlug(l,e.dryrun)}}class H2{constructor(n){this.options=n||yt,this.options.renderer=this.options.renderer||new _3,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Dr,this.slugger=new Er}static parse(n,e){return new H2(e).parse(n)}static parseInline(n,e){return new H2(e).parseInline(n)}parse(n,e=!0){let l="",a,i,d,p,w,u,_,g,v,x,k,C,y,f,M,L,b,A,U;const X=n.length;for(a=0;a<X;a++){if(x=n[a],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[x.type]&&(U=this.options.extensions.renderers[x.type].call({parser:this},x),U!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(x.type))){l+=U||"";continue}switch(x.type){case"space":continue;case"hr":{l+=this.renderer.hr();continue}case"heading":{l+=this.renderer.heading(this.parseInline(x.tokens),x.depth,Pr(this.parseInline(x.tokens,this.textRenderer)),this.slugger);continue}case"code":{l+=this.renderer.code(x.text,x.lang,x.escaped);continue}case"table":{for(g="",_="",p=x.header.length,i=0;i<p;i++)_+=this.renderer.tablecell(this.parseInline(x.header[i].tokens),{header:!0,align:x.align[i]});for(g+=this.renderer.tablerow(_),v="",p=x.rows.length,i=0;i<p;i++){for(u=x.rows[i],_="",w=u.length,d=0;d<w;d++)_+=this.renderer.tablecell(this.parseInline(u[d].tokens),{header:!1,align:x.align[d]});v+=this.renderer.tablerow(_)}l+=this.renderer.table(g,v);continue}case"blockquote":{v=this.parse(x.tokens),l+=this.renderer.blockquote(v);continue}case"list":{for(k=x.ordered,C=x.start,y=x.loose,p=x.items.length,v="",i=0;i<p;i++)M=x.items[i],L=M.checked,b=M.task,f="",M.task&&(A=this.renderer.checkbox(L),y?M.tokens.length>0&&M.tokens[0].type==="paragraph"?(M.tokens[0].text=A+" "+M.tokens[0].text,M.tokens[0].tokens&&M.tokens[0].tokens.length>0&&M.tokens[0].tokens[0].type==="text"&&(M.tokens[0].tokens[0].text=A+" "+M.tokens[0].tokens[0].text)):M.tokens.unshift({type:"text",text:A}):f+=A),f+=this.parse(M.tokens,y),v+=this.renderer.listitem(f,b,L);l+=this.renderer.list(v,k,C);continue}case"html":{l+=this.renderer.html(x.text);continue}case"paragraph":{l+=this.renderer.paragraph(this.parseInline(x.tokens));continue}case"text":{for(v=x.tokens?this.parseInline(x.tokens):x.text;a+1<X&&n[a+1].type==="text";)x=n[++a],v+=`
`+(x.tokens?this.parseInline(x.tokens):x.text);l+=e?this.renderer.paragraph(v):v;continue}default:{const T='Token with "'+x.type+'" type was not found.';if(this.options.silent){console.error(T);return}else throw new Error(T)}}}return l}parseInline(n,e){e=e||this.renderer;let l="",a,i,d;const p=n.length;for(a=0;a<p;a++){if(i=n[a],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(d=this.options.extensions.renderers[i.type].call({parser:this},i),d!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type))){l+=d||"";continue}switch(i.type){case"escape":{l+=e.text(i.text);break}case"html":{l+=e.html(i.text);break}case"link":{l+=e.link(i.href,i.title,this.parseInline(i.tokens,e));break}case"image":{l+=e.image(i.href,i.title,i.text);break}case"strong":{l+=e.strong(this.parseInline(i.tokens,e));break}case"em":{l+=e.em(this.parseInline(i.tokens,e));break}case"codespan":{l+=e.codespan(i.text);break}case"br":{l+=e.br();break}case"del":{l+=e.del(this.parseInline(i.tokens,e));break}case"text":{l+=e.text(i.text);break}default:{const w='Token with "'+i.type+'" type was not found.';if(this.options.silent){console.error(w);return}else throw new Error(w)}}}return l}}function c1(t,n,e){if(typeof t=="undefined"||t===null)throw new Error("marked(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");if(typeof n=="function"&&(e=n,n=null),n=g2({},c1.defaults,n||{}),Tr(n),e){const l=n.highlight;let a;try{a=L2.lex(t,n)}catch(p){return e(p)}const i=function(p){let w;if(!p)try{n.walkTokens&&c1.walkTokens(a,n.walkTokens),w=H2.parse(a,n)}catch(u){p=u}return n.highlight=l,p?e(p):e(null,w)};if(!l||l.length<3||(delete n.highlight,!a.length))return i();let d=0;c1.walkTokens(a,function(p){p.type==="code"&&(d++,setTimeout(()=>{l(p.text,p.lang,function(w,u){if(w)return i(w);u!=null&&u!==p.text&&(p.text=u,p.escaped=!0),d--,d===0&&i()})},0))}),d===0&&i();return}try{const l=L2.lex(t,n);return n.walkTokens&&c1.walkTokens(l,n.walkTokens),H2.parse(l,n)}catch(l){if(l.message+=`
Please report this to https://github.com/markedjs/marked.`,n.silent)return"<p>An error occurred:</p><pre>"+G1(l.message+"",!0)+"</pre>";throw l}}c1.options=c1.setOptions=function(t){return g2(c1.defaults,t),fl(c1.defaults),c1};c1.getDefaults=Rr;c1.defaults=yt;c1.use=function(...t){const n=g2({},...t),e=c1.defaults.extensions||{renderers:{},childTokens:{}};let l;t.forEach(a=>{if(a.extensions&&(l=!0,a.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const d=e.renderers?e.renderers[i.name]:null;d?e.renderers[i.name]=function(...p){let w=i.renderer.apply(this,p);return w===!1&&(w=d.apply(this,p)),w}:e.renderers[i.name]=i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");e[i.level]?e[i.level].unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}i.childTokens&&(e.childTokens[i.name]=i.childTokens)})),a.renderer){const i=c1.defaults.renderer||new _3;for(const d in a.renderer){const p=i[d];i[d]=(...w)=>{let u=a.renderer[d].apply(i,w);return u===!1&&(u=p.apply(i,w)),u}}n.renderer=i}if(a.tokenizer){const i=c1.defaults.tokenizer||new u3;for(const d in a.tokenizer){const p=i[d];i[d]=(...w)=>{let u=a.tokenizer[d].apply(i,w);return u===!1&&(u=p.apply(i,w)),u}}n.tokenizer=i}if(a.walkTokens){const i=c1.defaults.walkTokens;n.walkTokens=function(d){a.walkTokens.call(this,d),i&&i.call(this,d)}}l&&(n.extensions=e),c1.setOptions(n)})};c1.walkTokens=function(t,n){for(const e of t)switch(n.call(c1,e),e.type){case"table":{for(const l of e.header)c1.walkTokens(l.tokens,n);for(const l of e.rows)for(const a of l)c1.walkTokens(a.tokens,n);break}case"list":{c1.walkTokens(e.items,n);break}default:c1.defaults.extensions&&c1.defaults.extensions.childTokens&&c1.defaults.extensions.childTokens[e.type]?c1.defaults.extensions.childTokens[e.type].forEach(function(l){c1.walkTokens(e[l],n)}):e.tokens&&c1.walkTokens(e.tokens,n)}};c1.parseInline=function(t,n){if(typeof t=="undefined"||t===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");n=g2({},c1.defaults,n||{}),Tr(n);try{const e=L2.lexInline(t,n);return n.walkTokens&&c1.walkTokens(e,n.walkTokens),H2.parseInline(e,n)}catch(e){if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,n.silent)return"<p>An error occurred:</p><pre>"+G1(e.message+"",!0)+"</pre>";throw e}};c1.Parser=H2;c1.parser=H2.parse;c1.Renderer=_3;c1.TextRenderer=Dr;c1.Lexer=L2;c1.lexer=L2.lex;c1.Tokenizer=u3;c1.Slugger=Er;c1.parse=c1;c1.options;c1.setOptions;c1.use;c1.walkTokens;c1.parseInline;H2.parse;L2.lex;function Gt(t){return!!yo()&&(bo(t),!0)}var j0;const tn=typeof window!="undefined",de=()=>{};function Fr(t,n){return function(...e){t(()=>n.apply(this,e),{fn:n,thisArg:this,args:e})}}tn&&((j0=window==null?void 0:window.navigator)==null?void 0:j0.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const Ir=t=>t();function Dl(t,n=200,e={}){return Fr(function(l,a={}){let i,d;return p=>{const w=N1(l),u=N1(a.maxWait);if(i&&clearTimeout(i),w<=0||u!==void 0&&u<=0)return d&&(clearTimeout(d),d=null),p();u&&!d&&(d=setTimeout(()=>{i&&clearTimeout(i),d=null,p()},u)),i=setTimeout(()=>{d&&clearTimeout(d),d=null,p()},w)}}(n,e),t)}var R0=Object.getOwnPropertySymbols,El=Object.prototype.hasOwnProperty,Fl=Object.prototype.propertyIsEnumerable;function Il(t,n,e={}){const l=e,{eventFilter:a=Ir}=l,i=((d,p)=>{var w={};for(var u in d)El.call(d,u)&&p.indexOf(u)<0&&(w[u]=d[u]);if(d!=null&&R0)for(var u of R0(d))p.indexOf(u)<0&&Fl.call(d,u)&&(w[u]=d[u]);return w})(l,["eventFilter"]);return W1(t,Fr(a,n),i)}var Ul=Object.defineProperty,ql=Object.defineProperties,Gl=Object.getOwnPropertyDescriptors,$n=Object.getOwnPropertySymbols,P0=Object.prototype.hasOwnProperty,T0=Object.prototype.propertyIsEnumerable,D0=(t,n,e)=>n in t?Ul(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;function Ol(t,n,e={}){const l=e,{eventFilter:a}=l,i=((v,x)=>{var k={};for(var C in v)P0.call(v,C)&&x.indexOf(C)<0&&(k[C]=v[C]);if(v!=null&&$n)for(var C of $n(v))x.indexOf(C)<0&&T0.call(v,C)&&(k[C]=v[C]);return k})(l,["eventFilter"]),{eventFilter:d,pause:p,resume:w,isActive:u}=function(v=Ir){const x=Z(!0);return{isActive:x,pause:function(){x.value=!1},resume:function(){x.value=!0},eventFilter:(...k)=>{x.value&&v(...k)}}}(a),_=Il(t,n,(g=((v,x)=>{for(var k in x||(x={}))P0.call(x,k)&&D0(v,k,x[k]);if($n)for(var k of $n(x))T0.call(x,k)&&D0(v,k,x[k]);return v})({},i),ql(g,Gl({eventFilter:d}))));var g;return{stop:_,pause:p,resume:w,isActive:u}}const Tn=tn?window:void 0,Nl=tn?window.document:void 0;function Kl(...t){let n,e,l,a;if(typeof t[0]=="string"?([e,l,a]=t,n=Tn):[n,e,l,a]=t,!n)return de;let i=de;const d=W1(()=>function(w){var u;const _=N1(w);return(u=_==null?void 0:_.$el)!=null?u:_}(n),w=>{i(),w&&(w.addEventListener(e,l,a),i=()=>{w.removeEventListener(e,l,a),i=de})},{immediate:!0,flush:"post"}),p=()=>{d(),i()};return Gt(p),p}const Ue=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},qe="__vueuse_ssr_handlers__";Ue[qe]=Ue[qe]||{};const Wl=Ue[qe],Jl={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}};function nn(t,n,e,l={}){var a;const{flush:i="pre",deep:d=!0,listenToStorageChanges:p=!0,writeDefaults:w=!0,shallow:u,window:_=Tn,eventFilter:g,onError:v=b=>{console.error(b)}}=l,x=(u?b4:Z)(n);if(!e)try{e=function(b,A){return Wl[b]||A}("getDefaultStorage",()=>{var b;return(b=Tn)==null?void 0:b.localStorage})()}catch(b){v(b)}if(!e)return x;const k=N1(n),C=function(b){return b==null?"any":b instanceof Set?"set":b instanceof Map?"map":b instanceof Date?"date":typeof b=="boolean"?"boolean":typeof b=="string"?"string":typeof b=="object"||Array.isArray(b)?"object":Number.isNaN(b)?"any":"number"}(k),y=(a=l.serializer)!=null?a:Jl[C],{pause:f,resume:M}=Ol(x,()=>function(b){try{b==null?e.removeItem(t):e.setItem(t,y.write(b))}catch(A){v(A)}}(x.value),{flush:i,deep:d,eventFilter:g});return _&&p&&Kl(_,"storage",L),L(),x;function L(b){b&&b.key!==t||(x.value=function(A){if(!A||A.key===t){f();try{const U=A?A.newValue:e.getItem(t);return U==null?(w&&k!==null&&e.setItem(t,y.write(k)),k):typeof U!="string"?U:y.read(U)}catch(U){v(U)}finally{M()}}}(b))}}var E0,St,Xl=Object.defineProperty,F0=Object.getOwnPropertySymbols,Yl=Object.prototype.hasOwnProperty,Ql=Object.prototype.propertyIsEnumerable,I0=(t,n,e)=>n in t?Xl(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;function Zl(t={}){const{controls:n=!1,interval:e="requestAnimationFrame"}=t,l=Z(new Date),a=()=>l.value=new Date,i=e==="requestAnimationFrame"?function(d,p={}){const{immediate:w=!0,window:u=Tn}=p,_=Z(!1);let g=null;function v(){_.value&&u&&(d(),g=u.requestAnimationFrame(v))}function x(){!_.value&&u&&(_.value=!0,v())}function k(){_.value=!1,g!=null&&u&&(u.cancelAnimationFrame(g),g=null)}return w&&x(),Gt(k),{isActive:_,pause:k,resume:x}}(a,{immediate:!0}):function(d,p=1e3,w={}){const{immediate:u=!0,immediateCallback:_=!1}=w;let g=null;const v=Z(!1);function x(){g&&(clearInterval(g),g=null)}function k(){v.value=!1,x()}function C(){N1(p)<=0||(v.value=!0,_&&d(),x(),g=setInterval(d,N1(p)))}return u&&tn&&C(),K1(p)&&Gt(W1(p,()=>{u&&tn&&C()})),Gt(k),{isActive:v,pause:k,resume:C}}(a,e,{immediate:!0});return n?((d,p)=>{for(var w in p||(p={}))Yl.call(p,w)&&I0(d,w,p[w]);if(F0)for(var w of F0(p))Ql.call(p,w)&&I0(d,w,p[w]);return d})({now:l},i):l}(St=E0||(E0={})).UP="UP",St.RIGHT="RIGHT",St.DOWN="DOWN",St.LEFT="LEFT",St.NONE="NONE";let t5=0;const v3=({size:t})=>O("svg",{width:t,height:t,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},O("circle",{cx:50,cy:50,fill:"none",stroke:"currentColor",strokeWidth:"4",r:"40","stroke-dasharray":"85 30"},O("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"})));var Qn=(t,n)=>{const e=t.__vccOpts||t;for(const[l,a]of n)e[l]=a;return e};const n5=c({name:"ImageWall",components:{LoadingIcon:v3},props:{items:{type:Array,default:()=>[]},columnWidth:{type:Number,default:300},gap:{type:Number,default:0}},emit:["insert"],setup(t){let n=null;const e=Z(null),l=Z({}),a=Z([]),i=()=>{const w=Math.floor((e.value.getBoundingClientRect().width+t.gap)/(t.columnWidth+t.gap));return w>0?w:1},d=async w=>{var _;if(w>=t.items.length)return;await o3();const u=Array.from(((_=e.value)==null?void 0:_.children)||[]).reduce((g,v)=>v.getBoundingClientRect().height<g.getBoundingClientRect().height?v:g);a.value[Number(u.dataset.index)].push(w),await d(w+1)},p=async(w=!1)=>{if(a.value.length===i()&&!w)return;var u;a.value=(u=i(),new Array(u).fill(null).map(()=>[]));const _=window.scrollY;await d(0),window.scrollTo({top:_})};return W1(()=>[t.items],()=>{l.value={},p(!0)}),W1(()=>[t.columnWidth,t.gap],()=>p()),Z1(()=>{p(!0),n=new ResizeObserver(()=>p()),n.observe(e.value)}),cn(()=>n.unobserve(e.value)),{columns:a,state:l,wall:e}}}),e5=["data-index"],r5=["src","title","onLoad","onClick"];var o5=Qn(n5,[["render",function(t,n,e,l,a,i){const d=U1("LoadingIcon");return o(),s("div",{ref:"wall",class:"wl-gallery",style:f2({gap:`${t.gap}px`})},[(o(!0),s(V1,null,b2(t.columns,(p,w)=>(o(),s("div",{key:w,class:"wl-gallery-column","data-index":w,style:f2({gap:`${t.gap}px`})},[(o(!0),s(V1,null,b2(p,u=>(o(),s(V1,{key:u},[t.state[t.items[u].src]?g1("v-if",!0):(o(),_2(d,{key:0,size:36,style:{margin:"20px auto"}})),r("img",{class:"wl-gallery-item",src:t.items[u].src,title:t.items[u].title,loading:"lazy",onLoad:_=>t.state[t.items[u].src]=!0,onClick:_=>t.$emit("insert",`![](${t.items[u].src})`)},null,40,r5)],64))),128))],12,e5))),128))],4)}],["__file","ImageWall.vue"]]);const s5=["nick","mail","link"],U0=t=>t.filter(n=>s5.includes(n)),c5=t=>new Promise((n,e)=>{const l=new FileReader;l.readAsDataURL(t),l.onload=()=>{var a;return n(((a=l.result)==null?void 0:a.toString())||"")},l.onerror=e}),l5=t=>t===!0?'<p class="wl-tex">Tex is not available in preview</p>':'<span class="wl-tex">Tex is not available in preview</span>',a5=()=>{const t={next:""},n=({keyword:e,pos:l})=>{const a=new URLSearchParams("media_filter=minimal");return a.set("key","PAY5JLFIH6V6"),a.set("limit","20"),a.set("pos",l||""),a.set("q",e),fetch(`https://g.tenor.com/v1/search?${a.toString()}`,{headers:{"Content-Type":"application/json"}}).then(i=>i.json()).catch(()=>({next:l||"",results:[]}))};return{search:(e="")=>n({keyword:e}).then(l=>(t.next=l.next,l.results.map(a=>({title:a.title,src:a.media[0].tinygif.url})))),more:e=>n({keyword:e,pos:t.next}).then(l=>(t.next=l.next,l.results.map(a=>({title:a.title,src:a.media[0].tinygif.url}))))}},i5=new RegExp(`(${/[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/.source}|${/</.source})|((?:${/(?:^|\s)\/\/(.+?)$/gm.source})|(?:${/\/\*([\S\s]*?)\*\//gm.source}))`,"gmi"),q0=["23AC69","91C132","F19726","E8552D","1AAB8E","E1147F","2980C1","1BA1E6","9FA0A0","F19726","E30B20","E30B20","A3338B"],pe={},h5=t=>{let n=0;return t.replace(i5,(e,l,a)=>{if(a)return`<span style="color: slategray">${a}</span>`;if(l==="<")return"&lt;";let i;pe[l]?i=pe[l]:(i=q0[n],pe[l]=i);const d=`<span style="color: #${i}">${l}</span>`;return n=++n%q0.length,d})},d5=["nick","nickError","mail","mailError","link","optional","placeholder","sofa","submit","like","cancelLike","reply","cancelReply","comment","refresh","more","preview","emoji","uploadImage","seconds","minutes","hours","days","now","uploading","login","logout","admin","sticky","word","wordHint","anonymous","level0","level1","level2","level3","level4","level5","gif","gifSearchPlaceholder"],bt=t=>Object.fromEntries(t.map((n,e)=>[d5[e],n]));var we=bt(["NickName","NickName cannot be less than 3 bytes.","E-Mail","Please confirm your email address.","Website","Optional","Comment here...","No comment yet.","Submit","Like","Cancel like","Reply","Cancel reply","Comments","Refresh","Load More...","Preview","Emoji","Upload Image","seconds ago","minutes ago","hours ago","days ago","just now","Uploading","Login","logout","Admin","Sticky","Words",`Please input comments between $0 and $1 words!
 Current word number: $2`,"Anonymous","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Search GIF"]),ue=bt(["\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0","3\u30D0\u30A4\u30C8\u4EE5\u4E0A\u306E\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0\u3092\u3054\u5165\u529B\u304F\u3060\u3055\u3044.","\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9","\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044.","\u30B5\u30A4\u30C8","\u30AA\u30D7\u30B7\u30E7\u30F3","\u3053\u3053\u306B\u30B3\u30E1\u30F3\u30C8","\u30B3\u30E1\u30F3\u30C8\u3057\u307E\u3057\u3087\u3046~","\u63D0\u51FA\u3059\u308B","Like","Cancel like","\u8FD4\u4FE1\u3059\u308B","\u30AD\u30E3\u30F3\u30BB\u30EB","\u30B3\u30E1\u30F3\u30C8","\u66F4\u65B0","\u3055\u3089\u306B\u8AAD\u307F\u8FBC\u3080","\u30D7\u30EC\u30D3\u30E5\u30FC","\u7D75\u6587\u5B57","\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9","\u79D2\u524D","\u5206\u524D","\u6642\u9593\u524D","\u65E5\u524D","\u305F\u3063\u3060\u4ECA","\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9","\u30ED\u30B0\u30A4\u30F3\u3059\u308B","\u30ED\u30B0\u30A2\u30A6\u30C8","\u7BA1\u7406\u8005","\u30C8\u30C3\u30D7\u306B\u7F6E\u304F","\u30EF\u30FC\u30C9",`\u30B3\u30E1\u30F3\u30C8\u306F $0 \u304B\u3089 $1 \u30EF\u30FC\u30C9\u306E\u9593\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093!
 \u73FE\u5728\u306E\u5358\u8A9E\u756A\u53F7: $2`,"\u533F\u540D","\u3046\u3048\u306B\u3093","\u306A\u304B\u306B\u3093","\u3057\u3082\u304A\u3057","\u7279\u306B\u3057\u3082\u304A\u3057","\u304B\u3052","\u306A\u306C\u3057","GIF","\u63A2\u3059 GIF"]),_e=bt(["\u6635\u79F0","\u6635\u79F0\u4E0D\u80FD\u5C11\u4E8E3\u4E2A\u5B57\u7B26","\u90AE\u7BB1","\u8BF7\u586B\u5199\u6B63\u786E\u7684\u90AE\u4EF6\u5730\u5740","\u7F51\u5740","\u53EF\u9009","\u6B22\u8FCE\u8BC4\u8BBA","\u6765\u53D1\u8BC4\u8BBA\u5427~","\u63D0\u4EA4","\u559C\u6B22","\u53D6\u6D88\u559C\u6B22","\u56DE\u590D","\u53D6\u6D88\u56DE\u590D","\u8BC4\u8BBA","\u5237\u65B0","\u52A0\u8F7D\u66F4\u591A...","\u9884\u89C8","\u8868\u60C5","\u4E0A\u4F20\u56FE\u7247","\u79D2\u524D","\u5206\u949F\u524D","\u5C0F\u65F6\u524D","\u5929\u524D","\u521A\u521A","\u6B63\u5728\u4E0A\u4F20","\u767B\u5F55","\u9000\u51FA","\u535A\u4E3B","\u7F6E\u9876","\u5B57",`\u8BC4\u8BBA\u5B57\u6570\u5E94\u5728 $0 \u5230 $1 \u5B57\u4E4B\u95F4\uFF01
\u5F53\u524D\u5B57\u6570\uFF1A$2`,"\u533F\u540D","\u6F5C\u6C34","\u5192\u6CE1","\u5410\u69FD","\u6D3B\u8DC3","\u8BDD\u75E8","\u4F20\u8BF4","\u8868\u60C5\u5305","\u641C\u7D22\u8868\u60C5\u5305"]),G0=bt(["\u66B1\u7A31","\u90F5\u7BB1","\u7DB2\u5740","\u53EF\u9078","\u66B1\u7A31\u4E0D\u80FD\u5C11\u65BC3\u500B\u5B57\u5143","\u8ACB\u586B\u5BEB\u6B63\u78BA\u7684\u90F5\u4EF6\u5730\u5740","\u6B61\u8FCE\u8A55\u8AD6","\u4F86\u767C\u8A55\u8AD6\u5427~","\u63D0\u4EA4","\u559C\u6B61","\u53D6\u6D88\u559C\u6B61","\u56DE\u8986","\u53D6\u6D88\u56DE\u8986","\u8A55\u8AD6","\u5237\u65B0","\u8F09\u5165\u66F4\u591A...","\u9810\u89BD","\u8868\u60C5","\u4E0A\u50B3\u5716\u7247","\u79D2\u524D","\u5206\u9418\u524D","\u5C0F\u6642\u524D","\u5929\u524D","\u525B\u525B","\u6B63\u5728\u4E0A\u50B3","\u767B\u9304","\u9000\u51FA","\u535A\u4E3B","\u7F6E\u9802","\u5B57",`\u8A55\u8AD6\u5B57\u6578\u61C9\u5728 $0 \u5230 $1 \u5B57\u4E4B\u9593\uFF01
\u7576\u524D\u5B57\u6578\uFF1A$2`,"\u533F\u540D","\u6F5B\u6C34","\u5192\u6CE1","\u5410\u69FD","\u6D3B\u8E8D","\u8A71\u7646","\u50B3\u8AAA","\u8868\u60C5\u5305","\u641C\u7D22\u8868\u60C5\u5305"]),O0=bt(["Apelido","Apelido n\xE3o pode ser menor que 3 bytes.","E-Mail","Por favor, confirme seu endere\xE7o de e-mail.","Website","Opcional","Comente aqui...","Nenhum coment\xE1rio, ainda.","Enviar","Like","Cancel like","Responder","Cancelar resposta","Coment\xE1rios","Refrescar","Carregar Mais...","Visualizar","Emoji","Enviar Imagem","segundos atr\xE1s","minutos atr\xE1s","horas atr\xE1s","dias atr\xE1s","agora mesmo","Enviando","Entrar","Sair","Admin","Sticky","Palavras",`Favor enviar coment\xE1rio com $0 a $1 palavras!
 N\xFAmero de palavras atuais: $2`,"An\xF4nimo","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Pesquisar GIF"]),ve=bt(["\u041F\u0441\u0435\u0432\u0434\u043E\u043D\u0438\u043C","\u041D\u0438\u043A\u043D\u0435\u0439\u043C \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 3 \u0431\u0430\u0439\u0442.","\u042D\u043B. \u0430\u0434\u0440\u0435\u0441","\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0432\u0430\u0448\u0435\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B.","\u0412\u0435\u0431-\u0441\u0430\u0439\u0442","\u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439","\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u0437\u0434\u0435\u0441\u044C...","\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432.","\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C","Like","Cancel like","\u041E\u0442\u0432\u0435\u0447\u0430\u0442\u044C","\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442","\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438","\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C","\u0417\u0430\u0433\u0440\u0443\u0437\u0438 \u0431\u043E\u043B\u044C\u0448\u0435...","\u041F\u0440\u0435\u0432\u044C\u044E","\u044D\u043C\u043E\u0434\u0437\u0438","\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435","\u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434","\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434","\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0447\u0430\u0441\u043E\u0432 \u043D\u0430\u0437\u0430\u0434","\u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434","\u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441","\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430","\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F","\u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043C\u044B","\u0410\u0434\u043C\u0438\u043D","\u041B\u0438\u043F\u043A\u0438\u0439","\u0421\u043B\u043E\u0432\u0430",`\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 \u043E\u0442 $0 \u0434\u043E $1 \u0441\u043B\u043E\u0432!
\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0441\u043B\u043E\u0432\u0430: $2`,"\u0410\u043D\u043E\u043D\u0438\u043C\u043D\u044B\u0439","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","\u041F\u043E\u0438\u0441\u043A GIF"]);const N0={zh:_e,"zh-cn":_e,"zh-CN":_e,"zh-tw":G0,"zh-TW":G0,en:we,"en-US":we,"en-us":we,jp:ue,"jp-jp":ue,"jp-JP":ue,"pt-br":O0,"pt-BR":O0,ru:ve,"ru-ru":ve,"ru-RU":ve},p5=t=>{try{t=decodeURI(t)}catch{}return t},Ur=(t="")=>t.replace(/\/$/u,""),qr=t=>/^(https?:)?\/\//.test(t),w5=t=>{const n=Ur(t);return qr(n)?n:`https://${n}`},u5=t=>Array.isArray(t)?t:!!t&&[0,t],xe=(t,n)=>typeof t=="function"?t:t!==!1&&n,ge="{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bgcolor:#1e1e1e;--waline-bgcolor-light:#272727;--waline-bgcolor-hover: #444;--waline-border-color:#333;--waline-disable-bgcolor:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bgcolor:#272727;--waline-info-color:#666}",me=(t,n)=>{let e=t.toString();for(;e.length<n;)e="0"+e;return e},_5=(t,n,e)=>{if(!t)return"";const l=typeof t=="string"?new Date(t.indexOf(" ")!==-1?t.replace(/-/g,"/"):t):t,a=n.getTime()-l.getTime(),i=Math.floor(a/864e5);if(i===0){const d=a%864e5,p=Math.floor(d/36e5);if(p===0){const w=d%36e5,u=Math.floor(w/6e4);if(u===0){const _=w%6e4;return`${Math.round(_/1e3)} ${e.seconds}`}return`${u} ${e.minutes}`}return`${p} ${e.hours}`}return i<0?e.now:i<8?`${i} ${e.days}`:(d=>{const p=me(d.getDate(),2),w=me(d.getMonth()+1,2);return`${me(d.getFullYear(),2)}-${w}-${p}`})(l)},v5=t=>{const n=nn("WALINE_EMOJI",{}),e=Boolean(/@[0-9]+\.[0-9]+\.[0-9]+/.test(t));if(e){const l=n.value[t];if(l)return Promise.resolve(l)}return fetch(`${t}/info.json`).then(l=>l.json()).then(l=>{const a=E1({folder:t},l);return e&&(n.value[t]=a),a})},K0=(t,n="",e="",l="")=>`${n?`${n}/`:""}${e}${t}${l?`.${l}`:""}`,x5={"Content-Type":"application/json"},g5=({serverURL:t,lang:n,path:e,page:l,pageSize:a,signal:i,token:d})=>{const p={};return d&&(p.Authorization=`Bearer ${d}`),fetch(`${t}/comment?path=${encodeURIComponent(e)}&pageSize=${a}&page=${l}&lang=${n}`,{signal:i,headers:p}).then(w=>w.json()).then(w=>((u,_="")=>{if(typeof u=="object"&&u.errno)throw new TypeError(`Fetch ${_} failed with ${u.errno}: ${u.errmsg}`);return u})(w,"comment list"))},W0=i=>{var d=i,{serverURL:t,lang:n,token:e,objectId:l}=d,a=te(d,["serverURL","lang","token","objectId"]);return fetch(`${t}/comment/${l}?lang=${n}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify(a)}).then(p=>p.json())},m5=t=>t.type.includes("image"),J0=t=>{const n=Array.from(t).find(m5);return n?n.getAsFile():null},k5=/\$.*?\$/,f5=/^\$(.*?)\$/,$5=/^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/,Gr=(t="",n={})=>t.replace(/:(.+?):/g,(e,l)=>n[l]?`<img class="wl-emoji" src="${n[l]}" alt="${l}">`:e),M5=(t,{emojiMap:n,highlighter:e,texRenderer:l})=>{if(c1.setOptions({highlight:e||void 0,breaks:!0,smartLists:!0,smartypants:!0}),l){const a=(i=>[{name:"blockMath",level:"block",tokenizer(d){const p=$5.exec(d);if(p!==null)return{type:"html",raw:p[0],text:i(!0,p[1])}}},{name:"inlineMath",level:"inline",start(d){const p=d.search(k5);return p!==-1?p:d.length},tokenizer(d){const p=f5.exec(d);if(p!==null)return{type:"html",raw:p[0],text:i(!1,p[1])}}}])(l);c1.use({extensions:a})}return c1.parse(Gr(t,n))};let X0=null;const x3=()=>X0||(X0=nn("USER_KEY",{}));let Y0=null;const Or=()=>Y0||(Y0=nn("WALINE_LIKE",[])),C5=c({name:"CommentBox",components:{CloseIcon:({size:t})=>O("svg",{class:"wl-close-icon",viewBox:"0 0 1024 1024",width:t,height:t},[O("path",{d:"M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z",fill:"currentColor"}),O("path",{d:"m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z",fill:"#888"})]),EmojiIcon:()=>O("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},O("path",{d:"M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z",fill:"currentColor"})),ImageIcon:()=>O("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[O("path",{d:"M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z",fill:"currentColor"}),O("path",{d:"M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z",fill:"currentColor"})]),ImageWall:o5,MarkdownIcon:()=>O("svg",{width:"16",height:"16",ariaHidden:"true"},O("path",{d:"M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z",fill:"currentColor"})),PreviewIcon:()=>O("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[O("path",{d:"M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0",fill:"currentColor"}),O("path",{d:"M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0",fill:"currentColor"})]),LoadingIcon:v3,GifIcon:()=>O("svg",{width:24,height:24,fill:"currentcolor",viewBox:"0 0 24 24"},[O("path",{style:"transform: translateY(0.5px)",d:"M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z"}),O("path",{d:"M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z"})])},props:{rootId:{type:String,default:""},replyId:{type:String,default:""},replyUser:{type:String,default:""}},emits:["submit","cancel-reply"],setup(t,{emit:n}){const e=D1("config"),l=nn("WALINE_COMMENT_BOX_EDITOR",""),a=nn("WALINE_USER_META",{nick:"",mail:"",link:""}),i=x3(),d=Z({}),p=Z(null),w=Z(null),u=Z(null),_=Z(null),g=Z(null),v=Z(null),x=Z(null),k=Z({tabs:[],map:{}}),C=Z(0),y=Z(!1),f=Z(!1),M=Z(!1),L=Z(""),b=Z(0),A=ot({loading:!0,list:[]}),U=Z(0),X=Z(!1),T=Z(""),J=Z(!1),Q=r1(()=>e.value.locale),h1=r1(()=>{var G;return Boolean((G=i.value)==null?void 0:G.token)}),E=r1(()=>e.value.imageUploader!==!1),d1=G=>{const s1=p.value,a1=s1.selectionStart,H1=s1.selectionEnd||0,C1=s1.scrollTop;l.value=s1.value.substring(0,a1)+G+s1.value.substring(H1,s1.value.length),s1.focus(),s1.selectionStart=a1+G.length,s1.selectionEnd=a1+G.length,s1.scrollTop=C1},K=G=>{const s1=`![${e.value.locale.uploading} ${G.name}]()`;return d1(s1),Promise.resolve().then(()=>e.value.imageUploader(G)).then(a1=>{l.value=l.value.replace(s1,`\r
![${G.name}](${a1})`)})},I1=()=>{var B,F,j,W,M1;const{serverURL:G,lang:s1,login:a1,wordLimit:H1,requiredMeta:C1}=e.value,_1={comment:T.value,nick:a.value.nick,mail:a.value.mail,link:a.value.link,ua:navigator.userAgent,url:e.value.path};if((B=i.value)!=null&&B.token)_1.nick=i.value.display_name,_1.mail=i.value.email,_1.link=i.value.url;else{if(a1==="force")return;if(C1.indexOf("nick")>-1&&!_1.nick)return(F=d.value.nick)==null||F.focus(),alert(Q.value.nickError);if(C1.indexOf("mail")>-1&&!_1.mail||_1.mail&&!/^\w(?:[\w._-]*\w)?@(?:\w(?:[\w-]*\w)?\.)*\w+$/.exec(_1.mail))return(j=d.value.mail)==null||j.focus(),alert(Q.value.mailError);if(!_1.comment)return void((W=p.value)==null?void 0:W.focus());_1.nick||(_1.nick=Q.value.anonymous)}if(!X.value)return alert(Q.value.wordHint.replace("$0",H1[0].toString()).replace("$1",H1[1].toString()).replace("$2",b.value.toString()));_1.comment=Gr(_1.comment,k.value.map),t.replyId&&t.rootId&&(_1.pid=t.replyId,_1.rid=t.rootId,_1.at=t.replyUser),J.value=!0,(({serverURL:x1,lang:w1,token:p1,comment:m})=>{const $={"Content-Type":"application/json"};return p1&&($.Authorization=`Bearer ${p1}`),fetch(`${x1}/comment?lang=${w1}`,{method:"POST",headers:$,body:JSON.stringify(m)}).then(z=>z.json())})({serverURL:G,lang:s1,token:(M1=i.value)==null?void 0:M1.token,comment:_1}).then(x1=>{if(J.value=!1,x1.errmsg)return alert(x1.errmsg);n("submit",x1.data),l.value="",L.value="",t.replyId&&n("cancel-reply")}).catch(x1=>{J.value=!1,alert(x1.message)})},v1=G=>{u.value.contains(G.target)||_.value.contains(G.target)||(y.value=!1),g.value.contains(G.target)||v.value.contains(G.target)||(f.value=!1)},y1=async G=>{var F;const{scrollTop:s1,clientHeight:a1,scrollHeight:H1}=G.target,C1=(a1+s1)/H1,_1=e.value.search,B=((F=x.value)==null?void 0:F.value)||"";C1<.9||A.loading||(A.loading=!0,A.list.push(..._1.more?await _1.more(B,A.list.length):await _1.search(B)),A.loading=!1,setTimeout(()=>{G.target.scrollTop=s1},50))},b1=Dl(G=>{A.list=[],y1(G)},300);return W1([e,b],([G,s1])=>{const{wordLimit:a1}=G;a1?s1<a1[0]&&a1[0]!==0?(U.value=a1[0],X.value=!1):s1>a1[1]?(U.value=a1[1],X.value=!1):(U.value=a1[1],X.value=!0):(U.value=0,X.value=!0)},{immediate:!0}),W1(f,async G=>{if(!G)return;const s1=e.value.search;x.value&&(x.value.value=""),A.loading=!0,A.list=s1.default?await s1.default():await s1.search(""),A.loading=!1}),Z1(()=>{document.body.addEventListener("click",v1),W1(()=>l.value,G=>{const{highlighter:s1,texRenderer:a1}=e.value;T.value=G,L.value=M5(G,{emojiMap:k.value.map,highlighter:s1,texRenderer:a1}),b.value=(H1=>(C1=>C1.match(/[\w\d\s\u00C0-\u024F]+/giu)||[])(H1).reduce((C1,_1)=>C1+(_1.trim()===""?0:_1.trim().split(/\s+/u).length),0)+(C1=>C1.match(/[\u4E00-\u9FA5]/gu)||[])(H1).length)(G),G?b0(p.value):b0.destroy(p.value)},{immediate:!0}),W1(()=>e.value.emoji,G=>{return(s1=Array.isArray(G)?G:[],Promise.all(s1.map(a1=>typeof a1=="string"?v5(Ur(a1)):Promise.resolve(a1))).then(a1=>{const H1={tabs:[],map:{}};return a1.forEach(C1=>{const{name:_1,folder:B,icon:F,prefix:j,type:W,items:M1}=C1;H1.tabs.push({name:_1,icon:K0(F,B,j,W),items:M1.map(x1=>{const w1=`${j||""}${x1}`;return H1.map[w1]=K0(x1,B,j,W),w1})})}),H1})).then(a1=>{k.value=a1});var s1},{immediate:!0})}),c3(()=>{document.body.removeEventListener("click",v1)}),{config:e,locale:Q,insert:d1,onChange:()=>{const G=w.value;G.files&&E.value&&K(G.files[0]).then(()=>{G.value=""})},onDrop:G=>{var s1;if((s1=G.dataTransfer)!=null&&s1.items){const a1=J0(G.dataTransfer.items);a1&&E.value&&(K(a1),G.preventDefault())}},onKeyDown:G=>{const s1=G.key;(G.ctrlKey||G.metaKey)&&s1==="Enter"&&I1()},onPaste:G=>{if(G.clipboardData){const s1=J0(G.clipboardData.items);s1&&E.value&&K(s1)}},onLogin:G=>{G.preventDefault();const{lang:s1,serverURL:a1}=e.value,H1=(window.innerWidth-450)/2,C1=(window.innerHeight-450)/2,_1=window.open(`${a1}/ui/login?lng=${encodeURIComponent(s1)}`,"_blank",`width=450,height=450,left=${H1},top=${C1},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);_1==null||_1.postMessage({type:"TOKEN",data:null},"*");const B=({data:F})=>{F&&F.type==="userInfo"&&F.data.token&&(_1==null||_1.close(),i.value=F.data,(F.data.remember?localStorage:sessionStorage).setItem("WALINE_USER",JSON.stringify(F.data)),window.removeEventListener("message",B))};window.addEventListener("message",B)},onLogout:()=>{i.value={},localStorage.setItem("WALINE_USER","null"),sessionStorage.setItem("WALINE_USER","null")},onProfile:G=>{var B;G.preventDefault();const{lang:s1,serverURL:a1}=e.value,H1=(window.innerWidth-800)/2,C1=(window.innerHeight-800)/2;(B=window.open(`${a1}/ui/profile?lng=${encodeURIComponent(s1)}`,"_blank",`width=800,height=800,left=${H1},top=${C1},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`))==null||B.postMessage({type:"TOKEN",data:i.value.token},"*");const _1=({data:F})=>{F&&F.type==="profile"&&(i.value=E1(E1({},i.value),F),[localStorage,sessionStorage].filter(j=>j.getItem("WALINE_USER")).forEach(j=>j.setItem("WALINE_USER",JSON.stringify(i))),window.removeEventListener("message",_1))};window.addEventListener("message",_1)},submitComment:I1,onImageWallScroll:y1,onGifSearch:b1,isLogin:h1,userInfo:i,isSubmitting:J,wordNumber:b,wordLimit:U,isWordNumberLegal:X,editor:l,userMeta:a,emoji:k,emojiTabIndex:C,showEmoji:y,gifData:A,showGif:f,canUploadImage:E,previewText:L,showPreview:M,inputRefs:d,editorRef:p,emojiButtonRef:u,emojiPopupRef:_,gifButtonRef:g,gifPopupRef:v,imageUploadRef:w,gifSearchInputRef:x}}}),z5={class:"wl-comment"},y5={key:0,class:"wl-login-info"},b5={class:"wl-avatar"},B5=["title"],L5=["src"],H5=["textContent"],V5={class:"wl-panel"},S5=["for","textContent"],A5=["id","name","type","onUpdate:modelValue"],j5=["placeholder"],R5={class:"wl-preview"},P5=r("hr",null,null,-1),T5=["innerHTML"],D5={class:"wl-footer"},E5={class:"wl-actions"},F5={href:"https://guides.github.com/features/mastering-markdown/",title:"Markdown Guide","aria-label":"Markdown is supported",class:"wl-action",target:"_blank",rel:"noreferrer"},I5=["title"],U5=["title"],q5=["title"],G5=["title"],O5={class:"wl-info"},N5={class:"wl-text-number"},K5={key:0},W5=u2(" \xA0/\xA0 "),J5=["textContent"],X5=["textContent"],Y5=["disabled"],Q5=["placeholder"],Z5={key:0,class:"wl-loading"},t8={key:0,class:"wl-tab-wrapper"},n8=["title","onClick"],e8=["src","alt"],r8={key:0,class:"wl-tabs"},o8=["onClick"],s8=["src","alt","title"],c8=["title"];var Nr=Qn(C5,[["render",function(t,n,e,l,a,i){const d=U1("CloseIcon"),p=U1("MarkdownIcon"),w=U1("EmojiIcon"),u=U1("GifIcon"),_=U1("ImageIcon"),g=U1("PreviewIcon"),v=U1("LoadingIcon"),x=U1("ImageWall");return o(),s("div",z5,[t.config.login!=="disable"&&t.isLogin?(o(),s("div",y5,[r("div",b5,[r("button",{class:"wl-logout-btn",title:t.locale.logout,onClick:n[0]||(n[0]=(...k)=>t.onLogout&&t.onLogout(...k))},[m1(d,{size:14})],8,B5),r("img",{src:t.userInfo.avatar,alt:"avatar"},null,8,L5)]),r("a",{href:"#",class:"wl-login-nick","aria-label":"Profile",onClick:n[1]||(n[1]=(...k)=>t.onProfile&&t.onProfile(...k)),textContent:B1(t.userInfo.display_name)},null,8,H5)])):g1("v-if",!0),r("div",V5,[t.config.login!=="force"&&t.config.meta.length&&!t.isLogin?(o(),s("div",{key:0,class:O1(["wl-header",`item${t.config.meta.length}`])},[(o(!0),s(V1,null,b2(t.config.meta,k=>(o(),s("div",{class:"wl-header-item",key:k},[r("label",{for:k,textContent:B1(t.locale[k]+(t.config.requiredMeta.includes(k)||!t.config.requiredMeta.length?"":`(${t.locale.optional})`))},null,8,S5),vn(r("input",{ref_for:!0,ref:C=>{C&&(t.inputRefs[k]=C)},id:`wl-${k}`,class:O1(["wl-input",`wl-${k}`]),name:k,type:k==="mail"?"email":"text","onUpdate:modelValue":C=>t.userMeta[k]=C},null,10,A5),[[Tc,t.userMeta[k]]])]))),128))],2)):g1("v-if",!0),vn(r("textarea",{class:"wl-editor",ref:"editorRef",id:"wl-edit",placeholder:t.replyUser?`@${t.replyUser}`:t.locale.placeholder,"onUpdate:modelValue":n[2]||(n[2]=k=>t.editor=k),onKeydown:n[3]||(n[3]=(...k)=>t.onKeyDown&&t.onKeyDown(...k)),onDrop:n[4]||(n[4]=(...k)=>t.onDrop&&t.onDrop(...k)),onPaste:n[5]||(n[5]=(...k)=>t.onPaste&&t.onPaste(...k))},null,40,j5),[[De,t.editor]]),vn(r("div",R5,[P5,r("h4",null,B1(t.locale.preview)+":",1),r("div",{class:"wl-content",innerHTML:t.previewText},null,8,T5)],512),[[a0,t.showPreview]]),r("div",D5,[r("div",E5,[r("a",F5,[m1(p)]),vn(r("button",{ref:"emojiButtonRef",class:O1(["wl-action",{actived:t.showEmoji}]),title:t.locale.emoji,onClick:n[6]||(n[6]=k=>t.showEmoji=!t.showEmoji)},[m1(w)],10,I5),[[a0,t.emoji.tabs.length]]),t.config.search?(o(),s("button",{key:0,ref:"gifButtonRef",class:O1(["wl-action",{actived:t.showGif}]),title:t.locale.gif,onClick:n[7]||(n[7]=k=>t.showGif=!t.showGif)},[m1(u)],10,U5)):g1("v-if",!0),r("input",{ref:"imageUploadRef",class:"upload",id:"wl-image-upload",type:"file",accept:".png,.jpg,.jpeg,.webp,.bmp,.gif",onChange:n[8]||(n[8]=(...k)=>t.onChange&&t.onChange(...k))},null,544),t.canUploadImage?(o(),s("label",{key:1,for:"wl-image-upload",class:"wl-action",title:t.locale.uploadImage},[m1(_)],8,q5)):g1("v-if",!0),r("button",{class:O1(["wl-action",{actived:t.showPreview}]),title:t.locale.preview,onClick:n[9]||(n[9]=k=>t.showPreview=!t.showPreview)},[m1(g)],10,G5)]),r("div",O5,[r("div",N5,[u2(B1(t.wordNumber)+" ",1),t.config.wordLimit?(o(),s("span",K5,[W5,r("span",{class:O1({illegal:!t.isWordNumberLegal}),textContent:B1(t.wordLimit)},null,10,J5)])):g1("v-if",!0),u2(" \xA0"+B1(t.locale.word),1)]),t.config.login==="disable"||t.isLogin?g1("v-if",!0):(o(),s("button",{key:0,class:"wl-btn",onClick:n[10]||(n[10]=(...k)=>t.onLogin&&t.onLogin(...k)),textContent:B1(t.locale.login)},null,8,X5)),t.config.login!=="force"||t.isLogin?(o(),s("button",{key:1,class:"wl-btn primary",title:"Cmd|Ctrl + Enter",disabled:t.isSubmitting,onClick:n[11]||(n[11]=(...k)=>t.submitComment&&t.submitComment(...k))},[t.isSubmitting?(o(),_2(v,{key:0,size:16})):(o(),s(V1,{key:1},[u2(B1(t.locale.submit),1)],64))],8,Y5)):g1("v-if",!0)]),r("div",{ref:"gifPopupRef",class:O1(["wl-gif-popup",{display:t.showGif}])},[r("input",{type:"text",placeholder:t.locale.gifSearchPlaceholder,ref:"gifSearchInputRef",onInput:n[12]||(n[12]=(...k)=>t.onGifSearch&&t.onGifSearch(...k))},null,40,Q5),m1(x,{items:t.gifData.list,"column-width":200,gap:6,onInsert:n[13]||(n[13]=k=>t.insert(k)),onScroll:t.onImageWallScroll},null,8,["items","onScroll"]),t.gifData.loading?(o(),s("div",Z5,[m1(v,{size:30})])):g1("v-if",!0)],2),r("div",{ref:"emojiPopupRef",class:O1(["wl-emoji-popup",{display:t.showEmoji}])},[(o(!0),s(V1,null,b2(t.emoji.tabs,(k,C)=>(o(),s(V1,{key:k.name},[C===t.emojiTabIndex?(o(),s("div",t8,[(o(!0),s(V1,null,b2(k.items,y=>(o(),s("button",{key:y,title:y,onClick:f=>t.insert(`:${y}:`)},[t.showEmoji?(o(),s("img",{key:0,class:"wl-emoji",src:t.emoji.map[y],alt:y,loading:"lazy",referrerPolicy:"no-referrer"},null,8,e8)):g1("v-if",!0)],8,n8))),128))])):g1("v-if",!0)],64))),128)),t.emoji.tabs.length>1?(o(),s("div",r8,[(o(!0),s(V1,null,b2(t.emoji.tabs,(k,C)=>(o(),s("button",{key:k.name,class:O1(["wl-tab",{active:t.emojiTabIndex===C}]),onClick:y=>t.emojiTabIndex=C},[r("img",{class:"wl-emoji",src:k.icon,alt:k.name,title:k.name,loading:"lazy",referrerPolicy:"no-referrer"},null,8,s8)],10,o8))),128))])):g1("v-if",!0)],2)])]),t.replyId?(o(),s("button",{key:1,class:"wl-close",title:t.locale.cancelReply,onClick:n[14]||(n[14]=k=>t.$emit("cancel-reply"))},[m1(d,{size:24})],8,c8)):g1("v-if",!0)])}],["__file","CommentBox.vue"]]);const l8=["approved","waiting","spam"],a8=c({props:{comment:{type:Object,required:!0},rootId:{type:String,required:!0},reply:{type:Object}},components:{CommentBox:Nr,DeleteIcon:()=>O("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},O("path",{d:"m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z",fill:"red"})),LikeIcon:({active:t=!1})=>O("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[O("path",{d:"M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z"+(t?"":"M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z"),fill:t?"red":"currentColor"})]),ReplyIcon:()=>O("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},O("path",{d:"M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z",fill:"currentColor"})),VerifiedIcon:()=>O("svg",{class:"verified-icon",viewBox:"0 0 1024 1024",width:"14",height:"14"},O("path",{d:"m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z",fill:"#27ae60"}))},emits:["submit","reply","like","delete","status","sticky"],setup(t){const n=D1("config"),e=Or(),l=x3(),a=r1(()=>n.value.locale),i=r1(()=>{let{link:g}=t.comment;return g?qr(g)?g:`https://${g}`:""}),d=r1(()=>e.value.includes(t.comment.objectId)),p=((g,v)=>{const x=Zl();return r1(()=>_5(g,x.value,v))})(t.comment.insertedAt,a.value),w=r1(()=>l.value.type==="administrator"),u=r1(()=>t.comment.user_id&&l.value.objectId===t.comment.user_id),_=r1(()=>{var g;return t.comment.objectId===((g=t.reply)==null?void 0:g.objectId)});return{config:n,locale:a,isReplyingCurrent:_,link:i,like:d,time:p,isAdmin:w,isOwner:u,commentStatus:l8}}}),i8=["id"],h8={class:"wl-user","aria-hidden":"true"},d8=["src"],p8={class:"wl-card"},w8={class:"wl-head"},u8=["href"],_8={key:1,class:"wl-nick"},v8=["textContent"],x8=["textContent"],g8=["textContent"],m8=["textContent"],k8=["textContent"],f8={class:"wl-comment-actions"},$8=["title"],M8=["textContent"],C8=["title"],z8={class:"wl-meta","aria-hidden":"true"},y8=["textContent"],b8=["textContent"],B8=["textContent"],L8=["innerHTML"],H8={key:0,class:"wl-admin-actions"},V8={class:"wl-comment-status"},S8=["disabled","onClick","textContent"],A8={key:1,class:"wl-reply-wrapper"},j8={key:2,class:"wl-quote"},R8=c({name:"WalineRoot",components:{CommentBox:Nr,CommentCard:Qn(a8,[["render",function(t,n,e,l,a,i){const d=U1("VerifiedIcon"),p=U1("DeleteIcon"),w=U1("LikeIcon"),u=U1("ReplyIcon"),_=U1("CommentBox"),g=U1("CommentCard",!0);return o(),s("div",{class:"wl-item",id:t.comment.objectId},[r("div",h8,[t.comment.avatar?(o(),s("img",{key:0,src:t.comment.avatar},null,8,d8)):g1("v-if",!0),t.comment.type?(o(),_2(d,{key:1})):g1("v-if",!0)]),r("div",p8,[r("div",w8,[t.link?(o(),s("a",{key:0,class:"wl-nick",href:t.link,target:"_blank",rel:"nofollow noreferrer"},B1(t.comment.nick),9,u8)):(o(),s("span",_8,B1(t.comment.nick),1)),t.comment.type==="administrator"?(o(),s("span",{key:2,class:"wl-badge",textContent:B1(t.locale.admin)},null,8,v8)):g1("v-if",!0),t.comment.label?(o(),s("span",{key:3,class:"wl-badge",textContent:B1(t.comment.label)},null,8,x8)):g1("v-if",!0),t.comment.sticky?(o(),s("span",{key:4,class:"wl-badge",textContent:B1(t.locale.sticky)},null,8,g8)):g1("v-if",!0),t.comment.level!==void 0&&t.comment.level>=0?(o(),s("span",{key:5,class:O1(`wl-badge level${t.comment.level}`),textContent:B1(t.locale[`level${t.comment.level}`]||`Level ${t.comment.level}`)},null,10,m8)):g1("v-if",!0),r("span",{class:"wl-time",textContent:B1(t.time)},null,8,k8),r("div",f8,[t.isAdmin||t.isOwner?(o(),s("button",{key:0,class:"wl-delete",onClick:n[0]||(n[0]=v=>t.$emit("delete",t.comment))},[m1(p)])):g1("v-if",!0),r("button",{class:"wl-like",onClick:n[1]||(n[1]=v=>t.$emit("like",t.comment)),title:t.like?t.locale.cancelLike:t.locale.like},[m1(w,{active:t.like},null,8,["active"]),"like"in t.comment?(o(),s("span",{key:0,textContent:B1(t.comment.like)},null,8,M8)):g1("v-if",!0)],8,$8),r("button",{class:O1(["wl-reply",{active:t.isReplyingCurrent}]),title:t.isReplyingCurrent?t.locale.cancelReply:t.locale.reply,onClick:n[2]||(n[2]=v=>t.$emit("reply",t.isReplyingCurrent?null:t.comment))},[m1(u)],10,C8)])]),r("div",z8,[t.comment.addr?(o(),s("span",{key:0,textContent:B1(t.comment.addr)},null,8,y8)):g1("v-if",!0),t.comment.browser?(o(),s("span",{key:1,textContent:B1(t.comment.browser)},null,8,b8)):g1("v-if",!0),t.comment.os?(o(),s("span",{key:2,textContent:B1(t.comment.os)},null,8,B8)):g1("v-if",!0)]),r("div",{class:"wl-content",innerHTML:t.comment.comment},null,8,L8),t.isAdmin?(o(),s("div",H8,[r("span",V8,[(o(!0),s(V1,null,b2(t.commentStatus,v=>(o(),s("button",{key:v,class:O1(`wl-btn wl-${v}`),disabled:t.comment.status===v,onClick:x=>t.$emit("status",{status:v,comment:t.comment}),textContent:B1(v)},null,10,S8))),128))]),t.isAdmin&&!t.comment.rid?(o(),s("button",{key:0,class:"wl-btn wl-sticky",onClick:n[3]||(n[3]=v=>t.$emit("sticky",t.comment))},B1(t.comment.sticky?"unsticky":"sticky"),1)):g1("v-if",!0)])):g1("v-if",!0),t.isReplyingCurrent?(o(),s("div",A8,[m1(_,{replyId:t.comment.objectId,replyUser:t.comment.nick,rootId:t.rootId,onSubmit:n[4]||(n[4]=v=>t.$emit("submit",v)),onCancelReply:n[5]||(n[5]=v=>t.$emit("reply",null))},null,8,["replyId","replyUser","rootId"])])):g1("v-if",!0),t.comment.children?(o(),s("div",j8,[(o(!0),s(V1,null,b2(t.comment.children,v=>(o(),_2(g,{key:v.objectId,comment:v,reply:t.reply,rootId:t.rootId,onReply:n[6]||(n[6]=x=>t.$emit("reply",x)),onSubmit:n[7]||(n[7]=x=>t.$emit("submit",x)),onLike:n[8]||(n[8]=x=>t.$emit("like",x)),onDelete:n[9]||(n[9]=x=>t.$emit("delete",x)),onStatus:n[10]||(n[10]=x=>t.$emit("status",x)),onSticky:n[11]||(n[11]=x=>t.$emit("sticky",x))},null,8,["comment","reply","rootId"]))),128))])):g1("v-if",!0)])],8,i8)}],["__file","CommentCard.vue"]]),LoadingIcon:v3},props:["serverURL","path","meta","requiredMeta","dark","lang","locale","pageSize","wordLimit","emoji","login","highlighter","texRenderer","imageUploader","copyright"],setup(t){const n=r1(()=>(I1=>{var v1=I1,{serverURL:k,path:C=location.pathname,lang:y="zh-CN",locale:f,emoji:M=["//unpkg.com/@waline/emojis@1.0.1/weibo"],meta:L=["nick","mail","link"],requiredMeta:b=[],dark:A=!1,pageSize:U=10,wordLimit:X,imageUploader:T,highlighter:J,texRenderer:Q,copyright:h1=!0,login:E="enable",search:d1=a5()}=v1,K=te(v1,["serverURL","path","lang","locale","emoji","meta","requiredMeta","dark","pageSize","wordLimit","imageUploader","highlighter","texRenderer","copyright","login","search"]);return E1({serverURL:w5(k),path:p5(C),locale:E1(E1({},N0[y]||N0["zh-CN"]),typeof f=="object"?f:{}),wordLimit:u5(X),meta:U0(L),requiredMeta:U0(b),imageUploader:xe(T,c5),highlighter:xe(J,h5),texRenderer:xe(Q,l5),lang:y,dark:A,emoji:M,pageSize:U,login:E,copyright:h1,search:d1},K)})(t)),e=x3(),l=Or(),a=Z("loading"),i=Z(0),d=Z(1),p=Z(0),w=Z([]),u=Z(null),_=r1(()=>{return typeof(k=n.value.dark)=="string"?k==="auto"?`@media(prefers-color-scheme:dark){body${ge}}`:`${k}${ge}`:k===!0?`:root${ge}`:"";var k});let g;(function(k,C={}){const y=Z(!1),{document:f=Nl,immediate:M=!0,manual:L=!1,id:b="vueuse_styletag_"+ ++t5}=C,A=Z(k);let U=()=>{};const X=()=>{if(!f)return;const J=f.getElementById(b)||f.createElement("style");J.type="text/css",J.id=b,C.media&&(J.media=C.media),f.head.appendChild(J),y.value||(U=W1(A,Q=>{J.innerText=Q},{immediate:!0}),y.value=!0)},T=()=>{f&&y.value&&(U(),f.head.removeChild(f.getElementById(b)),y.value=!1)};M&&!L&&X(),L||Gt(T),In(y)})(_);const v=k=>{var L;const{serverURL:C,path:y,pageSize:f}=n.value,M=new AbortController;a.value="loading",g==null||g(),g5({serverURL:C,lang:n.value.lang,path:y,pageSize:f,page:k,signal:M.signal,token:(L=e.value)==null?void 0:L.token}).then(b=>{a.value="success",i.value=b.count,w.value.push(...b.data),d.value=k,p.value=b.totalPages}).catch(b=>{b.name!=="AbortError"&&(console.error(b.message),a.value="error")}),g=M.abort.bind(M)},x=()=>{i.value=0,w.value=[],v(1)};return w2("config",n),W1(()=>t.path,x),Z1(()=>x()),{config:n,darkmodeStyle:_,i18n:r1(()=>n.value.locale),status:a,count:i,page:d,totalPages:p,data:w,reply:u,loadMore:()=>v(d.value+1),refresh:x,onReply:k=>{u.value=k},onSubmit:k=>{if(k.rid){const C=w.value.find(({objectId:y})=>y===k.rid);if(!C)return;Array.isArray(C.children)||(C.children=[]),C.children.push(k)}else w.value.unshift(k)},onStatusChange:async({comment:k,status:C})=>{var M;if(k.status===C)return;const{serverURL:y,lang:f}=n.value;await W0({serverURL:y,lang:f,token:(M=e.value)==null?void 0:M.token,objectId:k.objectId,status:C}),k.status=C},onDelete:async({objectId:k})=>{var f;if(!confirm("Are you sure you want to delete this comment?"))return;const{serverURL:C,lang:y}=n.value;await(({serverURL:M,lang:L,token:b,objectId:A})=>fetch(`${M}/comment/${A}?lang=${L}`,{method:"DELETE",headers:{Authorization:`Bearer ${b}`}}).then(U=>U.json()))({serverURL:C,lang:y,token:(f=e.value)==null?void 0:f.token,objectId:k}),w.value.some((M,L)=>M.objectId===k?(w.value=w.value.filter((b,A)=>A!==L),!0):M.children.some((b,A)=>b.objectId===k&&(w.value[L].children=M.children.filter((U,X)=>X!==A),!0)))},onSticky:async k=>{var f;if(k.rid)return;const{serverURL:C,lang:y}=n.value;await W0({serverURL:C,lang:y,token:(f=e.value)==null?void 0:f.token,objectId:k.objectId,sticky:k.sticky?0:1}),k.sticky=!k.sticky},onLike:async k=>{const{serverURL:C,lang:y}=n.value,{objectId:f}=k,M=l.value.includes(f);await(({serverURL:L,lang:b,objectId:A,like:U})=>fetch(`${L}/comment/${A}?lang=${b}`,{method:"PUT",headers:x5,body:JSON.stringify({like:U})}).then(X=>X.json()))({serverURL:C,lang:y,objectId:f,like:!M}),M?l.value=l.value.filter(L=>L!==f):(l.value=[...l.value,f],l.value.length>50&&(l.value=l.value.slice(-50))),k.like=(k.like||0)+(M?-1:1)},version:"2.6.1"}}}),P8={"data-waline":""},T8={class:"wl-count"},D8=["textContent"],E8={class:"wl-cards"},F8={key:1,class:"wl-operation"},I8=["textContent"],U8={key:0,class:"wl-loading"},q8=["textContent"],G8={class:"wl-operation"},O8=["textContent"],N8={key:3,class:"wl-power"},K8=u2(" Powered by "),W8=r("a",{href:"https://github.com/walinejs/waline",target:"_blank",rel:"noreferrer"}," Waline ",-1);var J8=Qn(R8,[["render",function(t,n,e,l,a,i){const d=U1("CommentBox"),p=U1("CommentCard"),w=U1("LoadingIcon");return o(),s("div",P8,[t.reply?g1("v-if",!0):(o(),_2(d,{key:0,onSubmit:t.onSubmit},null,8,["onSubmit"])),r("div",T8,[t.count?(o(),s("span",{key:0,class:"wl-num",textContent:B1(t.count)},null,8,D8)):g1("v-if",!0),u2(" "+B1(t.i18n.comment),1)]),r("div",E8,[(o(!0),s(V1,null,b2(t.data,u=>(o(),_2(p,{key:u.objectId,"root-id":u.objectId,comment:u,reply:t.reply,onReply:t.onReply,onSubmit:t.onSubmit,onStatus:t.onStatusChange,onDelete:t.onDelete,onSticky:t.onSticky,onLike:t.onLike},null,8,["root-id","comment","reply","onReply","onSubmit","onStatus","onDelete","onSticky","onLike"]))),128))]),t.status==="error"?(o(),s("div",F8,[r("button",{type:"button",class:"wl-btn",onClick:n[0]||(n[0]=(...u)=>t.refresh&&t.refresh(...u)),textContent:B1(t.i18n.refresh)},null,8,I8)])):(o(),s(V1,{key:2},[t.status==="loading"?(o(),s("div",U8,[m1(w,{size:30})])):t.data.length?t.page<t.totalPages?(o(),s(V1,{key:2},[g1(" Load more button "),r("div",G8,[r("button",{type:"button",class:"wl-btn",onClick:n[1]||(n[1]=(...u)=>t.loadMore&&t.loadMore(...u)),textContent:B1(t.i18n.more)},null,8,O8)])],2112)):g1("v-if",!0):(o(),s("div",{key:1,class:"wl-empty",textContent:B1(t.i18n.sofa)},null,8,q8))],64)),g1(" Copyright Information "),t.config.copyright?(o(),s("div",N8,[K8,W8,u2(" v"+B1(t.version),1)])):g1("v-if",!0)])}],["__file","Waline.vue"]]);var Q0=c({name:"Waline",props:{options:{type:Object,default(){return{}}}},setup(t){const n=ln(),{options:e}=Mt(t),l=vr(),a=r1(()=>E1({lang:l.value||"zh-CN",dark:"html.dark",path:kr(n.path)},e.value));return()=>O("div",{class:"reco-waline-wrapper"},O(J8,a.value))}}),X8=c({components:{Valine:y0,Waline:Q0},props:{hideComments:{type:Boolean,default:!0}},setup(t){const{solution:n,options:e}=_6(),{hideComments:l}=Mt(t);let a;switch(n.value){case"valine":a=y0;break;case"waline":a=Q0;break;default:a="";break}return()=>a?O(a,{options:e.value,style:`display: ${l.value?"none":"block"}`}):null}}),Y8=c({name:"ValineViews",props:{idVal:String,numStyle:Object,flagTitle:{type:String,default:"Your Article Title"}},setup(t){const n=gr(),e=ln(),{idVal:l,numStyle:a,flagTitle:i}=Mt(t),d=p=>n.value.base.slice(0,n.value.base.length-1)+p;return()=>O("span",{id:d(l.value||e.path),class:"leancloud-visitors","data-flag-title":i.value},O("a",{class:"leancloud-visitors-count",style:a.value}))}});function Q8({app:t}){t.component("Comments",n=>O(X8,E1({},n))),t.component("ValineViews",n=>O(Y8,E1({},n)))}var Z8=x2({enhance(...t){Q8(...t)}});const Kr=Symbol(""),Wr=Symbol(""),Ge=Symbol("");function uKt(){const t=D1(Wr)||{},n=D1(Ge)||{},e=D1(Kr)||{};if(!Ge)throw new Error("useSiteLocaleData() is called without provider.");const{currentRoute:l}=zt();return{classificationPosts:r1(()=>e.value[l.value.path]||{}),classificationSummary:t,posts:n}}const ta={},na=[{data:{key:"v-14ad0361",path:"/en/Cancel%20Label.html",title:"Cancel Label",lang:"English",frontmatter:{},excerpt:"",headers:[{level:3,title:"Header",slug:"header",children:[]},{level:3,title:"Entity Types",slug:"entity-types",children:[]}],git:{createdTime:1662709054e3,updatedTime:1671009161e3,contributors:[{name:"Benny",email:"772970153@qq.com",commits:2}]},filePathRelative:"en/Cancel Label.md"},key:"v-14ad0361",path:"/en/Cancel Label.html",title:"Cancel Label",lang:"English",frontmatter:{},excerpt:"",headers:[{level:3,title:"Header",slug:"header",children:[]},{level:3,title:"Entity Types",slug:"entity-types",children:[]}],content:`# Cancel Label

<table><tr><td style="text-align:center;width:80px">POST</td><td>/v1/open-api/label/cancel</td></tr></table>


### Header 

|   Label    | Required |                         Description                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   \u2713     | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   \u2713     | Api Secret, please log in to the system and find it in My Profile |

### Entity Types

**The address recognition API is currently designed to recognize the following types of entities:**

| Parameter |   Type   | Required |
| :-------: | :------: | :------: |
| order_num | [string] |    \u2713     |


:::: code-group 
::: code-group-item Curl

\`\`\`json
curl -X POST  \\
  'https://api.sandbox.shipber.com/v1/open-api/label/cancel' \\
  -H 'Content-Type:application/json' \\
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '{"order_num":"cimy-977885"}'
\`\`\`

:::

::: code-group-item Response

\`\`\`json
{
    "data": {
        "status": "",
        "order_num": "",
        "custom_order_num": "",
        "shipment": {
            "carrier_service": "UPS Ground",
            "ship_from": {
                "uuid": "22d953b7-24c4-4ae9-afb4-111cc227b01e",
                "postal_code": "66102",
                "country_code": "US",
                "state_province_code": "KS",
                "is_residential": false,
                "addresses": ["6925 Riverview Ave"],
                "city": "Kansas City",
                "address_classification": "Commercial",
                "name": "Amazon",
                "phone": "0000000000",
                "attention": "Tom"
            },
            "ship_to": {
                "postal_code": "66102",
                "country_code": "US",
                "state_province_code": "KS",
                "is_residential": false,
                "addresses": ["6925 Riverview Ave"],
                "city": "Kansas City",
                "address_classification": "Commercial",
                "name": "Amazon",
                "phone": "0000000000",
                "attention": "Tom"
            },
            "packages": [{
                "dimension": {
                    "width": 10,
                    "height": 10,
                    "length": 10,
                    "code": "IN"
                },
                "weight": {
                    "code": "LBS",
                    "value": 20
                },
                "confirmation": "None",
                "insurance": {
                    "code": "USD",
                    "value": 20
                },
                "quantity": 1,
                "reference_numbers": [{
                    "code": "",
                    "value": "Test reference"
                }]
            }],
            "package_type": {
                "type": "common",
                "name": "Package"
            },
            "pickup_date": "20201029",
            "service_code": ""
        },
        "created_at": "2020-12-16T13:05:58.094Z"
    }
}
\`\`\`

:::
::::
`,contentRendered:`<h1 id="cancel-label" tabindex="-1"><a class="header-anchor" href="#cancel-label" aria-hidden="true">#</a> Cancel Label</h1>
<table><tr><td style="text-align:center;width:80px">POST</td><td>/v1/open-api/label/cancel</td></tr></table>
<h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h3>
<table>
<thead>
<tr>
<th style="text-align:center">Label</th>
<th style="text-align:center">Required</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Api-Key</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Key, please log in to the system and find it in My Profile</td>
</tr>
<tr>
<td style="text-align:center">Api-Secret</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Secret, please log in to the system and find it in My Profile</td>
</tr>
</tbody>
</table>
<h3 id="entity-types" tabindex="-1"><a class="header-anchor" href="#entity-types" aria-hidden="true">#</a> Entity Types</h3>
<p><strong>The address recognition API is currently designed to recognize the following types of entities:</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">Parameter</th>
<th style="text-align:center">Type</th>
<th style="text-align:center">Required</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">order_num</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
</tr>
</tbody>
</table>
<CodeGroup>
<CodeGroupItem title="Curl">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>curl -X POST  \\
  'https<span class="token operator">:</span><span class="token comment">//api.sandbox.shipber.com/v1/open-api/label/cancel' \\</span>
  -H 'Content-Type<span class="token operator">:</span>application/json' \\
  -H 'Api-Key<span class="token operator">:</span>2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret<span class="token operator">:</span>qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '<span class="token punctuation">{</span><span class="token property">"order_num"</span><span class="token operator">:</span><span class="token string">"cimy-977885"</span><span class="token punctuation">}</span>'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="Response">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"order_num"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"custom_order_num"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"shipment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"carrier_service"</span><span class="token operator">:</span> <span class="token string">"UPS Ground"</span><span class="token punctuation">,</span>
            <span class="token property">"ship_from"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"22d953b7-24c4-4ae9-afb4-111cc227b01e"</span><span class="token punctuation">,</span>
                <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
                <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
                <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
                <span class="token property">"is_residential"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"6925 Riverview Ave"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
                <span class="token property">"address_classification"</span><span class="token operator">:</span> <span class="token string">"Commercial"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Amazon"</span><span class="token punctuation">,</span>
                <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0000000000"</span><span class="token punctuation">,</span>
                <span class="token property">"attention"</span><span class="token operator">:</span> <span class="token string">"Tom"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"ship_to"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
                <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
                <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
                <span class="token property">"is_residential"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"6925 Riverview Ave"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
                <span class="token property">"address_classification"</span><span class="token operator">:</span> <span class="token string">"Commercial"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Amazon"</span><span class="token punctuation">,</span>
                <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0000000000"</span><span class="token punctuation">,</span>
                <span class="token property">"attention"</span><span class="token operator">:</span> <span class="token string">"Tom"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token property">"dimension"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                    <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                    <span class="token property">"length"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"IN"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"LBS"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">20</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"confirmation"</span><span class="token operator">:</span> <span class="token string">"None"</span><span class="token punctuation">,</span>
                <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"USD"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">20</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">"reference_numbers"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"Test reference"</span>
                <span class="token punctuation">}</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"common"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Package"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"pickup_date"</span><span class="token operator">:</span> <span class="token string">"20201029"</span><span class="token punctuation">,</span>
            <span class="token property">"service_code"</span><span class="token operator">:</span> <span class="token string">""</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"created_at"</span><span class="token operator">:</span> <span class="token string">"2020-12-16T13:05:58.094Z"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/en/Cancel Label.html",pathLocale:"/en/",permalink:null,routeMeta:{title:"Cancel Label"},slug:"Cancel Label",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/en/Cancel Label.md",filePathRelative:"en/Cancel Label.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/en/Cancel Label.html.vue",componentFilePathRelative:"pages/en/Cancel Label.html.vue",componentFileChunkName:"v-14ad0361",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/en/Cancel Label.html.js",dataFilePathRelative:"pages/en/Cancel Label.html.js",dataFileChunkName:"v-14ad0361",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/en/Cancel Label.html",htmlFilePathRelative:"en/Cancel Label.html"},{data:{key:"v-71f0d9f2",path:"/en/Create%20Shipment%20from%20Quote.html",title:"Create Shipment from Quote",lang:"English",frontmatter:{},excerpt:"",headers:[{level:3,title:"Header",slug:"header",children:[]},{level:3,title:"Entity Types",slug:"entity-types",children:[]},{level:3,title:"Create Return Label with Outgoing Label",slug:"create-return-label-with-outgoing-label",children:[]}],git:{createdTime:1673977295e3,updatedTime:1699199434e3,contributors:[{name:"Benny",email:"772970153@qq.com",commits:5},{name:"carpcai",email:"carp.cai@adber.com",commits:1}]},filePathRelative:"en/Create Shipment from Quote.md"},key:"v-71f0d9f2",path:"/en/Create Shipment from Quote.html",title:"Create Shipment from Quote",lang:"English",frontmatter:{},excerpt:"",headers:[{level:3,title:"Header",slug:"header",children:[]},{level:3,title:"Entity Types",slug:"entity-types",children:[]},{level:3,title:"Create Return Label with Outgoing Label",slug:"create-return-label-with-outgoing-label",children:[]}],content:`# Create Shipment from Quote

<table><tr><td style="text-align:center;width:80px">POST</td><td>/v1/open-api/label</td></tr></table>

### Header

|   Label    | Required |                         Description                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   \u2713     | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   \u2713     | Api Secret, please log in to the system and find it in My Profile |

### Entity Types

**The address recognition API is currently designed to recognize the following types of entities:**


| Parameter                  |   Type    | Required | Description                                                  |
| :------------------------- | :-------: | :------: | ------------------------------------------------------------ |
| rate_id | [string] | \u2713 | Service unique id.|
|custom_order_num|[string]| \u2713 |   |
| shipment                   | [object]  |    \u2713     |                       |
| \uFE42ship_from                | [object]  |          | -                                                            |
| \uFE42\uFE42uuid                   |  [array]  |          | Address unique id.If you want to improve the accuracy of the ship from address, you can choose to send only uuid.<br>[Click](Warehouse%20Address.md) to see how to get uuid.<br>Example:22d953b7-24c4-4ae9-afb4-111cc227b01e |
| \uFE42\uFE42postal_code            | [string]  |    \u2713     | Format [xxxxx] or [xxxxx-xxxx]<br>Example:90045-6275                                                   |
| \uFE42\uFE42country_code           | [string]  |    \u2713     | This is the two-letter country code.<br>Example:US                                                    |
| \uFE42\uFE42state_province_code | [string]  |    \u2713     | This is the two-letter state code.<br>Example:CA                |
| \uFE42\uFE42is_residential         | [boolean] |          | Indicate whether this address is residential (as opposed to commercial).<br>Example:false |
| \uFE42\uFE42addresses              |  [array]  |          |       This is the combination of number, street name, etc. Maximum length per line is 35.Note:At least one line is required.<br>Example:6925 Riverview Ave                       |
| \uFE42\uFE42city                   | [string]  |    \u2713     |                  City Name.<br>Example:Kansas City                                           |
| \uFE42\uFE42name                   | [string]  |          | Specify the shipper name.Maximum length is 35 characters.<br>Example:Amazon                 |
| \uFE42\uFE42phone                  | [string] |          |  Specify the shipper phone number. At least 10 digits.<br>Example:1000000000                                       |
| \uFE42\uFE42attention              | [string]  |    \u2713     | Note.Maximum length is 35 characters.<br>Example:Ann                        |
| \uFE42ship_to                  | [object]  |    \u2713     | -                                                            |
| \uFE42\uFE42addresses              |  [array]  |          |      This is the combination of number, street name, etc. Maximum length per line is 35.Note:At least one line is required.<br>Example:6925 Riverview Ave                      |
| \uFE42\uFE42city                   | [string]  |    \u2713     | City Name.<br>Example: PENFIELD     |
| \uFE42\uFE42state_province_code    | [string]  |    \u2713     | This is the two-letter state code.<br>Example:NY      |
| \uFE42\uFE42postal_code            | [string]  |    \u2713     |      Format :[xxxxx] or [xxxxx-xxxx]<br>Example:14526               |
| \uFE42\uFE42country_code           | [string]  |    \u2713     |  This is the two-letter country code.<br>Example:US                          |
| \uFE42\uFE42name                   | [string]  |          | Specify the recipient name.Maximum length is 35 characters.<br>Example:Ann              |
| \uFE42\uFE42phone                  | [string]  |          | Specify the recipient phone number. At least 10 digits.<br>Example:(999)-999-9999       |
| \uFE42\uFE42phone_ext              | [string]  |          | Maximum length is 4 characters.<br>Example:1234|
| \uFE42\uFE42is_residential         | [boolean] |          | Indicate whether this address is residential (as opposed to commercial)<br>Example:false |
| \uFE42\uFE42attention              | [string]  |          | Note.Maximum length is 35 characters.<br>Example:Ann                    |
| \uFE42packages                 |  [array]  |    \u2713     |           |
| \uFE42\uFE42dimension              | [object]  |    \u2713     |   Indicate the dimensions of the package.<br>Note: The maximum/minimum dimension values varies based on the services and the packaging types.               |
| \uFE42\uFE42\uFE42width                | [number]  |    \u2713     | Indicate the width of the package.<br>This value allows 2 explicit decimal position.<br>Example:20.01        |
| \uFE42\uFE42\uFE42height               | [number]  |    \u2713     | Indicate the height of the package.<br>This value allows 2 explicit decimal position.<br>Example:20.01|
| \uFE42\uFE42\uFE42length               | [number]  |    \u2713     |   Indicate the length of the package. <br>This value allows 2 explicit decimal position.<br>Example:20.01             |
| \uFE42\uFE42\uFE42code                 | [string]  |    \u2713     | Indicate the Unit of measure for the provided dimensions.<br>Valid Values are:in/cm<br>Example:in                             |
| \uFE42\uFE42weight                 | [object]  |    \u2713     |  Indicate the weight of the package.      |
| \uFE42\uFE42\uFE42code                 | [string]  |    \u2713     |  This is the package weight unit.<br>Valid Values are:lb/oz/g/kg<br>Example:lb |
| \uFE42\uFE42\uFE42value                | [number]  |    \u2713     | This value allows 2 explicit decimal position.<br>Example:68.25   |
| \uFE42\uFE42insurance              | [object]  |          |   Indicate the insurance       |
| \uFE42\uFE42\uFE42code                 | [string]  |          | This is the currency code for the amount.<br>Example:USD          |
| \uFE42\uFE42\uFE42value                | [number]  |          | This value allows 2 explicit decimal position.<br>Example:300.01  |
| \uFE42\uFE42confirmation           | [string]  |    \u2713     | Indicate the Signature Type.[Click here](Conformation.md) to see the confirmation supported by the service provider.<br>Example:None     |
| \uFE42\uFE42quantity               | [number]  |    \u2713     | Package quantity<br>Example:1      |
| \uFE42\uFE42reference_numbers   |  [array]  |    \u2713     | Reference information|
| \uFE42\uFE42\uFE42code              | [string]  |    \u2713     |   This is a customer reference type. [Click here](Reference.md) to see the reference type supported by the service provider.<br>Example:INVOICE       |
| \uFE42\uFE42\uFE42value             | [object]  |    \u2713     |     Maximum length for all customer references is 40 characters.<br>Example:P84746-KMD        |
| \uFE42package_type          | [object]  |    \u2713     |  Specify the packaging used.[Click here](PackageType.md) to see Package Types.    |
| \uFE42\uFE42type                | [string]  |    \u2713     | Example:common              |
| \uFE42\uFE42name                | [string]  |    \u2713     | Example:Package   |
| \uFE42label_specification   | [object]  |         | Label specification                                                                                                               |
| \uFE42\uFE42label_format         | [string]  |         | Example\uFF1Apdf \u3002option\uFF1Azpl , pdf                                                                                                                                                |
| \uFE42pickup_date           | [string]  |    \u2713     |                               This is the shipment date. Format :[yyyymmdd]<br>Example:20221001                           |


:::: code-group
::: code-group-item Curl

\`\`\`json
curl -X POST  \\
  'https://api.sandbox.shipber.com/v1/open-api/label' \\
  -H 'Content-Type:application/json' \\
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '{
    "rate_id": "eyJzZXJ2aWNlQ29kZSI6InVwc19ncm91bmQiLCJjaGFpbklkIjoyMDAzLCJwYWNrYWdlVHlwZSI6IlBhY2thZ2UifQ==",
    "custom_order_num": "cimy-977885",
    "shipment": {
        "ship_from": {
            "uuid": "7b572b8d-08a3-4cc7-a711-1aae28e9ffcf"
        },
        "ship_to": {
            "city": "Kansas City",
            "name": "Test Company",
            "addresses": [
                "6925 Riverview Ave"
            ],
            "postal_code": "66102",
            "country_code": "US",
            "state_province_code": "KS",
            "phone": "0123456789"
        },
        "packages": [
            {
                "dimension": {
                    "width": 7,
                    "height": 13,
                    "length": 4,
                    "code": "IN"
                },
                "weight": {
                    "code": "lb",
                    "value": 6
                },
                "confirmation": "None",
                "quantity": 1,
                "reference_numbers": [
                    {
                        "code": "reference #1",
                        "value": "1"
                    }
                ]
            }
        ],
        "package_type": {
            "type": "common",
            "name": "Package"
        },
        "label_specification": {
            "label_format": "pdf"
        },
        "pickup_date": "20211010"
    }
}'
\`\`\`
:::

::: code-group-item Response

\`\`\`json
{
    "data": {
        "status": "Printing",
        "order_num": "ST161853120081597000",
        "shipment": {
            "ship_from": {
                "city": "Kansas City",
                "name": "Test Company",
                "email": "123456@gmail.com",
                "addresses": ["6925 Riverview Ave"],
                "postal_code": "66102",
                "country_code": "US",
                "is_residential": true,
                "state_province_code": "KS",
                "attention": "",
                "phone": "0123456789"
            },
            "ship_to": {
                "country_code": "US",
                "phone": "8888888888",
                "name": "Test Company",
                "addresses": ["6925 Riverview Ave"],
                "city": "Kansas City",
                "state_province_code": "KS",
                "postal_code": "66102"
            },
            "packages": [{
                "dimension": {
                    "width": 7,
                    "height": 13,
                    "length": 4,
                    "code": "IN"
                },
                "weight": {
                    "code": "LBS",
                    "value": 6
                },
                "confirmation": "Delivery",
                "insurance": {
                    "code": "USD",
                    "value": 20
                },
                "quantity": 1
            }],
            "package_type": {
                "type": "common",
                "name": "Package"
            },
            "label_specification": {
                "label_format": "pdf"
            },
            "pickup_date": "20210416",
            "service_code": "fedex_ground"
        },
        "created_at": "2021-04-16T04:30:28.632Z",
        "custom_order_num": "cimy-15913"
    }
}
\`\`\`

:::
::::

### Create Return Label with Outgoing Label
  You can create return labels by setting is_return_label to true.


:::: code-group
::: code-group-item Curl

\`\`\`json
curl -X POST  \\
  'https://api.sandbox.shipber.com/v1/open-api/label' \\
  -H 'Content-Type:application/json' \\
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '{
    "is_return_label":true,
    "rma_number": "123",
    "rma_reason": "Other",
    "rate_id": "eyJjaGFpbklkIjo0MTksInNlcnZpY2VDb2RlIjoiZmVkZXhfZ3JvdW5kIiwicGFja2FnZVR5cGUiOiJQYWNrYWdlIn0",
    "custom_order_num": "cimy-977885",
    "shipment": {
        "ship_from": {
            "city": "Kansas City",
            "name": "Test Company",
            "addresses": [
                "6925 Riverview Ave"
            ],
            "postal_code": "90045",
            "country_code": "US",
            "state_province_code": "KS",
            "phone": "0123456789"
        },
        "ship_to": {
            "uuid": "7b572b8d-08a3-4cc7-a711-1aae28e9ffcf"
        },
        "packages": [
            {
                "dimension": {
                    "width": 7,
                    "height": 13,
                    "length": 4,
                    "code": "IN"
                },
                "weight": {
                    "code": "lb",
                    "value": 6
                },
                "confirmation": "None",
                "quantity": 1,
                "reference_numbers": [
                    {
                        "code": "reference #1",
                        "value": "1"
                    }
                ]
            }
        ],
        "package_type": {
            "type": "common",
            "name": "Package"
        },
        "label_specification": {
            "label_format": "pdf"
        },
        "pickup_date": "20211010"
    }
}'
\`\`\`
:::

::: code-group-item Response

\`\`\`json
{
    "data": {
        "status": "Printing",
        "order_num": "ST161853120081597000",
        "shipment": {
            "ship_from": {
                "country_code": "US",
                "phone": "8888888888",
                "name": "Test Company",
                "addresses": ["6925 Riverview Ave"],
                "city": "Kansas City",
                "state_province_code": "KS",
                "postal_code": "66102",
                "attention": ""
            },
            "ship_to": {
                "city": "Kansas City",
                "name": "Test Company",
                "email": "123456@gmail.com",
                "addresses": ["6925 Riverview Ave"],
                "postal_code": "90045",
                "country_code": "US",
                "is_residential": true,
                "state_province_code": "KS",
                "attention": "",
                "phone": "0123456789"
            },
            "packages": [{
                "dimension": {
                    "width": 7,
                    "height": 13,
                    "length": 4,
                    "code": "IN"
                },
                "weight": {
                    "code": "LBS",
                    "value": 6
                },
                "confirmation": "Delivery",
                "insurance": {
                    "code": "USD",
                    "value": 20
                },
                "quantity": 1
            }],
            "package_type": {
                "type": "common",
                "name": "Package"
            },
            "pickup_date": "20210416",
            "service_code": "fedex_ground"
        },
        "created_at": "2021-04-16T04:30:28.632Z",
        "custom_order_num": "cimy-15913"
    }
}
\`\`\`

:::
::::



`,contentRendered:`<h1 id="create-shipment-from-quote" tabindex="-1"><a class="header-anchor" href="#create-shipment-from-quote" aria-hidden="true">#</a> Create Shipment from Quote</h1>
<table><tr><td style="text-align:center;width:80px">POST</td><td>/v1/open-api/label</td></tr></table>
<h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h3>
<table>
<thead>
<tr>
<th style="text-align:center">Label</th>
<th style="text-align:center">Required</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Api-Key</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Key, please log in to the system and find it in My Profile</td>
</tr>
<tr>
<td style="text-align:center">Api-Secret</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Secret, please log in to the system and find it in My Profile</td>
</tr>
</tbody>
</table>
<h3 id="entity-types" tabindex="-1"><a class="header-anchor" href="#entity-types" aria-hidden="true">#</a> Entity Types</h3>
<p><strong>The address recognition API is currently designed to recognize the following types of entities:</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">Parameter</th>
<th style="text-align:center">Type</th>
<th style="text-align:center">Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">rate_id</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Service unique id.</td>
</tr>
<tr>
<td style="text-align:left">custom_order_num</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">shipment</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">\uFE42ship_from</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center"></td>
<td>-</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42uuid</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center"></td>
<td>Address unique id.If you want to improve the accuracy of the ship from address, you can choose to send only uuid.<br><RouterLink to="/en/Warehouse%20Address.html">Click</RouterLink> to see how to get uuid.<br>Example:22d953b7-24c4-4ae9-afb4-111cc227b01e</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42postal_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Format [xxxxx] or [xxxxx-xxxx]<br>Example:90045-6275</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42country_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>This is the two-letter country code.<br>Example:US</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42state_province_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>This is the two-letter state code.<br>Example:CA</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42is_residential</td>
<td style="text-align:center">[boolean]</td>
<td style="text-align:center"></td>
<td>Indicate whether this address is residential (as opposed to commercial).<br>Example:false</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42addresses</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center"></td>
<td>This is the combination of number, street name, etc. Maximum length per line is 35.Note:At least one line is required.<br>Example:6925 Riverview Ave</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42city</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>City Name.<br>Example:Kansas City</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42name</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Specify the shipper name.Maximum length is 35 characters.<br>Example:Amazon</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42phone</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Specify the shipper phone number. At least 10 digits.<br>Example:1000000000</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42attention</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Note.Maximum length is 35 characters.<br>Example:Ann</td>
</tr>
<tr>
<td style="text-align:left">\uFE42ship_to</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>-</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42addresses</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center"></td>
<td>This is the combination of number, street name, etc. Maximum length per line is 35.Note:At least one line is required.<br>Example:6925 Riverview Ave</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42city</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>City Name.<br>Example: PENFIELD</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42state_province_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>This is the two-letter state code.<br>Example:NY</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42postal_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Format :[xxxxx] or [xxxxx-xxxx]<br>Example:14526</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42country_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>This is the two-letter country code.<br>Example:US</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42name</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Specify the recipient name.Maximum length is 35 characters.<br>Example:Ann</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42phone</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Specify the recipient phone number. At least 10 digits.<br>Example:(999)-999-9999</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42phone_ext</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Maximum length is 4 characters.<br>Example:1234</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42is_residential</td>
<td style="text-align:center">[boolean]</td>
<td style="text-align:center"></td>
<td>Indicate whether this address is residential (as opposed to commercial)<br>Example:false</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42attention</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Note.Maximum length is 35 characters.<br>Example:Ann</td>
</tr>
<tr>
<td style="text-align:left">\uFE42packages</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center">\u2713</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42dimension</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>Indicate the dimensions of the package.<br>Note: The maximum/minimum dimension values varies based on the services and the packaging types.</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42width</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>Indicate the width of the package.<br>This value allows 2 explicit decimal position.<br>Example:20.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42height</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>Indicate the height of the package.<br>This value allows 2 explicit decimal position.<br>Example:20.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42length</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>Indicate the length of the package. <br>This value allows 2 explicit decimal position.<br>Example:20.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Indicate the Unit of measure for the provided dimensions.<br>Valid Values are:in/cm<br>Example:in</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42weight</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>Indicate the weight of the package.</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>This is the package weight unit.<br>Valid Values are:lb/oz/g/kg<br>Example:lb</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42value</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>This value allows 2 explicit decimal position.<br>Example:68.25</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42insurance</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center"></td>
<td>Indicate the insurance</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>This is the currency code for the amount.<br>Example:USD</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42value</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center"></td>
<td>This value allows 2 explicit decimal position.<br>Example:300.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42confirmation</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Indicate the Signature Type.<RouterLink to="/en/Conformation.html">Click here</RouterLink> to see the confirmation supported by the service provider.<br>Example:None</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42quantity</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>Package quantity<br>Example:1</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42reference_numbers</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center">\u2713</td>
<td>Reference information</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>This is a customer reference type. <RouterLink to="/en/Reference.html">Click here</RouterLink> to see the reference type supported by the service provider.<br>Example:INVOICE</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42value</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>Maximum length for all customer references is 40 characters.<br>Example:P84746-KMD</td>
</tr>
<tr>
<td style="text-align:left">\uFE42package_type</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>Specify the packaging used.<RouterLink to="/en/PackageType.html">Click here</RouterLink> to see Package Types.</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42type</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Example:common</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42name</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Example:Package</td>
</tr>
<tr>
<td style="text-align:left">\uFE42label_specification</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center"></td>
<td>Label specification</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42label_format</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Example\uFF1Apdf \u3002option\uFF1Azpl , pdf</td>
</tr>
<tr>
<td style="text-align:left">\uFE42pickup_date</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>This is the shipment date. Format :[yyyymmdd]<br>Example:20221001</td>
</tr>
</tbody>
</table>
<CodeGroup>
<CodeGroupItem title="Curl">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>curl -X POST  \\
  'https<span class="token operator">:</span><span class="token comment">//api.sandbox.shipber.com/v1/open-api/label' \\</span>
  -H 'Content-Type<span class="token operator">:</span>application/json' \\
  -H 'Api-Key<span class="token operator">:</span>2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret<span class="token operator">:</span>qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '<span class="token punctuation">{</span>
    <span class="token property">"rate_id"</span><span class="token operator">:</span> <span class="token string">"eyJzZXJ2aWNlQ29kZSI6InVwc19ncm91bmQiLCJjaGFpbklkIjoyMDAzLCJwYWNrYWdlVHlwZSI6IlBhY2thZ2UifQ=="</span><span class="token punctuation">,</span>
    <span class="token property">"custom_order_num"</span><span class="token operator">:</span> <span class="token string">"cimy-977885"</span><span class="token punctuation">,</span>
    <span class="token property">"shipment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"ship_from"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"7b572b8d-08a3-4cc7-a711-1aae28e9ffcf"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"ship_to"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Test Company"</span><span class="token punctuation">,</span>
            <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">"6925 Riverview Ave"</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
            <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
            <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
            <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0123456789"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">"dimension"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                    <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
                    <span class="token property">"length"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"IN"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"lb"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">6</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"confirmation"</span><span class="token operator">:</span> <span class="token string">"None"</span><span class="token punctuation">,</span>
                <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">"reference_numbers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"reference #1"</span><span class="token punctuation">,</span>
                        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"1"</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"common"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Package"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"label_specification"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"label_format"</span><span class="token operator">:</span> <span class="token string">"pdf"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"pickup_date"</span><span class="token operator">:</span> <span class="token string">"20211010"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="Response">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"Printing"</span><span class="token punctuation">,</span>
        <span class="token property">"order_num"</span><span class="token operator">:</span> <span class="token string">"ST161853120081597000"</span><span class="token punctuation">,</span>
        <span class="token property">"shipment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"ship_from"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Test Company"</span><span class="token punctuation">,</span>
                <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"123456@gmail.com"</span><span class="token punctuation">,</span>
                <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"6925 Riverview Ave"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
                <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
                <span class="token property">"is_residential"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
                <span class="token property">"attention"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0123456789"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"ship_to"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
                <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"8888888888"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Test Company"</span><span class="token punctuation">,</span>
                <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"6925 Riverview Ave"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
                <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
                <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token property">"dimension"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                    <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
                    <span class="token property">"length"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"IN"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"LBS"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">6</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"confirmation"</span><span class="token operator">:</span> <span class="token string">"Delivery"</span><span class="token punctuation">,</span>
                <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"USD"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">20</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"common"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Package"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"label_specification"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"label_format"</span><span class="token operator">:</span> <span class="token string">"pdf"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"pickup_date"</span><span class="token operator">:</span> <span class="token string">"20210416"</span><span class="token punctuation">,</span>
            <span class="token property">"service_code"</span><span class="token operator">:</span> <span class="token string">"fedex_ground"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"created_at"</span><span class="token operator">:</span> <span class="token string">"2021-04-16T04:30:28.632Z"</span><span class="token punctuation">,</span>
        <span class="token property">"custom_order_num"</span><span class="token operator">:</span> <span class="token string">"cimy-15913"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="create-return-label-with-outgoing-label" tabindex="-1"><a class="header-anchor" href="#create-return-label-with-outgoing-label" aria-hidden="true">#</a> Create Return Label with Outgoing Label</h3>
<p>You can create return labels by setting is_return_label to true.</p>
<CodeGroup>
<CodeGroupItem title="Curl">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>curl -X POST  \\
  'https<span class="token operator">:</span><span class="token comment">//api.sandbox.shipber.com/v1/open-api/label' \\</span>
  -H 'Content-Type<span class="token operator">:</span>application/json' \\
  -H 'Api-Key<span class="token operator">:</span>2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret<span class="token operator">:</span>qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '<span class="token punctuation">{</span>
    <span class="token property">"is_return_label"</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"rma_number"</span><span class="token operator">:</span> <span class="token string">"123"</span><span class="token punctuation">,</span>
    <span class="token property">"rma_reason"</span><span class="token operator">:</span> <span class="token string">"Other"</span><span class="token punctuation">,</span>
    <span class="token property">"rate_id"</span><span class="token operator">:</span> <span class="token string">"eyJjaGFpbklkIjo0MTksInNlcnZpY2VDb2RlIjoiZmVkZXhfZ3JvdW5kIiwicGFja2FnZVR5cGUiOiJQYWNrYWdlIn0"</span><span class="token punctuation">,</span>
    <span class="token property">"custom_order_num"</span><span class="token operator">:</span> <span class="token string">"cimy-977885"</span><span class="token punctuation">,</span>
    <span class="token property">"shipment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"ship_from"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Test Company"</span><span class="token punctuation">,</span>
            <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">"6925 Riverview Ave"</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"90045"</span><span class="token punctuation">,</span>
            <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
            <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
            <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0123456789"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"ship_to"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"7b572b8d-08a3-4cc7-a711-1aae28e9ffcf"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">"dimension"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                    <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
                    <span class="token property">"length"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"IN"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"lb"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">6</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"confirmation"</span><span class="token operator">:</span> <span class="token string">"None"</span><span class="token punctuation">,</span>
                <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">"reference_numbers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"reference #1"</span><span class="token punctuation">,</span>
                        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"1"</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"common"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Package"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"label_specification"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"label_format"</span><span class="token operator">:</span> <span class="token string">"pdf"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"pickup_date"</span><span class="token operator">:</span> <span class="token string">"20211010"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="Response">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"Printing"</span><span class="token punctuation">,</span>
        <span class="token property">"order_num"</span><span class="token operator">:</span> <span class="token string">"ST161853120081597000"</span><span class="token punctuation">,</span>
        <span class="token property">"shipment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"ship_from"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
                <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"8888888888"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Test Company"</span><span class="token punctuation">,</span>
                <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"6925 Riverview Ave"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
                <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
                <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
                <span class="token property">"attention"</span><span class="token operator">:</span> <span class="token string">""</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"ship_to"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Test Company"</span><span class="token punctuation">,</span>
                <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"123456@gmail.com"</span><span class="token punctuation">,</span>
                <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"6925 Riverview Ave"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"90045"</span><span class="token punctuation">,</span>
                <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
                <span class="token property">"is_residential"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
                <span class="token property">"attention"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0123456789"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token property">"dimension"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                    <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
                    <span class="token property">"length"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"IN"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"LBS"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">6</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"confirmation"</span><span class="token operator">:</span> <span class="token string">"Delivery"</span><span class="token punctuation">,</span>
                <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"USD"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">20</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"common"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Package"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"pickup_date"</span><span class="token operator">:</span> <span class="token string">"20210416"</span><span class="token punctuation">,</span>
            <span class="token property">"service_code"</span><span class="token operator">:</span> <span class="token string">"fedex_ground"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"created_at"</span><span class="token operator">:</span> <span class="token string">"2021-04-16T04:30:28.632Z"</span><span class="token punctuation">,</span>
        <span class="token property">"custom_order_num"</span><span class="token operator">:</span> <span class="token string">"cimy-15913"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[{raw:"Warehouse%20Address.md",relative:"en/Warehouse%20Address.md",absolute:"/en/Warehouse%20Address.md"},{raw:"Conformation.md",relative:"en/Conformation.md",absolute:"/en/Conformation.md"},{raw:"Reference.md",relative:"en/Reference.md",absolute:"/en/Reference.md"},{raw:"PackageType.md",relative:"en/PackageType.md",absolute:"/en/PackageType.md"}],pathInferred:"/en/Create Shipment from Quote.html",pathLocale:"/en/",permalink:null,routeMeta:{title:"Create Shipment from Quote"},slug:"Create Shipment from Quote",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/en/Create Shipment from Quote.md",filePathRelative:"en/Create Shipment from Quote.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/en/Create Shipment from Quote.html.vue",componentFilePathRelative:"pages/en/Create Shipment from Quote.html.vue",componentFileChunkName:"v-71f0d9f2",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/en/Create Shipment from Quote.html.js",dataFilePathRelative:"pages/en/Create Shipment from Quote.html.js",dataFileChunkName:"v-71f0d9f2",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/en/Create Shipment from Quote.html",htmlFilePathRelative:"en/Create Shipment from Quote.html"},{data:{key:"v-379b18f6",path:"/en/Create%20Shipment.html",title:"Create Shipment",lang:"English",frontmatter:{},excerpt:"",headers:[{level:3,title:"Header",slug:"header",children:[]},{level:3,title:"Entity Types",slug:"entity-types",children:[]}],git:{createdTime:1673977295e3,updatedTime:1699199434e3,contributors:[{name:"Benny",email:"772970153@qq.com",commits:8},{name:"carpcai",email:"carp.cai@adber.com",commits:1}]},filePathRelative:"en/Create Shipment.md"},key:"v-379b18f6",path:"/en/Create Shipment.html",title:"Create Shipment",lang:"English",frontmatter:{},excerpt:"",headers:[{level:3,title:"Header",slug:"header",children:[]},{level:3,title:"Entity Types",slug:"entity-types",children:[]}],content:`# Create Shipment

<table><tr><td style="text-align:center;width:80px">POST</td><td>/open-api/v2/label</td></tr></table>

### Header

|   Label    | Required |                         Description                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   \u2713     | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   \u2713     | Api Secret, please log in to the system and find it in My Profile |

### Entity Types

**The address recognition API is currently designed to recognize the following types of entities:**


| Parameter                  |   Type    | Required |Description                                 |
| :---------------------- | :-------: | :------: | ------------------------------------------------------------ |
|custom_order_num|[string]| \u2713 |   |
| shipment                   | [object]  |    \u2713     |                       |
| \uFE42\uFE42carrier | [string] |  | Carrier service provider code, this field will filter out the service of this service provider and create a label "If service are more than one, System will use the lowest price service to create a label." <br>Example: ups,fedex|
| \uFE42\uFE42service_code             | [string]  |          | Indicate the carrier service type used for this shipment.[Click](Service_Code.md) here to see Service Types <br>Example:ups_ground|
| \uFE42ship_from                | [object]  |          | -                                                            |
| \uFE42\uFE42uuid                   |  [array]  |          | Address unique id.If you want to improve the accuracy of the ship from address, you can choose to send only uuid.<br>[Click](Warehouse%20Address.md) to see how to get uuid.<br>Example:22d953b7-24c4-4ae9-afb4-111cc227b01e |
| \uFE42\uFE42postal_code            | [string]  |    \u2713     | Format [xxxxx] or [xxxxx-xxxx]<br>Example:90045-6275                                                   |
| \uFE42\uFE42country_code           | [string]  |    \u2713     | This is the two-letter country code.<br>Example:US                                                    |
| \uFE42\uFE42state_province_code | [string]  |    \u2713     | This is the two-letter state code.<br>Example:CA                |
| \uFE42\uFE42is_residential         | [boolean] |          | Indicate whether this address is residential (as opposed to commercial).<br>Example:false |
| \uFE42\uFE42addresses              |  [array]  |          |       This is the combination of number, street name, etc. Maximum length per line is 35.Note:At least one line is required.<br>Example:6925 Riverview Ave                       |
| \uFE42\uFE42city                   | [string]  |    \u2713     |                  City Name.<br>Example:Kansas City                                           |
| \uFE42\uFE42name                   | [string]  |          | Specify the shipper name.Maximum length is 35 characters.<br>Example:Amazon                 |
| \uFE42\uFE42phone                  | [string] |          |  Specify the shipper phone number. At least 10 digits.<br>Example:1000000000                                       |
| \uFE42\uFE42attention              | [string]  |    \u2713     | Note.Maximum length is 35 characters.<br>Example:Ann                        |
| \uFE42ship_to                  | [object]  |    \u2713     | -                                                            |
| \uFE42\uFE42addresses              |  [array]  |          |      This is the combination of number, street name, etc. Maximum length per line is 35.Note:At least one line is required.<br>Example:6925 Riverview Ave                      |
| \uFE42\uFE42city                   | [string]  |    \u2713     | City Name.<br>Example: PENFIELD     |
| \uFE42\uFE42state_province_code    | [string]  |    \u2713     | This is the two-letter state code.<br>Example:NY      |
| \uFE42\uFE42postal_code            | [string]  |    \u2713     |      Format :[xxxxx] or [xxxxx-xxxx]<br>Example:14526               |
| \uFE42\uFE42country_code           | [string]  |    \u2713     |  This is the two-letter country code.<br>Example:US                          |
| \uFE42\uFE42name                   | [string]  |          | Specify the recipient name.Maximum length is 35 characters.<br>Example:Ann              |
| \uFE42\uFE42phone                  | [string]  |          | Specify the recipient phone number. At least 10 digits.<br>Example:(999)-999-9999       |
| \uFE42\uFE42phone_ext              | [string]  |          | Maximum length is 4 characters.<br>Example:1234|
| \uFE42\uFE42is_residential         | [boolean] |          | Indicate whether this address is residential (as opposed to commercial)<br>Example:false |
| \uFE42\uFE42attention              | [string]  |          | Note.Maximum length is 35 characters.<br>Example:Ann                    |
| \uFE42packages                 |  [array]  |    \u2713     |           |
| \uFE42\uFE42dimension              | [object]  |    \u2713     |   Indicate the dimensions of the package.<br>Note: The maximum/minimum dimension values varies based on the services and the packaging types.               |
| \uFE42\uFE42\uFE42width                | [number]  |    \u2713     | Indicate the width of the package.<br>This value allows 2 explicit decimal position.<br>Example:20.01        |
| \uFE42\uFE42\uFE42height               | [number]  |    \u2713     | Indicate the height of the package.<br>This value allows 2 explicit decimal position.<br>Example:20.01|
| \uFE42\uFE42\uFE42length               | [number]  |    \u2713     |   Indicate the length of the package. <br>This value allows 2 explicit decimal position.<br>Example:20.01             |
| \uFE42\uFE42\uFE42code                 | [string]  |    \u2713     | Indicate the Unit of measure for the provided dimensions.<br>Valid Values are:in/cm<br>Example:in                             |
| \uFE42\uFE42weight                 | [object]  |    \u2713     |  Indicate the weight of the package.      |
| \uFE42\uFE42\uFE42code                 | [string]  |    \u2713     |  This is the package weight unit.<br>Valid Values are:lb/oz/g/kg<br>Example:lb |
| \uFE42\uFE42\uFE42value                | [number]  |    \u2713     | This value allows 2 explicit decimal position.<br>Example:68.25   |
| \uFE42\uFE42insurance              | [object]  |          |   Indicate the insurance       |
| \uFE42\uFE42\uFE42code                 | [string]  |          | This is the currency code for the amount.<br>Example:USD          |
| \uFE42\uFE42\uFE42value                | [number]  |          | This value allows 2 explicit decimal position.<br>Example:300.01  |
| \uFE42\uFE42confirmation           | [string]  |    \u2713     | Indicate the Signature Type.[Click here](Conformation.md) to see the confirmation supported by the service provider.<br>Example:None     |
| \uFE42\uFE42quantity               | [number]  |    \u2713     | Package quantity<br>Example:1      |
| \uFE42\uFE42reference_numbers   |  [array]  |    \u2713     | Reference information|
| \uFE42\uFE42\uFE42code              | [string]  |    \u2713     |   This is a customer reference type. [Click here](Reference.md) to see the reference type supported by the service provider.<br>Example:INVOICE       |
| \uFE42\uFE42\uFE42value             | [object]  |    \u2713     |     Maximum length for all customer references is 40 characters.<br>Example:P84746-KMD        |
| \uFE42package_type          | [object]  |    \u2713     |  Specify the packaging used.[Click here](PackageType.md) to see Package Types.    |
| \uFE42\uFE42type                | [string]  |    \u2713     | Example:common              |
| \uFE42\uFE42name                | [string]  |    \u2713     | Example:Package   |
| \uFE42label_specification   | [object]  |         | Label specification                                                                                                               |
| \uFE42\uFE42label_format         | [string]  |         | Example\uFF1Apdf \u3002option\uFF1Azpl , pdf                                                                                                                                                |
| \uFE42pickup_date           | [string]  |    \u2713     |                               This is the shipment date. Format :[yyyymmdd]<br>Example:20221001                           |




:::: code-group
::: code-group-item \u8BF7\u6C42\u62A5\u6587

\`\`\`json
curl -X POST  \\
  'https://api.sandbox.shipber.com/open-api/v2/label' \\
  -H 'Content-Type:application/json' \\
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '{
    "custom_order_num": "Test-20230113",
    "shipment": {
      "carrier": "fedex",
      "service_code": "fedex_ground",
        "ship_from": {
            "uuid": "7b572b8d-08a3-4cc7-a711-1aae28e9ffcf"
        },
    "ship_to": {
        "city": "Kansas City",
        "name": "Test Company",
        "addresses": [
            "6925 Riverview Ave"
         ],
        "postal_code": "66102",
        "country_code": "US",
        "state_province_code": "KS",
        "phone": "0123456789"
        },
        "packages": [{
            "dimension": {
                "width": 7,
                "height": 13,
                "length": 4,
                "code": "in"
            },
            "weight": {
                "code": "lb",
                "value": 6
            },
            "confirmation": "None",
            "insurance": {
                "code": "USD",
                "value": 20
            },
            "quantity": 1,
            "reference_numbers": [{
                "code": "reference #1",
                "value": "1"
            }]
        }],
        "package_type": {
            "type": "common",
            "name": "Package"
        },
        "pickup_date": "20230113"
    }
}'
\`\`\`
:::

::: code-group-item \u8FD4\u56DE\u62A5\u6587

\`\`\`json
{
    "data": {
        "status": "Printing",
        "tracking_num": "Tracking",
        "order_num": "order",
        "shipment": {
            "service_code": "fedex_ground",
            "ship_from": {
                "city": "LOS ANGELES",
                "name": "Test Company",
                "email": "123456@gmail.com",
                "addresses": ["6925 Riverview Ave"],
                "postal_code": "66102",
                "country_code": "US",
                "is_residential": false,
                "state_province_code": "CA",
                "phone": "0123456789"
            },
        "ship_to": {
            "city": "Kansas City",
            "name": "Test Company",
            "addresses": [
                "6925 Riverview Ave"
            ],
            "postal_code": "66102",
            "country_code": "US",
            "state_province_code": "KS",
            "phone": "0123456789"
        },
            "packages": [{
                "dimension": {
                    "width": 7,
                    "height": 13,
                    "length": 4,
                    "code": "in"
                },
                "weight": {
                    "code": "lb",
                    "value": 6
                },
                "confirmation": "Not Required",
                "insurance": {
                    "code": "USD",
                    "value": 20
                },
                "quantity": 1,
                "reference_numbers": [{
                    "code": "reference #1",
                    "value": "1"
                }],
                "watermark": ""
            }],
            "package_type": {
                "type": "common",
                "name": "Package"
            },
            "label_specification": {
                "label_format": "pdf"
            },
            "pickup_date": "20230113"
        },
        "created_at": "2023-01-13T06:26:31.028Z",
        "custom_order_num": "Test-20230113",
        "is_return_label": false,
        "rma_number": "",
        "rma_reason": ""
    }
}
\`\`\`

:::
::::
`,contentRendered:`<h1 id="create-shipment" tabindex="-1"><a class="header-anchor" href="#create-shipment" aria-hidden="true">#</a> Create Shipment</h1>
<table><tr><td style="text-align:center;width:80px">POST</td><td>/open-api/v2/label</td></tr></table>
<h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h3>
<table>
<thead>
<tr>
<th style="text-align:center">Label</th>
<th style="text-align:center">Required</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Api-Key</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Key, please log in to the system and find it in My Profile</td>
</tr>
<tr>
<td style="text-align:center">Api-Secret</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Secret, please log in to the system and find it in My Profile</td>
</tr>
</tbody>
</table>
<h3 id="entity-types" tabindex="-1"><a class="header-anchor" href="#entity-types" aria-hidden="true">#</a> Entity Types</h3>
<p><strong>The address recognition API is currently designed to recognize the following types of entities:</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">Parameter</th>
<th style="text-align:center">Type</th>
<th style="text-align:center">Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">custom_order_num</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">shipment</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42carrier</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Carrier service provider code, this field will filter out the service of this service provider and create a label &quot;If service are more than one, System will use the lowest price service to create a label.&quot; <br>Example: ups,fedex</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42service_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Indicate the carrier service type used for this shipment.<RouterLink to="/en/Service_Code.html">Click</RouterLink> here to see Service Types <br>Example:ups_ground</td>
</tr>
<tr>
<td style="text-align:left">\uFE42ship_from</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center"></td>
<td>-</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42uuid</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center"></td>
<td>Address unique id.If you want to improve the accuracy of the ship from address, you can choose to send only uuid.<br><RouterLink to="/en/Warehouse%20Address.html">Click</RouterLink> to see how to get uuid.<br>Example:22d953b7-24c4-4ae9-afb4-111cc227b01e</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42postal_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Format [xxxxx] or [xxxxx-xxxx]<br>Example:90045-6275</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42country_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>This is the two-letter country code.<br>Example:US</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42state_province_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>This is the two-letter state code.<br>Example:CA</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42is_residential</td>
<td style="text-align:center">[boolean]</td>
<td style="text-align:center"></td>
<td>Indicate whether this address is residential (as opposed to commercial).<br>Example:false</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42addresses</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center"></td>
<td>This is the combination of number, street name, etc. Maximum length per line is 35.Note:At least one line is required.<br>Example:6925 Riverview Ave</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42city</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>City Name.<br>Example:Kansas City</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42name</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Specify the shipper name.Maximum length is 35 characters.<br>Example:Amazon</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42phone</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Specify the shipper phone number. At least 10 digits.<br>Example:1000000000</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42attention</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Note.Maximum length is 35 characters.<br>Example:Ann</td>
</tr>
<tr>
<td style="text-align:left">\uFE42ship_to</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>-</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42addresses</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center"></td>
<td>This is the combination of number, street name, etc. Maximum length per line is 35.Note:At least one line is required.<br>Example:6925 Riverview Ave</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42city</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>City Name.<br>Example: PENFIELD</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42state_province_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>This is the two-letter state code.<br>Example:NY</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42postal_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Format :[xxxxx] or [xxxxx-xxxx]<br>Example:14526</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42country_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>This is the two-letter country code.<br>Example:US</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42name</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Specify the recipient name.Maximum length is 35 characters.<br>Example:Ann</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42phone</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Specify the recipient phone number. At least 10 digits.<br>Example:(999)-999-9999</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42phone_ext</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Maximum length is 4 characters.<br>Example:1234</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42is_residential</td>
<td style="text-align:center">[boolean]</td>
<td style="text-align:center"></td>
<td>Indicate whether this address is residential (as opposed to commercial)<br>Example:false</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42attention</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Note.Maximum length is 35 characters.<br>Example:Ann</td>
</tr>
<tr>
<td style="text-align:left">\uFE42packages</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center">\u2713</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42dimension</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>Indicate the dimensions of the package.<br>Note: The maximum/minimum dimension values varies based on the services and the packaging types.</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42width</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>Indicate the width of the package.<br>This value allows 2 explicit decimal position.<br>Example:20.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42height</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>Indicate the height of the package.<br>This value allows 2 explicit decimal position.<br>Example:20.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42length</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>Indicate the length of the package. <br>This value allows 2 explicit decimal position.<br>Example:20.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Indicate the Unit of measure for the provided dimensions.<br>Valid Values are:in/cm<br>Example:in</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42weight</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>Indicate the weight of the package.</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>This is the package weight unit.<br>Valid Values are:lb/oz/g/kg<br>Example:lb</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42value</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>This value allows 2 explicit decimal position.<br>Example:68.25</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42insurance</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center"></td>
<td>Indicate the insurance</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>This is the currency code for the amount.<br>Example:USD</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42value</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center"></td>
<td>This value allows 2 explicit decimal position.<br>Example:300.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42confirmation</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Indicate the Signature Type.<RouterLink to="/en/Conformation.html">Click here</RouterLink> to see the confirmation supported by the service provider.<br>Example:None</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42quantity</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>Package quantity<br>Example:1</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42reference_numbers</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center">\u2713</td>
<td>Reference information</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>This is a customer reference type. <RouterLink to="/en/Reference.html">Click here</RouterLink> to see the reference type supported by the service provider.<br>Example:INVOICE</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42value</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>Maximum length for all customer references is 40 characters.<br>Example:P84746-KMD</td>
</tr>
<tr>
<td style="text-align:left">\uFE42package_type</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>Specify the packaging used.<RouterLink to="/en/PackageType.html">Click here</RouterLink> to see Package Types.</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42type</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Example:common</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42name</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Example:Package</td>
</tr>
<tr>
<td style="text-align:left">\uFE42label_specification</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center"></td>
<td>Label specification</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42label_format</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Example\uFF1Apdf \u3002option\uFF1Azpl , pdf</td>
</tr>
<tr>
<td style="text-align:left">\uFE42pickup_date</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>This is the shipment date. Format :[yyyymmdd]<br>Example:20221001</td>
</tr>
</tbody>
</table>
<CodeGroup>
<CodeGroupItem title="\u8BF7\u6C42\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>curl -X POST  \\
  'https<span class="token operator">:</span><span class="token comment">//api.sandbox.shipber.com/open-api/v2/label' \\</span>
  -H 'Content-Type<span class="token operator">:</span>application/json' \\
  -H 'Api-Key<span class="token operator">:</span>2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret<span class="token operator">:</span>qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '<span class="token punctuation">{</span>
    <span class="token property">"custom_order_num"</span><span class="token operator">:</span> <span class="token string">"Test-20230113"</span><span class="token punctuation">,</span>
    <span class="token property">"shipment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token string">"fedex"</span><span class="token punctuation">,</span>
      <span class="token property">"service_code"</span><span class="token operator">:</span> <span class="token string">"fedex_ground"</span><span class="token punctuation">,</span>
        <span class="token property">"ship_from"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"7b572b8d-08a3-4cc7-a711-1aae28e9ffcf"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"ship_to"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Test Company"</span><span class="token punctuation">,</span>
        <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"6925 Riverview Ave"</span>
         <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
        <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
        <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
        <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0123456789"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token property">"dimension"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
                <span class="token property">"length"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"in"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"lb"</span><span class="token punctuation">,</span>
                <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">6</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"confirmation"</span><span class="token operator">:</span> <span class="token string">"None"</span><span class="token punctuation">,</span>
            <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"USD"</span><span class="token punctuation">,</span>
                <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">20</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"reference_numbers"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"reference #1"</span><span class="token punctuation">,</span>
                <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"1"</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"common"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Package"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"pickup_date"</span><span class="token operator">:</span> <span class="token string">"20230113"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="\u8FD4\u56DE\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"Printing"</span><span class="token punctuation">,</span>
        <span class="token property">"tracking_num"</span><span class="token operator">:</span> <span class="token string">"Tracking"</span><span class="token punctuation">,</span>
        <span class="token property">"order_num"</span><span class="token operator">:</span> <span class="token string">"order"</span><span class="token punctuation">,</span>
        <span class="token property">"shipment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"service_code"</span><span class="token operator">:</span> <span class="token string">"fedex_ground"</span><span class="token punctuation">,</span>
            <span class="token property">"ship_from"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"LOS ANGELES"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Test Company"</span><span class="token punctuation">,</span>
                <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"123456@gmail.com"</span><span class="token punctuation">,</span>
                <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"6925 Riverview Ave"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
                <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
                <span class="token property">"is_residential"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"CA"</span><span class="token punctuation">,</span>
                <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0123456789"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"ship_to"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Test Company"</span><span class="token punctuation">,</span>
            <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">"6925 Riverview Ave"</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
            <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
            <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
            <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0123456789"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token property">"dimension"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                    <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
                    <span class="token property">"length"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"in"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"lb"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">6</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"confirmation"</span><span class="token operator">:</span> <span class="token string">"Not Required"</span><span class="token punctuation">,</span>
                <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"USD"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">20</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">"reference_numbers"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"reference #1"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"1"</span>
                <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">"watermark"</span><span class="token operator">:</span> <span class="token string">""</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"common"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Package"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"label_specification"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"label_format"</span><span class="token operator">:</span> <span class="token string">"pdf"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"pickup_date"</span><span class="token operator">:</span> <span class="token string">"20230113"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"created_at"</span><span class="token operator">:</span> <span class="token string">"2023-01-13T06:26:31.028Z"</span><span class="token punctuation">,</span>
        <span class="token property">"custom_order_num"</span><span class="token operator">:</span> <span class="token string">"Test-20230113"</span><span class="token punctuation">,</span>
        <span class="token property">"is_return_label"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">"rma_number"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"rma_reason"</span><span class="token operator">:</span> <span class="token string">""</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[{raw:"Service_Code.md",relative:"en/Service_Code.md",absolute:"/en/Service_Code.md"},{raw:"Warehouse%20Address.md",relative:"en/Warehouse%20Address.md",absolute:"/en/Warehouse%20Address.md"},{raw:"Conformation.md",relative:"en/Conformation.md",absolute:"/en/Conformation.md"},{raw:"Reference.md",relative:"en/Reference.md",absolute:"/en/Reference.md"},{raw:"PackageType.md",relative:"en/PackageType.md",absolute:"/en/PackageType.md"}],pathInferred:"/en/Create Shipment.html",pathLocale:"/en/",permalink:null,routeMeta:{title:"Create Shipment"},slug:"Create Shipment",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/en/Create Shipment.md",filePathRelative:"en/Create Shipment.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/en/Create Shipment.html.vue",componentFilePathRelative:"pages/en/Create Shipment.html.vue",componentFileChunkName:"v-379b18f6",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/en/Create Shipment.html.js",dataFilePathRelative:"pages/en/Create Shipment.html.js",dataFileChunkName:"v-379b18f6",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/en/Create Shipment.html",htmlFilePathRelative:"en/Create Shipment.html"},{data:{key:"v-f9d4e15a",path:"/en/Download%20Label.html",title:"Download Label",lang:"English",frontmatter:{},excerpt:"",headers:[{level:3,title:"Header",slug:"header",children:[]},{level:3,title:"Query",slug:"query",children:[]}],git:{createdTime:1662709054e3,updatedTime:1669692542e3,contributors:[{name:"Benny",email:"772970153@qq.com",commits:3}]},filePathRelative:"en/Download Label.md"},key:"v-f9d4e15a",path:"/en/Download Label.html",title:"Download Label",lang:"English",frontmatter:{},excerpt:"",headers:[{level:3,title:"Header",slug:"header",children:[]},{level:3,title:"Query",slug:"query",children:[]}],content:`# Download Label

<table><tr><td style="text-align:center;width:80px">GET</td><td>/v1/open-api/label</td></tr></table>


### Header 

|   Label    | Required |                         Description                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   \u2713     | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   \u2713     | Api Secret, please log in to the system and find it in My Profile |



 ### Query 

Parameter Name	|Type|Required
:--:|:--:|:--:
custom_order_num	|[string]	|\u2713 

:::: code-group 
::: code-group-item Curl

\`\`\`json
curl -X GET  \\
  'https://api.sandbox.shipber.com/v1/open-api/label?custom_order_num=cimy-977885' \\
  -H 'Content-Type:application/json' \\
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
\`\`\`
:::

::: code-group-item Response

\`\`\`json
{
    "data": {
        "order_num": "ST1618444800208768",
        "create_at": "2021-04-15T08:47:08.045Z",
        "custom_order_num": "FBAguang-April12992",
        "status": "Printed",
        "shipment": {
            "packages": [{
                "identifier": {
                    "tracking_id_type": "FEDEX",
                    "identification_number": "",
                    "tracking_number": "786002536837",
                    "master_tracking_id_type": "FEDEX",
                    "master_tracking_number": "786002536837"
                },
            }],
            "uuid": "be5ac2f5-10af-455a-beed-5e5ba77d9d65",
            "charge": 10.81,
            "create_at": "2021-04-15T08:47:08.045Z",
            "label_download": {
                "pdf": "https://shipber-label-stage.s3.us-west-2.amazonaws.com/Labels/fedex/fedex_ground/786002536837/786002536837.pdf?AWSAccessKeyId=AKIAVKD5XIH4LVPFTARC&Expires=1618477362&Signature=hvglmkBXlDMcBeidwBd%2FN4kgQbw%3D"
            }
        }
    }
}
\`\`\`

:::
::::`,contentRendered:`<h1 id="download-label" tabindex="-1"><a class="header-anchor" href="#download-label" aria-hidden="true">#</a> Download Label</h1>
<table><tr><td style="text-align:center;width:80px">GET</td><td>/v1/open-api/label</td></tr></table>
<h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h3>
<table>
<thead>
<tr>
<th style="text-align:center">Label</th>
<th style="text-align:center">Required</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Api-Key</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Key, please log in to the system and find it in My Profile</td>
</tr>
<tr>
<td style="text-align:center">Api-Secret</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Secret, please log in to the system and find it in My Profile</td>
</tr>
</tbody>
</table>
<h3 id="query" tabindex="-1"><a class="header-anchor" href="#query" aria-hidden="true">#</a> Query</h3>
<table>
<thead>
<tr>
<th style="text-align:center">Parameter Name</th>
<th style="text-align:center">Type</th>
<th style="text-align:center">Required</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">custom_order_num</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
</tr>
</tbody>
</table>
<CodeGroup>
<CodeGroupItem title="Curl">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>curl -X GET  \\
  'https<span class="token operator">:</span><span class="token comment">//api.sandbox.shipber.com/v1/open-api/label?custom_order_num=cimy-977885' \\</span>
  -H 'Content-Type<span class="token operator">:</span>application/json' \\
  -H 'Api-Key<span class="token operator">:</span>2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret<span class="token operator">:</span>qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="Response">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"order_num"</span><span class="token operator">:</span> <span class="token string">"ST1618444800208768"</span><span class="token punctuation">,</span>
        <span class="token property">"create_at"</span><span class="token operator">:</span> <span class="token string">"2021-04-15T08:47:08.045Z"</span><span class="token punctuation">,</span>
        <span class="token property">"custom_order_num"</span><span class="token operator">:</span> <span class="token string">"FBAguang-April12992"</span><span class="token punctuation">,</span>
        <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"Printed"</span><span class="token punctuation">,</span>
        <span class="token property">"shipment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token property">"identifier"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"tracking_id_type"</span><span class="token operator">:</span> <span class="token string">"FEDEX"</span><span class="token punctuation">,</span>
                    <span class="token property">"identification_number"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                    <span class="token property">"tracking_number"</span><span class="token operator">:</span> <span class="token string">"786002536837"</span><span class="token punctuation">,</span>
                    <span class="token property">"master_tracking_id_type"</span><span class="token operator">:</span> <span class="token string">"FEDEX"</span><span class="token punctuation">,</span>
                    <span class="token property">"master_tracking_number"</span><span class="token operator">:</span> <span class="token string">"786002536837"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"be5ac2f5-10af-455a-beed-5e5ba77d9d65"</span><span class="token punctuation">,</span>
            <span class="token property">"charge"</span><span class="token operator">:</span> <span class="token number">10.81</span><span class="token punctuation">,</span>
            <span class="token property">"create_at"</span><span class="token operator">:</span> <span class="token string">"2021-04-15T08:47:08.045Z"</span><span class="token punctuation">,</span>
            <span class="token property">"label_download"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"pdf"</span><span class="token operator">:</span> <span class="token string">"https://shipber-label-stage.s3.us-west-2.amazonaws.com/Labels/fedex/fedex_ground/786002536837/786002536837.pdf?AWSAccessKeyId=AKIAVKD5XIH4LVPFTARC&amp;Expires=1618477362&amp;Signature=hvglmkBXlDMcBeidwBd%2FN4kgQbw%3D"</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/en/Download Label.html",pathLocale:"/en/",permalink:null,routeMeta:{title:"Download Label"},slug:"Download Label",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/en/Download Label.md",filePathRelative:"en/Download Label.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/en/Download Label.html.vue",componentFilePathRelative:"pages/en/Download Label.html.vue",componentFileChunkName:"v-f9d4e15a",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/en/Download Label.html.js",dataFilePathRelative:"pages/en/Download Label.html.js",dataFileChunkName:"v-f9d4e15a",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/en/Download Label.html",htmlFilePathRelative:"en/Download Label.html"},{data:{key:"v-2d0a870d",path:"/en/",title:"Overview",lang:"English",frontmatter:{},excerpt:"",headers:[{level:2,title:"Getting Started",slug:"getting-started",children:[{level:3,title:"Currently provided APIs",slug:"currently-provided-apis",children:[]}]},{level:2,title:"Sandbox Environment",slug:"sandbox-environment",children:[{level:3,title:"How to Use the Sandbox",slug:"how-to-use-the-sandbox",children:[]},{level:3,title:"Differences in Behavior",slug:"differences-in-behavior",children:[]},{level:3,title:"Test Environment: \b\bhttps://api.sandbox.shipber.com",slug:"test-environment-https-api-sandbox-shipber-com",children:[]},{level:3,title:"Account password used for testing",slug:"account-password-used-for-testing",children:[]},{level:3,title:"Formal environment: https://api.shipber.com",slug:"formal-environment-https-api-shipber-com",children:[]},{level:3,title:"Suggested test steps",slug:"suggested-test-steps",children:[]}]}],git:{createdTime:1660015272e3,updatedTime:1681460654e3,contributors:[{name:"Benny",email:"772970153@qq.com",commits:1},{name:"carpcai",email:"carp.cai@adber.com",commits:1}]},filePathRelative:"en/Index.md"},key:"v-2d0a870d",path:"/en/",title:"Overview",lang:"English",frontmatter:{},excerpt:"",headers:[{level:2,title:"Getting Started",slug:"getting-started",children:[{level:3,title:"Currently provided APIs",slug:"currently-provided-apis",children:[]}]},{level:2,title:"Sandbox Environment",slug:"sandbox-environment",children:[{level:3,title:"How to Use the Sandbox",slug:"how-to-use-the-sandbox",children:[]},{level:3,title:"Differences in Behavior",slug:"differences-in-behavior",children:[]},{level:3,title:"Test Environment: \b\bhttps://api.sandbox.shipber.com",slug:"test-environment-https-api-sandbox-shipber-com",children:[]},{level:3,title:"Account password used for testing",slug:"account-password-used-for-testing",children:[]},{level:3,title:"Formal environment: https://api.shipber.com",slug:"formal-environment-https-api-shipber-com",children:[]},{level:3,title:"Suggested test steps",slug:"suggested-test-steps",children:[]}]}],content:`# Overview

## Getting Started

### Currently provided APIs

+ **Ship From List** <br>
  Getting available sender addresses


+ **Rate** <br>
  You can estimate a rate by providing a subset of the information required to create a label. You can use this to allow customers to quickly compare rates across services, carriers, and more without having to fill in all the information required to create a label.
+ **Address validation** <br>
  Provide you with an official address
+ **Shipping** <br>
  Create and customize shipping labels
+ **Download Label** <br>
  Obtain Label information and convert the waybill created by Shipping into PDF format for printing
+ **Cancel** <br>
  Cancel created label before Shipping







## Sandbox Environment 

### How to Use the Sandbox
We will provide you with API-key and API-secret dedicated to the sandbox environment for testing, which is also convenient for you to test without incurring real costs and real tracking information
Other than the API-key and API-secret, everything else is the same. So you can easily test and develop your application in the sandbox and then when you're ready to go to production all you need to do is change the API key.

### Differences in Behavior
Our sandbox environment matches the production environment as much as possible, but there are a few differences to be aware of:

#### Limited Parcel Carriers
We currently only support the three major US parcel carriers -- UPS, FedEx, Pitney Bowes and USPS (Stamps.com). Other carriers will be added in the future, including international carriers.However, in the sandbox environment, the account only provides three services: FedEx Ground, FedEx Home Delivery and UPS Ground for testing.Rates

#### Rates
The shipping rates that you get in the sandbox may not match the rates that you get in production. Any negotiated rate discounts that you have are not applied in the sandbox, and some rates are "dummy" rates to prevent abuse of our sandbox for production purposes.

#### Test Labels
Created in the sandbox environment with multiple Labels per shipment or one Label per shipment, because in fact printing the label will incur costs,  we set up a test label for download,so the printed labels are all the same label


### Test Environment: \b\b\`https://api.sandbox.shipber.com\` 

<br>

### Account password used for testing 
\`\`\`
api-key\uFF1A 2cn1wgmfidytin3jef3b 
api-secret\uFF1A qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C
\`\`\`

<br>

### Formal environment: \`https://api.shipber.com\` 

<br>

### Suggested test steps

1. First use the test account to obtain the sending address according to the ship from interface (uuid and ship from will be returned)
2. The next step is the validate interface to verify whether the sendable address is available
3. The third step is the rate interface pricing (note: the uuid and detailed address of the ship from field are two options, it is recommended to use uuid because the error rate of only one field will be very low)
4. Then there is the single creation interface of post/label (note that carrier service and rate id are fields returned according to the rate interface, and must be transmitted accordingly)
5. The fifth step is to get/label to query the order interface
6. The last is the cancel interface

<br>

**Be sure to perform a very complete test in the test environment before going to the formal environment for ordering operations.**

`,contentRendered:`<h1 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h1>
<h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2>
<h3 id="currently-provided-apis" tabindex="-1"><a class="header-anchor" href="#currently-provided-apis" aria-hidden="true">#</a> Currently provided APIs</h3>
<ul>
<li>
<p><strong>Ship From List</strong> <br>
Getting available sender addresses</p>
</li>
<li>
<p><strong>Rate</strong> <br>
You can estimate a rate by providing a subset of the information required to create a label. You can use this to allow customers to quickly compare rates across services, carriers, and more without having to fill in all the information required to create a label.</p>
</li>
<li>
<p><strong>Address validation</strong> <br>
Provide you with an official address</p>
</li>
<li>
<p><strong>Shipping</strong> <br>
Create and customize shipping labels</p>
</li>
<li>
<p><strong>Download Label</strong> <br>
Obtain Label information and convert the waybill created by Shipping into PDF format for printing</p>
</li>
<li>
<p><strong>Cancel</strong> <br>
Cancel created label before Shipping</p>
</li>
</ul>
<h2 id="sandbox-environment" tabindex="-1"><a class="header-anchor" href="#sandbox-environment" aria-hidden="true">#</a> Sandbox Environment</h2>
<h3 id="how-to-use-the-sandbox" tabindex="-1"><a class="header-anchor" href="#how-to-use-the-sandbox" aria-hidden="true">#</a> How to Use the Sandbox</h3>
<p>We will provide you with API-key and API-secret dedicated to the sandbox environment for testing, which is also convenient for you to test without incurring real costs and real tracking information
Other than the API-key and API-secret, everything else is the same. So you can easily test and develop your application in the sandbox and then when you're ready to go to production all you need to do is change the API key.</p>
<h3 id="differences-in-behavior" tabindex="-1"><a class="header-anchor" href="#differences-in-behavior" aria-hidden="true">#</a> Differences in Behavior</h3>
<p>Our sandbox environment matches the production environment as much as possible, but there are a few differences to be aware of:</p>
<h4 id="limited-parcel-carriers" tabindex="-1"><a class="header-anchor" href="#limited-parcel-carriers" aria-hidden="true">#</a> Limited Parcel Carriers</h4>
<p>We currently only support the three major US parcel carriers -- UPS, FedEx, Pitney Bowes and USPS (Stamps.com). Other carriers will be added in the future, including international carriers.However, in the sandbox environment, the account only provides three services: FedEx Ground, FedEx Home Delivery and UPS Ground for testing.Rates</p>
<h4 id="rates" tabindex="-1"><a class="header-anchor" href="#rates" aria-hidden="true">#</a> Rates</h4>
<p>The shipping rates that you get in the sandbox may not match the rates that you get in production. Any negotiated rate discounts that you have are not applied in the sandbox, and some rates are &quot;dummy&quot; rates to prevent abuse of our sandbox for production purposes.</p>
<h4 id="test-labels" tabindex="-1"><a class="header-anchor" href="#test-labels" aria-hidden="true">#</a> Test Labels</h4>
<p>Created in the sandbox environment with multiple Labels per shipment or one Label per shipment, because in fact printing the label will incur costs,  we set up a test label for download,so the printed labels are all the same label</p>
<h3 id="test-environment-https-api-sandbox-shipber-com" tabindex="-1"><a class="header-anchor" href="#test-environment-https-api-sandbox-shipber-com" aria-hidden="true">#</a> Test Environment: \b\b<code v-pre>https://api.sandbox.shipber.com</code></h3>
<br>
<h3 id="account-password-used-for-testing" tabindex="-1"><a class="header-anchor" href="#account-password-used-for-testing" aria-hidden="true">#</a> Account password used for testing</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>api-key\uFF1A 2cn1wgmfidytin3jef3b 
api-secret\uFF1A qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br>
<h3 id="formal-environment-https-api-shipber-com" tabindex="-1"><a class="header-anchor" href="#formal-environment-https-api-shipber-com" aria-hidden="true">#</a> Formal environment: <code v-pre>https://api.shipber.com</code></h3>
<br>
<h3 id="suggested-test-steps" tabindex="-1"><a class="header-anchor" href="#suggested-test-steps" aria-hidden="true">#</a> Suggested test steps</h3>
<ol>
<li>First use the test account to obtain the sending address according to the ship from interface (uuid and ship from will be returned)</li>
<li>The next step is the validate interface to verify whether the sendable address is available</li>
<li>The third step is the rate interface pricing (note: the uuid and detailed address of the ship from field are two options, it is recommended to use uuid because the error rate of only one field will be very low)</li>
<li>Then there is the single creation interface of post/label (note that carrier service and rate id are fields returned according to the rate interface, and must be transmitted accordingly)</li>
<li>The fifth step is to get/label to query the order interface</li>
<li>The last is the cancel interface</li>
</ol>
<br>
<p><strong>Be sure to perform a very complete test in the test environment before going to the formal environment for ordering operations.</strong></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/en/",pathLocale:"/en/",permalink:null,routeMeta:{title:"Overview"},slug:"Index",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/en/Index.md",filePathRelative:"en/Index.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/en/index.html.vue",componentFilePathRelative:"pages/en/index.html.vue",componentFileChunkName:"v-2d0a870d",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/en/index.html.js",dataFilePathRelative:"pages/en/index.html.js",dataFileChunkName:"v-2d0a870d",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/en/index.html",htmlFilePathRelative:"en/index.html"},{data:{key:"v-35861ada",path:"/en/My%20Profile.html",title:"My Profile",lang:"English",frontmatter:{},excerpt:"",headers:[{level:3,title:"Header",slug:"header",children:[]}],git:{createdTime:1662709054e3,updatedTime:1663321296e3,contributors:[{name:"Benny",email:"772970153@qq.com",commits:2}]},filePathRelative:"en/My Profile.md"},key:"v-35861ada",path:"/en/My Profile.html",title:"My Profile",lang:"English",frontmatter:{},excerpt:"",headers:[{level:3,title:"Header",slug:"header",children:[]}],content:`# My Profile

<table><tr><td style="text-align:center;width:80px;width:80px">GET</td><td>/v1/open-api/user</td></tr></table>


### Header 

|   Label    | Required |                         Description                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   \u2713     | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   \u2713     | Api Secret, please log in to the system and find it in My Profile |


:::: code-group 
::: code-group-item Curl

\`\`\`json
curl -X GET  \\
  'https://api.sandbox.shipber.com/v1/open-api/user' \\
  -H 'Content-Type:application/x-www-form-urlencoded' \\
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
\`\`\`
:::

::: code-group-item Response


\`\`\`json
{
    "data": {
        "balance": "99999882.84",
        "email": "a1@4pl.com",
        "name": "Zack",
        "mobile": "0000000000",
        "company": "XXXXX",
        "address": "SZ"
    }
}
\`\`\`
:::
::::`,contentRendered:`<h1 id="my-profile" tabindex="-1"><a class="header-anchor" href="#my-profile" aria-hidden="true">#</a> My Profile</h1>
<table><tr><td style="text-align:center;width:80px;width:80px">GET</td><td>/v1/open-api/user</td></tr></table>
<h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h3>
<table>
<thead>
<tr>
<th style="text-align:center">Label</th>
<th style="text-align:center">Required</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Api-Key</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Key, please log in to the system and find it in My Profile</td>
</tr>
<tr>
<td style="text-align:center">Api-Secret</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Secret, please log in to the system and find it in My Profile</td>
</tr>
</tbody>
</table>
<CodeGroup>
<CodeGroupItem title="Curl">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>curl -X GET  \\
  'https<span class="token operator">:</span><span class="token comment">//api.sandbox.shipber.com/v1/open-api/user' \\</span>
  -H 'Content-Type<span class="token operator">:</span>application/x-www-form-urlencoded' \\
  -H 'Api-Key<span class="token operator">:</span>2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret<span class="token operator">:</span>qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="Response">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"balance"</span><span class="token operator">:</span> <span class="token string">"99999882.84"</span><span class="token punctuation">,</span>
        <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"a1@4pl.com"</span><span class="token punctuation">,</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Zack"</span><span class="token punctuation">,</span>
        <span class="token property">"mobile"</span><span class="token operator">:</span> <span class="token string">"0000000000"</span><span class="token punctuation">,</span>
        <span class="token property">"company"</span><span class="token operator">:</span> <span class="token string">"XXXXX"</span><span class="token punctuation">,</span>
        <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">"SZ"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/en/My Profile.html",pathLocale:"/en/",permalink:null,routeMeta:{title:"My Profile"},slug:"My Profile",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/en/My Profile.md",filePathRelative:"en/My Profile.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/en/My Profile.html.vue",componentFilePathRelative:"pages/en/My Profile.html.vue",componentFileChunkName:"v-35861ada",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/en/My Profile.html.js",dataFilePathRelative:"pages/en/My Profile.html.js",dataFileChunkName:"v-35861ada",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/en/My Profile.html",htmlFilePathRelative:"en/My Profile.html"},{data:{key:"v-3e1200ca",path:"/en/Rate%20Shopping.html",title:"Rate Shopping",lang:"English",frontmatter:{},excerpt:"",headers:[{level:3,title:"Header",slug:"header",children:[]},{level:3,title:"Entity Types",slug:"entity-types",children:[]}],git:{createdTime:1662709054e3,updatedTime:1679987784e3,contributors:[{name:"Benny",email:"772970153@qq.com",commits:8}]},filePathRelative:"en/Rate Shopping.md"},key:"v-3e1200ca",path:"/en/Rate Shopping.html",title:"Rate Shopping",lang:"English",frontmatter:{},excerpt:"",headers:[{level:3,title:"Header",slug:"header",children:[]},{level:3,title:"Entity Types",slug:"entity-types",children:[]}],content:`# Rate Shopping

<table><tr><td style="text-align:center;width:80px">POST</td><td>/v1/open-api/rate</td></tr></table>


### Header 

|   Label    | Required |                         Description                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   \u2713     | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   \u2713     | Api Secret, please log in to the system and find it in My Profile |


### Entity Types

**The address recognition API is currently designed to recognize the following types of entities:**

| Parameter                  |   Type    | Required | Description                                                  |
| :------------------------- | :-------: | :------: | ------------------------------------------------------------ |
| shipment                   | [object]  |    \u2713     |-                                                |
| \uFE42carrier | [string] | | Carrier Name <br>Example: ups,fedex
| \uFE42service_code             | [string]  |          | Indicate the carrier service type used for this shipment.[Click](Service_Code.md) here to see Service Types <br>Example:ups_ground |
| \uFE42ship_from                | [object]  |          | -                                                            |
| \uFE42\uFE42uuid                   |  [array]  |          | Address unique id.If you want to improve the accuracy of the ship from address, you can choose to send only uuid.<br>[Click](Warehouse%20Address.md) to see how to get uuid.<br>Example:22d953b7-24c4-4ae9-afb4-111cc227b01e |
| \uFE42\uFE42postal_code            | [string]  |    \u2713     | Format [xxxxx] or [xxxxx-xxxx]<br>Example:90045-6275                                                   |
| \uFE42\uFE42country_code           | [string]  |    \u2713     | This is the two-letter country code.<br>Example:US                                                    |
| \uFE42\uFE42state_province_code | [string]  |    \u2713     | This is the two-letter state code.<br>Example:CA                |
| \uFE42\uFE42is_residential         | [boolean] |          | Indicate whether this address is residential (as opposed to commercial).<br>Example:false |
| \uFE42\uFE42addresses              |  [array]  |          |       This is the combination of number, street name, etc. Maximum length per line is 35.Note:At least one line is required.<br>Example:6925 Riverview Ave                     |
| \uFE42\uFE42city                   | [string]  |    \u2713     |                  City Name.<br>Example:LOS ANGELES                                           |
| \uFE42\uFE42name                   | [string]  |          | Specify the shipper name.Maximum length is 35 characters.<br>Example:Amazon                 |
| \uFE42\uFE42phone                  | [string] |          |  Specify the shipper phone number. At least 10 digits.<br>Example:1000000000                                       |
| \uFE42\uFE42attention              | [string]  |    \u2713     | Note.Maximum length is 35 characters.<br>Example:Ann                        |
| \uFE42ship_to                  | [object]  |    \u2713     | -                                                            |
| \uFE42\uFE42addresses              |  [array]  |          |      This is the combination of number, street name, etc. Maximum length per line is 35.Note:At least one line is required.<br>Example:6925 Riverview Ave                    |
| \uFE42\uFE42city                   | [string]  |    \u2713     | City Name.<br>Example: PENFIELD     |
| \uFE42\uFE42state_province_code    | [string]  |    \u2713     | This is the two-letter state code.<br>Example:NY      |
| \uFE42\uFE42postal_code            | [string]  |    \u2713     |      Format :[xxxxx] or [xxxxx-xxxx]<br>Example:14526               |
| \uFE42\uFE42country_code           | [string]  |    \u2713     |  This is the two-letter country code.<br>Example:US                          |
| \uFE42\uFE42name                   | [string]  |          | Specify the recipient name.Maximum length is 35 characters.<br>Example:Ann              |
| \uFE42\uFE42phone                  | [string]  |          | Specify the recipient phone number. At least 10 digits.<br>Example:(999)-999-9999       |
| \uFE42\uFE42phone_ext              | [string]  |          | Maximum length is 4 characters.<br>Example:1234|
| \uFE42\uFE42is_residential         | [boolean] |          | Indicate whether this address is residential (as opposed to commercial)<br>Example:false |
| \uFE42\uFE42attention              | [string]  |          | Note.Maximum length is 35 characters.<br>Example:Ann                    |
| \uFE42packages                 |  [array]  |    \u2713     |           |
| \uFE42\uFE42dimension              | [object]  |    \u2713     |   Indicate the dimensions of the package.<br>Note: The maximum/minimum dimension values varies based on the services and the packaging types.               |
| \uFE42\uFE42\uFE42width                | [number]  |    \u2713     | Indicate the width of the package.<br>This value allows 2 explicit decimal position.<br>Example:20.01        |
| \uFE42\uFE42\uFE42height               | [number]  |    \u2713     | Indicate the height of the package.<br>This value allows 2 explicit decimal position.<br>Example:20.01|
| \uFE42\uFE42\uFE42length               | [number]  |    \u2713     |   Indicate the length of the package. <br>This value allows 2 explicit decimal position.<br>Example:20.01             |
| \uFE42\uFE42\uFE42code                 | [string]  |    \u2713     | Indicate the Unit of measure for the provided dimensions.<br>Valid Values are:in/cm<br>Example:in                             |
| \uFE42\uFE42weight                 | [object]  |    \u2713     |  Indicate the weight of the package.      |
| \uFE42\uFE42\uFE42code                 | [string]  |    \u2713     |  This is the package weight unit.<br>Valid Values are:lb/oz/g/kg<br>Example:lb |
| \uFE42\uFE42\uFE42value                | [number]  |    \u2713     | This value allows 2 explicit decimal position.<br>Example:68.25   |
| \uFE42\uFE42insurance              | [object]  |          |   Indicate the insurance       |
| \uFE42\uFE42\uFE42code                 | [string]  |          | This is the currency code for the amount.<br>Example:USD          |
| \uFE42\uFE42\uFE42value                | [number]  |          | This value allows 2 explicit decimal position.<br>Example:300.01  |
| \uFE42\uFE42confirmation           | [string]  |    \u2713     | Indicate the Signature Type.[Click here](Conformation.md) to see the confirmation supported by the service provider.<br>Example:Adult     |
| \uFE42\uFE42quantity               | [number]  |    \u2713     | Package quantity<br>Example:1      |
| \uFE42package_type          | [object]  |    \u2713     |  Specify the packaging used.[Click here](PackageType.md) to see Package Types.    |
| \uFE42\uFE42type                | [string]  |    \u2713     | Example:common              |
| \uFE42\uFE42name                | [string]  |    \u2713     | Example:Package   |
| \uFE42pickup_date           | [string]  |    \u2713     |                               This is the shipment date. Format :[yyyymmdd]<br>Example:20221001                           |



:::: code-group 
::: code-group-item Curl

\`\`\`json
curl -X POST  \\
  'https://api.sandbox.shipber.com/v1/open-api/rate' \\
  -H 'Content-Type:application/json' \\
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '{
    "shipment": {
        "ship_from": {
            "uuid": "7b572b8d-08a3-4cc7-a711-1aae28e9ffcf"
        },
        "ship_to": {
            "city": "Penfield",
            "state_province_code": "NY",
            "postal_code": "14526",
            "country_code": "US"
        },
        "packages": [
            {
                "dimension": {
                    "width": 10,
                    "height": 10,
                    "length": 10,
                    "code": "IN"
                },
                "weight": {
                    "code": "lb",
                    "value": 20
                },
                "confirmation": "None",
                "quantity": 1
            }
        ],
        "package_type": {
            "type": "common",
            "name": "Package"
        },
        "pickup_date": "20211010"
    }
}'
\`\`\`


:::

::: code-group-item Response

\`\`\`json
{
    "data": {
        "rates": [{
            "charge": {
                "code": "USD",
                "value": 10.03
            },
            "estimate_ship_time": {
                "delivery_time_to_tz": "2021-04-15T23:00:00-07:00",
                "delivery_time_from_tz": "2021-04-15T23:00:00-07:00",
                "days": 1
            },
            "carrier": "ups",
            "service_code": "ups_ground",
            "service_name": "UPS\xAE Ground",
            "carrier_service": "UPS\xAE Ground",
            "account_alias": "CO:Xu3GDZ5iu_",
            "rate_id": "eyJjaGFpbklkIjo0MzMsInNlcnZpY2VDb2RlIjoidXBzX2dyb3VuZCJ9"
        }]
    }
}
\`\`\`



:::
::::
`,contentRendered:`<h1 id="rate-shopping" tabindex="-1"><a class="header-anchor" href="#rate-shopping" aria-hidden="true">#</a> Rate Shopping</h1>
<table><tr><td style="text-align:center;width:80px">POST</td><td>/v1/open-api/rate</td></tr></table>
<h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h3>
<table>
<thead>
<tr>
<th style="text-align:center">Label</th>
<th style="text-align:center">Required</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Api-Key</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Key, please log in to the system and find it in My Profile</td>
</tr>
<tr>
<td style="text-align:center">Api-Secret</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Secret, please log in to the system and find it in My Profile</td>
</tr>
</tbody>
</table>
<h3 id="entity-types" tabindex="-1"><a class="header-anchor" href="#entity-types" aria-hidden="true">#</a> Entity Types</h3>
<p><strong>The address recognition API is currently designed to recognize the following types of entities:</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">Parameter</th>
<th style="text-align:center">Type</th>
<th style="text-align:center">Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">shipment</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>-</td>
</tr>
<tr>
<td style="text-align:left">\uFE42carrier</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Carrier Name <br>Example: ups,fedex</td>
</tr>
<tr>
<td style="text-align:left">\uFE42service_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Indicate the carrier service type used for this shipment.<RouterLink to="/en/Service_Code.html">Click</RouterLink> here to see Service Types <br>Example:ups_ground</td>
</tr>
<tr>
<td style="text-align:left">\uFE42ship_from</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center"></td>
<td>-</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42uuid</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center"></td>
<td>Address unique id.If you want to improve the accuracy of the ship from address, you can choose to send only uuid.<br><RouterLink to="/en/Warehouse%20Address.html">Click</RouterLink> to see how to get uuid.<br>Example:22d953b7-24c4-4ae9-afb4-111cc227b01e</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42postal_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Format [xxxxx] or [xxxxx-xxxx]<br>Example:90045-6275</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42country_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>This is the two-letter country code.<br>Example:US</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42state_province_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>This is the two-letter state code.<br>Example:CA</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42is_residential</td>
<td style="text-align:center">[boolean]</td>
<td style="text-align:center"></td>
<td>Indicate whether this address is residential (as opposed to commercial).<br>Example:false</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42addresses</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center"></td>
<td>This is the combination of number, street name, etc. Maximum length per line is 35.Note:At least one line is required.<br>Example:6925 Riverview Ave</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42city</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>City Name.<br>Example:LOS ANGELES</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42name</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Specify the shipper name.Maximum length is 35 characters.<br>Example:Amazon</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42phone</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Specify the shipper phone number. At least 10 digits.<br>Example:1000000000</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42attention</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Note.Maximum length is 35 characters.<br>Example:Ann</td>
</tr>
<tr>
<td style="text-align:left">\uFE42ship_to</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>-</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42addresses</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center"></td>
<td>This is the combination of number, street name, etc. Maximum length per line is 35.Note:At least one line is required.<br>Example:6925 Riverview Ave</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42city</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>City Name.<br>Example: PENFIELD</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42state_province_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>This is the two-letter state code.<br>Example:NY</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42postal_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Format :[xxxxx] or [xxxxx-xxxx]<br>Example:14526</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42country_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>This is the two-letter country code.<br>Example:US</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42name</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Specify the recipient name.Maximum length is 35 characters.<br>Example:Ann</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42phone</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Specify the recipient phone number. At least 10 digits.<br>Example:(999)-999-9999</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42phone_ext</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Maximum length is 4 characters.<br>Example:1234</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42is_residential</td>
<td style="text-align:center">[boolean]</td>
<td style="text-align:center"></td>
<td>Indicate whether this address is residential (as opposed to commercial)<br>Example:false</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42attention</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>Note.Maximum length is 35 characters.<br>Example:Ann</td>
</tr>
<tr>
<td style="text-align:left">\uFE42packages</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center">\u2713</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42dimension</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>Indicate the dimensions of the package.<br>Note: The maximum/minimum dimension values varies based on the services and the packaging types.</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42width</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>Indicate the width of the package.<br>This value allows 2 explicit decimal position.<br>Example:20.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42height</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>Indicate the height of the package.<br>This value allows 2 explicit decimal position.<br>Example:20.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42length</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>Indicate the length of the package. <br>This value allows 2 explicit decimal position.<br>Example:20.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Indicate the Unit of measure for the provided dimensions.<br>Valid Values are:in/cm<br>Example:in</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42weight</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>Indicate the weight of the package.</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>This is the package weight unit.<br>Valid Values are:lb/oz/g/kg<br>Example:lb</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42value</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>This value allows 2 explicit decimal position.<br>Example:68.25</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42insurance</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center"></td>
<td>Indicate the insurance</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>This is the currency code for the amount.<br>Example:USD</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42value</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center"></td>
<td>This value allows 2 explicit decimal position.<br>Example:300.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42confirmation</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Indicate the Signature Type.<RouterLink to="/en/Conformation.html">Click here</RouterLink> to see the confirmation supported by the service provider.<br>Example:Adult</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42quantity</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>Package quantity<br>Example:1</td>
</tr>
<tr>
<td style="text-align:left">\uFE42package_type</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>Specify the packaging used.<RouterLink to="/en/PackageType.html">Click here</RouterLink> to see Package Types.</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42type</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Example:common</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42name</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>Example:Package</td>
</tr>
<tr>
<td style="text-align:left">\uFE42pickup_date</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>This is the shipment date. Format :[yyyymmdd]<br>Example:20221001</td>
</tr>
</tbody>
</table>
<CodeGroup>
<CodeGroupItem title="Curl">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>curl -X POST  \\
  'https<span class="token operator">:</span><span class="token comment">//api.sandbox.shipber.com/v1/open-api/rate' \\</span>
  -H 'Content-Type<span class="token operator">:</span>application/json' \\
  -H 'Api-Key<span class="token operator">:</span>2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret<span class="token operator">:</span>qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '<span class="token punctuation">{</span>
    <span class="token property">"shipment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"ship_from"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"7b572b8d-08a3-4cc7-a711-1aae28e9ffcf"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"ship_to"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Penfield"</span><span class="token punctuation">,</span>
            <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"NY"</span><span class="token punctuation">,</span>
            <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"14526"</span><span class="token punctuation">,</span>
            <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">"dimension"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                    <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                    <span class="token property">"length"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"IN"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"lb"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">20</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"confirmation"</span><span class="token operator">:</span> <span class="token string">"None"</span><span class="token punctuation">,</span>
                <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"common"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Package"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"pickup_date"</span><span class="token operator">:</span> <span class="token string">"20211010"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="Response">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"rates"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token property">"charge"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"USD"</span><span class="token punctuation">,</span>
                <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">10.03</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"estimate_ship_time"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"delivery_time_to_tz"</span><span class="token operator">:</span> <span class="token string">"2021-04-15T23:00:00-07:00"</span><span class="token punctuation">,</span>
                <span class="token property">"delivery_time_from_tz"</span><span class="token operator">:</span> <span class="token string">"2021-04-15T23:00:00-07:00"</span><span class="token punctuation">,</span>
                <span class="token property">"days"</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token string">"ups"</span><span class="token punctuation">,</span>
            <span class="token property">"service_code"</span><span class="token operator">:</span> <span class="token string">"ups_ground"</span><span class="token punctuation">,</span>
            <span class="token property">"service_name"</span><span class="token operator">:</span> <span class="token string">"UPS\xAE Ground"</span><span class="token punctuation">,</span>
            <span class="token property">"carrier_service"</span><span class="token operator">:</span> <span class="token string">"UPS\xAE Ground"</span><span class="token punctuation">,</span>
            <span class="token property">"account_alias"</span><span class="token operator">:</span> <span class="token string">"CO:Xu3GDZ5iu_"</span><span class="token punctuation">,</span>
            <span class="token property">"rate_id"</span><span class="token operator">:</span> <span class="token string">"eyJjaGFpbklkIjo0MzMsInNlcnZpY2VDb2RlIjoidXBzX2dyb3VuZCJ9"</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[{raw:"Service_Code.md",relative:"en/Service_Code.md",absolute:"/en/Service_Code.md"},{raw:"Warehouse%20Address.md",relative:"en/Warehouse%20Address.md",absolute:"/en/Warehouse%20Address.md"},{raw:"Conformation.md",relative:"en/Conformation.md",absolute:"/en/Conformation.md"},{raw:"PackageType.md",relative:"en/PackageType.md",absolute:"/en/PackageType.md"}],pathInferred:"/en/Rate Shopping.html",pathLocale:"/en/",permalink:null,routeMeta:{title:"Rate Shopping"},slug:"Rate Shopping",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/en/Rate Shopping.md",filePathRelative:"en/Rate Shopping.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/en/Rate Shopping.html.vue",componentFilePathRelative:"pages/en/Rate Shopping.html.vue",componentFileChunkName:"v-3e1200ca",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/en/Rate Shopping.html.js",dataFilePathRelative:"pages/en/Rate Shopping.html.js",dataFileChunkName:"v-3e1200ca",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/en/Rate Shopping.html",htmlFilePathRelative:"en/Rate Shopping.html"},{data:{key:"v-df74a268",path:"/en/Shipping%20Service.html",title:"Shipping Service",lang:"English",frontmatter:{},excerpt:"",headers:[{level:3,title:"Header",slug:"header",children:[]}],git:{createdTime:1662709054e3,updatedTime:1671009161e3,contributors:[{name:"Benny",email:"772970153@qq.com",commits:2}]},filePathRelative:"en/Shipping Service.md"},key:"v-df74a268",path:"/en/Shipping Service.html",title:"Shipping Service",lang:"English",frontmatter:{},excerpt:"",headers:[{level:3,title:"Header",slug:"header",children:[]}],content:`# Shipping Service

<table><tr><td style="text-align:center;width:80px">GET</td><td>/v1/open-api/user/shipping-services</td></tr></table>

### Header 

|   Label    | Required |                         Description                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   \u2713     | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   \u2713     | Api Secret, please log in to the system and find it in My Profile |



:::: code-group 
::: code-group-item Curl

\`\`\`json
curl -X GET  \\
  'https://api.sandbox.shipber.com/v1/open-api/user/shipping-services' \\
  -H 'Content-Type:application/x-www-form-urlencoded' \\
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
\`\`\`

:::

::: code-group-item Response

\`\`\`json
{
    "data": [{
        "carrier": "ups",
        "code": "ups_ground",
        "addresses": [{
            "nick_name": "Repository1",
            "city": "Kansas City",
            "name": "Test Company",
            "addresses": ["6925 Riverview Ave"],
            "telephone": "0123456789",
            "postal_code": "66102",
            "country_code": "US",
            "is_residential": false,
            "state_province_code": "KS"
        }],
        "name": "UPS\xAE Ground"
    }]
}

\`\`\`
:::
::::`,contentRendered:`<h1 id="shipping-service" tabindex="-1"><a class="header-anchor" href="#shipping-service" aria-hidden="true">#</a> Shipping Service</h1>
<table><tr><td style="text-align:center;width:80px">GET</td><td>/v1/open-api/user/shipping-services</td></tr></table>
<h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h3>
<table>
<thead>
<tr>
<th style="text-align:center">Label</th>
<th style="text-align:center">Required</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Api-Key</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Key, please log in to the system and find it in My Profile</td>
</tr>
<tr>
<td style="text-align:center">Api-Secret</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Secret, please log in to the system and find it in My Profile</td>
</tr>
</tbody>
</table>
<CodeGroup>
<CodeGroupItem title="Curl">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>curl -X GET  \\
  'https<span class="token operator">:</span><span class="token comment">//api.sandbox.shipber.com/v1/open-api/user/shipping-services' \\</span>
  -H 'Content-Type<span class="token operator">:</span>application/x-www-form-urlencoded' \\
  -H 'Api-Key<span class="token operator">:</span>2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret<span class="token operator">:</span>qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="Response">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token string">"ups"</span><span class="token punctuation">,</span>
        <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"ups_ground"</span><span class="token punctuation">,</span>
        <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token property">"nick_name"</span><span class="token operator">:</span> <span class="token string">"Repository1"</span><span class="token punctuation">,</span>
            <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Test Company"</span><span class="token punctuation">,</span>
            <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"6925 Riverview Ave"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"telephone"</span><span class="token operator">:</span> <span class="token string">"0123456789"</span><span class="token punctuation">,</span>
            <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
            <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
            <span class="token property">"is_residential"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"UPS\xAE Ground"</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/en/Shipping Service.html",pathLocale:"/en/",permalink:null,routeMeta:{title:"Shipping Service"},slug:"Shipping Service",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/en/Shipping Service.md",filePathRelative:"en/Shipping Service.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/en/Shipping Service.html.vue",componentFilePathRelative:"pages/en/Shipping Service.html.vue",componentFileChunkName:"v-df74a268",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/en/Shipping Service.html.js",dataFilePathRelative:"pages/en/Shipping Service.html.js",dataFileChunkName:"v-df74a268",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/en/Shipping Service.html",htmlFilePathRelative:"en/Shipping Service.html"},{data:{key:"v-40e66132",path:"/en/Warehouse%20Address.html",title:"Warehouse Address",lang:"English",frontmatter:{},excerpt:"",headers:[{level:3,title:"Header",slug:"header",children:[]}],git:{createdTime:1662709054e3,updatedTime:1671009161e3,contributors:[{name:"Benny",email:"772970153@qq.com",commits:2}]},filePathRelative:"en/Warehouse Address.md"},key:"v-40e66132",path:"/en/Warehouse Address.html",title:"Warehouse Address",lang:"English",frontmatter:{},excerpt:"",headers:[{level:3,title:"Header",slug:"header",children:[]}],content:`# Warehouse Address

<table><tr><td style="text-align:center;width:80px">GET</td><td>/v1/open-api/ship-from</td></tr></table>


### Header 

|   Label    | Required |                         Description                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   \u2713     | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   \u2713     | Api Secret, please log in to the system and find it in My Profile |

:::: code-group 
::: code-group-item Curl


\`\`\`json
curl -X GET  \\
  'https://api.sandbox.shipber.com/v1/open-api/ship-from' \\
  -H 'Content-Type:application/json' \\ 
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
\`\`\`



:::

::: code-group-item Response

\`\`\`json
{
    "data": [{
        "uuid": "22d953b7-24c4-4ae9-afb4-111cc227b01e",
        "postal_code": "66102",
        "country_code": "US",
        "state_province_code": "KS",
        "is_residential": false,
        "addresses": ["6925 Riverview Ave"],
        "city": "Kansas City",
        "address_classification": "Commercial",
        "name": "Amazon",
        "phone": "0000000000",
        "attention": "Tom",
        "email": "Test@Test.com"
    }]
}
\`\`\`

:::
::::


`,contentRendered:`<h1 id="warehouse-address" tabindex="-1"><a class="header-anchor" href="#warehouse-address" aria-hidden="true">#</a> Warehouse Address</h1>
<table><tr><td style="text-align:center;width:80px">GET</td><td>/v1/open-api/ship-from</td></tr></table>
<h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h3>
<table>
<thead>
<tr>
<th style="text-align:center">Label</th>
<th style="text-align:center">Required</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Api-Key</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Key, please log in to the system and find it in My Profile</td>
</tr>
<tr>
<td style="text-align:center">Api-Secret</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Secret, please log in to the system and find it in My Profile</td>
</tr>
</tbody>
</table>
<CodeGroup>
<CodeGroupItem title="Curl">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>curl -X GET  \\
  'https<span class="token operator">:</span><span class="token comment">//api.sandbox.shipber.com/v1/open-api/ship-from' \\</span>
  -H 'Content-Type<span class="token operator">:</span>application/json' \\ 
  -H 'Api-Key<span class="token operator">:</span>2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret<span class="token operator">:</span>qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="Response">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"22d953b7-24c4-4ae9-afb4-111cc227b01e"</span><span class="token punctuation">,</span>
        <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
        <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
        <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
        <span class="token property">"is_residential"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"6925 Riverview Ave"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
        <span class="token property">"address_classification"</span><span class="token operator">:</span> <span class="token string">"Commercial"</span><span class="token punctuation">,</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Amazon"</span><span class="token punctuation">,</span>
        <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0000000000"</span><span class="token punctuation">,</span>
        <span class="token property">"attention"</span><span class="token operator">:</span> <span class="token string">"Tom"</span><span class="token punctuation">,</span>
        <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"Test@Test.com"</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/en/Warehouse Address.html",pathLocale:"/en/",permalink:null,routeMeta:{title:"Warehouse Address"},slug:"Warehouse Address",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/en/Warehouse Address.md",filePathRelative:"en/Warehouse Address.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/en/Warehouse Address.html.vue",componentFilePathRelative:"pages/en/Warehouse Address.html.vue",componentFileChunkName:"v-40e66132",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/en/Warehouse Address.html.js",dataFilePathRelative:"pages/en/Warehouse Address.html.js",dataFileChunkName:"v-40e66132",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/en/Warehouse Address.html",htmlFilePathRelative:"en/Warehouse Address.html"},{data:{key:"v-4efee709",path:"/zh/Address%20Validation.html",title:"\u5730\u5740\u6821\u9A8C",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]},{level:3,title:"Body\u8BF7\u6C42\u53C2\u6570",slug:"body\u8BF7\u6C42\u53C2\u6570",children:[]}],git:{createdTime:1662709054e3,updatedTime:1671009161e3,contributors:[{name:"Benny",email:"772970153@qq.com",commits:3}]},filePathRelative:"zh/Address Validation.md"},key:"v-4efee709",path:"/zh/Address Validation.html",title:"\u5730\u5740\u6821\u9A8C",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]},{level:3,title:"Body\u8BF7\u6C42\u53C2\u6570",slug:"body\u8BF7\u6C42\u53C2\u6570",children:[]}],content:`# \u5730\u5740\u6821\u9A8C

<table><tr><td style="text-align:center;width:80px">POST</td><td>/v1/open-api/address/validate</td></tr></table>


### \u8BF7\u6C42\u5934\u90E8 

|   \u6807\u7B7E    | \u5FC5\u586B |                         \u8BF4\u660E                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   \u2713     | Api Key\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230 |
| Api-Secret |   \u2713     | Api Secret\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230 |


### Body\u8BF7\u6C42\u53C2\u6570

|      \u53C2\u6570\u540D      |   \u7C7B\u578B    | \u5FC5\u586B | \u8BF4\u660E                                                  |
| :-----------------: | :-------: | :------: | ------------------------------------------------------------ |
|      addresses      |  [array]  |    \u2713     | \u5730\u5740\u8BE6\u60C5                                                            |
|        city         | [string]  |    \u2713     | \u57CE\u5E02                                                            |
| state_province_code | [string]  |    \u2713     | \u5DDE\u4EE3\u7801                                              |
|     postal_code     | [string]  |    \u2713     | \u90AE\u7F16\u5730\u5740\uFF0C\u6700\u5C11\u4E3A5\u4F4D\u6570                                                       |
|    country_code     | [string]  |    \u2713     | \u56FD\u5BB6\u4EE3\u7801\uFF0C\u76EE\u524D\u53EA\u652F\u6301US                                      |
|   is_residential    | [boolean] |    \u2713     | \u662F\u5426\u662F\u4F4F\u5B85\u5730\u5740\uFF0C\u53EF\u4EE5\u4E0D\u586B\uFF0C\u4E0D\u586B\u9ED8\u8BA4\u4E3Afalseis commercial |








:::: code-group 
::: code-group-item \u8BF7\u6C42\u62A5\u6587

\`\`\`json
curl -X POST  \\
  'https://api.sandbox.shipber.com/v1/open-api/address/validate' \\
  -H 'Content-Type:application/json' \\
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '{
    "addresses": [
        "6925 Riverview Ave"
    ],
    "city": "Kansas City",
    "state_province_code": "KS",
    "postal_code": "66102",
    "country_code": "US"
}'
\`\`\`

:::

::: code-group-item \u8FD4\u56DE\u62A5\u6587

\`\`\`json
{
    "data": {
        "status": "Commercial",
        "original_address": {
            "postal_code": "66102",
            "country_code": "US",
            "state_province_code": "KS",
            "is_residential": false,
            "addresses": ["6925 Riverview Ave"],
            "city": "Kansas City",
            "address_classification": "Commercial"
        },
        "matched_address": {
            "postal_code": "66102",
            "country_code": "US",
            "state_province_code": "KS",
            "is_residential": false,
            "addresses": ["6925 Riverview Ave"],
            "city": "Kansas City",
            "address_classification": "Commercial"
        }
    },
    "status": ""
}
\`\`\`

:::
::::
`,contentRendered:`<h1 id="\u5730\u5740\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u5730\u5740\u6821\u9A8C" aria-hidden="true">#</a> \u5730\u5740\u6821\u9A8C</h1>
<table><tr><td style="text-align:center;width:80px">POST</td><td>/v1/open-api/address/validate</td></tr></table>
<h3 id="\u8BF7\u6C42\u5934\u90E8" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u5934\u90E8" aria-hidden="true">#</a> \u8BF7\u6C42\u5934\u90E8</h3>
<table>
<thead>
<tr>
<th style="text-align:center">\u6807\u7B7E</th>
<th style="text-align:center">\u5FC5\u586B</th>
<th style="text-align:center">\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Api-Key</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Key\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230</td>
</tr>
<tr>
<td style="text-align:center">Api-Secret</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Secret\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230</td>
</tr>
</tbody>
</table>
<h3 id="body\u8BF7\u6C42\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#body\u8BF7\u6C42\u53C2\u6570" aria-hidden="true">#</a> Body\u8BF7\u6C42\u53C2\u6570</h3>
<table>
<thead>
<tr>
<th style="text-align:center">\u53C2\u6570\u540D</th>
<th style="text-align:center">\u7C7B\u578B</th>
<th style="text-align:center">\u5FC5\u586B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">addresses</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center">\u2713</td>
<td>\u5730\u5740\u8BE6\u60C5</td>
</tr>
<tr>
<td style="text-align:center">city</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u57CE\u5E02</td>
</tr>
<tr>
<td style="text-align:center">state_province_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u5DDE\u4EE3\u7801</td>
</tr>
<tr>
<td style="text-align:center">postal_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u90AE\u7F16\u5730\u5740\uFF0C\u6700\u5C11\u4E3A5\u4F4D\u6570</td>
</tr>
<tr>
<td style="text-align:center">country_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u56FD\u5BB6\u4EE3\u7801\uFF0C\u76EE\u524D\u53EA\u652F\u6301US</td>
</tr>
<tr>
<td style="text-align:center">is_residential</td>
<td style="text-align:center">[boolean]</td>
<td style="text-align:center">\u2713</td>
<td>\u662F\u5426\u662F\u4F4F\u5B85\u5730\u5740\uFF0C\u53EF\u4EE5\u4E0D\u586B\uFF0C\u4E0D\u586B\u9ED8\u8BA4\u4E3Afalseis commercial</td>
</tr>
</tbody>
</table>
<CodeGroup>
<CodeGroupItem title="\u8BF7\u6C42\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>curl -X POST  \\
  'https<span class="token operator">:</span><span class="token comment">//api.sandbox.shipber.com/v1/open-api/address/validate' \\</span>
  -H 'Content-Type<span class="token operator">:</span>application/json' \\
  -H 'Api-Key<span class="token operator">:</span>2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret<span class="token operator">:</span>qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '<span class="token punctuation">{</span>
    <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"6925 Riverview Ave"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
    <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
    <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
    <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span>
<span class="token punctuation">}</span>'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="\u8FD4\u56DE\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"Commercial"</span><span class="token punctuation">,</span>
        <span class="token property">"original_address"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
            <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
            <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
            <span class="token property">"is_residential"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"6925 Riverview Ave"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
            <span class="token property">"address_classification"</span><span class="token operator">:</span> <span class="token string">"Commercial"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"matched_address"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
            <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
            <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
            <span class="token property">"is_residential"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"6925 Riverview Ave"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
            <span class="token property">"address_classification"</span><span class="token operator">:</span> <span class="token string">"Commercial"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">""</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/zh/Address Validation.html",pathLocale:"/zh/",permalink:null,routeMeta:{title:"\u5730\u5740\u6821\u9A8C"},slug:"Address Validation",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/zh/Address Validation.md",filePathRelative:"zh/Address Validation.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/Address Validation.html.vue",componentFilePathRelative:"pages/zh/Address Validation.html.vue",componentFileChunkName:"v-4efee709",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/Address Validation.html.js",dataFilePathRelative:"pages/zh/Address Validation.html.js",dataFileChunkName:"v-4efee709",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/zh/Address Validation.html",htmlFilePathRelative:"zh/Address Validation.html"},{data:{key:"v-5be0dd34",path:"/zh/Cancel%20Label.html",title:"\u53D6\u6D88\u8FD0\u5355",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]},{level:3,title:"Body\u53C2\u6570",slug:"body\u53C2\u6570",children:[]}],git:{createdTime:1662709054e3,updatedTime:1663321296e3,contributors:[{name:"Benny",email:"772970153@qq.com",commits:2}]},filePathRelative:"zh/Cancel Label.md"},key:"v-5be0dd34",path:"/zh/Cancel Label.html",title:"\u53D6\u6D88\u8FD0\u5355",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]},{level:3,title:"Body\u53C2\u6570",slug:"body\u53C2\u6570",children:[]}],content:`# \u53D6\u6D88\u8FD0\u5355

<table><tr><td style="text-align:center;width:80px">POST</td><td>/v1/open-api/label/cancel</td></tr></table>


### \u8BF7\u6C42\u5934\u90E8 

|   \u6807\u7B7E    | \u5FC5\u586B |                         \u8BF4\u660E                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   \u2713     | Api Key\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230 |
| Api-Secret |   \u2713     | Api Secret\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230 |

### Body\u53C2\u6570

| \u53C2\u6570\u540D |   \u7C7B\u578B   | \u5FC5\u586B |
| :-------: | :------: | :------: |
| order_num | [string] |    \u2713     |


:::: code-group 
::: code-group-item \u8BF7\u6C42\u62A5\u6587

\`\`\`json
curl -X POST  \\
  'https://api.sandbox.shipber.com/v1/open-api/label/cancel' \\
  -H 'Content-Type:application/json' \\
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '{"order_num":"cimy-977885"}'
\`\`\`

:::

::: code-group-item \u8FD4\u56DE\u62A5\u6587

\`\`\`json
{
    "data": {
        "status": "",
        "order_num": "",
        "custom_order_num": "",
        "shipment": {
            "carrier_service": "UPS Ground",
            "ship_from": {
                "uuid": "22d953b7-24c4-4ae9-afb4-111cc227b01e",
                "postal_code": "90045",
                "country_code": "US",
                "state_province_code": "CA",
                "is_residential": false,
                "addresses": ["5353 W Imperial Hwy Unit 900"],
                "city": "Los Angeles",
                "address_classification": "Commercial",
                "name": "Amazon",
                "phone": "0000000000",
                "attention": "Tom"
            },
            "ship_to": {
                "postal_code": "90045",
                "country_code": "US",
                "state_province_code": "CA",
                "is_residential": false,
                "addresses": ["5353 W Imperial Hwy Unit 900"],
                "city": "Los Angeles",
                "address_classification": "Commercial",
                "name": "Amazon",
                "phone": "0000000000",
                "attention": "Tom"
            },
            "packages": [{
                "dimension": {
                    "width": 10,
                    "height": 10,
                    "length": 10,
                    "code": "IN"
                },
                "weight": {
                    "code": "LBS",
                    "value": 20
                },
                "confirmation": "None",
                "insurance": {
                    "code": "USD",
                    "value": 20
                },
                "quantity": 1,
                "reference_numbers": [{
                    "code": "",
                    "value": "Test reference"
                }]
            }],
            "package_type": {
                "type": "common",
                "name": "Package"
            },
            "pickup_date": "20201029",
            "service_code": ""
        },
        "created_at": "2020-12-16T13:05:58.094Z"
    }
}
\`\`\`

:::
::::
`,contentRendered:`<h1 id="\u53D6\u6D88\u8FD0\u5355" tabindex="-1"><a class="header-anchor" href="#\u53D6\u6D88\u8FD0\u5355" aria-hidden="true">#</a> \u53D6\u6D88\u8FD0\u5355</h1>
<table><tr><td style="text-align:center;width:80px">POST</td><td>/v1/open-api/label/cancel</td></tr></table>
<h3 id="\u8BF7\u6C42\u5934\u90E8" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u5934\u90E8" aria-hidden="true">#</a> \u8BF7\u6C42\u5934\u90E8</h3>
<table>
<thead>
<tr>
<th style="text-align:center">\u6807\u7B7E</th>
<th style="text-align:center">\u5FC5\u586B</th>
<th style="text-align:center">\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Api-Key</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Key\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230</td>
</tr>
<tr>
<td style="text-align:center">Api-Secret</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Secret\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230</td>
</tr>
</tbody>
</table>
<h3 id="body\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#body\u53C2\u6570" aria-hidden="true">#</a> Body\u53C2\u6570</h3>
<table>
<thead>
<tr>
<th style="text-align:center">\u53C2\u6570\u540D</th>
<th style="text-align:center">\u7C7B\u578B</th>
<th style="text-align:center">\u5FC5\u586B</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">order_num</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
</tr>
</tbody>
</table>
<CodeGroup>
<CodeGroupItem title="\u8BF7\u6C42\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>curl -X POST  \\
  'https<span class="token operator">:</span><span class="token comment">//api.sandbox.shipber.com/v1/open-api/label/cancel' \\</span>
  -H 'Content-Type<span class="token operator">:</span>application/json' \\
  -H 'Api-Key<span class="token operator">:</span>2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret<span class="token operator">:</span>qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '<span class="token punctuation">{</span><span class="token property">"order_num"</span><span class="token operator">:</span><span class="token string">"cimy-977885"</span><span class="token punctuation">}</span>'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="\u8FD4\u56DE\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"order_num"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"custom_order_num"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"shipment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"carrier_service"</span><span class="token operator">:</span> <span class="token string">"UPS Ground"</span><span class="token punctuation">,</span>
            <span class="token property">"ship_from"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"22d953b7-24c4-4ae9-afb4-111cc227b01e"</span><span class="token punctuation">,</span>
                <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"90045"</span><span class="token punctuation">,</span>
                <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
                <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"CA"</span><span class="token punctuation">,</span>
                <span class="token property">"is_residential"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"5353 W Imperial Hwy Unit 900"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Los Angeles"</span><span class="token punctuation">,</span>
                <span class="token property">"address_classification"</span><span class="token operator">:</span> <span class="token string">"Commercial"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Amazon"</span><span class="token punctuation">,</span>
                <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0000000000"</span><span class="token punctuation">,</span>
                <span class="token property">"attention"</span><span class="token operator">:</span> <span class="token string">"Tom"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"ship_to"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"90045"</span><span class="token punctuation">,</span>
                <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
                <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"CA"</span><span class="token punctuation">,</span>
                <span class="token property">"is_residential"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"5353 W Imperial Hwy Unit 900"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Los Angeles"</span><span class="token punctuation">,</span>
                <span class="token property">"address_classification"</span><span class="token operator">:</span> <span class="token string">"Commercial"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Amazon"</span><span class="token punctuation">,</span>
                <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0000000000"</span><span class="token punctuation">,</span>
                <span class="token property">"attention"</span><span class="token operator">:</span> <span class="token string">"Tom"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token property">"dimension"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                    <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                    <span class="token property">"length"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"IN"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"LBS"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">20</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"confirmation"</span><span class="token operator">:</span> <span class="token string">"None"</span><span class="token punctuation">,</span>
                <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"USD"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">20</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">"reference_numbers"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"Test reference"</span>
                <span class="token punctuation">}</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"common"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Package"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"pickup_date"</span><span class="token operator">:</span> <span class="token string">"20201029"</span><span class="token punctuation">,</span>
            <span class="token property">"service_code"</span><span class="token operator">:</span> <span class="token string">""</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"created_at"</span><span class="token operator">:</span> <span class="token string">"2020-12-16T13:05:58.094Z"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/zh/Cancel Label.html",pathLocale:"/zh/",permalink:null,routeMeta:{title:"\u53D6\u6D88\u8FD0\u5355"},slug:"Cancel Label",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/zh/Cancel Label.md",filePathRelative:"zh/Cancel Label.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/Cancel Label.html.vue",componentFilePathRelative:"pages/zh/Cancel Label.html.vue",componentFileChunkName:"v-5be0dd34",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/Cancel Label.html.js",dataFilePathRelative:"pages/zh/Cancel Label.html.js",dataFileChunkName:"v-5be0dd34",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/zh/Cancel Label.html",htmlFilePathRelative:"zh/Cancel Label.html"},{data:{key:"v-367689cc",path:"/zh/Create%20Shipment%20from%20Quote.html",title:"\u6839\u636E\u8BA1\u8D39 id \u521B\u5EFA\u8FD0\u5355",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]},{level:3,title:"Body\u8BF7\u6C42\u53C2\u6570",slug:"body\u8BF7\u6C42\u53C2\u6570",children:[]},{level:3,title:"\u521B\u5EFA\u9000\u8D27\u8FD0\u5355",slug:"\u521B\u5EFA\u9000\u8D27\u8FD0\u5355",children:[]}],git:{createdTime:1674029908e3,updatedTime:1699199434e3,contributors:[{name:"Benny",email:"772970153@qq.com",commits:4},{name:"carpcai",email:"carp.cai@adber.com",commits:1}]},filePathRelative:"zh/Create Shipment from Quote.md"},key:"v-367689cc",path:"/zh/Create Shipment from Quote.html",title:"\u6839\u636E\u8BA1\u8D39 id \u521B\u5EFA\u8FD0\u5355",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]},{level:3,title:"Body\u8BF7\u6C42\u53C2\u6570",slug:"body\u8BF7\u6C42\u53C2\u6570",children:[]},{level:3,title:"\u521B\u5EFA\u9000\u8D27\u8FD0\u5355",slug:"\u521B\u5EFA\u9000\u8D27\u8FD0\u5355",children:[]}],content:`# \u6839\u636E\u8BA1\u8D39 id \u521B\u5EFA\u8FD0\u5355

<table><tr><td style="text-align:center;width:80px">POST</td><td>/v1/open-api/label</td></tr></table>

### \u8BF7\u6C42\u5934\u90E8

|   \u6807\u7B7E    | \u5FC5\u586B |                         \u8BF4\u660E                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   \u2713     | Api Key\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230 |
| Api-Secret |   \u2713     | Api Secret\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230 |

### Body\u8BF7\u6C42\u53C2\u6570


| \u53C2\u6570\u540D               |   \u7C7B\u578B    | \u5FC5\u586B | \u8BF4\u660E                                                                                                                                                        |
| :---------------------- | :-------: | :------: |-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| rate_id                 | [string]  |    \u2713     | \u901A\u8FC7 rate \u63A5\u53E3\u83B7\u5F97\u7684 id                                                                                                                                          |
| custom_order_num        | [string]  |    \u2713     |                                                                                                                                                           |
| shipment                | [object]  |    \u2713     | -                                                                                                                                                         |
| \uFE42ship_from             | [object]  |    \u2713     | \u53D1\u4EF6\u5730\u5740                                                                                                                                                      |
| \uFE42\uFE42uuid                | [string]  |         | \u53D1\u4EF6\u5730\u5740id\uFF0C \u6B64\u5B57\u6BB5\u4E0Eship from \u8BE6\u60C5\u4E8C\u9009\u4E00\uFF0C\u82E5\u586B\u4E86uuid\uFF0Cship_from\u5730\u5740\u8BE6\u60C5\u4E0D\u7528\u586B\u3002\u82E5\u6CA1\u586B\uFF0C\u5219\u5FC5\u987B\u586B\u4EE5\u4E0B\u5730\u5740\u8BE6\u60C5\u3002<br>[\u70B9\u51FB](Warehouse%20Address.md)\u67E5\u770B\u5982\u4F55\u83B7\u53D6uuid<br>\u793A\u4F8B\uFF1A22d953b7-24c4-4ae9-afb4-111cc227b01e |
| \uFE42\uFE42city                | [string]  |    \u2713     | \u53D1\u4EF6\u57CE\u5E02<br>\u793A\u4F8B\uFF1ALOS ANGELES                                                                                                                                    |
| \uFE42\uFE42name                | [object]  |    \u2713     | \u53D1\u4EF6\u516C\u53F8\u540D\u6216\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35<br>\u793A\u4F8B\uFF1AAmazon                                                                                                                             |
| \uFE42\uFE42email               | [string]  |          | \u90AE\u7BB1                                                                                                                                                        |
| \uFE42\uFE42addresses           |  [array]  |    \u2713     | \u5730\u5740\u8BE6\u60C5<br>\u793A\u4F8B\uFF1A 6925 Riverview Ave                                                                                                                            |
| \uFE42\uFE42postal_code         | [string]  |    \u2713     | \u53D1\u4EF6\u90AE\u7F16\uFF0C\u683C\u5F0F[12345]\u6216[12345-6789]<br>\u793A\u4F8B\uFF1A90045-6275                                                                                                              |
| \uFE42\uFE42country_code        | [string]  |    \u2713     | \u53D1\u4EF6\u56FD\u5BB6\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1AUS                                                                                                                                         |
| \uFE42\uFE42is_residential      | [boolean] |          | \u53D1\u4EF6\u5730\u5740\u662F\u5426\u4E3A\u4F4F\u5B85\u5730\u5740\u3002true\u8868\u793A\u4F4F\u5B85\u5730\u5740\uFF0Cfalse\u8868\u793A\u5546\u4E1A\u5730\u5740<br>\u793A\u4F8B\uFF1Afalse                                                                                                            |
| \uFE42\uFE42state_province_code | [string]  |    \u2713     | \u53D1\u4EF6\u5DDE\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1ACA                                                                                                                                          |
| \uFE42\uFE42phone               | [string]  |    \u2713     | \u53D1\u4EF6\u4EBA\u8054\u7CFB\u65B9\u5F0F\uFF0C\u81F3\u5C1110\u4F4D\u6570\u5B57<br>\u793A\u4F8B\uFF1A1000000000                                                                                                                          |
| \uFE42\uFE42attention           | [string]  |          | \u5907\u6CE8\u6216\u53D1\u4EF6\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35<br>\u793A\u4F8B\uFF1AAnn                                                                                                                                 |
| \uFE42ship_to               | [object]  |    \u2713     | \u6536\u4EF6\u5730\u5740                                                                                                                                                      |
| \uFE42\uFE42city                | [string]  |    \u2713     | \u6536\u4EF6\u5730\u5740\uFF0C\u57CE\u5E02\u540D<br>Example: PENFIELD                                                                                                                             |
| \uFE42\uFE42name                | [string]  |    \u2713     | \u6536\u4EF6\u516C\u53F8\u540D\u6216\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35<br>\u793A\u4F8B\uFF1AAnn                                                                                                                                |
| \uFE42\uFE42email               | [string]  |          | \u90AE\u7BB1                                                                                                                                                        |
| \uFE42\uFE42addresses           |  [array]  |    \u2713     | \u5730\u5740\u8BE6\u60C5<br>\u793A\u4F8B\uFF1A6925 Riverview Ave                                                                                                                             |
| \uFE42\uFE42postal_code         | [string]  |    \u2713     | \u6536\u4EF6\u90AE\u7F16\uFF0C\u683C\u5F0F[12345]\u6216[12345-6789]<br>\u793A\u4F8B\uFF1A14526                                                                                                                   |
| \uFE42\uFE42country_code        | [string]  |    \u2713     | \u6536\u4EF6\u56FD\u5BB6\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1AUS                                                                                                                                         |
| \uFE42\uFE42is_residential      | [boolean] |          | \u53D1\u4EF6\u5730\u5740\u662F\u5426\u4E3A\u4F4F\u5B85\u5730\u5740\u3002true\u8868\u793A\u4F4F\u5B85\u5730\u5740\uFF0Cfalse\u8868\u793A\u5546\u4E1A\u5730\u5740<br>\u793A\u4F8B\uFF1Afalse                                                                                                            |
| \uFE42\uFE42state_province_code | [string]  |    \u2713     | \u6536\u4EF6\u5DDE\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1ANY                                                                                                                                          |
| \uFE42\uFE42phone               | [string]  |    \u2713     | \u53D1\u4EF6\u4EBA\u8054\u7CFB\u65B9\u5F0F\uFF0C\u81F3\u5C1110\u4F4D\u6570\u5B57<br>\u793A\u4F8B\uFF1A(999)-999-9999                                                                                                                      |
| \uFE42\uFE42phone_ext              | [string]  |         | \u8054\u7CFB\u65B9\u5F0F\u5206\u673A\u53F7 \u9650\u5236:1-4\u4F4D<br>\u793A\u4F8B\uFF1A1234                                                                                                                                |
| \uFE42\uFE42attention           | [string]  |          | \u5907\u6CE8\u6216\u53D1\u4EF6\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35                                                                                                                                           |
| \uFE42packages              |  [array]  |    \u2713     | \u5305\u88F9\u8BE6\u60C5                                                                                                                                                      |
| \uFE42\uFE42dimension           | [object]  |    \u2713     | \u5305\u88F9\u5C3A\u5BF8<br>\u6700\u5927/\u6700\u5C0F\u5C3A\u5BF8\u503C\u56E0\u670D\u52A1\u548C\u5305\u88C5\u7C7B\u578B\u800C\u5F02                                                                                                                                |
| \uFE42\uFE42\uFE42width             | [number]  |    \u2713     | \u5305\u88F9\u5BBD\u5EA6\uFF0C\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A20.01                                                                                                                         |
| \uFE42\uFE42\uFE42height            | [number]  |    \u2713     | \u5305\u88F9\u9AD8\u5EA6\uFF0C\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A20.01                                                                                                                         |
| \uFE42\uFE42\uFE42length            | [number]  |    \u2713     | \u5305\u88F9\u957F\u5EA6\uFF0C\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A20.01                                                                                                                         |
| \uFE42\uFE42\uFE42code              | [string]  |    \u2713     | \u957F\u5EA6\u5355\u4F4D\uFF0C\u6709\u6548\u503C\u4E3A\uFF1Ain/cm<br>\u793A\u4F8B\uFF1Ain                                                                                                                                  |
| \uFE42\uFE42weight              | [object]  |    \u2713     | \u5305\u88F9\u91CD\u91CF                                                                                                                                                      |
| \uFE42\uFE42\uFE42code              | [string]  |    \u2713     | \u91CD\u91CF\u5355\u4F4D\uFF0C\u6709\u6548\u503C\u4E3A\uFF1Alb/oz/kg/g<br>\u6CE8\u610F\uFF1A\u8F93\u5165\u5927\u5199\u5B57\u6BCD\u4F1A\u62A5\u9519<br>\u793A\u4F8B\uFF1Alb                                                                                                             |
| \uFE42\uFE42\uFE42value             | [number]  |    \u2713     | \u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A68.25                                                                                                                              |
| \uFE42\uFE42confirmation        | [string]  |    \u2713     | \u7B7E\u540D\u670D\u52A1\uFF0C[\u70B9\u51FB](Conformation.md)\u67E5\u770B\u670D\u52A1\u5546\u652F\u6301\u7684\u7B7E\u540D\u670D\u52A1<br>\u793A\u4F8B:None                                                                                                        |
| \uFE42\uFE42insurance           | [object]  |          | \u4FDD\u9669\u670D\u52A1                                                                                                                                                      |
| \uFE42\uFE42\uFE42code              | [string]  |          | \u8D27\u5E01\u5355\u4F4D<br>\u793A\u4F8B:USD                                                                                                                                            |
| \uFE42\uFE42\uFE42value             | [number]  |          | \u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B:300.01                                                                                                                             |
| \uFE42\uFE42quantity            | [number]  |    \u2713     | \u5305\u88F9\u6570\u91CF<br>\u793A\u4F8B\uFF1A1                                                                                                                                              |
| \uFE42\uFE42reference_numbers   |  [array]  |    \u2713     | \u5305\u88F9\u5907\u6CE8                                                                                                                                                      |
| \uFE42\uFE42\uFE42code              | [string]  |    \u2713     | \u5907\u6CE8\u6807\u9898,[\u70B9\u51FB](Reference.md)\u67E5\u770B\u670D\u52A1\u5546\u652F\u6301\u7684\u5907\u6CE8\u4FE1\u606F<br>\u793A\u4F8B\uFF1AINVOICE                                                                                                         |
| \uFE42\uFE42\uFE42value             | [object]  |    \u2713     | \u5907\u6CE8\u5185\u5BB9\uFF0C\u6BCF\u4E2A\u5907\u6CE8\u9650\u5236\u957F\u5EA6\uFF1A40<br>\u793A\u4F8B\uFF1AP84746-KMD                                                                                                                         |
| \uFE42package_type          | [object]  |     \u2713     | \u5305\u88F9\u7C7B\u578B\u3002[\u70B9\u51FB](PackageType.md)\u67E5\u770B\u670D\u52A1\u5546\u652F\u6301\u7684\u5305\u88F9\u7C7B\u578B                                                                                                                     |
| \uFE42\uFE42type                | [string]  |    \u2713     | \u793A\u4F8B\uFF1Acommon                                                                                                                                                 |
| \uFE42\uFE42name                | [string]  |    \u2713     | \u793A\u4F8B\uFF1APackage                                                                                                                                                |
| \uFE42label_specification   | [object]  |         | \u9762\u5355\u89C4\u683C                                                                                                               |
| \uFE42\uFE42label_format         | [string]  |         | \u793A\u4F8B\uFF1Apdf \u3002\u53EF\u9009\u53C2\u6570\uFF1Azpl , pdf                                                                                                                                                |
| \uFE42pickup_date           | [string]  |    \u2713     | \u53D6\u4EF6\u65E5\u671F\uFF0C\u683C\u5F0F[yyyymmdd]<br>\u793A\u4F8B\uFF1A20221001                                                                                                                          |





:::: code-group
::: code-group-item \u8BF7\u6C42\u62A5\u6587

\`\`\`json
curl -X POST  \\
  'https://api.sandbox.shipber.com/v1/open-api/label' \\
  -H 'Content-Type:application/json' \\
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '{
    "rate_id": "eyJzZXJ2aWNlQ29kZSI6InVwc19ncm91bmQiLCJjaGFpbklkIjoyMDAzLCJwYWNrYWdlVHlwZSI6IlBhY2thZ2UifQ==",
    "custom_order_num": "cimy-977885",
    "shipment": {
        "ship_from": {
            "uuid": "7b572b8d-08a3-4cc7-a711-1aae28e9ffcf"
        },
        "ship_to": {
            "city": "Kansas City",
            "name": "Test Company",
            "addresses": [
                "6925 Riverview Ave"
            ],
            "postal_code": "66102",
            "country_code": "US",
            "state_province_code": "KS",
            "phone": "0123456789"
        },
        "packages": [
            {
                "dimension": {
                    "width": 7,
                    "height": 13,
                    "length": 4,
                    "code": "IN"
                },
                "weight": {
                    "code": "lb",
                    "value": 6
                },
                "confirmation": "None",
                "quantity": 1,
                "reference_numbers": [
                    {
                        "code": "reference #1",
                        "value": "1"
                    }
                ]
            }
        ],
        "package_type": {
            "type": "common",
            "name": "Package"
        },
        "label_specification": {
            "label_format": "pdf"
        },
        "pickup_date": "20211010"
    }
}'
\`\`\`
:::

::: code-group-item \u8FD4\u56DE\u62A5\u6587

\`\`\`json
{
    "data": {
        "status": "Printing",
        "order_num": "ST161853120081597000",
        "shipment": {
            "ship_from": {
                "city": "Kansas City",
                "name": "Test Company",
                "email": "123456@gmail.com",
                "addresses": ["6925 Riverview Ave"],
                "postal_code": "66102",
                "country_code": "US",
                "is_residential": true,
                "state_province_code": "KS",
                "attention": "",
                "phone": "0123456789"
            },
            "ship_to": {
                "country_code": "US",
                "phone": "8888888888",
                "name": "Test Company",
                "addresses": ["6925 Riverview Ave"],
                "city": "Kansas City",
                "state_province_code": "NC",
                "postal_code": "66102",
                "attention": ""
            },
            "packages": [{
                "dimension": {
                    "width": 7,
                    "height": 13,
                    "length": 4,
                    "code": "IN"
                },
                "weight": {
                    "code": "LBS",
                    "value": 6
                },
                "confirmation": "Delivery",
                "insurance": {
                    "code": "USD",
                    "value": 20
                },
                "quantity": 1
            }],
            "package_type": {
                "type": "common",
                "name": "Package"
            },
            "label_specification": {
                "label_format": "pdf"
            },
            "pickup_date": "20210416",
            "service_code": "fedex_ground"
        },
        "created_at": "2021-04-16T04:30:28.632Z",
        "custom_order_num": "cimy-15913"
    }
}
\`\`\`

:::
::::

### \u521B\u5EFA\u9000\u8D27\u8FD0\u5355
  \u53EF\u4EE5\u901A\u8FC7\u5C06is_return_label\u8BBE\u7F6E\u4E3Atrue\u6765\u521B\u5EFA\u9000\u8D27\u8FD0\u5355


:::: code-group
::: code-group-item \u8BF7\u6C42\u62A5\u6587

\`\`\`json
curl -X POST  \\
  'https://api.sandbox.shipber.com/v1/open-api/label' \\
  -H 'Content-Type:application/json' \\
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '{
    "is_return_label":true,
    "rma_number": "123",
    "rma_reason": "Other",
    "rate_id": "eyJzZXJ2aWNlQ29kZSI6ImZlZGV4X2dyb3VuZCIsImNoYWluSWQiOjIwMDIsInBhY2thZ2VUeXBlIjoiUGFja2FnZSJ9",
    "custom_order_num": "cimy-977885",
    "shipment": {
        "ship_from": {
            "city": "Kansas City",
            "name": "Test Company",
            "addresses": [
                "6925 Riverview Ave"
            ],
            "postal_code": "66102",
            "country_code": "US",
            "state_province_code": "KS",
            "phone": "0123456789"
        },
        "ship_to": {
            "uuid": "7b572b8d-08a3-4cc7-a711-1aae28e9ffcf"
        },
        "packages": [
            {
                "dimension": {
                    "width": 7,
                    "height": 13,
                    "length": 4,
                    "code": "IN"
                },
                "weight": {
                    "code": "lb",
                    "value": 6
                },
                "confirmation": "None",
                "quantity": 1,
                "reference_numbers": [
                    {
                        "code": "reference #1",
                        "value": "1"
                    }
                ]
            }
        ],
        "package_type": {
            "type": "common",
            "name": "Package"
        },
        "pickup_date": "20211010"
    }
}'
\`\`\`
:::

::: code-group-item \u8FD4\u56DE\u62A5\u6587

\`\`\`json
{
    "data": {
        "status": "Printing",
        "order_num": "ST161853120081597000",
        "shipment": {
            "ship_from": {
                "country_code": "US",
                "phone": "8888888888",
                "name": "Test Company",
                "addresses": ["6925 Riverview Ave"],
                "city": "Kansas City",
                "state_province_code": "KS",
                "postal_code": "66102",
                "attention": ""
            },
            "ship_to": {
                "city": "Kansas City",
                "name": "Test Company",
                "email": "123456@gmail.com",
                "addresses": ["6925 Riverview Ave"],
                "postal_code": "66102",
                "country_code": "US",
                "is_residential": true,
                "state_province_code": "KS",
                "attention": "",
                "phone": "0123456789"
            },
            "packages": [{
                "dimension": {
                    "width": 7,
                    "height": 13,
                    "length": 4,
                    "code": "IN"
                },
                "weight": {
                    "code": "LBS",
                    "value": 6
                },
                "confirmation": "Delivery",
                "insurance": {
                    "code": "USD",
                    "value": 20
                },
                "quantity": 1
            }],
            "package_type": {
                "type": "common",
                "name": "Package"
            },
            "pickup_date": "20210416",
            "service_code": "fedex_ground"
        },
        "created_at": "2021-04-16T04:30:28.632Z",
        "custom_order_num": "cimy-15913"
    }
}
\`\`\`

:::
::::



`,contentRendered:`<h1 id="\u6839\u636E\u8BA1\u8D39-id-\u521B\u5EFA\u8FD0\u5355" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u8BA1\u8D39-id-\u521B\u5EFA\u8FD0\u5355" aria-hidden="true">#</a> \u6839\u636E\u8BA1\u8D39 id \u521B\u5EFA\u8FD0\u5355</h1>
<table><tr><td style="text-align:center;width:80px">POST</td><td>/v1/open-api/label</td></tr></table>
<h3 id="\u8BF7\u6C42\u5934\u90E8" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u5934\u90E8" aria-hidden="true">#</a> \u8BF7\u6C42\u5934\u90E8</h3>
<table>
<thead>
<tr>
<th style="text-align:center">\u6807\u7B7E</th>
<th style="text-align:center">\u5FC5\u586B</th>
<th style="text-align:center">\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Api-Key</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Key\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230</td>
</tr>
<tr>
<td style="text-align:center">Api-Secret</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Secret\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230</td>
</tr>
</tbody>
</table>
<h3 id="body\u8BF7\u6C42\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#body\u8BF7\u6C42\u53C2\u6570" aria-hidden="true">#</a> Body\u8BF7\u6C42\u53C2\u6570</h3>
<table>
<thead>
<tr>
<th style="text-align:left">\u53C2\u6570\u540D</th>
<th style="text-align:center">\u7C7B\u578B</th>
<th style="text-align:center">\u5FC5\u586B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">rate_id</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u901A\u8FC7 rate \u63A5\u53E3\u83B7\u5F97\u7684 id</td>
</tr>
<tr>
<td style="text-align:left">custom_order_num</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">shipment</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>-</td>
</tr>
<tr>
<td style="text-align:left">\uFE42ship_from</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u5730\u5740</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42uuid</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u53D1\u4EF6\u5730\u5740id\uFF0C \u6B64\u5B57\u6BB5\u4E0Eship from \u8BE6\u60C5\u4E8C\u9009\u4E00\uFF0C\u82E5\u586B\u4E86uuid\uFF0Cship_from\u5730\u5740\u8BE6\u60C5\u4E0D\u7528\u586B\u3002\u82E5\u6CA1\u586B\uFF0C\u5219\u5FC5\u987B\u586B\u4EE5\u4E0B\u5730\u5740\u8BE6\u60C5\u3002<br><RouterLink to="/zh/Warehouse%20Address.html">\u70B9\u51FB</RouterLink>\u67E5\u770B\u5982\u4F55\u83B7\u53D6uuid<br>\u793A\u4F8B\uFF1A22d953b7-24c4-4ae9-afb4-111cc227b01e</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42city</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u57CE\u5E02<br>\u793A\u4F8B\uFF1ALOS ANGELES</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42name</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u516C\u53F8\u540D\u6216\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35<br>\u793A\u4F8B\uFF1AAmazon</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42email</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u90AE\u7BB1</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42addresses</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center">\u2713</td>
<td>\u5730\u5740\u8BE6\u60C5<br>\u793A\u4F8B\uFF1A 6925 Riverview Ave</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42postal_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u90AE\u7F16\uFF0C\u683C\u5F0F[12345]\u6216[12345-6789]<br>\u793A\u4F8B\uFF1A90045-6275</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42country_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u56FD\u5BB6\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1AUS</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42is_residential</td>
<td style="text-align:center">[boolean]</td>
<td style="text-align:center"></td>
<td>\u53D1\u4EF6\u5730\u5740\u662F\u5426\u4E3A\u4F4F\u5B85\u5730\u5740\u3002true\u8868\u793A\u4F4F\u5B85\u5730\u5740\uFF0Cfalse\u8868\u793A\u5546\u4E1A\u5730\u5740<br>\u793A\u4F8B\uFF1Afalse</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42state_province_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u5DDE\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1ACA</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42phone</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u4EBA\u8054\u7CFB\u65B9\u5F0F\uFF0C\u81F3\u5C1110\u4F4D\u6570\u5B57<br>\u793A\u4F8B\uFF1A1000000000</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42attention</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u5907\u6CE8\u6216\u53D1\u4EF6\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35<br>\u793A\u4F8B\uFF1AAnn</td>
</tr>
<tr>
<td style="text-align:left">\uFE42ship_to</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>\u6536\u4EF6\u5730\u5740</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42city</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u6536\u4EF6\u5730\u5740\uFF0C\u57CE\u5E02\u540D<br>Example: PENFIELD</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42name</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u6536\u4EF6\u516C\u53F8\u540D\u6216\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35<br>\u793A\u4F8B\uFF1AAnn</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42email</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u90AE\u7BB1</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42addresses</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center">\u2713</td>
<td>\u5730\u5740\u8BE6\u60C5<br>\u793A\u4F8B\uFF1A6925 Riverview Ave</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42postal_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u6536\u4EF6\u90AE\u7F16\uFF0C\u683C\u5F0F[12345]\u6216[12345-6789]<br>\u793A\u4F8B\uFF1A14526</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42country_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u6536\u4EF6\u56FD\u5BB6\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1AUS</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42is_residential</td>
<td style="text-align:center">[boolean]</td>
<td style="text-align:center"></td>
<td>\u53D1\u4EF6\u5730\u5740\u662F\u5426\u4E3A\u4F4F\u5B85\u5730\u5740\u3002true\u8868\u793A\u4F4F\u5B85\u5730\u5740\uFF0Cfalse\u8868\u793A\u5546\u4E1A\u5730\u5740<br>\u793A\u4F8B\uFF1Afalse</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42state_province_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u6536\u4EF6\u5DDE\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1ANY</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42phone</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u4EBA\u8054\u7CFB\u65B9\u5F0F\uFF0C\u81F3\u5C1110\u4F4D\u6570\u5B57<br>\u793A\u4F8B\uFF1A(999)-999-9999</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42phone_ext</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u8054\u7CFB\u65B9\u5F0F\u5206\u673A\u53F7 \u9650\u5236:1-4\u4F4D<br>\u793A\u4F8B\uFF1A1234</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42attention</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u5907\u6CE8\u6216\u53D1\u4EF6\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35</td>
</tr>
<tr>
<td style="text-align:left">\uFE42packages</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u8BE6\u60C5</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42dimension</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u5C3A\u5BF8<br>\u6700\u5927/\u6700\u5C0F\u5C3A\u5BF8\u503C\u56E0\u670D\u52A1\u548C\u5305\u88C5\u7C7B\u578B\u800C\u5F02</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42width</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u5BBD\u5EA6\uFF0C\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A20.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42height</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u9AD8\u5EA6\uFF0C\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A20.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42length</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u957F\u5EA6\uFF0C\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A20.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u957F\u5EA6\u5355\u4F4D\uFF0C\u6709\u6548\u503C\u4E3A\uFF1Ain/cm<br>\u793A\u4F8B\uFF1Ain</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42weight</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u91CD\u91CF</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u91CD\u91CF\u5355\u4F4D\uFF0C\u6709\u6548\u503C\u4E3A\uFF1Alb/oz/kg/g<br>\u6CE8\u610F\uFF1A\u8F93\u5165\u5927\u5199\u5B57\u6BCD\u4F1A\u62A5\u9519<br>\u793A\u4F8B\uFF1Alb</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42value</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A68.25</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42confirmation</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u7B7E\u540D\u670D\u52A1\uFF0C<RouterLink to="/zh/Conformation.html">\u70B9\u51FB</RouterLink>\u67E5\u770B\u670D\u52A1\u5546\u652F\u6301\u7684\u7B7E\u540D\u670D\u52A1<br>\u793A\u4F8B:None</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42insurance</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center"></td>
<td>\u4FDD\u9669\u670D\u52A1</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u8D27\u5E01\u5355\u4F4D<br>\u793A\u4F8B:USD</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42value</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center"></td>
<td>\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B:300.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42quantity</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u6570\u91CF<br>\u793A\u4F8B\uFF1A1</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42reference_numbers</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u5907\u6CE8</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u5907\u6CE8\u6807\u9898,<RouterLink to="/zh/Reference.html">\u70B9\u51FB</RouterLink>\u67E5\u770B\u670D\u52A1\u5546\u652F\u6301\u7684\u5907\u6CE8\u4FE1\u606F<br>\u793A\u4F8B\uFF1AINVOICE</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42value</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>\u5907\u6CE8\u5185\u5BB9\uFF0C\u6BCF\u4E2A\u5907\u6CE8\u9650\u5236\u957F\u5EA6\uFF1A40<br>\u793A\u4F8B\uFF1AP84746-KMD</td>
</tr>
<tr>
<td style="text-align:left">\uFE42package_type</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u7C7B\u578B\u3002<RouterLink to="/zh/PackageType.html">\u70B9\u51FB</RouterLink>\u67E5\u770B\u670D\u52A1\u5546\u652F\u6301\u7684\u5305\u88F9\u7C7B\u578B</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42type</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u793A\u4F8B\uFF1Acommon</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42name</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u793A\u4F8B\uFF1APackage</td>
</tr>
<tr>
<td style="text-align:left">\uFE42label_specification</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center"></td>
<td>\u9762\u5355\u89C4\u683C</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42label_format</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u793A\u4F8B\uFF1Apdf \u3002\u53EF\u9009\u53C2\u6570\uFF1Azpl , pdf</td>
</tr>
<tr>
<td style="text-align:left">\uFE42pickup_date</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D6\u4EF6\u65E5\u671F\uFF0C\u683C\u5F0F[yyyymmdd]<br>\u793A\u4F8B\uFF1A20221001</td>
</tr>
</tbody>
</table>
<CodeGroup>
<CodeGroupItem title="\u8BF7\u6C42\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>curl -X POST  \\
  'https<span class="token operator">:</span><span class="token comment">//api.sandbox.shipber.com/v1/open-api/label' \\</span>
  -H 'Content-Type<span class="token operator">:</span>application/json' \\
  -H 'Api-Key<span class="token operator">:</span>2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret<span class="token operator">:</span>qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '<span class="token punctuation">{</span>
    <span class="token property">"rate_id"</span><span class="token operator">:</span> <span class="token string">"eyJzZXJ2aWNlQ29kZSI6InVwc19ncm91bmQiLCJjaGFpbklkIjoyMDAzLCJwYWNrYWdlVHlwZSI6IlBhY2thZ2UifQ=="</span><span class="token punctuation">,</span>
    <span class="token property">"custom_order_num"</span><span class="token operator">:</span> <span class="token string">"cimy-977885"</span><span class="token punctuation">,</span>
    <span class="token property">"shipment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"ship_from"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"7b572b8d-08a3-4cc7-a711-1aae28e9ffcf"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"ship_to"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Test Company"</span><span class="token punctuation">,</span>
            <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">"6925 Riverview Ave"</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
            <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
            <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
            <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0123456789"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">"dimension"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                    <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
                    <span class="token property">"length"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"IN"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"lb"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">6</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"confirmation"</span><span class="token operator">:</span> <span class="token string">"None"</span><span class="token punctuation">,</span>
                <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">"reference_numbers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"reference #1"</span><span class="token punctuation">,</span>
                        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"1"</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"common"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Package"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"label_specification"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"label_format"</span><span class="token operator">:</span> <span class="token string">"pdf"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"pickup_date"</span><span class="token operator">:</span> <span class="token string">"20211010"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="\u8FD4\u56DE\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"Printing"</span><span class="token punctuation">,</span>
        <span class="token property">"order_num"</span><span class="token operator">:</span> <span class="token string">"ST161853120081597000"</span><span class="token punctuation">,</span>
        <span class="token property">"shipment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"ship_from"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Test Company"</span><span class="token punctuation">,</span>
                <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"123456@gmail.com"</span><span class="token punctuation">,</span>
                <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"6925 Riverview Ave"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
                <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
                <span class="token property">"is_residential"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
                <span class="token property">"attention"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0123456789"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"ship_to"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
                <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"8888888888"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Test Company"</span><span class="token punctuation">,</span>
                <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"6925 Riverview Ave"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
                <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"NC"</span><span class="token punctuation">,</span>
                <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
                <span class="token property">"attention"</span><span class="token operator">:</span> <span class="token string">""</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token property">"dimension"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                    <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
                    <span class="token property">"length"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"IN"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"LBS"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">6</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"confirmation"</span><span class="token operator">:</span> <span class="token string">"Delivery"</span><span class="token punctuation">,</span>
                <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"USD"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">20</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"common"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Package"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"label_specification"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"label_format"</span><span class="token operator">:</span> <span class="token string">"pdf"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"pickup_date"</span><span class="token operator">:</span> <span class="token string">"20210416"</span><span class="token punctuation">,</span>
            <span class="token property">"service_code"</span><span class="token operator">:</span> <span class="token string">"fedex_ground"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"created_at"</span><span class="token operator">:</span> <span class="token string">"2021-04-16T04:30:28.632Z"</span><span class="token punctuation">,</span>
        <span class="token property">"custom_order_num"</span><span class="token operator">:</span> <span class="token string">"cimy-15913"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="\u521B\u5EFA\u9000\u8D27\u8FD0\u5355" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9000\u8D27\u8FD0\u5355" aria-hidden="true">#</a> \u521B\u5EFA\u9000\u8D27\u8FD0\u5355</h3>
<p>\u53EF\u4EE5\u901A\u8FC7\u5C06is_return_label\u8BBE\u7F6E\u4E3Atrue\u6765\u521B\u5EFA\u9000\u8D27\u8FD0\u5355</p>
<CodeGroup>
<CodeGroupItem title="\u8BF7\u6C42\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>curl -X POST  \\
  'https<span class="token operator">:</span><span class="token comment">//api.sandbox.shipber.com/v1/open-api/label' \\</span>
  -H 'Content-Type<span class="token operator">:</span>application/json' \\
  -H 'Api-Key<span class="token operator">:</span>2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret<span class="token operator">:</span>qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '<span class="token punctuation">{</span>
    <span class="token property">"is_return_label"</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"rma_number"</span><span class="token operator">:</span> <span class="token string">"123"</span><span class="token punctuation">,</span>
    <span class="token property">"rma_reason"</span><span class="token operator">:</span> <span class="token string">"Other"</span><span class="token punctuation">,</span>
    <span class="token property">"rate_id"</span><span class="token operator">:</span> <span class="token string">"eyJzZXJ2aWNlQ29kZSI6ImZlZGV4X2dyb3VuZCIsImNoYWluSWQiOjIwMDIsInBhY2thZ2VUeXBlIjoiUGFja2FnZSJ9"</span><span class="token punctuation">,</span>
    <span class="token property">"custom_order_num"</span><span class="token operator">:</span> <span class="token string">"cimy-977885"</span><span class="token punctuation">,</span>
    <span class="token property">"shipment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"ship_from"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Test Company"</span><span class="token punctuation">,</span>
            <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">"6925 Riverview Ave"</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
            <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
            <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
            <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0123456789"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"ship_to"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"7b572b8d-08a3-4cc7-a711-1aae28e9ffcf"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">"dimension"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                    <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
                    <span class="token property">"length"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"IN"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"lb"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">6</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"confirmation"</span><span class="token operator">:</span> <span class="token string">"None"</span><span class="token punctuation">,</span>
                <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">"reference_numbers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"reference #1"</span><span class="token punctuation">,</span>
                        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"1"</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"common"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Package"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"pickup_date"</span><span class="token operator">:</span> <span class="token string">"20211010"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="\u8FD4\u56DE\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"Printing"</span><span class="token punctuation">,</span>
        <span class="token property">"order_num"</span><span class="token operator">:</span> <span class="token string">"ST161853120081597000"</span><span class="token punctuation">,</span>
        <span class="token property">"shipment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"ship_from"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
                <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"8888888888"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Test Company"</span><span class="token punctuation">,</span>
                <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"6925 Riverview Ave"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
                <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
                <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
                <span class="token property">"attention"</span><span class="token operator">:</span> <span class="token string">""</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"ship_to"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Test Company"</span><span class="token punctuation">,</span>
                <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"123456@gmail.com"</span><span class="token punctuation">,</span>
                <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"6925 Riverview Ave"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
                <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
                <span class="token property">"is_residential"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
                <span class="token property">"attention"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0123456789"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token property">"dimension"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                    <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
                    <span class="token property">"length"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"IN"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"LBS"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">6</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"confirmation"</span><span class="token operator">:</span> <span class="token string">"Delivery"</span><span class="token punctuation">,</span>
                <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"USD"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">20</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"common"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Package"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"pickup_date"</span><span class="token operator">:</span> <span class="token string">"20210416"</span><span class="token punctuation">,</span>
            <span class="token property">"service_code"</span><span class="token operator">:</span> <span class="token string">"fedex_ground"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"created_at"</span><span class="token operator">:</span> <span class="token string">"2021-04-16T04:30:28.632Z"</span><span class="token punctuation">,</span>
        <span class="token property">"custom_order_num"</span><span class="token operator">:</span> <span class="token string">"cimy-15913"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[{raw:"Warehouse%20Address.md",relative:"zh/Warehouse%20Address.md",absolute:"/zh/Warehouse%20Address.md"},{raw:"Conformation.md",relative:"zh/Conformation.md",absolute:"/zh/Conformation.md"},{raw:"Reference.md",relative:"zh/Reference.md",absolute:"/zh/Reference.md"},{raw:"PackageType.md",relative:"zh/PackageType.md",absolute:"/zh/PackageType.md"}],pathInferred:"/zh/Create Shipment from Quote.html",pathLocale:"/zh/",permalink:null,routeMeta:{title:"\u6839\u636E\u8BA1\u8D39 id \u521B\u5EFA\u8FD0\u5355"},slug:"Create Shipment from Quote",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/zh/Create Shipment from Quote.md",filePathRelative:"zh/Create Shipment from Quote.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/Create Shipment from Quote.html.vue",componentFilePathRelative:"pages/zh/Create Shipment from Quote.html.vue",componentFileChunkName:"v-367689cc",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/Create Shipment from Quote.html.js",dataFilePathRelative:"pages/zh/Create Shipment from Quote.html.js",dataFileChunkName:"v-367689cc",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/zh/Create Shipment from Quote.html",htmlFilePathRelative:"zh/Create Shipment from Quote.html"},{data:{key:"v-57c12940",path:"/zh/Create%20Shipment.html",title:"\u521B\u5EFA\u8FD0\u5355",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]},{level:3,title:"Body\u8BF7\u6C42\u53C2\u6570",slug:"body\u8BF7\u6C42\u53C2\u6570",children:[]}],git:{createdTime:1673977295e3,updatedTime:1699199434e3,contributors:[{name:"Benny",email:"772970153@qq.com",commits:9},{name:"carpcai",email:"carp.cai@adber.com",commits:1}]},filePathRelative:"zh/Create Shipment.md"},key:"v-57c12940",path:"/zh/Create Shipment.html",title:"\u521B\u5EFA\u8FD0\u5355",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]},{level:3,title:"Body\u8BF7\u6C42\u53C2\u6570",slug:"body\u8BF7\u6C42\u53C2\u6570",children:[]}],content:`# \u521B\u5EFA\u8FD0\u5355

<table><tr><td style="text-align:center;width:80px">POST</td><td>/open-api/v2/label</td></tr></table>

### \u8BF7\u6C42\u5934\u90E8

|   \u6807\u7B7E    | \u5FC5\u586B |                         \u8BF4\u660E                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   \u2713     | Api Key\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230 |
| Api-Secret |   \u2713     | Api Secret\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230 |

### Body\u8BF7\u6C42\u53C2\u6570


| \u53C2\u6570\u540D               |   \u7C7B\u578B    | \u5FC5\u586B | \u8BF4\u660E                                                                                                                                                        |
| :---------------------- | :-------: | :------: |-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| custom_order_num        | [string]  |    \u2713     |                                                                                                                                                           |
| shipment                | [object]  |    \u2713     | -     |
| \uFE42\uFE42carrier | [string] |  | \u7269\u6D41\u670D\u52A1\u5546\u7F16\u7801\uFF0C\u6B64\u5B57\u6BB5\u4F1A\u7B5B\u9009\u51FA\u8BE5\u670D\u52A1\u5546\u7684\u670D\u52A1\uFF0C\u5E76\u521B\u5EFA\u9762\u5355\u3002\u3010\u5982\u6709\u591A\u4E2A\uFF0C\u5219\u4F7F\u7528\u6700\u4F4E\u4EF7\u683C\u7684\u670D\u52A1\u521B\u5EFA\u9762\u5355\u3002\u3011\u793A\u4F8B: ups,fedex      |
| \uFE42\uFE42service_code          | [string]  |          | \u670D\u52A1\u4EE3\u7801\uFF0C\u7528\u4E8E\u521B\u5EFA\u6307\u5B9A\u670D\u52A1\u7684\u8FD0\u5355\u3010\u82E5\u5B58\u5728\u591A\u4E2A\uFF0C\u5219\u81EA\u52A8\u9009\u62E9\u6700\u4F4E\u4EF7\u683C\u7684\u670D\u52A1\u3011\uFF0C[\u70B9\u51FB](Service_Code.md)\u53EF\u67E5\u770B\u6240\u6709\u670D\u52A1\u4EE3\u7801\u3002<br>\u793A\u4F8B\uFF1Aups_ground                               |
| \uFE42ship_from             | [object]  |    \u2713     | \u53D1\u4EF6\u5730\u5740                                                                                                                                                      |
| \uFE42\uFE42uuid                | [string]  |         | \u53D1\u4EF6\u5730\u5740id\uFF0C \u6B64\u5B57\u6BB5\u4E0Eship from \u8BE6\u60C5\u4E8C\u9009\u4E00\uFF0C\u82E5\u586B\u4E86uuid\uFF0Cship_from\u5730\u5740\u8BE6\u60C5\u4E0D\u7528\u586B\u3002\u82E5\u6CA1\u586B\uFF0C\u5219\u5FC5\u987B\u586B\u4EE5\u4E0B\u5730\u5740\u8BE6\u60C5\u3002<br>[\u70B9\u51FB](Warehouse%20Address.md)\u67E5\u770B\u5982\u4F55\u83B7\u53D6uuid<br>\u793A\u4F8B\uFF1A22d953b7-24c4-4ae9-afb4-111cc227b01e |
| \uFE42\uFE42city                | [string]  |    \u2713     | \u53D1\u4EF6\u57CE\u5E02<br>\u793A\u4F8B\uFF1ALOS ANGELES                                                                                                                                    |
| \uFE42\uFE42name                | [object]  |    \u2713     | \u53D1\u4EF6\u516C\u53F8\u540D\u6216\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35<br>\u793A\u4F8B\uFF1AAmazon                                                                                                                             |
| \uFE42\uFE42email               | [string]  |          | \u90AE\u7BB1                                                                                                                                                        |
| \uFE42\uFE42addresses           |  [array]  |    \u2713     | \u5730\u5740\u8BE6\u60C5<br>\u793A\u4F8B\uFF1A 6925 Riverview Ave                                                                                                                            |
| \uFE42\uFE42postal_code         | [string]  |    \u2713     | \u53D1\u4EF6\u90AE\u7F16\uFF0C\u683C\u5F0F[12345]\u6216[12345-6789]<br>\u793A\u4F8B\uFF1A90045-6275                                                                                                              |
| \uFE42\uFE42country_code        | [string]  |    \u2713     | \u53D1\u4EF6\u56FD\u5BB6\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1AUS                                                                                                                                         |
| \uFE42\uFE42is_residential      | [boolean] |          | \u53D1\u4EF6\u5730\u5740\u662F\u5426\u4E3A\u4F4F\u5B85\u5730\u5740\u3002true\u8868\u793A\u4F4F\u5B85\u5730\u5740\uFF0Cfalse\u8868\u793A\u5546\u4E1A\u5730\u5740<br>\u793A\u4F8B\uFF1Afalse                                                                                                            |
| \uFE42\uFE42state_province_code | [string]  |    \u2713     | \u53D1\u4EF6\u5DDE\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1ACA                                                                                                                                          |
| \uFE42\uFE42phone               | [string]  |    \u2713     | \u53D1\u4EF6\u4EBA\u8054\u7CFB\u65B9\u5F0F\uFF0C\u81F3\u5C1110\u4F4D\u6570\u5B57<br>\u793A\u4F8B\uFF1A1000000000                                                                                                                          |
| \uFE42\uFE42attention           | [string]  |          | \u5907\u6CE8\u6216\u53D1\u4EF6\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35<br>\u793A\u4F8B\uFF1AAnn                                                                                                                                 |
| \uFE42ship_to               | [object]  |    \u2713     | \u6536\u4EF6\u5730\u5740                                                                                                                                                      |
| \uFE42\uFE42city                | [string]  |    \u2713     | \u6536\u4EF6\u5730\u5740\uFF0C\u57CE\u5E02\u540D<br>Example: PENFIELD                                                                                                                             |
| \uFE42\uFE42name                | [string]  |    \u2713     | \u6536\u4EF6\u516C\u53F8\u540D\u6216\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35<br>\u793A\u4F8B\uFF1AAnn                                                                                                                                |
| \uFE42\uFE42email               | [string]  |          | \u90AE\u7BB1                                                                                                                                                        |
| \uFE42\uFE42addresses           |  [array]  |    \u2713     | \u5730\u5740\u8BE6\u60C5<br>\u793A\u4F8B\uFF1A6925 Riverview Ave                                                                                                                             |
| \uFE42\uFE42postal_code         | [string]  |    \u2713     | \u6536\u4EF6\u90AE\u7F16\uFF0C\u683C\u5F0F[12345]\u6216[12345-6789]<br>\u793A\u4F8B\uFF1A14526                                                                                                                   |
| \uFE42\uFE42country_code        | [string]  |    \u2713     | \u6536\u4EF6\u56FD\u5BB6\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1AUS                                                                                                                                         |
| \uFE42\uFE42is_residential      | [boolean] |          | \u53D1\u4EF6\u5730\u5740\u662F\u5426\u4E3A\u4F4F\u5B85\u5730\u5740\u3002true\u8868\u793A\u4F4F\u5B85\u5730\u5740\uFF0Cfalse\u8868\u793A\u5546\u4E1A\u5730\u5740<br>\u793A\u4F8B\uFF1Afalse                                                                                                            |
| \uFE42\uFE42state_province_code | [string]  |    \u2713     | \u6536\u4EF6\u5DDE\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1ANY                                                                                                                                          |
| \uFE42\uFE42phone               | [string]  |    \u2713     | \u53D1\u4EF6\u4EBA\u8054\u7CFB\u65B9\u5F0F\uFF0C\u81F3\u5C1110\u4F4D\u6570\u5B57<br>\u793A\u4F8B\uFF1A(999)-999-9999                                                                                                                      |
| \uFE42\uFE42phone_ext              | [string]  |         | \u8054\u7CFB\u65B9\u5F0F\u5206\u673A\u53F7 \u9650\u5236:1-4\u4F4D<br>\u793A\u4F8B\uFF1A1234                                                                                                                                |
| \uFE42\uFE42attention           | [string]  |          | \u5907\u6CE8\u6216\u53D1\u4EF6\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35                                                                                                                                           |
| \uFE42packages              |  [array]  |    \u2713     | \u5305\u88F9\u8BE6\u60C5                                                                                                                                                      |
| \uFE42\uFE42dimension           | [object]  |    \u2713     | \u5305\u88F9\u5C3A\u5BF8<br>\u6700\u5927/\u6700\u5C0F\u5C3A\u5BF8\u503C\u56E0\u670D\u52A1\u548C\u5305\u88C5\u7C7B\u578B\u800C\u5F02                                                                                                                                |
| \uFE42\uFE42\uFE42width             | [number]  |    \u2713     | \u5305\u88F9\u5BBD\u5EA6\uFF0C\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A20.01                                                                                                                         |
| \uFE42\uFE42\uFE42height            | [number]  |    \u2713     | \u5305\u88F9\u9AD8\u5EA6\uFF0C\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A20.01                                                                                                                         |
| \uFE42\uFE42\uFE42length            | [number]  |    \u2713     | \u5305\u88F9\u957F\u5EA6\uFF0C\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A20.01                                                                                                                         |
| \uFE42\uFE42\uFE42code              | [string]  |    \u2713     | \u957F\u5EA6\u5355\u4F4D\uFF0C\u6709\u6548\u503C\u4E3A\uFF1Ain/cm<br>\u793A\u4F8B\uFF1Ain                                                                                                                                  |
| \uFE42\uFE42weight              | [object]  |    \u2713     | \u5305\u88F9\u91CD\u91CF                                                                                                                                                      |
| \uFE42\uFE42\uFE42code              | [string]  |    \u2713     | \u91CD\u91CF\u5355\u4F4D\uFF0C\u6709\u6548\u503C\u4E3A\uFF1Alb/oz/kg/g<br>\u6CE8\u610F\uFF1A\u8F93\u5165\u5927\u5199\u5B57\u6BCD\u4F1A\u62A5\u9519<br>\u793A\u4F8B\uFF1Alb                                                                                                             |
| \uFE42\uFE42\uFE42value             | [number]  |    \u2713     | \u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A68.25                                                                                                                              |
| \uFE42\uFE42confirmation        | [string]  |    \u2713     | \u7B7E\u540D\u670D\u52A1\uFF0C[\u70B9\u51FB](Conformation.md)\u67E5\u770B\u670D\u52A1\u5546\u652F\u6301\u7684\u7B7E\u540D\u670D\u52A1<br>\u793A\u4F8B:None                                                                                                        |
| \uFE42\uFE42insurance           | [object]  |          | \u4FDD\u9669\u670D\u52A1                                                                                                                                                      |
| \uFE42\uFE42\uFE42code              | [string]  |          | \u8D27\u5E01\u5355\u4F4D<br>\u793A\u4F8B:USD                                                                                                                                            |
| \uFE42\uFE42\uFE42value             | [number]  |          | \u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B:300.01                                                                                                                             |
| \uFE42\uFE42quantity            | [number]  |    \u2713     | \u5305\u88F9\u6570\u91CF<br>\u793A\u4F8B\uFF1A1                                                                                                                                              |
| \uFE42\uFE42reference_numbers   |  [array]  |    \u2713     | \u5305\u88F9\u5907\u6CE8                                                                                                                                                      |
| \uFE42\uFE42\uFE42code              | [string]  |    \u2713     | \u5907\u6CE8\u6807\u9898,[\u70B9\u51FB](Reference.md)\u67E5\u770B\u670D\u52A1\u5546\u652F\u6301\u7684\u5907\u6CE8\u4FE1\u606F<br>\u793A\u4F8B\uFF1AINVOICE                                                                                                         |
| \uFE42\uFE42\uFE42value             | [object]  |    \u2713     | \u5907\u6CE8\u5185\u5BB9\uFF0C\u6BCF\u4E2A\u5907\u6CE8\u9650\u5236\u957F\u5EA6\uFF1A40<br>\u793A\u4F8B\uFF1AP84746-KMD                                                                                                                         |
| \uFE42package_type          | [object]  |     \u2713     | \u5305\u88F9\u7C7B\u578B\u3002[\u70B9\u51FB](PackageType.md)\u67E5\u770B\u670D\u52A1\u5546\u652F\u6301\u7684\u5305\u88F9\u7C7B\u578B                                                                                                                     |
| \uFE42\uFE42type                | [string]  |    \u2713     | \u793A\u4F8B\uFF1Acommon                                                                                                                                                 |
| \uFE42\uFE42name                | [string]  |    \u2713     | \u793A\u4F8B\uFF1APackage                                                                                                                                                |
| \uFE42label_specification   | [object]  |         | \u9762\u5355\u89C4\u683C                                                                                                               |
| \uFE42\uFE42label_format         | [string]  |         | \u793A\u4F8B\uFF1Apdf \u3002\u53EF\u9009\u53C2\u6570\uFF1Azpl , pdf                                                                                                                                                |
| \uFE42pickup_date           | [string]  |    \u2713     | \u53D6\u4EF6\u65E5\u671F\uFF0C\u683C\u5F0F[yyyymmdd]<br>\u793A\u4F8B\uFF1A20221001                                                                                                                          |





:::: code-group
::: code-group-item \u8BF7\u6C42\u62A5\u6587

\`\`\`json
curl -X POST  \\
  'https://api.sandbox.shipber.com/open-api/v2/label' \\
  -H 'Content-Type:application/json' \\
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '{
    "custom_order_num": "Test-20230113",
    "shipment": {
      "carrier": "fedex",
      "service_code": "fedex_ground",
        "ship_from": {
            "uuid": "7b572b8d-08a3-4cc7-a711-1aae28e9ffcf"
        },
    "ship_to": {
        "city": "Kansas City",
        "name": "Test Company",
        "addresses": [
            "6925 Riverview Ave"
         ],
        "postal_code": "66102",
        "country_code": "US",
        "state_province_code": "KS",
        "phone": "0123456789"
        },
        "packages": [{
            "dimension": {
                "width": 7,
                "height": 13,
                "length": 4,
                "code": "in"
            },
            "weight": {
                "code": "lb",
                "value": 6
            },
            "confirmation": "None",
            "insurance": {
                "code": "USD",
                "value": 20
            },
            "quantity": 1,
            "reference_numbers": [{
                "code": "reference #1",
                "value": "1"
            }]
        }],
        "package_type": {
            "type": "common",
            "name": "Package"
        },
        "label_specification": {
            "label_format": "pdf"
        },
        "pickup_date": "20230113"
    }
}'
\`\`\`
:::

::: code-group-item \u8FD4\u56DE\u62A5\u6587

\`\`\`json
{
    "data": {
        "status": "Printing",
        "tracking_num": "Tracking",
        "order_num": "order",
        "shipment": {
            "service_code": "fedex_ground",
            "ship_from": {
                "city": "LOS ANGELES",
                "name": "Test Company",
                "email": "123456@gmail.com",
                "addresses": ["6925 Riverview Ave"],
                "postal_code": "66102",
                "country_code": "US",
                "is_residential": false,
                "state_province_code": "CA",
                "phone": "0123456789"
            },
        "ship_to": {
            "city": "Kansas City",
            "name": "Test Company",
            "addresses": [
                "6925 Riverview Ave"
            ],
            "postal_code": "66102",
            "country_code": "US",
            "state_province_code": "KS",
            "phone": "0123456789"
        },
            "packages": [{
                "dimension": {
                    "width": 7,
                    "height": 13,
                    "length": 4,
                    "code": "in"
                },
                "weight": {
                    "code": "lb",
                    "value": 6
                },
                "confirmation": "Not Required",
                "insurance": {
                    "code": "USD",
                    "value": 20
                },
                "quantity": 1,
                "reference_numbers": [{
                    "code": "reference #1",
                    "value": "1"
                }],
                "watermark": ""
            }],
            "package_type": {
                "type": "common",
                "name": "Package"
            },
            "label_specification": {
                "label_format": "pdf"
            },
            "pickup_date": "20230113"
        },
        "created_at": "2023-01-13T06:26:31.028Z",
        "custom_order_num": "Test-20230113",
        "is_return_label": false,
        "rma_number": "",
        "rma_reason": ""
    }
}
\`\`\`

:::
::::
`,contentRendered:`<h1 id="\u521B\u5EFA\u8FD0\u5355" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u8FD0\u5355" aria-hidden="true">#</a> \u521B\u5EFA\u8FD0\u5355</h1>
<table><tr><td style="text-align:center;width:80px">POST</td><td>/open-api/v2/label</td></tr></table>
<h3 id="\u8BF7\u6C42\u5934\u90E8" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u5934\u90E8" aria-hidden="true">#</a> \u8BF7\u6C42\u5934\u90E8</h3>
<table>
<thead>
<tr>
<th style="text-align:center">\u6807\u7B7E</th>
<th style="text-align:center">\u5FC5\u586B</th>
<th style="text-align:center">\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Api-Key</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Key\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230</td>
</tr>
<tr>
<td style="text-align:center">Api-Secret</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Secret\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230</td>
</tr>
</tbody>
</table>
<h3 id="body\u8BF7\u6C42\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#body\u8BF7\u6C42\u53C2\u6570" aria-hidden="true">#</a> Body\u8BF7\u6C42\u53C2\u6570</h3>
<table>
<thead>
<tr>
<th style="text-align:left">\u53C2\u6570\u540D</th>
<th style="text-align:center">\u7C7B\u578B</th>
<th style="text-align:center">\u5FC5\u586B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">custom_order_num</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">shipment</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>-</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42carrier</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u7269\u6D41\u670D\u52A1\u5546\u7F16\u7801\uFF0C\u6B64\u5B57\u6BB5\u4F1A\u7B5B\u9009\u51FA\u8BE5\u670D\u52A1\u5546\u7684\u670D\u52A1\uFF0C\u5E76\u521B\u5EFA\u9762\u5355\u3002\u3010\u5982\u6709\u591A\u4E2A\uFF0C\u5219\u4F7F\u7528\u6700\u4F4E\u4EF7\u683C\u7684\u670D\u52A1\u521B\u5EFA\u9762\u5355\u3002\u3011\u793A\u4F8B: ups,fedex</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42service_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u670D\u52A1\u4EE3\u7801\uFF0C\u7528\u4E8E\u521B\u5EFA\u6307\u5B9A\u670D\u52A1\u7684\u8FD0\u5355\u3010\u82E5\u5B58\u5728\u591A\u4E2A\uFF0C\u5219\u81EA\u52A8\u9009\u62E9\u6700\u4F4E\u4EF7\u683C\u7684\u670D\u52A1\u3011\uFF0C<RouterLink to="/zh/Service_Code.html">\u70B9\u51FB</RouterLink>\u53EF\u67E5\u770B\u6240\u6709\u670D\u52A1\u4EE3\u7801\u3002<br>\u793A\u4F8B\uFF1Aups_ground</td>
</tr>
<tr>
<td style="text-align:left">\uFE42ship_from</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u5730\u5740</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42uuid</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u53D1\u4EF6\u5730\u5740id\uFF0C \u6B64\u5B57\u6BB5\u4E0Eship from \u8BE6\u60C5\u4E8C\u9009\u4E00\uFF0C\u82E5\u586B\u4E86uuid\uFF0Cship_from\u5730\u5740\u8BE6\u60C5\u4E0D\u7528\u586B\u3002\u82E5\u6CA1\u586B\uFF0C\u5219\u5FC5\u987B\u586B\u4EE5\u4E0B\u5730\u5740\u8BE6\u60C5\u3002<br><RouterLink to="/zh/Warehouse%20Address.html">\u70B9\u51FB</RouterLink>\u67E5\u770B\u5982\u4F55\u83B7\u53D6uuid<br>\u793A\u4F8B\uFF1A22d953b7-24c4-4ae9-afb4-111cc227b01e</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42city</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u57CE\u5E02<br>\u793A\u4F8B\uFF1ALOS ANGELES</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42name</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u516C\u53F8\u540D\u6216\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35<br>\u793A\u4F8B\uFF1AAmazon</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42email</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u90AE\u7BB1</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42addresses</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center">\u2713</td>
<td>\u5730\u5740\u8BE6\u60C5<br>\u793A\u4F8B\uFF1A 6925 Riverview Ave</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42postal_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u90AE\u7F16\uFF0C\u683C\u5F0F[12345]\u6216[12345-6789]<br>\u793A\u4F8B\uFF1A90045-6275</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42country_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u56FD\u5BB6\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1AUS</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42is_residential</td>
<td style="text-align:center">[boolean]</td>
<td style="text-align:center"></td>
<td>\u53D1\u4EF6\u5730\u5740\u662F\u5426\u4E3A\u4F4F\u5B85\u5730\u5740\u3002true\u8868\u793A\u4F4F\u5B85\u5730\u5740\uFF0Cfalse\u8868\u793A\u5546\u4E1A\u5730\u5740<br>\u793A\u4F8B\uFF1Afalse</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42state_province_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u5DDE\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1ACA</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42phone</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u4EBA\u8054\u7CFB\u65B9\u5F0F\uFF0C\u81F3\u5C1110\u4F4D\u6570\u5B57<br>\u793A\u4F8B\uFF1A1000000000</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42attention</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u5907\u6CE8\u6216\u53D1\u4EF6\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35<br>\u793A\u4F8B\uFF1AAnn</td>
</tr>
<tr>
<td style="text-align:left">\uFE42ship_to</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>\u6536\u4EF6\u5730\u5740</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42city</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u6536\u4EF6\u5730\u5740\uFF0C\u57CE\u5E02\u540D<br>Example: PENFIELD</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42name</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u6536\u4EF6\u516C\u53F8\u540D\u6216\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35<br>\u793A\u4F8B\uFF1AAnn</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42email</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u90AE\u7BB1</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42addresses</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center">\u2713</td>
<td>\u5730\u5740\u8BE6\u60C5<br>\u793A\u4F8B\uFF1A6925 Riverview Ave</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42postal_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u6536\u4EF6\u90AE\u7F16\uFF0C\u683C\u5F0F[12345]\u6216[12345-6789]<br>\u793A\u4F8B\uFF1A14526</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42country_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u6536\u4EF6\u56FD\u5BB6\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1AUS</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42is_residential</td>
<td style="text-align:center">[boolean]</td>
<td style="text-align:center"></td>
<td>\u53D1\u4EF6\u5730\u5740\u662F\u5426\u4E3A\u4F4F\u5B85\u5730\u5740\u3002true\u8868\u793A\u4F4F\u5B85\u5730\u5740\uFF0Cfalse\u8868\u793A\u5546\u4E1A\u5730\u5740<br>\u793A\u4F8B\uFF1Afalse</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42state_province_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u6536\u4EF6\u5DDE\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1ANY</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42phone</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u4EBA\u8054\u7CFB\u65B9\u5F0F\uFF0C\u81F3\u5C1110\u4F4D\u6570\u5B57<br>\u793A\u4F8B\uFF1A(999)-999-9999</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42phone_ext</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u8054\u7CFB\u65B9\u5F0F\u5206\u673A\u53F7 \u9650\u5236:1-4\u4F4D<br>\u793A\u4F8B\uFF1A1234</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42attention</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u5907\u6CE8\u6216\u53D1\u4EF6\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35</td>
</tr>
<tr>
<td style="text-align:left">\uFE42packages</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u8BE6\u60C5</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42dimension</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u5C3A\u5BF8<br>\u6700\u5927/\u6700\u5C0F\u5C3A\u5BF8\u503C\u56E0\u670D\u52A1\u548C\u5305\u88C5\u7C7B\u578B\u800C\u5F02</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42width</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u5BBD\u5EA6\uFF0C\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A20.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42height</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u9AD8\u5EA6\uFF0C\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A20.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42length</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u957F\u5EA6\uFF0C\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A20.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u957F\u5EA6\u5355\u4F4D\uFF0C\u6709\u6548\u503C\u4E3A\uFF1Ain/cm<br>\u793A\u4F8B\uFF1Ain</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42weight</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u91CD\u91CF</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u91CD\u91CF\u5355\u4F4D\uFF0C\u6709\u6548\u503C\u4E3A\uFF1Alb/oz/kg/g<br>\u6CE8\u610F\uFF1A\u8F93\u5165\u5927\u5199\u5B57\u6BCD\u4F1A\u62A5\u9519<br>\u793A\u4F8B\uFF1Alb</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42value</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A68.25</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42confirmation</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u7B7E\u540D\u670D\u52A1\uFF0C<RouterLink to="/zh/Conformation.html">\u70B9\u51FB</RouterLink>\u67E5\u770B\u670D\u52A1\u5546\u652F\u6301\u7684\u7B7E\u540D\u670D\u52A1<br>\u793A\u4F8B:None</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42insurance</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center"></td>
<td>\u4FDD\u9669\u670D\u52A1</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u8D27\u5E01\u5355\u4F4D<br>\u793A\u4F8B:USD</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42value</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center"></td>
<td>\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B:300.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42quantity</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u6570\u91CF<br>\u793A\u4F8B\uFF1A1</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42reference_numbers</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u5907\u6CE8</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u5907\u6CE8\u6807\u9898,<RouterLink to="/zh/Reference.html">\u70B9\u51FB</RouterLink>\u67E5\u770B\u670D\u52A1\u5546\u652F\u6301\u7684\u5907\u6CE8\u4FE1\u606F<br>\u793A\u4F8B\uFF1AINVOICE</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42value</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>\u5907\u6CE8\u5185\u5BB9\uFF0C\u6BCF\u4E2A\u5907\u6CE8\u9650\u5236\u957F\u5EA6\uFF1A40<br>\u793A\u4F8B\uFF1AP84746-KMD</td>
</tr>
<tr>
<td style="text-align:left">\uFE42package_type</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u7C7B\u578B\u3002<RouterLink to="/zh/PackageType.html">\u70B9\u51FB</RouterLink>\u67E5\u770B\u670D\u52A1\u5546\u652F\u6301\u7684\u5305\u88F9\u7C7B\u578B</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42type</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u793A\u4F8B\uFF1Acommon</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42name</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u793A\u4F8B\uFF1APackage</td>
</tr>
<tr>
<td style="text-align:left">\uFE42label_specification</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center"></td>
<td>\u9762\u5355\u89C4\u683C</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42label_format</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u793A\u4F8B\uFF1Apdf \u3002\u53EF\u9009\u53C2\u6570\uFF1Azpl , pdf</td>
</tr>
<tr>
<td style="text-align:left">\uFE42pickup_date</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D6\u4EF6\u65E5\u671F\uFF0C\u683C\u5F0F[yyyymmdd]<br>\u793A\u4F8B\uFF1A20221001</td>
</tr>
</tbody>
</table>
<CodeGroup>
<CodeGroupItem title="\u8BF7\u6C42\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>curl -X POST  \\
  'https<span class="token operator">:</span><span class="token comment">//api.sandbox.shipber.com/open-api/v2/label' \\</span>
  -H 'Content-Type<span class="token operator">:</span>application/json' \\
  -H 'Api-Key<span class="token operator">:</span>2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret<span class="token operator">:</span>qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '<span class="token punctuation">{</span>
    <span class="token property">"custom_order_num"</span><span class="token operator">:</span> <span class="token string">"Test-20230113"</span><span class="token punctuation">,</span>
    <span class="token property">"shipment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token string">"fedex"</span><span class="token punctuation">,</span>
      <span class="token property">"service_code"</span><span class="token operator">:</span> <span class="token string">"fedex_ground"</span><span class="token punctuation">,</span>
        <span class="token property">"ship_from"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"7b572b8d-08a3-4cc7-a711-1aae28e9ffcf"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"ship_to"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Test Company"</span><span class="token punctuation">,</span>
        <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"6925 Riverview Ave"</span>
         <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
        <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
        <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
        <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0123456789"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token property">"dimension"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
                <span class="token property">"length"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"in"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"lb"</span><span class="token punctuation">,</span>
                <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">6</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"confirmation"</span><span class="token operator">:</span> <span class="token string">"None"</span><span class="token punctuation">,</span>
            <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"USD"</span><span class="token punctuation">,</span>
                <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">20</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"reference_numbers"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"reference #1"</span><span class="token punctuation">,</span>
                <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"1"</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"common"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Package"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"label_specification"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"label_format"</span><span class="token operator">:</span> <span class="token string">"pdf"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"pickup_date"</span><span class="token operator">:</span> <span class="token string">"20230113"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="\u8FD4\u56DE\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"Printing"</span><span class="token punctuation">,</span>
        <span class="token property">"tracking_num"</span><span class="token operator">:</span> <span class="token string">"Tracking"</span><span class="token punctuation">,</span>
        <span class="token property">"order_num"</span><span class="token operator">:</span> <span class="token string">"order"</span><span class="token punctuation">,</span>
        <span class="token property">"shipment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"service_code"</span><span class="token operator">:</span> <span class="token string">"fedex_ground"</span><span class="token punctuation">,</span>
            <span class="token property">"ship_from"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"LOS ANGELES"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Test Company"</span><span class="token punctuation">,</span>
                <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"123456@gmail.com"</span><span class="token punctuation">,</span>
                <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"6925 Riverview Ave"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
                <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
                <span class="token property">"is_residential"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"CA"</span><span class="token punctuation">,</span>
                <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0123456789"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"ship_to"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Test Company"</span><span class="token punctuation">,</span>
            <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">"6925 Riverview Ave"</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
            <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
            <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
            <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0123456789"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token property">"dimension"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                    <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
                    <span class="token property">"length"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"in"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"lb"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">6</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"confirmation"</span><span class="token operator">:</span> <span class="token string">"Not Required"</span><span class="token punctuation">,</span>
                <span class="token property">"insurance"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"USD"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">20</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">"reference_numbers"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"reference #1"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"1"</span>
                <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">"watermark"</span><span class="token operator">:</span> <span class="token string">""</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"common"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Package"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"label_specification"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"label_format"</span><span class="token operator">:</span> <span class="token string">"pdf"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"pickup_date"</span><span class="token operator">:</span> <span class="token string">"20230113"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"created_at"</span><span class="token operator">:</span> <span class="token string">"2023-01-13T06:26:31.028Z"</span><span class="token punctuation">,</span>
        <span class="token property">"custom_order_num"</span><span class="token operator">:</span> <span class="token string">"Test-20230113"</span><span class="token punctuation">,</span>
        <span class="token property">"is_return_label"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">"rma_number"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"rma_reason"</span><span class="token operator">:</span> <span class="token string">""</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[{raw:"Service_Code.md",relative:"zh/Service_Code.md",absolute:"/zh/Service_Code.md"},{raw:"Warehouse%20Address.md",relative:"zh/Warehouse%20Address.md",absolute:"/zh/Warehouse%20Address.md"},{raw:"Conformation.md",relative:"zh/Conformation.md",absolute:"/zh/Conformation.md"},{raw:"Reference.md",relative:"zh/Reference.md",absolute:"/zh/Reference.md"},{raw:"PackageType.md",relative:"zh/PackageType.md",absolute:"/zh/PackageType.md"}],pathInferred:"/zh/Create Shipment.html",pathLocale:"/zh/",permalink:null,routeMeta:{title:"\u521B\u5EFA\u8FD0\u5355"},slug:"Create Shipment",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/zh/Create Shipment.md",filePathRelative:"zh/Create Shipment.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/Create Shipment.html.vue",componentFilePathRelative:"pages/zh/Create Shipment.html.vue",componentFileChunkName:"v-57c12940",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/Create Shipment.html.js",dataFilePathRelative:"pages/zh/Create Shipment.html.js",dataFileChunkName:"v-57c12940",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/zh/Create Shipment.html",htmlFilePathRelative:"zh/Create Shipment.html"},{data:{key:"v-720cb018",path:"/zh/Download%20Label.html",title:"\u4E0B\u8F7D\u9762\u5355",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]},{level:3,title:"Query\u53C2\u6570",slug:"query\u53C2\u6570",children:[]}],git:{createdTime:1662709054e3,updatedTime:1669692542e3,contributors:[{name:"Benny",email:"772970153@qq.com",commits:3}]},filePathRelative:"zh/Download Label.md"},key:"v-720cb018",path:"/zh/Download Label.html",title:"\u4E0B\u8F7D\u9762\u5355",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]},{level:3,title:"Query\u53C2\u6570",slug:"query\u53C2\u6570",children:[]}],content:`# \u4E0B\u8F7D\u9762\u5355

<table><tr><td style="text-align:center;width:80px">GET</td><td>/v1/open-api/label</td></tr></table>


### \u8BF7\u6C42\u5934\u90E8 

|   \u6807\u7B7E    | \u5FC5\u586B |                         Description                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   \u2713     | Api Key\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230 |
| Api-Secret |   \u2713     | Api Secret\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230 |



 ### Query\u53C2\u6570

\u53C2\u6570\u540D	|\u7C7B\u578B|\u5FC5\u586B
:--:|:--:|:--:
custom_order_num	|[string]	|\u2713 

:::: code-group 
::: code-group-item \u8BF7\u6C42\u62A5\u6587

\`\`\`json
curl -X GET  \\
  'https://api.sandbox.shipber.com/v1/open-api/label?custom_order_num=cimy-977885' \\
  -H 'Content-Type:application/json' \\
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
\`\`\`
:::

::: code-group-item \u8FD4\u56DE\u62A5\u6587

\`\`\`json
{
    "data": {
        "order_num": "ST1618444800208768",
        "create_at": "2021-04-15T08:47:08.045Z",
        "custom_order_num": "FBAguang-April12992",
        "status": "Printed",
        "shipment": {
            "packages": [{
                "identifier": {
                    "tracking_id_type": "FEDEX",
                    "identification_number": "",
                    "tracking_number": "786002536837",
                    "master_tracking_id_type": "FEDEX",
                    "master_tracking_number": "786002536837"
                },
            }],
            "uuid": "be5ac2f5-10af-455a-beed-5e5ba77d9d65",
            "charge": 10.81,
            "create_at": "2021-04-15T08:47:08.045Z",
            "label_download": {
                "pdf": "https://shipber-label-stage.s3.us-west-2.amazonaws.com/Labels/fedex/fedex_ground/786002536837/786002536837.pdf?AWSAccessKeyId=AKIAVKD5XIH4LVPFTARC&Expires=1618477362&Signature=hvglmkBXlDMcBeidwBd%2FN4kgQbw%3D"
            }
        }
    }
}
\`\`\`

:::
::::`,contentRendered:`<h1 id="\u4E0B\u8F7D\u9762\u5355" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u9762\u5355" aria-hidden="true">#</a> \u4E0B\u8F7D\u9762\u5355</h1>
<table><tr><td style="text-align:center;width:80px">GET</td><td>/v1/open-api/label</td></tr></table>
<h3 id="\u8BF7\u6C42\u5934\u90E8" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u5934\u90E8" aria-hidden="true">#</a> \u8BF7\u6C42\u5934\u90E8</h3>
<table>
<thead>
<tr>
<th style="text-align:center">\u6807\u7B7E</th>
<th style="text-align:center">\u5FC5\u586B</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Api-Key</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Key\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230</td>
</tr>
<tr>
<td style="text-align:center">Api-Secret</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Secret\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230</td>
</tr>
</tbody>
</table>
<h3 id="query\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#query\u53C2\u6570" aria-hidden="true">#</a> Query\u53C2\u6570</h3>
<table>
<thead>
<tr>
<th style="text-align:center">\u53C2\u6570\u540D</th>
<th style="text-align:center">\u7C7B\u578B</th>
<th style="text-align:center">\u5FC5\u586B</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">custom_order_num</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
</tr>
</tbody>
</table>
<CodeGroup>
<CodeGroupItem title="\u8BF7\u6C42\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>curl -X GET  \\
  'https<span class="token operator">:</span><span class="token comment">//api.sandbox.shipber.com/v1/open-api/label?custom_order_num=cimy-977885' \\</span>
  -H 'Content-Type<span class="token operator">:</span>application/json' \\
  -H 'Api-Key<span class="token operator">:</span>2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret<span class="token operator">:</span>qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="\u8FD4\u56DE\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"order_num"</span><span class="token operator">:</span> <span class="token string">"ST1618444800208768"</span><span class="token punctuation">,</span>
        <span class="token property">"create_at"</span><span class="token operator">:</span> <span class="token string">"2021-04-15T08:47:08.045Z"</span><span class="token punctuation">,</span>
        <span class="token property">"custom_order_num"</span><span class="token operator">:</span> <span class="token string">"FBAguang-April12992"</span><span class="token punctuation">,</span>
        <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"Printed"</span><span class="token punctuation">,</span>
        <span class="token property">"shipment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token property">"identifier"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"tracking_id_type"</span><span class="token operator">:</span> <span class="token string">"FEDEX"</span><span class="token punctuation">,</span>
                    <span class="token property">"identification_number"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                    <span class="token property">"tracking_number"</span><span class="token operator">:</span> <span class="token string">"786002536837"</span><span class="token punctuation">,</span>
                    <span class="token property">"master_tracking_id_type"</span><span class="token operator">:</span> <span class="token string">"FEDEX"</span><span class="token punctuation">,</span>
                    <span class="token property">"master_tracking_number"</span><span class="token operator">:</span> <span class="token string">"786002536837"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"be5ac2f5-10af-455a-beed-5e5ba77d9d65"</span><span class="token punctuation">,</span>
            <span class="token property">"charge"</span><span class="token operator">:</span> <span class="token number">10.81</span><span class="token punctuation">,</span>
            <span class="token property">"create_at"</span><span class="token operator">:</span> <span class="token string">"2021-04-15T08:47:08.045Z"</span><span class="token punctuation">,</span>
            <span class="token property">"label_download"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"pdf"</span><span class="token operator">:</span> <span class="token string">"https://shipber-label-stage.s3.us-west-2.amazonaws.com/Labels/fedex/fedex_ground/786002536837/786002536837.pdf?AWSAccessKeyId=AKIAVKD5XIH4LVPFTARC&amp;Expires=1618477362&amp;Signature=hvglmkBXlDMcBeidwBd%2FN4kgQbw%3D"</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/zh/Download Label.html",pathLocale:"/zh/",permalink:null,routeMeta:{title:"\u4E0B\u8F7D\u9762\u5355"},slug:"Download Label",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/zh/Download Label.md",filePathRelative:"zh/Download Label.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/Download Label.html.vue",componentFilePathRelative:"pages/zh/Download Label.html.vue",componentFileChunkName:"v-720cb018",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/Download Label.html.js",dataFilePathRelative:"pages/zh/Download Label.html.js",dataFileChunkName:"v-720cb018",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/zh/Download Label.html",htmlFilePathRelative:"zh/Download Label.html"},{data:{key:"v-2d0ad528",path:"/zh/",title:"\u4ECB\u7ECD",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u524D\u8A00",slug:"\u524D\u8A00",children:[{level:3,title:"\u76EE\u524D\u63D0\u4F9B\u7684\u63A5\u53E3",slug:"\u76EE\u524D\u63D0\u4F9B\u7684\u63A5\u53E3",children:[]}]},{level:2,title:"\u6C99\u76D2\u73AF\u5883",slug:"\u6C99\u76D2\u73AF\u5883",children:[{level:3,title:"\u5982\u4F55\u4F7F\u7528\u6C99\u76D2",slug:"\u5982\u4F55\u4F7F\u7528\u6C99\u76D2",children:[]},{level:3,title:"\u5DEE\u5F02",slug:"\u5DEE\u5F02",children:[]},{level:3,title:"\u6D4B\u8BD5\u73AF\u5883: \b\bhttps://api.sandbox.shipber.com",slug:"\u6D4B\u8BD5\u73AF\u5883-https-api-sandbox-shipber-com",children:[]},{level:3,title:"\u6D4B\u8BD5\u4F7F\u7528\u7684\u8D26\u53F7\u5BC6\u7801",slug:"\u6D4B\u8BD5\u4F7F\u7528\u7684\u8D26\u53F7\u5BC6\u7801",children:[]},{level:3,title:"\u6B63\u5F0F\u73AF\u5883: https://api.shipber.com",slug:"\u6B63\u5F0F\u73AF\u5883-https-api-shipber-com",children:[]},{level:3,title:"\u6D4B\u8BD5\u6B65\u9AA4\u5EFA\u8BAE",slug:"\u6D4B\u8BD5\u6B65\u9AA4\u5EFA\u8BAE",children:[]}]}],git:{createdTime:1660015272e3,updatedTime:1681460654e3,contributors:[{name:"Benny",email:"772970153@qq.com",commits:3},{name:"carpcai",email:"carp.cai@adber.com",commits:1}]},filePathRelative:"zh/Index.md"},key:"v-2d0ad528",path:"/zh/",title:"\u4ECB\u7ECD",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u524D\u8A00",slug:"\u524D\u8A00",children:[{level:3,title:"\u76EE\u524D\u63D0\u4F9B\u7684\u63A5\u53E3",slug:"\u76EE\u524D\u63D0\u4F9B\u7684\u63A5\u53E3",children:[]}]},{level:2,title:"\u6C99\u76D2\u73AF\u5883",slug:"\u6C99\u76D2\u73AF\u5883",children:[{level:3,title:"\u5982\u4F55\u4F7F\u7528\u6C99\u76D2",slug:"\u5982\u4F55\u4F7F\u7528\u6C99\u76D2",children:[]},{level:3,title:"\u5DEE\u5F02",slug:"\u5DEE\u5F02",children:[]},{level:3,title:"\u6D4B\u8BD5\u73AF\u5883: \b\bhttps://api.sandbox.shipber.com",slug:"\u6D4B\u8BD5\u73AF\u5883-https-api-sandbox-shipber-com",children:[]},{level:3,title:"\u6D4B\u8BD5\u4F7F\u7528\u7684\u8D26\u53F7\u5BC6\u7801",slug:"\u6D4B\u8BD5\u4F7F\u7528\u7684\u8D26\u53F7\u5BC6\u7801",children:[]},{level:3,title:"\u6B63\u5F0F\u73AF\u5883: https://api.shipber.com",slug:"\u6B63\u5F0F\u73AF\u5883-https-api-shipber-com",children:[]},{level:3,title:"\u6D4B\u8BD5\u6B65\u9AA4\u5EFA\u8BAE",slug:"\u6D4B\u8BD5\u6B65\u9AA4\u5EFA\u8BAE",children:[]}]}],content:`# \u4ECB\u7ECD

## \u524D\u8A00

### \u76EE\u524D\u63D0\u4F9B\u7684\u63A5\u53E3

+ **Ship From List** <br>
  \u83B7\u53D6\u53EF\u7528\u53D1\u4EF6\u5730\u5740


+ **Rate** <br>
  \u4E00\u952E\u6279\u91CF\u8FD0\u7B97\u591A\u4E2A\u7269\u6D41\u5546/\u670D\u52A1/\u8D26\u53F7\u7684\u8D39\u7387
+ **Address validation** <br>
  \u5730\u5740\u6821\u68C0\u63A5\u53E3
+ **Shipping** <br>
  \u521B\u5EFA\u548C\u81EA\u5B9A\u4E49\u8D27\u8FD0\u6807\u7B7E
+ **Download \u6807\u7B7E** <br>
  \u83B7\u53D6\u6807\u7B7E\u4FE1\u606F\uFF0C\u5C06Shipping \u521B\u5EFA\u7684\u8FD0\u5355\uFF0C\u8F6C\u6210PDF \u683C\u5F0F\u8FDB\u884C\u6253\u5370\u3002
+ **Cancel** <br>
  \u8FD0\u5355\u53D6\u6D88, \u5C06\u4E4B\u524D Shipping \u521B\u5EFA\u7684\u8FD0\u5355\u8FDB\u884C\u53D6\u6D88









## \u6C99\u76D2\u73AF\u5883

### \u5982\u4F55\u4F7F\u7528\u6C99\u76D2
\u6211\u4EEC\u5C06\u4E3A\u60A8\u63D0\u4F9B\u4E13\u95E8\u7528\u4E8E\u6C99\u76D2\u73AF\u5883\u7684API\u5BC6\u94A5\u548CAPI secret\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u8FD9\u4E5F\u65B9\u4FBF\u60A8\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u4E0D\u4F1A\u4EA7\u751F\u5B9E\u9645\u6210\u672C\u548C\u5B9E\u9645\u8DDF\u8E2A\u4FE1\u606F\uFF0C\u9664\u4E86API\u5BC6\u94A5\u548CAPI secret\u4E4B\u5916\uFF0C\u5176\u4ED6\u4E00\u5207\u90FD\u662F\u4E00\u6837\u7684\u3002\u56E0\u6B64\uFF0C\u60A8\u53EF\u4EE5\u5728\u6C99\u7BB1\u4E2D\u8F7B\u677E\u6D4B\u8BD5\u548C\u5F00\u53D1\u5E94\u7528\u7A0B\u5E8F\uFF0C\u7136\u540E\u5728\u51C6\u5907\u6295\u5165\u751F\u4EA7\u65F6\uFF0C\u53EA\u9700\u66F4\u6539API\u5BC6\u94A5\u5373\u53EF\u3002

### \u5DEE\u5F02
\u6211\u4EEC\u7684\u6C99\u7BB1\u73AF\u5883\u5C3D\u53EF\u80FD\u4E0E\u751F\u4EA7\u73AF\u5883\u76F8\u5339\u914D\uFF0C\u4F46\u6709\u4E00\u4E9B\u5DEE\u5F02\u9700\u8981\u6CE8\u610F\uFF1A

#### \u6709\u9650\u5305\u88F9\u627F\u8FD0\u4EBA
\u6211\u4EEC\u76EE\u524D\u53EA\u652F\u6301\u7F8E\u56FD\u4E09\u5927\u5305\u88F9\u8FD0\u8F93\u516C\u53F8\u2014\u2014UPS\u3001FedEx\u3001PitneyBowes\u548CUSPS\uFF08Stamps.com\uFF09\u3002\u672A\u6765\u5C06\u589E\u52A0\u5176\u4ED6\u627F\u8FD0\u4EBA\uFF0C\u5305\u62EC\u56FD\u9645\u627F\u8FD0\u4EBA\u3002\u7136\u800C\uFF0C\u5728\u6C99\u7BB1\u73AF\u5883\u4E2D\uFF0C\u8BE5\u5E10\u6237\u4EC5\u63D0\u4F9B\u4E09\u9879\u670D\u52A1\uFF1A\u8054\u90A6\u5FEB\u9012\u5730\u9762\u670D\u52A1\u3001\u8054\u90A6\u5FEB\u9012\u9001\u8D27\u4E0A\u95E8\u670D\u52A1\u548CUPS\u6D4B\u8BD5\u5730\u9762\u670D\u52A1\u3002\u8D39\u7387

#### \u8D39\u7387
\u60A8\u5728\u6C99\u7BB1\u4E2D\u83B7\u5F97\u7684\u8FD0\u8D39\u53EF\u80FD\u4E0E\u60A8\u5728\u751F\u4EA7\u4E2D\u83B7\u5F97\u7684\u8FD0\u8D39\u4E0D\u5339\u914D\u3002\u60A8\u6CA1\u6709\u5728\u6C99\u7BB1\u4E2D\u5E94\u7528\u4EFB\u4F55\u534F\u5546\u7684\u8D39\u7387\u6298\u6263\uFF0C\u6709\u4E9B\u8D39\u7387\u662F\u201C\u865A\u62DF\u201D\u8D39\u7387\uFF0C\u4EE5\u9632\u6B62\u6211\u4EEC\u7684\u6C99\u7BB1\u88AB\u6EE5\u7528\u7528\u4E8E\u751F\u4EA7\u76EE\u7684\u3002

#### \u6D4B\u8BD5\u6807\u7B7E
\u5728\u6C99\u76D2\u73AF\u5883\u4E2D\u521B\u5EFA\uFF0C\u6BCF\u4E2A\u88C5\u8FD0\u6709\u591A\u4E2A\u6807\u7B7E\u6216\u6BCF\u4E2A\u88C5\u8FD0\u6709\u4E00\u4E2A\u6807\u7B7E\uFF0C\u56E0\u4E3A\u5B9E\u9645\u4E0A\u6253\u5370\u6807\u7B7E\u4F1A\u4EA7\u751F\u6210\u672C\uFF0C\u6240\u4EE5\u6211\u4EEC\u8BBE\u7F6E\u4E86\u4E00\u4E2A\u6D4B\u8BD5\u6807\u7B7E\u4F9B\u4E0B\u8F7D\uFF0C\u6240\u4EE5\u6253\u5370\u7684\u6807\u7B7E\u90FD\u662F\u76F8\u540C\u7684\u6807\u7B7E


### \u6D4B\u8BD5\u73AF\u5883: \b\b\`https://api.sandbox.shipber.com\` 

<br>

### \u6D4B\u8BD5\u4F7F\u7528\u7684\u8D26\u53F7\u5BC6\u7801
\`\`\`
api-key\uFF1A 2cn1wgmfidytin3jef3b 
api-secret\uFF1A qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C
\`\`\`

<br>

### \u6B63\u5F0F\u73AF\u5883: \`https://api.shipber.com\` 

<br>

### \u6D4B\u8BD5\u6B65\u9AA4\u5EFA\u8BAE

1. \u9996\u5148\u4F7F\u7528\u6D4B\u8BD5\u8D26\u53F7\u6839\u636Eship from\u63A5\u53E3\u83B7\u5F97\u53D1\u4EF6\u5730\u5740(\u4F1A\u8FD4\u56DEuuid\u548Cship from)
2. \u63A5\u4E0B\u6765\u5C31\u662Fvalidate\u63A5\u53E3\u6821\u9A8C\u53EF\u53D1\u4EF6\u5730\u5740\u662F\u5426\u53EF\u7528
3. \u7B2C\u4E09\u6B65\u5C31\u662Frate\u63A5\u53E3\u8BA1\u4EF7\uFF08\u6CE8\u610F\uFF1Aship from\u5B57\u6BB5\u7684uuid\u548C\u8BE6\u7EC6\u5730\u5740\u662F\u4E8C\u9009\u4E00\u7684\uFF0C\u5EFA\u8BAE\u4F7F\u7528uuid\u56E0\u4E3A\u53EA\u6709\u4E00\u6761\u5B57\u6BB5\u51FA\u9519\u7387\u4F1A\u5F88\u4F4E\uFF09
4. \u7136\u540E\u5C31\u662Fpost/\u6807\u7B7E\u7684\u5EFA\u5355\u63A5\u53E3\uFF08\u6CE8\u610Fcarrier service\u548Crate id\u662F\u6839\u636Erate\u63A5\u53E3\u8FD4\u56DE\u6765\u7684\u5B57\u6BB5\uFF0C\u4E00\u5B9A\u8981\u5BF9\u5E94\u4E0A\u8FDB\u884C\u4F20\u9012\uFF09
5. \u7B2C\u4E94\u6B65\u5C31\u662Fget/\u6807\u7B7E\u67E5\u8BE2\u8BA2\u5355\u63A5\u53E3
6. \u6700\u540E\u5C31\u662Fcancel\u63A5\u53E3

<br>

**\u8BF7\u52A1\u5FC5\u5728\u6D4B\u8BD5\u73AF\u5883\u8FDB\u884C\u975E\u5E38\u5B8C\u5584\u7684\u6D4B\u8BD5\u4E4B\u540E\uFF0C\u518D\u5230\u6B63\u5F0F\u73AF\u5883\u8FDB\u884C\u6253\u5355\u64CD\u4F5C\u3002**

`,contentRendered:`<h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1>
<h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2>
<h3 id="\u76EE\u524D\u63D0\u4F9B\u7684\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u76EE\u524D\u63D0\u4F9B\u7684\u63A5\u53E3" aria-hidden="true">#</a> \u76EE\u524D\u63D0\u4F9B\u7684\u63A5\u53E3</h3>
<ul>
<li>
<p><strong>Ship From List</strong> <br>
\u83B7\u53D6\u53EF\u7528\u53D1\u4EF6\u5730\u5740</p>
</li>
<li>
<p><strong>Rate</strong> <br>
\u4E00\u952E\u6279\u91CF\u8FD0\u7B97\u591A\u4E2A\u7269\u6D41\u5546/\u670D\u52A1/\u8D26\u53F7\u7684\u8D39\u7387</p>
</li>
<li>
<p><strong>Address validation</strong> <br>
\u5730\u5740\u6821\u68C0\u63A5\u53E3</p>
</li>
<li>
<p><strong>Shipping</strong> <br>
\u521B\u5EFA\u548C\u81EA\u5B9A\u4E49\u8D27\u8FD0\u6807\u7B7E</p>
</li>
<li>
<p><strong>Download \u6807\u7B7E</strong> <br>
\u83B7\u53D6\u6807\u7B7E\u4FE1\u606F\uFF0C\u5C06Shipping \u521B\u5EFA\u7684\u8FD0\u5355\uFF0C\u8F6C\u6210PDF \u683C\u5F0F\u8FDB\u884C\u6253\u5370\u3002</p>
</li>
<li>
<p><strong>Cancel</strong> <br>
\u8FD0\u5355\u53D6\u6D88, \u5C06\u4E4B\u524D Shipping \u521B\u5EFA\u7684\u8FD0\u5355\u8FDB\u884C\u53D6\u6D88</p>
</li>
</ul>
<h2 id="\u6C99\u76D2\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u6C99\u76D2\u73AF\u5883" aria-hidden="true">#</a> \u6C99\u76D2\u73AF\u5883</h2>
<h3 id="\u5982\u4F55\u4F7F\u7528\u6C99\u76D2" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528\u6C99\u76D2" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528\u6C99\u76D2</h3>
<p>\u6211\u4EEC\u5C06\u4E3A\u60A8\u63D0\u4F9B\u4E13\u95E8\u7528\u4E8E\u6C99\u76D2\u73AF\u5883\u7684API\u5BC6\u94A5\u548CAPI secret\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u8FD9\u4E5F\u65B9\u4FBF\u60A8\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u4E0D\u4F1A\u4EA7\u751F\u5B9E\u9645\u6210\u672C\u548C\u5B9E\u9645\u8DDF\u8E2A\u4FE1\u606F\uFF0C\u9664\u4E86API\u5BC6\u94A5\u548CAPI secret\u4E4B\u5916\uFF0C\u5176\u4ED6\u4E00\u5207\u90FD\u662F\u4E00\u6837\u7684\u3002\u56E0\u6B64\uFF0C\u60A8\u53EF\u4EE5\u5728\u6C99\u7BB1\u4E2D\u8F7B\u677E\u6D4B\u8BD5\u548C\u5F00\u53D1\u5E94\u7528\u7A0B\u5E8F\uFF0C\u7136\u540E\u5728\u51C6\u5907\u6295\u5165\u751F\u4EA7\u65F6\uFF0C\u53EA\u9700\u66F4\u6539API\u5BC6\u94A5\u5373\u53EF\u3002</p>
<h3 id="\u5DEE\u5F02" tabindex="-1"><a class="header-anchor" href="#\u5DEE\u5F02" aria-hidden="true">#</a> \u5DEE\u5F02</h3>
<p>\u6211\u4EEC\u7684\u6C99\u7BB1\u73AF\u5883\u5C3D\u53EF\u80FD\u4E0E\u751F\u4EA7\u73AF\u5883\u76F8\u5339\u914D\uFF0C\u4F46\u6709\u4E00\u4E9B\u5DEE\u5F02\u9700\u8981\u6CE8\u610F\uFF1A</p>
<h4 id="\u6709\u9650\u5305\u88F9\u627F\u8FD0\u4EBA" tabindex="-1"><a class="header-anchor" href="#\u6709\u9650\u5305\u88F9\u627F\u8FD0\u4EBA" aria-hidden="true">#</a> \u6709\u9650\u5305\u88F9\u627F\u8FD0\u4EBA</h4>
<p>\u6211\u4EEC\u76EE\u524D\u53EA\u652F\u6301\u7F8E\u56FD\u4E09\u5927\u5305\u88F9\u8FD0\u8F93\u516C\u53F8\u2014\u2014UPS\u3001FedEx\u3001PitneyBowes\u548CUSPS\uFF08Stamps.com\uFF09\u3002\u672A\u6765\u5C06\u589E\u52A0\u5176\u4ED6\u627F\u8FD0\u4EBA\uFF0C\u5305\u62EC\u56FD\u9645\u627F\u8FD0\u4EBA\u3002\u7136\u800C\uFF0C\u5728\u6C99\u7BB1\u73AF\u5883\u4E2D\uFF0C\u8BE5\u5E10\u6237\u4EC5\u63D0\u4F9B\u4E09\u9879\u670D\u52A1\uFF1A\u8054\u90A6\u5FEB\u9012\u5730\u9762\u670D\u52A1\u3001\u8054\u90A6\u5FEB\u9012\u9001\u8D27\u4E0A\u95E8\u670D\u52A1\u548CUPS\u6D4B\u8BD5\u5730\u9762\u670D\u52A1\u3002\u8D39\u7387</p>
<h4 id="\u8D39\u7387" tabindex="-1"><a class="header-anchor" href="#\u8D39\u7387" aria-hidden="true">#</a> \u8D39\u7387</h4>
<p>\u60A8\u5728\u6C99\u7BB1\u4E2D\u83B7\u5F97\u7684\u8FD0\u8D39\u53EF\u80FD\u4E0E\u60A8\u5728\u751F\u4EA7\u4E2D\u83B7\u5F97\u7684\u8FD0\u8D39\u4E0D\u5339\u914D\u3002\u60A8\u6CA1\u6709\u5728\u6C99\u7BB1\u4E2D\u5E94\u7528\u4EFB\u4F55\u534F\u5546\u7684\u8D39\u7387\u6298\u6263\uFF0C\u6709\u4E9B\u8D39\u7387\u662F\u201C\u865A\u62DF\u201D\u8D39\u7387\uFF0C\u4EE5\u9632\u6B62\u6211\u4EEC\u7684\u6C99\u7BB1\u88AB\u6EE5\u7528\u7528\u4E8E\u751F\u4EA7\u76EE\u7684\u3002</p>
<h4 id="\u6D4B\u8BD5\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u6807\u7B7E" aria-hidden="true">#</a> \u6D4B\u8BD5\u6807\u7B7E</h4>
<p>\u5728\u6C99\u76D2\u73AF\u5883\u4E2D\u521B\u5EFA\uFF0C\u6BCF\u4E2A\u88C5\u8FD0\u6709\u591A\u4E2A\u6807\u7B7E\u6216\u6BCF\u4E2A\u88C5\u8FD0\u6709\u4E00\u4E2A\u6807\u7B7E\uFF0C\u56E0\u4E3A\u5B9E\u9645\u4E0A\u6253\u5370\u6807\u7B7E\u4F1A\u4EA7\u751F\u6210\u672C\uFF0C\u6240\u4EE5\u6211\u4EEC\u8BBE\u7F6E\u4E86\u4E00\u4E2A\u6D4B\u8BD5\u6807\u7B7E\u4F9B\u4E0B\u8F7D\uFF0C\u6240\u4EE5\u6253\u5370\u7684\u6807\u7B7E\u90FD\u662F\u76F8\u540C\u7684\u6807\u7B7E</p>
<h3 id="\u6D4B\u8BD5\u73AF\u5883-https-api-sandbox-shipber-com" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u73AF\u5883-https-api-sandbox-shipber-com" aria-hidden="true">#</a> \u6D4B\u8BD5\u73AF\u5883: \b\b<code v-pre>https://api.sandbox.shipber.com</code></h3>
<br>
<h3 id="\u6D4B\u8BD5\u4F7F\u7528\u7684\u8D26\u53F7\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u4F7F\u7528\u7684\u8D26\u53F7\u5BC6\u7801" aria-hidden="true">#</a> \u6D4B\u8BD5\u4F7F\u7528\u7684\u8D26\u53F7\u5BC6\u7801</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>api-key\uFF1A 2cn1wgmfidytin3jef3b 
api-secret\uFF1A qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br>
<h3 id="\u6B63\u5F0F\u73AF\u5883-https-api-shipber-com" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5F0F\u73AF\u5883-https-api-shipber-com" aria-hidden="true">#</a> \u6B63\u5F0F\u73AF\u5883: <code v-pre>https://api.shipber.com</code></h3>
<br>
<h3 id="\u6D4B\u8BD5\u6B65\u9AA4\u5EFA\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u6B65\u9AA4\u5EFA\u8BAE" aria-hidden="true">#</a> \u6D4B\u8BD5\u6B65\u9AA4\u5EFA\u8BAE</h3>
<ol>
<li>\u9996\u5148\u4F7F\u7528\u6D4B\u8BD5\u8D26\u53F7\u6839\u636Eship from\u63A5\u53E3\u83B7\u5F97\u53D1\u4EF6\u5730\u5740(\u4F1A\u8FD4\u56DEuuid\u548Cship from)</li>
<li>\u63A5\u4E0B\u6765\u5C31\u662Fvalidate\u63A5\u53E3\u6821\u9A8C\u53EF\u53D1\u4EF6\u5730\u5740\u662F\u5426\u53EF\u7528</li>
<li>\u7B2C\u4E09\u6B65\u5C31\u662Frate\u63A5\u53E3\u8BA1\u4EF7\uFF08\u6CE8\u610F\uFF1Aship from\u5B57\u6BB5\u7684uuid\u548C\u8BE6\u7EC6\u5730\u5740\u662F\u4E8C\u9009\u4E00\u7684\uFF0C\u5EFA\u8BAE\u4F7F\u7528uuid\u56E0\u4E3A\u53EA\u6709\u4E00\u6761\u5B57\u6BB5\u51FA\u9519\u7387\u4F1A\u5F88\u4F4E\uFF09</li>
<li>\u7136\u540E\u5C31\u662Fpost/\u6807\u7B7E\u7684\u5EFA\u5355\u63A5\u53E3\uFF08\u6CE8\u610Fcarrier service\u548Crate id\u662F\u6839\u636Erate\u63A5\u53E3\u8FD4\u56DE\u6765\u7684\u5B57\u6BB5\uFF0C\u4E00\u5B9A\u8981\u5BF9\u5E94\u4E0A\u8FDB\u884C\u4F20\u9012\uFF09</li>
<li>\u7B2C\u4E94\u6B65\u5C31\u662Fget/\u6807\u7B7E\u67E5\u8BE2\u8BA2\u5355\u63A5\u53E3</li>
<li>\u6700\u540E\u5C31\u662Fcancel\u63A5\u53E3</li>
</ol>
<br>
<p><strong>\u8BF7\u52A1\u5FC5\u5728\u6D4B\u8BD5\u73AF\u5883\u8FDB\u884C\u975E\u5E38\u5B8C\u5584\u7684\u6D4B\u8BD5\u4E4B\u540E\uFF0C\u518D\u5230\u6B63\u5F0F\u73AF\u5883\u8FDB\u884C\u6253\u5355\u64CD\u4F5C\u3002</strong></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/zh/",pathLocale:"/zh/",permalink:null,routeMeta:{title:"\u4ECB\u7ECD"},slug:"Index",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/zh/Index.md",filePathRelative:"zh/Index.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/index.html.vue",componentFilePathRelative:"pages/zh/index.html.vue",componentFileChunkName:"v-2d0ad528",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/index.html.js",dataFilePathRelative:"pages/zh/index.html.js",dataFileChunkName:"v-2d0ad528",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/zh/index.html",htmlFilePathRelative:"zh/index.html"},{data:{key:"v-63ce661f",path:"/zh/My%20Profile.html",title:"\u4E2A\u4EBA\u8D44\u6599",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]}],git:{createdTime:1662709054e3,updatedTime:1663321296e3,contributors:[{name:"Benny",email:"772970153@qq.com",commits:2}]},filePathRelative:"zh/My Profile.md"},key:"v-63ce661f",path:"/zh/My Profile.html",title:"\u4E2A\u4EBA\u8D44\u6599",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]}],content:`# \u4E2A\u4EBA\u8D44\u6599

<table><tr><td style="text-align:center;width:80px;width:80px">GET</td><td>/v1/open-api/user</td></tr></table>


### \u8BF7\u6C42\u5934\u90E8 

|   \u6807\u7B7E    | \u5FC5\u586B |                         \u8BF4\u660E                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   \u2713     | Api Key\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230 |
| Api-Secret |   \u2713     | Api Secret\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230 |


:::: code-group 
::: code-group-item \u8BF7\u6C42\u62A5\u6587

\`\`\`json
curl -X GET  \\
  'https://api.sandbox.shipber.com/v1/open-api/user' \\
  -H 'Content-Type:application/x-www-form-urlencoded' \\
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
\`\`\`
:::

::: code-group-item \u8FD4\u56DE\u62A5\u6587


\`\`\`json
{
    "data": {
        "balance": "99999882.84",
        "email": "a1@4pl.com",
        "name": "Zack",
        "mobile": "0000000000",
        "company": "XXXXX",
        "address": "SZ"
    }
}
\`\`\`
:::
::::`,contentRendered:`<h1 id="\u4E2A\u4EBA\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u4E2A\u4EBA\u8D44\u6599" aria-hidden="true">#</a> \u4E2A\u4EBA\u8D44\u6599</h1>
<table><tr><td style="text-align:center;width:80px;width:80px">GET</td><td>/v1/open-api/user</td></tr></table>
<h3 id="\u8BF7\u6C42\u5934\u90E8" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u5934\u90E8" aria-hidden="true">#</a> \u8BF7\u6C42\u5934\u90E8</h3>
<table>
<thead>
<tr>
<th style="text-align:center">\u6807\u7B7E</th>
<th style="text-align:center">\u5FC5\u586B</th>
<th style="text-align:center">\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Api-Key</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Key\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230</td>
</tr>
<tr>
<td style="text-align:center">Api-Secret</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Secret\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230</td>
</tr>
</tbody>
</table>
<CodeGroup>
<CodeGroupItem title="\u8BF7\u6C42\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>curl -X GET  \\
  'https<span class="token operator">:</span><span class="token comment">//api.sandbox.shipber.com/v1/open-api/user' \\</span>
  -H 'Content-Type<span class="token operator">:</span>application/x-www-form-urlencoded' \\
  -H 'Api-Key<span class="token operator">:</span>2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret<span class="token operator">:</span>qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="\u8FD4\u56DE\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"balance"</span><span class="token operator">:</span> <span class="token string">"99999882.84"</span><span class="token punctuation">,</span>
        <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"a1@4pl.com"</span><span class="token punctuation">,</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Zack"</span><span class="token punctuation">,</span>
        <span class="token property">"mobile"</span><span class="token operator">:</span> <span class="token string">"0000000000"</span><span class="token punctuation">,</span>
        <span class="token property">"company"</span><span class="token operator">:</span> <span class="token string">"XXXXX"</span><span class="token punctuation">,</span>
        <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">"SZ"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/zh/My Profile.html",pathLocale:"/zh/",permalink:null,routeMeta:{title:"\u4E2A\u4EBA\u8D44\u6599"},slug:"My Profile",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/zh/My Profile.md",filePathRelative:"zh/My Profile.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/My Profile.html.vue",componentFilePathRelative:"pages/zh/My Profile.html.vue",componentFileChunkName:"v-63ce661f",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/My Profile.html.js",dataFilePathRelative:"pages/zh/My Profile.html.js",dataFileChunkName:"v-63ce661f",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/zh/My Profile.html",htmlFilePathRelative:"zh/My Profile.html"},{data:{key:"v-6fb126d6",path:"/zh/Q&A.html",title:"\u5E38\u89C1\u95EE\u9898",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:2,title:"sandbox\u73AF\u5883\u662F\u4EC0\u4E48\uFF1F",slug:"sandbox\u73AF\u5883\u662F\u4EC0\u4E48",children:[]},{level:2,title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u6587\u4E3A\u7A7A?",slug:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u6587\u4E3A\u7A7A",children:[]},{level:2,title:"\u4E3A\u4EC0\u4E48\u62A5\u9519service_code: xxx not exist?",slug:"\u4E3A\u4EC0\u4E48\u62A5\u9519service-code-xxx-not-exist",children:[]},{level:2,title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519The ShipFrom is not match with chain 2061?",slug:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519the-shipfrom-is-not-match-with-chain-2061",children:[]},{level:2,title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519Ship Address not found\uFF1F",slug:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519ship-address-not-found",children:[]},{level:2,title:"\u5176\u4ED6\u95EE\u9898",slug:"\u5176\u4ED6\u95EE\u9898",children:[]}],git:{createdTime:167118307e4,updatedTime:167118307e4,contributors:[{name:"Benny",email:"772970153@qq.com",commits:1}]},filePathRelative:"zh/Q&A.md"},key:"v-6fb126d6",path:"/zh/Q&A.html",title:"\u5E38\u89C1\u95EE\u9898",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:2,title:"sandbox\u73AF\u5883\u662F\u4EC0\u4E48\uFF1F",slug:"sandbox\u73AF\u5883\u662F\u4EC0\u4E48",children:[]},{level:2,title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u6587\u4E3A\u7A7A?",slug:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u6587\u4E3A\u7A7A",children:[]},{level:2,title:"\u4E3A\u4EC0\u4E48\u62A5\u9519service_code: xxx not exist?",slug:"\u4E3A\u4EC0\u4E48\u62A5\u9519service-code-xxx-not-exist",children:[]},{level:2,title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519The ShipFrom is not match with chain 2061?",slug:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519the-shipfrom-is-not-match-with-chain-2061",children:[]},{level:2,title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519Ship Address not found\uFF1F",slug:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519ship-address-not-found",children:[]},{level:2,title:"\u5176\u4ED6\u95EE\u9898",slug:"\u5176\u4ED6\u95EE\u9898",children:[]}],content:`# \u5E38\u89C1\u95EE\u9898

## [sandbox\u73AF\u5883\u662F\u4EC0\u4E48\uFF1F](list1.md)


## [\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u6587\u4E3A\u7A7A?](list2.md)


## [\u4E3A\u4EC0\u4E48\u62A5\u9519service_code: xxx not exist?](list3.md)


## [\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519The ShipFrom is not match with chain 2061?](list4.md)


## [\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519Ship Address not found\uFF1F](list5.md)




## \u5176\u4ED6\u95EE\u9898
\u5176\u4ED6\u62A5\u9519\u8BF7\u6839\u636E\u8FD4\u56DE\u7684\u62A5\u9519\u5185\u5BB9\u5BF9\u76F8\u5E94\u5B57\u6BB5\u8FDB\u884C\u67E5\u770B\uFF0C\u5173\u4E8E\u62A5\u6587\u7684\u5B57\u6BB5\u662F\u5426\u5FC5\u586B\u4E0E\u8BF4\u660E\u5177\u4F53\u53EF\u4EE5\u5728\u6587\u6863\u5BF9\u5E94\u63A5\u53E3\u67E5\u770B\uFF0C\u5982\u9047\u5230\u5176\u4ED6\u6280\u672F\u95EE\u9898\u9EBB\u70E6\u8054\u7CFB\u6280\u672F\u8FDB\u884C\u53CD\u9988\u3002`,contentRendered:`<h1 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h1>
<h2 id="sandbox\u73AF\u5883\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#sandbox\u73AF\u5883\u662F\u4EC0\u4E48" aria-hidden="true">#</a> <RouterLink to="/zh/list1.html">sandbox\u73AF\u5883\u662F\u4EC0\u4E48\uFF1F</RouterLink></h2>
<h2 id="\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u6587\u4E3A\u7A7A" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u6587\u4E3A\u7A7A" aria-hidden="true">#</a> <RouterLink to="/zh/list2.html">\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u6587\u4E3A\u7A7A?</RouterLink></h2>
<h2 id="\u4E3A\u4EC0\u4E48\u62A5\u9519service-code-xxx-not-exist" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u62A5\u9519service-code-xxx-not-exist" aria-hidden="true">#</a> <RouterLink to="/zh/list3.html">\u4E3A\u4EC0\u4E48\u62A5\u9519service_code: xxx not exist?</RouterLink></h2>
<h2 id="\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519the-shipfrom-is-not-match-with-chain-2061" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519the-shipfrom-is-not-match-with-chain-2061" aria-hidden="true">#</a> <RouterLink to="/zh/list4.html">\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519The ShipFrom is not match with chain 2061?</RouterLink></h2>
<h2 id="\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519ship-address-not-found" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519ship-address-not-found" aria-hidden="true">#</a> <RouterLink to="/zh/list5.html">\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519Ship Address not found\uFF1F</RouterLink></h2>
<h2 id="\u5176\u4ED6\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u95EE\u9898" aria-hidden="true">#</a> \u5176\u4ED6\u95EE\u9898</h2>
<p>\u5176\u4ED6\u62A5\u9519\u8BF7\u6839\u636E\u8FD4\u56DE\u7684\u62A5\u9519\u5185\u5BB9\u5BF9\u76F8\u5E94\u5B57\u6BB5\u8FDB\u884C\u67E5\u770B\uFF0C\u5173\u4E8E\u62A5\u6587\u7684\u5B57\u6BB5\u662F\u5426\u5FC5\u586B\u4E0E\u8BF4\u660E\u5177\u4F53\u53EF\u4EE5\u5728\u6587\u6863\u5BF9\u5E94\u63A5\u53E3\u67E5\u770B\uFF0C\u5982\u9047\u5230\u5176\u4ED6\u6280\u672F\u95EE\u9898\u9EBB\u70E6\u8054\u7CFB\u6280\u672F\u8FDB\u884C\u53CD\u9988\u3002</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[{raw:"list1.md",relative:"zh/list1.md",absolute:"/zh/list1.md"},{raw:"list2.md",relative:"zh/list2.md",absolute:"/zh/list2.md"},{raw:"list3.md",relative:"zh/list3.md",absolute:"/zh/list3.md"},{raw:"list4.md",relative:"zh/list4.md",absolute:"/zh/list4.md"},{raw:"list5.md",relative:"zh/list5.md",absolute:"/zh/list5.md"}],pathInferred:"/zh/Q&A.html",pathLocale:"/zh/",permalink:null,routeMeta:{title:"\u5E38\u89C1\u95EE\u9898"},slug:"Q&A",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/zh/Q&A.md",filePathRelative:"zh/Q&A.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/Q&A.html.vue",componentFilePathRelative:"pages/zh/Q&A.html.vue",componentFileChunkName:"v-6fb126d6",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/Q&A.html.js",dataFilePathRelative:"pages/zh/Q&A.html.js",dataFileChunkName:"v-6fb126d6",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/zh/Q&A.html",htmlFilePathRelative:"zh/Q&A.html"},{data:{key:"v-60339b94",path:"/zh/Rate%20Shopping.html",title:"\u8FD0\u8D39\u8BA1\u7B97",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]},{level:3,title:"Body\u8BF7\u6C42\u53C2\u6570",slug:"body\u8BF7\u6C42\u53C2\u6570",children:[]}],git:{createdTime:1662709054e3,updatedTime:1679987784e3,contributors:[{name:"Benny",email:"772970153@qq.com",commits:10}]},filePathRelative:"zh/Rate Shopping.md"},key:"v-60339b94",path:"/zh/Rate Shopping.html",title:"\u8FD0\u8D39\u8BA1\u7B97",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]},{level:3,title:"Body\u8BF7\u6C42\u53C2\u6570",slug:"body\u8BF7\u6C42\u53C2\u6570",children:[]}],content:`# \u8FD0\u8D39\u8BA1\u7B97

<table><tr><td style="text-align:center;width:80px">POST</td><td>/v1/open-api/rate</td></tr></table>


### \u8BF7\u6C42\u5934\u90E8 

|   \u6807\u7B7E    | \u5FC5\u586B |                         \u8BF4\u660E                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   \u2713     | Api Key\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230 |
| Api-Secret |   \u2713     | Api Secret\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230 |


### Body\u8BF7\u6C42\u53C2\u6570

| \u53C2\u6570\u540D               |   \u7C7B\u578B    | \u5FC5\u586B | \u8BF4\u660E                                                  |
| :---------------------- | :-------: | :------: | ------------------------------------------------------------ |
| shipment                | [object]  |    \u2713     | -                                                            |
| carrier | [string] | | \u7269\u6D41\u670D\u52A1\u5546\u7F16\u7801\uFF0C\u6B64\u5B57\u6BB5\u4F1A\u7B5B\u9009\u51FA\u8BE5\u670D\u52A1\u5546\u7684\u670D\u52A1\uFF0C\u5E76\u521B\u5EFA\u9762\u5355\u3002\u3010\u5982\u6709\u591A\u4E2A\uFF0C\u5219\u4F7F\u7528\u6700\u4F4E\u4EF7\u683C\u7684\u670D\u52A1\u521B\u5EFA\u9762\u5355\u3002\u3011 <br>\u793A\u4F8B\uFF1Afedex,ups|
| \uFE42service_code          | [string]  |          | \u670D\u52A1\u4EE3\u7801\uFF0C[\u70B9\u51FB](Service_Code.md)\u53EF\u67E5\u770B\u6240\u6709\u670D\u52A1\u4EE3\u7801\u3002<br>\u793A\u4F8B\uFF1Aups_ground                                                  |
| \uFE42ship_from             | [object]  |    \u2713     | \u53D1\u4EF6\u5730\u5740                                                          |
| \uFE42\uFE42uuid                | [string]  |         | \u53D1\u4EF6\u5730\u5740id\uFF0C \u6B64\u5B57\u6BB5\u4E0Eship from \u8BE6\u60C5\u4E8C\u9009\u4E00\uFF0C\u82E5\u586B\u4E86uuid\uFF0Cship_from\u5730\u5740\u8BE6\u60C5\u4E0D\u7528\u586B\u3002\u82E5\u6CA1\u586B\uFF0C\u5219\u5FC5\u987B\u586B\u4EE5\u4E0B\u5730\u5740\u8BE6\u60C5\u3002<br>[\u70B9\u51FB](Warehouse%20Address.md)\u67E5\u770B\u5982\u4F55\u83B7\u53D6uuid<br>\u793A\u4F8B\uFF1A22d953b7-24c4-4ae9-afb4-111cc227b01e |
| \uFE42\uFE42city                | [string]  |    \u2713     | \u53D1\u4EF6\u57CE\u5E02<br>\u793A\u4F8B\uFF1ALOS ANGELES     |
| \uFE42\uFE42name                | [object]  |    \u2713     | \u53D1\u4EF6\u516C\u53F8\u540D\u6216\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35<br>\u793A\u4F8B\uFF1AAmazon     |
| \uFE42\uFE42email               | [string]  |          | \u90AE\u7BB1               |
| \uFE42\uFE42addresses           |  [array]  |    \u2713     | \u5730\u5740\u8BE6\u60C5<br>\u793A\u4F8B\uFF1A6925 Riverview Ave    |
| \uFE42\uFE42postal_code         | [string]  |    \u2713     | \u53D1\u4EF6\u90AE\u7F16\uFF0C\u683C\u5F0F[12345]\u6216[12345-6789]<br>\u793A\u4F8B\uFF1A90045-6275   |
| \uFE42\uFE42country_code        | [string]  |    \u2713     | \u53D1\u4EF6\u56FD\u5BB6\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1AUS  |
| \uFE42\uFE42is_residential      | [boolean] |          | \u53D1\u4EF6\u5730\u5740\u662F\u5426\u4E3A\u4F4F\u5B85\u5730\u5740\u3002true\u8868\u793A\u4F4F\u5B85\u5730\u5740\uFF0Cfalse\u8868\u793A\u5546\u4E1A\u5730\u5740<br>\u793A\u4F8B\uFF1Afalse |
| \uFE42\uFE42state_province_code | [string]  |    \u2713     | \u53D1\u4EF6\u5DDE\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1ACA  |
| \uFE42\uFE42phone               | [string]  |    \u2713     | \u53D1\u4EF6\u4EBA\u8054\u7CFB\u65B9\u5F0F\uFF0C\u81F3\u5C1110\u4F4D\u6570\u5B57<br>\u793A\u4F8B\uFF1A1000000000    |
| \uFE42\uFE42attention           | [string]  |          | \u5907\u6CE8\u6216\u53D1\u4EF6\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35<br>\u793A\u4F8B\uFF1AAnn  |
| \uFE42ship_to               | [object]  |    \u2713     | \u6536\u4EF6\u5730\u5740                                                           |
| \uFE42\uFE42city                | [string]  |    \u2713     | \u6536\u4EF6\u5730\u5740\uFF0C\u57CE\u5E02\u540D<br>Example: PENFIELD     |
| \uFE42\uFE42name                | [string]  |    \u2713     | \u6536\u4EF6\u516C\u53F8\u540D\u6216\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35<br>\u793A\u4F8B\uFF1AAnn     |
| \uFE42\uFE42email               | [string]  |          | \u90AE\u7BB1  |
| \uFE42\uFE42addresses           |  [array]  |    \u2713     | \u5730\u5740\u8BE6\u60C5<br>\u793A\u4F8B\uFF1A6925 Riverview Ave |
| \uFE42\uFE42postal_code         | [string]  |    \u2713     | \u6536\u4EF6\u90AE\u7F16\uFF0C\u683C\u5F0F[12345]\u6216[12345-6789]<br>\u793A\u4F8B\uFF1A14526     |
| \uFE42\uFE42country_code        | [string]  |    \u2713     | \u6536\u4EF6\u56FD\u5BB6\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1AUS |
| \uFE42\uFE42is_residential      | [boolean] |          | \u53D1\u4EF6\u5730\u5740\u662F\u5426\u4E3A\u4F4F\u5B85\u5730\u5740\u3002true\u8868\u793A\u4F4F\u5B85\u5730\u5740\uFF0Cfalse\u8868\u793A\u5546\u4E1A\u5730\u5740<br>\u793A\u4F8B\uFF1Afalse|
| \uFE42\uFE42state_province_code | [string]  |    \u2713     | \u6536\u4EF6\u5DDE\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1ANY   |
| \uFE42\uFE42phone               | [string]  |    \u2713     | \u53D1\u4EF6\u4EBA\u8054\u7CFB\u65B9\u5F0F\uFF0C\u81F3\u5C1110\u4F4D\u6570\u5B57<br>\u793A\u4F8B\uFF1A(999)-999-9999    |
| \uFE42\uFE42phone_ext              | [string]  |         |\u8054\u7CFB\u65B9\u5F0F\u5206\u673A\u53F7 \u9650\u5236:1-4\u4F4D<br>\u793A\u4F8B\uFF1A1234       |
| \uFE42\uFE42attention           | [string]  |          | \u5907\u6CE8\u6216\u53D1\u4EF6\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35    |
| \uFE42packages              |  [array]  |    \u2713     | \u5305\u88F9\u8BE6\u60C5                                                     |
| \uFE42\uFE42dimension           | [object]  |    \u2713     | \u5305\u88F9\u5C3A\u5BF8<br>\u6700\u5927/\u6700\u5C0F\u5C3A\u5BF8\u503C\u56E0\u670D\u52A1\u548C\u5305\u88C5\u7C7B\u578B\u800C\u5F02      |
| \uFE42\uFE42\uFE42width             | [number]  |    \u2713     | \u5305\u88F9\u5BBD\u5EA6\uFF0C\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A20.01 |
| \uFE42\uFE42\uFE42height            | [number]  |    \u2713     | \u5305\u88F9\u9AD8\u5EA6\uFF0C\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A20.01  |
| \uFE42\uFE42\uFE42length            | [number]  |    \u2713     | \u5305\u88F9\u957F\u5EA6\uFF0C\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A20.01 |
| \uFE42\uFE42\uFE42code              | [string]  |    \u2713     | \u957F\u5EA6\u5355\u4F4D\uFF0C\u6709\u6548\u503C\u4E3A\uFF1Ain/cm<br>\u793A\u4F8B\uFF1Ain |
| \uFE42\uFE42weight              | [object]  |    \u2713     | \u5305\u88F9\u91CD\u91CF|
| \uFE42\uFE42\uFE42code              | [string]  |    \u2713     | \u91CD\u91CF\u5355\u4F4D\uFF0C\u6709\u6548\u503C\u4E3A\uFF1Alb/oz/kg/g<br>\u6CE8\u610F\uFF1A\u8F93\u5165\u5927\u5199\u5B57\u6BCD\u4F1A\u62A5\u9519<br>\u793A\u4F8B\uFF1Alb|
| \uFE42\uFE42\uFE42value             | [number]  |    \u2713     | \u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A68.25 |
| \uFE42\uFE42confirmation        | [string]  |    \u2713     | \u7B7E\u540D\u670D\u52A1\uFF0C[\u70B9\u51FB](Conformation.md)\u67E5\u770B\u670D\u52A1\u5546\u652F\u6301\u7684\u7B7E\u540D\u670D\u52A1<br>\u793A\u4F8B:Adult |
| \uFE42\uFE42insurance           | [object]  |          | \u4FDD\u9669\u670D\u52A1   |
| \uFE42\uFE42\uFE42code              | [string]  |          | \u8D27\u5E01\u5355\u4F4D<br>\u793A\u4F8B:USD  |
| \uFE42\uFE42\uFE42value             | [number]  |          | \u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B:300.01 |
| \uFE42\uFE42quantity            | [number]  |    \u2713     | \u5305\u88F9\u6570\u91CF<br>\u793A\u4F8B\uFF1A1    |
| \uFE42\uFE42reference_numbers   |  [array]  |    \u2713     | \u5305\u88F9\u5907\u6CE8 |
| \uFE42\uFE42\uFE42code              | [string]  |    \u2713     | \u5907\u6CE8\u6807\u9898,[\u70B9\u51FB](Reference.md)\u67E5\u770B\u670D\u52A1\u5546\u652F\u6301\u7684\u5907\u6CE8\u4FE1\u606F<br>\u793A\u4F8B\uFF1AINVOICE |
| \uFE42\uFE42\uFE42value             | [object]  |    \u2713     | \u5907\u6CE8\u5185\u5BB9\uFF0C\u6BCF\u4E2A\u5907\u6CE8\u9650\u5236\u957F\u5EA6\uFF1A40<br>\u793A\u4F8B\uFF1AP84746-KMD |
| \uFE42package_type          | [object]  |     \u2713     |\u5305\u88F9\u7C7B\u578B\u3002[\u70B9\u51FB](PackageType.md)\u67E5\u770B\u670D\u52A1\u5546\u652F\u6301\u7684\u5305\u88F9\u7C7B\u578B |
| \uFE42\uFE42type                | [string]  |    \u2713     | \u793A\u4F8B\uFF1Acommon        |
| \uFE42\uFE42name                | [string]  |    \u2713     | \u793A\u4F8B\uFF1APackage    |
| \uFE42pickup_date           | [string]  |    \u2713     | \u53D6\u4EF6\u65E5\u671F\uFF0C\u683C\u5F0F[yyyymmdd]<br>\u793A\u4F8B\uFF1A20221001   |


:::: code-group 
::: code-group-item \u8BF7\u6C42\u62A5\u6587

\`\`\`json
curl -X POST  \\
  'https://api.sandbox.shipber.com/v1/open-api/rate' \\
  -H 'Content-Type:application/json' \\
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '{
    "shipment": {
        "ship_from": {
            "uuid": "7b572b8d-08a3-4cc7-a711-1aae28e9ffcf"
        },
        "ship_to": {
            "city": "Penfield",
            "state_province_code": "NY",
            "postal_code": "14526",
            "country_code": "US"
        },
        "packages": [
            {
                "dimension": {
                    "width": 10,
                    "height": 10,
                    "length": 10,
                    "code": "IN"
                },
                "weight": {
                    "code": "lb",
                    "value": 20
                },
                "confirmation": "None",
                "quantity": 1
            }
        ],
        "package_type": {
            "type": "common",
            "name": "Package"
        },
        "pickup_date": "20211010"
    }
}'
\`\`\`


:::

::: code-group-item \u8FD4\u56DE\u62A5\u6587

\`\`\`json
{
    "data": {
        "rates": [{
            "charge": {
                "code": "USD",
                "value": 10.03
            },
            "estimate_ship_time": {
                "delivery_time_to_tz": "2021-04-15T23:00:00-07:00",
                "delivery_time_from_tz": "2021-04-15T23:00:00-07:00",
                "days": 1
            },
            "carrier": "ups",
            "service_code": "ups_ground",
            "service_name": "UPS\xAE Ground",
            "carrier_service": "UPS\xAE Ground",
            "account_alias": "CO:Xu3GDZ5iu_",
            "rate_id": "eyJjaGFpbklkIjo0MzMsInNlcnZpY2VDb2RlIjoidXBzX2dyb3VuZCJ9"
        }]
    }
}
\`\`\`



:::
::::
`,contentRendered:`<h1 id="\u8FD0\u8D39\u8BA1\u7B97" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u8D39\u8BA1\u7B97" aria-hidden="true">#</a> \u8FD0\u8D39\u8BA1\u7B97</h1>
<table><tr><td style="text-align:center;width:80px">POST</td><td>/v1/open-api/rate</td></tr></table>
<h3 id="\u8BF7\u6C42\u5934\u90E8" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u5934\u90E8" aria-hidden="true">#</a> \u8BF7\u6C42\u5934\u90E8</h3>
<table>
<thead>
<tr>
<th style="text-align:center">\u6807\u7B7E</th>
<th style="text-align:center">\u5FC5\u586B</th>
<th style="text-align:center">\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Api-Key</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Key\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230</td>
</tr>
<tr>
<td style="text-align:center">Api-Secret</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Secret\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230</td>
</tr>
</tbody>
</table>
<h3 id="body\u8BF7\u6C42\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#body\u8BF7\u6C42\u53C2\u6570" aria-hidden="true">#</a> Body\u8BF7\u6C42\u53C2\u6570</h3>
<table>
<thead>
<tr>
<th style="text-align:left">\u53C2\u6570\u540D</th>
<th style="text-align:center">\u7C7B\u578B</th>
<th style="text-align:center">\u5FC5\u586B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">shipment</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>-</td>
</tr>
<tr>
<td style="text-align:left">carrier</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u7269\u6D41\u670D\u52A1\u5546\u7F16\u7801\uFF0C\u6B64\u5B57\u6BB5\u4F1A\u7B5B\u9009\u51FA\u8BE5\u670D\u52A1\u5546\u7684\u670D\u52A1\uFF0C\u5E76\u521B\u5EFA\u9762\u5355\u3002\u3010\u5982\u6709\u591A\u4E2A\uFF0C\u5219\u4F7F\u7528\u6700\u4F4E\u4EF7\u683C\u7684\u670D\u52A1\u521B\u5EFA\u9762\u5355\u3002\u3011 <br>\u793A\u4F8B\uFF1Afedex,ups</td>
</tr>
<tr>
<td style="text-align:left">\uFE42service_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u670D\u52A1\u4EE3\u7801\uFF0C<RouterLink to="/zh/Service_Code.html">\u70B9\u51FB</RouterLink>\u53EF\u67E5\u770B\u6240\u6709\u670D\u52A1\u4EE3\u7801\u3002<br>\u793A\u4F8B\uFF1Aups_ground</td>
</tr>
<tr>
<td style="text-align:left">\uFE42ship_from</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u5730\u5740</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42uuid</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u53D1\u4EF6\u5730\u5740id\uFF0C \u6B64\u5B57\u6BB5\u4E0Eship from \u8BE6\u60C5\u4E8C\u9009\u4E00\uFF0C\u82E5\u586B\u4E86uuid\uFF0Cship_from\u5730\u5740\u8BE6\u60C5\u4E0D\u7528\u586B\u3002\u82E5\u6CA1\u586B\uFF0C\u5219\u5FC5\u987B\u586B\u4EE5\u4E0B\u5730\u5740\u8BE6\u60C5\u3002<br><RouterLink to="/zh/Warehouse%20Address.html">\u70B9\u51FB</RouterLink>\u67E5\u770B\u5982\u4F55\u83B7\u53D6uuid<br>\u793A\u4F8B\uFF1A22d953b7-24c4-4ae9-afb4-111cc227b01e</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42city</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u57CE\u5E02<br>\u793A\u4F8B\uFF1ALOS ANGELES</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42name</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u516C\u53F8\u540D\u6216\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35<br>\u793A\u4F8B\uFF1AAmazon</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42email</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u90AE\u7BB1</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42addresses</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center">\u2713</td>
<td>\u5730\u5740\u8BE6\u60C5<br>\u793A\u4F8B\uFF1A6925 Riverview Ave</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42postal_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u90AE\u7F16\uFF0C\u683C\u5F0F[12345]\u6216[12345-6789]<br>\u793A\u4F8B\uFF1A90045-6275</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42country_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u56FD\u5BB6\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1AUS</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42is_residential</td>
<td style="text-align:center">[boolean]</td>
<td style="text-align:center"></td>
<td>\u53D1\u4EF6\u5730\u5740\u662F\u5426\u4E3A\u4F4F\u5B85\u5730\u5740\u3002true\u8868\u793A\u4F4F\u5B85\u5730\u5740\uFF0Cfalse\u8868\u793A\u5546\u4E1A\u5730\u5740<br>\u793A\u4F8B\uFF1Afalse</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42state_province_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u5DDE\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1ACA</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42phone</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u4EBA\u8054\u7CFB\u65B9\u5F0F\uFF0C\u81F3\u5C1110\u4F4D\u6570\u5B57<br>\u793A\u4F8B\uFF1A1000000000</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42attention</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u5907\u6CE8\u6216\u53D1\u4EF6\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35<br>\u793A\u4F8B\uFF1AAnn</td>
</tr>
<tr>
<td style="text-align:left">\uFE42ship_to</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>\u6536\u4EF6\u5730\u5740</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42city</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u6536\u4EF6\u5730\u5740\uFF0C\u57CE\u5E02\u540D<br>Example: PENFIELD</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42name</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u6536\u4EF6\u516C\u53F8\u540D\u6216\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35<br>\u793A\u4F8B\uFF1AAnn</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42email</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u90AE\u7BB1</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42addresses</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center">\u2713</td>
<td>\u5730\u5740\u8BE6\u60C5<br>\u793A\u4F8B\uFF1A6925 Riverview Ave</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42postal_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u6536\u4EF6\u90AE\u7F16\uFF0C\u683C\u5F0F[12345]\u6216[12345-6789]<br>\u793A\u4F8B\uFF1A14526</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42country_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u6536\u4EF6\u56FD\u5BB6\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1AUS</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42is_residential</td>
<td style="text-align:center">[boolean]</td>
<td style="text-align:center"></td>
<td>\u53D1\u4EF6\u5730\u5740\u662F\u5426\u4E3A\u4F4F\u5B85\u5730\u5740\u3002true\u8868\u793A\u4F4F\u5B85\u5730\u5740\uFF0Cfalse\u8868\u793A\u5546\u4E1A\u5730\u5740<br>\u793A\u4F8B\uFF1Afalse</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42state_province_code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u6536\u4EF6\u5DDE\u4E8C\u5B57\u4EE3\u7801<br>\u793A\u4F8B\uFF1ANY</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42phone</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D1\u4EF6\u4EBA\u8054\u7CFB\u65B9\u5F0F\uFF0C\u81F3\u5C1110\u4F4D\u6570\u5B57<br>\u793A\u4F8B\uFF1A(999)-999-9999</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42phone_ext</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u8054\u7CFB\u65B9\u5F0F\u5206\u673A\u53F7 \u9650\u5236:1-4\u4F4D<br>\u793A\u4F8B\uFF1A1234</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42attention</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u5907\u6CE8\u6216\u53D1\u4EF6\u4EBA\u540D\uFF0C\u9650\u5236\u957F\u5EA6\uFF1A35</td>
</tr>
<tr>
<td style="text-align:left">\uFE42packages</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u8BE6\u60C5</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42dimension</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u5C3A\u5BF8<br>\u6700\u5927/\u6700\u5C0F\u5C3A\u5BF8\u503C\u56E0\u670D\u52A1\u548C\u5305\u88C5\u7C7B\u578B\u800C\u5F02</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42width</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u5BBD\u5EA6\uFF0C\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A20.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42height</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u9AD8\u5EA6\uFF0C\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A20.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42length</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u957F\u5EA6\uFF0C\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A20.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u957F\u5EA6\u5355\u4F4D\uFF0C\u6709\u6548\u503C\u4E3A\uFF1Ain/cm<br>\u793A\u4F8B\uFF1Ain</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42weight</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u91CD\u91CF</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u91CD\u91CF\u5355\u4F4D\uFF0C\u6709\u6548\u503C\u4E3A\uFF1Alb/oz/kg/g<br>\u6CE8\u610F\uFF1A\u8F93\u5165\u5927\u5199\u5B57\u6BCD\u4F1A\u62A5\u9519<br>\u793A\u4F8B\uFF1Alb</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42value</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B\uFF1A68.25</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42confirmation</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u7B7E\u540D\u670D\u52A1\uFF0C<RouterLink to="/zh/Conformation.html">\u70B9\u51FB</RouterLink>\u67E5\u770B\u670D\u52A1\u5546\u652F\u6301\u7684\u7B7E\u540D\u670D\u52A1<br>\u793A\u4F8B:Adult</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42insurance</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center"></td>
<td>\u4FDD\u9669\u670D\u52A1</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center"></td>
<td>\u8D27\u5E01\u5355\u4F4D<br>\u793A\u4F8B:USD</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42value</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center"></td>
<td>\u8F93\u5165\u6570\u5B57\u5E76\u4E14\u6700\u591A\u8F93\u5165\u5C0F\u6570\u70B9\u540E\u4E24\u4F4D<br>\u793A\u4F8B:300.01</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42quantity</td>
<td style="text-align:center">[number]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u6570\u91CF<br>\u793A\u4F8B\uFF1A1</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42reference_numbers</td>
<td style="text-align:center">[array]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u5907\u6CE8</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42code</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u5907\u6CE8\u6807\u9898,<RouterLink to="/zh/Reference.html">\u70B9\u51FB</RouterLink>\u67E5\u770B\u670D\u52A1\u5546\u652F\u6301\u7684\u5907\u6CE8\u4FE1\u606F<br>\u793A\u4F8B\uFF1AINVOICE</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42\uFE42value</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>\u5907\u6CE8\u5185\u5BB9\uFF0C\u6BCF\u4E2A\u5907\u6CE8\u9650\u5236\u957F\u5EA6\uFF1A40<br>\u793A\u4F8B\uFF1AP84746-KMD</td>
</tr>
<tr>
<td style="text-align:left">\uFE42package_type</td>
<td style="text-align:center">[object]</td>
<td style="text-align:center">\u2713</td>
<td>\u5305\u88F9\u7C7B\u578B\u3002<RouterLink to="/zh/PackageType.html">\u70B9\u51FB</RouterLink>\u67E5\u770B\u670D\u52A1\u5546\u652F\u6301\u7684\u5305\u88F9\u7C7B\u578B</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42type</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u793A\u4F8B\uFF1Acommon</td>
</tr>
<tr>
<td style="text-align:left">\uFE42\uFE42name</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u793A\u4F8B\uFF1APackage</td>
</tr>
<tr>
<td style="text-align:left">\uFE42pickup_date</td>
<td style="text-align:center">[string]</td>
<td style="text-align:center">\u2713</td>
<td>\u53D6\u4EF6\u65E5\u671F\uFF0C\u683C\u5F0F[yyyymmdd]<br>\u793A\u4F8B\uFF1A20221001</td>
</tr>
</tbody>
</table>
<CodeGroup>
<CodeGroupItem title="\u8BF7\u6C42\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>curl -X POST  \\
  'https<span class="token operator">:</span><span class="token comment">//api.sandbox.shipber.com/v1/open-api/rate' \\</span>
  -H 'Content-Type<span class="token operator">:</span>application/json' \\
  -H 'Api-Key<span class="token operator">:</span>2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret<span class="token operator">:</span>qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '<span class="token punctuation">{</span>
    <span class="token property">"shipment"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"ship_from"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"7b572b8d-08a3-4cc7-a711-1aae28e9ffcf"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"ship_to"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Penfield"</span><span class="token punctuation">,</span>
            <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"NY"</span><span class="token punctuation">,</span>
            <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"14526"</span><span class="token punctuation">,</span>
            <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">"dimension"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                    <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                    <span class="token property">"length"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"IN"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"lb"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">20</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">"confirmation"</span><span class="token operator">:</span> <span class="token string">"None"</span><span class="token punctuation">,</span>
                <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"package_type"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"common"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Package"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"pickup_date"</span><span class="token operator">:</span> <span class="token string">"20211010"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="\u8FD4\u56DE\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"rates"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token property">"charge"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"USD"</span><span class="token punctuation">,</span>
                <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">10.03</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"estimate_ship_time"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"delivery_time_to_tz"</span><span class="token operator">:</span> <span class="token string">"2021-04-15T23:00:00-07:00"</span><span class="token punctuation">,</span>
                <span class="token property">"delivery_time_from_tz"</span><span class="token operator">:</span> <span class="token string">"2021-04-15T23:00:00-07:00"</span><span class="token punctuation">,</span>
                <span class="token property">"days"</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token string">"ups"</span><span class="token punctuation">,</span>
            <span class="token property">"service_code"</span><span class="token operator">:</span> <span class="token string">"ups_ground"</span><span class="token punctuation">,</span>
            <span class="token property">"service_name"</span><span class="token operator">:</span> <span class="token string">"UPS\xAE Ground"</span><span class="token punctuation">,</span>
            <span class="token property">"carrier_service"</span><span class="token operator">:</span> <span class="token string">"UPS\xAE Ground"</span><span class="token punctuation">,</span>
            <span class="token property">"account_alias"</span><span class="token operator">:</span> <span class="token string">"CO:Xu3GDZ5iu_"</span><span class="token punctuation">,</span>
            <span class="token property">"rate_id"</span><span class="token operator">:</span> <span class="token string">"eyJjaGFpbklkIjo0MzMsInNlcnZpY2VDb2RlIjoidXBzX2dyb3VuZCJ9"</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[{raw:"Service_Code.md",relative:"zh/Service_Code.md",absolute:"/zh/Service_Code.md"},{raw:"Warehouse%20Address.md",relative:"zh/Warehouse%20Address.md",absolute:"/zh/Warehouse%20Address.md"},{raw:"Conformation.md",relative:"zh/Conformation.md",absolute:"/zh/Conformation.md"},{raw:"Reference.md",relative:"zh/Reference.md",absolute:"/zh/Reference.md"},{raw:"PackageType.md",relative:"zh/PackageType.md",absolute:"/zh/PackageType.md"}],pathInferred:"/zh/Rate Shopping.html",pathLocale:"/zh/",permalink:null,routeMeta:{title:"\u8FD0\u8D39\u8BA1\u7B97"},slug:"Rate Shopping",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/zh/Rate Shopping.md",filePathRelative:"zh/Rate Shopping.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/Rate Shopping.html.vue",componentFilePathRelative:"pages/zh/Rate Shopping.html.vue",componentFileChunkName:"v-60339b94",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/Rate Shopping.html.js",dataFilePathRelative:"pages/zh/Rate Shopping.html.js",dataFileChunkName:"v-60339b94",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/zh/Rate Shopping.html",htmlFilePathRelative:"zh/Rate Shopping.html"},{data:{key:"v-c4109b5e",path:"/zh/Shipping%20Service.html",title:"\u8FD0\u8F93\u670D\u52A1",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]}],git:{createdTime:1662709054e3,updatedTime:1671009161e3,contributors:[{name:"Benny",email:"772970153@qq.com",commits:3}]},filePathRelative:"zh/Shipping Service.md"},key:"v-c4109b5e",path:"/zh/Shipping Service.html",title:"\u8FD0\u8F93\u670D\u52A1",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]}],content:`# \u8FD0\u8F93\u670D\u52A1

<table><tr><td style="text-align:center;width:80px">GET</td><td>/v1/open-api/user/shipping-services</td></tr></table>

### \u8BF7\u6C42\u5934\u90E8 

|   \u6807\u7B7E    | \u5FC5\u586B |                         \u8BF4\u660E                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   \u2713     | Api Key\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230 |
| Api-Secret |   \u2713     | Api Secret\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230 |



:::: code-group 
::: code-group-item \u8BF7\u6C42\u62A5\u6587

\`\`\`json
curl -X GET  \\
  'https://api.sandbox.shipber.com/v1/open-api/user/shipping-services' \\
  -H 'Content-Type:application/x-www-form-urlencoded' \\
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
\`\`\`

:::

::: code-group-item \u8FD4\u56DE\u62A5\u6587

\`\`\`json
{
    "data": [{
        "carrier": "ups",
        "code": "ups_ground",
        "addresses": [{
            "nick_name": "Repository1",
            "city": "Kansas City",
            "name": "Test Company",
            "addresses": ["6925 Riverview Ave"],
            "telephone": "0123456789",
            "postal_code": "66102",
            "country_code": "US",
            "is_residential": false,
            "state_province_code": "KS"
        }],
        "name": "UPS\xAE Ground"
    }]
}

\`\`\`
:::
::::`,contentRendered:`<h1 id="\u8FD0\u8F93\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u8F93\u670D\u52A1" aria-hidden="true">#</a> \u8FD0\u8F93\u670D\u52A1</h1>
<table><tr><td style="text-align:center;width:80px">GET</td><td>/v1/open-api/user/shipping-services</td></tr></table>
<h3 id="\u8BF7\u6C42\u5934\u90E8" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u5934\u90E8" aria-hidden="true">#</a> \u8BF7\u6C42\u5934\u90E8</h3>
<table>
<thead>
<tr>
<th style="text-align:center">\u6807\u7B7E</th>
<th style="text-align:center">\u5FC5\u586B</th>
<th style="text-align:center">\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Api-Key</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Key\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230</td>
</tr>
<tr>
<td style="text-align:center">Api-Secret</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Secret\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230</td>
</tr>
</tbody>
</table>
<CodeGroup>
<CodeGroupItem title="\u8BF7\u6C42\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>curl -X GET  \\
  'https<span class="token operator">:</span><span class="token comment">//api.sandbox.shipber.com/v1/open-api/user/shipping-services' \\</span>
  -H 'Content-Type<span class="token operator">:</span>application/x-www-form-urlencoded' \\
  -H 'Api-Key<span class="token operator">:</span>2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret<span class="token operator">:</span>qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="\u8FD4\u56DE\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token property">"carrier"</span><span class="token operator">:</span> <span class="token string">"ups"</span><span class="token punctuation">,</span>
        <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"ups_ground"</span><span class="token punctuation">,</span>
        <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token property">"nick_name"</span><span class="token operator">:</span> <span class="token string">"Repository1"</span><span class="token punctuation">,</span>
            <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Test Company"</span><span class="token punctuation">,</span>
            <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"6925 Riverview Ave"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"telephone"</span><span class="token operator">:</span> <span class="token string">"0123456789"</span><span class="token punctuation">,</span>
            <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
            <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
            <span class="token property">"is_residential"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"UPS\xAE Ground"</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/zh/Shipping Service.html",pathLocale:"/zh/",permalink:null,routeMeta:{title:"\u8FD0\u8F93\u670D\u52A1"},slug:"Shipping Service",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/zh/Shipping Service.md",filePathRelative:"zh/Shipping Service.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/Shipping Service.html.vue",componentFilePathRelative:"pages/zh/Shipping Service.html.vue",componentFileChunkName:"v-c4109b5e",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/Shipping Service.html.js",dataFilePathRelative:"pages/zh/Shipping Service.html.js",dataFileChunkName:"v-c4109b5e",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/zh/Shipping Service.html",htmlFilePathRelative:"zh/Shipping Service.html"},{data:{key:"v-2d166366",path:"/zh/Warehouse%20Address.html",title:"\u53D1\u4EF6\u5730\u5740",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]}],git:{createdTime:1662709054e3,updatedTime:1673977295e3,contributors:[{name:"Benny",email:"772970153@qq.com",commits:4}]},filePathRelative:"zh/Warehouse Address.md"},key:"v-2d166366",path:"/zh/Warehouse Address.html",title:"\u53D1\u4EF6\u5730\u5740",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]}],content:`# \u53D1\u4EF6\u5730\u5740

<table><tr><td style="text-align:center;width:80px">GET</td><td>/v1/open-api/ship-from</td></tr></table>


### \u8BF7\u6C42\u5934\u90E8 

|   \u6807\u7B7E    | \u5FC5\u586B |                         \u8BF4\u660E                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   \u2713     | Api Key\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230 |
| Api-Secret |   \u2713     | Api Secret\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230 |

:::: code-group 
::: code-group-item \u8BF7\u6C42\u62A5\u6587


\`\`\`json
curl -X GET  \\
  'https://api.sandbox.shipber.com/v1/open-api/ship-from' \\
  -H 'Content-Type:application/x-www-form-urlencoded' \\ 
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
\`\`\`



:::

::: code-group-item \u8FD4\u56DE\u62A5\u6587

\`\`\`json
{
    "data": [{
        "uuid": "22d953b7-24c4-4ae9-afb4-111cc227b01e",
        "postal_code": "66102",
        "country_code": "US",
        "state_province_code": "KS",
        "is_residential": false,
        "addresses": ["6925 Riverview Ave"],
        "city": "Kansas City",
        "address_classification": "Commercial",
        "name": "Amazon",
        "phone": "0000000000",
        "attention": "Tom",
        "email": "Test@test.com"
    }]
}
\`\`\`

:::
::::


`,contentRendered:`<h1 id="\u53D1\u4EF6\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u53D1\u4EF6\u5730\u5740" aria-hidden="true">#</a> \u53D1\u4EF6\u5730\u5740</h1>
<table><tr><td style="text-align:center;width:80px">GET</td><td>/v1/open-api/ship-from</td></tr></table>
<h3 id="\u8BF7\u6C42\u5934\u90E8" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u5934\u90E8" aria-hidden="true">#</a> \u8BF7\u6C42\u5934\u90E8</h3>
<table>
<thead>
<tr>
<th style="text-align:center">\u6807\u7B7E</th>
<th style="text-align:center">\u5FC5\u586B</th>
<th style="text-align:center">\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Api-Key</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Key\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230</td>
</tr>
<tr>
<td style="text-align:center">Api-Secret</td>
<td style="text-align:center">\u2713</td>
<td style="text-align:center">Api Secret\uFF0C\u8BF7\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u6211\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D\u627E\u5230</td>
</tr>
</tbody>
</table>
<CodeGroup>
<CodeGroupItem title="\u8BF7\u6C42\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>curl -X GET  \\
  'https<span class="token operator">:</span><span class="token comment">//api.sandbox.shipber.com/v1/open-api/ship-from' \\</span>
  -H 'Content-Type<span class="token operator">:</span>application/x-www-form-urlencoded' \\ 
  -H 'Api-Key<span class="token operator">:</span>2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret<span class="token operator">:</span>qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="\u8FD4\u56DE\u62A5\u6587">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"22d953b7-24c4-4ae9-afb4-111cc227b01e"</span><span class="token punctuation">,</span>
        <span class="token property">"postal_code"</span><span class="token operator">:</span> <span class="token string">"66102"</span><span class="token punctuation">,</span>
        <span class="token property">"country_code"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
        <span class="token property">"state_province_code"</span><span class="token operator">:</span> <span class="token string">"KS"</span><span class="token punctuation">,</span>
        <span class="token property">"is_residential"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"6925 Riverview Ave"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Kansas City"</span><span class="token punctuation">,</span>
        <span class="token property">"address_classification"</span><span class="token operator">:</span> <span class="token string">"Commercial"</span><span class="token punctuation">,</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Amazon"</span><span class="token punctuation">,</span>
        <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"0000000000"</span><span class="token punctuation">,</span>
        <span class="token property">"attention"</span><span class="token operator">:</span> <span class="token string">"Tom"</span><span class="token punctuation">,</span>
        <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"Test@test.com"</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/zh/Warehouse Address.html",pathLocale:"/zh/",permalink:null,routeMeta:{title:"\u53D1\u4EF6\u5730\u5740"},slug:"Warehouse Address",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/zh/Warehouse Address.md",filePathRelative:"zh/Warehouse Address.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/Warehouse Address.html.vue",componentFilePathRelative:"pages/zh/Warehouse Address.html.vue",componentFileChunkName:"v-2d166366",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/Warehouse Address.html.js",dataFilePathRelative:"pages/zh/Warehouse Address.html.js",dataFileChunkName:"v-2d166366",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/zh/Warehouse Address.html",htmlFilePathRelative:"zh/Warehouse Address.html"},{data:{key:"v-4cde7c8e",path:"/zh/list1.html",title:"sandbox\u73AF\u5883\u662F\u4EC0\u4E48\uFF1F",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[],git:{createdTime:167118307e4,updatedTime:167118307e4,contributors:[{name:"Benny",email:"772970153@qq.com",commits:1}]},filePathRelative:"zh/list1.md"},key:"v-4cde7c8e",path:"/zh/list1.html",title:"sandbox\u73AF\u5883\u662F\u4EC0\u4E48\uFF1F",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[],content:`# sandbox\u73AF\u5883\u662F\u4EC0\u4E48\uFF1F


\u95EE\uFF1Asandbox\u73AF\u5883\u662F\u4EC0\u4E48\uFF1F

\u7B54\uFF1Asandbox\u73AF\u5883\u662F\u6D4B\u8BD5\u73AF\u5883\uFF0C\u4F9B\u5BF9\u63A5\u65F6\u6D4B\u8BD5\u4F7F\u7528\u3002

\u95EE\uFF1Asandbox\u73AF\u5883\u7684\u9762\u5355\u6570\u636E\u4E3A\u4F55\u4E00\u81F4\uFF1F

\u7B54\uFF1Asandbox\u73AF\u5883\u4EC5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u56FA\u5B9A\u503C\u3002`,contentRendered:`<h1 id="sandbox\u73AF\u5883\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#sandbox\u73AF\u5883\u662F\u4EC0\u4E48" aria-hidden="true">#</a> sandbox\u73AF\u5883\u662F\u4EC0\u4E48\uFF1F</h1>
<p>\u95EE\uFF1Asandbox\u73AF\u5883\u662F\u4EC0\u4E48\uFF1F</p>
<p>\u7B54\uFF1Asandbox\u73AF\u5883\u662F\u6D4B\u8BD5\u73AF\u5883\uFF0C\u4F9B\u5BF9\u63A5\u65F6\u6D4B\u8BD5\u4F7F\u7528\u3002</p>
<p>\u95EE\uFF1Asandbox\u73AF\u5883\u7684\u9762\u5355\u6570\u636E\u4E3A\u4F55\u4E00\u81F4\uFF1F</p>
<p>\u7B54\uFF1Asandbox\u73AF\u5883\u4EC5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u56FA\u5B9A\u503C\u3002</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/zh/list1.html",pathLocale:"/zh/",permalink:null,routeMeta:{title:"sandbox\u73AF\u5883\u662F\u4EC0\u4E48\uFF1F"},slug:"list1",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/zh/list1.md",filePathRelative:"zh/list1.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/list1.html.vue",componentFilePathRelative:"pages/zh/list1.html.vue",componentFileChunkName:"v-4cde7c8e",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/list1.html.js",dataFilePathRelative:"pages/zh/list1.html.js",dataFileChunkName:"v-4cde7c8e",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/zh/list1.html",htmlFilePathRelative:"zh/list1.html"},{data:{key:"v-4e93552d",path:"/zh/list2.html",title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u6587\u4E3A\u7A7A\uFF1F",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u89E3\u51B3\u65B9\u6CD5\uFF1A",slug:"\u89E3\u51B3\u65B9\u6CD5",children:[]}],git:{createdTime:167118307e4,updatedTime:167118307e4,contributors:[{name:"Benny",email:"772970153@qq.com",commits:1}]},filePathRelative:"zh/list2.md"},key:"v-4e93552d",path:"/zh/list2.html",title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u6587\u4E3A\u7A7A\uFF1F",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u89E3\u51B3\u65B9\u6CD5\uFF1A",slug:"\u89E3\u51B3\u65B9\u6CD5",children:[]}],content:`# ****\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u6587\u4E3A\u7A7A\uFF1F****

**\u5E38\u89C1\u9519\u8BEF\u8FD4\u56DE\u62A5\u6587\u793A\u4F8B\uFF1A**

{ "data": { "rates": [] } }

### \u89E3\u51B3\u65B9\u6CD5\uFF1A

1\u3001Ship From\u5C3D\u91CF\u53EA\u4F7F\u7528uuid\u5B57\u6BB5\uFF0C\u8C03\u7528/v1/open-api/ship-from\u63A5\u53E3\u8FDB\u884C\u67E5\u8BE2\u5F53\u524D\u8D26\u53F7\u53EF\u7528\u7684\u53D1\u8D27\u5730\u5740\u4EE5\u53CA\u5BF9\u5E94\u7684uuid\uFF0C\u5177\u4F53\u53EF\u4EE5\u8DF3\u8F6C\u81F3\uFF1A[\u53D1\u4EF6\u5730\u5740](https://docs.shipber.com/zh/Warehouse%20Address.html)\u67E5\u770B\u3002

\u95EE\uFF1A\u4E3A\u4EC0\u4E48\u5C3D\u91CF\u53EA\u4F7F\u7528uuid\u5B57\u6BB5\uFF1F

\u7B54\uFF1A\u56E0\u4E3A\u5982\u679C\u4F7F\u7528\u53D1\u8D27\u5730\u5740\u5176\u4ED6\u5B57\u6BB5\u4E0E\u7CFB\u7EDF\u53D1\u8D27\u5730\u5740\u4E0D\u4E00\u81F4\u7684\u8BDD\u4F1A\u5BFC\u81F4\u8BA1\u4EF7\u5931\u8D25\u3002

2\u3001Ship to\u5730\u5740\u9700\u8981\u586B\u5199\u6B63\u786E\uFF0C\u53EF\u901A\u8FC7POST\u65B9\u5F0F\u8BF7\u6C42v1/open-api/address/validate\u63A5\u53E3\u5BF9\u5730\u5740\u8FDB\u884C\u6821\u9A8C\uFF0C\u5C3D\u91CF\u4F7F\u7528\u8FD4\u56DE\u7684\u6B63\u786E\u5730\u5740\u8FDB\u884C\u586B\u5199\uFF0C\u5177\u4F53\u53EF\u4EE5\u8DF3\u8F6C\u81F3\uFF1A[\u5730\u5740\u6821\u9A8C](https://docs.shipber.com/zh/Address%20Validation.html)\u67E5\u770B\u3002

\u95EE\uFF1AShip to\u5730\u5740\u9700\u8981\u6CE8\u610F\u54EA\u4E9B\u5B57\u6BB5\uFF1F

\u7B54\uFF1Acity\u3001country_code\u3001state_province_code\u3001postal_code\u9700\u8981\u586B\u5199\u6B63\u786E\u3002

3\u3001dimension\u4EE5\u53CAweight\u7684\u5355\u4F4D\u9700\u8981\u7EDF\u4E00\uFF08cm/kg,in/lb\uFF09\u4E14\u7EDF\u4E00\u4F7F\u7528\u5C0F\u5199\u3002

\u95EE\uFF1Adimension\u4EE5\u53CAweight\u7684\u503C\u6709\u9650\u5236\u5417\uFF1F

\u7B54\uFF1A\u6839\u636E\u9700\u8981\u4F7F\u7528\u7684\u670D\u52A1\u5546\u9650\u5236\u7684\u8303\u56F4\u5185\u8FDB\u884C\u586B\u5199\uFF0C\u4E0D\u53EF\u4E3A0\u53CA\u4EE5\u4E0B\u3002`,contentRendered:`<h1 id="\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u6587\u4E3A\u7A7A" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u6587\u4E3A\u7A7A" aria-hidden="true">#</a> <strong><strong>\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u6587\u4E3A\u7A7A\uFF1F</strong></strong></h1>
<p><strong>\u5E38\u89C1\u9519\u8BEF\u8FD4\u56DE\u62A5\u6587\u793A\u4F8B\uFF1A</strong></p>
<p>{ &quot;data&quot;: { &quot;rates&quot;: [] } }</p>
<h3 id="\u89E3\u51B3\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6CD5\uFF1A</h3>
<p>1\u3001Ship From\u5C3D\u91CF\u53EA\u4F7F\u7528uuid\u5B57\u6BB5\uFF0C\u8C03\u7528/v1/open-api/ship-from\u63A5\u53E3\u8FDB\u884C\u67E5\u8BE2\u5F53\u524D\u8D26\u53F7\u53EF\u7528\u7684\u53D1\u8D27\u5730\u5740\u4EE5\u53CA\u5BF9\u5E94\u7684uuid\uFF0C\u5177\u4F53\u53EF\u4EE5\u8DF3\u8F6C\u81F3\uFF1A<a href="https://docs.shipber.com/zh/Warehouse%20Address.html" target="_blank" rel="noopener noreferrer">\u53D1\u4EF6\u5730\u5740<ExternalLinkIcon/></a>\u67E5\u770B\u3002</p>
<p>\u95EE\uFF1A\u4E3A\u4EC0\u4E48\u5C3D\u91CF\u53EA\u4F7F\u7528uuid\u5B57\u6BB5\uFF1F</p>
<p>\u7B54\uFF1A\u56E0\u4E3A\u5982\u679C\u4F7F\u7528\u53D1\u8D27\u5730\u5740\u5176\u4ED6\u5B57\u6BB5\u4E0E\u7CFB\u7EDF\u53D1\u8D27\u5730\u5740\u4E0D\u4E00\u81F4\u7684\u8BDD\u4F1A\u5BFC\u81F4\u8BA1\u4EF7\u5931\u8D25\u3002</p>
<p>2\u3001Ship to\u5730\u5740\u9700\u8981\u586B\u5199\u6B63\u786E\uFF0C\u53EF\u901A\u8FC7POST\u65B9\u5F0F\u8BF7\u6C42v1/open-api/address/validate\u63A5\u53E3\u5BF9\u5730\u5740\u8FDB\u884C\u6821\u9A8C\uFF0C\u5C3D\u91CF\u4F7F\u7528\u8FD4\u56DE\u7684\u6B63\u786E\u5730\u5740\u8FDB\u884C\u586B\u5199\uFF0C\u5177\u4F53\u53EF\u4EE5\u8DF3\u8F6C\u81F3\uFF1A<a href="https://docs.shipber.com/zh/Address%20Validation.html" target="_blank" rel="noopener noreferrer">\u5730\u5740\u6821\u9A8C<ExternalLinkIcon/></a>\u67E5\u770B\u3002</p>
<p>\u95EE\uFF1AShip to\u5730\u5740\u9700\u8981\u6CE8\u610F\u54EA\u4E9B\u5B57\u6BB5\uFF1F</p>
<p>\u7B54\uFF1Acity\u3001country_code\u3001state_province_code\u3001postal_code\u9700\u8981\u586B\u5199\u6B63\u786E\u3002</p>
<p>3\u3001dimension\u4EE5\u53CAweight\u7684\u5355\u4F4D\u9700\u8981\u7EDF\u4E00\uFF08cm/kg,in/lb\uFF09\u4E14\u7EDF\u4E00\u4F7F\u7528\u5C0F\u5199\u3002</p>
<p>\u95EE\uFF1Adimension\u4EE5\u53CAweight\u7684\u503C\u6709\u9650\u5236\u5417\uFF1F</p>
<p>\u7B54\uFF1A\u6839\u636E\u9700\u8981\u4F7F\u7528\u7684\u670D\u52A1\u5546\u9650\u5236\u7684\u8303\u56F4\u5185\u8FDB\u884C\u586B\u5199\uFF0C\u4E0D\u53EF\u4E3A0\u53CA\u4EE5\u4E0B\u3002</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/zh/list2.html",pathLocale:"/zh/",permalink:null,routeMeta:{title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u6587\u4E3A\u7A7A\uFF1F"},slug:"list2",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/zh/list2.md",filePathRelative:"zh/list2.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/list2.html.vue",componentFilePathRelative:"pages/zh/list2.html.vue",componentFileChunkName:"v-4e93552d",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/list2.html.js",dataFilePathRelative:"pages/zh/list2.html.js",dataFileChunkName:"v-4e93552d",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/zh/list2.html",htmlFilePathRelative:"zh/list2.html"},{data:{key:"v-50482dcc",path:"/zh/list3.html",title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519service_code: xxx not exist?",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u89E3\u51B3\u65B9\u6CD5\uFF1A",slug:"\u89E3\u51B3\u65B9\u6CD5",children:[]}],git:{createdTime:167118307e4,updatedTime:167118307e4,contributors:[{name:"Benny",email:"772970153@qq.com",commits:1}]},filePathRelative:"zh/list3.md"},key:"v-50482dcc",path:"/zh/list3.html",title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519service_code: xxx not exist?",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u89E3\u51B3\u65B9\u6CD5\uFF1A",slug:"\u89E3\u51B3\u65B9\u6CD5",children:[]}],content:`# ****\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519service_code: xxx not exist?****

**\u5E38\u89C1\u9519\u8BEF\u8FD4\u56DE\u62A5\u6587\u793A\u4F8B\uFF1A**

{ "status_code": 400, "message": "service_code: ups_ground not exist" }

### \u89E3\u51B3\u65B9\u6CD5\uFF1A

\u8C03\u7528/v1/open-api/user/shipping-services\u63A5\u53E3\u67E5\u770B\u8D26\u53F7\u53EF\u7528\u670D\u52A1\u4EE5\u53CA\u53D1\u8D27\u5730\u5740\u662F\u5426\u5339\u914D\uFF0C\u5177\u4F53\u53EF\u8DF3\u8F6C\u81F3[\u8FD0\u8F93\u670D\u52A1](https://docs.shipber.com/zh/Shipping%20Service.html)\u67E5\u770B\u3002

\u5339\u914D\uFF1A\u8054\u7CFB\u7CFB\u7EDF\u7BA1\u7406\u5458\u67E5\u770B\u5408\u7EA6\u8D26\u53F7\u72B6\u6001\u662F\u5426\u6B63\u5E38\u3002

\u4E0D\u5339\u914D\uFF1A\u9700\u8981\u6309\u7167\u8FD4\u56DE\u7ED3\u679C\u7684\u53EF\u7528\u670D\u52A1\u4EE5\u53CA\u53D1\u8D27\u5730\u5740\u8FDB\u884C\u586B\u5199\u3002`,contentRendered:`<h1 id="\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519service-code-xxx-not-exist" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519service-code-xxx-not-exist" aria-hidden="true">#</a> <strong><strong>\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519service_code: xxx not exist?</strong></strong></h1>
<p><strong>\u5E38\u89C1\u9519\u8BEF\u8FD4\u56DE\u62A5\u6587\u793A\u4F8B\uFF1A</strong></p>
<p>{ &quot;status_code&quot;: 400, &quot;message&quot;: &quot;service_code: ups_ground not exist&quot; }</p>
<h3 id="\u89E3\u51B3\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6CD5\uFF1A</h3>
<p>\u8C03\u7528/v1/open-api/user/shipping-services\u63A5\u53E3\u67E5\u770B\u8D26\u53F7\u53EF\u7528\u670D\u52A1\u4EE5\u53CA\u53D1\u8D27\u5730\u5740\u662F\u5426\u5339\u914D\uFF0C\u5177\u4F53\u53EF\u8DF3\u8F6C\u81F3<a href="https://docs.shipber.com/zh/Shipping%20Service.html" target="_blank" rel="noopener noreferrer">\u8FD0\u8F93\u670D\u52A1<ExternalLinkIcon/></a>\u67E5\u770B\u3002</p>
<p>\u5339\u914D\uFF1A\u8054\u7CFB\u7CFB\u7EDF\u7BA1\u7406\u5458\u67E5\u770B\u5408\u7EA6\u8D26\u53F7\u72B6\u6001\u662F\u5426\u6B63\u5E38\u3002</p>
<p>\u4E0D\u5339\u914D\uFF1A\u9700\u8981\u6309\u7167\u8FD4\u56DE\u7ED3\u679C\u7684\u53EF\u7528\u670D\u52A1\u4EE5\u53CA\u53D1\u8D27\u5730\u5740\u8FDB\u884C\u586B\u5199\u3002</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/zh/list3.html",pathLocale:"/zh/",permalink:null,routeMeta:{title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519service_code: xxx not exist?"},slug:"list3",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/zh/list3.md",filePathRelative:"zh/list3.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/list3.html.vue",componentFilePathRelative:"pages/zh/list3.html.vue",componentFileChunkName:"v-50482dcc",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/list3.html.js",dataFilePathRelative:"pages/zh/list3.html.js",dataFileChunkName:"v-50482dcc",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/zh/list3.html",htmlFilePathRelative:"zh/list3.html"},{data:{key:"v-51fd066b",path:"/zh/list4.html",title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519The ShipFrom is not match with chain 2061\uFF1F",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u89E3\u51B3\u65B9\u6CD5\uFF1A",slug:"\u89E3\u51B3\u65B9\u6CD5",children:[]}],git:{createdTime:167118307e4,updatedTime:167118307e4,contributors:[{name:"Benny",email:"772970153@qq.com",commits:1}]},filePathRelative:"zh/list4.md"},key:"v-51fd066b",path:"/zh/list4.html",title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519The ShipFrom is not match with chain 2061\uFF1F",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u89E3\u51B3\u65B9\u6CD5\uFF1A",slug:"\u89E3\u51B3\u65B9\u6CD5",children:[]}],content:`# \u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519The ShipFrom is not match with chain 2061\uFF1F

**\u5E38\u89C1\u9519\u8BEF\u8FD4\u56DE\u62A5\u6587\u793A\u4F8B\uFF1A**

{ "status_code": 400,"message": "The ShipFrom is not match with chain 2061" }

### \u89E3\u51B3\u65B9\u6CD5\uFF1A

1\u3001Ship_from\u672A\u4F7F\u7528uuid\uFF0C\u8C03\u7528/v1/open-api/ship-from\u63A5\u53E3\u8FDB\u884C\u67E5\u8BE2\u5BF9\u5E94\u53D1\u8D27\u5730\u5740\u7684uuid\u540E\u5C06uuid\u586B\u5199\u81F3Ship_from\u3002\u5177\u4F53\u53EF\u4EE5\u8DF3\u8F6C\u81F3\uFF1A[\u53D1\u4EF6\u5730\u5740](https://docs.shipber.com/zh/Warehouse%20Address.html)\u67E5\u770B\u3002

2\u3001\u8C03\u7528/v1/open-api/ship-from\u63A5\u53E3\u8FDB\u884C\u67E5\u8BE2\u5BF9\u5E94\u53D1\u8D27\u5730\u5740\uFF0C\u5C06\u6B63\u786E\u53D1\u8D27\u5730\u5740\u7684\u4FE1\u606F\u586B\u5199\u81F3Ship_from\u3002\u5177\u4F53\u53EF\u4EE5\u8DF3\u8F6C\u81F3\uFF1A[\u53D1\u4EF6\u5730\u5740](https://docs.shipber.com/zh/Warehouse%20Address.html)\u67E5\u770B\u3002`,contentRendered:`<h1 id="\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519the-shipfrom-is-not-match-with-chain-2061" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519the-shipfrom-is-not-match-with-chain-2061" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519The ShipFrom is not match with chain 2061\uFF1F</h1>
<p><strong>\u5E38\u89C1\u9519\u8BEF\u8FD4\u56DE\u62A5\u6587\u793A\u4F8B\uFF1A</strong></p>
<p>{ &quot;status_code&quot;: 400,&quot;message&quot;: &quot;The ShipFrom is not match with chain 2061&quot; }</p>
<h3 id="\u89E3\u51B3\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6CD5\uFF1A</h3>
<p>1\u3001Ship_from\u672A\u4F7F\u7528uuid\uFF0C\u8C03\u7528/v1/open-api/ship-from\u63A5\u53E3\u8FDB\u884C\u67E5\u8BE2\u5BF9\u5E94\u53D1\u8D27\u5730\u5740\u7684uuid\u540E\u5C06uuid\u586B\u5199\u81F3Ship_from\u3002\u5177\u4F53\u53EF\u4EE5\u8DF3\u8F6C\u81F3\uFF1A<a href="https://docs.shipber.com/zh/Warehouse%20Address.html" target="_blank" rel="noopener noreferrer">\u53D1\u4EF6\u5730\u5740<ExternalLinkIcon/></a>\u67E5\u770B\u3002</p>
<p>2\u3001\u8C03\u7528/v1/open-api/ship-from\u63A5\u53E3\u8FDB\u884C\u67E5\u8BE2\u5BF9\u5E94\u53D1\u8D27\u5730\u5740\uFF0C\u5C06\u6B63\u786E\u53D1\u8D27\u5730\u5740\u7684\u4FE1\u606F\u586B\u5199\u81F3Ship_from\u3002\u5177\u4F53\u53EF\u4EE5\u8DF3\u8F6C\u81F3\uFF1A<a href="https://docs.shipber.com/zh/Warehouse%20Address.html" target="_blank" rel="noopener noreferrer">\u53D1\u4EF6\u5730\u5740<ExternalLinkIcon/></a>\u67E5\u770B\u3002</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/zh/list4.html",pathLocale:"/zh/",permalink:null,routeMeta:{title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519The ShipFrom is not match with chain 2061\uFF1F"},slug:"list4",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/zh/list4.md",filePathRelative:"zh/list4.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/list4.html.vue",componentFilePathRelative:"pages/zh/list4.html.vue",componentFileChunkName:"v-51fd066b",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/list4.html.js",dataFilePathRelative:"pages/zh/list4.html.js",dataFileChunkName:"v-51fd066b",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/zh/list4.html",htmlFilePathRelative:"zh/list4.html"},{data:{key:"v-53b1df0a",path:"/zh/list5.html",title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519Ship Address not found\uFF1F",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u89E3\u51B3\u65B9\u6CD5\uFF1A",slug:"\u89E3\u51B3\u65B9\u6CD5",children:[]}],git:{createdTime:167118307e4,updatedTime:167118307e4,contributors:[{name:"Benny",email:"772970153@qq.com",commits:1}]},filePathRelative:"zh/list5.md"},key:"v-53b1df0a",path:"/zh/list5.html",title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519Ship Address not found\uFF1F",lang:"\u7B80\u4F53\u4E2D\u6587",frontmatter:{},excerpt:"",headers:[{level:3,title:"\u89E3\u51B3\u65B9\u6CD5\uFF1A",slug:"\u89E3\u51B3\u65B9\u6CD5",children:[]}],content:`# \u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519Ship Address not found\uFF1F

**\u5E38\u89C1\u9519\u8BEF\u8FD4\u56DE\u62A5\u6587\u793A\u4F8B\uFF1A**

{ "status_code": 400,"message": "Ship Address not found ."}

### \u89E3\u51B3\u65B9\u6CD5\uFF1A

1\u3001uuid\u586B\u5199\u9519\u8BEF\uFF0C\u8C03\u7528/v1/open-api/ship-from\u63A5\u53E3\u8FDB\u884C\u83B7\u53D6\u6B63\u786E\u7684uuid\u3002\u5177\u4F53\u53EF\u4EE5\u8DF3\u8F6C\u81F3\uFF1A[\u53D1\u4EF6\u5730\u5740](https://docs.shipber.com/zh/Warehouse%20Address.html)\u67E5\u770B\u3002`,contentRendered:`<h1 id="\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519ship-address-not-found" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519ship-address-not-found" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519Ship Address not found\uFF1F</h1>
<p><strong>\u5E38\u89C1\u9519\u8BEF\u8FD4\u56DE\u62A5\u6587\u793A\u4F8B\uFF1A</strong></p>
<p>{ &quot;status_code&quot;: 400,&quot;message&quot;: &quot;Ship Address not found .&quot;}</p>
<h3 id="\u89E3\u51B3\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6CD5\uFF1A</h3>
<p>1\u3001uuid\u586B\u5199\u9519\u8BEF\uFF0C\u8C03\u7528/v1/open-api/ship-from\u63A5\u53E3\u8FDB\u884C\u83B7\u53D6\u6B63\u786E\u7684uuid\u3002\u5177\u4F53\u53EF\u4EE5\u8DF3\u8F6C\u81F3\uFF1A<a href="https://docs.shipber.com/zh/Warehouse%20Address.html" target="_blank" rel="noopener noreferrer">\u53D1\u4EF6\u5730\u5740<ExternalLinkIcon/></a>\u67E5\u770B\u3002</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/zh/list5.html",pathLocale:"/zh/",permalink:null,routeMeta:{title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519Ship Address not found\uFF1F"},slug:"list5",filePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/zh/list5.md",filePathRelative:"zh/list5.md",componentFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/list5.html.vue",componentFilePathRelative:"pages/zh/list5.html.vue",componentFileChunkName:"v-53b1df0a",dataFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/.temp/pages/zh/list5.html.js",dataFilePathRelative:"pages/zh/list5.html.js",dataFileChunkName:"v-53b1df0a",htmlFilePath:"/Users/ly.cai/work/code/4pl/docs.shipber.com/.vuepress/dist/zh/list5.html",htmlFilePathRelative:"zh/list5.html"}],ea={categories:{pagination:10,extendedPages:[],items:{},layout:"Categories"},tags:{pagination:10,extendedPages:[],items:{},layout:"Categories"}};async function ra(){const t=r1(()=>ta),n=r1(()=>na),e=r1(()=>ea);w2(Kr,t),w2(Wr,e),w2(Ge,n)}var oa=x2({setup(){ra()}}),sa=x2({enhance({app:t}){const n=r6(),e=t._context.provides[d3],l=r1(()=>o6(n.value,e.value));t.provide($r,l),Object.defineProperties(t.config.globalProperties,{$theme:{get(){return n.value}},$themeLocale:{get(){return l.value}}})}});const ca=(t,n)=>n.some(e=>{if(L1(e))return e===t.key;const{key:l,ctrl:a=!1,shift:i=!1,alt:d=!1}=e;return l===t.key&&a===t.ctrlKey&&i===t.shiftKey&&d===t.altKey}),la=/[^\x00-\x7F]/,aa=t=>t.split(/\s+/g).map(n=>n.trim()).filter(n=>!!n),Z0=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),t4=(t,n)=>{const e=n.join(" "),l=aa(t);if(la.test(t))return l.some(d=>e.toLowerCase().indexOf(d)>-1);const a=t.endsWith(" ");return new RegExp(l.map((d,p)=>l.length===p+1&&!a?`(?=.*\\b${Z0(d)})`:`(?=.*\\b${Z0(d)}\\b)`).join("")+".+","gi").test(e)},ia=({input:t,hotKeys:n})=>{if(n.value.length===0)return;const e=l=>{!t.value||ca(l,n.value)&&!t.value.contains(l.target)&&(l.preventDefault(),t.value.focus())};Z1(()=>{document.addEventListener("keydown",e)}),cn(()=>{document.removeEventListener("keydown",e)})},ha=[{title:"",headers:[{level:2,title:"Quick Start",slug:"quick-start",children:[]}],path:"/",pathLocale:"/",extraFields:[]},{title:"",headers:[{level:2,title:"Address Validation",slug:"address-validation",children:[{level:3,title:"Header",slug:"header",children:[]},{level:3,title:"Entity Types",slug:"entity-types",children:[]}]}],path:"/en/Address Validation.html",pathLocale:"/en/",extraFields:[]},{title:"Cancel Label",headers:[{level:3,title:"Header",slug:"header",children:[]},{level:3,title:"Entity Types",slug:"entity-types",children:[]}],path:"/en/Cancel Label.html",pathLocale:"/en/",extraFields:[]},{title:"",headers:[{level:2,title:"Conformation",slug:"conformation",children:[]}],path:"/en/Conformation.html",pathLocale:"/en/",extraFields:[]},{title:"Create Shipment from Quote",headers:[{level:3,title:"Header",slug:"header",children:[]},{level:3,title:"Entity Types",slug:"entity-types",children:[]},{level:3,title:"Create Return Label with Outgoing Label",slug:"create-return-label-with-outgoing-label",children:[]}],path:"/en/Create Shipment from Quote.html",pathLocale:"/en/",extraFields:[]},{title:"Create Shipment",headers:[{level:3,title:"Header",slug:"header",children:[]},{level:3,title:"Entity Types",slug:"entity-types",children:[]}],path:"/en/Create Shipment.html",pathLocale:"/en/",extraFields:[]},{title:"Download Label",headers:[{level:3,title:"Header",slug:"header",children:[]},{level:3,title:"Query",slug:"query",children:[]}],path:"/en/Download Label.html",pathLocale:"/en/",extraFields:[]},{title:"Overview",headers:[{level:2,title:"Getting Started",slug:"getting-started",children:[{level:3,title:"Currently provided APIs",slug:"currently-provided-apis",children:[]}]},{level:2,title:"Sandbox Environment",slug:"sandbox-environment",children:[{level:3,title:"How to Use the Sandbox",slug:"how-to-use-the-sandbox",children:[]},{level:3,title:"Differences in Behavior",slug:"differences-in-behavior",children:[]},{level:3,title:"Test Environment: \b\bhttps://api.sandbox.shipber.com",slug:"test-environment-https-api-sandbox-shipber-com",children:[]},{level:3,title:"Account password used for testing",slug:"account-password-used-for-testing",children:[]},{level:3,title:"Formal environment: https://api.shipber.com",slug:"formal-environment-https-api-shipber-com",children:[]},{level:3,title:"Suggested test steps",slug:"suggested-test-steps",children:[]}]}],path:"/en/",pathLocale:"/en/",extraFields:[]},{title:"My Profile",headers:[{level:3,title:"Header",slug:"header",children:[]}],path:"/en/My Profile.html",pathLocale:"/en/",extraFields:[]},{title:"",headers:[{level:2,title:"Package Type",slug:"package-type",children:[]}],path:"/en/PackageType.html",pathLocale:"/en/",extraFields:[]},{title:"Rate Shopping",headers:[{level:3,title:"Header",slug:"header",children:[]},{level:3,title:"Entity Types",slug:"entity-types",children:[]}],path:"/en/Rate Shopping.html",pathLocale:"/en/",extraFields:[]},{title:"",headers:[{level:2,title:"Reference",slug:"reference",children:[]}],path:"/en/Reference.html",pathLocale:"/en/",extraFields:[]},{title:"",headers:[{level:2,title:"UPS",slug:"ups",children:[]},{level:2,title:"FedEx",slug:"fedex",children:[]},{level:2,title:"USPS",slug:"usps",children:[]}],path:"/en/Service_Code.html",pathLocale:"/en/",extraFields:[]},{title:"Shipping Service",headers:[{level:3,title:"Header",slug:"header",children:[]}],path:"/en/Shipping Service.html",pathLocale:"/en/",extraFields:[]},{title:"Warehouse Address",headers:[{level:3,title:"Header",slug:"header",children:[]}],path:"/en/Warehouse Address.html",pathLocale:"/en/",extraFields:[]},{title:"\u5730\u5740\u6821\u9A8C",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]},{level:3,title:"Body\u8BF7\u6C42\u53C2\u6570",slug:"body\u8BF7\u6C42\u53C2\u6570",children:[]}],path:"/zh/Address Validation.html",pathLocale:"/zh/",extraFields:[]},{title:"\u53D6\u6D88\u8FD0\u5355",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]},{level:3,title:"Body\u53C2\u6570",slug:"body\u53C2\u6570",children:[]}],path:"/zh/Cancel Label.html",pathLocale:"/zh/",extraFields:[]},{title:"",headers:[{level:2,title:"Conformation",slug:"conformation",children:[]}],path:"/zh/Conformation.html",pathLocale:"/zh/",extraFields:[]},{title:"\u6839\u636E\u8BA1\u8D39 id \u521B\u5EFA\u8FD0\u5355",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]},{level:3,title:"Body\u8BF7\u6C42\u53C2\u6570",slug:"body\u8BF7\u6C42\u53C2\u6570",children:[]},{level:3,title:"\u521B\u5EFA\u9000\u8D27\u8FD0\u5355",slug:"\u521B\u5EFA\u9000\u8D27\u8FD0\u5355",children:[]}],path:"/zh/Create Shipment from Quote.html",pathLocale:"/zh/",extraFields:[]},{title:"\u521B\u5EFA\u8FD0\u5355",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]},{level:3,title:"Body\u8BF7\u6C42\u53C2\u6570",slug:"body\u8BF7\u6C42\u53C2\u6570",children:[]}],path:"/zh/Create Shipment.html",pathLocale:"/zh/",extraFields:[]},{title:"\u4E0B\u8F7D\u9762\u5355",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]},{level:3,title:"Query\u53C2\u6570",slug:"query\u53C2\u6570",children:[]}],path:"/zh/Download Label.html",pathLocale:"/zh/",extraFields:[]},{title:"\u4ECB\u7ECD",headers:[{level:2,title:"\u524D\u8A00",slug:"\u524D\u8A00",children:[{level:3,title:"\u76EE\u524D\u63D0\u4F9B\u7684\u63A5\u53E3",slug:"\u76EE\u524D\u63D0\u4F9B\u7684\u63A5\u53E3",children:[]}]},{level:2,title:"\u6C99\u76D2\u73AF\u5883",slug:"\u6C99\u76D2\u73AF\u5883",children:[{level:3,title:"\u5982\u4F55\u4F7F\u7528\u6C99\u76D2",slug:"\u5982\u4F55\u4F7F\u7528\u6C99\u76D2",children:[]},{level:3,title:"\u5DEE\u5F02",slug:"\u5DEE\u5F02",children:[]},{level:3,title:"\u6D4B\u8BD5\u73AF\u5883: \b\bhttps://api.sandbox.shipber.com",slug:"\u6D4B\u8BD5\u73AF\u5883-https-api-sandbox-shipber-com",children:[]},{level:3,title:"\u6D4B\u8BD5\u4F7F\u7528\u7684\u8D26\u53F7\u5BC6\u7801",slug:"\u6D4B\u8BD5\u4F7F\u7528\u7684\u8D26\u53F7\u5BC6\u7801",children:[]},{level:3,title:"\u6B63\u5F0F\u73AF\u5883: https://api.shipber.com",slug:"\u6B63\u5F0F\u73AF\u5883-https-api-shipber-com",children:[]},{level:3,title:"\u6D4B\u8BD5\u6B65\u9AA4\u5EFA\u8BAE",slug:"\u6D4B\u8BD5\u6B65\u9AA4\u5EFA\u8BAE",children:[]}]}],path:"/zh/",pathLocale:"/zh/",extraFields:[]},{title:"\u4E2A\u4EBA\u8D44\u6599",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]}],path:"/zh/My Profile.html",pathLocale:"/zh/",extraFields:[]},{title:"",headers:[{level:2,title:"Package Type",slug:"package-type",children:[]}],path:"/zh/PackageType.html",pathLocale:"/zh/",extraFields:[]},{title:"\u5E38\u89C1\u95EE\u9898",headers:[{level:2,title:"sandbox\u73AF\u5883\u662F\u4EC0\u4E48\uFF1F",slug:"sandbox\u73AF\u5883\u662F\u4EC0\u4E48",children:[]},{level:2,title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u6587\u4E3A\u7A7A?",slug:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u6587\u4E3A\u7A7A",children:[]},{level:2,title:"\u4E3A\u4EC0\u4E48\u62A5\u9519service_code: xxx not exist?",slug:"\u4E3A\u4EC0\u4E48\u62A5\u9519service-code-xxx-not-exist",children:[]},{level:2,title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519The ShipFrom is not match with chain 2061?",slug:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519the-shipfrom-is-not-match-with-chain-2061",children:[]},{level:2,title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519Ship Address not found\uFF1F",slug:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519ship-address-not-found",children:[]},{level:2,title:"\u5176\u4ED6\u95EE\u9898",slug:"\u5176\u4ED6\u95EE\u9898",children:[]}],path:"/zh/Q&A.html",pathLocale:"/zh/",extraFields:[]},{title:"\u8FD0\u8D39\u8BA1\u7B97",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]},{level:3,title:"Body\u8BF7\u6C42\u53C2\u6570",slug:"body\u8BF7\u6C42\u53C2\u6570",children:[]}],path:"/zh/Rate Shopping.html",pathLocale:"/zh/",extraFields:[]},{title:"",headers:[{level:2,title:"Reference",slug:"reference",children:[]}],path:"/zh/Reference.html",pathLocale:"/zh/",extraFields:[]},{title:"",headers:[{level:2,title:"UPS",slug:"ups",children:[]},{level:2,title:"FedEx",slug:"fedex",children:[]},{level:2,title:"USPS",slug:"usps",children:[]}],path:"/zh/Service_Code.html",pathLocale:"/zh/",extraFields:[]},{title:"\u8FD0\u8F93\u670D\u52A1",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]}],path:"/zh/Shipping Service.html",pathLocale:"/zh/",extraFields:[]},{title:"\u53D1\u4EF6\u5730\u5740",headers:[{level:3,title:"\u8BF7\u6C42\u5934\u90E8",slug:"\u8BF7\u6C42\u5934\u90E8",children:[]}],path:"/zh/Warehouse Address.html",pathLocale:"/zh/",extraFields:[]},{title:"sandbox\u73AF\u5883\u662F\u4EC0\u4E48\uFF1F",headers:[],path:"/zh/list1.html",pathLocale:"/zh/",extraFields:[]},{title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u6587\u4E3A\u7A7A\uFF1F",headers:[{level:3,title:"\u89E3\u51B3\u65B9\u6CD5\uFF1A",slug:"\u89E3\u51B3\u65B9\u6CD5",children:[]}],path:"/zh/list2.html",pathLocale:"/zh/",extraFields:[]},{title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519service_code: xxx not exist?",headers:[{level:3,title:"\u89E3\u51B3\u65B9\u6CD5\uFF1A",slug:"\u89E3\u51B3\u65B9\u6CD5",children:[]}],path:"/zh/list3.html",pathLocale:"/zh/",extraFields:[]},{title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519The ShipFrom is not match with chain 2061\uFF1F",headers:[{level:3,title:"\u89E3\u51B3\u65B9\u6CD5\uFF1A",slug:"\u89E3\u51B3\u65B9\u6CD5",children:[]}],path:"/zh/list4.html",pathLocale:"/zh/",extraFields:[]},{title:"\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u62A5\u9519Ship Address not found\uFF1F",headers:[{level:3,title:"\u89E3\u51B3\u65B9\u6CD5\uFF1A",slug:"\u89E3\u51B3\u65B9\u6CD5",children:[]}],path:"/zh/list5.html",pathLocale:"/zh/",extraFields:[]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/timeline/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/posts/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/posts/2/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/posts/3/",pathLocale:"/",extraFields:[]}],Jr=Z(ha),da=()=>Jr;Zn.webpackHot&&(__VUE_HMR_RUNTIME__.updateSearchIndex=t=>{Jr.value=t});const pa=({searchIndex:t,routeLocale:n,query:e,maxSuggestions:l})=>{const a=r1(()=>t.value.filter(i=>i.pathLocale===n.value));return r1(()=>{const i=e.value.trim().toLowerCase();if(!i)return[];const d=[],p=(w,u)=>{t4(i,[u.title])&&d.push({link:`${w.path}#${u.slug}`,title:w.title,header:u.title});for(const _ of u.children){if(d.length>=l.value)return;p(w,_)}};for(const w of a.value){if(d.length>=l.value)break;if(t4(i,[w.title,...w.extraFields])){d.push({link:w.path,title:w.title});continue}for(const u of w.headers){if(d.length>=l.value)break;p(w,u)}}return d})},wa=t=>{const n=Z(0);return{focusIndex:n,focusNext:()=>{n.value<t.value.length-1?n.value+=1:n.value=0},focusPrev:()=>{n.value>0?n.value-=1:n.value=t.value.length-1}}},ua=c({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>({})},hotKeys:{type:Array,required:!1,default:()=>[]},maxSuggestions:{type:Number,required:!1,default:5}},setup(t){const{locales:n,hotKeys:e,maxSuggestions:l}=Mt(t),a=zt(),i=xr(),d=da(),p=Z(null),w=Z(!1),u=Z(""),_=r1(()=>{var L;return(L=n.value[i.value])!=null?L:{}}),g=pa({searchIndex:d,routeLocale:i,query:u,maxSuggestions:l}),{focusIndex:v,focusNext:x,focusPrev:k}=wa(g);ia({input:p,hotKeys:e});const C=r1(()=>w.value&&!!g.value.length),y=()=>{!C.value||k()},f=()=>{!C.value||x()},M=L=>{if(!C.value)return;const b=g.value[L];!b||a.push(b.link).then(()=>{u.value="",v.value=0})};return()=>O("form",{class:"search-box",role:"search"},[O("input",{ref:p,type:"search",placeholder:_.value.placeholder,autocomplete:"off",spellcheck:!1,value:u.value,onFocus:()=>w.value=!0,onBlur:()=>w.value=!1,onInput:L=>u.value=L.target.value,onKeydown:L=>{switch(L.key){case"ArrowUp":{y();break}case"ArrowDown":{f();break}case"Enter":{L.preventDefault(),M(v.value);break}}}}),C.value&&O("ul",{class:"suggestions",onMouseleave:()=>v.value=-1},g.value.map(({link:L,title:b,header:A},U)=>O("li",{class:["suggestion",{focus:v.value===U}],onMouseenter:()=>v.value=U,onMousedown:()=>M(U)},O("a",{href:L,onClick:X=>X.preventDefault()},[O("span",{class:"page-title"},b),A&&O("span",{class:"page-header"},`> ${A}`)]))))])}});const _a={},va=[{key:"s",ctrl:!0}],xa=5;var ga=x2({enhance({app:t}){t.component("SearchBox",n=>O(ua,E1({locales:_a,hotKeys:va,maxSuggestions:xa},n)))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT