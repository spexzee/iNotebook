import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './signup.css'

const Signup = (props) => {
    const host = 'https://backend-chi-eight-74.vercel.app';
    let navigate = useNavigate();
    const [cred, setCred] = useState({ name: '', email: '', password: '', cpassword: '' })
    const { name, email, password, cpassword } = cred; // destructuring

    // props destructring 
    const { showAlert } = props

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            window.localStorage.setItem('auth-token', json.authtoken);//save the authtoken in local storage for tempararily
            showAlert('Account Created Successfully', 'success')
            navigate('/')
        }
        else {
            showAlert('Invalid Inputs', 'danger')
        }
    }

    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }
    return (
        <div className='app__signup'>
            <div className="app__signup-container">
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                    <div className="inputs" >
                        <label htmlFor="name" className="form-label text-white">
                            Full Name
                        </label>
                        <input
                            value={name}
                            onChange={onChange}
                            type="text"
                            id="name"
                            name='name'
                            placeholder='name'
                        />
                    </div>
                    <div className="inputs" >
                        <label htmlFor="email" className="form-label text-white">
                            Email address
                        </label>
                        <input
                            value={cred.email}
                            onChange={onChange}
                            type="email"
                            id="email"
                            name='email'
                            aria-describedby="emailHelp"
                            placeholder='example@gmail.com'
                            required />
                    </div>
                    <div className="inputs" >
                        <label htmlFor="password" className="form-label text-white">
                            Password
                        </label>
                        <input
                            value={cred.password}
                            onChange={onChange}
                            type="password"
                            id="password"
                            name="password"
                            placeholder='*********'
                            required />
                    </div>
                    <div className="showPass">
                        <p><input type="checkbox" name="showPass" id="showPass" />Show Password </p>
                    </div>
                    <div className="btn">
                        <button type='submit'>Signup</button>
                    </div>
                    <div className="signUpLink">
                        <p>Already have an account ? <b onClick={() => navigate('/login')}>Login</b></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup