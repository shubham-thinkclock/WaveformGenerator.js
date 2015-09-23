"use strict";var WaveformGenerator=function(t,e){function a(){return"a"+Math.floor(65536*(1+Math.random())).toString(16).substring(1)+"b"+Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function r(t,e){var a=h.bar.width;0!==h.bar.gap&&(a*=Math.abs(100-h.bar.gap)/100);var r=t+a/2,o=h.waveform.height/2-e/2,n=document.createElement("path");switch(h.bar.align){case"top":o=0;break;case"center":o=h.waveform.height/2-e/2;break;case"bottom":o=h.waveform.height-e}n.setAttribute("d","M"+r+" "+o+" L"+r+" "+o+" L"+r+" "+(o+e)+" L"+r+" "+(o+e)+" L"+r+" "+o+" Z"),n.className=u.id,u.appendChild(n)}function o(t,e,a){for(var r=0,o=t,n=t+e-1;n>=t?n>=o:o>=n;n>=t?o++:o--)r+=Math.pow(a[o],2);return Math.sqrt(r/a.length)}function n(t){t=t.getChannelData(0);for(var e=h.waveform.width,a=Math.floor(t.length/e),n=h.waveform.height,i=[],d=0;e>d;d+=h.bar.width)i.push(1e4*o(d*a,a,t));for(var u=n/Math.max.apply(null,i),s=0;e>s;s+=h.bar.width){var w=1e4*o(s*a,a,t);w*=u,w+=1,r(s,w)}return d>=e?!0:void 0}function i(t,e){return Object.assign(h,e),u=document.createElement("svg"),u.id=a(),u.setAttribute("xmlns","http://www.w3.org/2000/svg"),u.setAttribute("version","1.1"),u.setAttributeNS(null,"viewBox","0 0 "+h.waveform.width+" "+h.waveform.height),s=document.createElement("style"),s.setAttribute("type","text/css"),s.appendChild(document.createTextNode("<![CDATA[path."+u.id+"{stroke:"+h.waveform.color+";stroke-width:"+(0!==h.bar.width?h.bar.width*Math.abs(1-h.bar.gap):h.bar.width)+"}]]>")),u.appendChild(s),new Promise(function(e,a){d.decodeAudioData(t,function(t){n(t)&&e(u.outerHTML)})})}var h={waveform:{width:500,height:80,color:"#bada55"},bar:{align:"center",width:1,gap:0}},d=new AudioContext||new WebkitAudioContext,u=null,s=null;return i}();
//# sourceMappingURL=WaveformGenerator.js.map