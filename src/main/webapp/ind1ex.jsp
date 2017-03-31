<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>toggl</title>
    <%--bootstrap 配置--%>
    <link rel="stylesheet" href="css/toggl.css">
    <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <%--<script src="js/tag.js" type="text/javascript"></script>--%>
    <%--<script src="js/project.js" type="text/javascript"></script>--%>
    <script src="js/jQuery3.2.js" type="text/javascript"></script>
    <script type="text/javascript">
        $('.list').on('click', function (){
            alert($(this).val());
            this.val("qqqq");
        });
        $('.list').css("color", "red");
    </script>
</head>
<body>
    <a class="list" >test</a>
</body>
</html>