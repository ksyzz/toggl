
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Dashboard</title>
    <script src="../js/jQuery3.2.js" type="text/javascript"></script>
    <script src="../js/dashboard.js" type="text/javascript"></script>
    <link rel="stylesheet" href="../css/toggl.css" type="text/css">
    <script src="../js/mustache.js" type="text/javascript"></script>
    <script type="text/javascript" src="../jedate/jedate.js"></script>

    <script type="text/html" id="time_distribution">
        <table >
            <tr>
                <th>Project</th>
                <th>Time</th>
            </tr>
            <tbody>
            {{#list}}
            <tr>
                <td style="background-color: lawngreen;">{{projectName}}</td>
                <td style="background-color: peachpuff">{{length}}</td>
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
    <input type="button" onclick="getdistribution()" style="border:none; height: 50px;background-color: #ECF4FB" value="确认">
    <div style="font-size: 20px">Statistic:</div>
<div class="other"></div>
</div>
</body>
</html>
