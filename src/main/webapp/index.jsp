<%--
  Created by IntelliJ IDEA.
  User: csdc01
  Date: 2017/3/29
  Time: 11:13
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Toggl</title>
    <script src="js/jQuery3.2.js" type="text/javascript"></script>
    <script src="js/mustache.js" type="text/javascript"></script>
    <script src="js/project.js" type="text/javascript"></script>
    <script src="js/tag.js" type="text/javascript"></script>
    <link rel="stylesheet" href="css/toggl.css" type="text/css">
</head>
<body style="background-color: rgba(1, 0, 12, 0.89)">
    <div class="left">
        Toggl<br/>
        Timer<br/>
        Dashboard<br/>
    </div>
    <div class="right" id="index">
        <div class="top">
            <input type="text" id="content" class="text" placeholder="   What are you working on"/>
            <a id="project" class=""><strong>+</strong>Project/task</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a id="tag"><strong>+</strong>Tag</a>
        </div>
        <hr style="color:deepskyblue;" />
    </div>
</body>
</html>
