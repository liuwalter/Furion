"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6792],{6380:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=n(1402),p=["components"],l={id:"net5-to-net6",title:"2.5 .NET5 \u5347\u7ea7 .NET6",sidebar_label:"2.5 .NET5 \u5347\u7ea7 .NET6 \u2728"},c=void 0,d={unversionedId:"net5-to-net6",id:"net5-to-net6",title:"2.5 .NET5 \u5347\u7ea7 .NET6",description:"",source:"@site/docs/net5-to-net6.mdx",sourceDirName:".",slug:"/net5-to-net6",permalink:"/furion/docs/net5-to-net6",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/net5-to-net6.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1653919418,formattedLastUpdatedAt:"5/30/2022",frontMatter:{id:"net5-to-net6",title:"2.5 .NET5 \u5347\u7ea7 .NET6",sidebar_label:"2.5 .NET5 \u5347\u7ea7 .NET6 \u2728"},sidebar:"docs",previous:{title:"2.4 \u795e\u5947\u7684 Inject",permalink:"/furion/docs/inject"},next:{title:"3. \u5e94\u7528\u542f\u52a8 Startup",permalink:"/furion/docs/appstartup"}},s={},u=[{value:"2.5.1 \u5347\u7ea7\u6ce8\u610f\u4e8b\u9879",id:"251-\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879",level:2},{value:"2.5.1.1 \u5b89\u88c5 <code>.NET6 SDK</code>",id:"2511-\u5b89\u88c5-net6-sdk",level:3},{value:"2.5.1.2 \u7f16\u8f91 <code>.csproj</code> \u6587\u4ef6",id:"2512-\u7f16\u8f91-csproj-\u6587\u4ef6",level:3},{value:"2.5.1.3 \u5347\u7ea7 <code>Nuget</code> \u5305",id:"2513-\u5347\u7ea7-nuget-\u5305",level:3},{value:"2.5.1.4 \u5220\u9664 <code>Startup.cs</code> \u6587\u4ef6",id:"2514-\u5220\u9664-startupcs-\u6587\u4ef6",level:3},{value:"2.5.1.5 \u7f16\u8f91 <code>Web</code> \u542f\u52a8\u5c42 <code>.csproj</code>",id:"2515-\u7f16\u8f91-web-\u542f\u52a8\u5c42-csproj",level:3},{value:"2.5.1.6 \u66ff\u6362 <code>Program.cs</code> \u5185\u5bb9\u4e3a\uff1a",id:"2516-\u66ff\u6362-programcs-\u5185\u5bb9\u4e3a",level:3},{value:"2.5.1.7 \u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u89e3\u51b3\u65b9\u6848",id:"2517-\u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u89e3\u51b3\u65b9\u6848",level:3}],m={toc:u};function k(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"251-\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879"},"2.5.1 \u5347\u7ea7\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u76ee\u524d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"strong"},"Furion v2.x")," \u7248\u672c\u7684\u7528\u6237\u5747\u53ef\u4ee5\u5feb\u901f\u65e0\u7f1d\u5347\u7ea7\u81f3 ",(0,a.kt)("inlineCode",{parentName:"strong"},"Furion v3.x")," \u7248\u672c\uff0c\u53ea\u9700\u8981\u505a\u5c11\u91cf\u66f4\u6539\u5373\u53ef\u3002")),(0,a.kt)("h3",{id:"2511-\u5b89\u88c5-net6-sdk"},"2.5.1.1 \u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"h3"},".NET6 SDK")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download/dotnet/6.0"},"https://dotnet.microsoft.com/download/dotnet/6.0")),(0,a.kt)("h3",{id:"2512-\u7f16\u8f91-csproj-\u6587\u4ef6"},"2.5.1.2 \u7f16\u8f91 ",(0,a.kt)("inlineCode",{parentName:"h3"},".csproj")," \u6587\u4ef6"),(0,a.kt)("p",null,"\u7f16\u8f91\u89e3\u51b3\u65b9\u6848\u6240\u6709\u9879\u76ee\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj")," \u6587\u4ef6\uff0c\u5e76\u66ff\u6362 ",(0,a.kt)("inlineCode",{parentName:"p"},"<TargetFramework>net5.0</TargetFramework>")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"<TargetFramework>net6.0</TargetFramework>"),"\uff0c\u5982\uff1a"),(0,a.kt)("img",{src:(0,i.Z)("img/sjl1.png")}),(0,a.kt)("p",null,"\u5f53\u7136\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + F")," \u5168\u5c40\u66ff\u6362"),(0,a.kt)("img",{src:(0,i.Z)("img/sjl2.png")}),(0,a.kt)("h3",{id:"2513-\u5347\u7ea7-nuget-\u5305"},"2.5.1.3 \u5347\u7ea7 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Nuget")," \u5305"),(0,a.kt)("p",null,"\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u6240\u6709\u5305\u5347\u7ea7\u81f3 ",(0,a.kt)("inlineCode",{parentName:"p"},"v3.3.5")," \u7248\u672c\uff0c\u540c\u65f6 ",(0,a.kt)("inlineCode",{parentName:"p"},"Microsoft")," \u6240\u6709\u5305\u5347\u7ea7\u81f3 ",(0,a.kt)("inlineCode",{parentName:"p"},"v6.0.5")," \u7248\u672c\uff0c\u5982\uff1a"),(0,a.kt)("img",{src:(0,i.Z)("img/sjl3.png")}),(0,a.kt)("h3",{id:"2514-\u5220\u9664-startupcs-\u6587\u4ef6"},"2.5.1.4 \u5220\u9664 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Startup.cs")," \u6587\u4ef6"),(0,a.kt)("p",null,"\u5220\u9664 ",(0,a.kt)("inlineCode",{parentName:"p"},"Web \u542f\u52a8\u5c42")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u6587\u4ef6\uff0c\u5982\uff1a"),(0,a.kt)("img",{src:(0,i.Z)("img/sjl4.png")}),(0,a.kt)("h3",{id:"2515-\u7f16\u8f91-web-\u542f\u52a8\u5c42-csproj"},"2.5.1.5 \u7f16\u8f91 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Web")," \u542f\u52a8\u5c42 ",(0,a.kt)("inlineCode",{parentName:"h3"},".csproj")),(0,a.kt)("p",null,"\u7f16\u8f91 ",(0,a.kt)("inlineCode",{parentName:"p"},"Web")," \u542f\u52a8\u5c42 ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj")," \u6587\u4ef6\uff0c\u5e76\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"<ImplicitUsings>enable</ImplicitUsings>"),"\uff0c\u5982\uff1a"),(0,a.kt)("img",{src:(0,i.Z)("img/sjl5.png")}),(0,a.kt)("h3",{id:"2516-\u66ff\u6362-programcs-\u5185\u5bb9\u4e3a"},"2.5.1.6 \u66ff\u6362 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Program.cs")," \u5185\u5bb9\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var builder = WebApplication.CreateBuilder(args).Inject();\nvar app = builder.Build();\napp.Run();\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5c0f\u63d0\u9192")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5982\u679c\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Serilog")," \u65e5\u5fd7\u7ec4\u4ef6\uff0c\u53ef\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"builder.Host.UseSerilogDefault();"),"\u3002"))),(0,a.kt)("img",{src:(0,i.Z)("img/sjl6.png")}),(0,a.kt)("h3",{id:"2517-\u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u89e3\u51b3\u65b9\u6848"},"2.5.1.7 \u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("p",null,"\u5347\u7ea7\u5b8c\u6210\uff01\uff01\uff01"))}k.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,k=u["".concat(l,".").concat(m)]||u[m]||s[m]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);