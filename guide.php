<!DOCTYPE html>
<head>
    <title>MineWatch Recreation</title>
    <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
    <div class="topbar">
        <img src="icon.png" alt="icon" class="icon">
        <h1 class="textTop">MineWatch</h1>
        <a class="textTopLnik" href="index.php"><b>Home</b></a>
        <a class="textTopLnik" href="cams.php"><b>Cameras</b></a>
        <a class="textTopLnik" href="guide.php"><b>Guide</b></a>
    </div>
    <br>
    <div class="textBox" style="font-size: 16px;text-align: center;">
        <h1 class="bigCenter">Guide</h1>
        <hr class="solid">
        <!-- write everything from guideTranscript.txt -->
        <?php
            $file = fopen("guideTranscript.txt", "r");
            while(!feof($file)) {
                echo fgets($file) . "<br>";
            }
            fclose($file);
        ?>
    </div>
</body>