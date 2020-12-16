document.cookie = "LabelACCID=Guest LabelPASS=Guest  ";

document.cookie = "IPID=2607:f8b0:4009:806::200e";

document.cookie = "ACCID=46hdv27x67t3y2ndj27rhHF63b";

document.cookie = "APISID=VHnRSvySgbNloMwTGcrj9xx2jI0Lw35o5bT"

document.cookie = "CGIC=ivJwW6Qunx63KG3QpEEhn0H5vB7RNwrUKm4w1jBKgXatz13ORIeHRnMIpMAkdoQ3d7PaHO95eHf04AmsNZgoofvzCYxjq9uT6kxENLvKMXY7Fw6vPKIqIZRZhk6MW";

document.cookie = "google.com/=GCIDAdYnngWd4w6DC3b7bisUIRXHXvT1D0UuZf8ETpZlvprIdQEKzBK3HzaV095ponNnCJZatBrtA36Pqt9skki3qEzch19zWexfgYyR13nqL4P2MXFGGwlXK4aYrcqqK9";

document.cookie = "AES KEY = gy2vb8gzcwb822sdh2sv7wmrr66swayv4np";

var x = document.cookie;

Cookie uiColorCookie = new Cookie("color", "red");
response.addCookie(uiColorCookie);


uiColorCookie.setDomain("google.com");



 <script src="https://www.google.com/recaptcha/api.js"></script>

  <script>
   function onSubmit(token) {
     document.getElementById("demo-form").submit();
   }
 </script>


 <button class="g-recaptcha" 
        data-sitekey="reCAPTCHA_site_key" 
        data-callback='onSubmit' 
        data-action='submit'>Submit</button>
