import React, {useState} from 'react'
import "./Login.css"
import { auth } from './firebase'
import {useDispatch} from "react-redux"
import {login} from "./features/userSlice"

function Login() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");   
const [password, setPassword] = useState("")
const [profilePic, setProfilePic] = useState("")
const dispatch = useDispatch()

const loginApp = (e) =>{
e.preventDefault();

auth.signInWithEmailAndPassword(email, password)
.then(userAuth => {
  dispatch(login({
    email: userAuth.user.email,
    uid: userAuth.user.uid,
    displayName: userAuth.user.displayName,
    profileUrl: userAuth.user.photoURL
  }))
}).catch(error => alert(error))
}    

const register = () =>{
   if(!name){
    return alert("Please enter Full Name")
   }

auth.createUserWithEmailAndPassword(email, password)
.then((userAuth) => {
  userAuth.user.updateProfile({
    displayName: name,
    photoURL: profilePic
  })
  .then(() =>{
    dispatch(login({
      email:userAuth.user.email,
      uid: userAuth.user.uid,
      displayName: name,
      photoURL: profilePic
    }))
  })
}).catch((error)=> alert(error))

}

  return (
    <div className="login">
        <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
        alt = "linkedin-img"/>

        <form>
          <input placeholder='Full name (for registeration)'
          value={name} type = "text"  onChange={(e) => setName(e.target.value)}/>    
          
          <input placeholder="Profile pic URL (optional)" 
          value={profilePic} type="text" onChange={(e) => setProfilePic(e.target.value)}/>
          
          <input placeholder='email' type="email"
          value={email} onChange={(e) => setEmail(e.target.value)}/>

          <input placeholder='Password' type="password" 
          value= {password} onChange={(e) => setPassword(e.target.value)}/>

          <button type ="submit" onClick={loginApp}>Sign In</button>
        </form>
        
        <p>Not a member?
            <span className="login__register" onClick={register}>Register Now
            </span>
        </p>

    </div>
  )
}

export default Login