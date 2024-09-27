// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";function t(e,r,t,n,d,i,a,m){var o,f,l,p,j,u,b;if(e<=0)return i;for(o=d,f=m,l=r,u=0,b=0;b<e;b++)j=l+(p=t[o]),s(l)>=s(p)?u+=l-j+p:u+=p-j+l,l=j,i[f]=l+u,o+=n,f+=a;return i}function n(e,s,n,d,i,a){return t(e,s,n,d,r(e,d),i,a,r(e,a)),i}e(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
