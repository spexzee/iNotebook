import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Login = (props) => {
    const host = 'http://localhost:5000';
    let navigate = useNavigate();
    const [cred, setCred] = useState({ email: '', password: '' });

    // props destructring 
    const { showAlert } = props

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: cred.email, password: cred.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            window.localStorage.setItem('auth-token', json.authtoken);//save the authtoken in local storage for tempararily
            showAlert('LogedIn Successfully', 'success')
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
        <>
            <form onSubmit={handleSubmit} className='container border border-black p-4 mt-4'>
                <div className="mb-3 ">
                    <h2 className='mb-4'>Log In</h2>
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        style={{ border: '1px solid black' }}
                        value={cred.email}
                        onChange={onChange}
                        type="email"
                        className="form-control"
                        id="email"
                        name='email'
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        style={{ border: '1px solid black' }}
                        value={cred.password}
                        onChange={onChange}
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <p className='my-2'>Dont have an account ? <Link to='/signup'>Sign Up</Link></p>
            </form>
        </>

    )
}

export default Login