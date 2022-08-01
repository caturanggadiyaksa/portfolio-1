<?php

include_once('server.php');

//insert data

if(isset($_POST['submit'])) {

    
    $nama = $_POST['name'];
    $email = $_POST['email'];
    $project = $_POST['project'];
    $pesan = $_POST['pesan'];
    

   

    $sql = "INSERT INTO `email`(`id`, `nama`, `email`, `project`, `pesan`) VALUES (NULL, '$nama', '$email', '$project', '$pesan')";

    $query = mysqli_query($conn, $sql);

    if($query) {
        header('Location: ../index.php?status=sukses');
    }
   
}



?>