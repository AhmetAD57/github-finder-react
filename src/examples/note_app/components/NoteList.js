import React, {useContext} from 'react'
import Note from './Note'
import NotesContext from '../context/notes-context'

const NoteList = () => {
    //Değerler çağırılırken kullanılıyor.
    const{notes, dispatch}= useContext(NotesContext);

    const removeNote = (title) => {
        dispatch({
            type: 'REMOVE_NOTE',
            title
        })
    }

    return (
        notes.map((note) => (
            <Note key={note.title} note={note} removeNote={removeNote} />
       ))
    )
}

export default NoteList