import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@material-ui/core';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";


function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebarRecentItem">
            <span className="sidebarHash">#</span>
            <p>{topic}</p>
        </div>

    );




    return (
        <div className="sidebar">
            <div className="sidebarTop">
                <img src="https://img.freepik.com/free-vector/gradient-liquid-abstract-background_52683-60469.jpg?size=626&ext=jpg" alt=""/>
                <Avatar src={user.photoUrl} className="sidebarAvatar" />
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

        <div className="sidebarStats">
            <div className="sidebarStat">
                <p>Who viewed you</p>
                <p className="sidebarStatNumber">2,345</p>
            </div>
            <div className="sidebarStat">
                <p>Views on Post</p>
                <p className="sidebarStatNumber">4,343</p>
            </div>
        </div>

        <div className="sidebarBottom">
            <p>Recent</p>
            {recentItem("React.JS")}
            {recentItem("Javascript")}
            {recentItem("Programming")}
            {recentItem("Orlando Jobs")}
            {recentItem("Help Wanted!")}
        </div>

        </div>
    );
}

export default Sidebar
