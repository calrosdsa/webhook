import { useEffect,useState } from "react";

export default function Home() {
  // const [session, loading] = useSession()
  // const [providers, setProviders] = useState({});

  const onLoginClick = () => {
    if (typeof window !== 'undefined') {
      window.FB.login(function(response) {
        if (response.authResponse) {
         console.log('Welcome!  Fetching your information.... ');
         FB.api('/me', function(response) {
           console.log('Good to see you, ' + response.name + '.');
         });
        } else {
         console.log('User cancelled login or did not fully authorize.');
        }
    });
  };
}

  useEffect(() => {
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
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) { return; }
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
      <div><button onClick={onLoginClick}>Login with Facebook</button></div>
  );

};
