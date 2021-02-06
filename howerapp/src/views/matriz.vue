
<template>
  <div class="matriz">
       
       <div class="title3">
       <img class="fadeIn first" src="@/assets/tit3.png" id="icon" alt="User Icon" />
      </div>
      <div class="textito fadeIn second">
       <b>Perfecto! Terminamos de Clasificar tus tareas según la matriz de Eisen-Hower, selecciona cada cuadrante para visualizar las tareas que contienen.</b>
      </div>
       
       
      <div class="combito">
        
        <div class="img1 fadeIn second" @click="primercuadrante">
           <div class="title3"> Urgente</div> 
          <img src="https://4.bp.blogspot.com/-UvXvNkey1F0/UN9XuGnX12I/AAAAAAAAAT0/8LvKDOdVFo4/s1600/RelojArena.gif" alt="">
          <div class="title3"> Importante</div> 
        </div>
        <div class="img2 fadeIn second" @click="segundocuadrante">
            <div class="title3">No Urgente</div>
          <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/32985793/c321c961c8f4dde9465e000d4ea4f1b7b6018b91.gif" alt="">
             <div class="title3"> Importante</div> 
        </div>

         </div>
         
      <div class="combito">
        <div class="img3 fadeIn fourth" @click="tercercuadrante">
            <div class="title3">Urgente</div> 
          <img src="https://www.pqs.pe/sites/default/files/escritorio/manos.gif" alt="">
          <div class="title3"> No Importante</div> 
        </div>

        <div class="img4 fadeIn fourth" @click="cuartocuadrante">
            <div class="title3">No Urgente</div>
          <img src="https://media1.giphy.com/media/Z8kchLppbJWRpsWGf2/source.gif" alt="">
          <div class="title3"> No Importante</div> 
        </div>

         </div>
         


  
  </div>
</template>

<script>
import axios from 'axios';

import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.$cookies.config('7d')

export default {
    name:"matriz",
    components: {
    //dragscroll,    

    },
    data:function(){
        return {
            nombre: "",
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
           
              this.nombre=res.data[0].nombre
              
              //console.log(this.nombre)
          })
        },
        primercuadrante(){
          this.$router.push('primercuadrante');  
        },
        segundocuadrante(){
          this.$router.push('segundocuadrante');  
        },
       tercercuadrante(){
          this.$router.push('tercercuadrante');  
        },
        cuartocuadrante(){
          this.$router.push('cuartocuadrante');  
        }
    }
}
</script>

<style lang="less">


  .matriz{
      align-items: center;
      margin: 0;
    //  background-color: white;
   background-image: url(https://i.pinimg.com/originals/e2/27/53/e22753cb935f390a3705dd40fe612475.png);
    
    .combito{
      border: 0;  
      background-color: transparent;
      border-radius: 20px;
      display: flex;
       .img1{
        border: 2px solid white;
        background-color: red; 
        //align-items: center;
        margin: 15px;
        margin-right: 5px;
        margin-bottom: 5px;
        //margin-left: 20px;
        width: 50%;
        //object-fit: cover;
        img{
          margin-left: 6vw;
          margin-top: 2vh; 
          margin-bottom: 2vh;
          height: 20vh;          
          width: 18vh;
          border-radius: 5px;
        }
      }    

      .img2{
        border: 2px solid white;
        background-color: yellowgreen; 
        //align-items: center;
        margin: 15px;
        margin-left: 5px;
        margin-bottom: 5px;
        //margin-left: 20px;
        width: 50%;
        //object-fit: cover;
        img{
          margin-left: 6vw;
          margin-top: 2vh; 
          margin-bottom: 2vh;
          height: 20vh;          
          width: 18vh;
          border-radius: 5px;
        }
      }
      .img3{
        border: 2px solid white;
        background-color: rgba(255, 255, 0, 0.788); 
        //align-items: center;
        margin: 15px;
        margin-right: 5px;
        //margin-left: 20px;
        width: 50%;
        //object-fit: cover;
        img{
          margin-left: 6vw;
          margin-top: 2vh; 
          margin-bottom: 2vh;
          height: 20vh;          
          width: 18vh;
          border-radius: 5px;
        }
      }
      .img4{
        border: 2px solid white;
        background-color: rgba(24, 105, 228, 0.788); 
        //align-items: center;
        margin: 15px;
        margin-left: 5px;
        //margin-left: 20px;
        width: 50%;
        //object-fit: cover;
        img{
          margin-left: 6vw;
          margin-top: 2vh; 
          margin-bottom: 2vh;
          height: 20vh;          
          width: 18vh;
          border-radius: 5px;
        }
      }
      

      

    }
    .title3{
      text-align: center;
      margin-left: 10px;
      font-weight: 450;
      font-size: 120%;
      color: black;
    }
        .textito{
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
  }
</style>
