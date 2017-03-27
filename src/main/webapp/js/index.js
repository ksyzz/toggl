/**
 * Created by csdc01 on 2017/3/27.
 */
function getTags(url)
{
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
            var result = xmlhttp.responseText;
            var jstr = JSON.parse(result);
            var tagselect = document.getElementById("selectTag");
            tagselect.style.display = "block";
            var text = "<ul>";
            var tagName="";
            for (var i = 0; i < jstr.length; i++){
                tagName = jstr[i].tagName;
                text = text + "<li><button style='background-color: bisque;width: 100px' onclick='changeTag('"+tagName+"')'>"+tagName+"</button></li>";
            }
            text = text + "</ul>";
            document.getElementById("taglist").innerHTML=text;
        }
    }
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
}
function addItem() {
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    var projectName = document.getElementById("projectName").innerHTML;
    var tagName = document.getElementById("tagName").innerHTML;
    var content = document.getElementById("content").innerHTML;
    tagName = tagName == "Choose Tag" ? null : tagName;
    projectName = projectName == "Choose Project" ? null : projectName;
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            // 重定向 刷新item
        }
    }
    xmlhttp.open("POST","/item/add",true);
    xmlhttp.send("content=content&projectName=projectName&tagName=tagName");
}
function changeTag(tagName) {
    alert(tagName);
    var a = document.getElementById("tagName");
    a.innerHTML=tagName;
    var tagselect = document.getElementById("selectTag");
    tagselect.style.display = "none";
}
function displayTag() {
    var tagselect = document.getElementById("selectTag");
    tagselect.style.display = "block";

}