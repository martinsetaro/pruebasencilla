import { Router } from "express";

const route = Router();



route.get("/", (req,res)=>{

    res.json([{
        name:"Jose",
        lastname:"Perez",
        year:22,
        city:"La Capital"
  
    }])
})

export default route;