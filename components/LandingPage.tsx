import LoginButton from "./LoginButton";
import Image from "next/image";
import queryString from "query-string";
import { useEffect,useState } from "react";
import { useAppDispatch } from "../context/reduxHooks";
import { isAndroid, isIOS,isEmbedded,browserName } from "react-device-detect";
import { useRouter } from "next/router";
import Link from "next/link";
import EmailDialog from "./dialog/EmailDialog";
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
  const [continueUrl,setContinueUrl]= useState('')
  const [openEmailDIalog,setOpenEmailDialog] = useState(false)
  const [url,setUrl] = useState("")

  const navigateToBrowser = (loginUrl:any)=>{
    const domain = window.location.hostname
    if (isAndroid) {
      const url =`intent://${domain}?login_url=${loginUrl}#Intent;scheme=https;package=com.android.chrome;end`;
      window.location.replace(url);
    } 
  }

  
  useEffect(()=>{
    console.log(browserName)
      if(typeof window != 'undefined'){
        const baseurl = window.location.href
        setUrl(baseurl)
        console.log(baseurl)
        const queries = queryString.parse(location.search)
        const login = queries.login_url
        setContinueUrl(queries.continue_url as string)
        setLoginUrl(queries.login_url as string)
        if(browserName == "Chrome WebView"){
            navigateToBrowser(login)
        }
  }      
  },[])
 

  
    return(
      <>
      {openEmailDIalog&&
      <EmailDialog
      closeDialog={()=>setOpenEmailDialog(false)}
      open={openEmailDIalog}
      />
    }
        <div className={` absolute w-11/12 sm:w-2/3 lg:w-1/2 2xl:w-1/3 rounded-xl 
        -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 z-20 bg-white 
        ${isLoading && "filter brightness-50 "}`}>
        
        <div className="grid grid-cols-1 xl:translate-y-5  items-center place-items-center py-3 xl:py-10 gap-y-5 xl:gap-y-10">      
        <Image 
      src='/images/logo.png'
      width={190}
      height={90}
      alt="logo ypfb"
      />
      {/* <div className="grid grid-cols-1 items-center place-items-center px-5 sm:px-10 gap-y-5"> */}
      <div className="grid grid-cols-1  px-5 sm:px-10 gap-y-5">
      <h1 className="text-xl md:text-2xl font-bold text-center">Bienvenido al Portal Cautivo de YPFB</h1>
      {/* <p className="p-2 sm:p-4 border-2 border-b-gray-500 text-xs sm:text-sm md:text-base text-center"> */}
      <p className="p-2 sm:p-4 border-2 border-b-gray-500 text-xs sm:text-sm overflow-x-auto">

        {url}
        {/* Para acceder a la red, deberás iniciar sesión con tu cuenta de Facebook y posteriormente
       dar "me gusta" a la última publicación de la página de
        <a href="https://www.facebook.com/Yacimientos/" target={'_blank'} rel='noreferrer'
        className="text-facebook"> YPFB Corp</a>. */}
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
        {/* <div onClick={()=>setOpenEmailDialog(true)}
        className='flex h-10 px-2 sm:px-2 mx-1 rounded-2xl  items-center cursor-pointer relative border-[2px] border-gray-300'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
          stroke="currentColor" className="w-6 h-6">
   <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
         </svg>
             <span 
             className=' font-semibold text-sm sm:text-base pl-2'>Continuar con email</span>
        </div>      */}
       <a href='https://www.freeprivacypolicy.com/live/83964b85-328e-46c5-a236-33e4fd63a5a6' 
       target="_system" rel="noreferrer" className="underline text-sm text-facebook cursor-pointer font-medium">
        Politicas de Privacidad</a>
        <Link href='/info' 
       target="_blank" rel="noreferrer" className="underline text-sm text-facebook cursor-pointer font-medium">
        Ayuda</Link>
        </div>
        {/* <div className="space-x-10 flex">
          <button onClick={()=>navigateToBrowser(loginUrl)}>{browserName}1</button>
          <button onClick={()=>navigateToBrowser2(loginUrl)}>{browserName}2</button>
          
        </div> */}


        <div className='grid place-items-center translate-y-4 w-full base:hidden mb-5'>
        <a href="https://teclu.com/" target='_blank' rel="noreferrer"
         className=" text-teclu    text-sm">By Teclu</a>
        </div>

        
      </div>

         </div>
         </>
    )
}

export default LandingPage;


//https://securelogin.arubanetworks.com/swarm.cgi?opcode=cp_generate&orig_url=68747470733a2f2f7777772e677374617469632e636f6d2f67656e65726174655f323034


//https://securelogin.arubanetworks.com/swarm.cgi
