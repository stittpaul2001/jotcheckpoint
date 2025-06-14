import { generateId } from "../utils/GenerateId.js"

export class Note {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.color = data.color
    this.body = data.body
    this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date()
    this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date()
    this.totalNotes = data.totalNotes

  }

  get noteTemplate() {
    return `<div onclick="app.notesController.setActiveNote('${this.id}')" class="btn" roll="button">
              <div class="card ${this.id}" style="border-color: ${this.color}">
                <div class="text-start px-2 mx-2 fs-1 fw-bold">
                <span class="fw-bold"style="color: ${this.color}"><i class="mdi mdi-note-outline"></i></span>
                ${this.title}</div>
                <hr>
                <div class="text-end px-2 fs-4">CreatedOn: ${this.createdAt}</div>
                <p class="fs-3 text-start">${this.body}</p>
              </div>
            </div>
    `
  }

  get activeNoteTemplate() {
    return `<h1 class="text-center">${this.title}</h1>
          <hr>
          <div class="fs-2">Created On: ${this.createdAt}</div>
          <div class="fs-2">Last Updated On: ${this.updatedAt}</div>
          <div class="text-end">
            <button class="btn btn-danger" type="delete">
              <i class="mdi mdi-trash-can-outline"></i> Delete
            </button>
            <button class="btn btn-primary text-light" type="submit">
              <i class="mdi mdi-folder-plus"></i> Save
            </button>
          </div>
          <div class="current-note mb-3">
            <div class="mb-3">
              <textarea class="form-control border border-thick border-warning p-3 mp-2 fs-3 mt-3" id="textRegion"
                rows="3">${this.body}</textarea>
            </div>
          </div>
    `
  }

}

