import React, {useEffect, useState} from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import FeedOptions from './FeedOptions'
import ImageIcon from '@mui/icons-material/Image';
import { CalendarViewDay, EventNote, Subscriptions } from '@mui/icons-material';
import Post from './Post'
import {db} from './firebase'
import firebase from 'firebase'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move'


export default function Feed() {
    const user = useSelector(selectUser)
    
    const [input, setinput] = useState('')
    const [posts, setposts] = useState([])
    // special hook which allows us to fire off code when the feed components loads but if pass the second argument [] it will fire once when feed is hit but will never fire again
    useEffect(() => {
         db.collection("posts")
         .orderBy("timeStamp", "desc")
         .onSnapshot((snapshot) =>
             setposts(
                 snapshot.docs.map((doc) => ({
                     id: doc.id,
                     data: doc.data()
                 }))
             )
         )
    },[]);

    const sendPost = (e) =>{
        e.preventDefault();
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setinput("")
    }


    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form action="">
                        <input value={input} onChange={e => setinput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit" >Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <FeedOptions Icon={ImageIcon} title = "Photo" color="#70B5F9"/>
                    <FeedOptions Icon={Subscriptions} title = "Video" color="#E7A33E"/>
                    <FeedOptions Icon={EventNote} title = "Event" color="#C0CBCD"/>
                    <FeedOptions Icon={CalendarViewDay} title = "Write Article" color="#7FC15E"/>
                </div>
            </div>
            {/* posts */}
            <FlipMove>
            {posts.map(({id, data: {name, description, message, photoUrl}})=>(
               <Post
                 key={id}
                 name={name}
                 description={description}
                 message={message}
                 photoUrl={photoUrl}
               />
            ))
        }
        </FlipMove>
            {/* Post */}
            {/* <Post name="Yogesh Kumar"
             description="This a test message"
             message="It is working" /> */}
        </div>
    )
}
