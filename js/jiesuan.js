$(document).ready(function() {
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

	function cc() {
		if($('.center-list').find('.product').length == 0) {
			$('.center-list').find('.empty').show();
			$('.bottom-list').hide();
		}
	}
	//加号
	$('.add').click(function() {
		var val = parseInt($(this).siblings('.g_quantity').attr('value'));
		val += 1;
		$(this).siblings('.g_quantity').attr('value', val);
		$('.product').each(function(i) {
			var product_price = parseInt($(this).find('.product_price .price').text());
			var count = parseInt($(this).find('.g_quantity').attr('value'));
			$(this).find('.submoney').text(quzheng(product_price * count));
		});
		nn();
	});
	//减号
	$('.reduce').click(function() {
		var val = parseInt($(this).siblings('.g_quantity').attr('value'));
		if(val > 1) {
			val -= 1;
			$(this).siblings('.g_quantity').attr('value', val);
			$('.product').each(function(i) {
				var product_price = parseInt($(this).find('.product_price .price').text());
				var count = parseInt($(this).find('.g_quantity').attr('value'));
				$(this).find('.submoney').text(quzheng(product_price * count));
			});
			nn();
		}
	});
	//input
	$('.product').each(function(i) {
		$(this).find('.check').click(function() {
			if($(this)[0].checked) {
				$(this).siblings('em').addClass('on');
				$(this).css('opacity', '0');
				nn();
			} else {
				$(this).siblings('em').removeClass('on');
				$(this).css('opacity', '1');
				nn();
				ll();
			}
		});
	});
	//全选
	$('#check1').click(function() {
		if($(this)[0].checked) {
			$('.product').each(function(i) {
				$(this).find('.check')[0].checked = true;
				$(this).find('.check').css('opacity', '0');
				$(this).find('.check').siblings('em').addClass('on');
				nn();
			});
			$(this).siblings('em').addClass('on');
			$(this).css('opacity', '0');

		} else {
			$('.product').each(function(i) {
				$(this).find('.check')[0].checked = false;
				$(this).find('.check').css('opacity', '1');
				$(this).find('.check').siblings('em').removeClass('on');
				nn();
			});
			$(this).siblings('em').removeClass('on');
			$(this).css('opacity', '1');
		}
	});

	function ll() {
		$('#check1')[0].checked = false;
		$('#check1').siblings('em').removeClass('on');
		$('#check1').css('opacity', '1');
		nn();
	}
	//初始化
	function bb() {
		var money = 0;
		$('.product').each(function(i) {
			if($(this).find('.check')[0].checked) {
				var sMoney = $(this).find('.submoney').text();
				iMoney = parseFloat(sMoney);
				money += iMoney;
			}
			return money;
		});
		return money;
	}

	//总计
	function nn() {
		$('.all_price .price').text('￥' + quzheng(bb()));
	}
	nn();
	//删除
	$('.center-list').click(function(e) {
		if($(e.target).attr('class') == 'del') {
			($(e.target).parent().parent()).remove();
			nn();
			cc();
		}
	});
	//切换
		jQuery(".slideGroup .slideBox").slide({
			mainCell: "ul",
			vis: 5,
			prevCell: ".sPrev",
			nextCell: ".sNext",
			effect: "leftLoop",
			scroll: 1,
			loop: true
		});
		$('.slideBox').stop(true, true).hover(function() {
			$(this).find('.sPrev').show();
			$(this).find('.sNext').show();
		}, function() {
			$(this).find('.sPrev').hide();
			$(this).find('.sNext').hide();
		});


});