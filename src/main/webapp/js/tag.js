
var tagInfos = "";
$(function () {
    $("#tag").hover(
        function () {
            $(this).css("color", 'red');
        },
        function () {
            $(this).css("color", 'green');
        }
    )
    $(document).click(function () {
        $("#tagMessage").remove();
    });


    $(".subTag").click(function (e) {
        var tm = $("<div class='tag' id='tagMessage' onclick='except(e)'> <input id='tag_condition' type='text' placeholder='Find Tag' style='height: 35px;font-size: 15px; width: 200px;' oninput='searchTag(this.value)'><div id='tagList' style='text-align: left; width: inherit'></div> </div>");
        // var parent = .parent();
        $(this).append(tm);
        $("#tagMessage").click(function (e) {
            e.stopPropagation();
        })
        if (tagInfos == ""){
            $.ajax({
                url:"/tag/get/all",
                type:'GET',
                dataType:"json",
                success:function (data) {
                    tagInfos = data;
                    listTags(data);

                }
            });
        }else {
            listTags(tagInfos);
        }
        $("#projectMessage").remove();
        e.stopPropagation();

    });

})
function selectTag(value) {
    $("#tag").html(value);
    $("#tagMessage").remove();
}
function searchTag(condition) {
        if (condition != ""){
            // dai xiu gai
            var tagName = "";
            var text = "";
            $("#tagList").html("");
            for (var i = 0; i < tagInfos.length; i++){
                if (tagInfos[i].tagName.indexOf(condition) > -1){
                    tagName = tagInfos[i].tagName;
                    text = text + "<li><button class='tagName' onclick='selectTag(\""+ tagName +"\")'>" + tagName + "</button></li>";
                }
            }
            text = text + "<button class='create' id='addTag'>+Create new tag</button>";
            $("#tagList").html(text);
        }else {
            listTags(tagInfos);
        }


}
function listTags(data) {

    var tagName = "";
    var text = "";
    $("#tagList").html("");
    for (var i = 0; i < data.length; i++){
        tagName = data[i].tagName;
        text = text + "<li><button class='tagName' onclick='selectTag(\""+ tagName +"\")'>" + tagName + "</button></li>";
    }
    text = text + "<button class='create' onclick='createTag()'>+Create new tag</button>";
    $("#tagList").html(text);
}
function createTag() {
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
            selectTag(data.tagName);
            tagInfos.push(data);
        }

    });
}
function except(element) {

    element.stopPropagation();
}