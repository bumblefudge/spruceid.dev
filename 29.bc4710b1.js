(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{139:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(l){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),c};e.exports=a,e.exports.default=a},140:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},95:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(97),c=n(22),l=n(25),i=n(119),s=n(3),u=n(7),p=n(99),m=n(98),d=n(112),b=n(116),y=n(117),f=n(115),h=n(101),g=n(105),v=n(120),j=function(e){return r.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},O=n(118),k=n(67),E=n.n(k);var C=function e(t,n){return"link"===t.type?Object(m.isSamePath)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))};function N(e){var t,n,o,c=e.item,l=e.onItemClick,i=e.collapsible,m=e.activePath,d=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),b=c.items,y=c.label,f=C(c,m),h=(n=f,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),g=Object(a.useState)((function(){return!!i&&(!f&&c.collapsed)})),v=g[0],j=g[1],O=Object(a.useRef)(null),k=Object(a.useState)(void 0),N=k[0],x=k[1],T=function(e){var t;void 0===e&&(e=!0),x(e?(null===(t=O.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(a.useEffect)((function(){f&&!h&&v&&j(!1)}),[f,h,v]);var S=Object(a.useCallback)((function(e){e.preventDefault(),N||T(),setTimeout((function(){return j((function(e){return!e}))}),100)}),[N]);return 0===b.length?null:r.a.createElement("li",{className:Object(p.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:y},r.a.createElement("a",Object(s.a)({className:Object(p.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&f},t[E.a.menuLinkText]=!i,t)),onClick:i?S:void 0,href:i?"#!":void 0},d),y),r.a.createElement("ul",{className:"menu__list",ref:O,style:{height:N},onTransitionEnd:function(){v||T(!1)}},b.map((function(e){return r.a.createElement(P,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:l,collapsible:i,activePath:m})}))))}function x(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),c=t.href,l=t.label,i=C(t,a);return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(h.a,Object(s.a)({className:Object(p.a)("menu__link",{"menu__link--active":i}),to:c},Object(g.a)(c)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),l))}function P(e){switch(e.item.type){case"category":return r.a.createElement(N,e);case"link":default:return r.a.createElement(x,e)}}var T=function(e){var t,n,o=e.path,c=e.sidebar,l=e.sidebarCollapsible,i=void 0===l||l,s=e.onCollapse,u=e.isHidden,h=Object(a.useState)(!1),g=h[0],k=h[1],C=Object(m.useThemeConfig)(),N=C.navbar.hideOnScroll,x=C.hideableSidebar,T=Object(d.a)().isAnnouncementBarClosed,S=Object(f.a)().scrollY;Object(b.a)(g);var w=Object(y.a)();return Object(a.useEffect)((function(){w===y.b.desktop&&k(!1)}),[w]),r.a.createElement("div",{className:Object(p.a)(E.a.sidebar,(t={},t[E.a.sidebarWithHideableNavbar]=N,t[E.a.sidebarHidden]=u,t))},N&&r.a.createElement(v.a,{tabIndex:-1,className:E.a.sidebarLogo}),r.a.createElement("div",{className:Object(p.a)("menu","menu--responsive","thin-scrollbar",E.a.menu,(n={"menu--show":g},n[E.a.menuWithAnnouncementBar]=!T&&0===S,n))},r.a.createElement("button",{"aria-label":g?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){k(!g)}},g?r.a.createElement("span",{className:Object(p.a)(E.a.sidebarMenuIcon,E.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(O.a,{className:E.a.sidebarMenuIcon,height:24,width:24})),r.a.createElement("ul",{className:"menu__list"},c.map((function(e){return r.a.createElement(P,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),k(!1)},collapsible:i,activePath:o})})))),x&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(p.a)("button button--secondary button--outline",E.a.collapseSidebarButton),onClick:s},r.a.createElement(j,{className:E.a.collapseSidebarButtonIcon})))},S={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},w={Prism:n(23).a,theme:S};function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var D=/\r\n|\r|\n/,L=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},B=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},M=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=I({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=I({},n,{backgroundColor:null}),r};function A(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var R=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),_(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?M(e.theme,e.language):void 0;return t.themeDict=n})),_(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=I({},A(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==r&&(o.style=void 0!==o.style?I({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),_(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var c=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),_(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,c=I({},A(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?I({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,c=0,l=[],i=[l];c>-1;){for(;(o=a[c]++)<r[c];){var s=void 0,u=t[c],p=n[c][o];if("string"==typeof p?(u=c>0?u:["plain"],s=p):(u=B(u,p.type),p.alias&&(u=B(u,p.alias)),s=p.content),"string"==typeof s){var m=s.split(D),d=m.length;l.push({types:u,content:m[0]});for(var b=1;b<d;b++)L(l),i.push(l=[]),l.push({types:u,content:m[b]})}else c++,t.push(u),n.push(s),a.push(0),r.push(s.length)}c--,t.pop(),n.pop(),a.pop(),r.pop()}return L(l),i}(void 0!==c?t.tokenize(a,c,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),H=n(139),W=n.n(H),F=n(140),$=n.n(F),z={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},J=n(106),K=function(){var e=Object(m.useThemeConfig)().prism,t=Object(J.a)().isDarkTheme,n=e.theme||z,a=e.darkTheme||n;return t?a:n},V=n(68),X=n.n(V),Y=/{([\d,-]+)}/,q=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},G=/(?:title=")(.*)(?:")/,Q=function(e){var t=e.children,n=e.className,o=e.metastring,c=Object(m.useThemeConfig)().prism,l=Object(a.useState)(!1),i=l[0],u=l[1],d=Object(a.useState)(!1),b=d[0],y=d[1];Object(a.useEffect)((function(){y(!0)}),[]);var f=Object(a.useRef)(null),h=[],g="",v=K(),j=Array.isArray(t)?t.join(""):t;if(o&&Y.test(o)){var O=o.match(Y)[1];h=$()(O).filter((function(e){return e>0}))}o&&G.test(o)&&(g=o.match(G)[1]);var k=n&&n.replace(/language-/,"");!k&&c.defaultLanguage&&(k=c.defaultLanguage);var E=j.replace(/\n$/,"");if(0===h.length&&void 0!==k){for(var C,N="",x=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return q(["js","jsBlock"]);case"jsx":case"tsx":return q(["js","jsBlock","jsx"]);case"html":return q(["js","jsBlock","html"]);case"python":case"py":return q(["python"]);default:return q()}}(k),P=j.replace(/\n$/,"").split("\n"),T=0;T<P.length;){var S=T+1,_=P[T].match(x);if(null!==_){switch(_.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":N+=S+",";break;case"highlight-start":C=S;break;case"highlight-end":N+=C+"-"+(S-1)+","}P.splice(T,1)}else T+=1}h=$()(N),E=P.join("\n")}var I=function(){W()(E),u(!0),setTimeout((function(){return u(!1)}),2e3)};return r.a.createElement(R,Object(s.a)({},w,{key:String(b),theme:v,code:E,language:k}),(function(e){var t,n=e.className,a=e.style,o=e.tokens,c=e.getLineProps,l=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,g&&r.a.createElement("div",{style:a,className:X.a.codeBlockTitle},g),r.a.createElement("div",{className:X.a.codeBlockContent},r.a.createElement("div",{tabIndex:0,className:Object(p.a)(n,X.a.codeBlock,"thin-scrollbar",(t={},t[X.a.codeBlockWithTitle]=g,t))},r.a.createElement("div",{className:X.a.codeBlockLines,style:a},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return h.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(s.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(s.a)({key:t},l({token:e,key:t})))})))})))),r.a.createElement("button",{ref:f,type:"button","aria-label":"Copy code to clipboard",className:Object(p.a)(X.a.copyButton),onClick:I},i?"Copied":"Copy")))}))},U=(n(69),n(70)),Z=n.n(U),ee=function(e){return function(t){var n,a=t.id,o=Object(u.a)(t,["id"]),c=Object(m.useThemeConfig)().navbar.hideOnScroll;return a?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(p.a)("anchor",(n={},n[Z.a.enhancedAnchor]=!c,n)),id:a}),o.children,r.a.createElement("a",{className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):r.a.createElement(e,o)}},te=n(71),ne=n.n(te),ae={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(Q,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(h.a,e)},pre:function(e){return r.a.createElement("div",Object(s.a)({className:ne.a.mdxCodeBlock},e))},h1:ee("h1"),h2:ee("h2"),h3:ee("h3"),h4:ee("h4"),h5:ee("h5"),h6:ee("h6")},re=n(121),oe=n(102),ce=n(72),le=n.n(ce);function ie(e){var t,n,l,s,u=e.currentDocRoute,d=e.versionMetadata,b=e.children,y=Object(c.default)(),f=y.siteConfig,h=y.isClient,g=d.pluginId,v=d.permalinkToSidebar,O=d.docsSidebars,k=d.version,E=v[u.path],C=O[E],N=Object(a.useState)(!1),x=N[0],P=N[1],S=Object(a.useState)(!1),w=S[0],_=S[1],I=Object(a.useCallback)((function(){w&&_(!1),P(!x)}),[w]);return r.a.createElement(i.a,{key:h,searchMetadatas:{version:k,tag:Object(m.docVersionSearchTag)(g,k)}},r.a.createElement("div",{className:le.a.docPage},C&&r.a.createElement("div",{className:Object(p.a)(le.a.docSidebarContainer,(t={},t[le.a.docSidebarContainerHidden]=x,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(le.a.docSidebarContainer)&&x&&_(!0)},role:"complementary"},r.a.createElement(T,{key:E,sidebar:C,path:u.path,sidebarCollapsible:null===(n=null===(l=f.themeConfig)||void 0===l?void 0:l.sidebarCollapsible)||void 0===n||n,onCollapse:I,isHidden:w}),w&&r.a.createElement("div",{className:le.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:I,onClick:I},r.a.createElement(j,null))),r.a.createElement("main",{className:le.a.docMainContainer},r.a.createElement("div",{className:Object(p.a)("container padding-vert--lg",le.a.docItemWrapper,(s={},s[le.a.docItemWrapperEnhanced]=x,s))},r.a.createElement(o.a,{components:ae},b)))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return Object(oe.matchPath)(a.pathname,e)}));return o?r.a.createElement(ie,{currentDocRoute:o,versionMetadata:n},Object(l.a)(t)):r.a.createElement(re.default,e)}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,b=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(b,l(l({ref:t},s),{},{components:n})):r.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);