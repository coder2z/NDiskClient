
var pjaxCache = {}


function pjax(name,param) {

    if (!pjaxCache[name]) {
        $.ajax({
            type : "get",
            url : `pjax/${name}.html`,
            data:param,
            async : false,
            success : function(data){
                pjaxCache[name] = data;
            }
        });
    }
    $("#pjax-container").html(pjaxCache[name])
}
