import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "6540baac5f2422f6cf242499",
            "user": "6540a7b74c900f90cefca64d",
            "title": "hi bro updated",
            "description": "my second desc updated",
            "tag": "rty",
            "date": "2023-10-31T08:28:28.337Z",
            "__v": 0
        },
        {
            "_id": "6540baeea773f5787693e031",
            "user": "6540a7b74c900f90cefca64d",
            "title": "myFirstNote",
            "description": "myDesc",
            "tag": "",
            "date": "2023-10-31T08:29:34.347Z",
            "__v": 0
        },
        {
            "_id": "6540baf9a773f5787693e036",
            "user": "6540a7b74c900f90cefca64d",
            "title": "myFirstNote",
            "description": "myDesc",
            "tag": "",
            "date": "2023-10-31T08:29:45.044Z",
            "__v": 0
        },
        {
            "_id": "6540bafca773f5787693e039",
            "user": "6540a7b74c900f90cefca64d",
            "title": "myFirstNote",
            "description": "myDesc",
            "tag": "",
            "date": "2023-10-31T08:29:48.432Z",
            "__v": 0
        },
        {
            "_id": "6540bb03a773f5787693e03c",
            "user": "6540a7b74c900f90cefca64d",
            "title": "myFirstNote",
            "description": "myDesc",
            "tag": "",
            "date": "2023-10-31T08:29:55.893Z",
            "__v": 0
        },
        {
            "_id": "6540c16adab22477872087ff",
            "user": "6540a7b74c900f90cefca64d",
            "title": "hii",
            "description": "hytfugjkbn",
            "tag": "",
            "date": "2023-10-31T08:57:14.675Z",
            "__v": 0
        }
    ]
    const [notes, setnotes] = useState(notesInitial)

    return (
        <noteContext.Provider value={{ notes, setnotes }}>
            {props.children}
        </noteContext.Provider>
    )

}
export default NoteState;