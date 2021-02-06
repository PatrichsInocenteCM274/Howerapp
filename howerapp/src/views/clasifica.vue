<template>
  <div class="clasifica2">
     
    <div class="header">
      <div class="logo">
        <img class="fadeIn first" src="@/assets/tit4.png" id="icon" alt="User Icon" />
      </div>
      <div class="textito fadeIn second">
       <b>{{nombre}}!, ya casi terminamos, solo falta que arrastres cada tarea hacia algun contenedor indicador de Importante o No Importante.</b>
      </div>
      <!--
      <div class="input">
      <input type="text" placeholder="Encuentra una tarea rapidamente">
      <div class="icon-input">
        <i class="bx bx-search"></i>
      </div>
      </div>-->
      <drop  @drop="onAnyDrop_si" mode="cut">
      <div class="combo-header fadeIn third">
        <div class="title">
          <h4> <b> Tareas Importantes </b></h4>      
          <p>Arrastralas aqui</p>
          
        </div>
        <div class="img">
          <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
        </div>

         </div>
         
      </drop>

      <drop  @drop="onAnyDrop_no" mode="cut">
      <div class="combo-header fadeIn third">
        <div class="title">
          <h4> <b> Tareas no Importantes </b></h4>   
          <p>Arrastralas aqui</p>

        </div>
        <div class="img">
          <img src="https://images.unsplash.com/photo-1516675457768-db513e191dcc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fG5vJTIwaW1wb3J0YW50fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
        </div>

         </div>
         
      </drop>

      <div class="title2 fadeIn fourth">
       Nuevas <b>Tareas!</b>
      </div>
      <div class="scroll-menu fadeIn fourth">

        <div class="scroll-content">
        <!--scroll  
                                            --> 
        
 <drag handle=".handle" v-for="(elemento0) in gettask_nodrag" :key="elemento0" :class="vision_nodrag" :data="elemento0">                                                       
          <div class="avatar">
              <div class="top-products">
                  <div class="top-products-img">
                    
                    <img :src="imagenes(elemento0.categoria)" alt="">
                  </div>
                  <div class="top-products-text">
                      <div class="top-products-title">{{elemento0.task}}</div>
                      <div class="fecha">{{elemento0.fecha}}</div>
                      <div class="top-products-price">{{elemento0.hora}}</div>
                      
                  </div>
                  <div class="action ">
                          <i id="icono1" v-on:click="arrastre()" class='bx bx-move'></i>
                           <b-tooltip  show target="icono1">Pulsa para activar/desactivar arrastre</b-tooltip>
                  </div>
                  
                  
              </div>
          </div>

         </drag>

       <drag  v-for="(elemento1,idx) in gettask_drag" :key="elemento1" :class="vision_drag" :data="elemento1" @cut="clasifica(idx)">                                                       
          <div class="avatar">
              <div class="top-products">
                  <div class="top-products-img">
                    <img :src="imagenes(elemento1.categoria)" alt="">
                  </div>
                  <div class="top-products-text">
                      <div class="top-products-title">{{elemento1.task}}</div>
                      <div class="fecha">{{elemento1.fecha}}</div>
                      <div class="top-products-price">{{elemento1.hora}}
                      </div>
                      
                  </div>
                  <div class="action">
                            <i id="icono2" v-on:click="arrastre()" class='bx bx-move'></i>
                          
                  </div>
                  
                  
              </div>
          </div>

         </drag>


                  <div class="avatar">
              <div class="top-products">
                  <div class="top-products-img">
                    <img width="100px" :src="imagen_final" alt="">
                  </div>
                  <div class="top-products-text">
                      <div class="top-products-title">{{carta_final}}</div>
                      <b-btn :class="btn_final" variant="primary" @click="finalizar()">Ver mi Matrix de Eisen-Hower</b-btn>
                      
                  </div>
                  <div class="action">
                          
                  </div>
                  
                  
              </div>
          </div>

        

        <!--scroll    termino                                            --> 
        </div>

              
      </div>
      
      <div class="title2">


<h6>© DsDs & Pat Design</h6>
      </div>
  </div>
  </div>
