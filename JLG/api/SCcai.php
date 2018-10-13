<?php
    $id = isset($_POST["id"])? $_POST["id"] : "";
    $yonghu = isset($_POST["uyonghu"])? $_POST["uyonghu"] : "";
    $name = isset($_POST["uname"])? $_POST["uname"] : "";
    $imgsrc = isset($_POST["imgurl"])? $_POST["imgurl"] : "";
    $price = isset($_POST["price"])? $_POST["price"] : "";
    $qty = isset($_POST["qty"])? $_POST["qty"] : "";
    // var_dump($imgsrc);
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'outlet';
    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn->set_charset('utf8');
    $result = $conn -> query('select * from sccar where id='.$id);
    $c = $result -> fetch_assoc();

    
    if($c){
       $qty = ++$c["qty"];
       $res = $conn->query("update sccar set qty=".$qty." where id=".$id);
    }else{
        $res = $conn ->query('insert into sccar(id,yonghu,name,imgurl,price,qty)values("'.$id.'","'.$yonghu.'","'.$name.'","'.$imgsrc.'","'.$price.'","'.$qty.'")');
    }

    
    // $c = select * from car where id=$id;

    if ($res) {
        echo "true";
    } else {
        echo "Error: " . $res . "<br>" . $conn->error;
    }





?>