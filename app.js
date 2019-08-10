const express = require("express"),
     app=express(),
     bodyParser=require("body-parser");
    

// //routing
const indexRoutes = require("./routes/index.js"),
      authRoutes = require("./routes/auth");

// //connection
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

//use route
app.use(indexRoutes);
app.use(authRoutes);

//listining to port 3000
app.listen("3000", () =>{
  console.log("Ready to deliver!")
});

//to start the server write npm start on your terminal and write http://localhost:3000/ on your browser
//and to stop the server ctrl+c


//FOR FRONTEND GUYS
// 1)  your files will be inside views folder
// 2)  in partials you will keep nav bar in Headers.ejs and footer in footer.ejs for dynammic templating
// 3)  to make header.ejs and footer.ejs to work on every other file see home.ejs page to see how to  include file 
// 4)  your css and js file will be inside public folder
// 5)  since this is a team and big project always comment what you are doing so that you can quickly refer in future