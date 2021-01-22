(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return n})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return c}));var a=r(3),i=(r(0),r(94));const n={id:"ffis",title:"Foreign Function Interfaces"},l={unversionedId:"didkit/ffis",id:"didkit/ffis",isDocsHomePage:!1,title:"Foreign Function Interfaces",description:"[path-packages]//dart.dev/tools/pub/dependencies#path-packages",source:"@site/docs\\didkit\\ffis.md",slug:"/didkit/ffis",permalink:"/docs/didkit/ffis",editUrl:"https://github.com/spruceid/docs/didkit/ffis.md",version:"current",sidebar:"docs",previous:{title:"HTTP Syntax",permalink:"/docs/didkit/http_syntax"},next:{title:"Overview of Examples",permalink:"/docs/didkit/examples"}},d=[{value:"C",id:"c",children:[{value:"Build",id:"build",children:[]},{value:"Test",id:"test",children:[]},{value:"+ Android",id:"-android",children:[]}]},{value:"Java",id:"java",children:[{value:"Build",id:"build-1",children:[]},{value:"Test",id:"test-1",children:[]},{value:"+ Android",id:"-android-1",children:[]}]},{value:"Android",id:"android",children:[{value:"Requires",id:"requires",children:[]},{value:"Build",id:"build-2",children:[]}]},{value:"Flutter",id:"flutter",children:[]},{value:"Usage",id:"usage",children:[]}],o={toc:d};function c({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"DIDKit has bindings for various languages and environments. Each corresponding directory contains a README with additional info particular to it. The Makefile used to build all the libraries requires ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.gnu.org/software/make/"}),"GNU Make"),"."),Object(i.b)("p",null,"Building and testing each library requires tools for the corresponding environment:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"C: C compiler and linker"),Object(i.b)("li",{parentName:"ul"},"Java: JDK and JRE"),Object(i.b)("li",{parentName:"ul"},"Android: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.android.com/ndk/"}),"Android NDK"),", ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.android.com/studio/"}),"SDK tools"),", and Rust Android targets"),Object(i.b)("li",{parentName:"ul"},"Flutter: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/flutter/flutter"}),"Flutter"),"\nBuild")),Object(i.b)("p",null,"To build all the libraries, run ",Object(i.b)("inlineCode",{parentName:"p"},"make")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"/lib/")," directory of the DIDKit repo."),Object(i.b)("p",null,"To build and test a particular library, see the instructions below."),Object(i.b)("h2",{id:"c"},"C"),Object(i.b)("h3",{id:"build"},"Build"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# from DIDKit root directory:\n$ make -C lib ../target/release/libdidkit.so\n")),Object(i.b)("h3",{id:"test"},"Test"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# from DIDKit root directory:\n$ make -C lib ../target/test/c.stamp\n")),Object(i.b)("h3",{id:"-android"},"+ Android"),Object(i.b)("p",null,"To build the C shared library for Android targets, build the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#android"}),"DIDKit Android library"),"."),Object(i.b)("h2",{id:"java"},"Java"),Object(i.b)("p",null,"Java bindings for DIDKit, using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Java_Native_Interface"}),"JNI"),". The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/JAR_(file_format)"}),"JAR")," file includes Java class files. To use this in an application, you must also include the shared library (",Object(i.b)("inlineCode",{parentName:"p"},"libdidkit.so"),") in your application in your Java Library Path."),Object(i.b)("h3",{id:"build-1"},"Build"),Object(i.b)("p",null,"Run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# from DIDKit root directory:\n$ make -C lib ../target/didkit.jar\n")),Object(i.b)("p",null,"To build the shared library for your current platform/architecture:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# from DIDKit root directory:\n$ make -C lib ../target/release/libdidkit.so\n")),Object(i.b)("h3",{id:"test-1"},"Test"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# from DIDKit root directory:\n$ make -C lib ../target/tests/java.stamp\n")),Object(i.b)("h3",{id:"-android-1"},"+ Android"),Object(i.b)("p",null,"For Android, build the separate ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#android"}),"Android library (AAR file)")," which includes the Java class files and shared libraries for all Android targets."),Object(i.b)("h2",{id:"android"},"Android"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.android.com/studio/projects/android-library.html#aar-contents"}),"Android Library (AAR file)")," for DIDKit. The AAR file includes Java class files using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Java_Native_Interface"}),"JNI"),", and binary shared libraries for Android's supported architectures (x86, armeabi-v7a, arm64-v8a, x86","_","64). The AAR can be added to existing Android projects using Android Studio or Gradle."),Object(i.b)("h3",{id:"requires"},"Requires"),Object(i.b)("p",null,"Android SDK and NDK for Linux x86","_","64. The Android SDK is expected to be installed at ",Object(i.b)("inlineCode",{parentName:"p"},"~/Android/Sdk"),". If it is somewhere else instead, you can specify it with a Make variable, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"make ANDROID_SDK_ROOT=/other/location/android-sdk"),". "),Object(i.b)("p",null,"Rust Android targets are also required. To install those with ",Object(i.b)("inlineCode",{parentName:"p"},"rustup"),", run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"//from root directory of didkit project\n$ make -C lib install-rustup-android\n")),Object(i.b)("h3",{id:"build-2"},"Build"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"//from root directory of didkit project\n$ make -C lib ../target/test/aar.stamp\n")),Object(i.b)("h4",{id:"make-variables"},"Make variables"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ANDROID_SDK_ROOT")," - path to Android SDK. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"~/Android/Sdk")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ANDROID_TOOLS")," - Android tools directory. Default is to pick one matching ",Object(i.b)("inlineCode",{parentName:"li"},"$(ANDROID_SDK_ROOT)/build-tools/*"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ANDROID_NDK_HOME")," - Android NDK directory. Default is ",Object(i.b)("inlineCode",{parentName:"li"},"$(ANDROID_SDK_ROOT)/ndk-bundle)")," if exists, or one matching ",Object(i.b)("inlineCode",{parentName:"li"},"$(ANDROID_SDK_ROOT)/ndk/*"),".")),Object(i.b)("h2",{id:"flutter"},"Flutter"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://flutter.dev/developing-packages/"}),"Flutter plugin")," for the DIDKit library. Includes Dart bindings, and functionality for Android and iOS (WIP)."),Object(i.b)("p",null,"Flutter Doctor and CLI tools are also required."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"You can depend on this plugin as a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://dart.dev/tools/pub/dependencies#path-packages"}),"path dependency"),"."),Object(i.b)("p",null,"You will also need to build the DIDKit library for your target platforms.\nTo do that for Android, trigger building the AAR file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# from DIDKit root directory:\nmake -C lib ../target/didkit.aar\n")))}c.isMDXComponent=!0},94:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return O}));var a=r(0),i=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},s=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=b(r),p=a,O=s["".concat(l,".").concat(p)]||s[p]||u[p]||n;return r?i.a.createElement(O,d(d({ref:t},c),{},{components:r})):i.a.createElement(O,d({ref:t},c))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=p;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var c=2;c<n;c++)l[c]=r[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);