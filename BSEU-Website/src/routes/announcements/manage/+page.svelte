<script lang="ts">
    import { fetchAnnouncements, deleteAnnouncement, addAnnouncement } from '$lib/api'
  import { onMount } from 'svelte';
    let announcements: any = [];
    let newTitle = '';
    let newContent = '';

    async function loadAnnouncements() {
        announcements = await fetchAnnouncements()
    }
    async function handleAdd() {
        if (newTitle && newContent) {
            await addAnnouncement(newTitle, newContent);
            newTitle = '';
            newContent = '';
            await loadAnnouncements();
        }
    }
    async function handleDelete(id: number) {
        await deleteAnnouncement(id);
        await loadAnnouncements();
    }
onMount(loadAnnouncements);
</script>
<div>
    <h2>Add New Announcement</h2>
    <input type="text" bind:value={newTitle} placeholder="Title">
    <textarea bind:value={newContent} placeholder="Content"></textarea>
    <button on:click={handleAdd}>Add</button>
</div>
<div>
    <h2>Delete Announcement</h2>
    {#each announcements as post( post.id )}
    <button class="posts" on:click={() => handleDelete(post.id)}>{ post.title }</button>
    {/each}
</div>
<style>
    .posts { 
        margin-bottom: 20px; 
        padding: 10px;
        color: #0000ff;
        text-decoration: underline;
    }
</style>