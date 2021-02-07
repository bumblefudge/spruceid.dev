(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var i=n(3),r=n(7),a=(n(0),n(97)),o={id:"http_syntax",title:"HTTP Syntax"},s={unversionedId:"didkit/http_syntax",id:"didkit/http_syntax",isDocsHomePage:!1,title:"HTTP Syntax",description:"DIDKit exposes its functionality as an HTTP server.",source:"@site/docs/didkit/http_syntax.md",slug:"/didkit/http_syntax",permalink:"/docs/didkit/http_syntax",editUrl:"https://github.com/spruceid/docs/didkit/http_syntax.md",version:"current",sidebar:"docs",previous:{title:"CLI Commands",permalink:"/docs/didkit/cli_commands"},next:{title:"Foreign Function Interfaces",permalink:"/docs/didkit/ffis"}},c=[{value:"CLI",id:"cli",children:[{value:"<code>didkit-http</code>",id:"didkit-http",children:[]}]},{value:"Rust library",id:"rust-library",children:[]},{value:"API",id:"api",children:[{value:"POST <code>/issue/credentials</code>",id:"post-issuecredentials",children:[]},{value:"POST <code>/verify/credentials</code>",id:"post-verifycredentials",children:[]},{value:"POST <code>/prove/presentations</code>",id:"post-provepresentations",children:[]},{value:"POST <code>/verify/presentations</code>",id:"post-verifypresentations",children:[]}]}],p={toc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"DIDKit exposes its functionality as an HTTP server."),Object(a.b)("h2",{id:"cli"},"CLI"),Object(a.b)("h3",{id:"didkit-http"},Object(a.b)("inlineCode",{parentName:"h3"},"didkit-http")),Object(a.b)("p",null,"Run a DIDKit HTTP server. The command outputs the URL it is listening on, and runs until interrupted."),Object(a.b)("h4",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-s, --host <host>")," - Hostname to listen on. Default is ",Object(a.b)("inlineCode",{parentName:"li"},"127.0.0.1"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-p, --port <port>")," - Port to listen on. Default is a random OS-chosen port."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-k, --key <key>"),"   - Filename of a JWK to use for issuing credentials and\npresentations."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-j, --jwk <jwk>"),"   - JWK to use for issuing credentials and presentations.")),Object(a.b)("h4",{id:"issuer-keys"},"Issuer keys"),Object(a.b)("p",null,"Provide issuer keys using the ",Object(a.b)("inlineCode",{parentName:"p"},"-k"),"/",Object(a.b)("inlineCode",{parentName:"p"},"--key-path")," or ",Object(a.b)("inlineCode",{parentName:"p"},"-j"),"/",Object(a.b)("inlineCode",{parentName:"p"},"--jwk")," options. If none are provided, issuance functionality will be unavailable. If one is provided, that one will be used to sign all credentials and presentations, regardless of the proof options in the issuance request. If more than one key is provided, the issuance request may identify which key to use for signing by its DID in the ",Object(a.b)("inlineCode",{parentName:"p"},"verificationMethod")," property of the proof options; if none is identified in that property, the first key is used."),Object(a.b)("h2",{id:"rust-library"},"Rust library"),Object(a.b)("p",null,"Rust crate ",Object(a.b)("inlineCode",{parentName:"p"},"didkit-http")," contains DIDKit's HTTP server implementation as a Rust\nlibrary. Struct ",Object(a.b)("inlineCode",{parentName:"p"},"didkit_http::DIDKitHTTPMakeSvc")," implements a Tower\n(",Object(a.b)("a",{parentName:"p",href:"https://hyper.rs/"},"hyper"),")\n",Object(a.b)("a",{parentName:"p",href:"https://docs.rs/tower-service/0.3.0/tower_service/trait.Service.html"},"Service"),"."),Object(a.b)("h2",{id:"api"},"API"),Object(a.b)("p",null,"The following routes implement ",Object(a.b)("a",{parentName:"p",href:"https://w3c-ccg.github.io/vc-http-api/"},"W3C CCG's VC HTTP API (vc-http-api)")," ",Object(a.b)("a",{parentName:"p",href:"https://github.com/w3c-ccg/vc-http-api/pull/72"},"v0.0.1"),". POST bodies should be typed as ",Object(a.b)("inlineCode",{parentName:"p"},"application/json"),". Output will be ",Object(a.b)("inlineCode",{parentName:"p"},"application/json")," on success; on error it will be either ",Object(a.b)("inlineCode",{parentName:"p"},"application/json")," or plain text. For more details, see the documentation for the ",Object(a.b)("a",{parentName:"p",href:"https://w3c-ccg.github.io/vc-http-api/"},"vc-http-api")," specification."),Object(a.b)("h3",{id:"post-issuecredentials"},"POST ",Object(a.b)("inlineCode",{parentName:"h3"},"/issue/credentials")),Object(a.b)("p",null,"Issue a verifiable credential. The server uses its configured key and the given linked data proof options to generate a proof and append it to the given credential. On success, the resulting verifiable credential is returned, with HTTP status 201."),Object(a.b)("h3",{id:"post-verifycredentials"},"POST ",Object(a.b)("inlineCode",{parentName:"h3"},"/verify/credentials")),Object(a.b)("p",null,"Verify a verifiable credential. The server verifies the given credential with the given linked data proof options. To successfully verify, the credential must contain at least one proof that verifies successfully. Verification results include a list of checks performed, warnings that should be flagged to the user, and errors encountered. On success, the errors list will be empty, and the HTTP status code will be 200."),Object(a.b)("h3",{id:"post-provepresentations"},"POST ",Object(a.b)("inlineCode",{parentName:"h3"},"/prove/presentations")),Object(a.b)("p",null,"Create a verifiable presentation. Given a presentation and linked data proof options, the server uses its key to generate a proof and append it to the presentation. On success, returns the verifiable presentation and HTTP status 201."),Object(a.b)("h3",{id:"post-verifypresentations"},"POST ",Object(a.b)("inlineCode",{parentName:"h3"},"/verify/presentations")),Object(a.b)("p",null,"Verify a verifiable presentation using the given proof options. Returns a verification result. HTTP status 200 indicates successful verification."))}l.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),b=i,f=d["".concat(o,".").concat(b)]||d[b]||u[b]||a;return n?r.a.createElement(f,s(s({ref:t},p),{},{components:n})):r.a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);