(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{164:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"default",function(){return W}),n.d(a,"Codepen",function(){return _}),n.d(a,"GitHub",function(){return k}),n.d(a,"Instagram",function(){return Q}),n.d(a,"LinkedIn",function(){return T}),n.d(a,"Twitter",function(){return V}),n.d(a,"Medium",function(){return q});var r=n(0),i=n.n(r),o=(n(86),n(62),n(38),n(166),n(85),n(35),n(26)),l=n(168),s=n.n(l),c=o.a.main.withConfig({displayName:"main__Main",componentId:"sc-4vxjy3-0"})(["flex:1;overflow-y:auto;overflow-x:hidden;scroll-snap-type:y mandatory;scroll-behavior:smooth;"]),u=i.a.createContext(),d=function(e){var t=i.a.useRef(null),n=function(){var e=i.a.useState({}),t=e[0],n=e[1];return{sections:t,registerSection:function(e){var t=e.id,a=e.node;return n(function(e){var n;return Object.assign({},e,((n={})[t]=a,n))})}}}(),a=n.sections,r=n.registerSection,o=function(){var e=window.location.hash.substring(1);a[e]&&a[e].scrollIntoView()},l=s()(function(){var e=Object.keys(a).find(function(e){return a[e]&&0===a[e].getBoundingClientRect().top});e&&(window.location.hash="#"+e)},100);return i.a.useEffect(o),window.onhashchange=o,i.a.createElement(u.Provider,{value:{registerSection:r}},i.a.createElement(c,Object.assign({ref:t,onScroll:l},e)))},f=o.a.section.withConfig({displayName:"section__Section",componentId:"ics6h6-0"})(["width:100%;height:100%;display:flex;flex-direction:",";position:relative;scroll-snap-align:start;background-color:",";"],function(e){return e.direction||"column"},function(e){return e.color}),p=function(e){var t=i.a.useRef(e.id).current;t!==e.id&&console.warn("props.id can't change after initialisation of Section component");var n=function(){var e=i.a.useContext(u);if(!e)throw Error("useSection is only available for children of a SectionContext provider");return e}().registerSection,a=i.a.useState(null),r=a[0],o=a[1];return i.a.useEffect(function(){t&&n({id:t,node:r})},[r,t]),i.a.createElement(f,Object.assign({ref:o},e,{id:t}))},m=o.a.div.withConfig({displayName:"spacer__Spacer",componentId:"sc-1tx8z9o-0"})(["flex:1;"]),h=Object(o.b)(["0%,100%{transform:translate(0,0);}50%{transform:translate(0,25%);}"]),g=o.a.a.withConfig({displayName:"arrow__Link",componentId:"l1pbvu-0"})(["position:relative;overflow:hidden;height:100px;width:100px;@media (max-width:700px),(max-height:700px){height:50px;width:50px;}margin:10px;align-self:center;svg{position:absolute;animation:"," 1s ease-in-out infinite;height:auto;width:50%;left:25%;color:#333333;&:first-child{top:25%;animation-delay:50ms;}}"],h),A=function(){return i.a.createElement("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},i.a.createElement("path",{fill:"currentColor",d:"M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"}))},w=function(e){return i.a.createElement(g,Object.assign({"aria-label":"Next section"},e),i.a.createElement(A,null),i.a.createElement(A,null))},b=o.a.span.withConfig({displayName:"right__Left",componentId:"sc-7150je-0"})(["text-align:left;text-transform:uppercase;"]),x=o.a.span.withConfig({displayName:"left__Left",componentId:"sc-2nbk28-0"})(["text-align:right;text-transform:uppercase;"]),v=Object(o.b)(["0%{color:#b5413b;}33%{color:#f4d75a;}66%{color:#09814a;}100%{color:#b5413b;}"]),E=o.a.span.withConfig({displayName:"bolt__Wrapper",componentId:"sc-8ku0q6-0"})(["animation:"," 30s infinite;align-self:stretch;margin:0 10px;&,svg{height:100%;width:auto;}"],v),y=function(){return i.a.createElement(E,null,i.a.createElement("svg",{viewBox:"0 0 215 500",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Bolt"),i.a.createElement("polygon",{fill:"currentcolor",points:"0,2.49800181e-13 214.28571399999998,2.2586397e-13 142.857143,213.795918 214.28571399999998,213.795918 71.428571,500 71.428571,285.061224 0,285.061224"})))},S=o.a.h1.withConfig({displayName:"title__Wrapper",componentId:"phknz1-0"})(["display:flex;margin:0;flex-direction:row;justify-content:center;align-items:center;font-size:10rem;height:200px;@media (max-width:700px),(max-height:700px){font-size:7rem;height:140px;}@media (max-width:600px),(max-height:600px){font-size:6rem;height:120px;}@media (max-width:500px),(max-height:500px){font-size:5rem;height:100px;}@media (max-width:400px),(max-height:400px){font-size:4rem;height:80px;}@media (max-width:300px),(max-height:300px){font-size:3rem;height:60px;}"]),j=function(){return i.a.createElement(S,null,i.a.createElement(x,null,"zap"),i.a.createElement(y,null),i.a.createElement(b,null,"dev"))},z=n(56),I=o.a.h2.withConfig({displayName:"sub-title__Wrapper",componentId:"sc-1kru1zd-0"})(["align-self:center;> span{margin:0 10px;}text-transform:uppercase;text-align:center;font-size:2rem;@media (max-width:700px),(max-height:700px){font-size:1rem;}"]),C=function(){return i.a.createElement(I,null,i.a.createElement(z.a.ConstructionSign,null),"under construction",i.a.createElement(z.a.ConstructionSign,null))},L=o.a.ul.withConfig({displayName:"list__List",componentId:"sc-19harj1-0"})(["display:inline-flex;flex-wrap:wrap;justify-content:space-around;width:auto;margin:0;padding:10px;"]),B=function(e){return Object(o.a)(e).withConfig({displayName:"button",componentId:"sc-13vlmag-0"})(["border:none;font:inherit;cursor:pointer;display:block;box-sizing:border-box;width:",";height:",";padding:10px;border-radius:50%;background-color:#d3d3d3;color:#fafafa;box-shadow:rgba(0,0,0,0.2) 0 2px 2px;&:hover{background-color:#c4c4c4;}&:active{box-shadow:rgba(0,0,0,0.2) 0 2px 2px inset;}"],function(e){return e.size||"auto"},function(e){return e.size||"auto"})},N=B("button");N.Link=B("a");var R=N,O=o.a.li.withConfig({displayName:"item__ItemWrapper",componentId:"sc-1nx840a-0"})(["display:block;text-decoration:none;margin:5px;"]),M=function(e){return i.a.createElement(O,null,i.a.createElement(R.Link,Object.assign({href:"",target:"_blank",rel:"noopener noreferrer",size:"40px"},e)))},_=function(){return i.a.createElement(M,{href:"https://codepen.io/carlo-nomes/","aria-label":"CodePen"},i.a.createElement("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"m502.28 159.7l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156c-6 3.999-9.714 11.143-9.714 18.285v156c0 7.143 3.714 14.286 9.715 18.286l234 156.02c7.987 4.915 16.511 4.96 24.571 0l234-156.02c6-3.999 9.715-11.143 9.715-18.286v-156c-1e-3 -7.142-3.715-14.286-9.716-18.285zm-224.28-96.573l172.29 114.86-76.857 51.429-95.429-63.715v-102.57zm-44 0v102.57l-95.429 63.715-76.857-51.429 172.29-114.86zm-190 156l55.143 36.857-55.143 36.857v-73.714zm190 229.72l-172.29-114.86 76.857-51.429 95.429 63.715v102.57zm22-140.86l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.86v-102.57l95.429-63.715 76.857 51.429-172.29 114.86zm190-156l-55.143-36.857 55.143-36.857v73.714z",fill:"currentColor"})))},k=function(){return i.a.createElement(M,{href:"https://github.com/carlo-nomes/","aria-label":"GitHub"},i.a.createElement("svg",{viewBox:"0 0 496 512",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",fill:"currentColor"})))},Q=function(){return i.a.createElement(M,{href:"https://www.instagram.com/carlo.nomes/","aria-label":"Instagram"},i.a.createElement("svg",{viewBox:"0 0 448 512",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{fill:"currentColor",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})))},T=function(){return i.a.createElement(M,{href:"https://www.linkedin.com/in/carlo-nomes/","aria-label":"LinkedIn"},i.a.createElement("svg",{viewBox:"0 0 448 512",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1 0 53.8 0s53.8 24.1 53.8 53.8-24.1 54.3-53.8 54.3zM448 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448h-.1z",fill:"currentColor"})))},V=function(){return i.a.createElement(M,{href:"https://twitter.com/CarloNomes/","aria-label":"Twitter"},i.a.createElement("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"m459.37 151.72c0.325 4.548 0.325 9.097 0.325 13.645 0 138.72-105.58 298.56-298.56 298.56-59.452 0-114.68-17.219-161.14-47.106 8.447 0.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.27-44.832-46.132-0.975-84.792-31.188-98.112-72.772 6.498 0.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.98v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.26 216.36 109.81-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.93 104.93-104.93 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",fill:"currentColor"})))},q=function(){return i.a.createElement(M,{href:"https://medium.com/@carlo.nomes/","aria-label":"Medium"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},i.a.createElement("path",{fill:"currentColor",d:"M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"})))},W=M,Y=L,D=o.a.header.withConfig({displayName:"header__Wrapper",componentId:"sc-12uj81p-0"})(["align-self:stretch;display:flex;flex-direction:row;justify-content:flex-end;"]),G=function(){return i.a.createElement(D,null,i.a.createElement(Y,null,i.a.createElement(a.GitHub,null),i.a.createElement(a.Codepen,null),i.a.createElement(a.Medium,null),i.a.createElement(a.LinkedIn,null),i.a.createElement(a.Instagram,null),i.a.createElement(a.Twitter,null)))},F=function(){return i.a.createElement(p,{id:"landing",color:"#fafafa"},i.a.createElement(G,null),i.a.createElement(m,null),i.a.createElement(j,null),i.a.createElement(C,null),i.a.createElement(m,null),i.a.createElement(w,{href:"#bio"}))},H=(n(169),n(171)),P=n(4),U=n.n(P),J=(n(36),n(165),i.a.createContext({})),X=function(e){return i.a.createElement(J.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};X.propTypes={data:U.a.object,query:U.a.string.isRequired,render:U.a.func,children:U.a.func};var Z=n(173),K=n.n(Z),$=Object(o.a)(K.a).withConfig({displayName:"profile-image__StyledImage",componentId:"rbag6o-0"})(["margin:20px;",";filter:saturate(17%) brightness(105%) contrast(215%);"],"\nclip-path: polygon(\n  50% 0%,\n  83% 12%,\n  100% 43%,\n  94% 78%,\n  68% 100%,\n  32% 100%,\n  6% 78%,\n  0% 43%,\n  17% 12%\n);\n"),ee=function(e){return i.a.createElement(X,{query:"769204989",render:function(t){return i.a.createElement($,Object.assign({fixed:t.file.childImageSharp.fixed},e))},data:H})},te=o.a.span.withConfig({displayName:"bio__Wrapper",componentId:"sc-12p73ks-0"})(["align-self:center;margin:20px;display:flex;flex-direction:row;align-items:center;@media (max-aspect-ratio:1/1),(min-width:1000px) and (min-height:800px){flex-direction:column;}"]),ne=o.a.p.withConfig({displayName:"bio__Text",componentId:"sc-12p73ks-1"})(["flex:1;margin:20px;max-width:900px;box-sizing:border-box;text-align:left;font-size:3rem;@media (max-width:500px),(max-height:500px){font-size:1.5rem;}"]),ae=function(){return i.a.createElement(p,{id:"bio",color:"#f4d75a"},i.a.createElement(m,null),i.a.createElement(te,null,i.a.createElement(ee,null),i.a.createElement(ne,null,i.a.createElement(z.a.Wave,null),"  Hi, I'm Carlo.",i.a.createElement("br",null),"I'm an Antwerp based developer, helping companies create amazing webapps using the latest tools and techniques.")),i.a.createElement(m,null))};t.default=function(){return i.a.createElement(d,null,i.a.createElement(F,null),i.a.createElement(ae,null))}},165:function(e,t,n){var a;e.exports=(a=n(172))&&a.default||a},166:function(e,t,n){var a=n(27),r=n(37);n(167)("keys",function(){return function(e){return r(a(e))}})},167:function(e,t,n){var a=n(11),r=n(19),i=n(18);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],o={};o[e]=t(n),a(a.S+a.F*i(function(){n(1)}),"Object",o)}},168:function(e,t,n){(function(t){var n="Expected a function",a=NaN,r="[object Symbol]",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,f=u||d||Function("return this")(),p=Object.prototype.toString,m=Math.max,h=Math.min,g=function(){return f.Date.now()};function A(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==r}(e))return a;if(A(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=A(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=l.test(e);return n||s.test(e)?c(e.slice(2),n?2:8):o.test(e)?a:+e}e.exports=function(e,t,a){var r,i,o,l,s,c,u=0,d=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError(n);function b(t){var n=r,a=i;return r=i=void 0,u=t,l=e.apply(a,n)}function x(e){var n=e-c;return void 0===c||n>=t||n<0||f&&e-u>=o}function v(){var e=g();if(x(e))return E(e);s=setTimeout(v,function(e){var n=t-(e-c);return f?h(n,o-(e-u)):n}(e))}function E(e){return s=void 0,p&&r?b(e):(r=i=void 0,l)}function y(){var e=g(),n=x(e);if(r=arguments,i=this,c=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(v,t),d?b(e):l}(c);if(f)return s=setTimeout(v,t),b(c)}return void 0===s&&(s=setTimeout(v,t)),l}return t=w(t)||0,A(a)&&(d=!!a.leading,o=(f="maxWait"in a)?m(w(a.maxWait)||0,t):o,p="trailing"in a?!!a.trailing:p),y.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=c=i=s=void 0},y.flush=function(){return void 0===s?l:E(g())},y}}).call(this,n(61))},169:function(e,t,n){"use strict";n(170)("fixed",function(e){return function(){return e(this,"tt","","")}})},170:function(e,t,n){var a=n(11),r=n(18),i=n(20),o=/"/g,l=function(e,t,n,a){var r=String(i(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},171:function(e){e.exports={data:{file:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMBBAL/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAdleQc2pO3hND4Gb/8QAHBAAAQUAAwAAAAAAAAAAAAAAAgABAxEhEBIi/9oACAEBAAEFAtdVIK7KqRZwYsMQN7PC/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8BIT//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAaEAACAwEBAAAAAAAAAAAAAAAAARARITFB/9oACAEBAAY/AqS02nGnpwpLsUf/xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhMUFRcWH/2gAIAQEAAT8hbM76i3MHo1FcYgLPTHsVtW4FijsX5KuNRXcDBzZzMoan/9oADAMBAAIAAwAAABAg+L//xAAYEQEBAQEBAAAAAAAAAAAAAAABABExgf/aAAgBAwEBPxACbZJx8jl//8QAGBEBAQEBAQAAAAAAAAAAAAAAAQARMYH/2gAIAQIBAT8QbZDD2e3/xAAcEAEAAwADAQEAAAAAAAAAAAABABEhMUFRYYH/2gAIAQEAAT8QBkvdXw+y9LXhaBaoPKiTFFiHSC4TGkKc9ymQo2oWelJp6fyMVmNVaQXHHs//2Q==",width:150,height:150,src:"/static/c3a3724f5ba97751761aca14677765fe/3e75a/profile-square.jpg",srcSet:"/static/c3a3724f5ba97751761aca14677765fe/3e75a/profile-square.jpg 1x,\n/static/c3a3724f5ba97751761aca14677765fe/10e3a/profile-square.jpg 1.5x,\n/static/c3a3724f5ba97751761aca14677765fe/1a478/profile-square.jpg 2x,\n/static/c3a3724f5ba97751761aca14677765fe/c34c4/profile-square.jpg 3x"}}}}}},172:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(76),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},173:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.default=void 0;var r,i=a(n(7)),o=a(n(39)),l=a(n(87)),s=a(n(88)),c=a(n(0)),u=a(n(4)),d=function(e){var t=(0,s.default)({},e),n=t.resolutions,a=t.sizes,r=t.critical;return n&&(t.fixed=n,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),r&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=d(e),n=t.fluid?t.fluid.src:t.fixed.src;return f[n]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,g=h&&window.IntersectionObserver,A=new WeakMap;var w=function(e,t){var n=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(A.has(e.target)){var t=A.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),A.delete(e.target),t())}})},{rootMargin:"200px"})),r);return n&&(n.observe(e),A.set(e,t)),function(){n.unobserve(e),A.delete(e)}},b=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+n+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+a+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+l+s+n+r+t+o+i+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=c.default.forwardRef(function(e,t){var n=e.sizes,a=e.srcSet,r=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return c.default.createElement("img",(0,s.default)({sizes:n,srcSet:a,src:r},f,{onLoad:o,onError:u,ref:t,loading:d,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});x.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var v=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=h&&p(t),n.addNoScript=!(t.critical&&!t.fadeIn),n.useIOSupport=!m&&g&&!t.critical&&!n.seenBefore;var a=t.critical||h&&(m||!n.useIOSupport);return n.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=w(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=d(e),n=t.fluid?t.fluid.src:t.fixed.src,f[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=d(this.props),t=e.title,n=e.alt,a=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,l=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,m=e.fluid,h=e.fixed,g=e.backgroundColor,A=e.durationFadeIn,w=e.Tag,v=e.itemProp,E=e.loading,y=!1===this.state.fadeIn||this.state.imgLoaded,S=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,s.default)({opacity:y?1:0,transition:S?"opacity "+A+"ms":"none"},l),z="boolean"==typeof g?"lightgray":g,I={transitionDelay:A+"ms"},C=(0,s.default)({opacity:this.state.imgLoaded?0:1},S&&I,l,f),L={title:t,alt:this.state.isVisible?"":n,style:C,className:p};if(m){var B=m;return c.default.createElement(w,{className:(a||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(B.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/B.aspectRatio+"%"}}),z&&c.default.createElement(w,{title:t,style:(0,s.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},S&&I)}),B.base64&&c.default.createElement(x,(0,s.default)({src:B.base64},L)),B.tracedSVG&&c.default.createElement(x,(0,s.default)({src:B.tracedSVG},L)),this.state.isVisible&&c.default.createElement("picture",null,B.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:B.srcSetWebp,sizes:B.sizes}),c.default.createElement(x,{alt:n,title:t,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,s.default)({alt:n,title:t,loading:E},B))}}))}if(h){var N=h,R=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},i);return"inherit"===i.display&&delete R.display,c.default.createElement(w,{className:(a||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},z&&c.default.createElement(w,{title:t,style:(0,s.default)({backgroundColor:z,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},S&&I)}),N.base64&&c.default.createElement(x,(0,s.default)({src:N.base64},L)),N.tracedSVG&&c.default.createElement(x,(0,s.default)({src:N.tracedSVG},L)),this.state.isVisible&&c.default.createElement("picture",null,N.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),c.default.createElement(x,{alt:n,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,s.default)({alt:n,title:t,loading:E},N))}}))}return null},t}(c.default.Component);v.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var E=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),y=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});v.propTypes={resolutions:E,sizes:y,fixed:E,fluid:y,fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"])};var S=v;t.default=S}}]);
//# sourceMappingURL=component---src-pages-index-js-3e3eb6d5d29aed900944.js.map