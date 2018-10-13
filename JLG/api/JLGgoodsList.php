<?php
    
    // $path = "../data/JLGgoodsList.json";
    // $len = filesize($path);

    // $file = fopen($path, "r");
    // $content = fread($file,$len);
    // fclose($file);

    // $contentArr = json_decode($content);
    
    // echo json_encode($contentArr,JSON_UNESCAPED_UNICODE);
    

// ====================查询数据库数据==========================
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "outlet";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if($conn->connect_error){
        die("链接失败:".$conn->connect_error);
    }
      
   $conn->set_charset("utf8");

    $result = $conn->query("select * from jlggoodslist");
    $res = $result->fetch_all(MYSQLI_ASSOC);
    // var_dump($res);

        
       

        echo json_encode($res,JSON_UNESCAPED_UNICODE);
        $result->close();
        $conn->close();
    

?>