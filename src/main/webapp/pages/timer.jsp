<%--
  Created by IntelliJ IDEA.
  User: csdc01
  Date: 2017/3/29
  Time: 11:13
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Toggl</title>
    <script src="../js/jQuery3.2.js" type="text/javascript"></script>
    <script src="../js/mustache.js" type="text/javascript"></script>
    <script src="../js/project.js" type="text/javascript"></script>
    <script src="../js/tag.js" type="text/javascript"></script>
    <script src="../js/item.js" type="text/javascript"></script>
    <script src="../js/timers.js" type="text/javascript"></script>

    <link rel="stylesheet" href="../css/toggl.css" type="text/css">
</head>
<body style="background-color: rgba(1, 0, 12, 0.89)">
    <div class="left" id="tabs">
        Toggl<br/>
        <ul>
            <li><a style="color:white" href="/">Timer</a></li>
            <li><a style="color:white" href="/dashboard">Dashboard</a></li>
        </ul>
    </div>
    <div class="right" id="timer">
        <div class="top">
            <div class="text"><input type="text" id="content" class="text" style="width: 100%" placeholder="   What are you working on"/></div>
            <div class="subtop"><p><a id="project" >+Project/task</a></p>
                <div class="project" id="projectMessage">
                    <input id="project_condition" type="text" placeholder="Find Project" style="height: 35px;font-size: 15px; width: 200px;" oninput="search(this.value, this)">
                    <div id="projectList" style="text-align: left; width: inherit"></div>
                </div>
            </div>
            <div class="subtop"><p><a id="tag" >+Tag</a></p>
                <div class="tag" id="tagMessage">
                    <input id="tag_condition" type="text" placeholder="Find Tag" style="height: 35px;font-size: 15px; width: 200px;" oninput="searchTag(this.value, this)">
                    <div id="tagList" style="text-align: left; width: inherit"></div>
                </div>
            </div>
            <div class="subtop"><p id="countTime">0:00:00</p></div>
            <div class="subtop"><img class="img" id="img" src="/image/start.jpg"> </div>
        </div>
        <div style=" font-size:40px;color:blue;border-bottom:1px black;text-align: center;font-family: 楷体;background-color: aliceblue;height: 60px">Item list</div>
        <div id="itemList" class="other">
            <c:if test="${not empty itemInfos}">
                <c:forEach items="${itemInfos}" var="itemInfo" >
                    <div class="item" id="${itemInfo.itemId}">
                        <div class="text" style="width: 40%;">
                            <input class="itemtext" type="text" value="${itemInfo.content}">
                        </div>
                        <div class="subtopProject">
                            <p><a>${itemInfo.projectInfo.projectName}</a></p>
                            <div class="project" >
                                <input type="text" placeholder="Find Project" style="height: 35px;font-size: 15px; width: 200px;" oninput="search(this.value, this)">
                                <div style="text-align: left; width: inherit"></div>
                            </div>
                        </div>
                        <div class="subtopTag">
                            <p><a>${itemInfo.tagInfo.tagName}</a></p>
                            <div class="tag" >
                                <input type="text" placeholder="Find Tag" style="height: 35px;font-size: 15px; width: 200px;" oninput="searchTag(this.value, this)">
                                <div style="text-align: left; width: inherit"></div>
                            </div>
                        </div>
                        <div class="subtop"><p id="interval${itemInfo.itemId}"></p></div>
                        <div class="subtop"><button class="continue" style="color: green">|></button></div>
                        <div class="subtop"><button class="delete">Delete</button></div>
                    </div>
                </c:forEach>
            </c:if>
        </div>
    </div>
</body>
</html>
