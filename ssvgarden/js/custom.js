$(function () {
    /* 비디오 모달 */
    $('main.contents .video button').click(function(){
        $('.vid_modal').fadeIn();
        $('.vid_modal iframe').attr('src','https://www.youtube.com/embed/hxmwALUvXsc?si=EObJad24Faj5Ul3k');
    });
    $('.vid_modal i').click(function(){
        $('.vid_modal').fadeOut();
        $('.vid_modal iframe').attr('src','');
    });

    /* 랭귀지 체인지 */
    $('header ul.l_box li').first().click(function () {
        $(this).siblings().stop().slideToggle().css('display', 'flex');
        $(this).find('i').toggleClass('fa-caret-down').toggleClass('fa-caret-up')
    });

    //햄버거 메뉴
    $('header .ham_all ul').click(function () {
        $(this).removeClass('on').siblings('ul').addClass('on');
        $('.all_menu').fadeToggle();
    });

    let swiper = new Swiper(".main_banner", {
        pagination: {
            el: ".main_banner .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".main_banner .swiper-button-next",
            prevEl: ".main_banner .swiper-button-prev",
          },
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    /* 스크롤 이벤트 시작 */
    $(window).scroll(function(){
        let st = $(this).scrollTop(); //스크롤 탑 위치를 st에 저장
        //console.log(st);
        let evTop = $('.event').offset().top - 500; //이벤트가 스크롤 될 위치를 evTop에 저장
        let lineTop = $('.line_up').offset().top - 400 //라인업이 스크롤될 위치를 lineTop에 저장
        
        //이벤트 컨텐츠 액션 시작
        if(st>=evTop){
            $('main.contents .event section').eq(0).addClass('on').siblings().addClass('on').css({'transition-delay':'0.3s'});
        }else{
            $('main.contents .event section').removeClass('on');
        }
        //이벤트 컨텐츠 액션 끝

        //라인업 액션 시작
        for(let i =0; i<$('main.contents .line_up .container .img_box li').length; i++){
            if(st>=lineTop+(i*30)){
                $('main.contents .line_up .container .img_box li').eq(i).addClass('on').css({'transition-delay':(0.4*i)+'s'});
                $('main.contents .line_up .container .txt_box li').eq(i).addClass('on').css({'transition-delay':(0.5*i)+'s'});
            }else{
                $('main.contents .line_up .container .img_box li,main.contents .line_up .container .txt_box li').removeClass('on');
            }
        }
        //라인업 액션 끝

        /* products액션 시작 */
        if(st>=$('.products').offset().top-500){
            for(let i =0; i<$('.products').find('li').length;i++){
                $('.products').find('li').eq(i).addClass('on').css({'animation-delay':(0.2*i)+'s'});
            }
        }else{
            $('.products').find('li').removeClass('on');
        }
        /* products액션 끝 */
    });
    /* 스크롤 이벤트 끝 */


    /* 패밀리사이트 */
    $('.family p').eq(0).click(function(){
        $(this).siblings().slideToggle();
        $(this).find('i').toggleClass('fa-angle-down').toggleClass('fa-angle-up')
    });

    $('aside.top').click(function(){
        $('body,html').animate({
            scrollTop:0
        },500);
    });
});//ready end