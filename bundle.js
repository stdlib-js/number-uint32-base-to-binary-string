// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).toBinaryString=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;var c=e,f=function(r,t,e){var c,f,v,g;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((f="value"in e)&&(u.call(r,t)||l.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=c):r[t]=e.value),v="get"in e,g="set"in e,f&&(v||g))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&o&&o.call(r,t,e.get),g&&a&&a.call(r,t,e.set),r},v=t()?c:f;var g=function(r,t,e){v(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})};var s=function(r){return"number"==typeof r};var m=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var p=function(){return m&&"symbol"==typeof Symbol.toStringTag},b=Object.prototype.toString,y=b;var d=function(r){return y.call(r)},h=Object.prototype.hasOwnProperty;var _=function(r,t){return null!=r&&h.call(r,t)},w="function"==typeof Symbol?Symbol.toStringTag:"",j=_,O=w,S=b;var T=d,P=function(r){var t,e,n;if(null==r)return S.call(r);e=r[O],t=j(r,O);try{r[O]=void 0}catch(t){return S.call(r)}return n=S.call(r),t?r[O]=e:delete r[O],n},E=p()?P:T,I=Number,V=I.prototype.toString;var N=E,x=I,F=function(r){try{return V.call(r),!0}catch(r){return!1}},A=p();var G=function(r){return"object"==typeof r&&(r instanceof x||(A?F(r):"[object Number]"===N(r)))},R=s,k=G;var M=g,Y=function(r){return R(r)||k(r)},B=G;M(Y,"isPrimitive",s),M(Y,"isObject",B);var C=Y,q=Number.POSITIVE_INFINITY,z=I.NEGATIVE_INFINITY,D=Math.floor,H=D;var J=q,K=z,L=function(r){return H(r)===r};var Q=function(r){return r<J&&r>K&&L(r)},U=C.isPrimitive,W=Q;var X=function(r){return U(r)&&W(r)},Z=C.isObject,$=Q;var rr=function(r){return Z(r)&&$(r.valueOf())},tr=X,er=rr;var nr=g,ir=function(r){return tr(r)||er(r)},or=rr;nr(ir,"isPrimitive",X),nr(ir,"isObject",or);var ar=ir.isPrimitive;var ur=function(r){return ar(r)&&r>=0},lr=ir.isObject;var cr=function(r){return lr(r)&&r.valueOf()>=0},fr=ur,vr=cr;var gr=g,sr=function(r){return fr(r)||vr(r)},mr=cr;gr(sr,"isPrimitive",ur),gr(sr,"isObject",mr);var pr=sr;var br=function(r){return"string"==typeof r},yr=String.prototype.valueOf;var dr=E,hr=function(r){try{return yr.call(r),!0}catch(r){return!1}},_r=p();var wr=function(r){return"object"==typeof r&&(r instanceof String||(_r?hr(r):"[object String]"===dr(r)))},jr=br,Or=wr;var Sr=g,Tr=function(r){return jr(r)||Or(r)},Pr=wr;Sr(Tr,"isPrimitive",br),Sr(Tr,"isObject",Pr);var Er=Tr,Ir=9007199254740991,Vr=pr.isPrimitive,Nr=Er.isPrimitive;var xr=function(r,t){var e,n;if(!Nr(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Vr(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(0===r.length||0===t)return"";if(r.length*t>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(e="",n=t;1==(1&n)&&(e+=r),0!==(n>>>=1);)r+=r;return e},Fr=Math.ceil,Ar=pr.isPrimitive,Gr=Er.isPrimitive,Rr=xr,kr=Fr,Mr=Ir;var Yr=function(r,t,e){var n,i;if(!Gr(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Ar(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(arguments.length>2){if(!Gr(i=e))throw new TypeError("invalid argument. Third argument must be a string. Value: `"+i+"`.");if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(t>Mr)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");return(n=(t-r.length)/i.length)<=0?r:(n=kr(n),Rr(i,n)+r)},Br=D;var Cr=Yr,qr=function(r){var t,e,n="";for(t=32;r>0&&t;)n=(e=r/2)===(r=Br(e))?"0"+n:"1"+n,t-=1;return n};return function(r){var t;return t=qr(r),t=Cr(t,32,"0")}}));
//# sourceMappingURL=bundle.js.map
