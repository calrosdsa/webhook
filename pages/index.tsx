import {useCookies } from 'react-cookie'
import { useEffect, useState } from "react";
import Image from 'next/image';
import LandingPage from '../components/LandingPage';
import { useAppDispatch, useAppSelector } from '../context/reduxHooks';
import { uiActions } from '../context/slices/ui-slice';
import { authActions } from '../context/slices/auth-slice';
import axios from 'axios';

export default function Home() {
  const [cookies, setCookie,removeCookie ] = useCookies<any>(['name']);
  const dispatch = useAppDispatch()
  const ui = useAppSelector(state => state.ui.loading)
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
  const email = cookies.name
  const id = cookies.id

  const changeState = () => {
    dispatch(authActions.setAuthenticated(true))
  }

  useEffect(()=>{
    if(isAuthenticated){
      dispatch(uiActions.setButtonText("Ir a al ultimo post"))
        // console.log("exist")
      }
  },[isAuthenticated])

  useEffect(() => {
    // console.log(id)
    //https://teclu.com/validatelike.php?id=113209743565830
    async function fetchMyAPI() {
      const response = await axios.get(`https://teclu.com/validatelike.php?id=${id}`)
      console.log(response)
    }
    fetchMyAPI()
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
      <div className='relative h-screen w-full noselect'>
        {/* <button  className='absolute bg-white p-10 z-10'
        onClick={changeState}>CHANGE ESTATE</button> */}
        <img 
        className='w-full h-screen blur-sm absolute'
        src='/images/background.jpg'
        />   
        <LandingPage/>
        </div>
  );
};


