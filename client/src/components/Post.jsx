import React, { forwardRef } from "react";
import "./Post.css";
import Avatar from 'avataaars2';
import { generateRandomAvatarOptions } from '../avatar';
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import DeleteIcon from '@mui/icons-material/Delete';

const Post = forwardRef(
  ({ displayName, text, personal, onClick }, ref) => {

    return (
      <div className="post flex justify-start p-2" ref={ref}>
        <div className="post__avatar">
          <Avatar
            style={{ width: '100px', height: '100px' }}
            avatarStyle='Circle'
            {...generateRandomAvatarOptions() }
          />
        </div>
        <div className="post__body flex flex-col p-2 gap-y-3">
          <div className="flex flex-col gap-y-1">
            <div className="">
              <h3 className="text-slate-900 text-xl font-medium">
                {displayName}{" "}
              </h3>
            </div>
            <div className="post__headerDescription">
              <p className="text-slate-800 text-l">{text}</p>
            </div>
          </div>
          <div className="postOption flex justify-between mt-5">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
            {personal ? (
              <DeleteIcon fontSize="small" onClick={onClick}/>
            ) : ("")}
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
