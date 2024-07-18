class TodoList{
    constructor(){
        this.tasks = [];
    }
    addTask(task){
        this.tasks.push({task, completed: false})
    }
    markTaskComplete(index){
        if(this.tasks[index]){
            this.tasks[index].completed = true;
        }
    }
    listTasks(){
        return this.tasks;
    }
}

export{ TodoList };

