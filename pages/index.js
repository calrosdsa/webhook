import { useEffect,useState } from "react";
import { useCookies } from "react-cookie";
export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  useEffect(() => {
    InitFacebook()
  }, []);

  return (
      <div><button onClick={LoginFacebook()}>Login with Facebook</button></div>
  );

};

const LoginFacebook = () => {
  if (typeof window !== 'undefined') {
    // FB.api(
    //   '/me',
    //   'GET',
    //   {"fields":"email,gender,location"},
    //   function(response) {
    //     console.log(response)
    //   }
    // );
    window.FB.login(function(response) {
      if (response.authResponse) {
       console.log('Welcome!  Fetching your information.... ');
       FB.api('/me', function(response) {
        console.log(response)
        setCookie("name",response.name,{
          path:'/',
          maxAge:60*5
        })
        setCookie("id",response.id,{
          path:'/',
          maxAge:60*5
        })
         console.log('Good to see you, ' + response.name + '.');
       });
      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
  });
};
}

const InitFacebook = ()=>{
  if (typeof window !== 'undefined') {
      window.fbAsyncInit = () => {
          window.FB.init({
              appId            : '694102408690400',
              autoLogAppEvents : true,
              xfbml            : true,
              version          : 'v11.0'
          });
        };
        (function (d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) { return; }
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      }
}