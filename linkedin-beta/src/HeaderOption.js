import { Avatar } from '@material-ui/core';
import React from 'react';
import "./HeaderOption.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";


function HeaderOption({Icon, title, avatar, onClick}) {
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOptionIcon"/>}
            {avatar && (<Avatar className="headerOptionIcon"> {user?.email[0]}</Avatar>
      )}
            <h3 className="headerOptionTitle">{title}</h3>
        </div>
    );
}

export default HeaderOption
