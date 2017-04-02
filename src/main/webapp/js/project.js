/**
 * Created by csdc01 on 2017/3/28.
 */

var projectInfos = "";
window.onload = getProjectData();
function getProjectData() {
    $.ajax({
        url:"/project/get/all",
        type:'GET',
        dataType:"json",
        success:function (data) {
            projectInfos = data;
        }
    });
}
$(function () {
    $("a").hover(
        function () {
            $(this).css("color", 'red');
        },
        function () {
            $(this).css("color", 'green');
        }
    )
    $(document).click(function () {
        $(".project").hide(); /////////////////////////
        $("#project_condition").val("");
    });
    $("#projectMessage").click(function (e) {
        e.stopPropagation();
    })
    $("#project").click(function (e) {
        $('.project').hide(); /////////////////////////////////
        // if (projectInfos == ""){
        //     $.ajax({
        //         url:"/project/get/all",
        //         type:'GET',
        //         dataType:"json",
        //         success:function (data) {
        //             projectInfos = data;
        //         }
        //     });
        // }
        listProjects(projectInfos, $("#projectList"));
        $("#projectMessage").show();
        $(".tag").hide();//////////////////
        e.stopPropagation();
    });
    $('.subtopProject').click(function (e) {
        $('.project').hide();
        listProjects(projectInfos, $(this).children("div").children("div"));
        $(this).children("div").show();
        $('.tag').hide();
        e.stopPropagation();
    });

})

function search(condition, ele) {
    var $projectList = $(ele).parent().children("div");
    if (condition != ""){
        var selected = [];
        $projectList.html("");
        for (var i = 0; i < projectInfos.length; i++){
            if (projectInfos[i].projectName.indexOf(condition) > -1){
                selected.push(projectInfos[i]);
            }
        }
        listProjects(selected, $projectList);
    }else {
        listProjects(projectInfos,$projectList);
    }

}
function listProjects(data, ele) {
    var projectName = "";
    var text = "";
    var $name = ele.parent().prev().children();
    for (var i = 0; i < data.length; i++){
        projectName = data[i].projectName;
        text = text + "<li><input type='button' class='projectName' value=\""+projectName+"\"></li>";
    }
    text = text + "<button class='create'>+Create new project</button>";
    ele.html(text);
    // onclick='createProject()'
    $('.projectName').click(function (e) {
        $name.html($(this).val());
        ele.parent().css("display",'none');
        ele.prev().val("");
        e.stopPropagation();
    });
    $('.create').click(function (e) {
        var projectName = prompt("Please input projectName:");
        for (var i = 0; i < projectInfos.length; i++){
            if (projectInfos[i].projectName == projectName)
            {
                alert("Project is exist");
                return;
            }
        }
        $.ajax({
            url:"/project/add",
            type:"POST",
            data:{projectName:projectName},
            dataType:"json",
            success:function(data){
                projectInfos.push(data);
            }
        });
        $name.html(projectName);
        ele.parent().css("display",'none');
        e.stopPropagation();
    });
}
