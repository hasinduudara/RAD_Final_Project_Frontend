export async function uploadProfileImage(file: File) {
    const apiKey = import.meta.env.IMGBB_API_KEY;

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: "POST",
        body: formData
    });

    const data = await res.json();
    return data.data.url; // MUST be this
}
