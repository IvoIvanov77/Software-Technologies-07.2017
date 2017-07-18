<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>
    <style>
        div {
            display: inline-block;
            margin: 5px;
            width: 20px;
            height: 20px;
        }
    </style>
</head>
<body>
<!--Write your PHP Script here-->
<?php
$value = 0;
for($i = 0; $i<5; $i++){
    $start = $value;
    for($j=0; $j <10; $j++){
        $color = "rgb($start, $start, $start)";
        echo "<div style='background-color:$color '></div>";
        $start += 5;
    }
    echo "<br>";
    $value += 51;

}

?>
</body>
</html>