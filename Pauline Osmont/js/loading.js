$(document).ready(function(){

    function preload(arrayOfImages) {
        var nbLoaded = 0;
        var nbTotal = arrayOfImages.length;
        $(arrayOfImages).each(function()
        {
            var $img = $('<img/>');       /*�½��ڵ㣬�����ò���ҳ�棬ֻ������ͳ��*/
            $img[0].src = this;           /*��arrayOfImages�е�����ֵ�����½��ڵ�*/
            $img.one('load', function()         /*one ִֻ��һ��   load����ͼƬ��ͼƬִ���������*/
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
            /*htmlҳ���ͼƬ��ַ�ı��˴��Զ��ı䣿*/
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