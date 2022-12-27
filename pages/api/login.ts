

import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
// import { json } from "node:stream/consumers";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    // const {username,password,continue_url,login_url} = req.body
    if(req.method == 'GET'){
      const sendRequest = await axios.get('https://www.facebook.com/v15.0/dialog/oauth?client_id=801740780921492&redirect_uri=https://webhook-murex.vercel.app/&client_secret=b6a2b4c521b8675cd86fd800619c8203')

        // ,{headers:{
        //          "Access-Control-Allow-Origin": "*",
        //         " Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        //          "Access-Control-Allow-Headers":"Content-Type, Authorization, X-Requested-With",
        // }}
      console.log(sendRequest.data)
          //  if(sendRequest.status == 200){
             res.status(200).json({
              ok:"Pk"
             })
            // }else{
              // res.status(500)
            // }
    }
}