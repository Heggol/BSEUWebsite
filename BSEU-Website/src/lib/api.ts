const API_BASE = 'http://localhost:3002/posts';

export async function fetchAnnouncements() {
    const response = await fetch(API_BASE);
    return response.json();
}

export async function fetchAnnouncement(id: number) {
    const response = await fetch (`${API_BASE}/${id}`)
    return response.json();
}

export async function addAnnouncement(title: string, content: string) {
    const response = await fetch(API_BASE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
    });
    return response.json;
}

export async function deleteAnnouncement(id: number) {
    await fetch(`${API_BASE}/${id}`, {
        method: 'DELETE'
    });
}