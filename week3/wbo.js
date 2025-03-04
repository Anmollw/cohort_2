const express = require("express");
const zod = require("zod");
const schema = zod.array(zod.literal(1).or(zod.literal(2)));

const app = express();

app.use(express.json());

app.post("/health-checkup",(req,res)=>{
    //do smthing wid kidney
    const kidneys= req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({
            msg : "Invalid Input"
        })
    }
    else{
        res.send({
            response
        })
    }
    
})

app.listen(3000)

