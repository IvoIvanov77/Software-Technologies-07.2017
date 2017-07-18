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
    $first = 0;
    $second = 1;
    $third = $first + $second;
    echo $second." ";
    for ($i = 1; $i < $n; $i++ ){
        echo $third." ";
        $tmp1 = $second;
        $tmp2 = $third;
        $third += $first + $second;
        $first = $tmp1;
        $second = $tmp2;
    }
}
?>
</body>
</html>