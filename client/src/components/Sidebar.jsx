import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Image from "../images/Logo.png";

function Sidebar() {

  return (
    <div className="flex bg-gradient-to-t from-gray-900 to-gray-950 flex-col w-1/3">
      <div className="flex gap-y-20">
        <img src={Image} className="avatar rounded-full mx-auto w-full h-full" class="avatar" alt="My_Img"/>
      </div>
      <div className="flex gap-y-7 w-full flex-col p-8">
        <SidebarOption Icon={HomeIcon} text="Home" onPress={"/"}/>
        <SidebarOption Icon={PermIdentityIcon} text="Profile" onPress={"/profile"}/>
        <SidebarOption Icon={MoreHorizIcon} text="More" onPress={"/more"} />
      </div>
    </div>
  );
}

export default Sidebar;