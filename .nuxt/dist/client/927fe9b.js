(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{198:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return l})),r.d(t,"a",(function(){return m}));var o=r(68),n=function(data){return Object(o.b)({method:"POST",url:"/api/users/login",data:data})},c=function(data){return Object(o.b)({method:"POST",url:"/api/users",data:data})},l=function(data){return Object(o.b)({method:"PUT",url:"/api/user",data:data})},m=function(e){return Object(o.b)({method:"GET",url:"/api/profiles/".concat(e)})}},199:function(e,t,r){e.exports=function(){"use strict";function e(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)e[t]=source[t]}return e}function t(r,o){function n(t,n,c){if("undefined"!=typeof document){"number"==typeof(c=e({},o,c)).expires&&(c.expires=new Date(Date.now()+864e5*c.expires)),c.expires&&(c.expires=c.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var m in c)c[m]&&(l+="; "+m,!0!==c[m]&&(l+="="+c[m].split(";")[0]));return document.cookie=t+"="+r.write(n,t)+l}}function c(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},i=0;i<t.length;i++){var n=t[i].split("="),c=n.slice(1).join("=");try{var l=decodeURIComponent(n[0]);if(o[l]=r.read(c,l),e===l)break}catch(e){}}return e?o[e]:o}}return Object.create({set:n,get:c,remove:function(t,r){n(t,"",e({},r,{expires:-1}))},withAttributes:function(r){return t(this.converter,e({},this.attributes,r))},withConverter:function(r){return t(e({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(r)}})}return t({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}()},277:function(e,t,r){"use strict";r.r(t);r(37),r(23),r(24),r(49),r(50);var o=r(4),n=r(19),c=(r(36),r(198)),l=r(40);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d=r(199),f={middleware:"authenticated",name:"SettingsIndex",data:function(){return{user:{bio:"",email:"",image:"",password:"",username:""}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)({storeUser:"user"})),mounted:function(){this.user.bio=this.storeUser.bio,this.user.email=this.storeUser.email,this.user.image=this.storeUser.image,this.user.password=this.storeUser.password,this.user.username=this.storeUser.username},methods:{updateuser:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.d)({user:e.user});case 2:r=t.sent,data=r.data,e.$store.commit("setUser",data.user),d.set("user",data.user),e.$router.push("/profile/".concat(data.user.username));case 7:case"end":return t.stop()}}),t)})))()},logout:function(){this.$store.commit("setUser",null),d.set("user",null),this.$router.push("/")}}},v=f,h=r(30),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"settings-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v("Your Settings")]),e._v(" "),r("form",[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.image,expression:"user.image"}],staticClass:"form-control",attrs:{type:"text",placeholder:"URL of profile picture"},domProps:{value:e.user.image},on:{input:function(t){t.target.composing||e.$set(e.user,"image",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.user.bio,expression:"user.bio"}],staticClass:"form-control form-control-lg",attrs:{rows:"8",placeholder:"Short bio about you"},domProps:{value:e.user.bio},on:{input:function(t){t.target.composing||e.$set(e.user,"bio",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right",on:{click:function(t){return t.preventDefault(),e.updateuser()}}},[e._v("\n              Update Settings\n            ")])])]),e._v(" "),r("button",{staticClass:"btn btn-outline-danger",on:{click:function(t){return e.logout()}}},[e._v("\n          Or click here to logout.\n        ")])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);