import { AiFillMedicineBox, AiOutlineUser } from "react-icons/ai";

export const ctrlComent = {
    postComent : async (url, comentario) =>{

        const json = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : localStorage.getItem("Token")
        },
            method: 'POST',
            body: JSON.stringify({
            "comentario" : comentario
        })
        })

        if (!json.ok){
            return alert('Error al hacer la peticion');
        }

        const data = await json.json()
        console.log(data)
    },

    getComent : async (url) => {
        const json = await fetch(url)
        if (!json.ok){
            return alert('Error al hacer la peticion');
        }
        const result = await json.json()
        let divHTML =``;

    for(let i=0;i<result.coment2.length;i++){

        divHTML+=`
            <div style="background-color: rgb(231, 238, 255)">
                <p><strong> <AiOutlineUser/> ${result.coment2[i].userName}:</strong></p>
                <p>- ${result.coment2[i].comentario}</p>
            </div>
            <br/>
            `;
    }
    return (divHTML)
    }
}