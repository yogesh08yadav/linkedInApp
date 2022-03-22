import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import {useSelector} from 'react-redux'
import { login, logout, selectUser } from './features/userSlice';


export default function Sidebar() {
    const user = useSelector(selectUser)
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>

    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img 
                src="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500?b=1&k=20&m=537331500&s=170667a&w=0&h=-OawbbTR9TwfewLYKlaU-_cn1m_dq1WLpBK1qubFhGI=" 
                alt="" />
                <Avatar src={user.photoUrl} className="sidebar__avatar">
                {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you </p>
                    <p className='sidebar__statnumber'>2,502</p>

                </div>
                <div className="sidebar__stat">
                <p>Views on post</p>
                    <p className='sidebar__statnumber'>5,024</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem('programming')}
                {recentItem('design')}
                {recentItem('developer')}
                {recentItem('materialUI')}
            </div>
        </div>
    )
}
