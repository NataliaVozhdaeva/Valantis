(()=>{var t,e,n,a,r={739:function(t,e,n){var a;!function(r){"use strict";function o(t,e){var n=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(n>>16)<<16|65535&n}function c(t,e,n,a,r,c){return o((i=o(o(e,t),o(a,c)))<<(s=r)|i>>>32-s,n);var i,s}function i(t,e,n,a,r,o,i){return c(e&n|~e&a,t,e,r,o,i)}function s(t,e,n,a,r,o,i){return c(e&a|n&~a,t,e,r,o,i)}function d(t,e,n,a,r,o,i){return c(e^n^a,t,e,r,o,i)}function l(t,e,n,a,r,o,i){return c(n^(e|~a),t,e,r,o,i)}function u(t,e){var n,a,r,c,u;t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;var m=1732584193,p=-271733879,b=-1732584194,y=271733878;for(n=0;n<t.length;n+=16)a=m,r=p,c=b,u=y,m=i(m,p,b,y,t[n],7,-680876936),y=i(y,m,p,b,t[n+1],12,-389564586),b=i(b,y,m,p,t[n+2],17,606105819),p=i(p,b,y,m,t[n+3],22,-1044525330),m=i(m,p,b,y,t[n+4],7,-176418897),y=i(y,m,p,b,t[n+5],12,1200080426),b=i(b,y,m,p,t[n+6],17,-1473231341),p=i(p,b,y,m,t[n+7],22,-45705983),m=i(m,p,b,y,t[n+8],7,1770035416),y=i(y,m,p,b,t[n+9],12,-1958414417),b=i(b,y,m,p,t[n+10],17,-42063),p=i(p,b,y,m,t[n+11],22,-1990404162),m=i(m,p,b,y,t[n+12],7,1804603682),y=i(y,m,p,b,t[n+13],12,-40341101),b=i(b,y,m,p,t[n+14],17,-1502002290),m=s(m,p=i(p,b,y,m,t[n+15],22,1236535329),b,y,t[n+1],5,-165796510),y=s(y,m,p,b,t[n+6],9,-1069501632),b=s(b,y,m,p,t[n+11],14,643717713),p=s(p,b,y,m,t[n],20,-373897302),m=s(m,p,b,y,t[n+5],5,-701558691),y=s(y,m,p,b,t[n+10],9,38016083),b=s(b,y,m,p,t[n+15],14,-660478335),p=s(p,b,y,m,t[n+4],20,-405537848),m=s(m,p,b,y,t[n+9],5,568446438),y=s(y,m,p,b,t[n+14],9,-1019803690),b=s(b,y,m,p,t[n+3],14,-187363961),p=s(p,b,y,m,t[n+8],20,1163531501),m=s(m,p,b,y,t[n+13],5,-1444681467),y=s(y,m,p,b,t[n+2],9,-51403784),b=s(b,y,m,p,t[n+7],14,1735328473),m=d(m,p=s(p,b,y,m,t[n+12],20,-1926607734),b,y,t[n+5],4,-378558),y=d(y,m,p,b,t[n+8],11,-2022574463),b=d(b,y,m,p,t[n+11],16,1839030562),p=d(p,b,y,m,t[n+14],23,-35309556),m=d(m,p,b,y,t[n+1],4,-1530992060),y=d(y,m,p,b,t[n+4],11,1272893353),b=d(b,y,m,p,t[n+7],16,-155497632),p=d(p,b,y,m,t[n+10],23,-1094730640),m=d(m,p,b,y,t[n+13],4,681279174),y=d(y,m,p,b,t[n],11,-358537222),b=d(b,y,m,p,t[n+3],16,-722521979),p=d(p,b,y,m,t[n+6],23,76029189),m=d(m,p,b,y,t[n+9],4,-640364487),y=d(y,m,p,b,t[n+12],11,-421815835),b=d(b,y,m,p,t[n+15],16,530742520),m=l(m,p=d(p,b,y,m,t[n+2],23,-995338651),b,y,t[n],6,-198630844),y=l(y,m,p,b,t[n+7],10,1126891415),b=l(b,y,m,p,t[n+14],15,-1416354905),p=l(p,b,y,m,t[n+5],21,-57434055),m=l(m,p,b,y,t[n+12],6,1700485571),y=l(y,m,p,b,t[n+3],10,-1894986606),b=l(b,y,m,p,t[n+10],15,-1051523),p=l(p,b,y,m,t[n+1],21,-2054922799),m=l(m,p,b,y,t[n+8],6,1873313359),y=l(y,m,p,b,t[n+15],10,-30611744),b=l(b,y,m,p,t[n+6],15,-1560198380),p=l(p,b,y,m,t[n+13],21,1309151649),m=l(m,p,b,y,t[n+4],6,-145523070),y=l(y,m,p,b,t[n+11],10,-1120210379),b=l(b,y,m,p,t[n+2],15,718787259),p=l(p,b,y,m,t[n+9],21,-343485551),m=o(m,a),p=o(p,r),b=o(b,c),y=o(y,u);return[m,p,b,y]}function m(t){var e,n="",a=32*t.length;for(e=0;e<a;e+=8)n+=String.fromCharCode(t[e>>5]>>>e%32&255);return n}function p(t){var e,n=[];for(n[(t.length>>2)-1]=void 0,e=0;e<n.length;e+=1)n[e]=0;var a=8*t.length;for(e=0;e<a;e+=8)n[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return n}function b(t){var e,n,a="0123456789abcdef",r="";for(n=0;n<t.length;n+=1)e=t.charCodeAt(n),r+=a.charAt(e>>>4&15)+a.charAt(15&e);return r}function y(t){return unescape(encodeURIComponent(t))}function h(t){return function(t){return m(u(p(t),8*t.length))}(y(t))}function g(t,e){return function(t,e){var n,a,r=p(t),o=[],c=[];for(o[15]=c[15]=void 0,r.length>16&&(r=u(r,8*t.length)),n=0;n<16;n+=1)o[n]=909522486^r[n],c[n]=1549556828^r[n];return a=u(o.concat(p(e)),512+8*e.length),m(u(c.concat(a),640))}(y(t),y(e))}function f(t,e,n){return e?n?g(e,t):b(g(e,t)):n?h(t):b(h(t))}void 0===(a=function(){return f}.call(e,n,e,t))||(t.exports=a)}()},96:(t,e,n)=>{"use strict";n.a(t,(async(t,e)=>{try{var a=n(919),r=n(833),o=(n(656),t([a,r]));[a,r]=o.then?(await o)():o,(0,a.H)(),(0,r.J)(),e()}catch(t){e(t)}}))},583:(t,e,n)=>{"use strict";n.a(t,(async(t,a)=>{try{n.d(e,{AB:()=>c,Hk:()=>m,Od:()=>b,S3:()=>f,Tq:()=>g,U$:()=>t,_R:()=>p,kk:()=>l,rA:()=>y,uW:()=>o,v5:()=>h,wK:()=>v});var r=n(138);const t=document.querySelector(".cards"),o=document.querySelectorAll(".filter-item"),c=50,i=async()=>{const t=await(0,r.ww)();return await t.result},s=await i(),d=s.length,l=Math.ceil(d/c),u=s.filter((t=>null!=t)),m=new Set(u),p=()=>{document.querySelector(".pagination-btn_prev").setAttribute("disabled","true"),document.querySelector(".pagination-btn_start").setAttribute("disabled","true"),document.querySelector(".pagination-btn_next").removeAttribute("disabled"),document.querySelector(".pagination-btn_finish").removeAttribute("disabled")},b=()=>{document.querySelector(".pagination-btn_next").removeAttribute("disabled"),document.querySelector(".pagination-btn_finish").removeAttribute("disabled")},y=()=>{document.querySelector(".pagination-btn_next").setAttribute("disabled","true"),document.querySelector(".pagination-btn_finish").setAttribute("disabled","true"),document.querySelector(".pagination-btn_prev").removeAttribute("disabled"),document.querySelector(".pagination-btn_start").removeAttribute("disabled")},h=()=>{document.querySelector(".pagination-btn_prev").removeAttribute("disabled"),document.querySelector(".pagination-btn_start").removeAttribute("disabled")},g=()=>{document.querySelector(".pagination-btn_next").setAttribute("disabled","true"),document.querySelector(".pagination-btn_finish").setAttribute("disabled","true")},f=()=>{document.querySelector(".pagination-btn_prev").setAttribute("disabled","true"),document.querySelector(".pagination-btn_start").setAttribute("disabled","true")},v=(t,e,n,a)=>{document.querySelector(".pagination-btn_start").addEventListener("click",t),document.querySelector(".pagination-btn_prev").addEventListener("click",e),document.querySelector(".pagination-btn_next").addEventListener("click",n),document.querySelector(".pagination-btn_finish").addEventListener("click",a)};a()}catch(t){a(t)}}),1)},833:(t,e,n)=>{"use strict";n.a(t,(async(t,a)=>{try{n.d(e,{J:()=>c});var r=n(583),o=t([r]);r=(o.then?(await o)():o)[0];const c=()=>{const t=document.querySelector(".filter-item_brand");r.Hk.forEach((e=>{const n=document.createElement("option");n.setAttribute("value",e),n.textContent=e,t.append(n)}))};a()}catch(t){a(t)}}))},581:(t,e,n)=>{"use strict";n.d(e,{z:()=>a});const a=(t,e,n,a)=>{const r=document.createElement("li");r.className="cards-item card";const o=document.createElement("h4");o.className="card-title",o.textContent=t;const c=document.createElement("span");c.className="card-id",c.textContent=`id: ${e}`;const i=document.createElement("span");i.className="card-price",i.textContent=`${n} ₽`;const s=document.createElement("span");s.className="card-brand",s.textContent=a?`Бренд: ${a}`:"Бренд неизвестен";const d=document.createElement("button");d.className="card-btn",d.textContent="В корзину";const l=document.createElement("img");l.className="card-img",l.setAttribute("src","./assets/card-img.png"),l.setAttribute("title","скоро здесь будет фото"),l.setAttribute("alt","фото изделия");const u=(t,e=r)=>{e.appendChild(t)};return u(o),u(l),u(i),u(c),u(s),u(d),r}},919:(t,e,n)=>{"use strict";n.a(t,(async(t,a)=>{try{n.d(e,{H:()=>B});var r=n(581),o=n(138),c=n(455),i=n(636),s=n(586),d=n(352),l=n(583),u=t([c,s,l]);let m;[c,s,l]=u.then?(await u)():u;let p,b,y=1,h=[];const g=async()=>{y++,l.U$.innerHTML="",document.querySelector(".pagination-btn_current").textContent=y,l.U$.append((0,i.E)());const t=l.AB*(y-1)+b.size,e=t+l.AB,n=h.slice(t,e),a=await A(n);q(a),document.getElementById("cards_loader").classList.add("hidden"),(0,l.v5)(),y===p&&(0,l.Tq)()},f=async()=>{y--,l.U$.innerHTML="",document.querySelector(".pagination-btn_current").textContent=y,l.U$.append((0,i.E)());const t=1==y?0:l.AB*(y-1)+b.size,e=1==y?t+l.AB+b.size:t+l.AB,n=h.slice(t,e),a=await A(n);q(a),document.getElementById("cards_loader").classList.add("hidden"),(0,l.Od)(),1==y&&(0,l.S3)()},v=async()=>{y=1,l.U$.innerHTML="",document.querySelector(".pagination-btn_current").textContent=y,l.U$.append((0,i.E)());const t=0+l.AB+b.size,e=h.slice(0,t),n=await A(e);q(n),document.getElementById("cards_loader").classList.add("hidden"),(0,l._R)()},w=async()=>{y=p,l.U$.innerHTML="",document.querySelector(".pagination-btn_current").textContent=y,l.U$.append((0,i.E)());const t=0===b.size?l.AB*(y-1):l.AB*(y-1)+b.size,e=h.length,n=h.slice(t,e),a=await A(n);q(a),document.getElementById("cards_loader").classList.add("hidden"),(0,l.rA)()},S=t=>{(0,d.l)(),(0,l.wK)(v,f,g,w),t==p&&(0,l.Tq)()},_=async t=>{const e=t;let n;switch(t.filterBy){case"brand":n=await(0,o.mF)(e.value);break;case"price":n=await(0,o.mN)(e.value);break;default:n=await(0,o.K4)(e.value)}return h=n,p=Math.ceil(h.length/l.AB),await A(h.slice(0,l.AB))},A=async t=>{const e=t;return await(0,o.XJ)(e)},E=async(t,e)=>{const n=t,a=e,r=await(0,o.bQ)(n,a);return await(0,o.XJ)(r)},q=async(t,e=!1)=>{const n=await t;if(n.length>0)n.forEach((t=>{m!==t.id&&(m=t.id,e&&b.add(t.id),l.U$.append((0,r.z)(t.product,t.id,t.price,t.brand)))}));else{const t=document.createElement("li");t.className="empty-message",t.textContent="Похоже, в каталоге нет того, что вы ищите :(",l.U$.appendChild(t)}},B=async(t=l.AB,e=0,n=null)=>{let a;l.U$.append((0,i.E)()),1==document.querySelector(".pagination-btn_current").textContent||n?(a=e,b=new Set):a=e+b.size;const r=document.querySelectorAll(".btn_filter"),o=n;r.forEach((t=>{t.setAttribute("disabled","true")})),n||l.uW.forEach((t=>{t.value=""}));const s=o?await _(o):await E(t,a);if(await q(s),document.getElementById("cards_loader").classList.add("hidden"),!n&&document.getElementsByClassName("card").length<l.AB&&document.querySelector(".pagination-btn_current").textContent!=l.kk){document.getElementById("cards_loader").classList.remove("hidden"),document.getElementById("cards_loader").classList.add("additional");const n=l.AB-document.querySelectorAll(".card").length,a=await E(n,e+t);await q(a,!0)}if(n&&document.getElementsByClassName("card").length<l.AB&&h.length>50){document.getElementById("cards_loader").classList.remove("hidden"),document.getElementById("cards_loader").classList.add("additional");const t=l.AB-document.querySelectorAll(".card").length,e=h.slice(l.AB*y,l.AB*y+t),n=await A(e);await q(n,!0)}document.getElementById("cards_loader").classList.add("hidden"),document.getElementById("cards_loader").classList.remove("additional"),n?S("1"):(0,c.X)(),r.forEach((t=>t.removeAttribute("disabled")))};a()}catch(t){a(t)}}))},636:(t,e,n)=>{"use strict";n.d(e,{E:()=>a});const a=()=>{const t=document.createElement("li");t.id="cards_loader";const e=document.createElement("div");return e.className="loader",t.append(e),t}},352:(t,e,n)=>{"use strict";n.d(e,{l:()=>r});const a=(t,e)=>{const n=document.createElement("btn");return n.className=t,n.textContent=e,n},r=()=>{const t=document.querySelector(".pagination");t.innerHTML="";const e=a("pagination-btn pagination-btn_start btn","<<");t.append(e);const n=a("pagination-btn pagination-btn_prev btn","<");t.append(n),e.setAttribute("disabled",!0),n.setAttribute("disabled",!0);const r=a("pagination-btn pagination-btn_current btn","1");t.append(r);const o=a("pagination-btn pagination-btn_next btn",">");t.append(o);const c=a("pagination-btn pagination-btn_finish btn",">>");t.append(c)}},586:(t,e,n)=>{"use strict";n.a(t,(async(t,e)=>{try{var a=n(919),r=n(583),o=n(455),c=t([a,r,o]);[a,r,o]=c.then?(await c)():c;const i=document.querySelector(".filter"),s=document.querySelector(".btn_filter__clean"),d=t=>{let e;return r.uW.forEach((n=>{n.dataset.filter===t?e=n.value:n.value=""})),e},l=t=>{if(t.target.classList.contains("btn_item")){const e=t.target.dataset.filter,n={filterBy:e,value:d(e)};n.value&&(r.U$.innerHTML="",(0,a.H)(r.AB,0,n))}},u=()=>{r.U$.innerHTML="",(0,o.j)(),(0,a.H)(r.AB,0,null)};s.addEventListener("click",u),i.addEventListener("click",l),e()}catch(t){e(t)}}))},138:(t,e,n)=>{"use strict";n.d(e,{XJ:()=>s,bQ:()=>i,ww:()=>d,mF:()=>u,mN:()=>l,K4:()=>m});var a=n(739),r=n.n(a);const o=()=>{const t=new Date,e=t.getUTCFullYear(),n=t.getUTCMonth()+1,a=t.getUTCDate();return r()("Valantis_"+e+n.toString().padStart(2,0)+a.toString().padStart(2,0))},c="https://api.valantis.store:41000/",i=async(t=50,e=0)=>{let n=0;const a=t,r=e,s=c,d=o();try{const t=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json","X-Auth":d},body:JSON.stringify({action:"get_ids",params:{limit:a,offset:r}})});if(t.ok){const e=await t.json();return await e.result}if(console.log(t.statusText+" server answer "+t.body.ReadableStream),n++,n<5)return await i(a,r)}catch(t){console.error("catchID",t)}},s=async t=>{let e=0;const n=t,a=c,r=o();try{const t=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json","X-Auth":r},body:JSON.stringify({action:"get_items",params:{ids:n}})});if(t.ok){const e=await t.json();return await e.result}if(console.log(t.statusText+" server answer "+t.body.ReadableStream),e++,e<5)return await s(n)}catch(t){console.error("catchID",t)}},d=async()=>{let t=0;const e=c,n=o();try{const a=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json","X-Auth":n},body:JSON.stringify({action:"get_fields",params:{field:"brand"}})});if(a.ok){const t=await a.json();return await t}if(console.log(a.statusText+" server answer "+a.body.ReadableStream),t++,t<5)return await d()}catch(t){console.error("catchID",t)}},l=async t=>{let e=0;const n=Number(t),a=c,r=o();try{const t=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json","X-Auth":r},body:JSON.stringify({action:"filter",params:{price:n}})});if(t.ok){const e=await t.json();return await e.result}if(console.log(t.statusText+" server answer "+t.body.ReadableStream),e++,e<5)return await l(n)}catch(t){console.error("catchID",t)}},u=async t=>{let e=0;const n=t,a=c,r=o();try{const t=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json","X-Auth":r},body:JSON.stringify({action:"filter",params:{brand:n}})});if(t.ok){const e=await t.json();return await e.result}if(console.log(t.statusText+" server answer "+t.body.ReadableStream),e++,e<5)return await u(n)}catch(t){console.error("catchID",t)}},m=async t=>{let e=0;const n=t,a=c,r=o();try{const t=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json","X-Auth":r},body:JSON.stringify({action:"filter",params:{product:n}})});if(t.ok){const e=await t.json();return await e.result}if(console.log(t.statusText+" server answer "+t.body.ReadableStream),e++,e<5)return await m(n)}catch(t){console.error("catchID",t)}}},656:(t,e,n)=>{"use strict";const a=document.querySelector(".navigation-mobile"),r=document.querySelectorAll(".menu-item"),o=document.querySelector(".nav"),c=()=>{o.style.transition="transform 0.55s cubic-bezier(0.785, 0.135, 0.15, 0.86)",a.classList.toggle("clicked"),o.classList.toggle("show")};a.addEventListener("click",c),a.addEventListener("touchend",c),r.forEach((t=>{t.addEventListener("click",c)})),document.addEventListener("click",(t=>{t.target!=o&&o.classList.contains("show")&&t.target!=a&&c()}))},455:(t,e,n)=>{"use strict";n.a(t,(async(t,a)=>{try{n.d(e,{X:()=>b,j:()=>d});var r=n(919),o=n(352),c=n(583),i=t([r,c]);[r,c]=i.then?(await i)():i;let s=1;const d=()=>{(0,o.l)(),(0,c.wK)(m,u,l,p),s=1},l=()=>{s++,document.querySelector(".pagination-btn_current").textContent=s,2===s&&(0,c.v5)(),s===c.kk&&(0,c.Tq)(),c.U$.innerHTML="",(0,r.H)(c.AB,c.AB*(s-1))},u=()=>{s--,document.querySelector(".pagination-btn_current").textContent=s,1===s&&(0,c.S3)(),s===c.kk-1&&(0,c.Od)(),c.U$.innerHTML="",(0,r.H)(c.AB,c.AB*(s-1))},m=()=>{(0,c._R)(),s=1,document.querySelector(".pagination-btn_current").textContent=s,c.U$.innerHTML="",(0,r.H)(c.AB,c.AB*(s-1))},p=()=>{(0,c.rA)(),s=c.kk,document.querySelector(".pagination-btn_current").textContent=s,c.U$.innerHTML="",(0,r.H)(c.AB,c.AB*(s-1))},b=()=>{(0,c.wK)(m,u,l,p)};a()}catch(t){a(t)}}))}},o={};function c(t){var e=o[t];if(void 0!==e)return e.exports;var n=o[t]={exports:{}};return r[t].call(n.exports,n,n.exports,c),n.exports}t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=t=>{t&&t.d<1&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},c.a=(r,o,c)=>{var i;c&&((i=[]).d=-1);var s,d,l,u=new Set,m=r.exports,p=new Promise(((t,e)=>{l=e,d=t}));p[e]=m,p[t]=t=>(i&&t(i),u.forEach(t),p.catch((t=>{}))),r.exports=p,o((r=>{var o;s=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[t])return r;if(r.then){var o=[];o.d=0,r.then((t=>{c[e]=t,a(o)}),(t=>{c[n]=t,a(o)}));var c={};return c[t]=t=>t(o),c}}var i={};return i[t]=t=>{},i[e]=r,i})))(r);var c=()=>s.map((t=>{if(t[n])throw t[n];return t[e]})),d=new Promise((e=>{(o=()=>e(c)).r=0;var n=t=>t!==i&&!u.has(t)&&(u.add(t),t&&!t.d&&(o.r++,t.push(o)));s.map((e=>e[t](n)))}));return o.r?d:c()}),(t=>(t?l(p[n]=t):d(m),a(i)))),i&&i.d<0&&(i.d=0)},c.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return c.d(e,{a:e}),e},c.d=(t,e)=>{for(var n in e)c.o(e,n)&&!c.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},c.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),c(96)})();