(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{233:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(3),o=t(7),a=(t(0),t(342)),i={id:"benchmarking",title:"Benchmarking"},c={unversionedId:"benchmarking",id:"version-0.4.5/benchmarking",isDocsHomePage:!1,title:"Benchmarking",description:"Once you've downloaded the bundle:",source:"@site/versioned_docs/version-0.4.5/5.benchmarking.md",slug:"/benchmarking",permalink:"/0.4.5/benchmarking",version:"0.4.5",sidebar:"version-0.4.5/docs",previous:{title:"Snapshots",permalink:"/0.4.5/snapshots"},next:{title:"Building from source",permalink:"/0.4.5/building-from-source"}},l=[],u={toc:l};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Once you've downloaded the bundle:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Unzip it and make the files executable"),Object(a.b)("li",{parentName:"ol"},"Start the database server ",Object(a.b)("inlineCode",{parentName:"li"},"tdb")),Object(a.b)("li",{parentName:"ol"},"Now run ",Object(a.b)("inlineCode",{parentName:"li"},"tdb-bench")," with the options, given in order:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"connections")," : The number of clients you want to simulate (we recommend at least 2)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"queries")," : The number of queries you want to run. A good number is ",Object(a.b)("inlineCode",{parentName:"li"},"50000")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"packetsize")," : The key and value size. That is, if you set this to ",Object(a.b)("inlineCode",{parentName:"li"},"4"),", the key will have a size of 4 bytes and the corresponding value will also have a size of 4 bytes. A good size is ",Object(a.b)("inlineCode",{parentName:"li"},"8"),", but it's really upto you")))),Object(a.b)("p",null,"If you followed the advice above, then you should've run ",Object(a.b)("inlineCode",{parentName:"p"},"tdb-bench 2 50000 8"),". Wait for the benchmarks to be run and see the results for yourself!"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"NOTE:")," The benchmark tool is currently experimental and may show TDB to be ",Object(a.b)("em",{parentName:"p"},"slower"),"! If you've found any issues or you've got an idea - ",Object(a.b)("a",{parentName:"p",href:"https://github.com/skytable/skytable/issues/new"},"report 'em here"),"!"))}b.isMDXComponent=!0},342:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),b=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=b(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(t),m=r,d=s["".concat(i,".").concat(m)]||s[m]||p[m]||a;return t?o.a.createElement(d,c(c({ref:n},u),{},{components:t})):o.a.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);