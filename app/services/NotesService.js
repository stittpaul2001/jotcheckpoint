import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"
import { loadState, saveState } from "../utils/Store.js"


class NotesService {
  createNote(noteData) {
    const notes = new Note(noteData)
    AppState.Notes.unshift(notes)

    this.saveNotes()
  }

  setActiveNote(noteId) {
    const pickNote = AppState.Notes.find(note => note.id == noteId)

    AppState.activeNote = pickNote
  }

  saveNotes() {
    const notes = AppState.Notes
    saveState('notes', notes)
  }
  showNotes() {
    const notes = loadState('notes', [Note])
    console.log('showNotes', notes)
    AppState.Notes = notes
  }

}

export const notesservice = new NotesService()