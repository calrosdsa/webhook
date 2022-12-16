

import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
// import { json } from "node:stream/consumers";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    const {username,password,continue_url,login_url} = req.body
    if(req.method == 'POST'){
      const sendRequest = await axios.post(login_url,{username,password,continue_url},{timeout:55000}
        // ,{headers:{
        //          "Access-Control-Allow-Origin": "*",
        //         " Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        //          "Access-Control-Allow-Headers":"Content-Type, Authorization, X-Requested-With",
        // }}
      )
      console.log(sendRequest)
          //  if(sendRequest.status == 200){
             res.status(200)
            // }else{
              // res.status(500)
            // }
    }
}