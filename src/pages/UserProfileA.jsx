import Header from "../components/layout/Header";
import TopBar from "../components/TopBar";
import SectionProfile from "../components/Sections/SectionProfile";
import Footer from "../components/layout/Footer";

const UserProfileA = () => {
    return (
        <>
        <TopBar/>
        <Header typeH="Home"/>
        <main id="main">
            <SectionProfile/>
        </main>
        <Footer/>
        </>
    )
}

export default UserProfileA