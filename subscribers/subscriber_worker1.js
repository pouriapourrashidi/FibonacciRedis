const redis = require("redis");

const keys = require("../keys");
const fiboObj = require("../math_logic/fibonachi");

let subscriber = redis.createClient({
    host:keys.redisHost,
    port:keys.redisPort
});

subscriber.subscribe("math-subscription1");

subscriber.on("message",(channel,message)=>{
    let seriValue = fiboObj.calculateFibonachiValue(Number.parseInt(message));
    console.log(`The result of fibonacci is: ${seriValue}`);
});
