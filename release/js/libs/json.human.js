!function(e,t){"use strict";"undefined"!=typeof module&&module.exports?module.exports=t():e.JsonHuman=t()}(this,function(){"use strict";function e(e){return function(t){return e+"-"+t}}function t(e){return"[object Array]"===h.call(e)}function r(e,t,r){var n=document.createElement(e);return n.className=t,n.appendChild(document.createTextNode(""+r)),n}function n(e,r,n){var a,s,l=document.createElement(e);if(l.className=r,t(n))for(a=0,s=n.length;s>a;a+=1)l.appendChild(n[a]);else l.appendChild(n);return l}function a(e,t,r){var a=n("a",F,e);return a.setAttribute("href",t),a.setAttribute("target",r),a}function s(e){var r=typeof e;switch(r){case"boolean":return b;case"string":return x;case"number":return e%1===0?g:k;case"function":return w;default:return t(e)?m:e===Object(e)?v:I}}function l(e,t,o){var u,i,p,c,h,f,d,I,F,K,M,P,Q=!0,R=s(e);switch(R){case b:var U=t.bool;if(i=document.createElement("div"),U.showImage){var V=document.createElement("img");V.setAttribute("class",T),V.setAttribute("src",""+(e?U.img["true"]:U.img["false"])),i.appendChild(V)}U.showText&&i.appendChild(e?r("span",C,U.text["true"]):r("span",E,U.text["false"])),u=i;break;case x:u=""===e?r("span",j,"(Empty Text)"):r("span",A,e);break;case g:u=r("span",N,e);break;case k:u=r("span",O,e);break;case v:d=[],M=t.hyperlinks.target,P=t.hyperlinks.keys,K=t.hyperlinks.enable&&P&&P.length>0;for(p in e)Q=!1,F=e[p],h=l(F,t,p),c=r("th",J,p),h=K&&"string"==typeof F&&y.call(P,p)>=0?n("td",L,a(h,F,M)):n("td",L,h),I=document.createElement("tr"),I.appendChild(c),I.appendChild(h),d.push(I);u=Q?r("span",S,"(Empty Object)"):n("table",H,d);break;case w:u=r("span",_,e);break;case m:if(e.length>0){d=[];var W=t.showArrayIndex;for(M=t.hyperlinks.target,P=t.hyperlinks.keys,K=o&&t.hyperlinks.enable&&P&&P.length>0&&y.call(P,o)>=0,p=0,f=e.length;f>p;p+=1)c=r("th",q,p),F=e[p],K&&"string"==typeof F?(h=l(F,t,p),h=n("td",z,a(h,F,M))):h=n("td",z,l(F,t,p)),I=document.createElement("tr"),W&&I.appendChild(c),I.appendChild(h),d.push(I);u=n("table",B,d)}else u=r("span",D,"(Empty List)");break;default:u=r("span",G,e)}return u}function o(e,t){t=u(t||{});var r;return r=l(e,t),r.className=r.className+" "+f("root"),r}function u(e){return e=i(e),e=p(e),e=c(e)}function i(e){return void 0===e.showArrayIndex?e.showArrayIndex=!0:e.showArrayIndex=e.showArrayIndex?!0:!1,e}function p(e){var r={enable:!1,keys:null,target:""};return e.hyperlinks&&e.hyperlinks.enable&&(r.enable=!0,r.keys=t(e.hyperlinks.keys)?e.hyperlinks.keys:[],e.hyperlinks.target?r.target=""+e.hyperlinks.target:r.target="_blank"),e.hyperlinks=r,e}function c(e){if(e.bool){var t=e.bool;if(t.showText||t.showImage||(t.showImage=!1,t.showText=!0),t.showText)if(t.text){var r=t.text["true"],n=t.text["false"];(s(r)!=x||""===r)&&(t.text["true"]="true"),(s(n)!=x||""===n)&&(t.text["false"]="false")}else t.text={"true":"true","false":"false"};t.showImage&&(t.img["true"]||t.img["false"]||(t.showImage=!1))}else e.bool={text:{"true":"true","false":"false"},img:{"true":"","false":""},showImage:!1,showText:!0};return e}var y=[].indexOf||function(e){for(var t=0,r=this.length;r>t;t++)if(t in this&&this[t]===e)return t;return-1},h=Object.prototype.toString,f=e("jh"),d=f,m=1,b=2,g=3,k=4,x=5,v=6,w=7,I=99,A=d("type-string"),j=d("type-string")+" "+d("empty"),C=d("type-bool-true"),E=d("type-bool-false"),T=d("type-bool-image"),N=d("type-int")+" "+d("type-number"),O=d("type-float")+" "+d("type-number"),H=d("type-object"),J=d("key")+" "+d("object-key"),L=d("value")+" "+d("object-value"),S=d("type-object")+" "+d("empty"),_=d("type-function"),q=d("key")+" "+d("array-key"),z=d("value")+" "+d("array-value"),B=d("type-array"),D=d("type-array")+" "+d("empty"),F=d("a"),G=d("type-unk");return{format:o}});