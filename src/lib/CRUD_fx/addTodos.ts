export default async function Addfx(todo: string) {
    fetch(`https://${process.env.NEXT_PUBLIC_API_ENDPOINT}.mockapi.io/api/Todos`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        // Send your data in the request body as JSON
        body: JSON.stringify({
            "Todo": todo,
            "IsDon": false
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