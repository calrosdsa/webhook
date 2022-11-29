import type { NextApiRequest, NextApiResponse } from "next";
// import axios from 'axios';
// import { json } from "node:stream/consumers";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
  try {
    // const data = {"id": "0684D0000004VgeTTE", "success": true, "errors": []}
    // const resApi = await fetch("https://graph.facebook.com/v14.0/108991665306423/messages ", {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer EAAIavJyZB1xMBADUIZAbEgcqRO9IUncQ0m4yXSxepyu7ofwxiW2wekxFMxkJMs0ArimCs5OGvhCVafTZB5iKDkGlMwLVolP7QwOLwt5XE4Gq5VQUkUrdvD6BZAjgQrnTsriJUVZAzevloO7c6uhtA6y174tZAmUJaELXwaJTP77ZAXNAHbmjpmgZBd8EZCNwjoLIwA17FZCBWaY917U0fWMZAi5'
    //   },
    //   body: `{
    //     "messaging_product": "whatsapp",
    //     "recipient_type": "individual",
    //     "to": "59175390560",
    //     "type": "text",
    //     "text": { 
    //       "preview_url": false,
    //       "body": "${req.body.entry[0].changes[0].value.messages[0].text.body}"
    //     }
    //              }`,
    //   });
      res.send(req.query['hub.challenge']);
      } catch (err) {
        console.log(err)
        res.status(500).send({ error: 'failed to fetch data' })
      }
}