</template>
<script>
import { Drag, Drop } from "vue-easy-dnd";
import axios from 'axios';
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import moment from "moment";
Vue.use(VueCookies)
Vue.$cookies.config('7d')
export default {
    name:"tercercuadrante",
    components: {
    //dragscroll,    
    Drag,
    Drop,
    },
    data:function(){
        const now = new Date();
        const mes = now.getMonth() + 1;
        const today= now.getFullYear()+"-"+mes+"-"+now.getDate();
        
        return {
            imagenes: function(valor){
              if(valor=="Salud") return "https://images.unsplash.com/photo-1584516150909-c43483ee7932?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              if(valor=="Educación") return "https://images.unsplash.com/photo-1529007196863-d07650a3f0ea?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWR5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              if(valor=="Deporte") return "https://images.unsplash.com/photo-1562771379-eafdca7a02f8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHNwb3J0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              if(valor=="Trabajo") return "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHdvcmt8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
              if(valor=="Comida") return "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              if(valor=="Hogar") return "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              if(valor=="viajes") return "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGZyaWVuZHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              if(valor=="Diversión") return "https://images.unsplash.com/photo-1609800029525-b91fdea39774?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODN8fGNvbmNlcnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              if(valor=="Otro") return "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fG90aGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            imagen_final: "https://image.freepik.com/foto-gratis/foto-cabeza-hermosa-joven-asombrada-extiende-palmas-manos-siente-asombrado-mira-feliz-exclama-voz-alta-come-sabrosa-manzana-jugosa_273609-24380.jpg",
            carta_final: "No Tienes mas Tareas por ahora",
            btn_final: "noseve",
            longitud_tareas:"",
            fecha_hoy : today,
            clasificacion:"",
            gettask_nodrag: [],
            gettask_drag: [],
            vision_drag: "noseve drag",
            vision_nodrag: "seve drag",
            iterador: "1",
            nombre: "",
            nosemueve:"",
            muestra0: [0],
            card0: "",
            muestra1: [0],
            card1: "",
            muestra2: [0],
            card2: "",
            muestra3: [0],
            card3: "",
            muestra4: [0],
            card4: "",
            muestra5: [0],
            card5: "",
            anyDropped_importante: [],
            anyDropped_noimportante: [],
            form:{
                tarea0: "",fecha0: "",
                tarea1: "",fecha1: "",
                tarea2: "",fecha2: "",
                tarea3: "",fecha3: "",
                tarea4: "",fecha4: "",
                tarea5: "",fecha5: "",
                tarea6: "",fecha6: "",
                tarea7: "",fecha7: "",
            }
        }
    
    },
    created(){
    this.iniciar();
    },
    methods:{
        customFormatter(date) {
                return moment(date).format('D MMMM YYYY');
            },
        diferencia_dias(f1,f2)
        {
        var aFecha1 = f1.split('-');
        var aFecha2 = f2.split('-');
        var fFecha1 = Date.UTC(aFecha1[0],aFecha1[1]-1,aFecha1[2]);
        var fFecha2 = Date.UTC(aFecha2[0],aFecha2[1]-1,aFecha2[2]);
        var dif = fFecha2 - fFecha1;
        var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
        return dias;
        },
        iniciar(){
          axios.get('https://howerapp.herokuapp.com/getusers?usr=' + Vue.$cookies.get("usuario"))
          .then(res => {
           
              this.nombre=res.data[0].nombre;
              
          })
          axios.post("http://howerapp.herokuapp.com/gettask","username=" + Vue.$cookies.get("usuario")+"&clasificacion=nuevo")
          .then(res => {
              this.gettask_nodrag=res.data;
              this.longitud_tareas=res.data.length
              console.log(this.gettask_nodrag);
              console.log(this.longitud_tareas)
          })
          axios.post("http://howerapp.herokuapp.com/gettask","username=" + Vue.$cookies.get("usuario")+"&clasificacion=nuevo")
          .then(res1 => {
              this.gettask_drag=res1.data;
              console.log(this.gettask_drag);
          })
        },
        volver(){
            
             this.$router.push('matriz');
        },
        onAnyDrop_si(event) {
        this.anyDropped_importante.push(event.data);
        
        },
        onAnyDrop_no(event) {
        this.anyDropped_noimportante.push(event.data);
        
        },
        finalizar(){
          this.$router.push('matriz');
        },
        clasifica(idx){
        console.log("FECHA DE HOY:"+this.fecha_hoy)
        console.log(this.gettask_drag[idx].fecha)
        console.log(this.diferencia_dias(this.fecha_hoy,this.gettask_drag[idx].fecha)+" dias")
        var diferencia= this.diferencia_dias(this.fecha_hoy,this.gettask_drag[idx].fecha)
        if(this.anyDropped_importante[0]!=undefined) {
          this.anyDropped_importante.splice(0, 1);
          console.log("Importante")
          if(diferencia < 2){
              console.log("Urgente")
              this.clasificacion=1;
          }
          else{
              console.log("No Urgente")
              this.clasificacion=2;
          }
        }
        if(this.anyDropped_noimportante[0]!=undefined){
          
          console.log("No importante")
          this.anyDropped_noimportante.splice(0, 1);
          if(diferencia<2){
            console.log("Urgente")
            this.clasificacion=3;
          }
          else{
            console.log("No Urgente")
            this.clasificacion=4;
          }
        }
        axios.post("http://howerapp.herokuapp.com/clasificar","username=" + Vue.$cookies.get("usuario")+"&task="+this.gettask_drag[idx].task+"&clasificacion="+this.clasificacion)
          .then(res1 => {
              console.log(res1.data);
          })
          this.longitud_tareas--;
          console.log(this.longitud_tareas)
          this.gettask_drag.splice(idx, 1);
          this.gettask_nodrag.splice(idx, 1);
          if(this.longitud_tareas==0){
            //this.imagen_final= "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80";
            this.carta_final= "Ya hemos Organizado Tus Tareas!";
            this.btn_final= "seve";
          }
        },
        arrastre(){
          if(this.iterador=="1"){
          this.vision_drag="seve drag"
          this.vision_nodrag="noseve drag"       
          this.iterador="2";
          }
          else{
          this.vision_drag="noseve drag" 
          this.vision_nodrag="seve drag" 
          this.iterador="1";
          }
        },
    }
}
</script>

<style lang="less">


  .clasifica2{
      margin: 0;
    
   background-image: url(https://images.unsplash.com/photo-1580440174847-8eef6e5beb72?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzQ2fHxqb2J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60);
  .noseve{
    display: none;
    }
    .seve{
    display: ruby;
    }
  }
   .drag{
    
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: none;
    }

    .drop {
    margin: 20px 10px;
    height: 80px;
    border: 1px solid black;
    position: relative;
    }

    .drop::before {
    font-size: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    opacity: 0.2;
    white-space: nowrap;
    }






    .drop-forbidden {
    background-color: rgba(255, 0, 0, 0.2);
    }

    .drop-in {
    
    opacity: 70%;
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.4);
    }

    .list-enter,
    .list-leave-to {
    opacity: 0;
    }

    .list-leave-active {
    position: absolute;
    }
    .top-products{
      padding: 10px;

      .top-products-img{
        img{
          width: 100%;
        }
      }
      position:relative;
      i{
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 10px;
        background-color: green;
        color: white;
        border-radius: 50px;
        margin: 5px;
      }
      min-width: 150px;

      .top-products-text{
        text-align: center;
        margin-top: 10px;
        ;
        .fecha{
            color: blue;
        }
        .top-products-price{
           color: orangered;
        }
      }
    }
   
  
  .header{
    .scroll-menu{
      overflow-y: hidden; 
      overflow-x: auto;
      margin-left: 10px;
      margin-right: 10px;
      .img{
          align-content: center;
      }
       &::-webkit-scrollbar{
          display:none;
          height: 5px;
        }
      .scroll-content{
        display: flex;
        overflow-y: none;

        .avatar{
          border: 0.5px solid #5f5454;  
          margin: 5px;
          width: 100%;
          border-radius: 10px;
          background-color: rgb(187, 187, 187);
          opacity: 95%;
          padding: 10px;
          display: flex;
          i{
            color: white;
            bottom: 0;
          }

          
          img{
            border-radius: 5px;  
          }
        }

      }
    }
    .combo-header{
    border: 0.5px solid #5f5454;  
      background-color: rgb(187, 187, 187);;
      border-radius: 20px;
      display: flex;
      align-items: center;
      margin:10px;
      .img{
        align-items: center;
        img{
          margin: 5px;
          margin-left: 15px;
          width: 80%;
          border-radius: 5px;
        }
        margin-left: 20px;
        width: 50%;
        object-fit: cover;
      }

    }
    .input{
      display: flex;
      position: relative;
      margin-top: 10px;
      margin: 10px;
      align-items: center;
    input{
      width: 100%;
      background-color: rgb(250, 248, 248);
      border: 0px;
      outline: none;
      padding: 10px;
      padding-left: 30px;
      border-radius: 10px;
      text-align: left;
    }
    .icon-input{
      position: absolute;
      margin-left: 10px;
    }
    }
    .title{
      margin-top: 10px;
      width: 40%;
      margin-left: 20px;
      font-weight: 400;
      font-size: 110%;
      color: midnightblue;
    }

    .title2{
      
      margin-left: 20px;
      font-weight: 300;
      font-size: 120%;
      color: white;
    }
    .logo{
      
      text-align: center;
      img{
        width: 100vw;
        height: 10vh;
        
      }

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
