import{S as H,i as z,s as M,k as w,a as L,v as A,l as E,m as q,h as g,c as C,w as R,n as v,D as j,b as I,B as b,x as U,E as S,f as B,t as N,P as F,y as D,I as ee,j as te,q as V,r as W,u as G,K,o as ne,C as Z,F as $,G as y,H as x,L as le,Q as se,R as ae}from"../../../chunks/index-2e8868cc.js";import{I as oe}from"../../../chunks/Icon-7cc5842d.js";/* empty css                                                         */import{g as ie,p as re}from"../../../chunks/stores-7bab1bbb.js";/* empty css                                                         */function O(a,e,t){const n=a.slice();return n[10]=e[t],n}function P(a,e,t){const n=a.slice();return n[13]=e[t],n}function Q(a,e,t){const n=a.slice();return n[13]=e[t],n}function J(a){let e,t,n=a[13].title+"",o,i,_;return{c(){e=w("li"),t=w("a"),o=V(n),_=L(),this.h()},l(c){e=E(c,"LI",{class:!0});var f=q(e);t=E(f,"A",{class:!0,href:!0});var u=q(t);o=W(u,n),u.forEach(g),_=C(f),f.forEach(g),this.h()},h(){v(t,"class","nested subsection svelte-1jnw08q"),v(t,"href",i=a[13].path),j(t,"active",a[13].path===a[2]),v(e,"class","svelte-1jnw08q")},m(c,f){I(c,e,f),b(e,t),b(t,o),b(e,_)},p(c,f){f&2&&n!==(n=c[13].title+"")&&G(o,n),f&2&&i!==(i=c[13].path)&&v(t,"href",i),f&6&&j(t,"active",c[13].path===c[2])},d(c){c&&g(e)}}}function X(a){let e,t,n=a[13].title+"",o,i,_,c,f,u=a[13].sections,h=[];for(let l=0;l<u.length;l+=1)h[l]=J(Q(a,u,l));return{c(){e=w("li"),t=w("a"),o=V(n),_=L(),c=w("ul");for(let l=0;l<h.length;l+=1)h[l].c();f=L(),this.h()},l(l){e=E(l,"LI",{class:!0});var r=q(e);t=E(r,"A",{class:!0,href:!0});var s=q(t);o=W(s,n),s.forEach(g),_=C(r),c=E(r,"UL",{class:!0});var d=q(c);for(let m=0;m<h.length;m+=1)h[m].l(d);d.forEach(g),f=C(r),r.forEach(g),this.h()},h(){v(t,"class","subsection svelte-1jnw08q"),v(t,"href",i=a[13].path),j(t,"active",a[13].path===a[2]),v(c,"class","svelte-1jnw08q"),v(e,"class","svelte-1jnw08q")},m(l,r){I(l,e,r),b(e,t),b(t,o),b(e,_),b(e,c);for(let s=0;s<h.length;s+=1)h[s].m(c,null);b(e,f)},p(l,r){if(r&2&&n!==(n=l[13].title+"")&&G(o,n),r&2&&i!==(i=l[13].path)&&v(t,"href",i),r&6&&j(t,"active",l[13].path===l[2]),r&6){u=l[13].sections;let s;for(s=0;s<u.length;s+=1){const d=Q(l,u,s);h[s]?h[s].p(d,r):(h[s]=J(d),h[s].c(),h[s].m(c,null))}for(;s<h.length;s+=1)h[s].d(1);h.length=u.length}},d(l){l&&g(e),F(h,l)}}}function Y(a){let e,t,n=a[10].title+"",o,i,_,c,f,u=a[10].sections,h=[];for(let l=0;l<u.length;l+=1)h[l]=X(P(a,u,l));return{c(){e=w("li"),t=w("a"),o=V(n),_=L(),c=w("ul");for(let l=0;l<h.length;l+=1)h[l].c();f=L(),this.h()},l(l){e=E(l,"LI",{class:!0});var r=q(e);t=E(r,"A",{class:!0,href:!0});var s=q(t);o=W(s,n),s.forEach(g),_=C(r),c=E(r,"UL",{class:!0});var d=q(c);for(let m=0;m<h.length;m+=1)h[m].l(d);d.forEach(g),f=C(r),r.forEach(g),this.h()},h(){v(t,"class","section svelte-1jnw08q"),v(t,"href",i=a[10].path),j(t,"active",a[10].path===a[2]),v(c,"class","svelte-1jnw08q"),v(e,"class","svelte-1jnw08q")},m(l,r){I(l,e,r),b(e,t),b(t,o),b(e,_),b(e,c);for(let s=0;s<h.length;s+=1)h[s].m(c,null);b(e,f)},p(l,r){if(r&2&&n!==(n=l[10].title+"")&&G(o,n),r&2&&i!==(i=l[10].path)&&v(t,"href",i),r&6&&j(t,"active",l[10].path===l[2]),r&6){u=l[10].sections;let s;for(s=0;s<u.length;s+=1){const d=P(l,u,s);h[s]?h[s].p(d,r):(h[s]=X(d),h[s].c(),h[s].m(c,null))}for(;s<h.length;s+=1)h[s].d(1);h.length=u.length}},d(l){l&&g(e),F(h,l)}}}function ce(a){let e,t,n,o,i,_,c,f,u,h=a[1],l=[];for(let r=0;r<h.length;r+=1)l[r]=Y(O(a,h,r));return _=new oe({props:{name:a[3]?"close":"menu"}}),{c(){e=w("aside"),t=w("div"),n=w("ul");for(let r=0;r<l.length;r+=1)l[r].c();o=L(),i=w("button"),A(_.$$.fragment),this.h()},l(r){e=E(r,"ASIDE",{class:!0});var s=q(e);t=E(s,"DIV",{class:!0});var d=q(t);n=E(d,"UL",{class:!0});var m=q(n);for(let k=0;k<l.length;k+=1)l[k].l(m);m.forEach(g),d.forEach(g),o=C(s),i=E(s,"BUTTON",{class:!0});var p=q(i);R(_.$$.fragment,p),p.forEach(g),s.forEach(g),this.h()},h(){v(n,"class","reference-toc svelte-1jnw08q"),v(t,"class","sidebar svelte-1jnw08q"),v(i,"class","svelte-1jnw08q"),v(e,"class","sidebar-container svelte-1jnw08q"),j(e,"open",a[3])},m(r,s){I(r,e,s),b(e,t),b(t,n);for(let d=0;d<l.length;d+=1)l[d].m(n,null);a[5](n),b(e,o),b(e,i),U(_,i,null),c=!0,f||(u=[S(n,"mouseenter",a[6]),S(n,"mouseleave",a[7]),S(t,"click",a[8]),S(i,"click",a[9])],f=!0)},p(r,[s]){if(s&6){h=r[1];let m;for(m=0;m<h.length;m+=1){const p=O(r,h,m);l[m]?l[m].p(p,s):(l[m]=Y(p),l[m].c(),l[m].m(n,null))}for(;m<l.length;m+=1)l[m].d(1);l.length=h.length}const d={};s&8&&(d.name=r[3]?"close":"menu"),_.$set(d),s&8&&j(e,"open",r[3])},i(r){c||(B(_.$$.fragment,r),c=!0)},o(r){N(_.$$.fragment,r),c=!1},d(r){r&&g(e),F(l,r),a[5](null),D(_),f=!1,ee(u)}}}function ue(a,e,t){let{contents:n=[]}=e,{path:o=null}=e,{prevent_sidebar_scroll:i=!1}=e,_=!1,c;te(()=>{if(i||_&&window.innerWidth<832)return;const s=c.querySelector(".active");if(s){const{top:d,bottom:m}=s.getBoundingClientRect(),p=200,k=window.innerHeight-200;d>k?c.parentNode.scrollBy({top:d-k,left:0}):m<p&&c.parentNode.scrollBy({top:m-p,left:0})}});function f(s){K[s?"unshift":"push"](()=>{c=s,t(4,c)})}const u=()=>t(0,i=!0),h=()=>t(0,i=!1),l=()=>t(3,_=!1),r=()=>t(3,_=!_);return a.$$set=s=>{"contents"in s&&t(1,n=s.contents),"path"in s&&t(2,o=s.path),"prevent_sidebar_scroll"in s&&t(0,i=s.prevent_sidebar_scroll)},[i,n,o,_,c,f,u,h,l,r]}class fe extends H{constructor(e){super(),z(this,e,ue,ce,M,{contents:1,path:2,prevent_sidebar_scroll:0})}}const he=()=>window.location.hash.slice(1);function _e(a){let e=!1,t=null;const n=ie().page.subscribe(()=>{t&&t(),e&&(t=a())});ne(()=>(e=!0,t=a(),()=>{n(),t&&t(),e=!1}))}function me(a){let e,t;const n=a[3].default,o=Z(n,a,a[2],null);return{c(){e=w("div"),o&&o.c(),this.h()},l(i){e=E(i,"DIV",{class:!0});var _=q(e);o&&o.l(_),_.forEach(g),this.h()},h(){v(e,"class","content listify svelte-e9ixe")},m(i,_){I(i,e,_),o&&o.m(e,null),a[4](e),t=!0},p(i,[_]){o&&o.p&&(!t||_&4)&&$(o,n,i,i[2],t?x(n,i[2],_,null):y(i[2]),null)},i(i){t||(B(o,i),t=!0)},o(i){N(o,i),t=!1},d(i){i&&g(e),o&&o.d(i),a[4](null)}}}function de(a,e,t){let n;le(a,re,u=>t(5,n=u));let{$$slots:o={},$$scope:i}=e,{path:_}=e,c;_e(()=>{const u=c.querySelectorAll("[id]:not([data-scrollignore])");for(const m of u)if(m.nodeName.startsWith("H")&&!m.querySelector("a.anchor")){const p=document.createElement("a");p.className="anchor",p.href=`${n.url.pathname}#${m.id}`;const k=document.createElement("span");k.className="visually-hidden",k.innerHTML="permalink",p.appendChild(k),m.appendChild(p)}let h;const l=()=>{const{top:m}=c.getBoundingClientRect();h=[].map.call(u,p=>p.getBoundingClientRect().top-m)};let r=he();const s=()=>{const{top:m}=c.getBoundingClientRect();let p=u.length;for(;p--;)if(h[p]+m<40){const k=u[p],{id:T}=k;T!==r&&(t(1,_=`${n.url.pathname}#${T}`),r=T);return}t(1,_=n.url.pathname)};window.addEventListener("scroll",s,!0),window.addEventListener("resize",l,!0);const d=[setTimeout(l,1e3),setTimeout(s,5e3)];return l(),s(),()=>{window.removeEventListener("scroll",s,!0),window.removeEventListener("resize",l,!0),d.forEach(m=>clearTimeout(m))}});function f(u){K[u?"unshift":"push"](()=>{c=u,t(0,c)})}return a.$$set=u=>{"path"in u&&t(1,_=u.path),"$$scope"in u&&t(2,i=u.$$scope)},[c,_,i,o,f]}class pe extends H{constructor(e){super(),z(this,e,de,me,M,{path:1})}}function ge(a){let e;const t=a[3].default,n=Z(t,a,a[5],null);return{c(){n&&n.c()},l(o){n&&n.l(o)},m(o,i){n&&n.m(o,i),e=!0},p(o,i){n&&n.p&&(!e||i&32)&&$(n,t,o,o[5],e?x(t,o[5],i,null):y(o[5]),null)},i(o){e||(B(n,o),e=!0)},o(o){N(n,o),e=!1},d(o){n&&n.d(o)}}}function ve(a){let e,t,n,o,i;function _(f){a[4](f)}let c={$$slots:{default:[ge]},$$scope:{ctx:a}};return a[0]!==void 0&&(c.path=a[0]),e=new pe({props:c}),K.push(()=>se(e,"path",_)),o=new fe({props:{contents:a[1],path:a[0]}}),{c(){A(e.$$.fragment),n=L(),A(o.$$.fragment)},l(f){R(e.$$.fragment,f),n=C(f),R(o.$$.fragment,f)},m(f,u){U(e,f,u),I(f,n,u),U(o,f,u),i=!0},p(f,[u]){const h={};u&32&&(h.$$scope={dirty:u,ctx:f}),!t&&u&1&&(t=!0,h.path=f[0],ae(()=>t=!1)),e.$set(h);const l={};u&1&&(l.path=f[0]),o.$set(l)},i(f){i||(B(e.$$.fragment,f),B(o.$$.fragment,f),i=!0)},o(f){N(e.$$.fragment,f),N(o.$$.fragment,f),i=!1},d(f){D(e,f),f&&g(n),D(o,f)}}}function be(a,e,t){let{$$slots:n={},$$scope:o}=e,{data:i}=e;const _=i.sections;let c=null;function f(u){c=u,t(0,c)}return a.$$set=u=>{"data"in u&&t(2,i=u.data),"$$scope"in u&&t(5,o=u.$$scope)},[c,_,i,n,f,o]}class Le extends H{constructor(e){super(),z(this,e,be,ve,M,{data:2})}}export{Le as default};
