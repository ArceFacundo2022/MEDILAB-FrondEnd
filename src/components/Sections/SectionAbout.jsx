import React from "react";

const SectionAbout = () =>{
    return (
        <section id="about" className="about">
            <div className="container">
    
            <div className="row">
                <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                <a href="https://www.youtube.com/watch?v=7YZCUpnaTfg" className="glightbox play-btn mb-4"></a>
                </div>
    
                <div
                className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                <h3>Somos un software especializado en la gestión y control de consultas.</h3>
                <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus
                    laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla
                    tenetur. Suscipit aut voluptate.</p>
    
                <div className="icon-box">
                    <div className="icon"><i className="bx bx-fingerprint"></i></div>
                    <h4 className="title"><a href="">Proximamente lector de huellas.</a></h4>
                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident</p>
                </div>
    
                </div>
            </div>
    
            </div>
        </section>
    )
}

export default SectionAbout