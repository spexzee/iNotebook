import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    const host = 'http://localhost:5000'
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);

    //get Notes note
    const getNotes = async (title, description, tag) => {
        // api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU0MGE3Yjc0YzkwMGY5MGNlZmNhNjRkIn0sImlhdCI6MTY5ODczNjA5MX0.4F-Vkvx1CZfLRyrK9wF7wDFlfe7-9OMI52w5XY-5cwY'
            }
        });
        const json = await response.json()
        setNotes(json)
    }

    //add note
    const addNote = async (title, description, tag) => {
        // api call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU0MGE3Yjc0YzkwMGY5MGNlZmNhNjRkIn0sImlhdCI6MTY5ODczNjA5MX0.4F-Vkvx1CZfLRyrK9wF7wDFlfe7-9OMI52w5XY-5cwY'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json()

        //add note(logic)
        const note = {
            "_id": "6540c16adab22477872087ff",
            "user": "6540a7b74c900f90cefca64d",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-10-31T08:57:14.675Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }

    //delete note
    const deleteNote = async (id) => {
        // api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU0MGE3Yjc0YzkwMGY5MGNlZmNhNjRkIn0sImlhdCI6MTY5ODczNjA5MX0.4F-Vkvx1CZfLRyrK9wF7wDFlfe7-9OMI52w5XY-5cwY'
            }
        });
        const json = response.json()

        //delete note(logic)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    //edit note
    const editNote = async (id, title, description, tag) => {
        //api call
        const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU0MGE3Yjc0YzkwMGY5MGNlZmNhNjRkIn0sImlhdCI6MTY5ODczNjA5MX0.4F-Vkvx1CZfLRyrK9wF7wDFlfe7-9OMI52w5XY-5cwY'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json()

        //edit note (logic)
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    return (
        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </noteContext.Provider>
    )

}
export default NoteState;