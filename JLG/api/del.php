<?php
    $id = isset($_POST["id"])? $_POST["id"] : "666";
    $uname = isset($_POST["uname"])? $_POST["uname"] : "666";

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'outlet';
    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn->set_charset('utf8');
    $result = $conn -> query('select * from sccar where yonghu="'.$uname.'" and id="'.$id.'"');
    $c = $result -> fetch_assoc();
    if($c){
        $res = $conn->query('delete from sccar where yonghu="'.$uname.'" and id="'.$id.'"');
    }
    if ($res) {
        echo "true";
    } else {
        echo "Error: " . $res . "<br>" . $conn->error;
    }


// 删除表数据

// 格式：delete from 表名 where 表达式

//     //删除MyGuests表中id为1的数据
//     DELETE FROM MyGuests where id=1;
    
//     //删除所有数据
//     DELETE FROM MyGuests





?>