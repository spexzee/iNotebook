import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

const AddNotes = () => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleClickAdd = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)

        setTimeout(() => {
            document.getElementById('title').value = '';
            document.getElementById('description').value = '';
            document.getElementById('tag').value = '';
        }, 500);
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
                    className="form-control"
                    id="description"
                    name="description"
                    rows={3}
                    defaultValue={""}
                    onChange={onChange}
                    style={{ border: '1px solid black' }}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">
                    Tag
                </label>
                <input
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