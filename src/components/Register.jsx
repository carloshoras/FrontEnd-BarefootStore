import '../styles/Form.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useCurrentUser } from '../storage/CurrentUserContext.jsx';

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState()
    const { setCurrentUser } = useCurrentUser()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const urlPost = 'http://localhost:8080/api/v1/register'
        const payload = { email, password, role }

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
        <div className='form-container'>
             <h2>Register</h2>
            <form className='form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    onChange={e => setEmail(e.target.value)}
                    required />

                <label htmlFor='password'>Password:</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    onChange={e => setPassword(e.target.value)}
                    required />

                <label htmlFor='role'>Administrador</label>
                <input type='checkbox' name='role' onClick={e => setRole('on')} />

                {/* <div className='warning'></div> */}
                <div className='btn-container'>
                    <button className='btn 'type='submit'>Sign Up</button>
                    <Link to='/'><button className='btn'>Go back</button></Link>
                </div>
            </form>
        </div>
    )
}

export default Register