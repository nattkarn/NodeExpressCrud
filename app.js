// ===> express
import express from "express";
import AppRouter from "./src/app.route.js";
import AppMiddleWare from "./src/app.middleware.js";

const app = express();

const ascii = `
--------------------------------------------
  _____                                    
 | ____|_  ___ __  _ __ ___  ___ ___      
 |  _| \\ \\/ / '_ \\| '__/ _ \\/ __/ __| 
 | |___ >  <| |_) | | |  __/\\__ \\__ \\  
 |_____/_/\\_\\ .__/|_|  \\___||___/___/  
            |_|                           
--------------------------------------------        
`
app.use(AppRouter)
app.use(AppMiddleWare)


const PORT = 3000;
app.listen(PORT, () => {
  console.log(ascii);                     
  console.log(`server is running on http://localhost:${PORT}`);
  
});


