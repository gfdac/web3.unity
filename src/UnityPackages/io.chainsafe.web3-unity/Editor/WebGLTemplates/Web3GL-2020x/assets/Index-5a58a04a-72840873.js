import{b6 as R,b7 as I,b8 as M,bs as O,b9 as pe,ba as _,bf as w,bc as G,bd as T,be as V,bg as C,bi as Y,aI as _e,aH as we,bh as H,bq as h,br as p,bF as Ce,bm as D,bx as L,c3 as B,bn as F,bB as g,bb as P,bD as me,cb as ze,cc as Te,cd as je,bI as xe,bJ as Le,bL as Se,bS as Pe,bp as A,bY as Z,bZ as Ee,ce as Ne,cf as ye,bR as Re,bE as Ie,cg as J,ch as q,bA as $,bM as he,bk as Me,bN as ge,ci as Oe,bj as ke,cj as U,ck as X,bo as N,cl as Q,by as E,bH as K,cm as ee,cn as He,co as te,cp as S,bv as De,bT as W,cq as Fe}from"./index-d05f6a39.js";function Ae(i,{from:e,to:t},n={}){const o=getComputedStyle(i),r=o.transform==="none"?"":o.transform,[f,s]=o.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*f/t.width-(t.left+f),a=e.top+e.height*s/t.height-(t.top+s),{delay:c=0,duration:d=u=>Math.sqrt(u)*120,easing:v=ye}=n;return{delay:c,duration:Ie(d)?d(Math.sqrt(l*l+a*a)):d,easing:v,css:(u,y)=>{const b=y*l,m=y*a,z=u+y*e.width/t.width,j=u+y*e.height/t.height;return`transform: ${r} translate(${b}px, ${m}px) scale(${z}, ${j});`}}}function Ge(i){O(i,"svelte-13cuwwo","div.svelte-13cuwwo{box-sizing:content-box}.border.svelte-13cuwwo{border:2px solid;border-radius:120px;overflow:hidden}")}function Ve(i){let e,t;return{c(){e=h("div"),p(e,"class","border svelte-13cuwwo"),p(e,"style",t=`
    width: ${i[2]-i[3]*2}px; 
    height: ${i[2]-i[3]*2}px; 
    border-color: var(${i[1]}); 
    padding: ${i[3]}px; 
    background-color: ${i[4]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `)},m(n,o){_(n,e,o),e.innerHTML=i[0]},p(n,[o]){o&1&&(e.innerHTML=n[0]),o&30&&t!==(t=`
    width: ${n[2]-n[3]*2}px; 
    height: ${n[2]-n[3]*2}px; 
    border-color: var(${n[1]}); 
    padding: ${n[3]}px; 
    background-color: ${n[4]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `)&&p(e,"style",t)},i:N,o:N,d(n){n&&C(e)}}}function $e(i,e,t){let{icon:n}=e,{borderColorVar:o}=e,{size:r}=e,{padding:f=0}=e,{background:s="transparent"}=e;return i.$$set=l=>{"icon"in l&&t(0,n=l.icon),"borderColorVar"in l&&t(1,o=l.borderColorVar),"size"in l&&t(2,r=l.size),"padding"in l&&t(3,f=l.padding),"background"in l&&t(4,s=l.background)},[n,o,r,f,s]}class Be extends R{constructor(e){super(),I(this,e,$e,Ve,M,{icon:0,borderColorVar:1,size:2,padding:3,background:4},Ge)}}function qe(i){O(i,"svelte-jvic9v","div.notification-icons-wrapper.svelte-jvic9v{height:32px;width:32px}.border.svelte-jvic9v{border-radius:8px}div.notification-icon.svelte-jvic9v{padding:6px}div.pending-icon.svelte-jvic9v{animation:svelte-jvic9v-blink 2s ease-in infinite;height:100%;width:100%;padding:7px}@keyframes svelte-jvic9v-blink{from,to{opacity:1}50%{opacity:0.2}}div.border-action.svelte-jvic9v{height:32px;min-width:32px;border-radius:8px;overflow:hidden;will-change:transform}div.border-action.svelte-jvic9v:before{content:'';background-image:conic-gradient(#b1b7f2 20deg, #6370e5 120deg);height:140%;width:140%;position:absolute;left:-25%;top:-25%;animation:svelte-jvic9v-rotate 2s infinite linear}div.chain-icon-container.svelte-jvic9v{left:18px;top:18px}@keyframes svelte-jvic9v-rotate{100%{transform:rotate(-360deg)}}")}function ne(i){let e,t,n,o,r=S[i[1].type].eventIcon+"",f,s,l,a=!i[1].id.includes("customNotification")&&!i[1].id.includes("preflight"),c,d=i[1].type==="pending"&&ie(),v=a&&oe(i);return{c(){e=h("div"),d&&d.c(),t=L(),n=h("div"),o=h("div"),l=L(),v&&v.c(),p(o,"class",f=B(`notification-icon flex items-center justify-center ${i[1].type==="pending"?"pending-icon":""}`)+" svelte-jvic9v"),p(n,"class","flex items-center justify-center border relative notification-icons-wrapper svelte-jvic9v"),p(n,"style",s=`background:${S[i[1].type].backgroundColor}; color: ${S[i[1].type].iconColor||""}; ${i[1].type==="pending"?"height: 28px; width: 28px; margin: 2px;":`border: 2px solid ${S[i[1].type].borderColor}`}; `),p(e,"class","relative")},m(u,y){_(u,e,y),d&&d.m(e,null),g(e,t),g(e,n),g(n,o),o.innerHTML=r,g(e,l),v&&v.m(e,null),c=!0},p(u,y){u[1].type==="pending"?d||(d=ie(),d.c(),d.m(e,t)):d&&(d.d(1),d=null),(!c||y&2)&&r!==(r=S[u[1].type].eventIcon+"")&&(o.innerHTML=r),(!c||y&2&&f!==(f=B(`notification-icon flex items-center justify-center ${u[1].type==="pending"?"pending-icon":""}`)+" svelte-jvic9v"))&&p(o,"class",f),(!c||y&2&&s!==(s=`background:${S[u[1].type].backgroundColor}; color: ${S[u[1].type].iconColor||""}; ${u[1].type==="pending"?"height: 28px; width: 28px; margin: 2px;":`border: 2px solid ${S[u[1].type].borderColor}`}; `))&&p(n,"style",s),y&2&&(a=!u[1].id.includes("customNotification")&&!u[1].id.includes("preflight")),a?v?(v.p(u,y),y&2&&w(v,1)):(v=oe(u),v.c(),w(v,1),v.m(e,null)):v&&(G(),T(v,1,1,()=>{v=null}),V())},i(u){c||(w(v),c=!0)},o(u){T(v),c=!1},d(u){u&&C(e),d&&d.d(),v&&v.d()}}}function ie(i){let e;return{c(){e=h("div"),p(e,"class","border-action absolute svelte-jvic9v")},m(t,n){_(t,e,n)},d(t){t&&C(e)}}}function oe(i){let e,t,n;return t=new Be({props:{icon:i[0].icon,size:16,background:i[0].color,borderColorVar:"--notify-onboard-background, var(--onboard-gray-600, var(--gray-600))",padding:3}}),{c(){e=h("div"),D(t.$$.fragment),p(e,"class","absolute chain-icon-container svelte-jvic9v")},m(o,r){_(o,e,r),F(t,e,null),n=!0},p(o,r){const f={};r&1&&(f.icon=o[0].icon),r&1&&(f.background=o[0].color),t.$set(f)},i(o){n||(w(t.$$.fragment,o),n=!0)},o(o){T(t.$$.fragment,o),n=!1},d(o){o&&C(e),A(t)}}}function We(i){let e,t,n=i[1].type&&ne(i);return{c(){n&&n.c(),e=pe()},m(o,r){n&&n.m(o,r),_(o,e,r),t=!0},p(o,[r]){o[1].type?n?(n.p(o,r),r&2&&w(n,1)):(n=ne(o),n.c(),w(n,1),n.m(e.parentNode,e)):n&&(G(),T(n,1,1,()=>{n=null}),V())},i(o){t||(w(n),t=!0)},o(o){T(n),t=!1},d(o){n&&n.d(o),o&&C(e)}}}function Ke(i,e,t){let{chainStyles:n=De}=e,{notification:o}=e;return i.$$set=r=>{"chainStyles"in r&&t(0,n=r.chainStyles),"notification"in r&&t(1,o=r.notification)},[n,o]}class Ye extends R{constructor(e){super(),I(this,e,Ke,We,M,{chainStyles:0,notification:1},qe)}}function Ze(i){O(i,"svelte-pm7idu",`div.svelte-pm7idu{display:flex;justify-content:center;font-size:inherit;font-family:inherit;margin:0 1.5rem 0 0.75rem}span.svelte-pm7idu{font-family:inherit;display:flex;align-items:center;margin:0 2px}.time.svelte-pm7idu{color:var(
      --notify-onboard-timer-color,
      var(--onboard-gray-300, var(--gray-300))
    );margin-left:4px}`)}function re(i){let e,t,n=i[2](i[1]-i[0])+"",o,r;return{c(){e=E(`-
    `),t=h("span"),o=E(n),r=E(`
    ago`),p(t,"class","svelte-pm7idu")},m(f,s){_(f,e,s),_(f,t,s),g(t,o),_(f,r,s)},p(f,s){s&3&&n!==(n=f[2](f[1]-f[0])+"")&&K(o,n)},d(f){f&&C(e),f&&C(t),f&&C(r)}}}function Je(i){let e,t=i[0]&&re(i);return{c(){e=h("div"),t&&t.c(),p(e,"class","time svelte-pm7idu")},m(n,o){_(n,e,o),t&&t.m(e,null)},p(n,[o]){n[0]?t?t.p(n,o):(t=re(n),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i:N,o:N,d(n){n&&C(e),t&&t.d()}}}function Ue(i,e,t){let n,o;H(i,ge,a=>t(3,n=a)),H(i,Fe,a=>t(4,o=a));let{startTime:r}=e;function f(a){const c=Math.floor(a/1e3),d=c<0?0:c;return d>=60?`${Math.floor(d/60).toLocaleString(o)} ${n("notify.time.minutes")}`:`${d.toLocaleString(o)} ${n("notify.time.seconds")}`}let s=Date.now();const l=setInterval(()=>{t(1,s=Date.now())},1e3);return ke(()=>{clearInterval(l)}),i.$$set=a=>{"startTime"in a&&t(0,r=a.startTime)},[r,s,f]}class Xe extends R{constructor(e){super(),I(this,e,Ue,Je,M,{startTime:0},Ze)}}function Qe(i){O(i,"svelte-1otz6tt",`div.notify-transaction-data.svelte-1otz6tt{font-size:var(
      --notify-onboard-transaction-font-size,
      var(--onboard-font-size-6, var(--font-size-6))
    );font-family:inherit;margin:0px 20px 0px 8px;justify-content:center}.hash-time.svelte-1otz6tt{display:inline-flex;margin-top:4px;font-size:var(
      --notify-onboard-hash-time-font-size,
      var(--onboard-font-size-7, var(--font-size-7))
    );line-height:var(
      --notify-onboard-hash-time-font-line-height,
      var(--onboard-font-line-height-4, var(--font-line-height-4))
    )}.address-hash.svelte-1otz6tt{color:var(
      --notify-onboard-address-hash-color,
      var(--onboard-primary-200, var(--primary-200))
    )}a.address-hash.svelte-1otz6tt{color:var(
      --notify-onboard-anchor-color,
      var(--onboard-primary-400, var(--primary-400))
    )}a.svelte-1otz6tt{display:flex;text-decoration:none;color:inherit}.transaction-status.svelte-1otz6tt{color:var(--notify-onboard-transaction-status, inherit);line-height:var(
      --notify-onboard-font-size-5,
      var(--onboard-font-size-5, var(--font-size-5))
    );font-weight:400;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}`)}function ae(i){let e,t,n,o;function r(l,a){return l[0].link?tt:et}let f=r(i),s=f(i);return n=new Xe({props:{startTime:i[0].startTime}}),{c(){e=h("span"),s.c(),t=L(),D(n.$$.fragment),p(e,"class","hash-time svelte-1otz6tt")},m(l,a){_(l,e,a),s.m(e,null),g(e,t),F(n,e,null),o=!0},p(l,a){f===(f=r(l))&&s?s.p(l,a):(s.d(1),s=f(l),s&&(s.c(),s.m(e,t)));const c={};a&1&&(c.startTime=l[0].startTime),n.$set(c)},i(l){o||(w(n.$$.fragment,l),o=!0)},o(l){T(n.$$.fragment,l),o=!1},d(l){l&&C(e),s.d(),A(n)}}}function et(i){let e,t=W(i[0].id)+"",n;return{c(){e=h("div"),n=E(t),p(e,"class","address-hash svelte-1otz6tt")},m(o,r){_(o,e,r),g(e,n)},p(o,r){r&1&&t!==(t=W(o[0].id)+"")&&K(n,t)},d(o){o&&C(e)}}}function tt(i){let e,t=W(i[0].id)+"",n,o;return{c(){e=h("a"),n=E(t),p(e,"class","address-hash svelte-1otz6tt"),p(e,"href",o=i[0].link),p(e,"target","_blank"),p(e,"rel","noreferrer noopener")},m(r,f){_(r,e,f),g(e,n)},p(r,f){f&1&&t!==(t=W(r[0].id)+"")&&K(n,t),f&1&&o!==(o=r[0].link)&&p(e,"href",o)},d(r){r&&C(e)}}}function nt(i){let e,t,n=i[0].message+"",o,r,f=i[0].id&&!i[0].id.includes("customNotification")&&!i[0].id.includes("preflight"),s,l=f&&ae(i);return{c(){e=h("div"),t=h("span"),o=E(n),r=L(),l&&l.c(),p(t,"class","transaction-status svelte-1otz6tt"),p(e,"class","flex flex-column notify-transaction-data svelte-1otz6tt")},m(a,c){_(a,e,c),g(e,t),g(t,o),g(e,r),l&&l.m(e,null),s=!0},p(a,[c]){(!s||c&1)&&n!==(n=a[0].message+"")&&K(o,n),c&1&&(f=a[0].id&&!a[0].id.includes("customNotification")&&!a[0].id.includes("preflight")),f?l?(l.p(a,c),c&1&&w(l,1)):(l=ae(a),l.c(),w(l,1),l.m(e,null)):l&&(G(),T(l,1,1,()=>{l=null}),V())},i(a){s||(w(l),s=!0)},o(a){T(l),s=!1},d(a){a&&C(e),l&&l.d()}}}function it(i,e,t){let{notification:n}=e;return i.$$set=o=>{"notification"in o&&t(0,n=o.notification)},[n]}class ot extends R{constructor(e){super(),I(this,e,it,nt,M,{notification:0},Qe)}}var rt=`
<svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="currentColor"/>
</svg>
`;const at=["txPool"],lt=["main","matic-main"],st=["Ledger","Trezor","Keystone","KeepKey","D'CENT"],le=i=>at.includes(i),se=i=>lt.includes(i),ce=i=>i&&st.includes(i.label);async function fe({type:i,wallet:e,transaction:t}){const{from:n,input:o,value:r,to:f,nonce:s,gas:l,network:a}=t,c=q[a],{gasPriceProbability:d}=Y.get().notify.replacement,{gas:v,apiKey:u}=Z,[y]=await v.get({chains:[q[a]],endpoint:"blockPrices",apiKey:u}),{maxFeePerGas:b,maxPriorityFeePerGas:m}=y.blockPrices[0].estimatedPrices.find(({confidence:x})=>x===(i==="speedup"?d.speedup:d.cancel)),z=ee(b),j=ee(m),k=o==="0x"?{}:{data:o};return e.provider.request({method:"eth_sendTransaction",params:[{type:"0x2",from:n,to:i==="cancel"?n:f,chainId:parseInt(c),value:`${He.from(r).toHexString()}`,nonce:te(s),gasLimit:te(l),maxFeePerGas:z,maxPriorityFeePerGas:j,...k}]})}function ct(i){O(i,"svelte-ftkynd",`.bn-notify-notification.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{--backround-color:var(--notify-onboard-background, var(--w3o-backround-color, var(--gray-700)));--foreground-color:var(--w3o-foreground-color, var(--gray-600));--text-color:var(--w3o-text-color, #FFF);--border-color:var(--w3o-border-color);font-family:inherit;transition:background 300ms ease-in-out, color 300ms ease-in-out;pointer-events:all;backdrop-filter:blur(5px);width:100%;min-height:56px;display:flex;flex-direction:column;position:relative;overflow:hidden;border:1px solid transparent;border-radius:var(
      --notify-onboard-border-radius,
      var(--onboard-border-radius-4, var(--border-radius-4))
    );background:var(--foreground-color);color:var(--text-color)}.bn-notify-notification-inner.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:0.75rem}.bn-notify-notification.svelte-ftkynd:hover>div.bn-notify-notification-inner.svelte-ftkynd>div.notify-close-btn-desktop.svelte-ftkynd{visibility:visible;opacity:1}div.notify-close-btn.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{margin-left:auto;margin-bottom:auto;height:24px;width:24px;position:absolute;top:8px;right:8px;justify-content:center;align-items:center}div.notify-close-btn-desktop.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{visibility:hidden;transition:visibility 0.15s linear, opacity 0.15s linear;opacity:0}.notify-close-btn.svelte-ftkynd .close-icon.svelte-ftkynd.svelte-ftkynd{width:20px;margin:auto;color:var(--text-color)}.notify-close-btn.svelte-ftkynd>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-color)}.notify-close-btn.svelte-ftkynd:hover>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-hover)}.transaction-status.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{color:var(
      --notify-onboard-transaction-status-color,
      var(--onboard-primary-100, var(--primary-100))
    );line-height:14px}.dropdown.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:0px;overflow:hidden;transition:height 150ms ease-in-out}.dropdown-visible.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:48px}.dropdown-buttons.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{background-color:var(
      --notify-onboard-dropdown-background,
      var(--onboard-gray-700, var(--gray-700))
    );width:100%;padding:8px}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:4px 12px;border-radius:var(
      --notify-onboard-dropdown-border-radius,
      var(--onboard-border-radius-5, var(--border-radius-5))
    );background-color:transparent;font-size:var(
      --notify-onboard-dropdown-font-size,
      var(--onboard-font-size-6, var(--font-size-6))
    );color:var(
      --notify-onboard-dropdown-text-color,
      var(--onboard-primary-400, var(--primary-400))
    );transition:all 150ms ease-in-out;cursor:pointer}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd:hover{background:var(
      --notify-onboard-dropdown-btn-hover-background,
      rgba(146, 155, 237, 0.2)
    )}`)}function de(i){let e,t,n,o,r,f;return{c(){e=h("div"),t=h("button"),t.textContent="Cancel",n=L(),o=h("button"),o.textContent="Speed-up",p(t,"class","dropdown-button svelte-ftkynd"),p(o,"class","dropdown-button svelte-ftkynd"),p(e,"class","dropdown-buttons flex items-center justify-end svelte-ftkynd")},m(s,l){_(s,e,l),g(e,t),g(e,n),g(e,o),r||(f=[P(t,"click",i[9]),P(o,"click",i[10])],r=!0)},p:N,d(s){s&&C(e),r=!1,he(f)}}}function ft(i){let e,t,n,o,r,f,s,l,a,c,d,v,u,y;n=new Ye({props:{notification:i[0],chainStyles:J[q[i[0].network]]}}),r=new ot({props:{notification:i[0]}});let b=i[0].eventCode==="txPool"&&de(i);return{c(){e=h("div"),t=h("div"),D(n.$$.fragment),o=L(),D(r.$$.fragment),f=L(),s=h("div"),l=h("div"),a=L(),c=h("div"),b&&b.c(),p(l,"class","flex items-center close-icon svelte-ftkynd"),p(s,"class","notify-close-btn notify-close-btn-"+i[4].type+" pointer flex svelte-ftkynd"),p(t,"class","flex bn-notify-notification-inner svelte-ftkynd"),p(c,"class","dropdown svelte-ftkynd"),$(c,"dropdown-visible",i[2]&&i[5]&&le(i[0].eventCode)&&se(i[0].network)&&ce(i[7])),p(e,"class",d="bn-notify-notification bn-notify-notification-"+i[0].type+"} svelte-ftkynd"),$(e,"bn-notify-clickable",i[0].onClick)},m(m,z){_(m,e,z),g(e,t),F(n,t,null),g(t,o),F(r,t,null),g(t,f),g(t,s),g(s,l),l.innerHTML=rt,g(e,a),g(e,c),b&&b.m(c,null),v=!0,u||(y=[P(s,"click",me(i[8])),P(e,"mouseenter",i[11]),P(e,"mouseleave",i[12]),P(e,"click",i[13])],u=!0)},p(m,[z]){const j={};z&1&&(j.notification=m[0]),z&1&&(j.chainStyles=J[q[m[0].network]]),n.$set(j);const k={};z&1&&(k.notification=m[0]),r.$set(k),m[0].eventCode==="txPool"?b?b.p(m,z):(b=de(m),b.c(),b.m(c,null)):b&&(b.d(1),b=null),(!v||z&165)&&$(c,"dropdown-visible",m[2]&&m[5]&&le(m[0].eventCode)&&se(m[0].network)&&ce(m[7])),(!v||z&1&&d!==(d="bn-notify-notification bn-notify-notification-"+m[0].type+"} svelte-ftkynd"))&&p(e,"class",d),(!v||z&1)&&$(e,"bn-notify-clickable",m[0].onClick)},i(m){v||(w(n.$$.fragment,m),w(r.$$.fragment,m),v=!0)},o(m){T(n.$$.fragment,m),T(r.$$.fragment,m),v=!1},d(m){m&&C(e),A(n),A(r),b&&b.d(),u=!1,he(y)}}}function dt(i,e,t){let n,o;H(i,Me,k=>t(15,n=k)),H(i,ge,k=>t(3,o=k));const{device:r,gas:f}=Z;let{notification:s}=e,{updateParentOnRemove:l}=e,a,c=!1;const d=Oe.getValue().find(({hash:k})=>k===s.id),v=d&&n.find(({accounts:k})=>!!k.find(({address:x})=>x.toLowerCase()===d.from.toLowerCase()));ke(()=>{clearTimeout(a)});const u=()=>{U(s.id),X(s.id),l()},y=async()=>{try{await fe({type:"cancel",wallet:v,transaction:d})}catch{const x=`${d.hash.slice(0,9)}:txReplaceError${d.hash.slice(-5)}`;Q({id:x,type:"hint",eventCode:"txError",message:o("notify.transaction.txReplaceError"),key:x,autoDismiss:4e3})}},b=async()=>{try{await fe({type:"speedup",wallet:v,transaction:d})}catch{const x=`${d.hash.slice(0,9)}:txReplaceError${d.hash.slice(-5)}`;Q({id:x,type:"hint",eventCode:"txError",message:o("notify.transaction.txReplaceError"),key:x,autoDismiss:4e3})}},m=()=>t(2,c=!0),z=()=>t(2,c=!1),j=k=>s.onClick&&s.onClick(k);return i.$$set=k=>{"notification"in k&&t(0,s=k.notification),"updateParentOnRemove"in k&&t(1,l=k.updateParentOnRemove)},i.$$.update=()=>{i.$$.dirty&1&&s.autoDismiss&&(a=setTimeout(()=>{U(s.id),X(s.id)},s.autoDismiss))},[s,l,c,o,r,f,d,v,u,y,b,m,z,j]}class ut extends R{constructor(e){super(),I(this,e,dt,ft,M,{notification:0,updateParentOnRemove:1},ct)}}function vt(i){O(i,"svelte-1h8mmo3",`ul.svelte-1h8mmo3{padding-left:0;display:flex;flex-flow:column nowrap;font-size:var(
      --notify-onboard-font-size,
      var(--onboard-font-size-5, var(--font-size-5))
    );list-style-type:none;overflow:visible;scrollbar-width:none;box-sizing:border-box;z-index:var(--notify-onboard-z-index, 300);font-family:var(
      --notify-onboard-font-family,
      var(--onboard-font-family-normal, inherit)
    );margin:8px 0;pointer-events:all}.y-scroll.svelte-1h8mmo3{overflow-y:scroll}.y-visible.svelte-1h8mmo3{overflow-y:visible}li.notification-list-top.svelte-1h8mmo3:not(:first-child){margin-top:8px}li.notification-list-bottom.svelte-1h8mmo3:not(:first-child){margin-bottom:8px}ul.bn-notify-bottomLeft.svelte-1h8mmo3,ul.bn-notify-bottomRight.svelte-1h8mmo3{flex-direction:column-reverse}@media only screen and (max-width: 450px){ul.svelte-1h8mmo3{width:100%}}.bn-notify-clickable:hover{cursor:pointer}.svelte-1h8mmo3::-webkit-scrollbar{display:none}`)}function ue(i,e,t){const n=i.slice();return n[12]=e[t],n}function ve(i){let e,t=[],n=new Map,o,r,f,s=i[2];const l=a=>a[12].key;for(let a=0;a<s.length;a+=1){let c=ue(i,s,a),d=l(c);n.set(d,t[a]=be(d,c))}return{c(){e=h("ul");for(let a=0;a<t.length;a+=1)t[a].c();p(e,"class",o="bn-notify-"+i[0]+" "+i[5]+" svelte-1h8mmo3"),p(e,"style",r=`${i[0].includes("top")?"justify-content:flex-start;":""}; max-height: calc(100vh - ${i[6].expanded?"412px":i[1]&&i[7].type!=="mobile"?"82px":!i[1]&&i[7].type==="mobile"?"108px":"24px"})`)},m(a,c){_(a,e,c);for(let d=0;d<t.length;d+=1)t[d].m(e,null);f=!0},p(a,c){if(c&517){s=a[2],G();for(let d=0;d<t.length;d+=1)t[d].r();t=Ce(t,c,l,1,a,s,n,e,Ne,be,null,ue);for(let d=0;d<t.length;d+=1)t[d].a();V()}(!f||c&33&&o!==(o="bn-notify-"+a[0]+" "+a[5]+" svelte-1h8mmo3"))&&p(e,"class",o),(!f||c&67&&r!==(r=`${a[0].includes("top")?"justify-content:flex-start;":""}; max-height: calc(100vh - ${a[6].expanded?"412px":a[1]&&a[7].type!=="mobile"?"82px":!a[1]&&a[7].type==="mobile"?"108px":"24px"})`))&&p(e,"style",r)},i(a){if(!f){for(let c=0;c<s.length;c+=1)w(t[c]);f=!0}},o(a){for(let c=0;c<t.length;c+=1)T(t[c]);f=!1},d(a){a&&C(e);for(let c=0;c<t.length;c+=1)t[c].d()}}}function be(i,e){let t,n,o,r,f,s,l,a=N,c,d,v;return n=new ut({props:{notification:e[12],updateParentOnRemove:e[9]}}),{key:i,first:null,c(){t=h("li"),D(n.$$.fragment),o=L(),p(t,"class",r=B(`bn-notify-li-${e[0]} ${e[0].includes("top")?"notification-list-top":"notification-list-bottom"}`)+" svelte-1h8mmo3"),this.first=t},m(u,y){_(u,t,y),F(n,t,null),g(t,o),c=!0,d||(v=P(t,"click",me(e[10])),d=!0)},p(u,y){e=u;const b={};y&4&&(b.notification=e[12]),n.$set(b),(!c||y&1&&r!==(r=B(`bn-notify-li-${e[0]} ${e[0].includes("top")?"notification-list-top":"notification-list-bottom"}`)+" svelte-1h8mmo3"))&&p(t,"class",r)},r(){l=t.getBoundingClientRect()},f(){ze(t),a(),Te(t,l)},a(){a(),a=je(t,l,Ae,{duration:500})},i(u){c||(w(n.$$.fragment,u),xe(()=>{s&&s.end(1),f=Le(t,Se,{duration:1200,delay:300,x:e[3],y:e[4],easing:pt}),f.start()}),c=!0)},o(u){T(n.$$.fragment,u),f&&f.invalidate(),s=Pe(t,Re,{duration:300,easing:ye}),c=!1},d(u){u&&C(t),A(n),u&&s&&s.end(),d=!1,v()}}}function bt(i){let e,t,n=i[2].length&&ve(i);return{c(){n&&n.c(),e=pe()},m(o,r){n&&n.m(o,r),_(o,e,r),t=!0},p(o,[r]){o[2].length?n?(n.p(o,r),r&4&&w(n,1)):(n=ve(o),n.c(),w(n,1),n.m(e.parentNode,e)):n&&(G(),T(n,1,1,()=>{n=null}),V())},i(o){t||(w(n),t=!0)},o(o){T(n),t=!1},d(o){n&&n.d(o),o&&C(e)}}}function pt(i){return Math.sin(-13*(i+1)*Math.PI/2)*Math.pow(2,-35*i)+1}function mt(i,e,t){let n;const{device:o}=Z,r=Y.select("accountCenter").pipe(_e(Y.get().accountCenter),we(1));H(i,r,b=>t(6,n=b));let{position:f}=e,{sharedContainer:s}=e,{notifications:l}=e,a,c;a=0,c=0;let d="y-scroll";const v=()=>{d!=="y-visible"&&t(5,d="y-visible"),u(function(){t(5,d="y-scroll")},1e3)},u=function(){let b=null;return(m,z)=>{clearTimeout(b),b=setTimeout(m,z)}}();function y(b){Ee.call(this,i,b)}return i.$$set=b=>{"position"in b&&t(0,f=b.position),"sharedContainer"in b&&t(1,s=b.sharedContainer),"notifications"in b&&t(2,l=b.notifications)},i.$$.update=()=>{i.$$.dirty&1&&(f.includes("top")?t(4,c=-50):t(4,c=50))},[f,s,l,a,c,d,n,o,r,v,y]}class ht extends R{constructor(e){super(),I(this,e,mt,bt,M,{position:0,sharedContainer:1,notifications:2},vt)}}export{ht as default};