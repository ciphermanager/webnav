var id = null;
for (var menu in menus) {

    // menu子菜单的名字
    var divTag = document.createElement("div");
    // 子菜单的顶部div
    var aTag = document.createElement("a");
    // 子菜单的a标签
    // a标签属性设置
    aTag.href = "javascript:void(0)";
    aTag.addEventListener("click",
        function () {
            // this当前元素
            switchs(this);
        }
    );
    aTag.innerText = menu;
    divTag.appendChild(aTag);
    var ulTag = document.createElement("ul");
    // 创建装sub菜单的容器

    for (var id in menus[menu]) {
        // submenu二级菜单的名字

        submenu = menus[menu][id];

        var liTag = document.createElement("li");
        // 装a标签的容器

        var subaTag = document.createElement("a");
        subaTag.innerText = submenu;
        subaTag.href = "#" + id;
        liTag.appendChild(subaTag);
        ulTag.appendChild(liTag);
        console.log(menu, submenu);
    }

    divTag.appendChild(ulTag);
    document.querySelector(".menus").appendChild(divTag);
}

// 解析数据到导航
for (var item = 0; item < datas.length; item++) {
    // 判断子菜单是否创建
    if (document.getElementById(datas[item]["parentid"]) == null) {
        // 子导航主要容器装 菜单与导航数据
        var mdivTag = document.createElement("div");
        // 装菜单的a标签
        var pTag = document.createElement("p");
        // 菜单的a标签
        var aTag = document.createElement("a");
        aTag.id = datas[item]["parentid"];
        for (menu in menus) {
            for (id in menus[menu]) {

                if (id == datas[item]["parentid"]) {
                    aTag.innerText = menus[menu][id];
                }
            }

        }
        aTag.addEventListener("click", function () { wrap(".menus") }, false);
        aTag.href = "javascript:void(0)";
        aTag.target = "_blank";
        pTag.appendChild(aTag);
        mdivTag.appendChild(pTag);

        document.querySelector(".content").appendChild(mdivTag);
    }
    // 装导航数据
    var ddiv = document.createElement("div");
    // 装链接

    var urlTag = document.createElement("a");
    // 装简介
    var descTag = document.createElement("div");
    urlTag.href = datas[item]["url"];
    urlTag.innerText = datas[item]["name"];
    descTag.innerText = datas[item]["desc"];
    urlTag.appendChild(descTag);
    ddiv.appendChild(urlTag);
    ddiv.className = "ddiv";

    document.getElementById(datas[item]["parentid"]).parentNode.parentNode.appendChild(ddiv);
}