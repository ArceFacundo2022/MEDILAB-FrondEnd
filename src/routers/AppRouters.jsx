import { BrowserRouter, Route, Routes } from "react-router-dom"
import {PublicRoutes} from "./PublicRoutes"
import {PrivateRoutes} from "./PrivateRoutes"
import MainHistoriaClinica from '../pages/MainHistoriaClinica'
import LadingPage from "../pages/LadingPage"
import UserProfile from "../pages/UserProfile"
import UserProfileA from "../pages/UserProfileA"
import HistorialClinicas from "../pages/HistorialClinicas"
import NotPag from "../pages/NotPag"
import { CargarHistoria } from "../pages/CargarHistoria"

export const AppRouter = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ 
            <PublicRoutes>
                <LadingPage/>
            </PublicRoutes>
            }/>

            <Route path='/ClinicHistory' element={ 
            <PrivateRoutes>
                <MainHistoriaClinica/>
            </PrivateRoutes>
            }/>

            <Route path='/home2' element={ 
            <PrivateRoutes>
                <UserProfile/>
            </PrivateRoutes>
            }/>

            <Route path='/home' element={ 
            <PrivateRoutes>
                <UserProfileA idUser="NotID"/>
            </PrivateRoutes>
            }/>

            <Route path="/home/:userID" element={ 
                    <PrivateRoutes>
                        <UserProfileA/>
                    </PrivateRoutes> }/>

            <Route path='/filtro' element={ 
            <PrivateRoutes>
                <HistorialClinicas idUser="NotID"/>
            </PrivateRoutes>
            }/>

            <Route path='/filtro/:userID' element={ 
            <PrivateRoutes>
                <HistorialClinicas/>
            </PrivateRoutes>
            }/>

            <Route path='/*' element={ 
                <NotPag/>
            }/>

            <Route path='/History' element={ 
                <CargarHistoria/>
            }/>

        </Routes>
    </BrowserRouter>
    )
}