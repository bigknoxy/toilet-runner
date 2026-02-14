const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./EffectComposer-OHyDimjS.js","./CopyShader-BzTUYzf6.js","./UnrealBloomPass-TcUMxGq4.js"])))=>i.map(i=>d[i]);
var qc=Object.defineProperty,Yc=Object.defineProperties;var $c=Object.getOwnPropertyDescriptors;var za=Object.getOwnPropertySymbols;var Zc=Object.prototype.hasOwnProperty,Kc=Object.prototype.propertyIsEnumerable;var Ga=Math.pow,$s=(i,t,e)=>t in i?qc(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Rn=(i,t)=>{for(var e in t||(t={}))Zc.call(t,e)&&$s(i,e,t[e]);if(za)for(var e of za(t))Kc.call(t,e)&&$s(i,e,t[e]);return i},jn=(i,t)=>Yc(i,$c(t));var b=(i,t,e)=>$s(i,typeof t!="symbol"?t+"":t,e);var me=(i,t,e)=>new Promise((n,s)=>{var r=c=>{try{o(e.next(c))}catch(l){s(l)}},a=c=>{try{o(e.throw(c))}catch(l){s(l)}},o=c=>c.done?n(c.value):Promise.resolve(c.value).then(r,a);o((e=e.apply(i,t)).next())});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pa="170",jc=0,Va=1,Jc=2,cc=1,Qc=2,sn=3,le=0,be=1,Fe=2,An=0,vi=1,Ha=2,Wa=3,Xa=4,tl=5,Bn=100,el=101,nl=102,il=103,sl=104,rl=200,al=201,ol=202,cl=203,wr=204,Cr=205,ll=206,hl=207,ul=208,dl=209,fl=210,pl=211,ml=212,gl=213,_l=214,Rr=0,Pr=1,Lr=2,Si=3,Dr=4,Ir=5,Ur=6,Nr=7,ma=0,vl=1,xl=2,wn=0,Ml=1,Sl=2,yl=3,El=4,Tl=5,bl=6,Al=7,lc=300,yi=301,Ei=302,Fr=303,Or=304,Hs=306,un=1e3,Vn=1001,Br=1002,Ee=1003,wl=1004,es=1005,Oe=1006,Zs=1007,Hn=1008,dn=1009,hc=1010,uc=1011,Ki=1012,ga=1013,qn=1014,Ze=1015,Ji=1016,_a=1017,va=1018,Ti=1020,dc=35902,fc=1021,pc=1022,We=1023,mc=1024,gc=1025,xi=1026,bi=1027,xa=1028,Ma=1029,_c=1030,Sa=1031,ya=1033,Ls=33776,Ds=33777,Is=33778,Us=33779,kr=35840,zr=35841,Gr=35842,Vr=35843,Hr=36196,Wr=37492,Xr=37496,qr=37808,Yr=37809,$r=37810,Zr=37811,Kr=37812,jr=37813,Jr=37814,Qr=37815,ta=37816,ea=37817,na=37818,ia=37819,sa=37820,ra=37821,Ns=36492,aa=36494,oa=36495,vc=36283,ca=36284,la=36285,ha=36286,Cl=3200,Rl=3201,Ea=0,Pl=1,bn="",Ne="srgb",wi="srgb-linear",Ws="linear",Zt="srgb",Jn=7680,qa=519,Ll=512,Dl=513,Il=514,xc=515,Ul=516,Nl=517,Fl=518,Ol=519,Ya=35044,Bl=35048,$a="300 es",ln=2e3,Os=2001;class Ci{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Za=1234567;const qi=Math.PI/180,ji=180/Math.PI;function Ri(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ge[i&255]+ge[i>>8&255]+ge[i>>16&255]+ge[i>>24&255]+"-"+ge[t&255]+ge[t>>8&255]+"-"+ge[t>>16&15|64]+ge[t>>24&255]+"-"+ge[e&63|128]+ge[e>>8&255]+"-"+ge[e>>16&255]+ge[e>>24&255]+ge[n&255]+ge[n>>8&255]+ge[n>>16&255]+ge[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function Ta(i,t){return(i%t+t)%t}function kl(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function zl(i,t,e){return i!==t?(e-i)/(t-i):0}function Yi(i,t,e){return(1-e)*i+e*t}function Gl(i,t,e,n){return Yi(i,t,1-Math.exp(-e*n))}function Vl(i,t=1){return t-Math.abs(Ta(i,t*2)-t)}function Hl(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Wl(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Xl(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ql(i,t){return i+Math.random()*(t-i)}function Yl(i){return i*(.5-Math.random())}function $l(i){i!==void 0&&(Za=i);let t=Za+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zl(i){return i*qi}function Kl(i){return i*ji}function jl(i){return(i&i-1)===0&&i!==0}function Jl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ql(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function th(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),f=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*d,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*m,o*l);break;case"YXY":i.set(c*m,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*m,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const kn={DEG2RAD:qi,RAD2DEG:ji,generateUUID:Ri,clamp:Se,euclideanModulo:Ta,mapLinear:kl,inverseLerp:zl,lerp:Yi,damp:Gl,pingpong:Vl,smoothstep:Hl,smootherstep:Wl,randInt:Xl,randFloat:ql,randFloatSpread:Yl,seededRandom:$l,degToRad:Zl,radToDeg:Kl,isPowerOfTwo:jl,ceilPowerOfTwo:Jl,floorPowerOfTwo:Ql,setQuaternionFromProperEuler:th,normalize:xe,denormalize:mi};class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(t,e,n,s,r,a,o,c,l){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],v=s[0],p=s[3],u=s[6],A=s[1],T=s[4],S=s[7],F=s[2],w=s[5],C=s[8];return r[0]=a*v+o*A+c*F,r[3]=a*p+o*T+c*w,r[6]=a*u+o*S+c*C,r[1]=l*v+h*A+d*F,r[4]=l*p+h*T+d*w,r[7]=l*u+h*S+d*C,r[2]=f*v+m*A+g*F,r[5]=f*p+m*T+g*w,r[8]=f*u+m*S+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,f=o*c-h*r,m=l*r-a*c,g=e*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=f*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=m*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ks.makeScale(t,e)),this}rotate(t){return this.premultiply(Ks.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ks.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ks=new Pt;function Mc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function eh(){const i=Bs("canvas");return i.style.display="block",i}const Ka={};function Hi(i){i in Ka||(Ka[i]=!0,console.warn(i))}function nh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ih(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function sh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Vt={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Zt&&(i.r=hn(i.r),i.g=hn(i.g),i.b=hn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Zt&&(i.r=Mi(i.r),i.g=Mi(i.g),i.b=Mi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===bn?Ws:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ja=[.64,.33,.3,.6,.15,.06],Ja=[.2126,.7152,.0722],Qa=[.3127,.329],to=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eo=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Vt.define({[wi]:{primaries:ja,whitePoint:Qa,transfer:Ws,toXYZ:to,fromXYZ:eo,luminanceCoefficients:Ja,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:ja,whitePoint:Qa,transfer:Zt,toXYZ:to,fromXYZ:eo,luminanceCoefficients:Ja,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}});let Qn;class rh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qn===void 0&&(Qn=Bs("canvas")),Qn.width=t.width,Qn.height=t.height;const n=Qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=Bs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hn(e[n]/255)*255):e[n]=hn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ah=0;class Sc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(js(s[a].image)):r.push(js(s[a]))}else r=js(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function js(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?rh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oh=0;class ve extends Ci{constructor(t=ve.DEFAULT_IMAGE,e=ve.DEFAULT_MAPPING,n=Vn,s=Vn,r=Oe,a=Hn,o=We,c=dn,l=ve.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=Ri(),this.name="",this.source=new Sc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case un:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case Br:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case un:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case Br:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ve.DEFAULT_IMAGE=null;ve.DEFAULT_MAPPING=lc;ve.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,s=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],m=c[5],g=c[9],v=c[2],p=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,S=(m+1)/2,F=(u+1)/2,w=(h+f)/4,C=(d+v)/4,I=(g+p)/4;return T>S&&T>F?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=C/n):S>F?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=I/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=C/r,s=I/r),this.set(n,s,r,e),this}let A=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(d-v)/A,this.z=(f-h)/A,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ch extends Ci{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ve(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Sc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends ch{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yc extends ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lh extends ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const f=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(d!==v||c!==f||l!==m||h!==g){let p=1-o;const u=c*f+l*m+h*g+d*v,A=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const F=Math.sqrt(T),w=Math.atan2(F,u*A);p=Math.sin(p*w)/F,o=Math.sin(o*w)/F}const S=o*A;if(c=c*p+f*S,l=l*p+m*S,h=h*p+g*S,d=d*p+v*S,p===1-o){const F=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=F,l*=F,h*=F,d*=F}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*m-l*f,t[e+1]=c*g+h*f+l*d-o*m,t[e+2]=l*g+h*m+o*f-c*d,t[e+3]=h*g-o*d-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),f=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"YZX":this._x=f*h*d+l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d-f*m*g;break;case"XZY":this._x=f*h*d-l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(no.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(no.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Js.copy(this).projectOnVector(t),this.sub(Js)}reflect(t){return this.sub(Js.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Js=new U,no=new Pi;class fn{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ze):ze.fromBufferAttribute(r,a),ze.applyMatrix4(t.matrixWorld),this.expandByPoint(ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ns.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ns.copy(n.boundingBox)),ns.applyMatrix4(t.matrixWorld),this.union(ns)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ze),ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ni),is.subVectors(this.max,Ni),ti.subVectors(t.a,Ni),ei.subVectors(t.b,Ni),ni.subVectors(t.c,Ni),vn.subVectors(ei,ti),xn.subVectors(ni,ei),Pn.subVectors(ti,ni);let e=[0,-vn.z,vn.y,0,-xn.z,xn.y,0,-Pn.z,Pn.y,vn.z,0,-vn.x,xn.z,0,-xn.x,Pn.z,0,-Pn.x,-vn.y,vn.x,0,-xn.y,xn.x,0,-Pn.y,Pn.x,0];return!Qs(e,ti,ei,ni,is)||(e=[1,0,0,0,1,0,0,0,1],!Qs(e,ti,ei,ni,is))?!1:(ss.crossVectors(vn,xn),e=[ss.x,ss.y,ss.z],Qs(e,ti,ei,ni,is))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Je=[new U,new U,new U,new U,new U,new U,new U,new U],ze=new U,ns=new fn,ti=new U,ei=new U,ni=new U,vn=new U,xn=new U,Pn=new U,Ni=new U,is=new U,ss=new U,Ln=new U;function Qs(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ln.fromArray(i,r);const o=s.x*Math.abs(Ln.x)+s.y*Math.abs(Ln.y)+s.z*Math.abs(Ln.z),c=t.dot(Ln),l=e.dot(Ln),h=n.dot(Ln);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const hh=new fn,Fi=new U,tr=new U;class Li{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):hh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fi.subVectors(t,this.center);const e=Fi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fi.copy(t.center).add(tr)),this.expandByPoint(Fi.copy(t.center).sub(tr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qe=new U,er=new U,rs=new U,Mn=new U,nr=new U,as=new U,ir=new U;class Ec{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qe)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qe.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qe.copy(this.origin).addScaledVector(this.direction,e),Qe.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){er.copy(t).add(e).multiplyScalar(.5),rs.copy(e).sub(t).normalize(),Mn.copy(this.origin).sub(er);const r=t.distanceTo(e)*.5,a=-this.direction.dot(rs),o=Mn.dot(this.direction),c=-Mn.dot(rs),l=Mn.lengthSq(),h=Math.abs(1-a*a);let d,f,m,g;if(h>0)if(d=a*c-o,f=a*o-c,g=r*h,d>=0)if(f>=-g)if(f<=g){const v=1/h;d*=v,f*=v,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(er).addScaledVector(rs,f),m}intersectSphere(t,e){Qe.subVectors(t.center,this.origin);const n=Qe.dot(this.direction),s=Qe.dot(Qe)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qe)!==null}intersectTriangle(t,e,n,s,r){nr.subVectors(e,t),as.subVectors(n,t),ir.crossVectors(nr,as);let a=this.direction.dot(ir),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mn.subVectors(this.origin,t);const c=o*this.direction.dot(as.crossVectors(Mn,as));if(c<0)return null;const l=o*this.direction.dot(nr.cross(Mn));if(l<0||c+l>a)return null;const h=-o*Mn.dot(ir);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(t,e,n,s,r,a,o,c,l,h,d,f,m,g,v,p){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,f,m,g,v,p)}set(t,e,n,s,r,a,o,c,l,h,d,f,m,g,v,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ii.setFromMatrixColumn(t,0).length(),r=1/ii.setFromMatrixColumn(t,1).length(),a=1/ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*h,m=a*d,g=o*h,v=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=m+g*l,e[5]=f-v*l,e[9]=-o*c,e[2]=v-f*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,m=c*d,g=l*h,v=l*d;e[0]=f+v*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=v+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,m=c*d,g=l*h,v=l*d;e[0]=f-v*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,m=a*d,g=o*h,v=o*d;e[0]=c*h,e[4]=g*l-m,e[8]=f*l+v,e[1]=c*d,e[5]=v*l+f,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,m=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-f*d,e[8]=g*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*d+g,e[10]=f-v*d}else if(t.order==="XZY"){const f=a*c,m=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+v,e[5]=a*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uh,t,dh)}lookAt(t,e,n){const s=this.elements;return Ce.subVectors(t,e),Ce.lengthSq()===0&&(Ce.z=1),Ce.normalize(),Sn.crossVectors(n,Ce),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Ce.x+=1e-4:Ce.z+=1e-4,Ce.normalize(),Sn.crossVectors(n,Ce)),Sn.normalize(),os.crossVectors(Ce,Sn),s[0]=Sn.x,s[4]=os.x,s[8]=Ce.x,s[1]=Sn.y,s[5]=os.y,s[9]=Ce.y,s[2]=Sn.z,s[6]=os.z,s[10]=Ce.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],v=n[6],p=n[10],u=n[14],A=n[3],T=n[7],S=n[11],F=n[15],w=s[0],C=s[4],I=s[8],y=s[12],M=s[1],R=s[5],G=s[9],z=s[13],W=s[2],K=s[6],X=s[10],tt=s[14],H=s[3],st=s[7],ht=s[11],Mt=s[15];return r[0]=a*w+o*M+c*W+l*H,r[4]=a*C+o*R+c*K+l*st,r[8]=a*I+o*G+c*X+l*ht,r[12]=a*y+o*z+c*tt+l*Mt,r[1]=h*w+d*M+f*W+m*H,r[5]=h*C+d*R+f*K+m*st,r[9]=h*I+d*G+f*X+m*ht,r[13]=h*y+d*z+f*tt+m*Mt,r[2]=g*w+v*M+p*W+u*H,r[6]=g*C+v*R+p*K+u*st,r[10]=g*I+v*G+p*X+u*ht,r[14]=g*y+v*z+p*tt+u*Mt,r[3]=A*w+T*M+S*W+F*H,r[7]=A*C+T*R+S*K+F*st,r[11]=A*I+T*G+S*X+F*ht,r[15]=A*y+T*z+S*tt+F*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],m=t[14],g=t[3],v=t[7],p=t[11],u=t[15];return g*(+r*c*d-s*l*d-r*o*f+n*l*f+s*o*m-n*c*m)+v*(+e*c*m-e*l*f+r*a*f-s*a*m+s*l*h-r*c*h)+p*(+e*l*d-e*o*m-r*a*d+n*a*m+r*o*h-n*l*h)+u*(-s*o*h-e*c*d+e*o*f+s*a*d-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],m=t[11],g=t[12],v=t[13],p=t[14],u=t[15],A=d*p*l-v*f*l+v*c*m-o*p*m-d*c*u+o*f*u,T=g*f*l-h*p*l-g*c*m+a*p*m+h*c*u-a*f*u,S=h*v*l-g*d*l+g*o*m-a*v*m-h*o*u+a*d*u,F=g*d*c-h*v*c-g*o*f+a*v*f+h*o*p-a*d*p,w=e*A+n*T+s*S+r*F;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=A*C,t[1]=(v*f*r-d*p*r-v*s*m+n*p*m+d*s*u-n*f*u)*C,t[2]=(o*p*r-v*c*r+v*s*l-n*p*l-o*s*u+n*c*u)*C,t[3]=(d*c*r-o*f*r-d*s*l+n*f*l+o*s*m-n*c*m)*C,t[4]=T*C,t[5]=(h*p*r-g*f*r+g*s*m-e*p*m-h*s*u+e*f*u)*C,t[6]=(g*c*r-a*p*r-g*s*l+e*p*l+a*s*u-e*c*u)*C,t[7]=(a*f*r-h*c*r+h*s*l-e*f*l-a*s*m+e*c*m)*C,t[8]=S*C,t[9]=(g*d*r-h*v*r-g*n*m+e*v*m+h*n*u-e*d*u)*C,t[10]=(a*v*r-g*o*r+g*n*l-e*v*l-a*n*u+e*o*u)*C,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*m-e*o*m)*C,t[12]=F*C,t[13]=(h*v*s-g*d*s+g*n*f-e*v*f-h*n*p+e*d*p)*C,t[14]=(g*o*s-a*v*s-g*n*c+e*v*c+a*n*p-e*o*p)*C,t[15]=(a*d*s-h*o*s+h*n*c-e*d*c-a*n*f+e*o*f)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,f=r*l,m=r*h,g=r*d,v=a*h,p=a*d,u=o*d,A=c*l,T=c*h,S=c*d,F=n.x,w=n.y,C=n.z;return s[0]=(1-(v+u))*F,s[1]=(m+S)*F,s[2]=(g-T)*F,s[3]=0,s[4]=(m-S)*w,s[5]=(1-(f+u))*w,s[6]=(p+A)*w,s[7]=0,s[8]=(g+T)*C,s[9]=(p-A)*C,s[10]=(1-(f+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ii.set(s[0],s[1],s[2]).length();const a=ii.set(s[4],s[5],s[6]).length(),o=ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ge.copy(this);const l=1/r,h=1/a,d=1/o;return Ge.elements[0]*=l,Ge.elements[1]*=l,Ge.elements[2]*=l,Ge.elements[4]*=h,Ge.elements[5]*=h,Ge.elements[6]*=h,Ge.elements[8]*=d,Ge.elements[9]*=d,Ge.elements[10]*=d,e.setFromRotationMatrix(Ge),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ln){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let m,g;if(o===ln)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Os)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ln){const c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(a-r),f=(e+t)*l,m=(n+s)*h;let g,v;if(o===ln)g=(a+r)*d,v=-2*d;else if(o===Os)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ii=new U,Ge=new $t,uh=new U(0,0,0),dh=new U(1,1,1),Sn=new U,os=new U,Ce=new U,io=new $t,so=new Pi;class Le{constructor(t=0,e=0,n=0,s=Le.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return io.makeRotationFromQuaternion(t),this.setFromRotationMatrix(io,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return so.setFromEuler(this),this.setFromQuaternion(so,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Le.DEFAULT_ORDER="XYZ";class Tc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fh=0;const ro=new U,si=new Pi,tn=new $t,cs=new U,Oi=new U,ph=new U,mh=new Pi,ao=new U(1,0,0),oo=new U(0,1,0),co=new U(0,0,1),lo={type:"added"},gh={type:"removed"},ri={type:"childadded",child:null},sr={type:"childremoved",child:null};class fe extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new U,e=new Le,n=new Pi,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new Pt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.multiply(si),this}rotateOnWorldAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.premultiply(si),this}rotateX(t){return this.rotateOnAxis(ao,t)}rotateY(t){return this.rotateOnAxis(oo,t)}rotateZ(t){return this.rotateOnAxis(co,t)}translateOnAxis(t,e){return ro.copy(t).applyQuaternion(this.quaternion),this.position.add(ro.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ao,t)}translateY(t){return this.translateOnAxis(oo,t)}translateZ(t){return this.translateOnAxis(co,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cs.copy(t):cs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(Oi,cs,this.up):tn.lookAt(cs,Oi,this.up),this.quaternion.setFromRotationMatrix(tn),s&&(tn.extractRotation(s.matrixWorld),si.setFromRotationMatrix(tn),this.quaternion.premultiply(si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lo),ri.child=t,this.dispatchEvent(ri),ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gh),sr.child=t,this.dispatchEvent(sr),sr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lo),ri.child=t,this.dispatchEvent(ri),ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,t,ph),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,mh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}fe.DEFAULT_UP=new U(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ve=new U,en=new U,rr=new U,nn=new U,ai=new U,oi=new U,ho=new U,ar=new U,or=new U,cr=new U,lr=new re,hr=new re,ur=new re;class He{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ve.subVectors(t,e),s.cross(Ve);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ve.subVectors(s,e),en.subVectors(n,e),rr.subVectors(t,e);const a=Ve.dot(Ve),o=Ve.dot(en),c=Ve.dot(rr),l=en.dot(en),h=en.dot(rr),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,nn)===null?!1:nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,nn.x),c.addScaledVector(a,nn.y),c.addScaledVector(o,nn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return lr.setScalar(0),hr.setScalar(0),ur.setScalar(0),lr.fromBufferAttribute(t,e),hr.fromBufferAttribute(t,n),ur.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(lr,r.x),a.addScaledVector(hr,r.y),a.addScaledVector(ur,r.z),a}static isFrontFacing(t,e,n,s){return Ve.subVectors(n,e),en.subVectors(t,e),Ve.cross(en).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ve.subVectors(this.c,this.b),en.subVectors(this.a,this.b),Ve.cross(en).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return He.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return He.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return He.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return He.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return He.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ai.subVectors(s,n),oi.subVectors(r,n),ar.subVectors(t,n);const c=ai.dot(ar),l=oi.dot(ar);if(c<=0&&l<=0)return e.copy(n);or.subVectors(t,s);const h=ai.dot(or),d=oi.dot(or);if(h>=0&&d<=h)return e.copy(s);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ai,a);cr.subVectors(t,r);const m=ai.dot(cr),g=oi.dot(cr);if(g>=0&&m<=g)return e.copy(r);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(oi,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return ho.subVectors(r,s),o=(d-h)/(d-h+(m-g)),e.copy(s).addScaledVector(ho,o);const u=1/(p+v+f);return a=v*u,o=f*u,e.copy(n).addScaledVector(ai,a).addScaledVector(oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},ls={h:0,s:0,l:0};function dr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Vt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Vt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Vt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Vt.workingColorSpace){if(t=Ta(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=dr(a,r,t+1/3),this.g=dr(a,r,t),this.b=dr(a,r,t-1/3)}return Vt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=bc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hn(t.r),this.g=hn(t.g),this.b=hn(t.b),this}copyLinearToSRGB(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return Vt.fromWorkingColorSpace(_e.copy(this),t),Math.round(Se(_e.r*255,0,255))*65536+Math.round(Se(_e.g*255,0,255))*256+Math.round(Se(_e.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Vt.workingColorSpace){Vt.fromWorkingColorSpace(_e.copy(this),e);const n=_e.r,s=_e.g,r=_e.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(_e.copy(this),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=Ne){Vt.fromWorkingColorSpace(_e.copy(this),t);const e=_e.r,n=_e.g,s=_e.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(yn),this.setHSL(yn.h+t,yn.s+e,yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yn),t.getHSL(ls);const n=Yi(yn.h,ls.h,e),s=Yi(yn.s,ls.s,e),r=Yi(yn.l,ls.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _e=new It;It.NAMES=bc;let _h=0;class $n extends Ci{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Ri(),this.name="",this.blending=vi,this.side=le,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wr,this.blendDst=Cr,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Si,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jn,this.stencilZFail=Jn,this.stencilZPass=Jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==le&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wr&&(n.blendSrc=this.blendSrc),this.blendDst!==Cr&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Si&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pn extends $n{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Le,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new U,hs=new Ft;class ye{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ya,this.updateRanges=[],this.gpuType=Ze,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hs.fromBufferAttribute(this,e),hs.applyMatrix3(t),this.setXY(e,hs.x,hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ya&&(t.usage=this.usage),t}}class Ac extends ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wc extends ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}let vh=0;const Ue=new $t,fr=new fe,ci=new U,Re=new fn,Bi=new fn,de=new U;class Ae extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mc(t)?wc:Ac)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Pt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return fr.lookAt(t),fr.updateMatrix(),this.applyMatrix4(fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Re.setFromBufferAttribute(r),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,Re.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,Re.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(Re.min),this.boundingBox.expandByPoint(Re.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Re.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Bi.setFromBufferAttribute(o),this.morphTargetsRelative?(de.addVectors(Re.min,Bi.min),Re.expandByPoint(de),de.addVectors(Re.max,Bi.max),Re.expandByPoint(de)):(Re.expandByPoint(Bi.min),Re.expandByPoint(Bi.max))}Re.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)de.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(de));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)de.fromBufferAttribute(o,l),c&&(ci.fromBufferAttribute(t,l),de.add(ci)),s=Math.max(s,n.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ye(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new U,c[I]=new U;const l=new U,h=new U,d=new U,f=new Ft,m=new Ft,g=new Ft,v=new U,p=new U;function u(I,y,M){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,y),d.fromBufferAttribute(n,M),f.fromBufferAttribute(r,I),m.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),h.sub(l),d.sub(l),m.sub(f),g.sub(f);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(R),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(R),o[I].add(v),o[y].add(v),o[M].add(v),c[I].add(p),c[y].add(p),c[M].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let I=0,y=A.length;I<y;++I){const M=A[I],R=M.start,G=M.count;for(let z=R,W=R+G;z<W;z+=3)u(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const T=new U,S=new U,F=new U,w=new U;function C(I){F.fromBufferAttribute(s,I),w.copy(F);const y=o[I];T.copy(y),T.sub(F.multiplyScalar(F.dot(y))).normalize(),S.crossVectors(w,y);const R=S.dot(c[I])<0?-1:1;a.setXYZW(I,T.x,T.y,T.z,R)}for(let I=0,y=A.length;I<y;++I){const M=A[I],R=M.start,G=M.count;for(let z=R,W=R+G;z<W;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,d=new U;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let m=0,g=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*h;for(let u=0;u<h;u++)f[g++]=l[m++]}return new ye(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],m=t(f,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uo=new $t,Dn=new Ec,us=new Li,fo=new U,ds=new U,fs=new U,ps=new U,pr=new U,ms=new U,po=new U,gs=new U;class Kt extends fe{constructor(t=new Ae,e=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ms.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(pr.fromBufferAttribute(d,t),a?ms.addScaledVector(pr,h):ms.addScaledVector(pr.sub(e),h))}e.add(ms)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(r),Dn.copy(t.ray).recast(t.near),!(us.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(us,fo)===null||Dn.origin.distanceToSquared(fo)>Ga(t.far-t.near,2)))&&(uo.copy(r).invert(),Dn.copy(t.ray).applyMatrix4(uo),!(n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Dn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],u=a[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=A,F=T;S<F;S+=3){const w=o.getX(S),C=o.getX(S+1),I=o.getX(S+2);s=_s(this,u,t,n,l,h,d,w,C,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){const A=o.getX(p),T=o.getX(p+1),S=o.getX(p+2);s=_s(this,a,t,n,l,h,d,A,T,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],u=a[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let S=A,F=T;S<F;S+=3){const w=S,C=S+1,I=S+2;s=_s(this,u,t,n,l,h,d,w,C,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){const A=p,T=p+1,S=p+2;s=_s(this,a,t,n,l,h,d,A,T,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function xh(i,t,e,n,s,r,a,o){let c;if(t.side===be?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===le,o),c===null)return null;gs.copy(o),gs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(gs);return l<e.near||l>e.far?null:{distance:l,point:gs.clone(),object:i}}function _s(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ds),i.getVertexPosition(c,fs),i.getVertexPosition(l,ps);const h=xh(i,t,e,n,ds,fs,ps,po);if(h){const d=new U;He.getBarycoord(po,ds,fs,ps,d),s&&(h.uv=He.getInterpolatedAttribute(s,o,c,l,d,new Ft)),r&&(h.uv1=He.getInterpolatedAttribute(r,o,c,l,d,new Ft)),a&&(h.normal=He.getInterpolatedAttribute(a,o,c,l,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new U,materialIndex:0};He.getNormal(ds,fs,ps,f.normal),h.face=f,h.barycoord=d}return h}class Zn extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2));function g(v,p,u,A,T,S,F,w,C,I,y){const M=S/C,R=F/I,G=S/2,z=F/2,W=w/2,K=C+1,X=I+1;let tt=0,H=0;const st=new U;for(let ht=0;ht<X;ht++){const Mt=ht*R-z;for(let Ut=0;Ut<K;Ut++){const jt=Ut*M-G;st[v]=jt*A,st[p]=Mt*T,st[u]=W,l.push(st.x,st.y,st.z),st[v]=0,st[p]=0,st[u]=w>0?1:-1,h.push(st.x,st.y,st.z),d.push(Ut/C),d.push(1-ht/I),tt+=1}}for(let ht=0;ht<I;ht++)for(let Mt=0;Mt<C;Mt++){const Ut=f+Mt+K*ht,jt=f+Mt+K*(ht+1),Y=f+(Mt+1)+K*(ht+1),et=f+(Mt+1)+K*ht;c.push(Ut,jt,et),c.push(jt,Y,et),H+=6}o.addGroup(m,H,y),m+=H,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ai(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Me(i){const t={};for(let e=0;e<i.length;e++){const n=Ai(i[e]);for(const s in n)t[s]=n[s]}return t}function Mh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Cc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Vt.workingColorSpace}const Rc={clone:Ai,merge:Me};var Sh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qe extends $n{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sh,this.fragmentShader=yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ai(t.uniforms),this.uniformsGroups=Mh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Pc extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new U,mo=new Ft,go=new Ft;class Pe extends Pc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(En.x,En.y).multiplyScalar(-t/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-t/En.z)}getViewSize(t,e){return this.getViewBounds(t,mo,go),e.subVectors(go,mo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const li=-90,hi=1;class Eh extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pe(li,hi,t,e);s.layers=this.layers,this.add(s);const r=new Pe(li,hi,t,e);r.layers=this.layers,this.add(r);const a=new Pe(li,hi,t,e);a.layers=this.layers,this.add(a);const o=new Pe(li,hi,t,e);o.layers=this.layers,this.add(o);const c=new Pe(li,hi,t,e);c.layers=this.layers,this.add(c);const l=new Pe(li,hi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lc extends ve{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:yi,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Th extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Lc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Oe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zn(5,5,5),r=new qe({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:An});r.uniforms.tEquirect.value=e;const a=new Kt(s,r),o=e.minFilter;return e.minFilter===Hn&&(e.minFilter=Oe),new Eh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const mr=new U,bh=new U,Ah=new Pt;class Fn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=mr.subVectors(n,e).cross(bh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(mr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ah.getNormalMatrix(t),s=this.coplanarPoint(mr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Li,vs=new U;class ba{constructor(t=new Fn,e=new Fn,n=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],d=s[6],f=s[7],m=s[8],g=s[9],v=s[10],p=s[11],u=s[12],A=s[13],T=s[14],S=s[15];if(n[0].setComponents(c-r,f-l,p-m,S-u).normalize(),n[1].setComponents(c+r,f+l,p+m,S+u).normalize(),n[2].setComponents(c+a,f+h,p+g,S+A).normalize(),n[3].setComponents(c-a,f-h,p-g,S-A).normalize(),n[4].setComponents(c-o,f-d,p-v,S-T).normalize(),e===ln)n[5].setComponents(c+o,f+d,p+v,S+T).normalize();else if(e===Os)n[5].setComponents(o,d,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(t){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(t.matrixWorld),this.intersectsSphere(In)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(vs.x=s.normal.x>0?t.max.x:t.min.x,vs.y=s.normal.y>0?t.max.y:t.min.y,vs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function wh(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],v=d[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const v=d[m];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class mn extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,f=e/c,m=[],g=[],v=[],p=[];for(let u=0;u<h;u++){const A=u*f-a;for(let T=0;T<l;T++){const S=T*d-r;g.push(S,-A,0),v.push(0,0,1),p.push(T/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let A=0;A<o;A++){const T=A+l*u,S=A+l*(u+1),F=A+1+l*(u+1),w=A+1+l*u;m.push(T,S,w),m.push(S,F,w)}this.setIndex(m),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ch=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rh=`#ifdef USE_ALPHAHASH
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
#endif`,Ph=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ih=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uh=`#ifdef USE_AOMAP
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
#endif`,Nh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fh=`#ifdef USE_BATCHING
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
#endif`,Oh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gh=`#ifdef USE_IRIDESCENCE
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
#endif`,Vh=`#ifdef USE_BUMPMAP
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
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jh=`#define PI 3.141592653589793
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
} // validated`,Jh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qh=`vec3 transformedNormal = objectNormal;
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
#endif`,tu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,su="gl_FragColor = linearToOutputTexel( gl_FragColor );",ru=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,au=`#ifdef USE_ENVMAP
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
#endif`,ou=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cu=`#ifdef USE_ENVMAP
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
#endif`,lu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hu=`#ifdef USE_ENVMAP
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
#endif`,uu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,du=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mu=`#ifdef USE_GRADIENTMAP
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
}`,gu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_u=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xu=`uniform bool receiveShadow;
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
#endif`,Mu=`#ifdef USE_ENVMAP
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
#endif`,Su=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bu=`PhysicalMaterial material;
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
#endif`,Au=`struct PhysicalMaterial {
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
}`,wu=`
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
#endif`,Cu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ru=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Du=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ou=`#if defined( USE_POINTS_UV )
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
#endif`,Bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ku=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hu=`#ifdef USE_MORPHTARGETS
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
#endif`,Wu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ku=`#ifdef USE_NORMALMAP
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
#endif`,ju=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ju=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,td=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ed=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ad=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ld=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ud=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dd=`float getShadowMask() {
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
}`,fd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pd=`#ifdef USE_SKINNING
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
#endif`,md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gd=`#ifdef USE_SKINNING
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
#endif`,_d=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Md=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sd=`#ifdef USE_TRANSMISSION
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
#endif`,yd=`#ifdef USE_TRANSMISSION
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
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ad=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cd=`uniform sampler2D t2D;
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
}`,Rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Id=`#include <common>
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
}`,Ud=`#if DEPTH_PACKING == 3200
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
}`,Nd=`#define DISTANCE
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
}`,Fd=`#define DISTANCE
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
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`uniform float scale;
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
}`,zd=`uniform vec3 diffuse;
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
}`,Gd=`#include <common>
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
}`,Vd=`uniform vec3 diffuse;
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
}`,Hd=`#define LAMBERT
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
}`,Wd=`#define LAMBERT
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
}`,Xd=`#define MATCAP
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
}`,qd=`#define MATCAP
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
}`,Yd=`#define NORMAL
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
}`,$d=`#define NORMAL
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
}`,Zd=`#define PHONG
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
}`,Kd=`#define PHONG
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
}`,jd=`#define STANDARD
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
}`,Jd=`#define STANDARD
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
}`,Qd=`#define TOON
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
}`,tf=`#define TOON
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
}`,ef=`uniform float size;
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
}`,nf=`uniform vec3 diffuse;
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
}`,sf=`#include <common>
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
}`,rf=`uniform vec3 color;
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
}`,af=`uniform float rotation;
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
}`,of=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:Ch,alphahash_pars_fragment:Rh,alphamap_fragment:Ph,alphamap_pars_fragment:Lh,alphatest_fragment:Dh,alphatest_pars_fragment:Ih,aomap_fragment:Uh,aomap_pars_fragment:Nh,batching_pars_vertex:Fh,batching_vertex:Oh,begin_vertex:Bh,beginnormal_vertex:kh,bsdfs:zh,iridescence_fragment:Gh,bumpmap_pars_fragment:Vh,clipping_planes_fragment:Hh,clipping_planes_pars_fragment:Wh,clipping_planes_pars_vertex:Xh,clipping_planes_vertex:qh,color_fragment:Yh,color_pars_fragment:$h,color_pars_vertex:Zh,color_vertex:Kh,common:jh,cube_uv_reflection_fragment:Jh,defaultnormal_vertex:Qh,displacementmap_pars_vertex:tu,displacementmap_vertex:eu,emissivemap_fragment:nu,emissivemap_pars_fragment:iu,colorspace_fragment:su,colorspace_pars_fragment:ru,envmap_fragment:au,envmap_common_pars_fragment:ou,envmap_pars_fragment:cu,envmap_pars_vertex:lu,envmap_physical_pars_fragment:Mu,envmap_vertex:hu,fog_vertex:uu,fog_pars_vertex:du,fog_fragment:fu,fog_pars_fragment:pu,gradientmap_pars_fragment:mu,lightmap_pars_fragment:gu,lights_lambert_fragment:_u,lights_lambert_pars_fragment:vu,lights_pars_begin:xu,lights_toon_fragment:Su,lights_toon_pars_fragment:yu,lights_phong_fragment:Eu,lights_phong_pars_fragment:Tu,lights_physical_fragment:bu,lights_physical_pars_fragment:Au,lights_fragment_begin:wu,lights_fragment_maps:Cu,lights_fragment_end:Ru,logdepthbuf_fragment:Pu,logdepthbuf_pars_fragment:Lu,logdepthbuf_pars_vertex:Du,logdepthbuf_vertex:Iu,map_fragment:Uu,map_pars_fragment:Nu,map_particle_fragment:Fu,map_particle_pars_fragment:Ou,metalnessmap_fragment:Bu,metalnessmap_pars_fragment:ku,morphinstance_vertex:zu,morphcolor_vertex:Gu,morphnormal_vertex:Vu,morphtarget_pars_vertex:Hu,morphtarget_vertex:Wu,normal_fragment_begin:Xu,normal_fragment_maps:qu,normal_pars_fragment:Yu,normal_pars_vertex:$u,normal_vertex:Zu,normalmap_pars_fragment:Ku,clearcoat_normal_fragment_begin:ju,clearcoat_normal_fragment_maps:Ju,clearcoat_pars_fragment:Qu,iridescence_pars_fragment:td,opaque_fragment:ed,packing:nd,premultiplied_alpha_fragment:id,project_vertex:sd,dithering_fragment:rd,dithering_pars_fragment:ad,roughnessmap_fragment:od,roughnessmap_pars_fragment:cd,shadowmap_pars_fragment:ld,shadowmap_pars_vertex:hd,shadowmap_vertex:ud,shadowmask_pars_fragment:dd,skinbase_vertex:fd,skinning_pars_vertex:pd,skinning_vertex:md,skinnormal_vertex:gd,specularmap_fragment:_d,specularmap_pars_fragment:vd,tonemapping_fragment:xd,tonemapping_pars_fragment:Md,transmission_fragment:Sd,transmission_pars_fragment:yd,uv_pars_fragment:Ed,uv_pars_vertex:Td,uv_vertex:bd,worldpos_vertex:Ad,background_vert:wd,background_frag:Cd,backgroundCube_vert:Rd,backgroundCube_frag:Pd,cube_vert:Ld,cube_frag:Dd,depth_vert:Id,depth_frag:Ud,distanceRGBA_vert:Nd,distanceRGBA_frag:Fd,equirect_vert:Od,equirect_frag:Bd,linedashed_vert:kd,linedashed_frag:zd,meshbasic_vert:Gd,meshbasic_frag:Vd,meshlambert_vert:Hd,meshlambert_frag:Wd,meshmatcap_vert:Xd,meshmatcap_frag:qd,meshnormal_vert:Yd,meshnormal_frag:$d,meshphong_vert:Zd,meshphong_frag:Kd,meshphysical_vert:jd,meshphysical_frag:Jd,meshtoon_vert:Qd,meshtoon_frag:tf,points_vert:ef,points_frag:nf,shadow_vert:sf,shadow_frag:rf,sprite_vert:af,sprite_frag:of},nt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},$e={basic:{uniforms:Me([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Me([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new It(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Me([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Me([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Me([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new It(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Me([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Me([nt.points,nt.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Me([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Me([nt.common,nt.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Me([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Me([nt.sprite,nt.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Me([nt.common,nt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Me([nt.lights,nt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};$e.physical={uniforms:Me([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const xs={r:0,b:0,g:0},Un=new Le,cf=new $t;function lf(i,t,e,n,s,r,a){const o=new It(0);let c=r===!0?0:1,l,h,d=null,f=0,m=null;function g(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?e:t).get(T)),T}function v(A){let T=!1;const S=g(A);S===null?u(o,c):S&&S.isColor&&(u(S,1),T=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(A,T){const S=g(T);S&&(S.isCubeTexture||S.mapping===Hs)?(h===void 0&&(h=new Kt(new Zn(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:Ai($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Un.copy(T.backgroundRotation),Un.x*=-1,Un.y*=-1,Un.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cf.makeRotationFromEuler(Un)),h.material.toneMapped=Vt.getTransfer(S.colorSpace)!==Zt,(d!==S||f!==S.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=S,f=S.version,m=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Kt(new mn(2,2),new qe({name:"BackgroundMaterial",uniforms:Ai($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:le,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Vt.getTransfer(S.colorSpace)!==Zt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=S,f=S.version,m=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function u(A,T){A.getRGB(xs,Cc(i)),n.buffers.color.setClear(xs.r,xs.g,xs.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(A,T=1){o.set(A),c=T,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,u(o,c)},render:v,addToRenderList:p}}function hf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(M,R,G,z,W){let K=!1;const X=d(z,G,R);r!==X&&(r=X,l(r.object)),K=m(M,z,G,W),K&&g(M,z,G,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,S(M,R,G,z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,R,G){const z=G.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let K=W[R.id];K===void 0&&(K={},W[R.id]=K);let X=K[z];return X===void 0&&(X=f(c()),K[z]=X),X}function f(M){const R=[],G=[],z=[];for(let W=0;W<e;W++)R[W]=0,G[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:G,attributeDivisors:z,object:M,attributes:{},index:null}}function m(M,R,G,z){const W=r.attributes,K=R.attributes;let X=0;const tt=G.getAttributes();for(const H in tt)if(tt[H].location>=0){const ht=W[H];let Mt=K[H];if(Mt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor)),ht===void 0||ht.attribute!==Mt||Mt&&ht.data!==Mt.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function g(M,R,G,z){const W={},K=R.attributes;let X=0;const tt=G.getAttributes();for(const H in tt)if(tt[H].location>=0){let ht=K[H];ht===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));const Mt={};Mt.attribute=ht,ht&&ht.data&&(Mt.data=ht.data),W[H]=Mt,X++}r.attributes=W,r.attributesNum=X,r.index=z}function v(){const M=r.newAttributes;for(let R=0,G=M.length;R<G;R++)M[R]=0}function p(M){u(M,0)}function u(M,R){const G=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;G[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),W[M]!==R&&(i.vertexAttribDivisor(M,R),W[M]=R)}function A(){const M=r.newAttributes,R=r.enabledAttributes;for(let G=0,z=R.length;G<z;G++)R[G]!==M[G]&&(i.disableVertexAttribArray(G),R[G]=0)}function T(M,R,G,z,W,K,X){X===!0?i.vertexAttribIPointer(M,R,G,W,K):i.vertexAttribPointer(M,R,G,z,W,K)}function S(M,R,G,z){v();const W=z.attributes,K=G.getAttributes(),X=R.defaultAttributeValues;for(const tt in K){const H=K[tt];if(H.location>=0){let st=W[tt];if(st===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const ht=st.normalized,Mt=st.itemSize,Ut=t.get(st);if(Ut===void 0)continue;const jt=Ut.buffer,Y=Ut.type,et=Ut.bytesPerElement,_t=Y===i.INT||Y===i.UNSIGNED_INT||st.gpuType===ga;if(st.isInterleavedBufferAttribute){const rt=st.data,Tt=rt.stride,wt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<H.locationSize;Nt++)u(H.location+Nt,rt.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Nt=0;Nt<H.locationSize;Nt++)p(H.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Nt=0;Nt<H.locationSize;Nt++)T(H.location+Nt,Mt/H.locationSize,Y,ht,Tt*et,(wt+Mt/H.locationSize*Nt)*et,_t)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<H.locationSize;rt++)u(H.location+rt,st.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<H.locationSize;rt++)p(H.location+rt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let rt=0;rt<H.locationSize;rt++)T(H.location+rt,Mt/H.locationSize,Y,ht,Mt*et,Mt/H.locationSize*rt*et,_t)}}else if(X!==void 0){const ht=X[tt];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(H.location,ht);break;case 3:i.vertexAttrib3fv(H.location,ht);break;case 4:i.vertexAttrib4fv(H.location,ht);break;default:i.vertexAttrib1fv(H.location,ht)}}}}A()}function F(){I();for(const M in n){const R=n[M];for(const G in R){const z=R[G];for(const W in z)h(z[W].object),delete z[W];delete R[G]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const G in R){const z=R[G];for(const W in z)h(z[W].object),delete z[W];delete R[G]}delete n[M.id]}function C(M){for(const R in n){const G=n[R];if(G[M.id]===void 0)continue;const z=G[M.id];for(const W in z)h(z[W].object),delete z[W];delete G[M.id]}}function I(){y(),a=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:y,dispose:F,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:A}}function uf(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];e.update(m,n,1)}function c(l,h,d,f){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function df(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==We&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const I=C===Ji&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==dn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ze&&!I)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:F,maxSamples:w}}function ff(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Fn,o=new Pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{const A=r?0:n,T=A*4;let S=u.clippingState||null;c.value=S,S=h(g,f,T,m);for(let F=0;F!==T;++F)S[F]=e[F];u.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const u=m+v*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<u)&&(p=new Float32Array(u));for(let T=0,S=m;T!==v;++T,S+=4)a.copy(d[T]).applyMatrix4(A,o),a.normal.toArray(p,S),p[S+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function pf(i){let t=new WeakMap;function e(a,o){return o===Fr?a.mapping=yi:o===Or&&(a.mapping=Ei),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Fr||o===Or)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Th(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Aa extends Pc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gi=4,_o=[.125,.215,.35,.446,.526,.582],zn=20,gr=new Aa,vo=new It;let _r=null,vr=0,xr=0,Mr=!1;const On=(1+Math.sqrt(5))/2,ui=1/On,xo=[new U(-On,ui,0),new U(On,ui,0),new U(-ui,0,On),new U(ui,0,On),new U(0,On,-ui),new U(0,On,ui),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Mo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){_r=this._renderer.getRenderTarget(),vr=this._renderer.getActiveCubeFace(),xr=this._renderer.getActiveMipmapLevel(),Mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_r,vr,xr),this._renderer.xr.enabled=Mr,t.scissorTest=!1,Ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yi||t.mapping===Ei?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_r=this._renderer.getRenderTarget(),vr=this._renderer.getActiveCubeFace(),xr=this._renderer.getActiveMipmapLevel(),Mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:Ji,format:We,colorSpace:wi,depthBuffer:!1},s=So(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=So(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mf(r)),this._blurMaterial=gf(r,t,e)}return s}_compileMaterial(t){const e=new Kt(this._lodPlanes[0],t);this._renderer.compile(e,gr)}_sceneToCubeUV(t,e,n,s){const o=new Pe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(vo),h.toneMapping=wn,h.autoClear=!1;const m=new pn({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),g=new Kt(new Zn,m);let v=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy(vo),v=!0);for(let u=0;u<6;u++){const A=u%3;A===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):A===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));const T=this._cubeSize;Ms(s,A*T,u>2?T:0,T,T),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===yi||t.mapping===Ei;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Kt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Ms(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,gr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xo[(s-r-1)%xo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Kt(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*zn-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):zn;p>zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zn}`);const u=[];let A=0;for(let C=0;C<zn;++C){const I=C/v,y=Math.exp(-I*I/2);u.push(y),C===0?A+=y:C<p&&(A+=2*y)}for(let C=0;C<u.length;C++)u[C]=u[C]/A;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;const S=this._sizeLods[s],F=3*S*(s>T-gi?s-T+gi:0),w=4*(this._cubeSize-S);Ms(e,F,w,3*S,2*S),c.setRenderTarget(e),c.render(d,gr)}}function mf(i){const t=[],e=[],n=[];let s=i;const r=i-gi+1+_o.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-gi?c=_o[a-i+gi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,v=3,p=2,u=1,A=new Float32Array(v*g*m),T=new Float32Array(p*g*m),S=new Float32Array(u*g*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,I=w>2?0:-1,y=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];A.set(y,v*g*w),T.set(f,p*g*w);const M=[w,w,w,w,w,w];S.set(M,u*g*w)}const F=new Ae;F.setAttribute("position",new ye(A,v)),F.setAttribute("uv",new ye(T,p)),F.setAttribute("faceIndex",new ye(S,u)),t.push(F),s>gi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function So(i,t,e){const n=new Yn(i,t,e);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function gf(i,t,e){const n=new Float32Array(zn),s=new U(0,1,0);return new qe({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wa(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function yo(){return new qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wa(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Eo(){return new qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function wa(){return`

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
	`}function _f(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Fr||c===Or,h=c===yi||c===Ei;if(l||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Mo(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Mo(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function vf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Hi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xf(i,t,e,n){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let p=0,u=v.length;p<u;p++)t.remove(v[p])}f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const v=m[g];for(let p=0,u=v.length;p<u;p++)t.update(v[p],i.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,g=d.attributes.position;let v=0;if(m!==null){const A=m.array;v=m.version;for(let T=0,S=A.length;T<S;T+=3){const F=A[T+0],w=A[T+1],C=A[T+2];f.push(F,w,w,C,C,F)}}else if(g!==void 0){const A=g.array;v=g.version;for(let T=0,S=A.length/3-1;T<S;T+=3){const F=T+0,w=T+1,C=T+2;f.push(F,w,w,C,C,F)}}else return;const p=new(Mc(f)?wc:Ac)(f,1);p.version=v;const u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Mf(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,m){i.drawElements(n,m,r,f*a),e.update(m,n,1)}function l(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*a,g),e.update(m,n,g))}function h(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];e.update(p,n,1)}function d(f,m,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)l(f[u]/a,m[u],v[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,v,0,g);let u=0;for(let A=0;A<g;A++)u+=m[A]*v[A];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Sf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function yf(i,t,e){const n=new WeakMap,s=new re;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let y=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),g===!0&&(T=2),v===!0&&(T=3);let S=o.attributes.position.count*T,F=1;S>t.maxTextureSize&&(F=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const w=new Float32Array(S*F*4*d),C=new yc(w,S,F,d);C.type=Ze,C.needsUpdate=!0;const I=T*4;for(let M=0;M<d;M++){const R=p[M],G=u[M],z=A[M],W=S*F*4*M;for(let K=0;K<R.count;K++){const X=K*I;m===!0&&(s.fromBufferAttribute(R,K),w[W+X+0]=s.x,w[W+X+1]=s.y,w[W+X+2]=s.z,w[W+X+3]=0),g===!0&&(s.fromBufferAttribute(G,K),w[W+X+4]=s.x,w[W+X+5]=s.y,w[W+X+6]=s.z,w[W+X+7]=0),v===!0&&(s.fromBufferAttribute(z,K),w[W+X+8]=s.x,w[W+X+9]=s.y,w[W+X+10]=s.z,w[W+X+11]=z.itemSize===4?s.w:1)}}f={count:d,texture:C,size:new Ft(S,F)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];const g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Ef(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Ic extends ve{constructor(t,e,n,s,r,a,o,c,l,h=xi){if(h!==xi&&h!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xi&&(n=qn),n===void 0&&h===bi&&(n=Ti),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ee,this.minFilter=c!==void 0?c:Ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Uc=new ve,To=new Ic(1,1),Nc=new yc,Fc=new lh,Oc=new Lc,bo=[],Ao=[],wo=new Float32Array(16),Co=new Float32Array(9),Ro=new Float32Array(4);function Di(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=bo[s];if(r===void 0&&(r=new Float32Array(s),bo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function he(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xs(i,t){let e=Ao[t];e===void 0&&(e=new Int32Array(t),Ao[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2fv(this.addr,t),ue(e,t)}}function Af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;i.uniform3fv(this.addr,t),ue(e,t)}}function wf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4fv(this.addr,t),ue(e,t)}}function Cf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;Ro.set(n),i.uniformMatrix2fv(this.addr,!1,Ro),ue(e,n)}}function Rf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;Co.set(n),i.uniformMatrix3fv(this.addr,!1,Co),ue(e,n)}}function Pf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;wo.set(n),i.uniformMatrix4fv(this.addr,!1,wo),ue(e,n)}}function Lf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Df(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2iv(this.addr,t),ue(e,t)}}function If(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3iv(this.addr,t),ue(e,t)}}function Uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4iv(this.addr,t),ue(e,t)}}function Nf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ff(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2uiv(this.addr,t),ue(e,t)}}function Of(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3uiv(this.addr,t),ue(e,t)}}function Bf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4uiv(this.addr,t),ue(e,t)}}function kf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(To.compareFunction=xc,r=To):r=Uc,e.setTexture2D(t||r,s)}function zf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Fc,s)}function Gf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Oc,s)}function Vf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Nc,s)}function Hf(i){switch(i){case 5126:return Tf;case 35664:return bf;case 35665:return Af;case 35666:return wf;case 35674:return Cf;case 35675:return Rf;case 35676:return Pf;case 5124:case 35670:return Lf;case 35667:case 35671:return Df;case 35668:case 35672:return If;case 35669:case 35673:return Uf;case 5125:return Nf;case 36294:return Ff;case 36295:return Of;case 36296:return Bf;case 35678:case 36198:case 36298:case 36306:case 35682:return kf;case 35679:case 36299:case 36307:return zf;case 35680:case 36300:case 36308:case 36293:return Gf;case 36289:case 36303:case 36311:case 36292:return Vf}}function Wf(i,t){i.uniform1fv(this.addr,t)}function Xf(i,t){const e=Di(t,this.size,2);i.uniform2fv(this.addr,e)}function qf(i,t){const e=Di(t,this.size,3);i.uniform3fv(this.addr,e)}function Yf(i,t){const e=Di(t,this.size,4);i.uniform4fv(this.addr,e)}function $f(i,t){const e=Di(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zf(i,t){const e=Di(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Kf(i,t){const e=Di(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jf(i,t){i.uniform1iv(this.addr,t)}function Jf(i,t){i.uniform2iv(this.addr,t)}function Qf(i,t){i.uniform3iv(this.addr,t)}function tp(i,t){i.uniform4iv(this.addr,t)}function ep(i,t){i.uniform1uiv(this.addr,t)}function np(i,t){i.uniform2uiv(this.addr,t)}function ip(i,t){i.uniform3uiv(this.addr,t)}function sp(i,t){i.uniform4uiv(this.addr,t)}function rp(i,t,e){const n=this.cache,s=t.length,r=Xs(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Uc,r[a])}function ap(i,t,e){const n=this.cache,s=t.length,r=Xs(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Fc,r[a])}function op(i,t,e){const n=this.cache,s=t.length,r=Xs(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Oc,r[a])}function cp(i,t,e){const n=this.cache,s=t.length,r=Xs(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Nc,r[a])}function lp(i){switch(i){case 5126:return Wf;case 35664:return Xf;case 35665:return qf;case 35666:return Yf;case 35674:return $f;case 35675:return Zf;case 35676:return Kf;case 5124:case 35670:return jf;case 35667:case 35671:return Jf;case 35668:case 35672:return Qf;case 35669:case 35673:return tp;case 5125:return ep;case 36294:return np;case 36295:return ip;case 36296:return sp;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return cp}}class hp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hf(e.type)}}class up{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lp(e.type)}}class dp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Sr=/(\w+)(\])?(\[|\.)?/g;function Po(i,t){i.seq.push(t),i.map[t.id]=t}function fp(i,t,e){const n=i.name,s=n.length;for(Sr.lastIndex=0;;){const r=Sr.exec(n),a=Sr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Po(e,l===void 0?new hp(o,i,t):new up(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new dp(o),Po(e,d)),e=d}}}class Fs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);fp(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Lo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const pp=37297;let mp=0;function gp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Do=new Pt;function _p(i){Vt._getMatrix(Do,Vt.workingColorSpace,i);const t=`mat3( ${Do.elements.map(e=>e.toFixed(4))} )`;switch(Vt.getTransfer(i)){case Ws:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Io(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+gp(i.getShaderSource(t),a)}else return s}function vp(i,t){const e=_p(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xp(i,t){let e;switch(t){case Ml:e="Linear";break;case Sl:e="Reinhard";break;case yl:e="Cineon";break;case El:e="ACESFilmic";break;case bl:e="AgX";break;case Al:e="Neutral";break;case Tl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ss=new U;function Mp(){Vt.getLuminanceCoefficients(Ss);const i=Ss.x.toFixed(4),t=Ss.y.toFixed(4),e=Ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wi).join(`
`)}function yp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ep(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Wi(i){return i!==""}function Uo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function No(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ua(i){return i.replace(Tp,Ap)}const bp=new Map;function Ap(i,t){let e=Dt[t];if(e===void 0){const n=bp.get(t);if(n!==void 0)e=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ua(e)}const wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fo(i){return i.replace(wp,Cp)}function Cp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Oo(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===sn&&(t="SHADOWMAP_TYPE_VSM"),t}function Pp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yi:case Ei:t="ENVMAP_TYPE_CUBE";break;case Hs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ei:t="ENVMAP_MODE_REFRACTION";break}return t}function Dp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ma:t="ENVMAP_BLENDING_MULTIPLY";break;case vl:t="ENVMAP_BLENDING_MIX";break;case xl:t="ENVMAP_BLENDING_ADD";break}return t}function Ip(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Up(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Rp(e),l=Pp(e),h=Lp(e),d=Dp(e),f=Ip(e),m=Sp(e),g=yp(r),v=s.createProgram();let p,u,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wi).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wi).join(`
`),u.length>0&&(u+=`
`)):(p=[Oo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),u=[Oo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==wn?xp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,vp("linearToOutputTexel",e.outputColorSpace),Mp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wi).join(`
`)),a=ua(a),a=Uo(a,e),a=No(a,e),o=ua(o),o=Uo(o,e),o=No(o,e),a=Fo(a),o=Fo(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===$a?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=A+p+a,S=A+u+o,F=Lo(s,s.VERTEX_SHADER,T),w=Lo(s,s.FRAGMENT_SHADER,S);s.attachShader(v,F),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(R){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(v).trim(),z=s.getShaderInfoLog(F).trim(),W=s.getShaderInfoLog(w).trim();let K=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,F,w);else{const tt=Io(s,F,"vertex"),H=Io(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+tt+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||W==="")&&(X=!1);X&&(R.diagnostics={runnable:K,programLog:G,vertexShader:{log:z,prefix:p},fragmentShader:{log:W,prefix:u}})}s.deleteShader(F),s.deleteShader(w),I=new Fs(s,v),y=Ep(s,v)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,pp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mp++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=w,this}let Np=0;class Fp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Op(t),e.set(t,n)),n}}class Op{constructor(t){this.id=Np++,this.code=t,this.usedTimes=0}}function Bp(i,t,e,n,s,r,a){const o=new Tc,c=new Fp,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,M,R,G,z){const W=G.fog,K=z.geometry,X=y.isMeshStandardMaterial?G.environment:null,tt=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),H=tt&&tt.mapping===Hs?tt.image.height:null,st=g[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Mt=ht!==void 0?ht.length:0;let Ut=0;K.morphAttributes.position!==void 0&&(Ut=1),K.morphAttributes.normal!==void 0&&(Ut=2),K.morphAttributes.color!==void 0&&(Ut=3);let jt,Y,et,_t;if(st){const qt=$e[st];jt=qt.vertexShader,Y=qt.fragmentShader}else jt=y.vertexShader,Y=y.fragmentShader,c.update(y),et=c.getVertexShaderID(y),_t=c.getFragmentShaderID(y);const rt=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),wt=z.isInstancedMesh===!0,Nt=z.isBatchedMesh===!0,ie=!!y.map,zt=!!y.matcap,oe=!!tt,N=!!y.aoMap,De=!!y.lightMap,Ot=!!y.bumpMap,Bt=!!y.normalMap,yt=!!y.displacementMap,te=!!y.emissiveMap,St=!!y.metalnessMap,E=!!y.roughnessMap,_=y.anisotropy>0,O=y.clearcoat>0,$=y.dispersion>0,j=y.iridescence>0,q=y.sheen>0,vt=y.transmission>0,at=_&&!!y.anisotropyMap,ut=O&&!!y.clearcoatMap,Gt=O&&!!y.clearcoatNormalMap,J=O&&!!y.clearcoatRoughnessMap,dt=j&&!!y.iridescenceMap,Et=j&&!!y.iridescenceThicknessMap,bt=q&&!!y.sheenColorMap,ft=q&&!!y.sheenRoughnessMap,kt=!!y.specularMap,Lt=!!y.specularColorMap,Jt=!!y.specularIntensityMap,P=vt&&!!y.transmissionMap,it=vt&&!!y.thicknessMap,V=!!y.gradientMap,Z=!!y.alphaMap,lt=y.alphaTest>0,ot=!!y.alphaHash,Ct=!!y.extensions;let se=wn;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(se=i.toneMapping);const pe={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:jt,fragmentShader:Y,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:_t,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Nt,batchingColor:Nt&&z._colorsTexture!==null,instancing:wt,instancingColor:wt&&z.instanceColor!==null,instancingMorph:wt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:wi,alphaToCoverage:!!y.alphaToCoverage,map:ie,matcap:zt,envMap:oe,envMapMode:oe&&tt.mapping,envMapCubeUVHeight:H,aoMap:N,lightMap:De,bumpMap:Ot,normalMap:Bt,displacementMap:f&&yt,emissiveMap:te,normalMapObjectSpace:Bt&&y.normalMapType===Pl,normalMapTangentSpace:Bt&&y.normalMapType===Ea,metalnessMap:St,roughnessMap:E,anisotropy:_,anisotropyMap:at,clearcoat:O,clearcoatMap:ut,clearcoatNormalMap:Gt,clearcoatRoughnessMap:J,dispersion:$,iridescence:j,iridescenceMap:dt,iridescenceThicknessMap:Et,sheen:q,sheenColorMap:bt,sheenRoughnessMap:ft,specularMap:kt,specularColorMap:Lt,specularIntensityMap:Jt,transmission:vt,transmissionMap:P,thicknessMap:it,gradientMap:V,opaque:y.transparent===!1&&y.blending===vi&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:lt,alphaHash:ot,combine:y.combine,mapUv:ie&&v(y.map.channel),aoMapUv:N&&v(y.aoMap.channel),lightMapUv:De&&v(y.lightMap.channel),bumpMapUv:Ot&&v(y.bumpMap.channel),normalMapUv:Bt&&v(y.normalMap.channel),displacementMapUv:yt&&v(y.displacementMap.channel),emissiveMapUv:te&&v(y.emissiveMap.channel),metalnessMapUv:St&&v(y.metalnessMap.channel),roughnessMapUv:E&&v(y.roughnessMap.channel),anisotropyMapUv:at&&v(y.anisotropyMap.channel),clearcoatMapUv:ut&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:ft&&v(y.sheenRoughnessMap.channel),specularMapUv:kt&&v(y.specularMap.channel),specularColorMapUv:Lt&&v(y.specularColorMap.channel),specularIntensityMapUv:Jt&&v(y.specularIntensityMap.channel),transmissionMapUv:P&&v(y.transmissionMap.channel),thicknessMapUv:it&&v(y.thicknessMap.channel),alphaMapUv:Z&&v(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Bt||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(ie||Z),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Tt,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Ut,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,decodeVideoTexture:ie&&y.map.isVideoTexture===!0&&Vt.getTransfer(y.map.colorSpace)===Zt,decodeVideoTextureEmissive:te&&y.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(y.emissiveMap.colorSpace)===Zt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Fe,flipSided:y.side===be,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ct&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&y.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pe.vertexUv1s=l.has(1),pe.vertexUv2s=l.has(2),pe.vertexUv3s=l.has(3),l.clear(),pe}function u(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)M.push(R),M.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(A(M,y),T(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function A(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function T(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const M=g[y.type];let R;if(M){const G=$e[M];R=Rc.clone(G.uniforms)}else R=y.uniforms;return R}function F(y,M){let R;for(let G=0,z=h.length;G<z;G++){const W=h[G];if(W.cacheKey===M){R=W,++R.usedTimes;break}}return R===void 0&&(R=new Up(i,M,y,r),h.push(R)),R}function w(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function C(y){c.remove(y)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:F,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:I}}function kp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function zp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Bo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ko(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,m,g,v,p){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=v,u.group=p),t++,u}function o(d,f,m,g,v,p){const u=a(d,f,m,g,v,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function c(d,f,m,g,v,p){const u=a(d,f,m,g,v,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function l(d,f){e.length>1&&e.sort(d||zp),n.length>1&&n.sort(f||Bo),s.length>1&&s.sort(f||Bo)}function h(){for(let d=t,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Gp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new ko,i.set(n,[a])):s>=r.length?(a=new ko,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new It};break;case"SpotLight":e={position:new U,direction:new U,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Hp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Wp=0;function Xp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qp(i){const t=new Vp,e=Hp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new $t,a=new $t;function o(l){let h=0,d=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,g=0,v=0,p=0,u=0,A=0,T=0,S=0,F=0,w=0,C=0;l.sort(Xp);for(let y=0,M=l.length;y<M;y++){const R=l[y],G=R.color,z=R.intensity,W=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=G.r*z,d+=G.g*z,f+=G.b*z;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],z);C++}else if(R.isDirectionalLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const tt=R.shadow,H=e.get(R);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=R.shadow.matrix,A++}n.directional[m]=X,m++}else if(R.isSpotLight){const X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(G).multiplyScalar(z),X.distance=W,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[v]=X;const tt=R.shadow;if(R.map&&(n.spotLightMap[F]=R.map,F++,tt.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[v]=tt.matrix,R.castShadow){const H=e.get(R);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=K,S++}v++}else if(R.isRectAreaLight){const X=t.get(R);X.color.copy(G).multiplyScalar(z),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=X,p++}else if(R.isPointLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const tt=R.shadow,H=e.get(R);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,H.shadowCameraNear=tt.camera.near,H.shadowCameraFar=tt.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=R.shadow.matrix,T++}n.point[g]=X,g++}else if(R.isHemisphereLight){const X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(z),X.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[u]=X,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==p||I.hemiLength!==u||I.numDirectionalShadows!==A||I.numPointShadows!==T||I.numSpotShadows!==S||I.numSpotMaps!==F||I.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+F-w,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,I.directionalLength=m,I.pointLength=g,I.spotLength=v,I.rectAreaLength=p,I.hemiLength=u,I.numDirectionalShadows=A,I.numPointShadows=T,I.numSpotShadows=S,I.numSpotMaps=F,I.numLightProbes=C,n.version=Wp++)}function c(l,h){let d=0,f=0,m=0,g=0,v=0;const p=h.matrixWorldInverse;for(let u=0,A=l.length;u<A;u++){const T=l[u];if(T.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(T.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(T.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(p),v++}}}return{setup:o,setupView:c,state:n}}function zo(i){const t=new qp(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Yp(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new zo(i),t.set(s,[o])):r>=a.length?(o=new zo(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class $p extends $n{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Cl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zp extends $n{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Kp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jp=`uniform sampler2D shadow_pass;
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
}`;function Jp(i,t,e){let n=new ba;const s=new Ft,r=new Ft,a=new re,o=new $p({depthPacking:Rl}),c=new Zp,l={},h=e.maxTextureSize,d={[le]:be,[be]:le,[Fe]:Fe},f=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:Kp,fragmentShader:jp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Kt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cc;let u=this.type;this.render=function(w,C,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),G=i.state;G.setBlending(An),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=u!==sn&&this.type===sn,W=u===sn&&this.type!==sn;for(let K=0,X=w.length;K<X;K++){const tt=w[K],H=tt.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const st=H.getFrameExtents();if(s.multiply(st),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||z===!0||W===!0){const Mt=this.type!==sn?{minFilter:Ee,magFilter:Ee}:{};H.map!==null&&H.map.dispose(),H.map=new Yn(s.x,s.y,Mt),H.map.texture.name=tt.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ht=H.getViewportCount();for(let Mt=0;Mt<ht;Mt++){const Ut=H.getViewport(Mt);a.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),G.viewport(a),H.updateMatrices(tt,Mt),n=H.getFrustum(),S(C,I,H.camera,tt,this.type)}H.isPointLightShadow!==!0&&this.type===sn&&A(H,I),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(y,M,R)};function A(w,C){const I=t.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Yn(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,I,f,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,I,m,v,null)}function T(w,C,I,y){let M=null;const R=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)M=R;else if(M=I.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=M.uuid,z=C.uuid;let W=l[G];W===void 0&&(W={},l[G]=W);let K=W[z];K===void 0&&(K=M.clone(),W[z]=K,C.addEventListener("dispose",F)),M=K}if(M.visible=C.visible,M.wireframe=C.wireframe,y===sn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=i.properties.get(M);G.light=I}return M}function S(w,C,I,y,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===sn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const z=t.update(w),W=w.material;if(Array.isArray(W)){const K=z.groups;for(let X=0,tt=K.length;X<tt;X++){const H=K[X],st=W[H.materialIndex];if(st&&st.visible){const ht=T(w,st,y,M);w.onBeforeShadow(i,w,C,I,z,ht,H),i.renderBufferDirect(I,null,z,ht,w,H),w.onAfterShadow(i,w,C,I,z,ht,H)}}}else if(W.visible){const K=T(w,W,y,M);w.onBeforeShadow(i,w,C,I,z,K,null),i.renderBufferDirect(I,null,z,K,w,null),w.onAfterShadow(i,w,C,I,z,K,null)}}const G=w.children;for(let z=0,W=G.length;z<W;z++)S(G[z],C,I,y,M)}function F(w){w.target.removeEventListener("dispose",F);for(const I in l){const y=l[I],M=w.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const Qp={[Rr]:Pr,[Lr]:Ur,[Dr]:Nr,[Si]:Ir,[Pr]:Rr,[Ur]:Lr,[Nr]:Dr,[Ir]:Si};function tm(i,t){function e(){let P=!1;const it=new re;let V=null;const Z=new re(0,0,0,0);return{setMask:function(lt){V!==lt&&!P&&(i.colorMask(lt,lt,lt,lt),V=lt)},setLocked:function(lt){P=lt},setClear:function(lt,ot,Ct,se,pe){pe===!0&&(lt*=se,ot*=se,Ct*=se),it.set(lt,ot,Ct,se),Z.equals(it)===!1&&(i.clearColor(lt,ot,Ct,se),Z.copy(it))},reset:function(){P=!1,V=null,Z.set(-1,0,0,0)}}}function n(){let P=!1,it=!1,V=null,Z=null,lt=null;return{setReversed:function(ot){if(it!==ot){const Ct=t.get("EXT_clip_control");it?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT);const se=lt;lt=null,this.setClear(se)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?rt(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(ot){V!==ot&&!P&&(i.depthMask(ot),V=ot)},setFunc:function(ot){if(it&&(ot=Qp[ot]),Z!==ot){switch(ot){case Rr:i.depthFunc(i.NEVER);break;case Pr:i.depthFunc(i.ALWAYS);break;case Lr:i.depthFunc(i.LESS);break;case Si:i.depthFunc(i.LEQUAL);break;case Dr:i.depthFunc(i.EQUAL);break;case Ir:i.depthFunc(i.GEQUAL);break;case Ur:i.depthFunc(i.GREATER);break;case Nr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ot}},setLocked:function(ot){P=ot},setClear:function(ot){lt!==ot&&(it&&(ot=1-ot),i.clearDepth(ot),lt=ot)},reset:function(){P=!1,V=null,Z=null,lt=null,it=!1}}}function s(){let P=!1,it=null,V=null,Z=null,lt=null,ot=null,Ct=null,se=null,pe=null;return{setTest:function(qt){P||(qt?rt(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(qt){it!==qt&&!P&&(i.stencilMask(qt),it=qt)},setFunc:function(qt,Be,Ke){(V!==qt||Z!==Be||lt!==Ke)&&(i.stencilFunc(qt,Be,Ke),V=qt,Z=Be,lt=Ke)},setOp:function(qt,Be,Ke){(ot!==qt||Ct!==Be||se!==Ke)&&(i.stencilOp(qt,Be,Ke),ot=qt,Ct=Be,se=Ke)},setLocked:function(qt){P=qt},setClear:function(qt){pe!==qt&&(i.clearStencil(qt),pe=qt)},reset:function(){P=!1,it=null,V=null,Z=null,lt=null,ot=null,Ct=null,se=null,pe=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,m=[],g=null,v=!1,p=null,u=null,A=null,T=null,S=null,F=null,w=null,C=new It(0,0,0),I=0,y=!1,M=null,R=null,G=null,z=null,W=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,tt=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=tt>=1):H.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=tt>=2);let st=null,ht={};const Mt=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),jt=new re().fromArray(Mt),Y=new re().fromArray(Ut);function et(P,it,V,Z){const lt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(P,ot),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<V;Ct++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(it+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ot}const _t={};_t[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Si),Ot(!1),Bt(Va),rt(i.CULL_FACE),N(An);function rt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Tt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function wt(P,it){return d[P]!==it?(i.bindFramebuffer(P,it),d[P]=it,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=it),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Nt(P,it){let V=m,Z=!1;if(P){V=f.get(it),V===void 0&&(V=[],f.set(it,V));const lt=P.textures;if(V.length!==lt.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Ct=lt.length;ot<Ct;ot++)V[ot]=i.COLOR_ATTACHMENT0+ot;V.length=lt.length,Z=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,Z=!0);Z&&i.drawBuffers(V)}function ie(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const zt={[Bn]:i.FUNC_ADD,[el]:i.FUNC_SUBTRACT,[nl]:i.FUNC_REVERSE_SUBTRACT};zt[il]=i.MIN,zt[sl]=i.MAX;const oe={[rl]:i.ZERO,[al]:i.ONE,[ol]:i.SRC_COLOR,[wr]:i.SRC_ALPHA,[fl]:i.SRC_ALPHA_SATURATE,[ul]:i.DST_COLOR,[ll]:i.DST_ALPHA,[cl]:i.ONE_MINUS_SRC_COLOR,[Cr]:i.ONE_MINUS_SRC_ALPHA,[dl]:i.ONE_MINUS_DST_COLOR,[hl]:i.ONE_MINUS_DST_ALPHA,[pl]:i.CONSTANT_COLOR,[ml]:i.ONE_MINUS_CONSTANT_COLOR,[gl]:i.CONSTANT_ALPHA,[_l]:i.ONE_MINUS_CONSTANT_ALPHA};function N(P,it,V,Z,lt,ot,Ct,se,pe,qt){if(P===An){v===!0&&(Tt(i.BLEND),v=!1);return}if(v===!1&&(rt(i.BLEND),v=!0),P!==tl){if(P!==p||qt!==y){if((u!==Bn||S!==Bn)&&(i.blendEquation(i.FUNC_ADD),u=Bn,S=Bn),qt)switch(P){case vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ha:i.blendFunc(i.ONE,i.ONE);break;case Wa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ha:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}A=null,T=null,F=null,w=null,C.set(0,0,0),I=0,p=P,y=qt}return}lt=lt||it,ot=ot||V,Ct=Ct||Z,(it!==u||lt!==S)&&(i.blendEquationSeparate(zt[it],zt[lt]),u=it,S=lt),(V!==A||Z!==T||ot!==F||Ct!==w)&&(i.blendFuncSeparate(oe[V],oe[Z],oe[ot],oe[Ct]),A=V,T=Z,F=ot,w=Ct),(se.equals(C)===!1||pe!==I)&&(i.blendColor(se.r,se.g,se.b,pe),C.copy(se),I=pe),p=P,y=!1}function De(P,it){P.side===Fe?Tt(i.CULL_FACE):rt(i.CULL_FACE);let V=P.side===be;it&&(V=!V),Ot(V),P.blending===vi&&P.transparent===!1?N(An):N(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const Z=P.stencilWrite;o.setTest(Z),Z&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),te(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(P){M!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),M=P)}function Bt(P){P!==jc?(rt(i.CULL_FACE),P!==R&&(P===Va?i.cullFace(i.BACK):P===Jc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),R=P}function yt(P){P!==G&&(X&&i.lineWidth(P),G=P)}function te(P,it,V){P?(rt(i.POLYGON_OFFSET_FILL),(z!==it||W!==V)&&(i.polygonOffset(it,V),z=it,W=V)):Tt(i.POLYGON_OFFSET_FILL)}function St(P){P?rt(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function E(P){P===void 0&&(P=i.TEXTURE0+K-1),st!==P&&(i.activeTexture(P),st=P)}function _(P,it,V){V===void 0&&(st===null?V=i.TEXTURE0+K-1:V=st);let Z=ht[V];Z===void 0&&(Z={type:void 0,texture:void 0},ht[V]=Z),(Z.type!==P||Z.texture!==it)&&(st!==V&&(i.activeTexture(V),st=V),i.bindTexture(P,it||_t[P]),Z.type=P,Z.texture=it)}function O(){const P=ht[st];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function bt(P){jt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),jt.copy(P))}function ft(P){Y.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Y.copy(P))}function kt(P,it){let V=l.get(it);V===void 0&&(V=new WeakMap,l.set(it,V));let Z=V.get(P);Z===void 0&&(Z=i.getUniformBlockIndex(it,P.name),V.set(P,Z))}function Lt(P,it){const Z=l.get(it).get(P);c.get(it)!==Z&&(i.uniformBlockBinding(it,Z,P.__bindingPointIndex),c.set(it,Z))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ht={},d={},f=new WeakMap,m=[],g=null,v=!1,p=null,u=null,A=null,T=null,S=null,F=null,w=null,C=new It(0,0,0),I=0,y=!1,M=null,R=null,G=null,z=null,W=null,jt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Tt,bindFramebuffer:wt,drawBuffers:Nt,useProgram:ie,setBlending:N,setMaterial:De,setFlipSided:Ot,setCullFace:Bt,setLineWidth:yt,setPolygonOffset:te,setScissorTest:St,activeTexture:E,bindTexture:_,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:j,texImage2D:dt,texImage3D:Et,updateUBOMapping:kt,uniformBlockBinding:Lt,texStorage2D:Gt,texStorage3D:J,texSubImage2D:q,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:ut,scissor:bt,viewport:ft,reset:Jt}}function Go(i,t,e,n){const s=em(n);switch(e){case fc:return i*t;case mc:return i*t;case gc:return i*t*2;case xa:return i*t/s.components*s.byteLength;case Ma:return i*t/s.components*s.byteLength;case _c:return i*t*2/s.components*s.byteLength;case Sa:return i*t*2/s.components*s.byteLength;case pc:return i*t*3/s.components*s.byteLength;case We:return i*t*4/s.components*s.byteLength;case ya:return i*t*4/s.components*s.byteLength;case Ls:case Ds:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Is:case Us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zr:case Vr:return Math.max(i,16)*Math.max(t,8)/4;case kr:case Gr:return Math.max(i,8)*Math.max(t,8)/2;case Hr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case $r:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Zr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Kr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case jr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Jr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Qr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ta:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ea:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case na:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ia:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case sa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ra:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ns:case aa:case oa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vc:case ca:return Math.ceil(i/4)*Math.ceil(t/4)*8;case la:case ha:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function em(i){switch(i){case dn:case hc:return{byteLength:1,components:1};case Ki:case uc:case Ji:return{byteLength:2,components:1};case _a:case va:return{byteLength:2,components:4};case qn:case ga:case Ze:return{byteLength:4,components:1};case dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function nm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ft,h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(E){}function g(E,_){return m?new OffscreenCanvas(E,_):Bs("canvas")}function v(E,_,O){let $=1;const j=St(E);if((j.width>O||j.height>O)&&($=O/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap||typeof VideoFrame!="undefined"&&E instanceof VideoFrame){const q=Math.floor($*j.width),vt=Math.floor($*j.height);d===void 0&&(d=g(q,vt));const at=_?g(q,vt):d;return at.width=q,at.height=vt,at.getContext("2d").drawImage(E,0,0,q,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+vt+")."),at}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function p(E){return E.generateMipmaps}function u(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,_,O,$,j=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=_;if(_===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),_===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),_===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),_===i.RGBA){const vt=j?Ws:Vt.getTransfer($);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=vt===Zt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function S(E,_){let O;return E?_===null||_===qn||_===Ti?O=i.DEPTH24_STENCIL8:_===Ze?O=i.DEPTH32F_STENCIL8:_===Ki&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===qn||_===Ti?O=i.DEPTH_COMPONENT24:_===Ze?O=i.DEPTH_COMPONENT32F:_===Ki&&(O=i.DEPTH_COMPONENT16),O}function F(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ee&&E.minFilter!==Oe?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function w(E){const _=E.target;_.removeEventListener("dispose",w),I(_),_.isVideoTexture&&h.delete(_)}function C(E){const _=E.target;_.removeEventListener("dispose",C),M(_)}function I(E){const _=n.get(E);if(_.__webglInit===void 0)return;const O=E.source,$=f.get(O);if($){const j=$[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(E),Object.keys($).length===0&&f.delete(O)}n.remove(E)}function y(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const O=E.source,$=f.get(O);delete $[_.__cacheKey],a.memory.textures--}function M(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let j=0;j<_.__webglFramebuffer[$].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[$][j]);else i.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)i.deleteFramebuffer(_.__webglFramebuffer[$]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=E.textures;for(let $=0,j=O.length;$<j;$++){const q=n.get(O[$]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(O[$])}n.remove(E)}let R=0;function G(){R=0}function z(){const E=R;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),R+=1,E}function W(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function K(E,_){const O=n.get(E);if(E.isVideoTexture&&yt(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,E,_);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function X(E,_){const O=n.get(E);if(E.version>0&&O.__version!==E.version){Y(O,E,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function tt(E,_){const O=n.get(E);if(E.version>0&&O.__version!==E.version){Y(O,E,_);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function H(E,_){const O=n.get(E);if(E.version>0&&O.__version!==E.version){et(O,E,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const st={[un]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[Br]:i.MIRRORED_REPEAT},ht={[Ee]:i.NEAREST,[wl]:i.NEAREST_MIPMAP_NEAREST,[es]:i.NEAREST_MIPMAP_LINEAR,[Oe]:i.LINEAR,[Zs]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},Mt={[Ll]:i.NEVER,[Ol]:i.ALWAYS,[Dl]:i.LESS,[xc]:i.LEQUAL,[Il]:i.EQUAL,[Fl]:i.GEQUAL,[Ul]:i.GREATER,[Nl]:i.NOTEQUAL};function Ut(E,_){if(_.type===Ze&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Oe||_.magFilter===Zs||_.magFilter===es||_.magFilter===Hn||_.minFilter===Oe||_.minFilter===Zs||_.minFilter===es||_.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,st[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,st[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,st[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ht[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ht[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Mt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ee||_.minFilter!==es&&_.minFilter!==Hn||_.type===Ze&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function jt(E,_){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",w));const $=_.source;let j=f.get($);j===void 0&&(j={},f.set($,j));const q=W(_);if(q!==E.__cacheKey){j[q]===void 0&&(j[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[q].usedTimes++;const vt=j[E.__cacheKey];vt!==void 0&&(j[E.__cacheKey].usedTimes--,vt.usedTimes===0&&y(_)),E.__cacheKey=q,E.__webglTexture=j[q].texture}return O}function Y(E,_,O){let $=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=i.TEXTURE_3D);const j=jt(E,_),q=_.source;e.bindTexture($,E.__webglTexture,i.TEXTURE0+O);const vt=n.get(q);if(q.version!==vt.__version||j===!0){e.activeTexture(i.TEXTURE0+O);const at=Vt.getPrimaries(Vt.workingColorSpace),ut=_.colorSpace===bn?null:Vt.getPrimaries(_.colorSpace),Gt=_.colorSpace===bn||at===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let J=v(_.image,!1,s.maxTextureSize);J=te(_,J);const dt=r.convert(_.format,_.colorSpace),Et=r.convert(_.type);let bt=T(_.internalFormat,dt,Et,_.colorSpace,_.isVideoTexture);Ut($,_);let ft;const kt=_.mipmaps,Lt=_.isVideoTexture!==!0,Jt=vt.__version===void 0||j===!0,P=q.dataReady,it=F(_,J);if(_.isDepthTexture)bt=S(_.format===bi,_.type),Jt&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,bt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,bt,J.width,J.height,0,dt,Et,null));else if(_.isDataTexture)if(kt.length>0){Lt&&Jt&&e.texStorage2D(i.TEXTURE_2D,it,bt,kt[0].width,kt[0].height);for(let V=0,Z=kt.length;V<Z;V++)ft=kt[V],Lt?P&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,ft.width,ft.height,dt,Et,ft.data):e.texImage2D(i.TEXTURE_2D,V,bt,ft.width,ft.height,0,dt,Et,ft.data);_.generateMipmaps=!1}else Lt?(Jt&&e.texStorage2D(i.TEXTURE_2D,it,bt,J.width,J.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,dt,Et,J.data)):e.texImage2D(i.TEXTURE_2D,0,bt,J.width,J.height,0,dt,Et,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Lt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,bt,kt[0].width,kt[0].height,J.depth);for(let V=0,Z=kt.length;V<Z;V++)if(ft=kt[V],_.format!==We)if(dt!==null)if(Lt){if(P)if(_.layerUpdates.size>0){const lt=Go(ft.width,ft.height,_.format,_.type);for(const ot of _.layerUpdates){const Ct=ft.data.subarray(ot*lt/ft.data.BYTES_PER_ELEMENT,(ot+1)*lt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ot,ft.width,ft.height,1,dt,Ct)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,ft.width,ft.height,J.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,bt,ft.width,ft.height,J.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,ft.width,ft.height,J.depth,dt,Et,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,bt,ft.width,ft.height,J.depth,0,dt,Et,ft.data)}else{Lt&&Jt&&e.texStorage2D(i.TEXTURE_2D,it,bt,kt[0].width,kt[0].height);for(let V=0,Z=kt.length;V<Z;V++)ft=kt[V],_.format!==We?dt!==null?Lt?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,V,bt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?P&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,ft.width,ft.height,dt,Et,ft.data):e.texImage2D(i.TEXTURE_2D,V,bt,ft.width,ft.height,0,dt,Et,ft.data)}else if(_.isDataArrayTexture)if(Lt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,bt,J.width,J.height,J.depth),P)if(_.layerUpdates.size>0){const V=Go(J.width,J.height,_.format,_.type);for(const Z of _.layerUpdates){const lt=J.data.subarray(Z*V/J.data.BYTES_PER_ELEMENT,(Z+1)*V/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,J.width,J.height,1,dt,Et,lt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,dt,Et,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,J.width,J.height,J.depth,0,dt,Et,J.data);else if(_.isData3DTexture)Lt?(Jt&&e.texStorage3D(i.TEXTURE_3D,it,bt,J.width,J.height,J.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,dt,Et,J.data)):e.texImage3D(i.TEXTURE_3D,0,bt,J.width,J.height,J.depth,0,dt,Et,J.data);else if(_.isFramebufferTexture){if(Jt)if(Lt)e.texStorage2D(i.TEXTURE_2D,it,bt,J.width,J.height);else{let V=J.width,Z=J.height;for(let lt=0;lt<it;lt++)e.texImage2D(i.TEXTURE_2D,lt,bt,V,Z,0,dt,Et,null),V>>=1,Z>>=1}}else if(kt.length>0){if(Lt&&Jt){const V=St(kt[0]);e.texStorage2D(i.TEXTURE_2D,it,bt,V.width,V.height)}for(let V=0,Z=kt.length;V<Z;V++)ft=kt[V],Lt?P&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,dt,Et,ft):e.texImage2D(i.TEXTURE_2D,V,bt,dt,Et,ft);_.generateMipmaps=!1}else if(Lt){if(Jt){const V=St(J);e.texStorage2D(i.TEXTURE_2D,it,bt,V.width,V.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Et,J)}else e.texImage2D(i.TEXTURE_2D,0,bt,dt,Et,J);p(_)&&u($),vt.__version=q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function et(E,_,O){if(_.image.length!==6)return;const $=jt(E,_),j=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);const q=n.get(j);if(j.version!==q.__version||$===!0){e.activeTexture(i.TEXTURE0+O);const vt=Vt.getPrimaries(Vt.workingColorSpace),at=_.colorSpace===bn?null:Vt.getPrimaries(_.colorSpace),ut=_.colorSpace===bn||vt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Gt=_.isCompressedTexture||_.image[0].isCompressedTexture,J=_.image[0]&&_.image[0].isDataTexture,dt=[];for(let Z=0;Z<6;Z++)!Gt&&!J?dt[Z]=v(_.image[Z],!0,s.maxCubemapSize):dt[Z]=J?_.image[Z].image:_.image[Z],dt[Z]=te(_,dt[Z]);const Et=dt[0],bt=r.convert(_.format,_.colorSpace),ft=r.convert(_.type),kt=T(_.internalFormat,bt,ft,_.colorSpace),Lt=_.isVideoTexture!==!0,Jt=q.__version===void 0||$===!0,P=j.dataReady;let it=F(_,Et);Ut(i.TEXTURE_CUBE_MAP,_);let V;if(Gt){Lt&&Jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,kt,Et.width,Et.height);for(let Z=0;Z<6;Z++){V=dt[Z].mipmaps;for(let lt=0;lt<V.length;lt++){const ot=V[lt];_.format!==We?bt!==null?Lt?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,ot.width,ot.height,bt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,kt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,ot.width,ot.height,bt,ft,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,kt,ot.width,ot.height,0,bt,ft,ot.data)}}}else{if(V=_.mipmaps,Lt&&Jt){V.length>0&&it++;const Z=St(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,kt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(J){Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,dt[Z].width,dt[Z].height,bt,ft,dt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,dt[Z].width,dt[Z].height,0,bt,ft,dt[Z].data);for(let lt=0;lt<V.length;lt++){const Ct=V[lt].image[Z].image;Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Ct.width,Ct.height,bt,ft,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,kt,Ct.width,Ct.height,0,bt,ft,Ct.data)}}else{Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,bt,ft,dt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,bt,ft,dt[Z]);for(let lt=0;lt<V.length;lt++){const ot=V[lt];Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,bt,ft,ot.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,kt,bt,ft,ot.image[Z])}}}p(_)&&u(i.TEXTURE_CUBE_MAP),q.__version=j.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function _t(E,_,O,$,j,q){const vt=r.convert(O.format,O.colorSpace),at=r.convert(O.type),ut=T(O.internalFormat,vt,at,O.colorSpace),Gt=n.get(_),J=n.get(O);if(J.__renderTarget=_,!Gt.__hasExternalTextures){const dt=Math.max(1,_.width>>q),Et=Math.max(1,_.height>>q);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,q,ut,dt,Et,_.depth,0,vt,at,null):e.texImage2D(j,q,ut,dt,Et,0,vt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Bt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,j,J.__webglTexture,0,Ot(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,j,J.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(E,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const $=_.depthTexture,j=$&&$.isDepthTexture?$.type:null,q=S(_.stencilBuffer,j),vt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Ot(_);Bt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,q,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,q,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,E)}else{const $=_.textures;for(let j=0;j<$.length;j++){const q=$[j],vt=r.convert(q.format,q.colorSpace),at=r.convert(q.type),ut=T(q.internalFormat,vt,at,q.colorSpace),Gt=Ot(_);O&&Bt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,ut,_.width,_.height):Bt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,ut,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ut,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(_.depthTexture);$.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);const j=$.__webglTexture,q=Ot(_);if(_.depthTexture.format===xi)Bt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(_.depthTexture.format===bi)Bt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function wt(E){const _=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=$}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Tt(_.__webglFramebuffer,E)}else if(O){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=i.createRenderbuffer(),rt(_.__webglDepthbuffer[$],E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),rt(_.__webglDepthbuffer,E,!1);else{const $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(E,_,O){const $=n.get(E);_!==void 0&&_t($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&wt(E)}function ie(E){const _=E.texture,O=n.get(E),$=n.get(_);E.addEventListener("dispose",C);const j=E.textures,q=E.isWebGLCubeRenderTarget===!0,vt=j.length>1;if(vt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=_.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[at]=[];for(let ut=0;ut<_.mipmaps.length;ut++)O.__webglFramebuffer[at][ut]=i.createFramebuffer()}else O.__webglFramebuffer[at]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let at=0;at<_.mipmaps.length;at++)O.__webglFramebuffer[at]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(vt)for(let at=0,ut=j.length;at<ut;at++){const Gt=n.get(j[at]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Bt(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){const ut=j[at];O.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[at]);const Gt=r.convert(ut.format,ut.colorSpace),J=r.convert(ut.type),dt=T(ut.internalFormat,Gt,J,ut.colorSpace,E.isXRRenderTarget===!0),Et=Ot(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,dt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,O.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,_);for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)_t(O.__webglFramebuffer[at][ut],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else _t(O.__webglFramebuffer[at],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(_)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,ut=j.length;at<ut;at++){const Gt=j[at],J=n.get(Gt);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),Ut(i.TEXTURE_2D,Gt),_t(O.__webglFramebuffer,E,Gt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),p(Gt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,$.__webglTexture),Ut(at,_),_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)_t(O.__webglFramebuffer[ut],E,_,i.COLOR_ATTACHMENT0,at,ut);else _t(O.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,at,0);p(_)&&u(at),e.unbindTexture()}E.depthBuffer&&wt(E)}function zt(E){const _=E.textures;for(let O=0,$=_.length;O<$;O++){const j=_[O];if(p(j)){const q=A(E),vt=n.get(j).__webglTexture;e.bindTexture(q,vt),u(q),e.unbindTexture()}}}const oe=[],N=[];function De(E){if(E.samples>0){if(Bt(E)===!1){const _=E.textures,O=E.width,$=E.height;let j=i.COLOR_BUFFER_BIT;const q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(E),at=_.length>1;if(at)for(let ut=0;ut<_.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ut=0;ut<_.length;ut++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const Gt=n.get(_[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,O,$,0,0,O,$,j,i.NEAREST),c===!0&&(oe.length=0,N.length=0,oe.push(i.COLOR_ATTACHMENT0+ut),E.depthBuffer&&E.resolveDepthBuffer===!1&&(oe.push(q),N.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<_.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const Gt=n.get(_[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ot(E){return Math.min(s.maxSamples,E.samples)}function Bt(E){const _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function yt(E){const _=a.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function te(E,_){const O=E.colorSpace,$=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==wi&&O!==bn&&(Vt.getTransfer(O)===Zt?($!==We||j!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function St(E){return typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame!="undefined"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=tt,this.setTextureCube=H,this.rebindTextures=Nt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Bt}function im(i,t){function e(n,s=bn){let r;const a=Vt.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===_a)return i.UNSIGNED_SHORT_4_4_4_4;if(n===va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hc)return i.BYTE;if(n===uc)return i.SHORT;if(n===Ki)return i.UNSIGNED_SHORT;if(n===ga)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===Ze)return i.FLOAT;if(n===Ji)return i.HALF_FLOAT;if(n===fc)return i.ALPHA;if(n===pc)return i.RGB;if(n===We)return i.RGBA;if(n===mc)return i.LUMINANCE;if(n===gc)return i.LUMINANCE_ALPHA;if(n===xi)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===xa)return i.RED;if(n===Ma)return i.RED_INTEGER;if(n===_c)return i.RG;if(n===Sa)return i.RG_INTEGER;if(n===ya)return i.RGBA_INTEGER;if(n===Ls||n===Ds||n===Is||n===Us)if(a===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ls)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ls)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kr||n===zr||n===Gr||n===Vr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===kr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hr||n===Wr||n===Xr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hr||n===Wr)return a===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qr||n===Yr||n===$r||n===Zr||n===Kr||n===jr||n===Jr||n===Qr||n===ta||n===ea||n===na||n===ia||n===sa||n===ra)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$r)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ta)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ea)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===na)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ia)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ra)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ns||n===aa||n===oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ns)return a===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===aa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vc||n===ca||n===la||n===ha)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ns)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ca)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===la)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ha)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ti?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class sm extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Wn extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rm={type:"move"};class yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),u=this._getHandJoint(l,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Wn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const am=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,om=`
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

}`;class cm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ve,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new qe({vertexShader:am,fragmentShader:om,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lm extends Ci{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,m=null,g=null;const v=new cm,p=e.getContextAttributes();let u=null,A=null;const T=[],S=[],F=new Ft;let w=null;const C=new Pe;C.viewport=new re;const I=new Pe;I.viewport=new re;const y=[C,I],M=new sm;let R=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=T[Y];return et===void 0&&(et=new yr,T[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=T[Y];return et===void 0&&(et=new yr,T[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=T[Y];return et===void 0&&(et=new yr,T[Y]=et),et.getHandSpace()};function z(Y){const et=S.indexOf(Y.inputSource);if(et===-1)return;const _t=T[et];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,l||a),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",K);for(let Y=0;Y<T.length;Y++){const et=S[Y];et!==null&&(S[Y]=null,T[Y].disconnect(et))}R=null,G=null,v.reset(),t.setRenderTarget(u),m=null,f=null,d=null,s=null,A=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=function(Y){return me(this,null,function*(){if(s=Y,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&(yield e.makeXRCompatible()),w=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Yn(m.framebufferWidth,m.framebufferHeight,{format:We,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,_t=null,rt=null;p.depth&&(rt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?bi:xi,_t=p.stencil?Ti:qn);const Tt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Tt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),A=new Yn(f.textureWidth,f.textureHeight,{format:We,type:dn,depthTexture:new Ic(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=yield s.requestReferenceSpace(o),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(Y){for(let et=0;et<Y.removed.length;et++){const _t=Y.removed[et],rt=S.indexOf(_t);rt>=0&&(S[rt]=null,T[rt].disconnect(_t))}for(let et=0;et<Y.added.length;et++){const _t=Y.added[et];let rt=S.indexOf(_t);if(rt===-1){for(let wt=0;wt<T.length;wt++)if(wt>=S.length){S.push(_t),rt=wt;break}else if(S[wt]===null){S[wt]=_t,rt=wt;break}if(rt===-1)break}const Tt=T[rt];Tt&&Tt.connect(_t)}}const X=new U,tt=new U;function H(Y,et,_t){X.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition(_t.matrixWorld);const rt=X.distanceTo(tt),Tt=et.projectionMatrix.elements,wt=_t.projectionMatrix.elements,Nt=Tt[14]/(Tt[10]-1),ie=Tt[14]/(Tt[10]+1),zt=(Tt[9]+1)/Tt[5],oe=(Tt[9]-1)/Tt[5],N=(Tt[8]-1)/Tt[0],De=(wt[8]+1)/wt[0],Ot=Nt*N,Bt=Nt*De,yt=rt/(-N+De),te=yt*-N;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(te),Y.translateZ(yt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Tt[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const St=Nt+yt,E=ie+yt,_=Ot-te,O=Bt+(rt-te),$=zt*ie/E*St,j=oe*ie/E*St;Y.projectionMatrix.makePerspective(_,O,$,j,St,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let et=Y.near,_t=Y.far;v.texture!==null&&(v.depthNear>0&&(et=v.depthNear),v.depthFar>0&&(_t=v.depthFar)),M.near=I.near=C.near=et,M.far=I.far=C.far=_t,(R!==M.near||G!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,G=M.far),C.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,M.layers.mask=C.layers.mask|I.layers.mask;const rt=Y.parent,Tt=M.cameras;st(M,rt);for(let wt=0;wt<Tt.length;wt++)st(Tt[wt],rt);Tt.length===2?H(M,C,I):M.projectionMatrix.copy(C.projectionMatrix),ht(Y,M,rt)};function ht(Y,et,_t){_t===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ji*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Mt=null;function Ut(Y,et){if(h=et.getViewerPose(l||a),g=et,h!==null){const _t=h.views;m!==null&&(t.setRenderTargetFramebuffer(A,m.framebuffer),t.setRenderTarget(A));let rt=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let wt=0;wt<_t.length;wt++){const Nt=_t[wt];let ie=null;if(m!==null)ie=m.getViewport(Nt);else{const oe=d.getViewSubImage(f,Nt);ie=oe.viewport,wt===0&&(t.setRenderTargetTextures(A,oe.colorTexture,f.ignoreDepthValues?void 0:oe.depthStencilTexture),t.setRenderTarget(A))}let zt=y[wt];zt===void 0&&(zt=new Pe,zt.layers.enable(wt),zt.viewport=new re,y[wt]=zt),zt.matrix.fromArray(Nt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Nt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(ie.x,ie.y,ie.width,ie.height),wt===0&&(M.matrix.copy(zt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(zt)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const wt=d.getDepthInformation(_t[0]);wt&&wt.isValid&&wt.texture&&v.init(t,wt,s.renderState)}}for(let _t=0;_t<T.length;_t++){const rt=S[_t],Tt=T[_t];rt!==null&&Tt!==void 0&&Tt.update(rt,et,l||a)}Mt&&Mt(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const jt=new Dc;jt.setAnimationLoop(Ut),this.setAnimationLoop=function(Y){Mt=Y},this.dispose=function(){}}}const Nn=new Le,hm=new $t;function um(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Cc(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,A,T,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),v(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,A,T):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===be&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===be&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const A=t.get(u),T=A.envMap,S=A.envMapRotation;T&&(p.envMap.value=T,Nn.copy(S),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),p.envMapRotation.value.setFromMatrix4(hm.makeRotationFromEuler(Nn)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,A,T){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*A,p.scale.value=T*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,A){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===be&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){const A=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,T){const S=T.program;n.uniformBlockBinding(A,S)}function l(A,T){let S=s[A.id];S===void 0&&(g(A),S=h(A),s[A.id]=S,A.addEventListener("dispose",p));const F=T.program;n.updateUBOMapping(A,F);const w=t.render.frame;r[A.id]!==w&&(f(A),r[A.id]=w)}function h(A){const T=d();A.__bindingPointIndex=T;const S=i.createBuffer(),F=A.__size,w=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,F,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,S),S}function d(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const T=s[A.id],S=A.uniforms,F=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,C=S.length;w<C;w++){const I=Array.isArray(S[w])?S[w]:[S[w]];for(let y=0,M=I.length;y<M;y++){const R=I[y];if(m(R,w,y,F)===!0){const G=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let K=0;K<z.length;K++){const X=z[K],tt=v(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,G+W,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,W),W+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,T,S,F){const w=A.value,C=T+"_"+S;if(F[C]===void 0)return typeof w=="number"||typeof w=="boolean"?F[C]=w:F[C]=w.clone(),!0;{const I=F[C];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return F[C]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(A){const T=A.uniforms;let S=0;const F=16;for(let C=0,I=T.length;C<I;C++){const y=Array.isArray(T[C])?T[C]:[T[C]];for(let M=0,R=y.length;M<R;M++){const G=y[M],z=Array.isArray(G.value)?G.value:[G.value];for(let W=0,K=z.length;W<K;W++){const X=z[W],tt=v(X),H=S%F,st=H%tt.boundary,ht=H+st;S+=st,ht!==0&&F-ht<tt.storage&&(S+=F-ht),G.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=tt.storage}}}const w=S%F;return w>0&&(S+=F-w),A.__size=S,A.__cache={},this}function v(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function p(A){const T=A.target;T.removeEventListener("dispose",p);const S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function u(){for(const A in s)i.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:c,update:l,dispose:u}}class Bc{constructor(t={}){const{canvas:e=eh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,u=null;const A=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=wn,this.toneMappingExposure=1;const S=this;let F=!1,w=0,C=0,I=null,y=-1,M=null;const R=new re,G=new re;let z=null;const W=new It(0);let K=0,X=e.width,tt=e.height,H=1,st=null,ht=null;const Mt=new re(0,0,X,tt),Ut=new re(0,0,X,tt);let jt=!1;const Y=new ba;let et=!1,_t=!1;const rt=new $t,Tt=new $t,wt=new U,Nt=new re,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function oe(){return I===null?H:1}let N=n;function De(x,L){return e.getContext(x,L)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pa}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),N===null){const L="webgl2";if(N=De(L,x),N===null)throw De(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ot,Bt,yt,te,St,E,_,O,$,j,q,vt,at,ut,Gt,J,dt,Et,bt,ft,kt,Lt,Jt,P;function it(){Ot=new vf(N),Ot.init(),Lt=new im(N,Ot),Bt=new df(N,Ot,t,Lt),yt=new tm(N,Ot),Bt.reverseDepthBuffer&&f&&yt.buffers.depth.setReversed(!0),te=new Sf(N),St=new kp,E=new nm(N,Ot,yt,St,Bt,Lt,te),_=new pf(S),O=new _f(S),$=new wh(N),Jt=new hf(N,$),j=new xf(N,$,te,Jt),q=new Ef(N,j,$,te),bt=new yf(N,Bt,E),J=new ff(St),vt=new Bp(S,_,O,Ot,Bt,Jt,J),at=new um(S,St),ut=new Gp,Gt=new Yp(Ot),Et=new lf(S,_,O,yt,q,m,c),dt=new Jp(S,q,Bt),P=new dm(N,te,Bt,yt),ft=new uf(N,Ot,te),kt=new Mf(N,Ot,te),te.programs=vt.programs,S.capabilities=Bt,S.extensions=Ot,S.properties=St,S.renderLists=ut,S.shadowMap=dt,S.state=yt,S.info=te}it();const V=new lm(S,N);this.xr=V,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const x=Ot.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ot.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(x){x!==void 0&&(H=x,this.setSize(X,tt,!1))},this.getSize=function(x){return x.set(X,tt)},this.setSize=function(x,L,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=x,tt=L,e.width=Math.floor(x*H),e.height=Math.floor(L*H),B===!0&&(e.style.width=x+"px",e.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(X*H,tt*H).floor()},this.setDrawingBufferSize=function(x,L,B){X=x,tt=L,H=B,e.width=Math.floor(x*B),e.height=Math.floor(L*B),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(R)},this.getViewport=function(x){return x.copy(Mt)},this.setViewport=function(x,L,B,k){x.isVector4?Mt.set(x.x,x.y,x.z,x.w):Mt.set(x,L,B,k),yt.viewport(R.copy(Mt).multiplyScalar(H).round())},this.getScissor=function(x){return x.copy(Ut)},this.setScissor=function(x,L,B,k){x.isVector4?Ut.set(x.x,x.y,x.z,x.w):Ut.set(x,L,B,k),yt.scissor(G.copy(Ut).multiplyScalar(H).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(x){yt.setScissorTest(jt=x)},this.setOpaqueSort=function(x){st=x},this.setTransparentSort=function(x){ht=x},this.getClearColor=function(x){return x.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(x=!0,L=!0,B=!0){let k=0;if(x){let D=!1;if(I!==null){const Q=I.texture.format;D=Q===ya||Q===Sa||Q===Ma}if(D){const Q=I.texture.type,ct=Q===dn||Q===qn||Q===Ki||Q===Ti||Q===_a||Q===va,pt=Et.getClearColor(),mt=Et.getClearAlpha(),At=pt.r,Rt=pt.g,gt=pt.b;ct?(g[0]=At,g[1]=Rt,g[2]=gt,g[3]=mt,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=At,v[1]=Rt,v[2]=gt,v[3]=mt,N.clearBufferiv(N.COLOR,0,v))}else k|=N.COLOR_BUFFER_BIT}L&&(k|=N.DEPTH_BUFFER_BIT),B&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ut.dispose(),Gt.dispose(),St.dispose(),_.dispose(),O.dispose(),q.dispose(),Jt.dispose(),P.dispose(),vt.dispose(),V.dispose(),V.removeEventListener("sessionstart",Da),V.removeEventListener("sessionend",Ia),Cn.stop()};function Z(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const x=te.autoReset,L=dt.enabled,B=dt.autoUpdate,k=dt.needsUpdate,D=dt.type;it(),te.autoReset=x,dt.enabled=L,dt.autoUpdate=B,dt.needsUpdate=k,dt.type=D}function ot(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ct(x){const L=x.target;L.removeEventListener("dispose",Ct),se(L)}function se(x){pe(x),St.remove(x)}function pe(x){const L=St.get(x).programs;L!==void 0&&(L.forEach(function(B){vt.releaseProgram(B)}),x.isShaderMaterial&&vt.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,B,k,D,Q){L===null&&(L=ie);const ct=D.isMesh&&D.matrixWorld.determinant()<0,pt=Hc(x,L,B,k,D);yt.setMaterial(k,ct);let mt=B.index,At=1;if(k.wireframe===!0){if(mt=j.getWireframeAttribute(B),mt===void 0)return;At=2}const Rt=B.drawRange,gt=B.attributes.position;let Ht=Rt.start*At,Qt=(Rt.start+Rt.count)*At;Q!==null&&(Ht=Math.max(Ht,Q.start*At),Qt=Math.min(Qt,(Q.start+Q.count)*At)),mt!==null?(Ht=Math.max(Ht,0),Qt=Math.min(Qt,mt.count)):gt!=null&&(Ht=Math.max(Ht,0),Qt=Math.min(Qt,gt.count));const ee=Qt-Ht;if(ee<0||ee===1/0)return;Jt.setup(D,k,pt,B,mt);let Te,Wt=ft;if(mt!==null&&(Te=$.get(mt),Wt=kt,Wt.setIndex(Te)),D.isMesh)k.wireframe===!0?(yt.setLineWidth(k.wireframeLinewidth*oe()),Wt.setMode(N.LINES)):Wt.setMode(N.TRIANGLES);else if(D.isLine){let xt=k.linewidth;xt===void 0&&(xt=1),yt.setLineWidth(xt*oe()),D.isLineSegments?Wt.setMode(N.LINES):D.isLineLoop?Wt.setMode(N.LINE_LOOP):Wt.setMode(N.LINE_STRIP)}else D.isPoints?Wt.setMode(N.POINTS):D.isSprite&&Wt.setMode(N.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Wt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Wt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const xt=D._multiDrawStarts,je=D._multiDrawCounts,Xt=D._multiDrawCount,ke=mt?$.get(mt).bytesPerElement:1,Kn=St.get(k).currentProgram.getUniforms();for(let we=0;we<Xt;we++)Kn.setValue(N,"_gl_DrawID",we),Wt.render(xt[we]/ke,je[we])}else if(D.isInstancedMesh)Wt.renderInstances(Ht,ee,D.count);else if(B.isInstancedBufferGeometry){const xt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,je=Math.min(B.instanceCount,xt);Wt.renderInstances(Ht,ee,je)}else Wt.render(Ht,ee)};function qt(x,L,B){x.transparent===!0&&x.side===Fe&&x.forceSinglePass===!1?(x.side=be,x.needsUpdate=!0,ts(x,L,B),x.side=le,x.needsUpdate=!0,ts(x,L,B),x.side=Fe):ts(x,L,B)}this.compile=function(x,L,B=null){B===null&&(B=x),u=Gt.get(B),u.init(L),T.push(u),B.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),x!==B&&x.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),u.setupLights();const k=new Set;return x.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const Q=D.material;if(Q)if(Array.isArray(Q))for(let ct=0;ct<Q.length;ct++){const pt=Q[ct];qt(pt,B,D),k.add(pt)}else qt(Q,B,D),k.add(Q)}),T.pop(),u=null,k},this.compileAsync=function(x,L,B=null){const k=this.compile(x,L,B);return new Promise(D=>{function Q(){if(k.forEach(function(ct){St.get(ct).currentProgram.isReady()&&k.delete(ct)}),k.size===0){D(x);return}setTimeout(Q,10)}Ot.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Be=null;function Ke(x){Be&&Be(x)}function Da(){Cn.stop()}function Ia(){Cn.start()}const Cn=new Dc;Cn.setAnimationLoop(Ke),typeof self!="undefined"&&Cn.setContext(self),this.setAnimationLoop=function(x){Be=x,V.setAnimationLoop(x),x===null?Cn.stop():Cn.start()},V.addEventListener("sessionstart",Da),V.addEventListener("sessionend",Ia),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(L),L=V.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,L,I),u=Gt.get(x,T.length),u.init(L),T.push(u),Tt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Y.setFromProjectionMatrix(Tt),_t=this.localClippingEnabled,et=J.init(this.clippingPlanes,_t),p=ut.get(x,A.length),p.init(),A.push(p),V.enabled===!0&&V.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&Ys(Q,L,-1/0,S.sortObjects)}Ys(x,L,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(st,ht),zt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,zt&&Et.addToRenderList(p,x),this.info.render.frame++,et===!0&&J.beginShadows();const B=u.state.shadowsArray;dt.render(B,x,L),et===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=p.opaque,D=p.transmissive;if(u.setupLights(),L.isArrayCamera){const Q=L.cameras;if(D.length>0)for(let ct=0,pt=Q.length;ct<pt;ct++){const mt=Q[ct];Na(k,D,x,mt)}zt&&Et.render(x);for(let ct=0,pt=Q.length;ct<pt;ct++){const mt=Q[ct];Ua(p,x,mt,mt.viewport)}}else D.length>0&&Na(k,D,x,L),zt&&Et.render(x),Ua(p,x,L);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),x.isScene===!0&&x.onAfterRender(S,x,L),Jt.resetDefaultState(),y=-1,M=null,T.pop(),T.length>0?(u=T[T.length-1],et===!0&&J.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,A.pop(),A.length>0?p=A[A.length-1]:p=null};function Ys(x,L,B,k){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)u.pushLight(x),x.castShadow&&u.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Y.intersectsSprite(x)){k&&Nt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Tt);const ct=q.update(x),pt=x.material;pt.visible&&p.push(x,ct,pt,B,Nt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Y.intersectsObject(x))){const ct=q.update(x),pt=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Nt.copy(x.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Nt.copy(ct.boundingSphere.center)),Nt.applyMatrix4(x.matrixWorld).applyMatrix4(Tt)),Array.isArray(pt)){const mt=ct.groups;for(let At=0,Rt=mt.length;At<Rt;At++){const gt=mt[At],Ht=pt[gt.materialIndex];Ht&&Ht.visible&&p.push(x,ct,Ht,B,Nt.z,gt)}}else pt.visible&&p.push(x,ct,pt,B,Nt.z,null)}}const Q=x.children;for(let ct=0,pt=Q.length;ct<pt;ct++)Ys(Q[ct],L,B,k)}function Ua(x,L,B,k){const D=x.opaque,Q=x.transmissive,ct=x.transparent;u.setupLightsView(B),et===!0&&J.setGlobalState(S.clippingPlanes,B),k&&yt.viewport(R.copy(k)),D.length>0&&Qi(D,L,B),Q.length>0&&Qi(Q,L,B),ct.length>0&&Qi(ct,L,B),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Na(x,L,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[k.id]===void 0&&(u.state.transmissionRenderTarget[k.id]=new Yn(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Ji:dn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace}));const Q=u.state.transmissionRenderTarget[k.id],ct=k.viewport||R;Q.setSize(ct.z,ct.w);const pt=S.getRenderTarget();S.setRenderTarget(Q),S.getClearColor(W),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),zt&&Et.render(B);const mt=S.toneMapping;S.toneMapping=wn;const At=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),u.setupLightsView(k),et===!0&&J.setGlobalState(S.clippingPlanes,k),Qi(x,B,k),E.updateMultisampleRenderTarget(Q),E.updateRenderTargetMipmap(Q),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let gt=0,Ht=L.length;gt<Ht;gt++){const Qt=L[gt],ee=Qt.object,Te=Qt.geometry,Wt=Qt.material,xt=Qt.group;if(Wt.side===Fe&&ee.layers.test(k.layers)){const je=Wt.side;Wt.side=be,Wt.needsUpdate=!0,Fa(ee,B,k,Te,Wt,xt),Wt.side=je,Wt.needsUpdate=!0,Rt=!0}}Rt===!0&&(E.updateMultisampleRenderTarget(Q),E.updateRenderTargetMipmap(Q))}S.setRenderTarget(pt),S.setClearColor(W,K),At!==void 0&&(k.viewport=At),S.toneMapping=mt}function Qi(x,L,B){const k=L.isScene===!0?L.overrideMaterial:null;for(let D=0,Q=x.length;D<Q;D++){const ct=x[D],pt=ct.object,mt=ct.geometry,At=k===null?ct.material:k,Rt=ct.group;pt.layers.test(B.layers)&&Fa(pt,L,B,mt,At,Rt)}}function Fa(x,L,B,k,D,Q){x.onBeforeRender(S,L,B,k,D,Q),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),D.onBeforeRender(S,L,B,k,x,Q),D.transparent===!0&&D.side===Fe&&D.forceSinglePass===!1?(D.side=be,D.needsUpdate=!0,S.renderBufferDirect(B,L,k,D,x,Q),D.side=le,D.needsUpdate=!0,S.renderBufferDirect(B,L,k,D,x,Q),D.side=Fe):S.renderBufferDirect(B,L,k,D,x,Q),x.onAfterRender(S,L,B,k,D,Q)}function ts(x,L,B){L.isScene!==!0&&(L=ie);const k=St.get(x),D=u.state.lights,Q=u.state.shadowsArray,ct=D.state.version,pt=vt.getParameters(x,D.state,Q,L,B),mt=vt.getProgramCacheKey(pt);let At=k.programs;k.environment=x.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(x.isMeshStandardMaterial?O:_).get(x.envMap||k.environment),k.envMapRotation=k.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,At===void 0&&(x.addEventListener("dispose",Ct),At=new Map,k.programs=At);let Rt=At.get(mt);if(Rt!==void 0){if(k.currentProgram===Rt&&k.lightsStateVersion===ct)return Ba(x,pt),Rt}else pt.uniforms=vt.getUniforms(x),x.onBeforeCompile(pt,S),Rt=vt.acquireProgram(pt,mt),At.set(mt,Rt),k.uniforms=pt.uniforms;const gt=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(gt.clippingPlanes=J.uniform),Ba(x,pt),k.needsLights=Xc(x),k.lightsStateVersion=ct,k.needsLights&&(gt.ambientLightColor.value=D.state.ambient,gt.lightProbe.value=D.state.probe,gt.directionalLights.value=D.state.directional,gt.directionalLightShadows.value=D.state.directionalShadow,gt.spotLights.value=D.state.spot,gt.spotLightShadows.value=D.state.spotShadow,gt.rectAreaLights.value=D.state.rectArea,gt.ltc_1.value=D.state.rectAreaLTC1,gt.ltc_2.value=D.state.rectAreaLTC2,gt.pointLights.value=D.state.point,gt.pointLightShadows.value=D.state.pointShadow,gt.hemisphereLights.value=D.state.hemi,gt.directionalShadowMap.value=D.state.directionalShadowMap,gt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,gt.spotShadowMap.value=D.state.spotShadowMap,gt.spotLightMatrix.value=D.state.spotLightMatrix,gt.spotLightMap.value=D.state.spotLightMap,gt.pointShadowMap.value=D.state.pointShadowMap,gt.pointShadowMatrix.value=D.state.pointShadowMatrix),k.currentProgram=Rt,k.uniformsList=null,Rt}function Oa(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=Fs.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function Ba(x,L){const B=St.get(x);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function Hc(x,L,B,k,D){L.isScene!==!0&&(L=ie),E.resetTextureUnits();const Q=L.fog,ct=k.isMeshStandardMaterial?L.environment:null,pt=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:wi,mt=(k.isMeshStandardMaterial?O:_).get(k.envMap||ct),At=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Rt=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),gt=!!B.morphAttributes.position,Ht=!!B.morphAttributes.normal,Qt=!!B.morphAttributes.color;let ee=wn;k.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ee=S.toneMapping);const Te=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Wt=Te!==void 0?Te.length:0,xt=St.get(k),je=u.state.lights;if(et===!0&&(_t===!0||x!==M)){const Ie=x===M&&k.id===y;J.setState(k,x,Ie)}let Xt=!1;k.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==je.state.version||xt.outputColorSpace!==pt||D.isBatchedMesh&&xt.batching===!1||!D.isBatchedMesh&&xt.batching===!0||D.isBatchedMesh&&xt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&xt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&xt.instancing===!1||!D.isInstancedMesh&&xt.instancing===!0||D.isSkinnedMesh&&xt.skinning===!1||!D.isSkinnedMesh&&xt.skinning===!0||D.isInstancedMesh&&xt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&xt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&xt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&xt.instancingMorph===!1&&D.morphTexture!==null||xt.envMap!==mt||k.fog===!0&&xt.fog!==Q||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==J.numPlanes||xt.numIntersection!==J.numIntersection)||xt.vertexAlphas!==At||xt.vertexTangents!==Rt||xt.morphTargets!==gt||xt.morphNormals!==Ht||xt.morphColors!==Qt||xt.toneMapping!==ee||xt.morphTargetsCount!==Wt)&&(Xt=!0):(Xt=!0,xt.__version=k.version);let ke=xt.currentProgram;Xt===!0&&(ke=ts(k,L,D));let Kn=!1,we=!1,Ii=!1;const ne=ke.getUniforms(),Ye=xt.uniforms;if(yt.useProgram(ke.program)&&(Kn=!0,we=!0,Ii=!0),k.id!==y&&(y=k.id,we=!0),Kn||M!==x){yt.buffers.depth.getReversed()?(rt.copy(x.projectionMatrix),ih(rt),sh(rt),ne.setValue(N,"projectionMatrix",rt)):ne.setValue(N,"projectionMatrix",x.projectionMatrix),ne.setValue(N,"viewMatrix",x.matrixWorldInverse);const gn=ne.map.cameraPosition;gn!==void 0&&gn.setValue(N,wt.setFromMatrixPosition(x.matrixWorld)),Bt.logarithmicDepthBuffer&&ne.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ne.setValue(N,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,we=!0,Ii=!0)}if(D.isSkinnedMesh){ne.setOptional(N,D,"bindMatrix"),ne.setOptional(N,D,"bindMatrixInverse");const Ie=D.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),ne.setValue(N,"boneTexture",Ie.boneTexture,E))}D.isBatchedMesh&&(ne.setOptional(N,D,"batchingTexture"),ne.setValue(N,"batchingTexture",D._matricesTexture,E),ne.setOptional(N,D,"batchingIdTexture"),ne.setValue(N,"batchingIdTexture",D._indirectTexture,E),ne.setOptional(N,D,"batchingColorTexture"),D._colorsTexture!==null&&ne.setValue(N,"batchingColorTexture",D._colorsTexture,E));const Ui=B.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&bt.update(D,B,ke),(we||xt.receiveShadow!==D.receiveShadow)&&(xt.receiveShadow=D.receiveShadow,ne.setValue(N,"receiveShadow",D.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ye.envMap.value=mt,Ye.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(Ye.envMapIntensity.value=L.environmentIntensity),we&&(ne.setValue(N,"toneMappingExposure",S.toneMappingExposure),xt.needsLights&&Wc(Ye,Ii),Q&&k.fog===!0&&at.refreshFogUniforms(Ye,Q),at.refreshMaterialUniforms(Ye,k,H,tt,u.state.transmissionRenderTarget[x.id]),Fs.upload(N,Oa(xt),Ye,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Fs.upload(N,Oa(xt),Ye,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ne.setValue(N,"center",D.center),ne.setValue(N,"modelViewMatrix",D.modelViewMatrix),ne.setValue(N,"normalMatrix",D.normalMatrix),ne.setValue(N,"modelMatrix",D.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ie=k.uniformsGroups;for(let gn=0,_n=Ie.length;gn<_n;gn++){const ka=Ie[gn];P.update(ka,ke),P.bind(ka,ke)}}return ke}function Wc(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function Xc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(x,L,B){St.get(x.texture).__webglTexture=L,St.get(x.depthTexture).__webglTexture=B;const k=St.get(x);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,L){const B=St.get(x);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,B=0){I=x,w=L,C=B;let k=!0,D=null,Q=!1,ct=!1;if(x){const mt=St.get(x);if(mt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(N.FRAMEBUFFER,null),k=!1;else if(mt.__webglFramebuffer===void 0)E.setupRenderTarget(x);else if(mt.__hasExternalTextures)E.rebindTextures(x,St.get(x.texture).__webglTexture,St.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const gt=x.depthTexture;if(mt.__boundDepthTexture!==gt){if(gt!==null&&St.has(gt)&&(x.width!==gt.image.width||x.height!==gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(x)}}const At=x.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ct=!0);const Rt=St.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Rt[L])?D=Rt[L][B]:D=Rt[L],Q=!0):x.samples>0&&E.useMultisampledRTT(x)===!1?D=St.get(x).__webglMultisampledFramebuffer:Array.isArray(Rt)?D=Rt[B]:D=Rt,R.copy(x.viewport),G.copy(x.scissor),z=x.scissorTest}else R.copy(Mt).multiplyScalar(H).floor(),G.copy(Ut).multiplyScalar(H).floor(),z=jt;if(yt.bindFramebuffer(N.FRAMEBUFFER,D)&&k&&yt.drawBuffers(x,D),yt.viewport(R),yt.scissor(G),yt.setScissorTest(z),Q){const mt=St.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,mt.__webglTexture,B)}else if(ct){const mt=St.get(x.texture),At=L||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,mt.__webglTexture,B||0,At)}y=-1},this.readRenderTargetPixels=function(x,L,B,k,D,Q,ct){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=St.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ct!==void 0&&(pt=pt[ct]),pt){yt.bindFramebuffer(N.FRAMEBUFFER,pt);try{const mt=x.texture,At=mt.format,Rt=mt.type;if(!Bt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-k&&B>=0&&B<=x.height-D&&N.readPixels(L,B,k,D,Lt.convert(At),Lt.convert(Rt),Q)}finally{const mt=I!==null?St.get(I).__webglFramebuffer:null;yt.bindFramebuffer(N.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=function(x,L,B,k,D,Q,ct){return me(this,null,function*(){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=St.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ct!==void 0&&(pt=pt[ct]),pt){const mt=x.texture,At=mt.format,Rt=mt.type;if(!Bt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=x.width-k&&B>=0&&B<=x.height-D){yt.bindFramebuffer(N.FRAMEBUFFER,pt);const gt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,gt),N.bufferData(N.PIXEL_PACK_BUFFER,Q.byteLength,N.STREAM_READ),N.readPixels(L,B,k,D,Lt.convert(At),Lt.convert(Rt),0);const Ht=I!==null?St.get(I).__webglFramebuffer:null;yt.bindFramebuffer(N.FRAMEBUFFER,Ht);const Qt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),yield nh(N,Qt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,gt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Q),N.deleteBuffer(gt),N.deleteSync(Qt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(x,L=null,B=0){x.isTexture!==!0&&(Hi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,x=arguments[1]);const k=Math.pow(2,-B),D=Math.floor(x.image.width*k),Q=Math.floor(x.image.height*k),ct=L!==null?L.x:0,pt=L!==null?L.y:0;E.setTexture2D(x,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,ct,pt,D,Q),yt.unbindTexture()},this.copyTextureToTexture=function(x,L,B=null,k=null,D=0){x.isTexture!==!0&&(Hi("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,x=arguments[1],L=arguments[2],D=arguments[3]||0,B=null);let Q,ct,pt,mt,At,Rt,gt,Ht,Qt;const ee=x.isCompressedTexture?x.mipmaps[D]:x.image;B!==null?(Q=B.max.x-B.min.x,ct=B.max.y-B.min.y,pt=B.isBox3?B.max.z-B.min.z:1,mt=B.min.x,At=B.min.y,Rt=B.isBox3?B.min.z:0):(Q=ee.width,ct=ee.height,pt=ee.depth||1,mt=0,At=0,Rt=0),k!==null?(gt=k.x,Ht=k.y,Qt=k.z):(gt=0,Ht=0,Qt=0);const Te=Lt.convert(L.format),Wt=Lt.convert(L.type);let xt;L.isData3DTexture?(E.setTexture3D(L,0),xt=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(E.setTexture2DArray(L,0),xt=N.TEXTURE_2D_ARRAY):(E.setTexture2D(L,0),xt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);const je=N.getParameter(N.UNPACK_ROW_LENGTH),Xt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ke=N.getParameter(N.UNPACK_SKIP_PIXELS),Kn=N.getParameter(N.UNPACK_SKIP_ROWS),we=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ee.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ee.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,mt),N.pixelStorei(N.UNPACK_SKIP_ROWS,At),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Rt);const Ii=x.isDataArrayTexture||x.isData3DTexture,ne=L.isDataArrayTexture||L.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const Ye=St.get(x),Ui=St.get(L),Ie=St.get(Ye.__renderTarget),gn=St.get(Ui.__renderTarget);yt.bindFramebuffer(N.READ_FRAMEBUFFER,Ie.__webglFramebuffer),yt.bindFramebuffer(N.DRAW_FRAMEBUFFER,gn.__webglFramebuffer);for(let _n=0;_n<pt;_n++)Ii&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.get(x).__webglTexture,D,Rt+_n),x.isDepthTexture?(ne&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.get(L).__webglTexture,D,Qt+_n),N.blitFramebuffer(mt,At,Q,ct,gt,Ht,Q,ct,N.DEPTH_BUFFER_BIT,N.NEAREST)):ne?N.copyTexSubImage3D(xt,D,gt,Ht,Qt+_n,mt,At,Q,ct):N.copyTexSubImage2D(xt,D,gt,Ht,Qt+_n,mt,At,Q,ct);yt.bindFramebuffer(N.READ_FRAMEBUFFER,null),yt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ne?x.isDataTexture||x.isData3DTexture?N.texSubImage3D(xt,D,gt,Ht,Qt,Q,ct,pt,Te,Wt,ee.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(xt,D,gt,Ht,Qt,Q,ct,pt,Te,ee.data):N.texSubImage3D(xt,D,gt,Ht,Qt,Q,ct,pt,Te,Wt,ee):x.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,D,gt,Ht,Q,ct,Te,Wt,ee.data):x.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,D,gt,Ht,ee.width,ee.height,Te,ee.data):N.texSubImage2D(N.TEXTURE_2D,D,gt,Ht,Q,ct,Te,Wt,ee);N.pixelStorei(N.UNPACK_ROW_LENGTH,je),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Xt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ke),N.pixelStorei(N.UNPACK_SKIP_ROWS,Kn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,we),D===0&&L.generateMipmaps&&N.generateMipmap(xt),yt.unbindTexture()},this.copyTextureToTexture3D=function(x,L,B=null,k=null,D=0){return x.isTexture!==!0&&(Hi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,x=arguments[2],L=arguments[3],D=arguments[4]||0),Hi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,L,B,k,D)},this.initRenderTarget=function(x){St.get(x).__webglFramebuffer===void 0&&E.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?E.setTextureCube(x,0):x.isData3DTexture?E.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?E.setTexture2DArray(x,0):E.setTexture2D(x,0),yt.unbindTexture()},this.resetState=function(){w=0,C=0,I=null,yt.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Vt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Vt._getUnpackColorSpace()}}class Ca{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new Ca(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class kc extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Le,this.environmentIntensity=1,this.environmentRotation=new Le,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class fm extends ve{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ee,h=Ee,d,f){super(null,a,o,c,l,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo extends ye{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const di=new $t,Ho=new $t,ys=[],Wo=new fn,pm=new $t,ki=new Kt,zi=new Li;class ks extends Kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,pm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new fn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,di),Wo.copy(t.boundingBox).applyMatrix4(di),this.boundingBox.union(Wo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Li),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,di),zi.copy(t.boundingSphere).applyMatrix4(di),this.boundingSphere.union(zi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ki.geometry=this.geometry,ki.material=this.material,ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zi.copy(this.boundingSphere),zi.applyMatrix4(n),t.ray.intersectsSphere(zi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,di),Ho.multiplyMatrices(n,di),ki.matrixWorld=Ho,ki.raycast(t,ys);for(let a=0,o=ys.length;a<o;a++){const c=ys[a];c.instanceId=r,c.object=this,e.push(c)}ys.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Vo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fm(new Float32Array(s*this.count),s,this.count,xa,Ze));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class zc extends $n{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zs=new U,Gs=new U,Xo=new $t,Gi=new Ec,Es=new Li,Er=new U,qo=new U;class mm extends fe{constructor(t=new Ae,e=new zc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)zs.fromBufferAttribute(e,s-1),Gs.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=zs.distanceTo(Gs);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(s),Es.radius+=r,t.ray.intersectsSphere(Es)===!1)return;Xo.copy(s).invert(),Gi.copy(t.ray).applyMatrix4(Xo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=m,p=g-1;v<p;v+=l){const u=h.getX(v),A=h.getX(v+1),T=Ts(this,t,Gi,c,u,A);T&&e.push(T)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(m),u=Ts(this,t,Gi,c,v,p);u&&e.push(u)}}else{const m=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=m,p=g-1;v<p;v+=l){const u=Ts(this,t,Gi,c,v,v+1);u&&e.push(u)}if(this.isLineLoop){const v=Ts(this,t,Gi,c,g-1,m);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ts(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(zs.fromBufferAttribute(a,s),Gs.fromBufferAttribute(a,r),e.distanceSqToSegment(zs,Gs,Er,qo)>n)return;Er.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Er);if(!(c<t.near||c>t.far))return{distance:c,point:qo.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Ra extends ve{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xn extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],m=[];let g=0;const v=[],p=n/2;let u=0;A(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(m,2));function A(){const S=new U,F=new U;let w=0;const C=(e-t)/n;for(let I=0;I<=r;I++){const y=[],M=I/r,R=M*(e-t)+t;for(let G=0;G<=s;G++){const z=G/s,W=z*c+o,K=Math.sin(W),X=Math.cos(W);F.x=R*K,F.y=-M*n+p,F.z=R*X,d.push(F.x,F.y,F.z),S.set(K,C,X).normalize(),f.push(S.x,S.y,S.z),m.push(z,1-M),y.push(g++)}v.push(y)}for(let I=0;I<s;I++)for(let y=0;y<r;y++){const M=v[y][I],R=v[y+1][I],G=v[y+1][I+1],z=v[y][I+1];(t>0||y!==0)&&(h.push(M,R,z),w+=3),(e>0||y!==r-1)&&(h.push(R,G,z),w+=3)}l.addGroup(u,w,0),u+=w}function T(S){const F=g,w=new Ft,C=new U;let I=0;const y=S===!0?t:e,M=S===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,p*M,0),f.push(0,M,0),m.push(.5,.5),g++;const R=g;for(let G=0;G<=s;G++){const W=G/s*c+o,K=Math.cos(W),X=Math.sin(W);C.x=y*X,C.y=p*M,C.z=y*K,d.push(C.x,C.y,C.z),f.push(0,M,0),w.x=K*.5+.5,w.y=X*.5*M+.5,m.push(w.x,w.y),g++}for(let G=0;G<s;G++){const z=F+G,W=R+G;S===!0?h.push(W,W+1,z):h.push(W+1,W,z),I+=3}l.addGroup(u,I,S===!0?1:2),u+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _i extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new U,f=new U,m=[],g=[],v=[],p=[];for(let u=0;u<=n;u++){const A=[],T=u/n;let S=0;u===0&&a===0?S=.5/e:u===n&&c===Math.PI&&(S=-.5/e);for(let F=0;F<=e;F++){const w=F/e;d.x=-t*Math.cos(s+w*r)*Math.sin(a+T*o),d.y=t*Math.cos(a+T*o),d.z=t*Math.sin(s+w*r)*Math.sin(a+T*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),p.push(w+S,1-T),A.push(l++)}h.push(A)}for(let u=0;u<n;u++)for(let A=0;A<e;A++){const T=h[u][A+1],S=h[u][A],F=h[u+1][A],w=h[u+1][A+1];(u!==0||a>0)&&m.push(T,S,w),(u!==n-1||c<Math.PI)&&m.push(S,F,w)}this.setIndex(m),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qs extends Ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new U,d=new U,f=new U;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){const v=g/s*r,p=m/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(v),d.y=(t+e*Math.cos(p))*Math.sin(v),d.z=e*Math.sin(p),o.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){const v=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,u=(s+1)*(m-1)+g,A=(s+1)*m+g;a.push(v,p,A),a.push(p,u,A)}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Pa extends Ae{constructor(t=1,e=.4,n=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:s,p:r,q:a},n=Math.floor(n),s=Math.floor(s);const o=[],c=[],l=[],h=[],d=new U,f=new U,m=new U,g=new U,v=new U,p=new U,u=new U;for(let T=0;T<=n;++T){const S=T/n*r*Math.PI*2;A(S,r,a,t,m),A(S+.01,r,a,t,g),p.subVectors(g,m),u.addVectors(g,m),v.crossVectors(p,u),u.crossVectors(v,p),v.normalize(),u.normalize();for(let F=0;F<=s;++F){const w=F/s*Math.PI*2,C=-e*Math.cos(w),I=e*Math.sin(w);d.x=m.x+(C*u.x+I*v.x),d.y=m.y+(C*u.y+I*v.y),d.z=m.z+(C*u.z+I*v.z),c.push(d.x,d.y,d.z),f.subVectors(d,m).normalize(),l.push(f.x,f.y,f.z),h.push(T/n),h.push(F/s)}}for(let T=1;T<=n;T++)for(let S=1;S<=s;S++){const F=(s+1)*(T-1)+(S-1),w=(s+1)*T+(S-1),C=(s+1)*T+S,I=(s+1)*(T-1)+S;o.push(F,w,I),o.push(w,C,I)}this.setIndex(o),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(h,2));function A(T,S,F,w,C){const I=Math.cos(T),y=Math.sin(T),M=F/S*T,R=Math.cos(M);C.x=w*(2+R)*.5*I,C.y=w*(2+R)*y*.5,C.z=w*Math.sin(M)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class xg extends qe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class bs extends $n{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ea,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Le,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xe extends $n{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ea,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Le,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gc extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class gm extends Gc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Tr=new $t,Yo=new U,$o=new U;class _m{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ba,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Yo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yo),$o.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($o),e.updateMatrixWorld(),Tr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vm extends _m{constructor(){super(new Aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xm extends Gc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new vm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Mm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Zo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Zo(){return performance.now()}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pa}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pa);const Sm=2;class ym{constructor(){b(this,"scene");b(this,"camera");b(this,"renderer");b(this,"postProcessing",null);b(this,"_contextLost",!1);this.scene=this.createScene(),this.camera=this.createCamera(),this.renderer=this.createRenderer(),this.setupLights(),this.setupContextLossHandling()}createScene(){const t=new kc;return t.fog=new Ca(8900331,30,120),t}createCamera(){const t=window.innerWidth/window.innerHeight,e=new Pe(60,t,.1,200);return e.position.set(0,5,10),e.lookAt(0,0,-10),e}createRenderer(){const t=new Bc({antialias:!0,powerPreference:"high-performance",alpha:!0});t.setClearColor(8900331,1);const e=Math.min(window.devicePixelRatio,Sm);t.setPixelRatio(e),t.setSize(window.innerWidth,window.innerHeight);const n=document.getElementById("canvas");return n&&n.appendChild(t.domElement),t}setupContextLossHandling(){const t=this.renderer.domElement;t.addEventListener("webglcontextlost",e=>{e.preventDefault(),this._contextLost=!0,this.showContextLostOverlay()}),t.addEventListener("webglcontextrestored",()=>{this._contextLost=!1,this.hideContextLostOverlay()})}showContextLostOverlay(){let t=document.getElementById("webgl-context-lost");t||(t=document.createElement("div"),t.id="webgl-context-lost",t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:10000;",t.innerHTML=`
        <div style="text-align:center;color:#fff;font-family:Poppins,sans-serif;">
          <h2 style="color:#ffa500;">Graphics Context Lost</h2>
          <p style="color:#ccc;margin-top:12px;">The game's graphics were interrupted.</p>
          <p style="color:#999;margin-top:8px;">Waiting for recovery... If this persists, refresh the page.</p>
        </div>`,document.body.appendChild(t)),t.style.display="flex"}hideContextLostOverlay(){const t=document.getElementById("webgl-context-lost");t&&(t.style.display="none")}setupLights(){const t=new gm(8900331,16770244,.7);this.scene.add(t);const e=new xm(16775388,.6);e.position.set(5,10,5),this.scene.add(e)}getScene(){return this.scene}getCamera(){return this.camera}getRenderer(){return this.renderer}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.postProcessing&&this.postProcessing.resize&&this.postProcessing.resize(t,e)}setPostProcessing(t){this.postProcessing=t}render(){this._contextLost||(this.postProcessing&&this.postProcessing.isEnabled()?this.postProcessing.render():this.renderer.render(this.scene,this.camera))}}class Em{constructor(){b(this,"clock");b(this,"systems",[]);b(this,"_running",!1);b(this,"_paused",!1);b(this,"animationId",null);this.clock=new Mm}registerSystem(t){this.systems.push(t)}unregisterSystem(t){const e=this.systems.indexOf(t);e!==-1&&this.systems.splice(e,1)}start(){this._running||(this._running=!0,this._paused=!1,this.clock.start(),this.loop())}stop(){this._running=!1,this._paused=!1,this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null)}pause(){this._paused=!0}resume(){this._paused=!1}loop(){if(this._running){if(!this._paused){const t=Math.min(this.clock.getDelta(),.1);for(const e of this.systems)e(t)}this.animationId=requestAnimationFrame(()=>this.loop())}}get isRunning(){return this._running}get isPaused(){return this._paused}}var Yt=(i=>(i[i.MENU=0]="MENU",i[i.PLAYING=1]="PLAYING",i[i.PAUSED=2]="PAUSED",i[i.GAMEOVER=3]="GAMEOVER",i[i.LEADERBOARD=4]="LEADERBOARD",i[i.SKINS=5]="SKINS",i[i.CHALLENGES=6]="CHALLENGES",i[i.STATS=7]="STATS",i))(Yt||{});const an=class an{constructor(){b(this,"_entries",[]);this.loadFromStorage()}loadFromStorage(){try{const t=localStorage.getItem(an.STORAGE_KEY);t&&(this._entries=JSON.parse(t))}catch(t){console.error("Failed to load leaderboard from storage:",t),this._entries=[]}}saveToStorage(){try{localStorage.setItem(an.STORAGE_KEY,JSON.stringify(this._entries))}catch(t){console.error("Failed to save leaderboard to storage:",t)}}addScore(t){const e=new Date().toLocaleDateString(),n={score:t,date:e};this._entries.push(n),this._entries.sort((s,r)=>r.score-s.score),this._entries.length>an.MAX_ENTRIES&&(this._entries=this._entries.slice(0,an.MAX_ENTRIES)),this.saveToStorage()}getTopScores(){return[...this._entries]}getHighScore(){return this._entries.length>0?this._entries[0].score:0}isHighScore(t){return this._entries.length<an.MAX_ENTRIES?t>0:t>this._entries[this._entries.length-1].score}};b(an,"STORAGE_KEY","toilet_runner_leaderboard"),b(an,"MAX_ENTRIES",10);let da=an;var rn=(i=>(i.LOW="low",i.MEDIUM="medium",i.HIGH="high",i))(rn||{});class $i{static initialize(){return me(this,null,function*(){return yield this.detectCapabilities(),this.getConfig()})}static detectCapabilities(){return me(this,null,function*(){if(!document.createElement("canvas").getContext("webgl2")){this.tier="low";return}const n=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),s=navigator.deviceMemory&&navigator.deviceMemory<4;if(n||s)this.tier="low";else{const r=yield this.runQuickBenchmark();r<20?this.tier="low":r<40?this.tier="medium":this.tier="high"}})}static runQuickBenchmark(){return me(this,null,function*(){const t=new Bc({antialias:!1});t.setSize(100,100);const e=new kc,n=new Pe(75,1,.1,1e3),s=new Pa(.5,.2,64,8),r=new pn,a=new Kt(s,r);e.add(a);const o=performance.now(),c=50;for(let h=0;h<c;h++)a.rotation.x+=.1,a.rotation.y+=.1,t.render(e,n);const l=c/(performance.now()-o)*1e3;return t.dispose(),s.dispose(),r.dispose(),a.removeFromParent(),e.remove(a),canvas.remove(),l})}static updateFPS(t){const e=Math.round(1/t);this.fpsSamples.push(e),this.fpsSamples.length>30&&this.fpsSamples.shift()}static getAverageFPS(){return this.fpsSamples.length===0?60:Math.round(this.fpsSamples.reduce((t,e)=>t+e,0)/this.fpsSamples.length)}static getConfig(){switch(this.tier){case"low":return{tier:this.tier,shadows:!1,postProcessing:!1,particles:{collision:15,effects:0},pixelRatio:1,antialias:!1,emojiFaces:!1};case"medium":return{tier:this.tier,shadows:!0,postProcessing:!0,particles:{collision:25,effects:15},pixelRatio:1.5,antialias:!0,emojiFaces:!0};case"high":return{tier:this.tier,shadows:!0,postProcessing:!0,particles:{collision:40,effects:25},pixelRatio:2,antialias:!0,emojiFaces:!0}}}static getCurrentTier(){return this.tier}static setTier(t){this.tier=t,this.fpsSamples=[]}}b($i,"tier","medium"),b($i,"currentFPS",60),b($i,"fpsSamples",[]);const br=3,Tm=6,As=.8,Ko=-4,bm=3,jo=.05,Am=.25,wm=10,Cm=6,Rm=.2,Pm=8;class Lm{constructor(t,e,n="classic"){b(this,"_mesh");b(this,"_tpMesh");b(this,"_currentLaneIndex",0);b(this,"_currentX",0);b(this,"_targetX",0);b(this,"_speed",0);b(this,"_bounceY",0);b(this,"_wobbleTime",0);b(this,"_isChangingLanes",!1);b(this,"_isNearObstacle",!1);b(this,"_successBounce",0);b(this,"_idleTime",0);b(this,"_scaleY",1);b(this,"_scaleX",1);b(this,"_tiltAngle",0);b(this,"_isDead",!1);b(this,"_characterCustomization");b(this,"_tpMaterial");b(this,"_textureCache",new Map);this._mesh=new Wn,this._characterCustomization=e;const s=e.getSkins().find(l=>l.id===n)||e.getSkins()[0];this._tpMaterial=new Xe({color:this._getMaterialColor(s),map:this.createTPTexture(s)});const r=new Xn(As,As,1,16);this._tpMesh=new Kt(r,this._tpMaterial),this._tpMesh.position.set(0,0,0),this._mesh.add(this._tpMesh);const a=new Xn(As*.35,As*.35,1.05,12),o=new Xe({color:9139029}),c=new Kt(a,o);c.position.set(0,0,0),this._mesh.add(c),this._mesh.position.set(0,.5,Ko),t.add(this._mesh)}_getMaterialColor(t){return t?t.gradient&&t.gradient.length>=2?16777215:t.color:16777200}_hexToCanvasColor(t){const e=t>>16&255,n=t>>8&255,s=t&255;return`rgb(${e}, ${n}, ${s})`}_generateCacheKey(t){return t?t.gradient&&t.gradient.length>=2?`gradient_${t.gradient.join("_")}`:`solid_${t.color}`:"default"}updateSkin(t){const e=this._characterCustomization.getSkins().find(n=>n.id===t);if(e){const n=this._getMaterialColor(e);this._tpMaterial.color.set(n);const s=this.createTPTexture(e);this._tpMaterial.map=s}}createTPTexture(t){const e=this._generateCacheKey(t);if(this._textureCache.has(e)){const o=this._textureCache.get(e);return o.needsUpdate=!0,o}const n=document.createElement("canvas");n.width=512,n.height=256;const s=n.getContext("2d");if(t&&t.gradient&&t.gradient.length>=2){const o=s.createLinearGradient(0,0,512,0);t.gradient.forEach((c,l)=>{const h=l/(t.gradient.length-1);o.addColorStop(h,this._hexToCanvasColor(c))}),s.fillStyle=o}else s.fillStyle="#FFFFF0";s.fillRect(0,0,512,256),s.strokeStyle="#E8E8E8",s.lineWidth=2;const r=64;for(let o=0;o<256;o+=r)s.beginPath(),s.moveTo(0,o),s.lineTo(512,o+16),s.stroke();for(let o=-16;o<272;o+=r)s.beginPath(),s.moveTo(0,o),s.lineTo(512,o+16),s.stroke();s.fillStyle="rgba(245, 245, 240, 0.3)";for(let o=0;o<50;o++){const c=Math.random()*512,l=Math.random()*256;s.beginPath(),s.arc(c,l,Math.random()*3+1,0,Math.PI*2),s.fill()}const a=new Ra(n);return a.wrapS=un,a.wrapT=un,a.repeat.set(2,1),a.minFilter=Oe,a.magFilter=Oe,a.generateMipmaps=!1,a.needsUpdate=!0,this._textureCache.set(e,a),a}_disposeOldTextures(){if(this._textureCache.size>20){const t=this._textureCache.keys().next().value;if(t){const e=this._textureCache.get(t);e&&e.dispose(),this._textureCache.delete(t)}}}moveLeft(){this._currentLaneIndex>-1&&(this._currentLaneIndex--,this._targetX=this._currentLaneIndex*br,this._isChangingLanes=!0,this._scaleX=.9,this._scaleY=1.1)}moveRight(){this._currentLaneIndex<1&&(this._currentLaneIndex++,this._targetX=this._currentLaneIndex*br,this._isChangingLanes=!0,this._scaleX=.9,this._scaleY=1.1)}update(t){if(this._isDead){this._tpMesh.rotation.x+=t*8,this._mesh.position.y=Math.max(this._mesh.position.y-t*2,-.5);return}this._currentX=kn.lerp(this._currentX,this._targetX,Tm*t),this._mesh.position.x=this._currentX;let e=.5;this._isChangingLanes&&Math.abs(this._currentX-this._targetX)<.05&&(this._isChangingLanes=!1);const n=this._targetX-this._currentX;if(this._isChangingLanes&&Math.abs(n)>.05){const r=-Math.sign(n)*Am;this._tiltAngle=kn.lerp(this._tiltAngle,r,wm*t)}else this._tiltAngle=kn.lerp(this._tiltAngle,0,Cm*t);this._scaleY=kn.lerp(this._scaleY,1,t*5),this._scaleX=kn.lerp(this._scaleX,1,t*5);let s=0;if(!this._isChangingLanes){this._idleTime+=t;const r=this._isNearObstacle?Pm:bm,a=this._isNearObstacle?jo*1.5:jo;s=Math.sin(this._idleTime*r)*a,this._isNearObstacle&&(e+=Math.sin(this._idleTime*15)*.03)}this._tpMesh.rotation.z=s+this._tiltAngle,this._successBounce>.01&&(e+=this._successBounce,this._successBounce*=.8,this._scaleY=1+this._successBounce*2),this._mesh.position.y=e,this._mesh.scale.set(this._scaleX,this._scaleY,this._scaleX)}getMesh(){return this._mesh}getPosition(){return this._mesh.position.clone()}getLane(){return this._currentLaneIndex}isChangingLanes(){return this._isChangingLanes}setPosition(t,e,n){this._mesh.position.set(t,e,n),this._currentX=t,this._targetX=t,this._currentLaneIndex=Math.round(t/br)}setSpeed(t){this._speed=t}setNearObstacle(t){this._isNearObstacle=t}triggerSuccessBounce(){this._successBounce=Rm}startDeathTumble(){this._isDead=!0}reset(){var e,n;this._currentLaneIndex=0,this._currentX=0,this._targetX=0,this._speed=0,this._isChangingLanes=!1,this._isNearObstacle=!1,this._successBounce=0,this._idleTime=0,this._scaleY=1,this._scaleX=1,this._tiltAngle=0,this._isDead=!1,this._mesh.position.set(0,.5,Ko),this._tpMesh.rotation.set(0,0,0),this._mesh.scale.set(1,1,1);const t=((n=(e=this._characterCustomization).getSelectedSkinId)==null?void 0:n.call(e))||"classic";this.updateSkin(t)}}const ws=3,Cs=10,Jo=8,Qo=30;class Dm{constructor(t){b(this,"scene");b(this,"segments",[]);b(this,"instancedMesh");b(this,"nextInstanceIndex",0);b(this,"freeInstanceIndices",[]);b(this,"lineMesh");b(this,"nextLineIndex",0);b(this,"freeLineIndices",[]);b(this,"floorPlane",null);b(this,"floorTexture",null);b(this,"scrollOffset",0);b(this,"tempMatrix");b(this,"tempVector");this.scene=t,this.tempMatrix=new $t,this.tempVector=new U;const e=new Zn(ws*3+6,.5,Cs),n=new Xe({color:16777215}),s=Jo*2;this.instancedMesh=new ks(e,n,s),this.scene.add(this.instancedMesh);const r=new mn(.12,Cs),a=new pn({color:13154472,transparent:!0,opacity:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});this.lineMesh=new ks(r,a,s*2),this.lineMesh.count=0,this.scene.add(this.lineMesh),this.initializeSegments()}initializeSegments(){for(let e=0;e<Jo;e++){const n=-40+e*Cs;this.createSegment(n)}}createSegment(t){let e;if(this.freeInstanceIndices.length>0)e=this.freeInstanceIndices.pop();else{if(this.nextInstanceIndex>=this.instancedMesh.count)return;e=this.nextInstanceIndex++}this.tempVector.set(0,-.25,t),this.tempMatrix.makeTranslation(this.tempVector.x,this.tempVector.y,this.tempVector.z),this.instancedMesh.setMatrixAt(e,this.tempMatrix);const n=[];for(const r of[-ws/2,ws/2]){let a;this.freeLineIndices.length>0?a=this.freeLineIndices.pop():a=this.nextLineIndex++,this.tempMatrix.makeRotationX(-Math.PI/2),this.tempMatrix.setPosition(r,.01,t),this.lineMesh.setMatrixAt(a,this.tempMatrix),n.push(a)}this.lineMesh.count=Math.max(this.lineMesh.count,this.nextLineIndex),this.lineMesh.instanceMatrix.needsUpdate=!0;const s={mesh:this.instancedMesh,z:t,instanceIndex:e,lineIndices:n};this.segments.push(s)}update(t,e){const n=e*t;this.floorTexture&&(this.scrollOffset+=n,this.floorTexture.offset.y=this.scrollOffset/2.5);for(const s of this.segments)s.z+=n,this.instancedMesh.getMatrixAt(s.instanceIndex,this.tempMatrix),this.tempVector.setFromMatrixPosition(this.tempMatrix),this.tempVector.z=s.z,this.tempMatrix.setPosition(this.tempVector),this.instancedMesh.setMatrixAt(s.instanceIndex,this.tempMatrix);for(const s of this.segments)for(const r of s.lineIndices)this.lineMesh.getMatrixAt(r,this.tempMatrix),this.tempVector.setFromMatrixPosition(this.tempMatrix),this.tempVector.z=s.z,this.tempMatrix.makeRotationX(-Math.PI/2),this.tempMatrix.setPosition(this.tempVector.x,.01,this.tempVector.z),this.lineMesh.setMatrixAt(r,this.tempMatrix);this.instancedMesh.instanceMatrix.needsUpdate=!0,this.lineMesh.instanceMatrix.needsUpdate=!0,this.handleSpawnDespawn()}handleSpawnDespawn(){let t=Number.MAX_VALUE,e=-Number.MAX_VALUE,n=-1;for(let s=0;s<this.segments.length;s++){const r=this.segments[s];r.z<t&&(t=r.z),r.z>e&&(e=r.z,n=s)}if(t>-40){const s=t-Cs;this.createSegment(s)}if(e>Qo){const s=this.segments[n];this.freeInstanceIndices.push(s.instanceIndex);for(const r of s.lineIndices)this.freeLineIndices.push(r);this.segments.splice(n,1)}}getRearZ(){if(this.segments.length===0)return 0;let t=-Number.MAX_VALUE;for(const e of this.segments)e.z>t&&(t=e.z);return t}getFrontZ(){if(this.segments.length===0)return 0;let t=Number.MAX_VALUE;for(const e of this.segments)e.z<t&&(t=e.z);return t}reset(){this.segments=[],this.nextInstanceIndex=0,this.freeInstanceIndices=[],this.nextLineIndex=0,this.freeLineIndices=[],this.lineMesh.count=0,this.scrollOffset=0,this.floorTexture&&(this.floorTexture.offset.y=0),this.initializeSegments()}dispose(){this.scene.remove(this.instancedMesh),this.instancedMesh.geometry.dispose(),this.instancedMesh.material.dispose(),this.scene.remove(this.lineMesh),this.lineMesh.geometry.dispose(),this.lineMesh.material.dispose(),this.floorPlane&&(this.scene.remove(this.floorPlane),this.floorPlane.geometry.dispose(),this.floorPlane.material.dispose())}applyTileTexture(t){const n=ws*3+6,s=t.clone();s.needsUpdate=!0,s.wrapS=un,s.wrapT=un,s.repeat.set(4,120/2.5),this.floorTexture=s;const r=new mn(n,120),a=new Xe({map:s});this.floorPlane=new Kt(r,a),this.floorPlane.rotation.x=-Math.PI/2,this.floorPlane.position.set(0,.01,-120/2+Qo),this.scene.add(this.floorPlane),this.instancedMesh.visible=!1}}const Im={emojis:{fontChain:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif'}},on=class on{static initialize(){this.canvas=document.createElement("canvas"),this.canvas.width=this.ATLAS_SIZE,this.canvas.height=this.ATLAS_SIZE;const t=this.canvas.getContext("2d");this.emojiConfigs.forEach((e,n)=>{this.drawEmoji(t,e,n)}),this.texture=new Ra(this.canvas),this.texture.magFilter=Ee,this.texture.minFilter=Ee}static drawEmoji(t,e,n){const s=n*this.EMOJI_SIZE,r=0;t.fillStyle=e.backgroundColor,t.beginPath(),t.arc(s+this.EMOJI_SIZE/2,r+this.EMOJI_SIZE/2,this.EMOJI_SIZE/2*.9,0,Math.PI*2),t.fill(),t.font=`${this.EMOJI_SIZE*.6}px ${Im.emojis.fontChain}`,t.textAlign="center",t.textBaseline="middle",t.fillStyle="#000000",t.fillText(e.emoji,s+this.EMOJI_SIZE/2,r+this.EMOJI_SIZE/2)}static getTexture(){return this.texture}static getRandomConfig(){return this.emojiConfigs[Math.floor(Math.random()*this.emojiConfigs.length)]}static getUVs(t){const e=t/this.emojiConfigs.length,n=1/this.emojiConfigs.length;return[new Ft(e,0),new Ft(e+n,0),new Ft(e+n,1),new Ft(e,1)]}};b(on,"canvas"),b(on,"texture"),b(on,"emojiConfigs",[{emoji:"😠",backgroundColor:"#FFE4B5",scale:1},{emoji:"😫",backgroundColor:"#FFB6C1",scale:.9},{emoji:"😤",backgroundColor:"#DDA0DD",scale:1.1},{emoji:"😡",backgroundColor:"#FF6347",scale:1},{emoji:"😱",backgroundColor:"#98FB98",scale:.95}]),b(on,"EMOJI_SIZE",128),b(on,"ATLAS_SIZE",on.EMOJI_SIZE*on.emojiConfigs.length);let Zi=on;class Tn{static initialize(){this.patterns=[...this.getEasyPatterns(),...this.getMediumPatterns(),...this.getHardPatterns(),...this.getExtremePatterns()]}static getEasyPatterns(){return[{id:"E1",difficulty:"EASY",obstacles:[{lane:0,speedMultiplier:1}],gapToNext:30,guaranteedClearLane:1},{id:"E2",difficulty:"EASY",obstacles:[{lane:1,speedMultiplier:1.1}],gapToNext:30,guaranteedClearLane:0},{id:"E3",difficulty:"EASY",obstacles:[{lane:2,speedMultiplier:1}],gapToNext:30,guaranteedClearLane:1},{id:"E4",difficulty:"EASY",obstacles:[{lane:1,speedMultiplier:1.2}],gapToNext:30,guaranteedClearLane:2}]}static getMediumPatterns(){return[{id:"M1",difficulty:"MEDIUM",obstacles:[{lane:0,speedMultiplier:1},{lane:2,speedMultiplier:1}],gapToNext:28,guaranteedClearLane:1},{id:"M2",difficulty:"MEDIUM",obstacles:[{lane:1,speedMultiplier:1.1},{lane:2,speedMultiplier:1}],gapToNext:28,guaranteedClearLane:0},{id:"M3",difficulty:"MEDIUM",obstacles:[{lane:0,speedMultiplier:1},{lane:1,speedMultiplier:1.1}],gapToNext:28,guaranteedClearLane:2},{id:"M4",difficulty:"MEDIUM",obstacles:[{lane:0,speedMultiplier:1.2},{lane:2,speedMultiplier:1.1}],gapToNext:28,guaranteedClearLane:1}]}static getHardPatterns(){return[{id:"H1",difficulty:"HARD",obstacles:[{lane:0,speedMultiplier:1.2},{lane:1,speedMultiplier:1.1}],gapToNext:24,guaranteedClearLane:2},{id:"H2",difficulty:"HARD",obstacles:[{lane:1,speedMultiplier:1.3},{lane:2,speedMultiplier:1.2}],gapToNext:24,guaranteedClearLane:0},{id:"H3",difficulty:"HARD",obstacles:[{lane:0,speedMultiplier:1.3},{lane:2,speedMultiplier:1.3}],gapToNext:24,guaranteedClearLane:1},{id:"H4",difficulty:"HARD",obstacles:[{lane:0,speedMultiplier:1.4},{lane:1,speedMultiplier:1.2}],gapToNext:24,guaranteedClearLane:2}]}static getExtremePatterns(){return[{id:"X1",difficulty:"EXTREME",obstacles:[{lane:0,speedMultiplier:1.5},{lane:1,speedMultiplier:1.4}],gapToNext:20,guaranteedClearLane:2},{id:"X2",difficulty:"EXTREME",obstacles:[{lane:1,speedMultiplier:1.5},{lane:2,speedMultiplier:1.4}],gapToNext:20,guaranteedClearLane:0},{id:"X3",difficulty:"EXTREME",obstacles:[{lane:0,speedMultiplier:1.6},{lane:2,speedMultiplier:1.5}],gapToNext:20,guaranteedClearLane:1},{id:"X4",difficulty:"EXTREME",obstacles:[{lane:0,speedMultiplier:1.7},{lane:1,speedMultiplier:1.6}],gapToNext:20,guaranteedClearLane:2}]}static getPatternsByDifficulty(t){return this.patterns.filter(e=>e.difficulty===t)}static getRandomPattern(t){const e=this.getPatternsByDifficulty(t),n=Math.floor(Math.random()*e.length);return e[n]}static getAllPatterns(){return[...this.patterns]}static validatePattern(t){if(t.obstacles.length===0||t.obstacles.length>2)return!1;const e=t.obstacles.map(r=>r.lane);return new Set(e).size!==e.length?!1:[0,1,2].some(r=>!e.includes(r))}static validateAllPatterns(){const t=[],e=[];for(const n of this.patterns)this.validatePattern(n)?t.push(n):e.push(n);return{valid:t,invalid:e}}static getPatternsByClearLane(t){return this.patterns.filter(e=>e.guaranteedClearLane===t)}static getPatternsByDifficultyAndClearLane(t,e){return this.patterns.filter(n=>n.difficulty===t&&n.guaranteedClearLane===e)}static analyzeClearLaneDistribution(){const t={};for(const e of["EASY","MEDIUM","HARD","EXTREME"]){const n=this.getPatternsByDifficulty(e),s={0:0,1:0,2:0};for(const r of n)r.guaranteedClearLane!==void 0&&s[r.guaranteedClearLane]++;t[e]=s}return t}}b(Tn,"patterns",[]);class La{static getCurrentTier(t){return this.tiers.find(n=>t>=n.minScore&&t<n.maxScore)||this.tiers[this.tiers.length-1]}static selectDifficulty(t,e){const{easy:n,medium:s,hard:r,extreme:a}=t.patternDistribution,o=e;return o<n?"EASY":o<n+s?"MEDIUM":o<n+s+r?"HARD":"EXTREME"}static getSpawnRate(t){const e=this.getCurrentTier(t),n=this.getTierProgress(t,e),s=this.getNextTier(e);if(!s)return e.spawnRate;const r=this.lerp(e.spawnRate,s.spawnRate,n);return Math.round(r)}static getBaseObstacleSpeed(t){const e=this.getCurrentTier(t),n=this.getTierProgress(t,e),s=this.getNextTier(e);return s?this.lerp(e.baseObstacleSpeed,s.baseObstacleSpeed,n):e.baseObstacleSpeed}static getGapBetweenWaves(t){const e=this.getCurrentTier(t),n=this.getTierProgress(t,e),s=this.getNextTier(e);if(!s)return e.gapBetweenWaves;const r=this.lerp(e.gapBetweenWaves,s.gapBetweenWaves,n);return Math.round(r)}static getTierProgress(t,e){return e.maxScore===1/0?0:(t-e.minScore)/(e.maxScore-e.minScore)}static getNextTier(t){const e=this.tiers.indexOf(t);return this.tiers[e+1]}static lerp(t,e,n){return t+(e-t)*Math.max(0,Math.min(1,n))}static getTierName(t){return this.getCurrentTier(t).name}static getAllTiers(){return[...this.tiers]}static validateDistributions(){return this.tiers.every(t=>{const{easy:e,medium:n,hard:s,extreme:r}=t.patternDistribution,a=e+n+s+r;return Math.abs(a-1)<1e-4})}}b(La,"tiers",[{name:"BEGINNER",minScore:0,maxScore:100,patternDistribution:{easy:.8,medium:.2,hard:0,extreme:0},spawnRate:25,baseObstacleSpeed:1,gapBetweenWaves:25},{name:"INTERMEDIATE",minScore:100,maxScore:250,patternDistribution:{easy:.4,medium:.4,hard:.2,extreme:0},spawnRate:22,baseObstacleSpeed:1.1,gapBetweenWaves:22},{name:"ADVANCED",minScore:250,maxScore:500,patternDistribution:{easy:.2,medium:.4,hard:.3,extreme:.1},spawnRate:18,baseObstacleSpeed:1.2,gapBetweenWaves:18},{name:"MASTER",minScore:500,maxScore:1/0,patternDistribution:{easy:.1,medium:.3,hard:.4,extreme:.2},spawnRate:15,baseObstacleSpeed:1.3,gapBetweenWaves:15}]);class cn{static initialize(){this.generateSequences()}static setScore(t){this.score=t}static generateSequences(){const t=Tn.getPatternsByDifficulty("EASY"),e=Tn.getPatternsByDifficulty("MEDIUM"),n=Tn.getPatternsByDifficulty("HARD"),s=Tn.getPatternsByDifficulty("EXTREME");this.sequences=[{id:"SEQ_EE",patterns:this.generateSolvableSequence([t,t,t]),currentIndex:0},{id:"SEQ_EEM",patterns:this.generateSolvableSequence([t,t,e]),currentIndex:0},{id:"SEQ_EMM",patterns:this.generateSolvableSequence([t,e,e]),currentIndex:0},{id:"SEQ_MMH",patterns:this.generateSolvableSequence([e,e,n]),currentIndex:0},{id:"SEQ_MHH",patterns:this.generateSolvableSequence([e,n,n]),currentIndex:0},{id:"SEQ_HHX",patterns:this.generateSolvableSequence([n,n,s]),currentIndex:0},{id:"SEQ_XXX",patterns:this.generateSolvableSequence([s,s,s]),currentIndex:0}]}static generateSolvableSequence(t){const e=[];for(let n=0;n<t.length;n++){const s=t[n];let r;if(n===0)r=this.selectRandom(s);else{const a=e[n-1],o=a.guaranteedClearLane,c=s.filter(l=>l.guaranteedClearLane===o);if(c.length>0)r=this.selectRandom(c);else{const l=s.filter(h=>a.gapToNext>=20);l.length>0?r=this.selectRandom(l):r=this.selectRandom(s)}}e.push(r)}return e}static selectRandom(t){const e=Math.floor(Math.random()*t.length);return t[e]}static getNextPattern(){const t=La.getCurrentTier(this.score),{patternDistribution:e}=t;(!this.currentSequence||this.currentSequence.currentIndex>=this.currentSequence.patterns.length)&&(this.currentSequence=this.selectSequence(t));let n=this.currentSequence.patterns[this.currentSequence.currentIndex];return n=this.ensureSolvablePattern(n,t),this.currentSequence.currentIndex++,this.lastSpawnedPattern=n,n.guaranteedClearLane!==void 0&&(this.currentClearLane=n.guaranteedClearLane),n}static selectSequence(t){const{easy:e,medium:n,hard:s,extreme:r}=t.patternDistribution,a=Math.random();let o;if(a<e)o=this.sequences.find(c=>c.id==="SEQ_EE")||this.sequences[0];else if(a<e+n){const c=Math.floor(Math.random()*3);o=this.sequences[c]}else if(a<e+n+s){const c=3+Math.floor(Math.random()*2);o=this.sequences[c]}else o=this.sequences.find(c=>c.id==="SEQ_XXX")||this.sequences[this.sequences.length-1];return o.currentIndex=0,o}static getCurrentSequenceId(){var t;return((t=this.currentSequence)==null?void 0:t.id)||null}static getCurrentProgress(){return this.currentSequence?{current:this.currentSequence.currentIndex,total:this.currentSequence.patterns.length}:{current:0,total:1}}static ensureSolvablePattern(t,e){if(!this.lastSpawnedPattern||this.lastSpawnedPattern.guaranteedClearLane===t.guaranteedClearLane)return t;const n=this.lastSpawnedPattern.guaranteedClearLane;if(n===void 0||this.lastSpawnedPattern.gapToNext>=20)return t;const o=Tn.getPatternsByDifficulty(t.difficulty).filter(d=>d.guaranteedClearLane===n);if(o.length>0){const d=Math.floor(Math.random()*o.length);return o[d]}const c=Tn.getAllPatterns(),l=c.filter(d=>d.guaranteedClearLane===n&&this.isDifficultyAllowed(d.difficulty,e));if(l.length>0){l.sort((f,m)=>m.gapToNext-f.gapToNext);const d=Math.floor(Math.random()*Math.min(3,l.length));return l[d]}const h=c.filter(d=>d.guaranteedClearLane===n);if(h.length>0){const d=Math.floor(Math.random()*h.length);return h[d]}return t}static isDifficultyAllowed(t,e){const{easy:n,medium:s,hard:r,extreme:a}=e.patternDistribution;switch(t){case"EASY":return n>0;case"MEDIUM":return s>0;case"HARD":return r>0;case"EXTREME":return a>0;default:return!1}}static getCurrentClearLane(){return this.currentClearLane}static reset(){this.currentSequence=null,this.score=0,this.lastSpawnedPattern=null,this.currentClearLane=1}}b(cn,"sequences",[]),b(cn,"currentSequence",null),b(cn,"score",0),b(cn,"lastSpawnedPattern",null),b(cn,"currentClearLane",1);const Um=3,Nm=10,Fm=50,tc=10;class Om{constructor(t,e,n=!0){b(this,"_scene");b(this,"_trackManager");b(this,"_obstacles",[]);b(this,"_activeCount",0);b(this,"_spawnTimer",0);b(this,"_waveCounter",0);b(this,"_dodgedCount",0);b(this,"_emojiFacesEnabled",!1);b(this,"_bodyMaterial");b(this,"_eyeMaterial");b(this,"_faceGeometry");b(this,"_faceMaterial");b(this,"_baseRingGeometry");b(this,"_midRingGeometry");b(this,"_tipGeometry");b(this,"_eyeGeometry");b(this,"_smileGeometry");this._scene=t,this._trackManager=e,this._emojiFacesEnabled=n,Tn.initialize(),cn.initialize(),this._emojiFacesEnabled&&(Zi.initialize(),this._faceGeometry=new mn(.6,.6),this._faceMaterial=new pn({map:Zi.getTexture(),transparent:!0,side:Fe,depthTest:!1})),this._bodyMaterial=new Xe({color:9133628}),this._bodyMaterial.side=le,this._eyeMaterial=new pn({color:16777215}),this._eyeMaterial.side=le,this._baseRingGeometry=new _i(.55,10,8),this._baseRingGeometry.scale(1,.5,1),this._midRingGeometry=new _i(.45,10,8),this._midRingGeometry.scale(1,.5,1),this._tipGeometry=new _i(.2,8,6),this._eyeGeometry=new _i(.1,6,6),this._smileGeometry=new qs(.18,.035,6,6,Math.PI),this.initializeObstaclePool()}createObstacleGroup(){const t=new Wn,e=new Kt(this._baseRingGeometry,this._bodyMaterial);e.position.set(0,.2,0),e.castShadow=!0,e.receiveShadow=!0,t.add(e);const n=new Kt(this._midRingGeometry,this._bodyMaterial);n.position.set(.08,.5,0),n.castShadow=!0,n.receiveShadow=!0,t.add(n);const s=new Kt(this._tipGeometry,this._bodyMaterial);if(s.position.set(-.05,.75,0),s.castShadow=!0,s.receiveShadow=!0,t.add(s),this._emojiFacesEnabled&&this._faceGeometry&&this._faceMaterial){const r=this._faceGeometry.clone(),a=new Kt(r,this._faceMaterial);a.position.set(.08,.5,.5),a.castShadow=!1,a.receiveShadow=!1,a.userData.isEmojiFace=!0,a.userData.emojiIndex=Math.floor(Math.random()*5),t.add(a)}else{const r=new Kt(this._eyeGeometry,this._eyeMaterial);r.position.set(-.14,.55,.45),r.castShadow=!1,r.receiveShadow=!1,t.add(r);const a=new Kt(this._eyeGeometry,this._eyeMaterial);a.position.set(.3,.55,.45),a.castShadow=!1,a.receiveShadow=!1,t.add(a);const o=new Kt(this._smileGeometry,this._eyeMaterial);o.position.set(.08,.4,.5),o.rotation.x=Math.PI/4,o.castShadow=!1,o.receiveShadow=!1,t.add(o)}return t}initializeObstaclePool(){for(let t=0;t<Fm;t++){const e=this.createObstacleGroup();e.visible=!1,this._scene.add(e),this._obstacles.push({mesh:e,active:!1,z:0,lane:0,speedVariation:1,scale:1,rotationY:0,wobbleTime:Math.random()*Math.PI*2,rotationSpeed:0})}}update(t,e,n){this._spawnTimer-=t,cn.setScore(n);const s=La.getSpawnRate(n);this._spawnTimer<=0&&(this.spawnPatternObstacles(),this._spawnTimer=s/60,this._waveCounter++);for(const r of this._obstacles){if(!r.active)continue;const a=e*r.speedVariation;r.z+=a*t,r.wobbleTime+=t*3;const o=this.getLaneX(r.lane);r.mesh.position.set(o,0,r.z);const c=Math.sin(r.wobbleTime)*.1;r.mesh.rotation.y=r.rotationY+c,r.rotationSpeed>0&&(r.mesh.rotation.y+=r.rotationSpeed*t),r.mesh.scale.setScalar(r.scale),r.z>tc&&this.despawnObstacle(r)}}spawnPatternObstacles(){const t=cn.getNextPattern();for(const e of t.obstacles)this.spawnObstacle(e.lane,e.speedMultiplier)}getWeightedRandomLane(t){const e=t.reduce((s,r)=>s+r,0);let n=Math.random()*e;for(let s=0;s<t.length;s++)if(n-=t[s],n<=0)return s;return 0}getAdjacentLanes(t){return t===0?[1,2]:t===1?[0,2]:t===2?[0,1]:[1,2]}spawnObstacle(t,e=1){const n=this._obstacles.find(a=>!a.active);if(!n)return;const s=this._trackManager.getFrontZ()-Nm;if(n.active=!0,n.lane=t,n.z=s,n.speedVariation=e,n.scale=.9+Math.random()*.2,n.rotationY=(Math.random()-.5)*.5,n.emojiIndex=Math.floor(Math.random()*5),this._activeCount++,this._emojiFacesEnabled){const a=n.mesh.children.find(o=>{var c;return((c=o.userData)==null?void 0:c.isEmojiFace)===!0});if(a){const o=Zi.getUVs(n.emojiIndex),c=a.geometry;c.attributes.uv.setXY(0,o[0].x,o[0].y),c.attributes.uv.setXY(1,o[1].x,o[1].y),c.attributes.uv.setXY(2,o[2].x,o[2].y),c.attributes.uv.setXY(3,o[3].x,o[3].y),c.attributes.uv.needsUpdate=!0}}const r=this.getLaneX(t);n.mesh.position.set(r,0,s),n.mesh.rotation.y=n.rotationY,n.mesh.scale.setScalar(n.scale),n.mesh.visible=!0}despawnObstacle(t){t.active=!1,this._activeCount--,t.mesh.visible=!1,t.mesh.position.set(0,-100,0),t.z>tc&&this._dodgedCount++}getLaneX(t){return(t-1)*Um}reset(){for(const t of this._obstacles)t.active&&this.despawnObstacle(t);this._activeCount=0,this._spawnTimer=0,this._waveCounter=0,this._dodgedCount=0,cn.reset()}getActiveCount(){return this._activeCount}getActiveObstacles(){const t=[];for(const e of this._obstacles){if(!e.active)continue;const n=this.getLaneX(e.lane);t.push({x:n,y:.3,z:e.z,lane:e.lane})}return t}getDodgedCount(){return this._dodgedCount}resetDodgedCount(){this._dodgedCount=0}}const fi=.1;class Bm{constructor(){b(this,"_playerBox");b(this,"_obstacleBox");this._playerBox=new fn,this._obstacleBox=new fn}checkPlayerVsObstacles(t,e){this._playerBox.setFromObject(t);const n=e.getActiveObstacles();for(const s of n)if(this._obstacleBox.setFromCenterAndSize(new U(s.x,s.y,s.z),new U(1,1.6,1.4)),this._obstacleBox.min.x-=fi,this._obstacleBox.max.x+=fi,this._obstacleBox.min.y-=fi,this._obstacleBox.max.y+=fi,this._obstacleBox.min.z-=fi,this._obstacleBox.max.z+=fi,this._playerBox.intersectsBox(this._obstacleBox))return!0;return!1}checkPlayerVsTrack(t){return!1}reset(){this._playerBox.makeEmpty(),this._obstacleBox.makeEmpty()}}class km{constructor(){b(this,"_context",null);b(this,"_masterGain",null);b(this,"_enabled",!0);b(this,"_lastScoreMilestone",0);b(this,"_bgmOscillators",[]);b(this,"_bgmGain",null);b(this,"_speed",10);b(this,"_isPlaying",!1);b(this,"_beatTimeoutIds",[])}ensureContext(){this._context||(this._context=new(window.AudioContext||window.webkitAudioContext),this._masterGain=this._context.createGain(),this._masterGain.connect(this._context.destination),this._masterGain.gain.value=.25,this._bgmGain=this._context.createGain(),this._bgmGain.connect(this._masterGain),this._bgmGain.gain.value=.08)}startBackgroundMusic(){this.ensureContext(),!(!this._context||!this._bgmGain)&&(this._isPlaying=!0,this._updateBackgroundMusic())}stopBackgroundMusic(){this._isPlaying=!1,this._bgmOscillators.forEach(t=>{try{t.stop(),t.disconnect()}catch(e){}}),this._bgmOscillators=[],this._beatTimeoutIds.forEach(t=>clearTimeout(t)),this._beatTimeoutIds=[]}_updateBackgroundMusic(){if(!this._isPlaying||!this._context||!this._bgmGain)return;this._bgmOscillators.forEach(a=>{try{a.stop(),a.disconnect()}catch(o){}}),this._bgmOscillators=[];const e=60/Math.max(60,this._speed*6),n=this._context.createOscillator(),s=this._bgmGain;n.type="sine",n.frequency.value=55+this._speed*.5,s.gain.value=.1,n.connect(s),n.start(),this._bgmOscillators.push(n);const r=(a,o)=>{const c=window.setTimeout(()=>{if(!this._isPlaying||!this._context)return;const l=this._context.createOscillator(),h=this._context.createGain(),d=this._context.createBiquadFilter();l.type="triangle",l.frequency.value=o,d.type="lowpass",d.frequency.value=800+this._speed*50,h.gain.setValueAtTime(.05,this._context.currentTime),h.gain.exponentialRampToValueAtTime(.001,this._context.currentTime+.1),l.connect(d),d.connect(h),h.connect(this._masterGain),l.start(),l.stop(this._context.currentTime+.1),this._isPlaying&&r(e,o)},a*1e3);this._beatTimeoutIds.push(c)};r(0,220+this._speed*2),r(e*.5,277+this._speed*2)}update(t){this._speed=t,this._isPlaying&&this._updateBackgroundMusic()}playTone(t,e,n,s=.3){if(!this._enabled||!this._context)return;const r=this._context.createOscillator(),a=this._context.createGain();r.type=e,r.frequency.setValueAtTime(t,this._context.currentTime),a.gain.setValueAtTime(s,this._context.currentTime),a.gain.exponentialRampToValueAtTime(.001,this._context.currentTime+n),r.connect(a),a.connect(this._masterGain),r.start(),r.stop(this._context.currentTime+n)}playLaneChange(){if(this.ensureContext(),!this._context)return;const t=this._context.createOscillator(),e=this._context.createGain(),n=this._context.createBiquadFilter();t.type="sine",t.frequency.setValueAtTime(200,this._context.currentTime),t.frequency.exponentialRampToValueAtTime(450,this._context.currentTime+.12),n.type="lowpass",n.frequency.setValueAtTime(1200,this._context.currentTime),n.Q.value=1,e.gain.setValueAtTime(.2,this._context.currentTime),e.gain.exponentialRampToValueAtTime(.001,this._context.currentTime+.12),t.connect(n),n.connect(e),e.connect(this._masterGain),t.start(),t.stop(this._context.currentTime+.12)}playGameOver(){if(this.ensureContext(),!this._context)return;const t=this._context.createOscillator(),e=this._context.createGain();t.type="sawtooth",t.frequency.setValueAtTime(180,this._context.currentTime),t.frequency.exponentialRampToValueAtTime(40,this._context.currentTime+.4),e.gain.setValueAtTime(.35,this._context.currentTime),e.gain.exponentialRampToValueAtTime(.001,this._context.currentTime+.4),t.connect(e),e.connect(this._masterGain),t.start(),t.stop(this._context.currentTime+.4)}playScoreMilestone(t){if(t-this._lastScoreMilestone<100||(this._lastScoreMilestone=t,this.ensureContext(),!this._context))return;const e=this._context.createOscillator(),n=this._context.createGain();e.type="sine",e.frequency.setValueAtTime(880,this._context.currentTime),e.frequency.setValueAtTime(1100,this._context.currentTime+.08),n.gain.setValueAtTime(.25,this._context.currentTime),n.gain.exponentialRampToValueAtTime(.001,this._context.currentTime+.25),e.connect(n),n.connect(this._masterGain),e.start(),e.stop(this._context.currentTime+.25)}playCollision(){if(this.ensureContext(),!this._context)return;const t=this._context.createOscillator(),e=this._context.createGain();t.type="sine",t.frequency.setValueAtTime(120,this._context.currentTime),t.frequency.exponentialRampToValueAtTime(250,this._context.currentTime+.15),e.gain.setValueAtTime(.3,this._context.currentTime),e.gain.exponentialRampToValueAtTime(.001,this._context.currentTime+.15),t.connect(e),e.connect(this._masterGain),t.start(),t.stop(this._context.currentTime+.15)}playStartGame(){if(this.ensureContext(),!this._context)return;const t=[349,440,523];this._context.currentTime,t.forEach((e,n)=>{setTimeout(()=>{const s=this._context.createOscillator(),r=this._context.createGain();s.type="sine",s.frequency.setValueAtTime(e,this._context.currentTime),r.gain.setValueAtTime(.2,this._context.currentTime),r.gain.exponentialRampToValueAtTime(.001,this._context.currentTime+.35),s.connect(r),r.connect(this._masterGain),s.start(),s.stop(this._context.currentTime+.35)},n*60)})}playPause(){if(this.ensureContext(),!this._context)return;const t=this._context.createOscillator(),e=this._context.createGain();t.type="sine",t.frequency.setValueAtTime(440,this._context.currentTime),t.frequency.setValueAtTime(330,this._context.currentTime+.1),e.gain.setValueAtTime(.15,this._context.currentTime),e.gain.exponentialRampToValueAtTime(.001,this._context.currentTime+.15),t.connect(e),e.connect(this._masterGain),t.start(),t.stop(this._context.currentTime+.15)}playResume(){if(this.ensureContext(),!this._context)return;const t=this._context.createOscillator(),e=this._context.createGain();t.type="sine",t.frequency.setValueAtTime(330,this._context.currentTime),t.frequency.setValueAtTime(440,this._context.currentTime+.1),e.gain.setValueAtTime(.15,this._context.currentTime),e.gain.exponentialRampToValueAtTime(.001,this._context.currentTime+.15),t.connect(e),e.connect(this._masterGain),t.start(),t.stop(this._context.currentTime+.15)}setVolume(t){this._masterGain&&(this._masterGain.gain.value=Math.max(0,Math.min(1,t)))}setEnabled(t){this._enabled=t,this._masterGain&&(this._masterGain.gain.value=t?.25:0)}isEnabled(){return this._enabled}getLastScoreMilestone(){return this._lastScoreMilestone}setLastScoreMilestone(t){this._lastScoreMilestone=t}}const zm=3,Gm=40,Vm=20;class Hm{constructor(t){b(this,"_scene");b(this,"_tileTexture");b(this,"_toiletMesh");b(this,"_decorations",[]);b(this,"_activeCount",0);b(this,"_lastDecorationZ",0);this._scene=t,this._tileTexture=this.createTileTexture(),this._toiletMesh=this.createToiletMesh(),this.initializeDecorations()}createTileTexture(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#FFFAF0",e.fillRect(0,0,512,512);const n=64,s=["#B5D8F7","#F7C5D0","#C5E8C5","#FFF3B5"];for(let a=0;a<512;a+=n)for(let o=0;o<512;o+=n)Math.random()<.15&&(e.fillStyle=s[Math.floor(Math.random()*s.length)],e.fillRect(a+2,o+2,n-4,n-4));e.strokeStyle="#E8DDD0",e.lineWidth=3;for(let a=0;a<=512;a+=n)e.beginPath(),e.moveTo(a,0),e.lineTo(a,512),e.stroke();for(let a=0;a<=512;a+=n)e.beginPath(),e.moveTo(0,a),e.lineTo(512,a),e.stroke();const r=new Ra(t);return r.wrapS=un,r.wrapT=un,r.repeat.set(4,4),r.needsUpdate=!0,r}createToiletMesh(){const t=new Wn,e=new Xe({color:16777215}),n=new Zn(1.2,.9,.45),s=new Kt(n,e);s.position.set(0,.95,-.45),t.add(s);const r=new Xn(.85,.65,.6,12),a=new Kt(r,e);a.position.y=.3,t.add(a);const o=new qs(.85,.12,8,16,Math.PI),c=new Xe({color:16777200}),l=new Kt(o,c);l.position.set(0,.58,0),l.rotation.x=Math.PI/2,t.add(l);const h=new Xn(.9,.9,.08,12),d=new Kt(h,c);d.position.set(0,.75,0),t.add(d);const f=new Xn(.5,.6,.15,12),m=new Kt(f,e);return m.position.y=.075,t.add(m),t.scale.setScalar(.8),t}initializeDecorations(){for(let t=0;t<Vm;t++){const e={mesh:this._toiletMesh.clone(),active:!1,z:0,lane:0};this._scene.add(e.mesh),e.mesh.visible=!1,this._decorations.push(e)}for(let t=0;t<6;t++)this.spawnDecoration()}spawnDecoration(){const t=this._decorations.find(r=>!r.active);if(!t)return;const e=Math.random()<.5?-1:1,n=e*(zm*2.5),s=this._lastDecorationZ-Gm;t.active=!0,t.lane=e,t.z=s,t.mesh.position.set(n,0,s),t.mesh.rotation.y=e===-1?Math.PI/4:-Math.PI/4,t.mesh.visible=!0,this._activeCount++,this._lastDecorationZ=s}update(t,e){for(const n of this._decorations)n.active&&(n.z+=e*t,n.mesh.position.z=n.z,n.z>20&&this.despawnDecoration(n));this._lastDecorationZ>-80&&this.spawnDecoration()}despawnDecoration(t){t.active=!1,this._activeCount--,t.mesh.visible=!1,t.mesh.position.set(0,-100,0)}getTileTexture(){return this._tileTexture}reset(){for(const t of this._decorations)t.active&&this.despawnDecoration(t);this._activeCount=0,this._lastDecorationZ=0;for(let t=0;t<6;t++)this.spawnDecoration()}}const Wm=2.5,Xm=2,qm=8;class Ym{constructor(t){b(this,"_camera");b(this,"_basePosition");b(this,"_targetPosition");this._camera=t,this._basePosition=new U(0,2.8,6),this._targetPosition=new U,this._camera.position.copy(this._basePosition)}update(t){}updateCameraFollow(t,e){this._targetPosition.set(0,t.y+Xm,t.z+qm),this._basePosition.lerp(this._targetPosition,Wm*e),this._camera.lookAt(0,t.y+.5,t.z-15)}reset(){this._targetPosition.set(0,0,0),this._camera.position.copy(this._basePosition)}getCurrentPosition(){return this._basePosition.clone()}}const ec=80,$m=150,Zm=.3;class Km{constructor(t,e){b(this,"_touchStartX",0);b(this,"_touchStartY",0);b(this,"_touchStartTime",0);b(this,"_lastSwipeTime",0);b(this,"_onLaneChange");b(this,"_onPause");b(this,"handleKeyboard",t=>{switch(t.key){case"ArrowLeft":case"a":case"A":this._onLaneChange(-1);break;case"ArrowRight":case"d":case"D":this._onLaneChange(1);break;case"p":case"P":case"Escape":this._onPause&&this._onPause();break}});b(this,"handleTouchStart",t=>{t.touches.length>0&&(this._touchStartX=t.touches[0].clientX,this._touchStartY=t.touches[0].clientY,this._touchStartTime=Date.now())});b(this,"handleTouchEnd",t=>{if(t.changedTouches.length===0)return;const e=Date.now();if(e-this._lastSwipeTime<$m)return;const n=t.changedTouches[0].clientX,s=t.changedTouches[0].clientY,r=n-this._touchStartX,a=Math.abs(s-this._touchStartY),o=e-this._touchStartTime;if(Math.abs(r)>ec&&a<ec*1.5){this._lastSwipeTime=e,r>0?this._onLaneChange(1):this._onLaneChange(-1);return}if(o<300&&Math.abs(r)<20&&a<20){const c=window.innerWidth,l=c*Zm;this._touchStartX<l?(this._lastSwipeTime=e,this._onLaneChange(-1)):this._touchStartX>c-l&&(this._lastSwipeTime=e,this._onLaneChange(1))}});this._onLaneChange=t,this._onPause=e}setup(){this.setupKeyboard(),this.setupTouch()}teardown(){this.removeKeyboard(),this.removeTouch()}setupKeyboard(){window.addEventListener("keydown",this.handleKeyboard)}removeKeyboard(){window.removeEventListener("keydown",this.handleKeyboard)}setupTouch(){window.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),window.addEventListener("touchend",this.handleTouchEnd,{passive:!0})}removeTouch(){window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchend",this.handleTouchEnd)}}class jm{constructor(){b(this,"_startScreen",null);b(this,"_pauseScreen",null);b(this,"_overlay",null);b(this,"_scoreDisplay",null);b(this,"_gameOverScreen",null);b(this,"_finalScore",null);b(this,"_restartButton",null);b(this,"_pauseButton",null);b(this,"_pauseButtonContainer",null);b(this,"_resumeButton",null);b(this,"_leaderboardScreen",null);b(this,"_leaderboardListFull",null);b(this,"_viewLeaderboardButton",null);b(this,"_backToGameOverButton",null);b(this,"_introOverlay",null);b(this,"_introProgressBar",null);b(this,"_introTapPrompt",null);b(this,"_loadingScreen",null);b(this,"_loadingProgressBar",null);b(this,"_loadingTip",null);b(this,"currentGameState",0);b(this,"_onPlay",null);b(this,"_onRestart",null);b(this,"_onPause",null);b(this,"_onResume",null);b(this,"_onViewLeaderboard",null);b(this,"_onBackToGameOver",null);b(this,"_onBackToMenu",null);b(this,"_onSkins",null);b(this,"_onChallenges",null);b(this,"_onStats",null);b(this,"_onSelectSkin",null);b(this,"dailyChallenges",null);b(this,"statsManager",null);b(this,"_countUpRaf",0);b(this,"_lastNearMissTime",0);this.cacheElements(),this.setupEventListeners()}cacheElements(){if(this._startScreen=document.getElementById("start-screen"),this._pauseScreen=document.getElementById("pause-screen"),this._overlay=document.getElementById("overlay"),this._scoreDisplay=document.getElementById("score-display"),this._gameOverScreen=document.getElementById("game-over-screen"),this._finalScore=document.getElementById("final-score"),this._restartButton=document.getElementById("restart-button"),this._pauseButton=document.getElementById("pause-btn"),this._pauseButtonContainer=document.getElementById("pause-button"),this._resumeButton=document.getElementById("resume-button"),this._leaderboardScreen=document.getElementById("leaderboard-screen"),this._leaderboardListFull=document.getElementById("leaderboard-list-full"),this._viewLeaderboardButton=document.getElementById("view-leaderboard-button"),this._backToGameOverButton=document.getElementById("back-to-game-over-button"),this._introOverlay=document.getElementById("intro-overlay"),this._introProgressBar=document.getElementById("intro-progress-bar"),this._introTapPrompt=document.getElementById("intro-tap-prompt"),this._loadingScreen=document.getElementById("loading-screen"),this._loadingProgressBar=document.getElementById("loading-progress-bar"),this._loadingTip=document.getElementById("loading-tip"),!this._startScreen||!this._pauseScreen||!this._overlay||!this._scoreDisplay||!this._gameOverScreen||!this._finalScore||!this._restartButton||!this._pauseButton||!this._pauseButtonContainer||!this._resumeButton||!this._leaderboardScreen||!this._leaderboardListFull||!this._viewLeaderboardButton||!this._backToGameOverButton)throw new Error("Failed to cache UI elements")}setupEventListeners(){this._restartButton&&this._restartButton.addEventListener("click",()=>{this._onRestart&&this._onRestart()}),this._pauseButton&&this._pauseButton.addEventListener("click",()=>{this._onPause&&this._onPause()}),this._resumeButton&&this._resumeButton.addEventListener("click",()=>{this._onResume&&this._onResume()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&(this.currentGameState===Yt.PAUSED?this._onResume&&this._onResume():this.currentGameState===Yt.GAMEOVER?this._onRestart&&this._onRestart():this.currentGameState===Yt.LEADERBOARD&&this._onBackToGameOver&&this._onBackToGameOver()),l.key===" "&&this.currentGameState===Yt.GAMEOVER&&(l.preventDefault(),this._onRestart&&this._onRestart())}),this._startScreen&&this._startScreen.addEventListener("click",l=>{if(l.stopPropagation(),this._startScreen&&!this._startScreen.classList.contains("hidden")){const h=l.target;h.closest("#skins-button")||h.closest("#challenges-button")||h.closest("#stats-button")||h.closest("#play-button")||h.closest(".skin-card")||h.closest(".challenge-item")||h.closest(".stat-card")||h.closest("button")||h.closest("a")||this._onPlay&&this._onPlay()}});const t=document.getElementById("play-button");t&&t.addEventListener("click",l=>{l.stopPropagation(),l.stopImmediatePropagation(),this._onPlay&&this._onPlay()});const e=document.getElementById("skins-button");e&&e.addEventListener("click",l=>{l.stopPropagation(),l.stopImmediatePropagation(),this._onSkins&&this._onSkins()});const n=document.getElementById("challenges-button");n&&n.addEventListener("click",l=>{l.stopPropagation(),l.stopImmediatePropagation(),this._onChallenges&&this._onChallenges()});const s=document.getElementById("stats-button");s&&s.addEventListener("click",l=>{l.stopPropagation(),l.stopImmediatePropagation(),this._onStats&&this._onStats()});const r=document.getElementById("home-button");r&&r.addEventListener("click",l=>{l.stopPropagation(),l.stopImmediatePropagation(),this._onBackToMenu&&this._onBackToMenu()}),this._viewLeaderboardButton&&this._viewLeaderboardButton.addEventListener("click",()=>{this._onViewLeaderboard&&this._onViewLeaderboard()}),this._backToGameOverButton&&this._backToGameOverButton.addEventListener("click",()=>{this._onBackToGameOver&&this._onBackToGameOver()});const a=document.getElementById("back-from-skins-button");a&&a.addEventListener("click",l=>{l.stopPropagation(),l.stopImmediatePropagation(),this._onBackToMenu&&this._onBackToMenu()});const o=document.getElementById("back-from-challenges-button");o&&o.addEventListener("click",l=>{l.stopPropagation(),l.stopImmediatePropagation(),this._onBackToMenu&&this._onBackToMenu()});const c=document.getElementById("back-from-stats-button");c&&c.addEventListener("click",l=>{l.stopPropagation(),l.stopImmediatePropagation(),this._onBackToMenu&&this._onBackToMenu()})}updateScore(t){this._scoreDisplay&&(this._scoreDisplay.textContent=Math.floor(t).toString())}showStartScreen(){this.hideAllScreens(),this._startScreen&&this._overlay&&(this._overlay.classList.remove("hidden"),this._startScreen.classList.remove("hidden"),this._startScreen.classList.add("visible"),this._overlay.classList.add("visible"))}hideStartScreen(){this._startScreen&&this._overlay&&(this._overlay.classList.add("hidden"),this._startScreen.classList.add("hidden")),this._pauseButtonContainer&&(this._pauseButtonContainer.style.display="block")}showGameOverScreen(t,e,n){if(this.hideAllScreens(),this._gameOverScreen&&this._finalScore&&this._overlay){this._overlay.classList.remove("hidden"),this._gameOverScreen.classList.remove("hidden"),cancelAnimationFrame(this._countUpRaf);const s=Math.floor(t),r=Math.min(1500,Math.max(500,s*5)),a=performance.now();this._finalScore.classList.remove("score-counted"),this._finalScore.textContent="Score: 0";const o=l=>{const h=l-a,d=Math.min(h/r,1),f=1-Math.pow(1-d,3),m=Math.floor(f*s);this._finalScore&&(this._finalScore.textContent=`Score: ${m}`),d<1?this._countUpRaf=requestAnimationFrame(o):this._finalScore&&this._finalScore.classList.add("score-counted")};this._countUpRaf=requestAnimationFrame(o);const c=this._gameOverScreen.querySelector(".game-over-message");if(c)c.textContent=e||"",c.classList.toggle("new-best",n===!0);else if(e){const l=document.createElement("p");l.className=`game-over-message${n?" new-best":""}`,l.textContent=e,this._finalScore.insertAdjacentElement("afterend",l)}this._gameOverScreen.classList.add("visible"),this._overlay.classList.add("visible")}}showLeaderboardScreen(){this.hideAllScreens(),this._leaderboardScreen&&this._leaderboardListFull&&this._overlay&&(this._overlay.classList.remove("hidden"),this._leaderboardScreen.classList.remove("hidden"),this._leaderboardScreen.classList.add("visible"),this._overlay.classList.add("visible"))}showSkinsScreen(){this.hideAllScreens();const t=document.getElementById("skin-screen");t&&this._overlay&&(this._overlay.classList.remove("hidden"),t.classList.remove("hidden"),this._overlay.classList.add("visible"),requestAnimationFrame(()=>{t.classList.add("visible")}))}showChallengesScreen(){this.hideAllScreens();const t=document.getElementById("challenges-screen");t&&this._overlay&&(this._overlay.classList.remove("hidden"),t.classList.remove("hidden"),this._overlay.classList.add("visible"),requestAnimationFrame(()=>{t.classList.add("visible")}))}showStatsScreen(){this.hideAllScreens();const t=document.getElementById("stats-screen");t&&this._overlay&&(this._overlay.classList.remove("hidden"),t.classList.remove("hidden"),this._overlay.classList.add("visible"),requestAnimationFrame(()=>{t.classList.add("visible")}))}hideLeaderboardScreen(){this._leaderboardScreen&&this._overlay&&(this._overlay.classList.add("hidden"),this._leaderboardScreen.classList.add("hidden"))}hideGameOverScreen(){this._gameOverScreen&&this._overlay&&(this._overlay.classList.add("hidden"),this._gameOverScreen.classList.add("hidden"))}hideAllScreens(){this._overlay&&(this._overlay.classList.add("hidden"),this._overlay.classList.remove("visible")),this._startScreen&&(this._startScreen.classList.add("hidden"),this._startScreen.classList.remove("visible")),this._pauseScreen&&(this._pauseScreen.classList.add("hidden"),this._pauseScreen.classList.remove("visible")),this._gameOverScreen&&(this._gameOverScreen.classList.add("hidden"),this._gameOverScreen.classList.remove("visible")),this._leaderboardScreen&&(this._leaderboardScreen.classList.add("hidden"),this._leaderboardScreen.classList.remove("visible"));const t=document.getElementById("skin-screen");t&&(t.classList.add("hidden"),t.classList.remove("visible"));const e=document.getElementById("challenges-screen");e&&(e.classList.add("hidden"),e.classList.remove("visible"));const n=document.getElementById("stats-screen");n&&(n.classList.add("hidden"),n.classList.remove("visible")),this._pauseButtonContainer&&(this._pauseButtonContainer.style.display="none")}showScoreDisplay(){this._scoreDisplay&&(this._scoreDisplay.style.display="block")}hideScoreDisplay(){this._scoreDisplay&&(this._scoreDisplay.style.display="none")}showIntroOverlay(){this._introOverlay&&(this._introOverlay.style.display="flex",setTimeout(()=>{var t;(t=this._introOverlay)==null||t.classList.add("visible")},10))}hideIntroOverlay(){this._introOverlay&&(this._introOverlay.classList.remove("visible"),setTimeout(()=>{this._introOverlay&&(this._introOverlay.style.display="none")},500))}updateIntroProgress(t){this._introProgressBar&&(this._introProgressBar.style.width=`${t}%`)}setIntroOpacity(t){this._introOverlay&&(this._introOverlay.style.opacity=t.toString())}setTapPromptOpacity(t){this._introTapPrompt&&(this._introTapPrompt.style.opacity=t.toString())}showLoadingScreen(){this._loadingScreen&&this._loadingScreen.classList.remove("hidden"),this._updateLoadingTip()}hideLoadingScreen(){this._loadingScreen&&this._loadingScreen.classList.add("hidden")}fadeLoadingScreen(){this._loadingScreen&&this._loadingScreen.classList.add("fade-out")}updateLoadingProgress(t){this._loadingProgressBar&&(this._loadingProgressBar.style.width=`${t}%`)}_updateLoadingTip(){const t=["Tip: Swipe left or right to dodge!","Tip: Tap edges of screen to change lanes!","Tip: Watch for gaps between obstacles!","Tip: Speed increases over time!","Tip: Dodge, don't get hit!","Tip: Practice makes perfect!","Tip: Stay focused!","Tip: Every second counts!"];if(this._loadingTip){const e=t[Math.floor(Math.random()*t.length)];this._loadingTip.textContent=e}}setOnPlayCallback(t){this._onPlay=t}setOnRestartCallback(t){this._onRestart=t}setOnPauseCallback(t){this._onPause=t}setOnResumeCallback(t){this._onResume=t}setOnViewLeaderboardCallback(t){this._onViewLeaderboard=t}setOnBackToGameOverCallback(t){this._onBackToGameOver=t}setOnBackToMenuCallback(t){this._onBackToMenu=t}setOnSkinsCallback(t){this._onSkins=t}setOnChallengesCallback(t){this._onChallenges=t}setOnStatsCallback(t){this._onStats=t}setOnSelectSkinCallback(t){this._onSelectSkin=t}setDailyChallenges(t){this.dailyChallenges=t}setStatsManager(t){this.statsManager=t}getLoadingProgressBar(){return this._loadingProgressBar}updateSkinGrid(t,e,n,s){const r=document.getElementById("skin-grid");if(!r)return;r.innerHTML="";const a=document.getElementById("skin-best-score");a&&(a.textContent=`Best: ${Math.floor(s)}`),t.forEach(o=>{const c=n.includes(o.id),l=o.id===e,h=s>=o.unlockScore,d=document.createElement("div");d.className=`skin-card ${l?"selected":""} ${c?"":"locked"}`,d.dataset.skinId=o.id;const f=this._generatePreviewStyle(o);d.innerHTML=`
        <div class="skin-preview" style="${f}"></div>
        <div class="skin-info">
          <div class="skin-name">${o.name}</div>
          <div class="skin-status">
            ${c?"&#10003; Unlocked":`<span class="lock-req">&#128274; ${o.unlockScore} pts</span>`}
          </div>
        </div>
        ${l?'<div class="selected-badge">&#9733;</div>':""}
        ${h&&!c?'<div class="unlock-ready">New!</div>':""}
      `,d.addEventListener("click",()=>{c&&this._onSelectSkin&&this._onSelectSkin(o.id)}),r.appendChild(d)})}_generatePreviewStyle(t){if(t.gradient&&t.gradient.length>=2){const e=this._hexToCss(t.gradient[0]),n=t.gradient.length>2?this._hexToCss(t.gradient[1]):this._hexToCss(t.gradient[t.gradient.length-1]);return`background: linear-gradient(135deg, ${e} 0%, ${n} 100%);`}return`background-color: ${this._hexToCss(t.color)};`}_hexToCss(t){return"#"+t.toString(16).padStart(6,"0")}updateChallengesList(t,e){const n=document.getElementById("challenges-list");if(!n)return;const s=document.getElementById("challenges-timer");if(s){const r=`${e.hours.toString().padStart(2,"0")}:${e.minutes.toString().padStart(2,"0")}:${e.seconds.toString().padStart(2,"0")}`;s.textContent=`Reset in ${r}`}n.innerHTML="",t.forEach(r=>{const a=document.createElement("div"),o=r.completed,c=`challenge-${r.id}`;a.className=`challenge-item ${o?"completed":""}`,a.innerHTML=`
        <div class="challenge-icon">${r.icon}</div>
        <div class="challenge-info">
          <div class="challenge-title">
            ${r.title}
            <button class="challenge-info-btn" data-challenge="${c}" aria-label="Show challenge details">&#8505;&#65039;</button>
          </div>
          <div class="challenge-details" id="${c}">
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
      `;const l=a.querySelector(".challenge-info-btn");l&&l.addEventListener("click",h=>{h.stopPropagation();const d=document.getElementById(c);d&&d.classList.toggle("visible")}),n.appendChild(a)})}updateChallengesDisplay(){try{if(!this.dailyChallenges)return;const t=this.dailyChallenges.getChallenges(),e=this.dailyChallenges.getTimeRemaining();this.updateChallengesList(t,e),this._updateCoinDisplay()}catch(t){}}updateStatsFromManager(){try{if(!this.statsManager)return;const t=this.statsManager.getStats();this.updateStatsDisplay(t)}catch(t){}}updateStatsDisplay(t){const e={totalRuns:this._safeNumber(t.totalRuns,0),highestScore:this._safeNumber(t.highestScore,0),totalDistance:this._safeNumber(t.totalDistance,0),totalObstaclesDodged:this._safeNumber(t.totalObstaclesDodged,0),totalPlayTime:this._safeNumber(t.totalPlayTime,0),challengesCompleted:this._safeNumber(t.challengesCompleted,0),skinsUnlocked:t.unlockedSkins.length},n={"stat-total-runs":document.getElementById("stat-total-runs"),"stat-highest-score":document.getElementById("stat-highest-score"),"stat-total-distance":document.getElementById("stat-total-distance"),"stat-obstacles-dodged":document.getElementById("stat-obstacles-dodged"),"stat-play-time":document.getElementById("stat-play-time"),"stat-challenges-completed":document.getElementById("stat-challenges"),"stat-skins-unlocked":document.getElementById("stat-skins")};if(n["stat-total-runs"]&&(n["stat-total-runs"].textContent=e.totalRuns.toString()),n["stat-highest-score"]&&(n["stat-highest-score"].textContent=Math.floor(e.highestScore).toString()),n["stat-total-distance"]&&(n["stat-total-distance"].textContent=Math.round(e.totalDistance).toString()),n["stat-obstacles-dodged"]&&(n["stat-obstacles-dodged"].textContent=e.totalObstaclesDodged.toString()),n["stat-play-time"]){const s=this._safeNumber(t.totalPlayTime,0),r=Math.floor(s/3600),a=Math.floor(s%3600/60),o=r>0?`${r}h ${a}m`:`${a}m`;n["stat-play-time"].textContent=o}n["stat-challenges-completed"]&&(n["stat-challenges-completed"].textContent=e.challengesCompleted.toString()),n["stat-skins-unlocked"]&&(n["stat-skins-unlocked"].textContent=e.skinsUnlocked.toString())}showPauseButton(){this._pauseButtonContainer&&(this._pauseButtonContainer.style.display="block")}hidePauseButton(){this._pauseButtonContainer&&(this._pauseButtonContainer.style.display="none")}showPauseScreen(){this.hideAllScreens(),this._pauseScreen&&this._overlay&&(this._overlay.classList.remove("hidden"),this._pauseScreen.classList.remove("hidden"),this._pauseScreen.classList.add("visible"),this._overlay.classList.add("visible"))}hidePauseScreen(){this._pauseScreen&&this._overlay&&(this._overlay.classList.add("hidden"),this._pauseScreen.classList.add("hidden"))}updateLeaderboardFull(t){this._leaderboardListFull&&(this._leaderboardListFull.innerHTML="",t.forEach((e,n)=>{var r;const s=document.createElement("li");s.className="leaderboard-item",s.innerHTML=`
          <span class="leaderboard-rank">#${n+1}</span>
          <span class="leaderboard-score">${Math.floor(e.score)}</span>
          <span class="leaderboard-date">${e.date}</span>
        `,(r=this._leaderboardListFull)==null||r.appendChild(s)}))}setGameState(t){switch(this.currentGameState=t,t){case Yt.MENU:this.showStartScreen(),this.hideScoreDisplay(),this.hidePauseButton();break;case Yt.PLAYING:this.hideAllScreens(),this.showScoreDisplay(),this.showPauseButton();break;case Yt.PAUSED:this.showPauseScreen(),this.hidePauseButton();break;case Yt.GAMEOVER:this.hideScoreDisplay(),this.hidePauseButton();break;case Yt.LEADERBOARD:this.showLeaderboardScreen(),this.hidePauseButton();break;case Yt.SKINS:this.showSkinsScreen(),this.hidePauseButton();break;case Yt.CHALLENGES:this.showChallengesScreen(),this.hidePauseButton();break;case Yt.STATS:this.showStatsScreen(),this.hidePauseButton();break}}triggerScoreFlash(){this._scoreDisplay&&(this._scoreDisplay.classList.remove("score-flash"),this._scoreDisplay.offsetWidth,this._scoreDisplay.classList.add("score-flash"))}showScorePopup(t,e){const n=document.createElement("div");n.className=`score-popup${e?" near-miss":""}`,n.textContent=t,document.body.appendChild(n),setTimeout(()=>n.remove(),900)}showNearMissToast(){const t=Date.now();if(t-this._lastNearMissTime<1e3)return;this._lastNearMissTime=t;const e=document.createElement("div");e.className="near-miss-toast",e.textContent="Close call!",document.body.appendChild(e),setTimeout(()=>e.classList.add("visible"),10),setTimeout(()=>{e.classList.remove("visible"),setTimeout(()=>e.remove(),200)},800)}showStreakNotification(t){const e=document.createElement("div");e.className="streak-notification",e.innerHTML=`
      <span class="streak-fire">&#128293;</span>
      <span class="streak-text">Streak x${t}!</span>
    `,document.body.appendChild(e),setTimeout(()=>e.classList.add("visible"),10),setTimeout(()=>{e.classList.remove("visible"),setTimeout(()=>e.remove(),300)},3e3)}updateSkinDisplay(){}_updateCoinDisplay(){if(!this.dailyChallenges)return;const t=document.getElementById("challenges-coin-value");if(t){const e=this.dailyChallenges.getCoinBalance();t.textContent=e.toString()}}_safeNumber(t,e){return typeof t=="number"&&!isNaN(t)&&isFinite(t)?Math.max(0,t):e}}class Jm{constructor(t){b(this,"_button");b(this,"_icon");b(this,"_audioManager");b(this,"_storageKey","toiletRunner.audioEnabled");this._audioManager=t,this._button=document.getElementById("audio-button"),this._icon=this._button.querySelector(".audio-icon");const n=localStorage.getItem(this._storageKey)!=="false";this._audioManager.setEnabled(n),this.updateIcon(n),this._button.addEventListener("click",()=>this.toggleAudio())}toggleAudio(){const e=!this._audioManager.isEnabled();this._audioManager.setEnabled(e),this.updateIcon(e),localStorage.setItem(this._storageKey,e.toString())}updateIcon(t){this._icon.textContent=t?"🔊":"🔇"}}const Qm="modulepreload",tg=function(i,t){return new URL(i,t).href},nc={},pi=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let a=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(e.map(h=>{if(h=tg(h,n),h in nc)return;nc[h]=!0;const d=h.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!n)for(let v=o.length-1;v>=0;v--){const p=o[v];if(p.href===h&&(!d||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${f}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":Qm,d||(g.as="script"),g.crossOrigin="",g.href=h,l&&g.setAttribute("nonce",l),document.head.appendChild(g),d)return new Promise((v,p)=>{g.addEventListener("load",v),g.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};class eg{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ng=new Aa(-1,1,1,-1,0,1);class ig extends Ae{constructor(){super(),this.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ae([0,2,0,0,2,0],2))}}const sg=new ig;class rg{constructor(t){this._mesh=new Kt(sg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ng)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Vc extends eg{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof qe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Rc.clone(t.uniforms),this.material=new qe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new rg(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const ag=Object.freeze(Object.defineProperty({__proto__:null,ShaderPass:Vc},Symbol.toStringTag,{value:"Module"}));class og{constructor(t,e,n){b(this,"composer",null);b(this,"renderPass",null);b(this,"bloomPass",null);b(this,"fxaaPass",null);b(this,"vignettePass",null);b(this,"outputPass",null);this.renderer=t,this.scene=e,this.camera=n}initialize(t){return me(this,null,function*(){if(!t.enabled)return;const{EffectComposer:e}=yield pi(()=>me(null,null,function*(){const{EffectComposer:r}=yield import("./EffectComposer-OHyDimjS.js");return{EffectComposer:r}}),__vite__mapDeps([0,1]),import.meta.url);this.composer=new e(this.renderer),this.composer.setPixelRatio(Math.min(window.devicePixelRatio,2));const{RenderPass:n}=yield pi(()=>me(this,null,function*(){const{RenderPass:r}=yield import("./RenderPass-Ctv2KbeG.js");return{RenderPass:r}}),[],import.meta.url);if(this.renderPass=new n(this.scene,this.camera),this.composer.addPass(this.renderPass),t.bloom){const{UnrealBloomPass:r}=yield pi(()=>me(this,null,function*(){const{UnrealBloomPass:c}=yield import("./UnrealBloomPass-TcUMxGq4.js");return{UnrealBloomPass:c}}),__vite__mapDeps([2,1]),import.meta.url),a=/Android|iPhone|iPad/i.test(navigator.userAgent),o=new Ft(a?window.innerWidth*.5:window.innerWidth,a?window.innerHeight*.5:window.innerHeight);this.bloomPass=new r(o,t.bloom.strength,t.bloom.radius,t.bloom.threshold),this.composer.addPass(this.bloomPass)}if(t.fxaa){const{ShaderPass:r}=yield pi(()=>me(this,null,function*(){const{ShaderPass:o}=yield Promise.resolve().then(()=>ag);return{ShaderPass:o}}),void 0,import.meta.url),{FXAAShader:a}=yield pi(()=>me(this,null,function*(){const{FXAAShader:o}=yield import("./FXAAShader-D_m-rc7V.js");return{FXAAShader:o}}),[],import.meta.url);this.fxaaPass=new r(a),this.fxaaPass.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight),this.composer.addPass(this.fxaaPass)}t.vignette&&!this.isMobile()&&(this.vignettePass=new Vc(cg),this.vignettePass.uniforms.offset.value=t.vignette.offset,this.vignettePass.uniforms.darkness.value=t.vignette.darkness,this.composer.addPass(this.vignettePass));const{OutputPass:s}=yield pi(()=>me(this,null,function*(){const{OutputPass:r}=yield import("./OutputPass-BqUPfMSl.js");return{OutputPass:r}}),[],import.meta.url);this.outputPass=new s,this.composer.addPass(this.outputPass)})}render(){this.composer&&this.composer.render()}resize(t,e){this.composer&&this.composer.setSize(t,e),this.fxaaPass&&this.fxaaPass.uniforms.resolution.value.set(1/t,1/e)}dispose(){this.composer&&(this.composer.dispose(),this.composer=null)}isEnabled(){return this.composer!==null}isMobile(){return/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}}const cg={uniforms:{tDiffuse:{value:null},offset:{value:.5},darkness:{value:.3}},vertexShader:`
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
  `};var Xi=(i=>(i.DUST="dust",i.SPARKLE="sparkle",i.IMPACT="impact",i.COIN="coin",i))(Xi||{});class Rs{constructor(t,e){b(this,"particles",[]);b(this,"instancedMesh");b(this,"matrix",new $t);b(this,"tempVector",new U);b(this,"tempColor",new It);b(this,"tempEuler",new Le);this.scene=t,this.config=e,this.initializeInstancedMesh(),this.initializeParticles()}initializeInstancedMesh(){const t=new mn(this.config.size.max,this.config.size.max),e=new pn({transparent:!0,opacity:1,side:Fe,depthWrite:!1,vertexColors:!0});this.instancedMesh=new ks(t,e,this.config.maxParticles),this.instancedMesh.instanceMatrix.setUsage(Bl),this.scene.add(this.instancedMesh)}initializeParticles(){for(let t=0;t<this.config.maxParticles;t++)this.particles.push({position:new U(0,-100,0),velocity:new U,lifetime:0,maxLifetime:0,active:!1,color:new It(1,1,1),size:1,rotation:new Le,rotationSpeed:new U})}emit(t,e=10){let n=0;for(const s of this.particles)if(!s.active&&(this.resetParticle(s,t),s.active=!0,n++,n>=e))break}resetParticle(t,e){t.position.copy(e);const n=Math.random()*Math.PI*2,s=Math.random()*Math.PI*.5,r=kn.randFloat(this.config.speed.min,this.config.speed.max);t.velocity.set(Math.sin(s)*Math.cos(n)*r,Math.cos(s)*r+r*.5,Math.sin(s)*Math.sin(n)*r),t.maxLifetime=this.config.lifetime*(.7+Math.random()*.6),t.lifetime=t.maxLifetime;const a=this.config.colors[Math.floor(Math.random()*this.config.colors.length)];t.color.setHex(a),t.size=kn.randFloat(this.config.size.min/this.config.size.max,1),t.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),t.rotationSpeed.set(Math.random()*6-3,Math.random()*10-5,Math.random()*6-3)}update(t){let e=0;for(let n=0;n<this.particles.length;n++){const s=this.particles[n];if(!s.active){this.matrix.setPosition(0,-100,0),this.instancedMesh.setMatrixAt(n,this.matrix);continue}s.lifetime-=t,s.velocity.y-=this.config.gravity*t,this.tempVector.copy(s.velocity).multiplyScalar(t),s.position.add(this.tempVector),s.rotation.x+=s.rotationSpeed.x*t,s.rotation.y+=s.rotationSpeed.y*t,s.rotation.z+=s.rotationSpeed.z*t,this.matrix.compose(s.position,new Pi().setFromEuler(s.rotation),this.tempVector.setScalar(s.size*this.config.size.max)),this.instancedMesh.setMatrixAt(n,this.matrix);const r=Math.max(0,s.lifetime/s.maxLifetime);this.tempColor.copy(s.color),this.tempColor.multiplyScalar(r),this.instancedMesh.setColorAt(n,this.tempColor),s.lifetime<=0?(s.active=!1,s.position.set(0,-100,0),this.matrix.setPosition(0,-100,0),this.instancedMesh.setMatrixAt(n,this.matrix)):e++}this.instancedMesh.instanceMatrix.needsUpdate=!0,this.instancedMesh.instanceColor&&(this.instancedMesh.instanceColor.needsUpdate=!0),this.instancedMesh.visible=e>0}reset(){for(let t=0;t<this.particles.length;t++){const e=this.particles[t];e.active&&(e.active=!1,e.position.set(0,-100,0),this.matrix.setPosition(0,-100,0),this.instancedMesh.setMatrixAt(t,this.matrix))}this.instancedMesh.instanceMatrix.needsUpdate=!0,this.instancedMesh.visible=!1}dispose(){this.scene.remove(this.instancedMesh),this.instancedMesh.geometry.dispose(),this.instancedMesh.material.dispose(),this.particles=[]}getActiveCount(){return this.particles.filter(t=>t.active).length}emitDust(t){for(let e=0;e<3;e++)this.emit(t,2)}emitSparkle(t){this.tempVector.copy(t),this.tempVector.y+=1,this.emit(this.tempVector,8)}emitImpact(t){this.emit(t,15)}emitCoin(t){this.emit(t,20)}}const Ps={dust:{maxParticles:200,colors:[13808780,12687979,10519149,9139029],size:{min:.04,max:.12},speed:{min:.5,max:2},lifetime:.4,gravity:1},sparkle:{maxParticles:200,colors:[16766720,16753920,16776960,16777215,16770229],size:{min:.06,max:.18},speed:{min:1,max:4},lifetime:1,gravity:.5},impact:{maxParticles:200,colors:[16777215,16119260,9139029,7029795,16739179],size:{min:.08,max:.25},speed:{min:2,max:8},lifetime:.8,gravity:12},coin:{maxParticles:200,colors:[16766720,16753920,16776960,16770229,65280],size:{min:.05,max:.15},speed:{min:2,max:6},lifetime:1.2,gravity:3}};class Vs{static setQuality(t){this.quality!==t&&(this.disposeAll(),this.quality=t)}static getTrackMaterial(t){const e=`track_${this.quality}`;if(this.materials.has(e))return this.materials.get(e);const n=this.getMaterialConfig(),s=this.quality===rn.LOW?new Xe({color:16777215,map:t,side:le}):new bs({color:16777215,map:t,roughness:n.roughness,metalness:n.metalness,side:le});return this.materials.set(e,s),s}static getObstacleMaterial(){const t=`obstacle_${this.quality}`;if(this.materials.has(t))return this.materials.get(t);const e=this.getMaterialConfig(),n=this.quality===rn.LOW?new Xe({color:9133628,side:le}):new bs({color:9133628,roughness:e.roughness+.2,metalness:0,emissive:4862496,emissiveIntensity:.2,side:le});return this.materials.set(t,n),n}static getToiletMaterial(){const t=`toilet_${this.quality}`;if(this.materials.has(t))return this.materials.get(t);const e=this.getMaterialConfig(),n=this.quality===rn.LOW?new Xe({color:16777215,side:le}):new bs({color:16777215,roughness:e.roughness-.1,metalness:e.metalness,side:le});return this.materials.set(t,n),n}static getPlayerMaterial(t){const e=`player_${this.quality}`;if(this.materials.has(e))return this.materials.get(e);const n=this.getMaterialConfig(),s=this.quality===rn.LOW?new Xe({color:16777200,map:t,side:le}):new bs({color:16777200,map:t,roughness:n.roughness+.1,metalness:0,side:le});return this.materials.set(e,s),s}static getWhiteMaterial(){const t=`white_${this.quality}`;if(this.materials.has(t))return this.materials.get(t);const e=new pn({color:16777215,side:le});return this.materials.set(t,e),e}static getMaterialConfig(){switch(this.quality){case rn.LOW:return{roughness:1,metalness:0,envMapIntensity:0};case rn.MEDIUM:return{roughness:.8,metalness:.05,envMapIntensity:.2};case rn.HIGH:return{roughness:.6,metalness:.1,envMapIntensity:.5}}}static disposeAll(){this.materials.forEach(t=>t.dispose()),this.materials.clear()}}b(Vs,"materials",new Map),b(Vs,"quality",rn.MEDIUM);class lg{constructor(){b(this,"_skins",[{id:"classic",name:"Classic White",color:16777215,unlockScore:0,icon:"🧻",description:"The original toilet paper roll"},{id:"gold",name:"Golden Roll",color:16766720,unlockScore:100,icon:"✨",description:"For champions only!"},{id:"rainbow",name:"Pride",color:16738740,gradient:[16711680,16753920,16776960,32768,255,4915330,9699539],unlockScore:200,icon:"🌈",description:"Celebrate diversity!"},{id:"neon",name:"Cyber Glow",color:65280,gradient:[65280,65535],unlockScore:300,icon:"⚡",description:"Future is now!"},{id:"camo",name:"Military",color:4936480,unlockScore:400,icon:"🎖️",description:"Tactical toilet paper"},{id:"fire",name:"Hot Stuff",color:16729344,gradient:[16729344,16766720],unlockScore:500,icon:"🔥",description:"Feeling spicy!"},{id:"ice",name:"Cool Ice",color:65535,gradient:[65535,11393254],unlockScore:600,icon:"❄️",description:"Chill vibes only"},{id:"shadow",name:"Dark Mode",color:1710638,gradient:[1710638,996448],unlockScore:750,icon:"🌙",description:"Stealth mode activated"}]);b(this,"_statsManager",null);this._initializeSkins()}setStatsManager(t){this._statsManager=t}_initializeSkins(){}getSkins(){return this._skins}getSelectedSkinId(){return this._statsManager?this._statsManager.getSelectedSkin():"classic"}getSelectedSkin(){if(!this._statsManager)return;const t=this._statsManager.getSelectedSkin();return this._skins.find(e=>e.id===t)}getSkinColor(t){const e=this._skins.find(n=>n.id===t);return e?e.color:16777215}getSkinGradient(t){const e=this._skins.find(n=>n.id===t);if(e&&e.gradient&&e.gradient.length>=2)return[e.gradient[0],e.gradient[1]]}isSkinUnlocked(t){return this._statsManager?this._statsManager.isSkinUnlocked(t):!1}updateStats(t){const e=[];for(const n of this._skins)t>=n.unlockScore&&e.push(n.id);return{newlyUnlocked:e}}}class hg{constructor(){b(this,"_challenges",[]);b(this,"_lastGenerated","");b(this,"_coinBalance",0);b(this,"_statsManager",null);b(this,"_challengeTemplates",[{title:"Survivor",description:"Survive for 60 seconds",type:"survive",target:60,reward:50,icon:"⏱️"},{title:"Dodge Master",description:"Dodge 30 obstacles",type:"dodge",target:30,reward:75,icon:"🏃"},{title:"High Scorer",description:"Reach a score of 200",type:"score",target:200,reward:100,icon:"🎯"},{title:"On Fire",description:"Get a streak of 5 runs without dying",type:"streak",target:5,reward:150,icon:"🔥"},{title:"Marathon",description:"Travel 1000 units distance",type:"distance",target:1e3,reward:60,icon:"🏃‍♂️"},{title:"Quick Runner",description:"Survive for 45 seconds",type:"survive",target:45,reward:40,icon:"⚡"},{title:"Clean Run",description:"Dodge 20 obstacles without getting hit",type:"dodge",target:20,reward:50,icon:"✨"},{title:"Century",description:"Reach a score of 150",type:"score",target:150,reward:60,icon:"💯"}]);this._loadFromStorage(),this._generateIfNeeded()}setStatsManager(t){this._statsManager=t}_getTodayString(){const t=new Date;return`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`}_loadFromStorage(){try{const t=localStorage.getItem("toiletRunner_challenges");if(t){const n=JSON.parse(t);this._challenges=n.challenges||[],this._lastGenerated=n.lastGenerated||""}const e=localStorage.getItem("toiletRunner_coins");e&&(this._coinBalance=parseInt(e,10)||0)}catch(t){}}_saveToStorage(){try{const t={challenges:this._challenges,lastGenerated:this._lastGenerated};localStorage.setItem("toiletRunner_challenges",JSON.stringify(t)),localStorage.setItem("toiletRunner_coins",this._coinBalance.toString())}catch(t){}}_generateIfNeeded(){const t=this._getTodayString();this._lastGenerated!==t&&(this._generateDailyChallenges(),this._lastGenerated=t,this._saveToStorage())}_generateDailyChallenges(){const e=[...this._challengeTemplates].sort(()=>Math.random()-.5).slice(0,3),n=new Date,s=new Date(n);s.setDate(s.getDate()+1),s.setHours(0,0,0,0),this._challenges=e.map((r,a)=>jn(Rn({},r),{id:`${this._getTodayString()}_${a}`,progress:0,completed:!1,expiresAt:s}))}getChallenges(){return this._generateIfNeeded(),this._challenges}getActiveChallenges(){return this._challenges.filter(t=>!t.completed)}updateProgress(t,e){for(const n of this._challenges)n.completed||n.type!==t||(n.progress=Math.min(n.target,n.progress+e),n.progress>=n.target&&!n.completed&&(n.completed=!0,this.updateCoinBalance(n.reward),this._statsManager&&this._statsManager.incrementChallengesCompleted(),this._saveToStorage()))}getCompletedBonus(){return this._challenges.filter(t=>t.completed).reduce((t,e)=>t+e.reward,0)}resetExpiredChallenges(){const t=new Date;this._challenges=this._challenges.filter(e=>new Date(e.expiresAt)>t),this._saveToStorage()}getTimeRemaining(){const t=new Date,e=new Date(t);e.setDate(e.getDate()+1),e.setHours(0,0,0,0);const n=e.getTime()-t.getTime();return{hours:Math.floor(n/(1e3*60*60)),minutes:Math.floor(n%(1e3*60*60)/(1e3*60)),seconds:Math.floor(n%(1e3*60)/1e3)}}updateCoinBalance(t){this._coinBalance+=t,localStorage.setItem("toiletRunner_coins",this._coinBalance.toString())}getCoinBalance(){return this._coinBalance}}const Gn=class Gn{constructor(){b(this,"_stats");b(this,"_sessionStartTime",0);b(this,"_sessionObstaclesDodged",0);this._stats=this._loadOrCreateStats(),this._migrateLegacyData(),this._checkDailyReset()}_loadOrCreateStats(){try{const t=localStorage.getItem(Gn.STORAGE_KEY);if(t){const e=JSON.parse(t);if(e.stats)return e.stats}}catch(t){}return this._getDefaultStats()}_getDefaultStats(){return{totalRuns:0,highestScore:0,totalDistance:0,totalObstaclesDodged:0,longestRun:0,totalPlayTime:0,gamesToday:0,lastPlayDate:this._getTodayString(),challengesCompleted:0,currentStreak:0,currentStreakDate:this._getTodayString(),selectedSkin:"classic",unlockedSkins:["classic"]}}_getTodayString(){const t=new Date,e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${s}`}_save(){try{const t={version:Gn.CURRENT_VERSION,stats:this._stats,metadata:{lastUpdated:new Date().toISOString(),migratedFrom:["toiletRunner_stats","toiletRunner_gameData"]}};localStorage.setItem(Gn.STORAGE_KEY,JSON.stringify(t))}catch(t){}}_migrateLegacyData(){const t=localStorage.getItem("toiletRunner_stats"),e=localStorage.getItem("toiletRunner_gameData");if(!(!t&&!e))try{const n=t?JSON.parse(t):{},s=e?JSON.parse(e):{};this._stats.totalRuns=Math.max(this._stats.totalRuns,n.totalRuns||s.totalRuns||0),this._stats.highestScore=Math.max(this._stats.highestScore,n.highestScore||s.highestScore||0),this._stats.totalDistance=Math.max(this._stats.totalDistance,n.totalDistance||s.totalDistance||0),this._stats.totalObstaclesDodged=Math.max(this._stats.totalObstaclesDodged,n.totalObstaclesDodged||s.totalObstaclesDodged||0),this._stats.longestRun=Math.max(this._stats.longestRun,n.longestRun||s.longestRun||0),this._stats.totalPlayTime=n.totalPlayTime||0,this._stats.gamesToday=n.gamesToday||0,this._stats.challengesCompleted=n.challengesCompleted||0,this._stats.currentStreak=s.currentStreak||0,this._stats.currentStreakDate=s.currentStreakDate||this._getTodayString(),this._stats.selectedSkin=s.selectedSkin||"classic",s.unlockedSkins&&Array.isArray(s.unlockedSkins)?this._stats.unlockedSkins=[...new Set(s.unlockedSkins)]:n.skinsUnlocked&&typeof n.skinsUnlocked=="number"&&(this._stats.unlockedSkins=this._convertSkinsNumberToArray(n.skinsUnlocked)),this._save(),this._backupLegacyData(t,e),localStorage.removeItem("toiletRunner_stats"),localStorage.removeItem("toiletRunner_gameData")}catch(n){}}_backupLegacyData(t,e){const n={};t&&(n.toiletRunner_stats_backup=t),e&&(n.toiletRunner_gameData_backup=e);try{localStorage.setItem("toiletRunner_legacy_backup_"+Date.now(),JSON.stringify(n))}catch(s){}}_convertSkinsNumberToArray(t){const e=["classic","gold","rainbow","neon","camo","fire","ice","shadow"],n=["classic"];for(let s=0;s<Math.min(t-1,e.length-1);s++)n.push(e[s]);return n}_checkDailyReset(){const t=this._getTodayString();this._stats.lastPlayDate!==t&&(this._stats.gamesToday=0,this._stats.lastPlayDate=t,this._save())}startSession(){this._sessionStartTime=Date.now(),this._sessionObstaclesDodged=0}endSession(t){const n=(Date.now()-this._sessionStartTime)/1e3;this._stats.totalRuns++,this._stats.totalDistance+=t.distance,this._stats.totalObstaclesDodged+=t.obstaclesDodged,this._stats.totalPlayTime+=n,this._stats.gamesToday++,t.score>this._stats.highestScore&&(this._stats.highestScore=t.score),t.distance>this._stats.longestRun&&(this._stats.longestRun=t.distance),this._save()}updateHighestScore(t){t>this._stats.highestScore&&(this._stats.highestScore=t,this._save())}incrementChallengesCompleted(){this._stats.challengesCompleted++,this._save()}updateStreak(t){const e=this._getTodayString();t?this._stats.currentStreakDate!==e&&(this._stats.currentStreak++,this._stats.currentStreakDate=e):(this._stats.currentStreak=0,this._stats.currentStreakDate=e),this._save()}selectSkin(t){return this.isSkinUnlocked(t)?(this._stats.selectedSkin=t,this._save(),!0):!1}unlockSkin(t){this._stats.unlockedSkins.includes(t)||(this._stats.unlockedSkins.push(t),this._stats.unlockedSkins.sort(),this._save())}isSkinUnlocked(t){return this._stats.unlockedSkins.includes(t)}getStats(){return Rn({},this._stats)}getHighestScore(){return this._stats.highestScore}getCurrentStreak(){return this._stats.currentStreak}getUnlockedSkins(){return[...this._stats.unlockedSkins]}getSelectedSkin(){return this._stats.selectedSkin}getFormattedPlayTime(){const t=Math.floor(this._stats.totalPlayTime/3600),e=Math.floor(this._stats.totalPlayTime%3600/60),n=Math.floor(this._stats.totalPlayTime%60);return t>0?`${t}h ${e}m ${n}s`:e>0?`${e}m ${n}s`:`${n}s`}getAverageScore(){return this._stats.totalRuns===0?0:Math.round(this._stats.totalDistance/this._stats.totalRuns)}getSuccessRate(){return this._stats.totalRuns===0||this._stats.totalDistance===0?0:Math.round(this._stats.longestRun/this._stats.totalDistance*100)}resetAllStats(){this._stats=this._getDefaultStats(),this._save()}resetTodayStats(){this._stats.gamesToday=0,this._stats.lastPlayDate=this._getTodayString(),this._save()}};b(Gn,"STORAGE_KEY","toiletRunner_unifiedData"),b(Gn,"CURRENT_VERSION",2);let fa=Gn;class ug{constructor(t){b(this,"_camera");b(this,"_intensity",0);b(this,"_duration",0);b(this,"_elapsed",0);b(this,"_isShaking",!1);b(this,"_originalPosition");b(this,"_currentOffset");b(this,"_targetOffset");this._camera=t,this._originalPosition=new U,this._currentOffset=new U,this._targetOffset=new U,t.getWorldPosition(this._originalPosition)}shake(t,e){this._isShaking?(this._intensity=Math.max(this._intensity,t),this._duration=Math.max(this._duration,e),this._elapsed=0):(this._intensity=t,this._duration=e,this._elapsed=0,this._isShaking=!0,this._camera.getWorldPosition(this._originalPosition))}update(t){if(!this._isShaking){this._currentOffset.lerp(new U(0,0,0),t*10),this._applyOffset();return}this._elapsed+=t;const e=this._elapsed/this._duration;if(e>=1){this._isShaking=!1,this._currentOffset.set(0,0,0),this._applyOffset();return}const n=this._intensity*Math.exp(-e*3),s=this._elapsed*15,r=(Math.random()-.5)*2,a=(Math.random()-.5)*2,o=Math.sin(s*1.7)*.7,c=Math.cos(s*2.3)*.7;this._targetOffset.x=(r+o)*n,this._targetOffset.y=(a+c)*n,this._targetOffset.z=0,this._currentOffset.lerp(this._targetOffset,t*20),this._applyOffset()}_applyOffset(){this._camera.position.copy(this._originalPosition).add(this._currentOffset)}get isShaking(){return this._isShaking}get currentIntensity(){if(!this._isShaking)return 0;const t=this._elapsed/this._duration;return this._intensity*Math.exp(-t*3)}reset(){this._isShaking=!1,this._intensity=0,this._duration=0,this._elapsed=0,this._currentOffset.set(0,0,0),this._targetOffset.set(0,0,0),this._camera.position.copy(this._originalPosition)}syncWithBasePosition(t){this._originalPosition.copy(t)}updateOriginalPosition(){this._isShaking||this._camera.getWorldPosition(this._originalPosition)}}class dg{constructor(){b(this,"_displayedScore",0);b(this,"_targetScore",0);b(this,"_lastMilestone",0);b(this,"_scoreElement",null);b(this,"_isAnimating",!1);this._scoreElement=document.getElementById("score-display"),this._scoreElement||console.warn("[ScoreAnimator] Score display element not found")}updateScore(t){this._targetScore=t;const e=Math.floor(t/100);e>this._lastMilestone&&t>0&&(this._triggerPulse(),this._lastMilestone=e)}update(t){if(Math.abs(this._targetScore-this._displayedScore)<.1)this._displayedScore=this._targetScore,this._isAnimating=!1;else{this._isAnimating=!0;const e=1-Math.pow(.9,t*60),n=this._targetScore-this._displayedScore;this._displayedScore+=n*e}this._updateUI(this._displayedScore)}reset(){this._displayedScore=0,this._targetScore=0,this._lastMilestone=0,this._isAnimating=!1,this._updateUI(0)}getDisplayedScore(){return this._displayedScore}getTargetScore(){return this._targetScore}isAnimating(){return this._isAnimating}_updateUI(t){this._scoreElement&&(this._scoreElement.textContent=Math.floor(t).toString())}_triggerPulse(){this._scoreElement&&(this._scoreElement.classList.remove("pulse"),this._scoreElement.offsetWidth,this._scoreElement.classList.add("pulse"),setTimeout(()=>{this._scoreElement&&this._scoreElement.classList.remove("pulse")},300))}}class fg{constructor(){b(this,"_scoreElement",null);b(this,"_scoreAnimator",null);this._scoreElement=document.getElementById("score-display"),this._scoreElement?this._applyEnhancedStyling():console.warn("[HUD] Score display element not found")}setScoreAnimator(t){this._scoreAnimator=t}updateScore(t){this._scoreAnimator?this._scoreAnimator.updateScore(t):this._updateDirectScore(t)}update(t){this._scoreAnimator&&this._scoreAnimator.update(t)}reset(){this._scoreAnimator?this._scoreAnimator.reset():this._updateDirectScore(0)}_applyEnhancedStyling(){this._scoreElement&&(this._scoreElement.style.background="rgba(26, 26, 46, 0.85)",this._scoreElement.style.backdropFilter="blur(8px)",this._scoreElement.style.borderRadius="12px",this._scoreElement.style.padding="12px 20px",this._scoreElement.style.boxShadow="0 4px 12px rgba(0, 0, 0, 0.3)",this._scoreElement.style.fontSize="28px",this._scoreElement.style.fontWeight="700",this._scoreElement.style.fontFamily="Poppins, sans-serif",this._scoreElement.style.color="#FFFFFF",this._scoreElement.style.letterSpacing="-0.5px")}_updateDirectScore(t){this._scoreElement&&(this._scoreElement.textContent=Math.floor(t).toString())}getScoreElement(){return this._scoreElement}setVisible(t){this._scoreElement&&(this._scoreElement.style.display=t?"block":"none")}triggerFlash(){this._scoreElement&&(this._scoreElement.classList.remove("score-flash"),this._scoreElement.offsetWidth,this._scoreElement.classList.add("score-flash"),setTimeout(()=>{this._scoreElement&&this._scoreElement.classList.remove("score-flash")},500))}triggerPulse(){this._scoreElement&&(this._scoreElement.classList.remove("pulse"),this._scoreElement.offsetWidth,this._scoreElement.classList.add("pulse"),setTimeout(()=>{this._scoreElement&&this._scoreElement.classList.remove("pulse")},300))}}class pg{constructor(t,e){b(this,"positions",[]);b(this,"maxPoints",15);b(this,"trailMesh");b(this,"geometry");b(this,"material");b(this,"tempVector",new U);b(this,"_isLaneChanging",!1);this.player=t,this.scene=e,this.geometry=new Ae,this.material=new zc({color:16777215,transparent:!0,opacity:.5}),this.trailMesh=new mm(this.geometry,this.material),this.trailMesh.visible=!1,e.add(this.trailMesh)}update(t,e,n=!1){if(this._isLaneChanging=n,n){this.positions=[t.clone()],this.trailMesh.visible=!1;return}this.positions.unshift(t.clone());const s=Math.min(e/15,1),r=Math.floor(3+(this.maxPoints-3)*s);if(this.positions=this.positions.slice(0,r),this.positions.length>=2){this.trailMesh.visible=!0;const a=new Float32Array(this.positions.length*3);this.positions.forEach((c,l)=>{a[l*3]=c.x,a[l*3+1]=c.y-.1,a[l*3+2]=c.z}),this.trailMesh.geometry.setAttribute("position",new ye(a,3)),this.material.opacity=.3+.4*s;const o=new Float32Array(this.positions.length*3);for(let c=0;c<this.positions.length;c++)(1-c/this.positions.length)*this.material.opacity,o[c*3]=1,o[c*3+1]=1,o[c*3+2]=1;this.trailMesh.geometry.setAttribute("color",new ye(o,3)),this.material.vertexColors=!0}else this.trailMesh.visible=!1}reset(){this.positions=[],this.trailMesh.visible=!1,this.trailMesh.geometry.setAttribute("position",new ye(new Float32Array(0),3)),this.trailMesh.geometry.setAttribute("color",new ye(new Float32Array(0),3))}dispose(){this.geometry.dispose(),this.material.dispose(),this.scene.remove(this.trailMesh)}isVisible(){return this.trailMesh.visible}setVisibility(t){this.trailMesh.visible=t}}const Vi=20,ic=15,Ar=40,mg=10;class gg{constructor(t){b(this,"_mesh");b(this,"_positions");b(this,"_tempMatrix");b(this,"_material");this._tempMatrix=new $t;const e=new mn(.04,3);this._material=new pn({color:16777215,transparent:!0,opacity:0,depthWrite:!1,side:Fe}),this._mesh=new ks(e,this._material,Vi),this._mesh.frustumCulled=!1,t.add(this._mesh),this._positions=new Float32Array(Vi*3);for(let n=0;n<Vi;n++)this._positions[n*3]=(Math.random()-.5)*12,this._positions[n*3+1]=Math.random()*4+.5,this._positions[n*3+2]=-Math.random()*Ar,this._updateInstance(n);this._mesh.instanceMatrix.needsUpdate=!0}_updateInstance(t){const e=this._positions[t*3],n=this._positions[t*3+1],s=this._positions[t*3+2];this._tempMatrix.makeRotationX(Math.PI/2),this._tempMatrix.setPosition(e,n,s),this._mesh.setMatrixAt(t,this._tempMatrix)}update(t,e){if(e<=ic){this._material.opacity=0;return}const n=Math.min((e-ic)/10,1);this._material.opacity=n*.35;const s=e*t*1.5;for(let r=0;r<Vi;r++)this._positions[r*3+2]+=s,this._positions[r*3+2]>mg&&(this._positions[r*3]=(Math.random()-.5)*12,this._positions[r*3+1]=Math.random()*4+.5,this._positions[r*3+2]=-Ar+Math.random()*5),this._updateInstance(r);this._mesh.instanceMatrix.needsUpdate=!0}reset(){this._material.opacity=0;for(let t=0;t<Vi;t++)this._positions[t*3]=(Math.random()-.5)*12,this._positions[t*3+1]=Math.random()*4+.5,this._positions[t*3+2]=-Math.random()*Ar,this._updateInstance(t);this._mesh.instanceMatrix.needsUpdate=!0}dispose(){this._mesh.geometry.dispose(),this._material.dispose()}}const sc=10,rc=.5,ac=10,oc=100;class _g{constructor(){b(this,"sceneManager");b(this,"gameLoop");b(this,"performanceConfig");b(this,"runner");b(this,"track");b(this,"obstacles");b(this,"collision");b(this,"audioManager");b(this,"environment");b(this,"cameraManager");b(this,"input");b(this,"ui");b(this,"audioControls");b(this,"leaderboard");b(this,"characterCustomization");b(this,"dailyChallenges");b(this,"statsManager");b(this,"cameraShake");b(this,"scoreAnimator");b(this,"hud");b(this,"trailRenderer");b(this,"currentGameState",Yt.MENU);b(this,"score",0);b(this,"survivalTime",0);b(this,"lastDodgedCount",0);b(this,"currentStreak",0);b(this,"challengesNeedUpdate",!1);b(this,"passedObstacles",new Set);b(this,"_isDying",!1);b(this,"_deathTimer",0);b(this,"_deathDuration",1);b(this,"postProcessing");b(this,"dustParticles");b(this,"sparkleParticles");b(this,"impactParticles");b(this,"coinParticles");b(this,"speedLines");b(this,"dustEmissionTimer",0);this.initialize()}initialize(){return me(this,null,function*(){try{this.sceneManager=new ym,this.gameLoop=new Em,this.performanceConfig=yield $i.initialize(),this.setupGameLogic(),this.setupUIAndInput(),this.setupVisualEffects(),this.setupResizeListener(),this.ui.showLoadingScreen(),yield this.performLoading(),this.ui.fadeLoadingScreen(),yield new Promise(t=>setTimeout(t,800)),this.ui.hideLoadingScreen(),this.ui.setGameState(this.currentGameState),this.ui.setDailyChallenges(this.dailyChallenges),this.ui.setStatsManager(this.statsManager),this.updateSkinDisplay(),this.ui.updateChallengesDisplay(),this.ui.updateStatsFromManager(),this.gameLoop.registerSystem(this.update.bind(this)),this.gameLoop.start()}catch(t){this.showFatalError(t)}})}showFatalError(t){const e=t instanceof Error?t.message:"Unknown error",n=e.includes("WebGL")||e.includes("canvas")||e.includes("renderer"),s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:#1a1a2e;display:flex;align-items:center;justify-content:center;z-index:10000;padding:20px;";const r=document.createElement("div");r.style.cssText="text-align:center;color:#fff;font-family:Poppins,sans-serif;max-width:400px;",r.innerHTML=n?`<h2 style="color:#ff6b6b;">WebGL Not Supported</h2>
         <p style="color:#ccc;margin-top:12px;">Your browser or device doesn't support WebGL, which is required to run this game.</p>
         <p style="color:#999;margin-top:8px;">Try using a modern browser like Chrome, Firefox, or Safari.</p>`:`<h2 style="color:#ff6b6b;">Failed to Load Game</h2>
         <p style="color:#ccc;margin-top:12px;">Something went wrong while starting the game.</p>
         <p style="color:#999;margin-top:8px;">Try refreshing the page. If the problem persists, try a different browser.</p>`,s.appendChild(r),document.body.appendChild(s)}setupResizeListener(){let t=null;const e=()=>{t&&window.clearTimeout(t),t=window.setTimeout(()=>{this.sceneManager.resize(window.innerWidth,window.innerHeight),t=null},100)};window.addEventListener("resize",e),window.addEventListener("orientationchange",e)}performLoading(){return me(this,null,function*(){const e=Date.now(),n=this.ui.getLoadingProgressBar();for(;Date.now()-e<1500;){const s=Date.now()-e,r=Math.min(s/1500*100,100);n&&(n.style.width=r+"%"),yield new Promise(a=>setTimeout(a,50))}n&&(n.style.width="100%")})}setupVisualEffects(){const t=this.sceneManager.getScene(),e=this.sceneManager.getCamera(),n=this.sceneManager.getRenderer();Vs.setQuality(this.performanceConfig.tier);const s=this.performanceConfig.particles;this.dustParticles=new Rs(t,jn(Rn({},Ps[Xi.DUST]),{maxParticles:Math.min(50,s.collision)})),this.sparkleParticles=new Rs(t,jn(Rn({},Ps[Xi.SPARKLE]),{maxParticles:Math.min(30,s.effects||15)})),this.impactParticles=new Rs(t,jn(Rn({},Ps[Xi.IMPACT]),{maxParticles:s.collision})),this.coinParticles=new Rs(t,jn(Rn({},Ps[Xi.COIN]),{maxParticles:Math.min(40,s.effects||15)})),this.trailRenderer=new pg(this.runner.getMesh(),t),this.speedLines=new gg(t),this.postProcessing=new og(n,t,e),this.setupPostProcessing()}setupPostProcessing(){this.performanceConfig.postProcessing&&(this.postProcessing.initialize({enabled:!0,bloom:{strength:.4,threshold:.9,radius:.3},fxaa:!0,vignette:{offset:.5,darkness:.3}}),this.sceneManager.setPostProcessing(this.postProcessing))}setupGameLogic(){const t=this.sceneManager.getScene();this.statsManager=new fa,this.scoreAnimator=new dg,this.hud=new fg,this.hud.setScoreAnimator(this.scoreAnimator),this.dailyChallenges=new hg,this.dailyChallenges.setStatsManager(this.statsManager),this.characterCustomization=new lg,this.characterCustomization.setStatsManager(this.statsManager),this.runner=new Lm(t,this.characterCustomization,this.statsManager.getSelectedSkin()),this.track=new Dm(t),this.obstacles=new Om(t,this.track,this.performanceConfig.emojiFaces),this.collision=new Bm,this.audioManager=new km,this.environment=new Hm(t),this.cameraManager=new Ym(this.sceneManager.getCamera()),this.cameraShake=new ug(this.sceneManager.getCamera()),this.leaderboard=new da;const e=this.environment.getTileTexture();Vs.getTrackMaterial(e),this.track.applyTileTexture(e)}setupUIAndInput(){this.input=new Km(this.handleLaneChange.bind(this),this.togglePause.bind(this)),this.input.setup(),this.ui=new jm,this.ui.setOnPlayCallback(this.startGame.bind(this)),this.ui.setOnRestartCallback(this.restartGame.bind(this)),this.ui.setOnPauseCallback(this.handlePause.bind(this)),this.ui.setOnResumeCallback(this.handleResume.bind(this)),this.ui.setOnViewLeaderboardCallback(this.showLeaderboard.bind(this)),this.ui.setOnBackToGameOverCallback(this.backToGameOver.bind(this)),this.ui.setOnBackToMenuCallback(this.backToMenu.bind(this)),this.ui.setOnSkinsCallback(this.showSkinsScreen.bind(this)),this.ui.setOnChallengesCallback(this.showChallengesScreen.bind(this)),this.ui.setOnStatsCallback(this.showStatsScreen.bind(this)),this.ui.setOnSelectSkinCallback(t=>{this.statsManager.selectSkin(t)&&(this.runner.updateSkin(t),this.updateSkinDisplay())}),this.audioControls=new Jm(this.audioManager)}update(t){if($i.updateFPS(t),this.currentGameState===Yt.PLAYING){if(this._isDying){if(this._deathTimer+=t,this._deathTimer>=this._deathDuration){this._isDying=!1,this.endGame();return}const f=t*.15,m=sc+Math.floor(this.score/10)*rc;this.runner.update(f),this.track.update(f,m),this.dustParticles.update(f),this.sparkleParticles.update(f),this.impactParticles.update(f),this.coinParticles.update(f),this.cameraShake.update(f),this.sceneManager.render();return}const e=Math.floor(this.score/10)*rc,n=sc+e;this.survivalTime+=t,this.dailyChallenges.updateProgress("survive",t);const s=this.obstacles.getDodgedCount(),r=s-this.lastDodgedCount;r>0&&(this.dailyChallenges.updateProgress("dodge",r),this.lastDodgedCount=s),this.runner.setSpeed(n),this.runner.update(t),this.track.update(t,n),this.obstacles.update(t,n,this.score),this.environment.update(t,n);const a=this.obstacles.getActiveObstacles(),o=this.runner.getPosition();for(const f of a){const m=`${f.x}_${f.z}`;if(f.z>o.z+2&&!this.passedObstacles.has(m)){this.passedObstacles.add(m);const g=Math.abs(f.x-o.x);if(g<2.5&&g>.5?(this.ui.showScorePopup("CLOSE!",!0),this.runner.triggerSuccessBounce()):g<=.5&&this.ui.showScorePopup("+10",!1),g<=2.5){const p=new U(f.x,o.y,o.z+1);this.sparkleParticles.emitSparkle(p),this.cameraShake.shake(.03,.1)}}}const c=[];this.passedObstacles.forEach(f=>{const[m,g]=f.split("_").map(Number);g>o.z+10&&c.push(f)});for(const f of c)this.passedObstacles.delete(f);const l=this.runner.getPosition();if(this.cameraManager.updateCameraFollow(l,t),this.cameraShake.syncWithBasePosition(this.cameraManager.getCurrentPosition()),this.cameraShake.update(t),this.dustEmissionTimer+=t,this.dustEmissionTimer>.1){const f=this.runner.getPosition();f.z+=.3,f.y-=.2,this.dustParticles.emitDust(f),this.dustEmissionTimer=0}this.dustParticles.update(t),this.sparkleParticles.update(t),this.impactParticles.update(t),this.coinParticles.update(t),this.trailRenderer.update(l,n,this.runner.isChangingLanes()),this.speedLines.update(t,n),!this._isDying&&this.collision.checkPlayerVsObstacles(this.runner.getMesh(),this.obstacles)&&(this.handleCollision(),this.runner.startDeathTumble(),this._isDying=!0,this._deathTimer=0,this.showDeathFlash());const h=Math.floor(this.score);this.score+=ac*t;const d=Math.floor(this.score);d>h&&(this.dailyChallenges.updateProgress("score",d-h),this.challengesNeedUpdate=!0),this.dailyChallenges.updateProgress("distance",ac*t),this.challengesNeedUpdate=!0,this.hud.updateScore(this.score),this.hud.update(t),Math.floor(d/oc)>Math.floor(h/oc)&&(this.audioManager.playScoreMilestone(d),this.ui.triggerScoreFlash(),this.hud.triggerPulse(),this.cameraShake.shake(.08,.2),this.handleScoreMilestone())}else if(this.currentGameState===Yt.PAUSED){this.sceneManager.render();return}this.challengesNeedUpdate&&(this.ui.updateChallengesDisplay(),this.challengesNeedUpdate=!1),this.sceneManager.render()}handleCollision(){this.audioManager.playCollision(),this.cameraShake.shake(.3,.4);const t=this.runner.getPosition();this.impactParticles.emitImpact(t),this.impactParticles.emitImpact(t)}showDeathFlash(){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:white;opacity:0.6;z-index:9000;pointer-events:none;transition:opacity 0.3s ease-out;",document.body.appendChild(t),requestAnimationFrame(()=>{t.style.opacity="0"}),setTimeout(()=>t.remove(),400)}handleScoreMilestone(){const e=this.runner.getPosition().clone();e.y+=1,this.sparkleParticles.emitSparkle(e)}handleResize(){this.sceneManager.resize(window.innerWidth,window.innerHeight)}startGame(){this.ui.hideAllScreens(),this.currentGameState=Yt.PLAYING,this.ui.setGameState(this.currentGameState),this.reset(),this.audioManager.playStartGame(),this.statsManager.startSession()}endGame(){this.currentGameState=Yt.GAMEOVER,this.ui.setGameState(this.currentGameState),this.audioManager.playGameOver(),this.cameraShake.shake(.25,.5),this.leaderboard.addScore(this.score);const t=this.score;this.statsManager.endSession({score:this.score,distance:t,obstaclesDodged:this.obstacles.getDodgedCount(),duration:this.survivalTime}),this.statsManager.updateHighestScore(Math.floor(this.score));const{newlyUnlocked:e}=this.characterCustomization.updateStats(this.statsManager.getHighestScore());e.forEach(c=>this.statsManager.unlockSkin(c)),this.survivalTime>=30||this.score>=100?(this.statsManager.updateStreak(!0),this.dailyChallenges.updateProgress("streak",1),this.ui.showStreakNotification(this.statsManager.getCurrentStreak())):this.statsManager.updateStreak(!1);const s=this.leaderboard.getTopScores();this.ui.updateLeaderboardFull(s),this.ui.updateStatsFromManager(),this.ui.updateChallengesDisplay();const r=this.statsManager.getHighestScore(),a=Math.floor(this.score)>=r&&this.score>0,o=this.getEncouragingMessage(this.score,r,this.survivalTime);this.ui.showGameOverScreen(this.score,o,a)}getEncouragingMessage(t,e,n){return t>=e&&t>0?"New Personal Best!":t>e*.9&&e>0?"So close to your record!":n>60?"Great endurance!":t>200?"Impressive run!":t>50?"Nice dodging!":"Keep practicing!"}showLeaderboard(){this.currentGameState=Yt.LEADERBOARD,this.ui.setGameState(this.currentGameState)}backToGameOver(){this.currentGameState=Yt.GAMEOVER,this.ui.showGameOverScreen(this.score)}backToMenu(){this.currentGameState=Yt.MENU,this.ui.setGameState(this.currentGameState),this.ui.showStartScreen(),this.ui.updateSkinDisplay(),this.ui.updateChallengesDisplay(),this.ui.updateStatsFromManager();const{newlyUnlocked:t}=this.characterCustomization.updateStats(this.statsManager.getHighestScore());t.forEach(e=>this.statsManager.unlockSkin(e))}showSkinsScreen(){this.currentGameState=Yt.SKINS,this.ui.setGameState(this.currentGameState),this.updateSkinDisplay()}showChallengesScreen(){this.currentGameState=Yt.CHALLENGES,this.ui.setGameState(this.currentGameState)}showStatsScreen(){this.currentGameState=Yt.STATS,this.ui.setGameState(this.currentGameState)}restartGame(){this.startGame()}reset(){this.runner.reset(),this.track.reset(),this.obstacles.reset(),this.collision.reset(),this.environment.reset(),this.cameraManager.reset(),this.cameraShake.reset(),this.trailRenderer.reset(),this.speedLines.reset(),this.dustParticles.reset(),this.sparkleParticles.reset(),this.impactParticles.reset(),this.coinParticles.reset(),this.score=0,this.survivalTime=0,this.lastDodgedCount=0,this.currentStreak=0,this.challengesNeedUpdate=!1,this.dustEmissionTimer=0,this._isDying=!1,this._deathTimer=0,this.passedObstacles.clear(),this.audioManager.setLastScoreMilestone(0),this.scoreAnimator.reset(),this.hud.reset()}handleLaneChange(t){if(this.currentGameState===Yt.PLAYING){t===-1?this.runner.moveLeft():this.runner.moveRight(),this.audioManager.playLaneChange(),"vibrate"in navigator&&navigator.maxTouchPoints>0&&navigator.vibrate(15);const e=this.runner.getPosition();e.z+=.5,this.dustParticles.emitDust(e)}}togglePause(){this.currentGameState===Yt.PLAYING?(this.currentGameState=Yt.PAUSED,this.ui.setGameState(this.currentGameState)):this.currentGameState===Yt.PAUSED&&(this.currentGameState=Yt.PLAYING,this.ui.setGameState(this.currentGameState))}handlePause(){this.togglePause(),this.audioManager.playPause()}handleResume(){this.togglePause(),this.audioManager.playResume()}updateSkinDisplay(){const t=this.characterCustomization.getSkins(),e=this.statsManager.getSelectedSkin(),n=this.statsManager.getUnlockedSkins(),s=this.statsManager.getHighestScore();this.ui.updateSkinGrid(t,e,n,s)}triggerCoinPickup(t){const n=(t||this.runner.getPosition()).clone();n.y+=.5,this.coinParticles.emitCoin(n),this.sparkleParticles.emitSparkle(n)}triggerScoreCelebration(t){const e=t||this.runner.getPosition();e.y+=1,this.sparkleParticles.emitSparkle(e)}}document.addEventListener("DOMContentLoaded",()=>me(null,null,function*(){new _g,"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").catch(()=>{})}));export{Ha as A,Mm as C,rg as F,Ji as H,Ml as L,pn as M,An as N,eg as P,xg as R,Vc as S,Rc as U,Ft as V,Yn as W,It as a,qe as b,U as c,Vt as d,Zt as e,Sl as f,yl as g,El as h,bl as i,Al as j};
