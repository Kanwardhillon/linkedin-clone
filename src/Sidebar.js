import React from 'react';
import Avatar from '@mui/material/Avatar'; 
import "./Sidebar.css"
import {useSelector} from "react-redux"
import {selectUser} from "./features/userSlice"

function Sidebar() {

  const user = useSelector(selectUser);

const recentItem = (topic) =>{
   return( <div className='sidebar__recentItem'>
        <span className='sidebar__hash'>#</span>
        <p>{topic}</p>
    </div>
   )
}

  return (
    <div className="sidebar">
     <div className="sidebar__top">
       <img src="https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60" alt="background-omg" />
       <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0]}</Avatar>
       <h2>{user.displayName}</h2>
       <h4>{user.email}</h4>
    </div>

    <div className="sidebar__stats">
      <div className="sidebar__stat">
       <p> Who viewed you</p>
       <p className="sidebar__statNumber">2543</p>
      </div>

      <div className="sidebar__stat">
       <p> Views on posts</p> 
       <p className="sidebar__statNumber">2323</p>
      </div>
    </div>

     <div className="sidebar__bottom">
      <p>Recent</p>
       {recentItem("reactjs")}
       {recentItem("programming")}
       {recentItem("softwareengineering")}
       {recentItem("design")}
       {recentItem("developer")}
     </div>

    </div>
  )
}

export default Sidebar