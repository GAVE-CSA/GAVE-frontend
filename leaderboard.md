---
layout: none
permalink: /leaderboard
---

{%- include gave-navbar.html -%}

<html>
    <body>
        <div class="row">
        <div class="board1-body column">
            <h1 class="board1-header" id="gameTitle" value="1">Password Game Leaderboard</h1>
            <table class="board1">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody id="board1">
                </tbody>
            </table>
        </div>
        <div class="board2-body column">
            <h1 class="board2-header" id="gameTitle" value="2">Spot the Difference Game Leaderboard</h1>
            <table class="board2">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody id="board2">
                </tbody>
            </table>
        </div>
        <div class="board3-body column">
            <h1 class="board3-header" id="gameTitle" value="3">Experience Leaderboard</h1>
            <table class="board3">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Plays</th>
                    </tr>
                </thead>
                <tbody id="board3">
                </tbody>
            </table>
        </div>
        </div>
    </body>
</html>

<div class="button-container">
    <a href="{{ site.baseurl }}/profile" class="button">Continue</a>
  </div>

<script>
    var deployURL = "http://localhost:8013";

    function getLeaderboard1() {
        var gameId = 1;
        fetch(deployURL + `/api/gamesession/${gameId}`)
            .then(response => response.json())
            .then(data => { 
                console.log(data)
                formatBoard1(data)  
            })
            .catch(err => {
                console.log(err);
            });
    }

    function getLeaderboard2() {
        var gameId = 2;
        fetch(deployURL + `/api/gamesession/${gameId}`)
            .then(response => response.json())
            .then(data => { 
                console.log(data)
                formatBoard2(data)  
            })
            .catch(err => {
                console.log(err);
            });
    }

    function getLeaderboard3() {
        fetch(deployURL + "/api/gamesession/plays")
            .then(response => response.json())
            .then(data => { 
                console.log(data)
                formatBoard3(data)  
            })
            .catch(err => {
                console.log(err);
            });
    }

    function formatBoard1(data){
        formatBoard(data, "board1");
    }

    function formatBoard2(data){
        formatBoard(data, "board2");
    }

    function formatBoard3(data){
        formatBoard(data, "board3");
    }

    function formatBoard(data, board) {
        const table = document.getElementById(board);
        data.forEach(item =>{
            const item_row = document.createElement("tr");
            //data_row.className = ""
            const user_value = document.createElement("th");
            user_value.innerHTML = item.item1;
            const time_value = document.createElement("th");
            time_value.innerHTML = item.item2;
            //append
            item_row.appendChild(user_value);
            item_row.appendChild(time_value);
            table.appendChild(item_row);
        })
    }

    getLeaderboard1();
    getLeaderboard2();
    getLeaderboard3();
    
</script>


<style>
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
    }

    .row {
        display: flex;
        margin: 0;
        padding: 0;
    }

    .column {
        flex: 1;
        padding: 5px;
    }
    
    .board1-header, .board2-header, .board3-header {
        text-align: center;
        margin: 5px;
        font-size: 15px;
    }

    table {
        width: 80%;
        margin-left: 50px;
        border-radius: 15px;
        overflow: hidden;
    }

    table, th, td {
        border-collapse: collapse;
        padding: 1rem;
        background: lightgray;
    }

    thead th {
        position: sticky;
        top: 0;
        left: 0;
        background-color: #5c48ee;
    }

    .button {
            padding: .5rem 2rem;
            color: var(--white) !important;
            background-color: var(--primary-color);
            border-radius: 5px;
            border: none;
            }   

    .button-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
    }
</style>