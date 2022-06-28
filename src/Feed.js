import React, {useState, useEffect} from 'react'
import CreateIcon from '@mui/icons-material/Create';
import "./Feed.css"
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Post from "./Post"
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';


function Feed() {
  const user = useSelector(selectUser);
const [posts, setPosts] = useState([]);
const [input, setInput] = useState("")

useEffect (() =>{
  db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot)=>
  setPosts(
    snapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    }))
  )
  )
}, [])

const sendPost = (e) =>{
  e.preventDefault();

  db.collection("posts").add({
    name:user.displayName ,
    description: user.email,
    message: input,
    photoUrl:user.photoUrl || "",
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });
  setInput("");
}

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon/>
          <form>
            <input onChange={(e) =>setInput(e.target.value)} value={input} type="text"/>
            <button onClick = {sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className='feed_inputOptions'>
           <InputOption Icon={ImageIcon} title="photo" color="#70b5f9"/>
           <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e"/>
           <InputOption Icon={BusinessCenterIcon} title="Event" color="#c0cbcd"/>
           <InputOption Icon={NewspaperIcon} title="Write article" color="#7fc15e"/>
        </div>
      </div>

       {posts.map(({id, data:{name, description, message,photoUrl}})=>(
        <Post
        key={id} name={name} description={description}
        message={message} photoUrl={photoUrl}/>
       ))}

    </div>
  )
}

export default Feed;