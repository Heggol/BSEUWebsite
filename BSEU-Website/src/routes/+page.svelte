<script lang="ts">

</script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<nav class="navbar">
    <a href="/" class="home-button">
        Home
    </a>
    <a href="/clan" class="clan-button">
        BSEU Clan
    </a>
    <a href="/announcements" class="announcement-button">
        Announcements
    </a>
    <a href="/about" class="about-button">
        About
    </a>
</nav>
<div class="container">
    <h1 class="heading">
        &#9733; &#9734; BSEU &#9734; &#9733;
    </h1>
</div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&display=swap');
    .container {
        max-width: 100%;
        height: calc(100dvh - 68px);
        background-image: url('/images/background/background.webp');
        background-attachment: scroll;
        background-size: cover;
        background-position: center;
    }
    .navbar {
        font-family: "Barlow", serif;
        font-weight: 500;
        font-style: normal;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 4px;
        background-color: #aaaaaa;
        padding: 6px;
        border-bottom: 2px solid #0f204c;
    }
    .heading {
        font-family: "Barlow", serif;
        font-weight: 800;
        font-style: normal;
        font-size: 6rem;
        color: #ffff20;
        text-align: center;
    }
    .home-button {
        justify-content: center;
        color: #0f204c;
        background-color: #5a5a5a70;
        padding: 12px 48px;
        font-size: 20px;
        border-radius: 16px;
        cursor: pointer;
        text-decoration: none;
        position: relative;
        border: none;
        transition: box-shadow 0.3s ease-out;
    }
    .home-button:hover {
        box-shadow: 0 0px 20px rgba(255, 255, 32, 0.75);
    }
    .clan-button {
        justify-content: center;
        color: #0f204c;
        padding: 12px 48px;
        font-size: 20px;
        border-radius: 16px;
        cursor: pointer;
        text-decoration: none;
        position: relative;
        border: none;
        transition: box-shadow 0.3s ease-out;
    }
    .clan-button:hover {
        box-shadow: 0 0px 20px rgba(255, 255, 32, 0.75);
    }
    .announcement-button {
        justify-content: center;
        color: #0f204c;
        padding: 12px 48px;
        font-size: 20px;
        border-radius: 16px;
        cursor: pointer;
        text-decoration: none;
        position: relative;
        border: none;
        transition: box-shadow 0.3s ease-out;
    }
    .announcement-button:hover {
        box-shadow: 0 0px 20px rgba(255, 255, 32, 0.75);
    }
    .about-button {
        justify-content: center;
        color: #0f204c;
        padding: 12px 48px;
        font-size: 20px;
        border-radius: 16px;
        cursor: pointer;
        text-decoration: none;
        position: relative;
        border: none;
        transition: box-shadow 0.3s ease-out;
    }
    .about-button:hover {
        box-shadow: 0 0px 20px rgba(255, 255, 32, 0.75);
    }
</style>
