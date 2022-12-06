import React from 'react'
import Header from '../components/layout/Header';
import Card from '../components/layout/Card';
import Footer from '../components/layout/Footer';
import TopBar from '../components/TopBar';
import { ctrlProfile } from '../auxs/controladoresProfile';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ctrlNotifi } from '../auxs/ControladoresNotifications';
import { CardHistory2B } from '../components/CardHistory2B';

export default function HistorialClinicas(props) {
    const {userID} = useParams()
    const navigate2 = useNavigate()
    const [infoUsu, setInfoUsu] = useState({
        role : "",
        cuenta : false,
        divHTML : ""
    })


    useEffect(() => {
            const execute = async () =>{
            const id2 = await ctrlProfile.getIDToken(`http://localhost:3000/token`)
            if(props.idUser == "NotID"){
                navigate2(`/filtro/${id2}`)
            }
            const info = await ctrlProfile.getCompacion(`http://localhost:3000/cuenta/${userID}`)
            let divHTML2 = await ctrlNotifi.getNotificationsMailBox(`http://localhost:3000/Notifications`)
            setInfoUsu({role : info.roleU,
            cuenta : info.cuenta,
            divHTML : divHTML2})
        }
        execute()
    }, [userID])
    console.log(infoUsu)
return (
    <>
        <TopBar/>
        <Header typeH="Filtro" infoU={infoUsu} id={userID}/>

        <main id="main">

            <section id="hero3" className="d-flex align-items-center">
                <div className="container">
                    <h1>Medilab - Historias clinicas</h1>
                    <h2>Sus historias clinicas disponibles 24h.</h2>
                </div>
            </section>
            <section id="services" className="services">
                <div className="container-fluid">
                <div className="row">

                    <CardHistory2B id={userID}/>

                </div>

                </div>
            </section>
            
        </main>

        <Footer/>

    </>
)
}
