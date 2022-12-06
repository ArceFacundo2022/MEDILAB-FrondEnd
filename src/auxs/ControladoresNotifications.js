
export const ctrlNotifi = {
    postPeticionA : async (url, infoU, id) =>{

        const rawNotifi = {
            titulo : ``,
            descripcion : "",
            type : "Contacto"
        }

        const json = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : localStorage.getItem("Token")
        },
            method: 'POST',
            body: JSON.stringify(rawNotifi)
        })

        if (!json.ok){
            return alert(`Error al hacer la peticion`);
        }

        const data = await json.json()
        const correcto = "correcto"
        return correcto
    },

    getNotificationsMailBox : async (url) => {
        const json = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : localStorage.getItem("Token")
        },
            method: 'GET',
        })

        if (!json.ok){
            return alert('Error al hacer la peticion');
        }
        const result = await json.json()
    return (result.notifications)
    },

    postAcceptNotification : async (url, type2) => {

        const rawNotifi = {
            type : type2
        }

        const json = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : localStorage.getItem("Token")
        },
            method: 'POST',
            body: JSON.stringify(rawNotifi)
        })

        if (!json.ok){
            return alert(`Error al hacer la peticion`);
        }
        const data = await json.json()
        console.log(data)
        return "correcto"
    }
}
