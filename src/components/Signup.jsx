import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'

const Signup = (props) => {
    const host = 'http://localhost:5000';
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

        <>
            <div className="">
                <form onSubmit={handleSubmit} className='container border border-black p-4 mt-4'>
                    <h2 className='mb-4'>Sign Up</h2>
                    <div className="mb-3 ">
                        <label htmlFor="name" className="form-label">
                            Full Name
                        </label>
                        <input
                            style={{ border: '1px solid black' }}
                            value={name}
                            onChange={onChange}
                            type="text"
                            className="form-control"
                            id="name"
                            name='name'
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            style={{ border: '1px solid black' }}
                            value={email}
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
                            value={password}
                            onChange={onChange}
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">
                            Confirm Password
                        </label>
                        <input
                            style={{ border: '1px solid black' }}
                            value={cpassword}
                            onChange={onChange}
                            type="password"
                            className="form-control"
                            id="cpassword"
                            name="cpassword"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default Signup