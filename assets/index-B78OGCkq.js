(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vo="174",Qh=0,$o=1,td=2,Gl=1,ed=2,An=3,Yn=0,ke=1,Cn=2,Xn=0,Bi=1,Qo=2,tc=3,ec=4,nd=5,li=100,id=101,rd=102,sd=103,ad=104,od=200,cd=201,ld=202,hd=203,Ea=204,Ta=205,dd=206,ud=207,fd=208,pd=209,_d=210,md=211,gd=212,wd=213,vd=214,Ra=0,Aa=1,Ca=2,Gi=3,Pa=4,Ia=5,La=6,Da=7,Vl=0,bd=1,yd=2,qn=0,Sd=1,xd=2,Md=3,Ed=4,Td=5,Rd=6,Ad=7,Wl=300,Vi=301,Wi=302,Ua=303,Fa=304,gs=306,Na=1e3,di=1001,Oa=1002,dn=1003,Cd=1004,Rr=1005,mn=1006,Ns=1007,ui=1008,Dn=1009,jl=1010,Xl=1011,pr=1012,bo=1013,pi=1014,Pn=1015,yr=1016,yo=1017,So=1018,ji=1020,ql=35902,Yl=1021,Jl=1022,hn=1023,Kl=1024,Zl=1025,Hi=1026,Xi=1027,$l=1028,xo=1029,Ql=1030,Mo=1031,Eo=1033,ns=33776,is=33777,rs=33778,ss=33779,za=35840,Ba=35841,Ha=35842,ka=35843,Ga=36196,Va=37492,Wa=37496,ja=37808,Xa=37809,qa=37810,Ya=37811,Ja=37812,Ka=37813,Za=37814,$a=37815,Qa=37816,to=37817,eo=37818,no=37819,io=37820,ro=37821,as=36492,so=36494,ao=36495,th=36283,oo=36284,co=36285,lo=36286,Pd=3200,Id=3201,eh=0,Ld=1,jn="",Ye="srgb",qi="srgb-linear",cs="linear",se="srgb",bi=7680,nc=519,Dd=512,Ud=513,Fd=514,nh=515,Nd=516,Od=517,zd=518,Bd=519,ic=35044,rc="300 es",In=2e3,ls=2001;class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sc=1234567;const lr=Math.PI/180,_r=180/Math.PI;function Ki(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Gt(i,t,e){return Math.max(t,Math.min(e,i))}function To(i,t){return(i%t+t)%t}function Hd(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function kd(i,t,e){return i!==t?(e-i)/(t-i):0}function hr(i,t,e){return(1-e)*i+e*t}function Gd(i,t,e,n){return hr(i,t,1-Math.exp(-e*n))}function Vd(i,t=1){return t-Math.abs(To(i,t*2)-t)}function Wd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function jd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Xd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function qd(i,t){return i+Math.random()*(t-i)}function Yd(i){return i*(.5-Math.random())}function Jd(i){i!==void 0&&(sc=i);let t=sc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Kd(i){return i*lr}function Zd(i){return i*_r}function $d(i){return(i&i-1)===0&&i!==0}function Qd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function eu(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+n)/2),h=a((t+n)/2),u=s((t-n)/2),f=a((t-n)/2),_=s((n-t)/2),w=a((n-t)/2);switch(r){case"XYX":i.set(o*h,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*w,c*_,o*l);break;case"YXY":i.set(c*_,o*h,c*w,o*l);break;case"ZYZ":i.set(c*w,c*_,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Fi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ih={DEG2RAD:lr,RAD2DEG:_r,generateUUID:Ki,clamp:Gt,euclideanModulo:To,mapLinear:Hd,inverseLerp:kd,lerp:hr,damp:Gd,pingpong:Vd,smoothstep:Wd,smootherstep:jd,randInt:Xd,randFloat:qd,randFloatSpread:Yd,seededRandom:Jd,degToRad:Kd,radToDeg:Zd,isPowerOfTwo:$d,ceilPowerOfTwo:Qd,floorPowerOfTwo:tu,setQuaternionFromProperEuler:eu,normalize:ze,denormalize:Fi};class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,r,s,a,o,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],_=n[5],w=n[8],b=r[0],g=r[3],m=r[6],R=r[1],T=r[4],M=r[7],B=r[2],P=r[5],L=r[8];return s[0]=a*b+o*R+c*B,s[3]=a*g+o*T+c*P,s[6]=a*m+o*M+c*L,s[1]=l*b+h*R+u*B,s[4]=l*g+h*T+u*P,s[7]=l*m+h*M+u*L,s[2]=f*b+_*R+w*B,s[5]=f*g+_*T+w*P,s[8]=f*m+_*M+w*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*s,_=l*s-a*c,w=e*u+n*f+r*_;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=u*b,t[1]=(r*l-h*n)*b,t[2]=(o*n-r*a)*b,t[3]=f*b,t[4]=(h*e-r*c)*b,t[5]=(r*s-o*e)*b,t[6]=_*b,t[7]=(n*c-l*e)*b,t[8]=(a*e-n*s)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Os.makeScale(t,e)),this}rotate(t){return this.premultiply(Os.makeRotation(-t)),this}translate(t,e){return this.premultiply(Os.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Os=new Ot;function rh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nu(){const i=mr("canvas");return i.style.display="block",i}const ac={};function ai(i){i in ac||(ac[i]=!0,console.warn(i))}function iu(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function ru(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function su(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const oc=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cc=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function au(){const i={enabled:!0,workingColorSpace:qi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===se&&(r.r=Ln(r.r),r.g=Ln(r.g),r.b=Ln(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===se&&(r.r=ki(r.r),r.g=ki(r.g),r.b=ki(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===jn?cs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qi]:{primaries:t,whitePoint:n,transfer:cs,toXYZ:oc,fromXYZ:cc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:n,transfer:se,toXYZ:oc,fromXYZ:cc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),i}const $t=au();function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let yi;class ou{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{yi===void 0&&(yi=mr("canvas")),yi.width=t.width,yi.height=t.height;const n=yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=yi}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ln(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cu=0;class Ro{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Ki(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(zs(r[a].image)):s.push(zs(r[a]))}else s=zs(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function zs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ou.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lu=0;class Ge extends Ji{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=di,r=di,s=mn,a=ui,o=hn,c=Dn,l=Ge.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Ki(),this.name="",this.source=new Ro(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Na:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case Oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Na:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case Oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Wl;Ge.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,r=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],_=c[5],w=c[9],b=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(w-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(w+g)<.1&&Math.abs(l+_+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,M=(_+1)/2,B=(m+1)/2,P=(h+f)/4,L=(u+b)/4,H=(w+g)/4;return T>M&&T>B?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=P/n,s=L/n):M>B?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=P/r,s=H/r):B<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(B),n=L/s,r=H/s),this.set(n,r,s,e),this}let R=Math.sqrt((g-w)*(g-w)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(R)<.001&&(R=1),this.x=(g-w)/R,this.y=(u-b)/R,this.z=(f-h)/R,this.w=Math.acos((l+_+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hu extends Ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ge(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Ro(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends hu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class sh extends Ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class du extends Ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Zi=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3];const f=s[a+0],_=s[a+1],w=s[a+2],b=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=_,t[e+2]=w,t[e+3]=b;return}if(u!==b||c!==f||l!==_||h!==w){let g=1-o;const m=c*f+l*_+h*w+u*b,R=m>=0?1:-1,T=1-m*m;if(T>Number.EPSILON){const B=Math.sqrt(T),P=Math.atan2(B,m*R);g=Math.sin(g*P)/B,o=Math.sin(o*P)/B}const M=o*R;if(c=c*g+f*M,l=l*g+_*M,h=h*g+w*M,u=u*g+b*M,g===1-o){const B=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=B,l*=B,h*=B,u*=B}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[a],f=s[a+1],_=s[a+2],w=s[a+3];return t[e]=o*w+h*u+c*_-l*f,t[e+1]=c*w+h*f+l*u-o*_,t[e+2]=l*w+h*_+o*f-c*u,t[e+3]=h*w-o*u-c*f-l*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),u=o(s/2),f=c(n/2),_=c(r/2),w=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*_*w,this._y=l*_*u-f*h*w,this._z=l*h*w+f*_*u,this._w=l*h*u-f*_*w;break;case"YXZ":this._x=f*h*u+l*_*w,this._y=l*_*u-f*h*w,this._z=l*h*w-f*_*u,this._w=l*h*u+f*_*w;break;case"ZXY":this._x=f*h*u-l*_*w,this._y=l*_*u+f*h*w,this._z=l*h*w+f*_*u,this._w=l*h*u-f*_*w;break;case"ZYX":this._x=f*h*u-l*_*w,this._y=l*_*u+f*h*w,this._z=l*h*w-f*_*u,this._w=l*h*u+f*_*w;break;case"YZX":this._x=f*h*u+l*_*w,this._y=l*_*u+f*h*w,this._z=l*h*w-f*_*u,this._w=l*h*u-f*_*w;break;case"XZY":this._x=f*h*u-l*_*w,this._y=l*_*u-f*h*w,this._z=l*h*w+f*_*u,this._w=l*h*u+f*_*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(h-c)*_,this._y=(s-l)*_,this._z=(a-r)*_}else if(n>o&&n>u){const _=2*Math.sqrt(1+n-o-u);this._w=(h-c)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+l)/_}else if(o>u){const _=2*Math.sqrt(1+o-n-u);this._w=(s-l)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(c+h)/_}else{const _=2*Math.sqrt(1+u-n-o);this._w=(a-r)/_,this._x=(s+l)/_,this._y=(c+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const _=1-e;return this._w=_*a+e*this._w,this._x=_*n+e*this._x,this._y=_*r+e*this._y,this._z=_*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class ah{constructor(t=0,e=0,n=0){ah.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),h=2*(o*e-s*r),u=2*(s*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bs.copy(this).projectOnVector(t),this.sub(Bs)}reflect(t){return this.sub(Bs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Bs=new N,lc=new Zi;class Sr{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,sn):sn.fromBufferAttribute(s,a),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ar.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(t.matrixWorld),this.union(Ar)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nr),Cr.subVectors(this.max,nr),Si.subVectors(t.a,nr),xi.subVectors(t.b,nr),Mi.subVectors(t.c,nr),zn.subVectors(xi,Si),Bn.subVectors(Mi,xi),Qn.subVectors(Si,Mi);let e=[0,-zn.z,zn.y,0,-Bn.z,Bn.y,0,-Qn.z,Qn.y,zn.z,0,-zn.x,Bn.z,0,-Bn.x,Qn.z,0,-Qn.x,-zn.y,zn.x,0,-Bn.y,Bn.x,0,-Qn.y,Qn.x,0];return!Hs(e,Si,xi,Mi,Cr)||(e=[1,0,0,0,1,0,0,0,1],!Hs(e,Si,xi,Mi,Cr))?!1:(Pr.crossVectors(zn,Bn),e=[Pr.x,Pr.y,Pr.z],Hs(e,Si,xi,Mi,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new N,new N,new N,new N,new N,new N,new N,new N],sn=new N,Ar=new Sr,Si=new N,xi=new N,Mi=new N,zn=new N,Bn=new N,Qn=new N,nr=new N,Cr=new N,Pr=new N,ti=new N;function Hs(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ti.fromArray(i,s);const o=r.x*Math.abs(ti.x)+r.y*Math.abs(ti.y)+r.z*Math.abs(ti.z),c=t.dot(ti),l=e.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const uu=new Sr,ir=new N,ks=new N;class ws{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):uu.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ir.subVectors(t,this.center);const e=ir.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ir,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ks.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ir.copy(t.center).add(ks)),this.expandByPoint(ir.copy(t.center).sub(ks))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new N,Gs=new N,Ir=new N,Hn=new N,Vs=new N,Lr=new N,Ws=new N;let Ao=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Gs.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(Gs);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ir),o=Hn.dot(this.direction),c=-Hn.dot(Ir),l=Hn.lengthSq(),h=Math.abs(1-a*a);let u,f,_,w;if(h>0)if(u=a*c-o,f=a*o-c,w=s*h,u>=0)if(f>=-w)if(f<=w){const b=1/h;u*=b,f*=b,_=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),_=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),_=-u*u+f*(f+2*c)+l;else f<=-w?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),_=-u*u+f*(f+2*c)+l):f<=w?(u=0,f=Math.min(Math.max(-s,-c),s),_=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),_=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),_=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Gs).addScaledVector(Ir,f),_}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),r=Mn.dot(Mn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,r,s){Vs.subVectors(e,t),Lr.subVectors(n,t),Ws.crossVectors(Vs,Lr);let a=this.direction.dot(Ws),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,t);const c=o*this.direction.dot(Lr.crossVectors(Hn,Lr));if(c<0)return null;const l=o*this.direction.dot(Vs.cross(Hn));if(l<0||c+l>a)return null;const h=-o*Hn.dot(Ws);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ue{constructor(t,e,n,r,s,a,o,c,l,h,u,f,_,w,b,g){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,h,u,f,_,w,b,g)}set(t,e,n,r,s,a,o,c,l,h,u,f,_,w,b,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=_,m[7]=w,m[11]=b,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ei.setFromMatrixColumn(t,0).length(),s=1/Ei.setFromMatrixColumn(t,1).length(),a=1/Ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=a*h,_=a*u,w=o*h,b=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=_+w*l,e[5]=f-b*l,e[9]=-o*c,e[2]=b-f*l,e[6]=w+_*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,_=c*u,w=l*h,b=l*u;e[0]=f+b*o,e[4]=w*o-_,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=_*o-w,e[6]=b+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,_=c*u,w=l*h,b=l*u;e[0]=f-b*o,e[4]=-a*u,e[8]=w+_*o,e[1]=_+w*o,e[5]=a*h,e[9]=b-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,_=a*u,w=o*h,b=o*u;e[0]=c*h,e[4]=w*l-_,e[8]=f*l+b,e[1]=c*u,e[5]=b*l+f,e[9]=_*l-w,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,_=a*l,w=o*c,b=o*l;e[0]=c*h,e[4]=b-f*u,e[8]=w*u+_,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=_*u+w,e[10]=f-b*u}else if(t.order==="XZY"){const f=a*c,_=a*l,w=o*c,b=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+b,e[5]=a*h,e[9]=_*u-w,e[2]=w*u-_,e[6]=o*h,e[10]=b*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fu,t,pu)}lookAt(t,e,n){const r=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),kn.crossVectors(n,We),kn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),kn.crossVectors(n,We)),kn.normalize(),Dr.crossVectors(We,kn),r[0]=kn.x,r[4]=Dr.x,r[8]=We.x,r[1]=kn.y,r[5]=Dr.y,r[9]=We.y,r[2]=kn.z,r[6]=Dr.z,r[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],_=n[13],w=n[2],b=n[6],g=n[10],m=n[14],R=n[3],T=n[7],M=n[11],B=n[15],P=r[0],L=r[4],H=r[8],x=r[12],S=r[1],U=r[5],q=r[9],W=r[13],K=r[2],et=r[6],Y=r[10],rt=r[14],X=r[3],lt=r[7],_t=r[11],Mt=r[15];return s[0]=a*P+o*S+c*K+l*X,s[4]=a*L+o*U+c*et+l*lt,s[8]=a*H+o*q+c*Y+l*_t,s[12]=a*x+o*W+c*rt+l*Mt,s[1]=h*P+u*S+f*K+_*X,s[5]=h*L+u*U+f*et+_*lt,s[9]=h*H+u*q+f*Y+_*_t,s[13]=h*x+u*W+f*rt+_*Mt,s[2]=w*P+b*S+g*K+m*X,s[6]=w*L+b*U+g*et+m*lt,s[10]=w*H+b*q+g*Y+m*_t,s[14]=w*x+b*W+g*rt+m*Mt,s[3]=R*P+T*S+M*K+B*X,s[7]=R*L+T*U+M*et+B*lt,s[11]=R*H+T*q+M*Y+B*_t,s[15]=R*x+T*W+M*rt+B*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],_=t[14],w=t[3],b=t[7],g=t[11],m=t[15];return w*(+s*c*u-r*l*u-s*o*f+n*l*f+r*o*_-n*c*_)+b*(+e*c*_-e*l*f+s*a*f-r*a*_+r*l*h-s*c*h)+g*(+e*l*u-e*o*_-s*a*u+n*a*_+s*o*h-n*l*h)+m*(-r*o*h-e*c*u+e*o*f+r*a*u-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],_=t[11],w=t[12],b=t[13],g=t[14],m=t[15],R=u*g*l-b*f*l+b*c*_-o*g*_-u*c*m+o*f*m,T=w*f*l-h*g*l-w*c*_+a*g*_+h*c*m-a*f*m,M=h*b*l-w*u*l+w*o*_-a*b*_-h*o*m+a*u*m,B=w*u*c-h*b*c-w*o*f+a*b*f+h*o*g-a*u*g,P=e*R+n*T+r*M+s*B;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return t[0]=R*L,t[1]=(b*f*s-u*g*s-b*r*_+n*g*_+u*r*m-n*f*m)*L,t[2]=(o*g*s-b*c*s+b*r*l-n*g*l-o*r*m+n*c*m)*L,t[3]=(u*c*s-o*f*s-u*r*l+n*f*l+o*r*_-n*c*_)*L,t[4]=T*L,t[5]=(h*g*s-w*f*s+w*r*_-e*g*_-h*r*m+e*f*m)*L,t[6]=(w*c*s-a*g*s-w*r*l+e*g*l+a*r*m-e*c*m)*L,t[7]=(a*f*s-h*c*s+h*r*l-e*f*l-a*r*_+e*c*_)*L,t[8]=M*L,t[9]=(w*u*s-h*b*s-w*n*_+e*b*_+h*n*m-e*u*m)*L,t[10]=(a*b*s-w*o*s+w*n*l-e*b*l-a*n*m+e*o*m)*L,t[11]=(h*o*s-a*u*s-h*n*l+e*u*l+a*n*_-e*o*_)*L,t[12]=B*L,t[13]=(h*b*r-w*u*r+w*n*f-e*b*f-h*n*g+e*u*g)*L,t[14]=(w*o*r-a*b*r-w*n*c+e*b*c+a*n*g-e*o*g)*L,t[15]=(a*u*r-h*o*r+h*n*c-e*u*c-a*n*f+e*o*f)*L,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,u=o+o,f=s*l,_=s*h,w=s*u,b=a*h,g=a*u,m=o*u,R=c*l,T=c*h,M=c*u,B=n.x,P=n.y,L=n.z;return r[0]=(1-(b+m))*B,r[1]=(_+M)*B,r[2]=(w-T)*B,r[3]=0,r[4]=(_-M)*P,r[5]=(1-(f+m))*P,r[6]=(g+R)*P,r[7]=0,r[8]=(w+T)*L,r[9]=(g-R)*L,r[10]=(1-(f+b))*L,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ei.set(r[0],r[1],r[2]).length();const a=Ei.set(r[4],r[5],r[6]).length(),o=Ei.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],an.copy(this);const l=1/s,h=1/a,u=1/o;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,e.setFromRotationMatrix(an),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=In){const c=this.elements,l=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),f=(n+r)/(n-r);let _,w;if(o===In)_=-(a+s)/(a-s),w=-2*a*s/(a-s);else if(o===ls)_=-a/(a-s),w=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=In){const c=this.elements,l=1/(e-t),h=1/(n-r),u=1/(a-s),f=(e+t)*l,_=(n+r)*h;let w,b;if(o===In)w=(a+s)*u,b=-2*u;else if(o===ls)w=s*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=b,c[14]=-w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ei=new N,an=new ue,fu=new N(0,0,0),pu=new N(1,1,1),kn=new N,Dr=new N,We=new N,hc=new ue,dc=new Zi;class wn{constructor(t=0,e=0,n=0,r=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],f=r[6],_=r[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,_),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dc.setFromEuler(this),this.setFromQuaternion(dc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Co{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _u=0;const uc=new N,Ti=new Zi,En=new ue,Ur=new N,rr=new N,mu=new N,gu=new Zi,fc=new N(1,0,0),pc=new N(0,1,0),_c=new N(0,0,1),mc={type:"added"},wu={type:"removed"},Ri={type:"childadded",child:null},js={type:"childremoved",child:null};class xe extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new N,e=new wn,n=new Zi,r=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ue},normalMatrix:{value:new Ot}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(fc,t)}rotateY(t){return this.rotateOnAxis(pc,t)}rotateZ(t){return this.rotateOnAxis(_c,t)}translateOnAxis(t,e){return uc.copy(t).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fc,t)}translateY(t){return this.translateOnAxis(pc,t)}translateZ(t){return this.translateOnAxis(_c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ur.copy(t):Ur.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(rr,Ur,this.up):En.lookAt(Ur,rr,this.up),this.quaternion.setFromRotationMatrix(En),r&&(En.extractRotation(r.matrixWorld),Ti.setFromRotationMatrix(En),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wu),js.child=t,this.dispatchEvent(js),js.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,mu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,gu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),_=a(t.animations),w=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),_.length>0&&(n.animations=_),w.length>0&&(n.nodes=w)}return n.object=r,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}xe.DEFAULT_UP=new N(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new N,Tn=new N,Xs=new N,Rn=new N,Ai=new N,Ci=new N,gc=new N,qs=new N,Ys=new N,Js=new N,Ks=new ve,Zs=new ve,$s=new ve;let sr=class Ni{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),on.subVectors(t,e),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){on.subVectors(r,e),Tn.subVectors(n,e),Xs.subVectors(t,e);const a=on.dot(on),o=on.dot(Tn),c=on.dot(Xs),l=Tn.dot(Tn),h=Tn.dot(Xs),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,_=(l*c-o*h)*f,w=(a*h-o*c)*f;return s.set(1-_-w,w,_)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,Rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Rn.x),c.addScaledVector(a,Rn.y),c.addScaledVector(o,Rn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return Ks.setScalar(0),Zs.setScalar(0),$s.setScalar(0),Ks.fromBufferAttribute(t,e),Zs.fromBufferAttribute(t,n),$s.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Ks,s.x),a.addScaledVector(Zs,s.y),a.addScaledVector($s,s.z),a}static isFrontFacing(t,e,n,r){return on.subVectors(n,e),Tn.subVectors(t,e),on.cross(Tn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),on.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ni.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ni.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Ai.subVectors(r,n),Ci.subVectors(s,n),qs.subVectors(t,n);const c=Ai.dot(qs),l=Ci.dot(qs);if(c<=0&&l<=0)return e.copy(n);Ys.subVectors(t,r);const h=Ai.dot(Ys),u=Ci.dot(Ys);if(h>=0&&u<=h)return e.copy(r);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ai,a);Js.subVectors(t,s);const _=Ai.dot(Js),w=Ci.dot(Js);if(w>=0&&_<=w)return e.copy(s);const b=_*l-c*w;if(b<=0&&l>=0&&w<=0)return o=l/(l-w),e.copy(n).addScaledVector(Ci,o);const g=h*w-_*u;if(g<=0&&u-h>=0&&_-w>=0)return gc.subVectors(s,r),o=(u-h)/(u-h+(_-w)),e.copy(r).addScaledVector(gc,o);const m=1/(g+b+f);return a=b*m,o=f*m,e.copy(n).addScaledVector(Ai,a).addScaledVector(Ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}};const oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function Qs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=$t.workingColorSpace){if(t=To(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Qs(a,s,t+1/3),this.g=Qs(a,s,t),this.b=Qs(a,s,t-1/3)}return $t.toWorkingColorSpace(this,r),this}setStyle(t,e=Ye){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const n=oh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return $t.fromWorkingColorSpace(Fe.copy(this),t),Math.round(Gt(Fe.r*255,0,255))*65536+Math.round(Gt(Fe.g*255,0,255))*256+Math.round(Gt(Fe.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Fe.copy(this),e);const n=Fe.r,r=Fe.g,s=Fe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Ye){$t.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,r=Fe.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(Fr);const n=hr(Gn.h,Fr.h,e),r=hr(Gn.s,Fr.s,e),s=hr(Gn.l,Fr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Qt;Qt.NAMES=oh;let vu=0;class $i extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Bi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ea,this.blendDst=Ta,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ea&&(n.blendSrc=this.blendSrc),this.blendDst!==Ta&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ch extends $i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new N,Nr=new bt;let bu=0;class gn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ic,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Nr.fromBufferAttribute(this,e),Nr.applyMatrix3(t),this.setXY(e,Nr.x,Nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),r=ze(r,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ic&&(t.usage=this.usage),t}}class lh extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hh extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class un extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yu=0;const tn=new ue,ta=new xe,Pi=new N,je=new Sr,ar=new Sr,Ae=new N;class bn extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rh(t)?hh:lh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ot().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return ta.lookAt(t),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new un(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];je.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(je.min,ar.min),je.expandByPoint(Ae),Ae.addVectors(je.max,ar.max),je.expandByPoint(Ae)):(je.expandByPoint(ar.min),je.expandByPoint(ar.max))}je.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ae.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ae));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ae.fromBufferAttribute(o,l),c&&(Pi.fromBufferAttribute(t,l),Ae.add(Pi)),r=Math.max(r,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let H=0;H<n.count;H++)o[H]=new N,c[H]=new N;const l=new N,h=new N,u=new N,f=new bt,_=new bt,w=new bt,b=new N,g=new N;function m(H,x,S){l.fromBufferAttribute(n,H),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,S),f.fromBufferAttribute(s,H),_.fromBufferAttribute(s,x),w.fromBufferAttribute(s,S),h.sub(l),u.sub(l),_.sub(f),w.sub(f);const U=1/(_.x*w.y-w.x*_.y);isFinite(U)&&(b.copy(h).multiplyScalar(w.y).addScaledVector(u,-_.y).multiplyScalar(U),g.copy(u).multiplyScalar(_.x).addScaledVector(h,-w.x).multiplyScalar(U),o[H].add(b),o[x].add(b),o[S].add(b),c[H].add(g),c[x].add(g),c[S].add(g))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let H=0,x=R.length;H<x;++H){const S=R[H],U=S.start,q=S.count;for(let W=U,K=U+q;W<K;W+=3)m(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const T=new N,M=new N,B=new N,P=new N;function L(H){B.fromBufferAttribute(r,H),P.copy(B);const x=o[H];T.copy(x),T.sub(B.multiplyScalar(B.dot(x))).normalize(),M.crossVectors(P,x);const U=M.dot(c[H])<0?-1:1;a.setXYZW(H,T.x,T.y,T.z,U)}for(let H=0,x=R.length;H<x;++H){const S=R[H],U=S.start,q=S.count;for(let W=U,K=U+q;W<K;W+=3)L(t.getX(W+0)),L(t.getX(W+1)),L(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,_=n.count;f<_;f++)n.setXYZ(f,0,0,0);const r=new N,s=new N,a=new N,o=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let f=0,_=t.count;f<_;f+=3){const w=t.getX(f+0),b=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,w),s.fromBufferAttribute(e,b),a.fromBufferAttribute(e,g),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,w),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(w,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,_=e.count;f<_;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let _=0,w=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?_=c[b]*o.data.stride+o.offset:_=c[b]*h;for(let m=0;m<h;m++)f[w++]=l[_++]}return new gn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new bn,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],_=t(f,n);c.push(_)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const _=l[u];h.push(_.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let f=0,_=u.length;f<_;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wc=new ue,ei=new Ao,Or=new ws,vc=new N,zr=new N,Br=new N,Hr=new N,ea=new N,kr=new N,bc=new N,Gr=new N;class Ke extends xe{constructor(t=new bn,e=new ch){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){kr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(ea.fromBufferAttribute(u,t),a?kr.addScaledVector(ea,h):kr.addScaledVector(ea.sub(e),h))}e.add(kr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),ei.copy(t.ray).recast(t.near),!(Or.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Or,vc)===null||ei.origin.distanceToSquared(vc)>(t.far-t.near)**2))&&(wc.copy(s).invert(),ei.copy(t.ray).applyMatrix4(wc),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let w=0,b=f.length;w<b;w++){const g=f[w],m=a[g.materialIndex],R=Math.max(g.start,_.start),T=Math.min(o.count,Math.min(g.start+g.count,_.start+_.count));for(let M=R,B=T;M<B;M+=3){const P=o.getX(M),L=o.getX(M+1),H=o.getX(M+2);r=Vr(this,m,t,n,l,h,u,P,L,H),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const w=Math.max(0,_.start),b=Math.min(o.count,_.start+_.count);for(let g=w,m=b;g<m;g+=3){const R=o.getX(g),T=o.getX(g+1),M=o.getX(g+2);r=Vr(this,a,t,n,l,h,u,R,T,M),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let w=0,b=f.length;w<b;w++){const g=f[w],m=a[g.materialIndex],R=Math.max(g.start,_.start),T=Math.min(c.count,Math.min(g.start+g.count,_.start+_.count));for(let M=R,B=T;M<B;M+=3){const P=M,L=M+1,H=M+2;r=Vr(this,m,t,n,l,h,u,P,L,H),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const w=Math.max(0,_.start),b=Math.min(c.count,_.start+_.count);for(let g=w,m=b;g<m;g+=3){const R=g,T=g+1,M=g+2;r=Vr(this,a,t,n,l,h,u,R,T,M),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function Su(i,t,e,n,r,s,a,o){let c;if(t.side===ke?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===Yn,o),c===null)return null;Gr.copy(o),Gr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Gr);return l<e.near||l>e.far?null:{distance:l,point:Gr.clone(),object:i}}function Vr(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,zr),i.getVertexPosition(c,Br),i.getVertexPosition(l,Hr);const h=Su(i,t,e,n,zr,Br,Hr,bc);if(h){const u=new N;sr.getBarycoord(bc,zr,Br,Hr,u),r&&(h.uv=sr.getInterpolatedAttribute(r,o,c,l,u,new bt)),s&&(h.uv1=sr.getInterpolatedAttribute(s,o,c,l,u,new bt)),a&&(h.normal=sr.getInterpolatedAttribute(a,o,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new N,materialIndex:0};sr.getNormal(zr,Br,Hr,f.normal),h.face=f,h.barycoord=u}return h}class Qi extends bn{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,_=0;w("z","y","x",-1,-1,n,e,t,a,s,0),w("z","y","x",1,-1,n,e,-t,a,s,1),w("x","z","y",1,1,t,n,e,r,a,2),w("x","z","y",1,-1,t,n,-e,r,a,3),w("x","y","z",1,-1,t,e,n,r,s,4),w("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new un(l,3)),this.setAttribute("normal",new un(h,3)),this.setAttribute("uv",new un(u,2));function w(b,g,m,R,T,M,B,P,L,H,x){const S=M/L,U=B/H,q=M/2,W=B/2,K=P/2,et=L+1,Y=H+1;let rt=0,X=0;const lt=new N;for(let _t=0;_t<Y;_t++){const Mt=_t*U-W;for(let Vt=0;Vt<et;Vt++){const ae=Vt*S-q;lt[b]=ae*R,lt[g]=Mt*T,lt[m]=K,l.push(lt.x,lt.y,lt.z),lt[b]=0,lt[g]=0,lt[m]=P>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push(Vt/L),u.push(1-_t/H),rt+=1}}for(let _t=0;_t<H;_t++)for(let Mt=0;Mt<L;Mt++){const Vt=f+Mt+et*_t,ae=f+Mt+et*(_t+1),Z=f+(Mt+1)+et*(_t+1),st=f+(Mt+1)+et*_t;c.push(Vt,ae,st),c.push(ae,Z,st),X+=6}o.addGroup(_,X,x),_+=X,f+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Yi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Be(i){const t={};for(let e=0;e<i.length;e++){const n=Yi(i[e]);for(const r in n)t[r]=n[r]}return t}function xu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Mu={clone:Yi,merge:Be};var Eu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends $i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eu,this.fragmentShader=Tu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=xu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class uh extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new N,yc=new bt,Sc=new bt;class Je extends uh{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,yc,Sc),e.subVectors(Sc,yc)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ii=-90,Li=1;class Ru extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Je(Ii,Li,t,e);r.layers=this.layers,this.add(r);const s=new Je(Ii,Li,t,e);s.layers=this.layers,this.add(s);const a=new Je(Ii,Li,t,e);a.layers=this.layers,this.add(a);const o=new Je(Ii,Li,t,e);o.layers=this.layers,this.add(o);const c=new Je(Ii,Li,t,e);c.layers=this.layers,this.add(c);const l=new Je(Ii,Li,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,f,_),t.xr.enabled=w,n.texture.needsPMREMUpdate=!0}}class Po extends Ge{constructor(t,e,n,r,s,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Vi,super(t,e,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Au extends _i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Po(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qi(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Xn});s.uniforms.tEquirect.value=e;const a=new Ke(r,s),o=e.minFilter;return e.minFilter===ui&&(e.minFilter=mn),new Ru(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class Wr extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cu={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const b of t.hand.values()){const g=e.getJointPose(b,n),m=this._getHandJoint(l,b);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),_=.02,w=.005;l.inputState.pinching&&f>_+w?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=_-w&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cu)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Wr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Pu extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ia=new N,Iu=new N,Lu=new Ot;class oi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ia.subVectors(n,e).cross(Iu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ia),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Lu.getNormalMatrix(t),r=this.coplanarPoint(ia).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new ws,jr=new N;class Io{constructor(t=new oi,e=new oi,n=new oi,r=new oi,s=new oi,a=new oi){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],u=r[6],f=r[7],_=r[8],w=r[9],b=r[10],g=r[11],m=r[12],R=r[13],T=r[14],M=r[15];if(n[0].setComponents(c-s,f-l,g-_,M-m).normalize(),n[1].setComponents(c+s,f+l,g+_,M+m).normalize(),n[2].setComponents(c+a,f+h,g+w,M+R).normalize(),n[3].setComponents(c-a,f-h,g-w,M-R).normalize(),n[4].setComponents(c-o,f-u,g-b,M-T).normalize(),e===In)n[5].setComponents(c+o,f+u,g+b,M+T).normalize();else if(e===ls)n[5].setComponents(o,u,b,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(jr.x=r.normal.x>0?t.max.x:t.min.x,jr.y=r.normal.y>0?t.max.y:t.min.y,jr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(jr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fh extends $i{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const hs=new N,ds=new N,xc=new ue,or=new Ao,Xr=new ws,ra=new N,Mc=new N;class Du extends xe{constructor(t=new bn,e=new fh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)hs.fromBufferAttribute(e,r-1),ds.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=hs.distanceTo(ds);t.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),Xr.radius+=s,t.ray.intersectsSphere(Xr)===!1)return;xc.copy(r).invert(),or.copy(t.ray).applyMatrix4(xc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const _=Math.max(0,a.start),w=Math.min(h.count,a.start+a.count);for(let b=_,g=w-1;b<g;b+=l){const m=h.getX(b),R=h.getX(b+1),T=qr(this,t,or,c,m,R,b);T&&e.push(T)}if(this.isLineLoop){const b=h.getX(w-1),g=h.getX(_),m=qr(this,t,or,c,b,g,w-1);m&&e.push(m)}}else{const _=Math.max(0,a.start),w=Math.min(f.count,a.start+a.count);for(let b=_,g=w-1;b<g;b+=l){const m=qr(this,t,or,c,b,b+1,b);m&&e.push(m)}if(this.isLineLoop){const b=qr(this,t,or,c,w-1,_,w-1);b&&e.push(b)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function qr(i,t,e,n,r,s,a){const o=i.geometry.attributes.position;if(hs.fromBufferAttribute(o,r),ds.fromBufferAttribute(o,s),e.distanceSqToSegment(hs,ds,ra,Mc)>n)return;ra.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ra);if(!(l<t.near||l>t.far))return{distance:l,point:Mc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class ph extends Ge{constructor(t,e,n,r,s,a,o,c,l,h=Hi){if(h!==Hi&&h!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hi&&(n=pi),n===void 0&&h===Xi&&(n=ji),super(null,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:dn,this.minFilter=c!==void 0?c:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ro(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class yn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const h=n[r],f=n[r+1]-h,_=(a-h)/f;return(r+_)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new bt:new N);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new N,r=[],s=[],a=[],o=new N,c=new ue;for(let _=0;_<=t;_++){const w=_/t;r[_]=this.getTangentAt(w,new N)}s[0]=new N,a[0]=new N;let l=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let _=1;_<=t;_++){if(s[_]=s[_-1].clone(),a[_]=a[_-1].clone(),o.crossVectors(r[_-1],r[_]),o.length()>Number.EPSILON){o.normalize();const w=Math.acos(Gt(r[_-1].dot(r[_]),-1,1));s[_].applyMatrix4(c.makeRotationAxis(o,w))}a[_].crossVectors(r[_],s[_])}if(e===!0){let _=Math.acos(Gt(s[0].dot(s[t]),-1,1));_/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(_=-_);for(let w=1;w<=t;w++)s[w].applyMatrix4(c.makeRotationAxis(r[w],_*w)),a[w].crossVectors(r[w],s[w])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Lo extends yn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new bt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,_=l-this.aY;c=f*h-_*u+this.aX,l=f*u+_*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Uu extends Lo{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Do(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let f=(a-s)/l-(o-s)/(l+h)+(o-a)/h,_=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,_*=h,r(a,o,f,_)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const Yr=new N,sa=new Do,aa=new Do,oa=new Do;class Fu extends yn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new N){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=r[(o-1)%s]:(Yr.subVectors(r[0],r[1]).add(r[0]),l=Yr);const u=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Yr.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Yr),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let w=Math.pow(l.distanceToSquared(u),_),b=Math.pow(u.distanceToSquared(f),_),g=Math.pow(f.distanceToSquared(h),_);b<1e-4&&(b=1),w<1e-4&&(w=b),g<1e-4&&(g=b),sa.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,w,b,g),aa.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,w,b,g),oa.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,w,b,g)}else this.curveType==="catmullrom"&&(sa.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),aa.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),oa.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(sa.calc(c),aa.calc(c),oa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new N().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ec(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function Nu(i,t){const e=1-i;return e*e*t}function Ou(i,t){return 2*(1-i)*i*t}function zu(i,t){return i*i*t}function dr(i,t,e,n){return Nu(i,t)+Ou(i,e)+zu(i,n)}function Bu(i,t){const e=1-i;return e*e*e*t}function Hu(i,t){const e=1-i;return 3*e*e*i*t}function ku(i,t){return 3*(1-i)*i*i*t}function Gu(i,t){return i*i*i*t}function ur(i,t,e,n,r){return Bu(i,t)+Hu(i,e)+ku(i,n)+Gu(i,r)}class _h extends yn{constructor(t=new bt,e=new bt,n=new bt,r=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new bt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ur(t,r.x,s.x,a.x,o.x),ur(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vu extends yn{constructor(t=new N,e=new N,n=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new N){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ur(t,r.x,s.x,a.x,o.x),ur(t,r.y,s.y,a.y,o.y),ur(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mh extends yn{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wu extends yn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gh extends yn{constructor(t=new bt,e=new bt,n=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new bt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(dr(t,r.x,s.x,a.x),dr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ju extends yn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(dr(t,r.x,s.x,a.x),dr(t,r.y,s.y,a.y),dr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wh extends yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ec(o,c.x,l.x,h.x,u.x),Ec(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new bt().fromArray(r))}return this}}var Tc=Object.freeze({__proto__:null,ArcCurve:Uu,CatmullRomCurve3:Fu,CubicBezierCurve:_h,CubicBezierCurve3:Vu,EllipseCurve:Lo,LineCurve:mh,LineCurve3:Wu,QuadraticBezierCurve:gh,QuadraticBezierCurve3:ju,SplineCurve:wh});class Xu extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Tc[r.type]().fromJSON(r))}return this}}class qu extends Xu{constructor(t){super(),this.type="Path",this.currentPoint=new bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new mh(this.currentPoint.clone(),new bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new gh(this.currentPoint.clone(),new bt(t,e),new bt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new _h(this.currentPoint.clone(),new bt(t,e),new bt(n,r),new bt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new wh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,r,s,a,o,c),this}absellipse(t,e,n,r,s,a,o,c){const l=new Lo(t,e,n,r,s,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Uo extends bn{constructor(t=[new bt(0,-.5),new bt(.5,0),new bt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=Gt(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],h=1/e,u=new N,f=new bt,_=new N,w=new N,b=new N;let g=0,m=0;for(let R=0;R<=t.length-1;R++)switch(R){case 0:g=t[R+1].x-t[R].x,m=t[R+1].y-t[R].y,_.x=m*1,_.y=-g,_.z=m*0,b.copy(_),_.normalize(),c.push(_.x,_.y,_.z);break;case t.length-1:c.push(b.x,b.y,b.z);break;default:g=t[R+1].x-t[R].x,m=t[R+1].y-t[R].y,_.x=m*1,_.y=-g,_.z=m*0,w.copy(_),_.x+=b.x,_.y+=b.y,_.z+=b.z,_.normalize(),c.push(_.x,_.y,_.z),b.copy(w)}for(let R=0;R<=e;R++){const T=n+R*h*r,M=Math.sin(T),B=Math.cos(T);for(let P=0;P<=t.length-1;P++){u.x=t[P].x*M,u.y=t[P].y,u.z=t[P].x*B,a.push(u.x,u.y,u.z),f.x=R/e,f.y=P/(t.length-1),o.push(f.x,f.y);const L=c[3*P+0]*M,H=c[3*P+1],x=c[3*P+0]*B;l.push(L,H,x)}}for(let R=0;R<e;R++)for(let T=0;T<t.length-1;T++){const M=T+R*t.length,B=M,P=M+t.length,L=M+t.length+1,H=M+1;s.push(B,P,H),s.push(L,H,P)}this.setIndex(s),this.setAttribute("position",new un(a,3)),this.setAttribute("uv",new un(o,2)),this.setAttribute("normal",new un(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uo(t.points,t.segments,t.phiStart,t.phiLength)}}class xr extends Uo{constructor(t=1,e=1,n=4,r=8){const s=new qu;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new xr(t.radius,t.length,t.capSegments,t.radialSegments)}}class vs extends bn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,u=t/o,f=e/c,_=[],w=[],b=[],g=[];for(let m=0;m<h;m++){const R=m*f-a;for(let T=0;T<l;T++){const M=T*u-s;w.push(M,-R,0),b.push(0,0,1),g.push(T/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let R=0;R<o;R++){const T=R+l*m,M=R+l*(m+1),B=R+1+l*(m+1),P=R+1+l*m;_.push(T,M,P),_.push(M,B,P)}this.setIndex(_),this.setAttribute("position",new un(w,3)),this.setAttribute("normal",new un(b,3)),this.setAttribute("uv",new un(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.width,t.height,t.widthSegments,t.heightSegments)}}class bs extends $i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yu extends $i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ju extends $i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Rc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ku{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const _=l[u],w=l[u+1];if(_.global&&(_.lastIndex=0),_.test(h))return w}return null}}}const Zu=new Ku;class Fo{constructor(t){this.manager=t!==void 0?t:Zu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Fo.DEFAULT_MATERIAL_NAME="__DEFAULT";class $u extends Fo{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Rc.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=mr("img");function c(){h(),Rc.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(u){h(),r&&r(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class Qu extends Fo{constructor(t){super(t)}load(t,e,n,r){const s=new Po;s.colorSpace=Ye;const a=new $u(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(l){a.load(t[l],function(h){s.images[l]=h,o++,o===6&&(s.needsUpdate=!0,e&&e(s))},void 0,r)}for(let l=0;l<t.length;++l)c(l);return s}}class tf extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ca=new ue,Ac=new N,Cc=new N;class ef{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ac.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ac),Cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cc),e.updateMatrixWorld(),ca.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ca)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vh extends uh{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class nf extends ef{constructor(){super(new vh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rf extends tf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new nf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sf extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class af{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Pc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Pc(){return performance.now()}const Ic=new ue;class of{constructor(t,e,n=0,r=1/0){this.ray=new Ao(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ic.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ic),this}intersectObject(t,e=!0,n=[]){return ho(t,this,n,e),n.sort(Lc),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)ho(t[r],this,n,e);return n.sort(Lc),n}}function Lc(i,t){return i.distance-t.distance}function ho(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)ho(s[a],t,e,!0)}}function Dc(i,t,e,n){const r=cf(n);switch(e){case Yl:return i*t;case Kl:return i*t;case Zl:return i*t*2;case $l:return i*t/r.components*r.byteLength;case xo:return i*t/r.components*r.byteLength;case Ql:return i*t*2/r.components*r.byteLength;case Mo:return i*t*2/r.components*r.byteLength;case Jl:return i*t*3/r.components*r.byteLength;case hn:return i*t*4/r.components*r.byteLength;case Eo:return i*t*4/r.components*r.byteLength;case ns:case is:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rs:case ss:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:case ka:return Math.max(i,16)*Math.max(t,8)/4;case za:case Ha:return Math.max(i,8)*Math.max(t,8)/2;case Ga:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case to:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case eo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ro:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case as:case so:case ao:return Math.ceil(i/4)*Math.ceil(t/4)*16;case th:case oo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case co:case lo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cf(i){switch(i){case Dn:case jl:return{byteLength:1,components:1};case pr:case Xl:case yr:return{byteLength:2,components:1};case yo:case So:return{byteLength:2,components:4};case pi:case bo:case Pn:return{byteLength:4,components:1};case ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bh(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function lf(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let _;if(l instanceof Float32Array)_=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)_=i.SHORT;else if(l instanceof Uint32Array)_=i.UNSIGNED_INT;else if(l instanceof Int32Array)_=i.INT;else if(l instanceof Int8Array)_=i.BYTE;else if(l instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:_,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((_,w)=>_.start-w.start);let f=0;for(let _=1;_<u.length;_++){const w=u[f],b=u[_];b.start<=w.start+w.count+1?w.count=Math.max(w.count,b.start+b.count-w.start):(++f,u[f]=b)}u.length=f+1;for(let _=0,w=u.length;_<w;_++){const b=u[_];i.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,df=`#ifdef USE_ALPHAHASH
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
#endif`,uf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mf=`#ifdef USE_AOMAP
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
#endif`,gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wf=`#ifdef USE_BATCHING
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
#endif`,vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xf=`#ifdef USE_IRIDESCENCE
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
#endif`,Mf=`#ifdef USE_BUMPMAP
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
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Df=`#define PI 3.141592653589793
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
} // validated`,Uf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ff=`vec3 transformedNormal = objectNormal;
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
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zf=`#ifdef USE_GRADIENTMAP
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
}`,$f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ep=`uniform bool receiveShadow;
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
#endif`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,op=`PhysicalMaterial material;
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
#endif`,cp=`struct PhysicalMaterial {
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
}`,lp=`
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
#endif`,hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,up=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vp=`#if defined( USE_POINTS_UV )
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
#endif`,bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ep=`#ifdef USE_MORPHTARGETS
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
#endif`,Tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lp=`#ifdef USE_NORMALMAP
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
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yp=`float getShadowMask() {
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
}`,Jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kp=`#ifdef USE_SKINNING
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
#endif`,Zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$p=`#ifdef USE_SKINNING
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
#endif`,Qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i_=`#ifdef USE_TRANSMISSION
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
#endif`,r_=`#ifdef USE_TRANSMISSION
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
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const l_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h_=`uniform sampler2D t2D;
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
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,__=`#include <common>
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
}`,m_=`#if DEPTH_PACKING == 3200
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
}`,g_=`#define DISTANCE
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
}`,w_=`#define DISTANCE
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
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y_=`uniform float scale;
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
}`,S_=`uniform vec3 diffuse;
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
}`,x_=`#include <common>
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
}`,M_=`uniform vec3 diffuse;
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
}`,E_=`#define LAMBERT
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
}`,T_=`#define LAMBERT
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
}`,R_=`#define MATCAP
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
}`,A_=`#define MATCAP
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
}`,C_=`#define NORMAL
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
}`,P_=`#define NORMAL
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
}`,I_=`#define PHONG
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
}`,L_=`#define PHONG
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
}`,D_=`#define STANDARD
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
}`,U_=`#define STANDARD
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
}`,F_=`#define TOON
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
}`,N_=`#define TOON
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
}`,O_=`uniform float size;
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
}`,z_=`uniform vec3 diffuse;
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
}`,B_=`#include <common>
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
}`,H_=`uniform vec3 color;
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
}`,k_=`uniform float rotation;
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
}`,G_=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:hf,alphahash_pars_fragment:df,alphamap_fragment:uf,alphamap_pars_fragment:ff,alphatest_fragment:pf,alphatest_pars_fragment:_f,aomap_fragment:mf,aomap_pars_fragment:gf,batching_pars_vertex:wf,batching_vertex:vf,begin_vertex:bf,beginnormal_vertex:yf,bsdfs:Sf,iridescence_fragment:xf,bumpmap_pars_fragment:Mf,clipping_planes_fragment:Ef,clipping_planes_pars_fragment:Tf,clipping_planes_pars_vertex:Rf,clipping_planes_vertex:Af,color_fragment:Cf,color_pars_fragment:Pf,color_pars_vertex:If,color_vertex:Lf,common:Df,cube_uv_reflection_fragment:Uf,defaultnormal_vertex:Ff,displacementmap_pars_vertex:Nf,displacementmap_vertex:Of,emissivemap_fragment:zf,emissivemap_pars_fragment:Bf,colorspace_fragment:Hf,colorspace_pars_fragment:kf,envmap_fragment:Gf,envmap_common_pars_fragment:Vf,envmap_pars_fragment:Wf,envmap_pars_vertex:jf,envmap_physical_pars_fragment:np,envmap_vertex:Xf,fog_vertex:qf,fog_pars_vertex:Yf,fog_fragment:Jf,fog_pars_fragment:Kf,gradientmap_pars_fragment:Zf,lightmap_pars_fragment:$f,lights_lambert_fragment:Qf,lights_lambert_pars_fragment:tp,lights_pars_begin:ep,lights_toon_fragment:ip,lights_toon_pars_fragment:rp,lights_phong_fragment:sp,lights_phong_pars_fragment:ap,lights_physical_fragment:op,lights_physical_pars_fragment:cp,lights_fragment_begin:lp,lights_fragment_maps:hp,lights_fragment_end:dp,logdepthbuf_fragment:up,logdepthbuf_pars_fragment:fp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:_p,map_fragment:mp,map_pars_fragment:gp,map_particle_fragment:wp,map_particle_pars_fragment:vp,metalnessmap_fragment:bp,metalnessmap_pars_fragment:yp,morphinstance_vertex:Sp,morphcolor_vertex:xp,morphnormal_vertex:Mp,morphtarget_pars_vertex:Ep,morphtarget_vertex:Tp,normal_fragment_begin:Rp,normal_fragment_maps:Ap,normal_pars_fragment:Cp,normal_pars_vertex:Pp,normal_vertex:Ip,normalmap_pars_fragment:Lp,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Up,clearcoat_pars_fragment:Fp,iridescence_pars_fragment:Np,opaque_fragment:Op,packing:zp,premultiplied_alpha_fragment:Bp,project_vertex:Hp,dithering_fragment:kp,dithering_pars_fragment:Gp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:jp,shadowmap_pars_vertex:Xp,shadowmap_vertex:qp,shadowmask_pars_fragment:Yp,skinbase_vertex:Jp,skinning_pars_vertex:Kp,skinning_vertex:Zp,skinnormal_vertex:$p,specularmap_fragment:Qp,specularmap_pars_fragment:t_,tonemapping_fragment:e_,tonemapping_pars_fragment:n_,transmission_fragment:i_,transmission_pars_fragment:r_,uv_pars_fragment:s_,uv_pars_vertex:a_,uv_vertex:o_,worldpos_vertex:c_,background_vert:l_,background_frag:h_,backgroundCube_vert:d_,backgroundCube_frag:u_,cube_vert:f_,cube_frag:p_,depth_vert:__,depth_frag:m_,distanceRGBA_vert:g_,distanceRGBA_frag:w_,equirect_vert:v_,equirect_frag:b_,linedashed_vert:y_,linedashed_frag:S_,meshbasic_vert:x_,meshbasic_frag:M_,meshlambert_vert:E_,meshlambert_frag:T_,meshmatcap_vert:R_,meshmatcap_frag:A_,meshnormal_vert:C_,meshnormal_frag:P_,meshphong_vert:I_,meshphong_frag:L_,meshphysical_vert:D_,meshphysical_frag:U_,meshtoon_vert:F_,meshtoon_frag:N_,points_vert:O_,points_frag:z_,shadow_vert:B_,shadow_frag:H_,sprite_vert:k_,sprite_frag:G_},at={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},pn={basic:{uniforms:Be([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Be([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Be([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Be([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Be([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Be([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Be([at.points,at.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Be([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Be([at.common,at.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Be([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Be([at.sprite,at.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Be([at.common,at.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Be([at.lights,at.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};pn.physical={uniforms:Be([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Jr={r:0,b:0,g:0},ii=new wn,V_=new ue;function W_(i,t,e,n,r,s,a){const o=new Qt(0);let c=s===!0?0:1,l,h,u=null,f=0,_=null;function w(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?e:t).get(M)),M}function b(T){let M=!1;const B=w(T);B===null?m(o,c):B&&B.isColor&&(m(B,1),M=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(T,M){const B=w(M);B&&(B.isCubeTexture||B.mapping===gs)?(h===void 0&&(h=new Ke(new Qi(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Yi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,L,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ii.copy(M.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=B,h.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(V_.makeRotationFromEuler(ii)),h.material.toneMapped=$t.getTransfer(B.colorSpace)!==se,(u!==B||f!==B.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,u=B,f=B.version,_=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):B&&B.isTexture&&(l===void 0&&(l=new Ke(new vs(2,2),new Jn({name:"BackgroundMaterial",uniforms:Yi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=B,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=$t.getTransfer(B.colorSpace)!==se,B.matrixAutoUpdate===!0&&B.updateMatrix(),l.material.uniforms.uvTransform.value.copy(B.matrix),(u!==B||f!==B.version||_!==i.toneMapping)&&(l.material.needsUpdate=!0,u=B,f=B.version,_=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,M){T.getRGB(Jr,dh(i)),n.buffers.color.setClear(Jr.r,Jr.g,Jr.b,M,a)}function R(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,M=1){o.set(T),c=M,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,m(o,c)},render:b,addToRenderList:g,dispose:R}}function j_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(S,U,q,W,K){let et=!1;const Y=u(W,q,U);s!==Y&&(s=Y,l(s.object)),et=_(S,W,q,K),et&&w(S,W,q,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(et||a)&&(a=!1,M(S,U,q,W),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,U,q){const W=q.wireframe===!0;let K=n[S.id];K===void 0&&(K={},n[S.id]=K);let et=K[U.id];et===void 0&&(et={},K[U.id]=et);let Y=et[W];return Y===void 0&&(Y=f(c()),et[W]=Y),Y}function f(S){const U=[],q=[],W=[];for(let K=0;K<e;K++)U[K]=0,q[K]=0,W[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:q,attributeDivisors:W,object:S,attributes:{},index:null}}function _(S,U,q,W){const K=s.attributes,et=U.attributes;let Y=0;const rt=q.getAttributes();for(const X in rt)if(rt[X].location>=0){const _t=K[X];let Mt=et[X];if(Mt===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Mt=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Mt=S.instanceColor)),_t===void 0||_t.attribute!==Mt||Mt&&_t.data!==Mt.data)return!0;Y++}return s.attributesNum!==Y||s.index!==W}function w(S,U,q,W){const K={},et=U.attributes;let Y=0;const rt=q.getAttributes();for(const X in rt)if(rt[X].location>=0){let _t=et[X];_t===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(_t=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(_t=S.instanceColor));const Mt={};Mt.attribute=_t,_t&&_t.data&&(Mt.data=_t.data),K[X]=Mt,Y++}s.attributes=K,s.attributesNum=Y,s.index=W}function b(){const S=s.newAttributes;for(let U=0,q=S.length;U<q;U++)S[U]=0}function g(S){m(S,0)}function m(S,U){const q=s.newAttributes,W=s.enabledAttributes,K=s.attributeDivisors;q[S]=1,W[S]===0&&(i.enableVertexAttribArray(S),W[S]=1),K[S]!==U&&(i.vertexAttribDivisor(S,U),K[S]=U)}function R(){const S=s.newAttributes,U=s.enabledAttributes;for(let q=0,W=U.length;q<W;q++)U[q]!==S[q]&&(i.disableVertexAttribArray(q),U[q]=0)}function T(S,U,q,W,K,et,Y){Y===!0?i.vertexAttribIPointer(S,U,q,K,et):i.vertexAttribPointer(S,U,q,W,K,et)}function M(S,U,q,W){b();const K=W.attributes,et=q.getAttributes(),Y=U.defaultAttributeValues;for(const rt in et){const X=et[rt];if(X.location>=0){let lt=K[rt];if(lt===void 0&&(rt==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),rt==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor)),lt!==void 0){const _t=lt.normalized,Mt=lt.itemSize,Vt=t.get(lt);if(Vt===void 0)continue;const ae=Vt.buffer,Z=Vt.type,st=Vt.bytesPerElement,yt=Z===i.INT||Z===i.UNSIGNED_INT||lt.gpuType===bo;if(lt.isInterleavedBufferAttribute){const ht=lt.data,Pt=ht.stride,te=lt.offset;if(ht.isInstancedInterleavedBuffer){for(let Lt=0;Lt<X.locationSize;Lt++)m(X.location+Lt,ht.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Lt=0;Lt<X.locationSize;Lt++)g(X.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Lt=0;Lt<X.locationSize;Lt++)T(X.location+Lt,Mt/X.locationSize,Z,_t,Pt*st,(te+Mt/X.locationSize*Lt)*st,yt)}else{if(lt.isInstancedBufferAttribute){for(let ht=0;ht<X.locationSize;ht++)m(X.location+ht,lt.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ht=0;ht<X.locationSize;ht++)g(X.location+ht);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let ht=0;ht<X.locationSize;ht++)T(X.location+ht,Mt/X.locationSize,Z,_t,Mt*st,Mt/X.locationSize*ht*st,yt)}}else if(Y!==void 0){const _t=Y[rt];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(X.location,_t);break;case 3:i.vertexAttrib3fv(X.location,_t);break;case 4:i.vertexAttrib4fv(X.location,_t);break;default:i.vertexAttrib1fv(X.location,_t)}}}}R()}function B(){H();for(const S in n){const U=n[S];for(const q in U){const W=U[q];for(const K in W)h(W[K].object),delete W[K];delete U[q]}delete n[S]}}function P(S){if(n[S.id]===void 0)return;const U=n[S.id];for(const q in U){const W=U[q];for(const K in W)h(W[K].object),delete W[K];delete U[q]}delete n[S.id]}function L(S){for(const U in n){const q=n[U];if(q[S.id]===void 0)continue;const W=q[S.id];for(const K in W)h(W[K].object),delete W[K];delete q[S.id]}}function H(){x(),a=!0,s!==r&&(s=r,l(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:H,resetDefaultState:x,dispose:B,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:b,enableAttribute:g,disableUnusedAttributes:R}}function X_(i,t,e){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let _=0;for(let w=0;w<u;w++)_+=h[w];e.update(_,n,1)}function c(l,h,u,f){if(u===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let w=0;w<l.length;w++)a(l[w],h[w],f[w]);else{_.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let w=0;for(let b=0;b<u;b++)w+=h[b]*f[b];e.update(w,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function q_(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==hn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const H=L===yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Dn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Pn&&!H)}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=w>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:_,maxVertexTextures:w,maxTextureSize:b,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:B,maxSamples:P}}function Y_(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new oi,o=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const _=u.length!==0||f||n!==0||r;return r=f,n=u.length,_},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,_){const w=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!r||w===null||w.length===0||s&&!g)s?h(null):l();else{const R=s?0:n,T=R*4;let M=m.clippingState||null;c.value=M,M=h(w,f,T,_);for(let B=0;B!==T;++B)M[B]=e[B];m.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,_,w){const b=u!==null?u.length:0;let g=null;if(b!==0){if(g=c.value,w!==!0||g===null){const m=_+b*4,R=f.matrixWorldInverse;o.getNormalMatrix(R),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,M=_;T!==b;++T,M+=4)a.copy(u[T]).applyMatrix4(R,o),a.normal.toArray(g,M),g[M+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}function J_(i){let t=new WeakMap;function e(a,o){return o===Ua?a.mapping=Vi:o===Fa&&(a.mapping=Wi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ua||o===Fa)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Au(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Oi=4,Uc=[.125,.215,.35,.446,.526,.582],hi=20,la=new vh,Fc=new Qt;let ha=null,da=0,ua=0,fa=!1;const ci=(1+Math.sqrt(5))/2,Di=1/ci,Nc=[new N(-ci,Di,0),new N(ci,Di,0),new N(-Di,0,ci),new N(Di,0,ci),new N(0,ci,-Di),new N(0,ci,Di),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],K_=new N;class uo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=K_}=s;ha=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ha,da,ua),this._renderer.xr.enabled=fa,t.scissorTest=!1,Kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ha=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:yr,format:hn,colorSpace:qi,depthBuffer:!1},r=Oc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z_(s)),this._blurMaterial=$_(s,t,e)}return r}_compileMaterial(t){const e=new Ke(this._lodPlanes[0],t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,n,r,s){const c=new Je(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,_=u.toneMapping;u.getClearColor(Fc),u.toneMapping=qn,u.autoClear=!1;const w=new ch({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),b=new Ke(new Qi,w);let g=!1;const m=t.background;m?m.isColor&&(w.color.copy(m),t.background=null,g=!0):(w.color.copy(Fc),g=!0);for(let R=0;R<6;R++){const T=R%3;T===0?(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[R],s.y,s.z)):T===1?(c.up.set(0,0,l[R]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[R],s.z)):(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[R]));const M=this._cubeSize;Kr(r,T*M,R>2?M:0,M,M),u.setRenderTarget(r),g&&u.render(b,c),u.render(t,c)}b.geometry.dispose(),b.material.dispose(),u.toneMapping=_,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Vi||t.mapping===Wi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ke(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Kr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,la)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Nc[(r-s-1)%Nc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ke(this._lodPlanes[r],l),f=l.uniforms,_=this._sizeLods[n]-1,w=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*hi-1),b=s/w,g=isFinite(s)?1+Math.floor(h*b):hi;g>hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hi}`);const m=[];let R=0;for(let L=0;L<hi;++L){const H=L/b,x=Math.exp(-H*H/2);m.push(x),L===0?R+=x:L<g&&(R+=2*x)}for(let L=0;L<m.length;L++)m[L]=m[L]/R;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=w,f.mipInt.value=T-n;const M=this._sizeLods[r],B=3*M*(r>T-Oi?r-T+Oi:0),P=4*(this._cubeSize-M);Kr(e,B,P,3*M,2*M),c.setRenderTarget(e),c.render(u,la)}}function Z_(i){const t=[],e=[],n=[];let r=i;const s=i-Oi+1+Uc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-Oi?c=Uc[a-i+Oi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],_=6,w=6,b=3,g=2,m=1,R=new Float32Array(b*w*_),T=new Float32Array(g*w*_),M=new Float32Array(m*w*_);for(let P=0;P<_;P++){const L=P%3*2/3-1,H=P>2?0:-1,x=[L,H,0,L+2/3,H,0,L+2/3,H+1,0,L,H,0,L+2/3,H+1,0,L,H+1,0];R.set(x,b*w*P),T.set(f,g*w*P);const S=[P,P,P,P,P,P];M.set(S,m*w*P)}const B=new bn;B.setAttribute("position",new gn(R,b)),B.setAttribute("uv",new gn(T,g)),B.setAttribute("faceIndex",new gn(M,m)),t.push(B),r>Oi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Oc(i,t,e){const n=new _i(i,t,e);return n.texture.mapping=gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function $_(i,t,e){const n=new Float32Array(hi),r=new N(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:No(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function zc(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:No(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Bc(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function No(){return`

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
	`}function Q_(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ua||c===Fa,h=c===Vi||c===Wi;if(l||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new uo(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const _=o.image;return l&&_&&_.height>0||h&&_&&r(_)?(e===null&&(e=new uo(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function tm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&ai("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function em(i,t,e,n){const r={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const w in f.attributes)t.remove(f.attributes[w]);f.removeEventListener("dispose",a),delete r[f.id];const _=s.get(f);_&&(t.remove(_),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const _ in f)t.update(f[_],i.ARRAY_BUFFER)}function l(u){const f=[],_=u.index,w=u.attributes.position;let b=0;if(_!==null){const R=_.array;b=_.version;for(let T=0,M=R.length;T<M;T+=3){const B=R[T+0],P=R[T+1],L=R[T+2];f.push(B,P,P,L,L,B)}}else if(w!==void 0){const R=w.array;b=w.version;for(let T=0,M=R.length/3-1;T<M;T+=3){const B=T+0,P=T+1,L=T+2;f.push(B,P,P,L,L,B)}}else return;const g=new(rh(f)?hh:lh)(f,1);g.version=b;const m=s.get(u);m&&t.remove(m),s.set(u,g)}function h(u){const f=s.get(u);if(f){const _=u.index;_!==null&&f.version<_.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function nm(i,t,e){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,_){i.drawElements(n,_,s,f*a),e.update(_,n,1)}function l(f,_,w){w!==0&&(i.drawElementsInstanced(n,_,s,f*a,w),e.update(_,n,w))}function h(f,_,w){if(w===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,f,0,w);let g=0;for(let m=0;m<w;m++)g+=_[m];e.update(g,n,1)}function u(f,_,w,b){if(w===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/a,_[m],b[m]);else{g.multiDrawElementsInstancedWEBGL(n,_,0,s,f,0,b,0,w);let m=0;for(let R=0;R<w;R++)m+=_[R]*b[R];e.update(m,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function im(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function rm(i,t,e){const n=new WeakMap,r=new ve;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let x=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,w=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),w===!0&&(T=2),b===!0&&(T=3);let M=o.attributes.position.count*T,B=1;M>t.maxTextureSize&&(B=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const P=new Float32Array(M*B*4*u),L=new sh(P,M,B,u);L.type=Pn,L.needsUpdate=!0;const H=T*4;for(let S=0;S<u;S++){const U=g[S],q=m[S],W=R[S],K=M*B*4*S;for(let et=0;et<U.count;et++){const Y=et*H;_===!0&&(r.fromBufferAttribute(U,et),P[K+Y+0]=r.x,P[K+Y+1]=r.y,P[K+Y+2]=r.z,P[K+Y+3]=0),w===!0&&(r.fromBufferAttribute(q,et),P[K+Y+4]=r.x,P[K+Y+5]=r.y,P[K+Y+6]=r.z,P[K+Y+7]=0),b===!0&&(r.fromBufferAttribute(W,et),P[K+Y+8]=r.x,P[K+Y+9]=r.y,P[K+Y+10]=r.z,P[K+Y+11]=W.itemSize===4?r.w:1)}}f={count:u,texture:L,size:new bt(M,B)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let b=0;b<l.length;b++)_+=l[b];const w=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",w),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function sm(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}const yh=new Ge,Hc=new ph(1,1),Sh=new sh,xh=new du,Mh=new Po,kc=[],Gc=[],Vc=new Float32Array(16),Wc=new Float32Array(9),jc=new Float32Array(4);function tr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=kc[r];if(s===void 0&&(s=new Float32Array(r),kc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ys(i,t){let e=Gc[t];e===void 0&&(e=new Int32Array(t),Gc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function am(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function hm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;jc.set(n),i.uniformMatrix2fv(this.addr,!1,jc),Te(e,n)}}function dm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Wc.set(n),i.uniformMatrix3fv(this.addr,!1,Wc),Te(e,n)}}function um(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Vc.set(n),i.uniformMatrix4fv(this.addr,!1,Vc),Te(e,n)}}function fm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function gm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function ym(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Hc.compareFunction=nh,s=Hc):s=yh,e.setTexture2D(t||s,r)}function Sm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||xh,r)}function xm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Mh,r)}function Mm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Sh,r)}function Em(i){switch(i){case 5126:return am;case 35664:return om;case 35665:return cm;case 35666:return lm;case 35674:return hm;case 35675:return dm;case 35676:return um;case 5124:case 35670:return fm;case 35667:case 35671:return pm;case 35668:case 35672:return _m;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return wm;case 36295:return vm;case 36296:return bm;case 35678:case 36198:case 36298:case 36306:case 35682:return ym;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return Mm}}function Tm(i,t){i.uniform1fv(this.addr,t)}function Rm(i,t){const e=tr(t,this.size,2);i.uniform2fv(this.addr,e)}function Am(i,t){const e=tr(t,this.size,3);i.uniform3fv(this.addr,e)}function Cm(i,t){const e=tr(t,this.size,4);i.uniform4fv(this.addr,e)}function Pm(i,t){const e=tr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Im(i,t){const e=tr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Lm(i,t){const e=tr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Dm(i,t){i.uniform1iv(this.addr,t)}function Um(i,t){i.uniform2iv(this.addr,t)}function Fm(i,t){i.uniform3iv(this.addr,t)}function Nm(i,t){i.uniform4iv(this.addr,t)}function Om(i,t){i.uniform1uiv(this.addr,t)}function zm(i,t){i.uniform2uiv(this.addr,t)}function Bm(i,t){i.uniform3uiv(this.addr,t)}function Hm(i,t){i.uniform4uiv(this.addr,t)}function km(i,t,e){const n=this.cache,r=t.length,s=ys(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||yh,s[a])}function Gm(i,t,e){const n=this.cache,r=t.length,s=ys(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||xh,s[a])}function Vm(i,t,e){const n=this.cache,r=t.length,s=ys(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Mh,s[a])}function Wm(i,t,e){const n=this.cache,r=t.length,s=ys(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Sh,s[a])}function jm(i){switch(i){case 5126:return Tm;case 35664:return Rm;case 35665:return Am;case 35666:return Cm;case 35674:return Pm;case 35675:return Im;case 35676:return Lm;case 5124:case 35670:return Dm;case 35667:case 35671:return Um;case 35668:case 35672:return Fm;case 35669:case 35673:return Nm;case 5125:return Om;case 36294:return zm;case 36295:return Bm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return Wm}}class Xm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Em(e.type)}}class qm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jm(e.type)}}class Ym{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function Xc(i,t){i.seq.push(t),i.map[t.id]=t}function Jm(i,t,e){const n=i.name,r=n.length;for(pa.lastIndex=0;;){const s=pa.exec(n),a=pa.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Xc(e,l===void 0?new Xm(o,i,t):new qm(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Ym(o),Xc(e,u)),e=u}}}class os{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Jm(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function qc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Km=37297;let Zm=0;function $m(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Yc=new Ot;function Qm(i){$t._getMatrix(Yc,$t.workingColorSpace,i);const t=`mat3( ${Yc.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case cs:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+$m(i.getShaderSource(t),a)}else return r}function tg(i,t){const e=Qm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function eg(i,t){let e;switch(t){case Sd:e="Linear";break;case xd:e="Reinhard";break;case Md:e="Cineon";break;case Ed:e="ACESFilmic";break;case Rd:e="AgX";break;case Ad:e="Neutral";break;case Td:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Zr=new N;function ng(){$t.getLuminanceCoefficients(Zr);const i=Zr.x.toFixed(4),t=Zr.y.toFixed(4),e=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ig(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function rg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function cr(i){return i!==""}function Kc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function fo(i){return i.replace(ag,cg)}const og=new Map;function cg(i,t){let e=Bt[t];if(e===void 0){const n=og.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fo(e)}const lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(i){return i.replace(lg,hg)}function hg(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function dg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ed?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function ug(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vi:case Wi:t="ENVMAP_TYPE_CUBE";break;case gs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Wi:t="ENVMAP_MODE_REFRACTION";break}return t}function pg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vl:t="ENVMAP_BLENDING_MULTIPLY";break;case bd:t="ENVMAP_BLENDING_MIX";break;case yd:t="ENVMAP_BLENDING_ADD";break}return t}function _g(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function mg(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=dg(e),l=ug(e),h=fg(e),u=pg(e),f=_g(e),_=ig(e),w=rg(s),b=r.createProgram();let g,m,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(cr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(cr).join(`
`),m.length>0&&(m+=`
`)):(g=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),m=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==qn?eg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,tg("linearToOutputTexel",e.outputColorSpace),ng(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),a=fo(a),a=Kc(a,e),a=Zc(a,e),o=fo(o),o=Kc(o,e),o=Zc(o,e),a=$c(a),o=$c(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,g=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=R+g+a,M=R+m+o,B=qc(r,r.VERTEX_SHADER,T),P=qc(r,r.FRAGMENT_SHADER,M);r.attachShader(b,B),r.attachShader(b,P),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function L(U){if(i.debug.checkShaderErrors){const q=r.getProgramInfoLog(b).trim(),W=r.getShaderInfoLog(B).trim(),K=r.getShaderInfoLog(P).trim();let et=!0,Y=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,B,P);else{const rt=Jc(r,B,"vertex"),X=Jc(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+q+`
`+rt+`
`+X)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(W===""||K==="")&&(Y=!1);Y&&(U.diagnostics={runnable:et,programLog:q,vertexShader:{log:W,prefix:g},fragmentShader:{log:K,prefix:m}})}r.deleteShader(B),r.deleteShader(P),H=new os(r,b),x=sg(r,b)}let H;this.getUniforms=function(){return H===void 0&&L(this),H};let x;this.getAttributes=function(){return x===void 0&&L(this),x};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(b,Km)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zm++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=B,this.fragmentShader=P,this}let gg=0;class wg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new vg(t),e.set(t,n)),n}}class vg{constructor(t){this.id=gg++,this.code=t,this.usedTimes=0}}function bg(i,t,e,n,r,s,a){const o=new Co,c=new wg,l=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let _=r.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,S,U,q,W){const K=q.fog,et=W.geometry,Y=x.isMeshStandardMaterial?q.environment:null,rt=(x.isMeshStandardMaterial?e:t).get(x.envMap||Y),X=rt&&rt.mapping===gs?rt.image.height:null,lt=w[x.type];x.precision!==null&&(_=r.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const _t=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Mt=_t!==void 0?_t.length:0;let Vt=0;et.morphAttributes.position!==void 0&&(Vt=1),et.morphAttributes.normal!==void 0&&(Vt=2),et.morphAttributes.color!==void 0&&(Vt=3);let ae,Z,st,yt;if(lt){const re=pn[lt];ae=re.vertexShader,Z=re.fragmentShader}else ae=x.vertexShader,Z=x.fragmentShader,c.update(x),st=c.getVertexShaderID(x),yt=c.getFragmentShaderID(x);const ht=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),te=W.isInstancedMesh===!0,Lt=W.isBatchedMesh===!0,be=!!x.map,_e=!!x.matcap,Wt=!!rt,C=!!x.aoMap,Ze=!!x.lightMap,jt=!!x.bumpMap,Xt=!!x.normalMap,Et=!!x.displacementMap,le=!!x.emissiveMap,xt=!!x.metalnessMap,E=!!x.roughnessMap,v=x.anisotropy>0,k=x.clearcoat>0,$=x.dispersion>0,tt=x.iridescence>0,J=x.sheen>0,St=x.transmission>0,dt=v&&!!x.anisotropyMap,mt=k&&!!x.clearcoatMap,Jt=k&&!!x.clearcoatNormalMap,it=k&&!!x.clearcoatRoughnessMap,gt=tt&&!!x.iridescenceMap,It=tt&&!!x.iridescenceThicknessMap,Dt=J&&!!x.sheenColorMap,wt=J&&!!x.sheenRoughnessMap,qt=!!x.specularMap,zt=!!x.specularColorMap,ce=!!x.specularIntensityMap,F=St&&!!x.transmissionMap,ot=St&&!!x.thicknessMap,j=!!x.gradientMap,Q=!!x.alphaMap,ft=x.alphaTest>0,ut=!!x.alphaHash,Nt=!!x.extensions;let ge=qn;x.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ge=i.toneMapping);const De={shaderID:lt,shaderType:x.type,shaderName:x.name,vertexShader:ae,fragmentShader:Z,defines:x.defines,customVertexShaderID:st,customFragmentShaderID:yt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:Lt,batchingColor:Lt&&W._colorsTexture!==null,instancing:te,instancingColor:te&&W.instanceColor!==null,instancingMorph:te&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:qi,alphaToCoverage:!!x.alphaToCoverage,map:be,matcap:_e,envMap:Wt,envMapMode:Wt&&rt.mapping,envMapCubeUVHeight:X,aoMap:C,lightMap:Ze,bumpMap:jt,normalMap:Xt,displacementMap:f&&Et,emissiveMap:le,normalMapObjectSpace:Xt&&x.normalMapType===Ld,normalMapTangentSpace:Xt&&x.normalMapType===eh,metalnessMap:xt,roughnessMap:E,anisotropy:v,anisotropyMap:dt,clearcoat:k,clearcoatMap:mt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:it,dispersion:$,iridescence:tt,iridescenceMap:gt,iridescenceThicknessMap:It,sheen:J,sheenColorMap:Dt,sheenRoughnessMap:wt,specularMap:qt,specularColorMap:zt,specularIntensityMap:ce,transmission:St,transmissionMap:F,thicknessMap:ot,gradientMap:j,opaque:x.transparent===!1&&x.blending===Bi&&x.alphaToCoverage===!1,alphaMap:Q,alphaTest:ft,alphaHash:ut,combine:x.combine,mapUv:be&&b(x.map.channel),aoMapUv:C&&b(x.aoMap.channel),lightMapUv:Ze&&b(x.lightMap.channel),bumpMapUv:jt&&b(x.bumpMap.channel),normalMapUv:Xt&&b(x.normalMap.channel),displacementMapUv:Et&&b(x.displacementMap.channel),emissiveMapUv:le&&b(x.emissiveMap.channel),metalnessMapUv:xt&&b(x.metalnessMap.channel),roughnessMapUv:E&&b(x.roughnessMap.channel),anisotropyMapUv:dt&&b(x.anisotropyMap.channel),clearcoatMapUv:mt&&b(x.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&b(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&b(x.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&b(x.iridescenceMap.channel),iridescenceThicknessMapUv:It&&b(x.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&b(x.sheenColorMap.channel),sheenRoughnessMapUv:wt&&b(x.sheenRoughnessMap.channel),specularMapUv:qt&&b(x.specularMap.channel),specularColorMapUv:zt&&b(x.specularColorMap.channel),specularIntensityMapUv:ce&&b(x.specularIntensityMap.channel),transmissionMapUv:F&&b(x.transmissionMap.channel),thicknessMapUv:ot&&b(x.thicknessMap.channel),alphaMapUv:Q&&b(x.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(Xt||v),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!et.attributes.uv&&(be||Q),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pt,skinning:W.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Vt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:be&&x.map.isVideoTexture===!0&&$t.getTransfer(x.map.colorSpace)===se,decodeVideoTextureEmissive:le&&x.emissiveMap.isVideoTexture===!0&&$t.getTransfer(x.emissiveMap.colorSpace)===se,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Cn,flipSided:x.side===ke,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Nt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&x.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function m(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)S.push(U),S.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(R(S,x),T(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function R(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function T(x,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function M(x){const S=w[x.type];let U;if(S){const q=pn[S];U=Mu.clone(q.uniforms)}else U=x.uniforms;return U}function B(x,S){let U;for(let q=0,W=h.length;q<W;q++){const K=h[q];if(K.cacheKey===S){U=K,++U.usedTimes;break}}return U===void 0&&(U=new mg(i,S,x,s),h.push(U)),U}function P(x){if(--x.usedTimes===0){const S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),x.destroy()}}function L(x){c.remove(x)}function H(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:B,releaseProgram:P,releaseShaderCache:L,programs:h,dispose:H}}function yg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Sg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function tl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function el(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(u,f,_,w,b,g){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:_,groupOrder:w,renderOrder:u.renderOrder,z:b,group:g},i[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=_,m.groupOrder=w,m.renderOrder=u.renderOrder,m.z=b,m.group=g),t++,m}function o(u,f,_,w,b,g){const m=a(u,f,_,w,b,g);_.transmission>0?n.push(m):_.transparent===!0?r.push(m):e.push(m)}function c(u,f,_,w,b,g){const m=a(u,f,_,w,b,g);_.transmission>0?n.unshift(m):_.transparent===!0?r.unshift(m):e.unshift(m)}function l(u,f){e.length>1&&e.sort(u||Sg),n.length>1&&n.sort(f||tl),r.length>1&&r.sort(f||tl)}function h(){for(let u=t,f=i.length;u<f;u++){const _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function xg(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new el,i.set(n,[a])):r>=s.length?(a=new el,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Mg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Qt};break;case"SpotLight":e={position:new N,direction:new N,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Eg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Tg=0;function Rg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ag(i){const t=new Mg,e=Eg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const r=new N,s=new ue,a=new ue;function o(l){let h=0,u=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let _=0,w=0,b=0,g=0,m=0,R=0,T=0,M=0,B=0,P=0,L=0;l.sort(Rg);for(let x=0,S=l.length;x<S;x++){const U=l[x],q=U.color,W=U.intensity,K=U.distance,et=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=q.r*W,u+=q.g*W,f+=q.b*W;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(U.sh.coefficients[Y],W);L++}else if(U.isDirectionalLight){const Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const rt=U.shadow,X=e.get(U);X.shadowIntensity=rt.intensity,X.shadowBias=rt.bias,X.shadowNormalBias=rt.normalBias,X.shadowRadius=rt.radius,X.shadowMapSize=rt.mapSize,n.directionalShadow[_]=X,n.directionalShadowMap[_]=et,n.directionalShadowMatrix[_]=U.shadow.matrix,R++}n.directional[_]=Y,_++}else if(U.isSpotLight){const Y=t.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(q).multiplyScalar(W),Y.distance=K,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,n.spot[b]=Y;const rt=U.shadow;if(U.map&&(n.spotLightMap[B]=U.map,B++,rt.updateMatrices(U),U.castShadow&&P++),n.spotLightMatrix[b]=rt.matrix,U.castShadow){const X=e.get(U);X.shadowIntensity=rt.intensity,X.shadowBias=rt.bias,X.shadowNormalBias=rt.normalBias,X.shadowRadius=rt.radius,X.shadowMapSize=rt.mapSize,n.spotShadow[b]=X,n.spotShadowMap[b]=et,M++}b++}else if(U.isRectAreaLight){const Y=t.get(U);Y.color.copy(q).multiplyScalar(W),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),n.rectArea[g]=Y,g++}else if(U.isPointLight){const Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){const rt=U.shadow,X=e.get(U);X.shadowIntensity=rt.intensity,X.shadowBias=rt.bias,X.shadowNormalBias=rt.normalBias,X.shadowRadius=rt.radius,X.shadowMapSize=rt.mapSize,X.shadowCameraNear=rt.camera.near,X.shadowCameraFar=rt.camera.far,n.pointShadow[w]=X,n.pointShadowMap[w]=et,n.pointShadowMatrix[w]=U.shadow.matrix,T++}n.point[w]=Y,w++}else if(U.isHemisphereLight){const Y=t.get(U);Y.skyColor.copy(U.color).multiplyScalar(W),Y.groundColor.copy(U.groundColor).multiplyScalar(W),n.hemi[m]=Y,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const H=n.hash;(H.directionalLength!==_||H.pointLength!==w||H.spotLength!==b||H.rectAreaLength!==g||H.hemiLength!==m||H.numDirectionalShadows!==R||H.numPointShadows!==T||H.numSpotShadows!==M||H.numSpotMaps!==B||H.numLightProbes!==L)&&(n.directional.length=_,n.spot.length=b,n.rectArea.length=g,n.point.length=w,n.hemi.length=m,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=M+B-P,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=L,H.directionalLength=_,H.pointLength=w,H.spotLength=b,H.rectAreaLength=g,H.hemiLength=m,H.numDirectionalShadows=R,H.numPointShadows=T,H.numSpotShadows=M,H.numSpotMaps=B,H.numLightProbes=L,n.version=Tg++)}function c(l,h){let u=0,f=0,_=0,w=0,b=0;const g=h.matrixWorldInverse;for(let m=0,R=l.length;m<R;m++){const T=l[m];if(T.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),u++}else if(T.isSpotLight){const M=n.spot[_];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),_++}else if(T.isRectAreaLight){const M=n.rectArea[w];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(T.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),w++}else if(T.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),f++}else if(T.isHemisphereLight){const M=n.hemi[b];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(g),b++}}}return{setup:o,setupView:c,state:n}}function nl(i){const t=new Ag(i),e=[],n=[];function r(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Cg(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new nl(i),t.set(r,[o])):s>=a.length?(o=new nl(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
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
}`;function Lg(i,t,e){let n=new Io;const r=new bt,s=new bt,a=new ve,o=new Yu({depthPacking:Id}),c=new Ju,l={},h=e.maxTextureSize,u={[Yn]:ke,[ke]:Yn,[Cn]:Cn},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:Pg,fragmentShader:Ig}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const w=new bn;w.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ke(w,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let m=this.type;this.render=function(P,L,H){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;const x=i.getRenderTarget(),S=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Xn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const W=m!==An&&this.type===An,K=m===An&&this.type!==An;for(let et=0,Y=P.length;et<Y;et++){const rt=P[et],X=rt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const lt=X.getFrameExtents();if(r.multiply(lt),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/lt.x),r.x=s.x*lt.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/lt.y),r.y=s.y*lt.y,X.mapSize.y=s.y)),X.map===null||W===!0||K===!0){const Mt=this.type!==An?{minFilter:dn,magFilter:dn}:{};X.map!==null&&X.map.dispose(),X.map=new _i(r.x,r.y,Mt),X.map.texture.name=rt.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const _t=X.getViewportCount();for(let Mt=0;Mt<_t;Mt++){const Vt=X.getViewport(Mt);a.set(s.x*Vt.x,s.y*Vt.y,s.x*Vt.z,s.y*Vt.w),q.viewport(a),X.updateMatrices(rt,Mt),n=X.getFrustum(),M(L,H,X.camera,rt,this.type)}X.isPointLightShadow!==!0&&this.type===An&&R(X,H),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(x,S,U)};function R(P,L){const H=t.update(b);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new _i(r.x,r.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(L,null,H,f,b,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(L,null,H,_,b,null)}function T(P,L,H,x){let S=null;const U=H.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(U!==void 0)S=U;else if(S=H.isPointLight===!0?c:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const q=S.uuid,W=L.uuid;let K=l[q];K===void 0&&(K={},l[q]=K);let et=K[W];et===void 0&&(et=S.clone(),K[W]=et,L.addEventListener("dispose",B)),S=et}if(S.visible=L.visible,S.wireframe=L.wireframe,x===An?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:u[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,H.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const q=i.properties.get(S);q.light=H}return S}function M(P,L,H,x,S){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===An)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,P.matrixWorld);const W=t.update(P),K=P.material;if(Array.isArray(K)){const et=W.groups;for(let Y=0,rt=et.length;Y<rt;Y++){const X=et[Y],lt=K[X.materialIndex];if(lt&&lt.visible){const _t=T(P,lt,x,S);P.onBeforeShadow(i,P,L,H,W,_t,X),i.renderBufferDirect(H,null,W,_t,P,X),P.onAfterShadow(i,P,L,H,W,_t,X)}}}else if(K.visible){const et=T(P,K,x,S);P.onBeforeShadow(i,P,L,H,W,et,null),i.renderBufferDirect(H,null,W,et,P,null),P.onAfterShadow(i,P,L,H,W,et,null)}}const q=P.children;for(let W=0,K=q.length;W<K;W++)M(q[W],L,H,x,S)}function B(P){P.target.removeEventListener("dispose",B);for(const H in l){const x=l[H],S=P.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const Dg={[Ra]:Aa,[Ca]:La,[Pa]:Da,[Gi]:Ia,[Aa]:Ra,[La]:Ca,[Da]:Pa,[Ia]:Gi};function Ug(i,t){function e(){let F=!1;const ot=new ve;let j=null;const Q=new ve(0,0,0,0);return{setMask:function(ft){j!==ft&&!F&&(i.colorMask(ft,ft,ft,ft),j=ft)},setLocked:function(ft){F=ft},setClear:function(ft,ut,Nt,ge,De){De===!0&&(ft*=ge,ut*=ge,Nt*=ge),ot.set(ft,ut,Nt,ge),Q.equals(ot)===!1&&(i.clearColor(ft,ut,Nt,ge),Q.copy(ot))},reset:function(){F=!1,j=null,Q.set(-1,0,0,0)}}}function n(){let F=!1,ot=!1,j=null,Q=null,ft=null;return{setReversed:function(ut){if(ot!==ut){const Nt=t.get("EXT_clip_control");ot?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const ge=ft;ft=null,this.setClear(ge)}ot=ut},getReversed:function(){return ot},setTest:function(ut){ut?ht(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(ut){j!==ut&&!F&&(i.depthMask(ut),j=ut)},setFunc:function(ut){if(ot&&(ut=Dg[ut]),Q!==ut){switch(ut){case Ra:i.depthFunc(i.NEVER);break;case Aa:i.depthFunc(i.ALWAYS);break;case Ca:i.depthFunc(i.LESS);break;case Gi:i.depthFunc(i.LEQUAL);break;case Pa:i.depthFunc(i.EQUAL);break;case Ia:i.depthFunc(i.GEQUAL);break;case La:i.depthFunc(i.GREATER);break;case Da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=ut}},setLocked:function(ut){F=ut},setClear:function(ut){ft!==ut&&(ot&&(ut=1-ut),i.clearDepth(ut),ft=ut)},reset:function(){F=!1,j=null,Q=null,ft=null,ot=!1}}}function r(){let F=!1,ot=null,j=null,Q=null,ft=null,ut=null,Nt=null,ge=null,De=null;return{setTest:function(re){F||(re?ht(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(re){ot!==re&&!F&&(i.stencilMask(re),ot=re)},setFunc:function(re,nn,Sn){(j!==re||Q!==nn||ft!==Sn)&&(i.stencilFunc(re,nn,Sn),j=re,Q=nn,ft=Sn)},setOp:function(re,nn,Sn){(ut!==re||Nt!==nn||ge!==Sn)&&(i.stencilOp(re,nn,Sn),ut=re,Nt=nn,ge=Sn)},setLocked:function(re){F=re},setClear:function(re){De!==re&&(i.clearStencil(re),De=re)},reset:function(){F=!1,ot=null,j=null,Q=null,ft=null,ut=null,Nt=null,ge=null,De=null}}}const s=new e,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,_=[],w=null,b=!1,g=null,m=null,R=null,T=null,M=null,B=null,P=null,L=new Qt(0,0,0),H=0,x=!1,S=null,U=null,q=null,W=null,K=null;const et=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,rt=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=rt>=1):X.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=rt>=2);let lt=null,_t={};const Mt=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),ae=new ve().fromArray(Mt),Z=new ve().fromArray(Vt);function st(F,ot,j,Q){const ft=new Uint8Array(4),ut=i.createTexture();i.bindTexture(F,ut),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<j;Nt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ot+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ut}const yt={};yt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(i.DEPTH_TEST),a.setFunc(Gi),jt(!1),Xt($o),ht(i.CULL_FACE),C(Xn);function ht(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Pt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function te(F,ot){return u[F]!==ot?(i.bindFramebuffer(F,ot),u[F]=ot,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ot),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Lt(F,ot){let j=_,Q=!1;if(F){j=f.get(ot),j===void 0&&(j=[],f.set(ot,j));const ft=F.textures;if(j.length!==ft.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Nt=ft.length;ut<Nt;ut++)j[ut]=i.COLOR_ATTACHMENT0+ut;j.length=ft.length,Q=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,Q=!0);Q&&i.drawBuffers(j)}function be(F){return w!==F?(i.useProgram(F),w=F,!0):!1}const _e={[li]:i.FUNC_ADD,[id]:i.FUNC_SUBTRACT,[rd]:i.FUNC_REVERSE_SUBTRACT};_e[sd]=i.MIN,_e[ad]=i.MAX;const Wt={[od]:i.ZERO,[cd]:i.ONE,[ld]:i.SRC_COLOR,[Ea]:i.SRC_ALPHA,[_d]:i.SRC_ALPHA_SATURATE,[fd]:i.DST_COLOR,[dd]:i.DST_ALPHA,[hd]:i.ONE_MINUS_SRC_COLOR,[Ta]:i.ONE_MINUS_SRC_ALPHA,[pd]:i.ONE_MINUS_DST_COLOR,[ud]:i.ONE_MINUS_DST_ALPHA,[md]:i.CONSTANT_COLOR,[gd]:i.ONE_MINUS_CONSTANT_COLOR,[wd]:i.CONSTANT_ALPHA,[vd]:i.ONE_MINUS_CONSTANT_ALPHA};function C(F,ot,j,Q,ft,ut,Nt,ge,De,re){if(F===Xn){b===!0&&(Pt(i.BLEND),b=!1);return}if(b===!1&&(ht(i.BLEND),b=!0),F!==nd){if(F!==g||re!==x){if((m!==li||M!==li)&&(i.blendEquation(i.FUNC_ADD),m=li,M=li),re)switch(F){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qo:i.blendFunc(i.ONE,i.ONE);break;case tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ec:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ec:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}R=null,T=null,B=null,P=null,L.set(0,0,0),H=0,g=F,x=re}return}ft=ft||ot,ut=ut||j,Nt=Nt||Q,(ot!==m||ft!==M)&&(i.blendEquationSeparate(_e[ot],_e[ft]),m=ot,M=ft),(j!==R||Q!==T||ut!==B||Nt!==P)&&(i.blendFuncSeparate(Wt[j],Wt[Q],Wt[ut],Wt[Nt]),R=j,T=Q,B=ut,P=Nt),(ge.equals(L)===!1||De!==H)&&(i.blendColor(ge.r,ge.g,ge.b,De),L.copy(ge),H=De),g=F,x=!1}function Ze(F,ot){F.side===Cn?Pt(i.CULL_FACE):ht(i.CULL_FACE);let j=F.side===ke;ot&&(j=!j),jt(j),F.blending===Bi&&F.transparent===!1?C(Xn):C(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const Q=F.stencilWrite;o.setTest(Q),Q&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),le(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function Xt(F){F!==Qh?(ht(i.CULL_FACE),F!==U&&(F===$o?i.cullFace(i.BACK):F===td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),U=F}function Et(F){F!==q&&(Y&&i.lineWidth(F),q=F)}function le(F,ot,j){F?(ht(i.POLYGON_OFFSET_FILL),(W!==ot||K!==j)&&(i.polygonOffset(ot,j),W=ot,K=j)):Pt(i.POLYGON_OFFSET_FILL)}function xt(F){F?ht(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function E(F){F===void 0&&(F=i.TEXTURE0+et-1),lt!==F&&(i.activeTexture(F),lt=F)}function v(F,ot,j){j===void 0&&(lt===null?j=i.TEXTURE0+et-1:j=lt);let Q=_t[j];Q===void 0&&(Q={type:void 0,texture:void 0},_t[j]=Q),(Q.type!==F||Q.texture!==ot)&&(lt!==j&&(i.activeTexture(j),lt=j),i.bindTexture(F,ot||yt[F]),Q.type=F,Q.texture=ot)}function k(){const F=_t[lt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function $(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Jt(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(F){ae.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ae.copy(F))}function wt(F){Z.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Z.copy(F))}function qt(F,ot){let j=l.get(ot);j===void 0&&(j=new WeakMap,l.set(ot,j));let Q=j.get(F);Q===void 0&&(Q=i.getUniformBlockIndex(ot,F.name),j.set(F,Q))}function zt(F,ot){const Q=l.get(ot).get(F);c.get(ot)!==Q&&(i.uniformBlockBinding(ot,Q,F.__bindingPointIndex),c.set(ot,Q))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},lt=null,_t={},u={},f=new WeakMap,_=[],w=null,b=!1,g=null,m=null,R=null,T=null,M=null,B=null,P=null,L=new Qt(0,0,0),H=0,x=!1,S=null,U=null,q=null,W=null,K=null,ae.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ht,disable:Pt,bindFramebuffer:te,drawBuffers:Lt,useProgram:be,setBlending:C,setMaterial:Ze,setFlipSided:jt,setCullFace:Xt,setLineWidth:Et,setPolygonOffset:le,setScissorTest:xt,activeTexture:E,bindTexture:v,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:tt,texImage2D:gt,texImage3D:It,updateUBOMapping:qt,uniformBlockBinding:zt,texStorage2D:Jt,texStorage3D:it,texSubImage2D:J,texSubImage3D:St,compressedTexSubImage2D:dt,compressedTexSubImage3D:mt,scissor:Dt,viewport:wt,reset:ce}}function Fg(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new bt,h=new WeakMap;let u;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(E,v){return _?new OffscreenCanvas(E,v):mr("canvas")}function b(E,v,k){let $=1;const tt=xt(E);if((tt.width>k||tt.height>k)&&($=k/Math.max(tt.width,tt.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const J=Math.floor($*tt.width),St=Math.floor($*tt.height);u===void 0&&(u=w(J,St));const dt=v?w(J,St):u;return dt.width=J,dt.height=St,dt.getContext("2d").drawImage(E,0,0,J,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+J+"x"+St+")."),dt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),E;return E}function g(E){return E.generateMipmaps}function m(E){i.generateMipmap(E)}function R(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,v,k,$,tt=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let J=v;if(v===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),v===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGB8UI),k===i.UNSIGNED_SHORT&&(J=i.RGB16UI),k===i.UNSIGNED_INT&&(J=i.RGB32UI),k===i.BYTE&&(J=i.RGB8I),k===i.SHORT&&(J=i.RGB16I),k===i.INT&&(J=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),k===i.UNSIGNED_INT&&(J=i.RGBA32UI),k===i.BYTE&&(J=i.RGBA8I),k===i.SHORT&&(J=i.RGBA16I),k===i.INT&&(J=i.RGBA32I)),v===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),v===i.RGBA){const St=tt?cs:$t.getTransfer($);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=St===se?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function M(E,v){let k;return E?v===null||v===pi||v===ji?k=i.DEPTH24_STENCIL8:v===Pn?k=i.DEPTH32F_STENCIL8:v===pr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===pi||v===ji?k=i.DEPTH_COMPONENT24:v===Pn?k=i.DEPTH_COMPONENT32F:v===pr&&(k=i.DEPTH_COMPONENT16),k}function B(E,v){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==dn&&E.minFilter!==mn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function P(E){const v=E.target;v.removeEventListener("dispose",P),H(v),v.isVideoTexture&&h.delete(v)}function L(E){const v=E.target;v.removeEventListener("dispose",L),S(v)}function H(E){const v=n.get(E);if(v.__webglInit===void 0)return;const k=E.source,$=f.get(k);if($){const tt=$[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&x(E),Object.keys($).length===0&&f.delete(k)}n.remove(E)}function x(E){const v=n.get(E);i.deleteTexture(v.__webglTexture);const k=E.source,$=f.get(k);delete $[v.__cacheKey],a.memory.textures--}function S(E){const v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let tt=0;tt<v.__webglFramebuffer[$].length;tt++)i.deleteFramebuffer(v.__webglFramebuffer[$][tt]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=E.textures;for(let $=0,tt=k.length;$<tt;$++){const J=n.get(k[$]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(k[$])}n.remove(E)}let U=0;function q(){U=0}function W(){const E=U;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),U+=1,E}function K(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function et(E,v){const k=n.get(E);if(E.isVideoTexture&&Et(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){const $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(k,E,v);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function Y(E,v){const k=n.get(E);if(E.version>0&&k.__version!==E.version){Z(k,E,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function rt(E,v){const k=n.get(E);if(E.version>0&&k.__version!==E.version){Z(k,E,v);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function X(E,v){const k=n.get(E);if(E.version>0&&k.__version!==E.version){st(k,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}const lt={[Na]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[Oa]:i.MIRRORED_REPEAT},_t={[dn]:i.NEAREST,[Cd]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[Ns]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},Mt={[Dd]:i.NEVER,[Bd]:i.ALWAYS,[Ud]:i.LESS,[nh]:i.LEQUAL,[Fd]:i.EQUAL,[zd]:i.GEQUAL,[Nd]:i.GREATER,[Od]:i.NOTEQUAL};function Vt(E,v){if(v.type===Pn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===mn||v.magFilter===Ns||v.magFilter===Rr||v.magFilter===ui||v.minFilter===mn||v.minFilter===Ns||v.minFilter===Rr||v.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,lt[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,lt[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,lt[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,_t[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,_t[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Mt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===dn||v.minFilter!==Rr&&v.minFilter!==ui||v.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ae(E,v){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",P));const $=v.source;let tt=f.get($);tt===void 0&&(tt={},f.set($,tt));const J=K(v);if(J!==E.__cacheKey){tt[J]===void 0&&(tt[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),tt[J].usedTimes++;const St=tt[E.__cacheKey];St!==void 0&&(tt[E.__cacheKey].usedTimes--,St.usedTimes===0&&x(v)),E.__cacheKey=J,E.__webglTexture=tt[J].texture}return k}function Z(E,v,k){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);const tt=ae(E,v),J=v.source;e.bindTexture($,E.__webglTexture,i.TEXTURE0+k);const St=n.get(J);if(J.version!==St.__version||tt===!0){e.activeTexture(i.TEXTURE0+k);const dt=$t.getPrimaries($t.workingColorSpace),mt=v.colorSpace===jn?null:$t.getPrimaries(v.colorSpace),Jt=v.colorSpace===jn||dt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let it=b(v.image,!1,r.maxTextureSize);it=le(v,it);const gt=s.convert(v.format,v.colorSpace),It=s.convert(v.type);let Dt=T(v.internalFormat,gt,It,v.colorSpace,v.isVideoTexture);Vt($,v);let wt;const qt=v.mipmaps,zt=v.isVideoTexture!==!0,ce=St.__version===void 0||tt===!0,F=J.dataReady,ot=B(v,it);if(v.isDepthTexture)Dt=M(v.format===Xi,v.type),ce&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Dt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Dt,it.width,it.height,0,gt,It,null));else if(v.isDataTexture)if(qt.length>0){zt&&ce&&e.texStorage2D(i.TEXTURE_2D,ot,Dt,qt[0].width,qt[0].height);for(let j=0,Q=qt.length;j<Q;j++)wt=qt[j],zt?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,wt.width,wt.height,gt,It,wt.data):e.texImage2D(i.TEXTURE_2D,j,Dt,wt.width,wt.height,0,gt,It,wt.data);v.generateMipmaps=!1}else zt?(ce&&e.texStorage2D(i.TEXTURE_2D,ot,Dt,it.width,it.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,gt,It,it.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,it.width,it.height,0,gt,It,it.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){zt&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Dt,qt[0].width,qt[0].height,it.depth);for(let j=0,Q=qt.length;j<Q;j++)if(wt=qt[j],v.format!==hn)if(gt!==null)if(zt){if(F)if(v.layerUpdates.size>0){const ft=Dc(wt.width,wt.height,v.format,v.type);for(const ut of v.layerUpdates){const Nt=wt.data.subarray(ut*ft/wt.data.BYTES_PER_ELEMENT,(ut+1)*ft/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ut,wt.width,wt.height,1,gt,Nt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,wt.width,wt.height,it.depth,gt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Dt,wt.width,wt.height,it.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,wt.width,wt.height,it.depth,gt,It,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Dt,wt.width,wt.height,it.depth,0,gt,It,wt.data)}else{zt&&ce&&e.texStorage2D(i.TEXTURE_2D,ot,Dt,qt[0].width,qt[0].height);for(let j=0,Q=qt.length;j<Q;j++)wt=qt[j],v.format!==hn?gt!==null?zt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,wt.width,wt.height,gt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Dt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,wt.width,wt.height,gt,It,wt.data):e.texImage2D(i.TEXTURE_2D,j,Dt,wt.width,wt.height,0,gt,It,wt.data)}else if(v.isDataArrayTexture)if(zt){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Dt,it.width,it.height,it.depth),F)if(v.layerUpdates.size>0){const j=Dc(it.width,it.height,v.format,v.type);for(const Q of v.layerUpdates){const ft=it.data.subarray(Q*j/it.data.BYTES_PER_ELEMENT,(Q+1)*j/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,it.width,it.height,1,gt,It,ft)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,gt,It,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,it.width,it.height,it.depth,0,gt,It,it.data);else if(v.isData3DTexture)zt?(ce&&e.texStorage3D(i.TEXTURE_3D,ot,Dt,it.width,it.height,it.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,gt,It,it.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,it.width,it.height,it.depth,0,gt,It,it.data);else if(v.isFramebufferTexture){if(ce)if(zt)e.texStorage2D(i.TEXTURE_2D,ot,Dt,it.width,it.height);else{let j=it.width,Q=it.height;for(let ft=0;ft<ot;ft++)e.texImage2D(i.TEXTURE_2D,ft,Dt,j,Q,0,gt,It,null),j>>=1,Q>>=1}}else if(qt.length>0){if(zt&&ce){const j=xt(qt[0]);e.texStorage2D(i.TEXTURE_2D,ot,Dt,j.width,j.height)}for(let j=0,Q=qt.length;j<Q;j++)wt=qt[j],zt?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,gt,It,wt):e.texImage2D(i.TEXTURE_2D,j,Dt,gt,It,wt);v.generateMipmaps=!1}else if(zt){if(ce){const j=xt(it);e.texStorage2D(i.TEXTURE_2D,ot,Dt,j.width,j.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,It,it)}else e.texImage2D(i.TEXTURE_2D,0,Dt,gt,It,it);g(v)&&m($),St.__version=J.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function st(E,v,k){if(v.image.length!==6)return;const $=ae(E,v),tt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+k);const J=n.get(tt);if(tt.version!==J.__version||$===!0){e.activeTexture(i.TEXTURE0+k);const St=$t.getPrimaries($t.workingColorSpace),dt=v.colorSpace===jn?null:$t.getPrimaries(v.colorSpace),mt=v.colorSpace===jn||St===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Jt=v.isCompressedTexture||v.image[0].isCompressedTexture,it=v.image[0]&&v.image[0].isDataTexture,gt=[];for(let Q=0;Q<6;Q++)!Jt&&!it?gt[Q]=b(v.image[Q],!0,r.maxCubemapSize):gt[Q]=it?v.image[Q].image:v.image[Q],gt[Q]=le(v,gt[Q]);const It=gt[0],Dt=s.convert(v.format,v.colorSpace),wt=s.convert(v.type),qt=T(v.internalFormat,Dt,wt,v.colorSpace),zt=v.isVideoTexture!==!0,ce=J.__version===void 0||$===!0,F=tt.dataReady;let ot=B(v,It);Vt(i.TEXTURE_CUBE_MAP,v);let j;if(Jt){zt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,qt,It.width,It.height);for(let Q=0;Q<6;Q++){j=gt[Q].mipmaps;for(let ft=0;ft<j.length;ft++){const ut=j[ft];v.format!==hn?Dt!==null?zt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,ut.width,ut.height,Dt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,qt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,ut.width,ut.height,Dt,wt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,qt,ut.width,ut.height,0,Dt,wt,ut.data)}}}else{if(j=v.mipmaps,zt&&ce){j.length>0&&ot++;const Q=xt(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,qt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(it){zt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,gt[Q].width,gt[Q].height,Dt,wt,gt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qt,gt[Q].width,gt[Q].height,0,Dt,wt,gt[Q].data);for(let ft=0;ft<j.length;ft++){const Nt=j[ft].image[Q].image;zt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,Nt.width,Nt.height,Dt,wt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,qt,Nt.width,Nt.height,0,Dt,wt,Nt.data)}}else{zt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Dt,wt,gt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qt,Dt,wt,gt[Q]);for(let ft=0;ft<j.length;ft++){const ut=j[ft];zt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,Dt,wt,ut.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,qt,Dt,wt,ut.image[Q])}}}g(v)&&m(i.TEXTURE_CUBE_MAP),J.__version=tt.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function yt(E,v,k,$,tt,J){const St=s.convert(k.format,k.colorSpace),dt=s.convert(k.type),mt=T(k.internalFormat,St,dt,k.colorSpace),Jt=n.get(v),it=n.get(k);if(it.__renderTarget=v,!Jt.__hasExternalTextures){const gt=Math.max(1,v.width>>J),It=Math.max(1,v.height>>J);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,J,mt,gt,It,v.depth,0,St,dt,null):e.texImage2D(tt,J,mt,gt,It,0,St,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Xt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,tt,it.__webglTexture,0,jt(v)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,tt,it.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(E,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){const $=v.depthTexture,tt=$&&$.isDepthTexture?$.type:null,J=M(v.stencilBuffer,tt),St=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=jt(v);Xt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,J,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,J,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,E)}else{const $=v.textures;for(let tt=0;tt<$.length;tt++){const J=$[tt],St=s.convert(J.format,J.colorSpace),dt=s.convert(J.type),mt=T(J.internalFormat,St,dt,J.colorSpace),Jt=jt(v);k&&Xt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,mt,v.width,v.height):Xt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,mt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,mt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),et(v.depthTexture,0);const tt=$.__webglTexture,J=jt(v);if(v.depthTexture.format===Hi)Xt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(v.depthTexture.format===Xi)Xt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function te(E){const v=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",tt)};$.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=$}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Pt(v.__webglFramebuffer,E)}else if(k){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),ht(v.__webglDepthbuffer[$],E,!1);else{const tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ht(v.__webglDepthbuffer,E,!1);else{const $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(E,v,k){const $=n.get(E);v!==void 0&&yt($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&te(E)}function be(E){const v=E.texture,k=n.get(E),$=n.get(v);E.addEventListener("dispose",L);const tt=E.textures,J=E.isWebGLCubeRenderTarget===!0,St=tt.length>1;if(St||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,a.memory.textures++),J){k.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[dt]=[];for(let mt=0;mt<v.mipmaps.length;mt++)k.__webglFramebuffer[dt][mt]=i.createFramebuffer()}else k.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let dt=0;dt<v.mipmaps.length;dt++)k.__webglFramebuffer[dt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(St)for(let dt=0,mt=tt.length;dt<mt;dt++){const Jt=n.get(tt[dt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Xt(E)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let dt=0;dt<tt.length;dt++){const mt=tt[dt];k.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[dt]);const Jt=s.convert(mt.format,mt.colorSpace),it=s.convert(mt.type),gt=T(mt.internalFormat,Jt,it,mt.colorSpace,E.isXRRenderTarget===!0),It=jt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,gt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,k.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(k.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Vt(i.TEXTURE_CUBE_MAP,v);for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0)for(let mt=0;mt<v.mipmaps.length;mt++)yt(k.__webglFramebuffer[dt][mt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,mt);else yt(k.__webglFramebuffer[dt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(v)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let dt=0,mt=tt.length;dt<mt;dt++){const Jt=tt[dt],it=n.get(Jt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),Vt(i.TEXTURE_2D,Jt),yt(k.__webglFramebuffer,E,Jt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),g(Jt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(dt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,$.__webglTexture),Vt(dt,v),v.mipmaps&&v.mipmaps.length>0)for(let mt=0;mt<v.mipmaps.length;mt++)yt(k.__webglFramebuffer[mt],E,v,i.COLOR_ATTACHMENT0,dt,mt);else yt(k.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,dt,0);g(v)&&m(dt),e.unbindTexture()}E.depthBuffer&&te(E)}function _e(E){const v=E.textures;for(let k=0,$=v.length;k<$;k++){const tt=v[k];if(g(tt)){const J=R(E),St=n.get(tt).__webglTexture;e.bindTexture(J,St),m(J),e.unbindTexture()}}}const Wt=[],C=[];function Ze(E){if(E.samples>0){if(Xt(E)===!1){const v=E.textures,k=E.width,$=E.height;let tt=i.COLOR_BUFFER_BIT;const J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(E),dt=v.length>1;if(dt)for(let mt=0;mt<v.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let mt=0;mt<v.length;mt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);const Jt=n.get(v[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,k,$,0,0,k,$,tt,i.NEAREST),c===!0&&(Wt.length=0,C.length=0,Wt.push(i.COLOR_ATTACHMENT0+mt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Wt.push(J),C.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let mt=0;mt<v.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);const Jt=n.get(v[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function jt(E){return Math.min(r.maxSamples,E.samples)}function Xt(E){const v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Et(E){const v=a.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function le(E,v){const k=E.colorSpace,$=E.format,tt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==qi&&k!==jn&&($t.getTransfer(k)===se?($!==hn||tt!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function xt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=q,this.setTexture2D=et,this.setTexture2DArray=Y,this.setTexture3D=rt,this.setTextureCube=X,this.rebindTextures=Lt,this.setupRenderTarget=be,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Xt}function Ng(i,t){function e(n,r=jn){let s;const a=$t.getTransfer(r);if(n===Dn)return i.UNSIGNED_BYTE;if(n===yo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===So)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jl)return i.BYTE;if(n===Xl)return i.SHORT;if(n===pr)return i.UNSIGNED_SHORT;if(n===bo)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===yr)return i.HALF_FLOAT;if(n===Yl)return i.ALPHA;if(n===Jl)return i.RGB;if(n===hn)return i.RGBA;if(n===Kl)return i.LUMINANCE;if(n===Zl)return i.LUMINANCE_ALPHA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===Xi)return i.DEPTH_STENCIL;if(n===$l)return i.RED;if(n===xo)return i.RED_INTEGER;if(n===Ql)return i.RG;if(n===Mo)return i.RG_INTEGER;if(n===Eo)return i.RGBA_INTEGER;if(n===ns||n===is||n===rs||n===ss)if(a===se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ns)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ns)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ss)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===Ba||n===Ha||n===ka)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ha)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===Va||n===Wa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ga||n===Va)return a===se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Wa)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ja||n===Xa||n===qa||n===Ya||n===Ja||n===Ka||n===Za||n===$a||n===Qa||n===to||n===eo||n===no||n===io||n===ro)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ja)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xa)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ka)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===to)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===no)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===io)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ro)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===as||n===so||n===ao)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===as)return a===se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===so)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ao)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===th||n===oo||n===co||n===lo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===as)return s.COMPRESSED_RED_RGTC1_EXT;if(n===oo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===co)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Og=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zg=`
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

}`;class Bg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ge,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Jn({vertexShader:Og,fragmentShader:zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ke(new vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hg extends Ji{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,_=null,w=null;const b=new Bg,g=e.getContextAttributes();let m=null,R=null;const T=[],M=[],B=new bt;let P=null;const L=new Je;L.viewport=new ve;const H=new Je;H.viewport=new ve;const x=[L,H],S=new sf;let U=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let st=T[Z];return st===void 0&&(st=new na,T[Z]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Z){let st=T[Z];return st===void 0&&(st=new na,T[Z]=st),st.getGripSpace()},this.getHand=function(Z){let st=T[Z];return st===void 0&&(st=new na,T[Z]=st),st.getHandSpace()};function W(Z){const st=M.indexOf(Z.inputSource);if(st===-1)return;const yt=T[st];yt!==void 0&&(yt.update(Z.inputSource,Z.frame,l||a),yt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function K(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",et);for(let Z=0;Z<T.length;Z++){const st=M[Z];st!==null&&(M[Z]=null,T[Z].disconnect(st))}U=null,q=null,b.reset(),t.setRenderTarget(m),_=null,f=null,u=null,r=null,R=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return u},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",K),r.addEventListener("inputsourceschange",et),g.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(B),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,ht=null,Pt=null;g.depth&&(Pt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=g.stencil?Xi:Hi,ht=g.stencil?ji:pi);const te={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:s};u=new XRWebGLBinding(r,e),f=u.createProjectionLayer(te),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),R=new _i(f.textureWidth,f.textureHeight,{format:hn,type:Dn,depthTexture:new ph(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const yt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,e,yt),r.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),R=new _i(_.framebufferWidth,_.framebufferHeight,{format:hn,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function et(Z){for(let st=0;st<Z.removed.length;st++){const yt=Z.removed[st],ht=M.indexOf(yt);ht>=0&&(M[ht]=null,T[ht].disconnect(yt))}for(let st=0;st<Z.added.length;st++){const yt=Z.added[st];let ht=M.indexOf(yt);if(ht===-1){for(let te=0;te<T.length;te++)if(te>=M.length){M.push(yt),ht=te;break}else if(M[te]===null){M[te]=yt,ht=te;break}if(ht===-1)break}const Pt=T[ht];Pt&&Pt.connect(yt)}}const Y=new N,rt=new N;function X(Z,st,yt){Y.setFromMatrixPosition(st.matrixWorld),rt.setFromMatrixPosition(yt.matrixWorld);const ht=Y.distanceTo(rt),Pt=st.projectionMatrix.elements,te=yt.projectionMatrix.elements,Lt=Pt[14]/(Pt[10]-1),be=Pt[14]/(Pt[10]+1),_e=(Pt[9]+1)/Pt[5],Wt=(Pt[9]-1)/Pt[5],C=(Pt[8]-1)/Pt[0],Ze=(te[8]+1)/te[0],jt=Lt*C,Xt=Lt*Ze,Et=ht/(-C+Ze),le=Et*-C;if(st.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(le),Z.translateZ(Et),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Pt[10]===-1)Z.projectionMatrix.copy(st.projectionMatrix),Z.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const xt=Lt+Et,E=be+Et,v=jt-le,k=Xt+(ht-le),$=_e*be/E*xt,tt=Wt*be/E*xt;Z.projectionMatrix.makePerspective(v,k,$,tt,xt,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function lt(Z,st){st===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(st.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let st=Z.near,yt=Z.far;b.texture!==null&&(b.depthNear>0&&(st=b.depthNear),b.depthFar>0&&(yt=b.depthFar)),S.near=H.near=L.near=st,S.far=H.far=L.far=yt,(U!==S.near||q!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),U=S.near,q=S.far),L.layers.mask=Z.layers.mask|2,H.layers.mask=Z.layers.mask|4,S.layers.mask=L.layers.mask|H.layers.mask;const ht=Z.parent,Pt=S.cameras;lt(S,ht);for(let te=0;te<Pt.length;te++)lt(Pt[te],ht);Pt.length===2?X(S,L,H):S.projectionMatrix.copy(L.projectionMatrix),_t(Z,S,ht)};function _t(Z,st,yt){yt===null?Z.matrix.copy(st.matrixWorld):(Z.matrix.copy(yt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(st.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(st.projectionMatrix),Z.projectionMatrixInverse.copy(st.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=_r*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&_===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=Z)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(S)};let Mt=null;function Vt(Z,st){if(h=st.getViewerPose(l||a),w=st,h!==null){const yt=h.views;_!==null&&(t.setRenderTargetFramebuffer(R,_.framebuffer),t.setRenderTarget(R));let ht=!1;yt.length!==S.cameras.length&&(S.cameras.length=0,ht=!0);for(let Lt=0;Lt<yt.length;Lt++){const be=yt[Lt];let _e=null;if(_!==null)_e=_.getViewport(be);else{const C=u.getViewSubImage(f,be);_e=C.viewport,Lt===0&&(t.setRenderTargetTextures(R,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(R))}let Wt=x[Lt];Wt===void 0&&(Wt=new Je,Wt.layers.enable(Lt),Wt.viewport=new ve,x[Lt]=Wt),Wt.matrix.fromArray(be.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(be.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(_e.x,_e.y,_e.width,_e.height),Lt===0&&(S.matrix.copy(Wt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ht===!0&&S.cameras.push(Wt)}const Pt=r.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const Lt=u.getDepthInformation(yt[0]);Lt&&Lt.isValid&&Lt.texture&&b.init(t,Lt,r.renderState)}}for(let yt=0;yt<T.length;yt++){const ht=M[yt],Pt=T[yt];ht!==null&&Pt!==void 0&&Pt.update(ht,st,l||a)}Mt&&Mt(Z,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),w=null}const ae=new bh;ae.setAnimationLoop(Vt),this.setAnimationLoop=function(Z){Mt=Z},this.dispose=function(){}}}const ri=new wn,kg=new ue;function Gg(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,dh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,R,T,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&_(g,m,M)):m.isMeshMatcapMaterial?(s(g,m),w(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),b(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,R,T):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ke&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ke&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const R=t.get(m),T=R.envMap,M=R.envMapRotation;T&&(g.envMap.value=T,ri.copy(M),ri.x*=-1,ri.y*=-1,ri.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),g.envMapRotation.value.setFromMatrix4(kg.makeRotationFromEuler(ri)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,R,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*R,g.scale.value=T*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function _(g,m,R){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ke&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=R.texture,g.transmissionSamplerSize.value.set(R.width,R.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function w(g,m){m.matcap&&(g.matcap.value=m.matcap)}function b(g,m){const R=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(R.matrixWorld),g.nearDistance.value=R.shadow.camera.near,g.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Vg(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,T){const M=T.program;n.uniformBlockBinding(R,M)}function l(R,T){let M=r[R.id];M===void 0&&(w(R),M=h(R),r[R.id]=M,R.addEventListener("dispose",g));const B=T.program;n.updateUBOMapping(R,B);const P=t.render.frame;s[R.id]!==P&&(f(R),s[R.id]=P)}function h(R){const T=u();R.__bindingPointIndex=T;const M=i.createBuffer(),B=R.__size,P=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,B,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,M),M}function u(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const T=r[R.id],M=R.uniforms,B=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let P=0,L=M.length;P<L;P++){const H=Array.isArray(M[P])?M[P]:[M[P]];for(let x=0,S=H.length;x<S;x++){const U=H[x];if(_(U,P,x,B)===!0){const q=U.__offset,W=Array.isArray(U.value)?U.value:[U.value];let K=0;for(let et=0;et<W.length;et++){const Y=W[et],rt=b(Y);typeof Y=="number"||typeof Y=="boolean"?(U.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,q+K,U.__data)):Y.isMatrix3?(U.__data[0]=Y.elements[0],U.__data[1]=Y.elements[1],U.__data[2]=Y.elements[2],U.__data[3]=0,U.__data[4]=Y.elements[3],U.__data[5]=Y.elements[4],U.__data[6]=Y.elements[5],U.__data[7]=0,U.__data[8]=Y.elements[6],U.__data[9]=Y.elements[7],U.__data[10]=Y.elements[8],U.__data[11]=0):(Y.toArray(U.__data,K),K+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(R,T,M,B){const P=R.value,L=T+"_"+M;if(B[L]===void 0)return typeof P=="number"||typeof P=="boolean"?B[L]=P:B[L]=P.clone(),!0;{const H=B[L];if(typeof P=="number"||typeof P=="boolean"){if(H!==P)return B[L]=P,!0}else if(H.equals(P)===!1)return H.copy(P),!0}return!1}function w(R){const T=R.uniforms;let M=0;const B=16;for(let L=0,H=T.length;L<H;L++){const x=Array.isArray(T[L])?T[L]:[T[L]];for(let S=0,U=x.length;S<U;S++){const q=x[S],W=Array.isArray(q.value)?q.value:[q.value];for(let K=0,et=W.length;K<et;K++){const Y=W[K],rt=b(Y),X=M%B,lt=X%rt.boundary,_t=X+lt;M+=lt,_t!==0&&B-_t<rt.storage&&(M+=B-_t),q.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=M,M+=rt.storage}}}const P=M%B;return P>0&&(M+=B-P),R.__size=M,R.__cache={},this}function b(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),T}function g(R){const T=R.target;T.removeEventListener("dispose",g);const M=a.indexOf(T.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function m(){for(const R in r)i.deleteBuffer(r[R]);a=[],r={},s={}}return{bind:c,update:l,dispose:m}}class Wg{constructor(t={}){const{canvas:e=nu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const w=new Uint32Array(4),b=new Int32Array(4);let g=null,m=null;const R=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ye,this.toneMapping=qn,this.toneMappingExposure=1;const M=this;let B=!1,P=0,L=0,H=null,x=-1,S=null;const U=new ve,q=new ve;let W=null;const K=new Qt(0);let et=0,Y=e.width,rt=e.height,X=1,lt=null,_t=null;const Mt=new ve(0,0,Y,rt),Vt=new ve(0,0,Y,rt);let ae=!1;const Z=new Io;let st=!1,yt=!1;this.transmissionResolutionScale=1;const ht=new ue,Pt=new ue,te=new N,Lt=new ve,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function Wt(){return H===null?X:1}let C=n;function Ze(y,O){return e.getContext(y,O)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vo}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),C===null){const O="webgl2";if(C=Ze(O,y),C===null)throw Ze(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let jt,Xt,Et,le,xt,E,v,k,$,tt,J,St,dt,mt,Jt,it,gt,It,Dt,wt,qt,zt,ce,F;function ot(){jt=new tm(C),jt.init(),zt=new Ng(C,jt),Xt=new q_(C,jt,t,zt),Et=new Ug(C,jt),Xt.reverseDepthBuffer&&f&&Et.buffers.depth.setReversed(!0),le=new im(C),xt=new yg,E=new Fg(C,jt,Et,xt,Xt,zt,le),v=new J_(M),k=new Q_(M),$=new lf(C),ce=new j_(C,$),tt=new em(C,$,le,ce),J=new sm(C,tt,$,le),Dt=new rm(C,Xt,E),it=new Y_(xt),St=new bg(M,v,k,jt,Xt,ce,it),dt=new Gg(M,xt),mt=new xg,Jt=new Cg(jt),It=new W_(M,v,k,Et,J,_,c),gt=new Lg(M,J,Xt),F=new Vg(C,le,Xt,Et),wt=new X_(C,jt,le),qt=new nm(C,jt,le),le.programs=St.programs,M.capabilities=Xt,M.extensions=jt,M.properties=xt,M.renderLists=mt,M.shadowMap=gt,M.state=Et,M.info=le}ot();const j=new Hg(M,C);this.xr=j,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const y=jt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=jt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(Y,rt,!1))},this.getSize=function(y){return y.set(Y,rt)},this.setSize=function(y,O,G=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,rt=O,e.width=Math.floor(y*X),e.height=Math.floor(O*X),G===!0&&(e.style.width=y+"px",e.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(Y*X,rt*X).floor()},this.setDrawingBufferSize=function(y,O,G){Y=y,rt=O,X=G,e.width=Math.floor(y*G),e.height=Math.floor(O*G),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(U)},this.getViewport=function(y){return y.copy(Mt)},this.setViewport=function(y,O,G,V){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,O,G,V),Et.viewport(U.copy(Mt).multiplyScalar(X).round())},this.getScissor=function(y){return y.copy(Vt)},this.setScissor=function(y,O,G,V){y.isVector4?Vt.set(y.x,y.y,y.z,y.w):Vt.set(y,O,G,V),Et.scissor(q.copy(Vt).multiplyScalar(X).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(y){Et.setScissorTest(ae=y)},this.setOpaqueSort=function(y){lt=y},this.setTransparentSort=function(y){_t=y},this.getClearColor=function(y){return y.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(y=!0,O=!0,G=!0){let V=0;if(y){let z=!1;if(H!==null){const nt=H.texture.format;z=nt===Eo||nt===Mo||nt===xo}if(z){const nt=H.texture.type,ct=nt===Dn||nt===pi||nt===pr||nt===ji||nt===yo||nt===So,pt=It.getClearColor(),vt=It.getClearAlpha(),Ut=pt.r,Ft=pt.g,Tt=pt.b;ct?(w[0]=Ut,w[1]=Ft,w[2]=Tt,w[3]=vt,C.clearBufferuiv(C.COLOR,0,w)):(b[0]=Ut,b[1]=Ft,b[2]=Tt,b[3]=vt,C.clearBufferiv(C.COLOR,0,b))}else V|=C.COLOR_BUFFER_BIT}O&&(V|=C.DEPTH_BUFFER_BIT),G&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),It.dispose(),mt.dispose(),Jt.dispose(),xt.dispose(),v.dispose(),k.dispose(),J.dispose(),ce.dispose(),F.dispose(),St.dispose(),j.dispose(),j.removeEventListener("sessionstart",jo),j.removeEventListener("sessionend",Xo),Zn.stop()};function Q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const y=le.autoReset,O=gt.enabled,G=gt.autoUpdate,V=gt.needsUpdate,z=gt.type;ot(),le.autoReset=y,gt.enabled=O,gt.autoUpdate=G,gt.needsUpdate=V,gt.type=z}function ut(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Nt(y){const O=y.target;O.removeEventListener("dispose",Nt),ge(O)}function ge(y){De(y),xt.remove(y)}function De(y){const O=xt.get(y).programs;O!==void 0&&(O.forEach(function(G){St.releaseProgram(G)}),y.isShaderMaterial&&St.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,G,V,z,nt){O===null&&(O=be);const ct=z.isMesh&&z.matrixWorld.determinant()<0,pt=qh(y,O,G,V,z);Et.setMaterial(V,ct);let vt=G.index,Ut=1;if(V.wireframe===!0){if(vt=tt.getWireframeAttribute(G),vt===void 0)return;Ut=2}const Ft=G.drawRange,Tt=G.attributes.position;let Kt=Ft.start*Ut,ee=(Ft.start+Ft.count)*Ut;nt!==null&&(Kt=Math.max(Kt,nt.start*Ut),ee=Math.min(ee,(nt.start+nt.count)*Ut)),vt!==null?(Kt=Math.max(Kt,0),ee=Math.min(ee,vt.count)):Tt!=null&&(Kt=Math.max(Kt,0),ee=Math.min(ee,Tt.count));const ye=ee-Kt;if(ye<0||ye===1/0)return;ce.setup(z,V,pt,G,vt);let we,Zt=wt;if(vt!==null&&(we=$.get(vt),Zt=qt,Zt.setIndex(we)),z.isMesh)V.wireframe===!0?(Et.setLineWidth(V.wireframeLinewidth*Wt()),Zt.setMode(C.LINES)):Zt.setMode(C.TRIANGLES);else if(z.isLine){let Rt=V.linewidth;Rt===void 0&&(Rt=1),Et.setLineWidth(Rt*Wt()),z.isLineSegments?Zt.setMode(C.LINES):z.isLineLoop?Zt.setMode(C.LINE_LOOP):Zt.setMode(C.LINE_STRIP)}else z.isPoints?Zt.setMode(C.POINTS):z.isSprite&&Zt.setMode(C.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ai("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Zt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Rt=z._multiDrawStarts,Ie=z._multiDrawCounts,ne=z._multiDrawCount,rn=vt?$.get(vt).bytesPerElement:1,vi=xt.get(V).currentProgram.getUniforms();for(let Ve=0;Ve<ne;Ve++)vi.setValue(C,"_gl_DrawID",Ve),Zt.render(Rt[Ve]/rn,Ie[Ve])}else if(z.isInstancedMesh)Zt.renderInstances(Kt,ye,z.count);else if(G.isInstancedBufferGeometry){const Rt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ie=Math.min(G.instanceCount,Rt);Zt.renderInstances(Kt,ye,Ie)}else Zt.render(Kt,ye)};function re(y,O,G){y.transparent===!0&&y.side===Cn&&y.forceSinglePass===!1?(y.side=ke,y.needsUpdate=!0,Tr(y,O,G),y.side=Yn,y.needsUpdate=!0,Tr(y,O,G),y.side=Cn):Tr(y,O,G)}this.compile=function(y,O,G=null){G===null&&(G=y),m=Jt.get(G),m.init(O),T.push(m),G.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),y!==G&&y.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const V=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const nt=z.material;if(nt)if(Array.isArray(nt))for(let ct=0;ct<nt.length;ct++){const pt=nt[ct];re(pt,G,z),V.add(pt)}else re(nt,G,z),V.add(nt)}),m=T.pop(),V},this.compileAsync=function(y,O,G=null){const V=this.compile(y,O,G);return new Promise(z=>{function nt(){if(V.forEach(function(ct){xt.get(ct).currentProgram.isReady()&&V.delete(ct)}),V.size===0){z(y);return}setTimeout(nt,10)}jt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let nn=null;function Sn(y){nn&&nn(y)}function jo(){Zn.stop()}function Xo(){Zn.start()}const Zn=new bh;Zn.setAnimationLoop(Sn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(y){nn=y,j.setAnimationLoop(y),y===null?Zn.stop():Zn.start()},j.addEventListener("sessionstart",jo),j.addEventListener("sessionend",Xo),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(O),O=j.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,O,H),m=Jt.get(y,T.length),m.init(O),T.push(m),Pt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z.setFromProjectionMatrix(Pt),yt=this.localClippingEnabled,st=it.init(this.clippingPlanes,yt),g=mt.get(y,R.length),g.init(),R.push(g),j.enabled===!0&&j.isPresenting===!0){const nt=M.xr.getDepthSensingMesh();nt!==null&&Us(nt,O,-1/0,M.sortObjects)}Us(y,O,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(lt,_t),_e=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,_e&&It.addToRenderList(g,y),this.info.render.frame++,st===!0&&it.beginShadows();const G=m.state.shadowsArray;gt.render(G,y,O),st===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,z=g.transmissive;if(m.setupLights(),O.isArrayCamera){const nt=O.cameras;if(z.length>0)for(let ct=0,pt=nt.length;ct<pt;ct++){const vt=nt[ct];Yo(V,z,y,vt)}_e&&It.render(y);for(let ct=0,pt=nt.length;ct<pt;ct++){const vt=nt[ct];qo(g,y,vt,vt.viewport)}}else z.length>0&&Yo(V,z,y,O),_e&&It.render(y),qo(g,y,O);H!==null&&L===0&&(E.updateMultisampleRenderTarget(H),E.updateRenderTargetMipmap(H)),y.isScene===!0&&y.onAfterRender(M,y,O),ce.resetDefaultState(),x=-1,S=null,T.pop(),T.length>0?(m=T[T.length-1],st===!0&&it.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,R.pop(),R.length>0?g=R[R.length-1]:g=null};function Us(y,O,G,V){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Z.intersectsSprite(y)){V&&Lt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Pt);const ct=J.update(y),pt=y.material;pt.visible&&g.push(y,ct,pt,G,Lt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Z.intersectsObject(y))){const ct=J.update(y),pt=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Lt.copy(y.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Lt.copy(ct.boundingSphere.center)),Lt.applyMatrix4(y.matrixWorld).applyMatrix4(Pt)),Array.isArray(pt)){const vt=ct.groups;for(let Ut=0,Ft=vt.length;Ut<Ft;Ut++){const Tt=vt[Ut],Kt=pt[Tt.materialIndex];Kt&&Kt.visible&&g.push(y,ct,Kt,G,Lt.z,Tt)}}else pt.visible&&g.push(y,ct,pt,G,Lt.z,null)}}const nt=y.children;for(let ct=0,pt=nt.length;ct<pt;ct++)Us(nt[ct],O,G,V)}function qo(y,O,G,V){const z=y.opaque,nt=y.transmissive,ct=y.transparent;m.setupLightsView(G),st===!0&&it.setGlobalState(M.clippingPlanes,G),V&&Et.viewport(U.copy(V)),z.length>0&&Er(z,O,G),nt.length>0&&Er(nt,O,G),ct.length>0&&Er(ct,O,G),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Yo(y,O,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new _i(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?yr:Dn,minFilter:ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const nt=m.state.transmissionRenderTarget[V.id],ct=V.viewport||U;nt.setSize(ct.z*M.transmissionResolutionScale,ct.w*M.transmissionResolutionScale);const pt=M.getRenderTarget();M.setRenderTarget(nt),M.getClearColor(K),et=M.getClearAlpha(),et<1&&M.setClearColor(16777215,.5),M.clear(),_e&&It.render(G);const vt=M.toneMapping;M.toneMapping=qn;const Ut=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),st===!0&&it.setGlobalState(M.clippingPlanes,V),Er(y,G,V),E.updateMultisampleRenderTarget(nt),E.updateRenderTargetMipmap(nt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Tt=0,Kt=O.length;Tt<Kt;Tt++){const ee=O[Tt],ye=ee.object,we=ee.geometry,Zt=ee.material,Rt=ee.group;if(Zt.side===Cn&&ye.layers.test(V.layers)){const Ie=Zt.side;Zt.side=ke,Zt.needsUpdate=!0,Jo(ye,G,V,we,Zt,Rt),Zt.side=Ie,Zt.needsUpdate=!0,Ft=!0}}Ft===!0&&(E.updateMultisampleRenderTarget(nt),E.updateRenderTargetMipmap(nt))}M.setRenderTarget(pt),M.setClearColor(K,et),Ut!==void 0&&(V.viewport=Ut),M.toneMapping=vt}function Er(y,O,G){const V=O.isScene===!0?O.overrideMaterial:null;for(let z=0,nt=y.length;z<nt;z++){const ct=y[z],pt=ct.object,vt=ct.geometry,Ut=V===null?ct.material:V,Ft=ct.group;pt.layers.test(G.layers)&&Jo(pt,O,G,vt,Ut,Ft)}}function Jo(y,O,G,V,z,nt){y.onBeforeRender(M,O,G,V,z,nt),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(M,O,G,V,y,nt),z.transparent===!0&&z.side===Cn&&z.forceSinglePass===!1?(z.side=ke,z.needsUpdate=!0,M.renderBufferDirect(G,O,V,z,y,nt),z.side=Yn,z.needsUpdate=!0,M.renderBufferDirect(G,O,V,z,y,nt),z.side=Cn):M.renderBufferDirect(G,O,V,z,y,nt),y.onAfterRender(M,O,G,V,z,nt)}function Tr(y,O,G){O.isScene!==!0&&(O=be);const V=xt.get(y),z=m.state.lights,nt=m.state.shadowsArray,ct=z.state.version,pt=St.getParameters(y,z.state,nt,O,G),vt=St.getProgramCacheKey(pt);let Ut=V.programs;V.environment=y.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(y.isMeshStandardMaterial?k:v).get(y.envMap||V.environment),V.envMapRotation=V.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,Ut===void 0&&(y.addEventListener("dispose",Nt),Ut=new Map,V.programs=Ut);let Ft=Ut.get(vt);if(Ft!==void 0){if(V.currentProgram===Ft&&V.lightsStateVersion===ct)return Zo(y,pt),Ft}else pt.uniforms=St.getUniforms(y),y.onBeforeCompile(pt,M),Ft=St.acquireProgram(pt,vt),Ut.set(vt,Ft),V.uniforms=pt.uniforms;const Tt=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Tt.clippingPlanes=it.uniform),Zo(y,pt),V.needsLights=Jh(y),V.lightsStateVersion=ct,V.needsLights&&(Tt.ambientLightColor.value=z.state.ambient,Tt.lightProbe.value=z.state.probe,Tt.directionalLights.value=z.state.directional,Tt.directionalLightShadows.value=z.state.directionalShadow,Tt.spotLights.value=z.state.spot,Tt.spotLightShadows.value=z.state.spotShadow,Tt.rectAreaLights.value=z.state.rectArea,Tt.ltc_1.value=z.state.rectAreaLTC1,Tt.ltc_2.value=z.state.rectAreaLTC2,Tt.pointLights.value=z.state.point,Tt.pointLightShadows.value=z.state.pointShadow,Tt.hemisphereLights.value=z.state.hemi,Tt.directionalShadowMap.value=z.state.directionalShadowMap,Tt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Tt.spotShadowMap.value=z.state.spotShadowMap,Tt.spotLightMatrix.value=z.state.spotLightMatrix,Tt.spotLightMap.value=z.state.spotLightMap,Tt.pointShadowMap.value=z.state.pointShadowMap,Tt.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=Ft,V.uniformsList=null,Ft}function Ko(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=os.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function Zo(y,O){const G=xt.get(y);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function qh(y,O,G,V,z){O.isScene!==!0&&(O=be),E.resetTextureUnits();const nt=O.fog,ct=V.isMeshStandardMaterial?O.environment:null,pt=H===null?M.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:qi,vt=(V.isMeshStandardMaterial?k:v).get(V.envMap||ct),Ut=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ft=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Tt=!!G.morphAttributes.position,Kt=!!G.morphAttributes.normal,ee=!!G.morphAttributes.color;let ye=qn;V.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(ye=M.toneMapping);const we=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Zt=we!==void 0?we.length:0,Rt=xt.get(V),Ie=m.state.lights;if(st===!0&&(yt===!0||y!==S)){const Oe=y===S&&V.id===x;it.setState(V,y,Oe)}let ne=!1;V.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Ie.state.version||Rt.outputColorSpace!==pt||z.isBatchedMesh&&Rt.batching===!1||!z.isBatchedMesh&&Rt.batching===!0||z.isBatchedMesh&&Rt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Rt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Rt.instancing===!1||!z.isInstancedMesh&&Rt.instancing===!0||z.isSkinnedMesh&&Rt.skinning===!1||!z.isSkinnedMesh&&Rt.skinning===!0||z.isInstancedMesh&&Rt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Rt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Rt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Rt.instancingMorph===!1&&z.morphTexture!==null||Rt.envMap!==vt||V.fog===!0&&Rt.fog!==nt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==it.numPlanes||Rt.numIntersection!==it.numIntersection)||Rt.vertexAlphas!==Ut||Rt.vertexTangents!==Ft||Rt.morphTargets!==Tt||Rt.morphNormals!==Kt||Rt.morphColors!==ee||Rt.toneMapping!==ye||Rt.morphTargetsCount!==Zt)&&(ne=!0):(ne=!0,Rt.__version=V.version);let rn=Rt.currentProgram;ne===!0&&(rn=Tr(V,O,z));let vi=!1,Ve=!1,er=!1;const fe=rn.getUniforms(),$e=Rt.uniforms;if(Et.useProgram(rn.program)&&(vi=!0,Ve=!0,er=!0),V.id!==x&&(x=V.id,Ve=!0),vi||S!==y){Et.buffers.depth.getReversed()?(ht.copy(y.projectionMatrix),ru(ht),su(ht),fe.setValue(C,"projectionMatrix",ht)):fe.setValue(C,"projectionMatrix",y.projectionMatrix),fe.setValue(C,"viewMatrix",y.matrixWorldInverse);const He=fe.map.cameraPosition;He!==void 0&&He.setValue(C,te.setFromMatrixPosition(y.matrixWorld)),Xt.logarithmicDepthBuffer&&fe.setValue(C,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&fe.setValue(C,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,Ve=!0,er=!0)}if(z.isSkinnedMesh){fe.setOptional(C,z,"bindMatrix"),fe.setOptional(C,z,"bindMatrixInverse");const Oe=z.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),fe.setValue(C,"boneTexture",Oe.boneTexture,E))}z.isBatchedMesh&&(fe.setOptional(C,z,"batchingTexture"),fe.setValue(C,"batchingTexture",z._matricesTexture,E),fe.setOptional(C,z,"batchingIdTexture"),fe.setValue(C,"batchingIdTexture",z._indirectTexture,E),fe.setOptional(C,z,"batchingColorTexture"),z._colorsTexture!==null&&fe.setValue(C,"batchingColorTexture",z._colorsTexture,E));const Qe=G.morphAttributes;if((Qe.position!==void 0||Qe.normal!==void 0||Qe.color!==void 0)&&Dt.update(z,G,rn),(Ve||Rt.receiveShadow!==z.receiveShadow)&&(Rt.receiveShadow=z.receiveShadow,fe.setValue(C,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&($e.envMap.value=vt,$e.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&($e.envMapIntensity.value=O.environmentIntensity),Ve&&(fe.setValue(C,"toneMappingExposure",M.toneMappingExposure),Rt.needsLights&&Yh($e,er),nt&&V.fog===!0&&dt.refreshFogUniforms($e,nt),dt.refreshMaterialUniforms($e,V,X,rt,m.state.transmissionRenderTarget[y.id]),os.upload(C,Ko(Rt),$e,E)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(os.upload(C,Ko(Rt),$e,E),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&fe.setValue(C,"center",z.center),fe.setValue(C,"modelViewMatrix",z.modelViewMatrix),fe.setValue(C,"normalMatrix",z.normalMatrix),fe.setValue(C,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Oe=V.uniformsGroups;for(let He=0,Fs=Oe.length;He<Fs;He++){const $n=Oe[He];F.update($n,rn),F.bind($n,rn)}}return rn}function Yh(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function Jh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(y,O,G){xt.get(y.texture).__webglTexture=O,xt.get(y.depthTexture).__webglTexture=G;const V=xt.get(y);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,O){const G=xt.get(y);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0};const Kh=C.createFramebuffer();this.setRenderTarget=function(y,O=0,G=0){H=y,P=O,L=G;let V=!0,z=null,nt=!1,ct=!1;if(y){const vt=xt.get(y);if(vt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(C.FRAMEBUFFER,null),V=!1;else if(vt.__webglFramebuffer===void 0)E.setupRenderTarget(y);else if(vt.__hasExternalTextures)E.rebindTextures(y,xt.get(y.texture).__webglTexture,xt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Tt=y.depthTexture;if(vt.__boundDepthTexture!==Tt){if(Tt!==null&&xt.has(Tt)&&(y.width!==Tt.image.width||y.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(y)}}const Ut=y.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ct=!0);const Ft=xt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ft[O])?z=Ft[O][G]:z=Ft[O],nt=!0):y.samples>0&&E.useMultisampledRTT(y)===!1?z=xt.get(y).__webglMultisampledFramebuffer:Array.isArray(Ft)?z=Ft[G]:z=Ft,U.copy(y.viewport),q.copy(y.scissor),W=y.scissorTest}else U.copy(Mt).multiplyScalar(X).floor(),q.copy(Vt).multiplyScalar(X).floor(),W=ae;if(G!==0&&(z=Kh),Et.bindFramebuffer(C.FRAMEBUFFER,z)&&V&&Et.drawBuffers(y,z),Et.viewport(U),Et.scissor(q),Et.setScissorTest(W),nt){const vt=xt.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,vt.__webglTexture,G)}else if(ct){const vt=xt.get(y.texture),Ut=O;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,vt.__webglTexture,G,Ut)}else if(y!==null&&G!==0){const vt=xt.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,vt.__webglTexture,G)}x=-1},this.readRenderTargetPixels=function(y,O,G,V,z,nt,ct){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=xt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ct!==void 0&&(pt=pt[ct]),pt){Et.bindFramebuffer(C.FRAMEBUFFER,pt);try{const vt=y.texture,Ut=vt.format,Ft=vt.type;if(!Xt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-V&&G>=0&&G<=y.height-z&&C.readPixels(O,G,V,z,zt.convert(Ut),zt.convert(Ft),nt)}finally{const vt=H!==null?xt.get(H).__webglFramebuffer:null;Et.bindFramebuffer(C.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(y,O,G,V,z,nt,ct){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=xt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ct!==void 0&&(pt=pt[ct]),pt){const vt=y.texture,Ut=vt.format,Ft=vt.type;if(!Xt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=y.width-V&&G>=0&&G<=y.height-z){Et.bindFramebuffer(C.FRAMEBUFFER,pt);const Tt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Tt),C.bufferData(C.PIXEL_PACK_BUFFER,nt.byteLength,C.STREAM_READ),C.readPixels(O,G,V,z,zt.convert(Ut),zt.convert(Ft),0);const Kt=H!==null?xt.get(H).__webglFramebuffer:null;Et.bindFramebuffer(C.FRAMEBUFFER,Kt);const ee=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await iu(C,ee,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Tt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,nt),C.deleteBuffer(Tt),C.deleteSync(ee),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,O=null,G=0){y.isTexture!==!0&&(ai("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,y=arguments[1]);const V=Math.pow(2,-G),z=Math.floor(y.image.width*V),nt=Math.floor(y.image.height*V),ct=O!==null?O.x:0,pt=O!==null?O.y:0;E.setTexture2D(y,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,ct,pt,z,nt),Et.unbindTexture()};const Zh=C.createFramebuffer(),$h=C.createFramebuffer();this.copyTextureToTexture=function(y,O,G=null,V=null,z=0,nt=null){y.isTexture!==!0&&(ai("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,y=arguments[1],O=arguments[2],nt=arguments[3]||0,G=null),nt===null&&(z!==0?(ai("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=z,z=0):nt=0);let ct,pt,vt,Ut,Ft,Tt,Kt,ee,ye;const we=y.isCompressedTexture?y.mipmaps[nt]:y.image;if(G!==null)ct=G.max.x-G.min.x,pt=G.max.y-G.min.y,vt=G.isBox3?G.max.z-G.min.z:1,Ut=G.min.x,Ft=G.min.y,Tt=G.isBox3?G.min.z:0;else{const Qe=Math.pow(2,-z);ct=Math.floor(we.width*Qe),pt=Math.floor(we.height*Qe),y.isDataArrayTexture?vt=we.depth:y.isData3DTexture?vt=Math.floor(we.depth*Qe):vt=1,Ut=0,Ft=0,Tt=0}V!==null?(Kt=V.x,ee=V.y,ye=V.z):(Kt=0,ee=0,ye=0);const Zt=zt.convert(O.format),Rt=zt.convert(O.type);let Ie;O.isData3DTexture?(E.setTexture3D(O,0),Ie=C.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(E.setTexture2DArray(O,0),Ie=C.TEXTURE_2D_ARRAY):(E.setTexture2D(O,0),Ie=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);const ne=C.getParameter(C.UNPACK_ROW_LENGTH),rn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),vi=C.getParameter(C.UNPACK_SKIP_PIXELS),Ve=C.getParameter(C.UNPACK_SKIP_ROWS),er=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,we.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,we.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ut),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ft),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Tt);const fe=y.isDataArrayTexture||y.isData3DTexture,$e=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){const Qe=xt.get(y),Oe=xt.get(O),He=xt.get(Qe.__renderTarget),Fs=xt.get(Oe.__renderTarget);Et.bindFramebuffer(C.READ_FRAMEBUFFER,He.__webglFramebuffer),Et.bindFramebuffer(C.DRAW_FRAMEBUFFER,Fs.__webglFramebuffer);for(let $n=0;$n<vt;$n++)fe&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,xt.get(y).__webglTexture,z,Tt+$n),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,xt.get(O).__webglTexture,nt,ye+$n)),C.blitFramebuffer(Ut,Ft,ct,pt,Kt,ee,ct,pt,C.DEPTH_BUFFER_BIT,C.NEAREST);Et.bindFramebuffer(C.READ_FRAMEBUFFER,null),Et.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||xt.has(y)){const Qe=xt.get(y),Oe=xt.get(O);Et.bindFramebuffer(C.READ_FRAMEBUFFER,Zh),Et.bindFramebuffer(C.DRAW_FRAMEBUFFER,$h);for(let He=0;He<vt;He++)fe?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Qe.__webglTexture,z,Tt+He):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Qe.__webglTexture,z),$e?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Oe.__webglTexture,nt,ye+He):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Oe.__webglTexture,nt),z!==0?C.blitFramebuffer(Ut,Ft,ct,pt,Kt,ee,ct,pt,C.COLOR_BUFFER_BIT,C.NEAREST):$e?C.copyTexSubImage3D(Ie,nt,Kt,ee,ye+He,Ut,Ft,ct,pt):C.copyTexSubImage2D(Ie,nt,Kt,ee,Ut,Ft,ct,pt);Et.bindFramebuffer(C.READ_FRAMEBUFFER,null),Et.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else $e?y.isDataTexture||y.isData3DTexture?C.texSubImage3D(Ie,nt,Kt,ee,ye,ct,pt,vt,Zt,Rt,we.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(Ie,nt,Kt,ee,ye,ct,pt,vt,Zt,we.data):C.texSubImage3D(Ie,nt,Kt,ee,ye,ct,pt,vt,Zt,Rt,we):y.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,nt,Kt,ee,ct,pt,Zt,Rt,we.data):y.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,nt,Kt,ee,we.width,we.height,Zt,we.data):C.texSubImage2D(C.TEXTURE_2D,nt,Kt,ee,ct,pt,Zt,Rt,we);C.pixelStorei(C.UNPACK_ROW_LENGTH,ne),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,rn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,vi),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ve),C.pixelStorei(C.UNPACK_SKIP_IMAGES,er),nt===0&&O.generateMipmaps&&C.generateMipmap(Ie),Et.unbindTexture()},this.copyTextureToTexture3D=function(y,O,G=null,V=null,z=0){return y.isTexture!==!0&&(ai("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,y=arguments[2],O=arguments[3],z=arguments[4]||0),ai('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,O,G,V,z)},this.initRenderTarget=function(y){xt.get(y).__webglFramebuffer===void 0&&E.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?E.setTextureCube(y,0):y.isData3DTexture?E.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?E.setTexture2DArray(y,0):E.setTexture2D(y,0),Et.unbindTexture()},this.resetState=function(){P=0,L=0,H=null,Et.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class jg{crosshair;constructor(){this.crosshair=document.createElement("div"),this.crosshair.id="crosshair",this.crosshair.style.cssText=`
            position: fixed;
            top: 50%;
            left: 50%;
            width: 4px;
            height: 4px;
            background: white;
            transform: translate(-50%, -50%);
            z-index: 500;
            pointer-events: none;
        `,document.body.appendChild(this.crosshair)}show(){this.crosshair.style.display="block"}hide(){this.crosshair.style.display="none"}}class Xg{container;constructor(){this.container=document.createElement("div"),this.container.id="pause-menu",this.container.style.cssText=`
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0,0,0,0.6);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-family: sans-serif;
            z-index: 1000;
            display: none;
        `;const t=document.createElement("button");t.innerText="Resume",t.onclick=()=>document.dispatchEvent(new Event("unpause"));const e=document.createElement("button");e.innerText="Restart",e.onclick=()=>location.reload(),this.container.append(t,e),document.body.appendChild(this.container)}show(){this.container.style.display="flex"}hide(){this.container.style.display="none"}isVisible(){return this.container.style.display!=="none"}}class qg{pauseMenu;hud;weaponInfo;constructor(){this.pauseMenu=new Xg,this.hud=new jg,this.weaponInfo=document.createElement("div"),this.weaponInfo.id="weapon-info",this.weaponInfo.style.cssText=`
      position: fixed;
      bottom: 10px;
      right: 10px;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      padding: 8px 12px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 14px;
      pointer-events: none;
      z-index: 500;
    `,document.body.appendChild(this.weaponInfo)}showPause(){this.pauseMenu.show(),this.hud.hide(),this.weaponInfo.style.display="none"}hidePause(){this.pauseMenu.hide(),this.hud.show(),this.weaponInfo.style.display="block"}togglePause(){this.pauseMenu.isVisible()?this.hidePause():this.showPause()}updateWeaponInfo(t,e){const{damage:n,fireRate:r,projectileSpeed:s,pelletCount:a,pelletSpreadDeg:o}=e;let c=`<strong>${t}</strong><br>Damage: ${n}<br>Rate: ${r.toFixed(1)}/s<br>Speed: ${s}<br>`;a!==void 0&&(c+=`Pellets: ${a}<br>`),o!==void 0&&(c+=`Spread: ${o}&deg;`),this.weaponInfo.innerHTML=c}}var en=(i=>(i.Boot="Boot",i.MainMenu="MainMenu",i.Playing="Playing",i.Paused="Paused",i.GameOver="GameOver",i))(en||{});class Yg{currentState="Boot";callbacks=[];transitions={Boot:["MainMenu","Playing"],MainMenu:["Playing"],Playing:["Paused","GameOver"],Paused:["Playing","MainMenu"],GameOver:["MainMenu"]};getState(){return this.currentState}onStateChange(t){this.callbacks.push(t)}transition(t){const e=this.currentState;if(t===e)return;if(!(this.transitions[e]||[]).includes(t)){console.warn(`GameStateMachine: invalid transition ${e} → ${t}`);return}this.currentState=t;for(const r of this.callbacks)try{r(e,t)}catch(s){console.error("GameStateMachine callback error:",s)}}}var Wn=(i=>(i.MoveForward="MoveForward",i.MoveBackward="MoveBackward",i.MoveLeft="MoveLeft",i.MoveRight="MoveRight",i.Jump="Jump",i.Sprint="Sprint",i.Fire="Fire",i.Aim="Aim",i))(Wn||{});class Jg{keyStates=new Map;buttonStates=new Map;mouseDelta=new bt;pointerLocked=!1;keyBindings=new Map([["MoveForward",["KeyW"]],["MoveBackward",["KeyS"]],["MoveLeft",["KeyA"]],["MoveRight",["KeyD"]],["Jump",["Space"]],["Sprint",["ShiftLeft","ShiftRight"]]]);buttonBindings=new Map([["Fire",[0]],["Aim",[2]]]);constructor(){window.addEventListener("keydown",t=>this.keyStates.set(t.code,!0)),window.addEventListener("keyup",t=>this.keyStates.set(t.code,!1)),window.addEventListener("mousedown",t=>this.buttonStates.set(t.button,!0)),window.addEventListener("mouseup",t=>this.buttonStates.set(t.button,!1)),window.addEventListener("mousemove",t=>{this.pointerLocked&&(this.mouseDelta.x+=t.movementX,this.mouseDelta.y+=t.movementY)}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement!==null,this.pointerLocked||this.reset()})}getMouseDelta(){const t=this.mouseDelta.clone();return this.mouseDelta.set(0,0),t}isPressed(t){const e=this.keyBindings.get(t)||[];for(const r of e)if(this.keyStates.get(r))return!0;const n=this.buttonBindings.get(t)||[];for(const r of n)if(this.buttonStates.get(r))return!0;return!1}reset(){this.keyStates.clear(),this.buttonStates.clear(),this.mouseDelta.set(0,0)}}const Kg="/assets/rapier_wasm3d_bg-CcbIg-ps.wasm",Zg=async(i={},t)=>{let e;if(t.startsWith("data:")){const n=t.replace(/^data:.*?base64,/,"");let r;if(typeof Buffer=="function"&&typeof Buffer.from=="function")r=Buffer.from(n,"base64");else if(typeof atob=="function"){const s=atob(n);r=new Uint8Array(s.length);for(let a=0;a<s.length;a++)r[a]=s.charCodeAt(a)}else throw new Error("Cannot decode base64-encoded data URL");e=await WebAssembly.instantiate(r,i)}else{const n=await fetch(t),r=n.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&r.startsWith("application/wasm"))e=await WebAssembly.instantiateStreaming(n,i);else{const s=await n.arrayBuffer();e=await WebAssembly.instantiate(s,i)}}return e.instance.exports};let d;function $g(i){d=i}const Yt=new Array(128).fill(void 0);Yt.push(void 0,null,!0,!1);function ie(i){return Yt[i]}let fr=Yt.length;function Me(i){fr===Yt.length&&Yt.push(Yt.length+1);const t=fr;return fr=Yt[t],Yt[t]=i,t}function Oo(i,t){try{return i.apply(this,t)}catch(e){d.__wbindgen_export_0(Me(e))}}function Ct(i){return i==null}let Ui=null;function Ne(){return(Ui===null||Ui.buffer.detached===!0||Ui.buffer.detached===void 0&&Ui.buffer!==d.memory.buffer)&&(Ui=new DataView(d.memory.buffer)),Ui}function Qg(i){i<132||(Yt[i]=fr,fr=i)}function gr(i){const t=ie(i);return Qg(i),t}const tw=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let Eh=new tw("utf-8",{ignoreBOM:!0,fatal:!0});Eh.decode();let $r=null;function ew(){return($r===null||$r.byteLength===0)&&($r=new Uint8Array(d.memory.buffer)),$r}function nw(i,t){return i=i>>>0,Eh.decode(ew().subarray(i,i+t))}function A(i,t){if(!(i instanceof t))throw new Error(`expected instance of ${t.name}`)}let oe=128;function pe(i){if(oe==1)throw new Error("out of js stack");return Yt[--oe]=i,oe}let Qr=null;function Th(){return(Qr===null||Qr.byteLength===0)&&(Qr=new Float32Array(d.memory.buffer)),Qr}function il(i,t){return i=i>>>0,Th().subarray(i/4,i/4+t)}let ts=null;function Rh(){return(ts===null||ts.byteLength===0)&&(ts=new Uint32Array(d.memory.buffer)),ts}function iw(i,t){return i=i>>>0,Rh().subarray(i/4,i/4+t)}let Xe=0;function si(i,t){const e=t(i.length*4,4)>>>0;return Th().set(i,e/4),Xe=i.length,e}function es(i,t){const e=t(i.length*4,4)>>>0;return Rh().set(i,e/4),Xe=i.length,e}const Ss=Object.freeze({LinX:0,0:"LinX",LinY:1,1:"LinY",LinZ:2,2:"LinZ",AngX:3,3:"AngX",AngY:4,4:"AngY",AngZ:5,5:"AngZ"}),ln=Object.freeze({Revolute:0,0:"Revolute",Fixed:1,1:"Fixed",Prismatic:2,2:"Prismatic",Rope:3,3:"Rope",Spring:4,4:"Spring",Spherical:5,5:"Spherical",Generic:6,6:"Generic"}),Le=Object.freeze({Ball:0,0:"Ball",Cuboid:1,1:"Cuboid",Capsule:2,2:"Capsule",Segment:3,3:"Segment",Polyline:4,4:"Polyline",Triangle:5,5:"Triangle",TriMesh:6,6:"TriMesh",HeightField:7,7:"HeightField",Compound:8,8:"Compound",ConvexPolyhedron:9,9:"ConvexPolyhedron",Cylinder:10,10:"Cylinder",Cone:11,11:"Cone",RoundCuboid:12,12:"RoundCuboid",RoundTriangle:13,13:"RoundTriangle",RoundCylinder:14,14:"RoundCylinder",RoundCone:15,15:"RoundCone",RoundConvexPolyhedron:16,16:"RoundConvexPolyhedron",HalfSpace:17,17:"HalfSpace"}),_a=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawbroadphase_free(i>>>0,1));class mi{static __wrap(t){t=t>>>0;const e=Object.create(mi.prototype);return e.__wbg_ptr=t,_a.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,_a.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawbroadphase_free(t,0)}constructor(){const t=d.rawbroadphase_new();return this.__wbg_ptr=t>>>0,_a.register(this,this.__wbg_ptr,this),this}}const rl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawccdsolver_free(i>>>0,1));class po{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,rl.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawccdsolver_free(t,0)}constructor(){const t=d.rawccdsolver_new();return this.__wbg_ptr=t>>>0,rl.register(this,this.__wbg_ptr,this),this}}const sl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawcharactercollision_free(i>>>0,1));class Ah{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,sl.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawcharactercollision_free(t,0)}constructor(){const t=d.rawcharactercollision_new();return this.__wbg_ptr=t>>>0,sl.register(this,this.__wbg_ptr,this),this}handle(){return d.rawcharactercollision_handle(this.__wbg_ptr)}translationDeltaApplied(){const t=d.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return I.__wrap(t)}translationDeltaRemaining(){const t=d.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);return I.__wrap(t)}toi(){return d.rawcharactercollision_toi(this.__wbg_ptr)}worldWitness1(){const t=d.rawcharactercollision_worldWitness1(this.__wbg_ptr);return I.__wrap(t)}worldWitness2(){const t=d.rawcharactercollision_worldWitness2(this.__wbg_ptr);return I.__wrap(t)}worldNormal1(){const t=d.rawcharactercollision_worldNormal1(this.__wbg_ptr);return I.__wrap(t)}worldNormal2(){const t=d.rawcharactercollision_worldNormal2(this.__wbg_ptr);return I.__wrap(t)}}const ma=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawcolliderset_free(i>>>0,1));class me{static __wrap(t){t=t>>>0;const e=Object.create(me.prototype);return e.__wbg_ptr=t,ma.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ma.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawcolliderset_free(t,0)}coTranslation(t){const e=d.rawcolliderset_coTranslation(this.__wbg_ptr,t);return I.__wrap(e)}coRotation(t){const e=d.rawcolliderset_coRotation(this.__wbg_ptr,t);return Ht.__wrap(e)}coSetTranslation(t,e,n,r){d.rawcolliderset_coSetTranslation(this.__wbg_ptr,t,e,n,r)}coSetTranslationWrtParent(t,e,n,r){d.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr,t,e,n,r)}coSetRotation(t,e,n,r,s){d.rawcolliderset_coSetRotation(this.__wbg_ptr,t,e,n,r,s)}coSetRotationWrtParent(t,e,n,r,s){d.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr,t,e,n,r,s)}coIsSensor(t){return d.rawcolliderset_coIsSensor(this.__wbg_ptr,t)!==0}coShapeType(t){return d.rawcolliderset_coShapeType(this.__wbg_ptr,t)}coHalfspaceNormal(t){const e=d.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr,t);return e===0?void 0:I.__wrap(e)}coHalfExtents(t){const e=d.rawcolliderset_coHalfExtents(this.__wbg_ptr,t);return e===0?void 0:I.__wrap(e)}coSetHalfExtents(t,e){A(e,I),d.rawcolliderset_coSetHalfExtents(this.__wbg_ptr,t,e.__wbg_ptr)}coRadius(t){const e=d.rawcolliderset_coRadius(this.__wbg_ptr,t);return e===4294967297?void 0:e}coSetRadius(t,e){d.rawcolliderset_coSetRadius(this.__wbg_ptr,t,e)}coHalfHeight(t){const e=d.rawcolliderset_coHalfHeight(this.__wbg_ptr,t);return e===4294967297?void 0:e}coSetHalfHeight(t,e){d.rawcolliderset_coSetHalfHeight(this.__wbg_ptr,t,e)}coRoundRadius(t){const e=d.rawcolliderset_coRoundRadius(this.__wbg_ptr,t);return e===4294967297?void 0:e}coSetRoundRadius(t,e){d.rawcolliderset_coSetRoundRadius(this.__wbg_ptr,t,e)}coVertices(t){try{const r=d.__wbindgen_add_to_stack_pointer(-16);d.rawcolliderset_coVertices(r,this.__wbg_ptr,t);var e=Ne().getInt32(r+4*0,!0),n=Ne().getInt32(r+4*1,!0);let s;return e!==0&&(s=il(e,n).slice(),d.__wbindgen_export_1(e,n*4,4)),s}finally{d.__wbindgen_add_to_stack_pointer(16)}}coIndices(t){try{const r=d.__wbindgen_add_to_stack_pointer(-16);d.rawcolliderset_coIndices(r,this.__wbg_ptr,t);var e=Ne().getInt32(r+4*0,!0),n=Ne().getInt32(r+4*1,!0);let s;return e!==0&&(s=iw(e,n).slice(),d.__wbindgen_export_1(e,n*4,4)),s}finally{d.__wbindgen_add_to_stack_pointer(16)}}coTriMeshFlags(t){const e=d.rawcolliderset_coTriMeshFlags(this.__wbg_ptr,t);return e===4294967297?void 0:e}coHeightFieldFlags(t){const e=d.rawcolliderset_coHeightFieldFlags(this.__wbg_ptr,t);return e===4294967297?void 0:e}coHeightfieldHeights(t){try{const r=d.__wbindgen_add_to_stack_pointer(-16);d.rawcolliderset_coHeightfieldHeights(r,this.__wbg_ptr,t);var e=Ne().getInt32(r+4*0,!0),n=Ne().getInt32(r+4*1,!0);let s;return e!==0&&(s=il(e,n).slice(),d.__wbindgen_export_1(e,n*4,4)),s}finally{d.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldScale(t){const e=d.rawcolliderset_coHeightfieldScale(this.__wbg_ptr,t);return e===0?void 0:I.__wrap(e)}coHeightfieldNRows(t){const e=d.rawcolliderset_coHeightfieldNRows(this.__wbg_ptr,t);return e===4294967297?void 0:e}coHeightfieldNCols(t){const e=d.rawcolliderset_coHeightfieldNCols(this.__wbg_ptr,t);return e===4294967297?void 0:e}coParent(t){try{const r=d.__wbindgen_add_to_stack_pointer(-16);d.rawcolliderset_coParent(r,this.__wbg_ptr,t);var e=Ne().getInt32(r+4*0,!0),n=Ne().getFloat64(r+8*1,!0);return e===0?void 0:n}finally{d.__wbindgen_add_to_stack_pointer(16)}}coSetEnabled(t,e){d.rawcolliderset_coSetEnabled(this.__wbg_ptr,t,e)}coIsEnabled(t){return d.rawcolliderset_coIsEnabled(this.__wbg_ptr,t)!==0}coSetContactSkin(t,e){d.rawcolliderset_coSetContactSkin(this.__wbg_ptr,t,e)}coContactSkin(t){return d.rawcolliderset_coContactSkin(this.__wbg_ptr,t)}coFriction(t){return d.rawcolliderset_coFriction(this.__wbg_ptr,t)}coRestitution(t){return d.rawcolliderset_coRestitution(this.__wbg_ptr,t)}coDensity(t){return d.rawcolliderset_coDensity(this.__wbg_ptr,t)}coMass(t){return d.rawcolliderset_coMass(this.__wbg_ptr,t)}coVolume(t){return d.rawcolliderset_coVolume(this.__wbg_ptr,t)}coCollisionGroups(t){return d.rawcolliderset_coCollisionGroups(this.__wbg_ptr,t)>>>0}coSolverGroups(t){return d.rawcolliderset_coSolverGroups(this.__wbg_ptr,t)>>>0}coActiveHooks(t){return d.rawcolliderset_coActiveHooks(this.__wbg_ptr,t)>>>0}coActiveCollisionTypes(t){return d.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr,t)}coActiveEvents(t){return d.rawcolliderset_coActiveEvents(this.__wbg_ptr,t)>>>0}coContactForceEventThreshold(t){return d.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr,t)}coContainsPoint(t,e){return A(e,I),d.rawcolliderset_coContainsPoint(this.__wbg_ptr,t,e.__wbg_ptr)!==0}coCastShape(t,e,n,r,s,a,o,c,l){A(e,I),A(n,At),A(r,I),A(s,Ht),A(a,I);const h=d.rawcolliderset_coCastShape(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o,c,l);return h===0?void 0:Rs.__wrap(h)}coCastCollider(t,e,n,r,s,a,o){A(e,I),A(r,I);const c=d.rawcolliderset_coCastCollider(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s,a,o);return c===0?void 0:xs.__wrap(c)}coIntersectsShape(t,e,n,r){return A(e,At),A(n,I),A(r,Ht),d.rawcolliderset_coIntersectsShape(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr)!==0}coContactShape(t,e,n,r,s){A(e,At),A(n,I),A(r,Ht);const a=d.rawcolliderset_coContactShape(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s);return a===0?void 0:wr.__wrap(a)}coContactCollider(t,e,n){const r=d.rawcolliderset_coContactCollider(this.__wbg_ptr,t,e,n);return r===0?void 0:wr.__wrap(r)}coProjectPoint(t,e,n){A(e,I);const r=d.rawcolliderset_coProjectPoint(this.__wbg_ptr,t,e.__wbg_ptr,n);return Ms.__wrap(r)}coIntersectsRay(t,e,n,r){return A(e,I),A(n,I),d.rawcolliderset_coIntersectsRay(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)!==0}coCastRay(t,e,n,r,s){return A(e,I),A(n,I),d.rawcolliderset_coCastRay(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s)}coCastRayAndGetNormal(t,e,n,r,s){A(e,I),A(n,I);const a=d.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s);return a===0?void 0:Ts.__wrap(a)}coSetSensor(t,e){d.rawcolliderset_coSetSensor(this.__wbg_ptr,t,e)}coSetRestitution(t,e){d.rawcolliderset_coSetRestitution(this.__wbg_ptr,t,e)}coSetFriction(t,e){d.rawcolliderset_coSetFriction(this.__wbg_ptr,t,e)}coFrictionCombineRule(t){return d.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr,t)>>>0}coSetFrictionCombineRule(t,e){d.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr,t,e)}coRestitutionCombineRule(t){return d.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr,t)>>>0}coSetRestitutionCombineRule(t,e){d.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr,t,e)}coSetCollisionGroups(t,e){d.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr,t,e)}coSetSolverGroups(t,e){d.rawcolliderset_coSetSolverGroups(this.__wbg_ptr,t,e)}coSetActiveHooks(t,e){d.rawcolliderset_coSetActiveHooks(this.__wbg_ptr,t,e)}coSetActiveEvents(t,e){d.rawcolliderset_coSetActiveEvents(this.__wbg_ptr,t,e)}coSetActiveCollisionTypes(t,e){d.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr,t,e)}coSetShape(t,e){A(e,At),d.rawcolliderset_coSetShape(this.__wbg_ptr,t,e.__wbg_ptr)}coSetContactForceEventThreshold(t,e){d.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr,t,e)}coSetDensity(t,e){d.rawcolliderset_coSetDensity(this.__wbg_ptr,t,e)}coSetMass(t,e){d.rawcolliderset_coSetMass(this.__wbg_ptr,t,e)}coSetMassProperties(t,e,n,r,s){A(n,I),A(r,I),A(s,Ht),d.rawcolliderset_coSetMassProperties(this.__wbg_ptr,t,e,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)}constructor(){const t=d.rawcolliderset_new();return this.__wbg_ptr=t>>>0,ma.register(this,this.__wbg_ptr,this),this}len(){return d.rawcolliderset_len(this.__wbg_ptr)>>>0}contains(t){return d.rawcolliderset_contains(this.__wbg_ptr,t)!==0}createCollider(t,e,n,r,s,a,o,c,l,h,u,f,_,w,b,g,m,R,T,M,B,P,L,H,x){try{const q=d.__wbindgen_add_to_stack_pointer(-16);A(e,At),A(n,I),A(r,Ht),A(o,I),A(c,I),A(l,Ht),A(x,de),d.rawcolliderset_createCollider(q,this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a,o.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr,h,u,f,_,w,b,g,m,R,T,M,B,P,L,H,x.__wbg_ptr);var S=Ne().getInt32(q+4*0,!0),U=Ne().getFloat64(q+8*1,!0);return S===0?void 0:U}finally{d.__wbindgen_add_to_stack_pointer(16)}}remove(t,e,n,r){A(e,Fn),A(n,de),d.rawcolliderset_remove(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)}isHandleValid(t){return d.rawcolliderset_contains(this.__wbg_ptr,t)!==0}forEachColliderHandle(t){try{d.rawcolliderset_forEachColliderHandle(this.__wbg_ptr,pe(t))}finally{Yt[oe++]=void 0}}}const al=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawcollidershapecasthit_free(i>>>0,1));class xs{static __wrap(t){t=t>>>0;const e=Object.create(xs.prototype);return e.__wbg_ptr=t,al.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,al.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawcollidershapecasthit_free(t,0)}colliderHandle(){return d.rawcharactercollision_handle(this.__wbg_ptr)}time_of_impact(){return d.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}witness1(){const t=d.rawcollidershapecasthit_witness1(this.__wbg_ptr);return I.__wrap(t)}witness2(){const t=d.rawcollidershapecasthit_witness2(this.__wbg_ptr);return I.__wrap(t)}normal1(){const t=d.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return I.__wrap(t)}normal2(){const t=d.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);return I.__wrap(t)}}const ol=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawcontactforceevent_free(i>>>0,1));class zo{static __wrap(t){t=t>>>0;const e=Object.create(zo.prototype);return e.__wbg_ptr=t,ol.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ol.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawcontactforceevent_free(t,0)}collider1(){return d.rawcharactercollision_handle(this.__wbg_ptr)}collider2(){return d.rawcontactforceevent_collider2(this.__wbg_ptr)}total_force(){const t=d.rawcontactforceevent_total_force(this.__wbg_ptr);return I.__wrap(t)}total_force_magnitude(){return d.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr)}max_force_direction(){const t=d.rawcontactforceevent_max_force_direction(this.__wbg_ptr);return I.__wrap(t)}max_force_magnitude(){return d.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr)}}const cl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawcontactmanifold_free(i>>>0,1));class Bo{static __wrap(t){t=t>>>0;const e=Object.create(Bo.prototype);return e.__wbg_ptr=t,cl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,cl.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawcontactmanifold_free(t,0)}normal(){const t=d.rawcontactmanifold_normal(this.__wbg_ptr);return I.__wrap(t)}local_n1(){const t=d.rawcontactmanifold_local_n1(this.__wbg_ptr);return I.__wrap(t)}local_n2(){const t=d.rawcontactmanifold_local_n2(this.__wbg_ptr);return I.__wrap(t)}subshape1(){return d.rawcontactmanifold_subshape1(this.__wbg_ptr)>>>0}subshape2(){return d.rawcontactmanifold_subshape2(this.__wbg_ptr)>>>0}num_contacts(){return d.rawcontactmanifold_num_contacts(this.__wbg_ptr)>>>0}contact_local_p1(t){const e=d.rawcontactmanifold_contact_local_p1(this.__wbg_ptr,t);return e===0?void 0:I.__wrap(e)}contact_local_p2(t){const e=d.rawcontactmanifold_contact_local_p2(this.__wbg_ptr,t);return e===0?void 0:I.__wrap(e)}contact_dist(t){return d.rawcontactmanifold_contact_dist(this.__wbg_ptr,t)}contact_fid1(t){return d.rawcontactmanifold_contact_fid1(this.__wbg_ptr,t)>>>0}contact_fid2(t){return d.rawcontactmanifold_contact_fid2(this.__wbg_ptr,t)>>>0}contact_impulse(t){return d.rawcontactmanifold_contact_impulse(this.__wbg_ptr,t)}contact_tangent_impulse_x(t){return d.rawcontactmanifold_contact_tangent_impulse_x(this.__wbg_ptr,t)}contact_tangent_impulse_y(t){return d.rawcontactmanifold_contact_tangent_impulse_y(this.__wbg_ptr,t)}num_solver_contacts(){return d.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr)>>>0}solver_contact_point(t){const e=d.rawcontactmanifold_solver_contact_point(this.__wbg_ptr,t);return e===0?void 0:I.__wrap(e)}solver_contact_dist(t){return d.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr,t)}solver_contact_friction(t){return d.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr,t)}solver_contact_restitution(t){return d.rawcontactmanifold_solver_contact_restitution(this.__wbg_ptr,t)}solver_contact_tangent_velocity(t){const e=d.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr,t);return I.__wrap(e)}}const ll=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawcontactpair_free(i>>>0,1));class Ho{static __wrap(t){t=t>>>0;const e=Object.create(Ho.prototype);return e.__wbg_ptr=t,ll.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ll.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawcontactpair_free(t,0)}collider1(){return d.rawcontactpair_collider1(this.__wbg_ptr)}collider2(){return d.rawcontactpair_collider2(this.__wbg_ptr)}numContactManifolds(){return d.rawcontactpair_numContactManifolds(this.__wbg_ptr)>>>0}contactManifold(t){const e=d.rawcontactpair_contactManifold(this.__wbg_ptr,t);return e===0?void 0:Bo.__wrap(e)}}const hl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawdebugrenderpipeline_free(i>>>0,1));class rw{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,hl.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawdebugrenderpipeline_free(t,0)}constructor(){const t=d.rawdebugrenderpipeline_new();return this.__wbg_ptr=t>>>0,hl.register(this,this.__wbg_ptr,this),this}vertices(){const t=d.rawdebugrenderpipeline_vertices(this.__wbg_ptr);return gr(t)}colors(){const t=d.rawdebugrenderpipeline_colors(this.__wbg_ptr);return gr(t)}render(t,e,n,r,s){A(t,de),A(e,me),A(n,Un),A(r,Nn),A(s,Kn),d.rawdebugrenderpipeline_render(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)}}const dl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawdeserializedworld_free(i>>>0,1));class ko{static __wrap(t){t=t>>>0;const e=Object.create(ko.prototype);return e.__wbg_ptr=t,dl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,dl.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawdeserializedworld_free(t,0)}takeGravity(){const t=d.rawdeserializedworld_takeGravity(this.__wbg_ptr);return t===0?void 0:I.__wrap(t)}takeIntegrationParameters(){const t=d.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);return t===0?void 0:gi.__wrap(t)}takeIslandManager(){const t=d.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);return t===0?void 0:Fn.__wrap(t)}takeBroadPhase(){const t=d.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);return t===0?void 0:mi.__wrap(t)}takeNarrowPhase(){const t=d.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);return t===0?void 0:Kn.__wrap(t)}takeBodies(){const t=d.rawdeserializedworld_takeBodies(this.__wbg_ptr);return t===0?void 0:de.__wrap(t)}takeColliders(){const t=d.rawdeserializedworld_takeColliders(this.__wbg_ptr);return t===0?void 0:me.__wrap(t)}takeImpulseJoints(){const t=d.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);return t===0?void 0:Un.__wrap(t)}takeMultibodyJoints(){const t=d.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);return t===0?void 0:Nn.__wrap(t)}}const ul=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawdynamicraycastvehiclecontroller_free(i>>>0,1));class sw{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ul.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawdynamicraycastvehiclecontroller_free(t,0)}constructor(t){const e=d.rawdynamicraycastvehiclecontroller_new(t);return this.__wbg_ptr=e>>>0,ul.register(this,this.__wbg_ptr,this),this}current_vehicle_speed(){return d.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr)}chassis(){return d.rawdynamicraycastvehiclecontroller_chassis(this.__wbg_ptr)}index_up_axis(){return d.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr)>>>0}set_index_up_axis(t){d.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr,t)}index_forward_axis(){return d.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr)>>>0}set_index_forward_axis(t){d.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr,t)}add_wheel(t,e,n,r,s){A(t,I),A(e,I),A(n,I),d.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r,s)}num_wheels(){return d.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr)>>>0}update_vehicle(t,e,n,r,s,a,o){try{A(e,de),A(n,me),A(r,Go),d.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,Ct(a)?4294967297:a>>>0,pe(o))}finally{Yt[oe++]=void 0}}wheel_chassis_connection_point_cs(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(this.__wbg_ptr,t);return e===0?void 0:I.__wrap(e)}set_wheel_chassis_connection_point_cs(t,e){A(e,I),d.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(this.__wbg_ptr,t,e.__wbg_ptr)}wheel_suspension_rest_length(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_suspension_rest_length(t,e){d.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length(this.__wbg_ptr,t,e)}wheel_max_suspension_travel(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_max_suspension_travel(t,e){d.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel(this.__wbg_ptr,t,e)}wheel_radius(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_radius(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_radius(t,e){d.rawdynamicraycastvehiclecontroller_set_wheel_radius(this.__wbg_ptr,t,e)}wheel_suspension_stiffness(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_suspension_stiffness(t,e){d.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness(this.__wbg_ptr,t,e)}wheel_suspension_compression(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_suspension_compression(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_suspension_compression(t,e){d.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression(this.__wbg_ptr,t,e)}wheel_suspension_relaxation(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_suspension_relaxation(t,e){d.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation(this.__wbg_ptr,t,e)}wheel_max_suspension_force(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_max_suspension_force(t,e){d.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force(this.__wbg_ptr,t,e)}wheel_brake(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_brake(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_brake(t,e){d.rawdynamicraycastvehiclecontroller_set_wheel_brake(this.__wbg_ptr,t,e)}wheel_steering(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_steering(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_steering(t,e){d.rawdynamicraycastvehiclecontroller_set_wheel_steering(this.__wbg_ptr,t,e)}wheel_engine_force(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_engine_force(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_engine_force(t,e){d.rawdynamicraycastvehiclecontroller_set_wheel_engine_force(this.__wbg_ptr,t,e)}wheel_direction_cs(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_direction_cs(this.__wbg_ptr,t);return e===0?void 0:I.__wrap(e)}set_wheel_direction_cs(t,e){A(e,I),d.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(this.__wbg_ptr,t,e.__wbg_ptr)}wheel_axle_cs(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_axle_cs(this.__wbg_ptr,t);return e===0?void 0:I.__wrap(e)}set_wheel_axle_cs(t,e){A(e,I),d.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(this.__wbg_ptr,t,e.__wbg_ptr)}wheel_friction_slip(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_friction_slip(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_friction_slip(t,e){d.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip(this.__wbg_ptr,t,e)}wheel_side_friction_stiffness(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness(this.__wbg_ptr,t);return e===4294967297?void 0:e}set_wheel_side_friction_stiffness(t,e){d.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness(this.__wbg_ptr,t,e)}wheel_rotation(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_rotation(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_forward_impulse(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_forward_impulse(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_side_impulse(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_side_impulse(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_suspension_force(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_suspension_force(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_contact_normal_ws(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws(this.__wbg_ptr,t);return e===0?void 0:I.__wrap(e)}wheel_contact_point_ws(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(this.__wbg_ptr,t);return e===0?void 0:I.__wrap(e)}wheel_suspension_length(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_suspension_length(this.__wbg_ptr,t);return e===4294967297?void 0:e}wheel_hard_point_ws(t){const e=d.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(this.__wbg_ptr,t);return e===0?void 0:I.__wrap(e)}wheel_is_in_contact(t){return d.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(this.__wbg_ptr,t)!==0}wheel_ground_object(t){try{const r=d.__wbindgen_add_to_stack_pointer(-16);d.rawdynamicraycastvehiclecontroller_wheel_ground_object(r,this.__wbg_ptr,t);var e=Ne().getInt32(r+4*0,!0),n=Ne().getFloat64(r+8*1,!0);return e===0?void 0:n}finally{d.__wbindgen_add_to_stack_pointer(16)}}}const fl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_raweventqueue_free(i>>>0,1));class Ch{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,fl.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_raweventqueue_free(t,0)}constructor(t){const e=d.raweventqueue_new(t);return this.__wbg_ptr=e>>>0,fl.register(this,this.__wbg_ptr,this),this}drainCollisionEvents(t){try{d.raweventqueue_drainCollisionEvents(this.__wbg_ptr,pe(t))}finally{Yt[oe++]=void 0}}drainContactForceEvents(t){try{d.raweventqueue_drainContactForceEvents(this.__wbg_ptr,pe(t))}finally{Yt[oe++]=void 0}}clear(){d.raweventqueue_clear(this.__wbg_ptr)}}const pl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawgenericjoint_free(i>>>0,1));class cn{static __wrap(t){t=t>>>0;const e=Object.create(cn.prototype);return e.__wbg_ptr=t,pl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,pl.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawgenericjoint_free(t,0)}static generic(t,e,n,r){A(t,I),A(e,I),A(n,I);const s=d.rawgenericjoint_generic(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r);return s===0?void 0:cn.__wrap(s)}static spring(t,e,n,r,s){A(r,I),A(s,I);const a=d.rawgenericjoint_spring(t,e,n,r.__wbg_ptr,s.__wbg_ptr);return cn.__wrap(a)}static rope(t,e,n){A(e,I),A(n,I);const r=d.rawgenericjoint_rope(t,e.__wbg_ptr,n.__wbg_ptr);return cn.__wrap(r)}static spherical(t,e){A(t,I),A(e,I);const n=d.rawgenericjoint_spherical(t.__wbg_ptr,e.__wbg_ptr);return cn.__wrap(n)}static prismatic(t,e,n,r,s,a){A(t,I),A(e,I),A(n,I);const o=d.rawgenericjoint_prismatic(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r,s,a);return o===0?void 0:cn.__wrap(o)}static fixed(t,e,n,r){A(t,I),A(e,Ht),A(n,I),A(r,Ht);const s=d.rawgenericjoint_fixed(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr);return cn.__wrap(s)}static revolute(t,e,n){A(t,I),A(e,I),A(n,I);const r=d.rawgenericjoint_revolute(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr);return r===0?void 0:cn.__wrap(r)}}const ga=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawimpulsejointset_free(i>>>0,1));class Un{static __wrap(t){t=t>>>0;const e=Object.create(Un.prototype);return e.__wbg_ptr=t,ga.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ga.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawimpulsejointset_free(t,0)}jointType(t){return d.rawimpulsejointset_jointType(this.__wbg_ptr,t)}jointBodyHandle1(t){return d.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr,t)}jointBodyHandle2(t){return d.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr,t)}jointFrameX1(t){const e=d.rawimpulsejointset_jointFrameX1(this.__wbg_ptr,t);return Ht.__wrap(e)}jointFrameX2(t){const e=d.rawimpulsejointset_jointFrameX2(this.__wbg_ptr,t);return Ht.__wrap(e)}jointAnchor1(t){const e=d.rawimpulsejointset_jointAnchor1(this.__wbg_ptr,t);return I.__wrap(e)}jointAnchor2(t){const e=d.rawimpulsejointset_jointAnchor2(this.__wbg_ptr,t);return I.__wrap(e)}jointSetAnchor1(t,e){A(e,I),d.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr,t,e.__wbg_ptr)}jointSetAnchor2(t,e){A(e,I),d.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr,t,e.__wbg_ptr)}jointContactsEnabled(t){return d.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr,t)!==0}jointSetContactsEnabled(t,e){d.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr,t,e)}jointLimitsEnabled(t,e){return d.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr,t,e)!==0}jointLimitsMin(t,e){return d.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr,t,e)}jointLimitsMax(t,e){return d.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr,t,e)}jointSetLimits(t,e,n,r){d.rawimpulsejointset_jointSetLimits(this.__wbg_ptr,t,e,n,r)}jointConfigureMotorModel(t,e,n){d.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr,t,e,n)}jointConfigureMotorVelocity(t,e,n,r){d.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr,t,e,n,r)}jointConfigureMotorPosition(t,e,n,r,s){d.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr,t,e,n,r,s)}jointConfigureMotor(t,e,n,r,s,a){d.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr,t,e,n,r,s,a)}constructor(){const t=d.rawimpulsejointset_new();return this.__wbg_ptr=t>>>0,ga.register(this,this.__wbg_ptr,this),this}createJoint(t,e,n,r){return A(t,cn),d.rawimpulsejointset_createJoint(this.__wbg_ptr,t.__wbg_ptr,e,n,r)}remove(t,e){d.rawimpulsejointset_remove(this.__wbg_ptr,t,e)}len(){return d.rawimpulsejointset_len(this.__wbg_ptr)>>>0}contains(t){return d.rawimpulsejointset_contains(this.__wbg_ptr,t)!==0}forEachJointHandle(t){try{d.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr,pe(t))}finally{Yt[oe++]=void 0}}forEachJointAttachedToRigidBody(t,e){try{d.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,t,pe(e))}finally{Yt[oe++]=void 0}}}const wa=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawintegrationparameters_free(i>>>0,1));class gi{static __wrap(t){t=t>>>0;const e=Object.create(gi.prototype);return e.__wbg_ptr=t,wa.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,wa.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawintegrationparameters_free(t,0)}constructor(){const t=d.rawintegrationparameters_new();return this.__wbg_ptr=t>>>0,wa.register(this,this.__wbg_ptr,this),this}get dt(){return d.rawintegrationparameters_dt(this.__wbg_ptr)}get contact_erp(){return d.rawintegrationparameters_contact_erp(this.__wbg_ptr)}get normalizedAllowedLinearError(){return d.rawintegrationparameters_normalizedAllowedLinearError(this.__wbg_ptr)}get normalizedPredictionDistance(){return d.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr)}get numSolverIterations(){return d.rawintegrationparameters_numSolverIterations(this.__wbg_ptr)>>>0}get numAdditionalFrictionIterations(){return d.rawintegrationparameters_numAdditionalFrictionIterations(this.__wbg_ptr)>>>0}get numInternalPgsIterations(){return d.rawintegrationparameters_numInternalPgsIterations(this.__wbg_ptr)>>>0}get minIslandSize(){return d.rawimpulsejointset_len(this.__wbg_ptr)>>>0}get maxCcdSubsteps(){return d.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr)>>>0}get lengthUnit(){return d.rawintegrationparameters_lengthUnit(this.__wbg_ptr)}set dt(t){d.rawintegrationparameters_set_dt(this.__wbg_ptr,t)}set contact_natural_frequency(t){d.rawintegrationparameters_set_contact_natural_frequency(this.__wbg_ptr,t)}set normalizedAllowedLinearError(t){d.rawintegrationparameters_set_normalizedAllowedLinearError(this.__wbg_ptr,t)}set normalizedPredictionDistance(t){d.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr,t)}set numSolverIterations(t){d.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr,t)}set numAdditionalFrictionIterations(t){d.rawintegrationparameters_set_numAdditionalFrictionIterations(this.__wbg_ptr,t)}set numInternalPgsIterations(t){d.rawintegrationparameters_set_numInternalPgsIterations(this.__wbg_ptr,t)}set minIslandSize(t){d.rawintegrationparameters_set_minIslandSize(this.__wbg_ptr,t)}set maxCcdSubsteps(t){d.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr,t)}set lengthUnit(t){d.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr,t)}switchToStandardPgsSolver(){d.rawintegrationparameters_switchToStandardPgsSolver(this.__wbg_ptr)}switchToSmallStepsPgsSolver(){d.rawintegrationparameters_switchToSmallStepsPgsSolver(this.__wbg_ptr)}switchToSmallStepsPgsSolverWithoutWarmstart(){d.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart(this.__wbg_ptr)}}const va=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawislandmanager_free(i>>>0,1));class Fn{static __wrap(t){t=t>>>0;const e=Object.create(Fn.prototype);return e.__wbg_ptr=t,va.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,va.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawislandmanager_free(t,0)}constructor(){const t=d.rawislandmanager_new();return this.__wbg_ptr=t>>>0,va.register(this,this.__wbg_ptr,this),this}forEachActiveRigidBodyHandle(t){try{d.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr,pe(t))}finally{Yt[oe++]=void 0}}}const _l=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawkinematiccharactercontroller_free(i>>>0,1));class aw{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,_l.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawkinematiccharactercontroller_free(t,0)}constructor(t){const e=d.rawkinematiccharactercontroller_new(t);return this.__wbg_ptr=e>>>0,_l.register(this,this.__wbg_ptr,this),this}up(){const t=d.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return I.__wrap(t)}setUp(t){A(t,I),d.rawkinematiccharactercontroller_setUp(this.__wbg_ptr,t.__wbg_ptr)}normalNudgeFactor(){return d.rawkinematiccharactercontroller_normalNudgeFactor(this.__wbg_ptr)}setNormalNudgeFactor(t){d.rawkinematiccharactercontroller_setNormalNudgeFactor(this.__wbg_ptr,t)}offset(){return d.rawintegrationparameters_dt(this.__wbg_ptr)}setOffset(t){d.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr,t)}slideEnabled(){return d.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr)!==0}setSlideEnabled(t){d.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr,t)}autostepMaxHeight(){const t=d.rawkinematiccharactercontroller_autostepMaxHeight(this.__wbg_ptr);return t===4294967297?void 0:t}autostepMinWidth(){const t=d.rawkinematiccharactercontroller_autostepMinWidth(this.__wbg_ptr);return t===4294967297?void 0:t}autostepIncludesDynamicBodies(){const t=d.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);return t===16777215?void 0:t!==0}autostepEnabled(){return d.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr)!==0}enableAutostep(t,e,n){d.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr,t,e,n)}disableAutostep(){d.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr)}maxSlopeClimbAngle(){return d.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}setMaxSlopeClimbAngle(t){d.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.__wbg_ptr,t)}minSlopeSlideAngle(){return d.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr)}setMinSlopeSlideAngle(t){d.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr,t)}snapToGroundDistance(){const t=d.rawkinematiccharactercontroller_snapToGroundDistance(this.__wbg_ptr);return t===4294967297?void 0:t}enableSnapToGround(t){d.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr,t)}disableSnapToGround(){d.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr)}snapToGroundEnabled(){return d.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr)!==0}computeColliderMovement(t,e,n,r,s,a,o,c,l,h,u){try{A(e,de),A(n,me),A(r,Go),A(a,I),d.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a.__wbg_ptr,o,Ct(c)?4294967297:Math.fround(c),l,Ct(h)?4294967297:h>>>0,pe(u))}finally{Yt[oe++]=void 0}}computedMovement(){const t=d.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);return I.__wrap(t)}computedGrounded(){return d.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr)!==0}numComputedCollisions(){return d.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr)>>>0}computedCollision(t,e){return A(e,Ah),d.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr,t,e.__wbg_ptr)!==0}}const ba=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawmultibodyjointset_free(i>>>0,1));class Nn{static __wrap(t){t=t>>>0;const e=Object.create(Nn.prototype);return e.__wbg_ptr=t,ba.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ba.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawmultibodyjointset_free(t,0)}jointType(t){return d.rawmultibodyjointset_jointType(this.__wbg_ptr,t)}jointFrameX1(t){const e=d.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr,t);return Ht.__wrap(e)}jointFrameX2(t){const e=d.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr,t);return Ht.__wrap(e)}jointAnchor1(t){const e=d.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr,t);return I.__wrap(e)}jointAnchor2(t){const e=d.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr,t);return I.__wrap(e)}jointContactsEnabled(t){return d.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr,t)!==0}jointSetContactsEnabled(t,e){d.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr,t,e)}jointLimitsEnabled(t,e){return d.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr,t,e)!==0}jointLimitsMin(t,e){return d.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr,t,e)}jointLimitsMax(t,e){return d.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr,t,e)}constructor(){const t=d.rawmultibodyjointset_new();return this.__wbg_ptr=t>>>0,ba.register(this,this.__wbg_ptr,this),this}createJoint(t,e,n,r){return A(t,cn),d.rawmultibodyjointset_createJoint(this.__wbg_ptr,t.__wbg_ptr,e,n,r)}remove(t,e){d.rawmultibodyjointset_remove(this.__wbg_ptr,t,e)}contains(t){return d.rawmultibodyjointset_contains(this.__wbg_ptr,t)!==0}forEachJointHandle(t){try{d.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr,pe(t))}finally{Yt[oe++]=void 0}}forEachJointAttachedToRigidBody(t,e){try{d.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,t,pe(e))}finally{Yt[oe++]=void 0}}}const ya=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawnarrowphase_free(i>>>0,1));class Kn{static __wrap(t){t=t>>>0;const e=Object.create(Kn.prototype);return e.__wbg_ptr=t,ya.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ya.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawnarrowphase_free(t,0)}constructor(){const t=d.rawnarrowphase_new();return this.__wbg_ptr=t>>>0,ya.register(this,this.__wbg_ptr,this),this}contact_pairs_with(t,e){d.rawnarrowphase_contact_pairs_with(this.__wbg_ptr,t,Me(e))}contact_pair(t,e){const n=d.rawnarrowphase_contact_pair(this.__wbg_ptr,t,e);return n===0?void 0:Ho.__wrap(n)}intersection_pairs_with(t,e){d.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr,t,Me(e))}intersection_pair(t,e){return d.rawnarrowphase_intersection_pair(this.__wbg_ptr,t,e)!==0}}const ml=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawphysicspipeline_free(i>>>0,1));class ow{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ml.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawphysicspipeline_free(t,0)}constructor(){const t=d.rawphysicspipeline_new();return this.__wbg_ptr=t>>>0,ml.register(this,this.__wbg_ptr,this),this}step(t,e,n,r,s,a,o,c,l,h){A(t,I),A(e,gi),A(n,Fn),A(r,mi),A(s,Kn),A(a,de),A(o,me),A(c,Un),A(l,Nn),A(h,po),d.rawphysicspipeline_step(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr,h.__wbg_ptr)}stepWithEvents(t,e,n,r,s,a,o,c,l,h,u,f,_,w){A(t,I),A(e,gi),A(n,Fn),A(r,mi),A(s,Kn),A(a,de),A(o,me),A(c,Un),A(l,Nn),A(h,po),A(u,Ch),d.rawphysicspipeline_stepWithEvents(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr,h.__wbg_ptr,u.__wbg_ptr,Me(f),Me(_),Me(w))}}const gl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawpidcontroller_free(i>>>0,1));class cw{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,gl.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawpidcontroller_free(t,0)}constructor(t,e,n,r){const s=d.rawpidcontroller_new(t,e,n,r);return this.__wbg_ptr=s>>>0,gl.register(this,this.__wbg_ptr,this),this}set_kp(t,e){d.rawpidcontroller_set_kp(this.__wbg_ptr,t,e)}set_ki(t,e){d.rawpidcontroller_set_ki(this.__wbg_ptr,t,e)}set_kd(t,e){d.rawpidcontroller_set_kd(this.__wbg_ptr,t,e)}set_axes_mask(t){d.rawpidcontroller_set_axes_mask(this.__wbg_ptr,t)}reset_integrals(){d.rawpidcontroller_reset_integrals(this.__wbg_ptr)}apply_linear_correction(t,e,n,r,s){A(e,de),A(r,I),A(s,I),d.rawpidcontroller_apply_linear_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr)}apply_angular_correction(t,e,n,r,s){A(e,de),A(r,Ht),A(s,I),d.rawpidcontroller_apply_angular_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr)}linear_correction(t,e,n,r,s){A(e,de),A(r,I),A(s,I);const a=d.rawpidcontroller_linear_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr);return I.__wrap(a)}angular_correction(t,e,n,r,s){A(e,de),A(r,Ht),A(s,I);const a=d.rawpidcontroller_angular_correction(this.__wbg_ptr,t,e.__wbg_ptr,n,r.__wbg_ptr,s.__wbg_ptr);return I.__wrap(a)}}const wl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawpointcolliderprojection_free(i>>>0,1));class us{static __wrap(t){t=t>>>0;const e=Object.create(us.prototype);return e.__wbg_ptr=t,wl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,wl.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawpointcolliderprojection_free(t,0)}colliderHandle(){return d.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}point(){const t=d.rawpointcolliderprojection_point(this.__wbg_ptr);return I.__wrap(t)}isInside(){return d.rawpointcolliderprojection_isInside(this.__wbg_ptr)!==0}featureType(){return d.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){const t=d.rawpointcolliderprojection_featureId(this.__wbg_ptr);return t===4294967297?void 0:t}}const vl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawpointprojection_free(i>>>0,1));class Ms{static __wrap(t){t=t>>>0;const e=Object.create(Ms.prototype);return e.__wbg_ptr=t,vl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,vl.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawpointprojection_free(t,0)}point(){const t=d.rawpointprojection_point(this.__wbg_ptr);return I.__wrap(t)}isInside(){return d.rawpointprojection_isInside(this.__wbg_ptr)!==0}}const bl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawquerypipeline_free(i>>>0,1));class Go{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,bl.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawquerypipeline_free(t,0)}constructor(){const t=d.rawquerypipeline_new();return this.__wbg_ptr=t>>>0,bl.register(this,this.__wbg_ptr,this),this}update(t){A(t,me),d.rawquerypipeline_update(this.__wbg_ptr,t.__wbg_ptr)}castRay(t,e,n,r,s,a,o,c,l,h,u){try{A(t,de),A(e,me),A(n,I),A(r,I);const f=d.rawquerypipeline_castRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a,o,Ct(c)?4294967297:c>>>0,!Ct(l),Ct(l)?0:l,!Ct(h),Ct(h)?0:h,pe(u));return f===0?void 0:Vo.__wrap(f)}finally{Yt[oe++]=void 0}}castRayAndGetNormal(t,e,n,r,s,a,o,c,l,h,u){try{A(t,de),A(e,me),A(n,I),A(r,I);const f=d.rawquerypipeline_castRayAndGetNormal(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a,o,Ct(c)?4294967297:c>>>0,!Ct(l),Ct(l)?0:l,!Ct(h),Ct(h)?0:h,pe(u));return f===0?void 0:Es.__wrap(f)}finally{Yt[oe++]=void 0}}intersectionsWithRay(t,e,n,r,s,a,o,c,l,h,u,f){try{A(t,de),A(e,me),A(n,I),A(r,I),d.rawquerypipeline_intersectionsWithRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a,pe(o),c,Ct(l)?4294967297:l>>>0,!Ct(h),Ct(h)?0:h,!Ct(u),Ct(u)?0:u,pe(f))}finally{Yt[oe++]=void 0,Yt[oe++]=void 0}}intersectionWithShape(t,e,n,r,s,a,o,c,l,h){try{const _=d.__wbindgen_add_to_stack_pointer(-16);A(t,de),A(e,me),A(n,I),A(r,Ht),A(s,At),d.rawquerypipeline_intersectionWithShape(_,this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,Ct(o)?4294967297:o>>>0,!Ct(c),Ct(c)?0:c,!Ct(l),Ct(l)?0:l,pe(h));var u=Ne().getInt32(_+4*0,!0),f=Ne().getFloat64(_+8*1,!0);return u===0?void 0:f}finally{d.__wbindgen_add_to_stack_pointer(16),Yt[oe++]=void 0}}projectPoint(t,e,n,r,s,a,o,c,l){try{A(t,de),A(e,me),A(n,I);const h=d.rawquerypipeline_projectPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r,s,Ct(a)?4294967297:a>>>0,!Ct(o),Ct(o)?0:o,!Ct(c),Ct(c)?0:c,pe(l));return h===0?void 0:us.__wrap(h)}finally{Yt[oe++]=void 0}}projectPointAndGetFeature(t,e,n,r,s,a,o,c){try{A(t,de),A(e,me),A(n,I);const l=d.rawquerypipeline_projectPointAndGetFeature(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r,Ct(s)?4294967297:s>>>0,!Ct(a),Ct(a)?0:a,!Ct(o),Ct(o)?0:o,pe(c));return l===0?void 0:us.__wrap(l)}finally{Yt[oe++]=void 0}}intersectionsWithPoint(t,e,n,r,s,a,o,c,l){try{A(t,de),A(e,me),A(n,I),d.rawquerypipeline_intersectionsWithPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,pe(r),s,Ct(a)?4294967297:a>>>0,!Ct(o),Ct(o)?0:o,!Ct(c),Ct(c)?0:c,pe(l))}finally{Yt[oe++]=void 0,Yt[oe++]=void 0}}castShape(t,e,n,r,s,a,o,c,l,h,u,f,_,w){try{A(t,de),A(e,me),A(n,I),A(r,Ht),A(s,I),A(a,At);const b=d.rawquerypipeline_castShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o,c,l,h,Ct(u)?4294967297:u>>>0,!Ct(f),Ct(f)?0:f,!Ct(_),Ct(_)?0:_,pe(w));return b===0?void 0:xs.__wrap(b)}finally{Yt[oe++]=void 0}}intersectionsWithShape(t,e,n,r,s,a,o,c,l,h,u){try{A(t,de),A(e,me),A(n,I),A(r,Ht),A(s,At),d.rawquerypipeline_intersectionsWithShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,pe(a),o,Ct(c)?4294967297:c>>>0,!Ct(l),Ct(l)?0:l,!Ct(h),Ct(h)?0:h,pe(u))}finally{Yt[oe++]=void 0,Yt[oe++]=void 0}}collidersWithAabbIntersectingAabb(t,e,n){try{A(t,I),A(e,I),d.rawquerypipeline_collidersWithAabbIntersectingAabb(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,pe(n))}finally{Yt[oe++]=void 0}}}const yl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawraycolliderhit_free(i>>>0,1));class Vo{static __wrap(t){t=t>>>0;const e=Object.create(Vo.prototype);return e.__wbg_ptr=t,yl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,yl.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawraycolliderhit_free(t,0)}colliderHandle(){return d.rawcharactercollision_handle(this.__wbg_ptr)}timeOfImpact(){return d.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}}const Sl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawraycolliderintersection_free(i>>>0,1));class Es{static __wrap(t){t=t>>>0;const e=Object.create(Es.prototype);return e.__wbg_ptr=t,Sl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Sl.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawraycolliderintersection_free(t,0)}colliderHandle(){return d.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}normal(){const t=d.rawcollidershapecasthit_witness1(this.__wbg_ptr);return I.__wrap(t)}time_of_impact(){return d.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}featureType(){return d.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){const t=d.rawpointcolliderprojection_featureId(this.__wbg_ptr);return t===4294967297?void 0:t}}const xl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawrayintersection_free(i>>>0,1));class Ts{static __wrap(t){t=t>>>0;const e=Object.create(Ts.prototype);return e.__wbg_ptr=t,xl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,xl.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawrayintersection_free(t,0)}normal(){const t=d.rawcollidershapecasthit_witness1(this.__wbg_ptr);return I.__wrap(t)}time_of_impact(){return d.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}featureType(){return d.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){const t=d.rawpointcolliderprojection_featureId(this.__wbg_ptr);return t===4294967297?void 0:t}}const Sa=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawrigidbodyset_free(i>>>0,1));class de{static __wrap(t){t=t>>>0;const e=Object.create(de.prototype);return e.__wbg_ptr=t,Sa.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Sa.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawrigidbodyset_free(t,0)}rbTranslation(t){const e=d.rawrigidbodyset_rbTranslation(this.__wbg_ptr,t);return I.__wrap(e)}rbRotation(t){const e=d.rawrigidbodyset_rbRotation(this.__wbg_ptr,t);return Ht.__wrap(e)}rbSleep(t){d.rawrigidbodyset_rbSleep(this.__wbg_ptr,t)}rbIsSleeping(t){return d.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr,t)!==0}rbIsMoving(t){return d.rawrigidbodyset_rbIsMoving(this.__wbg_ptr,t)!==0}rbNextTranslation(t){const e=d.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr,t);return I.__wrap(e)}rbNextRotation(t){const e=d.rawrigidbodyset_rbNextRotation(this.__wbg_ptr,t);return Ht.__wrap(e)}rbSetTranslation(t,e,n,r,s){d.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr,t,e,n,r,s)}rbSetRotation(t,e,n,r,s,a){d.rawrigidbodyset_rbSetRotation(this.__wbg_ptr,t,e,n,r,s,a)}rbSetLinvel(t,e,n){A(e,I),d.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbSetAngvel(t,e,n){A(e,I),d.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbSetNextKinematicTranslation(t,e,n,r){d.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr,t,e,n,r)}rbSetNextKinematicRotation(t,e,n,r,s){d.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr,t,e,n,r,s)}rbRecomputeMassPropertiesFromColliders(t,e){A(e,me),d.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr,t,e.__wbg_ptr)}rbSetAdditionalMass(t,e,n){d.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr,t,e,n)}rbSetAdditionalMassProperties(t,e,n,r,s,a){A(n,I),A(r,I),A(s,Ht),d.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr,t,e,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a)}rbLinvel(t){const e=d.rawrigidbodyset_rbLinvel(this.__wbg_ptr,t);return I.__wrap(e)}rbAngvel(t){const e=d.rawrigidbodyset_rbAngvel(this.__wbg_ptr,t);return I.__wrap(e)}rbLockTranslations(t,e,n){d.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr,t,e,n)}rbSetEnabledTranslations(t,e,n,r,s){d.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr,t,e,n,r,s)}rbLockRotations(t,e,n){d.rawrigidbodyset_rbLockRotations(this.__wbg_ptr,t,e,n)}rbSetEnabledRotations(t,e,n,r,s){d.rawrigidbodyset_rbSetEnabledRotations(this.__wbg_ptr,t,e,n,r,s)}rbDominanceGroup(t){return d.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr,t)}rbSetDominanceGroup(t,e){d.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr,t,e)}rbEnableCcd(t,e){d.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr,t,e)}rbSetSoftCcdPrediction(t,e){d.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr,t,e)}rbMass(t){return d.rawrigidbodyset_rbMass(this.__wbg_ptr,t)}rbInvMass(t){return d.rawrigidbodyset_rbInvMass(this.__wbg_ptr,t)}rbEffectiveInvMass(t){const e=d.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr,t);return I.__wrap(e)}rbLocalCom(t){const e=d.rawrigidbodyset_rbLocalCom(this.__wbg_ptr,t);return I.__wrap(e)}rbWorldCom(t){const e=d.rawrigidbodyset_rbWorldCom(this.__wbg_ptr,t);return I.__wrap(e)}rbInvPrincipalInertiaSqrt(t){const e=d.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.__wbg_ptr,t);return I.__wrap(e)}rbPrincipalInertiaLocalFrame(t){const e=d.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.__wbg_ptr,t);return Ht.__wrap(e)}rbPrincipalInertia(t){const e=d.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr,t);return I.__wrap(e)}rbEffectiveWorldInvInertiaSqrt(t){const e=d.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.__wbg_ptr,t);return fs.__wrap(e)}rbEffectiveAngularInertia(t){const e=d.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr,t);return fs.__wrap(e)}rbWakeUp(t){d.rawrigidbodyset_rbWakeUp(this.__wbg_ptr,t)}rbIsCcdEnabled(t){return d.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr,t)!==0}rbSoftCcdPrediction(t){return d.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr,t)}rbNumColliders(t){return d.rawrigidbodyset_rbNumColliders(this.__wbg_ptr,t)>>>0}rbCollider(t,e){return d.rawrigidbodyset_rbCollider(this.__wbg_ptr,t,e)}rbBodyType(t){return d.rawrigidbodyset_rbBodyType(this.__wbg_ptr,t)}rbSetBodyType(t,e,n){d.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr,t,e,n)}rbIsFixed(t){return d.rawrigidbodyset_rbIsFixed(this.__wbg_ptr,t)!==0}rbIsKinematic(t){return d.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr,t)!==0}rbIsDynamic(t){return d.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr,t)!==0}rbLinearDamping(t){return d.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr,t)}rbAngularDamping(t){return d.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr,t)}rbSetLinearDamping(t,e){d.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr,t,e)}rbSetAngularDamping(t,e){d.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr,t,e)}rbSetEnabled(t,e){d.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr,t,e)}rbIsEnabled(t){return d.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr,t)!==0}rbGravityScale(t){return d.rawrigidbodyset_rbGravityScale(this.__wbg_ptr,t)}rbSetGravityScale(t,e,n){d.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr,t,e,n)}rbResetForces(t,e){d.rawrigidbodyset_rbResetForces(this.__wbg_ptr,t,e)}rbResetTorques(t,e){d.rawrigidbodyset_rbResetTorques(this.__wbg_ptr,t,e)}rbAddForce(t,e,n){A(e,I),d.rawrigidbodyset_rbAddForce(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbApplyImpulse(t,e,n){A(e,I),d.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbAddTorque(t,e,n){A(e,I),d.rawrigidbodyset_rbAddTorque(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbApplyTorqueImpulse(t,e,n){A(e,I),d.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr,t,e.__wbg_ptr,n)}rbAddForceAtPoint(t,e,n,r){A(e,I),A(n,I),d.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)}rbApplyImpulseAtPoint(t,e,n,r){A(e,I),A(n,I),d.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r)}rbAdditionalSolverIterations(t){return d.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr,t)>>>0}rbSetAdditionalSolverIterations(t,e){d.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr,t,e)}rbUserData(t){return d.rawrigidbodyset_rbUserData(this.__wbg_ptr,t)>>>0}rbSetUserData(t,e){d.rawrigidbodyset_rbSetUserData(this.__wbg_ptr,t,e)}rbUserForce(t){const e=d.rawrigidbodyset_rbUserForce(this.__wbg_ptr,t);return I.__wrap(e)}rbUserTorque(t){const e=d.rawrigidbodyset_rbUserTorque(this.__wbg_ptr,t);return I.__wrap(e)}constructor(){const t=d.rawrigidbodyset_new();return this.__wbg_ptr=t>>>0,Sa.register(this,this.__wbg_ptr,this),this}createRigidBody(t,e,n,r,s,a,o,c,l,h,u,f,_,w,b,g,m,R,T,M,B,P,L,H,x,S){return A(e,I),A(n,Ht),A(o,I),A(c,I),A(l,I),A(h,I),A(u,Ht),d.rawrigidbodyset_createRigidBody(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r,s,a,o.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr,h.__wbg_ptr,u.__wbg_ptr,f,_,w,b,g,m,R,T,M,B,P,L,H,x,S)}remove(t,e,n,r,s){A(e,Fn),A(n,me),A(r,Un),A(s,Nn),d.rawrigidbodyset_remove(this.__wbg_ptr,t,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)}len(){return d.rawcolliderset_len(this.__wbg_ptr)>>>0}contains(t){return d.rawrigidbodyset_contains(this.__wbg_ptr,t)!==0}forEachRigidBodyHandle(t){try{d.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr,pe(t))}finally{Yt[oe++]=void 0}}propagateModifiedBodyPositionsToColliders(t){A(t,me),d.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr,t.__wbg_ptr)}}const xa=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawrotation_free(i>>>0,1));class Ht{static __wrap(t){t=t>>>0;const e=Object.create(Ht.prototype);return e.__wbg_ptr=t,xa.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,xa.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawrotation_free(t,0)}constructor(t,e,n,r){const s=d.rawrotation_new(t,e,n,r);return this.__wbg_ptr=s>>>0,xa.register(this,this.__wbg_ptr,this),this}static identity(){const t=d.rawrotation_identity();return Ht.__wrap(t)}get x(){return d.rawrotation_x(this.__wbg_ptr)}get y(){return d.rawintegrationparameters_dt(this.__wbg_ptr)}get z(){return d.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}get w(){return d.rawrotation_w(this.__wbg_ptr)}}const Ml=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawsdpmatrix3_free(i>>>0,1));class fs{static __wrap(t){t=t>>>0;const e=Object.create(fs.prototype);return e.__wbg_ptr=t,Ml.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ml.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawsdpmatrix3_free(t,0)}elements(){const t=d.rawsdpmatrix3_elements(this.__wbg_ptr);return gr(t)}}const El=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawserializationpipeline_free(i>>>0,1));class lw{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,El.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawserializationpipeline_free(t,0)}constructor(){const t=d.rawserializationpipeline_new();return this.__wbg_ptr=t>>>0,El.register(this,this.__wbg_ptr,this),this}serializeAll(t,e,n,r,s,a,o,c,l){A(t,I),A(e,gi),A(n,Fn),A(r,mi),A(s,Kn),A(a,de),A(o,me),A(c,Un),A(l,Nn);const h=d.rawserializationpipeline_serializeAll(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,c.__wbg_ptr,l.__wbg_ptr);return gr(h)}deserializeAll(t){const e=d.rawserializationpipeline_deserializeAll(this.__wbg_ptr,Me(t));return e===0?void 0:ko.__wrap(e)}}const Tl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawshape_free(i>>>0,1));class At{static __wrap(t){t=t>>>0;const e=Object.create(At.prototype);return e.__wbg_ptr=t,Tl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Tl.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawshape_free(t,0)}static cuboid(t,e,n){const r=d.rawshape_cuboid(t,e,n);return At.__wrap(r)}static roundCuboid(t,e,n,r){const s=d.rawshape_roundCuboid(t,e,n,r);return At.__wrap(s)}static ball(t){const e=d.rawshape_ball(t);return At.__wrap(e)}static halfspace(t){A(t,I);const e=d.rawshape_halfspace(t.__wbg_ptr);return At.__wrap(e)}static capsule(t,e){const n=d.rawshape_capsule(t,e);return At.__wrap(n)}static cylinder(t,e){const n=d.rawshape_cylinder(t,e);return At.__wrap(n)}static roundCylinder(t,e,n){const r=d.rawshape_roundCylinder(t,e,n);return At.__wrap(r)}static cone(t,e){const n=d.rawshape_cone(t,e);return At.__wrap(n)}static roundCone(t,e,n){const r=d.rawshape_roundCone(t,e,n);return At.__wrap(r)}static polyline(t,e){const n=si(t,d.__wbindgen_export_2),r=Xe,s=es(e,d.__wbindgen_export_2),a=Xe,o=d.rawshape_polyline(n,r,s,a);return At.__wrap(o)}static trimesh(t,e,n){const r=si(t,d.__wbindgen_export_2),s=Xe,a=es(e,d.__wbindgen_export_2),o=Xe,c=d.rawshape_trimesh(r,s,a,o,n);return c===0?void 0:At.__wrap(c)}static heightfield(t,e,n,r,s){const a=si(n,d.__wbindgen_export_2),o=Xe;A(r,I);const c=d.rawshape_heightfield(t,e,a,o,r.__wbg_ptr,s);return At.__wrap(c)}static segment(t,e){A(t,I),A(e,I);const n=d.rawshape_segment(t.__wbg_ptr,e.__wbg_ptr);return At.__wrap(n)}static triangle(t,e,n){A(t,I),A(e,I),A(n,I);const r=d.rawshape_triangle(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr);return At.__wrap(r)}static roundTriangle(t,e,n,r){A(t,I),A(e,I),A(n,I);const s=d.rawshape_roundTriangle(t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r);return At.__wrap(s)}static convexHull(t){const e=si(t,d.__wbindgen_export_2),n=Xe,r=d.rawshape_convexHull(e,n);return r===0?void 0:At.__wrap(r)}static roundConvexHull(t,e){const n=si(t,d.__wbindgen_export_2),r=Xe,s=d.rawshape_roundConvexHull(n,r,e);return s===0?void 0:At.__wrap(s)}static convexMesh(t,e){const n=si(t,d.__wbindgen_export_2),r=Xe,s=es(e,d.__wbindgen_export_2),a=Xe,o=d.rawshape_convexMesh(n,r,s,a);return o===0?void 0:At.__wrap(o)}static roundConvexMesh(t,e,n){const r=si(t,d.__wbindgen_export_2),s=Xe,a=es(e,d.__wbindgen_export_2),o=Xe,c=d.rawshape_roundConvexMesh(r,s,a,o,n);return c===0?void 0:At.__wrap(c)}castShape(t,e,n,r,s,a,o,c,l,h){A(t,I),A(e,Ht),A(n,I),A(r,At),A(s,I),A(a,Ht),A(o,I);const u=d.rawshape_castShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,c,l,h);return u===0?void 0:Rs.__wrap(u)}intersectsShape(t,e,n,r,s){return A(t,I),A(e,Ht),A(n,At),A(r,I),A(s,Ht),d.rawshape_intersectsShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)!==0}contactShape(t,e,n,r,s,a){A(t,I),A(e,Ht),A(n,At),A(r,I),A(s,Ht);const o=d.rawshape_contactShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a);return o===0?void 0:wr.__wrap(o)}containsPoint(t,e,n){return A(t,I),A(e,Ht),A(n,I),d.rawshape_containsPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr)!==0}projectPoint(t,e,n,r){A(t,I),A(e,Ht),A(n,I);const s=d.rawshape_projectPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r);return Ms.__wrap(s)}intersectsRay(t,e,n,r,s){return A(t,I),A(e,Ht),A(n,I),A(r,I),d.rawshape_intersectsRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s)!==0}castRay(t,e,n,r,s,a){return A(t,I),A(e,Ht),A(n,I),A(r,I),d.rawshape_castRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a)}castRayAndGetNormal(t,e,n,r,s,a){A(t,I),A(e,Ht),A(n,I),A(r,I);const o=d.rawshape_castRayAndGetNormal(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,n.__wbg_ptr,r.__wbg_ptr,s,a);return o===0?void 0:Ts.__wrap(o)}}const Rl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawshapecasthit_free(i>>>0,1));class Rs{static __wrap(t){t=t>>>0;const e=Object.create(Rs.prototype);return e.__wbg_ptr=t,Rl.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Rl.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawshapecasthit_free(t,0)}time_of_impact(){return d.rawrotation_x(this.__wbg_ptr)}witness1(){const t=d.rawshapecasthit_witness1(this.__wbg_ptr);return I.__wrap(t)}witness2(){const t=d.rawcontactforceevent_total_force(this.__wbg_ptr);return I.__wrap(t)}normal1(){const t=d.rawshapecasthit_normal1(this.__wbg_ptr);return I.__wrap(t)}normal2(){const t=d.rawshapecasthit_normal2(this.__wbg_ptr);return I.__wrap(t)}}const Al=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawshapecontact_free(i>>>0,1));class wr{static __wrap(t){t=t>>>0;const e=Object.create(wr.prototype);return e.__wbg_ptr=t,Al.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Al.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawshapecontact_free(t,0)}distance(){return d.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}point1(){const t=d.rawpointprojection_point(this.__wbg_ptr);return I.__wrap(t)}point2(){const t=d.rawcollidershapecasthit_witness1(this.__wbg_ptr);return I.__wrap(t)}normal1(){const t=d.rawcollidershapecasthit_witness2(this.__wbg_ptr);return I.__wrap(t)}normal2(){const t=d.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return I.__wrap(t)}}const Ma=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>d.__wbg_rawvector_free(i>>>0,1));class I{static __wrap(t){t=t>>>0;const e=Object.create(I.prototype);return e.__wbg_ptr=t,Ma.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ma.unregister(this),t}free(){const t=this.__destroy_into_raw();d.__wbg_rawvector_free(t,0)}static zero(){const t=d.rawvector_zero();return I.__wrap(t)}constructor(t,e,n){const r=d.rawvector_new(t,e,n);return this.__wbg_ptr=r>>>0,Ma.register(this,this.__wbg_ptr,this),this}get x(){return d.rawrotation_x(this.__wbg_ptr)}set x(t){d.rawvector_set_x(this.__wbg_ptr,t)}get y(){return d.rawintegrationparameters_dt(this.__wbg_ptr)}set y(t){d.rawintegrationparameters_set_dt(this.__wbg_ptr,t)}get z(){return d.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}set z(t){d.rawvector_set_z(this.__wbg_ptr,t)}xyz(){const t=d.rawvector_xyz(this.__wbg_ptr);return I.__wrap(t)}yxz(){const t=d.rawvector_yxz(this.__wbg_ptr);return I.__wrap(t)}zxy(){const t=d.rawvector_zxy(this.__wbg_ptr);return I.__wrap(t)}xzy(){const t=d.rawvector_xzy(this.__wbg_ptr);return I.__wrap(t)}yzx(){const t=d.rawvector_yzx(this.__wbg_ptr);return I.__wrap(t)}zyx(){const t=d.rawvector_zyx(this.__wbg_ptr);return I.__wrap(t)}}function hw(i,t,e,n){const r=ie(i).bind(ie(t),ie(e),ie(n));return Me(r)}function dw(i){const t=ie(i).buffer;return Me(t)}function uw(){return Oo(function(i,t,e){const n=ie(i).call(ie(t),ie(e));return Me(n)},arguments)}function fw(){return Oo(function(i,t,e,n){const r=ie(i).call(ie(t),ie(e),ie(n));return Me(r)},arguments)}function pw(){return Oo(function(i,t,e,n,r){const s=ie(i).call(ie(t),ie(e),ie(n),ie(r));return Me(s)},arguments)}function _w(i){return ie(i).length}function mw(i){return ie(i).length}function gw(i){const t=new Uint8Array(ie(i));return Me(t)}function ww(i,t,e){const n=new Uint8Array(ie(i),t>>>0,e>>>0);return Me(n)}function vw(i,t,e){const n=new Float32Array(ie(i),t>>>0,e>>>0);return Me(n)}function bw(i){const t=new Float32Array(i>>>0);return Me(t)}function yw(i){const t=zo.__wrap(i);return Me(t)}function Sw(i){const t=Es.__wrap(i);return Me(t)}function xw(i,t,e){ie(i).set(ie(t),e>>>0)}function Mw(i,t,e){ie(i).set(ie(t),e>>>0)}function Ew(i){const t=ie(i);return typeof t=="boolean"?t?1:0:2}function Tw(i){return typeof ie(i)=="function"}function Rw(){const i=d.memory;return Me(i)}function Aw(i,t){const e=ie(t),n=typeof e=="number"?e:void 0;Ne().setFloat64(i+8*1,Ct(n)?0:n,!0),Ne().setInt32(i+4*0,!Ct(n),!0)}function Cw(i){return Me(i)}function Pw(i){gr(i)}function Iw(i,t){throw new Error(nw(i,t))}URL=globalThis.URL;const p=await Zg({"./rapier_wasm3d_bg.js":{__wbindgen_number_new:Cw,__wbindgen_boolean_get:Ew,__wbindgen_object_drop_ref:Pw,__wbindgen_number_get:Aw,__wbindgen_is_function:Tw,__wbg_rawraycolliderintersection_new:Sw,__wbg_rawcontactforceevent_new:yw,__wbg_call_7cccdd69e0791ae2:uw,__wbg_call_833bed5770ea2041:fw,__wbg_call_b8adc8b1d0a0d8eb:pw,__wbg_bind_c8359b1cba058168:hw,__wbg_buffer_609cc3eee51ed158:dw,__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a:ww,__wbg_new_a12002a7f91c75be:gw,__wbg_set_65595bdd868b3009:Mw,__wbg_length_a446193dc22c12f8:mw,__wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354:vw,__wbg_set_10bad9bee0e9c58b:xw,__wbg_length_3b4f022188ae8db6:_w,__wbg_newwithlength_5a5efe313cfd59f1:bw,__wbindgen_throw:Iw,__wbindgen_memory:Rw}},Kg),Lw=p.memory,Dw=p.version,Uw=p.__wbg_rawkinematiccharactercontroller_free,Fw=p.rawkinematiccharactercontroller_new,Nw=p.rawkinematiccharactercontroller_setUp,Ow=p.rawkinematiccharactercontroller_normalNudgeFactor,zw=p.rawkinematiccharactercontroller_setNormalNudgeFactor,Bw=p.rawkinematiccharactercontroller_setOffset,Hw=p.rawkinematiccharactercontroller_slideEnabled,kw=p.rawkinematiccharactercontroller_setSlideEnabled,Gw=p.rawkinematiccharactercontroller_autostepMaxHeight,Vw=p.rawkinematiccharactercontroller_autostepMinWidth,Ww=p.rawkinematiccharactercontroller_autostepIncludesDynamicBodies,jw=p.rawkinematiccharactercontroller_autostepEnabled,Xw=p.rawkinematiccharactercontroller_enableAutostep,qw=p.rawkinematiccharactercontroller_disableAutostep,Yw=p.rawkinematiccharactercontroller_maxSlopeClimbAngle,Jw=p.rawkinematiccharactercontroller_setMaxSlopeClimbAngle,Kw=p.rawkinematiccharactercontroller_minSlopeSlideAngle,Zw=p.rawkinematiccharactercontroller_setMinSlopeSlideAngle,$w=p.rawkinematiccharactercontroller_snapToGroundDistance,Qw=p.rawkinematiccharactercontroller_enableSnapToGround,tv=p.rawkinematiccharactercontroller_disableSnapToGround,ev=p.rawkinematiccharactercontroller_snapToGroundEnabled,nv=p.rawkinematiccharactercontroller_computeColliderMovement,iv=p.rawkinematiccharactercontroller_computedMovement,rv=p.rawkinematiccharactercontroller_computedGrounded,sv=p.rawkinematiccharactercontroller_numComputedCollisions,av=p.rawkinematiccharactercontroller_computedCollision,ov=p.__wbg_rawcharactercollision_free,cv=p.rawcharactercollision_new,lv=p.rawcharactercollision_handle,hv=p.rawcharactercollision_translationDeltaApplied,dv=p.rawcharactercollision_translationDeltaRemaining,uv=p.rawcharactercollision_toi,fv=p.rawcharactercollision_worldWitness1,pv=p.rawcharactercollision_worldWitness2,_v=p.rawcharactercollision_worldNormal1,mv=p.rawcharactercollision_worldNormal2,gv=p.__wbg_rawpidcontroller_free,wv=p.rawpidcontroller_new,vv=p.rawpidcontroller_set_kp,bv=p.rawpidcontroller_set_ki,yv=p.rawpidcontroller_set_kd,Sv=p.rawpidcontroller_set_axes_mask,xv=p.rawpidcontroller_reset_integrals,Mv=p.rawpidcontroller_apply_linear_correction,Ev=p.rawpidcontroller_apply_angular_correction,Tv=p.rawpidcontroller_linear_correction,Rv=p.rawpidcontroller_angular_correction,Av=p.__wbg_rawdynamicraycastvehiclecontroller_free,Cv=p.rawdynamicraycastvehiclecontroller_new,Pv=p.rawdynamicraycastvehiclecontroller_current_vehicle_speed,Iv=p.rawdynamicraycastvehiclecontroller_chassis,Lv=p.rawdynamicraycastvehiclecontroller_index_up_axis,Dv=p.rawdynamicraycastvehiclecontroller_set_index_up_axis,Uv=p.rawdynamicraycastvehiclecontroller_index_forward_axis,Fv=p.rawdynamicraycastvehiclecontroller_set_index_forward_axis,Nv=p.rawdynamicraycastvehiclecontroller_add_wheel,Ov=p.rawdynamicraycastvehiclecontroller_num_wheels,zv=p.rawdynamicraycastvehiclecontroller_update_vehicle,Bv=p.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs,Hv=p.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs,kv=p.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length,Gv=p.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length,Vv=p.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel,Wv=p.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel,jv=p.rawdynamicraycastvehiclecontroller_wheel_radius,Xv=p.rawdynamicraycastvehiclecontroller_set_wheel_radius,qv=p.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness,Yv=p.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness,Jv=p.rawdynamicraycastvehiclecontroller_wheel_suspension_compression,Kv=p.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression,Zv=p.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation,$v=p.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation,Qv=p.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force,tb=p.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force,eb=p.rawdynamicraycastvehiclecontroller_wheel_brake,nb=p.rawdynamicraycastvehiclecontroller_set_wheel_brake,ib=p.rawdynamicraycastvehiclecontroller_wheel_steering,rb=p.rawdynamicraycastvehiclecontroller_set_wheel_steering,sb=p.rawdynamicraycastvehiclecontroller_wheel_engine_force,ab=p.rawdynamicraycastvehiclecontroller_set_wheel_engine_force,ob=p.rawdynamicraycastvehiclecontroller_wheel_direction_cs,cb=p.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs,lb=p.rawdynamicraycastvehiclecontroller_wheel_axle_cs,hb=p.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs,db=p.rawdynamicraycastvehiclecontroller_wheel_friction_slip,ub=p.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip,fb=p.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness,pb=p.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness,_b=p.rawdynamicraycastvehiclecontroller_wheel_rotation,mb=p.rawdynamicraycastvehiclecontroller_wheel_forward_impulse,gb=p.rawdynamicraycastvehiclecontroller_wheel_side_impulse,wb=p.rawdynamicraycastvehiclecontroller_wheel_suspension_force,vb=p.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws,bb=p.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws,yb=p.rawdynamicraycastvehiclecontroller_wheel_suspension_length,Sb=p.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws,xb=p.rawdynamicraycastvehiclecontroller_wheel_is_in_contact,Mb=p.rawdynamicraycastvehiclecontroller_wheel_ground_object,Eb=p.__wbg_rawccdsolver_free,Tb=p.rawccdsolver_new,Rb=p.rawimpulsejointset_jointType,Ab=p.rawimpulsejointset_jointBodyHandle1,Cb=p.rawimpulsejointset_jointBodyHandle2,Pb=p.rawimpulsejointset_jointFrameX1,Ib=p.rawimpulsejointset_jointFrameX2,Lb=p.rawimpulsejointset_jointAnchor1,Db=p.rawimpulsejointset_jointAnchor2,Ub=p.rawimpulsejointset_jointSetAnchor1,Fb=p.rawimpulsejointset_jointSetAnchor2,Nb=p.rawimpulsejointset_jointContactsEnabled,Ob=p.rawimpulsejointset_jointSetContactsEnabled,zb=p.rawimpulsejointset_jointLimitsEnabled,Bb=p.rawimpulsejointset_jointLimitsMin,Hb=p.rawimpulsejointset_jointLimitsMax,kb=p.rawimpulsejointset_jointSetLimits,Gb=p.rawimpulsejointset_jointConfigureMotorModel,Vb=p.rawimpulsejointset_jointConfigureMotorVelocity,Wb=p.rawimpulsejointset_jointConfigureMotorPosition,jb=p.rawimpulsejointset_jointConfigureMotor,Xb=p.__wbg_rawimpulsejointset_free,qb=p.rawimpulsejointset_new,Yb=p.rawimpulsejointset_createJoint,Jb=p.rawimpulsejointset_remove,Kb=p.rawimpulsejointset_len,Zb=p.rawimpulsejointset_contains,$b=p.rawimpulsejointset_forEachJointHandle,Qb=p.rawimpulsejointset_forEachJointAttachedToRigidBody,t0=p.__wbg_rawintegrationparameters_free,e0=p.rawintegrationparameters_new,n0=p.rawintegrationparameters_dt,i0=p.rawintegrationparameters_contact_erp,r0=p.rawintegrationparameters_normalizedAllowedLinearError,s0=p.rawintegrationparameters_numSolverIterations,a0=p.rawintegrationparameters_numAdditionalFrictionIterations,o0=p.rawintegrationparameters_numInternalPgsIterations,c0=p.rawintegrationparameters_maxCcdSubsteps,l0=p.rawintegrationparameters_lengthUnit,h0=p.rawintegrationparameters_set_dt,d0=p.rawintegrationparameters_set_contact_natural_frequency,u0=p.rawintegrationparameters_set_normalizedAllowedLinearError,f0=p.rawintegrationparameters_set_normalizedPredictionDistance,p0=p.rawintegrationparameters_set_numSolverIterations,_0=p.rawintegrationparameters_set_numAdditionalFrictionIterations,m0=p.rawintegrationparameters_set_numInternalPgsIterations,g0=p.rawintegrationparameters_set_minIslandSize,w0=p.rawintegrationparameters_set_maxCcdSubsteps,v0=p.rawintegrationparameters_set_lengthUnit,b0=p.rawintegrationparameters_switchToStandardPgsSolver,y0=p.rawintegrationparameters_switchToSmallStepsPgsSolver,S0=p.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart,x0=p.__wbg_rawislandmanager_free,M0=p.rawislandmanager_new,E0=p.rawislandmanager_forEachActiveRigidBodyHandle,T0=p.__wbg_rawgenericjoint_free,R0=p.rawgenericjoint_generic,A0=p.rawgenericjoint_spring,C0=p.rawgenericjoint_rope,P0=p.rawgenericjoint_spherical,I0=p.rawgenericjoint_prismatic,L0=p.rawgenericjoint_fixed,D0=p.rawgenericjoint_revolute,U0=p.rawmultibodyjointset_jointType,F0=p.rawmultibodyjointset_jointFrameX1,N0=p.rawmultibodyjointset_jointFrameX2,O0=p.rawmultibodyjointset_jointAnchor1,z0=p.rawmultibodyjointset_jointAnchor2,B0=p.rawmultibodyjointset_jointContactsEnabled,H0=p.rawmultibodyjointset_jointSetContactsEnabled,k0=p.rawmultibodyjointset_jointLimitsEnabled,G0=p.rawmultibodyjointset_jointLimitsMin,V0=p.rawmultibodyjointset_jointLimitsMax,W0=p.__wbg_rawmultibodyjointset_free,j0=p.rawmultibodyjointset_new,X0=p.rawmultibodyjointset_createJoint,q0=p.rawmultibodyjointset_remove,Y0=p.rawmultibodyjointset_contains,J0=p.rawmultibodyjointset_forEachJointHandle,K0=p.rawmultibodyjointset_forEachJointAttachedToRigidBody,Z0=p.rawrigidbodyset_rbTranslation,$0=p.rawrigidbodyset_rbRotation,Q0=p.rawrigidbodyset_rbSleep,ty=p.rawrigidbodyset_rbIsSleeping,ey=p.rawrigidbodyset_rbIsMoving,ny=p.rawrigidbodyset_rbNextTranslation,iy=p.rawrigidbodyset_rbNextRotation,ry=p.rawrigidbodyset_rbSetTranslation,sy=p.rawrigidbodyset_rbSetRotation,ay=p.rawrigidbodyset_rbSetLinvel,oy=p.rawrigidbodyset_rbSetAngvel,cy=p.rawrigidbodyset_rbSetNextKinematicTranslation,ly=p.rawrigidbodyset_rbSetNextKinematicRotation,hy=p.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders,dy=p.rawrigidbodyset_rbSetAdditionalMass,uy=p.rawrigidbodyset_rbSetAdditionalMassProperties,fy=p.rawrigidbodyset_rbLinvel,py=p.rawrigidbodyset_rbAngvel,_y=p.rawrigidbodyset_rbLockTranslations,my=p.rawrigidbodyset_rbSetEnabledTranslations,gy=p.rawrigidbodyset_rbLockRotations,wy=p.rawrigidbodyset_rbSetEnabledRotations,vy=p.rawrigidbodyset_rbDominanceGroup,by=p.rawrigidbodyset_rbSetDominanceGroup,yy=p.rawrigidbodyset_rbEnableCcd,Sy=p.rawrigidbodyset_rbSetSoftCcdPrediction,xy=p.rawrigidbodyset_rbMass,My=p.rawrigidbodyset_rbInvMass,Ey=p.rawrigidbodyset_rbEffectiveInvMass,Ty=p.rawrigidbodyset_rbLocalCom,Ry=p.rawrigidbodyset_rbWorldCom,Ay=p.rawrigidbodyset_rbInvPrincipalInertiaSqrt,Cy=p.rawrigidbodyset_rbPrincipalInertiaLocalFrame,Py=p.rawrigidbodyset_rbPrincipalInertia,Iy=p.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt,Ly=p.rawrigidbodyset_rbEffectiveAngularInertia,Dy=p.rawrigidbodyset_rbWakeUp,Uy=p.rawrigidbodyset_rbIsCcdEnabled,Fy=p.rawrigidbodyset_rbSoftCcdPrediction,Ny=p.rawrigidbodyset_rbNumColliders,Oy=p.rawrigidbodyset_rbCollider,zy=p.rawrigidbodyset_rbBodyType,By=p.rawrigidbodyset_rbSetBodyType,Hy=p.rawrigidbodyset_rbIsFixed,ky=p.rawrigidbodyset_rbIsKinematic,Gy=p.rawrigidbodyset_rbIsDynamic,Vy=p.rawrigidbodyset_rbLinearDamping,Wy=p.rawrigidbodyset_rbAngularDamping,jy=p.rawrigidbodyset_rbSetLinearDamping,Xy=p.rawrigidbodyset_rbSetAngularDamping,qy=p.rawrigidbodyset_rbSetEnabled,Yy=p.rawrigidbodyset_rbIsEnabled,Jy=p.rawrigidbodyset_rbGravityScale,Ky=p.rawrigidbodyset_rbSetGravityScale,Zy=p.rawrigidbodyset_rbResetForces,$y=p.rawrigidbodyset_rbResetTorques,Qy=p.rawrigidbodyset_rbAddForce,tS=p.rawrigidbodyset_rbApplyImpulse,eS=p.rawrigidbodyset_rbAddTorque,nS=p.rawrigidbodyset_rbApplyTorqueImpulse,iS=p.rawrigidbodyset_rbAddForceAtPoint,rS=p.rawrigidbodyset_rbApplyImpulseAtPoint,sS=p.rawrigidbodyset_rbAdditionalSolverIterations,aS=p.rawrigidbodyset_rbSetAdditionalSolverIterations,oS=p.rawrigidbodyset_rbUserData,cS=p.rawrigidbodyset_rbSetUserData,lS=p.rawrigidbodyset_rbUserForce,hS=p.rawrigidbodyset_rbUserTorque,dS=p.__wbg_rawrigidbodyset_free,uS=p.rawrigidbodyset_new,fS=p.rawrigidbodyset_createRigidBody,pS=p.rawrigidbodyset_remove,_S=p.rawrigidbodyset_contains,mS=p.rawrigidbodyset_forEachRigidBodyHandle,gS=p.rawrigidbodyset_propagateModifiedBodyPositionsToColliders,wS=p.__wbg_rawbroadphase_free,vS=p.rawbroadphase_new,bS=p.rawcolliderset_coTranslation,yS=p.rawcolliderset_coRotation,SS=p.rawcolliderset_coSetTranslation,xS=p.rawcolliderset_coSetTranslationWrtParent,MS=p.rawcolliderset_coSetRotation,ES=p.rawcolliderset_coSetRotationWrtParent,TS=p.rawcolliderset_coIsSensor,RS=p.rawcolliderset_coShapeType,AS=p.rawcolliderset_coHalfspaceNormal,CS=p.rawcolliderset_coHalfExtents,PS=p.rawcolliderset_coSetHalfExtents,IS=p.rawcolliderset_coRadius,LS=p.rawcolliderset_coSetRadius,DS=p.rawcolliderset_coHalfHeight,US=p.rawcolliderset_coSetHalfHeight,FS=p.rawcolliderset_coRoundRadius,NS=p.rawcolliderset_coSetRoundRadius,OS=p.rawcolliderset_coVertices,zS=p.rawcolliderset_coIndices,BS=p.rawcolliderset_coTriMeshFlags,HS=p.rawcolliderset_coHeightFieldFlags,kS=p.rawcolliderset_coHeightfieldHeights,GS=p.rawcolliderset_coHeightfieldScale,VS=p.rawcolliderset_coHeightfieldNRows,WS=p.rawcolliderset_coHeightfieldNCols,jS=p.rawcolliderset_coParent,XS=p.rawcolliderset_coSetEnabled,qS=p.rawcolliderset_coIsEnabled,YS=p.rawcolliderset_coSetContactSkin,JS=p.rawcolliderset_coContactSkin,KS=p.rawcolliderset_coFriction,ZS=p.rawcolliderset_coRestitution,$S=p.rawcolliderset_coDensity,QS=p.rawcolliderset_coMass,tx=p.rawcolliderset_coVolume,ex=p.rawcolliderset_coCollisionGroups,nx=p.rawcolliderset_coSolverGroups,ix=p.rawcolliderset_coActiveHooks,rx=p.rawcolliderset_coActiveCollisionTypes,sx=p.rawcolliderset_coActiveEvents,ax=p.rawcolliderset_coContactForceEventThreshold,ox=p.rawcolliderset_coContainsPoint,cx=p.rawcolliderset_coCastShape,lx=p.rawcolliderset_coCastCollider,hx=p.rawcolliderset_coIntersectsShape,dx=p.rawcolliderset_coContactShape,ux=p.rawcolliderset_coContactCollider,fx=p.rawcolliderset_coProjectPoint,px=p.rawcolliderset_coIntersectsRay,_x=p.rawcolliderset_coCastRay,mx=p.rawcolliderset_coCastRayAndGetNormal,gx=p.rawcolliderset_coSetSensor,wx=p.rawcolliderset_coSetRestitution,vx=p.rawcolliderset_coSetFriction,bx=p.rawcolliderset_coFrictionCombineRule,yx=p.rawcolliderset_coSetFrictionCombineRule,Sx=p.rawcolliderset_coRestitutionCombineRule,xx=p.rawcolliderset_coSetRestitutionCombineRule,Mx=p.rawcolliderset_coSetCollisionGroups,Ex=p.rawcolliderset_coSetSolverGroups,Tx=p.rawcolliderset_coSetActiveHooks,Rx=p.rawcolliderset_coSetActiveEvents,Ax=p.rawcolliderset_coSetActiveCollisionTypes,Cx=p.rawcolliderset_coSetShape,Px=p.rawcolliderset_coSetContactForceEventThreshold,Ix=p.rawcolliderset_coSetDensity,Lx=p.rawcolliderset_coSetMass,Dx=p.rawcolliderset_coSetMassProperties,Ux=p.__wbg_rawcolliderset_free,Fx=p.rawcolliderset_new,Nx=p.rawcolliderset_len,Ox=p.rawcolliderset_contains,zx=p.rawcolliderset_createCollider,Bx=p.rawcolliderset_remove,Hx=p.rawcolliderset_forEachColliderHandle,kx=p.__wbg_rawshapecontact_free,Gx=p.__wbg_rawnarrowphase_free,Vx=p.rawnarrowphase_new,Wx=p.rawnarrowphase_contact_pairs_with,jx=p.rawnarrowphase_contact_pair,Xx=p.rawnarrowphase_intersection_pairs_with,qx=p.rawnarrowphase_intersection_pair,Yx=p.__wbg_rawcontactmanifold_free,Jx=p.rawcontactpair_collider1,Kx=p.rawcontactpair_collider2,Zx=p.rawcontactpair_numContactManifolds,$x=p.rawcontactpair_contactManifold,Qx=p.rawcontactmanifold_normal,tM=p.rawcontactmanifold_local_n1,eM=p.rawcontactmanifold_local_n2,nM=p.rawcontactmanifold_subshape1,iM=p.rawcontactmanifold_subshape2,rM=p.rawcontactmanifold_num_contacts,sM=p.rawcontactmanifold_contact_local_p1,aM=p.rawcontactmanifold_contact_local_p2,oM=p.rawcontactmanifold_contact_dist,cM=p.rawcontactmanifold_contact_fid1,lM=p.rawcontactmanifold_contact_fid2,hM=p.rawcontactmanifold_contact_impulse,dM=p.rawcontactmanifold_contact_tangent_impulse_x,uM=p.rawcontactmanifold_contact_tangent_impulse_y,fM=p.rawcontactmanifold_num_solver_contacts,pM=p.rawcontactmanifold_solver_contact_point,_M=p.rawcontactmanifold_solver_contact_dist,mM=p.rawcontactmanifold_solver_contact_friction,gM=p.rawcontactmanifold_solver_contact_restitution,wM=p.rawcontactmanifold_solver_contact_tangent_velocity,vM=p.__wbg_rawpointprojection_free,bM=p.rawpointprojection_point,yM=p.rawpointprojection_isInside,SM=p.__wbg_rawpointcolliderprojection_free,xM=p.rawpointcolliderprojection_colliderHandle,MM=p.rawpointcolliderprojection_point,EM=p.rawpointcolliderprojection_isInside,TM=p.rawpointcolliderprojection_featureType,RM=p.rawpointcolliderprojection_featureId,AM=p.__wbg_rawrayintersection_free,CM=p.__wbg_rawraycolliderhit_free,PM=p.__wbg_rawshape_free,IM=p.rawshape_cuboid,LM=p.rawshape_roundCuboid,DM=p.rawshape_ball,UM=p.rawshape_halfspace,FM=p.rawshape_capsule,NM=p.rawshape_cylinder,OM=p.rawshape_roundCylinder,zM=p.rawshape_cone,BM=p.rawshape_roundCone,HM=p.rawshape_polyline,kM=p.rawshape_trimesh,GM=p.rawshape_heightfield,VM=p.rawshape_segment,WM=p.rawshape_triangle,jM=p.rawshape_roundTriangle,XM=p.rawshape_convexHull,qM=p.rawshape_roundConvexHull,YM=p.rawshape_convexMesh,JM=p.rawshape_roundConvexMesh,KM=p.rawshape_castShape,ZM=p.rawshape_intersectsShape,$M=p.rawshape_contactShape,QM=p.rawshape_containsPoint,tE=p.rawshape_projectPoint,eE=p.rawshape_intersectsRay,nE=p.rawshape_castRay,iE=p.rawshape_castRayAndGetNormal,rE=p.__wbg_rawshapecasthit_free,sE=p.rawshapecasthit_witness1,aE=p.rawshapecasthit_normal1,oE=p.rawshapecasthit_normal2,cE=p.__wbg_rawcollidershapecasthit_free,lE=p.rawcollidershapecasthit_time_of_impact,hE=p.rawcollidershapecasthit_witness1,dE=p.rawcollidershapecasthit_witness2,uE=p.rawrotation_new,fE=p.rawrotation_identity,pE=p.rawrotation_x,_E=p.rawrotation_w,mE=p.rawvector_zero,gE=p.rawvector_new,wE=p.rawvector_set_x,vE=p.rawvector_set_z,bE=p.rawvector_xyz,yE=p.rawvector_yxz,SE=p.rawvector_zxy,xE=p.rawvector_xzy,ME=p.rawvector_yzx,EE=p.rawvector_zyx,TE=p.rawsdpmatrix3_elements,RE=p.__wbg_rawdebugrenderpipeline_free,AE=p.rawdebugrenderpipeline_new,CE=p.rawdebugrenderpipeline_vertices,PE=p.rawdebugrenderpipeline_colors,IE=p.rawdebugrenderpipeline_render,LE=p.__wbg_raweventqueue_free,DE=p.__wbg_rawcontactforceevent_free,UE=p.rawcontactforceevent_collider2,FE=p.rawcontactforceevent_total_force,NE=p.rawcontactforceevent_total_force_magnitude,OE=p.rawcontactforceevent_max_force_direction,zE=p.rawcontactforceevent_max_force_magnitude,BE=p.raweventqueue_new,HE=p.raweventqueue_drainCollisionEvents,kE=p.raweventqueue_drainContactForceEvents,GE=p.raweventqueue_clear,VE=p.__wbg_rawphysicspipeline_free,WE=p.rawphysicspipeline_new,jE=p.rawphysicspipeline_step,XE=p.rawphysicspipeline_stepWithEvents,qE=p.rawquerypipeline_new,YE=p.rawquerypipeline_update,JE=p.rawquerypipeline_castRay,KE=p.rawquerypipeline_castRayAndGetNormal,ZE=p.rawquerypipeline_intersectionsWithRay,$E=p.rawquerypipeline_intersectionWithShape,QE=p.rawquerypipeline_projectPoint,tT=p.rawquerypipeline_projectPointAndGetFeature,eT=p.rawquerypipeline_intersectionsWithPoint,nT=p.rawquerypipeline_castShape,iT=p.rawquerypipeline_intersectionsWithShape,rT=p.rawquerypipeline_collidersWithAabbIntersectingAabb,sT=p.__wbg_rawdeserializedworld_free,aT=p.rawdeserializedworld_takeGravity,oT=p.rawdeserializedworld_takeIntegrationParameters,cT=p.rawdeserializedworld_takeIslandManager,lT=p.rawdeserializedworld_takeBroadPhase,hT=p.rawdeserializedworld_takeNarrowPhase,dT=p.rawdeserializedworld_takeBodies,uT=p.rawdeserializedworld_takeColliders,fT=p.rawdeserializedworld_takeImpulseJoints,pT=p.rawdeserializedworld_takeMultibodyJoints,_T=p.__wbg_rawserializationpipeline_free,mT=p.rawserializationpipeline_new,gT=p.rawserializationpipeline_serializeAll,wT=p.rawserializationpipeline_deserializeAll,vT=p.rawkinematiccharactercontroller_offset,bT=p.rawintegrationparameters_minIslandSize,yT=p.rawrigidbodyset_len,ST=p.rawshapecontact_distance,xT=p.rawrayintersection_featureType,MT=p.rawraycolliderintersection_colliderHandle,ET=p.rawrayintersection_time_of_impact,TT=p.rawraycolliderintersection_featureType,RT=p.rawraycolliderhit_colliderHandle,AT=p.rawraycolliderintersection_time_of_impact,CT=p.rawcollidershapecasthit_colliderHandle,PT=p.rawraycolliderhit_timeOfImpact,IT=p.rawshapecasthit_time_of_impact,LT=p.rawrotation_y,DT=p.rawrotation_z,UT=p.rawvector_x,FT=p.rawvector_y,NT=p.rawvector_z,OT=p.rawcontactforceevent_collider1,zT=p.rawintegrationparameters_normalizedPredictionDistance,BT=p.rawcolliderset_isHandleValid,HT=p.rawrayintersection_featureId,kT=p.rawraycolliderintersection_featureId,GT=p.rawkinematiccharactercontroller_up,VT=p.rawshapecontact_normal2,WT=p.rawshapecontact_point1,jT=p.rawshapecontact_point2,XT=p.rawrayintersection_normal,qT=p.rawraycolliderintersection_normal,YT=p.rawshapecontact_normal1,JT=p.rawcollidershapecasthit_normal1,KT=p.rawcollidershapecasthit_normal2,ZT=p.rawshapecasthit_witness2,$T=p.__wbg_rawcontactpair_free,QT=p.__wbg_rawraycolliderintersection_free,tR=p.__wbg_rawrotation_free,eR=p.__wbg_rawvector_free,nR=p.__wbg_rawsdpmatrix3_free,iR=p.__wbg_rawquerypipeline_free,rR=p.rawvector_set_y,sR=p.__wbindgen_export_0,aR=p.__wbindgen_add_to_stack_pointer,oR=p.__wbindgen_export_1,cR=p.__wbindgen_export_2,lR=Object.freeze(Object.defineProperty({__proto__:null,__wbg_rawbroadphase_free:wS,__wbg_rawccdsolver_free:Eb,__wbg_rawcharactercollision_free:ov,__wbg_rawcolliderset_free:Ux,__wbg_rawcollidershapecasthit_free:cE,__wbg_rawcontactforceevent_free:DE,__wbg_rawcontactmanifold_free:Yx,__wbg_rawcontactpair_free:$T,__wbg_rawdebugrenderpipeline_free:RE,__wbg_rawdeserializedworld_free:sT,__wbg_rawdynamicraycastvehiclecontroller_free:Av,__wbg_raweventqueue_free:LE,__wbg_rawgenericjoint_free:T0,__wbg_rawimpulsejointset_free:Xb,__wbg_rawintegrationparameters_free:t0,__wbg_rawislandmanager_free:x0,__wbg_rawkinematiccharactercontroller_free:Uw,__wbg_rawmultibodyjointset_free:W0,__wbg_rawnarrowphase_free:Gx,__wbg_rawphysicspipeline_free:VE,__wbg_rawpidcontroller_free:gv,__wbg_rawpointcolliderprojection_free:SM,__wbg_rawpointprojection_free:vM,__wbg_rawquerypipeline_free:iR,__wbg_rawraycolliderhit_free:CM,__wbg_rawraycolliderintersection_free:QT,__wbg_rawrayintersection_free:AM,__wbg_rawrigidbodyset_free:dS,__wbg_rawrotation_free:tR,__wbg_rawsdpmatrix3_free:nR,__wbg_rawserializationpipeline_free:_T,__wbg_rawshape_free:PM,__wbg_rawshapecasthit_free:rE,__wbg_rawshapecontact_free:kx,__wbg_rawvector_free:eR,__wbindgen_add_to_stack_pointer:aR,__wbindgen_export_0:sR,__wbindgen_export_1:oR,__wbindgen_export_2:cR,memory:Lw,rawbroadphase_new:vS,rawccdsolver_new:Tb,rawcharactercollision_handle:lv,rawcharactercollision_new:cv,rawcharactercollision_toi:uv,rawcharactercollision_translationDeltaApplied:hv,rawcharactercollision_translationDeltaRemaining:dv,rawcharactercollision_worldNormal1:_v,rawcharactercollision_worldNormal2:mv,rawcharactercollision_worldWitness1:fv,rawcharactercollision_worldWitness2:pv,rawcolliderset_coActiveCollisionTypes:rx,rawcolliderset_coActiveEvents:sx,rawcolliderset_coActiveHooks:ix,rawcolliderset_coCastCollider:lx,rawcolliderset_coCastRay:_x,rawcolliderset_coCastRayAndGetNormal:mx,rawcolliderset_coCastShape:cx,rawcolliderset_coCollisionGroups:ex,rawcolliderset_coContactCollider:ux,rawcolliderset_coContactForceEventThreshold:ax,rawcolliderset_coContactShape:dx,rawcolliderset_coContactSkin:JS,rawcolliderset_coContainsPoint:ox,rawcolliderset_coDensity:$S,rawcolliderset_coFriction:KS,rawcolliderset_coFrictionCombineRule:bx,rawcolliderset_coHalfExtents:CS,rawcolliderset_coHalfHeight:DS,rawcolliderset_coHalfspaceNormal:AS,rawcolliderset_coHeightFieldFlags:HS,rawcolliderset_coHeightfieldHeights:kS,rawcolliderset_coHeightfieldNCols:WS,rawcolliderset_coHeightfieldNRows:VS,rawcolliderset_coHeightfieldScale:GS,rawcolliderset_coIndices:zS,rawcolliderset_coIntersectsRay:px,rawcolliderset_coIntersectsShape:hx,rawcolliderset_coIsEnabled:qS,rawcolliderset_coIsSensor:TS,rawcolliderset_coMass:QS,rawcolliderset_coParent:jS,rawcolliderset_coProjectPoint:fx,rawcolliderset_coRadius:IS,rawcolliderset_coRestitution:ZS,rawcolliderset_coRestitutionCombineRule:Sx,rawcolliderset_coRotation:yS,rawcolliderset_coRoundRadius:FS,rawcolliderset_coSetActiveCollisionTypes:Ax,rawcolliderset_coSetActiveEvents:Rx,rawcolliderset_coSetActiveHooks:Tx,rawcolliderset_coSetCollisionGroups:Mx,rawcolliderset_coSetContactForceEventThreshold:Px,rawcolliderset_coSetContactSkin:YS,rawcolliderset_coSetDensity:Ix,rawcolliderset_coSetEnabled:XS,rawcolliderset_coSetFriction:vx,rawcolliderset_coSetFrictionCombineRule:yx,rawcolliderset_coSetHalfExtents:PS,rawcolliderset_coSetHalfHeight:US,rawcolliderset_coSetMass:Lx,rawcolliderset_coSetMassProperties:Dx,rawcolliderset_coSetRadius:LS,rawcolliderset_coSetRestitution:wx,rawcolliderset_coSetRestitutionCombineRule:xx,rawcolliderset_coSetRotation:MS,rawcolliderset_coSetRotationWrtParent:ES,rawcolliderset_coSetRoundRadius:NS,rawcolliderset_coSetSensor:gx,rawcolliderset_coSetShape:Cx,rawcolliderset_coSetSolverGroups:Ex,rawcolliderset_coSetTranslation:SS,rawcolliderset_coSetTranslationWrtParent:xS,rawcolliderset_coShapeType:RS,rawcolliderset_coSolverGroups:nx,rawcolliderset_coTranslation:bS,rawcolliderset_coTriMeshFlags:BS,rawcolliderset_coVertices:OS,rawcolliderset_coVolume:tx,rawcolliderset_contains:Ox,rawcolliderset_createCollider:zx,rawcolliderset_forEachColliderHandle:Hx,rawcolliderset_isHandleValid:BT,rawcolliderset_len:Nx,rawcolliderset_new:Fx,rawcolliderset_remove:Bx,rawcollidershapecasthit_colliderHandle:CT,rawcollidershapecasthit_normal1:JT,rawcollidershapecasthit_normal2:KT,rawcollidershapecasthit_time_of_impact:lE,rawcollidershapecasthit_witness1:hE,rawcollidershapecasthit_witness2:dE,rawcontactforceevent_collider1:OT,rawcontactforceevent_collider2:UE,rawcontactforceevent_max_force_direction:OE,rawcontactforceevent_max_force_magnitude:zE,rawcontactforceevent_total_force:FE,rawcontactforceevent_total_force_magnitude:NE,rawcontactmanifold_contact_dist:oM,rawcontactmanifold_contact_fid1:cM,rawcontactmanifold_contact_fid2:lM,rawcontactmanifold_contact_impulse:hM,rawcontactmanifold_contact_local_p1:sM,rawcontactmanifold_contact_local_p2:aM,rawcontactmanifold_contact_tangent_impulse_x:dM,rawcontactmanifold_contact_tangent_impulse_y:uM,rawcontactmanifold_local_n1:tM,rawcontactmanifold_local_n2:eM,rawcontactmanifold_normal:Qx,rawcontactmanifold_num_contacts:rM,rawcontactmanifold_num_solver_contacts:fM,rawcontactmanifold_solver_contact_dist:_M,rawcontactmanifold_solver_contact_friction:mM,rawcontactmanifold_solver_contact_point:pM,rawcontactmanifold_solver_contact_restitution:gM,rawcontactmanifold_solver_contact_tangent_velocity:wM,rawcontactmanifold_subshape1:nM,rawcontactmanifold_subshape2:iM,rawcontactpair_collider1:Jx,rawcontactpair_collider2:Kx,rawcontactpair_contactManifold:$x,rawcontactpair_numContactManifolds:Zx,rawdebugrenderpipeline_colors:PE,rawdebugrenderpipeline_new:AE,rawdebugrenderpipeline_render:IE,rawdebugrenderpipeline_vertices:CE,rawdeserializedworld_takeBodies:dT,rawdeserializedworld_takeBroadPhase:lT,rawdeserializedworld_takeColliders:uT,rawdeserializedworld_takeGravity:aT,rawdeserializedworld_takeImpulseJoints:fT,rawdeserializedworld_takeIntegrationParameters:oT,rawdeserializedworld_takeIslandManager:cT,rawdeserializedworld_takeMultibodyJoints:pT,rawdeserializedworld_takeNarrowPhase:hT,rawdynamicraycastvehiclecontroller_add_wheel:Nv,rawdynamicraycastvehiclecontroller_chassis:Iv,rawdynamicraycastvehiclecontroller_current_vehicle_speed:Pv,rawdynamicraycastvehiclecontroller_index_forward_axis:Uv,rawdynamicraycastvehiclecontroller_index_up_axis:Lv,rawdynamicraycastvehiclecontroller_new:Cv,rawdynamicraycastvehiclecontroller_num_wheels:Ov,rawdynamicraycastvehiclecontroller_set_index_forward_axis:Fv,rawdynamicraycastvehiclecontroller_set_index_up_axis:Dv,rawdynamicraycastvehiclecontroller_set_wheel_axle_cs:hb,rawdynamicraycastvehiclecontroller_set_wheel_brake:nb,rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs:Hv,rawdynamicraycastvehiclecontroller_set_wheel_direction_cs:cb,rawdynamicraycastvehiclecontroller_set_wheel_engine_force:ab,rawdynamicraycastvehiclecontroller_set_wheel_friction_slip:ub,rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force:tb,rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel:Wv,rawdynamicraycastvehiclecontroller_set_wheel_radius:Xv,rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness:pb,rawdynamicraycastvehiclecontroller_set_wheel_steering:rb,rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression:Kv,rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation:$v,rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length:Gv,rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness:Yv,rawdynamicraycastvehiclecontroller_update_vehicle:zv,rawdynamicraycastvehiclecontroller_wheel_axle_cs:lb,rawdynamicraycastvehiclecontroller_wheel_brake:eb,rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs:Bv,rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws:vb,rawdynamicraycastvehiclecontroller_wheel_contact_point_ws:bb,rawdynamicraycastvehiclecontroller_wheel_direction_cs:ob,rawdynamicraycastvehiclecontroller_wheel_engine_force:sb,rawdynamicraycastvehiclecontroller_wheel_forward_impulse:mb,rawdynamicraycastvehiclecontroller_wheel_friction_slip:db,rawdynamicraycastvehiclecontroller_wheel_ground_object:Mb,rawdynamicraycastvehiclecontroller_wheel_hard_point_ws:Sb,rawdynamicraycastvehiclecontroller_wheel_is_in_contact:xb,rawdynamicraycastvehiclecontroller_wheel_max_suspension_force:Qv,rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel:Vv,rawdynamicraycastvehiclecontroller_wheel_radius:jv,rawdynamicraycastvehiclecontroller_wheel_rotation:_b,rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness:fb,rawdynamicraycastvehiclecontroller_wheel_side_impulse:gb,rawdynamicraycastvehiclecontroller_wheel_steering:ib,rawdynamicraycastvehiclecontroller_wheel_suspension_compression:Jv,rawdynamicraycastvehiclecontroller_wheel_suspension_force:wb,rawdynamicraycastvehiclecontroller_wheel_suspension_length:yb,rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation:Zv,rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length:kv,rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness:qv,raweventqueue_clear:GE,raweventqueue_drainCollisionEvents:HE,raweventqueue_drainContactForceEvents:kE,raweventqueue_new:BE,rawgenericjoint_fixed:L0,rawgenericjoint_generic:R0,rawgenericjoint_prismatic:I0,rawgenericjoint_revolute:D0,rawgenericjoint_rope:C0,rawgenericjoint_spherical:P0,rawgenericjoint_spring:A0,rawimpulsejointset_contains:Zb,rawimpulsejointset_createJoint:Yb,rawimpulsejointset_forEachJointAttachedToRigidBody:Qb,rawimpulsejointset_forEachJointHandle:$b,rawimpulsejointset_jointAnchor1:Lb,rawimpulsejointset_jointAnchor2:Db,rawimpulsejointset_jointBodyHandle1:Ab,rawimpulsejointset_jointBodyHandle2:Cb,rawimpulsejointset_jointConfigureMotor:jb,rawimpulsejointset_jointConfigureMotorModel:Gb,rawimpulsejointset_jointConfigureMotorPosition:Wb,rawimpulsejointset_jointConfigureMotorVelocity:Vb,rawimpulsejointset_jointContactsEnabled:Nb,rawimpulsejointset_jointFrameX1:Pb,rawimpulsejointset_jointFrameX2:Ib,rawimpulsejointset_jointLimitsEnabled:zb,rawimpulsejointset_jointLimitsMax:Hb,rawimpulsejointset_jointLimitsMin:Bb,rawimpulsejointset_jointSetAnchor1:Ub,rawimpulsejointset_jointSetAnchor2:Fb,rawimpulsejointset_jointSetContactsEnabled:Ob,rawimpulsejointset_jointSetLimits:kb,rawimpulsejointset_jointType:Rb,rawimpulsejointset_len:Kb,rawimpulsejointset_new:qb,rawimpulsejointset_remove:Jb,rawintegrationparameters_contact_erp:i0,rawintegrationparameters_dt:n0,rawintegrationparameters_lengthUnit:l0,rawintegrationparameters_maxCcdSubsteps:c0,rawintegrationparameters_minIslandSize:bT,rawintegrationparameters_new:e0,rawintegrationparameters_normalizedAllowedLinearError:r0,rawintegrationparameters_normalizedPredictionDistance:zT,rawintegrationparameters_numAdditionalFrictionIterations:a0,rawintegrationparameters_numInternalPgsIterations:o0,rawintegrationparameters_numSolverIterations:s0,rawintegrationparameters_set_contact_natural_frequency:d0,rawintegrationparameters_set_dt:h0,rawintegrationparameters_set_lengthUnit:v0,rawintegrationparameters_set_maxCcdSubsteps:w0,rawintegrationparameters_set_minIslandSize:g0,rawintegrationparameters_set_normalizedAllowedLinearError:u0,rawintegrationparameters_set_normalizedPredictionDistance:f0,rawintegrationparameters_set_numAdditionalFrictionIterations:_0,rawintegrationparameters_set_numInternalPgsIterations:m0,rawintegrationparameters_set_numSolverIterations:p0,rawintegrationparameters_switchToSmallStepsPgsSolver:y0,rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart:S0,rawintegrationparameters_switchToStandardPgsSolver:b0,rawislandmanager_forEachActiveRigidBodyHandle:E0,rawislandmanager_new:M0,rawkinematiccharactercontroller_autostepEnabled:jw,rawkinematiccharactercontroller_autostepIncludesDynamicBodies:Ww,rawkinematiccharactercontroller_autostepMaxHeight:Gw,rawkinematiccharactercontroller_autostepMinWidth:Vw,rawkinematiccharactercontroller_computeColliderMovement:nv,rawkinematiccharactercontroller_computedCollision:av,rawkinematiccharactercontroller_computedGrounded:rv,rawkinematiccharactercontroller_computedMovement:iv,rawkinematiccharactercontroller_disableAutostep:qw,rawkinematiccharactercontroller_disableSnapToGround:tv,rawkinematiccharactercontroller_enableAutostep:Xw,rawkinematiccharactercontroller_enableSnapToGround:Qw,rawkinematiccharactercontroller_maxSlopeClimbAngle:Yw,rawkinematiccharactercontroller_minSlopeSlideAngle:Kw,rawkinematiccharactercontroller_new:Fw,rawkinematiccharactercontroller_normalNudgeFactor:Ow,rawkinematiccharactercontroller_numComputedCollisions:sv,rawkinematiccharactercontroller_offset:vT,rawkinematiccharactercontroller_setMaxSlopeClimbAngle:Jw,rawkinematiccharactercontroller_setMinSlopeSlideAngle:Zw,rawkinematiccharactercontroller_setNormalNudgeFactor:zw,rawkinematiccharactercontroller_setOffset:Bw,rawkinematiccharactercontroller_setSlideEnabled:kw,rawkinematiccharactercontroller_setUp:Nw,rawkinematiccharactercontroller_slideEnabled:Hw,rawkinematiccharactercontroller_snapToGroundDistance:$w,rawkinematiccharactercontroller_snapToGroundEnabled:ev,rawkinematiccharactercontroller_up:GT,rawmultibodyjointset_contains:Y0,rawmultibodyjointset_createJoint:X0,rawmultibodyjointset_forEachJointAttachedToRigidBody:K0,rawmultibodyjointset_forEachJointHandle:J0,rawmultibodyjointset_jointAnchor1:O0,rawmultibodyjointset_jointAnchor2:z0,rawmultibodyjointset_jointContactsEnabled:B0,rawmultibodyjointset_jointFrameX1:F0,rawmultibodyjointset_jointFrameX2:N0,rawmultibodyjointset_jointLimitsEnabled:k0,rawmultibodyjointset_jointLimitsMax:V0,rawmultibodyjointset_jointLimitsMin:G0,rawmultibodyjointset_jointSetContactsEnabled:H0,rawmultibodyjointset_jointType:U0,rawmultibodyjointset_new:j0,rawmultibodyjointset_remove:q0,rawnarrowphase_contact_pair:jx,rawnarrowphase_contact_pairs_with:Wx,rawnarrowphase_intersection_pair:qx,rawnarrowphase_intersection_pairs_with:Xx,rawnarrowphase_new:Vx,rawphysicspipeline_new:WE,rawphysicspipeline_step:jE,rawphysicspipeline_stepWithEvents:XE,rawpidcontroller_angular_correction:Rv,rawpidcontroller_apply_angular_correction:Ev,rawpidcontroller_apply_linear_correction:Mv,rawpidcontroller_linear_correction:Tv,rawpidcontroller_new:wv,rawpidcontroller_reset_integrals:xv,rawpidcontroller_set_axes_mask:Sv,rawpidcontroller_set_kd:yv,rawpidcontroller_set_ki:bv,rawpidcontroller_set_kp:vv,rawpointcolliderprojection_colliderHandle:xM,rawpointcolliderprojection_featureId:RM,rawpointcolliderprojection_featureType:TM,rawpointcolliderprojection_isInside:EM,rawpointcolliderprojection_point:MM,rawpointprojection_isInside:yM,rawpointprojection_point:bM,rawquerypipeline_castRay:JE,rawquerypipeline_castRayAndGetNormal:KE,rawquerypipeline_castShape:nT,rawquerypipeline_collidersWithAabbIntersectingAabb:rT,rawquerypipeline_intersectionWithShape:$E,rawquerypipeline_intersectionsWithPoint:eT,rawquerypipeline_intersectionsWithRay:ZE,rawquerypipeline_intersectionsWithShape:iT,rawquerypipeline_new:qE,rawquerypipeline_projectPoint:QE,rawquerypipeline_projectPointAndGetFeature:tT,rawquerypipeline_update:YE,rawraycolliderhit_colliderHandle:RT,rawraycolliderhit_timeOfImpact:PT,rawraycolliderintersection_colliderHandle:MT,rawraycolliderintersection_featureId:kT,rawraycolliderintersection_featureType:TT,rawraycolliderintersection_normal:qT,rawraycolliderintersection_time_of_impact:AT,rawrayintersection_featureId:HT,rawrayintersection_featureType:xT,rawrayintersection_normal:XT,rawrayintersection_time_of_impact:ET,rawrigidbodyset_contains:_S,rawrigidbodyset_createRigidBody:fS,rawrigidbodyset_forEachRigidBodyHandle:mS,rawrigidbodyset_len:yT,rawrigidbodyset_new:uS,rawrigidbodyset_propagateModifiedBodyPositionsToColliders:gS,rawrigidbodyset_rbAddForce:Qy,rawrigidbodyset_rbAddForceAtPoint:iS,rawrigidbodyset_rbAddTorque:eS,rawrigidbodyset_rbAdditionalSolverIterations:sS,rawrigidbodyset_rbAngularDamping:Wy,rawrigidbodyset_rbAngvel:py,rawrigidbodyset_rbApplyImpulse:tS,rawrigidbodyset_rbApplyImpulseAtPoint:rS,rawrigidbodyset_rbApplyTorqueImpulse:nS,rawrigidbodyset_rbBodyType:zy,rawrigidbodyset_rbCollider:Oy,rawrigidbodyset_rbDominanceGroup:vy,rawrigidbodyset_rbEffectiveAngularInertia:Ly,rawrigidbodyset_rbEffectiveInvMass:Ey,rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt:Iy,rawrigidbodyset_rbEnableCcd:yy,rawrigidbodyset_rbGravityScale:Jy,rawrigidbodyset_rbInvMass:My,rawrigidbodyset_rbInvPrincipalInertiaSqrt:Ay,rawrigidbodyset_rbIsCcdEnabled:Uy,rawrigidbodyset_rbIsDynamic:Gy,rawrigidbodyset_rbIsEnabled:Yy,rawrigidbodyset_rbIsFixed:Hy,rawrigidbodyset_rbIsKinematic:ky,rawrigidbodyset_rbIsMoving:ey,rawrigidbodyset_rbIsSleeping:ty,rawrigidbodyset_rbLinearDamping:Vy,rawrigidbodyset_rbLinvel:fy,rawrigidbodyset_rbLocalCom:Ty,rawrigidbodyset_rbLockRotations:gy,rawrigidbodyset_rbLockTranslations:_y,rawrigidbodyset_rbMass:xy,rawrigidbodyset_rbNextRotation:iy,rawrigidbodyset_rbNextTranslation:ny,rawrigidbodyset_rbNumColliders:Ny,rawrigidbodyset_rbPrincipalInertia:Py,rawrigidbodyset_rbPrincipalInertiaLocalFrame:Cy,rawrigidbodyset_rbRecomputeMassPropertiesFromColliders:hy,rawrigidbodyset_rbResetForces:Zy,rawrigidbodyset_rbResetTorques:$y,rawrigidbodyset_rbRotation:$0,rawrigidbodyset_rbSetAdditionalMass:dy,rawrigidbodyset_rbSetAdditionalMassProperties:uy,rawrigidbodyset_rbSetAdditionalSolverIterations:aS,rawrigidbodyset_rbSetAngularDamping:Xy,rawrigidbodyset_rbSetAngvel:oy,rawrigidbodyset_rbSetBodyType:By,rawrigidbodyset_rbSetDominanceGroup:by,rawrigidbodyset_rbSetEnabled:qy,rawrigidbodyset_rbSetEnabledRotations:wy,rawrigidbodyset_rbSetEnabledTranslations:my,rawrigidbodyset_rbSetGravityScale:Ky,rawrigidbodyset_rbSetLinearDamping:jy,rawrigidbodyset_rbSetLinvel:ay,rawrigidbodyset_rbSetNextKinematicRotation:ly,rawrigidbodyset_rbSetNextKinematicTranslation:cy,rawrigidbodyset_rbSetRotation:sy,rawrigidbodyset_rbSetSoftCcdPrediction:Sy,rawrigidbodyset_rbSetTranslation:ry,rawrigidbodyset_rbSetUserData:cS,rawrigidbodyset_rbSleep:Q0,rawrigidbodyset_rbSoftCcdPrediction:Fy,rawrigidbodyset_rbTranslation:Z0,rawrigidbodyset_rbUserData:oS,rawrigidbodyset_rbUserForce:lS,rawrigidbodyset_rbUserTorque:hS,rawrigidbodyset_rbWakeUp:Dy,rawrigidbodyset_rbWorldCom:Ry,rawrigidbodyset_remove:pS,rawrotation_identity:fE,rawrotation_new:uE,rawrotation_w:_E,rawrotation_x:pE,rawrotation_y:LT,rawrotation_z:DT,rawsdpmatrix3_elements:TE,rawserializationpipeline_deserializeAll:wT,rawserializationpipeline_new:mT,rawserializationpipeline_serializeAll:gT,rawshape_ball:DM,rawshape_capsule:FM,rawshape_castRay:nE,rawshape_castRayAndGetNormal:iE,rawshape_castShape:KM,rawshape_cone:zM,rawshape_contactShape:$M,rawshape_containsPoint:QM,rawshape_convexHull:XM,rawshape_convexMesh:YM,rawshape_cuboid:IM,rawshape_cylinder:NM,rawshape_halfspace:UM,rawshape_heightfield:GM,rawshape_intersectsRay:eE,rawshape_intersectsShape:ZM,rawshape_polyline:HM,rawshape_projectPoint:tE,rawshape_roundCone:BM,rawshape_roundConvexHull:qM,rawshape_roundConvexMesh:JM,rawshape_roundCuboid:LM,rawshape_roundCylinder:OM,rawshape_roundTriangle:jM,rawshape_segment:VM,rawshape_triangle:WM,rawshape_trimesh:kM,rawshapecasthit_normal1:aE,rawshapecasthit_normal2:oE,rawshapecasthit_time_of_impact:IT,rawshapecasthit_witness1:sE,rawshapecasthit_witness2:ZT,rawshapecontact_distance:ST,rawshapecontact_normal1:YT,rawshapecontact_normal2:VT,rawshapecontact_point1:WT,rawshapecontact_point2:jT,rawvector_new:gE,rawvector_set_x:wE,rawvector_set_y:rR,rawvector_set_z:vE,rawvector_x:UT,rawvector_xyz:bE,rawvector_xzy:xE,rawvector_y:FT,rawvector_yxz:yE,rawvector_yzx:ME,rawvector_z:NT,rawvector_zero:mE,rawvector_zxy:SE,rawvector_zyx:EE,version:Dw},Symbol.toStringTag,{value:"Module"}));$g(lR);class _n{constructor(t,e,n){this.x=t,this.y=e,this.z=n}}class D{static new(t,e,n){return new _n(t,e,n)}static intoRaw(t){return new I(t.x,t.y,t.z)}static zeros(){return D.new(0,0,0)}static fromRaw(t){if(!t)return null;let e=D.new(t.x,t.y,t.z);return t.free(),e}static copy(t,e){t.x=e.x,t.y=e.y,t.z=e.z}}class Cl{constructor(t,e,n,r){this.x=t,this.y=e,this.z=n,this.w=r}}class kt{static identity(){return new Cl(0,0,0,1)}static fromRaw(t){if(!t)return null;let e=new Cl(t.x,t.y,t.z,t.w);return t.free(),e}static intoRaw(t){return new Ht(t.x,t.y,t.z,t.w)}static copy(t,e){t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w}}class hR{get m11(){return this.elements[0]}get m12(){return this.elements[1]}get m21(){return this.m12}get m13(){return this.elements[2]}get m31(){return this.m13}get m22(){return this.elements[3]}get m23(){return this.elements[4]}get m32(){return this.m23}get m33(){return this.elements[5]}constructor(t){this.elements=t}}class Pl{static fromRaw(t){const e=new hR(t.elements());return t.free(),e}}var fn;(function(i){i[i.Dynamic=0]="Dynamic",i[i.Fixed=1]="Fixed",i[i.KinematicPositionBased=2]="KinematicPositionBased",i[i.KinematicVelocityBased=3]="KinematicVelocityBased"})(fn||(fn={}));class Il{constructor(t,e,n){this.rawSet=t,this.colliderSet=e,this.handle=n}finalizeDeserialization(t){this.colliderSet=t}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(t,e){return this.rawSet.rbLockTranslations(this.handle,t,e)}lockRotations(t,e){return this.rawSet.rbLockRotations(this.handle,t,e)}setEnabledTranslations(t,e,n,r){return this.rawSet.rbSetEnabledTranslations(this.handle,t,e,n,r)}restrictTranslations(t,e,n,r){this.setEnabledTranslations(t,e,n,r)}setEnabledRotations(t,e,n,r){return this.rawSet.rbSetEnabledRotations(this.handle,t,e,n,r)}restrictRotations(t,e,n,r){this.setEnabledRotations(t,e,n,r)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(t){this.rawSet.rbSetDominanceGroup(this.handle,t)}additionalSolverIterations(){return this.rawSet.rbAdditionalSolverIterations(this.handle)}setAdditionalSolverIterations(t){this.rawSet.rbSetAdditionalSolverIterations(this.handle,t)}enableCcd(t){this.rawSet.rbEnableCcd(this.handle,t)}setSoftCcdPrediction(t){this.rawSet.rbSetSoftCcdPrediction(this.handle,t)}softCcdPrediction(){return this.rawSet.rbSoftCcdPrediction(this.handle)}translation(){let t=this.rawSet.rbTranslation(this.handle);return D.fromRaw(t)}rotation(){let t=this.rawSet.rbRotation(this.handle);return kt.fromRaw(t)}nextTranslation(){let t=this.rawSet.rbNextTranslation(this.handle);return D.fromRaw(t)}nextRotation(){let t=this.rawSet.rbNextRotation(this.handle);return kt.fromRaw(t)}setTranslation(t,e){this.rawSet.rbSetTranslation(this.handle,t.x,t.y,t.z,e)}setLinvel(t,e){let n=D.intoRaw(t);this.rawSet.rbSetLinvel(this.handle,n,e),n.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(t,e){this.rawSet.rbSetGravityScale(this.handle,t,e)}setRotation(t,e){this.rawSet.rbSetRotation(this.handle,t.x,t.y,t.z,t.w,e)}setAngvel(t,e){let n=D.intoRaw(t);this.rawSet.rbSetAngvel(this.handle,n,e),n.free()}setNextKinematicTranslation(t){this.rawSet.rbSetNextKinematicTranslation(this.handle,t.x,t.y,t.z)}setNextKinematicRotation(t){this.rawSet.rbSetNextKinematicRotation(this.handle,t.x,t.y,t.z,t.w)}linvel(){return D.fromRaw(this.rawSet.rbLinvel(this.handle))}angvel(){return D.fromRaw(this.rawSet.rbAngvel(this.handle))}mass(){return this.rawSet.rbMass(this.handle)}effectiveInvMass(){return D.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle))}invMass(){return this.rawSet.rbInvMass(this.handle)}localCom(){return D.fromRaw(this.rawSet.rbLocalCom(this.handle))}worldCom(){return D.fromRaw(this.rawSet.rbWorldCom(this.handle))}invPrincipalInertiaSqrt(){return D.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle))}principalInertia(){return D.fromRaw(this.rawSet.rbPrincipalInertia(this.handle))}principalInertiaLocalFrame(){return kt.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle))}effectiveWorldInvInertiaSqrt(){return Pl.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle))}effectiveAngularInertia(){return Pl.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle))}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){return this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(t){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,t))}setEnabled(t){this.rawSet.rbSetEnabled(this.handle,t)}isEnabled(){return this.rawSet.rbIsEnabled(this.handle)}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(t,e){return this.rawSet.rbSetBodyType(this.handle,t,e)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(t){this.rawSet.rbSetLinearDamping(this.handle,t)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(t,e){this.rawSet.rbSetAdditionalMass(this.handle,t,e)}setAdditionalMassProperties(t,e,n,r,s){let a=D.intoRaw(e),o=D.intoRaw(n),c=kt.intoRaw(r);this.rawSet.rbSetAdditionalMassProperties(this.handle,t,a,o,c,s),a.free(),o.free(),c.free()}setAngularDamping(t){this.rawSet.rbSetAngularDamping(this.handle,t)}resetForces(t){this.rawSet.rbResetForces(this.handle,t)}resetTorques(t){this.rawSet.rbResetTorques(this.handle,t)}addForce(t,e){const n=D.intoRaw(t);this.rawSet.rbAddForce(this.handle,n,e),n.free()}applyImpulse(t,e){const n=D.intoRaw(t);this.rawSet.rbApplyImpulse(this.handle,n,e),n.free()}addTorque(t,e){const n=D.intoRaw(t);this.rawSet.rbAddTorque(this.handle,n,e),n.free()}applyTorqueImpulse(t,e){const n=D.intoRaw(t);this.rawSet.rbApplyTorqueImpulse(this.handle,n,e),n.free()}addForceAtPoint(t,e,n){const r=D.intoRaw(t),s=D.intoRaw(e);this.rawSet.rbAddForceAtPoint(this.handle,r,s,n),r.free(),s.free()}applyImpulseAtPoint(t,e,n){const r=D.intoRaw(t),s=D.intoRaw(e);this.rawSet.rbApplyImpulseAtPoint(this.handle,r,s,n),r.free(),s.free()}userForce(){return D.fromRaw(this.rawSet.rbUserForce(this.handle))}userTorque(){return D.fromRaw(this.rawSet.rbUserTorque(this.handle))}}class qe{constructor(t){this.enabled=!0,this.status=t,this.translation=D.zeros(),this.rotation=kt.identity(),this.gravityScale=1,this.linvel=D.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=D.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=D.zeros(),this.principalAngularInertia=D.zeros(),this.angularInertiaLocalFrame=kt.identity(),this.translationsEnabledZ=!0,this.rotationsEnabledX=!0,this.rotationsEnabledY=!0,this.rotationsEnabledZ=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.softCcdPrediction=0,this.dominanceGroup=0,this.additionalSolverIterations=0}static dynamic(){return new qe(fn.Dynamic)}static kinematicPositionBased(){return new qe(fn.KinematicPositionBased)}static kinematicVelocityBased(){return new qe(fn.KinematicVelocityBased)}static fixed(){return new qe(fn.Fixed)}static newDynamic(){return new qe(fn.Dynamic)}static newKinematicPositionBased(){return new qe(fn.KinematicPositionBased)}static newKinematicVelocityBased(){return new qe(fn.KinematicVelocityBased)}static newStatic(){return new qe(fn.Fixed)}setDominanceGroup(t){return this.dominanceGroup=t,this}setAdditionalSolverIterations(t){return this.additionalSolverIterations=t,this}setEnabled(t){return this.enabled=t,this}setTranslation(t,e,n){if(typeof t!="number"||typeof e!="number"||typeof n!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:t,y:e,z:n},this}setRotation(t){return kt.copy(this.rotation,t),this}setGravityScale(t){return this.gravityScale=t,this}setAdditionalMass(t){return this.mass=t,this.massOnly=!0,this}setLinvel(t,e,n){if(typeof t!="number"||typeof e!="number"||typeof n!="number")throw TypeError("The linvel components must be numbers.");return this.linvel={x:t,y:e,z:n},this}setAngvel(t){return D.copy(this.angvel,t),this}setAdditionalMassProperties(t,e,n,r){return this.mass=t,D.copy(this.centerOfMass,e),D.copy(this.principalAngularInertia,n),kt.copy(this.angularInertiaLocalFrame,r),this.massOnly=!1,this}enabledTranslations(t,e,n){return this.translationsEnabledX=t,this.translationsEnabledY=e,this.translationsEnabledZ=n,this}restrictTranslations(t,e,n){return this.enabledTranslations(t,e,n)}lockTranslations(){return this.enabledTranslations(!1,!1,!1)}enabledRotations(t,e,n){return this.rotationsEnabledX=t,this.rotationsEnabledY=e,this.rotationsEnabledZ=n,this}restrictRotations(t,e,n){return this.enabledRotations(t,e,n)}lockRotations(){return this.restrictRotations(!1,!1,!1)}setLinearDamping(t){return this.linearDamping=t,this}setAngularDamping(t){return this.angularDamping=t,this}setCanSleep(t){return this.canSleep=t,this}setSleeping(t){return this.sleeping=t,this}setCcdEnabled(t){return this.ccdEnabled=t,this}setSoftCcdPrediction(t){return this.softCcdPrediction=t,this}setUserData(t){return this.userData=t,this}}class As{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=new Array,this.size=0}set(t,e){let n=this.index(t);for(;this.data.length<=n;)this.data.push(null);this.data[n]==null&&(this.size+=1),this.data[n]=e}len(){return this.size}delete(t){let e=this.index(t);e<this.data.length&&(this.data[e]!=null&&(this.size-=1),this.data[e]=null)}clear(){this.data=new Array}get(t){let e=this.index(t);return e<this.data.length?this.data[e]:null}forEach(t){for(const e of this.data)e!=null&&t(e)}getAll(){return this.data.filter(t=>t!=null)}index(t){return this.fconv[0]=t,this.uconv[0]}}class dR{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new de,this.map=new As,t&&t.forEachRigidBodyHandle(e=>{this.map.set(e,new Il(t,null,e))})}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createRigidBody(t,e){let n=D.intoRaw(e.translation),r=kt.intoRaw(e.rotation),s=D.intoRaw(e.linvel),a=D.intoRaw(e.centerOfMass),o=D.intoRaw(e.angvel),c=D.intoRaw(e.principalAngularInertia),l=kt.intoRaw(e.angularInertiaLocalFrame),h=this.raw.createRigidBody(e.enabled,n,r,e.gravityScale,e.mass,e.massOnly,a,s,o,c,l,e.translationsEnabledX,e.translationsEnabledY,e.translationsEnabledZ,e.rotationsEnabledX,e.rotationsEnabledY,e.rotationsEnabledZ,e.linearDamping,e.angularDamping,e.status,e.canSleep,e.sleeping,e.softCcdPrediction,e.ccdEnabled,e.dominanceGroup,e.additionalSolverIterations);n.free(),r.free(),s.free(),a.free(),o.free(),c.free(),l.free();const u=new Il(this.raw,t,h);return u.userData=e.userData,this.map.set(h,u),u}remove(t,e,n,r,s){for(let a=0;a<this.raw.rbNumColliders(t);a+=1)n.unmap(this.raw.rbCollider(t,a));r.forEachJointHandleAttachedToRigidBody(t,a=>r.unmap(a)),s.forEachJointHandleAttachedToRigidBody(t,a=>s.unmap(a)),this.raw.remove(t,e.raw,n.raw,r.raw,s.raw),this.map.delete(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}forEachActiveRigidBody(t,e){t.forEachActiveRigidBodyHandle(n=>{e(this.get(n))})}getAll(){return this.map.getAll()}}class uR{constructor(t){this.raw=t||new gi}free(){this.raw&&this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get contact_erp(){return this.raw.contact_erp}get lengthUnit(){return this.raw.lengthUnit}get normalizedAllowedLinearError(){return this.raw.normalizedAllowedLinearError}get normalizedPredictionDistance(){return this.raw.normalizedPredictionDistance}get numSolverIterations(){return this.raw.numSolverIterations}get numAdditionalFrictionIterations(){return this.raw.numAdditionalFrictionIterations}get numInternalPgsIterations(){return this.raw.numInternalPgsIterations}get minIslandSize(){return this.raw.minIslandSize}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}set dt(t){this.raw.dt=t}set contact_natural_frequency(t){this.raw.contact_natural_frequency=t}set lengthUnit(t){this.raw.lengthUnit=t}set normalizedAllowedLinearError(t){this.raw.normalizedAllowedLinearError=t}set normalizedPredictionDistance(t){this.raw.normalizedPredictionDistance=t}set numSolverIterations(t){this.raw.numSolverIterations=t}set numAdditionalFrictionIterations(t){this.raw.numAdditionalFrictionIterations=t}set numInternalPgsIterations(t){this.raw.numInternalPgsIterations=t}set minIslandSize(t){this.raw.minIslandSize=t}set maxCcdSubsteps(t){this.raw.maxCcdSubsteps=t}switchToStandardPgsSolver(){this.raw.switchToStandardPgsSolver()}switchToSmallStepsPgsSolver(){this.raw.switchToSmallStepsPgsSolver()}switchToSmallStepsPgsSolverWithoutWarmstart(){this.raw.switchToSmallStepsPgsSolverWithoutWarmstart()}}var Ll;(function(i){i[i.Revolute=0]="Revolute",i[i.Fixed=1]="Fixed",i[i.Prismatic=2]="Prismatic",i[i.Rope=3]="Rope",i[i.Spring=4]="Spring",i[i.Spherical=5]="Spherical",i[i.Generic=6]="Generic"})(Ll||(Ll={}));var Dl;(function(i){i[i.AccelerationBased=0]="AccelerationBased",i[i.ForceBased=1]="ForceBased"})(Dl||(Dl={}));var Ul;(function(i){i[i.LinX=1]="LinX",i[i.LinY=2]="LinY",i[i.LinZ=4]="LinZ",i[i.AngX=8]="AngX",i[i.AngY=16]="AngY",i[i.AngZ=32]="AngZ"})(Ul||(Ul={}));class vn{constructor(t,e,n){this.rawSet=t,this.bodySet=e,this.handle=n}static newTyped(t,e,n){switch(t.jointType(n)){case ln.Revolute:return new gR(t,e,n);case ln.Prismatic:return new mR(t,e,n);case ln.Fixed:return new fR(t,e,n);case ln.Spring:return new _R(t,e,n);case ln.Rope:return new pR(t,e,n);case ln.Spherical:return new vR(t,e,n);case ln.Generic:return new wR(t,e,n);default:return new vn(t,e,n)}}finalizeDeserialization(t){this.bodySet=t}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}frameX1(){return kt.fromRaw(this.rawSet.jointFrameX1(this.handle))}frameX2(){return kt.fromRaw(this.rawSet.jointFrameX2(this.handle))}anchor1(){return D.fromRaw(this.rawSet.jointAnchor1(this.handle))}anchor2(){return D.fromRaw(this.rawSet.jointAnchor2(this.handle))}setAnchor1(t){const e=D.intoRaw(t);this.rawSet.jointSetAnchor1(this.handle,e),e.free()}setAnchor2(t){const e=D.intoRaw(t);this.rawSet.jointSetAnchor2(this.handle,e),e.free()}setContactsEnabled(t){this.rawSet.jointSetContactsEnabled(this.handle,t)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class Ph extends vn{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(t,e){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),t,e)}configureMotorModel(t){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),t)}configureMotorVelocity(t,e){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),t,e)}configureMotorPosition(t,e,n){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),t,e,n)}configureMotor(t,e,n,r){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),t,e,n,r)}}class fR extends vn{}class pR extends vn{}class _R extends vn{}class mR extends Ph{rawAxis(){return Ss.LinX}}class gR extends Ph{rawAxis(){return Ss.AngX}}class wR extends vn{}class vR extends vn{}class bR{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new Un,this.map=new As,t&&t.forEachJointHandle(e=>{this.map.set(e,vn.newTyped(t,null,e))})}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createJoint(t,e,n,r,s){const a=e.intoRaw(),o=this.raw.createJoint(a,n,r,s);a.free();let c=vn.newTyped(this.raw,t,o);return this.map.set(o,c),c}remove(t,e){this.raw.remove(t,e),this.unmap(t)}forEachJointHandleAttachedToRigidBody(t,e){this.raw.forEachJointAttachedToRigidBody(t,e)}unmap(t){this.map.delete(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}getAll(){return this.map.getAll()}}class wi{constructor(t,e){this.rawSet=t,this.handle=e}static newTyped(t,e){switch(t.jointType(e)){case ln.Revolute:return new xR(t,e);case ln.Prismatic:return new SR(t,e);case ln.Fixed:return new yR(t,e);case ln.Spherical:return new MR(t,e);default:return new wi(t,e)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(t){this.rawSet.jointSetContactsEnabled(this.handle,t)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class Ih extends wi{}class yR extends wi{}class SR extends Ih{rawAxis(){return Ss.LinX}}class xR extends Ih{rawAxis(){return Ss.AngX}}class MR extends wi{}class ER{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new Nn,this.map=new As,t&&t.forEachJointHandle(e=>{this.map.set(e,wi.newTyped(this.raw,e))})}createJoint(t,e,n,r){const s=t.intoRaw(),a=this.raw.createJoint(s,e,n,r);s.free();let o=wi.newTyped(this.raw,a);return this.map.set(a,o),o}remove(t,e){this.raw.remove(t,e),this.map.delete(t)}unmap(t){this.map.delete(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}forEachJointHandleAttachedToRigidBody(t,e){this.raw.forEachJointAttachedToRigidBody(t,e)}getAll(){return this.map.getAll()}}var ps;(function(i){i[i.Average=0]="Average",i[i.Min=1]="Min",i[i.Multiply=2]="Multiply",i[i.Max=3]="Max"})(ps||(ps={}));class TR{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new po}}class RR{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new Fn}forEachActiveRigidBodyHandle(t){this.raw.forEachActiveRigidBodyHandle(t)}}class AR{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new mi}}class CR{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new Kn,this.tempManifold=new PR(null)}contactPairsWith(t,e){this.raw.contact_pairs_with(t,e)}intersectionPairsWith(t,e){this.raw.intersection_pairs_with(t,e)}contactPair(t,e,n){const r=this.raw.contact_pair(t,e);if(r){const s=r.collider1()!=t;let a;for(a=0;a<r.numContactManifolds();++a)this.tempManifold.raw=r.contactManifold(a),this.tempManifold.raw&&n(this.tempManifold,s),this.tempManifold.free();r.free()}}intersectionPair(t,e){return this.raw.intersection_pair(t,e)}}class PR{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t}normal(){return D.fromRaw(this.raw.normal())}localNormal1(){return D.fromRaw(this.raw.local_n1())}localNormal2(){return D.fromRaw(this.raw.local_n2())}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(t){return D.fromRaw(this.raw.contact_local_p1(t))}localContactPoint2(t){return D.fromRaw(this.raw.contact_local_p2(t))}contactDist(t){return this.raw.contact_dist(t)}contactFid1(t){return this.raw.contact_fid1(t)}contactFid2(t){return this.raw.contact_fid2(t)}contactImpulse(t){return this.raw.contact_impulse(t)}contactTangentImpulseX(t){return this.raw.contact_tangent_impulse_x(t)}contactTangentImpulseY(t){return this.raw.contact_tangent_impulse_y(t)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(t){return D.fromRaw(this.raw.solver_contact_point(t))}solverContactDist(t){return this.raw.solver_contact_dist(t)}solverContactFriction(t){return this.raw.solver_contact_friction(t)}solverContactRestitution(t){return this.raw.solver_contact_restitution(t)}solverContactTangentVelocity(t){return D.fromRaw(this.raw.solver_contact_tangent_velocity(t))}}class vr{constructor(t,e,n,r,s){this.distance=t,this.point1=e,this.point2=n,this.normal1=r,this.normal2=s}static fromRaw(t){if(!t)return null;const e=new vr(t.distance(),D.fromRaw(t.point1()),D.fromRaw(t.point2()),D.fromRaw(t.normal1()),D.fromRaw(t.normal2()));return t.free(),e}}var br;(function(i){i[i.Vertex=0]="Vertex",i[i.Edge=1]="Edge",i[i.Face=2]="Face",i[i.Unknown=3]="Unknown"})(br||(br={}));class Cs{constructor(t,e){this.point=t,this.isInside=e}static fromRaw(t){if(!t)return null;const e=new Cs(D.fromRaw(t.point()),t.isInside());return t.free(),e}}class _s{constructor(t,e,n,r,s){this.featureType=br.Unknown,this.featureId=void 0,this.collider=t,this.point=e,this.isInside=n,s!==void 0&&(this.featureId=s),r!==void 0&&(this.featureType=r)}static fromRaw(t,e){if(!e)return null;const n=new _s(t.get(e.colliderHandle()),D.fromRaw(e.point()),e.isInside(),e.featureType(),e.featureId());return e.free(),n}}class IR{constructor(t,e){this.origin=t,this.dir=e}pointAt(t){return{x:this.origin.x+this.dir.x*t,y:this.origin.y+this.dir.y*t,z:this.origin.z+this.dir.z*t}}}class Ps{constructor(t,e,n,r){this.featureType=br.Unknown,this.featureId=void 0,this.timeOfImpact=t,this.normal=e,r!==void 0&&(this.featureId=r),n!==void 0&&(this.featureType=n)}static fromRaw(t){if(!t)return null;const e=new Ps(t.time_of_impact(),D.fromRaw(t.normal()),t.featureType(),t.featureId());return t.free(),e}}class ms{constructor(t,e,n,r,s){this.featureType=br.Unknown,this.featureId=void 0,this.collider=t,this.timeOfImpact=e,this.normal=n,s!==void 0&&(this.featureId=s),r!==void 0&&(this.featureType=r)}static fromRaw(t,e){if(!e)return null;const n=new ms(t.get(e.colliderHandle()),e.time_of_impact(),D.fromRaw(e.normal()),e.featureType(),e.featureId());return e.free(),n}}class Wo{constructor(t,e){this.collider=t,this.timeOfImpact=e}static fromRaw(t,e){if(!e)return null;const n=new Wo(t.get(e.colliderHandle()),e.timeOfImpact());return e.free(),n}}class Mr{constructor(t,e,n,r,s){this.time_of_impact=t,this.witness1=e,this.witness2=n,this.normal1=r,this.normal2=s}static fromRaw(t,e){if(!e)return null;const n=new Mr(e.time_of_impact(),D.fromRaw(e.witness1()),D.fromRaw(e.witness2()),D.fromRaw(e.normal1()),D.fromRaw(e.normal2()));return e.free(),n}}class Is extends Mr{constructor(t,e,n,r,s,a){super(e,n,r,s,a),this.collider=t}static fromRaw(t,e){if(!e)return null;const n=new Is(t.get(e.colliderHandle()),e.time_of_impact(),D.fromRaw(e.witness1()),D.fromRaw(e.witness2()),D.fromRaw(e.normal1()),D.fromRaw(e.normal2()));return e.free(),n}}class Pe{static fromRaw(t,e){const n=t.coShapeType(e);let r,s,a,o,c,l,h;switch(n){case Le.Ball:return new Lh(t.coRadius(e));case Le.Cuboid:return r=t.coHalfExtents(e),new Dh(r.x,r.y,r.z);case Le.RoundCuboid:return r=t.coHalfExtents(e),s=t.coRoundRadius(e),new Uh(r.x,r.y,r.z,s);case Le.Capsule:return c=t.coHalfHeight(e),l=t.coRadius(e),new Fh(c,l);case Le.Segment:return a=t.coVertices(e),new Nh(D.new(a[0],a[1],a[2]),D.new(a[3],a[4],a[5]));case Le.Polyline:return a=t.coVertices(e),o=t.coIndices(e),new Bh(a,o);case Le.Triangle:return a=t.coVertices(e),new Oh(D.new(a[0],a[1],a[2]),D.new(a[3],a[4],a[5]),D.new(a[6],a[7],a[8]));case Le.RoundTriangle:return a=t.coVertices(e),s=t.coRoundRadius(e),new zh(D.new(a[0],a[1],a[2]),D.new(a[3],a[4],a[5]),D.new(a[6],a[7],a[8]),s);case Le.HalfSpace:return h=D.fromRaw(t.coHalfspaceNormal(e)),new LR(h);case Le.TriMesh:a=t.coVertices(e),o=t.coIndices(e);const u=t.coTriMeshFlags(e);return new Hh(a,o,u);case Le.HeightField:const f=t.coHeightfieldScale(e),_=t.coHeightfieldHeights(e),w=t.coHeightfieldNRows(e),b=t.coHeightfieldNCols(e),g=t.coHeightFieldFlags(e);return new kh(w,b,_,f,g);case Le.ConvexPolyhedron:return a=t.coVertices(e),o=t.coIndices(e),new _o(a,o);case Le.RoundConvexPolyhedron:return a=t.coVertices(e),o=t.coIndices(e),s=t.coRoundRadius(e),new mo(a,o,s);case Le.Cylinder:return c=t.coHalfHeight(e),l=t.coRadius(e),new Gh(c,l);case Le.RoundCylinder:return c=t.coHalfHeight(e),l=t.coRadius(e),s=t.coRoundRadius(e),new Vh(c,l,s);case Le.Cone:return c=t.coHalfHeight(e),l=t.coRadius(e),new Wh(c,l);case Le.RoundCone:return c=t.coHalfHeight(e),l=t.coRadius(e),s=t.coRoundRadius(e),new jh(c,l,s);default:throw new Error("unknown shape type: "+n)}}castShape(t,e,n,r,s,a,o,c,l,h){let u=D.intoRaw(t),f=kt.intoRaw(e),_=D.intoRaw(n),w=D.intoRaw(s),b=kt.intoRaw(a),g=D.intoRaw(o),m=this.intoRaw(),R=r.intoRaw(),T=Mr.fromRaw(null,m.castShape(u,f,_,R,w,b,g,c,l,h));return u.free(),f.free(),_.free(),w.free(),b.free(),g.free(),m.free(),R.free(),T}intersectsShape(t,e,n,r,s){let a=D.intoRaw(t),o=kt.intoRaw(e),c=D.intoRaw(r),l=kt.intoRaw(s),h=this.intoRaw(),u=n.intoRaw(),f=h.intersectsShape(a,o,u,c,l);return a.free(),o.free(),c.free(),l.free(),h.free(),u.free(),f}contactShape(t,e,n,r,s,a){let o=D.intoRaw(t),c=kt.intoRaw(e),l=D.intoRaw(r),h=kt.intoRaw(s),u=this.intoRaw(),f=n.intoRaw(),_=vr.fromRaw(u.contactShape(o,c,f,l,h,a));return o.free(),c.free(),l.free(),h.free(),u.free(),f.free(),_}containsPoint(t,e,n){let r=D.intoRaw(t),s=kt.intoRaw(e),a=D.intoRaw(n),o=this.intoRaw(),c=o.containsPoint(r,s,a);return r.free(),s.free(),a.free(),o.free(),c}projectPoint(t,e,n,r){let s=D.intoRaw(t),a=kt.intoRaw(e),o=D.intoRaw(n),c=this.intoRaw(),l=Cs.fromRaw(c.projectPoint(s,a,o,r));return s.free(),a.free(),o.free(),c.free(),l}intersectsRay(t,e,n,r){let s=D.intoRaw(e),a=kt.intoRaw(n),o=D.intoRaw(t.origin),c=D.intoRaw(t.dir),l=this.intoRaw(),h=l.intersectsRay(s,a,o,c,r);return s.free(),a.free(),o.free(),c.free(),l.free(),h}castRay(t,e,n,r,s){let a=D.intoRaw(e),o=kt.intoRaw(n),c=D.intoRaw(t.origin),l=D.intoRaw(t.dir),h=this.intoRaw(),u=h.castRay(a,o,c,l,r,s);return a.free(),o.free(),c.free(),l.free(),h.free(),u}castRayAndGetNormal(t,e,n,r,s){let a=D.intoRaw(e),o=kt.intoRaw(n),c=D.intoRaw(t.origin),l=D.intoRaw(t.dir),h=this.intoRaw(),u=Ps.fromRaw(h.castRayAndGetNormal(a,o,c,l,r,s));return a.free(),o.free(),c.free(),l.free(),h.free(),u}}var Re;(function(i){i[i.Ball=0]="Ball",i[i.Cuboid=1]="Cuboid",i[i.Capsule=2]="Capsule",i[i.Segment=3]="Segment",i[i.Polyline=4]="Polyline",i[i.Triangle=5]="Triangle",i[i.TriMesh=6]="TriMesh",i[i.HeightField=7]="HeightField",i[i.ConvexPolyhedron=9]="ConvexPolyhedron",i[i.Cylinder=10]="Cylinder",i[i.Cone=11]="Cone",i[i.RoundCuboid=12]="RoundCuboid",i[i.RoundTriangle=13]="RoundTriangle",i[i.RoundCylinder=14]="RoundCylinder",i[i.RoundCone=15]="RoundCone",i[i.RoundConvexPolyhedron=16]="RoundConvexPolyhedron",i[i.HalfSpace=17]="HalfSpace"})(Re||(Re={}));var Fl;(function(i){i[i.FIX_INTERNAL_EDGES=1]="FIX_INTERNAL_EDGES"})(Fl||(Fl={}));var Nl;(function(i){i[i.DELETE_BAD_TOPOLOGY_TRIANGLES=4]="DELETE_BAD_TOPOLOGY_TRIANGLES",i[i.ORIENTED=8]="ORIENTED",i[i.MERGE_DUPLICATE_VERTICES=16]="MERGE_DUPLICATE_VERTICES",i[i.DELETE_DEGENERATE_TRIANGLES=32]="DELETE_DEGENERATE_TRIANGLES",i[i.DELETE_DUPLICATE_TRIANGLES=64]="DELETE_DUPLICATE_TRIANGLES",i[i.FIX_INTERNAL_EDGES=152]="FIX_INTERNAL_EDGES"})(Nl||(Nl={}));class Lh extends Pe{constructor(t){super(),this.type=Re.Ball,this.radius=t}intoRaw(){return At.ball(this.radius)}}class LR extends Pe{constructor(t){super(),this.type=Re.HalfSpace,this.normal=t}intoRaw(){let t=D.intoRaw(this.normal),e=At.halfspace(t);return t.free(),e}}class Dh extends Pe{constructor(t,e,n){super(),this.type=Re.Cuboid,this.halfExtents=D.new(t,e,n)}intoRaw(){return At.cuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z)}}class Uh extends Pe{constructor(t,e,n,r){super(),this.type=Re.RoundCuboid,this.halfExtents=D.new(t,e,n),this.borderRadius=r}intoRaw(){return At.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z,this.borderRadius)}}class Fh extends Pe{constructor(t,e){super(),this.type=Re.Capsule,this.halfHeight=t,this.radius=e}intoRaw(){return At.capsule(this.halfHeight,this.radius)}}class Nh extends Pe{constructor(t,e){super(),this.type=Re.Segment,this.a=t,this.b=e}intoRaw(){let t=D.intoRaw(this.a),e=D.intoRaw(this.b),n=At.segment(t,e);return t.free(),e.free(),n}}class Oh extends Pe{constructor(t,e,n){super(),this.type=Re.Triangle,this.a=t,this.b=e,this.c=n}intoRaw(){let t=D.intoRaw(this.a),e=D.intoRaw(this.b),n=D.intoRaw(this.c),r=At.triangle(t,e,n);return t.free(),e.free(),n.free(),r}}class zh extends Pe{constructor(t,e,n,r){super(),this.type=Re.RoundTriangle,this.a=t,this.b=e,this.c=n,this.borderRadius=r}intoRaw(){let t=D.intoRaw(this.a),e=D.intoRaw(this.b),n=D.intoRaw(this.c),r=At.roundTriangle(t,e,n,this.borderRadius);return t.free(),e.free(),n.free(),r}}class Bh extends Pe{constructor(t,e){super(),this.type=Re.Polyline,this.vertices=t,this.indices=e??new Uint32Array(0)}intoRaw(){return At.polyline(this.vertices,this.indices)}}class Hh extends Pe{constructor(t,e,n){super(),this.type=Re.TriMesh,this.vertices=t,this.indices=e,this.flags=n}intoRaw(){return At.trimesh(this.vertices,this.indices,this.flags)}}class _o extends Pe{constructor(t,e){super(),this.type=Re.ConvexPolyhedron,this.vertices=t,this.indices=e}intoRaw(){return this.indices?At.convexMesh(this.vertices,this.indices):At.convexHull(this.vertices)}}class mo extends Pe{constructor(t,e,n){super(),this.type=Re.RoundConvexPolyhedron,this.vertices=t,this.indices=e,this.borderRadius=n}intoRaw(){return this.indices?At.roundConvexMesh(this.vertices,this.indices,this.borderRadius):At.roundConvexHull(this.vertices,this.borderRadius)}}class kh extends Pe{constructor(t,e,n,r,s){super(),this.type=Re.HeightField,this.nrows=t,this.ncols=e,this.heights=n,this.scale=r,this.flags=s}intoRaw(){let t=D.intoRaw(this.scale),e=At.heightfield(this.nrows,this.ncols,this.heights,t,this.flags);return t.free(),e}}class Gh extends Pe{constructor(t,e){super(),this.type=Re.Cylinder,this.halfHeight=t,this.radius=e}intoRaw(){return At.cylinder(this.halfHeight,this.radius)}}class Vh extends Pe{constructor(t,e,n){super(),this.type=Re.RoundCylinder,this.borderRadius=n,this.halfHeight=t,this.radius=e}intoRaw(){return At.roundCylinder(this.halfHeight,this.radius,this.borderRadius)}}class Wh extends Pe{constructor(t,e){super(),this.type=Re.Cone,this.halfHeight=t,this.radius=e}intoRaw(){return At.cone(this.halfHeight,this.radius)}}class jh extends Pe{constructor(t,e,n){super(),this.type=Re.RoundCone,this.halfHeight=t,this.radius=e,this.borderRadius=n}intoRaw(){return At.roundCone(this.halfHeight,this.radius,this.borderRadius)}}class DR{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new ow}step(t,e,n,r,s,a,o,c,l,h,u,f){let _=D.intoRaw(t);u?this.raw.stepWithEvents(_,e.raw,n.raw,r.raw,s.raw,a.raw,o.raw,c.raw,l.raw,h.raw,u.raw,f,f?f.filterContactPair:null,f?f.filterIntersectionPair:null):this.raw.step(_,e.raw,n.raw,r.raw,s.raw,a.raw,o.raw,c.raw,l.raw,h.raw),_.free()}}var Ol;(function(i){i[i.EXCLUDE_FIXED=1]="EXCLUDE_FIXED",i[i.EXCLUDE_KINEMATIC=2]="EXCLUDE_KINEMATIC",i[i.EXCLUDE_DYNAMIC=4]="EXCLUDE_DYNAMIC",i[i.EXCLUDE_SENSORS=8]="EXCLUDE_SENSORS",i[i.EXCLUDE_SOLIDS=16]="EXCLUDE_SOLIDS",i[i.ONLY_DYNAMIC=3]="ONLY_DYNAMIC",i[i.ONLY_KINEMATIC=5]="ONLY_KINEMATIC",i[i.ONLY_FIXED=6]="ONLY_FIXED"})(Ol||(Ol={}));class UR{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new Go}update(t){this.raw.update(t.raw)}castRay(t,e,n,r,s,a,o,c,l,h){let u=D.intoRaw(n.origin),f=D.intoRaw(n.dir),_=Wo.fromRaw(e,this.raw.castRay(t.raw,e.raw,u,f,r,s,a,o,c,l,h));return u.free(),f.free(),_}castRayAndGetNormal(t,e,n,r,s,a,o,c,l,h){let u=D.intoRaw(n.origin),f=D.intoRaw(n.dir),_=ms.fromRaw(e,this.raw.castRayAndGetNormal(t.raw,e.raw,u,f,r,s,a,o,c,l,h));return u.free(),f.free(),_}intersectionsWithRay(t,e,n,r,s,a,o,c,l,h,u){let f=D.intoRaw(n.origin),_=D.intoRaw(n.dir),w=b=>a(ms.fromRaw(e,b));this.raw.intersectionsWithRay(t.raw,e.raw,f,_,r,s,w,o,c,l,h,u),f.free(),_.free()}intersectionWithShape(t,e,n,r,s,a,o,c,l,h){let u=D.intoRaw(n),f=kt.intoRaw(r),_=s.intoRaw(),w=this.raw.intersectionWithShape(t.raw,e.raw,u,f,_,a,o,c,l,h);return u.free(),f.free(),_.free(),w}projectPoint(t,e,n,r,s,a,o,c,l){let h=D.intoRaw(n),u=_s.fromRaw(e,this.raw.projectPoint(t.raw,e.raw,h,r,s,a,o,c,l));return h.free(),u}projectPointAndGetFeature(t,e,n,r,s,a,o,c){let l=D.intoRaw(n),h=_s.fromRaw(e,this.raw.projectPointAndGetFeature(t.raw,e.raw,l,r,s,a,o,c));return l.free(),h}intersectionsWithPoint(t,e,n,r,s,a,o,c,l){let h=D.intoRaw(n);this.raw.intersectionsWithPoint(t.raw,e.raw,h,r,s,a,o,c,l),h.free()}castShape(t,e,n,r,s,a,o,c,l,h,u,f,_,w){let b=D.intoRaw(n),g=kt.intoRaw(r),m=D.intoRaw(s),R=a.intoRaw(),T=Is.fromRaw(e,this.raw.castShape(t.raw,e.raw,b,g,m,R,o,c,l,h,u,f,_,w));return b.free(),g.free(),m.free(),R.free(),T}intersectionsWithShape(t,e,n,r,s,a,o,c,l,h,u){let f=D.intoRaw(n),_=kt.intoRaw(r),w=s.intoRaw();this.raw.intersectionsWithShape(t.raw,e.raw,f,_,w,a,o,c,l,h,u),f.free(),_.free(),w.free()}collidersWithAabbIntersectingAabb(t,e,n){let r=D.intoRaw(t),s=D.intoRaw(e);this.raw.collidersWithAabbIntersectingAabb(r,s,n),r.free(),s.free()}}class zl{free(){this.raw&&this.raw.free(),this.raw=void 0}constructor(t){this.raw=t||new lw}serializeAll(t,e,n,r,s,a,o,c,l){let h=D.intoRaw(t);const u=this.raw.serializeAll(h,e.raw,n.raw,r.raw,s.raw,a.raw,o.raw,c.raw,l.raw);return h.free(),u}deserializeAll(t){return Ls.fromRaw(this.raw.deserializeAll(t))}}class FR{constructor(t,e){this.vertices=t,this.colors=e}}class NR{free(){this.raw&&this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}constructor(t){this.raw=t||new rw}render(t,e,n,r,s){this.raw.render(t.raw,e.raw,n.raw,r.raw,s.raw),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}}class OR{}class zR{constructor(t,e,n,r,s){this.params=e,this.bodies=n,this.colliders=r,this.queries=s,this.raw=new aw(t),this.rawCharacterCollision=new Ah,this._applyImpulsesToDynamicBodies=!1,this._characterMass=null}free(){this.raw&&(this.raw.free(),this.rawCharacterCollision.free()),this.raw=void 0,this.rawCharacterCollision=void 0}up(){return this.raw.up()}setUp(t){let e=D.intoRaw(t);return this.raw.setUp(e)}applyImpulsesToDynamicBodies(){return this._applyImpulsesToDynamicBodies}setApplyImpulsesToDynamicBodies(t){this._applyImpulsesToDynamicBodies=t}characterMass(){return this._characterMass}setCharacterMass(t){this._characterMass=t}offset(){return this.raw.offset()}setOffset(t){this.raw.setOffset(t)}normalNudgeFactor(){return this.raw.normalNudgeFactor()}setNormalNudgeFactor(t){this.raw.setNormalNudgeFactor(t)}slideEnabled(){return this.raw.slideEnabled()}setSlideEnabled(t){this.raw.setSlideEnabled(t)}autostepMaxHeight(){return this.raw.autostepMaxHeight()}autostepMinWidth(){return this.raw.autostepMinWidth()}autostepIncludesDynamicBodies(){return this.raw.autostepIncludesDynamicBodies()}autostepEnabled(){return this.raw.autostepEnabled()}enableAutostep(t,e,n){this.raw.enableAutostep(t,e,n)}disableAutostep(){return this.raw.disableAutostep()}maxSlopeClimbAngle(){return this.raw.maxSlopeClimbAngle()}setMaxSlopeClimbAngle(t){this.raw.setMaxSlopeClimbAngle(t)}minSlopeSlideAngle(){return this.raw.minSlopeSlideAngle()}setMinSlopeSlideAngle(t){this.raw.setMinSlopeSlideAngle(t)}snapToGroundDistance(){return this.raw.snapToGroundDistance()}enableSnapToGround(t){this.raw.enableSnapToGround(t)}disableSnapToGround(){this.raw.disableSnapToGround()}snapToGroundEnabled(){return this.raw.snapToGroundEnabled()}computeColliderMovement(t,e,n,r,s){let a=D.intoRaw(e);this.raw.computeColliderMovement(this.params.dt,this.bodies.raw,this.colliders.raw,this.queries.raw,t.handle,a,this._applyImpulsesToDynamicBodies,this._characterMass,n,r,this.colliders.castClosure(s)),a.free()}computedMovement(){return D.fromRaw(this.raw.computedMovement())}computedGrounded(){return this.raw.computedGrounded()}numComputedCollisions(){return this.raw.numComputedCollisions()}computedCollision(t,e){if(this.raw.computedCollision(t,this.rawCharacterCollision)){let n=this.rawCharacterCollision;return e=e??new OR,e.translationDeltaApplied=D.fromRaw(n.translationDeltaApplied()),e.translationDeltaRemaining=D.fromRaw(n.translationDeltaRemaining()),e.toi=n.toi(),e.witness1=D.fromRaw(n.worldWitness1()),e.witness2=D.fromRaw(n.worldWitness2()),e.normal1=D.fromRaw(n.worldNormal1()),e.normal2=D.fromRaw(n.worldNormal2()),e.collider=this.colliders.get(n.handle()),e}else return null}}var Bl;(function(i){i[i.None=0]="None",i[i.LinX=1]="LinX",i[i.LinY=2]="LinY",i[i.LinZ=4]="LinZ",i[i.AngX=8]="AngX",i[i.AngY=16]="AngY",i[i.AngZ=32]="AngZ",i[i.AllLin=7]="AllLin",i[i.AllAng=56]="AllAng",i[i.All=63]="All"})(Bl||(Bl={}));class BR{constructor(t,e,n,r,s,a){this.params=t,this.bodies=e,this.raw=new cw(n,r,s,a)}free(){this.raw&&this.raw.free(),this.raw=void 0}setKp(t,e){this.raw.set_kp(t,e)}setKi(t,e){this.raw.set_kp(t,e)}setKd(t,e){this.raw.set_kp(t,e)}setAxes(t){this.raw.set_axes_mask(t)}resetIntegrals(){this.raw.reset_integrals()}applyLinearCorrection(t,e,n){let r=D.intoRaw(e),s=D.intoRaw(n);this.raw.apply_linear_correction(this.params.dt,this.bodies.raw,t.handle,r,s),r.free(),s.free()}applyAngularCorrection(t,e,n){let r=kt.intoRaw(e),s=D.intoRaw(n);this.raw.apply_angular_correction(this.params.dt,this.bodies.raw,t.handle,r,s),r.free(),s.free()}linearCorrection(t,e,n){let r=D.intoRaw(e),s=D.intoRaw(n),a=this.raw.linear_correction(this.params.dt,this.bodies.raw,t.handle,r,s);return r.free(),s.free(),D.fromRaw(a)}angularCorrection(t,e,n){let r=kt.intoRaw(e),s=D.intoRaw(n),a=this.raw.angular_correction(this.params.dt,this.bodies.raw,t.handle,r,s);return r.free(),s.free(),D.fromRaw(a)}}class HR{constructor(t,e,n,r){this.raw=new sw(t.handle),this.bodies=e,this.colliders=n,this.queries=r,this._chassis=t}free(){this.raw&&this.raw.free(),this.raw=void 0}updateVehicle(t,e,n,r){this.raw.update_vehicle(t,this.bodies.raw,this.colliders.raw,this.queries.raw,e,n,this.colliders.castClosure(r))}currentVehicleSpeed(){return this.raw.current_vehicle_speed()}chassis(){return this._chassis}get indexUpAxis(){return this.raw.index_up_axis()}set indexUpAxis(t){this.raw.set_index_up_axis(t)}get indexForwardAxis(){return this.raw.index_forward_axis()}set setIndexForwardAxis(t){this.raw.set_index_forward_axis(t)}addWheel(t,e,n,r,s){let a=D.intoRaw(t),o=D.intoRaw(e),c=D.intoRaw(n);this.raw.add_wheel(a,o,c,r,s),a.free(),o.free(),c.free()}numWheels(){return this.raw.num_wheels()}wheelChassisConnectionPointCs(t){return D.fromRaw(this.raw.wheel_chassis_connection_point_cs(t))}setWheelChassisConnectionPointCs(t,e){let n=D.intoRaw(e);this.raw.set_wheel_chassis_connection_point_cs(t,n),n.free()}wheelSuspensionRestLength(t){return this.raw.wheel_suspension_rest_length(t)}setWheelSuspensionRestLength(t,e){this.raw.set_wheel_suspension_rest_length(t,e)}wheelMaxSuspensionTravel(t){return this.raw.wheel_max_suspension_travel(t)}setWheelMaxSuspensionTravel(t,e){this.raw.set_wheel_max_suspension_travel(t,e)}wheelRadius(t){return this.raw.wheel_radius(t)}setWheelRadius(t,e){this.raw.set_wheel_radius(t,e)}wheelSuspensionStiffness(t){return this.raw.wheel_suspension_stiffness(t)}setWheelSuspensionStiffness(t,e){this.raw.set_wheel_suspension_stiffness(t,e)}wheelSuspensionCompression(t){return this.raw.wheel_suspension_compression(t)}setWheelSuspensionCompression(t,e){this.raw.set_wheel_suspension_compression(t,e)}wheelSuspensionRelaxation(t){return this.raw.wheel_suspension_relaxation(t)}setWheelSuspensionRelaxation(t,e){this.raw.set_wheel_suspension_relaxation(t,e)}wheelMaxSuspensionForce(t){return this.raw.wheel_max_suspension_force(t)}setWheelMaxSuspensionForce(t,e){this.raw.set_wheel_max_suspension_force(t,e)}wheelBrake(t){return this.raw.wheel_brake(t)}setWheelBrake(t,e){this.raw.set_wheel_brake(t,e)}wheelSteering(t){return this.raw.wheel_steering(t)}setWheelSteering(t,e){this.raw.set_wheel_steering(t,e)}wheelEngineForce(t){return this.raw.wheel_engine_force(t)}setWheelEngineForce(t,e){this.raw.set_wheel_engine_force(t,e)}wheelDirectionCs(t){return D.fromRaw(this.raw.wheel_direction_cs(t))}setWheelDirectionCs(t,e){let n=D.intoRaw(e);this.raw.set_wheel_direction_cs(t,n),n.free()}wheelAxleCs(t){return D.fromRaw(this.raw.wheel_axle_cs(t))}setWheelAxleCs(t,e){let n=D.intoRaw(e);this.raw.set_wheel_axle_cs(t,n),n.free()}wheelFrictionSlip(t){return this.raw.wheel_friction_slip(t)}setWheelFrictionSlip(t,e){this.raw.set_wheel_friction_slip(t,e)}wheelSideFrictionStiffness(t){return this.raw.wheel_side_friction_stiffness(t)}setWheelSideFrictionStiffness(t,e){this.raw.set_wheel_side_friction_stiffness(t,e)}wheelRotation(t){return this.raw.wheel_rotation(t)}wheelForwardImpulse(t){return this.raw.wheel_forward_impulse(t)}wheelSideImpulse(t){return this.raw.wheel_side_impulse(t)}wheelSuspensionForce(t){return this.raw.wheel_suspension_force(t)}wheelContactNormal(t){return D.fromRaw(this.raw.wheel_contact_normal_ws(t))}wheelContactPoint(t){return D.fromRaw(this.raw.wheel_contact_point_ws(t))}wheelSuspensionLength(t){return this.raw.wheel_suspension_length(t)}wheelHardPoint(t){return D.fromRaw(this.raw.wheel_hard_point_ws(t))}wheelIsInContact(t){return this.raw.wheel_is_in_contact(t)}wheelGroundObject(t){return this.colliders.get(this.raw.wheel_ground_object(t))}}class Ls{free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.ccdSolver.free(),this.queryPipeline.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.characterControllers.forEach(t=>t.free()),this.pidControllers.forEach(t=>t.free()),this.vehicleControllers.forEach(t=>t.free()),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.queryPipeline=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0,this.characterControllers=void 0,this.pidControllers=void 0,this.vehicleControllers=void 0}constructor(t,e,n,r,s,a,o,c,l,h,u,f,_,w){this.gravity=t,this.integrationParameters=new uR(e),this.islands=new RR(n),this.broadPhase=new AR(r),this.narrowPhase=new CR(s),this.bodies=new dR(a),this.colliders=new VR(o),this.impulseJoints=new bR(c),this.multibodyJoints=new ER(l),this.ccdSolver=new TR(h),this.queryPipeline=new UR(u),this.physicsPipeline=new DR(f),this.serializationPipeline=new zl(_),this.debugRenderPipeline=new NR(w),this.characterControllers=new Set,this.pidControllers=new Set,this.vehicleControllers=new Set,this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies)}static fromRaw(t){return t?new Ls(D.fromRaw(t.takeGravity()),t.takeIntegrationParameters(),t.takeIslandManager(),t.takeBroadPhase(),t.takeNarrowPhase(),t.takeBodies(),t.takeColliders(),t.takeImpulseJoints(),t.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(t){return new zl().deserializeAll(t)}debugRender(){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.narrowPhase),new FR(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(t,e){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.ccdSolver,t,e),this.queryPipeline.update(this.colliders)}propagateModifiedBodyPositionsToColliders(){this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw)}updateSceneQueries(){this.propagateModifiedBodyPositionsToColliders(),this.queryPipeline.update(this.colliders)}get timestep(){return this.integrationParameters.dt}set timestep(t){this.integrationParameters.dt=t}get lengthUnit(){return this.integrationParameters.lengthUnit}set lengthUnit(t){this.integrationParameters.lengthUnit=t}get numSolverIterations(){return this.integrationParameters.numSolverIterations}set numSolverIterations(t){this.integrationParameters.numSolverIterations=t}get numAdditionalFrictionIterations(){return this.integrationParameters.numAdditionalFrictionIterations}set numAdditionalFrictionIterations(t){this.integrationParameters.numAdditionalFrictionIterations=t}get numInternalPgsIterations(){return this.integrationParameters.numInternalPgsIterations}set numInternalPgsIterations(t){this.integrationParameters.numInternalPgsIterations=t}switchToStandardPgsSolver(){this.integrationParameters.switchToStandardPgsSolver()}switchToSmallStepsPgsSolver(){this.integrationParameters.switchToSmallStepsPgsSolver()}switchToSmallStepsPgsSolverWithoutWarmstart(){this.integrationParameters.switchToSmallStepsPgsSolverWithoutWarmstart()}createRigidBody(t){return this.bodies.createRigidBody(this.colliders,t)}createCharacterController(t){let e=new zR(t,this.integrationParameters,this.bodies,this.colliders,this.queryPipeline);return this.characterControllers.add(e),e}removeCharacterController(t){this.characterControllers.delete(t),t.free()}createPidController(t,e,n,r){let s=new BR(this.integrationParameters,this.bodies,t,e,n,r);return this.pidControllers.add(s),s}removePidController(t){this.pidControllers.delete(t),t.free()}createVehicleController(t){let e=new HR(t,this.bodies,this.colliders,this.queryPipeline);return this.vehicleControllers.add(e),e}removeVehicleController(t){this.vehicleControllers.delete(t),t.free()}createCollider(t,e){let n=e?e.handle:void 0;return this.colliders.createCollider(this.bodies,t,n)}createImpulseJoint(t,e,n,r){return this.impulseJoints.createJoint(this.bodies,t,e.handle,n.handle,r)}createMultibodyJoint(t,e,n,r){return this.multibodyJoints.createJoint(t,e.handle,n.handle,r)}getRigidBody(t){return this.bodies.get(t)}getCollider(t){return this.colliders.get(t)}getImpulseJoint(t){return this.impulseJoints.get(t)}getMultibodyJoint(t){return this.multibodyJoints.get(t)}removeRigidBody(t){this.bodies&&this.bodies.remove(t.handle,this.islands,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(t,e){this.colliders&&this.colliders.remove(t.handle,this.islands,this.bodies,e)}removeImpulseJoint(t,e){this.impulseJoints&&this.impulseJoints.remove(t.handle,e)}removeMultibodyJoint(t,e){this.impulseJoints&&this.multibodyJoints.remove(t.handle,e)}forEachCollider(t){this.colliders.forEach(t)}forEachRigidBody(t){this.bodies.forEach(t)}forEachActiveRigidBody(t){this.bodies.forEachActiveRigidBody(this.islands,t)}castRay(t,e,n,r,s,a,o,c){return this.queryPipeline.castRay(this.bodies,this.colliders,t,e,n,r,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(c))}castRayAndGetNormal(t,e,n,r,s,a,o,c){return this.queryPipeline.castRayAndGetNormal(this.bodies,this.colliders,t,e,n,r,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(c))}intersectionsWithRay(t,e,n,r,s,a,o,c,l){this.queryPipeline.intersectionsWithRay(this.bodies,this.colliders,t,e,n,r,s,a,o?o.handle:null,c?c.handle:null,this.colliders.castClosure(l))}intersectionWithShape(t,e,n,r,s,a,o,c){let l=this.queryPipeline.intersectionWithShape(this.bodies,this.colliders,t,e,n,r,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(c));return l!=null?this.colliders.get(l):null}projectPoint(t,e,n,r,s,a,o){return this.queryPipeline.projectPoint(this.bodies,this.colliders,t,e,n,r,s?s.handle:null,a?a.handle:null,this.colliders.castClosure(o))}projectPointAndGetFeature(t,e,n,r,s,a){return this.queryPipeline.projectPointAndGetFeature(this.bodies,this.colliders,t,e,n,r?r.handle:null,s?s.handle:null,this.colliders.castClosure(a))}intersectionsWithPoint(t,e,n,r,s,a,o){this.queryPipeline.intersectionsWithPoint(this.bodies,this.colliders,t,this.colliders.castClosure(e),n,r,s?s.handle:null,a?a.handle:null,this.colliders.castClosure(o))}castShape(t,e,n,r,s,a,o,c,l,h,u,f){return this.queryPipeline.castShape(this.bodies,this.colliders,t,e,n,r,s,a,o,c,l,h?h.handle:null,u?u.handle:null,this.colliders.castClosure(f))}intersectionsWithShape(t,e,n,r,s,a,o,c,l){this.queryPipeline.intersectionsWithShape(this.bodies,this.colliders,t,e,n,this.colliders.castClosure(r),s,a,o?o.handle:null,c?c.handle:null,this.colliders.castClosure(l))}collidersWithAabbIntersectingAabb(t,e,n){this.queryPipeline.collidersWithAabbIntersectingAabb(t,e,this.colliders.castClosure(n))}contactPairsWith(t,e){this.narrowPhase.contactPairsWith(t.handle,this.colliders.castClosure(e))}intersectionPairsWith(t,e){this.narrowPhase.intersectionPairsWith(t.handle,this.colliders.castClosure(e))}contactPair(t,e,n){this.narrowPhase.contactPair(t.handle,e.handle,n)}intersectionPair(t,e){return this.narrowPhase.intersectionPair(t.handle,e.handle)}}var fi;(function(i){i[i.NONE=0]="NONE",i[i.COLLISION_EVENTS=1]="COLLISION_EVENTS",i[i.CONTACT_FORCE_EVENTS=2]="CONTACT_FORCE_EVENTS"})(fi||(fi={}));class kR{free(){this.raw&&this.raw.free(),this.raw=void 0}collider1(){return this.raw.collider1()}collider2(){return this.raw.collider2()}totalForce(){return D.fromRaw(this.raw.total_force())}totalForceMagnitude(){return this.raw.total_force_magnitude()}maxForceDirection(){return D.fromRaw(this.raw.max_force_direction())}maxForceMagnitude(){return this.raw.max_force_magnitude()}}class GR{constructor(t,e){this.raw=e||new Ch(t)}free(){this.raw&&this.raw.free(),this.raw=void 0}drainCollisionEvents(t){this.raw.drainCollisionEvents(t)}drainContactForceEvents(t){let e=new kR;this.raw.drainContactForceEvents(n=>{e.raw=n,t(e),e.free()})}clear(){this.raw.clear()}}var go;(function(i){i[i.NONE=0]="NONE",i[i.FILTER_CONTACT_PAIRS=1]="FILTER_CONTACT_PAIRS",i[i.FILTER_INTERSECTION_PAIRS=2]="FILTER_INTERSECTION_PAIRS"})(go||(go={}));var Hl;(function(i){i[i.EMPTY=0]="EMPTY",i[i.COMPUTE_IMPULSE=1]="COMPUTE_IMPULSE"})(Hl||(Hl={}));var wo;(function(i){i[i.DYNAMIC_DYNAMIC=1]="DYNAMIC_DYNAMIC",i[i.DYNAMIC_KINEMATIC=12]="DYNAMIC_KINEMATIC",i[i.DYNAMIC_FIXED=2]="DYNAMIC_FIXED",i[i.KINEMATIC_KINEMATIC=52224]="KINEMATIC_KINEMATIC",i[i.KINEMATIC_FIXED=8704]="KINEMATIC_FIXED",i[i.FIXED_FIXED=32]="FIXED_FIXED",i[i.DEFAULT=15]="DEFAULT",i[i.ALL=60943]="ALL"})(wo||(wo={}));class kl{constructor(t,e,n,r){this.colliderSet=t,this.handle=e,this._parent=n,this._shape=r}finalizeDeserialization(t){this.handle!=null&&(this._parent=t.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||(this._shape=Pe.fromRaw(this.colliderSet.raw,this.handle))}get shape(){return this.ensureShapeIsCached(),this._shape}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(){return D.fromRaw(this.colliderSet.raw.coTranslation(this.handle))}rotation(){return kt.fromRaw(this.colliderSet.raw.coRotation(this.handle))}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(t){this.colliderSet.raw.coSetSensor(this.handle,t)}setShape(t){let e=t.intoRaw();this.colliderSet.raw.coSetShape(this.handle,e),e.free(),this._shape=t}setEnabled(t){this.colliderSet.raw.coSetEnabled(this.handle,t)}isEnabled(){return this.colliderSet.raw.coIsEnabled(this.handle)}setRestitution(t){this.colliderSet.raw.coSetRestitution(this.handle,t)}setFriction(t){this.colliderSet.raw.coSetFriction(this.handle,t)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(t){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,t)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(t){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,t)}setCollisionGroups(t){this.colliderSet.raw.coSetCollisionGroups(this.handle,t)}setSolverGroups(t){this.colliderSet.raw.coSetSolverGroups(this.handle,t)}contactSkin(){return this.colliderSet.raw.coContactSkin(this.handle)}setContactSkin(t){return this.colliderSet.raw.coSetContactSkin(this.handle,t)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(t){this.colliderSet.raw.coSetActiveHooks(this.handle,t)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(t){this.colliderSet.raw.coSetActiveEvents(this.handle,t)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(t){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,t)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(t){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,t)}setDensity(t){this.colliderSet.raw.coSetDensity(this.handle,t)}setMass(t){this.colliderSet.raw.coSetMass(this.handle,t)}setMassProperties(t,e,n,r){let s=D.intoRaw(e),a=D.intoRaw(n),o=kt.intoRaw(r);this.colliderSet.raw.coSetMassProperties(this.handle,t,s,a,o),s.free(),a.free(),o.free()}setTranslation(t){this.colliderSet.raw.coSetTranslation(this.handle,t.x,t.y,t.z)}setTranslationWrtParent(t){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,t.x,t.y,t.z)}setRotation(t){this.colliderSet.raw.coSetRotation(this.handle,t.x,t.y,t.z,t.w)}setRotationWrtParent(t){this.colliderSet.raw.coSetRotationWrtParent(this.handle,t.x,t.y,t.z,t.w)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(){return D.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle))}setHalfExtents(t){const e=D.intoRaw(t);this.colliderSet.raw.coSetHalfExtents(this.handle,e)}radius(){return this.colliderSet.raw.coRadius(this.handle)}setRadius(t){this.colliderSet.raw.coSetRadius(this.handle,t)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}setRoundRadius(t){this.colliderSet.raw.coSetRoundRadius(this.handle,t)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}setHalfHeight(t){this.colliderSet.raw.coSetHalfHeight(this.handle,t)}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(){let t=this.colliderSet.raw.coHeightfieldScale(this.handle);return D.fromRaw(t)}heightfieldNRows(){return this.colliderSet.raw.coHeightfieldNRows(this.handle)}heightfieldNCols(){return this.colliderSet.raw.coHeightfieldNCols(this.handle)}parent(){return this._parent}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(t){let e=D.intoRaw(t),n=this.colliderSet.raw.coContainsPoint(this.handle,e);return e.free(),n}projectPoint(t,e){let n=D.intoRaw(t),r=Cs.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle,n,e));return n.free(),r}intersectsRay(t,e){let n=D.intoRaw(t.origin),r=D.intoRaw(t.dir),s=this.colliderSet.raw.coIntersectsRay(this.handle,n,r,e);return n.free(),r.free(),s}castShape(t,e,n,r,s,a,o,c){let l=D.intoRaw(t),h=D.intoRaw(n),u=kt.intoRaw(r),f=D.intoRaw(s),_=e.intoRaw(),w=Mr.fromRaw(this.colliderSet,this.colliderSet.raw.coCastShape(this.handle,l,_,h,u,f,a,o,c));return l.free(),h.free(),u.free(),f.free(),_.free(),w}castCollider(t,e,n,r,s,a){let o=D.intoRaw(t),c=D.intoRaw(n),l=Is.fromRaw(this.colliderSet,this.colliderSet.raw.coCastCollider(this.handle,o,e.handle,c,r,s,a));return o.free(),c.free(),l}intersectsShape(t,e,n){let r=D.intoRaw(e),s=kt.intoRaw(n),a=t.intoRaw(),o=this.colliderSet.raw.coIntersectsShape(this.handle,a,r,s);return r.free(),s.free(),a.free(),o}contactShape(t,e,n,r){let s=D.intoRaw(e),a=kt.intoRaw(n),o=t.intoRaw(),c=vr.fromRaw(this.colliderSet.raw.coContactShape(this.handle,o,s,a,r));return s.free(),a.free(),o.free(),c}contactCollider(t,e){return vr.fromRaw(this.colliderSet.raw.coContactCollider(this.handle,t.handle,e))}castRay(t,e,n){let r=D.intoRaw(t.origin),s=D.intoRaw(t.dir),a=this.colliderSet.raw.coCastRay(this.handle,r,s,e,n);return r.free(),s.free(),a}castRayAndGetNormal(t,e,n){let r=D.intoRaw(t.origin),s=D.intoRaw(t.dir),a=Ps.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,r,s,e,n));return r.free(),s.free(),a}}var zi;(function(i){i[i.Density=0]="Density",i[i.Mass=1]="Mass",i[i.MassProps=2]="MassProps"})(zi||(zi={}));class he{constructor(t){this.enabled=!0,this.shape=t,this.massPropsMode=zi.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=kt.identity(),this.translation=D.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=ps.Average,this.restitutionCombineRule=ps.Average,this.activeCollisionTypes=wo.DEFAULT,this.activeEvents=fi.NONE,this.activeHooks=go.NONE,this.mass=0,this.centerOfMass=D.zeros(),this.contactForceEventThreshold=0,this.contactSkin=0,this.principalAngularInertia=D.zeros(),this.angularInertiaLocalFrame=kt.identity()}static ball(t){const e=new Lh(t);return new he(e)}static capsule(t,e){const n=new Fh(t,e);return new he(n)}static segment(t,e){const n=new Nh(t,e);return new he(n)}static triangle(t,e,n){const r=new Oh(t,e,n);return new he(r)}static roundTriangle(t,e,n,r){const s=new zh(t,e,n,r);return new he(s)}static polyline(t,e){const n=new Bh(t,e);return new he(n)}static trimesh(t,e,n){const r=new Hh(t,e,n);return new he(r)}static cuboid(t,e,n){const r=new Dh(t,e,n);return new he(r)}static roundCuboid(t,e,n,r){const s=new Uh(t,e,n,r);return new he(s)}static heightfield(t,e,n,r,s){const a=new kh(t,e,n,r,s);return new he(a)}static cylinder(t,e){const n=new Gh(t,e);return new he(n)}static roundCylinder(t,e,n){const r=new Vh(t,e,n);return new he(r)}static cone(t,e){const n=new Wh(t,e);return new he(n)}static roundCone(t,e,n){const r=new jh(t,e,n);return new he(r)}static convexHull(t){const e=new _o(t,null);return new he(e)}static convexMesh(t,e){const n=new _o(t,e);return new he(n)}static roundConvexHull(t,e){const n=new mo(t,null,e);return new he(n)}static roundConvexMesh(t,e,n){const r=new mo(t,e,n);return new he(r)}setTranslation(t,e,n){if(typeof t!="number"||typeof e!="number"||typeof n!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:t,y:e,z:n},this}setRotation(t){return kt.copy(this.rotation,t),this}setSensor(t){return this.isSensor=t,this}setEnabled(t){return this.enabled=t,this}setContactSkin(t){return this.contactSkin=t,this}setDensity(t){return this.massPropsMode=zi.Density,this.density=t,this}setMass(t){return this.massPropsMode=zi.Mass,this.mass=t,this}setMassProperties(t,e,n,r){return this.massPropsMode=zi.MassProps,this.mass=t,D.copy(this.centerOfMass,e),D.copy(this.principalAngularInertia,n),kt.copy(this.angularInertiaLocalFrame,r),this}setRestitution(t){return this.restitution=t,this}setFriction(t){return this.friction=t,this}setFrictionCombineRule(t){return this.frictionCombineRule=t,this}setRestitutionCombineRule(t){return this.restitutionCombineRule=t,this}setCollisionGroups(t){return this.collisionGroups=t,this}setSolverGroups(t){return this.solverGroups=t,this}setActiveHooks(t){return this.activeHooks=t,this}setActiveEvents(t){return this.activeEvents=t,this}setActiveCollisionTypes(t){return this.activeCollisionTypes=t,this}setContactForceEventThreshold(t){return this.contactForceEventThreshold=t,this}}class VR{free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}constructor(t){this.raw=t||new me,this.map=new As,t&&t.forEachColliderHandle(e=>{this.map.set(e,new kl(this,e,null))})}castClosure(t){return e=>{if(t)return t(this.get(e))}}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createCollider(t,e,n){let r=n!=null&&n!=null;if(r&&isNaN(n))throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");let s=e.shape.intoRaw(),a=D.intoRaw(e.translation),o=kt.intoRaw(e.rotation),c=D.intoRaw(e.centerOfMass),l=D.intoRaw(e.principalAngularInertia),h=kt.intoRaw(e.angularInertiaLocalFrame),u=this.raw.createCollider(e.enabled,s,a,o,e.massPropsMode,e.mass,c,l,h,e.density,e.friction,e.restitution,e.frictionCombineRule,e.restitutionCombineRule,e.isSensor,e.collisionGroups,e.solverGroups,e.activeCollisionTypes,e.activeHooks,e.activeEvents,e.contactForceEventThreshold,e.contactSkin,r,r?n:0,t.raw);s.free(),a.free(),o.free(),c.free(),l.free(),h.free();let f=r?t.get(n):null,_=new kl(this,u,f,e.shape);return this.map.set(u,_),_}remove(t,e,n,r){this.raw.remove(t,e.raw,n.raw,r),this.unmap(t)}unmap(t){this.map.delete(t)}get(t){return this.map.get(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}forEach(t){this.map.forEach(t)}getAll(){return this.map.getAll()}}var Ce=(i=>(i[i.NONE=0]="NONE",i[i.DEFAULT=1]="DEFAULT",i[i.PLAYER=2]="PLAYER",i[i.PROJECTILE=4]="PROJECTILE",i[i.ENEMY=8]="ENEMY",i))(Ce||{});class WR{world;eventQueue;constructor(){const t=new _n(0,-9.81,0);this.world=new Ls(t),this.eventQueue=new GR(!0)}step(t){this.world.timestep=t,this.world.step(this.eventQueue)}createFloorCollider(t,e){const n=qe.fixed(),r=this.world.createRigidBody(n),s=he.cuboid(e.x/2,e.y/2,e.z/2).setTranslation(t.x,t.y,t.z).setCollisionGroups(Ce.DEFAULT<<16|Ce.PLAYER|Ce.ENEMY|Ce.PROJECTILE).setActiveEvents(fi.COLLISION_EVENTS);this.world.createCollider(s,r)}createPlayerBody(t){const e=qe.dynamic().setTranslation(t.x,t.y,t.z).setLinearDamping(.99),n=this.world.createRigidBody(e),r=he.capsule(.8,.4).setCollisionGroups(Ce.PLAYER<<16|Ce.DEFAULT|Ce.ENEMY);return this.world.createCollider(r,n),n}}class jR{constructor(t,e,n){new Qu().setPath(n).load(["px.png","nx.png","py.png","ny.png","pz.png","nz.png"],s=>{e.background=s;const a=new uo(t);a.compileCubemapShader();const o=a.fromCubemap(s).texture;e.environment=o,a.dispose()},void 0,s=>{console.error("Error loading skybox from",n,s)})}}class XR{scene;camera;renderer;input;physics;ui;currentScene=null;clock;getTime(){return this.clock.getElapsedTime()}stateMachine;constructor(t){this.scene=new Pu,this.renderer=new Wg({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),(t??document.body).appendChild(this.renderer.domElement),this.camera=new Je(75,window.innerWidth/window.innerHeight,.1,1e3),this.clock=new af,this.input=new Jg,this.physics=new WR,this.ui=new qg,this.stateMachine=new Yg,this.stateMachine.onStateChange((n,r)=>{r===en.Paused?this.ui.showPause():r===en.Playing&&(this.ui.hidePause(),this.renderer.domElement.requestPointerLock(),this.clock.getDelta())}),new jR(this.renderer,this.scene,"/skybox/"),window.addEventListener("resize",()=>this.onWindowResize()),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==this.renderer.domElement&&this.stateMachine.transition(en.Paused)}),document.addEventListener("keydown",n=>{n.code==="Escape"&&(this.stateMachine.getState()!==en.Paused?document.exitPointerLock():this.stateMachine.transition(en.Playing))}),document.addEventListener("unpause",()=>{this.stateMachine.transition(en.Playing)})}changeScene(t){this.currentScene&&this.currentScene.dispose(),this.currentScene=t,this.currentScene.init()}start(){this.animate()}animate=()=>{if(requestAnimationFrame(this.animate),this.stateMachine.getState()===en.Paused){this.clock.getDelta();return}const t=this.clock.getDelta();this.physics.step(t),this.currentScene&&this.currentScene.update(t),this.renderer.render(this.scene,this.camera)};onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}function qR(i,t,e,n=16776960,r=.25){const s=new fh({color:n}),a=new bn().setFromPoints([t,e]),o=new Du(a,s);i.add(o),setTimeout(()=>{i.remove(o),a.dispose(),s.dispose()},r*1e3)}class YR{mesh;body;lifetime=4;collider;sensorCollider;physicalCollider;radius;length;speed;damage;explosionRadius;active=!0;constructor(t,e,n,r,s=1,a=.05,o=.1,c=50,l){this.explosionRadius=l;const h=1;this.radius=a*h,this.length=o*h;const u=new xr(this.radius,this.length),f=new bs({color:16711680});this.mesh=new Ke(u,f),this.mesh.castShadow=!0,t.add(this.mesh);const _=new Zi().setFromUnitVectors(new N(0,1,0),r.clone().normalize());this.mesh.quaternion.copy(_);const w=qe.dynamic().setTranslation(n.x,n.y,n.z).setRotation({x:_.x,y:_.y,z:_.z,w:_.w}).setCcdEnabled(!0);this.body=e.createRigidBody(w);const b=this.length/2;if(this.explosionRadius==null){const m=he.capsule(this.radius,b).setSensor(!0).setCollisionGroups(Ce.PROJECTILE<<16|Ce.ENEMY).setActiveEvents(fi.COLLISION_EVENTS);this.sensorCollider=e.createCollider(m,this.body);const R=he.capsule(this.radius,b).setCollisionGroups(Ce.PROJECTILE<<16|Ce.DEFAULT).setRestitution(.3).setActiveEvents(fi.COLLISION_EVENTS);this.physicalCollider=e.createCollider(R,this.body),this.collider=this.sensorCollider}else{const m=he.capsule(this.radius,b).setCollisionGroups(Ce.PROJECTILE<<16|Ce.ENEMY|Ce.DEFAULT).setActiveEvents(fi.COLLISION_EVENTS);this.collider=e.createCollider(m,this.body)}this.speed=s,this.damage=c;const g=r.clone().normalize().multiplyScalar(this.speed);this.body.applyImpulse({x:g.x,y:g.y,z:g.z},!0)}update(t){this.lifetime-=t,this.mesh.position.copy(this.body.translation()),this.mesh.quaternion.copy(this.body.rotation())}shouldDespawn(){return this.lifetime<=0}destroy(t,e){t.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),e.removeRigidBody(this.body)}}class JR{constructor(t,e,n){this.scene=t,this.world=e,this.enemyManager=n}projectiles=[];shellCleanupTimeMs=5e3;handleCollisions(t){t.drainCollisionEvents((e,n,r)=>{if(r){for(const s of this.projectiles)if(s.active)if(s.explosionRadius!=null){const a=s.collider.handle;if(e===a||n===a){const o=this.enemyManager?.enemies.find(u=>{const f=u.collider.handle;return(f===e||f===n)&&!u.isDead}),c=s.mesh.position,l=s.explosionRadius,h=l*l;o&&console.log(`[Direct] Projectile impacted enemy at ${o.mesh.position.toArray().map(u=>u.toFixed(2))}`);for(const u of this.enemyManager?.enemies||[]){if(u.isDead)continue;const f=u.mesh.position,_=c.distanceToSquared(f);if(_<=h){const w=Math.sqrt(_);console.log(`[AOE] Explosion at ${c.toArray().map(b=>b.toFixed(2))} - damaging enemy at ${f.toArray().map(b=>b.toFixed(2))} (dist ${w.toFixed(2)})`),u.takeDamage(s.damage)}}s.active=!1,s.destroy(this.scene,this.world),this.projectiles=this.projectiles.filter(u=>u!==s)}break}else{const a=s.sensorCollider?.handle;if(a!=null&&(e===a||n===a)){const c=this.enemyManager?.enemies.find(l=>l.collider.handle===(e===a?n:e));c&&!c.isDead&&c.takeDamage(s.damage),s.active=!1,setTimeout(()=>{this.world.removeRigidBody(s.body),this.scene.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),this.projectiles=this.projectiles.filter(l=>l!==s)},this.shellCleanupTimeMs);break}const o=s.physicalCollider?.handle;if(o!=null&&(e===o||n===o)){s.active=!1,setTimeout(()=>{this.world.removeRigidBody(s.body),this.scene.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),this.projectiles=this.projectiles.filter(c=>c!==s)},this.shellCleanupTimeMs);break}}}})}fire(t,e,n){const r=n?.speed??void 0,s=n?.radius??void 0,a=n?.length??void 0,o=n?.damage??void 0,c=n?.explosionRadius??void 0,l=new YR(this.scene,this.world,t,e,r,s,a,o,c);this.projectiles.push(l);const u=t.clone().add(e.clone().normalize().multiplyScalar(10));qR(this.scene,t,u,65280,5)}update(t){this.projectiles.forEach(e=>e.update(t));for(const e of this.projectiles.slice())if(e.active&&e.shouldDespawn())if(e.explosionRadius!=null){const n=e.mesh.position,r=e.explosionRadius,s=r*r;for(const a of this.enemyManager?.enemies||[]){if(a.isDead)continue;const o=a.mesh.position;n.distanceToSquared(o)<=s&&a.takeDamage(e.damage)}e.active=!1,e.destroy(this.scene,this.world),this.projectiles=this.projectiles.filter(a=>a!==e)}else e.active=!1,setTimeout(()=>{this.world.removeRigidBody(e.body),this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),this.projectiles=this.projectiles.filter(n=>n!==e)},this.shellCleanupTimeMs)}}class KR{engine;scene;camera;renderer;input;physics;ui;constructor(t){this.engine=t,this.scene=t.scene,this.camera=t.camera,this.renderer=t.renderer,this.input=t.input,this.physics=t.physics,this.ui=t.ui}}class On{constructor(t,e){this.projectileManager=t,this.options=e}lastShotTime=0;getName(){return this.options.name}getOptions(){return this.options}tryFire(t,e,n){const r=1/this.options.fireRate;return n-this.lastShotTime<r?!1:(this.lastShotTime=n,this.fire(t,e),!0)}}class ZR extends On{constructor(t){super(t,{name:"Assault Rifle",fireRate:10,projectileSpeed:60,projectileRadius:.02,projectileLength:.1,damage:20,recoil:.01,automatic:!0})}fire(t,e){this.projectileManager.fire(t,e,{speed:this.options.projectileSpeed,radius:this.options.projectileRadius,length:this.options.projectileLength,damage:this.options.damage})}}class $R extends On{constructor(t){super(t,{name:"SMG",fireRate:12,projectileSpeed:50,projectileRadius:.02,projectileLength:.1,damage:12,recoil:.008,automatic:!0})}fire(t,e){this.projectileManager.fire(t,e,{speed:this.options.projectileSpeed,radius:this.options.projectileRadius,length:this.options.projectileLength,damage:this.options.damage})}}class QR extends On{constructor(t){super(t,{name:"LMG",fireRate:8,projectileSpeed:65,projectileRadius:.025,projectileLength:.15,damage:25,recoil:.012,automatic:!0})}fire(t,e){this.projectileManager.fire(t,e,{speed:this.options.projectileSpeed,radius:this.options.projectileRadius,length:this.options.projectileLength,damage:this.options.damage})}}class tA extends On{constructor(t){super(t,{name:"Pistol",fireRate:5,projectileSpeed:70,projectileRadius:.015,projectileLength:.08,damage:15,recoil:.005})}fire(t,e){this.projectileManager.fire(t,e,{speed:this.options.projectileSpeed,radius:this.options.projectileRadius,length:this.options.projectileLength,damage:this.options.damage})}}class eA extends On{constructor(t){super(t,{name:"Shotgun",fireRate:1,projectileSpeed:40,projectileRadius:.01,projectileLength:.05,damage:13,pelletCount:8,pelletSpreadDeg:10,recoil:.02})}fire(t,e){const{pelletCount:n=1,pelletSpreadDeg:r=0}=this.options;for(let s=0;s<n;s++){const a=ih.degToRad(r),o=new N(Math.random(),Math.random(),Math.random()).normalize(),c=(Math.random()-.5)*a,l=e.clone().applyAxisAngle(o,c).normalize();this.projectileManager.fire(t,l,{speed:this.options.projectileSpeed,radius:this.options.projectileRadius,length:this.options.projectileLength,damage:this.options.damage})}}}class nA extends On{constructor(t){super(t,{name:"Sniper Rifle",fireRate:1,projectileSpeed:200,projectileRadius:.02,projectileLength:.2,damage:100,recoil:.05})}fire(t,e){this.projectileManager.fire(t,e,{speed:this.options.projectileSpeed,radius:this.options.projectileRadius,length:this.options.projectileLength,damage:this.options.damage})}}class iA extends On{constructor(t){super(t,{name:"Marksman Rifle",fireRate:2,projectileSpeed:150,projectileRadius:.02,projectileLength:.15,damage:60,recoil:.03})}fire(t,e){this.projectileManager.fire(t,e,{speed:this.options.projectileSpeed,radius:this.options.projectileRadius,length:this.options.projectileLength,damage:this.options.damage})}}class rA extends On{constructor(t){super(t,{name:"Grenade Launcher",fireRate:.5,projectileSpeed:30,projectileRadius:.1,projectileLength:.2,damage:80,recoil:.02,explosionRadius:2})}fire(t,e){this.projectileManager.fire(t,e,{speed:this.options.projectileSpeed,radius:this.options.projectileRadius,length:this.options.projectileLength,damage:this.options.damage,explosionRadius:this.options.explosionRadius})}}class sA extends On{constructor(t){super(t,{name:"Rocket Launcher",fireRate:.5,projectileSpeed:25,projectileRadius:.12,projectileLength:.3,damage:120,recoil:.025,explosionRadius:3})}fire(t,e){this.projectileManager.fire(t,e,{speed:this.options.projectileSpeed,radius:this.options.projectileRadius,length:this.options.projectileLength,damage:this.options.damage,explosionRadius:this.options.explosionRadius})}}class aA{weapons;currentIndex=0;constructor(t){this.weapons=[new tA(t),new eA(t),new ZR(t),new $R(t),new QR(t),new iA(t),new nA(t),new rA(t),new sA(t)],this.currentIndex=0,console.log("Weapon selected:",this.getCurrentWeapon().getName())}tryFire(t,e,n){return this.getCurrentWeapon().tryFire(t,e,n)}nextWeapon(){this.currentIndex=(this.currentIndex+1)%this.weapons.length,console.log("Weapon selected:",this.getCurrentWeapon().getName())}selectWeapon(t){t>=0&&t<this.weapons.length&&(this.currentIndex=t,console.log("Weapon selected:",this.getCurrentWeapon().getName()))}getCurrentWeapon(){return this.weapons[this.currentIndex]}}class oA{mesh;body;health=100;isDead=!1;collider;constructor(t,e,n){const r=new xr(.5,1),s=new bs({color:10027008,wireframe:!1});this.mesh=new Ke(r,s),this.mesh.castShadow=!0,t.add(this.mesh);const a=qe.dynamic().setTranslation(n.x,n.y,n.z).setLinearDamping(.8);this.body=e.createRigidBody(a),this.body.lockRotations(!0,!0);const o=he.capsule(.5,.5).setCollisionGroups(Ce.ENEMY<<16|Ce.PROJECTILE|Ce.DEFAULT);this.collider=e.createCollider(o,this.body)}update(){if(this.isDead)return;const t=this.body.translation();this.mesh.position.set(t.x,t.y,t.z),this.mesh.quaternion.copy(this.body.rotation())}takeDamage(t){console.log(`Enemy took ${t} damage!`),this.health-=t,this.health<=0&&!this.isDead&&this.die()}die(){this.isDead=!0,this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh.removeFromParent(),this.body.setEnabled(!1),this.collider.setEnabled(!1)}}class cA{constructor(t,e){this.scene=t,this.world=e}_enemies=[];spawnEnemy(t){const e=new oA(this.scene,this.world,t);this.enemies.push(e)}get enemies(){return this._enemies}update(){this.enemies.forEach(t=>t.update())}handleProjectileHit(t){this.enemies.forEach(e=>{if(e.isDead)return;const n=e.mesh.position;t.distanceTo(n)<1&&e.takeDamage(50)})}}class lA{object;pitch;constructor(t){this.object=new xe,this.pitch=new xe,this.object.add(this.pitch),this.pitch.add(t),t.position.set(0,1.6,0)}rotateYaw(t){this.object.rotation.y+=t}rotatePitch(t){this.pitch.rotation.x=ih.clamp(this.pitch.rotation.x+t,-Math.PI/2,Math.PI/2)}get position(){return this.object.position}}class hA{rig;input;body;speed=5;lookSpeed=.002;jumpForce=6;world;canJump=!0;constructor(t,e,n,r){this.rig=t,this.input=e,this.body=n,this.world=r,this.lockPointer()}lockPointer(){const t=document.querySelector("canvas");t.addEventListener("click",()=>{t.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==t&&this.input.reset()})}isOnGround(){const t=this.body.translation(),e=new _n(t.x,t.y-.9,t.z),n=new _n(0,-1,0),r=new IR(e,n),a=this.world.castRay(r,.2,!0);if(!a)return!1;const o=a.collider.parent();return o!==null&&o.handle!==this.body.handle}update(){const t=this.input.getMouseDelta();this.rig.rotateYaw(-t.x*this.lookSpeed),this.rig.rotatePitch(-t.y*this.lookSpeed);const e=new N;this.input.isPressed(Wn.MoveForward)&&(e.z-=1),this.input.isPressed(Wn.MoveBackward)&&(e.z+=1),this.input.isPressed(Wn.MoveLeft)&&(e.x-=1),this.input.isPressed(Wn.MoveRight)&&(e.x+=1);const n=this.rig.object.rotation.y,r=new N(0,0,-1).applyAxisAngle(new N(0,1,0),n),s=new N(1,0,0).applyAxisAngle(new N(0,1,0),n),a=this.body.linvel();if(e.lengthSq()>0){e.normalize();const o=new N().addScaledVector(r,-e.z).addScaledVector(s,e.x).normalize(),c=this.input.isPressed(Wn.Sprint)?this.speed*1.8:this.speed;o.multiplyScalar(c),this.body.setLinvel(new _n(o.x,a.y,o.z),!0)}else this.body.setLinvel(new _n(0,a.y,0),!0);if(this.input.isPressed(Wn.Jump)){if(this.canJump&&this.isOnGround()){const o=this.body.linvel();this.body.setLinvel(new _n(o.x,this.jumpForce,o.z),!0),this.canJump=!1}}else this.canJump=!0}}class dA{root;camera;cameraRig;model;body;controller;constructor(t,e,n,r=new _n(0,2,0)){this.root=new xe,t.add(this.root),this.camera=new Je(75,window.innerWidth/window.innerHeight,.1,1e3),this.cameraRig=new lA(this.camera),this.root.add(this.cameraRig.object);const s=new xr(.4,1.6,8,16),a=new bs({color:65280});this.model=new Ke(s,a),this.model.castShadow=!0,this.root.add(this.model),this.body=n.createPlayerBody(r),this.controller=new hA(this.cameraRig,e,this.body,n.world)}getCamera(){return this.camera}applyRecoil(t,e){this.cameraRig.rotatePitch(t),this.cameraRig.rotateYaw(e)}update(){this.controller.update();const t=this.body.translation();this.root.position.set(t.x,t.y,t.z),this.model.rotation.y=this.cameraRig.object.rotation.y}}class uA extends KR{player;enemyManager;projectileManager;weaponManager;wasFiring=!1;onKeyDown=t=>{let e=!1;if(t.code.startsWith("Digit")){const n=parseInt(t.code.replace("Digit",""),10)-1;this.weaponManager.selectWeapon(n),e=!0}else t.code==="KeyQ"&&(this.weaponManager.nextWeapon(),e=!0);if(e){const n=this.weaponManager.getCurrentWeapon();this.ui.updateWeaponInfo(n.getName(),n.getOptions())}};constructor(t){super(t)}init(){this.physics.createFloorCollider(new _n(0,-.5,0),new _n(50,1,50));const t=new Qi(50,1,50),e=new bs({color:5592405}),n=new Ke(t,e);n.position.set(0,-.5,0),n.receiveShadow=!0,this.scene.add(n);const r=new rf(16777215,1);r.position.set(5,10,5),this.scene.add(r),this.player=new dA(this.scene,this.input,this.physics);const s=this.player.getCamera();this.engine.camera=s,this.camera=s,this.enemyManager=new cA(this.scene,this.physics.world),this.projectileManager=new JR(this.scene,this.physics.world,this.enemyManager),this.weaponManager=new aA(this.projectileManager),this.enemyManager.spawnEnemy(new N(5,2,-5)),this.enemyManager.spawnEnemy(new N(-5,2,5)),this.enemyManager.spawnEnemy(new N(10,2,-10));const a=this.weaponManager.getCurrentWeapon();this.ui.updateWeaponInfo(a.getName(),a.getOptions()),window.addEventListener("keydown",this.onKeyDown)}update(t){const e=this.input.isPressed(Wn.Fire),n=this.weaponManager.getCurrentWeapon().getOptions();e?n.automatic?this.shoot():this.wasFiring||(this.shoot(),this.wasFiring=!0):this.wasFiring=!1,this.player.update(),this.projectileManager.update(t),this.projectileManager.handleCollisions(this.physics.eventQueue),this.enemyManager.update()}dispose(){this.scene.clear(),window.removeEventListener("keydown",this.onKeyDown)}shoot(){const t=new bt(0,0),e=new of;e.setFromCamera(t,this.camera);const r=e.ray.origin.clone().add(e.ray.direction.clone().multiplyScalar(.5)),s=e.ray.direction.clone(),a=this.engine.getTime();if(this.weaponManager.tryFire(r,s,a)){const o=this.weaponManager.getCurrentWeapon().getOptions();this.player.applyRecoil(o.recoil??0,(Math.random()-.5)*(o.recoil??0))}}}const Ds=new XR,Xh=Ds.stateMachine,fA=new uA(Ds);Xh.onStateChange((i,t)=>{t===en.Playing&&(i===en.Boot||i===en.MainMenu)&&Ds.changeScene(fA)});Ds.start();Xh.transition(en.Playing);
