

import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
// import { json } from "node:stream/consumers";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    // const {username,password,switch_url} = req.body
      try{
        const send = await axios.post("https://192.0.2.1/login.html",{
          body:new  URLSearchParams("username=marca&password=2011200&buttonClicked=4")
      },{
        timeout:1000*40,
        headers:{
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      })
      console.log('sending succesful')
      console.log(send.status)
      //  if(sendRequest.status == 200){
        res.status(200).json({
          ok:send.data
        })
        // }else{
          // res.status(500)
          // }
        }catch(err ){
          console.log(err)
        }
}