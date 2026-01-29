"use strict";var m=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var b=m(function(I,l){
var p=require('@stdlib/math-base-special-abs/dist');function h(e,a,o,v,c,u,k,g){var n,t,r,i,f,q,s;if(e<=0)return u;if(n=c,t=g,r=a,r===0)for(s=0;s<e&&(i=o[n],i===0);s++)r+=i,u[t]=r,n+=v,t+=k;else s=0;for(q=0;s<e;s++)i=o[n],f=r+i,p(r)>=p(i)?q+=r-f+i:q+=i-f+r,r=f,u[t]=r+q,n+=v,t+=k;return u}l.exports=h
});var y=m(function(J,j){
var x=require('@stdlib/strided-base-stride2offset/dist'),w=b();function z(e,a,o,v,c,u){return w(e,a,o,v,x(e,v),c,u,x(e,u)),c}j.exports=z
});var E=m(function(K,_){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=y(),B=b();A(R,"ndarray",B);_.exports=R
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=E(),d,O=D(C(__dirname,"./native.js"));F(O)?d=G:d=O;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
