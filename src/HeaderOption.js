import React from 'react'
import './HeaderOptions.css'
import { Avatar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

export default function HeaderOption({avatar, Icon , title, onClick}) {
    const user = useSelector(selectUser)
    return (
        <div onClick={onClick} className="headerOptions">
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && 
                <Avatar className="headerOption__icon">{user?.email[0]} </Avatar>}
            <h3 className="headerOptions__title">{title}</h3>
        </div>
    )
}
// user?.email[0]