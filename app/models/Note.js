import { generateId } from "../utils/GenerateId.js"

export class Note {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.color = data.color
    this.body = data.body || ''
    this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date()
    this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date()

  }

  get createdAtDateFormmatted() {
    return this.createdAt.toLocaleDateString('en-US', {
      weekday: 'long',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      dayPeriod: 'long',
      hour: 'numeric',
      minute: '2-digit',


    })
  }

  get updatedAtFormatted() {
    return this.updatedAt.toLocaleTimeString('en-US', {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
      year: "numeric",
      hour: 'numeric',
      minute: '2-digit',
      second: "2-digit"
    })
  }

  get noteTemplate() {
    return `<div onclick="app.notesController.setActiveNote('${this.id}')" class="btn" roll="button">
              <span class="card px-2 mx-1 border-5 mt-2 mb-2 ${this.id}" style="border-color: ${this.color}">
                <p class="text-end fs-1 fw-bold text-decoration-underline">
                <span class="fw-bold"style="color: ${this.color}"><i class="mdi mdi-note-outline"></i></span>
                ${this.title}</p>
                <p class="text-end d-flex justify-content-evenly">
                  <div class="fs-4 fw-bold">Created On:
                    <span class="fw-normal fs-4">${this.createdAtDateFormmatted}</span>
                  </div>
                </p>
                <p class="fs-3 text-center">${this.body}</p>
              </span>
            </div>
    `
  }

  get activeNoteTemplate() {
    return `<div class="card right-card border border-2 border-black  shadow px-2 mx-3 mt-2">
                <p class="text-center fs-1 fw-bold text-decoration-underline">
                <span class="fw-bold"style="color: ${this.color}"><i class="mdi mdi-note-outline"></i></span>
                ${this.title}</p>
                <div class="fs-4 fw-bold mx-3">Created On:
                  <span class="fw-normal fs-5"> ${this.createdAtDateFormmatted}</span>
                </div>
                <br>
              <div class="fs-4 fw-bold mx-3">Last Updated On: 
                <span class="fw-normal fs-5">${this.updatedAtFormatted}</span>
              </div>
              <form onsubmit="app.notesController.saveActiveNote()" class="current-note mb-3">
                <span class="mb-3 px-2 mx-1 border-5 mt-2" style="border-color: ${this.color}">
                  <textarea name="body" class="form-control border-3 p-3 mp-2 fs-3 mt-3 text-center"style="border-color: ${this.color}" id="note-body"
                    rows="4">${this.body}</textarea>
                </span>
                <div class="text-end">
                  <button onclick="app.notesController.deleteNote('${this.id}')" class="btn btn-danger text-light btn-outline-dark fs-3" type="delete">
                    <i class="mdi mdi-trash-can-outline"></i> Delete
                  </button>
                  <button class="btn btn-primary btn-outline-dark text-light fs-3" type="submit">
                  <i class="mdi mdi-folder-plus"></i> Save
                  </button>
                </div>
              </form>
            </div>
    `
  }



}

