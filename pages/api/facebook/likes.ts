

import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
// import { json } from "node:stream/consumers";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method == 'GET'){
        const response = await axios.get("https://graph.facebook.com/v15.0/111114835172863?fields=feed.limit(1)%7Blikes%7D&access_token=EAALZALdJy4pQBAHgcfHug3074a4CjGLCFy0b6tlTvoLZCkRZAiGMtFZAeSAIMbZCyYhvjOkrNTTOSnnaBlFBIeuoyuXz2aCtJ2ZBqsRuEMPZBedyXWkhwsNJRi7Snj4AUsPbqMzEOTVnboZBBJ9WayuTQecIMu6KgOqRRjKAcuCZAOYZAWLFcZBUBLbPMlC7Cpinh2ieQETB6o2ZBZAiFR0Id48oeR9NyxQwH6YoZD")
        res.send({
            likes:response.data
        })
    }
}