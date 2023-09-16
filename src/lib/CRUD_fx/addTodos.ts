export default async function Addfx(todo: string) {
    // fetch(`https://${process.env.NEXT_PUBLIC_API_ENDPOINT}.mockapi.io/api/Todos`, {
    //     method: 'POST',
    //     headers: { 'content-type': 'application/json' },
    //     // Send your data in the request body as JSON
    //     body: JSON.stringify({
    //         "Todo": todo,
    //         "IsDon": false
    //     })
    // }).then(res => {
    //     if (res.ok) {
    //         console.log(res);
    //         return res.json();
    //     }
    //     // handle error
    // }).then(task => {
    //     // do something with the new task
    //     console.log(task);


    // }).catch(error => {
    //     // handle error
    //     console.log(error);
    // })
    try {
        const response = await fetch(`https://${process.env.NEXT_PUBLIC_API_ENDPOINT}.mockapi.io/api/Todos`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                "Todo": todo,
                "IsDon": false
            })
        });

        if (response.ok) {
            const task = await response.json();
            console.log("addTodos.ts " + JSON.stringify(task));
            return task;
        } else {
            console.error('Server response was not ok:', response.status, response.statusText);
            return null; // Return null to indicate an error
        }
    } catch (error) {
        console.error('Error occurred:', error);
        throw error; // Throw the error to be handled elsewhere
    }

}