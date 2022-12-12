

import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
// import { json } from "node:stream/consumers";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method == 'GET'){
      const urlFacebook = await axios.get('https://e20f-200-87-209-44.sa.ngrok.io/facebook/')
        res.send({
            url:urlFacebook.data
        })
    }
}