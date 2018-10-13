<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "outlet";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if($conn->connect_error){
        die("链接失败:".$conn->connect_error);
    }
      
   $conn->set_charset("utf8");

    $result = $conn->query("select * from shougoodslist");
    $res = $result->fetch_all(MYSQLI_ASSOC);
    // var_dump($res);

        
       

        echo json_encode($res,JSON_UNESCAPED_UNICODE);
        $result->close();
        $conn->close();
    

?>