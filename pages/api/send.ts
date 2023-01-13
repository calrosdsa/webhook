

import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
// import { json } from "node:stream/consumers";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    const {username,password,switch_url} = req.body
    if(req.method == 'POST'){
        const formData =new FormData()
        formData.append('username','marca')
        formData.append('password','201120')
      const sendRequest = await axios.post("http://192.0.2.1/login.html",formData
        // ,{headers:{
        //          "Access-Control-Allow-Origin": "*",
        //         " Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        //          "Access-Control-Allow-Headers":"Content-Type, Authorization, X-Requested-With",
        // }}
      )
      console.log(sendRequest)
          //  if(sendRequest.status == 200){
             res.status(200).json({
              ok:"Pk"
             })
            // }else{
              // res.status(500)
            // }
    }
}