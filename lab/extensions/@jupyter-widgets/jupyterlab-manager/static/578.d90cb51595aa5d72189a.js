(self.webpackChunk_jupyter_widgets_jupyterlab_manager=self.webpackChunk_jupyter_widgets_jupyterlab_manager||[]).push([[578],{1291:(e,t,s)=>{"use strict";s.r(t),s.d(t,{DOMWidgetModel:()=>x,DOMWidgetView:()=>L,IJupyterWidgetRegistry:()=>R,JUPYTER_WIDGETS_VERSION:()=>S,JupyterLuminoPanelWidget:()=>A,JupyterLuminoWidget:()=>M,LayoutModel:()=>W,LayoutView:()=>T,PROTOCOL_VERSION:()=>P,StyleModel:()=>V,StyleView:()=>D,ViewList:()=>I,WidgetModel:()=>C,WidgetView:()=>z,assign:()=>a,difference:()=>l,isEqual:()=>r,isObject:()=>m,isSerializable:()=>_,put_buffers:()=>d,reject:()=>u,remove_buffers:()=>g,resolvePromisesDict:()=>c,shims:()=>J,unpack_models:()=>E,uuid:()=>h});var i=s(1797),o=s(8149),n=s.n(o);function l(e,t){return e.filter((e=>-1===t.indexOf(e)))}function r(e,t){return n()(e,t)}const a=Object.assign||function(e,...t){for(let s=1;s<t.length;s++){const i=t[s];for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e};function h(){return i.UUID.uuid4()}function c(e){const t=Object.keys(e),s=[];return t.forEach((function(t){s.push(e[t])})),Promise.all(s).then((e=>{const s={};for(let i=0;i<t.length;i++)s[t[i]]=e[i];return s}))}function u(e,t){return function(s){throw t&&console.error(new Error(e)),s}}function d(e,t,s){for(let i=0;i<t.length;i++){const o=t[i];let n=s[i];n instanceof DataView||(n=new DataView(n instanceof ArrayBuffer?n:n.buffer));let l=e;for(let e=0;e<o.length-1;e++)l=l[o[e]];l[o[o.length-1]]=n}}function _(e){var t;return null!==(t="object"==typeof e&&e&&"toJSON"in e)&&void 0!==t&&t}function m(e){return i.JSONExt.isObject(e)}function g(e){const t=[],s=[];return{state:function e(i,o){if(_(i)&&(i=i.toJSON()),Array.isArray(i)){let n=!1;for(let l=0;l<i.length;l++){const r=i[l];if(r)if(r instanceof ArrayBuffer||ArrayBuffer.isView(r))n||(i=i.slice(),n=!0),t.push(ArrayBuffer.isView(r)?r.buffer:r),s.push(o.concat([l])),i[l]=null;else{const t=e(r,o.concat([l]));t!==r&&(n||(i=i.slice(),n=!0),i[l]=t)}}}else if(m(i))for(const n in i){let l=!1;if(Object.prototype.hasOwnProperty.call(i,n)){const r=i[n];if(r)if(r instanceof ArrayBuffer||ArrayBuffer.isView(r))l||(i=Object.assign({},i),l=!0),t.push(ArrayBuffer.isView(r)?r.buffer:r),s.push(o.concat([n])),delete i[n];else{const t=e(r,o.concat([n]));t!==r&&(l||(i=Object.assign({},i),l=!0),i[n]=t)}}}return i}(e,[]),buffers:t,buffer_paths:s}}function f(e,t,s){if(null==e)return this;let o;if(i.JSONExt.isObject(e)?(o=e,s=t):(o={})[e]=t,s||(s={}),!this._validate(o,s))return!1;const n=s.unset,l=s.silent,a=[],h=this._changing;this._changing=!0,h||(this._previousAttributes=Object.assign({},this.attributes),this.changed={});const c=this.attributes,u=this.changed,d=this._previousAttributes;for(const e in o)t=o[e],r(c[e],t)||a.push(e),r(d[e],t)?delete u[e]:u[e]=t,n?delete c[e]:c[e]=t;if(this.id=this.get(this.idAttribute),!l){a.length&&(this._pending=s);for(let e=0;e<a.length;e++)this.trigger("change:"+a[e],this,c[a[e]],s)}if(h)return this;if(!l)for(;this._pending;)s=this._pending,this._pending=!1,this.trigger("change",this,s);return this._pending=!1,this._changing=!1,this}var p=s(7298),v=s(2994),b=s.n(v);const y=Element.prototype,w=y.matches||y.webkitMatchesSelector||y.mozMatchesSelector||y.msMatchesSelector||y.oMatchesSelector||function(e){const t=(this.document||this.ownerDocument).querySelectorAll(e);let s=t.length;for(;--s>=0&&t.item(s)!==this;);return s>-1};class k extends p.View{_removeElement(){this.undelegateEvents(),this.el.parentNode&&this.el.parentNode.removeChild(this.el)}_setElement(e){this.el=e}_setAttributes(e){for(const t in e)t in this.el?this.el[t]=e[t]:this.el.setAttribute(t,e[t])}delegate(e,t,s){"string"!=typeof t&&(s=t,t=null),void 0===this._domEvents&&(this._domEvents=[]);const i=this.el,o=t?function(e){let o=e.target||e.srcElement;for(;o&&o!==i;o=o.parentNode)if(w.call(o,t))return e.delegateTarget=o,s.handleEvent?s.handleEvent(e):s(e)}:s;return this.el.addEventListener(e,o,!1),this._domEvents.push({eventName:e,handler:o,listener:s,selector:t}),o}undelegate(e,t,s){if("function"==typeof t&&(s=t,t=null),this.el&&this._domEvents){const i=this._domEvents.slice();let o=i.length;for(;o--;){const n=i[o];!(n.eventName!==e||s&&n.listener!==s||t&&n.selector!==t)&&(this.el.removeEventListener(n.eventName,n.handler,!1),this._domEvents.splice(o,1))}}return this}undelegateEvents(){if(this.el&&this._domEvents){const e=this._domEvents.length;for(let t=0;t<e;t++){const e=this._domEvents[t];this.el.removeEventListener(e.eventName,e.handler,!1)}this._domEvents.length=0}return this}}var j=s(3211),O=s(3706);const S="2.0.0",P="2.0.0";function E(e,t){if(Array.isArray(e)){const s=[];return e.forEach(((e,i)=>{s.push(E(e,t))})),Promise.all(s)}if(e instanceof Object&&"string"!=typeof e){const s={};return Object.keys(e).forEach((i=>{s[i]=E(e[i],t)})),c(s)}return"string"==typeof e&&"IPY_MODEL_"===e.slice(0,10)?Promise.resolve(t.get_model(e.slice(10,e.length))):Promise.resolve(e)}class C extends p.Model{defaults(){return{_model_module:"@jupyter-widgets/base",_model_name:"WidgetModel",_model_module_version:S,_view_module:"@jupyter-widgets/base",_view_name:null,_view_module_version:S,_view_count:null}}isNew(){return!1}initialize(e,t){super.initialize(e,t),this.widget_manager=t.widget_manager,this.model_id=t.model_id;const s=t.comm;this.views=Object.create(null),this.state_change=Promise.resolve(),this._closed=!1,this._state_lock=null,this._msg_buffer=null,this._msg_buffer_callbacks=null,this._pending_msgs=0,this._buffered_state_diff={},s?(this.comm=s,s.on_close(this._handle_comm_closed.bind(this)),s.on_msg(this._handle_comm_msg.bind(this)),this.comm_live=!0):this.comm_live=!1}get comm_live(){return this._comm_live}set comm_live(e){this._comm_live=e,this.trigger("comm_live_update")}send(e,t,s){if(void 0!==this.comm){const i={method:"custom",content:e};this.comm.send(i,t,{},s)}}close(e=!1){if(this._closed)return Promise.resolve();if(this._closed=!0,this.comm&&!e&&this.comm.close(),this.stopListening(),this.trigger("destroy",this),this.comm&&delete this.comm,this.views){const e=Object.keys(this.views).map((e=>this.views[e].then((e=>e.remove()))));return delete this.views,Promise.all(e).then((()=>{}))}return Promise.resolve()}_handle_comm_closed(e){this.trigger("comm:close"),this.close(!0)}_handle_comm_msg(e){const t=e.content.data;switch(t.method){case"update":return this.state_change=this.state_change.then((()=>{const s=t.state;return d(s,t.buffer_paths||[],e.buffers||[]),this.constructor._deserialize_state(s,this.widget_manager)})).then((e=>{this.set_state(e)})).catch(u(`Could not process update msg for model id: ${this.model_id}`,!0)),this.state_change;case"custom":return this.trigger("msg:custom",t.content,e.buffers),Promise.resolve()}return Promise.resolve()}set_state(e){this._state_lock=e;try{this.set(e)}catch(e){console.error(`Error setting state: ${e.message}`)}finally{this._state_lock=null}}get_state(e){const t=this.attributes;if(e){const e=this.defaults,s="function"==typeof e?e.call(this):e,i={};return Object.keys(t).forEach((e=>{r(t[e],s[e])||(i[e]=t[e])})),i}return Object.assign({},t)}_handle_status(e){void 0!==this.comm&&"idle"===e.content.execution_state&&(this._pending_msgs--,null!==this._msg_buffer&&this._pending_msgs<1&&(this.send_sync_message(this._msg_buffer,this._msg_buffer_callbacks),this._msg_buffer=null,this._msg_buffer_callbacks=null))}callbacks(e){return this.widget_manager.callbacks(e)}set(e,t,s){const i=f.call(this,e,t,s);if(void 0!==this._buffered_state_diff){const e=this.changedAttributes()||{};if(this._state_lock)for(const t of Object.keys(this._state_lock))e[t]===this._state_lock[t]&&delete e[t];if(this._buffered_state_diff_synced)for(const t of Object.keys(this._buffered_state_diff_synced))e[t]===this._buffered_state_diff_synced[t]&&delete e[t];this._buffered_state_diff=a(this._buffered_state_diff,e)}return!1===this._changing&&(this._buffered_state_diff_synced={}),i}sync(e,t,s={}){if(void 0===this.comm)throw"Syncing error: no comm channel defined";const i="patch"===e?s.attrs:t.get_state(s.drop_defaults);if(this._state_lock)for(const e of Object.keys(this._state_lock))i[e]===this._state_lock[e]&&delete i[e];const o=this.serialize(i);if(Object.keys(o).length>0){const t=s.callbacks||this.callbacks();if(this._pending_msgs>=1){switch(e){case"patch":this._msg_buffer=a(this._msg_buffer||{},o);break;case"update":case"create":this._msg_buffer=o;break;default:throw"unrecognized syncing method"}this._msg_buffer_callbacks=t}else this.send_sync_message(i,t)}}serialize(e){const t=this.constructor.serializers||{};for(const s of Object.keys(e))try{t[s]&&t[s].serialize?e[s]=t[s].serialize(e[s],this):e[s]=JSON.parse(JSON.stringify(e[s])),e[s]&&e[s].toJSON&&(e[s]=e[s].toJSON())}catch(e){throw console.error("Error serializing widget state attribute: ",s),e}return e}send_sync_message(e,t={}){if(this.comm)try{t.iopub=t.iopub||{};const s=t.iopub.status;t.iopub.status=e=>{this._handle_status(e),s&&s(e)};const i=g(e);this.comm.send({method:"update",state:i.state,buffer_paths:i.buffer_paths},t,{},i.buffers),this._pending_msgs++}catch(e){console.error("Could not send widget sync message",e)}}save_changes(e){if(this.comm_live){const t={patch:!0};e&&(t.callbacks=e),this.save(this._buffered_state_diff,t),this._changing&&a(this._buffered_state_diff_synced,this._buffered_state_diff),this._buffered_state_diff={}}}on_some_change(e,t,s){this.on("change",((...i)=>{e.some(this.hasChanged,this)&&t.apply(s,i)}),this)}toJSON(e){return`IPY_MODEL_${this.model_id}`}static _deserialize_state(e,t){const s=this.serializers;let i;if(s){i={};for(const o in e)s[o]&&s[o].deserialize?i[o]=s[o].deserialize(e[o],t):i[o]=e[o]}else i=e;return c(i)}}class x extends C{defaults(){return a(super.defaults(),{_dom_classes:[],tabbable:null,tooltip:null})}}x.serializers=Object.assign(Object.assign({},C.serializers),{layout:{deserialize:E},style:{deserialize:E}});class z extends k{constructor(e){super(e)}initialize(e){this.listenTo(this.model,"change",(()=>{const e=Object.keys(this.model.changedAttributes()||{});"_view_count"===e[0]&&1===e.length||this.update()})),this.options=e.options,this.once("remove",(()=>{"number"==typeof this.model.get("_view_count")&&(this.model.set("_view_count",this.model.get("_view_count")-1),this.model.save_changes())})),this.once("displayed",(()=>{"number"==typeof this.model.get("_view_count")&&(this.model.set("_view_count",this.model.get("_view_count")+1),this.model.save_changes())})),this.displayed=new Promise(((e,t)=>{this.once("displayed",e),this.model.on("msg:custom",this.handle_message.bind(this))}))}handle_message(e){"focus"===e.do?this.el.focus():"blur"===e.do&&this.el.blur()}update(e){}render(){}create_child_view(e,t={}){return t=Object.assign({parent:this},t),this.model.widget_manager.create_view(e,t).catch(u("Could not create child view",!0))}callbacks(){return this.model.callbacks(this)}send(e,t){this.model.send(e,this.callbacks(),t)}touch(){this.model.save_changes(this.callbacks())}remove(){return super.remove(),this.trigger("remove"),this}}class M extends O.Widget{constructor(e){const t=e.view;delete e.view,super(e),this._view=t}dispose(){this.isDisposed||(super.dispose(),this._view.remove(),this._view=null)}processMessage(e){super.processMessage(e),this._view.processLuminoMessage(e)}}class A extends O.Panel{constructor(e){const t=e.view;delete e.view,super(e),this._view=t}processMessage(e){super.processMessage(e),this._view.processLuminoMessage(e)}dispose(){this.isDisposed||(super.dispose(),this._view.remove(),this._view=null)}}class L extends z{initialize(e){super.initialize(e),this.listenTo(this.model,"change:_dom_classes",((e,t)=>{const s=e.previous("_dom_classes");this.update_classes(s,t)})),this.layoutPromise=Promise.resolve(),this.listenTo(this.model,"change:layout",((e,t)=>{this.setLayout(t,e.previous("layout"))})),this.stylePromise=Promise.resolve(),this.listenTo(this.model,"change:style",((e,t)=>{this.setStyle(t,e.previous("style"))})),this.displayed.then((()=>{this.update_classes([],this.model.get("_dom_classes")),this.setLayout(this.model.get("layout")),this.setStyle(this.model.get("style"))})),this._comm_live_update(),this.listenTo(this.model,"comm_live_update",(()=>{this._comm_live_update()})),this.listenTo(this.model,"change:tooltip",this.updateTooltip),this.updateTooltip()}setLayout(e,t){e&&(this.layoutPromise=this.layoutPromise.then((t=>(t&&(t.unlayout(),this.stopListening(t.model),t.remove()),this.create_child_view(e).then((e=>this.displayed.then((()=>(e.trigger("displayed"),this.listenTo(e.model,"change",(()=>{j.MessageLoop.postMessage(this.luminoWidget,O.Widget.ResizeMessage.UnknownSize)})),j.MessageLoop.postMessage(this.luminoWidget,O.Widget.ResizeMessage.UnknownSize),this.trigger("layout-changed"),e))))).catch(u("Could not add LayoutView to DOMWidgetView",!0))))))}setStyle(e,t){e&&(this.stylePromise=this.stylePromise.then((t=>(t&&(t.unstyle(),this.stopListening(t.model),t.remove()),this.create_child_view(e).then((e=>this.displayed.then((()=>(e.trigger("displayed"),this.trigger("style-changed"),e))))).catch(u("Could not add styleView to DOMWidgetView",!0))))))}updateTooltip(){const e=this.model.get("tooltip");e?0===this.model.get("description").length&&this.el.setAttribute("title",e):this.el.removeAttribute("title")}update_classes(e,t,s){void 0===s&&(s=this.el),l(e,t).map((function(e){s.classList?s.classList.remove(e):s.setAttribute("class",s.getAttribute("class").replace(e,""))})),l(t,e).map((function(e){s.classList?s.classList.add(e):s.setAttribute("class",s.getAttribute("class").concat(" ",e))}))}update_mapped_classes(e,t,s){let i=this.model.previous(t);const o=e[i]?e[i]:[];i=this.model.get(t);const n=e[i]?e[i]:[];this.update_classes(o,n,s||this.el)}set_mapped_classes(e,t,s){const i=this.model.get(t),o=e[i]?e[i]:[];this.update_classes([],o,s||this.el)}_setElement(e){this.luminoWidget&&this.luminoWidget.dispose(),this.$el=e instanceof b()?e:b()(e),this.el=this.$el[0],this.luminoWidget=new M({node:e,view:this})}remove(){return this.luminoWidget&&this.luminoWidget.dispose(),super.remove()}processLuminoMessage(e){switch(e.type){case"after-attach":this.trigger("displayed");break;case"show":this.trigger("shown")}}_comm_live_update(){this.model.comm_live?this.luminoWidget.removeClass("jupyter-widgets-disconnected"):this.luminoWidget.addClass("jupyter-widgets-disconnected")}updateTabindex(){const e=this.model.get("tabbable");!0===e?this.el.setAttribute("tabIndex","0"):!1===e?this.el.setAttribute("tabIndex","-1"):null===e&&this.el.removeAttribute("tabIndex")}}const N={align_content:null,align_items:null,align_self:null,border_top:null,border_right:null,border_bottom:null,border_left:null,bottom:null,display:null,flex:null,flex_flow:null,height:null,justify_content:null,justify_items:null,left:null,margin:null,max_height:null,max_width:null,min_height:null,min_width:null,overflow:null,order:null,padding:null,right:null,top:null,visibility:null,width:null,object_fit:null,object_position:null,grid_auto_columns:null,grid_auto_flow:null,grid_auto_rows:null,grid_gap:null,grid_template_rows:null,grid_template_columns:null,grid_template_areas:null,grid_row:null,grid_column:null,grid_area:null};class W extends C{defaults(){return a(super.defaults(),{_model_name:"LayoutModel",_view_name:"LayoutView"},N)}}class T extends z{initialize(e){this._traitNames=[],super.initialize(e);for(const e of Object.keys(N))this.registerTrait(e)}registerTrait(e){this._traitNames.push(e),this.listenTo(this.model,"change:"+e,((t,s)=>{this.handleChange(e,s)})),this.handleChange(e,this.model.get(e))}css_name(e){return e.replace(/_/g,"-")}handleChange(e,t){const s=this.options.parent;s?null===t?s.el.style.removeProperty(this.css_name(e)):s.el.style.setProperty(this.css_name(e),t):console.warn("Style not applied because a parent view does not exist")}unlayout(){const e=this.options.parent;this._traitNames.forEach((t=>{e?e.el.style.removeProperty(this.css_name(t)):console.warn("Style not removed because a parent view does not exist")}),this)}}class V extends C{defaults(){const e=this.constructor;return a(super.defaults(),{_model_name:"StyleModel",_view_name:"StyleView"},Object.keys(e.styleProperties).reduce(((t,s)=>(t[s]=e.styleProperties[s].default,t)),{}))}}V.styleProperties={};class D extends z{initialize(e){this._traitNames=[],super.initialize(e);const t=this.model.constructor;for(const e of Object.keys(t.styleProperties))this.registerTrait(e);this.style()}registerTrait(e){this._traitNames.push(e),this.listenTo(this.model,"change:"+e,((t,s)=>{this.handleChange(e,s)}))}handleChange(e,t){const s=this.options.parent;if(s){const i=this.model.constructor.styleProperties,o=i[e].attribute,n=i[e].selector,l=n?s.el.querySelectorAll(n):[s.el];if(null===t)for(let e=0;e!==l.length;++e)l[e].style.removeProperty(o);else for(let e=0;e!==l.length;++e)l[e].style.setProperty(o,t)}else console.warn("Style not applied because a parent view does not exist")}style(){for(const e of this._traitNames)this.handleChange(e,this.model.get(e))}unstyle(){const e=this.options.parent,t=this.model.constructor.styleProperties;this._traitNames.forEach((s=>{if(e){const i=t[s].attribute,o=t[s].selector,n=o?e.el.querySelectorAll(o):[e.el];for(let e=0;e!==n.length;++e)n[e].style.removeProperty(i)}else console.warn("Style not removed because a parent view does not exist")}),this)}}var J;!function(e){let t;!function(e){e.CommManager=class{constructor(e){this.targets=Object.create(null),this.comms=Object.create(null),this.init_kernel(e)}init_kernel(e){this.kernel=e,this.jsServicesKernel=e}async new_comm(e,s,i,o,n,l){const r=this.jsServicesKernel.createComm(e,n),a=new t(r);return this.register_comm(a),a.open(s,i,o,l),a}register_target(e,s){const i=this.jsServicesKernel.registerCommTarget(e,((e,i)=>{const o=new t(e);this.register_comm(o);try{return s(o,i)}catch(e){o.close(),console.error(e),console.error(new Error("Exception opening new comm"))}}));this.targets[e]=i}unregister_target(e,t){this.targets[e].dispose(),delete this.targets[e]}register_comm(e){return this.comms[e.comm_id]=Promise.resolve(e),e.kernel=this.kernel,e.comm_id}};class t{constructor(e){this.jsServicesComm=e}get comm_id(){return this.jsServicesComm.commId}get target_name(){return this.jsServicesComm.targetName}open(e,t,s,i){const o=this.jsServicesComm.open(e,s,i);return this._hookupCallbacks(o,t),o.msg.header.msg_id}send(e,t,s,i){const o=this.jsServicesComm.send(e,s,i);return this._hookupCallbacks(o,t),o.msg.header.msg_id}close(e,t,s,i){const o=this.jsServicesComm.close(e,s,i);return this._hookupCallbacks(o,t),o.msg.header.msg_id}on_msg(e){this.jsServicesComm.onMsg=e.bind(this)}on_close(e){this.jsServicesComm.onClose=e.bind(this)}_hookupCallbacks(e,t){t&&(e.onReply=function(e){t.shell&&t.shell.reply&&t.shell.reply(e)},e.onStdin=function(e){t.input&&t.input(e)},e.onIOPub=function(e){if(t.iopub)if(t.iopub.status&&"status"===e.header.msg_type)t.iopub.status(e);else if(t.iopub.clear_output&&"clear_output"===e.header.msg_type)t.iopub.clear_output(e);else if(t.iopub.output)switch(e.header.msg_type){case"display_data":case"execute_result":case"stream":case"error":t.iopub.output(e)}})}}e.Comm=t}(t=e.services||(e.services={}))}(J||(J={}));class I{constructor(e,t,s){this.initialize(e,t,s)}initialize(e,t,s){this._handler_context=s||this,this._models=[],this.views=[],this._create_view=e,this._remove_view=t||function(e){e.remove()}}update(e,t,s,i){const o=s||this._remove_view,n=t||this._create_view;i=i||this._handler_context;let l=0;for(;l<e.length&&!(l>=this._models.length||e[l]!==this._models[l]);l++);const r=l,a=this.views.splice(r,this.views.length-r);for(let e=0;e<a.length;e++)a[e].then((function(e){o.call(i,e)}));for(;l<e.length;l++)this.views.push(Promise.resolve(n.call(i,e[l],l)));return this._models=e.slice(),Promise.all(this.views)}remove(){return Promise.all(this.views).then((e=>{e.forEach((e=>this._remove_view.call(this._handler_context,e))),this.views=[],this._models=[]}))}dispose(){this.views=null,this._models=null}}const R=new i.Token("jupyter.extensions.jupyterWidgetRegistry")}}]);