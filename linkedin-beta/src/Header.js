import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkIcon from '@material-ui/icons/Work';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FaceIcon from '@material-ui/icons/Face';

function Header() {
    return (
        <div className= "header">
            
            <div className= "headerLeft">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="linkedin logo" />

                <div className="headerSearch">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="headerRight">
                <HeaderOption title="Home" Icon={HomeIcon}/>
                <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
                <HeaderOption title="Jobs" Icon={WorkIcon} />
                <HeaderOption title="Messaging" Icon={ChatIcon}/>
                <HeaderOption title="Notifications" Icon={NotificationsIcon}/>
                <HeaderOption avatar={FaceIcon} title="Me"/>

            </div>
        </div>
    )
}

export default Header
