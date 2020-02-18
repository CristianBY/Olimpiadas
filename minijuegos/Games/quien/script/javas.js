$(document).ready(function(){
    $.post("./php/json.php", function(r){
		var puntos = 2000;
    	var obj = JSON.parse(r);
    	var aleatorio= 0;
		var src;
		var pista;
		var cont = 0;
		/*Recorre lista json*/
		for(var i = 0; i<obj.length ; i++){
			/*Para numero aleatorio del 0 al 5*/
			aleatorio= Math.floor(Math.random() * 5);
			/*Para poner la pregunta*/
			$("h3").text(obj[aleatorio].pregunta);
			src = obj[aleatorio].respuesta;
			pista = obj[aleatorio].pistas;
		}
		/*Hacen los flip */
		$("#card").flip({axis: 'x'}); 
		$("#card1").flip({ axis: 'x' }); 
		$("#card2").flip({ axis: 'x' }); 
		$("#card3").flip({ axis: 'x' }); 
		$("#card4").flip({ axis: 'x' }); 
		$("#card5").flip({ axis: 'x' }); 
		/*Al hacer click en la imagen ve si el src es el mismo que el del json y 
		si lo es oculta todas las imagenes, y visualiza el gif de bien. Tambien mete 
		en una seción la puntuación y se sale en 3 segundos. Si no te quita puntos y hace la funcion y aumenta un contador*/
		$('img').click(function(){
			if ($(this).attr('src') == src){
				$('.imagenes').css('display','none');
				$('#bien').css('display','block');
				$('#bien').css('width','40%');
				sessionStorage.miPuntuaction = parseInt(sessionStorage.miPuntuaction) + puntos;//meter puntuación
				setTimeout(() => { //Salida del juego
					window.location.replace("../../View/vistaMapa/selectGame.html");
				}, 3000);
			}
			else {
				puntos -= 300;
				pistitas(pista,cont);
				cont++;
			}
		});
		
			
		
    });
});
/*Estas función coje el objeto pista del json y la mete en un elemento lista con ayuda de contador anterior */
function pistitas(pista,cont){
	if(cont <= 2){
		var li = $("<li>");
		$('ul').append(li);
		var texto_li = (pista[cont]);
		li.attr('type','square');
		li.append(texto_li);

	}	
}
