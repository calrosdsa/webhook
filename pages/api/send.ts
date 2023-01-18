

import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
// import { json } from "node:stream/consumers";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    // const {username,password,switch_url} = req.body
    if(req.method == 'GET'){
      const send = await axios.post("http://portal.teclumobility.com:8181/login.html",{
        body:new URLSearchParams("username=Carlos&password=12ab34cd")
      })
      console.log(send)
          //  if(sendRequest.status == 200){
             res.status(200).json({
              ok:"Pk"
             })
            // }else{
              // res.status(500)
            // }
    }
}