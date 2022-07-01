// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;var c=e,f=function(r,t,e){var c,f,v,g;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((f="value"in e)&&(u.call(r,t)||l.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=c):r[t]=e.value),v="get"in e,g="set"in e,f&&(v||g))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&o&&o.call(r,t,e.get),g&&a&&a.call(r,t,e.set),r},v=t()?c:f;var g=function(r,t,e){v(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})};var m=function(r){return"number"==typeof r};var s=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var p=function(){return s&&"symbol"==typeof Symbol.toStringTag},b=Object.prototype.toString,y=b;var d=function(r){return y.call(r)},h=Object.prototype.hasOwnProperty;var _=function(r,t){return null!=r&&h.call(r,t)},w="function"==typeof Symbol?Symbol.toStringTag:"",j=_,O=w,S=b;var P=d,T=function(r){var t,e,n;if(null==r)return S.call(r);e=r[O],t=j(r,O);try{r[O]=void 0}catch(t){return S.call(r)}return n=S.call(r),t?r[O]=e:delete r[O],n},E=p()?T:P,I=Number,V=I.prototype.toString;var N=E,x=I,F=function(r){try{return V.call(r),!0}catch(r){return!1}},A=p();var G=function(r){return"object"==typeof r&&(r instanceof x||(A?F(r):"[object Number]"===N(r)))},R=m,k=G;var M=g,Y=function(r){return R(r)||k(r)},C=G;M(Y,"isPrimitive",m),M(Y,"isObject",C);var q=Y,z=Number.POSITIVE_INFINITY,B=I.NEGATIVE_INFINITY,D=Math.floor,H=D;var J=z,K=B,L=function(r){return H(r)===r};var Q=function(r){return r<J&&r>K&&L(r)},U=q.isPrimitive,W=Q;var X=function(r){return U(r)&&W(r)},Z=q.isObject,$=Q;var rr=function(r){return Z(r)&&$(r.valueOf())},tr=X,er=rr;var nr=g,ir=function(r){return tr(r)||er(r)},or=rr;nr(ir,"isPrimitive",X),nr(ir,"isObject",or);var ar=ir.isPrimitive;var ur=function(r){return ar(r)&&r>=0},lr=ir.isObject;var cr=function(r){return lr(r)&&r.valueOf()>=0},fr=ur,vr=cr;var gr=g,mr=function(r){return fr(r)||vr(r)},sr=cr;gr(mr,"isPrimitive",ur),gr(mr,"isObject",sr);var pr=mr;var br=function(r){return"string"==typeof r},yr=String.prototype.valueOf;var dr=E,hr=function(r){try{return yr.call(r),!0}catch(r){return!1}},_r=p();var wr=function(r){return"object"==typeof r&&(r instanceof String||(_r?hr(r):"[object String]"===dr(r)))},jr=br,Or=wr;var Sr=g,Pr=function(r){return jr(r)||Or(r)},Tr=wr;Sr(Pr,"isPrimitive",br),Sr(Pr,"isObject",Tr);var Er=Pr,Ir=pr.isPrimitive,Vr=Er.isPrimitive;var Nr=function(r,t){var e,n;if(!Vr(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Ir(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(0===r.length||0===t)return"";if(r.length*t>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(e="",n=t;1==(1&n)&&(e+=r),0!==(n>>>=1);)r+=r;return e},xr=Math.ceil,Fr=pr.isPrimitive,Ar=Er.isPrimitive,Gr=Nr,Rr=xr;var kr=function(r,t,e){var n,i;if(!Ar(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Fr(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(arguments.length>2){if(!Ar(i=e))throw new TypeError("invalid argument. Third argument must be a string. Value: `"+i+"`.");if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(t>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");return(n=(t-r.length)/i.length)<=0?r:(n=Rr(n),Gr(i,n)+r)};function Mr(r){var t;return t=function(r){var t,e,n="";for(t=32;r>0&&t;)n=(e=r/2)===(r=D(e))?"0"+n:"1"+n,t-=1;return n}(r),t=kr(t,32,"0")}export{Mr as default};
//# sourceMappingURL=mod.js.map
