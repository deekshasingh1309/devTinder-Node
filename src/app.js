const express= require("express");
//create express js application or web server using express function
const app=express();


//to handle to code 
//request handler function
app.use("/text",(req,res)=>{
    //respond to the server
    res.send("In the text server "); //based on route  
});

//handling based on routes
/* Order of routes matters a lot --- otherwise routes won't work properly gives the first match reponse- It checks from top*/
app.use("/hello/1",(req,res)=>{
    //respond to the server
    res.send("Hello 1 1 1 ..");
});

app.use("/hello",(req,res)=>{
    //respond to the server
    res.send("Hello hello ..");
});

app.use("/world",(req,res)=>{
    res.send("World server");
});

//to handle get http method API call
// app.get("/user",(req,res)=>{
//     res.send({firstName:"Deeksha",lastName:"Singh"});
// });

app.post("/user",(req,res)=>{
    //write logic to save data to DB
    res.send("Data saved successfully in DB");
});

app.delete("/user",(req,res)=>{
    //data delete logic
    res.send("Data deleted successfully from DB");
});

//work as expected
// app.get("/abc",(req,res)=>{
//     res.send({firstName:"Deeksha",lastName:"Singh"});
// });

//b is optional over here -> /ac or /abc will work
// app.get("/ab?c",(req,res)=>{
//     res.send({firstName:"Deeksha",lastName:"Singh"});
// });

// regrex pattern should be followed -> /abbbc or /abbbbbbbc will work
// app.get("/ab+c",(req,res)=>{
//     res.send({firstName:"Deeksha",lastName:"Singh"});
// });

// start with ab and end with cd -> /abcd or /ab123cd will work
// app.get("/ab*cd",(req,res)=>{
//     res.send({firstName:"Deeksha",lastName:"Singh"});
// });

// grouping together -> /ad or /abcd will work
// app.get("/a(bc)?d",(req,res)=>{
//     res.send({firstName:"Deeksha",lastName:"Singh"});
// });
// grouping together -> /abcd or /abcbcd will work
// app.get("/a(bc)+d",(req,res)=>{
//     res.send({firstName:"Deeksha",lastName:"Singh"});
// });

// remove ""  and add regrex pattern -> /a or /ab or /abc will work
// app.get(/a/,(req,res)=>{
// res.send({firstName:"Deeksha",lastName:"Singh"});
// });

// start with anything and end with fly -> /fly or /anythingfly will work
// app.get(/.*fly$/,(req,res)=>{
// res.send({firstName:"Deeksha",lastName:"Singh"});
// });

// to read from dynamic URL ->user?userID=1 or user?userID=1&name=dee will work
// app.get("/user",(req,res)=>{
//     console.log(req.query);
// res.send({firstName:"Deeksha",lastName:"Singh"});
// });

//to make the route dynamic -> user/1 or user/1?name=dee will work
app.get("/user/:userId",(req,res)=>{
//to read the dynamic URL with :
console.log(req.params);
res.send({firstName:"Deeksha",lastName:"Singh"});
});


app.use("/",(req,res)=>{
    //respond to the server
    res.send("In the main page"); //whatever request is coming we are sending the same response if route is not passed  
});
//server is listening on port no 3000
app.listen(7777,()=>{
    console.log("Server is running on port 7777");
})
