$(document).ready(function(){
	$('.sns_area a:last-child').css({'background' : 'none'});
	
	$('.header_topCon .sns_area a').bind('mouseenter focusin',function(){
		$(this).find('img:eq(0)').attr('src',$(this).find('img:eq(0)').attr('src').replace('_off','_on'));
	});
	$('.header_topCon .sns_area a').bind('mouseleave focusout',function(){
		$(this).find('img:eq(0)').attr('src',$(this).find('img:eq(0)').attr('src').replace('_on','_off'));
	});

	var sitelink = $('.global_site');
    
    sitelink.find("a.open").click(function (){
    	$(this).hide();
    	$(this).parent().next("dd").show().find("ul li:eq(0)").find("a").focus();
    });
    
    sitelink.find("a.close").click(function (){
    	$(this).parent("dd").hide();
    	$($(this).parent().prev('dt').find("a.open")).show().focus();
    });


	$('.gnb_sub > li:last-child > a').css({'border-bottom' : '1px solid #ccc;'});
	$('.gnb_sub').hide();
	$('.sub-menu').hide();
	$('.gnb > li ').on('mouseenter',function(){
		$('.gnb > li').removeClass('active');
		$(this).addClass('active');
		$('.gnb_sub').hide();
		$(this).find('> .gnb_sub').show();
	});
	$('.gnb > li').on('mouseleave',function(){
		$(this).removeClass('active');
		$(this).find('> .gnb_sub').hide();
	});

	$('.gnb > li > a').on('focus',function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
		$('.gnb_sub').hide();
		$(this).next().show();
	});

	$('.gnb > li:last-child .gnb_sub > li:last-child .sub-menu li:last-child a').focusout(function(){
		$('.gnb > li').removeClass('active');
		$('.gnb_sub').hide();
	});

	
	$('.gnb_sub > li').on('mouseenter',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.sub-menu').hide();
		$(this).find('> .sub-menu').show();
	});
	$('.gnb_sub > li').on('mouseleave',function(){
		$(this).removeClass('active');
		$('.sub-menu').hide();
		
	});

	$('.gnb_sub > li > a').on('focus',function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
		$('.sub-menu').hide();
		$(this).parent().find('> .sub-menu').show();
	});
	$('.sub-menu li:last-child a').focusout(function(){
		$('.gnb_sub > li').removeClass('active');
		$('.sub-menu').hide();
	});

	$.each($('.gnb_sub > li').has('>.sub-menu'), function() {
		$(this).find('>a').addClass('on');
    });

$('.m-global_site li:last-child a').css({'background' : 'none'});

$('.all_menu').hide();
$('.all_menu .menu_sub_con').hide();
$('.btn_nav1.close').hide();
$('.btn_nav1.open').click(function () {
	$('.all_menu').show();
	$(this).parent().find('a.btn-all_menu.open').focus();
	$('.btn_nav1.open').hide();
	$('.btn_nav1.close').show();
});	
$('.btn_nav1.close').click(function () {
	$('.all_menu').hide();
	$('.btn_nav1.close').hide();
	$('.btn_nav1.open').show();
	$(this).parent().find('a.btn_nav1.open').focus();
	return false;
});

