$('document').ready(function() {
	$('.bigdeal').hover(function() {
		$('#head .l_eye').stop().animate(
			{
				width: '750px',
				height: '807px',
				top: '-271px',
				left: '-154px'
			}, 800, 'easeOutElastic'
		);
		$('#head .r_eye').stop().animate(
			{
				width: '750px',
				height: '807px',
				top: '-298px',
				left: '-204px'
			}, 800, 'easeOutElastic'
		);
	}, function() {
		$('#head .l_eye').stop().animate(
			{
				width: '250px',
				height: '269px',
				top: '-2px',
				left: '96px'	
			}, 800
		);
		$('#head .r_eye').stop().animate(
			{
				width: '250px',
				height: '269px',
				top: '-29px',
				left: '46px'
			}, 800
		);
	}); //end hover
	
	
	$('#headflip .flip').hover( function(){
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
	
	$('#flipANDbug .flip').hover( function(){
		$('#flipANDbug .face').stop().animate(
			{
				left: '515px'
			}, 50
		).css({
	        '-moz-transform': 'scaleX(-1)',
	        '-o-transform': 'scaleX(-1)',
	        '-webkit-transform' : 'scaleX(-1)',
	        'transform' : 'scaleX(-1)',
	        'filter' : 'FlipH',
	        '-ms-filter' : 'FlipH'
		});
		$('#flipANDbug .l_eye').stop().animate(
			{
				left: '420px'
			}, 50
		).css({
	        '-moz-transform': 'scaleX(-1)',
	        '-o-transform': 'scaleX(-1)',
	        '-webkit-transform' : 'scaleX(-1)',
	        'transform' : 'scaleX(-1)',
	        'filter' : 'FlipH',
	        '-ms-filter' : 'FlipH'
		}).delay(150).animate(
			{
				width: '750px',
				height: '807px',
				top: '-271px',
				left: '170px'
			}, 1200, 'easeOutElastic'
		);
		$('#flipANDbug .r_eye').stop().animate(
			{
				left: '469px'
			}, 50
		).css({
	        '-moz-transform': 'scaleX(-1)',
	        '-o-transform': 'scaleX(-1)',
	        '-webkit-transform' : 'scaleX(-1)',
	        'transform' : 'scaleX(-1)',
	        'filter' : 'FlipH',
	        '-ms-filter' : 'FlipH'
		}).delay(150).animate(
			{
				width: '750px',
				height: '807px',
				top: '-298px',
				left: '219px'
			}, 1200, 'easeOutElastic'
		);			
	}, function(){
		$('#flipANDbug .face').stop().animate(
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
		$('#flipANDbug .l_eye').stop().css({
	        '-moz-transform': '',
	        '-o-transform': '',
	        '-webkit-transform' : '',
	        'transform' : '',
	        'filter' : '',
	        '-ms-filter' : ''
		}).animate(
			{
				width: '250px',
				height: '269px',
				top: '-2px',
				left: '96px'
			}, 50
		);
		$('#flipANDbug .r_eye').stop().css({
	        '-moz-transform': '',
	        '-o-transform': '',
	        '-webkit-transform' : '',
	        'transform' : '',
	        'filter' : '',
	        '-ms-filter' : ''
		}).animate(
			{
				width: '250px',
				height: '269px',
				top: '-29px',
				left: '46px'
			}, 50
		);
	}



); //end hover
}); //end ready