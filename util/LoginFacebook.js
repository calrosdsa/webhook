export const LoginFacebook = () => {
    if (typeof window !== 'undefined') {
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