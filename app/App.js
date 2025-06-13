import { ExampleController } from './controllers/ExampleController.js';
import { NotesController } from './controllers/NotesController.js';

class App {

  ExampleController = new ExampleController() // ☑️ you can remove this - example only

  notesController = new NotesController()
}

window['app'] = new App()


