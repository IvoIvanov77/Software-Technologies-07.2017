<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>
    <style>
        table * {
            border: 1px solid black;
            width: 50px;
            height: 50px;
        }
    </style>
</head>
<body>
<table>
    <tr>
        <td>
            Red
        </td>
        <td>
            Green
        </td>
        <td>
            Blue
        </td>
    </tr>
    <?php
    $value = 51;
    for ($i = 0; $i<5; $i++ ){
        echo "<tr>";
        $redcolor = "rgb($value,0,0)";
        $greencolor = "rgb(0,$value,0)";
        $blueColor = "rgb(0,0,$value)";

        echo "<td style='background-color: $redcolor'></td>";
        echo "<td style='background-color:$greencolor '></td>";
        echo "<td style='background-color: $blueColor'></td>";
        $value+=51;
         echo "</tr>";
    }
    ?>
    <!--Write your PHP Script here-->
</table>
</body>
</html>