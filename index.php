<!DOCTYPE html>
<head>
    <title>MineWatch Recreation</title>
    <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
    <?php
        include "topbar.php";
        add();
    ?>
    <br>
    <div class="textBox">
        <h1 class="bigCenter">Welcome to MineWatch!</h1>
        <hr class="solid">
        <p class="normalCenter">You've arrived at MineWatch, where you can watch Minecraft cameras from all over the Minecraft globe!
            No registration needed!</p>
        <br>
        <p class="normalCenter">Currently we have over 4,000 cameras live at the same time!</p>
        <br>
        <a class="textCenterLink" href="guide.php">Need help?</a>
        <br>
        <h1 class="bigCenter">Updates</h1>
        <hr class="solid">
        <p class="normalCenter">2nd July 2022</p>
        <ul>
            <li>Chat feature is now open to the public</li>
            <li>Updated website style</li>
            <li>Added record feature</li>
        </ul>
        <br>
        <p class="normalCenter">30th June 2022</p>
        <ul>
            <li>Camera audio is not delayed anymore</li>
        </ul>
        <!-- 26th June 2022: New guide for newcomers, Switched background from stone to dirt -->
        <br>
        <p class="normalCenter">26th June 2022</p>
        <ul>
            <li>New guide for newcomers</li>
            <li>Switched background from stone to dirt</li>
        </ul>
        <!-- 24th June 2022: The website is now open to the public, Implemented audio into camera, Updated website style, Minor website fixes-->
        <br>
        <p class="normalCenter">24th June 2022</p>
        <ul>
            <li>The website is now open to the public</li>
            <li>Implemented audio into camera</li>
            <li>Updated website style</li>
            <li>Minor website fixes</li>
        </ul>
    </div>
    <br>
    <div class="textBox">
        <h1 class="bigCenter">Statistics</h1>
        <hr class="solid">
        <p class="normalCenter">Since 24th June 2022, we've had a camera total of...</p>
        <p class="normalCenter" id="totalCount"><!--86,964-->0</p>
        <script>
            setInterval(function() {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("totalCount").innerHTML = this.responseText;
                    }
                };
                xhttp.open("GET", "./counts/getTotalCount.php", true);
                xhttp.send();
            }, 1000);
        </script>
        <br>
        <p class="normalCenter">Currently we have a camera count of</p>
        <p class="normalCenter" id="currentCount"><!--4,692-->0</p>
        <script>
            setInterval(function() {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("currentCount").innerHTML = this.responseText;
                    }
                };
                xhttp.open("GET", "./counts/getCurrentCount.php", true);
                xhttp.send();
            }, 1000);
        </script>
    </div>
</body>