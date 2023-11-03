import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const host = 'http://localhost:5000';
    let navigate = useNavigate();
    const [cred, setCred] = useState({ email: '', password: '' });

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
            navigate('/')
        }
        else {
            alert('enter valid info')
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
                    <label htmlFor="exampleInputEmail1" className="form-label">
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
                    <label htmlFor="exampleInputPassword1" className="form-label">
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
            </form>
        </>

    )
}

export default Login