import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js";
import { notesservice } from "../services/NotesService.js";

export class NotesController {
  constructor() {
    // console.log("Notes Controller is loaded!")
    this.drawNotesList()

    AppState.on('activeNote', this.drawActiveNote)
  }

  drawNotesList() {
    const notes = AppState.Notes
    let noteContent = ''
    notes.forEach(note => noteContent += note.noteTemplate)
    const notesElm = document.getElementById('myNotes')
    notesElm.innerHTML = noteContent
    console.log(notes)
    const noteCountElm = document.getElementById('Jot-Count')
    noteCountElm.innerText = notes.length.toString()
  }

  drawActiveNote() {
    const activeNote = AppState.activeNote
    const activeNoteContent = activeNote.activeNoteTemplate
    const activeNoteElem = document.getElementById('active-note')
    activeNoteElem.innerHTML = activeNoteContent
  }

  setActiveNote(noteId) {
    console.log('set active note!', noteId)
    notesservice.setActiveNote(noteId)

  }



}