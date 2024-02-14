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

    function formatBoard1(data){
        const board1 = document.getElementById("board1");
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
            board1.appendChild(item_row);
        })
    }

    function formatBoard2(data){
        const board1 = document.getElementById("board2");
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
            board1.appendChild(item_row);
        })
    }

    getLeaderboard1();
    getLeaderboard2();
    
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
        margin-left: 50px; 
        font-size: 15px;
    }

    table {
        width: 80%;
        margin-left: 50px;
        border-radius: 15px;
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
   
</style>