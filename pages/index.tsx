import {useCookies } from 'react-cookie'
import { useEffect, useState } from "react";
import Image from 'next/image';
import LandingPage from '../components/LandingPage';
import { useAppDispatch, useAppSelector } from '../context/reduxHooks';
import { uiActions } from '../context/slices/ui-slice';

export default function Home() {
  const [cookies, setCookie,removeCookie ] = useCookies<any>(['name']);
  const dispatch = useAppDispatch()
  const ui = useAppSelector(state => state.ui.loading)
  const auth = useAppSelector(state => state.auth)
  const email = cookies.name
  const id = cookies.id

  useEffect(()=>{
    console.log(ui)
    setCookie('id',"12737271737131",{ path:'/',maxAge:60*60*5})
    if(id){
      dispatch(uiActions.setButtonText("Ir a al ultimo post"))
        // console.log("exist")
      }
  },[auth.isAuthenticated])

  useEffect(() => {
    // console.log(id)
    if (typeof window !== 'undefined') {
      window.fbAsyncInit = () => {
          window.FB.init({
              appId            : '694102408690400',
              autoLogAppEvents : true,
              xfbml            : true,
              version          : 'v11.0'
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
      // onLoginClick()
  }, []);

  return (
      <div className='relative h-screen w-full'>
        <img 
        className='w-full h-screen blur-sm absolute'
        src='/images/background.jpg'
        />   
        <LandingPage/>
        </div>
  );
};


