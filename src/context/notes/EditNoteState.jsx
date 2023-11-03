import noteContext from "./noteContext";


const EditNoteState = () => {
    const updateNote = () => {

    }
    return (
        <noteContext.Provider value={{ updateNote }}>

        </noteContext.Provider>
    )
}
export default EditNoteState;