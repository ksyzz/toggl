/**
 * Created by csdc01 on 2017/3/28.
 */
// function addItem() {
//     var content = document.getElementById("content").value;
//     var param = "content="+content;
//     var projectName = document.getElementById("projectName").value;
//     var tagName = document.getElementById("tagName").value;
//     param = param + "&projectName=" + projectName;
//     param = param + "&tagName=" + tagName;
//     var xmlhttp;
//     if (window.XMLHttpRequest)
//     {// code for IE7+, Firefox, Chrome, Opera, Safari
//         xmlhttp=new XMLHttpRequest();
//     }
//     else
//     {// code for IE6, IE5
//         xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     xmlhttp.onreadystatechange=function()
//     {
//         if (xmlhttp.readyState==4 && xmlhttp.status==200)
//         {
//         }
//     }
//     xmlhttp.open("POST","/item/add",true);
//     xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//     xmlhttp.send(param);
// }
var itemInfos;
var timeInfos;
var timeCount = 0;
var timestamp;

window.onload = getAllItems();
window.onload = function () {
    $.ajax({
        url:"/time/get/all",
        type:"GET",
        dataType:"json",
        success:function (data) {
            timeInfos = data;
        }
    });

}
function getAllItems(){
    $.ajax({
        url:"/item/get/all",
        type:"GET",
        dataType:"json",
        success:function (data) {
            itemInfos = data;
            for (var i = 0; i < itemInfos.length; i++){
                var clock = getClockModel(itemInfos[i].time_length);
                $("#interval"+itemInfos[i].itemId).html(clock);
            }
        }
    })
}
function beginCount() {
    $("#countTime").everyTime("1s",function () {
        timeCount++;
        var clock = getClockModel(timeCount);
        $(this).html(clock);
    })
}
function stopCount() {
    $("#countTime").stopTime();
    timeCount = 0;
    var clock = getClockModel(timeCount);;
    $("#countTime").html(clock);

}
function getClockModel(count) {
   var text =  parseInt(count/3600)+":"+parseInt(count/600)+""+parseInt(count/60%10)+":"+parseInt(count%60/10)+""+count%10;
    return text;
}
function modify(id, content, project, tag) {
    for (var i = 0; i < itemInfos.length; i++){
        if (itemInfos[i].itemId == id){
            itemInfos.splice(i,1);
        }
    }
    for (var i = 0; i < itemInfos.length; i++){
        if (itemInfos[i].content == content && itemInfos[i].projectInfo.projectName == project && itemInfos[i].tagInfo.tagName==tag && itemInfos[i].itemId != id){
            $.ajax({
                url:"/item/modify/"+id+"/"+itemInfos[i].itemId,
                type:"DELETE",
                dataType:"json",
                success:function (data) {
                    timeInfos = data;
                }
            });
            $(this).parent().parent().remove();
            return;
        }
    }
}
$(function () {
    var start = "/image/start.jpg";
    var stop = "/image/stop.jpg";
    $(".itemtext").bind('change',function () {
        var id = $(this).parent().parent().attr("id");
        var content = $(this).val();
        var project = $(this).parent().next().children("p").children().html();
        var tag = $(this).parent().next().next().children("p").children().html();
        modify(id,content,project,tag);
        $.ajax({
            url:"/item/modify/normal/"+id,
            data:{content:content},
            type:'POST',
            dataType:"json",
            success:function (data) {
                itemInfos.push(data);
            }
        });
    })
    $(".delete").click(function () {
        var $parent = $(this).parent().parent();
        var id = $parent.attr("id");
        $.ajax({
            url:"/item/delete/"+id,
            type:"DELETE",
            success:function () {
                for (var i = 0; i < itemInfos.length; i++){
                    if (itemInfos[i].itemId == id){
                        itemInfos.splice(i,1);
                        break;
                    }
                }
            }
        });
        $parent.remove();


    })
    $(".continue").click(function () {
        if ( $("#img").attr("src") == stop){
            count();
        }
        var id = $(this).parent().parent().attr("id");
        for (var i = 0; i < itemInfos.length; i++){
            if (itemInfos[i].itemId == id){
                $("#content").val(itemInfos[i].content);
                $("#project").html(itemInfos[i].projectInfo.projectName);
                $("#tag").html(itemInfos[i].tagInfo.tagName);
            }
        }
        count();

    })
    $("#img").click(function () {
        count();
    })
    function count() {
        var now = $("#img").attr("src");
        if (now == start){
            timestamp = (new Date()).valueOf();
            beginCount();
        }else {
            var content = $("#content").val();
            content = content==""?"Add Task Description":content;
            var project = $("#project").html();
            var tag = $("#tag").html();
            var itemId = "";
            var length = timeCount;
            for (var i = 0; i < itemInfos.length; i++){
                if (itemInfos[i].content == content && itemInfos[i].projectInfo.projectName == project && itemInfos[i].tagInfo.tagName==tag){
                    itemId = itemInfos[i].itemId;
                    itemInfos[i]["time_length"] = length + itemInfos[i].time_length;
                    $("#interval"+itemId).html(getClockModel(itemInfos[i].time_length));
                    $.ajax({
                        url:"/time/add/"+itemId,
                        data:{startTime:timestamp, length:length},
                        type:"POST",
                        dataType:"json",
                        success:function (data) {
                            timeInfos.push(data);
                        }
                    })
                    break;
                }
            }
            if (itemId == ""){
                $.ajax({
                    url:"/item/add",
                    type:"POST",
                    data:{content:content, projectName:project, tagName:tag},
                    dataType:"json",
                    success:function (data) {
                        data["time_length"]= length;
                        itemInfos.push(data);
                        itemId = data.itemId;
                        $.ajax({
                            url:"/time/add/"+itemId,
                            data:{startTime:timestamp, length:length},
                            type:"POST",
                            dataType:"json",
                            success:function (data) {
                                timeInfos.push(data);
                            }
                        })
                    }
                })
            }
            stopCount();
            $("#content").val("");
            $("#project").html("+Project/task");
            $("#tag").html("+Tag");
        }
        var change = now == start ? stop :start;
        $("#img").attr('src', change);
    }
})