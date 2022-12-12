

import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
// import { json } from "node:stream/consumers";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method == 'GET'){
        const response = await axios.get("https://graph.facebook.com/v15.0/111114835172863?fields=feed.limit(1)%7Blikes%7D&access_token=EAALZALdJy4pQBAHVhbOytq6JKMkobeK70MI8sGMeZBcwiPFjHMnq8QVOZB17gDi1Iid0OZCrZAwsEvKL0TWZAU4lZC8iFSHVvBImkUbInKZAmfiwepuODByTE4NNUHCZCwkZAtGar3DEKDmNSEK3ZBzH8M3XJpZBQIPpkR5SCHBvQIhNR0rQt3PZAnAJ5gXOx1zrzbdURnT7ueFMGKQZDZD")
        res.send({
            likes:response.data
        })
    }
}