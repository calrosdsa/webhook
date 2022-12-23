import LoginButton from "./LoginButton";
import Image from "next/image";
import queryString from "query-string";
import { useEffect,useState } from "react";
import {  initAuth } from "../context/actions/authActions";
import { useCookies } from "react-cookie";
import { useAppDispatch } from "../context/reduxHooks";
import { isAndroid, isIOS,isEmbedded,browserName } from "react-device-detect";
// import { useEffect, useState } from 'react';
interface Props{
  isAuthenticated:boolean
  isLoading:boolean,
  authLoading:boolean,
  isMobile:boolean,
  postUrl:string
}
const LandingPage = ({isAuthenticated,isLoading,authLoading,isMobile,postUrl}:Props) =>{
  const [loginUrl,setLoginUrl]= useState('')
  const dispatch = useAppDispatch()
  const [continueUrl,setContinueUrl]= useState('')

  const navigateToBrowser = (login:any)=>{
    // if (isAndroid) {
    //   const url =`intent://portal.teclumobility.com:4433?login_url=${login}&continue_url=${continueUrl}#Intent;scheme=https;end`;

    //   window.location.replace(url);
    // } else if (isIOS) {
    //   window.location.replace("instagram://");
    //     window.location.replace(
    //       "https://apps.apple.com/us/app/instagram/id389801252"
    //     );
    // }
    const domain = 'portal.teclumobility.com:4433'
    if (isAndroid) {
      const url =`intent://${domain}?login_url=${login}&continue_url=${continueUrl}#Intent;scheme=https;end`;

      window.location.replace(url);
    } else if (isIOS) {
        window.location.replace(
          `safari-https://${domain}?login_url=${login}&continue_url=${continueUrl}`
        );
    }
  }

  const navigateToBrowser2 = (login:any)=>{
    // if (isAndroid) {
    //   const url =`intent://portal.teclumobility.com:4433?login_url=${login}&continue_url=${continueUrl}#Intent;scheme=https;end`;

    //   window.location.replace(url);
    // } else if (isIOS) {
    //   window.location.replace("instagram://");
    //     window.location.replace(
    //       "https://apps.apple.com/us/app/instagram/id389801252"
    //     );
    // }
    const domain = 'portal.teclumobility.com:4433'
    if (isAndroid) {
      const url =`intent://${domain}?login_url=${login}&continue_url=${continueUrl}#Intent;scheme=https;end`;

      window.location.replace(url);
    } else if (isIOS) {
      window.location.replace("instagram://");
        window.location.replace(
          "https://apps.apple.com/us/app/instagram/id389801252"
        );
    }
  }
  
  useEffect(()=>{
    console.log(browserName)
      if(typeof window != 'undefined'){
        const queries = queryString.parse(location.search)
        const login = queries.login_url
        setContinueUrl(queries.continue_url as string)
        setLoginUrl(queries.login_url as string)
      //  //WebKit
        if(browserName == "Chrome WebView"){
          // if(isEmbedded){
            navigateToBrowser(login)
          // }
        }
        //  console.log(login_url)
  //       window.FB.getLoginStatus(function(response:any) {
  //         console.log(response)
  //         console.log(response.status == 'connected')
  //       if(response.status === 'connected') {
  //         const accessToken = response.authResponse.accessToken;
  //         dispatch(initAuth(accessToken));
  //       }
  //   })
  }      
  },[])
 

  
    return(
        <div className={` absolute w-11/12 sm:w-2/3 lg:w-1/2 2xl:w-1/3 rounded-xl 
         -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 z-20 bg-white 
         ${isLoading && "filter brightness-50 "}`}>
            <div className="grid grid-cols-1 xl:translate-y-5  items-center place-items-center py-3 xl:py-10 gap-y-10 2xl:gap-y-20">      
        <Image 
      src='/images/logo.png'
      width={210}
      height={100}
      alt="logo ypfb"
      />
      <div className="grid grid-cols-1 items-center place-items-center px-10 gap-y-5">
      <h1 className="text-2xl font-bold text-center">Bienvenido al Portal Cautivo de YPFB</h1>
      <p className="p-4 border-2 border-b-gray-500 text-xs sm:text-sm md:text-base text-center "
      >Para acceder a la red, deberás iniciar sesión con tu cuenta de Facebook y posteriormente
       dar "me gusta" a la última publicación de la página de {' '}
        <a href="https://www.facebook.com/Yacimientos/" target={'_blank'} rel='noreferrer'
        className="text-facebook">YPFB Corp</a>.
      </p>
      </div>

        <div className="grid grid-cols-1 items-center place-items-center gap-y-1">
       <LoginButton 
       continu2={continueUrl} 
       login={loginUrl}
       isAuthenticated={isAuthenticated}
       authLoading={authLoading}
       postUrl={postUrl}
       isAndroid={isAndroid}
       />
       <a href='https://www.freeprivacypolicy.com/live/83964b85-328e-46c5-a236-33e4fd63a5a6' 
       target="_blank" rel="noreferrer" className="underline text-facebook cursor-pointer font-medium">Politicas de Privacidad</a>
        </div>
        <div className="space-x-10 flex">
          <button onClick={()=>navigateToBrowser(loginUrl)}>{browserName}1</button>
          <button onClick={()=>navigateToBrowser2(loginUrl)}>{browserName}2</button>

        </div>

{/* 
        <div className='grid place-items-center translate-y-4 w-full base:hidden mb-5'>
        <a href="https://teclu.com/" target='_blank' rel="noreferrer"
         className=" text-teclu    text-sm">By Teclu</a>
        </div> */}

         {/* <a  href={`intent://webhook-murex.vercel.app?login_url=${loginUrl}&continue_url=${continueUrl}#Intent;scheme=https;end`}  */}
         {/* <div onClick={()=>navigateToBrowser()}>
           {/* target="_blank" rel='noreferrer'> */}
           {/* {isMobile ==false  &&
             <span>
               Open Browser 
             </span>
           }  
             </div> */}
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
