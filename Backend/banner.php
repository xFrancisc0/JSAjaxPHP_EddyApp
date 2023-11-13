<?php
    include_once('conf/config.php');
    
    var $conn = new conexion();
    $sql= 'SELECT * FROM banner ORDER BY Posicion ASC';  //Traer las imagenes del carousel banner ordenando estas por posicion ascendente (De posicion menor a mayor).

    $results = mysqli_query($conn, $sql);

    $ArregloDeFilas = array();  
    while($fila = $results->fetch_assoc()) {
        $ArregloDeFilas[] = $fila;
    }

    $ArregloDeFilasJSON = json_encode($ArregloDeFilas);
    echo $ArregloDeFilasJSON;
?>