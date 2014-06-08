$('document').ready(function() {
	$('.bug').hover(function() {
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
		).addClass('reversedimg');
	}, function(){
		$('#headflip .face').stop().animate(
			{
				left: '0px'
			}, 50
		).removeClass('reversedimg');
		
	}); //end other hover
	
	$('#flipANDbug .flip').hover( function(){
		$('#flipANDbug .face').addClass('reversedimg').animate({left: '515px'}, 60);
		$('#flipANDbug .l_eye').addClass('reversedimg').stop().animate({left: '420px'}, 60).delay(200).animate(
			{
				width: '750px',
				height: '807px',
				top: '-271px',
				left: '170px'
			}, 1200, 'easeOutElastic'
		);
		$('#flipANDbug .r_eye').addClass('reversedimg').stop().animate({left: '469px'}, 60).delay(200).animate(
			{
				width: '750px',
				height: '807px',
				top: '-298px',
				left: '219px'
			}, 1200, 'easeOutElastic'
		);			
	}, function(){
		$('#flipANDbug .face').removeClass('reversedimg').stop().animate({left: '0px'}, 100);
		$('#flipANDbug .l_eye').removeClass('reversedimg').stop(true, true).animate(
			{
				width: '250px',
				height: '269px',
				top: '-2px',
				left: '96px'
			}, 100
		);
		$('#flipANDbug .r_eye').removeClass('reversedimg').stop(true, true).animate(
			{
				width: '250px',
				height: '269px',
				top: '-29px',
				left: '46px'
			}, 100
		);
	}
); //end hover

$('#eyeroll .eyeroll').click(function() {
	$('#eyeroll .l_eye').stop(true, false).animate(
		{
			top: '-6px',
			left: '100px'
		}, 400, 'easeInCubic' // to mid right
	).animate(
		{
			top: '-10px',
			left: '96px'
		}, 350, 'linear' // to top center
	).animate(
		{
			top: '-6px',
			left: '92px'
		}, 250, 'linear' // to mid left
	).animate(
		{
			top: '-2px',
			left: '96px'
		}, 250, 'easeOutCubic' // return to start
	);$('#eyeroll .r_eye').stop(true, false).animate(
		{
			top: '-33px',
			left: '50px'
		}, 400, 'easeInCubic' // to mid right
	).animate(
		{
			top: '-37px',
			left: '46px'
		}, 350, 'linear' // to top center
	).animate(
		{
			top: '-33px',
			left: '42px'
		}, 250, 'linear' // to mid left
	).animate(
		{
			top: '-29px',
			left: '46px'
		}, 250, 'easeOutCubic' // return to start
	);
}); //end mouseover

$('.hulkout').click( function() {
	$('#hulk .green').animate(
		{
			opacity: '.5',
			filter: 'alpha(opacity=50)'
		}, 700
	).animate(
		{
			top: '-1250px',
			left: '-200px',
			width: '1500px',
			height: '1614px'
		}, 4000
	);
	$('#hulk .face').delay(700).animate(
		{
			top: '-1250px',
			left: '-200px',
			width: '1500px',
			height: '1614px'
		}, 4000
	);
}); //end click


}); //end ready