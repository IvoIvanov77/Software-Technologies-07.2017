<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
<form>
    N: <input type="text" name="num1" />
    M: <input type="text" name="num2" />
    <input type="submit" />
</form>
<!--Write your PHP Script here-->
<?php
if(isset($_GET['num1']) && isset($_GET['num2'])){
    $n1 = floatval($_GET['num1']);
    $n2 = floatval($_GET['num2']);
    if($n1 > $n2){
        echo $n1 / $n2;
    }else{echo $n1 * $n2;}
}

?>
</body>
</html>