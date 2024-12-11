$(document).ready(function() {
	
	/* scroll */
	
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	/* timer */

	
	function update() {
		var Now = new Date(), Finish = new Date();
		Finish.setHours( 23);
		Finish.setMinutes( 59);
		Finish.setSeconds( 59);
		if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
			Finish.setDate( Finish.getDate() + 1);
		}
		var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor( sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor( sec / 60);
		sec -= min * 60;
		$(".timer .hours").text( pad(hrs));
		$(".timer .minutes").text( pad(min));
		$(".timer .seconds").text( pad(sec));
		setTimeout( update, 200);
	}
	function pad(s) { return ('00'+s).substr(-2) }
	update();

	/* sliders */

$('.gallery').slick({
  dots: false,
  infinite: true,
  speed: 200,
  fade: false,
  cssEase: 'linear'
}); 
    
$('.reviews').slick({
  dots: false,
  infinite: true,
  speed: 200,
  fade: false,
  cssEase: 'linear'
});


});

let lastScrollTop = 0;
document.addEventListener('scroll', function(e) {
    const st = window.scrollY;
    if(st > 160) {
        if (st > lastScrollTop) {
            document.querySelector('header').classList.remove('active');
        } else {
            document.querySelector('header').classList.add('active');
        }
        lastScrollTop = st;
    }
})


const menuItems = document.querySelectorAll('#menu a');

hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    const _this = e.currentTarget;

    if(menu.classList.contains('show-menu')) {
        menu.classList.remove('show-menu');
    } else {
        menu.classList.add('show-menu');
    }
});


menuItems.forEach(function(item, idx) {
    item.addEventListener('click', function(e) {
        menu.classList.remove('show-menu');
    })
})