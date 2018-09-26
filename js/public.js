$(document).ready(function() {
	var list = $('.list li');
	var content = $('.content li');
	var olist = $('.list');
	list.stop(true, true).mouseover(function() {
		var index = $(this).index();
		content.stop(true, true).hover(function() {
			$(this).slideDown();
		}, function() {
			$(this).slideUp(function() {
				list.find('.line').stop(true, true).css('display', 'none');
				list.find('a').css('color', '#4a4a4a');
			});
		});
		olist.find('a').css('color', '#4a4a4a');
		$(this).find('a').css('color', '#e74c3c');
		olist.find('.line').stop(true, true).css('display', 'none');
		$(this).find('.line').stop(true, true).css('display', 'block');
		content.eq(index).slideDown().siblings('li').slideUp();
	});
	var search = $('#search_input').find('input');
	search.focus(function() {
		$(this).animate({
			width: '220px'
		}, function() {
			$(this).css('background-color', '#fff');
			$(this).parent('li').css('background-color', '#fff');
			search.parents('li').find('.fenlei').delay(500).slideDown();
		});
	});
	search.blur(function() {
		search.parents('li').find('.fenlei').slideUp(function() {
			$(this).siblings('input').animate({
				width: '155px'
			}, function() {
				$(this).css('background-color', '#f8f8f8');
				$(this).parent('li').css('background-color', '#f8f8f8');
			});
		});

	});
	$('.return-top').stop(true, true).hover(function() {
		$(this).stop(true, true).find('img').animate({
			opacity: 0
		}, 500, function() {
			$('.return-top').find('.fan').stop(true, true).animate({
				opacity: 1
			}, 500);
		})
	}, function() {
		$('.return-top').stop(true, true).find('.fan').animate({
			opacity: 0
		}, 500, function() {
			$('.return-top').find('img').stop(true, true).animate({
				opacity: 1
			}, 500)
		})
	});
	// $('.return-top').click(function() {
	// 	$('body').scrollTop();
	// });
	// $('.download a').hover(function() {
	// 	$(this).siblings('.app').animate({
	// 		opacity: 1,
	// 		'z-index': '10000'
	// 	}, 300);
	// }, function() {
	// 	$(this).siblings('.app').animate({
	// 		opacity: 0,
	// 		'z-index': '10000'
	// 	}, 300);
	// });
	//鼠标头部滚轮fix
	var width = $(window).width();
	$(window).scroll(function() {
		var $aa = $(document).scrollTop();
		if($aa > 70) {
			$('.top-nav').css({
				position: 'fixed',
				top: 0,
				left: 0,
				'z-index': 100,
				width: width + 'px'
			});
			$('.top-nav').find('.lianxi').html('<div><a href="cart.html" title="购物袋"class="icon Cart1"></a></div>');
		} else if($aa < 70) {
			$('.top-nav').css({
				position: 'relative',
				top: 0,
				left: 0
			});
			$('.top-nav').find('.lianxi').html('<a href="#">联系客服</a>');
		}
	});
	$('.return-top').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});