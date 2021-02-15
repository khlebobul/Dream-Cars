
// header start

(function () {
    const header = document.querySelector ('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50){
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
})();

// header end

$(function() {
	
	window.setTimeout(function() {
		$('.work').css('opacity', '1');
	}, 2000);

	$('.work-box').addClass('default');
	
		$('.work-box').on('click', function() {
	
	  	var e = $('.work > .work-box');
			if(e.hasClass('expand')){
				 e.removeClass('expand');
			 	$(this).addClass('expand');
			} else { $(this).addClass('expand'); }
		})
})


 
