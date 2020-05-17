const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Hello World!');
});

app.get('/users', function(req, res){
    res.json({
        success: true,
        message: 'Successfully created get users api',
        user: ['User1', 'User2', 'User3']
    });
});

app.listen(3000, function(){
    console.log("Server is running");
});