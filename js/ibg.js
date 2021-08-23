$.each($(".ibg"), function(index, value){
	if($(this).find('img').length>0){
		$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
	}
})