(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),i=(n(0),n(94));const r={id:"authn",title:"Authenticating to other services"},o={unversionedId:"credible/authn",id:"credible/authn",isDocsHomePage:!1,title:"Authenticating to other services",description:"Credible's current authentication model is simple: services request a verifiable credential issued to the wallet-holder at each authentication, and an interactive presentation is used to initiate a session. Future extensions and alternatives are roadmapped.",source:"@site/docs\\credible\\authn.md",slug:"/credible/authn",permalink:"/docs/credible/authn",editUrl:"https://github.com/spruceid/docs/credible/authn.md",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/credible/install"},next:{title:"Overview of Examples",permalink:"/docs/credible/examples"}},s=[{value:"VP-Authentication",id:"vp-authentication",children:[]},{value:"OIDC Considerations",id:"oidc-considerations",children:[]}],c={toc:s};function l({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Credible's current authentication model is simple: services request a verifiable credential issued to the wallet-holder at each authentication, and an interactive presentation is used to initiate a session. Future extensions and alternatives are roadmapped."),Object(i.b)("h2",{id:"vp-authentication"},"VP-Authentication"),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Tiago: will 2 or 3 be possible in v0.1, or in v0.2? If they're already roadmapped definitively for v0.2, I think it's worth including them here, so that v0.1 doesn't look completely feature-poor/useless for authN :D "))),Object(i.b)("p",null,'The presentation request formulated by a "relying party" (i.e., the service relying on credible to authenticate its user) currently comes in only two forms: '),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Unspecified VP Request for enrollment"),": any wallet holding 1 or more VCs can pass this verification to create an account keyed to the presenting identifier."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Unspecified VP Request for authentication"),": if the relying party wants to allow any enrolled party to sign in, they can simply request a presentation of any credential and check the received credential's presenter identifier against  records of enrolled users, to decide whom (if anyone) to authenticate."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Specified VP Request for authentication"),": if the relying party retained the wallet/identifier pair used in an interactive enrolment, they can simply specify the same identifier in a VP request-- anyone except the previously-enrolled party will not ")),Object(i.b)("p",null,"It is presently only possible to verify that a verifiable presentation is valid, i.e. that the signature is valid and corresponds to the public key & identifier (DID) passed with it. For this reason, the passed DID may be used as a unique, stable user identifier between sessions on the basis that a valid VC-holding wallet will consistently prove the same private key for the life of the wallet/identifier combination. No verification based on the ",Object(i.b)("em",{parentName:"p"},"content")," of the presented credential is yet supported."),Object(i.b)("p",null,"See also the code snippets provided below of a Credible VP flow used to authenticate to another service."),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},'The current version does not allow the "relying party" to specify much about the verifiable credential requested, and then check the presented credential against this specification. It also does not support backups or recovery of wallet contents.'),Object(i.b)("p",{parentName:"div"},'Future versions will be able to specify a subject DID, or a subject DID type (by method), or a date range of issuance, or an issuer, etc etc. Without such specification against which to validate a authenticating presentation, Credible\'s authentication should be considered "for testing purposes only" and not used to authenticate users to real-world systems.'))),Object(i.b)("h2",{id:"oidc-considerations"},"OIDC Considerations"),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"TKTKTK - leave out unless it's definitely slated for v0.2?"))))}l.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,h=p["".concat(o,".").concat(u)]||p[u]||b[u]||r;return n?i.a.createElement(h,s(s({ref:t},l),{},{components:n})):i.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);