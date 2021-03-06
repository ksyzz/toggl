/**
 * Created by fengqian on 2017/4/4 0004.
*/
function startDate() {
    jeDate({
        dateCell:"#startTime",
        format:"YYYY-MM-DD hh:mm:ss",
        isinitVal:true,
        isTime:true, //isClear:false,

    })
}
function endDate() {

    jeDate({
        dateCell:"#endTime",
        format:"YYYY-MM-DD hh:mm:ss",
        isinitVal:true,
        isTime:true, //isClear:false,

    })
}

function getdistribution() {
    var start = $("#startTime").val();
    var end = $("#endTime").val();
    if (start != "" && end !=""){
        $.ajax({
            url:"/time/get/condition",
            data:{startTime:start, endTime:end},
            type:"GET",
            dataType:"json",
            success:function (data) {
                var info = {list:data};
                $(".other").html(Mustache.render($("#time_distribution").html(), info));
            }
        })
    }
}
$(function () {
    $(".a").hover(function () {
        $(this).css('color', 'white')
    }, function () {
        $(this).css('color', 'yellow')
    })
})

