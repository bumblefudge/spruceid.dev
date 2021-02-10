(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(103)),i={id:"example--java-springboot",title:"Spring Boot Java Installation"},c={unversionedId:"didkit/example--java-springboot",id:"didkit/example--java-springboot",isDocsHomePage:!1,title:"Spring Boot Java Installation",description:"This project demonstrates use of verifiable credentials and presentation to enable",source:"@site/docs/didkit/example--java-springboot.md",slug:"/didkit/example--java-springboot",permalink:"/docs/didkit/example--java-springboot",editUrl:"https://github.com/spruceid/docs/didkit/example--java-springboot.md",version:"current"},l=[{value:"Dependencies",id:"dependencies",children:[{value:"Java Build tool",id:"java-build-tool",children:[]},{value:"Database Configuration (MySQL)",id:"database-configuration-mysql",children:[]}]},{value:"Execution",id:"execution",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This project demonstrates use of verifiable credentials and presentation to enable\nuser authentication for an application."),Object(o.b)("h2",{id:"dependencies"},"Dependencies"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Java 11"),Object(o.b)("li",{parentName:"ol"},"DIDKit compiled locally & linked from the classpath"),Object(o.b)("li",{parentName:"ol"},"The DIDKit Java artifact (",Object(o.b)("inlineCode",{parentName:"li"},"didkit.jar"),"), usually built by DIDKit installation."),Object(o.b)("li",{parentName:"ol"},"A MySQL database")),Object(o.b)("h3",{id:"java-build-tool"},"Java Build tool"),Object(o.b)("p",null,"If you are trying to use DIDKit with an external Java project, you will have\nto point your build tool (Gradle, Maven, etc) to the ",Object(o.b)("inlineCode",{parentName:"p"},"didkit.jar")," file. Please refer\nto those tools' documentation to find out more. Here is an excerpt of how we have\nlisted it in this projects ",Object(o.b)("inlineCode",{parentName:"p"},"pom.xml")," for Maven:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.spruceid.didkit</groupId>\n  <artifactId>didkit</artifactId>\n  <version>0.1</version>\n  <scope>system</scope>\n  <systemPath>${basedir}/didkit.jar</systemPath>\n</dependency>\n")),Object(o.b)("h3",{id:"database-configuration-mysql"},"Database Configuration (MySQL)"),Object(o.b)("p",null,"This project uses a MySQL database to store the user entity. One easy way to run\nan instance is by using docker:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# docker run \\\n  -e MYSQL_ROOT_PASSWORD=root \\\n  -e MYSQL_DATABASE=didkit \\\n  -p 3306:3306 \\\n  --name didkit-java-db \\\n  -d mysql:5\n")),Object(o.b)("p",null,"If you need to modify the database credentials you will need to update the\nrelevant fields in ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/resources/application.properties"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"spring.datasource.url=jdbc:mysql://localhost:3306/didkit\nspring.datasource.username=root\nspring.datasource.password=root\n")),Object(o.b)("h2",{id:"execution"},"Execution"),Object(o.b)("p",null,"To run this example project you can execute this command from the root folder:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ ./mvnw spring-boot:run\n")),Object(o.b)("p",null,"You can then load ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:8080")," to see the web application."),Object(o.b)("p",null,"To verify that DIDKit has been setup correctly, you can then run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ curl -v http://localhost:8080/version\n")),Object(o.b)("p",null,"And you should expect to see a version string in the response."))}p.isMDXComponent=!0}}]);