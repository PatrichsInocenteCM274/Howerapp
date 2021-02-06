<template>
<div class="chatBox">
    <div class="title2">
       <img class="fadeIn first" src="@/assets/tit1.png" id="icon" alt="User Icon" />
      </div>
  <section class="chat-box fadeIn first">
    <div class="chat-box-list-container" ref="chatbox">
        <br>
      <ul class="chat-box-list">
          
        <li 
          v-for="(message, idx) in messages"
          :key="idx"
          :class="message.author"
        > 
          
          <p>
            
            <span>{{ message.text }}</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="chat-inputs">
      <b-form-input id="chat" type="text" :class="visiontext"  v-model="form.tarea" @keyup.enter="sendMessage"/>
      <select :class="visionselect" aria-label="Default select example" v-model="form.categoria">
          <option value="Salud">Salud</option>
          <option value="Educación">Educación</option>
          <option value="Deporte">Deporte</option>
          <option value="Trabajo">Trabajo</option>
          <option value="Comida">Comida</option>
          <option value="Hogar">Hogar</option>
          <option value="viajes">Viajes</option>
          <option value="Diversión">Diversion</option>
          <option value="Otro">Otro</option>
    </select>
      <b-form-input v-model="form.fecha" :class="visionfecha" id="calendario" type="date"></b-form-input>
      <b-form-input  v-model="form.hora" :class="visionhora" id="hora" type="time"></b-form-input>
      <button  :class="visionestodo" @click="termino">Es todo</button>
      <button  :class="visionhaymas" @click="sendMessage">Hay mas</button>
      <button :class="visionsend" @click="sendMessage">Enviar</button>
    </div>
  </section>
</div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.$cookies.config('7d')
//import axios from 'axios';
export default {
  name: 'ChatBox',
  //element = chatbox.getElementById("chat"),
  data: () => ({
        form:{
                    tarea: "",
                    fecha: "",
                    hora: "",
                    categoria: ""
                },
    
    animacion: 'message fadeIn second',
    visiontext: 'seve',
    visionselect: 'noseve',
    visionfecha: 'noseve',
    visionhora: 'noseve',
    visionestodo: 'noseve',
    visionhaymas: 'noseve',
    visionsend: 'seve',
    nombre: '',
    apellido: '',
    messages: []
      
  }),
  created(){
    this.iniciar();
  },
  methods: {
    iniciar(){
      
      console.log("hola ya empeze")
      axios.get('https://howerapp.herokuapp.com/getusers?usr=' + Vue.$cookies.get("usuario"))
      .then(res => {
         //console.log(res.data[0].nombre)
           this.nombre=res.data[0].nombre
           this.apellido=res.data[0].apellido
           console.log(this.nombre)
           this.messages.push({
            text: "Hola, " + this.nombre + " "+ this.apellido+ ". Bienvenid@! ",
            author: 'server fadeIn third'
        })
                   this.messages.push({
            text: "Soy Hower y seré tu asistente virtual. Juntos haremos que tus tareas sean más fáciles. ¡Empecemos!",
            author: 'server fadeIn third'
        })
                   this.messages.push({
            text: "¿Cual es la primera tarea que tienes en mente?",
            author: 'server fadeIn third'
        })
      })
      

    },
    termino(){
      this.$router.push('/clasifica');  
    },
    sendMessage() {
      console.log(Vue.$cookies.get("usuario"));
      console.log(this.usuario);
      this.animacion= 'message fadeIn first';        
      if(this.visiontext=='seve'){
      
      this.messages.push({
        text: this.form.tarea,
        author: 'client'
      })
      }
      if(this.visionfecha=='seve'){
      
      this.messages.push({
        text: this.form.fecha,
        author: 'client'
      })
      }
      if(this.visionhora=='seve'){
      
      this.messages.push({
        text: this.form.hora,
        author: 'client'
      })
      }
      if(this.visionselect=='select seve'){
      
      this.messages.push({
        text: this.form.categoria,
        author: 'client'
      })
      
      }
      this.$nextTick(() => {
          this.$refs.chatbox.scrollTop = this.$refs.chatbox.scrollHeight
        })

      this.message = '';
      axios.get('https://howerapp.herokuapp.com/getusers?usr=' + Vue.$cookies.get("usuario"))
      .then(res => {
         //console.log(res.data[0].nombre)
           console.log(res.data[0].nombre)
           console.log(res.data[0].apellido)
         if(this.visiontext=='seve'){
            this.messages.push({
            //text: res.data.msg,
            text: this.nombre + " elige una categoría para esta tarea",
            author: 'server fadeIn third'
          })
            this.visiontext='noseve';
            this.visionselect= 'select seve';
            
         }else{
         if(this.visionselect=='select seve'){
            this.messages.push({
            //text: res.data.msg,
            text: this.nombre + " eso se ve emocionante! ¿Hasta qué día tenemos plazo para realizarla?",
            author: 'server fadeIn third'
        })
            this.visionselect='noseve';
            this.visionfecha= 'seve';
        }
        else{
        if(this.visionfecha=='seve'){
               this.messages.push({
            //text: res.data.msg,
            text: "Urra! ya me hago la idea!",
            author:  'server fadeIn third'
             
        })
        this.messages.push({
            //text: res.data.msg,
            text: "Solo falta que me digas la hora.",
            author:  'server fadeIn third'
        })
            this.visiontext='noseve';
            this.visionfecha= 'noseve';
            this.visionhora='seve';
        }else{
        if(this.visionhora=='seve'){
            
            axios.post("http://howerapp.herokuapp.com/addtask","username="+Vue.$cookies.get("usuario")+"&task="+this.form.tarea+"&fecha="+this.form.fecha+"&hora="+this.form.hora+"&categoria="+this.form.categoria)
            .then(data =>{
            console.log("username="+Vue.$cookies.get("usuario")+"&task="+this.form.tarea+"&fecha="+this.form.fecha+"&hora="+this.form.hora+"&categoria="+this.form.categoria)
            console.log(data);
            if(data.data.msg == "Tarea Agregada"){
                
                 console.log("Tarea_agregada");
                 this.form.fecha="";
                 this.form.tarea="";
                 this.form.hora="";
                 this.form.categoria="";
                 this.messages.push({
                 //text: res.data.msg,
                 text: "Tu tarea se agrego correctamente. Me encanta que pueda ayudarte, tienes otra tarea en mente?",
                 author: 'server fadeIn third'
                 })  
                 this.$nextTick(() => {
                  this.$refs.chatbox.scrollTop = this.$refs.chatbox.scrollHeight
                  })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
            }else{
                this.form.mensaje="Ya existe Tarea! no se agrego";
                console.log("Tarea_no_agregada");
                this.form.fecha="";
                this.form.tarea="";
                this.form.hora="";
                this.form.categoria="";
                 this.messages.push({
                 //text: res.data.msg,
                 text: "Esta tarea ya existe, no te preocupes no es necesario volverla a agregar, tienes otra tarea en mente?",
                 author: 'server fadeIn third'
                 })  
                 this.$nextTick(() => {
                  this.$refs.chatbox.scrollTop = this.$refs.chatbox.scrollHeight
                  })
            }
            
            })
            this.visionhora='noseve';
            this.visionsend='noseve';
            this.visionestodo='seve fadeIn fourth';
            this.visionhaymas='seve fadeIn fourth';
        }else{
        this.messages.push({
            //text: res.data.msg,
            text: "¿Que otra tarea debes hacer?",
            author: 'server fadeIn third'
        })  
            this.visionestodo='noseve';
            this.visionhaymas='noseve';
            this.visiontext='seve';
            this.visionsend='seve';
      }
        }
        }
        
        
        console.log(this.messages);
        this.$nextTick(() => {
          this.$refs.chatbox.scrollTop = this.$refs.chatbox.scrollHeight
        })
      }})
             
    }
  }
}
</script>

