(()=>{"use strict";function r(r,n,e){for(var t=new Array(e),u=0,c=n;u<e;)t[u]=r[c],u=u+1|0,c=c+1|0;return t}function n(e,t){for(;;){var u=t,c=e,i=c.length,o=0===i?1:i,a=o-u.length|0;if(0===a)return c.apply(null,u);if(a>=0)return function(r,e){return function(t){return n(r,e.concat([t]))}}(c,u);t=r(u,o,0|-a),e=c.apply(null,r(u,0,o))}}function e(r,e){var t=r.length;if(1===t)return r(e);switch(t){case 1:return r(e);case 2:return function(n){return r(e,n)};case 3:return function(n,t){return r(e,n,t)};case 4:return function(n,t,u){return r(e,n,t,u)};case 5:return function(n,t,u,c){return r(e,n,t,u,c)};case 6:return function(n,t,u,c,i){return r(e,n,t,u,c,i)};case 7:return function(n,t,u,c,i,o){return r(e,n,t,u,c,i,o)};default:return n(r,[e])}}function t(r){return 2===r.length?r:function(e,t){return function(r,e,t){var u=r.length;if(2===u)return r(e,t);switch(u){case 1:return n(r(e),[t]);case 2:return r(e,t);case 3:return function(n){return r(e,t,n)};case 4:return function(n,u){return r(e,t,n,u)};case 5:return function(n,u,c){return r(e,t,n,u,c)};case 6:return function(n,u,c,i){return r(e,t,n,u,c,i)};case 7:return function(n,u,c,i,o){return r(e,t,n,u,c,i,o)};default:return n(r,[e,t])}}(r,e,t)}}function u(r){return r>=65?r>=97?r>=123?-1:r-87|0:r>=91?-1:r-55|0:r>57||r<48?-1:r-48|0}function c(r){var n=function(r){var n=1,e=2,t=0;switch(r.charCodeAt(t)){case 43:t=t+1|0;break;case 44:break;case 45:n=-1,t=t+1|0}if("0"===r[t]){var u=r.charCodeAt(t+1|0);if(u>=89)if(u>=111){if(u<121)switch(u){case 111:e=0,t=t+2|0;break;case 117:t=t+2|0;break;case 112:case 113:case 114:case 115:case 116:case 118:case 119:break;case 120:e=1,t=t+2|0}}else 98===u&&(e=3,t=t+2|0);else if(66!==u){if(u>=79)switch(u){case 79:e=0,t=t+2|0;break;case 85:t=t+2|0;break;case 80:case 81:case 82:case 83:case 84:case 86:case 87:break;case 88:e=1,t=t+2|0}}else e=3,t=t+2|0}return[t,n,e]}(r),e=n[0],t=function(r){switch(r){case 0:return 8;case 1:return 16;case 2:return 10;case 3:return 2}}(n[2]),c=r.length,i=u(e<c?r.charCodeAt(e):0);if(i<0||i>=t)throw{RE_EXN_ID:"Failure",_1:"int_of_string",Error:new Error};var o=n[1]*function(n,e){for(;;){var i=e,o=n;if(i===c)return o;var a=r.charCodeAt(i);if(95!==a){var f=u(a);if(f<0||f>=t)throw{RE_EXN_ID:"Failure",_1:"int_of_string",Error:new Error};var s=t*o+f;if(s>4294967295)throw{RE_EXN_ID:"Failure",_1:"int_of_string",Error:new Error};e=i+1|0,n=s}else e=i+1|0}}(i,e+1|0),a=0|o;if(10===t&&o!==a)throw{RE_EXN_ID:"Failure",_1:"int_of_string",Error:new Error};return a}var i=function(r){throw{RE_EXN_ID:"Failure",_1:r,Error:new Error}},o=i;function a(r){return void 0===r?{BS_PRIVATE_NESTED_SOME_NONE:0}:null!==r&&void 0!==r.BS_PRIVATE_NESTED_SOME_NONE?{BS_PRIVATE_NESTED_SOME_NONE:r.BS_PRIVATE_NESTED_SOME_NONE+1|0}:r}function f(r,n){return function(r,n){if(!(n<0))for(var e=r,t=n;;){var u=t,c=e;if(!c)return;if(0===u)return a(c.hd);t=u-1|0,e=c.tl}}(n,r)}var s,E={get:f,nth:f},_=function(r){if(void 0!==r)return function(r){if(null===r||void 0===r.BS_PRIVATE_NESTED_SOME_NONE)return r;var n=r.BS_PRIVATE_NESTED_SOME_NONE;return 0===n?void 0:{BS_PRIVATE_NESTED_SOME_NONE:n-1|0}}(r);throw{RE_EXN_ID:"Not_found",Error:new Error}},l=function(r,n){return n.split(r)},h=function(r,n){return n.map(1===(t=r).length?t:function(r){return e(t,r)});var t},N=function(r,n){return n.map(t(r))},v=function(r,n,e){return e.reduce(t(r),n)},d=require("readline").createInterface({input:process.stdin,output:process.stdout}),S=[];s=function(r){var n=function(n){return h(c,l(" ",e(_,E.get(n,r))))},t=n(0),u=n(1),i=v((function(r,n){return[r[0]+n[0]|0,r[1]+n[1]|0]}),[0,0],N((function(r,n){var e,t;switch((e=r)<(t=function(r,n){if(n<0||n>=r.length)throw{RE_EXN_ID:"Invalid_argument",_1:"index out of bounds",Error:new Error};return r[n]}(u,n))?-1:e===t?0:1){case-1:return[0,1];case 0:return[0,0];case 1:return[1,0];default:return o("This shouldn't be possible!")}}),t)),a=String(i[0]),f=String(i[1]);console.log(a+" "+f)},d.on("line",(function(r){S.push(r)})),d.on("close",(function(r){e(s,function(r){for(var n=r.length-1|0,e=0;;){var t=e,u=n;if(u<0)return t;e={hd:r[u],tl:t},n=u-1|0}}(S))}))})();