<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Interactive Photo Gallery</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }

        h1 {
            margin-top: 20px;
        }

        #image {
            width: 600px;
            height: 400px;
            border: 3px solid black;
            margin: 20px auto;
            line-height: 400px;
            background-size: cover;
            background-position: center;
            font-size: 20px;
        }

        .gallery {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
        }

        .gallery img {
            width: 150px;
            border: 2px solid gray;
        }
    </style>

    <script>

        function upDate(previewPic) {

            console.log("Mouse or focus event triggered");

            let imageDiv = document.getElementById("image");

            imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
            imageDiv.innerHTML = previewPic.alt;
        }

        function unDo() {

            console.log("Mouse leave or blur event triggered");

            let imageDiv = document.getElementById("image");

            imageDiv.style.backgroundImage = "url('')";
            imageDiv.innerHTML = "Hover over an image below to display here.";
        }

        function addTabFocus() {

            console.log("Page loaded");

            let images = document.querySelectorAll(".gallery img");

            for (let i = 0; i < images.length; i++) {

                images[i].setAttribute("tabindex", "0");

            }
        }

    </script>

</head>

<body onload="addTabFocus()">

    <h1>Interactive Photo Gallery</h1>

    <div id="image">
        Hover over an image below to display here.
    </div>

    <div class="gallery">

        <img src="https://picsum.photos/id/1015/300/200" alt="Mountain landscape with a lake" onmouseover="upDate(this)"
            onmouseleave="unDo()" onfocus="upDate(this)" onblur="unDo()">

        <img src="https://picsum.photos/id/1016/300/200" alt="Snowy mountain peaks under blue sky"
            onmouseover="upDate(this)" onmouseleave="unDo()" onfocus="upDate(this)" onblur="unDo()">

        <img src="https://picsum.photos/id/1020/300/200" alt="Forest trees with sunlight" onmouseover="upDate(this)"
            onmouseleave="unDo()" onfocus="upDate(this)" onblur="unDo()">

        <img src="https://picsum.photos/id/1024/300/200" alt="Cute dog looking at the camera" onmouseover="upDate(this)"
            onmouseleave="unDo()" onfocus="upDate(this)" onblur="unDo()">

        <img src="https://picsum.photos/id/1035/300/200" alt="Beautiful beach with waves" onmouseover="upDate(this)"
            onmouseleave="unDo()" onfocus="upDate(this)" onblur="unDo()">

        <img src="https://picsum.photos/id/1043/300/200" alt="City skyline during sunset" onmouseover="upDate(this)"
            onmouseleave="unDo()" onfocus="upDate(this)" onblur="unDo()">

    </div>

</body>

</html>