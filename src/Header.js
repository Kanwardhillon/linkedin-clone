import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import "./Header.css"
import HeaderOptions from './HeaderOptions';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { auth } from './firebase';
import {useDispatch, useSelector} from "react-redux"
import {logout, selectUser} from "./features/userSlice"


function Header() {

    const user= useSelector(selectUser);
    const dispatch = useDispatch();

    const logoutOfApp = () =>{
      dispatch(logout())
      auth.signOut();
    }

    return (
        <div className="header">

            <div className="header__left">
                {/* linkedin pic */}
                <img src ="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="linkedin-img"/>
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder='Search' />
                </div>
            </div>


            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title="Home"/>
                <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOptions Icon={ChatIcon} title="Messaging"/>
                <HeaderOptions Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOptions onClick = {logoutOfApp} avatar= {true} title= "me"/>
            </div>
            
        </div>
    )
}

export default Header