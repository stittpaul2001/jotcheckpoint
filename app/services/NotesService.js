import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"
import { saveState } from "../utils/Store.js"


class NotesService {

  setActiveNote(noteId) {
    const pickNote = AppState.Notes.find(note => note.id == noteId)

    AppState.activeNote = pickNote
  }


}

export const notesservice = new NotesService()