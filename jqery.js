$(document).ready(function(){
	var color=0;
	var squares= 50*50;

	$('#color').click(function(){
		color=1;
	});
		$('#black').click(function(){
		color=0;
	});

		for(var i=0;i<squares;i++){
			$('#inner').append('<div class="squares" id="sq'+i+'"></div>');//ustvari 16*16grid
		}

$('.squares').hover(function(){
			
			//$(this).mouseover(function(){    v bistvu tega sploh ne rabim

				var ids = $(this).attr('id');
				if(color==0){
				$('#'+ids).css('background-color','black');
			}else if(color=1){
				var cl= getRandomColor()
				$('#'+ids).css('background-color',cl);
			}
			//});
			
		},function(){

		});

		$('#clean').click(function(){
			$('.squares').css('background-color','white');

		});
		
		
		$('#custom').click(function(){
	var grid=prompt('How many squares would you like to have');
	var size=100/grid;
		
		$('.squares').remove();
		for(var i=0;i<grid*grid;i++){

			$('#inner').append('<div class="squares" id="sq'+i+'" style="width:'+size+'%; height:'+size+'%;"></div>');//ustvari 16*16grid
		}

			$('.squares').hover(function(){
			
			//$(this).mouseover(function(){    v bistvu tega sploh ne rabim
				var ids = $(this).attr('id');
					if(color==0){
				$('#'+ids).css('background-color','black');
			}else if(color=1){
				var cl= getRandomColor()
				$('#'+ids).css('background-color',cl);
			}
			//});
			
		},function(){

		});

		$('#clean').click(function(){
			$('.squares').css('background-color','white');

		});


	
});

	function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


});
