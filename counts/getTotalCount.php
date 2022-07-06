<?php
    $totalCount = 0;
    $file = fopen("total.txt", "r");
    while(!feof($file)) {
        echo fgets($file);
    }
    // echo $totalCount;
?>