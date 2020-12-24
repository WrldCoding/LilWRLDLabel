document.cookie = "LabelACCID=Guest LabelPASS=Guest  ";

document.cookie = "IPID=2607:f8b0:4009:806::200e";

document.cookie = "ACCID=46hdv27x67t3y2ndj27rhHF63b";

document.cookie = "APISID=VHnRSvySgbNloMwTGcrj9xx2jI0Lw35o5bT"

document.cookie = "CGIC=ivJwW6Qunx63KG3QpEEhn0H5vB7RNwrUKm4w1jBKgXatz13ORIeHRnMIpMAkdoQ3d7PaHO95eHf04AmsNZgoofvzCYxjq9uT6kxENLvKMXY7Fw6vPKIqIZRZhk6MW";

document.cookie = "google.com/=GCIDAdYnngWd4w6DC3b7bisUIRXHXvT1D0UuZf8ETpZlvprIdQEKzBK3HzaV095ponNnCJZatBrtA36Pqt9skki3qEzch19zWexfgYyR13nqL4P2MXFGGwlXK4aYrcqqK9"


var x = document.cookie;




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


        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>






function showCustomer(str) {
  var xhttp;
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById("txtHint").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "getcustomer.php?q="+str, true);
  xhttp.send();
}