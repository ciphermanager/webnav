// menus = {
//     菜单集合
//     "menu1": {
//         子菜单
//         "id":"submenu"
//         菜单名称与id对应
//     },
// }
// data=[
// {name:名称，url，路径，desc：简介，parentid：父id}，
// parentid 所在父类id
// ]

var menus = {
    "生活": {
        "news": "资讯",
        "school": "学校常用",
        "live": "直播",
        "entertain": "娱乐",
        "share": "分享",
    },
    "学习": {
        "database": "数据库",
        "learnweb": "学习网站",
        "course": "课程推荐",
        "exam": "考试",
    },
}
var datas = [
    { "name": "新华国际", "url": "http://www.xinhuanet.com/world/", "desc": "国际新闻", "parentid": "news" },
    { "name": "国际在线", "url": "http://news.cri.cn/world", "desc": "国际新闻", "parentid": "news" },
    { "name": "cctv13直播", "url": "https://tv.cctv.com/live/cctv13", "desc": "央视新闻直播", "parentid": "live" },
    { "name": "cctv记录直播", "url": "https://tv.cctv.com/live/cctvjilu", "desc": "央视纪录频道", "parentid": "live" },
    { "name": "智慧校园", "url": "http://ehall.cqust.edu.cn/", "desc": "重庆科技学院用户常用", "parentid": "school" },
    { "name": "奥兰", "url": "http://xgbd.cqust.edu.cn:866/login.aspx", "desc": "重庆科技学院用户常用", "parentid": "school" },
    { "name": "教务系统", "url": "http://jwnew.cqust.edu.cn/eams/unifiedLogin.action", "desc": "重庆科技学院用户常用", "parentid": "school" },
    { "name": "数字资源", "url": "http://wxlib.cqust.edu.cn:8000/login1.fds", "desc": "重庆科技学院用户常用", "parentid": "school" },
    { "name": "课程中心", "url": "http://cqust.fysso.chaoxing.com/sso/cqust", "desc": "重庆科技学院用户常用", "parentid": "school" },
    { "name": "微博热搜", "url": "https://s.weibo.com/top/summary?cate=realtimehot", "desc": "微博实时搜索排行", "parentid": "entertain" },
    { "name": "知乎热搜", "url": "https://www.zhihu.com/topsearch", "desc": "知乎实时搜索排行", "parentid": "entertain" },
    { "name": "哔哩哔哩", "url": "https://www.bilibili.com/", "desc": "b站", "parentid": "entertain" },
    { "name": "小柒影视导航", "url": "https://www.xiaoqiyouwu.ink/", "desc": "公众号：小柒有物，出品", "parentid": "entertain" },
    { "name": "老殁", "url": "http://www.laomo.me/", "desc": "老殁发布页", "parentid": "share" },
    { "name": "老殁日图", "url": "https://www.mpyit.com/html/ritu/", "desc": "老殁出品，每日图片分享", "parentid": "share" },
    { "name": "老殁加解密", "url": "https://www.laomo.me/cdn/html/gaoji", "desc": "老殁出品，文本加解密", "parentid": "share" },
    { "name": "殁飘遥", "url": "https://www.mpyit.com/", "desc": "老殁出品，sw分享", "parentid": "share" },
    { "name": "果核剥壳", "url": "https://www.ghpym.com/", "desc": "sw分享", "parentid": "share" },
    { "name": "时宜搜书", "url": "https://www.shiyisoushu.com/", "desc": "电子书搜索", "parentid": "share" },
    { "name": "鸠摩搜索", "url": "https://www.jiumodiary.com/", "desc": "电子书搜索", "parentid": "share" },
    { "name": "PPT超级市场", "url": "http://ppt.sotary.com/web/wxapp/index.html", "desc": "免费ppt模板", "parentid": "share" },
    { "name": "极简简历", "url": "https://www.polebrief.com/index", "desc": "在线简历制作工具", "parentid": "share" },
    { "name": "畅想之星", "url": "http://cxstar.ntlib.org.cn/bookcd/index/index.do", "desc": "光盘数据库，速度尚可，免ip认证！", "parentid": "database" },
    { "name": "联图云光盘", "url": "http://discx.yuntu.io", "desc": "光盘数据库，免ip认证！", "parentid": "database" },
    { "name": "电子发烧友", "url": "http://www.elecfans.com/book/", "desc": "电子类图书在线阅读", "parentid": "learnweb" },
    { "name": "OSGeo中国", "url": "https://www.osgeo.cn/", "desc": "pythob GIS中文文档", "parentid": "learnweb" },
    { "name": "学堂在线", "url": "https://next.xuetangx.com/", "desc": "教学视频与课件", "parentid": "learnweb" },
    { "name": "中国大学mooc", "url": "https://www.icourse163.org", "desc": "教学视频与课件", "parentid": "learnweb" },
    { "name": "浙大课程攻略共享", "url": "https://github.com/QSCTech/zju-icicles", "desc": "github站点", "parentid": "learnweb" },
    { "name": "Chinadaily", "url": "http://www.chinadaily.com.cn/", "desc": "中国日报英语版，有app", "parentid": "learnweb" },
    { "name": "Magazinelib", "url": "https://magazinelib.com/", "desc": "外刊浏览，支持pdf下载", "parentid": "learnweb" },
    { "name": "水滴英语", "url": "https://www.adreep.cn/", "desc": "英语作文素材", "parentid": "learnweb" },
    { "name": "书栈网", "url": "https://www.bookstack.cn/", "desc": "计算机类开源书籍分享", "parentid": "learnweb" },
    { "name": "语雀", "url": "https://www.yuque.com/explore/headlines", "desc": "多人合作文档编辑，可共享，用于知识分享，阿里出品", "parentid": "learnweb" },
    { "name": "微软爱写作", "url": "https://aimwriting.mtutor.engkoo.com/", "desc": "英语写作批改工具，微软出品，微信扫码登陆", "parentid": "learnweb" },
    { "name": "traceparts", "url": "https://www.traceparts.com/zh", "desc": "3D 零件库，在线选型,数百万计 3D 、2D CAD 文件,免费提供,多种格式，需注册", "parentid": "learnweb" },
    { "name": "工程力学", "url": "https://next.xuetangx.com/course/NEU08011001314/", "desc": "东北大学，教学视频与课件", "parentid": "course" },
    { "name": "大学物理上", "url": "https://www.icourse163.org/course/bjut-1205903801", "desc": "北工大，教学视频与课件", "parentid": "course" },
    { "name": "大学物理下", "url": "https://www.icourse163.org/course/bjut-1206559814", "desc": "北工大，教学视频与课件", "parentid": "course" },
    { "name": "液压传动", "url": "https://www.icourse163.org/course/HIT-1205915802?tid=1206206204", "desc": "哈工大，教学视频与课件", "parentid": "course" },
    { "name": "维普考试", "url": "http://vers.cqvip.com/", "desc": "考试试卷数据库，需ip认证", "parentid": "exam" },
    { "name": "维普考研", "url": "http://kaoyan.cqvip.com/", "desc": "考试试卷数据库，需ip认证", "parentid": "exam" },
]
