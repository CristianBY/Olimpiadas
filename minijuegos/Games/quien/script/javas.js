$(document).ready(function(){
    $.post("./php/json.php", function(r){
    	var obj = JSON.parse(r);
    	var aleatorio= 0;
		var src;
		var pista;
		var cont = 0;
		for(var i = 0; i<obj.length ; i++){
			aleatorio= Math.floor(Math.random() * 5);
			$("h3").text(obj[aleatorio].pregunta);
			src = obj[aleatorio].respuesta;
			pista = obj[aleatorio].pistas;
		}
		var srcimg = './imagenes/farah.jpg';
		$("#card").flip({axis: 'x'}); 
		$("#card1").flip({ axis: 'x' }); 
		$("#card2").flip({ axis: 'x' }); 
		$("#card3").flip({ axis: 'x' }); 
		$("#card4").flip({ axis: 'x' }); 
		$("#card5").flip({ axis: 'x' }); 
		$('img').click(function(){
			if ($(this).attr('src') == src){
				$('.imagen').css('display','none');
				$('.acierto').css('display','block');
				$('.bien').attr('src', './imagenes/bien.gif');
				$('.bien').animate({
					width: '700px',
					heigth: '700px',
					textalign: 'center'
				});
			}
			else {

				pistitas(pista,cont);
				cont++;
			}
		});

    });
});
function pistitas(pista,cont){
	if(cont <= 2){
		var li = $("<li>");
		$('ul').append(li);
		var texto_li = (pista[cont]);
		li.append(texto_li);
		li.css('color','white');
	}	
}
