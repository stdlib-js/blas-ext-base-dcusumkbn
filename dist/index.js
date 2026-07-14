"use strict";var m=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(s){throw (a=0, s)}};};var b=m(function(I,l){
var p=require('@stdlib/math-base-special-abs/dist');function h(e,a,s,n,c,u,k,g){var t,o,r,i,f,q,v;if(e<=0)return u;if(t=c,o=g,r=a,r===0)for(v=0;v<e&&(i=s[t],i===0);v++)r+=i,u[o]=r,t+=n,o+=k;else v=0;for(q=0;v<e;v++)i=s[t],f=r+i,p(r)>=p(i)?q+=r-f+i:q+=i-f+r,r=f,u[o]=r+q,t+=n,o+=k;return u}l.exports=h
});var y=m(function(J,j){
var x=require('@stdlib/strided-base-stride2offset/dist'),w=b();function z(e,a,s,n,c,u){return w(e,a,s,n,x(e,n),c,u,x(e,u)),c}j.exports=z
});var E=m(function(K,_){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=y(),B=b();A(R,"ndarray",B);_.exports=R
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=E(),d,O=D(C(__dirname,"./native.js"));F(O)?d=G:d=O;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
