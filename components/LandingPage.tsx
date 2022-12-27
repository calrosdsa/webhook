import LoginButton from "./LoginButton";
import Image from "next/image";
import queryString from "query-string";
import { useEffect,useState } from "react";
import { useAppDispatch } from "../context/reduxHooks";
import { isAndroid, isIOS,isEmbedded,browserName } from "react-device-detect";
import { useRouter } from "next/router";
import Link from "next/link";
// import { useEffect, useState } from 'react';
interface Props{
  isAuthenticated:boolean
  isLoading:boolean,
  authLoading:boolean,
  isMobile:boolean,
  postUrl:string
}
const LandingPage = ({isAuthenticated,isLoading,authLoading,isMobile,postUrl}:Props) =>{
  const router = useRouter()
  const [loginUrl,setLoginUrl]= useState('')
  const [continueUrl,setContinueUrl]= useState('')
  const [url,setUrl] = useState('')

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
    const domain = 'webhook-murex.vercel.app'
    if (isAndroid) {
      window.location.replace('googlechrome-x-callback://x-callback-url/open/?url='+encodeURIComponent(location.href)+'&x-source=Safari&x-success='+encodeURIComponent(location.href))

      const url =`intent://${domain}?login_url=${login}&continue_url=${continueUrl}#Intent;scheme=https;end`;

      window.location.replace(url);
    } else if (isIOS) {
      window.location.replace('googlechrome-x-callback://x-callback-url/open/?url='+encodeURIComponent(location.href)+'&x-source=Safari&x-success='+encodeURIComponent(location.href))
        // window.location.replace(
        //    `safari-https://${domain}?login_url=${login}&continue_url=${continueUrl}`
        // );
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
        const baseurl = window.location.href
        setUrl(baseurl)
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
           {/* <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>router.push('/info')}
            fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
           className="w-6 h-6 cursor-pointer translate-y-2 ml-2">
       <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
           </svg> */}
            <div className="grid grid-cols-1 xl:translate-y-5  items-center place-items-center py-3 xl:py-10 gap-y-5 xl:gap-y-10">      
        <Image 
      src='/images/logo.png'
      width={210}
      height={100}
      alt="logo ypfb"
      />
      <div className="grid grid-cols-1 items-center place-items-center px-10 gap-y-5">
      <h1 className="text-2xl font-bold text-center">Bienvenido al Portal Cautivo de YPFB</h1>
      <p onClick={()=>navigator.clipboard.writeText(url)} className="p-4 border-2 border-b-gray-500 text-xs sm:text-sm md:text-base text-center">
        {/* Para acceder a la red, deberás iniciar sesión con tu cuenta de Facebook y posteriormente
       dar "me gusta" a la última publicación de la página de */}
       Copiar to clipboard
        <a href="https://www.facebook.com/Yacimientos/" target={'_blank'} rel='noreferrer'
        className="text-facebook"> YPFB Corp</a>.
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
       target="_blank" rel="noreferrer" className="underline text-sm text-facebook cursor-pointer font-medium">
        Politicas de Privacidad</a>
        <Link href='/info' 
       target="_blank" rel="noreferrer" className="underline text-sm text-facebook cursor-pointer font-medium">
        Ayuda</Link>
        </div>
        <div className="space-x-10 flex">
          <button onClick={()=>navigateToBrowser(loginUrl)}>{browserName}1</button>
          <button onClick={()=>navigateToBrowser2(loginUrl)}>{browserName}2</button>

        </div>


        {/* <div className='grid place-items-center translate-y-4 w-full base:hidden mb-5'>
        <a href="https://teclu.com/" target='_blank' rel="noreferrer"
         className=" text-teclu    text-sm">By Teclu</a>
        </div> */}

        
      </div>

         </div>
    )
}

export default LandingPage;


//https://securelogin.arubanetworks.com/swarm.cgi?opcode=cp_generate&orig_url=68747470733a2f2f7777772e677374617469632e636f6d2f67656e65726174655f323034


//https://securelogin.arubanetworks.com/swarm.cgi
