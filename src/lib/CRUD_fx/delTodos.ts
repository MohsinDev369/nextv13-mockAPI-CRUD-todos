export default async function DELfx(id: string) {
    try {
        const res = await fetch(`https://${process.env.NEXT_PUBLIC_API_ENDPOINT}.mockapi.io/api/Todos/${id}`, {
            method: "DELETE",
        });
        if (!res.ok) {
            // Handle the error here
            console.log("Error:", res.statusText);
            return;
        }

        const task = await res.json();

        // Do something with the new task
        console.log(task);
    } catch (error) {
        // Handle the error here
        console.error(error);
    }
    
    
}