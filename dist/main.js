!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=function(){const e=document.querySelector("#Main"),t=document.createElement("div"),r=document.createElement("h1");function n(e,r){const n=document.createElement("p");n.classList.add("hero-paragraph"),n.textContent=`${e}: ${r}`,t.appendChild(n)}r.classList.add("hero-h1"),r.textContent="Food Menu",t.appendChild(r),n("Tasty Chicken Burger","$23.50"),n("Grilled Steak","$29.95"),n("Crisy Pork Delight","$14.95"),n("Large fries","$5.95"),n("Portugese Chicken Burger","$19.95"),n("Chicken Schnitzel Burger","$19.95"),e.appendChild(t)};var a=function(){const e=document.querySelector("#Main"),t=document.createElement("div"),r=document.createElement("h1");r.classList.add("hero-h1"),r.textContent="Contact Us",t.appendChild(r);const n=document.createElement("p");n.classList.add("hero-paragraph"),n.textContent="Email: nathanjreidy@gmail.com",t.appendChild(n),e.appendChild(t)};function o(){d.style.display="none",s.innerHTML=""}(function(){const e=document.querySelector("#Header"),t=document.createElement("div");t.classList.add("container-flex"),e.appendChild(t);const r=document.createElement("div");r.classList.add("hero-content"),t.appendChild(r);const n=document.createElement("h1");n.classList.add("hero-h1"),n.textContent="The best burgers in Sydney, delivered to your door in under 30 minutes.",n.style="-webkit-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0",r.appendChild(n);const a=document.createElement("p");a.classList.add("hero-paragraph"),a.textContent="Crispy. Juicy. Freshly grilled.",a.style="-webkit-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0",r.appendChild(a);const o=document.createElement("div");o.classList.add("button-wrapper"),o.style="-webkit-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0";const d=document.createElement("a");d.setAttribute("href","#"),d.classList.add("button"),d.innerText="Place an Order",d.style="text-decoration:none;",d.style.color="white",o.appendChild(d),r.appendChild(o);const s=document.createElement("div");s.classList.add("hero-image-wrap"),t.appendChild(s);const c=document.createElement("img");c.src="images/Hero-Image.png",c.classList.add("hero-image"),s.appendChild(c)})();const d=document.querySelector("#Header"),s=document.querySelector("#Main"),c=document.querySelector("#home-btn"),l=document.querySelector("#order-btn"),i=document.querySelector("#contact-btn");c.addEventListener("click",()=>{o(),d.style.display="block"}),l.addEventListener("click",()=>{o(),n()}),i.addEventListener("click",()=>{o(),a()})}]);