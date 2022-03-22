import React, {useState} from 'react'
import { auth } from './firebase'
import './Login.css'
import {login} from './features/userSlice'
import { useDispatch } from 'react-redux'

export default function Login() {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [name, setname] = useState('')
    const [profilePic, setprofilePic] = useState('')
    const dispatch = useDispatch();

    const loginToApp = (e) =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth =>{
            dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
            }))
        }).catch(error => alert(error))
    }
    const register = () =>{
         if (!name){
             return alert("Please enter a full name!")
         }
         auth.
         createUserWithEmailAndPassword(email, password)
         .then((userAuth) =>{
             userAuth.user
             .updateProfile({
                 displayName: name,
                 photoUrl: profilePic,
             })
             .then(() => {
                 dispatch(
                     login({
                     email: userAuth.user.email,
                     uid: userAuth.user.uid,
                     displayName: name,
                     photoUrl: profilePic,
                 }));
             });
         })
         .catch((error) => alert(error));

    };
    return (
        <div className="login">
            <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
             alt="" />

             <form action="">
                 <input
                 value = {name}
                 onChange={(e) => setname(e.target.value)}
                  placeholder="Full name (required if registering)" type="text" />
                 <input 
                 value={profilePic}
                 onChange={(e) => setprofilePic(e.target.value)}
                 placeholder="Profile pic url (Optional)" type="text" />
                 <input 
                 value={email} 
                 onChange={(e) => setemail(e.target.value)}
                 placeholder='Enter the email' 
                 type="email" />
                 <input
                 value={password}  
                 onChange={(e) => setpassword(e.target.value)}
                 placeholder='Enter the password' type="password" />
                 <button type="submit" onClick={loginToApp}>Sign In</button>
             </form>
             <p>Not a member?{" "}
             <span className="login__register" onClick={register}>Register Now</span>
             </p>
        </div>
    )
}
