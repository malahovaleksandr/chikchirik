$(document).ready(function(){

   $('#fullpage').fullpage({
				anchors: ['firstPage', 'secondPage'],
				css3: true,
				navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['Главная', 'Информация']
	});
});