<?php
    $yonghu = isset($_GET["yonghu"])? $_GET["yonghu"] : "666";
    // echo $yonghu;
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'outlet';
    $conn = new mysqli($servername, $username, $password, $dbname);



        $conn->set_charset('utf8');
        $result = $conn -> query('select * from zhuce');
        $res = $result->fetch_all(MYSQLI_ASSOC);
        // var_dump($res);
            foreach($res as $item){
            if($item ['yonghu']== $yonghu){
                 echo "true";
                break;
            }
            
        }
        
        $result->close();
        $conn->close();




   



?>