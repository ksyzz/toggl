
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Dashboard</title>
    <script src="../js/jQuery3.2.js" type="text/javascript"></script>
    <script src="../js/laydate.dev.js" type="text/javascript"></script>
    <script src="../js/dashboard.js" type="text/javascript"></script>
    <link rel="stylesheet" href="../css/toggl.css" type="text/css">
    <script src="../js/mustache.js" type="text/javascript"></script>
    <script type="text/html" id="time_distribution">
        <table >
            <thead>
            <tr>
                <th>Project</th>
                <th>Time</th>
            </tr>
            </thead>
            <tbody>
            {{#list}}
            <tr>
                <td>{{projectName}}</td>
                <td>{{length}}</td>
            </tr>
            {{/list}}
            </tbody>
        </table>
</script>
</head>
<body>
<div class="left">
    Toggl<br/>
    <ul>
        <li><a href="/">Timer</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
    </ul>
</div>
<div class="right" id="timer">
<input type="text" id="startTime" class="date" placeholder="Choose startTime" onclick="startDate()">
<input type="text" id="endTime" class="date" placeholder="Choose endTime" onclick="endDate()">
    <input type="button" onclick="getdistribution()" value="确认">
<div class="other"></div>
</div>
</body>
</html>
