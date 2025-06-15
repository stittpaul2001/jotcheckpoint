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

  get noteTemplate() {
    return `<div onclick="app.notesController.setActiveNote('${this.id}')" class="btn" roll="button">
              <span class="card px-2 mx-1 border-5 mt-2 mb-2 ${this.id}" style="border-color: ${this.color}">
                <p class="text-end fs-1 fw-bold text-decoration-underline">
                <span class="fw-bold"style="color: ${this.color}"><i class="mdi mdi-note-outline"></i></span>
                ${this.title}</p>
                <p class="text-end d-flex justify-content-evenly">
                  <div class="fs-4 fw-bold">Created On:
                    <span class="fw-normal fs-4">${this.createdAt}</span>
                  </div>
                </p>
                <p class="fs-3 text-center">${this.body}</p>
              </span>
            </div>
    `
  }

  get activeNoteTemplate() {
    return `<div class="card right-card shadow px-2 mx-3">
              <p class="text-center fw-bold fs-1 text-decoration-underline mt-3">${this.title}</p>
                <div class="fs-4 fw-bold mx-3">Created On:
                  <span class="fw-normal fs-5"> ${this.createdAt}</span>
                </div>
                <br>
              <div class="fs-4 fw-bold mx-3">Last Updated On: 
                <span class="fw-normal fs-5">${this.updatedAt}</span>
              </div>
              <form onsubmit="app.notesController.saveCurrentNote()" class="current-note mb-3">
                <div class="mb-3">
                  <textarea name="body" class="form-control border border-thick border-warning p-3 mp-2 fs-3 mt-3" id="textRegion"
                    rows="3">${this.body}</textarea>
                </div>
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

