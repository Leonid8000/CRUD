<?php
require_once ('vendor/autoload.php');

$dotenv = new Dotenv\Dotenv(__DIR__);

$dotenv->load();

//Подключение обьект pdo
try{
    $pdo = new PDO("mysql:host={$_ENV["DB_HOST"]};dbname={$_ENV["DB_DATABASE"]};charset=utf8", $_ENV["DB_USERNAME"], $_ENV["DB_PASSWORD"]);
}catch(PDOException $e){

}
