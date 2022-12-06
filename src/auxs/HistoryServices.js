
    const URI='http://localhost:3000/api/histories';
export const HistoryServices = {
    
    getHistories: async()=>{
        console.log("hola")
        const response = await fetch(URI)
        const histories = await response.json()
        console.log(histories)
    },

    postHistory:async(history)=>{
        

        const response = await fetch(URI,{
            method:'POST',
            body:history,
            headers:{
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        const data = await response.json()
        console.log(data)
        
    },

    deleteHistory:async(historyId)=>{
        const response = await fetch(`${URI}/${historyId}`,{
            headers:{
                'Content-Type':'application/json'
            },
            method:'DELETE'
        })
        const data =  await response.json()
        console.log(data)
    },
}