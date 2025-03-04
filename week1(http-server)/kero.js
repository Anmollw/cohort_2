const express = require("express")
const port = 
const app = express();

function calculateSum(n){
    let ans = 0;
    for (let i=1; i<=n ; i++){
        ans+=i;
    }
    return ans
}

app.get('/',function(req,res){
    const n = req.query.n;
    const ans = calculateSum(n)
    res.send(ans.toString());
})

app.listen(port,function(){
    console.log(`beginning server from ${port}`)
})