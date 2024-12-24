<script lang="ts">
    import { page } from "$app/state";
    import { fetchAnnouncement } from "$lib/api";
    import { onMount } from "svelte";
    let post: any = null;

    async function loadAnnouncement() {
        if (!isNaN(Number(page.params.id))) {
            try {
                const posts = await fetchAnnouncement(Number(page.params.id));
                post = posts[0];
            } catch (error) {
                console.error("Error fetching announcement:", error);
                post = { error: "Failed to load announcement."};
            }
        
        } else {
            console.error("Invalid URL");
            post = {error: "Invalid URL"}
        }
    console.log('Post:', post)
    }
    onMount(loadAnnouncement)

</script>
{#if post}
    <h1>{post.title}</h1>
    <p>{post.content}</p>
{:else}
    <p>Loading...</p>
{/if}