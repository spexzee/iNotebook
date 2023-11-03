import React, { useContext, useEffect, useRef, useState } from 'react'
import NotesItem from './NotesItem';
import noteContext from '../context/notes/noteContext';
import AddNotes from './AddNotes';



const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

  useEffect(() => {
    getNotes()
  }, [])

  const ref = useRef(null)
  const refClose = useRef(null)

  const handleClickAdd = () => {
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refClose.current.click()
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  const updateNote = (currentNote) => {
    ref.current.click()
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  }



  return (
    <>
      <AddNotes />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="etitle" className="form-label">
                  Title
                </label>
                <input
                  value={note.etitle}
                  type="text"
                  className="form-control"
                  id="etitle"
                  name="etitle"
                  onChange={onChange}
                  style={{ border: '1px solid black' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edescription" className="form-label">
                  Description
                </label>
                <textarea
                  value={note.edescription}
                  className="form-control"
                  id="edescription"
                  name="edescription"
                  rows={3}
                  onChange={onChange}
                  style={{ border: '1px solid black' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="etag" className="form-label">
                  Tag
                </label>
                <input
                  value={note.etag}
                  type="text"
                  className="form-control tags"
                  id="etag"
                  name="etag"
                  onChange={onChange}
                  style={{ border: '1px solid black' }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClickAdd}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1 className='text-center'>{notes.length === 0 && ' Please Add Notes to Display here!!'}</h1>
        {
          Array.isArray(notes) && notes.map((note) => {
            return <NotesItem key={note._id} updateNote={updateNote} note={note} />
          })
        }
      </div>
    </>
  )
}

export default Notes