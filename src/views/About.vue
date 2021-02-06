<template>
    <div class=about>
        
            <div class="titulo-inicial">
       <img class="fadeIn first" src="@/assets/tit9.png" id="icon" alt="User Icon" />
      </div>
      <div class="contenedor fadeIn second">
                <br>
                <div class="textito fadeIn third">
                <b>Haz una copia de seguridad de tus tareas, para de esta manera guardarlo y tener la opcion de recuperarlos en cualquier momento.</b>
                </div>
                        
                        <div class="boton fadeIn fourth">
                        <img class="fadeIn first" src="https://images.vexels.com/media/users/3/130146/isolated/preview/6d2e6223980af30947f1f37270215eca-descargar-icono-de-c-iacute-rculo-by-vexels.png" id="icon" alt="User Icon" />
                        </div>    
                        <div class="boton fadeIn fourth">
                        <b-button class=botoncito pill  v-on:click="backup()">Generar</b-button>
                        </div>
                            <br>
                            <div class="textito fadeIn fourth">
                <b>Restaura tus tareas si cuentas con el fichero de formato .ha para que no estés ingresando toda la configuracion antes realizada en esta aplicacion.</b>
                </div>
                        
                        <div class="boton fadeIn second">
                                <div>
                                <img class="fadeIn first" src="https://images.vexels.com/media/users/3/131901/isolated/preview/30a7829a3622fd3b61b12fcc47391cb0-recargar-icono-de-c-iacute-rculo-de-flecha-by-vexels.png" id="icon" alt="User Icon" />
                                </div>
                                <br>
                                <b-form-file
                                accept=".txt"
                                class=subir
                                v-model="file1"
                                :state="Boolean(file1)"
                                placeholder="Sube tu backup desde movil"
                                
                                ></b-form-file>
                        </div>
                        <br>       
                        <div class="boton fadeIn second">
                                <b-button class=botoncito pill  @click="recupera">Restaurar </b-button>
                        </div>
                        <br>
          </div>
          <br>
    </div>

    

</template>

<script>
import axios from 'axios';
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.$cookies.config('7d')

export default {
    name:"about",
    components: {
    //dragscroll,    

    },
    data:function(){
        return {
            nombre: "",
            file: "",
        }
    
    },
    created(){
    this.iniciar();
    },

    datos:{
        all_data:[]
    },
    methods:{
        iniciar(){
          axios.get('https://howerapp.herokuapp.com/getusers?usr=' + Vue.$cookies.get("usuario"))
          .then(res => {
              console.log(Vue.$cookies.get("usuario"))
              this.nombre=res.data[0].nombre
              
              //console.log(this.nombre)
          })
        },
        recupera(){

             this.$router.push('matriz');
        },
        backup(){
             console.log("hola")
             window.location.href ="http://howerapp.herokuapp.com/downbackup?username="+Vue.$cookies.get("usuario")
        },

    }
}

</script>

<style lang="less">
.about{
    background-image: url(https://i.pinimg.com/originals/b5/9d/c8/b59dc8d2bc6112cbe7fcdaccf0d893fa.jpg);
    .titulo-inicial{
        
      text-align: center;
      img{
        width: 100vw;
        height: 10vh;
        
      }
      
    }
    .contenedor{
        margin:20px;
        background-color: lightgray;
        .textito{
        
          text-align: center;
      padding: 4px;
      background: #99cc00;
      border-bottom-left-radius: 10px ;
      border-bottom-right-radius: 10px ;
      border-top-right-radius: 10px ;
      margin-left: 20px;
      margin-right: 20px;
      font-weight: 300;
      
      color: white;
        align-items: space-between;
  justify-content: space-between;
    }
    .boton{
        margin-left: 5vw;
        margin-right: 5vw;
        text-align: center;
        .subir{
            text-align: left;
        }
        .botoncito{
            width: 60%;
            height: 8vh;
            color: black;
            font-size: 140%;
            font-weight: 800;
            background-color:mediumpurple;
            opacity: 70%;
            border: 2px solid black;
        }
    }
    }
}
</style>