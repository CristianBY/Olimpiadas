<?php 
	$json = array(
		array('pregunta'=>'¿Quien gano el segunda mejor marca de la historia de Reino Unido?', 
			'respuesta'=> "./imagenes/farah.jpg", 
			'pistas'=>array("Se refugió en Londres en 1993", "Estudió en la escuela Community College", "Es medalla de plata en el Campeonato Europeo de Atletismo")),
		array('pregunta'=>'¿Quien se encuentra en primera posición en títulos de Masters 1000 en modalidad individual?', 
			'respuesta'=> "./imagenes/nadal.jpg", 
			'pistas'=>array("Está considerado como uno de los mejores deportistas y tenistas de la historia y el mejor de todos los tiempos en pistas de tierra batida", "En 2010 se convirtió en el único tenista de la historia en ganar el Clay Slam o Slam de Tierra Batida", "Ha vencido diez o más veces a quince rivales y veinte o más veces a cuatro contrincantes")),
		/*hasta aqui*/
		array('pregunta'=>'¿Quien se consagró como el máximo medallista de oro en una sola edición de los juegos?', 
			'respuesta'=> "./imagenes/phelps.jpg", 
			'pistas'=>array("Nació y creció en el vecindario Rodgers Forge en Towson", "Su padre es un policía retirado del Estado de Maryland quien jugó Fútbol americano en la secundaria y la Universidad", "Se presentó por primera vez en los Juegos Olímpicos en Sídney 2000")),

		array('pregunta'=>'¿Quien comenzó en la gimnasia cuando tenía 3 años en el gimnasio de su padre en la Prefectura de Nagasaki?', 
			'respuesta'=> "./imagenes/uchimura.jpg", 
			'pistas'=>array("Ha sido 7 veces medallista olímpico y 19 veces medallista mundial", "Se ha convertido en el primer gimnasta en alcanzar 6 veces consecutivas el oro en campeonatos mundiales de pruebas individuales completas", "Es hijo de Kazuhisa y Shuko Uchimura, ambos padres gimnastas")),

		array('pregunta'=>'¿Quien fue el vencedor de la clasificación general del Tour de Francia 2012?', 
			'respuesta'=> "./imagenes/wiggins.jpg", 
			'pistas'=>array("Fue el vencedor de la clasificación general del Tour de Francia 2012", "Participó en cinco Juegos Olímpicos de Verano, entre los años 2000 y 2016, obteniendo en total ocho medallas", "Nació en Gante (Bélgica), hijo de un ciclista de pista australiano y una británica.")),

		array('pregunta'=>'¿Quien ganó 23 títulos WTA Tier 1 y alcanzó 32 finales?', 
			'respuesta'=> "./imagenes/williams.jpg", 
			'pistas'=>array("Los padres son Richard y Oracene Price", "Ha ostentado la primera posición en el ranking WTA durante 319 semanas", "Ha ganado un total de 39 títulos de Grand Slam: 23 de ellos individuales, 14 en dobles femeninos y 2 en dobles mixtos"))
	);
	
	echo json_encode($json);

?>