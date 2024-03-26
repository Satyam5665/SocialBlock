import React from "react";
import rct from "../images/React.png";
import material from "../images/Material.png";
import tailwind from "../images/Tailwind.png";
import solidity from "../images/Solidity.png";
import Image from "../images/Logo.png";

function About(){
    return (
        <div className="mt-28 md:mt-20 ">
            <div  className="flex md:p-16 justify-center flex-col lg:flex-row">
                <div className="text-center flex justify-center p-8 lg:p-10">
                    <img src={Image} className="avatar rounded-full mx-auto w-full h-full" class="avatar" alt="My_Img"/>
                </div>
                <div className="p-10 lg:p-20 mt-7 text lg:w-1/2 flex gap-y-2 flex-col">
                    <h2 className="text-4xl font-medium  text-slate-50 text-left m-3">ABOUT SOCIALBLOCK</h2>
                    <p className="text-2xl text-slate-300 text-left m-2">
                    SOCIALBLOCK takes social media to the next level with its integration of Web3 technologies, 
                    offering a user-centric, privacy-focused, community-driven, and creator-friendly platform. 
                    Join SOCIALBLOCK today and experience a new era of social networking 
                    where you are in control of your data, your community, and your online presence.
                    </p>
                </div>
            </div>
            <div  className="flex justify-center p-4 text">
                    <h1 className="flex text-4xl font-medium text-slate-50">TECH USED</h1> 
            </div>
            <div className="flex justify-center p-4 gap-20 flex-wrap m-10">
                    <img src={tailwind} alt=""  className="icon w-20 h-20" />
                    <img src={solidity} alt=""  className="icon w-20 h-20" />
                    <img src={rct} alt=""  className="icon w-20 h-20" />
                    <img src={material} alt=""  className="icon w-20 h-20" />
            </div>
        </div>
    );
}

export default About;