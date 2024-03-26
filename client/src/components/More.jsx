import React from "react";
import Header from "./Header";
import About from "./About";
import Team from "./Team";
import Footer from "./Footer";

function Contact(){
    return (
        <div className="bg-gradient-to-t from-gray-800 to-gray-900">
            <Header />
            <About />
            <Team />
            <Footer/>
        </div>
    )
}
export default Contact;