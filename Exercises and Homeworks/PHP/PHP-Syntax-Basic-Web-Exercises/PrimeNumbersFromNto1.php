<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
<form>
    N: <input type="text" name="num" />
    <input type="submit" />
</form>
<!--Write your PHP Script here-->
<?php
if(isset($_GET['num'])){
    $n = intval($_GET['num']);

    for ($i = $n; $i > 1; $i-- ){
        $isPrime = true;
        for ($j = 2; $j < $i; $j++){
            if($i % $j == 0){
                $isPrime = false;
                break;
            }
        }
        if($isPrime){
            echo $i." ";
        }
    }
}
?>
</body>
</html>