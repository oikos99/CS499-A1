/**
 * Created by Paul on 1/21/2017.
 */
var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.sendfile('index.html')
})

app.get('/test', function(req, res) {
    res.send('TEST!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000')
})