
        function checkPassword()
        {
            pass1=document.signupform.password.value;
            pass2=document.signupform.password2.value;
            if(pass1==pass2)
            {
                document.getElementById("msg").innerHTML="Password Matched";
                document.getElementById("msg").style.color="navy";
            }
            else
            {
                document.getElementById("msg").innerHTML="Password not Match";
                document.getElementById("msg").style.color="red";
            }
        }
    
