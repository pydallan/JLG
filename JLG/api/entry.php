<?php
    $yonghu = isset($_POST["yonghu"])? $_POST["yonghu"] : "666";
    $passwords = isset($_POST["password"])? $_POST["password"] : "0055";
    // echo $password;

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'outlet';
    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn->set_charset('utf8');
   $res = $conn ->query('insert into zhuce(yonghu,password)values("'.$yonghu.'","'.$passwords.'")');
    if ($res) {
        echo "true";
    } else {
        echo "Error: " . $res . "<br>" . $conn->error;
    }





?>