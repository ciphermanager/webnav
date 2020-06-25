// menus = {
//     菜单集合
//     "menu1": {
//         子菜单
//         "submenu": "id"
//         菜单名称与id对应
//     },
// }
// data=[
// {name:名称，url，路径，desc：简介，parentid：父id}，
// parentid 所在父类id
// ]

var menus = {
    "生活": {
        "常用": "common",
        "搜索引擎": "se",
        "娱乐":"entertain",
        "分享":"share"
    },
    "学习": {
        "数据库": "database",
        "学习网站": "learnweb",
        "课程推荐": "course",
        "考试": "exam"
    },
}
var datas = [
    { "name": "新华国际", "url": "http://www.xinhuanet.com/world/", "desc": "国际新闻资讯，标题党较少", "parentid": "common" },
    { "name": "国际在线国际频道", "url": "http://news.cri.cn/world", "desc": "国际新闻资讯，标题党较少", "parentid": "common" },
    { "name": "cctv13直播", "url": "https://tv.cctv.com/live/cctv13", "desc": "央视新闻直播", "parentid": "common" },
    { "name": "智慧校园", "url": "http://ehall.cqust.edu.cn/", "desc": "重庆科技学院用户常用", "parentid": "common" },
    
    { "name": "奥兰", "url": "http://xgbd.cqust.edu.cn:866/login.aspx", "desc": "重庆科技学院用户常用", "parentid": "common" },
    { "name": "教务系统", "url": "http://jwnew.cqust.edu.cn/eams/unifiedLogin.action", "desc": "重庆科技学院用户常用", "parentid": "common" },
    { "name": "数字资源", "url": "http://wxlib.cqust.edu.cn:8000/login1.fds", "desc": "重庆科技学院用户常用", "parentid": "common" },
    { "name": "课程中心", "url": "http://cqust.fysso.chaoxing.com/sso/cqust", "desc": "重庆科技学院用户常用", "parentid": "common" },

    { "name": "百度", "url": "https://www.baidu.com", "desc": "搜索引擎", "parentid": "se" },
    { "name": "必应", "url": "https://cn.bing.com", "desc": "搜索引擎", "parentid": "se" },
    { "name": "搜狗", "url": "https://www.sogou.com/", "desc": "搜索引擎", "parentid": "se" },
    { "name": "360搜索", "url": "https://www.so.com/", "desc": "搜索引擎", "parentid": "se" },

    { "name": "微博热搜", "url": "https://s.weibo.com/top/summary?cate=realtimehot", "desc": "微博实时搜索排行", "parentid": "entertain" },
    { "name": "百度实时热搜", "url": "http://top.baidu.com/buzz?b=1&fr=topindex", "desc": "百度实时搜索排行", "parentid": "entertain" },    
    { "name": "知乎热搜", "url": "https://www.zhihu.com/topsearch", "desc": "知乎实时搜索排行", "parentid": "entertain" },
    { "name": "哔哩哔哩", "url": "https://www.bilibili.com/", "desc": "b站", "parentid": "entertain" },
    { "name": "小柒影视导航", "url": "https://www.xiaoqiyouwu.ink/", "desc": "公众号：小柒有物，出品", "parentid": "entertain" },
    { "name": "老殁", "url": "http://www.laomo.me/", "desc": "老殁发布页", "parentid": "share" },
    { "name": "老殁日图", "url": "https://www.mpyit.com/html/ritu/", "desc": "老殁出品，每日图片分享", "parentid": "share" },
    { "name": "老殁加解密", "url": "https://www.laomo.me/cdn/html/gaoji", "desc": "老殁出品，文本加解密", "parentid": "share" },
    { "name": "殁飘遥", "url": "https://www.mpyit.com/", "desc": "老殁出品，sw分享", "parentid": "share" },
    { "name": "果核剥壳", "url": "https://www.ghpym.com/", "desc": "sw分享", "parentid": "share" },
    
{ "name": "PPT超级市场", "url": "http://ppt.sotary.com/web/wxapp/index.html", "desc": "免费ppt模板", "parentid": "share" },

    { "name": "畅想之星", "url": "http://cxstar.ntlib.org.cn/bookcd/index/index.do", "desc": "光盘数据库，速度尚可，免ip认证！", "parentid": "database" },
    { "name": "联图云光盘", "url": "http://discx.yuntu.io", "desc": "光盘数据库，免ip认证！", "parentid": "database" },
    
    { "name": "电子发烧友", "url": "http://www.elecfans.com/book/", "desc": "电子类图书在线阅读", "parentid": "learnweb" },
    { "name": "OSGeo中国", "url": "https://www.osgeo.cn/", "desc": "pythob GIS中文文档", "parentid": "learnweb" },
    { "name": "学堂在线", "url": "https://next.xuetangx.com/", "desc": "教学视频与课件", "parentid": "learnweb" },
    { "name": "中国大学mooc", "url": "https://www.icourse163.org", "desc": "教学视频与课件", "parentid": "learnweb" },
{ "name": "浙大课程攻略共享", "url": "https://github.com/QSCTech/zju-icicles", "desc": "github站点", "parentid": "learnweb" },
    { "name": "Chinadaily", "url": "http://www.chinadaily.com.cn/", "desc": "中国日报英语版，有app", "parentid": "learnweb" },
    { "name": "Magazinelib", "url": "https://magazinelib.com/", "desc": "外刊浏览，支持pdf下载", "parentid": "learnweb" },
    
    { "name": "工程力学", "url": "https://next.xuetangx.com/course/NEU08011001314/", "desc": "东北大学，教学视频与课件", "parentid": "course" },
    { "name": "大学物理上", "url": "https://www.icourse163.org/course/bjut-1205903801", "desc": "北工大，教学视频与课件", "parentid": "course" },
    { "name": "大学物理下", "url": "https://www.icourse163.org/course/bjut-1206559814", "desc": "北工大，教学视频与课件", "parentid": "course" },
    { "name": "液压传动", "url": "https://www.icourse163.org/course/HIT-1205915802?tid=1206206204", "desc": "哈工大，教学视频与课件", "parentid": "course" },
    { "name": "维普考试", "url": "http://vers.cqvip.com/", "desc": "考试试卷数据库，需ip认证", "parentid": "exam" },
    { "name": "维普考研", "url": "http://kaoyan.cqvip.com/", "desc": "考试试卷数据库，需ip认证", "parentid": "exam" },
]
