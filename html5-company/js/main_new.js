$(window).scroll(function(){
	fix_footer();
	top_sns();
});

function fix_footer() {
	var $doc = $(document);
	var section4 = $('#main-bn').offset().top - $(window).scrollTop();
	if(section4 == 0){
		$('.footer').addClass('fixed');
	} else {
		$('.footer').removeClass('fixed');
	}
}

function top_sns() {
	var $doc = $(document);
	if($doc.scrollTop() > 50){
		$('#header').addClass('bg_png');
	} else{
		$('#header').removeClass('bg_png');
	}
}

$(function(){
	var sourcecodeDisplay = $('#sourcecode-display');
	if (sourcecodeDisplay.length) {
		sourcecodeDisplay.empty().append(
			$('<code />').append(
				$('<pre />').html(
					$('#sourcecode').html().replace(/\n\t\t\t/gm, '\n').replace('>', '&gt;').replace('<', '&lt;')
				)
			)
		);
		$('#css-display').empty().append(
			$('<code />').append(
				$('<pre />').html(
					$('#page-css').html().replace(/\n\t\t\t/gm, '\n')
				)
			)
		);
	}
});

if (window.location.hostname == 'jscrollpane.kelvinluck.com') {
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-17828883-1']);
	_gaq.push(['_trackPageview']);
	
	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
} else if(window.location.protocol == 'file:' || window.location.hostname == 'localhost') {
} else {
}

$(document).ready(function(){
	
	$('div.mouse').animate({
		right:4,
	},1000); 

	setInterval(function(){
		$('div.mouse').animate({ bottom :  -74 } , 300);
		$('div.mouse').animate({ bottom : -94 } , 300);
	},500); 	
	
	$(window).on('scroll',function(){
		
		var section4 = $('#main-bn').offset().top - $(window).scrollTop();
		if(section4 == 0){
			$('.mouse').hide();
		} else{
		$('.mouse').show();
	}
	});
	
	if ($('#main-bn').hasClass('active')) {

	}

	
	
	var mheight = $("#header").height();
	$(".btn_up").click(function(){
		$("html,body").animate({scrollTop:$('#posco-live').offset().top - mheight },700,'swing');
	});
	$(".btn_down").click(function(){
		$("html,body").animate({scrollTop:$('#innovative-technology').offset().top - mheight },700,'swing');
	});
	$(".btn_up2").click(function(){
		$("html,body").animate({scrollTop:$('#innovative-technology').offset().top - mheight },700,'swing');
	});
	$(".btn_down2").click(function(){
		$("html,body").animate({scrollTop:$('#creating-shared').offset().top - mheight },700,'swing');
	});
	
	$('#posco-live div.con:last-of-type').css({'margin-right' : '0px'});
	
	$('#innovative-technology .pro-con li:last-child').css({'margin-right' : '0px'});
	
	$('.main-tab > li > a').on('click focus', function(){
		$(this).parent().addClass('on').siblings().removeClass('on');
		return false;
	});

	$('#slides .slidesjs-navigation').bind('mouseenter focusin',function(){
		$(this).find('img:eq(0)').attr('src',$(this).find('img:eq(0)').attr('src').replace('_off','_on'));
	});
	$('#slides .slidesjs-navigation').bind('mouseleave focusout',function(){
		$(this).find('img:eq(0)').attr('src',$(this).find('img:eq(0)').attr('src').replace('_on','_off'));
	});
	
	$('.posco-great-bn2 a').bind('mouseenter focusin',function(){
		$('.web_area2.posco-great').stop().animate({'height' : '150px'});
		$('.web_area2.posco-great').find('.con_txt').show();
		$(this).parent().parent().find('p').css({'padding-top' : '20px'});
		$(this).find('img:eq(0)').attr('src',$(this).find('img:eq(0)').attr('src').replace('_off','_on'));
	});
	$('.posco-great-bn2 a').bind('mouseleave focusout',function(){
		$('.web_area2.posco-great').find('.con_txt').hide();
		$('.web_area2.posco-great').stop().animate({'height' : '110px'});
		$(this).parent().parent().find('p').css({'padding-top' : '0px'});
		$(this).find('img:eq(0)').attr('src',$(this).find('img:eq(0)').attr('src').replace('_on','_off'));
	});
	
	$('#slides2 .slidesjs-navigation').bind('mouseenter focusin',function(){
		$(this).find('img:eq(0)').attr('src',$(this).find('img:eq(0)').attr('src').replace('_off','_on'));
	});
	$('#slides2 .slidesjs-navigation').bind('mouseleave focusout',function(){
		$(this).find('img:eq(0)').attr('src',$(this).find('img:eq(0)').attr('src').replace('_on','_off'));
	});
	
	$('#slides3 .slidesjs-navigation').bind('mouseenter focusin',function(){
		$(this).find('img:eq(0)').attr('src',$(this).find('img:eq(0)').attr('src').replace('_off','_on'));
	});
	$('#slides3 .slidesjs-navigation').bind('mouseleave focusout',function(){
		$(this).find('img:eq(0)').attr('src',$(this).find('img:eq(0)').attr('src').replace('_on','_off'));
	});


});
