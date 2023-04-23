const express= require('express')
const app=express()
const http= require('http')
const socketio=require('socket.io')
const port=process.env.PORT || 8081

const path=require('path')
const Sockets=require('./sokets')

class Server{
    constructor(){
        this.app=express();
        this.port= port
        


        //http server
this.server=http.createServer(this.app)


        //configuraciones de sockts
        this.io=socketio(this.server,{})
        
    }

consfigurarSockets(){
new Sockets(this.io)
}

    middlewares(){
       this.app.use(express.static(path.resolve(__dirname,'../public')  ))
    }
    execute(){

//inicializar middlewares

this.middlewares()

//inicializar sockets
this.consfigurarSockets()

        this.server.listen(this.port,()=>{
            console.log('server corriendo',this.port)
        });
    }
}



module.exports=Server