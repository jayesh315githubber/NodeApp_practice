var express = require('express')
var app = express()
var path = require('path')
var fs = require('fs')


app.use(express.static(path.join(__dirname,'public')))

app.get('/',(require,response)=>{
    response.send(path.join(__dirname+'/index.html'))
})

app.listen(4000,'0.0.0.0', ()=>{
    console.log('server started on port')
}) 