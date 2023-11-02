import Notes from "./Notes"

const Home = () => {

    return (
        <div className='container my-3'>
            <h2>Add Notes</h2>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Note Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    style={{ border: '1px solid black' }}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Description
                </label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={""}
                    style={{ border: '1px solid black' }}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Note Tags
                </label>
                <input
                    type="text"
                    className="form-control tags"
                    id="exampleFormControlInput1"
                    style={{ border: '1px solid black' }}
                />
            </div>
            <br />
            <hr className='' style={{ color: 'blue', height: '10px' }} />
            <br />
            <h2>Your Notes</h2>
            <Notes />

        </div>
    )
}

export default Home