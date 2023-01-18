

import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
// import { json } from "node:stream/consumers";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    // const {username,password,switch_url} = req.body
    if(req.method == 'GET'){
      fetch ("http://192.0.2.1/login.html",{
        method:'POST',
        mode: "no-cors",
        body:new URLSearchParams("username=marca&password=211120&buttonClicked=4")
      }).then(res=>{
        console.log(res)
        return res
      }).then(res=>{
        console.log(res)
      })
          //  if(sendRequest.status == 200){
             res.status(200).json({
              ok:"okk"
             })
            // }else{
              // res.status(500)
            // }
    }
}