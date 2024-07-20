const app = require('express')()
const cors = require('cors')
// const mong = require('mongoose')
const express = require('express')
const http = require('http').Server(app)


const port = 3000;

http.listen(port, function(){
    console.log('Server is running...!');
});



// mong.connect("mongodb+srv://uname:passcluster0.awk4cby.mongodb.net/lurn?retryWrites=true&w=majority"); 
app.use(cors({origin:'*', methods:['POST', 'GET'], credentials:true}))
app.use(express.json())

app.get('/', async(req, res)=>{
    console.log('HELLOO');
    res.send({'message':'What up homie !'})
})


