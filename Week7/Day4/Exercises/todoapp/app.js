import { TodoList } from "./todo.js";

const myTodoList = new TodoList();

myTodoList.addTask('Finish work');
myTodoList.addTask('Grocery Shopping');
myTodoList.addTask('Clean house');

myTodoList.markTaskComplete(0);
myTodoList.markTaskComplete(2);

console.log(myTodoList.listTasks());