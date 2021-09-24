 
         function verifyPassword() {  
           var pw = document.getElementById("MotPasse").value;  
           if(pw == "") {  //verefier si il null  
              document.getElementById("message").innerHTML = "Veuillez entrer un mot de passe";  
              return false;  
           }   
           if(pw.length < 8) {   //mot passe entre 8 et 16 caractères
              document.getElementById("message").innerHTML = "Le mot de passe est plus de 8 caractères";  
              return false;  
           }   
           if(pw.length > 16) { //mot passe entre 8 et 16 caractères
              document.getElementById("message").innerHTML = "Le mot de passe ne dépasse pas 16 caractères";  
              return false;  
           } else {  
              alert("Password is correct");  
           }  
         }   
