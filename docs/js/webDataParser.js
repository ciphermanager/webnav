var tempele = null, menu = null, submenu = null, id = null, href = null, subdiv = null, data = null;
for (menu in menus) {
    // menus加载
    tempele = document.createElement("a")
    // 侧边主菜单
    href = '#' + menus[menu][Object.keys(menus[menu])[0]];
    tempele.href = href;
    tempele.innerText = menu;
    document.getElementById("navmenu").appendChild(tempele);

    // 侧方菜单
    for (submenu in menus[menu]) {
        // submenu子菜单名
        subdiv = document.createElement("div");
        subdiv.id = menus[menu][submenu];
        // 子菜单容器
        tempele = document.createElement("span");
        // 子菜单
        tempele.innerText = submenu;
        subdiv.appendChild(tempele);
        document.getElementById("navdata").appendChild(subdiv);
    }
    // 数据栏菜单
}
for (data in datas) {
    // 将数据添加到容器
    tempele = document.createElement("a");
    tempele.href = datas[data]["url"];
    tempele.innerText = datas[data]["name"];
    tempele.target = "_blank";
    tempele.title = datas[data]["desc"];
    document.getElementById(datas[data]["parentid"]).appendChild(tempele);
}