/*------------------------------------------------------------------------------
	Design Style 69 > Core JavaScript
	Handcrafted by Church Plant Media
------------------------------------------------------------------------------*/

$(function(){

/*------------------------------------------------------------------------------
     Global Scripts
------------------------------------------------------------------------------*/

// open external links in new window
	$('a[href^="http"]').attr('target', '_blank');

// build social icons
	/*
	socialIcons();
	function socialIcons(){
		var social = $('.social');
		social.find('a[href*="twitter.com"]').addClass('twitter');
		social.find('a[href*="facebook.com"]').addClass('facebook');
		social.find('a[href*="vimeo.com"]').addClass('vimeo');
		social.find('a[href^="#"]').addClass('search-icon');
		social.find('a').filter('[href^="/map"],[href^="/directions"]').addClass('map-icon');
	}
	*/

// display search box in icon area
    $('.search').on('click', showSearch);
    function showSearch(){
        $('.search-box').toggle(100);
        $('.services').toggle(10);
    }

// keep search icon :hover when box out
    $('.search').toggle(
        function() {
            $('.search').unbind('hover');
        },
        function() {
            $('.social .search').spriteFade({offset: '-112px -28px', time: 150});
        }
    );

// resize content if sidebar > page && !sermons
//    if (!$('#content').hasClass('sermon-index')) {
//        var sidebar = $('.columns .left').height();
//        var content = $('.columns .right').height();
//        if (sidebar > content) {
//            // added height for dynamic twitter widget
//            $('#content').css('height', sidebar + 180);
//        }
//    }

// resize content if sidebar > page
        var sidebar = $('.columns .left').height();
        var content = $('.columns .right').height();
        if (sidebar > content) {
            // added height for dynamic twitter widget
            $('#content').css('min-height', sidebar + 180);
        }


// remove border above banner images
    if ($('.banner').length > 0) {
        $('header').css('border-bottom', 0);
    }

// center dropdown menus to parent's width
    $('#nav > li').each(function(){
        width = 0 - Math.round((226 - $(this).width())/2);
        // pseudo-children require slightly different algorithm
        if ($(this).is(':first-child')) {
            width = 0 - Math.round((226 - ($(this).width() - 40))/2);
        }
        if ($(this).is(':last-child')) {
            width = 0 - Math.round((226 - ($(this).width() + 40))/2);
        }
        $(this).find('> ul').css('left', width + 'px');
    });

// hide rotator arrows on homepage when # of images = 1
    if ($('body').is('#home')) {
        if ($('.hero-carousel article').size() <= 1) {
            $('.hero-carousel-nav').hide();
            $('.hero').css('height', 'auto');
            $('.hero-carousel article').css({
                'width': '100%',
                'height' : 'auto',
                'line-height' : '0'
            });
            $('.hero-carousel article img').css('position', 'relative');
        } else if ($('.hero-carousel article').size() == 2) {
            $('.hero-carousel article:nth-child(2)').hide();
            $('.hero-carousel-nav').hide();
            $('.hero').css('height', 'auto');
            $('.hero-carousel article').css({
                'width': '100%',
                'height' : 'auto',
                'line-height' : '0'
            });
            $('.hero-carousel article img').css('position', 'relative');
        }
    }
// add extra span element to dropdown lists
	$('.sorting select').each(function(){
		var item = $(this);
		item.wrap('<span id="select'+this.name+'">'+this.options[0].text+'</span>');
	});

/*------------------------------------------------------------------------------
    Blog Scripts
------------------------------------------------------------------------------*/

// activate blog sorting filter dropdowns
	$('.blog-sort select').on('change', function(){
		if(this.selectedIndex != 0){
			window.location = this.value;
		}
	});

// prevent recursive blog category url madness
	if(window.location.href.indexOf("category") >= 0 || window.location.href.indexOf("keyword") >= 0){
    	$('.blog-categories').hide();
    }

// prettify comment status messages
    if ( $('#comment-status p').length > 0 ) {
        message = $('#comment-status p');
        $('.comment-leave').html(message);
    }
    if ( $('#error ul li').length > 0 ) {
        message = $('#error');
        $('.comment-leave').html(message);
    }

/*------------------------------------------------------------------------------
    Calendar Scripts
------------------------------------------------------------------------------*/

// switch the calendar tab views
	$('#cal-switch a').on('click', switchCalTabs);
	function switchCalTabs(){
		$('#list-view')[ this.rel == 'events-calendar' ? 'hide' : 'fadeIn']();
    	$('#events-calendar')[ this.rel == 'events-calendar' ? 'fadeIn' : 'hide']();
        $('.category-btn')[ this.rel == 'events-calendar' ? 'show' : 'hide']();
        $('.category-box input').prop('checked', true);
        $('.category-box').hide();
        $('#cal-switch li').removeClass('current');
    	$(this).parent().addClass('current');
	    return false;
	}

// toggle the category box in the calendar
    $('.category-btn').live('click', function(){
        $('.category-box').fadeToggle(150);
    });

// activate the calendar-view category checkboxes (in pop-out)
    $('#filter_list input').bind('click', filterCalEvents);
    function filterCalEvents() {
        var self = this;
        var listItems = $('#events-calendar li.category_'+this.value)[this.checked ? 'fadeIn' : 'fadeOut'](150);
        if(listItems){
            listItems.each(function(){
                var me = $(this),
                    dad	= me.parent();
                if(self.checked){
                    dad.show();
                }
                else {
                    var blind = dad.find('.event_details:visible');
                }
            });
        }
    }

// activate the list-view category checkboxes (in sidebar)
    $('#event-categories input').bind('click', filterListEvents);
    function filterListEvents() {
        var self = this;
        var listItems = $('#list-view div.category_'+this.value)[this.checked ? 'fadeIn' : 'fadeOut'](150);
        if(listItems){
            listItems.each(function(){
                var me = $(this),
                    dad	= me.parent();
                if(self.checked){
                    dad.show();
                }
                else {
                    var blind = dad.find('.event_details:visible');
                }
            });
        }
    }


/*------------------------------------------------------------------------------
     Fancy Hover Transitions
------------------------------------------------------------------------------*/
/*
	$('.social .twitter').spriteFade({offset: '0px -28px', time: 150});
	$('.social .facebook').spriteFade({offset: '-28px -28px', time: 150});
	$('.social .vimeo').spriteFade({offset: '-56px -28px', time: 150});
*/
	// $('.social .map-icon').spriteFade({offset: '-84px -28px', time: 150});
	// $('.social .search-icon').spriteFade({offset: '-112px -28px', time: 150});
	// $('.view-all-btn').spriteFade({offset: '0px -37px', time: 100});
	// $('.listen-btn').spriteFade({offset: '0px -49px', time: 100});
	// $('#home .follow-btn').spriteFade({offset: '0px -63px', time: 100});
	// $('#subpage .follow-btn').spriteFade({offset: '0px -36px', time: 100});
	// $('.blog-feed-btn').spriteFade({offset: '0px -49px', time: 100});
	// $('.blog-share-btn').spriteFade({offset: '0px -53px', time: 100});
    // $('.sermon-feed-btn').spriteFade({offset: '0px -49px', time: 100});
    // $('.sermon-listen-btn').spriteFade({offset: '0px -53px', time: 100});

/*------------------------------------------------------------------------------
     Fin.
------------------------------------------------------------------------------*/

});
