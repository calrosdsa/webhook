import LoginButton from "./LoginButton";
import Image from "next/image";
import queryString from "query-string";
import { useEffect,useState } from "react";

// import { useEffect, useState } from 'react';
interface Props{
  isAuthenticated:boolean
  isLoading:boolean,
  authLoading:boolean,
  isMobile:boolean
}
const LandingPage = ({isAuthenticated,isLoading,authLoading,isMobile}:Props) =>{
  const [loginUrl,setLoginUrl]= useState('')
  const [continueUrl,setContinueUrl]= useState('')

  
  useEffect(()=>{
      if(typeof window != 'undefined'){
        const queries = queryString.parse(location.search)
        setContinueUrl(queries.continue_url as string)
        setLoginUrl(queries.login_url as string)
        //  console.log(login_url)
      }

  },[])
 

    return(
        <div className={` absolute w-11/12 sm:w-2/3 lg:w-1/2 2xl:w-1/3 rounded-xl 
         -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 z-20 bg-white 
         ${isLoading && "filter brightness-50 "}`}>
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
       <LoginButton 
       continu2={continueUrl} 
       login={loginUrl}
       isAuthenticated={isAuthenticated}
       authLoading={authLoading}
       />
       {isAuthenticated ?
        <a href="https://www.facebook.com/103742875921865/posts/107517872211032" 
        target="_blank" rel="noreferrer" className=" underline text-facebook cursor-pointer font-medium">Ir al ultimo post</a>
       :
       <a href="https://www.freeprivacypolicy.com/live/83964b85-328e-46c5-a236-33e4fd63a5a6" 
       target="_blank" rel="noreferrer" className=" underline text-facebook cursor-pointer font-medium">Politicas de Privacidad</a>
      }
        </div>
        {isMobile  &&
        <div className='flex justify-around w-full'>
        <a  href={`intent://webhook-murex.vercel.app?login_url=${loginUrl}&continue_url=${continueUrl}#Intent;scheme=https;end`} 
          target="_blank" rel='noreferrer'>Open Browser</a>
        </div>
        }

        {/* <input type="text" value={url} onChange={(e)=>setUrl(e.target.value)}
          className="w-full"/> */}
  {/* <h1>dmskdaskdksa</h1> */}
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
