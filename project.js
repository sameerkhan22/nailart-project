

        document.getElementById("signin").addEventListener("submit",function(){
          alert("Sign in Success Fully")
          let email = document.getElementById('email').value;
          localStorage.setItem("email",email);
          
        })

        function showemail(){
          let email = localStorage.getItem("email");
            document.getElementById("emailset").innerText = email;
        }




    function mynavbar(){
      showemail();
        if(window.scrollY > 130){
          document.getElementById("secondnavbar").style.position = 'fixed';
          document.getElementById("secondnavbar").style.top = '0';
          document.getElementById("secondnavbar").style.transition= 'all 2s ease-in';
          
        }
        else{
          document.getElementById("secondnavbar").style.position = 'static';  
        }
    }
  

    function showbtn(){
      if(window.scrollY > 170){
  
        document.getElementById("topbtn").style.opacity ='1';
      }
      else{
        document.getElementById("topbtn").style.opacity = '0';
  
      }
    }

  