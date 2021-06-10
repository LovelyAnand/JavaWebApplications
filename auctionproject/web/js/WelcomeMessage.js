function welcomeMsg()
    {
        var val=document.getElementById("id1").value;
        if(window.confirm("Sign up successfully! "+val+" Do you want to login? Click OK."))
        {
            window.location.href="index.jsp";
        }
    }