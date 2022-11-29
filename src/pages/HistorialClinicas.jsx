import React from 'react'
import Header from '../components/layout/Header';
import Card from '../components/layout/Card';
import Footer from '../components/layout/Footer';
import TopBar from '../components/TopBar';

export default function HistorialClinicas() {
return (
    <>
        <TopBar/>
        <Header typeH="Filtro"/>

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

                    <Card numero="1"/>
                    <Card numero="2"/>
                    <Card numero="3"/>

                </div>

                </div>
            </section>
            
        </main>

        <Footer/>

    </>
)
}
