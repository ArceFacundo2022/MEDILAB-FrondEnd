import React from "react";
import SectionServices from "./Sections/SectionServices";
import SectionAbout from "./Sections/SectionAbout";
import SectionContact from "./Sections/SectionContact";
import SectionDoctor from "./Sections/SectionDoctor";
import SectionCounts from "./Sections/SectionCounts";
import SectionWhyUS from "./Sections/SectionWhyUs";

const Main = () => {
    return (
        <main>
            <SectionWhyUS/>
            <SectionAbout/>
            <SectionCounts/>
            <SectionServices/>
            <SectionDoctor/>
            <SectionContact/>
        </main>
    )
}

export default Main