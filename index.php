<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
?>
<?php
    require_once 'db.php';

    $sql = 'SELECT * FROM data';
    $statement = $pdo->prepare($sql);
    $statement->execute();
    $people = $statement->fetchAll(PDO::FETCH_OBJ);

?>

<?php require_once 'header.php';?>

    <div class="container">
        <div class="card mt-5">
            <div class="card-header">
                <h2>All people</h2>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                    <?php foreach ($people as $person):?>
                    <tr>
                        <td><?= $person->id ?></td>
                        <td><?= $person->name?></td>
                        <td><?= $person->location?></td>
                        <td>
                            <a href="edit.php?id=<?=$person->id ?>" class="btn btn-info">Edit</a>
                            <a onclick="return confirm('Are You Sure?')" href="delete.php?id=<?=$person->id ?>" class="btn btn-danger">Delete</a>
                        </td>
                    </tr>
                    <?php endforeach; ?>

                </table>
            </div>
        </div>
    </div>


<?php require_once 'footer.php' ?>