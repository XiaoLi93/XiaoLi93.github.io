$(document).ready(function(){

    function preload(arrayOfImages) {
        var nbLoaded = 0;
        var nbTotal = arrayOfImages.length;
        $(arrayOfImages).each(function()
        {
            var $img = $('<img/>');       /*新建节点，并不用插入页面，只是用来统计*/
            $img[0].src = this;           /*将arrayOfImages中的数据值赋给新建节点*/
            $img.one('load', function()         /*one 只执行一次   load加载图片完图片执行下面程序*/
            {
                nbLoaded ++;
                if($(window).width() >= 960) {
                    if (nbLoaded==14) { setTimeout(function() { $("body").removeClass("loading"); }, 1000); }
                } else {
                    if (nbLoaded==14) {setTimeout(function() { $("body").removeClass("loading"); }, 1000); }
                }
            });
        });
    }

    if($(window).width() >= 960) {
        preload([

            'grid/road.jpg',
            'grid/man.jpg',
            'grid/knight.jpg',
            'grid/ipad.jpg',
            'grid/guitarist.jpg',
            'grid/house.jpg',
            'grid/notebook.jpg',
            'grid/girl.jpg',
            'grid/crystal.jpg',
            'grid/bear.jpg',
            'grid/sketch.jpg',
            'grid/art.jpg',
            'grid/telephone.jpg',
            'grid/origami.jpg'


        ]);
    }
    else {
        preload([
            /*html页面的图片地址改变后此处自动改变？*/
            'grid/road.jpg',
            'grid/man.jpg',
            'grid/knight.jpg',
            'grid/ipad.jpg',
            'grid/guitarist.jpg',
            'grid/house.jpg',
            'grid/bear.jpg',
            'grid/notebook.jpg',
            'grid/girl.jpg',
            'grid/crystal.jpg',
            'grid/sketch.jpg',
            'grid/art.jpg',
            'grid/telephone.jpg',
            'grid/origami.jpg'

        ]);
    }

});