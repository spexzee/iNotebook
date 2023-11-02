import React from 'react';

const NotesItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3 my-3">
      <div className="card" style={{ width: "18rem", boxShadow: '1px 1px 5px rgba(0,0,0,0.9)' }}>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary" style={{ opacity: '0.5' }}>{note.tag === '' ? '#genral' : `#${note.tag}`}</h6>
          <p className="card-text">
            {note.description}
          </p>
        </div>
      </div>
    </div>

  )
}

export default NotesItem