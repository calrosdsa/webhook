

import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import { json } from "stream/consumers";
// import { json } from "node:stream/consumers";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method == 'POST'){
        const shell = require('shelljs')
        // console.log('render')
        //  if(req.body.pusher.name =="calrosdsa"){
            shell.exec("git init")
            shell.exec("git add .")
            shell.exec("git commit -m 'changes'")
            shell.exec("git push -u origin main")

    //  }
        res.status(200).json({
            ok:"200"
        })
    }
}