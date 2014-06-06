$('document').ready(function() {
	$('.bigdeal').hover(function() {
		$('.l_eye').stop().animate(
			{
				width: '750px',
				height: '807px',
				top: '-271px',
				left: '-154px'
			}, 800, 'easeOutElastic'
		);
		$('.r_eye').stop().animate(
			{
				width: '750px',
				height: '807px',
				top: '-298px',
				left: '-204px'
			}, 800, 'easeOutElastic'
		);
	}, function() {
		$('.l_eye').stop().animate(
			{
				width: '250px',
				height: '269px',
				top: '-2px',
				left: '96px'	
			}, 800
		);
		$('.r_eye').stop().animate(
			{
				width: '250px',
				height: '269px',
				top: '-29px',
				left: '46px'
			}, 800
		);
	}); //end hover
	
	
	$('.flip').hover( function(){
		$('#headflip .face').stop().animate(
			{
				left: '465px'
			}, 50
		).css({
	        '-moz-transform': 'scaleX(-1)',
	        '-o-transform': 'scaleX(-1)',
	        '-webkit-transform' : 'scaleX(-1)',
	        'transform' : 'scaleX(-1)',
	        'filter' : 'FlipH',
	        '-ms-filter' : 'FlipH'
		});
	}, function(){
		$('#headflip .face').stop().animate(
			{
				left: '0px'
			}, 50
		).css({
	        '-moz-transform': '',
	        '-o-transform': '',
	        '-webkit-transform' : '',
	        'transform' : '',
	        'filter' : '',
	        '-ms-filter' : ''
		});
		
	}); //end other hover
}); //end ready