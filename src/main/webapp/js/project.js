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
    $("a").on('hover',(
        function () {
            $(this).css("color", 'red');
        },
        function () {
            $(this).css("color", 'green');
        }
    ))
    $(document).on('click',function () {
        $(".project").hide();
        $("#project_condition").val("");
    });
    $("#projectMessage").on('click',function (e) {
        e.stopPropagation();
    })
    $("#project").on('click',function (e) {
        $('.project').hide(); /////////////////////////////////

        listProjects(projectInfos, $("#projectList"));
        $("#projectMessage").show();
        $(".tag").hide();//////////////////
        e.stopPropagation();
    });
    $('.subtopProject').on('click',function (e) {
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
    $('.projectName').on('click',function (e) {
        var project = $(this).val();
        var tag = $name.parent().parent().next().children().children().html();
        var content = $name.parent().parent().parent().children().children().val();
        var id = $name.parent().parent().parent().attr("id");
        $name.html(project);
        if (ele.attr("id") != "projectList"){
            modify(id, content, project, tag, $name.parent());
            $.ajax({
                url:"/item/modify/normal/"+id,
                data:{projectName:project},
                type:'POST',
                dataType:"json",
                success:function (data) {
                    itemInfos.push(data);
                }
            })
        }

        ele.parent().css("display",'none');
        ele.prev().val("");
        e.stopPropagation();
    });
    $('.create').on('click',function (e) {
        var id = $name.parent().parent().parent().attr("id");

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
                $name.html(projectName);
                if (ele.attr("id") != "projectList"){
                    for (var i = 0; i < itemInfos.length; i++){
                        if (itemInfos[i].itemId == id){
                            itemInfos.splice(i,1);
                        }
                    }
                    $.ajax({
                        url:"/item/modify/normal/"+id,
                        data:{projectName:projectName},
                        type:'POST',
                        dataType:"json",
                        success:function (data) {
                            itemInfos.push(data);
                        }
                    })
                }
            }
        });

        ele.parent().css("display",'none');
        e.stopPropagation();
    });
}
// function test1() {
//
//     $("#mustacher").html(Mustache.render($("#model").html(), itemInfos[0]));
// }
