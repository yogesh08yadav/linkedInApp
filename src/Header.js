import React from 'react'
import  './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import { BusinessCenter, Chat, Home, NotificationAdd } from '@mui/icons-material';
import { SupervisorAccount } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';


export default function Header() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  const logOutOfApp = () =>{
     dispatch(logout())
     auth.signOut();
  }
    return (
        <div className="header">
            {/* header left */}
            <div className="header__left">
              <img 
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
              alt="" />

              <div className="header__search">
                  <SearchIcon/>
                  <input placeholder="Search" type="text" />
              </div>
            </div>
            {/* header right */}
            <div className="header__right">
            <HeaderOption Icon={Home} title="Home"/>
            <HeaderOption Icon={SupervisorAccount} title="My Account"/>
            <HeaderOption Icon={BusinessCenter} title="Jobs"/>
            <HeaderOption Icon={Chat} title="Messaging"/>
            <HeaderOption Icon={NotificationAdd} title="Notifications"/>
            <HeaderOption avatar={true}
              title = "me"
              onClick={logOutOfApp}/>
            

            </div>
        </div>
    )
}
