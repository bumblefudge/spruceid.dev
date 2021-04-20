(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=i,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return n?r.a.createElement(f,o(o({ref:t},s),{},{components:n})):r.a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},149:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/credible_swimlane_issuance-51c9a9073193b29969c603155432d71d.png"},150:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/credible_swimlane_issuance-51c9a9073193b29969c603155432d71d.png"},151:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/credible_swimlane_vp_request-0b76c9a3cc5ffb78c6be6a355a54b262.png"},152:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/credible_swimlane_vp_request-0b76c9a3cc5ffb78c6be6a355a54b262.png"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var i=n(3),r=n(7),a=(n(0),n(104)),l={id:"concepts",title:"Core Concepts"},o={unversionedId:"credible/concepts",id:"credible/concepts",isDocsHomePage:!1,title:"Core Concepts",description:"Credible is designed to be a powerful but simple personal wallet for holding",source:"@site/docs/credible/concepts.md",slug:"/credible/concepts",permalink:"/docs/credible/concepts",editUrl:"https://github.com/spruceid/docs/credible/concepts.md",version:"current",sidebar:"docs",previous:{title:"Terminology",permalink:"/docs/credible/terminology"},next:{title:"Installation",permalink:"/docs/credible/install"}},c=[{value:"High-level explanation of QR Code Logic",id:"high-level-explanation-of-qr-code-logic",children:[]},{value:"CredentialOffer",id:"credentialoffer",children:[{value:"Offer Flow",id:"offer-flow",children:[]}]},{value:"Verifiable Presentation Request",id:"verifiable-presentation-request",children:[{value:"Parameters",id:"parameters",children:[]},{value:"VP Request Flow",id:"vp-request-flow",children:[]}]},{value:"Future Protocols",id:"future-protocols",children:[]}],s={toc:c};function b(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Credible is designed to be a powerful but simple personal wallet for holding\nverifiable credentials-- and little more. "),Object(a.b)("h2",{id:"high-level-explanation-of-qr-code-logic"},"High-level explanation of QR Code Logic"),Object(a.b)("p",null,"All QRCode interactions start as listed below:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"User scans a QRCode containing a URL;"),Object(a.b)("li",{parentName:"ol"},"User is presented the choice to trust the domain in the URL;"),Object(a.b)("li",{parentName:"ol"},"App makes a GET request to the URL;")),Object(a.b)("p",null,"Then, depending on the type of message, one of the following protocols will be\nexecuted."),Object(a.b)("p",null,"If this all sounds a little esoteric, watch the ",Object(a.b)("a",{parentName:"p",href:"/docs/credible/example--qr-issuance"},"example\nvideo")," first. "),Object(a.b)("h2",{id:"credentialoffer"},"CredentialOffer"),Object(a.b)("p",null,"If the wallet manages multiple keypairs/subject identifiers, the user will be\nprompted to select one. If no additional subject identifiers are available, the\nwallet will default to the on-device keypair created at time of installation. If\nthis cannot be found, the protocol will throw an exception."),Object(a.b)("p",null,"After receiving a ",Object(a.b)("inlineCode",{parentName:"p"},"CredentialOffer")," from a trusted host and selecting (or\ndefaulting to) an identifier to which that credential will be issued, the wallet\napp calls the issuer's API with the selected ",Object(a.b)("inlineCode",{parentName:"p"},"subject_id"),' in the form body. If\nthe on-device identifier is chosen or defaulted to, it must first be wrapped in\na "DID:Key" object (See glossary), which is derived deterministically from the\nkeypair stored in the ',Object(a.b)("inlineCode",{parentName:"p"},"FlutterSecureStorage"),", which is backed by ",Object(a.b)("a",{parentName:"p",href:"https://developer.android.com/training/articles/keystore"},"KeyStore")," on\nAndroid and ",Object(a.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/security/keychain_services"},"Keychain")," on iOS."),Object(a.b)("h3",{id:"offer-flow"},"Offer Flow"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note: some features in this flow are current unstable and may not work as documented.")),Object(a.b)("p",null,"The flow of events and actions is thus:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"User is presented a credential preview to review and make their decision\nwhether or not receive it (coming soon: option to select subject DID if\nwallet holds multiple)"),Object(a.b)("li",{parentName:"ol"},"App makes a POST request to the initial URL with ",Object(a.b)("inlineCode",{parentName:"li"},"subject_id")," set to this\nDID;"),Object(a.b)("li",{parentName:"ol"},"App receives and stores the new credential in app storage;"),Object(a.b)("li",{parentName:"ol"},"User is redirect back to the wallet's homepage.")),Object(a.b)("p",null,Object(a.b)("img",{alt:"swimlane diagram",src:n(149).default}),"\n",Object(a.b)("a",{target:"_blank",href:n(150).default},"hi-rez swimlane here")),Object(a.b)("h2",{id:"verifiable-presentation-request"},"Verifiable Presentation Request"),Object(a.b)("p",null,"After receiving a ",Object(a.b)("inlineCode",{parentName:"p"},"VerifiablePresentationRequest")," from a trusted host, the\nwallet app calls the requestor's POST API with the ",Object(a.b)("inlineCode",{parentName:"p"},"presentation")," value set in\nthe body. This value is a stringified JSON-LD presentation object generated\nfrom the selected credential and signed with the credential's private key using\n",Object(a.b)("inlineCode",{parentName:"p"},"DIDKit.issuePresentation"),"."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"Here are some of the parameters used to generate a presentation:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"presentation"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"id")," is set to a unique and random ",Object(a.b)("inlineCode",{parentName:"li"},"UUID.v4")," generated in each ",Object(a.b)("inlineCode",{parentName:"li"},"issuePresentation")," call;"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"holder")," is set to the selected credential's subject (DID);"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"verifiableCredential")," contains the presented credential in stringified JSON-LD form;"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"options"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"verificationMethod")," is set to the ",Object(a.b)("inlineCode",{parentName:"li"},"id")," field in the passed DID's ",Object(a.b)("inlineCode",{parentName:"li"},"verificationMethod"),";"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"proofPurpose")," only supports 'authentication' for now;"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"challenge")," is set to the ",Object(a.b)("inlineCode",{parentName:"li"},"challenge")," value found in the request;"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"domain")," is set to the ",Object(a.b)("inlineCode",{parentName:"li"},"domain")," value found in the request;"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"key")," is the credential's stored private key;")),Object(a.b)("h3",{id:"vp-request-flow"},"VP Request Flow"),Object(a.b)("p",null,"The flow of events and actions is listed below:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"User is presented a presentation request to review and make a decision;"),Object(a.b)("li",{parentName:"ul"},"App generates ",Object(a.b)("inlineCode",{parentName:"li"},"didKey")," from the stored private key using ",Object(a.b)("inlineCode",{parentName:"li"},"DIDKit.keyToDIDKey"),";"),Object(a.b)("li",{parentName:"ul"},"App issues a presentation using ",Object(a.b)("inlineCode",{parentName:"li"},"DIDKit.issuePresentation"),";"),Object(a.b)("li",{parentName:"ul"},"App makes a POST request to the initial URL with the presentation;"),Object(a.b)("li",{parentName:"ul"},"User is redirect back to the wallet.")),Object(a.b)("p",null,Object(a.b)("img",{alt:"swimlane diagram",src:n(151).default}),"\n",Object(a.b)("a",{target:"_blank",href:n(152).default},"hi-rez swimlane here")),Object(a.b)("h2",{id:"future-protocols"},"Future Protocols"),Object(a.b)("p",null,"Coming in future versions (before v1.0)"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"DIDComm v2 support"),Object(a.b)("li",{parentName:"ul"},"Presentation Exchange")),Object(a.b)("p",null,"Note: Verifiable Presentation requests are presented in the form specified by the current W3C-CCG ",Object(a.b)("a",{parentName:"p",href:"https://w3c-ccg.github.io/vp-request-spec/"},"VP Request Spec")," draft. As community-wide, vendor-agnostic specifications for Credential/",Object(a.b)("a",{parentName:"p",href:"https://identity.foundation/presentation-exchange/"},"Presentation Exchange"),", ",Object(a.b)("a",{parentName:"p",href:"https://w3c-ccg.github.io/universal-wallet-interop-spec/"},"Wallet Portability"),", and DID-based ",Object(a.b)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/"},"Transport")," come into maturity, we will support them in future versions."))}b.isMDXComponent=!0}}]);