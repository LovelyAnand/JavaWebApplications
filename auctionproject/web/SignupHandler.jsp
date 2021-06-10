

<%@page import="com.storage.DBData"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="obj" class="com.bean.SignupBean"/>
<jsp:setProperty property="*" name="obj"/>

<script src="js/WelcomeMessage.js">
    
</script>

<%
    int i=DBData.newBidder(obj);
    if(i==1)
    {%>
    <body onload="welcomeMsg()">
        <input type="hidden" id="id1" value="<%= obj.getName() %>"/>
    </body>
    <%}
    else
    {
        
    }
%>