$('.all_menu .btn-all_menu.open').click(function () { 
	$('.all_menu .btn-all_menu.open').hide();
	$('.all_menu .btn-all_menu.close').show();
});
$('.all_menu .btn-all_menu.close').click(function () { 
	$('.all_menu .btn-all_menu.close').hide();
	$('.all_menu .btn-all_menu.open').show();
});
$('.all_menu .btn-all_menu').click(function () { 
	$('.all_menu .menu_sub_con').slideToggle();
});


	$('.menuLink1 .menu').hide();
	$('.menuLink1 .open').on('click',function(){
		$(this).next('.menuLink1 .menu').slideToggle();
		$('.menuLink1 .menu').hide();
		$(this).next().show();
	});
	$('.menuLink1 .open').click(function(){
		$('.menuLink2 .menu').hide();
		$('.menuLink2 .open').removeClass('on').attr('title','Open menu');
		$(this).toggleClass('on');
		$(this).attr('title','Close');
		$('.menuLink1 .open').not('.on').attr('title','open menu');
	});

	$('.menuLink2 .menu').hide();
	$('.menuLink2 .open').on('click',function(){
		$(this).next('.menuLink2 .menu').slideToggle();
		$('.menuLink2 .menu').hide();
		$(this).next().show();
	});
	$('.menuLink2 .open').click(function(){
		$('.menuLink1 .menu').hide();
		$('.menuLink1 .open').removeClass('on').attr('title','Open menu');
		$(this).toggleClass('on');
		$(this).attr('title','Close');
		$('.menuLink2 .open').not('.on').attr('title','open menu');
	});


	$('.sns_area2 a:last-child').css({'background' : 'none'});
	$('.footer_menu li:last-child a').css({'background' : 'none'});
	$('.serviceLink li:last-child a').css({'background' : 'none'});


	$('.sub_top').bind('mouseenter focusin',function(){
		$(this).find('a img:eq(0)').attr('src',$(this).find('a img:eq(0)').attr('src').replace('_off','_on'));
	});
	$('.sub_top').bind('mouseleave focusout',function(){
		$(this).find('a img:eq(0)').attr('src',$(this).find('a img:eq(0)').attr('src').replace('_on','_off'));
	});

	$('#table-view .title dl.date_area dd:last-of-type').css({'background' : 'none'});
	$('.family_site > dl > dd > div dl:first-of-type').css({'border-left' : '0px'});
	$('.table-list2 th:first-child').css({'border-left' : '0px'});
	$('.table-list2 td:first-child').css({'border-left' : '0px'});

	$('.web_area .api_con').hide();
	$('.web_area .btn_api.close').hide();
	$('.btn_api.open').click(function() {
		$('.btn_api.open').hide();
		$('.btn_api.close').show();
		$('.web_area .api_con').show();
	});
	$('.btn_api.close').click(function() {
		$('.btn_api.close').hide();
		$('.web_area .api_con').hide();
		$('.btn_api.open').show();
		$('.btn_api.open').focus();
	});

	$('.preNext dd:last-of-type').css({'border-bottom' : '0px'});

	$('#faq-list dd:last-of-type').css({'border-bottom' : '0px'});

	$('#faq-list > dd').hide();

	var click = $('#faq-list > dt a');
	$('#faq-list > dt a').bind('click focusIn', function(e) {
		e.preventDefault();
		var myClick = $(this).parent();
		if (myClick.hasClass('on')){
			click.parent().removeClass('on');
			click.parent().next().hide();
			myClick.removeClass('on');
		} else {
			click.parent().removeClass('on');
			click.parent().next().hide();
			myClick.addClass('on');
			myClick.next().show();
		}
		if (myClick.next('dd').css('display') == ('block')){
			click.attr('title','Open answer');
			myClick.find('a').attr('title','Close answer');
		} else{
			click.attr('title','Close answer');
			$('#faq-list > dt a').attr('title','Open answer');
		}
	});


	$('.thum_list li:nth-child(1)').css({'margin-left' : '0'});

	$('.report-list li:nth-child(even)').css({'margin-right' : '0'});

	$('.tab_con li:nth-child(1)').css({'border-top' : '1px solid #d6d6d6'});
	$('.tab_con li:nth-child(2)').css({'border-top' : '1px solid #d6d6d6'});
	$('.tab_con li:nth-child(3)').css({'border-top' : '1px solid #d6d6d6'});
	$('.tab_con li:nth-child(4)').css({'border-top' : '1px solid #d6d6d6'});
	$('.tab_con li:nth-child(5)').css({'border-top' : '1px solid #d6d6d6'});

	$('.tab2_con li:last-child').css({'margin-right' : '0px'});

	$(".tabCont").hide(); 
	$(".tabCont:first").show(); 

	$('.tab1 li').on('click focus', function(index){
		$(this).addClass('on').siblings().removeClass('on');
		$('.tabCont').hide();
		var activeTab = $(this).find('a').attr("href"); 
		$(activeTab).show() 
		return false;
	});

	//tab_menu2
	$(".tabCont2").hide(); 
	$(".tabCont2:first").show(); 

	$('.tab2 li').on('click focus', function(index){
		$(this).addClass('on').siblings().removeClass('on');
		$('.tabCont2').hide();
		var activeTab = $(this).find('a').attr("href"); 
		$(activeTab).show() 
	});

	$('.tab3_con li:first-child a').css({'margin-left' : '0px'});
	$('.tab4_con li:first-child a').css({'margin-left' : '0px'});

	//tabLink
	$('.tabLink .tab3_con').hide();
	$('.tabLink .open').on('click',function(){
		$(this).next('.tabLink .tab3_con').slideToggle();
		$('.tabLink .tab3_con').hide();
		$(this).next().show();
	});

	$('.tabLink .open').click(function(){
		$(this).toggleClass('on');
		$(this).attr('title','Close menu');
		$('.tabLink .open').not('.on').attr('title','open menu');
		//heightSet();
	});

	$('.family_info li:nth-child(5)').css({'margin-left' : '0'});

	$('.compnay_list06 li:nth-child(8)').css({'padding-bottom' : '0'});

	$('.family_info li:nth-child(5)').css({'margin-left' : '0'});

	$('.finacial_list li:nth-child(even)').css({'margin-left' : '0'});
	$('.invest_bn li:last-child').css({'background' : 'none'});

	$('.pop_table01 tr td:nth-child(2)').css({'border-right' : '1px solid #d6d6d6'});
	$('.btn_style02 li:nth-child(2)').css({'margin-left' : '5px'});

	$('.product_posco li:nth-child(3n)').css({'margin-right' : '0'});
	$('.product_quick li:nth-child(3n)').css({'margin-right' : '0' , 'background' : 'none'});
	$('.btn_product span a:last-child').css({'margin-right' : '0'});

	$('.processus li:last-child').css({'border-bottom' : '0'});

	$('.advice-center-box li:last-child').css({'border-bottom' : '0'});
	$('.sustain_bn li:nth-child(3n)').css({'margin-right' : '0' , 'background' : 'none'});
	
	$('.customer_img_list li:nth-child(2) span').css({'background' : 'url(../img/icon_customer02.gif) 0 12px no-repeat' , 'padding-left' : '60px'});
	$('.customer_img_list li:nth-child(3) span').css({'background' : 'url(../img/icon_customer03.gif) 0 2px no-repeat' , 'padding-left' : '54px'});
	$('.customer_img_list li:nth-child(4) span').css({'background' : 'url(../img/icon_customer04.gif) 0 10px no-repeat' , 'padding-left' : '55px'});
	
	$('.btn_style02 li:nth-child(2)').css({'margin-left' : '5px'});
	

	$('.global_area .gBlog li:last-child').css({'border-bottom' : '0'});
	$('.facebook_area .sns-con > li:first-child').css({'margin-left' : '0'});
	$('.posco_news > li:nth-child(3n)').css({'margin-right' : '0'});
	
	$('#new-air dl:last-of-type').css({'border-bottom' : '0px'});
	$('.prcenter_bn1 li:last-child').css({'margin-right' : '0' , 'background' : 'none'});

	$('.tv-list > li:nth-child(3n)').css({'margin-right' : '0'});

	$('.video-view').hide();
	$('.tv-list > li:nth-child(2) .video-view .arrow').css({'left' : '475px'});
	$('.tv-list > li:nth-child(3) .video-view .arrow').css({'left' : '800px'});

	$('.tv-list .movie_area').on('click', function(index){
		$('.tv-list li').removeClass('on');
		$(this).addClass('on').siblings().removeClass('on');
		$('.video-view').hide();
		$(this).parent().parent().find('.video-view').show();
		$("html,body").animate({scrollTop:$(this).parent().parent().find('.video-view').offset().top - 15});
	});
	$('.tv-list .movie_btn .play2').on('click', function(index){
		$('.tv-list li').removeClass('on');
		$(this).addClass('on').siblings().removeClass('on');
		$('.video-view').hide();
		$(this).parent().parent().parent().parent().find('.video-view').show();
		$("html,body").animate({scrollTop:$(this).parent().parent().find('.video-view').offset().top - 15});
	});

	$('.video-view .btn-close').on('click', function(index){
		$(this).parent().parent().find('.video-view').hide();
		$(this).parent().parent().find('.movie_btn > a.play2').focus();
	});
	
	$('.tv-list li').bind('mouseenter focusin',function(){
		$(this).find('> div').css({'background' : '#f9f9f9'});
	});
	$('.tv-list li').bind('mouseleave focusout',function(){
		$(this).find('> div').css({'background' : '#fff'});
	});

	$('.ul_photo_2.ul_type_1 li > a').bind('click',function(){
		$(this).viewContent1('pImg');
		return false;
	});
	$('.ul_type_1 li > a').bind('click',function(){
		$(this).viewContent1('aLink');
		return false;
	});

	$.fn.viewContent1 = function(cur){
		var $this = $(this),
			$cur = '<span class="span_current">Current Image</span>',
			$parent = $this.closest('li'),
			$allTarget = $parent.closest('.ul_type_1').find('li'),
			$allCur = $allTarget.find('.span_current');
		if (!$parent.hasClass('on')){
			$allTarget.removeClass('on');
			if (typeof cur != 'undefiend'){
				$allCur.remove();
				switch(cur){
					case 'aLink':
						$this.append($cur);
					break;
					case 'pImg':
						$this.find('.img').append($cur);
					break;
				}
			}
			$parent.addClass('on');
		}
	};

	$('.digital-list > li:nth-child(3n)').css({'margin-right' : '0'});

	$('.card-list > li:nth-child(3n)').css({'margin-right' : '0'});

	$('.download-list li:nth-child(even)').css({'margin-right' : '0'});

	$('.culture-info-list > li:nth-child(3n)').css({'margin-right' : '0'});
	$('.culture-list > li:nth-child(3n)').css({'margin-right' : '0'});
	$('.culture-list2 > li:nth-child(3n)').css({'margin-right' : '0'});
	$('.last-culture-list > li:nth-child(3n)').css({'margin-right' : '0'});

	$('.event-list dd.event-img:last-of-type').css({'border-bottom' : '1px solid #707580'});

	$('.selectBox .menu').hide();
	$('.selectBox .open').on('click',function(){
		$(this).next('.selectBox .menu').slideToggle();
		$('.selectBox .menu').hide();
		$(this).next().show();
	});


	$('.event-select .box.close').hide();
	$('.event-select .box.open').bind('click',function(){
		$('.selectBox ul').show();
		$('.event-select .box.open').hide();
		$('.event-select .box.close').show();
		$('.event-select .box.close').css({'display' : 'block'});
		$('.event-select .box').focus();
	});
	$('.event-select .box.close').bind('click',function(){
		$('.selectBox ul').hide();
		$('.event-select .box.open').show();
		$('.event-select .box.close').hide();
		$('.event-select .box').focus();
	});

	$('.selectBox ul a').bind('click',function(){
		var urlLi = $(this).html();
		var linkUrl = $(this).attr('linkurl');
		$('.event-select .box').html(urlLi);
		$('.selectBox ul').hide();
		$('.event-select .box.open').show();
		$('.event-select .box.close').hide();
		$('.event-select .goBtn').attr('href',linkUrl);
		$('.event-select .box').focus();
	});

	$(".asia, .osania").hover(function() {
		$(".global_area>img").attr("src","../../../../images/eng5/family/img_global_asia.gif");
			}, function() {
		$(".global_area>img").attr("src","../../../../images/eng5/family/img_global.gif");
	});
	$(".america").hover(function() {
		$(".global_area>img").attr("src","../../../../images/eng5/family/img_global_am.gif");
			}, function() {
		$(".global_area>img").attr("src","../../../../images/eng5/family/img_global.gif");
	});
	$(".europe, .africa").hover(function() {
		$(".global_area>img").attr("src","../../../../images/eng5/family/img_global_eu.gif");
			}, function() {
		$(".global_area>img").attr("src","../../../../images/eng5/family/img_global.gif");
	});

	$(".asia, .osania").bind('focus',function(){
		$(".global_area>img").attr("src","../../../../images/eng5/family/img_global_asia.gif");
	});
	$(".asia, .osania").bind('focusout',function(){
		$(".global_area>img").attr("src","../../../../images/eng5/family/img_global.gif");
	});
	$(".america").bind('focus',function(){
		$(".global_area>img").attr("src","../../../../images/eng5/family/img_global_am.gif");
	});
	$(".america").bind('focusout',function(){
		$(".global_area>img").attr("src","../../../../images/eng5/family/img_global.gif");
	});
	$(".europe, .africa").bind('focus',function(){
		$(".global_area>img").attr("src","../../../../images/eng5/family/img_global_eu.gif");
	});
	$(".europe, .africa").bind('focusout',function(){
		$(".global_area>img").attr("src","../../../../images/eng5/family/img_global.gif");
	});

	//���䴺��
	$('#photo-news li:nth-child(3n)').css({'margin-right' : '0'});
	$('.detail_view').hide();
	
	//Youtube Iframe z-index 
    $('.video-box > iframe').each(function(){
        var url = $(this).attr("src");
        if(url.indexOf('youtube') > -1) {
        	$(this).attr("src",url+"?wmode=transparent");
        }
        
    });	
	
});


