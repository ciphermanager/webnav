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
        "tools": "实用工具",
    },
    "学习": {
        "ebook": "电子书",
        "CDDB": "光盘数据库",
        "learnweb": "学习网站",
        "course": "课程推荐",
        "exam": "考试",
    },
    "综合": {
        "ys168": "永硕E盘",
        "onav": "导航",
    }
}
var datas = [

    { "name": "国际在线", "url": "http://news.cri.cn/world", "desc": "国际新闻", "parentid": "news" },
    { "name": "Chinadaily", "url": "http://www.chinadaily.com.cn/", "desc": "中国日报英语版，有app", "parentid": "news" },
    { "name": "新华国际", "url": "http://www.xinhuanet.com/world/", "desc": "国际新闻", "parentid": "news" },

    { "name": "cctv13直播", "url": "https://tv.cctv.com/live/cctv13", "desc": "央视新闻直播", "parentid": "live" },
    { "name": "cctv记录直播", "url": "https://tv.cctv.com/live/cctvjilu", "desc": "央视纪录频道", "parentid": "live" },

    { "name": "智慧校园", "url": "http://ehall.cqust.edu.cn/", "desc": "重庆科技学院用户常用", "parentid": "school" },
    { "name": "重庆科技学院", "url": "http://www.cqust.edu.cn/", "desc": "重庆科技学院官网", "parentid": "school" },

    { "name": "微博热搜", "url": "https://s.weibo.com/top/summary?cate=realtimehot", "desc": "微博实时搜索排行", "parentid": "entertain" },
    { "name": "知乎热搜", "url": "https://www.zhihu.com/topsearch", "desc": "知乎实时搜索排行", "parentid": "entertain" },
    { "name": "哔哩哔哩", "url": "https://www.bilibili.com/", "desc": "b站", "parentid": "entertain" },

    { "name": "老殁日图", "url": "https://www.mpyit.com/html/ritu/", "desc": "老殁出品", "parentid": "entertain" },

    { "name": "老殁", "url": "http://www.laomo.me/", "desc": "老殁发布页", "parentid": "share" },

    { "name": "殁飘遥", "url": "https://www.mpyit.com/", "desc": "老殁出品，sw分享", "parentid": "share" },
    { "name": "果核剥壳", "url": "https://www.ghpym.com/", "desc": "sw分享", "parentid": "share" },

    { "name": "时宜搜书", "url": "https://www.shiyisoushu.com/", "desc": "电子书搜索", "parentid": "ebook" },
    { "name": "熊猫搜书", "url": "https://ebook.huzerui.com", "desc": "电子书聚合搜索", "parentid": "ebook" },
    { "name": "鸠摩搜索", "url": "https://www.jiumodiary.com/", "desc": "电子书搜索", "parentid": "ebook" },
    { "name": "LoreFree", "url": "https://ebook2.lorefree.com/", "desc": "去中心化免费电子书分享社区", "parentid": "ebook" },
    { "name": "书享家", "url": "http://shuxiangjia.cn/", "desc": "电子书导航站", "parentid": "ebook" },

    { "name": "ctFile-chinjua电子书合集", "url": "http://n802.com/dir/7823036-11625293-090948", "desc": "已分类", "parentid": "ebook" },
    { "name": "电子发烧友", "url": "http://www.elecfans.com/book/", "desc": "电子类图书在线阅读", "parentid": "ebook" },
    { "name": "OSGeo中国", "url": "https://www.osgeo.cn/", "desc": "python 、GIS中文文档", "parentid": "ebook" },
    { "name": "书栈网", "url": "https://www.bookstack.cn/", "desc": "计算机类开源书籍下载与在线阅读", "parentid": "ebook" },

    { "name": "51CTO下载中心", "url": "https://down.51cto.com/", "desc": "计算机类书籍免费下载与共享", "parentid": "ebook" },

    { "name": "微盘", "url": "https://vdisk.weibo.com/", "desc": "电子书免费下载与共享，新浪出品", "parentid": "ebook" },
    { "name": "语雀", "url": "https://www.yuque.com/explore/headlines", "desc": "多人写作，可知识分享，阿里出品", "parentid": "ebook" },
    
    //{ "name": "小书匠", "url": "http://markdown.xiaoshujiang.com/", "desc": "在线markdown,支持webdav,github等存储", "parentid": "ebook" },
    //{ "name": "浙大课程攻略共享", "url": "https://github.com/QSCTech/zju-icicles", "desc": "github站点", "parentid": "ebook" },

    { "name": "畅想之星", "url": "http://cxstar.ntlib.org.cn/bookcd/index/index.do", "desc": "光盘数据库，速度尚可，免ip认证！", "parentid": "CDDB" },
    { "name": "联图云光盘", "url": "http://discx.yuntu.io", "desc": "光盘数据库，免ip认证！", "parentid": "CDDB" },
    { "name": "博云光盘", "url": "http://210.32.137.198/index1.jsp", "desc": "光盘数据库，免ip认证！", "parentid": "CDDB" },

    { "name": "学堂在线", "url": "https://next.xuetangx.com/", "desc": "教学视频与课件", "parentid": "learnweb" },
    { "name": "中国大学mooc", "url": "https://www.icourse163.org", "desc": "教学视频与课件", "parentid": "learnweb" },

    { "name": "Magazinelib", "url": "https://magazinelib.com/", "desc": "外刊浏览，支持pdf下载", "parentid": "learnweb" },
    { "name": "水滴英语", "url": "https://www.adreep.cn/", "desc": "英语作文素材", "parentid": "learnweb" },

    { "name": "友谊", "url": "http://www.01ue.com/--tutorial-index.html", "desc": "英语语法，IT技术，古籍经典在线阅读", "parentid": "learnweb" },
    { "name": "微软爱写作", "url": "https://aimwriting.mtutor.engkoo.com/", "desc": "英语写作批改工具，微软出品", "parentid": "tools" },
    { "name": "百度脑图", "url": "https://naotu.baidu.com/home", "desc": "web版思维导图工具，免费", "parentid": "tools" },
    { "name": "老殁加解密", "url": "https://www.laomo.me/cdn/html/gaoji", "desc": "老殁出品，字符串加解密", "parentid": "tools" },
    { "name": "traceparts", "url": "https://www.traceparts.com/zh", "desc": "零件在线选型,免费,多种格式", "parentid": "tools" },
    { "name": "PPT超级市场", "url": "http://ppt.sotary.com/web/wxapp/index.html", "desc": "免费ppt模板", "parentid": "tools" },
    { "name": "极简简历", "url": "https://www.polebrief.com/index", "desc": "在线简历制作工具", "parentid": "tools" },

    { "name": "工程力学", "url": "https://next.xuetangx.com/course/NEU08011001314", "desc": "学堂在线,东北大学,李英梅", "parentid": "course" },
    { "name": "大学物理上", "url": "https://www.icourse163.org/course/bjut-1205903801", "desc": "中国大学MOOC,北工大,杨红卫", "parentid": "course" },
    { "name": "大学物理下", "url": "https://www.icourse163.org/course/bjut-1206559814", "desc": "中国大学MOOC,北工大,杨红卫", "parentid": "course" },
    { "name": "液压传动", "url": "https://www.icourse163.org/course/HIT-1205915802", "desc": "中国大学MOOC,哈工大,姜继海", "parentid": "course" },
    { "name": "数据结构", "url": "https://www.icourse163.org/course/ZJU-93001", "desc": "中国大学MOOC,浙大,陈越", "parentid": "course" },

    
    { "name": "维普考试", "url": "http://sjk06.e-library.com.cn/UI/index.aspx", "desc": "试卷题库，暂免ip认证", "parentid": "exam" },
    { "name": "维普考试", "url": "http://vers.cqvip.com/", "desc": "试卷题库，需ip认证", "parentid": "exam" },
    { "name": "维普考研", "url": "http://kaoyan.cqvip.com/", "desc": "试卷题库，需ip认证", "parentid": "exam" },

    //{ "name": "2021考研公共课", "url": "http://jwxy.ys168.com", "desc": "网友收集，百度云分享", "parentid": "ys168" },
    { "name": "安心考研", "url": "http://axky.ys168.com/", "desc": "公众号:安心考研", "parentid": "ys168" },
    { "name": "油麦同学的藏宝阁", "url": "http://cangbaoge.ys168.com/", "desc": "公众号:考研学府", "parentid": "ys168" },
    { "name": "阿虚同学的储物间", "url": "http://kyon945.ys168.com/", "desc": "阿虚的收藏", "parentid": "ys168" },
    { "name": "量子孤岛杂货店", "url": "http://quantumisland.ys168.com/", "desc": "公众号:量子孤岛", "parentid": "ys168" },
    { "name": "Ashe", "url": "http://hsjp.ys168.com/", "desc": "公众号:胡说金朋", "parentid": "ys168" },
    { "name": "影视森林", "url": "http://www.549.tv/", "desc": "影视导航", "parentid": "onav" },
    { "name": "小柒影视导航", "url": "https://www.xiaoqiyouwu.ink/", "desc": "公众号：小柒有物，出品", "parentid": "onav" },
]
