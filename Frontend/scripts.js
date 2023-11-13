
function inicio(){

    //Cargar toda la data dinamica desde DB
    var JSONArrayBanner = cargarDataInicialBanner();
    var JSONArrayFooter = cargarDataInicialFooter();
    var JSONArrayNoticia = cargarDataInicialNoticia();

    setearDataDinamica(JSONArrayBanner, "Banner", "banner_db");
    setearDataDinamica(JSONArrayFooter, "Footer", "footer_db");
    setearDataDinamica(JSONArrayNoticia, "Noticia", "noticia_db");
}

function cargarDataInicialBanner(){
    var JSON_ARRAY = [];
    $.ajax({ type: "GET",   
         url: "http://localhost/Prototipo2/backend/banner.php",   
         async: false,
         success : function(ArregloDeFilasJSON)
         {
             JSON_ARRAY = JSON.parse(ArregloDeFilasJSON);
             return JSON_ARRAY;
         }
    });
}

 function cargarDataInicialFooter(){
        var JSON_ARRAY = [];
        $.ajax({ type: "GET",   
            url: "http://localhost/Prototipo2/backend/footer.php",   
            async: false,
            success : function(ArregloDeFilasJSON)
            {
                JSON_ARRAY = JSON.parse(ArregloDeFilasJSON);
                return JSON_ARRAY;
            }
        });
}

 function cargarDataInicialNoticia(){
        var JSON_ARRAY = [];
        $.ajax({ type: "GET",   
            url: "http://localhost/Prototipo2/backend/noticia.php",   
            async: false,
            success : function(ArregloDeFilasJSON)
            {
                JSON_ARRAY = JSON.parse(ArregloDeFilasJSON);
                return JSON_ARRAY;
            }
        });
} 

function setearDataDinamica(JSONArray, TipoEntidad, IdSelector){
    if(TipoEntidad == "Banner"){  
        var contenidohtml = '';

        //Indicadores
        contenidohtml += '<div class="carousel-indicators">';
        for(var i=0;i<JSONArray.length; i++){
            if(i==0){
                contenedorhtml += '<button type="button" data-bs-target="#demo" data-bs-slide-to="'+i+'" class="active"></button>';
            }else{
                contenedorhtml += '<button type="button" data-bs-target="#demo" data-bs-slide-to="'+i+'"></button>';
            }
        }
        contenidohtml += '</div>';

        //Contenido
        contenidohtml += '<div class="carousel-inner">';
        for(var i=0;i<JSONArray.length; i++){
            if(i==0){
                contenedorhtml += '<div class="carousel-item active">';
                contenedorhtml += '<img src="'+JSONArray[i].Dir_imagen+'" class="d-block" style="width:100%">';
                contenedorhtml += '</div>';
            }else{
                contenedorhtml += '<div class="carousel-item">';
                contenedorhtml += '<img src="'+JSONArray[i].Dir_imagen+'" class="d-block" style="width:100%">';
                contenedorhtml += '</div>';
            }
        }
        
        //Botones
        contenidohtml += '<button class="carousel-control-prev" type="button" data-bs-target="#banner_db" data-bs-slide="prev">';
        contenidohtml += '<span class="carousel-control-prev-icon"></span>';
        contenidohtml += '</button>';
        contenidohtml += '<button class="carousel-control-next" type="button" data-bs-target="#banner_db" data-bs-slide="next">';
        contenidohtml += '<span class="carousel-control-next-icon"></span>'
        contenidohtml += '</button>';

       
        var estructurahtml = document.getElementById(IdSelector);
        estructurahtml.innerHTML = contenidohtml;

    }
    
    /* else if(TipoEntidad == "Footer"){  
   
    }

    else if(TipoEntidad == "Noticia"){
  
    } */
}

inicio();