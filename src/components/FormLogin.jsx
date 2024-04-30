import '../styles/Form.css'
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import { useCurrentUser } from '../storage/CurrentUserContext.jsx';

function FormLogin() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { setCurrentUser } = useCurrentUser()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const urlPost = 'http://localhost:8080/api/v1/login'
        const payload = { email, password }

        try {
            const response = await fetch(urlPost, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
            const data = await response.json()
            setCurrentUser(data)
            navigate('/')
        }
        catch (error) { console.log(error) }
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='formItem'>
                <label htmlFor='emailId'>Email:</label>
                <input
                    type='email'
                    id='emailId'
                    name='email'
                    onChange={e => setEmail(e.target.value)}
                    required />
            </div>

            <div className='formItem'>
                <label htmlFor='passId'>Contraseña:</label>
                <input
                    type='password'
                    id='passId'
                    name='password'
                    onChange={e => setPassword(e.target.value)}
                    required />
            </div>

            <div className='warning'></div>
            <div className='btn-container'>
                <button className='formBtn' type='submit'>Log In</button>
                <Link to='/'><button>Go back</button></Link>
            </div>
        </form>
    )
}

export default FormLogin