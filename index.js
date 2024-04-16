const express = require('express');
const app = express();
app.get('/ok', (req,res)=>{
    res.send('done with creating the server')
})
app.get('/info', (req,res)=>{
    res.send('visited the /info')
})
app.get('/hi', (req,res)=>{
    res.send('visited the /hi')
})
app.listen(3000, ()=>{
    console.log('listening to port * 3000');
})