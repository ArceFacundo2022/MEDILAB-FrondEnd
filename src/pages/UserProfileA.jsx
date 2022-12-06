import Header from "../components/layout/Header";
import TopBar from "../components/TopBar";
import SectionProfile from "../components/Sections/SectionProfile";
import Footer from "../components/layout/Footer";
import { ctrlProfile } from "../auxs/controladoresProfile";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ctrlNotifi } from "../auxs/ControladoresNotifications";

const UserProfileA = (props) => {
  const { userID } = useParams();
  const navigate2 = useNavigate();
  const [infoU, setInfoU] = useState({
    userName: "",
    dni: "",
    role: "",
    email: "",
    hero: "",
    cuenta: "",
    userRole: "",
    repeat: true,
    divHTML: "",
  });

  useEffect(() => {
    const execute = async () => {
      const id2 = await ctrlProfile.getIDToken(`http://localhost:3000/token`);
      if (props.idUser == "NotID") {
        navigate2(`/home/${id2}`);
      }
      if (infoU.repeat) {
        let infoPro = await ctrlProfile.getInfoProfile(
          `http://localhost:3000/profile/${userID}`
        );
        let divHTML2 = await ctrlNotifi.getNotificationsMailBox(
          `http://localhost:3000/Notifications`
        );
        if (!infoPro) {
          navigate2(`/home/${id2}`);
        } else {
          infoPro.profileUser.divHTML = divHTML2;
          switch (infoPro.profileUser.role) {
            case "user":
              infoPro.profileUser.hero = "hero2";
              infoPro.profileUser.repeat = false;
              setInfoU(infoPro.profileUser);
              break;
            case "admin":
              infoPro.profileUser.hero = "hero6";
              infoPro.profileUser.repeat = false;
              setInfoU(infoPro.profileUser);
              break;
            case "medic":
              infoPro.profileUser.hero = "hero7";
              infoPro.profileUser.repeat = false;
              setInfoU(infoPro.profileUser);
              break;
          }
        }
      }
    };
    execute();
  }, [userID]);

  return (
    <>
      <TopBar />
      <Header typeH="Home" infoUsu={infoU} id={userID} />
      <main id="main">
        <SectionProfile infoUsu={infoU} />
      </main>
      <Footer />
    </>
  );
};

export default UserProfileA;
