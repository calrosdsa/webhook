import {useCookies } from 'react-cookie'
import { useEffect, useState } from "react";
import Image from 'next/image';
import LandingPage from '../components/LandingPage';
import { useAppDispatch, useAppSelector } from '../context/reduxHooks';
import { uiActions } from '../context/slices/ui-slice';
import { authActions } from '../context/slices/auth-slice';
import axios from 'axios';
import queryString from "query-string";
import { getLink } from '../context/actions/authActions';


export default function Home() {
  const [cookies, setCookie,removeCookie ] = useCookies<any>(['name']);
  const dispatch = useAppDispatch()
  const ui = useAppSelector(state => state.ui)
  const auth = useAppSelector(state => state.auth)
  
  const email = cookies.name
  const id = cookies.id
  
  useEffect(()=>{
     dispatch(getLink())
  },[])

  useEffect(()=>{
  
    if(auth.isAuthenticated){
      dispatch(uiActions.setButtonText("Ir a al ultimo post"))
        // console.log("exist")
      }
  },[auth.isAuthenticated])
 
  

  useEffect(() => {
    // console.log(id)
    //https://teclu.com/validatelike.php?id=113209743565830
    const isHaveTouch = 'ontouchstart' in window
    console.log('onTouch',isHaveTouch)
    // if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      if(isHaveTouch){
      console.log('is mobile')
      dispatch(uiActions.setDevice(true))
      // true for mobile device
      // document.write("mobile device");
    }else{
      dispatch(uiActions.setDevice(false))
      // false for not mobile device
      // document.write("not mobile device");
    }
   
    if (typeof window !== 'undefined') {
      console.log(queryString.parse(window.location.search))
      const parsed = queryString.parse(window.location.search)
      console.log(parsed)
      window.fbAsyncInit = () => {
          window.FB.init({
              appId            : '801740780921492',
              autoLogAppEvents : true,
              xfbml            : true,
              version          : 'v15.0'
            });
      };
    }
      (function (d, s, id) {
          var js:any, fjs:any = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) { return; }
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      }, []);

  return (
    <>
      <div className={`relative h-screen w-full noselect`}>
        {/* <button  className='absolute bg-white p-10 z-10'
        onClick={changeState}>CHANGE ESTATE</button> */}
        <Image
        src='/images/background.jpg'
        width={210}
        className={`w-full h-screen blur-sm absolute ${ui.loading && "filter brightness-50 "}`}
        height={100}  
        alt="logo ypfb"
        />
        {/* <img 
        className={`w-full h-screen blur-sm absolute ${ui.loading && "filter brightness-50 "}`}
        src='/images/background.jpg'
        />    */}
        <LandingPage
        isLoading={ui.loading}
        isAuthenticated={auth.isAuthenticated}
        authLoading={auth.authLoading}
        isMobile={ui.isMobile}
        postUrl={auth.postUrl}
        />
        {ui.loading &&
    <svg aria-hidden="true" 
    className="mr-2 w-8 h-8 text-gray-200 animate-spin fill-facebook absolute z-30
    left-1/2 top-1/2 "
    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    }
        </div>
        </>
  );
};


//https://76.76.21.241/?cmd=login&mac=ac:12:03:9c:ae:05&essid=radius&ip=172.31.98.4&apname=40%3Ae3%3Ad6%3Acc%3A62%3Aa8&apmac=40%3Ae3%3Ad6%3Acc%3A62%3Aa8&vcname=SetMeUp-CC%3A62%3AA8&switchip=securelogin.arubanetworks.com&url=http%3A%2F%2Fwww.msftconnecttest.com%2Fredirect

//https://community.arubanetworks.com/community-home/digestviewer/viewthread?MID=16648#bmbd935f86-6b5b-4ee5-9a0d-33b606b01d67

//https://login.webhook-murex.vercel.app/swarm.cgi