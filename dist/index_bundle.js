(()=>{var t,e,n,a,r={739:function(t,e,n){var a;!function(r){"use strict";function i(t,e){var n=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(n>>16)<<16|65535&n}function o(t,e,n,a,r,o){return i((c=i(i(e,t),i(a,o)))<<(s=r)|c>>>32-s,n);var c,s}function c(t,e,n,a,r,i,c){return o(e&n|~e&a,t,e,r,i,c)}function s(t,e,n,a,r,i,c){return o(e&a|n&~a,t,e,r,i,c)}function d(t,e,n,a,r,i,c){return o(e^n^a,t,e,r,i,c)}function l(t,e,n,a,r,i,c){return o(n^(e|~a),t,e,r,i,c)}function u(t,e){var n,a,r,o,u;t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;var b=1732584193,m=-271733879,p=-1732584194,y=271733878;for(n=0;n<t.length;n+=16)a=b,r=m,o=p,u=y,b=c(b,m,p,y,t[n],7,-680876936),y=c(y,b,m,p,t[n+1],12,-389564586),p=c(p,y,b,m,t[n+2],17,606105819),m=c(m,p,y,b,t[n+3],22,-1044525330),b=c(b,m,p,y,t[n+4],7,-176418897),y=c(y,b,m,p,t[n+5],12,1200080426),p=c(p,y,b,m,t[n+6],17,-1473231341),m=c(m,p,y,b,t[n+7],22,-45705983),b=c(b,m,p,y,t[n+8],7,1770035416),y=c(y,b,m,p,t[n+9],12,-1958414417),p=c(p,y,b,m,t[n+10],17,-42063),m=c(m,p,y,b,t[n+11],22,-1990404162),b=c(b,m,p,y,t[n+12],7,1804603682),y=c(y,b,m,p,t[n+13],12,-40341101),p=c(p,y,b,m,t[n+14],17,-1502002290),b=s(b,m=c(m,p,y,b,t[n+15],22,1236535329),p,y,t[n+1],5,-165796510),y=s(y,b,m,p,t[n+6],9,-1069501632),p=s(p,y,b,m,t[n+11],14,643717713),m=s(m,p,y,b,t[n],20,-373897302),b=s(b,m,p,y,t[n+5],5,-701558691),y=s(y,b,m,p,t[n+10],9,38016083),p=s(p,y,b,m,t[n+15],14,-660478335),m=s(m,p,y,b,t[n+4],20,-405537848),b=s(b,m,p,y,t[n+9],5,568446438),y=s(y,b,m,p,t[n+14],9,-1019803690),p=s(p,y,b,m,t[n+3],14,-187363961),m=s(m,p,y,b,t[n+8],20,1163531501),b=s(b,m,p,y,t[n+13],5,-1444681467),y=s(y,b,m,p,t[n+2],9,-51403784),p=s(p,y,b,m,t[n+7],14,1735328473),b=d(b,m=s(m,p,y,b,t[n+12],20,-1926607734),p,y,t[n+5],4,-378558),y=d(y,b,m,p,t[n+8],11,-2022574463),p=d(p,y,b,m,t[n+11],16,1839030562),m=d(m,p,y,b,t[n+14],23,-35309556),b=d(b,m,p,y,t[n+1],4,-1530992060),y=d(y,b,m,p,t[n+4],11,1272893353),p=d(p,y,b,m,t[n+7],16,-155497632),m=d(m,p,y,b,t[n+10],23,-1094730640),b=d(b,m,p,y,t[n+13],4,681279174),y=d(y,b,m,p,t[n],11,-358537222),p=d(p,y,b,m,t[n+3],16,-722521979),m=d(m,p,y,b,t[n+6],23,76029189),b=d(b,m,p,y,t[n+9],4,-640364487),y=d(y,b,m,p,t[n+12],11,-421815835),p=d(p,y,b,m,t[n+15],16,530742520),b=l(b,m=d(m,p,y,b,t[n+2],23,-995338651),p,y,t[n],6,-198630844),y=l(y,b,m,p,t[n+7],10,1126891415),p=l(p,y,b,m,t[n+14],15,-1416354905),m=l(m,p,y,b,t[n+5],21,-57434055),b=l(b,m,p,y,t[n+12],6,1700485571),y=l(y,b,m,p,t[n+3],10,-1894986606),p=l(p,y,b,m,t[n+10],15,-1051523),m=l(m,p,y,b,t[n+1],21,-2054922799),b=l(b,m,p,y,t[n+8],6,1873313359),y=l(y,b,m,p,t[n+15],10,-30611744),p=l(p,y,b,m,t[n+6],15,-1560198380),m=l(m,p,y,b,t[n+13],21,1309151649),b=l(b,m,p,y,t[n+4],6,-145523070),y=l(y,b,m,p,t[n+11],10,-1120210379),p=l(p,y,b,m,t[n+2],15,718787259),m=l(m,p,y,b,t[n+9],21,-343485551),b=i(b,a),m=i(m,r),p=i(p,o),y=i(y,u);return[b,m,p,y]}function b(t){var e,n="",a=32*t.length;for(e=0;e<a;e+=8)n+=String.fromCharCode(t[e>>5]>>>e%32&255);return n}function m(t){var e,n=[];for(n[(t.length>>2)-1]=void 0,e=0;e<n.length;e+=1)n[e]=0;var a=8*t.length;for(e=0;e<a;e+=8)n[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return n}function p(t){var e,n,a="0123456789abcdef",r="";for(n=0;n<t.length;n+=1)e=t.charCodeAt(n),r+=a.charAt(e>>>4&15)+a.charAt(15&e);return r}function y(t){return unescape(encodeURIComponent(t))}function h(t){return function(t){return b(u(m(t),8*t.length))}(y(t))}function f(t,e){return function(t,e){var n,a,r=m(t),i=[],o=[];for(i[15]=o[15]=void 0,r.length>16&&(r=u(r,8*t.length)),n=0;n<16;n+=1)i[n]=909522486^r[n],o[n]=1549556828^r[n];return a=u(i.concat(m(e)),512+8*e.length),b(u(o.concat(a),640))}(y(t),y(e))}function g(t,e,n){return e?n?f(e,t):p(f(e,t)):n?h(t):p(h(t))}void 0===(a=function(){return g}.call(e,n,e,t))||(t.exports=a)}()},96:(t,e,n)=>{"use strict";n.a(t,(async(t,e)=>{try{var a=n(919),r=n(833),i=(n(656),t([a,r]));[a,r]=i.then?(await i)():i,(0,a.H)(),(0,r.J)(),e()}catch(t){e(t)}}))},583:(t,e,n)=>{"use strict";n.a(t,(async(t,a)=>{try{n.d(e,{AB:()=>o,Hk:()=>b,U$:()=>t,kk:()=>l,uW:()=>i});var r=n(138);const t=document.querySelector(".cards"),i=document.querySelectorAll(".filter-item"),o=50,c=async()=>{const t=await(0,r.ww)();return await t.result},s=await c(),d=s.length,l=Math.ceil(d/o),u=s.filter((t=>null!=t)),b=new Set(u);a()}catch(t){a(t)}}),1)},833:(t,e,n)=>{"use strict";n.a(t,(async(t,a)=>{try{n.d(e,{J:()=>o});var r=n(583),i=t([r]);r=(i.then?(await i)():i)[0];const o=()=>{const t=document.querySelector(".filter-item_brand");r.Hk.forEach((e=>{const n=document.createElement("option");n.setAttribute("value",e),n.textContent=e,t.append(n)}))};a()}catch(t){a(t)}}))},581:(t,e,n)=>{"use strict";n.d(e,{z:()=>a});const a=(t,e,n,a)=>{const r=document.createElement("li");r.className="cards-item card";const i=document.createElement("h4");i.className="card-title",i.textContent=t;const o=document.createElement("span");o.className="card-id",o.textContent=`id: ${e}`;const c=document.createElement("span");c.className="card-price",c.textContent=`${n} ₽`;const s=document.createElement("span");s.className="card-brand",s.textContent=a?`Бренд: ${a}`:"Бренд неизвестен";const d=document.createElement("button");d.className="card-btn",d.textContent="В корзину";const l=document.createElement("img");l.className="card-img",l.setAttribute("src","./assets/card-img.png"),l.setAttribute("title","скоро здесь будет фото"),l.setAttribute("alt","фото изделия");const u=(t,e=r)=>{e.appendChild(t)};return u(i),u(l),u(c),u(o),u(s),u(d),r}},919:(t,e,n)=>{"use strict";n.a(t,(async(t,a)=>{try{n.d(e,{H:()=>q});var r=n(581),i=n(138),o=n(455),c=n(583),s=n(636),d=n(586),l=t([o,c,d]);let u;[o,c,d]=l.then?(await l)():l;let b,m=new Set,p=1,y=[];const h=(t,e)=>{const n=document.createElement("btn");return n.className=t,n.textContent=e,n},f=async()=>{p++,c.U$.innerHTML="",document.querySelector(".pagination-btn_current").textContent=p,c.U$.append((0,s.E)());const t=c.AB*(p-1)+m.size,e=t+c.AB,n=y.slice(t,e),a=await _(n);B(a),document.getElementById("cards_loader").classList.add("hidden"),document.querySelector(".pagination-btn_prev").removeAttribute("disabled"),document.querySelector(".pagination-btn_start").removeAttribute("disabled"),p===b&&(document.querySelector(".pagination-btn_next").setAttribute("disabled","true"),document.querySelector(".pagination-btn_finish").setAttribute("disabled","true"))},g=async()=>{p--,c.U$.innerHTML="",document.querySelector(".pagination-btn_current").textContent=p,c.U$.append((0,s.E)());const t=1==p?0:c.AB*(p-1)+m.size,e=1==p?t+c.AB+m.size:t+c.AB,n=y.slice(t,e),a=await _(n);B(a),document.getElementById("cards_loader").classList.add("hidden"),document.querySelector(".pagination-btn_next").removeAttribute("disabled"),document.querySelector(".pagination-btn_finish").removeAttribute("disabled"),1==p&&(document.querySelector(".pagination-btn_prev").setAttribute("disabled","true"),document.querySelector(".pagination-btn_start").setAttribute("disabled","true"))},v=async()=>{p=1,c.U$.innerHTML="",document.querySelector(".pagination-btn_current").textContent=p,c.U$.append((0,s.E)());const t=0+c.AB+m.size,e=y.slice(0,t),n=await _(e);B(n),document.getElementById("cards_loader").classList.add("hidden"),document.querySelector(".pagination-btn_prev").setAttribute("disabled","true"),document.querySelector(".pagination-btn_start").setAttribute("disabled","true"),document.querySelector(".pagination-btn_next").removeAttribute("disabled"),document.querySelector(".pagination-btn_finish").removeAttribute("disabled")},A=async()=>{p=b,c.U$.innerHTML="",document.querySelector(".pagination-btn_current").textContent=p,c.U$.append((0,s.E)());const t=0===m.size?c.AB*(p-1):c.AB*(p-1)+m.size,e=y.length,n=y.slice(t,e),a=await _(n);B(a),document.getElementById("cards_loader").classList.add("hidden"),document.querySelector(".pagination-btn_prev").removeAttribute("disabled"),document.querySelector(".pagination-btn_start").removeAttribute("disabled"),document.querySelector(".pagination-btn_next").setAttribute("disabled","true"),document.querySelector(".pagination-btn_finish").setAttribute("disabled","true")},w=t=>{const e=document.querySelector(".pagination");e.innerHTML="";const n=h("pagination-btn pagination-btn_start btn","<<");e.append(n),n.addEventListener("click",v);const a=h("pagination-btn pagination-btn_prev btn","<");e.append(a),a.addEventListener("click",g),n.setAttribute("disabled",!0),a.setAttribute("disabled",!0);const r=h("pagination-btn pagination-btn_current btn",p);e.append(r);const i=h("pagination-btn pagination-btn_next btn",">");e.append(i),i.addEventListener("click",f);const o=h("pagination-btn pagination-btn_finish btn",">>");e.append(o),o.addEventListener("click",A),t===b&&(i.setAttribute("disabled",!0),o.setAttribute("disabled",!0))},S=async t=>{const e=t;let n;switch(t.filterBy){case"brand":n=await(0,i.mF)(e.value);break;case"price":n=await(0,i.mN)(e.value);break;default:n=await(0,i.K4)(e.value)}return y=n,await _(y.slice(0,c.AB))},_=async t=>{b=Math.ceil(y.length/c.AB);const e=t;return await(0,i.XJ)(e)},E=async(t,e)=>{const n=t,a=e,r=await(0,i.bQ)(n,a);return await(0,i.XJ)(r)},B=async(t,e=!1)=>{const n=await t;if(n.length>0)n.forEach((t=>{u!==t.id&&(u=t.id,e&&m.add(t.id),c.U$.append((0,r.z)(t.product,t.id,t.price,t.brand)))}));else{const t=document.createElement("li");t.className="empty-message",t.textContent="Похоже, в каталоге нет того, что вы ищите :(",c.U$.appendChild(t)}},q=async(t=c.AB,e=0,n=null)=>{let a;c.U$.append((0,s.E)()),a=0===m.size||1==document.querySelector(".pagination-btn_current").textContent?e:e+m.size;const r=document.querySelectorAll(".btn_filter"),i=n;r.forEach((t=>{t.setAttribute("disabled","true")})),n||c.uW.forEach((t=>{t.value=""})),n&&(m=new Set,p=1);const d=i?await S(i):await E(t,a);if(await B(d),document.getElementById("cards_loader").classList.add("hidden"),!n&&document.getElementsByClassName("card").length<c.AB&&document.querySelector(".pagination-btn_current").textContent!=c.kk){document.getElementById("cards_loader").classList.remove("hidden"),document.getElementById("cards_loader").classList.add("additional");const n=c.AB-document.querySelectorAll(".card").length,a=await E(n,e+t);await B(a,!0)}if(n&&document.getElementsByClassName("card").length<c.AB&&y.length>50){const t=c.AB-document.querySelectorAll(".card").length,e=y.slice(c.AB*p,c.AB*p+t),n=await _(e);await B(n,!0)}document.getElementById("cards_loader").classList.add("hidden"),document.getElementById("cards_loader").classList.remove("additional"),n?w(p):(0,o.X)(),r.forEach((t=>t.removeAttribute("disabled")))};a()}catch(t){a(t)}}))},636:(t,e,n)=>{"use strict";n.d(e,{E:()=>a});const a=()=>{const t=document.createElement("li");t.id="cards_loader";const e=document.createElement("div");return e.className="loader",t.append(e),t}},586:(t,e,n)=>{"use strict";n.a(t,(async(t,e)=>{try{var a=n(919),r=n(583),i=t([a,r]);[a,r]=i.then?(await i)():i;const o=document.querySelector(".filter"),c=t=>{let e;return r.uW.forEach((n=>{n.dataset.filter===t?e=n.value:n.value=""})),e},s=t=>{if(t.target.classList.contains("btn")){r.U$.innerHTML="";const e=t.target.dataset.filter,n={filterBy:e,value:c(e)};n.value?(0,a.H)(r.AB,0,n):(0,a.H)(r.AB,0,null)}};o.addEventListener("click",s),e()}catch(t){e(t)}}))},138:(t,e,n)=>{"use strict";n.d(e,{XJ:()=>s,bQ:()=>c,ww:()=>d,mF:()=>u,mN:()=>l,K4:()=>b});var a=n(739),r=n.n(a);const i=()=>{const t=new Date,e=t.getUTCFullYear(),n=t.getUTCMonth()+1,a=t.getUTCDate();return r()("Valantis_"+e+n.toString().padStart(2,0)+a.toString().padStart(2,0))},o="https://api.valantis.store:41000/",c=async(t=50,e=0)=>{let n=0;const a=t,r=e,s=o,d=i();try{const t=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json","X-Auth":d},body:JSON.stringify({action:"get_ids",params:{limit:a,offset:r}})});if(t.ok){const e=await t.json();return await e.result}if(console.log(t.statusText+" server answer "+t.body.ReadableStream),n++,n<5)return await c(a,r)}catch(t){console.error("catchID",t)}},s=async t=>{let e=0;const n=t,a=o,r=i();try{const t=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json","X-Auth":r},body:JSON.stringify({action:"get_items",params:{ids:n}})});if(t.ok){const e=await t.json();return await e.result}if(console.log(t.statusText+" server answer "+t.body.ReadableStream),e++,e<5)return await s(n)}catch(t){console.error("catchID",t)}},d=async()=>{let t=0;const e=o,n=i();try{const a=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json","X-Auth":n},body:JSON.stringify({action:"get_fields",params:{field:"brand"}})});if(a.ok){const t=await a.json();return await t}if(console.log(a.statusText+" server answer "+a.body.ReadableStream),t++,t<5)return await d()}catch(t){console.error("catchID",t)}},l=async t=>{let e=0;const n=Number(t),a=o,r=i();try{const t=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json","X-Auth":r},body:JSON.stringify({action:"filter",params:{price:n}})});if(t.ok){const e=await t.json();return await e.result}if(console.log(t.statusText+" server answer "+t.body.ReadableStream),e++,e<5)return await l(n)}catch(t){console.error("catchID",t)}},u=async t=>{let e=0;const n=t,a=o,r=i();try{const t=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json","X-Auth":r},body:JSON.stringify({action:"filter",params:{brand:n}})});if(t.ok){const e=await t.json();return await e.result}if(console.log(t.statusText+" server answer "+t.body.ReadableStream),e++,e<5)return await u(n)}catch(t){console.error("catchID",t)}},b=async t=>{let e=0;const n=t,a=o,r=i();try{const t=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json","X-Auth":r},body:JSON.stringify({action:"filter",params:{product:n}})});if(t.ok){const e=await t.json();return await e.result}if(console.log(t.statusText+" server answer "+t.body.ReadableStream),e++,e<5)return await b(n)}catch(t){console.error("catchID",t)}}},656:(t,e,n)=>{"use strict";const a=document.querySelector(".navigation-mobile"),r=document.querySelectorAll(".menu-item"),i=document.querySelector(".nav"),o=()=>{i.style.transition="transform 0.55s cubic-bezier(0.785, 0.135, 0.15, 0.86)",a.classList.toggle("clicked"),i.classList.toggle("show")};a.addEventListener("click",o),a.addEventListener("touchend",o),r.forEach((t=>{t.addEventListener("click",o)})),document.addEventListener("click",(t=>{t.target!=i&&i.classList.contains("show")&&t.target!=a&&o()}))},455:(t,e,n)=>{"use strict";n.a(t,(async(t,a)=>{try{n.d(e,{X:()=>f});var r=n(919),i=n(583),o=t([r,i]);[r,i]=o.then?(await o)():o;let c=1;const s=document.querySelector(".pagination-btn_current"),d=document.querySelector(".pagination-btn_next"),l=document.querySelector(".pagination-btn_prev"),u=document.querySelector(".pagination-btn_start"),b=document.querySelector(".pagination-btn_finish"),m=()=>{c++,s.textContent=c,2===c&&(l.removeAttribute("disabled"),u.removeAttribute("disabled")),c===i.kk&&(d.setAttribute("disabled","true"),b.setAttribute("disabled","true")),i.U$.innerHTML="",(0,r.H)(i.AB,i.AB*(c-1))},p=()=>{c--,s.textContent=c,1===c&&(l.setAttribute("disabled","true"),u.setAttribute("disabled","true")),c===i.kk-1&&(d.removeAttribute("disabled"),b.removeAttribute("disabled")),i.U$.innerHTML="",(0,r.H)(i.AB,i.AB*(c-1))},y=()=>{l.setAttribute("disabled","true"),u.setAttribute("disabled","true"),d.removeAttribute("disabled"),b.removeAttribute("disabled"),c=1,s.textContent=c,i.U$.innerHTML="",(0,r.H)(i.AB,i.AB*(c-1))},h=()=>{d.setAttribute("disabled","true"),b.setAttribute("disabled","true"),l.removeAttribute("disabled"),u.removeAttribute("disabled"),c=i.kk,s.textContent=c,i.U$.innerHTML="",(0,r.H)(i.AB,i.AB*(c-1))},f=()=>{d.addEventListener("click",m),l.addEventListener("click",p),u.addEventListener("click",y),b.addEventListener("click",h)};a()}catch(t){a(t)}}))}},i={};function o(t){var e=i[t];if(void 0!==e)return e.exports;var n=i[t]={exports:{}};return r[t].call(n.exports,n,n.exports,o),n.exports}t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=t=>{t&&t.d<1&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},o.a=(r,i,o)=>{var c;o&&((c=[]).d=-1);var s,d,l,u=new Set,b=r.exports,m=new Promise(((t,e)=>{l=e,d=t}));m[e]=b,m[t]=t=>(c&&t(c),u.forEach(t),m.catch((t=>{}))),r.exports=m,i((r=>{var i;s=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[t])return r;if(r.then){var i=[];i.d=0,r.then((t=>{o[e]=t,a(i)}),(t=>{o[n]=t,a(i)}));var o={};return o[t]=t=>t(i),o}}var c={};return c[t]=t=>{},c[e]=r,c})))(r);var o=()=>s.map((t=>{if(t[n])throw t[n];return t[e]})),d=new Promise((e=>{(i=()=>e(o)).r=0;var n=t=>t!==c&&!u.has(t)&&(u.add(t),t&&!t.d&&(i.r++,t.push(i)));s.map((e=>e[t](n)))}));return i.r?d:o()}),(t=>(t?l(m[n]=t):d(b),a(c)))),c&&c.d<0&&(c.d=0)},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o(96)})();