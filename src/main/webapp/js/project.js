/**
 * Created by csdc01 on 2017/3/28.
 */
/*待修改*/
var projectinfos;
function getProjects(url) {
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
            var projectselect = document.getElementById("selectProject");
            projectselect.style.display = "block";
            var text = "";
            var projectName="";
            projectinfos=jstr;
            document.getElementById("projectlist").innerHTML="";
            for (var i = 0; i < jstr.length; i++){
                projectName = jstr[i].projectName;
                text = text + "<button style='background-color: bisque;width: 100px' onclick='changeProject(\""+projectName+"\")'>"+projectName+"</button><br/>";
            }
            text = text + "<button style='width: 100px;background-color: lawngreen'  onclick='createProject()'>Create new Project</button>";
            document.getElementById("projectlist").innerHTML=text;
            // taginfos=jstr;
            // document.createElement("taginfos");
            // document.getElementById("taginfos").innerHTML = jstr;
        }
    }

    xmlhttp.open("GET",url,true);
    xmlhttp.send();
}
function changeProject(projectName) {
    var a = document.getElementById("projectName");
    a.innerHTML=projectName;
    var select = document.getElementById("selectProject");
    select.style.display = "none";
    document.getElementById("projectCondition").innerHTML="";
}
function createProject() {
    var xmlhttp;
    var url="/project/add";
    var projectName = prompt("Please input projectName");
    if (projectName=="")
    {
        alert("Please input projectName");
        return;
    }
    for (var i = 0; i < projectinfos.length; i++){
        if (projectinfos[i].projectName == projectName)
        {
            alert("Project is exist");
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
        changeProject(projectName)

    }
    xmlhttp.open("POST",url,true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("projectName="+projectName);
}
