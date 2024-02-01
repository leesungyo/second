$(function () {
    AOS.init();

    $('.works_cont_3 .work_nav ul li').click(function () {
        $('.works_cont_3 .work_nav ul li').removeClass('on');
        $(this).addClass('on');
        let i = $(this).index();
        $('.works_cont_3 .work_etc_box .works_etc>div').removeClass('on').eq(i).addClass('on');
    });
    let contentARR = [];
    let content = $('main .container>div');
    let navLi = $('nav ul.gnb li');
    for (let i = 0; i < content.length; i++) {
        if (i == 0) {
            contentARR[i] = 0;
        }
        else {
            contentARR[i] = content.eq(i).offset().top
        }
    }

    contentARR.push($('main').height());

    console.log(contentARR);
    let t = 0;
    $(window).on('scroll', moving);
    function moving() {
        let st = $(this).scrollTop();
        let st100 = st * 100;
        //console.log(t+=st/works);
        for (let i = 0; i < contentARR.length; i++) {
            if (st >= contentARR[i] && st < contentARR[i + 1]-80) {
                navLi.removeClass('on').eq(i).addClass('on');
                t = st100 / contentARR[i + 1];
                $('nav ul.gnb>li.on span.scroll').css({
                    top: `calc(${t}%)`
                })
           /*      if (i == 0) {
                    $('nav ul.gnb>li.on span.scroll').css({
                        top: `calc(${t}%)`
                    })
                } else {
                    $('nav ul.gnb>li.on span.scroll').css({
                        top: `calc(${t}% - 10px)`
                    })
                } */
            }
        }
    }


    $('ul.works_etc_cont_txt li').click(function () {
        let imgAlt = $(this).find('img').attr('alt');
        let imgSrc = $(this).find('img').attr('src');
        let w_tit = $(this).find('.w_tit').text();
        let w_sub = $(this).find('.w_sub').text();
        $('.modal img').attr({ alt: imgAlt, src: imgSrc });
        $('.modal .w_tit').text(w_tit);
        $('.modal .w_sub').text(w_sub);
        $('.modal').fadeIn();
    });
    $('.modal button').click(function () {
        $('.modal').fadeOut();
    });


    $('.gnb li').click(function (e) {
        e.preventDefault();
        $(window).off('scroll');
        $('.gnb li').removeClass('on');
        $(this).addClass('on');
        let hash = $(this).find('a').attr('href');
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 80
        }, 900, function () { $(window).on('scroll', moving); });

    })

});