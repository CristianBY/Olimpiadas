$(document).ready(function () {
    $(".btn-fuerza").click(function () { //Botón de Fuerza
        var sube = true;
        var valor = $(".carga-fuerza").css("width");
        valor = valor.slice(0,-2); // Elimina "px" y me quedo con el valor numérico del width.
        var intervalo = setInterval(function(){ // Comienza el intervalo de fuerza a oscilar
            
            $(".btn-fuerza").css("display","none"); // Modificación del botón fuerza para convertirlo en uno de parada
            $(".btn-fuerza-parada").css("display","block"); //Aparición del botón para parar
            
            if (sube){ //Control de oscilación
                $(".carga-fuerza").css("width",valor+"px");
                valor++;
            } else {
                $(".carga-fuerza").css("width",valor+"px");
                valor--;
            }
            if (valor == 100){
                sube = false;
            }
            if (valor == 0){
                sube = true;
            }
            
            $(".btn-fuerza-parada").click(function() { // Click en el botón de parada de fuerza
                clearInterval(intervalo); // Fin del intervalo
                $(".btn-fuerza-parada").css("display","none"); // Ocultación de botón fuerza/parar
                $(".btn-angulo").css("display","block"); //Muestra el botón de ángulo
            });
        },5);
        
        
    });
    $(".btn-angulo").click(function () { //Botón de ángulo
        var sube = true;
        var valor = $(".carga-angulo").css("width");
        valor = valor.slice(0,-2); // Elimina "px" y me quedo con el valor numérico del width.
        var intervalo = setInterval(function(){ // Comienza el intervalo de ángulo a oscilar
            
            $(".btn-angulo").css("display","none"); // Modificación del botón ángulo para convertirlo en uno de parada
            $(".btn-angulo-parada").css("display","block"); //Aparición del botón para parar
            
            if (sube){ //Control de oscilación
                $(".carga-angulo").css("width",valor+"px");
                valor++;
            } else {
                $(".carga-angulo").css("width",valor+"px");
                valor--;
            }
            if (valor == 90){
                sube = false;
            }
            if (valor == 0){
                sube = true;
            }
            
            $(".btn-angulo-parada").click(function() { // Click en el botón de parada de ángulo
                clearInterval(intervalo); // Fin del intervalo
                $(".btn-angulo-parada").css("display","none"); // Ocultación de botón ángulo/parar
                $(".btn-lanzar").css("display","block");
                
            });
        },5);
        
    });

    $(".btn-lanzar").click(function () {

        var velocidad = $(".carga-fuerza").css("width"); //Recoge la velocidad
        var angulo = $(".carga-angulo").css("width"); //Recoge el ángulo
        congela_gif("lanzador"); // Llama a la función que congela el muñeco
        $(".bola").css("display","block");
        $(".btn-lanzar").css("display","none");
        velocidad = velocidad.slice(0,-2);
        angulo = angulo.slice(0,-2);
        // Cálculo la x máxima
        const G = 9.81;
        anguloEnRadianes = angulo * Math.PI / 180;
        xMax = Math.pow(velocidad,2)*(Math.sin(2*anguloEnRadianes));
        xMax = xMax/G;
        xMax = factorSuerte(xMax);
        xMax += 100; //desplazamiento
        var x = 100; // desplazamiento para que la bala salga desde el muñeco.
        var y = 0;
        var velocidadIntervalo = velocidadVisual(velocidad,angulo);
        var intervaloLanzamiento = setInterval(function(){
            if (x<=xMax) {
                y = x*Math.tan(anguloEnRadianes)-((G*Math.pow(x,2))/(2*Math.pow(velocidad,2)*Math.pow(Math.cos(anguloEnRadianes),2)));
                y += 100;
            } else {
                y = x*Math.tan(anguloEnRadianes)-((G*Math.pow(x,2))/(2*Math.pow(velocidad,2)*Math.pow(Math.cos(anguloEnRadianes),2)));
            }
            if (y>0){
                $(".bola").css("bottom", y+"px");
                $(".bola").css("left", x+"px");
                x++;
            } else {
                $(".puntuacion").css("display", "block");
                $(".puntuacion").css("top", "75%");
                $(".puntuacion").css("left", "10%");
                if (xMax <600){
                    $(".puntuacion").text("UY QUE MALO!!!");
                } else {
                    $(".puntuacion").text("UY QUE BUENO!!!");
                }
                clearInterval(intervaloLanzamiento);
            }
        },velocidadIntervalo);
        sessionStorage.miPuntuaction = parseInt(sessionStorage.miPuntuaction) + xMax;//meter puntuación
        setTimeout(() => {
            window.location.replace("../../View/vistaMapa/selectGame.html");
        },6000);
    });

    function velocidadVisual(velocidad,angulo) { // Velocidad a la que se ve el lanzamiento dependiendo de la velocidad.
        if ((velocidad >= 0 && velocidad < 33)||angulo>80){
            velocidadIntervalo = 10;
        } else if (velocidad >= 33 && velocidad < 66){
            velocidadIntervalo = 5;
        } else{
            velocidadIntervalo = 1;
        }
        return velocidadIntervalo;
    }

    // Para congelar el gif una vez que lance la bala   
    function congela_gif(src) {
        i = document.getElementById(src);
        var c = document.createElement('canvas');
        var w = c.width = i.width;
        var h = c.height = i.height;
        c.getContext('2d').drawImage(i, 0, 0, w, h);
        try {
            i.src = c.toDataURL("../images");
        } catch(e) { 
            for (var j = 0, a; a = i.attributes[j]; j++)
                c.setAttribute(a.name, a.value);
                i.parentNode.replaceChild(c, i);
        }
    }

    function factorSuerte(xMax){ // Factor suerte en el lanzamiento
        var suerte = Math.floor(Math.random() * 9) + 1;
        suerte = 1 + suerte/10;
        return xMax*suerte;
    }

});