$(window).resize(function() {
	adjustStyle($(this).width());
});
$(window).load(function() {
	adjustStyle($(this).width());
});

function adjustStyle(width) {
    var width = parseInt(width);
	if ((width < 980)) {
		$('.tab_con li:nth-child(3)').css({'border-top' : '0'});
		$('.tab_con li:nth-child(4)').css({'border-top' : '0'});
		$('.tab_con li:nth-child(5)').css({'border-top' : '0'});
		$('.tab_con6 li:nth-child(6)').css({'border-top' : '0'});
		$('.tab_con7 li:nth-child(6)').css({'border-top' : '0'});
		$('.tab_con7 li:nth-child(7)').css({'border-top' : '0'});
		$('.energy-list01 dd .energy_img_list li:nth-child(2)').css({'margin-top' : '15px'});
		
		$('.tv-list > li:nth-child(2) .video-view').css({'margin-left' : '0px'});
		$('.tv-list > li:nth-child(3) .video-view').css({'margin-left' : '0px'});

		$('.newsletter-list li:nth-child(even)').css({'margin-right' : '0'});
		
	}else {
        $('.tab_con li:nth-child(3)').css({'border-top' : '1px solid #d6d6d6'});
		$('.tab_con li:nth-child(4)').css({'border-top' : '1px solid #d6d6d6'});
		$('.tab_con li:nth-child(5)').css({'border-top' : '1px solid #d6d6d6'});
		$('.tab_con6 li:nth-child(6)').css({'border-top' : '1px solid #d6d6d6'});
		$('.tab_con7 li:nth-child(6)').css({'border-top' : '1px solid #d6d6d6'});
		$('.tab_con7 li:nth-child(7)').css({'border-top' : '1px solid #d6d6d6'});
		$('.energy-list01 dd .energy_img_list li:nth-child(2)').css({'margin-top' : '0px'});

		$('.tv-list > li:nth-child(2) .video-view').css({'margin-left' : '-333px'});
		$('.tv-list > li:nth-child(3) .video-view').css({'margin-left' : '-666px'});

		$('#photo-news li').bind('mouseenter',function(){
		$(this).find('.detail_view').show();
		
		});
		$('#photo-news li').bind('mouseleave',function(){
			$(this).find('.detail_view').hide();
			
		});

		$('#photo-news li').bind('focusin',function(){
			$(this).find('.detail_view').show();
			$(this).siblings().find('.detail_view').hide();
		});

		$('.newsletter-list li:nth-child(4n)').css({'margin-right' : '0'});
    } 
}

