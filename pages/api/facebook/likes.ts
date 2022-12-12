

import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
// import { json } from "node:stream/consumers";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method == 'GET'){
        const response = await axios.get("https://graph.facebook.com/v15.0/111114835172863?fields=feed.limit(1)%7Blikes%7D&access_token=EAALZALdJy4pQBAFGZBtl8Mb17yUNPsCh6nrJdOYXZCmZAqyo89qS0pUZC85rPpFuLzlXt9UWEO7sAWCJHOs9hWXpnc0kZB1ljJHHR24q5CNMPyXq2bRaEukoJZBX3ClAbutUY1f7Y7ZBOWBtook0c76WWJ8VXVBchtYvbXY0MH1XAfZCBXSw5qXXUaSZAOsWNE58QZD")
        res.send({
            likes:response.data
        })
    }
}