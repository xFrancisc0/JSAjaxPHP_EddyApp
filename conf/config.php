<?php
   if(defined('CONFIG_PHP')) return;
   define('CONFIG_PHP',1);

   include("mysql.php");
   include("class.TemplatePower.inc.php");

   class conexion extends DB_Sql
   {
      /*var $Host= "localhost";
      var $Database ="auditorio_web";
      var $User = "root";
      var $Password = "";*/

     var $Host= "%";
      var $Database ="pagina_noticiero";
      var $User = "user_esteban";
      var $Password = "20user_esteban22";
   }

?>
