import { useState } from "react"
import { UsersRegistered } from "../UsersRegistered/UsersRegistered"
import '../RegistrationForm/RegistrationForm.css'
const RegistrationForm = () => {

    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [registeredUsers, setRegisteredUsers] = useState([])

    const handleChangeFullname = (usersFullname) => {
        setFullname(usersFullname)
    }

    const handleChangeEmail = (usersEmail) => {
        setEmail(usersEmail)
    }

    const handleChangePassword = (usersPassword) => {
        setPassword(usersPassword)
    }

    const handleSubmitedUser = () => {
  
        const user = {
            fullname: fullname,
            email: email,
            password: password
        }   

        setRegisteredUsers([...registeredUsers, user])

        setFullname('')
        setEmail('')
        setPassword('')
    }

    const handleRemoveUser = () => {
        setRegisteredUsers([])
    }
    return(
        <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
            <h1>Fill the input form</h1>
            <label htmlFor="fullname">Full name:</label>
            <input type="text" id="fullname" onChange={(event) => handleChangeFullname(event.target.value)} placeholder="Enter your full name"  value={fullname} />

            <label htmlFor="email">E-mail:</label>
            <input type="email"  id="email" onChange={(event) => handleChangeEmail(event.target.value)} placeholder="Enter email" value={email}/>

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" onChange={(event) => handleChangePassword(event.target.value)} placeholder="Enter password" value={password}/>

            <button className="submitButton" onClick={handleSubmitedUser}>Submit</button>

            <UsersRegistered registeredUsers={registeredUsers} handleRemoveUser={handleRemoveUser}/>
        </div>
    )
}

export default RegistrationForm