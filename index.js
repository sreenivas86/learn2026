const express=require('express')

const app= express();
app.get("/",(req,res)=> {
    res.send(`<h1 color= 'red'> Hello welcome to  express js</h1> <br> <h5> text here </h5>`)
})

const PORT=5000
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})

