const { request, response } = require("express");
const express = require("express");
const redis = require("redis");
const keys = require("./keys");


const port = 3030;

const app = express();

let client = redis.createClient({

    host:keys.redisHost,
    port:keys.redisPort
});

app.get("/",(request,response)=>{

    console.log(`Process ID is ${process.pid}`);
    let num = request.query.number;
    if(num % 2 ===0){
        client.publish("math-subscription1",num);
    
    }else{
        client.publish("math-subscription2",num);
    }

    response.send("<h2>We are calculating ...</h2>");
});

app.listen(port,()=>console.log("The server is running"));