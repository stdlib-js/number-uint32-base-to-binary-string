// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(e){return"string"==typeof e}var s=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,m,"$1e"),n=f.call(n,v,"e"),n=f.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,g,"e+0$1"),n=f.call(n,d,"e-0$1"),e.alternate&&(n=f.call(n,h,"$1."),n=f.call(n,b,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===p.call(e.specifier)?p.call(n):l.call(n)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function S(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_(n):_(n)+e}var E=String.fromCharCode,j=isNaN,x=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,a,o,s,l,p,f;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,p=0;p<e.length;p++)if(u(n=e[p]))s+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,j(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!j(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),s+=n.arg||"",l+=1}return s}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,n,i;for(t=[],i=0,n=I.exec(e);n;)(r=e.slice(i,I.lastIndex-n[0].length)).length&&t.push(r),t.push(O(n)),i=I.lastIndex,n=I.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function F(e){return"string"==typeof e}function P(e){var r,t,n;if(!F(e))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=V(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var N=Object.prototype,$=N.toString,A=N.__defineGetter__,R=N.__defineSetter__,C=N.__lookupGetter__,G=N.__lookupSetter__,Z=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===$.call(e))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&A&&A.call(e,r,t.get),o&&R&&R.call(e,r,t.set),e};function W(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(e){return"number"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,z="function"==typeof Symbol?Symbol:void 0,B="function"==typeof z?z.toStringTag:"",q=U()?function(e){var r,t,n,i,a;if(null==e)return X.call(e);t=e[B],a=B,r=null!=(i=e)&&Y.call(i,a);try{e[B]=void 0}catch(r){return X.call(e)}return n=X.call(e),r?e[B]=t:delete e[B],n}:function(e){return X.call(e)},D=Number,H=D.prototype.toString,J=U();function K(e){return"object"==typeof e&&(e instanceof D||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Number]"===q(e)))}function Q(e){return L(e)||K(e)}W(Q,"isPrimitive",L),W(Q,"isObject",K);var ee=Number.POSITIVE_INFINITY,re=D.NEGATIVE_INFINITY,te=Math.floor;function ne(e){return e<ee&&e>re&&te(r=e)===r;var r}function ie(e){return L(e)&&ne(e)}function ae(e){return K(e)&&ne(e.valueOf())}function oe(e){return ie(e)||ae(e)}function ce(e){return ie(e)&&e>=0}function ue(e){return ae(e)&&e.valueOf()>=0}function se(e){return ce(e)||ue(e)}function le(e){return"string"==typeof e}W(oe,"isPrimitive",ie),W(oe,"isObject",ae),W(se,"isPrimitive",ce),W(se,"isObject",ue);var pe=String.prototype.valueOf,fe=U();function ge(e){return"object"==typeof e&&(e instanceof String||(fe?function(e){try{return pe.call(e),!0}catch(e){return!1}}(e):"[object String]"===q(e)))}function de(e){return le(e)||ge(e)}W(de,"isPrimitive",le),W(de,"isObject",ge);var he=9007199254740991,be=void 0!==String.prototype.repeat,ye=String.prototype.repeat,ve=be?function(e,r){return ye.call(e,r)}:function(e,r){var t,n;if(0===e.length||0===r)return"";for(t="",n=r;1==(1&n)&&(t+=e),0!=(n>>>=1);)e+=e;return t},me=Math.ceil;function we(e,r,t){var n=(r-e.length)/t.length;return n<=0?e:(n=me(n),ve(t,n)+e)}return function(e){var r;return r=function(e){var r,t,n="";for(r=32;e>0&&r;)n=(t=e/2)===(e=te(t))?"0"+n:"1"+n,r-=1;return n}(e),r=function(e,r,t){var n;if(!le(e))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",e));if(!ce(r))throw new TypeError(P("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(arguments.length>2){if(!le(n=t))throw new TypeError(P("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else n=" ";if(r>he)throw new RangeError(P("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r));return we(e,r,n)}(r,32,"0"),r}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).toBinaryString=r();
//# sourceMappingURL=index.js.map
