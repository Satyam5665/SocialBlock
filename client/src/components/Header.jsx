import { React,useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function Header(){

    
    const [toggle,setToggle] = useState(false);
    let ib = toggle ? <MenuIcon /> : <CloseIcon />;
    
    function onToggle(){
        setToggle((prevValue) => {
            return !prevValue;
        })
    } 
    return (<header className="z-10 flex fixed w-full justify-center mb-auto md:mb-16 lg:mb-12 bg-gradient-to-t from-sky-300 to-blue-400 backdrop-filter backdrop-blur-lg bg-opacity-70 top-0">
        <div className="nav inline-block lg:flex justify-center p-7 shadow-xl  w-full flex-wrap">
            <div className="flex justify-between">
                <a href="./" className="flex title items-center ml-1 md:ml-3 lg:ml-10 text-slate-100 text-xl sm:text-2xl md:text-3xl">SOCIALBLOCK</a>
                <IconButton onClick={onToggle} className="visible lg:invisible sm:mr-16">{ib}</IconButton>
            </div>
        </div>
    </header>)
}

export default Header;