import { Note } from './models/Note.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  Note = [

    new Note({
      id: '',
      title: 'note1',
      color: 'Yellow',
      body: "this is note1's body.",
      createdAt: '',
      updatedAt: '',
    }),
    new Note({
      id: '',
      title: 'note2',
      color: 'Blue',
      body: "this is note2's body, with its blue text.",
      createdAt: '',
      updatedAt: '',
    }),
    new Note({
      id: '',
      title: 'note3',
      color: 'Green',
      body: "this is note3's body, with it's bold body.",
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