var We=Object.defineProperty;var Me=(r,e,t)=>e in r?We(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var we=(r,e,t)=>(Me(r,typeof e!="symbol"?e+"":e,t),t);import{S as Xe,i as Ye,s as Qe,a as Ze,e as D,c as xe,b as q,g as Z,t as N,d as x,f as V,h as C,j as et,o as ve,k as tt,l as nt,m as rt,n as ye,p as G,q as at,r as st,u as ot,v as B,w as re,x as z,y as J,z as Ce}from"./chunks/index-2e8868cc.js";import{g as qe,f as Be,s as Q,a as ke,i as it}from"./chunks/singletons-2a3bbaa3.js";import{s as lt}from"./chunks/paths-3b574081.js";const ct=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),ft=function(r,e){return new URL(r,e).href},ze={},H=function(e,t,o){return!t||t.length===0?e():Promise.all(t.map(a=>{if(a=ft(a,o),a in ze)return;ze[a]=!0;const u=a.endsWith(".css"),n=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${n}`))return;const i=document.createElement("link");if(i.rel=u?"stylesheet":ct,u||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),u)return new Promise((d,p)=>{i.addEventListener("load",d),i.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e())};class le{constructor(e,t){we(this,"name","HttpError");we(this,"stack");this.status=e,this.message=t!=null?t:`Error: ${e}`}toString(){return this.message}}class Je{constructor(e,t){this.status=e,this.location=t}}function ut(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function dt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const pt=["href","pathname","search","searchParams","toString","toJSON"];function ht(r,e){const t=new URL(r);for(const o of pt){let a=t[o];Object.defineProperty(t,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(o,a,u)=>u(r,a),mt(t),t}function mt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function _t(r){let e=5381,t=r.length;if(typeof r=="string")for(;t;)e=e*33^r.charCodeAt(--t);else for(;t;)e=e*33^r[--t];return(e>>>0).toString(36)}const Re=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ce.delete(o)}return Re(r,e)};const ce=new Map;function gt(r,e,t){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;t&&typeof t.body=="string"&&(a+=`[data-hash="${_t(t.body)}"]`);const u=document.querySelector(a);if(u!=null&&u.textContent){const{body:n,...i}=JSON.parse(u.textContent),d=u.getAttribute("data-ttl");return d&&ce.set(e,{body:n,init:i,ttl:1e3*Number(d)}),Promise.resolve(new Response(n,i))}return Re(r,t)}function wt(r,e){const t=ce.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);ce.delete(r)}return Re(r,e)}const yt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function bt(r){const e=[],t=[];let o=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(vt).map((u,n,i)=>{const d=decodeURIComponent(u),p=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(d);if(p)return e.push(p[1]),t.push(p[2]),"(?:/(.*))?";const y=n===i.length-1;return d&&"/"+d.split(/\[(.+?)\]/).map((S,T)=>{if(T%2){const R=yt.exec(S);if(!R)throw new Error(`Invalid param: ${S}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,j,K,W]=R;return e.push(K),t.push(W),j?"(.*?)":"([^/]+?)"}return y&&S.includes(".")&&(o=!1),S.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:t}}function vt(r){return!/^\([^)]+\)$/.test(r)}function kt(r,e,t,o){const a={};for(let u=0;u<e.length;u+=1){const n=e[u],i=t[u],d=r[u+1]||"";if(i){const p=o[i];if(!p)throw new Error(`Missing "${i}" param matcher`);if(!p(d))return}a[n]=d}return a}function $t(r,e,t,o){const a=new Set(e);return Object.entries(t).map(([i,[d,p,y]])=>{const{pattern:S,names:T,types:R}=bt(i),j={id:i,exec:K=>{const W=S.exec(K);if(W)return kt(W,T,R,o)},errors:[1,...y||[]].map(K=>r[K]),layouts:[0,...p||[]].map(n),leaf:u(d)};return j.errors.length=j.layouts.length=Math.max(j.errors.length,j.layouts.length),j});function u(i){const d=i<0;return d&&(i=~i),[d,r[i]]}function n(i){return i===void 0?i:[a.has(i),r[i]]}}function Et(r,e){return new le(r,e)}function Rt(r){let e,t,o;var a=r[0][0];function u(n){return{props:{data:n[2],form:n[1]}}}return a&&(e=new a(u(r))),{c(){e&&B(e.$$.fragment),t=D()},l(n){e&&re(e.$$.fragment,n),t=D()},m(n,i){e&&z(e,n,i),q(n,t,i),o=!0},p(n,i){const d={};if(i&4&&(d.data=n[2]),i&2&&(d.form=n[1]),a!==(a=n[0][0])){if(e){Z();const p=e;N(p.$$.fragment,1,0,()=>{J(p,1)}),x()}a?(e=new a(u(n)),B(e.$$.fragment),V(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else a&&e.$set(d)},i(n){o||(e&&V(e.$$.fragment,n),o=!0)},o(n){e&&N(e.$$.fragment,n),o=!1},d(n){n&&C(t),e&&J(e,n)}}}function St(r){let e,t,o;var a=r[0][0];function u(n){return{props:{data:n[2],$$slots:{default:[jt]},$$scope:{ctx:n}}}}return a&&(e=new a(u(r))),{c(){e&&B(e.$$.fragment),t=D()},l(n){e&&re(e.$$.fragment,n),t=D()},m(n,i){e&&z(e,n,i),q(n,t,i),o=!0},p(n,i){const d={};if(i&4&&(d.data=n[2]),i&1051&&(d.$$scope={dirty:i,ctx:n}),a!==(a=n[0][0])){if(e){Z();const p=e;N(p.$$.fragment,1,0,()=>{J(p,1)}),x()}a?(e=new a(u(n)),B(e.$$.fragment),V(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else a&&e.$set(d)},i(n){o||(e&&V(e.$$.fragment,n),o=!0)},o(n){e&&N(e.$$.fragment,n),o=!1},d(n){n&&C(t),e&&J(e,n)}}}function Lt(r){let e,t,o;var a=r[0][1];function u(n){return{props:{data:n[3],form:n[1]}}}return a&&(e=new a(u(r))),{c(){e&&B(e.$$.fragment),t=D()},l(n){e&&re(e.$$.fragment,n),t=D()},m(n,i){e&&z(e,n,i),q(n,t,i),o=!0},p(n,i){const d={};if(i&8&&(d.data=n[3]),i&2&&(d.form=n[1]),a!==(a=n[0][1])){if(e){Z();const p=e;N(p.$$.fragment,1,0,()=>{J(p,1)}),x()}a?(e=new a(u(n)),B(e.$$.fragment),V(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else a&&e.$set(d)},i(n){o||(e&&V(e.$$.fragment,n),o=!0)},o(n){e&&N(e.$$.fragment,n),o=!1},d(n){n&&C(t),e&&J(e,n)}}}function Pt(r){let e,t,o;var a=r[0][1];function u(n){return{props:{data:n[3],$$slots:{default:[Ot]},$$scope:{ctx:n}}}}return a&&(e=new a(u(r))),{c(){e&&B(e.$$.fragment),t=D()},l(n){e&&re(e.$$.fragment,n),t=D()},m(n,i){e&&z(e,n,i),q(n,t,i),o=!0},p(n,i){const d={};if(i&8&&(d.data=n[3]),i&1043&&(d.$$scope={dirty:i,ctx:n}),a!==(a=n[0][1])){if(e){Z();const p=e;N(p.$$.fragment,1,0,()=>{J(p,1)}),x()}a?(e=new a(u(n)),B(e.$$.fragment),V(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else a&&e.$set(d)},i(n){o||(e&&V(e.$$.fragment,n),o=!0)},o(n){e&&N(e.$$.fragment,n),o=!1},d(n){n&&C(t),e&&J(e,n)}}}function Ot(r){let e,t,o;var a=r[0][2];function u(n){return{props:{data:n[4],form:n[1]}}}return a&&(e=new a(u(r))),{c(){e&&B(e.$$.fragment),t=D()},l(n){e&&re(e.$$.fragment,n),t=D()},m(n,i){e&&z(e,n,i),q(n,t,i),o=!0},p(n,i){const d={};if(i&16&&(d.data=n[4]),i&2&&(d.form=n[1]),a!==(a=n[0][2])){if(e){Z();const p=e;N(p.$$.fragment,1,0,()=>{J(p,1)}),x()}a?(e=new a(u(n)),B(e.$$.fragment),V(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else a&&e.$set(d)},i(n){o||(e&&V(e.$$.fragment,n),o=!0)},o(n){e&&N(e.$$.fragment,n),o=!1},d(n){n&&C(t),e&&J(e,n)}}}function jt(r){let e,t,o,a;const u=[Pt,Lt],n=[];function i(d,p){return d[0][2]?0:1}return e=i(r),t=n[e]=u[e](r),{c(){t.c(),o=D()},l(d){t.l(d),o=D()},m(d,p){n[e].m(d,p),q(d,o,p),a=!0},p(d,p){let y=e;e=i(d),e===y?n[e].p(d,p):(Z(),N(n[y],1,1,()=>{n[y]=null}),x(),t=n[e],t?t.p(d,p):(t=n[e]=u[e](d),t.c()),V(t,1),t.m(o.parentNode,o))},i(d){a||(V(t),a=!0)},o(d){N(t),a=!1},d(d){n[e].d(d),d&&C(o)}}}function Ke(r){let e,t=r[6]&&Fe(r);return{c(){e=tt("div"),t&&t.c(),this.h()},l(o){e=nt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=rt(e);t&&t.l(a),a.forEach(C),this.h()},h(){ye(e,"id","svelte-announcer"),ye(e,"aria-live","assertive"),ye(e,"aria-atomic","true"),G(e,"position","absolute"),G(e,"left","0"),G(e,"top","0"),G(e,"clip","rect(0 0 0 0)"),G(e,"clip-path","inset(50%)"),G(e,"overflow","hidden"),G(e,"white-space","nowrap"),G(e,"width","1px"),G(e,"height","1px")},m(o,a){q(o,e,a),t&&t.m(e,null)},p(o,a){o[6]?t?t.p(o,a):(t=Fe(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&C(e),t&&t.d()}}}function Fe(r){let e;return{c(){e=at(r[7])},l(t){e=st(t,r[7])},m(t,o){q(t,e,o)},p(t,o){o&128&&ot(e,t[7])},d(t){t&&C(e)}}}function At(r){let e,t,o,a,u;const n=[St,Rt],i=[];function d(y,S){return y[0][1]?0:1}e=d(r),t=i[e]=n[e](r);let p=r[5]&&Ke(r);return{c(){t.c(),o=Ze(),p&&p.c(),a=D()},l(y){t.l(y),o=xe(y),p&&p.l(y),a=D()},m(y,S){i[e].m(y,S),q(y,o,S),p&&p.m(y,S),q(y,a,S),u=!0},p(y,[S]){let T=e;e=d(y),e===T?i[e].p(y,S):(Z(),N(i[T],1,1,()=>{i[T]=null}),x(),t=i[e],t?t.p(y,S):(t=i[e]=n[e](y),t.c()),V(t,1),t.m(o.parentNode,o)),y[5]?p?p.p(y,S):(p=Ke(y),p.c(),p.m(a.parentNode,a)):p&&(p.d(1),p=null)},i(y){u||(V(t),u=!0)},o(y){N(t),u=!1},d(y){i[e].d(y),y&&C(o),p&&p.d(y),y&&C(a)}}}function It(r,e,t){let{stores:o}=e,{page:a}=e,{components:u}=e,{form:n}=e,{data_0:i=null}=e,{data_1:d=null}=e,{data_2:p=null}=e;et(o.page.notify);let y=!1,S=!1,T=null;return ve(()=>{const R=o.page.subscribe(()=>{y&&(t(6,S=!0),t(7,T=document.title||"untitled page"))});return t(5,y=!0),R}),r.$$set=R=>{"stores"in R&&t(8,o=R.stores),"page"in R&&t(9,a=R.page),"components"in R&&t(0,u=R.components),"form"in R&&t(1,n=R.form),"data_0"in R&&t(2,i=R.data_0),"data_1"in R&&t(3,d=R.data_1),"data_2"in R&&t(4,p=R.data_2)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(a)},[u,n,i,d,p,y,S,T,o,a]}class Ut extends Xe{constructor(e){super(),Ye(this,e,It,At,Qe,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Tt={},fe=[()=>H(()=>import("./chunks/0-02983a0e.js"),["chunks/0-02983a0e.js","components/pages/_layout.svelte-ef2a7f2c.js","assets/_layout-cf5ead8f.css","assets/SkipLink-b85c4c4a.css","assets/Icon-24972d74.css","chunks/index-2e8868cc.js","chunks/Icon-7cc5842d.js","chunks/stores-7bab1bbb.js","chunks/singletons-2a3bbaa3.js","chunks/paths-3b574081.js"],import.meta.url),()=>H(()=>import("./chunks/1-bbb807be.js"),["chunks/1-bbb807be.js","components/error.svelte-5014f29e.js","chunks/index-2e8868cc.js","chunks/stores-7bab1bbb.js","chunks/singletons-2a3bbaa3.js","chunks/paths-3b574081.js"],import.meta.url),()=>H(()=>import("./chunks/2-1d69bcaf.js"),["chunks/2-1d69bcaf.js","components/pages/docs/_layout.svelte-d5ccd459.js","assets/Main-12f666a7.css","assets/Icon-24972d74.css","chunks/index-2e8868cc.js","chunks/Icon-7cc5842d.js","chunks/stores-7bab1bbb.js","chunks/singletons-2a3bbaa3.js","chunks/paths-3b574081.js"],import.meta.url),()=>H(()=>import("./chunks/3-fd645f20.js"),["chunks/3-fd645f20.js","components/pages/_page.svelte-920440a7.js","assets/_page-12750163.css","assets/SkipLink-b85c4c4a.css","assets/Icon-24972d74.css","chunks/index-2e8868cc.js"],import.meta.url),()=>H(()=>import("./chunks/4-021e9142.js"),[],import.meta.url),()=>H(()=>import("./chunks/5-cc1d5f19.js"),["chunks/5-cc1d5f19.js","components/pages/docs/_section_/_page.svelte-231c09a1.js","assets/Icon-24972d74.css","assets/Main-12f666a7.css","chunks/index-2e8868cc.js","chunks/Icon-7cc5842d.js"],import.meta.url),()=>H(()=>import("./chunks/6-cff0904f.js"),["chunks/6-cff0904f.js","components/pages/examples/_page.svelte-7cd6979e.js","assets/_page-af85b626.css","chunks/index-2e8868cc.js","chunks/paths-3b574081.js"],import.meta.url),()=>H(()=>import("./chunks/7-caf6b889.js"),["chunks/7-caf6b889.js","components/pages/examples/simple/_page.svelte-7e6d0acc.js","chunks/index-2e8868cc.js"],import.meta.url)],Dt=[2],Nt={"":[3],docs:[-5,[2]],examples:[6],"examples/simple":[7],"docs/[section]":[-6,[2]]},Vt="/__data.js",He="sveltekit:scroll",X="sveltekit:index",se=$t(fe,Dt,Nt,Tt),$e=fe[0],Ee=fe[1];$e();Ee();let ne={};try{ne=JSON.parse(sessionStorage[He])}catch{}function be(r){ne[r]=ke()}function Ct({target:r,base:e,trailing_slash:t}){var Te;const o=[],a={id:null,promise:null},u={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,session_id:0,url:null},i=!1,d=!0,p=!1,y=1,S=null,T=!1,R,j=(Te=history.state)==null?void 0:Te[X];j||(j=Date.now(),history.replaceState({...history.state,[X]:j},"",location.href));const K=ne[j];K&&(history.scrollRestoration="manual",scrollTo(K.x,K.y));let W=!1,M,Se;function Le(){if(!S){const s=new URL(location.href);S=Promise.resolve().then(async()=>{const c=he(s,!0);await Oe(c,s,[]),S=null,T=!1})}return S}async function ue(s,{noscroll:c=!1,replaceState:h=!1,keepfocus:l=!1,state:f={}},m){return typeof s=="string"&&(s=new URL(s,qe(document))),me({url:s,scroll:c?ke():null,keepfocus:l,redirect_chain:m,details:{state:f,replaceState:h},accepted:()=>{},blocked:()=>{},type:"goto"})}async function Pe(s){const c=he(s,!1);if(!c)throw new Error("Attempted to prefetch a URL that does not belong to this app");return a.promise=Ie(c),a.id=c.id,a.promise}async function Oe(s,c,h,l,f){var k,$;const m=Se={};let _=s&&await Ie(s);if(!_&&c.origin===location.origin&&c.pathname===location.pathname&&(_=await ae({status:404,error:new Error(`Not found: ${c.pathname}`),url:c,routeId:null})),!_)return await te(c),!1;if(c=(s==null?void 0:s.url)||c,Se!==m)return!1;if(o.length=0,_.type==="redirect")if(h.length>10||h.includes(c.pathname))_=await ae({status:500,error:new Error("Redirect loop"),url:c,routeId:null});else return ue(new URL(_.location,c).href,{},[...h,c.pathname]),!1;else(($=(k=_.props)==null?void 0:k.page)==null?void 0:$.status)>=400&&await Q.updated.check()&&await te(c);if(p=!0,l&&l.details){const{details:v}=l,g=v.replaceState?0:1;v.state[X]=j+=g,history[v.replaceState?"replaceState":"pushState"](v.state,"",c)}if(i){n=_.state,_.props.page&&(_.props.page.url=c);const v=ie();R.$set(_.props),v()}else je(_);if(l){const{scroll:v,keepfocus:g}=l;if(!g){const E=document.body,U=E.getAttribute("tabindex");E.tabIndex=-1,E.focus({preventScroll:!0}),setTimeout(()=>{var L;(L=getSelection())==null||L.removeAllRanges()}),U!==null?E.setAttribute("tabindex",U):E.removeAttribute("tabindex")}if(await Ce(),d){const E=c.hash&&document.getElementById(c.hash.slice(1));v?scrollTo(v.x,v.y):E?E.scrollIntoView():scrollTo(0,0)}}else await Ce();a.promise=null,a.id=null,d=!0,_.props.page&&(M=_.props.page),f&&f(),p=!1}function je(s){var f,m;n=s.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),M=s.props.page;const h=ie();R=new Ut({target:r,props:{...s.props,stores:Q},hydrate:!0}),h();const l={from:null,to:oe("to",{params:n.params,routeId:(m=(f=n.route)==null?void 0:f.id)!=null?m:null,url:new URL(location.href)}),type:"load"};u.after_navigate.forEach(_=>_(l)),i=!0}async function ee({url:s,params:c,branch:h,status:l,error:f,route:m,form:_}){var U;const k=h.filter(Boolean),$={type:"loaded",state:{url:s,params:c,branch:h,error:f,route:m,session_id:y},props:{components:k.map(L=>L.node.component)}};_!==void 0&&($.props.form=_);let v={},g=!M;for(let L=0;L<k.length;L+=1){const A=k[L];v={...v,...A.data},(g||!n.branch.some(I=>I===A))&&($.props[`data_${L}`]=v,g=g||Object.keys((U=A.data)!=null?U:{}).length>0)}if(g||(g=Object.keys(M.data).length!==Object.keys(v).length),!n.url||s.href!==n.url.href||n.error!==f||g){$.props.page={error:f,params:c,routeId:m&&m.id,status:l,url:s,data:g?v:M.data};const L=(A,I)=>{Object.defineProperty($.props.page,A,{get:()=>{throw new Error(`$page.${A} has been replaced by $page.url.${I}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return $}async function de({loader:s,parent:c,url:h,params:l,routeId:f,server_data_node:m}){var v,g,E,U,L;let _=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},$=await s();if((v=$.shared)!=null&&v.load){let A=function(...w){for(const O of w){const{href:P}=new URL(O,h);k.dependencies.add(P)}};const I={};for(const w in l)Object.defineProperty(I,w,{get(){return k.params.add(w),l[w]},enumerable:!0});const b={routeId:f,params:I,data:(g=m==null?void 0:m.data)!=null?g:null,url:ht(h,()=>{k.url=!0}),async fetch(w,O){let P;typeof w=="string"?P=w:(P=w.url,O={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...O});const F=new URL(P,h).href;return A(F),i?wt(F,O):gt(P,F,O)},setHeaders:()=>{},depends:A,parent(){return k.parent=!0,c()}};Object.defineProperties(b,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),_=(E=await $.shared.load.call(null,b))!=null?E:null}return{node:$,loader:s,server:m,shared:(U=$.shared)!=null&&U.load?{type:"data",data:_,uses:k}:null,data:(L=_!=null?_:m==null?void 0:m.data)!=null?L:null}}function Ae(s,c,h){if(T)return!0;if(!h)return!1;if(h.parent&&c||s.url&&h.url)return!0;for(const l of s.params)if(h.params.has(l))return!0;for(const l of h.dependencies)if(o.some(f=>f(new URL(l))))return!0;return!1}function pe(s,c){var h,l;return(s==null?void 0:s.type)==="data"?{type:"data",data:s.data,uses:{dependencies:new Set((h=s.uses.dependencies)!=null?h:[]),params:new Set((l=s.uses.params)!=null?l:[]),parent:!!s.uses.parent,url:!!s.uses.url}}:(s==null?void 0:s.type)==="skip"&&c!=null?c:null}async function Ie({id:s,invalidating:c,url:h,params:l,route:f}){if(a.id===s&&a.promise)return a.promise;const{errors:m,layouts:_,leaf:k}=f,$=n.url&&{url:s!==n.url.pathname+n.url.search,params:Object.keys(l).filter(b=>n.params[b]!==l[b])},v=[..._,k];m.forEach(b=>b==null?void 0:b().catch(()=>{})),v.forEach(b=>b==null?void 0:b[1]().catch(()=>{}));let g=null;const E=v.reduce((b,w,O)=>{var Y;const P=n.branch[O],F=!!(w!=null&&w[0])&&((P==null?void 0:P.loader)!==w[1]||Ae($,b.some(Boolean),(Y=P.server)==null?void 0:Y.uses));return b.push(F),b},[]);if(E.some(Boolean)){try{g=await Ge(h,E)}catch(b){return ae({status:500,error:b,url:h,routeId:f.id})}if(g.type==="redirect")return g}const U=g==null?void 0:g.nodes;let L=!1;const A=v.map(async(b,w)=>{var _e,De;if(!b)return;const O=n.branch[w],P=(_e=U==null?void 0:U[w])!=null?_e:null;if((!P||P.type==="skip")&&b[1]===(O==null?void 0:O.loader)&&!Ae($,L,(De=O.shared)==null?void 0:De.uses))return O;if(L=!0,(P==null?void 0:P.type)==="error")throw P.httperror?Et(P.httperror.status,P.httperror.message):P.error;return de({loader:b[1],url:h,params:l,routeId:f.id,parent:async()=>{var Ve;const Ne={};for(let ge=0;ge<w;ge+=1)Object.assign(Ne,(Ve=await A[ge])==null?void 0:Ve.data);return Ne},server_data_node:pe(P,O==null?void 0:O.server)})});for(const b of A)b.catch(()=>{});const I=[];for(let b=0;b<v.length;b+=1)if(v[b])try{I.push(await A[b])}catch(w){const O=w;if(O instanceof Je)return{type:"redirect",location:O.location};const P=w instanceof le?w.status:500;for(;b--;)if(m[b]){let F,Y=b;for(;!I[Y];)Y-=1;try{return F={node:await m[b](),loader:m[b],data:{},server:null,shared:null},await ee({url:h,params:l,branch:I.slice(0,Y+1).concat(F),status:P,error:O,route:f})}catch{continue}}await te(h);return}else I.push(void 0);return await ee({url:h,params:l,branch:I,status:200,error:null,route:f,form:c?void 0:null})}async function ae({status:s,error:c,url:h,routeId:l}){var v;const f={},m=await $e();let _=null;if(m.server)try{const g=await Ge(h,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;_=(v=g.nodes[0])!=null?v:null}catch{await te(h);return}const k=await de({loader:$e,url:h,params:f,routeId:l,parent:()=>Promise.resolve({}),server_data_node:pe(_)}),$={node:await Ee(),loader:Ee,shared:null,server:null,data:null};return await ee({url:h,params:f,branch:[k,$],status:s,error:c,route:null})}function he(s,c){if(Ue(s))return;const h=decodeURI(s.pathname.slice(e.length)||"/");for(const l of se){const f=l.exec(h);if(f){const m=new URL(s.origin+ut(s.pathname,t)+s.search+s.hash);return{id:m.pathname+m.search,invalidating:c,route:l,params:dt(f),url:m}}}}function Ue(s){return s.origin!==location.origin||!s.pathname.startsWith(e)}async function me({url:s,scroll:c,keepfocus:h,redirect_chain:l,details:f,type:m,delta:_,accepted:k,blocked:$}){var L,A,I,b;let v=!1;const g=he(s,!1),E={from:oe("from",{params:n.params,routeId:(A=(L=n.route)==null?void 0:L.id)!=null?A:null,url:n.url}),to:oe("to",{params:(I=g==null?void 0:g.params)!=null?I:null,routeId:(b=g==null?void 0:g.route.id)!=null?b:null,url:s}),type:m};_!==void 0&&(E.delta=_);const U={...E,cancel:()=>{v=!0}};if(u.before_navigate.forEach(w=>w(U)),v){$();return}be(j),k(),i&&Q.navigating.set(E),await Oe(g,s,l,{scroll:c,keepfocus:h,details:f},()=>{u.after_navigate.forEach(w=>w(E)),Q.navigating.set(null)})}function te(s){return location.href=s.href,new Promise(()=>{})}return{after_navigate:s=>{ve(()=>(u.after_navigate.push(s),()=>{const c=u.after_navigate.indexOf(s);u.after_navigate.splice(c,1)}))},before_navigate:s=>{ve(()=>(u.before_navigate.push(s),()=>{const c=u.before_navigate.indexOf(s);u.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(p||!i)&&(d=!1)},goto:(s,c={})=>ue(s,c,[]),invalidate:s=>{if(s===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof s=="function")o.push(s);else{const{href:c}=new URL(s,location.href);o.push(h=>h.href===c)}return Le()},invalidateAll:()=>(T=!0,Le()),prefetch:async s=>{const c=new URL(s,qe(document));await Pe(c)},prefetch_routes:async s=>{const h=(s?se.filter(l=>s.some(f=>l.exec(f))):se).map(l=>Promise.all([...l.layouts,l.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(h)},apply_action:async s=>{if(s.type==="error"){const c=new URL(location.href),{branch:h,route:l}=n;if(!l)return;let f=n.branch.length;for(;f--;)if(l.errors[f]){let m,_=f;for(;!h[_];)_-=1;try{m={node:await l.errors[f](),loader:l.errors[f],data:{},server:null,shared:null};const k=await ee({url:c,params:n.params,branch:h.slice(0,_+1).concat(m),status:500,error:s.error,route:l});n=k.state;const $=ie();R.$set(k.props),$();return}catch{continue}}}else if(s.type==="redirect")ue(s.location,{},[]);else{const c={form:s.data};s.status!==M.status&&(c.page={...M,status:s.status});const h=ie();R.$set(c),h()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",l=>{var _,k;let f=!1;const m={from:oe("from",{params:n.params,routeId:(k=(_=n.route)==null?void 0:_.id)!=null?k:null,url:n.url}),to:null,type:"unload",cancel:()=>f=!0};u.before_navigate.forEach($=>$(m)),f?(l.preventDefault(),l.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){be(j);try{sessionStorage[He]=JSON.stringify(ne)}catch{}}});const s=l=>{const{url:f,options:m}=Be(l);if(f&&m.prefetch){if(Ue(f))return;Pe(f)}};let c;const h=l=>{clearTimeout(c),c=setTimeout(()=>{var f;(f=l.target)==null||f.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",s),addEventListener("mousemove",h),addEventListener("sveltekit:trigger_prefetch",s),addEventListener("click",l=>{if(l.button||l.which!==1||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey||l.defaultPrevented)return;const{a:f,url:m,options:_}=Be(l);if(!f||!m)return;const k=f instanceof SVGAElement;if(!k&&!(m.protocol==="https:"||m.protocol==="http:"))return;const $=(f.getAttribute("rel")||"").split(/\s+/);if(f.hasAttribute("download")||$.includes("external")||_.reload||(k?f.target.baseVal:f.target))return;const[v,g]=m.href.split("#");if(g!==void 0&&v===location.href.split("#")[0]){W=!0,be(j),Q.page.set({...M,url:m}),Q.page.notify();return}me({url:m,scroll:_.noscroll?ke():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>l.preventDefault(),blocked:()=>l.preventDefault(),type:"link"})}),addEventListener("popstate",l=>{if(l.state){if(l.state[X]===j)return;const f=l.state[X]-j;me({url:new URL(location.href),scroll:ne[l.state[X]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=l.state[X]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{W&&(W=!1,history.replaceState({...history.state,[X]:++j},"",location.href))});for(const l of document.querySelectorAll("link"))l.rel==="icon"&&(l.href=l.href);addEventListener("pageshow",l=>{l.persisted&&Q.navigating.set(null)})},_hydrate:async({status:s,error:c,node_ids:h,params:l,routeId:f,data:m,form:_})=>{var v;const k=new URL(location.href);let $;try{const g=h.map(async(E,U)=>{const L=m[U];return de({loader:fe[E],url:k,params:l,routeId:f,parent:async()=>{const A={};for(let I=0;I<U;I+=1)Object.assign(A,(await g[I]).data);return A},server_data_node:pe(L)})});$=await ee({url:k,params:l,branch:await Promise.all(g),status:s,error:c!=null&&c.__is_http_error?new le(c.status,c.message):c,form:_,route:(v=se.find(E=>E.id===f))!=null?v:null})}catch(g){const E=g;if(E instanceof Je){await te(new URL(g.location,location.href));return}$=await ae({status:E instanceof le?E.status:500,error:E,url:k,routeId:f})}je($)}}}let qt=1;async function Ge(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+Vt,t.searchParams.set("__invalid",e.map(a=>a?"y":"n").join("")),t.searchParams.set("__id",String(qt++)),await H(()=>import(t.href),[],import.meta.url);const o=window.__sveltekit_data;return delete window.__sveltekit_data,o}const Bt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function oe(r,e){for(const t of Bt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)}});return e}function ie(){return()=>{}}async function Gt({env:r,hydrate:e,paths:t,target:o,trailing_slash:a}){lt(t);const u=Ct({target:o,base:t.base,trailing_slash:a});it({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{Gt as start};
