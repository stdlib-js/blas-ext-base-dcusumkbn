"use strict";var l=function(i,v){return function(){return v||i((v={exports:{}}).exports,v),v.exports}};var k=l(function(H,d){
var p=require('@stdlib/math-base-special-abs/dist');function h(i,v,m,f,o,n){var t,c,e,u,r,a,s;if(i<=0)return o;for(f<0?t=(1-i)*f:t=0,n<0?c=(1-i)*n:c=0,e=v,a=0,s=0;s<i;s++)u=m[t],r=e+u,p(e)>=p(u)?a+=e-r+u:a+=u-r+e,e=r,o[c]=e+a,t+=f,c+=n;return o}d.exports=h
});var R=l(function(I,y){
var j=require('@stdlib/math-base-special-abs/dist');function w(i,v,m,f,o,n,t,c){var e,u,r,a,s,q,b;if(i<=0)return n;for(e=o,u=c,r=v,q=0,b=0;b<i;b++)a=m[e],s=r+a,j(r)>=j(a)?q+=r-s+a:q+=a-s+r,r=s,n[u]=r+q,e+=f,u+=t;return n}y.exports=w
});var O=l(function(J,E){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=k(),A=R();z(_,"ndarray",A);E.exports=_
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=O(),x,g=C(B(__dirname,"./native.js"));D(g)?x=F:x=g;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
