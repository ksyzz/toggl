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
    <div class="left" id="tabs">
        Toggl<br/>
        <ul>
            <li><a style="color:white" href="#timer">Timer</a></li>
            <li><a style="color:white" href="#dashboard">Dashboard</a></li>
        </ul>
    </div>
    <div class="right" id="timer">
        <div class="top">
            <%--&nbsp;&nbsp;&nbsp;--%>
            <div class="text"><input type="text" id="content" class="text" style="width: 100%" placeholder="   What are you working on"/></div>
            <div class="subtop"><p><a id="project" href="#"><strong>+</strong>Project/task</a></p></div>
            <div class="subtop"><p><a id="tag" href="#"><strong>+</strong>Tag</a></p>
                <%--<ul class="dropdown-menu" id="tagMessage">--%>
                    <%--<li><input type="search" placeholder="Find tag" style="height: 30px"></li>--%>
                    <%--<div id="tagList"></div>--%>
                <%--</ul></div>--%>
            </div>
        </div>

        <div>testssss</div>
    </div>
    <div class="right" id="dashboard" style="display: none">

    </div>

</body>
</html>
