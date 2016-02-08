var body_height = $('body').height();

$(document).ready(function(){
	var config = {
		siteURL		: 'codebra.ru',
		searchSite	: true,
		type		: 'web',
		append		: false,
		perPage		: 8,
		page		: 0
	};

	$('#select_search').find('.select_button').click(function(){
		if ($('#s').val() != "") {
			var el = $(this);
			if (el.hasClass('active')) {
				return false;
			}

			el.siblings().removeClass('active');
			el.addClass('active');

			// Устанавливаем тип поиска
			config.type = el.attr('data-searchType');

			$('#more').fadeOut();

			googleSearch();
		}
	});

	//$('#s').focus();
	//$('#s').val(localStorage.getItem("searchPrev"));

	$('#searchForm').submit(function(){
		if ($('#s').val() != "") {
			$('#body_resultsDiv').css('display', 'block');
			$('.close').css('display', 'block');

			googleSearch();
			//localStorage.setItem("searchPrev", $('#s').val());
		}
		return false;
	});
	
	$('#searchSite,#searchWeb').change(function(){
		config.searchSite = this.id == 'searchSite';
	});
	
	
	function googleSearch(settings){
		settings = $.extend({},config,settings);
		settings.term = settings.term || $('#s').val();
		
		if(settings.searchSite){
			settings.term = 'site:'+settings.siteURL+' '+settings.term;
		}

		var apiURL = 'http://ajax.googleapis.com/ajax/services/search/'+settings.type+'?v=1.0&callback=?';
		var resultsDiv = $('#resultsDiv');
		
		$.getJSON(apiURL,{q:settings.term,rsz:settings.perPage,start:settings.page*settings.perPage},function(r){
			
			var results = r.responseData.results;
			$('#more').remove();
			
			if(results.length){
				var pageContainer = $('<div>',{className:'pageContainer'});

				for(var i = 0; i < results.length; i++){
					// Создаем новый объект результата и запускаем его метод toString:
					pageContainer.append(new result(results[i]) + '');
				}

				if(!settings.append){
					resultsDiv.empty();
				}
				
				pageContainer.append('<div class="clear"></div>')
							 .hide().appendTo(resultsDiv)
							 .fadeIn('slow');
				
				var cursor = r.responseData.cursor;

				if( +cursor.estimatedResultCount > (settings.page+1)*settings.perPage){
					$('<div id = "more">Загрузить еще</div>').appendTo(resultsDiv).click(function(){
						googleSearch({append:true,page:settings.page+1});
						$(this).fadeOut();
					});
				}

				/* высота поиска и прочее */
				if ($(window).width() <= 1024) {
					$('#body_resultsDiv').css('height', $('#resultsDiv').height() + 80);
					$('body').css('height', $('#resultsDiv').height());
					$('#content').css('display', 'none');
				}
			} else {
				resultsDiv.empty();
				$('<p>',{className:'notFound',html:'<div id = "no_search">Не нашел. Попробуйте сформулировать фразу по-другому!</div> <div id = "no_search_img"></div>'}).hide().appendTo(resultsDiv).fadeIn();
			}
		});
	}
	
	function result(r){
		var arr = [];
		switch(r.GsearchResultClass){
			case 'GwebSearch':
				arr = [
					'<div class="webResult">',
					'<h2><a href="',r.unescapedUrl,'" target="_blank">',r.title,'</a></h2>',
					'<p>',r.content,'</p></div>'
				];
			break;
		}
		
		// Метод toString.
		this.toString = function(){
			return arr.join('');
		}
	}
});

$('.close').click(function() {
	$('#body_resultsDiv').css('display', 'none');
	$('.close').css('display', 'none');
	$('body').css('height', body_height);
	$('#content').css('display', 'block');
});

$(document).keydown(function(e) {
	if (e.keyCode === 27) {
		$('#body_resultsDiv').css('display', 'none');
		$('.close').css('display', 'none');
		$('body').css('height', body_height);
		$('#content').css('display', 'block');
		return false;
	}
});

/* ajax сохранение кол-ва кликов по поиску */
$('#searchForm').click(function() {
	$.ajax({
		url: "/ajax/ajax_search.php",
		type: "POST",
		data:{'search_add_post': true},
		cache: false
	});
});