$(document).ready(function() {
	$('.id_card_h img').stop(true, true).hover(function() {
		$('#id_cart_message').fadeIn();
	}, function() {
		$('#id_cart_message').fadeOut();
	});
	$('.address_area p').click(function() {
		if($(this).siblings('dl').css('display') == 'none') {
			$(this).siblings('dl').css('display', 'block');
		}
	});
	$('.address_area dl dt li').click(function() {
		$(this).parents('dl').siblings('p').text($(this).text());
		$(this).parents('dl').css('display', 'none');
	});
	$('.set_default').find('input').click(function() {
		if($(this)[0].checked) {
			$(this).siblings('em').css('display', 'block');
			$(this).css('opacity', '0');
		} else {
			$(this).siblings('em').css('display', 'none');
			$(this).css('opacity', '1');
		}
	})
	$('.delivery_address_list').click(function(e) {
		if($(e.target).attr('type') == 'checkbox') {
			console.log($(e.target));
			if($(this).find('ul').length > 1) {
				if($(e.target)[0].checked) {
					$(e.target).siblings('em').css('display', 'block');
					$(e.target).css('opacity', '0');
					$(e.target).parents('li').siblings('#submit_address').addClass('active');
					$(e.target).parents('ul').siblings('ul').find('em').css('display', 'none');
					$(e.target).parents('ul').siblings('ul').find('input').css('opacity', '1').removeAttr('checked');
					$(e.target).parents('ul').siblings('ul').find('#submit_address').removeClass('active');
				} else {
					$(e.target).siblings('em').css('display', 'none');
					$(e.target).css('opacity', '1');
					$(e.target).parents('li').siblings('#submit_address').removeClass('active');
				}

			}
		}
	});
	$('.default').stop(true, true).hover(function() {
		$(this).find('.user_operation').css('display', 'block');
	}, function() {
		$(this).find('.user_operation').css('display', 'none');
	});
	$('#addAddress').click(function() {
		$('#form_main').fadeIn();
		$('#form_main').attr('data', 'xinzeng');
	});
	$('#cancle').click(function() {
		$('#form_main').fadeOut();
	});
	$('.delivery_address_list').click(function(e) {
		if($(e.target).attr('class') == 'modify') {
			var $index = $(e.target).parents('ul').index();
			$('#form_main').fadeIn();
			$('#form_main').attr('data', 'xiugai');
			$('#form_main').attr('num', $index);
			var username = $(e.target).parents('ul').find('.user_name').text();
			$('#consignee').attr('value', username);
			$('#id_card').attr('value', $(e.target).parents('ul').find('.id_card').text());
			$('#phone').attr('value', $(e.target).parents('ul').find('.user_phone').text());
			$('.sel').find('p').eq(0).text($(e.target).parents('ul').find('.user_address').find('span').eq(0).text());
			$('.sel').find('p').eq(1).text($(e.target).parents('ul').find('.user_address').find('span').eq(1).text());
			$('.sel').find('p').eq(2).text($(e.target).parents('ul').find('.user_address').find('span').eq(2).text());
			$('#address_details').text($(e.target).parents('ul').find('.user_address').find('span').eq(3).text());
		}
	});
	$('.delivery_address_list').click(function(e) {
		if($(e.target).attr('class') == 'delete') {
			($(e.target).parent().parent()).remove();
		}
	})
	$('.submit_address').click(function() {
		if($(this).parents('#form_main').attr('data') == 'xiugai') {
			var num = parseInt($(this).parents('#form_main').attr('num'));
			$('.address').eq(num).find('.user_name').text($('#consignee')[0].value);
			$('.address').eq(num).find('.user_phone').text($('#phone')[0].value);
			$('.address').eq(num).find('.user_address span').eq(0).text($('.sel').eq(0).find('p')[0].value);
			$('.address').eq(num).find('.user_address span').eq(1).text($('.sel').eq(1).find('p')[0].value);
			$('.address').eq(num).find('.user_address span').eq(2).text($('.sel').eq(2).find('p')[0].value);
			$('.address').eq(num).find('.user_address span').eq(3).text($('#address_details')[0].value);
			$('#form_main').fadeOut();
		} else if($(this).parents('#form_main').attr('data') == 'xinzeng') {
			$('.delivery_address_list').append('<ul class="default address" data-address_id="565608"><li class="checkbox"><input type="checkbox" name="adress" value="565608"><em></em></li><li class="user_name">' + $('#consignee')[0].value + '</li><li class="user_phone">' + $('#phone')[0].value + '</li><li class="user_address" data-address_province="22" data-address_city="284" data-address_district="2344"><span>' + $('.sel').eq(0).find('p').text() + '</span><span>' + $('.sel').eq(1).find('p').text() + '</span><span>' + $('.sel').eq(2).find('p').text() + '</span><span>' + $('#address_details').text() + '</span></li><li class="id_card">370285199601061714</li><li id="submit_address" class="default_address">默认地址</li><li class="user_operation"><span class="modify">修改</span>｜<span class="delete">删除</span></li></ul>')
			$('.default').stop(true, true).hover(function() {
				$(this).find('.user_operation').css('display', 'block');
			}, function() {
				$(this).find('.user_operation').css('display', 'none');
			});
			$('#form_main').fadeOut();
		}
	});
	$('.pay-style input').click(function(e) {
		if($(this)[0].checked) {
			$(this).addClass('active');
			$(this).siblings('em').addClass('active');
			$(this).parent('div').siblings('div').find('input')[0].checked = false;
			$(this).parent('div').siblings('div').find('input').removeClass('active');
			$(this).parent('div').siblings('div').find('em').removeClass('active');
		} else {
			$(this).removeClass('active');
			$(this).siblings('em').removeClass('active');
		}
	});
	$('.invoice .elses').click(function() {
		if($(this).text() == '+') {
			$(this).text('-');
			$(this).siblings('.invoice_from').fadeIn();
		} else {
			$(this).text('+');
			$(this).siblings('.invoice_from').fadeOut();
		}
	});
	$('.remark .elses').click(function() {
		if($(this).text() == '+') {
			$(this).text('-');
			$(this).siblings('.remarks_from').fadeIn();
		} else {
			$(this).text('+');
			$(this).siblings('.remarks_from').fadeOut();
		}
	});
	$('#coupons_available').find('input').click(function() {
		if($(this)[0].checked) {
			$(this).css('opacity', '0');
			$(this).siblings('em').css('display', 'block');
		} else {
			$(this).css('opacity', '1');
			$(this).siblings('em').css('display', 'none')
		}
	});
	$('.order_list ul').each(function(i) {
		var money = 0;
		var sMoney = $(this).find('.tol').text();
		var ii = sMoney.indexOf('￥');
		sMoney = sMoney.substr(ii + 2);
		iMoney = parseFloat(sMoney);
		money += iMoney;
		$('#coupons_available').find('.money').eq(0).text('￥' + quzheng(money));
	});

	function mm(aa, n) {
		var ii = aa.indexOf('￥');
		aa = aa.substr(ii + n);
		bb = parseFloat(aa);

		return bb;
	}
	var enable_deduction = 0;
	var surplus_amount = 0;
	$('#enable_deduction').siblings('li').find('input').click(function() {
		if($('#enable_deduction').siblings('li').find('input')[0].checked) {
			console.log(1);
			enable_deduction = mm($('#enable_deduction').text(), 3);
			nn();
		} else {
			enable_deduction = 0;
			nn();
		}
	});

	$('#surplus_amount').siblings('li').find('input').click(function() {
		if($('#surplus_amount').siblings('li').find('input')[0].checked) {
			surplus_amount = mm($('#surplus_amount').text(), 3);
			nn();
		} else {
			surplus_amount = 0;
			nn();
		}
	});

	function nn() {
		$('#actual_m').text('￥' + (mm($('.money').eq(0).text(), 1) - mm($('#discount').text(), 3) - enable_deduction - surplus_amount + mm($('#postage').text(), 2)));
	}
	nn();

	function quzheng(x) {
		var f = parseFloat(x);
		if(isNaN(f)) {
			return false;
		}
		var f = Math.round(x * 100) / 100;
		var s = f.toString();
		var rs = s.indexOf('.');
		if(rs < 0) {
			rs = s.length;
			s += '.';
		}
		while(s.length <= rs + 2) {
			s += '0';
		}
		return s;
	}
	$(window).scroll(function() {
		var $aa = $(document).scrollTop();
		$('#submit_btn').click(function() {
			$('.success-order').fadeIn(function() {
				$(this).find('.cc').css('top', $aa + 250 + 'px').animate({
					opacity: 1
				}, 300, function() {
					$('.success-order').delay(500).fadeOut(function() {
						window.location.href='payment.html';
					});
				});
			});
		});
	});
});