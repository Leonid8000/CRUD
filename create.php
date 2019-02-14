<?php require_once 'db.php';

$message = '';
//отправка в бд
if(isset($_POST['name']) && isset($_POST['location'])){
    $name=$_POST['name'];
    $location=$_POST['location'];
    $sql = 'INSERT INTO data (name, location) VALUES(:name, :location)';
    $statement = $pdo->prepare($sql);

    if($statement->execute([':name' => $name, ':location' => $location])){
        $message = 'data successfully';
    }
}
?>

<?php require_once 'header.php';?>

<div class="container">
    <div class="card mt-5">
        <div class="card-header">
            <h2>Create a person</h2>
        </div>
        <div class="card-body">
            <?php if(!empty($message)): ?>
                <div class="alert alert-success">
                    <?= $message ?>
                </div>
            <?php endif;?>
            <div class="row justify-content-center">
                <form action="create.php" method="post">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" name="name" class="form-control" placeholder="Enter your name">
                    </div>
                    <div class="form-group">
                        <label for="location">Location:</label>
                        <input type="text" name="location" class="form-control" placeholder="Enter your location">
                    </div>
                    <div class="form-group">
                        <button type="submit" name="save" class="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<?php require_once 'footer.php';?>
