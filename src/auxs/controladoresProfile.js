export const ctrlProfile = {
    getIDToken : async (url) => {

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

        const data = await json.json()
        localStorage.setItem("ID", data.userId);
        return data.userId
    },

    getInfoProfile : async (url) => {

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
        const data = await json.json()
        if (data.profileUser == undefined){
            return false
        }
        return data
    },

    getCompacion : async (url) => {
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
        const data = await json.json()
        return data
    }
}