<style lang="less">

.chatBox{
    padding: 2px;
    top:0;
    background-image: url(https://i.pinimg.com/originals/92/99/27/9299275c663db170fbe7ef15b26bd418.jpg);
    width:100vw;
    height: 90vh;
.noseve{
    display: none;
}
.seve{
    display: ruby;
}
.chat-box,
.chat-box-list {
  
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  list-style-type: none;
}
.chat-box-list-container {
  background-color: transparent;
  overflow: scroll;
  margin-bottom: 1px;
}
.chat-box-list {
   background-color: transparent;
  padding-left: 10px;
  padding-right: 10px;
  span {
    margin: 0px;
    padding: 4px;
    color: white;
    //border-radius: 4px;
  }
  .server {
    span {
      display: flex;
      border-bottom-left-radius: 10px ;
      border-bottom-right-radius: 10px ;
      border-top-right-radius: 10px ;
      background: #99cc00;
    }
    p {
      float: left;
    }
  }
  .client {
    span {
      border-bottom-left-radius: 10px ;
      border-bottom-right-radius: 10px ;
      border-top-left-radius: 10px ;
      background: #0070C8;
    }
    p {
      float: right;
    }
  }
}
.chat-box {
  width: 90vw;
  height: 75vh;
  border: 1px solid #999;
  border-radius: 4px;
  margin: 20px;
  align-items: space-between;
  justify-content: space-between;
}
.chat-inputs {
  display: flex;
  border: 0.5px solid gray;
  height: 60px;
  align-items: center;
  select{
    width: 100%;
    height: 70%;
    border-radius: 20px;
    background-color: white;
    opacity: 70%;
  }
  input {
      margin: 5px;
    line-height: 2;
    width: 100%;
    border: 1px solid #999;
    border-radius: 4px;
    height: 40px;
    
  }
  button {
    width: 160px;
    height: 40px;
    color: white;
    background: #0070C8;
    border-color: #999;
    border-bottom: none;
    border-right:none;
    border-radius: 10px;
    margin-right: 5px;
  }
}
    .title2{
      text-align: center;
      margin-left: 20px;
      font-weight: 450;
      font-size: 150%;
      color: white;
    }
}
</style>