function layer_open(el){
	var temp = $('#' + el);
	var bg = temp.prev().hasClass('bg');
	if(bg){
		$('.layer-popup').fadeIn();
		 $("body").css("overflow","hidden");
	}else{
		temp.fadeIn();
	}
	if (temp.outerHeight() < $(document).height() ) temp.css('margin-top', '-'+temp.outerHeight()/2+'px');
	else temp.css('top', '0px');
	if (temp.outerWidth() < $(document).width() ) temp.css('margin-left', '-'+temp.outerWidth()/2+'px');
	else temp.css('left', '0px');
	temp.find('a.btn-close').click(function(e){
		if(bg){
			$('.layer-popup').fadeOut();
			 $("body").css("overflow","auto");
		}else{
			temp.fadeOut();
		}
		e.preventDefault();
	});
}


$(document).ready(function(){
	var handler = function(e){
		e.preventDefault();
	}
	function wrapWindowByMask(){
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		
		$('#mask').css({'width':maskWidth,'height':maskHeight});  
		$('#mask').fadeTo("slow",0.6);

	}

	$('.search_area').hide();
	$(function() {
		$(".btn_search.search_open").click(function(e){
			$('.search_area').show();
			$("body").css("overflow","hidden");
			if ($(this).hasClass("active")) {
				$(this).removeClass("active");
				e.preventDefault();
				$('#mask').hide();
				$('.search_area').hide();
				$(window).unbind('touchmove', handler);

			} else {
				$(this).addClass("active");
				e.preventDefault();
				wrapWindowByMask();
				$(window).bind('touchmove', handler);
			}

		$('.btn_search.search_close').click(function(){
			$(this).parent().parent().find('a.search_open').focus();
			$("body").css("overflow","auto");
			$(".search_open").removeClass("active");
			$('.search_area').hide();
			$('#mask').hide();
		});
		return false;
		});

		var allmenuWidth = $(window).width();
		$('.all_menu2').css({'left' : -allmenuWidth});
		$(".btn_nav2.open").click(function(e){

			$("body").css("overflow-y","hidden");
			$(".all_menu2").css("display","block");
			
			if ($(this).hasClass("active")) {
				$(this).removeClass("active");
				e.preventDefault();
				$('#mask').hide();
				$(".all_menu2").animate({left:-allmenuWidth},200);

			} else {
				$(this).addClass("active");
				e.preventDefault();
				wrapWindowByMask();
				$('#mask').css({'background' : 'none' , "margin-left" : "210px"});
				$(".all_menu2").animate({left:0},200);
			}

			return false;
		});
		$('.btn_nav2.close').click(function(){
			$("body").css("overflow","auto");
			$(".all_menu2").animate({left:-allmenuWidth},200);
			$(".all_menu2").css("display","none");
			$(".btn_nav2.open").removeClass("active");
			$('#mask').css({'background' : '#000' , "margin-left" : "0px"});
			$('#mask').hide();
			
			return false;
		});
		
		
		$('#mask').click(function () {  
			$(this).css({'background' : '#000' , "margin-left" : "0px"});
			$(this).hide();
			$("body").css("overflow","auto");
			$(".all_menu2").animate({left:-allmenuWidth},200);
			$(".all_menu2").css("display","none");
			$(".btn_nav2.open").removeClass("active");
			$(".search_open").removeClass("active");
			$(this).parent().parent().find(".search_area").hide();
			$(window).unbind('touchmove', handler);
		});
	});

	$('.m-global_site li:last-child a').css({'background' : 'none'});

});

