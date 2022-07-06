<?php
    $totalCount = 0;
    $file = fopen("cameras.txt", "r");
    while(!feof($file)) {
        echo fgets($file);
    }
    // echo $totalCount;
?>