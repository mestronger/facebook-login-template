<script src="http://connect.facebook.net/en_US/all.js"></script>
    <script>
       
      // initialize the library with the API key
      FB.init({ apiKey: 'ad152b9a2419a3bb5dfdcc58bb7832c9', status:true, logging: true, cookie: true, xfbml: true });


      $(document).ready(function() {
        FB.getLoginStatus(function(response) {
          if (response.session) {
            console.log('already logged');
            
          } 
          else {
            FB.login(function(response) {
              if(response.session) {
                console.log('login completed!')
              } 
              else {
                // user is not logged in
              }
            }, {perms:'read_stream, publish_stream, offline_access, user_photos, friends_photos'});
          } // else 
        }); // getLoginStatus
        
 

      }); // document.ready
      

      $('#disconnect').bind('click', function() {
        FB.api({ method: 'Auth.revokeAuthorization' }, function(response) {
          clearDisplay();
        });
        console.log('disconnected');
      });
      // no user, clear display
      function clearDisplay() {
        $('#user-info').hide('fast');
      }      
    </script>
