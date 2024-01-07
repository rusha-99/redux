import { useState } from 'react'

function Login() {
    const [username, setUsername] = useState('')    
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        // Prevents default behaviour of refreshing the page
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