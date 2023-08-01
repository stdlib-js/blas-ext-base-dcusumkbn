// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";function n(r,n,t,s,a,i){var d,o,f,m,l,u,p;if(r<=0)return a;for(d=s<0?(1-r)*s:0,o=i<0?(1-r)*i:0,f=n,u=0,p=0;p<r;p++)l=f+(m=t[d]),e(f)>=e(m)?u+=f-l+m:u+=m-l+f,f=l,a[o]=f+u,d+=s,o+=i;return a}function t(r,n,t,s,a,i,d,o){var f,m,l,u,p,j,b;if(r<=0)return i;for(f=a,m=o,l=n,j=0,b=0;b<r;b++)p=l+(u=t[f]),e(l)>=e(u)?j+=l-p+u:j+=u-p+l,l=p,i[m]=l+j,f+=s,m+=d;return i}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
