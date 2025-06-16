import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"
import { loadState, saveState } from "../utils/Store.js"


class NotesService {
  deleteNote(noteId) {
    const notes = AppState.Notes
    const noteIndex = notes.findIndex(note => note.id == noteId)
    console.log('index to delete note is', + noteIndex)
    AppState.Notes.splice(noteIndex, 1)
    // AppState.activeNote = null
    this.saveNotes()
    // window.location.reload() 
  }

  createNote(noteData) {
    const notes = new Note(noteData)
    AppState.Notes.unshift(notes)

    this.saveNotes()
  }

  setActiveNote(noteId) {
    const pickNote = AppState.Notes.find(note => note.id == noteId)

    AppState.activeNote = pickNote
    // console.log(AppState)
  }

  saveActiveNote(newTextAreaBody) {
    const activeNote = AppState.activeNote
    activeNote.body = newTextAreaBody
    activeNote.updatedAt = new Date()
    // console.log(AppState)
    this.saveNotes()
    AppState.emit('activeNote', 'note')


  }
  saveNotes() {
    const notes = AppState.Notes
    saveState('notes', AppState.Notes)
    console.log('note was saved!!!')

  }
  showNotes() {
    const notes = loadState('notes', [Note])
    console.log('showNotes', notes)
    AppState.Notes = notes
  }

}

export const notesservice = new NotesService()