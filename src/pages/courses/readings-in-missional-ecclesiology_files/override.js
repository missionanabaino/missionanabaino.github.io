// campus list

var campList =   [
	'<div class="chapters">',
    	// '<h5 class="chapter-choose">Select a Campus:</h5>',
		'<a class="chapter-switcher" href="#">Affiliates:</a>',
		'<div class="chapter-inner">',
			'<a href="http://cpcwallingford.org/" target="blank">CPC Wallingford</a>',
		    '<a href="http://www.danburyshepherd.org/" target="blank">CTS Danbury</a>',
		    '<a href="http://cpcfairfield.org/" target="blank">CPC Fairfield</a>',
			'<a href="http://www.cpcinthehill.org/" target="blank">CPC in The Hill</a>',
			'<a href="http://cpcnewhaven.org/" target="blank">CPC New Haven</a>',
			'<a href="http://www.trinitygracect.org/" target="blank">TGC Suffield</a>',
			'<div class="campus-bar"></div>',
			'<a href="https://www.anabaino.org/" class="anbaino" target="blank">Mission Anabaino</a>',
    	'</div> <!-- .chapter-inner -->',
	'</div> <!-- .chapters -->'
].join('');


// add list to the header
$('.header-wrap').prepend(campList);
var switcher = $('a.chapter-switcher');
switcher.append('<span class="black-tri"></span>');
switcher.click(function(){
	$('.chapter-inner').slideToggle(300);
})

// float campus swither to the right
// campusSwitcherFloat();
// function campusSwitcherFloat() {
//     var socialWidth = $('.social').width();
//     $('.chapters').css('right', socialWidth + 15);
// }


