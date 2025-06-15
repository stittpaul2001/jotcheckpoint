import { Note } from './models/Note.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {



  Notes = [

    new Note({
      id: '',
      title: 'Note 1',
      color: 'Yellow',
      body: "This is Note 1's body, with it's small text-content. Saying, hello friend!",
      createdAt: '',
      updatedAt: '',
    }),
    new Note({
      id: '',
      title: 'Note 2',
      color: 'Blue',
      body: "This is Note 2's body, with its medium size text content. Explaining size doesn't matter.",
      createdAt: '',
      updatedAt: '',
    }),
    new Note({
      id: '',
      title: 'Note 3',
      color: 'Green',
      body: "This is Note 3's body, with it's bigger, that has a lot of context to it's body. Explaining that it is super duper long!",
      createdAt: '',
      updatedAt: '',
    })
  ]
  /**
   * @type {Note}
   *
   */
  activeNote = null
}

export const AppState = createObservableProxy(new ObservableAppState())