(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(142)),o={slug:"field-notes-5",title:"Spruce Developer Field Notes #5",author:"Gregory Rocco",author_title:"Lovable Scrumbag",author_url:"https://github.com/obstropolos",author_image_url:"https://avatars2.githubusercontent.com/u/18144858?s=460&u=c893f3c7ca61474a5d7891ea36ef22423b795cd0&v=4",tags:["spruce","tezos","pizza"]},c={permalink:"/blog/field-notes-5",editUrl:"https://github.com/spruceid/spruceid.dev/blog/2021-01-06-field_notes_5.md",source:"@site/blog\\2021-01-06-field_notes_5.md",description:"screengrab of did:tezos specification",date:"2021-01-06T00:00:00.000Z",tags:[{label:"spruce",permalink:"/blog/tags/spruce"},{label:"tezos",permalink:"/blog/tags/tezos"},{label:"pizza",permalink:"/blog/tags/pizza"}],title:"Spruce Developer Field Notes #5",readingTime:2.01,truncated:!1,prevItem:{title:"Developer Portal goes live!",permalink:"/blog/hello_world_i_am_baby"},nextItem:{title:"Spruce Developer Field Notes #4",permalink:"/blog/field-notes-4"}},s=[{value:"Tezos DID Method",id:"tezos-did-method",children:[]},{value:"DIDKit",id:"didkit",children:[]},{value:"Credible",id:"credible",children:[]},{value:"Intake",id:"intake",children:[]},{value:"Contact Us",id:"contact-us",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://miro.medium.com/max/700/1*ssFkUNDRxNpthAPzWz2MCQ.png",alt:"screengrab of did:tezos specification"}))),Object(i.b)("p",null,"At Spruce, we\u2019re building a product suite to manage all aspects of the data supply chain. Here\u2019s the latest from our development efforts:"),Object(i.b)("h3",{id:"tezos-did-method"},"Tezos DID Method"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://did-tezos-draft.spruceid.com/"}),"Tezos DID Method")," specifies how Tezos can be used for DID creation and management, compatible with the issuance, storage, and verification of Verifiable Credentials."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We are still collecting feedback on the specifications of the DID method as well as the on-chain DID manager.")),Object(i.b)("h3",{id:"didkit"},"DIDKit"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://sprucesystems.medium.com/introducing-didkit-an-identity-toolkit-e0dfa292f53d"}),"DIDKit "),"is a cross-platform toolkit for working with W3C Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs)."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Packaged DIDKit into an npm package so it can run on the backend for a Node.js application."),Object(i.b)("li",{parentName:"ul"},"Started building DIDKit for WebAssembly, for use in web browsers. "),Object(i.b)("li",{parentName:"ul"},"Implemented did-tezos resolution layer 1 to support tz1/tz2/tz3 without the DID manager smart contract or off-chain updates"),Object(i.b)("li",{parentName:"ul"},"Implemented JSON-LD to RDF serialization to support arbitrary Linked Data verifiable credentials, with compile-time context loading."),Object(i.b)("li",{parentName:"ul"},"Tested our implementation of JSON-LD to RDF serialization and JSON-LD Dataset normalization with W3C test suites, discovering and fixing bugs along the way."),Object(i.b)("li",{parentName:"ul"},"We are increasing cryptographic agility so that the user can choose their own cryptographic function implementations.")),Object(i.b)("h2",{id:"credible"},"Credible"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/@sprucesystems/spruce-developer-update-2-484368f87ee9"}),"Credible")," is Spruce\u2019s native credential wallet for the consumption, storage, and presentation of Verifiable Credentials on Android and iOS."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Our efforts on Credible are currently focused on making sure did-tezos resolution layer 1 is the default, working DID method in Credible.")),Object(i.b)("h2",{id:"intake"},"Intake"),Object(i.b)("p",null,"Intake is a smarter onboarding tool for businesses via secure document collection and processing. These artifacts can then be used as evidence to generate and issue credentials to the counterparty that originally uploaded them."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We\u2019ve currently completed our initial sprint on Intake to create an app capable of basic onboarding via documents and fields through form creation."),Object(i.b)("li",{parentName:"ul"},"We are designing the models for forms and submissions, using JSON Schema as well as the possibility to enrich them using semantics and linked data."),Object(i.b)("li",{parentName:"ul"},"We are designing the implementation of workflows state machines, aiming for a robust but expressive system, studying general-purpose workflow engines and models such as petri nets.")),Object(i.b)("h2",{id:"contact-us"},"Contact Us"),Object(i.b)("p",null,"If you would like to discuss how we would deploy the architecture described above for a specific use case, please take 30 seconds to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.spruceid.com/contact"}),"leave us a message"),", and we will respond within 24 hours."),Object(i.b)("p",null,"Or just follow us on ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/sprucesystems"}),"Twitter")," and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.linkedin.com/company/sprucesystemsinc"}),"LinkedIn"),"."))}u.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);