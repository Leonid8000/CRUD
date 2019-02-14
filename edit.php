<?php require_once 'db.php';

$id = $_GET['id'];
//$sql = 'SELECT * FROM data WHERE id='.$id;
$sql = 'SELECT * FROM data WHERE id=:id';
$statement = $pdo->prepare($sql);
$statement->execute([':id' => $id]);
$person = $statement->fetch(PDO::FETCH_OBJ);


//отправка в бд
if(isset($_POST['name']) && isset($_POST['location'])){
    $name=$_POST['name'];
    $location=$_POST['location'];
    $sql = 'UPDATE data SET name=:name, location=:location WHERE id=:id';
    $statement = $pdo->prepare($sql);

    if($statement->execute([':name' => $name, ':location' => $location, ':id' => $id])){
        header("Location: /");
    }
}
?>

<?php require_once 'header.php';?>
<div class="container">
    <div class="card mt-5">
        <div class="card-header">
            <h2>Update a person</h2>
        </div>
        <div class="card-body">
            <div class="row justify-content-center">
                <form method="post">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" name="name" class="form-control" value="<?= $person->name ?>">
                    </div>
                    <div class="form-group">
                        <label for="location">Location:</label>
                        <input type="text" name="location" class="form-control" value="<?= $person->location ?>">
                    </div>
                    <div class="form-group">
                        <button type="submit" name="save" class="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<?php require_once 'footer.php';?>
