(()=>{var Wv=Object.create;var Zo=Object.defineProperty;var qv=Object.getOwnPropertyDescriptor;var Xv=Object.getOwnPropertyNames;var Yv=Object.getPrototypeOf,$v=Object.prototype.hasOwnProperty;var Zv=(i,e)=>()=>(i&&(e=i(i=0)),e);var K=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports),Jv=(i,e)=>{for(var t in e)Zo(i,t,{get:e[t],enumerable:!0})},np=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Xv(e))!$v.call(i,r)&&r!==t&&Zo(i,r,{get:()=>e[r],enumerable:!(n=qv(e,r))||n.enumerable});return i};var Ke=(i,e,t)=>(t=i!=null?Wv(Yv(i)):{},np(e||!i||!i.__esModule?Zo(t,"default",{value:i,enumerable:!0}):t,i)),Kv=i=>np(Zo({},"__esModule",{value:!0}),i);var Rn=K(Sl=>{function ip(){return rp(arguments,{},0)}Sl.cs=ip;Sl.cs1=ip;var rp=(i,e,t)=>{let n=i[t],r,s;return Array.isArray(n)?(r=n[0],s=n[1]):typeof n=="object"?(r=n.name,s=n.load):s=n,s(e,i.length<=t+1?null:o=>{let a;return r!=null?(a=Object.assign({},e),a[r]=o):a=e,rp(i,a,t+1)})}});var ap=K((EU,op)=>{"use strict";var sp=Object.getOwnPropertySymbols,jv=Object.prototype.hasOwnProperty,Qv=Object.prototype.propertyIsEnumerable;function eM(i){if(i==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(i)}function tM(){try{if(!Object.assign)return!1;var i=new String("abc");if(i[5]="de",Object.getOwnPropertyNames(i)[0]==="5")return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(n.join("")!=="0123456789")return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(s){r[s]=s}),Object.keys(Object.assign({},r)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}op.exports=tM()?Object.assign:function(i,e){for(var t,n=eM(i),r,s=1;s<arguments.length;s++){t=Object(arguments[s]);for(var o in t)jv.call(t,o)&&(n[o]=t[o]);if(sp){r=sp(t);for(var a=0;a<r.length;a++)Qv.call(t,r[a])&&(n[r[a]]=t[r[a]])}}return n}});var bp=K((AU,Sp)=>{"use strict";var El=ap(),Yt=typeof Symbol=="function"&&Symbol.for,Ts=Yt?Symbol.for("react.element"):60103,nM=Yt?Symbol.for("react.portal"):60106,iM=Yt?Symbol.for("react.fragment"):60107,rM=Yt?Symbol.for("react.strict_mode"):60108,sM=Yt?Symbol.for("react.profiler"):60114,oM=Yt?Symbol.for("react.provider"):60109,aM=Yt?Symbol.for("react.context"):60110,cM=Yt?Symbol.for("react.forward_ref"):60112,lM=Yt?Symbol.for("react.suspense"):60113;Yt&&Symbol.for("react.suspense_list");var uM=Yt?Symbol.for("react.memo"):60115,hM=Yt?Symbol.for("react.lazy"):60116;Yt&&Symbol.for("react.fundamental");Yt&&Symbol.for("react.responder");Yt&&Symbol.for("react.scope");var cp=typeof Symbol=="function"&&Symbol.iterator;function ws(i){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+i,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+i+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fp={};function mr(i,e,t){this.props=i,this.context=e,this.refs=fp,this.updater=t||dp}mr.prototype.isReactComponent={};mr.prototype.setState=function(i,e){if(typeof i!="object"&&typeof i!="function"&&i!=null)throw Error(ws(85));this.updater.enqueueSetState(this,i,e,"setState")};mr.prototype.forceUpdate=function(i){this.updater.enqueueForceUpdate(this,i,"forceUpdate")};function pp(){}pp.prototype=mr.prototype;function Pl(i,e,t){this.props=i,this.context=e,this.refs=fp,this.updater=t||dp}var Ll=Pl.prototype=new pp;Ll.constructor=Pl;El(Ll,mr.prototype);Ll.isPureReactComponent=!0;var mp={current:null},Al={current:null},gp=Object.prototype.hasOwnProperty,_p={key:!0,ref:!0,__self:!0,__source:!0};function lp(i,e,t){var n,r={},s=null,o=null;if(e!=null)for(n in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)gp.call(e,n)&&!_p.hasOwnProperty(n)&&(r[n]=e[n]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+2];r.children=c}if(i&&i.defaultProps)for(n in a=i.defaultProps,a)r[n]===void 0&&(r[n]=a[n]);return{$$typeof:Ts,type:i,key:s,ref:o,props:r,_owner:Al.current}}function dM(i,e){return{$$typeof:Ts,type:i.type,key:e,ref:i.ref,props:i.props,_owner:i._owner}}function wl(i){return typeof i=="object"&&i!==null&&i.$$typeof===Ts}function fM(i){var e={"=":"=0",":":"=2"};return"$"+(""+i).replace(/[=:]/g,function(t){return e[t]})}var xp=/\/+/g,Jo=[];function yp(i,e,t,n){if(Jo.length){var r=Jo.pop();return r.result=i,r.keyPrefix=e,r.func=t,r.context=n,r.count=0,r}return{result:i,keyPrefix:e,func:t,context:n,count:0}}function vp(i){i.result=null,i.keyPrefix=null,i.func=null,i.context=null,i.count=0,10>Jo.length&&Jo.push(i)}function Tl(i,e,t,n){var r=typeof i;(r==="undefined"||r==="boolean")&&(i=null);var s=!1;if(i===null)s=!0;else switch(r){case"string":case"number":s=!0;break;case"object":switch(i.$$typeof){case Ts:case nM:s=!0}}if(s)return t(n,i,e===""?"."+bl(i,0):e),1;if(s=0,e=e===""?".":e+":",Array.isArray(i))for(var o=0;o<i.length;o++){r=i[o];var a=e+bl(r,o);s+=Tl(r,a,t,n)}else if(i===null||typeof i!="object"?a=null:(a=cp&&i[cp]||i["@@iterator"],a=typeof a=="function"?a:null),typeof a=="function")for(i=a.call(i),o=0;!(r=i.next()).done;)r=r.value,a=e+bl(r,o++),s+=Tl(r,a,t,n);else if(r==="object")throw t=""+i,Error(ws(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t,""));return s}function Cl(i,e,t){return i==null?0:Tl(i,"",e,t)}function bl(i,e){return typeof i=="object"&&i!==null&&i.key!=null?fM(i.key):e.toString(36)}function pM(i,e){i.func.call(i.context,e,i.count++)}function mM(i,e,t){var n=i.result,r=i.keyPrefix;i=i.func.call(i.context,e,i.count++),Array.isArray(i)?Rl(i,n,t,function(s){return s}):i!=null&&(wl(i)&&(i=dM(i,r+(!i.key||e&&e.key===i.key?"":(""+i.key).replace(xp,"$&/")+"/")+t)),n.push(i))}function Rl(i,e,t,n,r){var s="";t!=null&&(s=(""+t).replace(xp,"$&/")+"/"),e=yp(e,s,n,r),Cl(i,mM,e),vp(e)}function zn(){var i=mp.current;if(i===null)throw Error(ws(321));return i}var Mp={Children:{map:function(i,e,t){if(i==null)return i;var n=[];return Rl(i,n,null,e,t),n},forEach:function(i,e,t){if(i==null)return i;e=yp(null,null,e,t),Cl(i,pM,e),vp(e)},count:function(i){return Cl(i,function(){return null},null)},toArray:function(i){var e=[];return Rl(i,e,null,function(t){return t}),e},only:function(i){if(!wl(i))throw Error(ws(143));return i}},createRef:function(){return{current:null}},Component:mr,PureComponent:Pl,createContext:function(i,e){return e===void 0&&(e=null),i={$$typeof:aM,_calculateChangedBits:e,_currentValue:i,_currentValue2:i,_threadCount:0,Provider:null,Consumer:null},i.Provider={$$typeof:oM,_context:i},i.Consumer=i},forwardRef:function(i){return{$$typeof:cM,render:i}},lazy:function(i){return{$$typeof:hM,_ctor:i,_status:-1,_result:null}},memo:function(i,e){return{$$typeof:uM,type:i,compare:e===void 0?null:e}},useCallback:function(i,e){return zn().useCallback(i,e)},useContext:function(i,e){return zn().useContext(i,e)},useEffect:function(i,e){return zn().useEffect(i,e)},useImperativeHandle:function(i,e,t){return zn().useImperativeHandle(i,e,t)},useDebugValue:function(){},useLayoutEffect:function(i,e){return zn().useLayoutEffect(i,e)},useMemo:function(i,e){return zn().useMemo(i,e)},useReducer:function(i,e,t){return zn().useReducer(i,e,t)},useRef:function(i){return zn().useRef(i)},useState:function(i){return zn().useState(i)},Fragment:iM,Profiler:sM,StrictMode:rM,Suspense:lM,createElement:lp,cloneElement:function(i,e,t){if(i==null)throw Error(ws(267,i));var n=El({},i.props),r=i.key,s=i.ref,o=i._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Al.current),e.key!==void 0&&(r=""+e.key),i.type&&i.type.defaultProps)var a=i.type.defaultProps;for(c in e)gp.call(e,c)&&!_p.hasOwnProperty(c)&&(n[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)n.children=t;else if(1<c){a=Array(c);for(var l=0;l<c;l++)a[l]=arguments[l+2];n.children=a}return{$$typeof:Ts,type:i.type,key:r,ref:s,props:n,_owner:o}},createFactory:function(i){var e=lp.bind(null,i);return e.type=i,e},isValidElement:wl,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:mp,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:Al,IsSomeRendererActing:{current:!1},assign:El}},up={default:Mp},hp=up&&Mp||up;Sp.exports=hp.default||hp});var kn=K((wU,Ep)=>{"use strict";Ep.exports=bp()});var Ii=K(Ko=>{var{createElement:Ap,Fragment:wp}=kn(),Tp=(...i)=>Ap(wp,{},...i);Ko.fragments=Tp;Ko.fragments1=Tp;var gM=i=>Ap(wp,{},...i);Ko.fragments2=gM});var Ui=K(Cs=>{var Cp=function(){let i=arguments[0];for(let e=1;e<arguments.length;e++){let t=arguments[e];i=t?t(i):i}return i};Cs.chain=Cp;Cs.chain1=Cp;var _M=(i,e)=>{if(!e)return i;for(let t of e)i=t?t(i):i;return i};Cs.chain2=_M;var xM=(...i)=>(...e)=>{for(let t of i)if(!t(...e))return!1;return!0};Cs.and=xM});var Ul=K(Il=>{var yM=(i,e)=>{let t=0,n=i.length;for(;;){if(t===n)return-1-t;let r=Math.floor((t+n)/2),s=e(i[r]);if(s===0)return r;s>0?t=r+1:n=r}};Il.binarySearch=yM;var vM=(i,e)=>t=>{let n=e?e(t):t;return i===n?0:i>n?1:-1};Il.compareNum=vM});var Ol=K(Nl=>{function Dl(i,e){if(i===e)return!0;if(i==null&&e==null||i==null||e==null)return!1;if(typeof i=="object"&&typeof e=="object"){for(let t in i)if(!Dl(i[t],e[t]))return!1;for(let t in e)if(i[t]===void 0&&e[t]!==void 0)return!1;return!0}return!1}Nl.equalDeep=Dl;Nl.equalDeep1=Dl});var hn=K(ue=>{var{chain:MM}=Ui(),{binarySearch:SM,compareNum:bM}=Ul(),EM=(i,e,t)=>{let n,r;for(let s=0;s<i.length;s++){let o=i[s],a=e(o,s);if(a!=null){if(t!==void 0&&t===a)return o;if(n===void 0||n>a){let c=a;c!=null&&(n=c,r=o)}}}return r};ue.findMinE=EM;var AM=(i,e=n=>n,t)=>{let n,r;for(let s of i){let o=e(s);if(t!==void 0&&t===o)return s;if(n===void 0||n<o){let a=o;a!=null&&(n=a,r=s)}}return r};ue.findMaxE=AM;var wM=(i,e)=>{let t;for(let n of i)(t===void 0||e(t,n)>0)&&(t=n);return t};ue.findMinECompare=wM;var TM=i=>i?.[i.length-1];ue.last=TM;var CM=(i,e)=>{for(let t=i.length-1;t>-1;t--)if(e(i[t]))return t;return-1};ue.findLastIndex=CM;var RM=(i,e)=>{for(let t=i.length-1;t>-1;t--){let n=i[t];if(e(n))return n}};ue.findLast=RM;var PM=(i,e=n=>n,{gt:t=Rp.gt}={})=>{if(i==null)return null;let n;for(let r of i){if(r==null)continue;let s=e(r);s!=null&&s!==!1&&(n===void 0||t(n,s))&&s!=null&&(n=s)}return n===void 0?null:n};ue.findMinValue=PM;var Rp={le:(i,e)=>i<=e,lt:(i,e)=>i<e,ge:(i,e)=>i>=e,gt:(i,e)=>i>e},LM=(i,e=n=>n,{lt:t=Rp.lt}={})=>{if(i==null)return null;let n;for(let r of i){if(r==null)continue;let s=e(r);(n===void 0||t(n,s))&&s!=null&&(n=s)}return n===void 0?null:n};ue.findMaxValue=LM;var IM=(i,e,t)=>{let n,r;for(let s=0;s<i.length;s++){let o=i[s],a=e(o);if(n===void 0||n>a){if(a===t)return s;a!=null&&(n=a,r=s)}}return r};ue.findMinIndex=IM;function UM(i,e,t){return[...i.slice(0,t),e,...i.slice(t)]}ue.insertAt=UM;function DM(i,e){return[...i.slice(0,e),...i.slice(e+1)]}ue.removeAt=DM;function NM(i){return e=>(i.push(e),()=>Lp(i,e))}ue.addRemove=NM;function Pp(i,e){return i.filter(t=>!~e.indexOf(t))}ue.withoutAll=Pp;ue.removeAll=Pp;function Lp(i,e){if(i==null)return;let t=i.indexOf(e);t!==-1&&i.splice(t,1)}ue.remove1Mutate=Lp;function OM(i,e){if(i==null)return;let t=i.findIndex(e);if(t!==-1)return i.splice(t,1)[0]}ue.findRemove1Mutate=OM;function FM(i,e){if(e!=null)return e.filter(t=>t!==i)}ue.without=FM;function Fl(i,e=t=>t){if(!i)return i;let t=[],n=[];for(let r of i){let s=e(r);~n.indexOf(s)||(t.push(r),n.push(s))}return t}ue.unique=Fl;ue.unique1=Fl;function BM(i,e=t=>t){if(!i)return i;let t=[];for(let n of i){let r=e(n),s=SM(t,bM(r,e));s<0&&t.splice(-s-1,0,n)}return t}ue.uniqueB=BM;function zM(i,e=t=>t){if(!i)return i;let{equalDeep1:t}=Ol(),n=[],r=[];for(let s of i){let o=e(s);~r.findIndex(a=>t(a,o))||(n.push(s),r.push(o))}return n}ue.uniqueDeep=zM;function kM(i,e,t){if(i==null)return{};let n={};for(let r=0;r<i.length;r++){let s=i[r];if(n.hasOwnProperty(s[e]))throw`Property existed [${s[e]}]`;n[s[e]]=t?s[t]:s}return n}ue.indexAttr=kM;function VM(i,e,t){if(i==null)return{};let n={};for(let r=0;r<i.length;r++){let s=i[r];if(n.hasOwnProperty(e(s)))throw`Property existed [${e(s)}]`;n[e(s)]=t?t(s):s}return n}ue.index=VM;function HM(i,e,t){if(i==null)return{};let n={};for(let r=0;r<i.length;r++){let s=i[r],o=n[s[e]];o==null&&(o=[],n[s[e]]=o),o.push(t?s[t]:s)}return n}ue.indexAttrMulti=HM;function Ip(i,e=n=>n,t=(n,r)=>n>r?1:-1){if(i==null)return null;let n=i.slice();return n.sort((r,s)=>{let o=e(r),a=e(s);return o===a?0:o==null?-1:a==null?1:t(o,a)}),n}ue.sort=Ip;ue.sort1=Ip;function GM(i,e){if(i==null)return null;let t=i.slice(0);return t.sort((n,r)=>{for(let s of e){let o=s(n),a=s(r);if(o>a)return 1;if(o<a)return-1}return 0}),t}ue.sortMulti=GM;function WM(i){if(i==null)return null;let e=i.slice(0);return e.reverse(),e}ue.reverse=WM;function Up(i){if(isNaN(i))throw"[createArray] Length is not a number: "+i;let e=new Array(i);for(let t=0;t<e.length;t++)e[t]=t;return e}ue.createArray=Up;ue.createArray1=Up;function qM(i,e){let t=[];for(let n=i;n<e;n++)t.push(n);return t}ue.createArray2=qM;function XM(i,e){e=e.slice(0);for(let t of i)~e.indexOf(t)||e.push(t);return e}ue.addListToSet=XM;function YM(i,e){return~e.indexOf(i)||e.push(i),e}ue.addToSetMutate=YM;function $M(i,e,t){let n=i[e];n==null&&(n=[],i[e]=n),n.push(t)}ue.addToListMap=$M;function ZM(i,e,t){i[e]=[...i[e]||[],...t]}ue.concatToListMap=ZM;var JM=(i,e,t)=>{i=i.slice(0);let n=[];for(let r=0;r<i.length;r++){let s=i[r],o=e(s);for(let a=r+1;a<i.length;a++){let c=i[a];e(c)===o&&(s=t(s,c),i.splice(a,1),a--)}n.push(s)}return n};ue.merge=JM;function KM(...i){let e={};for(let t of i)for(let n in t)e.hasOwnProperty(n)?e[n]=[...e[n],...t[n]]:e[n]=t[n];return e}ue.mergeListMap=KM;function jM(i,e,t){return i.map(n=>{let r=e.indexOf(n);return r>-1?t[r]:n})}ue.replace=jM;function QM(i,e,t){if(i==null)return null;let n=i.findIndex(t);return n===-1?i:Bl(n,i,e)}ue.replaceFind=QM;function eS(i,e,t){if(i==null)return null;let n=i.findIndex(t);return n===-1?i:Bl(n,i,e(i[n]))}ue.replaceFind_f=eS;var tS=(i,e,t)=>{let n=i.findIndex(e);return n===-1?[...i,t]:[...i.slice(0,n),t,...i.slice(n+1)]};ue.upsert=tS;function nS(i,e,t){if(i==null)return null;let n=i.findIndex(e);return n===-1?i:Np(n,i,t)}ue.changeFind=nS;var iS=(i,e,t=0)=>{for(let n=t;n<i.length;n++){let r=i[n],s=e(r,n);if(s!=null)return s}return null};ue.findValue=iS;function rS(i,e,t){return i==null?null:i.map(n=>e(n)?t(n):n)}ue.replaceBy=rS;function sS(i,e,t){return i.map(n=>n===e?t:n)}ue.replace1=sS;function oS(i,e){if(i==null)return[];let t=[],n=[];for(let r of i)(e(r)?t:n).push(r);return[t,n]}ue.split=oS;function aS(i,e){if(i==null)return[];let t=[];for(let n=0;n<i.length;n++){let r=i[n];e(r)&&(t.push(r),i.splice(n,1),n--)}return t}ue.extract=aS;function Dp(i){if(i==null)return[];let e=[];for(let t of i)t&&(e=e.concat(t));return e}ue.flatten1=Dp;ue.flatten11=Dp;var cS=(i,e)=>e.filter((t,n)=>n!==i);ue.removeIndex=cS;var Bl=(i,e,t)=>e.map((n,r)=>r!==i?n:t);ue.replaceIndex=Bl;var lS=(i,e,t)=>[...e.slice(0,i),...t,...e.slice(i+1)];ue.replaceIndex2=lS;var Np=(i,e,t)=>e.map((n,r)=>r!==i?n:t(n));ue.changeIndex=Np;function uS(i,e){let t={};for(let n=0;n<i.length;n++)t[e(n)]=i[n];return t}ue.toMap=uS;function Op(i,e=t=>t){return i==null?0:i.reduce((t,n,r)=>t+(e(n,r)||0),0)}ue.sum=Op;ue.sum1=Op;var hS=i=>{let e=typeof i=="function"?i:()=>i,t=0;return()=>{t++;let n=e();return t>=n.length&&(t=0),n[t]}};ue.switchAmong=hS;var dS=(i,e)=>{let t=[],n=0;return e.forEach((r,s)=>{let o=s===e.length-1?i.length:n+Math.floor(r*i.length);t.push(i.slice(n,o)),n=o}),t};ue.divide=dS;var fS=({get:i,set:e},t,n)=>{let r=i(n),s=i(t);e(r,t),e(s,n)};ue.swap=fS;var Fp=(i,e)=>{if(i==null||i.length===0)return[];if(i.length===1)return i[0].map(s=>e([s]));let[t,...n]=i,r=[];for(let s of t)r=[...r,...Fp(n,o=>e([s,...o]))];return r};ue.crossMap=Fp;var pS=i=>{let e=[];for(let t=0;t<i.length;t++){let n=i[t];if(!(e.indexOf(n)>-1)){for(let r=t+1;r<i.length;r++)if(i[r]===n){e.push(n);break}}}return e};ue.findDuplicateds=pS;var mS=(i,{by:e=n=>n,compare:t=(n,r)=>n===r})=>{let n=[];for(let r=0;r<i.length;r++){let s=i[r];if(n.some(c=>c.dups.includes(s)))continue;let o=e(s),a;for(let c=r+1;c<i.length;c++){let l=i[c],u=e(l);t(o,u)&&(a||(a=[s]),a.push(l))}a&&n.push({by:o,dups:a})}return n};ue.findDuplicateds2=mS;var gS=i=>MM(i.map(e=>JSON.stringify(e)),Fl,e=>e.map(t=>JSON.parse(t)));ue.jsonUnique=gS;var _S=(i,e)=>{if(i==null||i.length<2)return i;let t=[];for(let n=0;n<i.length;n++){let r=i[n];n>0&&t.push(e),t.push(r)}return t};ue.joinArr=_S;var xS=(i,e,t=(n,r)=>n===r)=>{e==null&&(e=[]),i==null&&(i=[]);let n=[],r=[];for(let s of e)i.find(o=>t(o,s))==null&&r.push(s);for(let s of i)e.find(o=>t(s,o))==null&&n.push(s);return{added:n,removed:r}};ue.compareCol=xS;var yS=i=>{i=i.slice(0);let e=i.length,t=(n,r)=>{let s=i[n];i[n]=i[r],i[r]=s};for(;e!==0;){let n=Math.floor(Math.random()*e);e--,t(e,n)}return i};ue.shuffle=yS;var Bp=i=>i==null||i.length===0;ue.isEmpty=Bp;var vS=i=>!Bp(i);ue.isNotEmpty=vS;var MS=(i,e)=>{if(i.length!==e.length)return!1;for(let t of i)if(e.indexOf(t)===-1)return!1;return!0};ue.setEqual=MS;var SS=i=>{if(i===null)return null;for(let e of i)if(e!==null)return!1;return!0};ue.isAllNull=SS;var bS=(i,e)=>e==null?i==null:i==null||i.length>e.length?!0:zp(e.slice(0,i.length),i);ue.arrStartsWith=bS;var zp=(i,e)=>{if(i===e)return!0;if(i==null)return e==null;if(e==null||i.length!==e.length)return!1;for(let t=0;t<i.length;t++)if(i[t]!==e[t])return!1;return!0};ue.arrEquals=zp;function ES(i,e,t){return t.map((n,r)=>r===i?t[e]:r===e?t[i]:n)}ue.flip=ES;var AS=(i,e)=>{let t=i.findIndex(e);if(t===0)return i;if(t===-1)throw 2365342;return[i[t],...i.slice(0,t),...i.slice(t+1)]};ue.toFirst=AS});var Vp=K(kp=>{var wS=kn(),{addRemove:zl}=hn(),kl=class extends wS.Component{constructor(e,t,n){super(e,t,n),this.onUnmounts=[],this.onChangeds=[],this.onMounts=[],this.mounted=!1,this.onMount=zl(this.onMounts),this.onUnmount=zl(this.onUnmounts),this.onChanged=zl(this.onChangeds)}componentDidMount(){this.mounted=!0,this.onMounts.forEach(e=>e())}componentWillUnmount(){this.mounted=!1,this.onUnmounts.forEach(e=>e())}componentDidUpdate(e){this.onChangeds.forEach(t=>t(e))}setState(e,t){this.mounted?super.setState(e,t):(this.state=Object.assign(this.state,e),t&&t())}forceUpdate(){this.mounted&&super.forceUpdate()}onChanged1(e){if(e())return;let n=this.onChanged(()=>{e()&&n()})}};kp.FComponent=kl});var gr=K(Vl=>{var{createElement:TS}=kn(),{FComponent:CS}=Vp(),RS=({fn:i,action:e,props:t,onMounted:n,next:r})=>TS(jo,{action:e??i,props:t,onMounted:n,next:r});Vl.Invoke=RS;var jo=class extends CS{constructor(e,t){super(e,t),e.action&&e.action({getLatestProps:()=>this.props.props,isMounted:()=>this.mounted}),e.onMounted&&(console.log("[Quan warning] Invoke onMounted is deprecated"),this.onMount(()=>{setTimeout(()=>{this.props.onMounted({getLatestProps:()=>this.props.props,isMounted:()=>this.mounted})},0)}))}render(){let{next:e}=this.props;return e?e():null}};Vl.Invoke1=jo});var Gp=K(Hp=>{var{cs:PS}=Rn(),{fragments:LS}=Ii(),{Invoke:IS}=gr(),US=({createRoot:i,next:e})=>PS(["root",({},t)=>{let n=i(document.getElementById("root"));return n.render(t(n))}],({root:t})=>LS(IS({action:()=>{window.disposeScript=()=>{t.unmount(),console.clear(),document.getElementById("root").remove();let n=document.createElement("div");n.id="root",document.body.appendChild(n)}}}),e()));Hp.EsbuildRoot=US});var Xp=K((NU,qp)=>{"use strict";var Wp=Object.getOwnPropertySymbols,DS=Object.prototype.hasOwnProperty,NS=Object.prototype.propertyIsEnumerable;function OS(i){if(i==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(i)}function FS(){try{if(!Object.assign)return!1;var i=new String("abc");if(i[5]="de",Object.getOwnPropertyNames(i)[0]==="5")return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(n.join("")!=="0123456789")return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(s){r[s]=s}),Object.keys(Object.assign({},r)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}qp.exports=FS()?Object.assign:function(i,e){for(var t,n=OS(i),r,s=1;s<arguments.length;s++){t=Object(arguments[s]);for(var o in t)DS.call(t,o)&&(n[o]=t[o]);if(Wp){r=Wp(t);for(var a=0;a<r.length;a++)NS.call(t,r[a])&&(n[r[a]]=t[r[a]])}}return n}});var rm=K(st=>{"use strict";var Xl=Xp(),xn=typeof Symbol=="function"&&Symbol.for,Rs=xn?Symbol.for("react.element"):60103,BS=xn?Symbol.for("react.portal"):60106,zS=xn?Symbol.for("react.fragment"):60107,kS=xn?Symbol.for("react.strict_mode"):60108,VS=xn?Symbol.for("react.profiler"):60114,HS=xn?Symbol.for("react.provider"):60109,GS=xn?Symbol.for("react.context"):60110,WS=xn?Symbol.for("react.forward_ref"):60112,qS=xn?Symbol.for("react.suspense"):60113,XS=xn?Symbol.for("react.memo"):60115,YS=xn?Symbol.for("react.lazy"):60116,Yp=typeof Symbol=="function"&&Symbol.iterator;function Ps(i){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+i,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+i+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zp={};function _r(i,e,t){this.props=i,this.context=e,this.refs=Zp,this.updater=t||$p}_r.prototype.isReactComponent={};_r.prototype.setState=function(i,e){if(typeof i!="object"&&typeof i!="function"&&i!=null)throw Error(Ps(85));this.updater.enqueueSetState(this,i,e,"setState")};_r.prototype.forceUpdate=function(i){this.updater.enqueueForceUpdate(this,i,"forceUpdate")};function Jp(){}Jp.prototype=_r.prototype;function Yl(i,e,t){this.props=i,this.context=e,this.refs=Zp,this.updater=t||$p}var $l=Yl.prototype=new Jp;$l.constructor=Yl;Xl($l,_r.prototype);$l.isPureReactComponent=!0;var Zl={current:null},Kp=Object.prototype.hasOwnProperty,jp={key:!0,ref:!0,__self:!0,__source:!0};function Qp(i,e,t){var n,r={},s=null,o=null;if(e!=null)for(n in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Kp.call(e,n)&&!jp.hasOwnProperty(n)&&(r[n]=e[n]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+2];r.children=c}if(i&&i.defaultProps)for(n in a=i.defaultProps,a)r[n]===void 0&&(r[n]=a[n]);return{$$typeof:Rs,type:i,key:s,ref:o,props:r,_owner:Zl.current}}function $S(i,e){return{$$typeof:Rs,type:i.type,key:e,ref:i.ref,props:i.props,_owner:i._owner}}function Jl(i){return typeof i=="object"&&i!==null&&i.$$typeof===Rs}function ZS(i){var e={"=":"=0",":":"=2"};return"$"+(""+i).replace(/[=:]/g,function(t){return e[t]})}var em=/\/+/g,Qo=[];function tm(i,e,t,n){if(Qo.length){var r=Qo.pop();return r.result=i,r.keyPrefix=e,r.func=t,r.context=n,r.count=0,r}return{result:i,keyPrefix:e,func:t,context:n,count:0}}function nm(i){i.result=null,i.keyPrefix=null,i.func=null,i.context=null,i.count=0,10>Qo.length&&Qo.push(i)}function Gl(i,e,t,n){var r=typeof i;(r==="undefined"||r==="boolean")&&(i=null);var s=!1;if(i===null)s=!0;else switch(r){case"string":case"number":s=!0;break;case"object":switch(i.$$typeof){case Rs:case BS:s=!0}}if(s)return t(n,i,e===""?"."+Hl(i,0):e),1;if(s=0,e=e===""?".":e+":",Array.isArray(i))for(var o=0;o<i.length;o++){r=i[o];var a=e+Hl(r,o);s+=Gl(r,a,t,n)}else if(i===null||typeof i!="object"?a=null:(a=Yp&&i[Yp]||i["@@iterator"],a=typeof a=="function"?a:null),typeof a=="function")for(i=a.call(i),o=0;!(r=i.next()).done;)r=r.value,a=e+Hl(r,o++),s+=Gl(r,a,t,n);else if(r==="object")throw t=""+i,Error(Ps(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t,""));return s}function Wl(i,e,t){return i==null?0:Gl(i,"",e,t)}function Hl(i,e){return typeof i=="object"&&i!==null&&i.key!=null?ZS(i.key):e.toString(36)}function JS(i,e){i.func.call(i.context,e,i.count++)}function KS(i,e,t){var n=i.result,r=i.keyPrefix;i=i.func.call(i.context,e,i.count++),Array.isArray(i)?ql(i,n,t,function(s){return s}):i!=null&&(Jl(i)&&(i=$S(i,r+(!i.key||e&&e.key===i.key?"":(""+i.key).replace(em,"$&/")+"/")+t)),n.push(i))}function ql(i,e,t,n,r){var s="";t!=null&&(s=(""+t).replace(em,"$&/")+"/"),e=tm(e,s,n,r),Wl(i,KS,e),nm(e)}var im={current:null};function Vn(){var i=im.current;if(i===null)throw Error(Ps(321));return i}var jS={ReactCurrentDispatcher:im,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:Zl,IsSomeRendererActing:{current:!1},assign:Xl};st.Children={map:function(i,e,t){if(i==null)return i;var n=[];return ql(i,n,null,e,t),n},forEach:function(i,e,t){if(i==null)return i;e=tm(null,null,e,t),Wl(i,JS,e),nm(e)},count:function(i){return Wl(i,function(){return null},null)},toArray:function(i){var e=[];return ql(i,e,null,function(t){return t}),e},only:function(i){if(!Jl(i))throw Error(Ps(143));return i}};st.Component=_r;st.Fragment=zS;st.Profiler=VS;st.PureComponent=Yl;st.StrictMode=kS;st.Suspense=qS;st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jS;st.cloneElement=function(i,e,t){if(i==null)throw Error(Ps(267,i));var n=Xl({},i.props),r=i.key,s=i.ref,o=i._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zl.current),e.key!==void 0&&(r=""+e.key),i.type&&i.type.defaultProps)var a=i.type.defaultProps;for(c in e)Kp.call(e,c)&&!jp.hasOwnProperty(c)&&(n[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)n.children=t;else if(1<c){a=Array(c);for(var l=0;l<c;l++)a[l]=arguments[l+2];n.children=a}return{$$typeof:Rs,type:i.type,key:r,ref:s,props:n,_owner:o}};st.createContext=function(i,e){return e===void 0&&(e=null),i={$$typeof:GS,_calculateChangedBits:e,_currentValue:i,_currentValue2:i,_threadCount:0,Provider:null,Consumer:null},i.Provider={$$typeof:HS,_context:i},i.Consumer=i};st.createElement=Qp;st.createFactory=function(i){var e=Qp.bind(null,i);return e.type=i,e};st.createRef=function(){return{current:null}};st.forwardRef=function(i){return{$$typeof:WS,render:i}};st.isValidElement=Jl;st.lazy=function(i){return{$$typeof:YS,_ctor:i,_status:-1,_result:null}};st.memo=function(i,e){return{$$typeof:XS,type:i,compare:e===void 0?null:e}};st.useCallback=function(i,e){return Vn().useCallback(i,e)};st.useContext=function(i,e){return Vn().useContext(i,e)};st.useDebugValue=function(){};st.useEffect=function(i,e){return Vn().useEffect(i,e)};st.useImperativeHandle=function(i,e,t){return Vn().useImperativeHandle(i,e,t)};st.useLayoutEffect=function(i,e){return Vn().useLayoutEffect(i,e)};st.useMemo=function(i,e){return Vn().useMemo(i,e)};st.useReducer=function(i,e,t){return Vn().useReducer(i,e,t)};st.useRef=function(i){return Vn().useRef(i)};st.useState=function(i){return Vn().useState(i)};st.version="16.14.0"});var dn=K((FU,sm)=>{"use strict";sm.exports=rm()});var yn=K(om=>{var{Fragment:QS}=dn(),eb=i=>i==null||Array.isArray(i)?i:i.type&&(i.type.$_r2_fragment||i.type===QS)&&i.key==null?(i=i.props.children,i==null||Array.isArray(i)?i:[i]):[i];om.ensureArray=eb});var Kl=K(cm=>{var am=(i,e)=>{e(i),i.childNodes?.forEach(t=>am(t,e))};cm.eachNodeRecursively=am});var jl=K(lm=>{var{last:tb}=hn(),{ensureArray:nb}=yn(),{eachNodeRecursively:ib}=Kl(),rb=({controllers:i})=>{let e={activeController:sb,controllers:i,level:0,createUpdate:t=>({node:e,request:{elements:t}}),destroy:()=>{for(let t of i)t.rootDestroy?.();ib(e,t=>t.activeController.selfDispose?.()),e.childNodes=null}};return e};lm.createRootNode=rb;var sb={applyUpdates:({updateRequests:i})=>({propagation:{elements:nb(tb(i).elements)}})}});var Ql=K(um=>{var ob=(i,e)=>({forEach:t=>{let n=e();for(let r=0;r<n.childNodes?.length;r++){let s=n.childNodes[r];t(s.controllers[i])}},findIndex:t=>{let n=e();for(let r=0;r<n.childNodes?.length;r++){let s=n.childNodes[r];if(t(s.controllers[i]))return r}},findValue:(t,n)=>{let r=e();for(let s=t;s<r.childNodes?.length;s++){let o=r.childNodes[s],a=n(o.controllers[i]);if(a)return a}}});um.createChildControllersNav=ob});var fm=K(dm=>{var{createChildControllersNav:hm}=Ql(),ab=(i,{parentNode:e,onRequestUpdate:t,isSchedulerEmpty:n})=>{let r=h=>({node:u,request:h}),s=h=>t(r(h)),o=e.controllers.findIndex(h=>h.matchElement(i));if(o===-1)throw console.error("e",i),console.error("controllers",e.controllers),"Can't resolve controller";let a=e.controllers.map((h,d)=>d===o?null:h.createPassiveChild?h.createPassiveChild({childControllers:hm(d,()=>u)}):h),c=e.controllers[o],l=c.createActiveChild?c.createActiveChild(i,{createUpdateRequest:r,onRequestUpdate:s,childControllers:hm(o,()=>u),findPassiveController:h=>{for(let d=0;d<a.length;d++){if(d===o)continue;let f=h(a[d]);if(f)return f}},isSchedulerEmpty:n}):c;a[o]=l;let u={activeController:l,controllers:a,level:e.level+1};return u};dm.createChildNode=ab});var mm=K(pm=>{var cb=(i,e,t)=>{if(!i)return{updates:e?.map(a=>({newObj:a})),removes:null};let n=i?.map((a,c)=>({oldObj:a,oldIndex:c}));if(!e)return{updates:null,removes:n};let r=new Array(e.length),s=n.length,o=r.length;for(let a=0;a<o;a++){let c=e[a];a<s&&t(n[a].oldObj,c,a)?(r[a]=n[a],r[a].newObj=c,n[a]=null):r[a]={newObj:c}}return{updates:r,removes:n.filter(a=>a)}};pm.directReconcile=cb});var _m=K(eu=>{var gm=(i,e,t)=>{if(!i)return{updates:e?.map(c=>({newObj:c})),removes:null};let n=i.map((c,l)=>({oldObj:c,oldIndex:l}));if(!e)return{updates:null,removes:n};let r=new Array(e.length),s=0,o=n.length,a=r.length;e:for(let c=0;c<a;c++){let l=e[c];for(let u=s;u<o;u++)if(t(n[u].oldObj,l,c)){r[c]=n[u],r[c].newObj=l,u>s&&(n[u]=n[s]),s++;continue e}r[c]={newObj:l}}return{updates:r,removes:s===0?n:n.slice(s)}};eu.reconcile=gm;var lb=(i,e)=>gm(i,e,(t,n)=>t===n);eu.reconcile1=lb});var ym=K(xm=>{var{directReconcile:ub}=mm(),{reconcile:hb}=_m(),db=i=>!i?.length||fb(i)?ub:hb;xm.getReconcilator=db;var fb=i=>{let e=Math.min(30,i.length);for(let t=0;t<e;t++)if(i[t].activeController.key==null)return!0}});var Mm=K(vm=>{var{sort:pb}=hn(),{binarySearch:mb,compareNum:gb}=Ul(),{chain:_b}=Ui(),xb=i=>{i=pb(i,t=>t.node.level);let e=t=>{let n=[];for(let r=0;r<i.length;r++){let s=i[r];if(s.node===t)n.push(s.request),i.splice(r,1),r--;else if(s.level>t.level)break}return n};return{isEmpty:()=>!i.length,extractRequests:e,shift:()=>{let t=i.shift(),n=e(t.node);return{node:t.node,requests:[t.request].concat(n)}},appendUpdate:t=>{let n=_b(mb(i,gb(t.node.level,r=>r.node.level)),r=>r>-1?r:-r-1);i.splice(n,0,t)}}};vm.UpdateGroup=xb});var nu=K(Sm=>{var{eachNodeRecursively:yb}=Kl(),{createChildNode:vb}=fm(),{getReconcilator:Mb}=ym(),{UpdateGroup:Sb}=Mm(),bb=({updates:i,onRequestUpdate:e,isSchedulerEmpty:t})=>{let n=Sb(i);i=null;let r=[];for(;!n.isEmpty();){let{node:s,requests:o}=n.shift();tu({node:s,params:{updateRequests:o}},{updateGroup:n,onRequestUpdate:e,isSchedulerEmpty:t},a=>r.push(a))}return r.length?()=>r.forEach(s=>s()):null};Sm.renderUpdates=bb;var tu=({node:i,params:e},t,n)=>{let r,s=i.controllers.find(d=>d?.handleException)?.handleException;if(s)try{r=i.activeController.applyUpdates?.(e)}catch(d){s(d);return}else r=i.activeController.applyUpdates?.(e);if(!r)return;let{propagation:o,jumpUpdates:a,onCommit:c}=r,{updateGroup:l,onRequestUpdate:u,isSchedulerEmpty:h}=t;if(c&&n(c),a?.forEach(l.appendUpdate),o){let d=Mb(i.childNodes),{updates:f,removes:m}=d(i.childNodes,o.elements,(g,p)=>g?.activeController.acceptPropagation(p)),_=f&&new Array(f.length);for(let g=0;g<f?.length;g++){let{oldObj:p,oldIndex:y,newObj:x}=f[g];if(y==null){let M=vb(x,{parentNode:i,onRequestUpdate:u,isSchedulerEmpty:h});tu({node:M,params:{isFirstRun:!0}},t,n),_[g]=M}else{let M=l.extractRequests(p);tu({node:p,params:{propagationRequest:{element:x},updateRequests:M}},t,n),_[g]=p}}i.childNodes=_,i.controllers.forEach((g,p)=>{g.afterUpdate?.(_?.map((y,x)=>({controller:y.controllers[p],oldIndex:f[x].oldIndex})),m?.map(({oldObj:y})=>y?.controllers[p]))}),m?.forEach(({oldObj:g})=>{yb(g,p=>p.activeController.selfDispose?.())})}}});var Em=K(bm=>{var Eb=i=>{let e=[],t=null;return{addUpdate:n=>{e.push(n),t==null&&(t=Ab(()=>{for(;e.length;){let r=e.slice(0);e.length=0,i(r)}t=null}))},isEmpty:()=>!e.length}};bm.createScheduler=Eb;var Ab=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout});var wm=K(Am=>{var{createRootNode:wb}=jl(),{renderUpdates:Tb}=nu(),{ensureArray:Cb}=yn(),{createScheduler:Rb}=Em(),Pb=i=>{let e=wb({controllers:i}),t=r=>{Tb({updates:r,onRequestUpdate:o=>n.addUpdate(o),isSchedulerEmpty:n.isEmpty})?.()},n=Rb(t);return{render:r=>{r=Cb(r),t([e.createUpdate(r)])},unmount:()=>e.destroy()}};Am.createRoot=Pb});var xr=K(Et=>{var Tm=(i,e)=>{if(i==null)return null;let t={};for(let n in i)t[e(n,i[n])]=i[n];return t};Et.mapKeys=Tm;var Lb=i=>Tm(i,e=>e);Et.clone=Lb;var Ib=i=>{if(i==null)return null;for(let e in i)return i[e]};Et.singleValue=Ib;var Ub=(i,e)=>{if(i==null)return null;let t={};for(let n in i){let r=e(i[n],n);r!=null&&(t[n]=r)}return t};Et.mapValues=Ub;var Cm=(i,e)=>{if(i==null)return null;let t={};for(let n in i)~e.indexOf(n)||(t[n]=i[n]);return t};Et.omit=Cm;Et.omit1=Cm;function Db(i,e){let t={};for(let n in i)e(i[n],n)&&(t[n]=i[n]);return t}Et.filterValues=Db;function Nb(i,e){let t={};for(let n in i)e(n,i[n])&&(t[n]=i[n]);return t}Et.filterKeys=Nb;function Ob(i,e){let t=[];for(let n in i)t.push(e(i[n],n));return t}Et.oMapToArr=Ob;function Fb(i,e,t=n=>n){let n={};for(let r=0;r<i.length;r++){let s=i[r];n[t(s,r)]=e(s,r)}return n}Et.arrMapToO=Fb;function Bb(i){if(i==null)return!0;for(let e in i)if(i.hasOwnProperty(e))return!1;return!0}Et.isEmpty=Bb;var{equalDeep:Rm}=Ol();Et.equalDeep=Rm;Et.equalDeep1=Rm;var zb=(i,e)=>{let t={},n={};for(let r in i)e(r)?t[r]=i[r]:n[r]=i[r];return[t,n]};Et.splitKeys=zb;var kb=i=>{for(let e in i)delete i[e]};Et.deleteAll=kb;var Vb=(i,e)=>{if(i==null)return i;let t={};for(let n of e)t[n]=i[n];return t};Et.keepOnly=Vb;var Hb=(i,e)=>new Proxy(i,{get:(t,n)=>e.hasOwnProperty(n)?e[n]:t[n]});Et.override=Hb;var Gb=i=>{for(let e of Object.keys(i))delete i[e]};Et.emptyObject=Gb});var Lm=K(iu=>{var Pm=i=>typeof i=="number"||typeof i=="string";iu.validTextElement=Pm;var Wb=(i,e)=>({dom:i,acceptPropagation:Pm,applyUpdates:({propagationRequest:t})=>{t&&t.element!==e&&(e=t.element,i.data=e)}});iu.createActiveTextController=Wb});var ea=K(Im=>{var qb={SVG:"http://www.w3.org/2000/svg",MATH:"http://www.w3.org/1998/Math/MathML"},Xb=i=>qb[i.toUpperCase()];Im.getNamespace=Xb});var ru=K(Um=>{var Yb=i=>{let e=!1,t;return function(){return e||(e=!0,t=i.apply(this,arguments)),t}};Um.cache0=Yb});var ta=K(Dm=>{var{cache0:$b}=ru(),Zb=$b(()=>{let{types:i}=su();return i}),Jb=i=>Zb().find(e=>e.check(i));Dm.matchElement=Jb});var ou=K(Nm=>{var{chain:Kb}=Ui(),{findMinIndex:jb}=hn(),Qb=i=>{if(rE(i))for(i=Kb(sE(i),e=>{for(let t of e)t.oldIndex!=null&&(t.doms=t.controller.dom?[t.controller.dom]:t.controller.getAllDoms());return e},e=>e.filter(({oldIndex:t,doms:n})=>t!=null&&n?.length),e=>{for(let t=0;t<e.length;t++){let n=e[t];n.newIndex=t}return e},e=>e.sort((t,n)=>t.oldIndex-n.oldIndex),eE);i;)i=tE(i)};Nm.moveDoms=Qb;var eE=i=>{let e=[],t=0,n=(r,s,o)=>{let a={doms:s[r].doms.slice(),newIndex:s[r].newIndex},c=0,l;for(l=r+1;l<s.length;l++){let u=s[l];if(u.newIndex===a.newIndex+c+1)a.doms.push.apply(a.doms,u.doms),c++;else break}for(let u=l;u<s.length;u++)s[u].newIndex>a.newIndex+c&&(s[u].newIndex-=c);for(let u of o)u.newIndex>a.newIndex+c&&(u.newIndex-=c);return o.push(a),l};for(;t<i.length;)t=n(t,i,e);return e},tE=i=>{let e=jb(i,({doms:s})=>s.length,1),t=i[e],n=i.find(({newIndex:s})=>Math.abs(s-t.newIndex)===1);if(n.newIndex>t.newIndex?(nE(t.doms,n.doms),n.doms.unshift.apply(n.doms,t.doms)):(iE(t.doms,n.doms),n.doms.push.apply(n.doms,t.doms)),i.length===2)return null;let r=new Array(i.length-1);for(let s=0;s<r.length;s++){let o=s<e?i[s]:i[s+1];r[s]=o,o.newIndex>t.newIndex&&o.newIndex--}return r},nE=(i,e)=>{let t=e[0],n=t.parentNode;for(let r of i)n.insertBefore(r,t)},iE=(i,e)=>{let t=e[e.length-1].nextSibling,n=e[0].parentNode;if(t)for(let r of i)n.insertBefore(r,t);else for(let r of i)n.appendChild(r)},rE=i=>{if(!i)return!1;let e=-1;for(let{oldIndex:t}of i)if(t!=null){if(t<e)return!0;e=t}return!1},sE=i=>{let e=oE(i),t=aE(i);return e>0||t<i.length?i.slice(e,t):i},oE=i=>{let e=-1;for(let t=0;t<i.length;t++){let{oldIndex:n}=i[t];if(n!=null){if(n===e+1){e=n;continue}for(let r=t+1;r<i.length;r++)if(i[r].oldIndex<n)return t;e=n}}return i},aE=i=>{let e=i.length;for(let t=i.length;t--;){let{oldIndex:n}=i[t];if(n!=null){if(n===e-1){e=n;continue}for(let r=t;r--;)if(i[r].oldIndex>n)return t+1;e=n}}return i}});var au=K(Fm=>{var{createActiveChild:cE}=na(),{matchElement:lE}=ta(),{findValue:uE}=hn(),{moveDoms:hE}=ou(),Om=(i,{childControllers:e})=>{let t=!1,n=null;return{retrieveMountingPackage:()=>{try{return t=!0,n}finally{n=null}},getFirstDom:()=>e.findValue(0,r=>r.dom??r.getFirstDom()),getAllDoms:()=>{let r=[];return e.forEach(s=>{s.dom?r.push(s.dom):r.push.apply(r,s.getAllDoms())}),r},afterUpdate:(r,s)=>{t?(hE(r),r?.forEach(({controller:o,oldIndex:a},c)=>{if(a==null){let l=o.dom?[o.dom]:o.retrieveMountingPackage();if(!l?.length)return;let u=uE(r,({controller:h,oldIndex:d})=>d!=null&&(h.dom??h.getFirstDom())||null,c+1)??i.findNextDom();u?l.forEach(h=>i.parentDom.insertBefore(h,u)):l.forEach(h=>i.parentDom.appendChild(h))}}),s?.forEach(o=>{o.dom?o.dom.remove():o.getAllDoms()?.forEach(a=>a.remove())})):(n=[],r?.forEach(({controller:o})=>{if(o.dom)n.push(o.dom);else{let a=o.retrieveMountingPackage();a&&n.push.apply(n,a)}}))},matchElement:lE,createActiveChild:(r,s)=>cE(r,i,s),createPassiveChild:r=>{let s=Om({...i,findNextDom:()=>{let o=e.findIndex(c=>c===s);return e.findValue(o+1,c=>c.dom??c.getFirstDom())??i.findNextDom()}},r);return s}}};Fm.createPassiveController=Om});var cu=K(Bm=>{var dE=(i,e)=>{if(e!=null)if(typeof e=="function")e(i);else if(e.hasOwnProperty("current"))e.current=i;else throw console.log("ref",e),"Unsupported ref "+e};Bm.setRef=dE});var uu=K(zm=>{var{moveDoms:fE}=ou(),{findValue:pE}=hn(),{setRef:lu}=cu(),mE=({dom:i,getRef:e})=>{let t=!1;return(n,r)=>{if(t){let s=e?.();s&&(lu(null,s),lu(i,s)),fE(n),n?.forEach(({controller:o,oldIndex:a},c)=>{if(a==null){let l=o.dom?[o.dom]:o.retrieveMountingPackage();if(!l?.length)return;let u=pE(n,({controller:h,oldIndex:d})=>d!=null&&(h.dom??h.getFirstDom())||null,c+1);u?l.forEach(h=>i.insertBefore(h,u)):l.forEach(h=>i.appendChild(h))}})}else{t=!0;let s=e?.();s&&lu(i,s),n?.forEach(({controller:o})=>{o.dom?i.appendChild(o.dom):o.retrieveMountingPackage()?.forEach(a=>i.appendChild(a))})}r?.forEach(s=>{s.dom?s.dom.remove():s.getAllDoms()?.forEach(o=>o.remove())})}};zm.domAfterUpdate=mE});var Vm=K(hu=>{var{ensureArray:gE}=yn(),{getNamespace:_E}=ea(),{createActiveChild:xE}=na(),{matchElement:yE}=ta(),{createPassiveController:vE}=au(),{domAfterUpdate:ME}=uu(),SE=({props:i,dom:e},{},{childControllers:t})=>{let n=i.children;i=null;let r=_E(e.tagName);return{acceptPropagation:km,matchElement:yE,retrieveMountingPackage:()=>[],applyUpdates:({propagationRequest:s})=>(s&&(n=s.element.props.children),{propagation:{elements:gE(n)}}),afterUpdate:ME({dom:e}),createActiveChild:(s,o)=>xE(s,{namespace:r,parentDom:e},o),createPassiveChild:s=>{let o=vE({namespace:r,parentDom:e,findNextDom:()=>{let a=t.findIndex(c=>c===o);return t.findValue(a+1,c=>c.dom??c.getFirstDom())}},s);return o},selfDispose:()=>{t.forEach(s=>{s.dom?s.dom.remove():s.getAllDoms().forEach(o=>o.remove())})}}};hu.PortalController=SE;var km=i=>i&&i.$$r2_portal;hu.validPortalElement=km});var su=K(Hm=>{var{createActiveDomController:bE,validDomElement:EE}=du(),{createActiveTextController:AE,validTextElement:wE}=Lm(),{validPortalElement:TE,PortalController:CE}=Vm(),{getNamespace:RE}=ea(),PE=[{check:EE,toChild:(i,{namespace:e}={},t)=>{e=e??RE(i.type);let n=e?document.createElementNS(e,i.type):document.createElement(i.type);return bE(n,{namespace:e},i,t)}},{check:wE,toChild:i=>AE(document.createTextNode(i),i)},{check:TE,toChild:CE}];Hm.types=PE});var na=K(Gm=>{var LE=(i,e,t)=>{let{types:n}=su();return n.find(r=>r.check(i)).toChild(i,e,t)};Gm.createActiveChild=LE});var fu=K(Wm=>{var IE=i=>(e,{dom:t,skip1stPass:n})=>(i==="fillRule"&&(i="fill-rule"),e!=null&&!n&&t.setAttribute(i,e),{update:r=>{r!==e&&(e=r,e!=null?t.setAttribute(i,e):t.removeAttribute(i))},dispose:()=>{e!=null&&t.removeAttribute(i)}});Wm.defaultType=IE});var pu=K(qm=>{var UE=({createNewAttrUpdater:i})=>{let e={};return{update:t=>{for(let n in t){let r=e[n];r?r.update(t[n]):e[n]=i(n,t[n])}for(let n in e)t[n]==null&&(e[n].dispose(),delete e[n])},dispose:()=>{for(let t in e)e[t].dispose()}}};qm.AttrsUpdater=UE});var Ym=K(Xm=>{var DE=["height","width","top","left","bottom","right","paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","fontSize"];Xm.pxAttrs=DE});var Jm=K(Zm=>{var{AttrsUpdater:NE}=pu(),{arrMapToO:OE}=xr(),{pxAttrs:FE}=Ym(),BE=(i,{dom:e,skip1stPass:t})=>{let n=()=>NE({createNewAttrUpdater:(s,o)=>(VE[s]??zE(s))(o,{dom:e,skip1stPass:t})}),r=n();return r.update(i),{update:s=>{s?(r||(r=n()),r.update(s)):(r.dispose(),r=null)},dispose:()=>{e.removeAttribute("style")}}};Zm.styleType=BE;var zE=i=>(i=$m[i]??i,(e,{dom:t,skip1stPass:n})=>{let r=t.style,s=(()=>{let o=i.startsWith("--");return a=>{o?r.setProperty(i,a):r[i]=a}})();return n||s(e),{update:o=>{e!==o&&(e=o,s(e))},dispose:()=>{t.style.removeProperty(i)}}}),$m={float:"cssFloat",zIndex:"z-index",paddingTop:"padding-top"},kE=i=>(i=$m[i]??i,(e,{dom:t,skip1stPass:n})=>(n||(t.style[i]=typeof e=="number"?e+"px":e),{update:r=>{e!==r&&(e=r,t.style[i]=typeof e=="number"?e+"px":e)},dispose:()=>{t.style.removeProperty(i)}})),VE=OE(FE,kE)});var jm=K(Km=>{var{cache0:HE}=ru(),GE=({isSchedulerEmpty:i,dom:e})=>{let t,n,r=HE(()=>{let s=o=>{n&&t?(t.value=e.value,n.value(o),i()&&(e.value=t.value)):n?n.value(o):e.value=t.value};e.addEventListener("input",s,{capture:!0})});return{value:s=>(t={value:s},s=null,e.value=t.value,r(),{update:o=>{t.value!==o&&(t.value=o,t.value.length===o.length?WE(o,e):e.value=t.value)},dispose:()=>{t=null,e.removeAttribute("value")}}),onChange:s=>(n={value:s},s=null,r(),{update:o=>{n.value=o},dispose:()=>{n=null}})}};Km.valueOnchange=GE;var WE=(i,e)=>{let t={};t.selectionStart=e.selectionStart,t.selectionEnd=e.selectionEnd,t.scrollLeft=e.scrollLeft,t.scrollTop=e.scrollTop,e.value=i,e.selectionStart=t.selectionStart,e.selectionEnd=t.selectionEnd,e.scrollLeft=(()=>{let n=e.scrollWidth-e.clientWidth;return t.selectionEnd===i.length&&t.scrollLeft>n-7?n:t.scrollLeft})(),e.scrollTop=t.scrollTop}});var eg=K(Qm=>{var qE=i=>(e,{dom:t,skip1stPass:n})=>(n||(t[i]=e),{update:r=>{e!==r&&(e=r,t[i]=e)},dispose:()=>{t.removeAttribute(i)}});Qm.booleanType=qE});var mu=K(Ft=>{var{chain:pD}=Ui(),tg=(i,e=2)=>{for(i=""+i;i.length<e;)i="0"+i;return i};Ft.paddingLeft=tg;Ft.paddingLeft1=tg;var XE=(i,e=2)=>ng(i,{length:e});Ft.paddingRight=XE;var ng=(i,{length:e=2,padChar:t="0"}={})=>(typeof i!="string"&&(i=""+i),i+t.repeat(Math.max(0,e-i.length)));Ft.paddingRight2=ng;var YE=function(i){let e="";for(let t=i.length-1;t>-1;t--)e+=i[t];return e};Ft.reverse=YE;var ig=function(i){let e=0,t,n;if(i.length===0)return e;for(t=0;t<i.length;t++)n=i.charCodeAt(t),e=(e<<5)-e+n,e|=0;return e<0?-e:e};Ft.hashCode=ig;var $E=(i,e)=>i[ig(e)%i.length];Ft.selectByHash=$E;var ZE=(...i)=>{for(let e=0;;e++){if(i[0]==null?e===0:e===i[0].length)return i[0];for(let t of i)if(t!=null&&t[e]!==i[0][e])return i[0].substring(0,e)}};Ft.commonStart=ZE;var JE=i=>i[0].toUpperCase()+i.substring(1);Ft.upperCase1=JE;var KE=i=>i[0].toLowerCase()+i.substring(1);Ft.lowerCase1=KE;var rg=i=>i!=null&&typeof i=="string"&&i.trim()!=="";Ft.isNotBlank=rg;var jE=i=>i.replace(/\s{2,}/g," ");Ft.deepTrim=jE;var QE=i=>!rg(i);Ft.isBlank=QE;var eA=(i,e)=>{let t=0,n=0;for(let r;(r=e.indexOf(i,t))>-1;)n++,t=r+i.length;return n};Ft.countHappens=eA;var tA=(i,e)=>{let t="";for(let n=0;n<e;n++)t+=i;return t};Ft.createString=tA});var og=K(sg=>{var nA=(i,e)=>(t,{dom:n})=>{let r=s=>t(s);return n.addEventListener(i,r,e),{update:s=>t=s,dispose:()=>{n.removeEventListener(i,r)}}};sg.eventType=nA});var cg=K(ag=>{var{upperCase1:iA}=mu(),{arrMapToO:rA}=xr(),{eventType:sA}=og(),oA=[{name:"blur"},{name:"click"},{name:"double click",domEventName:"dblclick"},{name:"drag over"},{name:"drag enter"},{name:"drag leave"},{name:"drop"},{name:"mouse down"},{name:"mouse up"},{name:"mouse move"},{name:"mouse enter"},{name:"mouse leave"},{name:"mouse over"},{name:"mouse out"},{name:"context menu"},{name:"wheel"},{name:"touch start",options:{passive:!0}},{name:"touch end",options:{passive:!0}},{name:"touch cancel",options:{passive:!0}},{name:"touch move",options:{passive:!0}},{name:"focus"},{name:"input"}],aA=({name:i,domEventName:e})=>e||i.split(" ").join("").toLowerCase(),cA=i=>"on"+i.split(" ").map(t=>iA(t)).join(""),lA=rA(oA,i=>sA(aA(i),i.options),i=>cA(i.name));ag.eventTypes=lA});var ug=K(lg=>{var{arrMapToO:uA}=xr(),{defaultType:hA}=fu(),{styleType:dA}=Jm(),{valueOnchange:fA}=jm(),{booleanType:pA}=eg(),{eventTypes:mA}=cg(),gA={className:hA("class"),...uA(["disabled","checked","readonly"],pA),...mA,style:dA},_A=({isSchedulerEmpty:i,dom:e})=>{let t=fA({isSchedulerEmpty:i,dom:e});return{getType:n=>t[n]??gA[n]}};lg.AttrTypes=_A});var du=K(gu=>{var{isValidElement:xA}=dn(),{omit:hg}=xr(),{ensureArray:yA}=yn(),{createActiveChild:vA}=na(),{matchElement:MA}=ta(),{createPassiveController:SA}=au(),{AttrTypes:bA}=ug(),{defaultType:EA}=fu(),{AttrsUpdater:AA}=pu(),{domAfterUpdate:wA}=uu(),{setRef:TA}=cu(),dg=i=>i&&xA(i)&&typeof i.type=="string";gu.validDomElement=dg;var CA=(i,{namespace:e}={},{props:t={},key:n,ref:r,type:s}={},{skipRawAttrs:o,isSchedulerEmpty:a,childControllers:c}={})=>{let l=t.children,u=bA({isSchedulerEmpty:a,dom:i}),h=AA({createNewAttrUpdater:(d,f)=>(u.getType(d)??EA(d))(f,{dom:i,skip1stPass:o})});return h.update(hg(t,["children"]),{skipRawAttrs:o}),t=void 0,{name:"active dom controller",dom:i,key:n,afterUpdate:wA({dom:i,getRef:()=>r}),acceptPropagation:d=>dg(d)&&d.key===n&&s===d.type,matchElement:MA,applyUpdates:({propagationRequest:d})=>(d&&(l=d.element.props.children,r=d.element.ref),d&&h.update(hg(d.element.props,["children"])),{propagation:{elements:yA(l)}}),createActiveChild:(d,f)=>vA(d,{namespace:e,parentDom:i},f),createPassiveChild:d=>{let f=SA({namespace:e,parentDom:i,findNextDom:()=>{let m=c.findIndex(_=>_===f);return c.findValue(m+1,_=>_.dom??_.getFirstDom())}},d);return f},selfDispose:()=>{r&&TA(null,r)}}};gu.createActiveDomController=CA});var pg=K(fg=>{var{createActiveDomController:RA}=du(),{getNamespace:PA}=ea(),LA=({dom:i,childControllers:e})=>({...RA(i,{namespace:i&&PA(i.tagName)},void 0,{childControllers:e}),rootDestroy:()=>{for(let t;t=i.lastChild;)t.remove()}});fg.DomRootController=LA});var gg=K(yu=>{var{Fragment:IA}=dn(),{ensureArray:mg}=yn(),xu=i=>{let e=mg(i.props.children),t=i.key;return i=null,{matchElement:_u.matchElement,createActiveChild:xu,key:t,acceptPropagation:n=>_u.matchElement(n)&&n.key===t,applyUpdates:({propagationRequest:n})=>(n&&(e=mg(n.element.props.children)),{propagation:{elements:e}})}};yu.FragmentActiveController=xu;var _u={matchElement:i=>i&&i.type&&(i.type.$_r2_fragment||i.type===IA),createActiveChild:xu};yu.FragmentController=()=>_u});var vg=K(yg=>{var _g=i=>({matchElement:e=>e&&Array.isArray(e),createActiveChild:_g,acceptPropagation:xg.matchElement,applyUpdates:({propagationRequest:e})=>(e&&(i=e.element),{propagation:{elements:i}})}),xg=(()=>({matchElement:i=>i&&Array.isArray(i),createActiveChild:_g}))();yg.ArrayController=()=>xg});var Ls=K(Mg=>{var UA=(()=>{let i=(()=>{}).__proto__;return e=>e.__proto__===i})();Mg.isPureFunction=UA});var Eg=K(bg=>{var{isValidElement:DA}=dn(),{isEmpty:NA,omit:OA}=xr(),{ensureArray:FA}=yn(),{isPureFunction:BA}=Ls(),Sg=({handleException:i,legacyContexts:e}={})=>({matchElement:t=>t&&DA(t)&&typeof t.type=="function"&&!BA(t.type)&&!t.type.$_r2_shadow,handleException:i,createActiveChild:(t,n)=>zA(t,{legacyContexts:e},i?Object.assign({},n,{handleException:i}):n)});bg.ComponentController=Sg;var zA=(i,{legacyContexts:e},{onRequestUpdate:t,handleException:n,findPassiveController:r})=>{let s=i.type,{key:o,ref:a}=i,c=kA(s.defaultProps),l=qA(e,s.contextTypes),u=new s(i.props,l.getContext());u.props=c(i.props),u._r2_findPassiveController=r,s.childContextTypes&&u.getChildContext&&(e=(e??[]).concat([GA({getChildContext:()=>u.getChildContext(),childContextTypes:s.childContextTypes})])),i=null,u.updater={enqueueSetState:(d,f,m)=>{u&&t({type:"setState",value:f,cb:m})},enqueueForceUpdate:(d,f)=>{u&&t({type:"forceUpdate",cb:f})}},n=u.componentDidCatch?VA(u,s):n;let h=Sg({handleException:n,legacyContexts:e});return Object.assign({},h,{key:o,createPassiveChild:()=>h,applyUpdates:({propagationRequest:d,updateRequests:f=[],isFirstRun:m})=>{if(!u)return;let _=[],g=!1,p=u.state,y=u.props,x=u.context;m&&(u.componentWillMount||u.UNSAFE_componentWillMount)&&(u.componentWillMount??u.UNSAFE_componentWillMount)?.apply(u);let M=HA(u);M&&_.push(M);for(let E of f)E.type==="setState"?typeof E.value=="function"?p=Object.assign({},p,E.value(p)):p=Object.assign({},p,E.value):E.type==="forceUpdate"&&(g=!0),E.cb&&_.push(E.cb);if(d&&(y=d.element.props,x=l.getContext(),a=d.element.ref),s.getDerivedStateFromProps){let E=s.getDerivedStateFromProps(y,p);E&&(p=Object.assign({},p,E))}y=c(y),!m&&u.componentWillReceiveProps!=null&&y!==u.props&&s.getDerivedStateFromProps==null&&u.componentWillReceiveProps(y,x);let P=!m&&!g&&!(u.shouldComponentUpdate?.(y,p,x)??!0);return P||(u.context=x,u.props=y,u.state=p),a&&(a(null),_.push(()=>a(u))),m&&u.componentDidMount&&_.push(u.componentDidMount.bind(u)),{propagation:P||!u.render?null:{elements:FA(u.render())},onCommit:_.length&&(()=>_.forEach(E=>E()))}},acceptPropagation:d=>h.matchElement(d)&&d.key===o&&d.type===s,selfDispose:()=>{u&&(a?.(null),u.componentWillUnmount?.(),u=null,l.dispose?.())}})},kA=i=>e=>e===void 0?i:e,VA=(i,e)=>t=>{e&&e.getDerivedStateFromError!=null&&i.setState(e.getDerivedStateFromError(t)),i.componentDidCatch!=null&&i.componentDidCatch(t)},HA=i=>{if(!i.componentDidUpdate)return null;let e=i.props,t=i.state,n=i.getSnapshotBeforeUpdate?.(e,t);return()=>{i.componentDidUpdate(e,t,n)}},GA=({getChildContext:i,childContextTypes:e})=>({childContextTypes:e,getChildContext:i}),WA={getContext:()=>({})},qA=(i,e)=>{if(!e||!i?.length)return WA;let t=(()=>{let n=[],r=e;for(let s=i.length-1;!NA(r)&&s>-1;s--){let o=i[s],a=Object.keys(r).filter(c=>o.childContextTypes[c]);r=OA(r,a),n.push({setValues:c=>{let l=o.getChildContext();for(let u of a)c[u]=l[u]}})}return n})();return{getContext:()=>{let n={};for(let r of t)r.setValues(n);return n}}}});var Tg=K(wg=>{var XA=()=>({acceptPropagation:Ag.matchElement}),Ag=(()=>({matchElement:i=>i==null||i===!1||i===!0,createActiveChild:XA}))();wg.NullController=()=>Ag});var Pg=K(Rg=>{var{remove1Mutate:YA}=hn(),$A=()=>{let i=[];return{eachValue:e=>i.forEach(t=>e(t.getValue())),matchElement:Cg,createActiveChild:e=>{let t=ZA(e);return i.push(t),t.setDispose(()=>YA(i,t)),t}}};Rg.ShadowReturnRootController=$A;var ZA=i=>{let e=i.props.collectValue,t=i.key;i=void 0;let n;return{setDispose:r=>n=r,getValue:()=>e,key:t,acceptPropagation:r=>Cg(r)&&t===r.key,applyUpdates:({propagationRequest:r})=>(r&&(e=r.element.props.collectValue),{}),selfDispose:()=>n()}},Cg=i=>i&&typeof i=="object"&&i.$_r2_return});var Ig=K(Lg=>{var JA=i=>{let e=null;return i.eachValue(t=>e=t(e)),e};Lg.extractShadowValues=JA});var Ng=K(Dg=>{var Ug=({collectValue:i})=>({$_r2_return:!0,props:{collectValue:i}});Ug.$_r2_return=!0;Dg.ShadowReturn=Ug});var Fg=K(Og=>{var{ShadowReturn:vu}=Ng(),KA={accept:i=>vu({collectValue:jA(i)}),acceptName:i=>e=>vu({collectValue:QA(i,e)}),acceptValue:i=>vu({collectValue:ew(i)})};Og.renderShadowParams=KA;var jA=i=>e=>e?(e.push(i),e):[i],QA=(i,e)=>t=>t==null?{[i]:e}:(t[i]=e,t),ew=i=>e=>i});var kg=K(Mu=>{var{isValidElement:tw}=dn(),{ensureArray:nw}=yn(),{ShadowReturnRootController:iw}=Pg(),{createRootNode:rw}=jl(),{renderUpdates:sw}=nu(),{chain:ow}=Ui(),{extractShadowValues:Bg}=Ig(),{renderShadowParams:aw}=Fg(),cw=(i,{onRequestUpdate:e,createUpdateRequest:t,isSchedulerEmpty:n,findPassiveController:r})=>{let s=ow(r(o=>o.getAllContexts?.()),o=>o?.map(a=>Object.assign({},a,{registerListener:c=>a.registerListener(l=>{let u=c(l);return t(u)})})));return zg(i,{onRequestUpdate:e,contexts:s,isSchedulerEmpty:n})},zg=(i,{onRequestUpdate:e,contexts:t,isSchedulerEmpty:n})=>{let{renderShadow:r,next:s}=i.props,o=i.key;i=void 0;let a=iw(),{createBaseControllers:c}=Su(),l=rw({controllers:[...c({contexts:t}),a]});return Object.assign({},ia,{key:o,acceptPropagation:u=>ia.matchElement(u)&&o===u.key,createPassiveChild:()=>ia,applyUpdates:({propagationRequest:u,updateRequests:h,isFirstRun:d})=>{u&&(r=u.element.props.renderShadow,s=u.element.props.next);let f=!u&&!d?h:[l.createUpdate(r(aw))].concat(h??[]),m=sw({updates:f,onRequestUpdate:e,isSchedulerEmpty:n});return{propagation:{elements:nw(s?.(Bg(a)))},onCommit:m}},getValues:()=>Bg(a),selfDispose:()=>l.destroy()})};Mu.ShadowActiveController1=zg;var lw=()=>({matchElement:i=>i&&tw(i)&&i.type.$_r2_shadow,createActiveChild:cw}),ia=lw();Mu.ShadowController=()=>ia});var Gg=K(Hg=>{var{isValidElement:uw}=dn(),{ensureArray:hw}=yn(),{addRemove:dw}=hn(),{isPureFunction:fw}=Ls(),Vg=({contexts:i=[]}={})=>({matchElement:e=>e&&uw(e)&&(e.type.$$typeof===Symbol.for("react.provider")||fw(e.type)&&e.type._contextRef),getAllContexts:()=>i,registerContextListener:({context:e,createUpdateRequest:t})=>{let n=i.find(r=>r.context===e);if(n){let r=n.registerListener(t);return{getValue:n.getValue,removeListener:r}}},createActiveChild:e=>pw(e,i)});Hg.ContextController=Vg;var pw=(i,e)=>{let{key:t,type:n}=i,{children:r,value:s}=i.props;i=null;let o=[],a=e.filter(l=>l.context!==n).concat([{context:n,getValue:()=>s,registerListener:dw(o)}]),c=Vg({contexts:a});return Object.assign({},c,{key:t,acceptPropagation:l=>c.matchElement(l)&&l.key===t&&l.type.Provider===n.Provider,applyUpdates:({propagationRequest:l})=>(l&&(r=l.element.props.children,s=l.element.props.value),{propagation:{elements:hw(r)},jumpUpdates:o.map(u=>u(s))})})}});var qg=K(Wg=>{var{isValidElement:mw}=dn(),{ensureArray:gw}=yn(),{isPureFunction:_w}=Ls(),xw=(i,{createUpdateRequest:e,findPassiveController:t})=>{let{key:n,type:r}=i,{children:s}=i.props;i=null;let o=t(l=>l.registerContextListener?.({context:yw(r),createUpdateRequest:e})),a=o?.getValue();return Object.assign({},ra,{key:n,acceptPropagation:l=>ra.matchElement(l)&&l.key===n&&l.type._context===r._context,createPassiveChild:()=>ra,applyUpdates:({propagationRequest:l,updateRequests:u})=>(l&&(s=l.element.props.children),o&&u?.length&&(a=o.getValue()),{propagation:{elements:gw(s(a))}}),selfDispose:o&&(()=>{o?.removeListener()})})},yw=i=>i._context?i._context.Provider:i.Provider,vw=()=>({matchElement:i=>i&&mw(i)&&(i.type.$$typeof===Symbol.for("react.context")||_w(i.type)&&i.type.contextType),createActiveChild:xw}),ra=vw();Wg.ConsumerController=()=>ra});var Yg=K(Xg=>{var Mw=({onRequestUpdate:i})=>{let e;return{setup1:()=>{let t=[];return{hook:n=>{t.push(n);let r=t.length-1;return[n,s=>i({type:"setState",newValue:s,stateIndex:r})]},commit:()=>{t.length&&(e=t)}}},setup2:t=>{if(!e)return null;for(let r of t)r.type==="setState"&&(e[r.stateIndex]=r.newValue);let n=0;return()=>{let r=n++;return[e[r],s=>i({type:"setState",newValue:s,stateIndex:r})]}}}};Xg.StateHook=Mw});var Zg=K($g=>{var DD=dn(),Sw=(i,e,t,n)=>{let r=n.current;try{return n.current=i,e()}finally{t?.(),n.current=r}};$g.swapDispatcher=Sw});var Kg=K(Jg=>{var{arrEquals:bw}=hn(),Ew=()=>{let i;return{setup1:()=>{let e=[];return{hook:(t,n)=>{e.push({fn:t,watches:n})},commit:()=>{e.length&&(e.forEach(t=>{t.cleanup=t.fn()}),i=e)}}},setup2:()=>{if(!i)return;let e=0,t=[];return{hook:(n,r)=>{let s=e++,o=i[s];o.fn=n,t.push(()=>{bw(o.watches,r)||(o.watches=r,o.cleanup?.(),o.cleanup=o.fn())})},commit:()=>{t.forEach(n=>n())}}},dispose:()=>{i?.forEach(e=>{e.cleanup?.()})}}};Jg.EffectHook=Ew});var Qg=K(jg=>{var Aw=({createUpdateRequest:i,findPassiveController:e})=>{let t;return{setup1:()=>{let n=[];return{hook:r=>{let s=e(c=>c.registerContextListener?.({context:r,createUpdateRequest:()=>i({type:"context",index:a})})),o=s?.getValue();n.push({value:o,context:s});let a=n.length-1;return o},commit:()=>{n.length&&(t=n)}}},setup2:n=>{if(!t)return;for(let s of n)if(s.type==="context"){let o=t[s.index];o.value=o.context?.getValue()}let r=0;return()=>{let s=r++;return t[s].value}},dispose:()=>{t?.forEach(n=>n.context?.removeListener())}}};jg.ContextHook=Aw});var t_=K(e_=>{var ww=({onRequestUpdate:i})=>{let e;return{setup1:()=>{let t=[];return{hook:(n,r,s)=>{let o=s?s(r):r;t.push({reducer:n,value:o});let a=t.length-1;return[o,c=>i({type:"reducer",action:c,reducerIndex:a})]},commit:()=>{t.length&&(e=t)}}},setup2:t=>{if(!e)return;for(let r of t)if(r.type==="reducer"){let s=e[r.reducerIndex];s.value=s.reducer(s.value,r.action)}let n=0;return()=>{let r=n++;return[e[r].value,s=>i({type:"reducer",action:s,reducerIndex:r})]}}}};e_.ReducerHook=ww});var i_=K(n_=>{var{arrEquals:Tw}=hn(),Cw=()=>{let i;return{setup1:()=>{let e=[];return{hook:(t,n)=>{let r=t();return e.push({fn:t,value:r,watches:n}),r},commit:()=>{e.length&&(i=e)}}},setup2:()=>{if(!i)return;let e=0;return(t,n)=>{let r=e++,s=i[r];return s.fn=t,Tw(s.watches,n)||(s.watches=n,s.value=s.fn()),s.value}}}};n_.MemoHook=Cw});var s_=K(r_=>{var Rw=()=>{let i;return{setup1:()=>{let e=[];return{hook:t=>{e.push(t);let n=e.length-1;return Object.assign(r=>e[n]=r,{current:t})},commit:()=>{e.length&&(i=e)}}},setup2:()=>{if(!i)return;let e=0;return()=>{let t=e++,n=i[t];return Object.assign(r=>i[t]=r,{current:n})}}}};r_.RefHook=Rw});var l_=K(c_=>{var Pw=dn(),{ensureArray:o_}=yn(),{StateHook:Lw}=Yg(),{swapDispatcher:a_}=Zg(),{EffectHook:Iw}=Kg(),{ContextHook:Uw}=Qg(),{ReducerHook:Dw}=t_(),{MemoHook:Nw}=i_(),{RefHook:Ow}=s_(),Fw=({onRequestUpdate:i,createUpdateRequest:e,findPassiveController:t})=>{let n=Pw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(!n)return null;let r=Lw({onRequestUpdate:i}),s=Dw({onRequestUpdate:i}),o=Iw(),a=Nw(),c=Ow(),l=Uw({createUpdateRequest:e,findPassiveController:t});return{run1:u=>{let h=o.setup1(),d=a.setup1(),f=s.setup1(),m=r.setup1(),_=l.setup1(),g=c.setup1(),p=d.hook;return a_({useState:m.hook,useReducer:f.hook,useEffect:h.hook,useMemo:p,useCallback:(y,x)=>p(()=>y,x),useContext:_.hook,useRef:g.hook},()=>({propagation:{elements:o_(u())}}),()=>{m.commit(),f.commit(),h.commit(),d.commit(),g.commit(),_.commit()},n.ReactCurrentDispatcher)},run2:(u,h)=>{let d=o.setup2(),f=a.setup2(),m=l.setup2(u);return a_({useState:r.setup2(u),useReducer:s.setup2(u),useEffect:d?.hook,useMemo:f,useCallback:(_,g)=>f(()=>_,g),useContext:m,useRef:c.setup2?.()},()=>({propagation:{elements:o_(h())}}),d?.commit,n.ReactCurrentDispatcher)},dispose:()=>{o.dispose(),l.dispose()}}};c_.createHooksSupport=Fw});var h_=K(u_=>{var{isValidElement:Bw}=dn(),{isPureFunction:zw}=Ls(),{createHooksSupport:kw}=l_(),Vw=(i,{onRequestUpdate:e,createUpdateRequest:t,findPassiveController:n})=>{let r=i.type,s=i.key,o=i.props,a=i.ref;i=null;let c=kw({onRequestUpdate:e,createUpdateRequest:t,findPassiveController:n});return Object.assign({},bu,{key:s,applyUpdates:({propagationRequest:l,updateRequests:u=[],isFirstRun:h})=>(l&&(o=l.element.props,a=l.element.ref),c?h?c.run1(()=>r(o,a)):c.run2(u,()=>r(o,a)):r(o,a)),selfDispose:c?.dispose,acceptPropagation:l=>bu.matchElement(l)&&l.key===s&&l.type===r})},Hw=()=>({matchElement:i=>i&&Bw(i)&&typeof i.type=="function"&&zw(i.type),createActiveChild:Vw}),bu=Hw();u_.FunctionalController=()=>bu});var f_=K(d_=>{var{isValidElement:Gw,createElement:Ww}=dn(),qw=i=>{let e=i.type,t=i.key,n=i.props,r=i.ref;return i=null,Object.assign({},Eu,{key:t,applyUpdates:({propagationRequest:s})=>(s&&(n=s.element.props,r=s.element.ref),{propagation:{elements:[Ww(e.render,Object.assign({},n,{ref:r}))]}}),acceptPropagation:s=>Eu.matchElement(s)&&s.key===t&&s.type===e})},Xw=()=>({matchElement:i=>i&&Gw(i)&&i.type.$$typeof===Symbol.for("react.forward_ref"),createActiveChild:qw}),Eu=Xw();d_.ForwardRefController=()=>Eu});var p_=K(()=>{});var Su=K(m_=>{var{FragmentController:Yw}=gg(),{ArrayController:$w}=vg(),{ComponentController:Zw}=Eg(),{NullController:Jw}=Tg(),{ShadowController:Kw}=kg(),{ContextController:jw}=Gg(),{ConsumerController:Qw}=qg(),{FunctionalController:eT}=h_(),{ForwardRefController:tT}=f_(),{StateController:XD}=p_(),nT=({contexts:i}={})=>[Yw(),Kw(),$w(),jw({contexts:i}),Qw(),Zw(),eT(),tT(),Jw()];m_.createBaseControllers=nT});var Au=K(g_=>{var{createRoot:iT}=wm(),{DomRootController:rT}=pg(),{createBaseControllers:sT}=Su(),{createChildControllersNav:oT}=Ql(),aT=i=>{for(let t;t=i.firstChild;)t.remove();let e=iT([rT({dom:i,childControllers:oT(0,()=>e)}),...sT()]);return e};g_.createRootWithDom=aT});var x_=K(__=>{var{createRootWithDom:cT}=Au(),lT=(i,e)=>{cT(e).render(i)};__.renderToDom=lT});var y_=K(()=>{});var M_=K(v_=>{var uT=(i,e)=>({$$r2_portal:!0,dom:e,props:{children:i}});v_.createPortal=uT});var b_=K(S_=>{var hT=i=>i._r2_findPassiveController(e=>e.mounting.getDomRange()?.from);S_.findDOMNode=hT});var A_=K((eN,E_)=>{var{renderToDom:dT}=x_(),{hydrate:fT}=y_(),{createPortal:pT}=M_(),{findDOMNode:mT}=b_(),{createRootWithDom:gT}=Au(),_T={render:dT,createRoot:gT,hydrate:fT,createPortal:pT,findDOMNode:mT};E_.exports=_T});var O_=K(je=>{"use strict";var Is=Symbol.for("react.element"),xT=Symbol.for("react.portal"),yT=Symbol.for("react.fragment"),vT=Symbol.for("react.strict_mode"),MT=Symbol.for("react.profiler"),ST=Symbol.for("react.provider"),bT=Symbol.for("react.context"),ET=Symbol.for("react.forward_ref"),AT=Symbol.for("react.suspense"),wT=Symbol.for("react.memo"),TT=Symbol.for("react.lazy"),w_=Symbol.iterator;function CT(i){return i===null||typeof i!="object"?null:(i=w_&&i[w_]||i["@@iterator"],typeof i=="function"?i:null)}var R_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P_=Object.assign,L_={};function yr(i,e,t){this.props=i,this.context=e,this.refs=L_,this.updater=t||R_}yr.prototype.isReactComponent={};yr.prototype.setState=function(i,e){if(typeof i!="object"&&typeof i!="function"&&i!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,i,e,"setState")};yr.prototype.forceUpdate=function(i){this.updater.enqueueForceUpdate(this,i,"forceUpdate")};function I_(){}I_.prototype=yr.prototype;function Tu(i,e,t){this.props=i,this.context=e,this.refs=L_,this.updater=t||R_}var Cu=Tu.prototype=new I_;Cu.constructor=Tu;P_(Cu,yr.prototype);Cu.isPureReactComponent=!0;var T_=Array.isArray,U_=Object.prototype.hasOwnProperty,Ru={current:null},D_={key:!0,ref:!0,__self:!0,__source:!0};function N_(i,e,t){var n,r={},s=null,o=null;if(e!=null)for(n in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)U_.call(e,n)&&!D_.hasOwnProperty(n)&&(r[n]=e[n]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+2];r.children=c}if(i&&i.defaultProps)for(n in a=i.defaultProps,a)r[n]===void 0&&(r[n]=a[n]);return{$$typeof:Is,type:i,key:s,ref:o,props:r,_owner:Ru.current}}function RT(i,e){return{$$typeof:Is,type:i.type,key:e,ref:i.ref,props:i.props,_owner:i._owner}}function Pu(i){return typeof i=="object"&&i!==null&&i.$$typeof===Is}function PT(i){var e={"=":"=0",":":"=2"};return"$"+i.replace(/[=:]/g,function(t){return e[t]})}var C_=/\/+/g;function wu(i,e){return typeof i=="object"&&i!==null&&i.key!=null?PT(""+i.key):e.toString(36)}function oa(i,e,t,n,r){var s=typeof i;(s==="undefined"||s==="boolean")&&(i=null);var o=!1;if(i===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(i.$$typeof){case Is:case xT:o=!0}}if(o)return o=i,r=r(o),i=n===""?"."+wu(o,0):n,T_(r)?(t="",i!=null&&(t=i.replace(C_,"$&/")+"/"),oa(r,e,t,"",function(l){return l})):r!=null&&(Pu(r)&&(r=RT(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(C_,"$&/")+"/")+i)),e.push(r)),1;if(o=0,n=n===""?".":n+":",T_(i))for(var a=0;a<i.length;a++){s=i[a];var c=n+wu(s,a);o+=oa(s,e,t,c,r)}else if(c=CT(i),typeof c=="function")for(i=c.call(i),a=0;!(s=i.next()).done;)s=s.value,c=n+wu(s,a++),o+=oa(s,e,t,c,r);else if(s==="object")throw e=String(i),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function sa(i,e,t){if(i==null)return i;var n=[],r=0;return oa(i,n,"","",function(s){return e.call(t,s,r++)}),n}function LT(i){if(i._status===-1){var e=i._result;e=e(),e.then(function(t){(i._status===0||i._status===-1)&&(i._status=1,i._result=t)},function(t){(i._status===0||i._status===-1)&&(i._status=2,i._result=t)}),i._status===-1&&(i._status=0,i._result=e)}if(i._status===1)return i._result.default;throw i._result}var $t={current:null},aa={transition:null},IT={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:aa,ReactCurrentOwner:Ru};je.Children={map:sa,forEach:function(i,e,t){sa(i,function(){e.apply(this,arguments)},t)},count:function(i){var e=0;return sa(i,function(){e++}),e},toArray:function(i){return sa(i,function(e){return e})||[]},only:function(i){if(!Pu(i))throw Error("React.Children.only expected to receive a single React element child.");return i}};je.Component=yr;je.Fragment=yT;je.Profiler=MT;je.PureComponent=Tu;je.StrictMode=vT;je.Suspense=AT;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IT;je.cloneElement=function(i,e,t){if(i==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+i+".");var n=P_({},i.props),r=i.key,s=i.ref,o=i._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ru.current),e.key!==void 0&&(r=""+e.key),i.type&&i.type.defaultProps)var a=i.type.defaultProps;for(c in e)U_.call(e,c)&&!D_.hasOwnProperty(c)&&(n[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)n.children=t;else if(1<c){a=Array(c);for(var l=0;l<c;l++)a[l]=arguments[l+2];n.children=a}return{$$typeof:Is,type:i.type,key:r,ref:s,props:n,_owner:o}};je.createContext=function(i){return i={$$typeof:bT,_currentValue:i,_currentValue2:i,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},i.Provider={$$typeof:ST,_context:i},i.Consumer=i};je.createElement=N_;je.createFactory=function(i){var e=N_.bind(null,i);return e.type=i,e};je.createRef=function(){return{current:null}};je.forwardRef=function(i){return{$$typeof:ET,render:i}};je.isValidElement=Pu;je.lazy=function(i){return{$$typeof:TT,_payload:{_status:-1,_result:i},_init:LT}};je.memo=function(i,e){return{$$typeof:wT,type:i,compare:e===void 0?null:e}};je.startTransition=function(i){var e=aa.transition;aa.transition={};try{i()}finally{aa.transition=e}};je.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};je.useCallback=function(i,e){return $t.current.useCallback(i,e)};je.useContext=function(i){return $t.current.useContext(i)};je.useDebugValue=function(){};je.useDeferredValue=function(i){return $t.current.useDeferredValue(i)};je.useEffect=function(i,e){return $t.current.useEffect(i,e)};je.useId=function(){return $t.current.useId()};je.useImperativeHandle=function(i,e,t){return $t.current.useImperativeHandle(i,e,t)};je.useInsertionEffect=function(i,e){return $t.current.useInsertionEffect(i,e)};je.useLayoutEffect=function(i,e){return $t.current.useLayoutEffect(i,e)};je.useMemo=function(i,e){return $t.current.useMemo(i,e)};je.useReducer=function(i,e,t){return $t.current.useReducer(i,e,t)};je.useRef=function(i){return $t.current.useRef(i)};je.useState=function(i){return $t.current.useState(i)};je.useSyncExternalStore=function(i,e,t){return $t.current.useSyncExternalStore(i,e,t)};je.useTransition=function(){return $t.current.useTransition()};je.version="18.2.0"});var Lu=K((nN,F_)=>{"use strict";F_.exports=O_()});var z_=K(Iu=>{var{Component:UT,createElement:DT}=kn(),B_=({next:i,getInitValue:e,initValue:t})=>DT(ca,{next:i,getInitValue:e,initValue:t});Iu.State=B_;Iu.State1=B_;var ca=class extends UT{constructor(e,t){super(e,t),this.state={value:e.getInitValue?e.getInitValue():e.initValue}}componentWillUnmount(){this.unmounted=Date.now()}setState(e,t){!this.unmounted||Date.now()-this.unmounted>3e3?super.setState(e,t):console.log("[WARNING] Set state when unmounted")}render(){let{next:e}=this.props,{value:t}=this.state;return e?.({value:t,onChange:(n,r)=>{this.setState({value:n},r)},change:(n,r)=>{this.setState(s=>({...s,value:n(s.value)}),r)}})??null}};ca.$_r2_state=!0});var Us=K(k_=>{var{State:NT}=z_();k_.UseState=NT});var H_=K(V_=>{var{cs:OT}=Rn(),{UseState:FT}=Us(),BT=({state:i,validate:e,format:t,parse:n,next:r})=>OT(["buffer",(s,o)=>FT({next:o})],({buffer:s})=>r({value:(s.value!=null?s.value:t?t(i.value):i.value)??"",onChange:o=>{let a=o.target.value;s.onChange(a),e(a)?i.onChange(n(a)):a||i.onChange(null)},onBlur:()=>{s.onChange(null)}}));V_.TransformationInputBinding=BT});var W_=K(G_=>{var{TransformationInputBinding:zT}=H_(),kT=({state:i,next:e})=>zT({state:i,validate:t=>!isNaN(t),parse:t=>+t,next:e});G_.NumberInputBinding=kT});var Uu=K(li=>{function q_(i,e){if(e==null)return i;for(let t of e){if(i==null)return i;let[n]=typeof t=="string"?t.indexOf("!")>0?t.split("!"):[t]:typeof t=="function"?[t(i)]:[t];i=i[n]}return i}li.getPath=q_;function Ds(i,e,t){if(e.length===0)return t;let[n,...r]=e,[s,o]=typeof n=="string"?n.indexOf("!")>0?n.split("!"):[n]:typeof n=="function"?[n(i)]:[n],a=()=>o==="arr"?[]:{};if(Array.isArray(i)){let c=i?i.slice(0):[];return c[s]=Ds(i&&i[s]||a(),r,t),c}else return Object.assign({},i,{[s]:Ds(i&&i[s]||a(),r,t)})}li.setPath=Ds;li.snv=Ds;function X_(i,e,t){if(e.length===0)return t;let[n,...r]=e;return Object.assign({},i,{[n]:X_(i&&i[n]||{},r,t)})}li.setPathO=X_;function Y_(i,e,t){let n=q_(i,e),r=t(n);return r!==n?Ds(i,e,r):i}li.changePath=Y_;li.cnv=Y_;var $_=(i,e)=>{if(i==null)return null;let[t,...n]=e,r=(s=>typeof s=="object"?i.find(o=>!Object.keys(s).find(a=>s[a]!==o[a])):i[s])(t);return n.length?$_(r,n):r};li.locate=$_});var j_=K(K_=>{var{getPath:VT,setPath:Z_,changePath:J_}=Uu(),HT=(i,e)=>({value:VT(i.value,e),onChange:(t,n)=>{i.change?i.change(r=>Z_(r,e,t),n):i.onChange(Z_(i.value,e,t),n)},change:(t,n)=>{i.change?i.change(r=>J_(r,e,t),n):i.onChange(J_(i.value,e,t),n)}});K_.scope=HT});var Nu=K(Du=>{var{changePath:Q_}=Uu(),e0=(i,e,t)=>{i.change?i.change(n=>Q_(n,e,t)):i.onChange(Q_(i.value,e,t))};Du.spc=e0;Du.scnv=e0});var Fu=K(Ou=>{var{createElement:GT,Fragment:WT}=kn(),qT=i=>(e,t)=>t0({key:i,next:t});Ou.keyed=qT;var t0=({key:i,next:e})=>GT(WT,{key:i},e());Ou.keyed1=t0});var la=K(n0=>{var XT=kn(),{createElement:YT}=kn(),$T=({action:i,props:e,next:t})=>YT(Bu,{action:i,props:e,next:t});n0.OnUnmounted=$T;var Bu=class extends XT.Component{componentWillUnmount(){this.props.action({getLatestProps:()=>this.props.props})}render(){let{next:e}=this.props;return e?e():null}}});var Ns=K(i0=>{var{createElement:ZT,Component:JT}=kn(),KT=({getInitValue:i,initValue:e,props:t,next:n})=>ZT(zu,{getInitValue:i,initValue:e,props:t,next:n});i0.Static=KT;var zu=class extends JT{constructor(e,t){super(e,t),this.value=e.getInitValue?e.getInitValue({getLatestProps:()=>this.props.props,isMounted:()=>this.mounted}):e.initValue!==void 0?e.initValue:e.value}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){let{next:e}=this.props;return e(this.value)??null}}});var ku=K(r0=>{var{Static:jT}=Ns(),QT=({getInitValue:i,next:e})=>jT({getInitValue:()=>{let t=i?.();return{get:()=>t,set:n=>t=n}},next:e});r0.Static2=QT});var o0={};Jv(o0,{lighten:()=>e1,parseHex:()=>s0,toHex:()=>ua});var Os,e1,s0,ua,Vu=Zv(()=>{Os=Ke(mu()),e1=(i,e)=>{let{r:t,g:n,b:r}=s0(i),s=o=>{o=Math.min(255,t*(1+e));let a=o.toString(16);return(0,Os.paddingLeft)(a)};return ua({r:s(t),g:s(n),b:s(r)})},s0=i=>{let e=parseInt(i.substring(1,3),16),t=parseInt(i.substring(3,5),16),n=parseInt(i.substring(5,7),16);return{r:e,g:t,b:n}},ua=i=>{let{r:e,g:t,b:n}=i;return`#${(0,Os.paddingLeft)(e.toString(16),2)}${(0,Os.paddingLeft)(t.toString(16),2)}${(0,Os.paddingLeft)(n.toString(16),2)}`}});var rv=K(v=>{"use strict";var cl="160",t1={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},n1={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ox=0,Eh=1,Fx=2,i1=3,r1=0,Mf=1,Bx=2,Pn=3,ii=0,Kt=1,In=2,s1=2,jn=0,Ji=1,Ah=2,wh=3,Th=4,zx=5,_i=100,kx=101,Vx=102,Ch=103,Rh=104,Hx=200,Gx=201,Wx=202,qx=203,lc=204,uc=205,Xx=206,Yx=207,$x=208,Zx=209,Jx=210,Kx=211,jx=212,Qx=213,ey=214,ty=0,ny=1,iy=2,to=3,ry=4,sy=5,oy=6,ay=7,Ho=0,cy=1,ly=2,Qn=0,uy=1,hy=2,dy=3,fy=4,py=5,my=6,Ph="attached",gy="detached",ll=300,ri=301,Si=302,no=303,io=304,vs=306,ro=1e3,Ht=1001,so=1002,vt=1003,hc=1004,o1=1004,Zs=1005,a1=1005,Mt=1006,Sf=1007,c1=1007,bi=1008,l1=1008,ei=1009,_y=1010,xy=1011,ul=1012,bf=1013,Zn=1014,En=1015,Yr=1016,Ef=1017,Af=1018,yi=1020,yy=1021,Qt=1023,vy=1024,My=1025,vi=1026,ji=1027,Sy=1028,wf=1029,by=1030,Tf=1031,Cf=1033,ic=33776,rc=33777,sc=33778,oc=33779,Lh=35840,Ih=35841,Uh=35842,Dh=35843,Rf=36196,Nh=37492,Oh=37496,Fh=37808,Bh=37809,zh=37810,kh=37811,Vh=37812,Hh=37813,Gh=37814,Wh=37815,qh=37816,Xh=37817,Yh=37818,$h=37819,Zh=37820,Jh=37821,ac=36492,Kh=36494,jh=36495,Ey=36283,Qh=36284,ed=36285,td=36286,Ay=2200,wy=2201,Ty=2202,oo=2300,ao=2301,cc=2302,Yi=2400,$i=2401,co=2402,hl=2500,Pf=2501,u1=0,h1=1,d1=2,Lf=3e3,Mi=3001,Cy=3200,Ry=3201,Ci=0,Py=1,sn="",At="srgb",Un="srgb-linear",dl="display-p3",Go="display-p3-linear",lo="linear",ut="srgb",uo="rec709",ho="p3",f1=0,Wi=7680,p1=7681,m1=7682,g1=7683,_1=34055,x1=34056,y1=5386,v1=512,M1=513,S1=514,b1=515,E1=516,A1=517,w1=518,nd=519,Ly=512,Iy=513,Uy=514,If=515,Dy=516,Ny=517,Oy=518,Fy=519,fo=35044,T1=35048,C1=35040,R1=35045,P1=35049,L1=35041,I1=35046,U1=35050,D1=35042,N1="100",id="300 es",dc=1035,An=2e3,$r=2001,wn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],a0=1234567,Ki=Math.PI/180,Zr=180/Math.PI;function on(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function Uf(i,e){return(i%e+e)%e}function O1(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function F1(i,e,t){return i!==e?(t-i)/(e-i):0}function Js(i,e,t){return(1-t)*i+t*e}function B1(i,e,t,n){return Js(i,e,1-Math.exp(-t*n))}function z1(i,e=1){return e-Math.abs(Uf(i,e*2)-e)}function k1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function V1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function H1(i,e){return i+Math.floor(Math.random()*(e-i+1))}function G1(i,e){return i+Math.random()*(e-i)}function W1(i){return i*(.5-Math.random())}function q1(i){i!==void 0&&(a0=i);let e=a0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function X1(i){return i*Ki}function Y1(i){return i*Zr}function rd(i){return(i&i-1)===0&&i!==0}function $1(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Z1(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),m=o((n-e)/2);switch(r){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function en(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qe(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var J1={DEG2RAD:Ki,RAD2DEG:Zr,generateUUID:on,clamp:_t,euclideanModulo:Uf,mapLinear:O1,inverseLerp:F1,lerp:Js,damp:B1,pingpong:z1,smoothstep:k1,smootherstep:V1,randInt:H1,randFloat:G1,randFloatSpread:W1,seededRandom:q1,degToRad:X1,radToDeg:Y1,isPowerOfTwo:rd,ceilPowerOfTwo:$1,floorPowerOfTwo:fc,setQuaternionFromProperEuler:Z1,normalize:qe,denormalize:en},$=class{constructor(e=0,t=0){$.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ke=class{constructor(e,t,n,r,s,o,a,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=r[0],g=r[3],p=r[6],y=r[1],x=r[4],M=r[7],P=r[2],E=r[5],R=r[8];return s[0]=o*_+a*y+c*P,s[3]=o*g+a*x+c*E,s[6]=o*p+a*M+c*R,s[1]=l*_+u*y+h*P,s[4]=l*g+u*x+h*E,s[7]=l*p+u*M+h*R,s[2]=d*_+f*y+m*P,s[5]=d*g+f*x+m*E,s[8]=d*p+f*M+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,f=l*s-o*c,m=t*h+n*d+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=h*_,e[1]=(r*l-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Hu.makeScale(e,t)),this}rotate(e){return this.premultiply(Hu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Hu=new ke;function By(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}var K1={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Vr(i,e){return new K1[i](e)}function po(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zy(){let i=po("canvas");return i.style.display="block",i}var c0={};function Ks(i){i in c0||(c0[i]=!0,console.warn(i))}var l0=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),u0=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ha={[Un]:{transfer:lo,primaries:uo,toReference:i=>i,fromReference:i=>i},[At]:{transfer:ut,primaries:uo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Go]:{transfer:lo,primaries:ho,toReference:i=>i.applyMatrix3(u0),fromReference:i=>i.applyMatrix3(l0)},[dl]:{transfer:ut,primaries:ho,toReference:i=>i.convertSRGBToLinear().applyMatrix3(u0),fromReference:i=>i.applyMatrix3(l0).convertLinearToSRGB()}},j1=new Set([Un,Go]),ot={enabled:!0,_workingColorSpace:Un,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!j1.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ha[e].toReference,r=ha[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ha[i].primaries},getTransfer:function(i){return i===sn?lo:ha[i].transfer}};function qr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gu(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var vr,mo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vr===void 0&&(vr=po("canvas")),vr.width=e.width,vr.height=e.height;let n=vr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=po("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qr(t[n]/255)*255):t[n]=qr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Q1=0,Jn=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=on(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wu(r[o].image)):s.push(Wu(r[o]))}else s=Wu(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Wu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var eC=0,ft=class extends wn{constructor(e=ft.DEFAULT_IMAGE,t=ft.DEFAULT_MAPPING,n=Ht,r=Ht,s=Mt,o=bi,a=Qt,c=ei,l=ft.DEFAULT_ANISOTROPY,u=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eC++}),this.uuid=on(),this.name="",this.source=new Jn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Mi?At:sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ll)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ro:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case so:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ro:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case so:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?Mi:Lf}set encoding(e){Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Mi?At:sn}};ft.DEFAULT_IMAGE=null;ft.DEFAULT_MAPPING=ll;ft.DEFAULT_ANISOTROPY=1;var nt=class{constructor(e=0,t=0,n=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,M=(f+1)/2,P=(p+1)/2,E=(u+d)/4,R=(h+_)/4,D=(m+g)/4;return x>M&&x>P?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=E/n,s=R/n):M>P?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=E/r,s=D/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=R/s,r=D/s),this.set(n,r,s,t),this}let y=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pc=class extends wn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);let r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ks("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Mi?At:sn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ft(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Jn(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends pc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jr=class extends ft{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},sd=class extends an{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Jr(null,e,t,n),this.texture.isRenderTargetTexture=!0}},go=class extends ft{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},od=class extends an{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new go(null,e,t,n),this.texture.isRenderTargetTexture=!0}},ad=class extends an{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGLMultipleRenderTargets=!0;let s=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.texture.length;r<s;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}},Gt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],d=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==m){let g=1-a,p=c*d+l*f+u*m+h*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let P=Math.sqrt(x),E=Math.atan2(P,p*y);g=Math.sin(g*E)/P,a=Math.sin(a*E)/P}let M=a*y;if(c=c*g+d*M,l=l*g+f*M,u=u*g+m*M,h=h*g+_*M,g===1-a){let P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+u*h+c*f-l*d,e[t+1]=c*m+u*d+l*h-a*f,e[t+2]=l*m+u*f+a*d-c*h,e[t+3]=u*m-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),d=c(n/2),f=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(h0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(h0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qu.copy(this).projectOnVector(e),this.sub(qu)}reflect(e){return this.sub(qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qu=new C,h0=new Gt,Dt=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(s,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),da.copy(n.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),fa.subVectors(this.max,Fs),Mr.subVectors(e.a,Fs),Sr.subVectors(e.b,Fs),br.subVectors(e.c,Fs),ui.subVectors(Sr,Mr),hi.subVectors(br,Sr),Di.subVectors(Mr,br);let t=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-Di.z,Di.y,ui.z,0,-ui.x,hi.z,0,-hi.x,Di.z,0,-Di.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-Di.y,Di.x,0];return!Xu(t,Mr,Sr,br,fa)||(t=[1,0,0,0,1,0,0,0,1],!Xu(t,Mr,Sr,br,fa))?!1:(pa.crossVectors(ui,hi),t=[pa.x,pa.y,pa.z],Xu(t,Mr,Sr,br,fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Hn=[new C,new C,new C,new C,new C,new C,new C,new C],vn=new C,da=new Dt,Mr=new C,Sr=new C,br=new C,ui=new C,hi=new C,Di=new C,Fs=new C,fa=new C,pa=new C,Ni=new C;function Xu(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ni.fromArray(i,s);let a=r.x*Math.abs(Ni.x)+r.y*Math.abs(Ni.y)+r.z*Math.abs(Ni.z),c=e.dot(Ni),l=t.dot(Ni),u=n.dot(Ni);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var tC=new Dt,Bs=new C,Yu=new C,It=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):tC.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);let t=Bs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Bs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(Yu)),this.expandByPoint(Bs.copy(e.center).sub(Yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new C,$u=new C,ma=new C,di=new C,Zu=new C,ga=new C,Ju=new C,Ei=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){$u.copy(e).add(t).multiplyScalar(.5),ma.copy(t).sub(e).normalize(),di.copy(this.origin).sub($u);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ma),a=di.dot(this.direction),c=-di.dot(ma),l=di.lengthSq(),u=Math.abs(1-o*o),h,d,f,m;if(u>0)if(h=o*c-a,d=o*a-c,m=s*u,h>=0)if(d>=-m)if(d<=m){let _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy($u).addScaledVector(ma,d),f}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);let n=Gn.dot(this.direction),r=Gn.dot(Gn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,r,s){Zu.subVectors(t,e),ga.subVectors(n,e),Ju.crossVectors(Zu,ga);let o=this.direction.dot(Ju),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);let c=a*this.direction.dot(ga.crossVectors(di,ga));if(c<0)return null;let l=a*this.direction.dot(Zu.cross(di));if(l<0||c+l>o)return null;let u=-a*di.dot(Ju);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class{constructor(e,t,n,r,s,o,a,c,l,u,h,d,f,m,_,g){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,u,h,d,f,m,_,g)}set(e,t,n,r,s,o,a,c,l,u,h,d,f,m,_,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Er.setFromMatrixColumn(e,0).length(),s=1/Er.setFromMatrixColumn(e,1).length(),o=1/Er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,f=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,m=l*u,_=l*h;t[0]=d+_*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,m=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=m*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+m,t[10]=d-_*h}else if(e.order==="XZY"){let d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nC,e,iC)}lookAt(e,t,n){let r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),fi.crossVectors(n,nn),fi.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),fi.crossVectors(n,nn)),fi.normalize(),_a.crossVectors(nn,fi),r[0]=fi.x,r[4]=_a.x,r[8]=nn.x,r[1]=fi.y,r[5]=_a.y,r[9]=nn.y,r[2]=fi.z,r[6]=_a.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],y=n[3],x=n[7],M=n[11],P=n[15],E=r[0],R=r[4],D=r[8],b=r[12],w=r[1],O=r[5],W=r[9],se=r[13],U=r[2],B=r[6],H=r[10],J=r[14],Z=r[3],q=r[7],ne=r[11],ie=r[15];return s[0]=o*E+a*w+c*U+l*Z,s[4]=o*R+a*O+c*B+l*q,s[8]=o*D+a*W+c*H+l*ne,s[12]=o*b+a*se+c*J+l*ie,s[1]=u*E+h*w+d*U+f*Z,s[5]=u*R+h*O+d*B+f*q,s[9]=u*D+h*W+d*H+f*ne,s[13]=u*b+h*se+d*J+f*ie,s[2]=m*E+_*w+g*U+p*Z,s[6]=m*R+_*O+g*B+p*q,s[10]=m*D+_*W+g*H+p*ne,s[14]=m*b+_*se+g*J+p*ie,s[3]=y*E+x*w+M*U+P*Z,s[7]=y*R+x*O+M*B+P*q,s[11]=y*D+x*W+M*H+P*ne,s[15]=y*b+x*se+M*J+P*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*c*h-r*l*h-s*a*d+n*l*d+r*a*f-n*c*f)+_*(+t*c*f-t*l*d+s*o*d-r*o*f+r*l*u-s*c*u)+g*(+t*l*h-t*a*f-s*o*h+n*o*f+s*a*u-n*l*u)+p*(-r*a*u-t*c*h+t*a*d+r*o*h-n*o*d+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],y=h*g*l-_*d*l+_*c*f-a*g*f-h*c*p+a*d*p,x=m*d*l-u*g*l-m*c*f+o*g*f+u*c*p-o*d*p,M=u*_*l-m*h*l+m*a*f-o*_*f-u*a*p+o*h*p,P=m*h*c-u*_*c-m*a*d+o*_*d+u*a*g-o*h*g,E=t*y+n*x+r*M+s*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=y*R,e[1]=(_*d*s-h*g*s-_*r*f+n*g*f+h*r*p-n*d*p)*R,e[2]=(a*g*s-_*c*s+_*r*l-n*g*l-a*r*p+n*c*p)*R,e[3]=(h*c*s-a*d*s-h*r*l+n*d*l+a*r*f-n*c*f)*R,e[4]=x*R,e[5]=(u*g*s-m*d*s+m*r*f-t*g*f-u*r*p+t*d*p)*R,e[6]=(m*c*s-o*g*s-m*r*l+t*g*l+o*r*p-t*c*p)*R,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*f+t*c*f)*R,e[8]=M*R,e[9]=(m*h*s-u*_*s-m*n*f+t*_*f+u*n*p-t*h*p)*R,e[10]=(o*_*s-m*a*s+m*n*l-t*_*l-o*n*p+t*a*p)*R,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*f-t*a*f)*R,e[12]=P*R,e[13]=(u*_*r-m*h*r+m*n*d-t*_*d-u*n*g+t*h*g)*R,e[14]=(m*a*r-o*_*r-m*n*c+t*_*c+o*n*g-t*a*g)*R,e[15]=(o*h*r-u*a*r+u*n*c-t*h*c-o*n*d+t*a*d)*R,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,f=s*u,m=s*h,_=o*u,g=o*h,p=a*h,y=c*l,x=c*u,M=c*h,P=n.x,E=n.y,R=n.z;return r[0]=(1-(_+p))*P,r[1]=(f+M)*P,r[2]=(m-x)*P,r[3]=0,r[4]=(f-M)*E,r[5]=(1-(d+p))*E,r[6]=(g+y)*E,r[7]=0,r[8]=(m+x)*R,r[9]=(g-y)*R,r[10]=(1-(d+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Er.set(r[0],r[1],r[2]).length(),o=Er.set(r[4],r[5],r[6]).length(),a=Er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);let l=1/s,u=1/o,h=1/a;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,t.setFromRotationMatrix(Mn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=An){let c=this.elements,l=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r),f,m;if(a===An)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===$r)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=An){let c=this.elements,l=1/(t-e),u=1/(n-r),h=1/(o-s),d=(t+e)*l,f=(n+r)*u,m,_;if(a===An)m=(o+s)*h,_=-2*h;else if(a===$r)m=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Er=new C,Mn=new Le,nC=new C(0,0,0),iC=new C(1,1,1),fi=new C,_a=new C,nn=new C,d0=new Le,f0=new Gt,Qi=class{constructor(e=0,t=0,n=0,r=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return d0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(d0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return f0.setFromEuler(this),this.setFromQuaternion(f0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qi.DEFAULT_ORDER="XYZ";var Kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},rC=0,p0=new C,Ar=new Gt,Wn=new Le,xa=new C,zs=new C,sC=new C,oC=new Gt,m0=new C(1,0,0),g0=new C(0,1,0),_0=new C(0,0,1),aC={type:"added"},cC={type:"removed"},et=class extends wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rC++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=et.DEFAULT_UP.clone();let e=new C,t=new Qi,n=new Gt,r=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Le},normalMatrix:{value:new ke}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(m0,e)}rotateY(e){return this.rotateOnAxis(g0,e)}rotateZ(e){return this.rotateOnAxis(_0,e)}translateOnAxis(e,t){return p0.copy(e).applyQuaternion(this.quaternion),this.position.add(p0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(m0,e)}translateY(e){return this.translateOnAxis(g0,e)}translateZ(e){return this.translateOnAxis(_0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xa.copy(e):xa.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(zs,xa,this.up):Wn.lookAt(xa,zs,this.up),this.quaternion.setFromRotationMatrix(Wn),r&&(Wn.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix(Wn),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(aC)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cC)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,sC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,oC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++){let a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};et.DEFAULT_UP=new C(0,1,0);et.DEFAULT_MATRIX_AUTO_UPDATE=!0;et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new C,qn=new C,Ku=new C,Xn=new C,wr=new C,Tr=new C,x0=new C,ju=new C,Qu=new C,eh=new C,ya=!1,Vt=class{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Sn.subVectors(e,t),r.cross(Sn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Sn.subVectors(r,t),qn.subVectors(n,t),Ku.subVectors(e,t);let o=Sn.dot(Sn),a=Sn.dot(qn),c=Sn.dot(Ku),l=qn.dot(qn),u=qn.dot(Ku),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,f=(l*c-a*u)*d,m=(o*u-a*c)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getUV(e,t,n,r,s,o,a,c){return ya===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ya=!0),this.getInterpolation(e,t,n,r,s,o,a,c)}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Xn.x),c.addScaledVector(o,Xn.y),c.addScaledVector(a,Xn.z),c)}static isFrontFacing(e,t,n,r){return Sn.subVectors(n,t),qn.subVectors(e,t),Sn.cross(qn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Sn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return ya===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ya=!0),Vt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Vt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;wr.subVectors(r,n),Tr.subVectors(s,n),ju.subVectors(e,n);let c=wr.dot(ju),l=Tr.dot(ju);if(c<=0&&l<=0)return t.copy(n);Qu.subVectors(e,r);let u=wr.dot(Qu),h=Tr.dot(Qu);if(u>=0&&h<=u)return t.copy(r);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(wr,o);eh.subVectors(e,s);let f=wr.dot(eh),m=Tr.dot(eh);if(m>=0&&f<=m)return t.copy(s);let _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Tr,a);let g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return x0.subVectors(s,r),a=(h-u)/(h-u+(f-m)),t.copy(r).addScaledVector(x0,a);let p=1/(g+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(wr,o).addScaledVector(Tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ky={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},va={h:0,s:0,l:0};function th(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ot.workingColorSpace){if(e=Uf(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=th(o,s,e+1/3),this.g=th(o,s,e),this.b=th(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,t=At){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=ky[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}copyLinearToSRGB(e){return this.r=Gu(e.r),this.g=Gu(e.g),this.b=Gu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return ot.fromWorkingColorSpace(zt.copy(this),e),Math.round(_t(zt.r*255,0,255))*65536+Math.round(_t(zt.g*255,0,255))*256+Math.round(_t(zt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(zt.copy(this),t);let n=zt.r,r=zt.g,s=zt.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=At){ot.fromWorkingColorSpace(zt.copy(this),e);let t=zt.r,n=zt.g,r=zt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(va);let n=Js(pi.h,va.h,t),r=Js(pi.s,va.s,t),s=Js(pi.l,va.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new ge;ge.NAMES=ky;var lC=0,Ut=class extends wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lC++}),this.uuid=on(),this.name="",this.type="Material",this.blending=Ji,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=uc,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lc&&(n.blendSrc=this.blendSrc),this.blendDst!==uc&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Dn=class extends Ut{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$n=uC();function uC(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,r[c]=24,r[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,r[c]=-l-1,r[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,r[c]=13,r[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,r[c]=24,r[c|256]=24):(n[c]=31744,n[c|256]=64512,r[c]=13,r[c|256]=13)}let s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,s[c]=l|u}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function jt(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=_t(i,-65504,65504),$n.floatView[0]=i;let e=$n.uint32View[0],t=e>>23&511;return $n.baseTable[t]+((e&8388607)>>$n.shiftTable[t])}function $s(i){let e=i>>10;return $n.uint32View[0]=$n.mantissaTable[$n.offsetTable[e]+(i&1023)]+$n.exponentTable[e],$n.floatView[0]}var hC={toHalfFloat:jt,fromHalfFloat:$s},bt=new C,Ma=new $,it=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ma.fromBufferAttribute(this,t),Ma.applyMatrix3(e),this.setXY(t,Ma.x,Ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=en(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=en(t,this.array)),t}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=en(t,this.array)),t}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=en(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=en(t,this.array)),t}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),r=qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),r=qe(r,this.array),s=qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fo&&(e.usage=this.usage),e}},cd=class extends it{constructor(e,t,n){super(new Int8Array(e),t,n)}},ld=class extends it{constructor(e,t,n){super(new Uint8Array(e),t,n)}},ud=class extends it{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}},hd=class extends it{constructor(e,t,n){super(new Int16Array(e),t,n)}},_o=class extends it{constructor(e,t,n){super(new Uint16Array(e),t,n)}},dd=class extends it{constructor(e,t,n){super(new Int32Array(e),t,n)}},xo=class extends it{constructor(e,t,n){super(new Uint32Array(e),t,n)}},fd=class extends it{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=$s(this.array[e*this.itemSize]);return this.normalized&&(t=en(t,this.array)),t}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize]=jt(t),this}getY(e){let t=$s(this.array[e*this.itemSize+1]);return this.normalized&&(t=en(t,this.array)),t}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+1]=jt(t),this}getZ(e){let t=$s(this.array[e*this.itemSize+2]);return this.normalized&&(t=en(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+2]=jt(t),this}getW(e){let t=$s(this.array[e*this.itemSize+3]);return this.normalized&&(t=en(t,this.array)),t}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+3]=jt(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array)),this.array[e+0]=jt(t),this.array[e+1]=jt(n),this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),r=qe(r,this.array)),this.array[e+0]=jt(t),this.array[e+1]=jt(n),this.array[e+2]=jt(r),this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),r=qe(r,this.array),s=qe(s,this.array)),this.array[e+0]=jt(t),this.array[e+1]=jt(n),this.array[e+2]=jt(r),this.array[e+3]=jt(s),this}},Me=class extends it{constructor(e,t,n){super(new Float32Array(e),t,n)}},pd=class extends it{constructor(e,t,n){super(new Float64Array(e),t,n)}},dC=0,fn=new Le,nh=new et,Cr=new C,rn=new Dt,ks=new Dt,Lt=new C,Ve=class extends wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dC++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(By(e)?xo:_o)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return nh.lookAt(e),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Me(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new It);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(rn.min,ks.min),rn.expandByPoint(Lt),Lt.addVectors(rn.max,ks.max),rn.expandByPoint(Lt)):(rn.expandByPoint(ks.min),rn.expandByPoint(ks.max))}rn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Lt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Lt.fromBufferAttribute(a,l),c&&(Cr.fromBufferAttribute(e,l),Lt.add(Cr)),r=Math.max(r,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new it(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<a;w++)l[w]=new C,u[w]=new C;let h=new C,d=new C,f=new C,m=new $,_=new $,g=new $,p=new C,y=new C;function x(w,O,W){h.fromArray(r,w*3),d.fromArray(r,O*3),f.fromArray(r,W*3),m.fromArray(o,w*2),_.fromArray(o,O*2),g.fromArray(o,W*2),d.sub(h),f.sub(h),_.sub(m),g.sub(m);let se=1/(_.x*g.y-g.x*_.y);isFinite(se)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-_.y).multiplyScalar(se),y.copy(f).multiplyScalar(_.x).addScaledVector(d,-g.x).multiplyScalar(se),l[w].add(p),l[O].add(p),l[W].add(p),u[w].add(y),u[O].add(y),u[W].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let w=0,O=M.length;w<O;++w){let W=M[w],se=W.start,U=W.count;for(let B=se,H=se+U;B<H;B+=3)x(n[B+0],n[B+1],n[B+2])}let P=new C,E=new C,R=new C,D=new C;function b(w){R.fromArray(s,w*3),D.copy(R);let O=l[w];P.copy(O),P.sub(R.multiplyScalar(R.dot(O))).normalize(),E.crossVectors(D,O);let se=E.dot(u[w])<0?-1:1;c[w*4]=P.x,c[w*4+1]=P.y,c[w*4+2]=P.z,c[w*4+3]=se}for(let w=0,O=M.length;w<O;++w){let W=M[w],se=W.start,U=W.count;for(let B=se,H=se+U;B<H;B+=3)b(n[B+0]),b(n[B+1]),b(n[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new it(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let r=new C,s=new C,o=new C,a=new C,c=new C,l=new C,u=new C,h=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[m++]=l[f++]}return new it(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Ve,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},y0=new Le,Oi=new Ei,Sa=new It,v0=new C,Rr=new C,Pr=new C,Lr=new C,ih=new C,ba=new C,Ea=new $,Aa=new $,wa=new $,M0=new C,S0=new C,b0=new C,Ta=new C,Ca=new C,St=class extends et{constructor(e=new Ve,t=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){ba.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],h=s[c];u!==0&&(ih.fromBufferAttribute(h,e),o?ba.addScaledVector(ih,u):ba.addScaledVector(ih.sub(t),u))}t.add(ba)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(s),Oi.copy(e.ray).recast(e.near),!(Sa.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Sa,v0)===null||Oi.origin.distanceToSquared(v0)>(e.far-e.near)**2))&&(y0.copy(s).invert(),Oi.copy(e.ray).applyMatrix4(y0),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,P=x;M<P;M+=3){let E=a.getX(M),R=a.getX(M+1),D=a.getX(M+2);r=Ra(this,p,e,n,l,u,h,E,R,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let y=a.getX(g),x=a.getX(g+1),M=a.getX(g+2);r=Ra(this,o,e,n,l,u,h,y,x,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,P=x;M<P;M+=3){let E=M,R=M+1,D=M+2;r=Ra(this,p,e,n,l,u,h,E,R,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let y=g,x=g+1,M=g+2;r=Ra(this,o,e,n,l,u,h,y,x,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function fC(i,e,t,n,r,s,o,a){let c;if(e.side===Kt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===ii,a),c===null)return null;Ca.copy(a),Ca.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ca);return l<t.near||l>t.far?null:{distance:l,point:Ca.clone(),object:i}}function Ra(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,Rr),i.getVertexPosition(c,Pr),i.getVertexPosition(l,Lr);let u=fC(i,e,t,n,Rr,Pr,Lr,Ta);if(u){r&&(Ea.fromBufferAttribute(r,a),Aa.fromBufferAttribute(r,c),wa.fromBufferAttribute(r,l),u.uv=Vt.getInterpolation(Ta,Rr,Pr,Lr,Ea,Aa,wa,new $)),s&&(Ea.fromBufferAttribute(s,a),Aa.fromBufferAttribute(s,c),wa.fromBufferAttribute(s,l),u.uv1=Vt.getInterpolation(Ta,Rr,Pr,Lr,Ea,Aa,wa,new $),u.uv2=u.uv1),o&&(M0.fromBufferAttribute(o,a),S0.fromBufferAttribute(o,c),b0.fromBufferAttribute(o,l),u.normal=Vt.getInterpolation(Ta,Rr,Pr,Lr,M0,S0,b0,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new C,materialIndex:0};Vt.getNormal(Rr,Pr,Lr,h.normal),u.face=h}return u}var si=class extends Ve{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(h,2));function m(_,g,p,y,x,M,P,E,R,D,b){let w=M/R,O=P/D,W=M/2,se=P/2,U=E/2,B=R+1,H=D+1,J=0,Z=0,q=new C;for(let ne=0;ne<H;ne++){let ie=ne*O-se;for(let pe=0;pe<B;pe++){let G=pe*w-W;q[_]=G*y,q[g]=ie*x,q[p]=U,l.push(q.x,q.y,q.z),q[_]=0,q[g]=0,q[p]=E>0?1:-1,u.push(q.x,q.y,q.z),h.push(pe/R),h.push(1-ne/D),J+=1}}for(let ne=0;ne<D;ne++)for(let ie=0;ie<R;ie++){let pe=d+ie+B*ne,G=d+ie+B*(ne+1),Q=d+(ie+1)+B*(ne+1),me=d+(ie+1)+B*ne;c.push(pe,G,me),c.push(G,Q,me),Z+=6}a.addGroup(f,Z,b),f+=Z,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function jr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Jt(i){let e={};for(let t=0;t<i.length;t++){let n=jr(i[t]);for(let r in n)e[r]=n[r]}return e}function pC(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Vy(i){return i.getRenderTarget()===null?i.outputColorSpace:ot.workingColorSpace}var Hy={clone:jr,merge:Jt},mC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends Ut{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mC,this.fragmentShader=gC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=pC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Qr=class extends et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=An}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wt=class extends Qr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ki*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(Ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ki*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ir=-90,Ur=1,mc=class extends et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new wt(Ir,Ur,e,t);r.layers=this.layers,this.add(r);let s=new wt(Ir,Ur,e,t);s.layers=this.layers,this.add(s);let o=new wt(Ir,Ur,e,t);o.layers=this.layers,this.add(o);let a=new wt(Ir,Ur,e,t);a.layers=this.layers,this.add(a);let c=new wt(Ir,Ur,e,t);c.layers=this.layers,this.add(c);let l=new wt(Ir,Ur,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$r)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},er=class extends ft{constructor(e,t,n,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ri,super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gc=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ks("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Mi?At:sn),this.texture=new er(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new si(5,5,5),s=new mn({name:"CubemapFromEquirect",uniforms:jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:jn});s.uniforms.tEquirect.value=t;let o=new St(r,s),a=t.minFilter;return t.minFilter===bi&&(t.minFilter=Mt),new mc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},rh=new C,_C=new C,xC=new ke,Ln=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=rh.subVectors(n,t).cross(_C.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(rh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xC.getNormalMatrix(e),r=this.coplanarPoint(rh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fi=new It,Pa=new C,tr=class{constructor(e=new Ln,t=new Ln,n=new Ln,r=new Ln,s=new Ln,o=new Ln){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],f=r[8],m=r[9],_=r[10],g=r[11],p=r[12],y=r[13],x=r[14],M=r[15];if(n[0].setComponents(c-s,d-l,g-f,M-p).normalize(),n[1].setComponents(c+s,d+l,g+f,M+p).normalize(),n[2].setComponents(c+o,d+u,g+m,M+y).normalize(),n[3].setComponents(c-o,d-u,g-m,M-y).normalize(),n[4].setComponents(c-a,d-h,g-_,M-x).normalize(),t===An)n[5].setComponents(c+a,d+h,g+_,M+x).normalize();else if(t===$r)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Pa.x=r.normal.x>0?e.max.x:e.min.x,Pa.y=r.normal.y>0?e.max.y:e.min.y,Pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Gy(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function yC(i,e){let t=e.isWebGL2,n=new WeakMap;function r(l,u){let h=l.array,d=l.usage,f=h.byteLength,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,h,d),l.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:f}}function s(l,u,h){let d=u.array,f=u._updateRange,m=u.updateRanges;if(i.bindBuffer(h,l),f.count===-1&&m.length===0&&i.bufferSubData(h,0,d),m.length!==0){for(let _=0,g=m.length;_<g;_++){let p=m[_];t?i.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);if(h===void 0)n.set(l,r(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,l,u),h.version=l.version}}return{get:o,remove:a,update:c}}var nr=class extends Ve{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=t/c,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){let y=p*d-o;for(let x=0;x<l;x++){let M=x*h-s;m.push(M,-y,0),_.push(0,0,1),g.push(x/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let x=y+l*p,M=y+l*(p+1),P=y+1+l*(p+1),E=y+1+l*p;f.push(x,M,E),f.push(M,P,E)}this.setIndex(f),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.widthSegments,e.heightSegments)}},vC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,SC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EC=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,AC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,TC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CC=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,PC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,UC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,NC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,OC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,HC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,GC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,XC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$C=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JC="gl_FragColor = linearToOutputTexel( gl_FragColor );",KC=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,jC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,QC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cR=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_R=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,MR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,SR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bR=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ER=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,TR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,PR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UR=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,NR=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,OR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,FR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,BR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$R=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ZR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,nP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_P=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,TP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,RP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$P=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,KP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:vC,alphahash_pars_fragment:MC,alphamap_fragment:SC,alphamap_pars_fragment:bC,alphatest_fragment:EC,alphatest_pars_fragment:AC,aomap_fragment:wC,aomap_pars_fragment:TC,batching_pars_vertex:CC,batching_vertex:RC,begin_vertex:PC,beginnormal_vertex:LC,bsdfs:IC,iridescence_fragment:UC,bumpmap_pars_fragment:DC,clipping_planes_fragment:NC,clipping_planes_pars_fragment:OC,clipping_planes_pars_vertex:FC,clipping_planes_vertex:BC,color_fragment:zC,color_pars_fragment:kC,color_pars_vertex:VC,color_vertex:HC,common:GC,cube_uv_reflection_fragment:WC,defaultnormal_vertex:qC,displacementmap_pars_vertex:XC,displacementmap_vertex:YC,emissivemap_fragment:$C,emissivemap_pars_fragment:ZC,colorspace_fragment:JC,colorspace_pars_fragment:KC,envmap_fragment:jC,envmap_common_pars_fragment:QC,envmap_pars_fragment:eR,envmap_pars_vertex:tR,envmap_physical_pars_fragment:fR,envmap_vertex:nR,fog_vertex:iR,fog_pars_vertex:rR,fog_fragment:sR,fog_pars_fragment:oR,gradientmap_pars_fragment:aR,lightmap_fragment:cR,lightmap_pars_fragment:lR,lights_lambert_fragment:uR,lights_lambert_pars_fragment:hR,lights_pars_begin:dR,lights_toon_fragment:pR,lights_toon_pars_fragment:mR,lights_phong_fragment:gR,lights_phong_pars_fragment:_R,lights_physical_fragment:xR,lights_physical_pars_fragment:yR,lights_fragment_begin:vR,lights_fragment_maps:MR,lights_fragment_end:SR,logdepthbuf_fragment:bR,logdepthbuf_pars_fragment:ER,logdepthbuf_pars_vertex:AR,logdepthbuf_vertex:wR,map_fragment:TR,map_pars_fragment:CR,map_particle_fragment:RR,map_particle_pars_fragment:PR,metalnessmap_fragment:LR,metalnessmap_pars_fragment:IR,morphcolor_vertex:UR,morphnormal_vertex:DR,morphtarget_pars_vertex:NR,morphtarget_vertex:OR,normal_fragment_begin:FR,normal_fragment_maps:BR,normal_pars_fragment:zR,normal_pars_vertex:kR,normal_vertex:VR,normalmap_pars_fragment:HR,clearcoat_normal_fragment_begin:GR,clearcoat_normal_fragment_maps:WR,clearcoat_pars_fragment:qR,iridescence_pars_fragment:XR,opaque_fragment:YR,packing:$R,premultiplied_alpha_fragment:ZR,project_vertex:JR,dithering_fragment:KR,dithering_pars_fragment:jR,roughnessmap_fragment:QR,roughnessmap_pars_fragment:eP,shadowmap_pars_fragment:tP,shadowmap_pars_vertex:nP,shadowmap_vertex:iP,shadowmask_pars_fragment:rP,skinbase_vertex:sP,skinning_pars_vertex:oP,skinning_vertex:aP,skinnormal_vertex:cP,specularmap_fragment:lP,specularmap_pars_fragment:uP,tonemapping_fragment:hP,tonemapping_pars_fragment:dP,transmission_fragment:fP,transmission_pars_fragment:pP,uv_pars_fragment:mP,uv_pars_vertex:gP,uv_vertex:_P,worldpos_vertex:xP,background_vert:yP,background_frag:vP,backgroundCube_vert:MP,backgroundCube_frag:SP,cube_vert:bP,cube_frag:EP,depth_vert:AP,depth_frag:wP,distanceRGBA_vert:TP,distanceRGBA_frag:CP,equirect_vert:RP,equirect_frag:PP,linedashed_vert:LP,linedashed_frag:IP,meshbasic_vert:UP,meshbasic_frag:DP,meshlambert_vert:NP,meshlambert_frag:OP,meshmatcap_vert:FP,meshmatcap_frag:BP,meshnormal_vert:zP,meshnormal_frag:kP,meshphong_vert:VP,meshphong_frag:HP,meshphysical_vert:GP,meshphysical_frag:WP,meshtoon_vert:qP,meshtoon_frag:XP,points_vert:YP,points_frag:$P,shadow_vert:ZP,shadow_frag:JP,sprite_vert:KP,sprite_frag:jP},ce={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},bn={basic:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ge(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Jt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Jt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ge(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Jt([ce.points,ce.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Jt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Jt([ce.common,ce.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Jt([ce.sprite,ce.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Jt([ce.common,ce.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Jt([ce.lights,ce.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};bn.physical={uniforms:Jt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var La={r:0,b:0,g:0};function QP(i,e,t,n,r,s,o){let a=new ge(0),c=s===!0?0:1,l,u,h=null,d=0,f=null;function m(g,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===vs)?(u===void 0&&(u=new St(new si(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:jr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=ot.getTransfer(x.colorSpace)!==ut,(h!==x||d!==x.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new St(new nr(2,2),new mn({name:"BackgroundMaterial",uniforms:jr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=ot.getTransfer(x.colorSpace)!==ut,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,p){g.getRGB(La,Vy(i)),n.buffers.color.setClear(La.r,La.g,La.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,_(a,c)},render:m}}function eL(i,e,t,n){let r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=g(null),l=c,u=!1;function h(U,B,H,J,Z){let q=!1;if(o){let ne=_(J,H,B);l!==ne&&(l=ne,f(l.object)),q=p(U,J,H,Z),q&&y(U,J,H,Z)}else{let ne=B.wireframe===!0;(l.geometry!==J.id||l.program!==H.id||l.wireframe!==ne)&&(l.geometry=J.id,l.program=H.id,l.wireframe=ne,q=!0)}Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,D(U,B,H,J),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function f(U){return n.isWebGL2?i.bindVertexArray(U):s.bindVertexArrayOES(U)}function m(U){return n.isWebGL2?i.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function _(U,B,H){let J=H.wireframe===!0,Z=a[U.id];Z===void 0&&(Z={},a[U.id]=Z);let q=Z[B.id];q===void 0&&(q={},Z[B.id]=q);let ne=q[J];return ne===void 0&&(ne=g(d()),q[J]=ne),ne}function g(U){let B=[],H=[],J=[];for(let Z=0;Z<r;Z++)B[Z]=0,H[Z]=0,J[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:H,attributeDivisors:J,object:U,attributes:{},index:null}}function p(U,B,H,J){let Z=l.attributes,q=B.attributes,ne=0,ie=H.getAttributes();for(let pe in ie)if(ie[pe].location>=0){let Q=Z[pe],me=q[pe];if(me===void 0&&(pe==="instanceMatrix"&&U.instanceMatrix&&(me=U.instanceMatrix),pe==="instanceColor"&&U.instanceColor&&(me=U.instanceColor)),Q===void 0||Q.attribute!==me||me&&Q.data!==me.data)return!0;ne++}return l.attributesNum!==ne||l.index!==J}function y(U,B,H,J){let Z={},q=B.attributes,ne=0,ie=H.getAttributes();for(let pe in ie)if(ie[pe].location>=0){let Q=q[pe];Q===void 0&&(pe==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),pe==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor));let me={};me.attribute=Q,Q&&Q.data&&(me.data=Q.data),Z[pe]=me,ne++}l.attributes=Z,l.attributesNum=ne,l.index=J}function x(){let U=l.newAttributes;for(let B=0,H=U.length;B<H;B++)U[B]=0}function M(U){P(U,0)}function P(U,B){let H=l.newAttributes,J=l.enabledAttributes,Z=l.attributeDivisors;H[U]=1,J[U]===0&&(i.enableVertexAttribArray(U),J[U]=1),Z[U]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,B),Z[U]=B)}function E(){let U=l.newAttributes,B=l.enabledAttributes;for(let H=0,J=B.length;H<J;H++)B[H]!==U[H]&&(i.disableVertexAttribArray(H),B[H]=0)}function R(U,B,H,J,Z,q,ne){ne===!0?i.vertexAttribIPointer(U,B,H,Z,q):i.vertexAttribPointer(U,B,H,J,Z,q)}function D(U,B,H,J){if(n.isWebGL2===!1&&(U.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let Z=J.attributes,q=H.getAttributes(),ne=B.defaultAttributeValues;for(let ie in q){let pe=q[ie];if(pe.location>=0){let G=Z[ie];if(G===void 0&&(ie==="instanceMatrix"&&U.instanceMatrix&&(G=U.instanceMatrix),ie==="instanceColor"&&U.instanceColor&&(G=U.instanceColor)),G!==void 0){let Q=G.normalized,me=G.itemSize,Ee=t.get(G);if(Ee===void 0)continue;let ye=Ee.buffer,Ue=Ee.type,Be=Ee.bytesPerElement,Ae=n.isWebGL2===!0&&(Ue===i.INT||Ue===i.UNSIGNED_INT||G.gpuType===bf);if(G.isInterleavedBufferAttribute){let Oe=G.data,L=Oe.stride,ae=G.offset;if(Oe.isInstancedInterleavedBuffer){for(let Y=0;Y<pe.locationSize;Y++)P(pe.location+Y,Oe.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let Y=0;Y<pe.locationSize;Y++)M(pe.location+Y);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let Y=0;Y<pe.locationSize;Y++)R(pe.location+Y,me/pe.locationSize,Ue,Q,L*Be,(ae+me/pe.locationSize*Y)*Be,Ae)}else{if(G.isInstancedBufferAttribute){for(let Oe=0;Oe<pe.locationSize;Oe++)P(pe.location+Oe,G.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Oe=0;Oe<pe.locationSize;Oe++)M(pe.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let Oe=0;Oe<pe.locationSize;Oe++)R(pe.location+Oe,me/pe.locationSize,Ue,Q,me*Be,me/pe.locationSize*Oe*Be,Ae)}}else if(ne!==void 0){let Q=ne[ie];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(pe.location,Q);break;case 3:i.vertexAttrib3fv(pe.location,Q);break;case 4:i.vertexAttrib4fv(pe.location,Q);break;default:i.vertexAttrib1fv(pe.location,Q)}}}}E()}function b(){W();for(let U in a){let B=a[U];for(let H in B){let J=B[H];for(let Z in J)m(J[Z].object),delete J[Z];delete B[H]}delete a[U]}}function w(U){if(a[U.id]===void 0)return;let B=a[U.id];for(let H in B){let J=B[H];for(let Z in J)m(J[Z].object),delete J[Z];delete B[H]}delete a[U.id]}function O(U){for(let B in a){let H=a[B];if(H[U.id]===void 0)continue;let J=H[U.id];for(let Z in J)m(J[Z].object),delete J[Z];delete H[U.id]}}function W(){se(),u=!0,l!==c&&(l=c,f(l.object))}function se(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:W,resetDefaultState:se,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:M,disableUnusedAttributes:E}}function tL(i,e,t,n){let r=n.isWebGL2,s;function o(u){s=u}function a(u,h){i.drawArrays(s,u,h),t.update(h,s,1)}function c(u,h,d){if(d===0)return;let f,m;if(r)f=i,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,u,h,d),t.update(h,s,d)}function l(u,h,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d;m++)this.render(u[m],h[m]);else{f.multiDrawArraysWEBGL(s,u,0,h,0,d);let m=0;for(let _=0;_<d;_++)m+=h[_];t.update(m,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function nL(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,M=o||e.has("OES_texture_float"),P=x&&M,E=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:P,maxSamples:E}}function iL(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Ln,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):l();else{let y=s?0:n,x=y*4,M=p.clippingState||null;c.value=M,M=u(m,d,x,f);for(let P=0;P!==x;++P)M[P]=t[P];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){let _=h!==null?h.length:0,g=null;if(_!==0){if(g=c.value,m!==!0||g===null){let p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,M=f;x!==_;++x,M+=4)o.copy(h[x]).applyMatrix4(y,a),o.normal.toArray(g,M),g[M+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function rL(i){let e=new WeakMap;function t(o,a){return a===no?o.mapping=ri:a===io&&(o.mapping=Si),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===no||a===io)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new gc(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var es=class extends Qr{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hr=4,E0=[.125,.215,.35,.446,.526,.582],Xi=20,sh=new es,A0=new ge,oh=null,ah=0,ch=0,qi=(1+Math.sqrt(5))/2,Dr=1/qi,w0=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,qi,Dr),new C(0,qi,-Dr),new C(Dr,0,qi),new C(-Dr,0,qi),new C(qi,Dr,0),new C(-qi,Dr,0)],yo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){oh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=R0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oh,ah,ch),e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ri||e.mapping===Si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:Yr,format:Qt,colorSpace:Un,depthBuffer:!1},r=T0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=T0(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sL(s)),this._blurMaterial=oL(s,e,t)}return r}_compileMaterial(e){let t=new St(this._lodPlanes[0],e);this._renderer.compile(t,sh)}_sceneToCubeUV(e,t,n,r){let a=new wt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(A0),u.toneMapping=Qn,u.autoClear=!1;let f=new Dn({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),m=new St(new si,f),_=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(A0),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;Ia(r,y*x,p>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ri||e.mapping===Si;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=R0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Ia(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,sh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=w0[(r-1)%w0.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new St(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):Xi;g>Xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xi}`);let p=[],y=0;for(let R=0;R<Xi;++R){let D=R/_,b=Math.exp(-D*D/2);p.push(b),R===0?y+=b:R<g&&(y+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;let M=this._sizeLods[r],P=3*M*(r>x-Hr?r-x+Hr:0),E=4*(this._cubeSize-M);Ia(t,P,E,3*M,2*M),c.setRenderTarget(t),c.render(h,sh)}};function sL(i){let e=[],t=[],n=[],r=i,s=i-Hr+1+E0.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>i-Hr?c=E0[o-i+Hr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,y=new Float32Array(_*m*f),x=new Float32Array(g*m*f),M=new Float32Array(p*m*f);for(let E=0;E<f;E++){let R=E%3*2/3-1,D=E>2?0:-1,b=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];y.set(b,_*m*E),x.set(d,g*m*E);let w=[E,E,E,E,E,E];M.set(w,p*m*E)}let P=new Ve;P.setAttribute("position",new it(y,_)),P.setAttribute("uv",new it(x,g)),P.setAttribute("faceIndex",new it(M,p)),e.push(P),r>Hr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function T0(i,e,t){let n=new an(i,e,t);return n.texture.mapping=vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ia(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function oL(i,e,t){let n=new Float32Array(Xi),r=new C(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function C0(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function R0(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Df(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function aL(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===no||c===io,u=c===ri||c===Si;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new yo(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{let h=a.image;if(l&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new yo(i));let d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function cL(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function lL(i,e,t,n){let r={},s=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);for(let m in d.morphAttributes){let _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}d.removeEventListener("dispose",o),delete r[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let m in d)e.update(d[m],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let m in f){let _=f[m];for(let g=0,p=_.length;g<p;g++)e.update(_[g],i.ARRAY_BUFFER)}}function l(h){let d=[],f=h.index,m=h.attributes.position,_=0;if(f!==null){let y=f.array;_=f.version;for(let x=0,M=y.length;x<M;x+=3){let P=y[x+0],E=y[x+1],R=y[x+2];d.push(P,E,E,R,R,P)}}else if(m!==void 0){let y=m.array;_=m.version;for(let x=0,M=y.length/3-1;x<M;x+=3){let P=x+0,E=x+1,R=x+2;d.push(P,E,E,R,R,P)}}else return;let g=new(By(d)?xo:_o)(d,1);g.version=_;let p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){let d=s.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function uL(i,e,t,n){let r=n.isWebGL2,s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,m){i.drawElements(s,m,a,f*c),t.update(m,s,1)}function h(f,m,_){if(_===0)return;let g,p;if(r)g=i,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,m,a,f*c,_),t.update(m,s,_)}function d(f,m,_){if(_===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<_;p++)this.render(f[p]/c,m[p]);else{g.multiDrawElementsWEBGL(s,m,0,a,f,0,_);let p=0;for(let y=0;y<_;y++)p+=m[y];t.update(p,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function hL(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function dL(i,e){return i[0]-e[0]}function fL(i,e){return Math.abs(e[1])-Math.abs(i[1])}function pL(i,e,t){let n={},r=new Float32Array(8),s=new WeakMap,o=new nt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=f!==void 0?f.length:0,_=s.get(u);if(_===void 0||_.count!==m){let U=function(){W.dispose(),s.delete(u),u.removeEventListener("dispose",U)};_!==void 0&&_.texture.dispose();let y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],R=u.morphAttributes.color||[],D=0;y===!0&&(D=1),x===!0&&(D=2),M===!0&&(D=3);let b=u.attributes.position.count*D,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let O=new Float32Array(b*w*4*m),W=new Jr(O,b,w,m);W.type=En,W.needsUpdate=!0;let se=D*4;for(let B=0;B<m;B++){let H=P[B],J=E[B],Z=R[B],q=b*w*4*B;for(let ne=0;ne<H.count;ne++){let ie=ne*se;y===!0&&(o.fromBufferAttribute(H,ne),O[q+ie+0]=o.x,O[q+ie+1]=o.y,O[q+ie+2]=o.z,O[q+ie+3]=0),x===!0&&(o.fromBufferAttribute(J,ne),O[q+ie+4]=o.x,O[q+ie+5]=o.y,O[q+ie+6]=o.z,O[q+ie+7]=0),M===!0&&(o.fromBufferAttribute(Z,ne),O[q+ie+8]=o.x,O[q+ie+9]=o.y,O[q+ie+10]=o.z,O[q+ie+11]=Z.itemSize===4?o.w:1)}}_={count:m,texture:W,size:new $(b,w)},s.set(u,_),u.addEventListener("dispose",U)}let g=0;for(let y=0;y<d.length;y++)g+=d[y];let p=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(i,"morphTargetBaseInfluence",p),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let f=d===void 0?0:d.length,m=n[u.id];if(m===void 0||m.length!==f){m=[];for(let x=0;x<f;x++)m[x]=[x,0];n[u.id]=m}for(let x=0;x<f;x++){let M=m[x];M[0]=x,M[1]=d[x]}m.sort(fL);for(let x=0;x<8;x++)x<f&&m[x][1]?(a[x][0]=m[x][0],a[x][1]=m[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(dL);let _=u.morphAttributes.position,g=u.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let M=a[x],P=M[0],E=M[1];P!==Number.MAX_SAFE_INTEGER&&E?(_&&u.getAttribute("morphTarget"+x)!==_[P]&&u.setAttribute("morphTarget"+x,_[P]),g&&u.getAttribute("morphNormal"+x)!==g[P]&&u.setAttribute("morphNormal"+x,g[P]),r[x]=E,p+=E):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),g&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}let y=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function mL(i,e,t,n){let r=new WeakMap;function s(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var vo=class extends ft{constructor(e,t,n,r,s,o,a,c,l,u){if(u=u!==void 0?u:vi,u!==vi&&u!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vi&&(n=Zn),n===void 0&&u===ji&&(n=yi),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:vt,this.minFilter=c!==void 0?c:vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Wy=new ft,qy=new vo(1,1);qy.compareFunction=If;var Xy=new Jr,Yy=new go,$y=new er,P0=[],L0=[],I0=new Float32Array(16),U0=new Float32Array(9),D0=new Float32Array(4);function Ms(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=P0[r];if(s===void 0&&(s=new Float32Array(r),P0[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fl(i,e){let t=L0[e];t===void 0&&(t=new Int32Array(e),L0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gL(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _L(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function xL(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function yL(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function vL(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Tt(t,n))return;D0.set(n),i.uniformMatrix2fv(this.addr,!1,D0),Ct(t,n)}}function ML(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Tt(t,n))return;U0.set(n),i.uniformMatrix3fv(this.addr,!1,U0),Ct(t,n)}}function SL(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Tt(t,n))return;I0.set(n),i.uniformMatrix4fv(this.addr,!1,I0),Ct(t,n)}}function bL(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function EL(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function AL(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function wL(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function TL(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function CL(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function RL(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function PL(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function LL(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s=this.type===i.SAMPLER_2D_SHADOW?qy:Wy;t.setTexture2D(e||s,r)}function IL(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Yy,r)}function UL(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||$y,r)}function DL(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Xy,r)}function NL(i){switch(i){case 5126:return gL;case 35664:return _L;case 35665:return xL;case 35666:return yL;case 35674:return vL;case 35675:return ML;case 35676:return SL;case 5124:case 35670:return bL;case 35667:case 35671:return EL;case 35668:case 35672:return AL;case 35669:case 35673:return wL;case 5125:return TL;case 36294:return CL;case 36295:return RL;case 36296:return PL;case 35678:case 36198:case 36298:case 36306:case 35682:return LL;case 35679:case 36299:case 36307:return IL;case 35680:case 36300:case 36308:case 36293:return UL;case 36289:case 36303:case 36311:case 36292:return DL}}function OL(i,e){i.uniform1fv(this.addr,e)}function FL(i,e){let t=Ms(e,this.size,2);i.uniform2fv(this.addr,t)}function BL(i,e){let t=Ms(e,this.size,3);i.uniform3fv(this.addr,t)}function zL(i,e){let t=Ms(e,this.size,4);i.uniform4fv(this.addr,t)}function kL(i,e){let t=Ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function VL(i,e){let t=Ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function HL(i,e){let t=Ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function GL(i,e){i.uniform1iv(this.addr,e)}function WL(i,e){i.uniform2iv(this.addr,e)}function qL(i,e){i.uniform3iv(this.addr,e)}function XL(i,e){i.uniform4iv(this.addr,e)}function YL(i,e){i.uniform1uiv(this.addr,e)}function $L(i,e){i.uniform2uiv(this.addr,e)}function ZL(i,e){i.uniform3uiv(this.addr,e)}function JL(i,e){i.uniform4uiv(this.addr,e)}function KL(i,e,t){let n=this.cache,r=e.length,s=fl(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Wy,s[o])}function jL(i,e,t){let n=this.cache,r=e.length,s=fl(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Yy,s[o])}function QL(i,e,t){let n=this.cache,r=e.length,s=fl(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||$y,s[o])}function eI(i,e,t){let n=this.cache,r=e.length,s=fl(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Xy,s[o])}function tI(i){switch(i){case 5126:return OL;case 35664:return FL;case 35665:return BL;case 35666:return zL;case 35674:return kL;case 35675:return VL;case 35676:return HL;case 5124:case 35670:return GL;case 35667:case 35671:return WL;case 35668:case 35672:return qL;case 35669:case 35673:return XL;case 5125:return YL;case 36294:return $L;case 36295:return ZL;case 36296:return JL;case 35678:case 36198:case 36298:case 36306:case 35682:return KL;case 35679:case 36299:case 36307:return jL;case 35680:case 36300:case 36308:case 36293:return QL;case 36289:case 36303:case 36311:case 36292:return eI}}var md=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=NL(t.type)}},gd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tI(t.type)}},_d=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},lh=/(\w+)(\])?(\[|\.)?/g;function N0(i,e){i.seq.push(e),i.map[e.id]=e}function nI(i,e,t){let n=i.name,r=n.length;for(lh.lastIndex=0;;){let s=lh.exec(n),o=lh.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){N0(t,l===void 0?new md(a,i,e):new gd(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new _d(a),N0(t,h)),t=h}}}var Xr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);nI(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function O0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var iI=37297,rI=0;function sI(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function oI(i){let e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(i),n;switch(e===t?n="":e===ho&&t===uo?n="LinearDisplayP3ToLinearSRGB":e===uo&&t===ho&&(n="LinearSRGBToLinearDisplayP3"),i){case Un:case Go:return[n,"LinearTransferOETF"];case At:case dl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function F0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+sI(i.getShaderSource(e),o)}else return r}function aI(i,e){let t=oI(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function cI(i,e){let t;switch(e){case uy:t="Linear";break;case hy:t="Reinhard";break;case dy:t="OptimizedCineon";break;case fy:t="ACESFilmic";break;case my:t="AgX";break;case py:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lI(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gr).join(`
`)}function uI(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Gr).join(`
`)}function hI(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dI(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Gr(i){return i!==""}function B0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function z0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fI=/^[ \t]*#include +<([\w\d./]+)>/gm;function xd(i){return i.replace(fI,mI)}var pI=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mI(i,e){let t=We[e];if(t===void 0){let n=pI.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xd(t)}var gI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function k0(i){return i.replace(gI,_I)}function _I(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function V0(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xI(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bx?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pn&&(e="SHADOWMAP_TYPE_VSM"),e}function yI(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ri:case Si:e="ENVMAP_TYPE_CUBE";break;case vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vI(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Si:e="ENVMAP_MODE_REFRACTION";break}return e}function MI(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ho:e="ENVMAP_BLENDING_MULTIPLY";break;case cy:e="ENVMAP_BLENDING_MIX";break;case ly:e="ENVMAP_BLENDING_ADD";break}return e}function SI(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function bI(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=xI(t),l=yI(t),u=vI(t),h=MI(t),d=SI(t),f=t.isWebGL2?"":lI(t),m=uI(t),_=hI(s),g=r.createProgram(),p,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Gr).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Gr).join(`
`),y.length>0&&(y+=`
`)):(p=[V0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),y=[f,V0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?We.tonemapping_pars_fragment:"",t.toneMapping!==Qn?cI("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,aI("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),o=xd(o),o=B0(o,t),o=z0(o,t),a=xd(a),a=B0(a,t),a=z0(a,t),o=k0(o),a=k0(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===id?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=x+p+o,P=x+y+a,E=O0(r,r.VERTEX_SHADER,M),R=O0(r,r.FRAGMENT_SHADER,P);r.attachShader(g,E),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function D(W){if(i.debug.checkShaderErrors){let se=r.getProgramInfoLog(g).trim(),U=r.getShaderInfoLog(E).trim(),B=r.getShaderInfoLog(R).trim(),H=!0,J=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,E,R);else{let Z=F0(r,E,"vertex"),q=F0(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+se+`
`+Z+`
`+q)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(U===""||B==="")&&(J=!1);J&&(W.diagnostics={runnable:H,programLog:se,vertexShader:{log:U,prefix:p},fragmentShader:{log:B,prefix:y}})}r.deleteShader(E),r.deleteShader(R),b=new Xr(r,g),w=dI(r,g)}let b;this.getUniforms=function(){return b===void 0&&D(this),b};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(g,iI)),O},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rI++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=R,this}var EI=0,yd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new vd(e),t.set(e,n)),n}},vd=class{constructor(e){this.id=EI++,this.code=e,this.usedTimes=0}};function AI(i,e,t,n,r,s,o){let a=new Kr,c=new yd,l=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures,f=r.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function g(b,w,O,W,se){let U=W.fog,B=se.geometry,H=b.isMeshStandardMaterial?W.environment:null,J=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),Z=J&&J.mapping===vs?J.image.height:null,q=m[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let ne=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ie=ne!==void 0?ne.length:0,pe=0;B.morphAttributes.position!==void 0&&(pe=1),B.morphAttributes.normal!==void 0&&(pe=2),B.morphAttributes.color!==void 0&&(pe=3);let G,Q,me,Ee;if(q){let qt=bn[q];G=qt.vertexShader,Q=qt.fragmentShader}else G=b.vertexShader,Q=b.fragmentShader,c.update(b),me=c.getVertexShaderID(b),Ee=c.getFragmentShaderID(b);let ye=i.getRenderTarget(),Ue=se.isInstancedMesh===!0,Be=se.isBatchedMesh===!0,Ae=!!b.map,Oe=!!b.matcap,L=!!J,ae=!!b.aoMap,Y=!!b.lightMap,oe=!!b.bumpMap,X=!!b.normalMap,Te=!!b.displacementMap,_e=!!b.emissiveMap,A=!!b.metalnessMap,S=!!b.roughnessMap,F=b.anisotropy>0,re=b.clearcoat>0,ee=b.iridescence>0,j=b.sheen>0,be=b.transmission>0,he=F&&!!b.anisotropyMap,ve=re&&!!b.clearcoatMap,Re=re&&!!b.clearcoatNormalMap,He=re&&!!b.clearcoatRoughnessMap,te=ee&&!!b.iridescenceMap,tt=ee&&!!b.iridescenceThicknessMap,Je=j&&!!b.sheenColorMap,Fe=j&&!!b.sheenRoughnessMap,Ce=!!b.specularMap,Se=!!b.specularColorMap,Xe=!!b.specularIntensityMap,rt=be&&!!b.transmissionMap,pt=be&&!!b.thicknessMap,$e=!!b.gradientMap,le=!!b.alphaMap,I=b.alphaTest>0,de=!!b.alphaHash,fe=!!b.extensions,De=!!B.attributes.uv1,Pe=!!B.attributes.uv2,at=!!B.attributes.uv3,ct=Qn;return b.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(ct=i.toneMapping),{isWebGL2:u,shaderID:q,shaderType:b.type,shaderName:b.name,vertexShader:G,fragmentShader:Q,defines:b.defines,customVertexShaderID:me,customFragmentShaderID:Ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Be,instancing:Ue,instancingColor:Ue&&se.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Un,map:Ae,matcap:Oe,envMap:L,envMapMode:L&&J.mapping,envMapCubeUVHeight:Z,aoMap:ae,lightMap:Y,bumpMap:oe,normalMap:X,displacementMap:d&&Te,emissiveMap:_e,normalMapObjectSpace:X&&b.normalMapType===Py,normalMapTangentSpace:X&&b.normalMapType===Ci,metalnessMap:A,roughnessMap:S,anisotropy:F,anisotropyMap:he,clearcoat:re,clearcoatMap:ve,clearcoatNormalMap:Re,clearcoatRoughnessMap:He,iridescence:ee,iridescenceMap:te,iridescenceThicknessMap:tt,sheen:j,sheenColorMap:Je,sheenRoughnessMap:Fe,specularMap:Ce,specularColorMap:Se,specularIntensityMap:Xe,transmission:be,transmissionMap:rt,thicknessMap:pt,gradientMap:$e,opaque:b.transparent===!1&&b.blending===Ji,alphaMap:le,alphaTest:I,alphaHash:de,combine:b.combine,mapUv:Ae&&_(b.map.channel),aoMapUv:ae&&_(b.aoMap.channel),lightMapUv:Y&&_(b.lightMap.channel),bumpMapUv:oe&&_(b.bumpMap.channel),normalMapUv:X&&_(b.normalMap.channel),displacementMapUv:Te&&_(b.displacementMap.channel),emissiveMapUv:_e&&_(b.emissiveMap.channel),metalnessMapUv:A&&_(b.metalnessMap.channel),roughnessMapUv:S&&_(b.roughnessMap.channel),anisotropyMapUv:he&&_(b.anisotropyMap.channel),clearcoatMapUv:ve&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Re&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&_(b.sheenRoughnessMap.channel),specularMapUv:Ce&&_(b.specularMap.channel),specularColorMapUv:Se&&_(b.specularColorMap.channel),specularIntensityMapUv:Xe&&_(b.specularIntensityMap.channel),transmissionMapUv:rt&&_(b.transmissionMap.channel),thicknessMapUv:pt&&_(b.thicknessMap.channel),alphaMapUv:le&&_(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(X||F),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Pe,vertexUv3s:at,pointsUvs:se.isPoints===!0&&!!B.attributes.uv&&(Ae||le),fog:!!U,useFog:b.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:se.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:pe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ae&&b.map.isVideoTexture===!0&&ot.getTransfer(b.map.colorSpace)===ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===In,flipSided:b.side===Kt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:fe&&b.extensions.derivatives===!0,extensionFragDepth:fe&&b.extensions.fragDepth===!0,extensionDrawBuffers:fe&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let O in b.defines)w.push(O),w.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(y(w,b),x(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function y(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function x(b,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function M(b){let w=m[b.type],O;if(w){let W=bn[w];O=Hy.clone(W.uniforms)}else O=b.uniforms;return O}function P(b,w){let O;for(let W=0,se=l.length;W<se;W++){let U=l[W];if(U.cacheKey===w){O=U,++O.usedTimes;break}}return O===void 0&&(O=new bI(i,w,b,s),l.push(O)),O}function E(b){if(--b.usedTimes===0){let w=l.indexOf(b);l[w]=l[l.length-1],l.pop(),b.destroy()}}function R(b){c.remove(b)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:P,releaseProgram:E,releaseShaderCache:R,programs:l,dispose:D}}function wI(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function TI(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function H0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function G0(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,d,f,m,_,g){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function a(h,d,f,m,_,g){let p=o(h,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(h,d,f,m,_,g){let p=o(h,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||TI),n.length>1&&n.sort(d||H0),r.length>1&&r.sort(d||H0)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function CI(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new G0,i.set(n,[o])):r>=s.length?(o=new G0,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function RI(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ge};break;case"SpotLight":t={position:new C,direction:new C,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function PI(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var LI=0;function II(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function UI(i,e){let t=new RI,n=PI(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new C);let s=new C,o=new Le,a=new Le;function c(u,h){let d=0,f=0,m=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let _=0,g=0,p=0,y=0,x=0,M=0,P=0,E=0,R=0,D=0,b=0;u.sort(II);let w=h===!0?Math.PI:1;for(let W=0,se=u.length;W<se;W++){let U=u[W],B=U.color,H=U.intensity,J=U.distance,Z=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=B.r*H*w,f+=B.g*H*w,m+=B.b*H*w;else if(U.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(U.sh.coefficients[q],H);b++}else if(U.isDirectionalLight){let q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity*w),U.castShadow){let ne=U.shadow,ie=n.get(U);ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,r.directionalShadow[_]=ie,r.directionalShadowMap[_]=Z,r.directionalShadowMatrix[_]=U.shadow.matrix,M++}r.directional[_]=q,_++}else if(U.isSpotLight){let q=t.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(B).multiplyScalar(H*w),q.distance=J,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,r.spot[p]=q;let ne=U.shadow;if(U.map&&(r.spotLightMap[R]=U.map,R++,ne.updateMatrices(U),U.castShadow&&D++),r.spotLightMatrix[p]=ne.matrix,U.castShadow){let ie=n.get(U);ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,r.spotShadow[p]=ie,r.spotShadowMap[p]=Z,E++}p++}else if(U.isRectAreaLight){let q=t.get(U);q.color.copy(B).multiplyScalar(H),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),r.rectArea[y]=q,y++}else if(U.isPointLight){let q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity*w),q.distance=U.distance,q.decay=U.decay,U.castShadow){let ne=U.shadow,ie=n.get(U);ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,ie.shadowCameraNear=ne.camera.near,ie.shadowCameraFar=ne.camera.far,r.pointShadow[g]=ie,r.pointShadowMap[g]=Z,r.pointShadowMatrix[g]=U.shadow.matrix,P++}r.point[g]=q,g++}else if(U.isHemisphereLight){let q=t.get(U);q.skyColor.copy(U.color).multiplyScalar(H*w),q.groundColor.copy(U.groundColor).multiplyScalar(H*w),r.hemi[x]=q,x++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=m;let O=r.hash;(O.directionalLength!==_||O.pointLength!==g||O.spotLength!==p||O.rectAreaLength!==y||O.hemiLength!==x||O.numDirectionalShadows!==M||O.numPointShadows!==P||O.numSpotShadows!==E||O.numSpotMaps!==R||O.numLightProbes!==b)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=y,r.point.length=g,r.hemi.length=x,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=E+R-D,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=b,O.directionalLength=_,O.pointLength=g,O.spotLength=p,O.rectAreaLength=y,O.hemiLength=x,O.numDirectionalShadows=M,O.numPointShadows=P,O.numSpotShadows=E,O.numSpotMaps=R,O.numLightProbes=b,r.version=LI++)}function l(u,h){let d=0,f=0,m=0,_=0,g=0,p=h.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){let M=u[y];if(M.isDirectionalLight){let P=r.directional[d];P.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(p),d++}else if(M.isSpotLight){let P=r.spot[m];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(p),m++}else if(M.isRectAreaLight){let P=r.rectArea[_];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),P.halfWidth.set(M.width*.5,0,0),P.halfHeight.set(0,M.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let P=r.point[f];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let P=r.hemi[g];P.direction.setFromMatrixPosition(M.matrixWorld),P.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:r}}function W0(i,e){let t=new UI(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function DI(i,e){let t=new WeakMap;function n(s,o=0){let a=t.get(s),c;return a===void 0?(c=new W0(i,e),t.set(s,[c])):o>=a.length?(c=new W0(i,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:n,dispose:r}}var Mo=class extends Ut{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},So=class extends Ut{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},NI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function FI(i,e,t){let n=new tr,r=new $,s=new $,o=new nt,a=new Mo({depthPacking:Ry}),c=new So,l={},u=t.maxTextureSize,h={[ii]:Kt,[Kt]:ii,[In]:In},d=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:NI,fragmentShader:OI}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ve;m.setAttribute("position",new it(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new St(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mf;let p=this.type;this.render=function(E,R,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let b=i.getRenderTarget(),w=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),W=i.state;W.setBlending(jn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let se=p!==Pn&&this.type===Pn,U=p===Pn&&this.type!==Pn;for(let B=0,H=E.length;B<H;B++){let J=E[B],Z=J.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);let q=Z.getFrameExtents();if(r.multiply(q),s.copy(Z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,Z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,Z.mapSize.y=s.y)),Z.map===null||se===!0||U===!0){let ie=this.type!==Pn?{minFilter:vt,magFilter:vt}:{};Z.map!==null&&Z.map.dispose(),Z.map=new an(r.x,r.y,ie),Z.map.texture.name=J.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let ne=Z.getViewportCount();for(let ie=0;ie<ne;ie++){let pe=Z.getViewport(ie);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),W.viewport(o),Z.updateMatrices(J,ie),n=Z.getFrustum(),M(R,D,Z.camera,J,this.type)}Z.isPointLightShadow!==!0&&this.type===Pn&&y(Z,D),Z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(b,w,O)};function y(E,R){let D=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new an(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,D,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,D,f,_,null)}function x(E,R,D,b){let w=null,O=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)w=O;else if(w=D.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let W=w.uuid,se=R.uuid,U=l[W];U===void 0&&(U={},l[W]=U);let B=U[se];B===void 0&&(B=w.clone(),U[se]=B,R.addEventListener("dispose",P)),w=B}if(w.visible=R.visible,w.wireframe=R.wireframe,b===Pn?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:h[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let W=i.properties.get(w);W.light=D}return w}function M(E,R,D,b,w){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Pn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);let se=e.update(E),U=E.material;if(Array.isArray(U)){let B=se.groups;for(let H=0,J=B.length;H<J;H++){let Z=B[H],q=U[Z.materialIndex];if(q&&q.visible){let ne=x(E,q,b,w);E.onBeforeShadow(i,E,R,D,se,ne,Z),i.renderBufferDirect(D,null,se,ne,E,Z),E.onAfterShadow(i,E,R,D,se,ne,Z)}}}else if(U.visible){let B=x(E,U,b,w);E.onBeforeShadow(i,E,R,D,se,B,null),i.renderBufferDirect(D,null,se,B,E,null),E.onAfterShadow(i,E,R,D,se,B,null)}}let W=E.children;for(let se=0,U=W.length;se<U;se++)M(W[se],R,D,b,w)}function P(E){E.target.removeEventListener("dispose",P);for(let D in l){let b=l[D],w=E.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function BI(i,e,t){let n=t.isWebGL2;function r(){let I=!1,de=new nt,fe=null,De=new nt(0,0,0,0);return{setMask:function(Pe){fe!==Pe&&!I&&(i.colorMask(Pe,Pe,Pe,Pe),fe=Pe)},setLocked:function(Pe){I=Pe},setClear:function(Pe,at,ct,Rt,qt){qt===!0&&(Pe*=Rt,at*=Rt,ct*=Rt),de.set(Pe,at,ct,Rt),De.equals(de)===!1&&(i.clearColor(Pe,at,ct,Rt),De.copy(de))},reset:function(){I=!1,fe=null,De.set(-1,0,0,0)}}}function s(){let I=!1,de=null,fe=null,De=null;return{setTest:function(Pe){Pe?Be(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(Pe){de!==Pe&&!I&&(i.depthMask(Pe),de=Pe)},setFunc:function(Pe){if(fe!==Pe){switch(Pe){case ty:i.depthFunc(i.NEVER);break;case ny:i.depthFunc(i.ALWAYS);break;case iy:i.depthFunc(i.LESS);break;case to:i.depthFunc(i.LEQUAL);break;case ry:i.depthFunc(i.EQUAL);break;case sy:i.depthFunc(i.GEQUAL);break;case oy:i.depthFunc(i.GREATER);break;case ay:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=Pe}},setLocked:function(Pe){I=Pe},setClear:function(Pe){De!==Pe&&(i.clearDepth(Pe),De=Pe)},reset:function(){I=!1,de=null,fe=null,De=null}}}function o(){let I=!1,de=null,fe=null,De=null,Pe=null,at=null,ct=null,Rt=null,qt=null;return{setTest:function(lt){I||(lt?Be(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(lt){de!==lt&&!I&&(i.stencilMask(lt),de=lt)},setFunc:function(lt,Xt,Cn){(fe!==lt||De!==Xt||Pe!==Cn)&&(i.stencilFunc(lt,Xt,Cn),fe=lt,De=Xt,Pe=Cn)},setOp:function(lt,Xt,Cn){(at!==lt||ct!==Xt||Rt!==Cn)&&(i.stencilOp(lt,Xt,Cn),at=lt,ct=Xt,Rt=Cn)},setLocked:function(lt){I=lt},setClear:function(lt){qt!==lt&&(i.clearStencil(lt),qt=lt)},reset:function(){I=!1,de=null,fe=null,De=null,Pe=null,at=null,ct=null,Rt=null,qt=null}}}let a=new r,c=new s,l=new o,u=new WeakMap,h=new WeakMap,d={},f={},m=new WeakMap,_=[],g=null,p=!1,y=null,x=null,M=null,P=null,E=null,R=null,D=null,b=new ge(0,0,0),w=0,O=!1,W=null,se=null,U=null,B=null,H=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,q=0,ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ne)[1]),Z=q>=1):ne.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),Z=q>=2);let ie=null,pe={},G=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),me=new nt().fromArray(G),Ee=new nt().fromArray(Q);function ye(I,de,fe,De){let Pe=new Uint8Array(4),at=i.createTexture();i.bindTexture(I,at),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ct=0;ct<fe;ct++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(de,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(de+ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return at}let Ue={};Ue[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),Ue[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ue[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ue[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Be(i.DEPTH_TEST),c.setFunc(to),_e(!1),A(Eh),Be(i.CULL_FACE),X(jn);function Be(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function Ae(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Oe(I,de){return f[I]!==de?(i.bindFramebuffer(I,de),f[I]=de,n&&(I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=de),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=de)),!0):!1}function L(I,de){let fe=_,De=!1;if(I)if(fe=m.get(de),fe===void 0&&(fe=[],m.set(de,fe)),I.isWebGLMultipleRenderTargets){let Pe=I.texture;if(fe.length!==Pe.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let at=0,ct=Pe.length;at<ct;at++)fe[at]=i.COLOR_ATTACHMENT0+at;fe.length=Pe.length,De=!0}}else fe[0]!==i.COLOR_ATTACHMENT0&&(fe[0]=i.COLOR_ATTACHMENT0,De=!0);else fe[0]!==i.BACK&&(fe[0]=i.BACK,De=!0);De&&(t.isWebGL2?i.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function ae(I){return g!==I?(i.useProgram(I),g=I,!0):!1}let Y={[_i]:i.FUNC_ADD,[kx]:i.FUNC_SUBTRACT,[Vx]:i.FUNC_REVERSE_SUBTRACT};if(n)Y[Ch]=i.MIN,Y[Rh]=i.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(Y[Ch]=I.MIN_EXT,Y[Rh]=I.MAX_EXT)}let oe={[Hx]:i.ZERO,[Gx]:i.ONE,[Wx]:i.SRC_COLOR,[lc]:i.SRC_ALPHA,[Jx]:i.SRC_ALPHA_SATURATE,[$x]:i.DST_COLOR,[Xx]:i.DST_ALPHA,[qx]:i.ONE_MINUS_SRC_COLOR,[uc]:i.ONE_MINUS_SRC_ALPHA,[Zx]:i.ONE_MINUS_DST_COLOR,[Yx]:i.ONE_MINUS_DST_ALPHA,[Kx]:i.CONSTANT_COLOR,[jx]:i.ONE_MINUS_CONSTANT_COLOR,[Qx]:i.CONSTANT_ALPHA,[ey]:i.ONE_MINUS_CONSTANT_ALPHA};function X(I,de,fe,De,Pe,at,ct,Rt,qt,lt){if(I===jn){p===!0&&(Ae(i.BLEND),p=!1);return}if(p===!1&&(Be(i.BLEND),p=!0),I!==zx){if(I!==y||lt!==O){if((x!==_i||E!==_i)&&(i.blendEquation(i.FUNC_ADD),x=_i,E=_i),lt)switch(I){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ah:i.blendFunc(i.ONE,i.ONE);break;case wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Th:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ah:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Th:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,P=null,R=null,D=null,b.set(0,0,0),w=0,y=I,O=lt}return}Pe=Pe||de,at=at||fe,ct=ct||De,(de!==x||Pe!==E)&&(i.blendEquationSeparate(Y[de],Y[Pe]),x=de,E=Pe),(fe!==M||De!==P||at!==R||ct!==D)&&(i.blendFuncSeparate(oe[fe],oe[De],oe[at],oe[ct]),M=fe,P=De,R=at,D=ct),(Rt.equals(b)===!1||qt!==w)&&(i.blendColor(Rt.r,Rt.g,Rt.b,qt),b.copy(Rt),w=qt),y=I,O=!1}function Te(I,de){I.side===In?Ae(i.CULL_FACE):Be(i.CULL_FACE);let fe=I.side===Kt;de&&(fe=!fe),_e(fe),I.blending===Ji&&I.transparent===!1?X(jn):X(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);let De=I.stencilWrite;l.setTest(De),De&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),F(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Be(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function _e(I){W!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),W=I)}function A(I){I!==Ox?(Be(i.CULL_FACE),I!==se&&(I===Eh?i.cullFace(i.BACK):I===Fx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),se=I}function S(I){I!==U&&(Z&&i.lineWidth(I),U=I)}function F(I,de,fe){I?(Be(i.POLYGON_OFFSET_FILL),(B!==de||H!==fe)&&(i.polygonOffset(de,fe),B=de,H=fe)):Ae(i.POLYGON_OFFSET_FILL)}function re(I){I?Be(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function ee(I){I===void 0&&(I=i.TEXTURE0+J-1),ie!==I&&(i.activeTexture(I),ie=I)}function j(I,de,fe){fe===void 0&&(ie===null?fe=i.TEXTURE0+J-1:fe=ie);let De=pe[fe];De===void 0&&(De={type:void 0,texture:void 0},pe[fe]=De),(De.type!==I||De.texture!==de)&&(ie!==fe&&(i.activeTexture(fe),ie=fe),i.bindTexture(I,de||Ue[I]),De.type=I,De.texture=de)}function be(){let I=pe[ie];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function he(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function He(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Je(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xe(I){me.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),me.copy(I))}function rt(I){Ee.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Ee.copy(I))}function pt(I,de){let fe=h.get(de);fe===void 0&&(fe=new WeakMap,h.set(de,fe));let De=fe.get(I);De===void 0&&(De=i.getUniformBlockIndex(de,I.name),fe.set(I,De))}function $e(I,de){let De=h.get(de).get(I);u.get(de)!==De&&(i.uniformBlockBinding(de,De,I.__bindingPointIndex),u.set(de,De))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ie=null,pe={},f={},m=new WeakMap,_=[],g=null,p=!1,y=null,x=null,M=null,P=null,E=null,R=null,D=null,b=new ge(0,0,0),w=0,O=!1,W=null,se=null,U=null,B=null,H=null,me.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Be,disable:Ae,bindFramebuffer:Oe,drawBuffers:L,useProgram:ae,setBlending:X,setMaterial:Te,setFlipSided:_e,setCullFace:A,setLineWidth:S,setPolygonOffset:F,setScissorTest:re,activeTexture:ee,bindTexture:j,unbindTexture:be,compressedTexImage2D:he,compressedTexImage3D:ve,texImage2D:Ce,texImage3D:Se,updateUBOMapping:pt,uniformBlockBinding:$e,texStorage2D:Je,texStorage3D:Fe,texSubImage2D:Re,texSubImage3D:He,compressedTexSubImage2D:te,compressedTexSubImage3D:tt,scissor:Xe,viewport:rt,reset:le}}function zI(i,e,t,n,r,s,o){let a=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,S){return f?new OffscreenCanvas(A,S):po("canvas")}function _(A,S,F,re){let ee=1;if((A.width>re||A.height>re)&&(ee=re/Math.max(A.width,A.height)),ee<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let j=S?fc:Math.floor,be=j(ee*A.width),he=j(ee*A.height);h===void 0&&(h=m(be,he));let ve=F?m(be,he):h;return ve.width=be,ve.height=he,ve.getContext("2d").drawImage(A,0,0,be,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+be+"x"+he+")."),ve}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function g(A){return rd(A.width)&&rd(A.height)}function p(A){return a?!1:A.wrapS!==Ht||A.wrapT!==Ht||A.minFilter!==vt&&A.minFilter!==Mt}function y(A,S){return A.generateMipmaps&&S&&A.minFilter!==vt&&A.minFilter!==Mt}function x(A){i.generateMipmap(A)}function M(A,S,F,re,ee=!1){if(a===!1)return S;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=S;if(S===i.RED&&(F===i.FLOAT&&(j=i.R32F),F===i.HALF_FLOAT&&(j=i.R16F),F===i.UNSIGNED_BYTE&&(j=i.R8)),S===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.R8UI),F===i.UNSIGNED_SHORT&&(j=i.R16UI),F===i.UNSIGNED_INT&&(j=i.R32UI),F===i.BYTE&&(j=i.R8I),F===i.SHORT&&(j=i.R16I),F===i.INT&&(j=i.R32I)),S===i.RG&&(F===i.FLOAT&&(j=i.RG32F),F===i.HALF_FLOAT&&(j=i.RG16F),F===i.UNSIGNED_BYTE&&(j=i.RG8)),S===i.RGBA){let be=ee?lo:ot.getTransfer(re);F===i.FLOAT&&(j=i.RGBA32F),F===i.HALF_FLOAT&&(j=i.RGBA16F),F===i.UNSIGNED_BYTE&&(j=be===ut?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function P(A,S,F){return y(A,F)===!0||A.isFramebufferTexture&&A.minFilter!==vt&&A.minFilter!==Mt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function E(A){return A===vt||A===hc||A===Zs?i.NEAREST:i.LINEAR}function R(A){let S=A.target;S.removeEventListener("dispose",R),b(S),S.isVideoTexture&&u.delete(S)}function D(A){let S=A.target;S.removeEventListener("dispose",D),O(S)}function b(A){let S=n.get(A);if(S.__webglInit===void 0)return;let F=A.source,re=d.get(F);if(re){let ee=re[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(A),Object.keys(re).length===0&&d.delete(F)}n.remove(A)}function w(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let F=A.source,re=d.get(F);delete re[S.__cacheKey],o.memory.textures--}function O(A){let S=A.texture,F=n.get(A),re=n.get(S);if(re.__webglTexture!==void 0&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(F.__webglFramebuffer[ee]))for(let j=0;j<F.__webglFramebuffer[ee].length;j++)i.deleteFramebuffer(F.__webglFramebuffer[ee][j]);else i.deleteFramebuffer(F.__webglFramebuffer[ee]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[ee])}else{if(Array.isArray(F.__webglFramebuffer))for(let ee=0;ee<F.__webglFramebuffer.length;ee++)i.deleteFramebuffer(F.__webglFramebuffer[ee]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ee=0;ee<F.__webglColorRenderbuffer.length;ee++)F.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[ee]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ee=0,j=S.length;ee<j;ee++){let be=n.get(S[ee]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(S[ee])}n.remove(S),n.remove(A)}let W=0;function se(){W=0}function U(){let A=W;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),W+=1,A}function B(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function H(A,S){let F=n.get(A);if(A.isVideoTexture&&Te(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){let re=A.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(F,A,S);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+S)}function J(A,S){let F=n.get(A);if(A.version>0&&F.__version!==A.version){me(F,A,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+S)}function Z(A,S){let F=n.get(A);if(A.version>0&&F.__version!==A.version){me(F,A,S);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+S)}function q(A,S){let F=n.get(A);if(A.version>0&&F.__version!==A.version){Ee(F,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+S)}let ne={[ro]:i.REPEAT,[Ht]:i.CLAMP_TO_EDGE,[so]:i.MIRRORED_REPEAT},ie={[vt]:i.NEAREST,[hc]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[Mt]:i.LINEAR,[Sf]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},pe={[Ly]:i.NEVER,[Fy]:i.ALWAYS,[Iy]:i.LESS,[If]:i.LEQUAL,[Uy]:i.EQUAL,[Oy]:i.GEQUAL,[Dy]:i.GREATER,[Ny]:i.NOTEQUAL};function G(A,S,F){if(F?(i.texParameteri(A,i.TEXTURE_WRAP_S,ne[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ne[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ne[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ie[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ie[S.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==Ht||S.wrapT!==Ht)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,E(S.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,E(S.minFilter)),S.minFilter!==vt&&S.minFilter!==Mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let re=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===vt||S.minFilter!==Zs&&S.minFilter!==bi||S.type===En&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Yr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(A,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Q(A,S){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));let re=S.source,ee=d.get(re);ee===void 0&&(ee={},d.set(re,ee));let j=B(S);if(j!==A.__cacheKey){ee[j]===void 0&&(ee[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ee[j].usedTimes++;let be=ee[A.__cacheKey];be!==void 0&&(ee[A.__cacheKey].usedTimes--,be.usedTimes===0&&w(S)),A.__cacheKey=j,A.__webglTexture=ee[j].texture}return F}function me(A,S,F){let re=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=i.TEXTURE_3D);let ee=Q(A,S),j=S.source;t.bindTexture(re,A.__webglTexture,i.TEXTURE0+F);let be=n.get(j);if(j.version!==be.__version||ee===!0){t.activeTexture(i.TEXTURE0+F);let he=ot.getPrimaries(ot.workingColorSpace),ve=S.colorSpace===sn?null:ot.getPrimaries(S.colorSpace),Re=S.colorSpace===sn||he===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let He=p(S)&&g(S.image)===!1,te=_(S.image,He,!1,r.maxTextureSize);te=_e(S,te);let tt=g(te)||a,Je=s.convert(S.format,S.colorSpace),Fe=s.convert(S.type),Ce=M(S.internalFormat,Je,Fe,S.colorSpace,S.isVideoTexture);G(re,S,tt);let Se,Xe=S.mipmaps,rt=a&&S.isVideoTexture!==!0&&Ce!==Rf,pt=be.__version===void 0||ee===!0,$e=P(S,te,tt);if(S.isDepthTexture)Ce=i.DEPTH_COMPONENT,a?S.type===En?Ce=i.DEPTH_COMPONENT32F:S.type===Zn?Ce=i.DEPTH_COMPONENT24:S.type===yi?Ce=i.DEPTH24_STENCIL8:Ce=i.DEPTH_COMPONENT16:S.type===En&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===vi&&Ce===i.DEPTH_COMPONENT&&S.type!==ul&&S.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Zn,Fe=s.convert(S.type)),S.format===ji&&Ce===i.DEPTH_COMPONENT&&(Ce=i.DEPTH_STENCIL,S.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=yi,Fe=s.convert(S.type))),pt&&(rt?t.texStorage2D(i.TEXTURE_2D,1,Ce,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Ce,te.width,te.height,0,Je,Fe,null));else if(S.isDataTexture)if(Xe.length>0&&tt){rt&&pt&&t.texStorage2D(i.TEXTURE_2D,$e,Ce,Xe[0].width,Xe[0].height);for(let le=0,I=Xe.length;le<I;le++)Se=Xe[le],rt?t.texSubImage2D(i.TEXTURE_2D,le,0,0,Se.width,Se.height,Je,Fe,Se.data):t.texImage2D(i.TEXTURE_2D,le,Ce,Se.width,Se.height,0,Je,Fe,Se.data);S.generateMipmaps=!1}else rt?(pt&&t.texStorage2D(i.TEXTURE_2D,$e,Ce,te.width,te.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,Je,Fe,te.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,te.width,te.height,0,Je,Fe,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){rt&&pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$e,Ce,Xe[0].width,Xe[0].height,te.depth);for(let le=0,I=Xe.length;le<I;le++)Se=Xe[le],S.format!==Qt?Je!==null?rt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Se.width,Se.height,te.depth,Je,Se.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,Ce,Se.width,Se.height,te.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Se.width,Se.height,te.depth,Je,Fe,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,Ce,Se.width,Se.height,te.depth,0,Je,Fe,Se.data)}else{rt&&pt&&t.texStorage2D(i.TEXTURE_2D,$e,Ce,Xe[0].width,Xe[0].height);for(let le=0,I=Xe.length;le<I;le++)Se=Xe[le],S.format!==Qt?Je!==null?rt?t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,Se.width,Se.height,Je,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,le,Ce,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage2D(i.TEXTURE_2D,le,0,0,Se.width,Se.height,Je,Fe,Se.data):t.texImage2D(i.TEXTURE_2D,le,Ce,Se.width,Se.height,0,Je,Fe,Se.data)}else if(S.isDataArrayTexture)rt?(pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$e,Ce,te.width,te.height,te.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Je,Fe,te.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,te.width,te.height,te.depth,0,Je,Fe,te.data);else if(S.isData3DTexture)rt?(pt&&t.texStorage3D(i.TEXTURE_3D,$e,Ce,te.width,te.height,te.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Je,Fe,te.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,te.width,te.height,te.depth,0,Je,Fe,te.data);else if(S.isFramebufferTexture){if(pt)if(rt)t.texStorage2D(i.TEXTURE_2D,$e,Ce,te.width,te.height);else{let le=te.width,I=te.height;for(let de=0;de<$e;de++)t.texImage2D(i.TEXTURE_2D,de,Ce,le,I,0,Je,Fe,null),le>>=1,I>>=1}}else if(Xe.length>0&&tt){rt&&pt&&t.texStorage2D(i.TEXTURE_2D,$e,Ce,Xe[0].width,Xe[0].height);for(let le=0,I=Xe.length;le<I;le++)Se=Xe[le],rt?t.texSubImage2D(i.TEXTURE_2D,le,0,0,Je,Fe,Se):t.texImage2D(i.TEXTURE_2D,le,Ce,Je,Fe,Se);S.generateMipmaps=!1}else rt?(pt&&t.texStorage2D(i.TEXTURE_2D,$e,Ce,te.width,te.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Je,Fe,te)):t.texImage2D(i.TEXTURE_2D,0,Ce,Je,Fe,te);y(S,tt)&&x(re),be.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ee(A,S,F){if(S.image.length!==6)return;let re=Q(A,S),ee=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);let j=n.get(ee);if(ee.version!==j.__version||re===!0){t.activeTexture(i.TEXTURE0+F);let be=ot.getPrimaries(ot.workingColorSpace),he=S.colorSpace===sn?null:ot.getPrimaries(S.colorSpace),ve=S.colorSpace===sn||be===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Re=S.isCompressedTexture||S.image[0].isCompressedTexture,He=S.image[0]&&S.image[0].isDataTexture,te=[];for(let le=0;le<6;le++)!Re&&!He?te[le]=_(S.image[le],!1,!0,r.maxCubemapSize):te[le]=He?S.image[le].image:S.image[le],te[le]=_e(S,te[le]);let tt=te[0],Je=g(tt)||a,Fe=s.convert(S.format,S.colorSpace),Ce=s.convert(S.type),Se=M(S.internalFormat,Fe,Ce,S.colorSpace),Xe=a&&S.isVideoTexture!==!0,rt=j.__version===void 0||re===!0,pt=P(S,tt,Je);G(i.TEXTURE_CUBE_MAP,S,Je);let $e;if(Re){Xe&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Se,tt.width,tt.height);for(let le=0;le<6;le++){$e=te[le].mipmaps;for(let I=0;I<$e.length;I++){let de=$e[I];S.format!==Qt?Fe!==null?Xe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,I,0,0,de.width,de.height,Fe,de.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,I,Se,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,I,0,0,de.width,de.height,Fe,Ce,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,I,Se,de.width,de.height,0,Fe,Ce,de.data)}}}else{$e=S.mipmaps,Xe&&rt&&($e.length>0&&pt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Se,te[0].width,te[0].height));for(let le=0;le<6;le++)if(He){Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,te[le].width,te[le].height,Fe,Ce,te[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Se,te[le].width,te[le].height,0,Fe,Ce,te[le].data);for(let I=0;I<$e.length;I++){let fe=$e[I].image[le].image;Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,I+1,0,0,fe.width,fe.height,Fe,Ce,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,I+1,Se,fe.width,fe.height,0,Fe,Ce,fe.data)}}else{Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Fe,Ce,te[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Se,Fe,Ce,te[le]);for(let I=0;I<$e.length;I++){let de=$e[I];Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,I+1,0,0,Fe,Ce,de.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,I+1,Se,Fe,Ce,de.image[le])}}}y(S,Je)&&x(i.TEXTURE_CUBE_MAP),j.__version=ee.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ye(A,S,F,re,ee,j){let be=s.convert(F.format,F.colorSpace),he=s.convert(F.type),ve=M(F.internalFormat,be,he,F.colorSpace);if(!n.get(S).__hasExternalTextures){let He=Math.max(1,S.width>>j),te=Math.max(1,S.height>>j);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,j,ve,He,te,S.depth,0,be,he,null):t.texImage2D(ee,j,ve,He,te,0,be,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),X(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ee,n.get(F).__webglTexture,0,oe(S)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,ee,n.get(F).__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(A,S,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let re=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(F||X(S)){let ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===En?re=i.DEPTH_COMPONENT32F:ee.type===Zn&&(re=i.DEPTH_COMPONENT24));let j=oe(S);X(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,re,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,j,re,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,re,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){let re=oe(S);F&&X(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,S.width,S.height):X(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let re=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0;ee<re.length;ee++){let j=re[ee],be=s.convert(j.format,j.colorSpace),he=s.convert(j.type),ve=M(j.internalFormat,be,he,j.colorSpace),Re=oe(S);F&&X(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ve,S.width,S.height):X(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,ve,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ve,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);let re=n.get(S.depthTexture).__webglTexture,ee=oe(S);if(S.depthTexture.format===vi)X(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(S.depthTexture.format===ji)X(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ae(A){let S=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Be(S.__webglFramebuffer,A)}else if(F){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]=i.createRenderbuffer(),Ue(S.__webglDepthbuffer[re],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Ue(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(A,S,F){let re=n.get(A);S!==void 0&&ye(re.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ae(A)}function L(A){let S=A.texture,F=n.get(A),re=n.get(S);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=S.version,o.memory.textures++);let ee=A.isWebGLCubeRenderTarget===!0,j=A.isWebGLMultipleRenderTargets===!0,be=g(A)||a;if(ee){F.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[he]=[];for(let ve=0;ve<S.mipmaps.length;ve++)F.__webglFramebuffer[he][ve]=i.createFramebuffer()}else F.__webglFramebuffer[he]=i.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)F.__webglFramebuffer[he]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(j)if(r.drawBuffers){let he=A.texture;for(let ve=0,Re=he.length;ve<Re;ve++){let He=n.get(he[ve]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&X(A)===!1){let he=j?S:[S];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ve=0;ve<he.length;ve++){let Re=he[ve];F.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ve]);let He=s.convert(Re.format,Re.colorSpace),te=s.convert(Re.type),tt=M(Re.internalFormat,He,te,Re.colorSpace,A.isXRRenderTarget===!0),Je=oe(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,tt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,F.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),G(i.TEXTURE_CUBE_MAP,S,be);for(let he=0;he<6;he++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)ye(F.__webglFramebuffer[he][ve],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,ve);else ye(F.__webglFramebuffer[he],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);y(S,be)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){let he=A.texture;for(let ve=0,Re=he.length;ve<Re;ve++){let He=he[ve],te=n.get(He);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),G(i.TEXTURE_2D,He,be),ye(F.__webglFramebuffer,A,He,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),y(He,be)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?he=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,re.__webglTexture),G(he,S,be),a&&S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)ye(F.__webglFramebuffer[ve],A,S,i.COLOR_ATTACHMENT0,he,ve);else ye(F.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,he,0);y(S,be)&&x(he),t.unbindTexture()}A.depthBuffer&&Ae(A)}function ae(A){let S=g(A)||a,F=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let re=0,ee=F.length;re<ee;re++){let j=F[re];if(y(j,S)){let be=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,he=n.get(j).__webglTexture;t.bindTexture(be,he),x(be),t.unbindTexture()}}}function Y(A){if(a&&A.samples>0&&X(A)===!1){let S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],F=A.width,re=A.height,ee=i.COLOR_BUFFER_BIT,j=[],be=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(A),ve=A.isWebGLMultipleRenderTargets===!0;if(ve)for(let Re=0;Re<S.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Re=0;Re<S.length;Re++){j.push(i.COLOR_ATTACHMENT0+Re),A.depthBuffer&&j.push(be);let He=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(He===!1&&(A.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ve&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[Re]),He===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[be]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[be])),ve){let te=n.get(S[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,F,re,0,0,F,re,ee,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let Re=0;Re<S.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,he.__webglColorRenderbuffer[Re]);let He=n.get(S[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function oe(A){return Math.min(r.maxSamples,A.samples)}function X(A){let S=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Te(A){let S=o.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function _e(A,S){let F=A.colorSpace,re=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===dc||F!==Un&&F!==sn&&(ot.getTransfer(F)===ut?a===!1?e.has("EXT_sRGB")===!0&&re===Qt?(A.format=dc,A.minFilter=Mt,A.generateMipmaps=!1):S=mo.sRGBToLinear(S):(re!==Qt||ee!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}this.allocateTextureUnit=U,this.resetTextureUnits=se,this.setTexture2D=H,this.setTexture2DArray=J,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=Oe,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=X}function Zy(i,e,t){let n=t.isWebGL2;function r(s,o=sn){let a,c=ot.getTransfer(o);if(s===ei)return i.UNSIGNED_BYTE;if(s===Ef)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Af)return i.UNSIGNED_SHORT_5_5_5_1;if(s===_y)return i.BYTE;if(s===xy)return i.SHORT;if(s===ul)return i.UNSIGNED_SHORT;if(s===bf)return i.INT;if(s===Zn)return i.UNSIGNED_INT;if(s===En)return i.FLOAT;if(s===Yr)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===yy)return i.ALPHA;if(s===Qt)return i.RGBA;if(s===vy)return i.LUMINANCE;if(s===My)return i.LUMINANCE_ALPHA;if(s===vi)return i.DEPTH_COMPONENT;if(s===ji)return i.DEPTH_STENCIL;if(s===dc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Sy)return i.RED;if(s===wf)return i.RED_INTEGER;if(s===by)return i.RG;if(s===Tf)return i.RG_INTEGER;if(s===Cf)return i.RGBA_INTEGER;if(s===ic||s===rc||s===sc||s===oc)if(c===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ic)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ic)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===rc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===sc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===oc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Lh||s===Ih||s===Uh||s===Dh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Lh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ih)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Uh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Nh||s===Oh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Nh)return c===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Oh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Fh||s===Bh||s===zh||s===kh||s===Vh||s===Hh||s===Gh||s===Wh||s===qh||s===Xh||s===Yh||s===$h||s===Zh||s===Jh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Fh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Bh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===kh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Vh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Hh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Wh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Yh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$h)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Zh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jh)return c===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ac||s===Kh||s===jh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ac)return c===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Kh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ey||s===Qh||s===ed||s===td)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ac)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Qh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ed)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===td)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===yi?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}var _c=class extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},xi=class extends et{constructor(){super(),this.isGroup=!0,this.type="Group"}},kI={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kI)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new xi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Md=class extends wn{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null,_=t.getContextAttributes(),g=null,p=null,y=[],x=[],M=new $,P=null,E=new wt;E.layers.enable(1),E.viewport=new nt;let R=new wt;R.layers.enable(2),R.viewport=new nt;let D=[E,R],b=new _c;b.layers.enable(1),b.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=y[G];return Q===void 0&&(Q=new js,y[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=y[G];return Q===void 0&&(Q=new js,y[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=y[G];return Q===void 0&&(Q=new js,y[G]=Q),Q.getHandSpace()};function W(G){let Q=x.indexOf(G.inputSource);if(Q===-1)return;let me=y[Q];me!==void 0&&(me.update(G.inputSource,G.frame,l||o),me.dispatchEvent({type:G.type,data:G.inputSource}))}function se(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",U);for(let G=0;G<y.length;G++){let Q=x[G];Q!==null&&(x[G]=null,y[G].disconnect(Q))}w=null,O=null,e.setRenderTarget(g),f=null,d=null,h=null,r=null,p=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",se),r.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Q={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new an(f.framebufferWidth,f.framebufferHeight,{format:Qt,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Q=null,me=null,Ee=null;_.depth&&(Ee=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=_.stencil?ji:vi,me=_.stencil?yi:Zn);let ye={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(ye),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new an(d.textureWidth,d.textureHeight,{format:Qt,type:ei,depthTexture:new vo(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Ue=e.properties.get(p);Ue.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function U(G){for(let Q=0;Q<G.removed.length;Q++){let me=G.removed[Q],Ee=x.indexOf(me);Ee>=0&&(x[Ee]=null,y[Ee].disconnect(me))}for(let Q=0;Q<G.added.length;Q++){let me=G.added[Q],Ee=x.indexOf(me);if(Ee===-1){for(let Ue=0;Ue<y.length;Ue++)if(Ue>=x.length){x.push(me),Ee=Ue;break}else if(x[Ue]===null){x[Ue]=me,Ee=Ue;break}if(Ee===-1)break}let ye=y[Ee];ye&&ye.connect(me)}}let B=new C,H=new C;function J(G,Q,me){B.setFromMatrixPosition(Q.matrixWorld),H.setFromMatrixPosition(me.matrixWorld);let Ee=B.distanceTo(H),ye=Q.projectionMatrix.elements,Ue=me.projectionMatrix.elements,Be=ye[14]/(ye[10]-1),Ae=ye[14]/(ye[10]+1),Oe=(ye[9]+1)/ye[5],L=(ye[9]-1)/ye[5],ae=(ye[8]-1)/ye[0],Y=(Ue[8]+1)/Ue[0],oe=Be*ae,X=Be*Y,Te=Ee/(-ae+Y),_e=Te*-ae;Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(_e),G.translateZ(Te),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let A=Be+Te,S=Ae+Te,F=oe-_e,re=X+(Ee-_e),ee=Oe*Ae/S*A,j=L*Ae/S*A;G.projectionMatrix.makePerspective(F,re,ee,j,A,S),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function Z(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;b.near=R.near=E.near=G.near,b.far=R.far=E.far=G.far,(w!==b.near||O!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,O=b.far);let Q=G.parent,me=b.cameras;Z(b,Q);for(let Ee=0;Ee<me.length;Ee++)Z(me[Ee],Q);me.length===2?J(b,E,R):b.projectionMatrix.copy(E.projectionMatrix),q(G,b,Q)};function q(G,Q,me){me===null?G.matrix.copy(Q.matrixWorld):(G.matrix.copy(me.matrixWorld),G.matrix.invert(),G.matrix.multiply(Q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Zr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)};let ne=null;function ie(G,Q){if(u=Q.getViewerPose(l||o),m=Q,u!==null){let me=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Ee=!1;me.length!==b.cameras.length&&(b.cameras.length=0,Ee=!0);for(let ye=0;ye<me.length;ye++){let Ue=me[ye],Be=null;if(f!==null)Be=f.getViewport(Ue);else{let Oe=h.getViewSubImage(d,Ue);Be=Oe.viewport,ye===0&&(e.setRenderTargetTextures(p,Oe.colorTexture,d.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(p))}let Ae=D[ye];Ae===void 0&&(Ae=new wt,Ae.layers.enable(ye),Ae.viewport=new nt,D[ye]=Ae),Ae.matrix.fromArray(Ue.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Ue.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Be.x,Be.y,Be.width,Be.height),ye===0&&(b.matrix.copy(Ae.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Ee===!0&&b.cameras.push(Ae)}}for(let me=0;me<y.length;me++){let Ee=x[me],ye=y[me];Ee!==null&&ye!==void 0&&ye.update(Ee,Q,l||o)}ne&&ne(G,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}let pe=new Gy;pe.setAnimationLoop(ie),this.setAnimationLoop=function(G){ne=G},this.dispose=function(){}}};function VI(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Vy(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,y,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,y,x):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Kt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Kt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=e.get(p).envMap;if(y&&(g.envMap.value=y,g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function HI(i,e,t,n){let r={},s={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,x){let M=x.program;n.uniformBlockBinding(y,M)}function l(y,x){let M=r[y.id];M===void 0&&(m(y),M=u(y),r[y.id]=M,y.addEventListener("dispose",g));let P=x.program;n.updateUBOMapping(y,P);let E=e.render.frame;s[y.id]!==E&&(d(y),s[y.id]=E)}function u(y){let x=h();y.__bindingPointIndex=x;let M=i.createBuffer(),P=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,P,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=r[y.id],M=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,R=M.length;E<R;E++){let D=Array.isArray(M[E])?M[E]:[M[E]];for(let b=0,w=D.length;b<w;b++){let O=D[b];if(f(O,E,b,P)===!0){let W=O.__offset,se=Array.isArray(O.value)?O.value:[O.value],U=0;for(let B=0;B<se.length;B++){let H=se[B],J=_(H);typeof H=="number"||typeof H=="boolean"?(O.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,W+U,O.__data)):H.isMatrix3?(O.__data[0]=H.elements[0],O.__data[1]=H.elements[1],O.__data[2]=H.elements[2],O.__data[3]=0,O.__data[4]=H.elements[3],O.__data[5]=H.elements[4],O.__data[6]=H.elements[5],O.__data[7]=0,O.__data[8]=H.elements[6],O.__data[9]=H.elements[7],O.__data[10]=H.elements[8],O.__data[11]=0):(H.toArray(O.__data,U),U+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,x,M,P){let E=y.value,R=x+"_"+M;if(P[R]===void 0)return typeof E=="number"||typeof E=="boolean"?P[R]=E:P[R]=E.clone(),!0;{let D=P[R];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return P[R]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function m(y){let x=y.uniforms,M=0,P=16;for(let R=0,D=x.length;R<D;R++){let b=Array.isArray(x[R])?x[R]:[x[R]];for(let w=0,O=b.length;w<O;w++){let W=b[w],se=Array.isArray(W.value)?W.value:[W.value];for(let U=0,B=se.length;U<B;U++){let H=se[U],J=_(H),Z=M%P;Z!==0&&P-Z<J.boundary&&(M+=P-Z),W.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=J.storage}}}let E=M%P;return E>0&&(M+=P-E),y.__size=M,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){let x=y.target;x.removeEventListener("dispose",g);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(let y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var xc=class{constructor(e={}){let{canvas:t=zy(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),m=new Int32Array(4),_=null,g=null,p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1;let x=this,M=!1,P=0,E=0,R=null,D=-1,b=null,w=new nt,O=new nt,W=null,se=new ge(0),U=0,B=t.width,H=t.height,J=1,Z=null,q=null,ne=new nt(0,0,B,H),ie=new nt(0,0,B,H),pe=!1,G=new tr,Q=!1,me=!1,Ee=null,ye=new Le,Ue=new $,Be=new C,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return R===null?J:1}let L=n;function ae(T,N){for(let k=0;k<T.length;k++){let V=T[k],z=t.getContext(V,N);if(z!==null)return z}return null}try{let T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cl}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",de,!1),L===null){let N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),L=ae(N,T),L===null)throw ae(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Y,oe,X,Te,_e,A,S,F,re,ee,j,be,he,ve,Re,He,te,tt,Je,Fe,Ce,Se,Xe,rt;function pt(){Y=new cL(L),oe=new nL(L,Y,e),Y.init(oe),Se=new Zy(L,Y,oe),X=new BI(L,Y,oe),Te=new hL(L),_e=new wI,A=new zI(L,Y,X,_e,oe,Se,Te),S=new rL(x),F=new aL(x),re=new yC(L,oe),Xe=new eL(L,Y,re,oe),ee=new lL(L,re,Te,Xe),j=new mL(L,ee,re,Te),Je=new pL(L,oe,A),He=new iL(_e),be=new AI(x,S,F,Y,oe,Xe,He),he=new VI(x,_e),ve=new CI,Re=new DI(Y,oe),tt=new QP(x,S,F,X,j,d,c),te=new FI(x,j,oe),rt=new HI(L,Te,oe,X),Fe=new tL(L,Y,Te,oe),Ce=new uL(L,Y,Te,oe),Te.programs=be.programs,x.capabilities=oe,x.extensions=Y,x.properties=_e,x.renderLists=ve,x.shadowMap=te,x.state=X,x.info=Te}pt();let $e=new Md(x,L);this.xr=$e,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=Y.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Y.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(T){T!==void 0&&(J=T,this.setSize(B,H,!1))},this.getSize=function(T){return T.set(B,H)},this.setSize=function(T,N,k=!0){if($e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,H=N,t.width=Math.floor(T*J),t.height=Math.floor(N*J),k===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(B*J,H*J).floor()},this.setDrawingBufferSize=function(T,N,k){B=T,H=N,J=k,t.width=Math.floor(T*k),t.height=Math.floor(N*k),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(ne)},this.setViewport=function(T,N,k,V){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,N,k,V),X.viewport(w.copy(ne).multiplyScalar(J).floor())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,N,k,V){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,N,k,V),X.scissor(O.copy(ie).multiplyScalar(J).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(T){X.setScissorTest(pe=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(T=!0,N=!0,k=!0){let V=0;if(T){let z=!1;if(R!==null){let xe=R.texture.format;z=xe===Cf||xe===Tf||xe===wf}if(z){let xe=R.texture.type,we=xe===ei||xe===Zn||xe===ul||xe===yi||xe===Ef||xe===Af,Ie=tt.getClearColor(),Ne=tt.getClearAlpha(),Ye=Ie.r,ze=Ie.g,Ge=Ie.b;we?(f[0]=Ye,f[1]=ze,f[2]=Ge,f[3]=Ne,L.clearBufferuiv(L.COLOR,0,f)):(m[0]=Ye,m[1]=ze,m[2]=Ge,m[3]=Ne,L.clearBufferiv(L.COLOR,0,m))}else V|=L.COLOR_BUFFER_BIT}N&&(V|=L.DEPTH_BUFFER_BIT),k&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",de,!1),ve.dispose(),Re.dispose(),_e.dispose(),S.dispose(),F.dispose(),j.dispose(),Xe.dispose(),rt.dispose(),be.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",qt),$e.removeEventListener("sessionend",lt),Ee&&(Ee.dispose(),Ee=null),Xt.stop()};function le(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let T=Te.autoReset,N=te.enabled,k=te.autoUpdate,V=te.needsUpdate,z=te.type;pt(),Te.autoReset=T,te.enabled=N,te.autoUpdate=k,te.needsUpdate=V,te.type=z}function de(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function fe(T){let N=T.target;N.removeEventListener("dispose",fe),De(N)}function De(T){Pe(T),_e.remove(T)}function Pe(T){let N=_e.get(T).programs;N!==void 0&&(N.forEach(function(k){be.releaseProgram(k)}),T.isShaderMaterial&&be.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,k,V,z,xe){N===null&&(N=Ae);let we=z.isMesh&&z.matrixWorld.determinant()<0,Ie=kv(T,N,k,V,z);X.setMaterial(V,we);let Ne=k.index,Ye=1;if(V.wireframe===!0){if(Ne=ee.getWireframeAttribute(k),Ne===void 0)return;Ye=2}let ze=k.drawRange,Ge=k.attributes.position,xt=ze.start*Ye,tn=(ze.start+ze.count)*Ye;xe!==null&&(xt=Math.max(xt,xe.start*Ye),tn=Math.min(tn,(xe.start+xe.count)*Ye)),Ne!==null?(xt=Math.max(xt,0),tn=Math.min(tn,Ne.count)):Ge!=null&&(xt=Math.max(xt,0),tn=Math.min(tn,Ge.count));let Pt=tn-xt;if(Pt<0||Pt===1/0)return;Xe.setup(z,V,Ie,k,Ne);let Bn,ht=Fe;if(Ne!==null&&(Bn=re.get(Ne),ht=Ce,ht.setIndex(Bn)),z.isMesh)V.wireframe===!0?(X.setLineWidth(V.wireframeLinewidth*Oe()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(z.isLine){let Ze=V.linewidth;Ze===void 0&&(Ze=1),X.setLineWidth(Ze*Oe()),z.isLineSegments?ht.setMode(L.LINES):z.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else z.isPoints?ht.setMode(L.POINTS):z.isSprite&&ht.setMode(L.TRIANGLES);if(z.isBatchedMesh)ht.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ht.renderInstances(xt,Pt,z.count);else if(k.isInstancedBufferGeometry){let Ze=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,xl=Math.min(k.instanceCount,Ze);ht.renderInstances(xt,Pt,xl)}else ht.render(xt,Pt)};function at(T,N,k){T.transparent===!0&&T.side===In&&T.forceSinglePass===!1?(T.side=Kt,T.needsUpdate=!0,$o(T,N,k),T.side=ii,T.needsUpdate=!0,$o(T,N,k),T.side=In):$o(T,N,k)}this.compile=function(T,N,k=null){k===null&&(k=T),g=Re.get(k),g.init(),y.push(g),k.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),T!==k&&T.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),g.setupLights(x._useLegacyLights);let V=new Set;return T.traverse(function(z){let xe=z.material;if(xe)if(Array.isArray(xe))for(let we=0;we<xe.length;we++){let Ie=xe[we];at(Ie,k,z),V.add(Ie)}else at(xe,k,z),V.add(xe)}),y.pop(),g=null,V},this.compileAsync=function(T,N,k=null){let V=this.compile(T,N,k);return new Promise(z=>{function xe(){if(V.forEach(function(we){_e.get(we).currentProgram.isReady()&&V.delete(we)}),V.size===0){z(T);return}setTimeout(xe,10)}Y.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ct=null;function Rt(T){ct&&ct(T)}function qt(){Xt.stop()}function lt(){Xt.start()}let Xt=new Gy;Xt.setAnimationLoop(Rt),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(T){ct=T,$e.setAnimationLoop(T),T===null?Xt.stop():Xt.start()},$e.addEventListener("sessionstart",qt),$e.addEventListener("sessionend",lt),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&($e.cameraAutoUpdate===!0&&$e.updateCamera(N),N=$e.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,N,R),g=Re.get(T,y.length),g.init(),y.push(g),ye.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),G.setFromProjectionMatrix(ye),me=this.localClippingEnabled,Q=He.init(this.clippingPlanes,me),_=ve.get(T,p.length),_.init(),p.push(_),Cn(T,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Z,q),this.info.render.frame++,Q===!0&&He.beginShadows();let k=g.state.shadowsArray;if(te.render(k,T,N),Q===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(_,T),g.setupLights(x._useLegacyLights),N.isArrayCamera){let V=N.cameras;for(let z=0,xe=V.length;z<xe;z++){let we=V[z];Jf(_,T,we,we.viewport)}}else Jf(_,T,N);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(x,T,N),Xe.resetDefaultState(),D=-1,b=null,y.pop(),y.length>0?g=y[y.length-1]:g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Cn(T,N,k,V){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)k=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||G.intersectsSprite(T)){V&&Be.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ye);let we=j.update(T),Ie=T.material;Ie.visible&&_.push(T,we,Ie,k,Be.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||G.intersectsObject(T))){let we=j.update(T),Ie=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Be.copy(T.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Be.copy(we.boundingSphere.center)),Be.applyMatrix4(T.matrixWorld).applyMatrix4(ye)),Array.isArray(Ie)){let Ne=we.groups;for(let Ye=0,ze=Ne.length;Ye<ze;Ye++){let Ge=Ne[Ye],xt=Ie[Ge.materialIndex];xt&&xt.visible&&_.push(T,we,xt,k,Be.z,Ge)}}else Ie.visible&&_.push(T,we,Ie,k,Be.z,null)}}let xe=T.children;for(let we=0,Ie=xe.length;we<Ie;we++)Cn(xe[we],N,k,V)}function Jf(T,N,k,V){let z=T.opaque,xe=T.transmissive,we=T.transparent;g.setupLightsView(k),Q===!0&&He.setGlobalState(x.clippingPlanes,k),xe.length>0&&zv(z,xe,N,k),V&&X.viewport(w.copy(V)),z.length>0&&Yo(z,N,k),xe.length>0&&Yo(xe,N,k),we.length>0&&Yo(we,N,k),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function zv(T,N,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;let xe=oe.isWebGL2;Ee===null&&(Ee=new an(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?Yr:ei,minFilter:bi,samples:xe?4:0})),x.getDrawingBufferSize(Ue),xe?Ee.setSize(Ue.x,Ue.y):Ee.setSize(fc(Ue.x),fc(Ue.y));let we=x.getRenderTarget();x.setRenderTarget(Ee),x.getClearColor(se),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear();let Ie=x.toneMapping;x.toneMapping=Qn,Yo(T,k,V),A.updateMultisampleRenderTarget(Ee),A.updateRenderTargetMipmap(Ee);let Ne=!1;for(let Ye=0,ze=N.length;Ye<ze;Ye++){let Ge=N[Ye],xt=Ge.object,tn=Ge.geometry,Pt=Ge.material,Bn=Ge.group;if(Pt.side===In&&xt.layers.test(V.layers)){let ht=Pt.side;Pt.side=Kt,Pt.needsUpdate=!0,Kf(xt,k,V,tn,Pt,Bn),Pt.side=ht,Pt.needsUpdate=!0,Ne=!0}}Ne===!0&&(A.updateMultisampleRenderTarget(Ee),A.updateRenderTargetMipmap(Ee)),x.setRenderTarget(we),x.setClearColor(se,U),x.toneMapping=Ie}function Yo(T,N,k){let V=N.isScene===!0?N.overrideMaterial:null;for(let z=0,xe=T.length;z<xe;z++){let we=T[z],Ie=we.object,Ne=we.geometry,Ye=V===null?we.material:V,ze=we.group;Ie.layers.test(k.layers)&&Kf(Ie,N,k,Ne,Ye,ze)}}function Kf(T,N,k,V,z,xe){T.onBeforeRender(x,N,k,V,z,xe),T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(x,N,k,V,T,xe),z.transparent===!0&&z.side===In&&z.forceSinglePass===!1?(z.side=Kt,z.needsUpdate=!0,x.renderBufferDirect(k,N,V,z,T,xe),z.side=ii,z.needsUpdate=!0,x.renderBufferDirect(k,N,V,z,T,xe),z.side=In):x.renderBufferDirect(k,N,V,z,T,xe),T.onAfterRender(x,N,k,V,z,xe)}function $o(T,N,k){N.isScene!==!0&&(N=Ae);let V=_e.get(T),z=g.state.lights,xe=g.state.shadowsArray,we=z.state.version,Ie=be.getParameters(T,z.state,xe,N,k),Ne=be.getProgramCacheKey(Ie),Ye=V.programs;V.environment=T.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(T.isMeshStandardMaterial?F:S).get(T.envMap||V.environment),Ye===void 0&&(T.addEventListener("dispose",fe),Ye=new Map,V.programs=Ye);let ze=Ye.get(Ne);if(ze!==void 0){if(V.currentProgram===ze&&V.lightsStateVersion===we)return Qf(T,Ie),ze}else Ie.uniforms=be.getUniforms(T),T.onBuild(k,Ie,x),T.onBeforeCompile(Ie,x),ze=be.acquireProgram(Ie,Ne),Ye.set(Ne,ze),V.uniforms=Ie.uniforms;let Ge=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=He.uniform),Qf(T,Ie),V.needsLights=Hv(T),V.lightsStateVersion=we,V.needsLights&&(Ge.ambientLightColor.value=z.state.ambient,Ge.lightProbe.value=z.state.probe,Ge.directionalLights.value=z.state.directional,Ge.directionalLightShadows.value=z.state.directionalShadow,Ge.spotLights.value=z.state.spot,Ge.spotLightShadows.value=z.state.spotShadow,Ge.rectAreaLights.value=z.state.rectArea,Ge.ltc_1.value=z.state.rectAreaLTC1,Ge.ltc_2.value=z.state.rectAreaLTC2,Ge.pointLights.value=z.state.point,Ge.pointLightShadows.value=z.state.pointShadow,Ge.hemisphereLights.value=z.state.hemi,Ge.directionalShadowMap.value=z.state.directionalShadowMap,Ge.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ge.spotShadowMap.value=z.state.spotShadowMap,Ge.spotLightMatrix.value=z.state.spotLightMatrix,Ge.spotLightMap.value=z.state.spotLightMap,Ge.pointShadowMap.value=z.state.pointShadowMap,Ge.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=ze,V.uniformsList=null,ze}function jf(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=Xr.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function Qf(T,N){let k=_e.get(T);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function kv(T,N,k,V,z){N.isScene!==!0&&(N=Ae),A.resetTextureUnits();let xe=N.fog,we=V.isMeshStandardMaterial?N.environment:null,Ie=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Un,Ne=(V.isMeshStandardMaterial?F:S).get(V.envMap||we),Ye=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,ze=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ge=!!k.morphAttributes.position,xt=!!k.morphAttributes.normal,tn=!!k.morphAttributes.color,Pt=Qn;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Pt=x.toneMapping);let Bn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ht=Bn!==void 0?Bn.length:0,Ze=_e.get(V),xl=g.state.lights;if(Q===!0&&(me===!0||T!==b)){let un=T===b&&V.id===D;He.setState(V,T,un)}let mt=!1;V.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==xl.state.version||Ze.outputColorSpace!==Ie||z.isBatchedMesh&&Ze.batching===!1||!z.isBatchedMesh&&Ze.batching===!0||z.isInstancedMesh&&Ze.instancing===!1||!z.isInstancedMesh&&Ze.instancing===!0||z.isSkinnedMesh&&Ze.skinning===!1||!z.isSkinnedMesh&&Ze.skinning===!0||z.isInstancedMesh&&Ze.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ze.instancingColor===!1&&z.instanceColor!==null||Ze.envMap!==Ne||V.fog===!0&&Ze.fog!==xe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==He.numPlanes||Ze.numIntersection!==He.numIntersection)||Ze.vertexAlphas!==Ye||Ze.vertexTangents!==ze||Ze.morphTargets!==Ge||Ze.morphNormals!==xt||Ze.morphColors!==tn||Ze.toneMapping!==Pt||oe.isWebGL2===!0&&Ze.morphTargetsCount!==ht)&&(mt=!0):(mt=!0,Ze.__version=V.version);let Pi=Ze.currentProgram;mt===!0&&(Pi=$o(V,N,z));let ep=!1,As=!1,yl=!1,Ot=Pi.getUniforms(),Li=Ze.uniforms;if(X.useProgram(Pi.program)&&(ep=!0,As=!0,yl=!0),V.id!==D&&(D=V.id,As=!0),ep||b!==T){Ot.setValue(L,"projectionMatrix",T.projectionMatrix),Ot.setValue(L,"viewMatrix",T.matrixWorldInverse);let un=Ot.map.cameraPosition;un!==void 0&&un.setValue(L,Be.setFromMatrixPosition(T.matrixWorld)),oe.logarithmicDepthBuffer&&Ot.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ot.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,As=!0,yl=!0)}if(z.isSkinnedMesh){Ot.setOptional(L,z,"bindMatrix"),Ot.setOptional(L,z,"bindMatrixInverse");let un=z.skeleton;un&&(oe.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),Ot.setValue(L,"boneTexture",un.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Ot.setOptional(L,z,"batchingTexture"),Ot.setValue(L,"batchingTexture",z._matricesTexture,A));let vl=k.morphAttributes;if((vl.position!==void 0||vl.normal!==void 0||vl.color!==void 0&&oe.isWebGL2===!0)&&Je.update(z,k,Pi),(As||Ze.receiveShadow!==z.receiveShadow)&&(Ze.receiveShadow=z.receiveShadow,Ot.setValue(L,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Li.envMap.value=Ne,Li.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),As&&(Ot.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ze.needsLights&&Vv(Li,yl),xe&&V.fog===!0&&he.refreshFogUniforms(Li,xe),he.refreshMaterialUniforms(Li,V,J,H,Ee),Xr.upload(L,jf(Ze),Li,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Xr.upload(L,jf(Ze),Li,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ot.setValue(L,"center",z.center),Ot.setValue(L,"modelViewMatrix",z.modelViewMatrix),Ot.setValue(L,"normalMatrix",z.normalMatrix),Ot.setValue(L,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let un=V.uniformsGroups;for(let Ml=0,Gv=un.length;Ml<Gv;Ml++)if(oe.isWebGL2){let tp=un[Ml];rt.update(tp,Pi),rt.bind(tp,Pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pi}function Vv(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Hv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,N,k){_e.get(T.texture).__webglTexture=N,_e.get(T.depthTexture).__webglTexture=k;let V=_e.get(T);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,N){let k=_e.get(T);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,k=0){R=T,P=N,E=k;let V=!0,z=null,xe=!1,we=!1;if(T){let Ne=_e.get(T);Ne.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(L.FRAMEBUFFER,null),V=!1):Ne.__webglFramebuffer===void 0?A.setupRenderTarget(T):Ne.__hasExternalTextures&&A.rebindTextures(T,_e.get(T.texture).__webglTexture,_e.get(T.depthTexture).__webglTexture);let Ye=T.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(we=!0);let ze=_e.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[N])?z=ze[N][k]:z=ze[N],xe=!0):oe.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?z=_e.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?z=ze[k]:z=ze,w.copy(T.viewport),O.copy(T.scissor),W=T.scissorTest}else w.copy(ne).multiplyScalar(J).floor(),O.copy(ie).multiplyScalar(J).floor(),W=pe;if(X.bindFramebuffer(L.FRAMEBUFFER,z)&&oe.drawBuffers&&V&&X.drawBuffers(T,z),X.viewport(w),X.scissor(O),X.setScissorTest(W),xe){let Ne=_e.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ne.__webglTexture,k)}else if(we){let Ne=_e.get(T.texture),Ye=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ne.__webglTexture,k||0,Ye)}D=-1},this.readRenderTargetPixels=function(T,N,k,V,z,xe,we){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie){X.bindFramebuffer(L.FRAMEBUFFER,Ie);try{let Ne=T.texture,Ye=Ne.format,ze=Ne.type;if(Ye!==Qt&&Se.convert(Ye)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ge=ze===Yr&&(Y.has("EXT_color_buffer_half_float")||oe.isWebGL2&&Y.has("EXT_color_buffer_float"));if(ze!==ei&&Se.convert(ze)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===En&&(oe.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-V&&k>=0&&k<=T.height-z&&L.readPixels(N,k,V,z,Se.convert(Ye),Se.convert(ze),xe)}finally{let Ne=R!==null?_e.get(R).__webglFramebuffer:null;X.bindFramebuffer(L.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(T,N,k=0){let V=Math.pow(2,-k),z=Math.floor(N.image.width*V),xe=Math.floor(N.image.height*V);A.setTexture2D(N,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,T.x,T.y,z,xe),X.unbindTexture()},this.copyTextureToTexture=function(T,N,k,V=0){let z=N.image.width,xe=N.image.height,we=Se.convert(k.format),Ie=Se.convert(k.type);A.setTexture2D(k,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment),N.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,V,T.x,T.y,z,xe,we,Ie,N.image.data):N.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,V,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,we,N.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,V,T.x,T.y,we,Ie,N.image),V===0&&k.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(T,N,k,V,z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let xe=T.max.x-T.min.x+1,we=T.max.y-T.min.y+1,Ie=T.max.z-T.min.z+1,Ne=Se.convert(V.format),Ye=Se.convert(V.type),ze;if(V.isData3DTexture)A.setTexture3D(V,0),ze=L.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)A.setTexture2DArray(V,0),ze=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment);let Ge=L.getParameter(L.UNPACK_ROW_LENGTH),xt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),tn=L.getParameter(L.UNPACK_SKIP_PIXELS),Pt=L.getParameter(L.UNPACK_SKIP_ROWS),Bn=L.getParameter(L.UNPACK_SKIP_IMAGES),ht=k.isCompressedTexture?k.mipmaps[z]:k.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,T.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,T.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,T.min.z),k.isDataTexture||k.isData3DTexture?L.texSubImage3D(ze,z,N.x,N.y,N.z,xe,we,Ie,Ne,Ye,ht.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(ze,z,N.x,N.y,N.z,xe,we,Ie,Ne,ht.data)):L.texSubImage3D(ze,z,N.x,N.y,N.z,xe,we,Ie,Ne,Ye,ht),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ge),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,tn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Bn),z===0&&V.generateMipmaps&&L.generateMipmap(ze),X.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),X.unbindTexture()},this.resetState=function(){P=0,E=0,R=null,X.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===dl?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===Go?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?Mi:Lf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Mi?At:Un}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},yc=class extends xc{};yc.prototype.isWebGL1Renderer=!0;var ts=class{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ge(e),this.density=t}clone(){return new ts(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},ns=class{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ge(e),this.near=t,this.far=n}clone(){return new ns(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},vc=class extends et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},is=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=on()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Zt=new C,oi=class{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=en(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=en(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=en(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=en(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),r=qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),r=qe(r,this.array),s=qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new it(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new oi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},bo=class extends Ut{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Nr,Vs=new C,Or=new C,Fr=new C,Br=new $,Hs=new $,Jy=new Le,Ua=new C,Gs=new C,Da=new C,q0=new $,uh=new $,X0=new $,Mc=class extends et{constructor(e=new bo){if(super(),this.isSprite=!0,this.type="Sprite",Nr===void 0){Nr=new Ve;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new is(t,5);Nr.setIndex([0,1,2,0,2,3]),Nr.setAttribute("position",new oi(n,3,0,!1)),Nr.setAttribute("uv",new oi(n,2,3,!1))}this.geometry=Nr,this.material=e,this.center=new $(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Or.setFromMatrixScale(this.matrixWorld),Jy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Or.multiplyScalar(-Fr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;Na(Ua.set(-.5,-.5,0),Fr,o,Or,r,s),Na(Gs.set(.5,-.5,0),Fr,o,Or,r,s),Na(Da.set(.5,.5,0),Fr,o,Or,r,s),q0.set(0,0),uh.set(1,0),X0.set(1,1);let a=e.ray.intersectTriangle(Ua,Gs,Da,!1,Vs);if(a===null&&(Na(Gs.set(-.5,.5,0),Fr,o,Or,r,s),uh.set(0,1),a=e.ray.intersectTriangle(Ua,Da,Gs,!1,Vs),a===null))return;let c=e.ray.origin.distanceTo(Vs);c<e.near||c>e.far||t.push({distance:c,point:Vs.clone(),uv:Vt.getInterpolation(Vs,Ua,Gs,Da,q0,uh,X0,new $),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Na(i,e,t,n,r,s){Br.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Hs.x=s*Br.x-r*Br.y,Hs.y=r*Br.x+s*Br.y):Hs.copy(Br),i.copy(e),i.x+=Hs.x,i.y+=Hs.y,i.applyMatrix4(Jy)}var Oa=new C,Y0=new C,Sc=class extends et{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,r=t.length;n<r;n++){let s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let r=this.levels,s;for(s=0;s<r.length&&!(t<r[s].distance);s++);return r.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,r;for(n=1,r=t.length;n<r;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Oa.setFromMatrixPosition(this.matrixWorld);let r=e.ray.origin.distanceTo(Oa);this.getObjectForDistance(r).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Oa.setFromMatrixPosition(e.matrixWorld),Y0.setFromMatrixPosition(this.matrixWorld);let n=Oa.distanceTo(Y0)/e.zoom;t[0].object.visible=!0;let r,s;for(r=1,s=t.length;r<s;r++){let o=t[r].distance;if(t[r].object.visible&&(o-=o*t[r].hysteresis),n>=o)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<s;r++)t[r].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let r=0,s=n.length;r<s;r++){let o=n[r];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}},$0=new C,Z0=new nt,J0=new nt,GI=new C,K0=new Le,Fa=new C,hh=new It,j0=new Le,dh=new Ei,bc=class extends St{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ph,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Dt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fa),this.boundingBox.expandByPoint(Fa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new It),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fa),this.boundingSphere.expandByPoint(Fa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hh.copy(this.boundingSphere),hh.applyMatrix4(r),e.ray.intersectsSphere(hh)!==!1&&(j0.copy(r).invert(),dh.copy(e.ray).applyMatrix4(j0),!(this.boundingBox!==null&&dh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,dh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ph?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gy?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Z0.fromBufferAttribute(r.attributes.skinIndex,e),J0.fromBufferAttribute(r.attributes.skinWeight,e),$0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=J0.getComponent(s);if(o!==0){let a=Z0.getComponent(s);K0.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(GI.copy($0).applyMatrix4(K0),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Eo=class extends et{constructor(){super(),this.isBone=!0,this.type="Bone"}},ti=class extends ft{constructor(e=null,t=1,n=1,r,s,o,a,c,l=vt,u=vt,h,d){super(null,o,a,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Q0=new Le,WI=new Le,rs=class{constructor(e=[],t=[]){this.uuid=on(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:WI;Q0.multiplyMatrices(a,t[s]),Q0.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new rs(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ti(t,e,e,Qt,En);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Eo),this.bones.push(o),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Ai=class extends it{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zr=new Le,ex=new Le,Ba=[],tx=new Dt,qI=new Le,Ws=new St,qs=new It,Ec=class extends St{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ai(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,qI)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),tx.copy(e.boundingBox).applyMatrix4(zr),this.boundingBox.union(tx)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new It),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),qs.copy(e.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),e.ray.intersectsSphere(qs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,zr),ex.multiplyMatrices(n,zr),Ws.matrixWorld=ex,Ws.raycast(e,Ba);for(let o=0,a=Ba.length;o<a;o++){let c=Ba[o];c.instanceId=s,c.object=this,t.push(c)}Ba.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ai(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};function XI(i,e){return i.z-e.z}function YI(i,e){return e.z-i.z}var Sd=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,r=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let s=n[this.index];r.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}},kr="batchId",mi=new Le,nx=new Le,$I=new Le,ix=new Le,fh=new tr,za=new Dt,Bi=new It,Xs=new C,ph=new Sd,kt=new St,ka=[];function ZI(i,e,t=0){let n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){let r=i.count;for(let s=0;s<r;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,i.getComponent(s,o))}else e.array.set(i.array,t*n);e.needsUpdate=!0}var Ac=class extends St{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,n=t*2,r){super(new Ve,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new ti(t,e,e,Qt,En);this._matricesTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,r=this._maxGeometryCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(let a in e.attributes){let c=e.getAttribute(a),{array:l,itemSize:u,normalized:h}=c,d=new l.constructor(n*u),f=new c.constructor(d,u,h);f.setUsage(c.usage),t.setAttribute(a,f)}if(e.getIndex()!==null){let a=n>65536?new Uint32Array(s):new Uint16Array(s);t.setIndex(new it(a,1))}let o=r>65536?new Uint32Array(n):new Uint16Array(n);t.setAttribute(kr,new it(o,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(kr))throw new Error(`BatchedMesh: Geometry cannot use attribute "${kr}"`);let t=this.geometry;if(Boolean(e.getIndex())!==Boolean(t.getIndex()))throw new Error('BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(n===kr)continue;if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let r=e.getAttribute(n),s=t.getAttribute(n);if(r.itemSize!==s.itemSize||r.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dt);let e=this._geometryCount,t=this.boundingBox,n=this._active;t.makeEmpty();for(let r=0;r<e;r++)n[r]!==!1&&(this.getMatrixAt(r,mi),this.getBoundingBoxAt(r,za).applyMatrix4(mi),t.union(za))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new It);let e=this._geometryCount,t=this.boundingSphere,n=this._active;t.makeEmpty();for(let r=0;r<e;r++)n[r]!==!1&&(this.getMatrixAt(r,mi),this.getBoundingSphereAt(r,Bi).applyMatrix4(mi),t.union(Bi))}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");let r={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1},s=null,o=this._reservedRanges,a=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(s=o[o.length-1]),t===-1?r.vertexCount=e.getAttribute("position").count:r.vertexCount=t,s===null?r.vertexStart=0:r.vertexStart=s.vertexStart+s.vertexCount;let l=e.getIndex(),u=l!==null;if(u&&(n===-1?r.indexCount=l.count:r.indexCount=n,s===null?r.indexStart=0:r.indexStart=s.indexStart+s.indexCount),r.indexStart!==-1&&r.indexStart+r.indexCount>this._maxIndexCount||r.vertexStart+r.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let h=this._visibility,d=this._active,f=this._matricesTexture,m=this._matricesTexture.image.data;h.push(!0),d.push(!0);let _=this._geometryCount;this._geometryCount++,$I.toArray(m,_*16),f.needsUpdate=!0,o.push(r),a.push({start:u?r.indexStart:r.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new Dt,sphereInitialized:!1,sphere:new It});let g=this.geometry.getAttribute(kr);for(let p=0;p<r.vertexCount;p++)g.setX(r.vertexStart+p,_);return g.needsUpdate=!0,this.setGeometryAt(_,e),_}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,r=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),a=this._reservedRanges[e];if(r&&o.count>a.indexCount||t.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");let c=a.vertexStart,l=a.vertexCount;for(let f in n.attributes){if(f===kr)continue;let m=t.getAttribute(f),_=n.getAttribute(f);ZI(m,_,c);let g=m.itemSize;for(let p=m.count,y=l;p<y;p++){let x=c+p;for(let M=0;M<g;M++)_.setComponent(x,M,0)}_.needsUpdate=!0}if(r){let f=a.indexStart;for(let m=0;m<o.count;m++)s.setX(f+m,c+o.getX(m));for(let m=o.count,_=a.indexCount;m<_;m++)s.setX(f+m,c);s.needsUpdate=!0}let u=this._bounds[e];t.boundingBox!==null?(u.box.copy(t.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,t.boundingSphere!==null?(u.sphere.copy(t.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;let h=this._drawRanges[e],d=t.getAttribute("position");return h.count=r?o.count:d.count,this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(this._active[e]===!1)return this;let r=this._bounds[e],s=r.box,o=this.geometry;if(r.boxInitialized===!1){s.makeEmpty();let a=o.index,c=o.attributes.position,l=this._drawRanges[e];for(let u=l.start,h=l.start+l.count;u<h;u++){let d=u;a&&(d=a.getX(d)),s.expandByPoint(Xs.fromBufferAttribute(c,d))}r.boxInitialized=!0}return t.copy(s),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return this;let r=this._bounds[e],s=r.sphere,o=this.geometry;if(r.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(e,za),za.getCenter(s.center);let a=o.index,c=o.attributes.position,l=this._drawRanges[e],u=0;for(let h=l.start,d=l.start+l.count;h<d;h++){let f=h;a&&(f=a.getX(f)),Xs.fromBufferAttribute(c,f),u=Math.max(u,s.center.distanceToSquared(Xs))}s.radius=Math.sqrt(u),r.sphereInitialized=!0}return t.copy(s),t}setMatrixAt(e,t){let n=this._active,r=this._matricesTexture,s=this._matricesTexture.image.data,o=this._geometryCount;return e>=o||n[e]===!1?this:(t.toArray(s,e*16),r.needsUpdate=!0,this)}getMatrixAt(e,t){let n=this._active,r=this._matricesTexture.image.data,s=this._geometryCount;return e>=s||n[e]===!1?null:t.fromArray(r,e*16)}setVisibleAt(e,t){let n=this._visibility,r=this._active,s=this._geometryCount;return e>=s||r[e]===!1||n[e]===t?this:(n[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){let t=this._visibility,n=this._active,r=this._geometryCount;return e>=r||n[e]===!1?!1:t[e]}raycast(e,t){let n=this._visibility,r=this._active,s=this._drawRanges,o=this._geometryCount,a=this.matrixWorld,c=this.geometry;kt.material=this.material,kt.geometry.index=c.index,kt.geometry.attributes=c.attributes,kt.geometry.boundingBox===null&&(kt.geometry.boundingBox=new Dt),kt.geometry.boundingSphere===null&&(kt.geometry.boundingSphere=new It);for(let l=0;l<o;l++){if(!n[l]||!r[l])continue;let u=s[l];kt.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(l,kt.matrixWorld).premultiply(a),this.getBoundingBoxAt(l,kt.geometry.boundingBox),this.getBoundingSphereAt(l,kt.geometry.boundingSphere),kt.raycast(e,ka);for(let h=0,d=ka.length;h<d;h++){let f=ka[h];f.object=this,f.batchId=l,t.push(f)}ka.length=0}kt.material=null,kt.geometry.index=null,kt.geometry.attributes={},kt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,n,r,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let o=r.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._visibility,l=this._multiDrawStarts,u=this._multiDrawCounts,h=this._drawRanges,d=this.perObjectFrustumCulled;d&&(ix.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),fh.setFromProjectionMatrix(ix,e.isWebGPURenderer?$r:An));let f=0;if(this.sortObjects){nx.copy(this.matrixWorld).invert(),Xs.setFromMatrixPosition(n.matrixWorld).applyMatrix4(nx);for(let g=0,p=c.length;g<p;g++)if(c[g]){this.getMatrixAt(g,mi),this.getBoundingSphereAt(g,Bi).applyMatrix4(mi);let y=!1;if(d&&(y=!fh.intersectsSphere(Bi)),!y){let x=Xs.distanceTo(Bi.center);ph.push(h[g],x)}}let m=ph.list,_=this.customSort;_===null?m.sort(s.transparent?YI:XI):_.call(this,m,n);for(let g=0,p=m.length;g<p;g++){let y=m[g];l[f]=y.start*a,u[f]=y.count,f++}ph.reset()}else for(let m=0,_=c.length;m<_;m++)if(c[m]){let g=!1;if(d&&(this.getMatrixAt(m,mi),this.getBoundingSphereAt(m,Bi).applyMatrix4(mi),g=!fh.intersectsSphere(Bi)),!g){let p=h[m];l[f]=p.start*a,u[f]=p.count,f++}}this._multiDrawCount=f,this._visibilityChanged=!1}onBeforeShadow(e,t,n,r,s,o){this.onBeforeRender(e,null,r,s,o)}},Nt=class extends Ut{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},rx=new C,sx=new C,ox=new Le,mh=new Ei,Va=new It,Nn=class extends et{constructor(e=new Ve,t=new Nt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)rx.fromBufferAttribute(t,r-1),sx.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=rx.distanceTo(sx);e.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(r),Va.radius+=s,e.ray.intersectsSphere(Va)===!1)return;ox.copy(r).invert(),mh.copy(e.ray).applyMatrix4(ox);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new C,u=new C,h=new C,d=new C,f=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){let p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=p,M=y-1;x<M;x+=f){let P=m.getX(x),E=m.getX(x+1);if(l.fromBufferAttribute(g,P),u.fromBufferAttribute(g,E),mh.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=p,M=y-1;x<M;x+=f){if(l.fromBufferAttribute(g,x),u.fromBufferAttribute(g,x+1),mh.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}},ax=new C,cx=new C,gn=class extends Nn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)ax.fromBufferAttribute(t,r),cx.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+ax.distanceTo(cx);e.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},wc=class extends Nn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ao=class extends Ut{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lx=new Le,bd=new Ei,Ha=new It,Ga=new C,Tc=class extends et{constructor(e=new Ve,t=new Ao){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(r),Ha.radius+=s,e.ray.intersectsSphere(Ha)===!1)return;lx.copy(r).invert(),bd.copy(e.ray).applyMatrix4(lx);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,_=f;m<_;m++){let g=l.getX(m);Ga.fromBufferAttribute(h,g),ux(Ga,g,c,r,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,_=f;m<_;m++)Ga.fromBufferAttribute(h,m),ux(Ga,m,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ux(i,e,t,n,r,s,o){let a=bd.distanceSqToPoint(i);if(a<t){let c=new C;bd.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var Ed=class extends ft{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Mt,this.magFilter=s!==void 0?s:Mt,this.generateMipmaps=!1;let u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},Ad=class extends ft{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=vt,this.minFilter=vt,this.generateMipmaps=!1,this.needsUpdate=!0}},ss=class extends ft{constructor(e,t,n,r,s,o,a,c,l,u,h,d){super(null,o,a,c,l,u,r,s,h,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},wd=class extends ss{constructor(e,t,n,r,s,o){super(e,t,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=Ht}},Td=class extends ss{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,ri),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},Cd=class extends ft{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let u=n[r],d=n[r+1]-u,f=(o-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new $:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new C,r=[],s=[],o=[],a=new C,c=new Le;for(let f=0;f<=e;f++){let m=f/e;r[f]=this.getTangentAt(m,new C)}s[0]=new C,o[0]=new C;let l=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(_t(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(_t(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(r[m],f*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},os=class extends cn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let n=t||new $,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Cc=class extends os{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Nf(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let d=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,r(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var Wa=new C,gh=new Nf,_h=new Nf,xh=new Nf,Rc=class extends cn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new C){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Wa.subVectors(r[0],r[1]).add(r[0]),l=Wa);let h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Wa.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Wa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),gh.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,m,_,g),_h.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,m,_,g),xh.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(gh.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),_h.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),xh.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(gh.calc(c),_h.calc(c),xh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hx(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function JI(i,e){let t=1-i;return t*t*e}function KI(i,e){return 2*(1-i)*i*e}function jI(i,e){return i*i*e}function Qs(i,e,t,n){return JI(i,e)+KI(i,t)+jI(i,n)}function QI(i,e){let t=1-i;return t*t*t*e}function e2(i,e){let t=1-i;return 3*t*t*i*e}function t2(i,e){return 3*(1-i)*i*i*e}function n2(i,e){return i*i*i*e}function eo(i,e,t,n,r){return QI(i,e)+e2(i,t)+t2(i,n)+n2(i,r)}var wo=class extends cn{constructor(e=new $,t=new $,n=new $,r=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new $){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(eo(e,r.x,s.x,o.x,a.x),eo(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pc=class extends cn{constructor(e=new C,t=new C,n=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new C){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(eo(e,r.x,s.x,o.x,a.x),eo(e,r.y,s.y,o.y,a.y),eo(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},To=class extends cn{constructor(e=new $,t=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lc=class extends cn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Co=class extends cn{constructor(e=new $,t=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new $){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Qs(e,r.x,s.x,o.x),Qs(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ro=class extends cn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Qs(e,r.x,s.x,o.x),Qs(e,r.y,s.y,o.y),Qs(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Po=class extends cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(hx(a,c.x,l.x,u.x,h.x),hx(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new $().fromArray(r))}return this}},Ic=Object.freeze({__proto__:null,ArcCurve:Cc,CatmullRomCurve3:Rc,CubicBezierCurve:wo,CubicBezierCurve3:Pc,EllipseCurve:os,LineCurve:To,LineCurve3:Lc,QuadraticBezierCurve:Co,QuadraticBezierCurve3:Ro,SplineCurve:Po}),Uc=class extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ic[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Ic[r.type]().fromJSON(r))}return this}},ir=class extends Uc{constructor(e){super(),this.type="Path",this.currentPoint=new $,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new To(this.currentPoint.clone(),new $(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new Co(this.currentPoint.clone(),new $(e,t),new $(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new wo(this.currentPoint.clone(),new $(e,t),new $(n,r),new $(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Po(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,s,o,a,c),this}absellipse(e,t,n,r,s,o,a,c){let l=new os(e,t,n,r,s,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},rr=class extends Ve{constructor(e=[new $(0,-.5),new $(.5,0),new $(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=_t(r,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],u=1/t,h=new C,d=new $,f=new C,m=new C,_=new C,g=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let y=0;y<=t;y++){let x=n+y*u*r,M=Math.sin(x),P=Math.cos(x);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*M,h.y=e[E].y,h.z=e[E].x*P,o.push(h.x,h.y,h.z),d.x=y/t,d.y=E/(e.length-1),a.push(d.x,d.y);let R=c[3*E+0]*M,D=c[3*E+1],b=c[3*E+0]*P;l.push(R,D,b)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){let M=x+y*e.length,P=M,E=M+e.length,R=M+e.length+1,D=M+1;s.push(P,E,D),s.push(R,D,E)}this.setIndex(s),this.setAttribute("position",new Me(o,3)),this.setAttribute("uv",new Me(a,2)),this.setAttribute("normal",new Me(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.points,e.segments,e.phiStart,e.phiLength)}},as=class extends rr{constructor(e=1,t=1,n=4,r=8){let s=new ir;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new as(e.radius,e.length,e.capSegments,e.radialSegments)}},cs=class extends Ve{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],c=[],l=new C,u=new $;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.radius,e.segments,e.thetaStart,e.thetaLength)}},wi=class extends Ve{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],d=[],f=[],m=0,_=[],g=n/2,p=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(f,2));function y(){let M=new C,P=new C,E=0,R=(t-e)/n;for(let D=0;D<=s;D++){let b=[],w=D/s,O=w*(t-e)+e;for(let W=0;W<=r;W++){let se=W/r,U=se*c+a,B=Math.sin(U),H=Math.cos(U);P.x=O*B,P.y=-w*n+g,P.z=O*H,h.push(P.x,P.y,P.z),M.set(B,R,H).normalize(),d.push(M.x,M.y,M.z),f.push(se,1-w),b.push(m++)}_.push(b)}for(let D=0;D<r;D++)for(let b=0;b<s;b++){let w=_[b][D],O=_[b+1][D],W=_[b+1][D+1],se=_[b][D+1];u.push(w,O,se),u.push(O,W,se),E+=6}l.addGroup(p,E,0),p+=E}function x(M){let P=m,E=new $,R=new C,D=0,b=M===!0?e:t,w=M===!0?1:-1;for(let W=1;W<=r;W++)h.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),m++;let O=m;for(let W=0;W<=r;W++){let U=W/r*c+a,B=Math.cos(U),H=Math.sin(U);R.x=b*H,R.y=g*w,R.z=b*B,h.push(R.x,R.y,R.z),d.push(0,w,0),E.x=B*.5+.5,E.y=H*.5*w+.5,f.push(E.x,E.y),m++}for(let W=0;W<r;W++){let se=P+W,U=O+W;M===!0?u.push(U,U+1,se):u.push(U+1,U,se),D+=3}l.addGroup(p,D,M===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ls=class extends wi{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ls(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},On=class extends Ve{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],o=[];a(r),l(n),u(),this.setAttribute("position",new Me(s,3)),this.setAttribute("normal",new Me(s.slice(),3)),this.setAttribute("uv",new Me(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let x=new C,M=new C,P=new C;for(let E=0;E<t.length;E+=3)f(t[E+0],x),f(t[E+1],M),f(t[E+2],P),c(x,M,P,y)}function c(y,x,M,P){let E=P+1,R=[];for(let D=0;D<=E;D++){R[D]=[];let b=y.clone().lerp(M,D/E),w=x.clone().lerp(M,D/E),O=E-D;for(let W=0;W<=O;W++)W===0&&D===E?R[D][W]=b:R[D][W]=b.clone().lerp(w,W/O)}for(let D=0;D<E;D++)for(let b=0;b<2*(E-D)-1;b++){let w=Math.floor(b/2);b%2===0?(d(R[D][w+1]),d(R[D+1][w]),d(R[D][w])):(d(R[D][w+1]),d(R[D+1][w+1]),d(R[D+1][w]))}}function l(y){let x=new C;for(let M=0;M<s.length;M+=3)x.x=s[M+0],x.y=s[M+1],x.z=s[M+2],x.normalize().multiplyScalar(y),s[M+0]=x.x,s[M+1]=x.y,s[M+2]=x.z}function u(){let y=new C;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];let M=g(y)/2/Math.PI+.5,P=p(y)/Math.PI+.5;o.push(M,1-P)}m(),h()}function h(){for(let y=0;y<o.length;y+=6){let x=o[y+0],M=o[y+2],P=o[y+4],E=Math.max(x,M,P),R=Math.min(x,M,P);E>.9&&R<.1&&(x<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),P<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,x){let M=y*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function m(){let y=new C,x=new C,M=new C,P=new C,E=new $,R=new $,D=new $;for(let b=0,w=0;b<s.length;b+=9,w+=6){y.set(s[b+0],s[b+1],s[b+2]),x.set(s[b+3],s[b+4],s[b+5]),M.set(s[b+6],s[b+7],s[b+8]),E.set(o[w+0],o[w+1]),R.set(o[w+2],o[w+3]),D.set(o[w+4],o[w+5]),P.copy(y).add(x).add(M).divideScalar(3);let O=g(P);_(E,w+0,y,O),_(R,w+2,x,O),_(D,w+4,M,O)}}function _(y,x,M,P){P<0&&y.x===1&&(o[x]=y.x-1),M.x===0&&M.z===0&&(o[x]=P/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.vertices,e.indices,e.radius,e.details)}},us=class extends On{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new us(e.radius,e.detail)}},qa=new C,Xa=new C,yh=new C,Ya=new Vt,Dc=class extends Ve{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Ki*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let m=0;m<c;m+=3){o?(l[0]=o.getX(m),l[1]=o.getX(m+1),l[2]=o.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);let{a:_,b:g,c:p}=Ya;if(_.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Ya.getNormal(yh),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){let x=(y+1)%3,M=h[y],P=h[x],E=Ya[u[y]],R=Ya[u[x]],D=`${M}_${P}`,b=`${P}_${M}`;b in d&&d[b]?(yh.dot(d[b].normal)<=s&&(f.push(E.x,E.y,E.z),f.push(R.x,R.y,R.z)),d[b]=null):D in d||(d[D]={index0:l[y],index1:l[x],normal:yh.clone()})}}for(let m in d)if(d[m]){let{index0:_,index1:g}=d[m];qa.fromBufferAttribute(a,_),Xa.fromBufferAttribute(a,g),f.push(qa.x,qa.y,qa.z),f.push(Xa.x,Xa.y,Xa.z)}this.setAttribute("position",new Me(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ni=class extends ir{constructor(e){super(e),this.uuid=on(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new ir().fromJSON(r))}return this}},i2={triangulate:function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Ky(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,d,f;if(n&&(s=c2(i,e,s,t)),i.length>80*t){a=l=i[0],c=u=i[1];for(let m=t;m<r;m+=t)h=i[m],d=i[m+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Lo(s,o,t,a,c,f,0),o}};function Ky(i,e,t,n,r){let s,o;if(r===y2(i,e,t,n)>0)for(s=e;s<t;s+=n)o=dx(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=dx(s,i[s],i[s+1],o);return o&&pl(o,o.next)&&(Uo(o),o=o.next),o}function sr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(pl(t,t.next)||dt(t.prev,t,t.next)===0)){if(Uo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Lo(i,e,t,n,r,s,o){if(!i)return;!o&&s&&f2(i,n,r,s);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?s2(i,n,r,s):r2(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Uo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=o2(sr(i),e,t),Lo(i,e,t,n,r,s,2)):o===2&&a2(i,e,t,n,r,s):Lo(sr(i),e,t,n,r,s,1);break}}}function r2(i){let e=i.prev,t=i,n=i.next;if(dt(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=r<s?r<o?r:o:s<o?s:o,h=a<c?a<l?a:l:c<l?c:l,d=r>s?r>o?r:o:s>o?s:o,f=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&Wr(r,a,s,c,o,l,m.x,m.y)&&dt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function s2(i,e,t,n){let r=i.prev,s=i,o=i.next;if(dt(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,u=r.y,h=s.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=u<h?u<d?u:d:h<d?h:d,_=a>c?a>l?a:l:c>l?c:l,g=u>h?u>d?u:d:h>d?h:d,p=Rd(f,m,e,t,n),y=Rd(_,g,e,t,n),x=i.prevZ,M=i.nextZ;for(;x&&x.z>=p&&M&&M.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==r&&x!==o&&Wr(a,u,c,h,l,d,x.x,x.y)&&dt(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=_&&M.y>=m&&M.y<=g&&M!==r&&M!==o&&Wr(a,u,c,h,l,d,M.x,M.y)&&dt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==r&&x!==o&&Wr(a,u,c,h,l,d,x.x,x.y)&&dt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=_&&M.y>=m&&M.y<=g&&M!==r&&M!==o&&Wr(a,u,c,h,l,d,M.x,M.y)&&dt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function o2(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!pl(r,s)&&jy(r,n,n.next,s)&&Io(r,s)&&Io(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Uo(n),Uo(n.next),n=i=s),n=n.next}while(n!==i);return sr(n)}function a2(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&g2(o,a)){let c=Qy(o,a);o=sr(o,o.next),c=sr(c,c.next),Lo(o,e,t,n,r,s,0),Lo(c,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function c2(i,e,t,n){let r=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:i.length,l=Ky(i,a,c,n,!1),l===l.next&&(l.steiner=!0),r.push(m2(l));for(r.sort(l2),s=0;s<r.length;s++)t=u2(r[s],t);return t}function l2(i,e){return i.x-e.x}function u2(i,e){let t=h2(i,e);if(!t)return e;let n=Qy(t,i);return sr(n,n.next),sr(t,t.next)}function h2(i,e){let t=e,n=-1/0,r,s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;let a=r,c=r.x,l=r.y,u=1/0,h;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&Wr(o<l?s:n,o,c,l,o<l?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Io(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&d2(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function d2(i,e){return dt(i.prev,i,e.prev)<0&&dt(e.next,i,i.next)<0}function f2(i,e,t,n){let r=i;do r.z===0&&(r.z=Rd(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,p2(r)}function p2(i){let e,t,n,r,s,o,a,c,l=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,l*=2}while(o>1);return i}function Rd(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function m2(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Wr(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function g2(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!_2(i,e)&&(Io(i,e)&&Io(e,i)&&x2(i,e)&&(dt(i.prev,i,e.prev)||dt(i,e.prev,e))||pl(i,e)&&dt(i.prev,i,i.next)>0&&dt(e.prev,e,e.next)>0)}function dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function pl(i,e){return i.x===e.x&&i.y===e.y}function jy(i,e,t,n){let r=Za(dt(i,e,t)),s=Za(dt(i,e,n)),o=Za(dt(t,n,i)),a=Za(dt(t,n,e));return!!(r!==s&&o!==a||r===0&&$a(i,t,e)||s===0&&$a(i,n,e)||o===0&&$a(t,i,n)||a===0&&$a(t,e,n))}function $a(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Za(i){return i>0?1:i<0?-1:0}function _2(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&jy(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Io(i,e){return dt(i.prev,i,i.next)<0?dt(i,e,i.next)>=0&&dt(i,i.prev,e)>=0:dt(i,e,i.prev)<0||dt(i,i.next,e)<0}function x2(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Qy(i,e){let t=new Pd(i.i,i.x,i.y),n=new Pd(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function dx(i,e,t,n){let r=new Pd(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Uo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pd(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function y2(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var pn=class{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return pn.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];fx(e),px(n,e);let o=e.length;t.forEach(fx);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,px(n,t[c]);let a=i2.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function fx(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function px(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var hs=class extends Ve{constructor(e=new ni([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Me(r,3)),this.setAttribute("uv",new Me(s,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:v2,x,M=!1,P,E,R,D;p&&(x=p.getSpacedPoints(u),M=!0,d=!1,P=p.computeFrenetFrames(u,!1),E=new C,R=new C,D=new C),d||(g=0,f=0,m=0,_=0);let b=a.extractPoints(l),w=b.shape,O=b.holes;if(!pn.isClockWise(w)){w=w.reverse();for(let L=0,ae=O.length;L<ae;L++){let Y=O[L];pn.isClockWise(Y)&&(O[L]=Y.reverse())}}let se=pn.triangulateShape(w,O),U=w;for(let L=0,ae=O.length;L<ae;L++){let Y=O[L];w=w.concat(Y)}function B(L,ae,Y){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(ae,Y)}let H=w.length,J=se.length;function Z(L,ae,Y){let oe,X,Te,_e=L.x-ae.x,A=L.y-ae.y,S=Y.x-L.x,F=Y.y-L.y,re=_e*_e+A*A,ee=_e*F-A*S;if(Math.abs(ee)>Number.EPSILON){let j=Math.sqrt(re),be=Math.sqrt(S*S+F*F),he=ae.x-A/j,ve=ae.y+_e/j,Re=Y.x-F/be,He=Y.y+S/be,te=((Re-he)*F-(He-ve)*S)/(_e*F-A*S);oe=he+_e*te-L.x,X=ve+A*te-L.y;let tt=oe*oe+X*X;if(tt<=2)return new $(oe,X);Te=Math.sqrt(tt/2)}else{let j=!1;_e>Number.EPSILON?S>Number.EPSILON&&(j=!0):_e<-Number.EPSILON?S<-Number.EPSILON&&(j=!0):Math.sign(A)===Math.sign(F)&&(j=!0),j?(oe=-A,X=_e,Te=Math.sqrt(re)):(oe=_e,X=A,Te=Math.sqrt(re/2))}return new $(oe/Te,X/Te)}let q=[];for(let L=0,ae=U.length,Y=ae-1,oe=L+1;L<ae;L++,Y++,oe++)Y===ae&&(Y=0),oe===ae&&(oe=0),q[L]=Z(U[L],U[Y],U[oe]);let ne=[],ie,pe=q.concat();for(let L=0,ae=O.length;L<ae;L++){let Y=O[L];ie=[];for(let oe=0,X=Y.length,Te=X-1,_e=oe+1;oe<X;oe++,Te++,_e++)Te===X&&(Te=0),_e===X&&(_e=0),ie[oe]=Z(Y[oe],Y[Te],Y[_e]);ne.push(ie),pe=pe.concat(ie)}for(let L=0;L<g;L++){let ae=L/g,Y=f*Math.cos(ae*Math.PI/2),oe=m*Math.sin(ae*Math.PI/2)+_;for(let X=0,Te=U.length;X<Te;X++){let _e=B(U[X],q[X],oe);ye(_e.x,_e.y,-Y)}for(let X=0,Te=O.length;X<Te;X++){let _e=O[X];ie=ne[X];for(let A=0,S=_e.length;A<S;A++){let F=B(_e[A],ie[A],oe);ye(F.x,F.y,-Y)}}}let G=m+_;for(let L=0;L<H;L++){let ae=d?B(w[L],pe[L],G):w[L];M?(R.copy(P.normals[0]).multiplyScalar(ae.x),E.copy(P.binormals[0]).multiplyScalar(ae.y),D.copy(x[0]).add(R).add(E),ye(D.x,D.y,D.z)):ye(ae.x,ae.y,0)}for(let L=1;L<=u;L++)for(let ae=0;ae<H;ae++){let Y=d?B(w[ae],pe[ae],G):w[ae];M?(R.copy(P.normals[L]).multiplyScalar(Y.x),E.copy(P.binormals[L]).multiplyScalar(Y.y),D.copy(x[L]).add(R).add(E),ye(D.x,D.y,D.z)):ye(Y.x,Y.y,h/u*L)}for(let L=g-1;L>=0;L--){let ae=L/g,Y=f*Math.cos(ae*Math.PI/2),oe=m*Math.sin(ae*Math.PI/2)+_;for(let X=0,Te=U.length;X<Te;X++){let _e=B(U[X],q[X],oe);ye(_e.x,_e.y,h+Y)}for(let X=0,Te=O.length;X<Te;X++){let _e=O[X];ie=ne[X];for(let A=0,S=_e.length;A<S;A++){let F=B(_e[A],ie[A],oe);M?ye(F.x,F.y+x[u-1].y,x[u-1].x+Y):ye(F.x,F.y,h+Y)}}}Q(),me();function Q(){let L=r.length/3;if(d){let ae=0,Y=H*ae;for(let oe=0;oe<J;oe++){let X=se[oe];Ue(X[2]+Y,X[1]+Y,X[0]+Y)}ae=u+g*2,Y=H*ae;for(let oe=0;oe<J;oe++){let X=se[oe];Ue(X[0]+Y,X[1]+Y,X[2]+Y)}}else{for(let ae=0;ae<J;ae++){let Y=se[ae];Ue(Y[2],Y[1],Y[0])}for(let ae=0;ae<J;ae++){let Y=se[ae];Ue(Y[0]+H*u,Y[1]+H*u,Y[2]+H*u)}}n.addGroup(L,r.length/3-L,0)}function me(){let L=r.length/3,ae=0;Ee(U,ae),ae+=U.length;for(let Y=0,oe=O.length;Y<oe;Y++){let X=O[Y];Ee(X,ae),ae+=X.length}n.addGroup(L,r.length/3-L,1)}function Ee(L,ae){let Y=L.length;for(;--Y>=0;){let oe=Y,X=Y-1;X<0&&(X=L.length-1);for(let Te=0,_e=u+g*2;Te<_e;Te++){let A=H*Te,S=H*(Te+1),F=ae+oe+A,re=ae+X+A,ee=ae+X+S,j=ae+oe+S;Be(F,re,ee,j)}}}function ye(L,ae,Y){c.push(L),c.push(ae),c.push(Y)}function Ue(L,ae,Y){Ae(L),Ae(ae),Ae(Y);let oe=r.length/3,X=y.generateTopUV(n,r,oe-3,oe-2,oe-1);Oe(X[0]),Oe(X[1]),Oe(X[2])}function Be(L,ae,Y,oe){Ae(L),Ae(ae),Ae(oe),Ae(ae),Ae(Y),Ae(oe);let X=r.length/3,Te=y.generateSideWallUV(n,r,X-6,X-3,X-2,X-1);Oe(Te[0]),Oe(Te[1]),Oe(Te[3]),Oe(Te[1]),Oe(Te[2]),Oe(Te[3])}function Ae(L){r.push(c[L*3+0]),r.push(c[L*3+1]),r.push(c[L*3+2])}function Oe(L){s.push(L.x),s.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return M2(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ic[r.type]().fromJSON(r)),new hs(n,e.options)}},v2={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[r*3],u=e[r*3+1];return[new $(s,o),new $(a,c),new $(l,u)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[r*3],f=e[r*3+1],m=e[r*3+2],_=e[s*3],g=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new $(o,1-c),new $(l,1-h),new $(d,1-m),new $(_,1-p)]:[new $(a,1-c),new $(u,1-h),new $(f,1-m),new $(g,1-p)]}};function M2(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ds=class extends On{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ds(e.radius,e.detail)}},or=class extends On{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new or(e.radius,e.detail)}},fs=class extends Ve{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],c=[],l=[],u=[],h=e,d=(t-e)/r,f=new C,m=new $;for(let _=0;_<=r;_++){for(let g=0;g<=n;g++){let p=s+g/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let _=0;_<r;_++){let g=_*(n+1);for(let p=0;p<n;p++){let y=p+g,x=y,M=y+n+1,P=y+n+2,E=y+1;a.push(x,M,E),a.push(M,P,E)}}this.setIndex(a),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ps=class extends Ve{constructor(e=new ni([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(s,3)),this.setAttribute("uv",new Me(o,2));function l(u){let h=r.length/3,d=u.extractPoints(t),f=d.shape,m=d.holes;pn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let y=m[g];pn.isClockWise(y)===!0&&(m[g]=y.reverse())}let _=pn.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let y=m[g];f=f.concat(y)}for(let g=0,p=f.length;g<p;g++){let y=f[g];r.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let g=0,p=_.length;g<p;g++){let y=_[g],x=y[0]+h,M=y[1]+h,P=y[2]+h;n.push(x,M,P),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return S2(t,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];n.push(o)}return new ps(n,e.curveSegments)}};function S2(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}var ar=class extends Ve{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new C,d=new C,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let y=[],x=p/n,M=0;p===0&&o===0?M=.5/t:p===n&&c===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){let E=P/t;h.x=-e*Math.cos(r+E*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+E*s)*Math.sin(o+x*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(E+M,1-x),y.push(l++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let x=u[p][y+1],M=u[p][y],P=u[p+1][y],E=u[p+1][y+1];(p!==0||o>0)&&f.push(x,M,E),(p!==n-1||c<Math.PI)&&f.push(M,P,E)}this.setIndex(f),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ms=class extends On{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ms(e.radius,e.detail)}},gs=class extends Ve{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],c=[],l=[],u=new C,h=new C,d=new C;for(let f=0;f<=n;f++)for(let m=0;m<=r;m++){let _=m/r*s,g=f/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(_),h.y=(e+t*Math.cos(g))*Math.sin(_),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(m/r),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=r;m++){let _=(r+1)*f+m-1,g=(r+1)*(f-1)+m-1,p=(r+1)*(f-1)+m,y=(r+1)*f+m;o.push(_,g,y),o.push(g,p,y)}this.setIndex(o),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},_s=class extends Ve{constructor(e=1,t=.4,n=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:o},n=Math.floor(n),r=Math.floor(r);let a=[],c=[],l=[],u=[],h=new C,d=new C,f=new C,m=new C,_=new C,g=new C,p=new C;for(let x=0;x<=n;++x){let M=x/n*s*Math.PI*2;y(M,s,o,e,f),y(M+.01,s,o,e,m),g.subVectors(m,f),p.addVectors(m,f),_.crossVectors(g,p),p.crossVectors(_,g),_.normalize(),p.normalize();for(let P=0;P<=r;++P){let E=P/r*Math.PI*2,R=-t*Math.cos(E),D=t*Math.sin(E);h.x=f.x+(R*p.x+D*_.x),h.y=f.y+(R*p.y+D*_.y),h.z=f.z+(R*p.z+D*_.z),c.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),l.push(d.x,d.y,d.z),u.push(x/n),u.push(P/r)}}for(let x=1;x<=n;x++)for(let M=1;M<=r;M++){let P=(r+1)*(x-1)+(M-1),E=(r+1)*x+(M-1),R=(r+1)*x+M,D=(r+1)*(x-1)+M;a.push(P,E,D),a.push(E,R,D)}this.setIndex(a),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(u,2));function y(x,M,P,E,R){let D=Math.cos(x),b=Math.sin(x),w=P/M*x,O=Math.cos(w);R.x=E*(2+O)*.5*D,R.y=E*(2+O)*b*.5,R.z=E*Math.sin(w)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},xs=class extends Ve{constructor(e=new Ro(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,c=new C,l=new $,u=new C,h=[],d=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(f,2));function _(){for(let x=0;x<t;x++)g(x);g(s===!1?t:0),y(),p()}function g(x){u=e.getPointAt(x/t,u);let M=o.normals[x],P=o.binormals[x];for(let E=0;E<=r;E++){let R=E/r*Math.PI*2,D=Math.sin(R),b=-Math.cos(R);c.x=b*M.x+D*P.x,c.y=b*M.y+D*P.y,c.z=b*M.z+D*P.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=t;x++)for(let M=1;M<=r;M++){let P=(r+1)*(x-1)+(M-1),E=(r+1)*x+(M-1),R=(r+1)*x+M,D=(r+1)*(x-1)+M;m.push(P,E,D),m.push(E,R,D)}}function y(){for(let x=0;x<=t;x++)for(let M=0;M<=r;M++)l.x=x/t,l.y=M/r,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new xs(new Ic[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Nc=class extends Ve{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new C,s=new C;if(e.index!==null){let o=e.attributes.position,a=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let h=c[l],d=h.start,f=h.count;for(let m=d,_=d+f;m<_;m+=3)for(let g=0;g<3;g++){let p=a.getX(m+g),y=a.getX(m+(g+1)%3);r.fromBufferAttribute(o,p),s.fromBufferAttribute(o,y),mx(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let u=3*a+l,h=3*a+(l+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),mx(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Me(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function mx(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}var gx=Object.freeze({__proto__:null,BoxGeometry:si,CapsuleGeometry:as,CircleGeometry:cs,ConeGeometry:ls,CylinderGeometry:wi,DodecahedronGeometry:us,EdgesGeometry:Dc,ExtrudeGeometry:hs,IcosahedronGeometry:ds,LatheGeometry:rr,OctahedronGeometry:or,PlaneGeometry:nr,PolyhedronGeometry:On,RingGeometry:fs,ShapeGeometry:ps,SphereGeometry:ar,TetrahedronGeometry:ms,TorusGeometry:gs,TorusKnotGeometry:_s,TubeGeometry:xs,WireframeGeometry:Nc}),Oc=class extends Ut{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ge(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Fc=class extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Do=class extends Ut{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ci,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bc=class extends Do{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},zc=class extends Ut{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ge(16777215),this.specular=new ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ci,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},kc=class extends Ut{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ge(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ci,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vc=class extends Ut{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ci,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Hc=class extends Ut{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ci,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gc=class extends Ut{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ge(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ci,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wc=class extends Nt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Zi(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ev(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function tv(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Ld(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=i[a+c]}return r}function Of(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}function b2(i,e,t,n,r=30){let s=i.clone();s.name=e;let o=[];for(let c=0;c<s.tracks.length;++c){let l=s.tracks[c],u=l.getValueSize(),h=[],d=[];for(let f=0;f<l.times.length;++f){let m=l.times[f]*r;if(!(m<t||m>=n)){h.push(l.times[f]);for(let _=0;_<u;++_)d.push(l.values[f*u+_])}}h.length!==0&&(l.times=Zi(h,l.times.constructor),l.values=Zi(d,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s}function E2(i,e=0,t=i,n=30){n<=0&&(n=30);let r=t.tracks.length,s=e/n;for(let o=0;o<r;++o){let a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;let l=i.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===c});if(l===void 0)continue;let u=0,h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0,f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let m=a.times.length-1,_;if(s<=a.times[0]){let p=u,y=h-u;_=a.values.slice(p,y)}else if(s>=a.times[m]){let p=m*h+u,y=p+h-u;_=a.values.slice(p,y)}else{let p=a.createInterpolant(),y=u,x=h-u;p.evaluate(s),_=p.resultBuffer.slice(y,x)}c==="quaternion"&&new Gt().fromArray(_).normalize().conjugate().toArray(_);let g=l.times.length;for(let p=0;p<g;++p){let y=p*f+d;if(c==="quaternion")Gt.multiplyQuaternionsFlat(l.values,y,_,0,l.values,y);else{let x=f-d*2;for(let M=0;M<x;++M)l.values[y+M]-=_[M]}}}return i.blendMode=Pf,i}var A2={convertArray:Zi,isTypedArray:ev,getKeyframeOrder:tv,sortedArray:Ld,flattenJSON:Of,subclip:b2,makeClipAdditive:E2},cr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qc=class extends cr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yi,endingEnd:Yi}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case $i:s=e,a=2*t-n;break;case co:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $i:o=e,c=2*n-t;break;case co:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(r-t),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,y=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,x=(-1-f)*g+(1.5+f)*_+.5*m,M=f*g-f*_;for(let P=0;P!==a;++P)s[P]=p*o[u+P]+y*o[l+P]+x*o[c+P]+M*o[h+P];return s}},No=class extends cr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[l+d]*h+o[c+d]*u;return s}},Xc=class extends cr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ln=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zi(t,this.TimeBufferType),this.values=Zi(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zi(e.times,Array),values:Zi(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new No(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case oo:t=this.InterpolantFactoryMethodDiscrete;break;case ao:t=this.InterpolantFactoryMethodLinear;break;case cc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return ao;case this.InterpolantFactoryMethodSmooth:return cc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&ev(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===cc,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){let _=t[h+m];if(_!==t[d+m]||_!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=ao;var ai=class extends ln{};ai.prototype.ValueTypeName="bool";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=oo;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends ln{};Oo.prototype.ValueTypeName="color";var lr=class extends ln{};lr.prototype.ValueTypeName="number";var Yc=class extends cr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Gt.slerpFlat(s,0,o,l-a,o,l,c);return s}},Ti=class extends ln{InterpolantFactoryMethodLinear(e){return new Yc(this.times,this.values,this.getValueSize(),e)}};Ti.prototype.ValueTypeName="quaternion";Ti.prototype.DefaultInterpolation=ao;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var ci=class extends ln{};ci.prototype.ValueTypeName="string";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=oo;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ur=class extends ln{};ur.prototype.ValueTypeName="vector";var hr=class{constructor(e,t=-1,n,r=hl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=on(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(T2(n[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(ln.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);let u=tv(c);c=Ld(c,1,u),l=Ld(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new lr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(s);if(u&&u.length>1){let h=u[1],d=r[h];d||(r[h]=d=[]),d.push(l)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,m,_){if(f.length!==0){let g=[],p=[];Of(f,g,p,m),g.length!==0&&_.push(new h(d,g,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(let _ in f){let g=[],p=[];for(let y=0;y!==d[m].morphTargets.length;++y){let x=d[m];g.push(x.time),p.push(x.morphTarget===_?1:0)}r.push(new lr(".morphTargetInfluence["+_+"]",g,p))}c=f.length*o}else{let f=".bones["+t[h].name+"]";n(ur,f+".position",d,"pos",r),n(Ti,f+".quaternion",d,"rot",r),n(ur,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function w2(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return lr;case"vector":case"vector2":case"vector3":case"vector4":return ur;case"color":return Oo;case"quaternion":return Ti;case"bool":case"boolean":return ai;case"string":return ci}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function T2(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=w2(i.type);if(i.times===void 0){let t=[],n=[];Of(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Kn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Fo=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],m=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}},nv=new Fo,Wt=class{constructor(e){this.manager=e!==void 0?e:nv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Wt.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yn={},Id=class extends Error{constructor(e,t){super(e),this.response=t}},Tn=class extends Wt{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Kn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Yn[e]!==void 0){Yn[e].push({onLoad:t,onProgress:n,onError:r});return}Yn[e]=[],Yn[e].push({onLoad:t,onProgress:n,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Yn[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0,_=0,g=new ReadableStream({start(p){y();function y(){h.read().then(({done:x,value:M})=>{if(x)p.close();else{_+=M.byteLength;let P=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let E=0,R=u.length;E<R;E++){let D=u[E];D.onProgress&&D.onProgress(P)}p.enqueue(M),y()}})}}});return new Response(g)}else throw new Id(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Kn.add(e,l);let u=Yn[e];delete Yn[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=Yn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Yn[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},Ud=class extends Wt{constructor(e){super(e)}load(e,t,n,r){let s=this,o=new Tn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}parse(e){let t=[];for(let n=0;n<e.length;n++){let r=hr.parse(e[n]);t.push(r)}return t}},Dd=class extends Wt{constructor(e){super(e)}load(e,t,n,r){let s=this,o=[],a=new ss,c=new Tn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(s.withCredentials);let l=0;function u(h){c.load(e[h],function(d){let f=s.parse(d,!0);o[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(a.minFilter=Mt),a.image=o,a.format=f.format,a.needsUpdate=!0,t&&t(a))},n,r)}if(Array.isArray(e))for(let h=0,d=e.length;h<d;++h)u(h);else c.load(e,function(h){let d=s.parse(h,!0);if(d.isCubemap){let f=d.mipmaps.length/d.mipmapCount;for(let m=0;m<f;m++){o[m]={mipmaps:[]};for(let _=0;_<d.mipmapCount;_++)o[m].mipmaps.push(d.mipmaps[m*d.mipmapCount+_]),o[m].format=d.format,o[m].width=d.width,o[m].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=Mt),a.format=d.format,a.needsUpdate=!0,t&&t(a)},n,r);return a}},dr=class extends Wt{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Kn.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=po("img");function c(){u(),Kn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},Nd=class extends Wt{constructor(e){super(e)}load(e,t,n,r){let s=new er;s.colorSpace=At;let o=new dr(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(u){s.images[l]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let l=0;l<e.length;++l)c(l);return s}},Od=class extends Wt{constructor(e){super(e)}load(e,t,n,r){let s=this,o=new ti,a=new Tn(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(c){let l;try{l=s.parse(c)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:Ht,o.wrapT=l.wrapT!==void 0?l.wrapT:Ht,o.magFilter=l.magFilter!==void 0?l.magFilter:Mt,o.minFilter=l.minFilter!==void 0?l.minFilter:Mt,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0?o.colorSpace=l.colorSpace:l.encoding!==void 0&&(o.encoding=l.encoding),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=bi),l.mipmapCount===1&&(o.minFilter=Mt),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,r),o}},Fd=class extends Wt{constructor(e){super(e)}load(e,t,n,r){let s=new ft,o=new dr(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Fn=class extends et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},$c=class extends Fn{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},vh=new Le,_x=new C,xx=new C,Bo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tr,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;_x.setFromMatrixPosition(e.matrixWorld),t.position.copy(_x),xx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xx),t.updateMatrixWorld(),vh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Bd=class extends Bo{constructor(){super(new wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Zr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Zc=class extends Fn{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(et.DEFAULT_UP),this.updateMatrix(),this.target=new et,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Bd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},yx=new Le,Ys=new C,Mh=new C,zd=class extends Bo{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ys.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ys),Mh.copy(n.position),Mh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Mh),n.updateMatrixWorld(),r.makeTranslation(-Ys.x,-Ys.y,-Ys.z),yx.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yx)}},Jc=class extends Fn{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new zd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},kd=class extends Bo{constructor(){super(new es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kc=class extends Fn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(et.DEFAULT_UP),this.updateMatrix(),this.target=new et,this.shadow=new kd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},jc=class extends Fn{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Qc=class extends Fn{constructor(e,t,n=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},el=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new C)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){let n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){let n=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-r*r)}},tl=class extends Fn{constructor(e=new el,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},ys=class extends Wt{constructor(e){super(e),this.textures={}}load(e,t,n,r){let s=this,o=new Tn(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}parse(e){let t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}let r=ys.createMaterialFromType(e.type);if(e.uuid!==void 0&&(r.uuid=e.uuid),e.name!==void 0&&(r.name=e.name),e.color!==void 0&&r.color!==void 0&&r.color.setHex(e.color),e.roughness!==void 0&&(r.roughness=e.roughness),e.metalness!==void 0&&(r.metalness=e.metalness),e.sheen!==void 0&&(r.sheen=e.sheen),e.sheenColor!==void 0&&(r.sheenColor=new ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(r.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(e.emissive),e.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(e.specular),e.specularIntensity!==void 0&&(r.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&r.specularColor!==void 0&&r.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(r.shininess=e.shininess),e.clearcoat!==void 0&&(r.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(r.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(r.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(r.transmission=e.transmission),e.thickness!==void 0&&(r.thickness=e.thickness),e.attenuationDistance!==void 0&&(r.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&r.attenuationColor!==void 0&&r.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(r.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(r.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(r.fog=e.fog),e.flatShading!==void 0&&(r.flatShading=e.flatShading),e.blending!==void 0&&(r.blending=e.blending),e.combine!==void 0&&(r.combine=e.combine),e.side!==void 0&&(r.side=e.side),e.shadowSide!==void 0&&(r.shadowSide=e.shadowSide),e.opacity!==void 0&&(r.opacity=e.opacity),e.transparent!==void 0&&(r.transparent=e.transparent),e.alphaTest!==void 0&&(r.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(r.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(r.depthFunc=e.depthFunc),e.depthTest!==void 0&&(r.depthTest=e.depthTest),e.depthWrite!==void 0&&(r.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(r.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(r.blendSrc=e.blendSrc),e.blendDst!==void 0&&(r.blendDst=e.blendDst),e.blendEquation!==void 0&&(r.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(r.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(r.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(r.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&r.blendColor!==void 0&&r.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(r.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(r.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(r.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(r.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(r.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(r.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(r.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(r.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(r.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(r.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(r.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(r.rotation=e.rotation),e.linewidth!==void 0&&(r.linewidth=e.linewidth),e.dashSize!==void 0&&(r.dashSize=e.dashSize),e.gapSize!==void 0&&(r.gapSize=e.gapSize),e.scale!==void 0&&(r.scale=e.scale),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(r.dithering=e.dithering),e.alphaToCoverage!==void 0&&(r.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(r.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(r.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(r.visible=e.visible),e.toneMapped!==void 0&&(r.toneMapped=e.toneMapped),e.userData!==void 0&&(r.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),e.uniforms!==void 0)for(let s in e.uniforms){let o=e.uniforms[s];switch(r.uniforms[s]={},o.type){case"t":r.uniforms[s].value=n(o.value);break;case"c":r.uniforms[s].value=new ge().setHex(o.value);break;case"v2":r.uniforms[s].value=new $().fromArray(o.value);break;case"v3":r.uniforms[s].value=new C().fromArray(o.value);break;case"v4":r.uniforms[s].value=new nt().fromArray(o.value);break;case"m3":r.uniforms[s].value=new ke().fromArray(o.value);break;case"m4":r.uniforms[s].value=new Le().fromArray(o.value);break;default:r.uniforms[s].value=o.value}}if(e.defines!==void 0&&(r.defines=e.defines),e.vertexShader!==void 0&&(r.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(r.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(r.glslVersion=e.glslVersion),e.extensions!==void 0)for(let s in e.extensions)r.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(r.lights=e.lights),e.clipping!==void 0&&(r.clipping=e.clipping),e.size!==void 0&&(r.size=e.size),e.sizeAttenuation!==void 0&&(r.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(r.map=n(e.map)),e.matcap!==void 0&&(r.matcap=n(e.matcap)),e.alphaMap!==void 0&&(r.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(r.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(r.bumpScale=e.bumpScale),e.normalMap!==void 0&&(r.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(r.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),r.normalScale=new $().fromArray(s)}return e.displacementMap!==void 0&&(r.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(r.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(r.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(r.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(r.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(r.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(r.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(r.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(r.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(r.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(r.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(r.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(r.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(r.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(r.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(r.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(r.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(r.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(r.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(r.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new $().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(r.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(r.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(r.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(r.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(r.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(r.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(r.sheenRoughnessMap=n(e.sheenRoughnessMap)),r}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){let t={ShadowMaterial:Oc,SpriteMaterial:bo,RawShaderMaterial:Fc,ShaderMaterial:mn,PointsMaterial:Ao,MeshPhysicalMaterial:Bc,MeshStandardMaterial:Do,MeshPhongMaterial:zc,MeshToonMaterial:kc,MeshNormalMaterial:Vc,MeshLambertMaterial:Hc,MeshDepthMaterial:Mo,MeshDistanceMaterial:So,MeshBasicMaterial:Dn,MeshMatcapMaterial:Gc,LineDashedMaterial:Wc,LineBasicMaterial:Nt,Material:Ut};return new t[e]}},zo=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},nl=class extends Ve{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},il=class extends Wt{constructor(e){super(e)}load(e,t,n,r){let s=this,o=new Tn(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}parse(e){let t={},n={};function r(f,m){if(t[m]!==void 0)return t[m];let g=f.interleavedBuffers[m],p=s(f,g.buffer),y=Vr(g.type,p),x=new is(y,g.stride);return x.uuid=g.uuid,t[m]=x,x}function s(f,m){if(n[m]!==void 0)return n[m];let g=f.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}let o=e.isInstancedBufferGeometry?new nl:new Ve,a=e.data.index;if(a!==void 0){let f=Vr(a.type,a.array);o.setIndex(new it(f,1))}let c=e.data.attributes;for(let f in c){let m=c[f],_;if(m.isInterleavedBufferAttribute){let g=r(e.data,m.data);_=new oi(g,m.itemSize,m.offset,m.normalized)}else{let g=Vr(m.type,m.array),p=m.isInstancedBufferAttribute?Ai:it;_=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(_.name=m.name),m.usage!==void 0&&_.setUsage(m.usage),o.setAttribute(f,_)}let l=e.data.morphAttributes;if(l)for(let f in l){let m=l[f],_=[];for(let g=0,p=m.length;g<p;g++){let y=m[g],x;if(y.isInterleavedBufferAttribute){let M=r(e.data,y.data);x=new oi(M,y.itemSize,y.offset,y.normalized)}else{let M=Vr(y.type,y.array);x=new it(M,y.itemSize,y.normalized)}y.name!==void 0&&(x.name=y.name),_.push(x)}o.morphAttributes[f]=_}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let f=0,m=h.length;f!==m;++f){let _=h[f];o.addGroup(_.start,_.count,_.materialIndex)}let d=e.data.boundingSphere;if(d!==void 0){let f=new C;d.center!==void 0&&f.fromArray(d.center),o.boundingSphere=new It(f,d.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}},Vd=class extends Wt{constructor(e){super(e)}load(e,t,n,r){let s=this,o=this.path===""?zo.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;let a=new Tn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(h){r!==void 0&&r(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}let u=l.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){r!==void 0&&r(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(l,t)},n,r)}async loadAsync(e,t){let n=this,r=this.path===""?zo.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;let s=new Tn(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);let o=await s.loadAsync(e,t),a=JSON.parse(o),c=a.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){let n=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,r),o=this.parseImages(e.images,function(){t!==void 0&&t(l)}),a=this.parseTextures(e.textures,o),c=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,c,a,n),u=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,u),t!==void 0){let h=!1;for(let d in o)if(o[d].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(l)}return l}async parseAsync(e){let t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),a=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,a,o,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),c}parseShapes(e){let t={};if(e!==void 0)for(let n=0,r=e.length;n<r;n++){let s=new ni().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){let n={},r={};if(t.traverse(function(s){s.isBone&&(r[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){let a=new rs().fromJSON(e[s],r);n[a.uuid]=a}return n}parseGeometries(e,t){let n={};if(e!==void 0){let r=new il;for(let s=0,o=e.length;s<o;s++){let a,c=e[s];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":a=r.parse(c);break;default:c.type in gx?a=gx[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n}parseMaterials(e,t){let n={},r={};if(e!==void 0){let s=new ys;s.setTextures(t);for(let o=0,a=e.length;o<a;o++){let c=e[o];n[c.uuid]===void 0&&(n[c.uuid]=s.parse(c)),r[c.uuid]=n[c.uuid]}}return r}parseAnimations(e){let t={};if(e!==void 0)for(let n=0;n<e.length;n++){let r=e[n],s=hr.parse(r);t[s.uuid]=s}return t}parseImages(e,t){let n=this,r={},s;function o(c){return n.manager.itemStart(c),s.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){let l=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return o(u)}else return c.data?{data:Vr(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){let c=new Fo(t);s=new dr(c),s.setCrossOrigin(this.crossOrigin);for(let l=0,u=e.length;l<u;l++){let h=e[l],d=h.url;if(Array.isArray(d)){let f=[];for(let m=0,_=d.length;m<_;m++){let g=d[m],p=a(g);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new ti(p.data,p.width,p.height)))}r[h.uuid]=new Jn(f)}else{let f=a(h.url);r[h.uuid]=new Jn(f)}}}return r}async parseImagesAsync(e){let t=this,n={},r;async function s(o){if(typeof o=="string"){let a=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await r.loadAsync(c)}else return o.data?{data:Vr(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){r=new dr(this.manager),r.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){let c=e[o],l=c.url;if(Array.isArray(l)){let u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h],m=await s(f);m!==null&&(m instanceof HTMLImageElement?u.push(m):u.push(new ti(m.data,m.width,m.height)))}n[c.uuid]=new Jn(u)}else{let u=await s(c.url);n[c.uuid]=new Jn(u)}}}return n}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}let r={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){let a=e[s];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let c=t[a.image],l=c.data,u;Array.isArray(l)?(u=new er,l.length===6&&(u.needsUpdate=!0)):(l&&l.data?u=new ti:u=new ft,l&&(u.needsUpdate=!0)),u.source=c,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,C2)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=n(a.wrap[0],vx),u.wrapT=n(a.wrap[1],vx)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.encoding!==void 0&&(u.encoding=a.encoding),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,Mx)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,Mx)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.userData!==void 0&&(u.userData=a.userData),r[a.uuid]=u}return r}parseObject(e,t,n,r,s){let o;function a(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function c(d){if(d!==void 0){if(Array.isArray(d)){let f=[];for(let m=0,_=d.length;m<_;m++){let g=d[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function l(d){return r[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),r[d]}let u,h;switch(e.type){case"Scene":o=new vc,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new ge(e.background):o.background=l(e.background)),e.environment!==void 0&&(o.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new ns(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new ts(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity);break;case"PerspectiveCamera":o=new wt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new es(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new jc(e.color,e.intensity);break;case"DirectionalLight":o=new Kc(e.color,e.intensity);break;case"PointLight":o=new Jc(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new Qc(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new Zc(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":o=new $c(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new tl().fromJSON(e);break;case"SkinnedMesh":u=a(e.geometry),h=c(e.material),o=new bc(u,h),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":u=a(e.geometry),h=c(e.material),o=new St(u,h);break;case"InstancedMesh":u=a(e.geometry),h=c(e.material);let d=e.count,f=e.instanceMatrix,m=e.instanceColor;o=new Ec(u,h,d),o.instanceMatrix=new Ai(new Float32Array(f.array),16),m!==void 0&&(o.instanceColor=new Ai(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":u=a(e.geometry),h=c(e.material),o=new Ac(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,h),o.geometry=u,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._visibility=e.visibility,o._active=e.active,o._bounds=e.bounds.map(_=>{let g=new Dt;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);let p=new It;return p.radius=_.sphereRadius,p.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:p}}),o._maxGeometryCount=e.maxGeometryCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._geometryCount=e.geometryCount,o._matricesTexture=l(e.matricesTexture.uuid);break;case"LOD":o=new Sc;break;case"Line":o=new Nn(a(e.geometry),c(e.material));break;case"LineLoop":o=new wc(a(e.geometry),c(e.material));break;case"LineSegments":o=new gn(a(e.geometry),c(e.material));break;case"PointCloud":case"Points":o=new Tc(a(e.geometry),c(e.material));break;case"Sprite":o=new Mc(c(e.material));break;case"Group":o=new xi;break;case"Bone":o=new Eo;break;default:o=new et}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){let d=e.children;for(let f=0;f<d.length;f++)o.add(this.parseObject(d[f],t,n,r,s))}if(e.animations!==void 0){let d=e.animations;for(let f=0;f<d.length;f++){let m=d[f];o.animations.push(s[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);let d=e.levels;for(let f=0;f<d.length;f++){let m=d[f],_=o.getObjectByProperty("uuid",m.object);_!==void 0&&o.addLevel(_,m.distance,m.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let r=t[n.skeleton];r===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(r,n.bindMatrix)}})}},C2={UVMapping:ll,CubeReflectionMapping:ri,CubeRefractionMapping:Si,EquirectangularReflectionMapping:no,EquirectangularRefractionMapping:io,CubeUVReflectionMapping:vs},vx={RepeatWrapping:ro,ClampToEdgeWrapping:Ht,MirroredRepeatWrapping:so},Mx={NearestFilter:vt,NearestMipmapNearestFilter:hc,NearestMipmapLinearFilter:Zs,LinearFilter:Mt,LinearMipmapNearestFilter:Sf,LinearMipmapLinearFilter:bi},Hd=class extends Wt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Kn.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{r&&r(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Kn.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),Kn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Kn.add(e,c),s.manager.itemStart(e)}},Ja,ko=class{static getContext(){return Ja===void 0&&(Ja=new(window.AudioContext||window.webkitAudioContext)),Ja}static setContext(e){Ja=e}},Gd=class extends Wt{constructor(e){super(e)}load(e,t,n,r){let s=this,o=new Tn(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{let l=c.slice(0);ko.getContext().decodeAudioData(l,function(h){t(h)}).catch(a)}catch(l){a(l)}},n,r);function a(c){r?r(c):console.error(c),s.manager.itemError(e)}}},Sx=new Le,bx=new Le,zi=new Le,Wd=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new wt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new wt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,zi.copy(e.projectionMatrix);let r=t.eyeSep/2,s=r*t.near/t.focus,o=t.near*Math.tan(Ki*t.fov*.5)/t.zoom,a,c;bx.elements[12]=-r,Sx.elements[12]=r,a=-o*t.aspect+s,c=o*t.aspect+s,zi.elements[0]=2*t.near/(c-a),zi.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(zi),a=-o*t.aspect-s,c=o*t.aspect-s,zi.elements[0]=2*t.near/(c-a),zi.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(zi)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(bx),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Sx)}},rl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ex(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Ex();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Ex(){return(typeof performance>"u"?Date:performance).now()}var ki=new C,Ax=new Gt,R2=new C,Vi=new C,qd=class extends et{constructor(){super(),this.type="AudioListener",this.context=ko.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new rl}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ki,Ax,R2),Vi.set(0,0,-1).applyQuaternion(Ax),t.positionX){let r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ki.x,r),t.positionY.linearRampToValueAtTime(ki.y,r),t.positionZ.linearRampToValueAtTime(ki.z,r),t.forwardX.linearRampToValueAtTime(Vi.x,r),t.forwardY.linearRampToValueAtTime(Vi.y,r),t.forwardZ.linearRampToValueAtTime(Vi.z,r),t.upX.linearRampToValueAtTime(n.x,r),t.upY.linearRampToValueAtTime(n.y,r),t.upZ.linearRampToValueAtTime(n.z,r)}else t.setPosition(ki.x,ki.y,ki.z),t.setOrientation(Vi.x,Vi.y,Vi.z,n.x,n.y,n.z)}},sl=class extends et{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}},Hi=new C,wx=new Gt,P2=new C,Gi=new C,Xd=class extends sl{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Hi,wx,P2),Gi.set(0,0,1).applyQuaternion(wx);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Hi.x,n),t.positionY.linearRampToValueAtTime(Hi.y,n),t.positionZ.linearRampToValueAtTime(Hi.z,n),t.orientationX.linearRampToValueAtTime(Gi.x,n),t.orientationY.linearRampToValueAtTime(Gi.y,n),t.orientationZ.linearRampToValueAtTime(Gi.z,n)}else t.setPosition(Hi.x,Hi.y,Hi.z),t.setOrientation(Gi.x,Gi.y,Gi.z)}},Yd=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},ol=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,s=e*r+r,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)n[s+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(n,r,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,o=r;s!==o;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,r){Gt.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){let o=this._workIndex*s;Gt.multiplyQuaternionsFlat(e,o,e,t,e,n),Gt.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,n,r,s){let o=1-r;for(let a=0;a!==s;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*r}}_lerpAdditive(e,t,n,r,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[n+o]*r}}},Ff="\\[\\]\\.:\\/",L2=new RegExp("["+Ff+"]","g"),Bf="[^"+Ff+"]",I2="[^"+Ff.replace("\\.","")+"]",U2=/((?:WC+[\/:])*)/.source.replace("WC",Bf),D2=/(WCOD+)?/.source.replace("WCOD",I2),N2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bf),O2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bf),F2=new RegExp("^"+U2+D2+N2+O2+"$"),B2=["material","materials","bones","map"],$d=class{constructor(e,t,n){let r=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Qe=class{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(L2,"")}static parseTrackName(e){let t=F2.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);B2.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qe.Composite=$d;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zd=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=on(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,r=arguments.length;n!==r;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length,a,c=e.length,l=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){let d=arguments[u],f=d.uuid,m=t[f];if(m===void 0){m=c++,t[f]=m,e.push(d);for(let _=0,g=o;_!==g;++_)s[_].push(new Qe(d,n[_],r[_]))}else if(m<l){a=e[m];let _=--l,g=e[_];t[g.uuid]=m,e[m]=g,t[f]=_,e[_]=d;for(let p=0,y=o;p!==y;++p){let x=s[p],M=x[_],P=x[m];x[m]=M,P===void 0&&(P=new Qe(d,n[p],r[p])),x[_]=P}}else e[m]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length,s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let c=arguments[o],l=c.uuid,u=t[l];if(u!==void 0&&u>=s){let h=s++,d=e[h];t[d.uuid]=u,e[u]=d,t[l]=h,e[h]=c;for(let f=0,m=r;f!==m;++f){let _=n[f],g=_[h],p=_[u];_[u]=g,_[h]=p}}}this.nCachedObjects_=s}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length,s=this.nCachedObjects_,o=e.length;for(let a=0,c=arguments.length;a!==c;++a){let l=arguments[a],u=l.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){let d=--s,f=e[d],m=--o,_=e[m];t[f.uuid]=h,e[h]=f,t[_.uuid]=d,e[d]=_,e.pop();for(let g=0,p=r;g!==p;++g){let y=n[g],x=y[d],M=y[m];y[h]=x,y[d]=M,y.pop()}}else{let d=--o,f=e[d];d>0&&(t[f.uuid]=h),e[h]=f,e.pop();for(let m=0,_=r;m!==_;++m){let g=n[m];g[h]=g[d],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){let n=this._bindingsIndicesByPath,r=n[e],s=this._bindings;if(r!==void 0)return s[r];let o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,u=this.nCachedObjects_,h=new Array(l);r=s.length,n[e]=r,o.push(e),a.push(t),s.push(h);for(let d=u,f=c.length;d!==f;++d){let m=c[d];h[d]=new Qe(m,e,t)}return h}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let r=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=e[a];t[l]=n,o[n]=c,o.pop(),s[n]=s[a],s.pop(),r[n]=r[a],r.pop()}}},al=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let s=t.tracks,o=s.length,a=new Array(o),c={endingStart:Yi,endingEnd:Yi};for(let l=0;l!==o;++l){let u=s[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=wy,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,s=r.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Pf:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case hl:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,s=this._loopCount,o=n===Ty;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(n===Ay){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){let a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=$i,r.endingEnd=$i):(e?r.endingStart=this.zeroSlopeAtStart?$i:Yi:r.endingStart=co,t?r.endingEnd=this.zeroSlopeAtEnd?$i:Yi:r.endingEnd=co)}_scheduleFading(e,t,n){let r=this._mixer,s=r.time,o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}},z2=new Float32Array(1),Jd=class extends wn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==s;++h){let d=r[h],f=d.name,m=u[f];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let _=t&&t._propertyBindings[h].binding.parsedPath;m=new ol(Qe.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,s=this._bindings,o=r[t];o===void 0&&(o={},r[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[r],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new No(new Float32Array(2),new Float32Array(2),1,z2),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let r=t||this._root,s=r.uuid,o=typeof e=="string"?hr.findByName(r,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=hl),c!==void 0){let h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let u=new al(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,s),u}existingAction(e,t){let n=t||this._root,r=n.uuid,s=typeof e=="string"?hr.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(r,e,s,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){let o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Vo=class{constructor(e){this.value=e}clone(){return new Vo(this.value.clone===void 0?this.value:this.value.clone())}},k2=0,Kd=class extends wn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:k2++}),this.name="",this.usage=fo,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let n=0,r=t.length;n<r;n++){let s=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<s.length;o++)this.uniforms.push(s[o].clone())}return this}clone(){return new this.constructor().copy(this)}},jd=class extends is{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},Qd=class{constructor(e,t,n,r,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=r,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},ef=class{constructor(e,t,n=0,r=1/0){this.ray=new Ei(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return tf(e,this,n,t),n.sort(Tx),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)tf(e[r],this,n,t);return n.sort(Tx),n}};function Tx(i,e){return i.distance-e.distance}function tf(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let r=i.children;for(let s=0,o=r.length;s<o;s++)tf(r[s],e,t,!0)}}var nf=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},rf=class{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}},Cx=new $,sf=class{constructor(e=new $(1/0,1/0),t=new $(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Cx.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cx).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Rx=new C,Ka=new C,of=class{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Rx.subVectors(e,this.start),Ka.subVectors(this.end,this.start);let n=Ka.dot(Ka),s=Ka.dot(Rx)/n;return t&&(s=_t(s,0,1)),s}closestPointToPoint(e,t,n){let r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Px=new C,af=class extends et{constructor(e,t){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let n=new Ve,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){let l=o/c*Math.PI*2,u=a/c*Math.PI*2;r.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Me(r,3));let s=new Nt({fog:!1,toneMapped:!1});this.cone=new gn(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Px.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Px),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},gi=new C,ja=new Le,Sh=new Le,cf=class extends gn{constructor(e){let t=iv(e),n=new Ve,r=[],s=[],o=new ge(0,0,1),a=new ge(0,1,0);for(let l=0;l<t.length;l++){let u=t[l];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new Me(r,3)),n.setAttribute("color",new Me(s,3));let c=new Nt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,n=this.geometry,r=n.getAttribute("position");Sh.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){let a=t[s];a.parent&&a.parent.isBone&&(ja.multiplyMatrices(Sh,a.matrixWorld),gi.setFromMatrixPosition(ja),r.setXYZ(o,gi.x,gi.y,gi.z),ja.multiplyMatrices(Sh,a.parent.matrixWorld),gi.setFromMatrixPosition(ja),r.setXYZ(o+1,gi.x,gi.y,gi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}};function iv(i){let e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push.apply(e,iv(i.children[t]));return e}var lf=class extends St{constructor(e,t,n){let r=new ar(t,4,2),s=new Dn({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},V2=new C,Lx=new ge,Ix=new ge,uf=class extends et{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let r=new or(t);r.rotateY(Math.PI*.5),this.material=new Dn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let s=r.getAttribute("position"),o=new Float32Array(s.count*3);r.setAttribute("color",new it(o,3)),this.add(new St(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");Lx.copy(this.light.color),Ix.copy(this.light.groundColor);for(let n=0,r=t.count;n<r;n++){let s=n<r/2?Lx:Ix;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(V2.setFromMatrixPosition(this.light.matrixWorld).negate())}},hf=class extends gn{constructor(e=10,t=10,n=4473924,r=8947848){n=new ge(n),r=new ge(r);let s=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,f=0,m=-a;d<=t;d++,m+=o){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);let _=d===s?n:r;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}let u=new Ve;u.setAttribute("position",new Me(c,3)),u.setAttribute("color",new Me(l,3));let h=new Nt({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},df=class extends gn{constructor(e=10,t=16,n=8,r=64,s=4473924,o=8947848){s=new ge(s),o=new ge(o);let a=[],c=[];if(t>1)for(let h=0;h<t;h++){let d=h/t*(Math.PI*2),f=Math.sin(d)*e,m=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,m);let _=h&1?s:o;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let h=0;h<n;h++){let d=h&1?s:o,f=e-e/n*h;for(let m=0;m<r;m++){let _=m/r*(Math.PI*2),g=Math.sin(_)*f,p=Math.cos(_)*f;a.push(g,0,p),c.push(d.r,d.g,d.b),_=(m+1)/r*(Math.PI*2),g=Math.sin(_)*f,p=Math.cos(_)*f,a.push(g,0,p),c.push(d.r,d.g,d.b)}}let l=new Ve;l.setAttribute("position",new Me(a,3)),l.setAttribute("color",new Me(c,3));let u=new Nt({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},Ux=new C,Qa=new C,Dx=new C,ff=class extends et{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new Ve;r.setAttribute("position",new Me([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let s=new Nt({fog:!1,toneMapped:!1});this.lightPlane=new Nn(r,s),this.add(this.lightPlane),r=new Ve,r.setAttribute("position",new Me([0,0,0,0,0,1],3)),this.targetLine=new Nn(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Ux.setFromMatrixPosition(this.light.matrixWorld),Qa.setFromMatrixPosition(this.light.target.matrixWorld),Dx.subVectors(Qa,Ux),this.lightPlane.lookAt(Qa),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Qa),this.targetLine.scale.z=Dx.length()}},ec=new C,gt=new Qr,pf=class extends gn{constructor(e){let t=new Ve,n=new Nt({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(m,_){c(m),c(_)}function c(m){r.push(0,0,0),s.push(0,0,0),o[m]===void 0&&(o[m]=[]),o[m].push(r.length/3-1)}t.setAttribute("position",new Me(r,3)),t.setAttribute("color",new Me(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();let l=new ge(16755200),u=new ge(16711680),h=new ge(43775),d=new ge(16777215),f=new ge(3355443);this.setColors(l,u,h,d,f)}setColors(e,t,n,r,s){let a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,r.r,r.g,r.b),a.setXYZ(39,r.r,r.g,r.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0}update(){let e=this.geometry,t=this.pointMap,n=1,r=1;gt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),yt("c",t,e,gt,0,0,-1),yt("t",t,e,gt,0,0,1),yt("n1",t,e,gt,-n,-r,-1),yt("n2",t,e,gt,n,-r,-1),yt("n3",t,e,gt,-n,r,-1),yt("n4",t,e,gt,n,r,-1),yt("f1",t,e,gt,-n,-r,1),yt("f2",t,e,gt,n,-r,1),yt("f3",t,e,gt,-n,r,1),yt("f4",t,e,gt,n,r,1),yt("u1",t,e,gt,n*.7,r*1.1,-1),yt("u2",t,e,gt,-n*.7,r*1.1,-1),yt("u3",t,e,gt,0,r*2,-1),yt("cf1",t,e,gt,-n,0,1),yt("cf2",t,e,gt,n,0,1),yt("cf3",t,e,gt,0,-r,1),yt("cf4",t,e,gt,0,r,1),yt("cn1",t,e,gt,-n,0,-1),yt("cn2",t,e,gt,n,0,-1),yt("cn3",t,e,gt,0,-r,-1),yt("cn4",t,e,gt,0,r,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function yt(i,e,t,n,r,s,o){ec.set(r,s,o).unproject(n);let a=e[i];if(a!==void 0){let c=t.getAttribute("position");for(let l=0,u=a.length;l<u;l++)c.setXYZ(a[l],ec.x,ec.y,ec.z)}}var tc=new Dt,mf=class extends gn{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(8*3),s=new Ve;s.setIndex(new it(n,1)),s.setAttribute("position",new it(r,3)),super(s,new Nt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&tc.setFromObject(this.object),tc.isEmpty())return;let t=tc.min,n=tc.max,r=this.geometry.attributes.position,s=r.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},gf=class extends gn{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Ve;s.setIndex(new it(n,1)),s.setAttribute("position",new Me(r,3)),super(s,new Nt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}},_f=class extends Nn{constructor(e,t=1,n=16776960){let r=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Ve;o.setAttribute("position",new Me(s,3)),o.computeBoundingSphere(),super(o,new Nt({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new Ve;c.setAttribute("position",new Me(a,3)),c.computeBoundingSphere(),this.add(new St(c,new Dn({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},Nx=new C,nc,bh,xf=class extends et{constructor(e=new C(0,0,1),t=new C(0,0,0),n=1,r=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",nc===void 0&&(nc=new Ve,nc.setAttribute("position",new Me([0,0,0,0,1,0],3)),bh=new wi(0,.5,1,5,1),bh.translate(0,-.5,0)),this.position.copy(t),this.line=new Nn(nc,new Nt({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new St(bh,new Dn({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Nx.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Nx,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},yf=class extends gn{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Ve;r.setAttribute("position",new Me(t,3)),r.setAttribute("color",new Me(n,3));let s=new Nt({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){let r=new ge,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},vf=class{constructor(){this.type="ShapePath",this.color=new ge,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ir,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,o){return this.currentPath.bezierCurveTo(e,t,n,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){let y=[];for(let x=0,M=p.length;x<M;x++){let P=p[x],E=new ni;E.curves=P.curves,y.push(E)}return y}function n(p,y){let x=y.length,M=!1;for(let P=x-1,E=0;E<x;P=E++){let R=y[P],D=y[E],b=D.x-R.x,w=D.y-R.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(R=y[E],b=-b,D=y[P],w=-w),p.y<R.y||p.y>D.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{let O=w*(p.x-R.x)-b*(p.y-R.y);if(O===0)return!0;if(O<0)continue;M=!M}}else{if(p.y!==R.y)continue;if(D.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=D.x)return!0}}return M}let r=pn.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c,l=[];if(s.length===1)return a=s[0],c=new ni,c.curves=a.curves,l.push(c),l;let u=!r(s[0].getPoints());u=e?!u:u;let h=[],d=[],f=[],m=0,_;d[m]=void 0,f[m]=[];for(let p=0,y=s.length;p<y;p++)a=s[p],_=a.getPoints(),o=r(_),o=e?!o:o,o?(!u&&d[m]&&m++,d[m]={s:new ni,p:_},d[m].s.curves=a.curves,u&&m++,f[m]=[]):f[m].push({h:a,p:_[0]});if(!d[0])return t(s);if(d.length>1){let p=!1,y=0;for(let x=0,M=d.length;x<M;x++)h[x]=[];for(let x=0,M=d.length;x<M;x++){let P=f[x];for(let E=0;E<P.length;E++){let R=P[E],D=!0;for(let b=0;b<d.length;b++)n(R.p,d[b].p)&&(x!==b&&y++,D?(D=!1,h[b].push(R)):p=!0);D&&h[x].push(R)}}y>0&&p===!1&&(f=h)}let g;for(let p=0,y=d.length;p<y;p++){c=d[p].s,l.push(c),g=f[p];for(let x=0,M=g.length;x<M;x++)c.holes.push(g[x].h)}return l}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);v.ACESFilmicToneMapping=fy;v.AddEquation=_i;v.AddOperation=ly;v.AdditiveAnimationBlendMode=Pf;v.AdditiveBlending=Ah;v.AgXToneMapping=my;v.AlphaFormat=yy;v.AlwaysCompare=Fy;v.AlwaysDepth=ny;v.AlwaysStencilFunc=nd;v.AmbientLight=jc;v.AnimationAction=al;v.AnimationClip=hr;v.AnimationLoader=Ud;v.AnimationMixer=Jd;v.AnimationObjectGroup=Zd;v.AnimationUtils=A2;v.ArcCurve=Cc;v.ArrayCamera=_c;v.ArrowHelper=xf;v.AttachedBindMode=Ph;v.Audio=sl;v.AudioAnalyser=Yd;v.AudioContext=ko;v.AudioListener=qd;v.AudioLoader=Gd;v.AxesHelper=yf;v.BackSide=Kt;v.BasicDepthPacking=Cy;v.BasicShadowMap=r1;v.BatchedMesh=Ac;v.Bone=Eo;v.BooleanKeyframeTrack=ai;v.Box2=sf;v.Box3=Dt;v.Box3Helper=gf;v.BoxGeometry=si;v.BoxHelper=mf;v.BufferAttribute=it;v.BufferGeometry=Ve;v.BufferGeometryLoader=il;v.ByteType=_y;v.Cache=Kn;v.Camera=Qr;v.CameraHelper=pf;v.CanvasTexture=Cd;v.CapsuleGeometry=as;v.CatmullRomCurve3=Rc;v.CineonToneMapping=dy;v.CircleGeometry=cs;v.ClampToEdgeWrapping=Ht;v.Clock=rl;v.Color=ge;v.ColorKeyframeTrack=Oo;v.ColorManagement=ot;v.CompressedArrayTexture=wd;v.CompressedCubeTexture=Td;v.CompressedTexture=ss;v.CompressedTextureLoader=Dd;v.ConeGeometry=ls;v.ConstantAlphaFactor=Qx;v.ConstantColorFactor=Kx;v.CubeCamera=mc;v.CubeReflectionMapping=ri;v.CubeRefractionMapping=Si;v.CubeTexture=er;v.CubeTextureLoader=Nd;v.CubeUVReflectionMapping=vs;v.CubicBezierCurve=wo;v.CubicBezierCurve3=Pc;v.CubicInterpolant=qc;v.CullFaceBack=Eh;v.CullFaceFront=Fx;v.CullFaceFrontBack=i1;v.CullFaceNone=Ox;v.Curve=cn;v.CurvePath=Uc;v.CustomBlending=zx;v.CustomToneMapping=py;v.CylinderGeometry=wi;v.Cylindrical=rf;v.Data3DTexture=go;v.DataArrayTexture=Jr;v.DataTexture=ti;v.DataTextureLoader=Od;v.DataUtils=hC;v.DecrementStencilOp=g1;v.DecrementWrapStencilOp=x1;v.DefaultLoadingManager=nv;v.DepthFormat=vi;v.DepthStencilFormat=ji;v.DepthTexture=vo;v.DetachedBindMode=gy;v.DirectionalLight=Kc;v.DirectionalLightHelper=ff;v.DiscreteInterpolant=Xc;v.DisplayP3ColorSpace=dl;v.DodecahedronGeometry=us;v.DoubleSide=In;v.DstAlphaFactor=Xx;v.DstColorFactor=$x;v.DynamicCopyUsage=U1;v.DynamicDrawUsage=T1;v.DynamicReadUsage=P1;v.EdgesGeometry=Dc;v.EllipseCurve=os;v.EqualCompare=Uy;v.EqualDepth=ry;v.EqualStencilFunc=S1;v.EquirectangularReflectionMapping=no;v.EquirectangularRefractionMapping=io;v.Euler=Qi;v.EventDispatcher=wn;v.ExtrudeGeometry=hs;v.FileLoader=Tn;v.Float16BufferAttribute=fd;v.Float32BufferAttribute=Me;v.Float64BufferAttribute=pd;v.FloatType=En;v.Fog=ns;v.FogExp2=ts;v.FramebufferTexture=Ad;v.FrontSide=ii;v.Frustum=tr;v.GLBufferAttribute=Qd;v.GLSL1=N1;v.GLSL3=id;v.GreaterCompare=Dy;v.GreaterDepth=oy;v.GreaterEqualCompare=Oy;v.GreaterEqualDepth=sy;v.GreaterEqualStencilFunc=w1;v.GreaterStencilFunc=E1;v.GridHelper=hf;v.Group=xi;v.HalfFloatType=Yr;v.HemisphereLight=$c;v.HemisphereLightHelper=uf;v.IcosahedronGeometry=ds;v.ImageBitmapLoader=Hd;v.ImageLoader=dr;v.ImageUtils=mo;v.IncrementStencilOp=m1;v.IncrementWrapStencilOp=_1;v.InstancedBufferAttribute=Ai;v.InstancedBufferGeometry=nl;v.InstancedInterleavedBuffer=jd;v.InstancedMesh=Ec;v.Int16BufferAttribute=hd;v.Int32BufferAttribute=dd;v.Int8BufferAttribute=cd;v.IntType=bf;v.InterleavedBuffer=is;v.InterleavedBufferAttribute=oi;v.Interpolant=cr;v.InterpolateDiscrete=oo;v.InterpolateLinear=ao;v.InterpolateSmooth=cc;v.InvertStencilOp=y1;v.KeepStencilOp=Wi;v.KeyframeTrack=ln;v.LOD=Sc;v.LatheGeometry=rr;v.Layers=Kr;v.LessCompare=Iy;v.LessDepth=iy;v.LessEqualCompare=If;v.LessEqualDepth=to;v.LessEqualStencilFunc=b1;v.LessStencilFunc=M1;v.Light=Fn;v.LightProbe=tl;v.Line=Nn;v.Line3=of;v.LineBasicMaterial=Nt;v.LineCurve=To;v.LineCurve3=Lc;v.LineDashedMaterial=Wc;v.LineLoop=wc;v.LineSegments=gn;v.LinearDisplayP3ColorSpace=Go;v.LinearEncoding=Lf;v.LinearFilter=Mt;v.LinearInterpolant=No;v.LinearMipMapLinearFilter=l1;v.LinearMipMapNearestFilter=c1;v.LinearMipmapLinearFilter=bi;v.LinearMipmapNearestFilter=Sf;v.LinearSRGBColorSpace=Un;v.LinearToneMapping=uy;v.LinearTransfer=lo;v.Loader=Wt;v.LoaderUtils=zo;v.LoadingManager=Fo;v.LoopOnce=Ay;v.LoopPingPong=Ty;v.LoopRepeat=wy;v.LuminanceAlphaFormat=My;v.LuminanceFormat=vy;v.MOUSE=t1;v.Material=Ut;v.MaterialLoader=ys;v.MathUtils=J1;v.Matrix3=ke;v.Matrix4=Le;v.MaxEquation=Rh;v.Mesh=St;v.MeshBasicMaterial=Dn;v.MeshDepthMaterial=Mo;v.MeshDistanceMaterial=So;v.MeshLambertMaterial=Hc;v.MeshMatcapMaterial=Gc;v.MeshNormalMaterial=Vc;v.MeshPhongMaterial=zc;v.MeshPhysicalMaterial=Bc;v.MeshStandardMaterial=Do;v.MeshToonMaterial=kc;v.MinEquation=Ch;v.MirroredRepeatWrapping=so;v.MixOperation=cy;v.MultiplyBlending=Th;v.MultiplyOperation=Ho;v.NearestFilter=vt;v.NearestMipMapLinearFilter=a1;v.NearestMipMapNearestFilter=o1;v.NearestMipmapLinearFilter=Zs;v.NearestMipmapNearestFilter=hc;v.NeverCompare=Ly;v.NeverDepth=ty;v.NeverStencilFunc=v1;v.NoBlending=jn;v.NoColorSpace=sn;v.NoToneMapping=Qn;v.NormalAnimationBlendMode=hl;v.NormalBlending=Ji;v.NotEqualCompare=Ny;v.NotEqualDepth=ay;v.NotEqualStencilFunc=A1;v.NumberKeyframeTrack=lr;v.Object3D=et;v.ObjectLoader=Vd;v.ObjectSpaceNormalMap=Py;v.OctahedronGeometry=or;v.OneFactor=Gx;v.OneMinusConstantAlphaFactor=ey;v.OneMinusConstantColorFactor=jx;v.OneMinusDstAlphaFactor=Yx;v.OneMinusDstColorFactor=Zx;v.OneMinusSrcAlphaFactor=uc;v.OneMinusSrcColorFactor=qx;v.OrthographicCamera=es;v.P3Primaries=ho;v.PCFShadowMap=Mf;v.PCFSoftShadowMap=Bx;v.PMREMGenerator=yo;v.Path=ir;v.PerspectiveCamera=wt;v.Plane=Ln;v.PlaneGeometry=nr;v.PlaneHelper=_f;v.PointLight=Jc;v.PointLightHelper=lf;v.Points=Tc;v.PointsMaterial=Ao;v.PolarGridHelper=df;v.PolyhedronGeometry=On;v.PositionalAudio=Xd;v.PropertyBinding=Qe;v.PropertyMixer=ol;v.QuadraticBezierCurve=Co;v.QuadraticBezierCurve3=Ro;v.Quaternion=Gt;v.QuaternionKeyframeTrack=Ti;v.QuaternionLinearInterpolant=Yc;v.RED_GREEN_RGTC2_Format=ed;v.RED_RGTC1_Format=Ey;v.REVISION=cl;v.RGBADepthPacking=Ry;v.RGBAFormat=Qt;v.RGBAIntegerFormat=Cf;v.RGBA_ASTC_10x10_Format=$h;v.RGBA_ASTC_10x5_Format=qh;v.RGBA_ASTC_10x6_Format=Xh;v.RGBA_ASTC_10x8_Format=Yh;v.RGBA_ASTC_12x10_Format=Zh;v.RGBA_ASTC_12x12_Format=Jh;v.RGBA_ASTC_4x4_Format=Fh;v.RGBA_ASTC_5x4_Format=Bh;v.RGBA_ASTC_5x5_Format=zh;v.RGBA_ASTC_6x5_Format=kh;v.RGBA_ASTC_6x6_Format=Vh;v.RGBA_ASTC_8x5_Format=Hh;v.RGBA_ASTC_8x6_Format=Gh;v.RGBA_ASTC_8x8_Format=Wh;v.RGBA_BPTC_Format=ac;v.RGBA_ETC2_EAC_Format=Oh;v.RGBA_PVRTC_2BPPV1_Format=Dh;v.RGBA_PVRTC_4BPPV1_Format=Uh;v.RGBA_S3TC_DXT1_Format=rc;v.RGBA_S3TC_DXT3_Format=sc;v.RGBA_S3TC_DXT5_Format=oc;v.RGB_BPTC_SIGNED_Format=Kh;v.RGB_BPTC_UNSIGNED_Format=jh;v.RGB_ETC1_Format=Rf;v.RGB_ETC2_Format=Nh;v.RGB_PVRTC_2BPPV1_Format=Ih;v.RGB_PVRTC_4BPPV1_Format=Lh;v.RGB_S3TC_DXT1_Format=ic;v.RGFormat=by;v.RGIntegerFormat=Tf;v.RawShaderMaterial=Fc;v.Ray=Ei;v.Raycaster=ef;v.Rec709Primaries=uo;v.RectAreaLight=Qc;v.RedFormat=Sy;v.RedIntegerFormat=wf;v.ReinhardToneMapping=hy;v.RenderTarget=pc;v.RepeatWrapping=ro;v.ReplaceStencilOp=p1;v.ReverseSubtractEquation=Vx;v.RingGeometry=fs;v.SIGNED_RED_GREEN_RGTC2_Format=td;v.SIGNED_RED_RGTC1_Format=Qh;v.SRGBColorSpace=At;v.SRGBTransfer=ut;v.Scene=vc;v.ShaderChunk=We;v.ShaderLib=bn;v.ShaderMaterial=mn;v.ShadowMaterial=Oc;v.Shape=ni;v.ShapeGeometry=ps;v.ShapePath=vf;v.ShapeUtils=pn;v.ShortType=xy;v.Skeleton=rs;v.SkeletonHelper=cf;v.SkinnedMesh=bc;v.Source=Jn;v.Sphere=It;v.SphereGeometry=ar;v.Spherical=nf;v.SphericalHarmonics3=el;v.SplineCurve=Po;v.SpotLight=Zc;v.SpotLightHelper=af;v.Sprite=Mc;v.SpriteMaterial=bo;v.SrcAlphaFactor=lc;v.SrcAlphaSaturateFactor=Jx;v.SrcColorFactor=Wx;v.StaticCopyUsage=I1;v.StaticDrawUsage=fo;v.StaticReadUsage=R1;v.StereoCamera=Wd;v.StreamCopyUsage=D1;v.StreamDrawUsage=C1;v.StreamReadUsage=L1;v.StringKeyframeTrack=ci;v.SubtractEquation=kx;v.SubtractiveBlending=wh;v.TOUCH=n1;v.TangentSpaceNormalMap=Ci;v.TetrahedronGeometry=ms;v.Texture=ft;v.TextureLoader=Fd;v.TorusGeometry=gs;v.TorusKnotGeometry=_s;v.Triangle=Vt;v.TriangleFanDrawMode=d1;v.TriangleStripDrawMode=h1;v.TrianglesDrawMode=u1;v.TubeGeometry=xs;v.TwoPassDoubleSide=s1;v.UVMapping=ll;v.Uint16BufferAttribute=_o;v.Uint32BufferAttribute=xo;v.Uint8BufferAttribute=ld;v.Uint8ClampedBufferAttribute=ud;v.Uniform=Vo;v.UniformsGroup=Kd;v.UniformsLib=ce;v.UniformsUtils=Hy;v.UnsignedByteType=ei;v.UnsignedInt248Type=yi;v.UnsignedIntType=Zn;v.UnsignedShort4444Type=Ef;v.UnsignedShort5551Type=Af;v.UnsignedShortType=ul;v.VSMShadowMap=Pn;v.Vector2=$;v.Vector3=C;v.Vector4=nt;v.VectorKeyframeTrack=ur;v.VideoTexture=Ed;v.WebGL1Renderer=yc;v.WebGL3DRenderTarget=od;v.WebGLArrayRenderTarget=sd;v.WebGLCoordinateSystem=An;v.WebGLCubeRenderTarget=gc;v.WebGLMultipleRenderTargets=ad;v.WebGLRenderTarget=an;v.WebGLRenderer=xc;v.WebGLUtils=Zy;v.WebGPUCoordinateSystem=$r;v.WireframeGeometry=Nc;v.WrapAroundEnding=co;v.ZeroCurvatureEnding=Yi;v.ZeroFactor=Hx;v.ZeroSlopeEnding=$i;v.ZeroStencilOp=f1;v._SRGBAFormat=dc;v.createCanvasElement=zy;v.sRGBEncoding=Mi});var Wo=K(sv=>{if(!(typeof window>"u")){let i=window.__THREE_LIB__??rv();window.__THREE_LIB__=i,sv.THREE=i}});var ov=K(fr=>{var H2=(i,e)=>e?{x:i.x+(e.x??0),y:i.y+(e.y??0)}:i;fr.addVector=H2;var G2=(i,e)=>e?{...i,x:(i.x??0)+(e.x??0),y:(i.y??0)+(e.y??0),z:(i.z??0)+(e.z??0)}:i;fr.addVector3=G2;var W2=(i,e)=>Math.sqrt(Math.pow(i.x-e.x,2)+Math.pow(i.y-e.y,2));fr.distance=W2;var q2=(i,e)=>Math.sqrt(Math.pow(i.x-e.x,2)+Math.pow(i.y-e.y,2)+Math.pow(i.z-e.z,2));fr.distance3=q2;var X2=(i,e)=>({x:e(i.x),y:e(i.y)});fr.applyBothXY=X2;var Y2=(i,e)=>({x:i.x-e.x,y:i.y-e.y});fr.diffPoints=Y2});var zf=K(av=>{var{cs:$2}=Rn(),{OnUnmounted:Z2}=la(),{Static2:J2}=ku(),{fragments:K2}=Ii(),{Invoke:j2}=gr(),Q2=typeof window>"u"?null:window,eU=({eventName:i,fn:e,action:t,useCapture:n=!1,passive:r=!1,target:s=Q2,next:o=void 0})=>$2(["listener",(a,c)=>J2({next:c})],({listener:a})=>K2(s&&j2({props:{action:t??e},action:({getLatestProps:c})=>{let l=u=>{let{action:h}=c();h(u)};s.addEventListener(i,l,{capture:n,passive:r}),a.set(l)}}),Z2({action:()=>{let c=a.get();c&&s.removeEventListener(i,c,{capture:n,passive:r})}}),o?.()));av.GlobalEvent=eU});var lv=K(cv=>{var{GlobalEvent:tU}=zf(),nU=({action:i})=>tU({eventName:"mousemove",fn:i});cv.GlobalMouseMove=nU});var hv=K(uv=>{var{GlobalEvent:iU}=zf(),rU=({action:i})=>iU({eventName:"mouseup",fn:i});uv.GlobalMouseUp=rU});var pv=K(fv=>{var{diffPoints:sU}=ov(),{cs:oU}=Rn(),{fragments:aU}=Ii(),{GlobalMouseMove:cU}=lv(),{GlobalMouseUp:lU}=hv(),{spc:uU}=Nu(),{UseState:hU}=Us(),dU=({next:i})=>oU(["state",(e,t)=>hU({next:t})],({state:e})=>aU(i({active:!!e.value,delta:e.value?.delta,oriPos:e.value?.oriPos,handle:{onMouseDown:t=>{e.onChange({oriPos:dv(t)}),t.preventDefault()}},renderOnDone:({action:t})=>e.value&&lU({action:()=>{e.value&&(e.value.delta&&t(),e.onChange(null))}})}),e.value&&cU({action:t=>{let n=dv(t);uU(e,["delta"],()=>sU(n,e.value.oriPos))}})));fv.Dragging=dU;var dv=i=>({x:i.clientX,y:i.clientY})});var Gf=K(vv=>{var{toHex:pU}=(Vu(),Kv(o0)),{THREE:pr}=Wo(),mU=({shape:i,height:e,modMesh:t})=>{let n=new pr.ExtrudeGeometry(i,{depth:e,bevelEnabled:!1}),r=new pr.Group;{let s=new pr.MeshBasicMaterial({color:pU({r:243,g:234,b:197})}),o=new pr.Mesh(n,s);o.position.z=-e/2,t?.(o),r.add(o)}{let s=new pr.EdgesGeometry(n),o=new pr.LineBasicMaterial({color:0}),a=new pr.LineSegments(s,o);a.position.z=-e/2,t?.(a),r.add(a)}return r};vv.extrudeShape=mU});var Ov=Ke(Rn()),Fv=Ke(Gp()),Bv=Ke(A_());var Es=Ke(Lu());var $f=Ke(Rn()),Iv=Ke(W_()),Uv=Ke(j_()),Zf=Ke(Nu()),Dv=Ke(Us());var Cv=Ke(Lu()),Xo=Ke(Rn()),bs=Ke(Ii()),_l=Ke(gr()),Rv=Ke(Fu()),Yf=Ke(la()),qo=Ke(Ns()),qf=Ke(ku());Vu();var _n=Ke(Wo());var mv=Ke(pv()),kf=Ke(Rn()),Vf=Ke(Ii()),gv=Ke(gr()),_v=Ke(Fu()),xv=Ke(Ns()),ml=Ke(Us()),Hf=Ke(Ui()),Ss=Ke(Wo()),yv=({ratio:i,next:e})=>(0,kf.cs)(["camera",({size:t},n)=>(0,xv.Static)({getInitValue:()=>new Ss.THREE.PerspectiveCamera(50,i,.1,1e3),next:n})],["horizontalAngle",(t,n)=>(0,ml.UseState)({initValue:90,next:n})],["verticalAngle",(t,n)=>(0,ml.UseState)({initValue:30,next:n})],["distance",(t,n)=>(0,ml.UseState)({initValue:10,next:n})],["dragging",(t,n)=>(0,mv.Dragging)({next:n})],["hor1",({horizontalAngle:t,dragging:n},r)=>r(t.value+(n.delta?n.delta.x:0))],["ver1",({verticalAngle:t,dragging:n},r)=>r((0,Hf.chain)(t.value+(n.delta?n.delta.y:0),s=>Math.min(89.99,s),s=>Math.max(-89.99,s)))],({hor1:t,ver1:n,camera:r,dragging:s,distance:o},a)=>(0,Vf.fragments)((0,kf.cs)((0,_v.keyed)(JSON.stringify([t,n,o.value])),()=>(0,gv.Invoke)({action:()=>{r.position.copy(fU(o.value,t,n)),r.lookAt(new Ss.THREE.Vector3(0,0,0))}})),a()),({horizontalAngle:t,verticalAngle:n,hor1:r,ver1:s,dragging:o},a)=>(0,Vf.fragments)(o.renderOnDone({action:()=>{t.onChange(r),n.onChange(s)}}),a()),({camera:t,dragging:n,distance:r})=>e({value:t,handle:{...n.handle,onWheel:s=>{let o=s.wheelDelta>0?1.1:.9090909090909091;r.change(a=>(0,Hf.chain)(a*o,c=>Math.min(20,c),c=>Math.max(1,c)))}}})),fU=(i,e,t)=>{let n=Ss.THREE.MathUtils.degToRad(e),r=Ss.THREE.MathUtils.degToRad(90-t);return new Ss.THREE.Vector3(i*Math.sin(r)*Math.cos(n),i*Math.cos(r),i*Math.sin(r)*Math.sin(n))};var Pv=Ke(Gf());var Wf=Ke(Rn()),Mv=Ke(Ns()),Sv=Ke(Ii()),bv=Ke(la()),Ev=Ke(gr()),Ri=Ke(Wo()),Av=Ke(Gf()),wv=Ke(hn()),Tv=({scene:i,height:e,sides:t,boxRadius:n,thickness:r})=>(0,Wf.cs)(({})=>(0,wv.createArray)(t).map(s=>gU({sideIndex:s,scene:i,height:e,sides:t,boxRadius:n,thickness:r}))),gU=({scene:i,height:e,sides:t,sideIndex:n,boxRadius:r,thickness:s})=>(0,Wf.cs)(["cleanups",(o,a)=>(0,Mv.Static)({initValue:[],next:a})],({cleanups:o},a)=>(0,Sv.fragments)(a(),(0,bv.OnUnmounted)({action:()=>o.forEach(c=>c())})),({cleanups:o})=>(0,Ev.Invoke)({action:()=>{let a=Ri.THREE.MathUtils.degToRad(360/t/2),c=Math.sin(a)*(r-s/Math.cos(a))*2,l=e-2*s,u=[new Ri.THREE.Vector2(-c/2,l/2),new Ri.THREE.Vector2(c/2,l/2),new Ri.THREE.Vector2(c/2,-l/2),new Ri.THREE.Vector2(-c/2,-l/2)],h=new Ri.THREE.Shape(u),d=(0,Av.extrudeShape)({shape:h,height:s,modMesh:f=>{f.position.z+=r*Math.cos(a)-s/2}});i.add(d),o.push(()=>i.remove(d)),d.rotation.y+=Ri.THREE.MathUtils.degToRad(90)-a,d.rotation.y-=a*2*n}}));var Lv=({config:i})=>(0,Xo.cs)(["canvasRef",(e,t)=>(0,qf.Static2)({next:t})],["cleanups",(e,t)=>(0,qo.Static)({initValue:[],next:t})],["size",(e,t)=>(0,qo.Static)({getInitValue:()=>({width:window.innerWidth,height:window.innerHeight}),next:t})],({cleanups:e},t)=>(0,bs.fragments)(t(),(0,Yf.OnUnmounted)({action:()=>e.forEach(n=>n())})),["camera",({size:e},t)=>yv({ratio:e.width/e.height,next:t})],["scene",({},e)=>(0,qo.Static)({getInitValue:()=>new _n.THREE.Scene,next:e})],["renderer",({canvasRef:e},t)=>(0,qf.Static2)({next:t})],({cleanups:e,canvasRef:t,camera:n,renderer:r,scene:s},o)=>(0,bs.fragments)(o(),xU({scene:s,config:i}),(0,_l.Invoke)({action:()=>{r.set(new _n.THREE.WebGLRenderer({canvas:t.get(),alpha:!0,antialias:!0})),r.get().render(s,n.value),e.push(()=>{r.get().dispose()})}}),(()=>(requestAnimationFrame(()=>{r.get()?.render(s,n.value)}),null))()),({canvasRef:e,size:t,camera:n})=>Cv.createElement("canvas",{width:t.width,height:t.height,ref:e.set,...n.handle})),_U=({scene:i,y:e,sides:t,height:n})=>(0,Xo.cs)(["cleanups",(r,s)=>(0,qo.Static)({initValue:[],next:s})],({cleanups:r},s)=>(0,bs.fragments)(s(),(0,Yf.OnUnmounted)({action:()=>r.forEach(o=>o())})),({cleanups:r})=>(0,_l.Invoke)({action:()=>{let s=[];for(let c=0;c<t;c++){let l=_n.THREE.MathUtils.degToRad(360/t*c);s.push(new _n.THREE.Vector2(Xf*Math.cos(l),Xf*Math.sin(l)))}let o=new _n.THREE.Shape(s),a=(0,Pv.extrudeShape)({shape:o,height:n});i.add(a),r.push(()=>i.remove(a)),a.rotation.x=Math.PI/2,a.position.y=e}})),Xf=1,gl=.05,xU=({scene:i,config:e})=>(0,Xo.cs)((0,Rv.keyed)(JSON.stringify(e)),({},t)=>!!e.sides&&e.sides>2&&t(),()=>(0,bs.fragments)(yU({height:1,width:gl,scene:i}),_U({scene:i,y:-.5+gl/2,sides:e.sides,height:gl}),Tv({scene:i,height:1,sides:e.sides,boxRadius:Xf,thickness:gl}))),yU=({height:i,width:e,scene:t})=>(0,Xo.cs)(()=>(0,bs.fragments)((0,_l.Invoke)({action:()=>{let n=new _n.THREE.BoxGeometry(e*2,i,e);{let r=new _n.THREE.MeshBasicMaterial({color:ua({r:243,g:0,b:0})}),s=new _n.THREE.Mesh(n,r);t.add(s)}{let r=new _n.THREE.EdgesGeometry(n),s=new _n.THREE.LineBasicMaterial({color:0}),o=new _n.THREE.LineSegments(r,s);t.add(o)}}})));var Nv=()=>(0,$f.cs)(["config",(i,e)=>(0,Dv.UseState)({initValue:{sides:5},next:e})],({config:i},e)=>Es.createElement("div",{className:"three-app-43j"},e(),Es.createElement("div",{className:"controls"},"Sides:",(0,$f.cs)(["binding",(t,n)=>(0,Iv.NumberInputBinding)({state:(0,Uv.scope)(i,["sides"]),next:n})],({binding:t})=>Es.createElement("input",{...t})),Es.createElement("button",{onClick:()=>(0,Zf.scnv)(i,["sides"],t=>Math.max(3,t-1))},"-"),Es.createElement("button",{onClick:()=>(0,Zf.scnv)(i,["sides"],t=>Math.min(100,t+1))},"+"))),({config:i})=>Lv({config:i.value}));(0,Ov.cs)(({},i)=>(0,Fv.EsbuildRoot)({createRoot:Bv.createRoot,next:i}),()=>Nv({}));})();
/*! Bundled license information:

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

react/cjs/react.production.min.js:
  (** @license React v16.11.0
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

react/cjs/react.production.min.js:
  (** @license React v16.14.0
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.cjs:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
