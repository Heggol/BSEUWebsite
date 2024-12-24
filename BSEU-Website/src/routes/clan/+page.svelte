<script lang="ts">
    import { onMount } from "svelte";

    interface playerData {
        id: number,
        name: string,
        platform: string,
        avatar: string,
        country: string,
        alias: string,
        pp: number,
        rank: number,
        countryRank: number,
    }
    type data = playerData[];
    interface ApiResponse {
        metadata: any;
        data: data;
        container: container;
    }
    interface container {
        name: string;
        description: string;
        icon: string;
        playersCount: number;
        pp: number;
    }

    let error: string | null = null;
    let currLoading: boolean = true;
    let clanInfo: container | null = null;
    let players: data | null = null;

    onMount(async () => {
        try {
            const response = await fetch(`https://api.beatleader.xyz/clan/BSEU?page=1&count=50&order=0&primary=false`);
            if (!response.ok) {
                throw new Error(`Failed to fetch clan data: ${response.status}`);
                console.error(`Error: ${response.status}`)
                console.warn(`Response: ${response}`)
            }
            const json: ApiResponse = await response.json();
            if (json.container && json.data) {
                clanInfo = json.container;
                players = [...json.data];
            } else {
                throw new Error("Invalid response format: 'container' missing");
            }
            console.log("Fetched clan info:", clanInfo);
            console.log("Fetched players:", players);
        } catch (err) {
            error = err instanceof Error ? err.message : "Unknown error occured";
        } finally {
            currLoading = false;
        }
    });
    
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
{#if currLoading}
    <div class="container">
        <p class="loading">Loading clan info...</p>
    </div>
{:else if error}
    <div class="container">
        <p class="error">Error: {error}</p>
    </div>
{:else if clanInfo && players}
<div class="container">
    <div class="clan-info">
        <img src={clanInfo.icon} alt={clanInfo.name} class="clan-icon"/>
        <h2><strong>Clan:</strong> {clanInfo.name}</h2>
        <p><strong>Description:</strong> {clanInfo.description}</p>
        <p><strong>Players Count:</strong> {clanInfo.playersCount}</p>
        <p><strong>Total PP:</strong> {clanInfo.pp}pp</p>
        <p><a class="discord" href="https://discord.gg/4xt9WKAWcG">Join the Discord!</a></p>
    </div>
    <div class="players">
        <table class="table">
            <thead>
                <tr>
                    <th class="table-header">Avatar</th>
                    <th class="table-header">Name</th>
                    <th class="table-header">Country</th>
                    <th class="table-header">Global Rank</th>
                    <th class="table-header">Country Rank</th>
                    <th class="table-header">Total PP</th>
                </tr>
            </thead>
            <tbody>
                {#each players as player}
                    <tr>
                        <td class="table-cell"><img class="avatar" src={player.avatar} alt={player.name} /></td>
                        <td class="table-cell name">{player.name}</td>
                        <td class="table-cell">
                            <img class="country" src={`https://beatleader.xyz/assets/flags/${encodeURIComponent(player.country.toLowerCase())}.png`} alt="{player.country}">
                        </td>
                        <td class="table-cell">#{player.rank}</td>
                        <td class="table-cell">#{player.countryRank}</td>
                        <td class="table-cell">{player.pp}pp</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
{/if}
<style>
    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&display=swap');
    .container {
        display: block;
        max-width: 100%;
        height: fit-content;
        background-color: #0f204c;
    }
    .clan-icon {
        display: block;
        margin: auto;
    }
    .clan-info {
        font-family: "Barlow", serif;
        font-weight: 400;
        max-width: 600px;
        margin: 0 auto;
        margin-bottom: 16px;
        padding: 24px;
        border-radius: 8px;
        background-color: #aaaaaa;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    .discord {
        color: #0000ff;
    }
    .error{
        color: #ff0000;
    }
    .loading {
        text-align: center;
        font-family: "Barlow", serif;
        font-style: italic;
    }
    .players {
        font-family: "Barlow", serif;
        font-weight: 400;
        max-width: 600px;
        margin: 0 auto;
        padding: 24px;
        border-radius: 8px;
        background-color: #aaaaaa;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    .table {
        width: 100%;
    }
    .table-header {
        border: 1px solid #000000;
    }
    .table-cell {
        border: 1px solid #000000;
    }
    .avatar {
        max-width: 50px;
        max-height: 50px;
        border-radius: 50%;
        border: 1px solid #000000
    }
    .country {
        max-width: 60px;
        max-height: 51.75px;
        display: block;
        margin: auto;
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