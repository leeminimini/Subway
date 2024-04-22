$(function(){
    $('.slider').slick({
        autoplay: true,
        arrows:false,
        dots:true
    })

    $('.m_gnb>li>a').click(function(){
        $(this).next().slideToggle().parent().siblings().find('.depth2').slideUp(),
        $(this).parent().toggleClass('on').siblings().removeClass('on');
    })

    // 햄버거 버튼을 클릭하면 모바일 메뉴가 왼쪽에서 튀어 나오기
    $('.m_menu').click(function(){
        $('.cover').fadeIn();
        $('bosy,html').css('overflow','hidden')
        $('.m_menu_wrap').animate({'left':0},300)
    })

    $('.cover,.m_close').click(function(){
        $('.m_menu_wrap').animate({'left':'-100%'},300)
        $('bosy,html').css('overflow','auto')
        $('.cover').fadeOut();
    })



})