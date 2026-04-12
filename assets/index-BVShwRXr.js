const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./EffectComposer-DPI4Zzzw.js","./CopyShader-BzTUYzf6.js","./UnrealBloomPass-CXQVr2l7.js"])))=>i.map(i=>d[i]);
var sc=Object.defineProperty,rc=Object.defineProperties;var ac=Object.getOwnPropertyDescriptors;var $a=Object.getOwnPropertySymbols;var oc=Object.prototype.hasOwnProperty,lc=Object.prototype.propertyIsEnumerable;var Ka=Math.pow,tr=(s,e,t)=>e in s?sc(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,sn=(s,e)=>{for(var t in e||(e={}))oc.call(e,t)&&tr(s,t,e[t]);if($a)for(var t of $a(e))lc.call(e,t)&&tr(s,t,e[t]);return s},Un=(s,e)=>rc(s,ac(e));var E=(s,e,t)=>tr(s,typeof e!="symbol"?e+"":e,t);var pt=(s,e,t)=>new Promise((n,i)=>{var r=l=>{try{o(t.next(l))}catch(c){i(c)}},a=l=>{try{o(t.throw(l))}catch(c){i(c)}},o=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,a);o((t=t.apply(s,e)).next())});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ta="170",cc=0,Za=1,hc=2,Ml=1,uc=2,hn=3,ct=0,Pt=1,Ct=2,Ln=0,Si=1,ja=2,Ja=3,Qa=4,dc=5,Wn=100,fc=101,pc=102,mc=103,gc=104,_c=200,vc=201,Sc=202,Mc=203,Fr=204,Nr=205,xc=206,yc=207,Ec=208,Tc=209,bc=210,Ac=211,wc=212,Cc=213,Rc=214,Or=0,Br=1,kr=2,yi=3,zr=4,Gr=5,Hr=6,Vr=7,ba=0,Pc=1,Lc=2,Dn=0,Dc=1,Ic=2,Uc=3,Fc=4,Nc=5,Oc=6,Bc=7,xl=300,Ei=301,Ti=302,Wr=303,Xr=304,Zs=306,Ft=1e3,Yn=1001,qr=1002,Tt=1003,kc=1004,rs=1005,Rt=1006,nr=1007,$n=1008,Sn=1009,yl=1010,El=1011,Qi=1012,Aa=1013,Kn=1014,Qt=1015,ns=1016,wa=1017,Ca=1018,bi=1020,Tl=35902,bl=1021,Al=1022,Kt=1023,wl=1024,Cl=1025,Mi=1026,Ai=1027,Ra=1028,Pa=1029,Rl=1030,La=1031,Da=1033,Ns=33776,Os=33777,Bs=33778,ks=33779,Yr=35840,$r=35841,Kr=35842,Zr=35843,jr=36196,Jr=37492,Qr=37496,ea=37808,ta=37809,na=37810,ia=37811,sa=37812,ra=37813,aa=37814,oa=37815,la=37816,ca=37817,ha=37818,ua=37819,da=37820,fa=37821,zs=36492,pa=36494,ma=36495,Pl=36283,ga=36284,_a=36285,va=36286,zc=3200,Gc=3201,Ia=0,Hc=1,Pn="",zt="srgb",Ci="srgb-linear",js="linear",Ze="srgb",Qn=7680,eo=519,Vc=512,Wc=513,Xc=514,Ll=515,qc=516,Yc=517,$c=518,Kc=519,to=35044,Zc=35048,no="300 es",gn=2e3,Hs=2001;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let io=1234567;const Yi=Math.PI/180,es=180/Math.PI;function Pi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[s&255]+_t[s>>8&255]+_t[s>>16&255]+_t[s>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function St(s,e,t){return Math.max(e,Math.min(t,s))}function Ua(s,e){return(s%e+e)%e}function jc(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Jc(s,e,t){return s!==e?(t-s)/(e-s):0}function $i(s,e,t){return(1-t)*s+t*e}function Qc(s,e,t,n){return $i(s,e,1-Math.exp(-t*n))}function eh(s,e=1){return e-Math.abs(Ua(s,e*2)-e)}function th(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function nh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ih(s,e){return s+Math.floor(Math.random()*(e-s+1))}function sh(s,e){return s+Math.random()*(e-s)}function rh(s){return s*(.5-Math.random())}function ah(s){s!==void 0&&(io=s);let e=io+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function oh(s){return s*Yi}function lh(s){return s*es}function ch(s){return(s&s-1)===0&&s!==0}function hh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function uh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function dh(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*f,o*c);break;case"YZY":s.set(l*f,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*f,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function xt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const dn={DEG2RAD:Yi,RAD2DEG:es,generateUUID:Pi,clamp:St,euclideanModulo:Ua,mapLinear:jc,inverseLerp:Jc,lerp:$i,damp:Qc,pingpong:eh,smoothstep:th,smootherstep:nh,randInt:ih,randFloat:sh,randFloatSpread:rh,seededRandom:ah,degToRad:oh,radToDeg:lh,isPowerOfTwo:ch,ceilPowerOfTwo:hh,floorPowerOfTwo:uh,setQuaternionFromProperEuler:dh,normalize:xt,denormalize:gi};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,t,n,i,r,a,o,l,c){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],A=i[1],T=i[4],x=i[7],N=i[2],w=i[5],C=i[8];return r[0]=a*_+o*A+l*N,r[3]=a*m+o*T+l*w,r[6]=a*d+o*x+l*C,r[1]=c*_+u*A+h*N,r[4]=c*m+u*T+h*w,r[7]=c*d+u*x+h*C,r[2]=f*_+p*A+g*N,r[5]=f*m+p*T+g*w,r[8]=f*d+p*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,g=t*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ir.makeScale(e,t)),this}rotate(e){return this.premultiply(ir.makeRotation(-e)),this}translate(e,t){return this.premultiply(ir.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ir=new Le;function Dl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function fh(){const s=Vs("canvas");return s.style.display="block",s}const so={};function Wi(s){s in so||(so[s]=!0,console.warn(s))}function ph(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function mh(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gh(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ve={enabled:!0,workingColorSpace:Ci,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ze&&(s.r=vn(s.r),s.g=vn(s.g),s.b=vn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ze&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pn?js:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function vn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function xi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ro=[.64,.33,.3,.6,.15,.06],ao=[.2126,.7152,.0722],oo=[.3127,.329],lo=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),co=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ve.define({[Ci]:{primaries:ro,whitePoint:oo,transfer:js,toXYZ:lo,fromXYZ:co,luminanceCoefficients:ao,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:ro,whitePoint:oo,transfer:Ze,toXYZ:lo,fromXYZ:co,luminanceCoefficients:ao,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}});let ei;class _h{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ei===void 0&&(ei=Vs("canvas")),ei.width=e.width,ei.height=e.height;const n=ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Vs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=vn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vn(t[n]/255)*255):t[n]=vn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vh=0;class Il{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(sr(i[a].image)):r.push(sr(i[a]))}else r=sr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function sr(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?_h.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sh=0;class Mt extends Ri{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=Yn,i=Yn,r=Rt,a=$n,o=Kt,l=Sn,c=Mt.DEFAULT_ANISOTROPY,u=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Pi(),this.name="",this.source=new Il(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ft:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ft:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=xl;Mt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,i=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,x=(p+1)/2,N=(d+1)/2,w=(u+f)/4,C=(h+_)/4,D=(g+m)/4;return T>x&&T>N?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=w/n,r=C/n):x>N?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=w/i,r=D/i):N<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(N),n=C/r,i=D/r),this.set(n,i,r,t),this}let A=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-_)/A,this.z=(f-u)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mh extends Ri{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Il(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Mh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ul extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xh extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Li{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-o;const d=l*f+c*p+u*g+h*_,A=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const N=Math.sqrt(T),w=Math.atan2(N,d*A);m=Math.sin(m*w)/N,o=Math.sin(o*w)/N}const x=o*A;if(l=l*m+f*x,c=c*m+p*x,u=u*m+g*x,h=h*m+_*x,m===1-o){const N=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=N,c*=N,u*=N,h*=N}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-o*p,e[t+2]=c*g+u*p+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ho.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ho.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rr.copy(this).projectOnVector(e),this.sub(rr)}reflect(e){return this.sub(rr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rr=new L,ho=new Li;class Mn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vt):Vt.fromBufferAttribute(r,a),Vt.applyMatrix4(e.matrixWorld),this.expandByPoint(Vt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),as.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),as.copy(n.boundingBox)),as.applyMatrix4(e.matrixWorld),this.union(as)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vt),Vt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ni),os.subVectors(this.max,Ni),ti.subVectors(e.a,Ni),ni.subVectors(e.b,Ni),ii.subVectors(e.c,Ni),Tn.subVectors(ni,ti),bn.subVectors(ii,ni),Fn.subVectors(ti,ii);let t=[0,-Tn.z,Tn.y,0,-bn.z,bn.y,0,-Fn.z,Fn.y,Tn.z,0,-Tn.x,bn.z,0,-bn.x,Fn.z,0,-Fn.x,-Tn.y,Tn.x,0,-bn.y,bn.x,0,-Fn.y,Fn.x,0];return!ar(t,ti,ni,ii,os)||(t=[1,0,0,0,1,0,0,0,1],!ar(t,ti,ni,ii,os))?!1:(ls.crossVectors(Tn,bn),t=[ls.x,ls.y,ls.z],ar(t,ti,ni,ii,os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rn=[new L,new L,new L,new L,new L,new L,new L,new L],Vt=new L,as=new Mn,ti=new L,ni=new L,ii=new L,Tn=new L,bn=new L,Fn=new L,Ni=new L,os=new L,ls=new L,Nn=new L;function ar(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Nn.fromArray(s,r);const o=i.x*Math.abs(Nn.x)+i.y*Math.abs(Nn.y)+i.z*Math.abs(Nn.z),l=e.dot(Nn),c=t.dot(Nn),u=n.dot(Nn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const yh=new Mn,Oi=new L,or=new L;class Di{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oi.subVectors(e,this.center);const t=Oi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Oi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(or.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oi.copy(e.center).add(or)),this.expandByPoint(Oi.copy(e.center).sub(or))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new L,lr=new L,cs=new L,An=new L,cr=new L,hs=new L,hr=new L;class Fl{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.origin).addScaledVector(this.direction,t),an.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){lr.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),An.copy(this.origin).sub(lr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(cs),o=An.dot(this.direction),l=-An.dot(cs),c=An.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(lr).addScaledVector(cs,f),p}intersectSphere(e,t){an.subVectors(e.center,this.origin);const n=an.dot(this.direction),i=an.dot(an)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,n,i,r){cr.subVectors(t,e),hs.subVectors(n,e),hr.crossVectors(cr,hs);let a=this.direction.dot(hr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,e);const l=o*this.direction.dot(hs.crossVectors(An,hs));if(l<0)return null;const c=o*this.direction.dot(cr.cross(An));if(c<0||l+c>a)return null;const u=-o*An.dot(hr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,n,i,r,a,o,l,c,u,h,f,p,g,_,m){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,h,f,p,g,_,m)}set(e,t,n,i,r,a,o,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/si.setFromMatrixColumn(e,0).length(),r=1/si.setFromMatrixColumn(e,1).length(),a=1/si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eh,e,Th)}lookAt(e,t,n){const i=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),wn.crossVectors(n,Dt),wn.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),wn.crossVectors(n,Dt)),wn.normalize(),us.crossVectors(Dt,wn),i[0]=wn.x,i[4]=us.x,i[8]=Dt.x,i[1]=wn.y,i[5]=us.y,i[9]=Dt.y,i[2]=wn.z,i[6]=us.z,i[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],A=n[3],T=n[7],x=n[11],N=n[15],w=i[0],C=i[4],D=i[8],y=i[12],M=i[1],R=i[5],G=i[9],z=i[13],W=i[2],Z=i[6],X=i[10],ee=i[14],V=i[3],se=i[7],he=i[11],Me=i[15];return r[0]=a*w+o*M+l*W+c*V,r[4]=a*C+o*R+l*Z+c*se,r[8]=a*D+o*G+l*X+c*he,r[12]=a*y+o*z+l*ee+c*Me,r[1]=u*w+h*M+f*W+p*V,r[5]=u*C+h*R+f*Z+p*se,r[9]=u*D+h*G+f*X+p*he,r[13]=u*y+h*z+f*ee+p*Me,r[2]=g*w+_*M+m*W+d*V,r[6]=g*C+_*R+m*Z+d*se,r[10]=g*D+_*G+m*X+d*he,r[14]=g*y+_*z+m*ee+d*Me,r[3]=A*w+T*M+x*W+N*V,r[7]=A*C+T*R+x*Z+N*se,r[11]=A*D+T*G+x*X+N*he,r[15]=A*y+T*z+x*ee+N*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*p-n*l*p)+_*(+t*l*p-t*c*f+r*a*f-i*a*p+i*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+d*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],A=h*m*c-_*f*c+_*l*p-o*m*p-h*l*d+o*f*d,T=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,x=u*_*c-g*h*c+g*o*p-a*_*p-u*o*d+a*h*d,N=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,w=t*A+n*T+i*x+r*N;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=A*C,e[1]=(_*f*r-h*m*r-_*i*p+n*m*p+h*i*d-n*f*d)*C,e[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*d+n*l*d)*C,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*p-n*l*p)*C,e[4]=T*C,e[5]=(u*m*r-g*f*r+g*i*p-t*m*p-u*i*d+t*f*d)*C,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*d-t*l*d)*C,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*p+t*l*p)*C,e[8]=x*C,e[9]=(g*h*r-u*_*r-g*n*p+t*_*p+u*n*d-t*h*d)*C,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*d+t*o*d)*C,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*p-t*o*p)*C,e[12]=N*C,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*C,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*C,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,g=r*h,_=a*u,m=a*h,d=o*h,A=l*c,T=l*u,x=l*h,N=n.x,w=n.y,C=n.z;return i[0]=(1-(_+d))*N,i[1]=(p+x)*N,i[2]=(g-T)*N,i[3]=0,i[4]=(p-x)*w,i[5]=(1-(f+d))*w,i[6]=(m+A)*w,i[7]=0,i[8]=(g+T)*C,i[9]=(m-A)*C,i[10]=(1-(f+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=si.set(i[0],i[1],i[2]).length();const a=si.set(i[4],i[5],i[6]).length(),o=si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Wt.copy(this);const c=1/r,u=1/a,h=1/o;return Wt.elements[0]*=c,Wt.elements[1]*=c,Wt.elements[2]*=c,Wt.elements[4]*=u,Wt.elements[5]*=u,Wt.elements[6]*=u,Wt.elements[8]*=h,Wt.elements[9]*=h,Wt.elements[10]*=h,t.setFromRotationMatrix(Wt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=gn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let p,g;if(o===gn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Hs)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=gn){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-r),f=(t+e)*c,p=(n+i)*u;let g,_;if(o===gn)g=(a+r)*h,_=-2*h;else if(o===Hs)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const si=new L,Wt=new Ke,Eh=new L(0,0,0),Th=new L(1,1,1),wn=new L,us=new L,Dt=new L,uo=new Ke,fo=new Li;class Nt{constructor(e=0,t=0,n=0,i=Nt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fo.setFromEuler(this),this.setFromQuaternion(fo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nt.DEFAULT_ORDER="XYZ";class Nl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bh=0;const po=new L,ri=new Li,on=new Ke,ds=new L,Bi=new L,Ah=new L,wh=new Li,mo=new L(1,0,0),go=new L(0,1,0),_o=new L(0,0,1),vo={type:"added"},Ch={type:"removed"},ai={type:"childadded",child:null},ur={type:"childremoved",child:null};class ft extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new L,t=new Nt,n=new Li,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Le}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.multiply(ri),this}rotateOnWorldAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.premultiply(ri),this}rotateX(e){return this.rotateOnAxis(mo,e)}rotateY(e){return this.rotateOnAxis(go,e)}rotateZ(e){return this.rotateOnAxis(_o,e)}translateOnAxis(e,t){return po.copy(e).applyQuaternion(this.quaternion),this.position.add(po.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mo,e)}translateY(e){return this.translateOnAxis(go,e)}translateZ(e){return this.translateOnAxis(_o,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ds.copy(e):ds.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Bi,ds,this.up):on.lookAt(ds,Bi,this.up),this.quaternion.setFromRotationMatrix(on),i&&(on.extractRotation(i.matrixWorld),ri.setFromRotationMatrix(on),this.quaternion.premultiply(ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vo),ai.child=e,this.dispatchEvent(ai),ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ch),ur.child=e,this.dispatchEvent(ur),ur.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vo),ai.child=e,this.dispatchEvent(ai),ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,e,Ah),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,wh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new L(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new L,ln=new L,dr=new L,cn=new L,oi=new L,li=new L,So=new L,fr=new L,pr=new L,mr=new L,gr=new at,_r=new at,vr=new at;class Yt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xt.subVectors(e,t),i.cross(Xt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Xt.subVectors(i,t),ln.subVectors(n,t),dr.subVectors(e,t);const a=Xt.dot(Xt),o=Xt.dot(ln),l=Xt.dot(dr),c=ln.dot(ln),u=ln.dot(dr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cn.x),l.addScaledVector(a,cn.y),l.addScaledVector(o,cn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return gr.setScalar(0),_r.setScalar(0),vr.setScalar(0),gr.fromBufferAttribute(e,t),_r.fromBufferAttribute(e,n),vr.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(gr,r.x),a.addScaledVector(_r,r.y),a.addScaledVector(vr,r.z),a}static isFrontFacing(e,t,n,i){return Xt.subVectors(n,t),ln.subVectors(e,t),Xt.cross(ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Xt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Yt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;oi.subVectors(i,n),li.subVectors(r,n),fr.subVectors(e,n);const l=oi.dot(fr),c=li.dot(fr);if(l<=0&&c<=0)return t.copy(n);pr.subVectors(e,i);const u=oi.dot(pr),h=li.dot(pr);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(oi,a);mr.subVectors(e,r);const p=oi.dot(mr),g=li.dot(mr);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(li,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return So.subVectors(r,i),o=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(So,o);const d=1/(m+_+f);return a=_*d,o=f*d,t.copy(n).addScaledVector(oi,a).addScaledVector(li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ol={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},fs={h:0,s:0,l:0};function Sr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ve.workingColorSpace){if(e=Ua(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Sr(a,r,e+1/3),this.g=Sr(a,r,e),this.b=Sr(a,r,e-1/3)}return Ve.toWorkingColorSpace(this,i),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=Ol[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Ve.fromWorkingColorSpace(vt.copy(this),e),Math.round(St(vt.r*255,0,255))*65536+Math.round(St(vt.g*255,0,255))*256+Math.round(St(vt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(vt.copy(this),t);const n=vt.r,i=vt.g,r=vt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=zt){Ve.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,n=vt.g,i=vt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(fs);const n=$i(Cn.h,fs.h,t),i=$i(Cn.s,fs.s,t),r=$i(Cn.l,fs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new Fe;Fe.NAMES=Ol;let Rh=0;class jn extends Ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Pi(),this.name="",this.blending=Si,this.side=ct,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fr,this.blendDst=Nr,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==ct&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fr&&(n.blendSrc=this.blendSrc),this.blendDst!==Nr&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xn extends jn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new L,ps=new Ee;class Et{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=to,this.updateRanges=[],this.gpuType=Qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==to&&(e.usage=this.usage),e}}class Bl extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kl extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class it extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ph=0;const kt=new Ke,Mr=new ft,ci=new L,It=new Mn,ki=new Mn,dt=new L;class bt extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dl(e)?kl:Bl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Le().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return Mr.lookAt(e),Mr.updateMatrix(),this.applyMatrix4(Mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new it(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];It.setFromBufferAttribute(r),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ki.setFromBufferAttribute(o),this.morphTargetsRelative?(dt.addVectors(It.min,ki.min),It.expandByPoint(dt),dt.addVectors(It.max,ki.max),It.expandByPoint(dt)):(It.expandByPoint(ki.min),It.expandByPoint(ki.max))}It.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)dt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(dt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)dt.fromBufferAttribute(o,c),l&&(ci.fromBufferAttribute(e,c),dt.add(ci)),i=Math.max(i,n.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new L,l[D]=new L;const c=new L,u=new L,h=new L,f=new Ee,p=new Ee,g=new Ee,_=new L,m=new L;function d(D,y,M){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),o[D].add(_),o[y].add(_),o[M].add(_),l[D].add(m),l[y].add(m),l[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let D=0,y=A.length;D<y;++D){const M=A[D],R=M.start,G=M.count;for(let z=R,W=R+G;z<W;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const T=new L,x=new L,N=new L,w=new L;function C(D){N.fromBufferAttribute(i,D),w.copy(N);const y=o[D];T.copy(y),T.sub(N.multiplyScalar(N.dot(y))).normalize(),x.crossVectors(w,y);const R=x.dot(l[D])<0?-1:1;a.setXYZW(D,T.x,T.y,T.z,R)}for(let D=0,y=A.length;D<y;++D){const M=A[D],R=M.start,G=M.count;for(let z=R,W=R+G;z<W;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Et(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mo=new Ke,On=new Fl,ms=new Di,xo=new L,gs=new L,_s=new L,vs=new L,xr=new L,Ss=new L,yo=new L,Ms=new L;class Ue extends ft{constructor(e=new bt,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ss.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(xr.fromBufferAttribute(h,e),a?Ss.addScaledVector(xr,u):Ss.addScaledVector(xr.sub(t),u))}t.add(Ss)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(r),On.copy(e.ray).recast(e.near),!(ms.containsPoint(On.origin)===!1&&(On.intersectSphere(ms,xo)===null||On.origin.distanceToSquared(xo)>Ka(e.far-e.near,2)))&&(Mo.copy(r).invert(),On.copy(e.ray).applyMatrix4(Mo),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,On)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=A,N=T;x<N;x+=3){const w=o.getX(x),C=o.getX(x+1),D=o.getX(x+2);i=xs(this,d,e,n,c,u,h,w,C,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const A=o.getX(m),T=o.getX(m+1),x=o.getX(m+2);i=xs(this,a,e,n,c,u,h,A,T,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=A,N=T;x<N;x+=3){const w=x,C=x+1,D=x+2;i=xs(this,d,e,n,c,u,h,w,C,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const A=m,T=m+1,x=m+2;i=xs(this,a,e,n,c,u,h,A,T,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Lh(s,e,t,n,i,r,a,o){let l;if(e.side===Pt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===ct,o),l===null)return null;Ms.copy(o),Ms.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ms);return c<t.near||c>t.far?null:{distance:c,point:Ms.clone(),object:s}}function xs(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,gs),s.getVertexPosition(l,_s),s.getVertexPosition(c,vs);const u=Lh(s,e,t,n,gs,_s,vs,yo);if(u){const h=new L;Yt.getBarycoord(yo,gs,_s,vs,h),i&&(u.uv=Yt.getInterpolatedAttribute(i,o,l,c,h,new Ee)),r&&(u.uv1=Yt.getInterpolatedAttribute(r,o,l,c,h,new Ee)),a&&(u.normal=Yt.getInterpolatedAttribute(a,o,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new L,materialIndex:0};Yt.getNormal(gs,_s,vs,f.normal),u.face=f,u.barycoord=h}return u}class $t extends bt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(h,2));function g(_,m,d,A,T,x,N,w,C,D,y){const M=x/C,R=N/D,G=x/2,z=N/2,W=w/2,Z=C+1,X=D+1;let ee=0,V=0;const se=new L;for(let he=0;he<X;he++){const Me=he*R-z;for(let Ne=0;Ne<Z;Ne++){const je=Ne*M-G;se[_]=je*A,se[m]=Me*T,se[d]=W,c.push(se.x,se.y,se.z),se[_]=0,se[m]=0,se[d]=w>0?1:-1,u.push(se.x,se.y,se.z),h.push(Ne/C),h.push(1-he/D),ee+=1}}for(let he=0;he<D;he++)for(let Me=0;Me<C;Me++){const Ne=f+Me+Z*he,je=f+Me+Z*(he+1),Y=f+(Me+1)+Z*(he+1),te=f+(Me+1)+Z*he;l.push(Ne,je,te),l.push(je,Y,te),V+=6}o.addGroup(p,V,y),p+=V,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function yt(s){const e={};for(let t=0;t<s.length;t++){const n=wi(s[t]);for(const i in n)e[i]=n[i]}return e}function Dh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function zl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const Gl={clone:wi,merge:yt};var Ih=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zt extends jn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ih,this.fragmentShader=Uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wi(e.uniforms),this.uniformsGroups=Dh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hl extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new L,Eo=new Ee,To=new Ee;class Ut extends Hl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,Eo,To),t.subVectors(To,Eo)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hi=-90,ui=1;class Fh extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ut(hi,ui,e,t);i.layers=this.layers,this.add(i);const r=new Ut(hi,ui,e,t);r.layers=this.layers,this.add(r);const a=new Ut(hi,ui,e,t);a.layers=this.layers,this.add(a);const o=new Ut(hi,ui,e,t);o.layers=this.layers,this.add(o);const l=new Ut(hi,ui,e,t);l.layers=this.layers,this.add(l);const c=new Ut(hi,ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Vl extends Mt{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ei,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nh extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Vl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $t(5,5,5),r=new Zt({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:Ln});r.uniforms.tEquirect.value=t;const a=new Ue(i,r),o=t.minFilter;return t.minFilter===$n&&(t.minFilter=Rt),new Fh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const yr=new L,Oh=new L,Bh=new Le;class Hn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=yr.subVectors(n,t).cross(Oh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(yr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bh.getNormalMatrix(e),i=this.coplanarPoint(yr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new Di,ys=new L;class Fa{constructor(e=new Hn,t=new Hn,n=new Hn,i=new Hn,r=new Hn,a=new Hn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],p=i[8],g=i[9],_=i[10],m=i[11],d=i[12],A=i[13],T=i[14],x=i[15];if(n[0].setComponents(l-r,f-c,m-p,x-d).normalize(),n[1].setComponents(l+r,f+c,m+p,x+d).normalize(),n[2].setComponents(l+a,f+u,m+g,x+A).normalize(),n[3].setComponents(l-a,f-u,m-g,x-A).normalize(),n[4].setComponents(l-o,f-h,m-_,x-T).normalize(),t===gn)n[5].setComponents(l+o,f+h,m+_,x+T).normalize();else if(t===Hs)n[5].setComponents(o,h,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(e){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ys.x=i.normal.x>0?e.max.x:e.min.x,ys.y=i.normal.y>0?e.max.y:e.min.y,ys.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wl(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function kh(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class en extends bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const A=d*f-a;for(let T=0;T<c;T++){const x=T*h-r;g.push(x,-A,0),_.push(0,0,1),m.push(T/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<o;A++){const T=A+c*d,x=A+c*(d+1),N=A+1+c*(d+1),w=A+1+c*d;p.push(T,x,w),p.push(x,N,w)}this.setIndex(p),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.width,e.height,e.widthSegments,e.heightSegments)}}var zh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gh=`#ifdef USE_ALPHAHASH
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
#endif`,Hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qh=`#ifdef USE_AOMAP
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
#endif`,Yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$h=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qh=`#ifdef USE_IRIDESCENCE
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
#endif`,eu=`#ifdef USE_BUMPMAP
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
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cu=`#define PI 3.141592653589793
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
} // validated`,hu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uu=`vec3 transformedNormal = objectNormal;
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
#endif`,du=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gu="gl_FragColor = linearToOutputTexel( gl_FragColor );",_u=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Su=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mu=`#ifdef USE_ENVMAP
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
#endif`,xu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yu=`#ifdef USE_ENVMAP
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
#endif`,Eu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Au=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wu=`#ifdef USE_GRADIENTMAP
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
}`,Cu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lu=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Du=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Iu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ou=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Bu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,ku=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,zu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$u=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ku=`#if defined( USE_POINTS_UV )
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
#endif`,Zu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ju=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ju=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ed=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,td=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,id=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ld=`#ifdef USE_NORMALMAP
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
#endif`,cd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ud=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,md=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ed=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Td=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ad=`#ifdef USE_SKINNING
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
#endif`,wd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cd=`#ifdef USE_SKINNING
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
#endif`,Rd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ld=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dd=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Id=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ud=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zd=`uniform sampler2D t2D;
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
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,qd=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yd=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,$d=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qd=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,ef=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,tf=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,nf=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,sf=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,rf=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,af=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,of=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lf=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,cf=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,hf=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,uf=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,df=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,ff=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,pf=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,mf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,gf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,_f=`uniform vec3 color;
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
}`,vf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Sf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ie={alphahash_fragment:zh,alphahash_pars_fragment:Gh,alphamap_fragment:Hh,alphamap_pars_fragment:Vh,alphatest_fragment:Wh,alphatest_pars_fragment:Xh,aomap_fragment:qh,aomap_pars_fragment:Yh,batching_pars_vertex:$h,batching_vertex:Kh,begin_vertex:Zh,beginnormal_vertex:jh,bsdfs:Jh,iridescence_fragment:Qh,bumpmap_pars_fragment:eu,clipping_planes_fragment:tu,clipping_planes_pars_fragment:nu,clipping_planes_pars_vertex:iu,clipping_planes_vertex:su,color_fragment:ru,color_pars_fragment:au,color_pars_vertex:ou,color_vertex:lu,common:cu,cube_uv_reflection_fragment:hu,defaultnormal_vertex:uu,displacementmap_pars_vertex:du,displacementmap_vertex:fu,emissivemap_fragment:pu,emissivemap_pars_fragment:mu,colorspace_fragment:gu,colorspace_pars_fragment:_u,envmap_fragment:vu,envmap_common_pars_fragment:Su,envmap_pars_fragment:Mu,envmap_pars_vertex:xu,envmap_physical_pars_fragment:Du,envmap_vertex:yu,fog_vertex:Eu,fog_pars_vertex:Tu,fog_fragment:bu,fog_pars_fragment:Au,gradientmap_pars_fragment:wu,lightmap_pars_fragment:Cu,lights_lambert_fragment:Ru,lights_lambert_pars_fragment:Pu,lights_pars_begin:Lu,lights_toon_fragment:Iu,lights_toon_pars_fragment:Uu,lights_phong_fragment:Fu,lights_phong_pars_fragment:Nu,lights_physical_fragment:Ou,lights_physical_pars_fragment:Bu,lights_fragment_begin:ku,lights_fragment_maps:zu,lights_fragment_end:Gu,logdepthbuf_fragment:Hu,logdepthbuf_pars_fragment:Vu,logdepthbuf_pars_vertex:Wu,logdepthbuf_vertex:Xu,map_fragment:qu,map_pars_fragment:Yu,map_particle_fragment:$u,map_particle_pars_fragment:Ku,metalnessmap_fragment:Zu,metalnessmap_pars_fragment:ju,morphinstance_vertex:Ju,morphcolor_vertex:Qu,morphnormal_vertex:ed,morphtarget_pars_vertex:td,morphtarget_vertex:nd,normal_fragment_begin:id,normal_fragment_maps:sd,normal_pars_fragment:rd,normal_pars_vertex:ad,normal_vertex:od,normalmap_pars_fragment:ld,clearcoat_normal_fragment_begin:cd,clearcoat_normal_fragment_maps:hd,clearcoat_pars_fragment:ud,iridescence_pars_fragment:dd,opaque_fragment:fd,packing:pd,premultiplied_alpha_fragment:md,project_vertex:gd,dithering_fragment:_d,dithering_pars_fragment:vd,roughnessmap_fragment:Sd,roughnessmap_pars_fragment:Md,shadowmap_pars_fragment:xd,shadowmap_pars_vertex:yd,shadowmap_vertex:Ed,shadowmask_pars_fragment:Td,skinbase_vertex:bd,skinning_pars_vertex:Ad,skinning_vertex:wd,skinnormal_vertex:Cd,specularmap_fragment:Rd,specularmap_pars_fragment:Pd,tonemapping_fragment:Ld,tonemapping_pars_fragment:Dd,transmission_fragment:Id,transmission_pars_fragment:Ud,uv_pars_fragment:Fd,uv_pars_vertex:Nd,uv_vertex:Od,worldpos_vertex:Bd,background_vert:kd,background_frag:zd,backgroundCube_vert:Gd,backgroundCube_frag:Hd,cube_vert:Vd,cube_frag:Wd,depth_vert:Xd,depth_frag:qd,distanceRGBA_vert:Yd,distanceRGBA_frag:$d,equirect_vert:Kd,equirect_frag:Zd,linedashed_vert:jd,linedashed_frag:Jd,meshbasic_vert:Qd,meshbasic_frag:ef,meshlambert_vert:tf,meshlambert_frag:nf,meshmatcap_vert:sf,meshmatcap_frag:rf,meshnormal_vert:af,meshnormal_frag:of,meshphong_vert:lf,meshphong_frag:cf,meshphysical_vert:hf,meshphysical_frag:uf,meshtoon_vert:df,meshtoon_frag:ff,points_vert:pf,points_frag:mf,shadow_vert:gf,shadow_frag:_f,sprite_vert:vf,sprite_frag:Sf},ne={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Jt={basic:{uniforms:yt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:yt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:yt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:yt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:yt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:yt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:yt([ne.points,ne.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:yt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:yt([ne.common,ne.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:yt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:yt([ne.sprite,ne.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:yt([ne.common,ne.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:yt([ne.lights,ne.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Jt.physical={uniforms:yt([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Es={r:0,b:0,g:0},kn=new Nt,Mf=new Ke;function xf(s,e,t,n,i,r,a){const o=new Fe(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?t:e).get(T)),T}function _(A){let T=!1;const x=g(A);x===null?d(o,l):x&&x.isColor&&(d(x,1),T=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(A,T){const x=g(T);x&&(x.isCubeTexture||x.mapping===Zs)?(u===void 0&&(u=new Ue(new $t(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:wi(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),kn.copy(T.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Mf.makeRotationFromEuler(kn)),u.material.toneMapped=Ve.getTransfer(x.colorSpace)!==Ze,(h!==x||f!==x.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=s.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ue(new en(2,2),new Zt({name:"BackgroundMaterial",uniforms:wi(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:ct,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(x.colorSpace)!==Ze,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=s.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,T){A.getRGB(Es,zl(s)),n.buffers.color.setClear(Es.r,Es.g,Es.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(A,T=1){o.set(A),l=T,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(o,l)},render:_,addToRenderList:m}}function yf(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(M,R,G,z,W){let Z=!1;const X=h(z,G,R);r!==X&&(r=X,c(r.object)),Z=p(M,z,G,W),Z&&g(M,z,G,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,x(M,R,G,z),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function h(M,R,G){const z=G.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let Z=W[R.id];Z===void 0&&(Z={},W[R.id]=Z);let X=Z[z];return X===void 0&&(X=f(l()),Z[z]=X),X}function f(M){const R=[],G=[],z=[];for(let W=0;W<t;W++)R[W]=0,G[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:G,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,R,G,z){const W=r.attributes,Z=R.attributes;let X=0;const ee=G.getAttributes();for(const V in ee)if(ee[V].location>=0){const he=W[V];let Me=Z[V];if(Me===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Me=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Me=M.instanceColor)),he===void 0||he.attribute!==Me||Me&&he.data!==Me.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function g(M,R,G,z){const W={},Z=R.attributes;let X=0;const ee=G.getAttributes();for(const V in ee)if(ee[V].location>=0){let he=Z[V];he===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const Me={};Me.attribute=he,he&&he.data&&(Me.data=he.data),W[V]=Me,X++}r.attributes=W,r.attributesNum=X,r.index=z}function _(){const M=r.newAttributes;for(let R=0,G=M.length;R<G;R++)M[R]=0}function m(M){d(M,0)}function d(M,R){const G=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;G[M]=1,z[M]===0&&(s.enableVertexAttribArray(M),z[M]=1),W[M]!==R&&(s.vertexAttribDivisor(M,R),W[M]=R)}function A(){const M=r.newAttributes,R=r.enabledAttributes;for(let G=0,z=R.length;G<z;G++)R[G]!==M[G]&&(s.disableVertexAttribArray(G),R[G]=0)}function T(M,R,G,z,W,Z,X){X===!0?s.vertexAttribIPointer(M,R,G,W,Z):s.vertexAttribPointer(M,R,G,z,W,Z)}function x(M,R,G,z){_();const W=z.attributes,Z=G.getAttributes(),X=R.defaultAttributeValues;for(const ee in Z){const V=Z[ee];if(V.location>=0){let se=W[ee];if(se===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),se!==void 0){const he=se.normalized,Me=se.itemSize,Ne=e.get(se);if(Ne===void 0)continue;const je=Ne.buffer,Y=Ne.type,te=Ne.bytesPerElement,_e=Y===s.INT||Y===s.UNSIGNED_INT||se.gpuType===Aa;if(se.isInterleavedBufferAttribute){const re=se.data,be=re.stride,Ce=se.offset;if(re.isInstancedInterleavedBuffer){for(let Oe=0;Oe<V.locationSize;Oe++)d(V.location+Oe,re.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Oe=0;Oe<V.locationSize;Oe++)m(V.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,je);for(let Oe=0;Oe<V.locationSize;Oe++)T(V.location+Oe,Me/V.locationSize,Y,he,be*te,(Ce+Me/V.locationSize*Oe)*te,_e)}else{if(se.isInstancedBufferAttribute){for(let re=0;re<V.locationSize;re++)d(V.location+re,se.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let re=0;re<V.locationSize;re++)m(V.location+re);s.bindBuffer(s.ARRAY_BUFFER,je);for(let re=0;re<V.locationSize;re++)T(V.location+re,Me/V.locationSize,Y,he,Me*te,Me/V.locationSize*re*te,_e)}}else if(X!==void 0){const he=X[ee];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(V.location,he);break;case 3:s.vertexAttrib3fv(V.location,he);break;case 4:s.vertexAttrib4fv(V.location,he);break;default:s.vertexAttrib1fv(V.location,he)}}}}A()}function N(){D();for(const M in n){const R=n[M];for(const G in R){const z=R[G];for(const W in z)u(z[W].object),delete z[W];delete R[G]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const G in R){const z=R[G];for(const W in z)u(z[W].object),delete z[W];delete R[G]}delete n[M.id]}function C(M){for(const R in n){const G=n[R];if(G[M.id]===void 0)continue;const z=G[M.id];for(const W in z)u(z[W].object),delete z[W];delete G[M.id]}}function D(){y(),a=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:y,dispose:N,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:A}}function Ef(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Tf(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==Kt&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const D=C===ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Sn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Qt&&!D)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:x,vertexTextures:N,maxSamples:w}}function bf(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Hn,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const A=r?0:n,T=A*4;let x=d.clippingState||null;l.value=x,x=u(g,f,T,p);for(let N=0;N!==T;++N)x[N]=t[N];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,x=p;T!==_;++T,x+=4)a.copy(h[T]).applyMatrix4(A,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Af(s){let e=new WeakMap;function t(a,o){return o===Wr?a.mapping=Ei:o===Xr&&(a.mapping=Ti),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wr||o===Xr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Nh(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Na extends Hl{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _i=4,bo=[.125,.215,.35,.446,.526,.582],Xn=20,Er=new Na,Ao=new Fe;let Tr=null,br=0,Ar=0,wr=!1;const Vn=(1+Math.sqrt(5))/2,di=1/Vn,wo=[new L(-Vn,di,0),new L(Vn,di,0),new L(-di,0,Vn),new L(di,0,Vn),new L(0,Vn,-di),new L(0,Vn,di),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Co{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Tr=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),Ar=this._renderer.getActiveMipmapLevel(),wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Po(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tr,br,Ar),this._renderer.xr.enabled=wr,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===Ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tr=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),Ar=this._renderer.getActiveMipmapLevel(),wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:ns,format:Kt,colorSpace:Ci,depthBuffer:!1},i=Ro(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ro(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wf(r)),this._blurMaterial=Cf(r,e,t)}return i}_compileMaterial(e){const t=new Ue(this._lodPlanes[0],e);this._renderer.compile(t,Er)}_sceneToCubeUV(e,t,n,i){const o=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ao),u.toneMapping=Dn,u.autoClear=!1;const p=new xn({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),g=new Ue(new $t,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Ao),_=!0);for(let d=0;d<6;d++){const A=d%3;A===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):A===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const T=this._cubeSize;Ts(i,A*T,d>2?T:0,T,T),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ei||e.mapping===Ti;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Po());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ue(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ts(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Er)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=wo[(i-r-1)%wo.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ue(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Xn-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Xn;m>Xn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xn}`);const d=[];let A=0;for(let C=0;C<Xn;++C){const D=C/_,y=Math.exp(-D*D/2);d.push(y),C===0?A+=y:C<m&&(A+=2*y)}for(let C=0;C<d.length;C++)d[C]=d[C]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;const x=this._sizeLods[i],N=3*x*(i>T-_i?i-T+_i:0),w=4*(this._cubeSize-x);Ts(t,N,w,3*x,2*x),l.setRenderTarget(t),l.render(h,Er)}}function wf(s){const e=[],t=[],n=[];let i=s;const r=s-_i+1+bo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-_i?l=bo[a-s+_i-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,A=new Float32Array(_*g*p),T=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,D=w>2?0:-1,y=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];A.set(y,_*g*w),T.set(f,m*g*w);const M=[w,w,w,w,w,w];x.set(M,d*g*w)}const N=new bt;N.setAttribute("position",new Et(A,_)),N.setAttribute("uv",new Et(T,m)),N.setAttribute("faceIndex",new Et(x,d)),e.push(N),i>_i&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ro(s,e,t){const n=new Zn(s,e,t);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Cf(s,e,t){const n=new Float32Array(Xn),i=new L(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Po(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Lo(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Oa(){return`

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
	`}function Rf(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Wr||l===Xr,u=l===Ei||l===Ti;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Co(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new Co(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Pf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Wi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Lf(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete i[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const A=p.array;_=p.version;for(let T=0,x=A.length;T<x;T+=3){const N=A[T+0],w=A[T+1],C=A[T+2];f.push(N,w,w,C,C,N)}}else if(g!==void 0){const A=g.array;_=g.version;for(let T=0,x=A.length/3-1;T<x;T+=3){const N=T+0,w=T+1,C=T+2;f.push(N,w,w,C,C,N)}}else return;const m=new(Dl(f)?kl:Bl)(f,1);m.version=_;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Df(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){s.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,f*a,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let A=0;A<g;A++)d+=p[A]*_[A];t.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function If(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Uf(s,e,t){const n=new WeakMap,i=new at;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let y=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let T=0;p===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let x=o.attributes.position.count*T,N=1;x>e.maxTextureSize&&(N=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const w=new Float32Array(x*N*4*h),C=new Ul(w,x,N,h);C.type=Qt,C.needsUpdate=!0;const D=T*4;for(let M=0;M<h;M++){const R=m[M],G=d[M],z=A[M],W=x*N*4*M;for(let Z=0;Z<R.count;Z++){const X=Z*D;p===!0&&(i.fromBufferAttribute(R,Z),w[W+X+0]=i.x,w[W+X+1]=i.y,w[W+X+2]=i.z,w[W+X+3]=0),g===!0&&(i.fromBufferAttribute(G,Z),w[W+X+4]=i.x,w[W+X+5]=i.y,w[W+X+6]=i.z,w[W+X+7]=0),_===!0&&(i.fromBufferAttribute(z,Z),w[W+X+8]=i.x,w[W+X+9]=i.y,w[W+X+10]=i.z,w[W+X+11]=z.itemSize===4?i.w:1)}}f={count:h,texture:C,size:new Ee(x,N)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Ff(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Xl extends Mt{constructor(e,t,n,i,r,a,o,l,c,u=Mi){if(u!==Mi&&u!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Mi&&(n=Kn),n===void 0&&u===Ai&&(n=bi),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Tt,this.minFilter=l!==void 0?l:Tt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ql=new Mt,Do=new Xl(1,1),Yl=new Ul,$l=new xh,Kl=new Vl,Io=[],Uo=[],Fo=new Float32Array(16),No=new Float32Array(9),Oo=new Float32Array(4);function Ii(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Io[i];if(r===void 0&&(r=new Float32Array(i),Io[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function ht(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ut(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Js(s,e){let t=Uo[e];t===void 0&&(t=new Int32Array(e),Uo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Nf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Of(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2fv(this.addr,e),ut(t,e)}}function Bf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;s.uniform3fv(this.addr,e),ut(t,e)}}function kf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4fv(this.addr,e),ut(t,e)}}function zf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;Oo.set(n),s.uniformMatrix2fv(this.addr,!1,Oo),ut(t,n)}}function Gf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;No.set(n),s.uniformMatrix3fv(this.addr,!1,No),ut(t,n)}}function Hf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;Fo.set(n),s.uniformMatrix4fv(this.addr,!1,Fo),ut(t,n)}}function Vf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Wf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2iv(this.addr,e),ut(t,e)}}function Xf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;s.uniform3iv(this.addr,e),ut(t,e)}}function qf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4iv(this.addr,e),ut(t,e)}}function Yf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function $f(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2uiv(this.addr,e),ut(t,e)}}function Kf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;s.uniform3uiv(this.addr,e),ut(t,e)}}function Zf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4uiv(this.addr,e),ut(t,e)}}function jf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Do.compareFunction=Ll,r=Do):r=ql,t.setTexture2D(e||r,i)}function Jf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$l,i)}function Qf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Kl,i)}function ep(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Yl,i)}function tp(s){switch(s){case 5126:return Nf;case 35664:return Of;case 35665:return Bf;case 35666:return kf;case 35674:return zf;case 35675:return Gf;case 35676:return Hf;case 5124:case 35670:return Vf;case 35667:case 35671:return Wf;case 35668:case 35672:return Xf;case 35669:case 35673:return qf;case 5125:return Yf;case 36294:return $f;case 36295:return Kf;case 36296:return Zf;case 35678:case 36198:case 36298:case 36306:case 35682:return jf;case 35679:case 36299:case 36307:return Jf;case 35680:case 36300:case 36308:case 36293:return Qf;case 36289:case 36303:case 36311:case 36292:return ep}}function np(s,e){s.uniform1fv(this.addr,e)}function ip(s,e){const t=Ii(e,this.size,2);s.uniform2fv(this.addr,t)}function sp(s,e){const t=Ii(e,this.size,3);s.uniform3fv(this.addr,t)}function rp(s,e){const t=Ii(e,this.size,4);s.uniform4fv(this.addr,t)}function ap(s,e){const t=Ii(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function op(s,e){const t=Ii(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function lp(s,e){const t=Ii(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function cp(s,e){s.uniform1iv(this.addr,e)}function hp(s,e){s.uniform2iv(this.addr,e)}function up(s,e){s.uniform3iv(this.addr,e)}function dp(s,e){s.uniform4iv(this.addr,e)}function fp(s,e){s.uniform1uiv(this.addr,e)}function pp(s,e){s.uniform2uiv(this.addr,e)}function mp(s,e){s.uniform3uiv(this.addr,e)}function gp(s,e){s.uniform4uiv(this.addr,e)}function _p(s,e,t){const n=this.cache,i=e.length,r=Js(t,i);ht(n,r)||(s.uniform1iv(this.addr,r),ut(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||ql,r[a])}function vp(s,e,t){const n=this.cache,i=e.length,r=Js(t,i);ht(n,r)||(s.uniform1iv(this.addr,r),ut(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||$l,r[a])}function Sp(s,e,t){const n=this.cache,i=e.length,r=Js(t,i);ht(n,r)||(s.uniform1iv(this.addr,r),ut(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Kl,r[a])}function Mp(s,e,t){const n=this.cache,i=e.length,r=Js(t,i);ht(n,r)||(s.uniform1iv(this.addr,r),ut(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Yl,r[a])}function xp(s){switch(s){case 5126:return np;case 35664:return ip;case 35665:return sp;case 35666:return rp;case 35674:return ap;case 35675:return op;case 35676:return lp;case 5124:case 35670:return cp;case 35667:case 35671:return hp;case 35668:case 35672:return up;case 35669:case 35673:return dp;case 5125:return fp;case 36294:return pp;case 36295:return mp;case 36296:return gp;case 35678:case 36198:case 36298:case 36306:case 35682:return _p;case 35679:case 36299:case 36307:return vp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return Mp}}class yp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tp(t.type)}}class Ep{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xp(t.type)}}class Tp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Cr=/(\w+)(\])?(\[|\.)?/g;function Bo(s,e){s.seq.push(e),s.map[e.id]=e}function bp(s,e,t){const n=s.name,i=n.length;for(Cr.lastIndex=0;;){const r=Cr.exec(n),a=Cr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Bo(t,c===void 0?new yp(o,s,e):new Ep(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Tp(o),Bo(t,h)),t=h}}}class Gs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);bp(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ko(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Ap=37297;let wp=0;function Cp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const zo=new Le;function Rp(s){Ve._getMatrix(zo,Ve.workingColorSpace,s);const e=`mat3( ${zo.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(s)){case js:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Go(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Cp(s.getShaderSource(e),a)}else return i}function Pp(s,e){const t=Rp(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Lp(s,e){let t;switch(e){case Dc:t="Linear";break;case Ic:t="Reinhard";break;case Uc:t="Cineon";break;case Fc:t="ACESFilmic";break;case Oc:t="AgX";break;case Bc:t="Neutral";break;case Nc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bs=new L;function Dp(){Ve.getLuminanceCoefficients(bs);const s=bs.x.toFixed(4),e=bs.y.toFixed(4),t=bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ip(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function Up(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Xi(s){return s!==""}function Ho(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Np=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(s){return s.replace(Np,Bp)}const Op=new Map;function Bp(s,e){let t=Ie[e];if(t===void 0){const n=Op.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sa(t)}const kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wo(s){return s.replace(kp,zp)}function zp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Xo(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ml?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===uc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===hn&&(e="SHADOWMAP_TYPE_VSM"),e}function Hp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ei:case Ti:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ti:e="ENVMAP_MODE_REFRACTION";break}return e}function Wp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ba:e="ENVMAP_BLENDING_MULTIPLY";break;case Pc:e="ENVMAP_BLENDING_MIX";break;case Lc:e="ENVMAP_BLENDING_ADD";break}return e}function Xp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function qp(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Gp(t),c=Hp(t),u=Vp(t),h=Wp(t),f=Xp(t),p=Ip(t),g=Up(r),_=i.createProgram();let m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xi).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xi).join(`
`),d.length>0&&(d+=`
`)):(m=[Xo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),d=[Xo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==Dn?Lp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Pp("linearToOutputTexel",t.outputColorSpace),Dp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),a=Sa(a),a=Ho(a,t),a=Vo(a,t),o=Sa(o),o=Ho(o,t),o=Vo(o,t),a=Wo(a),o=Wo(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===no?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===no?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=A+m+a,x=A+d+o,N=ko(i,i.VERTEX_SHADER,T),w=ko(i,i.FRAGMENT_SHADER,x);i.attachShader(_,N),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(R){if(s.debug.checkShaderErrors){const G=i.getProgramInfoLog(_).trim(),z=i.getShaderInfoLog(N).trim(),W=i.getShaderInfoLog(w).trim();let Z=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,N,w);else{const ee=Go(i,N,"vertex"),V=Go(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+ee+`
`+V)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||W==="")&&(X=!1);X&&(R.diagnostics={runnable:Z,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:W,prefix:d}})}i.deleteShader(N),i.deleteShader(w),D=new Gs(i,_),y=Fp(i,_)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Ap)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=w,this}let Yp=0;class $p{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Kp(e),t.set(e,n)),n}}class Kp{constructor(e){this.id=Yp++,this.code=e,this.usedTimes=0}}function Zp(s,e,t,n,i,r,a){const o=new Nl,l=new $p,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,R,G,z){const W=G.fog,Z=z.geometry,X=y.isMeshStandardMaterial?G.environment:null,ee=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),V=ee&&ee.mapping===Zs?ee.image.height:null,se=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const he=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Me=he!==void 0?he.length:0;let Ne=0;Z.morphAttributes.position!==void 0&&(Ne=1),Z.morphAttributes.normal!==void 0&&(Ne=2),Z.morphAttributes.color!==void 0&&(Ne=3);let je,Y,te,_e;if(se){const $e=Jt[se];je=$e.vertexShader,Y=$e.fragmentShader}else je=y.vertexShader,Y=y.fragmentShader,l.update(y),te=l.getVertexShaderID(y),_e=l.getFragmentShaderID(y);const re=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),Ce=z.isInstancedMesh===!0,Oe=z.isBatchedMesh===!0,st=!!y.map,Ge=!!y.matcap,ot=!!ee,F=!!y.aoMap,Ot=!!y.lightMap,Be=!!y.bumpMap,ke=!!y.normalMap,ye=!!y.displacementMap,et=!!y.emissiveMap,xe=!!y.metalnessMap,b=!!y.roughnessMap,v=y.anisotropy>0,O=y.clearcoat>0,$=y.dispersion>0,j=y.iridescence>0,q=y.sheen>0,ve=y.transmission>0,ae=v&&!!y.anisotropyMap,ue=O&&!!y.clearcoatMap,He=O&&!!y.clearcoatNormalMap,J=O&&!!y.clearcoatRoughnessMap,de=j&&!!y.iridescenceMap,Te=j&&!!y.iridescenceThicknessMap,Ae=q&&!!y.sheenColorMap,fe=q&&!!y.sheenRoughnessMap,ze=!!y.specularMap,De=!!y.specularColorMap,Je=!!y.specularIntensityMap,P=ve&&!!y.transmissionMap,ie=ve&&!!y.thicknessMap,H=!!y.gradientMap,K=!!y.alphaMap,ce=y.alphaTest>0,oe=!!y.alphaHash,Re=!!y.extensions;let rt=Dn;y.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(rt=s.toneMapping);const gt={shaderID:se,shaderType:y.type,shaderName:y.name,vertexShader:je,fragmentShader:Y,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&z._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&z.instanceColor!==null,instancingMorph:Ce&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ci,alphaToCoverage:!!y.alphaToCoverage,map:st,matcap:Ge,envMap:ot,envMapMode:ot&&ee.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:Ot,bumpMap:Be,normalMap:ke,displacementMap:f&&ye,emissiveMap:et,normalMapObjectSpace:ke&&y.normalMapType===Hc,normalMapTangentSpace:ke&&y.normalMapType===Ia,metalnessMap:xe,roughnessMap:b,anisotropy:v,anisotropyMap:ae,clearcoat:O,clearcoatMap:ue,clearcoatNormalMap:He,clearcoatRoughnessMap:J,dispersion:$,iridescence:j,iridescenceMap:de,iridescenceThicknessMap:Te,sheen:q,sheenColorMap:Ae,sheenRoughnessMap:fe,specularMap:ze,specularColorMap:De,specularIntensityMap:Je,transmission:ve,transmissionMap:P,thicknessMap:ie,gradientMap:H,opaque:y.transparent===!1&&y.blending===Si&&y.alphaToCoverage===!1,alphaMap:K,alphaTest:ce,alphaHash:oe,combine:y.combine,mapUv:st&&_(y.map.channel),aoMapUv:F&&_(y.aoMap.channel),lightMapUv:Ot&&_(y.lightMap.channel),bumpMapUv:Be&&_(y.bumpMap.channel),normalMapUv:ke&&_(y.normalMap.channel),displacementMapUv:ye&&_(y.displacementMap.channel),emissiveMapUv:et&&_(y.emissiveMap.channel),metalnessMapUv:xe&&_(y.metalnessMap.channel),roughnessMapUv:b&&_(y.roughnessMap.channel),anisotropyMapUv:ae&&_(y.anisotropyMap.channel),clearcoatMapUv:ue&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:He&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(y.sheenRoughnessMap.channel),specularMapUv:ze&&_(y.specularMap.channel),specularColorMapUv:De&&_(y.specularColorMap.channel),specularIntensityMapUv:Je&&_(y.specularIntensityMap.channel),transmissionMapUv:P&&_(y.transmissionMap.channel),thicknessMapUv:ie&&_(y.thicknessMap.channel),alphaMapUv:K&&_(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ke||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(st||K),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:be,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:st&&y.map.isVideoTexture===!0&&Ve.getTransfer(y.map.colorSpace)===Ze,decodeVideoTextureEmissive:et&&y.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(y.emissiveMap.colorSpace)===Ze,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ct,flipSided:y.side===Pt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Re&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&y.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function d(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)M.push(R),M.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(A(M,y),T(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function A(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function T(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function x(y){const M=g[y.type];let R;if(M){const G=Jt[M];R=Gl.clone(G.uniforms)}else R=y.uniforms;return R}function N(y,M){let R;for(let G=0,z=u.length;G<z;G++){const W=u[G];if(W.cacheKey===M){R=W,++R.usedTimes;break}}return R===void 0&&(R=new qp(s,M,y,r),u.push(R)),R}function w(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:N,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:D}}function jp(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Jp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function qo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Yo(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,p,g,_,m){let d=s[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function o(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function l(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Jp),n.length>1&&n.sort(f||qo),i.length>1&&i.sort(f||qo)}function u(){for(let h=e,f=s.length;h<f;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function Qp(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Yo,s.set(n,[a])):i>=r.length?(a=new Yo,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function em(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Fe};break;case"SpotLight":t={position:new L,direction:new L,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function tm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let nm=0;function im(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function sm(s){const e=new em,t=tm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new Ke,a=new Ke;function o(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,A=0,T=0,x=0,N=0,w=0,C=0;c.sort(im);for(let y=0,M=c.length;y<M;y++){const R=c[y],G=R.color,z=R.intensity,W=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=G.r*z,h+=G.g*z,f+=G.b*z;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],z);C++}else if(R.isDirectionalLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const ee=R.shadow,V=t.get(R);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=R.shadow.matrix,A++}n.directional[p]=X,p++}else if(R.isSpotLight){const X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(G).multiplyScalar(z),X.distance=W,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[_]=X;const ee=R.shadow;if(R.map&&(n.spotLightMap[N]=R.map,N++,ee.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[_]=ee.matrix,R.castShadow){const V=t.get(R);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=Z,x++}_++}else if(R.isRectAreaLight){const X=e.get(R);X.color.copy(G).multiplyScalar(z),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=X,m++}else if(R.isPointLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const ee=R.shadow,V=t.get(R);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,V.shadowCameraNear=ee.camera.near,V.shadowCameraFar=ee.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=R.shadow.matrix,T++}n.point[g]=X,g++}else if(R.isHemisphereLight){const X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(z),X.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[d]=X,d++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==d||D.numDirectionalShadows!==A||D.numPointShadows!==T||D.numSpotShadows!==x||D.numSpotMaps!==N||D.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=x+N-w,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=d,D.numDirectionalShadows=A,D.numPointShadows=T,D.numSpotShadows=x,D.numSpotMaps=N,D.numLightProbes=C,n.version=nm++)}function l(c,u){let h=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const T=c[d];if(T.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(T.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function $o(s){const e=new sm(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function rm(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new $o(s),e.set(i,[o])):r>=a.length?(o=new $o(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class am extends jn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class om extends jn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cm=`uniform sampler2D shadow_pass;
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
}`;function hm(s,e,t){let n=new Fa;const i=new Ee,r=new Ee,a=new at,o=new am({depthPacking:Gc}),l=new om,c={},u=t.maxTextureSize,h={[ct]:Pt,[Pt]:ct,[Ct]:Ct},f=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:lm,fragmentShader:cm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new bt;g.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ue(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ml;let d=this.type;this.render=function(w,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=s.getRenderTarget(),M=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Ln),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=d!==hn&&this.type===hn,W=d===hn&&this.type!==hn;for(let Z=0,X=w.length;Z<X;Z++){const ee=w[Z],V=ee.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const se=V.getFrameExtents();if(i.multiply(se),r.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/se.x),i.x=r.x*se.x,V.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/se.y),i.y=r.y*se.y,V.mapSize.y=r.y)),V.map===null||z===!0||W===!0){const Me=this.type!==hn?{minFilter:Tt,magFilter:Tt}:{};V.map!==null&&V.map.dispose(),V.map=new Zn(i.x,i.y,Me),V.map.texture.name=ee.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const he=V.getViewportCount();for(let Me=0;Me<he;Me++){const Ne=V.getViewport(Me);a.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),G.viewport(a),V.updateMatrices(ee,Me),n=V.getFrustum(),x(C,D,V.camera,ee,this.type)}V.isPointLightShadow!==!0&&this.type===hn&&A(V,D),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(y,M,R)};function A(w,C){const D=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Zn(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,D,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,D,p,_,null)}function T(w,C,D,y){let M=null;const R=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)M=R;else if(M=D.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=M.uuid,z=C.uuid;let W=c[G];W===void 0&&(W={},c[G]=W);let Z=W[z];Z===void 0&&(Z=M.clone(),W[z]=Z,C.addEventListener("dispose",N)),M=Z}if(M.visible=C.visible,M.wireframe=C.wireframe,y===hn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=s.properties.get(M);G.light=D}return M}function x(w,C,D,y,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===hn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const z=e.update(w),W=w.material;if(Array.isArray(W)){const Z=z.groups;for(let X=0,ee=Z.length;X<ee;X++){const V=Z[X],se=W[V.materialIndex];if(se&&se.visible){const he=T(w,se,y,M);w.onBeforeShadow(s,w,C,D,z,he,V),s.renderBufferDirect(D,null,z,he,w,V),w.onAfterShadow(s,w,C,D,z,he,V)}}}else if(W.visible){const Z=T(w,W,y,M);w.onBeforeShadow(s,w,C,D,z,Z,null),s.renderBufferDirect(D,null,z,Z,w,null),w.onAfterShadow(s,w,C,D,z,Z,null)}}const G=w.children;for(let z=0,W=G.length;z<W;z++)x(G[z],C,D,y,M)}function N(w){w.target.removeEventListener("dispose",N);for(const D in c){const y=c[D],M=w.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const um={[Or]:Br,[kr]:Hr,[zr]:Vr,[yi]:Gr,[Br]:Or,[Hr]:kr,[Vr]:zr,[Gr]:yi};function dm(s,e){function t(){let P=!1;const ie=new at;let H=null;const K=new at(0,0,0,0);return{setMask:function(ce){H!==ce&&!P&&(s.colorMask(ce,ce,ce,ce),H=ce)},setLocked:function(ce){P=ce},setClear:function(ce,oe,Re,rt,gt){gt===!0&&(ce*=rt,oe*=rt,Re*=rt),ie.set(ce,oe,Re,rt),K.equals(ie)===!1&&(s.clearColor(ce,oe,Re,rt),K.copy(ie))},reset:function(){P=!1,H=null,K.set(-1,0,0,0)}}}function n(){let P=!1,ie=!1,H=null,K=null,ce=null;return{setReversed:function(oe){if(ie!==oe){const Re=e.get("EXT_clip_control");ie?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT);const rt=ce;ce=null,this.setClear(rt)}ie=oe},getReversed:function(){return ie},setTest:function(oe){oe?re(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(oe){H!==oe&&!P&&(s.depthMask(oe),H=oe)},setFunc:function(oe){if(ie&&(oe=um[oe]),K!==oe){switch(oe){case Or:s.depthFunc(s.NEVER);break;case Br:s.depthFunc(s.ALWAYS);break;case kr:s.depthFunc(s.LESS);break;case yi:s.depthFunc(s.LEQUAL);break;case zr:s.depthFunc(s.EQUAL);break;case Gr:s.depthFunc(s.GEQUAL);break;case Hr:s.depthFunc(s.GREATER);break;case Vr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=oe}},setLocked:function(oe){P=oe},setClear:function(oe){ce!==oe&&(ie&&(oe=1-oe),s.clearDepth(oe),ce=oe)},reset:function(){P=!1,H=null,K=null,ce=null,ie=!1}}}function i(){let P=!1,ie=null,H=null,K=null,ce=null,oe=null,Re=null,rt=null,gt=null;return{setTest:function($e){P||($e?re(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function($e){ie!==$e&&!P&&(s.stencilMask($e),ie=$e)},setFunc:function($e,Gt,tn){(H!==$e||K!==Gt||ce!==tn)&&(s.stencilFunc($e,Gt,tn),H=$e,K=Gt,ce=tn)},setOp:function($e,Gt,tn){(oe!==$e||Re!==Gt||rt!==tn)&&(s.stencilOp($e,Gt,tn),oe=$e,Re=Gt,rt=tn)},setLocked:function($e){P=$e},setClear:function($e){gt!==$e&&(s.clearStencil($e),gt=$e)},reset:function(){P=!1,ie=null,H=null,K=null,ce=null,oe=null,Re=null,rt=null,gt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,A=null,T=null,x=null,N=null,w=null,C=new Fe(0,0,0),D=0,y=!1,M=null,R=null,G=null,z=null,W=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ee=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=ee>=1):V.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=ee>=2);let se=null,he={};const Me=s.getParameter(s.SCISSOR_BOX),Ne=s.getParameter(s.VIEWPORT),je=new at().fromArray(Me),Y=new at().fromArray(Ne);function te(P,ie,H,K){const ce=new Uint8Array(4),oe=s.createTexture();s.bindTexture(P,oe),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Re=0;Re<H;Re++)P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?s.texImage3D(ie,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,ce):s.texImage2D(ie+Re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ce);return oe}const _e={};_e[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),_e[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_e[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(s.DEPTH_TEST),a.setFunc(yi),Be(!1),ke(Za),re(s.CULL_FACE),F(Ln);function re(P){u[P]!==!0&&(s.enable(P),u[P]=!0)}function be(P){u[P]!==!1&&(s.disable(P),u[P]=!1)}function Ce(P,ie){return h[P]!==ie?(s.bindFramebuffer(P,ie),h[P]=ie,P===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ie),P===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ie),!0):!1}function Oe(P,ie){let H=p,K=!1;if(P){H=f.get(ie),H===void 0&&(H=[],f.set(ie,H));const ce=P.textures;if(H.length!==ce.length||H[0]!==s.COLOR_ATTACHMENT0){for(let oe=0,Re=ce.length;oe<Re;oe++)H[oe]=s.COLOR_ATTACHMENT0+oe;H.length=ce.length,K=!0}}else H[0]!==s.BACK&&(H[0]=s.BACK,K=!0);K&&s.drawBuffers(H)}function st(P){return g!==P?(s.useProgram(P),g=P,!0):!1}const Ge={[Wn]:s.FUNC_ADD,[fc]:s.FUNC_SUBTRACT,[pc]:s.FUNC_REVERSE_SUBTRACT};Ge[mc]=s.MIN,Ge[gc]=s.MAX;const ot={[_c]:s.ZERO,[vc]:s.ONE,[Sc]:s.SRC_COLOR,[Fr]:s.SRC_ALPHA,[bc]:s.SRC_ALPHA_SATURATE,[Ec]:s.DST_COLOR,[xc]:s.DST_ALPHA,[Mc]:s.ONE_MINUS_SRC_COLOR,[Nr]:s.ONE_MINUS_SRC_ALPHA,[Tc]:s.ONE_MINUS_DST_COLOR,[yc]:s.ONE_MINUS_DST_ALPHA,[Ac]:s.CONSTANT_COLOR,[wc]:s.ONE_MINUS_CONSTANT_COLOR,[Cc]:s.CONSTANT_ALPHA,[Rc]:s.ONE_MINUS_CONSTANT_ALPHA};function F(P,ie,H,K,ce,oe,Re,rt,gt,$e){if(P===Ln){_===!0&&(be(s.BLEND),_=!1);return}if(_===!1&&(re(s.BLEND),_=!0),P!==dc){if(P!==m||$e!==y){if((d!==Wn||x!==Wn)&&(s.blendEquation(s.FUNC_ADD),d=Wn,x=Wn),$e)switch(P){case Si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ja:s.blendFunc(s.ONE,s.ONE);break;case Ja:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ja:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ja:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}A=null,T=null,N=null,w=null,C.set(0,0,0),D=0,m=P,y=$e}return}ce=ce||ie,oe=oe||H,Re=Re||K,(ie!==d||ce!==x)&&(s.blendEquationSeparate(Ge[ie],Ge[ce]),d=ie,x=ce),(H!==A||K!==T||oe!==N||Re!==w)&&(s.blendFuncSeparate(ot[H],ot[K],ot[oe],ot[Re]),A=H,T=K,N=oe,w=Re),(rt.equals(C)===!1||gt!==D)&&(s.blendColor(rt.r,rt.g,rt.b,gt),C.copy(rt),D=gt),m=P,y=!1}function Ot(P,ie){P.side===Ct?be(s.CULL_FACE):re(s.CULL_FACE);let H=P.side===Pt;ie&&(H=!H),Be(H),P.blending===Si&&P.transparent===!1?F(Ln):F(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const K=P.stencilWrite;o.setTest(K),K&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),et(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?re(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function Be(P){M!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),M=P)}function ke(P){P!==cc?(re(s.CULL_FACE),P!==R&&(P===Za?s.cullFace(s.BACK):P===hc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),R=P}function ye(P){P!==G&&(X&&s.lineWidth(P),G=P)}function et(P,ie,H){P?(re(s.POLYGON_OFFSET_FILL),(z!==ie||W!==H)&&(s.polygonOffset(ie,H),z=ie,W=H)):be(s.POLYGON_OFFSET_FILL)}function xe(P){P?re(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function b(P){P===void 0&&(P=s.TEXTURE0+Z-1),se!==P&&(s.activeTexture(P),se=P)}function v(P,ie,H){H===void 0&&(se===null?H=s.TEXTURE0+Z-1:H=se);let K=he[H];K===void 0&&(K={type:void 0,texture:void 0},he[H]=K),(K.type!==P||K.texture!==ie)&&(se!==H&&(s.activeTexture(H),se=H),s.bindTexture(P,ie||_e[P]),K.type=P,K.texture=ie)}function O(){const P=he[se];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function He(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(P){je.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),je.copy(P))}function fe(P){Y.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),Y.copy(P))}function ze(P,ie){let H=c.get(ie);H===void 0&&(H=new WeakMap,c.set(ie,H));let K=H.get(P);K===void 0&&(K=s.getUniformBlockIndex(ie,P.name),H.set(P,K))}function De(P,ie){const K=c.get(ie).get(P);l.get(ie)!==K&&(s.uniformBlockBinding(ie,K,P.__bindingPointIndex),l.set(ie,K))}function Je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},se=null,he={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,A=null,T=null,x=null,N=null,w=null,C=new Fe(0,0,0),D=0,y=!1,M=null,R=null,G=null,z=null,W=null,je.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:be,bindFramebuffer:Ce,drawBuffers:Oe,useProgram:st,setBlending:F,setMaterial:Ot,setFlipSided:Be,setCullFace:ke,setLineWidth:ye,setPolygonOffset:et,setScissorTest:xe,activeTexture:b,bindTexture:v,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:j,texImage2D:de,texImage3D:Te,updateUBOMapping:ze,uniformBlockBinding:De,texStorage2D:He,texStorage3D:J,texSubImage2D:q,texSubImage3D:ve,compressedTexSubImage2D:ae,compressedTexSubImage3D:ue,scissor:Ae,viewport:fe,reset:Je}}function Ko(s,e,t,n){const i=fm(n);switch(t){case bl:return s*e;case wl:return s*e;case Cl:return s*e*2;case Ra:return s*e/i.components*i.byteLength;case Pa:return s*e/i.components*i.byteLength;case Rl:return s*e*2/i.components*i.byteLength;case La:return s*e*2/i.components*i.byteLength;case Al:return s*e*3/i.components*i.byteLength;case Kt:return s*e*4/i.components*i.byteLength;case Da:return s*e*4/i.components*i.byteLength;case Ns:case Os:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bs:case ks:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $r:case Zr:return Math.max(s,16)*Math.max(e,8)/4;case Yr:case Kr:return Math.max(s,8)*Math.max(e,8)/2;case jr:case Jr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ea:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ta:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case na:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ia:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case sa:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ra:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case aa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case oa:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case la:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ca:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ha:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ua:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case da:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case fa:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case zs:case pa:case ma:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Pl:case ga:return Math.ceil(s/4)*Math.ceil(e/4)*8;case _a:case va:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fm(s){switch(s){case Sn:case yl:return{byteLength:1,components:1};case Qi:case El:case ns:return{byteLength:2,components:1};case wa:case Ca:return{byteLength:2,components:4};case Kn:case Aa:case Qt:return{byteLength:4,components:1};case Tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function pm(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(b){}function g(b,v){return p?new OffscreenCanvas(b,v):Vs("canvas")}function _(b,v,O){let $=1;const j=xe(b);if((j.width>O||j.height>O)&&($=O/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){const q=Math.floor($*j.width),ve=Math.floor($*j.height);h===void 0&&(h=g(q,ve));const ae=v?g(q,ve):h;return ae.width=q,ae.height=ve,ae.getContext("2d").drawImage(b,0,0,q,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+ve+")."),ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function m(b){return b.generateMipmaps}function d(b){s.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(b,v,O,$,j=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=v;if(v===s.RED&&(O===s.FLOAT&&(q=s.R32F),O===s.HALF_FLOAT&&(q=s.R16F),O===s.UNSIGNED_BYTE&&(q=s.R8)),v===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.R8UI),O===s.UNSIGNED_SHORT&&(q=s.R16UI),O===s.UNSIGNED_INT&&(q=s.R32UI),O===s.BYTE&&(q=s.R8I),O===s.SHORT&&(q=s.R16I),O===s.INT&&(q=s.R32I)),v===s.RG&&(O===s.FLOAT&&(q=s.RG32F),O===s.HALF_FLOAT&&(q=s.RG16F),O===s.UNSIGNED_BYTE&&(q=s.RG8)),v===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RG8UI),O===s.UNSIGNED_SHORT&&(q=s.RG16UI),O===s.UNSIGNED_INT&&(q=s.RG32UI),O===s.BYTE&&(q=s.RG8I),O===s.SHORT&&(q=s.RG16I),O===s.INT&&(q=s.RG32I)),v===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RGB8UI),O===s.UNSIGNED_SHORT&&(q=s.RGB16UI),O===s.UNSIGNED_INT&&(q=s.RGB32UI),O===s.BYTE&&(q=s.RGB8I),O===s.SHORT&&(q=s.RGB16I),O===s.INT&&(q=s.RGB32I)),v===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),O===s.UNSIGNED_INT&&(q=s.RGBA32UI),O===s.BYTE&&(q=s.RGBA8I),O===s.SHORT&&(q=s.RGBA16I),O===s.INT&&(q=s.RGBA32I)),v===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),v===s.RGBA){const ve=j?js:Ve.getTransfer($);O===s.FLOAT&&(q=s.RGBA32F),O===s.HALF_FLOAT&&(q=s.RGBA16F),O===s.UNSIGNED_BYTE&&(q=ve===Ze?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(b,v){let O;return b?v===null||v===Kn||v===bi?O=s.DEPTH24_STENCIL8:v===Qt?O=s.DEPTH32F_STENCIL8:v===Qi&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Kn||v===bi?O=s.DEPTH_COMPONENT24:v===Qt?O=s.DEPTH_COMPONENT32F:v===Qi&&(O=s.DEPTH_COMPONENT16),O}function N(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Tt&&b.minFilter!==Rt?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function w(b){const v=b.target;v.removeEventListener("dispose",w),D(v),v.isVideoTexture&&u.delete(v)}function C(b){const v=b.target;v.removeEventListener("dispose",C),M(v)}function D(b){const v=n.get(b);if(v.__webglInit===void 0)return;const O=b.source,$=f.get(O);if($){const j=$[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(b),Object.keys($).length===0&&f.delete(O)}n.remove(b)}function y(b){const v=n.get(b);s.deleteTexture(v.__webglTexture);const O=b.source,$=f.get(O);delete $[v.__cacheKey],a.memory.textures--}function M(b){const v=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let j=0;j<v.__webglFramebuffer[$].length;j++)s.deleteFramebuffer(v.__webglFramebuffer[$][j]);else s.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)s.deleteFramebuffer(v.__webglFramebuffer[$]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=b.textures;for(let $=0,j=O.length;$<j;$++){const q=n.get(O[$]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(O[$])}n.remove(b)}let R=0;function G(){R=0}function z(){const b=R;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),R+=1,b}function W(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function Z(b,v){const O=n.get(b);if(b.isVideoTexture&&ye(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,b,v);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+v)}function X(b,v){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Y(O,b,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+v)}function ee(b,v){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Y(O,b,v);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+v)}function V(b,v){const O=n.get(b);if(b.version>0&&O.__version!==b.version){te(O,b,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+v)}const se={[Ft]:s.REPEAT,[Yn]:s.CLAMP_TO_EDGE,[qr]:s.MIRRORED_REPEAT},he={[Tt]:s.NEAREST,[kc]:s.NEAREST_MIPMAP_NEAREST,[rs]:s.NEAREST_MIPMAP_LINEAR,[Rt]:s.LINEAR,[nr]:s.LINEAR_MIPMAP_NEAREST,[$n]:s.LINEAR_MIPMAP_LINEAR},Me={[Vc]:s.NEVER,[Kc]:s.ALWAYS,[Wc]:s.LESS,[Ll]:s.LEQUAL,[Xc]:s.EQUAL,[$c]:s.GEQUAL,[qc]:s.GREATER,[Yc]:s.NOTEQUAL};function Ne(b,v){if(v.type===Qt&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Rt||v.magFilter===nr||v.magFilter===rs||v.magFilter===$n||v.minFilter===Rt||v.minFilter===nr||v.minFilter===rs||v.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,se[v.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,se[v.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,se[v.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,he[v.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,he[v.minFilter]),v.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,Me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Tt||v.minFilter!==rs&&v.minFilter!==$n||v.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function je(b,v){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",w));const $=v.source;let j=f.get($);j===void 0&&(j={},f.set($,j));const q=W(v);if(q!==b.__cacheKey){j[q]===void 0&&(j[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[q].usedTimes++;const ve=j[b.__cacheKey];ve!==void 0&&(j[b.__cacheKey].usedTimes--,ve.usedTimes===0&&y(v)),b.__cacheKey=q,b.__webglTexture=j[q].texture}return O}function Y(b,v,O){let $=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=s.TEXTURE_3D);const j=je(b,v),q=v.source;t.bindTexture($,b.__webglTexture,s.TEXTURE0+O);const ve=n.get(q);if(q.version!==ve.__version||j===!0){t.activeTexture(s.TEXTURE0+O);const ae=Ve.getPrimaries(Ve.workingColorSpace),ue=v.colorSpace===Pn?null:Ve.getPrimaries(v.colorSpace),He=v.colorSpace===Pn||ae===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let J=_(v.image,!1,i.maxTextureSize);J=et(v,J);const de=r.convert(v.format,v.colorSpace),Te=r.convert(v.type);let Ae=T(v.internalFormat,de,Te,v.colorSpace,v.isVideoTexture);Ne($,v);let fe;const ze=v.mipmaps,De=v.isVideoTexture!==!0,Je=ve.__version===void 0||j===!0,P=q.dataReady,ie=N(v,J);if(v.isDepthTexture)Ae=x(v.format===Ai,v.type),Je&&(De?t.texStorage2D(s.TEXTURE_2D,1,Ae,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,Ae,J.width,J.height,0,de,Te,null));else if(v.isDataTexture)if(ze.length>0){De&&Je&&t.texStorage2D(s.TEXTURE_2D,ie,Ae,ze[0].width,ze[0].height);for(let H=0,K=ze.length;H<K;H++)fe=ze[H],De?P&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,fe.width,fe.height,de,Te,fe.data):t.texImage2D(s.TEXTURE_2D,H,Ae,fe.width,fe.height,0,de,Te,fe.data);v.generateMipmaps=!1}else De?(Je&&t.texStorage2D(s.TEXTURE_2D,ie,Ae,J.width,J.height),P&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,de,Te,J.data)):t.texImage2D(s.TEXTURE_2D,0,Ae,J.width,J.height,0,de,Te,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){De&&Je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,Ae,ze[0].width,ze[0].height,J.depth);for(let H=0,K=ze.length;H<K;H++)if(fe=ze[H],v.format!==Kt)if(de!==null)if(De){if(P)if(v.layerUpdates.size>0){const ce=Ko(fe.width,fe.height,v.format,v.type);for(const oe of v.layerUpdates){const Re=fe.data.subarray(oe*ce/fe.data.BYTES_PER_ELEMENT,(oe+1)*ce/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,oe,fe.width,fe.height,1,de,Re)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,J.depth,de,fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,Ae,fe.width,fe.height,J.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?P&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,J.depth,de,Te,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,H,Ae,fe.width,fe.height,J.depth,0,de,Te,fe.data)}else{De&&Je&&t.texStorage2D(s.TEXTURE_2D,ie,Ae,ze[0].width,ze[0].height);for(let H=0,K=ze.length;H<K;H++)fe=ze[H],v.format!==Kt?de!==null?De?P&&t.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,H,Ae,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?P&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,fe.width,fe.height,de,Te,fe.data):t.texImage2D(s.TEXTURE_2D,H,Ae,fe.width,fe.height,0,de,Te,fe.data)}else if(v.isDataArrayTexture)if(De){if(Je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,Ae,J.width,J.height,J.depth),P)if(v.layerUpdates.size>0){const H=Ko(J.width,J.height,v.format,v.type);for(const K of v.layerUpdates){const ce=J.data.subarray(K*H/J.data.BYTES_PER_ELEMENT,(K+1)*H/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,J.width,J.height,1,de,Te,ce)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,de,Te,J.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,J.width,J.height,J.depth,0,de,Te,J.data);else if(v.isData3DTexture)De?(Je&&t.texStorage3D(s.TEXTURE_3D,ie,Ae,J.width,J.height,J.depth),P&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,de,Te,J.data)):t.texImage3D(s.TEXTURE_3D,0,Ae,J.width,J.height,J.depth,0,de,Te,J.data);else if(v.isFramebufferTexture){if(Je)if(De)t.texStorage2D(s.TEXTURE_2D,ie,Ae,J.width,J.height);else{let H=J.width,K=J.height;for(let ce=0;ce<ie;ce++)t.texImage2D(s.TEXTURE_2D,ce,Ae,H,K,0,de,Te,null),H>>=1,K>>=1}}else if(ze.length>0){if(De&&Je){const H=xe(ze[0]);t.texStorage2D(s.TEXTURE_2D,ie,Ae,H.width,H.height)}for(let H=0,K=ze.length;H<K;H++)fe=ze[H],De?P&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,de,Te,fe):t.texImage2D(s.TEXTURE_2D,H,Ae,de,Te,fe);v.generateMipmaps=!1}else if(De){if(Je){const H=xe(J);t.texStorage2D(s.TEXTURE_2D,ie,Ae,H.width,H.height)}P&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,de,Te,J)}else t.texImage2D(s.TEXTURE_2D,0,Ae,de,Te,J);m(v)&&d($),ve.__version=q.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function te(b,v,O){if(v.image.length!==6)return;const $=je(b,v),j=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+O);const q=n.get(j);if(j.version!==q.__version||$===!0){t.activeTexture(s.TEXTURE0+O);const ve=Ve.getPrimaries(Ve.workingColorSpace),ae=v.colorSpace===Pn?null:Ve.getPrimaries(v.colorSpace),ue=v.colorSpace===Pn||ve===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const He=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,de=[];for(let K=0;K<6;K++)!He&&!J?de[K]=_(v.image[K],!0,i.maxCubemapSize):de[K]=J?v.image[K].image:v.image[K],de[K]=et(v,de[K]);const Te=de[0],Ae=r.convert(v.format,v.colorSpace),fe=r.convert(v.type),ze=T(v.internalFormat,Ae,fe,v.colorSpace),De=v.isVideoTexture!==!0,Je=q.__version===void 0||$===!0,P=j.dataReady;let ie=N(v,Te);Ne(s.TEXTURE_CUBE_MAP,v);let H;if(He){De&&Je&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ie,ze,Te.width,Te.height);for(let K=0;K<6;K++){H=de[K].mipmaps;for(let ce=0;ce<H.length;ce++){const oe=H[ce];v.format!==Kt?Ae!==null?De?P&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,oe.width,oe.height,Ae,oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,ze,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,oe.width,oe.height,Ae,fe,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,ze,oe.width,oe.height,0,Ae,fe,oe.data)}}}else{if(H=v.mipmaps,De&&Je){H.length>0&&ie++;const K=xe(de[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ie,ze,K.width,K.height)}for(let K=0;K<6;K++)if(J){De?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,de[K].width,de[K].height,Ae,fe,de[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ze,de[K].width,de[K].height,0,Ae,fe,de[K].data);for(let ce=0;ce<H.length;ce++){const Re=H[ce].image[K].image;De?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,Re.width,Re.height,Ae,fe,Re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,ze,Re.width,Re.height,0,Ae,fe,Re.data)}}else{De?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ae,fe,de[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ze,Ae,fe,de[K]);for(let ce=0;ce<H.length;ce++){const oe=H[ce];De?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,Ae,fe,oe.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,ze,Ae,fe,oe.image[K])}}}m(v)&&d(s.TEXTURE_CUBE_MAP),q.__version=j.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function _e(b,v,O,$,j,q){const ve=r.convert(O.format,O.colorSpace),ae=r.convert(O.type),ue=T(O.internalFormat,ve,ae,O.colorSpace),He=n.get(v),J=n.get(O);if(J.__renderTarget=v,!He.__hasExternalTextures){const de=Math.max(1,v.width>>q),Te=Math.max(1,v.height>>q);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,q,ue,de,Te,v.depth,0,ve,ae,null):t.texImage2D(j,q,ue,de,Te,0,ve,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),ke(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,j,J.__webglTexture,0,Be(v)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,j,J.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function re(b,v,O){if(s.bindRenderbuffer(s.RENDERBUFFER,b),v.depthBuffer){const $=v.depthTexture,j=$&&$.isDepthTexture?$.type:null,q=x(v.stencilBuffer,j),ve=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=Be(v);ke(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,q,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,q,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,q,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,b)}else{const $=v.textures;for(let j=0;j<$.length;j++){const q=$[j],ve=r.convert(q.format,q.colorSpace),ae=r.convert(q.type),ue=T(q.internalFormat,ve,ae,q.colorSpace),He=Be(v);O&&ke(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,He,ue,v.width,v.height):ke(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,He,ue,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ue,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const j=$.__webglTexture,q=Be(v);if(v.depthTexture.format===Mi)ke(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(v.depthTexture.format===Ai)ke(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ce(b){const v=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const $=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=$}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");be(v.__webglFramebuffer,b)}else if(O){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=s.createRenderbuffer(),re(v.__webglDepthbuffer[$],b,!1);else{const j=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,q)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),re(v.__webglDepthbuffer,b,!1);else{const $=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,j)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(b,v,O){const $=n.get(b);v!==void 0&&_e($.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Ce(b)}function st(b){const v=b.texture,O=n.get(b),$=n.get(v);b.addEventListener("dispose",C);const j=b.textures,q=b.isWebGLCubeRenderTarget===!0,ve=j.length>1;if(ve||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=v.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let ue=0;ue<v.mipmaps.length;ue++)O.__webglFramebuffer[ae][ue]=s.createFramebuffer()}else O.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)O.__webglFramebuffer[ae]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(ve)for(let ae=0,ue=j.length;ae<ue;ae++){const He=n.get(j[ae]);He.__webglTexture===void 0&&(He.__webglTexture=s.createTexture(),a.memory.textures++)}if(b.samples>0&&ke(b)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ae=0;ae<j.length;ae++){const ue=j[ae];O.__webglColorRenderbuffer[ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ae]);const He=r.convert(ue.format,ue.colorSpace),J=r.convert(ue.type),de=T(ue.internalFormat,He,J,ue.colorSpace,b.isXRRenderTarget===!0),Te=Be(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,de,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,O.__webglColorRenderbuffer[ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),re(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)_e(O.__webglFramebuffer[ae][ue],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else _e(O.__webglFramebuffer[ae],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(v)&&d(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ae=0,ue=j.length;ae<ue;ae++){const He=j[ae],J=n.get(He);t.bindTexture(s.TEXTURE_2D,J.__webglTexture),Ne(s.TEXTURE_2D,He),_e(O.__webglFramebuffer,b,He,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,0),m(He)&&d(s.TEXTURE_2D)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ae=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),Ne(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)_e(O.__webglFramebuffer[ue],b,v,s.COLOR_ATTACHMENT0,ae,ue);else _e(O.__webglFramebuffer,b,v,s.COLOR_ATTACHMENT0,ae,0);m(v)&&d(ae),t.unbindTexture()}b.depthBuffer&&Ce(b)}function Ge(b){const v=b.textures;for(let O=0,$=v.length;O<$;O++){const j=v[O];if(m(j)){const q=A(b),ve=n.get(j).__webglTexture;t.bindTexture(q,ve),d(q),t.unbindTexture()}}}const ot=[],F=[];function Ot(b){if(b.samples>0){if(ke(b)===!1){const v=b.textures,O=b.width,$=b.height;let j=s.COLOR_BUFFER_BIT;const q=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=n.get(b),ae=v.length>1;if(ae)for(let ue=0;ue<v.length;ue++)t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ue=0;ue<v.length;ue++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);const He=n.get(v[ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,He,0)}s.blitFramebuffer(0,0,O,$,0,0,O,$,j,s.NEAREST),l===!0&&(ot.length=0,F.length=0,ot.push(s.COLOR_ATTACHMENT0+ue),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ot.push(q),F.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ae)for(let ue=0;ue<v.length;ue++){t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);const He=n.get(v[ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,He,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Be(b){return Math.min(i.maxSamples,b.samples)}function ke(b){const v=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ye(b){const v=a.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function et(b,v){const O=b.colorSpace,$=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Ci&&O!==Pn&&(Ve.getTransfer(O)===Ze?($!==Kt||j!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function xe(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=ee,this.setTextureCube=V,this.rebindTextures=Oe,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ke}function mm(s,e){function t(n,i=Pn){let r;const a=Ve.getTransfer(i);if(n===Sn)return s.UNSIGNED_BYTE;if(n===wa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ca)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Tl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===yl)return s.BYTE;if(n===El)return s.SHORT;if(n===Qi)return s.UNSIGNED_SHORT;if(n===Aa)return s.INT;if(n===Kn)return s.UNSIGNED_INT;if(n===Qt)return s.FLOAT;if(n===ns)return s.HALF_FLOAT;if(n===bl)return s.ALPHA;if(n===Al)return s.RGB;if(n===Kt)return s.RGBA;if(n===wl)return s.LUMINANCE;if(n===Cl)return s.LUMINANCE_ALPHA;if(n===Mi)return s.DEPTH_COMPONENT;if(n===Ai)return s.DEPTH_STENCIL;if(n===Ra)return s.RED;if(n===Pa)return s.RED_INTEGER;if(n===Rl)return s.RG;if(n===La)return s.RG_INTEGER;if(n===Da)return s.RGBA_INTEGER;if(n===Ns||n===Os||n===Bs||n===ks)if(a===Ze)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ns)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ns)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yr||n===$r||n===Kr||n===Zr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$r)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jr||n===Jr||n===Qr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jr||n===Jr)return a===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===fa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ea)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ta)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===na)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ia)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sa)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ra)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===aa)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oa)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===la)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ca)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ha)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ua)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===da)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fa)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zs||n===pa||n===ma)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===zs)return a===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pl||n===ga||n===_a||n===va)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===zs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class gm extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _n extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _m={type:"move"};class Rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_m)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const vm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Mm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Mt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Zt({vertexShader:vm,fragmentShader:Sm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xm extends Ri{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=new Mm,m=t.getContextAttributes();let d=null,A=null;const T=[],x=[],N=new Ee;let w=null;const C=new Ut;C.viewport=new at;const D=new Ut;D.viewport=new at;const y=[C,D],M=new gm;let R=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=T[Y];return te===void 0&&(te=new Rr,T[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=T[Y];return te===void 0&&(te=new Rr,T[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=T[Y];return te===void 0&&(te=new Rr,T[Y]=te),te.getHandSpace()};function z(Y){const te=x.indexOf(Y.inputSource);if(te===-1)return;const _e=T[te];_e!==void 0&&(_e.update(Y.inputSource,Y.frame,c||a),_e.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<T.length;Y++){const te=x[Y];te!==null&&(x[Y]=null,T[Y].disconnect(te))}R=null,G=null,_.reset(),e.setRenderTarget(d),p=null,f=null,h=null,i=null,A=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=function(Y){return pt(this,null,function*(){if(i=Y,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),w=e.getPixelRatio(),e.getSize(N),i.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Zn(p.framebufferWidth,p.framebufferHeight,{format:Kt,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,_e=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?Ai:Mi,_e=m.stencil?bi:Kn);const be={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(be),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Zn(f.textureWidth,f.textureHeight,{format:Kt,type:Sn,depthTexture:new Xl(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=yield i.requestReferenceSpace(o),je.setContext(i),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(Y){for(let te=0;te<Y.removed.length;te++){const _e=Y.removed[te],re=x.indexOf(_e);re>=0&&(x[re]=null,T[re].disconnect(_e))}for(let te=0;te<Y.added.length;te++){const _e=Y.added[te];let re=x.indexOf(_e);if(re===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=x.length){x.push(_e),re=Ce;break}else if(x[Ce]===null){x[Ce]=_e,re=Ce;break}if(re===-1)break}const be=T[re];be&&be.connect(_e)}}const X=new L,ee=new L;function V(Y,te,_e){X.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(_e.matrixWorld);const re=X.distanceTo(ee),be=te.projectionMatrix.elements,Ce=_e.projectionMatrix.elements,Oe=be[14]/(be[10]-1),st=be[14]/(be[10]+1),Ge=(be[9]+1)/be[5],ot=(be[9]-1)/be[5],F=(be[8]-1)/be[0],Ot=(Ce[8]+1)/Ce[0],Be=Oe*F,ke=Oe*Ot,ye=re/(-F+Ot),et=ye*-F;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(et),Y.translateZ(ye),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),be[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const xe=Oe+ye,b=st+ye,v=Be-et,O=ke+(re-et),$=Ge*st/b*xe,j=ot*st/b*xe;Y.projectionMatrix.makePerspective(v,O,$,j,xe,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function se(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let te=Y.near,_e=Y.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),M.near=D.near=C.near=te,M.far=D.far=C.far=_e,(R!==M.near||G!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,G=M.far),C.layers.mask=Y.layers.mask|2,D.layers.mask=Y.layers.mask|4,M.layers.mask=C.layers.mask|D.layers.mask;const re=Y.parent,be=M.cameras;se(M,re);for(let Ce=0;Ce<be.length;Ce++)se(be[Ce],re);be.length===2?V(M,C,D):M.projectionMatrix.copy(C.projectionMatrix),he(Y,M,re)};function he(Y,te,_e){_e===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(_e.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=es*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Me=null;function Ne(Y,te){if(u=te.getViewerPose(c||a),g=te,u!==null){const _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let re=!1;_e.length!==M.cameras.length&&(M.cameras.length=0,re=!0);for(let Ce=0;Ce<_e.length;Ce++){const Oe=_e[Ce];let st=null;if(p!==null)st=p.getViewport(Oe);else{const ot=h.getViewSubImage(f,Oe);st=ot.viewport,Ce===0&&(e.setRenderTargetTextures(A,ot.colorTexture,f.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(A))}let Ge=y[Ce];Ge===void 0&&(Ge=new Ut,Ge.layers.enable(Ce),Ge.viewport=new at,y[Ce]=Ge),Ge.matrix.fromArray(Oe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Oe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(st.x,st.y,st.width,st.height),Ce===0&&(M.matrix.copy(Ge.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),re===!0&&M.cameras.push(Ge)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")){const Ce=h.getDepthInformation(_e[0]);Ce&&Ce.isValid&&Ce.texture&&_.init(e,Ce,i.renderState)}}for(let _e=0;_e<T.length;_e++){const re=x[_e],be=T[_e];re!==null&&be!==void 0&&be.update(re,te,c||a)}Me&&Me(Y,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const je=new Wl;je.setAnimationLoop(Ne),this.setAnimationLoop=function(Y){Me=Y},this.dispose=function(){}}}const zn=new Nt,ym=new Ke;function Em(s,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,zl(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,A,T,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,A,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Pt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Pt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=e.get(d),T=A.envMap,x=A.envMapRotation;T&&(m.envMap.value=T,zn.copy(x),zn.x*=-1,zn.y*=-1,zn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),m.envMapRotation.value.setFromMatrix4(ym.makeRotationFromEuler(zn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=T*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Tm(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const x=T.program;n.uniformBlockBinding(A,x)}function c(A,T){let x=i[A.id];x===void 0&&(g(A),x=u(A),i[A.id]=x,A.addEventListener("dispose",m));const N=T.program;n.updateUBOMapping(A,N);const w=e.render.frame;r[A.id]!==w&&(f(A),r[A.id]=w)}function u(A){const T=h();A.__bindingPointIndex=T;const x=s.createBuffer(),N=A.__size,w=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,N,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,x),x}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const T=i[A.id],x=A.uniforms,N=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let w=0,C=x.length;w<C;w++){const D=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,M=D.length;y<M;y++){const R=D[y];if(p(R,w,y,N)===!0){const G=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let Z=0;Z<z.length;Z++){const X=z[Z],ee=_(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,G+W,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,W),W+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(A,T,x,N){const w=A.value,C=T+"_"+x;if(N[C]===void 0)return typeof w=="number"||typeof w=="boolean"?N[C]=w:N[C]=w.clone(),!0;{const D=N[C];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return N[C]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(A){const T=A.uniforms;let x=0;const N=16;for(let C=0,D=T.length;C<D;C++){const y=Array.isArray(T[C])?T[C]:[T[C]];for(let M=0,R=y.length;M<R;M++){const G=y[M],z=Array.isArray(G.value)?G.value:[G.value];for(let W=0,Z=z.length;W<Z;W++){const X=z[W],ee=_(X),V=x%N,se=V%ee.boundary,he=V+se;x+=se,he!==0&&N-he<ee.storage&&(x+=N-he),G.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=ee.storage}}}const w=x%N;return w>0&&(x+=N-w),A.__size=x,A.__cache={},this}function _(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const x=a.indexOf(T.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function d(){for(const A in i)s.deleteBuffer(i[A]);a=[],i={},r={}}return{bind:l,update:c,dispose:d}}class Zl{constructor(e={}){const{canvas:t=fh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=Dn,this.toneMappingExposure=1;const x=this;let N=!1,w=0,C=0,D=null,y=-1,M=null;const R=new at,G=new at;let z=null;const W=new Fe(0);let Z=0,X=t.width,ee=t.height,V=1,se=null,he=null;const Me=new at(0,0,X,ee),Ne=new at(0,0,X,ee);let je=!1;const Y=new Fa;let te=!1,_e=!1;const re=new Ke,be=new Ke,Ce=new L,Oe=new at,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function ot(){return D===null?V:1}let F=n;function Ot(S,I){return t.getContext(S,I)}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ta}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",oe,!1),F===null){const I="webgl2";if(F=Ot(I,S),F===null)throw Ot(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Be,ke,ye,et,xe,b,v,O,$,j,q,ve,ae,ue,He,J,de,Te,Ae,fe,ze,De,Je,P;function ie(){Be=new Pf(F),Be.init(),De=new mm(F,Be),ke=new Tf(F,Be,e,De),ye=new dm(F,Be),ke.reverseDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),et=new If(F),xe=new jp,b=new pm(F,Be,ye,xe,ke,De,et),v=new Af(x),O=new Rf(x),$=new kh(F),Je=new yf(F,$),j=new Lf(F,$,et,Je),q=new Ff(F,j,$,et),Ae=new Uf(F,ke,b),J=new bf(xe),ve=new Zp(x,v,O,Be,ke,Je,J),ae=new Em(x,xe),ue=new Qp,He=new rm(Be),Te=new xf(x,v,O,ye,q,p,l),de=new hm(x,q,ke),P=new Tm(F,et,ke,ye),fe=new Ef(F,Be,et),ze=new Df(F,Be,et),et.programs=ve.programs,x.capabilities=ke,x.extensions=Be,x.properties=xe,x.renderLists=ue,x.shadowMap=de,x.state=ye,x.info=et}ie();const H=new xm(x,F);this.xr=H,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=Be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(X,ee,!1))},this.getSize=function(S){return S.set(X,ee)},this.setSize=function(S,I,B=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,ee=I,t.width=Math.floor(S*V),t.height=Math.floor(I*V),B===!0&&(t.style.width=S+"px",t.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(X*V,ee*V).floor()},this.setDrawingBufferSize=function(S,I,B){X=S,ee=I,V=B,t.width=Math.floor(S*B),t.height=Math.floor(I*B),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(Me)},this.setViewport=function(S,I,B,k){S.isVector4?Me.set(S.x,S.y,S.z,S.w):Me.set(S,I,B,k),ye.viewport(R.copy(Me).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(Ne)},this.setScissor=function(S,I,B,k){S.isVector4?Ne.set(S.x,S.y,S.z,S.w):Ne.set(S,I,B,k),ye.scissor(G.copy(Ne).multiplyScalar(V).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(S){ye.setScissorTest(je=S)},this.setOpaqueSort=function(S){se=S},this.setTransparentSort=function(S){he=S},this.getClearColor=function(S){return S.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(S=!0,I=!0,B=!0){let k=0;if(S){let U=!1;if(D!==null){const Q=D.texture.format;U=Q===Da||Q===La||Q===Pa}if(U){const Q=D.texture.type,le=Q===Sn||Q===Kn||Q===Qi||Q===bi||Q===wa||Q===Ca,pe=Te.getClearColor(),me=Te.getClearAlpha(),we=pe.r,Pe=pe.g,ge=pe.b;le?(g[0]=we,g[1]=Pe,g[2]=ge,g[3]=me,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=we,_[1]=Pe,_[2]=ge,_[3]=me,F.clearBufferiv(F.COLOR,0,_))}else k|=F.COLOR_BUFFER_BIT}I&&(k|=F.DEPTH_BUFFER_BIT),B&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ue.dispose(),He.dispose(),xe.dispose(),v.dispose(),O.dispose(),q.dispose(),Je.dispose(),P.dispose(),ve.dispose(),H.dispose(),H.removeEventListener("sessionstart",za),H.removeEventListener("sessionend",Ga),In.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const S=et.autoReset,I=de.enabled,B=de.autoUpdate,k=de.needsUpdate,U=de.type;ie(),et.autoReset=S,de.enabled=I,de.autoUpdate=B,de.needsUpdate=k,de.type=U}function oe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Re(S){const I=S.target;I.removeEventListener("dispose",Re),rt(I)}function rt(S){gt(S),xe.remove(S)}function gt(S){const I=xe.get(S).programs;I!==void 0&&(I.forEach(function(B){ve.releaseProgram(B)}),S.isShaderMaterial&&ve.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,B,k,U,Q){I===null&&(I=st);const le=U.isMesh&&U.matrixWorld.determinant()<0,pe=tc(S,I,B,k,U);ye.setMaterial(k,le);let me=B.index,we=1;if(k.wireframe===!0){if(me=j.getWireframeAttribute(B),me===void 0)return;we=2}const Pe=B.drawRange,ge=B.attributes.position;let We=Pe.start*we,Qe=(Pe.start+Pe.count)*we;Q!==null&&(We=Math.max(We,Q.start*we),Qe=Math.min(Qe,(Q.start+Q.count)*we)),me!==null?(We=Math.max(We,0),Qe=Math.min(Qe,me.count)):ge!=null&&(We=Math.max(We,0),Qe=Math.min(Qe,ge.count));const tt=Qe-We;if(tt<0||tt===1/0)return;Je.setup(U,k,pe,B,me);let At,qe=fe;if(me!==null&&(At=$.get(me),qe=ze,qe.setIndex(At)),U.isMesh)k.wireframe===!0?(ye.setLineWidth(k.wireframeLinewidth*ot()),qe.setMode(F.LINES)):qe.setMode(F.TRIANGLES);else if(U.isLine){let Se=k.linewidth;Se===void 0&&(Se=1),ye.setLineWidth(Se*ot()),U.isLineSegments?qe.setMode(F.LINES):U.isLineLoop?qe.setMode(F.LINE_LOOP):qe.setMode(F.LINE_STRIP)}else U.isPoints?qe.setMode(F.POINTS):U.isSprite&&qe.setMode(F.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)qe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Se=U._multiDrawStarts,nn=U._multiDrawCounts,Ye=U._multiDrawCount,Ht=me?$.get(me).bytesPerElement:1,Jn=xe.get(k).currentProgram.getUniforms();for(let Lt=0;Lt<Ye;Lt++)Jn.setValue(F,"_gl_DrawID",Lt),qe.render(Se[Lt]/Ht,nn[Lt])}else if(U.isInstancedMesh)qe.renderInstances(We,tt,U.count);else if(B.isInstancedBufferGeometry){const Se=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,nn=Math.min(B.instanceCount,Se);qe.renderInstances(We,tt,nn)}else qe.render(We,tt)};function $e(S,I,B){S.transparent===!0&&S.side===Ct&&S.forceSinglePass===!1?(S.side=Pt,S.needsUpdate=!0,ss(S,I,B),S.side=ct,S.needsUpdate=!0,ss(S,I,B),S.side=Ct):ss(S,I,B)}this.compile=function(S,I,B=null){B===null&&(B=S),d=He.get(B),d.init(I),T.push(d),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),S!==B&&S.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const k=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){const pe=Q[le];$e(pe,B,U),k.add(pe)}else $e(Q,B,U),k.add(Q)}),T.pop(),d=null,k},this.compileAsync=function(S,I,B=null){const k=this.compile(S,I,B);return new Promise(U=>{function Q(){if(k.forEach(function(le){xe.get(le).currentProgram.isReady()&&k.delete(le)}),k.size===0){U(S);return}setTimeout(Q,10)}Be.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Gt=null;function tn(S){Gt&&Gt(S)}function za(){In.stop()}function Ga(){In.start()}const In=new Wl;In.setAnimationLoop(tn),typeof self!="undefined"&&In.setContext(self),this.setAnimationLoop=function(S){Gt=S,H.setAnimationLoop(S),S===null?In.stop():In.start()},H.addEventListener("sessionstart",za),H.addEventListener("sessionend",Ga),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(I),I=H.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,I,D),d=He.get(S,T.length),d.init(I),T.push(d),be.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Y.setFromProjectionMatrix(be),_e=this.localClippingEnabled,te=J.init(this.clippingPlanes,_e),m=ue.get(S,A.length),m.init(),A.push(m),H.enabled===!0&&H.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&er(Q,I,-1/0,x.sortObjects)}er(S,I,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(se,he),Ge=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Ge&&Te.addToRenderList(m,S),this.info.render.frame++,te===!0&&J.beginShadows();const B=d.state.shadowsArray;de.render(B,S,I),te===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,U=m.transmissive;if(d.setupLights(),I.isArrayCamera){const Q=I.cameras;if(U.length>0)for(let le=0,pe=Q.length;le<pe;le++){const me=Q[le];Va(k,U,S,me)}Ge&&Te.render(S);for(let le=0,pe=Q.length;le<pe;le++){const me=Q[le];Ha(m,S,me,me.viewport)}}else U.length>0&&Va(k,U,S,I),Ge&&Te.render(S),Ha(m,S,I);D!==null&&(b.updateMultisampleRenderTarget(D),b.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(x,S,I),Je.resetDefaultState(),y=-1,M=null,T.pop(),T.length>0?(d=T[T.length-1],te===!0&&J.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function er(S,I,B,k){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){k&&Oe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(be);const le=q.update(S),pe=S.material;pe.visible&&m.push(S,le,pe,B,Oe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){const le=q.update(S),pe=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Oe.copy(S.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Oe.copy(le.boundingSphere.center)),Oe.applyMatrix4(S.matrixWorld).applyMatrix4(be)),Array.isArray(pe)){const me=le.groups;for(let we=0,Pe=me.length;we<Pe;we++){const ge=me[we],We=pe[ge.materialIndex];We&&We.visible&&m.push(S,le,We,B,Oe.z,ge)}}else pe.visible&&m.push(S,le,pe,B,Oe.z,null)}}const Q=S.children;for(let le=0,pe=Q.length;le<pe;le++)er(Q[le],I,B,k)}function Ha(S,I,B,k){const U=S.opaque,Q=S.transmissive,le=S.transparent;d.setupLightsView(B),te===!0&&J.setGlobalState(x.clippingPlanes,B),k&&ye.viewport(R.copy(k)),U.length>0&&is(U,I,B),Q.length>0&&is(Q,I,B),le.length>0&&is(le,I,B),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Va(S,I,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[k.id]===void 0&&(d.state.transmissionRenderTarget[k.id]=new Zn(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?ns:Sn,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));const Q=d.state.transmissionRenderTarget[k.id],le=k.viewport||R;Q.setSize(le.z,le.w);const pe=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor(W),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),Ge&&Te.render(B);const me=x.toneMapping;x.toneMapping=Dn;const we=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),te===!0&&J.setGlobalState(x.clippingPlanes,k),is(S,B,k),b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ge=0,We=I.length;ge<We;ge++){const Qe=I[ge],tt=Qe.object,At=Qe.geometry,qe=Qe.material,Se=Qe.group;if(qe.side===Ct&&tt.layers.test(k.layers)){const nn=qe.side;qe.side=Pt,qe.needsUpdate=!0,Wa(tt,B,k,At,qe,Se),qe.side=nn,qe.needsUpdate=!0,Pe=!0}}Pe===!0&&(b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q))}x.setRenderTarget(pe),x.setClearColor(W,Z),we!==void 0&&(k.viewport=we),x.toneMapping=me}function is(S,I,B){const k=I.isScene===!0?I.overrideMaterial:null;for(let U=0,Q=S.length;U<Q;U++){const le=S[U],pe=le.object,me=le.geometry,we=k===null?le.material:k,Pe=le.group;pe.layers.test(B.layers)&&Wa(pe,I,B,me,we,Pe)}}function Wa(S,I,B,k,U,Q){S.onBeforeRender(x,I,B,k,U,Q),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(x,I,B,k,S,Q),U.transparent===!0&&U.side===Ct&&U.forceSinglePass===!1?(U.side=Pt,U.needsUpdate=!0,x.renderBufferDirect(B,I,k,U,S,Q),U.side=ct,U.needsUpdate=!0,x.renderBufferDirect(B,I,k,U,S,Q),U.side=Ct):x.renderBufferDirect(B,I,k,U,S,Q),S.onAfterRender(x,I,B,k,U,Q)}function ss(S,I,B){I.isScene!==!0&&(I=st);const k=xe.get(S),U=d.state.lights,Q=d.state.shadowsArray,le=U.state.version,pe=ve.getParameters(S,U.state,Q,I,B),me=ve.getProgramCacheKey(pe);let we=k.programs;k.environment=S.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(S.isMeshStandardMaterial?O:v).get(S.envMap||k.environment),k.envMapRotation=k.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,we===void 0&&(S.addEventListener("dispose",Re),we=new Map,k.programs=we);let Pe=we.get(me);if(Pe!==void 0){if(k.currentProgram===Pe&&k.lightsStateVersion===le)return qa(S,pe),Pe}else pe.uniforms=ve.getUniforms(S),S.onBeforeCompile(pe,x),Pe=ve.acquireProgram(pe,me),we.set(me,Pe),k.uniforms=pe.uniforms;const ge=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ge.clippingPlanes=J.uniform),qa(S,pe),k.needsLights=ic(S),k.lightsStateVersion=le,k.needsLights&&(ge.ambientLightColor.value=U.state.ambient,ge.lightProbe.value=U.state.probe,ge.directionalLights.value=U.state.directional,ge.directionalLightShadows.value=U.state.directionalShadow,ge.spotLights.value=U.state.spot,ge.spotLightShadows.value=U.state.spotShadow,ge.rectAreaLights.value=U.state.rectArea,ge.ltc_1.value=U.state.rectAreaLTC1,ge.ltc_2.value=U.state.rectAreaLTC2,ge.pointLights.value=U.state.point,ge.pointLightShadows.value=U.state.pointShadow,ge.hemisphereLights.value=U.state.hemi,ge.directionalShadowMap.value=U.state.directionalShadowMap,ge.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ge.spotShadowMap.value=U.state.spotShadowMap,ge.spotLightMatrix.value=U.state.spotLightMatrix,ge.spotLightMap.value=U.state.spotLightMap,ge.pointShadowMap.value=U.state.pointShadowMap,ge.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Pe,k.uniformsList=null,Pe}function Xa(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=Gs.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function qa(S,I){const B=xe.get(S);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function tc(S,I,B,k,U){I.isScene!==!0&&(I=st),b.resetTextureUnits();const Q=I.fog,le=k.isMeshStandardMaterial?I.environment:null,pe=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ci,me=(k.isMeshStandardMaterial?O:v).get(k.envMap||le),we=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pe=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ge=!!B.morphAttributes.position,We=!!B.morphAttributes.normal,Qe=!!B.morphAttributes.color;let tt=Dn;k.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(tt=x.toneMapping);const At=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,qe=At!==void 0?At.length:0,Se=xe.get(k),nn=d.state.lights;if(te===!0&&(_e===!0||S!==M)){const Bt=S===M&&k.id===y;J.setState(k,S,Bt)}let Ye=!1;k.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==nn.state.version||Se.outputColorSpace!==pe||U.isBatchedMesh&&Se.batching===!1||!U.isBatchedMesh&&Se.batching===!0||U.isBatchedMesh&&Se.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Se.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Se.instancing===!1||!U.isInstancedMesh&&Se.instancing===!0||U.isSkinnedMesh&&Se.skinning===!1||!U.isSkinnedMesh&&Se.skinning===!0||U.isInstancedMesh&&Se.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Se.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Se.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Se.instancingMorph===!1&&U.morphTexture!==null||Se.envMap!==me||k.fog===!0&&Se.fog!==Q||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==J.numPlanes||Se.numIntersection!==J.numIntersection)||Se.vertexAlphas!==we||Se.vertexTangents!==Pe||Se.morphTargets!==ge||Se.morphNormals!==We||Se.morphColors!==Qe||Se.toneMapping!==tt||Se.morphTargetsCount!==qe)&&(Ye=!0):(Ye=!0,Se.__version=k.version);let Ht=Se.currentProgram;Ye===!0&&(Ht=ss(k,I,U));let Jn=!1,Lt=!1,Ui=!1;const nt=Ht.getUniforms(),jt=Se.uniforms;if(ye.useProgram(Ht.program)&&(Jn=!0,Lt=!0,Ui=!0),k.id!==y&&(y=k.id,Lt=!0),Jn||M!==S){ye.buffers.depth.getReversed()?(re.copy(S.projectionMatrix),mh(re),gh(re),nt.setValue(F,"projectionMatrix",re)):nt.setValue(F,"projectionMatrix",S.projectionMatrix),nt.setValue(F,"viewMatrix",S.matrixWorldInverse);const yn=nt.map.cameraPosition;yn!==void 0&&yn.setValue(F,Ce.setFromMatrixPosition(S.matrixWorld)),ke.logarithmicDepthBuffer&&nt.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&nt.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Lt=!0,Ui=!0)}if(U.isSkinnedMesh){nt.setOptional(F,U,"bindMatrix"),nt.setOptional(F,U,"bindMatrixInverse");const Bt=U.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),nt.setValue(F,"boneTexture",Bt.boneTexture,b))}U.isBatchedMesh&&(nt.setOptional(F,U,"batchingTexture"),nt.setValue(F,"batchingTexture",U._matricesTexture,b),nt.setOptional(F,U,"batchingIdTexture"),nt.setValue(F,"batchingIdTexture",U._indirectTexture,b),nt.setOptional(F,U,"batchingColorTexture"),U._colorsTexture!==null&&nt.setValue(F,"batchingColorTexture",U._colorsTexture,b));const Fi=B.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&Ae.update(U,B,Ht),(Lt||Se.receiveShadow!==U.receiveShadow)&&(Se.receiveShadow=U.receiveShadow,nt.setValue(F,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(jt.envMap.value=me,jt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(jt.envMapIntensity.value=I.environmentIntensity),Lt&&(nt.setValue(F,"toneMappingExposure",x.toneMappingExposure),Se.needsLights&&nc(jt,Ui),Q&&k.fog===!0&&ae.refreshFogUniforms(jt,Q),ae.refreshMaterialUniforms(jt,k,V,ee,d.state.transmissionRenderTarget[S.id]),Gs.upload(F,Xa(Se),jt,b)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Gs.upload(F,Xa(Se),jt,b),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&nt.setValue(F,"center",U.center),nt.setValue(F,"modelViewMatrix",U.modelViewMatrix),nt.setValue(F,"normalMatrix",U.normalMatrix),nt.setValue(F,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Bt=k.uniformsGroups;for(let yn=0,En=Bt.length;yn<En;yn++){const Ya=Bt[yn];P.update(Ya,Ht),P.bind(Ya,Ht)}}return Ht}function nc(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function ic(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,I,B){xe.get(S.texture).__webglTexture=I,xe.get(S.depthTexture).__webglTexture=B;const k=xe.get(S);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,I){const B=xe.get(S);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,B=0){D=S,w=I,C=B;let k=!0,U=null,Q=!1,le=!1;if(S){const me=xe.get(S);if(me.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(F.FRAMEBUFFER,null),k=!1;else if(me.__webglFramebuffer===void 0)b.setupRenderTarget(S);else if(me.__hasExternalTextures)b.rebindTextures(S,xe.get(S.texture).__webglTexture,xe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const ge=S.depthTexture;if(me.__boundDepthTexture!==ge){if(ge!==null&&xe.has(ge)&&(S.width!==ge.image.width||S.height!==ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(S)}}const we=S.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(le=!0);const Pe=xe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?U=Pe[I][B]:U=Pe[I],Q=!0):S.samples>0&&b.useMultisampledRTT(S)===!1?U=xe.get(S).__webglMultisampledFramebuffer:Array.isArray(Pe)?U=Pe[B]:U=Pe,R.copy(S.viewport),G.copy(S.scissor),z=S.scissorTest}else R.copy(Me).multiplyScalar(V).floor(),G.copy(Ne).multiplyScalar(V).floor(),z=je;if(ye.bindFramebuffer(F.FRAMEBUFFER,U)&&k&&ye.drawBuffers(S,U),ye.viewport(R),ye.scissor(G),ye.setScissorTest(z),Q){const me=xe.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,B)}else if(le){const me=xe.get(S.texture),we=I||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,me.__webglTexture,B||0,we)}y=-1},this.readRenderTargetPixels=function(S,I,B,k,U,Q,le){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=xe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&le!==void 0&&(pe=pe[le]),pe){ye.bindFramebuffer(F.FRAMEBUFFER,pe);try{const me=S.texture,we=me.format,Pe=me.type;if(!ke.textureFormatReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-k&&B>=0&&B<=S.height-U&&F.readPixels(I,B,k,U,De.convert(we),De.convert(Pe),Q)}finally{const me=D!==null?xe.get(D).__webglFramebuffer:null;ye.bindFramebuffer(F.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=function(S,I,B,k,U,Q,le){return pt(this,null,function*(){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=xe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&le!==void 0&&(pe=pe[le]),pe){const me=S.texture,we=me.format,Pe=me.type;if(!ke.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=S.width-k&&B>=0&&B<=S.height-U){ye.bindFramebuffer(F.FRAMEBUFFER,pe);const ge=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ge),F.bufferData(F.PIXEL_PACK_BUFFER,Q.byteLength,F.STREAM_READ),F.readPixels(I,B,k,U,De.convert(we),De.convert(Pe),0);const We=D!==null?xe.get(D).__webglFramebuffer:null;ye.bindFramebuffer(F.FRAMEBUFFER,We);const Qe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),yield ph(F,Qe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ge),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Q),F.deleteBuffer(ge),F.deleteSync(Qe),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(S,I=null,B=0){S.isTexture!==!0&&(Wi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,S=arguments[1]);const k=Math.pow(2,-B),U=Math.floor(S.image.width*k),Q=Math.floor(S.image.height*k),le=I!==null?I.x:0,pe=I!==null?I.y:0;b.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,B,0,0,le,pe,U,Q),ye.unbindTexture()},this.copyTextureToTexture=function(S,I,B=null,k=null,U=0){S.isTexture!==!0&&(Wi("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1],I=arguments[2],U=arguments[3]||0,B=null);let Q,le,pe,me,we,Pe,ge,We,Qe;const tt=S.isCompressedTexture?S.mipmaps[U]:S.image;B!==null?(Q=B.max.x-B.min.x,le=B.max.y-B.min.y,pe=B.isBox3?B.max.z-B.min.z:1,me=B.min.x,we=B.min.y,Pe=B.isBox3?B.min.z:0):(Q=tt.width,le=tt.height,pe=tt.depth||1,me=0,we=0,Pe=0),k!==null?(ge=k.x,We=k.y,Qe=k.z):(ge=0,We=0,Qe=0);const At=De.convert(I.format),qe=De.convert(I.type);let Se;I.isData3DTexture?(b.setTexture3D(I,0),Se=F.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(b.setTexture2DArray(I,0),Se=F.TEXTURE_2D_ARRAY):(b.setTexture2D(I,0),Se=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);const nn=F.getParameter(F.UNPACK_ROW_LENGTH),Ye=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ht=F.getParameter(F.UNPACK_SKIP_PIXELS),Jn=F.getParameter(F.UNPACK_SKIP_ROWS),Lt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,tt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,tt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,me),F.pixelStorei(F.UNPACK_SKIP_ROWS,we),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Pe);const Ui=S.isDataArrayTexture||S.isData3DTexture,nt=I.isDataArrayTexture||I.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const jt=xe.get(S),Fi=xe.get(I),Bt=xe.get(jt.__renderTarget),yn=xe.get(Fi.__renderTarget);ye.bindFramebuffer(F.READ_FRAMEBUFFER,Bt.__webglFramebuffer),ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let En=0;En<pe;En++)Ui&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xe.get(S).__webglTexture,U,Pe+En),S.isDepthTexture?(nt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xe.get(I).__webglTexture,U,Qe+En),F.blitFramebuffer(me,we,Q,le,ge,We,Q,le,F.DEPTH_BUFFER_BIT,F.NEAREST)):nt?F.copyTexSubImage3D(Se,U,ge,We,Qe+En,me,we,Q,le):F.copyTexSubImage2D(Se,U,ge,We,Qe+En,me,we,Q,le);ye.bindFramebuffer(F.READ_FRAMEBUFFER,null),ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else nt?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(Se,U,ge,We,Qe,Q,le,pe,At,qe,tt.data):I.isCompressedArrayTexture?F.compressedTexSubImage3D(Se,U,ge,We,Qe,Q,le,pe,At,tt.data):F.texSubImage3D(Se,U,ge,We,Qe,Q,le,pe,At,qe,tt):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,ge,We,Q,le,At,qe,tt.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,ge,We,tt.width,tt.height,At,tt.data):F.texSubImage2D(F.TEXTURE_2D,U,ge,We,Q,le,At,qe,tt);F.pixelStorei(F.UNPACK_ROW_LENGTH,nn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ye),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ht),F.pixelStorei(F.UNPACK_SKIP_ROWS,Jn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Lt),U===0&&I.generateMipmaps&&F.generateMipmap(Se),ye.unbindTexture()},this.copyTextureToTexture3D=function(S,I,B=null,k=null,U=0){return S.isTexture!==!0&&(Wi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,S=arguments[2],I=arguments[3],U=arguments[4]||0),Wi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,I,B,k,U)},this.initRenderTarget=function(S){xe.get(S).__webglFramebuffer===void 0&&b.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?b.setTextureCube(S,0):S.isData3DTexture?b.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?b.setTexture2DArray(S,0):b.setTexture2D(S,0),ye.unbindTexture()},this.resetState=function(){w=0,C=0,D=null,ye.reset(),Je.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}class Ba{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=n}clone(){return new Ba(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jl extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nt,this.environmentIntensity=1,this.environmentRotation=new Nt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bm extends Mt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Tt,u=Tt,h,f){super(null,a,o,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zo extends Et{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fi=new Ke,jo=new Ke,As=[],Jo=new Mn,Am=new Ke,zi=new Ue,Gi=new Di;class Ws extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Am)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fi),Jo.copy(e.boundingBox).applyMatrix4(fi),this.boundingBox.union(Jo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fi),Gi.copy(e.boundingSphere).applyMatrix4(fi),this.boundingSphere.union(Gi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(zi.geometry=this.geometry,zi.material=this.material,zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gi.copy(this.boundingSphere),Gi.applyMatrix4(n),e.ray.intersectsSphere(Gi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,fi),jo.multiplyMatrices(n,fi),zi.matrixWorld=jo,zi.raycast(e,As);for(let a=0,o=As.length;a<o;a++){const l=As[a];l.instanceId=r,l.object=this,t.push(l)}As.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bm(new Float32Array(i*this.count),i,this.count,Ra,Qt));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Jl extends jn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xs=new L,qs=new L,Qo=new Ke,Hi=new Fl,ws=new Di,Pr=new L,el=new L;class wm extends ft{constructor(e=new bt,t=new Jl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Xs.fromBufferAttribute(t,i-1),qs.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Xs.distanceTo(qs);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(i),ws.radius+=r,e.ray.intersectsSphere(ws)===!1)return;Qo.copy(i).invert(),Hi.copy(e.ray).applyMatrix4(Qo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const d=u.getX(_),A=u.getX(_+1),T=Cs(this,e,Hi,l,d,A);T&&t.push(T)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),d=Cs(this,e,Hi,l,_,m);d&&t.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const d=Cs(this,e,Hi,l,_,_+1);d&&t.push(d)}if(this.isLineLoop){const _=Cs(this,e,Hi,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Cs(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(Xs.fromBufferAttribute(a,i),qs.fromBufferAttribute(a,r),t.distanceSqToSegment(Xs,qs,Pr,el)>n)return;Pr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Pr);if(!(l<e.near||l>e.far))return{distance:l,point:el.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}class ts extends Mt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ys extends bt{constructor(e=[new Ee(0,-.5),new Ee(.5,0),new Ee(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=St(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/t,h=new L,f=new Ee,p=new L,g=new L,_=new L;let m=0,d=0;for(let A=0;A<=e.length-1;A++)switch(A){case 0:m=e[A+1].x-e[A].x,d=e[A+1].y-e[A].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[A+1].x-e[A].x,d=e[A+1].y-e[A].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let A=0;A<=t;A++){const T=n+A*u*i,x=Math.sin(T),N=Math.cos(T);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*x,h.y=e[w].y,h.z=e[w].x*N,a.push(h.x,h.y,h.z),f.x=A/t,f.y=w/(e.length-1),o.push(f.x,f.y);const C=l[3*w+0]*x,D=l[3*w+1],y=l[3*w+0]*N;c.push(C,D,y)}}for(let A=0;A<t;A++)for(let T=0;T<e.length-1;T++){const x=T+A*e.length,N=x,w=x+e.length,C=x+e.length+1,D=x+1;r.push(N,w,D),r.push(C,D,w)}this.setIndex(r),this.setAttribute("position",new it(a,3)),this.setAttribute("uv",new it(o,2)),this.setAttribute("normal",new it(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.points,e.segments,e.phiStart,e.phiLength)}}class fn extends bt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;A(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new it(h,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(p,2));function A(){const x=new L,N=new L;let w=0;const C=(t-e)/n;for(let D=0;D<=r;D++){const y=[],M=D/r,R=M*(t-e)+e;for(let G=0;G<=i;G++){const z=G/i,W=z*l+o,Z=Math.sin(W),X=Math.cos(W);N.x=R*Z,N.y=-M*n+m,N.z=R*X,h.push(N.x,N.y,N.z),x.set(Z,C,X).normalize(),f.push(x.x,x.y,x.z),p.push(z,1-M),y.push(g++)}_.push(y)}for(let D=0;D<i;D++)for(let y=0;y<r;y++){const M=_[y][D],R=_[y+1][D],G=_[y+1][D+1],z=_[y][D+1];(e>0||y!==0)&&(u.push(M,R,z),w+=3),(t>0||y!==r-1)&&(u.push(R,G,z),w+=3)}c.addGroup(d,w,0),d+=w}function T(x){const N=g,w=new Ee,C=new L;let D=0;const y=x===!0?e:t,M=x===!0?1:-1;for(let G=1;G<=i;G++)h.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const R=g;for(let G=0;G<=i;G++){const W=G/i*l+o,Z=Math.cos(W),X=Math.sin(W);C.x=y*X,C.y=m*M,C.z=y*Z,h.push(C.x,C.y,C.z),f.push(0,M,0),w.x=Z*.5+.5,w.y=X*.5*M+.5,p.push(w.x,w.y),g++}for(let G=0;G<i;G++){const z=N+G,W=R+G;x===!0?u.push(W,W+1,z):u.push(W+1,W,z),D+=3}c.addGroup(d,D,x===!0?1:2),d+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vi extends bt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new L,f=new L,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const A=[],T=d/n;let x=0;d===0&&a===0?x=.5/t:d===n&&l===Math.PI&&(x=-.5/t);for(let N=0;N<=t;N++){const w=N/t;h.x=-e*Math.cos(i+w*r)*Math.sin(a+T*o),h.y=e*Math.cos(a+T*o),h.z=e*Math.sin(i+w*r)*Math.sin(a+T*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(w+x,1-T),A.push(c++)}u.push(A)}for(let d=0;d<n;d++)for(let A=0;A<t;A++){const T=u[d][A+1],x=u[d][A],N=u[d+1][A],w=u[d+1][A+1];(d!==0||a>0)&&p.push(T,x,w),(d!==n-1||l<Math.PI)&&p.push(x,N,w)}this.setIndex(p),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qs extends bt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new L,h=new L,f=new L;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,d=(i+1)*(p-1)+g,A=(i+1)*p+g;a.push(_,m,A),a.push(m,d,A)}this.setIndex(a),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ka extends bt{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],u=[],h=new L,f=new L,p=new L,g=new L,_=new L,m=new L,d=new L;for(let T=0;T<=n;++T){const x=T/n*r*Math.PI*2;A(x,r,a,e,p),A(x+.01,r,a,e,g),m.subVectors(g,p),d.addVectors(g,p),_.crossVectors(m,d),d.crossVectors(_,m),_.normalize(),d.normalize();for(let N=0;N<=i;++N){const w=N/i*Math.PI*2,C=-t*Math.cos(w),D=t*Math.sin(w);h.x=p.x+(C*d.x+D*_.x),h.y=p.y+(C*d.y+D*_.y),h.z=p.z+(C*d.z+D*_.z),l.push(h.x,h.y,h.z),f.subVectors(h,p).normalize(),c.push(f.x,f.y,f.z),u.push(T/n),u.push(N/i)}}for(let T=1;T<=n;T++)for(let x=1;x<=i;x++){const N=(i+1)*(T-1)+(x-1),w=(i+1)*T+(x-1),C=(i+1)*T+x,D=(i+1)*(T-1)+x;o.push(N,w,D),o.push(w,C,D)}this.setIndex(o),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(u,2));function A(T,x,N,w,C){const D=Math.cos(T),y=Math.sin(T),M=N/x*T,R=Math.cos(M);C.x=w*(2+R)*.5*D,C.y=w*(2+R)*y*.5,C.z=w*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Ng extends Zt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Rs extends jn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ia,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mt extends jn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ia,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ql extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Cm extends Ql{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Lr=new Ke,tl=new L,nl=new L;class Rm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fa,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;tl.setFromMatrixPosition(e.matrixWorld),t.position.copy(tl),nl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nl),t.updateMatrixWorld(),Lr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Pm extends Rm{constructor(){super(new Na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lm extends Ql{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Pm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Dm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=il(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=il();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function il(){return performance.now()}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ta}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ta);const Im=2;class Um{constructor(){E(this,"scene");E(this,"camera");E(this,"renderer");E(this,"postProcessing",null);E(this,"_contextLost",!1);this.scene=this.createScene(),this.camera=this.createCamera(),this.renderer=this.createRenderer(),this.setupLights(),this.setupContextLossHandling()}createScene(){const e=new jl;return e.fog=new Ba(8900331,30,120),e}createCamera(){const e=window.innerWidth/window.innerHeight,t=new Ut(60,e,.1,200);return t.position.set(0,5,10),t.lookAt(0,0,-10),t}createRenderer(){const e=new Zl({antialias:!0,powerPreference:"high-performance",alpha:!0});e.setClearColor(8900331,1);const t=Math.min(window.devicePixelRatio,Im);e.setPixelRatio(t),e.setSize(window.innerWidth,window.innerHeight);const n=document.getElementById("canvas");return n&&n.appendChild(e.domElement),e}setupContextLossHandling(){const e=this.renderer.domElement;e.addEventListener("webglcontextlost",t=>{t.preventDefault(),this._contextLost=!0,this.showContextLostOverlay()}),e.addEventListener("webglcontextrestored",()=>{this._contextLost=!1,this.hideContextLostOverlay()})}showContextLostOverlay(){let e=document.getElementById("webgl-context-lost");e||(e=document.createElement("div"),e.id="webgl-context-lost",e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:10000;",e.innerHTML=`
        <div style="text-align:center;color:#fff;font-family:Poppins,sans-serif;">
          <h2 style="color:#ffa500;">Graphics Context Lost</h2>
          <p style="color:#ccc;margin-top:12px;">The game's graphics were interrupted.</p>
          <p style="color:#999;margin-top:8px;">Waiting for recovery... If this persists, refresh the page.</p>
        </div>`,document.body.appendChild(e)),e.style.display="flex"}hideContextLostOverlay(){const e=document.getElementById("webgl-context-lost");e&&(e.style.display="none")}setupLights(){const e=new Cm(8900331,16770244,.7);this.scene.add(e);const t=new Lm(16775388,.6);t.position.set(5,10,5),this.scene.add(t)}getScene(){return this.scene}getCamera(){return this.camera}getRenderer(){return this.renderer}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.postProcessing&&this.postProcessing.resize&&this.postProcessing.resize(e,t)}setPostProcessing(e){this.postProcessing=e}render(){this._contextLost||(this.postProcessing&&this.postProcessing.isEnabled()?this.postProcessing.render():this.renderer.render(this.scene,this.camera))}}class Fm{constructor(){E(this,"clock");E(this,"systems",[]);E(this,"_running",!1);E(this,"_paused",!1);E(this,"animationId",null);this.clock=new Dm}registerSystem(e){this.systems.push(e)}unregisterSystem(e){const t=this.systems.indexOf(e);t!==-1&&this.systems.splice(t,1)}start(){this._running||(this._running=!0,this._paused=!1,this.clock.start(),this.loop())}stop(){this._running=!1,this._paused=!1,this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null)}pause(){this._paused=!0}resume(){this._paused=!1}loop(){if(this._running){if(!this._paused){const e=Math.min(this.clock.getDelta(),.1);for(const t of this.systems)t(e)}this.animationId=requestAnimationFrame(()=>this.loop())}}get isRunning(){return this._running}get isPaused(){return this._paused}}var Xe=(s=>(s[s.MENU=0]="MENU",s[s.PLAYING=1]="PLAYING",s[s.PAUSED=2]="PAUSED",s[s.GAMEOVER=3]="GAMEOVER",s[s.LEADERBOARD=4]="LEADERBOARD",s[s.SKINS=5]="SKINS",s[s.CHALLENGES=6]="CHALLENGES",s[s.STATS=7]="STATS",s[s.SHOP=8]="SHOP",s))(Xe||{});const qt=class qt{constructor(){E(this,"_entries",[]);this.loadFromStorage()}sanitizeName(e){return e.replace(/<[^>]*>/g,"").replace(/[\x00-\x1F\x7F]/g,"").trim().slice(0,qt.MAX_NAME_LENGTH)||"Anonymous"}loadFromStorage(){try{const e=localStorage.getItem(qt.STORAGE_KEY);if(e){const t=JSON.parse(e);this._entries=t.map(n=>{var i,r;return{score:(i=n.score)!=null?i:0,date:(r=n.date)!=null?r:"",name:n.name||"Anonymous"}})}}catch(e){console.error("Failed to load leaderboard from storage:",e),this._entries=[]}}saveToStorage(){try{localStorage.setItem(qt.STORAGE_KEY,JSON.stringify(this._entries))}catch(e){console.error("Failed to save leaderboard to storage:",e)}}addScore(e,t="Anonymous"){const n=this.sanitizeName(t),i=new Date().toLocaleDateString(),r={score:e,date:i,name:n};this._entries.push(r),this._entries.sort((a,o)=>o.score-a.score),this._entries.length>qt.MAX_ENTRIES&&(this._entries=this._entries.slice(0,qt.MAX_ENTRIES)),this.saveToStorage()}getTopScores(){return[...this._entries]}getHighScore(){return this._entries.length>0?this._entries[0].score:0}isHighScore(e){return this._entries.length<qt.MAX_ENTRIES?e>0:e>this._entries[this._entries.length-1].score}};E(qt,"STORAGE_KEY","toilet_runner_leaderboard"),E(qt,"MAX_ENTRIES",10),E(qt,"MAX_NAME_LENGTH",20);let Ma=qt;var un=(s=>(s.LOW="low",s.MEDIUM="medium",s.HIGH="high",s))(un||{});class Ki{static initialize(){return pt(this,null,function*(){return yield this.detectCapabilities(),this.getConfig()})}static detectCapabilities(){return pt(this,null,function*(){if(!document.createElement("canvas").getContext("webgl2")){this.tier="low";return}const n=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),i=navigator.deviceMemory&&navigator.deviceMemory<4;if(n||i)this.tier="low";else{const r=yield this.runQuickBenchmark();r<20?this.tier="low":r<40?this.tier="medium":this.tier="high"}})}static runQuickBenchmark(){return pt(this,null,function*(){const e=new Zl({antialias:!1});e.setSize(100,100);const t=new jl,n=new Ut(75,1,.1,1e3),i=new ka(.5,.2,64,8),r=new xn,a=new Ue(i,r);t.add(a);const o=performance.now(),l=50;for(let u=0;u<l;u++)a.rotation.x+=.1,a.rotation.y+=.1,e.render(t,n);const c=l/(performance.now()-o)*1e3;return e.dispose(),i.dispose(),r.dispose(),a.removeFromParent(),t.remove(a),e.domElement.remove(),c})}static updateFPS(e){const t=Math.round(1/e);this.fpsSamples.push(t),this.fpsSamples.length>30&&this.fpsSamples.shift()}static getAverageFPS(){return this.fpsSamples.length===0?60:Math.round(this.fpsSamples.reduce((e,t)=>e+t,0)/this.fpsSamples.length)}static getConfig(){switch(this.tier){case"low":return{tier:this.tier,shadows:!1,postProcessing:!1,particles:{collision:15,effects:0},pixelRatio:1,antialias:!1,emojiFaces:!1};case"medium":return{tier:this.tier,shadows:!0,postProcessing:!0,particles:{collision:25,effects:15},pixelRatio:1.5,antialias:!0,emojiFaces:!0};case"high":return{tier:this.tier,shadows:!0,postProcessing:!0,particles:{collision:40,effects:25},pixelRatio:2,antialias:!0,emojiFaces:!0}}}static getCurrentTier(){return this.tier}static setTier(e){this.tier=e,this.fpsSamples=[]}}E(Ki,"tier","medium"),E(Ki,"currentFPS",60),E(Ki,"fpsSamples",[]);const Gn={JUMP_HEIGHT:2.5,TIME_TO_APEX:.4,COYOTE_TIME:.1,JUMP_BUFFER_TIME:.1,LAND_SQUASH_DURATION:.15,LAND_SQUASH_SCALE:.7,get GRAVITY(){return 2*this.JUMP_HEIGHT/(this.TIME_TO_APEX*this.TIME_TO_APEX)},get JUMP_FORCE(){return 2*this.JUMP_HEIGHT/this.TIME_TO_APEX}},Dr=3,Nm=6,Ps=.8,sl=-4,Ls=.5,Om=3,rl=.05,Bm=.25,km=10,zm=6,Gm=.2,Hm=8;class Vm{constructor(e,t,n="classic"){E(this,"_mesh");E(this,"_tpMesh");E(this,"_currentLaneIndex",0);E(this,"_currentX",0);E(this,"_targetX",0);E(this,"_speed",0);E(this,"_wobbleTime",0);E(this,"_isChangingLanes",!1);E(this,"_isNearObstacle",!1);E(this,"_successBounce",0);E(this,"_idleTime",0);E(this,"_scaleY",1);E(this,"_scaleX",1);E(this,"_tiltAngle",0);E(this,"_isDead",!1);E(this,"_deathBounceVelocity",0);E(this,"_characterCustomization");E(this,"_tpMaterial");E(this,"_textureCache",new Map);E(this,"_isJumping",!1);E(this,"_isGrounded",!0);E(this,"_velocityY",0);E(this,"_coyoteTimer",0);E(this,"_jumpBufferTimer",0);E(this,"_landSquashTimer",0);this._mesh=new _n,this._characterCustomization=t;const i=t.getSkins().find(d=>d.id===n)||t.getSkins()[0];this._tpMaterial=new mt({color:this._getMaterialColor(i),map:this.createTPTexture(i),side:Ct});const r=Ps*.36,a=Ps,o=.5,l=[new Ee(a,-o),new Ee(a,o),new Ee(r,o),new Ee(r,-o)],c=new Ys(l,32);this._tpMesh=new Ue(c,this._tpMaterial),this._tpMesh.position.set(0,0,0),this._mesh.add(this._tpMesh);const u=Ps*.28,h=Ps*.35,f=1.05/2,p=[new Ee(h,-f),new Ee(h,f),new Ee(u,f),new Ee(u,-f)],g=new Ys(p,32),_=new mt({color:9139029,map:this.createCardboardTexture(),side:Ct}),m=new Ue(g,_);m.position.set(0,0,0),this._tpMesh.add(m),this._mesh.position.set(0,.5,sl),e.add(this._mesh)}_getMaterialColor(e){return e?e.gradient&&e.gradient.length>=2?16777215:e.color:16777200}_hexToCanvasColor(e){const t=e>>16&255,n=e>>8&255,i=e&255;return`rgb(${t}, ${n}, ${i})`}_generateCacheKey(e){return e?`skin_${e.id}`:"default"}updateSkin(e){const t=this._characterCustomization.getSkins().find(n=>n.id===e);if(t){const n=this._getMaterialColor(t);this._tpMaterial.color.set(n);const i=this.createTPTexture(t);this._tpMaterial.map=i}}createTPTexture(e){const t=this._generateCacheKey(e);if(this._textureCache.has(t)){const o=this._textureCache.get(t);return o.needsUpdate=!0,o}const n=document.createElement("canvas");n.width=512,n.height=256;const i=n.getContext("2d");if(e!=null&&e.pattern&&(e==null?void 0:e.pattern)!=="solid"&&(e==null?void 0:e.pattern)!=="gradient"){const o=e.pattern,l=e.patternColors||["#FFFFFF"];this._drawPattern(i,o,l,512,256)}else if(e&&e.gradient&&e.gradient.length>=2){const o=i.createLinearGradient(0,0,512,0);e.gradient.forEach((l,c)=>{const u=c/(e.gradient.length-1);o.addColorStop(u,this._hexToCanvasColor(l))}),i.fillStyle=o,i.fillRect(0,0,512,256)}else i.fillStyle="#FFFFF0",i.fillRect(0,0,512,256);i.strokeStyle="#E8E8E8",i.lineWidth=2;const r=64;for(let o=0;o<256;o+=r)i.beginPath(),i.moveTo(0,o),i.lineTo(512,o+16),i.stroke();for(let o=-16;o<272;o+=r)i.beginPath(),i.moveTo(0,o),i.lineTo(512,o+16),i.stroke();i.fillStyle="rgba(245, 245, 240, 0.3)";for(let o=0;o<50;o++){const l=Math.random()*512,c=Math.random()*256;i.beginPath(),i.arc(l,c,Math.random()*3+1,0,Math.PI*2),i.fill()}i.strokeStyle="rgba(200, 195, 185, 0.4)",i.lineWidth=1;for(let o=240;o<256;o+=3)i.beginPath(),i.moveTo(0,o),i.lineTo(512,o),i.stroke();const a=new ts(n);return a.wrapS=Ft,a.wrapT=Ft,a.repeat.set(2,1),a.minFilter=Rt,a.magFilter=Rt,a.generateMipmaps=!1,a.needsUpdate=!0,this._textureCache.set(t,a),a}_drawPattern(e,t,n,i,r){switch(t){case"camo":this._drawCamoPattern(e,n,i,r);break;case"rainbow":this._drawRainbowStripes(e,n,i,r);break;case"circuit":this._drawCircuitPattern(e,n,i,r);break;case"flames":this._drawFlamePattern(e,n,i,r);break;case"frost":this._drawFrostPattern(e,n,i,r);break;case"stars":this._drawStarfield(e,n,i,r);break;case"metallic":this._drawMetallicGold(e,n,i,r);break;case"paper":this._drawPaperTexture(e,n,i,r);break;default:e.fillStyle=n[0]||"#FFFFFF",e.fillRect(0,0,i,r)}}_drawCamoPattern(e,t,n,i){const r=t[0]||"#556B2F";e.fillStyle=r,e.fillRect(0,0,n,i);const a=12345,o=c=>{const u=Math.sin(a+c*9999)*1e4;return u-Math.floor(u)},l=t.slice(1);for(let c=0;c<12;c++){e.fillStyle=l[c%l.length],e.beginPath();const u=o(c*3)*n,h=o(c*3+1)*i,f=40+o(c*3+2)*80,p=30+o(c*7)*60;e.ellipse(u,h,f,p,o(c*11)*Math.PI,0,Math.PI*2),e.fill()}for(let c=0;c<8;c++){e.fillStyle=l[(c+2)%l.length],e.beginPath();const u=o(c*5+20)*n,h=o(c*5+21)*i,f=30+o(c*5+22)*50,p=25+o(c*7+10)*40;e.ellipse(u,h,f,p,o(c*13)*Math.PI,0,Math.PI*2),e.fill()}}_drawRainbowStripes(e,t,n,i){const r=e.createLinearGradient(0,0,0,i);t.forEach((a,o)=>{r.addColorStop(o/(t.length-1),a)}),e.fillStyle=r,e.fillRect(0,0,n,i)}_drawCircuitPattern(e,t,n,i){e.fillStyle=t[0]||"#0D0D0D",e.fillRect(0,0,n,i);const r=t.slice(1);e.shadowBlur=8,e.lineWidth=3,e.strokeStyle=r[0]||"#00FFFF",e.shadowColor=r[0]||"#00FFFF";for(let a=32;a<i;a+=64){e.beginPath(),e.moveTo(0,a);let o=0;for(;o<n;){const l=o+40+Math.random()*80,c=a+(Math.random()-.5)*32;e.lineTo(l/2+(o+l)/2,c),e.lineTo(l,a),o=l}e.stroke()}for(let a=32;a<n;a+=64){e.beginPath(),e.moveTo(a,0);let o=0;for(;o<i;){const l=o+40+Math.random()*80,c=a+(Math.random()-.5)*32;e.lineTo(c,l/2+(o+l)/2),e.lineTo(a,l),o=l}e.stroke()}e.strokeStyle=r[1]||"#FF00FF",e.shadowColor=r[1]||"#FF00FF";for(let a=0;a<5;a++){const o=(a*100+50)%n,l=(a*80+30)%i;e.beginPath(),e.moveTo(o,l),e.lineTo(o+60,l),e.lineTo(o+60,l+80),e.lineTo(o+120,l+80),e.stroke()}e.fillStyle=r[0]||"#00FFFF",e.shadowBlur=0;for(let a=32;a<n;a+=64)for(let o=32;o<i;o+=64)e.beginPath(),e.arc(a,o,4,0,Math.PI*2),e.fill()}_drawFlamePattern(e,t,n,i){const r=e.createLinearGradient(0,i,0,0);r.addColorStop(0,t[0]||"#FF4500"),r.addColorStop(.4,t[1]||"#FF6600"),r.addColorStop(.7,t[2]||"#FFD700"),r.addColorStop(1,"#8B0000"),e.fillStyle=r,e.fillRect(0,0,n,i),e.shadowBlur=15,e.shadowColor=t[2]||"#FFD700";for(let a=0;a<8;a++){const o=(a*70+30)%n,l=30+Math.random()*40;e.fillStyle=t[3]||"#FF0000",e.beginPath(),e.moveTo(o-l/2,i),e.quadraticCurveTo(o-l/4,i*.6,o,i*.2),e.quadraticCurveTo(o+l/4,i*.6,o+l/2,i),e.fill()}for(let a=0;a<6;a++){const o=(a*90+15)%n,l=20+Math.random()*30;e.fillStyle=t[4]||"#FF8C00",e.beginPath(),e.moveTo(o-l/2,i),e.quadraticCurveTo(o-l/4,i*.5,o+10,i*.15),e.quadraticCurveTo(o+l/3,i*.5,o+l/2,i),e.fill()}for(let a=0;a<5;a++){const o=(a*110+60)%n,l=15+Math.random()*20;e.fillStyle=t[2]||"#FFD700",e.beginPath(),e.moveTo(o-l/2,i),e.quadraticCurveTo(o,i*.4,o+5,i*.1),e.quadraticCurveTo(o+l/2,i*.4,o+l/2,i),e.fill()}e.shadowBlur=0}_drawFrostPattern(e,t,n,i){const r=e.createLinearGradient(0,0,0,i);r.addColorStop(0,t[0]||"#B0E0E6"),r.addColorStop(.5,t[1]||"#87CEEB"),r.addColorStop(1,t[4]||"#ADD8E6"),e.fillStyle=r,e.fillRect(0,0,n,i);const a=[t[2]||"#FFFFFF",t[3]||"#E0FFFF"];for(let o=0;o<15;o++){const l=(o*37+20)%n,c=(o*41+30)%i,u=15+o%5*8;e.fillStyle=a[o%2],e.beginPath();for(let h=0;h<6;h++){const f=h/6*Math.PI*2-Math.PI/2,p=h%2===0?u:u*.5,g=l+Math.cos(f)*p,_=c+Math.sin(f)*p;h===0?e.moveTo(g,_):e.lineTo(g,_)}e.closePath(),e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.6)",e.lineWidth=1,e.beginPath(),e.moveTo(l,c),e.lineTo(l+u*1.5,c+u*.5),e.stroke(),e.beginPath(),e.moveTo(l,c),e.lineTo(l-u,c+u),e.stroke()}e.fillStyle="rgba(255, 255, 255, 0.8)";for(let o=0;o<40;o++){const l=Math.random()*n,c=Math.random()*i,u=1+Math.random()*2;e.beginPath(),e.arc(l,c,u,0,Math.PI*2),e.fill()}for(let o=0;o<10;o++){const l=Math.random()*n,c=Math.random()*i;e.strokeStyle="rgba(255, 255, 255, 0.4)",e.lineWidth=1,e.beginPath(),e.moveTo(l-8,c),e.lineTo(l+8,c),e.moveTo(l,c-8),e.lineTo(l,c+8),e.stroke()}}_drawStarfield(e,t,n,i){const r=e.createLinearGradient(0,0,0,i);r.addColorStop(0,t[0]||"#1a1a2e"),r.addColorStop(.5,t[1]||"#16213e"),r.addColorStop(1,t[2]||"#0f0f1a"),e.fillStyle=r,e.fillRect(0,0,n,i);const a=[t[3]||"#FFFFFF",t[4]||"#E8E8E8"];for(let o=0;o<50;o++){const l=(o*73+17)%n,c=(o*97+31)%i,u=1+o%4*.8,h=.3+o%5*.15;e.fillStyle=a[o%2],e.globalAlpha=h,e.beginPath(),e.arc(l,c,u,0,Math.PI*2),e.fill()}e.globalAlpha=.15,e.fillStyle=t[3]||"#FFFFFF",e.beginPath(),e.arc(n*.3,i*.4,60,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(n*.7,i*.6,40,0,Math.PI*2),e.fill(),e.globalAlpha=1}_drawMetallicGold(e,t,n,i){const r=e.createLinearGradient(0,0,0,i);r.addColorStop(0,t[0]||"#FFD700"),r.addColorStop(.3,t[1]||"#DAA520"),r.addColorStop(.5,t[0]||"#FFD700"),r.addColorStop(.7,t[2]||"#B8860B"),r.addColorStop(1,t[3]||"#FFA500"),e.fillStyle=r,e.fillRect(0,0,n,i),e.globalAlpha=.3;for(let a=0;a<8;a++){const o=(a*35+10)%i,l=3+a%3*2;e.strokeStyle="#FFFFAA",e.lineWidth=2+a%3,e.beginPath(),e.moveTo(0,o);for(let c=0;c<n;c+=20)e.quadraticCurveTo(c+10,o-l,c+20,o);e.stroke()}e.globalAlpha=.15,e.strokeStyle="#FFFFFF",e.lineWidth=1;for(let a=20;a<n;a+=30){const o=a*7%20-10;e.beginPath(),e.moveTo(a,0),e.lineTo(a+o,i),e.stroke()}e.globalAlpha=1}_drawPaperTexture(e,t,n,i){e.fillStyle=t[0]||"#FFFFFF",e.fillRect(0,0,n,i);const r=54321,a=o=>{const l=Math.sin(r+o*7777)*1e4;return l-Math.floor(l)};e.fillStyle=t[1]||"#F5F5F5";for(let o=0;o<800;o++){const l=a(o*2)*n,c=a(o*2+1)*i,u=.5+a(o)*1.5;e.fillRect(l,c,u,u)}e.strokeStyle="rgba(220, 220, 215, 0.15)",e.lineWidth=1;for(let o=2;o<i;o+=4+Math.random()*3){e.beginPath(),e.moveTo(0,o);let l=0;for(;l<n;)l+=20+Math.random()*40,e.lineTo(l,o+(Math.random()-.5)*2);e.stroke()}e.fillStyle="rgba(200, 200, 195, 0.1)";for(let o=0;o<30;o++){const l=a(o*3+100)*n,c=a(o*3+101)*i;e.beginPath(),e.ellipse(l,c,15+a(o)*25,8+a(o+50)*15,0,0,Math.PI*2),e.fill()}}createCardboardTexture(){if(this._textureCache.has("cardboard")){const i=this._textureCache.get("cardboard");return i.needsUpdate=!0,i}const e=document.createElement("canvas");e.width=256,e.height=128;const t=e.getContext("2d");t.fillStyle="#8B7355",t.fillRect(0,0,256,128);for(let i=0;i<128;i+=4)t.fillStyle=i%8===0?"rgba(0,0,0,0.12)":"rgba(255,255,255,0.08)",t.fillRect(0,i,256,2);t.fillStyle="rgba(60,40,20,0.15)";for(let i=0;i<80;i++){const r=Math.random()*256,a=Math.random()*128;t.fillRect(r,a,1,1)}const n=new ts(e);return n.wrapS=Ft,n.wrapT=Ft,n.repeat.set(3,1),n.minFilter=Rt,n.magFilter=Rt,n.generateMipmaps=!1,n.needsUpdate=!0,this._textureCache.set("cardboard",n),n}_disposeOldTextures(){if(this._textureCache.size>20){const e=this._textureCache.keys().next().value;if(e){const t=this._textureCache.get(e);t&&t.dispose(),this._textureCache.delete(e)}}}moveLeft(){this._isDead||this._currentLaneIndex>-1&&(this._currentLaneIndex--,this._targetX=this._currentLaneIndex*Dr,this._isChangingLanes=!0,this._scaleX=.9,this._scaleY=1.1)}moveRight(){this._isDead||this._currentLaneIndex<1&&(this._currentLaneIndex++,this._targetX=this._currentLaneIndex*Dr,this._isChangingLanes=!0,this._scaleX=.9,this._scaleY=1.1)}jump(){this._isDead||(this._jumpBufferTimer=Gn.JUMP_BUFFER_TIME)}isJumping(){return this._isJumping}getYPosition(){return this._mesh.position.y}update(e){if(this._isDead){this._tpMesh.rotation.x+=e*8,this._deathBounceVelocity-=e*12,this._mesh.position.y+=this._deathBounceVelocity*e,this._mesh.position.y<-.5&&(this._mesh.position.y=-.5);return}this._currentX=dn.lerp(this._currentX,this._targetX,Nm*e),this._mesh.position.x=this._currentX,this._isGrounded?this._coyoteTimer=0:this._coyoteTimer+=e,this._jumpBufferTimer=Math.max(0,this._jumpBufferTimer-e),this._jumpBufferTimer>0&&(this._isGrounded||this._coyoteTimer<Gn.COYOTE_TIME)&&(this._velocityY=Gn.JUMP_FORCE,this._isJumping=!0,this._isGrounded=!1,this._jumpBufferTimer=0,this._coyoteTimer=Gn.COYOTE_TIME),this._velocityY-=Gn.GRAVITY*e,this._mesh.position.y+=this._velocityY*e,this._mesh.position.y<=Ls&&(this._isJumping&&(this._landSquashTimer=Gn.LAND_SQUASH_DURATION,this._scaleY=Gn.LAND_SQUASH_SCALE,this._scaleX=1.2),this._mesh.position.y=Ls,this._velocityY=0,this._isJumping=!1,this._isGrounded=!0),this._landSquashTimer>0&&(this._landSquashTimer-=e,this._landSquashTimer<=0&&(this._landSquashTimer=0));let t=Ls;this._isChangingLanes&&Math.abs(this._currentX-this._targetX)<.05&&(this._isChangingLanes=!1);const n=this._targetX-this._currentX;if(this._isChangingLanes&&Math.abs(n)>.05){const r=-Math.sign(n)*Bm;this._tiltAngle=dn.lerp(this._tiltAngle,r,km*e)}else this._tiltAngle=dn.lerp(this._tiltAngle,0,zm*e);if(!this._isJumping)this._scaleY=dn.lerp(this._scaleY,1,e*8),this._scaleX=dn.lerp(this._scaleX,1,e*8);else{this._velocityY>0;const r=1+Math.abs(this._velocityY)*.02;this._scaleY=dn.lerp(this._scaleY,r,e*5),this._scaleX=dn.lerp(this._scaleX,1/r,e*5)}let i=0;if(!this._isChangingLanes&&!this._isJumping){this._idleTime+=e;const r=this._isNearObstacle?Hm:Om,a=this._isNearObstacle?rl*1.5:rl;i=Math.sin(this._idleTime*r)*a,this._isNearObstacle&&(t+=Math.sin(this._idleTime*15)*.03)}this._tpMesh.rotation.z=i+this._tiltAngle,this._successBounce>.01&&(t+=this._successBounce,this._successBounce*=.8,this._scaleY=1+this._successBounce*2),this._isJumping||(this._mesh.position.y=t),this._mesh.scale.set(this._scaleX,this._scaleY,this._scaleX)}getMesh(){return this._mesh}getPosition(){return this._mesh.position.clone()}getLane(){return this._currentLaneIndex}isChangingLanes(){return this._isChangingLanes}setPosition(e,t,n){this._mesh.position.set(e,t,n),this._currentX=e,this._targetX=e,this._currentLaneIndex=Math.round(e/Dr)}setSpeed(e){this._speed=e}setNearObstacle(e){this._isNearObstacle=e}triggerSuccessBounce(){this._successBounce=Gm}startDeathTumble(){this._isDead=!0,this._deathBounceVelocity=5}reset(){var t,n;this._currentLaneIndex=0,this._currentX=0,this._targetX=0,this._speed=0,this._isChangingLanes=!1,this._isNearObstacle=!1,this._successBounce=0,this._idleTime=0,this._scaleY=1,this._scaleX=1,this._tiltAngle=0,this._isDead=!1,this._deathBounceVelocity=0,this._isJumping=!1,this._isGrounded=!0,this._velocityY=0,this._coyoteTimer=0,this._jumpBufferTimer=0,this._landSquashTimer=0,this._mesh.position.set(0,Ls,sl),this._tpMesh.rotation.set(0,0,0),this._mesh.scale.set(1,1,1);const e=((n=(t=this._characterCustomization).getSelectedSkinId)==null?void 0:n.call(t))||"classic";this.updateSkin(e)}}const Ds=3,Is=10,al=8,ol=30;class Wm{constructor(e){E(this,"scene");E(this,"segments",[]);E(this,"instancedMesh");E(this,"nextInstanceIndex",0);E(this,"freeInstanceIndices",[]);E(this,"lineMesh");E(this,"nextLineIndex",0);E(this,"freeLineIndices",[]);E(this,"floorPlane",null);E(this,"floorTexture",null);E(this,"scrollOffset",0);E(this,"tempMatrix");E(this,"tempVector");this.scene=e,this.tempMatrix=new Ke,this.tempVector=new L;const t=new $t(Ds*3+8,.5,Is),n=new mt({color:16777215}),i=al*2;this.instancedMesh=new Ws(t,n,i),this.scene.add(this.instancedMesh);const r=new en(.12,Is),a=new xn({color:13154472,transparent:!0,opacity:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});this.lineMesh=new Ws(r,a,i*2),this.lineMesh.count=0,this.scene.add(this.lineMesh),this.initializeSegments()}initializeSegments(){for(let t=0;t<al;t++){const n=-40+t*Is;this.createSegment(n)}}createSegment(e){let t;if(this.freeInstanceIndices.length>0)t=this.freeInstanceIndices.pop();else{if(this.nextInstanceIndex>=this.instancedMesh.count)return;t=this.nextInstanceIndex++}this.tempVector.set(0,-.25,e),this.tempMatrix.makeTranslation(this.tempVector.x,this.tempVector.y,this.tempVector.z),this.instancedMesh.setMatrixAt(t,this.tempMatrix);const n=[];for(const r of[-Ds/2,Ds/2]){let a;this.freeLineIndices.length>0?a=this.freeLineIndices.pop():a=this.nextLineIndex++,this.tempMatrix.makeRotationX(-Math.PI/2),this.tempMatrix.setPosition(r,.01,e),this.lineMesh.setMatrixAt(a,this.tempMatrix),n.push(a)}this.lineMesh.count=Math.max(this.lineMesh.count,this.nextLineIndex),this.lineMesh.instanceMatrix.needsUpdate=!0;const i={mesh:this.instancedMesh,z:e,instanceIndex:t,lineIndices:n};this.segments.push(i)}update(e,t){const n=t*e;this.floorTexture&&(this.scrollOffset+=n,this.floorTexture.offset.y=this.scrollOffset/2.5);for(const i of this.segments)i.z+=n,this.instancedMesh.getMatrixAt(i.instanceIndex,this.tempMatrix),this.tempVector.setFromMatrixPosition(this.tempMatrix),this.tempVector.z=i.z,this.tempMatrix.setPosition(this.tempVector),this.instancedMesh.setMatrixAt(i.instanceIndex,this.tempMatrix);for(const i of this.segments)for(const r of i.lineIndices)this.lineMesh.getMatrixAt(r,this.tempMatrix),this.tempVector.setFromMatrixPosition(this.tempMatrix),this.tempVector.z=i.z,this.tempMatrix.makeRotationX(-Math.PI/2),this.tempMatrix.setPosition(this.tempVector.x,.01,this.tempVector.z),this.lineMesh.setMatrixAt(r,this.tempMatrix);this.instancedMesh.instanceMatrix.needsUpdate=!0,this.lineMesh.instanceMatrix.needsUpdate=!0,this.handleSpawnDespawn()}handleSpawnDespawn(){let e=Number.MAX_VALUE,t=-Number.MAX_VALUE,n=-1;for(let i=0;i<this.segments.length;i++){const r=this.segments[i];r.z<e&&(e=r.z),r.z>t&&(t=r.z,n=i)}if(e>-40){const i=e-Is;this.createSegment(i)}if(t>ol){const i=this.segments[n];this.freeInstanceIndices.push(i.instanceIndex);for(const r of i.lineIndices)this.freeLineIndices.push(r);this.segments.splice(n,1)}}getRearZ(){if(this.segments.length===0)return 0;let e=-Number.MAX_VALUE;for(const t of this.segments)t.z>e&&(e=t.z);return e}getFrontZ(){if(this.segments.length===0)return 0;let e=Number.MAX_VALUE;for(const t of this.segments)t.z<e&&(e=t.z);return e}reset(){this.segments=[],this.nextInstanceIndex=0,this.freeInstanceIndices=[],this.nextLineIndex=0,this.freeLineIndices=[],this.lineMesh.count=0,this.scrollOffset=0,this.floorTexture&&(this.floorTexture.offset.y=0),this.initializeSegments()}dispose(){this.scene.remove(this.instancedMesh),this.instancedMesh.geometry.dispose(),this.instancedMesh.material.dispose(),this.scene.remove(this.lineMesh),this.lineMesh.geometry.dispose(),this.lineMesh.material.dispose(),this.floorPlane&&(this.scene.remove(this.floorPlane),this.floorPlane.geometry.dispose(),this.floorPlane.material.dispose())}applyTileTexture(e){const n=Ds*3+8,i=e.clone();i.needsUpdate=!0,i.wrapS=Ft,i.wrapT=Ft,i.repeat.set(4,120/2.5),this.floorTexture=i;const r=new en(n,120),a=new mt({map:i});this.floorPlane=new Ue(r,a),this.floorPlane.rotation.x=-Math.PI/2,this.floorPlane.position.set(0,.01,-120/2+ol),this.scene.add(this.floorPlane),this.instancedMesh.visible=!1}}const pn=class pn{static initialize(){this.canvas=document.createElement("canvas"),this.canvas.width=this.ATLAS_SIZE,this.canvas.height=this.FACE_SIZE;const e=this.canvas.getContext("2d");this.faceConfigs.forEach((t,n)=>{this.drawCartoonFace(e,t,n)}),this.texture=new ts(this.canvas),this.texture.magFilter=Tt,this.texture.minFilter=Tt}static drawCartoonFace(e,t,n){const i=n*this.FACE_SIZE+this.FACE_SIZE/2,r=this.FACE_SIZE/2,a=this.FACE_SIZE/2*.9;e.fillStyle=t.backgroundColor,e.beginPath(),e.arc(i,r,a,0,Math.PI*2),e.fill();const o=e.createRadialGradient(i-a*.3,r-a*.3,0,i,r,a);switch(o.addColorStop(0,"rgba(255, 255, 255, 0.15)"),o.addColorStop(.5,"rgba(255, 255, 255, 0)"),o.addColorStop(1,"rgba(0, 0, 0, 0.2)"),e.fillStyle=o,e.fill(),t.expression){case"angry":this.drawAngryFace(e,i,r,a);break;case"mischievous":this.drawMischievousFace(e,i,r,a);break;case"surprised":this.drawSurprisedFace(e,i,r,a);break;case"sleepy":this.drawSleepyFace(e,i,r,a);break}}static drawAngryFace(e,t,n,i){const r=n-i*.1,a=i*.35,o=i*.2,l=i*.25;this.drawEye(e,t-a,r,o,l*.7),this.drawEye(e,t+a,r,o,l*.7),this.drawPupil(e,t-a,r,o*.4,l*.35),this.drawPupil(e,t+a,r,o*.4,l*.35),e.strokeStyle="#2D1810",e.lineWidth=i*.08,e.lineCap="round",e.beginPath(),e.moveTo(t-a-o,r-l-i*.15),e.lineTo(t-a+o*.3,r-l-i*.05),e.stroke(),e.beginPath(),e.moveTo(t+a+o,r-l-i*.15),e.lineTo(t+a-o*.3,r-l-i*.05),e.stroke(),e.strokeStyle="#2D1810",e.lineWidth=i*.06,e.beginPath(),e.moveTo(t-i*.25,n+i*.45),e.quadraticCurveTo(t,n+i*.35,t+i*.25,n+i*.45),e.stroke(),e.fillStyle="rgba(255, 100, 100, 0.4)",e.beginPath(),e.arc(t-i*.5,n+i*.15,i*.12,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(t+i*.5,n+i*.15,i*.12,0,Math.PI*2),e.fill(),e.fillStyle="rgba(135, 206, 250, 0.8)",this.drawTeardrop(e,t+i*.55,n-i*.35,i*.08),this.drawTeardrop(e,t-i*.6,n-i*.2,i*.06)}static drawMischievousFace(e,t,n,i){const r=n-i*.1,a=i*.35,o=i*.2,l=i*.25;this.drawEye(e,t-a,r,o,l*.5),e.strokeStyle="#2D1810",e.lineWidth=i*.06,e.beginPath(),e.moveTo(t-a-o*.8,r),e.lineTo(t-a+o*.8,r),e.stroke(),this.drawEye(e,t+a,r,o*1.1,l*1.1),this.drawPupil(e,t+a+o*.15,r,o*.4,l*.4),e.strokeStyle="#2D1810",e.lineWidth=i*.07,e.lineCap="round",e.beginPath(),e.moveTo(t+a-o,r-l-i*.2),e.quadraticCurveTo(t+a,r-l-i*.35,t+a+o*.5,r-l-i*.2),e.stroke(),e.strokeStyle="#2D1810",e.lineWidth=i*.06,e.beginPath(),e.moveTo(t-i*.2,n+i*.38),e.quadraticCurveTo(t,n+i*.42,t+i*.25,n+i*.32),e.stroke(),e.fillStyle="rgba(0, 0, 0, 0.2)",e.beginPath(),e.arc(t+i*.28,n+i*.35,i*.03,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255, 150, 150, 0.35)",e.beginPath(),e.arc(t-i*.5,n+i*.12,i*.1,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(t+i*.5,n+i*.12,i*.1,0,Math.PI*2),e.fill()}static drawSurprisedFace(e,t,n,i){const r=n-i*.15,a=i*.35,o=i*.25,l=i*.28;this.drawEye(e,t-a,r,o,l),this.drawEye(e,t+a,r,o,l),this.drawPupil(e,t-a,r,o*.25,l*.25),this.drawPupil(e,t+a,r,o*.25,l*.25),e.strokeStyle="#2D1810",e.lineWidth=i*.06,e.lineCap="round",e.beginPath(),e.moveTo(t-a-o*.8,r-l-i*.25),e.quadraticCurveTo(t-a,r-l-i*.4,t-a+o*.8,r-l-i*.3),e.stroke(),e.beginPath(),e.moveTo(t+a-o*.8,r-l-i*.25),e.quadraticCurveTo(t+a,r-l-i*.4,t+a+o*.8,r-l-i*.3),e.stroke(),e.fillStyle="#2D1810",e.beginPath(),e.ellipse(t,n+i*.4,i*.18,i*.22,0,0,Math.PI*2),e.fill(),e.fillStyle="#FF6B8A",e.beginPath(),e.ellipse(t,n+i*.48,i*.1,i*.08,0,0,Math.PI),e.fill(),e.fillStyle="rgba(255, 180, 180, 0.3)",e.beginPath(),e.arc(t-i*.5,n+i*.08,i*.08,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(t+i*.5,n+i*.08,i*.08,0,Math.PI*2),e.fill()}static drawSleepyFace(e,t,n,i){const r=n-i*.05,a=i*.35,o=i*.22,l=i*.15;e.strokeStyle="#2D1810",e.lineWidth=i*.06,e.lineCap="round",e.beginPath(),e.ellipse(t-a,r,o,l,0,0,Math.PI),e.stroke(),e.beginPath(),e.moveTo(t-a-o,r-l*.8),e.quadraticCurveTo(t-a,r-l*1.5,t-a+o,r-l*.8),e.stroke(),e.beginPath(),e.ellipse(t+a,r,o,l,0,0,Math.PI),e.stroke(),e.beginPath(),e.moveTo(t+a-o,r-l*.8),e.quadraticCurveTo(t+a,r-l*1.5,t+a+o,r-l*.8),e.stroke(),e.fillStyle="#2D1810",e.beginPath(),e.arc(t-a,r+l*.3,o*.2,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(t+a,r+l*.3,o*.2,0,Math.PI*2),e.fill(),e.strokeStyle="#2D1810",e.lineWidth=i*.05,e.beginPath(),e.moveTo(t-i*.12,n+i*.4),e.lineTo(t+i*.12,n+i*.4),e.stroke(),e.fillStyle="rgba(135, 206, 250, 0.7)",e.strokeStyle="rgba(70, 130, 180, 0.8)",e.lineWidth=i*.03,this.drawZ(e,t+i*.5,n-i*.3,i*.15),this.drawZ(e,t+i*.7,n-i*.55,i*.2),this.drawZ(e,t+i*.9,n-i*.85,i*.25),e.fillStyle="rgba(255, 180, 180, 0.25)",e.beginPath(),e.arc(t-i*.5,n+i*.1,i*.1,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(t+i*.5,n+i*.1,i*.1,0,Math.PI*2),e.fill()}static drawEye(e,t,n,i,r){e.fillStyle="#FFFFFF",e.beginPath(),e.ellipse(t,n,i,r,0,0,Math.PI*2),e.fill();const a=e.createRadialGradient(t-i*.3,n-r*.3,0,t,n,Math.max(i,r));a.addColorStop(0,"rgba(255, 255, 255, 0.8)"),a.addColorStop(.5,"rgba(240, 240, 250, 0.3)"),a.addColorStop(1,"rgba(200, 200, 210, 0.2)"),e.fillStyle=a,e.fill(),e.strokeStyle="#CCCCCC",e.lineWidth=1,e.stroke()}static drawPupil(e,t,n,i,r){e.fillStyle="#1a1a1a",e.beginPath(),e.ellipse(t,n,i,r,0,0,Math.PI*2),e.fill(),e.fillStyle="#FFFFFF",e.beginPath(),e.arc(t-i*.3,n-r*.3,i*.35,0,Math.PI*2),e.fill()}static drawTeardrop(e,t,n,i){e.beginPath(),e.moveTo(t,n-i),e.bezierCurveTo(t+i,n-i*.3,t+i,n+i*.5,t,n+i),e.bezierCurveTo(t-i,n+i*.5,t-i,n-i*.3,t,n-i),e.fill()}static drawZ(e,t,n,i){e.beginPath(),e.moveTo(t-i*.4,n-i*.4),e.lineTo(t+i*.4,n-i*.4),e.lineTo(t-i*.4,n+i*.4),e.lineTo(t+i*.4,n+i*.4),e.stroke()}static getTexture(){return this.texture}static getRandomConfig(){return this.faceConfigs[Math.floor(Math.random()*this.faceConfigs.length)]}static getExpressionIndex(e){return this.faceConfigs.findIndex(t=>t.expression===e)}static getUVs(e){const t=e/this.faceConfigs.length,n=1/this.faceConfigs.length;return[new Ee(t,0),new Ee(t+n,0),new Ee(t+n,1),new Ee(t,1)]}};E(pn,"canvas"),E(pn,"texture"),E(pn,"faceConfigs",[{expression:"angry",backgroundColor:"#8B4513"},{expression:"mischievous",backgroundColor:"#6B4423"},{expression:"surprised",backgroundColor:"#A0522D"},{expression:"sleepy",backgroundColor:"#5D4037"}]),E(pn,"FACE_SIZE",128),E(pn,"ATLAS_SIZE",pn.FACE_SIZE*pn.faceConfigs.length);let Zi=pn;class ji{static initialize(){this.patterns=[...this.getEasyPatterns(),...this.getMediumPatterns(),...this.getHardPatterns(),...this.getExtremePatterns()]}static getEasyPatterns(){return[{id:"E1",difficulty:"EASY",obstacles:[{lane:1,speedMultiplier:1}],gapToNext:22,guaranteedClearLane:0},{id:"E2",difficulty:"EASY",obstacles:[{lane:1,speedMultiplier:1}],gapToNext:22,guaranteedClearLane:2},{id:"E3",difficulty:"EASY",obstacles:[{lane:1,speedMultiplier:1.1}],gapToNext:22,guaranteedClearLane:0},{id:"E4",difficulty:"EASY",obstacles:[{lane:1,speedMultiplier:1.1}],gapToNext:22,guaranteedClearLane:2},{id:"E5",difficulty:"EASY",obstacles:[{lane:0,speedMultiplier:1}],gapToNext:22,guaranteedClearLane:1},{id:"E6",difficulty:"EASY",obstacles:[{lane:2,speedMultiplier:1}],gapToNext:22,guaranteedClearLane:1}]}static getMediumPatterns(){return[{id:"M1",difficulty:"MEDIUM",obstacles:[{lane:0,speedMultiplier:1},{lane:2,speedMultiplier:1}],gapToNext:18,guaranteedClearLane:1},{id:"M2",difficulty:"MEDIUM",obstacles:[{lane:1,speedMultiplier:1.1},{lane:2,speedMultiplier:1}],gapToNext:18,guaranteedClearLane:0},{id:"M3",difficulty:"MEDIUM",obstacles:[{lane:0,speedMultiplier:1},{lane:1,speedMultiplier:1.1}],gapToNext:18,guaranteedClearLane:2},{id:"M4",difficulty:"MEDIUM",obstacles:[{lane:0,speedMultiplier:1.2},{lane:2,speedMultiplier:1.1}],gapToNext:18,guaranteedClearLane:1}]}static getHardPatterns(){return[{id:"H1",difficulty:"HARD",obstacles:[{lane:0,speedMultiplier:1.2},{lane:1,speedMultiplier:1.1}],gapToNext:15,guaranteedClearLane:2},{id:"H2",difficulty:"HARD",obstacles:[{lane:1,speedMultiplier:1.3},{lane:2,speedMultiplier:1.2}],gapToNext:15,guaranteedClearLane:0},{id:"H3",difficulty:"HARD",obstacles:[{lane:0,speedMultiplier:1.3},{lane:2,speedMultiplier:1.3}],gapToNext:15,guaranteedClearLane:1},{id:"H4",difficulty:"HARD",obstacles:[{lane:0,speedMultiplier:1.4},{lane:1,speedMultiplier:1.2}],gapToNext:15,guaranteedClearLane:2}]}static getExtremePatterns(){return[{id:"X1",difficulty:"EXTREME",obstacles:[{lane:0,speedMultiplier:1.5},{lane:1,speedMultiplier:1.4}],gapToNext:13,guaranteedClearLane:2},{id:"X2",difficulty:"EXTREME",obstacles:[{lane:1,speedMultiplier:1.5},{lane:2,speedMultiplier:1.4}],gapToNext:13,guaranteedClearLane:0},{id:"X3",difficulty:"EXTREME",obstacles:[{lane:0,speedMultiplier:1.6},{lane:2,speedMultiplier:1.5}],gapToNext:13,guaranteedClearLane:1},{id:"X4",difficulty:"EXTREME",obstacles:[{lane:0,speedMultiplier:1.7},{lane:1,speedMultiplier:1.6}],gapToNext:13,guaranteedClearLane:2}]}static getPatternsByDifficulty(e){return this.patterns.filter(t=>t.difficulty===e)}static getRandomPattern(e){const t=this.getPatternsByDifficulty(e),n=Math.floor(Math.random()*t.length);return t[n]}static getAllPatterns(){return[...this.patterns]}static validatePattern(e){if(e.obstacles.length===0||e.obstacles.length>2)return!1;const t=e.obstacles.map(r=>r.lane);return new Set(t).size!==t.length?!1:[0,1,2].some(r=>!t.includes(r))}static validateAllPatterns(){const e=[],t=[];for(const n of this.patterns)this.validatePattern(n)?e.push(n):t.push(n);return{valid:e,invalid:t}}static getPatternsByClearLane(e){return this.patterns.filter(t=>t.guaranteedClearLane===e)}static getPatternsByDifficultyAndClearLane(e,t){return this.patterns.filter(n=>n.difficulty===e&&n.guaranteedClearLane===t)}static analyzeClearLaneDistribution(){const e={};for(const t of["EASY","MEDIUM","HARD","EXTREME"]){const n=this.getPatternsByDifficulty(t),i={0:0,1:0,2:0};for(const r of n)i[r.guaranteedClearLane]++;e[t]=i}return e}}E(ji,"patterns",[]);class $s{static getCurrentTier(e){return this.tiers.find(n=>e>=n.minScore&&e<n.maxScore)||this.tiers[this.tiers.length-1]}static selectDifficulty(e,t){const{easy:n,medium:i,hard:r,extreme:a}=e.patternDistribution,o=t;return o<n?"EASY":o<n+i?"MEDIUM":o<n+i+r?"HARD":"EXTREME"}static getBaseObstacleSpeed(e){const t=this.getCurrentTier(e),n=this.getTierProgress(e,t),i=this.getNextTier(t);return i?this.lerp(t.baseObstacleSpeed,i.baseObstacleSpeed,n):t.baseObstacleSpeed}static getGapBetweenWaves(e){const t=this.getCurrentTier(e),n=this.getTierProgress(e,t),i=this.getNextTier(t);if(!i)return t.gapBetweenWaves;const r=this.lerp(t.gapBetweenWaves,i.gapBetweenWaves,n);return Math.round(r)}static getTierProgress(e,t){return t.maxScore===1/0?0:(e-t.minScore)/(t.maxScore-t.minScore)}static getNextTier(e){const t=this.tiers.indexOf(e);return this.tiers[t+1]}static lerp(e,t,n){return e+(t-e)*Math.max(0,Math.min(1,n))}static getTierName(e){return this.getCurrentTier(e).name}static getAllTiers(){return[...this.tiers]}static validateDistributions(){return this.tiers.every(e=>{const{easy:t,medium:n,hard:i,extreme:r}=e.patternDistribution,a=t+n+i+r;return Math.abs(a-1)<1e-4})}}E($s,"tiers",[{name:"BEGINNER",minScore:0,maxScore:50,patternDistribution:{easy:.9,medium:.1,hard:0,extreme:0},baseObstacleSpeed:1,gapBetweenWaves:28},{name:"EASY",minScore:50,maxScore:120,patternDistribution:{easy:.65,medium:.3,hard:.05,extreme:0},baseObstacleSpeed:1.05,gapBetweenWaves:25},{name:"INTERMEDIATE",minScore:120,maxScore:200,patternDistribution:{easy:.35,medium:.45,hard:.2,extreme:0},baseObstacleSpeed:1.1,gapBetweenWaves:22},{name:"ADVANCED",minScore:200,maxScore:320,patternDistribution:{easy:.15,medium:.4,hard:.35,extreme:.1},baseObstacleSpeed:1.15,gapBetweenWaves:19},{name:"HARD",minScore:320,maxScore:450,patternDistribution:{easy:.05,medium:.25,hard:.45,extreme:.25},baseObstacleSpeed:1.2,gapBetweenWaves:16},{name:"EXPERT",minScore:450,maxScore:600,patternDistribution:{easy:0,medium:.15,hard:.45,extreme:.4},baseObstacleSpeed:1.25,gapBetweenWaves:13},{name:"MASTER",minScore:600,maxScore:1/0,patternDistribution:{easy:0,medium:.1,hard:.4,extreme:.5},baseObstacleSpeed:1.3,gapBetweenWaves:10}]);class mn{static initialize(){}static setScore(e){this.score=e}static getNextPattern(){if(!this.currentSequence||this.currentSequence.currentIndex>=this.currentSequence.patterns.length){const n=$s.getCurrentTier(this.score);this.currentSequence=this.buildSequence(n)}let e=this.currentSequence.patterns[this.currentSequence.currentIndex];const t=$s.getCurrentTier(this.score);return e=this.ensureSolvablePattern(e,t),this.currentSequence.currentIndex++,this.lastSpawnedPattern=e,this.currentClearLane=e.guaranteedClearLane,this.recentDifficulties.push(e.difficulty),this.recentDifficulties.length>3&&this.recentDifficulties.shift(),e}static buildSequence(e){const t=[];for(let r=0;r<3;r++)t.push(this.rollDifficulty(e));const n=t.map(r=>ji.getPatternsByDifficulty(r));return{patterns:this.generateSolvableSequence(n),currentIndex:0}}static rollDifficulty(e){let{easy:t,medium:n,hard:i,extreme:r}=e.patternDistribution;if(this.recentDifficulties.length>=2){const l={};for(const c of this.recentDifficulties)l[c]=(l[c]||0)+1;(l.EASY||0)>=2&&(t*=.1),(l.MEDIUM||0)>=2&&(n*=.1),(l.HARD||0)>=2&&(i*=.1),(l.EXTREME||0)>=2&&(r*=.1)}const a=t+n+i+r;if(a===0)return"EASY";const o=Math.random()*a;return o<t?"EASY":o<t+n?"MEDIUM":o<t+n+i?"HARD":"EXTREME"}static generateSolvableSequence(e){const t=[];for(let n=0;n<e.length;n++){const i=e[n];let r;if(n===0)r=this.selectRandom(i);else{const a=t[n-1],o=a.guaranteedClearLane,l=i.filter(c=>c.guaranteedClearLane===o);l.length>0?r=this.selectRandom(l):a.gapToNext>=14?r=this.selectRandom(i):r=this.selectRandom(i)}t.push(r)}return t}static selectRandom(e){const t=Math.floor(Math.random()*e.length);return e[t]}static isSequenceComplete(){return this.currentSequence!==null&&this.currentSequence.currentIndex>=this.currentSequence.patterns.length}static getCurrentProgress(){return this.currentSequence?{current:this.currentSequence.currentIndex,total:this.currentSequence.patterns.length}:{current:0,total:3}}static ensureSolvablePattern(e,t){if(!this.lastSpawnedPattern||this.lastSpawnedPattern.guaranteedClearLane===e.guaranteedClearLane)return e;const n=this.lastSpawnedPattern.guaranteedClearLane,i=this.lastSpawnedPattern.gapToNext,a=Math.abs(n-e.guaranteedClearLane)<=1?14:22;if(i>=a)return e;const l=ji.getPatternsByDifficulty(e.difficulty).filter(f=>f.guaranteedClearLane===n);if(l.length>0){const f=Math.floor(Math.random()*l.length);return l[f]}const c=ji.getAllPatterns(),u=c.filter(f=>f.guaranteedClearLane===n&&this.isDifficultyAllowed(f.difficulty,t));if(u.length>0){u.sort((p,g)=>g.gapToNext-p.gapToNext);const f=Math.floor(Math.random()*Math.min(3,u.length));return u[f]}const h=c.filter(f=>f.guaranteedClearLane===n);if(h.length>0){const f=Math.floor(Math.random()*h.length);return h[f]}return console.warn(`[PatternSequencer] No pattern found with clearLane=${n} — returning original pattern '${e.id}' (potentially unsolvable)`),e}static isDifficultyAllowed(e,t){const{easy:n,medium:i,hard:r,extreme:a}=t.patternDistribution;switch(e){case"EASY":return n>0;case"MEDIUM":return i>0;case"HARD":return r>0;case"EXTREME":return a>0;default:return!1}}static getCurrentClearLane(){return this.currentClearLane}static reset(){this.currentSequence=null,this.score=0,this.lastSpawnedPattern=null,this.currentClearLane=1,this.recentDifficulties=[]}}E(mn,"currentSequence",null),E(mn,"score",0),E(mn,"lastSpawnedPattern",null),E(mn,"currentClearLane",1),E(mn,"recentDifficulties",[]);const Xm=3,qm=10,Ym=50,ll=10;class $m{constructor(e,t,n=!0){E(this,"_scene");E(this,"_trackManager");E(this,"_obstacles",[]);E(this,"_activeCount",0);E(this,"_distanceSinceLastSpawn",0);E(this,"_nextSpawnGap",22);E(this,"_patternsInWave",0);E(this,"_dodgedCount",0);E(this,"_emojiFacesEnabled",!1);E(this,"_bodyMaterial");E(this,"_eyeMaterial");E(this,"_faceGeometry");E(this,"_faceMaterial");E(this,"_baseRingGeometry");E(this,"_midRingGeometry");E(this,"_tipGeometry");E(this,"_eyeGeometry");E(this,"_smileGeometry");this._scene=e,this._trackManager=t,this._emojiFacesEnabled=n,ji.initialize(),mn.initialize(),this._emojiFacesEnabled&&(Zi.initialize(),this._faceGeometry=new en(.6,.6),this._faceMaterial=new xn({map:Zi.getTexture(),transparent:!0,side:Ct,depthTest:!1})),this._bodyMaterial=new mt({color:9133628}),this._bodyMaterial.side=ct,this._eyeMaterial=new xn({color:16777215}),this._eyeMaterial.side=ct,this._baseRingGeometry=new vi(.55,10,8),this._baseRingGeometry.scale(1,.5,1),this._midRingGeometry=new vi(.45,10,8),this._midRingGeometry.scale(1,.5,1),this._tipGeometry=new vi(.2,8,6),this._eyeGeometry=new vi(.1,6,6),this._smileGeometry=new Qs(.18,.035,6,6,Math.PI),this.initializeObstaclePool()}createObstacleGroup(){const e=new _n,t=new Ue(this._baseRingGeometry,this._bodyMaterial);t.position.set(0,.2,0),t.castShadow=!0,t.receiveShadow=!0,e.add(t);const n=new Ue(this._midRingGeometry,this._bodyMaterial);n.position.set(.08,.5,0),n.castShadow=!0,n.receiveShadow=!0,e.add(n);const i=new Ue(this._tipGeometry,this._bodyMaterial);if(i.position.set(-.05,.75,0),i.castShadow=!0,i.receiveShadow=!0,e.add(i),this._emojiFacesEnabled&&this._faceGeometry&&this._faceMaterial){const r=this._faceGeometry.clone(),a=new Ue(r,this._faceMaterial);a.position.set(.08,.5,.5),a.castShadow=!1,a.receiveShadow=!1,a.userData.isEmojiFace=!0,a.userData.emojiIndex=Math.floor(Math.random()*4),e.add(a)}else{const r=new Ue(this._eyeGeometry,this._eyeMaterial);r.position.set(-.14,.55,.45),r.castShadow=!1,r.receiveShadow=!1,e.add(r);const a=new Ue(this._eyeGeometry,this._eyeMaterial);a.position.set(.3,.55,.45),a.castShadow=!1,a.receiveShadow=!1,e.add(a);const o=new Ue(this._smileGeometry,this._eyeMaterial);o.position.set(.08,.4,.5),o.rotation.x=Math.PI/4,o.castShadow=!1,o.receiveShadow=!1,e.add(o)}return e}initializeObstaclePool(){for(let e=0;e<Ym;e++){const t=this.createObstacleGroup();t.visible=!1,this._scene.add(t),this._obstacles.push({mesh:t,active:!1,z:0,lane:0,speedVariation:1,scale:1,rotationY:0,wobbleTime:Math.random()*Math.PI*2,rotationSpeed:0})}}update(e,t,n){if(mn.setScore(n),this._distanceSinceLastSpawn+=t*e,this._distanceSinceLastSpawn>=this._nextSpawnGap){this._distanceSinceLastSpawn=0;const i=this.spawnPatternObstacles();this._patternsInWave++,this._nextSpawnGap=i.gapToNext,this._patternsInWave>=3&&(this._nextSpawnGap+=$s.getGapBetweenWaves(n),this._patternsInWave=0)}for(const i of this._obstacles){if(!i.active)continue;const r=t*i.speedVariation;i.z+=r*e,i.wobbleTime+=e*3;const a=this.getLaneX(i.lane);i.mesh.position.set(a,0,i.z);const o=Math.sin(i.wobbleTime)*.1;i.mesh.rotation.y=i.rotationY+o,i.rotationSpeed>0&&(i.mesh.rotation.y+=i.rotationSpeed*e),i.mesh.scale.setScalar(i.scale),i.z>ll&&this.despawnObstacle(i)}}spawnPatternObstacles(){const e=mn.getNextPattern();for(const t of e.obstacles)this.spawnObstacle(t.lane,t.speedMultiplier);return e}getWeightedRandomLane(e){const t=e.reduce((i,r)=>i+r,0);let n=Math.random()*t;for(let i=0;i<e.length;i++)if(n-=e[i],n<=0)return i;return 0}getAdjacentLanes(e){return e===0?[1,2]:e===1?[0,2]:e===2?[0,1]:[1,2]}spawnObstacle(e,t=1){const n=this._obstacles.find(a=>!a.active);if(!n)return;const i=this._trackManager.getFrontZ()-qm;if(n.active=!0,n.lane=e,n.z=i,n.speedVariation=t,n.scale=.9+Math.random()*.2,n.rotationY=(Math.random()-.5)*.5,n.emojiIndex=Math.floor(Math.random()*4),this._activeCount++,this._emojiFacesEnabled){const a=n.mesh.children.find(o=>{var l;return((l=o.userData)==null?void 0:l.isEmojiFace)===!0});if(a){const o=Zi.getUVs(n.emojiIndex),l=a.geometry;l.attributes.uv.setXY(0,o[0].x,o[0].y),l.attributes.uv.setXY(1,o[1].x,o[1].y),l.attributes.uv.setXY(2,o[2].x,o[2].y),l.attributes.uv.setXY(3,o[3].x,o[3].y),l.attributes.uv.needsUpdate=!0}}const r=this.getLaneX(e);n.mesh.position.set(r,0,i),n.mesh.rotation.y=n.rotationY,n.mesh.scale.setScalar(n.scale),n.mesh.visible=!0}despawnObstacle(e){e.active=!1,this._activeCount--,e.mesh.visible=!1,e.mesh.position.set(0,-100,0),e.z>ll&&this._dodgedCount++}getLaneX(e){return(e-1)*Xm}reset(){for(const e of this._obstacles)e.active&&this.despawnObstacle(e);this._activeCount=0,this._distanceSinceLastSpawn=0,this._nextSpawnGap=22,this._patternsInWave=0,this._dodgedCount=0,mn.reset()}getActiveCount(){return this._activeCount}getActiveObstacles(){const e=[];for(const t of this._obstacles){if(!t.active)continue;const n=this.getLaneX(t.lane);e.push({x:n,y:.3,z:t.z,lane:t.lane})}return e}hideObstacle(e,t){let n=null,i=1/0;for(const r of this._obstacles){if(!r.active||r.lane!==e)continue;const a=Math.abs(r.z-t);a<i&&(i=a,n=r)}n&&(n.active=!1,this._activeCount--,n.mesh.visible=!1,n.mesh.position.set(0,-100,0))}getDodgedCount(){return this._dodgedCount}resetDodgedCount(){this._dodgedCount=0}}const pi=.1,Km=.5;class Zm{constructor(){E(this,"_playerBox");E(this,"_obstacleBox");this._playerBox=new Mn,this._obstacleBox=new Mn}checkPlayerVsObstacles(e,t,n=0,i=!1){this._playerBox.setFromObject(e);const r=t.getActiveObstacles();for(const a of r){this._obstacleBox.setFromCenterAndSize(new L(a.x,a.y,a.z),new L(1,1.6,1.4)),this._obstacleBox.min.x-=pi,this._obstacleBox.max.x+=pi,this._obstacleBox.min.y-=pi,this._obstacleBox.max.y+=pi,this._obstacleBox.min.z-=pi,this._obstacleBox.max.z+=pi;const o=this._obstacleBox.max.y,l=n-Km;if(!(i&&l>o)&&this._playerBox.intersectsBox(this._obstacleBox))return a}return null}checkPlayerVsTrack(e){return!1}reset(){this._playerBox.makeEmpty(),this._obstacleBox.makeEmpty()}}class jm{constructor(){E(this,"_context",null);E(this,"_masterGain",null);E(this,"_enabled",!0);E(this,"_lastScoreMilestone",0);E(this,"_bgmOscillators",[]);E(this,"_bgmGain",null);E(this,"_speed",10);E(this,"_isPlaying",!1);E(this,"_beatTimeoutIds",[])}ensureContext(){this._context||(this._context=new(window.AudioContext||window.webkitAudioContext),this._masterGain=this._context.createGain(),this._masterGain.connect(this._context.destination),this._masterGain.gain.value=.25,this._bgmGain=this._context.createGain(),this._bgmGain.connect(this._masterGain),this._bgmGain.gain.value=.08)}startBackgroundMusic(){this.ensureContext(),!(!this._context||!this._bgmGain)&&(this._isPlaying=!0,this._updateBackgroundMusic())}stopBackgroundMusic(){this._isPlaying=!1,this._bgmOscillators.forEach(e=>{try{e.stop(),e.disconnect()}catch(t){}}),this._bgmOscillators=[],this._beatTimeoutIds.forEach(e=>clearTimeout(e)),this._beatTimeoutIds=[]}_updateBackgroundMusic(){if(!this._isPlaying||!this._context||!this._bgmGain)return;this._bgmOscillators.forEach(a=>{try{a.stop(),a.disconnect()}catch(o){}}),this._bgmOscillators=[];const t=60/Math.max(60,this._speed*6),n=this._context.createOscillator(),i=this._bgmGain;n.type="sine",n.frequency.value=55+this._speed*.5,i.gain.value=.1,n.connect(i),n.start(),this._bgmOscillators.push(n);const r=(a,o)=>{const l=window.setTimeout(()=>{if(!this._isPlaying||!this._context)return;const c=this._context.createOscillator(),u=this._context.createGain(),h=this._context.createBiquadFilter();c.type="triangle",c.frequency.value=o,h.type="lowpass",h.frequency.value=800+this._speed*50,u.gain.setValueAtTime(.05,this._context.currentTime),u.gain.exponentialRampToValueAtTime(.001,this._context.currentTime+.1),c.connect(h),h.connect(u),u.connect(this._masterGain),c.start(),c.stop(this._context.currentTime+.1),this._isPlaying&&r(t,o)},a*1e3);this._beatTimeoutIds.push(l)};r(0,220+this._speed*2),r(t*.5,277+this._speed*2)}update(e){this._speed=e,this._isPlaying&&this._updateBackgroundMusic()}playTone(e,t,n,i=.3){if(!this._enabled||!this._context)return;const r=this._context.createOscillator(),a=this._context.createGain();r.type=t,r.frequency.setValueAtTime(e,this._context.currentTime),a.gain.setValueAtTime(i,this._context.currentTime),a.gain.exponentialRampToValueAtTime(.001,this._context.currentTime+n),r.connect(a),a.connect(this._masterGain),r.start(),r.stop(this._context.currentTime+n)}playLaneChange(){if(this.ensureContext(),!this._context)return;const e=this._context.createOscillator(),t=this._context.createGain(),n=this._context.createBiquadFilter();e.type="sine",e.frequency.setValueAtTime(200,this._context.currentTime),e.frequency.exponentialRampToValueAtTime(450,this._context.currentTime+.12),n.type="lowpass",n.frequency.setValueAtTime(1200,this._context.currentTime),n.Q.value=1,t.gain.setValueAtTime(.2,this._context.currentTime),t.gain.exponentialRampToValueAtTime(.001,this._context.currentTime+.12),e.connect(n),n.connect(t),t.connect(this._masterGain),e.start(),e.stop(this._context.currentTime+.12)}playGameOver(){if(this.ensureContext(),!this._context)return;const e=this._context.createOscillator(),t=this._context.createGain();e.type="sawtooth",e.frequency.setValueAtTime(180,this._context.currentTime),e.frequency.exponentialRampToValueAtTime(40,this._context.currentTime+.4),t.gain.setValueAtTime(.35,this._context.currentTime),t.gain.exponentialRampToValueAtTime(.001,this._context.currentTime+.4),e.connect(t),t.connect(this._masterGain),e.start(),e.stop(this._context.currentTime+.4)}playScoreMilestone(e){if(e-this._lastScoreMilestone<100||(this._lastScoreMilestone=e,this.ensureContext(),!this._context))return;const t=this._context.createOscillator(),n=this._context.createGain();t.type="sine",t.frequency.setValueAtTime(880,this._context.currentTime),t.frequency.setValueAtTime(1100,this._context.currentTime+.08),n.gain.setValueAtTime(.25,this._context.currentTime),n.gain.exponentialRampToValueAtTime(.001,this._context.currentTime+.25),t.connect(n),n.connect(this._masterGain),t.start(),t.stop(this._context.currentTime+.25)}playCollision(){if(this.ensureContext(),!this._context)return;const e=this._context.createOscillator(),t=this._context.createGain();e.type="sine",e.frequency.setValueAtTime(120,this._context.currentTime),e.frequency.exponentialRampToValueAtTime(250,this._context.currentTime+.15),t.gain.setValueAtTime(.3,this._context.currentTime),t.gain.exponentialRampToValueAtTime(.001,this._context.currentTime+.15),e.connect(t),t.connect(this._masterGain),e.start(),e.stop(this._context.currentTime+.15)}playStartGame(){if(this.ensureContext(),!this._context)return;const e=[349,440,523];this._context.currentTime,e.forEach((t,n)=>{setTimeout(()=>{const i=this._context.createOscillator(),r=this._context.createGain();i.type="sine",i.frequency.setValueAtTime(t,this._context.currentTime),r.gain.setValueAtTime(.2,this._context.currentTime),r.gain.exponentialRampToValueAtTime(.001,this._context.currentTime+.35),i.connect(r),r.connect(this._masterGain),i.start(),i.stop(this._context.currentTime+.35)},n*60)})}playPause(){if(this.ensureContext(),!this._context)return;const e=this._context.createOscillator(),t=this._context.createGain();e.type="sine",e.frequency.setValueAtTime(440,this._context.currentTime),e.frequency.setValueAtTime(330,this._context.currentTime+.1),t.gain.setValueAtTime(.15,this._context.currentTime),t.gain.exponentialRampToValueAtTime(.001,this._context.currentTime+.15),e.connect(t),t.connect(this._masterGain),e.start(),e.stop(this._context.currentTime+.15)}playResume(){if(this.ensureContext(),!this._context)return;const e=this._context.createOscillator(),t=this._context.createGain();e.type="sine",e.frequency.setValueAtTime(330,this._context.currentTime),e.frequency.setValueAtTime(440,this._context.currentTime+.1),t.gain.setValueAtTime(.15,this._context.currentTime),t.gain.exponentialRampToValueAtTime(.001,this._context.currentTime+.15),e.connect(t),t.connect(this._masterGain),e.start(),e.stop(this._context.currentTime+.15)}setVolume(e){this._masterGain&&(this._masterGain.gain.value=Math.max(0,Math.min(1,e)))}setEnabled(e){this._enabled=e,this._masterGain&&(this._masterGain.gain.value=e?.25:0)}isEnabled(){return this._enabled}getLastScoreMilestone(){return this._lastScoreMilestone}setLastScoreMilestone(e){this._lastScoreMilestone=e}}const Jm=40,Qm=20,cl=["#2E86AB","#4A90D9","#D94A4A","#FF69B4","#9B59B6"],hl=["FLUSH THE COMPETITION","TP WAS HERE","WIPE OUT!","NO.1 RUNNER","PAPER BEATS ROCK","THIS GAME STINKS ;)","SIT DOWN. BE HUMBLE.","PLUNGER WAS HERE"];class eg{constructor(e){E(this,"_scene");E(this,"_tileTexture");E(this,"_toiletMesh");E(this,"_urinalMesh");E(this,"_sinkMesh");E(this,"_decorations",[]);E(this,"_activeCount",0);E(this,"_lastDecorationZ",0);E(this,"_leftWall",null);E(this,"_rightWall",null);E(this,"_wallScrollOffset",0);this._scene=e,this._tileTexture=this.createTileTexture(),this._toiletMesh=this.createToiletMesh(),this._urinalMesh=this.createUrinalMesh(),this._sinkMesh=this.createSinkMesh(),this.initializeDecorations(),this.createWalls()}createTileTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");t.fillStyle="#FFFAF0",t.fillRect(0,0,512,512);const n=64,i=["#B5D8F7","#F7C5D0","#C5E8C5","#FFF3B5"];for(let a=0;a<512;a+=n)for(let o=0;o<512;o+=n)Math.random()<.15&&(t.fillStyle=i[Math.floor(Math.random()*i.length)],t.fillRect(a+2,o+2,n-4,n-4));t.strokeStyle="#E8DDD0",t.lineWidth=3;for(let a=0;a<=512;a+=n)t.beginPath(),t.moveTo(a,0),t.lineTo(a,512),t.stroke();for(let a=0;a<=512;a+=n)t.beginPath(),t.moveTo(0,a),t.lineTo(512,a),t.stroke();const r=new ts(e);return r.wrapS=Ft,r.wrapT=Ft,r.repeat.set(4,4),r.needsUpdate=!0,r}createWallTexture(){const e=document.createElement("canvas");e.width=1024,e.height=1024;const t=e.getContext("2d");t.fillStyle="#FFFAF0",t.fillRect(0,0,1024,1024);const n=48,i=["#B5D8F7","#F7C5D0","#C5E8C5","#FFF3B5","#E8D0F7"];for(let a=0;a<1024;a+=n)for(let o=0;o<1024;o+=n)Math.random()<.15&&(t.fillStyle=i[Math.floor(Math.random()*i.length)],t.fillRect(a+2,o+2,n-4,n-4));t.strokeStyle="#E8DDD0",t.lineWidth=3;for(let a=0;a<=1024;a+=n)t.beginPath(),t.moveTo(a,0),t.lineTo(a,1024),t.stroke();for(let a=0;a<=1024;a+=n)t.beginPath(),t.moveTo(0,a),t.lineTo(1024,a),t.stroke();this.drawGraffiti(t,1024);const r=new ts(e);return r.wrapS=Ft,r.wrapT=Ft,r.needsUpdate=!0,r}drawGraffiti(e,t){const n=6+Math.floor(Math.random()*4);for(let i=0;i<n;i++){const r=100+Math.random()*(t-200),a=100+Math.random()*(t-200),o=(Math.random()-.5)*.4,l=cl[Math.floor(Math.random()*cl.length)];if(e.save(),e.translate(r,a),e.rotate(o),Math.random()<.6){const c=hl[Math.floor(Math.random()*hl.length)],u=60+Math.floor(Math.random()*60);e.font=`bold ${u}px "Comic Sans MS", cursive`,e.globalAlpha=.7+Math.random()*.3,e.strokeStyle="rgba(0, 0, 0, 0.7)",e.lineWidth=6,e.strokeText(c,0,0),e.fillStyle=l,e.fillText(c,0,0)}else e.globalAlpha=.7+Math.random()*.3,this.drawRandomDoodle(e,l);e.restore()}}drawRandomDoodle(e,t){const n=Math.floor(Math.random()*4);switch(e.strokeStyle=t,e.fillStyle=t,e.lineWidth=8,n){case 0:e.beginPath(),e.moveTo(0,-25),e.bezierCurveTo(-50,-75,-100,0,0,62),e.moveTo(0,-25),e.bezierCurveTo(50,-75,100,0,0,62),e.stroke();break;case 1:e.beginPath(),e.arc(0,25,38,0,Math.PI,!1),e.arc(12,25,25,Math.PI,0,!1),e.arc(0,25,12,0,Math.PI,!1),e.moveTo(0,-12),e.lineTo(5,-25),e.stroke();break;case 2:e.fillRect(-7,-62,15,75),e.beginPath(),e.arc(0,12,30,0,Math.PI),e.fill();break;case 3:e.beginPath();for(let i=0;i<5;i++){const r=i*4*Math.PI/5-Math.PI/2,a=r+2*Math.PI/10,o=Math.cos(r)*50,l=Math.sin(r)*50,c=Math.cos(a)*20,u=Math.sin(a)*20;i===0?e.moveTo(o,l):e.lineTo(o,l),e.lineTo(c,u)}e.closePath(),e.stroke();break}}createWalls(){const n=new en(120,6),i=this.createWallTexture();i.repeat.set(4,1.2);const r=new mt({map:i});this._leftWall=new Ue(n,r),this._leftWall.position.set(-8.5,3,-30),this._leftWall.rotation.y=Math.PI/2,this._scene.add(this._leftWall);const a=this.createWallTexture();a.repeat.set(4,1.2);const o=new mt({map:a});this._rightWall=new Ue(n,o),this._rightWall.position.set(8.5,3,-30),this._rightWall.rotation.y=-Math.PI/2,this._scene.add(this._rightWall)}createToiletMesh(){const e=new _n,t=new mt({color:16777215}),n=new $t(1.2,.9,.45),i=new Ue(n,t);i.position.set(0,.95,-.45),e.add(i);const r=new fn(.85,.65,.6,12),a=new Ue(r,t);a.position.y=.3,e.add(a);const o=new Qs(.85,.12,8,16,Math.PI),l=new mt({color:16777200}),c=new Ue(o,l);c.position.set(0,.58,0),c.rotation.x=Math.PI/2,e.add(c);const u=new fn(.9,.9,.08,12),h=new Ue(u,l);h.position.set(0,.75,0),e.add(h);const f=new fn(.5,.6,.15,12),p=new Ue(f,t);return p.position.y=.075,e.add(p),e.scale.setScalar(.8),e}createUrinalMesh(){const e=new _n,t=new mt({color:16777215}),n=new mt({color:12632256}),i=new Ue(new $t(.8,1.2,.1),t);i.position.set(0,.8,-.35),e.add(i);const r=new Ue(new fn(.35,.25,.7,10),t);r.position.set(0,.5,-.1),e.add(r);const a=new Ue(new fn(.03,.03,.5,6),n);a.position.set(0,1.6,-.3),e.add(a);const o=new Ue(new $t(.15,.06,.06),n);return o.position.set(.12,1.55,-.3),e.add(o),e.scale.setScalar(.8),e}createSinkMesh(){const e=new _n,t=new mt({color:16119285}),n=new mt({color:12632256}),i=new Ue(new $t(1,.2,.6),t);i.position.set(0,.75,0),e.add(i);const r=new Ue(new fn(.15,.2,.7,8),t);r.position.set(0,.35,0),e.add(r);const a=new Ue(new fn(.03,.03,.25,6),n);a.position.set(0,.97,-.15),e.add(a);const o=new Ue(new $t(.04,.04,.15),n);return o.position.set(0,1.08,-.05),e.add(o),e.scale.setScalar(.8),e}getRandomDecoration(){const e=Math.random();return e<.5?this._toiletMesh.clone():e<.8?this._urinalMesh.clone():this._sinkMesh.clone()}initializeDecorations(){for(let e=0;e<Qm;e++){const t={mesh:this.getRandomDecoration(),active:!1,z:0,lane:0};this._scene.add(t.mesh),t.mesh.visible=!1,this._decorations.push(t)}for(let e=0;e<6;e++)this.spawnDecoration()}spawnDecoration(){const e=this._decorations.find(r=>!r.active);if(!e)return;const t=Math.random()<.5?-1:1,n=t*7,i=this._lastDecorationZ-Jm;e.active=!0,e.lane=t,e.z=i,e.mesh.position.set(n,0,i),e.mesh.rotation.y=t===-1?Math.PI/2:-Math.PI/2,e.mesh.visible=!0,this._activeCount++,this._lastDecorationZ=i}update(e,t){for(const i of this._decorations)i.active&&(i.z+=t*e,i.mesh.position.z=i.z,i.z>20&&this.despawnDecoration(i));this._lastDecorationZ>-80&&this.spawnDecoration(),this._wallScrollOffset+=t*e;const n=this._wallScrollOffset/10;if(this._leftWall){const i=this._leftWall.material.map;i&&(i.offset.x=n)}if(this._rightWall){const i=this._rightWall.material.map;i&&(i.offset.x=-n)}}despawnDecoration(e){e.active=!1,this._activeCount--,e.mesh.visible=!1,e.mesh.position.set(0,-100,0)}getTileTexture(){return this._tileTexture}reset(){for(const e of this._decorations)e.active&&this.despawnDecoration(e);this._activeCount=0,this._lastDecorationZ=0;for(let e=0;e<6;e++)this.spawnDecoration();if(this._wallScrollOffset=0,this._leftWall){const e=this._leftWall.material.map;e&&(e.offset.x=0)}if(this._rightWall){const e=this._rightWall.material.map;e&&(e.offset.x=0)}}dispose(){this._leftWall&&(this._scene.remove(this._leftWall),this._leftWall.geometry.dispose(),this._leftWall.material.dispose()),this._rightWall&&(this._scene.remove(this._rightWall),this._rightWall.geometry.dispose(),this._rightWall.material.dispose())}}const tg=2.5,ng=2,ig=8;class sg{constructor(e){E(this,"_camera");E(this,"_basePosition");E(this,"_targetPosition");this._camera=e,this._basePosition=new L(0,2.8,6),this._targetPosition=new L,this._camera.position.copy(this._basePosition)}update(e){}updateCameraFollow(e,t){this._targetPosition.set(0,e.y+ng,e.z+ig),this._basePosition.lerp(this._targetPosition,tg*t),this._camera.lookAt(0,e.y+.5,e.z-15)}reset(){this._targetPosition.set(0,0,0),this._camera.position.copy(this._basePosition)}getCurrentPosition(){return this._basePosition.clone()}}const Ir=80,rg=16,ag=.3;class og{constructor(e,t,n){E(this,"_touchStartX",0);E(this,"_touchStartY",0);E(this,"_touchStartTime",0);E(this,"_lastSwipeTime",0);E(this,"_onLaneChange");E(this,"_onJump");E(this,"_onPause");E(this,"handleKeyboard",e=>{switch(e.key){case"ArrowLeft":case"a":case"A":this._onLaneChange(-1);break;case"ArrowRight":case"d":case"D":this._onLaneChange(1);break;case" ":case"ArrowUp":case"w":case"W":this._onJump();break;case"p":case"P":case"Escape":this._onPause&&this._onPause();break}});E(this,"handleTouchStart",e=>{e.touches.length>0&&(this._touchStartX=e.touches[0].clientX,this._touchStartY=e.touches[0].clientY,this._touchStartTime=performance.now())});E(this,"handleTouchEnd",e=>{if(e.changedTouches.length===0)return;const t=performance.now();if(t-this._lastSwipeTime<rg)return;const n=e.changedTouches[0].clientX,i=e.changedTouches[0].clientY,r=n-this._touchStartX,a=i-this._touchStartY,o=t-this._touchStartTime;if(a<-60&&Math.abs(r)<Ir){this._lastSwipeTime=t,this._onJump();return}if(Math.abs(r)>Ir&&Math.abs(a)<Ir*1.5){this._lastSwipeTime=t,r>0?this._onLaneChange(1):this._onLaneChange(-1);return}if(o<300&&Math.abs(r)<20&&Math.abs(a)<20){const l=window.innerWidth,c=l*ag;this._touchStartX<c?(this._lastSwipeTime=t,this._onLaneChange(-1)):this._touchStartX>l-c&&(this._lastSwipeTime=t,this._onLaneChange(1))}});this._onLaneChange=e,this._onJump=t,this._onPause=n}setup(){this.setupKeyboard(),this.setupTouch()}teardown(){this.removeKeyboard(),this.removeTouch()}setupKeyboard(){window.addEventListener("keydown",this.handleKeyboard)}removeKeyboard(){window.removeEventListener("keydown",this.handleKeyboard)}setupTouch(){window.addEventListener("touchstart",this.handleTouchStart,{passive:!0,capture:!0}),window.addEventListener("touchend",this.handleTouchEnd,{passive:!0,capture:!0})}removeTouch(){window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchend",this.handleTouchEnd)}}class lg{constructor(){E(this,"_startScreen",null);E(this,"_pauseScreen",null);E(this,"_overlay",null);E(this,"_scoreDisplay",null);E(this,"_gameOverScreen",null);E(this,"_finalScore",null);E(this,"_restartButton",null);E(this,"_pauseButton",null);E(this,"_pauseButtonContainer",null);E(this,"_resumeButton",null);E(this,"_leaderboardScreen",null);E(this,"_leaderboardListFull",null);E(this,"_viewLeaderboardButton",null);E(this,"_backToGameOverButton",null);E(this,"_nameEntrySection",null);E(this,"_playerNameInput",null);E(this,"_submitNameButton",null);E(this,"_gameOverMessage",null);E(this,"_introOverlay",null);E(this,"_introProgressBar",null);E(this,"_introTapPrompt",null);E(this,"_loadingScreen",null);E(this,"_loadingProgressBar",null);E(this,"_loadingTip",null);E(this,"currentGameState",0);E(this,"_onPlay",null);E(this,"_onRestart",null);E(this,"_onPause",null);E(this,"_onResume",null);E(this,"_onViewLeaderboard",null);E(this,"_onBackToGameOver",null);E(this,"_onBackToMenu",null);E(this,"_onSkins",null);E(this,"_onChallenges",null);E(this,"_onStats",null);E(this,"_onShop",null);E(this,"_onSelectSkin",null);E(this,"_onPurchaseUpgrade",null);E(this,"_onSubmitName",null);E(this,"dailyChallenges",null);E(this,"statsManager",null);E(this,"_countUpRaf",0);E(this,"_reachedMilestones",new Set);this.cacheElements(),this.setupEventListeners()}cacheElements(){if(this._startScreen=document.getElementById("start-screen"),this._pauseScreen=document.getElementById("pause-screen"),this._overlay=document.getElementById("overlay"),this._scoreDisplay=document.getElementById("score-display"),this._gameOverScreen=document.getElementById("game-over-screen"),this._finalScore=document.getElementById("final-score"),this._restartButton=document.getElementById("restart-button"),this._pauseButton=document.getElementById("pause-btn"),this._pauseButtonContainer=document.getElementById("pause-button"),this._resumeButton=document.getElementById("resume-button"),this._leaderboardScreen=document.getElementById("leaderboard-screen"),this._leaderboardListFull=document.getElementById("leaderboard-list-full"),this._viewLeaderboardButton=document.getElementById("view-leaderboard-button"),this._backToGameOverButton=document.getElementById("back-to-game-over-button"),this._nameEntrySection=document.getElementById("name-entry-section"),this._playerNameInput=document.getElementById("player-name-input"),this._submitNameButton=document.getElementById("submit-name-button"),this._gameOverMessage=document.getElementById("game-over-message"),this._introOverlay=document.getElementById("intro-overlay"),this._introProgressBar=document.getElementById("intro-progress-bar"),this._introTapPrompt=document.getElementById("intro-tap-prompt"),this._loadingScreen=document.getElementById("loading-screen"),this._loadingProgressBar=document.getElementById("loading-progress-bar"),this._loadingTip=document.getElementById("loading-tip"),!this._startScreen||!this._pauseScreen||!this._overlay||!this._scoreDisplay||!this._gameOverScreen||!this._finalScore||!this._restartButton||!this._pauseButton||!this._pauseButtonContainer||!this._resumeButton||!this._leaderboardScreen||!this._leaderboardListFull||!this._viewLeaderboardButton||!this._backToGameOverButton)throw new Error("Failed to cache UI elements")}setupEventListeners(){this._restartButton&&this._restartButton.addEventListener("click",()=>{this._onRestart&&this._onRestart()}),this._pauseButton&&this._pauseButton.addEventListener("click",()=>{this._onPause&&this._onPause()}),this._resumeButton&&this._resumeButton.addEventListener("click",()=>{this._onResume&&this._onResume()}),this._submitNameButton&&this._playerNameInput&&(this._submitNameButton.addEventListener("click",()=>{if(this._onSubmitName&&this._playerNameInput){const h=this._playerNameInput.value.trim()||"Anonymous";this._onSubmitName(h),this._nameEntrySection&&(this._nameEntrySection.style.display="none")}}),this._playerNameInput.addEventListener("keydown",h=>{if(h.key==="Enter"&&this._onSubmitName&&this._playerNameInput){const f=this._playerNameInput.value.trim()||"Anonymous";this._onSubmitName(f),this._nameEntrySection&&(this._nameEntrySection.style.display="none")}})),document.addEventListener("keydown",h=>{h.key==="Escape"&&(this.currentGameState===Xe.PAUSED?this._onResume&&this._onResume():this.currentGameState===Xe.GAMEOVER?this._onRestart&&this._onRestart():this.currentGameState===Xe.LEADERBOARD&&this._onBackToGameOver&&this._onBackToGameOver()),h.key===" "&&this.currentGameState===Xe.GAMEOVER&&(h.preventDefault(),this._onRestart&&this._onRestart())}),this._startScreen&&this._startScreen.addEventListener("click",h=>{if(h.stopPropagation(),this._startScreen&&!this._startScreen.classList.contains("hidden")){const f=h.target;f.closest("#skins-button")||f.closest("#challenges-button")||f.closest("#stats-button")||f.closest("#play-button")||f.closest(".skin-card")||f.closest(".challenge-item")||f.closest(".stat-card")||f.closest("button")||f.closest("a")||this._onPlay&&this._onPlay()}});const e=document.getElementById("play-button");e&&e.addEventListener("click",h=>{h.stopPropagation(),h.stopImmediatePropagation(),this._onPlay&&this._onPlay()});const t=document.getElementById("skins-button");t&&t.addEventListener("click",h=>{h.stopPropagation(),h.stopImmediatePropagation(),this._onSkins&&this._onSkins()});const n=document.getElementById("challenges-button");n&&n.addEventListener("click",h=>{h.stopPropagation(),h.stopImmediatePropagation(),this._onChallenges&&this._onChallenges()});const i=document.getElementById("stats-button");i&&i.addEventListener("click",h=>{h.stopPropagation(),h.stopImmediatePropagation(),this._onStats&&this._onStats()});const r=document.getElementById("shop-button");r&&r.addEventListener("click",h=>{h.stopPropagation(),h.stopImmediatePropagation(),this._onShop&&this._onShop()});const a=document.getElementById("home-button");a&&a.addEventListener("click",h=>{h.stopPropagation(),h.stopImmediatePropagation(),this._onBackToMenu&&this._onBackToMenu()}),this._viewLeaderboardButton&&this._viewLeaderboardButton.addEventListener("click",()=>{this._onViewLeaderboard&&this._onViewLeaderboard()}),this._backToGameOverButton&&this._backToGameOverButton.addEventListener("click",()=>{this._onBackToGameOver&&this._onBackToGameOver()});const o=document.getElementById("back-from-skins-button");o&&o.addEventListener("click",h=>{h.stopPropagation(),h.stopImmediatePropagation(),this._onBackToMenu&&this._onBackToMenu()});const l=document.getElementById("back-from-challenges-button");l&&l.addEventListener("click",h=>{h.stopPropagation(),h.stopImmediatePropagation(),this._onBackToMenu&&this._onBackToMenu()});const c=document.getElementById("back-from-stats-button");c&&c.addEventListener("click",h=>{h.stopPropagation(),h.stopImmediatePropagation(),this._onBackToMenu&&this._onBackToMenu()});const u=document.getElementById("back-from-shop-button");u&&u.addEventListener("click",h=>{h.stopPropagation(),h.stopImmediatePropagation(),this._onBackToMenu&&this._onBackToMenu()})}updateScore(e){this._scoreDisplay&&(this._scoreDisplay.textContent=Math.floor(e).toString())}showStartScreen(){this.hideAllScreens(),this._startScreen&&this._overlay&&(this._overlay.classList.remove("hidden"),this._startScreen.classList.remove("hidden"),this._startScreen.classList.add("visible"),this._overlay.classList.add("visible"))}hideStartScreen(){this._startScreen&&this._overlay&&(this._overlay.classList.add("hidden"),this._startScreen.classList.add("hidden")),this._pauseButtonContainer&&(this._pauseButtonContainer.style.display="block")}showGameOverScreen(e,t,n,i){if(this.hideAllScreens(),this._gameOverScreen&&this._finalScore&&this._overlay){this._overlay.classList.remove("hidden"),this._gameOverScreen.classList.remove("hidden"),cancelAnimationFrame(this._countUpRaf);const r=Math.floor(e),a=Math.min(1500,Math.max(500,r*5)),o=performance.now();this._finalScore.classList.remove("score-counted"),this._finalScore.textContent="Score: 0";const l=c=>{const u=c-o,h=Math.min(u/a,1),f=1-Math.pow(1-h,3),p=Math.floor(f*r);this._finalScore&&(this._finalScore.textContent=`Score: ${p}`),h<1?this._countUpRaf=requestAnimationFrame(l):this._finalScore&&this._finalScore.classList.add("score-counted")};this._countUpRaf=requestAnimationFrame(l),this._gameOverMessage&&(this._gameOverMessage.textContent=t||"",this._gameOverMessage.classList.toggle("new-best",n===!0)),this._nameEntrySection&&this._playerNameInput&&(i?(this._nameEntrySection.style.display="block",this._playerNameInput.value="",this._playerNameInput.focus()):this._nameEntrySection.style.display="none"),this._gameOverScreen.classList.add("visible"),this._overlay.classList.add("visible")}}showLeaderboardScreen(){this.hideAllScreens(),this._leaderboardScreen&&this._leaderboardListFull&&this._overlay&&(this._overlay.classList.remove("hidden"),this._leaderboardScreen.classList.remove("hidden"),this._leaderboardScreen.classList.add("visible"),this._overlay.classList.add("visible"))}showSkinsScreen(){this._showScreen("skin-screen")}showChallengesScreen(){this._showScreen("challenges-screen")}showStatsScreen(){this._showScreen("stats-screen")}showShopScreen(){this._showScreen("shop-screen")}_showScreen(e){this.hideAllScreens();const t=document.getElementById(e);t&&this._overlay&&(this._overlay.classList.remove("hidden"),t.classList.remove("hidden"),this._overlay.classList.add("visible"),requestAnimationFrame(()=>{t.classList.add("visible")}))}hideLeaderboardScreen(){this._leaderboardScreen&&this._overlay&&(this._overlay.classList.add("hidden"),this._leaderboardScreen.classList.add("hidden"))}hideGameOverScreen(){this._gameOverScreen&&this._overlay&&(this._overlay.classList.add("hidden"),this._gameOverScreen.classList.add("hidden"))}hideAllScreens(){[this._overlay,this._startScreen,this._pauseScreen,this._gameOverScreen,this._leaderboardScreen].forEach(n=>this._hideElement(n)),["skin-screen","challenges-screen","stats-screen","shop-screen"].forEach(n=>this._hideElement(document.getElementById(n))),this._pauseButtonContainer&&(this._pauseButtonContainer.style.display="none")}_hideElement(e){e&&(e.classList.add("hidden"),e.classList.remove("visible"))}showScoreDisplay(){this._scoreDisplay&&(this._scoreDisplay.style.display="block")}hideScoreDisplay(){this._scoreDisplay&&(this._scoreDisplay.style.display="none")}showIntroOverlay(){this._introOverlay&&(this._introOverlay.style.display="flex",setTimeout(()=>{var e;(e=this._introOverlay)==null||e.classList.add("visible")},10))}hideIntroOverlay(){this._introOverlay&&(this._introOverlay.classList.remove("visible"),setTimeout(()=>{this._introOverlay&&(this._introOverlay.style.display="none")},500))}updateIntroProgress(e){this._introProgressBar&&(this._introProgressBar.style.width=`${e}%`)}setIntroOpacity(e){this._introOverlay&&(this._introOverlay.style.opacity=e.toString())}setTapPromptOpacity(e){this._introTapPrompt&&(this._introTapPrompt.style.opacity=e.toString())}showLoadingScreen(){this._loadingScreen&&this._loadingScreen.classList.remove("hidden"),this._updateLoadingTip()}hideLoadingScreen(){this._loadingScreen&&this._loadingScreen.classList.add("hidden")}fadeLoadingScreen(){this._loadingScreen&&this._loadingScreen.classList.add("fade-out")}updateLoadingProgress(e){this._loadingProgressBar&&(this._loadingProgressBar.style.width=`${e}%`)}_updateLoadingTip(){const e=["Tip: Swipe left or right to dodge!","Tip: Tap edges of screen to change lanes!","Tip: Watch for gaps between obstacles!","Tip: Speed increases over time!","Tip: Dodge, don't get hit!","Tip: Practice makes perfect!","Tip: Stay focused!","Tip: Every second counts!"];if(this._loadingTip){const t=e[Math.floor(Math.random()*e.length)];this._loadingTip.textContent=t}}setOnPlayCallback(e){this._onPlay=e}setOnRestartCallback(e){this._onRestart=e}setOnPauseCallback(e){this._onPause=e}setOnResumeCallback(e){this._onResume=e}setOnViewLeaderboardCallback(e){this._onViewLeaderboard=e}setOnBackToGameOverCallback(e){this._onBackToGameOver=e}setOnBackToMenuCallback(e){this._onBackToMenu=e}setOnSkinsCallback(e){this._onSkins=e}setOnChallengesCallback(e){this._onChallenges=e}setOnStatsCallback(e){this._onStats=e}setOnShopCallback(e){this._onShop=e}setOnSelectSkinCallback(e){this._onSelectSkin=e}setOnPurchaseUpgradeCallback(e){this._onPurchaseUpgrade=e}setOnSubmitNameCallback(e){this._onSubmitName=e}setDailyChallenges(e){this.dailyChallenges=e}setStatsManager(e){this.statsManager=e}getLoadingProgressBar(){return this._loadingProgressBar}updateSkinGrid(e,t,n,i){const r=document.getElementById("skin-grid");if(!r)return;r.innerHTML="";const a=document.getElementById("skin-best-score");a&&(a.textContent=`Best: ${Math.floor(i)}`),e.forEach(o=>{const l=n.includes(o.id),c=o.id===t,u=i>=o.unlockScore,h=document.createElement("div");h.className=`skin-card ${c?"selected":""} ${l?"":"locked"}`,h.dataset.skinId=o.id;const f=this._generatePreviewStyle(o);h.innerHTML=`
        <div class="skin-preview" style="${f}"></div>
        <div class="skin-info">
          <div class="skin-name">${o.name}</div>
          <div class="skin-status">
            ${l?"&#10003; Unlocked":`<span class="lock-req">&#128274; ${o.unlockScore} pts</span>`}
          </div>
        </div>
        ${c?'<div class="selected-badge">&#9733;</div>':""}
        ${u&&!l?'<div class="unlock-ready">New!</div>':""}
      `,h.addEventListener("click",()=>{l&&this._onSelectSkin&&this._onSelectSkin(o.id)}),r.appendChild(h)})}_generatePreviewStyle(e){if(e.gradient&&e.gradient.length>=2){const t=this._hexToCss(e.gradient[0]),n=e.gradient.length>2?this._hexToCss(e.gradient[1]):this._hexToCss(e.gradient[e.gradient.length-1]);return`background: linear-gradient(135deg, ${t} 0%, ${n} 100%);`}return`background-color: ${this._hexToCss(e.color)};`}_hexToCss(e){return"#"+e.toString(16).padStart(6,"0")}updateChallengesList(e,t){const n=document.getElementById("challenges-list");if(!n)return;const i=document.getElementById("challenges-timer");if(i){const r=`${t.hours.toString().padStart(2,"0")}:${t.minutes.toString().padStart(2,"0")}:${t.seconds.toString().padStart(2,"0")}`;i.textContent=`Reset in ${r}`}n.innerHTML="",e.forEach(r=>{const a=document.createElement("div"),o=r.completed,l=`challenge-${r.id}`;a.className=`challenge-item ${o?"completed":""}`,a.innerHTML=`
        <div class="challenge-icon">${r.icon}</div>
        <div class="challenge-info">
          <div class="challenge-title">
            ${r.title}
            <button class="challenge-info-btn" data-challenge="${l}" aria-label="Show challenge details">&#8505;&#65039;</button>
          </div>
          <div class="challenge-details" id="${l}">
            <div class="challenge-details-content">
              <div class="challenge-detail-description">${r.description}</div>
              <div class="challenge-detail-type">Type: ${r.type}</div>
            </div>
          </div>
          <div class="challenge-progress">
            <div class="progress-bar">
              <div class="progress-bar-fill" style="width: ${Math.min(r.progress/r.target*100,100)}%"></div>
            </div>
            <div class="progress-text">${r.progress}/${r.target}</div>
          </div>
        </div>
        <div class="challenge-reward">${r.reward} coins</div>
      `;const c=a.querySelector(".challenge-info-btn");c&&c.addEventListener("click",u=>{u.stopPropagation();const h=document.getElementById(l);h&&h.classList.toggle("visible")}),n.appendChild(a)})}updateChallengesDisplay(){try{if(!this.dailyChallenges)return;const e=this.dailyChallenges.getChallenges(),t=this.dailyChallenges.getTimeRemaining();this.updateChallengesList(e,t),this._updateCoinDisplay()}catch(e){}}updateStatsFromManager(){try{if(!this.statsManager)return;const e=this.statsManager.getStats();this.updateStatsDisplay(e)}catch(e){}}updateStatsDisplay(e){const t={totalRuns:this._safeNumber(e.totalRuns,0),highestScore:this._safeNumber(e.highestScore,0),totalDistance:this._safeNumber(e.totalDistance,0),totalObstaclesDodged:this._safeNumber(e.totalObstaclesDodged,0),totalPlayTime:this._safeNumber(e.totalPlayTime,0),challengesCompleted:this._safeNumber(e.challengesCompleted,0),skinsUnlocked:e.unlockedSkins.length},n={"stat-total-runs":document.getElementById("stat-total-runs"),"stat-highest-score":document.getElementById("stat-highest-score"),"stat-total-distance":document.getElementById("stat-total-distance"),"stat-obstacles-dodged":document.getElementById("stat-obstacles-dodged"),"stat-play-time":document.getElementById("stat-play-time"),"stat-challenges-completed":document.getElementById("stat-challenges"),"stat-skins-unlocked":document.getElementById("stat-skins")};if(n["stat-total-runs"]&&(n["stat-total-runs"].textContent=t.totalRuns.toString()),n["stat-highest-score"]&&(n["stat-highest-score"].textContent=Math.floor(t.highestScore).toString()),n["stat-total-distance"]&&(n["stat-total-distance"].textContent=Math.round(t.totalDistance).toString()),n["stat-obstacles-dodged"]&&(n["stat-obstacles-dodged"].textContent=t.totalObstaclesDodged.toString()),n["stat-play-time"]){const i=this._safeNumber(e.totalPlayTime,0),r=Math.floor(i/3600),a=Math.floor(i%3600/60),o=r>0?`${r}h ${a}m`:`${a}m`;n["stat-play-time"].textContent=o}n["stat-challenges-completed"]&&(n["stat-challenges-completed"].textContent=t.challengesCompleted.toString()),n["stat-skins-unlocked"]&&(n["stat-skins-unlocked"].textContent=t.skinsUnlocked.toString())}showPauseButton(){this._pauseButtonContainer&&(this._pauseButtonContainer.style.display="block")}hidePauseButton(){this._pauseButtonContainer&&(this._pauseButtonContainer.style.display="none")}showUpgradeHud(){const e=document.getElementById("upgrade-hud");e&&e.classList.remove("hidden")}hideUpgradeHud(){const e=document.getElementById("upgrade-hud");e&&e.classList.add("hidden")}updateUpgradeHud(e){const t=document.getElementById("shield-indicator"),n=document.getElementById("extra-life-indicator"),i=document.getElementById("magnet-level"),r=document.getElementById("speed-level");if(t&&(t.classList.toggle("active",e.shield),t.classList.toggle("used",!e.shield)),n&&(n.classList.toggle("active",e.extraLife),n.classList.toggle("used",!e.extraLife)),i){i.textContent=e.coinMagnetLevel.toString();const a=i.closest(".upgrade-indicator");a&&a.classList.toggle("active",e.coinMagnetLevel>0)}if(r){r.textContent=e.speedControlLevel.toString();const a=r.closest(".upgrade-indicator");a&&a.classList.toggle("active",e.speedControlLevel>0)}}showPauseScreen(){this.hideAllScreens(),this._pauseScreen&&this._overlay&&(this._overlay.classList.remove("hidden"),this._pauseScreen.classList.remove("hidden"),this._pauseScreen.classList.add("visible"),this._overlay.classList.add("visible"))}hidePauseScreen(){this._pauseScreen&&this._overlay&&(this._overlay.classList.add("hidden"),this._pauseScreen.classList.add("hidden"))}updateLeaderboardFull(e){this._leaderboardListFull&&(this._leaderboardListFull.innerHTML="",e.forEach((t,n)=>{var c;const i=document.createElement("li");i.className="leaderboard-item";const r=document.createElement("span");r.className="leaderboard-rank",r.textContent=`#${n+1}`;const a=document.createElement("span");a.className="leaderboard-name",a.textContent=t.name||"Anonymous";const o=document.createElement("span");o.className="leaderboard-score",o.textContent=Math.floor(t.score).toString();const l=document.createElement("span");l.className="leaderboard-date",l.textContent=t.date,i.appendChild(r),i.appendChild(a),i.appendChild(o),i.appendChild(l),(c=this._leaderboardListFull)==null||c.appendChild(i)}))}setGameState(e){switch(this.currentGameState=e,e){case Xe.MENU:this.showStartScreen(),this.hideScoreDisplay(),this.hidePauseButton(),this.hideUpgradeHud();break;case Xe.PLAYING:this.hideAllScreens(),this.showScoreDisplay(),this.showPauseButton(),this.showUpgradeHud();break;case Xe.PAUSED:this.showPauseScreen(),this.hidePauseButton(),this.hideUpgradeHud();break;case Xe.GAMEOVER:this.hideScoreDisplay(),this.hidePauseButton(),this.hideUpgradeHud();break;case Xe.LEADERBOARD:this.showLeaderboardScreen(),this.hidePauseButton();break;case Xe.SKINS:this.showSkinsScreen(),this.hidePauseButton();break;case Xe.CHALLENGES:this.showChallengesScreen(),this.hidePauseButton();break;case Xe.STATS:this.showStatsScreen(),this.hidePauseButton();break;case Xe.SHOP:this.showShopScreen(),this.hidePauseButton();break}}triggerScoreFlash(){this._scoreDisplay&&(this._scoreDisplay.classList.remove("score-flash"),this._scoreDisplay.offsetWidth,this._scoreDisplay.classList.add("score-flash"))}showScorePopup(e,t){const n=document.createElement("div");n.className=`score-popup${t?" near-miss":""}`,n.textContent=e,document.body.appendChild(n),setTimeout(()=>n.remove(),900)}showStreakNotification(e){const t=document.createElement("div");t.className="streak-notification",t.innerHTML=`
      <span class="streak-fire">&#128293;</span>
      <span class="streak-text">Streak x${e}!</span>
    `,document.body.appendChild(t),setTimeout(()=>t.classList.add("visible"),10),setTimeout(()=>{t.classList.remove("visible"),setTimeout(()=>t.remove(),300)},3e3)}showMilestonePopup(e){const t=document.createElement("div");t.className="milestone-popup",t.textContent=e,document.body.appendChild(t),setTimeout(()=>t.remove(),2e3)}resetMilestones(){this._reachedMilestones.clear()}markMilestoneReached(e){return this._reachedMilestones.has(e)?!1:(this._reachedMilestones.add(e),!0)}updateSkinDisplay(){}updateShopDisplay(e,t){const n=document.getElementById("shop-list");if(!n)return;const i=document.getElementById("shop-coin-value");i&&(i.textContent=t.toString()),n.innerHTML="",e.forEach(r=>{const a=r.currentLevel>=r.maxLevel,o=r.cost*(r.currentLevel+1),l=t>=o,c=document.createElement("div");c.className=`shop-item ${a?"maxed":""}`,c.innerHTML=`
        <div class="shop-icon">${r.icon}</div>
        <div class="shop-info">
          <div class="shop-name">${r.name}</div>
          <div class="shop-description">${r.description}</div>
          <div class="shop-effect">${r.effect(r.currentLevel)}</div>
        </div>
        <div class="shop-action">
          ${a?'<div class="shop-purchased">MAXED</div>':`<button class="shop-buy-btn" data-upgrade-id="${r.id}" ${l?"":"disabled"}>Buy</button>
               <div class="shop-cost">${o} coins</div>`}
          ${r.maxLevel>1&&!a?`<div class="shop-level">Level ${r.currentLevel}/${r.maxLevel}</div>`:""}
        </div>
      `;const u=c.querySelector(".shop-buy-btn");u&&!a&&u.addEventListener("click",h=>{h.stopPropagation(),this._onPurchaseUpgrade&&this._onPurchaseUpgrade(r.id)}),n.appendChild(c)})}_updateCoinDisplay(){if(!this.dailyChallenges)return;const e=document.getElementById("challenges-coin-value");if(e){const t=this.dailyChallenges.getCoinBalance();e.textContent=t.toString()}}_safeNumber(e,t){return typeof e=="number"&&!isNaN(e)&&isFinite(e)?Math.max(0,e):t}}class cg{constructor(e){E(this,"_button");E(this,"_icon");E(this,"_audioManager");E(this,"_storageKey","toiletRunner.audioEnabled");this._audioManager=e,this._button=document.getElementById("audio-button"),this._icon=this._button.querySelector(".audio-icon");const n=localStorage.getItem(this._storageKey)!=="false";this._audioManager.setEnabled(n),this.updateIcon(n),this._button.addEventListener("click",()=>this.toggleAudio())}toggleAudio(){const t=!this._audioManager.isEnabled();this._audioManager.setEnabled(t),this.updateIcon(t),localStorage.setItem(this._storageKey,t.toString())}updateIcon(e){this._icon.textContent=e?"🔊":"🔇"}}const hg="modulepreload",ug=function(s,e){return new URL(s,e).href},ul={},mi=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let a=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=a(t.map(u=>{if(u=ug(u,n),u in ul)return;ul[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(!!n)for(let _=o.length-1;_>=0;_--){const m=o[_];if(m.href===u&&(!h||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":hg,h||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),h)return new Promise((_,m)=>{g.addEventListener("load",_),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};class dg{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const fg=new Na(-1,1,1,-1,0,1);class pg extends bt{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}}const mg=new pg;class gg{constructor(e){this._mesh=new Ue(mg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,fg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ec extends dg{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Gl.clone(e.uniforms),this.material=new Zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new gg(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const _g=Object.freeze(Object.defineProperty({__proto__:null,ShaderPass:ec},Symbol.toStringTag,{value:"Module"}));class vg{constructor(e,t,n){E(this,"composer",null);E(this,"renderPass",null);E(this,"bloomPass",null);E(this,"fxaaPass",null);E(this,"vignettePass",null);E(this,"outputPass",null);this.renderer=e,this.scene=t,this.camera=n}initialize(e){return pt(this,null,function*(){if(!e.enabled)return;const{EffectComposer:t}=yield mi(()=>pt(null,null,function*(){const{EffectComposer:r}=yield import("./EffectComposer-DPI4Zzzw.js");return{EffectComposer:r}}),__vite__mapDeps([0,1]),import.meta.url);this.composer=new t(this.renderer),this.composer.setPixelRatio(Math.min(window.devicePixelRatio,2));const{RenderPass:n}=yield mi(()=>pt(this,null,function*(){const{RenderPass:r}=yield import("./RenderPass-BxYab_yz.js");return{RenderPass:r}}),[],import.meta.url);if(this.renderPass=new n(this.scene,this.camera),this.composer.addPass(this.renderPass),e.bloom){const{UnrealBloomPass:r}=yield mi(()=>pt(this,null,function*(){const{UnrealBloomPass:l}=yield import("./UnrealBloomPass-CXQVr2l7.js");return{UnrealBloomPass:l}}),__vite__mapDeps([2,1]),import.meta.url),a=/Android|iPhone|iPad/i.test(navigator.userAgent),o=new Ee(a?window.innerWidth*.5:window.innerWidth,a?window.innerHeight*.5:window.innerHeight);this.bloomPass=new r(o,e.bloom.strength,e.bloom.radius,e.bloom.threshold),this.composer.addPass(this.bloomPass)}if(e.fxaa){const{ShaderPass:r}=yield mi(()=>pt(this,null,function*(){const{ShaderPass:o}=yield Promise.resolve().then(()=>_g);return{ShaderPass:o}}),void 0,import.meta.url),{FXAAShader:a}=yield mi(()=>pt(this,null,function*(){const{FXAAShader:o}=yield import("./FXAAShader-zQce5fGV.js");return{FXAAShader:o}}),[],import.meta.url);this.fxaaPass=new r(a),this.fxaaPass.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight),this.composer.addPass(this.fxaaPass)}e.vignette&&!this.isMobile()&&(this.vignettePass=new ec(Sg),this.vignettePass.uniforms.offset.value=e.vignette.offset,this.vignettePass.uniforms.darkness.value=e.vignette.darkness,this.composer.addPass(this.vignettePass));const{OutputPass:i}=yield mi(()=>pt(this,null,function*(){const{OutputPass:r}=yield import("./OutputPass-BmXk_Qgp.js");return{OutputPass:r}}),[],import.meta.url);this.outputPass=new i,this.composer.addPass(this.outputPass)})}render(){this.composer&&this.composer.render()}resize(e,t){this.composer&&this.composer.setSize(e,t),this.fxaaPass&&this.fxaaPass.uniforms.resolution.value.set(1/e,1/t)}dispose(){this.composer&&(this.composer.dispose(),this.composer=null)}isEnabled(){return this.composer!==null}isMobile(){return/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}}const Sg={uniforms:{tDiffuse:{value:null},offset:{value:.5},darkness:{value:.3}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float offset;
    uniform float darkness;
    varying vec2 vUv;
    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      float dist = distance(vUv, vec2(0.5, 0.5));
      float vignette = smoothstep(offset, offset - darkness, dist);
      color.rgb *= vignette;
      gl_FragColor = color;
    }
  `};var qi=(s=>(s.DUST="dust",s.SPARKLE="sparkle",s.IMPACT="impact",s.COIN="coin",s))(qi||{});class Us{constructor(e,t){E(this,"particles",[]);E(this,"instancedMesh");E(this,"matrix",new Ke);E(this,"tempVector",new L);E(this,"tempColor",new Fe);E(this,"tempEuler",new Nt);this.scene=e,this.config=t,this.initializeInstancedMesh(),this.initializeParticles()}initializeInstancedMesh(){const e=new en(this.config.size.max,this.config.size.max),t=new xn({transparent:!0,opacity:1,side:Ct,depthWrite:!1,vertexColors:!0});this.instancedMesh=new Ws(e,t,this.config.maxParticles),this.instancedMesh.instanceMatrix.setUsage(Zc),this.scene.add(this.instancedMesh)}initializeParticles(){for(let e=0;e<this.config.maxParticles;e++)this.particles.push({position:new L(0,-100,0),velocity:new L,lifetime:0,maxLifetime:0,active:!1,color:new Fe(1,1,1),size:1,rotation:new Nt,rotationSpeed:new L})}emit(e,t=10){let n=0;for(const i of this.particles)if(!i.active&&(this.resetParticle(i,e),i.active=!0,n++,n>=t))break}resetParticle(e,t){e.position.copy(t);const n=Math.random()*Math.PI*2,i=Math.random()*Math.PI*.5,r=dn.randFloat(this.config.speed.min,this.config.speed.max);e.velocity.set(Math.sin(i)*Math.cos(n)*r,Math.cos(i)*r+r*.5,Math.sin(i)*Math.sin(n)*r),e.maxLifetime=this.config.lifetime*(.7+Math.random()*.6),e.lifetime=e.maxLifetime;const a=this.config.colors[Math.floor(Math.random()*this.config.colors.length)];e.color.setHex(a),e.size=dn.randFloat(this.config.size.min/this.config.size.max,1),e.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),e.rotationSpeed.set(Math.random()*6-3,Math.random()*10-5,Math.random()*6-3)}update(e){let t=0;for(let n=0;n<this.particles.length;n++){const i=this.particles[n];if(!i.active){this.matrix.setPosition(0,-100,0),this.instancedMesh.setMatrixAt(n,this.matrix);continue}i.lifetime-=e,i.velocity.y-=this.config.gravity*e,this.tempVector.copy(i.velocity).multiplyScalar(e),i.position.add(this.tempVector),i.rotation.x+=i.rotationSpeed.x*e,i.rotation.y+=i.rotationSpeed.y*e,i.rotation.z+=i.rotationSpeed.z*e,this.matrix.compose(i.position,new Li().setFromEuler(i.rotation),this.tempVector.setScalar(i.size*this.config.size.max)),this.instancedMesh.setMatrixAt(n,this.matrix);const r=Math.max(0,i.lifetime/i.maxLifetime);this.tempColor.copy(i.color),this.tempColor.multiplyScalar(r),this.instancedMesh.setColorAt(n,this.tempColor),i.lifetime<=0?(i.active=!1,i.position.set(0,-100,0),this.matrix.setPosition(0,-100,0),this.instancedMesh.setMatrixAt(n,this.matrix)):t++}this.instancedMesh.instanceMatrix.needsUpdate=!0,this.instancedMesh.instanceColor&&(this.instancedMesh.instanceColor.needsUpdate=!0),this.instancedMesh.visible=t>0}reset(){for(let e=0;e<this.particles.length;e++){const t=this.particles[e];t.active&&(t.active=!1,t.position.set(0,-100,0),this.matrix.setPosition(0,-100,0),this.instancedMesh.setMatrixAt(e,this.matrix))}this.instancedMesh.instanceMatrix.needsUpdate=!0,this.instancedMesh.visible=!1}dispose(){this.scene.remove(this.instancedMesh),this.instancedMesh.geometry.dispose(),this.instancedMesh.material.dispose(),this.particles=[]}getActiveCount(){return this.particles.filter(e=>e.active).length}emitDust(e){for(let t=0;t<3;t++)this.emit(e,2)}emitSparkle(e){this.tempVector.copy(e),this.tempVector.y+=1,this.emit(this.tempVector,8)}emitImpact(e){this.emit(e,25)}emitCoin(e){this.emit(e,20)}}const Fs={dust:{maxParticles:200,colors:[13808780,12687979,10519149,9139029],size:{min:.04,max:.12},speed:{min:.5,max:2},lifetime:.4,gravity:1},sparkle:{maxParticles:200,colors:[16766720,16753920,16776960,16777215,16770229],size:{min:.06,max:.18},speed:{min:1,max:4},lifetime:1,gravity:.5},impact:{maxParticles:300,colors:[16777215,16119260,9139029,7029795,16739179],size:{min:.15,max:.5},speed:{min:5,max:15},lifetime:1.4,gravity:6},coin:{maxParticles:200,colors:[16766720,16753920,16776960,16770229,65280],size:{min:.05,max:.15},speed:{min:2,max:6},lifetime:1.2,gravity:3}};class Ks{static setQuality(e){this.quality!==e&&(this.disposeAll(),this.quality=e)}static getTrackMaterial(e){const t=`track_${this.quality}`;if(this.materials.has(t))return this.materials.get(t);const n=this.getMaterialConfig(),i=this.quality===un.LOW?new mt({color:16777215,map:e,side:ct}):new Rs({color:16777215,map:e,roughness:n.roughness,metalness:n.metalness,side:ct});return this.materials.set(t,i),i}static getObstacleMaterial(){const e=`obstacle_${this.quality}`;if(this.materials.has(e))return this.materials.get(e);const t=this.getMaterialConfig(),n=this.quality===un.LOW?new mt({color:9133628,side:ct}):new Rs({color:9133628,roughness:t.roughness+.2,metalness:0,emissive:4862496,emissiveIntensity:.2,side:ct});return this.materials.set(e,n),n}static getToiletMaterial(){const e=`toilet_${this.quality}`;if(this.materials.has(e))return this.materials.get(e);const t=this.getMaterialConfig(),n=this.quality===un.LOW?new mt({color:16777215,side:ct}):new Rs({color:16777215,roughness:t.roughness-.1,metalness:t.metalness,side:ct});return this.materials.set(e,n),n}static getPlayerMaterial(e){const t=`player_${this.quality}`;if(this.materials.has(t))return this.materials.get(t);const n=this.getMaterialConfig(),i=this.quality===un.LOW?new mt({color:16777200,map:e,side:ct}):new Rs({color:16777200,map:e,roughness:n.roughness+.1,metalness:0,side:ct});return this.materials.set(t,i),i}static getWhiteMaterial(){const e=`white_${this.quality}`;if(this.materials.has(e))return this.materials.get(e);const t=new xn({color:16777215,side:ct});return this.materials.set(e,t),t}static getMaterialConfig(){switch(this.quality){case un.LOW:return{roughness:1,metalness:0,envMapIntensity:0};case un.MEDIUM:return{roughness:.8,metalness:.05,envMapIntensity:.2};case un.HIGH:return{roughness:.6,metalness:.1,envMapIntensity:.5}}}static disposeAll(){this.materials.forEach(e=>e.dispose()),this.materials.clear()}}E(Ks,"materials",new Map),E(Ks,"quality",un.MEDIUM);class Mg{constructor(){E(this,"_skins",[{id:"classic",name:"Classic White",color:16777215,pattern:"paper",patternColors:["#FFFFFF","#F5F5F5","#E8E8E8"],unlockScore:0,icon:"🧻",description:"The original toilet paper roll"},{id:"gold",name:"Golden Roll",color:16766720,pattern:"metallic",patternColors:["#FFD700","#DAA520","#B8860B","#FFA500"],unlockScore:100,icon:"✨",description:"For champions only!"},{id:"rainbow",name:"Pride",color:16738740,pattern:"rainbow",patternColors:["#FF0000","#FF7F00","#FFFF00","#00FF00","#0000FF","#4B0082","#9400D3"],unlockScore:200,icon:"🌈",description:"Celebrate diversity!"},{id:"neon",name:"Cyber Glow",color:65280,pattern:"circuit",patternColors:["#0D0D0D","#00FFFF","#FF00FF","#00FF00"],unlockScore:300,icon:"⚡",description:"Future is now!"},{id:"camo",name:"Military",color:4936480,pattern:"camo",patternColors:["#556B2F","#8B7355","#D2B48C","#2F4F2F","#6B8E23"],unlockScore:400,icon:"🎖️",description:"Tactical toilet paper"},{id:"fire",name:"Hot Stuff",color:16729344,pattern:"flames",patternColors:["#FF4500","#FF6600","#FFD700","#FF0000","#FF8C00"],unlockScore:500,icon:"🔥",description:"Feeling spicy!"},{id:"ice",name:"Cool Ice",color:65535,pattern:"frost",patternColors:["#B0E0E6","#87CEEB","#FFFFFF","#E0FFFF","#ADD8E6"],unlockScore:600,icon:"❄️",description:"Chill vibes only"},{id:"shadow",name:"Dark Mode",color:1710638,pattern:"stars",patternColors:["#1a1a2e","#16213e","#0f0f1a","#FFFFFF","#E8E8E8"],unlockScore:750,icon:"🌙",description:"Stealth mode activated"}]);E(this,"_statsManager",null);this._initializeSkins()}setStatsManager(e){this._statsManager=e}_initializeSkins(){}getSkins(){return this._skins}getSelectedSkinId(){return this._statsManager?this._statsManager.getSelectedSkin():"classic"}getSelectedSkin(){if(!this._statsManager)return;const e=this._statsManager.getSelectedSkin();return this._skins.find(t=>t.id===e)}getSkinColor(e){const t=this._skins.find(n=>n.id===e);return t?t.color:16777215}getSkinGradient(e){const t=this._skins.find(n=>n.id===e);if(t&&t.gradient&&t.gradient.length>=2)return[t.gradient[0],t.gradient[1]]}isSkinUnlocked(e){return this._statsManager?this._statsManager.isSkinUnlocked(e):!1}updateStats(e){const t=[];for(const n of this._skins)e>=n.unlockScore&&t.push(n.id);return{newlyUnlocked:t}}}class xg{constructor(){E(this,"_challenges",[]);E(this,"_lastGenerated","");E(this,"_coinBalance",0);E(this,"_statsManager",null);E(this,"_savePending",!1);E(this,"_challengeTemplates",[{title:"Survivor",description:"Survive for 60 seconds",type:"survive",target:60,reward:50,icon:"⏱️"},{title:"Dodge Master",description:"Dodge 30 obstacles",type:"dodge",target:30,reward:75,icon:"🏃"},{title:"High Scorer",description:"Reach a score of 200",type:"score",target:200,reward:100,icon:"🎯"},{title:"On Fire",description:"Get a streak of 5 runs without dying",type:"streak",target:5,reward:150,icon:"🔥"},{title:"Marathon",description:"Travel 1000 units distance",type:"distance",target:1e3,reward:60,icon:"🏃‍♂️"},{title:"Quick Runner",description:"Survive for 45 seconds",type:"survive",target:45,reward:40,icon:"⚡"},{title:"Clean Run",description:"Dodge 20 obstacles without getting hit",type:"dodge",target:20,reward:50,icon:"✨"},{title:"Century",description:"Reach a score of 150",type:"score",target:150,reward:60,icon:"💯"}]);this._loadFromStorage(),this._generateIfNeeded()}setStatsManager(e){this._statsManager=e}_getTodayString(){const e=new Date;return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`}_loadFromStorage(){try{const e=localStorage.getItem("toiletRunner_challenges");if(e){const n=JSON.parse(e);this._challenges=n.challenges||[],this._lastGenerated=n.lastGenerated||""}const t=localStorage.getItem("toiletRunner_coins");t&&(this._coinBalance=parseInt(t,10)||0)}catch(e){}}_saveToStorage(){try{const e={challenges:this._challenges,lastGenerated:this._lastGenerated};localStorage.setItem("toiletRunner_challenges",JSON.stringify(e)),localStorage.setItem("toiletRunner_coins",this._coinBalance.toString())}catch(e){}}_generateIfNeeded(){const e=this._getTodayString();this._lastGenerated!==e&&(this._generateDailyChallenges(),this._lastGenerated=e,this._saveToStorage())}_generateDailyChallenges(){const t=[...this._challengeTemplates].sort(()=>Math.random()-.5).slice(0,3),n=new Date,i=new Date(n);i.setDate(i.getDate()+1),i.setHours(0,0,0,0),this._challenges=t.map((r,a)=>Un(sn({},r),{id:`${this._getTodayString()}_${a}`,progress:0,completed:!1,expiresAt:i}))}getChallenges(){return this._generateIfNeeded(),this._challenges}getActiveChallenges(){return this._challenges.filter(e=>!e.completed)}updateProgress(e,t){for(const n of this._challenges)n.completed||n.type!==e||(n.progress=Math.min(n.target,n.progress+t),n.progress>=n.target&&!n.completed&&(n.completed=!0,this.updateCoinBalance(n.reward),this._statsManager&&this._statsManager.incrementChallengesCompleted(),this._saveToStorage()))}getCompletedBonus(){return this._challenges.filter(e=>e.completed).reduce((e,t)=>e+t.reward,0)}resetExpiredChallenges(){const e=new Date;this._challenges=this._challenges.filter(t=>new Date(t.expiresAt)>e),this._saveToStorage()}getTimeRemaining(){const e=new Date,t=new Date(e);t.setDate(t.getDate()+1),t.setHours(0,0,0,0);const n=t.getTime()-e.getTime();return{hours:Math.floor(n/(1e3*60*60)),minutes:Math.floor(n%(1e3*60*60)/(1e3*60)),seconds:Math.floor(n%(1e3*60)/1e3)}}updateCoinBalance(e){this._coinBalance+=e,this._savePending||(this._savePending=!0,requestAnimationFrame(()=>{localStorage.setItem("toiletRunner_coins",this._coinBalance.toString()),this._savePending=!1}))}getCoinBalance(){return this._coinBalance}}const Ji=class Ji{constructor(){E(this,"_upgrades",[]);E(this,"_dailyChallenges",null);E(this,"_state");this._state=this._loadState(),this._initializeUpgrades(),this._syncUpgradeLevels()}setDailyChallenges(e){this._dailyChallenges=e}_initializeUpgrades(){this._upgrades=[{id:"shield",name:"Shield",description:"Start each run with a protective shield",icon:"🛡️",cost:200,maxLevel:1,currentLevel:0,effect:e=>e>0?"Active: 1-hit protection per run":"Not purchased"},{id:"coinMagnet",name:"Coin Magnet",description:"Increase score bonus from near-misses",icon:"🧲",cost:150,maxLevel:3,currentLevel:0,effect:e=>`Near-miss bonus: +${5+e*5} points`},{id:"speedControl",name:"Speed Control",description:"Slow down speed increase over time",icon:"⏱️",cost:100,maxLevel:3,currentLevel:0,effect:e=>`Speed increase reduced by ${e*10}%`},{id:"extraLife",name:"Extra Life",description:"Second chance on first collision each run",icon:"💫",cost:300,maxLevel:1,currentLevel:0,effect:e=>e>0?"Active: Revive once per run":"Not purchased"}]}_syncUpgradeLevels(){for(const e of this._upgrades)this._state.upgrades[e.id]!==void 0&&(e.currentLevel=this._state.upgrades[e.id])}_loadState(){try{const e=localStorage.getItem(Ji.STORAGE_KEY);if(e){const t=JSON.parse(e);if(t&&typeof t=="object"&&"upgrades"in t)return t}}catch(e){console.warn("Failed to load shop state:",e)}return{upgrades:{},totalSpent:0}}_saveState(){try{localStorage.setItem(Ji.STORAGE_KEY,JSON.stringify(this._state))}catch(e){console.warn("Failed to save shop state:",e)}}getUpgrades(){return this._upgrades.map(e=>sn({},e))}getCoinBalance(){var e,t;return(t=(e=this._dailyChallenges)==null?void 0:e.getCoinBalance())!=null?t:0}canPurchase(e){const t=this._upgrades.find(n=>n.id===e);return!t||t.currentLevel>=t.maxLevel?!1:this.getCoinBalance()>=this._calculateCost(t)}purchase(e){const t=this._upgrades.find(r=>r.id===e);if(!t)return{success:!1,message:"Upgrade not found"};if(t.currentLevel>=t.maxLevel)return{success:!1,message:"Already maxed out!"};const n=this._calculateCost(t),i=this.getCoinBalance();return i<n?{success:!1,message:`Need ${n-i} more coins`}:this._dailyChallenges?(this._dailyChallenges.updateCoinBalance(-n),t.currentLevel++,this._state.upgrades[e]=t.currentLevel,this._state.totalSpent+=n,this._saveState(),{success:!0,message:`${t.name} upgraded to level ${t.currentLevel}!`}):{success:!1,message:"System error"}}getUpgradeLevel(e){var t;return(t=this._state.upgrades[e])!=null?t:0}hasShield(){return this.getUpgradeLevel("shield")>0}hasExtraLife(){return this.getUpgradeLevel("extraLife")>0}getCoinMagnetBonus(){return this.getUpgradeLevel("coinMagnet")*5}getSpeedReduction(){return this.getUpgradeLevel("speedControl")*.1}getTotalSpent(){return this._state.totalSpent}resetShop(){this._state={upgrades:{},totalSpent:0},this._initializeUpgrades(),this._saveState()}_calculateCost(e){return e.cost*(e.currentLevel+1)}};E(Ji,"STORAGE_KEY","toiletRunner_shop");let xa=Ji;const qn=class qn{constructor(){E(this,"_stats");E(this,"_sessionStartTime",0);E(this,"_sessionObstaclesDodged",0);this._stats=this._loadOrCreateStats(),this._migrateLegacyData(),this._checkDailyReset()}_loadOrCreateStats(){try{const e=localStorage.getItem(qn.STORAGE_KEY);if(e){const t=JSON.parse(e);if(t.stats)return t.stats}}catch(e){}return this._getDefaultStats()}_getDefaultStats(){return{totalRuns:0,highestScore:0,totalDistance:0,totalObstaclesDodged:0,longestRun:0,totalPlayTime:0,gamesToday:0,lastPlayDate:this._getTodayString(),challengesCompleted:0,currentStreak:0,currentStreakDate:this._getTodayString(),selectedSkin:"classic",unlockedSkins:["classic"]}}_getTodayString(){const e=new Date,t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${i}`}_save(){try{const e={version:qn.CURRENT_VERSION,stats:this._stats,metadata:{lastUpdated:new Date().toISOString(),migratedFrom:["toiletRunner_stats","toiletRunner_gameData"]}};localStorage.setItem(qn.STORAGE_KEY,JSON.stringify(e))}catch(e){}}_migrateLegacyData(){const e=localStorage.getItem("toiletRunner_stats"),t=localStorage.getItem("toiletRunner_gameData");if(!(!e&&!t))try{const n=e?JSON.parse(e):{},i=t?JSON.parse(t):{};this._stats.totalRuns=Math.max(this._stats.totalRuns,n.totalRuns||i.totalRuns||0),this._stats.highestScore=Math.max(this._stats.highestScore,n.highestScore||i.highestScore||0),this._stats.totalDistance=Math.max(this._stats.totalDistance,n.totalDistance||i.totalDistance||0),this._stats.totalObstaclesDodged=Math.max(this._stats.totalObstaclesDodged,n.totalObstaclesDodged||i.totalObstaclesDodged||0),this._stats.longestRun=Math.max(this._stats.longestRun,n.longestRun||i.longestRun||0),this._stats.totalPlayTime=n.totalPlayTime||0,this._stats.gamesToday=n.gamesToday||0,this._stats.challengesCompleted=n.challengesCompleted||0,this._stats.currentStreak=i.currentStreak||0,this._stats.currentStreakDate=i.currentStreakDate||this._getTodayString(),this._stats.selectedSkin=i.selectedSkin||"classic",i.unlockedSkins&&Array.isArray(i.unlockedSkins)?this._stats.unlockedSkins=[...new Set(i.unlockedSkins)]:n.skinsUnlocked&&typeof n.skinsUnlocked=="number"&&(this._stats.unlockedSkins=this._convertSkinsNumberToArray(n.skinsUnlocked)),this._save(),this._backupLegacyData(e,t),localStorage.removeItem("toiletRunner_stats"),localStorage.removeItem("toiletRunner_gameData")}catch(n){}}_backupLegacyData(e,t){const n={};e&&(n.toiletRunner_stats_backup=e),t&&(n.toiletRunner_gameData_backup=t);try{localStorage.setItem("toiletRunner_legacy_backup_"+Date.now(),JSON.stringify(n))}catch(i){}}_convertSkinsNumberToArray(e){const t=["classic","gold","rainbow","neon","camo","fire","ice","shadow"],n=["classic"];for(let i=0;i<Math.min(e-1,t.length-1);i++)n.push(t[i]);return n}_checkDailyReset(){const e=this._getTodayString();this._stats.lastPlayDate!==e&&(this._stats.gamesToday=0,this._stats.lastPlayDate=e,this._save())}startSession(){this._sessionStartTime=Date.now(),this._sessionObstaclesDodged=0}endSession(e){const n=(Date.now()-this._sessionStartTime)/1e3;this._stats.totalRuns++,this._stats.totalDistance+=e.distance,this._stats.totalObstaclesDodged+=e.obstaclesDodged,this._stats.totalPlayTime+=n,this._stats.gamesToday++,e.score>this._stats.highestScore&&(this._stats.highestScore=e.score),e.distance>this._stats.longestRun&&(this._stats.longestRun=e.distance),this._save()}updateHighestScore(e){e>this._stats.highestScore&&(this._stats.highestScore=e,this._save())}incrementChallengesCompleted(){this._stats.challengesCompleted++,this._save()}updateStreak(e){const t=this._getTodayString();e?this._stats.currentStreakDate!==t&&(this._stats.currentStreak++,this._stats.currentStreakDate=t):(this._stats.currentStreak=0,this._stats.currentStreakDate=t),this._save()}selectSkin(e){return this.isSkinUnlocked(e)?(this._stats.selectedSkin=e,this._save(),!0):!1}unlockSkin(e){this._stats.unlockedSkins.includes(e)||(this._stats.unlockedSkins.push(e),this._stats.unlockedSkins.sort(),this._save())}isSkinUnlocked(e){return this._stats.unlockedSkins.includes(e)}getStats(){return sn({},this._stats)}getHighestScore(){return this._stats.highestScore}getCurrentStreak(){return this._stats.currentStreak}getUnlockedSkins(){return[...this._stats.unlockedSkins]}getSelectedSkin(){return this._stats.selectedSkin}getFormattedPlayTime(){const e=Math.floor(this._stats.totalPlayTime/3600),t=Math.floor(this._stats.totalPlayTime%3600/60),n=Math.floor(this._stats.totalPlayTime%60);return e>0?`${e}h ${t}m ${n}s`:t>0?`${t}m ${n}s`:`${n}s`}getAverageScore(){return this._stats.totalRuns===0?0:Math.round(this._stats.totalDistance/this._stats.totalRuns)}getSuccessRate(){return this._stats.totalRuns===0||this._stats.totalDistance===0?0:Math.round(this._stats.longestRun/this._stats.totalDistance*100)}resetAllStats(){this._stats=this._getDefaultStats(),this._save()}resetTodayStats(){this._stats.gamesToday=0,this._stats.lastPlayDate=this._getTodayString(),this._save()}};E(qn,"STORAGE_KEY","toiletRunner_unifiedData"),E(qn,"CURRENT_VERSION",2);let ya=qn;const wt=class wt{constructor(){E(this,"_sessionId","");E(this,"_sessionStartTime",0);E(this,"_events",[]);E(this,"_isInitialized",!1);E(this,"_gameVersion","1.6.0");this._loadPersistedData()}_loadPersistedData(){try{const e=localStorage.getItem(wt.STORAGE_KEY);if(e){const t=JSON.parse(e);t.events&&Array.isArray(t.events)&&(this._events=t.events.slice(-wt.MAX_EVENTS))}}catch(e){console.warn("Failed to load analytics data:",e)}}_persistData(){try{localStorage.setItem(wt.STORAGE_KEY,JSON.stringify({events:this._events,lastUpdated:Date.now()}))}catch(e){console.warn("Failed to persist analytics data:",e)}}_generateSessionId(){return`${Date.now()}-${Math.random().toString(36).substring(2,11)}`}initialize(e){this._isInitialized||(this._gameVersion=e,this._isInitialized=!0,this.trackEvent("app_start",{version:this._gameVersion,platform:this._detectPlatform(),screen_width:window.innerWidth,screen_height:window.innerHeight,device_pixel_ratio:window.devicePixelRatio}))}_detectPlatform(){const e=navigator.userAgent.toLowerCase();return/mobile|android|iphone|ipad|ipod/.test(e)?/android/.test(e)?"android":"ios":"desktop"}startSession(){this._sessionId=this._generateSessionId(),this._sessionStartTime=Date.now();const e={sessionId:this._sessionId,startTime:this._sessionStartTime};try{localStorage.setItem(wt.SESSION_KEY,JSON.stringify(e))}catch(t){console.warn("Failed to save session:",t)}this.trackEvent("session_start",{session_id:this._sessionId})}endSession(e,t){if(!this._sessionId)return;const n=Math.floor((Date.now()-this._sessionStartTime)/1e3);this.trackEvent("session_end",{session_id:this._sessionId,duration_seconds:n,final_score:e!=null?e:0,distance:t!=null?t:0});try{localStorage.removeItem(wt.SESSION_KEY)}catch(i){}this._sessionId="",this._sessionStartTime=0}trackGameStart(e){this.trackEvent("game_start",{has_shield:e.shield,has_extra_life:e.extraLife,coin_magnet_level:e.coinMagnetLevel,speed_control_level:e.speedControlLevel})}trackGameOver(e,t,n,i){this.trackEvent("game_over",{score:e,distance:t,survival_time_seconds:Math.floor(n),obstacles_dodged:i,death_lane:"unknown"})}trackDeath(e,t,n){this.trackEvent("player_death",{obstacle_type:e,lane:t,score_at_death:n})}trackShieldUsed(e){this.trackEvent("shield_used",{score_at_use:e})}trackExtraLifeUsed(e){this.trackEvent("extra_life_used",{score_at_use:e})}trackUpgradePurchase(e,t,n,i){this.trackEvent("upgrade_purchase",{upgrade_id:e,cost:t,new_level:n,coin_balance_after:i})}trackShopOpened(e){this.trackEvent("shop_opened",{coin_balance:e})}trackChallengeCompleted(e,t){this.trackEvent("challenge_completed",{challenge_type:e,coins_earned:t})}trackSkinUnlocked(e,t){this.trackEvent("skin_unlocked",{skin_id:e,unlock_method:t})}trackSkinSelected(e){this.trackEvent("skin_selected",{skin_id:e})}trackMilestoneReached(e,t){this.trackEvent("milestone_reached",{milestone:e,score_at_milestone:t})}trackNearMiss(e,t){this.trackEvent("near_miss",{score:e,bonus_earned:t})}trackStreakBroken(e,t){this.trackEvent("streak_broken",{streak:e,score:t})}trackEvent(e,t={}){const n={name:e,timestamp:Date.now(),properties:Un(sn({},t),{session_id:this._sessionId||"none",game_version:this._gameVersion})};this._events.push(n),this._events.length>wt.MAX_EVENTS&&(this._events=this._events.slice(-500)),this._persistData()}getEvents(e){const t=e!=null?e:50;return this._events.slice(-t)}getEventCounts(){const e={};for(const t of this._events)e[t.name]=(e[t.name]||0)+1;return e}getSessionStats(){const e=this._events.filter(i=>i.name==="session_end");if(e.length===0)return{totalSessions:0,avgDuration:0,avgScore:0};const t=e.reduce((i,r)=>i+(r.properties.duration_seconds||0),0),n=e.reduce((i,r)=>i+(r.properties.final_score||0),0);return{totalSessions:e.length,avgDuration:Math.floor(t/e.length),avgScore:Math.floor(n/e.length)}}clearData(){this._events=[];try{localStorage.removeItem(wt.STORAGE_KEY),localStorage.removeItem(wt.SESSION_KEY)}catch(e){}}exportData(){return JSON.stringify({exportedAt:new Date().toISOString(),gameVersion:this._gameVersion,events:this._events,stats:this.getSessionStats(),eventCounts:this.getEventCounts()},null,2)}};E(wt,"STORAGE_KEY","toiletRunner_analytics"),E(wt,"SESSION_KEY","toiletRunner_session"),E(wt,"MAX_EVENTS",500),E(wt,"BATCH_SIZE",20);let Ea=wt;class yg{constructor(e){E(this,"_camera");E(this,"_intensity",0);E(this,"_duration",0);E(this,"_elapsed",0);E(this,"_isShaking",!1);E(this,"_originalPosition");E(this,"_currentOffset");E(this,"_targetOffset");this._camera=e,this._originalPosition=new L,this._currentOffset=new L,this._targetOffset=new L,e.getWorldPosition(this._originalPosition)}shake(e,t){this._isShaking?(this._intensity=Math.max(this._intensity,e),this._duration=Math.max(this._duration,t),this._elapsed=0):(this._intensity=e,this._duration=t,this._elapsed=0,this._isShaking=!0,this._camera.getWorldPosition(this._originalPosition))}update(e){if(!this._isShaking){this._currentOffset.lerp(new L(0,0,0),e*10),this._applyOffset();return}this._elapsed+=e;const t=this._elapsed/this._duration;if(t>=1){this._isShaking=!1,this._currentOffset.set(0,0,0),this._applyOffset();return}const n=this._intensity*Math.exp(-t*3),i=this._elapsed*15,r=(Math.random()-.5)*2,a=(Math.random()-.5)*2,o=Math.sin(i*1.7)*.7,l=Math.cos(i*2.3)*.7;this._targetOffset.x=(r+o)*n,this._targetOffset.y=(a+l)*n,this._targetOffset.z=0,this._currentOffset.lerp(this._targetOffset,e*20),this._applyOffset()}_applyOffset(){this._camera.position.copy(this._originalPosition).add(this._currentOffset)}get isShaking(){return this._isShaking}get currentIntensity(){if(!this._isShaking)return 0;const e=this._elapsed/this._duration;return this._intensity*Math.exp(-e*3)}reset(){this._isShaking=!1,this._intensity=0,this._duration=0,this._elapsed=0,this._currentOffset.set(0,0,0),this._targetOffset.set(0,0,0),this._camera.position.copy(this._originalPosition)}syncWithBasePosition(e){this._originalPosition.copy(e)}updateOriginalPosition(){this._isShaking||this._camera.getWorldPosition(this._originalPosition)}}class Eg{constructor(){E(this,"_displayedScore",0);E(this,"_targetScore",0);E(this,"_lastMilestone",0);E(this,"_scoreElement",null);E(this,"_isAnimating",!1);this._scoreElement=document.getElementById("score-display"),this._scoreElement||console.warn("[ScoreAnimator] Score display element not found")}updateScore(e){this._targetScore=e;const t=Math.floor(e/100);t>this._lastMilestone&&e>0&&(this._triggerPulse(),this._lastMilestone=t)}update(e){if(Math.abs(this._targetScore-this._displayedScore)<.1)this._displayedScore=this._targetScore,this._isAnimating=!1;else{this._isAnimating=!0;const t=1-Math.pow(.9,e*60),n=this._targetScore-this._displayedScore;this._displayedScore+=n*t}this._updateUI(this._displayedScore)}reset(){this._displayedScore=0,this._targetScore=0,this._lastMilestone=0,this._isAnimating=!1,this._updateUI(0)}getDisplayedScore(){return this._displayedScore}getTargetScore(){return this._targetScore}isAnimating(){return this._isAnimating}_updateUI(e){this._scoreElement&&(this._scoreElement.textContent=Math.floor(e).toString())}_triggerPulse(){this._scoreElement&&(this._scoreElement.classList.remove("pulse"),this._scoreElement.offsetWidth,this._scoreElement.classList.add("pulse"),setTimeout(()=>{this._scoreElement&&this._scoreElement.classList.remove("pulse")},300))}}class Tg{constructor(){E(this,"_scoreElement",null);E(this,"_scoreAnimator",null);this._scoreElement=document.getElementById("score-display"),this._scoreElement?this._applyEnhancedStyling():console.warn("[HUD] Score display element not found")}setScoreAnimator(e){this._scoreAnimator=e}updateScore(e){this._scoreAnimator?this._scoreAnimator.updateScore(e):this._updateDirectScore(e)}update(e){this._scoreAnimator&&this._scoreAnimator.update(e)}reset(){this._scoreAnimator?this._scoreAnimator.reset():this._updateDirectScore(0)}_applyEnhancedStyling(){this._scoreElement&&(this._scoreElement.style.background="rgba(26, 26, 46, 0.85)",this._scoreElement.style.backdropFilter="blur(8px)",this._scoreElement.style.borderRadius="12px",this._scoreElement.style.padding="12px 20px",this._scoreElement.style.boxShadow="0 4px 12px rgba(0, 0, 0, 0.3)",this._scoreElement.style.fontSize="28px",this._scoreElement.style.fontWeight="700",this._scoreElement.style.fontFamily="Poppins, sans-serif",this._scoreElement.style.color="#FFFFFF",this._scoreElement.style.letterSpacing="-0.5px")}_updateDirectScore(e){this._scoreElement&&(this._scoreElement.textContent=Math.floor(e).toString())}getScoreElement(){return this._scoreElement}setVisible(e){this._scoreElement&&(this._scoreElement.style.display=e?"block":"none")}triggerFlash(){this._scoreElement&&(this._scoreElement.classList.remove("score-flash"),this._scoreElement.offsetWidth,this._scoreElement.classList.add("score-flash"),setTimeout(()=>{this._scoreElement&&this._scoreElement.classList.remove("score-flash")},500))}triggerPulse(){this._scoreElement&&(this._scoreElement.classList.remove("pulse"),this._scoreElement.offsetWidth,this._scoreElement.classList.add("pulse"),setTimeout(()=>{this._scoreElement&&this._scoreElement.classList.remove("pulse")},300))}}class bg{constructor(e,t){E(this,"positions",[]);E(this,"maxPoints",15);E(this,"trailMesh");E(this,"geometry");E(this,"material");E(this,"tempVector",new L);E(this,"_isLaneChanging",!1);this.player=e,this.scene=t,this.geometry=new bt,this.material=new Jl({color:16777215,transparent:!0,opacity:.5}),this.trailMesh=new wm(this.geometry,this.material),this.trailMesh.visible=!1,t.add(this.trailMesh)}update(e,t,n=!1){if(this._isLaneChanging=n,n){this.positions=[e.clone()],this.trailMesh.visible=!1;return}this.positions.unshift(e.clone());const i=Math.min(t/15,1),r=Math.floor(3+(this.maxPoints-3)*i);if(this.positions=this.positions.slice(0,r),this.positions.length>=2){this.trailMesh.visible=!0;const a=new Float32Array(this.positions.length*3);this.positions.forEach((l,c)=>{a[c*3]=l.x,a[c*3+1]=l.y-.1,a[c*3+2]=l.z}),this.trailMesh.geometry.setAttribute("position",new Et(a,3)),this.material.opacity=.3+.4*i;const o=new Float32Array(this.positions.length*3);for(let l=0;l<this.positions.length;l++)(1-l/this.positions.length)*this.material.opacity,o[l*3]=1,o[l*3+1]=1,o[l*3+2]=1;this.trailMesh.geometry.setAttribute("color",new Et(o,3)),this.material.vertexColors=!0}else this.trailMesh.visible=!1}reset(){this.positions=[],this.trailMesh.visible=!1,this.trailMesh.geometry.setAttribute("position",new Et(new Float32Array(0),3)),this.trailMesh.geometry.setAttribute("color",new Et(new Float32Array(0),3))}dispose(){this.geometry.dispose(),this.material.dispose(),this.scene.remove(this.trailMesh)}isVisible(){return this.trailMesh.visible}setVisibility(e){this.trailMesh.visible=e}}const Vi=20,dl=15,Ur=40,Ag=10;class wg{constructor(e){E(this,"_mesh");E(this,"_positions");E(this,"_tempMatrix");E(this,"_material");this._tempMatrix=new Ke;const t=new en(.04,3);this._material=new xn({color:16777215,transparent:!0,opacity:0,depthWrite:!1,side:Ct}),this._mesh=new Ws(t,this._material,Vi),this._mesh.frustumCulled=!1,e.add(this._mesh),this._positions=new Float32Array(Vi*3);for(let n=0;n<Vi;n++)this._positions[n*3]=(Math.random()-.5)*12,this._positions[n*3+1]=Math.random()*4+.5,this._positions[n*3+2]=-Math.random()*Ur,this._updateInstance(n);this._mesh.instanceMatrix.needsUpdate=!0}_updateInstance(e){const t=this._positions[e*3],n=this._positions[e*3+1],i=this._positions[e*3+2];this._tempMatrix.makeRotationX(Math.PI/2),this._tempMatrix.setPosition(t,n,i),this._mesh.setMatrixAt(e,this._tempMatrix)}update(e,t){if(t<=dl){this._material.opacity=0;return}const n=Math.min((t-dl)/10,1);this._material.opacity=n*.35;const i=t*e*1.5;for(let r=0;r<Vi;r++)this._positions[r*3+2]+=i,this._positions[r*3+2]>Ag&&(this._positions[r*3]=(Math.random()-.5)*12,this._positions[r*3+1]=Math.random()*4+.5,this._positions[r*3+2]=-Ur+Math.random()*5),this._updateInstance(r);this._mesh.instanceMatrix.needsUpdate=!0}reset(){this._material.opacity=0;for(let e=0;e<Vi;e++)this._positions[e*3]=(Math.random()-.5)*12,this._positions[e*3+1]=Math.random()*4+.5,this._positions[e*3+2]=-Math.random()*Ur,this._updateInstance(e);this._mesh.instanceMatrix.needsUpdate=!0}dispose(){this._mesh.geometry.dispose(),this._material.dispose()}}class Cg{constructor(){E(this,"_button",null);E(this,"_deferredPrompt",null);window.matchMedia("(display-mode: standalone)").matches||(window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),this._deferredPrompt=e,this.showButton()}),window.addEventListener("appinstalled",()=>{this.hideButton(),this._deferredPrompt=null}))}showButton(){this._button||(this._button=document.createElement("button"),this._button.id="install-button",this._button.className="install-button",this._button.innerHTML='<span aria-hidden="true">&#128229;</span> Install App',this._button.setAttribute("aria-label","Install Toilet Runner app"),this._button.addEventListener("click",()=>this.handleInstall()),document.body.appendChild(this._button),requestAnimationFrame(()=>{this._button&&this._button.classList.add("install-button--visible")}))}hideButton(){this._button&&(this._button.classList.remove("install-button--visible"),this._button.addEventListener("transitionend",()=>{var e;(e=this._button)==null||e.remove(),this._button=null},{once:!0}))}handleInstall(){return pt(this,null,function*(){if(!this._deferredPrompt)return;yield this._deferredPrompt.prompt();const{outcome:e}=yield this._deferredPrompt.userChoice;e==="accepted"&&this.hideButton(),this._deferredPrompt=null})}}const fl=10,pl=.5,ml=10,gl=100,Rg=[100,250,500,1e3,2e3,5e3],Pg={100:"💩 Off to a messy start!",250:"🧻 Running low on TP!",500:"🚽 Almost there!",1e3:"👑 ROYAL FLUSH!",2e3:"🏆 CHAMPION POOPER!",5e3:"🌟 LEGENDARY FLUSH!"},_l=2.5,vl=.5,Lg=10,Sl=5,Dg=5,Ig=2;class Ug{constructor(){E(this,"sceneManager");E(this,"gameLoop");E(this,"performanceConfig");E(this,"runner");E(this,"track");E(this,"obstacles");E(this,"collision");E(this,"audioManager");E(this,"environment");E(this,"cameraManager");E(this,"input");E(this,"ui");E(this,"audioControls");E(this,"leaderboard");E(this,"characterCustomization");E(this,"dailyChallenges");E(this,"shopManager");E(this,"statsManager");E(this,"analyticsManager");E(this,"cameraShake");E(this,"scoreAnimator");E(this,"hud");E(this,"trailRenderer");E(this,"currentGameState",Xe.MENU);E(this,"score",0);E(this,"survivalTime",0);E(this,"_pendingHighScore",{score:0,submitted:!1});E(this,"lastDodgedCount",0);E(this,"currentStreak",0);E(this,"challengesNeedUpdate",!1);E(this,"passedObstacles",new Set);E(this,"_isDying",!1);E(this,"_deathTimer",0);E(this,"_deathDuration",1);E(this,"reachedMilestones",new Set);E(this,"_shieldActive",!1);E(this,"_extraLifeAvailable",!1);E(this,"postProcessing");E(this,"dustParticles");E(this,"sparkleParticles");E(this,"impactParticles");E(this,"coinParticles");E(this,"speedLines");E(this,"dustEmissionTimer",0);E(this,"_dodgePosition",new L);this.initialize()}initialize(){return pt(this,null,function*(){try{this.sceneManager=new Um,this.gameLoop=new Fm,this.performanceConfig=yield Ki.initialize(),this.setupGameLogic(),this.setupUIAndInput(),this.setupVisualEffects(),this.setupResizeListener(),this.ui.showLoadingScreen(),yield this.performLoading(),this.ui.fadeLoadingScreen(),yield new Promise(t=>setTimeout(t,800)),this.ui.hideLoadingScreen();const e=document.getElementById("app-version");e&&(e.textContent="v1.9.0"),this.ui.setGameState(this.currentGameState),this.ui.setDailyChallenges(this.dailyChallenges),this.ui.setStatsManager(this.statsManager),this.updateSkinDisplay(),this.ui.updateChallengesDisplay(),this.ui.updateStatsFromManager(),this.gameLoop.registerSystem(this.update.bind(this)),this.gameLoop.start()}catch(e){this.showFatalError(e)}})}showFatalError(e){const t=e instanceof Error?e.message:"Unknown error",n=t.includes("WebGL")||t.includes("canvas")||t.includes("renderer"),i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:#1a1a2e;display:flex;align-items:center;justify-content:center;z-index:10000;padding:20px;";const r=document.createElement("div");r.style.cssText="text-align:center;color:#fff;font-family:Poppins,sans-serif;max-width:400px;",r.innerHTML=n?`<h2 style="color:#ff6b6b;">WebGL Not Supported</h2>
         <p style="color:#ccc;margin-top:12px;">Your browser or device doesn't support WebGL, which is required to run this game.</p>
         <p style="color:#999;margin-top:8px;">Try using a modern browser like Chrome, Firefox, or Safari.</p>`:`<h2 style="color:#ff6b6b;">Failed to Load Game</h2>
         <p style="color:#ccc;margin-top:12px;">Something went wrong while starting the game.</p>
         <p style="color:#999;margin-top:8px;">Try refreshing the page. If the problem persists, try a different browser.</p>`,i.appendChild(r),document.body.appendChild(i)}setupResizeListener(){let e=null;const t=()=>{e&&window.clearTimeout(e),e=window.setTimeout(()=>{this.sceneManager.resize(window.innerWidth,window.innerHeight),e=null},100)};window.addEventListener("resize",t),window.addEventListener("orientationchange",t)}performLoading(){return pt(this,null,function*(){const t=Date.now(),n=this.ui.getLoadingProgressBar();for(;Date.now()-t<1500;){const i=Date.now()-t,r=Math.min(i/1500*100,100);n&&(n.style.width=r+"%"),yield new Promise(a=>setTimeout(a,50))}n&&(n.style.width="100%")})}setupVisualEffects(){const e=this.sceneManager.getScene(),t=this.sceneManager.getCamera(),n=this.sceneManager.getRenderer();Ks.setQuality(this.performanceConfig.tier);const i=this.performanceConfig.particles;this.dustParticles=new Us(e,Un(sn({},Fs[qi.DUST]),{maxParticles:Math.min(50,i.collision)})),this.sparkleParticles=new Us(e,Un(sn({},Fs[qi.SPARKLE]),{maxParticles:Math.min(30,i.effects||15)})),this.impactParticles=new Us(e,Un(sn({},Fs[qi.IMPACT]),{maxParticles:i.collision})),this.coinParticles=new Us(e,Un(sn({},Fs[qi.COIN]),{maxParticles:Math.min(40,i.effects||15)})),this.trailRenderer=new bg(this.runner.getMesh(),e),this.speedLines=new wg(e),this.postProcessing=new vg(n,e,t),this.setupPostProcessing()}setupPostProcessing(){this.performanceConfig.postProcessing&&(this.postProcessing.initialize({enabled:!0,bloom:{strength:.4,threshold:.9,radius:.3},fxaa:!0,vignette:{offset:.5,darkness:.3}}),this.sceneManager.setPostProcessing(this.postProcessing))}setupGameLogic(){const e=this.sceneManager.getScene();this.statsManager=new ya,this.analyticsManager=new Ea,this.analyticsManager.initialize("1.6.0"),this.scoreAnimator=new Eg,this.hud=new Tg,this.hud.setScoreAnimator(this.scoreAnimator),this.dailyChallenges=new xg,this.dailyChallenges.setStatsManager(this.statsManager),this.shopManager=new xa,this.shopManager.setDailyChallenges(this.dailyChallenges),this.characterCustomization=new Mg,this.characterCustomization.setStatsManager(this.statsManager),this.runner=new Vm(e,this.characterCustomization,this.statsManager.getSelectedSkin()),this.track=new Wm(e),this.obstacles=new $m(e,this.track,this.performanceConfig.emojiFaces),this.collision=new Zm,this.audioManager=new jm,this.environment=new eg(e),this.cameraManager=new sg(this.sceneManager.getCamera()),this.cameraShake=new yg(this.sceneManager.getCamera()),this.leaderboard=new Ma;const t=this.environment.getTileTexture();Ks.getTrackMaterial(t),this.track.applyTileTexture(t)}setupUIAndInput(){this.input=new og(this.handleLaneChange.bind(this),this.handleJump.bind(this),this.togglePause.bind(this)),this.input.setup(),this.ui=new lg,this.ui.setOnPlayCallback(this.startGame.bind(this)),this.ui.setOnRestartCallback(this.restartGame.bind(this)),this.ui.setOnPauseCallback(this.handlePause.bind(this)),this.ui.setOnResumeCallback(this.handleResume.bind(this)),this.ui.setOnViewLeaderboardCallback(this.showLeaderboard.bind(this)),this.ui.setOnBackToGameOverCallback(this.backToGameOver.bind(this)),this.ui.setOnBackToMenuCallback(this.backToMenu.bind(this)),this.ui.setOnSkinsCallback(this.showSkinsScreen.bind(this)),this.ui.setOnChallengesCallback(this.showChallengesScreen.bind(this)),this.ui.setOnStatsCallback(this.showStatsScreen.bind(this)),this.ui.setOnShopCallback(this.showShopScreen.bind(this)),this.ui.setOnSelectSkinCallback(e=>{this.statsManager.selectSkin(e)&&(this.runner.updateSkin(e),this.updateSkinDisplay())}),this.ui.setOnPurchaseUpgradeCallback(e=>{var n,i;this.shopManager.purchase(e).success&&(this.updateShopDisplay(),this.analyticsManager.trackUpgradePurchase(e,(i=(n=this.shopManager.getUpgrades().find(r=>r.id===e))==null?void 0:n.cost)!=null?i:0,this.shopManager.getUpgradeLevel(e),this.shopManager.getCoinBalance()))}),this.ui.setOnSubmitNameCallback(e=>{this.handleNameSubmit(e)}),this.audioControls=new cg(this.audioManager)}update(e){if(Ki.updateFPS(e),this.currentGameState===Xe.PLAYING){if(this._isDying){if(this._deathTimer+=e,this._deathTimer>=this._deathDuration){this._isDying=!1,this.endGame();return}const g=e*.15,_=fl+Math.floor(this.score/10)*pl;this.runner.update(g),this.track.update(g,_),this.dustParticles.update(g),this.sparkleParticles.update(g),this.impactParticles.update(g),this.coinParticles.update(g),this.cameraShake.update(g),this.sceneManager.render();return}const t=Math.floor(this.survivalTime)*pl,n=this.shopManager.getSpeedReduction(),i=fl+t*(1-n);this.survivalTime+=e,this.dailyChallenges.updateProgress("survive",e);const r=this.obstacles.getDodgedCount(),a=r-this.lastDodgedCount;a>0&&(this.dailyChallenges.updateProgress("dodge",a),this.lastDodgedCount=r),this.runner.setSpeed(i),this.runner.update(e),this.track.update(e,i),this.obstacles.update(e,i,this.score),this.environment.update(e,i);const o=this.obstacles.getActiveObstacles(),l=this.runner.getPosition();for(const g of o){const _=`${g.x}_${g.z}`;if(g.z>l.z+2&&!this.passedObstacles.has(_)){this.passedObstacles.add(_);const m=Math.abs(g.x-l.x);if(m<_l&&m>vl){const A=this.shopManager.getCoinMagnetBonus(),T=Lg+A,x=Dg+Math.floor(A/2);this.score+=T,this.dailyChallenges.updateCoinBalance(x),this.ui.showScorePopup(`+${T} Score +${x} Coins!`,!0),this.runner.triggerSuccessBounce()}else if(m<=vl){const A=this.shopManager.getCoinMagnetBonus(),T=Ig+Math.floor(A/5);this.score+=Sl,this.dailyChallenges.updateCoinBalance(T),this.ui.showScorePopup(`+${Sl} Score +${T} Coins!`,!1)}m<=_l&&(this._dodgePosition.set(g.x,l.y,l.z+1),this.sparkleParticles.emitSparkle(this._dodgePosition),this.coinParticles.emitCoin(this._dodgePosition),this.cameraShake.shake(.03,.1))}}const c=[];this.passedObstacles.forEach(g=>{const[_,m]=g.split("_").map(Number);m>l.z+10&&c.push(g)});for(const g of c)this.passedObstacles.delete(g);const u=this.runner.getPosition();if(this.cameraManager.updateCameraFollow(u,e),this.cameraShake.syncWithBasePosition(this.cameraManager.getCurrentPosition()),this.cameraShake.update(e),this.dustEmissionTimer+=e,this.dustEmissionTimer>.1){const g=this.runner.getPosition();g.z+=.3,g.y-=.2,this.dustParticles.emitDust(g),this.dustEmissionTimer=0}this.dustParticles.update(e),this.sparkleParticles.update(e),this.impactParticles.update(e),this.coinParticles.update(e),this.trailRenderer.update(u,i,this.runner.isChangingLanes()),this.speedLines.update(e,i);const h=this.collision.checkPlayerVsObstacles(this.runner.getMesh(),this.obstacles,this.runner.getYPosition(),this.runner.isJumping());!this._isDying&&h&&(this._shieldActive?(this._shieldActive=!1,this.updateUpgradeHud(),this.handleShieldHit(h)):this._extraLifeAvailable?(this._extraLifeAvailable=!1,this.updateUpgradeHud(),this.handleExtraLife(h)):(this.handleCollision(h),this.runner.startDeathTumble(),this._isDying=!0,this._deathTimer=0,this.showDeathFlash()));const f=Math.floor(this.score);this.score+=ml*e;const p=Math.floor(this.score);p>f&&(this.dailyChallenges.updateProgress("score",p-f),this.challengesNeedUpdate=!0),this.dailyChallenges.updateProgress("distance",ml*e),this.challengesNeedUpdate=!0,this.hud.updateScore(this.score),this.hud.update(e),Math.floor(p/gl)>Math.floor(f/gl)&&(this.audioManager.playScoreMilestone(p),this.ui.triggerScoreFlash(),this.hud.triggerPulse(),this.cameraShake.shake(.08,.2),this.handleScoreMilestone());for(const g of Rg)if(p>=g&&!this.reachedMilestones.has(g)){this.reachedMilestones.add(g);const _=Pg[g];_&&this.ui.showMilestonePopup(_),this.analyticsManager.trackMilestoneReached(g,Math.floor(p))}}else if(this.currentGameState===Xe.PAUSED){this.sceneManager.render();return}this.challengesNeedUpdate&&(this.ui.updateChallengesDisplay(),this.challengesNeedUpdate=!1),this.sceneManager.render()}handleCollision(e){this._handleHitEffects(e,{shakeIntensity:.3,shakeDuration:.4});const t=new L(e.x,e.y,e.z);for(let n=0;n<8;n++)this.impactParticles.emitImpact(t)}handleShieldHit(e){this._handleHitEffects(e,{shakeIntensity:.15,shakeDuration:.2});const t=new L(e.x,e.y,e.z);this.sparkleParticles.emitSparkle(t),this.ui.showScorePopup("SHIELD!",!0),this.analyticsManager.trackShieldUsed(Math.floor(this.score))}handleExtraLife(e){this._handleHitEffects(e,{shakeIntensity:.2,shakeDuration:.3});const t=new L(e.x,e.y,e.z);for(let n=0;n<5;n++)this.sparkleParticles.emitSparkle(t);this.ui.showScorePopup("REVIVED!",!0),this.analyticsManager.trackExtraLifeUsed(Math.floor(this.score))}_handleHitEffects(e,t){this.audioManager.playCollision(),this.cameraShake.shake(t.shakeIntensity,t.shakeDuration),this.obstacles.hideObstacle(e.lane,e.z)}showDeathFlash(){const e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:white;opacity:0.6;z-index:9000;pointer-events:none;transition:opacity 0.3s ease-out;",document.body.appendChild(e),requestAnimationFrame(()=>{e.style.opacity="0"}),setTimeout(()=>e.remove(),400)}handleScoreMilestone(){const t=this.runner.getPosition().clone();t.y+=1,this.sparkleParticles.emitSparkle(t)}handleResize(){this.sceneManager.resize(window.innerWidth,window.innerHeight)}startGame(){this.ui.hideAllScreens(),this.currentGameState=Xe.PLAYING,this.ui.setGameState(this.currentGameState),this.reset(),this._shieldActive=this.shopManager.hasShield(),this._extraLifeAvailable=this.shopManager.hasExtraLife(),this.updateUpgradeHud(),this.analyticsManager.trackGameStart({shield:this._shieldActive,extraLife:this._extraLifeAvailable,coinMagnetLevel:this.shopManager.getUpgradeLevel("coinMagnet"),speedControlLevel:this.shopManager.getUpgradeLevel("speedControl")}),this.audioManager.playStartGame(),this.statsManager.startSession()}updateUpgradeHud(){this.ui.updateUpgradeHud({shield:this._shieldActive,extraLife:this._extraLifeAvailable,coinMagnetLevel:this.shopManager.getUpgradeLevel("coinMagnet"),speedControlLevel:this.shopManager.getUpgradeLevel("speedControl")})}endGame(){this.currentGameState=Xe.GAMEOVER,this.ui.setGameState(this.currentGameState),this.audioManager.playGameOver(),this.cameraShake.shake(.25,.5);const e=this.leaderboard.isHighScore(this.score);this._pendingHighScore={score:0,submitted:!1},e?this._pendingHighScore={score:this.score,submitted:!1}:this.leaderboard.addScore(this.score,"Anonymous");const t=this.score;this.statsManager.endSession({score:this.score,distance:t,obstaclesDodged:this.obstacles.getDodgedCount(),duration:this.survivalTime}),this.analyticsManager.trackGameOver(Math.floor(this.score),Math.floor(t),this.survivalTime,this.obstacles.getDodgedCount()),this.statsManager.updateHighestScore(Math.floor(this.score));const{newlyUnlocked:n}=this.characterCustomization.updateStats(this.statsManager.getHighestScore());n.forEach(c=>this.statsManager.unlockSkin(c)),this.survivalTime>=30||this.score>=100?(this.statsManager.updateStreak(!0),this.dailyChallenges.updateProgress("streak",1),this.ui.showStreakNotification(this.statsManager.getCurrentStreak())):this.statsManager.updateStreak(!1);const r=this.leaderboard.getTopScores();this.ui.updateLeaderboardFull(r),this.ui.updateStatsFromManager(),this.ui.updateChallengesDisplay();const a=this.statsManager.getHighestScore(),o=Math.floor(this.score)>=a&&this.score>0,l=this.getEncouragingMessage(this.score,a,this.survivalTime);this.ui.showGameOverScreen(this.score,l,o,e)}handleNameSubmit(e){this.leaderboard.addScore(this._pendingHighScore.score,e),this._pendingHighScore.submitted=!0;const t=this.leaderboard.getTopScores();this.ui.updateLeaderboardFull(t)}getEncouragingMessage(e,t,n){return e>=t&&e>0?"New Personal Best!":e>t*.9&&t>0?"So close to your record!":n>60?"Great endurance!":e>200?"Impressive run!":e>50?"Nice dodging!":"Keep practicing!"}showLeaderboard(){this.currentGameState=Xe.LEADERBOARD,this.ui.setGameState(this.currentGameState)}backToGameOver(){this.currentGameState=Xe.GAMEOVER,this.ui.showGameOverScreen(this.score)}backToMenu(){this.currentGameState=Xe.MENU,this.ui.setGameState(this.currentGameState),this.ui.showStartScreen(),this.ui.updateSkinDisplay(),this.ui.updateChallengesDisplay(),this.ui.updateStatsFromManager();const{newlyUnlocked:e}=this.characterCustomization.updateStats(this.statsManager.getHighestScore());e.forEach(t=>this.statsManager.unlockSkin(t))}showSkinsScreen(){this.currentGameState=Xe.SKINS,this.ui.setGameState(this.currentGameState),this.updateSkinDisplay()}showChallengesScreen(){this.currentGameState=Xe.CHALLENGES,this.ui.setGameState(this.currentGameState)}showStatsScreen(){this.currentGameState=Xe.STATS,this.ui.setGameState(this.currentGameState)}showShopScreen(){this.currentGameState=Xe.SHOP,this.ui.setGameState(this.currentGameState),this.updateShopDisplay(),this.analyticsManager.trackShopOpened(this.shopManager.getCoinBalance())}updateShopDisplay(){const e=this.shopManager.getUpgrades(),t=this.shopManager.getCoinBalance();this.ui.updateShopDisplay(e,t)}restartGame(){if(this._pendingHighScore.score>0&&!this._pendingHighScore.submitted){this.leaderboard.addScore(this._pendingHighScore.score,"Anonymous"),this._pendingHighScore={score:0,submitted:!1};const e=this.leaderboard.getTopScores();this.ui.updateLeaderboardFull(e)}this.startGame()}reset(){this.runner.reset(),this.track.reset(),this.obstacles.reset(),this.collision.reset(),this.environment.reset(),this.cameraManager.reset(),this.cameraShake.reset(),this.trailRenderer.reset(),this.speedLines.reset(),this.dustParticles.reset(),this.sparkleParticles.reset(),this.impactParticles.reset(),this.coinParticles.reset(),this.score=0,this.survivalTime=0,this.lastDodgedCount=0,this.currentStreak=0,this.challengesNeedUpdate=!1,this.dustEmissionTimer=0,this._isDying=!1,this._deathTimer=0,this.passedObstacles.clear(),this.reachedMilestones.clear(),this.audioManager.setLastScoreMilestone(0),this.scoreAnimator.reset(),this.hud.reset()}handleLaneChange(e){if(this.currentGameState===Xe.PLAYING&&!this._isDying){e===-1?this.runner.moveLeft():this.runner.moveRight(),this.audioManager.playLaneChange(),this.triggerHapticFeedback();const t=this.runner.getPosition();t.z+=.5,this.dustParticles.emitDust(t)}}handleJump(){this.currentGameState===Xe.PLAYING&&!this._isDying&&(this.runner.jump(),this.audioManager.playLaneChange(),this.triggerHapticFeedback())}togglePause(){this.currentGameState===Xe.PLAYING?(this.currentGameState=Xe.PAUSED,this.ui.setGameState(this.currentGameState)):this.currentGameState===Xe.PAUSED&&(this.currentGameState=Xe.PLAYING,this.ui.setGameState(this.currentGameState))}handlePause(){this.togglePause(),this.audioManager.playPause()}triggerHapticFeedback(){"vibrate"in navigator&&navigator.maxTouchPoints>0&&navigator.vibrate(15)}handleResume(){this.togglePause(),this.audioManager.playResume()}updateSkinDisplay(){const e=this.characterCustomization.getSkins(),t=this.statsManager.getSelectedSkin(),n=this.statsManager.getUnlockedSkins(),i=this.statsManager.getHighestScore();this.ui.updateSkinGrid(e,t,n,i)}triggerCoinPickup(e){const n=(e||this.runner.getPosition()).clone();n.y+=.5,this.coinParticles.emitCoin(n),this.sparkleParticles.emitSparkle(n)}triggerScoreCelebration(e){const t=e||this.runner.getPosition();t.y+=1,this.sparkleParticles.emitSparkle(t)}}document.addEventListener("DOMContentLoaded",()=>pt(null,null,function*(){new Ug,new Cg,"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").then(s=>console.log("Service Worker registered:",s.scope)).catch(s=>console.error("Service Worker registration failed:",s))}));export{ja as A,Dm as C,gg as F,ns as H,Dc as L,xn as M,Ln as N,dg as P,Ng as R,ec as S,Gl as U,Ee as V,Zn as W,Fe as a,Zt as b,L as c,Ve as d,Ze as e,Ic as f,Uc as g,Fc as h,Oc as i,Bc as j};
