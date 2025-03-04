const zod = require("zod");
function validateInput(obj){
    const schema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(5)
    })
    const response = schema.safeParse(obj)
    console.log(response)
}

app.post("/login",(req,res)=>{
    const response = validateInput(req.body)
    if(!response.success){
        res.json({
            msg : "Input invalid"
        })
        return;
    }
})
