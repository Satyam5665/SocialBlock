import React from "react";
import SD from "../images/SD.png";
import GS from "../images/GS.png";
import JS from "../images/JS.png";
import SS from "../images/SS.png";

function Team(){
    return (
        <div className="flex justify-between p-10 flex-col">
            <div  className="flex justify-center p-4 text">
                    <h1 className="flex text-4xl font-medium text-slate-50">MEET THE TEAM</h1> 
            </div>
            <div className="flex justify-center p-4 gap-24 flex-wrap m-10">
                <div className="flex w-44 h-44 flex-col gap-y-5">
                    <img src={SD} alt=""/>
                    <p className="flex text-slate-300 justify-center text-xl">0xSD</p>
                </div>
                <div className="flex w-44 h-44 flex-col gap-y-5">
                    <img src={GS} alt=""/>
                    <p className="flex text-slate-300 justify-center text-xl">0xGS</p>
                </div>
                <div className="flex w-44 h-44 flex-col gap-y-5">
                    <img src={JS} alt=""/>
                    <p className="flex text-slate-300 justify-center text-xl">0xJS</p>
                </div>
                <div className="flex w-44 h-44 flex-col gap-y-5">
                    <img src={SS} alt=""/>
                    <p className="flex text-slate-300 justify-center text-xl">0xSS</p>
                </div>
                    
            </div>
            
        </div>
    )
}

export default Team;