$(document).bind('mobileinit', function(){
	$.mobile.ajaxEnabled = false;
});

$(window).resize(function() {
	 if($(document.activeElement).attr('type') === 'text') {
       
    } else {
       $("body").css("overflow","auto");
		$(".btn_nav2.open").removeClass("active");

		$(".search_open").removeClass("active");
		$('.search_area').hide();

		$('#mask').hide();
    }
});

var navCurrentParam1;
var navCurrentParam2;
var navCurrentParam3;
$(function() {
	var $topnav = $('.all_menu2 .all_menu2_con'),
		$topnavmn = $topnav.find('>li'),
		$topnavsbmn = $topnavmn.find('>ul');

	$topnavmn.children('a').click(function() {
		if ($(this).parent().is('li:has("ul")')) {
			if (!$(this).is('.on')) {
				$topnavmn.children('a').removeClass('on');
				$topnavsbmn.slideUp(250).find('>li >ul').hide();
				$(this).addClass('on');
				$(this).parent().find('>ul').slideDown(250).find('>li a').removeClass('on');
			} else {
				$(this).removeClass('on');
				$(this).parent().find('>ul').slideUp(250);
			}
			return false;
		} else {
			$topnavmn.children('a').removeClass('on');
			$topnavsbmn.slideUp(250);
			$(this).addClass('on');
		}
	});
	
	var $topnavmnDepth2 = $topnavsbmn.find('>li'),
		$topnavsbmnDepth2 = $topnavmnDepth2.find('>ul');
	$topnavmnDepth2.children('a').click(function() {
		if ($(this).parent().is('li:has("ul")')) {
			if (!$(this).is('.on')) {
				$topnavmnDepth2.children('a').removeClass('on');
				$topnavsbmnDepth2.slideUp(200);
				$(this).addClass('on');
				$(this).parent().find('>ul').slideDown(200).find('>li a').removeClass('on');
			} else {
				$(this).removeClass('on');
				$(this).parent().find('>ul').slideUp(200);
			}

			if ( $(this).parent().attr('LINK')==undefined ) {
				return false;
			}
		} else {
			$topnavmnDepth2.children('a').removeClass('on');
			$topnavsbmnDepth2.slideUp(200);
			$(this).addClass('on');
		}
	});
	
	var $topnavCurrent1 = $topnav.find('.nvparam'+navCurrentParam1);
	var $topnavCurrent2 = $topnav.find('.nvparam'+navCurrentParam1+'_'+navCurrentParam2);
	var $topnavCurrent3 = $topnav.find('.nvparam'+navCurrentParam1+'_'+navCurrentParam2+'_'+navCurrentParam3);
	
	function currentReset() {
		if (!$topnavCurrent1.children('a').is('.on')) {
			$topnavmn.children('a').removeClass('on').parent().find('>ul').hide().find('>li a').removeClass('on');
			$topnavCurrent1.children('a').addClass('on').parent().find('>ul').show();
			$topnavCurrent2.children('a').addClass('on').parent().find('>ul').show();
			$topnavCurrent3.children('a').addClass('on');
		}
	}
	currentReset();
});






