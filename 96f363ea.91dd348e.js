(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{139:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/credible_swimlane_issuance-51c9a9073193b29969c603155432d71d.png"},140:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/credible_swimlane_issuance-51c9a9073193b29969c603155432d71d.png"},141:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/credible_swimlane_vp_request-0b76c9a3cc5ffb78c6be6a355a54b262.png"},142:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/credible_swimlane_vp_request-0b76c9a3cc5ffb78c6be6a355a54b262.png"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),i=(n(0),n(94));const r={id:"concepts",title:"Core Concepts"},o={unversionedId:"credible/concepts",id:"credible/concepts",isDocsHomePage:!1,title:"Core Concepts",description:"Credible is designed to be a powerful but simple personal wallet for holding verifiable credentials-- and little more.",source:"@site/docs\\credible\\concepts.md",slug:"/credible/concepts",permalink:"/docs/credible/concepts",editUrl:"https://github.com/spruceid/docs/credible/concepts.md",version:"current",sidebar:"docs",previous:{title:"Terminology",permalink:"/docs/credible/terminology"},next:{title:"Installation",permalink:"/docs/credible/install"}},l=[{value:"High-level explanation of QR Code Logic",id:"high-level-explanation-of-qr-code-logic",children:[]},{value:"CredentialOffer",id:"credentialoffer",children:[{value:"Flow",id:"flow",children:[]}]},{value:"Verifiable Presentation Request",id:"verifiable-presentation-request",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Flow",id:"flow-1",children:[]}]},{value:"Future Protocols",id:"future-protocols",children:[]}],c={toc:l};function s({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Credible is designed to be a powerful but simple personal wallet for holding verifiable credentials-- and little more. "),Object(i.b)("h2",{id:"high-level-explanation-of-qr-code-logic"},"High-level explanation of QR Code Logic"),Object(i.b)("p",null,"All QRCode interactions start as listed below:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"User scans a QRCode containing a URL;"),Object(i.b)("li",{parentName:"ol"},"User is presented the choice to trust the domain in the URL;"),Object(i.b)("li",{parentName:"ol"},"App makes a GET request to the URL;")),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Tiago: are there two GET requests with choice of identifier/alias in between, or one? I can't confidently guess from the way it's currently described."))),Object(i.b)("p",null,"Then, depending on the type of message, one of the following protocols will be\nexecuted."),Object(i.b)("h2",{id:"credentialoffer"},"CredentialOffer"),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"TIAGO:")," "),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"Is this selection step gonna make it into v0.1?"),Object(i.b)("li",{parentName:"ul"},"Is the exception if keystore is corrupted going to make it either?")),Object(i.b)("p",{parentName:"div"},"If the wallet manages multiple keypairs/subject identifiers, the user will be prompted to select one. If no additional subject identifiers are available, the wallet will default to the on-device keypair created at time of installation. If this cannot be found, the protocol will throw an exception."))),Object(i.b)("p",null,"After receiving a ",Object(i.b)("inlineCode",{parentName:"p"},"CredentialOffer")," from a trusted host and selecting (or defaulting to) an identifier to which that credential will be issued, the wallet app calls the issuer's API with the selected ",Object(i.b)("inlineCode",{parentName:"p"},"subject_id"),' in the form body. If the on-device identifier is chosen or defaulted to, it must first be wrapped in a "DID:Key" object (See glossary), which is derived deterministically from the keypair stored in the ',Object(i.b)("inlineCode",{parentName:"p"},"FlutterSecureStorage"),", which is backed by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.android.com/training/articles/keystore"}),"KeyStore")," on Android and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/security/keychain_services"}),"Keychain")," on iOS."),Object(i.b)("h3",{id:"flow"},"Flow"),Object(i.b)("p",null,"The flow of events and actions is thus:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"User is presented a credential preview to review and make their decision;"),Object(i.b)("li",{parentName:"ol"},"[Optional]"," ",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},'If User selected identifier (by "petname" or alias), its current DID will be fetched from app storage. Otherwise:'),Object(i.b)("li",{parentName:"ol"},"App generates ",Object(i.b)("inlineCode",{parentName:"li"},"didKey")," from the secure on-device keypair using the ",Object(i.b)("inlineCode",{parentName:"li"},"DIDKit.keyToDIDKey")," function;"))),Object(i.b)("li",{parentName:"ol"},"App makes a POST request to the initial URL with ",Object(i.b)("inlineCode",{parentName:"li"},"subject_id")," set to this DID;"),Object(i.b)("li",{parentName:"ol"},"App receives and stores the new credential in app storage;"),Object(i.b)("li",{parentName:"ol"},"User is redirect back to the wallet's homepage.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"swimlane diagram",src:n(139).default}),"\n",Object(i.b)("a",{target:"_blank",href:n(140).default},"hi-rez swimlane here")),Object(i.b)("h2",{id:"verifiable-presentation-request"},"Verifiable Presentation Request"),Object(i.b)("p",null,"After receiving a ",Object(i.b)("inlineCode",{parentName:"p"},"VerifiablePresentationRequest")," from a trusted host, the wallet app calls the requestor's POST API with the ",Object(i.b)("inlineCode",{parentName:"p"},"presentation")," value set in the body. This value is a stringified JSON-LD presentation object generated  from the selected credential and signed with the credential's private key using ",Object(i.b)("inlineCode",{parentName:"p"},"DIDKit.issuePresentation"),"."),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Tiago: Questions here:"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"I assume the ",Object(i.b)("inlineCode",{parentName:"li"},"holder")," is not being validated, right? If the credential has a URI that isn't a DID or a DID:Key, the presentation issuance protocol doesn't throw an exception?"),Object(i.b)("li",{parentName:"ul"},"Only one VC for now, right? stringified JSON-LD, I assume?"),Object(i.b)("li",{parentName:"ul"},"What do you mean the credential's stored private key? Do you mean the private key corresponding to the ",Object(i.b)("inlineCode",{parentName:"li"},"id")," of the credential ",Object(i.b)("em",{parentName:"li"},"subject"),"?")))),Object(i.b)("p",null,"Here are some of the parameters used to generate a presentation:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"presentation"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"id")," is set to a unique and random ",Object(i.b)("inlineCode",{parentName:"li"},"UUID.v4")," generated in each ",Object(i.b)("inlineCode",{parentName:"li"},"issuePresentation")," call;"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"holder")," is set to the selected credential's subject (DID);"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"verifiableCredential")," contains the presented credential in stringified JSON-LD form;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"verificationMethod")," is set to the ",Object(i.b)("inlineCode",{parentName:"li"},"id")," field in the passed DID's ",Object(i.b)("inlineCode",{parentName:"li"},"verificationMethod"),";"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"proofPurpose")," only supports 'authentication' for now;"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"challenge")," is set to the ",Object(i.b)("inlineCode",{parentName:"li"},"challenge")," value found in the request;"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"domain")," is set to the ",Object(i.b)("inlineCode",{parentName:"li"},"domain")," value found in the request;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"key")," is the credential's stored private key;")),Object(i.b)("h3",{id:"flow-1"},"Flow"),Object(i.b)("p",null,"The flow of events and actions is listed below:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"User is presented a presentation request to review and make a decision;"),Object(i.b)("li",{parentName:"ul"},"App generates ",Object(i.b)("inlineCode",{parentName:"li"},"didKey")," from the stored private key using ",Object(i.b)("inlineCode",{parentName:"li"},"DIDKit.keyToDIDKey"),";"),Object(i.b)("li",{parentName:"ul"},"App issues a presentation using ",Object(i.b)("inlineCode",{parentName:"li"},"DIDKit.issuePresentation"),";"),Object(i.b)("li",{parentName:"ul"},"App makes a POST request to the initial URL with the presentation;"),Object(i.b)("li",{parentName:"ul"},"User is redirect back to the wallet.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"swimlane diagram",src:n(141).default}),"\n",Object(i.b)("a",{target:"_blank",href:n(142).default},"hi-rez swimlane here")),Object(i.b)("h2",{id:"future-protocols"},"Future Protocols"),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Wayne"),":\nShould we be mentioning future DIDComm and Presentation Exchange (MSFT and/or Aries variety) support here? "))),Object(i.b)("p",null,"Note: Verifiable Presentation requests are presented in the form specified by the current W3C-CCG ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/vp-request-spec/"}),"VP Request Spec")," draft. As community-wide, vendor-agnostic specifications for Credential/",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://identity.foundation/presentation-exchange/"}),"Presentation Exchange"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/universal-wallet-interop-spec/"}),"Wallet Portability"),", and DID-based ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://identity.foundation/didcomm-messaging/spec/"}),"Transport")," come into maturity, we will support them in future versions."))}s.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,u=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return n?i.a.createElement(u,l(l({ref:t},s),{},{components:n})):i.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);