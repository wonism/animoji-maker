import{r as t,h as e,H as i,g as r,c as s}from"./p-3acc7d74.js";const a=class{constructor(e){t(this,e)}render(){return e(i,null,e("header",null,e("h1",null,"Animoji Maker 😜")),e("main",null,e("explosion-maker",null),e("hr",null),e("rainbow-effect",null),e("hr",null),e("text-carousel",null)),e("footer",null,e("a",{class:"bmc-button",target:"_blank",href:"https://www.buymeacoffee.com/dQ3sAxl",rel:"noopener noreferrer"},e("img",{src:"https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg",alt:"Buy me a coffee"}),e("span",null,"Buy me a coffee")),e("br",null),e("a",{class:"author",href:"https://github.com/wonism",target:"_blank",rel:"noopener noreferrer"},"©wonism")),e("aside",null,e("github-corner",null)))}static get style(){return"[aria-hidden=true]{position:absolute;padding:0;width:1px;height:1px;border:0;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);white-space:nowrap}.bmc-button{padding:7px 5px 7px 10px;line-height:35px;height:51px;min-width:217px;text-decoration:none;display:-ms-inline-flexbox;display:inline-flex;color:#fff;background-color:#57BBB3;border-radius:5px;border:1px solid transparent;padding:7px 5px 7px 10px;font-size:22px;letter-spacing:0.6px;margin:0 auto;font-family:\"Cookie\", cursive;-webkit-box-sizing:border-box;box-sizing:border-box}.bmc-button:hover,.bmc-button:active,.bmc-button:focus{text-decoration:none;opacity:0.85;color:#fff}.bmc-button img{width:35px;margin-bottom:1px;-webkit-box-shadow:none;box-shadow:none;border:none;vertical-align:middle}.author{display:inline-block;margin-top:1em;color:#fff}.author:hover,.author:active,.author:focus{text-decoration:none;opacity:0.85;color:#fff}"}},n=(t,e)=>new Promise((i,r)=>{const s=new FileReader;s.readAsDataURL(t),s.onload=()=>{const t=s.result,a=new Image;a.src=t,a.onload=()=>{var t,r;const s=document.createElement("canvas");s.width=128,s.height=128;const n=s.getContext("2d"),o=Math.min(128/a.width,128/a.height),l=a.width*o,h=a.height*o,u=(128-l)/2,d=(128-h)/2;n.globalCompositeOperation="source-over",n.drawImage(a,u,d,l,h),null!=(null===(t=e)||void 0===t?void 0:t.hue)&&(n.globalCompositeOperation="source-atop",n.fillStyle=`hsla(${e.hue}, 100%, 50%, ${r=e.alpha,null!=r?r:.5})`,n.fillRect(u,d,l,h)),i(n)},s.onerror=r}});function o(){throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")}var l,h=(function(t){t.exports=function t(e,i,r){function s(n,l){if(!i[n]){if(!e[n]){if(!l&&o)return o();if(a)return a(n,!0);var h=new Error("Cannot find module '"+n+"'");throw h.code="MODULE_NOT_FOUND",h}var u=i[n]={exports:{}};e[n][0].call(u.exports,(function(t){return s(e[n][1][t]||t)}),u,u.exports,t,e,i,r)}return i[n].exports}for(var a=o,n=0;n<r.length;n++)s(r[n]);return s}({1:[function(t,e){function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(t){return"function"==typeof t}function s(t){return"object"==typeof t&&null!==t}function a(t){return void 0===t}e.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},i.prototype.emit=function(t){var e,i,n,o,l,h;if(this._events||(this._events={}),"error"===t&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e;var u=new Error('Uncaught, unspecified "error" event. ('+e+")");throw u.context=e,u}if(a(i=this._events[t]))return!1;if(r(i))switch(arguments.length){case 1:i.call(this);break;case 2:i.call(this,arguments[1]);break;case 3:i.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),i.apply(this,o)}else if(s(i))for(o=Array.prototype.slice.call(arguments,1),n=(h=i.slice()).length,l=0;l<n;l++)h[l].apply(this,o);return!0},i.prototype.on=i.prototype.addListener=function(t,e){var n;if(!r(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,r(e.listener)?e.listener:e),this._events[t]?s(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,s(this._events[t])&&!this._events[t].warned&&(n=a(this._maxListeners)?i.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[t].length>n&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace()),this},i.prototype.once=function(t,e){if(!r(e))throw TypeError("listener must be a function");var i=!1;function s(){this.removeListener(t,s),i||(i=!0,e.apply(this,arguments))}return s.listener=e,this.on(t,s),this},i.prototype.removeListener=function(t,e){var i,a,n,o;if(!r(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(n=(i=this._events[t]).length,a=-1,i===e||r(i.listener)&&i.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(s(i)){for(o=n;o-- >0;)if(i[o]===e||i[o].listener&&i[o].listener===e){a=o;break}if(a<0)return this;1===i.length?(i.length=0,delete this._events[t]):i.splice(a,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},i.prototype.removeAllListeners=function(t){var e,i;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(r(i=this._events[t]))this.removeListener(t,i);else if(i)for(;i.length;)this.removeListener(t,i[i.length-1]);return delete this._events[t],this},i.prototype.listeners=function(t){return this._events&&this._events[t]?r(this._events[t])?[this._events[t]]:this._events[t].slice():[]},i.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(r(e))return 1;if(e)return e.length}return 0},i.listenerCount=function(t,e){return t.listenerCount(e)}},{}],2:[function(t,e){var i,r,s,a,n;n=navigator.userAgent.toLowerCase(),a=navigator.platform.toLowerCase(),s="ie"===(i=n.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0])[1]&&document.documentMode,(r={name:"version"===i[1]?i[3]:i[1],version:s||parseFloat("opera"===i[1]&&i[4]?i[4]:i[2]),platform:{name:n.match(/ip(?:ad|od|hone)/)?"ios":(n.match(/(?:webos|android)/)||a.match(/mac|win|linux/)||["other"])[0]}})[r.name]=!0,r[r.name+parseInt(r.version,10)]=!0,r.platform[r.platform.name]=!0,e.exports=r},{}],3:[function(t,e){var i,r,s,a={}.hasOwnProperty,n=[].indexOf||function(t){for(var e=0,i=this.length;e<i;e++)if(e in this&&this[e]===t)return e;return-1},o=[].slice;i=t("events").EventEmitter,s=t("./browser.coffee"),r=function(t){var e,i;function r(t){var i,r;for(r in this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(t),e)null==(i=this.options)[r]&&(i[r]=e[r])}return function(t,e){for(var i in e)a.call(e,i)&&(t[i]=e[i]);function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype}(r,t),e={workerScript:"gif.worker.js",workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},i={delay:500,copy:!1},r.prototype.setOption=function(t,e){if(this.options[t]=e,null!=this._canvas&&("width"===t||"height"===t))return this._canvas[t]=e},r.prototype.setOptions=function(t){var e,i;for(e in i=[],t)a.call(t,e)&&i.push(this.setOption(e,t[e]));return i},r.prototype.addFrame=function(t,e){var r,s;for(s in null==e&&(e={}),(r={}).transparent=this.options.transparent,i)r[s]=e[s]||i[s];if(null==this.options.width&&this.setOption("width",t.width),null==this.options.height&&this.setOption("height",t.height),"undefined"!=typeof ImageData&&null!==ImageData&&t instanceof ImageData)r.data=t.data;else if("undefined"!=typeof CanvasRenderingContext2D&&null!==CanvasRenderingContext2D&&t instanceof CanvasRenderingContext2D||"undefined"!=typeof WebGLRenderingContext&&null!==WebGLRenderingContext&&t instanceof WebGLRenderingContext)e.copy?r.data=this.getContextData(t):r.context=t;else{if(null==t.childNodes)throw new Error("Invalid image");e.copy?r.data=this.getImageData(t):r.image=t}return this.frames.push(r)},r.prototype.render=function(){var t,e,i;if(this.running)throw new Error("Already running");if(null==this.options.width||null==this.options.height)throw new Error("Width and height must be set prior to rendering");if(this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=function(){var t,e,i;for(i=[],t=0,e=this.frames.length;0<=e?t<e:t>e;0<=e?++t:--t)i.push(null);return i}.call(this),e=this.spawnWorkers(),!0===this.options.globalPalette)this.renderNextFrame();else for(t=0,i=e;0<=i?t<i:t>i;0<=i?++t:--t)this.renderNextFrame();return this.emit("start"),this.emit("progress",0)},r.prototype.abort=function(){for(var t;null!=(t=this.activeWorkers.shift());)this.log("killing active worker"),t.terminate();return this.running=!1,this.emit("abort")},r.prototype.spawnWorkers=function(){var t,e,i,r;return t=Math.min(this.options.workers,this.frames.length),function(){i=[];for(var r=e=this.freeWorkers.length;e<=t?r<t:r>t;e<=t?r++:r--)i.push(r);return i}.apply(this).forEach((r=this,function(t){var e;return r.log("spawning worker "+t),(e=new Worker(r.options.workerScript)).onmessage=function(t){return r.activeWorkers.splice(r.activeWorkers.indexOf(e),1),r.freeWorkers.push(e),r.frameFinished(t.data)},r.freeWorkers.push(e)})),t},r.prototype.frameFinished=function(t){var e,i;if(this.log("frame "+t.index+" finished - "+this.activeWorkers.length+" active"),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[t.index]=t,!0===this.options.globalPalette&&(this.options.globalPalette=t.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(e=1,i=this.freeWorkers.length;1<=i?e<i:e>i;1<=i?++e:--e)this.renderNextFrame();return n.call(this.imageParts,null)>=0?this.renderNextFrame():this.finishRendering()},r.prototype.finishRendering=function(){var t,e,i,r,s,a,n,o,l,h,u,d,c,f,p;for(o=0,s=0,l=(c=this.imageParts).length;s<l;s++)o+=((e=c[s]).data.length-1)*e.pageSize+e.cursor;for(o+=e.pageSize-e.cursor,this.log("rendering finished - filesize "+Math.round(o/1e3)+"kb"),t=new Uint8Array(o),d=0,a=0,h=(f=this.imageParts).length;a<h;a++)for(i=n=0,u=(p=(e=f[a]).data).length;n<u;i=++n)t.set(p[i],d),d+=i===e.data.length-1?e.cursor:e.pageSize;return r=new Blob([t],{type:"image/gif"}),this.emit("finished",r,t)},r.prototype.renderNextFrame=function(){var t,e,i;if(0===this.freeWorkers.length)throw new Error("No free workers");if(!(this.nextFrame>=this.frames.length))return t=this.frames[this.nextFrame++],i=this.freeWorkers.shift(),e=this.getTask(t),this.log("starting frame "+(e.index+1)+" of "+this.frames.length),this.activeWorkers.push(i),i.postMessage(e)},r.prototype.getContextData=function(t){return t.getImageData(0,0,this.options.width,this.options.height).data},r.prototype.getImageData=function(t){var e;return null==this._canvas&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height),(e=this._canvas.getContext("2d")).setFill=this.options.background,e.fillRect(0,0,this.options.width,this.options.height),e.drawImage(t,0,0),this.getContextData(e)},r.prototype.getTask=function(t){var e,i;if(i={index:e=this.frames.indexOf(t),last:e===this.frames.length-1,delay:t.delay,transparent:t.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:"chrome"===s.name},null!=t.data)i.data=t.data;else if(null!=t.context)i.data=this.getContextData(t.context);else{if(null==t.image)throw new Error("Invalid frame");i.data=this.getImageData(t.image)}return i},r.prototype.log=function(){var t;if(t=1<=arguments.length?o.call(arguments,0):[],this.options.debug)return console.log.apply(console,t)},r}(i),e.exports=r},{"./browser.coffee":2,events:1}]},{},[3])(3)}(l={exports:{}}),l.exports);const u='// gif.worker.js 0.2.0 - https://github.com/jnordberg/gif.js\n(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module \'"+o+"\'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){var NeuQuant=require("./TypedNeuQuant.js");var LZWEncoder=require("./LZWEncoder.js");function ByteArray(){this.page=-1;this.pages=[];this.newPage()}ByteArray.pageSize=4096;ByteArray.charMap={};for(var i=0;i<256;i++)ByteArray.charMap[i]=String.fromCharCode(i);ByteArray.prototype.newPage=function(){this.pages[++this.page]=new Uint8Array(ByteArray.pageSize);this.cursor=0};ByteArray.prototype.getData=function(){var rv="";for(var p=0;p<this.pages.length;p++){for(var i=0;i<ByteArray.pageSize;i++){rv+=ByteArray.charMap[this.pages[p][i]]}}return rv};ByteArray.prototype.writeByte=function(val){if(this.cursor>=ByteArray.pageSize)this.newPage();this.pages[this.page][this.cursor++]=val};ByteArray.prototype.writeUTFBytes=function(string){for(var l=string.length,i=0;i<l;i++)this.writeByte(string.charCodeAt(i))};ByteArray.prototype.writeBytes=function(array,offset,length){for(var l=length||array.length,i=offset||0;i<l;i++)this.writeByte(array[i])};function GIFEncoder(width,height){this.width=~~width;this.height=~~height;this.transparent=null;this.transIndex=0;this.repeat=-1;this.delay=0;this.image=null;this.pixels=null;this.indexedPixels=null;this.colorDepth=null;this.colorTab=null;this.neuQuant=null;this.usedEntry=new Array;this.palSize=7;this.dispose=-1;this.firstFrame=true;this.sample=10;this.dither=false;this.globalPalette=false;this.out=new ByteArray}GIFEncoder.prototype.setDelay=function(milliseconds){this.delay=Math.round(milliseconds/10)};GIFEncoder.prototype.setFrameRate=function(fps){this.delay=Math.round(100/fps)};GIFEncoder.prototype.setDispose=function(disposalCode){if(disposalCode>=0)this.dispose=disposalCode};GIFEncoder.prototype.setRepeat=function(repeat){this.repeat=repeat};GIFEncoder.prototype.setTransparent=function(color){this.transparent=color};GIFEncoder.prototype.addFrame=function(imageData){this.image=imageData;this.colorTab=this.globalPalette&&this.globalPalette.slice?this.globalPalette:null;this.getImagePixels();this.analyzePixels();if(this.globalPalette===true)this.globalPalette=this.colorTab;if(this.firstFrame){this.writeLSD();this.writePalette();if(this.repeat>=0){this.writeNetscapeExt()}}this.writeGraphicCtrlExt();this.writeImageDesc();if(!this.firstFrame&&!this.globalPalette)this.writePalette();this.writePixels();this.firstFrame=false};GIFEncoder.prototype.finish=function(){this.out.writeByte(59)};GIFEncoder.prototype.setQuality=function(quality){if(quality<1)quality=1;this.sample=quality};GIFEncoder.prototype.setDither=function(dither){if(dither===true)dither="FloydSteinberg";this.dither=dither};GIFEncoder.prototype.setGlobalPalette=function(palette){this.globalPalette=palette};GIFEncoder.prototype.getGlobalPalette=function(){return this.globalPalette&&this.globalPalette.slice&&this.globalPalette.slice(0)||this.globalPalette};GIFEncoder.prototype.writeHeader=function(){this.out.writeUTFBytes("GIF89a")};GIFEncoder.prototype.analyzePixels=function(){if(!this.colorTab){this.neuQuant=new NeuQuant(this.pixels,this.sample);this.neuQuant.buildColormap();this.colorTab=this.neuQuant.getColormap()}if(this.dither){this.ditherPixels(this.dither.replace("-serpentine",""),this.dither.match(/-serpentine/)!==null)}else{this.indexPixels()}this.pixels=null;this.colorDepth=8;this.palSize=7;if(this.transparent!==null){this.transIndex=this.findClosest(this.transparent,true)}};GIFEncoder.prototype.indexPixels=function(imgq){var nPix=this.pixels.length/3;this.indexedPixels=new Uint8Array(nPix);var k=0;for(var j=0;j<nPix;j++){var index=this.findClosestRGB(this.pixels[k++]&255,this.pixels[k++]&255,this.pixels[k++]&255);this.usedEntry[index]=true;this.indexedPixels[j]=index}};GIFEncoder.prototype.ditherPixels=function(kernel,serpentine){var kernels={FalseFloydSteinberg:[[3/8,1,0],[3/8,0,1],[2/8,1,1]],FloydSteinberg:[[7/16,1,0],[3/16,-1,1],[5/16,0,1],[1/16,1,1]],Stucki:[[8/42,1,0],[4/42,2,0],[2/42,-2,1],[4/42,-1,1],[8/42,0,1],[4/42,1,1],[2/42,2,1],[1/42,-2,2],[2/42,-1,2],[4/42,0,2],[2/42,1,2],[1/42,2,2]],Atkinson:[[1/8,1,0],[1/8,2,0],[1/8,-1,1],[1/8,0,1],[1/8,1,1],[1/8,0,2]]};if(!kernel||!kernels[kernel]){throw"Unknown dithering kernel: "+kernel}var ds=kernels[kernel];var index=0,height=this.height,width=this.width,data=this.pixels;var direction=serpentine?-1:1;this.indexedPixels=new Uint8Array(this.pixels.length/3);for(var y=0;y<height;y++){if(serpentine)direction=direction*-1;for(var x=direction==1?0:width-1,xend=direction==1?width:0;x!==xend;x+=direction){index=y*width+x;var idx=index*3;var r1=data[idx];var g1=data[idx+1];var b1=data[idx+2];idx=this.findClosestRGB(r1,g1,b1);this.usedEntry[idx]=true;this.indexedPixels[index]=idx;idx*=3;var r2=this.colorTab[idx];var g2=this.colorTab[idx+1];var b2=this.colorTab[idx+2];var er=r1-r2;var eg=g1-g2;var eb=b1-b2;for(var i=direction==1?0:ds.length-1,end=direction==1?ds.length:0;i!==end;i+=direction){var x1=ds[i][1];var y1=ds[i][2];if(x1+x>=0&&x1+x<width&&y1+y>=0&&y1+y<height){var d=ds[i][0];idx=index+x1+y1*width;idx*=3;data[idx]=Math.max(0,Math.min(255,data[idx]+er*d));data[idx+1]=Math.max(0,Math.min(255,data[idx+1]+eg*d));data[idx+2]=Math.max(0,Math.min(255,data[idx+2]+eb*d))}}}}};GIFEncoder.prototype.findClosest=function(c,used){return this.findClosestRGB((c&16711680)>>16,(c&65280)>>8,c&255,used)};GIFEncoder.prototype.findClosestRGB=function(r,g,b,used){if(this.colorTab===null)return-1;if(this.neuQuant&&!used){return this.neuQuant.lookupRGB(r,g,b)}var c=b|g<<8|r<<16;var minpos=0;var dmin=256*256*256;var len=this.colorTab.length;for(var i=0,index=0;i<len;index++){var dr=r-(this.colorTab[i++]&255);var dg=g-(this.colorTab[i++]&255);var db=b-(this.colorTab[i++]&255);var d=dr*dr+dg*dg+db*db;if((!used||this.usedEntry[index])&&d<dmin){dmin=d;minpos=index}}return minpos};GIFEncoder.prototype.getImagePixels=function(){var w=this.width;var h=this.height;this.pixels=new Uint8Array(w*h*3);var data=this.image;var srcPos=0;var count=0;for(var i=0;i<h;i++){for(var j=0;j<w;j++){this.pixels[count++]=data[srcPos++];this.pixels[count++]=data[srcPos++];this.pixels[count++]=data[srcPos++];srcPos++}}};GIFEncoder.prototype.writeGraphicCtrlExt=function(){this.out.writeByte(33);this.out.writeByte(249);this.out.writeByte(4);var transp,disp;if(this.transparent===null){transp=0;disp=0}else{transp=1;disp=2}if(this.dispose>=0){disp=dispose&7}disp<<=2;this.out.writeByte(0|disp|0|transp);this.writeShort(this.delay);this.out.writeByte(this.transIndex);this.out.writeByte(0)};GIFEncoder.prototype.writeImageDesc=function(){this.out.writeByte(44);this.writeShort(0);this.writeShort(0);this.writeShort(this.width);this.writeShort(this.height);if(this.firstFrame||this.globalPalette){this.out.writeByte(0)}else{this.out.writeByte(128|0|0|0|this.palSize)}};GIFEncoder.prototype.writeLSD=function(){this.writeShort(this.width);this.writeShort(this.height);this.out.writeByte(128|112|0|this.palSize);this.out.writeByte(0);this.out.writeByte(0)};GIFEncoder.prototype.writeNetscapeExt=function(){this.out.writeByte(33);this.out.writeByte(255);this.out.writeByte(11);this.out.writeUTFBytes("NETSCAPE2.0");this.out.writeByte(3);this.out.writeByte(1);this.writeShort(this.repeat);this.out.writeByte(0)};GIFEncoder.prototype.writePalette=function(){this.out.writeBytes(this.colorTab);var n=3*256-this.colorTab.length;for(var i=0;i<n;i++)this.out.writeByte(0)};GIFEncoder.prototype.writeShort=function(pValue){this.out.writeByte(pValue&255);this.out.writeByte(pValue>>8&255)};GIFEncoder.prototype.writePixels=function(){var enc=new LZWEncoder(this.width,this.height,this.indexedPixels,this.colorDepth);enc.encode(this.out)};GIFEncoder.prototype.stream=function(){return this.out};module.exports=GIFEncoder},{"./LZWEncoder.js":2,"./TypedNeuQuant.js":3}],2:[function(require,module,exports){var EOF=-1;var BITS=12;var HSIZE=5003;var masks=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535];function LZWEncoder(width,height,pixels,colorDepth){var initCodeSize=Math.max(2,colorDepth);var accum=new Uint8Array(256);var htab=new Int32Array(HSIZE);var codetab=new Int32Array(HSIZE);var cur_accum,cur_bits=0;var a_count;var free_ent=0;var maxcode;var clear_flg=false;var g_init_bits,ClearCode,EOFCode;function char_out(c,outs){accum[a_count++]=c;if(a_count>=254)flush_char(outs)}function cl_block(outs){cl_hash(HSIZE);free_ent=ClearCode+2;clear_flg=true;output(ClearCode,outs)}function cl_hash(hsize){for(var i=0;i<hsize;++i)htab[i]=-1}function compress(init_bits,outs){var fcode,c,i,ent,disp,hsize_reg,hshift;g_init_bits=init_bits;clear_flg=false;n_bits=g_init_bits;maxcode=MAXCODE(n_bits);ClearCode=1<<init_bits-1;EOFCode=ClearCode+1;free_ent=ClearCode+2;a_count=0;ent=nextPixel();hshift=0;for(fcode=HSIZE;fcode<65536;fcode*=2)++hshift;hshift=8-hshift;hsize_reg=HSIZE;cl_hash(hsize_reg);output(ClearCode,outs);outer_loop:while((c=nextPixel())!=EOF){fcode=(c<<BITS)+ent;i=c<<hshift^ent;if(htab[i]===fcode){ent=codetab[i];continue}else if(htab[i]>=0){disp=hsize_reg-i;if(i===0)disp=1;do{if((i-=disp)<0)i+=hsize_reg;if(htab[i]===fcode){ent=codetab[i];continue outer_loop}}while(htab[i]>=0)}output(ent,outs);ent=c;if(free_ent<1<<BITS){codetab[i]=free_ent++;htab[i]=fcode}else{cl_block(outs)}}output(ent,outs);output(EOFCode,outs)}function encode(outs){outs.writeByte(initCodeSize);remaining=width*height;curPixel=0;compress(initCodeSize+1,outs);outs.writeByte(0)}function flush_char(outs){if(a_count>0){outs.writeByte(a_count);outs.writeBytes(accum,0,a_count);a_count=0}}function MAXCODE(n_bits){return(1<<n_bits)-1}function nextPixel(){if(remaining===0)return EOF;--remaining;var pix=pixels[curPixel++];return pix&255}function output(code,outs){cur_accum&=masks[cur_bits];if(cur_bits>0)cur_accum|=code<<cur_bits;else cur_accum=code;cur_bits+=n_bits;while(cur_bits>=8){char_out(cur_accum&255,outs);cur_accum>>=8;cur_bits-=8}if(free_ent>maxcode||clear_flg){if(clear_flg){maxcode=MAXCODE(n_bits=g_init_bits);clear_flg=false}else{++n_bits;if(n_bits==BITS)maxcode=1<<BITS;else maxcode=MAXCODE(n_bits)}}if(code==EOFCode){while(cur_bits>0){char_out(cur_accum&255,outs);cur_accum>>=8;cur_bits-=8}flush_char(outs)}}this.encode=encode}module.exports=LZWEncoder},{}],3:[function(require,module,exports){var ncycles=100;var netsize=256;var maxnetpos=netsize-1;var netbiasshift=4;var intbiasshift=16;var intbias=1<<intbiasshift;var gammashift=10;var gamma=1<<gammashift;var betashift=10;var beta=intbias>>betashift;var betagamma=intbias<<gammashift-betashift;var initrad=netsize>>3;var radiusbiasshift=6;var radiusbias=1<<radiusbiasshift;var initradius=initrad*radiusbias;var radiusdec=30;var alphabiasshift=10;var initalpha=1<<alphabiasshift;var alphadec;var radbiasshift=8;var radbias=1<<radbiasshift;var alpharadbshift=alphabiasshift+radbiasshift;var alpharadbias=1<<alpharadbshift;var prime1=499;var prime2=491;var prime3=487;var prime4=503;var minpicturebytes=3*prime4;function NeuQuant(pixels,samplefac){var network;var netindex;var bias;var freq;var radpower;function init(){network=[];netindex=new Int32Array(256);bias=new Int32Array(netsize);freq=new Int32Array(netsize);radpower=new Int32Array(netsize>>3);var i,v;for(i=0;i<netsize;i++){v=(i<<netbiasshift+8)/netsize;network[i]=new Float64Array([v,v,v,0]);freq[i]=intbias/netsize;bias[i]=0}}function unbiasnet(){for(var i=0;i<netsize;i++){network[i][0]>>=netbiasshift;network[i][1]>>=netbiasshift;network[i][2]>>=netbiasshift;network[i][3]=i}}function altersingle(alpha,i,b,g,r){network[i][0]-=alpha*(network[i][0]-b)/initalpha;network[i][1]-=alpha*(network[i][1]-g)/initalpha;network[i][2]-=alpha*(network[i][2]-r)/initalpha}function alterneigh(radius,i,b,g,r){var lo=Math.abs(i-radius);var hi=Math.min(i+radius,netsize);var j=i+1;var k=i-1;var m=1;var p,a;while(j<hi||k>lo){a=radpower[m++];if(j<hi){p=network[j++];p[0]-=a*(p[0]-b)/alpharadbias;p[1]-=a*(p[1]-g)/alpharadbias;p[2]-=a*(p[2]-r)/alpharadbias}if(k>lo){p=network[k--];p[0]-=a*(p[0]-b)/alpharadbias;p[1]-=a*(p[1]-g)/alpharadbias;p[2]-=a*(p[2]-r)/alpharadbias}}}function contest(b,g,r){var bestd=~(1<<31);var bestbiasd=bestd;var bestpos=-1;var bestbiaspos=bestpos;var i,n,dist,biasdist,betafreq;for(i=0;i<netsize;i++){n=network[i];dist=Math.abs(n[0]-b)+Math.abs(n[1]-g)+Math.abs(n[2]-r);if(dist<bestd){bestd=dist;bestpos=i}biasdist=dist-(bias[i]>>intbiasshift-netbiasshift);if(biasdist<bestbiasd){bestbiasd=biasdist;bestbiaspos=i}betafreq=freq[i]>>betashift;freq[i]-=betafreq;bias[i]+=betafreq<<gammashift}freq[bestpos]+=beta;bias[bestpos]-=betagamma;return bestbiaspos}function inxbuild(){var i,j,p,q,smallpos,smallval,previouscol=0,startpos=0;for(i=0;i<netsize;i++){p=network[i];smallpos=i;smallval=p[1];for(j=i+1;j<netsize;j++){q=network[j];if(q[1]<smallval){smallpos=j;smallval=q[1]}}q=network[smallpos];if(i!=smallpos){j=q[0];q[0]=p[0];p[0]=j;j=q[1];q[1]=p[1];p[1]=j;j=q[2];q[2]=p[2];p[2]=j;j=q[3];q[3]=p[3];p[3]=j}if(smallval!=previouscol){netindex[previouscol]=startpos+i>>1;for(j=previouscol+1;j<smallval;j++)netindex[j]=i;previouscol=smallval;startpos=i}}netindex[previouscol]=startpos+maxnetpos>>1;for(j=previouscol+1;j<256;j++)netindex[j]=maxnetpos}function inxsearch(b,g,r){var a,p,dist;var bestd=1e3;var best=-1;var i=netindex[g];var j=i-1;while(i<netsize||j>=0){if(i<netsize){p=network[i];dist=p[1]-g;if(dist>=bestd)i=netsize;else{i++;if(dist<0)dist=-dist;a=p[0]-b;if(a<0)a=-a;dist+=a;if(dist<bestd){a=p[2]-r;if(a<0)a=-a;dist+=a;if(dist<bestd){bestd=dist;best=p[3]}}}}if(j>=0){p=network[j];dist=g-p[1];if(dist>=bestd)j=-1;else{j--;if(dist<0)dist=-dist;a=p[0]-b;if(a<0)a=-a;dist+=a;if(dist<bestd){a=p[2]-r;if(a<0)a=-a;dist+=a;if(dist<bestd){bestd=dist;best=p[3]}}}}}return best}function learn(){var i;var lengthcount=pixels.length;var alphadec=30+(samplefac-1)/3;var samplepixels=lengthcount/(3*samplefac);var delta=~~(samplepixels/ncycles);var alpha=initalpha;var radius=initradius;var rad=radius>>radiusbiasshift;if(rad<=1)rad=0;for(i=0;i<rad;i++)radpower[i]=alpha*((rad*rad-i*i)*radbias/(rad*rad));var step;if(lengthcount<minpicturebytes){samplefac=1;step=3}else if(lengthcount%prime1!==0){step=3*prime1}else if(lengthcount%prime2!==0){step=3*prime2}else if(lengthcount%prime3!==0){step=3*prime3}else{step=3*prime4}var b,g,r,j;var pix=0;i=0;while(i<samplepixels){b=(pixels[pix]&255)<<netbiasshift;g=(pixels[pix+1]&255)<<netbiasshift;r=(pixels[pix+2]&255)<<netbiasshift;j=contest(b,g,r);altersingle(alpha,j,b,g,r);if(rad!==0)alterneigh(rad,j,b,g,r);pix+=step;if(pix>=lengthcount)pix-=lengthcount;i++;if(delta===0)delta=1;if(i%delta===0){alpha-=alpha/alphadec;radius-=radius/radiusdec;rad=radius>>radiusbiasshift;if(rad<=1)rad=0;for(j=0;j<rad;j++)radpower[j]=alpha*((rad*rad-j*j)*radbias/(rad*rad))}}}function buildColormap(){init();learn();unbiasnet();inxbuild()}this.buildColormap=buildColormap;function getColormap(){var map=[];var index=[];for(var i=0;i<netsize;i++)index[network[i][3]]=i;var k=0;for(var l=0;l<netsize;l++){var j=index[l];map[k++]=network[j][0];map[k++]=network[j][1];map[k++]=network[j][2]}return map}this.getColormap=getColormap;this.lookupRGB=inxsearch}module.exports=NeuQuant},{}],4:[function(require,module,exports){var GIFEncoder,renderFrame;GIFEncoder=require("./GIFEncoder.js");renderFrame=function(frame){var encoder,page,stream,transfer;encoder=new GIFEncoder(frame.width,frame.height);if(frame.index===0){encoder.writeHeader()}else{encoder.firstFrame=false}encoder.setTransparent(frame.transparent);encoder.setRepeat(frame.repeat);encoder.setDelay(frame.delay);encoder.setQuality(frame.quality);encoder.setDither(frame.dither);encoder.setGlobalPalette(frame.globalPalette);encoder.addFrame(frame.data);if(frame.last){encoder.finish()}if(frame.globalPalette===true){frame.globalPalette=encoder.getGlobalPalette()}stream=encoder.stream();frame.data=stream.pages;frame.cursor=stream.cursor;frame.pageSize=stream.constructor.pageSize;if(frame.canTransfer){transfer=function(){var i,len,ref,results;ref=frame.data;results=[];for(i=0,len=ref.length;i<len;i++){page=ref[i];results.push(page.buffer)}return results}();return self.postMessage(frame,transfer)}else{return self.postMessage(frame)}};self.onmessage=function(event){return renderFrame(event.data)}},{"./GIFEncoder.js":1}]},{},[4]);';let d;try{d=new Blob([u],{type:"application/javascript"})}catch(w){const t=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder;d=new t,d.append(u),d=d.getBlob()}const c=(t,{emptyImage:e,animationFrames:i,interval:r=100})=>new Promise(s=>{const a=new h({workers:4,workerScript:URL.createObjectURL(d),quality:10,background:"transparent",transparent:"transparent",width:128,height:128});(Array.isArray(t)?t:[t,t,t,t,e,e,t,t,t,e,e,t,e,e,t,e,t,e,t,e,t,e,...Array.from(i)].filter(t=>null!=t)).forEach(t=>{a.addFrame(t,{delay:r})}),a.on("finished",t=>{const e=URL.createObjectURL(t);s(e)}),a.render()}),f=class{constructor(e){t(this,e),this.explosionImage=null,this.uploading=!1,this.emptyImage=null,this.animationFrames=null,this.handleChange=async t=>{this.uploading=!0,this.explosionImage=null;const e=t.target.files.item(0),i=await n(e),r=await c(i,{emptyImage:this.emptyImage,animationFrames:this.animationFrames});this.explosionImage=r,this.uploading=!1},this.afterLoad=t=>{this.animationFrames=t}}handleLoad(t){this.emptyImage=t.currentTarget}render(){var t;return e("section",null,e("h2",null,"Explosion Effect"),e("div",{"aria-hidden":"true"},e("img",{class:"empty-image",width:128,height:128,src:r("../../assets/empty.gif").replace(/^\//,""),role:"presentation",onLoad:t=>{this.handleLoad(t)}})),e("image-group",{afterLoad:this.afterLoad}),e("div",null,e("img",{src:(t=this.explosionImage,null!=t?t:""),width:128,height:128,role:"presentation"})),e("label",null,e("input",{id:"explosion-target",type:"file",accept:"image/*",onChange:this.handleChange,disabled:this.uploading}),e("span",null,"Upload Image")))}static get style(){return"[aria-hidden=true]{position:absolute;padding:0;width:1px;height:1px;border:0;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);white-space:nowrap}input[type=file]{display:none}input[type=file]+span{display:inline-block;margin:20px 0 32px;padding:12px 24px;color:#fff;background-color:#57BBB3;border-radius:3px;font-weight:700;-webkit-box-shadow:inset 0 -3px 0 rgba(0, 0, 0, 0.1);box-shadow:inset 0 -3px 0 rgba(0, 0, 0, 0.1);cursor:pointer}input[type=file]:disabled+span{opacity:0.5;cursor:not-allowed}input[type=file]:not(disabled)+span:hover,input[type=file]:not(disabled)+span:focus{-webkit-box-shadow:inset 0 -3px 0 rgba(0, 0, 0, 0.1), inset 0 -8em 0 rgba(255, 255, 255, 0.2);box-shadow:inset 0 -3px 0 rgba(0, 0, 0, 0.1), inset 0 -8em 0 rgba(255, 255, 255, 0.2)}input[type=file]:not(disabled)+span:active{-webkit-box-shadow:inset 0 -1px 0 rgba(0, 0, 0, 0.07), inset 0 -8em 0 rgba(0, 0, 0, 0.15);box-shadow:inset 0 -1px 0 rgba(0, 0, 0, 0.07), inset 0 -8em 0 rgba(0, 0, 0, 0.15)}img{border:1px dashed #57BBB3;border-radius:4px}img[src=\"\"]{content:url(\"data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\")}"}},p=class{constructor(e){t(this,e)}render(){return e("a",{href:"https://github.com/wonism/animoji-maker",class:"github-corner","aria-label":"View source on GitHub",target:"_blank",rel:"noopener noreferrer"},e("svg",{viewBox:"0 0 250 250"},e("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),e("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",class:"octo-arm"}),e("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",class:"octo-body"})))}static get style(){return".github-corner:hover .octo-arm{-webkit-animation:octocat-wave 560ms ease-in-out;animation:octocat-wave 560ms ease-in-out}.github-corner .octo-arm{-webkit-transform-origin:130px 106px;transform-origin:130px 106px}.github-corner>svg{position:absolute;top:0;right:0;width:80px;height:80px;color:#fff;border:0;fill:#57BBB3;z-index:1}\@-webkit-keyframes octocat-wave{0%,100%{-webkit-transform:rotate(0);transform:rotate(0)}20%,60%{-webkit-transform:rotate(-25deg);transform:rotate(-25deg)}40%,80%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}}\@keyframes octocat-wave{0%,100%{-webkit-transform:rotate(0);transform:rotate(0)}20%,60%{-webkit-transform:rotate(-25deg);transform:rotate(-25deg)}40%,80%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}}\@media (max-width: 500px){.github-corner:hover .octo-arm{-webkit-animation:none;animation:none}.github-corner .octo-arm{-webkit-animation:octocat-wave 560ms ease-in-out;animation:octocat-wave 560ms ease-in-out}}"}},b=class{constructor(e){t(this,e),this.totalImageCount=17,this.renderedCount=0}handleLoad(){this.renderedCount++}get fullyLoaded(){return this.totalImageCount===this.renderedCount}componentDidRender(){const t=this.element.querySelectorAll("img");this.fullyLoaded&&this.afterLoad(t)}render(){return e("div",{class:"image-group","aria-hidden":"true"},new Array(this.totalImageCount).fill(null).map((t,i)=>{const s=r(`../../assets/explosion-${i+1}.gif`);return e("img",{src:s.replace(/^\//,""),role:"presentation",onLoad:()=>{this.handleLoad()}})}))}get element(){return s(this)}},m=class{constructor(e){t(this,e),this.file=null,this.rainbowImage=null,this.uploading=!1,this.alpha="0.5"}async addEffect(){if(null==this.file)return;this.uploading=!0;const t=new Array(24).fill(15).map((t,e)=>t*e),e=await Promise.all(t.map(async t=>await n(this.file,{hue:t,alpha:this.alpha}))),i=await c(e,{interval:50});this.rainbowImage=i,this.uploading=!1}handleChange(t,e){this.rainbowImage=null,"alpha"===e?this.alpha=t.target.value:this.file=t.target.files.item(0),this.addEffect()}render(){var t;return e("section",null,e("h2",null,"Rainbow Effect"),e("div",null,e("img",{src:(t=this.rainbowImage,null!=t?t:""),width:128,height:128,role:"presentation"})),e("fieldset",null,e("label",null,e("span",null,"Alpha(0.1-1): "),e("input",{type:"range",min:.1,max:1,step:.1,onChange:t=>{this.handleChange(t,"alpha")},value:this.alpha,disabled:this.uploading})),e("label",{class:"output-label"},e("span",null,"Alpha(0.1-1): "),e("output",null,this.alpha))),e("label",null,e("input",{id:"rainbow-target",type:"file",accept:"image/*",onChange:t=>{this.handleChange(t,"rainbowImage")},disabled:this.uploading}),e("span",null,"Upload Image")))}static get style(){return""}},g=["monospace","Lato","Nanum Gothic","Noto Sans KR"],v=class{constructor(e){t(this,e),this.textImage=null,this.text="",this.fgColor="#000000",this.bgColor="#ffffff",this.fontFamily="monospace",this.interval=300,this.uploading=!1,this.yPos="0"}async handleSubmit(){if(0===this.text.length)return alert("Please input.");this.uploading=!0,this.textImage=null;const t=this.text.split(""),e=await Promise.all(t.map(async t=>await((t,e,i,r,s)=>new Promise(a=>{const n=document.createElement("canvas");n.width=128,n.height=128;const o=n.getContext("2d");o.beginPath(),o.rect(0,0,128,128),o.fillStyle=i,o.fill(),o.font=`normal bold ${128/1.4}px ${r}`,o.textAlign="center",o.textBaseline="middle",o.fillStyle=e,o.fillText(t,64,64+Number(s)),a(o)}))(t,this.fgColor,this.bgColor,this.fontFamily,this.yPos))),i=await c(e,{interval:this.interval});this.textImage=i,this.uploading=!1}handleChange(t,e){this[e]="interval"===e?Number(t.target.value.replace(/\D/g,"")):t.target.value}render(){var t;return e("section",null,e("h2",null,"Text Carousel"),e("form",{onSubmit:t=>{t.preventDefault(),this.handleSubmit()}},e("output",null,e("img",{src:(t=this.textImage,null!=t?t:""),width:128,height:128,role:"presentation"})),e("fieldset",null,e("label",null,e("span",null,"Text: "),e("input",{type:"text",value:this.text,onChange:t=>{this.handleChange(t,"text")},placeholder:"Will be shown up one by one"})),e("label",null,e("span",null,"Text Color: "),e("input",{type:"color",value:this.fgColor,onChange:t=>{this.handleChange(t,"fgColor")}})),e("label",null,e("span",null,"Background Color: "),e("input",{type:"color",value:this.bgColor,onChange:t=>{this.handleChange(t,"bgColor")}})),e("label",null,e("span",null,"Interval: "),e("input",{type:"text",value:this.interval,onChange:t=>{this.handleChange(t,"interval")}})),e("label",null,e("span",null,"Font: "),e("select",{onChange:t=>{this.handleChange(t,"fontFamily")}},g.map(t=>e("option",{value:t,selected:this.fontFamily===t},t)))),e("label",null,e("span",null,"Y-Coord: "),e("input",{type:"range",min:-30,max:30,step:1,onChange:t=>{this.handleChange(t,"yPos")},value:this.yPos})),e("label",{class:"output-label"},e("span",null,"Y-Coord: "),e("output",null,this.yPos,"px"))),e("button",{type:"button",class:"submit",disabled:this.uploading,onClick:()=>{this.handleSubmit()}},"Submit")))}static get style(){return"\@import url(\"https://fonts.googleapis.com/css?family=Lato|Nanum+Gothic|Noto+Sans+KR&display=swap\");img{border:1px dashed #57BBB3;border-radius:4px}img[src=\"\"]{content:url(\"data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\")}fieldset{margin:20px auto 0;max-width:240px;border:0;text-align:left}fieldset>label{display:-ms-flexbox;display:flex;line-height:32px;-ms-flex-align:center;align-items:center;white-space:nowrap}fieldset>label>input:not([type=color]),fieldset>label>select{-ms-flex:1;flex:1}.output-label{line-height:1}.output-label span{color:transparent}.submit{display:inline-block;margin:20px 0 32px;padding:12px 24px;color:#fff;background-color:#57BBB3;border:0;border-radius:3px;font-weight:700;-webkit-box-shadow:inset 0 -3px 0 rgba(0, 0, 0, 0.1);box-shadow:inset 0 -3px 0 rgba(0, 0, 0, 0.1);cursor:pointer;outline:0}.submit:disabled{opacity:0.5;cursor:not-allowed}.submit:hover,.submit:focus{-webkit-box-shadow:inset 0 -3px 0 rgba(0, 0, 0, 0.1), inset 0 -8em 0 rgba(255, 255, 255, 0.2);box-shadow:inset 0 -3px 0 rgba(0, 0, 0, 0.1), inset 0 -8em 0 rgba(255, 255, 255, 0.2)}.submit:active{-webkit-box-shadow:inset 0 -1px 0 rgba(0, 0, 0, 0.07), inset 0 -8em 0 rgba(0, 0, 0, 0.15);box-shadow:inset 0 -1px 0 rgba(0, 0, 0, 0.07), inset 0 -8em 0 rgba(0, 0, 0, 0.15)}"}};export{a as app_root,f as explosion_maker,p as github_corner,b as image_group,m as rainbow_effect,v as text_carousel};