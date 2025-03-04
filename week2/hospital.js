const express = require("express");
const app = express();
const port = 8000



const users = [{
    name : "John",
    kidneys : [{
        healthy : false 
    }]
}]

app.use(express.json());

app.get('/',function(req,res){
    const johnKidneys= users[0].kidneys;
    const numberofKidneys= johnKidneys.length;
    let numberofHealthyKidneys=0
    for (let i=0; i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            numberofHealthyKidneys= numberofHealthyKidneys+ 1;
    
        }
    }
    const numberofUnhealthyKidneys= numberofKidneys - numberofHealthyKidneys
    res.json({
        numberofKidneys,
        numberofHealthyKidneys,
        numberofUnhealthyKidneys
    })


})

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg : "Done!"
    })    
})

app.put("/",function(req,res){
    if (ReturnSomeCode()){
        for (i=0; i<users[0].kidneys.length; i++){
            users[0].kidneys[i].healthy= true;
        }
        res.json({});
    }
    else{
        res.status(411).json({
            msg : "No bad kidneys present"
        })
    }
})


app.delete("/",function(req,res){
    if(ReturnSomeCode()){
        const newKidneys=[];
        for (i=0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys= newKidneys;
        res.json({});
    }
    else{
        res.status(411).json({
            msg : "No bad kidneys present"
        })
    }



})

function ReturnSomeCode(){
    let atleastoneUnhealthyKidney= false
    for(let i=0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastoneUnhealthyKidney=true;
        }
    }
    return atleastoneUnhealthyKidney
}

app.listen(port,function(){
    console.log(`beginning the server on ${port}`)
});

