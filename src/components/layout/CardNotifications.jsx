import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ctrlNotifi } from "../../auxs/ControladoresNotifications";

export const CardNotifications = (props) =>{

    const [info, setInfo] = useState(props.info)

    useEffect(() => {
        const execute = async () =>{
        const info2 = await ctrlNotifi.getNotificationsMailBox(`http://localhost:3000/Notifications`)
        setInfo(info2)
        }
    }, [])
    return (
        <>
            {info.map((info, key) => {
                return (
                <>
                    <li key={"info" + key}>
                        <div className="card mt-4 hero2card1" style={{"background-color":"#f1f7fd"}}>
                        <div className="card-body text-center ">
                            <div className="d-flex justify-content-center mb-2">
                            <div className="col-md-4 border-right">
                            <h5 className="my-3" id="H5Nombre">{info.titulo}</h5>
                            </div>
                            </div>
                            <hr/>
                            <p className="text-muted mb-4" id="PCate">{info.descripcion}</p>
                        </div>
                        <div className="text-right" style={{"text-align": "right"}}>
                            <a href={`http://localhost:3000/${info.imagePath}`} onClick={async () => {await ctrlNotifi.postAcceptNotification(`http://localhost:3000/NotificationsA/${info._id}`,"cancel"); window.location.reload()}} target="_blank">
                                <span style={{"color":"rgb(77, 127, 221)"}} id="icon">
                                <i className="far fa-check-circle m-2" style={{"font-size":"30px"}} ></i>
                                </span>
                            </a>
                            <a type="button" onClick={async () => {await ctrlNotifi.postAcceptNotification(`http://localhost:3000/NotificationsA/${info._id}`,"cancel"); window.location.reload()}} target="_blank">
                                <span style={{"color":"rgb(77, 127, 221)"}} id="icon">
                                <i className="fas fa-ban m-2" style={{"font-size":"30px"}} ></i>
                                </span>
                            </a>
                        </div>
                        </div>
                    </li>
                </>
                );
            })}
        </>
    )
}