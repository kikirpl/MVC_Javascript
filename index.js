//  Procces Argv : Bisa mengambil input dari command
// Command : show, add, delete, update

const command = process.argv[2];
const params = process.argv.slice(3);
const TodoController = require("./controller/TodoController");

switch (command) {
  case "show":
    // console.log("command show");
    TodoController.show();
    break;
  case "add":
    // console.log("command add");
    TodoController.add(params);
    break;
  case "delete":
    // console.log("command delete");
    TodoController.delete(params);
    break;
  case "update":
    // console.log("command update");
    TodoController.update(params);
    break;
  default:
    // console.log("masukan command yang benar");
    TodoController.message("Masukan command yang benar!");
    break;
}
