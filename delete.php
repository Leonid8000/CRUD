<?php
require_once 'db.php';

$id = $_GET['id'];
$sql = 'DELETE FROM data WHERE id=:id';
$statement = $pdo->prepare($sql);
if($statement->execute([':id' => $id])){
    header("Location: /");
}