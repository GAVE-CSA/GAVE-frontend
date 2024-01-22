---
layout: none
---


{%- include gave-navbar.html -%}

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Poppins:wght@400;500;600;700&display=swap');

    :root {
        --primary-color: #5c48ee;
        --primary-color-dark: #0f1e6a;
        --secondary-color: #f9fafe;
        --text-color: #333333;
        --white: #ffffff;
        --max-width: 1200px;
    }

    .container {
        max-width: var(--max-width);
        margin: auto;
        padding: 1rem;
        min-height: calc(100vh - 100px);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap:5rem;
    }

    .content_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .content_container h1{
        font-size: 3rem;
        font-weight: 400;
        line-height 3.5rem;
        color: var(--primary-color-dark);
        margin-bottom: 1rem;
    }

    .heading_1{
        font-weight: 700;
    }

    .heading_2{
        font-weight: 700;
        color: var(--primary-color);
    }

    .content_container p{
        font-size: 1rem;
        color: var(--text-color);
        margin-bottom: 2rem;
    }

    .content_container button {
        width: fit-content;
        padding: 1rem;
        font-size: .8rem;
        white-space: nowrap;
        background-color: var(--primary-color);
        color: var(--white);
        outline: none;
        border: none;
        border-radius: 15px; 
        box-shadow: 5px 5px 20px rgba(0,0,0,0.2);
        transition: .3s;
        cursor:pointer;
    }

    .content_container button:hover {
        background-color: var(--primary-color-dark);
    }

    .image_container {
        position: relative;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        place-content: center;
    }

    .image_container img {
        width: 100%;
        max-width: 1000px;
        margin: auto;
        border-radius: 10px;
    }

    .image_container img:nth-child(1){
        transform: translateY(-70px);
    }
</style>

<html>
    <body>
        <section class="container">
            <div class="content_container">
                <h1>
                    Web<br>
                    <span class="heading_1">Security</span><br>
                    <span class="heading_2">Wizards</span>
                </h1>
                <p>
                    This webpage aims to teach people of all ages the importance of cybersecurity in our increasingly digital world. We hope to create an intuitive website for high schoolers to be educated and practice their knowledge with fun and interactive games! 
                </p>
                <button>Learn More</button>
            </div>
            <div class="image_container">
                <img src="images/image1.png" alt="image1" width="100">
                <img src="images/image2.png" alt="image2">
            </div>
        </section>
    </body>
</html>
