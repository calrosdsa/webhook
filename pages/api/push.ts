

import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import { json } from "stream/consumers";
// import { json } from "node:stream/consumers";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method == 'POST'){
     console.log(req)
        res.status(200).json({
            ok:"200"
        })
    }
}