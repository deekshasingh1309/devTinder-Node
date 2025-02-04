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
// app.get("/user/:userId",(req,res)=>{
//to read the dynamic URL with :
// console.log(req.params);
// res.send({firstName:"Deeksha",lastName:"Singh"});
// });

// handling multiple route handlers on same url , it will give the response of the 1st handler and won't go to the 2nd handler
// app.get("/user",
//     (req,res)=>{
//     console.log("first handler");    
//     res.send("Response 1");
// },
// (req,res)=>{
//     console.log("second handler");    
//     res.send("Response 2");
// });

//comment 1st response and check -> it will console 1st handlers and go hang and won't give any response
// app.get("/user",
//     (req,res)=>{
//     console.log("first handler");    
//     // res.send("Response 1");
// },
// (req,res)=>{
//     console.log("second handler");    
//     res.send("Response 2");
// });

//how to send to 2nd handler response ->using next from express js -> it will give the response of the 2nd handler
// app.get("/user",
//     (req,res,next)=>{
//     console.log("first handler");    
//     next();
// },
// (req,res)=>{
//     console.log("second handler");    
//     res.send("Response 2");
// });

//mutiple route handlers and next function -> it will give the response of the 2nd handler and give error for 1st response send when it will be executed after next() is done
// app.get("/user",
//     (req,res,next)=>{
//     console.log("first handler");    
//     next();
//     res.send("Response 1");
// },
// (req,res)=>{
//     console.log("second handler");    
//     res.send("Response 2");
// });


// many handlers and we will get response of 2nd handler and 3rd and 4th won't be executed and we give get error for 3rd response
// app.get("/user",
//     (req,res,next)=>{
//     console.log("first handler");    
//     next();
// },
// (req,res,next)=>{
//     console.log("second handler");    
//     res.send("Response 2");
//     next();
// },
// (req,res,next)=>{
//     console.log("third handler");    
//     res.send("Response 3");
// },
// (req,res,next)=>{
//     console.log("fourth handler");    
//     res.send("Response 4");
// },
// );


// many handlers and it will hang as no response is sent from any of handlers
app.get("/user",
    (req,res,next)=>{
    console.log("first handler");    
    next();
},
(req,res,next)=>{
    console.log("second handler");    
    // res.send("Response 2");
    next();
},
(req,res,next)=>{
    console.log("third handler");    
    // res.send("Response 3");
    next();
},
(req,res,next)=>{
    console.log("fourth handler");    
    // res.send("Response 4");
    next();
},
);

app.use("/",(req,res)=>{
    //respond to the server
    res.send("In the main page"); //whatever request is coming we are sending the same response if route is not passed  
});
//server is listening on port no 3000
app.listen(7777,()=>{
    console.log("Server is running on port 7777");
})
