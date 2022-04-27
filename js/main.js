$(function(){
    // <<네비게이션 서브메뉴 나오게하기>>
    $('.menu1 > nav > ul').hover(function(){
       $('.sub1').stop().fadeIn(900);
       $('.sub_bg').stop().slideDown(300);
    }, function(){
       $('.sub1').stop().fadeOut(200);
       $('.sub_bg').stop().slideUp(300);
    });
    $('.menu2 > nav > ul').hover(function(){
        $('.sub2').stop().fadeIn(900);
        $('.sub_bg').stop().slideDown(300);
    }, function(){
        $('.sub2').stop().fadeOut(200);
        $('.sub_bg').stop().slideUp(300);
    });
    //<<검색버튼 눌러서 검색기능 나오게 하기>>
    $('.icon .search_btn').click(function(){
        $('.search').slideDown();
    });
    $('.search > a').click(function(){
        $('.search').slideUp();
    });
    //<<비주얼 배너 좌우 무한 슬라이드>>
    var vli_width=$('.visual_box ul li').width();
    $('.visual_box li:last').prependTo('.visual_box ul');
    $('.visual .right_btn').click(function(){
        $('.visual_box ul').stop().animate({
            left:'-='+vli_width
        },
        function(){
            $('.visual_box li:first').appendTo('.visual_box ul');
            $('.visual_box ul').css('left',-vli_width);
        });
    });
    $('.visual .left_btn').click(function(){
        $('.visual_box ul').stop().animate({
            left:0
        },
        function(){
            $('.visual_box li:last').prependTo('.visual_box ul');
            $('.visual_box ul').css('left',-vli_width);
        });
    });
    //<<탭클릭으로 동영상은 좌우로슬라이드 글자는 사라지고 나타나면서 위로 슬라이드>>
    $('.tab_title ul li p').click(function(){
        var btnNum=$(this).parent('li').index();
        $('.tab_title ul li p').removeClass('active');
        $(this).addClass('active');
        videoMove(btnNum);
        textMove(btnNum);
    });
    function videoMove(btnNum){
        var videoWidth=$('.tab_video ul li').width();
        //클릭한 버튼의 인덱스번호*이미지의 가로길이만큼 왼쪽으로 이동
        var moving=-(btnNum*videoWidth);
        $('.tab_video ul').animate({
            left:moving
        });
    }
    var nowtext=$('.tab_text ul li:first');
    //이전 li객체를 저장하는 변수 선언
    var oldtext=0;
    function textMove(btnNum){
        oldtext=nowtext;
        nowtext=$('.tab_text ul li').eq(btnNum);
        //oldtext에 있는 li객체는 위로 이동하면서 사라짐
        oldtext.animate({
            opacity:0,
            top:-800
        },700,function(){
            oldtext.css({
                opacity:0,
                top:800
            });
        });
        //nowtext에 있는 li객체는 아래에서 올라오면서 나타남
        nowtext.delay(700).animate({
            opacity:1,
            top:0
        },700);
    }
    //<<두개의 탭과 탭의 active 효과 넣고 빼기>>
    $('.tab_img').hide();
    $('.new').show();
    $('.new_btn').click(function(){
        $('.best').hide();
        $('.new').show();
        $('.best_btn p').removeClass('active');
        $('.new_btn p').addClass('active');
    });
    $('.best_btn').click(function(){
        $('.new').hide();
        $('.best').show();
        $('.new_btn p').removeClass('active');
        $('.best_btn p').addClass('active');
    });
    //<<좌우 슬라이드와 좌우 끝에서는 비활성화 버튼 & 아래 스크롤바>>
    //<<신제품>>
    var li_width=$('.new_wrap ul li').width();
    var sc_width=$('.new_scroll').width();
    var num=0;
    var li_move=0;
    var sc_move=0;
    $('.new_lbtn').click(function(){
        $('.new_rbtn').css('opacity',1);
        $(this).css('opacity', 1);
        num--;
        if(num<=0){num=0; $(this).css('opacity',0.5);}
        li_move = num*li_width;
        $('.new_wrap ul').animate({
            left:-li_move+80
        });
        sc_move = -(num*sc_width);
        $('.new_scroll').animate({
            left:-sc_move
        })
    });
    $('.new_rbtn').click(function(){
        $('.new_lbtn').css('opacity',1);
        $(this).css('opacity', 1);
        num++;
        if(num>=2){num=2; $(this).css('opacity',0.5);}
        li_move = num*li_width;
        $('.new_wrap ul').animate({
            left:-li_move-80
        });
        sc_move = num*sc_width;
        $('.new_scroll').animate({
            left:+sc_move
        })
    });
    //<<추천제품>>
    var li_bwidth=$('.best_wrap ul li').width();
    var sc_bwidth=$('.best_scroll').width();
    var bnum=0;
    var li_bmove=0;
    var sc_bmove=0;
    $('.best_lbtn').click(function(){
        $('.best_rbtn').css('opacity',1);
        $(this).css('opacity', 1);
        bnum--;
        if(bnum<=0){bnum=0; $(this).css('opacity',0.5);}
        li_bmove = bnum*li_bwidth;
        $('.best_wrap ul').animate({
            left:-li_bmove+80
        });
        sc_bmove = -(bnum*sc_bwidth);
        $('.best_scroll').animate({
            left:-sc_bmove
        })
    });
    $('.best_rbtn').click(function(){
        $('.best_lbtn').css('opacity',1);
        $(this).css('opacity', 1);
        bnum++;
        if(bnum>=2){bnum=2; $(this).css('opacity',0.5);}
        li_bmove = bnum*li_bwidth;
        $('.best_wrap ul').animate({
            left:-li_bmove-80
        });
        sc_bmove = bnum*sc_bwidth;
        $('.best_scroll').animate({
            left:+sc_bmove
        })
    });
    //<<글씨를 누르면 그 사진에 대해서 슬라이드가 옆으로 이동>>
    $('.photo_menu ul li:first').click(function(){
        $('.photo ul').animate({
            left:0
        });
        $('.photo_menu ul li').removeClass('active');
        $(this).addClass('active');
    });
    $('.photo_menu ul li:nth-child(2)').click(function(){
        $('.photo ul').animate({
            left:-770
        });
        $('.photo_menu ul li').removeClass('active');
        $(this).addClass('active');
    });
    $('.photo_menu ul li:last').click(function(){
        $('.photo ul').animate({
            left:-1540
        });
        $('.photo_menu ul li').removeClass('active');
        $(this).addClass('active');
    });
    //<<family site 누르면 나오기>>
    $('.footer_right a').click(function(e){
        e.preventDefault();
        $('.familysite').fadeIn(1);
    });
    $('.familysite > a').click(function(e){
        e.preventDefault();
        $('.familysite').fadeOut(1);
    });
    //<<햄버거 메뉴의 왼쪽부분>>
    $('.menu_list ul li .sub').hide();
    $('.menu_list > ul > li > p').css('width','0');
    $('.allmenu_left .img .one .one_sub').css('transform','scale(1.1)');
    $('.allmenu_left .img .two .two_sub').css('transform','scale(1.1)');
    $('.allmenu_left .img .three .three_sub').css('transform','scale(1.1)');
    $('.allmenu_left .img .four .four_sub').css('transform','scale(1.1)');
    $('.menu_list > ul > li:first-child > a').hover(function(){
        $('.m_sub1').stop().slideDown();
        $('.allmenu_left .img .one .one_sub').show().css('transform','scale(1)');
        $('.menu_list > ul > li:first-child > p').css('width','200px');
    },function(){
        $('.m_sub1').stop().slideUp();
        $('.allmenu_left .img .one .one_sub').hide();
        $('.allmenu_left .img .one .one_sub').show().css('transform','scale(1.1)');
        $('.menu_list > ul > li:first-child > p').css('width','0');
    });
    $('.menu_list > ul > li:nth-child(2) > a').hover(function(){
        $('.m_sub2').stop().slideDown();
        $('.allmenu_left .img .two .two_sub').fadeIn().css('transform','scale(1)');
        $('.allmenu_left .img .one .one_sub').hide();
        $('.menu_list > ul > li:nth-child(2) > p').css('width','180px');
    },function(){
        $('.m_sub2').stop().slideUp();
        $('.allmenu_left .img .two .two_sub').hide().css('transform','scale(1.1)');
        $('.allmenu_left .img .one .one_sub').show();
        $('.menu_list > ul > li:nth-child(2) > p').css('width','0');
    });
    $('.menu_list > ul > li:nth-child(3) > a').hover(function(){
        $('.m_sub3').stop().slideDown();
        $('.allmenu_left .img .three .three_sub').fadeIn().css('transform','scale(1)');
        $('.allmenu_left .img .one .one_sub').hide();
        $('.menu_list > ul > li:nth-child(3) > p').css('width','180px');
    },function(){
        $('.m_sub3').stop().slideUp();
        $('.allmenu_left .img .three .three_sub').hide().css('transform','scale(1.1)');
        $('.allmenu_left .img .one .one_sub').show();
        $('.menu_list > ul > li:nth-child(3) > p').css('width','0');
    });
    $('.menu_list > ul > li:last-child > a').hover(function(){
        $('.m_sub4').stop().slideDown();
        $('.allmenu_left .img .four .four_sub').fadeIn().css('transform','scale(1)');
        $('.allmenu_left .img .one .one_sub').hide();
        $('.menu_list > ul > li:last-child > p').css('width','200px');
    },function(){
        $('.m_sub4').stop().hide();
        $('.allmenu_left .img .four .four_sub').hide().css('transform','scale(1.1)');
        $('.allmenu_left .img .one .one_sub').show();
        $('.menu_list > ul > li:last-child > p').css('width','0');
    });
    //<<햄버거 스위치>>
    var sw=0;
    $('.menu_btn').click(function(){
        $('.all_menu').animate({
            right:0
        },1000);
    })
    $('.close_btn').click(function(){
        $('.all_menu').animate({
            right:-1920
        },1000);
    })
    //<<top버튼 클릭하면 위로올라감>>
    $('.top_btn').click(function(){
        $('html,body').animate({
            scrollTop:0
        })
    })
    //<<top버튼이 화면에 따라서 오른쪽 아래에 고정>>
    $(window).scroll(function(){
        var sBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if(sBottom>=230){
            $('.top_btn').addClass('active');
        }else{
            $('.top_btn').removeClass('active');
        };
    });
});