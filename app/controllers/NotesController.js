import { AppState } from "../AppState.js"
import { notesservice } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";

export class NotesController {
  constructor() {
    // console.log("Notes Controller is loaded!")
    this.drawNotesList()

    AppState.on('activeNote', this.drawActiveNote)
    AppState.on('Notes', this.drawNotesList)
    notesservice.showNotes()
    this.drawActiveNote()

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
    const activeNoteElem = document.getElementById('active-note')
    if (activeNote) {
      const activeNoteContent = activeNote.activeNoteTemplate
      activeNoteElem.innerHTML = activeNoteContent
    } else {
      activeNoteElem.innerHTML = ''
    }

  }

  setActiveNote(noteId) {
    console.log('set active note!', noteId)
    notesservice.setActiveNote(noteId)

  }

  createNote() {
    event.preventDefault()
    const noteForm = event.target
    const noteData = getFormData(noteForm)
    // console.log('submitting', noteForm, noteData)
    notesservice.createNote(noteData)
    this.drawNotesList()
  }

  saveActiveNote() {
    event.preventDefault()
    // console.log('saving your current note!')
    const form = event.target
    // @ts-ignore
    const newTextAreaBody = form.body.value
    notesservice.saveActiveNote(newTextAreaBody)



  }

  deleteNote(noteId) {
    const confirmed = window.confirm(`Are you positive that you want to delete this note ${AppState.activeNote.title}?`)
    if (!confirmed) { return }
    console.log('deleting note with the id of', + noteId)



    notesservice.deleteNote(noteId)

  }


}