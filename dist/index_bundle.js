(()=>{var t,e,n,a,r={739:function(t,e,n){var a;!function(r){"use strict";function c(t,e){var n=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(n>>16)<<16|65535&n}function o(t,e,n,a,r,o){return c((i=c(c(e,t),c(a,o)))<<(s=r)|i>>>32-s,n);var i,s}function i(t,e,n,a,r,c,i){return o(e&n|~e&a,t,e,r,c,i)}function s(t,e,n,a,r,c,i){return o(e&a|n&~a,t,e,r,c,i)}function l(t,e,n,a,r,c,i){return o(e^n^a,t,e,r,c,i)}function d(t,e,n,a,r,c,i){return o(n^(e|~a),t,e,r,c,i)}function u(t,e){var n,a,r,o,u;t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;var m=1732584193,p=-271733879,b=-1732584194,h=271733878;for(n=0;n<t.length;n+=16)a=m,r=p,o=b,u=h,m=i(m,p,b,h,t[n],7,-680876936),h=i(h,m,p,b,t[n+1],12,-389564586),b=i(b,h,m,p,t[n+2],17,606105819),p=i(p,b,h,m,t[n+3],22,-1044525330),m=i(m,p,b,h,t[n+4],7,-176418897),h=i(h,m,p,b,t[n+5],12,1200080426),b=i(b,h,m,p,t[n+6],17,-1473231341),p=i(p,b,h,m,t[n+7],22,-45705983),m=i(m,p,b,h,t[n+8],7,1770035416),h=i(h,m,p,b,t[n+9],12,-1958414417),b=i(b,h,m,p,t[n+10],17,-42063),p=i(p,b,h,m,t[n+11],22,-1990404162),m=i(m,p,b,h,t[n+12],7,1804603682),h=i(h,m,p,b,t[n+13],12,-40341101),b=i(b,h,m,p,t[n+14],17,-1502002290),m=s(m,p=i(p,b,h,m,t[n+15],22,1236535329),b,h,t[n+1],5,-165796510),h=s(h,m,p,b,t[n+6],9,-1069501632),b=s(b,h,m,p,t[n+11],14,643717713),p=s(p,b,h,m,t[n],20,-373897302),m=s(m,p,b,h,t[n+5],5,-701558691),h=s(h,m,p,b,t[n+10],9,38016083),b=s(b,h,m,p,t[n+15],14,-660478335),p=s(p,b,h,m,t[n+4],20,-405537848),m=s(m,p,b,h,t[n+9],5,568446438),h=s(h,m,p,b,t[n+14],9,-1019803690),b=s(b,h,m,p,t[n+3],14,-187363961),p=s(p,b,h,m,t[n+8],20,1163531501),m=s(m,p,b,h,t[n+13],5,-1444681467),h=s(h,m,p,b,t[n+2],9,-51403784),b=s(b,h,m,p,t[n+7],14,1735328473),m=l(m,p=s(p,b,h,m,t[n+12],20,-1926607734),b,h,t[n+5],4,-378558),h=l(h,m,p,b,t[n+8],11,-2022574463),b=l(b,h,m,p,t[n+11],16,1839030562),p=l(p,b,h,m,t[n+14],23,-35309556),m=l(m,p,b,h,t[n+1],4,-1530992060),h=l(h,m,p,b,t[n+4],11,1272893353),b=l(b,h,m,p,t[n+7],16,-155497632),p=l(p,b,h,m,t[n+10],23,-1094730640),m=l(m,p,b,h,t[n+13],4,681279174),h=l(h,m,p,b,t[n],11,-358537222),b=l(b,h,m,p,t[n+3],16,-722521979),p=l(p,b,h,m,t[n+6],23,76029189),m=l(m,p,b,h,t[n+9],4,-640364487),h=l(h,m,p,b,t[n+12],11,-421815835),b=l(b,h,m,p,t[n+15],16,530742520),m=d(m,p=l(p,b,h,m,t[n+2],23,-995338651),b,h,t[n],6,-198630844),h=d(h,m,p,b,t[n+7],10,1126891415),b=d(b,h,m,p,t[n+14],15,-1416354905),p=d(p,b,h,m,t[n+5],21,-57434055),m=d(m,p,b,h,t[n+12],6,1700485571),h=d(h,m,p,b,t[n+3],10,-1894986606),b=d(b,h,m,p,t[n+10],15,-1051523),p=d(p,b,h,m,t[n+1],21,-2054922799),m=d(m,p,b,h,t[n+8],6,1873313359),h=d(h,m,p,b,t[n+15],10,-30611744),b=d(b,h,m,p,t[n+6],15,-1560198380),p=d(p,b,h,m,t[n+13],21,1309151649),m=d(m,p,b,h,t[n+4],6,-145523070),h=d(h,m,p,b,t[n+11],10,-1120210379),b=d(b,h,m,p,t[n+2],15,718787259),p=d(p,b,h,m,t[n+9],21,-343485551),m=c(m,a),p=c(p,r),b=c(b,o),h=c(h,u);return[m,p,b,h]}function m(t){var e,n="",a=32*t.length;for(e=0;e<a;e+=8)n+=String.fromCharCode(t[e>>5]>>>e%32&255);return n}function p(t){var e,n=[];for(n[(t.length>>2)-1]=void 0,e=0;e<n.length;e+=1)n[e]=0;var a=8*t.length;for(e=0;e<a;e+=8)n[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return n}function b(t){var e,n,a="0123456789abcdef",r="";for(n=0;n<t.length;n+=1)e=t.charCodeAt(n),r+=a.charAt(e>>>4&15)+a.charAt(15&e);return r}function h(t){return unescape(encodeURIComponent(t))}function f(t){return function(t){return m(u(p(t),8*t.length))}(h(t))}function y(t,e){return function(t,e){var n,a,r=p(t),c=[],o=[];for(c[15]=o[15]=void 0,r.length>16&&(r=u(r,8*t.length)),n=0;n<16;n+=1)c[n]=909522486^r[n],o[n]=1549556828^r[n];return a=u(c.concat(p(e)),512+8*e.length),m(u(o.concat(a),640))}(h(t),h(e))}function g(t,e,n){return e?n?y(e,t):b(y(e,t)):n?f(t):b(f(t))}void 0===(a=function(){return g}.call(e,n,e,t))||(t.exports=a)}()},96:(t,e,n)=>{"use strict";n.a(t,(async(t,e)=>{try{var a=n(919),r=n(833),c=(n(656),t([a,r]));[a,r]=c.then?(await c)():c,(0,a.H)(),(0,r.J)(),e()}catch(t){e(t)}}))},583:(t,e,n)=>{"use strict";n.a(t,(async(t,a)=>{try{n.d(e,{AB:()=>o,Hk:()=>m,U$:()=>t,kk:()=>d,uW:()=>c});var r=n(138);const t=document.querySelector(".cards"),c=document.querySelectorAll(".filter-item"),o=50,i=async()=>{const t=await(0,r.ww)();return await t.result},s=await i(),l=s.length,d=Math.ceil(l/o),u=s.filter((t=>null!=t)),m=new Set(u);a()}catch(t){a(t)}}),1)},833:(t,e,n)=>{"use strict";n.a(t,(async(t,a)=>{try{n.d(e,{J:()=>o});var r=n(583),c=t([r]);r=(c.then?(await c)():c)[0];const o=()=>{const t=document.querySelector(".filter-item_brand");r.Hk.forEach((e=>{const n=document.createElement("option");n.setAttribute("value",e),n.textContent=e,t.append(n)}))};a()}catch(t){a(t)}}))},581:(t,e,n)=>{"use strict";n.d(e,{z:()=>a});const a=(t,e,n,a)=>{const r=document.createElement("li");r.className="cards-item card";const c=document.createElement("h4");c.className="card-title",c.textContent=t;const o=document.createElement("span");o.className="card-id",o.textContent=`id: ${e}`;const i=document.createElement("span");i.className="card-price",i.textContent=`${n} ₽`;const s=document.createElement("span");s.className="card-brand",s.textContent=a?`Бренд: ${a}`:"Бренд неизвестен";const l=document.createElement("button");l.className="card-btn",l.textContent="В корзину";const d=document.createElement("img");d.className="card-img",d.setAttribute("src","./assets/card-img.png"),d.setAttribute("title","скоро здесь будет фото"),d.setAttribute("alt","фото изделия");const u=(t,e=r)=>{e.appendChild(t)};return u(c),u(d),u(i),u(o),u(s),u(l),r}},919:(t,e,n)=>{"use strict";n.a(t,(async(t,a)=>{try{n.d(e,{H:()=>L,L:()=>p});var r=n(581),c=n(138),o=n(455),i=n(583),s=n(636),l=n(586),d=t([o,i,l]);let u;[o,i,l]=d.then?(await d)():d;let m,p=new Set,b=[],h=0,f=0,y=1;const g=(t,e=1)=>{const n=document.createElement("btn");return n.className=t,n.textContent=e,n},A=()=>{y++,S(y),i.U$.innerHTML="",y===m?(k(b.slice(h,h+f)),console.log("plus to ",h,h+i.AB,"i ",h)):(k(b.slice(h,h+i.AB)),console.log("plus to ",h,h+i.AB,"i ",h),h=p.size+i.AB*y)},v=()=>{y-=1,S(y),i.U$.innerHTML="",1===y?(k(b.slice(0,i.AB+p.size)),h=0):(k(b.slice(h-2*i.AB,h-i.AB)),console.log("minus from ",h-i.AB,h,"i ",h),h-=i.AB)},w=()=>{y=m,S(y),i.U$.innerHTML="",k(b.slice(b.length-f,b.length)),console.log("end to ",b.length-f,b.length,"i ",h),h=b.length-f,console.log("last i ",h)},B=()=>{y=1,S(y),i.U$.innerHTML="",k(b.slice(0,i.AB+p.size)),h=0},S=t=>{const e=document.querySelector(".pagination");e.innerHTML="";const n=g("btn pagination-btn fpb_start","<<");e.append(n),n.addEventListener("click",B);const a=g("btn pagination-btn fpb_prev","<");e.append(a),a.addEventListener("click",v),1===t&&(n.setAttribute("disabled",!0),a.setAttribute("disabled",!0));const r=g("btn pagination-btn pagination-btn_current",t);e.append(r);const c=g("btn pagination-btn fpb_next",">");e.append(c),c.addEventListener("click",A);const o=g("btn pagination-btn fpb_finish",">>");e.append(o),o.addEventListener("click",w),t===m&&(c.setAttribute("disabled",!0),o.setAttribute("disabled",!0))},E=async t=>{b.length=0,p=new Set;const e=t;let n;switch(t.filterBy){case"brand":n=await(0,c.mF)(e.value);break;case"price":n=await(0,c.mN)(e.value);break;default:n=await(0,c.K4)(e.value)}const a=await(0,c.XJ)(n);return b.push(...a),f=b.length%i.AB,m=Math.ceil(b.length/i.AB),a},_=async(t,e)=>{const n=t,a=e,r=await(0,c.bQ)(n,a);return await(0,c.XJ)(r)},k=async(t,e=!1)=>{const n=await t;if(n.length>0)n.forEach((t=>{u!==t.id&&(u=t.id,e&&p.add(t.id),i.U$.prepend((0,r.z)(t.product,t.id,t.price,t.brand)))}));else{const t=document.createElement("li");t.className="empty-message",t.textContent="Похоже, в каталоге нет того, что вы ищите :(",i.U$.appendChild(t)}},L=async(t=i.AB,e=0,n=null)=>{i.U$.append((0,s.E)()),h=i.AB;const a=document.querySelectorAll(".btn_filter"),r=n;i.uW.forEach((t=>{t.value=""})),a.forEach((t=>{t.setAttribute("disabled","true")}));const c=r?await E(r):await _(t,e);if(n?await k(c.slice(0,i.AB)):await k(c),document.getElementById("cards_loader").classList.add("hidden"),!n&&document.getElementsByClassName("card").length<i.AB&&document.querySelector(".pagination-btn_current").textContent!=i.kk){document.getElementById("cards_loader").classList.remove("hidden"),document.getElementById("cards_loader").classList.add("additional");const n=i.AB-document.querySelectorAll(".card").length,a=await _(n,e+t);await k(a,!0)}if(n&&document.getElementsByClassName("card").length<i.AB&&b.flat().length>50&&document.querySelector(".pagination-btn_current").textContent!=m){const t=i.AB-document.querySelectorAll(".card").length;await k(b.slice(h,h+t),!0),h+=t}document.getElementById("cards_loader").classList.add("hidden"),document.getElementById("cards_loader").classList.remove("additional"),n?S(y):(0,o.X)(),a.forEach((t=>{t.removeAttribute("disabled")}))};a()}catch(t){a(t)}}))},636:(t,e,n)=>{"use strict";n.d(e,{E:()=>a});const a=()=>{const t=document.createElement("li");t.id="cards_loader";const e=document.createElement("div");return e.className="loader",t.append(e),t}},586:(t,e,n)=>{"use strict";n.a(t,(async(t,e)=>{try{var a=n(919),r=n(583),c=t([a,r]);[a,r]=c.then?(await c)():c;const o=document.querySelector(".filter"),i=t=>{let e;return r.uW.forEach((n=>{n.dataset.filter===t&&(e=n.value)})),e},s=t=>{if(t.target.classList.contains("btn")){r.U$.innerHTML="";const e=t.target.dataset.filter,n={filterBy:e,value:i(e)};n?(0,a.H)(r.AB,0,n):(0,a.H)(r.AB,0,!1)}};o.addEventListener("click",s),e()}catch(t){e(t)}}))},138:(t,e,n)=>{"use strict";n.d(e,{XJ:()=>s,bQ:()=>i,ww:()=>l,mF:()=>u,mN:()=>d,K4:()=>m});var a=n(739),r=n.n(a);const c=()=>{const t=new Date,e=t.getUTCFullYear(),n=t.getUTCMonth()+1,a=t.getUTCDate();return r()("Valantis_"+e+n.toString().padStart(2,0)+a.toString().padStart(2,0))},o="http://api.valantis.store:40000/",i=async(t=50,e=0)=>{let n=0;const a=t,r=e,s=o,l=c();try{const t=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json","X-Auth":l},body:JSON.stringify({action:"get_ids",params:{limit:a,offset:r}})});if(t.ok){const e=await t.json();return await e.result}if(console.log(t.statusText),n++,n<5)return await i(a,r)}catch(t){console.error("catchID",t)}},s=async t=>{let e=0;const n=t,a=o,r=c();try{const t=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json","X-Auth":r},body:JSON.stringify({action:"get_items",params:{ids:n}})});if(t.ok){const e=await t.json();return await e.result}if(console.log(t.statusText),e++,e<5)return await s(n)}catch(t){console.error("catchID",t)}},l=async()=>{let t=0;const e=o,n=c();try{const a=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json","X-Auth":n},body:JSON.stringify({action:"get_fields",params:{field:"brand"}})});if(a.ok){const t=await a.json();return await t}if(console.log(a.statusText),t++,t<5)return await l()}catch(t){console.error("catchID",t)}},d=async t=>{let e=0;const n=Number(t),a=o,r=c();try{const t=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json","X-Auth":r},body:JSON.stringify({action:"filter",params:{price:n}})});if(t.ok){const e=await t.json();return await e.result}if(console.log(t.statusText),e++,e<5)return await d(n)}catch(t){console.error("catchID",t)}},u=async t=>{let e=0;const n=t,a=o,r=c();try{const t=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json","X-Auth":r},body:JSON.stringify({action:"filter",params:{brand:n}})});if(t.ok){const e=await t.json();return await e.result}if(console.log(t.statusText),e++,e<5)return await u(n)}catch(t){console.error("catchID",t)}},m=async t=>{let e=0;const n=t,a=o,r=c();try{const t=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json","X-Auth":r},body:JSON.stringify({action:"filter",params:{product:n}})});if(t.ok){const e=await t.json();return await e.result}if(console.log(t.statusText),e++,e<5)return await m(n)}catch(t){console.error("catchID",t)}}},656:(t,e,n)=>{"use strict";const a=document.querySelector(".navigation-mobile"),r=document.querySelectorAll(".menu-item"),c=document.querySelector(".nav"),o=()=>{c.style.transition="transform 0.55s cubic-bezier(0.785, 0.135, 0.15, 0.86)",a.classList.toggle("clicked"),c.classList.toggle("show")};a.addEventListener("click",o),a.addEventListener("touchend",o),r.forEach((t=>{t.addEventListener("click",o)})),document.addEventListener("click",(t=>{t.target!=c&&c.classList.contains("show")&&t.target!=a&&o()}))},455:(t,e,n)=>{"use strict";n.a(t,(async(t,a)=>{try{n.d(e,{X:()=>y});var r=n(919),c=n(583),o=t([r,c]);[r,c]=o.then?(await o)():o;const i=document.querySelector(".pagination-btn_current");let s=1;const l=document.querySelector(".pagination-btn_next"),d=document.querySelector(".pagination-btn_prev"),u=document.querySelector(".pagination-btn_start"),m=document.querySelector(".pagination-btn_finish"),p=()=>{s++,i.textContent=s,2===s&&(d.removeAttribute("disabled"),u.removeAttribute("disabled")),s===c.kk&&(l.setAttribute("disabled","true"),m.setAttribute("disabled","true")),c.U$.innerHTML="",0===r.L.size?(0,r.H)(c.AB,c.AB*(s-1)):(0,r.H)(c.AB,c.AB*(s-1)+r.L.size)},b=()=>{s--,i.textContent=s,1===s&&(d.setAttribute("disabled","true"),u.setAttribute("disabled","true")),s===c.kk-1&&(l.removeAttribute("disabled"),m.removeAttribute("disabled")),c.U$.innerHTML="",0===r.L.size?(0,r.H)(c.AB,c.AB*(s-1)):1!==s?(0,r.H)(c.AB,c.AB*(s-1)+r.L.size):(0,r.H)(c.AB,0)},h=()=>{d.setAttribute("disabled","true"),u.setAttribute("disabled","true"),l.removeAttribute("disabled"),m.removeAttribute("disabled"),s=1,i.textContent=s,c.U$.innerHTML="",(0,r.H)(c.AB,c.AB*s-c.AB)},f=()=>{l.setAttribute("disabled","true"),m.setAttribute("disabled","true"),d.removeAttribute("disabled"),u.removeAttribute("disabled"),s=c.kk,i.textContent=s,c.U$.innerHTML="",0===r.L.size?(0,r.H)(c.AB,c.AB*(s-1)):(0,r.H)(c.AB,c.AB*(s-1)+r.L.size)},y=()=>{l.addEventListener("click",p),d.addEventListener("click",b),u.addEventListener("click",h),m.addEventListener("click",f)};a()}catch(t){a(t)}}))}},c={};function o(t){var e=c[t];if(void 0!==e)return e.exports;var n=c[t]={exports:{}};return r[t].call(n.exports,n,n.exports,o),n.exports}t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=t=>{t&&t.d<1&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},o.a=(r,c,o)=>{var i;o&&((i=[]).d=-1);var s,l,d,u=new Set,m=r.exports,p=new Promise(((t,e)=>{d=e,l=t}));p[e]=m,p[t]=t=>(i&&t(i),u.forEach(t),p.catch((t=>{}))),r.exports=p,c((r=>{var c;s=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[t])return r;if(r.then){var c=[];c.d=0,r.then((t=>{o[e]=t,a(c)}),(t=>{o[n]=t,a(c)}));var o={};return o[t]=t=>t(c),o}}var i={};return i[t]=t=>{},i[e]=r,i})))(r);var o=()=>s.map((t=>{if(t[n])throw t[n];return t[e]})),l=new Promise((e=>{(c=()=>e(o)).r=0;var n=t=>t!==i&&!u.has(t)&&(u.add(t),t&&!t.d&&(c.r++,t.push(c)));s.map((e=>e[t](n)))}));return c.r?l:o()}),(t=>(t?d(p[n]=t):l(m),a(i)))),i&&i.d<0&&(i.d=0)},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o(96)})();