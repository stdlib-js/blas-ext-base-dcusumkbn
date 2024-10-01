"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var m=f(function(I,x){
var p=require('@stdlib/math-base-special-abs/dist');function h(r,e,c,s,t,i,O,g){var o,q,a,u,v,n,d;if(r<=0)return i;for(o=t,q=g,a=e,n=0,d=0;d<r;d++)u=c[o],v=a+u,p(a)>=p(u)?n+=a-v+u:n+=u-v+a,a=v,i[q]=a+n,o+=s,q+=O;return i}x.exports=h
});var l=f(function(J,j){
var k=require('@stdlib/strided-base-stride2offset/dist'),w=m();function z(r,e,c,s,t,i){return w(r,e,c,s,k(r,s),t,i,k(r,i)),t}j.exports=z
});var _=f(function(K,R){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=l(),B=m();A(y,"ndarray",B);R.exports=y
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=_(),b,E=D(C(__dirname,"./native.js"));F(E)?b=G:b=E;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
