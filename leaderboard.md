---
layout: none
permalink: /leaderboard
---

{%- include gave-navbar.html -%}

<html>
    <body>
        <h1 class="board1-header" id="gameTitle" value="1">Password Game Leaderboard</h1>
        <section class="board1-body">
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
        </section>
    </body>
</html>

<script>
    var deployURL = "http://localhost:8013";

    function getLeaderboard() {
        var gameId = 1;
        console.log(gameId);
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

    getLeaderboard();
    
</script>


<style>
    .board1-header {
        margin-left: 50px;
        font-size: 15px;
        margin-bottom: 5px;
    }

    table {
        width: 30%;
        margin-left: 50px;
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