(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[303],{14168:function(e,n,t){"use strict";t.r(n),t.d(n,{Accordion:function(){return M},AccordionConsumer:function(){return I},AccordionContext:function(){return A},Close:function(){return q},Panel:function(){return $},Section:function(){return Z},SectionConsumer:function(){return _},SectionContext:function(){return z},Trigger:function(){return B},useAccordion:function(){return P},useControls:function(){return V},useDisabled:function(){return U},useIsOpen:function(){return T},useSection:function(){return D}});var r=t(67294),o=t(25312);const l=e=>{const n=r.useRef(null);return(0,o.Z)(n,"keydown",(n=>{var t;null===(t=e[n.which])||void 0===t||t.call(e,n)})),n};const c='input,select,textarea,a[href],button,[tabindex],audio[controls],video[controls],[contenteditable]:not([contenteditable="false"])',i="undefined"===typeof Element?()=>!1:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function u(e){return e.node}const s=e=>!(!a(e)||"INPUT"===e.tagName&&"radio"===e.type&&!v(e)||d(e)<0),a=e=>!(e.disabled||p(e)&&"hidden"===e.type||null===e.offsetParent||"hidden"===getComputedStyle(e).visibility),d=e=>{const n=parseInt(e.getAttribute("tabindex")||"",10);return isNaN(n)?"true"===e.contentEditable?0:e.tabIndex:n},f=(e,n)=>e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex,p=e=>"INPUT"===e.tagName,v=e=>{if(!e.name)return!0;if(e.ownerDocument){const n=e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]');for(let t=0;t<n.length;t++)if(n[t].checked)return n[t]===e;return!0}return!1};var m=(e,n=!1)=>{const t=[],r=[];let o,l,a,p=e.querySelectorAll(c);for(n&&i.call(e,c)&&(p=Array.prototype.slice.apply(p),p.unshift(e)),o=0;o<p.length;o++)l=p[o],s(l)&&(a=d(l),0===a?t.push(l):r.push({documentOrder:o,tabIndex:a,node:l}));return r.sort(f).map(u).concat(t)};t(34155);const b={includeRoot:!1,preventScroll:!1};var y=(e=!1,n=b)=>{const t=r.useRef(null);"boolean"===typeof n&&(n={preventScroll:!1,includeRoot:n});const{includeRoot:l,preventScroll:c}=n,i=()=>{if(!t.current||!e)return;const n=m(t.current,l);n.length>0&&n[0].focus({preventScroll:c})},u=r.useRef(i);return u.current=i,r.useEffect((()=>{u.current()}),[e]),(0,o.Z)(t,"transitionend",i),t};var g=r["undefined"!==typeof document&&void 0!==document.createElement?"useLayoutEffect":"useEffect"];let h=0;const O=()=>h++;let x=!1;var C=(e,n="\ud83c\udd70")=>{const[t,o]=r.useState(x?O:void 0);return g((()=>{void 0===t&&o(h++),x=!0}),[]),e||(void 0===t?t:n+t)};var w=function(...e){return r.useCallback((n=>{for(let t=0;t<e.length;t++){const r=e[t];"function"===typeof r?r(n):r&&"object"===typeof r&&(r.current=n)}}),e)};t(34155);const E=()=>{};var S=({children:e})=>{const{props:n}=e,t=r.useRef(!1),o=n.onClick||E;return r.cloneElement(e,{role:n.hasOwnProperty("role")?n.role:"button",tabIndex:n.hasOwnProperty("tabIndex")?n.tabIndex:0,onTouchStart:e=>{var r;t.current=!0,null===(r=n.onTouchStart)||void 0===r||r.call(n,e)},onMouseDown:e=>{var r;t.current=!0,null===(r=n.onMouseDown)||void 0===r||r.call(n,e)},onClick:e=>{t.current&&o(e),t.current=!1},ref:w(e.ref,l({13:o,32:o}))})};var R=t(86010);t(34155);const N=r.createElement,k=()=>{},A=r.createContext({sections:[],registerSection:()=>k,opened:[],open:k,close:k,isOpen:()=>!1,allowAllClosed:!1}),{Consumer:I}=A,P=()=>r.useContext(A);function j(e,n){const t=e,{index:o}=t.props;return r.cloneElement(t,{key:null===t.key?n:t.key,index:void 0!==o?o:n})}const M=({open:e,defaultOpen:n,allowMultipleOpen:t=!1,allowAllClosed:o=!1,onChange:l,children:c})=>{const[i,u]=r.useState([]);n=e||n;const[s,a]=r.useState(Array.isArray(n)?n:"number"===typeof n?[n]:[]),d=r.useMemo((()=>"undefined"===typeof e?s:Array.isArray(e)?e:[e]),[e,s]),f=r.useRef(l);f.current=l;const p=r.useRef(!1);function v(e,n){function t(n){if(void 0===n[e])return n;const t=n.slice(0);return t[e]=void 0,t}return u((t=>{const r=t.slice(0);return r[e]=n,r})),()=>u(t)}function m(e){return a((n=>void 0===e||n.indexOf(e)>-1?n:t?n.concat(e):[e]))}function b(e){return a((n=>void 0===e||-1===n.indexOf(e)?n:1!==n.length||o?n.slice(0,n.indexOf(e)).concat(n.slice(n.indexOf(e)+1)):n))}function y(e){return void 0!==e&&d.indexOf(e)>-1}const g=r.useMemo((()=>({sections:i,registerSection:v,opened:d,open:m,close:b,isOpen:y,allowAllClosed:o})),[i,d,t,o]);return r.useEffect((()=>{var e;p.current&&(null===(e=f.current)||void 0===e||e.call(f,t?s:s[0])),p.current=!0}),[s,t]),N(A.Provider,{value:g},r.Children.map(c,j))},z=r.createContext({isOpen:!1,open:k,close:k,toggle:k,id:void 0,index:0,disabled:!1,triggerRef:{current:null}}),{Consumer:_}=z,D=()=>r.useContext(z),T=()=>D().isOpen,U=()=>D().disabled,V=()=>{const{open:e,close:n,toggle:t}=D();return{open:e,close:n,toggle:t}},Z=({id:e,index:n,disabled:t=!1,children:o})=>{const{isOpen:l,open:c,close:i,registerSection:u}=P(),s=r.useRef(null);function a(){!t&&c(n)}function d(){!t&&i(n)}function f(){!t&&(l(n)?i(n):c(n))}e=C(e),r.useEffect((()=>u(n,s.current)),[n]);const p=r.useMemo((()=>({id:e,index:n,open:a,close:d,toggle:f,isOpen:l(n),disabled:t,triggerRef:s})),[e,n,c,i,l,t]);return N(z.Provider,{value:p,children:"function"===typeof o?o(p):o})},B=({openClass:e,closedClass:n,openStyle:t,closedStyle:o,children:c})=>{const{sections:i,opened:u,allowAllClosed:s}=P(),{isOpen:a,id:d,index:f,toggle:p,disabled:v,triggerRef:m}=D(),b=w(c.ref,m,l({40:()=>H(i,f),38:()=>L(i,f),36:()=>{var e;return null===(e=i[0])||void 0===e?void 0:e.focus()},35:()=>{var e;return null===(e=i[i.length-1])||void 0===e?void 0:e.focus()}}));return N(S,null,r.cloneElement(c,{"aria-controls":d,"aria-expanded":""+a,"aria-disabled":""+(v||!s&&a&&1===u.length),tabIndex:v?-1:0,className:(0,R.Z)(c.props.className,a?e:n)||void 0,style:Object.assign({},c.props.style,a?t:o),onClick:e=>{var n,t;p(),null===(n=(t=c.props).onClick)||void 0===n||n.call(t,e)},ref:b}))},H=(e,n)=>{var t,r;n===e.length-1?null===(t=e[0])||void 0===t||t.focus():null===(r=e[n+1])||void 0===r||r.focus()},L=(e,n)=>{var t,r;0===n?null===(t=e[e.length-1])||void 0===t||t.focus():null===(r=e[n-1])||void 0===r||r.focus()},$=({closeOnEscape:e=!0,openClass:n,closedClass:t,openStyle:o,closedStyle:c,children:i})=>{const{id:u,isOpen:s,close:a,triggerRef:d}=D(),f=r.useRef(s),p=y(!f.current&&s,{includeRoot:!0}),v=w(i.ref,p,l({27:()=>{var n;e&&(a(),null===(n=d.current)||void 0===n||n.focus())}}));return g((()=>{f.current=s}),[s]),r.cloneElement(i,{"aria-hidden":""+!s,id:u,className:(0,R.Z)(i.props.className,s?n:t)||void 0,style:Object.assign({visibility:s?"visible":"hidden"},i.props.style,s?o:c),ref:v})},q=({children:e})=>{const{allowAllClosed:n,opened:t}=P(),{close:o,isOpen:l,id:c}=D();return N(S,null,r.cloneElement(e,{"aria-controls":c,"aria-expanded":""+l,"aria-label":e.props["aria-label"]||"Close section","aria-disabled":""+!n&&l&&1===t.length,onClick:n=>{var t,r;o(),null===(t=(r=e.props).onClick)||void 0===t||t.call(r,n)}}))}},25312:function(e,n,t){"use strict";var r=t(67294);n.Z=function(e,n,t,o){const l=r.useRef(t),c=r.useRef(o);r.useEffect((()=>{l.current=t,c.current=o})),r.useEffect((()=>{const t=e&&"current"in e?e.current:e;if(!t)return;let r=0;function o(...e){r||l.current.apply(this,e)}t.addEventListener(n,o);const i=c.current;return()=>{r=1,t.removeEventListener(n,o),i&&i()}}),[e,n])}},77675:function(e,n,t){var r,o=Object.create,l=Object.defineProperty,c=Object.defineProperties,i=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,d=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,v=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))f.call(n,t)&&v(e,t,n[t]);if(a)for(var t of a(n))p.call(n,t)&&v(e,t,n[t]);return e},b=(e,n)=>{var t={};for(var r in e)f.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&a)for(var r of a(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t},y=(e,n,t,r)=>{if(n&&"object"==typeof n||"function"==typeof n)for(let o of s(n))!f.call(e,o)&&o!==t&&l(e,o,{get:()=>n[o],enumerable:!(r=i(n,o))||r.enumerable});return e},g=(e,n,t)=>(t=null!=e?o(d(e)):{},y(!n&&e&&e.__esModule?t:l(t,"default",{value:e,enumerable:!0}),e)),h={};((e,n)=>{for(var t in n)l(e,t,{get:n[t],enumerable:!0})})(h,{Unlock16:()=>E}),e.exports=(r=h,y(l({},"__esModule",{value:!0}),r));t(45697);var O=g(t(67294)),x=(t(45697),g(t(67294))),C=t(48016),w=x.default.forwardRef((function(e,n){let t=e,{className:r="",size:o="16",fillRule:l="nonzero",fill:i="",title:s="",path:a="",viewBox:d=""}=t,f=b(t,["className","size","fillRule","fill","title","path","viewBox"]),p=i?`fill-${i}`:"";return a?x.default.createElement("svg",((e,n)=>c(e,u(n)))(m({ref:n,className:(0,C.getClasses)("content-box",{[p]:p,[r]:r}),width:o,height:o,viewBox:d||`0 0 ${o} ${o}`,xmlns:"http://www.w3.org/2000/svg"},f),{"aria-hidden":"true",focusable:"false",role:"img"}),""!==s&&x.default.createElement("title",null,s),x.default.createElement("path",{d:a,fillRule:l})):null}));w.displayName="IconBase";var E=O.default.forwardRef((function(e,n){let t=e,{className:r,fill:o,size:l="16",title:c="Unlock"}=t,i=b(t,["className","fill","size","title"]);return O.default.createElement(w,m({ref:n,className:r,fill:o,title:c,size:l,path:"M4.72 7V5.45A3.37 3.37 0 018 2a3.21 3.21 0 012.53 1.25l.78-.62A4.19 4.19 0 008 1a4.37 4.37 0 00-4.28 4.45V7H3v8h10V7H4.72zM12 14H4V8h8v6zm-4.5-2.09V13h1v-1.09a1.5 1.5 0 10-1 0zM8 10a.5.5 0 110 1 .5.5 0 010-1z",fillRule:"nonzero"},i))}));E.displayName="Unlock16"}}]);