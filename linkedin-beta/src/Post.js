import React, {forwardRef} from 'react';
import "./Post.css";
import {Avatar} from "@material-ui/core";
import InputOption from './InputOption';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';


const Post = forwardRef(({name, description, message,photoUrl},ref) => {
    return (
        <div ref={ref} className="post">
            <div className="postHeader">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="postInfo">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>

            </div>
            <div className="postBody">
                <p>{message}</p>
            </div>
            <div className="postButtons">
                <InputOption Icon={ThumbUpIcon} title="Like" color="gray"/>
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
            </div>
        </div>
    )
})

export default Post
