import React, { useContext, useEffect, useState } from 'react'
import noteContext from '../context/notes/noteContext';

const User = () => {
    const context = useContext(noteContext);
    const { user, getUser, notes, getNotes } = context;

    useEffect(() => {
        getUser();
        getNotes();
    }, [])


    return (
        // <div>
        //     <p className='text-white'>Name  : </p><p className='text-white'>{user.name}</p>
        //     <p className='text-white'>Email : </p><p className='text-white'>{user.email}</p>
        //     <p className='text-white'>Notes : </p><p className='text-white'>{notes.length}</p>
        // </div>
        <form className='container' id='container'>
            <div className="inputs" >
                <label htmlFor="name" className="form-label text-white">
                    Full Name :
                </label>
                <input
                    type="text"
                    id="name"
                    readOnly
                    value={user.name}
                />
            </div>
            <div className="inputs" >
                <label htmlFor="email" className="form-label text-white">
                    Email address :
                </label>
                <input
                    type="email"
                    id="email"
                    value={user.email}
                    readOnly
                />
            </div>
            <div className="inputs" >
                <label htmlFor="email" className="form-label text-white">
                    Notes Count :
                </label>
                <input
                    type="text"
                    id="count"
                    value={notes.length}
                    readOnly
                />
            </div>
        </form>
    )
}

export default User