<template>
    <div class=segundocuadrante>
        <div class="title3">
       <img class="fadeIn first" src="@/assets/tit7.png" id="icon" alt="User Icon" />
      </div>
      <div class="textito fadeIn second">
       <b>{{nombre}} Las tareas de este cuadrante son No Urgentes e Importantes, por lo que siempre busca planificarlas y que no lleguen a pasar al Primer Cuadrante.</b>
      </div>
    <div class="header">
            
            
          <div class="scroll-menu fadeIn fourth">

        <div class="scroll-content">
        <!--scroll  
                                            --> 
        
        <drag handle=".handle" v-for="(elemento0,idx) in gettask_nodrag" :key="elemento0" :class="vision_nodrag" :data="elemento0">                                                       
          <div class="avatar">
              <div class="top-products">
                  <div class="top-products-img">
                    
                    <img :src="imagenes(elemento0.categoria)" alt="">
                  </div>
                  <div class="top-products-text">
                     <b-button variant="outline-primary" class="mb-2" v-on:click="Planificar(idx)">
                      Planificalo
                      </b-button>
                      <div class="top-products-title">{{elemento0.task}}</div>
                      <div class="fecha">{{elemento0.fecha}}</div>
                      <div class="top-products-price">{{elemento0.hora}}</div>
                     
                  </div>
                  <div class="action ">
                          <b-icon icon="calendar4-range" aria-hidden="true"></b-icon>
                          <i id="icono1" v-on:click="arrastre()" class='bx bx-move'></i>
                          
                  </div>
                  
                  
              </div>
          </div>

         </drag>

       <drag  v-for="(elemento1,idx) in gettask_drag" :key="elemento1" :class="vision_drag" :data="elemento1" @cut="remove(idx)">                                                       
          <div class="avatar">
              <div class="top-products">
                  <div class="top-products-img">
                    <img :src="imagenes(elemento1.categoria)" alt="">
                  </div>
                  <div class="top-products-text">
                      <b-button variant="outline-primary " class="mb-2" v-on:click="Planificar(idx)">
                      Planificalo
                      </b-button>
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
                    <img width="100px" src="https://image.freepik.com/foto-gratis/foto-cabeza-hermosa-joven-asombrada-extiende-palmas-manos-siente-asombrado-mira-feliz-exclama-voz-alta-come-sabrosa-manzana-jugosa_273609-24380.jpg" alt="">
                  </div>
                  <div class="top-products-text">
                      <div class="top-products-title">No Tienes mas Tareas por Planificar</div>
                      <div class="fecha"></div>
                      <div class="top-products-price"></div>
                  </div>
                  <div class="action">
                          
                  </div>
                  
                  
              </div>
        </div>

        

        <!--scroll    termino                                            --> 
        </div>

              
          </div>
    

          <drop  @drop="onAnyDrop_si" mode="cut">
                <div class="combo-header fadeIn third">
                    <div class="title">
                    <h4> <b> Finaliza Tareas </b></h4>      
                    <p>Arrastralas aqui</p>
                    
                    </div>
                    <div class="img">
                    <img src="https://i.pinimg.com/originals/5a/cf/43/5acf43a51f1b0593570e65689ce35481.gif" alt="">
                    </div>

                </div>
                    
        </drop>
      <div class="boton fadeIn fourth">
          <b-button variant="danger" @click="volver">Volver</b-button>
      </div>
        <br>
        <br>

    </div>
    </div>
    

</template>

<script>
import { Drag, Drop } from "vue-easy-dnd";
import axios from 'axios';
import Vue from 'vue'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.$cookies.config('7d')
export default {
    name:"segundocuadrante",
    components: {
    //dragscroll,    
    Drag,
    Drop,
    },
    data:function(){
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
            gettask_nodrag: [],
            gettask_drag: [],
            fecha_planifica: "",
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
        iniciar(){
          axios.get('https://howerapp.herokuapp.com/getusers?usr=' + Vue.$cookies.get("usuario"))
          .then(res => {
           
              this.nombre=res.data[0].nombre;
          })
          axios.post("https://howerapp.herokuapp.com/gettask","username=" + Vue.$cookies.get("usuario")+"&clasificacion=2")
          .then(res => {
              this.gettask_nodrag=res.data;
              console.log(this.gettask_nodrag);
          })
                    axios.post("https://howerapp.herokuapp.com/gettask","username=" + Vue.$cookies.get("usuario")+"&clasificacion=2")
          .then(res1 => {
              this.gettask_drag=res1.data;
              console.log(this.gettask_drag);
          })
        },
        calcula_hora(valor_hora){
            var valor_convertido= valor_hora-0+5;
            
            if(valor_convertido<=24)
                return valor_convertido;
            else  
                valor_convertido=valor_convertido-24;
                valor_convertido="0"+valor_convertido;
                return valor_convertido

        },
        calcula_dia(dia,hora){
            var dia_calculo;
            if (hora<5){
                dia_calculo=dia-0+1;
                return "0"+dia_calculo;
            }
            else  
                return dia;
        },
        Planificar(idx){
            
          
            this.fecha_planifica=this.gettask_drag[idx].fecha.split('-')[0]+this.gettask_drag[idx].fecha.split('-')[1]+this.calcula_dia(this.gettask_drag[idx].fecha.split('-')[2],this.calcula_hora(this.gettask_drag[idx].hora.split(':')[0]))
            var hora=this.calcula_hora(this.gettask_drag[idx].hora.split(':')[0])+this.gettask_drag[idx].hora.split(':')[1];
             window.open('https://calendar.google.com/calendar/u/0/r/eventedit?/send/?&text='+this.gettask_drag[idx].task+'&dates='+this.fecha_planifica+'T'+hora+'00Z/'+this.fecha_planifica+'T'+hora+'00Z&details=Evento+Creado+desde+Howerapp', '_blank');
             console.log(this.fecha_planifica);
             console.log(hora);
             
        },
        volver(){
            
             this.$router.push('matriz');
        },
        onAnyDrop_si(event) {
        this.anyDropped_importante.push(event.data);
        //window.location.href = "https://api.whatsapp.com/send/?&text=Hola%2C%20estoy%20muy%20ocupado%2C%20podr%C3%ADas%20realizar%20la%20tarea%20SALIR%20A%20PASEAR%20AL%20PERRO%20por%20mi%2C%20es%20a%20las%204%3A00%20el%2024%20de%20febrero%2C%20Muchas%20gracias.%20&app_absent=0";
        
        },
        onAnyDrop_no(event) {
        this.anyDropped_noimportante.push(event.data);
        
        },
        remove(idx){
          console.log(idx)
          axios.post("https://howerapp.herokuapp.com/deltask","username=" + Vue.$cookies.get("usuario")+"&task="+this.gettask_drag[idx].task)
          .then(res => {
              console.log(res.data);
              this.iniciar();
          })
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
.segundocuadrante{
  background-image: url(https://i.pinimg.com/originals/e2/27/53/e22753cb935f390a3705dd40fe612475.png);
.noseve{
    display: none;
}
.seve{
    display: "";
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
    .boton{
        text-align: center;
    }
}
</style>