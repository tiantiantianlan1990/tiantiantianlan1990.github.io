$(function(){
	$("#list").click(function(e){
		var ulappear=$(this).siblings('ul');
		ulappear.slideToggle(500);
		//ulappear.css({'display':'block'})//
	})
})