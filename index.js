const express = require('express')

const fs = require('fs')
var data = fs.readFileSync('kinfe.json')
var result = JSON.parse(data)
const app  = express()
const PORT = 5000 || process.env.PORT
app.listen((PORT ) , ()=>{
    console.log("Server started at the PORT " , PORT )
})
app.use(express.static('public'));
app.get("/" , (req , res)=>{
    res.send("Welcome to the result API...You can explore the student result at /results page")
})
app.get('/results' , (req , res)=>{
    res.send(result)
    console.log(result)

})
app.get('/results/:result/' , (req , res)=>{
    
    let id = req.params.result
    let idformat = id.toString()
    result.map((resu)=>{
        if(idformat == resu.id){
            res.send(resu)
           
            
        }
        
    })
} )
