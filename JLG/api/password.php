<?php
    $psw = isset($_POST['psw'])?$_POST['psw']:"";
    // echo($psw)
    $arr = array("4008208820");
    $res = in_array($psw,$arr);
    if($res==true){
        echo "true";
    }else{
        echo "false";
    }


?>