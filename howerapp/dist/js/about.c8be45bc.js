(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"3f6b":function(t,e,a){t.exports=a.p+"img/tit9.96cfc8bf.png"},5795:function(t,e,a){"use strict";a("6868")},6868:function(t,e,a){},f820:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[t._m(0),a("div",{staticClass:"contenedor fadeIn second"},[a("br"),t._m(1),t._m(2),a("div",{staticClass:"boton fadeIn fourth"},[a("b-button",{staticClass:"botoncito",attrs:{pill:""},on:{click:function(e){return t.backup()}}},[t._v("Generar")])],1),a("br"),t._m(3),a("div",{staticClass:"boton fadeIn second"},[t._m(4),a("br"),a("b-form-file",{staticClass:"subir",attrs:{accept:".txt",state:Boolean(t.file1),placeholder:"Sube tu backup desde movil"},model:{value:t.file1,callback:function(e){t.file1=e},expression:"file1"}})],1),a("br"),a("div",{staticClass:"boton fadeIn second"},[a("b-button",{staticClass:"botoncito",attrs:{pill:""},on:{click:t.recupera}},[t._v("Restaurar ")])],1),a("br")]),a("br")])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"titulo-inicial"},[s("img",{staticClass:"fadeIn first",attrs:{src:a("3f6b"),id:"icon",alt:"User Icon"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"textito fadeIn third"},[a("b",[t._v("Haz una copia de seguridad de tus tareas, para de esta manera guardarlo y tener la opcion de recuperarlos en cualquier momento.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"boton fadeIn fourth"},[a("img",{staticClass:"fadeIn first",attrs:{src:"https://images.vexels.com/media/users/3/130146/isolated/preview/6d2e6223980af30947f1f37270215eca-descargar-icono-de-c-iacute-rculo-by-vexels.png",id:"icon",alt:"User Icon"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"textito fadeIn fourth"},[a("b",[t._v("Restaura tus tareas si cuentas con el fichero de formato .ha para que no estés ingresando toda la configuracion antes realizada en esta aplicacion.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{staticClass:"fadeIn first",attrs:{src:"https://images.vexels.com/media/users/3/131901/isolated/preview/30a7829a3622fd3b61b12fcc47391cb0-recargar-icono-de-c-iacute-rculo-de-flecha-by-vexels.png",id:"icon",alt:"User Icon"}})])}],o=a("bc3a"),n=a.n(o),c=a("2b0e"),r=a("2b27"),u=a.n(r);c["default"].use(u.a),c["default"].$cookies.config("7d");var l={name:"about",components:{},data:function(){return{nombre:"",file:""}},created:function(){this.iniciar()},datos:{all_data:[]},methods:{iniciar:function(){var t=this;n.a.get("https://howerapp.herokuapp.com/getusers?usr="+c["default"].$cookies.get("usuario")).then((function(e){console.log(c["default"].$cookies.get("usuario")),t.nombre=e.data[0].nombre}))},recupera:function(){this.$router.push("matriz")},backup:function(){console.log("hola"),window.location.href="http://howerapp.herokuapp.com/downbackup?username="+c["default"].$cookies.get("usuario")}}},d=l,f=(a("5795"),a("2877")),b=Object(f["a"])(d,s,i,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=about.c8be45bc.js.map