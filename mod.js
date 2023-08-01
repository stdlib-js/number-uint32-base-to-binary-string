// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,t=Object.prototype,n=t.toString,i=t.__defineGetter__,a=t.__defineSetter__,o=t.__lookupGetter__,c=t.__lookupSetter__;var u=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,u){var s,l,p,f;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof u||null===u||"[object Array]"===n.call(u))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+u+"`.");if((l="value"in u)&&(o.call(e,r)||c.call(e,r)?(s=e.__proto__,e.__proto__=t,delete e[r],e[r]=u.value,e.__proto__=s):e[r]=u.value),p="get"in u,f="set"in u,l&&(p||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,r,u.get),f&&a&&a.call(e,r,u.set),e};function s(e,r,t){u(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(e){return"number"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function f(){return p&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var h="function"==typeof Symbol?Symbol.toStringTag:"";var m=f()?function(e){var r,t,n,i,a;if(null==e)return g.call(e);t=e[h],a=h,r=null!=(i=e)&&d.call(i,a);try{e[h]=void 0}catch(r){return g.call(e)}return n=g.call(e),r?e[h]=t:delete e[h],n}:function(e){return g.call(e)},v=Number,b=v.prototype.toString;var w=f();function y(e){return"object"==typeof e&&(e instanceof v||(w?function(e){try{return b.call(e),!0}catch(e){return!1}}(e):"[object Number]"===m(e)))}function _(e){return l(e)||y(e)}s(_,"isPrimitive",l),s(_,"isObject",y);var E=Number.POSITIVE_INFINITY,S=v.NEGATIVE_INFINITY,x=Math.floor;function T(e){return e<E&&e>S&&x(r=e)===r;var r}function j(e){return l(e)&&T(e)}function V(e){return y(e)&&T(e.valueOf())}function k(e){return j(e)||V(e)}function O(e){return j(e)&&e>=0}function I(e){return V(e)&&e.valueOf()>=0}function F(e){return O(e)||I(e)}function P(e){return"string"==typeof e}s(k,"isPrimitive",j),s(k,"isObject",V),s(F,"isPrimitive",O),s(F,"isObject",I);var N=String.prototype.valueOf;var $=f();function A(e){return"object"==typeof e&&(e instanceof String||($?function(e){try{return N.call(e),!0}catch(e){return!1}}(e):"[object String]"===m(e)))}function R(e){return P(e)||A(e)}s(R,"isPrimitive",P),s(R,"isObject",A);function C(e){return"number"==typeof e}function G(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Z(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+G(i):G(i)+e,n&&(e="-"+e)),e}var W=String.prototype.toLowerCase,L=String.prototype.toUpperCase;function M(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!C(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=Z(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=Z(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===L.call(e.specifier)?L.call(t):W.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function U(e){return"string"==typeof e}var X=Math.abs,Y=String.prototype.toLowerCase,z=String.prototype.toUpperCase,q=String.prototype.replace,B=/e\+(\d)$/,D=/e-(\d)$/,H=/^(\d+)$/,J=/^(\d+)e/,K=/\.0$/,Q=/\.0*e/,ee=/(\..*[^0])0*e/;function re(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!C(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":X(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=q.call(t,ee,"$1e"),t=q.call(t,Q,"e"),t=q.call(t,K,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=q.call(t,B,"e+0$1"),t=q.call(t,D,"e-0$1"),e.alternate&&(t=q.call(t,H,"$1."),t=q.call(t,J,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===z.call(e.specifier)?z.call(t):Y.call(t)}function te(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ne(e,r,t){var n=r-e.length;return n<0?e:e=t?e+te(n):te(n)+e}var ie=String.fromCharCode,ae=isNaN,oe=Array.isArray;function ce(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ue(e){var r,t,n,i,a,o,c,u,s;if(!oe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,u=0;u<e.length;u++)if(U(n=e[u]))o+=n;else{if(r=void 0!==n.precision,!(n=ce(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,ae(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,ae(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=M(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!ae(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ae(a)?String(n.arg):ie(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=re(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Z(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ne(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var se=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function le(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function pe(e){var r,t,n,i;for(t=[],i=0,n=se.exec(e);n;)(r=e.slice(i,se.lastIndex-n[0].length)).length&&t.push(r),t.push(le(n)),i=se.lastIndex,n=se.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function fe(e){return"string"==typeof e}function ge(e){var r,t,n;if(!fe(e))throw new TypeError(ge("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=pe(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return ue.apply(null,t)}function de(e,r){var t,n;if(!P(e))throw new TypeError(ge("invalid argument. First argument must be a string. Value: `%s`.",e));if(!O(r))throw new TypeError(ge("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(0===e.length||0===r)return"";if(e.length*r>9007199254740991)throw new RangeError(ge("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e.length*r));for(t="",n=r;1==(1&n)&&(t+=e),0!==(n>>>=1);)e+=e;return t}var he=Math.ceil;function me(e){var r;return r=function(e){var r,t,n="";for(r=32;e>0&&r;)n=(t=e/2)===(e=x(t))?"0"+n:"1"+n,r-=1;return n}(e),r=function(e,r,t){var n,i;if(!P(e))throw new TypeError(ge("invalid argument. First argument must be a string. Value: `%s`.",e));if(!O(r))throw new TypeError(ge("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(arguments.length>2){if(!P(i=t))throw new TypeError(ge("invalid argument. Third argument must be a string. Value: `%s`.",i));if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(r>9007199254740991)throw new RangeError(ge("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r));return(n=(r-e.length)/i.length)<=0?e:de(i,n=he(n))+e}(r,32,"0"),r}export{me as default};
//# sourceMappingURL=mod.js.map
