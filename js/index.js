var $navList=$(".nav .container .right .list li a");//导航条
var $navcur=$(".nav .container .right .list li.cur");

$navList.mouseover(function(){
    //var index = $(this).index();
    var index = $navList.index(this);//获取index
    //移动距离 = 当前LI的宽度 - 红色盒子的宽度 / 2   +
    var move = ($navList.eq(index).parent().width() - 80) / 2;

    //用当前Li的Offsetleft - 父级的offsetleft
    var offset =$navList.eq(index).offset().left - $navList.eq(0).parent().offset().left;

    $navcur.css('left',offset + move + "px"); //li的宽度 * index + 15
});

//跟不上，回去好好看视频
//把这个项目做完后，我们会学高级部分

//周未想学习(不管多少人，都会开。服务一年。500)   不仅只有技术课，一有一些大牛的分享课，还有很多牛逼学校的学生
//寒假（一个月）想学习  提升的  发个   低于市场价
//如果有10个人才开班，如果没有不开。



//不报也没关系。可以找我拿视频。你要知道自己学什么。

//不知道学什么。  你把先静态页面先写出来
