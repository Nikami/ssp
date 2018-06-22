!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(this,function(){"use strict";function e(e,t){return Zone.current.wrap(e,t)}function t(e,t,n,r,o){return Zone.current.scheduleMacroTask(e,t,n,r,o)}function n(t,n){for(var r=t.length-1;r>=0;r--)"function"==typeof t[r]&&(t[r]=e(t[r],n+"_"+r));return t}function r(e,t){for(var r=e.constructor.name,a=function(a){var i=t[a],s=e[i];if(s){var c=P(e,i);if(!o(c))return"continue";e[i]=function(e){var t=function(){return e.apply(this,n(arguments,r+"."+i))};return l(t,e),t}(s)}},i=0;i<t.length;i++)a(i)}function o(e){return!e||e.writable!==!1&&!("function"==typeof e.get&&"undefined"==typeof e.set)}function a(e,t,n){var r=P(e,t);if(!r&&n){var o=P(n,t);o&&(r={enumerable:!0,configurable:!0})}if(r&&r.configurable){delete r.writable,delete r.value;var a=r.get,i=r.set,s=t.substr(2),c=Q[s];c||(c=Q[s]=B("ON_PROPERTY"+s)),r.set=function(t){var n=this;if(n||e!==X||(n=X),n){var r=n[c];r&&n.removeEventListener(s,$),i&&i.apply(n,U),"function"==typeof t?(n[c]=t,n.addEventListener(s,$,!1)):n[c]=null}},r.get=function(){var n=this;if(n||e!==X||(n=X),!n)return null;var o=n[c];if(o)return o;if(a){var i=a&&a.call(this);if(i)return r.set.call(this,i),"function"==typeof n[G]&&n.removeAttribute(t),i}return null},j(e,t,r)}}function i(e,t,n){if(t)for(var r=0;r<t.length;r++)a(e,"on"+t[r],n);else{var o=[];for(var i in e)"on"==i.substr(0,2)&&o.push(i);for(var s=0;s<o.length;s++)a(e,o[s],n)}}function s(t){var r=X[t];if(r){X[B(t)]=r,X[t]=function(){var e=n(arguments,t);switch(e.length){case 0:this[ee]=new r;break;case 1:this[ee]=new r(e[0]);break;case 2:this[ee]=new r(e[0],e[1]);break;case 3:this[ee]=new r(e[0],e[1],e[2]);break;case 4:this[ee]=new r(e[0],e[1],e[2],e[3]);break;default:throw new Error("Arg list too long.")}},l(X[t],r);var o,a=new r(function(){});for(o in a)"XMLHttpRequest"===t&&"responseBlob"===o||!function(n){"function"==typeof a[n]?X[t].prototype[n]=function(){return this[ee][n].apply(this[ee],arguments)}:j(X[t].prototype,n,{set:function(r){"function"==typeof r?(this[ee][n]=e(r,t+"."+n),l(this[ee][n],r)):this[ee][n]=r},get:function(){return this[ee][n]}})}(o);for(o in r)"prototype"!==o&&r.hasOwnProperty(o)&&(X[t][o]=r[o])}}function c(e,t,n){for(var r=e;r&&!r.hasOwnProperty(t);)r=C(r);!r&&e[t]&&(r=e);var a,i=B(t);if(r&&!(a=r[i])){a=r[i]=r[t];var s=r&&P(r,t);if(o(s)){var c=n(a,i,t);r[t]=function(){return c(this,arguments)},l(r[t],a)}}return a}function u(e,n,r){function o(e){var t=e.data;return t.args[t.cbIdx]=function(){e.invoke.apply(this,arguments)},a.apply(t.target,t.args),e}var a=null;a=c(e,n,function(e){return function(n,a){var i=r(n,a);return i.cbIdx>=0&&"function"==typeof a[i.cbIdx]?t(i.name,a[i.cbIdx],i,o,null):e.apply(n,a)}})}function l(e,t){e[B("OriginalDelegate")]=t}function p(){if(te)return ne;te=!0;try{var e=W.navigator.userAgent;return e.indexOf("MSIE ")===-1&&e.indexOf("Trident/")===-1&&e.indexOf("Edge/")===-1||(ne=!0),ne}catch(t){}}function f(e,t,n){function r(t,n){if(!t)return!1;var r=!0;n&&void 0!==n.useG&&(r=n.useG);var d=n&&n.vh,y=!0;n&&void 0!==n.chkDup&&(y=n.chkDup);var k=!1;n&&void 0!==n.rt&&(k=n.rt);for(var m=t;m&&!m.hasOwnProperty(o);)m=C(m);if(!m&&t[o]&&(m=t),!m)return!1;if(m[c])return!1;var _,b={},T=m[c]=m[o],w=m[B(a)]=m[a],E=m[B(i)]=m[i],S=m[B(s)]=m[s];n&&n.prepend&&(_=m[B(n.prepend)]=m[n.prepend]);var D=function(){if(!b.isExisting)return T.call(b.target,b.eventName,b.capture?g:v,b.options)},Z=function(e){if(!e.isRemoved){var t=oe[e.eventName],n=void 0;t&&(n=t[e.capture?F:q]);var r=n&&e.target[n];if(r)for(var o=0;o<r.length;o++){var a=r[o];if(a===e){r.splice(o,1),e.isRemoved=!0,0===r.length&&(e.allRemoved=!0,e.target[n]=null);break}}}if(e.allRemoved)return w.call(e.target,e.eventName,e.capture?g:v,e.options)},z=function(e){return T.call(b.target,b.eventName,e.invoke,b.options)},O=function(e){return _.call(b.target,b.eventName,e.invoke,b.options)},P=function(e){return w.call(e.target,e.eventName,e.invoke,e.options)},j=r?D:z,I=r?Z:P,L=function(e,t){var n=typeof t;return"function"===n&&e.callback===t||"object"===n&&e.originalDelegate===t},M=n&&n.diff?n.diff:L,R=Zone[Zone.__symbol__("BLACK_LISTED_EVENTS")],H=function(t,n,o,a,i,s){return void 0===i&&(i=!1),void 0===s&&(s=!1),function(){var c=this||e,u=arguments[1];if(!u)return t.apply(this,arguments);var l=!1;if("function"!=typeof u){if(!u.handleEvent)return t.apply(this,arguments);l=!0}if(!d||d(t,u,c,arguments)){var p=arguments[0],f=arguments[2];if(R)for(var h=0;h<R.length;h++)if(p===R[h])return t.apply(this,arguments);var v,g=!1;void 0===f?v=!1:f===!0?v=!0:f===!1?v=!1:(v=!!f&&!!f.capture,g=!!f&&!!f.once);var k,m=Zone.current,_=oe[p];if(_)k=_[v?F:q];else{var T=p+q,w=p+F,E=A+T,S=A+w;oe[p]={},oe[p][q]=E,oe[p][F]=S,k=v?S:E}var D=c[k],Z=!1;if(D){if(Z=!0,y)for(var h=0;h<D.length;h++)if(M(D[h],u))return}else D=c[k]=[];var z,O=c.constructor.name,P=ae[O];P&&(z=P[p]),z||(z=O+n+p),b.options=f,g&&(b.options.once=!1),b.target=c,b.capture=v,b.eventName=p,b.isExisting=Z;var j=r?re:null;j&&(j.taskData=b);var C=m.scheduleEventTask(z,u,j,o,a);return b.target=null,j&&(j.taskData=null),g&&(f.once=!0),C.options=f,C.target=c,C.capture=v,C.eventName=p,l&&(C.originalDelegate=u),s?D.unshift(C):D.push(C),i?c:void 0}}};return m[o]=H(T,u,j,I,k),_&&(m[p]=H(_,f,O,I,k,!0)),m[a]=function(){var t,n=this||e,r=arguments[0],o=arguments[2];t=void 0!==o&&(o===!0||o!==!1&&(!!o&&!!o.capture));var a=arguments[1];if(!a)return w.apply(this,arguments);if(!d||d(w,a,n,arguments)){var i,s=oe[r];s&&(i=s[t?F:q]);var c=i&&n[i];if(c)for(var u=0;u<c.length;u++){var l=c[u];if(M(l,a))return c.splice(u,1),l.isRemoved=!0,0===c.length&&(l.allRemoved=!0,n[i]=null),void l.zone.cancelTask(l)}return w.apply(this,arguments)}},m[i]=function(){for(var t=this||e,n=arguments[0],r=[],o=h(t,n),a=0;a<o.length;a++){var i=o[a],s=i.originalDelegate?i.originalDelegate:i.callback;r.push(s)}return r},m[s]=function(){var t=this||e,n=arguments[0];if(n){var r=oe[n];if(r){var o=r[q],i=r[F],c=t[o],u=t[i];if(c)for(var l=c.slice(),p=0;p<l.length;p++){var f=l[p],h=f.originalDelegate?f.originalDelegate:f.callback;this[a].call(this,n,h,f.options)}if(u)for(var l=u.slice(),p=0;p<l.length;p++){var f=l[p],h=f.originalDelegate?f.originalDelegate:f.callback;this[a].call(this,n,h,f.options)}}}else{for(var d=Object.keys(t),p=0;p<d.length;p++){var v=d[p],g=ie.exec(v),y=g&&g[1];y&&"removeListener"!==y&&this[s].call(this,y)}this[s].call(this,"removeListener")}},l(m[o],T),l(m[a],w),S&&l(m[s],S),E&&l(m[i],E),!0}for(var o=n&&n.add||M,a=n&&n.rm||R,i=n&&n.listeners||"eventListeners",s=n&&n.rmAll||"removeAllListeners",c=B(o),u="."+o+":",p="prependListener",f="."+p+":",d=function(e,t,n){if(!e.isRemoved){var r=e.callback;"object"==typeof r&&r.handleEvent&&(e.callback=function(e){return r.handleEvent(e)},e.originalDelegate=r),e.invoke(e,t,[n]);var o=e.options;if(o&&"object"==typeof o&&o.once){var i=e.originalDelegate?e.originalDelegate:e.callback;t[a].call(t,n.type,i,o)}}},v=function(t){if(t=t||e.event){var n=this||t.target||e,r=n[oe[t.type][q]];if(r)if(1===r.length)d(r[0],n,t);else for(var o=r.slice(),a=0;a<o.length&&(!t||t[se]!==!0);a++)d(o[a],n,t)}},g=function(t){if(t=t||e.event){var n=this||t.target||e,r=n[oe[t.type][F]];if(r)if(1===r.length)d(r[0],n,t);else for(var o=r.slice(),a=0;a<o.length&&(!t||t[se]!==!0);a++)d(o[a],n,t)}},y=[],k=0;k<t.length;k++)y[k]=r(t[k],n);return y}function h(e,t){var n=[];for(var r in e){var o=ie.exec(r),a=o&&o[1];if(a&&(!t||a===t)){var i=e[r];if(i)for(var s=0;s<i.length;s++)n.push(i[s])}}return n}function d(e,t){var n=e.Event;n&&n.prototype&&t.patchMethod(n.prototype,"stopImmediatePropagation",function(e){return function(t,n){t[se]=!0,e&&e.apply(t,n)}})}function v(e,n,r,o){function a(t){function n(){try{t.invoke.apply(this,arguments)}finally{t.data&&t.data.isPeriodic||("number"==typeof r.handleId?delete l[r.handleId]:r.handleId&&(r.handleId[ce]=null))}}var r=t.data;return r.args[0]=n,r.handleId=s.apply(e,r.args),t}function i(e){return u(e.data.handleId)}var s=null,u=null;n+=o,r+=o;var l={};s=c(e,n,function(r){return function(s,c){if("function"==typeof c[0]){var u={handleId:null,isPeriodic:"Interval"===o,delay:"Timeout"===o||"Interval"===o?c[1]||0:null,args:c},p=t(n,c[0],u,a,i);if(!p)return p;var f=p.data.handleId;return"number"==typeof f?l[f]=p:f&&(f[ce]=p),f&&f.ref&&f.unref&&"function"==typeof f.ref&&"function"==typeof f.unref&&(p.ref=f.ref.bind(f),p.unref=f.unref.bind(f)),"number"==typeof f||f?f:p}return r.apply(e,c)}}),u=c(e,r,function(t){return function(n,r){var o,a=r[0];"number"==typeof a?o=l[a]:(o=a&&a[ce],o||(o=a)),o&&"string"==typeof o.type?"notScheduled"!==o.state&&(o.cancelFn&&o.data.isPeriodic||0===o.runCount)&&("number"==typeof a?delete l[a]:a&&(a[ce]=null),o.zone.cancelTask(o)):t.apply(e,r)}})}function g(){Object.defineProperty=function(e,t,n){if(k(e,t))throw new TypeError("Cannot assign to read only property '"+t+"' of "+e);var r=n.configurable;return"prototype"!==t&&(n=m(e,t,n)),_(e,t,n,r)},Object.defineProperties=function(e,t){return Object.keys(t).forEach(function(n){Object.defineProperty(e,n,t[n])}),e},Object.create=function(e,t){return"object"!=typeof t||Object.isFrozen(t)||Object.keys(t).forEach(function(n){t[n]=m(e,n,t[n])}),pe(e,t)},Object.getOwnPropertyDescriptor=function(e,t){var n=le(e,t);return k(e,t)&&(n.configurable=!1),n}}function y(e,t,n){var r=n.configurable;return n=m(e,t,n),_(e,t,n,r)}function k(e,t){return e&&e[fe]&&e[fe][t]}function m(e,t,n){return Object.isFrozen(n)||(n.configurable=!0),n.configurable||(e[fe]||Object.isFrozen(e)||ue(e,fe,{writable:!0,value:{}}),e[fe]&&(e[fe][t]=!0)),n}function _(e,t,n,r){try{return ue(e,t,n)}catch(o){if(!n.configurable)throw o;"undefined"==typeof r?delete n.configurable:n.configurable=r;try{return ue(e,t,n)}catch(o){var a=null;try{a=JSON.stringify(n)}catch(o){a=n.toString()}console.log("Attempting to configure '"+t+"' with descriptor '"+a+"' on object '"+e+"' and got error, giving up: "+o)}}}function b(e,t){var n=t.WebSocket;t.EventTarget||f(t,[n.prototype]),t.WebSocket=function(e,t){var r,o,a=arguments.length>1?new n(e,t):new n(e),s=P(a,"onmessage");return s&&s.configurable===!1?(r=I(a),o=a,[M,R,"send","close"].forEach(function(e){r[e]=function(){var t=L.call(arguments);if(e===M||e===R){var n=t.length>0?t[0]:void 0;if(n){var o=Zone.__symbol__("ON_PROPERTY"+n);a[o]=r[o]}}return a[e].apply(a,t)}})):r=a,i(r,["close","error","message","open"],o),r};var r=t.WebSocket;for(var o in n)r[o]=n[o]}function T(e,t,n){if(!n)return t;var r=n.filter(function(t){return t.target===e});if(!r||0===r.length)return t;var o=r[0].ignoreProperties;return t.filter(function(e){return o.indexOf(e)===-1})}function w(e,t,n,r){var o=T(e,t,n);i(e,o,r)}function E(e,t){if(!K||Y){var n="undefined"!=typeof WebSocket;if(S()){var r=t.__Zone_ignore_on_properties;if(J){var o=window;w(o,Oe.concat(["messageerror"]),r,C(o)),w(Document.prototype,Oe,r),"undefined"!=typeof o.SVGElement&&w(o.SVGElement.prototype,Oe,r),w(Element.prototype,Oe,r),w(HTMLElement.prototype,Oe,r),w(HTMLMediaElement.prototype,ye,r),w(HTMLFrameSetElement.prototype,ve.concat(we),r),w(HTMLBodyElement.prototype,ve.concat(we),r),w(HTMLFrameElement.prototype,Te,r),w(HTMLIFrameElement.prototype,Te,r);var a=o.HTMLMarqueeElement;a&&w(a.prototype,Ee,r);var i=o.Worker;i&&w(i.prototype,ze,r)}w(XMLHttpRequest.prototype,Se,r);var c=t.XMLHttpRequestEventTarget;c&&w(c&&c.prototype,Se,r),"undefined"!=typeof IDBIndex&&(w(IDBIndex.prototype,De,r),w(IDBRequest.prototype,De,r),w(IDBOpenDBRequest.prototype,De,r),w(IDBDatabase.prototype,De,r),w(IDBTransaction.prototype,De,r),w(IDBCursor.prototype,De,r)),n&&w(WebSocket.prototype,Ze,r)}else D(),s("XMLHttpRequest"),n&&b(e,t)}}function S(){if((J||Y)&&!P(HTMLElement.prototype,"onclick")&&"undefined"!=typeof Element){var e=P(Element.prototype,"onclick");if(e&&!e.configurable)return!1}var t="onreadystatechange",n=XMLHttpRequest.prototype,r=P(n,t);if(r){j(n,t,{enumerable:!0,configurable:!0,get:function(){return!0}});var o=new XMLHttpRequest,a=!!o.onreadystatechange;return j(n,t,r||{}),a}var i=B("fake");j(n,t,{enumerable:!0,configurable:!0,get:function(){return this[i]},set:function(e){this[i]=e}});var o=new XMLHttpRequest,s=function(){};o.onreadystatechange=s;var a=o[i]===s;return o.onreadystatechange=null,a}function D(){for(var t=function(t){var n=Oe[t],r="on"+n;self.addEventListener(n,function(t){var n,o,a=t.target;for(o=a?a.constructor.name+"."+r:"unknown."+r;a;)a[r]&&!a[r][Pe]&&(n=e(a[r],o),n[Pe]=a[r],a[r]=n),a=a.parentElement},!0)},n=0;n<Oe.length;n++)t(n)}function Z(e,t){var n="Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video",r="ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket".split(","),o="EventTarget",a=[],i=e.wtf,s=n.split(",");i?a=s.map(function(e){return"HTML"+e+"Element"}).concat(r):e[o]?a.push(o):a=r;for(var c=e.__Zone_disable_IE_check||!1,u=e.__Zone_enable_cross_context_check||!1,l=p(),h=".addEventListener:",d="[object FunctionWrapper]",v="function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }",g=0;g<Oe.length;g++){var y=Oe[g],k=y+q,m=y+F,_=A+k,b=A+m;oe[y]={},oe[y][q]=_,oe[y][F]=b}for(var g=0;g<n.length;g++)for(var T=s[g],w=ae[T]={},E=0;E<Oe.length;E++){var y=Oe[E];w[y]=T+h+y}for(var S=function(e,t,n,r){if(!c&&l)if(u)try{var o=t.toString();if(o===d||o==v)return e.apply(n,r),!1}catch(a){return e.apply(n,r),!1}else{var o=t.toString();if(o===d||o==v)return e.apply(n,r),!1}else if(u)try{t.toString()}catch(a){return e.apply(n,r),!1}return!0},D=[],g=0;g<a.length;g++){var Z=e[a[g]];D.push(Z&&Z.prototype)}return f(e,D,{vh:S}),t.patchEventTarget=f,!0}function z(e,t){d(e,t)}function O(t){if((J||Y)&&"registerElement"in t.document){var n=document.registerElement,r=["createdCallback","attachedCallback","detachedCallback","attributeChangedCallback"];document.registerElement=function(t,o){return o&&o.prototype&&r.forEach(function(t){var n="Document.registerElement::"+t,r=o.prototype;if(r.hasOwnProperty(t)){var a=P(r,t);a&&a.value?(a.value=e(a.value,n),y(o.prototype,t,a)):r[t]=e(r[t],n)}else r[t]&&(r[t]=e(r[t],n))}),n.call(document,t,o)},l(document.registerElement,n)}}(function(e){function t(e){c&&c.mark&&c.mark(e)}function n(e,t){c&&c.measure&&c.measure(e,t)}function r(t){0===I&&0===y.length&&(l||e[v]&&(l=e[v].resolve(0)),l?l[g](o):e[d](o,0)),t&&y.push(t)}function o(){if(!k){for(k=!0;y.length;){var e=y;y=[];for(var t=0;t<e.length;t++){var n=e[t];try{n.zone.runTask(n,null,null)}catch(r){P.onUnhandledError(r)}}}P.microtaskDrainDone(),k=!1}}function a(){}function i(e){return"__zone_symbol__"+e}var s="function",c=e.performance;if(t("Zone"),e.Zone)throw new Error("Zone already loaded.");var u=function(){function r(e,t){this._properties=null,this._parent=e,this._name=t?t.name||"unnamed":"<root>",this._properties=t&&t.properties||{},this._zoneDelegate=new f(this,this._parent&&this._parent._zoneDelegate,t)}return r.assertZonePatched=function(){if(e.Promise!==O.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")},Object.defineProperty(r,"root",{get:function(){for(var e=r.current;e.parent;)e=e.parent;return e},enumerable:!0,configurable:!0}),Object.defineProperty(r,"current",{get:function(){return j.zone},enumerable:!0,configurable:!0}),Object.defineProperty(r,"currentTask",{get:function(){return C},enumerable:!0,configurable:!0}),r.__load_patch=function(o,a){if(O.hasOwnProperty(o))throw Error("Already loaded patch: "+o);if(!e["__Zone_disable_"+o]){var i="Zone:"+o;t(i),O[o]=a(e,r,P),n(i,i)}},Object.defineProperty(r.prototype,"parent",{get:function(){return this._parent},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),r.prototype.get=function(e){var t=this.getZoneWith(e);if(t)return t._properties[e]},r.prototype.getZoneWith=function(e){for(var t=this;t;){if(t._properties.hasOwnProperty(e))return t;t=t._parent}return null},r.prototype.fork=function(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)},r.prototype.wrap=function(e,t){if(typeof e!==s)throw new Error("Expecting function got: "+e);var n=this._zoneDelegate.intercept(this,e,t),r=this;return function(){return r.runGuarded(n,this,arguments,t)}},r.prototype.run=function(e,t,n,r){void 0===t&&(t=void 0),void 0===n&&(n=null),void 0===r&&(r=null),j={parent:j,zone:this};try{return this._zoneDelegate.invoke(this,e,t,n,r)}finally{j=j.parent}},r.prototype.runGuarded=function(e,t,n,r){void 0===t&&(t=null),void 0===n&&(n=null),void 0===r&&(r=null),j={parent:j,zone:this};try{try{return this._zoneDelegate.invoke(this,e,t,n,r)}catch(o){if(this._zoneDelegate.handleError(this,o))throw o}}finally{j=j.parent}},r.prototype.runTask=function(e,t,n){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||m).name+"; Execution: "+this.name+")");var r=e.state===_;if(!r||e.type!==z){var o=e.state!=w;o&&e._transitionTo(w,T),e.runCount++;var a=C;C=e,j={parent:j,zone:this};try{e.type==Z&&e.data&&!e.data.isPeriodic&&(e.cancelFn=null);try{return this._zoneDelegate.invokeTask(this,e,t,n)}catch(i){if(this._zoneDelegate.handleError(this,i))throw i}}finally{e.state!==_&&e.state!==S&&(e.type==z||e.data&&e.data.isPeriodic?o&&e._transitionTo(T,w):(e.runCount=0,this._updateTaskCount(e,-1),o&&e._transitionTo(_,w,_))),j=j.parent,C=a}}},r.prototype.scheduleTask=function(e){if(e.zone&&e.zone!==this)for(var t=this;t;){if(t===e.zone)throw Error("can not reschedule task to "+this.name+" which is descendants of the original zone "+e.zone.name);t=t.parent}e._transitionTo(b,_);var n=[];e._zoneDelegates=n,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(r){throw e._transitionTo(S,b,_),this._zoneDelegate.handleError(this,r),r}return e._zoneDelegates===n&&this._updateTaskCount(e,1),e.state==b&&e._transitionTo(T,b),e},r.prototype.scheduleMicroTask=function(e,t,n,r){return this.scheduleTask(new h(D,e,t,n,r,null))},r.prototype.scheduleMacroTask=function(e,t,n,r,o){return this.scheduleTask(new h(Z,e,t,n,r,o))},r.prototype.scheduleEventTask=function(e,t,n,r,o){return this.scheduleTask(new h(z,e,t,n,r,o))},r.prototype.cancelTask=function(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||m).name+"; Execution: "+this.name+")");e._transitionTo(E,T,w);try{this._zoneDelegate.cancelTask(this,e)}catch(t){throw e._transitionTo(S,E),this._zoneDelegate.handleError(this,t),t}return this._updateTaskCount(e,-1),e._transitionTo(_,E),e.runCount=0,e},r.prototype._updateTaskCount=function(e,t){var n=e._zoneDelegates;t==-1&&(e._zoneDelegates=null);for(var r=0;r<n.length;r++)n[r]._updateTaskCount(e.type,t)},r}();u.__symbol__=i;var l,p={name:"",onHasTask:function(e,t,n,r){return e.hasTask(n,r)},onScheduleTask:function(e,t,n,r){return e.scheduleTask(n,r)},onInvokeTask:function(e,t,n,r,o,a){return e.invokeTask(n,r,o,a)},onCancelTask:function(e,t,n,r){return e.cancelTask(n,r)}},f=function(){function e(e,t,n){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=e,this._parentDelegate=t,this._forkZS=n&&(n&&n.onFork?n:t._forkZS),this._forkDlgt=n&&(n.onFork?t:t._forkDlgt),this._forkCurrZone=n&&(n.onFork?this.zone:t.zone),this._interceptZS=n&&(n.onIntercept?n:t._interceptZS),this._interceptDlgt=n&&(n.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=n&&(n.onIntercept?this.zone:t.zone),this._invokeZS=n&&(n.onInvoke?n:t._invokeZS),this._invokeDlgt=n&&(n.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=n&&(n.onInvoke?this.zone:t.zone),this._handleErrorZS=n&&(n.onHandleError?n:t._handleErrorZS),this._handleErrorDlgt=n&&(n.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=n&&(n.onHandleError?this.zone:t.zone),this._scheduleTaskZS=n&&(n.onScheduleTask?n:t._scheduleTaskZS),this._scheduleTaskDlgt=n&&(n.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=n&&(n.onScheduleTask?this.zone:t.zone),this._invokeTaskZS=n&&(n.onInvokeTask?n:t._invokeTaskZS),this._invokeTaskDlgt=n&&(n.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=n&&(n.onInvokeTask?this.zone:t.zone),this._cancelTaskZS=n&&(n.onCancelTask?n:t._cancelTaskZS),this._cancelTaskDlgt=n&&(n.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=n&&(n.onCancelTask?this.zone:t.zone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;var r=n&&n.onHasTask,o=t&&t._hasTaskZS;(r||o)&&(this._hasTaskZS=r?n:p,this._hasTaskDlgt=t,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=e,n.onScheduleTask||(this._scheduleTaskZS=p,this._scheduleTaskDlgt=t,this._scheduleTaskCurrZone=this.zone),n.onInvokeTask||(this._invokeTaskZS=p,this._invokeTaskDlgt=t,this._invokeTaskCurrZone=this.zone),n.onCancelTask||(this._cancelTaskZS=p,this._cancelTaskDlgt=t,this._cancelTaskCurrZone=this.zone))}return e.prototype.fork=function(e,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,e,t):new u(e,t)},e.prototype.intercept=function(e,t,n){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,e,t,n):t},e.prototype.invoke=function(e,t,n,r,o){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,e,t,n,r,o):t.apply(n,r)},e.prototype.handleError=function(e,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,e,t)},e.prototype.scheduleTask=function(e,t){var n=t;if(this._scheduleTaskZS)this._hasTaskZS&&n._zoneDelegates.push(this._hasTaskDlgtOwner),n=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,e,t),n||(n=t);else if(t.scheduleFn)t.scheduleFn(t);else{if(t.type!=D)throw new Error("Task is missing scheduleFn.");r(t)}return n},e.prototype.invokeTask=function(e,t,n,r){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,e,t,n,r):t.callback.apply(n,r)},e.prototype.cancelTask=function(e,t){var n;if(this._cancelTaskZS)n=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,e,t);else{if(!t.cancelFn)throw Error("Task is not cancelable");n=t.cancelFn(t)}return n},e.prototype.hasTask=function(e,t){try{return this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,e,t)}catch(n){this.handleError(e,n)}},e.prototype._updateTaskCount=function(e,t){var n=this._taskCounts,r=n[e],o=n[e]=r+t;if(o<0)throw new Error("More tasks executed then were scheduled.");if(0==r||0==o){var a={microTask:n.microTask>0,macroTask:n.macroTask>0,eventTask:n.eventTask>0,change:e};this.hasTask(this.zone,a)}},e}(),h=function(){function t(n,r,o,a,i,s){this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=n,this.source=r,this.data=a,this.scheduleFn=i,this.cancelFn=s,this.callback=o;var c=this;n===z&&a&&a.useG?this.invoke=t.invokeTask:this.invoke=function(){return t.invokeTask.call(e,c,this,arguments)}}return t.invokeTask=function(e,t,n){e||(e=this),I++;try{return e.runCount++,e.zone.runTask(e,t,n)}finally{1==I&&o(),I--}},Object.defineProperty(t.prototype,"zone",{get:function(){return this._zone},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){return this._state},enumerable:!0,configurable:!0}),t.prototype.cancelScheduleRequest=function(){this._transitionTo(_,b)},t.prototype._transitionTo=function(e,t,n){if(this._state!==t&&this._state!==n)throw new Error(this.type+" '"+this.source+"': can not transition to '"+e+"', expecting state '"+t+"'"+(n?" or '"+n+"'":"")+", was '"+this._state+"'.");this._state=e,e==_&&(this._zoneDelegates=null)},t.prototype.toString=function(){return this.data&&"undefined"!=typeof this.data.handleId?this.data.handleId:Object.prototype.toString.call(this)},t.prototype.toJSON=function(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}},t}(),d=i("setTimeout"),v=i("Promise"),g=i("then"),y=[],k=!1,m={name:"NO ZONE"},_="notScheduled",b="scheduling",T="scheduled",w="running",E="canceling",S="unknown",D="microTask",Z="macroTask",z="eventTask",O={},P={symbol:i,currentZoneFrame:function(){return j},onUnhandledError:a,microtaskDrainDone:a,scheduleMicroTask:r,showUncaughtError:function(){return!u[i("ignoreConsoleErrorUncaughtError")]},patchEventTarget:function(){return[]},patchOnProperties:a,patchMethod:function(){return a},bindArguments:function(){return null},setNativePromise:function(e){e&&typeof e.resolve===s&&(l=e.resolve(0))}},j={parent:null,zone:new u(null,null)},C=null,I=0;return n("Zone","Zone"),e.Zone=u})("undefined"!=typeof window&&window||"undefined"!=typeof self&&self||global);Zone.__load_patch("ZoneAwarePromise",function(e,t,n){function r(e){if(e&&e.toString===Object.prototype.toString){var t=e.constructor&&e.constructor.name;return(t?t:"")+": "+JSON.stringify(e)}return e?e.toString():Object.prototype.toString.call(e)}function o(e){n.onUnhandledError(e);try{var r=t[b];r&&"function"==typeof r&&r.call(this,e)}catch(o){}}function a(e){return e&&e.then}function i(e){return e}function s(e){return L.reject(e)}function c(e,t){return function(n){try{u(e,t,n)}catch(r){u(e,!1,r)}}}function u(e,o,a){var i=O();if(e===a)throw new TypeError(P);if(e[T]===S){var s=null;try{"object"!=typeof a&&"function"!=typeof a||(s=a&&a.then)}catch(f){return i(function(){u(e,!1,f)})(),e}if(o!==Z&&a instanceof L&&a.hasOwnProperty(T)&&a.hasOwnProperty(w)&&a[T]!==S)l(a),u(e,a[T],a[w]);else if(o!==Z&&"function"==typeof s)try{s.call(a,i(c(e,o)),i(c(e,!1)))}catch(f){i(function(){u(e,!1,f)})()}else{e[T]=o;var h=e[w];if(e[w]=a,o===Z&&a instanceof Error){var d=t.currentTask&&t.currentTask.data&&t.currentTask.data[_];d&&v(a,j,{configurable:!0,enumerable:!1,writable:!0,value:d})}for(var g=0;g<h.length;)p(e,h[g++],h[g++],h[g++],h[g++]);if(0==h.length&&o==Z){e[T]=z;try{throw new Error("Uncaught (in promise): "+r(a)+(a&&a.stack?"\n"+a.stack:""))}catch(f){var k=f;k.rejection=a,k.promise=e,k.zone=t.current,k.task=t.currentTask,y.push(k),n.scheduleMicroTask()}}}}return e}function l(e){if(e[T]===z){try{var n=t[C];n&&"function"==typeof n&&n.call(this,{rejection:e[w],promise:e})}catch(r){}e[T]=Z;for(var o=0;o<y.length;o++)e===y[o].promise&&y.splice(o,1)}}function p(e,t,n,r,o){l(e);var a=e[T]?"function"==typeof r?r:i:"function"==typeof o?o:s;t.scheduleMicroTask(E,function(){try{u(n,!0,t.run(a,void 0,[e[w]]))}catch(r){u(n,!1,r)}})}function f(e){var t=e.prototype,n=t.then;t[m]=n;var r=d(e.prototype,"then");r&&r.writable===!1&&r.configurable&&v(e.prototype,"then",{writable:!0}),e.prototype.then=function(e,t){var r=this,o=new L(function(e,t){n.call(r,e,t)});return o.then(e,t)},e[x]=!0}function h(e){return function(){var t=e.apply(this,arguments);if(t instanceof L)return t;var n=t.constructor;return n[x]||f(n),t}}var d=Object.getOwnPropertyDescriptor,v=Object.defineProperty,g=n.symbol,y=[],k=g("Promise"),m=g("then"),_="__creationTrace__";n.onUnhandledError=function(e){if(n.showUncaughtError()){var t=e&&e.rejection;t?console.error("Unhandled Promise rejection:",t instanceof Error?t.message:t,"; Zone:",e.zone.name,"; Task:",e.task&&e.task.source,"; Value:",t,t instanceof Error?t.stack:void 0):console.error(e)}},n.microtaskDrainDone=function(){for(;y.length;)for(var e=function(){var e=y.shift();try{e.zone.runGuarded(function(){throw e})}catch(t){o(t)}};y.length;)e()};var b=g("unhandledPromiseRejectionHandler"),T=g("state"),w=g("value"),E="Promise.then",S=null,D=!0,Z=!1,z=0,O=function(){var e=!1;return function(t){return function(){e||(e=!0,t.apply(null,arguments))}}},P="Promise resolved with itself",j=g("currentTaskTrace"),C=g("rejectionHandledHandler"),I="function ZoneAwarePromise() { [native code] }",L=function(){function e(t){var n=this;if(!(n instanceof e))throw new Error("Must be an instanceof Promise.");n[T]=S,n[w]=[];try{t&&t(c(n,D),c(n,Z))}catch(r){u(n,!1,r)}}return e.toString=function(){return I},e.resolve=function(e){return u(new this(null),D,e)},e.reject=function(e){return u(new this(null),Z,e)},e.race=function(e){function t(e){i&&(i=r(e))}function n(e){i&&(i=o(e))}for(var r,o,i=new this(function(e,t){r=e,o=t}),s=0,c=e;s<c.length;s++){var u=c[s];a(u)||(u=this.resolve(u)),u.then(t,n)}return i},e.all=function(e){for(var t,n,r=new this(function(e,r){t=e,n=r}),o=0,i=[],s=0,c=e;s<c.length;s++){var u=c[s];a(u)||(u=this.resolve(u)),u.then(function(e){return function(n){i[e]=n,o--,o||t(i)}}(o),n),o++}return o||t(i),r},e.prototype.then=function(e,n){var r=new this.constructor(null),o=t.current;return this[T]==S?this[w].push(o,r,e,n):p(this,o,r,e,n),r},e.prototype["catch"]=function(e){return this.then(null,e)},e}();L.resolve=L.resolve,L.reject=L.reject,L.race=L.race,L.all=L.all;var M=e[k]=e.Promise,R=t.__symbol__("ZoneAwarePromise"),H=d(e,"Promise");H&&!H.configurable||(H&&delete H.writable,H&&delete H.value,H||(H={configurable:!0,enumerable:!0}),H.get=function(){return e[R]?e[R]:e[k]},H.set=function(t){t===L?e[R]=t:(e[k]=t,t.prototype[m]||f(t),n.setNativePromise(t))},v(e,"Promise",H)),e.Promise=L;var x=g("thenPatched");if(M){f(M);var F=e.fetch;"function"==typeof F&&(e.fetch=h(F))}return Promise[t.__symbol__("uncaughtPromiseErrors")]=y,L});var P=Object.getOwnPropertyDescriptor,j=Object.defineProperty,C=Object.getPrototypeOf,I=Object.create,L=Array.prototype.slice,M="addEventListener",R="removeEventListener",H=Zone.__symbol__(M),x=Zone.__symbol__(R),F="true",q="false",A="__zone_symbol__",B=Zone.__symbol__,N="undefined"!=typeof window,W=N?window:void 0,X=N&&W||"object"==typeof self&&self||global,G="removeAttribute",U=[null],V="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,K=!("nw"in X)&&"undefined"!=typeof X.process&&"[object process]"==={}.toString.call(X.process),J=!K&&!V&&!(!N||!W.HTMLElement),Y="undefined"!=typeof X.process&&"[object process]"==={}.toString.call(X.process)&&!V&&!(!N||!W.HTMLElement),Q={},$=function(e){if(e=e||X.event){var t=Q[e.type];t||(t=Q[e.type]=B("ON_PROPERTY"+e.type));var n=this||e.target||X,r=n[t],o=r&&r.apply(this,arguments);return void 0==o||o||e.preventDefault(),o}},ee=B("originalInstance"),te=!1,ne=!1;Zone.__load_patch("toString",function(e,t){var n=t.__zone_symbol__originalToString=Function.prototype.toString,r=B("OriginalDelegate"),o=B("Promise"),a=B("Error");Function.prototype.toString=function(){if("function"==typeof this){var t=this[r];if(t)return"function"==typeof t?n.apply(this[r],arguments):Object.prototype.toString.call(t);if(this===Promise){var i=e[o];if(i)return n.apply(i,arguments)}if(this===Error){var s=e[a];if(s)return n.apply(s,arguments)}}return n.apply(this,arguments)};var i=Object.prototype.toString,s="[object Promise]";Object.prototype.toString=function(){return this instanceof Promise?s:i.apply(this,arguments)}});var re={useG:!0},oe={},ae={},ie=/^__zone_symbol__(\w+)(true|false)$/,se="__zone_symbol__propagationStopped",ce=B("zoneTask"),ue=Object[B("defineProperty")]=Object.defineProperty,le=Object[B("getOwnPropertyDescriptor")]=Object.getOwnPropertyDescriptor,pe=Object.create,fe=B("unconfigurables"),he=["abort","animationcancel","animationend","animationiteration","auxclick","beforeinput","blur","cancel","canplay","canplaythrough","change","compositionstart","compositionupdate","compositionend","cuechange","click","close","contextmenu","curechange","dblclick","drag","dragend","dragenter","dragexit","dragleave","dragover","drop","durationchange","emptied","ended","error","focus","focusin","focusout","gotpointercapture","input","invalid","keydown","keypress","keyup","load","loadstart","loadeddata","loadedmetadata","lostpointercapture","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","mousewheel","orientationchange","pause","play","playing","pointercancel","pointerdown","pointerenter","pointerleave","pointerlockchange","mozpointerlockchange","webkitpointerlockerchange","pointerlockerror","mozpointerlockerror","webkitpointerlockerror","pointermove","pointout","pointerover","pointerup","progress","ratechange","reset","resize","scroll","seeked","seeking","select","selectionchange","selectstart","show","sort","stalled","submit","suspend","timeupdate","volumechange","touchcancel","touchmove","touchstart","touchend","transitioncancel","transitionend","waiting","wheel"],de=["afterscriptexecute","beforescriptexecute","DOMContentLoaded","fullscreenchange","mozfullscreenchange","webkitfullscreenchange","msfullscreenchange","fullscreenerror","mozfullscreenerror","webkitfullscreenerror","msfullscreenerror","readystatechange","visibilitychange"],ve=["absolutedeviceorientation","afterinput","afterprint","appinstalled","beforeinstallprompt","beforeprint","beforeunload","devicelight","devicemotion","deviceorientation","deviceorientationabsolute","deviceproximity","hashchange","languagechange","message","mozbeforepaint","offline","online","paint","pageshow","pagehide","popstate","rejectionhandled","storage","unhandledrejection","unload","userproximity","vrdisplyconnected","vrdisplaydisconnected","vrdisplaypresentchange"],ge=["beforecopy","beforecut","beforepaste","copy","cut","paste","dragstart","loadend","animationstart","search","transitionrun","transitionstart","webkitanimationend","webkitanimationiteration","webkitanimationstart","webkittransitionend"],ye=["encrypted","waitingforkey","msneedkey","mozinterruptbegin","mozinterruptend"],ke=["activate","afterupdate","ariarequest","beforeactivate","beforedeactivate","beforeeditfocus","beforeupdate","cellchange","controlselect","dataavailable","datasetchanged","datasetcomplete","errorupdate","filterchange","layoutcomplete","losecapture","move","moveend","movestart","propertychange","resizeend","resizestart","rowenter","rowexit","rowsdelete","rowsinserted","command","compassneedscalibration","deactivate","help","mscontentzoom","msmanipulationstatechanged","msgesturechange","msgesturedoubletap","msgestureend","msgesturehold","msgesturestart","msgesturetap","msgotpointercapture","msinertiastart","mslostpointercapture","mspointercancel","mspointerdown","mspointerenter","mspointerhover","mspointerleave","mspointermove","mspointerout","mspointerover","mspointerup","pointerout","mssitemodejumplistitemremoved","msthumbnailclick","stop","storagecommit"],me=["webglcontextrestored","webglcontextlost","webglcontextcreationerror"],_e=["autocomplete","autocompleteerror"],be=["toggle"],Te=["load"],we=["blur","error","focus","load","resize","scroll","messageerror"],Ee=["bounce","finish","start"],Se=["loadstart","progress","abort","error","load","progress","timeout","loadend","readystatechange"],De=["upgradeneeded","complete","abort","success","error","blocked","versionchange","close"],Ze=["close","error","open","message"],ze=["error","message"],Oe=he.concat(me,_e,be,de,ve,ge,ke),Pe=B("unbound");
Zone.__load_patch("util",function(e,t,r){r.patchOnProperties=i,r.patchMethod=c,r.bindArguments=n}),Zone.__load_patch("timers",function(e){var t="set",n="clear";v(e,t,n,"Timeout"),v(e,t,n,"Interval"),v(e,t,n,"Immediate")}),Zone.__load_patch("requestAnimationFrame",function(e){v(e,"request","cancel","AnimationFrame"),v(e,"mozRequest","mozCancel","AnimationFrame"),v(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",function(e,t){for(var n=["alert","prompt","confirm"],r=0;r<n.length;r++){var o=n[r];c(e,o,function(n,r,o){return function(r,a){return t.current.run(n,e,a,o)}})}}),Zone.__load_patch("EventTarget",function(e,t,n){var r=t.__symbol__("BLACK_LISTED_EVENTS");e[r]&&(t[r]=e[r]),z(e,n),Z(e,n);var o=e.XMLHttpRequestEventTarget;o&&o.prototype&&n.patchEventTarget(e,[o.prototype]),s("MutationObserver"),s("WebKitMutationObserver"),s("IntersectionObserver"),s("FileReader")}),Zone.__load_patch("on_property",function(e,t,n){E(n,e),g(),O(e)}),Zone.__load_patch("canvas",function(e){var t=e.HTMLCanvasElement;"undefined"!=typeof t&&t.prototype&&t.prototype.toBlob&&u(t.prototype,"toBlob",function(e,t){return{name:"HTMLCanvasElement.toBlob",target:e,cbIdx:0,args:t}})}),Zone.__load_patch("XHR",function(e,n){function r(e){function n(e){return e[o]}function r(e){XMLHttpRequest[s]=!1;var t=e.data,n=t.target,r=n[i];h||(h=n[H],d=n[x]),r&&d.call(n,y,r);var a=n[i]=function(){n.readyState===n.DONE&&!t.aborted&&XMLHttpRequest[s]&&e.state===k&&e.invoke()};h.call(n,y,a);var c=n[o];return c||(n[o]=e),b.apply(n,t.args),XMLHttpRequest[s]=!0,e}function l(){}function p(e){var t=e.data;return t.aborted=!0,T.apply(t.target,t.args)}var f=XMLHttpRequest.prototype,h=f[H],d=f[x];if(!h){var v=e.XMLHttpRequestEventTarget;if(v){var g=v.prototype;h=g[H],d=g[x]}}var y="readystatechange",k="scheduled",m=c(f,"open",function(){return function(e,t){return e[a]=0==t[2],e[u]=t[1],m.apply(e,t)}}),_="XMLHttpRequest.send",b=c(f,"send",function(){return function(e,n){if(e[a])return b.apply(e,n);var o={target:e,url:e[u],isPeriodic:!1,delay:null,args:n,aborted:!1};return t(_,l,o,r,p)}}),T=c(f,"abort",function(){return function(e){var t=n(e);if(t&&"string"==typeof t.type){if(null==t.cancelFn||t.data&&t.data.aborted)return;t.zone.cancelTask(t)}}})}r(e);var o=B("xhrTask"),a=B("xhrSync"),i=B("xhrListener"),s=B("xhrScheduled"),u=B("xhrURL")}),Zone.__load_patch("geolocation",function(e){e.navigator&&e.navigator.geolocation&&r(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",function(e,t){function n(t){return function(n){var r=h(e,t);r.forEach(function(r){var o=e.PromiseRejectionEvent;if(o){var a=new o(t,{promise:n.promise,reason:n.rejection});r.invoke(a)}})}}e.PromiseRejectionEvent&&(t[B("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),t[B("rejectionHandledHandler")]=n("rejectionhandled"))})});