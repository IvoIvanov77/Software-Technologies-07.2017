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
    for ($i = 1; $i <= $n; $i++ ){
        echo $second." ";
        $tmp = $second;
        $second += $first;
        $first = $tmp;
    }
}
?>
</body>
</html>