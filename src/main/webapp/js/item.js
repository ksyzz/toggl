/**
 * Created by csdc01 on 2017/3/28.
 */
function addItem() {
    var content = document.getElementById("content").value;
    var param = "content="+content;
    var projectName = document.getElementById("projectName").value;
    var tagName = document.getElementById("tagName").value;
    param = param + "&projectName=" + projectName;
    param = param + "&tagName=" + tagName;
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        }
    }
    xmlhttp.open("POST","/item/add",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(param);
}
