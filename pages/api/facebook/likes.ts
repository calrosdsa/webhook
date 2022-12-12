

import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
// import { json } from "node:stream/consumers";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method == 'GET'){
        const response = await axios.get("https://graph.facebook.com/v15.0/111114835172863?fields=feed.limit(1)%7Blikes%7D&access_token=EAALZALdJy4pQBAGtmAKT1Mfm23mnZBdunesa07EI3yJmGv1rs0Q5m8OqzWMT0K7DD5cJgxEYyE64BDVLkh0NkEisesWthjHsxNkZBE94Uk1XDZBEFT9MnZAQVWdAtyQe2KF4wynO4uBlJyOTadrobMD03uPGMdL7CJYUVU12B4vS7dUXan0IZAY1x0n3kttqBK0ZAn7gFBe9aIChLZC8rGTzjjlZBs7YNQNcZD")
        res.send({
            likes:response.data
        })
    }
}