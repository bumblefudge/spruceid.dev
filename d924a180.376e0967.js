(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{105:function(e,t,i){"use strict";i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return m}));var r=i(0),n=i.n(r);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},b=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(i),u=r,m=b["".concat(l,".").concat(u)]||b[u]||d[u]||a;return i?n.a.createElement(m,o(o({ref:t},s),{},{components:i})):n.a.createElement(m,o({ref:t},s))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=i[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},155:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/didkithead-52d41d35622b77d7662965794aa33eff.png"},93:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return c})),i.d(t,"toc",(function(){return s})),i.d(t,"default",(function(){return b}));var r=i(3),n=i(7),a=(i(0),i(105)),l=["components"],o={id:"intro",title:"Introducing DIDKit",hide_title:!0,sidebar_label:"Introduction",slug:"/didkit/"},c={unversionedId:"didkit/intro",id:"didkit/intro",isDocsHomePage:!1,title:"Introducing DIDKit",description:"DIDKit header",source:"@site/docs/didkit/intro.md",slug:"/didkit/",permalink:"/docs/didkit/",editUrl:"https://github.com/spruceid/docs/didkit/intro.md",version:"current",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Privacy Policy",permalink:"/docs/privacy-policy"},next:{title:"Terminology",permalink:"/docs/didkit/terminology"}},s=[{value:"Quickstart",id:"quickstart",children:[]},{value:"Features",id:"features",children:[]},{value:"Roadmap",id:"roadmap",children:[]}],p={toc:s};function b(e){var t=e.components,o=Object(n.a)(e,l);return Object(a.b)("wrapper",Object(r.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{alt:"DIDKit header",src:i(155).default})),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.docker.com/"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Docker-19.03.x-blue",alt:null}))," ",Object(a.b)("a",{parentName:"p",href:"https://www.rust-lang.org/"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Rust-v1.51.0-orange",alt:null}))," ",Object(a.b)("a",{parentName:"p",href:"https://www.github.com/spruceid/ssi"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/badge/ssi-v0.1-green",alt:null}))," ",Object(a.b)("a",{parentName:"p",href:"https://github.com/spruceid/didkit/blob/main/LICENSE"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/badge/License-Apache--2.0-green",alt:null}))," ",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/sprucesystems"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/twitter/follow/sprucesystems?label=Follow&style=social",alt:null}))," "),Object(a.b)("p",null,"DIDKit provides Verifiable Credential and Decentralized Identifier\nfunctionality across different platforms. It was written primarily in Rust due\nto Rust's expressive type system, memory safety, simple dependency web, and\nsuitability across different platforms including embedded systems."),Object(a.b)("p",null,"It supports the following high level use cases, with more to be added shortly:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/"},"W3C Verifiable Credentials")," with\nJSON-LD Proofs: issuance, presentation, and verification."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/"},"W3C Decentralized Identifiers"),": resolution\nfor did-key, did-web, and one layer of did-tezos.")),Object(a.b)("p",null,"DIDKit ships with a command line tool and HTTP service. The HTTP service aims\nto comply with ",Object(a.b)("a",{parentName:"p",href:"https://w3c-ccg.github.io/vc-http-api/"},"HTTP-VC-API"),"."),Object(a.b)("p",null,"Through cross-compilation and linking through C ABIs, DIDKit also supports\nother platforms through SDKs for:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/tree/main/lib/cbindings"},"C/Objective-C")," (C\nABI)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/tree/main/lib/java"},"Java")," (via JNI, see an\n",Object(a.b)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/tree/example-java/examples/java-springboot"},"example project using Spring Boot"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/tree/main/lib/android"},"Android")," (via Java)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/tree/main/lib/flutter"},"Flutter")," (via Android\nand iOS)"),Object(a.b)("li",{parentName:"ul"},"(",Object(a.b)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/pull/17"},"WIP"),") JavaScript/ES6 (npm-linked\nlibrary)"),Object(a.b)("li",{parentName:"ul"},"(",Object(a.b)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/pull/15"},"WIP"),") WASM (cross-compiled using\n",Object(a.b)("a",{parentName:"li",href:"https://github.com/rustwasm/wasm-pack"},"wasm-pack"),")"),Object(a.b)("li",{parentName:"ul"},"(Future) PHP, Python, Ruby/Rails, Go, C#, C++")),Object(a.b)("p",null,"Although support across different platforms is in its early stages, we will\ncontinue to add new platforms and improve interface ergonomics over time. For\nplatforms that do not currently have SDK support, the HTTP API and command line\ntools are readily integrated."),Object(a.b)("h2",{id:"quickstart"},"Quickstart"),Object(a.b)("p",null,"In this quickstart, we will build and run the command line tool along with the\nHTTP server."),Object(a.b)("p",null,"Prerequisites:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"GNU/Linux or MacOS, not yet tested on Windows."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"Rust nightly")," (",Object(a.b)("inlineCode",{parentName:"li"},"rustup default\nnightly"),")")),Object(a.b)("p",null,"Building ",Object(a.b)("inlineCode",{parentName:"p"},"didkit")," (we are working on crate packaging):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"$ git clone https://github.com/spruceid/ssi --recurse-submodules\n$ git clone https://github.com/spruceid/didkit\n$ cd didkit/\n$ cargo build\n")),Object(a.b)("p",null,"Using ",Object(a.b)("inlineCode",{parentName:"p"},"didkit")," CLI\n(",Object(a.b)("a",{parentName:"p",href:"https://github.com/spruceid/didkit/tree/main/cli"},"documentation"),"):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"$ ./target/debug/didkit -h\n$ ./target/debug/didkit generate-ed25519-key > key.jwk\n")),Object(a.b)("p",null,"Using ",Object(a.b)("inlineCode",{parentName:"p"},"didkit")," HTTP server\n(",Object(a.b)("a",{parentName:"p",href:"https://github.com/spruceid/didkit/tree/main/http"},"documentation"),"):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"$ ./target/debug/didkit-http -k key.jwk\nListening on http://127.0.0.1:51467/\n")),Object(a.b)("p",null,"Please see the installation instructions for more detailed steps or how to use\ncontainerized builds. The CLI and HTTP related pages in the ",Object(a.b)("a",{parentName:"p",href:"/docs/didkit/examples"},"examples\nsection")," will demonstrate how to issue and verify\nVerifiable Credentials and Verifiable Presentations."),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("p",null,"The core featureset of DIDKit is expanding steadily over time and in the open,\nso feel free to engage with the repository directly on github. Currently,\nDIDKit currently supports the following features:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Key generation and handling."),Object(a.b)("li",{parentName:"ul"},"Issuance and presentation of W3C Verifiable Credentials in JSON-LD, signed by\na local and/or passed key."),Object(a.b)("li",{parentName:"ul"},"Verification of W3C Verifiable Credentials in JSON-LD.")),Object(a.b)("p",null,"DID Methods supported so far: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"did-key"),Object(a.b)("li",{parentName:"ul"},"did-web"),Object(a.b)("li",{parentName:"ul"},"did-tezos"),Object(a.b)("li",{parentName:"ul"},"did-ethr (implicit only)"),Object(a.b)("li",{parentName:"ul"},"did-sol")),Object(a.b)("p",null,"Proof types verifiable so far:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"RSASignature2018"),Object(a.b)("li",{parentName:"ul"},"Ed25519VerificationKeys"),Object(a.b)("li",{parentName:"ul"},"EcdsaSecp256k1Signature2019"),Object(a.b)("li",{parentName:"ul"},"EcdsaSecp256r1Signature2019"),Object(a.b)("li",{parentName:"ul"},"EcdsaSecp256k1RecoverySignature2020"),Object(a.b)("li",{parentName:"ul"},"Eip712Signature2021"),Object(a.b)("li",{parentName:"ul"},"SolanaSignature2021"),Object(a.b)("li",{parentName:"ul"},"JsonWebSignature2020")),Object(a.b)("h2",{id:"roadmap"},"Roadmap"),Object(a.b)("p",null,"The following tools and features are high priority for subsequent releases:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Exposing interfaces for JWT-based Verifiable Credential workflows"),Object(a.b)("li",{parentName:"ol"},"JSON-LD context editor"),Object(a.b)("li",{parentName:"ol"},"Registration of several new LD signature suites and support for new\ncryptography"),Object(a.b)("li",{parentName:"ol"},"Further DID method support: did-btcr, did-onion"),Object(a.b)("li",{parentName:"ol"},"BBS+ signatures"),Object(a.b)("li",{parentName:"ol"},"DIDComm support"),Object(a.b)("li",{parentName:"ol"},"Aries interoperability profile support")))}b.isMDXComponent=!0}}]);