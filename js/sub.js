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
     $('.footer_right a').click(function(e){
        e.preventDefault();
        $('.familysite').fadeIn(1);
    });
    $('.familysite > a').click(function(e){
        e.preventDefault();
        $('.familysite').fadeOut(1);
    });
    //<<top버튼 클릭하면 위로올라감>>
    // $('.top').click(function(){
    //     $('html,body').animate({
    //         scrollTop:0
    //     })
    // })
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
        });
    })
    $('.close_btn').click(function(){
        $('.all_menu').animate({
            right:-1920
        });
    })
});