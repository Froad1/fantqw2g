(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Ep(n,e){const t=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)t[i[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const De={},Dr=[],Sn=()=>{},RS=()=>!1,NS=/^on[^a-z]/,Fu=n=>NS.test(n),Tp=n=>n.startsWith("onUpdate:"),st=Object.assign,bp=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},xS=Object.prototype.hasOwnProperty,fe=(n,e)=>xS.call(n,e),Q=Array.isArray,Or=n=>vc(n)==="[object Map]",qw=n=>vc(n)==="[object Set]",Cy=n=>vc(n)==="[object Date]",ie=n=>typeof n=="function",nt=n=>typeof n=="string",Ra=n=>typeof n=="symbol",Se=n=>n!==null&&typeof n=="object",$w=n=>Se(n)&&ie(n.then)&&ie(n.catch),jw=Object.prototype.toString,vc=n=>jw.call(n),PS=n=>vc(n).slice(8,-1),zw=n=>vc(n)==="[object Object]",Cp=n=>nt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,bl=Ep(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Uu=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},DS=/-(\w)/g,Qr=Uu(n=>n.replace(DS,(e,t)=>t?t.toUpperCase():"")),OS=/\B([A-Z])/g,vo=Uu(n=>n.replace(OS,"-$1").toLowerCase()),Ww=Uu(n=>n.charAt(0).toUpperCase()+n.slice(1)),sd=Uu(n=>n?`on${Ww(n)}`:""),ql=(n,e)=>!Object.is(n,e),Cl=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},$l=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Kd=n=>{const e=parseFloat(n);return isNaN(e)?n:e},MS=n=>{const e=nt(n)?Number(n):NaN;return isNaN(e)?n:e};let Sy;const Hd=()=>Sy||(Sy=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vu(n){if(Q(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=nt(i)?VS(i):Vu(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(nt(n))return n;if(Se(n))return n}}const LS=/;(?![^(]*\))/g,FS=/:([^]+)/,US=/\/\*[^]*?\*\//g;function VS(n){const e={};return n.replace(US,"").split(LS).forEach(t=>{if(t){const i=t.split(FS);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Sp(n){let e="";if(nt(n))e=n;else if(Q(n))for(let t=0;t<n.length;t++){const i=Sp(n[t]);i&&(e+=i+" ")}else if(Se(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const BS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qS=Ep(BS);function Gw(n){return!!n||n===""}function $S(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=jl(n[i],e[i]);return t}function jl(n,e){if(n===e)return!0;let t=Cy(n),i=Cy(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Ra(n),i=Ra(e),t||i)return n===e;if(t=Q(n),i=Q(e),t||i)return t&&i?$S(n,e):!1;if(t=Se(n),i=Se(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!jl(n[o],e[o]))return!1}}return String(n)===String(e)}const tl=n=>nt(n)?n:n==null?"":Q(n)||Se(n)&&(n.toString===jw||!ie(n.toString))?JSON.stringify(n,Kw,2):String(n),Kw=(n,e)=>e&&e.__v_isRef?Kw(n,e.value):Or(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s])=>(t[`${i} =>`]=s,t),{})}:qw(e)?{[`Set(${e.size})`]:[...e.values()]}:Se(e)&&!Q(e)&&!zw(e)?String(e):e;let wn;class jS{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=wn,!e&&wn&&(this.index=(wn.scopes||(wn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=wn;try{return wn=this,e()}finally{wn=t}}}on(){wn=this}off(){wn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function zS(n,e=wn){e&&e.active&&e.effects.push(n)}function WS(){return wn}const Ap=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Hw=n=>(n.w&$i)>0,Qw=n=>(n.n&$i)>0,GS=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=$i},KS=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const s=e[i];Hw(s)&&!Qw(s)?s.delete(n):e[t++]=s,s.w&=~$i,s.n&=~$i}e.length=t}},Qd=new WeakMap;let sa=0,$i=1;const Yd=30;let In;const Fs=Symbol(""),Xd=Symbol("");class kp{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,zS(this,i)}run(){if(!this.active)return this.fn();let e=In,t=Ui;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=In,In=this,Ui=!0,$i=1<<++sa,sa<=Yd?GS(this):Ay(this),this.fn()}finally{sa<=Yd&&KS(this),$i=1<<--sa,In=this.parent,Ui=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){In===this?this.deferStop=!0:this.active&&(Ay(this),this.onStop&&this.onStop(),this.active=!1)}}function Ay(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Ui=!0;const Yw=[];function wo(){Yw.push(Ui),Ui=!1}function Io(){const n=Yw.pop();Ui=n===void 0?!0:n}function Jt(n,e,t){if(Ui&&In){let i=Qd.get(n);i||Qd.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=Ap()),Xw(s)}}function Xw(n,e){let t=!1;sa<=Yd?Qw(n)||(n.n|=$i,t=!Hw(n)):t=!n.has(In),t&&(n.add(In),In.deps.push(n))}function ui(n,e,t,i,s,r){const o=Qd.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Q(n)){const c=Number(i);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Q(n)?Cp(t)&&a.push(o.get("length")):(a.push(o.get(Fs)),Or(n)&&a.push(o.get(Xd)));break;case"delete":Q(n)||(a.push(o.get(Fs)),Or(n)&&a.push(o.get(Xd)));break;case"set":Or(n)&&a.push(o.get(Fs));break}if(a.length===1)a[0]&&Jd(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Jd(Ap(c))}}function Jd(n,e){const t=Q(n)?n:[...n];for(const i of t)i.computed&&ky(i);for(const i of t)i.computed||ky(i)}function ky(n,e){(n!==In||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const HS=Ep("__proto__,__v_isRef,__isVue"),Jw=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ra)),QS=Rp(),YS=Rp(!1,!0),XS=Rp(!0),Ry=JS();function JS(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=me(this);for(let r=0,o=this.length;r<o;r++)Jt(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(me)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){wo();const i=me(this)[e].apply(this,t);return Io(),i}}),n}function ZS(n){const e=me(this);return Jt(e,"has",n),e.hasOwnProperty(n)}function Rp(n=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(n?e?gA:iI:e?nI:tI).get(i))return i;const o=Q(i);if(!n){if(o&&fe(Ry,s))return Reflect.get(Ry,s,r);if(s==="hasOwnProperty")return ZS}const a=Reflect.get(i,s,r);return(Ra(s)?Jw.has(s):HS(s))||(n||Jt(i,"get",s),e)?a:Ut(a)?o&&Cp(s)?a:a.value:Se(a)?n?sI(a):Pp(a):a}}const eA=Zw(),tA=Zw(!0);function Zw(n=!1){return function(t,i,s,r){let o=t[i];if(Na(o)&&Ut(o)&&!Ut(s))return!1;if(!n&&(!Zd(s)&&!Na(s)&&(o=me(o),s=me(s)),!Q(t)&&Ut(o)&&!Ut(s)))return o.value=s,!0;const a=Q(t)&&Cp(i)?Number(i)<t.length:fe(t,i),c=Reflect.set(t,i,s,r);return t===me(r)&&(a?ql(s,o)&&ui(t,"set",i,s):ui(t,"add",i,s)),c}}function nA(n,e){const t=fe(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&ui(n,"delete",e,void 0),i}function iA(n,e){const t=Reflect.has(n,e);return(!Ra(e)||!Jw.has(e))&&Jt(n,"has",e),t}function sA(n){return Jt(n,"iterate",Q(n)?"length":Fs),Reflect.ownKeys(n)}const eI={get:QS,set:eA,deleteProperty:nA,has:iA,ownKeys:sA},rA={get:XS,set(n,e){return!0},deleteProperty(n,e){return!0}},oA=st({},eI,{get:YS,set:tA}),Np=n=>n,Bu=n=>Reflect.getPrototypeOf(n);function nl(n,e,t=!1,i=!1){n=n.__v_raw;const s=me(n),r=me(e);t||(e!==r&&Jt(s,"get",e),Jt(s,"get",r));const{has:o}=Bu(s),a=i?Np:t?Mp:Op;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function il(n,e=!1){const t=this.__v_raw,i=me(t),s=me(n);return e||(n!==s&&Jt(i,"has",n),Jt(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function sl(n,e=!1){return n=n.__v_raw,!e&&Jt(me(n),"iterate",Fs),Reflect.get(n,"size",n)}function Ny(n){n=me(n);const e=me(this);return Bu(e).has.call(e,n)||(e.add(n),ui(e,"add",n,n)),this}function xy(n,e){e=me(e);const t=me(this),{has:i,get:s}=Bu(t);let r=i.call(t,n);r||(n=me(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?ql(e,o)&&ui(t,"set",n,e):ui(t,"add",n,e),this}function Py(n){const e=me(this),{has:t,get:i}=Bu(e);let s=t.call(e,n);s||(n=me(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&ui(e,"delete",n,void 0),r}function Dy(){const n=me(this),e=n.size!==0,t=n.clear();return e&&ui(n,"clear",void 0,void 0),t}function rl(n,e){return function(i,s){const r=this,o=r.__v_raw,a=me(o),c=e?Np:n?Mp:Op;return!n&&Jt(a,"iterate",Fs),o.forEach((l,u)=>i.call(s,c(l),c(u),r))}}function ol(n,e,t){return function(...i){const s=this.__v_raw,r=me(s),o=Or(r),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=s[n](...i),u=t?Np:e?Mp:Op;return!e&&Jt(r,"iterate",c?Xd:Fs),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function bi(n){return function(...e){return n==="delete"?!1:this}}function aA(){const n={get(r){return nl(this,r)},get size(){return sl(this)},has:il,add:Ny,set:xy,delete:Py,clear:Dy,forEach:rl(!1,!1)},e={get(r){return nl(this,r,!1,!0)},get size(){return sl(this)},has:il,add:Ny,set:xy,delete:Py,clear:Dy,forEach:rl(!1,!0)},t={get(r){return nl(this,r,!0)},get size(){return sl(this,!0)},has(r){return il.call(this,r,!0)},add:bi("add"),set:bi("set"),delete:bi("delete"),clear:bi("clear"),forEach:rl(!0,!1)},i={get(r){return nl(this,r,!0,!0)},get size(){return sl(this,!0)},has(r){return il.call(this,r,!0)},add:bi("add"),set:bi("set"),delete:bi("delete"),clear:bi("clear"),forEach:rl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=ol(r,!1,!1),t[r]=ol(r,!0,!1),e[r]=ol(r,!1,!0),i[r]=ol(r,!0,!0)}),[n,t,e,i]}const[cA,lA,uA,hA]=aA();function xp(n,e){const t=e?n?hA:uA:n?lA:cA;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(fe(t,s)&&s in i?t:i,s,r)}const dA={get:xp(!1,!1)},fA={get:xp(!1,!0)},pA={get:xp(!0,!1)},tI=new WeakMap,nI=new WeakMap,iI=new WeakMap,gA=new WeakMap;function mA(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yA(n){return n.__v_skip||!Object.isExtensible(n)?0:mA(PS(n))}function Pp(n){return Na(n)?n:Dp(n,!1,eI,dA,tI)}function _A(n){return Dp(n,!1,oA,fA,nI)}function sI(n){return Dp(n,!0,rA,pA,iI)}function Dp(n,e,t,i,s){if(!Se(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=yA(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Mr(n){return Na(n)?Mr(n.__v_raw):!!(n&&n.__v_isReactive)}function Na(n){return!!(n&&n.__v_isReadonly)}function Zd(n){return!!(n&&n.__v_isShallow)}function rI(n){return Mr(n)||Na(n)}function me(n){const e=n&&n.__v_raw;return e?me(e):n}function oI(n){return $l(n,"__v_skip",!0),n}const Op=n=>Se(n)?Pp(n):n,Mp=n=>Se(n)?sI(n):n;function vA(n){Ui&&In&&(n=me(n),Xw(n.dep||(n.dep=Ap())))}function wA(n,e){n=me(n);const t=n.dep;t&&Jd(t)}function Ut(n){return!!(n&&n.__v_isRef===!0)}function IA(n){return Ut(n)?n.value:n}const EA={get:(n,e,t)=>IA(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Ut(s)&&!Ut(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function aI(n){return Mr(n)?n:new Proxy(n,EA)}class TA{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new kp(e,()=>{this._dirty||(this._dirty=!0,wA(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=me(this);return vA(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function bA(n,e,t=!1){let i,s;const r=ie(n);return r?(i=n,s=Sn):(i=n.get,s=n.set),new TA(i,s,r||!s,t)}function Vi(n,e,t,i){let s;try{s=i?n(...i):n()}catch(r){qu(r,e,t)}return s}function pn(n,e,t,i){if(ie(n)){const r=Vi(n,e,t,i);return r&&$w(r)&&r.catch(o=>{qu(o,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(pn(n[r],e,t,i));return s}function qu(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](n,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Vi(c,null,10,[n,o,a]);return}}CA(n,t,s,i)}function CA(n,e,t,i=!0){console.error(n)}let xa=!1,ef=!1;const Pt=[];let Un=0;const Lr=[];let ti=null,Is=0;const cI=Promise.resolve();let Lp=null;function SA(n){const e=Lp||cI;return n?e.then(this?n.bind(this):n):e}function AA(n){let e=Un+1,t=Pt.length;for(;e<t;){const i=e+t>>>1;Pa(Pt[i])<n?e=i+1:t=i}return e}function Fp(n){(!Pt.length||!Pt.includes(n,xa&&n.allowRecurse?Un+1:Un))&&(n.id==null?Pt.push(n):Pt.splice(AA(n.id),0,n),lI())}function lI(){!xa&&!ef&&(ef=!0,Lp=cI.then(hI))}function kA(n){const e=Pt.indexOf(n);e>Un&&Pt.splice(e,1)}function RA(n){Q(n)?Lr.push(...n):(!ti||!ti.includes(n,n.allowRecurse?Is+1:Is))&&Lr.push(n),lI()}function Oy(n,e=xa?Un+1:0){for(;e<Pt.length;e++){const t=Pt[e];t&&t.pre&&(Pt.splice(e,1),e--,t())}}function uI(n){if(Lr.length){const e=[...new Set(Lr)];if(Lr.length=0,ti){ti.push(...e);return}for(ti=e,ti.sort((t,i)=>Pa(t)-Pa(i)),Is=0;Is<ti.length;Is++)ti[Is]();ti=null,Is=0}}const Pa=n=>n.id==null?1/0:n.id,NA=(n,e)=>{const t=Pa(n)-Pa(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function hI(n){ef=!1,xa=!0,Pt.sort(NA);const e=Sn;try{for(Un=0;Un<Pt.length;Un++){const t=Pt[Un];t&&t.active!==!1&&Vi(t,null,14)}}finally{Un=0,Pt.length=0,uI(),xa=!1,Lp=null,(Pt.length||Lr.length)&&hI()}}function xA(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||De;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||De;d&&(s=t.map(f=>nt(f)?f.trim():f)),h&&(s=t.map(Kd))}let a,c=i[a=sd(e)]||i[a=sd(Qr(e))];!c&&r&&(c=i[a=sd(vo(e))]),c&&pn(c,n,6,s);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,pn(l,n,6,s)}}function dI(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!ie(n)){const c=l=>{const u=dI(l,e,!0);u&&(a=!0,st(o,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!r&&!a?(Se(n)&&i.set(n,null),null):(Q(r)?r.forEach(c=>o[c]=null):st(o,r),Se(n)&&i.set(n,o),o)}function $u(n,e){return!n||!Fu(e)?!1:(e=e.slice(2).replace(/Once$/,""),fe(n,e[0].toLowerCase()+e.slice(1))||fe(n,vo(e))||fe(n,e))}let hn=null,ju=null;function zl(n){const e=hn;return hn=n,ju=n&&n.type.__scopeId||null,e}function PA(n){ju=n}function DA(){ju=null}function tf(n,e=hn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Gy(-1);const r=zl(e);let o;try{o=n(...s)}finally{zl(r),i._d&&Gy(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function rd(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:y}=n;let E,V;const W=zl(n);try{if(t.shapeFlag&4){const M=s||i;E=Fn(u.call(M,M,h,r,f,d,m)),V=c}else{const M=e;E=Fn(M.length>1?M(r,{attrs:c,slots:a,emit:l}):M(r,null)),V=e.props?c:OA(c)}}catch(M){pa.length=0,qu(M,n,1),E=Vt(An)}let U=E;if(V&&y!==!1){const M=Object.keys(V),{shapeFlag:ne}=U;M.length&&ne&7&&(o&&M.some(Tp)&&(V=MA(V,o)),U=ji(U,V))}return t.dirs&&(U=ji(U),U.dirs=U.dirs?U.dirs.concat(t.dirs):t.dirs),t.transition&&(U.transition=t.transition),E=U,zl(W),E}const OA=n=>{let e;for(const t in n)(t==="class"||t==="style"||Fu(t))&&((e||(e={}))[t]=n[t]);return e},MA=(n,e)=>{const t={};for(const i in n)(!Tp(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function LA(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?My(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!$u(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?My(i,o,l):!0:!!o;return!1}function My(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!$u(t,r))return!0}return!1}function FA({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const UA=n=>n.__isSuspense;function VA(n,e){e&&e.pendingBranch?Q(n)?e.effects.push(...n):e.effects.push(n):RA(n)}const al={};function od(n,e,t){return fI(n,e,t)}function fI(n,e,{immediate:t,deep:i,flush:s,onTrack:r,onTrigger:o}=De){var a;const c=WS()===((a=Tt)==null?void 0:a.scope)?Tt:null;let l,u=!1,h=!1;if(Ut(n)?(l=()=>n.value,u=Zd(n)):Mr(n)?(l=()=>n,i=!0):Q(n)?(h=!0,u=n.some(M=>Mr(M)||Zd(M)),l=()=>n.map(M=>{if(Ut(M))return M.value;if(Mr(M))return Ns(M);if(ie(M))return Vi(M,c,2)})):ie(n)?e?l=()=>Vi(n,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),pn(n,c,3,[f])}:l=Sn,e&&i){const M=l;l=()=>Ns(M())}let d,f=M=>{d=W.onStop=()=>{Vi(M,c,4)}},m;if(Oa)if(f=Sn,e?t&&pn(e,c,3,[l(),h?[]:void 0,f]):l(),s==="sync"){const M=Fk();m=M.__watcherHandles||(M.__watcherHandles=[])}else return Sn;let y=h?new Array(n.length).fill(al):al;const E=()=>{if(W.active)if(e){const M=W.run();(i||u||(h?M.some((ne,se)=>ql(ne,y[se])):ql(M,y)))&&(d&&d(),pn(e,c,3,[M,y===al?void 0:h&&y[0]===al?[]:y,f]),y=M)}else W.run()};E.allowRecurse=!!e;let V;s==="sync"?V=E:s==="post"?V=()=>zt(E,c&&c.suspense):(E.pre=!0,c&&(E.id=c.uid),V=()=>Fp(E));const W=new kp(l,V);e?t?E():y=W.run():s==="post"?zt(W.run.bind(W),c&&c.suspense):W.run();const U=()=>{W.stop(),c&&c.scope&&bp(c.scope.effects,W)};return m&&m.push(U),U}function BA(n,e,t){const i=this.proxy,s=nt(n)?n.includes(".")?pI(i,n):()=>i[n]:n.bind(i,i);let r;ie(e)?r=e:(r=e.handler,t=e);const o=Tt;Yr(this);const a=fI(s,r.bind(i),t);return o?Yr(o):Us(),a}function pI(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function Ns(n,e){if(!Se(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Ut(n))Ns(n.value,e);else if(Q(n))for(let t=0;t<n.length;t++)Ns(n[t],e);else if(qw(n)||Or(n))n.forEach(t=>{Ns(t,e)});else if(zw(n))for(const t in n)Ns(n[t],e);return n}function nn(n,e){const t=hn;if(t===null)return n;const i=Hu(t)||t.proxy,s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=De]=e[r];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&Ns(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:c,modifiers:l}))}return n}function fs(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(wo(),pn(c,t,8,[n.el,a,n,e]),Io())}}function qA(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vI(()=>{n.isMounted=!0}),wI(()=>{n.isUnmounting=!0}),n}const ln=[Function,Array],gI={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ln,onEnter:ln,onAfterEnter:ln,onEnterCancelled:ln,onBeforeLeave:ln,onLeave:ln,onAfterLeave:ln,onLeaveCancelled:ln,onBeforeAppear:ln,onAppear:ln,onAfterAppear:ln,onAppearCancelled:ln},$A={name:"BaseTransition",props:gI,setup(n,{slots:e}){const t=kk(),i=qA();let s;return()=>{const r=e.default&&yI(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const y of r)if(y.type!==An){o=y;break}}const a=me(n),{mode:c}=a;if(i.isLeaving)return ad(o);const l=Ly(o);if(!l)return ad(o);const u=nf(l,a,i,t);sf(l,u);const h=t.subTree,d=h&&Ly(h);let f=!1;const{getTransitionKey:m}=l.type;if(m){const y=m();s===void 0?s=y:y!==s&&(s=y,f=!0)}if(d&&d.type!==An&&(!Es(l,d)||f)){const y=nf(d,a,i,t);if(sf(d,y),c==="out-in")return i.isLeaving=!0,y.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&t.update()},ad(o);c==="in-out"&&l.type!==An&&(y.delayLeave=(E,V,W)=>{const U=mI(i,d);U[String(d.key)]=d,E._leaveCb=()=>{V(),E._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=W})}return o}}},jA=$A;function mI(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function nf(n,e,t,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:m,onBeforeAppear:y,onAppear:E,onAfterAppear:V,onAppearCancelled:W}=e,U=String(n.key),M=mI(t,n),ne=(Y,ye)=>{Y&&pn(Y,i,9,ye)},se=(Y,ye)=>{const Ce=ye[1];ne(Y,ye),Q(Y)?Y.every(Nt=>Nt.length<=1)&&Ce():Y.length<=1&&Ce()},Ie={mode:r,persisted:o,beforeEnter(Y){let ye=a;if(!t.isMounted)if(s)ye=y||a;else return;Y._leaveCb&&Y._leaveCb(!0);const Ce=M[U];Ce&&Es(n,Ce)&&Ce.el._leaveCb&&Ce.el._leaveCb(),ne(ye,[Y])},enter(Y){let ye=c,Ce=l,Nt=u;if(!t.isMounted)if(s)ye=E||c,Ce=V||l,Nt=W||u;else return;let G=!1;const Be=Y._enterCb=en=>{G||(G=!0,en?ne(Nt,[Y]):ne(Ce,[Y]),Ie.delayedLeave&&Ie.delayedLeave(),Y._enterCb=void 0)};ye?se(ye,[Y,Be]):Be()},leave(Y,ye){const Ce=String(n.key);if(Y._enterCb&&Y._enterCb(!0),t.isUnmounting)return ye();ne(h,[Y]);let Nt=!1;const G=Y._leaveCb=Be=>{Nt||(Nt=!0,ye(),Be?ne(m,[Y]):ne(f,[Y]),Y._leaveCb=void 0,M[Ce]===n&&delete M[Ce])};M[Ce]=n,d?se(d,[Y,G]):G()},clone(Y){return nf(Y,e,t,i)}};return Ie}function ad(n){if(zu(n))return n=ji(n),n.children=null,n}function Ly(n){return zu(n)?n.children?n.children[0]:void 0:n}function sf(n,e){n.shapeFlag&6&&n.component?sf(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function yI(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===sn?(o.patchFlag&128&&s++,i=i.concat(yI(o.children,e,a))):(e||o.type!==An)&&i.push(a!=null?ji(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}const Sl=n=>!!n.type.__asyncLoader,zu=n=>n.type.__isKeepAlive;function zA(n,e){_I(n,"a",e)}function WA(n,e){_I(n,"da",e)}function _I(n,e,t=Tt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Wu(e,i,t),t){let s=t.parent;for(;s&&s.parent;)zu(s.parent.vnode)&&GA(i,e,t,s),s=s.parent}}function GA(n,e,t,i){const s=Wu(e,n,i,!0);II(()=>{bp(i[e],s)},t)}function Wu(n,e,t=Tt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;wo(),Yr(t);const a=pn(e,t,n,o);return Us(),Io(),a});return i?s.unshift(r):s.push(r),r}}const mi=n=>(e,t=Tt)=>(!Oa||n==="sp")&&Wu(n,(...i)=>e(...i),t),KA=mi("bm"),vI=mi("m"),HA=mi("bu"),QA=mi("u"),wI=mi("bum"),II=mi("um"),YA=mi("sp"),XA=mi("rtg"),JA=mi("rtc");function ZA(n,e=Tt){Wu("ec",n,e)}const ek=Symbol.for("v-ndc");function Fy(n,e,t,i){let s;const r=t&&t[i];if(Q(n)||nt(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,r&&r[o])}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(Se(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(n[l],l,a,r&&r[a])}}else s=[];return t&&(t[i]=s),s}const rf=n=>n?PI(n)?Hu(n)||n.proxy:rf(n.parent):null,fa=st(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>rf(n.parent),$root:n=>rf(n.root),$emit:n=>n.emit,$options:n=>Up(n),$forceUpdate:n=>n.f||(n.f=()=>Fp(n.update)),$nextTick:n=>n.n||(n.n=SA.bind(n.proxy)),$watch:n=>BA.bind(n)}),cd=(n,e)=>n!==De&&!n.__isScriptSetup&&fe(n,e),tk={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=n;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(cd(i,e))return o[e]=1,i[e];if(s!==De&&fe(s,e))return o[e]=2,s[e];if((l=n.propsOptions[0])&&fe(l,e))return o[e]=3,r[e];if(t!==De&&fe(t,e))return o[e]=4,t[e];of&&(o[e]=0)}}const u=fa[e];let h,d;if(u)return e==="$attrs"&&Jt(n,"get",e),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==De&&fe(t,e))return o[e]=4,t[e];if(d=c.config.globalProperties,fe(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return cd(s,e)?(s[e]=t,!0):i!==De&&fe(i,e)?(i[e]=t,!0):fe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==De&&fe(n,o)||cd(e,o)||(a=r[0])&&fe(a,o)||fe(i,o)||fe(fa,o)||fe(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:fe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Uy(n){return Q(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let of=!0;function nk(n){const e=Up(n),t=n.proxy,i=n.ctx;of=!1,e.beforeCreate&&Vy(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:y,deactivated:E,beforeDestroy:V,beforeUnmount:W,destroyed:U,unmounted:M,render:ne,renderTracked:se,renderTriggered:Ie,errorCaptured:Y,serverPrefetch:ye,expose:Ce,inheritAttrs:Nt,components:G,directives:Be,filters:en}=e;if(l&&ik(l,i,null),o)for(const $e in o){const Ae=o[$e];ie(Ae)&&(i[$e]=Ae.bind(t))}if(s){const $e=s.call(t,t);Se($e)&&(n.data=Pp($e))}if(of=!0,r)for(const $e in r){const Ae=r[$e],hs=ie(Ae)?Ae.bind(t,t):ie(Ae.get)?Ae.get.bind(t,t):Sn,Zc=!ie(Ae)&&ie(Ae.set)?Ae.set.bind(t):Sn,ds=Ok({get:hs,set:Zc});Object.defineProperty(i,$e,{enumerable:!0,configurable:!0,get:()=>ds.value,set:On=>ds.value=On})}if(a)for(const $e in a)EI(a[$e],i,t,$e);if(c){const $e=ie(c)?c.call(t):c;Reflect.ownKeys($e).forEach(Ae=>{lk(Ae,$e[Ae])})}u&&Vy(u,n,"c");function ct($e,Ae){Q(Ae)?Ae.forEach(hs=>$e(hs.bind(t))):Ae&&$e(Ae.bind(t))}if(ct(KA,h),ct(vI,d),ct(HA,f),ct(QA,m),ct(zA,y),ct(WA,E),ct(ZA,Y),ct(JA,se),ct(XA,Ie),ct(wI,W),ct(II,M),ct(YA,ye),Q(Ce))if(Ce.length){const $e=n.exposed||(n.exposed={});Ce.forEach(Ae=>{Object.defineProperty($e,Ae,{get:()=>t[Ae],set:hs=>t[Ae]=hs})})}else n.exposed||(n.exposed={});ne&&n.render===Sn&&(n.render=ne),Nt!=null&&(n.inheritAttrs=Nt),G&&(n.components=G),Be&&(n.directives=Be)}function ik(n,e,t=Sn){Q(n)&&(n=af(n));for(const i in n){const s=n[i];let r;Se(s)?"default"in s?r=Al(s.from||i,s.default,!0):r=Al(s.from||i):r=Al(s),Ut(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Vy(n,e,t){pn(Q(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function EI(n,e,t,i){const s=i.includes(".")?pI(t,i):()=>t[i];if(nt(n)){const r=e[n];ie(r)&&od(s,r)}else if(ie(n))od(s,n.bind(t));else if(Se(n))if(Q(n))n.forEach(r=>EI(r,e,t,i));else{const r=ie(n.handler)?n.handler.bind(t):e[n.handler];ie(r)&&od(s,r,n)}}function Up(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!t&&!i?c=e:(c={},s.length&&s.forEach(l=>Wl(c,l,o,!0)),Wl(c,e,o)),Se(e)&&r.set(e,c),c}function Wl(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Wl(n,r,t,!0),s&&s.forEach(o=>Wl(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=sk[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const sk={data:By,props:qy,emits:qy,methods:ra,computed:ra,beforeCreate:Mt,created:Mt,beforeMount:Mt,mounted:Mt,beforeUpdate:Mt,updated:Mt,beforeDestroy:Mt,beforeUnmount:Mt,destroyed:Mt,unmounted:Mt,activated:Mt,deactivated:Mt,errorCaptured:Mt,serverPrefetch:Mt,components:ra,directives:ra,watch:ok,provide:By,inject:rk};function By(n,e){return e?n?function(){return st(ie(n)?n.call(this,this):n,ie(e)?e.call(this,this):e)}:e:n}function rk(n,e){return ra(af(n),af(e))}function af(n){if(Q(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Mt(n,e){return n?[...new Set([].concat(n,e))]:e}function ra(n,e){return n?st(Object.create(null),n,e):e}function qy(n,e){return n?Q(n)&&Q(e)?[...new Set([...n,...e])]:st(Object.create(null),Uy(n),Uy(e??{})):e}function ok(n,e){if(!n)return e;if(!e)return n;const t=st(Object.create(null),n);for(const i in e)t[i]=Mt(n[i],e[i]);return t}function TI(){return{app:null,config:{isNativeTag:RS,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ak=0;function ck(n,e){return function(i,s=null){ie(i)||(i=st({},i)),s!=null&&!Se(s)&&(s=null);const r=TI(),o=new Set;let a=!1;const c=r.app={_uid:ak++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Uk,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&ie(l.install)?(o.add(l),l.install(c,...u)):ie(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const d=Vt(i,s);return d.appContext=r,u&&e?e(d,l):n(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Hu(d.component)||d.component.proxy}},unmount(){a&&(n(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c},runWithContext(l){Gl=c;try{return l()}finally{Gl=null}}};return c}}let Gl=null;function lk(n,e){if(Tt){let t=Tt.provides;const i=Tt.parent&&Tt.parent.provides;i===t&&(t=Tt.provides=Object.create(i)),t[n]=e}}function Al(n,e,t=!1){const i=Tt||hn;if(i||Gl){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Gl._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ie(e)?e.call(i&&i.proxy):e}}function uk(n,e,t,i=!1){const s={},r={};$l(r,Ku,1),n.propsDefaults=Object.create(null),bI(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:_A(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function hk(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=me(s),[c]=n.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if($u(n.emitsOptions,d))continue;const f=e[d];if(c)if(fe(r,d))f!==r[d]&&(r[d]=f,l=!0);else{const m=Qr(d);s[m]=cf(c,a,m,f,n,!1)}else f!==r[d]&&(r[d]=f,l=!0)}}}else{bI(n,e,s,r)&&(l=!0);let u;for(const h in a)(!e||!fe(e,h)&&((u=vo(h))===h||!fe(e,u)))&&(c?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=cf(c,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!fe(e,h))&&(delete r[h],l=!0)}l&&ui(n,"set","$attrs")}function bI(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(bl(c))continue;const l=e[c];let u;s&&fe(s,u=Qr(c))?!r||!r.includes(u)?t[u]=l:(a||(a={}))[u]=l:$u(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=me(t),l=a||De;for(let u=0;u<r.length;u++){const h=r[u];t[h]=cf(s,c,h,l[h],n,!fe(l,h))}}return o}function cf(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=fe(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ie(c)){const{propsDefaults:l}=s;t in l?i=l[t]:(Yr(s),i=l[t]=c.call(null,e),Us())}else i=c}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===vo(t))&&(i=!0))}return i}function CI(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let c=!1;if(!ie(n)){const u=h=>{c=!0;const[d,f]=CI(h,e,!0);st(o,d),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!c)return Se(n)&&i.set(n,Dr),Dr;if(Q(r))for(let u=0;u<r.length;u++){const h=Qr(r[u]);$y(h)&&(o[h]=De)}else if(r)for(const u in r){const h=Qr(u);if($y(h)){const d=r[u],f=o[h]=Q(d)||ie(d)?{type:d}:st({},d);if(f){const m=Wy(Boolean,f.type),y=Wy(String,f.type);f[0]=m>-1,f[1]=y<0||m<y,(m>-1||fe(f,"default"))&&a.push(h)}}}const l=[o,a];return Se(n)&&i.set(n,l),l}function $y(n){return n[0]!=="$"}function jy(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function zy(n,e){return jy(n)===jy(e)}function Wy(n,e){return Q(e)?e.findIndex(t=>zy(t,n)):ie(e)&&zy(e,n)?0:-1}const SI=n=>n[0]==="_"||n==="$stable",Vp=n=>Q(n)?n.map(Fn):[Fn(n)],dk=(n,e,t)=>{if(e._n)return e;const i=tf((...s)=>Vp(e(...s)),t);return i._c=!1,i},AI=(n,e,t)=>{const i=n._ctx;for(const s in n){if(SI(s))continue;const r=n[s];if(ie(r))e[s]=dk(s,r,i);else if(r!=null){const o=Vp(r);e[s]=()=>o}}},kI=(n,e)=>{const t=Vp(e);n.slots.default=()=>t},fk=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=me(e),$l(e,"_",t)):AI(e,n.slots={})}else n.slots={},e&&kI(n,e);$l(n.slots,Ku,1)},pk=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=De;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(st(s,e),!t&&a===1&&delete s._):(r=!e.$stable,AI(e,s)),o=e}else e&&(kI(n,e),o={default:1});if(r)for(const a in s)!SI(a)&&!(a in o)&&delete s[a]};function lf(n,e,t,i,s=!1){if(Q(n)){n.forEach((d,f)=>lf(d,e&&(Q(e)?e[f]:e),t,i,s));return}if(Sl(i)&&!s)return;const r=i.shapeFlag&4?Hu(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:c}=n,l=e&&e.r,u=a.refs===De?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(nt(l)?(u[l]=null,fe(h,l)&&(h[l]=null)):Ut(l)&&(l.value=null)),ie(c))Vi(c,a,12,[o,u]);else{const d=nt(c),f=Ut(c);if(d||f){const m=()=>{if(n.f){const y=d?fe(h,c)?h[c]:u[c]:c.value;s?Q(y)&&bp(y,r):Q(y)?y.includes(r)||y.push(r):d?(u[c]=[r],fe(h,c)&&(h[c]=u[c])):(c.value=[r],n.k&&(u[n.k]=c.value))}else d?(u[c]=o,fe(h,c)&&(h[c]=o)):f&&(c.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,zt(m,t)):m()}}}const zt=VA;function gk(n){return mk(n)}function mk(n,e){const t=Hd();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Sn,insertStaticContent:m}=n,y=(p,g,w,b=null,T=null,N=null,L=!1,R=null,P=!!g.dynamicChildren)=>{if(p===g)return;p&&!Es(p,g)&&(b=el(p),On(p,T,N,!0),p=null),g.patchFlag===-2&&(P=!1,g.dynamicChildren=null);const{type:S,ref:K,shapeFlag:B}=g;switch(S){case Gu:E(p,g,w,b);break;case An:V(p,g,w,b);break;case ld:p==null&&W(g,w,b,L);break;case sn:G(p,g,w,b,T,N,L,R,P);break;default:B&1?ne(p,g,w,b,T,N,L,R,P):B&6?Be(p,g,w,b,T,N,L,R,P):(B&64||B&128)&&S.process(p,g,w,b,T,N,L,R,P,vr)}K!=null&&T&&lf(K,p&&p.ref,N,g||p,!g)},E=(p,g,w,b)=>{if(p==null)i(g.el=a(g.children),w,b);else{const T=g.el=p.el;g.children!==p.children&&l(T,g.children)}},V=(p,g,w,b)=>{p==null?i(g.el=c(g.children||""),w,b):g.el=p.el},W=(p,g,w,b)=>{[p.el,p.anchor]=m(p.children,g,w,b,p.el,p.anchor)},U=({el:p,anchor:g},w,b)=>{let T;for(;p&&p!==g;)T=d(p),i(p,w,b),p=T;i(g,w,b)},M=({el:p,anchor:g})=>{let w;for(;p&&p!==g;)w=d(p),s(p),p=w;s(g)},ne=(p,g,w,b,T,N,L,R,P)=>{L=L||g.type==="svg",p==null?se(g,w,b,T,N,L,R,P):ye(p,g,T,N,L,R,P)},se=(p,g,w,b,T,N,L,R)=>{let P,S;const{type:K,props:B,shapeFlag:H,transition:Z,dirs:ce}=p;if(P=p.el=o(p.type,N,B&&B.is,B),H&8?u(P,p.children):H&16&&Y(p.children,P,null,b,T,N&&K!=="foreignObject",L,R),ce&&fs(p,null,b,"created"),Ie(P,p,p.scopeId,L,b),B){for(const Ee in B)Ee!=="value"&&!bl(Ee)&&r(P,Ee,null,B[Ee],N,p.children,b,T,ei);"value"in B&&r(P,"value",null,B.value),(S=B.onVnodeBeforeMount)&&Ln(S,b,p)}ce&&fs(p,null,b,"beforeMount");const ke=(!T||T&&!T.pendingBranch)&&Z&&!Z.persisted;ke&&Z.beforeEnter(P),i(P,g,w),((S=B&&B.onVnodeMounted)||ke||ce)&&zt(()=>{S&&Ln(S,b,p),ke&&Z.enter(P),ce&&fs(p,null,b,"mounted")},T)},Ie=(p,g,w,b,T)=>{if(w&&f(p,w),b)for(let N=0;N<b.length;N++)f(p,b[N]);if(T){let N=T.subTree;if(g===N){const L=T.vnode;Ie(p,L,L.scopeId,L.slotScopeIds,T.parent)}}},Y=(p,g,w,b,T,N,L,R,P=0)=>{for(let S=P;S<p.length;S++){const K=p[S]=R?Pi(p[S]):Fn(p[S]);y(null,K,g,w,b,T,N,L,R)}},ye=(p,g,w,b,T,N,L)=>{const R=g.el=p.el;let{patchFlag:P,dynamicChildren:S,dirs:K}=g;P|=p.patchFlag&16;const B=p.props||De,H=g.props||De;let Z;w&&ps(w,!1),(Z=H.onVnodeBeforeUpdate)&&Ln(Z,w,g,p),K&&fs(g,p,w,"beforeUpdate"),w&&ps(w,!0);const ce=T&&g.type!=="foreignObject";if(S?Ce(p.dynamicChildren,S,R,w,b,ce,N):L||Ae(p,g,R,null,w,b,ce,N,!1),P>0){if(P&16)Nt(R,g,B,H,w,b,T);else if(P&2&&B.class!==H.class&&r(R,"class",null,H.class,T),P&4&&r(R,"style",B.style,H.style,T),P&8){const ke=g.dynamicProps;for(let Ee=0;Ee<ke.length;Ee++){const Ze=ke[Ee],_n=B[Ze],wr=H[Ze];(wr!==_n||Ze==="value")&&r(R,Ze,_n,wr,T,p.children,w,b,ei)}}P&1&&p.children!==g.children&&u(R,g.children)}else!L&&S==null&&Nt(R,g,B,H,w,b,T);((Z=H.onVnodeUpdated)||K)&&zt(()=>{Z&&Ln(Z,w,g,p),K&&fs(g,p,w,"updated")},b)},Ce=(p,g,w,b,T,N,L)=>{for(let R=0;R<g.length;R++){const P=p[R],S=g[R],K=P.el&&(P.type===sn||!Es(P,S)||P.shapeFlag&70)?h(P.el):w;y(P,S,K,null,b,T,N,L,!0)}},Nt=(p,g,w,b,T,N,L)=>{if(w!==b){if(w!==De)for(const R in w)!bl(R)&&!(R in b)&&r(p,R,w[R],null,L,g.children,T,N,ei);for(const R in b){if(bl(R))continue;const P=b[R],S=w[R];P!==S&&R!=="value"&&r(p,R,S,P,L,g.children,T,N,ei)}"value"in b&&r(p,"value",w.value,b.value)}},G=(p,g,w,b,T,N,L,R,P)=>{const S=g.el=p?p.el:a(""),K=g.anchor=p?p.anchor:a("");let{patchFlag:B,dynamicChildren:H,slotScopeIds:Z}=g;Z&&(R=R?R.concat(Z):Z),p==null?(i(S,w,b),i(K,w,b),Y(g.children,w,K,T,N,L,R,P)):B>0&&B&64&&H&&p.dynamicChildren?(Ce(p.dynamicChildren,H,w,T,N,L,R),(g.key!=null||T&&g===T.subTree)&&RI(p,g,!0)):Ae(p,g,w,K,T,N,L,R,P)},Be=(p,g,w,b,T,N,L,R,P)=>{g.slotScopeIds=R,p==null?g.shapeFlag&512?T.ctx.activate(g,w,b,L,P):en(g,w,b,T,N,L,P):Bo(p,g,P)},en=(p,g,w,b,T,N,L)=>{const R=p.component=Ak(p,b,T);if(zu(p)&&(R.ctx.renderer=vr),Rk(R),R.asyncDep){if(T&&T.registerDep(R,ct),!p.el){const P=R.subTree=Vt(An);V(null,P,g,w)}return}ct(R,p,g,w,T,N,L)},Bo=(p,g,w)=>{const b=g.component=p.component;if(LA(p,g,w))if(b.asyncDep&&!b.asyncResolved){$e(b,g,w);return}else b.next=g,kA(b.update),b.update();else g.el=p.el,b.vnode=g},ct=(p,g,w,b,T,N,L)=>{const R=()=>{if(p.isMounted){let{next:K,bu:B,u:H,parent:Z,vnode:ce}=p,ke=K,Ee;ps(p,!1),K?(K.el=ce.el,$e(p,K,L)):K=ce,B&&Cl(B),(Ee=K.props&&K.props.onVnodeBeforeUpdate)&&Ln(Ee,Z,K,ce),ps(p,!0);const Ze=rd(p),_n=p.subTree;p.subTree=Ze,y(_n,Ze,h(_n.el),el(_n),p,T,N),K.el=Ze.el,ke===null&&FA(p,Ze.el),H&&zt(H,T),(Ee=K.props&&K.props.onVnodeUpdated)&&zt(()=>Ln(Ee,Z,K,ce),T)}else{let K;const{el:B,props:H}=g,{bm:Z,m:ce,parent:ke}=p,Ee=Sl(g);if(ps(p,!1),Z&&Cl(Z),!Ee&&(K=H&&H.onVnodeBeforeMount)&&Ln(K,ke,g),ps(p,!0),B&&id){const Ze=()=>{p.subTree=rd(p),id(B,p.subTree,p,T,null)};Ee?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Ze()):Ze()}else{const Ze=p.subTree=rd(p);y(null,Ze,w,b,p,T,N),g.el=Ze.el}if(ce&&zt(ce,T),!Ee&&(K=H&&H.onVnodeMounted)){const Ze=g;zt(()=>Ln(K,ke,Ze),T)}(g.shapeFlag&256||ke&&Sl(ke.vnode)&&ke.vnode.shapeFlag&256)&&p.a&&zt(p.a,T),p.isMounted=!0,g=w=b=null}},P=p.effect=new kp(R,()=>Fp(S),p.scope),S=p.update=()=>P.run();S.id=p.uid,ps(p,!0),S()},$e=(p,g,w)=>{g.component=p;const b=p.vnode.props;p.vnode=g,p.next=null,hk(p,g.props,b,w),pk(p,g.children,w),wo(),Oy(),Io()},Ae=(p,g,w,b,T,N,L,R,P=!1)=>{const S=p&&p.children,K=p?p.shapeFlag:0,B=g.children,{patchFlag:H,shapeFlag:Z}=g;if(H>0){if(H&128){Zc(S,B,w,b,T,N,L,R,P);return}else if(H&256){hs(S,B,w,b,T,N,L,R,P);return}}Z&8?(K&16&&ei(S,T,N),B!==S&&u(w,B)):K&16?Z&16?Zc(S,B,w,b,T,N,L,R,P):ei(S,T,N,!0):(K&8&&u(w,""),Z&16&&Y(B,w,b,T,N,L,R,P))},hs=(p,g,w,b,T,N,L,R,P)=>{p=p||Dr,g=g||Dr;const S=p.length,K=g.length,B=Math.min(S,K);let H;for(H=0;H<B;H++){const Z=g[H]=P?Pi(g[H]):Fn(g[H]);y(p[H],Z,w,null,T,N,L,R,P)}S>K?ei(p,T,N,!0,!1,B):Y(g,w,b,T,N,L,R,P,B)},Zc=(p,g,w,b,T,N,L,R,P)=>{let S=0;const K=g.length;let B=p.length-1,H=K-1;for(;S<=B&&S<=H;){const Z=p[S],ce=g[S]=P?Pi(g[S]):Fn(g[S]);if(Es(Z,ce))y(Z,ce,w,null,T,N,L,R,P);else break;S++}for(;S<=B&&S<=H;){const Z=p[B],ce=g[H]=P?Pi(g[H]):Fn(g[H]);if(Es(Z,ce))y(Z,ce,w,null,T,N,L,R,P);else break;B--,H--}if(S>B){if(S<=H){const Z=H+1,ce=Z<K?g[Z].el:b;for(;S<=H;)y(null,g[S]=P?Pi(g[S]):Fn(g[S]),w,ce,T,N,L,R,P),S++}}else if(S>H)for(;S<=B;)On(p[S],T,N,!0),S++;else{const Z=S,ce=S,ke=new Map;for(S=ce;S<=H;S++){const tn=g[S]=P?Pi(g[S]):Fn(g[S]);tn.key!=null&&ke.set(tn.key,S)}let Ee,Ze=0;const _n=H-ce+1;let wr=!1,Ey=0;const qo=new Array(_n);for(S=0;S<_n;S++)qo[S]=0;for(S=Z;S<=B;S++){const tn=p[S];if(Ze>=_n){On(tn,T,N,!0);continue}let Mn;if(tn.key!=null)Mn=ke.get(tn.key);else for(Ee=ce;Ee<=H;Ee++)if(qo[Ee-ce]===0&&Es(tn,g[Ee])){Mn=Ee;break}Mn===void 0?On(tn,T,N,!0):(qo[Mn-ce]=S+1,Mn>=Ey?Ey=Mn:wr=!0,y(tn,g[Mn],w,null,T,N,L,R,P),Ze++)}const Ty=wr?yk(qo):Dr;for(Ee=Ty.length-1,S=_n-1;S>=0;S--){const tn=ce+S,Mn=g[tn],by=tn+1<K?g[tn+1].el:b;qo[S]===0?y(null,Mn,w,by,T,N,L,R,P):wr&&(Ee<0||S!==Ty[Ee]?ds(Mn,w,by,2):Ee--)}}},ds=(p,g,w,b,T=null)=>{const{el:N,type:L,transition:R,children:P,shapeFlag:S}=p;if(S&6){ds(p.component.subTree,g,w,b);return}if(S&128){p.suspense.move(g,w,b);return}if(S&64){L.move(p,g,w,vr);return}if(L===sn){i(N,g,w);for(let B=0;B<P.length;B++)ds(P[B],g,w,b);i(p.anchor,g,w);return}if(L===ld){U(p,g,w);return}if(b!==2&&S&1&&R)if(b===0)R.beforeEnter(N),i(N,g,w),zt(()=>R.enter(N),T);else{const{leave:B,delayLeave:H,afterLeave:Z}=R,ce=()=>i(N,g,w),ke=()=>{B(N,()=>{ce(),Z&&Z()})};H?H(N,ce,ke):ke()}else i(N,g,w)},On=(p,g,w,b=!1,T=!1)=>{const{type:N,props:L,ref:R,children:P,dynamicChildren:S,shapeFlag:K,patchFlag:B,dirs:H}=p;if(R!=null&&lf(R,null,w,p,!0),K&256){g.ctx.deactivate(p);return}const Z=K&1&&H,ce=!Sl(p);let ke;if(ce&&(ke=L&&L.onVnodeBeforeUnmount)&&Ln(ke,g,p),K&6)kS(p.component,w,b);else{if(K&128){p.suspense.unmount(w,b);return}Z&&fs(p,null,g,"beforeUnmount"),K&64?p.type.remove(p,g,w,T,vr,b):S&&(N!==sn||B>0&&B&64)?ei(S,g,w,!1,!0):(N===sn&&B&384||!T&&K&16)&&ei(P,g,w),b&&wy(p)}(ce&&(ke=L&&L.onVnodeUnmounted)||Z)&&zt(()=>{ke&&Ln(ke,g,p),Z&&fs(p,null,g,"unmounted")},w)},wy=p=>{const{type:g,el:w,anchor:b,transition:T}=p;if(g===sn){AS(w,b);return}if(g===ld){M(p);return}const N=()=>{s(w),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(p.shapeFlag&1&&T&&!T.persisted){const{leave:L,delayLeave:R}=T,P=()=>L(w,N);R?R(p.el,N,P):P()}else N()},AS=(p,g)=>{let w;for(;p!==g;)w=d(p),s(p),p=w;s(g)},kS=(p,g,w)=>{const{bum:b,scope:T,update:N,subTree:L,um:R}=p;b&&Cl(b),T.stop(),N&&(N.active=!1,On(L,p,g,w)),R&&zt(R,g),zt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},ei=(p,g,w,b=!1,T=!1,N=0)=>{for(let L=N;L<p.length;L++)On(p[L],g,w,b,T)},el=p=>p.shapeFlag&6?el(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),Iy=(p,g,w)=>{p==null?g._vnode&&On(g._vnode,null,null,!0):y(g._vnode||null,p,g,null,null,null,w),Oy(),uI(),g._vnode=p},vr={p:y,um:On,m:ds,r:wy,mt:en,mc:Y,pc:Ae,pbc:Ce,n:el,o:n};let nd,id;return e&&([nd,id]=e(vr)),{render:Iy,hydrate:nd,createApp:ck(Iy,nd)}}function ps({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function RI(n,e,t=!1){const i=n.children,s=e.children;if(Q(i)&&Q(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Pi(s[r]),a.el=o.el),t||RI(o,a)),a.type===Gu&&(a.el=o.el)}}function yk(n){const e=n.slice(),t=[0];let i,s,r,o,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(s=t[t.length-1],n[s]<l){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<l?r=a+1:o=a;l<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const _k=n=>n.__isTeleport,sn=Symbol.for("v-fgt"),Gu=Symbol.for("v-txt"),An=Symbol.for("v-cmt"),ld=Symbol.for("v-stc"),pa=[];let Tn=null;function _e(n=!1){pa.push(Tn=n?null:[])}function vk(){pa.pop(),Tn=pa[pa.length-1]||null}let Da=1;function Gy(n){Da+=n}function NI(n){return n.dynamicChildren=Da>0?Tn||Dr:null,vk(),Da>0&&Tn&&Tn.push(n),n}function Te(n,e,t,i,s,r){return NI(j(n,e,t,i,s,r,!0))}function wk(n,e,t,i,s){return NI(Vt(n,e,t,i,s,!0))}function uf(n){return n?n.__v_isVNode===!0:!1}function Es(n,e){return n.type===e.type&&n.key===e.key}const Ku="__vInternal",xI=({key:n})=>n??null,kl=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?nt(n)||Ut(n)||ie(n)?{i:hn,r:n,k:e,f:!!t}:n:null);function j(n,e=null,t=null,i=0,s=null,r=n===sn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&xI(e),ref:e&&kl(e),scopeId:ju,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:hn};return a?(Bp(c,t),r&128&&n.normalize(c)):t&&(c.shapeFlag|=nt(t)?8:16),Da>0&&!o&&Tn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Tn.push(c),c}const Vt=Ik;function Ik(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===ek)&&(n=An),uf(n)){const a=ji(n,e,!0);return t&&Bp(a,t),Da>0&&!r&&Tn&&(a.shapeFlag&6?Tn[Tn.indexOf(n)]=a:Tn.push(a)),a.patchFlag|=-2,a}if(Dk(n)&&(n=n.__vccOpts),e){e=Ek(e);let{class:a,style:c}=e;a&&!nt(a)&&(e.class=Sp(a)),Se(c)&&(rI(c)&&!Q(c)&&(c=st({},c)),e.style=Vu(c))}const o=nt(n)?1:UA(n)?128:_k(n)?64:Se(n)?4:ie(n)?2:0;return j(n,e,t,i,s,o,r,!0)}function Ek(n){return n?rI(n)||Ku in n?st({},n):n:null}function ji(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:o}=n,a=e?bk(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&xI(a),ref:e&&e.ref?t&&s?Q(s)?s.concat(kl(e)):[s,kl(e)]:kl(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==sn?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ji(n.ssContent),ssFallback:n.ssFallback&&ji(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Tk(n=" ",e=0){return Vt(Gu,null,n,e)}function He(n="",e=!1){return e?(_e(),wk(An,null,n)):Vt(An,null,n)}function Fn(n){return n==null||typeof n=="boolean"?Vt(An):Q(n)?Vt(sn,null,n.slice()):typeof n=="object"?Pi(n):Vt(Gu,null,String(n))}function Pi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ji(n)}function Bp(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Q(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Bp(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(Ku in e)?e._ctx=hn:s===3&&hn&&(hn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:hn},t=32):(e=String(e),i&64?(t=16,e=[Tk(e)]):t=8);n.children=e,n.shapeFlag|=t}function bk(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Sp([e.class,i.class]));else if(s==="style")e.style=Vu([e.style,i.style]);else if(Fu(s)){const r=e[s],o=i[s];o&&r!==o&&!(Q(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Ln(n,e,t,i=null){pn(n,e,7,[t,i])}const Ck=TI();let Sk=0;function Ak(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Ck,r={uid:Sk++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new jS(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:CI(i,s),emitsOptions:dI(i,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:i.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=xA.bind(null,r),n.ce&&n.ce(r),r}let Tt=null;const kk=()=>Tt||hn;let qp,Ir,Ky="__VUE_INSTANCE_SETTERS__";(Ir=Hd()[Ky])||(Ir=Hd()[Ky]=[]),Ir.push(n=>Tt=n),qp=n=>{Ir.length>1?Ir.forEach(e=>e(n)):Ir[0](n)};const Yr=n=>{qp(n),n.scope.on()},Us=()=>{Tt&&Tt.scope.off(),qp(null)};function PI(n){return n.vnode.shapeFlag&4}let Oa=!1;function Rk(n,e=!1){Oa=e;const{props:t,children:i}=n.vnode,s=PI(n);uk(n,t,s,e),fk(n,i);const r=s?Nk(n,e):void 0;return Oa=!1,r}function Nk(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=oI(new Proxy(n.ctx,tk));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?Pk(n):null;Yr(n),wo();const r=Vi(i,n,0,[n.props,s]);if(Io(),Us(),$w(r)){if(r.then(Us,Us),e)return r.then(o=>{Hy(n,o,e)}).catch(o=>{qu(o,n,0)});n.asyncDep=r}else Hy(n,r,e)}else DI(n,e)}function Hy(n,e,t){ie(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Se(e)&&(n.setupState=aI(e)),DI(n,t)}let Qy;function DI(n,e,t){const i=n.type;if(!n.render){if(!e&&Qy&&!i.render){const s=i.template||Up(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:c}=i,l=st(st({isCustomElement:r,delimiters:a},o),c);i.render=Qy(s,l)}}n.render=i.render||Sn}Yr(n),wo(),nk(n),Io(),Us()}function xk(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Jt(n,"get","$attrs"),e[t]}}))}function Pk(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return xk(n)},slots:n.slots,emit:n.emit,expose:e}}function Hu(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(aI(oI(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in fa)return fa[t](n)},has(e,t){return t in e||t in fa}}))}function Dk(n){return ie(n)&&"__vccOpts"in n}const Ok=(n,e)=>bA(n,e,Oa);function Mk(n,e,t){const i=arguments.length;return i===2?Se(e)&&!Q(e)?uf(e)?Vt(n,null,[e]):Vt(n,e):Vt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&uf(t)&&(t=[t]),Vt(n,e,t))}const Lk=Symbol.for("v-scx"),Fk=()=>Al(Lk),Uk="3.3.4",Vk="http://www.w3.org/2000/svg",Ts=typeof document<"u"?document:null,Yy=Ts&&Ts.createElement("template"),Bk={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e?Ts.createElementNS(Vk,n):Ts.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ts.createTextNode(n),createComment:n=>Ts.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ts.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Yy.innerHTML=i?`<svg>${n}</svg>`:n;const a=Yy.content;if(i){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function qk(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function $k(n,e,t){const i=n.style,s=nt(t);if(t&&!s){if(e&&!nt(e))for(const r in e)t[r]==null&&hf(i,r,"");for(const r in t)hf(i,r,t[r])}else{const r=i.display;s?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=r)}}const Xy=/\s*!important$/;function hf(n,e,t){if(Q(t))t.forEach(i=>hf(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=jk(n,e);Xy.test(t)?n.setProperty(vo(i),t.replace(Xy,""),"important"):n[i]=t}}const Jy=["Webkit","Moz","ms"],ud={};function jk(n,e){const t=ud[e];if(t)return t;let i=Qr(e);if(i!=="filter"&&i in n)return ud[e]=i;i=Ww(i);for(let s=0;s<Jy.length;s++){const r=Jy[s]+i;if(r in n)return ud[e]=r}return e}const Zy="http://www.w3.org/1999/xlink";function zk(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Zy,e.slice(6,e.length)):n.setAttributeNS(Zy,e,t);else{const r=qS(e);t==null||r&&!Gw(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function Wk(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const l=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";l!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let c=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Gw(t):t==null&&l==="string"?(t="",c=!0):l==="number"&&(t=0,c=!0)}try{n[e]=t}catch{}c&&n.removeAttribute(e)}function bs(n,e,t,i){n.addEventListener(e,t,i)}function Gk(n,e,t,i){n.removeEventListener(e,t,i)}function Kk(n,e,t,i,s=null){const r=n._vei||(n._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=Hk(e);if(i){const l=r[e]=Xk(i,s);bs(n,a,l,c)}else o&&(Gk(n,a,o,c),r[e]=void 0)}}const e_=/(?:Once|Passive|Capture)$/;function Hk(n){let e;if(e_.test(n)){e={};let i;for(;i=n.match(e_);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):vo(n.slice(2)),e]}let hd=0;const Qk=Promise.resolve(),Yk=()=>hd||(Qk.then(()=>hd=0),hd=Date.now());function Xk(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;pn(Jk(i,t.value),e,5,[i])};return t.value=n,t.attached=Yk(),t}function Jk(n,e){if(Q(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const t_=/^on[a-z]/,Zk=(n,e,t,i,s=!1,r,o,a,c)=>{e==="class"?qk(n,i,s):e==="style"?$k(n,t,i):Fu(e)?Tp(e)||Kk(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):eR(n,e,i,s))?Wk(n,e,i,r,o,a,c):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),zk(n,e,i,s))};function eR(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&t_.test(e)&&ie(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||t_.test(e)&&nt(t)?!1:e in n}const Ci="transition",$o="animation",Kl=(n,{slots:e})=>Mk(jA,tR(n),e);Kl.displayName="Transition";const OI={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Kl.props=st({},gI,OI);const gs=(n,e=[])=>{Q(n)?n.forEach(t=>t(...e)):n&&n(...e)},n_=n=>n?Q(n)?n.some(e=>e.length>1):n.length>1:!1;function tR(n){const e={};for(const G in n)G in OI||(e[G]=n[G]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:c=r,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:f=`${t}-leave-to`}=n,m=nR(s),y=m&&m[0],E=m&&m[1],{onBeforeEnter:V,onEnter:W,onEnterCancelled:U,onLeave:M,onLeaveCancelled:ne,onBeforeAppear:se=V,onAppear:Ie=W,onAppearCancelled:Y=U}=e,ye=(G,Be,en)=>{ms(G,Be?u:a),ms(G,Be?l:o),en&&en()},Ce=(G,Be)=>{G._isLeaving=!1,ms(G,h),ms(G,f),ms(G,d),Be&&Be()},Nt=G=>(Be,en)=>{const Bo=G?Ie:W,ct=()=>ye(Be,G,en);gs(Bo,[Be,ct]),i_(()=>{ms(Be,G?c:r),Si(Be,G?u:a),n_(Bo)||s_(Be,i,y,ct)})};return st(e,{onBeforeEnter(G){gs(V,[G]),Si(G,r),Si(G,o)},onBeforeAppear(G){gs(se,[G]),Si(G,c),Si(G,l)},onEnter:Nt(!1),onAppear:Nt(!0),onLeave(G,Be){G._isLeaving=!0;const en=()=>Ce(G,Be);Si(G,h),rR(),Si(G,d),i_(()=>{G._isLeaving&&(ms(G,h),Si(G,f),n_(M)||s_(G,i,E,en))}),gs(M,[G,en])},onEnterCancelled(G){ye(G,!1),gs(U,[G])},onAppearCancelled(G){ye(G,!0),gs(Y,[G])},onLeaveCancelled(G){Ce(G),gs(ne,[G])}})}function nR(n){if(n==null)return null;if(Se(n))return[dd(n.enter),dd(n.leave)];{const e=dd(n);return[e,e]}}function dd(n){return MS(n)}function Si(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n._vtc||(n._vtc=new Set)).add(e)}function ms(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const{_vtc:t}=n;t&&(t.delete(e),t.size||(n._vtc=void 0))}function i_(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let iR=0;function s_(n,e,t,i){const s=n._endId=++iR,r=()=>{s===n._endId&&i()};if(t)return setTimeout(r,t);const{type:o,timeout:a,propCount:c}=sR(n,e);if(!o)return i();const l=o+"end";let u=0;const h=()=>{n.removeEventListener(l,d),r()},d=f=>{f.target===n&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),n.addEventListener(l,d)}function sR(n,e){const t=window.getComputedStyle(n),i=m=>(t[m]||"").split(", "),s=i(`${Ci}Delay`),r=i(`${Ci}Duration`),o=r_(s,r),a=i(`${$o}Delay`),c=i(`${$o}Duration`),l=r_(a,c);let u=null,h=0,d=0;e===Ci?o>0&&(u=Ci,h=o,d=r.length):e===$o?l>0&&(u=$o,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?Ci:$o:null,d=u?u===Ci?r.length:c.length:0);const f=u===Ci&&/\b(transform|all)(,|$)/.test(i(`${Ci}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function r_(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>o_(t)+o_(n[i])))}function o_(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function rR(){return document.body.offsetHeight}const Hl=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Q(e)?t=>Cl(e,t):e};function oR(n){n.target.composing=!0}function a_(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const vn={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n._assign=Hl(s);const r=i||s.props&&s.props.type==="number";bs(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=Kd(a)),n._assign(a)}),t&&bs(n,"change",()=>{n.value=n.value.trim()}),e||(bs(n,"compositionstart",oR),bs(n,"compositionend",a_),bs(n,"change",a_))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:s}},r){if(n._assign=Hl(r),n.composing||document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===e||(s||n.type==="number")&&Kd(n.value)===e))return;const o=e??"";n.value!==o&&(n.value=o)}},c_={created(n,{value:e},t){n.checked=jl(e,t.props.value),n._assign=Hl(t),bs(n,"change",()=>{n._assign(aR(n))})},beforeUpdate(n,{value:e,oldValue:t},i){n._assign=Hl(i),e!==t&&(n.checked=jl(e,i.props.value))}};function aR(n){return"_value"in n?n._value:n.value}const cR=["ctrl","shift","alt","meta"],lR={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>cR.some(t=>n[`${t}Key`]&&!e.includes(t))},Ai=(n,e)=>(t,...i)=>{for(let s=0;s<e.length;s++){const r=lR[e[s]];if(r&&r(t,e))return}return n(t,...i)},uR=st({patchProp:Zk},Bk);let l_;function hR(){return l_||(l_=gk(uR))}const dR=(...n)=>{const e=hR().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=fR(i);if(!s)return;const r=e._component;!ie(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function fR(n){return nt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(n,e){if(!n)throw Eo(e)},Eo=function(n){return new Error("Firebase Database ("+MI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},pR=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},$p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),i.push(t[u],t[h],t[d],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(LI(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):pR(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||l==null||h==null)throw new gR;const d=r<<2|a>>4;if(i.push(d),l!==64){const f=a<<4&240|l>>2;if(i.push(f),h!==64){const m=l<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class gR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FI=function(n){const e=LI(n);return $p.encodeByteArray(e,!0)},Ql=function(n){return FI(n).replace(/\./g,"")},Yl=function(n){try{return $p.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(n){return Ma(void 0,n)}function Ma(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!yR(t)||(n[t]=Ma(n[t],e[t]));return n}function yR(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=()=>_R().__FIREBASE_DEFAULTS__,wR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},IR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Yl(n[1]);return e&&JSON.parse(e)},Qu=()=>{try{return vR()||wR()||IR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ER=n=>{var e,t;return(t=(e=Qu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},TR=n=>{const e=ER(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},UI=()=>{var n;return(n=Qu())===null||n===void 0?void 0:n.config},bR=n=>{var e;return(e=Qu())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Ql(JSON.stringify(t)),Ql(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function zp(){var n;const e=(n=Qu())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function CR(){return typeof self=="object"&&self.self===self}function BI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Yu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qI(){const n=qe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function $I(){return MI.NODE_ADMIN===!0}function SR(){return!zp()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function La(){try{return typeof indexedDB=="object"}catch{return!1}}function AR(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR="FirebaseError";class qt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=kR,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cr.prototype.create)}}class cr{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?RR(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new qt(s,a,i)}}function RR(n,e){return n.replace(NR,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const NR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(n){return JSON.parse(n)}function pt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Fa(Yl(r[0])||""),t=Fa(Yl(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},xR=function(n){const e=jI(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},PR=function(n){const e=jI(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Xr(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function df(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Xl(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function ff(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(u_(r)&&u_(o)){if(!ff(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function u_(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Nr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function oa(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+l+c+u+i[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function zI(n,e){const t=new OR(n,e);return t.subscribe.bind(t)}class OR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");MR(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=fd),s.error===void 0&&(s.error=fd),s.complete===void 0&&(s.complete=fd);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function fd(){}function Xu(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,k(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ju=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(n){return n&&n._delegate?n._delegate:n}class Rn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new wc;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VR(e))try{this.getOrInitializeService({instanceIdentifier:_s})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=_s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_s){return this.instances.has(e)}getOptions(e=_s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:UR(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=_s){return this.component?this.component.multipleInstances?e:_s:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UR(n){return n===_s?void 0:n}function VR(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new FR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=[];var ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ue||(ue={}));const WI={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},qR=ue.INFO,$R={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},jR=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=$R[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ic{constructor(e){this.name=e,this._logLevel=qR,this._logHandler=jR,this._userLogHandler=null,Wp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}function zR(n){Wp.forEach(e=>{e.setLogLevel(n)})}function WR(n,e){for(const t of Wp){let i=null;e&&e.level&&(i=WI[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(s,r,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");r>=(i??s.logLevel)&&n({level:ue[r].toLowerCase(),message:a,args:o,type:s.name})}}}const GR=(n,e)=>e.some(t=>n instanceof t);let h_,d_;function KR(){return h_||(h_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HR(){return d_||(d_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const GI=new WeakMap,pf=new WeakMap,KI=new WeakMap,pd=new WeakMap,Gp=new WeakMap;function QR(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Bi(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&GI.set(t,n)}).catch(()=>{}),Gp.set(e,n),e}function YR(n){if(pf.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});pf.set(n,e)}let gf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return pf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||KI.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Bi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function XR(n){gf=n(gf)}function JR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(gd(this),e,...t);return KI.set(i,e.sort?e.sort():[e]),Bi(i)}:HR().includes(n)?function(...e){return n.apply(gd(this),e),Bi(GI.get(this))}:function(...e){return Bi(n.apply(gd(this),e))}}function ZR(n){return typeof n=="function"?JR(n):(n instanceof IDBTransaction&&YR(n),GR(n,KR())?new Proxy(n,gf):n)}function Bi(n){if(n instanceof IDBRequest)return QR(n);if(pd.has(n))return pd.get(n);const e=ZR(n);return e!==n&&(pd.set(n,e),Gp.set(e,n)),e}const gd=n=>Gp.get(n);function eN(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=Bi(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Bi(o.result),c.oldVersion,c.newVersion,Bi(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const tN=["get","getKey","getAll","getAllKeys","count"],nN=["put","add","delete","clear"],md=new Map;function f_(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(md.get(e))return md.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=nN.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||tN.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&c.done]))[0]};return md.set(e,r),r}XR(n=>({...n,get:(e,t,i)=>f_(e,t)||n.get(e,t,i),has:(e,t)=>!!f_(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sN(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function sN(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mf="@firebase/app",p_="0.9.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new Ic("@firebase/app"),rN="@firebase/app-compat",oN="@firebase/analytics-compat",aN="@firebase/analytics",cN="@firebase/app-check-compat",lN="@firebase/app-check",uN="@firebase/auth",hN="@firebase/auth-compat",dN="@firebase/database",fN="@firebase/database-compat",pN="@firebase/functions",gN="@firebase/functions-compat",mN="@firebase/installations",yN="@firebase/installations-compat",_N="@firebase/messaging",vN="@firebase/messaging-compat",wN="@firebase/performance",IN="@firebase/performance-compat",EN="@firebase/remote-config",TN="@firebase/remote-config-compat",bN="@firebase/storage",CN="@firebase/storage-compat",SN="@firebase/firestore",AN="@firebase/firestore-compat",kN="firebase",RN="9.22.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="[DEFAULT]",NN={[mf]:"fire-core",[rN]:"fire-core-compat",[aN]:"fire-analytics",[oN]:"fire-analytics-compat",[lN]:"fire-app-check",[cN]:"fire-app-check-compat",[uN]:"fire-auth",[hN]:"fire-auth-compat",[dN]:"fire-rtdb",[fN]:"fire-rtdb-compat",[pN]:"fire-fn",[gN]:"fire-fn-compat",[mN]:"fire-iid",[yN]:"fire-iid-compat",[_N]:"fire-fcm",[vN]:"fire-fcm-compat",[wN]:"fire-perf",[IN]:"fire-perf-compat",[EN]:"fire-rc",[TN]:"fire-rc-compat",[bN]:"fire-gcs",[CN]:"fire-gcs-compat",[SN]:"fire-fst",[AN]:"fire-fst-compat","fire-js":"fire-js",[kN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new Map,Ua=new Map;function Jl(n,e){try{n.container.addComponent(e)}catch(t){Ws.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function HI(n,e){n.container.addOrOverwriteComponent(e)}function hi(n){const e=n.name;if(Ua.has(e))return Ws.debug(`There were multiple attempts to register component ${e}.`),!1;Ua.set(e,n);for(const t of Wi.values())Jl(t,n);return!0}function Kp(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function xN(n,e,t=zi){Kp(n,e).clearInstance(t)}function PN(){Ua.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ai=new cr("app","Firebase",DN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ON=class{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ai.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=RN;function Hp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:zi,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw ai.create("bad-app-name",{appName:String(s)});if(t||(t=UI()),!t)throw ai.create("no-options");const r=Wi.get(s);if(r){if(ff(t,r.options)&&ff(i,r.config))return r;throw ai.create("duplicate-app",{appName:s})}const o=new BR(s);for(const c of Ua.values())o.addComponent(c);const a=new ON(t,i,o);return Wi.set(s,a),a}function QI(n=zi){const e=Wi.get(n);if(!e&&n===zi&&UI())return Hp();if(!e)throw ai.create("no-app",{appName:n});return e}function MN(){return Array.from(Wi.values())}async function YI(n){const e=n.name;Wi.has(e)&&(Wi.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function gn(n,e,t){var i;let s=(i=NN[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ws.warn(a.join(" "));return}hi(new Rn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function XI(n,e){if(n!==null&&typeof n!="function")throw ai.create("invalid-log-argument");WR(n,e)}function JI(n){zR(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN="firebase-heartbeat-database",FN=1,Va="firebase-heartbeat-store";let yd=null;function ZI(){return yd||(yd=eN(LN,FN,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Va)}}}).catch(n=>{throw ai.create("idb-open",{originalErrorMessage:n.message})})),yd}async function UN(n){try{return await(await ZI()).transaction(Va).objectStore(Va).get(eE(n))}catch(e){if(e instanceof qt)Ws.warn(e.message);else{const t=ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ws.warn(t.message)}}}async function g_(n,e){try{const i=(await ZI()).transaction(Va,"readwrite");await i.objectStore(Va).put(e,eE(n)),await i.done}catch(t){if(t instanceof qt)Ws.warn(t.message);else{const i=ai.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ws.warn(i.message)}}}function eE(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=1024,BN=30*24*60*60*1e3;class qN{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jN(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=m_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=BN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=m_(),{heartbeatsToSend:t,unsentEntries:i}=$N(this._heartbeatsCache.heartbeats),s=Ql(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function m_(){return new Date().toISOString().substring(0,10)}function $N(n,e=VN){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),y_(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),y_(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class jN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return La()?AR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await UN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return g_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return g_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function y_(n){return Ql(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(n){hi(new Rn("platform-logger",e=>new iN(e),"PRIVATE")),hi(new Rn("heartbeat",e=>new qN(e),"PRIVATE")),gn(mf,p_,n),gn(mf,p_,"esm2017"),gn("fire-js","")}zN("");const WN=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:qt,SDK_VERSION:yi,_DEFAULT_ENTRY_NAME:zi,_addComponent:Jl,_addOrOverwriteComponent:HI,_apps:Wi,_clearComponents:PN,_components:Ua,_getProvider:Kp,_registerComponent:hi,_removeServiceInstance:xN,deleteApp:YI,getApp:QI,getApps:MN,initializeApp:Hp,onLog:XI,registerVersion:gn,setLogLevel:JI},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e,t){this._delegate=e,this.firebase=t,Jl(e,new Rn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),YI(this._delegate)))}_getService(e,t=zi){var i;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((i=s.getComponent())===null||i===void 0?void 0:i.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:t})}_removeServiceInstance(e,t=zi){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Jl(this._delegate,e)}_addOrOverwriteComponent(e){HI(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},__=new cr("app-compat","Firebase",KN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(n){const e={},t={__esModule:!0,initializeApp:r,app:s,registerVersion:gn,setLogLevel:JI,onLog:XI,apps:null,SDK_VERSION:yi,INTERNAL:{registerComponent:a,removeApp:i,useAsService:c,modularAPIs:WN}};t.default=t,Object.defineProperty(t,"apps",{get:o});function i(l){delete e[l]}function s(l){if(l=l||zi,!mn(e,l))throw __.create("no-app",{appName:l});return e[l]}s.App=n;function r(l,u={}){const h=Hp(l,u);if(mn(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const u=l.name,h=u.replace("-compat","");if(hi(l)&&l.type==="PUBLIC"){const d=(f=s())=>{if(typeof f[h]!="function")throw __.create("invalid-app-argument",{appName:u});return f[h]()};l.serviceProps!==void 0&&Ma(d,l.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,u).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?t[h]:null}function c(l,u){return u==="serverAuth"?null:u}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(){const n=HN(GN);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:tE,extendNamespace:e,createSubscribe:zI,ErrorFactory:cr,deepExtend:Ma});function e(t){Ma(n,t)}return n}const QN=tE();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=new Ic("@firebase/app-compat"),YN="@firebase/app-compat",XN="0.2.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(n){gn(YN,XN,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(CR()&&self.firebase!==void 0){v_.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&v_.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Re=QN;JN();var ZN="firebase",e1="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re.registerVersion(ZN,e1,"app-compat");var t1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,Qp=Qp||{},J=t1||self;function Zu(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Ec(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function n1(n){return Object.prototype.hasOwnProperty.call(n,_d)&&n[_d]||(n[_d]=++i1)}var _d="closure_uid_"+(1e9*Math.random()>>>0),i1=0;function s1(n,e,t){return n.call.apply(n.bind,arguments)}function r1(n,e,t){if(!n)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function Dt(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Dt=s1:Dt=r1,Dt.apply(null,arguments)}function cl(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var i=t.slice();return i.push.apply(i,arguments),n.apply(this,i)}}function yt(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function ss(){this.s=this.s,this.o=this.o}var o1=0;ss.prototype.s=!1;ss.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),o1!=0)&&n1(this)};ss.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const nE=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Yp(n){const e=n.length;if(0<e){const t=Array(e);for(let i=0;i<e;i++)t[i]=n[i];return t}return[]}function w_(n,e){for(let t=1;t<arguments.length;t++){const i=arguments[t];if(Zu(i)){const s=n.length||0,r=i.length||0;n.length=s+r;for(let o=0;o<r;o++)n[s+o]=i[o]}else n.push(i)}}function Ot(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Ot.prototype.h=function(){this.defaultPrevented=!0};var a1=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{J.addEventListener("test",()=>{},e),J.removeEventListener("test",()=>{},e)}catch{}return n}();function Ba(n){return/^[\s\xa0]*$/.test(n)}function eh(){var n=J.navigator;return n&&(n=n.userAgent)?n:""}function Vn(n){return eh().indexOf(n)!=-1}function Xp(n){return Xp[" "](n),n}Xp[" "]=function(){};function c1(n,e){var t=ex;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var l1=Vn("Opera"),Jr=Vn("Trident")||Vn("MSIE"),iE=Vn("Edge"),yf=iE||Jr,sE=Vn("Gecko")&&!(eh().toLowerCase().indexOf("webkit")!=-1&&!Vn("Edge"))&&!(Vn("Trident")||Vn("MSIE"))&&!Vn("Edge"),u1=eh().toLowerCase().indexOf("webkit")!=-1&&!Vn("Edge");function rE(){var n=J.document;return n?n.documentMode:void 0}var _f;e:{var vd="",wd=function(){var n=eh();if(sE)return/rv:([^\);]+)(\)|;)/.exec(n);if(iE)return/Edge\/([\d\.]+)/.exec(n);if(Jr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(u1)return/WebKit\/(\S+)/.exec(n);if(l1)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(wd&&(vd=wd?wd[1]:""),Jr){var Id=rE();if(Id!=null&&Id>parseFloat(vd)){_f=String(Id);break e}}_f=vd}var vf;if(J.document&&Jr){var I_=rE();vf=I_||parseInt(_f,10)||void 0}else vf=void 0;var h1=vf;function qa(n,e){if(Ot.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,i=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(sE){e:{try{Xp(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:d1[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&qa.$.h.call(this)}}yt(qa,Ot);var d1={2:"touch",3:"pen",4:"mouse"};qa.prototype.h=function(){qa.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Tc="closure_listenable_"+(1e6*Math.random()|0),f1=0;function p1(n,e,t,i,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!i,this.la=s,this.key=++f1,this.fa=this.ia=!1}function th(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Jp(n,e,t){for(const i in n)e.call(t,n[i],i,n)}function g1(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function oE(n){const e={};for(const t in n)e[t]=n[t];return e}const E_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function aE(n,e){let t,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(t in i)n[t]=i[t];for(let r=0;r<E_.length;r++)t=E_[r],Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}}function nh(n){this.src=n,this.g={},this.h=0}nh.prototype.add=function(n,e,t,i,s){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=If(n,e,i,s);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new p1(e,this.src,r,!!i,s),e.ia=t,n.push(e)),e};function wf(n,e){var t=e.type;if(t in n.g){var i=n.g[t],s=nE(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(th(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function If(n,e,t,i){for(var s=0;s<n.length;++s){var r=n[s];if(!r.fa&&r.listener==e&&r.capture==!!t&&r.la==i)return s}return-1}var Zp="closure_lm_"+(1e6*Math.random()|0),Ed={};function cE(n,e,t,i,s){if(i&&i.once)return uE(n,e,t,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)cE(n,e[r],t,i,s);return null}return t=ng(t),n&&n[Tc]?n.O(e,t,Ec(i)?!!i.capture:!!i,s):lE(n,e,t,!1,i,s)}function lE(n,e,t,i,s,r){if(!e)throw Error("Invalid event type");var o=Ec(s)?!!s.capture:!!s,a=tg(n);if(a||(n[Zp]=a=new nh(n)),t=a.add(e,t,i,o,r),t.proxy)return t;if(i=m1(),t.proxy=i,i.src=n,i.listener=t,n.addEventListener)a1||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),i,s);else if(n.attachEvent)n.attachEvent(dE(e.toString()),i);else if(n.addListener&&n.removeListener)n.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return t}function m1(){function n(t){return e.call(n.src,n.listener,t)}const e=y1;return n}function uE(n,e,t,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)uE(n,e[r],t,i,s);return null}return t=ng(t),n&&n[Tc]?n.P(e,t,Ec(i)?!!i.capture:!!i,s):lE(n,e,t,!0,i,s)}function hE(n,e,t,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)hE(n,e[r],t,i,s);else i=Ec(i)?!!i.capture:!!i,t=ng(t),n&&n[Tc]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=If(r,t,i,s),-1<t&&(th(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=tg(n))&&(e=n.g[e.toString()],n=-1,e&&(n=If(e,t,i,s)),(t=-1<n?e[n]:null)&&eg(t))}function eg(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Tc])wf(e.i,n);else{var t=n.type,i=n.proxy;e.removeEventListener?e.removeEventListener(t,i,n.capture):e.detachEvent?e.detachEvent(dE(t),i):e.addListener&&e.removeListener&&e.removeListener(i),(t=tg(e))?(wf(t,n),t.h==0&&(t.src=null,e[Zp]=null)):th(n)}}}function dE(n){return n in Ed?Ed[n]:Ed[n]="on"+n}function y1(n,e){if(n.fa)n=!0;else{e=new qa(e,this);var t=n.listener,i=n.la||n.src;n.ia&&eg(n),n=t.call(i,e)}return n}function tg(n){return n=n[Zp],n instanceof nh?n:null}var Td="__closure_events_fn_"+(1e9*Math.random()>>>0);function ng(n){return typeof n=="function"?n:(n[Td]||(n[Td]=function(e){return n.handleEvent(e)}),n[Td])}function mt(){ss.call(this),this.i=new nh(this),this.S=this,this.J=null}yt(mt,ss);mt.prototype[Tc]=!0;mt.prototype.removeEventListener=function(n,e,t,i){hE(this,n,e,t,i)};function Ct(n,e){var t,i=n.J;if(i)for(t=[];i;i=i.J)t.push(i);if(n=n.S,i=e.type||e,typeof e=="string")e=new Ot(e,n);else if(e instanceof Ot)e.target=e.target||n;else{var s=e;e=new Ot(i,n),aE(e,s)}if(s=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];s=ll(o,i,!0,e)&&s}if(o=e.g=n,s=ll(o,i,!0,e)&&s,s=ll(o,i,!1,e)&&s,t)for(r=0;r<t.length;r++)o=e.g=t[r],s=ll(o,i,!1,e)&&s}mt.prototype.N=function(){if(mt.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],i=0;i<t.length;i++)th(t[i]);delete n.g[e],n.h--}}this.J=null};mt.prototype.O=function(n,e,t,i){return this.i.add(String(n),e,!1,t,i)};mt.prototype.P=function(n,e,t,i){return this.i.add(String(n),e,!0,t,i)};function ll(n,e,t,i){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&wf(n.i,o),s=a.call(c,i)!==!1&&s}}return s&&!i.defaultPrevented}var ig=J.JSON.stringify;class _1{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function v1(){var n=sg;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class w1{constructor(){this.h=this.g=null}add(e,t){const i=fE.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}}var fE=new _1(()=>new I1,n=>n.reset());class I1{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function E1(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function T1(n){J.setTimeout(()=>{throw n},0)}let $a,ja=!1,sg=new w1,pE=()=>{const n=J.Promise.resolve(void 0);$a=()=>{n.then(b1)}};var b1=()=>{for(var n;n=v1();){try{n.h.call(n.g)}catch(t){T1(t)}var e=fE;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}ja=!1};function ih(n,e){mt.call(this),this.h=n||1,this.g=e||J,this.j=Dt(this.qb,this),this.l=Date.now()}yt(ih,mt);O=ih.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ct(this,"tick"),this.ga&&(rg(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function rg(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}O.N=function(){ih.$.N.call(this),rg(this),delete this.g};function og(n,e,t){if(typeof n=="function")t&&(n=Dt(n,t));else if(n&&typeof n.handleEvent=="function")n=Dt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(n,e||0)}function gE(n){n.g=og(()=>{n.g=null,n.i&&(n.i=!1,gE(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class C1 extends ss{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:gE(this)}N(){super.N(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function za(n){ss.call(this),this.h=n,this.g={}}yt(za,ss);var T_=[];function mE(n,e,t,i){Array.isArray(t)||(t&&(T_[0]=t.toString()),t=T_);for(var s=0;s<t.length;s++){var r=cE(e,t[s],i||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function yE(n){Jp(n.g,function(e,t){this.g.hasOwnProperty(t)&&eg(e)},n),n.g={}}za.prototype.N=function(){za.$.N.call(this),yE(this)};za.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sh(){this.g=!0}sh.prototype.Ea=function(){this.g=!1};function S1(n,e,t,i,s,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function A1(n,e,t,i,s,r,o){n.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+t+`
`+r+" "+o})}function xr(n,e,t,i){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+R1(n,t)+(i?" "+i:"")})}function k1(n,e){n.info(function(){return"TIMEOUT: "+e})}sh.prototype.info=function(){};function R1(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var i=t[n];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ig(t)}catch{return e}}var ur={},b_=null;function rh(){return b_=b_||new mt}ur.Ta="serverreachability";function _E(n){Ot.call(this,ur.Ta,n)}yt(_E,Ot);function Wa(n){const e=rh();Ct(e,new _E(e))}ur.STAT_EVENT="statevent";function vE(n,e){Ot.call(this,ur.STAT_EVENT,n),this.stat=e}yt(vE,Ot);function Bt(n){const e=rh();Ct(e,new vE(e,n))}ur.Ua="timingevent";function wE(n,e){Ot.call(this,ur.Ua,n),this.size=e}yt(wE,Ot);function bc(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){n()},e)}var oh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},IE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ag(){}ag.prototype.h=null;function C_(n){return n.h||(n.h=n.i())}function EE(){}var Cc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function cg(){Ot.call(this,"d")}yt(cg,Ot);function lg(){Ot.call(this,"c")}yt(lg,Ot);var Ef;function ah(){}yt(ah,ag);ah.prototype.g=function(){return new XMLHttpRequest};ah.prototype.i=function(){return{}};Ef=new ah;function Sc(n,e,t,i){this.l=n,this.j=e,this.m=t,this.W=i||1,this.U=new za(this),this.P=N1,n=yf?125:void 0,this.V=new ih(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new TE}function TE(){this.i=null,this.g="",this.h=!1}var N1=45e3,Tf={},Zl={};O=Sc.prototype;O.setTimeout=function(n){this.P=n};function bf(n,e,t){n.L=1,n.v=lh(di(e)),n.s=t,n.S=!0,bE(n,null)}function bE(n,e){n.G=Date.now(),Ac(n),n.A=di(n.v);var t=n.A,i=n.W;Array.isArray(i)||(i=[String(i)]),PE(t.i,"t",i),n.C=0,t=n.l.J,n.h=new TE,n.g=ZE(n.l,t?e:null,!n.s),0<n.O&&(n.M=new C1(Dt(n.Pa,n,n.g),n.O)),mE(n.U,n.g,"readystatechange",n.nb),e=n.I?oE(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Wa(),S1(n.j,n.u,n.A,n.m,n.W,n.s)}O.nb=function(n){n=n.target;const e=this.M;e&&zn(n)==3?e.l():this.Pa(n)};O.Pa=function(n){try{if(n==this.g)e:{const u=zn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||yf||this.g&&(this.h.h||this.g.ja()||R_(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Wa(3):Wa(2)),ch(this);var t=this.g.da();this.ca=t;t:if(CE(this)){var i=R_(this.g);n="";var s=i.length,r=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xs(this),ga(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,A1(this.j,this.u,this.A,this.m,this.W,u,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ba(a)){var l=a;break t}}l=null}if(t=l)xr(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cf(this,t);else{this.i=!1,this.o=3,Bt(12),xs(this),ga(this);break e}}this.S?(SE(this,u,o),yf&&this.i&&u==3&&(mE(this.U,this.V,"tick",this.mb),this.V.start())):(xr(this.j,this.m,o,null),Cf(this,o)),u==4&&xs(this),this.i&&!this.J&&(u==4?QE(this.l,this):(this.i=!1,Ac(this)))}else X1(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Bt(12)):(this.o=0,Bt(13)),xs(this),ga(this)}}}catch{}finally{}};function CE(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function SE(n,e,t){let i=!0,s;for(;!n.J&&n.C<t.length;)if(s=x1(n,t),s==Zl){e==4&&(n.o=4,Bt(14),i=!1),xr(n.j,n.m,null,"[Incomplete Response]");break}else if(s==Tf){n.o=4,Bt(15),xr(n.j,n.m,t,"[Invalid Chunk]"),i=!1;break}else xr(n.j,n.m,s,null),Cf(n,s);CE(n)&&s!=Zl&&s!=Tf&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Bt(16),i=!1),n.i=n.i&&i,i?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),gg(e),e.M=!0,Bt(11))):(xr(n.j,n.m,t,"[Invalid Chunked Response]"),xs(n),ga(n))}O.mb=function(){if(this.g){var n=zn(this.g),e=this.g.ja();this.C<e.length&&(ch(this),SE(this,n,e),this.i&&n!=4&&Ac(this))}};function x1(n,e){var t=n.C,i=e.indexOf(`
`,t);return i==-1?Zl:(t=Number(e.substring(t,i)),isNaN(t)?Tf:(i+=1,i+t>e.length?Zl:(e=e.slice(i,i+t),n.C=i+t,e)))}O.cancel=function(){this.J=!0,xs(this)};function Ac(n){n.Y=Date.now()+n.P,AE(n,n.P)}function AE(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=bc(Dt(n.lb,n),e)}function ch(n){n.B&&(J.clearTimeout(n.B),n.B=null)}O.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(k1(this.j,this.A),this.L!=2&&(Wa(),Bt(17)),xs(this),this.o=2,ga(this)):AE(this,this.Y-n)};function ga(n){n.l.H==0||n.J||QE(n.l,n)}function xs(n){ch(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,rg(n.V),yE(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function Cf(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Sf(t.i,n))){if(!n.K&&Sf(t.i,n)&&t.H==3){try{var i=t.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)nu(t),dh(t);else break e;pg(t),Bt(18)}}else t.Fa=s[1],0<t.Fa-t.V&&37500>s[2]&&t.G&&t.A==0&&!t.v&&(t.v=bc(Dt(t.ib,t),6e3));if(1>=ME(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else Ps(t,11)}else if((n.K||t.g==n)&&nu(t),!Ba(e))for(s=t.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(t.V=l[0],l=l[1],t.H==2)if(l[0]=="c"){t.K=l[1],t.pa=l[2];const u=l[3];u!=null&&(t.ra=u,t.l.info("VER="+t.ra));const h=l[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,t.L=i,t.l.info("backChannelRequestTimeoutMs_="+i)),i=t;const f=n.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=i.i;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(ug(r,r.h),r.h=null))}if(i.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(i.Da=y,Oe(i.I,i.F,y))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),i=t;var o=n;if(i.wa=JE(i,i.J?i.pa:null,i.Y),o.K){LE(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.B&&(ch(a),Ac(a)),i.g=o}else KE(i);0<t.j.length&&fh(t)}else l[0]!="stop"&&l[0]!="close"||Ps(t,7);else t.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ps(t,7):fg(t):l[0]!="noop"&&t.h&&t.h.Aa(l),t.A=0)}}Wa(4)}catch{}}function P1(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Zu(n)){for(var e=[],t=n.length,i=0;i<t;i++)e.push(n[i]);return e}e=[],t=0;for(i in n)e[t++]=n[i];return e}function D1(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Zu(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const i in n)e[t++]=i;return e}}}function kE(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Zu(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=D1(n),i=P1(n),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],t&&t[r],n)}var RE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function O1(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var i=n[t].indexOf("="),s=null;if(0<=i){var r=n[t].substring(0,i);s=n[t].substring(i+1)}else r=n[t];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Vs(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Vs){this.h=n.h,eu(this,n.j),this.s=n.s,this.g=n.g,tu(this,n.m),this.l=n.l;var e=n.i,t=new Ga;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),S_(this,t),this.o=n.o}else n&&(e=String(n).match(RE))?(this.h=!1,eu(this,e[1]||"",!0),this.s=aa(e[2]||""),this.g=aa(e[3]||"",!0),tu(this,e[4]),this.l=aa(e[5]||"",!0),S_(this,e[6]||"",!0),this.o=aa(e[7]||"")):(this.h=!1,this.i=new Ga(null,this.h))}Vs.prototype.toString=function(){var n=[],e=this.j;e&&n.push(ca(e,A_,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(ca(e,A_,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(ca(t,t.charAt(0)=="/"?F1:L1,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",ca(t,V1)),n.join("")};function di(n){return new Vs(n)}function eu(n,e,t){n.j=t?aa(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function tu(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function S_(n,e,t){e instanceof Ga?(n.i=e,B1(n.i,n.h)):(t||(e=ca(e,U1)),n.i=new Ga(e,n.h))}function Oe(n,e,t){n.i.set(e,t)}function lh(n){return Oe(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function aa(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function ca(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,M1),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function M1(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var A_=/[#\/\?@]/g,L1=/[#\?:]/g,F1=/[#\?]/g,U1=/[#\?@]/g,V1=/#/g;function Ga(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function rs(n){n.g||(n.g=new Map,n.h=0,n.i&&O1(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}O=Ga.prototype;O.add=function(n,e){rs(this),this.i=null,n=To(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function NE(n,e){rs(n),e=To(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function xE(n,e){return rs(n),e=To(n,e),n.g.has(e)}O.forEach=function(n,e){rs(this),this.g.forEach(function(t,i){t.forEach(function(s){n.call(e,s,i,this)},this)},this)};O.ta=function(){rs(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let i=0;i<e.length;i++){const s=n[i];for(let r=0;r<s.length;r++)t.push(e[i])}return t};O.Z=function(n){rs(this);let e=[];if(typeof n=="string")xE(this,n)&&(e=e.concat(this.g.get(To(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};O.set=function(n,e){return rs(this),this.i=null,n=To(this,n),xE(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};O.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function PE(n,e,t){NE(n,e),0<t.length&&(n.i=null,n.g.set(To(n,e),Yp(t)),n.h+=t.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var i=e[t];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),n.push(s)}}return this.i=n.join("&")};function To(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function B1(n,e){e&&!n.j&&(rs(n),n.i=null,n.g.forEach(function(t,i){var s=i.toLowerCase();i!=s&&(NE(this,i),PE(this,s,t))},n)),n.j=e}var q1=class{constructor(n,e){this.g=n,this.map=e}};function DE(n){this.l=n||$1,J.PerformanceNavigationTiming?(n=J.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(J.g&&J.g.Ka&&J.g.Ka()&&J.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $1=10;function OE(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function ME(n){return n.h?1:n.g?n.g.size:0}function Sf(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function ug(n,e){n.g?n.g.add(e):n.h=e}function LE(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}DE.prototype.cancel=function(){if(this.i=FE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function FE(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Yp(n.i)}var j1=class{stringify(n){return J.JSON.stringify(n,void 0)}parse(n){return J.JSON.parse(n,void 0)}};function z1(){this.g=new j1}function W1(n,e,t){const i=t||"";try{kE(n,function(s,r){let o=s;Ec(s)&&(o=ig(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function G1(n,e){const t=new sh;if(J.Image){const i=new Image;i.onload=cl(ul,t,i,"TestLoadImage: loaded",!0,e),i.onerror=cl(ul,t,i,"TestLoadImage: error",!1,e),i.onabort=cl(ul,t,i,"TestLoadImage: abort",!1,e),i.ontimeout=cl(ul,t,i,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=n}else e(!1)}function ul(n,e,t,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function kc(n){this.l=n.fc||null,this.j=n.ob||!1}yt(kc,ag);kc.prototype.g=function(){return new uh(this.l,this.j)};kc.prototype.i=function(n){return function(){return n}}({});function uh(n,e){mt.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=hg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yt(uh,mt);var hg=0;O=uh.prototype;O.open=function(n,e){if(this.readyState!=hg)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Ka(this)};O.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||J).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rc(this)),this.readyState=hg};O.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Ka(this)),this.g&&(this.readyState=3,Ka(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;UE(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function UE(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}O.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Rc(this):Ka(this),this.readyState==3&&UE(this)}};O.Za=function(n){this.g&&(this.response=this.responseText=n,Rc(this))};O.Ya=function(n){this.g&&(this.response=n,Rc(this))};O.ka=function(){this.g&&Rc(this)};function Rc(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Ka(n)}O.setRequestHeader=function(n,e){this.v.append(n,e)};O.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Ka(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(uh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var K1=J.JSON.parse;function Ge(n){mt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=VE,this.L=this.M=!1}yt(Ge,mt);var VE="",H1=/^https?$/i,Q1=["POST","PUT"];O=Ge.prototype;O.Oa=function(n){this.M=n};O.ha=function(n,e,t,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ef.g(),this.C=this.u?C_(this.u):C_(Ef),this.g.onreadystatechange=Dt(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(r){k_(this,r);return}if(n=t||"",t=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)t.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())t.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),s=J.FormData&&n instanceof J.FormData,!(0<=nE(Q1,e))||i||s||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of t)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{$E(this),0<this.B&&((this.L=Y1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Dt(this.ua,this)):this.A=og(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){k_(this,r)}};function Y1(n){return Jr&&typeof n.timeout=="number"&&n.ontimeout!==void 0}O.ua=function(){typeof Qp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ct(this,"timeout"),this.abort(8))};function k_(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,BE(n),hh(n)}function BE(n){n.F||(n.F=!0,Ct(n,"complete"),Ct(n,"error"))}O.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Ct(this,"complete"),Ct(this,"abort"),hh(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hh(this,!0)),Ge.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?qE(this):this.kb())};O.kb=function(){qE(this)};function qE(n){if(n.h&&typeof Qp<"u"&&(!n.C[1]||zn(n)!=4||n.da()!=2)){if(n.v&&zn(n)==4)og(n.La,0,n);else if(Ct(n,"readystatechange"),zn(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var i;if(i=o===0){var s=String(n.I).match(RE)[1]||null;!s&&J.self&&J.self.location&&(s=J.self.location.protocol.slice(0,-1)),i=!H1.test(s?s.toLowerCase():"")}t=i}if(t)Ct(n,"complete"),Ct(n,"success");else{n.m=6;try{var r=2<zn(n)?n.g.statusText:""}catch{r=""}n.j=r+" ["+n.da()+"]",BE(n)}}finally{hh(n)}}}}function hh(n,e){if(n.g){$E(n);const t=n.g,i=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||Ct(n,"ready");try{t.onreadystatechange=i}catch{}}}function $E(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(J.clearTimeout(n.A),n.A=null)}O.isActive=function(){return!!this.g};function zn(n){return n.g?n.g.readyState:0}O.da=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),K1(e)}};function R_(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case VE:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function X1(n){const e={};n=(n.g&&2<=zn(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<n.length;i++){if(Ba(n[i]))continue;var t=E1(n[i]);const s=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const r=e[s]||[];e[s]=r,r.push(t)}g1(e,function(i){return i.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jE(n){let e="";return Jp(n,function(t,i){e+=i,e+=":",e+=t,e+=`\r
`}),e}function dg(n,e,t){e:{for(i in t){var i=!1;break e}i=!0}i||(t=jE(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Oe(n,e,t))}function jo(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function zE(n){this.Ga=0,this.j=[],this.l=new sh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=jo("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=jo("baseRetryDelayMs",5e3,n),this.hb=jo("retryDelaySeedMs",1e4,n),this.eb=jo("forwardChannelMaxRetries",2,n),this.xa=jo("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new DE(n&&n.concurrentRequestLimit),this.Ja=new z1,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=zE.prototype;O.ra=8;O.H=1;function fg(n){if(WE(n),n.H==3){var e=n.W++,t=di(n.I);if(Oe(t,"SID",n.K),Oe(t,"RID",e),Oe(t,"TYPE","terminate"),Nc(n,t),e=new Sc(n,n.l,e),e.L=2,e.v=lh(di(t)),t=!1,J.navigator&&J.navigator.sendBeacon)try{t=J.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&J.Image&&(new Image().src=e.v,t=!0),t||(e.g=ZE(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ac(e)}XE(n)}function dh(n){n.g&&(gg(n),n.g.cancel(),n.g=null)}function WE(n){dh(n),n.u&&(J.clearTimeout(n.u),n.u=null),nu(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&J.clearTimeout(n.m),n.m=null)}function fh(n){if(!OE(n.i)&&!n.m){n.m=!0;var e=n.Na;$a||pE(),ja||($a(),ja=!0),sg.add(e,n),n.C=0}}function J1(n,e){return ME(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=bc(Dt(n.Na,n,e),YE(n,n.C)),n.C++,!0)}O.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new Sc(this,this.l,n);let r=this.s;if(this.U&&(r?(r=oE(r),aE(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var i=this.j[t];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=GE(this,s,e),t=di(this.I),Oe(t,"RID",n),Oe(t,"CVER",22),this.F&&Oe(t,"X-HTTP-Session-Id",this.F),Nc(this,t),r&&(this.O?e="headers="+encodeURIComponent(String(jE(r)))+"&"+e:this.o&&dg(t,this.o,r)),ug(this.i,s),this.bb&&Oe(t,"TYPE","init"),this.P?(Oe(t,"$req",e),Oe(t,"SID","null"),s.aa=!0,bf(s,t,null)):bf(s,t,e),this.H=2}}else this.H==3&&(n?N_(this,n):this.j.length==0||OE(this.i)||N_(this))};function N_(n,e){var t;e?t=e.m:t=n.W++;const i=di(n.I);Oe(i,"SID",n.K),Oe(i,"RID",t),Oe(i,"AID",n.V),Nc(n,i),n.o&&n.s&&dg(i,n.o,n.s),t=new Sc(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=GE(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),ug(n.i,t),bf(t,i,e)}function Nc(n,e){n.na&&Jp(n.na,function(t,i){Oe(e,i,t)}),n.h&&kE({},function(t,i){Oe(e,i,t)})}function GE(n,e,t){t=Math.min(n.j.length,t);var i=n.h?Dt(n.h.Va,n.h,n):null;e:{var s=n.j;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<t;c++){let l=s[c].g;const u=s[c].map;if(l-=r,0>l)r=Math.max(0,s[c].g-100),a=!1;else try{W1(u,o,"req"+l+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,i}function KE(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;$a||pE(),ja||($a(),ja=!0),sg.add(e,n),n.A=0}}function pg(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=bc(Dt(n.Ma,n),YE(n,n.A)),n.A++,!0)}O.Ma=function(){if(this.u=null,HE(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=bc(Dt(this.jb,this),n)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Bt(10),dh(this),HE(this))};function gg(n){n.B!=null&&(J.clearTimeout(n.B),n.B=null)}function HE(n){n.g=new Sc(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=di(n.wa);Oe(e,"RID","rpc"),Oe(e,"SID",n.K),Oe(e,"AID",n.V),Oe(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&Oe(e,"TO",n.qa),Oe(e,"TYPE","xmlhttp"),Nc(n,e),n.o&&n.s&&dg(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=lh(di(e)),t.s=null,t.S=!0,bE(t,n)}O.ib=function(){this.v!=null&&(this.v=null,dh(this),pg(this),Bt(19))};function nu(n){n.v!=null&&(J.clearTimeout(n.v),n.v=null)}function QE(n,e){var t=null;if(n.g==e){nu(n),gg(n),n.g=null;var i=2}else if(Sf(n.i,e))t=e.F,LE(n.i,e),i=1;else return;if(n.H!=0){if(e.i)if(i==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var s=n.C;i=rh(),Ct(i,new wE(i,t)),fh(n)}else KE(n);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&J1(n,e)||i==2&&pg(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:Ps(n,5);break;case 4:Ps(n,10);break;case 3:Ps(n,6);break;default:Ps(n,2)}}}function YE(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function Ps(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var i=Dt(n.pb,n);t||(t=new Vs("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||eu(t,"https"),lh(t)),G1(t.toString(),i)}else Bt(2);n.H=0,n.h&&n.h.za(e),XE(n),WE(n)}O.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Bt(2)):(this.l.info("Failed to ping google.com"),Bt(1))};function XE(n){if(n.H=0,n.ma=[],n.h){const e=FE(n.i);(e.length!=0||n.j.length!=0)&&(w_(n.ma,e),w_(n.ma,n.j),n.i.i.length=0,Yp(n.j),n.j.length=0),n.h.ya()}}function JE(n,e,t){var i=t instanceof Vs?di(t):new Vs(t);if(i.g!="")e&&(i.g=e+"."+i.g),tu(i,i.m);else{var s=J.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Vs(null);i&&eu(r,i),e&&(r.g=e),s&&tu(r,s),t&&(r.l=t),i=r}return t=n.F,e=n.Da,t&&e&&Oe(i,t,e),Oe(i,"VER",n.ra),Nc(n,i),i}function ZE(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new Ge(new kc({ob:!0})):new Ge(n.va),e.Oa(n.J),e}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function eT(){}O=eT.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function iu(){if(Jr&&!(10<=Number(h1)))throw Error("Environmental error: no available transport.")}iu.prototype.g=function(n,e){return new an(n,e)};function an(n,e){mt.call(this),this.g=new zE(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Ba(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ba(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new bo(this)}yt(an,mt);an.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Bt(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=JE(n,null,n.Y),fh(n)};an.prototype.close=function(){fg(this.g)};an.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=ig(n),n=t);e.j.push(new q1(e.fb++,n)),e.H==3&&fh(e)};an.prototype.N=function(){this.g.h=null,delete this.j,fg(this.g),delete this.g,an.$.N.call(this)};function tT(n){cg.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}yt(tT,cg);function nT(){lg.call(this),this.status=1}yt(nT,lg);function bo(n){this.g=n}yt(bo,eT);bo.prototype.Ba=function(){Ct(this.g,"a")};bo.prototype.Aa=function(n){Ct(this.g,new tT(n))};bo.prototype.za=function(n){Ct(this.g,new nT)};bo.prototype.ya=function(){Ct(this.g,"b")};function Z1(){this.blockSize=-1}function Nn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}yt(Nn,Z1);Nn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function bd(n,e,t){t||(t=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(s=0;16>s;++s)i[s]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],s=n.g[2];var r=n.g[3],o=e+(r^t&(s^r))+i[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[3]+3250441966&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+i[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[7]+4249261313&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+i[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[11]+2304563134&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+i[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[15]+1236535329&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(t^s))+i[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[0]+3921069994&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+i[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[4]+3889429448&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+i[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[8]+1163531501&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+i[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[12]+2368359562&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(t^s^r)+i[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[14]+4259657740&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+i[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[10]+3200236656&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+i[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[6]+76029189&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+i[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[2]+3299628645&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(s^(t|~r))+i[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[5]+4237533241&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+i[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[1]+2240044497&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+i[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[13]+1309151649&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+i[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+r&4294967295}Nn.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=t;)bd(this,n,r),r+=this.blockSize;if(typeof n=="string"){for(;r<e;)if(i[s++]=n.charCodeAt(r++),s==this.blockSize){bd(this,i),s=0;break}}else for(;r<e;)if(i[s++]=n[r++],s==this.blockSize){bd(this,i),s=0;break}}this.h=s,this.i+=e};Nn.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var i=0;32>i;i+=8)n[t++]=this.g[e]>>>i&255;return n};function we(n,e){this.h=e;for(var t=[],i=!0,s=n.length-1;0<=s;s--){var r=n[s]|0;i&&r==e||(t[s]=r,i=!1)}this.g=t}var ex={};function mg(n){return-128<=n&&128>n?c1(n,function(e){return new we([e|0],0>e?-1:0)}):new we([n|0],0>n?-1:0)}function Wn(n){if(isNaN(n)||!isFinite(n))return Fr;if(0>n)return It(Wn(-n));for(var e=[],t=1,i=0;n>=t;i++)e[i]=n/t|0,t*=Af;return new we(e,0)}function iT(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return It(iT(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Wn(Math.pow(e,8)),i=Fr,s=0;s<n.length;s+=8){var r=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+r),e);8>r?(r=Wn(Math.pow(e,r)),i=i.R(r).add(Wn(o))):(i=i.R(t),i=i.add(Wn(o)))}return i}var Af=4294967296,Fr=mg(0),kf=mg(1),x_=mg(16777216);O=we.prototype;O.ea=function(){if(un(this))return-It(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var i=this.D(t);n+=(0<=i?i:Af+i)*e,e*=Af}return n};O.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(ni(this))return"0";if(un(this))return"-"+It(this).toString(n);for(var e=Wn(Math.pow(n,6)),t=this,i="";;){var s=ru(t,e).g;t=su(t,s.R(e));var r=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=s,ni(t))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};O.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function ni(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function un(n){return n.h==-1}O.X=function(n){return n=su(this,n),un(n)?-1:ni(n)?0:1};function It(n){for(var e=n.g.length,t=[],i=0;i<e;i++)t[i]=~n.g[i];return new we(t,~n.h).add(kf)}O.abs=function(){return un(this)?It(this):this};O.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(n.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,t[s]=o<<16|r}return new we(t,t[t.length-1]&-2147483648?-1:0)};function su(n,e){return n.add(It(e))}O.R=function(n){if(ni(this)||ni(n))return Fr;if(un(this))return un(n)?It(this).R(It(n)):It(It(this).R(n));if(un(n))return It(this.R(It(n)));if(0>this.X(x_)&&0>n.X(x_))return Wn(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],i=0;i<2*e;i++)t[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<n.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=n.D(s)>>>16,c=n.D(s)&65535;t[2*i+2*s]+=o*c,hl(t,2*i+2*s),t[2*i+2*s+1]+=r*c,hl(t,2*i+2*s+1),t[2*i+2*s+1]+=o*a,hl(t,2*i+2*s+1),t[2*i+2*s+2]+=r*a,hl(t,2*i+2*s+2)}for(i=0;i<e;i++)t[i]=t[2*i+1]<<16|t[2*i];for(i=e;i<2*e;i++)t[i]=0;return new we(t,0)};function hl(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function zo(n,e){this.g=n,this.h=e}function ru(n,e){if(ni(e))throw Error("division by zero");if(ni(n))return new zo(Fr,Fr);if(un(n))return e=ru(It(n),e),new zo(It(e.g),It(e.h));if(un(e))return e=ru(n,It(e)),new zo(It(e.g),e.h);if(30<n.g.length){if(un(n)||un(e))throw Error("slowDivide_ only works with positive integers.");for(var t=kf,i=e;0>=i.X(n);)t=P_(t),i=P_(i);var s=Er(t,1),r=Er(i,1);for(i=Er(i,2),t=Er(t,2);!ni(i);){var o=r.add(i);0>=o.X(n)&&(s=s.add(t),r=o),i=Er(i,1),t=Er(t,1)}return e=su(n,s.R(e)),new zo(s,e)}for(s=Fr;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),i=Math.ceil(Math.log(t)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=Wn(t),o=r.R(e);un(o)||0<o.X(n);)t-=i,r=Wn(t),o=r.R(e);ni(r)&&(r=kf),s=s.add(r),n=su(n,o)}return new zo(s,n)}O.gb=function(n){return ru(this,n).h};O.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)&n.D(i);return new we(t,this.h&n.h)};O.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)|n.D(i);return new we(t,this.h|n.h)};O.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)^n.D(i);return new we(t,this.h^n.h)};function P_(n){for(var e=n.g.length+1,t=[],i=0;i<e;i++)t[i]=n.D(i)<<1|n.D(i-1)>>>31;return new we(t,n.h)}function Er(n,e){var t=e>>5;e%=32;for(var i=n.g.length-t,s=[],r=0;r<i;r++)s[r]=0<e?n.D(r+t)>>>e|n.D(r+t+1)<<32-e:n.D(r+t);return new we(s,n.h)}iu.prototype.createWebChannel=iu.prototype.g;an.prototype.send=an.prototype.u;an.prototype.open=an.prototype.m;an.prototype.close=an.prototype.close;oh.NO_ERROR=0;oh.TIMEOUT=8;oh.HTTP_ERROR=6;IE.COMPLETE="complete";EE.EventType=Cc;Cc.OPEN="a";Cc.CLOSE="b";Cc.ERROR="c";Cc.MESSAGE="d";mt.prototype.listen=mt.prototype.O;Ge.prototype.listenOnce=Ge.prototype.P;Ge.prototype.getLastError=Ge.prototype.Sa;Ge.prototype.getLastErrorCode=Ge.prototype.Ia;Ge.prototype.getStatus=Ge.prototype.da;Ge.prototype.getResponseJson=Ge.prototype.Wa;Ge.prototype.getResponseText=Ge.prototype.ja;Ge.prototype.send=Ge.prototype.ha;Ge.prototype.setWithCredentials=Ge.prototype.Oa;Nn.prototype.digest=Nn.prototype.l;Nn.prototype.reset=Nn.prototype.reset;Nn.prototype.update=Nn.prototype.j;we.prototype.add=we.prototype.add;we.prototype.multiply=we.prototype.R;we.prototype.modulo=we.prototype.gb;we.prototype.compare=we.prototype.X;we.prototype.toNumber=we.prototype.ea;we.prototype.toString=we.prototype.toString;we.prototype.getBits=we.prototype.D;we.fromNumber=Wn;we.fromString=iT;var tx=function(){return new iu},nx=function(){return rh()},Cd=oh,ix=IE,sx=ur,D_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},rx=kc,dl=EE,ox=Ge,ax=Nn,Ur=we;const O_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co="9.22.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new Ic("@firebase/firestore");function Rf(){return Gi.logLevel}function cx(n){Gi.setLogLevel(n)}function C(n,...e){if(Gi.logLevel<=ue.DEBUG){const t=e.map(yg);Gi.debug(`Firestore (${Co}): ${n}`,...t)}}function Qe(n,...e){if(Gi.logLevel<=ue.ERROR){const t=e.map(yg);Gi.error(`Firestore (${Co}): ${n}`,...t)}}function xn(n,...e){if(Gi.logLevel<=ue.WARN){const t=e.map(yg);Gi.warn(`Firestore (${Co}): ${n}`,...t)}}function yg(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n="Unexpected state"){const e=`FIRESTORE (${Co}) INTERNAL ASSERTION FAILED: `+n;throw Qe(e),new Error(e)}function $(n,e){n||F()}function lx(n,e){n||F()}function D(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends qt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ux{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ht.UNAUTHENTICATED))}shutdown(){}}class hx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class dx{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const s=c=>this.i!==i?(i=this.i,t(c)):Promise.resolve();let r=new gt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new gt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new gt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?($(typeof i.accessToken=="string"),new sT(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string"),new ht(e)}}class fx{constructor(e,t,i){this.h=e,this.l=t,this.m=i,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class px{constructor(e,t,i){this.h=e,this.l=t,this.m=i}getToken(){return Promise.resolve(new fx(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mx{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const i=r=>{r.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?($(typeof t.token=="string"),this.T=t.token,new gx(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=yx(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%e.length))}return i}}function ee(n,e){return n<e?-1:n>e?1:0}function Zr(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}function oT(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new I(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new I(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new I(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new I(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new Ve(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new Ve(0,0))}static max(){return new q(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t,i){t===void 0?t=0:t>e.length&&F(),i===void 0?i=e.length-t:i>e.length-t&&F(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Ha.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ha?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=e.get(s),o=t.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class de extends Ha{construct(e,t,i){return new de(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new I(v.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new de(t)}static emptyPath(){return new de([])}}const _x=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Ha{construct(e,t,i){return new Ye(e,t,i)}static isValidIdentifier(e){return _x.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new I(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new I(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new I(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new I(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(t)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(de.fromString(e))}static fromName(e){return new x(de.fromString(e).popFirst(5))}static empty(){return new x(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return de.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new de(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,t,i,s){this.indexId=e,this.collectionGroup=t,this.fields=i,this.indexState=s}}function Nf(n){return n.fields.find(e=>e.kind===2)}function vs(n){return n.fields.filter(e=>e.kind!==2)}aT.UNKNOWN_ID=-1;class vx{constructor(e,t){this.fieldPath=e,this.kind=t}}class ou{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ou(0,cn.min())}}function cT(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=q.fromTimestamp(i===1e9?new Ve(t+1,0):new Ve(t,i));return new cn(s,x.empty(),e)}function lT(n){return new cn(n.readTime,n.key,-1)}class cn{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new cn(q.min(),x.empty(),-1)}static max(){return new cn(q.max(),x.empty(),-1)}}function _g(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=x.comparator(n.documentKey,e.documentKey),t!==0?t:ee(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(n){if(n.code!==v.FAILED_PRECONDITION||n.message!==uT)throw n;C("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new _((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof _?t:_.resolve(t)}catch(t){return _.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):_.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):_.reject(t)}static resolve(e){return new _((t,i)=>{t(e)})}static reject(e){return new _((t,i)=>{i(e)})}static waitFor(e){return new _((t,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&t()},c=>i(c))}),o=!0,r===s&&t()})}static or(e){let t=_.resolve(!1);for(const i of e)t=t.next(s=>s?_.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,r)=>{i.push(t.call(this,s,r))}),this.waitFor(i)}static mapArray(e,t){return new _((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,t){return new _((i,s)=>{const r=()=>{e()===!0?t().next(()=>{r()},s):i()};r()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.v=new gt,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{t.error?this.v.reject(new ma(e,t.error)):this.v.resolve()},this.transaction.onerror=i=>{const s=vg(i.target.error);this.v.reject(new ma(e,s))}}static open(e,t,i,s){try{return new ph(t,e.transaction(s,i))}catch(r){throw new ma(t,r)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(C("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Ix(t)}}class bn{constructor(e,t,i){this.name=e,this.version=t,this.V=i,bn.S(qe())===12.2&&Qe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return C("SimpleDb","Removing database:",e),Cs(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!La())return!1;if(bn.C())return!0;const e=qe(),t=bn.S(e),i=0<t&&t<10,s=bn.N(e),r=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||i||r)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),i=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(i)}static N(e){const t=e.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}async $(e){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,i)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=r=>{const o=r.target.result;t(o)},s.onblocked=()=>{i(new ma(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=r=>{const o=r.target.error;o.name==="VersionError"?i(new I(v.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?i(new I(v.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):i(new ma(e,o))},s.onupgradeneeded=r=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',r.oldVersion);const o=r.target.result;this.V.O(o,s.transaction,r.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=t=>this.F(t)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,i,s){const r=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=ph.open(this.db,e,r?"readonly":"readwrite",i),c=s(a).next(l=>(a.P(),l)).catch(l=>(a.abort(l),_.reject(l))).toPromise();return c.catch(()=>{}),await a.R,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(C("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class wx{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Cs(this.L.delete())}}class ma extends I{constructor(e,t){super(v.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function as(n){return n.name==="IndexedDbTransactionError"}class Ix{constructor(e){this.store=e}put(e,t){let i;return t!==void 0?(C("SimpleDb","PUT",this.store.name,e,t),i=this.store.put(t,e)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",e),i=this.store.put(e)),Cs(i)}add(e){return C("SimpleDb","ADD",this.store.name,e,e),Cs(this.store.add(e))}get(e){return Cs(this.store.get(e)).next(t=>(t===void 0&&(t=null),C("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return C("SimpleDb","DELETE",this.store.name,e),Cs(this.store.delete(e))}count(){return C("SimpleDb","COUNT",this.store.name),Cs(this.store.count())}j(e,t){const i=this.options(e,t);if(i.index||typeof this.store.getAll!="function"){const s=this.cursor(i),r=[];return this.W(s,(o,a)=>{r.push(a)}).next(()=>r)}{const s=this.store.getAll(i.range);return new _((r,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{r(a.target.result)}})}}H(e,t){const i=this.store.getAll(e,t===null?void 0:t);return new _((s,r)=>{i.onerror=o=>{r(o.target.error)},i.onsuccess=o=>{s(o.target.result)}})}J(e,t){C("SimpleDb","DELETE ALL",this.store.name);const i=this.options(e,t);i.Y=!1;const s=this.cursor(i);return this.W(s,(r,o,a)=>a.delete())}X(e,t){let i;t?i=e:(i={},t=e);const s=this.cursor(i);return this.W(s,t)}Z(e){const t=this.cursor({});return new _((i,s)=>{t.onerror=r=>{const o=vg(r.target.error);s(o)},t.onsuccess=r=>{const o=r.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():i()}):i()}})}W(e,t){const i=[];return new _((s,r)=>{e.onerror=o=>{r(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new wx(a),l=t(a.primaryKey,a.value,c);if(l instanceof _){const u=l.catch(h=>(c.done(),_.reject(h)));i.push(u)}c.isDone?s():c.K===null?a.continue():a.continue(c.K)}}).next(()=>_.waitFor(i))}options(e,t){let i;return e!==void 0&&(typeof e=="string"?i=e:t=e),{index:i,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const i=this.store.index(e.index);return e.Y?i.openKeyCursor(e.range,t):i.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Cs(n){return new _((e,t)=>{n.onsuccess=i=>{const s=i.target.result;e(s)},n.onerror=i=>{const s=vg(i.target.error);t(s)}})}let M_=!1;function vg(n){const e=bn.S(qe());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const i=new I("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return M_||(M_=!0,setTimeout(()=>{throw i},0)),i}}return n}class Ex{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){C("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{C("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(t){as(t)?C("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await os(t)}await this.et(6e4)})}}class Tx{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const i=new Set;let s=t,r=!0;return _.doWhile(()=>r===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!i.has(o))return C("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,s).next(a=>{s-=a,i.add(o)});r=!1})).next(()=>t-s)}it(e,t,i){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,i).next(r=>{const o=r.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(s,r)).next(a=>(C("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}rt(e,t){let i=e;return t.changes.forEach((s,r)=>{const o=lT(r);_g(o,i)>0&&(i=o)}),new cn(i.readTime,i.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>t.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Kt.ct=-1;function xc(n){return n==null}function Qa(n){return n===0&&1/n==-1/0}function dT(n){return typeof n=="number"&&Number.isInteger(n)&&!Qa(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=L_(e)),e=bx(n.get(t),e);return L_(e)}function bx(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":t+="";break;case"":t+="";break;default:t+=r}}return t}function L_(n){return n+""}function Gn(n){const e=n.length;if($(e>=2),e===2)return $(n.charAt(0)===""&&n.charAt(1)===""),de.emptyPath();const t=e-2,i=[];let s="";for(let r=0;r<e;){const o=n.indexOf("",r);switch((o<0||o>t)&&F(),n.charAt(o+1)){case"":const a=n.substring(r,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),i.push(c);break;case"":s+=n.substring(r,o),s+="\0";break;case"":s+=n.substring(r,o+1);break;default:F()}r=o+2}return new de(i)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(n,e){return[n,$t(e)]}function fT(n,e,t){return[n,$t(e),t]}const Cx={},Sx=["prefixPath","collectionGroup","readTime","documentId"],Ax=["prefixPath","collectionGroup","documentId"],kx=["collectionGroup","readTime","prefixPath","documentId"],Rx=["canonicalId","targetId"],Nx=["targetId","path"],xx=["path","targetId"],Px=["collectionId","parent"],Dx=["indexId","uid"],Ox=["uid","sequenceNumber"],Mx=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Lx=["indexId","uid","orderedDocumentKey"],Fx=["userId","collectionPath","documentId"],Ux=["userId","collectionPath","largestBatchId"],Vx=["userId","collectionGroup","largestBatchId"],pT=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Bx=[...pT,"documentOverlays"],gT=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],mT=gT,qx=[...mT,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf extends hT{constructor(e,t){super(),this.ht=e,this.currentSequenceNumber=t}}function _t(n,e){const t=D(n);return bn.M(t.ht,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function hr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function yT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t){this.comparator=e,this.root=t||wt.EMPTY}insert(e,t){return new Pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,wt.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,wt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fl(this.root,e,this.comparator,!1)}getReverseIterator(){return new fl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fl(this.root,e,this.comparator,!0)}}class fl{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class wt{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??wt.RED,this.left=s??wt.EMPTY,this.right=r??wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new wt(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return wt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}wt.EMPTY=null,wt.RED=!0,wt.BLACK=!1;wt.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(n,e,t,i,s){return this}insert(n,e,t){return new wt(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new V_(this.data.getIterator())}getIteratorFrom(e){return new V_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Le(this.comparator);return t.data=e,t}}class V_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Tr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Ht([])}unionWith(e){let t=new Le(Ye.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Ht(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zr(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $x(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new _T("Invalid base64 string: "+s):s}}(e);return new rt(t)}static fromUint8Array(e){const t=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new rt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const jx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ki(n){if($(!!n),typeof n=="string"){let e=0;const t=jx.exec(n);if($(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:je(n.seconds),nanos:je(n.nanos)}}function je(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Hi(n){return typeof n=="string"?rt.fromBase64String(n):rt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function wg(n){const e=n.mapValue.fields.__previous_value__;return gh(e)?wg(e):e}function Ya(n){const e=Ki(n.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,t,i,s,r,o,a,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Qi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Qi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Nl={nullValue:"NULL_VALUE"};function Gs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?gh(n)?4:vT(n)?9007199254740991:10:F()}function Xn(n,e){if(n===e)return!0;const t=Gs(n);if(t!==Gs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ya(n).isEqual(Ya(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Ki(i.timestampValue),o=Ki(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Hi(i.bytesValue).isEqual(Hi(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return je(i.geoPointValue.latitude)===je(s.geoPointValue.latitude)&&je(i.geoPointValue.longitude)===je(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return je(i.integerValue)===je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=je(i.doubleValue),o=je(s.doubleValue);return r===o?Qa(r)===Qa(o):isNaN(r)&&isNaN(o)}return!1}(n,e);case 9:return Zr(n.arrayValue.values||[],e.arrayValue.values||[],Xn);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(U_(r)!==U_(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Xn(r[a],o[a])))return!1;return!0}(n,e);default:return F()}}function Xa(n,e){return(n.values||[]).find(t=>Xn(t,e))!==void 0}function Yi(n,e){if(n===e)return 0;const t=Gs(n),i=Gs(e);if(t!==i)return ee(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return ee(n.booleanValue,e.booleanValue);case 2:return function(s,r){const o=je(s.integerValue||s.doubleValue),a=je(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return B_(n.timestampValue,e.timestampValue);case 4:return B_(Ya(n),Ya(e));case 5:return ee(n.stringValue,e.stringValue);case 6:return function(s,r){const o=Hi(s),a=Hi(r);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ee(o[c],a[c]);if(l!==0)return l}return ee(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,r){const o=ee(je(s.latitude),je(r.latitude));return o!==0?o:ee(je(s.longitude),je(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Yi(o[c],a[c]);if(l)return l}return ee(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===Mi.mapValue&&r===Mi.mapValue)return 0;if(s===Mi.mapValue)return 1;if(r===Mi.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ee(a[u],l[u]);if(h!==0)return h;const d=Yi(o[a[u]],c[l[u]]);if(d!==0)return d}return ee(a.length,l.length)}(n.mapValue,e.mapValue);default:throw F()}}function B_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ee(n,e);const t=Ki(n),i=Ki(e),s=ee(t.seconds,i.seconds);return s!==0?s:ee(t.nanos,i.nanos)}function eo(n){return Pf(n)}function Pf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(i){const s=Ki(i);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Hi(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,x.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=Pf(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${Pf(i.fields[a])}`;return r+"}"}(n.mapValue):F();var e,t}function Ks(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Df(n){return!!n&&"integerValue"in n}function Ja(n){return!!n&&"arrayValue"in n}function q_(n){return!!n&&"nullValue"in n}function $_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function xl(n){return!!n&&"mapValue"in n}function ya(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return hr(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=ya(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ya(n.arrayValue.values[t]);return e}return Object.assign({},n)}function vT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function Wx(n){return"nullValue"in n?Nl:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ks(Qi.empty(),x.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:F()}function Gx(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ks(Qi.empty(),x.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Mi:F()}function j_(n,e){const t=Yi(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function z_(n,e){const t=Yi(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!xl(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ya(t)}setAll(e){let t=Ye.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,i,s),i={},s=[],t=a.popLast()}o?i[a.lastSegment()]=ya(o):s.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());xl(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];xl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){hr(t,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new bt(ya(this.value))}}function wT(n){const e=[];return hr(n.fields,(t,i)=>{const s=new Ye([t]);if(xl(i)){const r=wT(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t,i,s,r,o,a){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Me(e,0,q.min(),q.min(),q.min(),bt.empty(),0)}static newFoundDocument(e,t,i,s){return new Me(e,1,t,q.min(),i,s,0)}static newNoDocument(e,t){return new Me(e,2,t,q.min(),q.min(),bt.empty(),0)}static newUnknownDocument(e,t){return new Me(e,3,t,q.min(),q.min(),bt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t){this.position=e,this.inclusive=t}}function W_(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=x.comparator(x.fromName(o.referenceValue),t.key):i=Yi(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function G_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Xn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Kx(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{}class le extends IT{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new Hx(e,t,i):t==="array-contains"?new Xx(e,i):t==="in"?new AT(e,i):t==="not-in"?new Jx(e,i):t==="array-contains-any"?new Zx(e,i):new le(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new Qx(e,i):new Yx(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Yi(t,this.value)):t!==null&&Gs(this.value)===Gs(t)&&this.matchesComparison(Yi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ve extends IT{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new ve(e,t)}matches(e){return to(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(t=>t.isInequality());return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function to(n){return n.op==="and"}function Of(n){return n.op==="or"}function Ig(n){return ET(n)&&to(n)}function ET(n){for(const e of n.filters)if(e instanceof ve)return!1;return!0}function Mf(n){if(n instanceof le)return n.field.canonicalString()+n.op.toString()+eo(n.value);if(Ig(n))return n.filters.map(e=>Mf(e)).join(",");{const e=n.filters.map(t=>Mf(t)).join(",");return`${n.op}(${e})`}}function TT(n,e){return n instanceof le?function(t,i){return i instanceof le&&t.op===i.op&&t.field.isEqual(i.field)&&Xn(t.value,i.value)}(n,e):n instanceof ve?function(t,i){return i instanceof ve&&t.op===i.op&&t.filters.length===i.filters.length?t.filters.reduce((s,r,o)=>s&&TT(r,i.filters[o]),!0):!1}(n,e):void F()}function bT(n,e){const t=n.filters.concat(e);return ve.create(t,n.op)}function CT(n){return n instanceof le?function(e){return`${e.field.canonicalString()} ${e.op} ${eo(e.value)}`}(n):n instanceof ve?function(e){return e.op.toString()+" {"+e.getFilters().map(CT).join(" ,")+"}"}(n):"Filter"}class Hx extends le{constructor(e,t,i){super(e,t,i),this.key=x.fromName(i.referenceValue)}matches(e){const t=x.comparator(e.key,this.key);return this.matchesComparison(t)}}class Qx extends le{constructor(e,t){super(e,"in",t),this.keys=ST("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Yx extends le{constructor(e,t){super(e,"not-in",t),this.keys=ST("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ST(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>x.fromName(i.referenceValue))}class Xx extends le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ja(t)&&Xa(t.arrayValue,this.value)}}class AT extends le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Xa(this.value.arrayValue,t)}}class Jx extends le{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Xa(this.value.arrayValue,t)}}class Zx extends le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ja(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Xa(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,t=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function Lf(n,e=null,t=[],i=[],s=null,r=null,o=null){return new eP(n,e,t,i,s,r,o)}function Hs(n){const e=D(n);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Mf(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),xc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>eo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>eo(i)).join(",")),e.dt=t}return e.dt}function Pc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Kx(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!TT(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!G_(n.startAt,e.startAt)&&G_(n.endAt,e.endAt)}function au(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function cu(n,e){return n.filters.filter(t=>t instanceof le&&t.field.isEqual(e))}function K_(n,e,t){let i=Nl,s=!0;for(const r of cu(n,e)){let o=Nl,a=!0;switch(r.op){case"<":case"<=":o=Wx(r.value);break;case"==":case"in":case">=":o=r.value;break;case">":o=r.value,a=!1;break;case"!=":case"not-in":o=Nl}j_({value:i,inclusive:s},{value:o,inclusive:a})<0&&(i=o,s=a)}if(t!==null){for(let r=0;r<n.orderBy.length;++r)if(n.orderBy[r].field.isEqual(e)){const o=t.position[r];j_({value:i,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(i=o,s=t.inclusive);break}}return{value:i,inclusive:s}}function H_(n,e,t){let i=Mi,s=!0;for(const r of cu(n,e)){let o=Mi,a=!0;switch(r.op){case">=":case">":o=Gx(r.value),a=!1;break;case"==":case"in":case"<=":o=r.value;break;case"<":o=r.value,a=!1;break;case"!=":case"not-in":o=Mi}z_({value:i,inclusive:s},{value:o,inclusive:a})>0&&(i=o,s=a)}if(t!==null){for(let r=0;r<n.orderBy.length;++r)if(n.orderBy[r].field.isEqual(e)){const o=t.position[r];z_({value:i,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(i=o,s=t.inclusive);break}}return{value:i,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function kT(n,e,t,i,s,r,o,a){return new _i(n,e,t,i,s,r,o,a)}function So(n){return new _i(n)}function Q_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Eg(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function mh(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Tg(n){return n.collectionGroup!==null}function Bs(n){const e=D(n);if(e.wt===null){e.wt=[];const t=mh(e),i=Eg(e);if(t!==null&&i===null)t.isKeyField()||e.wt.push(new Vr(t)),e.wt.push(new Vr(Ye.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Vr(Ye.keyField(),r))}}}return e.wt}function Zt(n){const e=D(n);if(!e._t)if(e.limitType==="F")e._t=Lf(e.path,e.collectionGroup,Bs(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of Bs(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new Vr(r.field,o))}const i=e.endAt?new Xi(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Xi(e.startAt.position,e.startAt.inclusive):null;e._t=Lf(e.path,e.collectionGroup,t,e.filters,e.limit,i,s)}return e._t}function Ff(n,e){e.getFirstInequalityField(),mh(n);const t=n.filters.concat([e]);return new _i(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function lu(n,e,t){return new _i(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Dc(n,e){return Pc(Zt(n),Zt(e))&&n.limitType===e.limitType}function RT(n){return`${Hs(Zt(n))}|lt:${n.limitType}`}function Uf(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(i=>CT(i)).join(", ")}]`),xc(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>eo(i)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>eo(i)).join(",")),`Target(${t})`}(Zt(n))}; limitType=${n.limitType})`}function Oc(n,e){return e.isFoundDocument()&&function(t,i){const s=i.key.path;return t.collectionGroup!==null?i.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):x.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(n,e)&&function(t,i){for(const s of Bs(t))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(t,i){for(const s of t.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(t,i){return!(t.startAt&&!function(s,r,o){const a=W_(s,r,o);return s.inclusive?a<=0:a<0}(t.startAt,Bs(t),i)||t.endAt&&!function(s,r,o){const a=W_(s,r,o);return s.inclusive?a>=0:a>0}(t.endAt,Bs(t),i))}(n,e)}function NT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function xT(n){return(e,t)=>{let i=!1;for(const s of Bs(n)){const r=tP(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function tP(n,e,t){const i=n.field.isKeyField()?x.comparator(e.key,t.key):function(s,r,o){const a=r.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Yi(a,c):F()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){hr(this.inner,(t,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return yT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=new Pe(x.comparator);function Qt(){return nP}const PT=new Pe(x.comparator);function la(...n){let e=PT;for(const t of n)e=e.insert(t.key,t);return e}function DT(n){let e=PT;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Kn(){return _a()}function OT(){return _a()}function _a(){return new cs(n=>n.toString(),(n,e)=>n.isEqual(e))}const iP=new Pe(x.comparator),sP=new Le(x.comparator);function te(...n){let e=sP;for(const t of n)e=e.add(t);return e}const rP=new Le(ee);function bg(){return rP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qa(e)?"-0":e}}function LT(n){return{integerValue:""+n}}function FT(n,e){return dT(e)?LT(e):MT(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this._=void 0}}function oP(n,e,t){return n instanceof no?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&gh(s)&&(s=wg(s)),s&&(r.fields.__previous_value__=s),{mapValue:r}}(t,e):n instanceof Qs?VT(n,e):n instanceof Ys?BT(n,e):function(i,s){const r=UT(i,s),o=Y_(r)+Y_(i.gt);return Df(r)&&Df(i.gt)?LT(o):MT(i.serializer,o)}(n,e)}function aP(n,e,t){return n instanceof Qs?VT(n,e):n instanceof Ys?BT(n,e):t}function UT(n,e){return n instanceof io?Df(t=e)||function(i){return!!i&&"doubleValue"in i}(t)?e:{integerValue:0}:null;var t}class no extends yh{}class Qs extends yh{constructor(e){super(),this.elements=e}}function VT(n,e){const t=qT(e);for(const i of n.elements)t.some(s=>Xn(s,i))||t.push(i);return{arrayValue:{values:t}}}class Ys extends yh{constructor(e){super(),this.elements=e}}function BT(n,e){let t=qT(e);for(const i of n.elements)t=t.filter(s=>!Xn(s,i));return{arrayValue:{values:t}}}class io extends yh{constructor(e,t){super(),this.serializer=e,this.gt=t}}function Y_(n){return je(n.integerValue||n.doubleValue)}function qT(n){return Ja(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t){this.field=e,this.transform=t}}function cP(n,e){return n.field.isEqual(e.field)&&function(t,i){return t instanceof Qs&&i instanceof Qs||t instanceof Ys&&i instanceof Ys?Zr(t.elements,i.elements,Xn):t instanceof io&&i instanceof io?Xn(t.gt,i.gt):t instanceof no&&i instanceof no}(n.transform,e.transform)}class lP{constructor(e,t){this.version=e,this.transformResults=t}}class Ue{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ue}static exists(e){return new Ue(void 0,e)}static updateTime(e){return new Ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pl(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class _h{}function $T(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ko(n.key,Ue.none()):new Ao(n.key,n.data,Ue.none());{const t=n.data,i=bt.empty();let s=new Le(Ye.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new vi(n.key,i,new Ht(s.toArray()),Ue.none())}}function uP(n,e,t){n instanceof Ao?function(i,s,r){const o=i.value.clone(),a=J_(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):n instanceof vi?function(i,s,r){if(!Pl(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=J_(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(jT(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,e,t):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function va(n,e,t,i){return n instanceof Ao?function(s,r,o,a){if(!Pl(s.precondition,r))return o;const c=s.value.clone(),l=Z_(s.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(n,e,t,i):n instanceof vi?function(s,r,o,a){if(!Pl(s.precondition,r))return o;const c=Z_(s.fieldTransforms,a,r),l=r.data;return l.setAll(jT(s)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(n,e,t,i):function(s,r,o){return Pl(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(n,e,t)}function hP(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),r=UT(i.transform,s||null);r!=null&&(t===null&&(t=bt.empty()),t.set(i.field,r))}return t||null}function X_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,i){return t===void 0&&i===void 0||!(!t||!i)&&Zr(t,i,(s,r)=>cP(s,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ao extends _h{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vi extends _h{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function jT(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function J_(n,e,t){const i=new Map;$(n.length===t.length);for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,aP(o,a,t[s]))}return i}function Z_(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,oP(r,o,e))}return i}class ko extends _h{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cg extends _h{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&uP(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=va(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=va(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=OT();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(s.key)?null:a;const c=$T(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(q.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),te())}isEqual(e){return this.batchId===e.batchId&&Zr(this.mutations,e.mutations,(t,i)=>X_(t,i))&&Zr(this.baseMutations,e.baseMutations,(t,i)=>X_(t,i))}}class Ag{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){$(e.mutations.length===i.length);let s=iP;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Ag(e,t,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,he;function zT(n){switch(n){default:return F();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function WT(n){if(n===void 0)return Qe("GRPC error has no .code"),v.UNKNOWN;switch(n){case et.OK:return v.OK;case et.CANCELLED:return v.CANCELLED;case et.UNKNOWN:return v.UNKNOWN;case et.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case et.INTERNAL:return v.INTERNAL;case et.UNAVAILABLE:return v.UNAVAILABLE;case et.UNAUTHENTICATED:return v.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case et.NOT_FOUND:return v.NOT_FOUND;case et.ALREADY_EXISTS:return v.ALREADY_EXISTS;case et.PERMISSION_DENIED:return v.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case et.ABORTED:return v.ABORTED;case et.OUT_OF_RANGE:return v.OUT_OF_RANGE;case et.UNIMPLEMENTED:return v.UNIMPLEMENTED;case et.DATA_LOSS:return v.DATA_LOSS;default:return F()}}(he=et||(et={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return pl}static getOrCreateInstance(){return pl===null&&(pl=new Rg),pl}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let pl=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=new Ur([4294967295,4294967295],0);function ev(n){const e=GT().encode(n),t=new ax;return t.update(e),new Uint8Array(t.digest())}function tv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Ur([t,i],0),new Ur([s,r],0)]}class Ng{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new ua(`Invalid padding: ${t}`);if(i<0)throw new ua(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new ua(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new ua(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Ur.fromNumber(this.It)}Et(e,t,i){let s=e.add(t.multiply(Ur.fromNumber(i)));return s.compare(fP)===1&&(s=new Ur([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=ev(e),[i,s]=tv(t);for(let r=0;r<this.hashCount;r++){const o=this.Et(i,s,r);if(!this.At(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Ng(r,s,t);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const t=ev(e),[i,s]=tv(t);for(let r=0;r<this.hashCount;r++){const o=this.Et(i,s,r);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class ua extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Fc.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Lc(q.min(),s,new Pe(ee),Qt(),te())}}class Fc{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Fc(i,t,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,t,i,s){this.Pt=e,this.removedTargetIds=t,this.key=i,this.bt=s}}class KT{constructor(e,t){this.targetId=e,this.Vt=t}}class HT{constructor(e,t,i=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class nv{constructor(){this.St=0,this.Dt=sv(),this.Ct=rt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=te(),t=te(),i=te();return this.Dt.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:F()}}),new Fc(this.Ct,this.xt,e,t,i)}Ft(){this.Nt=!1,this.Dt=sv()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class pP{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Qt(),this.zt=iv(),this.Wt=new Pe(ee)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const i=this.Zt(t);switch(e.state){case 0:this.te(t)&&i.$t(e.resumeToken);break;case 1:i.Ut(),i.kt||i.Ft(),i.$t(e.resumeToken);break;case 2:i.Ut(),i.kt||this.removeTarget(t);break;case 3:this.te(t)&&(i.Kt(),i.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),i.$t(e.resumeToken));break;default:F()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((i,s)=>{this.te(s)&&t(s)})}ne(e){var t;const i=e.targetId,s=e.Vt.count,r=this.se(i);if(r){const o=r.target;if(au(o))if(s===0){const a=new x(o.path);this.Yt(i,a,Me.newNoDocument(a,q.min()))}else $(s===1);else{const a=this.ie(i);if(a!==s){const c=this.re(e,a);if(c!==0){this.ee(i);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(i,l)}(t=Rg.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(l,u,h){var d,f,m,y,E,V;const W={localCacheCount:u,existenceFilterCount:h.count},U=h.unchangedNames;return U&&(W.bloomFilter={applied:l===0,hashCount:(d=U==null?void 0:U.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(y=(m=(f=U==null?void 0:U.bits)===null||f===void 0?void 0:f.bitmap)===null||m===void 0?void 0:m.length)!==null&&y!==void 0?y:0,padding:(V=(E=U==null?void 0:U.bits)===null||E===void 0?void 0:E.padding)!==null&&V!==void 0?V:0}),W}(c,a,e.Vt))}}}}re(e,t){const{unchangedNames:i,count:s}=e.Vt;if(!i||!i.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=i;let c,l;try{c=Hi(r).toUint8Array()}catch(u){if(u instanceof _T)return xn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new Ng(c,o,a)}catch(u){return xn(u instanceof ua?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:s!==t-this.oe(e.targetId,l)?2:0}oe(e,t){const i=this.Gt.getRemoteKeysForTarget(e);let s=0;return i.forEach(r=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.vt(a)||(this.Yt(e,r,null),s++)}),s}ce(e){const t=new Map;this.Qt.forEach((r,o)=>{const a=this.se(o);if(a){if(r.current&&au(a.target)){const c=new x(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,Me.newNoDocument(c,e))}r.Mt&&(t.set(o,r.Ot()),r.Ft())}});let i=te();this.zt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(e));const s=new Lc(e,t,this.Wt,this.jt,i);return this.jt=Qt(),this.zt=iv(),this.Wt=new Pe(ee),s}Jt(e,t){if(!this.te(e))return;const i=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,i),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,i){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,t)?s.Bt(t,1):s.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),i&&(this.jt=this.jt.insert(t,i))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new nv,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Le(ee),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||C("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new nv),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function iv(){return new Pe(x.comparator)}function sv(){return new Pe(x.comparator)}const gP=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),mP=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),yP=(()=>({and:"AND",or:"OR"}))();class _P{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Vf(n,e){return n.useProto3Json||xc(e)?e:{value:e}}function so(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function QT(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function vP(n,e){return so(n,e.toTimestamp())}function Xe(n){return $(!!n),q.fromTimestamp(function(e){const t=Ki(e);return new Ve(t.seconds,t.nanos)}(n))}function xg(n,e){return function(t){return new de(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function YT(n){const e=de.fromString(n);return $(r0(e)),e}function Za(n,e){return xg(n.databaseId,e.path)}function Qn(n,e){const t=YT(e);if(t.get(1)!==n.databaseId.projectId)throw new I(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new I(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new x(JT(t))}function Bf(n,e){return xg(n.databaseId,e)}function XT(n){const e=YT(n);return e.length===4?de.emptyPath():JT(e)}function ec(n){return new de(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function JT(n){return $(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function rv(n,e,t){return{name:Za(n,e),fields:t.value.mapValue.fields}}function ZT(n,e,t){const i=Qn(n,e.name),s=Xe(e.updateTime),r=e.createTime?Xe(e.createTime):q.min(),o=new bt({mapValue:{fields:e.fields}}),a=Me.newFoundDocument(i,s,r,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function wP(n,e){return"found"in e?function(t,i){$(!!i.found),i.found.name,i.found.updateTime;const s=Qn(t,i.found.name),r=Xe(i.found.updateTime),o=i.found.createTime?Xe(i.found.createTime):q.min(),a=new bt({mapValue:{fields:i.found.fields}});return Me.newFoundDocument(s,r,o,a)}(n,e):"missing"in e?function(t,i){$(!!i.missing),$(!!i.readTime);const s=Qn(t,i.missing),r=Xe(i.readTime);return Me.newNoDocument(s,r)}(n,e):F()}function IP(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(c,l){return c.useProto3Json?($(l===void 0||typeof l=="string"),rt.fromBase64String(l||"")):($(l===void 0||l instanceof Uint8Array),rt.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?v.UNKNOWN:WT(c.code);return new I(l,c.message||"")}(o);t=new HT(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Qn(n,i.document.name),r=Xe(i.document.updateTime),o=i.document.createTime?Xe(i.document.createTime):q.min(),a=new bt({mapValue:{fields:i.document.fields}}),c=Me.newFoundDocument(s,r,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];t=new Dl(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Qn(n,i.document),r=i.readTime?Xe(i.readTime):q.min(),o=Me.newNoDocument(s,r),a=i.removedTargetIds||[];t=new Dl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Qn(n,i.document),r=i.removedTargetIds||[];t=new Dl([],r,s,null)}else{if(!("filter"in e))return F();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new dP(s,r),a=i.targetId;t=new KT(a,o)}}return t}function tc(n,e){let t;if(e instanceof Ao)t={update:rv(n,e.key,e.value)};else if(e instanceof ko)t={delete:Za(n,e.key)};else if(e instanceof vi)t={update:rv(n,e.key,e.data),updateMask:AP(e.fieldMask)};else{if(!(e instanceof Cg))return F();t={verify:Za(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof no)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Qs)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ys)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof io)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw F()}(0,i))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:vP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:F()}(n,e.precondition)),t}function qf(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Ue.updateTime(Xe(s.updateTime)):s.exists!==void 0?Ue.exists(s.exists):Ue.none()}(e.currentDocument):Ue.none(),i=e.updateTransforms?e.updateTransforms.map(s=>function(r,o){let a=null;if("setToServerValue"in o)$(o.setToServerValue==="REQUEST_TIME"),a=new no;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new Qs(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new Ys(l)}else"increment"in o?a=new io(r,o.increment):F();const c=Ye.fromServerFormat(o.fieldPath);return new Mc(c,a)}(n,s)):[];if(e.update){e.update.name;const s=Qn(n,e.update.name),r=new bt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Ht(c.map(l=>Ye.fromServerFormat(l)))}(e.updateMask);return new vi(s,r,o,t,i)}return new Ao(s,r,t,i)}if(e.delete){const s=Qn(n,e.delete);return new ko(s,t)}if(e.verify){const s=Qn(n,e.verify);return new Cg(s,t)}return F()}function EP(n,e){return n&&n.length>0?($(e!==void 0),n.map(t=>function(i,s){let r=i.updateTime?Xe(i.updateTime):Xe(s);return r.isEqual(q.min())&&(r=Xe(s)),new lP(r,i.transformResults||[])}(t,e))):[]}function e0(n,e){return{documents:[Bf(n,e.path)]}}function t0(n,e){const t={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(t.parent=Bf(n,i),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Bf(n,i.popLast()),t.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(c){if(c.length!==0)return s0(ve.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ar(u.field),direction:bP(u.dir)}}(l))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=Vf(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function n0(n){let e=XT(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){$(i===1);const u=t.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];t.where&&(r=function(u){const h=i0(u);return h instanceof ve&&Ig(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new Vr(kr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;t.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,xc(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Xi(d,h)}(t.startAt));let l=null;return t.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Xi(d,h)}(t.endAt)),kT(e,s,o,r,a,"F",c,l)}function TP(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function i0(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=kr(e.unaryFilter.field);return le.create(t,"==",{doubleValue:NaN});case"IS_NULL":const i=kr(e.unaryFilter.field);return le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=kr(e.unaryFilter.field);return le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=kr(e.unaryFilter.field);return le.create(r,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(n):n.fieldFilter!==void 0?function(e){return le.create(kr(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ve.create(e.compositeFilter.filters.map(t=>i0(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(n):F()}function bP(n){return gP[n]}function CP(n){return mP[n]}function SP(n){return yP[n]}function Ar(n){return{fieldPath:n.canonicalString()}}function kr(n){return Ye.fromServerFormat(n.fieldPath)}function s0(n){return n instanceof le?function(e){if(e.op==="=="){if($_(e.value))return{unaryFilter:{field:Ar(e.field),op:"IS_NAN"}};if(q_(e.value))return{unaryFilter:{field:Ar(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if($_(e.value))return{unaryFilter:{field:Ar(e.field),op:"IS_NOT_NAN"}};if(q_(e.value))return{unaryFilter:{field:Ar(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ar(e.field),op:CP(e.op),value:e.value}}}(n):n instanceof ve?function(e){const t=e.getFilters().map(i=>s0(i));return t.length===1?t[0]:{compositeFilter:{op:SP(e.op),filters:t}}}(n):F()}function AP(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function r0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,i,s,r=q.min(),o=q.min(),a=rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new ii(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e){this.fe=e}}function kP(n,e){let t;if(e.document)t=ZT(n.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const i=x.fromSegments(e.noDocument.path),s=Js(e.noDocument.readTime);t=Me.newNoDocument(i,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return F();{const i=x.fromSegments(e.unknownDocument.path),s=Js(e.unknownDocument.version);t=Me.newUnknownDocument(i,s)}}return e.readTime&&t.setReadTime(function(i){const s=new Ve(i[0],i[1]);return q.fromTimestamp(s)}(e.readTime)),t}function ov(n,e){const t=e.key,i={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:uu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())i.document=function(s,r){return{name:Za(s,r.key),fields:r.data.value.mapValue.fields,updateTime:so(s,r.version.toTimestamp()),createTime:so(s,r.createTime.toTimestamp())}}(n.fe,e);else if(e.isNoDocument())i.noDocument={path:t.path.toArray(),readTime:Xs(e.version)};else{if(!e.isUnknownDocument())return F();i.unknownDocument={path:t.path.toArray(),version:Xs(e.version)}}return i}function uu(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Xs(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Js(n){const e=new Ve(n.seconds,n.nanoseconds);return q.fromTimestamp(e)}function Ss(n,e){const t=(e.baseMutations||[]).map(r=>qf(n.fe,r));for(let r=0;r<e.mutations.length-1;++r){const o=e.mutations[r];if(r+1<e.mutations.length&&e.mutations[r+1].transform!==void 0){const a=e.mutations[r+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(r+1,1),++r}}const i=e.mutations.map(r=>qf(n.fe,r)),s=Ve.fromMillis(e.localWriteTimeMs);return new Sg(e.batchId,s,t,i)}function ha(n){const e=Js(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Js(n.lastLimboFreeSnapshotVersion):q.min();let i;var s;return n.query.documents!==void 0?($((s=n.query).documents.length===1),i=Zt(So(XT(s.documents[0])))):i=function(r){return Zt(n0(r))}(n.query),new ii(i,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,rt.fromBase64String(n.resumeToken))}function a0(n,e){const t=Xs(e.snapshotVersion),i=Xs(e.lastLimboFreeSnapshotVersion);let s;s=au(e.target)?e0(n.fe,e.target):t0(n.fe,e.target);const r=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Hs(e.target),readTime:t,resumeToken:r,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:s}}function Pg(n){const e=n0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?lu(e,e.limit,"L"):e}function Sd(n,e){return new kg(e.largestBatchId,qf(n.fe,e.overlayMutation))}function av(n,e){const t=e.path.lastSegment();return[n,$t(e.path.popLast()),t]}function cv(n,e,t,i){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:Xs(i.readTime),documentKey:$t(i.documentKey.path),largestBatchId:i.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{getBundleMetadata(e,t){return lv(e).get(t).next(i=>{if(i)return{id:(s=i).bundleId,createTime:Js(s.createTime),version:s.version};var s})}saveBundleMetadata(e,t){return lv(e).put({bundleId:(i=t).id,createTime:Xs(Xe(i.createTime)),version:i.version});var i}getNamedQuery(e,t){return uv(e).get(t).next(i=>{if(i)return{name:(s=i).name,query:Pg(s.bundledQuery),readTime:Js(s.readTime)};var s})}saveNamedQuery(e,t){return uv(e).put(function(i){return{name:i.name,readTime:Xs(Xe(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function lv(n){return _t(n,"bundles")}function uv(n){return _t(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,t){this.serializer=e,this.userId=t}static de(e,t){const i=t.uid||"";return new vh(e,i)}getOverlay(e,t){return Wo(e).get(av(this.userId,t)).next(i=>i?Sd(this.serializer,i):null)}getOverlays(e,t){const i=Kn();return _.forEach(t,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,t,i){const s=[];return i.forEach((r,o)=>{const a=new kg(t,o);s.push(this.we(e,a))}),_.waitFor(s)}removeOverlaysForBatchId(e,t,i){const s=new Set;t.forEach(o=>s.add($t(o.getCollectionPath())));const r=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,i],[this.userId,o,i+1],!1,!0);r.push(Wo(e).J("collectionPathOverlayIndex",a))}),_.waitFor(r)}getOverlaysForCollection(e,t,i){const s=Kn(),r=$t(t),o=IDBKeyRange.bound([this.userId,r,i],[this.userId,r,Number.POSITIVE_INFINITY],!0);return Wo(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const l=Sd(this.serializer,c);s.set(l.getKey(),l)}return s})}getOverlaysForCollectionGroup(e,t,i,s){const r=Kn();let o;const a=IDBKeyRange.bound([this.userId,t,i],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Wo(e).X({index:"collectionGroupOverlayIndex",range:a},(c,l,u)=>{const h=Sd(this.serializer,l);r.size()<s||h.largestBatchId===o?(r.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>r)}we(e,t){return Wo(e).put(function(i,s,r){const[o,a,c]=av(s,r.mutation.key);return{userId:s,collectionPath:a,documentId:c,collectionGroup:r.mutation.key.getCollectionGroup(),largestBatchId:r.largestBatchId,overlayMutation:tc(i.fe,r.mutation)}}(this.serializer,this.userId,t))}}function Wo(n){return _t(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(je(e.integerValue));else if("doubleValue"in e){const i=je(e.doubleValue);isNaN(i)?this.ye(t,13):(this.ye(t,15),Qa(i)?t.pe(0):t.pe(i))}else if("timestampValue"in e){const i=e.timestampValue;this.ye(t,20),typeof i=="string"?t.Ie(i):(t.Ie(`${i.seconds||""}`),t.pe(i.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(Hi(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const i=e.geoPointValue;this.ye(t,45),t.pe(i.latitude||0),t.pe(i.longitude||0)}else"mapValue"in e?vT(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):F()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const i=e.fields||{};this.ye(t,55);for(const s of Object.keys(i))this.Te(s,t),this.me(i[s],t)}Pe(e,t){const i=e.values||[];this.ye(t,50);for(const s of i)this.me(s,t)}ve(e,t){this.ye(t,37),x.fromName(e).path.forEach(i=>{this.ye(t,60),this.be(i,t)})}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}As.Ve=new As;function NP(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function hv(n){const e=64-function(t){let i=0;for(let s=0;s<8;++s){const r=NP(255&t[s]);if(i+=r,r!==8)break}return i}(n);return Math.ceil(e/8)}class xP{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const t=e[Symbol.iterator]();let i=t.next();for(;!i.done;)this.De(i.value),i=t.next();this.Ce()}xe(e){const t=e[Symbol.iterator]();let i=t.next();for(;!i.done;)this.Ne(i.value),i=t.next();this.ke()}Me(e){for(const t of e){const i=t.charCodeAt(0);if(i<128)this.De(i);else if(i<2048)this.De(960|i>>>6),this.De(128|63&i);else if(t<"\uD800"||"\uDBFF"<t)this.De(480|i>>>12),this.De(128|63&i>>>6),this.De(128|63&i);else{const s=t.codePointAt(0);this.De(240|s>>>18),this.De(128|63&s>>>12),this.De(128|63&s>>>6),this.De(128|63&s)}}this.Ce()}$e(e){for(const t of e){const i=t.charCodeAt(0);if(i<128)this.Ne(i);else if(i<2048)this.Ne(960|i>>>6),this.Ne(128|63&i);else if(t<"\uD800"||"\uDBFF"<t)this.Ne(480|i>>>12),this.Ne(128|63&i>>>6),this.Ne(128|63&i);else{const s=t.codePointAt(0);this.Ne(240|s>>>18),this.Ne(128|63&s>>>12),this.Ne(128|63&s>>>6),this.Ne(128|63&s)}}this.ke()}Oe(e){const t=this.Fe(e),i=hv(t);this.Be(1+i),this.buffer[this.position++]=255&i;for(let s=t.length-i;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Le(e){const t=this.Fe(e),i=hv(t);this.Be(1+i),this.buffer[this.position++]=~(255&i);for(let s=t.length-i;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const t=function(s){const r=new DataView(new ArrayBuffer(8));return r.setFloat64(0,s,!1),new Uint8Array(r.buffer)}(e),i=(128&t[0])!=0;t[0]^=i?255:128;for(let s=1;s<t.length;++s)t[s]^=i?255:0;return t}De(e){const t=255&e;t===0?(this.Ue(0),this.Ue(255)):t===255?(this.Ue(255),this.Ue(0)):this.Ue(t)}Ne(e){const t=255&e;t===0?(this.Ge(0),this.Ge(255)):t===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const t=e+this.position;if(t<=this.buffer.length)return;let i=2*this.buffer.length;i<t&&(i=t);const s=new Uint8Array(i);s.set(this.buffer),this.buffer=s}}class PP{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class DP{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class Go{constructor(){this.je=new xP,this.ze=new PP(this.je),this.We=new DP(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,i,s){this.indexId=e,this.documentKey=t,this.arrayValue=i,this.directionalValue=s}Je(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,i=new Uint8Array(t);return i.set(this.directionalValue,0),t!==e?i.set([0],this.directionalValue.length):++i[i.length-1],new ks(this.indexId,this.documentKey,this.arrayValue,i)}}function ki(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=dv(n.arrayValue,e.arrayValue),t!==0?t:(t=dv(n.directionalValue,e.directionalValue),t!==0?t:x.comparator(n.documentKey,e.documentKey)))}function dv(n,e){for(let t=0;t<n.length&&t<e.length;++t){const i=n[t]-e[t];if(i!==0)return i}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const t of e.filters){const i=t;i.isInequality()?this.Ze=i:this.Xe.push(i)}}tn(e){$(e.collectionGroup===this.collectionId);const t=Nf(e);if(t!==void 0&&!this.en(t))return!1;const i=vs(e);let s=new Set,r=0,o=0;for(;r<i.length&&this.en(i[r]);++r)s=s.add(i[r].fieldPath.canonicalString());if(r===i.length)return!0;if(this.Ze!==void 0){if(!s.has(this.Ze.field.canonicalString())){const a=i[r];if(!this.nn(this.Ze,a)||!this.sn(this.Ye[o++],a))return!1}++r}for(;r<i.length;++r){const a=i[r];if(o>=this.Ye.length||!this.sn(this.Ye[o++],a))return!1}return!0}en(e){for(const t of this.Xe)if(this.nn(t,e))return!0;return!1}nn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const i=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===i}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(n){var e,t;if($(n instanceof le||n instanceof ve),n instanceof le){if(n instanceof AT){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(r=>le.create(n.field,"==",r)))||[];return ve.create(s,"or")}return n}const i=n.filters.map(s=>c0(s));return ve.create(i,n.op)}function MP(n){if(n.getFilters().length===0)return[];const e=zf(c0(n));return $(l0(e)),$f(e)||jf(e)?[e]:e.getFilters()}function $f(n){return n instanceof le}function jf(n){return n instanceof ve&&Ig(n)}function l0(n){return $f(n)||jf(n)||function(e){if(e instanceof ve&&Of(e)){for(const t of e.getFilters())if(!$f(t)&&!jf(t))return!1;return!0}return!1}(n)}function zf(n){if($(n instanceof le||n instanceof ve),n instanceof le)return n;if(n.filters.length===1)return zf(n.filters[0]);const e=n.filters.map(i=>zf(i));let t=ve.create(e,n.op);return t=hu(t),l0(t)?t:($(t instanceof ve),$(to(t)),$(t.filters.length>1),t.filters.reduce((i,s)=>Dg(i,s)))}function Dg(n,e){let t;return $(n instanceof le||n instanceof ve),$(e instanceof le||e instanceof ve),t=n instanceof le?e instanceof le?function(i,s){return ve.create([i,s],"and")}(n,e):fv(n,e):e instanceof le?fv(e,n):function(i,s){if($(i.filters.length>0&&s.filters.length>0),to(i)&&to(s))return bT(i,s.getFilters());const r=Of(i)?i:s,o=Of(i)?s:i,a=r.filters.map(c=>Dg(c,o));return ve.create(a,"or")}(n,e),hu(t)}function fv(n,e){if(to(e))return bT(e,n.getFilters());{const t=e.filters.map(i=>Dg(n,i));return ve.create(t,"or")}}function hu(n){if($(n instanceof le||n instanceof ve),n instanceof le)return n;const e=n.getFilters();if(e.length===1)return hu(e[0]);if(ET(n))return n;const t=e.map(s=>hu(s)),i=[];return t.forEach(s=>{s instanceof le?i.push(s):s instanceof ve&&(s.op===n.op?i.push(...s.filters):i.push(s))}),i.length===1?i[0]:ve.create(i,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(){this.rn=new Og}addToCollectionParentIndex(e,t){return this.rn.add(t),_.resolve()}getCollectionParents(e,t){return _.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return _.resolve()}deleteFieldIndex(e,t){return _.resolve()}getDocumentsMatchingTarget(e,t){return _.resolve(null)}getIndexType(e,t){return _.resolve(0)}getFieldIndexes(e,t){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,t){return _.resolve(cn.min())}getMinOffsetFromCollectionGroup(e,t){return _.resolve(cn.min())}updateCollectionGroup(e,t,i){return _.resolve()}updateIndexEntries(e,t){return _.resolve()}}class Og{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Le(de.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Le(de.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=new Uint8Array(0);class FP{constructor(e,t){this.user=e,this.databaseId=t,this.on=new Og,this.un=new cs(i=>Hs(i),(i,s)=>Pc(i,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const i=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});const r={collectionId:i,parent:$t(s)};return pv(e).put(r)}return _.resolve()}getCollectionParents(e,t){const i=[],s=IDBKeyRange.bound([t,""],[oT(t),""],!1,!0);return pv(e).j(s).next(r=>{for(const o of r){if(o.collectionId!==t)break;i.push(Gn(o.parent))}return i})}addFieldIndex(e,t){const i=ml(e),s=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete s.indexId;const r=i.add(s);if(t.indexState){const o=Ho(e);return r.next(a=>{o.put(cv(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return r.next()}deleteFieldIndex(e,t){const i=ml(e),s=Ho(e),r=Ko(e);return i.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const i=Ko(e);let s=!0;const r=new Map;return _.forEach(this.cn(t),o=>this.an(e,o).next(a=>{s&&(s=!!a),r.set(o,a)})).next(()=>{if(s){let o=te();const a=[];return _.forEach(r,(c,l)=>{var u;C("IndexedDbIndexManager",`Using index ${u=c,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(U=>`${U.fieldPath}:${U.kind}`).join(",")}`} to execute ${Hs(t)}`);const h=function(U,M){const ne=Nf(M);if(ne===void 0)return null;for(const se of cu(U,ne.fieldPath))switch(se.op){case"array-contains-any":return se.value.arrayValue.values||[];case"array-contains":return[se.value]}return null}(l,c),d=function(U,M){const ne=new Map;for(const se of vs(M))for(const Ie of cu(U,se.fieldPath))switch(Ie.op){case"==":case"in":ne.set(se.fieldPath.canonicalString(),Ie.value);break;case"not-in":case"!=":return ne.set(se.fieldPath.canonicalString(),Ie.value),Array.from(ne.values())}return null}(l,c),f=function(U,M){const ne=[];let se=!0;for(const Ie of vs(M)){const Y=Ie.kind===0?K_(U,Ie.fieldPath,U.startAt):H_(U,Ie.fieldPath,U.startAt);ne.push(Y.value),se&&(se=Y.inclusive)}return new Xi(ne,se)}(l,c),m=function(U,M){const ne=[];let se=!0;for(const Ie of vs(M)){const Y=Ie.kind===0?H_(U,Ie.fieldPath,U.endAt):K_(U,Ie.fieldPath,U.endAt);ne.push(Y.value),se&&(se=Y.inclusive)}return new Xi(ne,se)}(l,c),y=this.hn(c,l,f),E=this.hn(c,l,m),V=this.ln(c,l,d),W=this.fn(c.indexId,h,y,f.inclusive,E,m.inclusive,V);return _.forEach(W,U=>i.H(U,t.limit).next(M=>{M.forEach(ne=>{const se=x.fromSegments(ne.documentKey);o.has(se)||(o=o.add(se),a.push(se))})}))}).next(()=>a)}return _.resolve(null)})}cn(e){let t=this.un.get(e);return t||(e.filters.length===0?t=[e]:t=MP(ve.create(e.filters,"and")).map(i=>Lf(e.path,e.collectionGroup,e.orderBy,i.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t),t)}fn(e,t,i,s,r,o,a){const c=(t!=null?t.length:1)*Math.max(i.length,r.length),l=c/(t!=null?t.length:1),u=[];for(let h=0;h<c;++h){const d=t?this.dn(t[h/l]):gl,f=this.wn(e,d,i[h%l],s),m=this._n(e,d,r[h%l],o),y=a.map(E=>this.wn(e,d,E,!0));u.push(...this.createRange(f,m,y))}return u}wn(e,t,i,s){const r=new ks(e,x.empty(),t,i);return s?r:r.Je()}_n(e,t,i,s){const r=new ks(e,x.empty(),t,i);return s?r.Je():r}an(e,t){const i=new OP(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(r=>{let o=null;for(const a of r)i.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let i=2;const s=this.cn(t);return _.forEach(s,r=>this.an(e,r).next(o=>{o?i!==0&&o.fields.length<function(a){let c=new Le(Ye.comparator),l=!1;for(const u of a.filters)for(const h of u.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?l=!0:c=c.add(h.field));for(const u of a.orderBy)u.field.isKeyField()||(c=c.add(u.field));return c.size+(l?1:0)}(r)&&(i=1):i=0})).next(()=>function(r){return r.limit!==null}(t)&&s.length>1&&i===2?1:i)}mn(e,t){const i=new Go;for(const s of vs(e)){const r=t.data.field(s.fieldPath);if(r==null)return null;const o=i.He(s.kind);As.Ve._e(r,o)}return i.Qe()}dn(e){const t=new Go;return As.Ve._e(e,t.He(0)),t.Qe()}gn(e,t){const i=new Go;return As.Ve._e(Ks(this.databaseId,t),i.He(function(s){const r=vs(s);return r.length===0?0:r[r.length-1].kind}(e))),i.Qe()}ln(e,t,i){if(i===null)return[];let s=[];s.push(new Go);let r=0;for(const o of vs(e)){const a=i[r++];for(const c of s)if(this.yn(t,o.fieldPath)&&Ja(a))s=this.pn(s,o,a);else{const l=c.He(o.kind);As.Ve._e(a,l)}}return this.In(s)}hn(e,t,i){return this.ln(e,t,i.position)}In(e){const t=[];for(let i=0;i<e.length;++i)t[i]=e[i].Qe();return t}pn(e,t,i){const s=[...e],r=[];for(const o of i.arrayValue.values||[])for(const a of s){const c=new Go;c.seed(a.Qe()),As.Ve._e(o,c.He(t.kind)),r.push(c)}return r}yn(e,t){return!!e.filters.find(i=>i instanceof le&&i.field.isEqual(t)&&(i.op==="in"||i.op==="not-in"))}getFieldIndexes(e,t){const i=ml(e),s=Ho(e);return(t?i.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):i.j()).next(r=>{const o=[];return _.forEach(r,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(l,u){const h=u?new ou(u.sequenceNumber,new cn(Js(u.readTime),new x(Gn(u.documentKey)),u.largestBatchId)):ou.empty(),d=l.fields.map(([f,m])=>new vx(Ye.fromServerFormat(f),m));return new aT(l.indexId,l.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((i,s)=>{const r=i.indexState.sequenceNumber-s.indexState.sequenceNumber;return r!==0?r:ee(i.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,i){const s=ml(e),r=Ho(e);return this.Tn(e).next(o=>s.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>_.forEach(a,c=>r.put(cv(c.indexId,this.user,o,i)))))}updateIndexEntries(e,t){const i=new Map;return _.forEach(t,(s,r)=>{const o=i.get(s.collectionGroup);return(o?_.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(i.set(s.collectionGroup,a),_.forEach(a,c=>this.En(e,s,c).next(l=>{const u=this.An(r,c);return l.isEqual(u)?_.resolve():this.vn(e,r,c,l,u)}))))})}Rn(e,t,i,s){return Ko(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.gn(i,t.key),documentKey:t.key.path.toArray()})}Pn(e,t,i,s){return Ko(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.gn(i,t.key),t.key.path.toArray()])}En(e,t,i){const s=Ko(e);let r=new Le(ki);return s.X({index:"documentKeyIndex",range:IDBKeyRange.only([i.indexId,this.uid,this.gn(i,t)])},(o,a)=>{r=r.add(new ks(i.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>r)}An(e,t){let i=new Le(ki);const s=this.mn(t,e);if(s==null)return i;const r=Nf(t);if(r!=null){const o=e.data.field(r.fieldPath);if(Ja(o))for(const a of o.arrayValue.values||[])i=i.add(new ks(t.indexId,e.key,this.dn(a),s))}else i=i.add(new ks(t.indexId,e.key,gl,s));return i}vn(e,t,i,s,r){C("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,l,u,h){const d=a.getIterator(),f=c.getIterator();let m=Tr(d),y=Tr(f);for(;m||y;){let E=!1,V=!1;if(m&&y){const W=l(m,y);W<0?V=!0:W>0&&(E=!0)}else m!=null?V=!0:E=!0;E?(u(y),y=Tr(f)):V?(h(m),m=Tr(d)):(m=Tr(d),y=Tr(f))}}(s,r,ki,a=>{o.push(this.Rn(e,t,i,a))},a=>{o.push(this.Pn(e,t,i,a))}),_.waitFor(o)}Tn(e){let t=1;return Ho(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(i,s,r)=>{r.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,i){i=i.sort((o,a)=>ki(o,a)).filter((o,a,c)=>!a||ki(o,c[a-1])!==0);const s=[];s.push(e);for(const o of i){const a=ki(o,e),c=ki(o,t);if(a===0)s[0]=e.Je();else if(a>0&&c<0)s.push(o),s.push(o.Je());else if(c>0)break}s.push(t);const r=[];for(let o=0;o<s.length;o+=2){if(this.bn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,gl,[]],c=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,gl,[]];r.push(IDBKeyRange.bound(a,c))}return r}bn(e,t){return ki(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(gv)}getMinOffset(e,t){return _.mapArray(this.cn(t),i=>this.an(e,i).next(s=>s||F())).next(gv)}}function pv(n){return _t(n,"collectionParents")}function Ko(n){return _t(n,"indexEntries")}function ml(n){return _t(n,"indexConfiguration")}function Ho(n){return _t(n,"indexState")}function gv(n){$(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let i=1;i<n.length;i++){const s=n[i].indexState.offset;_g(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new cn(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Wt{constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}static withCacheSize(e){return new Wt(e,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(n,e,t){const i=n.store("mutations"),s=n.store("documentMutations"),r=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=i.X({range:o},(u,h,d)=>(a++,d.delete()));r.push(c.next(()=>{$(a===1)}));const l=[];for(const u of t.mutations){const h=fT(e,u.key.path,t.batchId);r.push(s.delete(h)),l.push(u.key)}return _.waitFor(r).next(()=>l)}function du(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw F();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt.DEFAULT_COLLECTION_PERCENTILE=10,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wt.DEFAULT=new Wt(41943040,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wt.DISABLED=new Wt(-1,0,0);class wh{constructor(e,t,i,s){this.userId=e,this.serializer=t,this.indexManager=i,this.referenceDelegate=s,this.Vn={}}static de(e,t,i,s){$(e.uid!=="");const r=e.isAuthenticated()?e.uid:"";return new wh(r,t,i,s)}checkEmpty(e){let t=!0;const i=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ri(e).X({index:"userMutationsIndex",range:i},(s,r,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,i,s){const r=Rr(e),o=Ri(e);return o.add({}).next(a=>{$(typeof a=="number");const c=new Sg(a,t,i,s),l=function(d,f,m){const y=m.baseMutations.map(V=>tc(d.fe,V)),E=m.mutations.map(V=>tc(d.fe,V));return{userId:f,batchId:m.batchId,localWriteTimeMs:m.localWriteTime.toMillis(),baseMutations:y,mutations:E}}(this.serializer,this.userId,c),u=[];let h=new Le((d,f)=>ee(d.canonicalString(),f.canonicalString()));for(const d of s){const f=fT(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(l)),u.push(r.put(f,Cx))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Vn[a]=c.keys()}),_.waitFor(u).next(()=>c)})}lookupMutationBatch(e,t){return Ri(e).get(t).next(i=>i?($(i.userId===this.userId),Ss(this.serializer,i)):null)}Sn(e,t){return this.Vn[t]?_.resolve(this.Vn[t]):this.lookupMutationBatch(e,t).next(i=>{if(i){const s=i.keys();return this.Vn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=IDBKeyRange.lowerBound([this.userId,i]);let r=null;return Ri(e).X({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&($(a.batchId>=i),r=Ss(this.serializer,a)),c.done()}).next(()=>r)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let i=-1;return Ri(e).X({index:"userMutationsIndex",range:t,reverse:!0},(s,r,o)=>{i=r.batchId,o.done()}).next(()=>i)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ri(e).j("userMutationsIndex",t).next(i=>i.map(s=>Ss(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const i=Rl(this.userId,t.path),s=IDBKeyRange.lowerBound(i),r=[];return Rr(e).X({range:s},(o,a,c)=>{const[l,u,h]=o,d=Gn(u);if(l===this.userId&&t.path.isEqual(d))return Ri(e).get(h).next(f=>{if(!f)throw F();$(f.userId===this.userId),r.push(Ss(this.serializer,f))});c.done()}).next(()=>r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Le(ee);const s=[];return t.forEach(r=>{const o=Rl(this.userId,r.path),a=IDBKeyRange.lowerBound(o),c=Rr(e).X({range:a},(l,u,h)=>{const[d,f,m]=l,y=Gn(f);d===this.userId&&r.path.isEqual(y)?i=i.add(m):h.done()});s.push(c)}),_.waitFor(s).next(()=>this.Dn(e,i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1,r=Rl(this.userId,i),o=IDBKeyRange.lowerBound(r);let a=new Le(ee);return Rr(e).X({range:o},(c,l,u)=>{const[h,d,f]=c,m=Gn(d);h===this.userId&&i.isPrefixOf(m)?m.length===s&&(a=a.add(f)):u.done()}).next(()=>this.Dn(e,a))}Dn(e,t){const i=[],s=[];return t.forEach(r=>{s.push(Ri(e).get(r).next(o=>{if(o===null)throw F();$(o.userId===this.userId),i.push(Ss(this.serializer,o))}))}),_.waitFor(s).next(()=>i)}removeMutationBatch(e,t){return u0(e.ht,this.userId,t).next(i=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),_.forEach(i,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return _.resolve();const i=IDBKeyRange.lowerBound([this.userId]),s=[];return Rr(e).X({range:i},(r,o,a)=>{if(r[0]===this.userId){const c=Gn(r[1]);s.push(c)}else a.done()}).next(()=>{$(s.length===0)})})}containsKey(e,t){return h0(e,this.userId,t)}xn(e){return d0(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function h0(n,e,t){const i=Rl(e,t.path),s=i[1],r=IDBKeyRange.lowerBound(i);let o=!1;return Rr(n).X({range:r,Y:!0},(a,c,l)=>{const[u,h,d]=a;u===e&&h===s&&(o=!0),l.done()}).next(()=>o)}function Ri(n){return _t(n,"mutations")}function Rr(n){return _t(n,"documentMutations")}function d0(n){return _t(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Zs(0)}static Mn(){return new Zs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.$n(e).next(t=>{const i=new Zs(t.highestTargetId);return t.highestTargetId=i.next(),this.On(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(t=>q.fromTimestamp(new Ve(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,i){return this.$n(e).next(s=>(s.highestListenSequenceNumber=t,i&&(s.lastRemoteSnapshotVersion=i.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.On(e,s)))}addTargetData(e,t){return this.Fn(e,t).next(()=>this.$n(e).next(i=>(i.targetCount+=1,this.Bn(t,i),this.On(e,i))))}updateTargetData(e,t){return this.Fn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>br(e).delete(t.targetId)).next(()=>this.$n(e)).next(i=>($(i.targetCount>0),i.targetCount-=1,this.On(e,i)))}removeTargets(e,t,i){let s=0;const r=[];return br(e).X((o,a)=>{const c=ha(a);c.sequenceNumber<=t&&i.get(c.targetId)===null&&(s++,r.push(this.removeTargetData(e,c)))}).next(()=>_.waitFor(r)).next(()=>s)}forEachTarget(e,t){return br(e).X((i,s)=>{const r=ha(s);t(r)})}$n(e){return yv(e).get("targetGlobalKey").next(t=>($(t!==null),t))}On(e,t){return yv(e).put("targetGlobalKey",t)}Fn(e,t){return br(e).put(a0(this.serializer,t))}Bn(e,t){let i=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,i=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,i=!0),i}getTargetCount(e){return this.$n(e).next(t=>t.targetCount)}getTargetData(e,t){const i=Hs(t),s=IDBKeyRange.bound([i,Number.NEGATIVE_INFINITY],[i,Number.POSITIVE_INFINITY]);let r=null;return br(e).X({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const l=ha(a);Pc(t,l.target)&&(r=l,c.done())}).next(()=>r)}addMatchingKeys(e,t,i){const s=[],r=Di(e);return t.forEach(o=>{const a=$t(o.path);s.push(r.put({targetId:i,path:a})),s.push(this.referenceDelegate.addReference(e,i,o))}),_.waitFor(s)}removeMatchingKeys(e,t,i){const s=Di(e);return _.forEach(t,r=>{const o=$t(r.path);return _.waitFor([s.delete([i,o]),this.referenceDelegate.removeReference(e,i,r)])})}removeMatchingKeysForTargetId(e,t){const i=Di(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return i.delete(s)}getMatchingKeysForTargetId(e,t){const i=IDBKeyRange.bound([t],[t+1],!1,!0),s=Di(e);let r=te();return s.X({range:i,Y:!0},(o,a,c)=>{const l=Gn(o[1]),u=new x(l);r=r.add(u)}).next(()=>r)}containsKey(e,t){const i=$t(t.path),s=IDBKeyRange.bound([i],[oT(i)],!1,!0);let r=0;return Di(e).X({index:"documentTargetsIndex",Y:!0,range:s},([o,a],c,l)=>{o!==0&&(r++,l.done())}).next(()=>r>0)}le(e,t){return br(e).get(t).next(i=>i?ha(i):null)}}function br(n){return _t(n,"targets")}function yv(n){return _t(n,"targetGlobal")}function Di(n){return _t(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v([n,e],[t,i]){const s=ee(n,t);return s===0?ee(e,i):s}class VP{constructor(e){this.Ln=e,this.buffer=new Le(_v),this.qn=0}Un(){return++this.qn}Kn(e){const t=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();_v(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class BP{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){C("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){as(t)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await os(t)}await this.Qn(3e5)})}}class qP{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.zn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return _.resolve(Kt.ct);const i=new VP(t);return this.jn.forEachTarget(e,s=>i.Kn(s.sequenceNumber)).next(()=>this.jn.Wn(e,s=>i.Kn(s))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.jn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),_.resolve(mv)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mv):this.Hn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,t){let i,s,r,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(i=h,a=Date.now(),this.removeTargets(e,i,t))).next(h=>(r=h,c=Date.now(),this.removeOrphanedDocuments(e,i))).next(h=>(l=Date.now(),Rf()<=ue.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${r} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-u}ms`),_.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:h})))}}function $P(n,e){return new qP(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e,t){this.db=e,this.garbageCollector=$P(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(i=>t.next(s=>i+s))}Jn(e){let t=0;return this.Wn(e,i=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Wn(e,t){return this.Yn(e,(i,s)=>t(s))}addReference(e,t,i){return yl(e,i)}removeReference(e,t,i){return yl(e,i)}removeTargets(e,t,i){return this.db.getTargetCache().removeTargets(e,t,i)}markPotentiallyOrphaned(e,t){return yl(e,t)}Xn(e,t){return function(i,s){let r=!1;return d0(i).Z(o=>h0(i,o,s).next(a=>(a&&(r=!0),_.resolve(!a)))).next(()=>r)}(e,t)}removeOrphanedDocuments(e,t){const i=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let r=0;return this.Yn(e,(o,a)=>{if(a<=t){const c=this.Xn(e,o).next(l=>{if(!l)return r++,i.getEntry(e,o).next(()=>(i.removeEntry(o,q.min()),Di(e).delete([0,$t(o.path)])))});s.push(c)}}).next(()=>_.waitFor(s)).next(()=>i.apply(e)).next(()=>r)}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,i)}updateLimboDocument(e,t){return yl(e,t)}Yn(e,t){const i=Di(e);let s,r=Kt.ct;return i.X({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:l})=>{o===0?(r!==Kt.ct&&t(new x(Gn(s)),r),r=l,s=c):r=Kt.ct}).next(()=>{r!==Kt.ct&&t(new x(Gn(s)),r)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function yl(n,e){return Di(n).put(function(t,i){return{targetId:0,path:$t(t.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(){this.changes=new cs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?_.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,i){return ys(e).put(i)}removeEntry(e,t,i){return ys(e).delete(function(s,r){const o=s.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],uu(r),o[o.length-1]]}(t,i))}updateMetadata(e,t){return this.getMetadata(e).next(i=>(i.byteSize+=t,this.Zn(e,i)))}getEntry(e,t){let i=Me.newInvalidDocument(t);return ys(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Qo(t))},(s,r)=>{i=this.ts(t,r)}).next(()=>i)}es(e,t){let i={size:0,document:Me.newInvalidDocument(t)};return ys(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Qo(t))},(s,r)=>{i={document:this.ts(t,r),size:du(r)}}).next(()=>i)}getEntries(e,t){let i=Qt();return this.ns(e,t,(s,r)=>{const o=this.ts(s,r);i=i.insert(s,o)}).next(()=>i)}ss(e,t){let i=Qt(),s=new Pe(x.comparator);return this.ns(e,t,(r,o)=>{const a=this.ts(r,o);i=i.insert(r,a),s=s.insert(r,du(o))}).next(()=>({documents:i,rs:s}))}ns(e,t,i){if(t.isEmpty())return _.resolve();let s=new Le(Iv);t.forEach(c=>s=s.add(c));const r=IDBKeyRange.bound(Qo(s.first()),Qo(s.last())),o=s.getIterator();let a=o.getNext();return ys(e).X({index:"documentKeyIndex",range:r},(c,l,u)=>{const h=x.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&Iv(a,h)<0;)i(a,null),a=o.getNext();a&&a.isEqual(h)&&(i(a,l),a=o.hasNext()?o.getNext():null),a?u.G(Qo(a)):u.done()}).next(()=>{for(;a;)i(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,i,s){const r=t.path,o=[r.popLast().toArray(),r.lastSegment(),uu(i.readTime),i.documentKey.path.isEmpty()?"":i.documentKey.path.lastSegment()],a=[r.popLast().toArray(),r.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ys(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let l=Qt();for(const u of c){const h=this.ts(x.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);h.isFoundDocument()&&(Oc(t,h)||s.has(h.key))&&(l=l.insert(h.key,h))}return l})}getAllFromCollectionGroup(e,t,i,s){let r=Qt();const o=wv(t,i),a=wv(t,cn.max());return ys(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,l,u)=>{const h=this.ts(x.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);r=r.insert(h.key,h),r.size===s&&u.done()}).next(()=>r)}newChangeBuffer(e){return new WP(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return vv(e).get("remoteDocumentGlobalKey").next(t=>($(!!t),t))}Zn(e,t){return vv(e).put("remoteDocumentGlobalKey",t)}ts(e,t){if(t){const i=kP(this.serializer,t);if(!(i.isNoDocument()&&i.version.isEqual(q.min())))return i}return Me.newInvalidDocument(e)}}function p0(n){return new zP(n)}class WP extends f0{constructor(e,t){super(),this.os=e,this.trackRemovals=t,this.us=new cs(i=>i.toString(),(i,s)=>i.isEqual(s))}applyChanges(e){const t=[];let i=0,s=new Le((r,o)=>ee(r.canonicalString(),o.canonicalString()));return this.changes.forEach((r,o)=>{const a=this.us.get(r);if(t.push(this.os.removeEntry(e,r,a.readTime)),o.isValidDocument()){const c=ov(this.os.serializer,o);s=s.add(r.path.popLast());const l=du(c);i+=l-a.size,t.push(this.os.addEntry(e,r,c))}else if(i-=a.size,this.trackRemovals){const c=ov(this.os.serializer,o.convertToNoDocument(q.min()));t.push(this.os.addEntry(e,r,c))}}),s.forEach(r=>{t.push(this.os.indexManager.addToCollectionParentIndex(e,r))}),t.push(this.os.updateMetadata(e,i)),_.waitFor(t)}getFromCache(e,t){return this.os.es(e,t).next(i=>(this.us.set(t,{size:i.size,readTime:i.document.readTime}),i.document))}getAllFromCache(e,t){return this.os.ss(e,t).next(({documents:i,rs:s})=>(s.forEach((r,o)=>{this.us.set(r,{size:o,readTime:i.get(r).readTime})}),i))}}function vv(n){return _t(n,"remoteDocumentGlobal")}function ys(n){return _t(n,"remoteDocumentsV14")}function Qo(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function wv(n,e){const t=e.documentKey.path.toArray();return[n,uu(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Iv(n,e){const t=n.path.toArray(),i=e.path.toArray();let s=0;for(let r=0;r<t.length-2&&r<i.length-2;++r)if(s=ee(t[r],i[r]),s)return s;return s=ee(t.length,i.length),s||(s=ee(t[t.length-2],i[i.length-2]),s||ee(t[t.length-1],i[i.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(i!==null&&va(i.mutation,s,Ht.empty(),Ve.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,te()).next(()=>i))}getLocalViewOfDocuments(e,t,i=te()){const s=Kn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(r=>{let o=la();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const i=Kn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,te()))}populateOverlays(e,t,i){const s=[];return i.forEach(r=>{t.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,i,s){let r=Qt();const o=_a(),a=_a();return t.forEach((c,l)=>{const u=i.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof vi)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),va(u.mutation,l,u.mutation.getFieldMask(),Ve.now())):o.set(l.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new GP(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const i=_a();let s=new Pe((o,a)=>o-a),r=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=i.get(c)||Ht.empty();u=a.applyToLocalView(l,u),i.set(c,u);const h=(s.get(a.batchId)||te()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=OT();u.forEach(d=>{if(!r.has(d)){const f=$T(t.get(d),i.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return _.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i){return function(s){return x.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Tg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i):this.getDocumentsMatchingCollectionQuery(e,t,i)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):_.resolve(Kn());let a=-1,c=r;return o.next(l=>_.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?_.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,te())).next(u=>({batchId:a,changes:DT(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new x(t)).next(i=>{let s=la();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i){const s=t.collectionGroup;let r=la();return this.indexManager.getCollectionParents(e,s).next(o=>_.forEach(o,a=>{const c=function(l,u){return new _i(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,i).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,s))).next(r=>{s.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Me.newInvalidDocument(l)))});let o=la();return r.forEach((a,c)=>{const l=s.get(a);l!==void 0&&va(l.mutation,c,Ht.empty(),Ve.now()),Oc(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return _.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var i;return this.cs.set(t.id,{id:(i=t).id,version:i.version,createTime:Xe(i.createTime)}),_.resolve()}getNamedQuery(e,t){return _.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(i){return{name:i.name,query:Pg(i.bundledQuery),readTime:Xe(i.readTime)}}(t)),_.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(){this.overlays=new Pe(x.comparator),this.ls=new Map}getOverlay(e,t){return _.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Kn();return _.forEach(t,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,r)=>{this.we(e,t,r)}),_.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.ls.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(i)),_.resolve()}getOverlaysForCollection(e,t,i){const s=Kn(),r=t.length+1,o=new x(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return _.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new Pe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>i){let u=r.get(l.largestBatchId);u===null&&(u=Kn(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Kn(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return _.resolve(a)}we(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.ls.get(s.largestBatchId).delete(i.key);this.ls.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new kg(t,i));let r=this.ls.get(t);r===void 0&&(r=te(),this.ls.set(t,r)),this.ls.set(t,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(){this.fs=new Le(ut.ds),this.ws=new Le(ut._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const i=new ut(e,t);this.fs=this.fs.add(i),this.ws=this.ws.add(i)}gs(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.ys(new ut(e,t))}ps(e,t){e.forEach(i=>this.removeReference(i,t))}Is(e){const t=new x(new de([])),i=new ut(t,e),s=new ut(t,e+1),r=[];return this.ws.forEachInRange([i,s],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new x(new de([])),i=new ut(t,e),s=new ut(t,e+1);let r=te();return this.ws.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new ut(e,0),i=this.fs.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class ut{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return x.comparator(e.key,t.key)||ee(e.As,t.As)}static _s(e,t){return ee(e.As,t.As)||x.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Le(ut.ds)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Sg(r,t,i,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new ut(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,t){return _.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.bs(i),r=s<0?0:s;return _.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new ut(t,0),s=new ut(t,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([i,s],o=>{const a=this.Ps(o.As);r.push(a)}),_.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Le(ee);return t.forEach(s=>{const r=new ut(s,0),o=new ut(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{i=i.add(a.As)})}),_.resolve(this.Vs(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;x.isDocumentKey(r)||(r=r.child(""));const o=new ut(new x(r),0);let a=new Le(ee);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.As)),!0)},o),_.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach(i=>{const s=this.Ps(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){$(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Rs;return _.forEach(t.mutations,s=>{const r=new ut(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=i})}Cn(e){}containsKey(e,t){const i=new ut(t,0),s=this.Rs.firstAfterOrEqual(i);return _.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e){this.Ds=e,this.docs=new Pe(x.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ds(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return _.resolve(i?i.document.mutableCopy():Me.newInvalidDocument(t))}getEntries(e,t){let i=Qt();return t.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Me.newInvalidDocument(s))}),_.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=Qt();const o=t.path,a=new x(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||_g(lT(u),i)<=0||(s.has(u.key)||Oc(t,u))&&(r=r.insert(u.key,u.mutableCopy()))}return _.resolve(r)}getAllFromCollectionGroup(e,t,i,s){F()}Cs(e,t){return _.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new XP(this)}getSize(e){return _.resolve(this.size)}}class XP extends f0{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this.os.addEntry(e,s)):this.os.removeEntry(i)}),_.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e){this.persistence=e,this.xs=new cs(t=>Hs(t),Pc),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Mg,this.targetCount=0,this.Ms=Zs.kn()}forEachTarget(e,t){return this.xs.forEach((i,s)=>t(s)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Ns&&(this.Ns=t),_.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Zs(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,_.resolve()}updateTargetData(e,t){return this.Fn(t),_.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=t&&i.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),_.waitFor(r).next(()=>s)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,t){const i=this.xs.get(t)||null;return _.resolve(i)}addMatchingKeys(e,t,i){return this.ks.gs(t,i),_.resolve()}removeMatchingKeys(e,t,i){this.ks.ps(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),_.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),_.resolve()}getMatchingKeysForTargetId(e,t){const i=this.ks.Es(t);return _.resolve(i)}containsKey(e,t){return _.resolve(this.ks.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,t){this.$s={},this.overlays={},this.Os=new Kt(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new JP(this),this.indexManager=new LP,this.remoteDocumentCache=function(i){return new YP(i)}(i=>this.referenceDelegate.Ls(i)),this.serializer=new o0(t),this.qs=new KP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new HP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.$s[e.toKey()];return i||(i=new QP(t,this.referenceDelegate),this.$s[e.toKey()]=i),i}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,i){C("MemoryPersistence","Starting transaction:",e);const s=new ZP(this.Os.next());return this.referenceDelegate.Us(),i(s).next(r=>this.referenceDelegate.Ks(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Gs(e,t){return _.or(Object.values(this.$s).map(i=>()=>i.containsKey(e,t)))}}class ZP extends hT{constructor(e){super(),this.currentSequenceNumber=e}}class Ih{constructor(e){this.persistence=e,this.Qs=new Mg,this.js=null}static zs(e){return new Ih(e)}get Ws(){if(this.js)return this.js;throw F()}addReference(e,t,i){return this.Qs.addReference(i,t),this.Ws.delete(i.toString()),_.resolve()}removeReference(e,t,i){return this.Qs.removeReference(i,t),this.Ws.add(i.toString()),_.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),_.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(s=>this.Ws.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(r=>this.Ws.add(r.toString()))}).next(()=>i.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Ws,i=>{const s=x.fromPath(i);return this.Hs(e,s).next(r=>{r||t.removeEntry(s,q.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(i=>{i?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return _.or([()=>_.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e){this.serializer=e}O(e,t,i,s){const r=new ph("createOrUpgrade",t);i<1&&s>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",F_,{unique:!0}),a.createObjectStore("documentMutations")}(e),Ev(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=_.resolve();return i<3&&s>=3&&(i!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Ev(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(r))),i<4&&s>=4&&(i!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",F_,{unique:!0});const u=c.store("mutations"),h=l.map(d=>u.put(d));return _.waitFor(h)})}(e,r))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),i<5&&s>=5&&(o=o.next(()=>this.Ys(r))),i<6&&s>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(r)))),i<7&&s>=7&&(o=o.next(()=>this.Zs(r))),i<8&&s>=8&&(o=o.next(()=>this.ti(e,r))),i<9&&s>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),i<10&&s>=10&&(o=o.next(()=>this.ei(r))),i<11&&s>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),i<12&&s>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:Fx});c.createIndex("collectionPathOverlayIndex",Ux,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",Vx,{unique:!1})})(e)})),i<13&&s>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:Sx});c.createIndex("documentKeyIndex",Ax),c.createIndex("collectionGroupIndex",kx)}(e)).next(()=>this.ni(e,r)).next(()=>e.deleteObjectStore("remoteDocuments"))),i<14&&s>=14&&(o=o.next(()=>this.si(e,r))),i<15&&s>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:Dx}).createIndex("sequenceNumberIndex",Ox,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:Mx}).createIndex("documentKeyIndex",Lx,{unique:!1})}(e))),o}Xs(e){let t=0;return e.store("remoteDocuments").X((i,s)=>{t+=du(s)}).next(()=>{const i={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",i)})}Ys(e){const t=e.store("mutationQueues"),i=e.store("mutations");return t.j().next(s=>_.forEach(s,r=>{const o=IDBKeyRange.bound([r.userId,-1],[r.userId,r.lastAcknowledgedBatchId]);return i.j("userMutationsIndex",o).next(a=>_.forEach(a,c=>{$(c.userId===r.userId);const l=Ss(this.serializer,c);return u0(e,r.userId,l).next(()=>{})}))}))}Zs(e){const t=e.store("targetDocuments"),i=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const r=[];return i.X((o,a)=>{const c=new de(o),l=function(u){return[0,$t(u)]}(c);r.push(t.get(l).next(u=>u?_.resolve():(h=>t.put({targetId:0,path:$t(h),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>_.waitFor(r))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:Px});const i=t.store("collectionParents"),s=new Og,r=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return i.put({collectionId:a,parent:$t(c)})}};return t.store("remoteDocuments").X({Y:!0},(o,a)=>{const c=new de(o);return r(c.popLast())}).next(()=>t.store("documentMutations").X({Y:!0},([o,a,c],l)=>{const u=Gn(a);return r(u.popLast())}))}ei(e){const t=e.store("targets");return t.X((i,s)=>{const r=ha(s),o=a0(this.serializer,r);return t.put(o)})}ni(e,t){const i=t.store("remoteDocuments"),s=[];return i.X((r,o)=>{const a=t.store("remoteDocumentsV14"),c=(l=o,l.document?new x(de.fromString(l.document.name).popFirst(5)):l.noDocument?x.fromSegments(l.noDocument.path):l.unknownDocument?x.fromSegments(l.unknownDocument.path):F()).path.toArray();var l;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(u))}).next(()=>_.waitFor(s))}si(e,t){const i=t.store("mutations"),s=p0(this.serializer),r=new m0(Ih.zs,this.serializer.fe);return i.j().next(o=>{const a=new Map;return o.forEach(c=>{var l;let u=(l=a.get(c.userId))!==null&&l!==void 0?l:te();Ss(this.serializer,c).keys().forEach(h=>u=u.add(h)),a.set(c.userId,u)}),_.forEach(a,(c,l)=>{const u=new ht(l),h=vh.de(this.serializer,u),d=r.getIndexManager(u),f=wh.de(u,this.serializer,d,r.referenceDelegate);return new g0(s,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new xf(t,Kt.ct),c).next()})})}}function Ev(n){n.createObjectStore("targetDocuments",{keyPath:Nx}).createIndex("documentTargetsIndex",xx,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Rx,{unique:!0}),n.createObjectStore("targetGlobal")}const Ad="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Lg{constructor(e,t,i,s,r,o,a,c,l,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=i,this.ii=r,this.window=o,this.document=a,this.ri=l,this.oi=u,this.ui=h,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=d=>Promise.resolve(),!Lg.D())throw new I(v.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new jP(this,s),this.di=t+"main",this.serializer=new o0(c),this.wi=new bn(this.di,this.ui,new eD(this.serializer)),this.Bs=new UP(this.referenceDelegate,this.serializer),this.remoteDocumentCache=p0(this.serializer),this.qs=new RP,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,u===!1&&Qe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new I(v.FAILED_PRECONDITION,Ad);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new Kt(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>_l(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(t=>{t||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(t=>this.isPrimary&&!t?this.Ai(e).next(()=>!1):!!t&&this.vi(e).next(()=>!0))).catch(e=>{if(as(e))return C("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return Yo(e).get("owner").next(t=>_.resolve(this.Ri(t)))}Pi(e){return _l(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const i=_t(t,"clientMetadata");return i.j().next(s=>{const r=this.Si(s,18e5),o=s.filter(a=>r.indexOf(a)===-1);return _.forEach(o,a=>i.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const t of e)this._i.removeItem(this.Di(t.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?_.resolve(!0):Yo(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new I(v.FAILED_PRECONDITION,Ad);return!1}}return!(!this.networkEnabled||!this.inForeground)||_l(e).j().next(i=>this.Si(i,5e3).find(s=>{if(this.clientId!==s.clientId){const r=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(r||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&C("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new xf(e,Kt.ct);return this.Ai(t).next(()=>this.Pi(t))}),this.wi.close(),this.Mi()}Si(e,t){return e.filter(i=>this.Vi(i.updateTimeMs,t)&&!this.Ci(i.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>_l(e).j().next(t=>this.Si(t,18e5).map(i=>i.clientId)))}get started(){return this.Fs}getMutationQueue(e,t){return wh.de(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new FP(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return vh.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,t,i){C("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",r=(o=this.ui)===15?qx:o===14?mT:o===13?gT:o===12?Bx:o===11?pT:void F();var o;let a;return this.wi.runTransaction(e,s,r,c=>(a=new xf(c,this.Os?this.Os.next():Kt.ct),t==="readwrite-primary"?this.Ti(a).next(l=>!!l||this.Ei(a)).next(l=>{if(!l)throw Qe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new I(v.FAILED_PRECONDITION,uT);return i(a)}).next(l=>this.vi(a).next(()=>l)):this.Oi(a).next(()=>i(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Oi(e){return Yo(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)&&!this.Ri(t)&&!(this.oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new I(v.FAILED_PRECONDITION,Ad)})}vi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Yo(e).put("owner",t)}static D(){return bn.D()}Ai(e){const t=Yo(e);return t.get("owner").next(i=>this.Ri(i)?(C("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):_.resolve())}Vi(e,t){const i=Date.now();return!(e<i-t)&&(!(e>i)||(Qe(`Detected an update time that is in the future: ${e} > ${i}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const t=/(?:Version|Mobile)\/1[456]/;SR()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var t;try{const i=((t=this._i)===null||t===void 0?void 0:t.getItem(this.Di(e)))!==null;return C("IndexedDbPersistence",`Client '${e}' ${i?"is":"is not"} zombied in LocalStorage`),i}catch(i){return Qe("IndexedDbPersistence","Failed to get zombied client id.",i),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){Qe("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Yo(n){return _t(n,"owner")}function _l(n){return _t(n,"clientMetadata")}function Fg(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Fi=i,this.Bi=s}static Li(e,t){let i=te(),s=te();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Ug(e,t.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,i,s){return this.Ki(e,t).next(r=>r||this.Gi(e,t,s,i)).next(r=>r||this.Qi(e,t))}Ki(e,t){if(Q_(t))return _.resolve(null);let i=Zt(t);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=lu(t,null,"F"),i=Zt(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=te(...r);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const l=this.ji(t,a);return this.zi(t,l,o,c.readTime)?this.Ki(e,lu(t,null,"F")):this.Wi(e,l,t,c)}))})))}Gi(e,t,i,s){return Q_(t)||s.isEqual(q.min())?this.Qi(e,t):this.Ui.getDocuments(e,i).next(r=>{const o=this.ji(t,r);return this.zi(t,o,i,s)?this.Qi(e,t):(Rf()<=ue.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Uf(t)),this.Wi(e,o,t,cT(s,-1)))})}ji(e,t){let i=new Le(xT(e));return t.forEach((s,r)=>{Oc(e,r)&&(i=i.add(r))}),i}zi(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Qi(e,t){return Rf()<=ue.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",Uf(t)),this.Ui.getDocumentsMatchingQuery(e,t,cn.min())}Wi(e,t,i,s){return this.Ui.getDocumentsMatchingQuery(e,i,s).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e,t,i,s){this.persistence=e,this.Hi=t,this.serializer=s,this.Ji=new Pe(ee),this.Yi=new cs(r=>Hs(r),Pc),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(i)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new g0(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function _0(n,e,t,i){return new tD(n,e,t,i)}async function v0(n,e){const t=D(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,t.tr(e),t.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let c=te();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(i,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function nD(n,e){const t=D(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=t.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=_.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(m=>{const y=c.docVersions.get(f);$(y!==null),m.version.compareTo(y)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(t,i,e,r).next(()=>r.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=te();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(i,s))})}function w0(n){const e=D(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function iD(n,e){const t=D(n),i=e.snapshotVersion;let s=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});s=t.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(t.Bs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>t.Bs.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(rt.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,i)),s=s.insert(h,f),function(m,y,E){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,f,u)&&a.push(t.Bs.updateTargetData(r,f))});let c=Qt(),l=te();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(I0(r,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!i.isEqual(q.min())){const u=t.Bs.getLastRemoteSnapshotVersion(r).next(h=>t.Bs.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return _.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(t.Ji=s,r))}function I0(n,e,t){let i=te(),s=te();return t.forEach(r=>i=i.add(r)),e.getEntries(n,i).next(r=>{let o=Qt();return t.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):C("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:s}})}function sD(n,e){const t=D(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function ro(n,e){const t=D(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.Bs.getTargetData(i,e).next(r=>r?(s=r,_.resolve(s)):t.Bs.allocateTargetId(i).next(o=>(s=new ii(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.Bs.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.Ji.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(i.targetId,i),t.Yi.set(e,i.targetId)),i})}async function oo(n,e,t){const i=D(n),s=i.Ji.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!as(o))throw o;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(s.target)}function fu(n,e,t){const i=D(n);let s=q.min(),r=te();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=D(a),h=u.Yi.get(l);return h!==void 0?_.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(i,o,Zt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>i.Hi.getDocumentsMatchingQuery(o,e,t?s:q.min(),t?r:te())).next(a=>(b0(i,NT(e),a),{documents:a,ir:r})))}function E0(n,e){const t=D(n),i=D(t.Bs),s=t.Ji.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",r=>i.le(r,e).next(o=>o?o.target:null))}function T0(n,e){const t=D(n),i=t.Xi.get(e)||q.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.Zi.getAllFromCollectionGroup(s,e,cT(i,-1),Number.MAX_SAFE_INTEGER)).then(s=>(b0(t,e,s),s))}function b0(n,e,t){let i=n.Xi.get(e)||q.min();t.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),n.Xi.set(e,i)}async function rD(n,e,t,i){const s=D(n);let r=te(),o=Qt();for(const l of t){const u=e.rr(l.metadata.name);l.document&&(r=r.add(u));const h=e.ur(l);h.setReadTime(e.cr(l.metadata.readTime)),o=o.insert(u,h)}const a=s.Zi.newChangeBuffer({trackRemovals:!0}),c=await ro(s,function(l){return Zt(So(de.fromString(`__bundle__/docs/${l}`)))}(i));return s.persistence.runTransaction("Apply bundle documents","readwrite",l=>I0(l,a,o).next(u=>(a.apply(l),u)).next(u=>s.Bs.removeMatchingKeysForTargetId(l,c.targetId).next(()=>s.Bs.addMatchingKeys(l,r,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(l,u.nr,u.sr)).next(()=>u.nr)))}async function oD(n,e,t=te()){const i=await ro(n,Zt(Pg(e.bundledQuery))),s=D(n);return s.persistence.runTransaction("Save named query","readwrite",r=>{const o=Xe(e.readTime);if(i.snapshotVersion.compareTo(o)>=0)return s.qs.saveNamedQuery(r,e);const a=i.withResumeToken(rt.EMPTY_BYTE_STRING,o);return s.Ji=s.Ji.insert(a.targetId,a),s.Bs.updateTargetData(r,a).next(()=>s.Bs.removeMatchingKeysForTargetId(r,i.targetId)).next(()=>s.Bs.addMatchingKeys(r,t,i.targetId)).next(()=>s.qs.saveNamedQuery(r,e))})}function Tv(n,e){return`firestore_clients_${n}_${e}`}function bv(n,e,t){let i=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(i+=`_${e.uid}`),i}function kd(n,e){return`firestore_targets_${n}_${e}`}class pu{constructor(e,t,i,s){this.user=e,this.batchId=t,this.state=i,this.error=s}static ar(e,t,i){const s=JSON.parse(i);let r,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(r=new I(s.error.code,s.error.message))),o?new pu(e,t,s.state,r):(Qe("SharedClientState",`Failed to parse mutation state for ID '${t}': ${i}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class wa{constructor(e,t,i){this.targetId=e,this.state=t,this.error=i}static ar(e,t){const i=JSON.parse(t);let s,r=typeof i=="object"&&["not-current","current","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return r&&i.error&&(r=typeof i.error.message=="string"&&typeof i.error.code=="string",r&&(s=new I(i.error.code,i.error.message))),r?new wa(e,i.state,s):(Qe("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class gu{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ar(e,t){const i=JSON.parse(t);let s=typeof i=="object"&&i.activeTargetIds instanceof Array,r=bg();for(let o=0;s&&o<i.activeTargetIds.length;++o)s=dT(i.activeTargetIds[o]),r=r.add(i.activeTargetIds[o]);return s?new gu(e,r):(Qe("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Vg{constructor(e,t){this.clientId=e,this.onlineState=t}static ar(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Vg(t.clientId,t.onlineState):(Qe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Wf{constructor(){this.activeTargetIds=bg()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Rd{constructor(e,t,i,s,r){this.window=e,this.ii=t,this.persistenceKey=i,this.wr=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new Pe(ee),this.started=!1,this.yr=[];const o=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=r,this.pr=Tv(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new Wf),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const i of e){if(i===this.wr)continue;const s=this.getItem(Tv(this.persistenceKey,i));if(s){const r=gu.ar(i,s);r&&(this.gr=this.gr.insert(r.clientId,r))}}this.Pr();const t=this.storage.getItem(this.vr);if(t){const i=this.br(t);i&&this.Vr(i)}for(const i of this.yr)this.mr(i);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let t=!1;return this.gr.forEach((i,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,t,i){this.Dr(e,t,i),this.Cr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(kd(this.persistenceKey,e));if(i){const s=wa.ar(e,i);s&&(t=s.state)}}return this.Nr.lr(e),this.Pr(),t}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(kd(this.persistenceKey,e))}updateQueryState(e,t,i){this.kr(e,t,i)}handleUserChange(e,t,i){t.forEach(s=>{this.Cr(s)}),this.currentUser=e,i.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return C("SharedClientState","READ",e,t),t}setItem(e,t){C("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){C("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const t=e;if(t.storageArea===this.storage){if(C("SharedClientState","EVENT",t.key,t.newValue),t.key===this.pr)return void Qe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Tr.test(t.key)){if(t.newValue==null){const i=this.Or(t.key);return this.Fr(i,null)}{const i=this.Br(t.key,t.newValue);if(i)return this.Fr(i.clientId,i)}}else if(this.Er.test(t.key)){if(t.newValue!==null){const i=this.Lr(t.key,t.newValue);if(i)return this.qr(i)}}else if(this.Ar.test(t.key)){if(t.newValue!==null){const i=this.Ur(t.key,t.newValue);if(i)return this.Kr(i)}}else if(t.key===this.vr){if(t.newValue!==null){const i=this.br(t.newValue);if(i)return this.Vr(i)}}else if(t.key===this.Ir){const i=function(s){let r=Kt.ct;if(s!=null)try{const o=JSON.parse(s);$(typeof o=="number"),r=o}catch(o){Qe("SharedClientState","Failed to read sequence number from WebStorage",o)}return r}(t.newValue);i!==Kt.ct&&this.sequenceNumberHandler(i)}else if(t.key===this.Rr){const i=this.Gr(t.newValue);await Promise.all(i.map(s=>this.syncEngine.Qr(s)))}}}else this.yr.push(t)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,t,i){const s=new pu(this.currentUser,e,t,i),r=bv(this.persistenceKey,this.currentUser,e);this.setItem(r,s.hr())}Cr(e){const t=bv(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Mr(e){const t={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(t))}kr(e,t,i){const s=kd(this.persistenceKey,e),r=new wa(e,t,i);this.setItem(s,r.hr())}$r(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Tr.exec(e);return t?t[1]:null}Br(e,t){const i=this.Or(e);return gu.ar(i,t)}Lr(e,t){const i=this.Er.exec(e),s=Number(i[1]),r=i[2]!==void 0?i[2]:null;return pu.ar(new ht(r),s,t)}Ur(e,t){const i=this.Ar.exec(e),s=Number(i[1]);return wa.ar(s,t)}br(e){return Vg.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);C("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,t){const i=t?this.gr.insert(e,t):this.gr.remove(e),s=this.Sr(this.gr),r=this.Sr(i),o=[],a=[];return r.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{r.has(c)||a.push(c)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=i})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let t=bg();return e.forEach((i,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class C0{constructor(){this.Hr=new Wf,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,i){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Wf,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vl=null;function Nd(){return vl===null?vl=268435456+Math.round(2147483648*Math.random()):vl++,"0x"+vl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="WebChannelConnection";class uD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,i,s,r){const o=Nd(),a=this.To(e,t);C("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const c={};return this.Eo(c,s,r),this.Ao(e,a,c,i).then(l=>(C("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw xn("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",i),l})}vo(e,t,i,s,r,o){return this.Io(e,t,i,s,r)}Eo(e,t,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+Co,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}To(e,t){const i=cD[e];return`${this.mo}/v1/${t}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,i,s){const r=Nd();return new Promise((o,a)=>{const c=new ox;c.setWithCredentials(!0),c.listenOnce(ix.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Cd.NO_ERROR:const u=c.getResponseJson();C(xt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Cd.TIMEOUT:C(xt,`RPC '${e}' ${r} timed out`),a(new I(v.DEADLINE_EXCEEDED,"Request time out"));break;case Cd.HTTP_ERROR:const h=c.getStatus();if(C(xt,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(y){const E=y.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(E)>=0?E:v.UNKNOWN}(f.status);a(new I(m,f.message))}else a(new I(v.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new I(v.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{C(xt,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(s);C(xt,`RPC '${e}' ${r} sending request:`,s),c.send(t,"POST",l,i,15)})}Ro(e,t,i){const s=Nd(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=tx(),a=nx(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new rx({})),this.Eo(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const u=r.join("");C(xt,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const m=new lD({ro:E=>{f?C(xt,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(d||(C(xt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),C(xt,`RPC '${e}' stream ${s} sending:`,E),h.send(E))},oo:()=>h.close()}),y=(E,V,W)=>{E.listen(V,U=>{try{W(U)}catch(M){setTimeout(()=>{throw M},0)}})};return y(h,dl.EventType.OPEN,()=>{f||C(xt,`RPC '${e}' stream ${s} transport opened.`)}),y(h,dl.EventType.CLOSE,()=>{f||(f=!0,C(xt,`RPC '${e}' stream ${s} transport closed`),m.wo())}),y(h,dl.EventType.ERROR,E=>{f||(f=!0,xn(xt,`RPC '${e}' stream ${s} transport errored:`,E),m.wo(new I(v.UNAVAILABLE,"The operation could not be completed")))}),y(h,dl.EventType.MESSAGE,E=>{var V;if(!f){const W=E.data[0];$(!!W);const U=W,M=U.error||((V=U[0])===null||V===void 0?void 0:V.error);if(M){C(xt,`RPC '${e}' stream ${s} received error:`,M);const ne=M.status;let se=function(Y){const ye=et[Y];if(ye!==void 0)return WT(ye)}(ne),Ie=M.message;se===void 0&&(se=v.INTERNAL,Ie="Unknown error status: "+ne+" with message "+M.message),f=!0,m.wo(new I(se,Ie)),h.close()}else C(xt,`RPC '${e}' stream ${s} received:`,W),m._o(W)}}),y(a,sx.STAT_EVENT,E=>{E.stat===D_.PROXY?C(xt,`RPC '${e}' stream ${s} detected buffering proxy`):E.stat===D_.NOPROXY&&C(xt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{m.fo()},0),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(){return typeof window<"u"?window:null}function Ol(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(n){return new _P(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,t,i=1e3,s=1.5,r=6e4){this.ii=e,this.timerId=t,this.Po=i,this.bo=s,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),s=Math.max(0,t-i);s>0&&C("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,t,i,s,r,o,a,c){this.ii=e,this.$o=i,this.Oo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Bg(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===v.RESOURCE_EXHAUSTED?(Qe(t.toString()),Qe("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Fo===t&&this.Zo(i,s)},i=>{e(()=>{const s=new I(v.UNKNOWN,"Fetching auth token failed: "+i.message);return this.tu(s)})})}Zo(e,t){const i=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{i(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{i(()=>this.tu(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hD extends A0{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=IP(this.serializer,e),i=function(s){if(!("targetChange"in s))return q.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?q.min():r.readTime?Xe(r.readTime):q.min()}(e);return this.listener.nu(t,i)}su(e){const t={};t.database=ec(this.serializer),t.addTarget=function(s,r){let o;const a=r.target;if(o=au(a)?{documents:e0(s,a)}:{query:t0(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=QT(s,r.resumeToken);const c=Vf(s,r.expectedCount);c!==null&&(o.expectedCount=c)}else if(r.snapshotVersion.compareTo(q.min())>0){o.readTime=so(s,r.snapshotVersion.toTimestamp());const c=Vf(s,r.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const i=TP(this.serializer,e);i&&(t.labels=i),this.Wo(t)}iu(e){const t={};t.database=ec(this.serializer),t.removeTarget=e,this.Wo(t)}}class dD extends A0{constructor(e,t,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if($(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=EP(e.writeResults,e.commitTime),i=Xe(e.commitTime);return this.listener.cu(i,t)}return $(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=ec(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>tc(this.serializer,i))};this.Wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD extends class{}{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new I(v.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.Io(e,t,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new I(v.UNKNOWN,s.toString())})}vo(e,t,i,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(e,t,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new I(v.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class pD{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Qe(t),this.mu=!1):C("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{i.enqueueAndForget(async()=>{ls(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=D(a);c.vu.add(4),await Ro(c),c.bu.set("Unknown"),c.vu.delete(4),await Vc(c)}(this))})}),this.bu=new pD(i,s)}}async function Vc(n){if(ls(n))for(const e of n.Ru)await e(!0)}async function Ro(n){for(const e of n.Ru)await e(!1)}function Eh(n,e){const t=D(n);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),jg(t)?$g(t):xo(t).Ko()&&qg(t,e))}function nc(n,e){const t=D(n),i=xo(t);t.Au.delete(e),i.Ko()&&k0(t,e),t.Au.size===0&&(i.Ko()?i.jo():ls(t)&&t.bu.set("Unknown"))}function qg(n,e){if(n.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}xo(n).su(e)}function k0(n,e){n.Vu.qt(e),xo(n).iu(e)}function $g(n){n.Vu=new pP({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),le:e=>n.Au.get(e)||null,ue:()=>n.datastore.serializer.databaseId}),xo(n).start(),n.bu.gu()}function jg(n){return ls(n)&&!xo(n).Uo()&&n.Au.size>0}function ls(n){return D(n).vu.size===0}function R0(n){n.Vu=void 0}async function mD(n){n.Au.forEach((e,t)=>{qg(n,e)})}async function yD(n,e){R0(n),jg(n)?(n.bu.Iu(e),$g(n)):n.bu.set("Unknown")}async function _D(n,e,t){if(n.bu.set("Online"),e instanceof HT&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.Au.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.Au.delete(o),i.Vu.removeTarget(o))}(n,e)}catch(i){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await mu(n,i)}else if(e instanceof Dl?n.Vu.Ht(e):e instanceof KT?n.Vu.ne(e):n.Vu.Xt(e),!t.isEqual(q.min()))try{const i=await w0(n.localStore);t.compareTo(i)>=0&&await function(s,r){const o=s.Vu.ce(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.Au.get(c);l&&s.Au.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,c)=>{const l=s.Au.get(a);if(!l)return;s.Au.set(a,l.withResumeToken(rt.EMPTY_BYTE_STRING,l.snapshotVersion)),k0(s,a);const u=new ii(l.target,a,c,l.sequenceNumber);qg(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(i){C("RemoteStore","Failed to raise snapshot:",i),await mu(n,i)}}async function mu(n,e,t){if(!as(e))throw e;n.vu.add(1),await Ro(n),n.bu.set("Offline"),t||(t=()=>w0(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await t(),n.vu.delete(1),await Vc(n)})}function N0(n,e){return e().catch(t=>mu(n,t,e))}async function No(n){const e=D(n),t=Ji(e);let i=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;vD(e);)try{const s=await sD(e.localStore,i);if(s===null){e.Eu.length===0&&t.jo();break}i=s.batchId,wD(e,s)}catch(s){await mu(e,s)}x0(e)&&P0(e)}function vD(n){return ls(n)&&n.Eu.length<10}function wD(n,e){n.Eu.push(e);const t=Ji(n);t.Ko()&&t.ou&&t.uu(e.mutations)}function x0(n){return ls(n)&&!Ji(n).Uo()&&n.Eu.length>0}function P0(n){Ji(n).start()}async function ID(n){Ji(n).hu()}async function ED(n){const e=Ji(n);for(const t of n.Eu)e.uu(t.mutations)}async function TD(n,e,t){const i=n.Eu.shift(),s=Ag.from(i,e,t);await N0(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await No(n)}async function bD(n,e){e&&Ji(n).ou&&await async function(t,i){if(s=i.code,zT(s)&&s!==v.ABORTED){const r=t.Eu.shift();Ji(t).Qo(),await N0(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,i)),await No(t)}var s}(n,e),x0(n)&&P0(n)}async function Sv(n,e){const t=D(n);t.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const i=ls(t);t.vu.add(3),await Ro(t),i&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await Vc(t)}async function Gf(n,e){const t=D(n);e?(t.vu.delete(2),await Vc(t)):e||(t.vu.add(2),await Ro(t),t.bu.set("Unknown"))}function xo(n){return n.Su||(n.Su=function(e,t,i){const s=D(e);return s.fu(),new hD(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{uo:mD.bind(null,n),ao:yD.bind(null,n),nu:_D.bind(null,n)}),n.Ru.push(async e=>{e?(n.Su.Qo(),jg(n)?$g(n):n.bu.set("Unknown")):(await n.Su.stop(),R0(n))})),n.Su}function Ji(n){return n.Du||(n.Du=function(e,t,i){const s=D(e);return s.fu(),new dD(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{uo:ID.bind(null,n),ao:bD.bind(null,n),au:ED.bind(null,n),cu:TD.bind(null,n)}),n.Ru.push(async e=>{e?(n.Du.Qo(),await No(n)):(await n.Du.stop(),n.Eu.length>0&&(C("RemoteStore",`Stopping write stream with ${n.Eu.length} pending writes`),n.Eu=[]))})),n.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,a=new zg(e,t,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Po(n,e){if(Qe("AsyncQueue",`${e}: ${n}`),as(n))return new I(v.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.comparator=e?(t,i)=>e(t,i)||x.comparator(t.key,i.key):(t,i)=>x.comparator(t.key,i.key),this.keyedMap=la(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new Br(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Br)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Br;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(){this.Cu=new Pe(x.comparator)}track(e){const t=e.doc.key,i=this.Cu.get(t);i?e.type!==0&&i.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&i.type!==1?this.Cu=this.Cu.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Cu=this.Cu.remove(t):e.type===1&&i.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):F():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,i)=>{e.push(i)}),e}}class ao{constructor(e,t,i,s,r,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new ao(e,t,Br.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(){this.Nu=void 0,this.listeners=[]}}class SD{constructor(){this.queries=new cs(e=>RT(e),Dc),this.onlineState="Unknown",this.ku=new Set}}async function Wg(n,e){const t=D(n),i=e.query;let s=!1,r=t.queries.get(i);if(r||(s=!0,r=new CD),s)try{r.Nu=await t.onListen(i)}catch(o){const a=Po(o,`Initialization of query '${Uf(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,r),r.listeners.push(e),e.Mu(t.onlineState),r.Nu&&e.$u(r.Nu)&&Kg(t)}async function Gg(n,e){const t=D(n),i=e.query;let s=!1;const r=t.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return t.queries.delete(i),t.onUnlisten(i)}function AD(n,e){const t=D(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.$u(s)&&(i=!0);o.Nu=s}}i&&Kg(t)}function kD(n,e,t){const i=D(n),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(t);i.queries.delete(e)}function Kg(n){n.ku.forEach(e=>{e.next()})}class Hg{constructor(e,t,i){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=i||{}}$u(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new ao(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const i=t!=="Offline";return(!this.options.Ku||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e,t){this.Gu=e,this.byteLength=t}Qu(){return"metadata"in this.Gu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e){this.serializer=e}rr(e){return Qn(this.serializer,e)}ur(e){return e.metadata.exists?ZT(this.serializer,e.document,!1):Me.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return Xe(e)}}class ND{constructor(e,t,i){this.ju=e,this.localStore=t,this.serializer=i,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=D0(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++t;const i=de.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(i.get(i.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Wu(e){const t=new Map,i=new kv(this.serializer);for(const s of e)if(s.metadata.queries){const r=i.rr(s.metadata.name);for(const o of s.metadata.queries){const a=(t.get(o)||te()).add(r);t.set(o,a)}}return t}async complete(){const e=await rD(this.localStore,new kv(this.serializer),this.documents,this.ju.id),t=this.Wu(this.documents);for(const i of this.queries)await oD(this.localStore,i,t.get(i.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function D0(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e){this.key=e}}class M0{constructor(e){this.key=e}}class L0{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=te(),this.mutatedKeys=te(),this.tc=xT(e),this.ec=new Br(this.tc)}get nc(){return this.Yu}sc(e,t){const i=t?t.ic:new Av,s=t?t.ec:this.ec;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Oc(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?m!==y&&(i.track({type:3,doc:f}),E=!0):this.rc(d,f)||(i.track({type:2,doc:f}),E=!0,(c&&this.tc(f,c)>0||l&&this.tc(f,l)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),E=!0):d&&!f&&(i.track({type:1,doc:d}),E=!0,(c||l)&&(a=!0)),E&&(f?(o=o.add(f),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{ec:o,ic:i,zi:a,mutatedKeys:r}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const r=e.ic.xu();r.sort((l,u)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return f(h)-f(d)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(i);const o=t?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,r.length!==0||c?{snapshot:new ao(this.query,e.ec,s,r,e.mutatedKeys,a===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Av,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=te(),this.ec.forEach(i=>{this.ac(i.key)&&(this.Zu=this.Zu.add(i.key))});const t=[];return e.forEach(i=>{this.Zu.has(i)||t.push(new M0(i))}),this.Zu.forEach(i=>{e.has(i)||t.push(new O0(i))}),t}hc(e){this.Yu=e.ir,this.Zu=te();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return ao.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class xD{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class PD{constructor(e){this.key=e,this.fc=!1}}class DD{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new cs(a=>RT(a),Dc),this._c=new Map,this.mc=new Set,this.gc=new Pe(x.comparator),this.yc=new Map,this.Ic=new Mg,this.Tc={},this.Ec=new Map,this.Ac=Zs.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function OD(n,e){const t=Zg(n);let i,s;const r=t.wc.get(e);if(r)i=r.targetId,t.sharedClientState.addLocalQueryTarget(i),s=r.view.lc();else{const o=await ro(t.localStore,Zt(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await Qg(t,e,i,a==="current",o.resumeToken),t.isPrimaryClient&&Eh(t.remoteStore,o)}return s}async function Qg(n,e,t,i,s){n.Rc=(h,d,f)=>async function(m,y,E,V){let W=y.view.sc(E);W.zi&&(W=await fu(m.localStore,y.query,!1).then(({documents:ne})=>y.view.sc(ne,W)));const U=V&&V.targetChanges.get(y.targetId),M=y.view.applyChanges(W,m.isPrimaryClient,U);return Kf(m,y.targetId,M.cc),M.snapshot}(n,h,d,f);const r=await fu(n.localStore,e,!0),o=new L0(e,r.ir),a=o.sc(r.documents),c=Fc.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),l=o.applyChanges(a,n.isPrimaryClient,c);Kf(n,t,l.cc);const u=new xD(e,t,o);return n.wc.set(e,u),n._c.has(t)?n._c.get(t).push(e):n._c.set(t,[e]),l.snapshot}async function MD(n,e){const t=D(n),i=t.wc.get(e),s=t._c.get(i.targetId);if(s.length>1)return t._c.set(i.targetId,s.filter(r=>!Dc(r,e))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(i.targetId),t.sharedClientState.isActiveQueryTarget(i.targetId)||await oo(t.localStore,i.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(i.targetId),nc(t.remoteStore,i.targetId),co(t,i.targetId)}).catch(os)):(co(t,i.targetId),await oo(t.localStore,i.targetId,!0))}async function LD(n,e,t){const i=em(n);try{const s=await function(r,o){const a=D(r),c=Ve.now(),l=o.reduce((d,f)=>d.add(f.key),te());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Qt(),m=te();return a.Zi.getEntries(d,l).next(y=>{f=y,f.forEach((E,V)=>{V.isValidDocument()||(m=m.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(y=>{u=y;const E=[];for(const V of o){const W=hP(V,u.get(V.key).overlayedDocument);W!=null&&E.push(new vi(V.key,W,wT(W.value.mapValue),Ue.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,E,o)}).next(y=>{h=y;const E=y.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,y.batchId,E)})}).then(()=>({batchId:h.batchId,changes:DT(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let c=r.Tc[r.currentUser.toKey()];c||(c=new Pe(ee)),c=c.insert(o,a),r.Tc[r.currentUser.toKey()]=c}(i,s.batchId,t),await wi(i,s.changes),await No(i.remoteStore)}catch(s){const r=Po(s,"Failed to persist write");t.reject(r)}}async function F0(n,e){const t=D(n);try{const i=await iD(t.localStore,e);e.targetChanges.forEach((s,r)=>{const o=t.yc.get(r);o&&($(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.fc=!0:s.modifiedDocuments.size>0?$(o.fc):s.removedDocuments.size>0&&($(o.fc),o.fc=!1))}),await wi(t,i,e)}catch(i){await os(i)}}function Rv(n,e,t){const i=D(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.wc.forEach((r,o)=>{const a=o.view.Mu(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=D(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&Kg(a)}(i.eventManager,e),s.length&&i.dc.nu(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function FD(n,e,t){const i=D(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.yc.get(e),r=s&&s.key;if(r){let o=new Pe(x.comparator);o=o.insert(r,Me.newNoDocument(r,q.min()));const a=te().add(r),c=new Lc(q.min(),new Map,new Pe(ee),o,a);await F0(i,c),i.gc=i.gc.remove(r),i.yc.delete(e),Jg(i)}else await oo(i.localStore,e,!1).then(()=>co(i,e,t)).catch(os)}async function UD(n,e){const t=D(n),i=e.batch.batchId;try{const s=await nD(t.localStore,e);Xg(t,i,null),Yg(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await wi(t,s)}catch(s){await os(s)}}async function VD(n,e,t){const i=D(n);try{const s=await function(r,o){const a=D(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>($(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(i.localStore,e);Xg(i,e,t),Yg(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await wi(i,s)}catch(s){await os(s)}}async function BD(n,e){const t=D(n);ls(t.remoteStore)||C("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const i=await function(r){const o=D(r);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(i===-1)return void e.resolve();const s=t.Ec.get(i)||[];s.push(e),t.Ec.set(i,s)}catch(i){const s=Po(i,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function Yg(n,e){(n.Ec.get(e)||[]).forEach(t=>{t.resolve()}),n.Ec.delete(e)}function Xg(n,e,t){const i=D(n);let s=i.Tc[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),i.Tc[i.currentUser.toKey()]=s}}function co(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n._c.get(e))n.wc.delete(i),t&&n.dc.Pc(i,t);n._c.delete(e),n.isPrimaryClient&&n.Ic.Is(e).forEach(i=>{n.Ic.containsKey(i)||U0(n,i)})}function U0(n,e){n.mc.delete(e.path.canonicalString());const t=n.gc.get(e);t!==null&&(nc(n.remoteStore,t),n.gc=n.gc.remove(e),n.yc.delete(t),Jg(n))}function Kf(n,e,t){for(const i of t)i instanceof O0?(n.Ic.addReference(i.key,e),qD(n,i)):i instanceof M0?(C("SyncEngine","Document no longer in limbo: "+i.key),n.Ic.removeReference(i.key,e),n.Ic.containsKey(i.key)||U0(n,i.key)):F()}function qD(n,e){const t=e.key,i=t.path.canonicalString();n.gc.get(t)||n.mc.has(i)||(C("SyncEngine","New document in limbo: "+t),n.mc.add(i),Jg(n))}function Jg(n){for(;n.mc.size>0&&n.gc.size<n.maxConcurrentLimboResolutions;){const e=n.mc.values().next().value;n.mc.delete(e);const t=new x(de.fromString(e)),i=n.Ac.next();n.yc.set(i,new PD(t)),n.gc=n.gc.insert(t,i),Eh(n.remoteStore,new ii(Zt(So(t.path)),i,"TargetPurposeLimboResolution",Kt.ct))}}async function wi(n,e,t){const i=D(n),s=[],r=[],o=[];i.wc.isEmpty()||(i.wc.forEach((a,c)=>{o.push(i.Rc(c,e,t).then(l=>{if((l||t)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Ug.Li(c.targetId,l);r.push(u)}}))}),await Promise.all(o),i.dc.nu(s),await async function(a,c){const l=D(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>_.forEach(c,h=>_.forEach(h.Fi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>_.forEach(h.Bi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!as(u))throw u;C("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ji.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);l.Ji=l.Ji.insert(h,m)}}}(i.localStore,r))}async function $D(n,e){const t=D(n);if(!t.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const i=await v0(t.localStore,e);t.currentUser=e,function(s,r){s.Ec.forEach(o=>{o.forEach(a=>{a.reject(new I(v.CANCELLED,r))})}),s.Ec.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await wi(t,i.er)}}function jD(n,e){const t=D(n),i=t.yc.get(e);if(i&&i.fc)return te().add(i.key);{let s=te();const r=t._c.get(e);if(!r)return s;for(const o of r){const a=t.wc.get(o);s=s.unionWith(a.view.nc)}return s}}async function zD(n,e){const t=D(n),i=await fu(t.localStore,e.query,!0),s=e.view.hc(i);return t.isPrimaryClient&&Kf(t,e.targetId,s.cc),s}async function WD(n,e){const t=D(n);return T0(t.localStore,e).then(i=>wi(t,i))}async function GD(n,e,t,i){const s=D(n),r=await function(o,a){const c=D(o),l=D(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",u=>l.Sn(u,a).next(h=>h?c.localDocuments.getDocuments(u,h):_.resolve(null)))}(s.localStore,e);r!==null?(t==="pending"?await No(s.remoteStore):t==="acknowledged"||t==="rejected"?(Xg(s,e,i||null),Yg(s,e),function(o,a){D(D(o).mutationQueue).Cn(a)}(s.localStore,e)):F(),await wi(s,r)):C("SyncEngine","Cannot apply mutation batch with id: "+e)}async function KD(n,e){const t=D(n);if(Zg(t),em(t),e===!0&&t.vc!==!0){const i=t.sharedClientState.getAllActiveQueryTargets(),s=await Nv(t,i.toArray());t.vc=!0,await Gf(t.remoteStore,!0);for(const r of s)Eh(t.remoteStore,r)}else if(e===!1&&t.vc!==!1){const i=[];let s=Promise.resolve();t._c.forEach((r,o)=>{t.sharedClientState.isLocalQueryTarget(o)?i.push(o):s=s.then(()=>(co(t,o),oo(t.localStore,o,!0))),nc(t.remoteStore,o)}),await s,await Nv(t,i),function(r){const o=D(r);o.yc.forEach((a,c)=>{nc(o.remoteStore,c)}),o.Ic.Ts(),o.yc=new Map,o.gc=new Pe(x.comparator)}(t),t.vc=!1,await Gf(t.remoteStore,!1)}}async function Nv(n,e,t){const i=D(n),s=[],r=[];for(const o of e){let a;const c=i._c.get(o);if(c&&c.length!==0){a=await ro(i.localStore,Zt(c[0]));for(const l of c){const u=i.wc.get(l),h=await zD(i,u);h.snapshot&&r.push(h.snapshot)}}else{const l=await E0(i.localStore,o);a=await ro(i.localStore,l),await Qg(i,V0(l),o,!1,a.resumeToken)}s.push(a)}return i.dc.nu(r),s}function V0(n){return kT(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function HD(n){const e=D(n);return D(D(e.localStore).persistence).$i()}async function QD(n,e,t,i){const s=D(n);if(s.vc)return void C("SyncEngine","Ignoring unexpected query state notification.");const r=s._c.get(e);if(r&&r.length>0)switch(t){case"current":case"not-current":{const o=await T0(s.localStore,NT(r[0])),a=Lc.createSynthesizedRemoteEventForCurrentChange(e,t==="current",rt.EMPTY_BYTE_STRING);await wi(s,o,a);break}case"rejected":await oo(s.localStore,e,!0),co(s,e,i);break;default:F()}}async function YD(n,e,t){const i=Zg(n);if(i.vc){for(const s of e){if(i._c.has(s)){C("SyncEngine","Adding an already active target "+s);continue}const r=await E0(i.localStore,s),o=await ro(i.localStore,r);await Qg(i,V0(r),o.targetId,!1,o.resumeToken),Eh(i.remoteStore,o)}for(const s of t)i._c.has(s)&&await oo(i.localStore,s,!1).then(()=>{nc(i.remoteStore,s),co(i,s)}).catch(os)}}function Zg(n){const e=D(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=F0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FD.bind(null,e),e.dc.nu=AD.bind(null,e.eventManager),e.dc.Pc=kD.bind(null,e.eventManager),e}function em(n){const e=D(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VD.bind(null,e),e}function XD(n,e,t){const i=D(n);(async function(s,r,o){try{const a=await r.getMetadata();if(await function(h,d){const f=D(h),m=Xe(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",y=>f.qs.getBundleMetadata(y,d.id)).then(y=>!!y&&y.createTime.compareTo(m)>=0)}(s.localStore,a))return await r.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(D0(a));const c=new ND(a,s.localStore,r.serializer);let l=await r.bc();for(;l;){const h=await c.zu(l);h&&o._updateProgress(h),l=await r.bc()}const u=await c.complete();return await wi(s,u.Ju,void 0),await function(h,d){const f=D(h);return f.persistence.runTransaction("Save bundle","readwrite",m=>f.qs.saveBundleMetadata(m,d))}(s.localStore,a),o._completeWith(u.progress),Promise.resolve(u.Hu)}catch(a){return xn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(i,e,t).then(s=>{i.sharedClientState.notifyBundleLoaded(s)})}class Hf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Uc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return _0(this.persistence,new y0,e.initialUser,this.serializer)}createPersistence(e){return new m0(Ih.zs,this.serializer)}createSharedClientState(e){return new C0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class B0 extends Hf{constructor(e,t,i){super(),this.Vc=e,this.cacheSizeBytes=t,this.forceOwnership=i,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await em(this.Vc.syncEngine),await No(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return _0(this.persistence,new y0,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const i=this.persistence.referenceDelegate.garbageCollector;return new BP(i,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const i=new Tx(t,this.persistence);return new Ex(e.asyncQueue,i)}createPersistence(e){const t=Fg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),i=this.cacheSizeBytes!==void 0?Wt.withCacheSize(this.cacheSizeBytes):Wt.DEFAULT;return new Lg(this.synchronizeTabs,t,e.clientId,i,e.asyncQueue,S0(),Ol(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new C0}}class JD extends B0{constructor(e,t){super(e,t,!1),this.Vc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Vc.syncEngine;this.sharedClientState instanceof Rd&&(this.sharedClientState.syncEngine={jr:GD.bind(null,t),zr:QD.bind(null,t),Wr:YD.bind(null,t),$i:HD.bind(null,t),Qr:WD.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ii(async i=>{await KD(this.Vc.syncEngine,i),this.gcScheduler&&(i&&!this.gcScheduler.started?this.gcScheduler.start():i||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(i&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():i||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=S0();if(!Rd.D(t))throw new I(v.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const i=Fg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Rd(t,e.asyncQueue,i,e.clientId,e.initialUser)}}class tm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Rv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=$D.bind(null,this.syncEngine),await Gf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new SD}createDatastore(e){const t=Uc(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new uD(s));var s;return function(r,o,a,c){return new fD(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return t=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>Rv(this.syncEngine,a,0),o=Cv.D()?new Cv:new aD,new gD(t,i,s,r,o);var t,i,s,r,o}createSyncEngine(e,t){return function(i,s,r,o,a,c,l){const u=new DD(i,s,r,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=D(e);C("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await Ro(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const i={value:n.slice(t,t+e),done:!1};return t+=e,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Qe("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,t){this.Cc=e,this.serializer=t,this.metadata=new gt,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(i=>{i&&i.Qu()?this.metadata.resolve(i.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(i==null?void 0:i.Gu)}`))},i=>this.metadata.reject(i))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const t=this.xc.decode(e),i=Number(t);isNaN(i)&&this.Mc(`length string (${t}) is not valid number`);const s=await this.$c(i);return new RD(JSON.parse(s),e.length+i)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const t=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new I(v.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(i,s){const r=D(i),o=ec(r.serializer)+"/documents",a={documents:s.map(h=>Za(r.serializer,h))},c=await r.vo("BatchGetDocuments",o,a,s.length),l=new Map;c.forEach(h=>{const d=wP(r.serializer,h);l.set(d.key.toString(),d)});const u=[];return s.forEach(h=>{const d=l.get(h.toString());$(!!d),u.push(d)}),u}(this.datastore,e);return t.forEach(i=>this.recordVersion(i)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastWriteError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new ko(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,i)=>{const s=x.fromPath(i);this.mutations.push(new Cg(s,this.precondition(s)))}),await async function(t,i){const s=D(t),r=ec(s.serializer)+"/documents",o={writes:i.map(a=>tc(s.serializer,a))};await s.Io("Commit",r,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw F();t=q.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!t.isEqual(i))throw new I(v.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(q.min())?Ue.exists(!1):Ue.updateTime(t):Ue.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(q.min()))throw new I(v.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ue.updateTime(t)}return Ue.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e,t,i,s,r){this.asyncQueue=e,this.datastore=t,this.options=i,this.updateFunction=s,this.deferred=r,this.Bc=i.maxAttempts,this.qo=new Bg(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new eO(this.datastore),t=this.qc(e);t&&t.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(s=>{this.Uc(s)}))}).catch(i=>{this.Uc(i)})})}qc(e){try{const t=this.updateFunction(e);return!xc(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!zT(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e,t,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=rT.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{C("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(C("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Po(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Ml(n,e){n.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await v0(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Qf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await nm(n);C("FirestoreClient","Initializing OnlineComponentProvider");const i=await n.getConfiguration();await e.initialize(t,i),n.setCredentialChangeListener(s=>Sv(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>Sv(e.remoteStore,r)),n._onlineComponents=e}function q0(n){return n.name==="FirebaseError"?n.code===v.FAILED_PRECONDITION||n.code===v.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function nm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ml(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!q0(t))throw t;xn("Error using user provided cache. Falling back to memory cache: "+t),await Ml(n,new Hf)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await Ml(n,new Hf);return n._offlineComponents}async function bh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await Qf(n,n._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await Qf(n,new tm))),n._onlineComponents}function $0(n){return nm(n).then(e=>e.persistence)}function im(n){return nm(n).then(e=>e.localStore)}function j0(n){return bh(n).then(e=>e.remoteStore)}function sm(n){return bh(n).then(e=>e.syncEngine)}function iO(n){return bh(n).then(e=>e.datastore)}async function lo(n){const e=await bh(n),t=e.eventManager;return t.onListen=OD.bind(null,e.syncEngine),t.onUnlisten=MD.bind(null,e.syncEngine),t}function sO(n){return n.asyncQueue.enqueue(async()=>{const e=await $0(n),t=await j0(n);return e.setNetworkEnabled(!0),function(i){const s=D(i);return s.vu.delete(0),Vc(s)}(t)})}function rO(n){return n.asyncQueue.enqueue(async()=>{const e=await $0(n),t=await j0(n);return e.setNetworkEnabled(!1),async function(i){const s=D(i);s.vu.add(0),await Ro(s),s.bu.set("Offline")}(t)})}function oO(n,e){const t=new gt;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,r){try{const o=await function(a,c){const l=D(a);return l.persistence.runTransaction("read document","readonly",u=>l.localDocuments.getDocument(u,c))}(i,s);o.isFoundDocument()?r.resolve(o):o.isNoDocument()?r.resolve(null):r.reject(new I(v.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Po(o,`Failed to get document '${s} from cache`);r.reject(a)}}(await im(n),e,t)),t.promise}function z0(n,e,t={}){const i=new gt;return n.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,c){const l=new Th({next:h=>{r.enqueueAndForget(()=>Gg(s,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new I(v.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new I(v.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Hg(So(o.path),l,{includeMetadataChanges:!0,Ku:!0});return Wg(s,u)}(await lo(n),n.asyncQueue,e,t,i)),i.promise}function aO(n,e){const t=new gt;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,r){try{const o=await fu(i,s,!0),a=new L0(s,o.ir),c=a.sc(o.documents),l=a.applyChanges(c,!1);r.resolve(l.snapshot)}catch(o){const a=Po(o,`Failed to execute query '${s} against cache`);r.reject(a)}}(await im(n),e,t)),t.promise}function W0(n,e,t={}){const i=new gt;return n.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,c){const l=new Th({next:h=>{r.enqueueAndForget(()=>Gg(s,u)),h.fromCache&&a.source==="server"?c.reject(new I(v.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Hg(o,l,{includeMetadataChanges:!0,Ku:!0});return Wg(s,u)}(await lo(n),n.asyncQueue,e,t,i)),i.promise}function cO(n,e){const t=new Th(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){D(i).ku.add(s),s.next()}(await lo(n),t)),()=>{t.Dc(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){D(i).ku.delete(s)}(await lo(n),t))}}function lO(n,e,t,i){const s=function(r,o){let a;return a=typeof r=="string"?GT().encode(r):r,function(c,l){return new ZD(c,l)}(function(c,l){if(c instanceof Uint8Array)return xv(c,l);if(c instanceof ArrayBuffer)return xv(new Uint8Array(c),l);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,Uc(e));n.asyncQueue.enqueueAndForget(async()=>{XD(await sm(n),s,i)})}function uO(n,e){return n.asyncQueue.enqueue(async()=>function(t,i){const s=D(t);return s.persistence.runTransaction("Get named query","readonly",r=>s.qs.getNamedQuery(r,i))}(await im(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(n,e,t){if(!t)throw new I(v.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function K0(n,e,t,i){if(e===!0&&i===!0)throw new I(v.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Dv(n){if(!x.isDocumentKey(n))throw new I(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ov(n){if(x.isDocumentKey(n))throw new I(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ch(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F()}function pe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new I(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ch(n);throw new I(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function H0(n,e){if(e<=0)throw new I(v.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new I(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new I(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}K0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=G0((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new I(v.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new I(v.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new I(v.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,t.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,i}}class Bc{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new I(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mv(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new ux;switch(t.type){case"firstParty":return new px(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new I(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Pv.get(e);t&&(C("ComponentProvider","Removing Datastore"),Pv.delete(e),t.terminate())}(this),Promise.resolve()}}function hO(n,e,t,i={}){var s;const r=(n=pe(n,Bc))._getSettings(),o=`${e}:${t}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&xn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,c;if(typeof i.mockUserToken=="string")a=i.mockUserToken,c=ht.MOCK_USER;else{a=VI(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new I(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ht(l)}n._authCredentials=new hx(new sT(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fe(this.firestore,e,this._key)}}class At{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new At(this.firestore,e,this._query)}}class Yn extends At{constructor(e,t,i){super(e,t,So(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new x(e))}withConverter(e){return new Yn(this.firestore,e,this._path)}}function Q0(n,e,...t){if(n=z(n),rm("collection","path",e),n instanceof Bc){const i=de.fromString(e,...t);return Ov(i),new Yn(n,null,i)}{if(!(n instanceof Fe||n instanceof Yn))throw new I(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(de.fromString(e,...t));return Ov(i),new Yn(n.firestore,null,i)}}function dO(n,e){if(n=pe(n,Bc),rm("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new I(v.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new At(n,null,function(t){return new _i(de.emptyPath(),t)}(e))}function yu(n,e,...t){if(n=z(n),arguments.length===1&&(e=rT.A()),rm("doc","path",e),n instanceof Bc){const i=de.fromString(e,...t);return Dv(i),new Fe(n,null,new x(i))}{if(!(n instanceof Fe||n instanceof Yn))throw new I(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(de.fromString(e,...t));return Dv(i),new Fe(n.firestore,n instanceof Yn?n.converter:null,new x(i))}}function Y0(n,e){return n=z(n),e=z(e),(n instanceof Fe||n instanceof Yn)&&(e instanceof Fe||e instanceof Yn)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function X0(n,e){return n=z(n),e=z(e),n instanceof At&&e instanceof At&&n.firestore===e.firestore&&Dc(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Bg(this,"async_queue_retry"),this.Xc=()=>{const t=Ol();t&&C("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=Ol();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Ol();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new gt;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!as(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(i=>{this.Wc=i,this.Hc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Qe("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Hc=!1,i))));return this.Gc=t,t}enqueueAfterDelay(e,t,i){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const s=zg.createAndSchedule(this,e,t,i,r=>this.na(r));return this.zc.push(s),s}Zc(){this.Wc&&F()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function Yf(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of t)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class pO{constructor(){this._progressObserver={},this._taskCompletionResolver=new gt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,i){this._progressObserver={next:e,error:t,complete:i}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO=-1;class Ke extends Bc{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new fO,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||J0(this),this._firestoreClient.terminate()}}function vt(n){return n._firestoreClient||J0(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function J0(n){var e,t,i;const s=n._freezeSettings(),r=function(o,a,c,l){return new zx(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,G0(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new nO(n._authCredentials,n._appCheckCredentials,n._queue,r),!((t=s.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}function mO(n,e){eb(n=pe(n,Ke));const t=vt(n);if(t._uninitializedComponentsProvider)throw new I(v.FAILED_PRECONDITION,"SDK cache is already specified.");xn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const i=n._freezeSettings(),s=new tm;return Z0(t,s,new B0(s,i.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function yO(n){eb(n=pe(n,Ke));const e=vt(n);if(e._uninitializedComponentsProvider)throw new I(v.FAILED_PRECONDITION,"SDK cache is already specified.");xn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),i=new tm;return Z0(e,i,new JD(i,t.cacheSizeBytes))}function Z0(n,e,t){const i=new gt;return n.asyncQueue.enqueue(async()=>{try{await Ml(n,t),await Qf(n,e),i.resolve()}catch(s){const r=s;if(!q0(r))throw r;xn("Error enabling indexeddb cache. Falling back to memory cache: "+r),i.reject(r)}}).then(()=>i.promise)}function _O(n){if(n._initialized&&!n._terminated)throw new I(v.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new gt;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!bn.D())return Promise.resolve();const i=t+"main";await bn.delete(i)}(Fg(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function vO(n){return function(e){const t=new gt;return e.asyncQueue.enqueueAndForget(async()=>BD(await sm(e),t)),t.promise}(vt(n=pe(n,Ke)))}function wO(n){return sO(vt(n=pe(n,Ke)))}function IO(n){return rO(vt(n=pe(n,Ke)))}function EO(n,e){const t=vt(n=pe(n,Ke)),i=new pO;return lO(t,n._databaseId,e,i),i}function TO(n,e){return uO(vt(n=pe(n,Ke)),e).then(t=>t?new At(n,null,t.query):null)}function eb(n){if(n._initialized||n._terminated)throw new I(v.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jn(rt.fromBase64String(e))}catch(t){throw new I(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Jn(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new I(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new I(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new I(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO=/^__.*__$/;class CO{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new vi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ao(e,this.data,t,this.fieldTransforms)}}class tb{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new vi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function nb(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class Ah{constructor(e,t,i,s,r,o){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Ah(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.aa({path:i,la:!1});return s.fa(e),s}da(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.aa({path:i,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return _u(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(nb(this.ca)&&bO.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class SO{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Uc(e)}ya(e,t,i,s=!1){return new Ah({ca:e,methodName:t,ga:i,path:Ye.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fr(n){const e=n._freezeSettings(),t=Uc(n._databaseId);return new SO(n._databaseId,!!e.ignoreUndefinedProperties,t)}function kh(n,e,t,i,s,r={}){const o=n.ya(r.merge||r.mergeFields?2:0,e,t,s);lm("Data must be an object, but it was:",o,i);const a=rb(i,o);let c,l;if(r.merge)c=new Ht(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Xf(e,h,t);if(!o.contains(d))throw new I(v.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ab(u,d)||u.push(d)}c=new Ht(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new CO(new bt(a),c,l)}class qc extends dr{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qc}}function ib(n,e,t){return new Ah({ca:3,ga:e.settings.ga,methodName:n._methodName,la:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class om extends dr{_toFieldTransform(e){return new Mc(e.path,new no)}isEqual(e){return e instanceof om}}class AO extends dr{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=ib(this,e,!0),i=this.pa.map(r=>pr(r,t)),s=new Qs(i);return new Mc(e.path,s)}isEqual(e){return this===e}}class kO extends dr{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=ib(this,e,!0),i=this.pa.map(r=>pr(r,t)),s=new Ys(i);return new Mc(e.path,s)}isEqual(e){return this===e}}class RO extends dr{constructor(e,t){super(e),this.Ia=t}_toFieldTransform(e){const t=new io(e.serializer,FT(e.serializer,this.Ia));return new Mc(e.path,t)}isEqual(e){return this===e}}function am(n,e,t,i){const s=n.ya(1,e,t);lm("Data must be an object, but it was:",s,i);const r=[],o=bt.empty();hr(i,(c,l)=>{const u=um(e,c,t);l=z(l);const h=s.da(u);if(l instanceof qc)r.push(u);else{const d=pr(l,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Ht(r);return new tb(o,a,s.fieldTransforms)}function cm(n,e,t,i,s,r){const o=n.ya(1,e,t),a=[Xf(e,i,t)],c=[s];if(r.length%2!=0)throw new I(v.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Xf(e,r[d])),c.push(r[d+1]);const l=[],u=bt.empty();for(let d=a.length-1;d>=0;--d)if(!ab(l,a[d])){const f=a[d];let m=c[d];m=z(m);const y=o.da(f);if(m instanceof qc)l.push(f);else{const E=pr(m,y);E!=null&&(l.push(f),u.set(f,E))}}const h=new Ht(l);return new tb(u,h,o.fieldTransforms)}function sb(n,e,t,i=!1){return pr(t,n.ya(i?4:3,e))}function pr(n,e){if(ob(n=z(n)))return lm("Unsupported field value:",e,n),rb(n,e);if(n instanceof dr)return function(t,i){if(!nb(i.ca))throw i._a(`${t._methodName}() can only be used with update() and set()`);if(!i.path)throw i._a(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(t,i){const s=[];let r=0;for(const o of t){let a=pr(o,i.wa(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(n,e)}return function(t,i){if((t=z(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return FT(i.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=Ve.fromDate(t);return{timestampValue:so(i.serializer,s)}}if(t instanceof Ve){const s=new Ve(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:so(i.serializer,s)}}if(t instanceof Sh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Jn)return{bytesValue:QT(i.serializer,t._byteString)};if(t instanceof Fe){const s=i.databaseId,r=t.firestore._databaseId;if(!r.isEqual(s))throw i._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:xg(t.firestore._databaseId||i.databaseId,t._key.path)}}throw i._a(`Unsupported field value: ${Ch(t)}`)}(n,e)}function rb(n,e){const t={};return yT(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hr(n,(i,s)=>{const r=pr(s,e.ha(i));r!=null&&(t[i]=r)}),{mapValue:{fields:t}}}function ob(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ve||n instanceof Sh||n instanceof Jn||n instanceof Fe||n instanceof dr)}function lm(n,e,t){if(!ob(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const i=Ch(t);throw i==="an object"?e._a(n+" a custom object"):e._a(n+" "+i)}}function Xf(n,e,t){if((e=z(e))instanceof Zi)return e._internalPath;if(typeof e=="string")return um(n,e);throw _u("Field path arguments must be of type string or ",n,!1,void 0,t)}const NO=new RegExp("[~\\*/\\[\\]]");function um(n,e,t){if(e.search(NO)>=0)throw _u(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Zi(...e.split("."))._internalPath}catch{throw _u(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function _u(n,e,t,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new I(v.INVALID_ARGUMENT,a+n+c)}function ab(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Rh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class xO extends ic{data(){return super.data()}}function Rh(n,e){return typeof e=="string"?um(n,e):e instanceof Zi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new I(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hm{}class $c extends hm{}function Ni(n,e,...t){let i=[];e instanceof hm&&i.push(e),i=i.concat(t),function(s){const r=s.filter(a=>a instanceof dm).length,o=s.filter(a=>a instanceof Nh).length;if(r>1||r>0&&o>0)throw new I(v.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)n=s._apply(n);return n}class Nh extends $c{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Nh(e,t,i)}_apply(e){const t=this._parse(e);return ub(e._query,t),new At(e.firestore,e.converter,Ff(e._query,t))}_parse(e){const t=fr(e.firestore);return function(s,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new I(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Fv(u,l);const d=[];for(const f of u)d.push(Lv(a,s,f));h={arrayValue:{values:d}}}else h=Lv(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Fv(u,l),h=sb(o,r,u,l==="in"||l==="not-in");return le.create(c,l,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function PO(n,e,t){const i=e,s=Rh("where",n);return Nh._create(s,i,t)}class dm extends hm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new dm(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:ve.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let r=i;const o=s.getFlattenedFilters();for(const a of o)ub(r,a),r=Ff(r,a)}(e._query,t),new At(e.firestore,e.converter,Ff(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fm extends $c{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new fm(e,t)}_apply(e){const t=function(i,s,r){if(i.startAt!==null)throw new I(v.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new I(v.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Vr(s,r);return function(a,c){if(Eg(a)===null){const l=mh(a);l!==null&&hb(a,l,c.field)}}(i,o),o}(e._query,this._field,this._direction);return new At(e.firestore,e.converter,function(i,s){const r=i.explicitOrderBy.concat([s]);return new _i(i.path,i.collectionGroup,r,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function DO(n,e="asc"){const t=e,i=Rh("orderBy",n);return fm._create(i,t)}class xh extends $c{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new xh(e,t,i)}_apply(e){return new At(e.firestore,e.converter,lu(e._query,this._limit,this._limitType))}}function OO(n){return H0("limit",n),xh._create("limit",n,"F")}function MO(n){return H0("limitToLast",n),xh._create("limitToLast",n,"L")}class Ph extends $c{constructor(e,t,i){super(),this.type=e,this._docOrFields=t,this._inclusive=i}static _create(e,t,i){return new Ph(e,t,i)}_apply(e){const t=lb(e,this.type,this._docOrFields,this._inclusive);return new At(e.firestore,e.converter,function(i,s){return new _i(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function LO(...n){return Ph._create("startAt",n,!0)}function FO(...n){return Ph._create("startAfter",n,!1)}class Dh extends $c{constructor(e,t,i){super(),this.type=e,this._docOrFields=t,this._inclusive=i}static _create(e,t,i){return new Dh(e,t,i)}_apply(e){const t=lb(e,this.type,this._docOrFields,this._inclusive);return new At(e.firestore,e.converter,function(i,s){return new _i(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function UO(...n){return Dh._create("endBefore",n,!1)}function VO(...n){return Dh._create("endAt",n,!0)}function lb(n,e,t,i){if(t[0]=z(t[0]),t[0]instanceof ic)return function(s,r,o,a,c){if(!a)throw new I(v.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of Bs(s))if(u.field.isKeyField())l.push(Ks(r,a.key));else{const h=a.data.field(u.field);if(gh(h))throw new I(v.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new I(v.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new Xi(l,c)}(n._query,n.firestore._databaseId,e,t[0]._document,i);{const s=fr(n.firestore);return function(r,o,a,c,l,u){const h=r.explicitOrderBy;if(l.length>h.length)throw new I(v.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const m=l[f];if(h[f].field.isKeyField()){if(typeof m!="string")throw new I(v.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof m}`);if(!Tg(r)&&m.indexOf("/")!==-1)throw new I(v.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${m}' contains a slash.`);const y=r.path.child(de.fromString(m));if(!x.isDocumentKey(y))throw new I(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${y}' is not because it contains an odd number of segments.`);const E=new x(y);d.push(Ks(o,E))}else{const y=sb(a,c,m);d.push(y)}}return new Xi(d,u)}(n._query,n.firestore._databaseId,s,e,t,i)}}function Lv(n,e,t){if(typeof(t=z(t))=="string"){if(t==="")throw new I(v.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tg(e)&&t.indexOf("/")!==-1)throw new I(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(de.fromString(t));if(!x.isDocumentKey(i))throw new I(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Ks(n,new x(i))}if(t instanceof Fe)return Ks(n,t._key);throw new I(v.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ch(t)}.`)}function Fv(n,e){if(!Array.isArray(n)||n.length===0)throw new I(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ub(n,e){if(e.isInequality()){const i=mh(n),s=e.field;if(i!==null&&!i.isEqual(s))throw new I(v.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${s.toString()}'`);const r=Eg(n);r!==null&&hb(n,s,r)}const t=function(i,s){for(const r of i)for(const o of r.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new I(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new I(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function hb(n,e,t){if(!t.isEqual(e))throw new I(v.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class pm{convertValue(e,t="none"){switch(Gs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Hi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw F()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return hr(e,(s,r)=>{i[s]=this.convertValue(r,t)}),i}convertGeoPoint(e){return new Sh(je(e.latitude),je(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=wg(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Ya(e));default:return null}}convertTimestamp(e){const t=Ki(e);return new Ve(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=de.fromString(e);$(r0(i));const s=new Qi(i.get(1),i.get(3)),r=new x(i.popFirst(5));return s.isEqual(t)||Qe(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class BO extends pm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fi extends ic{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ia(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Rh("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Ia extends fi{data(e={}){return super.data(e)}}class es{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ds(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Ia(this._firestore,this._userDataWriter,i.key,i,new Ds(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new I(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>{const a=new Ia(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Ds(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Ia(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Ds(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:qO(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function qO(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}function db(n,e){return n instanceof fi&&e instanceof fi?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof es&&e instanceof es&&n._firestore===e._firestore&&X0(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(n){n=pe(n,Fe);const e=pe(n.firestore,Ke);return z0(vt(e),n._key).then(t=>gm(e,n,t))}class gr extends pm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,t)}}function jO(n){n=pe(n,Fe);const e=pe(n.firestore,Ke),t=vt(e),i=new gr(e);return oO(t,n._key).then(s=>new fi(e,i,n._key,s,new Ds(s!==null&&s.hasLocalMutations,!0),n.converter))}function zO(n){n=pe(n,Fe);const e=pe(n.firestore,Ke);return z0(vt(e),n._key,{source:"server"}).then(t=>gm(e,n,t))}function WO(n){n=pe(n,At);const e=pe(n.firestore,Ke),t=vt(e),i=new gr(e);return cb(n._query),W0(t,n._query).then(s=>new es(e,i,n,s))}function GO(n){n=pe(n,At);const e=pe(n.firestore,Ke),t=vt(e),i=new gr(e);return aO(t,n._query).then(s=>new es(e,i,n,s))}function KO(n){n=pe(n,At);const e=pe(n.firestore,Ke),t=vt(e),i=new gr(e);return W0(t,n._query,{source:"server"}).then(s=>new es(e,i,n,s))}function Uv(n,e,t){n=pe(n,Fe);const i=pe(n.firestore,Ke),s=Oh(n.converter,e,t);return jc(i,[kh(fr(i),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ue.none())])}function Vv(n,e,t,...i){n=pe(n,Fe);const s=pe(n.firestore,Ke),r=fr(s);let o;return o=typeof(e=z(e))=="string"||e instanceof Zi?cm(r,"updateDoc",n._key,e,t,i):am(r,"updateDoc",n._key,e),jc(s,[o.toMutation(n._key,Ue.exists(!0))])}function HO(n){return jc(pe(n.firestore,Ke),[new ko(n._key,Ue.none())])}function QO(n,e){const t=pe(n.firestore,Ke),i=yu(n),s=Oh(n.converter,e);return jc(t,[kh(fr(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,Ue.exists(!1))]).then(()=>i)}function fb(n,...e){var t,i,s;n=z(n);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Yf(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Yf(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(n instanceof Fe)l=pe(n.firestore,Ke),u=So(n._key.path),c={next:h=>{e[o]&&e[o](gm(l,n,h))},error:e[o+1],complete:e[o+2]};else{const h=pe(n,At);l=pe(h.firestore,Ke),u=h._query;const d=new gr(l);c={next:f=>{e[o]&&e[o](new es(l,d,h,f))},error:e[o+1],complete:e[o+2]},cb(n._query)}return function(h,d,f,m){const y=new Th(m),E=new Hg(d,y,f);return h.asyncQueue.enqueueAndForget(async()=>Wg(await lo(h),E)),()=>{y.Dc(),h.asyncQueue.enqueueAndForget(async()=>Gg(await lo(h),E))}}(vt(l),u,a,c)}function YO(n,e){return cO(vt(n=pe(n,Ke)),Yf(e)?e:{next:e})}function jc(n,e){return function(t,i){const s=new gt;return t.asyncQueue.enqueueAndForget(async()=>LD(await sm(t),i,s)),s.promise}(vt(n),e)}function gm(n,e,t){const i=t.docs.get(e._key),s=new gr(n);return new fi(n,s,e._key,i,new Ds(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=fr(e)}set(e,t,i){this._verifyNotCommitted();const s=Oi(e,this._firestore),r=Oh(s.converter,t,i),o=kh(this._dataReader,"WriteBatch.set",s._key,r,s.converter!==null,i);return this._mutations.push(o.toMutation(s._key,Ue.none())),this}update(e,t,i,...s){this._verifyNotCommitted();const r=Oi(e,this._firestore);let o;return o=typeof(t=z(t))=="string"||t instanceof Zi?cm(this._dataReader,"WriteBatch.update",r._key,t,i,s):am(this._dataReader,"WriteBatch.update",r._key,t),this._mutations.push(o.toMutation(r._key,Ue.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Oi(e,this._firestore);return this._mutations=this._mutations.concat(new ko(t._key,Ue.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new I(v.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Oi(n,e){if((n=z(n)).firestore!==e)throw new I(v.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=fr(e)}get(e){const t=Oi(e,this._firestore),i=new BO(this._firestore);return this._transaction.lookup([t._key]).then(s=>{if(!s||s.length!==1)return F();const r=s[0];if(r.isFoundDocument())return new ic(this._firestore,i,r.key,r,t.converter);if(r.isNoDocument())return new ic(this._firestore,i,t._key,null,t.converter);throw F()})}set(e,t,i){const s=Oi(e,this._firestore),r=Oh(s.converter,t,i),o=kh(this._dataReader,"Transaction.set",s._key,r,s.converter!==null,i);return this._transaction.set(s._key,o),this}update(e,t,i,...s){const r=Oi(e,this._firestore);let o;return o=typeof(t=z(t))=="string"||t instanceof Zi?cm(this._dataReader,"Transaction.update",r._key,t,i,s):am(this._dataReader,"Transaction.update",r._key,t),this._transaction.update(r._key,o),this}delete(e){const t=Oi(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Oi(e,this._firestore),i=new gr(this._firestore);return super.get(e).then(s=>new fi(this._firestore,i,t._key,s._document,new Ds(!1,!1),t.converter))}}function eM(n,e,t){n=pe(n,Ke);const i=Object.assign(Object.assign({},XO),t);return function(s){if(s.maxAttempts<1)throw new I(v.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(s,r,o){const a=new gt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await iO(s);new tO(s.asyncQueue,c,o,r,a).run()}),a.promise}(vt(n),s=>e(new ZO(n,s)),i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tM(){return new qc("deleteField")}function nM(){return new om("serverTimestamp")}function iM(...n){return new AO("arrayUnion",n)}function sM(...n){return new kO("arrayRemove",n)}function rM(n){return new RO("increment",n)}(function(n,e=!0){(function(t){Co=t})(yi),hi(new Rn("firestore",(t,{instanceIdentifier:i,options:s})=>{const r=t.getProvider("app").getImmediate(),o=new Ke(new dx(t.getProvider("auth-internal")),new mx(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new I(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qi(a.options.projectId,c)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),gn(O_,"3.12.2",n),gn(O_,"3.12.2","esm2017")})();const oM="@firebase/firestore-compat",aM="0.3.11";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new I("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(){if(typeof Uint8Array>"u")throw new I("unimplemented","Uint8Arrays are not available in this environment.")}function qv(){if(!$x())throw new I("unimplemented","Blobs are unavailable in Firestore in this environment.")}class sc{constructor(e){this._delegate=e}static fromBase64String(e){return qv(),new sc(Jn.fromBase64String(e))}static fromUint8Array(e){return Bv(),new sc(Jn.fromUint8Array(e))}toBase64(){return qv(),this._delegate.toBase64()}toUint8Array(){return Bv(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(n){return cM(n,["next","error","complete"])}function cM(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const i of e)if(i in t&&typeof t[i]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{enableIndexedDbPersistence(e,t){return mO(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return yO(e._delegate)}clearIndexedDbPersistence(e){return _O(e._delegate)}}class pb{constructor(e,t,i){this._delegate=t,this._persistenceProvider=i,this.INTERNAL={delete:()=>this.terminate()},e instanceof Qi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&xn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,i={}){hO(this._delegate,e,t,i)}enableNetwork(){return wO(this._delegate)}disableNetwork(){return IO(this._delegate)}enablePersistence(e){let t=!1,i=!1;return e&&(t=!!e.synchronizeTabs,i=!!e.experimentalForceOwningTab,K0("synchronizeTabs",t,"experimentalForceOwningTab",i)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,i)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return vO(this._delegate)}onSnapshotsInSync(e){return YO(this._delegate,e)}get app(){if(!this._appCompat)throw new I("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new uo(this,Q0(this._delegate,e))}catch(t){throw Ft(t,"collection()","Firestore.collection()")}}doc(e){try{return new dn(this,yu(this._delegate,e))}catch(t){throw Ft(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Lt(this,dO(this._delegate,e))}catch(t){throw Ft(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return eM(this._delegate,t=>e(new gb(this,t)))}batch(){return vt(this._delegate),new mb(new JO(this._delegate,e=>jc(this._delegate,e)))}loadBundle(e){return EO(this._delegate,e)}namedQuery(e){return TO(this._delegate,e).then(t=>t?new Lt(this,t):null)}}class Mh extends pm{constructor(e){super(),this.firestore=e}convertBytes(e){return new sc(new Jn(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return dn.forKey(t,this.firestore,null)}}function uM(n){cx(n)}class gb{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Mh(e)}get(e){const t=Os(e);return this._delegate.get(t).then(i=>new rc(this._firestore,new fi(this._firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,t.converter)))}set(e,t,i){const s=Os(e);return i?(mm("Transaction.set",i),this._delegate.set(s,t,i)):this._delegate.set(s,t),this}update(e,t,i,...s){const r=Os(e);return arguments.length===2?this._delegate.update(r,t):this._delegate.update(r,t,i,...s),this}delete(e){const t=Os(e);return this._delegate.delete(t),this}}class mb{constructor(e){this._delegate=e}set(e,t,i){const s=Os(e);return i?(mm("WriteBatch.set",i),this._delegate.set(s,t,i)):this._delegate.set(s,t),this}update(e,t,i,...s){const r=Os(e);return arguments.length===2?this._delegate.update(r,t):this._delegate.update(r,t,i,...s),this}delete(e){const t=Os(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class er{constructor(e,t,i){this._firestore=e,this._userDataWriter=t,this._delegate=i}fromFirestore(e,t){const i=new Ia(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new oc(this._firestore,i),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const i=er.INSTANCES;let s=i.get(e);s||(s=new WeakMap,i.set(e,s));let r=s.get(t);return r||(r=new er(e,new Mh(e),t),s.set(t,r)),r}}er.INSTANCES=new WeakMap;class dn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Mh(e)}static forPath(e,t,i){if(e.length%2!==0)throw new I("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new dn(t,new Fe(t._delegate,i,new x(e)))}static forKey(e,t,i){return new dn(t,new Fe(t._delegate,i,e))}get id(){return this._delegate.id}get parent(){return new uo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new uo(this.firestore,Q0(this._delegate,e))}catch(t){throw Ft(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=z(e),e instanceof Fe?Y0(this._delegate,e):!1}set(e,t){t=mm("DocumentReference.set",t);try{return t?Uv(this._delegate,e,t):Uv(this._delegate,e)}catch(i){throw Ft(i,"setDoc()","DocumentReference.set()")}}update(e,t,...i){try{return arguments.length===1?Vv(this._delegate,e):Vv(this._delegate,e,t,...i)}catch(s){throw Ft(s,"updateDoc()","DocumentReference.update()")}}delete(){return HO(this._delegate)}onSnapshot(...e){const t=yb(e),i=_b(e,s=>new rc(this.firestore,new fi(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return fb(this._delegate,t,i)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=jO(this._delegate):(e==null?void 0:e.source)==="server"?t=zO(this._delegate):t=$O(this._delegate),t.then(i=>new rc(this.firestore,new fi(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)))}withConverter(e){return new dn(this.firestore,e?this._delegate.withConverter(er.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ft(n,e,t){return n.message=n.message.replace(e,t),n}function yb(n){for(const e of n)if(typeof e=="object"&&!Jf(e))return e;return{}}function _b(n,e){var t,i;let s;return Jf(n[0])?s=n[0]:Jf(n[1])?s=n[1]:typeof n[0]=="function"?s={next:n[0],error:n[1],complete:n[2]}:s={next:n[1],error:n[2],complete:n[3]},{next:r=>{s.next&&s.next(e(r))},error:(t=s.error)===null||t===void 0?void 0:t.bind(s),complete:(i=s.complete)===null||i===void 0?void 0:i.bind(s)}}class rc{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new dn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return db(this._delegate,e._delegate)}}class oc extends rc{data(e){const t=this._delegate.data(e);return lx(t!==void 0),t}}class Lt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Mh(e)}where(e,t,i){try{return new Lt(this.firestore,Ni(this._delegate,PO(e,t,i)))}catch(s){throw Ft(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Lt(this.firestore,Ni(this._delegate,DO(e,t)))}catch(i){throw Ft(i,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Lt(this.firestore,Ni(this._delegate,OO(e)))}catch(t){throw Ft(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Lt(this.firestore,Ni(this._delegate,MO(e)))}catch(t){throw Ft(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Lt(this.firestore,Ni(this._delegate,LO(...e)))}catch(t){throw Ft(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Lt(this.firestore,Ni(this._delegate,FO(...e)))}catch(t){throw Ft(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Lt(this.firestore,Ni(this._delegate,UO(...e)))}catch(t){throw Ft(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Lt(this.firestore,Ni(this._delegate,VO(...e)))}catch(t){throw Ft(t,"endAt()","Query.endAt()")}}isEqual(e){return X0(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=GO(this._delegate):(e==null?void 0:e.source)==="server"?t=KO(this._delegate):t=WO(this._delegate),t.then(i=>new Zf(this.firestore,new es(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)))}onSnapshot(...e){const t=yb(e),i=_b(e,s=>new Zf(this.firestore,new es(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return fb(this._delegate,t,i)}withConverter(e){return new Lt(this.firestore,e?this._delegate.withConverter(er.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class hM{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new oc(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Zf{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Lt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new oc(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new hM(this._firestore,t))}forEach(e,t){this._delegate.forEach(i=>{e.call(t,new oc(this._firestore,i))})}isEqual(e){return db(this._delegate,e._delegate)}}class uo extends Lt{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new dn(this.firestore,e):null}doc(e){try{return e===void 0?new dn(this.firestore,yu(this._delegate)):new dn(this.firestore,yu(this._delegate,e))}catch(t){throw Ft(t,"doc()","CollectionReference.doc()")}}add(e){return QO(this._delegate,e).then(t=>new dn(this.firestore,t))}isEqual(e){return Y0(this._delegate,e._delegate)}withConverter(e){return new uo(this.firestore,e?this._delegate.withConverter(er.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Os(n){return pe(n,Fe)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(...e){this._delegate=new Zi(...e)}static documentId(){return new ym(Ye.keyField().canonicalString())}isEqual(e){return e=z(e),e instanceof Zi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this._delegate=e}static serverTimestamp(){const e=nM();return e._methodName="FieldValue.serverTimestamp",new Rs(e)}static delete(){const e=tM();return e._methodName="FieldValue.delete",new Rs(e)}static arrayUnion(...e){const t=iM(...e);return t._methodName="FieldValue.arrayUnion",new Rs(t)}static arrayRemove(...e){const t=sM(...e);return t._methodName="FieldValue.arrayRemove",new Rs(t)}static increment(e){const t=rM(e);return t._methodName="FieldValue.increment",new Rs(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM={Firestore:pb,GeoPoint:Sh,Timestamp:Ve,Blob:sc,Transaction:gb,WriteBatch:mb,DocumentReference:dn,DocumentSnapshot:rc,Query:Lt,QueryDocumentSnapshot:oc,QuerySnapshot:Zf,CollectionReference:uo,FieldPath:ym,FieldValue:Rs,setLogLevel:uM,CACHE_SIZE_UNLIMITED:gO};function fM(n,e){n.INTERNAL.registerComponent(new Rn("firestore-compat",t=>{const i=t.getProvider("app-compat").getImmediate(),s=t.getProvider("firestore").getImmediate();return e(i,s)},"PUBLIC").setServiceProps(Object.assign({},dM)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(n){fM(n,(e,t)=>new pb(e,t,new lM)),n.registerVersion(oM,aM)}pM(Re);function _m(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}const Xo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Cr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gM(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function vb(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mM=gM,yM=vb,wb=new cr("auth","Firebase",vb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=new Ic("@firebase/auth");function _M(n,...e){vu.logLevel<=ue.WARN&&vu.warn(`Auth (${yi}): ${n}`,...e)}function Ll(n,...e){vu.logLevel<=ue.ERROR&&vu.error(`Auth (${yi}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(n,...e){throw vm(n,...e)}function St(n,...e){return vm(n,...e)}function Ib(n,e,t){const i=Object.assign(Object.assign({},yM()),{[e]:t});return new cr("auth","Firebase",i).create(e,{appName:n.name})}function Do(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&kt(n,"argument-error"),Ib(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vm(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return wb.create(n,...e)}function A(n,e,...t){if(!n)throw vm(e,...t)}function Hn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ll(e),new Error(e)}function Pn(n,e){n||Hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function wm(){return $v()==="http:"||$v()==="https:"}function $v(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wm()||BI()||"connection"in navigator)?navigator.onLine:!0}function wM(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pn(t>e,"Short delay should be less than long delay!"),this.isMobile=jp()||Yu()}get(){return vM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(n,e){Pn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM=new zc(3e4,6e4);function it(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ot(n,e,t,i,s={}){return Tb(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=lr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Eb.fetch()(bb(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Tb(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},IM),e);try{const s=new TM(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw da(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw da(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw da(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw da(n,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ib(n,u,l);kt(n,u)}}catch(s){if(s instanceof qt)throw s;kt(n,"network-request-failed",{message:String(s)})}}async function Ii(n,e,t,i,s={}){const r=await ot(n,e,t,i,s);return"mfaPendingCredential"in r&&kt(n,"multi-factor-auth-required",{_serverResponse:r}),r}function bb(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Im(n.config,s):`${n.config.apiScheme}://${s}`}class TM{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(St(this.auth,"network-request-failed")),EM.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function da(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=St(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bM(n,e){return ot(n,"POST","/v1/accounts:delete",e)}async function CM(n,e){return ot(n,"POST","/v1/accounts:update",e)}async function SM(n,e){return ot(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AM(n,e=!1){const t=z(n),i=await t.getIdToken(e),s=Lh(i);A(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Ea(xd(s.auth_time)),issuedAtTime:Ea(xd(s.iat)),expirationTime:Ea(xd(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function xd(n){return Number(n)*1e3}function Lh(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Ll("JWT malformed, contained fewer than 3 sections"),null;try{const s=Yl(t);return s?JSON.parse(s):(Ll("Failed to decode base64 JWT payload"),null)}catch(s){return Ll("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function kM(n){const e=Lh(n);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof qt&&RM(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function RM({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ea(this.lastLoginAt),this.creationTime=Ea(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cc(n){var e;const t=n.auth,i=await n.getIdToken(),s=await pi(n,SM(t,{idToken:i}));A(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?DM(r.providerUserInfo):[],a=PM(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Cb(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function xM(n){const e=z(n);await cc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PM(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function DM(n){return n.map(e=>{var{providerId:t}=e,i=_m(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OM(n,e){const t=await Tb(n,{},async()=>{const i=lr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=bb(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Eb.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kM(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await OM(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new lc;return i&&(A(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(A(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(A(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lc,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(n,e){A(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class qs{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=_m(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Cb(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await pi(this,this.stsTokenManager.getToken(this.auth,e));return A(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return AM(this,e)}reload(){return xM(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await cc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await pi(this,bM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,c,l,u;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,y=(a=t.tenantId)!==null&&a!==void 0?a:void 0,E=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,V=(l=t.createdAt)!==null&&l!==void 0?l:void 0,W=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:M,isAnonymous:ne,providerData:se,stsTokenManager:Ie}=t;A(U&&Ie,e,"internal-error");const Y=lc.fromJSON(this.name,Ie);A(typeof U=="string",e,"internal-error"),xi(h,e.name),xi(d,e.name),A(typeof M=="boolean",e,"internal-error"),A(typeof ne=="boolean",e,"internal-error"),xi(f,e.name),xi(m,e.name),xi(y,e.name),xi(E,e.name),xi(V,e.name),xi(W,e.name);const ye=new qs({uid:U,auth:e,email:d,emailVerified:M,displayName:h,isAnonymous:ne,photoURL:m,phoneNumber:f,tenantId:y,stsTokenManager:Y,createdAt:V,lastLoginAt:W});return se&&Array.isArray(se)&&(ye.providerData=se.map(Ce=>Object.assign({},Ce))),E&&(ye._redirectEventId=E),ye}static async _fromIdTokenResponse(e,t,i=!1){const s=new lc;s.updateFromServerResponse(t);const r=new qs({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await cc(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=new Map;function on(n){Pn(n instanceof Function,"Expected a class definition");let e=jv.get(n);return e?(Pn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,jv.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Sb.type="NONE";const ho=Sb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(n,e,t){return`firebase:${n}:${e}:${t}`}class qr{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=$s(this.userKey,s.apiKey,r),this.fullPersistenceKey=$s("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new qr(on(ho),e,i);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||on(ho);const o=$s(i,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=qs._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new qr(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new qr(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ab(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nb(e))return"Blackberry";if(xb(e))return"Webos";if(Em(e))return"Safari";if((e.includes("chrome/")||kb(e))&&!e.includes("edge/"))return"Chrome";if(Wc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ab(n=qe()){return/firefox\//i.test(n)}function Em(n=qe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kb(n=qe()){return/crios\//i.test(n)}function Rb(n=qe()){return/iemobile/i.test(n)}function Wc(n=qe()){return/android/i.test(n)}function Nb(n=qe()){return/blackberry/i.test(n)}function xb(n=qe()){return/webos/i.test(n)}function Oo(n=qe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function MM(n=qe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function LM(n=qe()){var e;return Oo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FM(){return qI()&&document.documentMode===10}function Pb(n=qe()){return Oo(n)||Wc(n)||xb(n)||Nb(n)||/windows phone/i.test(n)||Rb(n)}function UM(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(n,e=[]){let t;switch(n){case"Browser":t=zv(qe());break;case"Worker":t=`${zv(qe())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${yi}/${i}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VM(n){return(await ot(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Ob(n,e){return ot(n,"GET","/v2/recaptchaConfig",it(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(n){return n!==void 0&&n.getResponse!==void 0}function Gv(n){return n!==void 0&&n.enterprise!==void 0}class Mb{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BM(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Tm(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=St("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",BM().appendChild(i)})}function Lb(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const qM="https://www.google.com/recaptcha/enterprise.js?render=",$M="recaptcha-enterprise",jM="NO_RECAPTCHA";class Fb{constructor(e){this.type=$M,this.auth=Je(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Ob(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Mb(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(r,o,a){const c=window.grecaptcha;Gv(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(()=>{o(jM)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&Gv(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Tm(qM+a).then(()=>{s(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ts(n,e,t,i=!1){const s=new Fb(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kv(this),this.idTokenSubscription=new Kv(this),this.beforeStateQueue=new zM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=on(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await qr.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await cc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?z(e):null;return t&&A(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}async initializeRecaptchaConfig(){const e=await Ob(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Mb(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Fb(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cr("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&on(e)||this._popupRedirectResolver;A(t,this,"argument-error"),this.redirectPersistenceManager=await qr.create(this,[on(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return A(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Db(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&_M(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Je(n){return z(n)}class Kv{constructor(e){this.auth=e,this.observer=null,this.addObserver=zI(t=>this.observer=t)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function GM(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(on);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function KM(n,e,t){const i=Je(n);A(i._canInitEmulator,i,"emulator-config-failed"),A(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=Ub(e),{host:o,port:a}=HM(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||QM()}function Ub(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function HM(n){const e=Ub(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Hv(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Hv(o)}}}function Hv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function QM(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,t){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vb(n,e){return ot(n,"POST","/v1/accounts:resetPassword",it(n,e))}async function Bb(n,e){return ot(n,"POST","/v1/accounts:update",e)}async function YM(n,e){return ot(n,"POST","/v1/accounts:update",it(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pd(n,e){return Ii(n,"POST","/v1/accounts:signInWithPassword",it(n,e))}async function Fh(n,e){return ot(n,"POST","/v1/accounts:sendOobCode",it(n,e))}async function XM(n,e){return Fh(n,e)}async function Dd(n,e){return Fh(n,e)}async function Od(n,e){return Fh(n,e)}async function JM(n,e){return Fh(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZM(n,e){return Ii(n,"POST","/v1/accounts:signInWithEmailLink",it(n,e))}async function eL(n,e){return Ii(n,"POST","/v1/accounts:signInWithEmailLink",it(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends Mo{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new uc(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new uc(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const s=await ts(e,i,"signInWithPassword");return Pd(e,s)}else return Pd(e,i).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await ts(e,i,"signInWithPassword");return Pd(e,r)}else return Promise.reject(s)});case"emailLink":return ZM(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Bb(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return eL(e,{idToken:t,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(n,e){return Ii(n,"POST","/v1/accounts:signInWithIdp",it(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tL="http://localhost";class Zn extends Mo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):kt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=_m(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Zn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ci(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ci(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ci(e,t)}buildRequest(){const e={requestUri:tL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=lr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nL(n,e){return ot(n,"POST","/v1/accounts:sendVerificationCode",it(n,e))}async function iL(n,e){return Ii(n,"POST","/v1/accounts:signInWithPhoneNumber",it(n,e))}async function sL(n,e){const t=await Ii(n,"POST","/v1/accounts:signInWithPhoneNumber",it(n,e));if(t.temporaryProof)throw da(n,"account-exists-with-different-credential",t);return t}const rL={USER_NOT_FOUND:"user-not-found"};async function oL(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Ii(n,"POST","/v1/accounts:signInWithPhoneNumber",it(n,t),rL)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js extends Mo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new js({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new js({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return iL(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return sL(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return oL(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:s,temporaryProof:r}=e;return!i&&!t&&!s&&!r?null:new js({verificationId:t,verificationCode:i,phoneNumber:s,temporaryProof:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aL(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cL(n){const e=Nr(oa(n)).link,t=e?Nr(oa(e)).deep_link_id:null,i=Nr(oa(n)).deep_link_id;return(i?Nr(oa(i)).link:null)||i||t||e||n}class Uh{constructor(e){var t,i,s,r,o,a;const c=Nr(oa(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(i=c.oobCode)!==null&&i!==void 0?i:null,h=aL((s=c.mode)!==null&&s!==void 0?s:null);A(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=cL(e);try{return new Uh(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.providerId=us.PROVIDER_ID}static credential(e,t){return uc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Uh.parseLink(t);return A(i,"argument-error"),uc._fromEmailAndCode(e,i.code,i.tenantId)}}us.PROVIDER_ID="password";us.EMAIL_PASSWORD_SIGN_IN_METHOD="password";us.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends Ei{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class $r extends Lo{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return A("providerId"in t&&"signInMethod"in t,"argument-error"),Zn._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return A(e.idToken||e.accessToken,"argument-error"),Zn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return $r.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return $r.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:a}=e;if(!i&&!s&&!t&&!r||!a)return null;try{return new $r(a)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Lo{constructor(){super("facebook.com")}static credential(e){return Zn._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Zn._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return qn.credential(t,i)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Lo{constructor(){super("github.com")}static credential(e){return Zn._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lL="http://localhost";class fo extends Mo{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return ci(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ci(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ci(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,pendingToken:r}=t;return!i||!s||!r||i!==s?null:new fo(i,r)}static _create(e,t){return new fo(e,t)}buildRequest(){return{requestUri:lL,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uL="saml.";class wu extends Ei{constructor(e){A(e.startsWith(uL),"argument-error"),super(e)}static credentialFromResult(e){return wu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return wu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=fo.fromJSON(e);return A(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:i}=e;if(!t||!i)return null;try{return fo._create(i,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Lo{constructor(){super("twitter.com")}static credential(e,t){return Zn._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return jn.credential(t,i)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(n,e){return Ii(n,"POST","/v1/accounts:signUp",it(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await qs._fromIdTokenResponse(e,i,s),o=Qv(i);return new yn({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Qv(i);return new yn({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Qv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hL(n){var e;const t=Je(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new yn({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await Fl(t,{returnSecureToken:!0}),s=await yn._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu extends qt{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Iu.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Iu(e,t,i,s)}}function qb(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Iu._fromErrorAndOperation(n,r,e,i):r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dL(n,e){const t=z(n);await Vh(!0,t,e);const{providerUserInfo:i}=await CM(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),s=$b(i||[]);return t.providerData=t.providerData.filter(r=>s.has(r.providerId)),s.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function bm(n,e,t=!1){const i=await pi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return yn._forOperation(n,"link",i)}async function Vh(n,e,t){await cc(e);const i=$b(e.providerData),s=n===!1?"provider-already-linked":"no-such-provider";A(i.has(t)===n,e.auth,s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await pi(n,qb(i,s,e,n),t);A(r.idToken,i,"internal-error");const o=Lh(r.idToken);A(o,i,"internal-error");const{sub:a}=o;return A(n.uid===a,i,"user-mismatch"),yn._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&kt(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zb(n,e,t=!1){const i="signIn",s=await qb(n,i,e),r=await yn._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function Bh(n,e){return zb(Je(n),e)}async function Wb(n,e){const t=z(n);return await Vh(!1,t,e.providerId),bm(t,e)}async function Gb(n,e){return jb(z(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fL(n,e){return Ii(n,"POST","/v1/accounts:signInWithCustomToken",it(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pL(n,e){const t=Je(n),i=await fL(t,{token:e,returnSecureToken:!0}),s=await yn._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Cm._fromServerResponse(e,t):"totpInfo"in t?Sm._fromServerResponse(e,t):kt(e,"internal-error")}}class Cm extends Gc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Cm(t)}}class Sm extends Gc{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Sm(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(n,e,t){var i;A(((i=t.url)===null||i===void 0?void 0:i.length)>0,n,"invalid-continue-uri"),A(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(A(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(A(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gL(n,e,t){var i;const s=Je(n),r={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((i=s._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const o=await ts(s,r,"getOobCode",!0);t&&jr(s,o,t),await Dd(s,o)}else t&&jr(s,r,t),await Dd(s,r).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await ts(s,r,"getOobCode",!0);t&&jr(s,a,t),await Dd(s,a)}else return Promise.reject(o)})}async function mL(n,e,t){await Vb(z(n),{oobCode:e,newPassword:t})}async function yL(n,e){await YM(z(n),{oobCode:e})}async function Kb(n,e){const t=z(n),i=await Vb(t,{oobCode:e}),s=i.requestType;switch(A(s,t,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":A(i.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":A(i.mfaInfo,t,"internal-error");default:A(i.email,t,"internal-error")}let r=null;return i.mfaInfo&&(r=Gc._fromServerResponse(Je(t),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:r},operation:s}}async function _L(n,e){const{data:t}=await Kb(z(n),e);return t.email}async function vL(n,e,t){var i;const s=Je(n),r={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((i=s._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const l=await ts(s,r,"signUpPassword");o=Fl(s,l)}else o=Fl(s,r).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await ts(s,r,"signUpPassword");return Fl(s,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await yn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function wL(n,e,t){return Bh(z(n),us.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IL(n,e,t){var i;const s=Je(n),r={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){A(c.handleCodeInApp,s,"argument-error"),c&&jr(s,a,c)}if(!((i=s._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const a=await ts(s,r,"getOobCode",!0);o(a,t),await Od(s,a)}else o(r,t),await Od(s,r).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await ts(s,r,"getOobCode",!0);o(c,t),await Od(s,c)}else return Promise.reject(a)})}function EL(n,e){const t=Uh.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function TL(n,e,t){const i=z(n),s=us.credentialWithLink(e,t||ac());return A(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Bh(i,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bL(n,e){return ot(n,"POST","/v1/accounts:createAuthUri",it(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CL(n,e){const t=wm()?ac():"http://localhost",i={identifier:e,continueUri:t},{signinMethods:s}=await bL(z(n),i);return s||[]}async function SL(n,e){const t=z(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&jr(t.auth,s,e);const{email:r}=await XM(t.auth,s);r!==n.email&&await n.reload()}async function AL(n,e,t){const i=z(n),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&jr(i.auth,r,t);const{email:o}=await JM(i.auth,r);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kL(n,e){return ot(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RL(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=z(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await pi(i,kL(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function NL(n,e){return Hb(z(n),e,null)}function xL(n,e){return Hb(z(n),null,e)}async function Hb(n,e,t){const{auth:i}=n,r={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(r.email=e),t&&(r.password=t);const o=await pi(n,Bb(i,r));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PL(n){var e,t;if(!n)return null;const{providerId:i}=n,s=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},r=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(n!=null&&n.idToken)){const o=(t=(e=Lh(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new zr(r,a)}}if(!i)return null;switch(i){case"facebook.com":return new DL(r,s);case"github.com":return new OL(r,s);case"google.com":return new ML(r,s);case"twitter.com":return new LL(r,s,n.screenName||null);case"custom":case"anonymous":return new zr(r,null);default:return new zr(r,i,s)}}class zr{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class Qb extends zr{constructor(e,t,i,s){super(e,t,i),this.username=s}}class DL extends zr{constructor(e,t){super(e,"facebook.com",t)}}class OL extends Qb{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class ML extends zr{constructor(e,t){super(e,"google.com",t)}}class LL extends Qb{constructor(e,t,i){super(e,"twitter.com",t,i)}}function FL(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:PL(t)}class Ms{constructor(e,t,i){this.type=e,this.credential=t,this.auth=i}static _fromIdtoken(e,t){return new Ms("enroll",e,t)}static _fromMfaPendingCredential(e){return new Ms("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,i;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Ms._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((i=e.multiFactorSession)===null||i===void 0)&&i.idToken)return Ms._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,t,i){this.session=e,this.hints=t,this.signInResolver=i}static _fromError(e,t){const i=Je(e),s=t.customData._serverResponse,r=(s.mfaInfo||[]).map(a=>Gc._fromServerResponse(i,a));A(s.mfaPendingCredential,i,"internal-error");const o=Ms._fromMfaPendingCredential(s.mfaPendingCredential);return new Am(o,r,async a=>{const c=await a._process(i,o);delete s.mfaInfo,delete s.mfaPendingCredential;const l=Object.assign(Object.assign({},s),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const u=await yn._fromIdTokenResponse(i,t.operationType,l);return await i._updateCurrentUser(u.user),u;case"reauthenticate":return A(t.user,i,"internal-error"),yn._forOperation(t.user,t.operationType,l);default:kt(i,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function UL(n,e){var t;const i=z(n),s=e;return A(e.customData.operationType,i,"argument-error"),A((t=s.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,i,"argument-error"),Am._fromError(i,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VL(n,e){return ot(n,"POST","/v2/accounts/mfaEnrollment:start",it(n,e))}function BL(n,e){return ot(n,"POST","/v2/accounts/mfaEnrollment:finalize",it(n,e))}function qL(n,e){return ot(n,"POST","/v2/accounts/mfaEnrollment:withdraw",it(n,e))}class km{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(i=>Gc._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new km(e)}async getSession(){return Ms._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const i=e,s=await this.getSession(),r=await pi(this.user,i._process(this.user.auth,s,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,i=await this.user.getIdToken();try{const s=await pi(this.user,qL(this.user.auth,{idToken:i,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:r})=>r!==t),await this.user._updateTokensIfNecessary(s),await this.user.reload()}catch(s){throw s}}}const Md=new WeakMap;function $L(n){const e=z(n);return Md.has(e)||Md.set(e,km._fromUser(e)),Md.get(e)}const Eu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Eu,"1"),this.storage.removeItem(Eu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jL(){const n=qe();return Em(n)||Oo(n)}const zL=1e3,WL=10;class Xb extends Yb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jL()&&UM(),this.fallbackToPolling=Pb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);FM()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,WL):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},zL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xb.type="LOCAL";const Rm=Xb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb extends Yb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jb.type="SESSION";const tr=Jb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GL(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new qh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(t.origin,r)),c=await GL(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Kc("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function HL(n){tt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function QL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YL(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function XL(){return Nm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb="firebaseLocalStorageDb",JL=1,Tu="firebaseLocalStorage",eC="fbase_key";class Hc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $h(n,e){return n.transaction([Tu],e?"readwrite":"readonly").objectStore(Tu)}function ZL(){const n=indexedDB.deleteDatabase(Zb);return new Hc(n).toPromise()}function ep(){const n=indexedDB.open(Zb,JL);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Tu,{keyPath:eC})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Tu)?e(i):(i.close(),await ZL(),e(await ep()))})})}async function Yv(n,e,t){const i=$h(n,!0).put({[eC]:e,value:t});return new Hc(i).toPromise()}async function eF(n,e){const t=$h(n,!1).get(e),i=await new Hc(t).toPromise();return i===void 0?null:i.value}function Xv(n,e){const t=$h(n,!0).delete(e);return new Hc(t).toPromise()}const tF=800,nF=3;class tC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ep(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>nF)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qh._getInstance(XL()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await QL(),!this.activeServiceWorker)return;this.sender=new KL(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ep();return await Yv(e,Eu,"1"),await Xv(e,Eu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Yv(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>eF(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=$h(s,!1).getAll();return new Hc(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tC.type="LOCAL";const hc=tC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iF(n,e){return ot(n,"POST","/v2/accounts/mfaSignIn:start",it(n,e))}function sF(n,e){return ot(n,"POST","/v2/accounts/mfaSignIn:finalize",it(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rF=500,oF=6e4,wl=1e12;class aF{constructor(e){this.auth=e,this.counter=wl,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new cF(e,this.auth.name,t||{})),this.counter++,i}reset(e){var t;const i=e||wl;(t=this._widgets.get(i))===null||t===void 0||t.delete(),this._widgets.delete(i)}getResponse(e){var t;const i=e||wl;return((t=this._widgets.get(i))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const i=e||wl;return(t=this._widgets.get(i))===null||t===void 0||t.execute(),""}}class cF{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;A(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=lF(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},oF)},rF))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function lF(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<n;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld=Lb("rcb"),uF=new zc(3e4,6e4),hF="https://www.google.com/recaptcha/api.js?";class dF{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=tt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return A(fF(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Wv(tt().grecaptcha)?Promise.resolve(tt().grecaptcha):new Promise((i,s)=>{const r=tt().setTimeout(()=>{s(St(e,"network-request-failed"))},uF.get());tt()[Ld]=()=>{tt().clearTimeout(r),delete tt()[Ld];const a=tt().grecaptcha;if(!a||!Wv(a)){s(St(e,"internal-error"));return}const c=a.render;a.render=(l,u)=>{const h=c(l,u);return this.counter++,h},this.hostLanguage=t,i(a)};const o=`${hF}?${lr({onload:Ld,render:"explicit",hl:t})}`;Tm(o).catch(()=>{clearTimeout(r),s(St(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=tt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function fF(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class pF{async load(e){return new aF(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="recaptcha",gF={theme:"light",type:"image"};let mF=class{constructor(e,t=Object.assign({},gF),i){this.parameters=t,this.type=nC,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Je(i),this.isInvisible=this.parameters.size==="invisible",A(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof e=="string"?document.getElementById(e):e;A(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new pF:new dF,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(s=>{const r=o=>{o&&(this.tokenChangeListeners.delete(r),s(o))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){A(!this.parameters.sitekey,this.auth,"argument-error"),A(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),A(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=tt()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){A(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){A(wm()&&!Nm(),this.auth,"internal-error"),await yF(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await VM(this.auth);A(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return A(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function yF(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=js._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function _F(n,e,t){const i=Je(n),s=await jh(i,e,z(t));return new xm(s,r=>Bh(i,r))}async function vF(n,e,t){const i=z(n);await Vh(!1,i,"phone");const s=await jh(i.auth,e,z(t));return new xm(s,r=>Wb(i,r))}async function wF(n,e,t){const i=z(n),s=await jh(i.auth,e,z(t));return new xm(s,r=>Gb(i,r))}async function jh(n,e,t){var i;const s=await t.verify();try{A(typeof s=="string",n,"argument-error"),A(t.type===nC,n,"argument-error");let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const o=r.session;if("phoneNumber"in r)return A(o.type==="enroll",n,"internal-error"),(await VL(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{A(o.type==="signin",n,"internal-error");const a=((i=r.multiFactorHint)===null||i===void 0?void 0:i.uid)||r.multiFactorUid;return A(a,n,"missing-multi-factor-info"),(await iF(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await nL(n,{phoneNumber:r.phoneNumber,recaptchaToken:s});return o}}finally{t._reset()}}async function IF(n,e){await bm(z(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nr=class Ul{constructor(e){this.providerId=Ul.PROVIDER_ID,this.auth=Je(e)}verifyPhoneNumber(e,t){return jh(this.auth,e,z(t))}static credential(e,t){return js._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ul.credentialFromTaggedObject(t)}static credentialFromError(e){return Ul.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?js._fromTokenResponse(t,i):null}};nr.PROVIDER_ID="phone";nr.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(n,e){return e?on(e):(A(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm extends Mo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ci(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ci(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function EF(n){return zb(n.auth,new Pm(n),n.bypassAuthState)}function TF(n){const{auth:e,user:t}=n;return A(t,e,"internal-error"),jb(t,new Pm(n),n.bypassAuthState)}async function bF(n){const{auth:e,user:t}=n;return A(t,e,"internal-error"),bm(t,new Pm(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EF;case"linkViaPopup":case"linkViaRedirect":return bF;case"reauthViaPopup":case"reauthViaRedirect":return TF;default:kt(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CF=new zc(2e3,1e4);async function SF(n,e,t){const i=Je(n);Do(n,e,Ei);const s=mr(i,t);return new si(i,"signInViaPopup",e,s).executeNotNull()}async function AF(n,e,t){const i=z(n);Do(i.auth,e,Ei);const s=mr(i.auth,t);return new si(i.auth,"reauthViaPopup",e,s,i).executeNotNull()}async function kF(n,e,t){const i=z(n);Do(i.auth,e,Ei);const s=mr(i.auth,t);return new si(i.auth,"linkViaPopup",e,s,i).executeNotNull()}class si extends iC{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,si.currentPopupAction&&si.currentPopupAction.cancel(),si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=Kc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CF.get())};e()}}si.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RF="pendingRedirect",Ta=new Map;class NF extends iC{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ta.get(this.auth._key());if(!e){try{const i=await xF(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ta.set(this.auth._key(),e)}return this.bypassAuthState||Ta.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xF(n,e){const t=rC(e),i=sC(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function Dm(n,e){return sC(n)._set(rC(e),"true")}function PF(){Ta.clear()}function Om(n,e){Ta.set(n._key(),e)}function sC(n){return on(n._redirectPersistence)}function rC(n){return $s(RF,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DF(n,e,t){return OF(n,e,t)}async function OF(n,e,t){const i=Je(n);Do(n,e,Ei),await i._initializationPromise;const s=mr(i,t);return await Dm(s,i),s._openRedirect(i,e,"signInViaRedirect")}function MF(n,e,t){return LF(n,e,t)}async function LF(n,e,t){const i=z(n);Do(i.auth,e,Ei),await i.auth._initializationPromise;const s=mr(i.auth,t);await Dm(s,i.auth);const r=await oC(i);return s._openRedirect(i.auth,e,"reauthViaRedirect",r)}function FF(n,e,t){return UF(n,e,t)}async function UF(n,e,t){const i=z(n);Do(i.auth,e,Ei),await i.auth._initializationPromise;const s=mr(i.auth,t);await Vh(!1,i,e.providerId),await Dm(s,i.auth);const r=await oC(i);return s._openRedirect(i.auth,e,"linkViaRedirect",r)}async function VF(n,e){return await Je(n)._initializationPromise,zh(n,e,!1)}async function zh(n,e,t=!1){const i=Je(n),s=mr(i,e),o=await new NF(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}async function oC(n){const e=Kc(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BF=10*60*1e3;class aC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qF(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!cC(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(St(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BF&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jv(e))}saveEventToCache(e){this.cachedEventUids.add(Jv(e)),this.lastProcessedEventTime=Date.now()}}function Jv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function cC({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qF(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cC(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lC(n,e={}){return ot(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $F=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jF=/^https?/;async function zF(n){if(n.config.emulator)return;const{authorizedDomains:e}=await lC(n);for(const t of e)try{if(WF(t))return}catch{}kt(n,"unauthorized-domain")}function WF(n){const e=ac(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!jF.test(t))return!1;if($F.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GF=new zc(3e4,6e4);function Zv(){const n=tt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function KF(n){return new Promise((e,t)=>{var i,s,r;function o(){Zv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zv(),t(St(n,"network-request-failed"))},timeout:GF.get()})}if(!((s=(i=tt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=tt().gapi)===null||r===void 0)&&r.load)o();else{const a=Lb("iframefcb");return tt()[a]=()=>{gapi.load?o():t(St(n,"network-request-failed"))},Tm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Vl=null,e})}let Vl=null;function HF(n){return Vl=Vl||KF(n),Vl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QF=new zc(5e3,15e3),YF="__/auth/iframe",XF="emulator/auth/iframe",JF={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZF=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function e2(n){const e=n.config;A(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Im(e,XF):`https://${n.config.authDomain}/${YF}`,i={apiKey:e.apiKey,appName:n.name,v:yi},s=ZF.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${lr(i).slice(1)}`}async function t2(n){const e=await HF(n),t=tt().gapi;return A(t,n,"internal-error"),e.open({where:document.body,url:e2(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JF,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=St(n,"network-request-failed"),a=tt().setTimeout(()=>{r(o)},QF.get());function c(){tt().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},i2=500,s2=600,r2="_blank",o2="http://localhost";class ew{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function a2(n,e,t,i=i2,s=s2){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},n2),{width:i.toString(),height:s.toString(),top:r,left:o}),l=qe().toLowerCase();t&&(a=kb(l)?r2:t),Ab(l)&&(e=e||o2,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(LM(l)&&a!=="_self")return c2(e||"",a),new ew(null);const h=window.open(e||"",a,u);A(h,n,"popup-blocked");try{h.focus()}catch{}return new ew(h)}function c2(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2="__/auth/handler",u2="emulator/auth/handler",h2=encodeURIComponent("fac");async function tp(n,e,t,i,s,r){A(n.config.authDomain,n,"auth-domain-config-required"),A(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:yi,eventId:s};if(e instanceof Ei){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",df(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Lo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${h2}=${encodeURIComponent(c)}`:"";return`${d2(n)}?${lr(a).slice(1)}${l}`}function d2({config:n}){return n.emulator?Im(n,u2):`https://${n.authDomain}/${l2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="webStorageSupport";class f2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tr,this._completeRedirectFn=zh,this._overrideRedirectResult=Om}async _openPopup(e,t,i,s){var r;Pn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await tp(e,t,i,ac(),s);return a2(e,o,Kc())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await tp(e,t,i,ac(),s);return HL(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Pn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await t2(e),i=new aC(e);return t.register("authEvent",s=>(A(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fd,{type:Fd},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Fd];o!==void 0&&t(!!o),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zF(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Pb()||Em()||Oo()}}const p2=f2;class g2{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return Hn("unexpected MultiFactorSessionType")}}}class Mm extends g2{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Mm(e)}_finalizeEnroll(e,t,i){return BL(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return sF(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class uC{constructor(){}static assertion(e){return Mm._fromCredential(e)}}uC.FACTOR_ID="phone";var tw="@firebase/auth",nw="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _2(n){hi(new Rn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Db(n)},l=new WM(i,s,r,c);return GM(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),hi(new Rn("auth-internal",e=>{const t=Je(e.getProvider("auth").getImmediate());return(i=>new m2(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(tw,nw,y2(n)),gn(tw,nw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2=5*60;bR("authIdTokenMaxAge");_2("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2=2e3;async function I2(n,e,t){var i;const{BuildInfo:s}=ir();Pn(e.sessionId,"AuthEvent did not contain a session ID");const r=await S2(e.sessionId),o={};return Oo()?o.ibi=s.packageName:Wc()?o.apn=s.packageName:kt(n,"operation-not-supported-in-this-environment"),s.displayName&&(o.appDisplayName=s.displayName),o.sessionId=r,tp(n,t,e.type,void 0,(i=e.eventId)!==null&&i!==void 0?i:void 0,o)}async function E2(n){const{BuildInfo:e}=ir(),t={};Oo()?t.iosBundleId=e.packageName:Wc()?t.androidPackageName=e.packageName:kt(n,"operation-not-supported-in-this-environment"),await lC(n,t)}function T2(n){const{cordova:e}=ir();return new Promise(t=>{e.plugins.browsertab.isAvailable(i=>{let s=null;i?e.plugins.browsertab.openUrl(n):s=e.InAppBrowser.open(n,MM()?"_blank":"_system","location=yes"),t(s)})})}async function b2(n,e,t){const{cordova:i}=ir();let s=()=>{};try{await new Promise((r,o)=>{let a=null;function c(){var h;r();const d=(h=i.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function l(){a||(a=window.setTimeout(()=>{o(St(n,"redirect-cancelled-by-user"))},w2))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(c),document.addEventListener("resume",l,!1),Wc()&&document.addEventListener("visibilitychange",u,!1),s=()=>{e.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{s()}}function C2(n){var e,t,i,s,r,o,a,c,l,u;const h=ir();A(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),A(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),A(typeof((r=(s=(i=h==null?void 0:h.cordova)===null||i===void 0?void 0:i.plugins)===null||s===void 0?void 0:s.browsertab)===null||r===void 0?void 0:r.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),A(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),A(typeof((u=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function S2(n){const e=A2(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(s=>s.toString(16).padStart(2,"0")).join("")}function A2(n){if(Pn(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let i=0;i<n.length;i++)t[i]=n.charCodeAt(i);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2=20;class R2 extends aC{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function N2(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:D2(),postBody:null,tenantId:n.tenantId,error:St(n,"no-auth-event")}}function x2(n,e){return np()._set(ip(n),e)}async function iw(n){const e=await np()._get(ip(n));return e&&await np()._remove(ip(n)),e}function P2(n,e){var t,i;const s=M2(e);if(s.includes("/__/auth/callback")){const r=Bl(s),o=r.firebaseError?O2(decodeURIComponent(r.firebaseError)):null,a=(i=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||i===void 0?void 0:i[1],c=a?St(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:s,postBody:null}}return null}function D2(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<k2;t++){const i=Math.floor(Math.random()*e.length);n.push(e.charAt(i))}return n.join("")}function np(){return on(Rm)}function ip(n){return $s("authEvent",n.config.apiKey,n.name)}function O2(n){try{return JSON.parse(n)}catch{return null}}function M2(n){const e=Bl(n),t=e.link?decodeURIComponent(e.link):void 0,i=Bl(t).link,s=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Bl(s).link||s||i||t||n}function Bl(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Nr(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2=500;class F2{constructor(){this._redirectPersistence=tr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=zh,this._overrideRedirectResult=Om}async _initialize(e){const t=e._key();let i=this.eventManagers.get(t);return i||(i=new R2(e),this.eventManagers.set(t,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){kt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,i,s){C2(e);const r=await this._initialize(e);await r.initialized(),r.resetRedirect(),PF(),await this._originValidation(e);const o=N2(e,i,s);await x2(e,o);const a=await I2(e,o,t),c=await T2(a);return b2(e,r,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=E2(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:i,handleOpenURL:s,BuildInfo:r}=ir(),o=setTimeout(async()=>{await iw(e),t.onEvent(sw())},L2),a=async u=>{clearTimeout(o);const h=await iw(e);let d=null;h&&(u!=null&&u.url)&&(d=P2(h,u.url)),t.onEvent(d||sw())};typeof i<"u"&&typeof i.subscribe=="function"&&i.subscribe(null,a);const c=s,l=`${r.packageName.toLowerCase()}://`;ir().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(l)&&a({url:u}),typeof c=="function")try{c(u)}catch(h){console.error(h)}}}}const U2=F2;function sw(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:St("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V2(n,e){Je(n)._logFramework(e)}var B2="@firebase/auth-compat",q2="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2=1e3;function ba(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function j2(){return ba()==="http:"||ba()==="https:"}function hC(n=qe()){return!!((ba()==="file:"||ba()==="ionic:"||ba()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function z2(){return Yu()||zp()}function W2(){return qI()&&(document==null?void 0:document.documentMode)===11}function G2(n=qe()){return/Edge\/\d+/.test(n)}function K2(n=qe()){return W2()||G2(n)}function dC(){try{const n=self.localStorage,e=Kc();if(n)return n.setItem(e,"1"),n.removeItem(e),K2()?La():!0}catch{return Lm()&&La()}return!1}function Lm(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Ud(){return(j2()||BI()||hC())&&!z2()&&dC()&&!Lm()}function fC(){return hC()&&typeof document<"u"}async function H2(){return fC()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},$2);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function Q2(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn={LOCAL:"local",NONE:"none",SESSION:"session"},Jo=A,pC="persistence";function Y2(n,e){if(Jo(Object.values(rn).includes(e),n,"invalid-persistence-type"),Yu()){Jo(e!==rn.SESSION,n,"unsupported-persistence-type");return}if(zp()){Jo(e===rn.NONE,n,"unsupported-persistence-type");return}if(Lm()){Jo(e===rn.NONE||e===rn.LOCAL&&La(),n,"unsupported-persistence-type");return}Jo(e===rn.NONE||dC(),n,"unsupported-persistence-type")}async function sp(n){await n._initializationPromise;const e=gC(),t=$s(pC,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function X2(n,e){const t=gC();if(!t)return[];const i=$s(pC,n,e);switch(t.getItem(i)){case rn.NONE:return[ho];case rn.LOCAL:return[hc,tr];case rn.SESSION:return[tr];default:return[]}}function gC(){var n;try{return((n=Q2())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=A;class Li{constructor(){this.browserResolver=on(p2),this.cordovaResolver=on(U2),this.underlyingResolver=null,this._redirectPersistence=tr,this._completeRedirectFn=zh,this._overrideRedirectResult=Om}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,i,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,i,s)}async _openRedirect(e,t,i,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,i,s)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return fC()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return J2(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await H2();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(n){return n.unwrap()}function Z2(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eU(n){return yC(n)}function tU(n,e){var t;const i=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const s=e;s.resolver=new nU(n,UL(n,e))}else if(i){const s=yC(e),r=e;s&&(r.credential=s,r.tenantId=i.tenantId||void 0,r.email=i.email||void 0,r.phoneNumber=i.phoneNumber||void 0)}}function yC(n){const{_tokenResponse:e}=n instanceof qt?n.customData:n;if(!e)return null;if(!(n instanceof qt)&&"temporaryProof"in e&&"phoneNumber"in e)return nr.credentialFromResult(n);const t=e.providerId;if(!t||t===Xo.PASSWORD)return null;let i;switch(t){case Xo.GOOGLE:i=qn;break;case Xo.FACEBOOK:i=Bn;break;case Xo.GITHUB:i=$n;break;case Xo.TWITTER:i=jn;break;default:const{oauthIdToken:s,oauthAccessToken:r,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!r&&!o&&!s&&!a?null:a?t.startsWith("saml.")?fo._create(t,a):Zn._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:s,accessToken:r}):new $r(t).credential({idToken:s,accessToken:r,rawNonce:c})}return n instanceof qt?i.credentialFromError(n):i.credentialFromResult(n)}function Gt(n,e){return e.catch(t=>{throw t instanceof qt&&tU(n,t),t}).then(t=>{const i=t.operationType,s=t.user;return{operationType:i,credential:eU(t),additionalUserInfo:FL(t),user:ri.getOrCreate(s)}})}async function rp(n,e){const t=await e;return{verificationId:t.verificationId,confirm:i=>Gt(n,t.confirm(i))}}class nU{constructor(e,t){this.resolver=t,this.auth=Z2(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Gt(mC(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this._delegate=e,this.multiFactor=$L(e)}static getOrCreate(e){return ri.USER_MAP.has(e)||ri.USER_MAP.set(e,new ri(e)),ri.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Gt(this.auth,Wb(this._delegate,e))}async linkWithPhoneNumber(e,t){return rp(this.auth,vF(this._delegate,e,t))}async linkWithPopup(e){return Gt(this.auth,kF(this._delegate,e,Li))}async linkWithRedirect(e){return await sp(Je(this.auth)),FF(this._delegate,e,Li)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Gt(this.auth,Gb(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return rp(this.auth,wF(this._delegate,e,t))}reauthenticateWithPopup(e){return Gt(this.auth,AF(this._delegate,e,Li))}async reauthenticateWithRedirect(e){return await sp(Je(this.auth)),MF(this._delegate,e,Li)}sendEmailVerification(e){return SL(this._delegate,e)}async unlink(e){return await dL(this._delegate,e),this}updateEmail(e){return NL(this._delegate,e)}updatePassword(e){return xL(this._delegate,e)}updatePhoneNumber(e){return IF(this._delegate,e)}updateProfile(e){return RL(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return AL(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ri.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=A;class op{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:i}=e.options;Zo(i,"invalid-api-key",{appName:e.name}),Zo(i,"invalid-api-key",{appName:e.name});const s=typeof window<"u"?Li:void 0;this._delegate=t.initialize({options:{persistence:iU(i,e.name),popupRedirectResolver:s}}),this._delegate._updateErrorMap(mM),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ri.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){KM(this._delegate,e,t)}applyActionCode(e){return yL(this._delegate,e)}checkActionCode(e){return Kb(this._delegate,e)}confirmPasswordReset(e,t){return mL(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Gt(this._delegate,vL(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return CL(this._delegate,e)}isSignInWithEmailLink(e){return EL(this._delegate,e)}async getRedirectResult(){Zo(Ud(),this._delegate,"operation-not-supported-in-this-environment");const e=await VF(this._delegate,Li);return e?Gt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){V2(this._delegate,e)}onAuthStateChanged(e,t,i){const{next:s,error:r,complete:o}=rw(e,t,i);return this._delegate.onAuthStateChanged(s,r,o)}onIdTokenChanged(e,t,i){const{next:s,error:r,complete:o}=rw(e,t,i);return this._delegate.onIdTokenChanged(s,r,o)}sendSignInLinkToEmail(e,t){return IL(this._delegate,e,t)}sendPasswordResetEmail(e,t){return gL(this._delegate,e,t||void 0)}async setPersistence(e){Y2(this._delegate,e);let t;switch(e){case rn.SESSION:t=tr;break;case rn.LOCAL:t=await on(hc)._isAvailable()?hc:Rm;break;case rn.NONE:t=ho;break;default:return kt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Gt(this._delegate,hL(this._delegate))}signInWithCredential(e){return Gt(this._delegate,Bh(this._delegate,e))}signInWithCustomToken(e){return Gt(this._delegate,pL(this._delegate,e))}signInWithEmailAndPassword(e,t){return Gt(this._delegate,wL(this._delegate,e,t))}signInWithEmailLink(e,t){return Gt(this._delegate,TL(this._delegate,e,t))}signInWithPhoneNumber(e,t){return rp(this._delegate,_F(this._delegate,e,t))}async signInWithPopup(e){return Zo(Ud(),this._delegate,"operation-not-supported-in-this-environment"),Gt(this._delegate,SF(this._delegate,e,Li))}async signInWithRedirect(e){return Zo(Ud(),this._delegate,"operation-not-supported-in-this-environment"),await sp(this._delegate),DF(this._delegate,e,Li)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return _L(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}op.Persistence=rn;function rw(n,e,t){let i=n;typeof n!="function"&&({next:i,error:e,complete:t}=n);const s=i;return{next:o=>s(o&&ri.getOrCreate(o)),error:e,complete:t}}function iU(n,e){const t=X2(n,e);if(typeof self<"u"&&!t.includes(hc)&&t.push(hc),typeof window<"u")for(const i of[Rm,tr])t.includes(i)||t.push(i);return t.includes(ho)||t.push(ho),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(){this.providerId="phone",this._delegate=new nr(mC(Re.auth()))}static credential(e,t){return nr.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Fm.PHONE_SIGN_IN_METHOD=nr.PHONE_SIGN_IN_METHOD;Fm.PROVIDER_ID=nr.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sU=A;class rU{constructor(e,t,i=Re.app()){var s;sU((s=i.options)===null||s===void 0?void 0:s.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new mF(e,t,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oU="auth-compat";function aU(n){n.INTERNAL.registerComponent(new Rn(oU,e=>{const t=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new op(t,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Cr.EMAIL_SIGNIN,PASSWORD_RESET:Cr.PASSWORD_RESET,RECOVER_EMAIL:Cr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Cr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Cr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Cr.VERIFY_EMAIL}},EmailAuthProvider:us,FacebookAuthProvider:Bn,GithubAuthProvider:$n,GoogleAuthProvider:qn,OAuthProvider:$r,SAMLAuthProvider:wu,PhoneAuthProvider:Fm,PhoneMultiFactorGenerator:uC,RecaptchaVerifier:rU,TwitterAuthProvider:jn,Auth:op,AuthCredential:Mo,Error:qt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(B2,q2)}aU(Re);const ow="@firebase/database",aw="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _C="";function cU(n){_C=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lU{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Fa(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uU{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return mn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new lU(e)}}catch{}return new uU},Ls=vC("localStorage"),ap=vC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new Ic("@firebase/database"),hU=function(){let n=1;return function(){return n++}}(),wC=function(n){const e=LR(n),t=new DR;t.update(e);const i=t.digest();return $p.encodeByteArray(i)},Qc=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Qc.apply(null,i):typeof i=="object"?e+=pt(i):e+=i,e+=" "}return e};let zs=null,cw=!0;const dU=function(n,e){k(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Wr.logLevel=ue.VERBOSE,zs=Wr.log.bind(Wr),e&&ap.set("logging_enabled",!0)):typeof n=="function"?zs=n:(zs=null,ap.remove("logging_enabled"))},Et=function(...n){if(cw===!0&&(cw=!1,zs===null&&ap.get("logging_enabled")===!0&&dU(!0)),zs){const e=Qc.apply(null,n);zs(e)}},Yc=function(n){return function(...e){Et(n,...e)}},cp=function(...n){const e="FIREBASE INTERNAL ERROR: "+Qc(...n);Wr.error(e)},gi=function(...n){const e=`FIREBASE FATAL ERROR: ${Qc(...n)}`;throw Wr.error(e),new Error(e)},jt=function(...n){const e="FIREBASE WARNING: "+Qc(...n);Wr.warn(e)},fU=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&jt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Um=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},pU=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},po="[MIN_NAME]",sr="[MAX_NAME]",yr=function(n,e){if(n===e)return 0;if(n===po||e===sr)return-1;if(e===po||n===sr)return 1;{const t=lw(n),i=lw(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},gU=function(n,e){return n===e?0:n<e?-1:1},ea=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+pt(e))},Vm=function(n){if(typeof n!="object"||n===null)return pt(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=pt(e[i]),t+=":",t+=Vm(n[e[i]]);return t+="}",t},IC=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Rt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const EC=function(n){k(!Um(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,c;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},mU=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yU=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function _U(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const vU=new RegExp("^-?(0*)\\d{1,10}$"),wU=-2147483648,IU=2147483647,lw=function(n){if(vU.test(n)){const e=Number(n);if(e>=wU&&e<=IU)return e}return null},Fo=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw jt("Exception was thrown by user callback.",t),e},Math.floor(0))}},EU=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ca=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TU{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){jt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bU{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',jt(e)}}class Gr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Gr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm="5",TC="v",bC="s",CC="r",SC="f",AC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,kC="ls",RC="p",lp="ac",NC="websocket",xC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,t,i,s,r=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ls.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ls.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function CU(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function DC(n,e,t){k(typeof e=="string","typeof type must == string"),k(typeof t=="object","typeof params must == object");let i;if(e===NC)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===xC)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);CU(n)&&(t.ns=n.namespace);const s=[];return Rt(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SU{constructor(){this.counters_={}}incrementCounter(e,t=1){mn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return mR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd={},Bd={};function qm(n){const e=n.toString();return Vd[e]||(Vd[e]=new SU),Vd[e]}function AU(n,e){const t=n.toString();return Bd[t]||(Bd[t]=e()),Bd[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kU{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Fo(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw="start",RU="close",NU="pLPCommand",xU="pRTLPCB",OC="id",MC="pw",LC="ser",PU="cb",DU="seg",OU="ts",MU="d",LU="dframe",FC=1870,UC=30,FU=FC-UC,UU=25e3,VU=3e4;class Pr{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Yc(e),this.stats_=qm(t),this.urlFn=c=>(this.appCheckToken&&(c[lp]=this.appCheckToken),DC(t,xC,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new kU(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(VU)),pU(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $m((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===uw)this.id=a,this.password=c;else if(o===RU)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[uw]="t",i[LC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[PU]=this.scriptTagHolder.uniqueCallbackIdentifier),i[TC]=Bm,this.transportSessionId&&(i[bC]=this.transportSessionId),this.lastSessionId&&(i[kC]=this.lastSessionId),this.applicationId&&(i[RC]=this.applicationId),this.appCheckToken&&(i[lp]=this.appCheckToken),typeof location<"u"&&location.hostname&&AC.test(location.hostname)&&(i[CC]=SC);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Pr.forceAllow_=!0}static forceDisallow(){Pr.forceDisallow_=!0}static isAvailable(){return Pr.forceAllow_?!0:!Pr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!mU()&&!yU()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=pt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=FI(t),s=IC(i,FU);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[LU]="t",i[OC]=e,i[MC]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=pt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class $m{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=hU(),window[NU+this.uniqueCallbackIdentifier]=e,window[xU+this.uniqueCallbackIdentifier]=t,this.myIFrame=$m.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Et("frame writing exception"),a.stack&&Et(a.stack),Et(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Et("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[OC]=this.myID,e[MC]=this.myPW,e[LC]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+UC+i.length<=FC;){const o=this.pendingSegs.shift();i=i+"&"+DU+s+"="+o.seg+"&"+OU+s+"="+o.ts+"&"+MU+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(UU)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Et("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BU=16384,qU=45e3;let bu=null;typeof MozWebSocket<"u"?bu=MozWebSocket:typeof WebSocket<"u"&&(bu=WebSocket);class En{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Yc(this.connId),this.stats_=qm(t),this.connURL=En.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[TC]=Bm,typeof location<"u"&&location.hostname&&AC.test(location.hostname)&&(o[CC]=SC),t&&(o[bC]=t),i&&(o[kC]=i),s&&(o[lp]=s),r&&(o[RC]=r),DC(e,NC,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ls.set("previous_websocket_failure",!0);try{let i;$I(),this.mySock=new bu(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){En.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&bu!==null&&!En.forceDisallow_}static previouslyFailed(){return Ls.isInMemoryStorage||Ls.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ls.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Fa(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=pt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=IC(t,BU);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qU))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}En.responsesRequiredToBeHealthy=2;En.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Pr,En]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=En&&En.isAvailable();let i=t&&!En.previouslyFailed();if(e.webSocketOnly&&(t||jt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[En];else{const s=this.transports_=[];for(const r of dc.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);dc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}dc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $U=6e4,jU=5e3,zU=10*1024,WU=100*1024,qd="t",hw="d",GU="s",dw="r",KU="e",fw="o",pw="a",gw="n",mw="p",HU="h";class QU{constructor(e,t,i,s,r,o,a,c,l,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Yc("c:"+this.id+":"),this.transportManager_=new dc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ca(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>WU?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zU?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qd in e){const t=e[qd];t===pw?this.upgradeIfSecondaryHealthy_():t===dw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===fw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ea("t",e),i=ea("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:mw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ea("t",e),i=ea("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ea(qd,e);if(hw in e){const i=e[hw];if(t===HU){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===gw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===GU?this.onConnectionShutdown_(i):t===dw?this.onReset_(i):t===KU?cp("Server Error: "+i):t===fw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):cp("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Bm!==i&&jt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Ca(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($U))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ca(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(jU))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:mw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ls.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){k(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu extends BC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!jp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Cu}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=32,_w=768;class be{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ge(){return new be("")}function re(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ns(n){return n.pieces_.length-n.pieceNum_}function xe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new be(n.pieces_,e)}function jm(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function YU(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function fc(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function qC(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new be(e,0)}function ze(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof be)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new be(t,0)}function ae(n){return n.pieceNum_>=n.pieces_.length}function Yt(n,e){const t=re(n),i=re(e);if(t===null)return e;if(t===i)return Yt(xe(n),xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function XU(n,e){const t=fc(n,0),i=fc(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=yr(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function zm(n,e){if(ns(n)!==ns(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function fn(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(ns(n)>ns(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class JU{constructor(e,t){this.errorPrefix_=t,this.parts_=fc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ju(this.parts_[i]);$C(this)}}function ZU(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ju(e),$C(n)}function eV(n){const e=n.parts_.pop();n.byteLength_-=Ju(e),n.parts_.length>0&&(n.byteLength_-=1)}function $C(n){if(n.byteLength_>_w)throw new Error(n.errorPrefix_+"has a key path longer than "+_w+" bytes ("+n.byteLength_+").");if(n.parts_.length>yw)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yw+") or object contains a cycle "+ws(n))}function ws(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm extends BC{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Wm}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=1e3,tV=60*5*1e3,vw=30*1e3,nV=1.3,iV=3e4,sV="server_kill",ww=3;class li extends VC{constructor(e,t,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=li.nextPersistentConnectionId_++,this.log_=Yc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ta,this.maxReconnectDelay_=tV,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!$I())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Cu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(pt(r)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new wc,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;li.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&mn(e,"w")){const i=Xr(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();jt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||PR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=xR(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pt(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):cp("Unrecognized action received from server: "+pt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ta,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ta,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>iV&&(this.reconnectDelay_=ta),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nV)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+li.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(h){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Et("getToken() completed but was canceled"):(Et("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new QU(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{jt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(sV)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&jt(h),c())}}}interrupt(e){Et("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Et("Resuming connection for reason: "+e),delete this.interruptReasons_[e],df(this.interruptReasons_)&&(this.reconnectDelay_=ta,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Vm(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new be(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Et("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ww&&(this.reconnectDelay_=vw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Et("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ww&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+_C.replace(/\./g,"-")]=1,jp()?e["framework.cordova"]=1:Yu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Cu.getInstance().currentlyOnline();return df(this.interruptReasons_)&&e}}li.nextPersistentConnectionId_=0;li.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new oe(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new oe(po,e),s=new oe(po,t);return this.compare(i,s)!==0}minPost(){return oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Il;class jC extends Wh{static get __EMPTY_NODE(){return Il}static set __EMPTY_NODE(e){Il=e}compare(e,t){return yr(e.name,t.name)}isDefinedOn(e){throw Eo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return oe.MIN}maxPost(){return new oe(sr,Il)}makePost(e,t){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,Il)}toString(){return".key"}}const Kr=new jC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class dt{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??dt.RED,this.left=s??Xt.EMPTY_NODE,this.right=r??Xt.EMPTY_NODE}copy(e,t,i,s,r){return new dt(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Xt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Xt.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}dt.RED=!0;dt.BLACK=!1;class rV{copy(e,t,i,s,r){return this}insert(e,t,i){return new dt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Xt{constructor(e,t=Xt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Xt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,dt.BLACK,null,null))}remove(e){return new Xt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,dt.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new El(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new El(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new El(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new El(this.root_,null,this.comparator_,!0,e)}}Xt.EMPTY_NODE=new rV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oV(n,e){return yr(n.name,e.name)}function Gm(n,e){return yr(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let up;function aV(n){up=n}const zC=function(n){return typeof n=="number"?"number:"+EC(n):"string:"+n},WC=function(n){if(n.isLeafNode()){const e=n.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mn(e,".sv"),"Priority must be a string or number.")}else k(n===up||n.isEmpty(),"priority of unexpected type.");k(n===up||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iw;class lt{constructor(e,t=lt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),WC(this.priorityNode_)}static set __childrenNodeConstructor(e){Iw=e}static get __childrenNodeConstructor(){return Iw}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new lt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:re(e)===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:lt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=re(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(k(i!==".priority"||ns(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,lt.__childrenNodeConstructor.EMPTY_NODE.updateChild(xe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zC(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=EC(this.value_):e+=this.value_,this.lazyHash_=wC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===lt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof lt.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=lt.VALUE_TYPE_ORDER.indexOf(t),r=lt.VALUE_TYPE_ORDER.indexOf(i);return k(s>=0,"Unknown leaf type: "+t),k(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}lt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GC,KC;function cV(n){GC=n}function lV(n){KC=n}class uV extends Wh{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?yr(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(sr,new lt("[PRIORITY-POST]",KC))}makePost(e,t){const i=GC(e);return new oe(t,new lt("[PRIORITY-POST]",i))}toString(){return".priority"}}const We=new uV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hV=Math.log(2);class dV{constructor(e){const t=r=>parseInt(Math.log(r)/hV,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Su=function(n,e,t,i){n.sort(e);const s=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=n[c],d=t?t(h):h,new dt(d,h.node,dt.BLACK,null,null);{const f=parseInt(u/2,10)+c,m=s(c,f),y=s(f+1,l);return h=n[f],d=t?t(h):h,new dt(d,h.node,dt.BLACK,m,y)}},r=function(c){let l=null,u=null,h=n.length;const d=function(m,y){const E=h-m,V=h;h-=m;const W=s(E+1,V),U=n[E],M=t?t(U):U;f(new dt(M,U.node,y,null,W))},f=function(m){l?(l.left=m,l=m):(u=m,l=m)};for(let m=0;m<c.count;++m){const y=c.nextBitIsOne(),E=Math.pow(2,c.count-(m+1));y?d(E,dt.BLACK):(d(E,dt.BLACK),d(E,dt.RED))}return u},o=new dV(n.length),a=r(o);return new Xt(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $d;const Sr={};class oi{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return k(Sr&&We,"ChildrenNode.ts has not been loaded"),$d=$d||new oi({".priority":Sr},{".priority":We}),$d}get(e){const t=Xr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Xt?t:null}hasIndex(e){return mn(this.indexSet_,e.toString())}addIndex(e,t){k(e!==Kr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(oe.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Su(i,e.getCompare()):a=Sr;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new oi(u,l)}addToIndexes(e,t){const i=Xl(this.indexes_,(s,r)=>{const o=Xr(this.indexSet_,r);if(k(o,"Missing index implementation for "+r),s===Sr)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(oe.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Su(a,o.getCompare())}else return Sr;else{const a=t.get(e.name);let c=s;return a&&(c=c.remove(new oe(e.name,a))),c.insert(e,e.node)}});return new oi(i,this.indexSet_)}removeFromIndexes(e,t){const i=Xl(this.indexes_,s=>{if(s===Sr)return s;{const r=t.get(e.name);return r?s.remove(new oe(e.name,r)):s}});return new oi(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na;class X{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&WC(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return na||(na=new X(new Xt(Gm),null,oi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||na}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?na:t}}getChild(e){const t=re(e);return t===null?this:this.getImmediateChild(t).getChild(xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(k(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new oe(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?na:this.priorityNode_;return new X(s,o,r)}}updateChild(e,t){const i=re(e);if(i===null)return t;{k(re(e)!==".priority"||ns(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(xe(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(We,(o,a)=>{t[o]=a.val(e),i++,r&&X.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zC(this.getPriority().val())+":"),this.forEachChild(We,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":wC(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new oe(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new oe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new oe(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,oe.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xc?-1:0}withIndex(e){if(e===Kr||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Kr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(We),s=t.getIterator(We);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Kr?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fV extends X{constructor(){super(new Xt(Gm),X.EMPTY_NODE,oi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const Xc=new fV;Object.defineProperties(oe,{MIN:{value:new oe(po,X.EMPTY_NODE)},MAX:{value:new oe(sr,Xc)}});jC.__EMPTY_NODE=X.EMPTY_NODE;lt.__childrenNodeConstructor=X;aV(Xc);lV(Xc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pV=!0;function ft(n,e=null){if(n===null)return X.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new lt(t,ft(e))}if(!(n instanceof Array)&&pV){const t=[];let i=!1;if(Rt(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=ft(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new oe(o,c)))}}),t.length===0)return X.EMPTY_NODE;const r=Su(t,oV,o=>o.name,Gm);if(i){const o=Su(t,We.getCompare());return new X(r,ft(e),new oi({".priority":o},{".priority":We}))}else return new X(r,ft(e),oi.Default)}else{let t=X.EMPTY_NODE;return Rt(n,(i,s)=>{if(mn(n,i)&&i.substring(0,1)!=="."){const r=ft(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(ft(e))}}cV(ft);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gV extends Wh{constructor(e){super(),this.indexPath_=e,k(!ae(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?yr(e.name,t.name):r}makePost(e,t){const i=ft(e),s=X.EMPTY_NODE.updateChild(this.indexPath_,i);return new oe(t,s)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,Xc);return new oe(sr,e)}toString(){return fc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mV extends Wh{compare(e,t){const i=e.node.compareTo(t.node);return i===0?yr(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,t){const i=ft(e);return new oe(t,i)}toString(){return".value"}}const yV=new mV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(n){return{type:"value",snapshotNode:n}}function go(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function pc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function gc(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function _V(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(pc(t,a)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(go(t,i)):o.trackChildChange(gc(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(We,(s,r)=>{t.hasChild(s)||i.trackChildChange(pc(s,r))}),t.isLeafNode()||t.forEachChild(We,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(gc(s,r,o))}else i.trackChildChange(go(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e){this.indexedFilter_=new Km(e.getIndex()),this.index_=e.getIndex(),this.startPost_=mc.getStartPost_(e),this.endPost_=mc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new oe(t,i))||(i=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=X.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(X.EMPTY_NODE);const r=this;return t.forEachChild(We,(o,a)=>{r.matches(new oe(o,a))||(s=s.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vV{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new mc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new oe(t,i))||(i=X.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=X.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(X.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;k(a.numChildren()===this.limit_,"");const c=new oe(t,i),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,c);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(gc(t,i,h)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(pc(t,h));const y=a.updateImmediateChild(t,X.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(go(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return i.isEmpty()?e:u&&o(l,c)>=0?(r!=null&&(r.trackChildChange(pc(l.name,l.node)),r.trackChildChange(go(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(l.name,X.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=We}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:po}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:sr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===We}copy(){const e=new Hm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wV(n){return n.loadsAllData()?new Km(n.getIndex()):n.hasLimit()?new vV(n):new mc(n)}function Ew(n){const e={};if(n.isDefault())return e;let t;if(n.index_===We?t="$priority":n.index_===yV?t="$value":n.index_===Kr?t="$key":(k(n.index_ instanceof gV,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=pt(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=pt(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+pt(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=pt(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+pt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Tw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==We&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends VC{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Yc("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Au.getListenId_(e,i),a={};this.listens_[o]=a;const c=Ew(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,i),Xr(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",s(d,null)}})}unlisten(e,t){const i=Au.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Ew(e._queryParams),i=e._path.toString(),s=new wc;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+lr(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Fa(a.responseText)}catch{jt("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&jt("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IV{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(){return{value:null,children:new Map}}function QC(n,e,t){if(ae(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=re(e);n.children.has(i)||n.children.set(i,ku());const s=n.children.get(i);e=xe(e),QC(s,e,t)}}function hp(n,e,t){n.value!==null?t(e,n.value):EV(n,(i,s)=>{const r=new be(e.toString()+"/"+i);hp(s,r,t)})}function EV(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TV{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Rt(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=10*1e3,bV=30*1e3,CV=5*60*1e3;class SV{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new TV(e);const i=bw+(bV-bw)*Math.random();Ca(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Rt(e,(s,r)=>{r>0&&mn(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Ca(this.reportStats_.bind(this),Math.floor(Math.random()*2*CV))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Cn||(Cn={}));function Qm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ym(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xm(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Cn.ACK_USER_WRITE,this.source=Qm()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new be(e));return new Ru(ge(),t,this.revert)}}else return k(re(this.path)===e,"operationForChild called for unrelated child."),new Ru(xe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t){this.source=e,this.path=t,this.type=Cn.LISTEN_COMPLETE}operationForChild(e){return ae(this.path)?new yc(this.source,ge()):new yc(this.source,xe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Cn.OVERWRITE}operationForChild(e){return ae(this.path)?new rr(this.source,ge(),this.snap.getImmediateChild(e)):new rr(this.source,xe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Cn.MERGE}operationForChild(e){if(ae(this.path)){const t=this.children.subtree(new be(e));return t.isEmpty()?null:t.value?new rr(this.source,ge(),t.value):new mo(this.source,ge(),t)}else return k(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new mo(this.source,xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const t=re(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function kV(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(_V(o.childName,o.snapshotNode))}),ia(n,s,"child_removed",e,i,t),ia(n,s,"child_added",e,i,t),ia(n,s,"child_moved",r,i,t),ia(n,s,"child_changed",e,i,t),ia(n,s,"value",e,i,t),s}function ia(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,c)=>NV(n,a,c)),o.forEach(a=>{const c=RV(n,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function RV(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function NV(n,e,t){if(e.childName==null||t.childName==null)throw Eo("Should only compare child_ events.");const i=new oe(e.childName,e.snapshotNode),s=new oe(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n,e){return{eventCache:n,serverCache:e}}function Sa(n,e,t,i){return Gh(new or(e,t,i),n.serverCache)}function YC(n,e,t,i){return Gh(n.eventCache,new or(e,t,i))}function dp(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ar(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jd;const xV=()=>(jd||(jd=new Xt(gU)),jd);class Ne{constructor(e,t=xV()){this.value=e,this.children=t}static fromObject(e){let t=new Ne(null);return Rt(e,(i,s)=>{t=t.set(new be(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ge(),value:this.value};if(ae(e))return null;{const i=re(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(xe(e),t);return r!=null?{path:ze(new be(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const t=re(e),i=this.children.get(t);return i!==null?i.subtree(xe(e)):new Ne(null)}}set(e,t){if(ae(e))return new Ne(t,this.children);{const i=re(e),r=(this.children.get(i)||new Ne(null)).set(xe(e),t),o=this.children.insert(i,r);return new Ne(this.value,o)}}remove(e){if(ae(e))return this.children.isEmpty()?new Ne(null):new Ne(null,this.children);{const t=re(e),i=this.children.get(t);if(i){const s=i.remove(xe(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new Ne(null):new Ne(this.value,r)}else return this}}get(e){if(ae(e))return this.value;{const t=re(e),i=this.children.get(t);return i?i.get(xe(e)):null}}setTree(e,t){if(ae(e))return t;{const i=re(e),r=(this.children.get(i)||new Ne(null)).setTree(xe(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Ne(this.value,o)}}fold(e){return this.fold_(ge(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(ze(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,ge(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(ae(e))return null;{const r=re(e),o=this.children.get(r);return o?o.findOnPath_(xe(e),ze(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ge(),t)}foreachOnPath_(e,t,i){if(ae(e))return this;{this.value&&i(t,this.value);const s=re(e),r=this.children.get(s);return r?r.foreachOnPath_(xe(e),ze(t,s),i):new Ne(null)}}foreach(e){this.foreach_(ge(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(ze(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.writeTree_=e}static empty(){return new kn(new Ne(null))}}function Aa(n,e,t){if(ae(e))return new kn(new Ne(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Yt(s,e);return r=r.updateChild(o,t),new kn(n.writeTree_.set(s,r))}else{const s=new Ne(t),r=n.writeTree_.setTree(e,s);return new kn(r)}}}function fp(n,e,t){let i=n;return Rt(t,(s,r)=>{i=Aa(i,ze(e,s),r)}),i}function Cw(n,e){if(ae(e))return kn.empty();{const t=n.writeTree_.setTree(e,new Ne(null));return new kn(t)}}function pp(n,e){return _r(n,e)!=null}function _r(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Yt(t.path,e)):null}function Sw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(We,(i,s)=>{e.push(new oe(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new oe(i,s.value))}),e}function qi(n,e){if(ae(e))return n;{const t=_r(n,e);return t!=null?new kn(new Ne(t)):new kn(n.writeTree_.subtree(e))}}function gp(n){return n.writeTree_.isEmpty()}function yo(n,e){return XC(ge(),n.writeTree_,e)}function XC(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(k(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=XC(ze(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(ze(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(n,e){return tS(e,n)}function PV(n,e,t,i,s){k(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Aa(n.visibleWrites,e,t)),n.lastWriteId=i}function DV(n,e,t,i){k(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=fp(n.visibleWrites,e,t),n.lastWriteId=i}function OV(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function MV(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);k(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&LV(a,i.path)?s=!1:fn(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return FV(n),!0;if(i.snap)n.visibleWrites=Cw(n.visibleWrites,i.path);else{const a=i.children;Rt(a,c=>{n.visibleWrites=Cw(n.visibleWrites,ze(i.path,c))})}return!0}else return!1}function LV(n,e){if(n.snap)return fn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&fn(ze(n.path,t),e))return!0;return!1}function FV(n){n.visibleWrites=JC(n.allWrites,UV,ge()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function UV(n){return n.visible}function JC(n,e,t){let i=kn.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)fn(t,o)?(a=Yt(t,o),i=Aa(i,a,r.snap)):fn(o,t)&&(a=Yt(o,t),i=Aa(i,ge(),r.snap.getChild(a)));else if(r.children){if(fn(t,o))a=Yt(t,o),i=fp(i,a,r.children);else if(fn(o,t))if(a=Yt(o,t),ae(a))i=fp(i,ge(),r.children);else{const c=Xr(r.children,re(a));if(c){const l=c.getChild(xe(a));i=Aa(i,ge(),l)}}}else throw Eo("WriteRecord should have .snap or .children")}}return i}function ZC(n,e,t,i,s){if(!i&&!s){const r=_r(n.visibleWrites,e);if(r!=null)return r;{const o=qi(n.visibleWrites,e);if(gp(o))return t;if(t==null&&!pp(o,ge()))return null;{const a=t||X.EMPTY_NODE;return yo(o,a)}}}else{const r=qi(n.visibleWrites,e);if(!s&&gp(r))return t;if(!s&&t==null&&!pp(r,ge()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(fn(l.path,e)||fn(e,l.path))},a=JC(n.allWrites,o,e),c=t||X.EMPTY_NODE;return yo(a,c)}}}function VV(n,e,t){let i=X.EMPTY_NODE;const s=_r(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(We,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=qi(n.visibleWrites,e);return t.forEachChild(We,(o,a)=>{const c=yo(qi(r,new be(o)),a);i=i.updateImmediateChild(o,c)}),Sw(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=qi(n.visibleWrites,e);return Sw(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function BV(n,e,t,i,s){k(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ze(e,t);if(pp(n.visibleWrites,r))return null;{const o=qi(n.visibleWrites,r);return gp(o)?s.getChild(t):yo(o,s.getChild(t))}}function qV(n,e,t,i){const s=ze(e,t),r=_r(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=qi(n.visibleWrites,s);return yo(o,i.getNode().getImmediateChild(t))}else return null}function $V(n,e){return _r(n.visibleWrites,e)}function jV(n,e,t,i,s,r,o){let a;const c=qi(n.visibleWrites,e),l=_r(c,ge());if(l!=null)a=l;else if(t!=null)a=yo(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function zV(){return{visibleWrites:kn.empty(),allWrites:[],lastWriteId:-1}}function Nu(n,e,t,i){return ZC(n.writeTree,n.treePath,e,t,i)}function Zm(n,e){return VV(n.writeTree,n.treePath,e)}function Aw(n,e,t,i){return BV(n.writeTree,n.treePath,e,t,i)}function xu(n,e){return $V(n.writeTree,ze(n.treePath,e))}function WV(n,e,t,i,s,r){return jV(n.writeTree,n.treePath,e,t,i,s,r)}function ey(n,e,t){return qV(n.writeTree,n.treePath,e,t)}function eS(n,e){return tS(ze(n.treePath,e),n.writeTree)}function tS(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GV{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;k(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),k(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,gc(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,pc(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,go(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,gc(i,e.snapshotNode,s.oldSnap));else throw Eo("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KV{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const nS=new KV;class ty{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new or(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ey(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ar(this.viewCache_),r=WV(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HV(n){return{filter:n}}function QV(n,e){k(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function YV(n,e,t,i,s){const r=new GV;let o,a;if(t.type===Cn.OVERWRITE){const l=t;l.source.fromUser?o=mp(n,e,l.path,l.snap,i,s,r):(k(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!ae(l.path),o=Pu(n,e,l.path,l.snap,i,s,a,r))}else if(t.type===Cn.MERGE){const l=t;l.source.fromUser?o=JV(n,e,l.path,l.children,i,s,r):(k(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=yp(n,e,l.path,l.children,i,s,a,r))}else if(t.type===Cn.ACK_USER_WRITE){const l=t;l.revert?o=tB(n,e,l.path,i,s,r):o=ZV(n,e,l.path,l.affectedTree,i,s,r)}else if(t.type===Cn.LISTEN_COMPLETE)o=eB(n,e,t.path,i,r);else throw Eo("Unknown operation type: "+t.type);const c=r.getChanges();return XV(e,o,c),{viewCache:o,changes:c}}function XV(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=dp(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(HC(dp(e)))}}function iS(n,e,t,i,s,r){const o=e.eventCache;if(xu(i,t)!=null)return e;{let a,c;if(ae(t))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=ar(e),u=l instanceof X?l:X.EMPTY_NODE,h=Zm(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=Nu(i,ar(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=re(t);if(l===".priority"){k(ns(t)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Aw(i,t,u,c);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=xe(t);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=Aw(i,t,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=ey(i,l,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),l,h,u,s,r):a=o.getNode()}}return Sa(e,a,o.isFullyInitialized()||ae(t),n.filter.filtersNodes())}}function Pu(n,e,t,i,s,r,o,a){const c=e.serverCache;let l;const u=o?n.filter:n.filter.getIndexedFilter();if(ae(t))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(t,i);l=u.updateFullNode(c.getNode(),f,null)}else{const f=re(t);if(!c.isCompleteForPath(t)&&ns(t)>1)return e;const m=xe(t),E=c.getNode().getImmediateChild(f).updateChild(m,i);f===".priority"?l=u.updatePriority(c.getNode(),E):l=u.updateChild(c.getNode(),f,E,m,nS,null)}const h=YC(e,l,c.isFullyInitialized()||ae(t),u.filtersNodes()),d=new ty(s,h,r);return iS(n,h,t,s,d,a)}function mp(n,e,t,i,s,r,o){const a=e.eventCache;let c,l;const u=new ty(s,e,r);if(ae(t))l=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=Sa(e,l,!0,n.filter.filtersNodes());else{const h=re(t);if(h===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),i),c=Sa(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=xe(t),f=a.getNode().getImmediateChild(h);let m;if(ae(d))m=i;else{const y=u.getCompleteChild(h);y!=null?jm(d)===".priority"&&y.getChild(qC(d)).isEmpty()?m=y:m=y.updateChild(d,i):m=X.EMPTY_NODE}if(f.equals(m))c=e;else{const y=n.filter.updateChild(a.getNode(),h,m,d,u,o);c=Sa(e,y,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function kw(n,e){return n.eventCache.isCompleteForChild(e)}function JV(n,e,t,i,s,r,o){let a=e;return i.foreach((c,l)=>{const u=ze(t,c);kw(e,re(u))&&(a=mp(n,a,u,l,s,r,o))}),i.foreach((c,l)=>{const u=ze(t,c);kw(e,re(u))||(a=mp(n,a,u,l,s,r,o))}),a}function Rw(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function yp(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;ae(t)?l=i:l=new Ne(null).setTree(t,i);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=Rw(n,f,d);c=Pu(n,c,new be(h),m,s,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),y=Rw(n,m,d);c=Pu(n,c,new be(h),y,s,r,o,a)}}),c}function ZV(n,e,t,i,s,r,o){if(xu(s,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(ae(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Pu(n,e,t,c.getNode().getChild(t),s,r,a,o);if(ae(t)){let l=new Ne(null);return c.getNode().forEachChild(Kr,(u,h)=>{l=l.set(new be(u),h)}),yp(n,e,t,l,s,r,a,o)}else return e}else{let l=new Ne(null);return i.foreach((u,h)=>{const d=ze(t,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),yp(n,e,t,l,s,r,a,o)}}function eB(n,e,t,i,s){const r=e.serverCache,o=YC(e,r.getNode(),r.isFullyInitialized()||ae(t),r.isFiltered());return iS(n,o,t,i,nS,s)}function tB(n,e,t,i,s,r){let o;if(xu(i,t)!=null)return e;{const a=new ty(i,e,s),c=e.eventCache.getNode();let l;if(ae(t)||re(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Nu(i,ar(e));else{const h=e.serverCache.getNode();k(h instanceof X,"serverChildren would be complete if leaf node"),u=Zm(i,h)}u=u,l=n.filter.updateFullNode(c,u,r)}else{const u=re(t);let h=ey(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=n.filter.updateChild(c,u,h,xe(t),a,r):e.eventCache.getNode().hasChild(u)?l=n.filter.updateChild(c,u,X.EMPTY_NODE,xe(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Nu(i,ar(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||xu(i,ge())!=null,Sa(e,l,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nB{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Km(i.getIndex()),r=wV(i);this.processor_=HV(r);const o=t.serverCache,a=t.eventCache,c=s.updateFullNode(X.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(X.EMPTY_NODE,a.getNode(),null),u=new or(c,o.isFullyInitialized(),s.filtersNodes()),h=new or(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Gh(h,u),this.eventGenerator_=new AV(this.query_)}get query(){return this.query_}}function iB(n){return n.viewCache_.serverCache.getNode()}function sB(n,e){const t=ar(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ae(e)&&!t.getImmediateChild(re(e)).isEmpty())?t.getChild(e):null}function Nw(n){return n.eventRegistrations_.length===0}function rB(n,e){n.eventRegistrations_.push(e)}function xw(n,e,t){const i=[];if(t){k(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Pw(n,e,t,i){e.type===Cn.MERGE&&e.source.queryId!==null&&(k(ar(n.viewCache_),"We should always have a full cache before handling merges"),k(dp(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=YV(n.processor_,s,e,t,i);return QV(n.processor_,r.viewCache),k(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,sS(n,r.changes,r.viewCache.eventCache.getNode(),null)}function oB(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(We,(r,o)=>{i.push(go(r,o))}),t.isFullyInitialized()&&i.push(HC(t.getNode())),sS(n,i,t.getNode(),e)}function sS(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return kV(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Du;class aB{constructor(){this.views=new Map}}function cB(n){k(!Du,"__referenceConstructor has already been defined"),Du=n}function lB(){return k(Du,"Reference.ts has not been loaded"),Du}function uB(n){return n.views.size===0}function ny(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return k(r!=null,"SyncTree gave us an op for an invalid query."),Pw(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Pw(o,e,t,i));return r}}function hB(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Nu(t,s?i:null),c=!1;a?c=!0:i instanceof X?(a=Zm(t,i),c=!1):(a=X.EMPTY_NODE,c=!1);const l=Gh(new or(a,c,!1),new or(i,s,!1));return new nB(e,l)}return o}function dB(n,e,t,i,s,r){const o=hB(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),rB(o,t),oB(o,t)}function fB(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=is(n);if(s==="default")for(const[c,l]of n.views.entries())o=o.concat(xw(l,t,i)),Nw(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(s);c&&(o=o.concat(xw(c,t,i)),Nw(c)&&(n.views.delete(s),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!is(n)&&r.push(new(lB())(e._repo,e._path)),{removed:r,events:o}}function rS(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Hr(n,e){let t=null;for(const i of n.views.values())t=t||sB(i,e);return t}function oS(n,e){if(e._queryParams.loadsAllData())return Kh(n);{const i=e._queryIdentifier;return n.views.get(i)}}function aS(n,e){return oS(n,e)!=null}function is(n){return Kh(n)!=null}function Kh(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou;function pB(n){k(!Ou,"__referenceConstructor has already been defined"),Ou=n}function gB(){return k(Ou,"Reference.ts has not been loaded"),Ou}let mB=1;class Dw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ne(null),this.pendingWriteTree_=zV(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function cS(n,e,t,i,s){return PV(n.pendingWriteTree_,e,t,i,s),s?Uo(n,new rr(Qm(),e,t)):[]}function yB(n,e,t,i){DV(n.pendingWriteTree_,e,t,i);const s=Ne.fromObject(t);return Uo(n,new mo(Qm(),e,s))}function Fi(n,e,t=!1){const i=OV(n.pendingWriteTree_,e);if(MV(n.pendingWriteTree_,e)){let r=new Ne(null);return i.snap!=null?r=r.set(ge(),!0):Rt(i.children,o=>{r=r.set(new be(o),!0)}),Uo(n,new Ru(i.path,r,t))}else return[]}function Hh(n,e,t){return Uo(n,new rr(Ym(),e,t))}function _B(n,e,t){const i=Ne.fromObject(t);return Uo(n,new mo(Ym(),e,i))}function vB(n,e){return Uo(n,new yc(Ym(),e))}function wB(n,e,t){const i=sy(n,t);if(i){const s=ry(i),r=s.path,o=s.queryId,a=Yt(r,e),c=new yc(Xm(o),a);return oy(n,r,c)}else return[]}function _p(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||aS(o,e))){const c=fB(o,e,t,i);uB(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!s){const u=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>is(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=TB(d);for(let m=0;m<f.length;++m){const y=f[m],E=y.query,V=hS(n,y);n.listenProvider_.startListening(ka(E),Mu(n,E),V.hashFn,V.onComplete)}}}!h&&l.length>0&&!i&&(u?n.listenProvider_.stopListening(ka(e),null):l.forEach(d=>{const f=n.queryToTagMap.get(Qh(d));n.listenProvider_.stopListening(ka(d),f)}))}bB(n,l)}return a}function IB(n,e,t,i){const s=sy(n,i);if(s!=null){const r=ry(s),o=r.path,a=r.queryId,c=Yt(o,e),l=new rr(Xm(a),c,t);return oy(n,o,l)}else return[]}function EB(n,e,t,i){const s=sy(n,i);if(s){const r=ry(s),o=r.path,a=r.queryId,c=Yt(o,e),l=Ne.fromObject(t),u=new mo(Xm(a),c,l);return oy(n,o,u)}else return[]}function Ow(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(d,f)=>{const m=Yt(d,s);r=r||Hr(f,m),o=o||is(f)});let a=n.syncPointTree_.get(s);a?(o=o||is(a),r=r||Hr(a,ge())):(a=new aB,n.syncPointTree_=n.syncPointTree_.set(s,a));let c;r!=null?c=!0:(c=!1,r=X.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,m)=>{const y=Hr(m,ge());y&&(r=r.updateImmediateChild(f,y))}));const l=aS(a,e);if(!l&&!e._queryParams.loadsAllData()){const d=Qh(e);k(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=CB();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=Jm(n.pendingWriteTree_,s);let h=dB(a,e,t,u,r,c);if(!l&&!o&&!i){const d=oS(a,e);h=h.concat(SB(n,e,d))}return h}function iy(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=Yt(o,e),l=Hr(a,c);if(l)return l});return ZC(s,e,r,t,!0)}function Uo(n,e){return lS(e,n.syncPointTree_,null,Jm(n.pendingWriteTree_,ge()))}function lS(n,e,t,i){if(ae(n.path))return uS(n,e,t,i);{const s=e.get(ge());t==null&&s!=null&&(t=Hr(s,ge()));let r=[];const o=re(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,u=eS(i,o);r=r.concat(lS(a,c,l,u))}return s&&(r=r.concat(ny(s,n,i,t))),r}}function uS(n,e,t,i){const s=e.get(ge());t==null&&s!=null&&(t=Hr(s,ge()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=eS(i,o),u=n.operationForChild(o);u&&(r=r.concat(uS(u,a,c,l)))}),s&&(r=r.concat(ny(s,n,i,t))),r}function hS(n,e){const t=e.query,i=Mu(n,t);return{hashFn:()=>(iB(e)||X.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?wB(n,t._path,i):vB(n,t._path);{const r=_U(s,t);return _p(n,t,null,r)}}}}function Mu(n,e){const t=Qh(e);return n.queryToTagMap.get(t)}function Qh(n){return n._path.toString()+"$"+n._queryIdentifier}function sy(n,e){return n.tagToQueryMap.get(e)}function ry(n){const e=n.indexOf("$");return k(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new be(n.substr(0,e))}}function oy(n,e,t){const i=n.syncPointTree_.get(e);k(i,"Missing sync point for query tag that we're tracking");const s=Jm(n.pendingWriteTree_,e);return ny(i,t,s,null)}function TB(n){return n.fold((e,t,i)=>{if(t&&is(t))return[Kh(t)];{let s=[];return t&&(s=rS(t)),Rt(i,(r,o)=>{s=s.concat(o)}),s}})}function ka(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(gB())(n._repo,n._path):n}function bB(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Qh(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function CB(){return mB++}function SB(n,e,t){const i=e._path,s=Mu(n,e),r=hS(n,t),o=n.listenProvider_.startListening(ka(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)k(!is(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,h)=>{if(!ae(l)&&u&&is(u))return[Kh(u).query];{let d=[];return u&&(d=d.concat(rS(u).map(f=>f.query))),Rt(h,(f,m)=>{d=d.concat(m)}),d}});for(let l=0;l<c.length;++l){const u=c[l];n.listenProvider_.stopListening(ka(u),Mu(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ay(t)}node(){return this.node_}}class cy{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ze(this.path_,e);return new cy(this.syncTree_,t)}node(){return iy(this.syncTree_,this.path_)}}const AB=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Mw=function(n,e,t){if(!n||typeof n!="object")return n;if(k(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return kB(n[".sv"],e,t);if(typeof n[".sv"]=="object")return RB(n[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},kB=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:k(!1,"Unexpected server value: "+n)}},RB=function(n,e,t){n.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&k(!1,"Unexpected increment value: "+i);const s=e.node();if(k(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},dS=function(n,e,t,i){return ly(e,new cy(t,n),i)},fS=function(n,e,t){return ly(n,new ay(e),t)};function ly(n,e,t){const i=n.getPriority().val(),s=Mw(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Mw(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new lt(a,ft(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new lt(s))),o.forEachChild(We,(a,c)=>{const l=ly(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function hy(n,e){let t=e instanceof be?e:new be(e),i=n,s=re(t);for(;s!==null;){const r=Xr(i.node.children,s)||{children:{},childCount:0};i=new uy(s,i,r),t=xe(t),s=re(t)}return i}function Vo(n){return n.node.value}function pS(n,e){n.node.value=e,vp(n)}function gS(n){return n.node.childCount>0}function NB(n){return Vo(n)===void 0&&!gS(n)}function Yh(n,e){Rt(n.node.children,(t,i)=>{e(new uy(t,n,i))})}function mS(n,e,t,i){t&&!i&&e(n),Yh(n,s=>{mS(s,e,!0,i)}),t&&i&&e(n)}function xB(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Jc(n){return new be(n.parent===null?n.name:Jc(n.parent)+"/"+n.name)}function vp(n){n.parent!==null&&PB(n.parent,n.name,n)}function PB(n,e,t){const i=NB(t),s=mn(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,vp(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,vp(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DB=/[\[\].#$\/\u0000-\u001F\u007F]/,OB=/[\[\].#$\u0000-\u001F\u007F]/,zd=10*1024*1024,dy=function(n){return typeof n=="string"&&n.length!==0&&!DB.test(n)},yS=function(n){return typeof n=="string"&&n.length!==0&&!OB.test(n)},MB=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),yS(n)},LB=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Um(n)||n&&typeof n=="object"&&mn(n,".sv")},FB=function(n,e,t,i){i&&e===void 0||Xh(Xu(n,"value"),e,t)},Xh=function(n,e,t){const i=t instanceof be?new JU(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ws(i));if(typeof e=="function")throw new Error(n+"contains a function "+ws(i)+" with contents = "+e.toString());if(Um(e))throw new Error(n+"contains "+e.toString()+" "+ws(i));if(typeof e=="string"&&e.length>zd/3&&Ju(e)>zd)throw new Error(n+"contains a string greater than "+zd+" utf8 bytes "+ws(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Rt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!dy(o)))throw new Error(n+" contains an invalid key ("+o+") "+ws(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ZU(i,o),Xh(n,a,i),eV(i)}),s&&r)throw new Error(n+' contains ".value" child '+ws(i)+" in addition to actual children.")}},UB=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=fc(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!dy(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(XU);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&fn(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},VB=function(n,e,t,i){if(i&&e===void 0)return;const s=Xu(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];Rt(e,(o,a)=>{const c=new be(o);if(Xh(s,a,ze(t,c)),jm(c)===".priority"&&!LB(a))throw new Error(s+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),UB(s,r)},_S=function(n,e,t,i){if(!(i&&t===void 0)&&!yS(t))throw new Error(Xu(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},BB=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),_S(n,e,t,i)},qB=function(n,e){if(re(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},$B=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!dy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!MB(t))throw new Error(Xu(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jB{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Jh(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!zm(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function vS(n,e,t){Jh(n,t),wS(n,i=>zm(i,e))}function Dn(n,e,t){Jh(n,t),wS(n,i=>fn(i,e)||fn(e,i))}function wS(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(zB(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function zB(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();zs&&Et("event: "+t.toString()),Fo(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WB="repo_interrupt",GB=25;class KB{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jB,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ku(),this.transactionQueueTree_=new uy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function HB(n,e,t){if(n.stats_=qm(n.repoInfo_),n.forceRestClient_||EU())n.server_=new Au(n.repoInfo_,(i,s,r,o)=>{Lw(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Fw(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pt(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new li(n.repoInfo_,e,(i,s,r,o)=>{Lw(n,i,s,r,o)},i=>{Fw(n,i)},i=>{YB(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=AU(n.repoInfo_,()=>new SV(n.stats_,n.server_)),n.infoData_=new IV,n.infoSyncTree_=new Dw({startListening:(i,s,r,o)=>{let a=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(a=Hh(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),fy(n,"connected",!1),n.serverSyncTree_=new Dw({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);Dn(n.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function QB(n){const t=n.infoData_.getNode(new be(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Zh(n){return AB({timestamp:QB(n)})}function Lw(n,e,t,i,s){n.dataUpdateCount++;const r=new be(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const c=Xl(t,l=>ft(l));o=EB(n.serverSyncTree_,r,c,s)}else{const c=ft(t);o=IB(n.serverSyncTree_,r,c,s)}else if(i){const c=Xl(t,l=>ft(l));o=_B(n.serverSyncTree_,r,c)}else{const c=ft(t);o=Hh(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=_o(n,r)),Dn(n.eventQueue_,a,o)}function Fw(n,e){fy(n,"connected",e),e===!1&&ZB(n)}function YB(n,e){Rt(e,(t,i)=>{fy(n,t,i)})}function fy(n,e,t){const i=new be("/.info/"+e),s=ft(t);n.infoData_.updateSnapshot(i,s);const r=Hh(n.infoSyncTree_,i,s);Dn(n.eventQueue_,i,r)}function py(n){return n.nextWriteId_++}function XB(n,e,t,i,s){ed(n,"set",{path:e.toString(),value:t,priority:i});const r=Zh(n),o=ft(t,i),a=iy(n.serverSyncTree_,e),c=fS(o,a,r),l=py(n),u=cS(n.serverSyncTree_,e,c,l,!0);Jh(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const m=d==="ok";m||jt("set at "+e+" failed: "+d);const y=Fi(n.serverSyncTree_,l,!m);Dn(n.eventQueue_,e,y),wp(n,s,d,f)});const h=my(n,e);_o(n,h),Dn(n.eventQueue_,h,[])}function JB(n,e,t,i){ed(n,"update",{path:e.toString(),value:t});let s=!0;const r=Zh(n),o={};if(Rt(t,(a,c)=>{s=!1,o[a]=dS(ze(e,a),ft(c),n.serverSyncTree_,r)}),s)Et("update() called with empty data.  Don't do anything."),wp(n,i,"ok",void 0);else{const a=py(n),c=yB(n.serverSyncTree_,e,o,a);Jh(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,u)=>{const h=l==="ok";h||jt("update at "+e+" failed: "+l);const d=Fi(n.serverSyncTree_,a,!h),f=d.length>0?_o(n,e):e;Dn(n.eventQueue_,f,d),wp(n,i,l,u)}),Rt(t,l=>{const u=my(n,ze(e,l));_o(n,u)}),Dn(n.eventQueue_,e,[])}}function ZB(n){ed(n,"onDisconnectEvents");const e=Zh(n),t=ku();hp(n.onDisconnect_,ge(),(s,r)=>{const o=dS(s,r,n.serverSyncTree_,e);QC(t,s,o)});let i=[];hp(t,ge(),(s,r)=>{i=i.concat(Hh(n.serverSyncTree_,s,r));const o=my(n,s);_o(n,o)}),n.onDisconnect_=ku(),Dn(n.eventQueue_,ge(),i)}function eq(n,e,t){let i;re(e._path)===".info"?i=Ow(n.infoSyncTree_,e,t):i=Ow(n.serverSyncTree_,e,t),vS(n.eventQueue_,e._path,i)}function Uw(n,e,t){let i;re(e._path)===".info"?i=_p(n.infoSyncTree_,e,t):i=_p(n.serverSyncTree_,e,t),vS(n.eventQueue_,e._path,i)}function tq(n){n.persistentConnection_&&n.persistentConnection_.interrupt(WB)}function ed(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Et(t,...e)}function wp(n,e,t,i){e&&Fo(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function IS(n,e,t){return iy(n.serverSyncTree_,e,t)||X.EMPTY_NODE}function gy(n,e=n.transactionQueueTree_){if(e||td(n,e),Vo(e)){const t=TS(n,e);k(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&nq(n,Jc(e),t)}else gS(e)&&Yh(e,t=>{gy(n,t)})}function nq(n,e,t){const i=t.map(l=>l.currentWriteId),s=IS(n,e,i);let r=s;const o=s.hash();for(let l=0;l<t.length;l++){const u=t[l];k(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Yt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{ed(n,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(Fi(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();td(n,hy(n.transactionQueueTree_,e)),gy(n,n.transactionQueueTree_),Dn(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)Fo(h[d])}else{if(l==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{jt("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=l}_o(n,e)}},o)}function _o(n,e){const t=ES(n,e),i=Jc(t),s=TS(n,t);return iq(n,s,i),i}function iq(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Yt(t,c.path);let u=!1,h;if(k(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,s=s.concat(Fi(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=GB)u=!0,h="maxretry",s=s.concat(Fi(n.serverSyncTree_,c.currentWriteId,!0));else{const d=IS(n,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Xh("transaction failed: Data returned ",f,c.path);let m=ft(f);typeof f=="object"&&f!=null&&mn(f,".priority")||(m=m.updatePriority(d.getPriority()));const E=c.currentWriteId,V=Zh(n),W=fS(m,d,V);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=W,c.currentWriteId=py(n),o.splice(o.indexOf(E),1),s=s.concat(cS(n.serverSyncTree_,c.path,W,c.currentWriteId,c.applyLocally)),s=s.concat(Fi(n.serverSyncTree_,E,!0))}else u=!0,h="nodata",s=s.concat(Fi(n.serverSyncTree_,c.currentWriteId,!0))}Dn(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}td(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Fo(i[a]);gy(n,n.transactionQueueTree_)}function ES(n,e){let t,i=n.transactionQueueTree_;for(t=re(e);t!==null&&Vo(i)===void 0;)i=hy(i,t),e=xe(e),t=re(e);return i}function TS(n,e){const t=[];return bS(n,e,t),t.sort((i,s)=>i.order-s.order),t}function bS(n,e,t){const i=Vo(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Yh(e,s=>{bS(n,s,t)})}function td(n,e){const t=Vo(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,pS(e,t.length>0?t:void 0)}Yh(e,i=>{td(n,i)})}function my(n,e){const t=Jc(ES(n,e)),i=hy(n.transactionQueueTree_,e);return xB(i,s=>{Wd(n,s)}),Wd(n,i),mS(i,s=>{Wd(n,s)}),t}function Wd(n,e){const t=Vo(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(k(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(k(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Fi(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?pS(e,void 0):t.length=r+1,Dn(n.eventQueue_,Jc(e),s);for(let o=0;o<i.length;o++)Fo(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sq(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function rq(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):jt(`Invalid query segment '${t}' in query '${n}'`)}return e}const Vw=function(n,e){const t=oq(n),i=t.namespace;t.domain==="firebase.com"&&gi(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&gi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||fU();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new PC(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new be(t.pathString)}},oq=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(s=sq(n.substring(u,h)));const d=rq(n.substring(Math.min(n.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pt(this.snapshot.exportVal())}}class SS{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aq{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return ae(this._path)?null:jm(this._path)}get ref(){return new Ti(this._repo,this._path)}get _queryIdentifier(){const e=Tw(this._queryParams),t=Vm(e);return t==="{}"?"default":t}get _queryObject(){return Tw(this._queryParams)}isEqual(e){if(e=z(e),!(e instanceof yy))return!1;const t=this._repo===e._repo,i=zm(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+YU(this._path)}}class Ti extends yy{constructor(e,t){super(e,t,new Hm,!1)}get parent(){const e=qC(this._path);return e===null?null:new Ti(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _c{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new be(e),i=Lu(this.ref,e);return new _c(this._node.getChild(t),i,We)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new _c(s,Lu(this.ref,i),We)))}hasChild(e){const t=new be(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Tl(n,e){return n=z(n),n._checkNotDeleted("ref"),e!==void 0?Lu(n._root,e):n._root}function Lu(n,e){return n=z(n),re(n._path)===null?BB("child","path",e,!1):_S("child","path",e,!1),new Ti(n._repo,ze(n._path,e))}function Bw(n,e){n=z(n),qB("set",n._path),FB("set",e,n._path,!1);const t=new wc;return XB(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function cq(n,e){VB("update",e,n._path,!1);const t=new wc;return JB(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}class _y{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new CS("value",this,new _c(e.snapshotNode,new Ti(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new SS(this,e,t):null}matches(e){return e instanceof _y?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class vy{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new SS(this,e,t):null}createEvent(e,t){k(e.childName!=null,"Child events should have a childName.");const i=Lu(new Ti(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new CS(e.type,this,new _c(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof vy?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function lq(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const c=t,l=(u,h)=>{Uw(n._repo,n,a),c(u,h)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new aq(t,r||void 0),a=e==="value"?new _y(o):new vy(e,o);return eq(n._repo,n,a),()=>Uw(n._repo,n,a)}function uq(n,e,t,i){return lq(n,"value",e,t,i)}cB(Ti);pB(Ti);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hq="FIREBASE_DATABASE_EMULATOR_HOST",Ip={};let dq=!1;function fq(n,e,t,i){n.repoInfo_=new PC(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function pq(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||gi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Et("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Vw(r,s),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[hq]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=Vw(r,s),a=o.repoInfo):c=!o.repoInfo.secure;const u=s&&c?new Gr(Gr.OWNER):new bU(n.name,n.options,e);$B("Invalid Firebase Database URL",o),ae(o.path)||gi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=mq(a,n,u,new TU(n.name,t));return new yq(h,n)}function gq(n,e){const t=Ip[e];(!t||t[n.key]!==n)&&gi(`Database ${e}(${n.repoInfo_}) has already been deleted.`),tq(n),delete t[n.key]}function mq(n,e,t,i){let s=Ip[e.name];s||(s={},Ip[e.name]=s);let r=s[n.toURLString()];return r&&gi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new KB(n,dq,t,i),s[n.toURLString()]=r,r}class yq{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(HB(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ti(this._repo,ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gq(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gi("Cannot call "+e+" on a deleted database.")}}function Gd(n=QI(),e){const t=Kp(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=TR("database");i&&_q(t,...i)}return t}function _q(n,e,t,i={}){n=z(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&gi("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&gi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Gr(Gr.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:VI(i.mockUserToken,n.app.options.projectId);r=new Gr(o)}fq(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vq(n){cU(yi),hi(new Rn("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return pq(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),gn(ow,aw,n),gn(ow,aw,"esm2017")}li.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};li.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};vq();const wq=new Promise(n=>{const e=document.createElement("script");e.onload=()=>n(),e.setAttribute("src","./src/playerjs.js"),document.head.appendChild(e)});const Iq=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Eq={data(){return{isPlaying:!1,user:null,username:null,authorized:!1,loginPage:!0,regUsername:null,regPassword:null,regEmail:null,regGooglePage:!1,url:"",player:null,RoomUid:null,inRoom:!1,allrooms:[],passwordRoomType:!1,passwordRoom:"",connPasswordRoomType:!1,connPasswordRoom:"",showAllRoomList:!1,showProfile:!1,showOverlay:!1,errorInput:!1}},mounted(){const n={apiKey:"AIzaSyCxVh1JsLTRMXSLipjB3QSwRqd2o7N6FaA",authDomain:"fantqw2g.firebaseapp.com",databaseURL:"https://fantqw2g-default-rtdb.europe-west1.firebasedatabase.app",projectId:"fantqw2g",storageBucket:"fantqw2g.appspot.com",messagingSenderId:"1093154126781",appId:"1:1093154126781:web:c5624592aa67d6a83df0d4",measurementId:"G-VBDDXQSXD4"};Re.initializeApp(n),Re.firestore(),Re.auth().onAuthStateChanged(e=>{if(e){this.user=e,this.authorized=!0;const t=Gd(),i=Tl(t,"users/"+e.uid);uq(i,s=>{const r=s.val();this.username=r.username})}}),this.alredyInRoom()},methods:{togglePlayback(){const e=Re.firestore().collection("rooms").doc(this.RoomUid);document.getElementById("player").addEventListener("play",()=>{this.isPlaying=!0,console.log(this.isPlaying);let t=this.isPlaying;e.update({isPlaying:t})}),document.getElementById("player").addEventListener("pause",()=>{this.isPlaying=!1,console.log(this.isPlaying);let t=this.isPlaying;e.update({isPlaying:t})})},initializePlayer(n){wq.then(()=>{this.player=new Playerjs({id:"player",file:n})})},signInEmail(){Re.auth().signInWithEmailAndPassword(this.regEmail,this.regPassword).then(()=>{}).catch(n=>{var e=n.code,t=n.message;console.error("Помилка входу",e,t)})},signInGoogle(){const n=new Re.auth.GoogleAuthProvider;Re.auth().signInWithPopup(n).then(e=>{this.user=e.user,this.authorized=!0}).catch(e=>{const t=e.code,i=e.message;console.log(t,i)})},signOut(){Re.auth().signOut().then(()=>{this.user=null,this.authorized=!1}).catch(n=>{console.log(n)}),this.closeOutOverlay()},signUpEmail(){Re.auth().createUserWithEmailAndPassword(this.regEmail,this.regPassword).then(n=>{this.user=n;const e=Gd();Bw(Tl(e,"users/"+n.user.uid),{username:this.regUsername,email:this.regEmail});const t=this.regUsername;cq(Tl(e,"usernames/"),{[t]:n.user.uid})}).catch(function(n){var e=n.code,t=n.message;console.error("Помилка реєстрації",e,t)})},signUpGoogle(){const n=new Re.auth.GoogleAuthProvider;Re.auth().signInWithPopup(n).then(e=>{this.user=e.user,this.authorized=!0;const t=Gd();Bw(Tl(t,"users/"+e.user.uid),{username:this.regUsername,email:e.user.email})}).catch(e=>{const t=e.code,i=e.message;console.log(t,i)})},createRoom(){this.initializePlayer(this.url);const n=Re.firestore(),e=this.user.uid,t={withPassw:this.passwordRoomType,password:this.passwordRoomType?this.passwordRoom:"",isPlaying:this.isPlaying,users:[e],videoUrl:this.url};n.collection("rooms").add(t).then(i=>{this.RoomUid=i.id,console.log("Document written with ID: ",i.id),console.log(this.RoomUid),this.inRoom=!0,this.roomChanges(),this.togglePlayback()}).catch(i=>{console.error("Error adding document: ",i)})},connectToRoom(){const e=Re.firestore().collection("rooms").doc(this.RoomUid);e.get().then(t=>{console.log(this.inRoom),this.inRoom?(this.initializePlayer(t.data().videoUrl),this.inRoom=!0,this.roomChanges(),this.togglePlayback()):t.data().withPassw?(this.connPasswordRoomType=!0,this.connPasswordRoom==t.data().password?(this.errorInput=!1,this.initializePlayer(t.data().videoUrl),this.inRoom=!0,this.roomChanges(),this.togglePlayback()):this.errorInput=!0):(this.initializePlayer(t.data().videoUrl),this.inRoom=!0,this.roomChanges(),this.togglePlayback())}),e.update({users:Re.firestore.FieldValue.arrayUnion(this.user.uid)})},exitRoom(){Re.firestore().collection("rooms").doc(this.RoomUid).update({users:Re.firestore.FieldValue.arrayRemove(this.user.uid)}),document.getElementById("player").innerHTML="",document.getElementById("player").style="",this.player=null,this.RoomUid=null,this.inRoom=!1},deleteRoom(){Re.firestore().collection("rooms").doc(this.RoomUid).delete().then(()=>{document.getElementById("player").innerHTML="",document.getElementById("player").style="",this.player=null,this.RoomUid=null,this.inRoom=!1})},roomChanges(){Re.firestore().collection("rooms").doc(this.RoomUid).onSnapshot(t=>{const i=t.data();i.isPlaying?this.player.api("play"):this.player.api("pause"),this.isPlaying=i.isPlaying,console.log("Changes",this.isPlaying)})},changeRoomUrl(){Re.firestore().collection("rooms").doc(this.RoomUid).update({videoUrl:this.url}),this.player=null,this.initializePlayer(this.url)},alredyInRoom(){if(this.authorized){const n=Re.firestore();n.collection("rooms").get().then(e=>{e.empty||e.forEach(t=>{n.collection("rooms").doc(t.id).get().then(s=>{s.data().users.includes(this.user.uid)&&(this.inRoom=!0,this.RoomUid=t.id,this.connectToRoom())})})})}},showAllRoomsList(){Re.firestore().collection("rooms").get().then(t=>{const i=[];t.forEach(s=>{var r=s.data();i.push({id:s.id,withpassw:r.withPassw,users:r.users.length})}),this.allrooms=i}).catch(t=>{console.log("Помилка отримання документів:",t)}),this.showProfile&&(this.showProfile=!this.showProfile),this.showAllRoomList=!this.showAllRoomList,this.showOverlay=!this.showOverlay},showProfileInfo(){this.showAllRoomList&&(this.showAllRoomList=!this.showAllRoomList),this.showProfile=!this.showProfile,this.showOverlay=!this.showOverlay},closeOutOverlay(){this.showProfile=!1,this.showAllRoomList=!1,this.showOverlay=!1}}},at=n=>(PA("data-v-5ec56e0e"),n=n(),DA(),n),Tq={class:"header"},bq=at(()=>j("div",{class:"logo"},[j("a",{href:"",class:"logo__1"},"fantq"),j("span",{class:"logo__2"},"w2g")],-1)),Cq={class:"right"},Sq={class:"theme__change"},Aq=at(()=>j("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 96 960 960",width:"24",class:"icon dark_mode"},[j("path",{d:"M480 936q-150 0-255-105T120 576q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444 396q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480 936Zm0-80q88 0 158-48.5T740 681q-20 5-40 8t-40 3q-123 0-209.5-86.5T364 396q0-20 3-40t8-40q-78 32-126.5 102T200 576q0 116 82 198t198 82Zm-10-270Z"})],-1)),kq={xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 96 960 960",width:"24",class:"icon light_mode",style:{display:"none"}},Rq=at(()=>j("path",{d:"M480 696q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280 576q0-83 58.5-141.5T480 376q83 0 141.5 58.5T680 576q0 83-58.5 141.5T480 776ZM80 616q-17 0-28.5-11.5T40 576q0-17 11.5-28.5T80 536h80q17 0 28.5 11.5T200 576q0 17-11.5 28.5T160 616H80Zm720 0q-17 0-28.5-11.5T760 576q0-17 11.5-28.5T800 536h80q17 0 28.5 11.5T920 576q0 17-11.5 28.5T880 616h-80ZM480 296q-17 0-28.5-11.5T440 256v-80q0-17 11.5-28.5T480 136q17 0 28.5 11.5T520 176v80q0 17-11.5 28.5T480 296Zm0 720q-17 0-28.5-11.5T440 976v-80q0-17 11.5-28.5T480 856q17 0 28.5 11.5T520 896v80q0 17-11.5 28.5T480 1016ZM226 378l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226 378Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734 774l43 42q12 11 11.5 28T777 873q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678 322l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183 873q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282 830l-42 43q-11 12-28 11.5T183 873Zm297-297Z"},null,-1)),Nq=[Rq],xq=["src"],Pq={key:0,class:"profile_info"},Dq={class:"profile_info_container"},Oq={key:0,style:{"font-size":"1.2rem"}},Mq=at(()=>j("div",null,"Ваш UID:",-1)),Lq={key:1,style:{"font-size":"0.8rem"}},Fq={key:0,class:"all_rooms"},Uq=at(()=>j("path",{d:"M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"},null,-1)),Vq=[Uq],Bq={key:0,class:"all_room_list"},qq=at(()=>j("p",null,"Всі кімнати:",-1)),$q={class:"all_rooms_id"},jq={key:0,class:"icon roomlock",xmlns:"http://www.w3.org/2000/svg",height:"48",viewBox:"0 -960 960 960",width:"48"},zq=at(()=>j("path",{d:"M220-80q-24.75 0-42.375-17.625T160-140v-434q0-24.75 17.625-42.375T220-634h70v-96q0-78.85 55.606-134.425Q401.212-920 480.106-920T614.5-864.425Q670-808.85 670-730v96h70q24.75 0 42.375 17.625T800-574v434q0 24.75-17.625 42.375T740-80H220Zm0-60h520v-434H220v434Zm260.168-140Q512-280 534.5-302.031T557-355q0-30-22.668-54.5t-54.5-24.5Q448-434 425.5-409.5t-22.5 55q0 30.5 22.668 52.5t54.5 22ZM350-634h260v-96q0-54.167-37.882-92.083-37.883-37.917-92-37.917Q426-860 388-822.083 350-784.167 350-730v96ZM220-140v-434 434Z"},null,-1)),Wq=[zq],Gq={key:1,class:"login_container"},Kq={class:"login"},Hq=at(()=>j("button",null,"Ввійти",-1)),Qq={key:2,class:"registration_container"},Yq={class:"registration"},Xq=at(()=>j("button",null,"Зареєструватися",-1)),Jq=at(()=>j("button",null,"Зареєструватися",-1)),Zq={key:3,class:"player_container"},e4=at(()=>j("div",{id:"player"},null,-1)),t4=[e4],n4={key:4,class:"main_page"},i4={class:"main_page_container"},s4=at(()=>j("button",{class:"createRoom"},"Cтворити кімнату",-1)),r4={class:"password"},o4=at(()=>j("label",{for:"with_passw"},"З паролем",-1)),a4=at(()=>j("label",{for:"without_passw"},"Без пароля",-1)),c4=at(()=>j("button",{class:"createRoom"},"Підʼєднатися до кімнати",-1)),l4={key:5,class:"room_info"},u4=at(()=>j("div",null,"ID кімнати: ",-1)),h4={key:6,class:"room_buttons"},d4=at(()=>j("button",{class:"createRoom"},"Вийти з кімнати",-1)),f4=[d4],p4=at(()=>j("button",{class:"createRoom"},"Змінити відео",-1)),g4=at(()=>j("button",{class:"createRoom"},"Видалити кімнату",-1)),m4=[g4];function y4(n,e,t,i,s,r){return _e(),Te(sn,null,[s.showOverlay?(_e(),Te("div",{key:0,class:"overlay",onClick:e[0]||(e[0]=(...o)=>r.closeOutOverlay&&r.closeOutOverlay(...o))})):He("",!0),j("header",Tq,[bq,j("div",Cq,[j("div",Sq,[Aq,(_e(),Te("svg",kq,Nq))]),s.user?(_e(),Te("img",{key:0,src:s.user.photoURL,class:"avatar",onClick:e[1]||(e[1]=(...o)=>r.showProfileInfo&&r.showProfileInfo(...o))},null,8,xq)):He("",!0)]),Vt(Kl,{name:"profile"},{default:tf(()=>[s.showProfile?(_e(),Te("div",Pq,[j("div",Dq,[s.username?(_e(),Te("div",Oq,tl(s.username),1)):He("",!0),Mq,s.user?(_e(),Te("p",Lq,tl(s.user.uid),1)):He("",!0),s.authorized?(_e(),Te("button",{key:2,class:"signOut",onClick:e[2]||(e[2]=(...o)=>r.signOut&&r.signOut(...o))},"SignOut")):He("",!0)])])):He("",!0)]),_:1})]),j("main",null,[s.authorized?(_e(),Te("div",Fq,[(_e(),Te("svg",{onClick:e[3]||(e[3]=(...o)=>r.showAllRoomsList&&r.showAllRoomsList(...o)),xmlns:"http://www.w3.org/2000/svg",height:"48",viewBox:"0 -960 960 960",width:"48",class:"icon all_rooms_button"},Vq)),Vt(Kl,{name:"allRoom"},{default:tf(()=>[s.showAllRoomList?(_e(),Te("div",Bq,[qq,j("div",null,[(_e(!0),Te(sn,null,Fy(s.allrooms,o=>(_e(),Te("div",{key:o.id,class:"room-id"},[j("div",$q,tl(o.id),1),j("span",null,[o.withpassw?(_e(),Te("svg",jq,Wq)):He("",!0)]),(_e(!0),Te(sn,null,Fy(o.users,a=>(_e(),Te("div",{class:"users_circle_count",key:a}))),128))]))),128))])])):He("",!0)]),_:1})])):He("",!0),!s.authorized&&s.loginPage?(_e(),Te("div",Gq,[j("div",Kq,[j("form",{onSubmit:e[6]||(e[6]=Ai((...o)=>r.signInEmail&&r.signInEmail(...o),["prevent"])),class:"signIn_form"},[nn(j("input",{type:"text",placeholder:"E-mail","onUpdate:modelValue":e[4]||(e[4]=o=>s.regEmail=o),required:""},null,512),[[vn,s.regEmail]]),nn(j("input",{type:"text",placeholder:"Пароль","onUpdate:modelValue":e[5]||(e[5]=o=>s.regPassword=o),required:""},null,512),[[vn,s.regPassword]]),Hq],32),j("button",{class:"signIn",onClick:e[7]||(e[7]=(...o)=>r.signInGoogle&&r.signInGoogle(...o))},"Увійти через Google"),j("button",{class:"signUpEmail",onClick:e[8]||(e[8]=()=>{this.loginPage=!this.loginPage})},"Зареєструватися")])])):He("",!0),!s.authorized&&!s.loginPage?(_e(),Te("div",Qq,[j("div",Yq,[s.regGooglePage?He("",!0):(_e(),Te("form",{key:0,onSubmit:e[12]||(e[12]=Ai((...o)=>r.signUpEmail&&r.signUpEmail(...o),["prevent"])),class:"registration_form"},[nn(j("input",{type:"text",placeholder:"Нікнейм","onUpdate:modelValue":e[9]||(e[9]=o=>s.regUsername=o),required:""},null,512),[[vn,s.regUsername]]),nn(j("input",{type:"text",placeholder:"E-mail","onUpdate:modelValue":e[10]||(e[10]=o=>s.regEmail=o),required:""},null,512),[[vn,s.regEmail]]),nn(j("input",{type:"text",placeholder:"Пароль","onUpdate:modelValue":e[11]||(e[11]=o=>s.regPassword=o),required:""},null,512),[[vn,s.regPassword]]),Xq],32)),s.regGooglePage?(_e(),Te("form",{key:1,onSubmit:e[14]||(e[14]=Ai((...o)=>r.signUpGoogle&&r.signUpGoogle(...o),["prevent"]))},[nn(j("input",{type:"text",placeholder:"Нікнейм","onUpdate:modelValue":e[13]||(e[13]=o=>s.regUsername=o),required:""},null,512),[[vn,s.regUsername]]),Jq],32)):He("",!0),s.regGooglePage?(_e(),Te("button",{key:2,class:"signUpGoogle",onClick:e[15]||(e[15]=()=>{this.regGooglePage=!this.regGooglePage})},"Зареєструватися через E-mail")):He("",!0),s.regGooglePage?He("",!0):(_e(),Te("button",{key:3,class:"signUpGoogle",onClick:e[16]||(e[16]=()=>{this.regGooglePage=!this.regGooglePage})},"Зареєструватися через Google")),j("button",{class:"signUpEmail",onClick:e[17]||(e[17]=()=>{this.loginPage=!this.loginPage})},"Увійти")])])):He("",!0),s.authorized?(_e(),Te("div",Zq,t4)):He("",!0),s.authorized&&!s.inRoom?(_e(),Te("div",n4,[j("div",i4,[j("form",{onSubmit:e[22]||(e[22]=Ai((...o)=>r.createRoom&&r.createRoom(...o),["prevent"])),class:"creat_room-form"},[s4,nn(j("input",{type:"text",placeholder:"Посилання на відео","onUpdate:modelValue":e[18]||(e[18]=o=>s.url=o),required:""},null,512),[[vn,s.url]]),j("div",r4,[o4,nn(j("input",{id:"with_passw",type:"radio",name:"passwordType","onUpdate:modelValue":e[19]||(e[19]=o=>s.passwordRoomType=o),value:!0,required:""},null,512),[[c_,s.passwordRoomType]]),a4,nn(j("input",{id:"without_passw",type:"radio",name:"passwordType","onUpdate:modelValue":e[20]||(e[20]=o=>s.passwordRoomType=o),value:!1,required:""},null,512),[[c_,s.passwordRoomType]])]),s.passwordRoomType?nn((_e(),Te("input",{key:0,type:"password",placeholder:"Пароль","onUpdate:modelValue":e[21]||(e[21]=o=>s.passwordRoom=o),required:""},null,512)),[[vn,s.passwordRoom]]):He("",!0)],32),j("form",{onSubmit:e[25]||(e[25]=Ai((...o)=>r.connectToRoom&&r.connectToRoom(...o),["prevent"])),class:"connect_room-form"},[c4,nn(j("input",{type:"text",placeholder:"ID кімнати","onUpdate:modelValue":e[23]||(e[23]=o=>s.RoomUid=o),required:""},null,512),[[vn,s.RoomUid]]),s.connPasswordRoomType?nn((_e(),Te("input",{key:0,type:"text",placeholder:"Пароль","onUpdate:modelValue":e[24]||(e[24]=o=>s.connPasswordRoom=o),style:Vu({border:s.errorInput?"1px solid rgba(255, 0, 0, 0.6)":" 1px solid transparent"}),required:""},null,4)),[[vn,s.connPasswordRoom]]):He("",!0)],32)])])):He("",!0),s.inRoom&&s.RoomUid?(_e(),Te("div",l4,[u4,j("div",null,tl(this.RoomUid),1)])):He("",!0),s.authorized&&s.inRoom?(_e(),Te("div",h4,[j("form",{onSubmit:e[26]||(e[26]=Ai((...o)=>r.exitRoom&&r.exitRoom(...o),["prevent"]))},f4,32),j("form",{onSubmit:e[28]||(e[28]=Ai((...o)=>r.changeRoomUrl&&r.changeRoomUrl(...o),["prevent"])),class:"change_room_url"},[nn(j("input",{class:"change_room_url_input",type:"text",placeholder:"Посилання на відео","onUpdate:modelValue":e[27]||(e[27]=o=>s.url=o),required:""},null,512),[[vn,s.url]]),p4],32),j("form",{onSubmit:e[29]||(e[29]=Ai((...o)=>r.deleteRoom&&r.deleteRoom(...o),["prevent"]))},m4,32)])):He("",!0)])],64)}const _4=Iq(Eq,[["render",y4],["__scopeId","data-v-5ec56e0e"]]);dR(_4).mount("#app");
