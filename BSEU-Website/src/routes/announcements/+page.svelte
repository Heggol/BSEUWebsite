<script lang="ts">
    import { onMount } from "svelte";
    import { fetchAnnouncements } from '$lib/api';
    let announcements: any = [];
    async function loadAnnouncements() {
        announcements = await fetchAnnouncements()
    }
    onMount(loadAnnouncements)
</script>
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
<h1>
    Announcements
</h1>
<div class="posts">
    <h1>All Posts</h1>
    {#each announcements as post ( post.id)}
        <div class="posts">
            <a href={`/announcements/${post.id}`}>{post.title}</a>
        </div>
    {/each}
</div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&display=swap');
    .posts { 
        margin-bottom: 20px; 
        padding: 10px;
    }
    .posts a {
        color: #0000ff;
        text-decoration: underline;
    }
    h1 {
        font-family: "Barlow", serif;
        font-weight: 800;
        font-style: normal;
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
    .home-button {
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