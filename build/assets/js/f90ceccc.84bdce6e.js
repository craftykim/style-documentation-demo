"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[324],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,c=t.originalType,u=t.parentName,l=a(t,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||c;return n?r.createElement(f,i(i({ref:e},l),{},{components:n})):r.createElement(f,i({ref:e},l))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var c=n.length,i=new Array(c);i[0]=m;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:o,i[1]=a;for(var s=2;s<c;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1376:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(7462),o=n(3366),c=n(7294),i=n(3905),a=function(t){var e=t.children,n=t.disabledButton;return c.createElement("button",{type:"button",disabled:!!n,className:"styled-button"},e)},u=["components"],s={sidebar_position:2},l="Buttons",p={unversionedId:"components/buttons",id:"components/buttons",title:"Buttons",description:"Button",source:"@site/docs/components/buttons.mdx",sourceDirName:"components",slug:"/components/buttons",permalink:"/style-documentation-demo/components/buttons",editUrl:"https://github.com/craftykim/style-documentation-demo/docs/components/buttons.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Links",permalink:"/style-documentation-demo/components/links"}},m=[],d={toc:m};function f(t){var e=t.components,n=(0,o.Z)(t,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"buttons"},"Buttons"),(0,i.kt)("div",{className:"container"},(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--6"},(0,i.kt)(a,{mdxType:"Button"},"Button"))),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--6"},(0,i.kt)(a,{disabledButton:"true",mdxType:"Button"},"Disabled Button")))))}f.isMDXComponent=!0}}]);