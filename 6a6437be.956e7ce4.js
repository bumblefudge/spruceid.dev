(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{141:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/didkit-core-components-7abba2778ffe8dde24997f305e706bd8.png"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(97)),o={id:"concepts",title:"Core Concepts"},c={unversionedId:"didkit/concepts",id:"didkit/concepts",isDocsHomePage:!1,title:"Core Concepts",description:"DID Kit makes as accessible, simple, and portable as possible",source:"@site/docs/didkit/concepts.md",slug:"/didkit/concepts",permalink:"/docs/didkit/concepts",editUrl:"https://github.com/spruceid/docs/didkit/concepts.md",version:"current",sidebar:"docs",previous:{title:"Terminology",permalink:"/docs/didkit/terminology"},next:{title:"Installation",permalink:"/docs/didkit/install"}},s=[{value:"High-level explanation of core logic",id:"high-level-explanation-of-core-logic",children:[]},{value:"Semantics",id:"semantics",children:[]}],l={toc:s};function d(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"DID Kit makes as accessible, simple, and portable as possible\nthe core engine of any credentialing system built around W3C\nverifiable credentials: the issuance and verification mechanisms. "),Object(i.b)("p",null,Object(i.b)("img",{alt:"core components of ssi and didkit",src:n(141).default})),Object(i.b)("h2",{id:"high-level-explanation-of-core-logic"},"High-level explanation of core logic"),Object(i.b)("p",null,"The generation of VCs and VPs requires three separate inputs:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Key Material"),": of the ",Object(i.b)("em",{parentName:"li"},"issuer")," in the case of a VC, or of\nthe ",Object(i.b)("em",{parentName:"li"},"holder")," in the case of a VP"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Data Payload"),": typically JSON in the case of VCs, and an\narray of 1 or more VCs in the case of VPs"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Data Structure"),": in the form of JSON-LD Schema")),Object(i.b)("p",null,'From these, a 4th element, the "proof" is generated by signing\nover 2 and 3 with 1.  Once these four elements have been\ncombined, a verifiable credential is a portable, tamper-evident\nunit of data. Optionally, the data often contains the identifier\nof a "data subject" of the credential; this identifier is often\nthe vital link between a VP and its contents, rendering the\nwhole package meaningful and verifiable.'),Object(i.b)("p",null,"Running the process in reverse from the side of a verifier, we\nstart from the whole tamperproofed package. Verifying the proofs\non a VC or VP requires fetching key material and verification\nmethod (i.e., the ",Object(i.b)("em",{parentName:"p"},"type"),' of key material) from the listed issuer\nor holder (respectively). It is important to note that the data\n"payload" of a VP is usually one or more VCs and nothing else,\nso verifying the outer layer (the VP) reveals a new proof and\nidentity to be queried for key and key type (the VC).'),Object(i.b)("h2",{id:"semantics"},"Semantics"),Object(i.b)("p",null,'The third element in the above explanation can be the hardest for\ndevelopers new to the world of decentralized identity and\ncredentialing to grapple with. This is because the data structure\nmechanisms assumed and expressed in the examples of the core\nW3C specifications are so-called "open-world," semantic-web\nsemantics expressed in JSON-LD, rather than the closed-world,\nstatic JSON schema that most developers use day in and day\nout. While static JSON schema are easier to use and easier\nto secure in conventional ways, the more dynamic and\nopen-data-friendly mechanics of JSON-LD are given pride of\nplace in the decentralized identity community.  '),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},'DIDKit was built for LD data structures, and currently requires\nVC semantics to be expressed in JSON-LD, but support for static\nstructures in "vanilla" JSON VC/VP representations (aka "JWT"s)\nis forthcoming in the next version. '))),Object(i.b)("p",null,"For a good introduction to the Semantic Web and JSON-LD as a\ndata format and as a novel approach to web engineering, see\nthese articles by ",Object(i.b)("a",{parentName:"p",href:"https://medium.com/mattr-global/learn-concepts-semantic-web-250784d6a49f"},"Nader Helmy"),"\nand ",Object(i.b)("a",{parentName:"p",href:"https://medium.com/transmute-techtalk/on-json-ld-and-the-semantics-of-identity-42d051d3ce14"},"Orie Steele"),"."))}d.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,u=p["".concat(o,".").concat(b)]||p[b]||m[b]||i;return n?r.a.createElement(u,c(c({ref:t},l),{},{components:n})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);