window.onload=function(){
    var grid=document.getElementById('grid');
    var grid_bg=document.getElementById('grid_bg');
    var nav=document.querySelector('nav'); 
    var masks=document.querySelectorAll('.mask');
    var footer=document.querySelector('footer');
    var content=document.querySelector('#grid .content');
    var intro=document.querySelector('intro');
    var projet=document.getElementById('projet');
    var previous=document.querySelector('.previous');
    var next=document.querySelector('.next'); 
    var logosmall=document.getElementById("logosmall");
    var menuworks=document.querySelector('.menuworks');
    var menuabout=document.querySelector('.menuabout');
    var about=document.querySelector('#about');
    var citys=document.querySelectorAll('#city_grid .city');
    var arr=[logosmall,menuworks];
    var lastclass="";          //��Ż�ȡ����body  class����
    var ishome=true;      //���ǰ�͵����Ŀ���
    var position,op=0;
    //����json����
    var projetLists=projetList;
    var Data=data;
    var Classname=classname;


    //�Զ���������
    for(var i=0;i<Classname.length;i++){
        content.innerHTML+='<div class="item '+Classname[i] +" "+ projetLists[i]+'">'+
            '<img src="grid/'+projetLists[i]+'.jpg" alt="">'+
            '<div class="mask">'+
                '<div class="info_container">'+
                    '<div class="info">'+ 
                        '<h2>'+Data.name[i]+'</h2><div class="line"></div>'+
                        '<div class="role"><span class="role1">'+Data.intro.a+'</span><span class="role2">'+Data.intro.b+'</span></div>'+
                    '</div>'+
                '</div>'+ 
            '</div>'+         
        '</div>';

    }
    

    //���ݹ������������»���ҳ��

    window.onscroll=function(){

        //���ͼƬ�󣬻�������
        var scrollP=document.body.scrollTop;
        position = -scrollP;
        if(!ishome){     //�����
            var projet_intro=document.getElementById('projet_intro');
            var previous=document.querySelector('.previous');
            var next=document.querySelector('.next');
            op = 1 - (scrollP/300);
            projet_intro.style.opacity=op;    //͸��������־���仯���仯
            projet.style.top=position/2+'px';
            previous.style.top=position+'px';
            next.style.top=position+'px';
            previous.style.marginLeft=position+'px';
            next.style.marginRight=position+'px';
        }

        if(!ishome){
            var screenshots=document.getElementById('screenshots');
            var shotdivs=screenshots.querySelectorAll('div');
            setTimeout(function(){   
                for(var i=0;i<shotdivs.length;i++){
                //Ԫ�ص��ϱߵ��������ľ���==�������ľ��룬����ͼƬ����Ҫ������ҳ���ʱ������topֵҲ�����������붥��һ���������ľ���
                    if(shotdivs[i].getBoundingClientRect().top<document.documentElement.clientHeight-100){
                        addClass(shotdivs[i],'display');
                    }
                    //console.log(shotdivs[0].getBoundingClientRect().top);
                    //console.log(document.documentElement.clientHeight-100);      
                }

            },2000);
            
        }

        if(hasClass(document.body,'about')){
            addClass(nav,'enter');
            addClass(nav,'navtop');
            setTimeout(function(){   
                for(var i=0;i<citys.length;i++){
                    if(citys[i].getBoundingClientRect().top<document.documentElement.clientHeight){
                        console.log(citys[i]);
                        addClass(citys[i],'display');
                    }     
                }

            },2000);


        }



      
        
      


        //���ڶ��㱳��ͼƬ�ϻ�������ʱ�����grid_bg.className='fx';    �̶���λ
       if(document.body.scrollTop>=document.documentElement.clientHeight-60){

            var lastclass1=grid_bg.getAttribute('class');       
            if(!grid_bg.className){   
                    addClass(grid_bg,'fx');
            }
            else if(!hasClass(grid_bg,'fx')){   
                    addClass(grid_bg,'fx');
            }
       
        }
        //��ͼƬ�뿪�������»�������Ҫɾ��fx��λ
        else if(hasClass(grid_bg,'fx')  && ishome){    
            deleteClass(grid_bg,'fx');
          
        }
        else if(!hasClass(grid_bg,'fx') && ishome){     
            var name=deleteClass(grid_bg,'fx');
            if(name){      //�����name����ӣ�û���򲻲���
                addClass(grid_bg,name);
            }
            
        }
      


        //������������<220ʱ��nav�����κθı�
        if(document.body.scrollTop<220 && ishome && !hasClass(document.body,'about')){  
            nav.className='';
        }
     
        else if(220<document.body.scrollTop && document.body.scrollTop<document.documentElement.clientHeight-60 && !hasClass(document.body,'about') ){
            nav.className='enter';      //nav��С
            nav.style.top=grid_bg.getBoundingClientRect().top+90+"px";
        }
        
        else{
            nav.className='enter navtop';     /*��Ҫ�����ֱ�С��Ҫ������*/

        }


        //�����������ʾfooter(��������+����������=��ҳ�ܸ߶�)
        if(document.body.scrollTop>=document.body.scrollHeight-document.documentElement.clientHeight-20  &&document.body.scrollTop!=0){
            addClass(footer,'visible');
        }
        else{
            footer.className=' ';
        }

    };





    //����ƶ��͵���¼�
    var items=document.querySelectorAll('.item');
    for(var i=0;i<items.length;i++){
        items[i].index=i;
        //��껬��ͼƬ�����仯
        items[i].onmouseenter=function(){   //���div����mouseover�����ð��
            var lastclass=this.getAttribute('class').split(' ').pop();
            console.log(lastclass);
            if(hasClass(grid_bg,'fx')){
                addClass(grid_bg,'fx',lastclass);
            }
            else{
                grid_bg.className=''; 
                addClass(grid_bg,lastclass);
            }
        }



        //���ͼƬ������ҳ��
        items[i].onclick=function(){
            ishome=false;
            
            //��grid_bgû����λ�����Ϸ�ʱ���ͼƬ
            if(document.body.scrollTop<document.documentElement.clientHeight){
                addClass(nav,'enter',' navtop');  
                Toscroll(true);
            }

            //��grid��������ʧ
            setTimeout(function(){  
                addClass(grid,'fade');
            }, 500);
                        
            lastclass=this.getAttribute('class').split(' ').pop();
            setTimeout(function(){
                openprojet(lastclass);      
            },500);


            //������Զ�����projet����(ע�ⲻ���пո�,�ֶν��ַ�������)
            projet.innerHTML=
            '<div id="projet_intro">'+
                '<div id="title">'+
                    '<h1>'+Data.name[this.index]+'</h1>'+
                    '<div class="line"></div>'+
                    '<div class="role">'+
                        '<span class="role1">'+Data.intro[this.index].a+'</span>'+
                        '<span class="role2">'+Data.intro[this.index].b+'</span>'+
                    '</div>'+
                    '<div class="mousescroll"></div>'+
                '</div>'+
            '</div>'+    
            '<div id="projet_content">'+
                '<div id="projet_info">'+
                '<p>'+Data.content[this.index]+'</p>'+
                    '<ul>'+
                        '<li>Data.name1[i].a</span>'+ Data.name1[this.index].a+'</li>'+
                        '<li><span>Agency :</span>'+Data.name1[this.index].b+'</li>'+
                        '<li><span>Year :</span>'+ Data.name1[this.index].c+'</li>'+
                    '</ul>'+
                    '<div id="viewcasestudy">'+Data.study+'</div>'+
                '</div>'+ 
                '<div id="screenshots">'+
                    '<div id="screen1" class="demi"><img src="projet/'+Data.img[this.index].a+'.jpg"></div>'+
                    '<div id="screen2" class="demi"><img src="projet/'+Data.img[this.index].b+'.jpg"></div>'+
                    '<div id="screen3" class="full"><img src="projet/'+Data.img[this.index].c+'.jpg"></div>'+
                    '<div id="screen4" class="demi"><img src="projet/'+Data.img[this.index].d+'.jpg"></div>'+
                    '<div id="screen5" class="demi"><img src="projet/'+Data.img[this.index].e+'.jpg"></div>'+
                '</div>'+
                '<div id="up">'+
                    '<img src="projet/ico1.png"/>'+
                '</div>'+   
            '<div>'

            //ֱ�ӷ��ص�������
            var up=document.getElementById('up');
            up.onclick=function(){
                Toscroll(false);   //trueΪ���£�falseΪ����������
            }
            
        }

    };


    







    //�����ҳ�淭����ҳ

    previous.onclick=function(){
        var projet_intro=document.getElementById('projet_intro');
        var projet_content=document.getElementById('projet_content');
        addClass(projet_intro,'transition');     
        addClass(projet_content,'transition');  
        addClass(previous,'transition');    

        //ɾ��class��projet
        setTimeout(
            function(){ 
                if(hasClass(document.body,"projet")){  
                    deleteClass(document.body,"projet"); 
                }
            }, 
        800);

        //��ȡ��ǰͼƬ��bodyclass����
        var lastclass1=document.body.getAttribute('class').split(' ').pop();

    
        //�ҵ���ǰͼƬ��projetLists�е�λ��
        for(var i=0; i<projetLists.length;i++) { 
            if (lastclass1 == projetLists[i]){
                //���ԭ�е�girl��class
                var numprojet = i-1; 
                if(i==0){
                    setTimeout(function(){
                        addClass(document.body,"projet");
                        addClass(document.body,"nav");
                        addClass(document.body,projetLists[13]);
                        addClass(previous,"transition");
                        addClass(previous,projetLists[13]);
                        addClass(next,projetLists[13]);
                        deleteClass(document.body,lastclass1);
                    }, 2000);
                }
                else{
                    setTimeout(function(){ 
                        addClass(document.body,"projet");
                        addClass(document.body,"nav");
                        addClass(document.body,projetLists[numprojet]);
                        addClass(previous,"transition");
                        addClass(previous,projetLists[numprojet]);
                        addClass(next,projetLists[numprojet]);
                        deleteClass(document.body,lastclass1);
                    }, 2000);
                }
            } 

         }
         setTimeout(
            function(){
                deleteClass(previous,"transition");
                deleteClass(projet_intro,"transition");
                deleteClass(projet_content,"transition");

            }, 2000);

    }


     //�����ҳ�淭����ҳ���ֲ�ͼ
    next.onclick=function(){
        var projet_intro=document.getElementById('projet_intro');
        var projet_content=document.getElementById('projet_content');
        addClass(projet_intro,'transition');        
        addClass(projet_content,'transition');
        addClass(next,'transition');
        setTimeout(
            function(){ 
                if(hasClass(document.body,"projet")){  
                         deleteClass(document.body,"projet");  
                }
            }, 800);
        //��ȡ��ǰͼƬ��bodyclass����
        var lastclass1=document.body.getAttribute('class').split(' ').pop();
        for(var i=0; i<projetLists.length;i++) {   
            if (lastclass1 == projetLists[i]){
                var numprojet = i+1; 
                console.log(numprojet);
                if(i==13){
                    setTimeout(function(){
                        addClass(document.body,"projet");
                        addClass(document.body,"nav");
                        addClass(document.body,projetLists[0]);
                        addClass(next,"transition");
                        addClass(previous,projetLists[0]);
                        addClass(next,projetLists[0]);
                        deleteClass(document.body,lastclass1);
                    }, 2000);
   
                }
                else{
                    setTimeout(function(){
                        addClass(document.body,"projet");
                        addClass(document.body,"nav");
                        addClass(document.body,projetLists[numprojet]);
                        addClass(next,"transition");
                        addClass(previous,projetLists[numprojet]);
                        addClass(next,projetLists[numprojet]); 
                        deleteClass(document.body,lastclass1);    
                    }, 2000);
                }
            } 

        }
        setTimeout(
            function(){
                deleteClass(next,"transition");
                deleteClass(projet_intro,"transition");
                deleteClass(projet_content,"transition");
            }, 2000);


    }




    //���nav�ص���ҳ��
    for(var i=0;i<arr.length;i++){
        //console.log(arr[1]);
        arr[i].addEventListener('click',function(){
            if(!ishome){
                closeprojet();
                deleteClass(grid,"fade");
                if(hasClass(this,'menuworks')){
                    setTimeout(function(){
                      window.scrollTo(0,document.documentElement.clientHeight); 
                    }, 1900);
                }
                else{
                    deleteClass(grid_bg,"fx");
                    setTimeout(function(){
                        deleteClass(nav,"enter"); 
                        deleteClass(nav,"navtop");     
                    }, 2300);
                    setTimeout(function(){
                        nav.style.top="500px";
                    }, 2200);
                }


            }
            else{
                
                if(hasClass(this,'menuworks')){
                    
                    if(document.body.scrollTop<document.documentElement.clientHeight){
                        addClass(nav,'enter',' navtop');  
                        Toscroll(true);  
                    }
                }
                else{ 
                    Toscroll(false);
                    nav.style.top="500px";     
                }

            }

        })
       

    }




    //ֱ�ӵ��nav�е�menuabout��ת������ҳ��

    menuabout.addEventListener('click',function(){
        if(!ishome){
            closeprojet();
            addClass(document.body,'about');
        }
        else{
            addClass(nav,'navtop');
            addClass(nav,'enter');
            addClass(document.body,'about');
            
            var t=document.body.scrollTop;
            setTimeout(function() { 
                Toscroll(false);

                nav.style.top="500px";
                deleteClass(about,"pfix");
                addClass(grid,'enter');
                addClass(grid_bg,'enter');   
               
            }, 500);    
            setTimeout(function() { 
                addClass(grid,'fade');
            }, 1000);
            about.style.zIndex=10; 
        }  


    })



 
    //�ж�Ԫ���Ƿ�����Ҫ���ҵ�������  ƥ����β�пհ׷�����ʲô��û�е�className��������
    function hasClass(element,csName){
            return element.className.match(RegExp('(\\s|^)'+csName+'(\\s|$)'));
        }

    //��Ӷ��������
    function addClass(element,csName,value) {

        if (!hasClass(element,csName)) {   
                element.className+=' '+csName;
            } 
        else if(value){
            element.className=csName+' '+value;
        }
        return element.className; 

    }

     //ɾ��ָ����ʽ
    function deleteClass(element,csName){
        if (hasClass(element,csName)) { 
            var newname=element.className.replace(csName,' ');
            element.className="";
            addClass(element,newname);
            return element.className;
        }
        

    }

    function openprojet(classname){
        setTimeout(function(){
            addClass(nav,"navtop"); 
            
        }, 400);
        setTimeout(function(){ 
            window.scrollTo(0,0);
            addClass(document.body,'projet'); 
            addClass(document.body,'nav');
            addClass(document.body,classname); 
            
        }, 1000);
    }



    function closeprojet(){
        ishome=true;
        addClass(document.body,'closing');
        deleteClass(document.body,'projet');
        deleteClass(document.body,'nav');
    }

    function Toscroll(boolean){
        
        var t=document.body.scrollTop;
        console.log(t);
        if(boolean){
            var timer=setInterval(function(){
                t+=5;
                window.scrollTo(0,t);
                if(t>=document.documentElement.clientHeight){
                    clearInterval(timer);
                }
            });

        }
        else{
            var timer=setInterval(function(){
                t-=5;
                console.log(document.body.scrollTop);
                window.scrollTo(0,t);
                
                if(t<0){
                    clearInterval(timer);
                }
            });

        }


    }





}