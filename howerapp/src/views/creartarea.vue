
<template>
    <div class="creartarea">
        
            <div class="container">
                

                <form action="" class="form-horizontal">
                  
                    
                     <div class="date">
                              <b-row>
                                  <div class="title2"> <br>Ingrese una <b> Tarea</b> </div>
                                <input type="text" class="date" name="nombre" id="nombre" v-model="form.tarea">
                              </b-row>
                              <b-row>
                                <div class="title2"> <br>Ingrese <b>Fecha</b> </div>
                                <b-form-input v-model="form.fecha" class="date" id="calendario" type="date"></b-form-input>
                               </b-row> 
                               <b-row>
                             <div class="title2"> <br>Ingrese <b>Hora</b> </div>
                                <b-form-input  v-model="form.hora" class="date" id="hora" type="time"></b-form-input>
                               </b-row>
                              <div class="title2"> <br>{{form.mensaje}} </div> 
                    </div>      

                    <div class="botones">

                              <button type="button" class="btn btn-primary" v-on:click="guardar()" >Añadir Tarea</button>
                              <button type="button" class="btn btn-primary" v-on:click="nueva_pagina()" >Finalizar</button>
                    </div>

                    <div>
                      
                      
                    </div> 
                </form>


            </div>
        <!-- <Footer /> -->

    </div>
</template>
<script>

//import Footer from '@/components/Footer.vue'
import axios from 'axios';

export default {
    data(){
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      // 15th two months prior
      const minDate = new Date(today);
      minDate.setMonth(minDate.getMonth());
      // 15th in two months

        return {
                min: minDate,
            
                form:{
                    tarea: "",
                    fecha: "",
                    hora: ""
                }
        }
    },
    components:{
        
        //Footer
    },
    computed: {
      disabled() {
        return this.state === 'disabled'
      },
      readonly() {
        return this.state === 'readonly'
      }
    },
    methods:{
        onContext(ctx) {
        this.context = ctx
        },
        guardar(){
            this.form.token = localStorage.getItem("token");
            axios.post("http://howerapp.herokuapp.com/addtask","username=pepito@web.onion"+"&task="+this.form.tarea+"&fecha="+this.form.fecha)
            .then(data =>{
            console.log("username=pepito@web.onion"+"&task="+this.form.tarea+"&fecha="+this.form.fecha)
            console.log(data);
            
            if(data.data.msg == "Tarea Agregada"){
                this.form.mensaje="Tarea Agregada"; 
                 console.log("Tarea_agregada");
                 this.form.fecha="";
                 this.form.tarea="";
                 this.form.hora="";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
            }else{
                this.form.mensaje="Ya existe Tarea! no se agrego";
                console.log("Tarea_no_agregada");
                this.form.fecha="";
                this.form.tarea="";
                this.form.hora="";
            }
            })
        },
        nueva_pagina(){
            this.$router.push('clasifica');  
        },
        makeToast(titulo,texto,tipo) {
            this.toastCount++
            this.$bvToast.toast(texto, {
            title: titulo,
            variant: tipo,
            autoHideDelay: 5000,
            appendToast: true
            })
        }
        
    }
}
</script>
<style lang="less">

.creartarea{
    bottom: 0;
    margin: 0;
    width: 100%;
    background-image: url(https://images.unsplash.com/photo-1578852612716-854e527abf2e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRhc2slMjBib29rfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60);
}
.container{
    align-items: center;
    .form-control{
      width: 100%;
      background-color: rgb(250, 248, 248);
      border: 0px;
      outline: none;
      padding: 10px;
      padding-left: 30px;
      border-radius: 5px;
      text-align: center;
      border: 0.5px solid black;
    }
    .fecha{
      width: 100%;


    }
    .hora{
        margin-top: 0;
      padding: 30px;  
    }
    .botones{
        align-items: center;
        margin-top: 15px;
        margin-bottom: 0px;
    .btn{
        
        margin: 20px;
        margin-bottom: 150px;
    }
    }

    .date{
        .date{
        background-color: rgb(218, 218, 221);
        margin-left: 30px;
        margin-top: 15px;
        width: 80%;
        }
            .title2{
      
      margin-left: 30px;
      font-weight: 400;
      font-size: 120%;
      color: rgb(29, 124, 212);
    }
    }
}

.left{
    text-align:  left;
}

</style>