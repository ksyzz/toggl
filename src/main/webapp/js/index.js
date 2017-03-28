/**
 * Created by csdc01 on 2017/3/27.
 */
var taginfos;
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
            var text = "";
            var tagName="";
            taginfos = jstr;
            document.getElementById("taglist").innerHTML="";
            for (var i = 0; i < jstr.length; i++){
                tagName = jstr[i].tagName;
                text = text + "<button style='background-color: bisque;width: 100px' onclick='changeTag(\""+tagName+"\")'>"+tagName+"</button><br/>";
            }
            text = text + "<button style='width: 100px;background-color: lawngreen'  onclick='createTag()'>Create new tag</button>";
            document.getElementById("taglist").innerHTML=text;
            document.createElement("taginfos");
            document.getElementById("taginfos").innerHTML = jstr;
        }
    }

    xmlhttp.open("GET",url,true);
    xmlhttp.send();
}
function changeTag(tagName) {
    var a = document.getElementById("tagName");
    a.innerHTML=tagName;
    var tagselect = document.getElementById("selectTag");
    tagselect.style.display = "none";
    document.getElementById("tagCondition").innerHTML="";
}
function createTag() {
    var xmlhttp;
    var url="/tag/add";
    var tagName = prompt("Please input tagName");
    if (tagName=="")
    {
        alert("Please input tagName");
        return;
    }
    for (var i = 0; i < taginfos.length; i++){
        if (taginfos[i].tagName == tagName)
        {
            alert("Tag is exist");
            return;
        }
    }
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for  IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        changeTag(tagName);

    }
    xmlhttp.open("POST",url,true);
    xmlhttp.send("tagName="+tagName);
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

