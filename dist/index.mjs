function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function l(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e,n,o){if(t){const r=c(t,e,n,o);return t[0](r)}}function c(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function u(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}function a(t){return null==t?"":t}const d="undefined"!=typeof window;let f=d?()=>window.performance.now():()=>Date.now(),h=d?t=>requestAnimationFrame(t):t;const g=new Set;function p(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),0!==g.size&&h(p)}function y(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function b(){return $(" ")}function _(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t,e){e=""+e,t.data!==e&&(t.data=e)}const E=new Set;let C,j=0;function A(t,e,n,o,r,l,i,s=0){const c=16.666/o;let u="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*l(t);u+=100*t+`%{${i(o,1-o)}}\n`}const a=u+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${s}`,f=t.ownerDocument;E.add(f);const h=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(x("style")).sheet),g=f.__svelte_rules||(f.__svelte_rules={});g[d]||(g[d]=!0,h.insertRule(`@keyframes ${d} ${a}`,h.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${d} ${o}ms linear ${r}ms 1 both`,j+=1,d}function D(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),j-=r,j||h(()=>{j||(E.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),E.clear())}))}function I(t){C=t}const z=[],S=[],N=[],O=[],R=Promise.resolve();let M=!1;function P(t){N.push(t)}let q=!1;const B=new Set;function L(){if(!q){q=!0;do{for(let t=0;t<z.length;t+=1){const e=z[t];I(e),F(e.$$)}for(z.length=0;S.length;)S.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];B.has(e)||(B.add(e),e())}N.length=0}while(z.length);for(;O.length;)O.pop()();M=!1,q=!1,B.clear()}}function F(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}let T;function G(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const H=new Set;let J;function K(t,e){t&&t.i&&(H.delete(t),t.i(e))}function Q(t,e,n,o){if(t&&t.o){if(H.has(t))return;H.add(t),J.c.push(()=>{H.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const U={duration:0};function V(n,o,i,s){let c=o(n,i),u=s?0:1,a=null,d=null,y=null;function m(){y&&D(n,y)}function v(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function x(o){const{delay:l=0,duration:i=300,easing:s=e,tick:x=t,css:$}=c||U,b={start:f()+l,b:o};o||(b.group=J,J.r+=1),a?d=b:($&&(m(),y=A(n,u,o,i,l,s,$)),o&&x(0,1),a=v(b,i),P(()=>G(n,o,"start")),function(t){let e;0===g.size&&h(p),new Promise(n=>{g.add(e={c:t,f:n})})}(t=>{if(d&&t>d.start&&(a=v(d,i),d=null,G(n,a.b,"start"),$&&(m(),y=A(n,u,a.b,a.duration,0,s,c.css))),a)if(t>=a.end)x(u=a.b,1-u),G(n,a.b,"end"),d||(a.b?m():--a.group.r||r(a.group.c)),a=null;else if(t>=a.start){const e=t-a.start;u=a.a+a.d*s(e/a.duration),x(u,1-u)}return!(!a&&!d)}))}return{run(t){l(c)?(T||(T=Promise.resolve(),T.then(()=>{T=null})),T).then(()=>{c=c(),x(t)}):x(t)},end(){m(),a=d=null}}}function W(t,e){-1===t.$$.dirty[0]&&(z.push(t),M||(M=!0,R.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,i,s,c,u,a,d=[-1]){const f=C;I(e);const h=i.props||{},g=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:d};let p=!1;if(g.ctx=s?s(e,h,(t,n,...o)=>{const r=o.length?o[0]:n;return g.ctx&&u(g.ctx[t],g.ctx[t]=r)&&(g.bound[t]&&g.bound[t](r),p&&W(e,t)),n}):[],g.update(),p=!0,r(g.before_update),g.fragment=!!c&&c(g.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);g.fragment&&g.fragment.l(t),t.forEach(v)}else g.fragment&&g.fragment.c();i.intro&&K(e.$$.fragment),function(t,e,o){const{fragment:i,on_mount:s,on_destroy:c,after_update:u}=t.$$;i&&i.m(e,o),P(()=>{const e=s.map(n).filter(l);c?c.push(...e):r(e),t.$$.on_mount=[]}),u.forEach(P)}(e,i.target,i.anchor),L()}I(f)}function Y(t,{delay:n=0,duration:o=400,easing:r=e}){const l=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>`opacity: ${t*l}`}}function Z(t){let e,n,o,l,i,d,f,h,g,p,E,C,j,A,D;const I=t[9].default,z=s(I,t,t[8],null);let S=t[3][0]&&tt(t);return{c(){e=x("div"),n=x("div"),o=x("div"),l=x("button"),l.textContent="×",i=b(),d=x("div"),z&&z.c(),f=b(),h=x("div"),g=x("p"),p=$(t[4]),E=b(),S&&S.c(),k(l,"class","svelte-kyis7x"),k(o,"class","svelte-lightbox-header svelte-kyis7x"),k(d,"class","svelte-lightbox-body svelte-kyis7x"),k(h,"class","svelte-lightbox-footer svelte-kyis7x"),k(n,"class","svelte-lightbox svelte-kyis7x"),k(e,"class",C=a(t[0])+" svelte-kyis7x"),k(e,"style",t[1])},m(s,c,u){m(s,e,c),y(e,n),y(n,o),y(o,l),y(n,i),y(n,d),z&&z.m(d,null),y(n,f),y(n,h),y(h,g),y(g,p),y(h,E),S&&S.m(h,null),A=!0,u&&r(D),D=[_(l,"click",t[7]),_(e,"click",t[7])]},p(t,n){z&&z.p&&256&n&&z.p(c(I,t,t[8],null),u(I,t[8],n,null)),(!A||16&n)&&w(p,t[4]),t[3][0]?S?S.p(t,n):(S=tt(t),S.c(),S.m(h,null)):S&&(S.d(1),S=null),(!A||1&n&&C!==(C=a(t[0])+" svelte-kyis7x"))&&k(e,"class",C),(!A||2&n)&&k(e,"style",t[1])},i(n){A||(K(z,n),P(()=>{j||(j=V(e,Y,{duration:t[5]},!0)),j.run(1)}),A=!0)},o(n){Q(z,n),j||(j=V(e,Y,{duration:t[5]},!1)),j.run(0),A=!1},d(t){t&&v(e),z&&z.d(t),S&&S.d(),t&&j&&j.end(),r(D)}}}function tt(t){let e,n,o,r,l,i=t[2]+1+"",s=t[3].length-1+"";return{c(){e=x("p"),n=$("Image "),o=$(i),r=$(" of "),l=$(s)},m(t,i){m(t,e,i),y(e,n),y(e,o),y(e,r),y(e,l)},p(t,e){4&e&&i!==(i=t[2]+1+"")&&w(o,i),8&e&&s!==(s=t[3].length-1+"")&&w(l,s)},d(t){t&&v(e)}}}function et(t){let e,n,o,l,i;const a=t[9].default,d=s(a,t,t[8],null);let f=t[6]&&Z(t);return{c(){e=x("div"),d&&d.c(),n=b(),f&&f.c(),o=$("")},m(r,s,c){m(r,e,s),d&&d.m(e,null),m(r,n,s),f&&f.m(r,s),m(r,o,s),l=!0,c&&i(),i=_(e,"click",t[7])},p(t,[e]){d&&d.p&&256&e&&d.p(c(a,t,t[8],null),u(a,t[8],e,null)),t[6]?f?(f.p(t,e),K(f,1)):(f=Z(t),f.c(),K(f,1),f.m(o.parentNode,o)):f&&(J={r:0,c:[],p:J},Q(f,1,1,()=>{f=null}),J.r||r(J.c),J=J.p)},i(t){l||(K(d,t),K(f),l=!0)},o(t){Q(d,t),Q(f),l=!1},d(t){t&&v(e),d&&d.d(t),t&&v(n),f&&f.d(t),t&&v(o),i()}}}function nt(t,e,n){let{class:o=""}=e,{style:r=""}=e,{activeImage:l=0}=e,{gallery:i=[]}=e,{description:s=""}=e,{transitionDuration:c=500}=e,u=!1;o=`${o} svelte-lightbox-overlay`;let{$$slots:a={},$$scope:d}=e;return t.$set=t=>{"class"in t&&n(0,o=t.class),"style"in t&&n(1,r=t.style),"activeImage"in t&&n(2,l=t.activeImage),"gallery"in t&&n(3,i=t.gallery),"description"in t&&n(4,s=t.description),"transitionDuration"in t&&n(5,c=t.transitionDuration),"$$scope"in t&&n(8,d=t.$$scope)},[o,r,l,i,s,c,u,()=>{n(6,u=!u)},d,a]}class ot extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){var e;super(),document.getElementById("svelte-kyis7x-style")||((e=x("style")).id="svelte-kyis7x-style",e.textContent=".svelte-lightbox-overlay.svelte-kyis7x{position:fixed;z-index:100000000;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center;background-color:rgba(44,38,45,0.85);padding:1rem}.svelte-lightbox.svelte-kyis7x{z-index:100000001;background-color:transparent;width:auto;height:auto}.svelte-lightbox-header.svelte-kyis7x{width:inherit;height:auto;display:flex;justify-content:flex-end;align-items:center}.svelte-lightbox-body.svelte-kyis7x{background-color:transparent;width:auto;height:auto}.svelte-lightbox-footer.svelte-kyis7x{background-color:transparent;width:inherit;height:auto}button.svelte-kyis7x{background:transparent;font-size:4rem;border:none;color:white}button.svelte-kyis7x:hover{color:lightgray}",y(document.head,e)),X(this,t,nt,et,i,{class:0,style:1,activeImage:2,gallery:3,description:4,transitionDuration:5})}}export{ot as Lightbox};
