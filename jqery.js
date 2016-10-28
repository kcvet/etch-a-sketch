$(document).ready(function(){
	var squares= 16*16;

		for(var i=0;i<squares;i++){
			$('#inner').append('<div class="squares" id="sq'+i+'"></div>');//ustvari 16*16grid
		}

		$('.squares').hover(function(){
			
			$('.squares').mouseover(function(){
				var ids = $(this).attr('id');
				$('#'+ids).css('background-color','black');
			});
			
		},function(){

		});

		/*$('squares').hover(function(){ //elementi čez katere hoveram
			$('.squares').mouseover(function(){ //dobim id od div
				ids = $(this).attr('id');
				 alert(this.id);
			});
			$(ids).css('background-color','black');



		},function(){

		});*/

});

