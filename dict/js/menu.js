

var m = [
    {id:-1,name:"index",icon:"icon-home",remark:"我的"},
    {id:1,name:"org",icon:"icon-tasks",remark:"机构1"},
    {id:2,name:"org",icon:"icon-tasks",remark:"机构2"},
    {id:3,name:"org",icon:"icon-tasks",remark:"机构3"},
    {id:4,name:"org",icon:"icon-tasks",remark:"机构4"},
    {id:5,name:"org",icon:"icon-tasks",remark:"机构5"}
];

function getMenu() {

    return m.map(function (item) {
        return `
          <li><a id="menu_${item.id}" href='javascript:menuClick(${JSON.stringify(item)});' class="menu"><i class="${item.icon}"></i>${item.remark}</a></li>
        `
    });
}


function menuClick(menu){
    console.log(menu)
    var curr = $(".menu,.open,a")
    if (curr.length >0 ){
        curr.removeClass("open")
    }
    $(`#menu_${menu.id}`).addClass("open")
    pjax(menu.name,menu.id)
}


$(function () {
    $("#nav").html(getMenu());
    menuClick(m[0]);
});