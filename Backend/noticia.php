<?php
    include_once('conf/config.php');
    
    var $conn = new conexion();
    $sql= 'SELECT * FROM noticia';

    $results = mysqli_query($conn, $sql); # add connection string to query

    $ArregloDeFilas = array();
    while($fila = $results->fetch_assoc()) {
        $ArregloDeFilas[] = $fila;
    }
    $ArregloDeFilasJSON = json_encode($ArregloDeFilas);
    echo $ArregloDeFilasJSON;
?>