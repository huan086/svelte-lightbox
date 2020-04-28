function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function l(t){t.forEach(n)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,o){if(t){const l=c(t,e,n,o);return t[0](l)}}function c(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function a(t,e,n,o){if(t[2]&&o){const l=t[2](o(n));if(void 0===e.dirty)return l;if("object"==typeof l){const t=[],n=Math.max(e.dirty.length,l.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|l[o];return t}return e.dirty|l}return e.dirty}function u(t){return null==t?"":t}const d="undefined"!=typeof window;let f=d?()=>window.performance.now():()=>Date.now(),m=d?t=>requestAnimationFrame(t):t;const h=new Set;function g(t){h.forEach(e=>{e.c(t)||(h.delete(e),e.f())}),0!==h.size&&m(g)}function p(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function x(){return $(" ")}function k(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t,e){e=""+e,t.data!==e&&(t.data=e)}function E(t,e,n){t.classList[n?"add":"remove"](e)}const C=new Set;let S,z=0;function j(t,e,n,o,l,s,r,i=0){const c=16.666/o;let a="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*s(t);a+=100*t+`%{${r(o,1-o)}}\n`}const u=a+`100% {${r(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,f=t.ownerDocument;C.add(f);const m=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(b("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${d} ${o}ms linear ${l}ms 1 both`,z+=1,d}function A(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),l=n.length-o.length;l&&(t.style.animation=o.join(", "),z-=l,z||m(()=>{z||(C.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),C.clear())}))}function D(t){S=t}function I(t){(function(){if(!S)throw new Error("Function called outside component initialization");return S})().$$.on_mount.push(t)}const N=[],O=[],R=[],L=[],M=Promise.resolve();let P=!1;function q(t){R.push(t)}let B=!1;const F=new Set;function T(){if(!B){B=!0;do{for(let t=0;t<N.length;t+=1){const e=N[t];D(e),G(e.$$)}for(N.length=0;O.length;)O.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];F.has(e)||(F.add(e),e())}R.length=0}while(N.length);for(;L.length;)L.pop()();P=!1,B=!1,F.clear()}}function G(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}let H;function J(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const K=new Set;let Q;function U(){Q={r:0,c:[],p:Q}}function V(){Q.r||l(Q.c),Q=Q.p}function W(t,e){t&&t.i&&(K.delete(t),t.i(e))}function X(t,e,n,o){if(t&&t.o){if(K.has(t))return;K.add(t),Q.c.push(()=>{K.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const Y={duration:0};function Z(n,o,r,i){let c=o(n,r),a=i?0:1,u=null,d=null,p=null;function v(){p&&A(n,p)}function y(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function b(o){const{delay:s=0,duration:r=300,easing:i=e,tick:b=t,css:$}=c||Y,x={start:f()+s,b:o};o||(x.group=Q,Q.r+=1),u?d=x:($&&(v(),p=j(n,a,o,r,s,i,$)),o&&b(0,1),u=y(x,r),q(()=>J(n,o,"start")),function(t){let e;0===h.size&&m(g),new Promise(n=>{h.add(e={c:t,f:n})})}(t=>{if(d&&t>d.start&&(u=y(d,r),d=null,J(n,u.b,"start"),$&&(v(),p=j(n,a,u.b,u.duration,0,i,c.css))),u)if(t>=u.end)b(a=u.b,1-a),J(n,u.b,"end"),d||(u.b?v():--u.group.r||l(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;a=u.a+u.d*i(e/u.duration),b(a,1-a)}return!(!u&&!d)}))}return{run(t){s(c)?(H||(H=Promise.resolve(),H.then(()=>{H=null})),H).then(()=>{c=c(),b(t)}):b(t)},end(){v(),u=d=null}}}const tt="undefined"!=typeof window?window:global;function et(t,e){-1===t.$$.dirty[0]&&(N.push(t),P||(P=!0,M.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(e,r,i,c,a,u,d=[-1]){const f=S;D(e);const m=r.props||{},h=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:d};let g=!1;if(h.ctx=i?i(e,m,(t,n,...o)=>{const l=o.length?o[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=l)&&(h.bound[t]&&h.bound[t](l),g&&et(e,t)),n}):[],h.update(),g=!0,l(h.before_update),h.fragment=!!c&&c(h.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(y)}else h.fragment&&h.fragment.c();r.intro&&W(e.$$.fragment),function(t,e,o){const{fragment:r,on_mount:i,on_destroy:c,after_update:a}=t.$$;r&&r.m(e,o),q(()=>{const e=i.map(n).filter(s);c?c.push(...e):l(e),t.$$.on_mount=[]}),a.forEach(q)}(e,r.target,r.anchor),T()}D(f)}function ot(t,{delay:n=0,duration:o=400,easing:l=e}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:l,css:t=>`opacity: ${t*s}`}}const{document:lt}=tt;function st(t){let e,n,o,s,r,i,c,a,d,f,m,h,g,C,S,z,j,A;const D=[it,rt],I=[];function N(t,e){return t[7].src?0:1}a=N(t),d=I[a]=D[a](t);let O=t[3][0]&&ct(t);return{c(){e=b("div"),n=b("div"),o=b("div"),s=b("div"),r=b("button"),r.textContent="×",i=x(),c=b("div"),d.c(),f=x(),m=b("div"),h=b("h3"),g=$(t[4]),C=x(),O&&O.c(),_(r,"class","svelte-moko4s"),_(s,"class","svelte-lightbox-header svelte-moko4s"),_(c,"class","svelte-lightbox-body svelte-moko4s"),E(c,"svelte-lightbox-unselectable",t[6]),_(h,"class","svelte-moko4s"),_(m,"class","svelte-lightbox-footer svelte-moko4s"),_(o,"class","svelte-lightbox svelte-moko4s"),_(n,"class",S=u(t[0])+" svelte-moko4s"),_(n,"style",t[1]),_(e,"class","cover clearfix svelte-moko4s")},m(u,d,y){v(u,e,d),p(e,n),p(n,o),p(o,s),p(s,r),p(o,i),p(o,c),I[a].m(c,null),p(o,f),p(o,m),p(m,h),p(h,g),p(m,C),O&&O.m(m,null),j=!0,y&&l(A),A=[k(r,"click",t[10]),k(o,"click",t[10]),k(n,"click",t[10])]},p(t,e){let o=a;a=N(t),a===o?I[a].p(t,e):(U(),X(I[o],1,1,()=>{I[o]=null}),V(),d=I[a],d||(d=I[a]=D[a](t),d.c()),W(d,1),d.m(c,null)),64&e&&E(c,"svelte-lightbox-unselectable",t[6]),(!j||16&e)&&w(g,t[4]),t[3][0]?O?O.p(t,e):(O=ct(t),O.c(),O.m(m,null)):O&&(O.d(1),O=null),(!j||1&e&&S!==(S=u(t[0])+" svelte-moko4s"))&&_(n,"class",S),(!j||2&e)&&_(n,"style",t[1])},i(e){j||(W(d),q(()=>{z||(z=Z(n,ot,{duration:t[5]},!0)),z.run(1)}),j=!0)},o(e){X(d),z||(z=Z(n,ot,{duration:t[5]},!1)),z.run(0),j=!1},d(t){t&&y(e),I[a].d(),O&&O.d(),t&&z&&z.end(),l(A)}}}function rt(t){let e,n;const o=t[14].default,l=i(o,t,t[13],null);return{c(){e=b("div"),l&&l.c(),_(e,"class","svelte-moko4s"),E(e,"svelte-lightbox-image-portrait",t[8])},m(t,o){v(t,e,o),l&&l.m(e,null),n=!0},p(t,n){l&&l.p&&8192&n&&l.p(c(o,t,t[13],null),a(o,t[13],n,null)),256&n&&E(e,"svelte-lightbox-image-portrait",t[8])},i(t){n||(W(l,t),n=!0)},o(t){X(l,t),n=!1},d(t){t&&y(e),l&&l.d(t)}}}function it(e){let n,o,l,s,r;return{c(){n=b("img"),n.src!==(o=e[7].src)&&_(n,"src",o),_(n,"alt",l=e[7].alt),_(n,"style",s=e[7].style),_(n,"class",r=u(e[7].class)+" svelte-moko4s")},m(t,e){v(t,n,e)},p(t,e){128&e&&n.src!==(o=t[7].src)&&_(n,"src",o),128&e&&l!==(l=t[7].alt)&&_(n,"alt",l),128&e&&s!==(s=t[7].style)&&_(n,"style",s),128&e&&r!==(r=u(t[7].class)+" svelte-moko4s")&&_(n,"class",r)},i:t,o:t,d(t){t&&y(n)}}}function ct(t){let e,n,o,l,s,r=t[2]+1+"",i=t[3].length-1+"";return{c(){e=b("p"),n=$("Image "),o=$(r),l=$(" of "),s=$(i)},m(t,r){v(t,e,r),p(e,n),p(e,o),p(e,l),p(e,s)},p(t,e){4&e&&r!==(r=t[2]+1+"")&&w(o,r),8&e&&i!==(i=t[3].length-1+"")&&w(s,i)},d(t){t&&y(e)}}}function at(t){let e,n,o,l,s,r;const u=t[14].default,d=i(u,t,t[13],null);let f=t[9]&&st(t);return{c(){e=b("div"),n=b("div"),d&&d.c(),o=x(),f&&f.c(),l=$(""),_(n,"class","svelte-moko4s"),E(n,"svelte-lightbox-unselectable",t[6]),_(e,"class","clickable svelte-moko4s")},m(i,c,a){v(i,e,c),p(e,n),d&&d.m(n,null),v(i,o,c),f&&f.m(i,c),v(i,l,c),s=!0,a&&r(),r=k(e,"click",t[10])},p(t,[e]){d&&d.p&&8192&e&&d.p(c(u,t,t[13],null),a(u,t[13],e,null)),64&e&&E(n,"svelte-lightbox-unselectable",t[6]),t[9]?f?(f.p(t,e),W(f,1)):(f=st(t),f.c(),W(f,1),f.m(l.parentNode,l)):f&&(U(),X(f,1,1,()=>{f=null}),V())},i(t){s||(W(d,t),W(f),s=!0)},o(t){X(d,t),X(f),s=!1},d(t){t&&y(e),d&&d.d(t),t&&y(o),f&&f.d(t),t&&y(l),r()}}}function ut(t,e,n){let{class:o=""}=e,{style:l=""}=e,{activeImage:s=0}=e,{gallery:r=[]}=e,{description:i=""}=e,{transitionDuration:c=500}=e,{protect:a=!1}=e,{image:u={}}=e,{portrait:d=!1}=e,{noScroll:f=!0}=e,m=!1;let h=()=>{};o=`${o} svelte-lightbox-overlay clearfix`,I(()=>{let t=document.body.style;h=()=>{document.body.style=m?"overflow: hidden":t}});let{$$slots:g={},$$scope:p}=e;return t.$set=t=>{"class"in t&&n(0,o=t.class),"style"in t&&n(1,l=t.style),"activeImage"in t&&n(2,s=t.activeImage),"gallery"in t&&n(3,r=t.gallery),"description"in t&&n(4,i=t.description),"transitionDuration"in t&&n(5,c=t.transitionDuration),"protect"in t&&n(6,a=t.protect),"image"in t&&n(7,u=t.image),"portrait"in t&&n(8,d=t.portrait),"noScroll"in t&&n(11,f=t.noScroll),"$$scope"in t&&n(13,p=t.$$scope)},[o,l,s,r,i,c,a,u,d,m,()=>{n(9,m=!m),f&&h()},f,h,p,g]}class dt extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){var e;super(),lt.getElementById("svelte-moko4s-style")||((e=b("style")).id="svelte-moko4s-style",e.textContent='.cover.svelte-moko4s{position:fixed;z-index:1000000;top:0;bottom:0;left:0;right:0;overflow:hidden;width:100%;height:100%}.clickable.svelte-moko4s{position:static;cursor:zoom-in}.svelte-lightbox-overlay.svelte-moko4s{position:relative;z-index:1000001;height:100%;width:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(43, 39, 45, 0.87);padding:1rem}.svelte-lightbox.svelte-moko4s{position:absolute;background-color:transparent;width:auto;height:auto;z-index:1000002}.svelte-lightbox-header.svelte-moko4s{width:inherit;height:auto;display:flex;justify-content:flex-end;align-items:center}.svelte-lightbox-body.svelte-moko4s{background-color:transparent;width:auto;height:auto;max-height:80vh}.svelte-lightbox-image-portrait.svelte-moko4s{max-width:90vh}.svelte-lightbox-footer.svelte-moko4s{background-color:transparent;width:inherit;height:auto}.svelte-lightbox-unselectable.svelte-moko4s{user-select:none;pointer-events:none}h3.svelte-moko4s{color:white}button.svelte-moko4s{background:transparent;font-size:4rem;border:none;color:white}button.svelte-moko4s:hover{color:lightgray}.clearfix.svelte-moko4s::after{content:"";clear:both;display:table}',p(lt.head,e)),nt(this,t,ut,at,r,{class:0,style:1,activeImage:2,gallery:3,description:4,transitionDuration:5,protect:6,image:7,portrait:8,noScroll:11})}}export{dt as Lightbox};
