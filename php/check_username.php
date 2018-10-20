<?php
    // 获取用户名
    header("Content-Type: application/json");

    header("Access-Control-Allow-Origin:*");

    // 引用另外一个文件
    include "public/connect_db.php";
    $username = $_GET["username"];
    // 链接数据库
    $coon = new db();
    $sql = "select * from user WHERE username='$username'";
    $rows = $coon -> Query($sql, 2);
    if($rows) {
      $arr = array("code" => "1000", "msg"=>"用户名称已经存在");
    } else {
      $arr = array("code" => "200", "msg" => "");
    }
    echo json_encode($arr);

   
  ?>