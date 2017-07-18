<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
<form>
    X: <input type="text" name="num1" />
    Y: <input type="text" name="num2" />
    Z: <input type="text" name="num3" />
    <input type="submit" />
</form>
<!--Write your PHP Script here-->
<?php
if(isset($_GET['num1']) && isset($_GET['num2']) && isset($_GET['num3'])){
    $n1 = intval($_GET['num1']);
    $n2 = intval($_GET['num2']);
    $n3 = intval($_GET['num3']);
    $numbers = [$n1, $n2, $n3];
    $count = 0;
    for ($i = 0; $i < count($numbers); $i++){
        if($numbers[$i] == 0){
            echo "Positive";
            return;
        }
        if($numbers[$i] < 0){$count ++;}

    }

    if ($count % 2 == 0){echo "Positive";}
    else{echo "Negative";}
}
?>
</body>
</html>