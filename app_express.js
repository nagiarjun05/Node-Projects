const express=require('express');

const app=express();

app.use((req, res, next)=>{
    console.log('In the Middleware!');
    next(); // Allow the request to continue to the next middleware in line
});

app.use((req, res,next)=>{
    console.log('In the another Middelware!');
    res.send('<h1>Hello from Express.js</h1>');
})

app.listen(4000);