export default async function GETfx() {
    let res = await fetch(`https://${process.env.NEXT_PUBLIC_API_ENDPOINT}.mockapi.io/api/Todos`);
    let Todos = await res.json();
    return Todos
}