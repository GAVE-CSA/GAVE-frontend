---
layout: none
permalink: /spotthediff
---

{%- include gave-navbar.html -%}

<html>
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
    <body>
        <div id="container">
            <h1 class="label">Find The Difference</h1>
            <h3 id="status" style="text-align:center">Level 1</h3>
            <div class="heading-container">
                <h2 class="wrong">Wrong</h2>
                <h2 class="correct">Correct</h2>
            </div>
			<div id="left"></div>
            <div id="right"></div>
        </div>
        <script type="text/javascript" src="game.js"></script>
    </body>
</html>

<style>
    .label {
        margin-top: 10px;
        text-align: center; 
        background-color: #5c48ee; 
        color: #fff;
        padding: 8px;
        border-radius: 25px;
    }

    body {
        margin: 0;
    }

    #container {
        margin-left:250px;
        width: 1040px;
        height: 800px;
    }
    
    .heading-container {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }

    .wrong,
    .correct {
        flex: 1;
        text-align: center;
    }

    #left {
        width: 500px;
        height: 500px;
        margin-left: 65px;
        position:absolute;
        left:200px;
        border: 3px solid violet;
    }
    #right {
        width: 500px;
        height: 500px;
        position:absolute;
        left:765px;
        border: 3px solid violet;
    }

    .cube {
        /*44px total*/
        width: 40px;
        height: 40px;
        border: 2px solid black;
        border-radius:50%;
        position: absolute;
        background: blue;
    }
</style>
