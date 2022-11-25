
export const ctrlUser = {


    postLogin : async (url, inicio) =>{

        const json = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
        },
            method: 'POST',
            body: JSON.stringify(inicio)
        })

        if (!json.ok){
            return alert('Error al hacer la peticion');
        }


        const data = await json.json()
        console.log(data.token)
        localStorage.setItem("Token", data.token)
        return "correcto"
    },

    postUser : async (url, rawUser) =>{

        const json = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
        },
            method: 'POST',
            body: rawUser
        })

        if (!json.ok){
            return alert('Error al hacer la peticion');
        }

        const data = await json.json()
        return console.log(data)
    }
}
