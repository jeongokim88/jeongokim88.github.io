// .mainMenu 마우스오버시 header의 높이가 316px, 마우스 아웃시 header 높이 80px
$(function () {
    $('.mainMenu').mouseenter(function () {
        $('header').stop().animate({ height: '316px' }, 500);
    }).mouseleave(function () {
        $('header').stop().animate({ height: '80px' }, 500);
    });

    $('button').click(function () {
        $('aside').toggleClass('open');
        
        if ($('aside').hasClass('open')) {
            $('aside').stop().animate({ right: 0 }, 500, 'easeInQuad');
            $('button').find('img').attr({ 'src': 'img/aside/btn_close.png', 'alt': 'close' });
        } else {
            $('aside').stop().animate({ right: '-220px' }, 500, 'easeOutQuad');
            $('button').find('img').attr({ 'src': 'img/aside/btn_open.png', 'alt': 'open' });
        }
    });
});