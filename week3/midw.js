const express = require("express")

const app = express();

app.get("/health/checkup", (req,res) =>{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyID = req.query.kidneyID;

    if (!(username === "Anmol" && password === "Pass")){
        res.status(400).json({Ermsg : "Something is up with your goddamn input"})
        return
    }
    
    if (kidneyID!=1 && kidneyID !=2){
        res.status(400).json({Ermsg : "Something is up with your goddmn input"})
        return
    }

    res.json({msg : "Your damn kidney is just fine "})
})

app.listen(3002);