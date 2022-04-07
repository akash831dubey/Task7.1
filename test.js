<script type="text/javascript" >
               // Main Function
              function test(enter) {
            
                //Check if the enter key is pressed
                if (enter.keyCode == 13) {
            
                 
                  document.getElementById('pu').innerHTML = "";
                  var i = document.getElementById("text").value
                  var xhr = new XMLHttpRequest();
                  xhr.open("GET", "http://192.168.56.104/cgi-bin/test.py?x=" + i, false)
                  xhr.send();
                  var output = xhr.responseText;
                  document.getElementById("pu").innerHTML = output;
            
                  //Clear the  input from the text box
                  document.getElementById('text').value = "";
                }
              }
            
            </script>