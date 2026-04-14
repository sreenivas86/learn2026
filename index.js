const express=require('express')
require('dotenv').config();

const app= express();
app.get("/",(req,res)=> {
    res.send(`<h1 color= 'red'> Hello welcome to  express js</h1> <br> <h5> text here </h5>`)
})

const PORT=5000
app.listen(PORT,'0.0.0.0' ,()=> {
    console.log(`Server is running on port ${PORT}`)
})

