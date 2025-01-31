const express= require("express");
//create express js application or web server using express function
const app=express();


//to handle to code 
//request handler function
// app.use("/",(req,res)=>{
//     //respond to the server
//     res.send("In the main page"); //whatever request is coming we are sending the same response if route is not passed  
// })

app.use("/text",(req,res)=>{
    //respond to the server
    res.send("In the text server "); //based on route  
});
//handling based on routes
app.use("/hello",(req,res)=>{
    //respond to the server
    res.send("Hello hello ..");
});

app.use("/world",(req,res)=>{
    //respond to the server
    res.send("World server");
});
//server is listening on port no 3000
app.listen(7777,()=>{
    console.log("Server is running on port 7777");
})
