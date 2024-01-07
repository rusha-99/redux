import { useState, useContext } from 'react'
//By using useContext hook we can access the data that is shared by the context provider
import UserContext from '../context/UserContext'
function Login() {
    const [username, setUsername] = useState('')    
    const [password, setPassword] = useState('')

    const {user,setUser} = useContext(UserContext)


    const handleSubmit = (e) => {
        // Prevents default behaviour of refreshing the page
        e.preventDefault()
        setUser({UserName:username,PassWord:password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
         />
        <input type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        />
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login