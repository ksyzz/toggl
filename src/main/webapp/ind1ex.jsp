<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>toggl</title>
    <%--bootstrap 配置--%>
    <link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <script src="js/tag.js" type="text/javascript"></script>
    <script src="js/project.js" type="text/javascript"></script>
    <script src="js/item.js" type="text/javascript"></script>
</head>
<body>
<div class="container-fluid">
    <h1 style="text-align: center;color: blue; background-color: cornsilk">Welcome to your time manager</h1>
</div>
<hr style="height:3px;border:none;border-top:3px groove deepskyblue;" />
<div class="row-fluid" >
    <div class="span6" style="float: left;width: 50%">
        <input type="text" id="content" placeholder="What are you working on?" style="width: 100%; border: none; height: 50px; font-size: 20px"/>
    </div>
    <div class="span6" style="float: left;width: 50%">
        <div class="row-fluid">
            <div class="span4" style="float:left;width: 30%;position: relative">
                <%--<button class="btn btn-info" type="button" id="projectName" onclick="getProjects('/project/get/all')">Choose Project</button>--%>
                <%--<div style="display: none;position: absolute;width: 100%" id="selectProject">--%>
                    <%--<input id="projectCondition" type="text" placeholder="Find project" oninput="getProjects('/project/get/condition?name='+this.value)" style="width: 100px">--%>
                    <%--<div id="projectlist" style="position: absolute;width: 100%"></div>--%>
                <%--</div>--%>
                    <button data-toggle="dropdown" class="btn dropdown-toggle" id="projectName" onclick="getProjects('/project/get/all')"> Choose Project
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" contenteditable="true">
                        <input id="projectCondition" type="text" placeholder="Find project" oninput="getProjects('/project/get/condition?name='+this.value)">
                        <div id="projectlist" style="position: relative;width: 100%"></div>

                    </ul>
            </div>

            <%--Tag button--%>
            <div class="span4" style="float: left;width:30%;">
                <button class="btn btn-success" type="button" id="tagName" onclick="getTags('/tag/get/all')" >Choose Tag</button>
                <div style="display: none;position: absolute;width: 100%" id="selectTag">
                    <input id="tagCondition" type="text" placeholder="Find tag" oninput="getTags('/tag/get/condition?name='+this.value)" style="width: 100px">
                    <div id="taglist" style="position: absolute;width: 100%"></div>
                </div>
            </div>
            <div class="span4"  style="float: left;width: 30%">
                <button class="btn btn-primary" type="button" onclick="addItem()">Add</button>
            </div>
        </div>
    </div>
    <hr style="height:3px;border:none;border-top:3px groove #060a8b;" />
    <div id="itemlist">

    </div>
</div>

<%--<div class="container-fluid">--%>
<%--<div class="row">--%>
<%--<div class="span2  col-xs-12 col-sm-3 col-md-2" >--%>
<%--<ul class="nav nav-pills nav-stacked">--%>
<%--<li class="active"><a href="pages/test.jsp">Timer</a></li>--%>
<%--<li><a href="" onclick="timer()">Graph</a></li>--%>
<%--</ul>--%>
<%--<button onclick="timer()"/>--%>
<%--</div>--%>
<%--<div class="col-xs-12 col-sm-9 col-md-10" id="transaction">--%>

<%--</div>--%>
<%--</div>--%>
<%--</div>--%>

<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>

<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="//cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
</body>
</html>