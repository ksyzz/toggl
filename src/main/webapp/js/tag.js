/**
 * Created by csdc01 on 2017/3/28.
 */

var tagInfos = "";
window.onload = getTagData();
function getTagData() {
    $.ajax({
        url:"/tag/get/all",
        type:'GET',
        dataType:"json",
        success:function (data) {
            tagInfos = data;
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
        $(".tag").hide(); /////////////////////////
        $("#tag_condition").val("");
    });
    $("#tagMessage").click(function (e) {
        e.stopPropagation();
    })
    $("#tag").click(function (e) {
        $('.tag').hide(); /////////////////////////////////
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
        listTags(tagInfos, $("#tagList"));
        $("#tagMessage").show();
        $(".project").hide();//////////////////
        e.stopPropagation();
    });
    $(".subtopTag").on('click',function (e) {
        $('.tag').hide();
        listTags(tagInfos, $(this).children("div").children("div"));
        $(this).children("div").show();
        $('.project').hide();
        e.stopPropagation();
    });


})

function searchTag(condition, ele) {
    var $tagList = $(ele).parent().children("div");
    if (condition != ""){
        var selected = [];
        $tagList.html("");
        for (var i = 0; i < tagInfos.length; i++){
            if (tagInfos[i].tagName.indexOf(condition) > -1){
                selected.push(tagInfos[i]);
            }
        }
        listTags(selected, $tagList);
    }else {
        listTags(tagInfos,$tagList);
    }

}
function listTags(data, ele) {
    var tagName = "";
    var text = "";
    var $name = ele.parent().prev().children();
    var id = ele.parent().parent().attr("id");
    for (var i = 0; i < data.length; i++){
        tagName = data[i].tagName;
        text = text + "<li><input type='button' class='tagName' value=\""+tagName+"\"></li>";
    }
    text = text + "<button class='create'>+Create new tag</button>";
    ele.html(text);
    // onclick='createProject()'
    $('.tagName').click(function (e) {
        var tag = $(this).val();
        var project = $name.parent().parent().prev().children().children().html();
        var content = $name.parent().parent().parent().children().children().val();
        $name.html(tag);
        modify(id, content, project, tag);
        $.ajax({
            url:"/item/modify/normal/"+id,
            data:{tagName:tag},
            type:"POST",
            dataType:"json",
            success:function (data) {
                itemInfos.push(data);
            }
        })
        ele.parent().css("display",'none');
        ele.prev().val("");
        e.stopPropagation();
    });
    $('.create').click(function (e) {
        var tagName = prompt("Please input tagName:");
        for (var i = 0; i < tagInfos.length; i++){
            if (tagInfos[i].tagName == tagName)
            {
                alert("Tag is exist");
                return;
            }
        }
        $.ajax({
            url:"/tag/add",
            type:"POST",
            data:{tagName:tagName},
            dataType:"json",
            success:function(data){
                tagInfos.push(data);
            }
        });
        $name.html(tagName);
        ele.parent().css("display",'none');
        e.stopPropagation();
    });
}
