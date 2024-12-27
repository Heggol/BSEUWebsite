<nav class="navbar">
    <a href="/" class="button">
        Home
    </a>
    <a href="/clan" class="button">
        BSEU Clan
    </a>
    <a href="/announcements" class="button">
        Announcements
    </a>
    <a href="/about" class="button current">
        About
    </a>
</nav>
<h1>
    about
</h1>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&display=swap');
    h1 {
        font-family: "Barlow", serif;
        font-weight: 800;
        font-style: normal;
        text-align: center;
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
    .button {
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
    .button:hover {
        box-shadow: 0 0px 20px rgba(255, 255, 32, 0.75);
    }
    .current {
        background-color: #5a5a5a70;
    }
</style>