$( document ).ready(function() {
    $('.btn').on('click', function(){
    $('body').toggleClass('night');
	});

	$('.btn').on('click', function(){
    $(this).toggleClass('btn-night');
	});
});