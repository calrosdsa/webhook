import axios from 'axios'
import LoginButton from "./LoginButton";
import Image from "next/image";
import queryString from "query-string";

import { useEffect, useState } from 'react';
const LandingPage = () =>{
    const user = "marca"
    const password  = "201120"
  //   const sendToRadius = async() =>{
  //       const send = await axios.post(url,{user,password})
  //     console.log(send)
  //   }



    const sendToRadius2 = async() =>{
      const input = document.createElement('input')
      input.value = 'https://graph.facebook.com/v15.0/111114835172863?fields=feed.limit(1)%7Blikes%7D&access_token=EAALZALdJy4pQBAH5GwDjDHQVFKyJrLveyOddgSahE4JuEztIHKSma2ZAuRwlP2p6Kg7jZAfCbG5ZCybb3wQkI7IGkoLjKL2ZAsc77IRYZCYly4ZA5Ae6tguUHqJlLGMd4EDwegjj6PwVkslyMBvi341FwHylckqIpHT4DZAjztmCaBLgXtKVzf3BC6Us4nbClE1tiDgu6tYBLD6BIJkw1GCziZBURDXyfhJ4ZD'
      console.log(input.value)
      const button = document.createElement('button')
      button.addEventListener('click',async function handleClick(event){
        const send = await axios.get(input.value)
    console.log(send)
      })
      button.click()
    //   const send = await axios.get(url)
    // console.log(send)
  }

  
  useEffect(()=>{
    // fetchLikes()
    console.log(queryString.parse(window.location.search))
    // console.log({user,password})

  },[])
   


    return(
        <div className=' absolute w-11/12 sm:w-2/3 lg:w-1/2 2xl:w-1/3 rounded-xl 
         -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 z-20 bg-white'>
            <div className="grid grid-cols-1 items-center place-items-center py-3 xl:py-10 gap-y-10 2xl:gap-y-20">      
        <Image 
      src='/images/logo.png'
      width={210}
      height={100}
      alt="logo ypfb"
      />
      <div className="grid grid-cols-1 items-center place-items-center px-10 gap-y-5">
      <h1 className="text-2xl font-bold text-center">Bienvenido al Portal Cautivo de YPFB</h1>
      <p className="p-4 border-2 border-b-gray-500 text-xs sm:text-sm md:text-base text-center"
      >Para acceder a la red debera iniciar sesion con su cuenta de facebook y posteriormente dar like a una publicacion de la 
        pagina oficial de YPFB 
      </p>
      </div>

        <div className="grid grid-cols-1 items-center place-items-center gap-y-1">
       <LoginButton/>
       <a href="https://www.freeprivacypolicy.com/live/83964b85-328e-46c5-a236-33e4fd63a5a6" 
    //    target="_blank"
        className=" underline text-facebook cursor-pointer font-medium">Politicas de Privacidad</a>
        </div>
   
        {/* <input type="text" value={url} onChange={(e)=>setUrl(e.target.value)}
          className="w-full"/> */}

     {/* <div className='flex '>
      <button onClick={sendToRadius2}>
        Send to Radius2
      </button>
     </div>
      <form action='/' method='POOST'>
          <input type="text" name='user' placeholder='Username' />
          <input type="password" name="password" placeholder='Passwrod'/>
          <input type="submit" value="Login"/>
      </form> */}
      </div>
         </div>
    )
}

export default LandingPage;


//https://securelogin.arubanetworks.com/swarm.cgi?opcode=cp_generate&orig_url=68747470733a2f2f7777772e677374617469632e636f6d2f67656e65726174655f323034


//https://securelogin.arubanetworks.com/swarm.cgi
