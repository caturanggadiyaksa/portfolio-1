<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio";

// Create connection
$conn =  mysqli_connect($servername, $username, $password, $dbname);

if($conn){
  echo "Koneksi berhasil";
 } else{
  echo "Koneksi gagal!" . mysqli_connect_error();
  die();
 }
?> 