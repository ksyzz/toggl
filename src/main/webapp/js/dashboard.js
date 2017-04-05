/**
 * Created by fengqian on 2017/4/4 0004.
*/
function startDate() {
laydate({
    elem: '#startTime'
})
}
function endDate() {
laydate({
    elem: '#endTime'
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


