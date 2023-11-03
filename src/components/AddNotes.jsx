import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

const AddNotes = () => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleClickAdd = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)

        //this will clear input fields after adding note
        setNote({ title: "", description: "", tag: "" })
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className='container my-3'>
            <h2>Add Notes</h2>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Title
                </label>
                <input
                    value={note.title}
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    onChange={onChange}
                    style={{ border: '1px solid black' }}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <textarea
                    value={note.description}
                    className="form-control"
                    id="description"
                    name="description"
                    rows={3}
                    onChange={onChange}
                    style={{ border: '1px solid black' }}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">
                    Tag
                </label>
                <input
                    value={note.tag}
                    type="text"
                    className="form-control tags"
                    id="tag"
                    name="tag"
                    onChange={onChange}
                    style={{ border: '1px solid black' }}
                />
            </div>
            <div className="mb-3">
                <button type="button" className="btn btn-primary" onClick={handleClickAdd}>Add Note</button>
            </div>
            <br />
            <hr className='' style={{ color: 'blue', height: '10px' }} />
            <br />
            <h2>Your Notes</h2>
        </div>
    )
}

export default AddNotes