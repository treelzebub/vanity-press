(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6910,3194],{28650:function(e,t,r){var n,a=Object.create,l=Object.defineProperty,s=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,d=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of i(t))!c.call(e,a)&&a!==r&&l(e,a,{get:()=>t[a],enumerable:!(n=s(t,a))||n.enumerable});return e},p=(e,t,r)=>(r=null!=e?a(d(e)):{},b(!t&&e&&e.__esModule?r:l(r,"default",{value:e,enumerable:!0}),e)),h={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(h,{AdSlot:()=>v,ZeusScript:()=>O}),e.exports=(n=h,b(l({},"__esModule",{value:!0}),n));var f=p(r(67294)),g=(r(45697),r(48016)),y=r(67294),x=e=>{if(typeof window>"u")return;let t=document.cookie.match(`(^|;) ?${e}=([^;]*)(;|$)`);return t?t[2]:null},j=()=>{let e=x("wapo_actmgmt"),t=/(\b|.*\|)EU_NOADS:1([^;]*)/.test(e);return/(\b|.*\|)NOADS:1([^;]*)/.test(e)||t},w=({isVisible:e=!0,height:t,width:r,label:n})=>e?f.default.createElement("div",{"data-testid":"placeholder-box",className:(0,g.getClasses)("w-100 h-100 absolute flex flex-column justify-center border-box bg-offwhite"),style:{width:r,height:t}},f.default.createElement("div",{className:(0,g.getClasses)("flex flex-column justify-center font-sans-serif center font-xxs light gray-dark lh-md")},n&&f.default.createElement("div",null,n))):null,v=(0,f.memo)((0,f.forwardRef)((function({adFixedHeight:e,adFixedWidth:t,adHeight:r,as:n="div",className:a,color:l="gray-dark",dividers:s,label:i="Story continues below advertisement",mbSpace:d,mtSpace:b,placeholderHeight:p,placeholderLabel:h="Advertisement",placeholderWidth:x,slotId:v,space:E,showOnlyLabel:O},k){let _=n||"div",C=(S=v).startsWith("slug_")?S:`slug_${S}`,Z=(e=>{let[t,r]=(0,y.useState)(!0);return(0,y.useEffect)((()=>{window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push((()=>{window.googletag.pubads().addEventListener("slotOnload",(t=>{let n=t.slot.getSlotElementId();e===n&&r(!1)}))}))}),[e]),t})(C),P=(()=>{let[e,t]=(0,y.useState)(!1);return(0,y.useEffect)((()=>{t(!0)}),[]),!1===j()&&e})(),N=(0,g.getClasses)("dib",{"flex divider":i&&s,gray:"gray"===l,"gray-dark":"gray-dark"===l});var S;return f.default.createElement(_,{ref:k,"aria-hidden":!0,className:(0,g.getClasses)("hide-for-print relative flex justify-center content-box items-center b bh",{"bc-gray-dark":"gray"===l,[`mb-${d||E}`]:d||E,[`mt-${b||E}`]:b||E,[`pt-${E} pb-${E}`]:E,[a]:a}),style:{minHeight:r,borderTopColor:i&&s||!s?"transparent":"",borderBottomColor:s?"":"transparent"}},f.default.createElement("div",{className:"center absolute w-100 border-box",style:{top:(i&&s||i&&O)&&"-9px"}},f.default.createElement("div",{className:`${N} pl-xs pr-xs font-sans-serif light font-xxxxs lh-md`,style:{"--primary-border-color":"gray"===l&&"var(--color-ui-gray-dark)"}},i)),f.default.createElement(w,((e,t)=>{for(var r in t||(t={}))c.call(t,r)&&m(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&m(e,r,t[r]);return e})({},{isVisible:Z,width:x,height:p,label:h})),P&&f.default.createElement("div",{className:"relative flex flex-column justify-center w-100",style:{minHeight:p,minWidth:x}},f.default.createElement("wp-ad",{id:C,class:"chromatic-ignore","data-chromatic":"ignore",style:{minHeight:p,height:e,width:t}})))})));v.displayName="AdSlot";var E=p(r(67294)),O=(r(45697),({adConfig:e})=>E.default.createElement(E.Fragment,null,!j()&&e&&E.default.createElement("script",{dangerouslySetInnerHTML:{__html:`window.wpAdFusion = ${JSON.stringify(e)}`}}),E.default.createElement("script",{src:"https://www.washingtonpost.com/zeus/main.js",async:!0})))},51742:function(e,t,r){"use strict";r.d(t,{yF:function(){return p}});var n=r(59499),a=r(67294),l=r(11657),s=r(3554),i=r(85893);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const c={JUMP_TO_ELEMENT:"keyUpdateSelected",REMOVE_IN_VIEW:"removeInView",SET_JUMP_ELEMENTS:"setJumpElements",SET_IN_VIEW:"setInView",TRACK_ELEMENT:"trackElement",TOGGLE_DRAWER:"toggleDrawer"},u={drawerOpen:!1,trackedElements:new Set,jumpElements:[],visibleElements:new Map},m=(e,t)=>{switch(t.type){case c.JUMP_TO_ELEMENT:{const{id:r,callback:n=null}=t.payload,a=new Map;return a.set(r,{id:r}),"function"===typeof n&&n(r,e),d(d({},e),{},{visibleElements:a})}case c.SET_JUMP_ELEMENTS:{const{jumpElements:r}=t.payload;return d(d({},e),{},{jumpElements:r})}case c.SET_IN_VIEW:{const{entry:r,id:n,nodeRef:a,storyIndex:l}=t.payload,s=new Map(e.visibleElements);return r&&s.set(n,{entry:r,id:n,nodeRef:a,storyIndex:l}),d(d({},e),{},{visibleElements:s})}case c.REMOVE_IN_VIEW:{const r=e.visibleElements,{id:n}=t.payload;return e.visibleElements.has(n)&&r.delete(n),d(d({},e),{},{visibleElements:r})}case c.TOGGLE_DRAWER:{const{drawerOpen:r}=t.payload;return d(d({},e),{},{drawerOpen:r})}case c.TRACK_ELEMENT:{const{id:r,storyIndex:n,gaEvent:a="inview-scroll-threshold"}=t.payload,s=new Set(e.trackedElements);return!s.has(r)&&[1,5].includes(n)&&(s.add(r),(0,l.Nf)(a,"onpage",n)),d(d({},e),{},{trackedElements:s})}default:return e}},b=a.createContext(),p=()=>a.useContext(b);t.ZP=e=>{let{children:t}=e;const[r,n,l,o,d]=(e=>{const[t,r]=a.useReducer(m,e),n=a.useCallback((e=>e(t)),[t]),l=(0,s.Z)((e=>{let{activeElement:t,jumpElements:r=[]}=e;return r.find((e=>e.id===t.id))||{}}),(e=>{let{visibleElements:t,jumpElements:r=[]}=e;return t.values().next().value?{activeElement:t.values().next().value,jumpElements:r}:{activeElement:{id:null}}}),(e=>e)),i=a.useCallback((e=>l(e)),[r]),o=a.useMemo((()=>({activeKeyJumpElementSelector:i})),[r]);return[c,r,o,t,n]})(u);return(0,i.jsx)(b.Provider,{value:{actions:r,dispatch:n,selectors:l,state:o,useSelector:d},children:t})}},47737:function(e,t,r){"use strict";var n=r(67294),a=r(35913),l=r(50881),s=r(55766),i=r(85893);t.Z=e=>{const{removableAds:t}=e;return t.indexOf("fixedBottom")>-1?null:(0,i.jsx)(d,{})};const o=()=>{const{0:e,1:t}=(0,n.useState)(!1),r=(0,s.Z)(),o=(0,n.useRef)(),d=(0,n.useRef)();(0,n.useEffect)((()=>{t(!0)}),[]);const c=(0,l.TL)();return r&&e?(0,i.jsx)(a.x,{className:"fixed bottom-0 left-0 w-100 bg-offwhite z-5 dn-ns hide-for-print",ref:d,"data-qa":"fixed-bottom-ad","aria-hidden":"true",id:"mobile-footer-ad-wrapper",css:{display:c.isOpen?"none":"block"},children:(0,i.jsx)("wp-ad",{className:"w-100",style:{height:50},ref:o,id:"slug_fixedBottom"})}):null},d=(0,n.memo)(o)},23194:function(e,t,r){"use strict";r.r(t);r(67294);var n=r(5152),a=r.n(n),l=r(85893);const s={voraciously:a()((()=>Promise.all([r.e(1997),r.e(7735)]).then(r.bind(r,37735))),{loadableGenerated:{webpack:()=>[37735]}}),launcher:a()((()=>r.e(5026).then(r.bind(r,75026))),{loadableGenerated:{webpack:()=>[75026]}}),btw:a()((()=>Promise.all([r.e(4312),r.e(3889)]).then(r.bind(r,33889))),{loadableGenerated:{webpack:()=>[33889]}})};t.default=e=>{let{vertical:t}=e;const r=s[t];return r?(0,l.jsx)(r,{}):null}},28157:function(e,t,r){"use strict";r.r(t),r.d(t,{CenteredLayout:function(){return me},default:function(){return be}});var n=r(59499),a=r(67294),l=r(5152),s=r.n(l),i=r(69107),o=r(21690),d=r(29208),c=r.n(d),u=r(19241),m=r.n(u),b=r(18878),p=r(34022),h=r(24024),f=r(50881),g=r(64390),y=r(64520),x=r(23194),j=r(56711),w=r(14376),v=r(32438),E=r(22202),O=r(36509),k=r(47398),_=r(85549),C=r(40626),Z=r(92038),P=r(96209),N=r(14514),S=r(63126),T=r(58032),M=r(85941),A=r(45505),D=r(38850),L=r(31292),I=r(27650),$=r(51742),R=r(85893);const G=s()((()=>Promise.all([r.e(6643),r.e(2515)]).then(r.t.bind(r,22515,23)).then((e=>e.GiftShareShortcut))),{loadableGenerated:{webpack:()=>[22515]}});var W=e=>{let{globalContent:t}=e;const{content_elements:r=[]}=t,{actions:n,dispatch:l}=(0,$.yF)();a.useEffect((()=>{const e=r.filter((e=>"card"===e.type));l({type:n.SET_JUMP_ELEMENTS,payload:{jumpElements:e}})}),[r]);const{articleProperties:s}=(0,I.$Y)(),{hasCollection:i}=s,{hasComments:o}=(0,I.$Y)(),d=(0,M.bj)(t),c=d&&(0,M.VQ)(t),u=(0,L.Z)(t);return(0,R.jsxs)(a.Fragment,{children:[(0,D.M)()&&(0,R.jsx)(Z.Z,{children:(0,R.jsx)("div",{className:"grid-center grid-body",children:(0,R.jsx)(D.Z,{})})}),(0,R.jsx)(Z.Z,{children:(0,R.jsx)(C.Z,{globalContent:t})}),"bottom"===c&&(0,R.jsx)("div",{className:"grid-center grid-body",children:(0,R.jsx)(T.Z,{linkBoxContent:d})}),(0,R.jsxs)("div",{className:"flex mt-md grid-center grid-body",children:[(0,R.jsx)(P.X,{}),!u&&(0,R.jsx)(Z.Z,{children:(0,R.jsx)(G,{className:(0,p.getClasses)("",{"ml-sm-ns":o})})})]}),(0,R.jsx)(Z.Z,{children:i&&(0,R.jsx)("div",{className:"grid-center grid-body",children:(0,R.jsx)(S.default,{})})}),(0,R.jsx)(Z.Z,{children:(0,R.jsx)("div",{className:"grid-center grid-body",children:(0,R.jsx)(N.Z,{globalContent:t})})}),(0,R.jsx)(Z.Z,{children:(0,R.jsx)("div",{className:"grid-center grid-body",children:(0,R.jsx)(A.ZP,{globalContent:t})})})]})},B=r(55766),V=r(2820),F=r(48545),H=r(63737);const U=s()((()=>r.e(7327).then(r.bind(r,87327))),{loadableGenerated:{webpack:()=>[87327]}}),J=s()((()=>r.e(1084).then(r.bind(r,61084))),{loadableGenerated:{webpack:()=>[61084]}});var z=()=>{const{globalContent:e}=(0,i.bp)(),t=e?.additional_properties?.first_display_date??e?.display_date,r=(0,a.useMemo)((()=>new Date(t).valueOf()<new Date("2022-02-24").valueOf()),[t]),n=[];return"image"!==e?.content_elements[0]?.type&&n.push("ledeArt"),r||n.push("sponsor"),{elementsToHide:n,containerClass:"flex flex-column center mt-lg-mod-ns mt-md",layout:["sponsor","kicker","headline","subheadline","byline","audio","ledeArt"],renderer:{sponsor:{component:U,containerClass:"flex justify-center mb-lg mb-lg-mod-ns"},kicker:{component:J,containerClass:"flex justify-center"},headline:{containerClass:"pl-md pr-md"},ledeArt:{containerClass:"lede-art ma-auto w-700"}}}};function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const q={default:{background:"#000",text:"white",kicker:"white gray-dark-underline",bylineText:"gray",caption:"gray-light",author:"light",audio:"dark"},"theme-yellow":{background:"#EAD94E",text:"black",kicker:"black black-underline hover-black link-hover-no-underline",bylineText:"black",caption:"black",author:"dark",audio:"light"},"theme-blue":{background:"#1366B3",text:"white",kicker:"white white-underline hover-white link-hover-no-underline",bylineText:"white",caption:"white",author:"light",audio:"dark"},"theme-red":{background:"#C23232",text:"white",kicker:"white white-underline hover-white link-hover-no-underline",bylineText:"white",caption:"white",author:"light",audio:"dark"}};var K=(e,t)=>{const{globalContent:r}=(0,i.bp)(),n=c()(r,"taxonomy.tags",[])||[],l=(0,a.useMemo)((()=>n.find((e=>e.text.includes("theme-")))?.text||"default"),[n]),s=q[l];let o={};return"title_left"!==e&&"title_right"!==e||(o={containerClass:"pb-sm-ns"}),Y(Y({},o),{},{containerStyle:"default"!==e||t?{background:s?.background}:{background:`linear-gradient(0deg, #fff 50%, ${s?.background} 50%)`},renderer:{kicker:{props:{fontClasses:`${s?.kicker} uppercase letter-spacing`}},headline:{props:{className:`${s?.text} font-magazine center ma-auto`,style:{maxWidth:900}}},subheadline:{props:{className:`${s?.text} font-light center font--subhead ml-auto mr-auto mb-sm mb-md-ns`,style:{maxWidth:900}}},ledeArt:{props:{captionClasses:t||"default"!==e?s?.caption:"gray-dark"}},byline:{props:{bylineClasses:{timestamp:s?.bylineText},theme:s.author}},audio:{props:{theme:s?.audio,className:`magazine-topper-${s?.audio}`}}}})},Q=r(67874),ee=r(3554),te=r(90626),re=r(44509),ne=r(82733),ae=r(6568),le=r(29686),se=r(47737),ie=r(64616);function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function de(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const ce=s()((()=>Promise.all([r.e(6643),r.e(2515)]).then(r.t.bind(r,22515,23)).then((e=>e.GiftShareShortcut))),{loadableGenerated:{webpack:()=>[22515]}}),ue=()=>{const{hasComments:e,articleProperties:t}=(0,I.$Y)(),{hasCollection:r,isFAQ:n,isBrief:l}=t,{globalContent:s}=(0,i.bp)();let o=0;const d=[],c=(0,D.M)(),u=(0,M.bj)(s),m=u&&(0,M.VQ)(s),b=(0,L.Z)(s);(0,a.useEffect)((()=>{window.dataLayer&&window.dataLayer.push({pageDimension:"boa_fail"})}),[]);let h;if(s.content_elements.some((e=>"divider"===e.type&&("inline_ad"===e.subtype||"inline-ad"===e.subtype))))h=(0,le.sk)((0,F.Z)(s.content_elements));else{const e=(0,ee.Z)(F.Z,Q.PL);h=(0,le.sk)(e(s.content_elements))}h.forEach((e=>{if("divider"===e.type&&("inline-ad"===e.subtype||"inline_ad"===e.subtype)){o+=1;const e={type:"inline-ad",adIndex:o,displayAdIndex:!0};return d.push(de(de({},e),{},{subtype:"desktop"})),void d.push(de(de({},e),{},{subtype:"mobile"}))}d.push(e)}));const f=de(de({},s),{},{content_elements:d});if(n){const e=(0,ne.v7)(f);return(0,R.jsx)(y.Z,{children:(0,R.jsx)($.ZP,{children:(0,R.jsx)(W,{globalContent:e})})})}const g=e||!b;return(0,R.jsxs)(y.Z,{children:[c&&(0,R.jsx)("div",{className:"grid-center grid-body",children:(0,R.jsx)(D.Z,{})}),(0,R.jsx)(C.Z,{globalContent:f,isBrief:l}),"bottom"===m&&(0,R.jsx)("div",{className:"grid-center grid-body",children:(0,R.jsx)(T.Z,{linkBoxContent:u})}),g&&(0,R.jsx)("div",{className:"flex mt-md grid-center grid-body",children:(0,R.jsxs)(y.Z,{children:[(0,R.jsx)(P.X,{}),!b&&(0,R.jsx)(ce,{className:(0,p.getClasses)("",{"ml-sm-ns":e})})]})}),(0,R.jsx)(y.Z,{children:r&&(0,R.jsx)("div",{className:"grid-center grid-body",children:(0,R.jsx)(S.default,{})})}),!l&&(0,R.jsx)("div",{className:"grid-center grid-body",children:(0,R.jsx)(N.Z,{globalContent:s,followButtonType:"pill"})})]})},me=e=>{let{variant:t="default"}=e;const{globalContent:r,requestUri:n}=(0,i.bp)(),{articleProperties:l}=(0,I.$Y)(),{isAdFreeSub:s,removableAds:d}=(0,g.aF)(),{vertical:u,isBrief:b,isBTW:p,isVoraciously:C}=l,Z=(0,B.Z)(),{0:P}=(0,a.useState)(!0),N="true"===(0,re.vl)(n).no_nav,S=(0,o.r)({source:"site-homepage",filter:V.Z})||{site:{}},{headlines:{basic:T}}=r,M=(0,O.Gm)(r),A=(0,te.XM)(r.display_date||r.last_updated_date),D=c()(r,"additional_properties.centered_layout_topper","default"),L=(0,O.s_)(r),$={brief:z(),magazine:K(D,Z)},G=(0,h.zo)("div",{justifyContent:"space-between",gridColumnStart:2,gridColumnEnd:3,maxWidth:"640px",marginLeft:"auto",marginRight:"auto",marginBottom:b&&"$100",width:"100%",zIndex:5,flexDirection:"column","@sm":{marginBottom:"$100"},"@notSm":{display:"flex"}});return(0,R.jsxs)(y.Z,{children:[!N&&(0,R.jsx)(w.ArticleHeader,{}),(C||L||p)&&(0,R.jsx)(x.default,{vertical:u}),!A&&(0,R.jsx)(E.Z,{isCentered:!0}),b&&(0,R.jsx)(j.Z,{}),(0,R.jsx)(H.Z,{}),(0,R.jsxs)("div",{className:"grid-layout centered-layout",children:[(0,R.jsx)(y.Z,{children:(0,R.jsx)("div",{className:"grid-full-bleed",children:(0,R.jsx)(_.Z,{headline:T,subheadline:M,variant:D,isMobile:Z,customConfig:$[t]||{}})})}),(0,R.jsxs)(G,{children:[(0,R.jsx)(y.Z,{children:(0,R.jsx)(ie.Z,{globalContent:r})}),(0,R.jsx)(y.Z,{children:(0,O.TH)(r)&&(0,O.Zb)(r)&&(0,R.jsx)("div",{className:"mb-sm",children:(0,R.jsx)(f.Cb,{})})})]}),(0,R.jsx)(y.Z,{children:(0,R.jsx)(ue,{})}),(0,R.jsxs)("div",{className:"grid-center grid-mobile-full-bleed",children:[(0,R.jsx)(y.Z,{children:(0,R.jsx)(k.Z,{globalContent:r,isCenteredLayout:!0,eagerLoadMostFromAuthor:P,eagerLoadMoreFromPost:P,requestUri:n})}),!s&&(0,R.jsx)(se.Z,{removableAds:d})]})]}),(0,R.jsx)(v.default,{}),(0,R.jsx)(m(),{globalContent:r,siteSubsData:S})]})};var be=e=>(0,R.jsx)(b.Z,{children:(0,R.jsx)(ae.X,{isAuthorPage:!1,children:(0,R.jsx)(me,de({},e))})})}}]);