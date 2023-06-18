import { Router } from "express";

const route = Router();



route.get("/destinos",(req,res)=>{
    res.json([
        {
        id:1,
        site:"Bahia azul",
        country:"Brasil"
        },
        {
            id:2,
            site:"Patagonia",
            country:"Argentina"
            },
            {
                id:3,
                site:"Machu Pichu",
                country:"Perú"
                },
])
})

export default route;