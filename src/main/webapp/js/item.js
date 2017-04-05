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
    var text =  parseInt(count/3600)+":"+parseInt(count%3600/600)+""+parseInt(count%3600/60%10)+":"+parseInt(count%60/10)+""+count%10;
    return text;
}
function modify(id, content, project, tag, ele) {
    var identity  = "";
    for (var i = 0; i < itemInfos.length; i++){
        if (itemInfos[i].itemId == id){
            identity = itemInfos[i].time_length;
            itemInfos.splice(i,1);
        }
    }
    for (var i = 0; i < itemInfos.length; i++){
        if (itemInfos[i].content == content && itemInfos[i].projectInfo.projectName == project && itemInfos[i].tagInfo.tagName==tag && itemInfos[i].itemId != id){
            itemInfos[i]["time_length"] += identity;
            $("#interval"+itemInfos[i].itemId).html(getClockModel(itemInfos[i].time_length));
            $.ajax({
                url:"/item/modify/"+id+"/"+itemInfos[i].itemId,
                type:"DELETE",
                dataType:"json",
                success:function (data) {
                    timeInfos = data;
                }
            });
            ele.parent().parent().remove();
            return;
        }
    }
}
$(function () {
    var start = "/image/start.jpg";
    var stop = "/image/stop.jpg";
    $("#confirm").click(function () {
        var endDate = $("#endDate").val();
        var startDate = $("#beginDate").val();
        if (endDate != "" && startDate != ""){
            var content = $("#content").val();
            content = content==""?"Add Task Description":content;
            var project = $("#project").html();
            var tag = $("#tag").html();
            var itemId = "";
            var stamps =  new Date(startDate.replace(/-/g,'/')).getTime();
            var stampe =  new Date(endDate.replace(/-/g,'/')).getTime();
            var stamp = stampe>stamps?stamps:stampe;
            var length = Math.abs(stampe-stamps)/1000;
            addTime(itemId,content, project, tag, length, stamp);
        }

    })
    $("#beginDate").on('click', function () {
        jeDate({
            dateCell:"#beginDate",
            format:"YYYY-MM-DD hh:mm:ss",
            isinitVal:true,
            isTime:true, //isClear:false,

        })
    })
    $("#endDate").on('click', function () {
        jeDate({
            dateCell:"#endDate",
            format:"YYYY-MM-DD hh:mm:ss",
            isinitVal:true,
            isTime:true, //isClear:false,

        })
    })
    $('.auto').on('click', function () {
        $("#auto").show();
        $("#manual").hide();
    })
    $('.manual').on('click', function () {
        $("#auto").hide();
        $("#manual").show();
    })
    $(".listTime").on('click',function (e) {
        var value = $(this).val();
        if (value == "show"){
            $(this).val("hide");
            var itemId = $(this).parent().parent().attr("id");
            var text = "";
            var startDate;
            var endDate;
            for (var i = 0; i < timeInfos.length; i++){
                if (timeInfos[i].itemId == itemId){
                    startDate = new Date(timeInfos[i].startTime);
                    startDate = startDate.getMonth()+1+"-"+startDate.getDate()+" "+startDate.getHours()+":"+startDate.getMinutes()+":"+startDate.getSeconds();
                    endDate = new Date(timeInfos[i].endTime);
                    endDate = endDate.getMonth()+1+"-"+endDate.getDate()+" "+endDate.getHours()+":"+endDate.getMinutes()+":"+endDate.getSeconds();
                    text=text+"<div class='time'><div class='subtime'>"+startDate+"</div><div class='subtime'>"+endDate+"</div><div class='subtime'>"+getClockModel(timeInfos[i].length)+"</div> </div>"
                }
            }
            $(this).parent().parent().next().show();
            $(this).parent().parent().next().html(text);
        }else{
            $(this).parent().parent().next().hide();
            $(this).val("show");
        }

    })
    $(".itemtext").bind('change',function () {
        var id = $(this).parent().parent().attr("id");
        var content = $(this).val();
        content = content==""?"Add Task Description":content;
        var project = $(this).parent().next().children("p").children().html();
        var tag = $(this).parent().next().next().children("p").children().html();
        modify(id,content,project,tag, $(this));
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

            }
        });
        for (var i = 0; i < itemInfos.length; i++){
            if (itemInfos[i].itemId == id){
                itemInfos.splice(i,1);
            }
        }
        $parent.next().remove();
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
            addTime(itemId, content, project, tag, length, timestamp);
            stopCount();
            $("#content").val("");
            $("#project").html("+Project/task");
            $("#tag").html("+Tag");
        }
        var change = now == start ? stop :start;
        $("#img").attr('src', change);
    }
})
function addTime(itemId, content, project, tag, length, timestamp) {
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
                $("#itemList").append(Mustache.render($("#model").html(), data));
                $("#interval"+itemId).html(getClockModel(data.time_length));
                $('.subtopProject').on('click',function (e) {
                    $('.project').hide();
                    listProjects(projectInfos, $(this).children("div").children("div"));
                    $(this).children("div").show();
                    $('.tag').hide();
                    e.stopPropagation();
                });
                $(".subtopTag").on('click',function (e) {
                    $('.tag').hide();
                    listTags(tagInfos, $(this).children("div").children("div"));
                    $(this).children("div").show();
                    $('.project').hide();
                    e.stopPropagation();
                });
                $(".itemtext").bind('change',function () {
                    var id = $(this).parent().parent().attr("id");
                    var content = $(this).val();
                    content = content==""?"Add Task Description":content;
                    var project = $(this).parent().next().children("p").children().html();
                    var tag = $(this).parent().next().next().children("p").children().html();
                    modify(id,content,project,tag, $(this));
                    $.ajax({
                        url:"/item/modify/normal/"+id,
                        data:{content:content},
                        type:'POST',
                        dataType:"json",
                        success:function (data) {
                            itemInfos.push(data);
                        }
                    });
                });
                $(".delete").click(function () {
                    var $parent = $(this).parent().parent();
                    var id = $parent.attr("id");
                    $.ajax({
                        url:"/item/delete/"+id,
                        type:"DELETE",
                        success:function () {

                        }
                    });
                    for (var i = 0; i < itemInfos.length; i++){
                        if (itemInfos[i].itemId == id){
                            itemInfos.splice(i,1);
                            break;
                        }
                    }
                    $parent.next().remove();
                    $parent.remove();


                });
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

                });
                $(".dylist").on('click', function (e) {
                    var value = $(this).val();
                    if (value == "show"){
                        $(this).val("hide");
                        $(this).parent().parent().next().show();
                        var itemId = $(this).parent().parent().attr("id");
                        var text = "";
                        var startDate;
                        var endDate;
                        for (var i = 0; i < timeInfos.length; i++){
                            if (timeInfos[i].itemId == itemId){
                                startDate = new Date(timeInfos[i].startTime);
                                startDate = startDate.getMonth()+1+"-"+startDate.getDate()+" "+startDate.getHours()+":"+startDate.getMinutes()+":"+startDate.getSeconds();
                                endDate = new Date(timeInfos[i].endTime);
                                endDate = endDate.getMonth()+1+"-"+endDate.getDate()+" "+endDate.getHours()+":"+endDate.getMinutes()+":"+endDate.getSeconds();
                                text=text+"<div class='time'><div class='subtime'>"+startDate+"</div><div class='subtime'>"+endDate+"</div><div class='subtime'>"+getClockModel(timeInfos[i].length)+"</div> </div>"
                            }
                        }
                        $(this).parent().parent().next().html(text);
                    }else{
                        $(this).parent().parent().next().hide();
                        $(this).val("show");
                    }

                })
                $("a").hover(function () {
                        $(this).css("color", 'red');
                    },
                    function () {
                        $(this).css("color", 'green');
                    }
                )
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
}