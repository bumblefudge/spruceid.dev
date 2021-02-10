(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,h=d["".concat(i,".").concat(b)]||d[b]||u[b]||l;return n?a.a.createElement(h,o(o({ref:t},c),{},{components:n})):a.a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(103)),i={id:"install",title:"Installation"},o={unversionedId:"credible/install",id:"credible/install",isDocsHomePage:!1,title:"Installation",description:"App stores",source:"@site/docs/credible/install.md",slug:"/credible/install",permalink:"/docs/credible/install",editUrl:"https://github.com/spruceid/docs/credible/install.md",version:"current",sidebar:"docs",previous:{title:"Core Concepts",permalink:"/docs/credible/concepts"},next:{title:"Authenticating to other services",permalink:"/docs/credible/authn"}},s=[{value:"App stores",id:"app-stores",children:[]},{value:"Manual Assembly (Android)",id:"manual-assembly-android",children:[]},{value:"Setup &amp; Testing",id:"setup--testing",children:[]},{value:"Seed Recovery",id:"seed-recovery",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"app-stores"},"App stores"),Object(l.b)("p",null,"Links and qR codes for app stores coming soon (future releases)."),Object(l.b)("h2",{id:"manual-assembly-android"},"Manual Assembly (Android)"),Object(l.b)("p",null,"A manual build of this project has the following dependencies:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A nightly build of the rust compiler, most easily obtained using ",Object(l.b)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"rustup"),".\nOnce installed, nightly can be enabled globally using:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ rustup default nightly \n")),Object(l.b)("p",null,"Or on a per-project level by running the following in the root of the targeted cargo project:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ rustup override set nightly\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Java 7 or higher")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://flutter.dev/docs/get-started/install"},"Flutter")," set to the dev channel.\nThis is done on *nix type systems after installation by running:"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ flutter channel dev\n$ flutter upgrade\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://developer.android.com/studio/install"},"Android Studio")," which must be installed, then opened for the first time to allow further dependencies to be installed.")),Object(l.b)("p",null,"This project also depends on two other Spruce projects first, ",Object(l.b)("a",{parentName:"p",href:"https://github.com/spruceid/didkit"},"DIDKit"),", which depends on ",Object(l.b)("a",{parentName:"p",href:"https://github.com/spruceid/ssi"},"ssi"),"."),Object(l.b)("p",null,"For now it's required to build DIDKit on the side before building this project. For more detailed instructions on how to set it up, please see the ",Object(l.b)("a",{parentName:"p",href:"/docs/didkit/install#manual"},"DIDKit Installation Manual Installation")," and the ",Object(l.b)("a",{parentName:"p",href:"/docs/didkit/ffis#android"},"DIDKit Android Bindings")," Sections."),Object(l.b)("p",null,"If all of the Spruce dependencies are in the same directory, the will correcltly resolve using relative paths, and the next two steps can be skipped"),Object(l.b)("p",null,"Otherwise, point didkit to ssi by editing the didkit/lib/Cargo.toml:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nssi = { path = "path/to/ssi", default-features = false }\ndid-key = { path = "path/to/ssi/did-key" }\ndid-tezos = { path = "path/to/ssi/did-tezos" }\ndid-web = { path = "path/to/ssi/did-web", optional = true }\n')),Object(l.b)("p",null,"And point Credible to didkit in the credible/pubspec.yaml:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  didkit:\n    path: path/to/didkit/lib/flutter\n")),Object(l.b)("p",null,"Then, to build the flutter artifacts, run one of the following\ncommands from the root of this repository:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ flutter build apk             # Android APK\n$ flutter build appbundle       # Android Appbundle\n")),Object(l.b)("p",null,"Then ",Object(l.b)("a",{parentName:"p",href:"https://developer.android.com/studio/run/emulator"},"Android Studio")," can be used to run the built application."),Object(l.b)("p",null,"Alternatively, "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ flutter run\n")),Object(l.b)("p",null,"With a running emulator will work as well."),Object(l.b)("h2",{id:"setup--testing"},"Setup & Testing"),Object(l.b)("p",null,"Coming soon."),Object(l.b)("h2",{id:"seed-recovery"},"Seed Recovery"),Object(l.b)("p",null,"Coming soon."))}p.isMDXComponent=!0}}]);