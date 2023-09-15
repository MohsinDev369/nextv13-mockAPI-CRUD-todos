export default async function updateTodos(id: string, value: string) {
    fetch(`https://${process.env.NEXT_PUBLIC_API_ENDPOINT}.mockapi.io/api/Todos/${id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        // Send your data in the request body as JSON
        body: JSON.stringify({
            "Todo": value
        })
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).then(task => {
        // do something with the new task
        console.log(task);

    }).catch(error => {
        // handle error
        console.log(error);
    })

}