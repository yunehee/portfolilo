$(document).ready(function(){
// home
    let home_index = 0;
    let chk = true;
    let span_count = $('.sec1_title > span').length;

    setInterval(function() {
        if(chk)  {
            $('.sec1_title > span').eq(home_index).addClass('span_active');    
            home_index += 1;
         
            if(home_index >= span_count) {
                chk = false;
            }
        }
        else {
            home_index -= 1;
            $('.sec1_title > span').eq(home_index).removeClass('span_active');    
            
            if(home_index <= 0) {
                chk = true;
            }
        }
    }, 300);

// menu
    let menu_o_top = $('.menu').offset().top;
    $('.menu_li:nth-child(1)').css({color: '#4a52d5'});


// 클릭 이벤트
    $(document).on('click', '.menu_li > a', function() {
        event.preventDefault();

        let href = $(this).attr('href');
        let item_sec_o_top = $(href).offset().top;

        $('html').animate({
            scrollTop: item_sec_o_top
        }, 500);

        $('.menu_li > a').css({
            color: '#000'
        });
        $(this).css({
            color: '#4a52d5'
        });
    });


// portfolio
    $('.portfolio_inner_box').hover(function() {
        $(this).find('.portfolio_info').css({
            opacity: 1
        });
    }, function() {
        $('.portfolio_info').css({
            opacity: 0
        });
    });

// skill
    let sec4_o_top = $('.section4').offset().top;
    for(let i=0; i<$('.bar_inner').length; i++) {
        $('.bar_inner').eq(i).css({
            width: $('.skill_box').eq(i).find('.skill_percent').text()
        })
    };
    
// 스크롤 이벤트
    $(window).scroll(function() {
       
    
// menu (메뉴 맨 위에 고정시키기)
        let s_top = $(window).scrollTop();
        if(s_top >= menu_o_top) {
            $('.menu').css({
                position: 'fixed',
                top: 0,
                left: 0
            })
        }
        else {
            $('.menu').css({
                position: 'absolute',
                top: 'auto',
                bottom: 0,
                left: 0
            })
        }

// 스크롤 하면 메뉴 색깔 바꾸기
        let s_bot = $(window).scrollTop() + $(window).height();

        let sec1_o_top = $('.section1').offset().top;
        let sec2_o_top = $('.section2').offset().top;
        let sec3_o_top = $('.section3').offset().top;
        let sec4_o_top = $('.section4').offset().top;
        let sec5_o_top = $('.section5').offset().top;

        let sec1_o_bot = sec1_o_top + $('.section1').height();
        let sec2_o_bot = sec2_o_top + $('.section2').height();
        let sec3_o_bot = sec3_o_top + $('.section3').height();
        let sec4_o_bot = sec4_o_top + $('.section4').height();
        let sec5_o_bot = sec5_o_top + $('.section5').height();


// 스크롤이 sec에 들어오면 글자 색 바꾸기
        if(s_bot > sec5_o_top) {
            $('.menu_li > a').css({color: '#000'})
            $('.menu_li:nth-child(5) > a').css({color: '#4a52d5'});
        }
        else if(s_bot > sec4_o_top) {
            $('.menu_li > a').css({color: '#000'})
            $('.menu_li:nth-child(4) > a').css({color: '#4a52d5'});
        }
        else if(s_bot > sec3_o_top) {
            $('.menu_li > a').css({color: '#000'})
            $('.menu_li:nth-child(3) > a').css({color: '#4a52d5'});
        }
        else if(s_bot > sec2_o_top) {
            $('.menu_li > a').css({color: '#000'})
            $('.menu_li:nth-child(2) > a').css({color: '#4a52d5'});
        }
        else if(s_bot = sec1_o_bot) {
            $('.menu_li > a').css({color: '#000'})
            $('.menu_li:nth-child(1) > a').css({color: '#4a52d5'});
        }

// skill (그래프 채워지기)
        if(s_bot - 500 >= sec4_o_top) {
            $('.bar_inner').css({
                transform: 'translateX(0)'
            })
        }
        else {
            $('.bar_inner').css({
                transform: 'translateX(-100%)'
            })
        }
    });


});