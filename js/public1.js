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
		$(this).find('img').animate({
			opacity: 0
		}, 500, function() {
			$('.return-top').find('.fan').animate({
				opacity: 1
			}, 500);
		})
	}, function() {
		$('.return-top').find('.fan').animate({
			opacity: 0
		}, 500, function() {
			$('.return-top').find('img').animate({
				opacity: 1
			}, 500)
		})
	});
	$('.return-top').click(function() {
		$('body').scrollTop();
	});
//	$('.download').hover(function() {
//		$(this).find('.app').animate({
//			opacity: 1,
//			'z-index': '200'
//		}, 300);
//	}, function() {
//		$(this).find('.app').animate({
//			opacity: 0,
//			'z-index': '200'
//		}, 300);
//	});
	$('.return-top').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});