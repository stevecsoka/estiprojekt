!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=window.ctFrontend},function(t,e,n){"use strict";n.r(e);var r=n(0);function o(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(t,e)||i(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={},d=function(t){return f[t]?new Promise((function(e){e(f[t]),window.ct_customizer_localizations||(f[t]=f[t].clone())})):new Promise((function(e){return fetch(t).then((function(n){e(n),window.ct_customizer_localizations||(f[t]=n.clone())}))}))},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if((t=s({el:null,action:null},t)).el&&t.action&&!t.el.classList.contains("ct-loading")){var e=parseInt(t.el.dataset.page,10);if(("prev"!==t.action||1!==e)&&!(t.el.querySelectorAll(".ct-container > a").length<4&&1===e||t.el.dataset.page.indexOf("last")>-1&&"next"===t.action)){t.el.classList.add("ct-loading");var n="prev"===t.action?e-1:e+1;Promise.all([new Promise((function(e){t.el.classList.add("ct-leave-active"),requestAnimationFrame((function(){t.el.classList.remove("ct-leave-active"),t.el.classList.add("ct-leave"),setTimeout((function(){return e()}),650)}))})),d("".concat(ct_localizations.ajax_url,"?action=blocksy_get_trending_posts&page=").concat(n)).then((function(t){return t.json()}))]).then((function(e){var i=a(e,2),c=(i[0],i[1]),l=c.success,s=c.data;if(l){var u=s.posts,f=u.is_last_page,d=u.posts;t.el.dataset.page="".concat(n).concat(f?":last":""),o(t.el.querySelectorAll("a")).map((function(t){return t.remove()})),d.map((function(e){return t.el.insertAdjacentHTML("beforeend",'<a href="'.concat(e.url,'">\n                        ').concat(e.image,'\n                        <span class="ct-item-title">\n                         ').concat(e.title,"\n                        </span>\n                    </a>"))})),setTimeout((function(){t.el.classList.remove("ct-leave"),t.el.classList.add("ct-enter-active"),requestAnimationFrame((function(){t.el.classList.remove("ct-enter-active"),t.el.classList.add("ct-active"),setTimeout((function(){t.el.classList.remove("ct-active"),t.el.classList.remove("ct-loading")}),650)}))}),50),Object(r.markImagesAsLoaded)(t.el)}}))}}};Object(r.registerDynamicChunk)("blocksy_ext_trending",{mount:function(t,e){e.event;var n=t.closest("[data-page]");t.classList.contains("ct-arrow-left")&&p({el:n,action:"prev"}),t.classList.contains("ct-arrow-right")&&p({el:n,action:"next"})}})}]);