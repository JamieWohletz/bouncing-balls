define("bounciest-balls/app",["exports","ember","ember/resolver","ember/load-initializers","bounciest-balls/config/environment"],function(e,t,a,n,r){"use strict";var i;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),n["default"](i,r["default"].modulePrefix),e["default"]=i}),define("bounciest-balls/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("bounciest-balls/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("bounciest-balls/helpers/fa-icon",["exports","ember"],function(e,t){"use strict";var a=/^fa\-.+/,n=t["default"].Logger.warn,r=function(e,r){if("string"!==t["default"].typeOf(e)){var i="fa-icon: no icon specified";return n(i),t["default"].String.htmlSafe(i)}var d=r.hash,o=[],c="";o.push("fa"),e.match(a)||(e="fa-"+e),o.push(e),d.spin&&o.push("fa-spin"),d.flip&&o.push("fa-flip-"+d.flip),d.rotate&&o.push("fa-rotate-"+d.rotate),d.lg&&(n("fa-icon: the 'lg' parameter is deprecated. Use 'size' instead. I.e. {{fa-icon size=\"lg\"}}"),o.push("fa-lg")),d.x&&(n("fa-icon: the 'x' parameter is deprecated. Use 'size' instead. I.e. {{fa-icon size=\""+d.x+'"}}'),o.push("fa-"+d.x+"x")),d.size&&("string"===t["default"].typeOf(d.size)&&d.size.match(/\d+/)&&(d.size=Number(d.size)),"number"===t["default"].typeOf(d.size)?o.push("fa-"+d.size+"x"):o.push("fa-"+d.size)),d.fixedWidth&&o.push("fa-fw"),d.listItem&&o.push("fa-li"),d.pull&&o.push("pull-"+d.pull),d.border&&o.push("fa-border"),d.classNames&&!t["default"].isArray(d.classNames)&&(d.classNames=[d.classNames]),t["default"].isEmpty(d.classNames)||Array.prototype.push.apply(o,d.classNames),c+="<";var s=d.tagName||"i";return c+=s,c+=" class='"+o.join(" ")+"'",d.title&&(c+=" title='"+d.title+"'"),(void 0===d.ariaHidden||d.ariaHidden)&&(c+=' aria-hidden="true"'),c+="></"+s+">",t["default"].String.htmlSafe(c)};e["default"]=t["default"].Handlebars.makeBoundHelper(r),e.faIcon=r}),define("bounciest-balls/initializers/app-version",["exports","bounciest-balls/config/environment","ember"],function(e,t,a){"use strict";var n=a["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e,i){if(!r){var d=n(i.toString());a["default"].libraries.register(d,t["default"].APP.version),r=!0}}}}),define("bounciest-balls/initializers/export-application-global",["exports","ember","bounciest-balls/config/environment"],function(e,t,a){"use strict";function n(){var e=arguments[1]||arguments[0];if(a["default"].exportApplicationGlobal!==!1){var n,r=a["default"].exportApplicationGlobal;n="string"==typeof r?r:t["default"].String.classify(a["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("bounciest-balls/pods/application/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.content;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.createMorphAt(d,0,0,a);return n.insertBoundary(d,0),i(t,o,e,"ball-canvas"),d}}}())}),define("bounciest-balls/pods/application/view",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({tagName:""})}),define("bounciest-balls/pods/components/ball-canvas/color-schemes",["exports"],function(e){"use strict";e["default"]={sunset:["#FFE029","#E87115","#FF1614","#86A4E8","#1A28FF"],rainbow:["#FF0000","#FF7F00","#FFFF00","#00FF00","#0000FF","#4b0082","#8B00FF"],icy:["#022957","#042E5A","#4684C0","#C0DAF2","#7FC1F1"],magenta:["#FF170C","#DE0A53","#B60ADE","#8C0CF9","#F501CF"],america:["#D5D6DB","#3E0311","#C1233E","#202E5B","#5F85C0"],"candy apple red":["#F28896","#46130F","#7E100F","#D70A0A","#5A0506"],jungle:["#4C743B","#2B4124","#6CA833","#99DB3A","#E5F085"],"fruit bowl":["#878E00","#F19C05","#F47406","#D6291B","#FBADA1"],random:[]}}),define("bounciest-balls/pods/components/ball-canvas/component",["exports","ember","bounciest-balls/pods/components/ball-canvas/color-schemes"],function(e,t,a){"use strict";e["default"]=t["default"].Component.extend({classNames:["ball-canvas-component"],VELOCITY_INCREMENT:.07,SIZE_INCREMENT:3,tagName:"section",paused:!1,fullscreen:!1,controlsHidden:!1,changeColors:!1,collisionsOn:!1,collisionBehaviors:[Physics.behavior("body-collision-detection"),Physics.behavior("sweep-prune")],gravityOn:!1,gravityBehavior:Physics.behavior("constant-acceleration"),elasticityOn:!0,activeColorScheme:a["default"][0],colorSchemes:a["default"],colorSchemeNames:function(){return t["default"].keys(this.get("colorSchemes"))}.property("colorSchemes"),backgroundColor:"black",backgroundColors:["black","white","gray"],_generateBall:function(){return Physics.body("circle",{x:50,y:50,vx:Math.random(),vy:Math.random(),radius:40*Math.random()+10,restitution:1,cof:0,styles:{fillStyle:this._sampleColor()}})},_init:function(){var e,t,a,n,r;r=this,Physics.body.mixin("collide",function(){return this.radius&&(this.styles.fillStyle=r._sampleColor(),this.view=void 0),!0}),n="physics-canvas",t=new Physics({integrator:"verlet",sleepDisabled:!0}),e=new Physics.renderer("canvas",{el:n,meta:!1,autoResize:!0,styles:{circle:{lineWidth:1,fillStyle:"blue",background:"black"}}}),t.add(e),t.on("step",function(){t.render()}),a=this._generateEdgeCollisionBehavior(),t.addBehavior(a),t.add(Physics.behavior("body-impulse-response")),t.add(Physics.behavior("interactive",{el:e.el})),Physics.util.ticker.on(function(e){t.step(e)}),Physics.util.ticker.start(),this._setupListeners(t,a),this.set("world",t)}.on("didInsertElement"),_setupListeners:function(e,t){var a=this;e.on("collisions:detected",function(e){if(a.get("changeColors"))for(var t,n=0,r=e.collisions.length;r>n;n++)t=e.collisions[n],t.bodyA.collide&&t.bodyA.collide(t.bodyB),t.bodyB.collide&&t.bodyB.collide(t.bodyA)}),$(window).resize(function(){var e=a.get("world");e.removeBehavior(t),t=a._generateEdgeCollisionBehavior(),e.addBehavior(t)})},_generateEdgeCollisionBehavior:function(){var e,t,a;return t=this.$().width(),a=this.$().height(),e=Physics.aabb(0,0,t,a),Physics.behavior("edge-collision-detection",{aabb:e,restitution:1})},_autoChooseColorScheme:function(){this.activateColorScheme(this.get("activeColorScheme"))}.observes("activeColorScheme"),activateColorScheme:function(e){var t=this;if(this.get("colorSchemes")[e]){t.set("activeColorScheme",e);var a=this.get("world");a.getBodies().forEach(function(e){e.styles.fillStyle=t._sampleColor(),e.view=void 0})}},_sampleColor:function(){var e=this.get("activeColorScheme");if("random"===e)return this._randomColor();var t=this.get("colorSchemes")[this.get("activeColorScheme")];return t[Math.floor(Math.random()*t.length)]},_randomColor:function(){for(var e="0123456789ABCDEF".split(""),t="#",a=0;6>a;a++)t+=e[Math.floor(16*Math.random())];return t},_autoChooseBackgroundColor:function(){this.setBackgroundColor(this.get("backgroundColor"))}.observes("backgroundColor"),setBackgroundColor:function(e){this.$().css("background",e)},toggleBallCollisions:function(e){var t=this.get("collisionsOn"),a=this.get("collisionBehaviors");t?(e.removeBehavior(a[0]),e.removeBehavior(a[1])):(e.addBehavior(a[0]),e.addBehavior(a[1])),this.set("collisionsOn",!this.get("collisionsOn"))},toggleGravityEffect:function(e){var t=this.get("gravityBehavior");this.get("gravityOn")?e.removeBehavior(t):e.addBehavior(t),this.set("gravityOn",!this.get("gravityOn"))},toggleElasticBalls:function(e){e.getBodies().forEach(function(e){e.restitution=1===e.restitution?.7:1}),this.set("elasticityOn",!this.get("elasticityOn"))},changeSizeOfBodies:function(e,t){var a=e.getBodies(),n=this.get("SIZE_INCREMENT");a.forEach(function(e){var a=t?n:-n;(a>0||0>a&&e.geometry.radius-n>0)&&(e.geometry.radius+=a),e.view=void 0})},makeBodiesFaster:function(e){var t=this.get("VELOCITY_INCREMENT"),a=e.getBodies();a.forEach(function(e){var a=e.state.vel.x,n=e.state.vel.y;0>a?a-=t:a+=t,0>n?n-=t:n+=t,e.state.vel.set(a,n)})},makeBodiesSlower:function(e){var t=function(e){return e?0>e?-1:1:0},a=this.get("VELOCITY_INCREMENT"),n=e.getBodies();n.forEach(function(e){var n=e.state.vel.x,r=e.state.vel.y;(0!==n||0!==r)&&(0>n?n+=a:n-=a,0>r?r+=a:r-=a,t(n)===t(e.state.vel.x)&&t(r)===t(e.state.vel.y)&&e.state.vel.set(n,r))})},actions:{speedBodiesUp:function(){this.makeBodiesFaster(this.get("world"))},slowBodiesDown:function(){this.makeBodiesSlower(this.get("world"))},growBodies:function(){this.changeSizeOfBodies(this.get("world"),!0)},shrinkBodies:function(){this.changeSizeOfBodies(this.get("world"),!1)},addOneBody:function(){this.get("world").addBody(this._generateBall())},removeOneBody:function(){var e=this.get("world"),t=e.getBodies();t.length>0&&e.removeBody(t[0])},toggleCollisionDetection:function(){this.toggleBallCollisions(this.get("world"))},clear:function(){var e=this.get("world");e.remove(e.getBodies())},pause:function(){var e=this.get("world");e.isPaused()?(e.unpause(),this.set("paused",!1)):(e.pause(),this.set("paused",!0))},toggleGravity:function(){this.toggleGravityEffect(this.get("world"))},toggleElasticity:function(){this.toggleElasticBalls(this.get("world"))},toggleFullscreen:function(){screenfull.enabled&&(screenfull.toggle(),this.set("fullscreen",!this.get("fullscreen")))},toggleChangeColors:function(){this.set("changeColors",!this.get("changeColors"))},toggleControls:function(){this.$("#controls").toggle(),this.set("controlsHidden",!this.get("controlsHidden"))}}})}),define("bounciest-balls/pods/components/ball-canvas/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("        ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.inline;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.createMorphAt(d,1,1,a);return i(t,o,e,"fa-icon",["eye"],{}),d}}}(),t=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("        ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.inline;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.createMorphAt(d,1,1,a);return i(t,o,e,"fa-icon",["eye-slash"],{}),d}}}(),a=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("                ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode(" 1 ball\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.inline;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.createMorphAt(d,1,1,a);return i(t,o,e,"fa-icon",["plus"],{}),d}}}(),n=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("                ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode(" 1 ball\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.inline;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.createMorphAt(d,1,1,a);return i(t,o,e,"fa-icon",["minus"],{}),d}}}(),r=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("                ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.inline;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.createMorphAt(d,1,1,a);return i(t,o,e,"fa-icon",["backward"],{}),d}}}(),i=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("                    ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.inline;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.createMorphAt(d,1,1,a);return i(t,o,e,"fa-icon",["play"],{}),d}}}(),d=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("                    ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.inline;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.createMorphAt(d,1,1,a);return i(t,o,e,"fa-icon",["pause"],{}),d}}}(),o=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("                ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.inline;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.createMorphAt(d,1,1,a);return i(t,o,e,"fa-icon",["forward"],{}),d}}}(),c=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("                ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode(" size\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.inline;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.createMorphAt(d,1,1,a);return i(t,o,e,"fa-icon",["plus"],{}),d}}}(),s=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("                ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode(" size\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.inline;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.createMorphAt(d,1,1,a);return i(t,o,e,"fa-icon",["minus"],{}),d}}}(),l=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("                    ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.inline;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.createMorphAt(d,1,1,a);return i(t,o,e,"fa-icon",["check"],{}),d}}}(),h=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("                    ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.inline;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.createMorphAt(d,1,1,a);return i(t,o,e,"fa-icon",["close"],{}),d}}}(),u=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("                    ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.inline;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.createMorphAt(d,1,1,a);return i(t,o,e,"fa-icon",["check"],{}),d}}}(),p=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("                    ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.inline;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.createMorphAt(d,1,1,a);return i(t,o,e,"fa-icon",["close"],{}),d}}}(),m=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("                    ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.inline;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.createMorphAt(d,1,1,a);return i(t,o,e,"fa-icon",["check"],{}),d}}}(),v=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("                    ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.inline;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.createMorphAt(d,1,1,a);return i(t,o,e,"fa-icon",["close"],{}),d}}}(),g=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("                ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.inline;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.createMorphAt(d,1,1,a);return i(t,o,e,"fa-icon",["check"],{}),d}}}(),C=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("                ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.inline;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.createMorphAt(d,1,1,a);return i(t,o,e,"fa-icon",["close"],{}),d}}}(),f=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("                    ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.inline;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.createMorphAt(d,1,1,a);return i(t,o,e,"fa-icon",["compress"],{}),d}}}(),b=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("                    ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.inline;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.createMorphAt(d,1,1,a);return i(t,o,e,"fa-icon",["expand"],{}),d}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("button");e.setAttribute(a,"id","show-hide-controls"),e.setAttribute(a,"title","Show/hide controls");var n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("canvas");e.setAttribute(a,"id","physics-canvas"),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"id","controls");var n=e.createTextNode("\n\n    ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","control-row");var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("span");e.setAttribute(r,"class","quantity");var i=e.createTextNode("\n");e.appendChild(r,i);var i=e.createComment("");e.appendChild(r,i);var i=e.createComment("");e.appendChild(r,i);var i=e.createTextNode("        ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n        ");e.appendChild(n,r);var r=e.createElement("span");e.setAttribute(r,"class","speed");var i=e.createTextNode("\n");e.appendChild(r,i);var i=e.createComment("");e.appendChild(r,i);var i=e.createTextNode("            ");e.appendChild(r,i);var i=e.createElement("button"),d=e.createTextNode("\n");e.appendChild(i,d);var d=e.createComment("");e.appendChild(i,d);var d=e.createTextNode("            ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n");e.appendChild(r,i);var i=e.createComment("");e.appendChild(r,i);var i=e.createTextNode("        ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n        ");e.appendChild(n,r);var r=e.createElement("span");e.setAttribute(r,"class","size");var i=e.createTextNode("\n");e.appendChild(r,i);var i=e.createComment("");e.appendChild(r,i);var i=e.createComment("");e.appendChild(r,i);var i=e.createTextNode("        ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n        ");e.appendChild(n,r);var r=e.createElement("span");e.setAttribute(r,"class","clear");var i=e.createTextNode("\n          ");e.appendChild(r,i);var i=e.createElement("button"),d=e.createTextNode("\n            ");e.appendChild(i,d);var d=e.createComment("");e.appendChild(i,d);var d=e.createTextNode(" clear\n          ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n        ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","control-row");var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("span");e.setAttribute(r,"class","collisions");var i=e.createTextNode("\n            ");e.appendChild(r,i);var i=e.createElement("button"),d=e.createTextNode("\n");e.appendChild(i,d);var d=e.createComment("");e.appendChild(i,d);var d=e.createTextNode("                collisions\n            ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n        ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n        ");e.appendChild(n,r);var r=e.createElement("span");e.setAttribute(r,"class","gravity");var i=e.createTextNode("\n            ");e.appendChild(r,i);var i=e.createElement("button"),d=e.createTextNode("\n");e.appendChild(i,d);var d=e.createComment("");e.appendChild(i,d);var d=e.createTextNode("                gravity\n            ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n        ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n        ");e.appendChild(n,r);var r=e.createElement("span");e.setAttribute(r,"class","elasticity");var i=e.createTextNode("\n            ");e.appendChild(r,i);var i=e.createElement("button"),d=e.createTextNode("\n");e.appendChild(i,d);var d=e.createComment("");e.appendChild(i,d);var d=e.createTextNode("                elasticity\n            ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n        ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n        ");e.appendChild(n,r);var r=e.createElement("button"),i=e.createTextNode("\n");e.appendChild(r,i);var i=e.createComment("");e.appendChild(r,i);var i=e.createTextNode("            change colors\n        ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n        ");e.appendChild(n,r);var r=e.createElement("span");e.setAttribute(r,"class","fullscreen");var i=e.createTextNode("\n            ");e.appendChild(r,i);var i=e.createElement("button"),d=e.createTextNode("\n");e.appendChild(i,d);var d=e.createComment("");e.appendChild(i,d);var d=e.createTextNode("            ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n        ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","control-row");var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode(" \n        color scheme: ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n        background: ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(F,N,x){var T=N.dom,A=N.hooks,y=A.element,B=A.get,E=A.block,M=A.inline;T.detectNamespace(x);var k;N.useFragmentCache&&T.canClone?(null===this.cachedFragment&&(k=this.build(T),this.hasRendered?this.cachedFragment=k:this.hasRendered=!0),this.cachedFragment&&(k=T.cloneNode(this.cachedFragment,!0))):k=this.build(T);var R=T.childAt(k,[0]),w=T.childAt(k,[4]),P=T.childAt(w,[1]),D=T.childAt(P,[3]),S=T.childAt(P,[5]),H=T.childAt(S,[3]),L=T.childAt(P,[7]),O=T.childAt(P,[9,1]),z=T.childAt(w,[3]),_=T.childAt(z,[3,1]),I=T.childAt(z,[5,1]),G=T.childAt(z,[7,1]),$=T.childAt(z,[9]),U=T.childAt(z,[11,1]),V=T.childAt(w,[5]),Y=T.createMorphAt(R,1,1),j=T.createMorphAt(P,1,1),q=T.createMorphAt(D,1,1),J=T.createMorphAt(D,2,2),W=T.createMorphAt(S,1,1),Z=T.createMorphAt(H,1,1),K=T.createMorphAt(S,5,5),Q=T.createMorphAt(L,1,1),X=T.createMorphAt(L,2,2),ee=T.createMorphAt(O,1,1),te=T.createMorphAt(z,1,1),ae=T.createMorphAt(_,1,1),ne=T.createMorphAt(I,1,1),re=T.createMorphAt(G,1,1),ie=T.createMorphAt($,1,1),de=T.createMorphAt(U,1,1),oe=T.createMorphAt(V,1,1),ce=T.createMorphAt(V,3,3),se=T.createMorphAt(V,5,5);return y(N,R,F,"action",["toggleControls"],{}),E(N,Y,F,"if",[B(N,F,"controlsHidden")],{},e,t),M(N,j,F,"fa-icon",["sliders"],{}),E(N,q,F,"mousedown-button",[],{action:"addOneBody"},a,null),E(N,J,F,"mousedown-button",[],{action:"removeOneBody"},n,null),E(N,W,F,"mousedown-button",[],{action:"slowBodiesDown"},r,null),y(N,H,F,"action",["pause"],{}),E(N,Z,F,"if",[B(N,F,"paused")],{},i,d),E(N,K,F,"mousedown-button",[],{action:"speedBodiesUp"},o,null),E(N,Q,F,"mousedown-button",[],{action:"growBodies"},c,null),E(N,X,F,"mousedown-button",[],{action:"shrinkBodies"},s,null),y(N,O,F,"action",["clear"],{}),M(N,ee,F,"fa-icon",["eraser"],{}),M(N,te,F,"fa-icon",["gear"],{}),y(N,_,F,"action",["toggleCollisionDetection"],{}),E(N,ae,F,"if",[B(N,F,"collisionsOn")],{},l,h),y(N,I,F,"action",["toggleGravity"],{}),E(N,ne,F,"if",[B(N,F,"gravityOn")],{},u,p),y(N,G,F,"action",["toggleElasticity"],{}),
E(N,re,F,"if",[B(N,F,"elasticityOn")],{},m,v),y(N,$,F,"action",["toggleChangeColors"],{}),E(N,ie,F,"if",[B(N,F,"changeColors")],{},g,C),y(N,U,F,"action",["toggleFullscreen"],{}),E(N,de,F,"if",[B(N,F,"fullscreen")],{},f,b),M(N,oe,F,"fa-icon",["tint"],{}),M(N,ce,F,"view",["select"],{content:B(N,F,"colorSchemeNames"),value:B(N,F,"activeColorScheme")}),M(N,se,F,"view",["select"],{content:B(N,F,"backgroundColors"),value:B(N,F,"backgroundColor")}),k}}}())}),define("bounciest-balls/pods/components/mousedown-button/component",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Component.extend({tagName:"button",mouseDown:function(){var e=this;this.set("interval",setInterval(function(){e.sendAction()},100))},mouseUp:function(){clearInterval(this.get("interval"))},click:function(){this.sendAction()}})}),define("bounciest-balls/router",["exports","ember","bounciest-balls/config/environment"],function(e,t,a){"use strict";var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){}),e["default"]=n}),define("bounciest-balls/config/environment",["ember"],function(e){var t="bounciest-balls";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("bounciest-balls/tests/test-helper"):require("bounciest-balls/app")["default"].create({name:"bounciest-balls",version:"0.0.0.8eb5e52c"});