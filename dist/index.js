"use strict";var m=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var b=m(function(I,l){
var p=require('@stdlib/math-base-special-abs/dist');function h(r,a,o,v,c,u,k,g){var n,t,e,i,f,q,s;if(r<=0)return u;if(n=c,t=g,e=a,e===0)for(s=0;s<r&&(i=o[n],i===0);s++)u[t]=e+i,n+=v,t+=k;else s=0;for(q=0;s<r;s++)i=o[n],f=e+i,p(e)>=p(i)?q+=e-f+i:q+=i-f+e,e=f,u[t]=e+q,n+=v,t+=k;return u}l.exports=h
});var y=m(function(J,j){
var x=require('@stdlib/strided-base-stride2offset/dist'),w=b();function z(r,a,o,v,c,u){return w(r,a,o,v,x(r,v),c,u,x(r,u)),c}j.exports=z
});var E=m(function(K,_){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=y(),B=b();A(R,"ndarray",B);_.exports=R
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=E(),d,O=D(C(__dirname,"./native.js"));F(O)?d=G:d=O;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
