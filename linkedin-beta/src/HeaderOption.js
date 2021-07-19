import { Avatar } from '@material-ui/core';
import React from 'react';
import "./HeaderOption.css";


function HeaderOption({Icon, title, avatar}) {
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOptionIcon"/>}
            {avatar && <Avatar className="headerOptionIcon" src={avatar}/>}
            <h3 className="headerOptionTitle">{title}</h3>
        </div>
    );
}

export default HeaderOption
