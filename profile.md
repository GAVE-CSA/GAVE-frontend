---
layout: none
permalink: /profile
---

{%- include gave-navbar.html -%}
<style>
    .circle-img {
      border-radius: 50%;
      width: 100px;
      height: 100px;
    }

    .center-horizontal {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10vh;
      margin: 0;
    }

    h1 {
        text-align: center;
    }

    p {
        text-align: center;
    }

    .button {
    padding: .5rem 2rem;
    color: var(--white) !important;
    background-color: var(--primary-color);
    border-radius: 5px;
    border: none;
}
  </style>

<body>
<br>
<br>
<div class="center-horizontal">
    <img src="https://cdn.discordapp.com/attachments/879557685253664768/1206775295491706880/360_F_509597532_RKUuYsERhODmkxkZd82pSHnFtDAtgbzJ.png?ex=65dd3c13&is=65cac713&hm=6609ac7a33b11e2c4ab3fd1cc54908d5eb5d1f8c3ff015be2621028b6707a9ff&" alt="Circular Image" class="circle-img">
</div>

<h1 id="initName"></h1>
<p id="email"></p>

<div class="center-horizontal">
    <button class="button">Scores</button>
</div>

<div class="center-horizontal">
      <button class="button" onclick="logout()">Logout</button>
</div>

<div class="center-horizontal">
      <a href="{{ site.baseurl }}/intro" class="button">Tutorial</a>
</div>

<script>
    window.onload = function () {
    fetchUserData();
  };

  function logout() {
      var requestOptions = {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        credentials: 'include',
      }

      //fetch('http://localhost:8013/api/person/logout', requestOptions)
      fetch('http://wsw.stu.nighthawkcodingsociety.com/api/person/logout', requestOptions)
      .then(response => {
        if (response.ok) {
          console.log('Logout successful');
          document.getElementById("initName").innerHTML = null;
          document.getElementById("email").innerHTML = null;
          // window.location.reload();
        } else {
          console.error('Logout failed');
        }
      })
      .catch(error => console.error('Error during logout:', error));
    }


  function fetchUserData() {
      var requestOptions = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        credentials: 'include',
      };

      //fetch("http://localhost:8013/api/person/jwt", requestOptions)
      fetch("https://wsw.stu.nighthawkcodingsociety.com/api/person/jwt", requestOptions)
        .then(response => {
                if (!response.ok) {
                    const errorMsg = 'Login error: ' + response.status;
                    console.log(errorMsg);

                    switch (response.status) {
                        case 401:
                            alert("Please log into or make an account");
                            window.location.href = "login";
                            break;
                        case 403:
                            alert("Access forbidden. You do not have permission to access this resource.");
                            break;
                        case 404:
                            alert("User not found. Please check your credentials.");
                            break;
                        // Add more cases for other status codes as needed
                        default:
                            alert("Login failed. Please try again later.");
                    }

                    return Promise.reject('Login failed');
                }
                return response.json();
                // Success!!!
            })
       .then(data => {
            console.log(data);
            document.getElementById("initName").innerHTML = data.name;
            document.getElementById("email").innerHTML = data.email;
            })
        
       .catch(error => console.log('error', error));
  }
</script>