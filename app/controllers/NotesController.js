import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js";

export class NotesController {
  constructor() {
    // console.log("Notes Controller is loaded!")
    this.drawNotes()
  }

  drawNotes() {
    const notes = AppState.Note
    let noteContent = ''
    notes.forEach(note => noteContent += note.noteTemplate)
    const notesElm = document.getElementById('myNotes')
    notesElm.innerHTML = noteContent
    console.log(notes)
  }



}