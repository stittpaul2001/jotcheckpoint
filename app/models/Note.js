import { generateId } from "../utils/GenerateId.js"

export class Note {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.color = data.color
    this.body = data.body
    this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date()
    this.updatedAt = data.updatedAt
    this.totalNotes = data.totalNotes

  }

  get noteTemplate() {
    return `
    <div class="card note-card shadow note-border ${this.id}" style="border-color: ${this.color}">
    <div class="text-start px-2 mx-2">${this.title}</div>
    <hr>
  <div class="text-end px-2">CreatedOn: ${this.createdAt}</div>
  <p class="fs-3">${this.body}</p>
            </div>
    `
  }


}

